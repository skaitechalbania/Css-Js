!(function (e, n) {
  (e.DUI = "undefined" == typeof DUI ? {} : DUI),
    (DUI.Config = {
      clientSwitcher: !1,
      mobilePrefix: "mobile",
      servers: [],
      env: "production",
      locale: "en",
      langMap: {
        en: { lang: "en", country: "US", currency: "USD" },
        cn: { lang: "zh-CN", country: "CN", currency: "CNY" },
        "zh-tw": { lang: "zh-TW", country: "HK", currency: "HKD" },
        jp: { lang: "ja", country: "JP", currency: "JPY" },
        kr: { lang: "ko", country: "KR", currency: "KRW" },
        ko: { lang: "ko", country: "KR", currency: "KRW" },
        fr: { lang: "fr", country: "FR", currency: "EUR" },
        de: { lang: "de", country: "DE", currency: "EUR" },
        es: { lang: "es", country: "ES", currency: "EUR" },
        ru: { lang: "ru", country: "RU", currency: "EUR" },
        "pt-br": { lang: "pt-BR", country: "BR", currency: "BRL" },
        it: { lang: "it", country: "IT", currency: "EUR" },
      },
      aliasMap: {
        en: "",
        "zh-CN": "cn",
        "zh-TW": "zh-tw",
        ja: "jp",
        ko: "kr",
        "pt-BR": "pt-br",
      },
      countryCodeToNameMap: { gb: "uk" },
      countryMap: {
        us: "",
        ca: ["", "fr"],
        pr: "",
        be: "",
        dk: "",
        fr: ["fr"],
        de: ["de"],
        gr: "",
        ie: "",
        it: ["it"],
        lu: ["fr"],
        nl: "",
        pt: "",
        es: ["es"],
        gb: "",
        at: ["de"],
        cy: "",
        cz: "",
        ee: "",
        fi: "",
        lv: "",
        li: ["de"],
        mt: "",
        mc: ["fr"],
        no: "",
        pl: "",
        si: "",
        se: "",
        ch: ["de", "fr"],
        hk: ["zh-TW", ""],
        mo: ["zh-TW"],
        tw: ["zh-TW"],
        jp: ["ja"],
        au: "",
        nz: "",
        kr: ["ko"],
        sg: "",
        bg: "",
        hr: "",
        hu: "",
        lt: "",
        sk: "",
        cn: ["zh-CN"],
        mx: ["es"],
        ae: "",
        id: "",
        ru: "ru",
        br: ["pt-BR"],
      },
      continentMap: [
        {
          continent_code: "asia pacific",
          continent: "亚太",
          countries: [
            {
              country_code: "cn",
              country: "中国大陆",
              country_english: "China",
              language_code: "zh-CN",
              language: "简体中文",
            },
            {
              country_code: "hk",
              country: "香港",
              country_english: "Hong Kong",
              language_code: "zh-TW",
              language: "繁體中文",
            },
            {
              country_code: "hk",
              country: "Hong Kong",
              country_english: "Hong Kong",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "id",
              country: "Indonesia",
              country_english: "Indonesia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "jp",
              country: "日本",
              country_english: "Japan",
              language_code: "ja",
              language: "日本語",
            },
            {
              country_code: "mo",
              country: "澳門",
              country_english: "Macau",
              language_code: "zh-TW",
              language: "繁體中文",
            },
            {
              country_code: "sg",
              country: "Singapore",
              country_english: "Singapore",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "kr",
              country: "대한민국",
              country_english: "South Korea",
              language_code: "ko",
              language: "한국어",
            },
            {
              country_code: "tw",
              country: "台灣",
              country_english: "Taiwan",
              language_code: "zh-TW",
              language: "繁體中文",
            },
            {
              country_code: "au",
              country: "Australia",
              country_english: "Australia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "nz",
              country: "New Zealand",
              country_english: "New Zealand",
              language_code: "en",
              language: "English",
            },
          ],
        },
        {
          continent_code: "europe",
          continent: "欧洲",
          countries: [
            {
              country_code: "at",
              country: "Österreich",
              country_english: "Austria",
              language_code: "de",
              language: "Deutsch",
            },
            {
              country_code: "ru",
              country: "Россия",
              country_english: "Russia",
              language_code: "ru",
              language: "Pусский",
            },
            {
              country_code: "be",
              country: "Belgium",
              country_english: "Belgium",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "bg",
              country: "Bulgaria",
              country_english: "Bulgaria",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "hr",
              country: "Croatia",
              country_english: "Croatia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "cz",
              country: "Czech Republic",
              country_english: "Czech Republic",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "dk",
              country: "Denmark",
              country_english: "Denmark",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ee",
              country: "Estonia",
              country_english: "Estonia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "fi",
              country: "Finland",
              country_english: "Finland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "fr",
              country: "France",
              country_english: "France",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "de",
              country: "Deutschland",
              country_english: "Germany",
              language_code: "de",
              language: "Deutsch",
            },
            {
              country_code: "gr",
              country: "Greece",
              country_english: "Greece",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "hu",
              country: "Hungary",
              country_english: "Hungary",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ie",
              country: "Ireland",
              country_english: "Ireland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "it",
              country: "Italy",
              country_english: "Italy",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "lv",
              country: "Latvia",
              country_english: "Latvia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "li",
              country: "Liechtenstein",
              country_english: "Liechtenstein",
              language_code: "de",
              language: "Deutsch",
            },
            {
              country_code: "lt",
              country: "Lithuania",
              country_english: "Lithuania",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "lu",
              country: "Luxembourg",
              country_english: "Luxembourg",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "mt",
              country: "Malta",
              country_english: "Malta",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "mc",
              country: "Monaco",
              country_english: "Monaco",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "nl",
              country: "Netherlands",
              country_english: "Netherlands",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "no",
              country: "Norway",
              country_english: "Norway",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "pl",
              country: "Poland",
              country_english: "Poland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "pt",
              country: "Portugal",
              country_english: "Portugal",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "sk",
              country: "Slovakia",
              country_english: "Slovakia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "si",
              country: "Slovenia",
              country_english: "Slovenia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "es",
              country: "España",
              country_english: "Spain",
              language_code: "es",
              language: "Español",
            },
            {
              country_code: "se",
              country: "Sweden",
              country_english: "Sweden",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ch",
              country: "Switzerland",
              country_english: "Switzerland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "gb",
              country: "United Kingdom",
              country_english: "United Kingdom",
              language_code: "en",
              language: "English",
            },
          ],
        },
        {
          continent_code: "middle east",
          continent: "中东",
          countries: [
            {
              country_code: "ae",
              country: "UAE",
              country_english: "UAE",
              language_code: "en",
              language: "English",
            },
          ],
        },
        {
          continent_code: "north america",
          continent: "美洲",
          countries: [
            {
              country_code: "ca",
              country: "Canada",
              country_english: "Canada",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ca",
              country: "Canada",
              country_english: "Canada",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "pr",
              country: "Puerto Rico",
              country_english: "Puerto Rico",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "us",
              country: "United States",
              country_english: "United States",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "mx",
              country: "México",
              country_english: "Mexico",
              language_code: "es",
              language: "Español",
            },
          ],
        },
        {
          continent_code: "international",
          continent: "international",
          countries: [
            {
              country_code: "or",
              country: "Other Regions",
              country_english: "Other Regions",
              language_code: "en",
              language: "English",
            },
          ],
        },
      ],
      continentCountries: {
        ap: {
          cn: {},
          hk: {},
          id: {},
          jp: {},
          mo: {},
          sg: {},
          kr: {},
          tw: {},
          au: {},
          nz: {},
        },
        eu: {
          at: {},
          ru: {},
          be: {},
          bg: {},
          hr: {},
          cz: {},
          dk: {},
          ee: {},
          fi: {},
          fr: {},
          de: {},
          gr: {},
          hu: {},
          ie: {},
          it: {},
          lv: {},
          li: {},
          lt: {},
          lu: {},
          mt: {},
          mc: {},
          nl: {},
          no: {},
          pl: {},
          pt: {},
          sk: {},
          si: {},
          es: {},
          se: {},
          ch: {},
          gb: {},
        },
        me: { ae: {} },
        na: { ca: {}, pr: {}, us: {} },
      },
      captchaLangMapForPC: {
        cn: "cn",
        en: "en",
        "zh-tw": "tw",
        ja: "ja_JP",
        de: "de_DE",
        fr: "fr_FR",
        kr: "ko_KR",
        es: "es_ES",
        ru: "ru_RU",
        it: "it_IT",
        "pt-br": "pt_BR",
      },
      captchaLangMapForM: { cn: "cn", en: "en", "zh-tw": "tw" },
      aliCaptcha: {
        appkeyForM: "FFFF0N4N000000005F55",
        appkeyForPC: "FFFF0N4N000000005F55",
        sceneForM: "nc_other_h5",
        sceneForPC: "nc_other",
      },
      searchApiHost: {
        development: { host: "https://test-search-api.dbeta.me" },
        staging: { host: "https://test-search-api.dbeta.me" },
        preview: { host: "https://stag-search-api.dbeta.me" },
        production: { host: "https://search-api.dji.com" },
        host: "https://search-api.dji.com",
      },
      apiHostList: {
        official_api: {
          staging: { host: "//test-www-api.dbeta.me" },
          development: { host: "" },
          preview: { host: "//stag-www-api.dbeta.me" },
          production: { host: "//www-api.dji.com" },
          host: "//www-api.dji.com",
        },
        store_api: {
          staging: { host: "//r-store.dbeta.me" },
          development: { host: "//r-store.dbeta.me" },
          preview: { host: "//r-store.dbeta.me" },
          production: { host: "//store.dji.com" },
          host: "//store.dji.com",
        },
      },
      apiList: {
        arsDealer: "/api/ars-dealers",
        currentTime: "/api/util/current_time",
        csrf: "/api/csrf",
        createActivity: "/api/activity/create",
        chinaCities: "/api/dealers/china_cities/",
        captchaValidate: "/api/util/captcha/validate",
        captchaNeeded: "/api/util/captcha_needed",
        citiesInChina: "/api/dealers/cities_in_china",
        dealerContinent: "/api/dealers/continents",
        dealerCountry: "/api/dealers/countries/",
        dealerState: "/api/dealers/states/",
        dealerStore: "/api/dealers/store/",
        dealerStores: "/api/dealers/stores/",
        dealerSubmit: "/api/dealers/submit?www=v2",
        dealerWarranties: "/api/dealers/warranties/",
        dealerZipcode: "/api/dealers/zipcode/",
        enterpriseSubIndustry: "/api/enterprise/subIndustry",
        flySafeIntroduction: "/api/flysafe/introduction",
        geoAreas: "/api/geo/areas",
        geoCountry: "/api/geo/country/",
        geoPointInfo: "/api/geo/point-info",
        geoSupportList: "/api/geo/support-list",
        geoSystemCheckUserVerify: "/api/geo-system/check-user-verify",
        geoSystemSubmitUnlockTerm: "/api/geo-system/submit-unlock-terms",
        geoSystemAdvanceUnlock: "/api/geo-system/advance-unlock?www=v2",
        geoSystemCustomUnlock: "/api/geo-system/custom-unlock?www=v2",
        localeIpLocation: "/api/locale/ip-location",
        noFlyCountry: "/api/no-fly/country/",
        officialGetUserInfo: "/api/official/get_user_info/",
        officialGetCurrentCountry: "/api/official/get_current_country",
        productCenterMg: "/api/product_center/mg-1/cn",
        productCenterMgV2: "/api/v2/product_center/mg-1/cn",
        productGroupAllSeries: "/api/products/groups/all-series",
        productListAllNav: "/api/products/list/all-nav",
        productListAllSeries: "/api/products/list/all-series",
        productPrice: "/api/product/price",
        productGetPrice: "/api/product/get_price",
        productDealersMg1: "/api/product_dealers/mg-1",
        productCenterMg1: "/api/product_center/mg-1",
        reserveAvailable: "/api/reserve/available/",
        reserveTypelistWingedAppointment:
          "/api/reserve/typelist/winged_appointment",
        reserveVerify: "/api/reserve/verify?www=v2",
        searchHotWord: "/api/search/hot-word",
        searchFind: "/api/search/find",
        skypixelLogin: "/oauth2/auth?www=v2",
        showCaseSubmitVideo: "/api/showcase/submit/video?www=v2",
        subscribe: "/api/subscribe?www=v2",
        storeSubscribe: "/api/v8/subscribes",
        storeGetCart: "/api/v5/cart",
        serviceCenterV2: "/api/v2/service/center",
        userInformation: "/api/user/information",
        userCart: "/api/user/cart",
        whereToBuyAgriMap: "/api/where-to-buy/agriculture-dealer-maps",
        whereToBuyDeliveryDealer: "/api/where-to-buy/delivery-dealer-maps",
        whereToBuyDealerMap: "/api/where-to-buy/dealer-maps",
        whereToBuyProDealer: "/api/where-to-buy/professional-dealers/",
        whereToBuySearch: "/api/where-to-buy/search/",
        flySafeIpLocation: "/api/flysafe/ip-location",
        flySafeSelfUnlockVerify: "/api/flysafe/self-unlock/verify?www=v2",
        flySafeSelfUnlockSendVerifycationCode:
          "/api/flysafe/self-unlock/send-verification-code?www=v2",
        flySafeSelfUnlockSendVerifycationVoiceCode:
          "/api/flysafe/self-unlock/send-verification-voice-code?www=v2",
        flySafeSelfUnlockLicenseCount:
          "/api/flysafe/self-unlock/check-license-limited?www=v2",
        flySafeLink: "/api/flysafe/link",
        flySafeCountryChunkMap: "/api/flysafe/country-chunk-map",
        getTerraSts: "/api/flysafe/get-sts",
        customUnlockSnCheck: "/api/flysafe/sn_check",
        customUnlockAccountCheck: "/api/flysafe/account_check?www=v2",
        getRmVideos: "/api/get-rm-videos",
        getRmNav: "/api/get-rm-nav",
        getWechatSignature: "/api/get-wechat-signature",
        subscribeCompaignModal: "/api/subscribe-compaign",
      },
      formGaType: {
        DEFAULT: "Submit_fail_0",
        CAPTCHA_VERIFICATION_FAIL: "Submit_fail_1",
        EMAIL_VERIFICATION_FAIL: "Submit_fail_2",
        TERMS_REQUIRE: "Submit_fail_3",
        REQUIRE: "Submit_fail_4",
        MORE_SUBMISSION: "Submit_fail_5",
        SUCCESS: "Submit_success",
      },
    });
  var r = n("#app-config").find(".dui-cfg"),
    t = n("body").data();
  r.each(function (r, t) {
    var o = n(t),
      a = o.data("type"),
      i = o.data("key") || "",
      l = o.data("value") || "";
    a &&
      n.isFunction(e[a]) &&
      (l = "Boolean" === a ? "true" === l || l === !0 : e[a](l)),
      (DUI.Config[i] = l);
  });
  for (var o in t) t.hasOwnProperty(o) && (DUI.Config[o] = t[o]);
})(window, jQuery),
  (function e(n, r, t) {
    function o(i, l) {
      if (!r[i]) {
        if (!n[i]) {
          var c = "function" == typeof require && require;
          if (!l && c) return c(i, !0);
          if (a) return a(i, !0);
          var u = new Error("Cannot find module '" + i + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var s = (r[i] = { exports: {} });
        n[i][0].call(
          s.exports,
          function (e) {
            var r = n[i][1][e];
            return o(r ? r : e);
          },
          s,
          s.exports,
          e,
          n,
          r,
          t
        );
      }
      return r[i].exports;
    }
    for (
      var a = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  })(
    {
      1: [
        function (e, n, r) {
          function t() {
            return {
              a: ["target", "href", "title"],
              abbr: ["title"],
              address: [],
              area: ["shape", "coords", "href", "alt"],
              article: [],
              aside: [],
              audio: ["autoplay", "controls", "loop", "preload", "src"],
              b: [],
              bdi: ["dir"],
              bdo: ["dir"],
              big: [],
              blockquote: ["cite"],
              br: [],
              caption: [],
              center: [],
              cite: [],
              code: [],
              col: ["align", "valign", "span", "width"],
              colgroup: ["align", "valign", "span", "width"],
              dd: [],
              del: ["datetime"],
              details: ["open"],
              div: [],
              dl: [],
              dt: [],
              em: [],
              font: ["color", "size", "face"],
              footer: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              header: [],
              hr: [],
              i: [],
              img: ["src", "alt", "title", "width", "height"],
              ins: ["datetime"],
              li: [],
              mark: [],
              nav: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              section: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              table: ["width", "border", "align", "valign"],
              tbody: ["align", "valign"],
              td: ["width", "colspan", "align", "valign"],
              tfoot: ["align", "valign"],
              th: ["width", "colspan", "align", "valign"],
              thead: ["align", "valign"],
              tr: ["rowspan", "align", "valign"],
              tt: [],
              u: [],
              ul: [],
              video: [
                "autoplay",
                "controls",
                "loop",
                "preload",
                "src",
                "height",
                "width",
              ],
            };
          }
          function o(e, n, r) {}
          function a(e, n, r) {}
          function i(e, n, r) {}
          function l(e, n, r) {}
          function c(e) {
            return e.replace(P, "&lt;").replace(C, "&gt;");
          }
          function u(e, n, r, t) {
            if (((t = t || w), (r = h(r)), "href" === n || "src" === n)) {
              if (((r = S.trim(r)), "#" === r)) return "#";
              if (
                "http://" !== r.substr(0, 7) &&
                "https://" !== r.substr(0, 8) &&
                "mailto:" !== r.substr(0, 7) &&
                "#" !== r[0] &&
                "/" !== r[0]
              )
                return "";
            } else if ("background" === n) {
              if (((D.lastIndex = 0), D.test(r))) return "";
            } else if ("style" === n) {
              if (((E.lastIndex = 0), E.test(r))) return "";
              if (
                ((j.lastIndex = 0), j.test(r) && ((D.lastIndex = 0), D.test(r)))
              )
                return "";
              r = t.process(r);
            }
            return (r = y(r));
          }
          function s(e) {
            return e.replace(k, "&quot;");
          }
          function g(e) {
            return e.replace(I, '"');
          }
          function f(e) {
            return e.replace(U, function (e, n) {
              return "x" === n[0] || "X" === n[0]
                ? String.fromCharCode(parseInt(n.substr(1), 16))
                : String.fromCharCode(parseInt(n, 10));
            });
          }
          function p(e) {
            return e.replace(A, ":").replace(R, " ");
          }
          function d(e) {
            for (var n = "", r = 0, t = e.length; r < t; r++)
              n += e.charCodeAt(r) < 32 ? " " : e.charAt(r);
            return S.trim(n);
          }
          function h(e) {
            return (e = g(e)), (e = f(e)), (e = p(e)), (e = d(e));
          }
          function y(e) {
            return (e = s(e)), (e = c(e));
          }
          function m() {
            return "";
          }
          function v(e, n) {
            function r(n) {
              return !!t || S.indexOf(e, n) !== -1;
            }
            "function" != typeof n && (n = function () {});
            var t = !Array.isArray(e),
              o = [],
              a = !1;
            return {
              onIgnoreTag: function (e, t, i) {
                if (r(e)) {
                  if (i.isClosing) {
                    var l = "[/removed]",
                      c = i.position + l.length;
                    return o.push([a !== !1 ? a : i.position, c]), (a = !1), l;
                  }
                  return a || (a = i.position), "[removed]";
                }
                return n(e, t, i);
              },
              remove: function (e) {
                var n = "",
                  r = 0;
                return (
                  S.forEach(o, function (t) {
                    (n += e.slice(r, t[0])), (r = t[1]);
                  }),
                  (n += e.slice(r))
                );
              },
            };
          }
          function b(e) {
            return e.replace(T, "");
          }
          function _(e) {
            var n = e.split("");
            return (
              (n = n.filter(function (e) {
                var n = e.charCodeAt(0);
                return 127 !== n && (!(n <= 31) || 10 === n || 13 === n);
              })),
              n.join("")
            );
          }
          var x = e("cssfilter").FilterCSS,
            S = e("./util"),
            w = new x(),
            P = /</g,
            C = />/g,
            k = /"/g,
            I = /&quot;/g,
            U = /&#([a-zA-Z0-9]*);?/gim,
            A = /&colon;?/gim,
            R = /&newline;?/gim,
            D =
              /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
            E = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
            j = /u\s*r\s*l\s*\(.*/gi,
            T = /<!--[\s\S]*?-->/g;
          (r.whiteList = t()),
            (r.getDefaultWhiteList = t),
            (r.onTag = o),
            (r.onIgnoreTag = a),
            (r.onTagAttr = i),
            (r.onIgnoreTagAttr = l),
            (r.safeAttrValue = u),
            (r.escapeHtml = c),
            (r.escapeQuote = s),
            (r.unescapeQuote = g),
            (r.escapeHtmlEntities = f),
            (r.escapeDangerHtml5Entities = p),
            (r.clearNonPrintableCharacter = d),
            (r.friendlyAttrValue = h),
            (r.escapeAttrValue = y),
            (r.onIgnoreTagStripAll = m),
            (r.StripTagBody = v),
            (r.stripCommentTag = b),
            (r.stripBlankChar = _),
            (r.cssFilter = w);
        },
        { "./util": 4, cssfilter: 8 },
      ],
      2: [
        function (e, n, r) {
          function t(e, n) {
            var r = new i(n);
            return r.process(e);
          }
          var o = e("./default"),
            a = e("./parser"),
            i = e("./xss");
          (r = n.exports = t), (r.FilterXSS = i);
          for (var l in o) r[l] = o[l];
          for (var l in a) r[l] = a[l];
          "function" == typeof define &&
            define.amd &&
            define(function () {
              return n.exports;
            }),
            "undefined" != typeof window && (window.filterXSS = n.exports);
        },
        { "./default": 1, "./parser": 3, "./xss": 5 },
      ],
      3: [
        function (e, n, r) {
          function t(e) {
            var n = e.indexOf(" ");
            if (n === -1) var r = e.slice(1, -1);
            else var r = e.slice(1, n + 1);
            return (
              (r = g.trim(r).toLowerCase()),
              "/" === r.slice(0, 1) && (r = r.slice(1)),
              "/" === r.slice(-1) && (r = r.slice(0, -1)),
              r
            );
          }
          function o(e) {
            return "</" === e.slice(0, 2);
          }
          function a(e, n, r) {
            "user strict";
            var a = "",
              i = 0,
              l = !1,
              c = !1,
              u = 0,
              s = e.length,
              g = "",
              f = "";
            for (u = 0; u < s; u++) {
              var p = e.charAt(u);
              if (l === !1) {
                if ("<" === p) {
                  l = u;
                  continue;
                }
              } else if (c === !1) {
                if ("<" === p) {
                  (a += r(e.slice(i, u))), (l = u), (i = u);
                  continue;
                }
                if (">" === p) {
                  (a += r(e.slice(i, l))),
                    (g = e.slice(l, u + 1)),
                    (f = t(g)),
                    (a += n(l, a.length, f, g, o(g))),
                    (i = u + 1),
                    (l = !1);
                  continue;
                }
                if (('"' === p || "'" === p) && "=" === e.charAt(u - 1)) {
                  c = p;
                  continue;
                }
              } else if (p === c) {
                c = !1;
                continue;
              }
            }
            return i < e.length && (a += r(e.substr(i))), a;
          }
          function i(e, n) {
            "user strict";
            function r(e, r) {
              if (
                ((e = g.trim(e)),
                (e = e.replace(f, "").toLowerCase()),
                !(e.length < 1))
              ) {
                var t = n(e, r || "");
                t && o.push(t);
              }
            }
            for (var t = 0, o = [], a = !1, i = e.length, u = 0; u < i; u++) {
              var p,
                d,
                h = e.charAt(u);
              if (a !== !1 || "=" !== h)
                if (
                  a === !1 ||
                  u !== t ||
                  ('"' !== h && "'" !== h) ||
                  "=" !== e.charAt(u - 1)
                )
                  if (" " !== h);
                  else {
                    if (a === !1) {
                      if (((d = l(e, u)), d === -1)) {
                        (p = g.trim(e.slice(t, u))),
                          r(p),
                          (a = !1),
                          (t = u + 1);
                        continue;
                      }
                      u = d - 1;
                      continue;
                    }
                    if (((d = c(e, u - 1)), d === -1)) {
                      (p = g.trim(e.slice(t, u))),
                        (p = s(p)),
                        r(a, p),
                        (a = !1),
                        (t = u + 1);
                      continue;
                    }
                  }
                else {
                  if (((d = e.indexOf(h, u + 1)), d === -1)) break;
                  (p = g.trim(e.slice(t + 1, d))),
                    r(a, p),
                    (a = !1),
                    (u = d),
                    (t = u + 1);
                }
              else (a = e.slice(t, u)), (t = u + 1);
            }
            return (
              t < e.length &&
                (a === !1 ? r(e.slice(t)) : r(a, s(g.trim(e.slice(t))))),
              g.trim(o.join(" "))
            );
          }
          function l(e, n) {
            for (; n < e.length; n++) {
              var r = e[n];
              if (" " !== r) return "=" === r ? n : -1;
            }
          }
          function c(e, n) {
            for (; n > 0; n--) {
              var r = e[n];
              if (" " !== r) return "=" === r ? n : -1;
            }
          }
          function u(e) {
            return (
              ('"' === e[0] && '"' === e[e.length - 1]) ||
              ("'" === e[0] && "'" === e[e.length - 1])
            );
          }
          function s(e) {
            return u(e) ? e.substr(1, e.length - 2) : e;
          }
          var g = e("./util"),
            f = /[^a-zA-Z0-9_:\.\-]/gim;
          (r.parseTag = a), (r.parseAttr = i);
        },
        { "./util": 4 },
      ],
      4: [
        function (e, n, r) {
          n.exports = {
            indexOf: function (e, n) {
              var r, t;
              if (Array.prototype.indexOf) return e.indexOf(n);
              for (r = 0, t = e.length; r < t; r++) if (e[r] === n) return r;
              return -1;
            },
            forEach: function (e, n, r) {
              var t, o;
              if (Array.prototype.forEach) return e.forEach(n, r);
              for (t = 0, o = e.length; t < o; t++) n.call(r, e[t], t, e);
            },
            trim: function (e) {
              return String.prototype.trim
                ? e.trim()
                : e.replace(/(^\s*)|(\s*$)/g, "");
            },
          };
        },
        {},
      ],
      5: [
        function (e, n, r) {
          function t(e) {
            return void 0 === e || null === e;
          }
          function o(e) {
            var n = e.indexOf(" ");
            if (n === -1) return { html: "", closing: "/" === e[e.length - 2] };
            e = g.trim(e.slice(n + 1, -1));
            var r = "/" === e[e.length - 1];
            return r && (e = g.trim(e.slice(0, -1))), { html: e, closing: r };
          }
          function a(e) {
            (e = e || {}),
              e.stripIgnoreTag &&
                (e.onIgnoreTag &&
                  console.error(
                    'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
                  ),
                (e.onIgnoreTag = l.onIgnoreTagStripAll)),
              (e.whiteList = e.whiteList || l.whiteList),
              (e.onTag = e.onTag || l.onTag),
              (e.onTagAttr = e.onTagAttr || l.onTagAttr),
              (e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag),
              (e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr),
              (e.safeAttrValue = e.safeAttrValue || l.safeAttrValue),
              (e.escapeHtml = e.escapeHtml || l.escapeHtml),
              (e.css = e.css || {}),
              (this.options = e),
              (this.cssFilter = new i(e.css));
          }
          var i = e("cssfilter").FilterCSS,
            l = e("./default"),
            c = e("./parser"),
            u = c.parseTag,
            s = c.parseAttr,
            g = e("./util");
          (a.prototype.process = function (e) {
            if (((e = e || ""), (e = e.toString()), !e)) return "";
            var n = this,
              r = n.options,
              a = r.whiteList,
              i = r.onTag,
              c = r.onIgnoreTag,
              f = r.onTagAttr,
              p = r.onIgnoreTagAttr,
              d = r.safeAttrValue,
              h = r.escapeHtml,
              y = n.cssFilter;
            r.stripBlankChar && (e = l.stripBlankChar(e)),
              r.allowCommentTag || (e = l.stripCommentTag(e));
            var m = !1;
            if (r.stripIgnoreTagBody) {
              var m = l.StripTagBody(r.stripIgnoreTagBody, c);
              c = m.onIgnoreTag;
            }
            var v = u(
              e,
              function (e, n, r, l, u) {
                var m = {
                    sourcePosition: e,
                    position: n,
                    isClosing: u,
                    isWhite: r in a,
                  },
                  v = i(r, l, m);
                if (!t(v)) return v;
                if (m.isWhite) {
                  if (m.isClosing) return "</" + r + ">";
                  var b = o(l),
                    _ = a[r],
                    x = s(b.html, function (e, n) {
                      var o = g.indexOf(_, e) !== -1,
                        a = f(r, e, n, o);
                      if (!t(a)) return a;
                      if (o)
                        return (n = d(r, e, n, y)), n ? e + '="' + n + '"' : e;
                      var a = p(r, e, n, o);
                      return t(a) ? void 0 : a;
                    }),
                    l = "<" + r;
                  return (
                    x && (l += " " + x), b.closing && (l += " /"), (l += ">")
                  );
                }
                var v = c(r, l, m);
                return t(v) ? h(l) : v;
              },
              h
            );
            return m && (v = m.remove(v)), v;
          }),
            (n.exports = a);
        },
        { "./default": 1, "./parser": 3, "./util": 4, cssfilter: 8 },
      ],
      6: [
        function (e, n, r) {
          function t(e) {
            return void 0 === e || null === e;
          }
          function o(e) {
            (e = e || {}),
              (e.whiteList = e.whiteList || a.whiteList),
              (e.onAttr = e.onAttr || a.onAttr),
              (e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr),
              (this.options = e);
          }
          var a = e("./default"),
            i = e("./parser");
          e("./util");
          (o.prototype.process = function (e) {
            if (((e = e || ""), (e = e.toString()), !e)) return "";
            var n = this,
              r = n.options,
              o = r.whiteList,
              a = r.onAttr,
              l = r.onIgnoreAttr,
              c = i(e, function (e, n, r, i, c) {
                var u = o[r],
                  s = !1;
                u === !0
                  ? (s = u)
                  : "function" == typeof u
                  ? (s = u(i))
                  : u instanceof RegExp && (s = u.test(i)),
                  s !== !0 && (s = !1);
                var g = {
                  position: n,
                  sourcePosition: e,
                  source: c,
                  isWhite: s,
                };
                if (s) {
                  var f = a(r, i, g);
                  return t(f) ? r + ":" + i : f;
                }
                var f = l(r, i, g);
                if (!t(f)) return f;
              });
            return c;
          }),
            (n.exports = o);
        },
        { "./default": 7, "./parser": 9, "./util": 10 },
      ],
      7: [
        function (e, n, r) {
          function t() {
            var e = {};
            return (
              (e["align-content"] = !1),
              (e["align-items"] = !1),
              (e["align-self"] = !1),
              (e["alignment-adjust"] = !1),
              (e["alignment-baseline"] = !1),
              (e.all = !1),
              (e["anchor-point"] = !1),
              (e.animation = !1),
              (e["animation-delay"] = !1),
              (e["animation-direction"] = !1),
              (e["animation-duration"] = !1),
              (e["animation-fill-mode"] = !1),
              (e["animation-iteration-count"] = !1),
              (e["animation-name"] = !1),
              (e["animation-play-state"] = !1),
              (e["animation-timing-function"] = !1),
              (e.azimuth = !1),
              (e["backface-visibility"] = !1),
              (e.background = !0),
              (e["background-attachment"] = !0),
              (e["background-clip"] = !0),
              (e["background-color"] = !0),
              (e["background-image"] = !0),
              (e["background-origin"] = !0),
              (e["background-position"] = !0),
              (e["background-repeat"] = !0),
              (e["background-size"] = !0),
              (e["baseline-shift"] = !1),
              (e.binding = !1),
              (e.bleed = !1),
              (e["bookmark-label"] = !1),
              (e["bookmark-level"] = !1),
              (e["bookmark-state"] = !1),
              (e.border = !0),
              (e["border-bottom"] = !0),
              (e["border-bottom-color"] = !0),
              (e["border-bottom-left-radius"] = !0),
              (e["border-bottom-right-radius"] = !0),
              (e["border-bottom-style"] = !0),
              (e["border-bottom-width"] = !0),
              (e["border-collapse"] = !0),
              (e["border-color"] = !0),
              (e["border-image"] = !0),
              (e["border-image-outset"] = !0),
              (e["border-image-repeat"] = !0),
              (e["border-image-slice"] = !0),
              (e["border-image-source"] = !0),
              (e["border-image-width"] = !0),
              (e["border-left"] = !0),
              (e["border-left-color"] = !0),
              (e["border-left-style"] = !0),
              (e["border-left-width"] = !0),
              (e["border-radius"] = !0),
              (e["border-right"] = !0),
              (e["border-right-color"] = !0),
              (e["border-right-style"] = !0),
              (e["border-right-width"] = !0),
              (e["border-spacing"] = !0),
              (e["border-style"] = !0),
              (e["border-top"] = !0),
              (e["border-top-color"] = !0),
              (e["border-top-left-radius"] = !0),
              (e["border-top-right-radius"] = !0),
              (e["border-top-style"] = !0),
              (e["border-top-width"] = !0),
              (e["border-width"] = !0),
              (e.bottom = !1),
              (e["box-decoration-break"] = !0),
              (e["box-shadow"] = !0),
              (e["box-sizing"] = !0),
              (e["box-snap"] = !0),
              (e["box-suppress"] = !0),
              (e["break-after"] = !0),
              (e["break-before"] = !0),
              (e["break-inside"] = !0),
              (e["caption-side"] = !1),
              (e.chains = !1),
              (e.clear = !0),
              (e.clip = !1),
              (e["clip-path"] = !1),
              (e["clip-rule"] = !1),
              (e.color = !0),
              (e["color-interpolation-filters"] = !0),
              (e["column-count"] = !1),
              (e["column-fill"] = !1),
              (e["column-gap"] = !1),
              (e["column-rule"] = !1),
              (e["column-rule-color"] = !1),
              (e["column-rule-style"] = !1),
              (e["column-rule-width"] = !1),
              (e["column-span"] = !1),
              (e["column-width"] = !1),
              (e.columns = !1),
              (e.contain = !1),
              (e.content = !1),
              (e["counter-increment"] = !1),
              (e["counter-reset"] = !1),
              (e["counter-set"] = !1),
              (e.crop = !1),
              (e.cue = !1),
              (e["cue-after"] = !1),
              (e["cue-before"] = !1),
              (e.cursor = !1),
              (e.direction = !1),
              (e.display = !0),
              (e["display-inside"] = !0),
              (e["display-list"] = !0),
              (e["display-outside"] = !0),
              (e["dominant-baseline"] = !1),
              (e.elevation = !1),
              (e["empty-cells"] = !1),
              (e.filter = !1),
              (e.flex = !1),
              (e["flex-basis"] = !1),
              (e["flex-direction"] = !1),
              (e["flex-flow"] = !1),
              (e["flex-grow"] = !1),
              (e["flex-shrink"] = !1),
              (e["flex-wrap"] = !1),
              (e["float"] = !1),
              (e["float-offset"] = !1),
              (e["flood-color"] = !1),
              (e["flood-opacity"] = !1),
              (e["flow-from"] = !1),
              (e["flow-into"] = !1),
              (e.font = !0),
              (e["font-family"] = !0),
              (e["font-feature-settings"] = !0),
              (e["font-kerning"] = !0),
              (e["font-language-override"] = !0),
              (e["font-size"] = !0),
              (e["font-size-adjust"] = !0),
              (e["font-stretch"] = !0),
              (e["font-style"] = !0),
              (e["font-synthesis"] = !0),
              (e["font-variant"] = !0),
              (e["font-variant-alternates"] = !0),
              (e["font-variant-caps"] = !0),
              (e["font-variant-east-asian"] = !0),
              (e["font-variant-ligatures"] = !0),
              (e["font-variant-numeric"] = !0),
              (e["font-variant-position"] = !0),
              (e["font-weight"] = !0),
              (e.grid = !1),
              (e["grid-area"] = !1),
              (e["grid-auto-columns"] = !1),
              (e["grid-auto-flow"] = !1),
              (e["grid-auto-rows"] = !1),
              (e["grid-column"] = !1),
              (e["grid-column-end"] = !1),
              (e["grid-column-start"] = !1),
              (e["grid-row"] = !1),
              (e["grid-row-end"] = !1),
              (e["grid-row-start"] = !1),
              (e["grid-template"] = !1),
              (e["grid-template-areas"] = !1),
              (e["grid-template-columns"] = !1),
              (e["grid-template-rows"] = !1),
              (e["hanging-punctuation"] = !1),
              (e.height = !0),
              (e.hyphens = !1),
              (e.icon = !1),
              (e["image-orientation"] = !1),
              (e["image-resolution"] = !1),
              (e["ime-mode"] = !1),
              (e["initial-letters"] = !1),
              (e["inline-box-align"] = !1),
              (e["justify-content"] = !1),
              (e["justify-items"] = !1),
              (e["justify-self"] = !1),
              (e.left = !1),
              (e["letter-spacing"] = !0),
              (e["lighting-color"] = !0),
              (e["line-box-contain"] = !1),
              (e["line-break"] = !1),
              (e["line-grid"] = !1),
              (e["line-height"] = !1),
              (e["line-snap"] = !1),
              (e["line-stacking"] = !1),
              (e["line-stacking-ruby"] = !1),
              (e["line-stacking-shift"] = !1),
              (e["line-stacking-strategy"] = !1),
              (e["list-style"] = !0),
              (e["list-style-image"] = !0),
              (e["list-style-position"] = !0),
              (e["list-style-type"] = !0),
              (e.margin = !0),
              (e["margin-bottom"] = !0),
              (e["margin-left"] = !0),
              (e["margin-right"] = !0),
              (e["margin-top"] = !0),
              (e["marker-offset"] = !1),
              (e["marker-side"] = !1),
              (e.marks = !1),
              (e.mask = !1),
              (e["mask-box"] = !1),
              (e["mask-box-outset"] = !1),
              (e["mask-box-repeat"] = !1),
              (e["mask-box-slice"] = !1),
              (e["mask-box-source"] = !1),
              (e["mask-box-width"] = !1),
              (e["mask-clip"] = !1),
              (e["mask-image"] = !1),
              (e["mask-origin"] = !1),
              (e["mask-position"] = !1),
              (e["mask-repeat"] = !1),
              (e["mask-size"] = !1),
              (e["mask-source-type"] = !1),
              (e["mask-type"] = !1),
              (e["max-height"] = !0),
              (e["max-lines"] = !1),
              (e["max-width"] = !0),
              (e["min-height"] = !0),
              (e["min-width"] = !0),
              (e["move-to"] = !1),
              (e["nav-down"] = !1),
              (e["nav-index"] = !1),
              (e["nav-left"] = !1),
              (e["nav-right"] = !1),
              (e["nav-up"] = !1),
              (e["object-fit"] = !1),
              (e["object-position"] = !1),
              (e.opacity = !1),
              (e.order = !1),
              (e.orphans = !1),
              (e.outline = !1),
              (e["outline-color"] = !1),
              (e["outline-offset"] = !1),
              (e["outline-style"] = !1),
              (e["outline-width"] = !1),
              (e.overflow = !1),
              (e["overflow-wrap"] = !1),
              (e["overflow-x"] = !1),
              (e["overflow-y"] = !1),
              (e.padding = !0),
              (e["padding-bottom"] = !0),
              (e["padding-left"] = !0),
              (e["padding-right"] = !0),
              (e["padding-top"] = !0),
              (e.page = !1),
              (e["page-break-after"] = !1),
              (e["page-break-before"] = !1),
              (e["page-break-inside"] = !1),
              (e["page-policy"] = !1),
              (e.pause = !1),
              (e["pause-after"] = !1),
              (e["pause-before"] = !1),
              (e.perspective = !1),
              (e["perspective-origin"] = !1),
              (e.pitch = !1),
              (e["pitch-range"] = !1),
              (e["play-during"] = !1),
              (e.position = !1),
              (e["presentation-level"] = !1),
              (e.quotes = !1),
              (e["region-fragment"] = !1),
              (e.resize = !1),
              (e.rest = !1),
              (e["rest-after"] = !1),
              (e["rest-before"] = !1),
              (e.richness = !1),
              (e.right = !1),
              (e.rotation = !1),
              (e["rotation-point"] = !1),
              (e["ruby-align"] = !1),
              (e["ruby-merge"] = !1),
              (e["ruby-position"] = !1),
              (e["shape-image-threshold"] = !1),
              (e["shape-outside"] = !1),
              (e["shape-margin"] = !1),
              (e.size = !1),
              (e.speak = !1),
              (e["speak-as"] = !1),
              (e["speak-header"] = !1),
              (e["speak-numeral"] = !1),
              (e["speak-punctuation"] = !1),
              (e["speech-rate"] = !1),
              (e.stress = !1),
              (e["string-set"] = !1),
              (e["tab-size"] = !1),
              (e["table-layout"] = !1),
              (e["text-align"] = !0),
              (e["text-align-last"] = !0),
              (e["text-combine-upright"] = !0),
              (e["text-decoration"] = !0),
              (e["text-decoration-color"] = !0),
              (e["text-decoration-line"] = !0),
              (e["text-decoration-skip"] = !0),
              (e["text-decoration-style"] = !0),
              (e["text-emphasis"] = !0),
              (e["text-emphasis-color"] = !0),
              (e["text-emphasis-position"] = !0),
              (e["text-emphasis-style"] = !0),
              (e["text-height"] = !0),
              (e["text-indent"] = !0),
              (e["text-justify"] = !0),
              (e["text-orientation"] = !0),
              (e["text-overflow"] = !0),
              (e["text-shadow"] = !0),
              (e["text-space-collapse"] = !0),
              (e["text-transform"] = !0),
              (e["text-underline-position"] = !0),
              (e["text-wrap"] = !0),
              (e.top = !1),
              (e.transform = !1),
              (e["transform-origin"] = !1),
              (e["transform-style"] = !1),
              (e.transition = !1),
              (e["transition-delay"] = !1),
              (e["transition-duration"] = !1),
              (e["transition-property"] = !1),
              (e["transition-timing-function"] = !1),
              (e["unicode-bidi"] = !1),
              (e["vertical-align"] = !1),
              (e.visibility = !1),
              (e["voice-balance"] = !1),
              (e["voice-duration"] = !1),
              (e["voice-family"] = !1),
              (e["voice-pitch"] = !1),
              (e["voice-range"] = !1),
              (e["voice-rate"] = !1),
              (e["voice-stress"] = !1),
              (e["voice-volume"] = !1),
              (e.volume = !1),
              (e["white-space"] = !1),
              (e.widows = !1),
              (e.width = !0),
              (e["will-change"] = !1),
              (e["word-break"] = !0),
              (e["word-spacing"] = !0),
              (e["word-wrap"] = !0),
              (e["wrap-flow"] = !1),
              (e["wrap-through"] = !1),
              (e["writing-mode"] = !1),
              (e["z-index"] = !1),
              e
            );
          }
          function o(e, n, r) {}
          function a(e, n, r) {}
          (r.whiteList = t()),
            (r.getDefaultWhiteList = t),
            (r.onAttr = o),
            (r.onIgnoreAttr = a);
        },
        {},
      ],
      8: [
        function (e, n, r) {
          function t(e, n) {
            var r = new a(n);
            return r.process(e);
          }
          var o = e("./default"),
            a = e("./css");
          (r = n.exports = t), (r.FilterCSS = a);
          for (var i in o) r[i] = o[i];
          "function" == typeof define &&
            define.amd &&
            define(function () {
              return n.exports;
            }),
            "undefined" != typeof window && (window.filterCSS = n.exports);
        },
        { "./css": 6, "./default": 7 },
      ],
      9: [
        function (e, n, r) {
          function t(e, n) {
            function r() {
              if (!a) {
                var r = o.trim(e.slice(i, l)),
                  t = r.indexOf(":");
                if (t !== -1) {
                  var u = o.trim(r.slice(0, t)),
                    s = o.trim(r.slice(t + 1));
                  if (u) {
                    var g = n(i, c.length, u, s, r);
                    g && (c += g + "; ");
                  }
                }
              }
              i = l + 1;
            }
            (e = o.trimRight(e)), ";" !== e[e.length - 1] && (e += ";");
            for (var t = e.length, a = !1, i = 0, l = 0, c = ""; l < t; l++) {
              var u = e[l];
              if ("/" === u && "*" === e[l + 1]) {
                var s = e.indexOf("*/", l + 2);
                if (s === -1) break;
                (l = s + 1), (i = l + 1), (a = !1);
              } else
                "(" === u
                  ? (a = !0)
                  : ")" === u
                  ? (a = !1)
                  : ";" === u
                  ? a || r()
                  : "\n" === u && r();
            }
            return o.trim(c);
          }
          var o = e("./util");
          n.exports = t;
        },
        { "./util": 10 },
      ],
      10: [
        function (e, n, r) {
          n.exports = {
            indexOf: function (e, n) {
              var r, t;
              if (Array.prototype.indexOf) return e.indexOf(n);
              for (r = 0, t = e.length; r < t; r++) if (e[r] === n) return r;
              return -1;
            },
            forEach: function (e, n, r) {
              var t, o;
              if (Array.prototype.forEach) return e.forEach(n, r);
              for (t = 0, o = e.length; t < o; t++) n.call(r, e[t], t, e);
            },
            trim: function (e) {
              return String.prototype.trim
                ? e.trim()
                : e.replace(/(^\s*)|(\s*$)/g, "");
            },
            trimRight: function (e) {
              return String.prototype.trimRight
                ? e.trimRight()
                : e.replace(/(\s*$)/g, "");
            },
          };
        },
        {},
      ],
    },
    {},
    [2]
  ),
  (function (e, n) {
    if (((e.DUI = "undefined" == typeof DUI ? {} : DUI), !e.location.host)) {
      var r = e.location;
      e.location.host = r.hostname + (r.port ? ":" + r.port : "");
    }
    e.location.origin ||
      (e.location.origin = e.location.protocol + "//" + e.location.host),
      (DUI.page = function (e) {
        var r = {
            params: {},
            init: function () {},
            ready: function () {},
            addViews: function () {
              return {};
            },
            bind: function () {
              return {};
            },
            helper: {},
            render: function (e) {
              var r = this;
              return (
                n.isArray(e) || (e = [e]),
                n.each(e, function (e, n) {
                  var t = r.layouts[n];
                  t && t.call(r, n);
                }),
                r
              );
            },
            trigger: function (e) {
              var r = this;
              return (
                n.isArray(e) || (e = [e]),
                n.each(e, function (e, n) {
                  var t = r.events[n];
                  t && t.call(r, { event: n, preventDefault: function () {} });
                }),
                r
              );
            },
            notify: function () {
              function e(e, r) {
                n.isFunction(t.events[e]) && t.events[e].call(t, r);
              }
              n(document).change(function (r) {
                var t = n(r.target),
                  o = t.attr("dui-change");
                e(o);
              }),
                n(document).click(function (r) {
                  var t = n(r.target),
                    o = t.attr("dui-click");
                  e(o, r);
                });
            },
          },
          t = n.extend({}, r, e);
        return (
          ["init", "addViews", "bind", "notify", "ready"].forEach(function (e) {
            var n = t,
              r = t[e].call(n, { params: t.params });
            "addViews" === e
              ? (t.layouts = n.layouts = r)
              : "bind" === e && (t.events = n.events = r);
          }),
          t
        );
      }),
      n.extend(DUI, {
        Template: {
          render: function (e, r, t) {
            var o = e;
            (t && t.key) || (t = n.extend({}, t, { key: "{{key}}|{{!key}}" }));
            for (var a in r) {
              var i = t.key.replace("key", a),
                l = new RegExp(i, "g");
              r[a] = "undefined" == typeof r[a] || null === r[a] ? "" : r[a];
              var c = o.match(l) || [];
              n.each(c, function (e, n) {
                n.indexOf("!" + a) == -1 && (r[a] = filterXSS(r[a])),
                  (o = o.replace(n, r[a]));
              });
            }
            return (o = o.replace(/{{.*}}/g, ""));
          },
          uri: function (e, n) {
            for (var r in n) e = e.replace(":" + r, n[r]);
            return e;
          },
          redirect: function (e) {
            var n = "en" == DUI.Lang ? "" : "/" + DUI.Lang;
            return e.replace(":locale", n);
          },
        },
        Validate: {
          email: function (e) {
            return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g.test(
              e
            );
          },
          length: function (e, n, r) {
            return !("" === e || e.length < n || e.length > r);
          },
        },
        I18n: {
          locale: DUI.Config.locale,
          lang: DUI.Config.lang,
          url: function (e) {
            var n = DUI.Localize.getCountryUrlPrefix();
            return e.replace("/{locale}", n);
          },
          store_url: function (n) {
            var r = e.location || {},
              t = document.domain,
              o = t.substring(0, t.indexOf(".")),
              a = r.port ? r.origin.replace(":" + r.port, "") : r.origin,
              i = a.replace(o, "store");
            return /\/$/.test(i) || (i += "/"), i + (n || "");
          },
        },
        Storage: {
          setItem: function (e, r, t) {
            if (localStorage) {
              var o = !1;
              try {
                localStorage.setItem(e, r);
              } catch (a) {
                (o = !0),
                  n.isFunction(t) ||
                    ("cn" == DUI.lang
                      ? alert("您处在无痕浏览，请关闭无痕浏览模式")
                      : alert(
                          "You are in inprivate browsing, close the inprivate browsing mode"
                        ));
              }
              n.isFunction(t) && t.call(this, o);
            } else
              n.cookie &&
                n.isNumeric(t) &&
                n.cookie.set(e, r, parseInt(t) || 7);
          },
          setJSON: function (e, n, r) {
            var t = "";
            try {
              t = JSON.stringify(n);
            } catch (o) {
              console.log(o);
            }
            this.setItem(e, t, r);
          },
          getItem: function (e, r) {
            if (localStorage) {
              var t = localStorage.getItem(e),
                o = null;
              if ("json" == r) {
                try {
                  o = JSON.parse(t);
                } catch (a) {
                  o = null;
                }
                return o;
              }
              return t;
            }
            if (n.cookie) return n.cookie.get(e);
          },
          getJSON: function (e) {
            return this.getItem(e, "json");
          },
          removeItem: function (e) {
            localStorage
              ? localStorage.removeItem(e)
              : n.cookie && n.cookie.remove(e);
          },
        },
        Async: {
          parallel: function (e, n) {
            var r = e.length,
              t = 0,
              o = [],
              a = null,
              i = function (e, i) {
                (t += 1),
                  o.push(i),
                  e && (a || (a = []), a.push(e)),
                  t >= r && n(a, o);
              };
            e.forEach(function (e) {
              "function" == typeof e && e.call(DUI, i);
            });
          },
        },
        getUrlParam: function (e) {
          var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
            r = window.location.search.substr(1).match(n);
          return null != r ? unescape(r[2]) : "";
        },
        Captcha: {
          isCaptchaNeeded: !0,
          validateParams: {},
          init: function (e, r) {
            DUI.Captcha.getCaptchaNeeded(function () {
              DUI.Captcha.isCaptchaNeeded === !1
                ? (DUI.Captcha.hide(),
                  n("#captcha-input").css("display", "none"))
                : DUI.Captcha._loadScript(function (n) {
                    if (200 !== n)
                      try {
                        var r = JSON.stringify(
                          {
                            type: "front-end",
                            title: "阿里云验证码javascript脚本加载失败",
                            url: window.location.href,
                            stack: n,
                          },
                          !1,
                          4
                        );
                        Raven.captureException(new Error(r));
                      } catch (t) {}
                    DUI.Captcha._init(e);
                  }),
                r && r();
            });
          },
          _init: function (e) {
            if (DUI.Captcha.formCaptcha) return DUI.Captcha._init(e);
            DUI.Captcha._pass = !1;
            var r = DUI.Config.use_mobile
                ? DUI.Config.aliCaptcha.appkeyForM
                : DUI.Config.aliCaptcha.appkeyForPC,
              t = DUI.Config.use_mobile
                ? DUI.Config.aliCaptcha.sceneForM
                : DUI.Config.aliCaptcha.sceneForPC,
              o = [r, new Date().getTime(), Math.random()].join(":"),
              a = {
                renderTo: e.renderDom,
                appkey: r,
                scene: t,
                token: o,
                elementID: e.recordDomsId,
                callback: function (e) {
                  var a = {
                    token: o,
                    sessionid: e.csessionid,
                    scene: t,
                    appkey: r,
                    sig: e.sig,
                  };
                  ("pass" !== e.value && 0 !== e.code) ||
                    ((DUI.Captcha._pass = !0),
                    n("#captcha-input").val("pass").trigger("keyup")),
                    (DUI.Captcha.validateParams = a);
                },
              };
            DUI.Config.use_mobile
              ? (DUI.Config.captchaLangMapForM[DUI.Config.lang]
                  ? (a.language =
                      DUI.Config.captchaLangMapForM[DUI.Config.lang])
                  : (a.language = DUI.Config.lang),
                (a.bannerHidden = !1),
                (DUI.Captcha.formCaptcha = NoCaptcha.init(a)),
                NoCaptcha.setEnabled(!0),
                DUI.Captcha.formCaptcha.reset(),
                DUI.Config.captchaLangMapForM[DUI.Config.lang] ||
                  (NoCaptcha.upLang(
                    DUI.Config.lang,
                    window.captchaTranslation || {}
                  ),
                  DUI.Captcha.formCaptcha.reset()))
              : ((a.timeout = 3e3),
                (a.times = 5),
                (a.customWidth = e.width || 320),
                (a.language = DUI.Config.captchaLangMapForPC[DUI.Config.lang]),
                (DUI.Captcha.formCaptcha = new noCaptcha(a)));
          },
          reload: function () {
            DUI.Captcha.formCaptcha &&
              (DUI.Config.use_mobile
                ? DUI.Captcha.formCaptcha.reset()
                : DUI.Captcha.formCaptcha.reload());
          },
          hide: function () {
            DUI.Captcha.formCaptcha && DUI.Captcha.formCaptcha.hide();
          },
          show: function () {
            DUI.Captcha.formCaptcha && DUI.Captcha.formCaptcha.show();
          },
          destory: function () {
            DUI.Captcha.formCaptcha && DUI.Captcha.formCaptcha.destroy();
          },
          getResult: function () {
            return DUI.Captcha.isCaptchaNeeded === !1 || DUI.Captcha._pass;
          },
          getCaptchaNeeded: function (e) {
            n.getJSON(DUI.API._helper.getApi("captchaNeeded"), function (n) {
              return (DUI.Captcha.isCaptchaNeeded = n && n.needed), e && e(n);
            });
          },
          _loadScript: function (e) {
            var r = {
                lang: DUI.Localize.getCountryUrlPrefix(),
                getLocation: function (e) {
                  n.getJSON(
                    DUI.API._helper.getApi("flySafeIpLocation"),
                    function (n) {
                      return e(n);
                    }
                  );
                },
                loadScript: function (e, r) {
                  var t = this.getFormatTime();
                  n.getScript(e + "?t=" + t)
                    .done(function () {
                      r(200);
                    })
                    .fail(function (e) {
                      r(e);
                    });
                },
                getFormatTime: function () {
                  var e = new Date(),
                    n = e.getFullYear(),
                    r = e.getMonth() + 1,
                    t = e.getDate(),
                    o = e.getHours();
                  return (
                    (r = 1 == r.toString().length ? "0" + r : r),
                    (t = 1 == t.toString().length ? "0" + t : t),
                    (o = 1 == o.toString().length ? "0" + o : o),
                    "" + n + r + t + o
                  );
                },
              },
              t = {
                "cn-pc": "//g.alicdn.com/sd/ncpc/nc.js",
                "foreign-pc": "//aeis.alicdn.com/sd/ncpc/nc.js",
                "cn-m": "//g.alicdn.com/sd/nch5/index.js",
                "foreign-m": "//aeis.alicdn.com/sd/nch5/index.js",
              };
            r.getLocation(function (n) {
              var o = "CN" === n.country ? "cn-" : "foreign-";
              (o += DUI.Config.use_mobile ? "m" : "pc"), r.loadScript(t[o], e);
            });
          },
        },
      }),
      n(function () {
        DUI.Config.use_mobile
          ? n("[dui-m-src],[dui-m-data-layzr]").each(function (e, r) {
              n(r).attr(
                "src",
                n(r).attr("dui-m-src") || n(r).attr("dui-m-data-layzr")
              );
            })
          : n("[dui-pc-src],[dui-pc-data-layzr]").each(function (e, r) {
              n(r).attr(
                "src",
                n(r).attr("dui-pc-src") || n(r).attr("dui-pc-data-layzr")
              );
            });
      }),
      (n.fn.render = function (e) {
        var r = {
            script: !0,
            getData: function () {
              return [];
            },
            to: function (e, n) {
              return t.script ? (n ? n.append(e) : void 0) : n.replaceWith(e);
            },
            finish: function (e) {
              t.script || e.removeClass("hidden");
            },
          },
          t = n.extend(r, e),
          o = n(this).context;
        n(this).each(function (e, r) {
          var a = n(r).html(),
            i = t.getData(),
            l = n(r).data("to"),
            c = [];
          if (!t.script) {
            var u = n(r).data("dui-tpl-ref");
            (a = u || n(r).find(".dui-tpl")), u || n(r).data("dui-tpl-ref", a);
          }
          (l = l ? n(o).find(l) : n(r).parent()),
            n.isArray(i) || (i = [i]),
            n.each(i, function (e, r) {
              t.script
                ? c.push(DUI.Template.render(a, r))
                : a.each(function (e, o) {
                    var a = n(o),
                      i = DUI.Template.render(o.outerHTML, r);
                    (i = i.replace(/dui-lazy-/g, "").replace("dui-tpl", "")),
                      t.to(i, a);
                  });
            }),
            t.script && t.to(c.join("").trim(), l),
            t.finish(n(r));
        });
      }),
      (n.fn.formValued = function (e) {
        var r = n(this);
        return (
          (e = e || {}),
          {
            get: function () {
              var t = {},
                o = r.find(":disabled");
              o.prop("disabled", !1);
              var a = r.serializeArray();
              return (
                o.prop("disabled", !0),
                n.each(a, function (n, o) {
                  var a = e[o.name];
                  if (((o.value = o.value.replace(/"/g, '\\"')), a === !1))
                    return !0;
                  var i = null;
                  if (
                    (a &&
                      a.get &&
                      ((i = r.find("[name='" + o.name + "']")),
                      (o.value = a.get(i, o.value))),
                    "" == o.value)
                  ) {
                    i = r.find("[name='" + o.name + "']").get(0);
                    var l = "number" == (i.type || "").toLowerCase();
                    l && i.validity && i.validity.badInput
                      ? (t[o.name] = "invalid")
                      : (t[o.name] = o.value);
                  } else t[o.name] = o.value;
                }),
                t
              );
            },
            set: function (r) {
              var t = "input,textarea,select",
                o = n(t);
              o.each(function (t, o) {
                var a = n(o),
                  i = a.attr("name") || a.data("name"),
                  l = r[i],
                  c = e[i];
                if (c === !1) return !0;
                if (c && c.set) {
                  var u = c.set(l, a);
                  u && a.val(u);
                } else a.val(l);
              });
            },
          }
        );
      });
  })(window, jQuery),
  (function (e) {
    DUI.Cookie = e.cookie = {
      support: navigator.cookieEnabled,
      set: function (e, n, r) {
        if (this.support) {
          r = r || {};
          var t = "";
          if ("number" == typeof r) {
            var o = r;
            r = { expires: o };
          }
          if (
            (r.expires || (r.expires = 3),
            r.expires &&
              ("number" == typeof r.expires || r.expires.toUTCString))
          ) {
            var a;
            "number" == typeof r.expires
              ? ((a = new Date()),
                a.setTime(a.getTime() + 24 * r.expires * 60 * 60 * 1e3))
              : (a = r.expires),
              (t = "; expires=" + a.toUTCString());
          }
          var i = r.path ? "; path=" + r.path : "",
            l = r.domain ? "; domain=" + r.domain : "",
            c = r.secure ? "; secure" : "";
          return (
            (document.cookie = [e, "=", encodeURIComponent(n), t, i, l, c].join(
              ""
            )),
            !0
          );
        }
        return console.log("cookie not supported !"), !1;
      },
      get: function (e) {
        if (this.support) {
          for (var n = document.cookie.split(";"), r = 0; r < n.length; r++) {
            var t = jQuery.trim(n[r]);
            if (t.substring(0, e.length + 1) == e + "=")
              return decodeURIComponent(t.substring(e.length + 1));
          }
          return null;
        }
        return console.log("cookie not supported !"), null;
      },
      remove: function (e, n) {
        return this.support
          ? ((n = n || {}), (n.expires = -1), !!this.set(e, "", n))
          : (console.log("cookie not supported !"), !1);
      },
    };
  })(jQuery),
  !(function (e, n) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define(n)
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).OfficialScript = n());
  })(this, function () {
    "use strict";
    function e(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function n(e, n) {
      for (var r = 0; r < n.length; r++) {
        var t = n[r];
        (t.enumerable = t.enumerable || !1),
          (t.configurable = !0),
          "value" in t && (t.writable = !0),
          Object.defineProperty(
            e,
            ((o = t.key),
            (a = void 0),
            "symbol" ==
            typeof (a = (function (e, n) {
              if ("object" != typeof e || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var t = r.call(e, n || "default");
                if ("object" != typeof t) return t;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === n ? String : Number)(e);
            })(o, "string"))
              ? a
              : String(a)),
            t
          );
      }
      var o, a;
    }
    function r(e, r, t) {
      return (
        r && n(e.prototype, r),
        t && n(e, t),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function t(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        for (var t in r) e[t] = r[t];
      }
      return e;
    }
    function o(e) {
      var n = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++n < r; ) {
        var t = e[n];
        this.set(t[0], t[1]);
      }
    }
    function a(e) {
      var n = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++n < r; ) {
        var t = e[n];
        this.set(t[0], t[1]);
      }
    }
    function i(e) {
      var n = -1,
        r = null == e ? 0 : e.length;
      for (this.clear(); ++n < r; ) {
        var t = e[n];
        this.set(t[0], t[1]);
      }
    }
    function l(e) {
      var n = (this.__data__ = new en(e));
      this.size = n.size;
    }
    var c = (function Xt(e, n) {
        function r(r, o, a) {
          if ("undefined" != typeof document) {
            "number" == typeof (a = t({}, n, a)).expires &&
              (a.expires = new Date(Date.now() + 864e5 * a.expires)),
              a.expires && (a.expires = a.expires.toUTCString()),
              (r = encodeURIComponent(r)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var i = "";
            for (var l in a)
              a[l] &&
                ((i += "; " + l),
                !0 !== a[l] && (i += "=" + a[l].split(";")[0]));
            return (document.cookie = r + "=" + e.write(o, r) + i);
          }
        }
        return Object.create(
          {
            set: r,
            get: function (n) {
              if ("undefined" != typeof document && (!arguments.length || n)) {
                for (
                  var r = document.cookie ? document.cookie.split("; ") : [],
                    t = {},
                    o = 0;
                  o < r.length;
                  o++
                ) {
                  var a = r[o].split("="),
                    i = a.slice(1).join("=");
                  try {
                    var l = decodeURIComponent(a[0]);
                    if (((t[l] = e.read(i, l)), n === l)) break;
                  } catch (n) {}
                }
                return n ? t[n] : t;
              }
            },
            remove: function (e, n) {
              r(e, "", t({}, n, { expires: -1 }));
            },
            withAttributes: function (e) {
              return Xt(this.converter, t({}, this.attributes, e));
            },
            withConverter: function (e) {
              return Xt(t({}, this.converter, e), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(n) },
            converter: { value: Object.freeze(e) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      ),
      u = {
        cookieLawCountryCode: [
          "at",
          "be",
          "bg",
          "cz",
          "dk",
          "ee",
          "fi",
          "fr",
          "de",
          "hu",
          "ie",
          "it",
          "lv",
          "lt",
          "lu",
          "mt",
          "nl",
          "pl",
          "pt",
          "sk",
          "si",
          "es",
          "se",
          "gb",
          "gr",
          "us",
        ],
        clearCookieList: [
          { name: "Hm_lpvt_cb214225e5b6ca1c9dc875febb7d4232" },
          { name: "Hm_lvt_cb214225e5b6ca1c9dc875febb7d4232" },
          { name: "MgidSensorHref" },
          { name: "MgidSensorNVis" },
          { name: "__hssc" },
          { name: "__hssrc" },
          { name: "__hstc" },
          { name: "_dc_gtm_UA-43055594-1" },
          { name: "_ga" },
          { name: "_gat" },
          { name: "_gat_gtag_UA_43055594_1" },
          { name: "_gcl_au" },
          { name: "_gid" },
          { name: "_jzqa" },
          { name: "_jzqb" },
          { name: "_jzqc" },
          { name: "_jzqckmp" },
          { name: "_jzqx" },
          { name: "_qzja" },
          { name: "_qzjb" },
          { name: "_qzjc" },
          { name: "_qzjto" },
          { name: "ckmts" },
          { name: "__qhsrc" },
          { name: "_uetsid" },
          { name: "browsersid" },
          { name: "currency" },
          { name: "djiid" },
          { name: "hubspotutk" },
          { name: "traceid" },
          { name: "user_nick_name" },
          { name: "www_from" },
          { name: "www_lang" },
          { name: "www_user_nick_name" },
          { name: "read_cookie_tips" },
          { name: "_uab_collina" },
          { name: "_qzjto" },
          { name: "_qzjb" },
          { name: "ga_uid" },
          { name: /^_ga_/ },
          { name: /^scarab/ },
          { name: "_rdt_uuid" },
          { name: "user_avatar_url" },
          { name: "_uetvi" },
          { name: "_uetvid" },
          { name: "_fbp" },
          { name: "_gaexp" },
          { name: "_dji-session" },
          { name: "_djissid" },
          { name: "_sctr" },
          { name: "tracker_device" },
          { name: /^form_utm_/ },
        ],
      },
      s = "lang",
      g = "region",
      f = (function () {
        function n(r) {
          e(this, n), (this.conf = r);
        }
        return (
          r(
            n,
            [
              {
                key: "isLawCountry",
                value: function (e) {
                  return this.constructor.isLawCountry(e);
                },
              },
            ],
            [
              {
                key: "isLawCountry",
                value: function (e) {
                  return (
                    (e &&
                      u.cookieLawCountryCode.indexOf(e.toLowerCase()) > -1) ||
                    !1
                  );
                },
              },
              {
                key: "isAcceptCookieTerm",
                value: function () {
                  var e = c.get(g);
                  if (!this.isLawCountry(e)) return !0;
                  var n = c.get("dji_consentmanager");
                  if (!n) return "US" === e.toUpperCase();
                  try {
                    var r = JSON.parse(decodeURIComponent(n));
                    return (
                      !("US" !== e.toUpperCase() || (r && "deny" === r.opt)) ||
                      (r && "accept" == r.opt)
                    );
                  } catch (e) {}
                  return !1;
                },
              },
              {
                key: "clearUncessaryCookie",
                value: function (e) {
                  if (e && Array.isArray(e)) {
                    var n = document.domain,
                      r = "";
                    if ("localhost" !== n.toLowerCase() && "127.0.0.1" !== n) {
                      var t = n.split(".");
                      r = ".".concat(t.slice(-2).join("."));
                    }
                    var o = [];
                    document.cookie.split(";").map(function (e) {
                      o.push(e.split("=")[0].replace(/(^\s*)|(\s*&)/, ""));
                    }),
                      e.forEach(function (e) {
                        var t,
                          a = e.name,
                          i = e.domain,
                          l = function (e) {
                            c.remove(e),
                              c.remove(e, { domain: ".".concat(n) }),
                              r && c.remove(e, { domain: r }),
                              i && c.remove(e, { domain: i });
                          },
                          u =
                            ((t = a),
                            Object.prototype.toString.call(t).slice(8, -1));
                        if ("String" === u) l(a);
                        else if ("RegExp" === u)
                          for (var s in o) o[s].match(a) && l(o[s]);
                      });
                  }
                },
              },
              {
                key: "clearOfficialWebsiteRelatedCookie",
                value: function () {
                  this.isAcceptCookieTerm() ||
                    this.clearUncessaryCookie(u.clearCookieList);
                },
              },
              {
                key: "resetCCPALocaleCooke",
                value: function (e) {
                  var n = (e || {}).domain,
                    r = c.get(g),
                    t = c.get(s);
                  if (r && t && n && this.isLawCountry(r)) {
                    var o = { domain: n, path: "/" };
                    c.set(g, r, o), c.set(s, t, o);
                  }
                },
              },
              {
                key: "hideCookiePreferenceInApp",
                value: function () {
                  if (
                    window.officialCCPAScio &&
                    window.officialCCPAScio.isUserAgentAllow
                  ) {
                    var e = document.querySelector(
                      ".cc-consent-preference-li-wrapper"
                    );
                    e &&
                      window.officialCCPAScio.isUserAgentAllow() &&
                      (e.style.display = "none");
                  }
                },
              },
              {
                key: "pageAfterLoadHandler",
                value: function () {
                  this.clearOfficialWebsiteRelatedCookie(),
                    this.hideCookiePreferenceInApp();
                },
              },
            ]
          ),
          n
        );
      })(),
      p =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      d = function () {
        (this.__data__ = []), (this.size = 0);
      },
      h = function (e, n) {
        return e === n || (e != e && n != n);
      },
      y = h,
      m = function (e, n) {
        for (var r = e.length; r--; ) if (y(e[r][0], n)) return r;
        return -1;
      },
      v = m,
      b = Array.prototype.splice,
      _ = function (e) {
        var n = this.__data__,
          r = v(n, e);
        return !(
          r < 0 ||
          (r == n.length - 1 ? n.pop() : b.call(n, r, 1), --this.size, 0)
        );
      },
      x = m,
      S = function (e) {
        var n = this.__data__,
          r = x(n, e);
        return r < 0 ? void 0 : n[r][1];
      },
      w = m,
      P = m,
      C = function (e, n) {
        var r = this.__data__,
          t = P(r, e);
        return t < 0 ? (++this.size, r.push([e, n])) : (r[t][1] = n), this;
      },
      k = d,
      I = _,
      U = S,
      A = function (e) {
        return w(this.__data__, e) > -1;
      },
      R = C;
    (o.prototype.clear = k),
      (o.prototype["delete"] = I),
      (o.prototype.get = U),
      (o.prototype.has = A),
      (o.prototype.set = R);
    var D,
      E = o,
      j = E,
      T = function () {
        (this.__data__ = new j()), (this.size = 0);
      },
      L = function (e) {
        var n = this.__data__,
          r = n["delete"](e);
        return (this.size = n.size), r;
      },
      N = function (e) {
        return this.__data__.get(e);
      },
      z = function (e) {
        return this.__data__.has(e);
      },
      O = "object" == typeof p && p && p.Object === Object && p,
      M = O,
      F = "object" == typeof self && self && self.Object === Object && self,
      B = M || F || Function("return this")(),
      H = B.Symbol,
      W = H,
      K = Object.prototype,
      V = K.hasOwnProperty,
      $ = K.toString,
      q = W ? W.toStringTag : void 0,
      G = function (e) {
        var n = V.call(e, q),
          r = e[q];
        try {
          e[q] = void 0;
          var t = !0;
        } catch (e) {}
        var o = $.call(e);
        return t && (n ? (e[q] = r) : delete e[q]), o;
      },
      J = Object.prototype.toString,
      Z = G,
      Y = function (e) {
        return J.call(e);
      },
      Q = H ? H.toStringTag : void 0,
      X = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Q && Q in Object(e)
          ? Z(e)
          : Y(e);
      },
      ee = function (e) {
        var n = typeof e;
        return null != e && ("object" == n || "function" == n);
      },
      ne = X,
      re = ee,
      te = function (e) {
        if (!re(e)) return !1;
        var n = ne(e);
        return (
          "[object Function]" == n ||
          "[object GeneratorFunction]" == n ||
          "[object AsyncFunction]" == n ||
          "[object Proxy]" == n
        );
      },
      oe = B["__core-js_shared__"],
      ae = (D = /[^.]+$/.exec((oe && oe.keys && oe.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + D
        : "",
      ie = function (e) {
        return !!ae && ae in e;
      },
      le = Function.prototype.toString,
      ce = te,
      ue = ie,
      se = ee,
      ge = function (e) {
        if (null != e) {
          try {
            return le.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      },
      fe = /^\[object .+?Constructor\]$/,
      pe = Function.prototype,
      de = Object.prototype,
      he = pe.toString,
      ye = de.hasOwnProperty,
      me = RegExp(
        "^" +
          he
            .call(ye)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      ),
      ve = function (e) {
        return !(!se(e) || ue(e)) && (ce(e) ? me : fe).test(ge(e));
      },
      be = function (e, n) {
        return null == e ? void 0 : e[n];
      },
      _e = function (e, n) {
        var r = be(e, n);
        return ve(r) ? r : void 0;
      },
      xe = _e(B, "Map"),
      Se = _e(Object, "create"),
      we = Se,
      Pe = function () {
        (this.__data__ = we ? we(null) : {}), (this.size = 0);
      },
      Ce = function (e) {
        var n = this.has(e) && delete this.__data__[e];
        return (this.size -= n ? 1 : 0), n;
      },
      ke = Se,
      Ie = Object.prototype.hasOwnProperty,
      Ue = function (e) {
        var n = this.__data__;
        if (ke) {
          var r = n[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return Ie.call(n, e) ? n[e] : void 0;
      },
      Ae = Se,
      Re = Object.prototype.hasOwnProperty,
      De = Se,
      Ee = Pe,
      je = Ce,
      Te = Ue,
      Le = function (e) {
        var n = this.__data__;
        return Ae ? void 0 !== n[e] : Re.call(n, e);
      },
      Ne = function (e, n) {
        var r = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (r[e] = De && void 0 === n ? "__lodash_hash_undefined__" : n),
          this
        );
      };
    (a.prototype.clear = Ee),
      (a.prototype["delete"] = je),
      (a.prototype.get = Te),
      (a.prototype.has = Le),
      (a.prototype.set = Ne);
    var ze = a,
      Oe = E,
      Me = xe,
      Fe = function (e) {
        var n = typeof e;
        return "string" == n || "number" == n || "symbol" == n || "boolean" == n
          ? "__proto__" !== e
          : null === e;
      },
      Be = function (e, n) {
        var r = e.__data__;
        return Fe(n) ? r["string" == typeof n ? "string" : "hash"] : r.map;
      },
      He = Be,
      We = Be,
      Ke = Be,
      Ve = Be,
      $e = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new ze(),
            map: new (Me || Oe)(),
            string: new ze(),
          });
      },
      qe = function (e) {
        var n = He(this, e)["delete"](e);
        return (this.size -= n ? 1 : 0), n;
      },
      Ge = function (e) {
        return We(this, e).get(e);
      },
      Je = function (e) {
        return Ke(this, e).has(e);
      },
      Ze = function (e, n) {
        var r = Ve(this, e),
          t = r.size;
        return r.set(e, n), (this.size += r.size == t ? 0 : 1), this;
      };
    (i.prototype.clear = $e),
      (i.prototype["delete"] = qe),
      (i.prototype.get = Ge),
      (i.prototype.has = Je),
      (i.prototype.set = Ze);
    var Ye = E,
      Qe = xe,
      Xe = i,
      en = E,
      nn = T,
      rn = L,
      tn = N,
      on = z,
      an = function (e, n) {
        var r = this.__data__;
        if (r instanceof Ye) {
          var t = r.__data__;
          if (!Qe || t.length < 199)
            return t.push([e, n]), (this.size = ++r.size), this;
          r = this.__data__ = new Xe(t);
        }
        return r.set(e, n), (this.size = r.size), this;
      };
    (l.prototype.clear = nn),
      (l.prototype["delete"] = rn),
      (l.prototype.get = tn),
      (l.prototype.has = on),
      (l.prototype.set = an);
    var ln = l,
      cn = _e,
      un = (function () {
        try {
          var e = cn(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })(),
      sn = un,
      gn = function (e, n, r) {
        "__proto__" == n && sn
          ? sn(e, n, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (e[n] = r);
      },
      fn = gn,
      pn = h,
      dn = function (e, n, r) {
        ((void 0 !== r && !pn(e[n], r)) || (void 0 === r && !(n in e))) &&
          fn(e, n, r);
      },
      hn = function (e) {
        return function (n, r, t) {
          for (var o = -1, a = Object(n), i = t(n), l = i.length; l--; ) {
            var c = i[e ? l : ++o];
            if (!1 === r(a[c], c, a)) break;
          }
          return n;
        };
      },
      yn = hn(),
      mn = { exports: {} };
    !(function (e, n) {
      var r = B,
        t = n && !n.nodeType && n,
        o = t && e && !e.nodeType && e,
        a = o && o.exports === t ? r.Buffer : void 0,
        i = a ? a.allocUnsafe : void 0;
      e.exports = function (e, n) {
        if (n) return e.slice();
        var r = e.length,
          t = i ? i(r) : new e.constructor(r);
        return e.copy(t), t;
      };
    })(mn, mn.exports);
    var vn = B.Uint8Array,
      bn = function (e) {
        var n = new e.constructor(e.byteLength);
        return new vn(n).set(new vn(e)), n;
      },
      _n = function (e, n) {
        var r = n ? bn(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      },
      xn = function (e, n) {
        var r = -1,
          t = e.length;
        for (n || (n = Array(t)); ++r < t; ) n[r] = e[r];
        return n;
      },
      Sn = ee,
      wn = Object.create,
      Pn = (function () {
        function e() {}
        return function (n) {
          if (!Sn(n)) return {};
          if (wn) return wn(n);
          e.prototype = n;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })(),
      Cn = (function (e, n) {
        return function (r) {
          return e(n(r));
        };
      })(Object.getPrototypeOf, Object),
      kn = Object.prototype,
      In = function (e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || kn);
      },
      Un = Pn,
      An = Cn,
      Rn = In,
      Dn = function (e) {
        return "function" != typeof e.constructor || Rn(e) ? {} : Un(An(e));
      },
      En = function (e) {
        return null != e && "object" == typeof e;
      },
      jn = X,
      Tn = En,
      Ln = function (e) {
        return Tn(e) && "[object Arguments]" == jn(e);
      },
      Nn = En,
      zn = Object.prototype,
      On = zn.hasOwnProperty,
      Mn = zn.propertyIsEnumerable,
      Fn = Ln(
        (function () {
          return arguments;
        })()
      )
        ? Ln
        : function (e) {
            return Nn(e) && On.call(e, "callee") && !Mn.call(e, "callee");
          },
      Bn = Fn,
      Hn = Array.isArray,
      Wn = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      },
      Kn = te,
      Vn = Wn,
      $n = function (e) {
        return null != e && Vn(e.length) && !Kn(e);
      },
      qn = $n,
      Gn = En,
      Jn = function (e) {
        return Gn(e) && qn(e);
      },
      Zn = { exports: {} },
      Yn = function () {
        return !1;
      };
    !(function (e, n) {
      var r = B,
        t = Yn,
        o = n && !n.nodeType && n,
        a = o && e && !e.nodeType && e,
        i = a && a.exports === o ? r.Buffer : void 0,
        l = (i ? i.isBuffer : void 0) || t;
      e.exports = l;
    })(Zn, Zn.exports);
    var Qn = X,
      Xn = Cn,
      er = En,
      nr = Function.prototype,
      rr = Object.prototype,
      tr = nr.toString,
      or = rr.hasOwnProperty,
      ar = tr.call(Object),
      ir = function (e) {
        if (!er(e) || "[object Object]" != Qn(e)) return !1;
        var n = Xn(e);
        if (null === n) return !0;
        var r = or.call(n, "constructor") && n.constructor;
        return "function" == typeof r && r instanceof r && tr.call(r) == ar;
      },
      lr = X,
      cr = Wn,
      ur = En,
      sr = {};
    (sr["[object Float32Array]"] =
      sr["[object Float64Array]"] =
      sr["[object Int8Array]"] =
      sr["[object Int16Array]"] =
      sr["[object Int32Array]"] =
      sr["[object Uint8Array]"] =
      sr["[object Uint8ClampedArray]"] =
      sr["[object Uint16Array]"] =
      sr["[object Uint32Array]"] =
        !0),
      (sr["[object Arguments]"] =
        sr["[object Array]"] =
        sr["[object ArrayBuffer]"] =
        sr["[object Boolean]"] =
        sr["[object DataView]"] =
        sr["[object Date]"] =
        sr["[object Error]"] =
        sr["[object Function]"] =
        sr["[object Map]"] =
        sr["[object Number]"] =
        sr["[object Object]"] =
        sr["[object RegExp]"] =
        sr["[object Set]"] =
        sr["[object String]"] =
        sr["[object WeakMap]"] =
          !1);
    var gr = function (e) {
        return ur(e) && cr(e.length) && !!sr[lr(e)];
      },
      fr = function (e) {
        return function (n) {
          return e(n);
        };
      },
      pr = { exports: {} };
    !(function (e, n) {
      var r = O,
        t = n && !n.nodeType && n,
        o = t && e && !e.nodeType && e,
        a = o && o.exports === t && r.process,
        i = (function () {
          try {
            var e = o && o.require && o.require("util").types;
            return e || (a && a.binding && a.binding("util"));
          } catch (e) {}
        })();
      e.exports = i;
    })(pr, pr.exports);
    var dr = gr,
      hr = fr,
      yr = pr.exports,
      mr = yr && yr.isTypedArray,
      vr = mr ? hr(mr) : dr,
      br = function (e, n) {
        if (
          ("constructor" !== n || "function" != typeof e[n]) &&
          "__proto__" != n
        )
          return e[n];
      },
      _r = gn,
      xr = h,
      Sr = Object.prototype.hasOwnProperty,
      wr = function (e, n, r) {
        var t = e[n];
        (Sr.call(e, n) && xr(t, r) && (void 0 !== r || n in e)) || _r(e, n, r);
      },
      Pr = gn,
      Cr = function (e, n, r, t) {
        var o = !r;
        r || (r = {});
        for (var a = -1, i = n.length; ++a < i; ) {
          var l = n[a],
            c = t ? t(r[l], e[l], l, r, e) : void 0;
          void 0 === c && (c = e[l]), o ? Pr(r, l, c) : wr(r, l, c);
        }
        return r;
      },
      kr = function (e, n) {
        for (var r = -1, t = Array(e); ++r < e; ) t[r] = n(r);
        return t;
      },
      Ir = /^(?:0|[1-9]\d*)$/,
      Ur = function (e, n) {
        var r = typeof e;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && Ir.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
        );
      },
      Ar = kr,
      Rr = Bn,
      Dr = Hn,
      Er = Zn.exports,
      jr = Ur,
      Tr = vr,
      Lr = Object.prototype.hasOwnProperty,
      Nr = function (e, n) {
        var r = Dr(e),
          t = !r && Rr(e),
          o = !r && !t && Er(e),
          a = !r && !t && !o && Tr(e),
          i = r || t || o || a,
          l = i ? Ar(e.length, String) : [],
          c = l.length;
        for (var u in e)
          (!n && !Lr.call(e, u)) ||
            (i &&
              ("length" == u ||
                (o && ("offset" == u || "parent" == u)) ||
                (a &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                jr(u, c))) ||
            l.push(u);
        return l;
      },
      zr = ee,
      Or = In,
      Mr = function (e) {
        var n = [];
        if (null != e) for (var r in Object(e)) n.push(r);
        return n;
      },
      Fr = Object.prototype.hasOwnProperty,
      Br = Nr,
      Hr = function (e) {
        if (!zr(e)) return Mr(e);
        var n = Or(e),
          r = [];
        for (var t in e)
          ("constructor" != t || (!n && Fr.call(e, t))) && r.push(t);
        return r;
      },
      Wr = $n,
      Kr = function (e) {
        return Wr(e) ? Br(e, !0) : Hr(e);
      },
      Vr = Cr,
      $r = Kr,
      qr = dn,
      Gr = mn.exports,
      Jr = _n,
      Zr = xn,
      Yr = Dn,
      Qr = Bn,
      Xr = Hn,
      et = Jn,
      nt = Zn.exports,
      rt = te,
      tt = ee,
      ot = ir,
      at = vr,
      it = br,
      lt = function (e) {
        return Vr(e, $r(e));
      },
      ct = ln,
      ut = dn,
      st = yn,
      gt = function (e, n, r, t, o, a, i) {
        var l = it(e, r),
          c = it(n, r),
          u = i.get(c);
        if (u) qr(e, r, u);
        else {
          var s = a ? a(l, c, r + "", e, n, i) : void 0,
            g = void 0 === s;
          if (g) {
            var f = Xr(c),
              p = !f && nt(c),
              d = !f && !p && at(c);
            (s = c),
              f || p || d
                ? Xr(l)
                  ? (s = l)
                  : et(l)
                  ? (s = Zr(l))
                  : p
                  ? ((g = !1), (s = Gr(c, !0)))
                  : d
                  ? ((g = !1), (s = Jr(c, !0)))
                  : (s = [])
                : ot(c) || Qr(c)
                ? ((s = l),
                  Qr(l) ? (s = lt(l)) : (tt(l) && !rt(l)) || (s = Yr(c)))
                : (g = !1);
          }
          g && (i.set(c, s), o(s, c, t, a, i), i["delete"](c)), qr(e, r, s);
        }
      },
      ft = ee,
      pt = Kr,
      dt = br,
      ht = function eo(e, n, r, t, o) {
        e !== n &&
          st(
            n,
            function (a, i) {
              if ((o || (o = new ct()), ft(a))) gt(e, n, i, r, eo, t, o);
              else {
                var l = t ? t(dt(e, i), a, i + "", e, n, o) : void 0;
                void 0 === l && (l = a), ut(e, i, l);
              }
            },
            pt
          );
      },
      yt = function (e) {
        return e;
      },
      mt = function (e, n, r) {
        switch (r.length) {
          case 0:
            return e.call(n);
          case 1:
            return e.call(n, r[0]);
          case 2:
            return e.call(n, r[0], r[1]);
          case 3:
            return e.call(n, r[0], r[1], r[2]);
        }
        return e.apply(n, r);
      },
      vt = Math.max,
      bt = function (e, n, r) {
        return (
          (n = vt(void 0 === n ? e.length - 1 : n, 0)),
          function () {
            for (
              var t = arguments, o = -1, a = vt(t.length - n, 0), i = Array(a);
              ++o < a;

            )
              i[o] = t[n + o];
            o = -1;
            for (var l = Array(n + 1); ++o < n; ) l[o] = t[o];
            return (l[n] = r(i)), mt(e, this, l);
          }
        );
      },
      _t = function (e) {
        return function () {
          return e;
        };
      },
      xt = un,
      St = xt
        ? function (e, n) {
            return xt(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: _t(n),
              writable: !0,
            });
          }
        : yt,
      wt = Date.now,
      Pt = function (e) {
        var n = 0,
          r = 0;
        return function () {
          var t = wt(),
            o = 16 - (t - r);
          if (((r = t), o > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return e.apply(void 0, arguments);
        };
      },
      Ct = Pt(St),
      kt = yt,
      It = bt,
      Ut = Ct,
      At = h,
      Rt = $n,
      Dt = Ur,
      Et = ee,
      jt = function (e, n, r) {
        if (!Et(r)) return !1;
        var t = typeof n;
        return (
          !!("number" == t
            ? Rt(r) && Dt(n, r.length)
            : "string" == t && n in r) && At(r[n], e)
        );
      },
      Tt = function (e, n) {
        return Ut(It(e, n, kt), e + "");
      },
      Lt = jt,
      Nt = function (e) {
        return Tt(function (n, r) {
          var t = -1,
            o = r.length,
            a = o > 1 ? r[o - 1] : void 0,
            i = o > 2 ? r[2] : void 0;
          for (
            a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0,
              i && Lt(r[0], r[1], i) && ((a = o < 3 ? void 0 : a), (o = 1)),
              n = Object(n);
            ++t < o;

          ) {
            var l = r[t];
            l && e(n, l, t, a);
          }
          return n;
        });
      },
      zt = ht,
      Ot = Nt(function (e, n, r) {
        zt(e, n, r);
      }),
      Mt = {
        localeDescMap: {},
        supportCountryMap: {
          AE: { en: "ae", ar: "ae-ar" },
          AF: { af: "af" },
          AL: { sq: "al" },
          AR: { es: "ar" },
          AT: { de: "at" },
          AU: { en: "au" },
          BE: { en: "be", be: "be-be", nl: "be-nl", fr: "be-fr" },
          BG: { en: "bg", bg: "bg-bg" },
          BH: { ar: "bh" },
          BO: { es: "bo" },
          BR: { "pt-BR": "br" },
          BZ: { en: "bz" },
          CA: { en: "ca", fr: "ca-fr" },
          CH: { fr: "ch-fr", de: "ch-de", it: "ch-it", rm: "ch-rm", en: "ch" },
          CL: { es: "cl" },
          CN: { "zh-CN": "cn" },
          CO: { es: "co" },
          CR: { es: "cr" },
          CY: { cy: "cy" },
          CZ: { en: "cz", cs: "cz-cs" },
          DE: { de: "de" },
          DK: { en: "dk", da: "dk-da" },
          DO: { es: "do" },
          DZ: { ar: "dz" },
          EC: { es: "ec" },
          EE: { en: "ee" },
          EG: { ar: "eg" },
          ES: { es: "es", ca: "es-ca" },
          ET: { et: "et" },
          FI: { en: "fi", fi: "fi-fi", sv: "fi-sv" },
          FO: { fo: "fo" },
          FR: { fr: "fr" },
          GA: { ga: "ga" },
          GB: { en: "uk" },
          GD: { gd: "gd" },
          GR: { en: "gr", el: "gr-el" },
          GT: { es: "gt" },
          HK: { "zh-TW": "hk", en: "hk-en" },
          HN: { es: "hn" },
          HR: { en: "hr", hr: "hr-hr" },
          HU: { hu: "hu-hu", en: "hu" },
          ID: { en: "id", id: "id-id" },
          IE: { en: "ie" },
          IL: { he: "il" },
          IN: { hi: "in" },
          IQ: { ar: "iq" },
          IR: { fa: "ir" },
          IS: { is: "is" },
          IT: { it: "it" },
          JM: { en: "jm" },
          JO: { ar: "jo" },
          JP: { ja: "jp" },
          KP: { ko: "kp" },
          KR: { ko: "kr" },
          KW: { ar: "kw" },
          LB: { ar: "lb" },
          LI: { de: "li" },
          LT: { lt: "lt-lt", en: "lt" },
          LU: { fr: "lu", de: "lu-de" },
          LV: { lv: "lv-lv", en: "lv" },
          LY: { ar: "ly" },
          MA: { ar: "ma" },
          MC: { fr: "mc" },
          MD: { ro: "md-ro", ru: "md-ru" },
          MK: { mk: "mk" },
          ML: { ml: "ml" },
          MO: { "zh-TW": "mo" },
          MS: { ms: "ms" },
          MT: { mt: "mt-mt", en: "mt" },
          MX: { es: "mx" },
          NI: { es: "ni" },
          NL: { nl: "nl-nl", en: "nl" },
          NO: { no: "no-no", nb: "no-nb", nn: "no-nn", en: "no" },
          NZ: { en: "nz" },
          OM: { ar: "om" },
          OR: { en: "global" },
          PA: { pa: "pa", es: "pa-es" },
          PE: { es: "pe" },
          PK: { ur: "pk" },
          PL: { pl: "pl-pl", en: "pl" },
          PR: { es: "pr-es", en: "pr" },
          PT: { pt: "pt-pt", en: "pt" },
          PV: { eu: "pv" },
          PY: { es: "py" },
          QA: { ar: "qa" },
          RO: { ro: "ro" },
          RU: { ru: "ru" },
          SA: { ar: "sa" },
          SB: { sb: "sb" },
          SE: { en: "se" },
          SG: { en: "sg", "zh-TW": "sg-zh" },
          SI: { en: "si" },
          SK: { sk: "sk-sk", en: "sk" },
          SL: { sl: "sl" },
          SR: { sr: "sr" },
          SV: { es: "sv-es", sv: "sv" },
          SY: { ar: "sy" },
          TH: { th: "th" },
          TN: { ar: "tn-ar", tn: "tn" },
          TR: { tr: "tr" },
          TT: { en: "tt" },
          TW: { "zh-TW": "tw" },
          UA: { ua: "ua" },
          US: { en: "" },
          UY: { es: "uy" },
          VE: { es: "ve-es", ve: "ve" },
          VN: { vi: "vn" },
          YE: { ar: "ye" },
          ZA: { en: "za-en", ts: "za-ts", xh: "za-xh", zu: "za-zu" },
        },
        aliasMap: {
          en: "",
          "zh-CN": "cn",
          "zh-TW": "zh-tw",
          ja: "jp",
          ko: "kr",
          "pt-BR": "pt-br",
        },
        countryCollection: [
          {
            locale: "ar",
            region: "AE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ae-ar",
          },
          {
            locale: "en",
            region: "AE",
            publish: !0,
            primary: !0,
            onSale: !1,
            urlPrefix: "ae",
          },
          {
            locale: "af",
            region: "AF",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "af",
          },
          {
            locale: "sq",
            region: "AL",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "al",
          },
          {
            locale: "es",
            region: "AR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ar",
          },
          {
            locale: "de",
            region: "AT",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "at",
          },
          {
            locale: "en",
            region: "AU",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "au",
          },
          {
            locale: "be",
            region: "BE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "be-be",
          },
          {
            locale: "nl",
            region: "BE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "be-nl",
          },
          {
            locale: "fr",
            region: "BE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "be-fr",
          },
          {
            locale: "en",
            region: "BE",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "be",
          },
          {
            locale: "bg",
            region: "BG",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "bg-bg",
          },
          {
            locale: "en",
            region: "BG",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "bg",
          },
          {
            locale: "ar",
            region: "BH",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "bh",
          },
          {
            locale: "es",
            region: "BO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "bo",
          },
          {
            locale: "pt-BR",
            region: "BR",
            publish: !0,
            primary: !0,
            onSale: !1,
            urlPrefix: "br",
          },
          {
            locale: "en",
            region: "BZ",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "bz",
          },
          {
            locale: "en",
            region: "CA",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "ca",
          },
          {
            locale: "fr",
            region: "CA",
            publish: !0,
            primary: !1,
            onSale: !0,
            urlPrefix: "ca-fr",
          },
          {
            locale: "fr",
            region: "CH",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ch-fr",
          },
          {
            locale: "de",
            region: "CH",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ch-de",
          },
          {
            locale: "it",
            region: "CH",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ch-it",
          },
          {
            locale: "rm",
            region: "CH",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ch-rm",
          },
          {
            locale: "en",
            region: "CH",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "ch",
          },
          {
            locale: "es",
            region: "CL",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "cl",
          },
          {
            locale: "zh-CN",
            region: "CN",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "cn",
          },
          {
            locale: "es",
            region: "CO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "co",
          },
          {
            locale: "es",
            region: "CR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "cr",
          },
          {
            locale: "cy",
            region: "CY",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "cy",
          },
          {
            locale: "cs",
            region: "CZ",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "cz-cs",
          },
          {
            locale: "en",
            region: "CZ",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "cz",
          },
          {
            locale: "de",
            region: "DE",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "de",
          },
          {
            locale: "da",
            region: "DK",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "dk-da",
          },
          {
            locale: "en",
            region: "DK",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "dk",
          },
          {
            locale: "es",
            region: "DO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "do",
          },
          {
            locale: "ar",
            region: "DZ",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "dz",
          },
          {
            locale: "es",
            region: "EC",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ec",
          },
          {
            locale: "en",
            region: "EE",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "ee",
          },
          {
            locale: "ar",
            region: "EG",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "eg",
          },
          {
            locale: "ca",
            region: "ES",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "es-ca",
          },
          {
            locale: "es",
            region: "ES",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "es",
          },
          {
            locale: "et",
            region: "ET",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "et",
          },
          {
            locale: "fi",
            region: "FI",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "fi-fi",
          },
          {
            locale: "sv",
            region: "FI",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "fi-sv",
          },
          {
            locale: "en",
            region: "FI",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "fi",
          },
          {
            locale: "fo",
            region: "FO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "fo",
          },
          {
            locale: "fr",
            region: "FR",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "fr",
          },
          {
            locale: "ga",
            region: "GA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ga",
          },
          {
            locale: "en",
            region: "GB",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "uk",
          },
          {
            locale: "gd",
            region: "GD",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "gd",
          },
          {
            locale: "el",
            region: "GR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "gr-el",
          },
          {
            locale: "en",
            region: "GR",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "gr",
          },
          {
            locale: "es",
            region: "GT",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "gt",
          },
          {
            locale: "zh-TW",
            region: "HK",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "hk",
          },
          {
            locale: "en",
            region: "HK",
            publish: !0,
            primary: !1,
            onSale: !0,
            urlPrefix: "hk-en",
          },
          {
            locale: "es",
            region: "HN",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "hn",
          },
          {
            locale: "hr",
            region: "HR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "hr-hr",
          },
          {
            locale: "en",
            region: "HR",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "hr",
          },
          {
            locale: "hu",
            region: "HU",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "hu-hu",
          },
          {
            locale: "en",
            region: "HU",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "hu",
          },
          {
            locale: "id",
            region: "ID",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "id-id",
          },
          {
            locale: "en",
            region: "ID",
            publish: !0,
            primary: !0,
            onSale: !1,
            urlPrefix: "id",
          },
          {
            locale: "en",
            region: "IE",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "ie",
          },
          {
            locale: "he",
            region: "IL",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "il",
          },
          {
            locale: "hi",
            region: "IN",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "in",
          },
          {
            locale: "ar",
            region: "IQ",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "iq",
          },
          {
            locale: "fa",
            region: "IR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ir",
          },
          {
            locale: "is",
            region: "IS",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "is",
          },
          {
            locale: "it",
            region: "IT",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "it",
          },
          {
            locale: "en",
            region: "JM",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "jm",
          },
          {
            locale: "ar",
            region: "JO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "jo",
          },
          {
            locale: "ja",
            region: "JP",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "jp",
          },
          {
            locale: "ko",
            region: "KP",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "kp",
          },
          {
            locale: "ko",
            region: "KR",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "kr",
          },
          {
            locale: "ar",
            region: "KW",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "kw",
          },
          {
            locale: "ar",
            region: "LB",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "lb",
          },
          {
            locale: "de",
            region: "LI",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "li",
          },
          {
            locale: "lt",
            region: "LT",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "lt-lt",
          },
          {
            locale: "en",
            region: "LT",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "lt",
          },
          {
            locale: "fr",
            region: "LU",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "lu",
          },
          {
            locale: "de",
            region: "LU",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "lu-de",
          },
          {
            locale: "lv",
            region: "LV",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "lv-lv",
          },
          {
            locale: "en",
            region: "LV",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "lv",
          },
          {
            locale: "ar",
            region: "LY",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ly",
          },
          {
            locale: "ar",
            region: "MA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ma",
          },
          {
            locale: "fr",
            region: "MC",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "mc",
          },
          {
            locale: "ro",
            region: "MD",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "md-ro",
          },
          {
            locale: "ru",
            region: "MD",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "md-ru",
          },
          {
            locale: "mk",
            region: "MK",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "mk",
          },
          {
            locale: "ml",
            region: "ML",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ml",
          },
          {
            locale: "zh-TW",
            region: "MO",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "mo",
          },
          {
            locale: "ms",
            region: "MS",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ms",
          },
          {
            locale: "mt",
            region: "MT",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "mt-mt",
          },
          {
            locale: "en",
            region: "MT",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "mt",
          },
          {
            locale: "es",
            region: "MX",
            publish: !0,
            primary: !0,
            onSale: !1,
            urlPrefix: "mx",
          },
          {
            locale: "es",
            region: "NI",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ni",
          },
          {
            locale: "nl",
            region: "NL",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "nl-nl",
          },
          {
            locale: "en",
            region: "NL",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "nl",
          },
          {
            locale: "no",
            region: "NO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "no-no",
          },
          {
            locale: "nb",
            region: "NO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "no-nb",
          },
          {
            locale: "nn",
            region: "NO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "no-nn",
          },
          {
            locale: "en",
            region: "NO",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "no",
          },
          {
            locale: "en",
            region: "NZ",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "nz",
          },
          {
            locale: "ar",
            region: "OM",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "om",
          },
          {
            locale: "en",
            region: "OR",
            publish: !0,
            primary: !0,
            onSale: !1,
            urlPrefix: "global",
          },
          {
            locale: "pa",
            region: "PA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pa",
          },
          {
            locale: "es",
            region: "PA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pa-es",
          },
          {
            locale: "es",
            region: "PE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pe",
          },
          {
            locale: "ur",
            region: "PK",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pk",
          },
          {
            locale: "pl",
            region: "PL",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pl-pl",
          },
          {
            locale: "en",
            region: "PL",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "pl",
          },
          {
            locale: "es",
            region: "PR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pr-es",
          },
          {
            locale: "en",
            region: "PR",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "pr",
          },
          {
            locale: "pt",
            region: "PT",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pt-pt",
          },
          {
            locale: "en",
            region: "PT",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "pt",
          },
          {
            locale: "eu",
            region: "PV",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "pv",
          },
          {
            locale: "es",
            region: "PY",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "py",
          },
          {
            locale: "ar",
            region: "QA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "qa",
          },
          {
            locale: "ro",
            region: "RO",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ro",
          },
          {
            locale: "ru",
            region: "RU",
            publish: !0,
            primary: !0,
            onSale: !1,
            urlPrefix: "ru",
          },
          {
            locale: "ar",
            region: "SA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sa",
          },
          {
            locale: "sb",
            region: "SB",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sb",
          },
          {
            locale: "en",
            region: "SE",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "se",
          },
          {
            locale: "zh-TW",
            region: "SG",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sg-zh",
          },
          {
            locale: "en",
            region: "SG",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "sg",
          },
          {
            locale: "en",
            region: "SI",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "si",
          },
          {
            locale: "sk",
            region: "SK",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sk-sk",
          },
          {
            locale: "en",
            region: "SK",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "sk",
          },
          {
            locale: "sl",
            region: "SL",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sl",
          },
          {
            locale: "sr",
            region: "SR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sr",
          },
          {
            locale: "es",
            region: "SV",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sv-es",
          },
          {
            locale: "sv",
            region: "SV",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sv",
          },
          {
            locale: "ar",
            region: "SY",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "sy",
          },
          {
            locale: "th",
            region: "TH",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "th",
          },
          {
            locale: "ar",
            region: "TN",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "tn-ar",
          },
          {
            locale: "tn",
            region: "TN",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "tn",
          },
          {
            locale: "tr",
            region: "TR",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "tr",
          },
          {
            locale: "en",
            region: "TT",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "tt",
          },
          {
            locale: "zh-TW",
            region: "TW",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "tw",
          },
          {
            locale: "ua",
            region: "UA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ua",
          },
          {
            locale: "en",
            region: "US",
            publish: !0,
            primary: !0,
            onSale: !0,
            urlPrefix: "",
          },
          {
            locale: "es",
            region: "UY",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "uy",
          },
          {
            locale: "es",
            region: "VE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ve-es",
          },
          {
            locale: "ve",
            region: "VE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ve",
          },
          {
            locale: "vi",
            region: "VN",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "vn",
          },
          {
            locale: "ar",
            region: "YE",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "ye",
          },
          {
            locale: "en",
            region: "ZA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "za-en",
          },
          {
            locale: "ts",
            region: "ZA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "za-ts",
          },
          {
            locale: "xh",
            region: "ZA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "za-xh",
          },
          {
            locale: "zu",
            region: "ZA",
            publish: !1,
            primary: !1,
            onSale: !1,
            urlPrefix: "za-zu",
          },
        ],
        localeCollection: [
          {
            langName: "Afrikaans",
            locale: "af",
            defaultRegion: "AF",
            urlPrefix: "af",
          },
          {
            langName: "Arabic (U.A.E.)",
            locale: "ar",
            defaultRegion: "AE",
            urlPrefix: "ae-ar",
          },
          {
            langName: "Belarusian",
            locale: "be",
            defaultRegion: "BE",
            urlPrefix: "be-be",
          },
          {
            langName: "Bulgarian",
            locale: "bg",
            defaultRegion: "BG",
            urlPrefix: "bg-bg",
          },
          {
            langName: "Catalan",
            locale: "ca",
            defaultRegion: "ES",
            urlPrefix: "es-ca",
          },
          {
            langName: "Czech",
            locale: "cs",
            defaultRegion: "CZ",
            urlPrefix: "cz-cs",
          },
          {
            langName: "Welsh",
            locale: "cy",
            defaultRegion: "CY",
            urlPrefix: "cy",
          },
          {
            langName: "Danish",
            locale: "da",
            defaultRegion: "DK",
            urlPrefix: "dk-da",
          },
          {
            langName: "Deutsch",
            locale: "de",
            defaultRegion: "DE",
            urlPrefix: "de",
          },
          {
            langName: "Greek",
            locale: "el",
            defaultRegion: "GR",
            urlPrefix: "gr-el",
          },
          {
            langName: "English",
            locale: "en",
            defaultRegion: "US",
            urlPrefix: "",
          },
          {
            langName: "Español",
            locale: "es",
            defaultRegion: "ES",
            urlPrefix: "es",
          },
          {
            langName: "Estonian",
            locale: "et",
            defaultRegion: "ET",
            urlPrefix: "et",
          },
          {
            langName: "Basque",
            locale: "eu",
            defaultRegion: "PV",
            urlPrefix: "pv",
          },
          {
            langName: "Farsi",
            locale: "fa",
            defaultRegion: "IR",
            urlPrefix: "ir",
          },
          {
            langName: "Finnish",
            locale: "fi",
            defaultRegion: "FI",
            urlPrefix: "fi-fi",
          },
          {
            langName: "Faeroese",
            locale: "fo",
            defaultRegion: "FO",
            urlPrefix: "fo",
          },
          {
            langName: "Français",
            locale: "fr",
            defaultRegion: "FR",
            urlPrefix: "fr",
          },
          {
            langName: "Irish",
            locale: "ga",
            defaultRegion: "GA",
            urlPrefix: "ga",
          },
          {
            langName: "Gaelic (Scotland)",
            locale: "gd",
            defaultRegion: "GD",
            urlPrefix: "gd",
          },
          {
            langName: "Hebrew",
            locale: "he",
            defaultRegion: "IL",
            urlPrefix: "il",
          },
          {
            langName: "Hindi",
            locale: "hi",
            defaultRegion: "IN",
            urlPrefix: "in",
          },
          {
            langName: "Croatian",
            locale: "hr",
            defaultRegion: "HR",
            urlPrefix: "hr-hr",
          },
          {
            langName: "Hungarian",
            locale: "hu",
            defaultRegion: "HU",
            urlPrefix: "hu-hu",
          },
          {
            langName: "Indonesian",
            locale: "id",
            defaultRegion: "ID",
            urlPrefix: "id-id",
          },
          {
            langName: "Icelandic",
            locale: "is",
            defaultRegion: "IS",
            urlPrefix: "is",
          },
          {
            langName: "Italiano",
            locale: "it",
            defaultRegion: "IT",
            urlPrefix: "it",
          },
          {
            langName: "日本語",
            locale: "ja",
            defaultRegion: "JP",
            urlPrefix: "jp",
          },
          {
            langName: "한국어",
            locale: "ko",
            defaultRegion: "KR",
            urlPrefix: "kr",
          },
          {
            langName: "Lithuanian",
            locale: "lt",
            defaultRegion: "LT",
            urlPrefix: "lt-lt",
          },
          {
            langName: "Latvian",
            locale: "lv",
            defaultRegion: "LV",
            urlPrefix: "lv-lv",
          },
          {
            langName: "Macedonian (FYROM)",
            locale: "mk",
            defaultRegion: "MK",
            urlPrefix: "mk",
          },
          {
            langName: "Malayalam",
            locale: "ml",
            defaultRegion: "ML",
            urlPrefix: "ml",
          },
          {
            langName: "Malaysian",
            locale: "ms",
            defaultRegion: "MS",
            urlPrefix: "ms",
          },
          {
            langName: "Maltese",
            locale: "mt",
            defaultRegion: "MT",
            urlPrefix: "mt-mt",
          },
          {
            langName: "Norwegian (Bokmål)",
            locale: "nb",
            defaultRegion: "NO",
            urlPrefix: "no-nb",
          },
          {
            langName: "Dutch (Standard)",
            locale: "nl",
            defaultRegion: "NL",
            urlPrefix: "nl-nl",
          },
          {
            langName: "Norwegian (Nynorsk)",
            locale: "nn",
            defaultRegion: "NO",
            urlPrefix: "no-nn",
          },
          {
            langName: "Norwegian",
            locale: "no",
            defaultRegion: "NO",
            urlPrefix: "no-no",
          },
          {
            langName: "Punjabi",
            locale: "pa",
            defaultRegion: "PA",
            urlPrefix: "pa",
          },
          {
            langName: "Polish",
            locale: "pl",
            defaultRegion: "PL",
            urlPrefix: "pl-pl",
          },
          {
            langName: "Portuguese (Portugal)",
            locale: "pt",
            defaultRegion: "PT",
            urlPrefix: "pt-pt",
          },
          {
            langName: "Português (BR)",
            locale: "pt-BR",
            defaultRegion: "BR",
            urlPrefix: "pt-br",
          },
          {
            langName: "Rhaeto-Romanic",
            locale: "rm",
            defaultRegion: "CH",
            urlPrefix: "ch-rm",
          },
          {
            langName: "Romanian",
            locale: "ro",
            defaultRegion: "RO",
            urlPrefix: "ro",
          },
          {
            langName: "Pусский",
            locale: "ru",
            defaultRegion: "RU",
            urlPrefix: "ru",
          },
          {
            langName: "Sorbian",
            locale: "sb",
            defaultRegion: "SB",
            urlPrefix: "sb",
          },
          {
            langName: "Slovak",
            locale: "sk",
            defaultRegion: "SK",
            urlPrefix: "sk-sk",
          },
          {
            langName: "Slovenian",
            locale: "sl",
            defaultRegion: "SL",
            urlPrefix: "sl",
          },
          {
            langName: "Albanian",
            locale: "sq",
            defaultRegion: "AL",
            urlPrefix: "al",
          },
          {
            langName: "Serbian",
            locale: "sr",
            defaultRegion: "SR",
            urlPrefix: "sr",
          },
          {
            langName: "Swedish",
            locale: "sv",
            defaultRegion: "SV",
            urlPrefix: "sv",
          },
          {
            langName: "ภาษาไทย",
            locale: "th",
            defaultRegion: "TH",
            urlPrefix: "th",
          },
          {
            langName: "Tswana",
            locale: "tn",
            defaultRegion: "TN",
            urlPrefix: "tn",
          },
          {
            langName: "Turkish",
            locale: "tr",
            defaultRegion: "TR",
            urlPrefix: "tr",
          },
          {
            langName: "Urdu",
            locale: "ur",
            defaultRegion: "PK",
            urlPrefix: "pk",
          },
          {
            langName: "简体中文",
            locale: "zh-CN",
            defaultRegion: "CN",
            urlPrefix: "cn",
          },
          {
            langName: "繁體中文",
            locale: "zh-TW",
            defaultRegion: "HK",
            urlPrefix: "zh-tw",
          },
        ],
        countryCodeToNameMap: { gb: "uk" },
        countryNameToCodeMap: {},
        countryDescMap: {},
        langMap: {
          en: { lang: "en", country: "US", currency: "USD" },
          cn: { lang: "zh-CN", country: "CN", currency: "CNY" },
          "zh-tw": { lang: "zh-TW", country: "HK", currency: "HKD" },
          jp: { lang: "ja", country: "JP", currency: "JPY" },
          kr: { lang: "ko", country: "KR", currency: "KRW" },
          ko: { lang: "ko", country: "KR", currency: "KRW" },
          fr: { lang: "fr", country: "FR", currency: "EUR" },
          de: { lang: "de", country: "DE", currency: "EUR" },
          es: { lang: "es", country: "ES", currency: "EUR" },
          ru: { lang: "ru", country: "RU", currency: "EUR" },
          "pt-br": { lang: "pt-BR", country: "BR", currency: "BRL" },
          it: { lang: "it", country: "IT", currency: "EUR" },
        },
        subDomainSupport: {
          ag: [
            "en",
            "zh-CN",
            "ja",
            "es",
            "de",
            "fr",
            "ko",
            "it",
            "ru",
            "pt-BR",
            "zh-TW",
          ],
          enterprise: [
            "en",
            "zh-CN",
            "ja",
            "es",
            "de",
            "fr",
            "ko",
            "it",
            "ru",
            "pt-BR",
            "zh-TW",
          ],
          auto: ["en", "zh-CN"],
        },
      },
      Ft = [
        {
          continent_code: "asia pacific",
          continent: "亚太",
          countries: [
            {
              country_code: "cn",
              country: "中国大陆",
              country_english: "China",
              language_code: "zh-CN",
              language: "简体中文",
            },
            {
              country_code: "hk",
              country: "香港",
              country_english: "Hong Kong",
              language_code: "zh-TW",
              language: "繁體中文",
            },
            {
              country_code: "hk",
              country: "Hong Kong",
              country_english: "Hong Kong",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "id",
              country: "Indonesia",
              country_english: "Indonesia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "jp",
              country: "日本",
              country_english: "Japan",
              language_code: "ja",
              language: "日本語",
            },
            {
              country_code: "mo",
              country: "澳門",
              country_english: "Macau",
              language_code: "zh-TW",
              language: "繁體中文",
            },
            {
              country_code: "sg",
              country: "Singapore",
              country_english: "Singapore",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "kr",
              country: "대한민국",
              country_english: "South Korea",
              language_code: "ko",
              language: "한국어",
            },
            {
              country_code: "tw",
              country: "台灣",
              country_english: "Taiwan",
              language_code: "zh-TW",
              language: "繁體中文",
            },
            {
              country_code: "au",
              country: "Australia",
              country_english: "Australia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "nz",
              country: "New Zealand",
              country_english: "New Zealand",
              language_code: "en",
              language: "English",
            },
          ],
        },
        {
          continent_code: "europe",
          continent: "欧洲",
          countries: [
            {
              country_code: "at",
              country: "Österreich",
              country_english: "Austria",
              language_code: "de",
              language: "Deutsch",
            },
            {
              country_code: "ru",
              country: "Россия",
              country_english: "Russia",
              language_code: "ru",
              language: "Pусский",
            },
            {
              country_code: "be",
              country: "Belgium",
              country_english: "Belgium",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "bg",
              country: "Bulgaria",
              country_english: "Bulgaria",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "hr",
              country: "Croatia",
              country_english: "Croatia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "cz",
              country: "Czech Republic",
              country_english: "Czech Republic",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "dk",
              country: "Denmark",
              country_english: "Denmark",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ee",
              country: "Estonia",
              country_english: "Estonia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "fi",
              country: "Finland",
              country_english: "Finland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "fr",
              country: "France",
              country_english: "France",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "de",
              country: "Deutschland",
              country_english: "Germany",
              language_code: "de",
              language: "Deutsch",
            },
            {
              country_code: "gr",
              country: "Greece",
              country_english: "Greece",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "hu",
              country: "Hungary",
              country_english: "Hungary",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ie",
              country: "Ireland",
              country_english: "Ireland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "it",
              country: "Italia",
              country_english: "Italia",
              language_code: "it",
              language: "Italiano",
            },
            {
              country_code: "lv",
              country: "Latvia",
              country_english: "Latvia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "li",
              country: "Liechtenstein",
              country_english: "Liechtenstein",
              language_code: "de",
              language: "Deutsch",
            },
            {
              country_code: "lt",
              country: "Lithuania",
              country_english: "Lithuania",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "lu",
              country: "Luxembourg",
              country_english: "Luxembourg",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "mt",
              country: "Malta",
              country_english: "Malta",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "mc",
              country: "Monaco",
              country_english: "Monaco",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "nl",
              country: "Netherlands",
              country_english: "Netherlands",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "no",
              country: "Norway",
              country_english: "Norway",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "pl",
              country: "Poland",
              country_english: "Poland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "pt",
              country: "Portugal",
              country_english: "Portugal",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "sk",
              country: "Slovakia",
              country_english: "Slovakia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "si",
              country: "Slovenia",
              country_english: "Slovenia",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "es",
              country: "España",
              country_english: "Spain",
              language_code: "es",
              language: "Español",
            },
            {
              country_code: "se",
              country: "Sweden",
              country_english: "Sweden",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ch",
              country: "Switzerland",
              country_english: "Switzerland",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "gb",
              country: "United Kingdom",
              country_english: "United Kingdom",
              language_code: "en",
              language: "English",
            },
          ],
        },
        {
          continent_code: "middle east",
          continent: "中东",
          countries: [
            {
              country_code: "ae",
              country: "UAE",
              country_english: "UAE",
              language_code: "en",
              language: "English",
            },
          ],
        },
        {
          continent_code: "north america",
          continent: "北美洲",
          countries: [
            {
              country_code: "ca",
              country: "Canada",
              country_english: "Canada",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "ca",
              country: "Canada",
              country_english: "Canada",
              language_code: "fr",
              language: "Français",
            },
            {
              country_code: "pr",
              country: "Puerto Rico",
              country_english: "Puerto Rico",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "us",
              country: "United States",
              country_english: "United States",
              language_code: "en",
              language: "English",
            },
            {
              country_code: "mx",
              country: "México",
              country_english: "Mexico",
              language_code: "es",
              language: "Español",
            },
          ],
        },
        {
          continent_code: "south america",
          continent: "南美洲",
          countries: [
            {
              country_code: "br",
              country: "Brasil",
              country_english: "Brasil",
              language_code: "pt-BR",
              language: "Português (BR)",
            },
          ],
        },
        {
          continent_code: "international",
          continent: "international",
          countries: [
            {
              country_code: "or",
              country: "Other Regions",
              country_english: "Other Regions",
              language_code: "en",
              language: "English",
            },
          ],
        },
      ],
      Bt = "lang",
      Ht = "country",
      Wt = "region",
      Kt = "other_region_flag",
      Vt = Mt.supportCountryMap,
      $t = {},
      qt = {};
    for (var Gt in Vt) {
      var Jt = Vt[Gt],
        Zt = Object.keys(Jt);
      for (var Yt in (($t[Gt] = 1 === Zt.length ? Zt[0] : Zt), Jt))
        Jt[Yt] && (qt[Jt[Yt]] = { country: Gt, locale: Yt });
    }
    (Mt.countryMap = $t), (Mt.urlPrefixMap = qt);
    var Qt = (function () {
      function n(r) {
        for (var t in (e(this, n),
        r || (r = {}),
        (this.conf = Ot(Mt, { i18n: Mt }, r)),
        (this.cookieOptionSession = { domain: this.conf.domain, path: "/" }),
        (this.cookieOption = Ot({}, { expires: 30 }, this.cookieOptionSession)),
        this.conf.i18n.countryCodeToNameMap)) {
          var o = this.conf.i18n.countryCodeToNameMap[t];
          this.conf.i18n.countryNameToCodeMap[o] = t;
        }
      }
      return (
        r(
          n,
          [
            {
              key: "fixDefaultLang",
              value: function (e, n) {
                return (
                  Array.isArray(e)
                    ? (e = e.map(function (e) {
                        return (
                          e || (e = "en"),
                          "function" == typeof n && (e = n(e)),
                          e
                        );
                      }))
                    : ((e = e || "en"), "function" == typeof n && (e = n(e))),
                  e
                );
              },
            },
            {
              key: "getSuggestRegion",
              value: function (e) {
                if (!e) return "";
                var n = this.conf.i18n.localeCollection.find(function (n) {
                  return n.locale === e;
                });
                return (n && n.defaultRegion) || "US";
              },
            },
            {
              key: "getSuggestLocale",
              value: function (e) {
                if (!e) return "";
                e = e.toUpperCase();
                var n = this.conf.i18n.countryCollection,
                  r = n.find(function (n) {
                    return n.region === e && n.primary;
                  });
                return r ||
                  (r = n.find(function (n) {
                    return n.region === e;
                  }))
                  ? r.locale
                  : null;
              },
            },
            {
              key: "setCountry",
              value: function (e, n) {
                if (!e) return !1;
                var r = this.cookieOption;
                return (
                  n && (r = this.cookieOptionSession),
                  c.set(Wt, e.toUpperCase(), r),
                  !0
                );
              },
            },
            {
              key: "getCountry",
              value: function () {
                return c.get(Wt) || c.get(Ht);
              },
            },
            {
              key: "setLocale",
              value: function (e, n) {
                if (!e) return !1;
                var r = this.cookieOption;
                return n && (r = this.cookieOptionSession), c.set(Bt, e, r), !0;
              },
            },
            {
              key: "subSetLangInCookie",
              value: function (e) {
                var n = this.getStoreLang(e);
                this.setPairedLocalize({ country: n.country, locale: n.lang });
              },
            },
            {
              key: "setPairedLocalize",
              value: function (e) {
                var n = e.locale,
                  r = e.country,
                  t = !1;
                return (
                  r || (r = this.getSuggestRegion(n)),
                  f.isLawCountry(r) && (t = !0),
                  this.setCountry(r, t),
                  this.setLocale(n, t),
                  !0
                );
              },
            },
            {
              key: "getStoreLang",
              value: function (e) {
                var n = this.conf.i18n.langMap;
                return n[e] ? n[e] : n.en;
              },
            },
            {
              key: "getLocale",
              value: function () {
                return c.get(Bt);
              },
            },
            {
              key: "getLanguage",
              value: function (e) {
                return (
                  (e = e || this.getLocale()), this.conf.i18n.aliasMap[e] || e
                );
              },
            },
            {
              key: "getLangForUrl",
              value: function (e) {
                if (!e) return "";
                var n = this.getLanguage(e);
                return ("en" === n ? "" : n).toLowerCase();
              },
            },
            {
              key: "getLangUrlPrefix",
              value: function (e) {
                var n = "",
                  r = this.conf.i18n.localeCollection.find(function (n) {
                    return n.locale === e;
                  });
                return r && r.urlPrefix && (n = "/" + r.urlPrefix), n;
              },
            },
            {
              key: "isOtherRegion",
              value: function () {
                return this.constructor.isOtherRegion();
              },
            },
            {
              key: "setOtherRegionFlag",
              value: function () {
                c.set(Kt, 1, this.cookieOptionSession);
              },
            },
            {
              key: "resetOtherRegionFlag",
              value: function () {
                c.remove(Kt, Ot({}, this.cookieOptionSession));
              },
            },
            {
              key: "getUrlPrefix",
              value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { region: "US", locale: "en", isLocaleMode: !1 },
                  n = e.region,
                  r = e.locale,
                  t = e.isLocaleMode,
                  o = "";
                return n || r
                  ? (o = t
                      ? this.getLangUrlPrefix(r)
                      : this.getCountryUrlPrefix({ country: n, locale: r }))
                  : o;
              },
            },
            {
              key: "getCountryUrlPrefix",
              value: function (e) {
                var n = (e && e.country) || this.getCountry(),
                  r = (e && e.locale) || this.getLocale();
                if (!n) return "/";
                n = n.toUpperCase();
                var t = this.conf.i18n.supportCountryMap[n][r] || "";
                return t ? "/".concat(t) : t;
              },
            },
            {
              key: "getCountryUrlReg",
              value: function () {
                var e = this.conf.i18n.urlPrefixMap,
                  n = Object.keys(e).sort().reverse();
                return new RegExp("^/?(".concat(n.join("|"), ")\\b(?!-)"), "i");
              },
            },
            {
              key: "getLangReg",
              value: function () {
                var e = this.conf.i18n.localeCollection
                  .filter(function (e) {
                    return !!e.urlPrefix;
                  })
                  .map(function (e) {
                    return e.urlPrefix;
                  });
                return new RegExp("^/?(".concat(e.join("|"), ")\\b(?!-)"), "i");
              },
            },
            {
              key: "getLocaleByCountry",
              value: function (e, n) {
                if (!e) return "";
                e = e.toUpperCase();
                var r = this.conf.i18n.countryMap[e];
                return n && "string" == typeof r ? [r] : r;
              },
            },
            {
              key: "getDefaultLocaleByCountry",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== (arguments.length <= 0 ? void 0 : arguments[0])
                      ? arguments.length <= 0
                        ? void 0
                        : arguments[0]
                      : "US",
                  n = this.getLocaleByCountry(e);
                return Array.isArray(n) ? n[0] : n;
              },
            },
            {
              key: "resolveUrlCountry",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== (arguments.length <= 0 ? void 0 : arguments[0])
                      ? arguments.length <= 0
                        ? void 0
                        : arguments[0]
                      : "",
                  n = this.getCountryUrlReg(),
                  r = this.conf.i18n.urlPrefixMap,
                  t = e.match(n),
                  o = e.replace(n, ""),
                  a = {
                    country: "US",
                    locale: "en",
                    resolvedLink: o,
                    resolvedPath: o.split("?")[0],
                    matchBy: "region",
                    urlPrefix: "",
                  };
                if (t) {
                  var i = t[1],
                    l = r[i],
                    c = l.country,
                    u = l.locale;
                  (a.country = c), (a.locale = u), (a.urlPrefix = i);
                }
                return a;
              },
            },
            {
              key: "resolveUrl",
              value: function (e, n) {
                var r = this.resolveUrlCountry(e),
                  t = this.resolveUrlLang(e);
                return r.resolvedPath !== t.resolvedPath && "US" !== t.country
                  ? t
                  : r;
              },
            },
            {
              key: "resolveUrlLang",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== (arguments.length <= 0 ? void 0 : arguments[0])
                      ? arguments.length <= 0
                        ? void 0
                        : arguments[0]
                      : "",
                  n = this.getLangReg(),
                  r = e.match(n),
                  t = this.conf.i18n.localeCollection,
                  o = e.replace(n, ""),
                  a = {
                    locale: "en",
                    country: "US",
                    resolvedLink: o,
                    resolvedPath: o.split("?")[0],
                    matchBy: "locale",
                    urlPrefix: "",
                  };
                if (r) {
                  var i = t.find(function (e) {
                    return e.urlPrefix === r[1];
                  });
                  (a.locale = i.locale),
                    (a.country = i.defaultRegion),
                    (a.urlPrefix = i.urlPrefix);
                }
                return a;
              },
            },
            {
              key: "getCountryName",
              value: function (e) {
                return (
                  (e = e || ""), this.conf.i18n.countryDescMap[e.toLowerCase()]
                );
              },
            },
            {
              key: "getLocaleName",
              value: function (e) {
                var n = this.conf.i18n.localeCollection.find(function (n) {
                  return n.locale === e;
                });
                return n ? n.langName : "";
              },
            },
            {
              key: "validateCountryAndLocale",
              value: function (e) {
                var n = e.region,
                  r = e.locale,
                  t = e.mustPublish,
                  o = e.onSale;
                return !!this.conf.i18n.countryCollection.find(function (e) {
                  return (
                    e.region === n &&
                    e.locale === r &&
                    (!t || e.publish) &&
                    (!o || e.onSale)
                  );
                });
              },
            },
            {
              key: "validateLocale",
              value: function (e) {
                var n = e.locale,
                  r = e.domain;
                return (this.conf.i18n.subDomainSupport[r] || []).includes(n);
              },
            },
            {
              key: "getContinentCountryList",
              value: function () {
                return Ft;
              },
            },
          ],
          [
            {
              key: "isOtherRegion",
              value: function () {
                var e = c.get(Bt),
                  n = c.get(Wt) || c.get(Ht),
                  r = c.get(Kt);
                return !("en" !== e || "US" !== n || "1" !== r);
              },
            },
          ]
        ),
        n
      );
    })();
    return { CCPA: f, Localize: Qt };
  }),
  (function () {
    var e = DUI.Config.domain || ".dji.com",
      n = window.OfficialScript.Localize;
    if (((DUI.Localize = new n({ domain: e })), DUI.Localize.isOtherRegion())) {
      var r = "Other Regions",
        t = "English",
        o = $("#current-region-placeholder");
      o.length > 0 && o.html(r + " / " + t);
    }
  })(),
  (function (e, n) {
    (e.DUI = "undefined" == typeof DUI ? {} : DUI),
      n.ajaxSetup({
        beforeSend: function (e, n) {
          var r = n.url;
          r &&
            /(\.dbeta\.me)|(\.dji\.com)/i.test(r) &&
            (n.xhrFields = { withCredentials: !0 });
        },
      }),
      (DUI.API = {
        Factory: function (e, r) {
          var t = {
              api: { method: "get", url: "" },
              filter: [
                "input:text",
                "input:hidden",
                "input:password",
                "textarea",
                "select",
                "input:checkbox",
              ],
              notice: "",
              cache: "",
              security: function (e) {
                for (var n in e) e[n] = encodeURIComponent(e[n]);
                return e;
              },
              validate: function (e) {},
              source: function () {
                if (!r || !r.find) return {};
                var e = {},
                  t = {},
                  o = this.filter.map(function (e) {
                    var n = e.indexOf("input:") > -1;
                    return (
                      n && (e = e.replace("input:", "")),
                      n ? "input[type=" + e + "]" : e
                    );
                  });
                return (
                  r.find(o.join(",")).each(function (r, o) {
                    var a = n(o),
                      i = a.attr("name"),
                      l = a.val();
                    (e[i] = {
                      value: l,
                      error: a.data("error"),
                      success: a.data("success"),
                      ele: a,
                    }),
                      (t[i] = l);
                  }),
                  (e.rqs = t),
                  e
                );
              },
              complete: function (e, n) {
                if ((e && o.error(e), n.success))
                  switch (n.status) {
                    case 200:
                      o.success(n);
                      break;
                    default:
                      o.error(n.extra.msg);
                  }
                else o.error(n.extra.msg);
              },
              showMask: function () {
                return !1;
              },
              error: function (e) {},
              success: function (e) {},
            },
            o = n.extend(t, e);
          return this._build(o);
        },
        _build: function (e) {
          return {
            _doing: !1,
            submit: function (r, t) {
              if (e.cache) {
                var o = DUI.Storage.getJSON(e.cache);
                if (o) return r.call(this, o);
              }
              var a = this,
                i = e.source() || {},
                l = e.validate(i, DUI.Validate, []) || [],
                c = DUI.API._helper;
              if (
                ((t = n.isFunction(t) ? t : function () {}),
                a.notice.clear(),
                (c.Caller = a),
                (c.Option = e),
                l.length <= 0)
              ) {
                if (a._doing) return;
                a._doing = !0;
                var u = {
                  data: e.security(i.rqs ? i.rqs : i),
                  method: e.api.method,
                  url: e.api.url,
                  ajax: e.ajax,
                  option: e,
                };
                c.handlePost(u, function (o) {
                  200 == o.status && n.isFunction(r)
                    ? (e.cache &&
                        DUI.Storage.setJSON(e.cache, o, function () {}),
                      r.call(a, o))
                    : t.call(a, ((o.extra || {}).msg || {}).first || "", o),
                    (a._doing = !1);
                });
              } else
                c.completeDone(l, function (e, n) {
                  (a._doing = !1), t.call(a, n.first);
                });
              return a;
            },
            notice: {
              ele: n(e.notice),
              clear: function () {
                this.ele.length > 0 && this.ele.html("");
              },
              success: function (e, n) {
                (n = n || "#008800"),
                  this.ele.length > 0
                    ? this.ele.html(
                        '<span style="color:' + n + '">' + e + "</span>"
                      )
                    : console.log("%c" + e, "color:" + n);
              },
              error: function (e, n) {
                (n = n || "#E92B2B"),
                  this.ele.length > 0
                    ? this.ele.html(
                        '<span style="color:' + n + '">' + e + "</span>"
                      )
                    : console.log("%c" + e, "color:" + n);
              },
            },
          };
        },
        _helper: {
          _doing: !1,
          Caller: null,
          Option: null,
          Result: { success: !1, status: 400, data: [], extra: { msg: [] } },
          renderApi: function (e) {
            if ("string" != typeof e) return e;
            var n = DUI.Localize.getCountryUrlReg(),
              r = this.getAPIHost("official_api");
            return n.test(e)
              ? r + e
              : r + DUI.Localize.getCountryUrlPrefix() + e;
          },
          renderStoreApi: function (e) {
            if ("string" != typeof e) return e;
            var n = this.getAPIHost("store_api");
            return n + e;
          },
          getApi: function (e) {
            var n = DUI.Config.apiList;
            return this.renderApi(n[e]);
          },
          getStoreApi: function (e) {
            var n = DUI.Config.apiList;
            return this.renderStoreApi(n[e]);
          },
          getAPIHost: function (e, n) {
            var r = DUI.Config.env;
            "object" == typeof n && (r = n.env ? n.env : r);
            var t = DUI.Config.apiHostList[e],
              o = t[r] && t[r].host;
            return "undefined" == typeof o && (o = t.host), o;
          },
          handlePost: function (e, r) {
            var t = DUI.API._helper;
            setTimeout(function () {
              n(document).trigger("onRequest", { option: e.option });
            }, 0),
              "get" != e.method.toLowerCase() &&
                ((e.data["www-cache"] = "official"),
                e.data._csrf || (e.data._csrf = DUI.Config._csrf || "403"));
            var o = {
              url: e.url,
              data: e.data,
              dataType: "json",
              type: e.method,
              timeout: 1e4,
              headers: {
                Accept: "application/vnd.green-v1",
                Lang: DUI.Lang || "cn",
                "Access-Control-Allow-Origin":
                  "https://www.dji.com,https://www.dbeta.me",
              },
              xhrFields: { withCredentials: !0 },
              success: function (e) {
                (e = n.extend({}, t.Result, e)),
                  t.pushTextStatus(e),
                  n.each([e.data, e.extra.msg], function (r, t) {
                    (t = n.isArray(t) ? t : [t]),
                      (t = { first: t[0], list: t }),
                      0 == r ? (e.data = t) : (e.extra.msg = t);
                  }),
                  r.call(this, e),
                  t.Option.complete.call(t.Caller, null, e, r);
              },
              complete: function (o, a) {
                "timeout" == a && t.completeDone("request time out", r),
                  n(document).trigger("onComplete", {
                    option: e.option,
                    status: o.status,
                  });
              },
              statusCode: {
                302: function () {
                  t.completeDone("302 , api is moved.", r);
                },
                404: function () {
                  t.completeDone("404 , api is not found.", r);
                },
                500: function () {
                  t.completeDone("500 , server error , please try again.", r);
                },
              },
            };
            n.isPlainObject(e.ajax)
              ? n.ajax(n.extend({}, o, e.ajax))
              : n.ajax(o);
          },
          pushTextStatus: function (e) {
            var r = e.extra.msg,
              t = e.data,
              o = !1;
            if (t)
              for (var a in t)
                if ("email" === a && t[a] && t[a].length > 0)
                  for (var i = 0; i < t[a].length; i++)
                    t[a][i].indexOf("can't submit more than") !== -1 &&
                      (o = !0);
            switch ((n.isArray(r) || (e.extra.msg = r ? [r] : []), e.status)) {
              case 422:
                "undefined" != typeof r ||
                  o ||
                  e.extra.msg.push("params is invalid , please check."),
                  "undefined" == typeof r &&
                    o &&
                    e.extra.msg.push("limit_error");
                break;
              default:
                e.extra.msg.push("response status: " + e.status);
            }
          },
          completeDone: function (e, r) {
            e = n.isArray(e) ? e : [e];
            var t = { first: e[0] || "", list: e },
              o = this.Option;
            r.call(this, e, t), o.complete.call(this.Caller, t, this.Result, r);
          },
          ajaxWithCredent: function (e) {
            return "object" != typeof e
              ? null
              : ((e.xhrFields = { withCredentials: !0 }), n.ajax(e));
          },
        },
      }),
      (e.Mask = DUI.Mask =
        {
          $mask: n("body").find("#mask"),
          locked: !1,
          lock: function (e) {
            this.locked = e;
          },
          show: function (e) {
            return (
              this.$wait || (this.$wait = this.$mask.find(".wait-msg")),
              this.$wait.html(e),
              this.$mask.show().removeClass("hidden"),
              this
            );
          },
          hide: function () {
            return this.$mask.hide().addClass("hidden"), this;
          },
        }),
      n(document).on("onRequest", function (e, n) {
        var r = n.option;
        r.showMask() && Mask.show();
      }),
      n(document).on("onComplete", function (e, n) {
        var r = n.option;
        r.showMask() && !Mask.locked && Mask.hide();
      });
  })(window, jQuery),
  (function () {
    ($.fn.login = function (e) {
      var n = $(this),
        r = location.origin + n.attr("action");
      return DUI.API.Factory(
        $.extend(
          {
            api: {
              method: n.attr("method"),
              url: r.replace("http://", "https://"),
            },
            notice: n.attr("notice"),
            cache: "dji[user]",
            validate: function (e, n, r) {
              var t = e.email,
                o = e.password,
                a = ["email", "length"];
              return (
                o.value && t.value
                  ? $.each([t, o], function (e, t) {
                      n[a[e]](t.value.toLowerCase().trim()) || r.push(t.error);
                    })
                  : r.push(o.ele.data("blank")),
                r
              );
            },
          },
          e
        ),
        n
      );
    }),
      ($.fn.register = function (e) {
        var n = $(this),
          r = location.origin + n.attr("action");
        return DUI.API.Factory(
          $.extend(
            {
              api: {
                method: n.attr("method"),
                url: r.replace("http://", "https://"),
              },
              notice: n.attr("notice"),
              validate: function (e, n, r) {
                var t = e.email,
                  o = e.password,
                  a = ["email", "length"];
                return (
                  o.value && t.value
                    ? $.each([t, o], function (e, t) {
                        var o = a[e],
                          i = n[o],
                          l = t.value.toLowerCase().trim();
                        "length" == o || i(l)
                          ? "length" == o && (i(l, 6, 24) || r.push(t.error))
                          : r.push(t.error);
                      })
                    : r.push(o.ele.data("blank")),
                  r
                );
              },
            },
            e
          ),
          n
        );
      }),
      (DUI.Activity = {
        create: function (e) {
          var n = $(this.form),
            r = DUI.Config;
          return DUI.API.Factory(
            $.extend(
              {
                api: { method: n.attr("method"), url: n.attr("action") },
                security: function (e) {
                  for (var n in e) e[n] = encodeURIComponent(e[n]);
                  return (e._csrf = r._csrf), e;
                },
                complete: function () {
                  var e = $(".captcha-img");
                  e.length > 0 && e.click();
                },
              },
              e
            ),
            n
          );
        },
        generateToken: function (e) {
          return (
            DUI.Config._csrf
              ? e && e(DUI.Config._csrf)
              : DUI.API._helper
                  .ajaxWithCredent({
                    method: "get",
                    url: DUI.API._helper.getApi("csrf"),
                  })
                  .done(function (n) {
                    var r = n._csrf || "403";
                    (DUI.Config._csrf = r), e && e(r);
                  }),
            DUI.Activity
          );
        },
      }),
      (DUI.queryCarts = function (e) {
        return DUI.API.Factory({
          api: { url: DUI.API._helper.getApi("userCart"), method: "get" },
          source: function () {
            return { uuid: e, www: "v2" };
          },
          validate: function (n, r, t) {
            return e || t.push("param uuid is required."), t;
          },
        });
      }),
      (DUI.qeuryPrice = function (e) {
        return DUI.API.Factory({
          api: { url: DUI.API._helper.getApi("productPrice"), method: "get" },
          source: function () {
            $.isArray(e) && (e = e.join(","));
            var n = DUI.Localize.getCountry() || "";
            return { slugs: e, country: n };
          },
          validate: function (n, r, t) {
            return e || t.push("param slugs is required."), t;
          },
        });
      }),
      (DUI.dataReport = function (e) {
        var n = DUI.API._helper.renderApi("/api/data_report"),
          r = $.param({ scope: e[0], content: e[1], report_type: e[2] });
        return {
          submit: function () {
            DUI.API._helper
              .ajaxWithCredent({ method: "get", url: n + "?" + r })
              .done(function (e) {});
          },
        };
      });
  })(),
  (function (e) {
    (e.DUI = "undefined" == typeof DUI ? {} : DUI),
      (DUI.helper = {
        loadScripts: function (e) {
          var n = e.split(","),
            r = document;
          n.forEach(function (e) {
            r.write('<script src="' + e + '"></script>');
          });
        },
        flowStats: function () {
          window.flowStats = function (e, n) {
            (e = e.replace(/\/$/, "")),
              (e = e.replace(/(&|\?)?from=buy_now/g, ""));
            var r = e.split("#")[1];
            return (
              (e = e.split("#")[0]),
              (e += e.indexOf("?") > -1 ? "&" : "?"),
              (e += "site=brandsite"),
              e.indexOf("from=") < 0 && n && (e = e + "&from=" + n),
              r && (e = e + "#" + r),
              e
            );
          };
        },
        addQueryParamsToUrlOrPath: function (e, n) {
          const r = Object.keys(n)
            .map(function (e) {
              const r = n[e],
                t = "object" == typeof r ? JSON.stringify(r) : r;
              return encodeURIComponent(e) + "=" + encodeURIComponent(t);
            })
            .join("&");
          return e.includes("?")
            ? e.endsWith("?")
              ? e + r
              : e + "&" + r
            : e + "?" + r;
        },
        getNextUrlOnSwitch: function (e, n, r) {
          const t = this,
            o = n || "/";
          if ("undefined" == typeof window) return o;
          var a = "";
          const i = "backup_page=index",
            l = new RegExp("^(" + (e || "/") + ")"),
            c = r
              ? decodeURIComponent(t.getQueryString("previous_path") || "")
              : window.location.pathname,
            u = c.replace(l, "/").replace(/^\/\//, "/");
          if (u) {
            const s = n + u,
              g = "/" === s ? s : s.replace(/\/$/, "");
            a = g + "?" + i;
          } else a = o + "?" + i;
          return a.replace(/^\/\//, "/");
        },
        standardLinkFormat: function (e, n) {
          const r = {
            relative: "relative-path",
            absolute: "absolute-path",
            store: "store-path",
          };
          if (!e || !n) return "/";
          if ([r.relative, r.absolute].includes(e)) return n;
          if (r.store === e) {
            const t = n.replace(/^\//, "");
            var o = DUI.Localize.getCountryUrlPrefix();
            return DUI.API._helper.renderStoreApi(o + "/" + t);
          }
          return "/";
        },
        initTopicalGaDynamic: function (e) {
          if (e && "string" == typeof e) {
            var n = $("." + e),
              r = n.find(".ga-data");
            0 != r.length &&
              r.each(function (e, n) {
                var r = $(this),
                  t = r.data("ga-action") ? r.data("ga-action") : "click",
                  o = r.data("ga-category") ? r.data("ga-category") : "",
                  a = r.data("ga-label") ? r.data("ga-label") : "";
                t &&
                  o &&
                  a &&
                  r.one(t, function (e) {
                    ga("send", "event", o, t, a);
                  });
              });
          }
        },
        checkInboundLink: function (e) {
          if (!e) return !1;
          var n = !(
              e.match(/^http/gi) ||
              e.match(/www/gi) ||
              e.match(/com/gi) ||
              e.match(/^\/\//)
            ),
            r = DUI.Config.domain,
            t = new RegExp(r, "gi"),
            o = new RegExp(window.location.host, "gi"),
            a = t.test(e) && o.test(e);
          return !n && !a;
        },
        openExternalLink: function (e) {
          var n = e;
          e.match(/^(https?|ftp|file|\/\/).+$/gi) || (n = "//" + n),
            window.open(n, "_blank");
        },
        openForMinPrograme: function () {
          var e = window.navigator.userAgent;
          return e.toLowerCase().indexOf("miniprogram") !== -1;
        },
        bdTrack: function (e) {
          window._agl && window._agl.push(["track", ["success", { t: e }]]);
        },
        getQueryString: function (e) {
          var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
            r = window.location.search.substr(1).match(n),
            t = "";
          if (null != r) return (t = r[2]);
        },
        checkInView: function (e) {
          var n = e.elm,
            r = e.offset || 0,
            t = e.callback,
            o = e.threshold || 0,
            a = e.defaultInViewOnIE || !1;
          if (n || 0 !== n.length) {
            var i = !1;
            if (
              ("undefined" != typeof window &&
                (i = !!window.MSInputMethodContext && !!document.documentMode),
              i && a)
            )
              return setTimeout(function () {
                var e = {
                  inView: !0,
                  lastEntry: { isIntersecting: !0 },
                  observer: { disconnect: function () {} },
                  entries: [{ isIntersecting: !0 }],
                };
                t(e);
              }, 10);
            var l = { rootMargin: r + "px", threshold: o },
              c = function (e, n) {
                var r = e.length,
                  o = e[r - 1],
                  a = o.isIntersecting,
                  i = t({ inView: a, lastEntry: o, observer: n, entries: e });
                o.isIntersecting && !i && n.disconnect();
              },
              u = new IntersectionObserver(c, l);
            u.observe(n[0]);
          }
        },
        debounce: function (e, n, r) {
          var t;
          return function () {
            var o = this,
              a = arguments,
              i = function () {
                (t = null), r || e.apply(o, a);
              },
              l = r && !t;
            clearTimeout(t), (t = setTimeout(i, n)), l && e.apply(o, a);
          };
        },
        highlightString: function (e, n) {
          if ("string" != typeof e || "string" != typeof n) return "";
          var r = new RegExp(e, "gi"),
            t = n.replace(r, function (e) {
              return "<strong>" + e + "</strong>";
            });
          return t;
        },
        getUrlPrefix: function (e) {
          var n = e;
          if ("string" != typeof e) return "";
          e.indexOf("/") < 0 && (n = "/" + e);
          var r = DUI.Localize.getCountryUrlPrefix() || "/",
            t = DUI.Config.use_mobile ? "/mobile" : "";
          return (r + t + n).replace(/^\/\//, "/");
        },
        ua: {
          isStoreAppAndroid: function () {
            var e = window.navigator.userAgent;
            return !!e.match(/DJI-App-Android/gi);
          },
          isStoreAppIos: function () {
            var e = window.navigator.userAgent;
            return !!e.match(/DJI-App-Ios/gi);
          },
          isStoreApp: function () {
            return this.isStoreAppAndroid() || this.isStoreAppIos();
          },
        },
        sendAnalyticEvent: function (e, n) {
          "undefined" != typeof window &&
            window.sensors &&
            window.sensors.track(e, {
              app_ucid: DUI.Config.app_ucid,
              platform_type: "web",
              category: n.category,
              action: n.action,
              label: n.label,
            });
        },
      }),
      DUI.helper.flowStats(),
      ($.fn.hoverDelay = function (e) {
        var n,
          r,
          t = {
            hoverDuring: 50,
            outDuring: 50,
            hoverEvent: function () {
              $.noop();
            },
            outEvent: function () {
              $.noop();
            },
          },
          o = $.extend(t, e || {});
        return $(this).each(function () {
          var e = $(this);
          e.hover(
            function () {
              clearTimeout(r),
                (n = setTimeout(function () {
                  o.hoverEvent.apply(e);
                }, o.hoverDuring));
            },
            function () {
              clearTimeout(n),
                (r = setTimeout(function () {
                  o.outEvent.apply(e);
                }, o.outDuring));
            }
          );
        });
      });
  })(window);
