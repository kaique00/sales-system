const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {name, value, description} = request.body;
        await connection('products').insert({
            name,
            value,
            description,
        })
        console.log(name,value,description)
        return response.json('Produto salvo com sucesso !!!')
    },
    async index(request, response) {
        const {page = 1} = request.query;
        const count = await connection('products').count();
        console.log(count)

        const products = await connection('products').select('*');
        return response.json(products);
    },
    async delete(resquest,response){
        const { id } = request.params;
        
        await connection('users').where('id',id).delete();
    }
}
