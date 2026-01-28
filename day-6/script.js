const app = require('./src/app')

const mongoose = require('mongoose')
function connectToDb() {
    mongoose.connect("mongodb+srv://dhamoleom9_db_user:FkD2HgBDlzLTHqhV@cluster0.kwpgucd.mongodb.net/day-6")
        .then(() => {
            console.log('connected to database sucessfully..');
        })
}
connectToDb()

app.listen(3000, (req, res) => {
    console.log('server is running at por number 3000');
})