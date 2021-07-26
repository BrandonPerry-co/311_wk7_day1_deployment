const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const { logger } = require('./middleware')

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use(logger)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Fit-Pro 1!')
})

app.get('/user', (req, res) => {
  res.send('Welcome to Fit-Pro 22222!')
})

app.get('/login', (req, res) => {
  res.json('Welcome back to Fit-Pro!');
})

app.post('/workout', (req, res) => {
  res.send('Your work has been posted!')
})

app.post('/signup', (req, res) => {
  res.send('Sign up today and experiance change like no other!')
})

app.put('/bodycomp', (req, res) => {
  res.send('Your body comp has been updated!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
