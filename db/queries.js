var knex = require('./knex.js');

function Users() {
  return knex('users');
}

function Companies() {
  return knex('companies');
}

// *** queries *** //
// get all users
function getAll() {
  return Users().select();
}

function getAllCompanies() {
  return Companies().select('id','name');
}

module.exports = {
  getAll: getAll,
  getAllCompanies: getAllCompanies
};
