const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8080;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(port, ()=>console.log(`server active on port ${port}`))