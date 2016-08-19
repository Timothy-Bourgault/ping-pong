//Business Logic:
function pinkBong(desiredNumber) {
  var list = []
  for (var i = 1; i <= desiredNumber; i++) {
    if (i % 15 === 0) {
      list.push("PinkBong");

    } else if (i % 3 === 0) {
      list.push("Pink");

    } else if (i % 5 === 0) {
      list.push("Bong");

    } else {
      list.push(i);
    }
  }
  return list
}
//User Interface Logic:
$(document).ready(function() {
  $("form#input").submit(function(event) {

    event.preventDefault();
    var desiredInput = $("input#desiredNumber").val();
    var result = pinkBong(desiredInput)

  for (x = 0; x < desiredInput; x++)
  }
})
