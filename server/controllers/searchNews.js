const puppeteer = require('puppeteer');

const search = async url => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const title = await page.title()
    const content = await page.evaluate(() => {
        const contentArr = []
        document.querySelector('#main-content > div > div > div > article')
                .querySelectorAll('p')
                .forEach( p => contentArr.push(p.innerText))
        return contentArr.join(' ').replace(/[\"]/g,'')
    })
    await browser.close()
    return {
        "title": title,
        "content": content
    }
}

module.exports = search

