const step1 = require('./step1');
const axios = require('axios');

const URL = require('url').URL;
function validateUrl(urlString) {
    try {
        new URL(urlString);
        return true;
      } catch {
        return false;
      }
}


const webCat = (url) => { 
    axios.get(url).then(function(resp) {
        console.log(resp.data);
    }).catch(err => console.log(`Error fetching ${url}, ${err}`))
}

// the below code was the step2 question

/*
for(let i =0; i < process.argv.length; i++) {
    if (i == process.argv.length-1) {
        if(validateUrl(process.argv[i])) { webCat(process.argv[i]); } 
        else { step1.cat(process.argv[i]); } 
    }
    else { continue; }
}*/

 
module.exports = {
    cat : step1.cat,
    webCat : webCat,
    validateUrl : validateUrl
};