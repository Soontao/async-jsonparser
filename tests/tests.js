var assert = require('assert');
var aJSON = require('../index');

describe('Basic Tests', function() {
  var testContentValue = 'testvalue';

  describe(`deffrent size object`, function() {
    it(`size 1 obj`, function(done) {
      aJSON.parse(genObjectJSON(1, testContentValue), function(err, obj) {
        if (err) done(err);
        else {
          assert.equal(1, Object.keys(obj).length)
          assert.equal(testContentValue, obj[0]);
          done();
        }
      })
    });

    it(`size 10 obj`, function(done) {
      aJSON.parse(genObjectJSON(10, testContentValue), function(err, obj) {
        if (err) done(err);
        else {
          assert.equal(testContentValue, obj[9]);
          done();
        }
      })
    });

    it(`size 100 obj`, function(done) {
      aJSON.parse(genObjectJSON(100, testContentValue), function(err, obj) {
        if (err) done(err);
        else {
          assert.equal(testContentValue, obj[99]);
          done();
        }
      })
    });

    it(`size 1000 obj`, function(done) {
      aJSON.parse(genObjectJSON(1000, testContentValue), function(err, obj) {
        if (err) done(err);
        else {
          assert.equal(testContentValue, obj[999]);
          done();
        }
      })
    });



    it(`size 10000 obj`, function(done) {
      aJSON.parse(genObjectJSON(10000, testContentValue), function(err, obj) {
        if (err) done(err);
        else {
          assert.equal(testContentValue, obj[9999]);
          done();
        }
      })
    });

    it(`size 100000 obj`, function(done) {
      aJSON.parse(genObjectJSON(100000, testContentValue), function(err, obj) {
        if (err) done(err);
        else {
          assert.equal(100000, Object.keys(obj).length)
          assert.equal(testContentValue, obj[99999]);
          done();
        }
      })
    });


  });


});


function genObjectJSON(size, content) {
  return JSON.stringify(genObject(size, content));
}

/**
 * use to gen specific size object
 */
function genObject(size, content) {
  var r = {};
  size = size || 10;
  content = content || process.env
  for (var i = 0; i < size; i++) {
    r[i] = content;
  }
  return r;
}