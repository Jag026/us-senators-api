const express = require('express');
const apiRouter = require('./api');

const router = express.Router();
router.use('/api', apiRouter);


router.get('/hello/world', function (req, res) {
    res.send('Hello World!');
});

module.exports = router;