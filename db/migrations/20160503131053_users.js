exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments('id'); // primary key column
    table.string('name');
    table.timestamps();
  }).then(function(){
    console.log('users table CREATED!');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
  // .then(knex.schema.dropTableIfExists('users'))

  .then(function(){
    console.log('users table DROPPED!');
  });
};
// when runnign migrations:lastest in both test and dev environments, created tables was logged
