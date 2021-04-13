const fs = require("fs")
const { resolve } = require("path")
const File = require("../models/File")
const config = require("config")

class FileService {
   createDir (file) {
    const filePath = `${config.get('filePath')}/${file.user}/${file.path}`

       return new Promise((resolve, reject) => {
           try{
               if(!fs.existsSync(filePath)){
                   fs.mkdirSync(filePath)
                   return resolve({message: 'File error'})
               }else {
                   return resolve( {message: 'File already exist'})
               }

           }catch(e){
               return reject({ message: "File error"})
           }
       })
   }
}

module.exports = new FileService()