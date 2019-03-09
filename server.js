const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const proxy = require('http-proxy-middleware')
const Sequelize = require('sequelize');
const bodyParser = require('body-parser')
const sequelize = new Sequelize('postgres://localhost:5432/fear-setting_development');
const bcrypt = require('bcrypt');
const session = require('express-session')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'sFZgiWl9JKN1Y2iWTJDza6mzpJW7zI2PiQziluoeaYQ=',
  resave: false,
  saveUninitialized: true,
}))


// MODELS

const State = sequelize.define('states', {
  body: {
    type: Sequelize.JSONB
  }
})

const Account = sequelize.define('accounts', {
  email: { type: Sequelize.TEXT, allowNull: false, unique: true },
  password_digest: { type: Sequelize.TEXT }
})

Account.hasMany(State)
State.belongsTo(Account)

State.sync() //({force: true})
Account.sync({})

// HELPERS

function currentAccount(req) {
  return Account.findByPk(req.session.accountId)
}

// ENDPOINTS

// states

app.get('/states', (req, res) => {
  currentAccount(req).then((account) => {
    if(account){
      account.getStates().then((states) => {
        res.send(`
          <html>
            <head>
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
            </head>
            <body>
              <form method='post' action='/session'><input type='hidden' name='_method' value='delete' /><input type='submit' value='logout' /></form>
              <form method='post'>current state: <span class='current_state'></span><input type='submit' value='save' /><input type='hidden' id='stateBodyInput' name='body' /></form>
              <ol>
                ${states.map((state) => {return `
                  <li>${state.body.challenge}
                    <a href='#' class='restore_state' data-state="${escape(JSON.stringify(state.body))}">restore</a>
                    <form method='post' action='/states/${state.id}'>
                      <input type='hidden' name='_method' value='delete' />
                      <input type='submit' value='delete' />
                    </form>
                  </li>
                `}).join('')}
              </ol>
            </body>
          </html>
        `);
      })
    } else {
      res.redirect('/session/new')
    }
  })
})

app.post('/states', (req, res) => {
  currentAccount(req).then((account) => {
    account.createState({body: JSON.parse(req.body.body)}).then(()=> {
      res.redirect('/states')
    })
  })
})

app.post('/states/:id', (req, res) => {
  currentAccount(req).then(account => {
    account.getStates({where: {id: req.params.id}}).then(state => {
      account.removeState(state).then(() => {
        res.redirect('/states')
      })
    })
  })
})

// accounts

app.get('/accounts/new', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <form method='post' action='/accounts'>
          <label>email<input name='email'></label><br>
          <label>password<input name='password' type='password'></label>
          <input type='submit' value='signup' />
        </form>
        <a href='/session/new'>login</a>
      </body>
    </html>
  `)
})

app.post('/accounts', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash)=> {
    Account.create({email: req.body.email, password_digest: hash}).then((account)=> {
      req.session.accountId = account.id
      res.redirect('/states')
    })
  });
})

// session

app.get('/session/new', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <form method='post' action='/session'>
          <label>email<input name='email'></label><br>
          <label>password<input name='password' type='password'></label>
          <input type='submit' value='login' />
        </form>
        <a href='/accounts/new'>signup</a>
      </body>
    </html>
  `)
})

app.post('/session', (req, res) => {
  switch(req.body._method){
    case 'delete':
      delete req.session.accountId
      res.redirect('/session/new')
      break;
    default:
      Account.findOne({where: {email: req.body.email}}).then(account => {
        bcrypt.compare(req.body.password, account.password_digest, (err, matches)=> {
          if(matches){
            req.session.accountId = account.id
            res.redirect('/states')
          } else {
            res.redirect('/session/new')
          }
        })
      })
      break;
  }
})

// PROXY

var apiProxy = proxy('/', {target: 'http://localhost:3000'});
app.use(apiProxy)


// START SERVER

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`)
})
