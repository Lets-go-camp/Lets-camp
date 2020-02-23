const fetch  = require('node-fetch');
const userController = {};
const db = require('../index.js')

const api_key = process.env.API_KEY;


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
  const user = JSON.stringify(req.body.username);

  const text = `INSERT INTO favorites (user_id, campground_id) VALUES ($1,$2)`;
  const values = [user,campground];

  db.query(text,values)
  .then((response) => {
    console.log('this is from userController.addFav')
    return next();
  })
  .catch(err => {
    console.log('Error: ',err);
    return next(err)
  });
};


userController.getFav = (req, res, next) => {
  const user = JSON.stringify(req.body.username);

  const text = `SELECT * FROM campground WHERE campground_id in
  (
  select campground_id from favorites where user_id = $1
  )`;

  const value = [user];

  db.query(text,value)
  .then((response) => {
    res.locals.user = response.rows;
    return next();
  })
  .catch(err => {
    console.log('Error: ', err);
    return next(err)
  }) 
}



module.exports = userController 
