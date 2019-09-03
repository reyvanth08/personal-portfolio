$(function() {
  $("#effect").typed({
    strings: ["graduate engineer.", "photography enthusiast.", "front-end designer."],
    stringsElement: null,
    typeSpeed: 45,
    startDelay: 1300,
    backSpeed: 15,
    backDelay: 900,
    loop: true,
    loopCount: false,
    showCursor: false,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  });
});

$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    } 
  });
});

var sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function() {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("a").removeClass("active"); // remove active from all links
      sections.removeClass("active");

      $(this).addClass("active"); // add active to current link
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});