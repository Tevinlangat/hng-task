const express = require('express')
const cors = require ('cors')

// configurations
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8000

// middlewares
app.use(cors())
app.use(express.json())

// Api endpoints
app.get('/api',(req,res)=>{
    const { slack_name, track } = req.query;

    if (!slack_name && !track){
        res.status(404).json({"error":"parameters missing"})
    }
   
    const date = new Date()
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const day = days[date.getDay()]
    

    res.status(200).json({
        "slack_name":slack_name,
        "current_day":day,
        "utc_time":date,
        "track":day,
        "github_file_url": "https://github.com/Tevinlangat/HNG-tasks/blob/main/index.js",
        "github_repo_url": "https://github.com/Tevinlangat/HNG-tasks",
        "status_code":200

    })
})

// listener
app.listen(PORT,()=>{
    console.log(`server is open at port ${PORT}`)
})
