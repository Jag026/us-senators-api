const express = require('express');
const asyncHandler = require('express-async-handler');
const fs = require('fs')
const senators = require('../../senators.json')
const router = express.Router();

router.get('/senators', asyncHandler(async (req, res) => {
    const usSenators = [];
     senators['objects'].forEach(senator => {
         const fullName = senator['person']['firstname'] + ' ' + senator['person']['lastname'];
        usSenators.push(fullName)
    })
    console.log(senators)
    res.send({ "usSenators": [usSenators] });
}));

//tests router
router.post('/test', function (req, res) {
    console.log(senators);
    res.json({ requestBody: req.body });
});

module.exports = router;