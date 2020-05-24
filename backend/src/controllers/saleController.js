const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { value, user_id, discount, observation } = request.body;
        const sale = await connection('sale').insert({
            value,
            discount,
            observation,
            user_id
        })
        try {
            return response.json({ message: 'Salvo com sucesso', sale_id: sale })
        } catch (err) {
            return response.json({ message: 'Erro ao salvar venda' })
        }
    },
    async index(request, response) {
        const sale = await connection('sale').select('*');
        try {
            return response.json(sale);
        } catch (err) {
            return response.json({ message: 'Erro ao gerar lista' })
        }       
    },
    async delete(request, response) {
        const id = request.params.id;
        await connection('sale').where('id', id).delete();
        try {
            return response.json({ message: 'Deletado com sucesso' })
        } catch (err) {
            return response.json({ message: 'Erro ao deletar venda' })
        }
    },
    async update(request, response) {
        const {sale_id, value, discont, observation, user_id } = request.body
        await connection('sale').update('sale_id',sale_id, 'value',value, 'discont',discont,
         'observation',observation, 'user_id',user_id).where('id', sale_id)
        try {
            return response.json({ message: 'Alterado com sucesso' })
        } catch (err) {
            return response.json({ message: 'Erro ao alterar venda' })
        }
    }
}
