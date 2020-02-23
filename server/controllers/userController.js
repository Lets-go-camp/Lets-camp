const fetch  = require('node-fetch');
const userController = {};
const db = require('../index.js')

const api_key = process.env.API_KEY;

//This file is not being use right now. We may need to use this for added functionality to delete a given user or update a users favorite list.
userController.login = async (req, res, next) => {
  const user = req.body.username;
  const password = req.body.password;

  const text = `SELECT * from users WHERE userName = $1`
  const values = [user]
  await db.query(text,values, (err, data) => {
    if(err) {
      console.log(err);
        return next(err)
    }
    else {
      if(data.rows[0].password !== password) {
        console.log('password did not match')
      }
      else {
        res.locals.user = data.rows[0]
      }
    }
  })

  const newQuery = `UPDATE users SET session = true WHERE username = $1`

  db.query(newQuery,values, (err, data) => {
    if(err){
      console.log(err)
      return next(err)
    }
    else {
      console.log('isupdating')
      return next();
    }
    })
}

userController.loginVerify = (req, res, next) => {

}

userController.updateUser = (req, res, next) => {

}

userController.deleteUser = (req, res, next) => {
  const user = JSON.stringify(req.body.username);

  const text = `DELETE FROM user WHERE name = $1`
  const value = [user]

  db.query(text, value, (err, data) => {
    if(err){
      console.log(err);
      return next(err);
    }
    else {
      if(!data){
        return next(err);
      }
      return next();
    }
  })
}

userController.createUser = (req, res, next) => {
  const user = JSON.stringify(req.body.username);
  const password = JSON.stringify(req.body.password);

  console.log(user, 'this is user');
  console.log('this is req.body: ', req.body);

  const text = `INSERT INTO Users (username, password, loggedin) VALUES ($1, $2, $3)`;
  const values = [user, password, true];

  db.query(text,values)
  .then((response) => {
    console.log('res in login: ', response);
    res.locals.user = response.rows;
    return next();
  })
  .catch(err => {
    console.log('Error: ', err);
    return next(err)
  }) 
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
