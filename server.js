const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const proxy = require('http-proxy-middleware')
const Sequelize = require('sequelize');
const bodyParser = require('body-parser')
const sequelize = new Sequelize('postgres://localhost:5432/fear-setting_development');

app.use(bodyParser.urlencoded({
  extended: true
}));

const Session = sequelize.define('session', {
  body: {
    type: Sequelize.JSONB
  }
})

Session.sync()

app.get('/sessions', (req, res) => {
  sessions = Session.findAll().then((sessions) => {
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
              document.getElementById('sessionBodyInput').value = JSON.stringify(session)
            }
          </script>
          <form method='post'>current session: <span class='current_session'></span><input type='submit' value='save' /><input type='hidden' id='sessionBodyInput' name='body' /></form>
          <ol>
            ${sessions.map((session) => {return `<li>${session.body.challenge}</li>`}).join('')}
          </ol>
        </body>
      </html>
    `);
  })
})

app.post('/sessions', (req, res) => {
  Session.create({body: JSON.parse(req.body.body)}).then(()=> {
    res.redirect('/sessions')
  })
})

var apiProxy = proxy('/', {target: 'http://localhost:3000'});
app.use(apiProxy)

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)
})
