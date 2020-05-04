//business logic

function anyBaseToDecimal(anybase,base){
 return anybase.split("").reverse().reduce(function (accumulator,digit,index){
     var value = (parseInt(digit) >=0) ? parseInt(digit) : digit.toUpperCase().charCodeAt() - 55; 
     return accumulator + (value * Math.pow(base, index));
   },0);
 }


$(document).ready(function(){
    $("binaryform").submit()
});