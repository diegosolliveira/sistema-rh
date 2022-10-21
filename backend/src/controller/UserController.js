const crypto = require('crypto');
const connection = require('../database/connection');
const { routes } = require('../routes');

module.exports = {

    async create(req, res) {
        const {name, email, senha} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('users').insert({
            id,
            name,
            email,
            senha 
        })
        return res.json({id});
    },

    async list(req, res) {
        const users = await connection('users').select('*');
        return res.json(users);
    },

    async show(req, res) {
        const {id} = req.params
        const user = await connection('users').where('id', id).select('*');
        return res.json(user);
    },

    async auth(req, res) {
        const { email, senha } = req.body
        const user = await connection('users')
            .where({
                email: email,
                senha: senha
            }).select('*')

        return res.status(200).json(user);
    },

    async update(req, res){
        const {id} = req.params;
        const {name, email, senha} = req.body ;  
        await connection('users').where('id', id).update({
            id,
            name,
            email,
            senha
    
        })
        return res.status(204).send();
    },
    
    async delete(req, res){
        const {id} = req.params;
        await connection('users').where('id',id).delete();
        return res.status(204).send();
    }
}