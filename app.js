const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('', (req, res) => {
  res.send('hello world')
})

app.get('/env', (req, res) => {
  res.send(`${process.env.KEY}`)
})

app.listen(port, () => {
  console.log('listening on port: ' + port)
})
