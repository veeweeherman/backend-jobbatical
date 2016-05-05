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

// Endpoint #2 sub queries

// get user's info by their ID
function getUserByID(userID){
  return Users().where('id', parseInt(userID)).select();
}
// then get the associated listinsg based on user's ID
function getListingsByUserID(userID){
  return Listings().where('created_by', parseInt(userID)).select();
}
// then get all the applications its listing's info if this user has put put any applications recently
function getAllApplicationsByUserID(userID){
  return Listings().innerJoin('applications', function() {
    this.on('applications.user_id', '=', parseInt(userID))
    .andOn('applications.listing_id', '=', 'listings.id')
  }).select('applications.id AS applications_id', 'applications.created_at', 'applications.cover_letter', 'listings.id AS listings_id', 'listings.name', 'listings.description')

// applications.id AS applications_id, applications.created_at, applications.cover_letter, listings.id AS listings_id, listings.name, listings.description
}


module.exports = {
  getAll: getAll,
  getAllCompanies: getAllCompanies,
  getAllTeams: getAllTeams,
  getAllListings: getAllListings,
  getAllApplications: getAllApplications,

  getUserByID: getUserByID,
  getListingsByUserID: getListingsByUserID,
  getAllApplicationsByUserID: getAllApplicationsByUserID
};

// console.log(bazza._statements[0].value);
