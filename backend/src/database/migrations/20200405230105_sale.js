
exports.up = function(knex) {
    return knex.schema.createTable('sale', function (table) {
        table.increments();
        table.decimal('value').notNullable();
        table.decimal('discount').notNullable();
        table.string('observation').notNullable();
        table.datetime('date').notNullable();
        
       //ForeignKey
        table.integer('user_id').notNullable(); 
        table.foreign('user_id').references('id').inTable('user');
        table.integer('people_id').notNullable(); 
        table.foreign('people_id').references('id').inTable('people');
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('sale');
  };
  