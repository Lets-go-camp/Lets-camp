const fs = require('fs');
const path = require('path');
const parseString = require('xml2js').parseString;

const campController={};

campController.query = (req, res, next){
  const { pet, waterFront, waterHook, sewerHook } = req.body;
  console.log(this.state)
  console.log('here');
  let apiString = 'http://api.amp.active.com/camping/campgrounds?'
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
  const campOptions = {
      url: apiString += 'APIKEYHERE',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      }
    }
    axios(campOptions)
      .then(response => {
        console.log(response);
        const stringRes = response.data;
        let superParse;
        parseString(stringRes, function (err, result) {
          superParse = result.resultset.result;
        });
        console.log('hello: ', superParse);
        fs.writeFileSync(path.resolve(__dirname, '../database/camp.json'), JSON.stringify(superParse));
        console.log('writesuccess');
        res.locals.wines = response.data.results;
        return next();
      })
      .catch(err => console.log('fileController.getWine: axios fetch error: ', err));
}