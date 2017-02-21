$(function() {
  $("form").submit(function() {
    event.preventDefault();

    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());
    var array = [];
    var total = 0;

    // for (index = 0; (total + countBy) < countTo; index += 1) {
    //   total += countBy;
    //   array.push(total);
    // }
    if (!countTo || !countBy || countTo < countBy || countTo < 0 || countBy < 0) {
      alert("ERRRRROOORRRR")
    } else {
      for (total = countBy; total <= countTo; total += countBy) {
        array.push(total);
      }
      $("p").text(array);
    }

  });
});
