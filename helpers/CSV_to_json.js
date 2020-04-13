const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');

const readDirectory = async(folder) => {
    return new Promise( (resolve, reject) => {
        fs.readdir(path.join(__dirname, folder), async(err, data) => { 
            err ? reject(err) : resolve(data);
        });
    });
}

const readFile = async(file) => {
    return new Promise( (resolve, reject) => {
        var data = []
        fs.createReadStream(file)
        .pipe(csv())
        .on('data', (row) => {
            data.push(row);
        })
        .on('end', () => {
            resolve(data);
        });
    });
}

const convertToCSV = async (folder,file) =>{
    var data = []
    readFile(folder+`\\`+file)
    .then((data)=>{
        console.log();

        fs.writeFileSync("Json\\"+file.split(".")[0]+".json", JSON.stringify(data, null,4));
    })
}

const convertFiles = async ()=>{
    readDirectory("data")
    .then((data)=>{
        data.forEach(file => {
            convertToCSV("data",file)
        });
    })
    .catch((err)=>{
        console.log("Error occured")
    })
}

convertFiles();