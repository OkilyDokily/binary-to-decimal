//business logic
function parseAny(digit){
  if(parseInt(digit)>=0){
    return parseInt(digit)
  }
  var unicode = digit.toUpperCase().charCodeAt()
  return unicode - 55;
}

function anyBaseToDecimal(anybase,base){
 return anybase.split("").reverse().reduce(function (accumulator,digit,index){
     return accumulator + (parseAny(digit) * Math.pow(base, index));
   },0);
 }


$(document).ready(function(){
    $("binaryform").submit()
});