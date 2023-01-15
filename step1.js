const fs =require('fs');
const cat = (path) =>{ 
    fs.readFile(`${path}`, 'utf8', function(err, data) {
        if(err) {
            console.log(err);
            process.kill(1);
        } else {
            console.log(data)
        }
    });
}

//Step one get data 

/*for(let i =0; i < process.argv.length; i++) {
    if (i == process.argv.length-1) {
       cat(process.argv[i]);  
    }
    else { continue; }
}*/


module.exports = {
    cat : cat
};