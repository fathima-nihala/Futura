const express = require('events')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
app.use(cors())
dotenv.config()

app.use(express())