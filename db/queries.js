var knex = require('./knex.js');

function Users() {
  return knex('users');
}

function Companies() {
  return knex('companies');
}

function Teams() {
  return knex('teams');
}

function Listings() {
  return knex('listings');
}

function Applications() {
  return knex('applications');
}

// *** queries *** //

// get all users
function getAll() {
  return Users().select();
}

// get all companies
function getAllCompanies() {
  return Companies().select('id','name','created_at');
}

// get all teams
function getAllTeams() {
  return Teams().select();
}

// get all listings
function getAllListings() {
  return Listings().select();
}

// get all applications
function getAllApplications() {
  return Applications().select();
}

// get user by their ID
function getUserByID(userID){
  return Users().where('id', parseInt(userID)).select();

}

module.exports = {
  getAll: getAll,
  getAllCompanies: getAllCompanies,
  getAllTeams: getAllTeams,
  getAllListings: getAllListings,
  getAllApplications: getAllApplications,

  getUserByID: getUserByID
};
