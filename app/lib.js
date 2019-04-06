/*
 *
 * This is library for testing purpose
 *
 */

 // Vreate holder for library
var lib = {};

lib.fizzBuzzForNN = function(from, count){
  let numbers = Array.from({ length: count }, (v, i) => i+from);
  var results = [];
  numbers.forEach(function(numb){
    results.push(lib.fizzbuzz(numb));
  });
  return results;
};


lib.fizzBuzzFor15 = function(){
  return lib.fizzBuzzForNN(1, 15);
};

lib.fizzBuzzFor30 = function(){
  return lib.fizzBuzzForNN(16, 15);
};

lib.fizzbuzz = function(numb){
  if (numb % (3*5) === 0) return 'FizzBuzz';
  if (numb % 3===0) return 'Fizz';
  if (numb % 5===0) return 'Buzz';
  return numb.toString();
};


 // Export the module
 module.exports = lib;
