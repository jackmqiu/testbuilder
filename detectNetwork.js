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
  }else{
    return 'Sorry, we only recognize 2 cards, and the one you entered is not one of them';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


var MasterCard34Test = function(MasterCardLength){
  for (var i = 1; i < 10; i++ ){
    //3rd digit

    for (var i = 1; i<10; i++){
      //4th digits
      for (var i = 1; i<10; i++){
        //5th digits
        for (var i = 1; i<10; i++){
          //6th digits
          for (var i = 1; i<10; i++){
            //7th digits
            for (var i = 1; i<10; i++){
              //8th digits
              for (var i = 1; i<10; i++){
                //9th digits
                for (var i = 1; i<10; i++){
                  //10th digits
                  for (var i = 1; i<10; i++){
                    //11th digits
                    for (var i = 1; i<10; i++){
                      //12th digits
                      for (var i = 1; i<10; i++){
                        //13th digits
                        for (var i = 1; i<10; i++){
                          //14th digits
                          for (var i = 1; i<10; i++){
                            //15th digits

                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
