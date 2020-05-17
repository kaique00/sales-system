
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments();
        table.decimal('value').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('products');
  };
  