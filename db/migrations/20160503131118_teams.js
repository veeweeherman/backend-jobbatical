
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('teams', function(table){
    table.increments('id'); // primary key column
    table.integer('company_id').references('id').inTable('companies')
    .onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('user_id').references('id').inTable('users')
    .onDelete('CASCADE').onUpdate('CASCADE');
    table.boolean('contact_user').defaultTo(false);
  }).then(function(){
    console.log('teams table CREATED!');
  });
};

exports.down = function(knex, Promise) {
  // console.log('here???? inteams migr dropping teams table...');
  return knex.schema.dropTableIfExists('teams')
  .then(function(){
    console.log('teams table DROPPED!');
  });
};


// table.bigInteger('AddressId').unsigned().index().references('id').inTable('Address')
// exports.foo = 123;
// console.log(exports);
