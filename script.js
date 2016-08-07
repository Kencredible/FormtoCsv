/**
 * Created by Ken on 7/08/2016.
 */
$(document).ready(function () {
    $("#Submit").click(function (e) {
      var x = $("form").serializeArray();
        $.each(x, function (i, field) {
            $("#results").append(field.name + ":" + field.value+ '</br>');
        });
    });
});


