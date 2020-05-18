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
    async index(resquest, response) {
        const account = await connection('accounts').select('*');
        return response.json(account);
    },
    async delete(resquest,response){
        const { id } = request.params;
        
        await connection('accounts').where('id',id).delete();
    }
}
