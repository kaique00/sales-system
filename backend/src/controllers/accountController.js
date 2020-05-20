const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {value, user_id} = request.body;
        const account  = await connection('accounts').insert({
            value,
            user_id
        })
        console.log(account)
        return response.json({account_id:account})
    },
    async index(request, response) {
        const account = await connection('accounts').select('*');
        return response.json(account);
    },
    async delete(request,response){
        const id = request.params.id;
        await connection('accounts').where('id',id).delete();
        return response.json({message:'Deletado com sucesso'})
    },
    async update(request,response){
        const update = request.body
        await connection('accounts').update('value', 250).where('id',127)
        console.log('deuboa')

    }
}
