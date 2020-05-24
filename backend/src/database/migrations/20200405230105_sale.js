
exports.up = function(knex) {
    return knex.schema.createTable('sale', function (table) {
        table.increments();
        table.decimal('value').notNullable();
        table.decimal('discount').notNullable();
        table.string('observation').notNullable();
        
       //ForeignKey
        table.integer('user_id').notNullable(); 
        table.foreign('user_id').references('id').inTable('user');
        
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('sale');
  };
  