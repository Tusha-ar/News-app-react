const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8080;
const axios = require('axios');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/headlines',(req,res)=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=ee0c2aec14c44913bd890cc4840eee79')
        .then(res=>{
            console.log(res)
        })
})


app.listen(port, ()=>console.log(`server active on port ${port}`))