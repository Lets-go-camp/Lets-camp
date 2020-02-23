const fetch  = require('node-fetch');
const userController = {};

const api_key = process.env.API_KEY;

//This file is not being use right now. We may need to use this for added functionality to delete a given user or update a users favorite list.
userController.login = (req, res, next) => {

}

userController.loginVerify = (req, res, next) => {

}

userController.updateUser = (req, res, next) => {

}

userController.deleteUser = (req, res, next) => {

}

userController.createUser = (req, res, next) => {

}

userController.addFav = (req, res, next) => {

}

userController.getFav = (req, res, next) => {
  
}


/*userController.--------- = (req,res,next) => {
     fetch('url')
    .then(result => result.json())
    .then(data =>{
        console.log('hi');
        next();
    })
    .catch(err => {
      next({
        log: `userController.createUser: ERROR: ${err}`,
        message: { err: 'userController.createUser: ERROR: Check server logs for details' },
    })
  })
*/

module.exports = userController 
