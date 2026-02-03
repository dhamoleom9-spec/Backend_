const mongoose = require('mongoose')

function connectionToDb(){
    mongoose.connect(process.env.mongo_url)
        .then(()=>{
            console.log('connected to database....')
        })
}


module.exports = connectionToDb