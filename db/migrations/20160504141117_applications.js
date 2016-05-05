
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('applications', function(table){
    table.increments('id') // primary key column
    table.timestamps();
    table.integer('user_id').references('id').inTable('users')
    .onDelete('CASCADE').onUpdate('CASCADE');
    // table.string('listing_id').references('id').inTable('listings'); <-- cannot do this but the following works: ??
    table.integer('listing_id').unsigned().references('listings.id')
    
    .onDelete('CASCADE').onUpdate('CASCADE');
    table.string('cover_letter');
  }).then(function(){
    console.log('applications table CREATED!');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('applications')
  .then(function(){
    console.log('applications table DROPPED!');
  });
};
