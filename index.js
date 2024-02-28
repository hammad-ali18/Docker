const express = require('express');
const app =  express();
app.get('/', async(req,res)=>{
    res.send('hello world')
})

const server = app.listen(3000,()=>{
 const host = server.address().address;
 const port = server.address().port;
 console.log(`Example app listening at http://%s:%s`,host, port)
});