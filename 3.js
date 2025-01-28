!(function () {
  var e,
    t = ($("body"), $("#site-header")),
    i = $("#siteHeaderNavbar ul.navbar-category"),
    a = i.find(".dui-dropdown-menu"),
    n = $(
      "#siteHeaderNavbar ul.navbar-category .dui-dropdown-menu.consumer .menu-container"
    ),
    o = $(
      "#siteHeaderNavbar ul.navbar-category .dui-dropdown-menu.commercial .menu-container .content-container"
    ),
    r = $(
      ".dui-navbar .dui-dropdown-menu.container-fluid.commercial .tab-panel"
    ),
    s = $(
      ".dui-navbar .dui-dropdown-menu.container-fluid.commercial .tab-panel.active"
    ),
    c = [],
    l = $(".site-header-navbar li.category-item .nav-item-title"),
    d = $("#siteHeaderNavbar li.category-item"),
    u = d.find(".series-bottom-list .series-item"),
    h = $(
      ".dui-navbar .dui-dropdown-menu.container-fluid.commercial .tab-item"
    ),
    p = $(
      ".dui-navbar .dui-dropdown-menu.container-fluid.commercial .content-container"
    ),
    f = 100,
    v = 64,
    m = !1,
    g = [],
    b = {
      loadLazyNavImg: function (e) {
        function t(e, t) {
          for (var i = 0; i < e.length; i++) {
            if ("" === e[i].dataset.navLazy) return;
            e[i].src = e[i].dataset.navLazy;
          }
          t.data("load-lazy", !0);
        }
        if (!e.data("load-lazy")) {
          var i = e.find("img[data-nav-lazy]");
          t(i, e);
        }
      },
      closeMenu: function () {
        var e = i.find(".opened");
        e.find(".commercial").length > 0 &&
          !h.eq(0).hasClass("active") &&
          h.eq(0).click(),
          e.removeClass("opened"),
          t.addClass("collapsed"),
          a.stop().css({ height: "0", "pointer-events": "none" }),
          window.pcHomepageNavSticky &&
            (b.switchScrollLockWhenSticky(!1), n.scrollTop(0), o.scrollTop(0));
      },
      initial: function () {
        u.each(function (e, t) {
          var i = $(t),
            a = i.find("a.series-cover-content");
          a.eq(0).hasClass("active") ||
            (a.removeClass("active"), a.eq(0).addClass("active"));
        });
      },
      checkIsIPadPro: function () {
        var e = window.navigator.userAgent,
          t = e.indexOf("Safari") !== -1 && e.indexOf("Version") !== -1,
          i = e.indexOf("iPhone") !== -1 && e.indexOf("Version") !== -1;
        return t && !i && "ontouchend" in document;
      },
      debounce: function (e, t, i, a, n) {
        if ((clearTimeout(t.tId), t && e)) {
          var o = { context: i, index: a, event: n };
          t.tId = setTimeout(function () {
            t.call(o);
          }, f);
        }
      },
      switchScrollLockWhenSticky: function (t) {
        if (window.pcHomepageNavSticky) {
          var i = document.querySelector("body");
          if (t) {
            m || (e = window.scrollY || window.pageYOffset), (m = !0);
            var a = setTimeout(function () {
              i.style.height = "100vh";
            }, 300);
            g.push(a);
          } else
            b.clearAllTimers(),
              (i.style.height = ""),
              m &&
                "number" == typeof e &&
                window.scrollTo(window.scrollX || window.pageXOffset, e),
              (m = !1);
        }
      },
      checkScrollLockWhenSticky: function (e) {
        if (window.pcHomepageNavSticky) {
          var t = e + v >= window.innerHeight;
          b.switchScrollLockWhenSticky(t);
        }
      },
      clearAllTimers: function () {
        for (var e = 0; e < g.length; e++) clearTimeout(g[e]);
        g = [];
      },
    },
    w = {
      init: function () {
        this.initMenuHeight(),
          this.handleDropdown(),
          this.handleNavMenuHover(),
          this.isNewProduct(),
          this.gaHoverEvent(),
          this.invertAgLayout();
      },
      initMenuHeight: function () {
        a.each(function (e, t) {
          var i = $(t).find(".menu-container").height();
          if ("commercial-dropdown" !== $(t).attr("type")) c.push(i);
          else {
            var a = $(s).height(),
              n = a + 96 + 112;
            c.push(n);
          }
        });
      },
      invertAgLayout: function () {
        var e = a.find(".enterprise-tab .tab-list .active.tab-item"),
          t = a.find(".active.tab-panel .enterprise-product"),
          i = a.find(".active.tab-panel .enterprise-solution"),
          n = a.find(".active.tab-panel .divider"),
          o = e.attr("type");
        "agriculture" === o && (n.after(i), n.before(t));
      },
      handleDropdown: function () {
        function e() {
          var e = this.index;
          h.siblings().removeClass("active"),
            r.siblings().removeClass("active"),
            h.eq(e).addClass("active"),
            r.eq(e).addClass("active");
          var t = r.eq(e);
          i = t.height();
          var a = i + 96 + 112;
          p.css("height", i + 96 + 48 + "px"),
            b.checkScrollLockWhenSticky(a),
            $(".dui-dropdown-menu.commercial .tab-panel .link-list").css(
              "height",
              0
            );
          var n = $(
              ".dui-dropdown-menu.commercial .tab-panel.active .link-list"
            ),
            o = $(
              ".dui-dropdown-menu.commercial .tab-panel.active .link-list .content-wrapper"
            ),
            s = o.height();
          n.css("height", s + "px"), w.invertAgLayout();
        }
        this.handleDropDownWithHover();
        var t = $(".site-header-navbar li.category-item .close-menu");
        t.click(function () {
          b.closeMenu();
        });
        var i = s.height();
        p.css("height", i + 96 + 64 + "px"),
          h.hover(
            function () {
              var t = $(this).index();
              b.debounce(!0, e, $(this), t);
            },
            function () {
              b.debounce(!1, e, null, null);
            }
          ),
          h.on("click", function () {
            var t = $(this).index();
            b.debounce(!0, e, $(this), t);
          });
      },
      handleDropDownWithHover: function () {
        function e(e, i) {
          "click" === i
            ? t.hasClass("collapsed") ||
              !e.hasClass("category-item-sink") ||
              e.hasClass("single-dropdown-active")
              ? e.removeClass("single-dropdown-active")
              : e.addClass("single-dropdown-active")
            : e.hasClass("category-item-sink") &&
              !e.hasClass("single-dropdown-active") &&
              e.addClass("single-dropdown-active");
        }
        function i(i, n) {
          var o = i,
            r = o.index(),
            s = c[r],
            u = o.find(".dui-dropdown-menu");
          if (o.hasClass("opened"))
            o.hasClass("opened") &&
              "click" === n &&
              (e(o, n), b.closeMenu($(this)), t.addClass("collapsed"));
          else {
            var h = l.find(".opened");
            t.hasClass("collapsed")
              ? (h.length > 0
                  ? (a.stop().css("height", ""), d.removeClass("opened"))
                  : u.stop().css("height", ""),
                u.animate({ height: s + "px" }, 300, "linear", function () {
                  u.css({ height: "auto", "pointer-events": "auto" });
                }),
                t.removeClass("collapsed"))
              : (d.removeClass("opened"),
                a.stop().css("height", ""),
                u.stop().css({ height: "auto", "pointer-events": "auto" })),
              e(o, n),
              o.addClass("opened"),
              b.initial(o),
              b.checkScrollLockWhenSticky(c[r]);
          }
          setTimeout(function () {
            b.loadLazyNavImg(o);
          }, 340);
        }
        b.checkIsIPadPro()
          ? $("#siteHeaderNavbar .navbar-category").on(
              "mouseleave",
              function () {
                var e = $(".site-header-navbar li.category-item.opened");
                b.closeMenu(e);
              }
            )
          : d.hoverDelay({
              hoverEvent: function () {
                i($(this));
              },
              outEvent: function () {
                b.closeMenu($(this));
              },
            });
      },
      handleNavMenuHover: function () {
        function e() {
          this.context &&
            (this.context.siblings().removeClass("active"),
            this.context.eq(this.index).addClass("active"));
        }
        var t = $(".site-header-navbar li.category-item"),
          i = t.find(".series-bottom-list ul.product-list .product-list-item"),
          a = t.find(".series-bottom-list .series-item a.series-cover-content");
        i.hover(
          function () {
            var t = $(this).index(),
              i = $(this)
                .parent("ul.product-list")
                .parent(".series-item")
                .find("a.series-cover-content");
            b.debounce(!0, e, i, t);
          },
          function () {
            b.debounce(!1, e, null, null);
          }
        ),
          a.hover(
            function () {
              var e = $(this).find("img.original"),
                t = $(this).find("img.hover-cover"),
                i = t.attr("src");
              i && (e.removeClass("show-cover"), t.addClass("show-cover"));
            },
            function () {
              var e = $(this).find("img.original"),
                t = $(this).find("img.hover-cover");
              t.removeClass("show-cover"), e.addClass("show-cover");
            }
          );
      },
      isNewProduct: function () {
        var e = $(".site-header-navbar li.category-item .product-list-item"),
          t = new Date();
        e.each(function (e, i) {
          var a = $(i).find(".new"),
            n = a.attr("title"),
            o = a.attr("beginTime"),
            r = a.attr("endTime");
          o &&
            r &&
            ((o = new Date(o)),
            (r = new Date(r)),
            t >= o && t <= r && a.html(n));
        });
      },
      gaHoverEvent: function () {
        var e = $("#siteHeaderNavbar a");
        e.each(function (e, t) {
          var i = $(t).attr("href");
          (i && "javascript:;" !== i) || $(t).addClass("no-configuration-link");
        });
      },
    };
  w.init();
})();
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (e) {
        return typeof e;
      }
    : function (e) {
        return e &&
          "function" == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? "symbol"
          : typeof e;
      };
