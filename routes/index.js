var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs');

const dir = ".//helpers//json//";

const readDir = async () =>{
    return new Promise( (resolve, reject) => {
        fs.readdir(path.join(process.cwd(), "./helpers/Json"), async(err, data) => { 
            err ? reject(err) : resolve(data);
        });
    });
}

const readFile = (file) => {
  return new Promise((resolve,reject)=>{
    fs.promises.readFile(path.join(process.cwd(), "./helpers/Json/"+file))
    .then((data)=>{
      resolve(JSON.parse(data));
    })
    .catch((err)=>{
      reject(err);
    })
  })
}



/* GET home page. */
router.get('/', function(req, res, next) {
  readDir()
  .then((data)=>{
    res.render('index', { title: 'APIs', data:data});
  })
});

/* GET Single route for all file data */
router.get('/:file', function(req, res, next) {
  readFile(req.params.file+".json")
  .then((data)=>{
    res.send({data:data,error:{}});
    console.log(req.params)
  })
  .catch((err)=>{
    res.send({data:{},error:{serverMessage:err,reason:"Reading Error or File Doesnot Exist"}});
  })
});

module.exports = router;
