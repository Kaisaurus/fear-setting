const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const proxy = require('http-proxy-middleware')

app.get('/sessions', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <script>
          window.onload = function(){
            let session = JSON.parse(localStorage.getItem('persist:root'))
            let sessionChallenge = JSON.parse(session.challenge).challenge
            document.getElementsByClassName('current_session')[0].innerText = sessionChallenge
          }
        </script>
        <p>current session: <span class='current_session'></span></p>
      </body>
    </html>
  `);
})

var apiProxy = proxy('/', {target: 'http://localhost:3000'});
app.use(apiProxy)

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)
})
