const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { name, value, description, amount } = request.body;
        await connection('product').insert({
            name,
            value,
            description,
            amount
        })
        try {
            return response.json({ message: 'Produto salvo com sucesso.' })
        } catch (err) {
            return response.json({ message: 'Erro ao salvar produto.' })
        }

    },
    async index(request, response) {
        const product = await connection('product').select('*');

        try {
        
            return response.json(product)
            
        } catch (err) {
            return response.json({ message: 'Erro ao salvar produto.' })
        }s
    },
    async delete(resquest, response) {
        const { id } = request.params;

        await connection('product').where('id', id).delete();
        try {
            return response.json({ message: 'Produto deletado com sucesso.' })
        } catch (err) {
            return response.json({ message: 'Erro ao deletar produto.' })
        }
    },
    async update(request, response) {
        const  { product_id, name, value, description, amount } = request.body
        await connection('product').update('name',name, 'value', value, 'description',description,
         'amount',amount).where('id', product_id)
        try {
            return response.json({ message: 'Alterado com sucesso' })
        } catch (err) {
            return response.json({ message: 'Erro ao alterar produto' })
        }
    }
}
