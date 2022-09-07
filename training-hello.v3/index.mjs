import express from 'express'
import os from 'os'

const app = express()
var PORT = 8888

if (process.env.TRAINING_NODEJS_PORT !== undefined){
  PORT = process.env.TRAINING_NODEJS_PORT
}

app.get("/", (req, res) => {
  const message = `Hello v3 from ${os.hostname()}:${PORT}`  
  console.log(message)
  res.send(message)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})