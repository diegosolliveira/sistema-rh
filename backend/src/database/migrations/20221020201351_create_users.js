exports.up = function (knex) {
  return knex.schema.createTable('candidatos', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('contato').notNullable();
    table.string('email').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('candidatos');
};
