let express = require('express')
let app = express()
app.use(express.json())
let notes = []

app.post('/notes', (req,res)=>{
    notes.push(req.body)
    console.log(notes)
    

    res.status(201).json({
        message:"the data is sent sucessfully"
    })
})

app.get('/notes', (req,res)=>{
    res.send(notes)

    res.status(200).json({
        message:"data gated sucessfully"
    })
})

module.exports = app