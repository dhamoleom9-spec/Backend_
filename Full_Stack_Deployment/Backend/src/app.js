const express = require('express')
const app = express()
const nodeModel = require('./models/node.model')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('./public'))

app.post('/api/node', async (req, res) => {
    try {
        const { title, description } = req.body

        const node = await nodeModel.create({
            title, description
        })

        if (!node) {
            return res.status(404).json({ message: 'Node note found' })
        }

        res.status(200).json({
            message: 'data saved sucessfully',
            node
        })
    } catch {
        res.send(500).json({ message: 'server error', error })
    }
})

app.get('/api/node', async (req,res)=>{
    try{
        const  node = await nodeModel.find()

        if(!node){
            return res.status(404).json({message:'node note found'})
        }

        res.status(201).json({
            message:'data fatched sucessfully..',
            node
        })
    }catch{
        res.status(500).json({message:'server error', error})
    }
})

app.delete('/api/node/:id', async (req,res)=>{

        const {id} = req.params
        await nodeModel.findByIdAndDelete(id)

        res.status(200).json({
            message:'node dalated sucessfully...'
        })

})

app.put('/api/node/:id', async (req,res)=>{
    const  id = req.params.id
    const  {title,description} = req.body

    await nodeModel.findByIdAndUpdate(id, {title,description})

    res.status(201).json({
        message: 'data  updated sucessfully..'
    })
})

module.exports = app