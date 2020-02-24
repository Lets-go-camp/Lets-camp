const fetch  = require('node-fetch');
const userController = {};
const db = require('../index.js')

const api_key = process.env.API_KEY;


userController.login = async (req, res, next) => {
  const user = req.body.username;
  const password = req.body.password;

  const text = `SELECT * FROM "user" WHERE username = $1`
  const values = [user];


  await db.query(text,values, (err, data) => {
    if(err) {
        console.log(err);
        return next(err)
    }
    else {
      if(data.rows[0].password !== password) {
        console.log('password did not match')
        return next(err)
      }
      else {
        res.locals.user = data.rows[0]
        return next()
      }
    }
  })
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

  const text = `INSERT INTO "user" (username, password, loggedin) VALUES ($1, $2, $3)`;
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
