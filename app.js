const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('', (req, res) => {
  res.send('OMG PLEASE WORK T_T')
})

app.listen(port, () => {
  console.log('listening on port: ' + port)
})