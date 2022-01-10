module.exports = function toReadable (number) {
  let strNumber = number.toString();
  let readableNumber = '';

  if (number == 0)
    return "zero";
  for (let i = strNumber.length - 1; i >= 0; i--){
    //console.log('test');
    switch(i){
      case 0: //single number
        if (number % 100 > 10 &&  number % 100 < 20)
          readableNumber += tenths(+strNumber[strNumber.length - 1]);
        else
          readableNumber += single(+strNumber[strNumber.length - 1]);
        break;
      case 1://decimal and tenths
        if (number % 100 > 10 &&  number % 100 < 20)
          break;
        readableNumber += decimal(+strNumber[strNumber.length - 2]);
        break;
      case 2://hundredths
        readableNumber += hundredths(+strNumber[strNumber.length - 3]);
    }  
  }
  if (readableNumber[readableNumber.length - 1] === " ")
    return readableNumber.slice(0, readableNumber.length - 1);
  return readableNumber;
}

function single(singleNumber){
  switch(singleNumber){
    case 0: return "";
    case 1: return "one"; 
    case 2: return "two"; 
    case 3: return "three"; 
    case 4: return "four"; 
    case 5: return "five"; 
    case 6: return "six"; 
    case 7: return "seven"; 
    case 8: return "eight"; 
    case 9: return "nine"; 
  }
}

function tenths(tenthsNumber){
  switch(tenthsNumber){
    case 1: return "eleven";
    case 2: return "twelve";
    case 3: return "thirteen";
    case 4: return "fourteen";
    case 5: return "fifteen";
    case 6: return "sixteen";
    case 7: return "seventeen";
    case 8: return "eighteen";
    case 9: return "nineteen";
  }
}

function decimal(decNumber){
  switch(decNumber){
    case 0: return "";
    case 1: return "ten "; 
    case 2: return "twenty "; 
    case 3: return "thirty "; 
    case 4: return "forty "; 
    case 5: return "fifty "; 
    case 6: return "sixty "; 
    case 7: return "seventy "; 
    case 8: return "eighty "; 
    case 9: return "ninety "; 
  }
}

function hundredths(hundredthsNumber){
  switch(hundredthsNumber){
    case 1: return "one hundred ";
    case 2: return "two hundred ";
    case 3: return "three hundred ";
    case 4: return "four hundred ";
    case 5: return "five hundred ";
    case 6: return "six hundred ";
    case 7: return "seven hundred ";
    case 8: return "eight hundred ";
    case 9: return "nine hundred ";
  }
}
