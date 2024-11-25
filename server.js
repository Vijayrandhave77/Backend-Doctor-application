const express = require('express');
const app = express();
require('dotenv').config()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const db = require('./DB')
const contactschema = require("./Models/ContactSchema")
const appoinSchema = require('./Models/AppoinSchema')
const PORT = process.env.PORT || 4000

const cors = require('cors')
const corsOptions = {
    origin: 'https://frontend-doctor-application.vercel.app', 
    methods: 'GET,POST', 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};
app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.post("/api/contact",async(req,res)=>{
    try {
        const data = req.body
        const  newcontact = await contactschema(data)
        const response = await newcontact.save()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
     
})
app.post("/api/appointment",async(req,res)=>{
    try {
        const data = req.body
        const  newappoin = await appoinSchema(data)
        const response = await newappoin.save()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
     
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
