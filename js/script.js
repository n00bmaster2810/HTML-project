$("#submit").click(function () {
  alert("Thank you for reaching to us, we will get to you as soon as we can.");
});

$("#navButton").click(function () {
  if ($("#navButton").hasClass("fa-bars")) {
    $("#navButton").removeClass("fa-bars");
    $("#navButton").addClass("fa-window-close");
  } else {
    $("#navButton").removeClass("fa-window-close");
    $("#navButton").addClass("fa-bars");
  }
});
