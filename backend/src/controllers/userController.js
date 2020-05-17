const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {name, email, password} = request.body;
        await connection('users').insert({
            name,
            email,
            password,
        })
        return response.json({ name })
    },
    async index(resquest, response) {
        const users = await connection('users').select('*');
        return response.json(users);
    },
    async listId(request, response) {
        const {id} = request.params;
        const users = await connection('users').select('*').where('id', id);
        return response.json(users);
    },
    async delete(request,response){
        const { id } = request.params;
        
        await connection('users').where('id',id).delete();
        return response.json({ message: "Sucesso"})
    }
}
