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
  $("form#input").submit(function(event) {
    var input = $("input#num").val();
    var result = pinkBong(input);
  $("form.btn btn-primary").click(function(event){
  })
  for (var j = 0; j < input; j++);
    $("#result").append("<li>" + result[j] + "</li>");
  })

  $("input#number").keydown(function(){
    $("#result").text("");
    $(".output").show();
    event.preventDefault();
  });
});
