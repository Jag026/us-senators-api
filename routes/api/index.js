const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;