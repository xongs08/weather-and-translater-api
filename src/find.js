const find = async (page, selector) => {
    const element = await page.$eval(selector, el => el.textContent);
    if (!element) {
        return null;
    }
    return element;
};

module.exports = find;
