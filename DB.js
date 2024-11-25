const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MONGOURL
const ONLINEURL = process.env.ONLINEURL

mongoose.connect(ONLINEURL)

const db = mongoose.connection

db.on("connected",()=>{
    console.log("Connected to MongoDB")
})

db.on("error",(err)=>{
    console.log("Error in MongoDB")
})

db.on("disconnected",()=>{
    console.log("Disconnected from MongoDB")
})

module.exports = db