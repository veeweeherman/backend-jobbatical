
exports.seed = function(knex, Promise) {
  return knex('applications').del()
    .then(function(){
      console.log('DELETED from applications table! --env TEST!');
    })
    .then(function(){
      return knex('applications').insert({
        id: 1,
        created_at: '2015-01-16 12:00',
        user_id: 2,
        listing_id: 1,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 2,
        created_at: '2016-02-16 12:00',
        user_id: 5,
        listing_id: 1,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 3,
        created_at: '2016-02-02 19:00',
        user_id: 6,
        listing_id: 1,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 4,
        created_at: '2016-02-02 12:00',
        user_id: 2,
        listing_id: 2,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 5,
        created_at: '2016-02-05 12:00',
        user_id: 5,
        listing_id: 2,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 6,
        created_at: '2016-02-10 12:00',
        user_id: 6,
        listing_id: 2,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 7,
        created_at: '2016-02-06 12:00',
        user_id: 6,
        listing_id: 3,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 8,
        created_at: '2016-02-11 12:00',
        user_id: 5,
        listing_id: 3,
        cover_letter: 'Hello, ...'
      });
    }).then(function(){
      return knex('applications').insert({
        id: 9,
        created_at: '2016-02-14 12:00',
        user_id: 2,
        listing_id: 3,
        cover_letter: 'Hello, ...'
      });
    })
    .then(function(){
      console.log('INSERTED into applications table! --env TEST!');
    })
};
