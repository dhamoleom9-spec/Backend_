const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("this is home page");
})
app.get('/product',(req,res)=>{
    res.send("this is product page");
})

app.listen(3000,()=>{
    console.log('server is running at port no 3000');
    
})

//