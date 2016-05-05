
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('listings', function(table){
    table.increments('id') // primary key column
    table.timestamps();
    table.integer('created_by').references('id').inTable('users')
    .onDelete('CASCADE').onUpdate('CASCADE');
    table.string('name');
    table.string('description');
  }).then(function(){
    console.log('listings table CREATED!');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings')
  .then(function(){
    console.log('listing table DROPPED!');
  });
};
