let express = require('express')

let app = express()

app.use(express.json())

app.get('/home', (req,res)=>{
    res.send("this is home page")
})

let nodes = []

app.post('/node', (req,res)=>{
    nodes.push(req.body)
    console.log(nodes);
    res.send('node created sucessfully')
})

app.get('/node', (req,res)=>{
    res.send(nodes)
})

app.delete('/node/:index', (req,res)=>{
    delete nodes[ req.params.index ]
    res.send('node deleted sucessfully')
    console.log(nodes);
    
})

app.patch('/node/:index', (req,res)=>{
    nodes[ req.params.index ].description = req.body.description
    console.log(nodes);
    
    res.send('description is modified sucessfully')
})

app.put('/node/:index', (req,res)=>{
    nodes[ req.params.index ].title = req.body.title
    nodes[ req.params.index ].description = req.body.description
    res.send(`completely modified element at ${req.params.index}`)
})

module.exports = app