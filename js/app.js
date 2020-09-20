// Navbar - background

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.navbar-expand-lg.navbar-dark.fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Navbar - arrows ("Landings" dropdown)

$(".nav-link").on("click", function () {
  $(".arrowRotate", this).css("transform", "rotate(90deg)");
});

$(".dropdown").on("hidden.bs.dropdown", function () {
  $(".arrowRotate", this).css("transform", "rotate(0deg)");
});
