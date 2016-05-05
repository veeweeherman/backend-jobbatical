exports.seed = function(knex, Promise) {
  return knex('companies').del()
    .then(function(){
      console.log('deleted from COMPANIES table --env TEST!');
    })
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
    }).then(function(){
      console.log('inserted data into COMPANIES table --env TEST!');
    });
};

// exports.seed = function(knex, Promise) {
//   return knex('teams').del()
//     .then(knex('companies').del())  // Deletes ALL existing entries
//
//     .then(function(){
//       console.log('deleted from TEAM and COMPANIES table --env TEST!');
//     })
//     .then(function() { // Inserts seed entries one by one in series
//       return knex('companies').insert({
//         id: 1,
//         name: 'Facewall',
//         created_at: '2015-01-13 15:00'
//       });
//     }).then(function () {
//       return knex('companies').insert({
//         id: 2,
//         name: 'Carl & Co',
//         created_at: '2015-01-17 15:00'
//       });
//     }).then(function(){
//       console.log('inserted data into COMPANIES table --env TEST!');
//     });
// };
