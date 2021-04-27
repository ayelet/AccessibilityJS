const puppeteer = require('puppeteer');

const createNewPost = async (req, res) => {
    const { url } = req.body;
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)
        const title = await page.title()
        const content = await page.evaluate(() => {
            const contentData = document.querySelector('#main-content > div > div > div > article').querySelectorAll('p')
            const contentArr = []
            contentData.forEach( p => contentArr.push(p.innerText))
            const contentStr = contentArr.join(' ')
            return contentStr
        })
        await browser.close()
        if (!content){
            res.status(500).json('content not found')
        }
        res.status(201).json({
            "title": title,
            "content": content
        })
    } catch (e) {
        res.status(500).json(`there is some error... ${e}`)
    }
}

module.exports =  {
    createNewPost,
}