//Business Logic:

function pinkBong(num) {
  var list = [];
  for (var i = 1; i <= num; i++) {

    if (i % 15 === 0) {
      list.push("PinkBong");
    } else if (i % 5 === 0) {
      list.push("Bong");
    } else if (i % 3 === 0) {
      list.push("Pink");
    } else {
      list.push(i);
    }
  }
  return list;
}
// //User Interface Logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#num").val());
    var result = [];
    result = pinkBong(input);
    for (var j = 0; j < result.length; j++) {
    $("ul#result").append("<li>" + result[j] + "</li>");
    };
    $(".output").show();
  });
});
