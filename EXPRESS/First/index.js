const express=require('express') //imports the Express.js framework, which is used to create web applications and APIs in Node.js
const app=express()  //used to define routes and configure the server.
const dotenv=require('dotenv')   // imports the dotenv module,used for loading environment variables from a .env file into the Node.js environment.
const mongoose=require('mongoose') //imports the Mongoose library,is an ODB(object data modeling),used to interact with a MongoDB database.
const cors=require('cors')
app.use(cors())
dotenv.config()   //This line loads the environment variables from a .env file 

//Application level middle ware
app.use(function(req,res,next){
    console.log("all time first check");
    next()
})


const userRoute=require('./Router/Userrouter')
const creudRouter=require('./Router/CrudRouter')


//create database
mongoose.connect(process.env.secret_key).then(()=>{ // to connect to a MongoDB database using the URL specified in the secret_key env . ".then" This part of the code is using a Promise-based approach to handle the asynchronous nature of the mongoose.connect() method
    console.log('Database Connected');
});

app.use(express.json())
app.use('/api/data',userRoute) //and specifying a base path
app.use('/api/data',creudRouter)

app.listen(7000,()=> {   //This line starts the Express server on port 3000. 
    console.log('server is connected');
})

