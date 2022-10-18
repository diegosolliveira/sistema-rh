const crypto = require('crypto');
const connection = require('../database/connection');
const { routes } = require('../routes');

module.exports = {
    async list(req, res) {
        const vagas = await connection('vagas').select('*');
        return res.json(vagas);
    },
    async show(req, res) {
        const {id} = req.params
        const vaga = await connection('vagas').where('id', id).select('*');
        return res.json(vaga);
    },
    async create(req, res) {
        const {titulo, descricao, empresa} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('vagas').insert({
            id,
            titulo,
            descricao,
            empresa
        })
        return res.json({id});
    },
    async update(req, res){
        const {id} = req.params;
        const {titulo, descricao, empresa } = req.body ;  
        await connection('vagas').where('id', id).update({
            id,
            titulo,
            descricao,
            empresa
        })
        return res.status(204).send();
    },
    async delete(req, res){
        const {id} = req.params
        await connection('vagas').where('id',id).delete();
        return res.status(204).send();
    }
}