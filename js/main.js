!(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#preloader").fadeOut(), $("#status").fadeOut(9e3);
  }),
    jQuery(".ttm-header-search-link a").addClass("sclose"),
    jQuery(".ttm-header-search-link a").on("click", function (event) {
      jQuery(".field.searchform-s").focus(),
        jQuery(".ttm-header-search-link a").hasClass("sclose")
          ? (jQuery(".ttm-header-search-link a i")
              .removeClass("ti-search")
              .addClass("ti-close"),
            jQuery(this).removeClass("sclose").addClass("open"),
            jQuery(".ttm-search-overlay").addClass("st-show"))
          : (jQuery(this).removeClass("open").addClass("sclose"),
            jQuery(".ttm-header-search-link a i")
              .removeClass("ti-close")
              .addClass("ti-search"),
            jQuery(".ttm-search-overlay").removeClass("st-show")),
        event.preventDefault();
    }),
    $(window).scroll(function () {
      matchMedia("only screen and (min-width: 1200px)").matches &&
        ($(window).scrollTop() >= 50
          ? ($(".ttm-stickable-header").addClass("fixed-header"),
            $(".ttm-stickable-header").addClass("visible-title"))
          : ($(".ttm-stickable-header").removeClass("fixed-header"),
            $("ttm-stickable-header").removeClass("visible-title")));
    }),
    $("ul li:has(ul)").addClass("has-submenu"),
    $("ul li ul").addClass("sub-menu"),
    $("ul.dropdown li").on({
      mouseover: function () {
        $(this).addClass("hover");
      },
      mouseout: function () {
        $(this).removeClass("hover");
      },
    });
  var $menu = $("#menu"),
    $menulink = $("#menu-toggle-form"),
    $menuTrigger = $(".has-submenu > a");
  $menulink.on("click", function (e) {
    $menulink.toggleClass("active"), $menu.toggleClass("active");
  }),
    $menuTrigger.on("click", function (e) {
      var t;
      e.preventDefault(),
        $(this).toggleClass("active").next("ul").toggleClass("active");
    }),
    $("ul li:has(ul)"),
    $("[data-appear-animation]").each(function () {
      var self = $(this),
        animation = self.data("appear-animation"),
        delay = self.data("appear-animation-delay")
          ? self.data("appear-animation-delay")
          : 0;
      $(window).width() > 959
        ? (self.html("0"),
          self.waypoint(
            function (direction) {
              if (!self.hasClass("completed")) {
                var from = self.data("from"),
                  to = self.data("to"),
                  interval = self.data("interval");
                self.numinate({
                  format: "%counter%",
                  from: from,
                  to: to,
                  runningInterval: 2e3,
                  stepUnit: interval,
                  onComplete: function (elem) {
                    self.addClass("completed");
                  },
                });
              }
            },
            { offset: "85%" }
          ))
        : "animateWidth" == animation && self.css("width", self.data("width"));
    }),
    $(".ttm-progress-bar").each(function () {
      $(this).find(".progress-bar").width(0);
    }),
    $(".ttm-progress-bar").each(function () {
      $(this)
        .find(".progress-bar")
        .animate({ width: $(this).attr("data-percent") }, 2e3);
    }),
    $(".progress-bar-percent[data-percentage]").each(function () {
      var progress = $(this),
        percentage = Math.ceil($(this).attr("data-percentage"));
      $({ countNum: 0 }).animate(
        { countNum: percentage },
        {
          duration: 2e3,
          easing: "linear",
          step: function () {
            var pct = "";
            (pct =
              0 == percentage
                ? Math.floor(this.countNum) + "%"
                : Math.floor(this.countNum + 1) + "%"),
              progress.text(pct);
          },
        }
      );
    }),
    $(".ttm-tabs").each(function () {
      $(this).children(".content-tab").children().hide(),
        $(this).children(".content-tab").children().first().show(),
        $(this)
          .find(".tabs")
          .children("li")
          .on("click", function (e) {
            var liActive = $(this).index(),
              contentActive = $(this)
                .siblings()
                .removeClass("active")
                .parents(".ttm-tabs")
                .children(".content-tab")
                .children()
                .eq(liActive);
            contentActive.addClass("active").fadeIn("slow"),
              contentActive.siblings().removeClass("active"),
              $(this)
                .addClass("active")
                .parents(".ttm-tabs")
                .children(".content-tab")
                .children()
                .eq(liActive)
                .siblings()
                .hide(),
              e.preventDefault();
          });
    }),
    $(".accordion").each(function () {
      var allPanels = $(".toggle").children(".toggle-content").hide();
      $(".toggle").children(".toggle-content").eq(1).slideDown("easeOutExpo"),
        $(".toggle")
          .children(".toggle-title")
          .children("a")
          .eq(1)
          .addClass("active"),
        $(".toggle")
          .children(".toggle-title")
          .children("a")
          .on("click", function () {
            var current = $(this).parent().next(".toggle-content");
            return (
              $(".toggle-title > a").removeClass("active"),
              $(this).addClass("active"),
              allPanels.not(current).slideUp("easeInExpo"),
              $(this).parent().next().slideDown("easeOutExpo"),
              !1
            );
          });
    }),
    $(window).on("load", function () {
      var $container = $("#isotopeContainer"),
        $optionSets,
        $optionLinks;
      $("#filters a").on("click", function () {
        var selector = $(this).attr("data-filter");
        return $container.isotope({ filter: selector }), !1;
      }),
        $("#filters li")
          .find("a")
          .on("click", function () {
            var $this = $(this);
            if ($this.hasClass("selected")) return !1;
            var $optionSet = $this.parents("#filters");
            $optionSet.find(".selected").removeClass("selected"),
              $this.addClass("selected");
            var options = {},
              key = $optionSet.attr("data-option-key"),
              value = $this.attr("data-option-value");
            return (
              (value = "false" !== value && value),
              (options[key] = value),
              "layoutMode" === key && "function" == typeof changeLayoutMode
                ? changeLayoutMode($this, options)
                : $container.isotope(options),
              !1
            );
          });
    }),
    jQuery(document).ready(function ($) {
      if (jQuery("body").hasClass("ttm-one-page-site")) {
        var sections = jQuery(".ttm-row"),
          nav = jQuery(".ttm-header-wrap, .menu"),
          nav_height = jQuery("#site-navigation").data("sticky-height") - 1;
        jQuery(window).on("scroll", function () {
          jQuery("body").scrollTop() < 5 &&
            nav.find("a").parent().removeClass("active");
          var cur_pos = jQuery(this).scrollTop();
          sections.each(function () {
            var top = jQuery(this).offset().top - (nav_height + 1),
              bottom = top + jQuery(this).outerHeight();
            if (
              cur_pos >= top &&
              cur_pos <= bottom &&
              void 0 !== jQuery(this) &&
              void 0 !== jQuery(this).attr("id") &&
              "" != jQuery(this).attr("id")
            ) {
              var mainThis = jQuery(this);
              nav.find("a").removeClass("active"),
                jQuery(this).addClass("active");
              var arr = mainThis.attr("id");
              nav.find("a").parent().removeClass("active"),
                nav.find("a").each(function () {
                  var menuAttr;
                  jQuery(this).attr("href").split("#")[1] == arr &&
                    jQuery(this).parent().addClass("active");
                });
            }
          });
        }),
          nav.find("a").on("click", function () {
            var $el,
              id,
              arr = jQuery(this).attr("href").split("#")[1];
            return (
              jQuery("html, body").animate(
                { scrollTop: jQuery("#" + arr).offset().top - nav_height },
                500
              ),
              !1
            );
          });
      }
    }),
    jQuery("#totop").hide(),
    jQuery(window).scroll(function () {
      jQuery(this).scrollTop() >= 100
        ? (jQuery("#totop").fadeIn(200),
          jQuery("#totop").addClass("top-visible"))
        : (jQuery("#totop").fadeOut(200),
          jQuery("#totop").removeClass("top-visible"));
    }),
    jQuery("#totop").on("click", function () {
      return jQuery("body,html").animate({ scrollTop: 0 }, 500), !1;
    }),
    $(function () {});
  const locales = ["en-GB", "vi-VN"];

  function getFlagSrc(countryCode) {
    return /^[A-Z]{2}$/.test(countryCode)
      ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
      : "";
  }

  const dropdownBtn = document.getElementById("dropdown-btn");
  const dropdownContent = document.getElementById("dropdown-content");

  function setSelectedLocale(locale) {
    const intlLocale = new Intl.Locale(locale);
    const langName = new Intl.DisplayNames([locale], {
      type: "language",
    }).of(intlLocale.language);

    dropdownContent.innerHTML = "";

    const otherLocales = locales.filter((loc) => loc !== locale);
    otherLocales.forEach((otherLocale) => {
      const otherIntlLocale = new Intl.Locale(otherLocale);
      const otherLangName = new Intl.DisplayNames([otherLocale], {
        type: "language",
      }).of(otherIntlLocale.language);

      const listEl = document.createElement("li");
      listEl.innerHTML = `${otherLangName}<img  src="${getFlagSrc(
        otherIntlLocale.region
      )}" />`;
      listEl.value = otherLocale;
      listEl.addEventListener("mousedown", function () {
        var currentUrl = location.href;
        var host = location.host.includes('youtubedownload.click')?`https://${location.host}`:`http://${location.host}`;
        switch (otherLocale) {
          case "en-GB":
            if (currentUrl.includes("index.html")) {
              location.href = `${host}/index.html`;
            } else if (currentUrl.includes("facebook")) {
                location.href = `${host}/download-facebook-video.html`;
            }else if (currentUrl.includes("tiktok")) {
                location.href = `${host}/download-tiktok-video.html`;
            }
            break;
          case "vi-VN":
            if (currentUrl.includes("index.html")) {
                location.href = `${host}/languagues/vi/index.html`;
              } else if (currentUrl.includes("facebook")) {
                  location.href = `${host}/languagues/vi/download-facebook-video.html`;
              }else if (currentUrl.includes("tiktok")) {
                location.href = `${host}/languagues/vi/download-tiktok-video.html`;
            }
            break;
        }
        setSelectedLocale(otherLocale);
    });
      dropdownContent.appendChild(listEl);
    });

    dropdownBtn.innerHTML = `<img  src="${getFlagSrc(
      intlLocale.region
    )}" />${langName}<span class="arrow-down"></span>`;
  }
  var lang = document.getElementsByTagName("html");
  var languageDefault = lang[0].getAttribute("lang");
  var langFilter = locales.filter((f) => f.includes(languageDefault));
  console.log(langFilter);
  setSelectedLocale(langFilter[0]);
})(jQuery);
