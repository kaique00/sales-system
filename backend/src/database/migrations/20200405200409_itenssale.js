exports.up = function(knex) {
    return knex.schema.createTable('itenssale', function (table) {
        table.increments();
        table.decimal('value').notNullable();
       //ForeignKey
        table.integer('sale_id').notNullable(); 
        table.foreign('sale_id').references('id').inTable('sale');

        table.integer('product_id').notNullable();
        table.foreign('product_id').references('id').inTable('product')
        //
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('itenssale');
  };
  