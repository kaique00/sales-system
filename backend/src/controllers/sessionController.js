const connection = require('../database/connection')
module.exports = {
    async create(request, response) {
        const {name,password} = request.body;

        const username = await connection('users').where('name', name).select('name').first();

        if(!username){
            return response.status(404).json({error : 'Not found Name'})
        }
 
        return response.json({username})
    }
}