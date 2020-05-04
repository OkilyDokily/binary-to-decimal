//business logic

function anyBaseToDecimal(anybase,base){
 return anybase.split("").reverse().reduce(function (accumulator,digit,index){
     var digitvalue = (parseInt(digit) >=0) ? parseInt(digit) : digit.toUpperCase().charCodeAt() - 55; 
     return accumulator + (digitvalue * Math.pow(base, index));
   },0);
 }


$(document).ready(function(){
    $("#binaryform").submit(function(e){
      e.preventDefault();
      var binary = $("#binary").val();
      $("#binaryresult").text(anyBaseToDecimal(binary,2));
    })
    $("#hexadecimalform").submit(function(e){
      e.preventDefault();
      var hexadecimal = $("#hexadecimal").val();
      $("#hexadecimalresult").text(anyBaseToDecimal(hexadecimal,16));
    })
    $("#anybaseform").submit(function(e){
      e.preventDefault();
      var anybase = $("#anybase").val();
      var base =$("#base").val();
      $("#anybaseresult").text(anyBaseToDecimal(anybase,base));
    })
});