const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const proxy = require('http-proxy-middleware')

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

var apiProxy = proxy('/', {target: 'http://localhost:3000'});
app.use(apiProxy)

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)
 })
