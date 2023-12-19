const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('<h1 style="text-align: center; color:#00B7FF; font-size: 50px;">Movies API 🚀</h1>')
});

module.exports = router;