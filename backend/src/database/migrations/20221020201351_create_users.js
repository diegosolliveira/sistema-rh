exports.up = function (knex) {
  return knex.schema.createTable('candidatos', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('contato').notNullable();
    table.string('email').notNullable();
    table.string('status').notNullable();
    table.string('objetivoc1').notNullable();
    table.string('objetivoc2').notNullable();
    table.string('objetivoc3').notNullable();
    table.string('objetivoc4').notNullable();
    table.string('afinidade').notNullable();
    table.string('nota').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('candidatos');
};
