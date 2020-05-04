// function binaryToDecimal(binary){
//   return binary.split("").reverse().reduce(function (accumulator,digit,index){
//     return accumulator + (parseInt(digit) * Math.pow(2, index));
//   },0);
// }


// function parseAny(digit){
 
//   if(parseInt(digit)>=0){
//     return parseInt(digit)
//   }
//   var unicode = digit.toUpperCase().charCodeAt()
//   return unicode - 55;
// }

// function hexadecimalToDecimal(hexadecimal){
//   return hexadecimal.split("").reverse().reduce(function (accumulator,digit,index){
//     return accumulator + (parseAny(digit) * Math.pow(16, index));
//   },0);
// }

// function anyBaseToDecimal(anybase,base){
//   return anybase.split("").reverse().reduce(function (accumulator,digit,index){
//     return accumulator + (parseAny(digit) * Math.pow(base, index));
//   },0);
// }


function parseBinaryDigit(digit){
  return parseInt(digit)
}

function parseAny(digit){
  if(parseInt(digit)>=0){
    return parseInt(digit)
  }
  var unicode = digit.toUpperCase().charCodeAt()
  return unicode - 55;
}

function convertHighestPlaceToDecimal(binary){
  var highest = binary.split("")[0];
  return parseBinaryDigit(highest) * Math.pow(2,binary.length-1);
}

function addSecondAndFirstDecimal(binary){
  var highest = convertHighestPlaceToDecimal(binary);
  var second = parseBinaryDigit(binary.split("")[1]);
  return highest + second;
}

function binaryToDecimal(binary){
 return binary.split("").reverse().reduce(function(accumulator,digit,index){
    return accumulator + (parseBinaryDigit(digit) * Math.pow(2,index));
  },0);
}

 function hexadecimalToDecimal(hexadecimal){
  return hexadecimal.split("").reverse().reduce(function (accumulator,digit,index){
     return accumulator + (parseAny(digit) * Math.pow(16, index));
   },0);
}

function anyBaseToDecimal(anybase,base){
 return anybase.split("").reverse().reduce(function (accumulator,digit,index){
     return accumulator + (parseAny(digit) * Math.pow(base, index));
   },0);
 }


$(document).ready(function(){
    console.log(binaryToDecimal("11"));
});