!function(e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports["simple-cookies"] = r() : e["simple-cookies"] = r();
}(this, function() {
    return function(e) {
        function __webpack_require__(t) {
            if (r[t]) return r[t].exports;
            var o = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(o.exports, o, o.exports, __webpack_require__), o.l = !0, o.exports;
        }
        var r = {};
        return __webpack_require__.m = e, __webpack_require__.c = r, __webpack_require__.i = function(e) {
            return e;
        }, __webpack_require__.d = function(e, r, t) {
            __webpack_require__.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: t
            });
        }, __webpack_require__.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return __webpack_require__.d(r, "a", r), r;
        }, __webpack_require__.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ function(e, r, t) {
        "use strict";
        function _classCallCheck(e, r) {
            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(e, r) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !r || "object" != typeof r && "function" != typeof r ? e : r;
        }
        function _inherits(e, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            e.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), t.d(r, "CookieError", function() {
            return o;
        }), t.d(r, "priv", function() {
            return c;
        });
        var o = function(e) {
            function CookieError() {
                return _classCallCheck(this, CookieError), _possibleConstructorReturn(this, (CookieError.__proto__ || Object.getPrototypeOf(CookieError)).apply(this, arguments));
            }
            return _inherits(CookieError, e), CookieError;
        }(Error), n = function(e) {
            if (!("undefined" != typeof document || e && e.silent)) throw new o("Document is not defined! Are you trying to use this on the server?");
            return "undefined" != typeof document;
        }, i = function(e, r, t) {
            if (n(t)) {
                var o = new Date(), i = t && t.days ? "; expires=" + o.setTime(o.getTime() + 864e5 * t.days) : "";
                return document.cookie = encodeURIComponent(e) + "=" + r + i, !0;
            }
            return !1;
        }, u = {
            get: function(e, r) {
                if (n(r)) {
                    var t = document.cookie.match("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)");
                    return t ? t[1] : "";
                }
                return "";
            },
            set: i,
            remove: function(e, r) {
                return i(e, "", Object.assign({
                    days: -1
                }, r));
            }
        }, c = null;
        r.default = u;
    } ]);
});