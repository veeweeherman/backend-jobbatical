process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var knex = require('../db/knex');

var should = chai.should();

chai.use(chaiHttp);

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
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


});
