const fs = require('fs');
const path = require('path');

const fileController = {};


//we are currently not using this file as we do not have any middleward saved here


/* fileController.---------- = (req, res, next) => {
    const ------ = JSON.parse(fs.readFileSync(path.resolve(__dirname, ------)), 'UTF-8');
    if(!){
        return next({
            log: 'give specific error to the middleware',
            message { err: 'Error occurred in fileController.--------- . Check server logs for more details.'}
        });
    }
    can use res.locals.----- to store data if we need;
    next();
} */

module.exports = fileController;