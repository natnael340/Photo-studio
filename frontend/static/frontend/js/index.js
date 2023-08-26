(function($) {
  "use strict";

  var cfg = {
      defAnimation: "fadeInUp", // default css animation
      scrollDuration: 800, // smoothscroll duration
      statsDuration: 4000, // stats animation duration
      mailChimpURL:
        "http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d"
    },
    $WIN = $(window);

  var ssMobileNav = function() {
    var toggleButton = $(".menu-toggle"),
      nav = $(".main-navigation");

    toggleButton.on("click", function(event) {
      event.preventDefault();

      toggleButton.toggleClass("is-clicked");
      nav.slideToggle();
    });

    if (toggleButton.is(":visible")) nav.addClass("mobile");

    $WIN.resize(function() {
      if (toggleButton.is(":visible")) nav.addClass("mobile");
      else nav.removeClass("mobile");
    });

    $("#main-nav-wrap li a").on("click", function() {
      if (nav.hasClass("mobile")) {
        toggleButton.toggleClass("is-clicked");
        nav.fadeOut();
      }
    });
  };
  var ssSearch = function() {
    var searchWrap = $(".search-wrap");
    var searchField = searchWrap.find(".search-field");
    var closeSearch = $("#close-search");
    var searchTrigger = $(".search-trigger");
    var body = $("body");

    searchTrigger.on("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this);

      body.addClass("search-visible");
      setTimeout(function() {
        $(".search-wrap")
          .find(".search-field")
          .focus();
      }, 100);
    });

    closeSearch.on("click", function() {
      var $this = $(this);

      if (body.hasClass("search-visible")) {
        body.removeClass("search-visible");
        setTimeout(function() {
          $(".search-wrap")
            .find(".search-field")
            .blur();
        }, 100);
      }
    });

    searchWrap.on("click", function(e) {
      if (!$(e.target).is(".search-field")) {
        closeSearch.trigger("click");
      }
    });

    searchField.on("click", function(e) {
      e.stopPropagation();
    });

    searchField.attr({
      placeholder: "Type Your Keywords",
      autocomplete: "off"
    });
  };
  var ssSuperFish = function() {
    $("ul.sf-menu").superfish({
      animation: { height: "show" }, // slide-down effect without fade-in
      animationOut: { height: "hide" }, // slide-up effect without fade-in
      cssArrows: false, // disable css arrows
      delay: 600 // .6 second delay on mouseout
    });
  };
  (function ssInit() {
    ssSuperFish();
    ssMobileNav();
    ssSearch();
  })();
})(jQuery);
