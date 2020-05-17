const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {value, user_id} = request.body;
        await connection('accounts').insert({
            value,
            user_id
        })
        return response.json(' Salvo com sucesso! ')
    },
    async index(resquest, response) {
        const account = await connection('accounts').select('*');
        return response.json(account);
    },
    async delete(resquest,response){
        const { id } = request.params;
        
        await connection('accounts').where('id',id).delete();
    }
}
