const express = require('express')
const app = express()

app.use(express.json())

const node = []

app.post('/node', (req,res)=>{
    node.push(req.body)
    console.log(req.body);
    

    res.status(201).json({
        message: "data is saved sucessfully"
    })
})

app.get('/node', (req,res)=>{
    res.send(node)
})

app.delete('/node/:index', (req,res)=>{
    delete node[ req.params.index ]
    
    res.status(204).json({
        message:"the node is deleted sucessfully"
    })
})

module.exports = app
