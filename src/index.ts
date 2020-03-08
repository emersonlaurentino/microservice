import bodyParser from 'body-parser'
import compression from 'compression'
import errorHandler from 'errorhandler'
import express from 'express'
import lusca from 'lusca'
import routes from './routes'

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(errorHandler())

// App routes
routes(app)

// Starting the server
app.listen(app.get('port'), () => {
  const port = app.get('port')
  const env = app.get('env')
  console.log('App is running at http://localhost:%d in %s mode', port, env)
})
