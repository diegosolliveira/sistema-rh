exports.up = function (knex) {
    return knex.schema.createTable('vagas', function (table) {
      table.string('id').primary();
      table.string('titulo').notNullable();
      table.string('descricao').notNullable();
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('vagas');
  };