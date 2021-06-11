/* =========================================
                Preloader
============================================ */

$(window).on('load', function(){ //makes sure whole website is loaded
	$('#status').delay(2500).fadeOut();
	$('#preloader').delay(2750).fadeOut();
});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 1500) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/CoBikeLogo.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/CoBikeLogo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});



/* =========================================
              Parallex
============================================ */

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".mountainbiker", 10, { y: -800 })
  .to(".voorgrond", 10, { y: -700 }, "-=10")
  .to(".uppertext", 10, { y: -500 }, "-=10")
  .to(".bergen-v", 10, { y: -400 }, "-=10")
  .to(".bergen-m", 10, { y: -300 }, "-=10")
  .to(".main-text", 10, { y: -250 }, "-=10")
  .to(".bergen-a", 10, { y: -200 }, "-=10")
  .fromTo(".achtergrond", { y: 0 }, { y: -100, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "500%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

  /* =========================================
               Responsive Tabs
============================================ */

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


$(window).on('load', function () {

    $("#main-text").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});

/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});