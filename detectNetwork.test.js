/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var expect = chai.expect;
  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };
  var expect = chai.expect;

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert.isOk;
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.


  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function(){
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      });
      console.log(prefix + '1234567890123');
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix+'1234567890123456')).to.equal('Discover')
      });
      console.log(prefix + '1234567890123456');
    })(prefix)
  };
  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  var suffix = '12345678';
  for (var length = 12; length <= (19); length++){
    (function(suffix) {
      console.log(suffix)
      it('always has a prefix of 5018 and a length of '+length, function(){
        expect(detectNetwork('5018'+suffix)).to.equal('Maestro');
      });
      it('always has a prefix of 5020 and a length of '+length, function(){
        expect(detectNetwork('5020'+suffix)).to.equal('Maestro');
      });
      it('always has a prefix of 5038 and a length of '+length, function(){
        expect(detectNetwork('5038'+suffix)).to.equal('Maestro');
      });
      it('always has a prefix of 6304 and a length of '+length, function(){
        expect(detectNetwork('6304'+suffix)).to.equal('Maestro');
      });

    })(suffix)
    suffix = suffix.concat('0');

  };



});
var expect = chai.expect;
describe('should support China UnionPay', function(){
  for(var length = 16; length <= 19; length++){
    for(var prefix = 622126; prefix <= 622925; prefix++){
      (function(prefix, length){
        it('has a prefix of ' + prefix + ' and a length of ' + (length + JSON.stringify(prefix).length), function(){
          expect(detectNetwork(prefix + '0'.repeat(length))).to.equal('China UnionPay');
        })
      })(prefix, length-JSON.stringify(prefix).length)
    }
  }
  for(var length = 16; length <= 19; length++){
    for(var prefix = 624; prefix <= 626; prefix++){
      (function(prefix, length){
        it('has a prefix of ' + prefix + ' and a length of ' + (length + JSON.stringify(prefix).length), function(){
          expect(detectNetwork(prefix + '0'.repeat(length))).to.equal('China UnionPay');
        })
      })(prefix, length-JSON.stringify(prefix).length)
    }
  }
  for(var length = 16; length <= 19; length++){
    for(var prefix = 6282; prefix <= 6288; prefix++){
      (function(prefix, length){
        it('has a prefix of ' + prefix + ' and a length of ' + (length + JSON.stringify(prefix).length), function(){
          expect(detectNetwork(prefix + '0'.repeat(length))).to.equal('China UnionPay');
        })
      })(prefix, length-JSON.stringify(prefix).length)
    }
  }

})
describe('should support Switch', function(){
  var lengthArray= ['16','18','19'];
  var prefixArray = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  for(var i = 0; i < lengthArray.length; i ++){
    for(var j = 0; j < prefixArray.length; j++){
      (function(prefix1, suffix1){
        it('has a prefix of ' + prefix1 + ' and a length of ' + (prefix1+suffix1).length, function(){
          expect(detectNetwork(prefix1 + suffix1)).to.equal('Switch');
        })
      })(prefixArray[j], '0'.repeat(parseInt(lengthArray[i])-prefixArray[j].length))
    }
  }
})
