const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login, userController.getFav, (req, res) => {
    res.status(200).json()
});

router.post('/signup',  userController.createUser, (req, res) => {
    res.status(200).json()
});

router.get('/favorite', userController.getFav, (req, res) => {
    res.status(200).json()
});

router.post('/favorite', userController.addCampground, userController.addFav, (req, res) => {
    res.status(200).json()
});

router.delete('/deleteuser', userController.deleteUser, (req, res) => {
    res.status(200).json()
});


module.exports = router;