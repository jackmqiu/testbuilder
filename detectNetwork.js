// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if(cardNumber[0] === '3' && (cardNumber[1] === '8' || cardNumber[1] === '9') && cardNumber.length === 14){
    return 'Diner\'s Club';
  }else if(cardNumber[0] === '3' && (cardNumber[1] === '4' || cardNumber[1] === '7') && cardNumber.length === 15){
    return 'American Express';
  }else if(cardNumber[0] === '4' &&(cardNumber.length === 13||cardNumber.length === 16||cardNumber.length === 19)){
    return 'Visa';
  }else if(cardNumber[0] === '5' &&(cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4'|| cardNumber[1] === '5') && cardNumber.length===16){
    return 'MasterCard';
  }else if(cardNumber[0] ==='6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1' && (cardNumber.length === 16 || cardNumber.length === 19)){
    return 'Discover';
  }else if((parseInt(cardNumber.slice(0,3)) <= 649 && parseInt(cardNumber.slice(0,3)) >= 644) && (cardNumber.length === 16 || cardNumber.length === 19)){
    return 'Discover';
  }else if(cardNumber[0] === '6' && cardNumber[1] === '5' && (cardNumber.length === 16 || cardNumber.length === 19)){
    return 'Discover';
  }else if((cardNumber.slice(0, 4) === '5018' || cardNumber.slice(0, 4) === '5038' || cardNumber.slice(0, 4) === '5020' || cardNumber.slice(0, 4) === '6034') && (cardNumber.length >= 12 || cardNumber.length <= 19)  ){
    return 'Maestro';
  }else{
    return 'Sorry, we only recognize 4 cards, and the one you entered is not one of them';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
