exports.seed = function(knex, Promise) {
  return knex('companies').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('companies').insert({
        id: 1,
        name: 'Facewall',
        created_at: '2015-01-13 15:00'
      });
    }).then(function () {
      return knex('companies').insert({
        id: 2,
        name: 'Carl & Co',
        created_at: '2015-01-17 15:00'
      });
    });
};
