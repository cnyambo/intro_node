const fs =require('fs');
const step2 = require('./step2');
const axios = require('axios');
 
const catWrite = (path, filename) => { 
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        fs.writeFile (path, data, function(err) {
            if (err) {        
                console.log(`Couldn't write ${path} `, err);
                process.kill(1);} 
        });
    });
}


const webCatWrite = (path, filename) => { 
    axios.get(filename).then(function(resp) {
        fs.writeFile (path, resp.data, function(err) {
            if (err) throw err;
        });
    }).catch(err => console.log(`Error fetching ${filename}, ${err}`))
}

for(let i =0; i < process.argv.length; i++) {
    if (process.argv.length == 3 ) {
        if (i == process.argv.length-1 & step2.validateUrl(process.argv[i])) {
            step2.webCat(process.argv[i]); 
        } 
        else if (i == process.argv.length-1 &  !step2.validateUrl(process.argv[i]))  { 
            step2.cat(process.argv[i]); 
        } else { continue; } 
    }
    else {
            if(i == process.argv.length-1 & step2.validateUrl(process.argv[i])) {
                webCatWrite(process.argv[i-1],process.argv[i]); 
            }
            else if (i == process.argv.length-1 &  !step2.validateUrl(process.argv[i]))  {
                catWrite(process.argv[i-1],process.argv[i]);
            } else { continue; } 
    }
}
