var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all users *** //
router.get('/users', function(req, res, next) {
  queries.getAll()
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET all companies *** //
router.get('/companies', function(req, res, next) {
  queries.getAllCompanies()
  .then(function(companies) {
    res.status(200).json(companies);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET all teams *** //
router.get('/teams', function(req, res, next) {
  queries.getAllTeams()
  .then(function(teams) {
    res.status(200).json(teams);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET all listings *** //
router.get('/listings', function(req, res, next) {
  queries.getAllListings()
  .then(function(listings) {
    res.status(200).json(listings);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET all applications *** //
router.get('/applications', function(req, res, next) {
  queries.getAllApplications()
  .then(function(applications) {
    res.status(200).json(applications);
  })
  .catch(function(error) {
    next(error);
  });
});


// Queries to satisfy Endpoint #2
// *** GET all related info for user by their id *** //
router.get('/users/:id', function(req, res, next) {
  queries.getUserByID(req.params.id)

  // queries.getAllApplicationsByUserID(req.params.id)
  .then(function(user) {
    // inside .then is where the crazy knex obj returns the desired data?
    res.status(200).json(user);
  })
  .catch(function(error) {
    next(error);
  })

});




module.exports = router;
