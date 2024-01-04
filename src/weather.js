const puppeteer = require('puppeteer');
const find = require('./find');
const translater = require('./translater');

const weather = async (region) => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(`https://www.google.com/search?q=weather+${region}`);
        
        const container = await find(page, '#wob_wc');
        if (!container) {
            return null;
        }

        const temperature = await find(page, '#wob_tm');
        const rain = await find(page, '#wob_pp');
        const humidity = await find(page, '#wob_hm');
        const wind = await find(page, '#wob_ws');
        
        const climatePTBR = await find(page, '#wob_dc');
        const climate = await translater('pt', 'en', climatePTBR)

        const results = {
            temperature: `${temperature}°C`,
            rain: rain,
            humidity: humidity,
            wind: wind,
            climate: climate
        };

        await browser.close();

        return results;
    } catch(err) {
        await browser.close();
        console.log(err);
        return null;
    }
};

module.exports = weather;

// (async () => {
//     const resp = await weather('sorocaba');
//     console.log(resp);
// })();
