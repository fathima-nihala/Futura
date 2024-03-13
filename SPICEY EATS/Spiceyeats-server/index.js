const express = require('express')
const app = express()  //used to define routes and configure the server.
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
dotenv.config()

//Application level middle ware
// app.use(function (req, res, next) {
//     console.log("all time first check");
//     next()
// })



const useRoute = require('./Router/UserRouter')
// const AdminRoute = require('./Router/AdminRouter')
// const proRoute = require('./Router/ProductRouter')

mongoose.connect(process.env.Project_key).then(() => {
    console.log('DB Connected');
})

app.use(express.json())
app.use('/data', useRoute)
// app.use('/data', AdminRoute)
// app.use('/pro',proRoute)

app.listen(9001, () => {
    console.log('Server is running on port 9001');
})


// 65c10c3bf17ef00f423974e9
//mongodb+srv://<username>:<password>@cluster0.yxed4dp.mongodb.net/
//3lShqOqkWlYm2pEq
//mongodb+srv://fathimanihala200214:3lShqOqkWlYm2pEq@cluster0.fw8qvgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0