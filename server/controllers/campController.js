const fs = require('fs');
const path = require('path');
const axios = require('axios');
const parseString = require('xml2js').parseString;

require('dotenv').config()

const campController={};

campController.query = (req, res, next) => {
  console.log('entered campcontrollerquery')
  const { pet, waterFront, waterHook, sewerHook, state } = req.body;

  let apiString = 'http://api.amp.active.com/camping/campgrounds?pstate='
  
  apiString += state;
  if(pet === true){
      apiString +='&pets=3010'
  }
  if(sewerHook == true){
      apiString += '&sewer=3007'
  }
  if(waterHook === true){
      apiString += '&water=3007'
  }
  if(waterFront === true){
      apiString += '&waterfront=3011'
  }
  apiString += '&api_key=';

  const campOptions = {
      url: apiString  += process.env.CAMPGROUND_KEY,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      }
    }
    axios(campOptions)
      .then(response => {
        console.log(campOptions);
        console.log(response);
        const stringRes = response.data;
        let superParse;
        parseString(stringRes, function (err, result) {
          superParse = result.resultset.result;
        });
        console.log('this is superParse: ', superParse);
        fs.writeFileSync(path.resolve(__dirname, '../database/camp.json'), JSON.stringify(superParse));
        console.log('writesuccess');
        res.locals.campgrounds = response.data.results;
        return next();
      })
      .catch(err => console.log('fileController.getWine: axios fetch error: ', err));
}

module.exports = campController;