const express = require('express')
const cookieSession = require('cookie-session')

const connectDB = require('./config/db')

connectDB()

const accountRouter = require('./routes/account')
const apiRouter = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  }),
)

app.use('/account', accountRouter)
app.use('/api', apiRouter)

app.get('/', (req, res) => res.send('hello world!'))

app.use((err, req, res, next) => {
  res.status(500).send('There was an error!')
})

app.listen(port, () => {
  // console.log(`Listening on port` )
})
