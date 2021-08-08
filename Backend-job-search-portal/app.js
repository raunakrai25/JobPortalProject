const express = require('express')
const app = express()
const connectDB = require('./config/db')
const userRoutes = require('./routes/api/jobSearcher')
const recruiterRoutes = require('./routes/api/recruiter')
const authRoutes = require('./routes/api/auth')

connectDB();

app.get('/',(req,res)=>{
    res.status(200).send("API working")
})

app.use('/api/jobSearcher',userRoutes)
app.use('/api/recruiter',recruiterRoutes)
app.use('/api/authentication',authRoutes)

const PORT = process.env.PORT || 2500

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})