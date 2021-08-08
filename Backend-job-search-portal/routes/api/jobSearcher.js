const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send('Job_searcher route')
})

module.exports = router;