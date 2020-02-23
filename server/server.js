const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


require('dotenv').config();

// const jsonParser = bodyParser.json();

const app = express();
const PORT = 3000;

/** 
* required router(s)
*/
const userRouter = require('./routes/users.js');
const campRouter = require('./routes/camp.js');

/**
 * handle parsing request body
 */
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

/**
 * handle requests for static files
 */
/**
 * define route handlers
 */

app.use('/user', userRouter);
app.use('/camp', campRouter);

app.get('/testenv', (req, res) => {
  res.send(process.env.CAMPGROUND_KEY);
})


/**
 *  route handler to respond with main app 
 */


// //this is the error handler
function logErrors (err, req, res, next) {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign({}, defaultErr);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  }

app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));

module.exports = app;