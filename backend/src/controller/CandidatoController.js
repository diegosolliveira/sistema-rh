const crypto = require('crypto');
const connection = require('../database/connection');
const { routes } = require('../routes');

module.exports = {
    async list(req, res) {
        const candidatos = await connection('candidatos').select('*');
        return res.json(candidatos);
    },
    async show(req, res) {
        const {id} = req.params
        const candidato = await connection('candidatos').where('id', id).select('*');
        return res.json(candidato);
    },
    async create(req, res) {
        const { name, sobrenome, contato, email } = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('candidatos').insert({
            id,
            name,
            sobrenome,
            contato,
            email
        })
        return res.json({id});
    },
    async update(req, res){
        const {id} = req.params;
        const { name, sobrenome, contato, email } = req.body ;  
        await connection('candidatos').where('id', id).update({
            id,
            name,
            sobrenome,
            contato,
            email
        })
        return res.status(204).send();
    },
    async delete(req, res){
        const {id} = req.params
        await connection('candidatos').where('id',id).delete();
        return res.status(204).send();
    }
}