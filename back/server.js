const express = require('express')
const app = express()
const port = 3000 

app.get('/teste',(req,res)=>{
  res.send('API FEITA COM SUCESSO!')
})

app.listen(port,()=> {
  console.log(`Example app listening on port ${port}`)
})