!(function (e, t) {
  DUI.page({
    $nav: null,
    $navAccount: null,
    $navUser: null,
    $navCart: null,
    $searchForm: null,
    $searchBox: null,
    $searchInput: null,
    $searchBtn: null,
    $searchResultData: [],
    $searchStorageKey: "",
    User: null,
    searchKeys: "",
    isSearching: !1,
    init: function () {
      (this.$nav = t(".dui-navbar")),
        (this.$navAccount = this.$nav.find(".nav-account")),
        (this.$navUser = this.$nav.find(".nav-user")),
        (this.$searchForm = this.$nav.find(".search-form")),
        (this.$searchBox = this.$nav.find(".search-box")),
        (this.$searchInput = this.$nav.find(".search-input")),
        (this.$searchBtn = this.$searchBox.find(".search-btn")),
        (this.$navCart = this.$nav.find(".nav-store")),
        (this.$navCartProductList = this.$nav.find(
          ".nav-store .dui-dropdown-menu .product-list"
        )),
        (this.$navLanguage = this.$nav.find(".nav-language")),
        (this.requested_cart = !1),
        (this.do_query_cart = !1),
        (DUI.searchHelper = this.helper);
    },
    ready: function () {
      DUI.Cookie.remove("www_redirect_to", {
        domain: DUI.Config.domain || ".dji.com",
        path: "/",
      }),
        this.render(["renderAccount"]);
      var e = DUI.Cookie.get("cart_data_reload");
      "true" == e && this.render("renderCarts"),
        (this.$searchStorageKey =
          "head-historical-search-list-" + (DUI.I18n.lang || ""));
    },
    sendGaAndCDP: function (e, t, i) {
      window.ga && window.ga("send", "event", e, t, i),
        window.sensors &&
          window.sensors.track(e, {
            app_ucid: DUI.Config.app_ucid,
            platform_type: "web",
            category: e,
            action: t,
            label: i,
          });
    },
    addViews: function () {
      var e =
          (t(".nav-store .btn-store .cart"),
          t(".nav-store .btn-store .count"),
          t(".nav-store .dui-dropdown-menu")),
        i = t(".nav-store .dui-dropdown-menu .cart-popover-box");
      return {
        renderCarts: function () {
          var a = this;
          DUI.Config.domain || ".dji.com",
            (a.do_query_cart = !0),
            e.removeClass("hidden"),
            a.can_show_loading_status && e.addClass("loading");
          var n = DUI.Cookie.get("cart_uuid") || "";
          n &&
            (a.sendGaAndCDP("store_cart_request", "request", "sent"),
            DUI.API._helper
              .ajaxWithCredent({
                method: "GET",
                dataType: "json",
                contentType: "application/json",
                url: DUI.API._helper.getStoreApi("storeGetCart"),
                data: {
                  country: DUI.Config.region.toLowerCase(),
                  language: DUI.Config.locale,
                },
              })
              .done(function (n) {
                var o = n || {},
                  r = o.quantity;
                if (
                  "number" == typeof r &&
                  o.uuid &&
                  o.shopping_items instanceof Array
                ) {
                  a.quantity = r;
                  var s = r;
                  if (r <= 0)
                    e.addClass("hidden"),
                      e.removeClass("loading"),
                      i.addClass("hidden"),
                      a.sendGaAndCDP(
                        "store_cart_request",
                        "success",
                        "get_empty"
                      );
                  else {
                    (a.can_show_loading_status = !0),
                      e.removeClass("hidden"),
                      e.removeClass("loading"),
                      i.removeClass("hidden");
                    var c = a.$navCart.find(".total"),
                      l = c.data("tmpl");
                    t(".nav-store .product-list li").remove(),
                      t("#tpl-cart").render({
                        getData: function () {
                          return (o = (o.shopping_items || []).map(function (
                            e
                          ) {
                            return (
                              (e.cover = e.variant.cover.mini),
                              (e.title = e.variant.title),
                              (e.product_url = DUI.I18n.store_url(
                                "product/" + e.variant.slug
                              )),
                              e
                            );
                          }));
                        },
                      }),
                      s
                        ? c.text(l.replace("%{count}", s)).removeClass("hidden")
                        : c.addClass("hidden"),
                      a.sendGaAndCDP(
                        "store_cart_request",
                        "success",
                        "get_items"
                      );
                  }
                  (a.requested_cart = !0), (a.do_query_cart = !1);
                }
              })
              .fail(function (t, i, n) {
                e.addClass("hidden"),
                  e.removeClass("loading"),
                  (a.do_query_cart = !1),
                  a.sendGaAndCDP(
                    "store_cart_request",
                    "fail",
                    JSON.stringify({ textStatus: i, errorThrown: String(n) })
                  );
              }));
        },
        renderAccount: function () {
          var e = this,
            i = DUI.Cookie.get("_logged") || "",
            a = e.User,
            n = DUI.Config.domain || ".dji.com";
          if ((DUI.Storage.removeItem("dji[user]"), !a && "yes" == i)) {
            var o = DUI.Cookie.get("user_nick_name") || "",
              r =
                "//www-cdn.djiits.com/assets/uploads/1db6b3ba6bee86b9eb54e37651072f84.svg";
            /(?:javascript|jav\s+ascript|\&#\d+|\&#x)/i.test(r) && (r = ""),
              (a = {
                success: !0,
                status: 200,
                data: { first: { nick_name: o, avatar: r } },
              }),
              (e.User = a);
          }
          if (i && e.User) {
            var s = a.data.first,
              n = location.hostname.replace("www", "");
            e.$navUser.render({
              script: !1,
              getData: function () {
                var e =
                  "//www-cdn.djiits.com/assets/uploads/1db6b3ba6bee86b9eb54e37651072f84.svg";
                return (
                  (s.avatar = s.avatar
                    ? "string" == typeof s.avatar
                      ? s.avatar
                      : s.avatar.thumb.x2
                    : e),
                  s
                );
              },
            }),
              s.nick_name
                ? e.$navUser.find(".nick-name").removeClass("hidden")
                : localStorage.removeItem("dji[user]"),
              e.$navAccount.addClass("hidden"),
              e.$navUser.removeClass("hidden");
          } else {
            var c = DUI.Cookie.get("user_nick_name");
            c && DUI.Cookie.remove("user_nick_name", { domain: n }),
              e.$navAccount.removeClass("hidden"),
              e.$navUser.addClass("hidden");
          }
          t([".login-link", ".logout-link", ".register-link"]).each(function (
            t,
            i
          ) {
            var a = e.$nav.find(i),
              n = a.attr("href") || "";
            (n +=
              (n.indexOf("?") > -1 ? "&" : "?") +
              "backUrl=" +
              encodeURIComponent(location.href)),
              a.attr("href", n);
          });
        },
      };
    },
    bind: function () {
      function e(e, t, i) {
        var a;
        return function () {
          var n = this,
            o = arguments,
            r = function () {
              (a = null), i || e.apply(n, o);
            },
            s = i && !a;
          clearTimeout(a), (a = setTimeout(r, t)), s && e.apply(n, o);
        };
      }
      function i() {
        var e = w.$searchBox.find(".suggest-words-list"),
          t = w.$searchBox.find(".suggest-words");
        e.html(null), t.css("height", "0"), t.removeClass("show-words");
      }
      function a(e) {
        var t = e.attr("link-type");
        if ("suggestion" === t) {
          var i = e.attr("href"),
            a = e.attr("data-index"),
            n = e.text();
          w.sendGaAndCDP("search_suggestion_click", "search_key", n),
            w.sendGaAndCDP("search_suggestion_click", "click_position", a),
            w.sendGaAndCDP(
              "search_suggestion_click",
              "page_url",
              decodeURIComponent(location.origin + i)
            );
        }
      }
      function n(e, n) {
        var o = "",
          r = w.$searchBox.find(".suggest-words-list"),
          s = w.$searchBox.find(".suggest-words");
        if (n && n.length) {
          var c = 40 * n.length + 28;
          n.forEach(function (t, i) {
            o +=
              '<li class="quick-link"><a link-type="suggestion" data-index="' +
              (i + 1) +
              '" href="' +
              DUI.helper.getUrlPrefix("/search?q=" + encodeURIComponent(t)) +
              '&site=brandsite&from=suggestion">' +
              DUI.helper.highlightString(e, t) +
              "</a></li>";
          }),
            r.html(o),
            r.off("click", "a"),
            r.on("click", "a", function (e) {
              e.preventDefault();
              var i = t(this).attr("href");
              a(t(this)), (window.location.href = i);
            }),
            s.addClass("show-words"),
            s.css("height", c + "px");
        } else i();
      }
      function o() {
        var e = w.$searchInput.val().trim(),
          t = e ? e.length : 0;
        t >= 2 && t <= 30
          ? w.helper.querySearchSuggestWords(e, function (t) {
              n(e, t);
            })
          : n(e, []),
          (w.searchKeys = e),
          C != e &&
            ((C = e),
            setTimeout(function () {
              w.searchKeys == e &&
                w.helper.getSearchHotWords(e, function (t) {
                  t && w.searchKeys == e && g(t);
                });
            }, 100));
      }
      function r(e) {
        if ("string" != typeof e)
          throw Error("In replaceRedundantSlash(url), the url must be string");
        return e.split(/\/+/).reduce(function (e, t) {
          return /:$/.test(e) ? e + "//" + t : e + "/" + t;
        });
      }
      function s() {
        var e = "https://www.dji.com/";
        if (DUI && DUI.Config && DUI.Config.env) {
          var t = DUI.Config.env;
          "production" === t
            ? (e = "https://www.dji.com/")
            : "development" === t || "preview" === t
            ? (e =
                window.location.origin.replace(
                  /(coupon|citizenship|enterprise)\./,
                  "www."
                ) + "/")
            : "staging" === t &&
              (e =
                window.location.origin.replace(
                  /(coupon|citizenship|enterprise)\./,
                  "wwww."
                ) + "/");
        }
        return e;
      }
      function c() {
        t("#site-header").hasClass("navbar-searching") &&
          (w.$nav.removeClass("navbar-searching"),
          w.$nav.find("li.category-item .close-menu").click(),
          t("#siteHeaderSearch")
            .stop()
            .animate({ opacity: 0 }, 300, function () {
              t(this).css("display", "none");
            }),
          t("#siteHeaderNavbar")
            .stop()
            .animate({ opacity: 1 }, 300, function () {
              t(this).css("display", "");
            }),
          w.$searchBox.find(".search-push").hide(),
          w.$searchInput.val(""),
          (w.isSearching = !1),
          i());
      }
      function l(e) {
        var t = w.$searchResultData.autocomplete || [],
          i = t.filter(function (t) {
            return t.id === e;
          })[0],
          a = DUI.Storage.getItem(w.$searchStorageKey);
        a = JSON.parse(a) || [];
        var n = JSON.parse(JSON.stringify(a));
        if (
          (n.map(function (t, i) {
            if (t.id === e) {
              var o = n.length - a.length;
              a.splice(i - o, 1);
            }
          }),
          i &&
            "object" === ("undefined" == typeof i ? "undefined" : _typeof(i)) &&
            i.id &&
            (a.unshift(i), a.length > 5 && a.pop(), a.length > 0))
        ) {
          var o = JSON.stringify(a);
          DUI.Storage.setItem(w.$searchStorageKey, o);
        }
      }
      function d(e) {
        var t,
          i = w.$searchBox.find(".search-push li"),
          a = i.length,
          n = y;
        return (
          !(a <= 0) &&
          ((n = n >= 0 ? n + e - 39 + a : (a - (40 - e) / 2) % a),
          (n = Math.abs(n % a)),
          i.removeClass("active"),
          i.eq(n).addClass("active"),
          (t = i.eq(n).hasClass("quick-link") ? C : i.eq(n).text()),
          w.$searchInput.val(t),
          void (y = n))
        );
      }
      function u(e, t) {
        var i = "",
          a = e.length;
        return (
          e.forEach(function (e, n) {
            var o = n + 1 + "-" + a;
            i += "string" == typeof e ? p(e, o) : h(e, o, t);
          }),
          i
        );
      }
      function h(e, t, i) {
        var a = "https://";
        return (
          (t = "history" === i ? "history" : t),
          '<li><a class="head-search-item ga-data" data-id="' +
            e.id +
            '" data-ga-category="head-search-' +
            i +
            '", data-ga-action="click", data-ga-label="search-item-rank-' +
            t +
            '" href="' +
            a +
            document.domain +
            "/" +
            DUI.I18n.lang +
            "/" +
            e.slug +
            "?site=brandsite&from=" +
            i +
            '">' +
            e.title +
            "</a></li>"
        );
      }
      function p(e, t) {
        var i = "https://";
        return (
          '<li><a class="ga-data" data-ga-category="head-search-hotwords", data-ga-action="click", data-ga-label="search-item-rank-' +
          t +
          '" href="' +
          i +
          document.domain +
          "/" +
          DUI.I18n.lang +
          "/search?cache=no&q=" +
          e +
          '&site=brandsite&from=hotwords">' +
          e +
          "</a></li>"
        );
      }
      function f(e) {
        var t = w.$searchBox.find(".history-words-list"),
          i = u(e, "history");
        t.find("li").remove(), t.html(i), "" !== i && b("history");
      }
      function v(e) {
        for (
          var t = w.$searchBox.find(".lucky-words-list"),
            i = "https://",
            a = "",
            n = e.length,
            o = 0;
          o < n;
          o++
        ) {
          var r = e[o].url.toLocaleLowerCase();
          (r = r.replace(/^(https?:)?\/\//, i)),
            DUI.helper.flowStats(),
            (r = flowStats(r, "recommended")),
            (a +=
              '<li class="quick-link"><a class="ga-data" data-ga-category="head-search-recommended", data-ga-action="click", data-ga-label="search-quicklink-' +
              DUI.I18n.lang +
              "-" +
              e[o].title +
              '" href="' +
              r +
              '">' +
              e[o].title +
              "</a></li>");
        }
        t.find("li").remove(), t.html(a), "" !== a && b("recommended");
      }
      function m(e) {
        var t =
            (w.$searchInput.val().trim() || "",
            w.$searchBox.find(".hot-words-list")),
          i = u(e, "autocomplete");
        t.find("li").remove(), t.html(i), "" !== i && b("search");
      }
      function g(e) {
        w.$searchResultData = e;
        var t = e.lucky_urls || [],
          i = e.hot_words || [];
        "en" === DUI.I18n.lang && (i = e.autocomplete || []);
        var a = w.$searchBox.find(".search-push");
        return (
          w.$searchBox.find(".marketing-words"),
          w.$searchBox.find(".hot-words"),
          w.$searchBox.find(".history-words"),
          0 == t.length && 0 == i.length
            ? (console.log("Opps，后台没有相关内容"), void a.hide())
            : (i.length > 0 ? m(i) : v(t),
              (y = -1),
              void (w.isSearching && a.slideDown(500)))
        );
      }
      function b(e) {
        var t = {
          history: ".history-words",
          recommended: ".lucky-words",
          search: ".hot-words",
        };
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            var a = w.$searchBox.find(t[i]);
            a.hide();
          }
        var n = t[e],
          o = w.$searchBox.find(n);
        o.show();
        var r = w.$searchBox.find(".search-push");
        r.show(), DUI.helper.initTopicalGaDynamic("search-push");
      }
      var w = this;
      this.requested_cart = !1;
      var y = -1,
        C = "";
      w.$searchInput.keydown(function (e) {
        var t = e.which;
        (38 != t && 40 != t) || (e.preventDefault(), d(t));
      }),
        t(".search-item").on("click", ".head-search-item", function () {
          var e = t(this).data("id");
          l(e);
        }),
        t(".search-push").on("click", ".clean-history-list", function () {
          return (
            DUI.Storage.removeItem(w.$searchStorageKey),
            w.$searchInput.focus(),
            !1
          );
        }),
        w.$searchInput.focus(function (e) {
          var i = t(this).val().trim();
          if (!i) {
            var a = DUI.Storage.getItem(w.$searchStorageKey);
            (a = JSON.parse(a)),
              a
                ? f(a)
                : w.helper.getSearchHotWords(i, function (e) {
                    e && g(e);
                  });
          }
        });
      var $ = e(o, 250, !1);
      w.$searchInput.keyup(function (e) {
        var t = e.which;
        return 38 != t && 40 != t && void $();
      }),
        w.$searchForm.submit(function () {
          var e,
            t = w.$searchInput.val().trim();
          if ((w.$searchInput.val(t), !t.trim())) return !1;
          if (y >= 0) {
            var i = w.$searchBox.find(".search-push li").eq(y).find("a");
            e = i.attr("href");
            var n = i.data("id");
            return n && l(n), a(i), (window.location.href = r(e)), !1;
          }
          return (
            (e = s() + DUI.Localize.getCountryUrlPrefix() + "/search?q=" + t),
            (window.location.href = r(e)),
            !1
          );
        }),
        w.$searchBtn.click(function () {
          var e,
            t = w.$searchInput.val().trim();
          return (
            w.$searchInput.val(t),
            !!t.trim() &&
              (y >= 0
                ? ((e = w.$searchBox
                    .find(".search-push li")
                    .eq(y)
                    .find("a")
                    .attr("href")),
                  (window.location.href = r(e)),
                  !1)
                : ((e =
                    s() +
                    DUI.Localize.getCountryUrlPrefix() +
                    "/search?q=" +
                    t),
                  (window.location.href = r(e)),
                  !1))
          );
        }),
        t(window).on("scroll", c);
      var I = w.$navCart.hasClass("nav-to-wheretobuy");
      return (
        I ||
          w.$navCart.hover(function (e) {
            "mouseenter" === e.type
              ? w.do_query_cart || w.render("renderCarts")
              : w.$navCartProductList.scrollTop(0);
          }),
        {
          searchOn: function () {
            function e() {
              t(window).on("scroll", c),
                w.$nav.addClass("navbar-searching"),
                t("#siteHeaderNavbar")
                  .stop()
                  .animate({ opacity: 0 }, 300, function () {
                    t(this).css("display", "none");
                  }),
                t("#siteHeaderSearch")
                  .stop()
                  .animate({ opacity: 1 }, 300, function () {
                    t(this).css("display", "block"),
                      window.setTimeout(function () {
                        w.$searchInput.focus(), (w.isSearching = !0);
                      }, 500);
                  });
            }
            t(window).off("scroll", c),
              w.$nav.offset().top - t(window).scrollTop() !== 0
                ? (window.scrollTo(0, 0),
                  setTimeout(function () {
                    e();
                  }, 100))
                : e();
          },
          searchOff: function () {
            w.$nav.removeClass("navbar-searching"),
              t("#siteHeaderSearch")
                .stop()
                .animate({ opacity: 0 }, 300, function () {
                  t(this).css("display", "none");
                }),
              t("#siteHeaderNavbar")
                .stop()
                .animate({ opacity: 1 }, 300, function () {
                  t(this).css("display", "");
                }),
              w.$searchBox.find(".search-push").hide(),
              w.$searchInput.val(""),
              (w.isSearching = !1),
              i();
          },
        }
      );
    },
    helper: {
      getSearchHotWords: function (e, i) {
        var a = e || "";
        t.ajax({
          type: "GET",
          url: DUI.API._helper.getApi("searchHotWord"),
          data: { q: a, lang: DUI.I18n.lang },
          dataType: "json",
          success: function (e) {
            i(e);
          },
          error: function (e, t) {
            i(null);
          },
        });
      },
      querySearchSuggestWords: function (e, i) {
        var a = e || "";
        t.ajax({
          type: "GET",
          url: DUI.Config.searchApiHost[DUI.Config.env].host + "/suggestions",
          data: { query: a, locale: DUI.I18n.lang, region: DUI.Config.region },
          dataType: "json",
          success: function (e) {
            var t =
              e && e.data && e.data.suggestions && e.data.suggestions.product;
            i && t && i(t.slice(0, 5));
          },
          error: function () {
            i && i(null);
          },
        });
      },
    },
  });
})(window, jQuery),
  (function (e, t) {
    var i;
    DUI.page({
      $siteFooter: null,
      $siteFooterLocale: null,
      $dropdown: null,
      $subscribeForm: null,
      $subscribeInput: null,
      $subscribeBtn: null,
      $subscribeTip: null,
      $subscribeTip2: null,
      init: function () {
        (this.$siteFooter = t("#site-footer")),
          (this.$siteFooterLocale = this.$siteFooter.find(".footer-locale")),
          (this.$dropdown = this.$siteFooter.find("#select-locale-dropdown")),
          (this.$subscribeForm = this.$siteFooter.find(
            "#footer-subscribe-form"
          )),
          (this.$subscribeInput = this.$subscribeForm.find(".form-input")),
          (this.$subscribeBtn = this.$siteFooter.find("#footer-subscribe-btn")),
          (this.$subscribeTip = this.$subscribeForm.find(".tip")),
          (this.$subscribeTip2 = this.$subscribeForm.find(".tip-2")),
          this.showRecord(),
          this.bindModalSubscribe(),
          this.handleInitFloatActionBtn(),
          this.getModalSubscribeData();
      },
      ready: function () {
        DUI.Cookie.remove("www_redirect_to", {
          domain: DUI.Config.domain || ".dji.com",
          path: "/",
        }),
          t(".footer-change-country").length
            ? this.helper.changeCountry.call(this)
            : this.helper.changeLanguage.call(this);
      },
      bind: function () {
        function e(e, t) {
          var n =
              window.ABTest &&
              window.ABTest.mapKeyToVar &&
              window.ABTest.mapKeyToVar.subscribe_de_exp,
            o = "B" === n;
          DUI.API._helper
            .ajaxWithCredent({ method: "POST", url: a, data: e })
            .done(function (a) {
              o && DUI.Config.region && DUI.Config.locale
                ? DUI.API._helper
                    .ajaxWithCredent({
                      method: "POST",
                      dataType: "json",
                      contentType: "application/json",
                      url: DUI.API._helper.getStoreApi("storeSubscribe"),
                      data: JSON.stringify({
                        country: DUI.Config.region.toLowerCase(),
                        language: DUI.Config.locale,
                        source: "official_footer",
                        email: e.email,
                      }),
                    })
                    .done(function (e) {
                      a && 200 == a.status && e && 200 == e.status
                        ? window.ga &&
                          window.ga(
                            "send",
                            "event",
                            "pc-footer",
                            "click",
                            "other-subscribe-success"
                          )
                        : window.ga &&
                          window.ga(
                            "send",
                            "event",
                            "pc-footer",
                            "click",
                            "other-subscribe-error"
                          ),
                        i.$subscribeTip.html(i.$subscribeTip.data("success")),
                        i.$subscribeTip2.html(i.$subscribeTip2.data("success")),
                        setTimeout(function () {
                          i.$subscribeTip.html("");
                        }, 3e4),
                        t && t();
                    })
                    .fail(function (e) {
                      console.error("subscribes error: ", e), t && t();
                    })
                : (a && 200 == a.status
                    ? window.ga &&
                      window.ga(
                        "send",
                        "event",
                        "pc-footer",
                        "click",
                        "other-subscribe-success"
                      )
                    : window.ga &&
                      window.ga(
                        "send",
                        "event",
                        "pc-footer",
                        "click",
                        "other-subscribe-error"
                      ),
                  i.$subscribeTip.html(i.$subscribeTip.data("success")),
                  i.$subscribeTip2.html(i.$subscribeTip2.data("success")),
                  setTimeout(function () {
                    i.$subscribeTip.html("");
                  }, 3e3),
                  t && t());
            })
            .fail(function (e) {
              console.error("subscribe error: ", e), t && t();
            });
        }
        var i = this,
          a = DUI.API._helper.getApi("subscribe");
        t(".footer-locale").hover(
          function () {
            i.$dropdown.css("maxHeight", "100vh");
          },
          function () {
            i.$dropdown.css("maxHeight", "0");
          }
        ),
          t(".footer-locale").click(function () {
            i.$dropdown.css("maxHeight", "100vh");
          }),
          i.$dropdown.find(".active").click(function () {
            i.$dropdown.css("maxHeight", "0");
          }),
          i.bindSelectCountry(),
          i.$subscribeInput.keyup(function () {
            var e = t(this).val();
            if (i.helper.isValidEmail(e))
              i.$subscribeBtn.addClass("is-valid"), i.$subscribeTip.html("");
            else {
              i.$subscribeBtn.removeClass("is-valid");
              var a = i.$subscribeTip.data("error");
              i.$subscribeTip.html(a);
            }
          }),
          i.$subscribeInput.blur(function () {
            i.$subscribeTip.html("");
          }),
          i.$subscribeBtn.click(function () {
            DUI.helper.sendAnalyticEvent &&
              DUI.helper.sendAnalyticEvent("subscribe_click", {
                category: "footer_subscribe",
                action: "submit",
                label: window.location.pathname,
              });
            var t = i.$subscribeInput.val();
            if (i.helper.isValidEmail(t)) {
              var a,
                n = { email: t, subscribe_source: "official_footer" },
                o =
                  window.ABTest &&
                  window.ABTest.mapKeyToVar &&
                  window.ABTest.mapKeyToVar.subscribe_de_exp,
                r = "";
              return (
                "B" === o &&
                  ((n.exp_hit = o),
                  (r = i.helper.setStoreSubscribeExpCookie()),
                  (a = function () {
                    i.helper.resetStoreExpCookie(r);
                  })),
                DUI.Config._csrf
                  ? ((n._csrf = DUI.Config._csrf), e(n, a))
                  : DUI.Activity.generateToken(function (t) {
                      (n._csrf = t), e(n, a);
                    })
              );
            }
            i.$subscribeTip.html(i.$subscribeTip.data("error"));
          });
        var n = t(".footer-item:last").find(".footer-column:last");
        return (
          n.after(t("#site-footer .subscribe")),
          t(".social-wechat").hover(
            function () {
              t(this).find(".popup").fadeIn(300);
            },
            function () {
              t(this).find(".popup").fadeOut(300);
            }
          ),
          {}
        );
      },
      handleFontColor: function (e, t, i) {
        "prue" === e
          ? i.css("color", t)
          : "gradient" === e &&
            i.css({
              color: "transparent",
              "background-image": t,
              "background-clip": "text",
              "-webkit-background-clip": "text",
            });
      },
      handleBgColor: function (e, t, i) {
        "prue" === e
          ? i.css("background-color", t)
          : "gradient" === e && i.css({ backgroundImage: t });
      },
      handleSubscribeModalDisappear: function (e, t, i) {
        (document.querySelector("html").style.overflow = ""),
          e.css("pointer-events", "none"),
          t.css({ pointerEvents: "none", opacity: 0 }),
          i.css({
            pointerEvents: "none",
            opacity: 0,
            marginTop: "48px",
            visibility: "hidden",
          });
      },
      hideModal: function () {
        window &&
          (window.SUBSCRIBE_MODAL_DATA
            ? (window.SUBSCRIBE_MODAL_DATA.hideModal = !0)
            : (window.SUBSCRIBE_MODAL_DATA = { hideModal: !0 }));
      },
      sendGaAndCDP: function (e, t, i, a) {
        window.ga && window.ga("send", "event", t, i, a),
          window.sensors &&
            window.sensors.track(e, {
              app_ucid: DUI.Config.app_ucid,
              platform_type: "web",
              category: t,
              action: i,
              label: a,
            });
      },
      getModalSubscribeData: function () {
        var e = this,
          a = t("#subscribe-modal-wrapper"),
          n = /\/search(\/.*)?$/.test(
            window.location ? window.location.pathname : ""
          );
        if (n)
          return (
            a.addClass("subscribe-activity-modal-no-show"),
            void this.hideModal()
          );
        var o = t("#subscribe-modal-mask"),
          r = t("#subscribe-modal-content"),
          s = t(".subscribe-modal-content"),
          c = t("#subscribe-modal-container"),
          l = r.find("h3.shown-text"),
          d = r.find("p.intro"),
          u = r.find("span#submit-text"),
          h = r.find("p.eyebrow"),
          p = r.find("#subscribe-modal-submit-btn"),
          f = t("a#activity-modal-link"),
          v = t("#subscribe-modal-email-input"),
          m = t("#subscribe-modal-close-btn"),
          g = r.find(".note"),
          b = t("#subscribe-modal-success"),
          w = b.find(".title"),
          y = b.find(".description"),
          C = b.find("#subscribe-modal-ok-btn"),
          $ = b.find(".btn-text"),
          I = t("#email-input-error-tip"),
          _ = e.helper.getCookie("subscribe-modal-show-flag"),
          k = e.helper.getLocalStorage("subscribe-modal-submit-flag"),
          D = k || _;
        if (
          (a.addClass("subscribe-modal-wrapper-pc"),
          !c.hasClass("activity-modal-container"))
        )
          return void (D
            ? (a.addClass("subscribe-activity-modal-no-show"), this.hideModal())
            : window &&
              (window.SUBSCRIBE_MODAL_DATA = {
                isSubdomain: !0,
                modalType: "subscribe",
              }));
        f.addClass("activity-modal-link");
        var S = DUI.API._helper.getApi("subscribeCompaignModal");
        DUI.API._helper
          .ajaxWithCredent({ method: "GET", url: S })
          .done(function (t) {
            if (
              !t ||
              !t.items ||
              !Array.isArray(t.items) ||
              (t.items && !t.items.length)
            )
              return void e.hideModal();
            var n = t.items[0],
              r = n.modalType,
              b = void 0 === r ? "subscribe" : r,
              _ = n.showPC,
              k = n.modalSlug,
              S = void 0 === k ? "" : k,
              U = n.commonSetting,
              x = n.styleSetting,
              T = n.subscribeModalData,
              A = n.activityModalData,
              B = U.bgImage,
              L = U.eyebrow,
              P = U.title,
              q = U.desc,
              M = U.globalButtonText,
              O = void 0 === M ? "" : M,
              E = x.eyebrowColorSelect,
              H = x.eyebrowColor,
              j = x.titleColorSelect,
              N = x.titleColor,
              F = x.descColorSelect,
              z = x.descColor,
              G = x.btnColorSelect,
              V = x.btnColor,
              W = x.btnTextColorSelect,
              R = x.btnTextColor,
              K = x.closeBtnTheme,
              J = void 0 === K ? "light" : K,
              Z = x.btnWidth,
              Q = A.buttonText,
              X = A.activityLink,
              Y = T.inputTheme;
            (i = (T || {}).activity_type),
              window &&
                (window.SUBSCRIBE_MODAL_DATA = {
                  isSubdomain: !1,
                  modalType: b,
                  modalSlug: S,
                });
            var ee = /teaser|trailer/.test(window.location.href);
            if (ee) return void a.addClass("subscribe-activity-modal-no-show");
            if (
              ("activity" === b && g.css("display", "none"),
              "dark" === J
                ? m.addClass("close-btn-new-dark")
                : m.addClass("close-btn-new-light"),
              "activity" === b)
            ) {
              var te = e.helper.getCookie(S),
                ie = e.helper.getLocalStorage(S),
                ae = te || ie;
              (!ae && _) ||
                (a.addClass("subscribe-activity-modal-no-show"), e.hideModal());
            } else if (D || !_) return a.addClass("subscribe-activity-modal-no-show"), void e.hideModal();
            s.css("background-image", "url(" + B + ")"),
              p.css("width", Z + "px"),
              l.text(P),
              d.text(q),
              h.text(L),
              e.handleFontColor(j, N, l),
              e.handleFontColor(F, z, d),
              e.handleFontColor(E, H, h),
              e.handleFontColor(W, R, u),
              e.handleBgColor(G, V, p),
              e.handleFontColor(j, N, w),
              e.handleFontColor(F, z, y),
              e.handleFontColor(W, R, $),
              e.handleBgColor(G, V, C);
            var ne = O || Q;
            ne && u.text(ne);
            var oe = function () {
              e.sendGaAndCDP(
                "subscribe_modal_click",
                "campaign_modal",
                "click",
                "store-or-login"
              ),
                e.helper.setLocalStorage(S, !0),
                e.handleSubscribeModalDisappear(a, o, c);
            };
            "activity" === b
              ? (f.attr("href", X),
                v.addClass("subscribe-activity-modal-no-show"),
                f.click(function () {
                  oe();
                }),
                p.click(function () {
                  oe(), X && window.open(X);
                }),
                m.click(function () {
                  e.helper.setLocalStorage(S, !0),
                    e.handleSubscribeModalDisappear(a, o, c);
                }),
                o.click(function () {
                  e.helper.setLocalStorage(S, !0),
                    e.handleSubscribeModalDisappear(a, o, c);
                }),
                p.css("margin-top", "0"),
                I.css("padding-top", "0"))
              : (f.css("pointer-events", "none"),
                "light" === Y
                  ? v.addClass("input-theme-new-light")
                  : v.addClass("input-theme-new-dark"));
          })
          .fail(function () {
            e.hideModal(),
              e.sendGaAndCDP(
                "subscribe_modal_click",
                "campaign_or_subscribe_modal",
                "request",
                "fail"
              );
          });
      },
      bindModalSubscribe: function () {
        function e(e, t) {
          var i =
              window.ABTest &&
              window.ABTest.mapKeyToVar &&
              window.ABTest.mapKeyToVar.subscribe_de_exp,
            n = "B" === i;
          r.addClass("loading"),
            DUI.API._helper
              .ajaxWithCredent({ url: o, method: "POST", data: e })
              .done(function (i) {
                if (
                  (r.removeClass("loading"),
                  n && DUI.Config.region && DUI.Config.locale)
                )
                  DUI.API._helper
                    .ajaxWithCredent({
                      method: "POST",
                      dataType: "json",
                      contentType: "application/json",
                      url: DUI.API._helper.getStoreApi("storeSubscribe"),
                      data: JSON.stringify({
                        country: DUI.Config.region.toLowerCase(),
                        language: DUI.Config.locale,
                        source: "official_popup",
                        email: e.email,
                      }),
                    })
                    .done(function (e) {
                      if (i && "200" == i.status && e && 200 == e.status) {
                        d.addClass("hide"),
                          u.addClass("active"),
                          a.sendGaAndCDP(
                            "subscribe_modal_click",
                            "subscribe_modal",
                            "submit",
                            "email-ok"
                          );
                        var n = "subscribe-modal-submit-flag";
                        a.helper.setLocalStorage(n, !0);
                      } else a.sendGaAndCDP("subscribe_modal_click", "subscribe_modal", "submit", "email-fail");
                      t && t();
                    })
                    .fail(function (e) {
                      console.error("subscribes error: ", e), t && t();
                    });
                else {
                  if (i && "200" == i.status) {
                    d.addClass("hide"),
                      u.addClass("active"),
                      a.sendGaAndCDP(
                        "subscribe_modal_click",
                        "subscribe_modal",
                        "submit",
                        "email-ok"
                      );
                    var o = "subscribe-modal-submit-flag";
                    a.helper.setLocalStorage(o, !0);
                  } else
                    a.sendGaAndCDP(
                      "subscribe_modal_click",
                      "subscribe_modal",
                      "submit",
                      "email-fail"
                    );
                  t && t();
                }
              })
              .fail(function (e) {
                r.removeClass("loading"),
                  console.error("subscribe error: ", e),
                  t && t();
              });
        }
        var a = this,
          n = "enterprise" === DUI.Config.layout,
          o = n
            ? DUI.API._helper.getApi("createActivity")
            : DUI.API._helper.getApi("subscribe"),
          r = t("#subscribe-modal-wrapper"),
          s = t("#subscribe-modal-email-input"),
          c = t("#subscribe-modal-submit-btn"),
          l = t("#email-input-error-tip"),
          d = t("#subscribe-modal-content"),
          u = t("#subscribe-modal-success"),
          h = DUI.I18n.locale;
        r &&
          s &&
          c &&
          (s.keyup(function () {
            var e = t(this).val(),
              i = !1;
            (i =
              "zh-CN" === h
                ? a.helper.isValidPhone(e)
                : a.helper.isValidEmail(e)),
              e && !i
                ? (s.addClass("email-input-error"),
                  l.addClass("email-input-has-error"))
                : (s.removeClass("email-input-error"),
                  l.removeClass("email-input-has-error"));
          }),
          s.focus(function () {
            l.removeClass("email-input-blurring");
          }),
          s.blur(function () {
            l.addClass("email-input-blurring");
          }),
          c.click(function () {
            var t = s.val();
            a.sendGaAndCDP(
              "subscribe_modal_click",
              "subscribe_modal",
              "submit",
              "modal_subscribe"
            );
            var o = !1,
              r = "zh-CN" === h;
            if (
              ((o = r ? a.helper.isValidPhone(t) : a.helper.isValidEmail(t)),
              t && o)
            ) {
              var c;
              c = n
                ? {
                    activity_activity_type: "enterprise_subscribe",
                    activity_email: t,
                    activity_subscribe_source: "enterprise_popup",
                  }
                : {
                    activity_activity_type: i,
                    email: r ? new Date().getTime() + "@placeholder.com" : t,
                    activity_phone: r ? t : void 0,
                    subscribe_source: "official_popup",
                  };
              var l,
                d =
                  window.ABTest &&
                  window.ABTest.mapKeyToVar &&
                  window.ABTest.mapKeyToVar.subscribe_de_exp,
                u = "";
              return (
                "B" === d &&
                  ((c.exp_hit = d),
                  (u = a.helper.setStoreSubscribeExpCookie()),
                  (l = function () {
                    a.helper.resetStoreExpCookie(u);
                  })),
                DUI.Config._csrf
                  ? ((c._csrf = DUI.Config._csrf), e(c, l))
                  : DUI.Activity.generateToken(function (t) {
                      (c._csrf = t), e(c, l);
                    })
              );
            }
          }));
      },
      bindSelectCountry: function () {
        var e = t(".footer-change-country"),
          i = t(".select-country");
        e.on("click", function () {
          i.show(), t("html").addClass("country-modal-open");
        }),
          i.find(".country-header--close").on("click", function () {
            return i.hide(), t("html").removeClass("country-modal-open"), !1;
          }),
          i.find(".country-modal").on("click", function () {
            return i.hide(), t("html").removeClass("country-modal-open"), !1;
          });
      },
      showRecord: function () {
        var e = DUI.Localize.getCountry() || "",
          i = DUI.Config.lang,
          a = t("#J_footer_record");
        ("cn" != e.toLowerCase() && "cn" != i) || a.removeClass("hidden");
      },
      handleInitFloatActionBtn: function () {
        if (
          "undefined" != typeof window &&
          "undefined" != typeof FloatActionButton
        ) {
          var e = t("#float-button-text");
          if (!e.length) return;
          var i = e.attr("data-hover-tip") ? e.attr("data-hover-tip") : "",
            a = e.attr("data-main-title") ? e.attr("data-main-title") : "",
            n = JSON.parse(e.attr("data-content-list"))
              ? JSON.parse(e.attr("data-content-list"))
              : [],
            o = DUI.I18n.locale,
            r = e.attr("data-main-button-type")
              ? e.attr("data-main-button-type")
              : "popup-type",
            s = "link-type" === r,
            c = e.attr("data-main-link-type")
              ? e.attr("data-main-link-type")
              : "chat",
            l = e.attr("data-main-link") ? e.attr("data-main-link") : "",
            d = function () {
              var e = {
                isMobile: !1,
                gaCategory: "enterprise_pc_floating window",
                hoverTips: i,
                mainTitle: a,
                contentList: n,
                showOnlineServicePopUp:
                  "zh-CN" === o ||
                  "zh-TW" === o ||
                  "en" === o ||
                  "es" === o ||
                  "ru" === o,
                displayMainOnly: s,
                mainLinkType: c,
                mainLink: l,
              };
              new FloatActionButton(e);
            };
          "complete" !== document.readyState
            ? window.addEventListener("load", function () {
                d();
              })
            : d();
        }
      },
      helper: {
        setLangInCookie: function (e, t) {
          DUI.Localize.subSetLangInCookie(e);
        },
        changeLanguage: function () {
          var e,
            i = this,
            a = i.$siteFooterLocale.find(".change-language"),
            n = [],
            o = [],
            r = "",
            s = location.origin,
            c = location.hostname.split(".")[0] || "",
            l = {
              coupon: ["/en", "/cn"],
              citizenship: ["/en", "/cn"],
              enterprise: [],
            };
          DUI.Config.enterprise_lang &&
            DUI.Config.enterprise_lang.forEach(function (e) {
              /^\/.*/g.test(e)
                ? l.enterprise.push(e)
                : l.enterprise.push("/" + e);
            }),
            (c = c.replace(/^r-/, ""));
          for (var d = 0, u = a.length; d < u; d++) {
            var h = "/" + a.eq(d).data("lang");
            n.push(h), "/en" !== h && o.push(h);
          }
          if ("/" == r) r = "";
          else {
            var p = new RegExp("^(" + o.join("|") + ")", "g");
            r = r.replace(p, "");
          }
          for (var f = 0, v = a.length; f < v; f++) {
            var m = "/en" == n[f] ? "" : n[f];
            (e = s + m + r),
              a.eq(f).attr("href", e),
              l[c] && l[c].indexOf(n[f]) < 0 && a.eq(f).closest("li").hide();
          }
          return (
            i.$siteFooterLocale.delegate(
              ".change-language",
              "click",
              function (e) {
                e.preventDefault();
                var a = t(this).data("lang");
                if (
                  (i.helper.setLangInCookie.call(i, a),
                  "_top" == t(this).attr("target"))
                )
                  top.location.href = t(this).attr("href");
                else {
                  var n = t(this).attr("href");
                  window.location.href = n;
                }
              }
            ),
            n
          );
        },
        getRedirectUrl: function (e, t) {
          var i =
              DUI.Localize.getCountryUrlPrefix({
                locale: DUI.Config.locale,
                country: DUI.Config.region,
              }) || "/",
            a =
              DUI.Localize.getCountryUrlPrefix({ locale: e, country: t }) ||
              "/";
          return DUI.helper.getNextUrlOnSwitch(i, a, DUI.Config.use_mobile);
        },
        changeCountry: function () {
          var e = this;
          t(".countrybox").on("scroll", function (e) {
            return e.preventDefault(), !1;
          }),
            t(".countrylist--item").on("click", function (i) {
              i.preventDefault();
              var a = t(this).data("country"),
                n = t(this).data("locale"),
                o = t(this).data("continent");
              if (
                ("international" === o && "us" === a && "en" === n
                  ? DUI.Localize.setOtherRegionFlag()
                  : DUI.Localize.resetOtherRegionFlag(),
                DUI.Localize.setPairedLocalize({ country: a, locale: n }))
              ) {
                var r = e.helper.getRedirectUrl(n, a);
                "_top" == t(this).attr("target")
                  ? (top.location.href = r)
                  : (window.location.href = r);
              }
            });
        },
        getStoreLang: function (e) {
          var t = DUI.Config.langMap;
          return t[e] ? t[e] : t.en;
        },
        isValidEmail: function (e) {
          var t =
            /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*\.){1,63}[A-Za-z0-9]+$/;
          return t.test(e);
        },
        isValidPhone: function (e) {
          var t = Number(e),
            i = /^1[3-9](\d{9})$/;
          return i.test(t);
        },
        setCookie: function (e, t, i) {
          var a = new Date();
          a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3),
            (document.cookie = e + "=" + t + "; expires=" + a.toGMTString());
        },
        getCookie: function (e) {
          for (
            var t = e + "=", i = document.cookie.split(";"), a = 0;
            a < i.length;
            a++
          ) {
            var n = i[a].trim();
            if (0 === n.indexOf(t)) return n.substring(t.length, n.length);
          }
          return "";
        },
        getLocalStorage: function (e) {
          try {
            return window.localStorage.getItem(e);
          } catch (t) {
            return "";
          }
        },
        setLocalStorage: function (e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch (i) {}
        },
        setStoreExpCookieValue: function (e) {
          var t = window.location.hostname.split(".").reverse(),
            i = t[1] ? "." + t[1] + "." + t[0] : "",
            a = 7776e3;
          document.cookie = i
            ? "_ab_exp=" + e + "; path=/; domain=" + i + "; max-age=" + a
            : "_ab_exp=" + e + "; path=/; max-age=" + a;
        },
        setStoreSubscribeExpCookie: function () {
          var e = this,
            t = e.getCookie("_ab_exp"),
            i = "";
          return (
            t
              ? ((i = t
                  .replace("~pop-footer-subscribe-courtesy.A", "")
                  .replace("~pop-footer-subscribe-courtesy.B", "")
                  .replace("pop-footer-subscribe-courtesy.A", "")
                  .replace("pop-footer-subscribe-courtesy.B", "")),
                (i += "~pop-footer-subscribe-courtesy.B"))
              : (i = "pop-footer-subscribe-courtesy.B"),
            e.setStoreExpCookieValue(i),
            t
          );
        },
        resetStoreExpCookie: function (e) {
          var t = this;
          t.setStoreExpCookieValue(e);
        },
      },
    });
  })(window, jQuery);
