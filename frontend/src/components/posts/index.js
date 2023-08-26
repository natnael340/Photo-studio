import $ from "jquery";

const start = () => {
  var $WIN = $(window);
  var searchWrap = $(".search-wrap");
  var searchField = searchWrap.find(".search-field");
  var closeSearch = $("#close-search");
  var searchTrigger = $(".search-trigger");
  var body = $("body");
  var dropdown = $(".has-children");
  var toggleButton = $(".menu-toggle"),
    nav = $(".main-navigation");

  $WIN.on("load", function () {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });
  });
  searchTrigger.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);

    body.addClass("search-visible");
    setTimeout(function () {
      $(".search-wrap").find(".search-field").focus();
    }, 100);
  });

  closeSearch.on("click", function () {
    var $this = $(this);

    if (body.hasClass("search-visible")) {
      body.removeClass("search-visible");
      setTimeout(function () {
        $(".search-wrap").find(".search-field").blur();
      }, 100);
    }
  });

  searchWrap.on("click", function (e) {
    if (!$(e.target).is(".search-field")) {
      closeSearch.trigger("click");
    }
  });

  searchField.on("click", function (e) {
    e.stopPropagation();
  });

  searchField.attr({
    placeholder: "Type Username",
    autocomplete: "off",
  });

  dropdown.hover(
    function () {
      var $this = $(this);
      var x = $this.find("ul.slideup");
      x = x.removeClass("slideup");
      x = x.addClass("slidedown");
      console.log(x);
    },
    function () {
      var $this = $(this);
      var x = $this.find("ul.slidedown");
      x = x.removeClass("slidedown");
      x = x.addClass("slideup");
    }
  );
  toggleButton.on("click", function (event) {
    event.preventDefault();

    toggleButton.toggleClass("is-clicked");
    nav.slideToggle();
  });

  if (toggleButton.is(":visible")) nav.addClass("mobile");

  $WIN.resize(function () {
    if (toggleButton.is(":visible")) nav.addClass("mobile");
    else nav.removeClass("mobile");
  });

  $("#main-nav-wrap li a").on("click", function () {
    if (nav.hasClass("mobile")) {
      toggleButton.toggleClass("is-clicked");
      nav.fadeOut();
    }
  });
};

export default start;
