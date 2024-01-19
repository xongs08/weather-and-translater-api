import express from 'express';
import weather from '../services/weather';
import translater from '../services/translater';

const router = express.Router();

router.use(express.json());

export const checkUndefined = (json_: any) => {
    let status = 200;

    Object.entries(json_).forEach(([key, value]) => {
        if (value === undefined) {
            status = 403;
        }
    });

    return status;
};

router.get('/weather/:region', async (req, res) => {
    const weatherData = await weather(req.params.region);

    const weatherStatus = checkUndefined(weatherData);
    if (weatherStatus === 403) {
        res.sendStatus(403);
    } else {
        res.json(weatherData);
    }
});

router.get('/translater/:sl/:tl/:text', async (req, res) => {
    const translatedText = await translater(req.params.sl, req.params.tl, req.params.text);
    if (translatedText === undefined) {
        res.sendStatus(403);
    } else {
        res.json({ translatedText: translatedText });
    }
});

module.exports = router;
