import express from 'express'
import os from 'os'

const app = express()
var PORT = 8090

app.get("/", (req, res) => {
  const message = `Hello v2 from ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.listen(PORT, () => {
  console.log(`Web server is listening at port ${PORT}`)
})