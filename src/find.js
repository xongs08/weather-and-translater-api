const find = async (page, selector) => {
    try {
        const element = await page.$eval(selector, el => el.textContent);
        return element;
    } catch (err) {
        return undefined;
    }
};

module.exports = find;
