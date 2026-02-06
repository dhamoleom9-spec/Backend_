const mongoose = require('mongoose')

function connectionToDb(){
    mongoose.connect(process.env.mongo_uri)
        .then(()=>{
            console.log('connected to database sucessfully...');
        })
}

module.exports = connectionToDb