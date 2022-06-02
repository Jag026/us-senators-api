const express = require('express');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
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

router.get('/senators/:name', asyncHandler(async (req, res) => {
    const name = req.params.name;
    const senatorDetails = {};
    senators['objects'].forEach(senator => {
        if (senator['person']['firstname'].toLocaleLowerCase() + senator['person']['lastname'] === name) {
            for (const property in senator) {
                senatorDetails[property] = senator[property];
            }
            res.json({ 'details': senatorDetails });
        }
    })
    res.json({});
}));

router.get('/senators/:name/:attribute', asyncHandler(async (req, res) => {
    const name = req.params.name;
    const senatorDetails = {};
    const attribute = req.params.attribute;

    senators['objects'].forEach(senator => {
        if (senator['person']['firstname'].toLocaleLowerCase() + senator['person']['lastname'] === name) {
            for (const property in senator) {
                senatorDetails[property] = senator[property];
            }
            console.log(senatorDetails[attribute])
            res.json(senatorDetails[attribute]);
        }
    })
    res.json({});
}));

router.get('/states/:state', asyncHandler(async (req, res) => {
    const state = req.params.state;
    const senatorsByState = [];

    senators['objects'].forEach(senator => {
        if (senator['state'] === state.toUpperCase()) {
            senatorsByState.push(senator['person']['firstname'] + ' ' + senator['person']['lastname']); 
        }
    })
    res.json( senatorsByState );
}));

router.get('/party/:party', asyncHandler(async (req, res) => {
    const party = req.params.party[0].toUpperCase() + req.params.party.slice(1, -1);
    console.log(party);
    const senatorsByParty = [];

    senators['objects'].forEach(senator => {
        if (senator['party'] === party) {
            senatorsByParty.push(senator['person']['firstname'] + ' ' + senator['person']['lastname'] + `(${senator['state']})`);
        }
    })
    res.json(senatorsByParty);
}));

module.exports = router;