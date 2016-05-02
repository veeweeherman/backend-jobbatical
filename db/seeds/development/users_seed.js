exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        id: 1,
        name: 'Mark',
        created_at: '2015-01-13 15:30'
      });
    }).then(function () {
      return knex('users').insert({
        id: 2,
        name: 'John',
        created_at: '2015-01-13 15:30'
      });
    }).then(function () {
      return knex('users').insert({
        id: 3,
        name: 'Melinda',
        created_at: '2016-01-01 10:30'
      });
    }).then(function () {
      return knex('users').insert({
        id: 4,
        name: 'Carl',
        created_at: '2016-01-17 23:30'
      });
    }).then(function () {
      return knex('users').insert({
        id: 5,
        name: 'Tim',
        created_at: '2016-02-02 16:30'
      });
    }).then(function () {
      return knex('users').insert({
        id: 6,
        name: 'Jessica',
        created_at: '2016-02-02 16:30'
      });
    });
};
