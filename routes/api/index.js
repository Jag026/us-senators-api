const express = require('express');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const jsonQuery = require('json-query');
const senators = require('../../senators.json');
const router = express.Router();

router.get('/senators', asyncHandler(async (req, res) => {
    const usSenators = [];
     senators['objects'].forEach(senator => {
         const fullName = senator['person']['firstname'] + ' ' + senator['person']['lastname'];
        usSenators.push(fullName)
    })

    res.json({ "usSenators": usSenators });
}));

router.get('/senators/details/:name', asyncHandler(async (req, res) => {
    const name = req.params.name;
    const senatorDetails = {};
    senators['objects'].forEach(senator => {
        if (senator['person']['firstname'].toLocaleLowerCase() + senator['person']['lastname'] === name) {
            senatorDetails['state'] = senator['state'];
            senatorDetails['party'] = senator['party'];
            senatorDetails['nickname'] = senator['person']['nickname'];
            senatorDetails['phone'] = senator['phone'];
            senatorDetails['website'] = senator['website'];
            res.json({ 'details': senatorDetails });
        }
    })
    res.json({});
}));


//tests router
router.post('/test', function (req, res) {
    console.log(senators);
    res.json({ requestBody: req.body });
});

module.exports = router;