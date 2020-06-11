
exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('cpf').notNullable();
        table.string('rg').notNullable();
        table.date('dateNasc').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
