$(function () {
  $.ajax("http://0.0.0.0:5001/api/v1/status").done(function (data) {
    if (data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  });

  const amenities = {};
  $("input[type=checkbox").on("change", function () {
    if ($(this).prop("checked")) {
      amenities[$(this).attr("data-id")] = $(this).attr("data-name");
    } else if (!$(this).prop("checked")) {
      delete amenities[$(this).attr("data-id")];
    }
    if (Object.keys(amenities).length === 0) {
      $("div.amenities h4").html("&nbsp");
    } else {
      $("div.amenities h4").text(Object.values(amenities).join(", "));
    }
  });
});
