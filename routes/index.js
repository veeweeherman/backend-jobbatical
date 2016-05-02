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
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});


module.exports = router;
