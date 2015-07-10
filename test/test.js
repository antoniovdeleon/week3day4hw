//
// test/test.js
//

var request = require('request')
  , expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

 //#3

describe('Google.com', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://google.com/', function(err, res, body) {
      expect(err).be.a('null')
      console.log(err)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});


describe('/api/', function() {
  it('should have a String of speak like a web dev  - success', function(done) {
    request('http://localhost:3000/api/', function(err, res, body) {
       expect(body).to.have.string('speak like a web dev');
       //expect(body).to.have.string('speak like a CAT); 
      done();

    })
  })
});

describe('/api/phrases/', function() {
  it('should have a the string "Id" inside  - success', function(done) {
    request('http://localhost:3000/api/phrases/', function(err, res, body) {
      console.log(body)
       expect(body).to.have.string("id");
       //expect(body).to.have.string('speak like a CAT'); 
      done();

    });
  });
});

describe('test to see if it has an a called string--', function() {
  it('test to see if it has a string that we call--', function(done) {
   request.post('http://localhost:3000/api/phrases', {form:{ id:"33",word: "dummy", definition:" dun person" }}, function(err, res, body) {
        expect(body).to.have.string("dummy");
        //expect(res.statusCode).to.equal(200);
        // console.log();//fail
        // expect(body).to.have.string('word');// 
        // expect().to.equal(300);
      done();
       
    });
  });
});

/*

describe('cathphrasely', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/api/phrases', function(err, res, body) {
      // expect(res.statusCode).to.equal(200)
      console.log(err, res, body)
       expect(res.statusCode).to.equal(200)
      done();
    })
  })
});

*/





/*
Turn on your localhost:3000 server and point the test at the url to one of your localhost:3000 GET API paths. Log to the console err, res, and body.
Write 1 test for each of your API's GET routes (make sure you can make them both fail and pass). Reproduce example above in notes.
Add 1 POST test to your API - look at request docs to send request.post() and check response.
Add 1 PUT test to your API - ditto.
Add 1 DELTE test to your API - ditto.

*/




