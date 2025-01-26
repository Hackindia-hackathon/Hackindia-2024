const express = require('express');
const MetaData = require('../models/MetaData');
const router = express.Router();

router.post('/upload', async (req, res) => {

    const { desc, lattitude, longitude, numberTrees, AreaUnderSustainablePractices, Watersaved, PollutionReduced,Areaofmangroves } = req.body;

    try {
        const metaData = new MetaData({

            desc,
            lattitude,
            longitude,
            numberTrees,
            AreaUnderSustainablePractices,
            Watersaved,
            PollutionReduced,
            Areaofmangroves
        });

        const savedMetaData = await metaData.save();
        res.status(200).send({
            success: true,
            metaData: savedMetaData
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).send({
            success: false,
            error: e
        });
    }
});

module.exports = router;