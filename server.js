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

const State = sequelize.define('states', {
  body: {
    type: Sequelize.JSONB
  }
})

State.sync() // ({force: true})

app.get('/states', (req, res) => {
  states = State.findAll().then((states) => {
    res.send(`
      <html>
        <head>
        </head>
        <body>
          <script>
            window.onload = function(){
              for(el of document.getElementsByClassName('restore_state')) {
                el.onclick = function(){
                  localStorage.setItem('persist:root', unescape(this.getAttribute('data-state')))
                  window.location = '/'
                  return false;
                }
              }
              let state = JSON.parse(localStorage.getItem('persist:root'))
              let stateChallenge = JSON.parse(state.challenge).challenge
              document.getElementsByClassName('current_state')[0].innerText = stateChallenge
              document.getElementById('stateBodyInput').value = JSON.stringify(state)
            }
          </script>
          <form method='post'>current state: <span class='current_state'></span><input type='submit' value='save' /><input type='hidden' id='stateBodyInput' name='body' /></form>
          <ol>
            ${states.map((state) => {return `<li>${state.body.challenge} <a href='#' class='restore_state' data-state="${escape(JSON.stringify(state.body))}">restore</a></li>`}).join('')}
          </ol>
        </body>
      </html>
    `);
  })
})

app.post('/states', (req, res) => {
  State.create({body: JSON.parse(req.body.body)}).then(()=> {
    res.redirect('/states')
  })
})

var apiProxy = proxy('/', {target: 'http://localhost:3000'});
app.use(apiProxy)

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)
})
