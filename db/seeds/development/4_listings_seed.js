
exports.seed = function(knex, Promise) {
  return knex('listings').del() // Deletes ALL existing entries
    .then(function(){
      console.log('DELETED data from listings table! env DEVLOPMENT!');
    })
    .then(function() { // Inserts seed entries one by one in series
      return knex('listings').insert({
        id: 1,
        created_at: '2015-01-15 11:00',
        created_by: 1,
        name: 'Join us conquering the world!',
        description: 'This is your best chance to be on the right side of the equation...'
      });
    }).then(function () {
      return knex('listings').insert({
        id: 2,
        created_at: '2016-01-30 15:30',
        created_by: 3,
        name: 'Have you got an itch for code?',
        description: 'Learn how to build life-changing software...'
      });
    }).then(function () {
      return knex('listings').insert({
        id: 3,
        created_at: '2016-02-03 13:15',
        created_by: 4,
        name: 'Make the hottest new cat video platform',
        description: 'Help us code the libraries and write the docs for Meow.js'
      });
    })
    .then(function() {
      console.log('INSERTED data into listings table --env DEVLOPMENT!');
    });
};
