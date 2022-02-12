const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController')
const SessionController = require('./controllers/SessionController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

routes.post('/login', SessionController.create)

routes.get('/ongs', OngController.index)

routes.post(
  '/create-ong',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      city: Joi.string().required()
    })
  }),
  OngController.create
)

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
)

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
)

routes.post('/incidents', IncidentController.create)

routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
)

module.exports = routes
