const express = require('express');
const camp = express.Router();
const campController = require('../controllers/campController');

camp.post('/query',
  campController.query,
  (req, res) => {
    
  }
)