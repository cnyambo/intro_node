const fs =require('fs');
const step2 = require('./step2');
 
const catWrite = (path, filename) => { 
 
    fs.writeFileSync(`${path}`, step2.cat(filename), "utf8", function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }         
    }); 
}

const webCatWrite = (path, filename) => { 
 
    fs.writeFileSync(`${path}`, step2.webCat(filename), "utf8", function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }         
    });
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
                webCatWrite(process.argv[i]-1,process.argv[i]); 
            }
            else if (i == process.argv.length-1 &  !step2.validateUrl(process.argv[i]))  { 
                catWrite(process.argv[i]-1,process.argv[i]);
            } else { continue; } 
    }
}
