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
  return Users().where('id', parseInt(userID)).select('id AS user_id', 'name AS user_name', 'created_at AS user_created_at');
}

// then get all the applications its listing's info if this user has put put any applications recently
function getAllApplicationsByUserID(userID){
  return Listings().innerJoin('applications', function() {
    this.on('applications.user_id', '=', parseInt(userID))
    .andOn('applications.listing_id', '=', 'listings.id')
  }).select('applications.id AS applications_id', 'applications.created_at AS listing_created_at', 'applications.cover_letter', 'listings.id AS listings_id', 'listings.name AS listings_name', 'listings.description')

}

// get info for associated companies based on user's id
function getAllCompaniesByUserID(userID){
  return Applications()
  .innerJoin('listings', function() {
  this.on('applications.listing_id', '=', 'listings.id')
  })
  .innerJoin('teams', function() {
    this.on('teams.user_id', '=', 'listings.created_by')
  })
  .innerJoin('companies', function(){
    this.on('teams.company_id', '=', 'companies.id')
  })
  .where( 'applications.user_id', '=', userID)
  .orWhere('teams.user_id', '=', userID)
  .distinct()
  .select('companies.id','companies.created_at','companies.name')


  // select distinct 'first_name' from customers
  // knex('customers')
  // .distinct('first_name', 'last_name')
  // .select()
}
// SELECT DISTINCT companies.id,companies.created_at,companies.name,
  // (SELECT coalesce(contact_user, true) AS contact_user from teams where user_id = id)
// FROM applications
// INNER JOIN listings
// ON applications.listing_id = listings.id
// INNER JOIN teams
// ON teams.user_id = listings.created_by
// INNER JOIN companies
// ON teams.company_id = companies.id
// WHERE applications.user_id = id
// " OR teams.user_id = id ;


module.exports = {
  getAll: getAll,
  getAllCompanies: getAllCompanies,
  getAllTeams: getAllTeams,
  getAllListings: getAllListings,
  getAllApplications: getAllApplications,

  getUserByID: getUserByID,
  getAllApplicationsByUserID: getAllApplicationsByUserID,
  getAllCompaniesByUserID: getAllCompaniesByUserID
};
