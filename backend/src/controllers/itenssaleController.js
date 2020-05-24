const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { value, sale_id, product_id, } = request.body;
        await connection('itensSale').insert({
            value,
            sale_id,
            product_id
        })
        return response.json('Item adicionado com sucesso!!')
    },
    async index(request, response) {
        const itenssale = await connection('itenssale').select('*')
        try {
            return response.json(itenssale)
        } catch (err) {
            return response.json({ message: 'Erro ao listar itens da venda' })
        }

    },
    async delete(resquest, response) {
        const { id } = request.params;

        await connection('user').where('id', id).delete();
    },
    async update(request, response) {
        const { itenssale_id, value, sale_id, product_id, } = request.body
        await connection('itenssale').update('value', value, 'sale_id', sale_id,
            'product_id', product_id).where('id', itenssale_id)
        try {
            return response.json({ message: 'Alterado com sucesso' })
        } catch (err) {
            return response.json({ message: 'Erro ao alterar produto' })
        }
    }

}
