const puppeteer = require('puppeteer');
const find = require('./find');

const translater = async (sl, tl, text) => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(`https://translate.google.com/?sl=${sl}&tl=${tl}&text=${text}&op=translate`);
        
        await page.waitForSelector('.ryNqvb', { timeout: 10000 });
        
        const translatedText = await find(page, '.ryNqvb');

        await browser.close();

        return translatedText;
    } catch(err) {
        await browser.close();
        console.log(err);
        return undefined;
    }
};

module.exports = translater;
