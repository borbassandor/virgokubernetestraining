import express from 'express'
import os from 'os'

const app = express()
const PORT = 8090

app.get("/", (req, res) => {
  const message = `API Server on ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.get("/api1", (req, res) => {
  const message = `api1 response from ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.get("/api2", (req, res) => {
  const message = `api2 response from ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.get("/api3", (req, res) => {
  const message = `api3 response from ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.get("/api4", (req, res) => {
  const message = `api4 response from ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.get("/api5", (req, res) => {
  const message = `api5 response from ${os.hostname()}`  
  console.log(message)
  res.send(message)
})

app.listen(PORT, () => {
  console.log(`Api server is listening at port ${PORT}`)
})