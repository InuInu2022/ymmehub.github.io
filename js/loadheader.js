fetch("header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector(".navbar").innerHTML = data);
$(window).on('load', function () {
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
})