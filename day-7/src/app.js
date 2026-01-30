const express = require('express')
const app = express()
const notemodul = require('./models/notes.models')

app.use(express.json())

app.post('/notes', async (req, res) => {
    const { title, description } = req.body

    const note = await notemodul.create({
        title, description
    })

    res.status(201).json({
        message:'data seved sucessfully..',
        note
    })
})

app.get('/notes', async (req,res)=>{
    const note = await notemodul.find()

    res.status(200).json({
        message:'data fetched sucessfully..',
        note
    })
})

module.exports = app