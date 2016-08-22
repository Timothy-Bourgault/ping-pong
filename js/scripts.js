//Business Logic:
function pinkBong(num) {
  var list = []
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
  return list
}
//User Interface Logic:
$(document).ready(function() {
  $("form#Input").submit(function(event) {
    event.preventDefault();
    var Input = $("Input#Number").val();
    var result = pinkBong(Input);

  for (j = 0; x < Input; j++);
    $("#result").append("<li>" + "result[j]" + "</li>");
  })
    $(".output").show();

  $("Input#Number").keydown(function(){
    $("#result").text("")
  });
});
