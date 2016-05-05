exports.seed = function(knex, Promise) {
  return knex('teams').del() // Deletes ALL existing entries
    .then(function(){
      console.log('deleted from TEAMS table --env TEST!');
    })
    .then(function() { // Inserts seed entries one by one in series
      return knex('teams').insert({
        id: 1,
        company_id: 1,
        user_id: 1,
        contact_user: true
      });
    }).then(function () {
      return knex('teams').insert({
        id: 2,
        company_id: 2,
        user_id: 3,
        contact_user: false
      });
    }).then(function () {
      return knex('teams').insert({
        id: 3,
        company_id: 2,
        user_id: 4,
        contact_user: true
      });
    })
    // .then(knex('users').del()).then(function(){console.log('users table in the teams seed, now getting deleted?');})
    .then(function(){
      console.log('inserted data into TEAMS table --env TEST!');
    });
};

// exports.seed = function(knex, Promise) {
//
//   return knex('users').insert([
//     {
//       id: 1,
//       name: 'Mark',
//       created_at: '2015-01-13 15:30'
//     },{
//       id: 2,
//       name: 'John',
//       created_at: '2015-01-13 15:30'
//     },{
//       id: 3,
//       name: 'Melinda',
//       created_at: '2016-01-01 10:30'
//     },{
//       id: 4,
//       name: 'Carl',
//       created_at: '2016-01-17 23:30'
//     },{
//       id: 5,
//       name: 'Tim',
//       created_at: '2016-02-02 16:30'
//     },{
//       id: 6,
//       name: 'Jessica',
//       created_at: '2016-02-02 16:30'
//     }
//
//   ]).then(function(){console.log('USERS table created and data inserted in TEAMSSEED.js --env DEV');})
//     .then(knex('teams').del())  // Deletes ALL existing entries
//     .then(function(){
//       console.log('deleted from TEAMS table --env DEV!');
//     })
//     .then(function() { // Inserts seed entries one by one in series
//       return knex('teams').insert({
//         id: 1,
//         company_id: 1,
//         user_id: 1,
//         contact_user: true
//       });
//     }).then(function () {
//       return knex('teams').insert({
//         id: 2,
//         company_id: 2,
//         user_id: 3,
//         contact_user: false
//       });
//     }).then(function () {
//       return knex('teams').insert({
//         id: 3,
//         company_id: 2,
//         user_id: 4,
//         contact_user: true
//       });
//     })
//     // .then(knex('users').del()).then(function(){console.log('users table in the teams seed, now getting deleted?');})
//     .then(function(){
//       console.log('inserted data into TEAMS table --env DEV!');
//     });
// };


// exports.seed = function(knex, Promise) {
//   return knex('teams').del()  // Deletes ALL existing entries
//     .then(function(){
//       console.log('deleted from TEAMS table --env DEV!');
//     })
//     .then(function() { // Inserts seed entries one by one in series
//       return knex('teams').insert({
//         id: 1,
//         company_id: companies.id,
//         user_id: users.id,
//         contact_user: true
//       });
//     }).then(function () {
//       return knex('teams').insert({
//         id: 2,
//         company_id: companies.id,
//         user_id: users.id,
//         contact_user: false
//       });
//     }).then(function () {
//       return knex('teams').insert({
//         id: 3,
//         company_id: companies.id,
//         user_id: users.id,
//         contact_user: true
//       });
//     }).then(function(){
//       console.log('inserted data into TEAMS table --env DEV!');
//     });
// };
