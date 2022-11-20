const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');
const CandidatoController = require('./controller/CandidatoController');
const VagasControlle = require('./controller/VagasController')

routes.get('/users', UserController.list)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.post('/users/auth', UserController.auth)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/candidatos', CandidatoController.list)
routes.get('/candidatos/:id', CandidatoController.show)
routes.post('/candidatos', CandidatoController.create)
routes.put('/candidatos/:id', CandidatoController.update)
routes.delete('/candidatos/:id', CandidatoController.delete)

routes.get('/vagas', VagasControlle.list)
routes.get('/vagas/:id', VagasControlle.show)
routes.post('/vagas', VagasControlle.create)
routes.put('/vagas/:id', VagasControlle.update)
routes.delete('/vagas/:id', VagasControlle.delete)

module.exports = routes;