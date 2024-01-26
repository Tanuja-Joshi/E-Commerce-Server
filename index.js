const express = require('express')
const path=require('path')
const app = express()
const port = 5000
const connectToMongo=require('./db.js')
connectToMongo()
const cors= require("cors")

app.use(express.json());
app.use(cors())

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/route.js')));

app.listen(port, () => {
  console.log(`Tango app listening on port ${port}`)
})