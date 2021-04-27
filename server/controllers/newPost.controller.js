const puppeteer = require('puppeteer');

const createNewPost = async (req, res) => {
    const { url } = req.body;
    try {
        // document.querySelector("#main-content > div.ssrcss-6gq9s0-Wrap.e42f8510 > div > div.ssrcss-rgov1k-MainColumn.e1sbfw0p0 > article")
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)
        const title = await page.title()
        const content = await page.evaluate(() => {
            const contentData = document.querySelector('#main-content > div > div > div > article').querySelectorAll('p')
            const contentArr = []
            contentData.forEach( p => contentArr.push(p.innerText))
            return contentArr.join(' ')
        })
        console.log(content)
        await browser.close()
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