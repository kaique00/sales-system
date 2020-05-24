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
        const user = await connection('users').select('*').where('id', id);
        return response.json(user);
    },
    async delete(request,response){
        const { id } = request.params;
        
        await connection('users').where('id',id).delete();
        return response.json({ message: "Sucesso"})
    },
    async update(request, response) {
        const { itenssale_id, value, sale_id, product_id, } = request.body
        await connection('itenssale').update('value', value, 'sale_id', sale_id,
            'product_id', product_id).where('id', sale_id)
        try {
            return response.json({ message: 'Alterado com sucesso' })
        } catch (err) {
            return response.json({ message: 'Erro ao alterar usuario' })
        }
    }
}
