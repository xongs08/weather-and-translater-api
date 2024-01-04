const express = require('express');
const weather = require('./weather');
const translater = require('./translater');

const router = express();

router.use(express.json());

router.get('/weather/:region', async (req, res) => {
    const results = await weather(req.params.region);
    if(!results) {
        res.sendStatus(403);
    }
    res.json(results);
});

router.get('/translater/:sl/:tl/:text', async (req, res) => {
    const result = await translater(req.params.sl, req.params.tl, req.params.text);
    if (!result) {
        res.sendStatus(403);
    }
    res.json({ translatedText: result });
});

module.exports = router;
