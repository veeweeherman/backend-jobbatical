exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments(); // primary key column
    table.string('name');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
