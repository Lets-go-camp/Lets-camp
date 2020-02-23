const express = require('express');
const campController = require('../controllers/campController');

const camp = express.Router();

camp.post = ('/query',
  campController.query,
  (req, res) => {
    console.log('campjs line 9')
  }
)

module.exports = camp;