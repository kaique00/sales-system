const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {value, account_id, product_id} = request.body;
        await connection('itensAccount').insert({
            value,
            account_id,
            product_id
        })
        return response.json('Iten adicionado com sucesso!!')
    },
    async index(request, response) {
        const itensAccount= await connection('itensAccount').select('*')

        return response.json(itensAccount)
    },
    async delete(resquest,response){
        const { id } = request.params;
        
        await connection('users').where('id',id).delete();
    }
}
