import { Application } from 'express'
import { examplesController } from './controllers'

const routes = (app: Application) => {
  app.route('/examples').get(examplesController.getExamples)
  app.route('/examples/:id').get(examplesController.getExamplesById)
}

export default routes
