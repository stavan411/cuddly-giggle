const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello V7'))
app.listen(80)
