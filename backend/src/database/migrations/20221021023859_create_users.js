exports.up = function (knex) {
    return knex.schema.createTable('vagas', function (table) {
      table.string('id').primary();
      table.string('titulo').notNullable();
      table.string('descricao').notNullable();
      table.string('objetivo1').notNullable();
      table.string('objetivo2').notNullable();
      table.string('objetivo3').notNullable();
      table.string('objetivo4').notNullable();
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('vagas');
  };