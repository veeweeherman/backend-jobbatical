// var teams = require('./20160503131118_teams.js').up;
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('companies', function(table){
    table.increments('id'); // primary key column
    table.string('name');
    table.timestamps();
  }).then(function(){
    console.log('companies table CREATED!');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('companies')
  .then(function(){
    console.log('companies table DROPPED!');
  });
};

// console.log(exports, '---------------', teams);
