import express from 'express'
import fetch from "node-fetch"
import os from 'os'

const app = express()
const PORT = 8090

app.get("/", (req, res) => {
  const message = `Service on ${os.hostname()}`
  console.log(message)
  res.send(message)
})

app.get("/service1", async (req, res) => {
  const url = 'http://training-api:8090/api1'
  const response = await fetch(url);
  const body = await response.text();
  console.log(body)
  res.send(body)
})
app.get("/service2", async (req, res) => {
  const url = 'http://training-api:8090/api2'
  const response = await fetch(url);
  const body = await response.text();
  console.log(body)
  res.send(body)
})
app.get("/service3", async (req, res) => {
  const url = 'http://training-api:8090/api3'
  const response = await fetch(url);
  const body = await response.text();
  console.log(body)
  res.send(body)
})
app.get("/service4", async (req, res) => {
  const url = 'http://training-api:8090/api4'
  const response = await fetch(url);
  const body = await response.text();
  console.log(body)
  res.send(body)
})
app.get("/service5", async (req, res) => {
  const url = 'http://training-api:8090/api5'
  const response = await fetch(url);
  const body = await response.text();
  console.log(body)
  res.send(body)
})

app.get("/allservice", async (req, res) => {
  var url = 'http://localhost:8090/service1'
  var response = await fetch(url);
  var body1 = await response.text();
  console.log(body1)
  url = 'http://localhost:8090/service2'
  response = await fetch(url);
  var body2 = await response.text();
  console.log(body2)
  url = 'http://localhost:8090/service3'
  response = await fetch(url);
  var body3 = await response.text();
  console.log(body3)
  url = 'http://localhost:8090/service4'
  response = await fetch(url);
  var body4 = await response.text();
  console.log(body4)
  url = 'http://localhost:8090/service5'
  response = await fetch(url);
  var body5 = await response.text();
  console.log(body5)  
  res.send(`Answer: \r\n ${body1}\r\n ${body2}\r\n ${body3}\r\n ${body4}\r\n ${body5}\r\n`)
})


app.listen(PORT, () => {
  console.log(`Service is listening at port ${PORT}`)
})