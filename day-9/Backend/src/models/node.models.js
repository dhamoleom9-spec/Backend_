const mongoose = require('mongoose')

const nodeSchema = new mongoose.Schema({
    title:String,
    description:String,
})

const nodemodel = mongoose.model('node', nodeSchema)

module.exports = nodemodel