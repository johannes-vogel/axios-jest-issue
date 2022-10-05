const express = require('express')
const app = express()

app.get('/test', (req, res) => {
  console.log('request received')
  res.set('x-header', 'value')
  res.send('ok')
})

const server = app.listen(4004, async () => {
  const a = require('axios')
  const axios = a.create({
    headers: { 'Content-Type': 'application/json' },
    baseURL: 'http://localhost:4004'
  })
  let response = await axios.get('/test')
  console.log(response.headers)
  server.close()
})