
exports.up = function(knex) {
    return knex.schema.createTable('accounts', function (table) {
        table.increments();
        table.decimal('value').notNullable();
        
  
       //ForeignKey
        table.integer('user_id').notNullable(); 
        table.foreign('user_id').references('id').inTable('users');
        
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('accounts');
  };
  