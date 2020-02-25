const express = require('express');
const campController = require('../controllers/campController');

const camp = express.Router();

camp.post('/query',
  campController.query,
  (req, res) => {
    // console.log('campjs line 9')
    res.status(200).json(res.locals.campgrounds)
  }
)

module.exports = camp;