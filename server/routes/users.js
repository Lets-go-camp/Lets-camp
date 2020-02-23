const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * GET
 * POST 
 * PATCH
 * DELETE
 */


router.get('/login', userController.login, (req, res) => {
    res.status(200).json()
});

// router.get('/signup', (req, res) => {
//     res.status(200).json()
// });

router.post('/create', (req, res) => {
    res.status(200).json()
});

//not sure this route is needed
// router.patch('/update', userController.updateUser (req, res) => {
//     res.status(200).json()
// });

router.get('/favorite', userController.getFav, (req, res) => {
    res.status(200).json()
});

router.delete('/delete', userController.deleteUser, (req, res) => {
    res.status(200).json()
});



module.exports = router;