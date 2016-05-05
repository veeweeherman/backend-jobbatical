exports.seed = function(knex, Promise) {
  return knex('applications').del()
    .then(knex('listings').del())
    .then(knex('teams').del()) // only way to make deleting the users work, but when doing so, casuses problems when inserting into users
    .then(knex('users').del()) // Deletes ALL existing entries
    .then(function(){
      console.log('deleted from APPLICATIONS, LISTINGS, TEAMS, USERS table --env TEST!');
    })
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
    }).then(function(){
      console.log('inserted data into USERS table --env TEST!');
    });
};
// exports.seed = function(knex, Promise) {
//   return Promise.join(
//     // Deletes ALL existing entries
//     knex('table_name').del(),
//
//     // Inserts seed entries
//     knex('table_name').insert({id: 1, colName: 'rowValue'}),
//     knex('table_name').insert({id: 2, colName: 'rowValue2'}),
//     knex('table_name').insert({id: 3, colName: 'rowValue3'})
//   );
// };

// exports.seed = function(knex, Promise) {
  // return knex('users').del() // Deletes ALL existing entries
  //   .then(function(){
  //     console.log('deleted from USERS table --env DEV!');
  //   })
  //   .then(function() { // Inserts seed entries one by one in series
  //     return knex('users').insert({
  //       id: 1,
  //       name: 'Mark',
  //       created_at: '2015-01-13 15:30'
  //     });
  //   }).then(function () {
  //     return knex('users').insert({
  //       id: 2,
  //       name: 'John',
  //       created_at: '2015-01-13 15:30'
  //     });
  //   }).then(function () {
  //     return knex('users').insert({
  //       id: 3,
  //       name: 'Melinda',
  //       created_at: '2016-01-01 10:30'
  //     });
  //   }).then(function () {
  //     return knex('users').insert({
  //       id: 4,
  //       name: 'Carl',
  //       created_at: '2016-01-17 23:30'
  //     });
  //   }).then(function () {
  //     return knex('users').insert({
  //       id: 5,
  //       name: 'Tim',
  //       created_at: '2016-02-02 16:30'
  //     });
  //   }).then(function () {
  //     return knex('users').insert({
  //       id: 6,
  //       name: 'Jessica',
  //       created_at: '2016-02-02 16:30'
  //     });
  //   }).then(function(){
  //     console.log('inserted data into USERS table --env DEV!');
  //   });
// };
