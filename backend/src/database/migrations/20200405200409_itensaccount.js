exports.up = function(knex) {
    return knex.schema.createTable('itensaccount', function (table) {
        table.increments();
        table.decimal('value').notNullable();
        
  
       //ForeignKey
        table.integer('account_id').notNullable(); 
        table.foreign('account_id').references('id').inTable('accounts');

        table.integer('product_id').notNullable();
        table.foreign('product_id').references('id').inTable('products')
        
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('itensaccount');
  };
  