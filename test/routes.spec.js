process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    console.log('test fails after here 1');
    knex.migrate.rollback()
    .then(function() {
      console.log('test fails after here 2');
      knex.migrate.latest()
      .then(function() {
        console.log('test fails after here 3');
        return knex.seed.run()
        .then(function() {
          console.log('test fails after here 4');
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    console.log('test fails after here 5');
    knex.migrate.rollback()
    .then(function() {
      console.log('test fails after here 6');
      done();
    });
  });

  describe('GET /api/v1/users', function() {
    it('should return all users', function(done) {
      chai.request(server)
      .get('/api/v1/users')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(6);
      res.body[0].should.have.property('name');
      res.body[0].name.should.equal('Mark');
      done();
      });
    });
  });

  describe('GET /api/v1/companies', function() {
    it('should return all companies', function(done) {
      chai.request(server)
      .get('/api/v1/companies')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(2);
      res.body[0].should.have.property('id');
      res.body[0].id.should.equal(1);
      res.body[0].should.have.property('name');
      res.body[0].name.should.equal('Facewall');
      res.body[1].should.have.property('id');
      res.body[1].id.should.equal(2);
      res.body[1].should.have.property('name');
      res.body[1].name.should.equal('Carl & Co');
      done();
      });
    });
  });

  describe('GET /api/v1/teams', function() {
    it('should return all teams', function(done) {
      chai.request(server)
      .get('/api/v1/teams')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(3);
      res.body[0].should.have.property('id');
      res.body[0].id.should.equal(1);
      res.body[0].should.have.property('company_id');
      res.body[0].company_id.should.equal(1);
      res.body[0].should.have.property('user_id');
      res.body[0].user_id.should.equal(1);
      res.body[0].should.have.property('contact_user');
      res.body[0].contact_user.should.equal(true);
      done();
      });
    });
  });

  // accounts for vy's added dummy data
  describe('GET /api/v1/listings', function() {
    it('should return all listings', function(done) {
      chai.request(server)
      .get('/api/v1/listings')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(3);
      res.body[0].should.have.property('id');
      res.body[0].id.should.equal(1);
      res.body[0].should.have.property('created_at');
      // res.body[0].created_at.should.equal('2015-01-15 11:00');
      // res.body[0].should.have.property('created_by');
      res.body[0].created_by.should.equal(1);
      res.body[0].should.have.property('name');
      res.body[0].name.should.equal('Join us conquering the world!');
      res.body[0].should.have.property('description');
      res.body[0].description.should.equal('This is your best chance to be on the right side of the equation...');
      done();
      });
    });
  });


  describe('GET /api/v1/applications', function() {
    it('should return all applications', function(done) {
      chai.request(server)
      .get('/api/v1/applications')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.json; // jshint ignore:line
      res.body.should.be.a('array');
      res.body.length.should.equal(9);
      res.body[0].should.have.property('id');
      res.body[0].id.should.equal(1);
      // res.body[0].should.have.property('created_at');
      // res.body[0].created_at.should.equal('2015-01-16 12:00');
      res.body[0].should.have.property('user_id');
      res.body[0].user_id.should.equal(2);
      res.body[0].should.have.property('listing_id');
      res.body[0].listing_id.should.equal(1);
      res.body[0].should.have.property('cover_letter');
      res.body[0].cover_letter.should.equal('Hello, ...');
      done();
      });
    });
  });


});
