const puppeteer = require('puppeteer');

const createNewPost = async (req, res) => {
    const { url } = req.body;
    try {
        // document.querySelector("#main-content > div.ssrcss-6gq9s0-Wrap.e42f8510 > div > div.ssrcss-rgov1k-MainColumn.e1sbfw0p0 > article")
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)
        const title = await page.title()
        const data = await page.evaluate(() => {
            const article = document.querySelectorAll("#main-content > div > div > div > article p")
            // const content = Object.entries(article.querySelectorAll('p'))
            console.log(article)
            return article
        })
        console.log(data)
        await browser.close()
        res.status(201).json({
            "title": title,
            "data": data
        })
    } catch (e) {
        res.status(500).json(`there is some error... ${e}`)
    }
}

module.exports =  {
    createNewPost,
}