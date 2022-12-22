const express = require('express');
const {generateImage} = require('../controllers/openaiController');
const router = express.Router();

router.post('/genrerateimage', generateImage);
module.exports = router;