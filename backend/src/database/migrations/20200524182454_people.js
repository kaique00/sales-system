
exports.up = function (knex) {
        return knex.schema.createTable('people', function (table) {
                table.increments();
                table.string('name').notNullable();
                table.string('rg').notNullable();
                table.string('cpf').notNullable();
                table.string('endereco').notNullable();

                // foreignkey

                table.integer('user_id').notNullable();
                table.foreign('user_id').references('id').inTable('user');
        });
};

exports.down = function (knex) {
        return knex.schema.dropTable('people');
};
