require('dotenv').config()
const connectToMongo = require('./db.js');
const cors = require('cors');
connectToMongo();
const express = require('express')
const app = express()
const port = process.env.PORT
app.use(cors()); 
app.use(express.json())
//routers
app.use('/', require('./routers/Routers.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})