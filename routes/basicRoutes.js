const express = require('express');
const { basicFunction } = require('../controllers/basicController');

const router = express.Router();

router.get('/basic', basicFunction)


module.exports = router;