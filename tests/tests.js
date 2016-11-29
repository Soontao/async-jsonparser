var assert = require('assert');
var aJSON = require('../index');

describe('Basic Tests', function() {
  var step = 4;
  var max = 10000;
  var testContentValue = 'testvalue';
  
  for (var testSize = 1; testSize <= max; testSize *= step) {
    describe(`${testSize} size object`, function() {
      it(`can access obj[${testSize-1}] and value is correct`, function(done) {
        aJSON.parse(genObjectJSON(testSize, testContentValue), function(err, obj) {
          if (err) done(err);
          else {
            assert.equal(testContentValue, obj[testSize - 1]);
            done();
          }
        })
      });
    });
  }


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