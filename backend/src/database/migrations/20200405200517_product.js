
exports.up = function(knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments();
        table.decimal('value').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('amount').notNullable();
        table.decimal('type').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('product');
  };
  