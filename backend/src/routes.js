const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');
const CandidatoController = require('./controller/CandidatoController');

routes.get('/users', UserController.list)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/candidatos', CandidatoController.list)
routes.get('/candidatos/:id', CandidatoController.show)
routes.post('/candidatos', CandidatoController.create)
routes.put('/candidatos/:id', CandidatoController.update)
routes.delete('/candidatos/:id', CandidatoController.delete)

module.exports = routes;