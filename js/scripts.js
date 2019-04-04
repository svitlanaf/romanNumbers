$(document).ready(function(){
  $("form#romanNumbers").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var arabicNumbers = [50, 10, 5, 1];
    var romanNumbers = ["L", "X", "V", "I"];
    var result = "";

    // i =2
    // res='X'
    //arabicNumbers =''10
    //romanNumbers="x"
    //numer = 27
    for (var i=0; i < romanNumbers.length; i++ ){
      if (number<arabicNumbers[i]){

      }else{
      number = number - arabicNumbers[i];
        result+= romanNumbers[i];
        i = i-1;

    }
}

    console.log(result);

  });

});
