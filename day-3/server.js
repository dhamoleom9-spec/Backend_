let express = require('express')
let app = express()

app.use(express.json())

// app.get('/', (req,res)=>{
//     res.send('this is home page...')
// })

// app.get('/product', (req,res)=>{
//     res.send('this is product page...✊👈')
// })

let nodes = []

app.post('/nodes', (req,res)=>{
    nodes.push(req.body)
    console.log(nodes)
    res.send('node created')
})

app.get('/nodes', (req,res)=>{
    res.send(nodes)
})

app.listen(3000, ()=>{
    console.log('server is running at port no 3000');
})