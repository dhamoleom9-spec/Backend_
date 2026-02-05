const express = require('express')
const app = express()
const nodemodel = require('./models/node.models')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/node', async (req, res) => {
    const { title, description } = req.body

    const node = await nodemodel.create({
        title, description
    })

    res.status(201).json({
        message: 'data postes sucessfully...',
        node
    })
})

app.get('/node', async (req, res) => {
    const node = await nodemodel.find()

    res.status(200).json({
        message: 'data fetched sucessfully...',
        node
    })
})

app.delete('/node/:id', async (req, res) => {
    try {
        const { id } = req.params
        const node = await nodemodel.findByIdAndDelete(id)

        if (!node) {
            return res.status(404).json({ message: 'Node note found' })
        }

        res.status(200).json({
            message: 'the node deleted sucessfully..',
            node
        })
    } catch {
        res.send(500).json({ message: 'server error', error })
    }
})

app.put('/node/:id', async (req, res) => {
    const id = req.params.id
    const { title,description } = req.body

    await nodemodel.findByIdAndUpdate(id, { title,description })

    res.status(200).json({
        message: 'updated sucessfully...'
    })
})

app.use('*name', (req,res)=>{
    res.send('this is wild card route')
})
module.exports = app