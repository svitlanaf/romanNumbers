$(document).ready(function() {
  $("form#romanNumbers").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumbers = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var result = "";

    var input = $("#userInput").val();
    if (($('input').val() === "")|| number > 3999 || number <=0) {
      alert("Please enter number from 1 to 3999")
    } else {
      for (var i = 0; i < romanNumbers.length; i++) {
        if (number < arabicNumbers[i]) {

        } else {
          number = number - arabicNumbers[i];
          result += romanNumbers[i];
          i = i - 1;
        }
      }

      $(".output").text(result);
      $("#result").show();
    }
  });

});
