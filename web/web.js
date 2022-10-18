/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 129));
})([
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    }.call(this, n(26)));
  },
  function (t, e) {
    var n = Array.isArray;
    t.exports = n;
  },
  function (t, e, n) {
    'use strict';
    var r = {},
      i = {},
      o = [],
      a = window.Webflow || [],
      u = window.jQuery,
      c = u(window),
      s = u(document),
      f = u.isFunction,
      l = (r._ = n(133)),
      d = (r.tram = n(69) && u.tram),
      p = !1,
      v = !1;
    function h(t) {
      r.env() &&
        (f(t.design) && c.on('__wf_design', t.design),
        f(t.preview) && c.on('__wf_preview', t.preview)),
        f(t.destroy) && c.on('__wf_destroy', t.destroy),
        t.ready &&
          f(t.ready) &&
          (function (t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready);
          })(t);
    }
    function g(t) {
      f(t.design) && c.off('__wf_design', t.design),
        f(t.preview) && c.off('__wf_preview', t.preview),
        f(t.destroy) && c.off('__wf_destroy', t.destroy),
        t.ready &&
          f(t.ready) &&
          (function (t) {
            o = l.filter(o, function (e) {
              return e !== t.ready;
            });
          })(t);
    }
    (d.config.hideBackface = !1),
      (d.config.keepInherited = !0),
      (r.define = function (t, e, n) {
        i[t] && g(i[t]);
        var r = (i[t] = e(u, l, n) || {});
        return h(r), r;
      }),
      (r.require = function (t) {
        return i[t];
      }),
      (r.push = function (t) {
        p ? f(t) && t() : a.push(t);
      }),
      (r.env = function (t) {
        var e = window.__wf_design,
          n = void 0 !== e;
        return t
          ? 'design' === t
            ? n && e
            : 'preview' === t
            ? n && !e
            : 'slug' === t
            ? n && window.__wf_slug
            : 'editor' === t
            ? window.WebflowEditor
            : 'test' === t
            ? window.__wf_test
            : 'frame' === t
            ? window !== window.top
            : void 0
          : n;
      });
    var E,
      m = navigator.userAgent.toLowerCase(),
      y = (r.env.touch =
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      _ = (r.env.chrome =
        /chrome/.test(m) &&
        /Google/.test(navigator.vendor) &&
        parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
      b = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
    (r.env.safari = /safari/.test(m) && !_ && !b),
      y &&
        s.on('touchstart mousedown', function (t) {
          E = t.target;
        }),
      (r.validClick = y
        ? function (t) {
            return t === E || u.contains(t, E);
          }
        : function () {
            return !0;
          });
    var I,
      w = 'resize.webflow orientationchange.webflow load.webflow';
    function T(t, e) {
      var n = [],
        r = {};
      return (
        (r.up = l.throttle(function (t) {
          l.each(n, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, r.up),
        (r.on = function (t) {
          'function' == typeof t && (l.contains(n, t) || n.push(t));
        }),
        (r.off = function (t) {
          n = arguments.length
            ? l.filter(n, function (e) {
                return e !== t;
              })
            : [];
        }),
        r
      );
    }
    function O(t) {
      f(t) && t();
    }
    function A() {
      I && (I.reject(), c.off('load', I.resolve)),
        (I = new u.Deferred()),
        c.on('load', I.resolve);
    }
    (r.resize = T(c, w)),
      (r.scroll = T(
        c,
        'scroll.webflow resize.webflow orientationchange.webflow load.webflow'
      )),
      (r.redraw = T()),
      (r.location = function (t) {
        window.location = t;
      }),
      r.env() && (r.location = function () {}),
      (r.ready = function () {
        (p = !0),
          v ? ((v = !1), l.each(i, h)) : l.each(o, O),
          l.each(a, O),
          r.resize.up();
      }),
      (r.load = function (t) {
        I.then(t);
      }),
      (r.destroy = function (t) {
        (t = t || {}),
          (v = !0),
          c.triggerHandler('__wf_destroy'),
          null != t.domready && (p = t.domready),
          l.each(i, g),
          r.resize.off(),
          r.scroll.off(),
          r.redraw.off(),
          (o = []),
          (a = []),
          'pending' === I.state() && A();
      }),
      u(r.ready),
      A(),
      (t.exports = window.Webflow = r);
  },
  function (t, e, n) {
    'use strict';
    var r = n(18);
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(190);
    Object.keys(o).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            },
          }));
    });
    var a = n(94);
    Object.keys(a).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return a[t];
            },
          }));
    });
    var u = n(191);
    Object.keys(u).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return u[t];
            },
          }));
    });
    var c = n(192);
    Object.keys(c).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          }));
    });
    var s = r(n(193));
    e.IX2EngineActionTypes = s;
    var f = r(n(194));
    e.IX2EngineConstants = f;
  },
  function (t, e) {
    var n = Function.prototype,
      r = n.bind,
      i = n.call,
      o = r && r.bind(i);
    t.exports = r
      ? function (t) {
          return t && o(i, t);
        }
      : function (t) {
          return (
            t &&
            function () {
              return i.apply(t, arguments);
            }
          );
        };
  },
  function (t, e, n) {
    var r = n(99),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = r || i || Function('return this')();
    t.exports = o;
  },
  function (t, e) {
    t.exports = function (t) {
      return 'function' == typeof t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(158),
      o = r({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return o(i(t), e);
      };
  },
  function (t, e, n) {
    var r = n(197),
      i = n(251),
      o = n(63),
      a = n(2),
      u = n(260);
    t.exports = function (t) {
      return 'function' == typeof t
        ? t
        : null == t
        ? o
        : 'object' == typeof t
        ? a(t)
          ? i(t[0], t[1])
          : r(t)
        : u(t);
    };
  },
  function (t, e, n) {
    var r = n(209),
      i = n(214);
    t.exports = function (t, e) {
      var n = i(t, e);
      return r(n) ? n : void 0;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  function (t, e) {
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function r(e) {
      return (
        'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
          ? (t.exports = r =
              function (t) {
                return n(t);
              })
          : (t.exports = r =
              function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : n(t);
              }),
        r(e)
      );
    }
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(19);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    'use strict';
    var r = n(18);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IX2VanillaUtils =
        e.IX2VanillaPlugins =
        e.IX2ElementsReducer =
        e.IX2EasingUtils =
        e.IX2Easings =
        e.IX2BrowserSupport =
          void 0);
    var i = r(n(48));
    e.IX2BrowserSupport = i;
    var o = r(n(116));
    e.IX2Easings = o;
    var a = r(n(118));
    e.IX2EasingUtils = a;
    var u = r(n(269));
    e.IX2ElementsReducer = u;
    var c = r(n(120));
    e.IX2VanillaPlugins = c;
    var s = r(n(271));
    e.IX2VanillaUtils = s;
  },
  function (t, e, n) {
    var r = n(23),
      i = n(210),
      o = n(211),
      a = '[object Null]',
      u = '[object Undefined]',
      c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? i(t)
        : o(t);
    };
  },
  function (t, e, n) {
    var r = n(98),
      i = n(56);
    t.exports = function (t) {
      return null != t && i(t.length) && !r(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            var r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(t, n)
                : {};
            r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
          }
      return (e.default = t), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(7);
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : r(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          };
    (e.clone = c),
      (e.addLast = l),
      (e.addFirst = d),
      (e.removeLast = p),
      (e.removeFirst = v),
      (e.insert = h),
      (e.removeAt = g),
      (e.replaceAt = E),
      (e.getIn = m),
      (e.set = y),
      (e.setIn = _),
      (e.update = b),
      (e.updateIn = I),
      (e.merge = w),
      (e.mergeDeep = T),
      (e.mergeIn = O),
      (e.omit = A),
      (e.addDefaults = x);
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = 'INVALID_ARGS';
    function o(t) {
      throw new Error(t);
    }
    function a(t) {
      var e = Object.keys(t);
      return Object.getOwnPropertySymbols
        ? e.concat(Object.getOwnPropertySymbols(t))
        : e;
    }
    var u = {}.hasOwnProperty;
    function c(t) {
      if (Array.isArray(t)) return t.slice();
      for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
        var i = e[r];
        n[i] = t[i];
      }
      return n;
    }
    function s(t, e, n) {
      var r = n;
      null == r && o(i);
      for (
        var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3;
        p < l;
        p++
      )
        d[p - 3] = arguments[p];
      for (var v = 0; v < d.length; v++) {
        var h = d[v];
        if (null != h) {
          var g = a(h);
          if (g.length)
            for (var E = 0; E <= g.length; E++) {
              var m = g[E];
              if (!t || void 0 === r[m]) {
                var y = h[m];
                e && f(r[m]) && f(y) && (y = s(t, e, r[m], y)),
                  void 0 !== y &&
                    y !== r[m] &&
                    (u || ((u = !0), (r = c(r))), (r[m] = y));
              }
            }
        }
      }
      return r;
    }
    function f(t) {
      var e = void 0 === t ? 'undefined' : r(t);
      return null != t && ('object' === e || 'function' === e);
    }
    function l(t, e) {
      return Array.isArray(e) ? t.concat(e) : t.concat([e]);
    }
    function d(t, e) {
      return Array.isArray(e) ? e.concat(t) : [e].concat(t);
    }
    function p(t) {
      return t.length ? t.slice(0, t.length - 1) : t;
    }
    function v(t) {
      return t.length ? t.slice(1) : t;
    }
    function h(t, e, n) {
      return t
        .slice(0, e)
        .concat(Array.isArray(n) ? n : [n])
        .concat(t.slice(e));
    }
    function g(t, e) {
      return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
    }
    function E(t, e, n) {
      if (t[e] === n) return t;
      for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
      return (i[e] = n), i;
    }
    function m(t, e) {
      if ((!Array.isArray(e) && o(i), null != t)) {
        for (var n = t, r = 0; r < e.length; r++) {
          var a = e[r];
          if (void 0 === (n = null != n ? n[a] : void 0)) return n;
        }
        return n;
      }
    }
    function y(t, e, n) {
      var r = null == t ? ('number' == typeof e ? [] : {}) : t;
      if (r[e] === n) return r;
      var i = c(r);
      return (i[e] = n), i;
    }
    function _(t, e, n) {
      return e.length
        ? (function t(e, n, r, i) {
            var o = void 0,
              a = n[i];
            o =
              i === n.length - 1
                ? r
                : t(
                    f(e) && f(e[a])
                      ? e[a]
                      : 'number' == typeof n[i + 1]
                      ? []
                      : {},
                    n,
                    r,
                    i + 1
                  );
            return y(e, a, o);
          })(t, e, n, 0)
        : n;
    }
    function b(t, e, n) {
      return y(t, e, n(null == t ? void 0 : t[e]));
    }
    function I(t, e, n) {
      return _(t, e, n(m(t, e)));
    }
    function w(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u))
        : s(!1, !1, t, e, n, r, i, o);
    }
    function T(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u))
        : s(!1, !0, t, e, n, r, i, o);
    }
    function O(t, e, n, r, i, o, a) {
      var u = m(t, e);
      null == u && (u = {});
      for (
        var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7;
        l < c;
        l++
      )
        f[l - 7] = arguments[l];
      return _(
        t,
        e,
        f.length
          ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f))
          : s(!1, !1, u, n, r, i, o, a)
      );
    }
    function A(t, e) {
      for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
        if (u.call(t, n[i])) {
          r = !0;
          break;
        }
      if (!r) return t;
      for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
        var f = c[s];
        n.indexOf(f) >= 0 || (o[f] = t[f]);
      }
      return o;
    }
    function x(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u))
        : s(!0, !1, t, e, n, r, i, o);
    }
    var S = {
      clone: c,
      addLast: l,
      addFirst: d,
      removeLast: p,
      removeFirst: v,
      insert: h,
      removeAt: g,
      replaceAt: E,
      getIn: m,
      set: y,
      setIn: _,
      update: b,
      updateIn: I,
      merge: w,
      mergeDeep: T,
      mergeIn: O,
      omit: A,
      addDefaults: x,
    };
    e.default = S;
  },
  function (t, e, n) {
    var r = n(6).Symbol;
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(39),
      i = 1 / 0;
    t.exports = function (t) {
      if ('string' == typeof t || r(t)) return t;
      var e = t + '';
      return '0' == e && 1 / t == -i ? '-0' : e;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(138);
    function i(t, e) {
      var n = document.createEvent('CustomEvent');
      n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
    }
    var o = window.jQuery,
      a = {},
      u = {
        reset: function (t, e) {
          r.triggers.reset(t, e);
        },
        intro: function (t, e) {
          r.triggers.intro(t, e), i(e, 'COMPONENT_ACTIVE');
        },
        outro: function (t, e) {
          r.triggers.outro(t, e), i(e, 'COMPONENT_INACTIVE');
        },
      };
    (a.triggers = {}),
      (a.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      o.extend(a.triggers, u),
      (t.exports = a);
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(147),
      i = n(72);
    t.exports = function (t) {
      return r(i(t));
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(7);
    t.exports = function (t, e) {
      return arguments.length < 2
        ? ((n = r[t]), i(n) ? n : void 0)
        : r[t] && r[t][e];
      var n;
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(14),
      o = n(80),
      a = n(30),
      u = n(73),
      c = r.TypeError,
      s = Object.defineProperty;
    e.f = i
      ? s
      : function (t, e, n) {
          if ((a(t), (e = u(e)), a(n), o))
            try {
              return s(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n) throw c('Accessors not supported');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(20),
      o = r.String,
      a = r.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw a(o(t) + ' is not an object');
    };
  },
  function (t, e) {
    function n() {
      return (
        (t.exports = n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
        n.apply(this, arguments)
      );
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(199),
      i = n(200),
      o = n(201),
      a = n(202),
      u = n(203);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e, n) {
    var r = n(49);
    t.exports = function (t, e) {
      for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(11)(Object, 'create');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(223);
    t.exports = function (t, e) {
      var n = t.__data__;
      return r(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
    };
  },
  function (t, e, n) {
    var r = n(106),
      i = n(57),
      o = n(17);
    t.exports = function (t) {
      return o(t) ? r(t) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(241),
      i = n(12),
      o = Object.prototype,
      a = o.hasOwnProperty,
      u = o.propertyIsEnumerable,
      c = r(
        (function () {
          return arguments;
        })()
      )
        ? r
        : function (t) {
            return i(t) && a.call(t, 'callee') && !u.call(t, 'callee');
          };
    t.exports = c;
  },
  function (t, e, n) {
    var r = n(2),
      i = n(62),
      o = n(252),
      a = n(255);
    t.exports = function (t, e) {
      return r(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(12),
      o = '[object Symbol]';
    t.exports = function (t) {
      return 'symbol' == typeof t || (i(t) && r(t) == o);
    };
  },
  function (t, e) {
    var n = Function.prototype.call;
    t.exports = n.bind
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(42),
      o = r['__core-js_shared__'] || i('__core-js_shared__', {});
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(1),
      i = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        i(r, t, { value: e, configurable: !0, writable: !0 });
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(29),
      o = n(71);
    t.exports = r
      ? function (t, e, n) {
          return i.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'ActionTypes', function () {
        return o;
      }),
      n.d(e, 'default', function () {
        return a;
      });
    var r = n(88),
      i = n(185),
      o = { INIT: '@@redux/INIT' };
    function a(t, e, n) {
      var u;
      if (
        ('function' == typeof e && void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n)
      ) {
        if ('function' != typeof n)
          throw new Error('Expected the enhancer to be a function.');
        return n(a)(t, e);
      }
      if ('function' != typeof t)
        throw new Error('Expected the reducer to be a function.');
      var c = t,
        s = e,
        f = [],
        l = f,
        d = !1;
      function p() {
        l === f && (l = f.slice());
      }
      function v() {
        return s;
      }
      function h(t) {
        if ('function' != typeof t)
          throw new Error('Expected listener to be a function.');
        var e = !0;
        return (
          p(),
          l.push(t),
          function () {
            if (e) {
              (e = !1), p();
              var n = l.indexOf(t);
              l.splice(n, 1);
            }
          }
        );
      }
      function g(t) {
        if (!Object(r.default)(t))
          throw new Error(
            'Actions must be plain objects. Use custom middleware for async actions.'
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (d) throw new Error('Reducers may not dispatch actions.');
        try {
          (d = !0), (s = c(s, t));
        } finally {
          d = !1;
        }
        for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
        return t;
      }
      return (
        g({ type: o.INIT }),
        ((u = {
          dispatch: g,
          subscribe: h,
          getState: v,
          replaceReducer: function (t) {
            if ('function' != typeof t)
              throw new Error('Expected the nextReducer to be a function.');
            (c = t), g({ type: o.INIT });
          },
        })[i.default] = function () {
          var t,
            e = h;
          return (
            ((t = {
              subscribe: function (t) {
                if ('object' != typeof t)
                  throw new TypeError('Expected the observer to be an object.');
                function n() {
                  t.next && t.next(v());
                }
                return n(), { unsubscribe: e(n) };
              },
            })[i.default] = function () {
              return this;
            }),
            t
          );
        }),
        u
      );
    }
  },
  function (t, e, n) {
    'use strict';
    function r() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      if (0 === e.length)
        return function (t) {
          return t;
        };
      if (1 === e.length) return e[0];
      var r = e[e.length - 1],
        i = e.slice(0, -1);
      return function () {
        return i.reduceRight(function (t, e) {
          return e(t);
        }, r.apply(void 0, arguments));
      };
    }
    n.r(e),
      n.d(e, 'default', function () {
        return r;
      });
  },
  function (t, e, n) {
    'use strict';
    var r = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TRANSFORM_STYLE_PREFIXED =
        e.TRANSFORM_PREFIXED =
        e.FLEX_PREFIXED =
        e.ELEMENT_MATCHES =
        e.withBrowser =
        e.IS_BROWSER_ENV =
          void 0);
    var i = r(n(95)),
      o = 'undefined' != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function (t, e) {
      return o ? t() : e;
    };
    e.withBrowser = a;
    var u = a(function () {
      return (0,
      i.default)(['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'], function (t) {
        return t in Element.prototype;
      });
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function () {
      var t = document.createElement('i'),
        e = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
      try {
        for (var n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          if (((t.style.display = i), t.style.display === i)) return i;
        }
        return '';
      } catch (t) {
        return '';
      }
    }, 'flex');
    e.FLEX_PREFIXED = c;
    var s = a(function () {
      var t = document.createElement('i');
      if (null == t.style.transform)
        for (var e = ['Webkit', 'Moz', 'ms'], n = e.length, r = 0; r < n; r++) {
          var i = e[r] + 'Transform';
          if (void 0 !== t.style[i]) return i;
        }
      return 'transform';
    }, 'transform');
    e.TRANSFORM_PREFIXED = s;
    var f = s.split('transform')[0],
      l = f ? f + 'TransformStyle' : 'transformStyle';
    e.TRANSFORM_STYLE_PREFIXED = l;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'Map');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(215),
      i = n(222),
      o = n(224),
      a = n(225),
      u = n(226);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
      return t;
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(6),
        i = n(242),
        o = e && !e.nodeType && e,
        a = o && 'object' == typeof t && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
      t.exports = c;
    }.call(this, n(107)(t)));
  },
  function (t, e) {
    var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
      var i = typeof t;
      return (
        !!(e = null == e ? n : e) &&
        ('number' == i || ('symbol' != i && r.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function (t, e, n) {
    var r = n(243),
      i = n(244),
      o = n(245),
      a = o && o.isTypedArray,
      u = a ? i(a) : r;
    t.exports = u;
  },
  function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= n;
    };
  },
  function (t, e, n) {
    var r = n(58),
      i = n(246),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return i(t);
      var e = [];
      for (var n in Object(t)) o.call(t, n) && 'constructor' != n && e.push(n);
      return e;
    };
  },
  function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || n);
    };
  },
  function (t, e, n) {
    var r = n(247),
      i = n(50),
      o = n(248),
      a = n(249),
      u = n(109),
      c = n(16),
      s = n(100),
      f = s(r),
      l = s(i),
      d = s(o),
      p = s(a),
      v = s(u),
      h = c;
    ((r && '[object DataView]' != h(new r(new ArrayBuffer(1)))) ||
      (i && '[object Map]' != h(new i())) ||
      (o && '[object Promise]' != h(o.resolve())) ||
      (a && '[object Set]' != h(new a())) ||
      (u && '[object WeakMap]' != h(new u()))) &&
      (h = function (t) {
        var e = c(t),
          n = '[object Object]' == e ? t.constructor : void 0,
          r = n ? s(n) : '';
        if (r)
          switch (r) {
            case f:
              return '[object DataView]';
            case l:
              return '[object Map]';
            case d:
              return '[object Promise]';
            case p:
              return '[object Set]';
            case v:
              return '[object WeakMap]';
          }
        return e;
      }),
      (t.exports = h);
  },
  function (t, e, n) {
    var r = n(61);
    t.exports = function (t, e, n) {
      var i = null == t ? void 0 : r(t, e);
      return void 0 === i ? n : i;
    };
  },
  function (t, e, n) {
    var r = n(38),
      i = n(24);
    t.exports = function (t, e) {
      for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
        t = t[i(e[n++])];
      return n && n == o ? t : void 0;
    };
  },
  function (t, e, n) {
    var r = n(2),
      i = n(39),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = function (t, e) {
      if (r(t)) return !1;
      var n = typeof t;
      return (
        !(
          'number' != n &&
          'symbol' != n &&
          'boolean' != n &&
          null != t &&
          !i(t)
        ) ||
        a.test(t) ||
        !o.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e, n) {
    var r = n(264),
      i = n(8),
      o = n(39),
      a = NaN,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      f = parseInt;
    t.exports = function (t) {
      if ('number' == typeof t) return t;
      if (o(t)) return a;
      if (i(t)) {
        var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = i(e) ? e + '' : e;
      }
      if ('string' != typeof t) return 0 === t ? t : +t;
      t = r(t);
      var n = c.test(t);
      return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.mediaQueriesDefined =
        e.viewportWidthChanged =
        e.actionListPlaybackChanged =
        e.elementStateChanged =
        e.instanceRemoved =
        e.instanceStarted =
        e.instanceAdded =
        e.parameterChanged =
        e.animationFrameChanged =
        e.eventStateChanged =
        e.testFrameRendered =
        e.eventListenerAdded =
        e.clearRequested =
        e.stopRequested =
        e.playbackRequested =
        e.previewRequested =
        e.sessionStopped =
        e.sessionStarted =
        e.sessionInitialized =
        e.rawDataImported =
          void 0);
    var i = r(n(31)),
      o = n(4),
      a = n(15),
      u = o.IX2EngineActionTypes,
      c = u.IX2_RAW_DATA_IMPORTED,
      s = u.IX2_SESSION_INITIALIZED,
      f = u.IX2_SESSION_STARTED,
      l = u.IX2_SESSION_STOPPED,
      d = u.IX2_PREVIEW_REQUESTED,
      p = u.IX2_PLAYBACK_REQUESTED,
      v = u.IX2_STOP_REQUESTED,
      h = u.IX2_CLEAR_REQUESTED,
      g = u.IX2_EVENT_LISTENER_ADDED,
      E = u.IX2_TEST_FRAME_RENDERED,
      m = u.IX2_EVENT_STATE_CHANGED,
      y = u.IX2_ANIMATION_FRAME_CHANGED,
      _ = u.IX2_PARAMETER_CHANGED,
      b = u.IX2_INSTANCE_ADDED,
      I = u.IX2_INSTANCE_STARTED,
      w = u.IX2_INSTANCE_REMOVED,
      T = u.IX2_ELEMENT_STATE_CHANGED,
      O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      A = u.IX2_VIEWPORT_WIDTH_CHANGED,
      x = u.IX2_MEDIA_QUERIES_DEFINED,
      S = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function (t) {
      return { type: c, payload: (0, i.default)({}, S(t)) };
    };
    e.sessionInitialized = function (t) {
      var e = t.hasBoundaryNodes,
        n = t.reducedMotion;
      return { type: s, payload: { hasBoundaryNodes: e, reducedMotion: n } };
    };
    e.sessionStarted = function () {
      return { type: f };
    };
    e.sessionStopped = function () {
      return { type: l };
    };
    e.previewRequested = function (t) {
      var e = t.rawData,
        n = t.defer;
      return { type: d, payload: { defer: n, rawData: e } };
    };
    e.playbackRequested = function (t) {
      var e = t.actionTypeId,
        n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
        r = t.actionListId,
        i = t.actionItemId,
        a = t.eventId,
        u = t.allowEvents,
        c = t.immediate,
        s = t.testManual,
        f = t.verbose,
        l = t.rawData;
      return {
        type: p,
        payload: {
          actionTypeId: n,
          actionListId: r,
          actionItemId: i,
          testManual: s,
          eventId: a,
          allowEvents: u,
          immediate: c,
          verbose: f,
          rawData: l,
        },
      };
    };
    e.stopRequested = function (t) {
      return { type: v, payload: { actionListId: t } };
    };
    e.clearRequested = function () {
      return { type: h };
    };
    e.eventListenerAdded = function (t, e) {
      return { type: g, payload: { target: t, listenerParams: e } };
    };
    e.testFrameRendered = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return { type: E, payload: { step: t } };
    };
    e.eventStateChanged = function (t, e) {
      return { type: m, payload: { stateKey: t, newState: e } };
    };
    e.animationFrameChanged = function (t, e) {
      return { type: y, payload: { now: t, parameters: e } };
    };
    e.parameterChanged = function (t, e) {
      return { type: _, payload: { key: t, value: e } };
    };
    e.instanceAdded = function (t) {
      return { type: b, payload: (0, i.default)({}, t) };
    };
    e.instanceStarted = function (t, e) {
      return { type: I, payload: { instanceId: t, time: e } };
    };
    e.instanceRemoved = function (t) {
      return { type: w, payload: { instanceId: t } };
    };
    e.elementStateChanged = function (t, e, n, r) {
      return {
        type: T,
        payload: { elementId: t, actionTypeId: e, current: n, actionItem: r },
      };
    };
    e.actionListPlaybackChanged = function (t) {
      var e = t.actionListId,
        n = t.isPlaying;
      return { type: O, payload: { actionListId: e, isPlaying: n } };
    };
    e.viewportWidthChanged = function (t) {
      var e = t.width,
        n = t.mediaQueries;
      return { type: A, payload: { width: e, mediaQueries: n } };
    };
    e.mediaQueriesDefined = function () {
      return { type: x };
    };
  },
  function (t, e, n) {
    var r = n(126),
      i = n(67);
    function o(t, e) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__chain__ = !!e),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (o.prototype = r(i.prototype)),
      (o.prototype.constructor = o),
      (t.exports = o);
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e, n) {
    var r = n(126),
      i = n(67),
      o = 4294967295;
    function a(t) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = o),
        (this.__views__ = []);
    }
    (a.prototype = r(i.prototype)),
      (a.prototype.constructor = a),
      (t.exports = a);
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(13));
    window.tram = (function (t) {
      function e(t, e) {
        return new F.Bare().init(t, e);
      }
      function n(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return '-' + t.toLowerCase();
        });
      }
      function i(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function o(t, e, n) {
        return (
          '#' + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
        );
      }
      function a() {}
      function u(t, e, n) {
        s('Units do not match [' + t + ']: ' + e + ', ' + n);
      }
      function c(t, e, n) {
        if ((void 0 !== e && (n = e), void 0 === t)) return n;
        var r = n;
        return (
          q.test(t) || !Z.test(t)
            ? (r = parseInt(t, 10))
            : Z.test(t) && (r = 1e3 * parseFloat(t)),
          0 > r && (r = 0),
          r == r ? r : n
        );
      }
      function s(t) {
        H.debug && window && window.console.warn(t);
      }
      var f = (function (t, e, n) {
          function i(t) {
            return 'object' == (0, r.default)(t);
          }
          function o(t) {
            return 'function' == typeof t;
          }
          function a() {}
          return function r(u, c) {
            function s() {
              var t = new f();
              return o(t.init) && t.init.apply(t, arguments), t;
            }
            function f() {}
            c === n && ((c = u), (u = Object)), (s.Bare = f);
            var l,
              d = (a[t] = u[t]),
              p = (f[t] = s[t] = new a());
            return (
              (p.constructor = s),
              (s.mixin = function (e) {
                return (f[t] = s[t] = r(s, e)[t]), s;
              }),
              (s.open = function (t) {
                if (
                  ((l = {}),
                  o(t) ? (l = t.call(s, p, d, s, u)) : i(t) && (l = t),
                  i(l))
                )
                  for (var n in l) e.call(l, n) && (p[n] = l[n]);
                return o(p.init) || (p.init = u), s;
              }),
              s.open(c)
            );
          };
        })('prototype', {}.hasOwnProperty),
        l = {
          ease: [
            'ease',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t)
              );
            },
          ],
          'ease-in': [
            'ease-in',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
            },
          ],
          'ease-out': [
            'ease-out',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
              );
            },
          ],
          'ease-in-out': [
            'ease-in-out',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
            },
          ],
          linear: [
            'linear',
            function (t, e, n, r) {
              return (n * t) / r + e;
            },
          ],
          'ease-in-quad': [
            'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
            function (t, e, n, r) {
              return n * (t /= r) * t + e;
            },
          ],
          'ease-out-quad': [
            'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            function (t, e, n, r) {
              return -n * (t /= r) * (t - 2) + e;
            },
          ],
          'ease-in-out-quad': [
            'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t + e
                : (-n / 2) * (--t * (t - 2) - 1) + e;
            },
          ],
          'ease-in-cubic': [
            'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t + e;
            },
          ],
          'ease-out-cubic': [
            'cubic-bezier(0.215, 0.610, 0.355, 1)',
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t + 1) + e;
            },
          ],
          'ease-in-out-cubic': [
            'cubic-bezier(0.645, 0.045, 0.355, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t + 2) + e;
            },
          ],
          'ease-in-quart': [
            'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t + e;
            },
          ],
          'ease-out-quart': [
            'cubic-bezier(0.165, 0.840, 0.440, 1)',
            function (t, e, n, r) {
              return -n * ((t = t / r - 1) * t * t * t - 1) + e;
            },
          ],
          'ease-in-out-quart': [
            'cubic-bezier(0.770, 0, 0.175, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t + e
                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
          ],
          'ease-in-quint': [
            'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t * t + e;
            },
          ],
          'ease-out-quint': [
            'cubic-bezier(0.230, 1, 0.320, 1)',
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
            },
          ],
          'ease-in-out-quint': [
            'cubic-bezier(0.860, 0, 0.070, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
          ],
          'ease-in-sine': [
            'cubic-bezier(0.470, 0, 0.745, 0.715)',
            function (t, e, n, r) {
              return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
            },
          ],
          'ease-out-sine': [
            'cubic-bezier(0.390, 0.575, 0.565, 1)',
            function (t, e, n, r) {
              return n * Math.sin((t / r) * (Math.PI / 2)) + e;
            },
          ],
          'ease-in-out-sine': [
            'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
            function (t, e, n, r) {
              return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
            },
          ],
          'ease-in-expo': [
            'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            function (t, e, n, r) {
              return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
            },
          ],
          'ease-out-expo': [
            'cubic-bezier(0.190, 1, 0.220, 1)',
            function (t, e, n, r) {
              return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
            },
          ],
          'ease-in-out-expo': [
            'cubic-bezier(1, 0, 0, 1)',
            function (t, e, n, r) {
              return 0 === t
                ? e
                : t === r
                ? e + n
                : (t /= r / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
          ],
          'ease-in-circ': [
            'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
            function (t, e, n, r) {
              return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
            },
          ],
          'ease-out-circ': [
            'cubic-bezier(0.075, 0.820, 0.165, 1)',
            function (t, e, n, r) {
              return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
            },
          ],
          'ease-in-out-circ': [
            'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
          ],
          'ease-in-back': [
            'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * (t /= r) * t * ((i + 1) * t - i) + e
              );
            },
          ],
          'ease-out-back': [
            'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
              );
            },
          ],
          'ease-in-out-back': [
            'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                (t /= r / 2) < 1
                  ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                  : (n / 2) *
                      ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) +
                    e
              );
            },
          ],
        },
        d = {
          'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
          'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
          'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
        },
        p = document,
        v = window,
        h = 'bkwld-tram',
        g = /[\-\.0-9]/g,
        E = /[A-Z]/,
        m = 'number',
        y = /^(rgb|#)/,
        _ = /(em|cm|mm|in|pt|pc|px)$/,
        b = /(em|cm|mm|in|pt|pc|px|%)$/,
        I = /(deg|rad|turn)$/,
        w = 'unitless',
        T = /(all|none) 0s ease 0s/,
        O = /^(width|height)$/,
        A = ' ',
        x = p.createElement('a'),
        S = ['Webkit', 'Moz', 'O', 'ms'],
        R = ['-webkit-', '-moz-', '-o-', '-ms-'],
        C = function (t) {
          if (t in x.style) return { dom: t, css: t };
          var e,
            n,
            r = '',
            i = t.split('-');
          for (e = 0; e < i.length; e++)
            r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
          for (e = 0; e < S.length; e++)
            if ((n = S[e] + r) in x.style) return { dom: n, css: R[e] + t };
        },
        N = (e.support = {
          bind: Function.prototype.bind,
          transform: C('transform'),
          transition: C('transition'),
          backface: C('backface-visibility'),
          timing: C('transition-timing-function'),
        });
      if (N.transition) {
        var L = N.timing.dom;
        if (((x.style[L] = l['ease-in-back'][0]), !x.style[L]))
          for (var P in d) l[P][0] = d[P];
      }
      var D = (e.frame = (function () {
          var t =
            v.requestAnimationFrame ||
            v.webkitRequestAnimationFrame ||
            v.mozRequestAnimationFrame ||
            v.oRequestAnimationFrame ||
            v.msRequestAnimationFrame;
          return t && N.bind
            ? t.bind(v)
            : function (t) {
                v.setTimeout(t, 16);
              };
        })()),
        M = (e.now = (function () {
          var t = v.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && N.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        j = f(function (e) {
          function i(t, e) {
            var n = (function (t) {
                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                  var i = t[e];
                  i && r.push(i);
                }
                return r;
              })(('' + t).split(A)),
              r = n[0];
            e = e || {};
            var i = Q[r];
            if (!i) return s('Unsupported property: ' + r);
            if (!e.weak || !this.props[r]) {
              var o = i[0],
                a = this.props[r];
              return (
                a || (a = this.props[r] = new o.Bare()),
                a.init(this.$el, n, i, e),
                a
              );
            }
          }
          function o(t, e, n) {
            if (t) {
              var o = (0, r.default)(t);
              if (
                (e ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                'number' == o && e)
              )
                return (
                  (this.timer = new W({
                    duration: t,
                    context: this,
                    complete: a,
                  })),
                  void (this.active = !0)
                );
              if ('string' == o && e) {
                switch (t) {
                  case 'hide':
                    f.call(this);
                    break;
                  case 'stop':
                    u.call(this);
                    break;
                  case 'redraw':
                    l.call(this);
                    break;
                  default:
                    i.call(this, t, n && n[1]);
                }
                return a.call(this);
              }
              if ('function' == o) return void t.call(this, this);
              if ('object' == o) {
                var s = 0;
                p.call(
                  this,
                  t,
                  function (t, e) {
                    t.span > s && (s = t.span), t.stop(), t.animate(e);
                  },
                  function (t) {
                    'wait' in t && (s = c(t.wait, 0));
                  }
                ),
                  d.call(this),
                  s > 0 &&
                    ((this.timer = new W({ duration: s, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = a));
                var v = this,
                  h = !1,
                  g = {};
                D(function () {
                  p.call(v, t, function (t) {
                    t.active && ((h = !0), (g[t.name] = t.nextStyle));
                  }),
                    h && v.$el.css(g);
                });
              }
            }
          }
          function a() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var t = this.queue.shift();
              o.call(this, t.options, !0, t.args);
            }
          }
          function u(t) {
            var e;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              'string' == typeof t
                ? ((e = {})[t] = 1)
                : (e =
                    'object' == (0, r.default)(t) && null != t
                      ? t
                      : this.props),
              p.call(this, e, v),
              d.call(this);
          }
          function f() {
            u.call(this), (this.el.style.display = 'none');
          }
          function l() {
            this.el.offsetHeight;
          }
          function d() {
            var t,
              e,
              n = [];
            for (t in (this.upstream && n.push(this.upstream), this.props))
              (e = this.props[t]).active && n.push(e.string);
            (n = n.join(',')),
              this.style !== n &&
                ((this.style = n), (this.el.style[N.transition.dom] = n));
          }
          function p(t, e, r) {
            var o,
              a,
              u,
              c,
              s = e !== v,
              f = {};
            for (o in t)
              (u = t[o]),
                o in $
                  ? (f.transform || (f.transform = {}), (f.transform[o] = u))
                  : (E.test(o) && (o = n(o)),
                    o in Q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
            for (o in f) {
              if (((u = f[o]), !(a = this.props[o]))) {
                if (!s) continue;
                a = i.call(this, o);
              }
              e.call(this, a, u);
            }
            r && c && r.call(this, c);
          }
          function v(t) {
            t.stop();
          }
          function g(t, e) {
            t.set(e);
          }
          function m(t) {
            this.$el.css(t);
          }
          function y(t, n) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var n,
                      r = this.children.length;
                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ''),
              (this.active = !1),
              H.keepInherited && !H.fallback)
            ) {
              var n = Y(this.el, 'transition');
              n && !T.test(n) && (this.upstream = n);
            }
            N.backface &&
              H.hideBackface &&
              z(this.el, N.backface.css, 'hidden');
          }),
            y('add', i),
            y('start', o),
            y('wait', function (t) {
              (t = c(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new W({
                      duration: t,
                      context: this,
                      complete: a,
                    })),
                    (this.active = !0));
            }),
            y('then', function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }),
                  void (this.timer.complete = a))
                : s(
                    'No active transition timer. Use start() or wait() before then().'
                  );
            }),
            y('next', a),
            y('stop', u),
            y('set', function (t) {
              u.call(this, t), p.call(this, t, g, m);
            }),
            y('show', function (t) {
              'string' != typeof t && (t = 'block'),
                (this.el.style.display = t);
            }),
            y('hide', f),
            y('redraw', l),
            y('destroy', function () {
              u.call(this),
                t.removeData(this.el, h),
                (this.$el = this.el = null);
            });
        }),
        F = f(j, function (e) {
          function n(e, n) {
            var r = t.data(e, h) || t.data(e, h, new j.Bare());
            return r.el || r.init(e), n ? r.start(n) : r;
          }
          e.init = function (e, r) {
            var i = t(e);
            if (!i.length) return this;
            if (1 === i.length) return n(i[0], r);
            var o = [];
            return (
              i.each(function (t, e) {
                o.push(n(e, r));
              }),
              (this.children = o),
              this
            );
          };
        }),
        k = f(function (t) {
          function e() {
            var t = this.get();
            this.update('auto');
            var e = this.get();
            return this.update(t), e;
          }
          function n(t) {
            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
            return (e ? o(e[1], e[2], e[3]) : t).replace(
              /#(\w)(\w)(\w)$/,
              '#$1$1$2$2$3$3'
            );
          }
          var i = 500,
            a = 'ease',
            u = 0;
          (t.init = function (t, e, n, r) {
            (this.$el = t), (this.el = t[0]);
            var o = e[0];
            n[2] && (o = n[2]),
              K[o] && (o = K[o]),
              (this.name = o),
              (this.type = n[1]),
              (this.duration = c(e[1], this.duration, i)),
              (this.ease = (function (t, e, n) {
                return void 0 !== e && (n = e), t in l ? t : n;
              })(e[2], this.ease, a)),
              (this.delay = c(e[3], this.delay, u)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = O.test(this.name)),
              (this.unit = r.unit || this.unit || H.defaultUnit),
              (this.angle = r.angle || this.angle || H.defaultAngle),
              H.fallback || r.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    A +
                    this.duration +
                    'ms' +
                    ('ease' != this.ease ? A + l[this.ease][0] : '') +
                    (this.delay ? A + this.delay + 'ms' : '')));
          }),
            (t.set = function (t) {
              (t = this.convert(t, this.type)), this.update(t), this.redraw();
            }),
            (t.transition = function (t) {
              (this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  'auto' == t && (t = e.call(this))),
                (this.nextStyle = t);
            }),
            (t.fallback = function (t) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == n && (n = this.convert(this.get(), this.type)),
                  'auto' == t && (t = e.call(this))),
                (this.tween = new V({
                  from: n,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (t.get = function () {
              return Y(this.el, this.name);
            }),
            (t.update = function (t) {
              z(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                z(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ('auto' == t && this.auto) return t;
              var i,
                o = 'number' == typeof t,
                a = 'string' == typeof t;
              switch (e) {
                case m:
                  if (o) return t;
                  if (a && '' === t.replace(g, '')) return +t;
                  i = 'number(unitless)';
                  break;
                case y:
                  if (a) {
                    if ('' === t && this.original) return this.original;
                    if (e.test(t))
                      return '#' == t.charAt(0) && 7 == t.length ? t : n(t);
                  }
                  i = 'hex or rgb string';
                  break;
                case _:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  i = 'number(px) or string(unit)';
                  break;
                case b:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  i = 'number(px) or string(unit or %)';
                  break;
                case I:
                  if (o) return t + this.angle;
                  if (a && e.test(t)) return t;
                  i = 'number(deg) or string(angle)';
                  break;
                case w:
                  if (o) return t;
                  if (a && b.test(t)) return t;
                  i = 'number(unitless) or string(unit or %)';
              }
              return (
                (function (t, e) {
                  s(
                    'Type warning: Expected: [' +
                      t +
                      '] Got: [' +
                      (0, r.default)(e) +
                      '] ' +
                      e
                  );
                })(i, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        G = f(k, function (t, e) {
          t.init = function () {
            e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), y));
          };
        }),
        X = f(k, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            });
        }),
        U = f(k, function (t, e) {
          function n(t, e) {
            var n, r, i, o, a;
            for (n in t)
              (i = (o = $[n])[0]),
                (r = o[1] || n),
                (a = this.convert(t[n], i)),
                e.call(this, r, a, i);
          }
          (t.init = function () {
            e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                $.perspective &&
                  H.perspective &&
                  ((this.current.perspective = H.perspective),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (t.set = function (t) {
              n.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                z(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new B({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var n,
                r = {};
              for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(r));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new B({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (t.update = function () {
              z(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                n = '';
              for (e in t) n += e + '(' + t[e] + ') ';
              return n;
            }),
            (t.values = function (t) {
              var e,
                r = {};
              return (
                n.call(this, t, function (t, n, i) {
                  (r[t] = n),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf('scale') && (e = 1),
                      (this.current[t] = this.convert(e, i)));
                }),
                r
              );
            });
        }),
        V = f(function (e) {
          function n() {
            var t,
              e,
              r,
              i = c.length;
            if (i) for (D(n), e = M(), t = i; t--; ) (r = c[t]) && r.render(e);
          }
          var r = { ease: l.ease[1], from: 0, to: 1 };
          (e.init = function (t) {
            (this.duration = t.duration || 0), (this.delay = t.delay || 0);
            var e = t.ease || r.ease;
            l[e] && (e = l[e][1]),
              'function' != typeof e && (e = r.ease),
              (this.ease = e),
              (this.update = t.update || a),
              (this.complete = t.complete || a),
              (this.context = t.context || this),
              (this.name = t.name);
            var n = t.from,
              i = t.to;
            void 0 === n && (n = r.from),
              void 0 === i && (i = r.to),
              (this.unit = t.unit || ''),
              'number' == typeof n && 'number' == typeof i
                ? ((this.begin = n), (this.change = i - n))
                : this.format(i, n),
              (this.value = this.begin + this.unit),
              (this.start = M()),
              !1 !== t.autoplay && this.play();
          }),
            (e.play = function () {
              var t;
              this.active ||
                (this.start || (this.start = M()),
                (this.active = !0),
                (t = this),
                1 === c.push(t) && D(n));
            }),
            (e.stop = function () {
              var e, n, r;
              this.active &&
                ((this.active = !1),
                (e = this),
                (r = t.inArray(e, c)) >= 0 &&
                  ((n = c.slice(r + 1)),
                  (c.length = r),
                  n.length && (c = c.concat(n))));
            }),
            (e.render = function (t) {
              var e,
                n = t - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var r = this.ease(n, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, n) {
                        return o(
                          t[0] + n * (e[0] - t[0]),
                          t[1] + n * (e[1] - t[1]),
                          t[2] + n * (e[2] - t[2])
                        );
                      })(this.startRGB, this.endRGB, r)
                    : (function (t) {
                        return Math.round(t * s) / s;
                      })(this.begin + r * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (e.format = function (t, e) {
              if (((e += ''), '#' == (t += '').charAt(0)))
                return (
                  (this.startRGB = i(e)),
                  (this.endRGB = i(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = e.replace(g, '');
                n !== t.replace(g, '') && u('tween', e, t), (this.unit = n);
              }
              (e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e);
            }),
            (e.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = a);
            });
          var c = [],
            s = 1e3;
        }),
        W = f(V, function (t) {
          (t.init = function (t) {
            (this.duration = t.duration || 0),
              (this.complete = t.complete || a),
              (this.context = t.context),
              this.play();
          }),
            (t.render = function (t) {
              t - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        B = f(V, function (t, e) {
          (t.init = function (t) {
            var e, n;
            for (e in ((this.context = t.context),
            (this.update = t.update),
            (this.tweens = []),
            (this.current = t.current),
            t.values))
              (n = t.values[e]),
                this.current[e] !== n &&
                  this.tweens.push(
                    new V({
                      name: e,
                      from: this.current[e],
                      to: n,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (t.render = function (t) {
              var e,
                n,
                r = !1;
              for (e = this.tweens.length; e--; )
                (n = this.tweens[e]).context &&
                  (n.render(t), (this.current[n.name] = n.value), (r = !0));
              return r
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        H = (e.config = {
          debug: !1,
          defaultUnit: 'px',
          defaultAngle: 'deg',
          keepInherited: !1,
          hideBackface: !1,
          perspective: '',
          fallback: !N.transition,
          agentTests: [],
        });
      (e.fallback = function (t) {
        if (!N.transition) return (H.fallback = !0);
        H.agentTests.push('(' + t + ')');
        var e = new RegExp(H.agentTests.join('|'), 'i');
        H.fallback = e.test(navigator.userAgent);
      }),
        e.fallback('6.0.[2-5] Safari'),
        (e.tween = function (t) {
          return new V(t);
        }),
        (e.delay = function (t, e, n) {
          return new W({ complete: e, duration: t, context: n });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        });
      var z = t.style,
        Y = t.css,
        K = { transform: N.transform && N.transform.css },
        Q = {
          color: [G, y],
          background: [G, y, 'background-color'],
          'outline-color': [G, y],
          'border-color': [G, y],
          'border-top-color': [G, y],
          'border-right-color': [G, y],
          'border-bottom-color': [G, y],
          'border-left-color': [G, y],
          'border-width': [k, _],
          'border-top-width': [k, _],
          'border-right-width': [k, _],
          'border-bottom-width': [k, _],
          'border-left-width': [k, _],
          'border-spacing': [k, _],
          'letter-spacing': [k, _],
          margin: [k, _],
          'margin-top': [k, _],
          'margin-right': [k, _],
          'margin-bottom': [k, _],
          'margin-left': [k, _],
          padding: [k, _],
          'padding-top': [k, _],
          'padding-right': [k, _],
          'padding-bottom': [k, _],
          'padding-left': [k, _],
          'outline-width': [k, _],
          opacity: [k, m],
          top: [k, b],
          right: [k, b],
          bottom: [k, b],
          left: [k, b],
          'font-size': [k, b],
          'text-indent': [k, b],
          'word-spacing': [k, b],
          width: [k, b],
          'min-width': [k, b],
          'max-width': [k, b],
          height: [k, b],
          'min-height': [k, b],
          'max-height': [k, b],
          'line-height': [k, w],
          'scroll-top': [X, m, 'scrollTop'],
          'scroll-left': [X, m, 'scrollLeft'],
        },
        $ = {};
      N.transform &&
        ((Q.transform = [U]),
        ($ = {
          x: [b, 'translateX'],
          y: [b, 'translateY'],
          rotate: [I],
          rotateX: [I],
          rotateY: [I],
          scale: [m],
          scaleX: [m],
          scaleY: [m],
          skew: [I],
          skewX: [I],
          skewY: [I],
        })),
        N.transform &&
          N.backface &&
          (($.z = [b, 'translateZ']),
          ($.rotateZ = [I]),
          ($.scaleZ = [m]),
          ($.perspective = [_]));
      var q = /ms/,
        Z = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, n) {
    var r = n(14),
      i = n(40),
      o = n(146),
      a = n(71),
      u = n(27),
      c = n(73),
      s = n(9),
      f = n(80),
      l = Object.getOwnPropertyDescriptor;
    e.f = r
      ? l
      : function (t, e) {
          if (((t = u(t)), (e = c(e)), f))
            try {
              return l(t, e);
            } catch (t) {}
          if (s(t, e)) return a(!i(o.f, t, e), t[e]);
        };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, n) {
    var r = n(1).TypeError;
    t.exports = function (t) {
      if (null == t) throw r("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(149),
      i = n(74);
    t.exports = function (t) {
      var e = r(t, 'string');
      return i(e) ? e : e + '';
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(28),
      o = n(7),
      a = n(150),
      u = n(75),
      c = r.Object;
    t.exports = u
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          var e = i('Symbol');
          return o(e) && a(e.prototype, c(t));
        };
  },
  function (t, e, n) {
    var r = n(76);
    t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var r = n(151),
      i = n(19);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  },
  function (t, e, n) {
    var r = n(1),
      i = n(78),
      o = n(9),
      a = n(79),
      u = n(76),
      c = n(75),
      s = i('wks'),
      f = r.Symbol,
      l = f && f.for,
      d = c ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      if (!o(s, t) || (!u && 'string' != typeof s[t])) {
        var e = 'Symbol.' + t;
        u && o(f, t) ? (s[t] = f[t]) : (s[t] = c && l ? l(e) : d(e));
      }
      return s[t];
    };
  },
  function (t, e, n) {
    var r = n(157),
      i = n(41);
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.19.0',
      mode: r ? 'pure' : 'global',
      copyright: 'Â© 2021 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (t, e, n) {
    var r = n(5),
      i = 0,
      o = Math.random(),
      a = r((1).toString);
    t.exports = function (t) {
      return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++i + o, 36);
    };
  },
  function (t, e, n) {
    var r = n(14),
      i = n(19),
      o = n(81);
    t.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(1),
      i = n(20),
      o = r.document,
      a = i(o) && i(o.createElement);
    t.exports = function (t) {
      return a ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(7),
      o = n(41),
      a = r(Function.toString);
    i(o.inspectSource) ||
      (o.inspectSource = function (t) {
        return a(t);
      }),
      (t.exports = o.inspectSource);
  },
  function (t, e, n) {
    var r = n(78),
      i = n(79),
      o = r('keys');
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(9),
      o = n(27),
      a = n(85).indexOf,
      u = n(44),
      c = r([].push);
    t.exports = function (t, e) {
      var n,
        r = o(t),
        s = 0,
        f = [];
      for (n in r) !i(u, n) && i(r, n) && c(f, n);
      for (; e.length > s; ) i(r, (n = e[s++])) && (~a(f, n) || c(f, n));
      return f;
    };
  },
  function (t, e, n) {
    var r = n(27),
      i = n(166),
      o = n(167),
      a = function (t) {
        return function (e, n, a) {
          var u,
            c = r(e),
            s = o(c),
            f = i(a, s);
          if (t && n != n) {
            for (; s > f; ) if ((u = c[f++]) != u) return !0;
          } else
            for (; s > f; f++)
              if ((t || f in c) && c[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(46);
    n.d(e, 'createStore', function () {
      return r.default;
    });
    var i = n(90);
    n.d(e, 'combineReducers', function () {
      return i.default;
    });
    var o = n(92);
    n.d(e, 'bindActionCreators', function () {
      return o.default;
    });
    var a = n(93);
    n.d(e, 'applyMiddleware', function () {
      return a.default;
    });
    var u = n(47);
    n.d(e, 'compose', function () {
      return u.default;
    });
    n(91);
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(177),
      i = n(182),
      o = n(184),
      a = '[object Object]',
      u = Function.prototype,
      c = Object.prototype,
      s = u.toString,
      f = c.hasOwnProperty,
      l = s.call(Object);
    e.default = function (t) {
      if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
      var e = Object(i.default)(t);
      if (null === e) return !0;
      var n = f.call(e, 'constructor') && e.constructor;
      return 'function' == typeof n && n instanceof n && s.call(n) == l;
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(178).default.Symbol;
    e.default = r;
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'default', function () {
        return o;
      });
    var r = n(46);
    n(88), n(91);
    function i(t, e) {
      var n = e && e.type;
      return (
        'Given action ' +
        ((n && '"' + n.toString() + '"') || 'an action') +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function o(t) {
      for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
        var a = e[o];
        0, 'function' == typeof t[a] && (n[a] = t[a]);
      }
      var u,
        c = Object.keys(n);
      try {
        !(function (t) {
          Object.keys(t).forEach(function (e) {
            var n = t[e];
            if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              n(void 0, {
                type:
                  '@@redux/PROBE_UNKNOWN_ACTION_' +
                  Math.random().toString(36).substring(7).split('').join('.'),
              })
            )
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined when probed with a random type. Don\'t try to handle ' +
                  r.ActionTypes.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(n);
      } catch (t) {
        u = t;
      }
      return function () {
        var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          e = arguments[1];
        if (u) throw u;
        for (var r = !1, o = {}, a = 0; a < c.length; a++) {
          var s = c[a],
            f = n[s],
            l = t[s],
            d = f(l, e);
          if (void 0 === d) {
            var p = i(s, e);
            throw new Error(p);
          }
          (o[s] = d), (r = r || d !== l);
        }
        return r ? o : t;
      };
    }
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      'undefined' != typeof console &&
        'function' == typeof console.error &&
        console.error(t);
      try {
        throw new Error(t);
      } catch (t) {}
    }
    n.r(e),
      n.d(e, 'default', function () {
        return r;
      });
  },
  function (t, e, n) {
    'use strict';
    function r(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }
    function i(t, e) {
      if ('function' == typeof t) return r(t, e);
      if ('object' != typeof t || null === t)
        throw new Error(
          'bindActionCreators expected an object or a function, instead received ' +
            (null === t ? 'null' : typeof t) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
        var a = n[o],
          u = t[a];
        'function' == typeof u && (i[a] = r(u, e));
      }
      return i;
    }
    n.r(e),
      n.d(e, 'default', function () {
        return i;
      });
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'default', function () {
        return o;
      });
    var r = n(47),
      i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    function o() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return function (t) {
        return function (n, o, a) {
          var u,
            c = t(n, o, a),
            s = c.dispatch,
            f = {
              getState: c.getState,
              dispatch: function (t) {
                return s(t);
              },
            };
          return (
            (u = e.map(function (t) {
              return t(f);
            })),
            (s = r.default.apply(void 0, u)(c.dispatch)),
            i({}, c, { dispatch: s })
          );
        };
      };
    }
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
    e.ActionTypeConsts = {
      TRANSFORM_MOVE: 'TRANSFORM_MOVE',
      TRANSFORM_SCALE: 'TRANSFORM_SCALE',
      TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
      TRANSFORM_SKEW: 'TRANSFORM_SKEW',
      STYLE_OPACITY: 'STYLE_OPACITY',
      STYLE_SIZE: 'STYLE_SIZE',
      STYLE_FILTER: 'STYLE_FILTER',
      STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
      STYLE_BORDER: 'STYLE_BORDER',
      STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
      PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
      GENERAL_DISPLAY: 'GENERAL_DISPLAY',
      GENERAL_START_ACTION: 'GENERAL_START_ACTION',
      GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
      GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
      GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
      GENERAL_LOOP: 'GENERAL_LOOP',
      STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW',
    };
    e.ActionAppliesTo = {
      ELEMENT: 'ELEMENT',
      ELEMENT_CLASS: 'ELEMENT_CLASS',
      TRIGGER_ELEMENT: 'TRIGGER_ELEMENT',
    };
  },
  function (t, e, n) {
    var r = n(96)(n(262));
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(10),
      i = n(17),
      o = n(36);
    t.exports = function (t) {
      return function (e, n, a) {
        var u = Object(e);
        if (!i(e)) {
          var c = r(n, 3);
          (e = o(e)),
            (n = function (t) {
              return c(u[t], t, u);
            });
        }
        var s = t(e, n, a);
        return s > -1 ? u[c ? e[s] : s] : void 0;
      };
    };
  },
  function (t, e, n) {
    var r = n(32),
      i = n(204),
      o = n(205),
      a = n(206),
      u = n(207),
      c = n(208);
    function s(t) {
      var e = (this.__data__ = new r(t));
      this.size = e.size;
    }
    (s.prototype.clear = i),
      (s.prototype.delete = o),
      (s.prototype.get = a),
      (s.prototype.has = u),
      (s.prototype.set = c),
      (t.exports = s);
  },
  function (t, e, n) {
    var r = n(16),
      i = n(8),
      o = '[object AsyncFunction]',
      a = '[object Function]',
      u = '[object GeneratorFunction]',
      c = '[object Proxy]';
    t.exports = function (t) {
      if (!i(t)) return !1;
      var e = r(t);
      return e == a || e == u || e == o || e == c;
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = 'object' == typeof e && e && e.Object === Object && e;
      t.exports = n;
    }.call(this, n(26)));
  },
  function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    };
  },
  function (t, e, n) {
    var r = n(227),
      i = n(12);
    t.exports = function t(e, n, o, a, u) {
      return (
        e === n ||
        (null == e || null == n || (!i(e) && !i(n))
          ? e != e && n != n
          : r(e, n, o, a, t, u))
      );
    };
  },
  function (t, e, n) {
    var r = n(228),
      i = n(231),
      o = n(232),
      a = 1,
      u = 2;
    t.exports = function (t, e, n, c, s, f) {
      var l = n & a,
        d = t.length,
        p = e.length;
      if (d != p && !(l && p > d)) return !1;
      var v = f.get(t),
        h = f.get(e);
      if (v && h) return v == e && h == t;
      var g = -1,
        E = !0,
        m = n & u ? new r() : void 0;
      for (f.set(t, e), f.set(e, t); ++g < d; ) {
        var y = t[g],
          _ = e[g];
        if (c) var b = l ? c(_, y, g, e, t, f) : c(y, _, g, t, e, f);
        if (void 0 !== b) {
          if (b) continue;
          E = !1;
          break;
        }
        if (m) {
          if (
            !i(e, function (t, e) {
              if (!o(m, e) && (y === t || s(y, t, n, c, f))) return m.push(e);
            })
          ) {
            E = !1;
            break;
          }
        } else if (y !== _ && !s(y, _, n, c, f)) {
          E = !1;
          break;
        }
      }
      return f.delete(t), f.delete(e), E;
    };
  },
  function (t, e, n) {
    var r = n(52),
      i = n(2);
    t.exports = function (t, e, n) {
      var o = e(t);
      return i(t) ? o : r(o, n(t));
    };
  },
  function (t, e, n) {
    var r = n(239),
      i = n(105),
      o = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      u = a
        ? function (t) {
            return null == t
              ? []
              : ((t = Object(t)),
                r(a(t), function (e) {
                  return o.call(t, e);
                }));
          }
        : i;
    t.exports = u;
  },
  function (t, e) {
    t.exports = function () {
      return [];
    };
  },
  function (t, e, n) {
    var r = n(240),
      i = n(37),
      o = n(2),
      a = n(53),
      u = n(54),
      c = n(55),
      s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      var n = o(t),
        f = !n && i(t),
        l = !n && !f && a(t),
        d = !n && !f && !l && c(t),
        p = n || f || l || d,
        v = p ? r(t.length, String) : [],
        h = v.length;
      for (var g in t)
        (!e && !s.call(t, g)) ||
          (p &&
            ('length' == g ||
              (l && ('offset' == g || 'parent' == g)) ||
              (d &&
                ('buffer' == g || 'byteLength' == g || 'byteOffset' == g)) ||
              u(g, h))) ||
          v.push(g);
      return v;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return t(e(n));
      };
    };
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'WeakMap');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(8);
    t.exports = function (t) {
      return t == t && !r(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
        i[n] = e(t[n], n, t);
      return i;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (e(t[o], o, t)) return o;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(263);
    t.exports = function (t) {
      var e = r(t),
        n = e % 1;
      return e == e ? (n ? e - n : e) : 0;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.inQuad = function (t) {
        return Math.pow(t, 2);
      }),
      (e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1);
      }),
      (e.inOutQuad = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
        return -0.5 * ((t -= 2) * t - 2);
      }),
      (e.inCubic = function (t) {
        return Math.pow(t, 3);
      }),
      (e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1;
      }),
      (e.inOutCubic = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
        return 0.5 * (Math.pow(t - 2, 3) + 2);
      }),
      (e.inQuart = function (t) {
        return Math.pow(t, 4);
      }),
      (e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1);
      }),
      (e.inOutQuart = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
        return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
      }),
      (e.inQuint = function (t) {
        return Math.pow(t, 5);
      }),
      (e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1;
      }),
      (e.inOutQuint = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
        return 0.5 * (Math.pow(t - 2, 5) + 2);
      }),
      (e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      }),
      (e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2));
      }),
      (e.inOutSine = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
      }),
      (e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      }),
      (e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      }),
      (e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
        return 0.5 * (2 - Math.pow(2, -10 * --t));
      }),
      (e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
      }),
      (e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2));
      }),
      (e.inOutCirc = function (t) {
        if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      }),
      (e.outBounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.inBack = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.inOutBack = function (t) {
        var e = o;
        if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
        return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.inElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = 0.3);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        return (
          -r *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t - e) * (2 * Math.PI)) / n)
        );
      }),
      (e.outElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = 0.3);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        return (
          r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1
        );
      }),
      (e.inOutElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (2 == (t /= 0.5)) return 1;
        n || (n = 0.3 * 1.5);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        if (t < 1)
          return (
            r *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / n) *
            -0.5
          );
        return (
          r *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / n) *
            0.5 +
          1
        );
      }),
      (e.swingFromTo = function (t) {
        var e = o;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.bounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.bouncePast = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
          : t < 2.5 / 2.75
          ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
          : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
      }),
      (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
    var i = r(n(117)),
      o = 1.70158,
      a = (0, i.default)(0.25, 0.1, 0.25, 1);
    e.ease = a;
    var u = (0, i.default)(0.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, 0.58, 1);
    e.easeOut = c;
    var s = (0, i.default)(0.42, 0, 0.58, 1);
    e.easeInOut = s;
  },
  function (t, e) {
    var n = 4,
      r = 0.001,
      i = 1e-7,
      o = 10,
      a = 11,
      u = 1 / (a - 1),
      c = 'function' == typeof Float32Array;
    function s(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function f(t, e) {
      return 3 * e - 6 * t;
    }
    function l(t) {
      return 3 * t;
    }
    function d(t, e, n) {
      return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
    }
    function p(t, e, n) {
      return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
    }
    t.exports = function (t, e, s, f) {
      if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
        throw new Error('bezier x values must be in [0, 1] range');
      var l = c ? new Float32Array(a) : new Array(a);
      if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);
      function h(e) {
        for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
        var h = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
          g = p(h, t, s);
        return g >= r
          ? (function (t, e, r, i) {
              for (var o = 0; o < n; ++o) {
                var a = p(e, r, i);
                if (0 === a) return e;
                e -= (d(e, r, i) - t) / a;
              }
              return e;
            })(e, h, t, s)
          : 0 === g
          ? h
          : (function (t, e, n, r, a) {
              var u,
                c,
                s = 0;
              do {
                (u = d((c = e + (n - e) / 2), r, a) - t) > 0
                  ? (n = c)
                  : (e = c);
              } while (Math.abs(u) > i && ++s < o);
              return c;
            })(e, c, c + u, t, s);
      }
      return function (n) {
        return t === e && s === f
          ? n
          : 0 === n
          ? 0
          : 1 === n
          ? 1
          : d(h(n), e, f);
      };
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(119)),
      i = n(0),
      o = n(18);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.optimizeFloat = c),
      (e.createBezierEasing = function (t) {
        return u.default.apply(void 0, (0, r.default)(t));
      }),
      (e.applyEasing = function (t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e);
      });
    var a = o(n(116)),
      u = i(n(117));
    function c(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = Math.pow(n, e),
        i = Number(Math.round(t * r) / r);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
  },
  function (t, e, n) {
    var r = n(266),
      i = n(267),
      o = n(268);
    t.exports = function (t) {
      return r(t) || i(t) || o();
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(21));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isPluginType = function (t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
      }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginDuration =
        e.getPluginOrigin =
        e.getPluginConfig =
          void 0);
    var i = n(270),
      o = n(4),
      a = n(48),
      u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: i.getPluginConfig,
        getOrigin: i.getPluginOrigin,
        getDuration: i.getPluginDuration,
        getDestination: i.getPluginDestination,
        createInstance: i.createPluginInstance,
        render: i.renderPlugin,
        clear: i.clearPlugin,
      });
    var c = function (t) {
        return function (e) {
          if (!a.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var n = u[e];
          if (!n) throw new Error('IX2 no plugin configured for: '.concat(e));
          var r = n[t];
          if (!r) throw new Error('IX2 invalid plugin method: '.concat(t));
          return r;
        };
      },
      s = c('getConfig');
    e.getPluginConfig = s;
    var f = c('getOrigin');
    e.getPluginOrigin = f;
    var l = c('getDuration');
    e.getPluginDuration = l;
    var d = c('getDestination');
    e.getPluginDestination = d;
    var p = c('createInstance');
    e.createPluginInstance = p;
    var v = c('render');
    e.renderPlugin = v;
    var h = c('clear');
    e.clearPlugin = h;
  },
  function (t, e, n) {
    var r = n(122),
      i = n(277)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(275),
      i = n(36);
    t.exports = function (t, e) {
      return t && r(t, e, i);
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(119)),
      i = n(18),
      o = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.observeRequests = function (t) {
        P({
          store: t,
          select: function (t) {
            var e = t.ixRequest;
            return e.preview;
          },
          onChange: et,
        }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.playback;
            },
            onChange: rt,
          }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.stop;
            },
            onChange: it,
          }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.clear;
            },
            onChange: ot,
          });
      }),
      (e.startEngine = at),
      (e.stopEngine = ut),
      (e.stopAllActionGroups = ht),
      (e.stopActionGroup = gt),
      (e.startActionGroup = Et);
    var a = o(n(31)),
      u = o(n(284)),
      c = o(n(95)),
      s = o(n(60)),
      f = o(n(285)),
      l = o(n(291)),
      d = o(n(303)),
      p = o(n(304)),
      v = o(n(305)),
      h = o(n(308)),
      g = n(4),
      E = n(15),
      m = n(65),
      y = i(n(311)),
      _ = o(n(312)),
      b = Object.keys(g.QuickEffectIds),
      I = function (t) {
        return b.includes(t);
      },
      w = g.IX2EngineConstants,
      T = w.COLON_DELIMITER,
      O = w.BOUNDARY_SELECTOR,
      A = w.HTML_ELEMENT,
      x = w.RENDER_GENERAL,
      S = w.W_MOD_IX,
      R = E.IX2VanillaUtils,
      C = R.getAffectedElements,
      N = R.getElementId,
      L = R.getDestinationValues,
      P = R.observeStore,
      D = R.getInstanceId,
      M = R.renderHTMLElement,
      j = R.clearAllStyles,
      F = R.getMaxDurationItemIndex,
      k = R.getComputedStyle,
      G = R.getInstanceOrigin,
      X = R.reduceListToGroup,
      U = R.shouldNamespaceEventParameter,
      V = R.getNamespacedParameterId,
      W = R.shouldAllowMediaQuery,
      B = R.cleanupHTMLElement,
      H = R.stringifyTarget,
      z = R.mediaQueriesEqual,
      Y = R.shallowEqual,
      K = E.IX2VanillaPlugins,
      Q = K.isPluginType,
      $ = K.createPluginInstance,
      q = K.getPluginDuration,
      Z = navigator.userAgent,
      J = Z.match(/iPad/i) || Z.match(/iPhone/),
      tt = 12;
    function et(t, e) {
      var n = t.rawData,
        r = function () {
          at({ store: e, rawData: n, allowEvents: !0 }), nt();
        };
      t.defer ? setTimeout(r, 0) : r();
    }
    function nt() {
      document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
    }
    function rt(t, e) {
      var n = t.actionTypeId,
        r = t.actionListId,
        i = t.actionItemId,
        o = t.eventId,
        a = t.allowEvents,
        u = t.immediate,
        c = t.testManual,
        s = t.verbose,
        f = void 0 === s || s,
        l = t.rawData;
      if (r && i && l && u) {
        var d = l.actionLists[r];
        d && (l = X({ actionList: d, actionItemId: i, rawData: l }));
      }
      if (
        (at({ store: e, rawData: l, allowEvents: a, testManual: c }),
        (r && n === g.ActionTypeConsts.GENERAL_START_ACTION) || I(n))
      ) {
        gt({ store: e, actionListId: r }),
          vt({ store: e, actionListId: r, eventId: o });
        var p = Et({
          store: e,
          eventId: o,
          actionListId: r,
          immediate: u,
          verbose: f,
        });
        f &&
          p &&
          e.dispatch(
            (0, m.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u })
          );
      }
    }
    function it(t, e) {
      var n = t.actionListId;
      n ? gt({ store: e, actionListId: n }) : ht({ store: e }), ut(e);
    }
    function ot(t, e) {
      ut(e), j({ store: e, elementApi: y });
    }
    function at(t) {
      var e,
        n = t.store,
        i = t.rawData,
        o = t.allowEvents,
        a = t.testManual,
        u = n.getState().ixSession;
      i && n.dispatch((0, m.rawDataImported)(i)),
        u.active ||
          (n.dispatch(
            (0, m.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(O)),
              reducedMotion:
                document.body.hasAttribute('data-wf-ix-vacation') &&
                window.matchMedia('(prefers-reduced-motion)').matches,
            })
          ),
          o &&
            ((function (t) {
              var e = t.getState().ixData.eventTypeMap;
              ft(t),
                (0, v.default)(e, function (e, n) {
                  var i = _.default[n];
                  i
                    ? (function (t) {
                        var e = t.logic,
                          n = t.store,
                          i = t.events;
                        !(function (t) {
                          if (J) {
                            var e = {},
                              n = '';
                            for (var r in t) {
                              var i = t[r],
                                o = i.eventTypeId,
                                a = i.target,
                                u = y.getQuerySelector(a);
                              e[u] ||
                                (o !== g.EventTypeConsts.MOUSE_CLICK &&
                                  o !== g.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                ((e[u] = !0),
                                (n +=
                                  u +
                                  '{cursor: pointer;touch-action: manipulation;}'));
                            }
                            if (n) {
                              var c = document.createElement('style');
                              (c.textContent = n), document.body.appendChild(c);
                            }
                          }
                        })(i);
                        var o = e.types,
                          a = e.handler,
                          u = n.getState().ixData,
                          l = u.actionLists,
                          d = lt(i, pt);
                        if ((0, f.default)(d)) {
                          (0, v.default)(d, function (t, e) {
                            var o = i[e],
                              a = o.action,
                              f = o.id,
                              d = o.mediaQueries,
                              p = void 0 === d ? u.mediaQueryKeys : d,
                              v = a.config.actionListId;
                            if (
                              (z(p, u.mediaQueryKeys) ||
                                n.dispatch((0, m.mediaQueriesDefined)()),
                              a.actionTypeId ===
                                g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
                            ) {
                              var h = Array.isArray(o.config)
                                ? o.config
                                : [o.config];
                              h.forEach(function (e) {
                                var i = e.continuousParameterGroupId,
                                  o = (0, s.default)(
                                    l,
                                    ''.concat(v, '.continuousParameterGroups'),
                                    []
                                  ),
                                  a = (0, c.default)(o, function (t) {
                                    var e = t.id;
                                    return e === i;
                                  }),
                                  u = (e.smoothing || 0) / 100,
                                  d = (e.restingState || 0) / 100;
                                a &&
                                  t.forEach(function (t, i) {
                                    var o = f + T + i;
                                    !(function (t) {
                                      var e = t.store,
                                        n = t.eventStateKey,
                                        i = t.eventTarget,
                                        o = t.eventId,
                                        a = t.eventConfig,
                                        u = t.actionListId,
                                        c = t.parameterGroup,
                                        f = t.smoothing,
                                        l = t.restingValue,
                                        d = e.getState(),
                                        p = d.ixData,
                                        v = d.ixSession,
                                        h = p.events[o],
                                        g = h.eventTypeId,
                                        E = {},
                                        m = {},
                                        _ = [],
                                        b = c.continuousActionGroups,
                                        I = c.id;
                                      U(g, a) && (I = V(n, I));
                                      var w =
                                        v.hasBoundaryNodes && i
                                          ? y.getClosestElement(i, O)
                                          : null;
                                      b.forEach(function (t) {
                                        var e = t.keyframe,
                                          n = t.actionItems;
                                        n.forEach(function (t) {
                                          var n = t.actionTypeId,
                                            o = t.config.target;
                                          if (o) {
                                            var a = o.boundaryMode ? w : null,
                                              u = H(o) + T + n;
                                            if (
                                              ((m[u] = (function () {
                                                var t,
                                                  e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                      ? arguments[0]
                                                      : [],
                                                  n =
                                                    arguments.length > 1
                                                      ? arguments[1]
                                                      : void 0,
                                                  i =
                                                    arguments.length > 2
                                                      ? arguments[2]
                                                      : void 0,
                                                  o = (0, r.default)(e);
                                                return (
                                                  o.some(function (e, r) {
                                                    return (
                                                      e.keyframe === n &&
                                                      ((t = r), !0)
                                                    );
                                                  }),
                                                  null == t &&
                                                    ((t = o.length),
                                                    o.push({
                                                      keyframe: n,
                                                      actionItems: [],
                                                    })),
                                                  o[t].actionItems.push(i),
                                                  o
                                                );
                                              })(m[u], e, t)),
                                              !E[u])
                                            ) {
                                              E[u] = !0;
                                              var c = t.config;
                                              C({
                                                config: c,
                                                event: h,
                                                eventTarget: i,
                                                elementRoot: a,
                                                elementApi: y,
                                              }).forEach(function (t) {
                                                _.push({ element: t, key: u });
                                              });
                                            }
                                          }
                                        });
                                      }),
                                        _.forEach(function (t) {
                                          var n = t.element,
                                            r = t.key,
                                            i = m[r],
                                            a = (0, s.default)(
                                              i,
                                              '[0].actionItems[0]',
                                              {}
                                            ),
                                            c = a.actionTypeId,
                                            d = Q(c) ? $(c)(n, a) : null,
                                            p = L(
                                              {
                                                element: n,
                                                actionItem: a,
                                                elementApi: y,
                                              },
                                              d
                                            );
                                          mt({
                                            store: e,
                                            element: n,
                                            eventId: o,
                                            actionListId: u,
                                            actionItem: a,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: I,
                                            actionGroups: i,
                                            smoothing: f,
                                            restingValue: l,
                                            pluginInstance: d,
                                          });
                                        });
                                    })({
                                      store: n,
                                      eventStateKey: o,
                                      eventTarget: t,
                                      eventId: f,
                                      eventConfig: e,
                                      actionListId: v,
                                      parameterGroup: a,
                                      smoothing: u,
                                      restingValue: d,
                                    });
                                  });
                              });
                            }
                            (a.actionTypeId ===
                              g.ActionTypeConsts.GENERAL_START_ACTION ||
                              I(a.actionTypeId)) &&
                              vt({ store: n, actionListId: v, eventId: f });
                          });
                          var p = function (t) {
                              var e = n.getState(),
                                r = e.ixSession;
                              dt(d, function (e, o, c) {
                                var s = i[o],
                                  f = r.eventState[c],
                                  l = s.action,
                                  d = s.mediaQueries,
                                  p = void 0 === d ? u.mediaQueryKeys : d;
                                if (W(p, r.mediaQueryKey)) {
                                  var v = function () {
                                    var r =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {},
                                      i = a(
                                        {
                                          store: n,
                                          element: e,
                                          event: s,
                                          eventConfig: r,
                                          nativeEvent: t,
                                          eventStateKey: c,
                                        },
                                        f
                                      );
                                    Y(i, f) ||
                                      n.dispatch(
                                        (0, m.eventStateChanged)(c, i)
                                      );
                                  };
                                  if (
                                    l.actionTypeId ===
                                    g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                  ) {
                                    var h = Array.isArray(s.config)
                                      ? s.config
                                      : [s.config];
                                    h.forEach(v);
                                  } else v();
                                }
                              });
                            },
                            E = (0, h.default)(p, tt),
                            _ = function (t) {
                              var e = t.target,
                                r = void 0 === e ? document : e,
                                i = t.types,
                                o = t.throttle;
                              i.split(' ')
                                .filter(Boolean)
                                .forEach(function (t) {
                                  var e = o ? E : p;
                                  r.addEventListener(t, e),
                                    n.dispatch(
                                      (0, m.eventListenerAdded)(r, [t, e])
                                    );
                                });
                            };
                          Array.isArray(o)
                            ? o.forEach(_)
                            : 'string' == typeof o && _(e);
                        }
                      })({ logic: i, store: t, events: e })
                    : console.warn('IX2 event type not configured: '.concat(n));
                }),
                t.getState().ixSession.eventListeners.length &&
                  (function (t) {
                    var e = function () {
                      ft(t);
                    };
                    st.forEach(function (n) {
                      window.addEventListener(n, e),
                        t.dispatch((0, m.eventListenerAdded)(window, [n, e]));
                    }),
                      e();
                  })(t);
            })(n),
            -1 === (e = document.documentElement).className.indexOf(S) &&
              (e.className += ' '.concat(S)),
            n.getState().ixSession.hasDefinedMediaQueries &&
              (function (t) {
                P({
                  store: t,
                  select: function (t) {
                    return t.ixSession.mediaQueryKey;
                  },
                  onChange: function () {
                    ut(t),
                      j({ store: t, elementApi: y }),
                      at({ store: t, allowEvents: !0 }),
                      nt();
                  },
                });
              })(n)),
          n.dispatch((0, m.sessionStarted)()),
          (function (t, e) {
            !(function n(r) {
              var i = t.getState(),
                o = i.ixSession,
                a = i.ixParameters;
              o.active &&
                (t.dispatch((0, m.animationFrameChanged)(r, a)),
                e
                  ? (function (t, e) {
                      var n = P({
                        store: t,
                        select: function (t) {
                          return t.ixSession.tick;
                        },
                        onChange: function (t) {
                          e(t), n();
                        },
                      });
                    })(t, n)
                  : requestAnimationFrame(n));
            })(window.performance.now());
          })(n, a));
    }
    function ut(t) {
      var e = t.getState().ixSession;
      e.active &&
        (e.eventListeners.forEach(ct), t.dispatch((0, m.sessionStopped)()));
    }
    function ct(t) {
      var e = t.target,
        n = t.listenerParams;
      e.removeEventListener.apply(e, n);
    }
    var st = ['resize', 'orientationchange'];
    function ft(t) {
      var e = t.getState(),
        n = e.ixSession,
        r = e.ixData,
        i = window.innerWidth;
      if (i !== n.viewportWidth) {
        var o = r.mediaQueries;
        t.dispatch((0, m.viewportWidthChanged)({ width: i, mediaQueries: o }));
      }
    }
    var lt = function (t, e) {
        return (0, l.default)((0, p.default)(t, e), d.default);
      },
      dt = function (t, e) {
        (0, v.default)(t, function (t, n) {
          t.forEach(function (t, r) {
            e(t, n, n + T + r);
          });
        });
      },
      pt = function (t) {
        var e = { target: t.target, targets: t.targets };
        return C({ config: e, elementApi: y });
      };
    function vt(t) {
      var e = t.store,
        n = t.actionListId,
        r = t.eventId,
        i = e.getState(),
        o = i.ixData,
        a = i.ixSession,
        u = o.actionLists,
        c = o.events[r],
        f = u[n];
      if (f && f.useFirstGroupAsInitialState) {
        var l = (0, s.default)(f, 'actionItemGroups[0].actionItems', []),
          d = (0, s.default)(c, 'mediaQueries', o.mediaQueryKeys);
        if (!W(d, a.mediaQueryKey)) return;
        l.forEach(function (t) {
          var i,
            o = t.config,
            a = t.actionTypeId,
            u =
              !0 ===
              (null == o
                ? void 0
                : null === (i = o.target) || void 0 === i
                ? void 0
                : i.useEventTarget)
                ? { target: c.target, targets: c.targets }
                : o,
            s = C({ config: u, event: c, elementApi: y }),
            f = Q(a);
          s.forEach(function (i) {
            var o = f ? $(a)(i, t) : null;
            mt({
              destination: L({ element: i, actionItem: t, elementApi: y }, o),
              immediate: !0,
              store: e,
              element: i,
              eventId: r,
              actionItem: t,
              actionListId: n,
              pluginInstance: o,
            });
          });
        });
      }
    }
    function ht(t) {
      var e = t.store,
        n = e.getState().ixInstances;
      (0, v.default)(n, function (t) {
        if (!t.continuous) {
          var n = t.actionListId,
            r = t.verbose;
          yt(t, e),
            r &&
              e.dispatch(
                (0, m.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function gt(t) {
      var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.eventStateKey,
        o = t.actionListId,
        a = e.getState(),
        u = a.ixInstances,
        c =
          a.ixSession.hasBoundaryNodes && r ? y.getClosestElement(r, O) : null;
      (0, v.default)(u, function (t) {
        var r = (0, s.default)(t, 'actionItem.config.target.boundaryMode'),
          a = !i || t.eventStateKey === i;
        if (t.actionListId === o && t.eventId === n && a) {
          if (c && r && !y.elementContains(c, t.element)) return;
          yt(t, e),
            t.verbose &&
              e.dispatch(
                (0, m.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Et(t) {
      var e,
        n = t.store,
        r = t.eventId,
        i = t.eventTarget,
        o = t.eventStateKey,
        a = t.actionListId,
        u = t.groupIndex,
        c = void 0 === u ? 0 : u,
        f = t.immediate,
        l = t.verbose,
        d = n.getState(),
        p = d.ixData,
        v = d.ixSession,
        h = p.events[r] || {},
        g = h.mediaQueries,
        E = void 0 === g ? p.mediaQueryKeys : g,
        m = (0, s.default)(p, 'actionLists.'.concat(a), {}),
        _ = m.actionItemGroups,
        b = m.useFirstGroupAsInitialState;
      if (!_ || !_.length) return !1;
      c >= _.length && (0, s.default)(h, 'config.loop') && (c = 0),
        0 === c && b && c++;
      var w =
          (0 === c || (1 === c && b)) &&
          I(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId)
            ? h.config.delay
            : void 0,
        T = (0, s.default)(_, [c, 'actionItems'], []);
      if (!T.length) return !1;
      if (!W(E, v.mediaQueryKey)) return !1;
      var A = v.hasBoundaryNodes && i ? y.getClosestElement(i, O) : null,
        x = F(T),
        S = !1;
      return (
        T.forEach(function (t, e) {
          var u = t.config,
            s = t.actionTypeId,
            d = Q(s),
            p = u.target;
          if (p) {
            var v = p.boundaryMode ? A : null;
            C({
              config: u,
              event: h,
              eventTarget: i,
              elementRoot: v,
              elementApi: y,
            }).forEach(function (u, p) {
              var v = d ? $(s)(u, t) : null,
                h = d ? q(s)(u, t) : null;
              S = !0;
              var g = x === e && 0 === p,
                E = k({ element: u, actionItem: t }),
                m = L({ element: u, actionItem: t, elementApi: y }, v);
              mt({
                store: n,
                element: u,
                actionItem: t,
                eventId: r,
                eventTarget: i,
                eventStateKey: o,
                actionListId: a,
                groupIndex: c,
                isCarrier: g,
                computedStyle: E,
                destination: m,
                immediate: f,
                verbose: l,
                pluginInstance: v,
                pluginDuration: h,
                instanceDelay: w,
              });
            });
          }
        }),
        S
      );
    }
    function mt(t) {
      var e,
        n,
        r = t.store,
        i = t.computedStyle,
        o = (0, u.default)(t, ['store', 'computedStyle']),
        c = o.element,
        s = o.actionItem,
        f = o.immediate,
        l = o.pluginInstance,
        d = o.continuous,
        p = o.restingValue,
        v = o.eventId,
        h = !d,
        E = D(),
        _ = r.getState(),
        b = _.ixElements,
        I = _.ixSession,
        w = _.ixData,
        T = N(b, c),
        O = (b[T] || {}).refState,
        A = y.getRefType(c),
        x = I.reducedMotion && g.ReducedMotionTypes[s.actionTypeId];
      if (x && d)
        switch (
          null === (e = w.events[v]) || void 0 === e ? void 0 : e.eventTypeId
        ) {
          case g.EventTypeConsts.MOUSE_MOVE:
          case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            n = p;
            break;
          default:
            n = 0.5;
        }
      var S = G(c, O, i, s, y, l);
      r.dispatch(
        (0, m.instanceAdded)(
          (0, a.default)(
            {
              instanceId: E,
              elementId: T,
              origin: S,
              refType: A,
              skipMotion: x,
              skipToValue: n,
            },
            o
          )
        )
      ),
        _t(document.body, 'ix2-animation-started', E),
        f
          ? (function (t, e) {
              var n = t.getState().ixParameters;
              t.dispatch((0, m.instanceStarted)(e, 0)),
                t.dispatch((0, m.animationFrameChanged)(performance.now(), n)),
                bt(t.getState().ixInstances[e], t);
            })(r, E)
          : (P({
              store: r,
              select: function (t) {
                return t.ixInstances[E];
              },
              onChange: bt,
            }),
            h && r.dispatch((0, m.instanceStarted)(E, I.tick)));
    }
    function yt(t, e) {
      _t(document.body, 'ix2-animation-stopping', {
        instanceId: t.id,
        state: e.getState(),
      });
      var n = t.elementId,
        r = t.actionItem,
        i = e.getState().ixElements[n] || {},
        o = i.ref;
      i.refType === A && B(o, r, y), e.dispatch((0, m.instanceRemoved)(t.id));
    }
    function _t(t, e, n) {
      var r = document.createEvent('CustomEvent');
      r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
    }
    function bt(t, e) {
      var n = t.active,
        r = t.continuous,
        i = t.complete,
        o = t.elementId,
        a = t.actionItem,
        u = t.actionTypeId,
        c = t.renderType,
        s = t.current,
        f = t.groupIndex,
        l = t.eventId,
        d = t.eventTarget,
        p = t.eventStateKey,
        v = t.actionListId,
        h = t.isCarrier,
        g = t.styleProp,
        E = t.verbose,
        _ = t.pluginInstance,
        b = e.getState(),
        I = b.ixData,
        w = b.ixSession,
        T = (I.events[l] || {}).mediaQueries,
        O = void 0 === T ? I.mediaQueryKeys : T;
      if (W(O, w.mediaQueryKey) && (r || n || i)) {
        if (s || (c === x && i)) {
          e.dispatch((0, m.elementStateChanged)(o, u, s, a));
          var S = e.getState().ixElements[o] || {},
            R = S.ref,
            C = S.refType,
            N = S.refState,
            L = N && N[u];
          switch (C) {
            case A:
              M(R, N, L, l, a, g, y, c, _);
          }
        }
        if (i) {
          if (h) {
            var P = Et({
              store: e,
              eventId: l,
              eventTarget: d,
              eventStateKey: p,
              actionListId: v,
              groupIndex: f + 1,
              verbose: E,
            });
            E &&
              !P &&
              e.dispatch(
                (0, m.actionListPlaybackChanged)({
                  actionListId: v,
                  isPlaying: !1,
                })
              );
          }
          yt(t, e);
        }
      }
    }
  },
  function (t, e, n) {
    var r = n(125);
    t.exports = function (t, e, n) {
      '__proto__' == e && r
        ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (t[e] = n);
    };
  },
  function (t, e, n) {
    var r = n(11),
      i = (function () {
        try {
          var t = r(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(8),
      i = Object.create,
      o = (function () {
        function t() {}
        return function (e) {
          if (!r(e)) return {};
          if (i) return i(e);
          t.prototype = e;
          var n = new t();
          return (t.prototype = void 0), n;
        };
      })();
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(325),
      i = n(326),
      o = r
        ? function (t) {
            return r.get(t);
          }
        : i;
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(327),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      for (
        var e = t.name + '', n = r[e], o = i.call(r, e) ? n.length : 0;
        o--;

      ) {
        var a = n[o],
          u = a.func;
        if (null == u || u == t) return a.name;
      }
      return e;
    };
  },
  function (t, e, n) {
    n(130),
      n(131),
      n(132),
      n(134),
      n(135),
      n(136),
      n(137),
      n(25),
      n(139),
      n(334),
      n(335),
      n(336),
      n(337),
      n(338),
      n(343),
      n(344),
      (t.exports = n(345));
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(13));
    !(function () {
      if ('undefined' != typeof window) {
        var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = !!t && parseInt(t[1], 10) >= 16;
        if (!('objectFit' in document.documentElement.style != !1) || e) {
          var n = function (t) {
              var e = t.parentNode;
              !(function (t) {
                var e = window.getComputedStyle(t, null),
                  n = e.getPropertyValue('position'),
                  r = e.getPropertyValue('overflow'),
                  i = e.getPropertyValue('display');
                (n && 'static' !== n) || (t.style.position = 'relative'),
                  'hidden' !== r && (t.style.overflow = 'hidden'),
                  (i && 'inline' !== i) || (t.style.display = 'block'),
                  0 === t.clientHeight && (t.style.height = '100%'),
                  -1 === t.className.indexOf('object-fit-polyfill') &&
                    (t.className += ' object-fit-polyfill');
              })(e),
                (function (t) {
                  var e = window.getComputedStyle(t, null),
                    n = {
                      'max-width': 'none',
                      'max-height': 'none',
                      'min-width': '0px',
                      'min-height': '0px',
                      top: 'auto',
                      right: 'auto',
                      bottom: 'auto',
                      left: 'auto',
                      'margin-top': '0px',
                      'margin-right': '0px',
                      'margin-bottom': '0px',
                      'margin-left': '0px',
                    };
                  for (var r in n)
                    e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r]);
                })(t),
                (t.style.position = 'absolute'),
                (t.style.height = '100%'),
                (t.style.width = 'auto'),
                t.clientWidth > e.clientWidth
                  ? ((t.style.top = '0'),
                    (t.style.marginTop = '0'),
                    (t.style.left = '50%'),
                    (t.style.marginLeft = t.clientWidth / -2 + 'px'))
                  : ((t.style.width = '100%'),
                    (t.style.height = 'auto'),
                    (t.style.left = '0'),
                    (t.style.marginLeft = '0'),
                    (t.style.top = '50%'),
                    (t.style.marginTop = t.clientHeight / -2 + 'px'));
            },
            i = function (t) {
              if (void 0 === t || t instanceof Event)
                t = document.querySelectorAll('[data-object-fit]');
              else if (t && t.nodeName) t = [t];
              else {
                if (
                  'object' !== (0, r.default)(t) ||
                  !t.length ||
                  !t[0].nodeName
                )
                  return !1;
                t = t;
              }
              for (var i = 0; i < t.length; i++)
                if (t[i].nodeName) {
                  var o = t[i].nodeName.toLowerCase();
                  if ('img' === o) {
                    if (e) continue;
                    t[i].complete
                      ? n(t[i])
                      : t[i].addEventListener('load', function () {
                          n(this);
                        });
                  } else
                    'video' === o
                      ? t[i].readyState > 0
                        ? n(t[i])
                        : t[i].addEventListener('loadedmetadata', function () {
                            n(this);
                          })
                      : n(t[i]);
                }
              return !0;
            };
          'loading' === document.readyState
            ? document.addEventListener('DOMContentLoaded', i)
            : i(),
            window.addEventListener('resize', i),
            (window.objectFitPolyfill = i);
        } else
          window.objectFitPolyfill = function () {
            return !1;
          };
      }
    })();
  },
  function (t, e, n) {
    'use strict';
    !(function () {
      function t(t) {
        Webflow.env('design') ||
          ($('video').each(function () {
            t && $(this).prop('autoplay') ? this.play() : this.pause();
          }),
          $('.w-background-video--control').each(function () {
            t ? n($(this)) : e($(this));
          }));
      }
      function e(t) {
        t.find('> span').each(function (t) {
          $(this).prop('hidden', function () {
            return 0 === t;
          });
        });
      }
      function n(t) {
        t.find('> span').each(function (t) {
          $(this).prop('hidden', function () {
            return 1 === t;
          });
        });
      }
      'undefined' != typeof window &&
        $(document).ready(function () {
          var r = window.matchMedia('(prefers-reduced-motion: reduce)');
          r.addEventListener('change', function (e) {
            t(!e.matches);
          }),
            r.matches && t(!1),
            $('video:not([autoplay])').each(function () {
              $(this)
                .parent()
                .find('.w-background-video--control')
                .each(function () {
                  e($(this));
                });
            }),
            $(document).on(
              'click',
              '.w-background-video--control',
              function (t) {
                if (!Webflow.env('design')) {
                  var r = $(t.currentTarget),
                    i = $('video#'.concat(r.attr('aria-controls'))).get(0);
                  if (i)
                    if (i.paused) {
                      var o = i.play();
                      n(r),
                        o &&
                          'function' == typeof o.catch &&
                          o.catch(function () {
                            e(r);
                          });
                    } else i.pause(), e(r);
                }
              }
            );
        });
    })();
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'brand',
      (t.exports = function (t) {
        var e,
          n = {},
          i = document,
          o = t('html'),
          a = t('body'),
          u = '.w-webflow-badge',
          c = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          f =
            'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
        function l() {
          var n =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            Boolean(i.webkitFullscreenElement);
          t(e).attr('style', n ? 'display: none !important;' : '');
        }
        function d() {
          var t = a.children(u),
            n = t.length && t.get(0) === e,
            i = r.env('editor');
          n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
        }
        return (
          (n.ready = function () {
            var n,
              r,
              a,
              u = o.attr('data-wf-status'),
              p = o.attr('data-wf-domain') || '';
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
              u &&
                !s &&
                ((e =
                  e ||
                  ((n = t('<a class="w-webflow-badge"></a>').attr(
                    'href',
                    'https://webflow.com?utm_campaign=brandjs'
                  )),
                  (r = t('<img>')
                    .attr(
                      'src',
                      'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg'
                    )
                    .attr('alt', '')
                    .css({ marginRight: '8px', width: '16px' })),
                  (a = t('<img>')
                    .attr(
                      'src',
                      'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg'
                    )
                    .attr('alt', 'Made in Webflow')),
                  n.append(r, a),
                  n[0])),
                d(),
                setTimeout(d, 500),
                t(i).off(f, l).on(f, l));
          }),
          n
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = window.$,
      i = n(69) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = { VERSION: '1.6.0-Webflow' },
        e = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        u = (n.concat, r.toString, r.hasOwnProperty),
        c = n.forEach,
        s = n.map,
        f = (n.reduce, n.reduceRight, n.filter),
        l = (n.every, n.some),
        d = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        v =
          (o.bind,
          (t.each = t.forEach =
            function (n, r, i) {
              if (null == n) return n;
              if (c && n.forEach === c) n.forEach(r, i);
              else if (n.length === +n.length) {
                for (var o = 0, a = n.length; o < a; o++)
                  if (r.call(i, n[o], o, n) === e) return;
              } else {
                var u = t.keys(n);
                for (o = 0, a = u.length; o < a; o++)
                  if (r.call(i, n[u[o]], u[o], n) === e) return;
              }
              return n;
            }));
      (t.map = t.collect =
        function (t, e, n) {
          var r = [];
          return null == t
            ? r
            : s && t.map === s
            ? t.map(e, n)
            : (v(t, function (t, i, o) {
                r.push(e.call(n, t, i, o));
              }),
              r);
        }),
        (t.find = t.detect =
          function (t, e, n) {
            var r;
            return (
              h(t, function (t, i, o) {
                if (e.call(n, t, i, o)) return (r = t), !0;
              }),
              r
            );
          }),
        (t.filter = t.select =
          function (t, e, n) {
            var r = [];
            return null == t
              ? r
              : f && t.filter === f
              ? t.filter(e, n)
              : (v(t, function (t, i, o) {
                  e.call(n, t, i, o) && r.push(t);
                }),
                r);
          });
      var h =
        (t.some =
        t.any =
          function (n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n
              ? o
              : l && n.some === l
              ? n.some(r, i)
              : (v(n, function (t, n, a) {
                  if (o || (o = r.call(i, t, n, a))) return e;
                }),
                !!o);
          });
      (t.contains = t.include =
        function (t, e) {
          return (
            null != t &&
            (d && t.indexOf === d
              ? -1 != t.indexOf(e)
              : h(t, function (t) {
                  return t === e;
                }))
          );
        }),
        (t.delay = function (t, e) {
          var n = a.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, n);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, n, r;
          return function () {
            e ||
              ((e = !0),
              (n = arguments),
              (r = this),
              i.frame(function () {
                (e = !1), t.apply(r, n);
              }));
          };
        }),
        (t.debounce = function (e, n, r) {
          var i,
            o,
            a,
            u,
            c,
            s = function s() {
              var f = t.now() - u;
              f < n
                ? (i = setTimeout(s, n - f))
                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
            };
          return function () {
            (a = this), (o = arguments), (u = t.now());
            var f = r && !i;
            return (
              i || (i = setTimeout(s, n)),
              f && ((c = e.apply(a, o)), (a = o = null)),
              c
            );
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var n = 1, r = arguments.length; n < r; n++) {
            var i = arguments[n];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (p) return p(e);
          var n = [];
          for (var r in e) t.has(e, r) && n.push(r);
          return n;
        }),
        (t.has = function (t, e) {
          return u.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var g = /(.)^/,
        E = {
          "'": "'",
          '\\': '\\',
          '\r': 'r',
          '\n': 'n',
          '\u2028': 'u2028',
          '\u2029': 'u2029',
        },
        m = /\\|'|\r|\n|\u2028|\u2029/g,
        y = function (t) {
          return '\\' + E[t];
        };
      return (
        (t.template = function (e, n, r) {
          !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
          var i = RegExp(
              [
                (n.escape || g).source,
                (n.interpolate || g).source,
                (n.evaluate || g).source,
              ].join('|') + '|$',
              'g'
            ),
            o = 0,
            a = "__p+='";
          e.replace(i, function (t, n, r, i, u) {
            return (
              (a += e.slice(o, u).replace(m, y)),
              (o = u + t.length),
              n
                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : i && (a += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (a += "';\n"),
            n.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
            (a =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              a +
              'return __p;\n');
          try {
            var u = new Function(n.variable || 'obj', '_', a);
          } catch (t) {
            throw ((t.source = a), t);
          }
          var c = function (e) {
              return u.call(this, e, t);
            },
            s = n.variable || 'obj';
          return (c.source = 'function(' + s + '){\n' + a + '}'), c;
        }),
        t
      );
    })();
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'edit',
      (t.exports = function (t, e, n) {
        if (
          ((n = n || {}),
          (r.env('test') || r.env('frame')) &&
            !n.fixture &&
            !(function () {
              try {
                return window.top.__Cypress__;
              } catch (t) {
                return !1;
              }
            })())
        )
          return { exit: 1 };
        var i,
          o = t(window),
          a = t(document.documentElement),
          u = document.location,
          c = 'hashchange',
          s =
            n.load ||
            function () {
              (i = !0),
                (window.WebflowEditor = !0),
                o.off(c, l),
                (function (t) {
                  var e = window.document.createElement('iframe');
                  (e.src =
                    'https://webflow.com/site/third-party-cookie-check.html'),
                    (e.style.display = 'none'),
                    (e.sandbox = 'allow-scripts allow-same-origin');
                  var n = function n(r) {
                    'WF_third_party_cookies_unsupported' === r.data
                      ? (E(e, n), t(!1))
                      : 'WF_third_party_cookies_supported' === r.data &&
                        (E(e, n), t(!0));
                  };
                  (e.onerror = function () {
                    E(e, n), t(!1);
                  }),
                    window.addEventListener('message', n, !1),
                    window.document.body.appendChild(e);
                })(function (e) {
                  t.ajax({
                    url: g('https://editor-api.webflow.com/api/editor/view'),
                    data: { siteId: a.attr('data-wf-site') },
                    xhrFields: { withCredentials: !0 },
                    dataType: 'json',
                    crossDomain: !0,
                    success: d(e),
                  });
                });
            },
          f = !1;
        try {
          f =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem('WebflowEditor');
        } catch (t) {}
        function l() {
          i || (/\?edit/.test(u.hash) && s());
        }
        function d(t) {
          return function (e) {
            e
              ? ((e.thirdPartyCookiesSupported = t),
                p(h(e.bugReporterScriptPath), function () {
                  p(h(e.scriptPath), function () {
                    window.WebflowEditor(e);
                  });
                }))
              : console.error('Could not load editor data');
          };
        }
        function p(e, n) {
          t.ajax({ type: 'GET', url: e, dataType: 'script', cache: !0 }).then(
            n,
            v
          );
        }
        function v(t, e, n) {
          throw (console.error('Could not load editor script: ' + e), n);
        }
        function h(t) {
          return t.indexOf('//') >= 0
            ? t
            : g('https://editor-api.webflow.com' + t);
        }
        function g(t) {
          return t.replace(/([^:])\/\//g, '$1/');
        }
        function E(t, e) {
          window.removeEventListener('message', e, !1), t.remove();
        }
        return (
          f
            ? s()
            : u.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                /\?edit$/.test(u.href)) &&
              s()
            : o.on(c, l).triggerHandler(c),
          {}
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(3).define(
      'focus-visible',
      (t.exports = function () {
        function t(t) {
          var e = !0,
            n = !1,
            r = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              'datetime-local': !0,
            };
          function o(t) {
            return !!(
              t &&
              t !== document &&
              'HTML' !== t.nodeName &&
              'BODY' !== t.nodeName &&
              'classList' in t &&
              'contains' in t.classList
            );
          }
          function a(t) {
            t.getAttribute('data-wf-focus-visible') ||
              t.setAttribute('data-wf-focus-visible', 'true');
          }
          function u() {
            e = !1;
          }
          function c() {
            document.addEventListener('mousemove', s),
              document.addEventListener('mousedown', s),
              document.addEventListener('mouseup', s),
              document.addEventListener('pointermove', s),
              document.addEventListener('pointerdown', s),
              document.addEventListener('pointerup', s),
              document.addEventListener('touchmove', s),
              document.addEventListener('touchstart', s),
              document.addEventListener('touchend', s);
          }
          function s(t) {
            (t.target.nodeName && 'html' === t.target.nodeName.toLowerCase()) ||
              ((e = !1),
              document.removeEventListener('mousemove', s),
              document.removeEventListener('mousedown', s),
              document.removeEventListener('mouseup', s),
              document.removeEventListener('pointermove', s),
              document.removeEventListener('pointerdown', s),
              document.removeEventListener('pointerup', s),
              document.removeEventListener('touchmove', s),
              document.removeEventListener('touchstart', s),
              document.removeEventListener('touchend', s));
          }
          document.addEventListener(
            'keydown',
            function (n) {
              n.metaKey ||
                n.altKey ||
                n.ctrlKey ||
                (o(t.activeElement) && a(t.activeElement), (e = !0));
            },
            !0
          ),
            document.addEventListener('mousedown', u, !0),
            document.addEventListener('pointerdown', u, !0),
            document.addEventListener('touchstart', u, !0),
            document.addEventListener(
              'visibilitychange',
              function () {
                'hidden' === document.visibilityState && (n && (e = !0), c());
              },
              !0
            ),
            c(),
            t.addEventListener(
              'focus',
              function (t) {
                var n, r, u;
                o(t.target) &&
                  (e ||
                    ((n = t.target),
                    (r = n.type),
                    ('INPUT' === (u = n.tagName) && i[r] && !n.readOnly) ||
                      ('TEXTAREA' === u && !n.readOnly) ||
                      n.isContentEditable)) &&
                  a(t.target);
              },
              !0
            ),
            t.addEventListener(
              'blur',
              function (t) {
                var e;
                o(t.target) &&
                  t.target.hasAttribute('data-wf-focus-visible') &&
                  ((n = !0),
                  window.clearTimeout(r),
                  (r = window.setTimeout(function () {
                    n = !1;
                  }, 100)),
                  (e = t.target).getAttribute('data-wf-focus-visible') &&
                    e.removeAttribute('data-wf-focus-visible'));
              },
              !0
            );
        }
        return {
          ready: function () {
            if ('undefined' != typeof document)
              try {
                document.querySelector(':focus-visible');
              } catch (e) {
                t(document);
              }
          },
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(3).define(
      'focus-within',
      (t.exports = function () {
        function t(t) {
          for (
            var e = [t], n = null;
            (n = t.parentNode || t.host || t.defaultView);

          )
            e.push(n), (t = n);
          return e;
        }
        function e(t) {
          'function' != typeof t.getAttribute ||
            t.getAttribute('data-wf-focus-within') ||
            t.setAttribute('data-wf-focus-within', 'true');
        }
        function n(t) {
          'function' == typeof t.getAttribute &&
            t.getAttribute('data-wf-focus-within') &&
            t.removeAttribute('data-wf-focus-within');
        }
        return {
          ready: function () {
            if (
              'undefined' != typeof document &&
              document.body.hasAttribute('data-wf-focus-within')
            )
              try {
                document.querySelector(':focus-within');
              } catch (i) {
                (r = function (r) {
                  var i;
                  i ||
                    (window.requestAnimationFrame(function () {
                      (i = !1),
                        'blur' === r.type &&
                          Array.prototype.slice.call(t(r.target)).forEach(n),
                        'focus' === r.type &&
                          Array.prototype.slice.call(t(r.target)).forEach(e);
                    }),
                    (i = !0));
                }),
                  document.addEventListener('focus', r, !0),
                  document.addEventListener('blur', r, !0),
                  e(document.body);
              }
            var r;
          },
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'focus',
      (t.exports = function () {
        var t = [],
          e = !1;
        function n(n) {
          e &&
            (n.preventDefault(),
            n.stopPropagation(),
            n.stopImmediatePropagation(),
            t.unshift(n));
        }
        function i(n) {
          (function (t) {
            var e = t.target,
              n = e.tagName;
            return (
              (/^a$/i.test(n) && null != e.href) ||
              (/^(button|textarea)$/i.test(n) && !0 !== e.disabled) ||
              (/^input$/i.test(n) &&
                /^(button|reset|submit|radio|checkbox)$/i.test(e.type) &&
                !e.disabled) ||
              (!/^(button|input|textarea|select|a)$/i.test(n) &&
                !Number.isNaN(Number.parseFloat(e.tabIndex))) ||
              /^audio$/i.test(n) ||
              (/^video$/i.test(n) && !0 === e.controls)
            );
          })(n) &&
            ((e = !0),
            setTimeout(function () {
              for (e = !1, n.target.focus(); t.length > 0; ) {
                var r = t.pop();
                r.target.dispatchEvent(new MouseEvent(r.type, r));
              }
            }, 0));
        }
        return {
          ready: function () {
            'undefined' != typeof document &&
              document.body.hasAttribute('data-wf-focus-within') &&
              r.env.safari &&
              (document.addEventListener('mousedown', i, !0),
              document.addEventListener('mouseup', n, !0),
              document.addEventListener('click', n, !0));
          },
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = window.jQuery,
      i = {},
      o = [],
      a = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro ||
            ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro &&
            ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
        },
      };
    (i.triggers = {}),
      (i.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      (i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
          var n = o[e];
          n[0](0, n[1]);
        }
        (o = []), r.extend(i.triggers, a);
      }),
      (i.async = function () {
        for (var t in a) {
          var e = a[t];
          a.hasOwnProperty(t) &&
            (i.triggers[t] = function (t, n) {
              o.push([e, n]);
            });
        }
      }),
      i.async(),
      (t.exports = i);
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(140);
    i.setEnv(r.env),
      r.define(
        'ix2',
        (t.exports = function () {
          return i;
        })
      );
  },
  function (t, e, n) {
    'use strict';
    var r = n(18),
      i = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setEnv = function (t) {
        t() && (0, u.observeRequests)(s);
      }),
      (e.init = function (t) {
        f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
      }),
      (e.destroy = f),
      (e.actions = e.store = void 0),
      n(141);
    var o = n(87),
      a = i(n(188)),
      u = n(123),
      c = r(n(65));
    e.actions = c;
    var s = (0, o.createStore)(a.default);
    function f() {
      (0, u.stopEngine)(s);
    }
    e.store = s;
  },
  function (t, e, n) {
    var r = n(142);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(143);
    t.exports = r;
  },
  function (t, e, n) {
    n(144);
    var r = n(176);
    t.exports = r('Array', 'includes');
  },
  function (t, e, n) {
    'use strict';
    var r = n(145),
      i = n(85).includes,
      o = n(171);
    r(
      { target: 'Array', proto: !0 },
      {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o('includes');
  },
  function (t, e, n) {
    var r = n(1),
      i = n(70).f,
      o = n(43),
      a = n(159),
      u = n(42),
      c = n(163),
      s = n(170);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        d,
        p,
        v = t.target,
        h = t.global,
        g = t.stat;
      if ((n = h ? r : g ? r[v] || u(v, {}) : (r[v] || {}).prototype))
        for (f in e) {
          if (
            ((d = e[f]),
            (l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f]),
            !s(h ? f : v + (g ? '.' : '#') + f, t.forced) && void 0 !== l)
          ) {
            if (typeof d == typeof l) continue;
            c(d, l);
          }
          (t.sham || (l && l.sham)) && o(d, 'sham', !0), a(n, f, d, t);
        }
    };
  },
  function (t, e, n) {
    'use strict';
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(1),
      i = n(5),
      o = n(19),
      a = n(148),
      u = r.Object,
      c = i(''.split);
    t.exports = o(function () {
      return !u('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == a(t) ? c(t, '') : u(t);
        }
      : u;
  },
  function (t, e, n) {
    var r = n(5),
      i = r({}.toString),
      o = r(''.slice);
    t.exports = function (t) {
      return o(i(t), 8, -1);
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(40),
      o = n(20),
      a = n(74),
      u = n(153),
      c = n(156),
      s = n(77),
      f = r.TypeError,
      l = s('toPrimitive');
    t.exports = function (t, e) {
      if (!o(t) || a(t)) return t;
      var n,
        r = u(t, l);
      if (r) {
        if ((void 0 === e && (e = 'default'), (n = i(r, t, e)), !o(n) || a(n)))
          return n;
        throw f("Can't convert object to primitive value");
      }
      return void 0 === e && (e = 'number'), c(t, e);
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = r({}.isPrototypeOf);
  },
  function (t, e, n) {
    var r,
      i,
      o = n(1),
      a = n(152),
      u = o.process,
      c = o.Deno,
      s = (u && u.versions) || (c && c.version),
      f = s && s.v8;
    f && (i = (r = f.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
      !i &&
        a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (i = +r[1]),
      (t.exports = i);
  },
  function (t, e, n) {
    var r = n(28);
    t.exports = r('navigator', 'userAgent') || '';
  },
  function (t, e, n) {
    var r = n(154);
    t.exports = function (t, e) {
      var n = t[e];
      return null == n ? void 0 : r(n);
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(7),
      o = n(155),
      a = r.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw a(o(t) + ' is not a function');
    };
  },
  function (t, e, n) {
    var r = n(1).String;
    t.exports = function (t) {
      try {
        return r(t);
      } catch (t) {
        return 'Object';
      }
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(40),
      o = n(7),
      a = n(20),
      u = r.TypeError;
    t.exports = function (t, e) {
      var n, r;
      if ('string' === e && o((n = t.toString)) && !a((r = i(n, t)))) return r;
      if (o((n = t.valueOf)) && !a((r = i(n, t)))) return r;
      if ('string' !== e && o((n = t.toString)) && !a((r = i(n, t)))) return r;
      throw u("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(1),
      i = n(72),
      o = r.Object;
    t.exports = function (t) {
      return o(i(t));
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(7),
      o = n(9),
      a = n(43),
      u = n(42),
      c = n(82),
      s = n(160),
      f = n(162).CONFIGURABLE,
      l = s.get,
      d = s.enforce,
      p = String(String).split('String');
    (t.exports = function (t, e, n, c) {
      var s,
        l = !!c && !!c.unsafe,
        v = !!c && !!c.enumerable,
        h = !!c && !!c.noTargetGet,
        g = c && void 0 !== c.name ? c.name : e;
      i(n) &&
        ('Symbol(' === String(g).slice(0, 7) &&
          (g = '[' + String(g).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!o(n, 'name') || (f && n.name !== g)) && a(n, 'name', g),
        (s = d(n)).source ||
          (s.source = p.join('string' == typeof g ? g : ''))),
        t !== r
          ? (l ? !h && t[e] && (v = !0) : delete t[e],
            v ? (t[e] = n) : a(t, e, n))
          : v
          ? (t[e] = n)
          : u(e, n);
    })(Function.prototype, 'toString', function () {
      return (i(this) && l(this).source) || c(this);
    });
  },
  function (t, e, n) {
    var r,
      i,
      o,
      a = n(161),
      u = n(1),
      c = n(5),
      s = n(20),
      f = n(43),
      l = n(9),
      d = n(41),
      p = n(83),
      v = n(44),
      h = u.TypeError,
      g = u.WeakMap;
    if (a || d.state) {
      var E = d.state || (d.state = new g()),
        m = c(E.get),
        y = c(E.has),
        _ = c(E.set);
      (r = function (t, e) {
        if (y(E, t)) throw new h('Object already initialized');
        return (e.facade = t), _(E, t, e), e;
      }),
        (i = function (t) {
          return m(E, t) || {};
        }),
        (o = function (t) {
          return y(E, t);
        });
    } else {
      var b = p('state');
      (v[b] = !0),
        (r = function (t, e) {
          if (l(t, b)) throw new h('Object already initialized');
          return (e.facade = t), f(t, b, e), e;
        }),
        (i = function (t) {
          return l(t, b) ? t[b] : {};
        }),
        (o = function (t) {
          return l(t, b);
        });
    }
    t.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function (t) {
        return o(t) ? i(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!s(e) || (n = i(e)).type !== t)
            throw h('Incompatible receiver, ' + t + ' required');
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(1),
      i = n(7),
      o = n(82),
      a = r.WeakMap;
    t.exports = i(a) && /native code/.test(o(a));
  },
  function (t, e, n) {
    var r = n(14),
      i = n(9),
      o = Function.prototype,
      a = r && Object.getOwnPropertyDescriptor,
      u = i(o, 'name'),
      c = u && 'something' === function () {}.name,
      s = u && (!r || (r && a(o, 'name').configurable));
    t.exports = { EXISTS: u, PROPER: c, CONFIGURABLE: s };
  },
  function (t, e, n) {
    var r = n(9),
      i = n(164),
      o = n(70),
      a = n(29);
    t.exports = function (t, e) {
      for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, c(e, f));
      }
    };
  },
  function (t, e, n) {
    var r = n(28),
      i = n(5),
      o = n(165),
      a = n(169),
      u = n(30),
      c = i([].concat);
    t.exports =
      r('Reflect', 'ownKeys') ||
      function (t) {
        var e = o.f(u(t)),
          n = a.f;
        return n ? c(e, n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(84),
      i = n(45).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    var r = n(86),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? i(n + e, 0) : o(n, e);
    };
  },
  function (t, e, n) {
    var r = n(168);
    t.exports = function (t) {
      return r(t.length);
    };
  },
  function (t, e, n) {
    var r = n(86),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(19),
      i = n(7),
      o = /#|\.prototype\./,
      a = function (t, e) {
        var n = c[u(t)];
        return n == f || (n != s && (i(e) ? r(e) : !!e));
      },
      u = (a.normalize = function (t) {
        return String(t).replace(o, '.').toLowerCase();
      }),
      c = (a.data = {}),
      s = (a.NATIVE = 'N'),
      f = (a.POLYFILL = 'P');
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(77),
      i = n(172),
      o = n(29),
      a = r('unscopables'),
      u = Array.prototype;
    null == u[a] && o.f(u, a, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        u[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r,
      i = n(30),
      o = n(173),
      a = n(45),
      u = n(44),
      c = n(175),
      s = n(81),
      f = n(83),
      l = f('IE_PROTO'),
      d = function () {},
      p = function (t) {
        return '<script>' + t + '</script>';
      },
      v = function (t) {
        t.write(p('')), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      h = function () {
        try {
          r = new ActiveXObject('htmlfile');
        } catch (t) {}
        var t, e;
        h =
          'undefined' != typeof document
            ? document.domain && r
              ? v(r)
              : (((e = s('iframe')).style.display = 'none'),
                c.appendChild(e),
                (e.src = String('javascript:')),
                (t = e.contentWindow.document).open(),
                t.write(p('document.F=Object')),
                t.close(),
                t.F)
            : v(r);
        for (var n = a.length; n--; ) delete h.prototype[a[n]];
        return h();
      };
    (u[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((d.prototype = i(t)),
                (n = new d()),
                (d.prototype = null),
                (n[l] = t))
              : (n = h()),
            void 0 === e ? n : o(n, e)
          );
        });
  },
  function (t, e, n) {
    var r = n(14),
      i = n(29),
      o = n(30),
      a = n(27),
      u = n(174);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, r = a(e), c = u(e), s = c.length, f = 0; s > f; )
            i.f(t, (n = c[f++]), r[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(84),
      i = n(45);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    var r = n(28);
    t.exports = r('document', 'documentElement');
  },
  function (t, e, n) {
    var r = n(1),
      i = n(5);
    t.exports = function (t, e) {
      return i(r[t].prototype[e]);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(89),
      i = n(180),
      o = n(181),
      a = '[object Null]',
      u = '[object Undefined]',
      c = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? Object(i.default)(t)
        : Object(o.default)(t);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(179),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = r.default || i || Function('return this')();
    e.default = o;
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      function (t) {
        var n = 'object' == typeof t && t && t.Object === Object && t;
        e.default = n;
      }.call(this, n(26));
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(89),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function (t) {
      return r.call(t);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(183),
      i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      (e.default = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      });
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      (e.default = function (t) {
        return null != t && 'object' == typeof t;
      });
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      function (t, r) {
        var i,
          o = n(187);
        i =
          'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : void 0 !== t
            ? t
            : r;
        var a = Object(o.default)(i);
        e.default = a;
      }.call(this, n(26), n(186)(t));
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      var e,
        n = t.Symbol;
      return (
        'function' == typeof n
          ? n.observable
            ? (e = n.observable)
            : ((e = n('observable')), (n.observable = e))
          : (e = '@@observable'),
        e
      );
    }
    n.r(e),
      n.d(e, 'default', function () {
        return r;
      });
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var r = n(87),
      i = n(189),
      o = n(195),
      a = n(196),
      u = n(15),
      c = n(282),
      s = n(283),
      f = u.IX2ElementsReducer.ixElements,
      l = (0, r.combineReducers)({
        ixData: i.ixData,
        ixRequest: o.ixRequest,
        ixSession: a.ixSession,
        ixElements: f,
        ixInstances: c.ixInstances,
        ixParameters: s.ixParameters,
      });
    e.default = l;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixData = void 0);
    var r = n(4).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case r:
          return e.payload.ixData || Object.freeze({});
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.QuickEffectDirectionConsts =
        e.QuickEffectIds =
        e.EventLimitAffectedElements =
        e.EventContinuousMouseAxes =
        e.EventBasedOn =
        e.EventAppliesTo =
        e.EventTypeConsts =
          void 0);
    e.EventTypeConsts = {
      NAVBAR_OPEN: 'NAVBAR_OPEN',
      NAVBAR_CLOSE: 'NAVBAR_CLOSE',
      TAB_ACTIVE: 'TAB_ACTIVE',
      TAB_INACTIVE: 'TAB_INACTIVE',
      SLIDER_ACTIVE: 'SLIDER_ACTIVE',
      SLIDER_INACTIVE: 'SLIDER_INACTIVE',
      DROPDOWN_OPEN: 'DROPDOWN_OPEN',
      DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
      MOUSE_CLICK: 'MOUSE_CLICK',
      MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
      MOUSE_DOWN: 'MOUSE_DOWN',
      MOUSE_UP: 'MOUSE_UP',
      MOUSE_OVER: 'MOUSE_OVER',
      MOUSE_OUT: 'MOUSE_OUT',
      MOUSE_MOVE: 'MOUSE_MOVE',
      MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
      SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
      SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
      SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
      ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
      ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
      PAGE_START: 'PAGE_START',
      PAGE_FINISH: 'PAGE_FINISH',
      PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
      PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
      PAGE_SCROLL: 'PAGE_SCROLL',
    };
    e.EventAppliesTo = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' };
    e.EventBasedOn = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' };
    e.EventContinuousMouseAxes = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' };
    e.EventLimitAffectedElements = {
      CHILDREN: 'CHILDREN',
      SIBLINGS: 'SIBLINGS',
      IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN',
    };
    e.QuickEffectIds = {
      FADE_EFFECT: 'FADE_EFFECT',
      SLIDE_EFFECT: 'SLIDE_EFFECT',
      GROW_EFFECT: 'GROW_EFFECT',
      SHRINK_EFFECT: 'SHRINK_EFFECT',
      SPIN_EFFECT: 'SPIN_EFFECT',
      FLY_EFFECT: 'FLY_EFFECT',
      POP_EFFECT: 'POP_EFFECT',
      FLIP_EFFECT: 'FLIP_EFFECT',
      JIGGLE_EFFECT: 'JIGGLE_EFFECT',
      PULSE_EFFECT: 'PULSE_EFFECT',
      DROP_EFFECT: 'DROP_EFFECT',
      BLINK_EFFECT: 'BLINK_EFFECT',
      BOUNCE_EFFECT: 'BOUNCE_EFFECT',
      FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
      FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
      RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
      JELLO_EFFECT: 'JELLO_EFFECT',
      GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
      SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
      PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT',
    };
    e.QuickEffectDirectionConsts = {
      LEFT: 'LEFT',
      RIGHT: 'RIGHT',
      BOTTOM: 'BOTTOM',
      TOP: 'TOP',
      BOTTOM_LEFT: 'BOTTOM_LEFT',
      BOTTOM_RIGHT: 'BOTTOM_RIGHT',
      TOP_RIGHT: 'TOP_RIGHT',
      TOP_LEFT: 'TOP_LEFT',
      CLOCKWISE: 'CLOCKWISE',
      COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE',
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.InteractionTypeConsts = void 0);
    e.InteractionTypeConsts = {
      MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
      MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
      MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
      SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
      SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
      PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
      PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
      PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
      NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
      DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
      ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
      TAB_INTERACTION: 'TAB_INTERACTION',
      SLIDER_INTERACTION: 'SLIDER_INTERACTION',
    };
  },
  function (t, e, n) {
    'use strict';
    var r,
      i = n(0)(n(21));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ReducedMotionTypes = void 0);
    var o = n(94).ActionTypeConsts,
      a = o.TRANSFORM_MOVE,
      u = o.TRANSFORM_SCALE,
      c = o.TRANSFORM_ROTATE,
      s = o.TRANSFORM_SKEW,
      f = o.STYLE_SIZE,
      l = o.STYLE_FILTER,
      d =
        ((r = {}),
        (0, i.default)(r, a, !0),
        (0, i.default)(r, u, !0),
        (0, i.default)(r, c, !0),
        (0, i.default)(r, s, !0),
        (0, i.default)(r, f, !0),
        (0, i.default)(r, l, !0),
        r);
    e.ReducedMotionTypes = d;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IX2_TEST_FRAME_RENDERED =
        e.IX2_MEDIA_QUERIES_DEFINED =
        e.IX2_VIEWPORT_WIDTH_CHANGED =
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        e.IX2_ELEMENT_STATE_CHANGED =
        e.IX2_INSTANCE_REMOVED =
        e.IX2_INSTANCE_STARTED =
        e.IX2_INSTANCE_ADDED =
        e.IX2_PARAMETER_CHANGED =
        e.IX2_ANIMATION_FRAME_CHANGED =
        e.IX2_EVENT_STATE_CHANGED =
        e.IX2_EVENT_LISTENER_ADDED =
        e.IX2_CLEAR_REQUESTED =
        e.IX2_STOP_REQUESTED =
        e.IX2_PLAYBACK_REQUESTED =
        e.IX2_PREVIEW_REQUESTED =
        e.IX2_SESSION_STOPPED =
        e.IX2_SESSION_STARTED =
        e.IX2_SESSION_INITIALIZED =
        e.IX2_RAW_DATA_IMPORTED =
          void 0);
    e.IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
    e.IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
    e.IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
    e.IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
    e.IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
    e.IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
    e.IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
    e.IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
    e.IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
    e.IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
    e.IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
    e.IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
    e.IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
    e.IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
    e.IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
    e.IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
    e.IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';
    e.IX2_MEDIA_QUERIES_DEFINED = 'IX2_MEDIA_QUERIES_DEFINED';
    e.IX2_TEST_FRAME_RENDERED = 'IX2_TEST_FRAME_RENDERED';
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.RENDER_PLUGIN =
        e.RENDER_STYLE =
        e.RENDER_GENERAL =
        e.RENDER_TRANSFORM =
        e.ABSTRACT_NODE =
        e.PLAIN_OBJECT =
        e.HTML_ELEMENT =
        e.PRESERVE_3D =
        e.PARENT =
        e.SIBLINGS =
        e.IMMEDIATE_CHILDREN =
        e.CHILDREN =
        e.BAR_DELIMITER =
        e.COLON_DELIMITER =
        e.COMMA_DELIMITER =
        e.AUTO =
        e.WILL_CHANGE =
        e.FLEX =
        e.DISPLAY =
        e.COLOR =
        e.BORDER_COLOR =
        e.BACKGROUND =
        e.BACKGROUND_COLOR =
        e.HEIGHT =
        e.WIDTH =
        e.FILTER =
        e.OPACITY =
        e.SKEW_Y =
        e.SKEW_X =
        e.SKEW =
        e.ROTATE_Z =
        e.ROTATE_Y =
        e.ROTATE_X =
        e.SCALE_3D =
        e.SCALE_Z =
        e.SCALE_Y =
        e.SCALE_X =
        e.TRANSLATE_3D =
        e.TRANSLATE_Z =
        e.TRANSLATE_Y =
        e.TRANSLATE_X =
        e.TRANSFORM =
        e.CONFIG_UNIT =
        e.CONFIG_Z_UNIT =
        e.CONFIG_Y_UNIT =
        e.CONFIG_X_UNIT =
        e.CONFIG_VALUE =
        e.CONFIG_Z_VALUE =
        e.CONFIG_Y_VALUE =
        e.CONFIG_X_VALUE =
        e.BOUNDARY_SELECTOR =
        e.W_MOD_IX =
        e.W_MOD_JS =
        e.WF_PAGE =
        e.IX2_ID_DELIMITER =
          void 0);
    e.IX2_ID_DELIMITER = '|';
    e.WF_PAGE = 'data-wf-page';
    e.W_MOD_JS = 'w-mod-js';
    e.W_MOD_IX = 'w-mod-ix';
    e.BOUNDARY_SELECTOR = '.w-dyn-item';
    e.CONFIG_X_VALUE = 'xValue';
    e.CONFIG_Y_VALUE = 'yValue';
    e.CONFIG_Z_VALUE = 'zValue';
    e.CONFIG_VALUE = 'value';
    e.CONFIG_X_UNIT = 'xUnit';
    e.CONFIG_Y_UNIT = 'yUnit';
    e.CONFIG_Z_UNIT = 'zUnit';
    e.CONFIG_UNIT = 'unit';
    e.TRANSFORM = 'transform';
    e.TRANSLATE_X = 'translateX';
    e.TRANSLATE_Y = 'translateY';
    e.TRANSLATE_Z = 'translateZ';
    e.TRANSLATE_3D = 'translate3d';
    e.SCALE_X = 'scaleX';
    e.SCALE_Y = 'scaleY';
    e.SCALE_Z = 'scaleZ';
    e.SCALE_3D = 'scale3d';
    e.ROTATE_X = 'rotateX';
    e.ROTATE_Y = 'rotateY';
    e.ROTATE_Z = 'rotateZ';
    e.SKEW = 'skew';
    e.SKEW_X = 'skewX';
    e.SKEW_Y = 'skewY';
    e.OPACITY = 'opacity';
    e.FILTER = 'filter';
    e.WIDTH = 'width';
    e.HEIGHT = 'height';
    e.BACKGROUND_COLOR = 'backgroundColor';
    e.BACKGROUND = 'background';
    e.BORDER_COLOR = 'borderColor';
    e.COLOR = 'color';
    e.DISPLAY = 'display';
    e.FLEX = 'flex';
    e.WILL_CHANGE = 'willChange';
    e.AUTO = 'AUTO';
    e.COMMA_DELIMITER = ',';
    e.COLON_DELIMITER = ':';
    e.BAR_DELIMITER = '|';
    e.CHILDREN = 'CHILDREN';
    e.IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
    e.SIBLINGS = 'SIBLINGS';
    e.PARENT = 'PARENT';
    e.PRESERVE_3D = 'preserve-3d';
    e.HTML_ELEMENT = 'HTML_ELEMENT';
    e.PLAIN_OBJECT = 'PLAIN_OBJECT';
    e.ABSTRACT_NODE = 'ABSTRACT_NODE';
    e.RENDER_TRANSFORM = 'RENDER_TRANSFORM';
    e.RENDER_GENERAL = 'RENDER_GENERAL';
    e.RENDER_STYLE = 'RENDER_STYLE';
    e.RENDER_PLUGIN = 'RENDER_PLUGIN';
  },
  function (t, e, n) {
    'use strict';
    var r,
      i = n(0)(n(21)),
      o = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixRequest = void 0);
    var a = o(n(31)),
      u = n(4),
      c = n(22),
      s = u.IX2EngineActionTypes,
      f = s.IX2_PREVIEW_REQUESTED,
      l = s.IX2_PLAYBACK_REQUESTED,
      d = s.IX2_STOP_REQUESTED,
      p = s.IX2_CLEAR_REQUESTED,
      v = { preview: {}, playback: {}, stop: {}, clear: {} },
      h = Object.create(
        null,
        ((r = {}),
        (0, i.default)(r, f, { value: 'preview' }),
        (0, i.default)(r, l, { value: 'playback' }),
        (0, i.default)(r, d, { value: 'stop' }),
        (0, i.default)(r, p, { value: 'clear' }),
        r)
      );
    e.ixRequest = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
        e = arguments.length > 1 ? arguments[1] : void 0;
      if (e.type in h) {
        var n = [h[e.type]];
        return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
      }
      return t;
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixSession = void 0);
    var r = n(4),
      i = n(22),
      o = r.IX2EngineActionTypes,
      a = o.IX2_SESSION_INITIALIZED,
      u = o.IX2_SESSION_STARTED,
      c = o.IX2_TEST_FRAME_RENDERED,
      s = o.IX2_SESSION_STOPPED,
      f = o.IX2_EVENT_LISTENER_ADDED,
      l = o.IX2_EVENT_STATE_CHANGED,
      d = o.IX2_ANIMATION_FRAME_CHANGED,
      p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      v = o.IX2_VIEWPORT_WIDTH_CHANGED,
      h = o.IX2_MEDIA_QUERIES_DEFINED,
      g = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      };
    e.ixSession = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case a:
          var n = e.payload,
            r = n.hasBoundaryNodes,
            o = n.reducedMotion;
          return (0, i.merge)(t, { hasBoundaryNodes: r, reducedMotion: o });
        case u:
          return (0, i.set)(t, 'active', !0);
        case c:
          var E = e.payload.step,
            m = void 0 === E ? 20 : E;
          return (0, i.set)(t, 'tick', t.tick + m);
        case s:
          return g;
        case d:
          var y = e.payload.now;
          return (0, i.set)(t, 'tick', y);
        case f:
          var _ = (0, i.addLast)(t.eventListeners, e.payload);
          return (0, i.set)(t, 'eventListeners', _);
        case l:
          var b = e.payload,
            I = b.stateKey,
            w = b.newState;
          return (0, i.setIn)(t, ['eventState', I], w);
        case p:
          var T = e.payload,
            O = T.actionListId,
            A = T.isPlaying;
          return (0, i.setIn)(t, ['playbackState', O], A);
        case v:
          for (
            var x = e.payload,
              S = x.width,
              R = x.mediaQueries,
              C = R.length,
              N = null,
              L = 0;
            L < C;
            L++
          ) {
            var P = R[L],
              D = P.key,
              M = P.min,
              j = P.max;
            if (S >= M && S <= j) {
              N = D;
              break;
            }
          }
          return (0, i.merge)(t, { viewportWidth: S, mediaQueryKey: N });
        case h:
          return (0, i.set)(t, 'hasDefinedMediaQueries', !0);
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    var r = n(198),
      i = n(250),
      o = n(111);
    t.exports = function (t) {
      var e = i(t);
      return 1 == e.length && e[0][2]
        ? o(e[0][0], e[0][1])
        : function (n) {
            return n === t || r(n, t, e);
          };
    };
  },
  function (t, e, n) {
    var r = n(97),
      i = n(101),
      o = 1,
      a = 2;
    t.exports = function (t, e, n, u) {
      var c = n.length,
        s = c,
        f = !u;
      if (null == t) return !s;
      for (t = Object(t); c--; ) {
        var l = n[c];
        if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
      }
      for (; ++c < s; ) {
        var d = (l = n[c])[0],
          p = t[d],
          v = l[1];
        if (f && l[2]) {
          if (void 0 === p && !(d in t)) return !1;
        } else {
          var h = new r();
          if (u) var g = u(p, v, d, t, e, h);
          if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1;
        }
      }
      return !0;
    };
  },
  function (t, e) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, e, n) {
    var r = n(33),
      i = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return !(
        n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)
      );
    };
  },
  function (t, e, n) {
    var r = n(33);
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return n < 0 ? void 0 : e[n][1];
    };
  },
  function (t, e, n) {
    var r = n(33);
    t.exports = function (t) {
      return r(this.__data__, t) > -1;
    };
  },
  function (t, e, n) {
    var r = n(33);
    t.exports = function (t, e) {
      var n = this.__data__,
        i = r(n, t);
      return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function () {
      (this.__data__ = new r()), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
        n = e.delete(t);
      return (this.size = e.size), n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, n) {
    var r = n(32),
      i = n(50),
      o = n(51),
      a = 200;
    t.exports = function (t, e) {
      var n = this.__data__;
      if (n instanceof r) {
        var u = n.__data__;
        if (!i || u.length < a - 1)
          return u.push([t, e]), (this.size = ++n.size), this;
        n = this.__data__ = new o(u);
      }
      return n.set(t, e), (this.size = n.size), this;
    };
  },
  function (t, e, n) {
    var r = n(98),
      i = n(212),
      o = n(8),
      a = n(100),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      f = c.toString,
      l = s.hasOwnProperty,
      d = RegExp(
        '^' +
          f
            .call(l)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    t.exports = function (t) {
      return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
      return n.call(t);
    };
  },
  function (t, e, n) {
    var r,
      i = n(213),
      o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + r
        : '';
    t.exports = function (t) {
      return !!o && o in t;
    };
  },
  function (t, e, n) {
    var r = n(6)['__core-js_shared__'];
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e, n) {
    var r = n(216),
      i = n(32),
      o = n(50);
    t.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new r(),
          map: new (o || i)(),
          string: new r(),
        });
    };
  },
  function (t, e, n) {
    var r = n(217),
      i = n(218),
      o = n(219),
      a = n(220),
      u = n(221);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e, n) {
    var r = n(34);
    t.exports = function () {
      (this.__data__ = r ? r(null) : {}), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e, n) {
    var r = n(34),
      i = '__lodash_hash_undefined__',
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (r) {
        var n = e[t];
        return n === i ? void 0 : n;
      }
      return o.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, n) {
    var r = n(34),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return r ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function (t, e, n) {
    var r = n(34),
      i = '__lodash_hash_undefined__';
    t.exports = function (t, e) {
      var n = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = r && void 0 === e ? i : e),
        this
      );
    };
  },
  function (t, e, n) {
    var r = n(35);
    t.exports = function (t) {
      var e = r(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
  },
  function (t, e, n) {
    var r = n(35);
    t.exports = function (t) {
      return r(this, t).get(t);
    };
  },
  function (t, e, n) {
    var r = n(35);
    t.exports = function (t) {
      return r(this, t).has(t);
    };
  },
  function (t, e, n) {
    var r = n(35);
    t.exports = function (t, e) {
      var n = r(this, t),
        i = n.size;
      return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
    };
  },
  function (t, e, n) {
    var r = n(97),
      i = n(102),
      o = n(233),
      a = n(237),
      u = n(59),
      c = n(2),
      s = n(53),
      f = n(55),
      l = 1,
      d = '[object Arguments]',
      p = '[object Array]',
      v = '[object Object]',
      h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, g, E, m) {
      var y = c(t),
        _ = c(e),
        b = y ? p : u(t),
        I = _ ? p : u(e),
        w = (b = b == d ? v : b) == v,
        T = (I = I == d ? v : I) == v,
        O = b == I;
      if (O && s(t)) {
        if (!s(e)) return !1;
        (y = !0), (w = !1);
      }
      if (O && !w)
        return (
          m || (m = new r()),
          y || f(t) ? i(t, e, n, g, E, m) : o(t, e, b, n, g, E, m)
        );
      if (!(n & l)) {
        var A = w && h.call(t, '__wrapped__'),
          x = T && h.call(e, '__wrapped__');
        if (A || x) {
          var S = A ? t.value() : t,
            R = x ? e.value() : e;
          return m || (m = new r()), E(S, R, n, g, m);
        }
      }
      return !!O && (m || (m = new r()), a(t, e, n, g, E, m));
    };
  },
  function (t, e, n) {
    var r = n(51),
      i = n(229),
      o = n(230);
    function a(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
    }
    (a.prototype.add = a.prototype.push = i),
      (a.prototype.has = o),
      (t.exports = a);
  },
  function (t, e) {
    var n = '__lodash_hash_undefined__';
    t.exports = function (t) {
      return this.__data__.set(t, n), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
        if (e(t[n], n, t)) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = n(234),
      o = n(49),
      a = n(102),
      u = n(235),
      c = n(236),
      s = 1,
      f = 2,
      l = '[object Boolean]',
      d = '[object Date]',
      p = '[object Error]',
      v = '[object Map]',
      h = '[object Number]',
      g = '[object RegExp]',
      E = '[object Set]',
      m = '[object String]',
      y = '[object Symbol]',
      _ = '[object ArrayBuffer]',
      b = '[object DataView]',
      I = r ? r.prototype : void 0,
      w = I ? I.valueOf : void 0;
    t.exports = function (t, e, n, r, I, T, O) {
      switch (n) {
        case b:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case _:
          return !(t.byteLength != e.byteLength || !T(new i(t), new i(e)));
        case l:
        case d:
        case h:
          return o(+t, +e);
        case p:
          return t.name == e.name && t.message == e.message;
        case g:
        case m:
          return t == e + '';
        case v:
          var A = u;
        case E:
          var x = r & s;
          if ((A || (A = c), t.size != e.size && !x)) return !1;
          var S = O.get(t);
          if (S) return S == e;
          (r |= f), O.set(t, e);
          var R = a(A(t), A(e), r, I, T, O);
          return O.delete(t), R;
        case y:
          if (w) return w.call(t) == w.call(e);
      }
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(6).Uint8Array;
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t, r) {
          n[++e] = [r, t];
        }),
        n
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(238),
      i = 1,
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
      var s = n & i,
        f = r(t),
        l = f.length;
      if (l != r(e).length && !s) return !1;
      for (var d = l; d--; ) {
        var p = f[d];
        if (!(s ? p in e : o.call(e, p))) return !1;
      }
      var v = c.get(t),
        h = c.get(e);
      if (v && h) return v == e && h == t;
      var g = !0;
      c.set(t, e), c.set(e, t);
      for (var E = s; ++d < l; ) {
        var m = t[(p = f[d])],
          y = e[p];
        if (a) var _ = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
        if (!(void 0 === _ ? m === y || u(m, y, n, a, c) : _)) {
          g = !1;
          break;
        }
        E || (E = 'constructor' == p);
      }
      if (g && !E) {
        var b = t.constructor,
          I = e.constructor;
        b != I &&
          'constructor' in t &&
          'constructor' in e &&
          !(
            'function' == typeof b &&
            b instanceof b &&
            'function' == typeof I &&
            I instanceof I
          ) &&
          (g = !1);
      }
      return c.delete(t), c.delete(e), g;
    };
  },
  function (t, e, n) {
    var r = n(103),
      i = n(104),
      o = n(36);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
        var a = t[n];
        e(a, n, t) && (o[i++] = a);
      }
      return o;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
      return r;
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(12),
      o = '[object Arguments]';
    t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  },
  function (t, e) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(56),
      o = n(12),
      a = {};
    (a['[object Float32Array]'] =
      a['[object Float64Array]'] =
      a['[object Int8Array]'] =
      a['[object Int16Array]'] =
      a['[object Int32Array]'] =
      a['[object Uint8Array]'] =
      a['[object Uint8ClampedArray]'] =
      a['[object Uint16Array]'] =
      a['[object Uint32Array]'] =
        !0),
      (a['[object Arguments]'] =
        a['[object Array]'] =
        a['[object ArrayBuffer]'] =
        a['[object Boolean]'] =
        a['[object DataView]'] =
        a['[object Date]'] =
        a['[object Error]'] =
        a['[object Function]'] =
        a['[object Map]'] =
        a['[object Number]'] =
        a['[object Object]'] =
        a['[object RegExp]'] =
        a['[object Set]'] =
        a['[object String]'] =
        a['[object WeakMap]'] =
          !1),
      (t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)];
      });
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(99),
        i = e && !e.nodeType && e,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = (function () {
          try {
            var t = o && o.require && o.require('util').types;
            return t || (a && a.binding && a.binding('util'));
          } catch (t) {}
        })();
      t.exports = u;
    }.call(this, n(107)(t)));
  },
  function (t, e, n) {
    var r = n(108)(Object.keys, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'DataView');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'Promise');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'Set');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(110),
      i = n(36);
    t.exports = function (t) {
      for (var e = i(t), n = e.length; n--; ) {
        var o = e[n],
          a = t[o];
        e[n] = [o, a, r(a)];
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(101),
      i = n(60),
      o = n(257),
      a = n(62),
      u = n(110),
      c = n(111),
      s = n(24),
      f = 1,
      l = 2;
    t.exports = function (t, e) {
      return a(t) && u(e)
        ? c(s(t), e)
        : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
          };
    };
  },
  function (t, e, n) {
    var r = n(253),
      i =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = r(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(''),
          t.replace(i, function (t, n, r, i) {
            e.push(r ? i.replace(o, '$1') : n || t);
          }),
          e
        );
      });
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(254),
      i = 500;
    t.exports = function (t) {
      var e = r(t, function (t) {
          return n.size === i && n.clear(), t;
        }),
        n = e.cache;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(51),
      i = 'Expected a function';
    function o(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError(i);
      var n = function () {
        var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (o.Cache || r)()), n;
    }
    (o.Cache = r), (t.exports = o);
  },
  function (t, e, n) {
    var r = n(256);
    t.exports = function (t) {
      return null == t ? '' : r(t);
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = n(112),
      o = n(2),
      a = n(39),
      u = 1 / 0,
      c = r ? r.prototype : void 0,
      s = c ? c.toString : void 0;
    t.exports = function t(e) {
      if ('string' == typeof e) return e;
      if (o(e)) return i(e, t) + '';
      if (a(e)) return s ? s.call(e) : '';
      var n = e + '';
      return '0' == n && 1 / e == -u ? '-0' : n;
    };
  },
  function (t, e, n) {
    var r = n(258),
      i = n(259);
    t.exports = function (t, e) {
      return null != t && i(t, e, r);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  function (t, e, n) {
    var r = n(38),
      i = n(37),
      o = n(2),
      a = n(54),
      u = n(56),
      c = n(24);
    t.exports = function (t, e, n) {
      for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
        var d = c(e[s]);
        if (!(l = null != t && n(t, d))) break;
        t = t[d];
      }
      return l || ++s != f
        ? l
        : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
    };
  },
  function (t, e, n) {
    var r = n(113),
      i = n(261),
      o = n(62),
      a = n(24);
    t.exports = function (t) {
      return o(t) ? r(a(t)) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(61);
    t.exports = function (t) {
      return function (e) {
        return r(e, t);
      };
    };
  },
  function (t, e, n) {
    var r = n(114),
      i = n(10),
      o = n(115),
      a = Math.max;
    t.exports = function (t, e, n) {
      var u = null == t ? 0 : t.length;
      if (!u) return -1;
      var c = null == n ? 0 : o(n);
      return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
    };
  },
  function (t, e, n) {
    var r = n(64),
      i = 1 / 0,
      o = 1.7976931348623157e308;
    t.exports = function (t) {
      return t
        ? (t = r(t)) === i || t === -i
          ? (t < 0 ? -1 : 1) * o
          : t == t
          ? t
          : 0
        : 0 === t
        ? t
        : 0;
    };
  },
  function (t, e, n) {
    var r = n(265),
      i = /^\s+/;
    t.exports = function (t) {
      return t ? t.slice(0, r(t) + 1).replace(i, '') : t;
    };
  },
  function (t, e) {
    var n = /\s/;
    t.exports = function (t) {
      for (var e = t.length; e-- && n.test(t.charAt(e)); );
      return e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
      }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (
        Symbol.iterator in Object(t) ||
        '[object Arguments]' === Object.prototype.toString.call(t)
      )
        return Array.from(t);
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance');
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createElementState = b),
      (e.mergeActionState = I),
      (e.ixElements = void 0);
    var r = n(22),
      i = n(4),
      o = i.IX2EngineConstants,
      a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
      u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
      c = o.CONFIG_Y_VALUE,
      s = o.CONFIG_Z_VALUE,
      f = o.CONFIG_VALUE,
      l = o.CONFIG_X_UNIT,
      d = o.CONFIG_Y_UNIT,
      p = o.CONFIG_Z_UNIT,
      v = o.CONFIG_UNIT,
      h = i.IX2EngineActionTypes,
      g = h.IX2_SESSION_STOPPED,
      E = h.IX2_INSTANCE_ADDED,
      m = h.IX2_ELEMENT_STATE_CHANGED,
      y = {},
      _ = 'refState';
    function b(t, e, n, i, o) {
      var u =
        n === a ? (0, r.getIn)(o, ['config', 'target', 'objectId']) : null;
      return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n });
    }
    function I(t, e, n, i, o) {
      var a = (function (t) {
          var e = t.config;
          return w.reduce(function (t, n) {
            var r = n[0],
              i = n[1],
              o = e[r],
              a = e[i];
            return null != o && null != a && (t[i] = a), t;
          }, {});
        })(o),
        u = [e, _, n];
      return (0, r.mergeIn)(t, u, i, a);
    }
    e.ixElements = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      switch (e.type) {
        case g:
          return y;
        case E:
          var n = e.payload,
            i = n.elementId,
            o = n.element,
            a = n.origin,
            u = n.actionItem,
            c = n.refType,
            s = u.actionTypeId,
            f = t;
          return (
            (0, r.getIn)(f, [i, o]) !== o && (f = b(f, o, c, i, u)),
            I(f, i, s, a, u)
          );
        case m:
          var l = e.payload;
          return I(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
        default:
          return t;
      }
    };
    var w = [
      [u, l],
      [c, d],
      [s, p],
      [f, v],
    ];
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginOrigin =
        e.getPluginDuration =
        e.getPluginConfig =
          void 0);
    e.getPluginConfig = function (t) {
      return t.value;
    };
    e.getPluginDuration = function (t, e) {
      if ('auto' !== e.config.duration) return null;
      var n = parseFloat(t.getAttribute('data-duration'));
      return n > 0
        ? 1e3 * n
        : 1e3 * parseFloat(t.getAttribute('data-default-duration'));
    };
    e.getPluginOrigin = function (t) {
      return t || { value: 0 };
    };
    e.getPluginDestination = function (t) {
      return { value: t.value };
    };
    e.createPluginInstance = function (t) {
      var e = window.Webflow.require('lottie').createInstance(t);
      return e.stop(), e.setSubframe(!0), e;
    };
    e.renderPlugin = function (t, e, n) {
      if (t) {
        var r = e[n.actionTypeId].value / 100;
        t.goToFrame(t.frames * r);
      }
    };
    e.clearPlugin = function (t) {
      window.Webflow.require('lottie').createInstance(t).stop();
    };
  },
  function (t, e, n) {
    'use strict';
    var r,
      i,
      o,
      a = n(0),
      u = a(n(13)),
      c = a(n(21)),
      s = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getInstanceId = function () {
        return 'i' + vt++;
      }),
      (e.getElementId = function (t, e) {
        for (var n in t) {
          var r = t[n];
          if (r && r.ref === e) return r.id;
        }
        return 'e' + ht++;
      }),
      (e.reifyState = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.events,
          n = t.actionLists,
          r = t.site,
          i = (0, l.default)(
            e,
            function (t, e) {
              var n = e.eventTypeId;
              return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
            },
            {}
          ),
          o = r && r.mediaQueries,
          a = [];
        o
          ? (a = o.map(function (t) {
              return t.key;
            }))
          : ((o = []), console.warn('IX2 missing mediaQueries in site data'));
        return {
          ixData: {
            events: e,
            actionLists: n,
            eventTypeMap: i,
            mediaQueries: o,
            mediaQueryKeys: a,
          },
        };
      }),
      (e.observeStore = function (t) {
        var e = t.store,
          n = t.select,
          r = t.onChange,
          i = t.comparator,
          o = void 0 === i ? gt : i,
          a = e.getState,
          u = (0, e.subscribe)(function () {
            var t = n(a());
            if (null == t) return void u();
            o(t, c) || r((c = t), e);
          }),
          c = n(a());
        return u;
      }),
      (e.getAffectedElements = mt),
      (e.getComputedStyle = function (t) {
        var e = t.element,
          n = t.actionItem;
        if (!m.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
          case it:
          case ot:
          case at:
          case ut:
          case ct:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }),
      (e.getInstanceOrigin = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
          o = r.actionTypeId,
          a = r.config;
        if ((0, E.isPluginType)(o)) return (0, E.getPluginOrigin)(o)(e[o]);
        switch (o) {
          case Z:
          case J:
          case tt:
          case et:
            return e[o] || wt[o];
          case rt:
            return _t(e[o], r.config.filters);
          case nt:
            return { value: (0, f.default)(parseFloat(i(t, C)), 1) };
          case it:
            var u,
              c,
              s = i(t, L),
              l = i(t, P);
            return (
              (u =
                a.widthUnit === W
                  ? yt.test(s)
                    ? parseFloat(s)
                    : parseFloat(n.width)
                  : (0, f.default)(parseFloat(s), parseFloat(n.width))),
              (c =
                a.heightUnit === W
                  ? yt.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, f.default)(parseFloat(l), parseFloat(n.height))),
              { widthValue: u, heightValue: c }
            );
          case ot:
          case at:
          case ut:
            return (function (t) {
              var e = t.element,
                n = t.actionTypeId,
                r = t.computedStyle,
                i = t.getStyle,
                o = lt[n],
                a = i(e, o),
                u = xt.test(a) ? a : r[o],
                c = (function (t, e) {
                  var n = t.exec(e);
                  return n ? n[1] : '';
                })(St, u).split(B);
              return {
                rValue: (0, f.default)(parseInt(c[0], 10), 255),
                gValue: (0, f.default)(parseInt(c[1], 10), 255),
                bValue: (0, f.default)(parseInt(c[2], 10), 255),
                aValue: (0, f.default)(parseFloat(c[3]), 1),
              };
            })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
          case ct:
            return { value: (0, f.default)(i(t, U), n.display) };
          case st:
            return e[o] || { value: 0 };
          default:
            return;
        }
      }),
      (e.getDestinationValues = function (t) {
        var e = t.element,
          n = t.actionItem,
          r = t.elementApi,
          i = n.actionTypeId;
        if ((0, E.isPluginType)(i))
          return (0, E.getPluginDestination)(i)(n.config);
        switch (i) {
          case Z:
          case J:
          case tt:
          case et:
            var o = n.config,
              a = o.xValue,
              u = o.yValue,
              c = o.zValue;
            return { xValue: a, yValue: u, zValue: c };
          case it:
            var s = r.getStyle,
              f = r.setStyle,
              l = r.getProperty,
              d = n.config,
              p = d.widthUnit,
              v = d.heightUnit,
              h = n.config,
              g = h.widthValue,
              y = h.heightValue;
            if (!m.IS_BROWSER_ENV) return { widthValue: g, heightValue: y };
            if (p === W) {
              var _ = s(e, L);
              f(e, L, ''), (g = l(e, 'offsetWidth')), f(e, L, _);
            }
            if (v === W) {
              var b = s(e, P);
              f(e, P, ''), (y = l(e, 'offsetHeight')), f(e, P, b);
            }
            return { widthValue: g, heightValue: y };
          case ot:
          case at:
          case ut:
            var I = n.config,
              w = I.rValue,
              T = I.gValue,
              O = I.bValue,
              A = I.aValue;
            return { rValue: w, gValue: T, bValue: O, aValue: A };
          case rt:
            return n.config.filters.reduce(bt, {});
          default:
            var x = n.config.value;
            return { value: x };
        }
      }),
      (e.getRenderType = It),
      (e.getStyleProp = function (t, e) {
        return t === Q ? e.replace('STYLE_', '').toLowerCase() : null;
      }),
      (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
        switch (u) {
          case Y:
            return (function (t, e, n, r, i) {
              var o = At.map(function (t) {
                  var n = wt[t],
                    r = e[t] || {},
                    i = r.xValue,
                    o = void 0 === i ? n.xValue : i,
                    a = r.yValue,
                    u = void 0 === a ? n.yValue : a,
                    c = r.zValue,
                    s = void 0 === c ? n.zValue : c,
                    f = r.xUnit,
                    l = void 0 === f ? '' : f,
                    d = r.yUnit,
                    p = void 0 === d ? '' : d,
                    v = r.zUnit,
                    h = void 0 === v ? '' : v;
                  switch (t) {
                    case Z:
                      return ''
                        .concat(I, '(')
                        .concat(o)
                        .concat(l, ', ')
                        .concat(u)
                        .concat(p, ', ')
                        .concat(s)
                        .concat(h, ')');
                    case J:
                      return ''
                        .concat(w, '(')
                        .concat(o)
                        .concat(l, ', ')
                        .concat(u)
                        .concat(p, ', ')
                        .concat(s)
                        .concat(h, ')');
                    case tt:
                      return ''
                        .concat(T, '(')
                        .concat(o)
                        .concat(l, ') ')
                        .concat(O, '(')
                        .concat(u)
                        .concat(p, ') ')
                        .concat(A, '(')
                        .concat(s)
                        .concat(h, ')');
                    case et:
                      return ''
                        .concat(x, '(')
                        .concat(o)
                        .concat(l, ', ')
                        .concat(u)
                        .concat(p, ')');
                    default:
                      return '';
                  }
                }).join(' '),
                a = i.setStyle;
              Rt(t, m.TRANSFORM_PREFIXED, i),
                a(t, m.TRANSFORM_PREFIXED, o),
                (u = r),
                (c = n),
                (s = u.actionTypeId),
                (f = c.xValue),
                (l = c.yValue),
                (d = c.zValue),
                ((s === Z && void 0 !== d) ||
                  (s === J && void 0 !== d) ||
                  (s === tt && (void 0 !== f || void 0 !== l))) &&
                  a(t, m.TRANSFORM_STYLE_PREFIXED, S);
              var u, c, s, f, l, d;
            })(t, e, n, i, a);
          case Q:
            return (function (t, e, n, r, i, o) {
              var a = o.setStyle,
                u = r.actionTypeId,
                c = r.config;
              switch (u) {
                case it:
                  var s = r.config,
                    f = s.widthUnit,
                    d = void 0 === f ? '' : f,
                    p = s.heightUnit,
                    v = void 0 === p ? '' : p,
                    h = n.widthValue,
                    g = n.heightValue;
                  void 0 !== h &&
                    (d === W && (d = 'px'), Rt(t, L, o), a(t, L, h + d)),
                    void 0 !== g &&
                      (v === W && (v = 'px'), Rt(t, P, o), a(t, P, g + v));
                  break;
                case rt:
                  !(function (t, e, n, r) {
                    var i = (0, l.default)(
                        e,
                        function (t, e, r) {
                          return ''
                            .concat(t, ' ')
                            .concat(r, '(')
                            .concat(e)
                            .concat(Ot(r, n), ')');
                        },
                        ''
                      ),
                      o = r.setStyle;
                    Rt(t, N, r), o(t, N, i);
                  })(t, n, c, o);
                  break;
                case ot:
                case at:
                case ut:
                  var E = lt[u],
                    m = Math.round(n.rValue),
                    y = Math.round(n.gValue),
                    _ = Math.round(n.bValue),
                    b = n.aValue;
                  Rt(t, E, o),
                    a(
                      t,
                      E,
                      b >= 1
                        ? 'rgb('.concat(m, ',').concat(y, ',').concat(_, ')')
                        : 'rgba('
                            .concat(m, ',')
                            .concat(y, ',')
                            .concat(_, ',')
                            .concat(b, ')')
                    );
                  break;
                default:
                  var I = c.unit,
                    w = void 0 === I ? '' : I;
                  Rt(t, i, o), a(t, i, n.value + w);
              }
            })(t, 0, n, i, o, a);
          case K:
            return (function (t, e, n) {
              var r = n.setStyle;
              switch (e.actionTypeId) {
                case ct:
                  var i = e.config.value;
                  return void (i === R && m.IS_BROWSER_ENV
                    ? r(t, U, m.FLEX_PREFIXED)
                    : r(t, U, i));
              }
            })(t, i, a);
          case $:
            var s = i.actionTypeId;
            if ((0, E.isPluginType)(s)) return (0, E.renderPlugin)(s)(c, e, i);
        }
      }),
      (e.clearAllStyles = function (t) {
        var e = t.store,
          n = t.elementApi,
          r = e.getState().ixData,
          i = r.events,
          o = void 0 === i ? {} : i,
          a = r.actionLists,
          u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
          var e = o[t],
            r = e.action.config,
            i = r.actionListId,
            a = u[i];
          a && Nt({ actionList: a, event: e, elementApi: n });
        }),
          Object.keys(u).forEach(function (t) {
            Nt({ actionList: u[t], elementApi: n });
          });
      }),
      (e.cleanupHTMLElement = function (t, e, n) {
        var r = n.setStyle,
          i = n.getStyle,
          o = e.actionTypeId;
        if (o === it) {
          var a = e.config;
          a.widthUnit === W && r(t, L, ''), a.heightUnit === W && r(t, P, '');
        }
        i(t, V) && Pt({ effect: Ct, actionTypeId: o, elementApi: n })(t);
      }),
      (e.getMaxDurationItemIndex = Mt),
      (e.getActionListProgress = function (t, e) {
        var n = t.actionItemGroups,
          r = t.useFirstGroupAsInitialState,
          i = e.actionItem,
          o = e.verboseTimeElapsed,
          a = void 0 === o ? 0 : o,
          u = 0,
          c = 0;
        return (
          n.forEach(function (t, e) {
            if (!r || 0 !== e) {
              var n = t.actionItems,
                o = n[Mt(n)],
                s = o.config,
                f = o.actionTypeId;
              i.id === o.id && (c = u + a);
              var l = It(f) === K ? 0 : s.duration;
              u += s.delay + l;
            }
          }),
          u > 0 ? (0, g.optimizeFloat)(c / u) : 0
        );
      }),
      (e.reduceListToGroup = function (t) {
        var e = t.actionList,
          n = t.actionItemId,
          r = t.rawData,
          i = e.actionItemGroups,
          o = e.continuousParameterGroups,
          a = [],
          u = function (t) {
            return (
              a.push((0, p.mergeIn)(t, ['config'], { delay: 0, duration: 0 })),
              t.id === n
            );
          };
        return (
          i &&
            i.some(function (t) {
              return t.actionItems.some(u);
            }),
          o &&
            o.some(function (t) {
              return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(u);
              });
            }),
          (0, p.setIn)(
            r,
            ['actionLists'],
            (0, c.default)({}, e.id, {
              id: e.id,
              actionItemGroups: [{ actionItems: a }],
            })
          )
        );
      }),
      (e.shouldNamespaceEventParameter = function (t, e) {
        var n = e.basedOn;
        return (
          (t === v.EventTypeConsts.SCROLLING_IN_VIEW &&
            (n === v.EventBasedOn.ELEMENT || null == n)) ||
          (t === v.EventTypeConsts.MOUSE_MOVE && n === v.EventBasedOn.ELEMENT)
        );
      }),
      (e.getNamespacedParameterId = function (t, e) {
        return t + H + e;
      }),
      (e.shouldAllowMediaQuery = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e);
      }),
      (e.mediaQueriesEqual = function (t, e) {
        return (0, h.default)(t && t.sort(), e && e.sort());
      }),
      (e.stringifyTarget = function (t) {
        if ('string' == typeof t) return t;
        var e = t.id,
          n = void 0 === e ? '' : e,
          r = t.selector,
          i = void 0 === r ? '' : r,
          o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? '' : o);
      }),
      Object.defineProperty(e, 'shallowEqual', {
        enumerable: !0,
        get: function () {
          return h.default;
        },
      }),
      (e.getItemConfigByKey = void 0);
    var f = s(n(272)),
      l = s(n(273)),
      d = s(n(279)),
      p = n(22),
      v = n(4),
      h = s(n(281)),
      g = n(118),
      E = n(120),
      m = n(48),
      y = v.IX2EngineConstants,
      _ = y.BACKGROUND,
      b = y.TRANSFORM,
      I = y.TRANSLATE_3D,
      w = y.SCALE_3D,
      T = y.ROTATE_X,
      O = y.ROTATE_Y,
      A = y.ROTATE_Z,
      x = y.SKEW,
      S = y.PRESERVE_3D,
      R = y.FLEX,
      C = y.OPACITY,
      N = y.FILTER,
      L = y.WIDTH,
      P = y.HEIGHT,
      D = y.BACKGROUND_COLOR,
      M = y.BORDER_COLOR,
      j = y.COLOR,
      F = y.CHILDREN,
      k = y.IMMEDIATE_CHILDREN,
      G = y.SIBLINGS,
      X = y.PARENT,
      U = y.DISPLAY,
      V = y.WILL_CHANGE,
      W = y.AUTO,
      B = y.COMMA_DELIMITER,
      H = y.COLON_DELIMITER,
      z = y.BAR_DELIMITER,
      Y = y.RENDER_TRANSFORM,
      K = y.RENDER_GENERAL,
      Q = y.RENDER_STYLE,
      $ = y.RENDER_PLUGIN,
      q = v.ActionTypeConsts,
      Z = q.TRANSFORM_MOVE,
      J = q.TRANSFORM_SCALE,
      tt = q.TRANSFORM_ROTATE,
      et = q.TRANSFORM_SKEW,
      nt = q.STYLE_OPACITY,
      rt = q.STYLE_FILTER,
      it = q.STYLE_SIZE,
      ot = q.STYLE_BACKGROUND_COLOR,
      at = q.STYLE_BORDER,
      ut = q.STYLE_TEXT_COLOR,
      ct = q.GENERAL_DISPLAY,
      st = 'OBJECT_VALUE',
      ft = function (t) {
        return t.trim();
      },
      lt = Object.freeze(
        ((r = {}),
        (0, c.default)(r, ot, D),
        (0, c.default)(r, at, M),
        (0, c.default)(r, ut, j),
        r)
      ),
      dt = Object.freeze(
        ((i = {}),
        (0, c.default)(i, m.TRANSFORM_PREFIXED, b),
        (0, c.default)(i, D, _),
        (0, c.default)(i, C, C),
        (0, c.default)(i, N, N),
        (0, c.default)(i, L, L),
        (0, c.default)(i, P, P),
        i)
      ),
      pt = {},
      vt = 1;
    var ht = 1;
    var gt = function (t, e) {
      return t === e;
    };
    function Et(t) {
      var e = (0, u.default)(t);
      return 'string' === e
        ? { id: t }
        : null != t && 'object' === e
        ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget,
          }
        : {};
    }
    function mt(t) {
      var e,
        n,
        r,
        i = t.config,
        o = t.event,
        a = t.eventTarget,
        u = t.elementRoot,
        c = t.elementApi;
      if (!c) throw new Error('IX2 missing elementApi');
      var s = i.targets;
      if (Array.isArray(s) && s.length > 0)
        return s.reduce(function (t, e) {
          return t.concat(
            mt({
              config: { target: e },
              event: o,
              eventTarget: a,
              elementRoot: u,
              elementApi: c,
            })
          );
        }, []);
      var f = c.getValidDocument,
        l = c.getQuerySelector,
        d = c.queryDocument,
        p = c.getChildElements,
        h = c.getSiblingElements,
        g = c.matchSelector,
        E = c.elementContains,
        y = c.isSiblingNode,
        _ = i.target;
      if (!_) return [];
      var b = Et(_),
        I = b.id,
        w = b.objectId,
        T = b.selector,
        O = b.selectorGuids,
        A = b.appliesTo,
        x = b.useEventTarget;
      if (w) return [pt[w] || (pt[w] = {})];
      if (A === v.EventAppliesTo.PAGE) {
        var S = f(I);
        return S ? [S] : [];
      }
      var R,
        C,
        N,
        L =
          (null !==
            (e =
              null == o
                ? void 0
                : null === (n = o.action) || void 0 === n
                ? void 0
                : null === (r = n.config) || void 0 === r
                ? void 0
                : r.affectedElements) && void 0 !== e
            ? e
            : {})[I || T] || {},
        P = Boolean(L.id || L.selector),
        D = o && l(Et(o.target));
      if (
        (P
          ? ((R = L.limitAffectedElements), (C = D), (N = l(L)))
          : (C = N = l({ id: I, selector: T, selectorGuids: O })),
        o && x)
      ) {
        var M = a && (N || !0 === x) ? [a] : d(D);
        if (N) {
          if (x === X)
            return d(N).filter(function (t) {
              return M.some(function (e) {
                return E(t, e);
              });
            });
          if (x === F)
            return d(N).filter(function (t) {
              return M.some(function (e) {
                return E(e, t);
              });
            });
          if (x === G)
            return d(N).filter(function (t) {
              return M.some(function (e) {
                return y(e, t);
              });
            });
        }
        return M;
      }
      return null == C || null == N
        ? []
        : m.IS_BROWSER_ENV && u
        ? d(N).filter(function (t) {
            return u.contains(t);
          })
        : R === F
        ? d(C, N)
        : R === k
        ? p(d(C)).filter(g(N))
        : R === G
        ? h(d(C)).filter(g(N))
        : d(N);
    }
    var yt = /px/,
      _t = function (t, e) {
        return e.reduce(function (t, e) {
          return null == t[e.type] && (t[e.type] = Tt[e.type]), t;
        }, t || {});
      };
    var bt = function (t, e) {
      return e && (t[e.type] = e.value || 0), t;
    };
    function It(t) {
      return /^TRANSFORM_/.test(t)
        ? Y
        : /^STYLE_/.test(t)
        ? Q
        : /^GENERAL_/.test(t)
        ? K
        : /^PLUGIN_/.test(t)
        ? $
        : void 0;
    }
    e.getItemConfigByKey = function (t, e, n) {
      if ((0, E.isPluginType)(t)) return (0, E.getPluginConfig)(t)(n, e);
      switch (t) {
        case rt:
          var r = (0, d.default)(n.filters, function (t) {
            return t.type === e;
          });
          return r ? r.value : 0;
        default:
          return n[e];
      }
    };
    var wt =
        ((o = {}),
        (0, c.default)(
          o,
          Z,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, c.default)(
          o,
          J,
          Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
        ),
        (0, c.default)(
          o,
          tt,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })),
        o),
      Tt = Object.freeze({
        blur: 0,
        'hue-rotate': 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      Ot = function (t, e) {
        var n = (0, d.default)(e.filters, function (e) {
          return e.type === t;
        });
        if (n && n.unit) return n.unit;
        switch (t) {
          case 'blur':
            return 'px';
          case 'hue-rotate':
            return 'deg';
          default:
            return '%';
        }
      },
      At = Object.keys(wt);
    var xt = /^rgb/,
      St = RegExp('rgba?'.concat('\\(([^)]+)\\)'));
    function Rt(t, e, n) {
      if (m.IS_BROWSER_ENV) {
        var r = dt[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, V);
          if (a) {
            var u = a.split(B).map(ft);
            -1 === u.indexOf(r) && o(t, V, u.concat(r).join(B));
          } else o(t, V, r);
        }
      }
    }
    function Ct(t, e, n) {
      if (m.IS_BROWSER_ENV) {
        var r = dt[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, V);
          a &&
            -1 !== a.indexOf(r) &&
            o(
              t,
              V,
              a
                .split(B)
                .map(ft)
                .filter(function (t) {
                  return t !== r;
                })
                .join(B)
            );
        }
      }
    }
    function Nt(t) {
      var e = t.actionList,
        n = void 0 === e ? {} : e,
        r = t.event,
        i = t.elementApi,
        o = n.actionItemGroups,
        a = n.continuousParameterGroups;
      o &&
        o.forEach(function (t) {
          Lt({ actionGroup: t, event: r, elementApi: i });
        }),
        a &&
          a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
              Lt({ actionGroup: t, event: r, elementApi: i });
            });
          });
    }
    function Lt(t) {
      var e = t.actionGroup,
        n = t.event,
        r = t.elementApi;
      e.actionItems.forEach(function (t) {
        var e,
          i = t.actionTypeId,
          o = t.config;
        (e = (0, E.isPluginType)(i)
          ? (0, E.clearPlugin)(i)
          : Pt({ effect: Dt, actionTypeId: i, elementApi: r })),
          mt({ config: o, event: n, elementApi: r }).forEach(e);
      });
    }
    var Pt = function (t) {
      var e = t.effect,
        n = t.actionTypeId,
        r = t.elementApi;
      return function (t) {
        switch (n) {
          case Z:
          case J:
          case tt:
          case et:
            e(t, m.TRANSFORM_PREFIXED, r);
            break;
          case rt:
            e(t, N, r);
            break;
          case nt:
            e(t, C, r);
            break;
          case it:
            e(t, L, r), e(t, P, r);
            break;
          case ot:
          case at:
          case ut:
            e(t, lt[n], r);
            break;
          case ct:
            e(t, U, r);
        }
      };
    };
    function Dt(t, e, n) {
      var r = n.setStyle;
      Ct(t, e, n),
        r(t, e, ''),
        e === m.TRANSFORM_PREFIXED && r(t, m.TRANSFORM_STYLE_PREFIXED, '');
    }
    function Mt(t) {
      var e = 0,
        n = 0;
      return (
        t.forEach(function (t, r) {
          var i = t.config,
            o = i.delay + i.duration;
          o >= e && ((e = o), (n = r));
        }),
        n
      );
    }
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t || t != t ? e : t;
    };
  },
  function (t, e, n) {
    var r = n(274),
      i = n(121),
      o = n(10),
      a = n(278),
      u = n(2);
    t.exports = function (t, e, n) {
      var c = u(t) ? r : a,
        s = arguments.length < 3;
      return c(t, o(e, 4), n, s, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      var i = -1,
        o = null == t ? 0 : t.length;
      for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
      return n;
    };
  },
  function (t, e, n) {
    var r = n(276)();
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e, n, r) {
        for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
          var c = a[t ? u : ++i];
          if (!1 === n(o[c], c, o)) break;
        }
        return e;
      };
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t, e) {
      return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return t(n, i);
        for (
          var o = n.length, a = e ? o : -1, u = Object(n);
          (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

        );
        return n;
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i) {
      return (
        i(t, function (t, i, o) {
          n = r ? ((r = !1), t) : e(n, t, i, o);
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(96)(n(280));
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(114),
      i = n(10),
      o = n(115),
      a = Math.max,
      u = Math.min;
    t.exports = function (t, e, n) {
      var c = null == t ? 0 : t.length;
      if (!c) return -1;
      var s = c - 1;
      return (
        void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))),
        r(t, i(e, 3), s, !0)
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(13));
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var i = Object.prototype.hasOwnProperty;
    function o(t, e) {
      return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
    }
    var a = function (t, e) {
      if (o(t, e)) return !0;
      if (
        'object' !== (0, r.default)(t) ||
        null === t ||
        'object' !== (0, r.default)(e) ||
        null === e
      )
        return !1;
      var n = Object.keys(t),
        a = Object.keys(e);
      if (n.length !== a.length) return !1;
      for (var u = 0; u < n.length; u++)
        if (!i.call(e, n[u]) || !o(t[n[u]], e[n[u]])) return !1;
      return !0;
    };
    e.default = a;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixInstances = void 0);
    var r = n(4),
      i = n(15),
      o = n(22),
      a = r.IX2EngineActionTypes,
      u = a.IX2_RAW_DATA_IMPORTED,
      c = a.IX2_SESSION_STOPPED,
      s = a.IX2_INSTANCE_ADDED,
      f = a.IX2_INSTANCE_STARTED,
      l = a.IX2_INSTANCE_REMOVED,
      d = a.IX2_ANIMATION_FRAME_CHANGED,
      p = i.IX2EasingUtils,
      v = p.optimizeFloat,
      h = p.applyEasing,
      g = p.createBezierEasing,
      E = r.IX2EngineConstants.RENDER_GENERAL,
      m = i.IX2VanillaUtils,
      y = m.getItemConfigByKey,
      _ = m.getRenderType,
      b = m.getStyleProp,
      I = function (t, e) {
        var n = t.position,
          r = t.parameterId,
          i = t.actionGroups,
          a = t.destinationKeys,
          u = t.smoothing,
          c = t.restingValue,
          s = t.actionTypeId,
          f = t.customEasingFn,
          l = t.skipMotion,
          d = t.skipToValue,
          p = e.payload.parameters,
          g = Math.max(1 - u, 0.01),
          E = p[r];
        null == E && ((g = 1), (E = c));
        var m,
          _,
          b,
          I,
          w = Math.max(E, 0) || 0,
          T = v(w - n),
          O = l ? d : v(n + T * g),
          A = 100 * O;
        if (O === n && t.current) return t;
        for (var x = 0, S = i.length; x < S; x++) {
          var R = i[x],
            C = R.keyframe,
            N = R.actionItems;
          if ((0 === x && (m = N[0]), A >= C)) {
            m = N[0];
            var L = i[x + 1],
              P = L && A !== C;
            (_ = P ? L.actionItems[0] : null),
              P && ((b = C / 100), (I = (L.keyframe - C) / 100));
          }
        }
        var D = {};
        if (m && !_)
          for (var M = 0, j = a.length; M < j; M++) {
            var F = a[M];
            D[F] = y(s, F, m.config);
          }
        else if (m && _ && void 0 !== b && void 0 !== I)
          for (
            var k = (O - b) / I,
              G = m.config.easing,
              X = h(G, k, f),
              U = 0,
              V = a.length;
            U < V;
            U++
          ) {
            var W = a[U],
              B = y(s, W, m.config),
              H = (y(s, W, _.config) - B) * X + B;
            D[W] = H;
          }
        return (0, o.merge)(t, { position: O, current: D });
      },
      w = function (t, e) {
        var n = t,
          r = n.active,
          i = n.origin,
          a = n.start,
          u = n.immediate,
          c = n.renderType,
          s = n.verbose,
          f = n.actionItem,
          l = n.destination,
          d = n.destinationKeys,
          p = n.pluginDuration,
          g = n.instanceDelay,
          m = n.customEasingFn,
          y = n.skipMotion,
          _ = f.config.easing,
          b = f.config,
          I = b.duration,
          w = b.delay;
        null != p && (I = p),
          (w = null != g ? g : w),
          c === E ? (I = 0) : (u || y) && (I = w = 0);
        var T = e.payload.now;
        if (r && i) {
          var O = T - (a + w);
          if (s) {
            var A = T - a,
              x = I + w,
              S = v(Math.min(Math.max(0, A / x), 1));
            t = (0, o.set)(t, 'verboseTimeElapsed', x * S);
          }
          if (O < 0) return t;
          var R = v(Math.min(Math.max(0, O / I), 1)),
            C = h(_, R, m),
            N = {},
            L = null;
          return (
            d.length &&
              (L = d.reduce(function (t, e) {
                var n = l[e],
                  r = parseFloat(i[e]) || 0,
                  o = (parseFloat(n) - r) * C + r;
                return (t[e] = o), t;
              }, {})),
            (N.current = L),
            (N.position = R),
            1 === R && ((N.active = !1), (N.complete = !0)),
            (0, o.merge)(t, N)
          );
        }
        return t;
      };
    e.ixInstances = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case u:
          return e.payload.ixInstances || Object.freeze({});
        case c:
          return Object.freeze({});
        case s:
          var n = e.payload,
            r = n.instanceId,
            i = n.elementId,
            a = n.actionItem,
            p = n.eventId,
            v = n.eventTarget,
            h = n.eventStateKey,
            E = n.actionListId,
            m = n.groupIndex,
            y = n.isCarrier,
            T = n.origin,
            O = n.destination,
            A = n.immediate,
            x = n.verbose,
            S = n.continuous,
            R = n.parameterId,
            C = n.actionGroups,
            N = n.smoothing,
            L = n.restingValue,
            P = n.pluginInstance,
            D = n.pluginDuration,
            M = n.instanceDelay,
            j = n.skipMotion,
            F = n.skipToValue,
            k = a.actionTypeId,
            G = _(k),
            X = b(G, k),
            U = Object.keys(O).filter(function (t) {
              return null != O[t];
            }),
            V = a.config.easing;
          return (0, o.set)(t, r, {
            id: r,
            elementId: i,
            active: !1,
            position: 0,
            start: 0,
            origin: T,
            destination: O,
            destinationKeys: U,
            immediate: A,
            verbose: x,
            current: null,
            actionItem: a,
            actionTypeId: k,
            eventId: p,
            eventTarget: v,
            eventStateKey: h,
            actionListId: E,
            groupIndex: m,
            renderType: G,
            isCarrier: y,
            styleProp: X,
            continuous: S,
            parameterId: R,
            actionGroups: C,
            smoothing: N,
            restingValue: L,
            pluginInstance: P,
            pluginDuration: D,
            instanceDelay: M,
            skipMotion: j,
            skipToValue: F,
            customEasingFn: Array.isArray(V) && 4 === V.length ? g(V) : void 0,
          });
        case f:
          var W = e.payload,
            B = W.instanceId,
            H = W.time;
          return (0, o.mergeIn)(t, [B], { active: !0, complete: !1, start: H });
        case l:
          var z = e.payload.instanceId;
          if (!t[z]) return t;
          for (
            var Y = {}, K = Object.keys(t), Q = K.length, $ = 0;
            $ < Q;
            $++
          ) {
            var q = K[$];
            q !== z && (Y[q] = t[q]);
          }
          return Y;
        case d:
          for (
            var Z = t, J = Object.keys(t), tt = J.length, et = 0;
            et < tt;
            et++
          ) {
            var nt = J[et],
              rt = t[nt],
              it = rt.continuous ? I : w;
            Z = (0, o.set)(Z, nt, it(rt, e));
          }
          return Z;
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixParameters = void 0);
    var r = n(4).IX2EngineActionTypes,
      i = r.IX2_RAW_DATA_IMPORTED,
      o = r.IX2_SESSION_STOPPED,
      a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case i:
          return e.payload.ixParameters || {};
        case o:
          return {};
        case a:
          var n = e.payload,
            r = n.key,
            u = n.value;
          return (t[r] = u), t;
        default:
          return t;
      }
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        r,
        i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++)
        (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    };
  },
  function (t, e, n) {
    var r = n(57),
      i = n(59),
      o = n(17),
      a = n(286),
      u = n(287),
      c = '[object Map]',
      s = '[object Set]';
    t.exports = function (t) {
      if (null == t) return 0;
      if (o(t)) return a(t) ? u(t) : t.length;
      var e = i(t);
      return e == c || e == s ? t.size : r(t).length;
    };
  },
  function (t, e, n) {
    var r = n(16),
      i = n(2),
      o = n(12),
      a = '[object String]';
    t.exports = function (t) {
      return 'string' == typeof t || (!i(t) && o(t) && r(t) == a);
    };
  },
  function (t, e, n) {
    var r = n(288),
      i = n(289),
      o = n(290);
    t.exports = function (t) {
      return i(t) ? o(t) : r(t);
    };
  },
  function (t, e, n) {
    var r = n(113)('length');
    t.exports = r;
  },
  function (t, e) {
    var n = RegExp(
      '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
    );
    t.exports = function (t) {
      return n.test(t);
    };
  },
  function (t, e) {
    var n = '[\\ud800-\\udfff]',
      r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
      i = '\\ud83c[\\udffb-\\udfff]',
      o = '[^\\ud800-\\udfff]',
      a = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      u = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      c = '(?:' + r + '|' + i + ')' + '?',
      s =
        '[\\ufe0e\\ufe0f]?' +
        c +
        ('(?:\\u200d(?:' +
          [o, a, u].join('|') +
          ')[\\ufe0e\\ufe0f]?' +
          c +
          ')*'),
      f = '(?:' + [o + r + '?', r, a, u, n].join('|') + ')',
      l = RegExp(i + '(?=' + i + ')|' + f + s, 'g');
    t.exports = function (t) {
      for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(10),
      i = n(292),
      o = n(293);
    t.exports = function (t, e) {
      return o(t, i(r(e)));
    };
  },
  function (t, e) {
    var n = 'Expected a function';
    t.exports = function (t) {
      if ('function' != typeof t) throw new TypeError(n);
      return function () {
        var e = arguments;
        switch (e.length) {
          case 0:
            return !t.call(this);
          case 1:
            return !t.call(this, e[0]);
          case 2:
            return !t.call(this, e[0], e[1]);
          case 3:
            return !t.call(this, e[0], e[1], e[2]);
        }
        return !t.apply(this, e);
      };
    };
  },
  function (t, e, n) {
    var r = n(112),
      i = n(10),
      o = n(294),
      a = n(297);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n = r(a(t), function (t) {
        return [t];
      });
      return (
        (e = i(e)),
        o(t, n, function (t, n) {
          return e(t, n[0]);
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(61),
      i = n(295),
      o = n(38);
    t.exports = function (t, e, n) {
      for (var a = -1, u = e.length, c = {}; ++a < u; ) {
        var s = e[a],
          f = r(t, s);
        n(f, s) && i(c, o(s, t), f);
      }
      return c;
    };
  },
  function (t, e, n) {
    var r = n(296),
      i = n(38),
      o = n(54),
      a = n(8),
      u = n(24);
    t.exports = function (t, e, n, c) {
      if (!a(t)) return t;
      for (
        var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t;
        null != d && ++s < f;

      ) {
        var p = u(e[s]),
          v = n;
        if ('__proto__' === p || 'constructor' === p || 'prototype' === p)
          return t;
        if (s != l) {
          var h = d[p];
          void 0 === (v = c ? c(h, p, d) : void 0) &&
            (v = a(h) ? h : o(e[s + 1]) ? [] : {});
        }
        r(d, p, v), (d = d[p]);
      }
      return t;
    };
  },
  function (t, e, n) {
    var r = n(124),
      i = n(49),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
      var a = t[e];
      (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
    };
  },
  function (t, e, n) {
    var r = n(103),
      i = n(298),
      o = n(300);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e, n) {
    var r = n(52),
      i = n(299),
      o = n(104),
      a = n(105),
      u = Object.getOwnPropertySymbols
        ? function (t) {
            for (var e = []; t; ) r(e, o(t)), (t = i(t));
            return e;
          }
        : a;
    t.exports = u;
  },
  function (t, e, n) {
    var r = n(108)(Object.getPrototypeOf, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(106),
      i = n(301),
      o = n(17);
    t.exports = function (t) {
      return o(t) ? r(t, !0) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(58),
      o = n(302),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return o(t);
      var e = i(t),
        n = [];
      for (var u in t)
        ('constructor' != u || (!e && a.call(t, u))) && n.push(u);
      return n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      if (null != t) for (var n in Object(t)) e.push(n);
      return e;
    };
  },
  function (t, e, n) {
    var r = n(57),
      i = n(59),
      o = n(37),
      a = n(2),
      u = n(17),
      c = n(53),
      s = n(58),
      f = n(55),
      l = '[object Map]',
      d = '[object Set]',
      p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (null == t) return !0;
      if (
        u(t) &&
        (a(t) ||
          'string' == typeof t ||
          'function' == typeof t.splice ||
          c(t) ||
          f(t) ||
          o(t))
      )
        return !t.length;
      var e = i(t);
      if (e == l || e == d) return !t.size;
      if (s(t)) return !r(t).length;
      for (var n in t) if (p.call(t, n)) return !1;
      return !0;
    };
  },
  function (t, e, n) {
    var r = n(124),
      i = n(122),
      o = n(10);
    t.exports = function (t, e) {
      var n = {};
      return (
        (e = o(e, 3)),
        i(t, function (t, i, o) {
          r(n, i, e(t, i, o));
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(306),
      i = n(121),
      o = n(307),
      a = n(2);
    t.exports = function (t, e) {
      return (a(t) ? r : i)(t, o(e));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (
        var n = -1, r = null == t ? 0 : t.length;
        ++n < r && !1 !== e(t[n], n, t);

      );
      return t;
    };
  },
  function (t, e, n) {
    var r = n(63);
    t.exports = function (t) {
      return 'function' == typeof t ? t : r;
    };
  },
  function (t, e, n) {
    var r = n(309),
      i = n(8),
      o = 'Expected a function';
    t.exports = function (t, e, n) {
      var a = !0,
        u = !0;
      if ('function' != typeof t) throw new TypeError(o);
      return (
        i(n) &&
          ((a = 'leading' in n ? !!n.leading : a),
          (u = 'trailing' in n ? !!n.trailing : u)),
        r(t, e, { leading: a, maxWait: e, trailing: u })
      );
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(310),
      o = n(64),
      a = 'Expected a function',
      u = Math.max,
      c = Math.min;
    t.exports = function (t, e, n) {
      var s,
        f,
        l,
        d,
        p,
        v,
        h = 0,
        g = !1,
        E = !1,
        m = !0;
      if ('function' != typeof t) throw new TypeError(a);
      function y(e) {
        var n = s,
          r = f;
        return (s = f = void 0), (h = e), (d = t.apply(r, n));
      }
      function _(t) {
        var n = t - v;
        return void 0 === v || n >= e || n < 0 || (E && t - h >= l);
      }
      function b() {
        var t = i();
        if (_(t)) return I(t);
        p = setTimeout(
          b,
          (function (t) {
            var n = e - (t - v);
            return E ? c(n, l - (t - h)) : n;
          })(t)
        );
      }
      function I(t) {
        return (p = void 0), m && s ? y(t) : ((s = f = void 0), d);
      }
      function w() {
        var t = i(),
          n = _(t);
        if (((s = arguments), (f = this), (v = t), n)) {
          if (void 0 === p)
            return (function (t) {
              return (h = t), (p = setTimeout(b, e)), g ? y(t) : d;
            })(v);
          if (E) return clearTimeout(p), (p = setTimeout(b, e)), y(v);
        }
        return void 0 === p && (p = setTimeout(b, e)), d;
      }
      return (
        (e = o(e) || 0),
        r(n) &&
          ((g = !!n.leading),
          (l = (E = 'maxWait' in n) ? u(o(n.maxWait) || 0, e) : l),
          (m = 'trailing' in n ? !!n.trailing : m)),
        (w.cancel = function () {
          void 0 !== p && clearTimeout(p), (h = 0), (s = v = f = p = void 0);
        }),
        (w.flush = function () {
          return void 0 === p ? d : I(i());
        }),
        w
      );
    };
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function () {
      return r.Date.now();
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(13));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setStyle = function (t, e, n) {
        t.style[e] = n;
      }),
      (e.getStyle = function (t, e) {
        return t.style[e];
      }),
      (e.getProperty = function (t, e) {
        return t[e];
      }),
      (e.matchSelector = function (t) {
        return function (e) {
          return e[a](t);
        };
      }),
      (e.getQuerySelector = function (t) {
        var e = t.id,
          n = t.selector;
        if (e) {
          var r = e;
          if (-1 !== e.indexOf(c)) {
            var i = e.split(c),
              o = i[0];
            if (((r = i[1]), o !== document.documentElement.getAttribute(l)))
              return null;
          }
          return '[data-w-id="'
            .concat(r, '"], [data-w-id^="')
            .concat(r, '_instance"]');
        }
        return n;
      }),
      (e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(l))
          return document;
        return null;
      }),
      (e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(
          document.querySelectorAll(e ? t + ' ' + e : t)
        );
      }),
      (e.elementContains = function (t, e) {
        return t.contains(e);
      }),
      (e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode;
      }),
      (e.getChildElements = function (t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
          var i = t[n].children,
            o = i.length;
          if (o) for (var a = 0; a < o; a++) e.push(i[a]);
        }
        return e;
      }),
      (e.getSiblingElements = function () {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [],
            n = [],
            r = 0,
            i = t.length;
          r < i;
          r++
        ) {
          var o = t[r].parentNode;
          if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
            n.push(o);
            for (var a = o.firstElementChild; null != a; )
              -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
          }
        }
        return e;
      }),
      (e.getRefType = function (t) {
        if (null != t && 'object' == (0, r.default)(t))
          return t instanceof Element ? s : f;
        return null;
      }),
      (e.getClosestElement = void 0);
    var i = n(15),
      o = n(4),
      a = i.IX2BrowserSupport.ELEMENT_MATCHES,
      u = o.IX2EngineConstants,
      c = u.IX2_ID_DELIMITER,
      s = u.HTML_ELEMENT,
      f = u.PLAIN_OBJECT,
      l = u.WF_PAGE;
    var d = Element.prototype.closest
      ? function (t, e) {
          return document.documentElement.contains(t) ? t.closest(e) : null;
        }
      : function (t, e) {
          if (!document.documentElement.contains(t)) return null;
          var n = t;
          do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode;
          } while (null != n);
          return null;
        };
    e.getClosestElement = d;
  },
  function (t, e, n) {
    'use strict';
    var r,
      i = n(0),
      o = i(n(21)),
      a = i(n(13)),
      u = n(0);
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var c,
      s,
      f,
      l = u(n(31)),
      d = u(n(313)),
      p = u(n(60)),
      v = u(n(332)),
      h = n(4),
      g = n(123),
      E = n(65),
      m = n(15),
      y = h.EventTypeConsts,
      _ = y.MOUSE_CLICK,
      b = y.MOUSE_SECOND_CLICK,
      I = y.MOUSE_DOWN,
      w = y.MOUSE_UP,
      T = y.MOUSE_OVER,
      O = y.MOUSE_OUT,
      A = y.DROPDOWN_CLOSE,
      x = y.DROPDOWN_OPEN,
      S = y.SLIDER_ACTIVE,
      R = y.SLIDER_INACTIVE,
      C = y.TAB_ACTIVE,
      N = y.TAB_INACTIVE,
      L = y.NAVBAR_CLOSE,
      P = y.NAVBAR_OPEN,
      D = y.MOUSE_MOVE,
      M = y.PAGE_SCROLL_DOWN,
      j = y.SCROLL_INTO_VIEW,
      F = y.SCROLL_OUT_OF_VIEW,
      k = y.PAGE_SCROLL_UP,
      G = y.SCROLLING_IN_VIEW,
      X = y.PAGE_FINISH,
      U = y.ECOMMERCE_CART_CLOSE,
      V = y.ECOMMERCE_CART_OPEN,
      W = y.PAGE_START,
      B = y.PAGE_SCROLL,
      H = 'COMPONENT_ACTIVE',
      z = 'COMPONENT_INACTIVE',
      Y = h.IX2EngineConstants.COLON_DELIMITER,
      K = m.IX2VanillaUtils.getNamespacedParameterId,
      Q = function (t) {
        return function (e) {
          return !('object' !== (0, a.default)(e) || !t(e)) || e;
        };
      },
      $ = Q(function (t) {
        return t.element === t.nativeEvent.target;
      }),
      q = Q(function (t) {
        var e = t.element,
          n = t.nativeEvent;
        return e.contains(n.target);
      }),
      Z = (0, d.default)([$, q]),
      J = function (t, e) {
        if (e) {
          var n = t.getState().ixData.events[e];
          if (n && !at[n.eventTypeId]) return n;
        }
        return null;
      },
      tt = function (t, e) {
        var n = t.store,
          r = t.event,
          i = t.element,
          o = t.eventStateKey,
          a = r.action,
          u = r.id,
          c = a.config,
          s = c.actionListId,
          f = c.autoStopEventId,
          l = J(n, f);
        return (
          l &&
            (0, g.stopActionGroup)({
              store: n,
              eventId: f,
              eventTarget: i,
              eventStateKey: f + Y + o.split(Y)[1],
              actionListId: (0, p.default)(l, 'action.config.actionListId'),
            }),
          (0, g.stopActionGroup)({
            store: n,
            eventId: u,
            eventTarget: i,
            eventStateKey: o,
            actionListId: s,
          }),
          (0, g.startActionGroup)({
            store: n,
            eventId: u,
            eventTarget: i,
            eventStateKey: o,
            actionListId: s,
          }),
          e
        );
      },
      et = function (t, e) {
        return function (n, r) {
          return !0 === t(n, r) ? e(n, r) : r;
        };
      },
      nt = { handler: et(Z, tt) },
      rt = (0, l.default)({}, nt, { types: [H, z].join(' ') }),
      it = [
        { target: window, types: 'resize orientationchange', throttle: !0 },
        {
          target: document,
          types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
          throttle: !0,
        },
      ],
      ot = { types: it },
      at = { PAGE_START: W, PAGE_FINISH: X },
      ut =
        ((c = void 0 !== window.pageXOffset),
        (s =
          'CSS1Compat' === document.compatMode
            ? document.documentElement
            : document.body),
        function () {
          return {
            scrollLeft: c ? window.pageXOffset : s.scrollLeft,
            scrollTop: c ? window.pageYOffset : s.scrollTop,
            stiffScrollTop: (0, v.default)(
              c ? window.pageYOffset : s.scrollTop,
              0,
              s.scrollHeight - window.innerHeight
            ),
            scrollWidth: s.scrollWidth,
            scrollHeight: s.scrollHeight,
            clientWidth: s.clientWidth,
            clientHeight: s.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        }),
      ct = function (t) {
        var e = t.element,
          n = t.nativeEvent,
          r = n.type,
          i = n.target,
          o = n.relatedTarget,
          a = e.contains(i);
        if ('mouseover' === r && a) return !0;
        var u = e.contains(o);
        return !('mouseout' !== r || !a || !u);
      },
      st = function (t) {
        var e,
          n,
          r = t.element,
          i = t.event.config,
          o = ut(),
          a = o.clientWidth,
          u = o.clientHeight,
          c = i.scrollOffsetValue,
          s = 'PX' === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
        return (
          (e = r.getBoundingClientRect()),
          (n = { left: 0, top: s, right: a, bottom: u - s }),
          !(
            e.left > n.right ||
            e.right < n.left ||
            e.top > n.bottom ||
            e.bottom < n.top
          )
        );
      },
      ft = function (t) {
        return function (e, n) {
          var r = e.nativeEvent.type,
            i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
            o = (0, l.default)({}, n, { isActive: i });
          return n && o.isActive === n.isActive ? o : t(e, o) || o;
        };
      },
      lt = function (t) {
        return function (e, n) {
          var r = { elementHovered: ct(e) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              t(e, r)) ||
            r
          );
        };
      },
      dt = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = ut(),
            i = r.stiffScrollTop,
            o = r.scrollHeight,
            a = r.innerHeight,
            u = e.event,
            c = u.config,
            s = u.eventTypeId,
            f = c.scrollOffsetValue,
            d = 'PX' === c.scrollOffsetUnit,
            p = o - a,
            v = Number((i / p).toFixed(2));
          if (n && n.percentTop === v) return n;
          var h,
            g,
            E = (d ? f : (a * (f || 0)) / 100) / p,
            m = 0;
          n &&
            ((h = v > n.percentTop),
            (m = (g = n.scrollingDown !== h) ? v : n.anchorTop));
          var y = s === M ? v >= m + E : v <= m - E,
            _ = (0, l.default)({}, n, {
              percentTop: v,
              inBounds: y,
              anchorTop: m,
              scrollingDown: h,
            });
          return (n && y && (g || _.inBounds !== n.inBounds) && t(e, _)) || _;
        };
      },
      pt = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clickCount: 0 },
            r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && t(e, r)) || r;
        };
      },
      vt = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, l.default)({}, rt, {
          handler: et(
            t ? Z : $,
            ft(function (t, e) {
              return e.isActive ? nt.handler(t, e) : e;
            })
          ),
        });
      },
      ht = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, l.default)({}, rt, {
          handler: et(
            t ? Z : $,
            ft(function (t, e) {
              return e.isActive ? e : nt.handler(t, e);
            })
          ),
        });
      },
      gt = (0, l.default)({}, ot, {
        handler:
          ((f = function (t, e) {
            var n = e.elementVisible,
              r = t.event;
            return !t.store.getState().ixData.events[
              r.action.config.autoStopEventId
            ] && e.triggered
              ? e
              : (r.eventTypeId === j) === n
              ? (tt(t), (0, l.default)({}, e, { triggered: !0 }))
              : e;
          }),
          function (t, e) {
            var n = (0, l.default)({}, e, { elementVisible: st(t) });
            return (
              ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) &&
                f(t, n)) ||
              n
            );
          }),
      }),
      Et =
        ((r = {}),
        (0, o.default)(r, S, vt()),
        (0, o.default)(r, R, ht()),
        (0, o.default)(r, x, vt()),
        (0, o.default)(r, A, ht()),
        (0, o.default)(r, P, vt(!1)),
        (0, o.default)(r, L, ht(!1)),
        (0, o.default)(r, C, vt()),
        (0, o.default)(r, N, ht()),
        (0, o.default)(r, V, {
          types: 'ecommerce-cart-open',
          handler: et(Z, tt),
        }),
        (0, o.default)(r, U, {
          types: 'ecommerce-cart-close',
          handler: et(Z, tt),
        }),
        (0, o.default)(r, _, {
          types: 'click',
          handler: et(
            Z,
            pt(function (t, e) {
              var n,
                r,
                i,
                o = e.clickCount;
              (r = (n = t).store),
                (i = n.event.action.config.autoStopEventId),
                Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
            })
          ),
        }),
        (0, o.default)(r, b, {
          types: 'click',
          handler: et(
            Z,
            pt(function (t, e) {
              2 === e.clickCount && tt(t);
            })
          ),
        }),
        (0, o.default)(r, I, (0, l.default)({}, nt, { types: 'mousedown' })),
        (0, o.default)(r, w, (0, l.default)({}, nt, { types: 'mouseup' })),
        (0, o.default)(r, T, {
          types: 'mouseover mouseout',
          handler: et(
            Z,
            lt(function (t, e) {
              e.elementHovered && tt(t);
            })
          ),
        }),
        (0, o.default)(r, O, {
          types: 'mouseover mouseout',
          handler: et(
            Z,
            lt(function (t, e) {
              e.elementHovered || tt(t);
            })
          ),
        }),
        (0, o.default)(r, D, {
          types: 'mousemove mouseout scroll',
          handler: function (t) {
            var e = t.store,
              n = t.element,
              r = t.eventConfig,
              i = t.nativeEvent,
              o = t.eventStateKey,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              u = r.basedOn,
              c = r.selectedAxis,
              s = r.continuousParameterGroupId,
              f = r.reverse,
              l = r.restingState,
              d = void 0 === l ? 0 : l,
              p = i.clientX,
              v = void 0 === p ? a.clientX : p,
              g = i.clientY,
              m = void 0 === g ? a.clientY : g,
              y = i.pageX,
              _ = void 0 === y ? a.pageX : y,
              b = i.pageY,
              I = void 0 === b ? a.pageY : b,
              w = 'X_AXIS' === c,
              T = 'mouseout' === i.type,
              O = d / 100,
              A = s,
              x = !1;
            switch (u) {
              case h.EventBasedOn.VIEWPORT:
                O = w
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(m, window.innerHeight) / window.innerHeight;
                break;
              case h.EventBasedOn.PAGE:
                var S = ut(),
                  R = S.scrollLeft,
                  C = S.scrollTop,
                  N = S.scrollWidth,
                  L = S.scrollHeight;
                O = w ? Math.min(R + _, N) / N : Math.min(C + I, L) / L;
                break;
              case h.EventBasedOn.ELEMENT:
              default:
                A = K(o, s);
                var P = 0 === i.type.indexOf('mouse');
                if (P && !0 !== Z({ element: n, nativeEvent: i })) break;
                var D = n.getBoundingClientRect(),
                  M = D.left,
                  j = D.top,
                  F = D.width,
                  k = D.height;
                if (
                  !P &&
                  !(function (t, e) {
                    return (
                      t.left > e.left &&
                      t.left < e.right &&
                      t.top > e.top &&
                      t.top < e.bottom
                    );
                  })({ left: v, top: m }, D)
                )
                  break;
                (x = !0), (O = w ? (v - M) / F : (m - j) / k);
            }
            return (
              T && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
              (u !== h.EventBasedOn.ELEMENT || x || x !== a.elementHovered) &&
                ((O = f ? 1 - O : O),
                e.dispatch((0, E.parameterChanged)(A, O))),
              { elementHovered: x, clientX: v, clientY: m, pageX: _, pageY: I }
            );
          },
        }),
        (0, o.default)(r, B, {
          types: it,
          handler: function (t) {
            var e = t.store,
              n = t.eventConfig,
              r = n.continuousParameterGroupId,
              i = n.reverse,
              o = ut(),
              a = o.scrollTop / (o.scrollHeight - o.clientHeight);
            (a = i ? 1 - a : a), e.dispatch((0, E.parameterChanged)(r, a));
          },
        }),
        (0, o.default)(r, G, {
          types: it,
          handler: function (t) {
            var e = t.element,
              n = t.store,
              r = t.eventConfig,
              i = t.eventStateKey,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              a = ut(),
              u = a.scrollLeft,
              c = a.scrollTop,
              s = a.scrollWidth,
              f = a.scrollHeight,
              l = a.clientHeight,
              d = r.basedOn,
              p = r.selectedAxis,
              v = r.continuousParameterGroupId,
              g = r.startsEntering,
              m = r.startsExiting,
              y = r.addEndOffset,
              _ = r.addStartOffset,
              b = r.addOffsetValue,
              I = void 0 === b ? 0 : b,
              w = r.endOffsetValue,
              T = void 0 === w ? 0 : w,
              O = 'X_AXIS' === p;
            if (d === h.EventBasedOn.VIEWPORT) {
              var A = O ? u / s : c / f;
              return (
                A !== o.scrollPercent &&
                  n.dispatch((0, E.parameterChanged)(v, A)),
                { scrollPercent: A }
              );
            }
            var x = K(i, v),
              S = e.getBoundingClientRect(),
              R = (_ ? I : 0) / 100,
              C = (y ? T : 0) / 100;
            (R = g ? R : 1 - R), (C = m ? C : 1 - C);
            var N = S.top + Math.min(S.height * R, l),
              L = S.top + S.height * C - N,
              P = Math.min(l + L, f),
              D = Math.min(Math.max(0, l - N), P) / P;
            return (
              D !== o.scrollPercent &&
                n.dispatch((0, E.parameterChanged)(x, D)),
              { scrollPercent: D }
            );
          },
        }),
        (0, o.default)(r, j, gt),
        (0, o.default)(r, F, gt),
        (0, o.default)(
          r,
          M,
          (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
              e.scrollingDown && tt(t);
            }),
          })
        ),
        (0, o.default)(
          r,
          k,
          (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
              e.scrollingDown || tt(t);
            }),
          })
        ),
        (0, o.default)(r, X, {
          types: 'readystatechange IX2_PAGE_UPDATE',
          handler: et(
            $,
            (function (t) {
              return function (e, n) {
                var r = { finished: 'complete' === document.readyState };
                return !r.finished || (n && n.finshed) || t(e), r;
              };
            })(tt)
          ),
        }),
        (0, o.default)(r, W, {
          types: 'readystatechange IX2_PAGE_UPDATE',
          handler: et(
            $,
            (function (t) {
              return function (e, n) {
                return n || t(e), { started: !0 };
              };
            })(tt)
          ),
        }),
        r);
    e.default = Et;
  },
  function (t, e, n) {
    var r = n(314)();
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(66),
      i = n(315),
      o = n(127),
      a = n(128),
      u = n(2),
      c = n(328),
      s = 'Expected a function',
      f = 8,
      l = 32,
      d = 128,
      p = 256;
    t.exports = function (t) {
      return i(function (e) {
        var n = e.length,
          i = n,
          v = r.prototype.thru;
        for (t && e.reverse(); i--; ) {
          var h = e[i];
          if ('function' != typeof h) throw new TypeError(s);
          if (v && !g && 'wrapper' == a(h)) var g = new r([], !0);
        }
        for (i = g ? i : n; ++i < n; ) {
          h = e[i];
          var E = a(h),
            m = 'wrapper' == E ? o(h) : void 0;
          g =
            m && c(m[0]) && m[1] == (d | f | l | p) && !m[4].length && 1 == m[9]
              ? g[a(m[0])].apply(g, m[3])
              : 1 == h.length && c(h)
              ? g[E]()
              : g.thru(h);
        }
        return function () {
          var t = arguments,
            r = t[0];
          if (g && 1 == t.length && u(r)) return g.plant(r).value();
          for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
            o = e[i].call(this, o);
          return o;
        };
      });
    };
  },
  function (t, e, n) {
    var r = n(316),
      i = n(319),
      o = n(321);
    t.exports = function (t) {
      return o(i(t, void 0, r), t + '');
    };
  },
  function (t, e, n) {
    var r = n(317);
    t.exports = function (t) {
      return null != t && t.length ? r(t, 1) : [];
    };
  },
  function (t, e, n) {
    var r = n(52),
      i = n(318);
    t.exports = function t(e, n, o, a, u) {
      var c = -1,
        s = e.length;
      for (o || (o = i), u || (u = []); ++c < s; ) {
        var f = e[c];
        n > 0 && o(f)
          ? n > 1
            ? t(f, n - 1, o, a, u)
            : r(u, f)
          : a || (u[u.length] = f);
      }
      return u;
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = n(37),
      o = n(2),
      a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  },
  function (t, e, n) {
    var r = n(320),
      i = Math.max;
    t.exports = function (t, e, n) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
            ++a < u;

          )
            c[a] = o[e + a];
          a = -1;
          for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
          return (s[e] = n(c)), r(t, this, s);
        }
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2]);
      }
      return t.apply(e, n);
    };
  },
  function (t, e, n) {
    var r = n(322),
      i = n(324)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(323),
      i = n(125),
      o = n(63),
      a = i
        ? function (t, e) {
            return i(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: r(e),
              writable: !0,
            });
          }
        : o;
    t.exports = a;
  },
  function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, e) {
    var n = 800,
      r = 16,
      i = Date.now;
    t.exports = function (t) {
      var e = 0,
        o = 0;
      return function () {
        var a = i(),
          u = r - (a - o);
        if (((o = a), u > 0)) {
          if (++e >= n) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function (t, e, n) {
    var r = n(109),
      i = r && new r();
    t.exports = i;
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(68),
      i = n(127),
      o = n(128),
      a = n(329);
    t.exports = function (t) {
      var e = o(t),
        n = a[e];
      if ('function' != typeof n || !(e in r.prototype)) return !1;
      if (t === n) return !0;
      var u = i(n);
      return !!u && t === u[0];
    };
  },
  function (t, e, n) {
    var r = n(68),
      i = n(66),
      o = n(67),
      a = n(2),
      u = n(12),
      c = n(330),
      s = Object.prototype.hasOwnProperty;
    function f(t) {
      if (u(t) && !a(t) && !(t instanceof r)) {
        if (t instanceof i) return t;
        if (s.call(t, '__wrapped__')) return c(t);
      }
      return new i(t);
    }
    (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
  },
  function (t, e, n) {
    var r = n(68),
      i = n(66),
      o = n(331);
    t.exports = function (t) {
      if (t instanceof r) return t.clone();
      var e = new i(t.__wrapped__, t.__chain__);
      return (
        (e.__actions__ = o(t.__actions__)),
        (e.__index__ = t.__index__),
        (e.__values__ = t.__values__),
        e
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = -1,
        r = t.length;
      for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
      return e;
    };
  },
  function (t, e, n) {
    var r = n(333),
      i = n(64);
    t.exports = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = i(n)) == n ? n : 0),
        void 0 !== e && (e = (e = i(e)) == e ? e : 0),
        r(i(t), e, n)
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        t == t &&
          (void 0 !== n && (t = t <= n ? t : n),
          void 0 !== e && (t = t >= e ? t : e)),
        t
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'links',
      (t.exports = function (t, e) {
        var n,
          i,
          o,
          a = {},
          u = t(window),
          c = r.env(),
          s = window.location,
          f = document.createElement('a'),
          l = 'w--current',
          d = /index\.(html|php)$/,
          p = /\/$/;
        function v(e) {
          var r =
            (n && e.getAttribute('href-disabled')) || e.getAttribute('href');
          if (((f.href = r), !(r.indexOf(':') >= 0))) {
            var a = t(e);
            if (
              f.hash.length > 1 &&
              f.host + f.pathname === s.host + s.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
              var u = t(f.hash);
              u.length && i.push({ link: a, sec: u, active: !1 });
            } else if ('#' !== r && '' !== r) {
              var c = f.href === s.href || r === o || (d.test(r) && p.test(o));
              g(a, l, c);
            }
          }
        }
        function h() {
          var t = u.scrollTop(),
            n = u.height();
          e.each(i, function (e) {
            var r = e.link,
              i = e.sec,
              o = i.offset().top,
              a = i.outerHeight(),
              u = 0.5 * n,
              c = i.is(':visible') && o + a - u >= t && o + u <= t + n;
            e.active !== c && ((e.active = c), g(r, l, c));
          });
        }
        function g(t, e, n) {
          var r = t.hasClass(e);
          (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
        }
        return (
          (a.ready =
            a.design =
            a.preview =
              function () {
                (n = c && r.env('design')),
                  (o = r.env('slug') || s.pathname || ''),
                  r.scroll.off(h),
                  (i = []);
                for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                i.length && (r.scroll.on(h), h());
              }),
          a
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'scroll',
      (t.exports = function (t) {
        var e = {
            WF_CLICK_EMPTY: 'click.wf-empty-link',
            WF_CLICK_SCROLL: 'click.wf-scroll',
          },
          n = window.location,
          i = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : window.history,
          o = t(window),
          a = t(document),
          u = t(document.body),
          c =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 15);
            },
          s = r.env('editor') ? '.w-editor-body' : 'body',
          f =
            'header, ' +
            s +
            ' > .header, ' +
            s +
            ' > .w-nav:not([data-no-scroll])',
          l = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ')',
          p = document.createElement('style');
        p.appendChild(
          document.createTextNode(
            '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
          )
        );
        var v = /^#[a-zA-Z0-9][\w:.-]*$/;
        var h =
          'function' == typeof window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)');
        function g(t, e) {
          var n;
          switch (e) {
            case 'add':
              (n = t.attr('tabindex'))
                ? t.attr('data-wf-tabindex-swap', n)
                : t.attr('tabindex', '-1');
              break;
            case 'remove':
              (n = t.attr('data-wf-tabindex-swap'))
                ? (t.attr('tabindex', n), t.removeAttr('data-wf-tabindex-swap'))
                : t.removeAttr('tabindex');
          }
          t.toggleClass('wf-force-outline-none', 'add' === e);
        }
        function E(e) {
          var a = e.currentTarget;
          if (
            !(
              r.env('design') ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))
            )
          ) {
            var s,
              l =
                ((s = a),
                v.test(s.hash) && s.host + s.pathname === n.host + n.pathname
                  ? a.hash
                  : '');
            if ('' !== l) {
              var d = t(l);
              d.length &&
                (e && (e.preventDefault(), e.stopPropagation()),
                (function (t) {
                  if (
                    n.hash !== t &&
                    i &&
                    i.pushState &&
                    (!r.env.chrome || 'file:' !== n.protocol)
                  ) {
                    var e = i.state && i.state.hash;
                    e !== t && i.pushState({ hash: t }, '', t);
                  }
                })(l),
                window.setTimeout(
                  function () {
                    !(function (e, n) {
                      var r = o.scrollTop(),
                        i = (function (e) {
                          var n = t(f),
                            r =
                              'fixed' === n.css('position')
                                ? n.outerHeight()
                                : 0,
                            i = e.offset().top - r;
                          if ('mid' === e.data('scroll')) {
                            var a = o.height() - r,
                              u = e.outerHeight();
                            u < a && (i -= Math.round((a - u) / 2));
                          }
                          return i;
                        })(e);
                      if (r === i) return;
                      var a = (function (t, e, n) {
                          if (
                            'none' ===
                              document.body.getAttribute(
                                'data-wf-scroll-motion'
                              ) ||
                            h.matches
                          )
                            return 0;
                          var r = 1;
                          return (
                            u.add(t).each(function (t, e) {
                              var n = parseFloat(
                                e.getAttribute('data-scroll-time')
                              );
                              !isNaN(n) && n >= 0 && (r = n);
                            }),
                            (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) *
                              r
                          );
                        })(e, r, i),
                        s = Date.now();
                      c(function t() {
                        var e = Date.now() - s;
                        window.scroll(
                          0,
                          (function (t, e, n, r) {
                            return n > r
                              ? e
                              : t +
                                  (e - t) *
                                    ((i = n / r) < 0.5
                                      ? 4 * i * i * i
                                      : (i - 1) * (2 * i - 2) * (2 * i - 2) +
                                        1);
                            var i;
                          })(r, i, e, a)
                        ),
                          e <= a ? c(t) : 'function' == typeof n && n();
                      });
                    })(d, function () {
                      g(d, 'add'),
                        d.get(0).focus({ preventScroll: !0 }),
                        g(d, 'remove');
                    });
                  },
                  e ? 0 : 300
                ));
            }
          }
        }
        return {
          ready: function () {
            var t = e.WF_CLICK_EMPTY,
              n = e.WF_CLICK_SCROLL;
            a.on(n, d, E),
              a.on(t, l, function (t) {
                t.preventDefault();
              }),
              document.head.insertBefore(p, document.head.firstChild);
          },
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(3).define(
      'touch',
      (t.exports = function (t) {
        var e = {},
          n = window.getSelection;
        function r(e) {
          var r,
            i,
            o = !1,
            a = !1,
            u = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function c(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((o = !0),
              e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX),
              (i = r));
          }
          function s(e) {
            if (o) {
              if (a && 'mousemove' === e.type)
                return e.preventDefault(), void e.stopPropagation();
              var r = e.touches,
                c = r ? r[0].clientX : e.clientX,
                s = c - i;
              (i = c),
                Math.abs(s) > u &&
                  n &&
                  '' === String(n()) &&
                  (!(function (e, n, r) {
                    var i = t.Event(e, { originalEvent: n });
                    t(n.target).trigger(i, r);
                  })('swipe', e, { direction: s > 0 ? 'right' : 'left' }),
                  l());
            }
          }
          function f(t) {
            if (o)
              return (
                (o = !1),
                a && 'mouseup' === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void (a = !1))
                  : void 0
              );
          }
          function l() {
            o = !1;
          }
          e.addEventListener('touchstart', c, !1),
            e.addEventListener('touchmove', s, !1),
            e.addEventListener('touchend', f, !1),
            e.addEventListener('touchcancel', l, !1),
            e.addEventListener('mousedown', c, !1),
            e.addEventListener('mousemove', s, !1),
            e.addEventListener('mouseup', f, !1),
            e.addEventListener('mouseout', l, !1),
            (this.destroy = function () {
              e.removeEventListener('touchstart', c, !1),
                e.removeEventListener('touchmove', s, !1),
                e.removeEventListener('touchend', f, !1),
                e.removeEventListener('touchcancel', l, !1),
                e.removeEventListener('mousedown', c, !1),
                e.removeEventListener('mousemove', s, !1),
                e.removeEventListener('mouseup', f, !1),
                e.removeEventListener('mouseout', l, !1),
                (e = null);
            });
        }
        return (
          (t.event.special.tap = { bindType: 'click', delegateType: 'click' }),
          (e.init = function (e) {
            return (e = 'string' == typeof e ? t(e).get(0) : e)
              ? new r(e)
              : null;
          }),
          (e.instance = e.init(document)),
          e
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(25),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      a = !0,
      u = /^#[a-zA-Z0-9\-_]+$/;
    r.define(
      'dropdown',
      (t.exports = function (t, e) {
        var n,
          c,
          s = e.debounce,
          f = {},
          l = r.env(),
          d = !1,
          p = r.env.touch,
          v = '.w-dropdown',
          h = 'w--open',
          g = i.triggers,
          E = 900,
          m = 'focusout' + v,
          y = 'keydown' + v,
          _ = 'mouseenter' + v,
          b = 'mousemove' + v,
          I = 'mouseleave' + v,
          w = (p ? 'click' : 'mouseup') + v,
          T = 'w-close' + v,
          O = 'setting' + v,
          A = t(document);
        function x() {
          (n = l && r.env('design')), (c = A.find(v)).each(S);
        }
        function S(e, i) {
          var c = t(i),
            f = t.data(i, v);
          f ||
            (f = t.data(i, v, {
              open: !1,
              el: c,
              config: {},
              selectedIdx: -1,
            })),
            (f.toggle = f.el.children('.w-dropdown-toggle')),
            (f.list = f.el.children('.w-dropdown-list')),
            (f.links = f.list.find('a:not(.w-dropdown .w-dropdown a)')),
            (f.complete = (function (t) {
              return function () {
                t.list.removeClass(h),
                  t.toggle.removeClass(h),
                  t.manageZ && t.el.css('z-index', '');
              };
            })(f)),
            (f.mouseLeave = (function (t) {
              return function () {
                (t.hovering = !1), t.links.is(':focus') || L(t);
              };
            })(f)),
            (f.mouseUpOutside = (function (e) {
              e.mouseUpOutside && A.off(w, e.mouseUpOutside);
              return s(function (n) {
                if (e.open) {
                  var i = t(n.target);
                  if (!i.closest('.w-dropdown-toggle').length) {
                    var o = -1 === t.inArray(e.el[0], i.parents(v)),
                      a = r.env('editor');
                    if (o) {
                      if (a) {
                        var u =
                            1 === i.parents().length &&
                            1 === i.parents('svg').length,
                          c = i.parents(
                            '.w-editor-bem-EditorHoverControls'
                          ).length;
                        if (u || c) return;
                      }
                      L(e);
                    }
                  }
                }
              });
            })(f)),
            (f.mouseMoveOutside = (function (e) {
              return s(function (n) {
                if (e.open) {
                  var r = t(n.target),
                    i = -1 === t.inArray(e.el[0], r.parents(v));
                  if (i) {
                    var o = r.parents(
                        '.w-editor-bem-EditorHoverControls'
                      ).length,
                      a = r.parents('.w-editor-bem-RTToolbar').length,
                      u = t('.w-editor-bem-EditorOverlay'),
                      c =
                        u.find('.w-editor-edit-outline').length ||
                        u.find('.w-editor-bem-RTToolbar').length;
                    if (o || a || c) return;
                    (e.hovering = !1), L(e);
                  }
                }
              });
            })(f)),
            R(f);
          var d = f.toggle.attr('id'),
            p = f.list.attr('id');
          d || (d = 'w-dropdown-toggle-' + e),
            p || (p = 'w-dropdown-list-' + e),
            f.toggle.attr('id', d),
            f.toggle.attr('aria-controls', p),
            f.toggle.attr('aria-haspopup', 'menu'),
            f.toggle.attr('aria-expanded', 'false'),
            f.toggle
              .find('.w-icon-dropdown-toggle')
              .attr('aria-hidden', 'true'),
            'BUTTON' !== f.toggle.prop('tagName') &&
              (f.toggle.attr('role', 'button'),
              f.toggle.attr('tabindex') || f.toggle.attr('tabindex', '0')),
            f.list.attr('id', p),
            f.list.attr('aria-labelledby', d),
            f.links.each(function (t, e) {
              e.hasAttribute('tabindex') || e.setAttribute('tabindex', '0'),
                u.test(e.hash) && e.addEventListener('click', L.bind(null, f));
            }),
            f.el.off(v),
            f.toggle.off(v),
            f.nav && f.nav.off(v);
          var g = C(f, a);
          n &&
            f.el.on(
              O,
              (function (t) {
                return function (e, n) {
                  (n = n || {}),
                    R(t),
                    !0 === n.open && N(t),
                    !1 === n.open && L(t, { immediate: !0 });
                };
              })(f)
            ),
            n ||
              (l && ((f.hovering = !1), L(f)),
              f.config.hover &&
                f.toggle.on(
                  _,
                  (function (t) {
                    return function () {
                      (t.hovering = !0), N(t);
                    };
                  })(f)
                ),
              f.el.on(T, g),
              f.el.on(
                y,
                (function (t) {
                  return function (e) {
                    if (!n && t.open)
                      switch (
                        ((t.selectedIdx = t.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case o.HOME:
                          if (!t.open) return;
                          return (t.selectedIdx = 0), P(t), e.preventDefault();
                        case o.END:
                          if (!t.open) return;
                          return (
                            (t.selectedIdx = t.links.length - 1),
                            P(t),
                            e.preventDefault()
                          );
                        case o.ESCAPE:
                          return L(t), t.toggle.focus(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                          return (
                            (t.selectedIdx = Math.min(
                              t.links.length - 1,
                              t.selectedIdx + 1
                            )),
                            P(t),
                            e.preventDefault()
                          );
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                          return (
                            (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                            P(t),
                            e.preventDefault()
                          );
                      }
                  };
                })(f)
              ),
              f.el.on(
                m,
                (function (t) {
                  return s(function (e) {
                    var n = e.relatedTarget,
                      r = e.target,
                      i = t.el[0],
                      o = i.contains(n) || i.contains(r);
                    return o || L(t), e.stopPropagation();
                  });
                })(f)
              ),
              f.toggle.on(w, g),
              f.toggle.on(
                y,
                (function (t) {
                  var e = C(t, a);
                  return function (r) {
                    if (!n) {
                      if (!t.open)
                        switch (r.keyCode) {
                          case o.ARROW_UP:
                          case o.ARROW_DOWN:
                            return r.stopPropagation();
                        }
                      switch (r.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return e(), r.stopPropagation(), r.preventDefault();
                      }
                    }
                  };
                })(f)
              ),
              (f.nav = f.el.closest('.w-nav')),
              f.nav.on(T, g));
        }
        function R(t) {
          var e = Number(t.el.css('z-index'));
          (t.manageZ = e === E || e === E + 1),
            (t.config = {
              hover: 'true' === t.el.attr('data-hover') && !p,
              delay: t.el.attr('data-delay'),
            });
        }
        function C(t, e) {
          return s(function (n) {
            if (t.open || (n && 'w-close' === n.type))
              return L(t, { forceClose: e });
            N(t);
          });
        }
        function N(e) {
          if (!e.open) {
            !(function (e) {
              var n = e.el[0];
              c.each(function (e, r) {
                var i = t(r);
                i.is(n) || i.has(n).length || i.triggerHandler(T);
              });
            })(e),
              (e.open = !0),
              e.list.addClass(h),
              e.toggle.addClass(h),
              e.toggle.attr('aria-expanded', 'true'),
              g.intro(0, e.el[0]),
              r.redraw.up(),
              e.manageZ && e.el.css('z-index', E + 1);
            var i = r.env('editor');
            n || A.on(w, e.mouseUpOutside),
              e.hovering && !i && e.el.on(I, e.mouseLeave),
              e.hovering && i && A.on(b, e.mouseMoveOutside),
              window.clearTimeout(e.delayId);
          }
        }
        function L(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.immediate,
            r = e.forceClose;
          if (t.open && (!t.config.hover || !t.hovering || r)) {
            t.toggle.attr('aria-expanded', 'false'), (t.open = !1);
            var i = t.config;
            if (
              (g.outro(0, t.el[0]),
              A.off(w, t.mouseUpOutside),
              A.off(b, t.mouseMoveOutside),
              t.el.off(I, t.mouseLeave),
              window.clearTimeout(t.delayId),
              !i.delay || n)
            )
              return t.complete();
            t.delayId = window.setTimeout(t.complete, i.delay);
          }
        }
        function P(t) {
          t.links[t.selectedIdx] && t.links[t.selectedIdx].focus();
        }
        return (
          (f.ready = x),
          (f.design = function () {
            d &&
              A.find(v).each(function (e, n) {
                t(n).triggerHandler(T);
              }),
              (d = !1),
              x();
          }),
          (f.preview = function () {
            (d = !0), x();
          }),
          f
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(0)(n(339)),
      i = n(3);
    i.define(
      'forms',
      (t.exports = function (t, e) {
        var n,
          o,
          a,
          u,
          c,
          s = {},
          f = t(document),
          l = window.location,
          d = window.XDomainRequest && !window.atob,
          p = '.w-form',
          v = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          g = window.alert,
          E = i.env(),
          m = /list-manage[1-9]?.com/i,
          y = e.debounce(function () {
            g(
              'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
            );
          }, 100);
        function _(e, n) {
          var r = t(n),
            i = t.data(n, p);
          i || (i = t.data(n, p, { form: r })), b(i);
          var a = r.closest('div.w-form');
          (i.done = a.find('> .w-form-done')),
            (i.fail = a.find('> .w-form-fail')),
            (i.fileUploads = a.find('.w-file-upload')),
            i.fileUploads.each(function (e) {
              !(function (e, n) {
                if (!n.fileUploads || !n.fileUploads[e]) return;
                var r,
                  i = t(n.fileUploads[e]),
                  o = i.find('> .w-file-upload-default'),
                  a = i.find('> .w-file-upload-uploading'),
                  u = i.find('> .w-file-upload-success'),
                  s = i.find('> .w-file-upload-error'),
                  f = o.find('.w-file-upload-input'),
                  l = o.find('.w-file-upload-label'),
                  d = l.children(),
                  p = s.find('.w-file-upload-error-msg'),
                  v = u.find('.w-file-upload-file'),
                  h = u.find('.w-file-remove-link'),
                  g = v.find('.w-file-upload-file-name'),
                  m = p.attr('data-w-size-error'),
                  y = p.attr('data-w-type-error'),
                  _ = p.attr('data-w-generic-error');
                E ||
                  l.on('click keydown', function (t) {
                    ('keydown' === t.type &&
                      13 !== t.which &&
                      32 !== t.which) ||
                      (t.preventDefault(), f.click());
                  });
                if (
                  (l
                    .find('.w-icon-file-upload-icon')
                    .attr('aria-hidden', 'true'),
                  h
                    .find('.w-icon-file-upload-remove')
                    .attr('aria-hidden', 'true'),
                  E)
                )
                  f.on('click', function (t) {
                    t.preventDefault();
                  }),
                    l.on('click', function (t) {
                      t.preventDefault();
                    }),
                    d.on('click', function (t) {
                      t.preventDefault();
                    });
                else {
                  h.on('click keydown', function (t) {
                    if ('keydown' === t.type) {
                      if (13 !== t.which && 32 !== t.which) return;
                      t.preventDefault();
                    }
                    f.removeAttr('data-value'),
                      f.val(''),
                      g.html(''),
                      o.toggle(!0),
                      u.toggle(!1),
                      l.focus();
                  }),
                    f.on('change', function (i) {
                      (r = i.target && i.target.files && i.target.files[0]) &&
                        (o.toggle(!1),
                        s.toggle(!1),
                        a.toggle(!0),
                        a.focus(),
                        g.text(r.name),
                        x() || I(n),
                        (n.fileUploads[e].uploading = !0),
                        (function (e, n) {
                          var r = new URLSearchParams({
                            name: e.name,
                            size: e.size,
                          });
                          t.ajax({
                            type: 'GET',
                            url: ''.concat(c, '?').concat(r),
                            crossDomain: !0,
                          })
                            .done(function (t) {
                              n(null, t);
                            })
                            .fail(function (t) {
                              n(t);
                            });
                        })(r, O));
                    });
                  var w = l.outerHeight();
                  f.height(w), f.width(1);
                }
                function T(t) {
                  var r = t.responseJSON && t.responseJSON.msg,
                    i = _;
                  'string' == typeof r &&
                  0 === r.indexOf('InvalidFileTypeError')
                    ? (i = y)
                    : 'string' == typeof r &&
                      0 === r.indexOf('MaxFileSizeError') &&
                      (i = m),
                    p.text(i),
                    f.removeAttr('data-value'),
                    f.val(''),
                    a.toggle(!1),
                    o.toggle(!0),
                    s.toggle(!0),
                    s.focus(),
                    (n.fileUploads[e].uploading = !1),
                    x() || b(n);
                }
                function O(e, n) {
                  if (e) return T(e);
                  var i = n.fileName,
                    o = n.postData,
                    a = n.fileId,
                    u = n.s3Url;
                  f.attr('data-value', a),
                    (function (e, n, r, i, o) {
                      var a = new FormData();
                      for (var u in n) a.append(u, n[u]);
                      a.append('file', r, i),
                        t
                          .ajax({
                            type: 'POST',
                            url: e,
                            data: a,
                            processData: !1,
                            contentType: !1,
                          })
                          .done(function () {
                            o(null);
                          })
                          .fail(function (t) {
                            o(t);
                          });
                    })(u, o, r, i, A);
                }
                function A(t) {
                  if (t) return T(t);
                  a.toggle(!1),
                    u.css('display', 'inline-block'),
                    u.focus(),
                    (n.fileUploads[e].uploading = !1),
                    x() || b(n);
                }
                function x() {
                  var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                  return t.some(function (t) {
                    return t.uploading;
                  });
                }
              })(e, i);
            });
          var u =
            i.form.attr('aria-label') || i.form.attr('data-name') || 'Form';
          i.done.attr('aria-label') || i.form.attr('aria-label', u),
            i.done.attr('tabindex', '-1'),
            i.done.attr('role', 'region'),
            i.done.attr('aria-label') ||
              i.done.attr('aria-label', u + ' success'),
            i.fail.attr('tabindex', '-1'),
            i.fail.attr('role', 'region'),
            i.fail.attr('aria-label') ||
              i.fail.attr('aria-label', u + ' failure');
          var s = (i.action = r.attr('action'));
          (i.handler = null),
            (i.redirect = r.attr('data-redirect')),
            m.test(s) ? (i.handler = A) : s || (o ? (i.handler = O) : y());
        }
        function b(t) {
          var e = (t.btn = t.form.find(':input[type="submit"]'));
          (t.wait = t.btn.attr('data-wait') || null),
            (t.success = !1),
            e.prop('disabled', !1),
            t.label && e.val(t.label);
        }
        function I(t) {
          var e = t.btn,
            n = t.wait;
          e.prop('disabled', !0), n && ((t.label = e.val()), e.val(n));
        }
        function w(e, n) {
          var r = null;
          return (
            (n = n || {}),
            e
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (i, o) {
                var a = t(o),
                  u = a.attr('type'),
                  c =
                    a.attr('data-name') || a.attr('name') || 'Field ' + (i + 1),
                  s = a.val();
                if ('checkbox' === u) s = a.is(':checked');
                else if ('radio' === u) {
                  if (null === n[c] || 'string' == typeof n[c]) return;
                  s =
                    e
                      .find('input[name="' + a.attr('name') + '"]:checked')
                      .val() || null;
                }
                'string' == typeof s && (s = t.trim(s)),
                  (n[c] = s),
                  (r =
                    r ||
                    (function (t, e, n, r) {
                      var i = null;
                      'password' === e
                        ? (i = 'Passwords cannot be submitted.')
                        : t.attr('required')
                        ? r
                          ? v.test(t.attr('type')) &&
                            (h.test(r) ||
                              (i =
                                'Please enter a valid email address for: ' + n))
                          : (i = 'Please fill out the required field: ' + n)
                        : 'g-recaptcha-response' !== n ||
                          r ||
                          (i = 'Please confirm youâ€™re not a robot.');
                      return i;
                    })(a, u, c, s));
              }),
            r
          );
        }
        s.ready =
          s.design =
          s.preview =
            function () {
              !(function () {
                (o = t('html').attr('data-wf-site')),
                  (u = 'https://webflow.com/api/v1/form/' + o),
                  d &&
                    u.indexOf('https://webflow.com') >= 0 &&
                    (u = u.replace(
                      'https://webflow.com',
                      'http://formdata.webflow.com'
                    ));
                if (
                  ((c = ''.concat(u, '/signFile')),
                  !(n = t(p + ' form')).length)
                )
                  return;
                n.each(_);
              })(),
                E ||
                  a ||
                  (function () {
                    (a = !0),
                      f.on('submit', p + ' form', function (e) {
                        var n = t.data(this, p);
                        n.handler && ((n.evt = e), n.handler(n));
                      });
                    var e = [
                      ['checkbox', '.w-checkbox-input'],
                      ['radio', '.w-radio-input'],
                    ];
                    f.on(
                      'change',
                      p + ' form input[type="checkbox"]:not(.w-checkbox-input)',
                      function (e) {
                        t(e.target)
                          .siblings('.w-checkbox-input')
                          .toggleClass('w--redirected-checked');
                      }
                    ),
                      f.on(
                        'change',
                        p + ' form input[type="radio"]',
                        function (e) {
                          t(
                            'input[name="'
                              .concat(e.target.name, '"]:not(')
                              .concat('.w-checkbox-input', ')')
                          ).map(function (e, n) {
                            return t(n)
                              .siblings('.w-radio-input')
                              .removeClass('w--redirected-checked');
                          });
                          var n = t(e.target);
                          n.hasClass('w-radio-input') ||
                            n
                              .siblings('.w-radio-input')
                              .addClass('w--redirected-checked');
                        }
                      ),
                      e.forEach(function (e) {
                        var n = (0, r.default)(e, 2),
                          i = n[0],
                          o = n[1];
                        f.on(
                          'focus',
                          p +
                            ' form input[type="'.concat(i, '"]:not(') +
                            o +
                            ')',
                          function (e) {
                            t(e.target)
                              .siblings(o)
                              .addClass('w--redirected-focus'),
                              t(e.target)
                                .filter(
                                  ':focus-visible, [data-wf-focus-visible]'
                                )
                                .siblings(o)
                                .addClass('w--redirected-focus-visible');
                          }
                        ),
                          f.on(
                            'blur',
                            p +
                              ' form input[type="'.concat(i, '"]:not(') +
                              o +
                              ')',
                            function (e) {
                              t(e.target)
                                .siblings(o)
                                .removeClass(
                                  ''
                                    .concat('w--redirected-focus', ' ')
                                    .concat('w--redirected-focus-visible')
                                );
                            }
                          );
                      });
                  })();
            };
        var T = { _mkto_trk: 'marketo' };
        function O(e) {
          b(e);
          var n = e.form,
            r = {
              name: n.attr('data-name') || n.attr('name') || 'Untitled Form',
              source: l.href,
              test: i.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                n.html()
              ),
              trackingCookies: document.cookie
                .split('; ')
                .reduce(function (t, e) {
                  var n = e.split('='),
                    r = n[0];
                  if (r in T) {
                    var i = T[r],
                      o = n.slice(1).join('=');
                    t[i] = o;
                  }
                  return t;
                }, {}),
            },
            a = n.attr('data-wf-flow');
          a && (r.wfFlow = a), S(e);
          var c = w(n, r.fields);
          if (c) return g(c);
          (r.fileUploads = (function (e) {
            var n = {};
            return (
              e.find(':input[type="file"]').each(function (e, r) {
                var i = t(r),
                  o =
                    i.attr('data-name') || i.attr('name') || 'File ' + (e + 1),
                  a = i.attr('data-value');
                'string' == typeof a && (a = t.trim(a)), (n[o] = a);
              }),
              n
            );
          })(n)),
            I(e),
            o
              ? t
                  .ajax({
                    url: u,
                    type: 'POST',
                    data: r,
                    dataType: 'json',
                    crossDomain: !0,
                  })
                  .done(function (t) {
                    t && 200 === t.code && (e.success = !0), x(e);
                  })
                  .fail(function () {
                    x(e);
                  })
              : x(e);
        }
        function A(n) {
          b(n);
          var r = n.form,
            i = {};
          if (!/^https/.test(l.href) || /^https/.test(n.action)) {
            S(n);
            var o,
              a = w(r, i);
            if (a) return g(a);
            I(n),
              e.each(i, function (t, e) {
                v.test(e) && (i.EMAIL = t),
                  /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                  /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t),
                  /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
              }),
              o &&
                !i.FNAME &&
                ((o = o.split(' ')),
                (i.FNAME = o[0]),
                (i.LNAME = i.LNAME || o[1]));
            var u = n.action.replace('/post?', '/post-json?') + '&c=?',
              c = u.indexOf('u=') + 2;
            c = u.substring(c, u.indexOf('&', c));
            var s = u.indexOf('id=') + 3;
            (s = u.substring(s, u.indexOf('&', s))),
              (i['b_' + c + '_' + s] = ''),
              t
                .ajax({ url: u, data: i, dataType: 'jsonp' })
                .done(function (t) {
                  (n.success = 'success' === t.result || /already/.test(t.msg)),
                    n.success || console.info('MailChimp error: ' + t.msg),
                    x(n);
                })
                .fail(function () {
                  x(n);
                });
          } else r.attr('method', 'post');
        }
        function x(t) {
          var e = t.form,
            n = t.redirect,
            r = t.success;
          r && n
            ? i.location(n)
            : (t.done.toggle(r),
              t.fail.toggle(!r),
              r ? t.done.focus() : t.fail.focus(),
              e.toggle(!r),
              b(t));
        }
        function S(t) {
          t.evt && t.evt.preventDefault(), (t.evt = null);
        }
        return s;
      })
    );
  },
  function (t, e, n) {
    var r = n(340),
      i = n(341),
      o = n(342);
    t.exports = function (t, e) {
      return r(t) || i(t, e) || o();
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = [],
        r = !0,
        i = !1,
        o = void 0;
      try {
        for (
          var a, u = t[Symbol.iterator]();
          !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        (i = !0), (o = t);
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (i) throw o;
        }
      }
      return n;
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = 'w-condition-invisible',
      o = '.' + i;
    function a(t) {
      return Boolean(t.$el && t.$el.closest(o).length);
    }
    function u(t, e) {
      for (var n = t; n >= 0; n--) if (!a(e[n])) return n;
      return -1;
    }
    function c(t, e) {
      for (var n = t; n <= e.length - 1; n++) if (!a(e[n])) return n;
      return -1;
    }
    function s(t, e) {
      t.attr('aria-label') || t.attr('aria-label', e);
    }
    function f(t, e, n, r) {
      var o,
        f,
        l,
        d = n.tram,
        p = Array.isArray,
        v = 'w-lightbox-',
        h = /(^|\s+)/g,
        g = [],
        E = [];
      function m(t, e) {
        return (
          (g = p(t) ? t : [t]),
          f || m.build(),
          (function (t) {
            return t.filter(function (t) {
              return !a(t);
            });
          })(g).length > 1 &&
            ((f.items = f.empty),
            g.forEach(function (t, e) {
              var n = k('thumbnail'),
                r = k('item')
                  .prop('tabIndex', 0)
                  .attr('aria-controls', 'w-lightbox-view')
                  .attr('role', 'tab')
                  .append(n);
              s(r, 'show item '.concat(e + 1, ' of ').concat(g.length)),
                a(t) && r.addClass(i),
                (f.items = f.items.add(r)),
                C(t.thumbnailUrl || t.url, function (t) {
                  t.prop('width') > t.prop('height')
                    ? D(t, 'wide')
                    : D(t, 'tall'),
                    n.append(D(t, 'thumbnail-image'));
                });
            }),
            f.strip.empty().append(f.items),
            D(f.content, 'group')),
          d(M(f.lightbox, 'hide').trigger('focus'))
            .add('opacity .3s')
            .start({ opacity: 1 }),
          D(f.html, 'noscroll'),
          m.show(e || 0)
        );
      }
      function y(t) {
        return function (e) {
          this === e.target && (e.stopPropagation(), e.preventDefault(), t());
        };
      }
      (m.build = function () {
        return (
          m.destroy(),
          ((f = { html: n(e.documentElement), empty: n() }).arrowLeft = k(
            'control left inactive'
          )
            .attr('role', 'button')
            .attr('aria-hidden', !0)
            .attr('aria-controls', 'w-lightbox-view')),
          (f.arrowRight = k('control right inactive')
            .attr('role', 'button')
            .attr('aria-hidden', !0)
            .attr('aria-controls', 'w-lightbox-view')),
          (f.close = k('control close').attr('role', 'button')),
          s(f.arrowLeft, 'previous image'),
          s(f.arrowRight, 'next image'),
          s(f.close, 'close lightbox'),
          (f.spinner = k('spinner')
            .attr('role', 'progressbar')
            .attr('aria-live', 'polite')
            .attr('aria-hidden', !1)
            .attr('aria-busy', !0)
            .attr('aria-valuemin', 0)
            .attr('aria-valuemax', 100)
            .attr('aria-valuenow', 0)
            .attr('aria-valuetext', 'Loading image')),
          (f.strip = k('strip').attr('role', 'tablist')),
          (l = new N(f.spinner, L('hide'))),
          (f.content = k('content').append(
            f.spinner,
            f.arrowLeft,
            f.arrowRight,
            f.close
          )),
          (f.container = k('container').append(f.content, f.strip)),
          (f.lightbox = k('backdrop hide').append(f.container)),
          f.strip.on('click', P('item'), w),
          f.content
            .on('swipe', T)
            .on('click', P('left'), _)
            .on('click', P('right'), b)
            .on('click', P('close'), I)
            .on('click', P('image, caption'), b),
          f.container.on('click', P('view'), I).on('dragstart', P('img'), A),
          f.lightbox.on('keydown', x).on('focusin', O),
          n(r).append(f.lightbox),
          m
        );
      }),
        (m.destroy = function () {
          f && (M(f.html, 'noscroll'), f.lightbox.remove(), (f = void 0));
        }),
        (m.show = function (t) {
          if (t !== o) {
            var e = g[t];
            if (!e) return m.hide();
            if (a(e)) {
              if (t < o) {
                var r = u(t - 1, g);
                t = r > -1 ? r : t;
              } else {
                var i = c(t + 1, g);
                t = i > -1 ? i : t;
              }
              e = g[t];
            }
            var s,
              p,
              v = o;
            return (
              (o = t),
              f.spinner
                .attr('aria-hidden', !1)
                .attr('aria-busy', !0)
                .attr('aria-valuenow', 0)
                .attr('aria-valuetext', 'Loading image'),
              l.show(),
              C(
                (e.html &&
                  ((s = e.width),
                  (p = e.height),
                  'data:image/svg+xml;charset=utf-8,' +
                    encodeURI(
                      '<svg xmlns="http://www.w3.org/2000/svg" width="' +
                        s +
                        '" height="' +
                        p +
                        '"/>'
                    ))) ||
                  e.url,
                function (r) {
                  if (t === o) {
                    var i,
                      a,
                      s = k('figure', 'figure').append(D(r, 'image')),
                      p = k('frame').append(s),
                      h = k('view')
                        .prop('tabIndex', 0)
                        .attr('id', 'w-lightbox-view')
                        .append(p);
                    e.html &&
                      ((a = (i = n(e.html)).is('iframe')) && i.on('load', E),
                      s.append(D(i, 'embed'))),
                      e.caption &&
                        s.append(k('caption', 'figcaption').text(e.caption)),
                      f.spinner.before(h),
                      a || E();
                  }
                  function E() {
                    if (
                      (f.spinner
                        .attr('aria-hidden', !0)
                        .attr('aria-busy', !1)
                        .attr('aria-valuenow', 100)
                        .attr('aria-valuetext', 'Loaded image'),
                      l.hide(),
                      t === o)
                    ) {
                      var e = (function (t, e) {
                        return -1 === u(t - 1, e);
                      })(t, g);
                      j(f.arrowLeft, 'inactive', e),
                        F(f.arrowLeft, e),
                        e && f.arrowLeft.is(':focus') && f.arrowRight.focus();
                      var n,
                        r = (function (t, e) {
                          return -1 === c(t + 1, e);
                        })(t, g);
                      if (
                        (j(f.arrowRight, 'inactive', r),
                        F(f.arrowRight, r),
                        r && f.arrowRight.is(':focus') && f.arrowLeft.focus(),
                        f.view
                          ? (d(f.view)
                              .add('opacity .3s')
                              .start({ opacity: 0 })
                              .then(
                                ((n = f.view),
                                function () {
                                  n.remove();
                                })
                              ),
                            d(h)
                              .add('opacity .3s')
                              .add('transform .3s')
                              .set({ x: t > v ? '80px' : '-80px' })
                              .start({ opacity: 1, x: 0 }))
                          : h.css('opacity', 1),
                        (f.view = h),
                        f.view.prop('tabIndex', 0),
                        f.items)
                      ) {
                        M(f.items, 'active'),
                          f.items.removeAttr('aria-selected');
                        var i = f.items.eq(t);
                        D(i, 'active'),
                          i.attr('aria-selected', !0),
                          (function (t) {
                            var e,
                              n = t.get(0),
                              r = f.strip.get(0),
                              i = n.offsetLeft,
                              o = n.clientWidth,
                              a = r.scrollLeft,
                              u = r.clientWidth,
                              c = r.scrollWidth - u;
                            i < a
                              ? (e = Math.max(0, i + o - u))
                              : i + o > u + a && (e = Math.min(i, c));
                            null != e &&
                              d(f.strip)
                                .add('scroll-left 500ms')
                                .start({ 'scroll-left': e });
                          })(i);
                      }
                    } else h.remove();
                  }
                }
              ),
              f.close.prop('tabIndex', 0),
              n(':focus').addClass('active-lightbox'),
              0 === E.length &&
                (n('body')
                  .children()
                  .each(function () {
                    n(this).hasClass('w-lightbox-backdrop') ||
                      n(this).is('script') ||
                      (E.push({
                        node: n(this),
                        hidden: n(this).attr('aria-hidden'),
                        tabIndex: n(this).attr('tabIndex'),
                      }),
                      n(this).attr('aria-hidden', !0).attr('tabIndex', -1));
                  }),
                f.close.focus()),
              m
            );
          }
        }),
        (m.hide = function () {
          return (
            d(f.lightbox).add('opacity .3s').start({ opacity: 0 }).then(R), m
          );
        }),
        (m.prev = function () {
          var t = u(o - 1, g);
          t > -1 && m.show(t);
        }),
        (m.next = function () {
          var t = c(o + 1, g);
          t > -1 && m.show(t);
        });
      var _ = y(m.prev),
        b = y(m.next),
        I = y(m.hide),
        w = function (t) {
          var e = n(this).index();
          t.preventDefault(), m.show(e);
        },
        T = function (t, e) {
          t.preventDefault(),
            'left' === e.direction
              ? m.next()
              : 'right' === e.direction && m.prev();
        },
        O = function () {
          this.focus();
        };
      function A(t) {
        t.preventDefault();
      }
      function x(t) {
        var e = t.keyCode;
        27 === e || S(e, 'close')
          ? m.hide()
          : 37 === e || S(e, 'left')
          ? m.prev()
          : 39 === e || S(e, 'right')
          ? m.next()
          : S(e, 'item') && n(':focus').click();
      }
      function S(t, e) {
        if (13 !== t && 32 !== t) return !1;
        var r = n(':focus').attr('class'),
          i = L(e).trim();
        return r.includes(i);
      }
      function R() {
        f &&
          (f.strip.scrollLeft(0).empty(),
          M(f.html, 'noscroll'),
          D(f.lightbox, 'hide'),
          f.view && f.view.remove(),
          M(f.content, 'group'),
          D(f.arrowLeft, 'inactive'),
          D(f.arrowRight, 'inactive'),
          (o = f.view = void 0),
          E.forEach(function (t) {
            var e = t.node;
            e &&
              (t.hidden
                ? e.attr('aria-hidden', t.hidden)
                : e.removeAttr('aria-hidden'),
              t.tabIndex
                ? e.attr('tabIndex', t.tabIndex)
                : e.removeAttr('tabIndex'));
          }),
          (E = []),
          n('.active-lightbox').removeClass('active-lightbox').focus());
      }
      function C(t, e) {
        var n = k('img', 'img');
        return (
          n.one('load', function () {
            e(n);
          }),
          n.attr('src', t),
          n
        );
      }
      function N(t, e, n) {
        (this.$element = t),
          (this.className = e),
          (this.delay = n || 200),
          this.hide();
      }
      function L(t, e) {
        return t.replace(h, (e ? ' .' : ' ') + v);
      }
      function P(t) {
        return L(t, !0);
      }
      function D(t, e) {
        return t.addClass(L(e));
      }
      function M(t, e) {
        return t.removeClass(L(e));
      }
      function j(t, e, n) {
        return t.toggleClass(L(e), n);
      }
      function F(t, e) {
        return t.attr('aria-hidden', e).attr('tabIndex', e ? -1 : 0);
      }
      function k(t, r) {
        return D(n(e.createElement(r || 'div')), t);
      }
      return (
        (N.prototype.show = function () {
          var t = this;
          t.timeoutId ||
            (t.timeoutId = setTimeout(function () {
              t.$element.removeClass(t.className), delete t.timeoutId;
            }, t.delay));
        }),
        (N.prototype.hide = function () {
          if (this.timeoutId)
            return clearTimeout(this.timeoutId), void delete this.timeoutId;
          this.$element.addClass(this.className);
        }),
        (function () {
          var n = t.navigator.userAgent,
            r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
          if (
            (n.indexOf('Android ') > -1 && -1 === n.indexOf('Chrome')) ||
            (r && !(r[2] > 7))
          ) {
            var i = e.createElement('style');
            e.head.appendChild(i), t.addEventListener('resize', o, !0), o();
          }
          function o() {
            var e = t.innerHeight,
              n = t.innerWidth,
              r =
                '.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:' +
                e +
                'px}.w-lightbox-view {width:' +
                n +
                'px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:' +
                0.86 * e +
                'px}.w-lightbox-image {max-width:' +
                n +
                'px;max-height:' +
                e +
                'px}.w-lightbox-group .w-lightbox-image {max-height:' +
                0.86 * e +
                'px}.w-lightbox-strip {padding: 0 ' +
                0.01 * e +
                'px}.w-lightbox-item {width:' +
                0.1 * e +
                'px;padding:' +
                0.02 * e +
                'px ' +
                0.01 * e +
                'px}.w-lightbox-thumbnail {height:' +
                0.1 * e +
                'px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:' +
                0.96 * e +
                'px}.w-lightbox-content {margin-top:' +
                0.02 * e +
                'px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:' +
                0.84 * e +
                'px}.w-lightbox-image {max-width:' +
                0.96 * n +
                'px;max-height:' +
                0.96 * e +
                'px}.w-lightbox-group .w-lightbox-image {max-width:' +
                0.823 * n +
                'px;max-height:' +
                0.84 * e +
                'px}}';
            i.textContent = r;
          }
        })(),
        m
      );
    }
    r.define(
      'lightbox',
      (t.exports = function (t) {
        var e,
          n,
          i,
          o = {},
          a = r.env(),
          u = f(window, document, t, a ? '#lightbox-mountpoint' : 'body'),
          c = t(document),
          l = '.w-lightbox';
        function d(t) {
          var e,
            n,
            r = t.el.children('.w-json').html();
          if (r) {
            try {
              r = JSON.parse(r);
            } catch (t) {
              console.error('Malformed lightbox JSON configuration.', t);
            }
            !(function (t) {
              t.images &&
                (t.images.forEach(function (t) {
                  t.type = 'image';
                }),
                (t.items = t.images));
              t.embed && ((t.embed.type = 'video'), (t.items = [t.embed]));
              t.groupId && (t.group = t.groupId);
            })(r),
              r.items.forEach(function (e) {
                e.$el = t.el;
              }),
              (e = r.group)
                ? ((n = i[e]) || (n = i[e] = []),
                  (t.items = n),
                  r.items.length &&
                    ((t.index = n.length), n.push.apply(n, r.items)))
                : ((t.items = r.items), (t.index = 0));
          } else t.items = [];
        }
        return (
          (o.ready =
            o.design =
            o.preview =
              function () {
                (n = a && r.env('design')),
                  u.destroy(),
                  (i = {}),
                  (e = c.find(l)).webflowLightBox(),
                  e.each(function () {
                    s(t(this), 'open lightbox'),
                      t(this).attr('aria-haspopup', 'dialog');
                  });
              }),
          jQuery.fn.extend({
            webflowLightBox: function () {
              t.each(this, function (e, r) {
                var i = t.data(r, l);
                i ||
                  (i = t.data(r, l, {
                    el: t(r),
                    mode: 'images',
                    images: [],
                    embed: '',
                  })),
                  i.el.off(l),
                  d(i),
                  n
                    ? i.el.on('setting' + l, d.bind(null, i))
                    : i.el
                        .on(
                          'click' + l,
                          (function (t) {
                            return function () {
                              t.items.length && u(t.items, t.index || 0);
                            };
                          })(i)
                        )
                        .on('click' + l, function (t) {
                          t.preventDefault();
                        });
              });
            },
          }),
          o
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(25),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    r.define(
      'navbar',
      (t.exports = function (t, e) {
        var n,
          a,
          u,
          c,
          s = {},
          f = t.tram,
          l = t(window),
          d = t(document),
          p = e.debounce,
          v = r.env(),
          h = '<div class="w-nav-overlay" data-wf-ignore />',
          g = '.w-nav',
          E = 'w--open',
          m = 'w--nav-dropdown-open',
          y = 'w--nav-dropdown-toggle-open',
          _ = 'w--nav-dropdown-list-open',
          b = 'w--nav-link-open',
          I = i.triggers,
          w = t();
        function T() {
          r.resize.off(O);
        }
        function O() {
          a.each(M);
        }
        function A(n, r) {
          var i = t(r),
            a = t.data(r, g);
          a ||
            (a = t.data(r, g, {
              open: !1,
              el: i,
              config: {},
              selectedIdx: -1,
            })),
            (a.menu = i.find('.w-nav-menu')),
            (a.links = a.menu.find('.w-nav-link')),
            (a.dropdowns = a.menu.find('.w-dropdown')),
            (a.dropdownToggle = a.menu.find('.w-dropdown-toggle')),
            (a.dropdownList = a.menu.find('.w-dropdown-list')),
            (a.button = i.find('.w-nav-button')),
            (a.container = i.find('.w-container')),
            (a.overlayContainerId = 'w-nav-overlay-' + n),
            (a.outside = (function (e) {
              e.outside && d.off('click' + g, e.outside);
              return function (n) {
                var r = t(n.target);
                (c && r.closest('.w-editor-bem-EditorOverlay').length) ||
                  D(e, r);
              };
            })(a));
          var s = i.find('.w-nav-brand');
          s &&
            '/' === s.attr('href') &&
            null == s.attr('aria-label') &&
            s.attr('aria-label', 'home'),
            a.button.attr('style', '-webkit-user-select: text;'),
            null == a.button.attr('aria-label') &&
              a.button.attr('aria-label', 'menu'),
            a.button.attr('role', 'button'),
            a.button.attr('tabindex', '0'),
            a.button.attr('aria-controls', a.overlayContainerId),
            a.button.attr('aria-haspopup', 'menu'),
            a.button.attr('aria-expanded', 'false'),
            a.el.off(g),
            a.button.off(g),
            a.menu.off(g),
            R(a),
            u
              ? (S(a),
                a.el.on(
                  'setting' + g,
                  (function (t) {
                    return function (n, r) {
                      r = r || {};
                      var i = l.width();
                      R(t),
                        !0 === r.open && G(t, !0),
                        !1 === r.open && U(t, !0),
                        t.open &&
                          e.defer(function () {
                            i !== l.width() && N(t);
                          });
                    };
                  })(a)
                ))
              : (!(function (e) {
                  if (e.overlay) return;
                  (e.overlay = t(h).appendTo(e.el)),
                    e.overlay.attr('id', e.overlayContainerId),
                    (e.parent = e.menu.parent()),
                    U(e, !0);
                })(a),
                a.button.on('click' + g, L(a)),
                a.menu.on('click' + g, 'a', P(a)),
                a.button.on(
                  'keydown' + g,
                  (function (t) {
                    return function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            L(t)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return U(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          return t.open
                            ? (e.keyCode === o.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation())
                            : (e.preventDefault(), e.stopPropagation());
                      }
                    };
                  })(a)
                ),
                a.el.on(
                  'keydown' + g,
                  (function (t) {
                    return function (e) {
                      if (t.open)
                        switch (
                          ((t.selectedIdx = t.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              U(t),
                              t.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (t.selectedIdx = Math.min(
                                t.links.length - 1,
                                t.selectedIdx + 1
                              )),
                              C(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    };
                  })(a)
                )),
            M(n, r);
        }
        function x(e, n) {
          var r = t.data(n, g);
          r && (S(r), t.removeData(n, g));
        }
        function S(t) {
          t.overlay && (U(t, !0), t.overlay.remove(), (t.overlay = null));
        }
        function R(t) {
          var n = {},
            r = t.config || {},
            i = (n.animation = t.el.attr('data-animation') || 'default');
          (n.animOver = /^over/.test(i)),
            (n.animDirect = /left$/.test(i) ? -1 : 1),
            r.animation !== i && t.open && e.defer(N, t),
            (n.easing = t.el.attr('data-easing') || 'ease'),
            (n.easing2 = t.el.attr('data-easing2') || 'ease');
          var o = t.el.attr('data-duration');
          (n.duration = null != o ? Number(o) : 400),
            (n.docHeight = t.el.attr('data-doc-height')),
            (t.config = n);
        }
        function C(t) {
          if (t.links[t.selectedIdx]) {
            var e = t.links[t.selectedIdx];
            e.focus(), P(e);
          }
        }
        function N(t) {
          t.open && (U(t, !0), G(t, !0));
        }
        function L(t) {
          return p(function () {
            t.open ? U(t) : G(t);
          });
        }
        function P(e) {
          return function (n) {
            var i = t(this).attr('href');
            r.validClick(n.currentTarget)
              ? i && 0 === i.indexOf('#') && e.open && U(e)
              : n.preventDefault();
          };
        }
        (s.ready =
          s.design =
          s.preview =
            function () {
              if (
                ((u = v && r.env('design')),
                (c = r.env('editor')),
                (n = t(document.body)),
                !(a = d.find(g)).length)
              )
                return;
              a.each(A), T(), r.resize.on(O);
            }),
          (s.destroy = function () {
            (w = t()), T(), a && a.length && a.each(x);
          });
        var D = p(function (t, e) {
          if (t.open) {
            var n = e.closest('.w-nav-menu');
            t.menu.is(n) || U(t);
          }
        });
        function M(e, n) {
          var r = t.data(n, g),
            i = (r.collapsed = 'none' !== r.button.css('display'));
          if ((!r.open || i || u || U(r, !0), r.container.length)) {
            var o = (function (e) {
              var n = e.container.css(j);
              'none' === n && (n = '');
              return function (e, r) {
                (r = t(r)).css(j, ''), 'none' === r.css(j) && r.css(j, n);
              };
            })(r);
            r.links.each(o), r.dropdowns.each(o);
          }
          r.open && X(r);
        }
        var j = 'max-width';
        function F(t, e) {
          e.setAttribute('data-nav-menu-open', '');
        }
        function k(t, e) {
          e.removeAttribute('data-nav-menu-open');
        }
        function G(t, e) {
          if (!t.open) {
            (t.open = !0),
              t.menu.each(F),
              t.links.addClass(b),
              t.dropdowns.addClass(m),
              t.dropdownToggle.addClass(y),
              t.dropdownList.addClass(_),
              t.button.addClass(E);
            var n = t.config;
            ('none' === n.animation ||
              !f.support.transform ||
              n.duration <= 0) &&
              (e = !0);
            var i = X(t),
              o = t.menu.outerHeight(!0),
              a = t.menu.outerWidth(!0),
              c = t.el.height(),
              s = t.el[0];
            if (
              (M(0, s),
              I.intro(0, s),
              r.redraw.up(),
              u || d.on('click' + g, t.outside),
              e)
            )
              v();
            else {
              var l = 'transform ' + n.duration + 'ms ' + n.easing;
              if (
                (t.overlay &&
                  ((w = t.menu.prev()), t.overlay.show().append(t.menu)),
                n.animOver)
              )
                return (
                  f(t.menu)
                    .add(l)
                    .set({ x: n.animDirect * a, height: i })
                    .start({ x: 0 })
                    .then(v),
                  void (t.overlay && t.overlay.width(a))
                );
              var p = c + o;
              f(t.menu).add(l).set({ y: -p }).start({ y: 0 }).then(v);
            }
          }
          function v() {
            t.button.attr('aria-expanded', 'true');
          }
        }
        function X(t) {
          var e = t.config,
            r = e.docHeight ? d.height() : n.height();
          return (
            e.animOver
              ? t.menu.height(r)
              : 'fixed' !== t.el.css('position') && (r -= t.el.outerHeight(!0)),
            t.overlay && t.overlay.height(r),
            r
          );
        }
        function U(t, e) {
          if (t.open) {
            (t.open = !1), t.button.removeClass(E);
            var n = t.config;
            if (
              (('none' === n.animation ||
                !f.support.transform ||
                n.duration <= 0) &&
                (e = !0),
              I.outro(0, t.el[0]),
              d.off('click' + g, t.outside),
              e)
            )
              return f(t.menu).stop(), void c();
            var r = 'transform ' + n.duration + 'ms ' + n.easing2,
              i = t.menu.outerHeight(!0),
              o = t.menu.outerWidth(!0),
              a = t.el.height();
            if (n.animOver)
              f(t.menu)
                .add(r)
                .start({ x: o * n.animDirect })
                .then(c);
            else {
              var u = a + i;
              f(t.menu).add(r).start({ y: -u }).then(c);
            }
          }
          function c() {
            t.menu.height(''),
              f(t.menu).set({ x: 0, y: 0 }),
              t.menu.each(k),
              t.links.removeClass(b),
              t.dropdowns.removeClass(m),
              t.dropdownToggle.removeClass(y),
              t.dropdownList.removeClass(_),
              t.overlay &&
                t.overlay.children().length &&
                (w.length ? t.menu.insertAfter(w) : t.menu.prependTo(t.parent),
                t.overlay.attr('style', '').hide()),
              t.el.triggerHandler('w-close'),
              t.button.attr('aria-expanded', 'false');
          }
        }
        return s;
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(25);
    r.define(
      'tabs',
      (t.exports = function (t) {
        var e,
          n,
          o = {},
          a = t.tram,
          u = t(document),
          c = r.env,
          s = c.safari,
          f = c(),
          l = 'data-w-tab',
          d = 'data-w-pane',
          p = '.w-tabs',
          v = 'w--current',
          h = 'w--tab-active',
          g = i.triggers,
          E = !1;
        function m() {
          (n = f && r.env('design')),
            (e = u.find(p)).length &&
              (e.each(b),
              r.env('preview') && !E && e.each(_),
              y(),
              r.redraw.on(o.redraw));
        }
        function y() {
          r.redraw.off(o.redraw);
        }
        function _(e, n) {
          var r = t.data(n, p);
          r &&
            (r.links && r.links.each(g.reset),
            r.panes && r.panes.each(g.reset));
        }
        function b(e, r) {
          var i = p.substr(1) + '-' + e,
            o = t(r),
            a = t.data(r, p);
          if (
            (a || (a = t.data(r, p, { el: o, config: {} })),
            (a.current = null),
            (a.tabIdentifier = i + '-' + l),
            (a.paneIdentifier = i + '-' + d),
            (a.menu = o.children('.w-tab-menu')),
            (a.links = a.menu.children('.w-tab-link')),
            (a.content = o.children('.w-tab-content')),
            (a.panes = a.content.children('.w-tab-pane')),
            a.el.off(p),
            a.links.off(p),
            a.menu.attr('role', 'tablist'),
            a.links.attr('tabindex', '-1'),
            (function (t) {
              var e = {};
              e.easing = t.el.attr('data-easing') || 'ease';
              var n = parseInt(t.el.attr('data-duration-in'), 10);
              n = e.intro = n == n ? n : 0;
              var r = parseInt(t.el.attr('data-duration-out'), 10);
              (r = e.outro = r == r ? r : 0),
                (e.immediate = !n && !r),
                (t.config = e);
            })(a),
            !n)
          ) {
            a.links.on(
              'click' + p,
              (function (t) {
                return function (e) {
                  e.preventDefault();
                  var n = e.currentTarget.getAttribute(l);
                  n && I(t, { tab: n });
                };
              })(a)
            ),
              a.links.on(
                'keydown' + p,
                (function (t) {
                  return function (e) {
                    var n = (function (t) {
                        var e = t.current;
                        return Array.prototype.findIndex.call(
                          t.links,
                          function (t) {
                            return t.getAttribute(l) === e;
                          },
                          null
                        );
                      })(t),
                      r = e.key,
                      i = {
                        ArrowLeft: n - 1,
                        ArrowUp: n - 1,
                        ArrowRight: n + 1,
                        ArrowDown: n + 1,
                        End: t.links.length - 1,
                        Home: 0,
                      };
                    if (r in i) {
                      e.preventDefault();
                      var o = i[r];
                      -1 === o && (o = t.links.length - 1),
                        o === t.links.length && (o = 0);
                      var a = t.links[o],
                        u = a.getAttribute(l);
                      u && I(t, { tab: u });
                    }
                  };
                })(a)
              );
            var u = a.links.filter('.' + v).attr(l);
            u && I(a, { tab: u, immediate: !0 });
          }
        }
        function I(e, n) {
          n = n || {};
          var i = e.config,
            o = i.easing,
            u = n.tab;
          if (u !== e.current) {
            var c;
            (e.current = u),
              e.links.each(function (r, o) {
                var a = t(o);
                if (n.immediate || i.immediate) {
                  var s = e.panes[r];
                  o.id || (o.id = e.tabIdentifier + '-' + r),
                    s.id || (s.id = e.paneIdentifier + '-' + r),
                    (o.href = '#' + s.id),
                    o.setAttribute('role', 'tab'),
                    o.setAttribute('aria-controls', s.id),
                    o.setAttribute('aria-selected', 'false'),
                    s.setAttribute('role', 'tabpanel'),
                    s.setAttribute('aria-labelledby', o.id);
                }
                o.getAttribute(l) === u
                  ? ((c = o),
                    a
                      .addClass(v)
                      .removeAttr('tabindex')
                      .attr({ 'aria-selected': 'true' })
                      .each(g.intro))
                  : a.hasClass(v) &&
                    a
                      .removeClass(v)
                      .attr({ tabindex: '-1', 'aria-selected': 'false' })
                      .each(g.outro);
              });
            var f = [],
              d = [];
            e.panes.each(function (e, n) {
              var r = t(n);
              n.getAttribute(l) === u ? f.push(n) : r.hasClass(h) && d.push(n);
            });
            var p = t(f),
              m = t(d);
            if (n.immediate || i.immediate)
              return (
                p.addClass(h).each(g.intro),
                m.removeClass(h),
                void (E || r.redraw.up())
              );
            var y = window.scrollX,
              _ = window.scrollY;
            c.focus(),
              window.scrollTo(y, _),
              m.length && i.outro
                ? (m.each(g.outro),
                  a(m)
                    .add('opacity ' + i.outro + 'ms ' + o, { fallback: s })
                    .start({ opacity: 0 })
                    .then(function () {
                      return w(i, m, p);
                    }))
                : w(i, m, p);
          }
        }
        function w(t, e, n) {
          if (
            (e
              .removeClass(h)
              .css({
                opacity: '',
                transition: '',
                transform: '',
                width: '',
                height: '',
              }),
            n.addClass(h).each(g.intro),
            r.redraw.up(),
            !t.intro)
          )
            return a(n).set({ opacity: 1 });
          a(n)
            .set({ opacity: 0 })
            .redraw()
            .add('opacity ' + t.intro + 'ms ' + t.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return (
          (o.ready = o.design = o.preview = m),
          (o.redraw = function () {
            (E = !0), m(), (E = !1);
          }),
          (o.destroy = function () {
            (e = u.find(p)).length && (e.each(_), y());
          }),
          o
        );
      })
    );
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  events: {
    e: {
      id: 'e',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-2',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.list-block',
        originalId:
          '61bfbcd249e78a55c13d5cc1|4650f65a-7bc2-7e4b-dd89-0e07d1522e68',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.list-block',
          originalId:
            '61bfbcd249e78a55c13d5cc1|4650f65a-7bc2-7e4b-dd89-0e07d1522e68',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1642263274532,
    },
    'e-16': {
      id: 'e-16',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-5',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-17',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.div-block-5',
        originalId:
          '625295532800cf7ed68d3dd3|bcfc7f58-8197-351d-dfcc-83afb37f2875',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.div-block-5',
          originalId:
            '625295532800cf7ed68d3dd3|bcfc7f58-8197-351d-dfcc-83afb37f2875',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649617763765,
    },
    'e-17': {
      id: 'e-17',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-6',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-16',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.div-block-5',
        originalId:
          '625295532800cf7ed68d3dd3|bcfc7f58-8197-351d-dfcc-83afb37f2875',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.div-block-5',
          originalId:
            '625295532800cf7ed68d3dd3|bcfc7f58-8197-351d-dfcc-83afb37f2875',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649617763765,
    },
    'e-18': {
      id: 'e-18',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-7',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-19',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.image-animation-trigger',
        originalId:
          '622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.image-animation-trigger',
          originalId:
            '622dc92cc704819afa5003c4|66e40528-f25f-b416-c060-9f4cb6729853',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1647603115978,
    },
    'e-20': {
      id: 'e-20',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625295532800cf7ed68d3dd3',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1649665042061,
    },
    'e-21': {
      id: 'e-21',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-22',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.main-button',
        originalId: '162994a6-2fb4-3e79-3595-758108592f11',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.main-button',
          originalId: '162994a6-2fb4-3e79-3595-758108592f11',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649669621436,
    },
    'e-22': {
      id: 'e-22',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-9',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-21',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.main-button',
        originalId: '162994a6-2fb4-3e79-3595-758108592f11',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.main-button',
          originalId: '162994a6-2fb4-3e79-3595-758108592f11',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649669621436,
    },
    'e-23': {
      id: 'e-23',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-10',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-24',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.service-link-1',
        originalId:
          '625295532800cf7ed68d3dd3|a6f47c33-c56b-fb8f-cc2b-605f1357ca29',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.service-link-1',
          originalId:
            '625295532800cf7ed68d3dd3|a6f47c33-c56b-fb8f-cc2b-605f1357ca29',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649678220535,
    },
    'e-24': {
      id: 'e-24',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-11',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-23',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.service-link-1',
        originalId:
          '625295532800cf7ed68d3dd3|a6f47c33-c56b-fb8f-cc2b-605f1357ca29',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.service-link-1',
          originalId:
            '625295532800cf7ed68d3dd3|a6f47c33-c56b-fb8f-cc2b-605f1357ca29',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649678220536,
    },
    'e-25': {
      id: 'e-25',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-26' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|d70cfb5d-99e3-cdb0-3489-d0ed3a9d8d4c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|d70cfb5d-99e3-cdb0-3489-d0ed3a9d8d4c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1649682955187,
    },
    'e-27': {
      id: 'e-27',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-12', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '81243046-8783-d51a-71a6-adbd6f644254',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '81243046-8783-d51a-71a6-adbd6f644254',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-12-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1649690247241,
    },
    'e-28': {
      id: 'e-28',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-13', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|b479ba17-3d09-4dee-ac08-28c98b603fde',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|b479ba17-3d09-4dee-ac08-28c98b603fde',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-13-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1649690449165,
    },
    'e-29': {
      id: 'e-29',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-13', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|decb06f4-927c-e1a0-b9cc-9bae23979260',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|decb06f4-927c-e1a0-b9cc-9bae23979260',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-13-p',
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1649690748612,
    },
    'e-30': {
      id: 'e-30',
      name: '',
      animationType: 'custom',
      eventTypeId: 'DROPDOWN_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-31',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.dropdown-link',
        originalId: 'eafd025b-53e1-2d84-b0b5-c9034c517a93',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.dropdown-link',
          originalId: 'eafd025b-53e1-2d84-b0b5-c9034c517a93',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649694006399,
    },
    'e-31': {
      id: 'e-31',
      name: '',
      animationType: 'custom',
      eventTypeId: 'DROPDOWN_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-30',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.dropdown-link',
        originalId: 'eafd025b-53e1-2d84-b0b5-c9034c517a93',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.dropdown-link',
          originalId: 'eafd025b-53e1-2d84-b0b5-c9034c517a93',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649694006399,
    },
    'e-35': {
      id: 'e-35',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-36',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|46707e41-20bf-38e0-6282-40ce43f13f0c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|46707e41-20bf-38e0-6282-40ce43f13f0c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649706702822,
    },
    'e-41': {
      id: 'e-41',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-42',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.project-link',
        originalId:
          '625295532800cf7ed68d3dd3|e6fdfb15-7e43-bafa-6778-7a56af9042c0',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.project-link',
          originalId:
            '625295532800cf7ed68d3dd3|e6fdfb15-7e43-bafa-6778-7a56af9042c0',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649771051024,
    },
    'e-42': {
      id: 'e-42',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-24',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-41',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.project-link',
        originalId:
          '625295532800cf7ed68d3dd3|e6fdfb15-7e43-bafa-6778-7a56af9042c0',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.project-link',
          originalId:
            '625295532800cf7ed68d3dd3|e6fdfb15-7e43-bafa-6778-7a56af9042c0',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649771051024,
    },
    'e-43': {
      id: 'e-43',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-44' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|250f4770-b3a7-e380-b64b-0ab02a3f5525',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|250f4770-b3a7-e380-b64b-0ab02a3f5525',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774003118,
    },
    'e-45': {
      id: 'e-45',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-46' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|a51d6f26-c4b1-3e87-97e3-18981062399c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|a51d6f26-c4b1-3e87-97e3-18981062399c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774018071,
    },
    'e-47': {
      id: 'e-47',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-48' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|743dd0ef-88b1-3d2c-2e79-9b8d973673a7',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          selector: '.button-overlap-1',
          originalId:
            '625295532800cf7ed68d3dd3|54084397-e7cc-2689-61a5-89c5574394ea',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774044190,
    },
    'e-49': {
      id: 'e-49',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-50' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '81243046-8783-d51a-71a6-adbd6f644283',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '81243046-8783-d51a-71a6-adbd6f644283',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774063004,
    },
    'e-51': {
      id: 'e-51',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-52' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '81243046-8783-d51a-71a6-adbd6f644285',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '81243046-8783-d51a-71a6-adbd6f644285',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774070133,
    },
    'e-53': {
      id: 'e-53',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-54' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.form-item',
        originalId: '81243046-8783-d51a-71a6-adbd6f644257',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.form-item',
          originalId: '81243046-8783-d51a-71a6-adbd6f644257',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774130359,
    },
    'e-55': {
      id: 'e-55',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-56' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '81243046-8783-d51a-71a6-adbd6f64426f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '81243046-8783-d51a-71a6-adbd6f64426f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649774144167,
    },
    'e-57': {
      id: 'e-57',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-58' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '81243046-8783-d51a-71a6-adbd6f644273',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '81243046-8783-d51a-71a6-adbd6f644273',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1649774154575,
    },
    'e-65': {
      id: 'e-65',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-66' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'c4442ee1-5837-2ede-b004-647ecf03e422',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'c4442ee1-5837-2ede-b004-647ecf03e422',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649780843669,
    },
    'e-67': {
      id: 'e-67',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-12', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: 'c4442ee1-5837-2ede-b004-647ecf03e42b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'c4442ee1-5837-2ede-b004-647ecf03e42b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-12-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1649781623257,
    },
    'e-68': {
      id: 'e-68',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInRight', autoStopEventId: 'e-69' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '127c046d-0a46-5ea8-ba4a-cf2db07a88c1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '127c046d-0a46-5ea8-ba4a-cf2db07a88c1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'RIGHT',
        effectIn: true,
      },
      createdOn: 1649782299383,
    },
    'e-72': {
      id: 'e-72',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-73' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '127c046d-0a46-5ea8-ba4a-cf2db07a88c9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '127c046d-0a46-5ea8-ba4a-cf2db07a88c9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1649782325890,
    },
    'e-74': {
      id: 'e-74',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-75' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'c4442ee1-5837-2ede-b004-647ecf03e420',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'c4442ee1-5837-2ede-b004-647ecf03e420',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649782906927,
    },
    'e-76': {
      id: 'e-76',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-77' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'c4442ee1-5837-2ede-b004-647ecf03e427',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'c4442ee1-5837-2ede-b004-647ecf03e427',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649782935770,
    },
    'e-78': {
      id: 'e-78',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-25',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-79',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625295532800cf7ed68d3dd3|37cef26d-4918-b8b6-15d4-d72d73dc662c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|37cef26d-4918-b8b6-15d4-d72d73dc662c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649786000374,
    },
    'e-79': {
      id: 'e-79',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-26',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-78',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625295532800cf7ed68d3dd3|37cef26d-4918-b8b6-15d4-d72d73dc662c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|37cef26d-4918-b8b6-15d4-d72d73dc662c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649786000375,
    },
    'e-80': {
      id: 'e-80',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-17',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-81',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.moving-link',
        originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b5c',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.moving-link',
          originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b5c',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649788950774,
    },
    'e-81': {
      id: 'e-81',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-18',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-80',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.moving-link',
        originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b5c',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.moving-link',
          originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b5c',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649788950774,
    },
    'e-84': {
      id: 'e-84',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-27',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-85',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.footer-link',
        originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b66',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.footer-link',
          originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b66',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649789656598,
    },
    'e-85': {
      id: 'e-85',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-28',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-84',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.footer-link',
        originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b66',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.footer-link',
          originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b66',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649789656600,
    },
    'e-86': {
      id: 'e-86',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-29',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-87',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: 'd62e26df-37e4-4b14-0317-bb32561c8b65',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'd62e26df-37e4-4b14-0317-bb32561c8b65',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649789966151,
    },
    'e-87': {
      id: 'e-87',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-30',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-86',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: 'd62e26df-37e4-4b14-0317-bb32561c8b65',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'd62e26df-37e4-4b14-0317-bb32561c8b65',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649789966151,
    },
    'e-88': {
      id: 'e-88',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-29',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-89',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: 'd62e26df-37e4-4b14-0317-bb32561c8b7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'd62e26df-37e4-4b14-0317-bb32561c8b7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649790463275,
    },
    'e-89': {
      id: 'e-89',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-30',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-88',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: 'd62e26df-37e4-4b14-0317-bb32561c8b7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'd62e26df-37e4-4b14-0317-bb32561c8b7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649790463275,
    },
    'e-90': {
      id: 'e-90',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-31', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.social-link-block',
        originalId:
          '625295532800cf7ed68d3dd3|7bf997b2-1165-d55b-993f-99c185681e56',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.social-link-block',
          originalId:
            '625295532800cf7ed68d3dd3|7bf997b2-1165-d55b-993f-99c185681e56',
          appliesTo: 'CLASS',
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-31-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-31-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
      ],
      createdOn: 1649793686156,
    },
    'e-91': {
      id: 'e-91',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-31', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.moving-link',
        originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b5c',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.moving-link',
          originalId: 'd62e26df-37e4-4b14-0317-bb32561c8b5c',
          appliesTo: 'CLASS',
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-31-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-31-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'ELEMENT',
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
      ],
      createdOn: 1649793879865,
    },
    'e-94': {
      id: 'e-94',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-25',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-95',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649952610466,
    },
    'e-95': {
      id: 'e-95',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-26',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-94',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649952610466,
    },
    'e-96': {
      id: 'e-96',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625812b6718f7c4454c7688f',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1649954853591,
    },
    'e-97': {
      id: 'e-97',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-98' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625812b6718f7c4454c7688f|ddf11325-3788-7c1a-cee7-b1b15beb8c69',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f|ddf11325-3788-7c1a-cee7-b1b15beb8c69',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649956775522,
    },
    'e-99': {
      id: 'e-99',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-100' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|9bc6eed1-0925-887b-e8b3-8b2ccbbe94da',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          selector: '.button-overlap-2',
          originalId:
            '625295532800cf7ed68d3dd3|9bc6eed1-0925-887b-e8b3-8b2ccbbe94da',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1649962259395,
    },
    'e-101': {
      id: 'e-101',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-34',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-102',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.list-block-2',
        originalId:
          '625812b6718f7c4454c7688f|6611700b-9aa6-94ae-c2b9-905324f54ce1',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.list-block-2',
          originalId:
            '625812b6718f7c4454c7688f|6611700b-9aa6-94ae-c2b9-905324f54ce1',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649962326580,
    },
    'e-103': {
      id: 'e-103',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-104' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625812b6718f7c4454c7688f|e5ccdf98-9182-0fa8-b3c8-3bc41e324d2e',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f|e5ccdf98-9182-0fa8-b3c8-3bc41e324d2e',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1649962735991,
    },
    'e-105': {
      id: 'e-105',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-17',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-106',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.social-link-block',
        originalId: '0280d9ed-6fb1-9f48-6888-ba17efa18d16',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.social-link-block',
          originalId: '0280d9ed-6fb1-9f48-6888-ba17efa18d16',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649963956030,
    },
    'e-106': {
      id: 'e-106',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-18',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-105',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.social-link-block',
        originalId: '0280d9ed-6fb1-9f48-6888-ba17efa18d16',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.social-link-block',
          originalId: '0280d9ed-6fb1-9f48-6888-ba17efa18d16',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649963956032,
    },
    'e-107': {
      id: 'e-107',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-108',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649965726838,
    },
    'e-108': {
      id: 'e-108',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-36',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-107',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f|510396d9-c11d-4e18-202c-6e691d99fe68',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649965726840,
    },
    'e-109': {
      id: 'e-109',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_UP',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-41',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-110',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625295532800cf7ed68d3dd3',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 80,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649966748145,
    },
    'e-110': {
      id: 'e-110',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_DOWN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-37',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-109',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625295532800cf7ed68d3dd3',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649966748146,
    },
    'e-122': {
      id: 'e-122',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-13', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa0cd',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa0cd',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-13-p',
          smoothing: 95,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650015853833,
    },
    'e-123': {
      id: 'e-123',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-124',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa0d9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa0d9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650015853833,
    },
    'e-129': {
      id: 'e-129',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62593e6725c63592f267955a',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650015934704,
    },
    'e-130': {
      id: 'e-130',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-131' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa046',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa046',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650016250420,
    },
    'e-132': {
      id: 'e-132',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-133' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa048',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a|30d4cc61-6f64-4f5f-ffa4-74cc231fa048',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650016263496,
    },
    'e-134': {
      id: 'e-134',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-135' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62593e6725c63592f267955a|257a39cf-50ca-afb3-961f-e4551c547620',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a|257a39cf-50ca-afb3-961f-e4551c547620',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650016279277,
    },
    'e-138': {
      id: 'e-138',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-139',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.hero-button',
        originalId: 'ca2bc6d5-05ee-197d-8ec9-c1036282164a',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.hero-button',
          originalId: 'ca2bc6d5-05ee-197d-8ec9-c1036282164a',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650016530378,
    },
    'e-139': {
      id: 'e-139',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-9',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-138',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.hero-button',
        originalId: 'ca2bc6d5-05ee-197d-8ec9-c1036282164a',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.hero-button',
          originalId: 'ca2bc6d5-05ee-197d-8ec9-c1036282164a',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650016530380,
    },
    'e-140': {
      id: 'e-140',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_UP',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-41',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-141',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '62593e6725c63592f267955a',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 80,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650027309682,
    },
    'e-141': {
      id: 'e-141',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_DOWN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-37',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-140',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '62593e6725c63592f267955a',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650027309684,
    },
    'e-142': {
      id: 'e-142',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_UP',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-41',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-143',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625812b6718f7c4454c7688f',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 80,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650027334606,
    },
    'e-143': {
      id: 'e-143',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_DOWN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-37',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-142',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625812b6718f7c4454c7688f',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625812b6718f7c4454c7688f',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650027334608,
    },
    'e-149': {
      id: 'e-149',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-150' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6259799853b885f394592b9d|95166b7e-0066-a9aa-0f1a-c0d6558cca62',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d|95166b7e-0066-a9aa-0f1a-c0d6558cca62',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650031019278,
    },
    'e-151': {
      id: 'e-151',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-152' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6259799853b885f394592b9d|d9eac51a-c030-5ff7-bc23-52a3f779090d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d|d9eac51a-c030-5ff7-bc23-52a3f779090d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650031087194,
    },
    'e-153': {
      id: 'e-153',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-154' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6259799853b885f394592b9d|d9eac51a-c030-5ff7-bc23-52a3f779090f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d|d9eac51a-c030-5ff7-bc23-52a3f779090f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650031087194,
    },
    'e-155': {
      id: 'e-155',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-156' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6259799853b885f394592b9d|d9eac51a-c030-5ff7-bc23-52a3f7790914',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d|d9eac51a-c030-5ff7-bc23-52a3f7790914',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650031087194,
    },
    'e-157': {
      id: 'e-157',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6259799853b885f394592b9d',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650031418429,
    },
    'e-158': {
      id: 'e-158',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_UP',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-41',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-159',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '6259799853b885f394592b9d',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 80,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650031431240,
    },
    'e-159': {
      id: 'e-159',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_DOWN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-37',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-158',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '6259799853b885f394592b9d',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650031431280,
    },
    'e-178': {
      id: 'e-178',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-179' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|60fd2727-1d24-3f05-a09c-b1678f840760',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|60fd2727-1d24-3f05-a09c-b1678f840760',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650120635849,
    },
    'e-205': {
      id: 'e-205',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-42', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625ad796f8c02b57011b5287|a94e5f1d-a642-ed37-464f-372c7a3e410a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|a94e5f1d-a642-ed37-464f-372c7a3e410a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-42-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650208255417,
    },
    'e-219': {
      id: 'e-219',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625ad796f8c02b57011b5287',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650211078033,
    },
    'e-237': {
      id: 'e-237',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-238' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|54fbb69e-1b4e-9674-6064-0acdc57abf35',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|54fbb69e-1b4e-9674-6064-0acdc57abf35',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650214596957,
    },
    'e-239': {
      id: 'e-239',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-240' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|19c85097-7478-eb44-90a0-4195b555e555',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|19c85097-7478-eb44-90a0-4195b555e555',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650216681639,
    },
    'e-243': {
      id: 'e-243',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-244' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|1a10983e-9719-6645-5a9a-de1442134c0a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|1a10983e-9719-6645-5a9a-de1442134c0a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650217402787,
    },
    'e-250': {
      id: 'e-250',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_UP',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-41',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-251',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625c51a3a90df0554ef2f445',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 80,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650217541880,
    },
    'e-251': {
      id: 'e-251',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_SCROLL_DOWN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-37',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-250',
        },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625c51a3a90df0554ef2f445',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650217541881,
    },
    'e-252': {
      id: 'e-252',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625c51a3a90df0554ef2f445',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650217693203,
    },
    'e-253': {
      id: 'e-253',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-12', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625c51a3a90df0554ef2f445|9a021312-ab24-2cd5-5415-994c6659baf1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|9a021312-ab24-2cd5-5415-994c6659baf1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-12-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650217921593,
    },
    'e-260': {
      id: 'e-260',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-261' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|9a021312-ab24-2cd5-5415-994c6659bb0c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|9a021312-ab24-2cd5-5415-994c6659bb0c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650217921593,
    },
    'e-262': {
      id: 'e-262',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-263' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|9a021312-ab24-2cd5-5415-994c6659bb10',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|9a021312-ab24-2cd5-5415-994c6659bb10',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650217921593,
    },
    'e-264': {
      id: 'e-264',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-265',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|916ada64-0b5e-8b31-42f9-1de48b8d031d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|916ada64-0b5e-8b31-42f9-1de48b8d031d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650221823954,
    },
    'e-266': {
      id: 'e-266',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-267',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|d8814c73-0d74-e0e7-84da-a18a5332c4e6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|d8814c73-0d74-e0e7-84da-a18a5332c4e6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650222056188,
    },
    'e-270': {
      id: 'e-270',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-271' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.text-link.in-contact',
        originalId:
          '625c51a3a90df0554ef2f445|e55dcbcf-4885-73b7-f535-0bab10b70005',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.text-link.in-contact',
          originalId:
            '625c51a3a90df0554ef2f445|e55dcbcf-4885-73b7-f535-0bab10b70005',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650222590209,
    },
    'e-274': {
      id: 'e-274',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-275',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|d7ee8872-a53c-2a96-bbc3-d5146859767f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|d7ee8872-a53c-2a96-bbc3-d5146859767f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650222690846,
    },
    'e-276': {
      id: 'e-276',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-277' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|d7ee8872-a53c-2a96-bbc3-d51468597682',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|d7ee8872-a53c-2a96-bbc3-d51468597682',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650222690846,
    },
    'e-278': {
      id: 'e-278',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-279',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|f03ae1e9-947d-a091-7a18-ca59ac7b98fe',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|f03ae1e9-947d-a091-7a18-ca59ac7b98fe',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650222811755,
    },
    'e-280': {
      id: 'e-280',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-281' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625c51a3a90df0554ef2f445|f03ae1e9-947d-a091-7a18-ca59ac7b9901',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625c51a3a90df0554ef2f445|f03ae1e9-947d-a091-7a18-ca59ac7b9901',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650222811755,
    },
    'e-287': {
      id: 'e-287',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-288' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.blue-95-background',
        originalId:
          '625ad796f8c02b57011b5287|24ce1a22-18b1-444d-965b-2f84abcab084',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.blue-95-background',
          originalId:
            '625ad796f8c02b57011b5287|24ce1a22-18b1-444d-965b-2f84abcab084',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650225556475,
    },
    'e-296': {
      id: 'e-296',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-297' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|e88726de-fa4c-07b8-92bf-b52456e6db7a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|e88726de-fa4c-07b8-92bf-b52456e6db7a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650273978336,
    },
    'e-306': {
      id: 'e-306',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-307' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.chessboard.is-90-opacity',
        originalId:
          '625456ef7f4ca5fa11cd6928|4a86bce7-012c-b81a-cb66-af596348ecdb',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.chessboard.is-90-opacity',
          originalId:
            '625456ef7f4ca5fa11cd6928|4a86bce7-012c-b81a-cb66-af596348ecdb',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650275002982,
    },
    'e-308': {
      id: 'e-308',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-309' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.chessboard.is-10-opacity',
        originalId:
          '625456ef7f4ca5fa11cd6928|553a541f-9e99-b05c-71b8-22d559e77b5e',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.chessboard.is-10-opacity',
          originalId:
            '625456ef7f4ca5fa11cd6928|553a541f-9e99-b05c-71b8-22d559e77b5e',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650275023326,
    },
    'e-310': {
      id: 'e-310',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-311' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.chessboard.is-25-opacity',
        originalId:
          '625456ef7f4ca5fa11cd6928|4171b73c-8d62-a670-b0bf-cdf91aa3739d',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.chessboard.is-25-opacity',
          originalId:
            '625456ef7f4ca5fa11cd6928|4171b73c-8d62-a670-b0bf-cdf91aa3739d',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650275031642,
    },
    'e-312': {
      id: 'e-312',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-313' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.chessboard.is-70-opacity',
        originalId:
          '625456ef7f4ca5fa11cd6928|07a7f71e-45b4-ca93-0110-8c9eb2d7dfaa',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.chessboard.is-70-opacity',
          originalId:
            '625456ef7f4ca5fa11cd6928|07a7f71e-45b4-ca93-0110-8c9eb2d7dfaa',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650275040555,
    },
    'e-314': {
      id: 'e-314',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625456ef7f4ca5fa11cd6928',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650275114884,
    },
    'e-317': {
      id: 'e-317',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-318' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'e4da4c37-ee58-167a-cbd7-451e68993ab4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'e4da4c37-ee58-167a-cbd7-451e68993ab4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650275898912,
    },
    'e-319': {
      id: 'e-319',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-32',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-320',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: 'e4da4c37-ee58-167a-cbd7-451e68993a79',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'e4da4c37-ee58-167a-cbd7-451e68993a79',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650275898912,
    },
    'e-320': {
      id: 'e-320',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-33',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-319',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: 'e4da4c37-ee58-167a-cbd7-451e68993a79',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'e4da4c37-ee58-167a-cbd7-451e68993a79',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650275898912,
    },
    'e-331': {
      id: 'e-331',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-332' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|46432781-249a-1d48-81cb-6f7679e7c67a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|46432781-249a-1d48-81cb-6f7679e7c67a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650293037685,
    },
    'e-333': {
      id: 'e-333',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-334' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|46432781-249a-1d48-81cb-6f7679e7c67b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|46432781-249a-1d48-81cb-6f7679e7c67b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650293037685,
    },
    'e-335': {
      id: 'e-335',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-336' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|46432781-249a-1d48-81cb-6f7679e7c685',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|46432781-249a-1d48-81cb-6f7679e7c685',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650293037685,
    },
    'e-339': {
      id: 'e-339',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-340',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|365c0221-a1b5-ce99-dbe0-7cfff6589ca8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|365c0221-a1b5-ce99-dbe0-7cfff6589ca8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650299209232,
    },
    'e-340': {
      id: 'e-340',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-339',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|365c0221-a1b5-ce99-dbe0-7cfff6589ca8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|365c0221-a1b5-ce99-dbe0-7cfff6589ca8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650299209237,
    },
    'e-341': {
      id: 'e-341',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-342',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625ad796f8c02b57011b5287|5792cee3-656f-a750-bb55-58f12d41ecfe',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|5792cee3-656f-a750-bb55-58f12d41ecfe',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650299506843,
    },
    'e-342': {
      id: 'e-342',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-341',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625ad796f8c02b57011b5287|5792cee3-656f-a750-bb55-58f12d41ecfe',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|5792cee3-656f-a750-bb55-58f12d41ecfe',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650299506843,
    },
    'e-345': {
      id: 'e-345',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-51',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-346',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.grid-column',
        originalId:
          '625456ef7f4ca5fa11cd6928|7a3c43df-d6fe-d24b-2388-bbae8ebc3c40',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.grid-column',
          originalId:
            '625456ef7f4ca5fa11cd6928|7a3c43df-d6fe-d24b-2388-bbae8ebc3c40',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650306457672,
    },
    'e-358': {
      id: 'e-358',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-359' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '8fed78bb-6663-0e26-0d71-95493b31d26a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '8fed78bb-6663-0e26-0d71-95493b31d26a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650313913470,
    },
    'e-368': {
      id: 'e-368',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-369' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|377e82b1-d7a7-5592-f32b-c1eeb190bb8a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|377e82b1-d7a7-5592-f32b-c1eeb190bb8a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650361613795,
    },
    'e-370': {
      id: 'e-370',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-371' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6c4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6c4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650361861547,
    },
    'e-372': {
      id: 'e-372',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-373' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6c6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6c6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650361861547,
    },
    'e-374': {
      id: 'e-374',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-375' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6c9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6c9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650361861547,
    },
    'e-376': {
      id: 'e-376',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-377' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6cb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|30946390-fb9d-3239-1507-1146e4d6d6cb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650361861547,
    },
    'e-378': {
      id: 'e-378',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInLeft', autoStopEventId: 'e-379' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|1a8b0185-9541-f19a-9ca8-3c10cafc9e4a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|1a8b0185-9541-f19a-9ca8-3c10cafc9e4a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'LEFT',
        effectIn: true,
      },
      createdOn: 1650361900610,
    },
    'e-380': {
      id: 'e-380',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInLeft', autoStopEventId: 'e-381' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|1a8b0185-9541-f19a-9ca8-3c10cafc9e4b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|1a8b0185-9541-f19a-9ca8-3c10cafc9e4b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'LEFT',
        effectIn: true,
      },
      createdOn: 1650361909510,
    },
    'e-382': {
      id: 'e-382',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-383' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.form-item-2',
        originalId: '8fed78bb-6663-0e26-0d71-95493b31d25b',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.form-item-2',
          originalId: '8fed78bb-6663-0e26-0d71-95493b31d25b',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650361958212,
    },
    'e-384': {
      id: 'e-384',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-385' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '8fed78bb-6663-0e26-0d71-95493b31d277',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '8fed78bb-6663-0e26-0d71-95493b31d277',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650361972386,
    },
    'e-387': {
      id: 'e-387',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-388',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|ee508ccb-e650-2668-78b2-e957a8f3ce27',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|ee508ccb-e650-2668-78b2-e957a8f3ce27',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650364096973,
    },
    'e-439': {
      id: 'e-439',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-440' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|26c3a6d4-5eae-6b63-758a-de7033f7a728',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|26c3a6d4-5eae-6b63-758a-de7033f7a728',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650364795159,
    },
    'e-441': {
      id: 'e-441',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-442' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|26c3a6d4-5eae-6b63-758a-de7033f7a73b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|26c3a6d4-5eae-6b63-758a-de7033f7a73b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650364795159,
    },
    'e-443': {
      id: 'e-443',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-444' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|26c3a6d4-5eae-6b63-758a-de7033f7a748',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|26c3a6d4-5eae-6b63-758a-de7033f7a748',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650364795159,
    },
    'e-447': {
      id: 'e-447',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-448' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|046f37ad-02a7-2234-3516-9af7d05f28b3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|046f37ad-02a7-2234-3516-9af7d05f28b3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650365037093,
    },
    'e-461': {
      id: 'e-461',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625e917db160935e42d735e9',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650371868496,
    },
    'e-484': {
      id: 'e-484',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-485',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1d1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1d1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650374375003,
    },
    'e-486': {
      id: 'e-486',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-487' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650374375003,
    },
    'e-488': {
      id: 'e-488',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-489',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1db',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1db',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650374375003,
    },
    'e-490': {
      id: 'e-490',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-491' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1de',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1de',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650374375003,
    },
    'e-492': {
      id: 'e-492',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-493',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1e5',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1e5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650374375003,
    },
    'e-494': {
      id: 'e-494',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-495' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1e8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|207795e1-e7bd-2968-06c2-ba842a67f1e8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650374375003,
    },
    'e-496': {
      id: 'e-496',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-52',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-497',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.image-animation-trigger-2',
        originalId:
          '61be398bd4648e8c5e4f6b1e|24919fce-37e5-515a-8563-ac568ea56585',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.image-animation-trigger-2',
          originalId:
            '61be398bd4648e8c5e4f6b1e|24919fce-37e5-515a-8563-ac568ea56585',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639950267161,
    },
    'e-498': {
      id: 'e-498',
      name: '',
      animationType: 'custom',
      eventTypeId: 'DROPDOWN_OPEN',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-53',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-499',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.accordion',
        originalId:
          '60b0c490c031f8b431d794d9|0c373da0-2468-7b38-51c5-a7a866e85c18',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.accordion',
          originalId:
            '60b0c490c031f8b431d794d9|0c373da0-2468-7b38-51c5-a7a866e85c18',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1616841112584,
    },
    'e-499': {
      id: 'e-499',
      name: '',
      animationType: 'custom',
      eventTypeId: 'DROPDOWN_CLOSE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-54',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-498',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.accordion',
        originalId:
          '60b0c490c031f8b431d794d9|0c373da0-2468-7b38-51c5-a7a866e85c18',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.accordion',
          originalId:
            '60b0c490c031f8b431d794d9|0c373da0-2468-7b38-51c5-a7a866e85c18',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1616841112584,
    },
    'e-502': {
      id: 'e-502',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-503',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|cd4df95c-2ec6-d31f-b351-e1296ac041f6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|cd4df95c-2ec6-d31f-b351-e1296ac041f6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650377324080,
    },
    'e-503': {
      id: 'e-503',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-502',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|cd4df95c-2ec6-d31f-b351-e1296ac041f6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|cd4df95c-2ec6-d31f-b351-e1296ac041f6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650377324080,
    },
    'e-538': {
      id: 'e-538',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-539' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '2d38a569-f720-e19e-7c81-b9e805bb42c1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '2d38a569-f720-e19e-7c81-b9e805bb42c1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650380312096,
    },
    'e-540': {
      id: 'e-540',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-541' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '2d38a569-f720-e19e-7c81-b9e805bb42c2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '2d38a569-f720-e19e-7c81-b9e805bb42c2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650380312096,
    },
    'e-542': {
      id: 'e-542',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-543' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '2d38a569-f720-e19e-7c81-b9e805bb42ca',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '2d38a569-f720-e19e-7c81-b9e805bb42ca',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650380312096,
    },
    'e-546': {
      id: 'e-546',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInLeft', autoStopEventId: 'e-547' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ecd90ffbcb15409535bda|17335549-d555-c136-2fa3-222a01aa614b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ecd90ffbcb15409535bda|17335549-d555-c136-2fa3-222a01aa614b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'LEFT',
        effectIn: true,
      },
      createdOn: 1650380373898,
    },
    'e-548': {
      id: 'e-548',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625ecd90ffbcb15409535bda',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ecd90ffbcb15409535bda',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650380687080,
    },
    'e-549': {
      id: 'e-549',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-550',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.explore-link-button',
        originalId: '2d38a569-f720-e19e-7c81-b9e805bb42f5',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          id: '2d38a569-f720-e19e-7c81-b9e805bb42f5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650380780816,
    },
    'e-550': {
      id: 'e-550',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-549',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.explore-link-button',
        originalId: '2d38a569-f720-e19e-7c81-b9e805bb42f5',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          id: '2d38a569-f720-e19e-7c81-b9e805bb42f5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650380780816,
    },
    'e-555': {
      id: 'e-555',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-556' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.chessboard-2.is-10-opacity',
        originalId:
          '625ecd90ffbcb15409535bda|eb0c77fc-c906-7a63-05b4-98c532640bc3',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.chessboard-2.is-10-opacity',
          originalId:
            '625ecd90ffbcb15409535bda|eb0c77fc-c906-7a63-05b4-98c532640bc3',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650383872419,
    },
    'e-557': {
      id: 'e-557',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-558' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ecd90ffbcb15409535bda|fdd110b7-196c-1150-4fbf-9566318b386b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ecd90ffbcb15409535bda|fdd110b7-196c-1150-4fbf-9566318b386b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650383883993,
    },
    'e-559': {
      id: 'e-559',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-560' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed36d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed36d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650389831118,
    },
    'e-561': {
      id: 'e-561',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-562' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed36f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed36f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650389831118,
    },
    'e-563': {
      id: 'e-563',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-564' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed372',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed372',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650389831118,
    },
    'e-565': {
      id: 'e-565',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-566' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed374',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|6b60c012-ecc3-d7ca-cb3f-b0fa382ed374',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650389831118,
    },
    'e-567': {
      id: 'e-567',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-568' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|63432cf3-c132-6107-7580-aee976943276',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|63432cf3-c132-6107-7580-aee976943276',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650389930477,
    },
    'e-569': {
      id: 'e-569',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-570' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|63432cf3-c132-6107-7580-aee976943278',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|63432cf3-c132-6107-7580-aee976943278',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650389930477,
    },
    'e-589': {
      id: 'e-589',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-590' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ed1272e2ad3418b3e38ef|fb685d74-3759-2398-190f-e9f766e2d724',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ed1272e2ad3418b3e38ef|fb685d74-3759-2398-190f-e9f766e2d724',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650392213667,
    },
    'e-591': {
      id: 'e-591',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-592' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ed1272e2ad3418b3e38ef|fb685d74-3759-2398-190f-e9f766e2d729',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ed1272e2ad3418b3e38ef|fb685d74-3759-2398-190f-e9f766e2d729',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650392213667,
    },
    'e-609': {
      id: 'e-609',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-610' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '2d38a569-f720-e19e-7c81-b9e805bb42c5',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '2d38a569-f720-e19e-7c81-b9e805bb42c5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650400521153,
    },
    'e-611': {
      id: 'e-611',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-612' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|6962c5e0-33b2-495b-d0fa-c872f005e474',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|6962c5e0-33b2-495b-d0fa-c872f005e474',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650401034030,
    },
    'e-613': {
      id: 'e-613',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-614' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|6962c5e0-33b2-495b-d0fa-c872f005e478',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|6962c5e0-33b2-495b-d0fa-c872f005e478',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650401034030,
    },
    'e-617': {
      id: 'e-617',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-618' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '97d158a8-ebb0-db55-a314-288e44b35e6c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '97d158a8-ebb0-db55-a314-288e44b35e6c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650401235041,
    },
    'e-619': {
      id: 'e-619',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-620' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '97d158a8-ebb0-db55-a314-288e44b35e63',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '97d158a8-ebb0-db55-a314-288e44b35e63',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650444276704,
    },
    'e-621': {
      id: 'e-621',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-622' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '97d158a8-ebb0-db55-a314-288e44b35e68',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '97d158a8-ebb0-db55-a314-288e44b35e68',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650444441695,
    },
    'e-623': {
      id: 'e-623',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-624' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '97d158a8-ebb0-db55-a314-288e44b35e64',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '97d158a8-ebb0-db55-a314-288e44b35e64',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650444588423,
    },
    'e-637': {
      id: 'e-637',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-638' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961120',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961120',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650444816906,
    },
    'e-641': {
      id: 'e-641',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-642',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.grid-button-item',
        originalId:
          '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961152',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.grid-button-item',
          originalId:
            '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961152',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650444816906,
    },
    'e-642': {
      id: 'e-642',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-641',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.grid-button-item',
        originalId:
          '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961152',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.grid-button-item',
          originalId:
            '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961152',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650444816906,
    },
    'e-661': {
      id: 'e-661',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-662' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b7910081202',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b7910081202',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650445555160,
    },
    'e-663': {
      id: 'e-663',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-664' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b7910081203',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b7910081203',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650445555160,
    },
    'e-665': {
      id: 'e-665',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-666' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b791008120d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b791008120d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650445555160,
    },
    'e-667': {
      id: 'e-667',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-668' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|ae857367-8e19-2423-1877-8eda20c923fa',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|ae857367-8e19-2423-1877-8eda20c923fa',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650447023104,
    },
    'e-669': {
      id: 'e-669',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-670' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961128',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961128',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650447057719,
    },
    'e-671': {
      id: 'e-671',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-672' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961123',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|19d1f056-0b94-e47c-7213-54bcdf961123',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650447172876,
    },
    'e-675': {
      id: 'e-675',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-676' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|de471de1-cad3-295e-5098-6305f53f26a9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|de471de1-cad3-295e-5098-6305f53f26a9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650449326797,
    },
    'e-679': {
      id: 'e-679',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-57',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-680',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.gallery-lightbox',
        originalId:
          '6252f3c33937b3952e158690|f0bdc3c6-adef-f6a6-1cb9-397293c6ed4d',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.gallery-lightbox',
          originalId:
            '6252f3c33937b3952e158690|f0bdc3c6-adef-f6a6-1cb9-397293c6ed4d',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1642275406485,
    },
    'e-680': {
      id: 'e-680',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-58',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-679',
        },
      },
      mediaQueries: ['main'],
      target: {
        selector: '.gallery-lightbox',
        originalId:
          '6252f3c33937b3952e158690|f0bdc3c6-adef-f6a6-1cb9-397293c6ed4d',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.gallery-lightbox',
          originalId:
            '6252f3c33937b3952e158690|f0bdc3c6-adef-f6a6-1cb9-397293c6ed4d',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1642275406487,
    },
    'e-685': {
      id: 'e-685',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-686' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|fa62a84a-21f1-117a-ab95-21dfce913a3d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|fa62a84a-21f1-117a-ab95-21dfce913a3d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650457069167,
    },
    'e-687': {
      id: 'e-687',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-688' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|39ed6363-744d-2818-5b16-b5e79b07dd1c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|39ed6363-744d-2818-5b16-b5e79b07dd1c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650457500961,
    },
    'e-691': {
      id: 'e-691',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6252f3c33937b3952e158690',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650459716136,
    },
    'e-692': {
      id: 'e-692',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-693' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b7910081204',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|e6058060-069d-7f12-7ef0-6b7910081204',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650459805704,
    },
    'e-694': {
      id: 'e-694',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-695' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|3fa515c8-052c-e177-f701-0fa1f3c69718',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|3fa515c8-052c-e177-f701-0fa1f3c69718',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650459860058,
    },
    'e-696': {
      id: 'e-696',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-697' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|20b99c2f-50d4-a4bf-dd37-2bd5d6c376d2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|20b99c2f-50d4-a4bf-dd37-2bd5d6c376d2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650460060180,
    },
    'e-718': {
      id: 'e-718',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-719' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedc8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedc8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-720': {
      id: 'e-720',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-721' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedc9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedc9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-722': {
      id: 'e-722',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-723' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedcb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedcb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-724': {
      id: 'e-724',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-725' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedce',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedce',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-726': {
      id: 'e-726',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-727' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedd3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cedd3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-728': {
      id: 'e-728',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-729' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cee06',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cee06',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-730': {
      id: 'e-730',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-731' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cee0d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cee0d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-732': {
      id: 'e-732',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-733' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cee13',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|b97c522a-e9e2-a026-73cb-9108419cee13',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650460225101,
    },
    'e-738': {
      id: 'e-738',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-739' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ed10be6cf4d0c5adf82ec|bdedcb8f-439b-5c38-4c8a-03e62a4e2795',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ed10be6cf4d0c5adf82ec|bdedcb8f-439b-5c38-4c8a-03e62a4e2795',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650462804992,
    },
    'e-740': {
      id: 'e-740',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-741' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ed10be6cf4d0c5adf82ec|bdedcb8f-439b-5c38-4c8a-03e62a4e2797',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ed10be6cf4d0c5adf82ec|bdedcb8f-439b-5c38-4c8a-03e62a4e2797',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650462804992,
    },
    'e-746': {
      id: 'e-746',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-747',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ed10be6cf4d0c5adf82ec|9e280551-f73b-d71c-b0e0-1c0c6a461ae3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ed10be6cf4d0c5adf82ec|9e280551-f73b-d71c-b0e0-1c0c6a461ae3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650462876856,
    },
    'e-748': {
      id: 'e-748',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '625ed10be6cf4d0c5adf82ec',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ed10be6cf4d0c5adf82ec',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650463154350,
    },
    'e-749': {
      id: 'e-749',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-750' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6560fddd-0399-f0ca-e6b5-6eab1785e822',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6560fddd-0399-f0ca-e6b5-6eab1785e822',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650487469301,
    },
    'e-751': {
      id: 'e-751',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-752' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62601794ad978750ee4fb486|505bbe18-4303-c02a-282d-825d51e0ea8c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62601794ad978750ee4fb486|505bbe18-4303-c02a-282d-825d51e0ea8c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650488625283,
    },
    'e-753': {
      id: 'e-753',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-754' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|597aa2b4-6e97-fe74-238e-609b8a4af7f9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|597aa2b4-6e97-fe74-238e-609b8a4af7f9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650493427195,
    },
    'e-755': {
      id: 'e-755',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-756' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|597aa2b4-6e97-fe74-238e-609b8a4af7fe',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|597aa2b4-6e97-fe74-238e-609b8a4af7fe',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650493427195,
    },
    'e-757': {
      id: 'e-757',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-758' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|191c455b-cd07-7a8f-82d8-5e774f4cf98a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|191c455b-cd07-7a8f-82d8-5e774f4cf98a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650493857276,
    },
    'e-761': {
      id: 'e-761',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-762' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|db830109-84fa-3387-cde1-51de02206168',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|db830109-84fa-3387-cde1-51de02206168',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650493890511,
    },
    'e-771': {
      id: 'e-771',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-772' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|041e01dc-1503-0801-4d17-fd2e0362b95b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|041e01dc-1503-0801-4d17-fd2e0362b95b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650525333627,
    },
    'e-773': {
      id: 'e-773',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-774' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|041e01dc-1503-0801-4d17-fd2e0362b962',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|041e01dc-1503-0801-4d17-fd2e0362b962',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650525333627,
    },
    'e-775': {
      id: 'e-775',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-776' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|041e01dc-1503-0801-4d17-fd2e0362b969',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|041e01dc-1503-0801-4d17-fd2e0362b969',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650525333627,
    },
    'e-781': {
      id: 'e-781',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-782',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|bdf286ef-3952-1a9d-c3b4-cb716ff268e5',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|bdf286ef-3952-1a9d-c3b4-cb716ff268e5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650525440899,
    },
    'e-787': {
      id: 'e-787',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-788' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|1e355af8-dbd9-07b5-dfc9-4da29e168623',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|1e355af8-dbd9-07b5-dfc9-4da29e168623',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650526384374,
    },
    'e-789': {
      id: 'e-789',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-790' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|0cf3db6b-a779-9b1f-86ee-dd2b26a04660',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|0cf3db6b-a779-9b1f-86ee-dd2b26a04660',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650526412878,
    },
    'e-791': {
      id: 'e-791',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-792' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6252f3c33937b3952e158690|0cf3db6b-a779-9b1f-86ee-dd2b26a04662',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6252f3c33937b3952e158690|0cf3db6b-a779-9b1f-86ee-dd2b26a04662',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650526412878,
    },
    'e-793': {
      id: 'e-793',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-794' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|024654a3-d967-d2b1-962b-1497d0226ca5',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|024654a3-d967-d2b1-962b-1497d0226ca5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650526448556,
    },
    'e-795': {
      id: 'e-795',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-796' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|024654a3-d967-d2b1-962b-1497d0226ca7',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|024654a3-d967-d2b1-962b-1497d0226ca7',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650526448556,
    },
    'e-797': {
      id: 'e-797',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-798' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|f3e5f3b6-325c-4a9c-e9ab-e41553e19bbb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|f3e5f3b6-325c-4a9c-e9ab-e41553e19bbb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650526465485,
    },
    'e-799': {
      id: 'e-799',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-800' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc|f3e5f3b6-325c-4a9c-e9ab-e41553e19bbd',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc|f3e5f3b6-325c-4a9c-e9ab-e41553e19bbd',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650526465485,
    },
    'e-801': {
      id: 'e-801',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-802' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|4d478bfc-0d1d-5a31-f242-5c6958a34715',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|4d478bfc-0d1d-5a31-f242-5c6958a34715',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650526486562,
    },
    'e-803': {
      id: 'e-803',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-804' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|4d478bfc-0d1d-5a31-f242-5c6958a34717',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|4d478bfc-0d1d-5a31-f242-5c6958a34717',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650526486562,
    },
    'e-805': {
      id: 'e-805',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-806' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|2a49c9e0-39fc-a59b-5140-0e71da139e70',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|2a49c9e0-39fc-a59b-5140-0e71da139e70',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650526491284,
    },
    'e-807': {
      id: 'e-807',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-808' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcf57aad1f2b7f92a080|2a49c9e0-39fc-a59b-5140-0e71da139e72',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080|2a49c9e0-39fc-a59b-5140-0e71da139e72',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650526491284,
    },
    'e-809': {
      id: 'e-809',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-810' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.gallery-lightbox',
        originalId:
          '6253fcf57aad1f2b7f92a080|c0a1b127-41f9-7544-2591-7f1979cf5745',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.gallery-lightbox',
          originalId:
            '6253fcf57aad1f2b7f92a080|c0a1b127-41f9-7544-2591-7f1979cf5745',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650526530680,
    },
    'e-811': {
      id: 'e-811',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-812' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.breadcrumbs',
        originalId:
          '6252f3c33937b3952e158690|4636bede-5c2b-e63d-748d-a1ad2eae8fd9',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.breadcrumbs',
          originalId:
            '6252f3c33937b3952e158690|4636bede-5c2b-e63d-748d-a1ad2eae8fd9',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650527057176,
    },
    'e-813': {
      id: 'e-813',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-55',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-814',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.accordion-toggle',
        originalId: 'd7095391-81c8-1e7a-b26b-ebcb63fb81ac',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.accordion-toggle',
          originalId: 'd7095391-81c8-1e7a-b26b-ebcb63fb81ac',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650528617306,
    },
    'e-814': {
      id: 'e-814',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-56',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-813',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.accordion-toggle',
        originalId: 'd7095391-81c8-1e7a-b26b-ebcb63fb81ac',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.accordion-toggle',
          originalId: 'd7095391-81c8-1e7a-b26b-ebcb63fb81ac',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650528617310,
    },
    'e-821': {
      id: 'e-821',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-822' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62611b520db44c43f5f9ca47|45fd1168-2d7d-b0bb-a702-b290824e449b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62611b520db44c43f5f9ca47|45fd1168-2d7d-b0bb-a702-b290824e449b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650531156085,
    },
    'e-823': {
      id: 'e-823',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62611b520db44c43f5f9ca47',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62611b520db44c43f5f9ca47',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650531939624,
    },
    'e-832': {
      id: 'e-832',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-833' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'af378220-3e37-e761-b7a5-68601489b6cf',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'af378220-3e37-e761-b7a5-68601489b6cf',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650532766295,
    },
    'e-834': {
      id: 'e-834',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-835' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'af378220-3e37-e761-b7a5-68601489b6c6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'af378220-3e37-e761-b7a5-68601489b6c6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650533268630,
    },
    'e-838': {
      id: 'e-838',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-839' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'af378220-3e37-e761-b7a5-68601489b6ca',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'af378220-3e37-e761-b7a5-68601489b6ca',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650533284841,
    },
    'e-840': {
      id: 'e-840',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-841' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'af378220-3e37-e761-b7a5-68601489b6d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'af378220-3e37-e761-b7a5-68601489b6d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650535193391,
    },
    'e-842': {
      id: 'e-842',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-843' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.vertical-line.with-bg-opacity-15',
        originalId: 'af378220-3e37-e761-b7a5-68601489b6dc',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.vertical-line.with-bg-opacity-15',
          originalId: 'af378220-3e37-e761-b7a5-68601489b6dc',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650542814179,
    },
    'e-844': {
      id: 'e-844',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-845' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.vertical-line.with-bg-opacity-25',
        originalId: 'af378220-3e37-e761-b7a5-68601489b6d5',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.vertical-line.with-bg-opacity-25',
          originalId: 'af378220-3e37-e761-b7a5-68601489b6d5',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650542854026,
    },
    'e-846': {
      id: 'e-846',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-847' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.vertical-line.with-bg-opacity-5',
        originalId: 'af378220-3e37-e761-b7a5-68601489b6da',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.vertical-line.with-bg-opacity-5',
          originalId: 'af378220-3e37-e761-b7a5-68601489b6da',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650542881704,
    },
    'e-848': {
      id: 'e-848',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-849',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62614c31ab1e10e82f9199bb|6c13aa61-2d8f-cf6e-5777-e62665596f53',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62614c31ab1e10e82f9199bb|6c13aa61-2d8f-cf6e-5777-e62665596f53',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650543960450,
    },
    'e-850': {
      id: 'e-850',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-851' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62614c31ab1e10e82f9199bb|8a23848f-5342-68de-890c-1aee3d23336e',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62614c31ab1e10e82f9199bb|8a23848f-5342-68de-890c-1aee3d23336e',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650544437848,
    },
    'e-862': {
      id: 'e-862',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-863' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '4ce61da8-3a47-04be-7240-9f17170871d0',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '4ce61da8-3a47-04be-7240-9f17170871d0',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650545573698,
    },
    'e-864': {
      id: 'e-864',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-865' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '4ce61da8-3a47-04be-7240-9f17170871d2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '4ce61da8-3a47-04be-7240-9f17170871d2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650545573698,
    },
    'e-868': {
      id: 'e-868',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '626152bb822b05641fafaa6a',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '626152bb822b05641fafaa6a',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650547139399,
    },
    'e-869': {
      id: 'e-869',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62614c31ab1e10e82f9199bb',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62614c31ab1e10e82f9199bb',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650547154581,
    },
    'e-870': {
      id: 'e-870',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '626019484cdd365198a75bfd',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '626019484cdd365198a75bfd',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650547173207,
    },
    'e-871': {
      id: 'e-871',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-872' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '4ce61da8-3a47-04be-7240-9f17170871d5',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '4ce61da8-3a47-04be-7240-9f17170871d5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650547995110,
    },
    'e-873': {
      id: 'e-873',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-874' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '4ce61da8-3a47-04be-7240-9f17170871da',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '4ce61da8-3a47-04be-7240-9f17170871da',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650548009640,
    },
    'e-879': {
      id: 'e-879',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62615df4efabdaebdcd6e3c0',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650548228320,
    },
    'e-880': {
      id: 'e-880',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-881' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62615df4efabdaebdcd6e3c0|8e45c162-5afd-615d-003f-df75704285f0',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0|8e45c162-5afd-615d-003f-df75704285f0',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650549367230,
    },
    'e-882': {
      id: 'e-882',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-883' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62615df4efabdaebdcd6e3c0|8e45c162-5afd-615d-003f-df75704285f1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0|8e45c162-5afd-615d-003f-df75704285f1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650549367230,
    },
    'e-884': {
      id: 'e-884',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-885' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080ea',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080ea',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650549425934,
    },
    'e-886': {
      id: 'e-886',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-887' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080ec',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080ec',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650549425934,
    },
    'e-888': {
      id: 'e-888',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-889',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080f3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080f3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650549425934,
    },
    'e-890': {
      id: 'e-890',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-891' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080ee',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62615df4efabdaebdcd6e3c0|a988f228-4de4-8d50-ddba-146925f080ee',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650550938045,
    },
    'e-892': {
      id: 'e-892',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-893' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62614c31ab1e10e82f9199bb|5d635fc2-213d-8c9b-ced2-03ab942ff5f9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62614c31ab1e10e82f9199bb|5d635fc2-213d-8c9b-ced2-03ab942ff5f9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650550955823,
    },
    'e-896': {
      id: 'e-896',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-897' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|82554889-3951-8e52-800d-0409379bd36e',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|82554889-3951-8e52-800d-0409379bd36e',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650567113261,
    },
    'e-940': {
      id: 'e-940',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-941' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261a8138f86787546807eaf|e967fdf2-8d98-e9cd-6938-5c5082cbf9ea',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261a8138f86787546807eaf|e967fdf2-8d98-e9cd-6938-5c5082cbf9ea',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650567311701,
    },
    'e-944': {
      id: 'e-944',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-945',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.project-link',
        originalId: 'e4da4c37-ee58-167a-cbd7-451e68993aab',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.project-link',
          originalId: 'e4da4c37-ee58-167a-cbd7-451e68993aab',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650569779144,
    },
    'e-954': {
      id: 'e-954',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-13', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78a7',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78a7',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-13-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650570405986,
    },
    'e-955': {
      id: 'e-955',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-956' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78b4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78b4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-957': {
      id: 'e-957',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-958' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78b6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78b6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-959': {
      id: 'e-959',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-960' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78b8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78b8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-961': {
      id: 'e-961',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-42', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78ba',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78ba',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-42-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650570405986,
    },
    'e-962': {
      id: 'e-962',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-12', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78c3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78c3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-12-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650570405986,
    },
    'e-963': {
      id: 'e-963',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-964' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78d2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78d2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-965': {
      id: 'e-965',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-966' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-967': {
      id: 'e-967',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-42', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78d8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc78d8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-42-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650570405986,
    },
    'e-974': {
      id: 'e-974',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-975' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc792a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc792a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-976': {
      id: 'e-976',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-977' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc792e',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc792e',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-979': {
      id: 'e-979',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-980',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc7961',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc7961',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650570405986,
    },
    'e-981': {
      id: 'e-981',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-21',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-982',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc7969',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc7969',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650570405986,
    },
    'e-983': {
      id: 'e-983',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-13', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc7973',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc7973',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-13-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650570405986,
    },
    'e-986': {
      id: 'e-986',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-987' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc798b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512|6d675344-39d4-6367-c314-d97b69cc798b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650570405986,
    },
    'e-988': {
      id: 'e-988',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6261b489441c1c26e3cdb512',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261b489441c1c26e3cdb512',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650570411808,
    },
    'e-989': {
      id: 'e-989',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-42', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '625ad796f8c02b57011b5287|d0c1ecf8-84bf-0560-7f96-098bfd9f8097',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|d0c1ecf8-84bf-0560-7f96-098bfd9f8097',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-42-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650572483140,
    },
    'e-990': {
      id: 'e-990',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-991' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'a7f6fd04-f90a-b17b-f0a1-d9130d2bae52',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'a7f6fd04-f90a-b17b-f0a1-d9130d2bae52',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650572879919,
    },
    'e-996': {
      id: 'e-996',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-997' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|ee05fa90-a69e-a891-e4c7-f6f73f305e34',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|ee05fa90-a69e-a891-e4c7-f6f73f305e34',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650622813620,
    },
    'e-998': {
      id: 'e-998',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-61',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-999',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.grid-main-bg',
        originalId:
          '625456ef7f4ca5fa11cd6928|ee05fa90-a69e-a891-e4c7-f6f73f305e35',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.grid-main-bg',
          originalId:
            '625456ef7f4ca5fa11cd6928|ee05fa90-a69e-a891-e4c7-f6f73f305e35',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650623018468,
    },
    'e-1000': {
      id: 'e-1000',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1001' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|2af877e0-25ff-ff3d-02f8-4766d994fde9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|2af877e0-25ff-ff3d-02f8-4766d994fde9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650623086844,
    },
    'e-1002': {
      id: 'e-1002',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1003' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|3b239ad4-36d3-0468-f1a8-93f18c175a81',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|3b239ad4-36d3-0468-f1a8-93f18c175a81',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650623587353,
    },
    'e-1004': {
      id: 'e-1004',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1005' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|3b239ad4-36d3-0468-f1a8-93f18c175a83',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|3b239ad4-36d3-0468-f1a8-93f18c175a83',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 700,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650623595110,
    },
    'e-1006': {
      id: 'e-1006',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1007' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|a41c55c4-3495-b042-8a3d-f13788d14853',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|a41c55c4-3495-b042-8a3d-f13788d14853',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650623617257,
    },
    'e-1008': {
      id: 'e-1008',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1009' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928|a41c55c4-3495-b042-8a3d-f13788d14855',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928|a41c55c4-3495-b042-8a3d-f13788d14855',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 900,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650623628198,
    },
    'e-1010': {
      id: 'e-1010',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1011' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dbb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dbb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650624886644,
    },
    'e-1012': {
      id: 'e-1012',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1013' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dcf',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dcf',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650624886644,
    },
    'e-1014': {
      id: 'e-1014',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1015' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dd1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dd1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 700,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650624886644,
    },
    'e-1016': {
      id: 'e-1016',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1017' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dd6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dd6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650624886644,
    },
    'e-1018': {
      id: 'e-1018',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1019' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dd8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967dd8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 900,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650624886644,
    },
    'e-1020': {
      id: 'e-1020',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1021' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967ddd',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3|f5cf92aa-2b80-10e1-54ea-7128b6967ddd',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650624886644,
    },
    'e-1022': {
      id: 'e-1022',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1023' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62593e6725c63592f267955a|96a5f5bb-dc1c-bedc-5075-2f21c004d7e4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62593e6725c63592f267955a|96a5f5bb-dc1c-bedc-5075-2f21c004d7e4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 700,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650637033407,
    },
    'e-1024': {
      id: 'e-1024',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1025' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6259799853b885f394592b9d|2d7cdc72-b695-d8ee-a335-170c8a640e78',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6259799853b885f394592b9d|2d7cdc72-b695-d8ee-a335-170c8a640e78',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 700,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650637318704,
    },
    'e-1026': {
      id: 'e-1026',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1027' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|4807d42d-bf48-4603-ba9d-fd00a97b3a8d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|4807d42d-bf48-4603-ba9d-fd00a97b3a8d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650646305590,
    },
    'e-1028': {
      id: 'e-1028',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1029' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|e2608db3-e32d-3d91-6431-611dbf2a8216',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|e2608db3-e32d-3d91-6431-611dbf2a8216',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889559543,
    },
    'e-1040': {
      id: 'e-1040',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1041' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649910',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649910',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889616883,
    },
    'e-1042': {
      id: 'e-1042',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1043' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649911',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649911',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889616883,
    },
    'e-1044': {
      id: 'e-1044',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1045' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649913',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649913',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889616883,
    },
    'e-1046': {
      id: 'e-1046',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1047' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649916',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d649916',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889616883,
    },
    'e-1048': {
      id: 'e-1048',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1049' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d64991b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|7d356ab0-0e82-60c1-f68e-e43c0d64991b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889616883,
    },
    'e-1050': {
      id: 'e-1050',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1051' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd0',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd0',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889646056,
    },
    'e-1052': {
      id: 'e-1052',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1053' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889646056,
    },
    'e-1054': {
      id: 'e-1054',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1055' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889646056,
    },
    'e-1056': {
      id: 'e-1056',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1057' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bd6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889646056,
    },
    'e-1058': {
      id: 'e-1058',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1059' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bdb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|f1f9b820-fcab-03d7-d4c5-77bd13051bdb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889646056,
    },
    'e-1070': {
      id: 'e-1070',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1071' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f3464194038d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f3464194038d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889667504,
    },
    'e-1072': {
      id: 'e-1072',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1073' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f3464194038e',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f3464194038e',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889667504,
    },
    'e-1074': {
      id: 'e-1074',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1075' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f34641940390',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f34641940390',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889667504,
    },
    'e-1076': {
      id: 'e-1076',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1077' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f34641940393',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f34641940393',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889667504,
    },
    'e-1078': {
      id: 'e-1078',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1079' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f34641940398',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|09fc60e0-4e9a-6cff-ab49-f34641940398',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650889667504,
    },
    'e-1090': {
      id: 'e-1090',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1091' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|c17fcc99-9f87-f4e8-c280-ebc5e17d7c64',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|c17fcc99-9f87-f4e8-c280-ebc5e17d7c64',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889743869,
    },
    'e-1094': {
      id: 'e-1094',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1095' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|88e714d2-d5a5-f1ac-ab03-f3ca2bbcd5d2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|88e714d2-d5a5-f1ac-ab03-f3ca2bbcd5d2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889757135,
    },
    'e-1096': {
      id: 'e-1096',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1097' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62612e497459e946b9695b60|88e714d2-d5a5-f1ac-ab03-f3ca2bbcd5d9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60|88e714d2-d5a5-f1ac-ab03-f3ca2bbcd5d9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650889757135,
    },
    'e-1098': {
      id: 'e-1098',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1099' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|b1a19cf4-07c0-2d18-97e2-36b73d673417',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|b1a19cf4-07c0-2d18-97e2-36b73d673417',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650890091489,
    },
    'e-1100': {
      id: 'e-1100',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1101' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|e62e68ca-62de-c20e-799d-afcaad56895c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|e62e68ca-62de-c20e-799d-afcaad56895c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650890102985,
    },
    'e-1102': {
      id: 'e-1102',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1103' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|3aecad8e-bac1-ca8d-d639-6243652c58f2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|3aecad8e-bac1-ca8d-d639-6243652c58f2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650890116514,
    },
    'e-1104': {
      id: 'e-1104',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1105' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|154f8458-162e-29f8-5f6d-168f6bb1596f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|154f8458-162e-29f8-5f6d-168f6bb1596f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650890125572,
    },
    'e-1106': {
      id: 'e-1106',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6253fcac74ad8675400d82ad',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650890299496,
    },
    'e-1107': {
      id: 'e-1107',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6253fcf57aad1f2b7f92a080',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcf57aad1f2b7f92a080',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650890312673,
    },
    'e-1108': {
      id: 'e-1108',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6253fbdd9ba2de0e54e5e8cc',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fbdd9ba2de0e54e5e8cc',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650890328319,
    },
    'e-1109': {
      id: 'e-1109',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1110' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|2b07a9a0-dcbb-395f-aa90-a9435d62cf9d',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|2b07a9a0-dcbb-395f-aa90-a9435d62cf9d',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650890494147,
    },
    'e-1111': {
      id: 'e-1111',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1112' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|5ca6032d-a511-8847-df7b-6113ca01e445',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|5ca6032d-a511-8847-df7b-6113ca01e445',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650890531134,
    },
    'e-1113': {
      id: 'e-1113',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1114' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62559b7ee7e7a089754573aa|5ca6032d-a511-8847-df7b-6113ca01e447',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa|5ca6032d-a511-8847-df7b-6113ca01e447',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650890531134,
    },
    'e-1115': {
      id: 'e-1115',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1116' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455c2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455c2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650890674437,
    },
    'e-1117': {
      id: 'e-1117',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1118' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455c3',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455c3',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650890674437,
    },
    'e-1119': {
      id: 'e-1119',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1120' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455cd',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455cd',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650890674437,
    },
    'e-1121': {
      id: 'e-1121',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1122',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c86945610',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c86945610',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650890674437,
    },
    'e-1122': {
      id: 'e-1122',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1121',
        },
      },
      mediaQueries: ['main'],
      target: {
        id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c86945610',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c86945610',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650890674437,
    },
    'e-1123': {
      id: 'e-1123',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6261a8138f86787546807eaf',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6261a8138f86787546807eaf',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650891275095,
    },
    'e-1124': {
      id: 'e-1124',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62601794ad978750ee4fb486',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62601794ad978750ee4fb486',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650891293261,
    },
    'e-1126': {
      id: 'e-1126',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62530ddbe8b006890aa40375',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650892132875,
    },
    'e-1127': {
      id: 'e-1127',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62612e497459e946b9695b60',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62612e497459e946b9695b60',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650892154411,
    },
    'e-1128': {
      id: 'e-1128',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '62559b7ee7e7a089754573aa',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62559b7ee7e7a089754573aa',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650892194965,
    },
    'e-1129': {
      id: 'e-1129',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1130' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '127c046d-0a46-5ea8-ba4a-cf2db07a88c5',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '127c046d-0a46-5ea8-ba4a-cf2db07a88c5',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650894735893,
    },
    'e-1131': {
      id: 'e-1131',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1132' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '626019484cdd365198a75bfd|66db83b0-fa55-4104-99a0-9f5e9c2061d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '626019484cdd365198a75bfd|66db83b0-fa55-4104-99a0-9f5e9c2061d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650894874749,
    },
    'e-1133': {
      id: 'e-1133',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1134' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '626019484cdd365198a75bfd|8164ea6a-20bd-e0fe-de09-979d5480fd6c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '626019484cdd365198a75bfd|8164ea6a-20bd-e0fe-de09-979d5480fd6c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650894885555,
    },
    'e-1135': {
      id: 'e-1135',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1136' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa0b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa0b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650895502934,
    },
    'e-1137': {
      id: 'e-1137',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1138' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa0c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa0c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650895502934,
    },
    'e-1143': {
      id: 'e-1143',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1144' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa0f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa0f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650895543467,
    },
    'e-1145': {
      id: 'e-1145',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1146' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa14',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266a933b9f697b5d713136e|dfd9819c-980a-326c-592e-ccec4c9bfa14',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650895595371,
    },
    'e-1147': {
      id: 'e-1147',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1148' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de0',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de0',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650896193284,
    },
    'e-1149': {
      id: 'e-1149',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1150' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650896193284,
    },
    'e-1151': {
      id: 'e-1151',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1152' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650896193284,
    },
    'e-1153': {
      id: 'e-1153',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1154' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|53603811-a4dc-accc-cbee-56e781a60de9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650896193284,
    },
    'e-1155': {
      id: 'e-1155',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1156' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79de7',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79de7',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650896337361,
    },
    'e-1157': {
      id: 'e-1157',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1158' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79de8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79de8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650896337361,
    },
    'e-1159': {
      id: 'e-1159',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1160' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79deb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79deb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650896337361,
    },
    'e-1161': {
      id: 'e-1161',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1162' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79df0',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266ad17bc5b300f7701c1d6|9fbd8841-cae6-d15d-37a8-64b6e5f79df0',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650896337361,
    },
    'e-1163': {
      id: 'e-1163',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1164' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266ad17bc5b300f7701c1d6|6266ad18bc5b305ae701c1db00000000000b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266ad17bc5b300f7701c1d6|6266ad18bc5b305ae701c1db00000000000b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650897140699,
    },
    'e-1165': {
      id: 'e-1165',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1166' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6266ad17bc5b300f7701c1d6|6266ad18bc5b305ae701c1dbaN',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6266ad17bc5b300f7701c1d6|6266ad18bc5b305ae701c1dbaN',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650897156364,
    },
    'e-1167': {
      id: 'e-1167',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1168' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'af378220-3e37-e761-b7a5-68601489b6c8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: 'af378220-3e37-e761-b7a5-68601489b6c8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650901971931,
    },
    'e-1169': {
      id: 'e-1169',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1170' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79084',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79084',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911479890,
    },
    'e-1171': {
      id: 'e-1171',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1172' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79085',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79085',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911479890,
    },
    'e-1173': {
      id: 'e-1173',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1174' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79087',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79087',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911479890,
    },
    'e-1175': {
      id: 'e-1175',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1176' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79089',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79089',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911510998,
    },
    'e-1177': {
      id: 'e-1177',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1178' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79086',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|3cec2431-5795-f0ab-1434-9e2016d79086',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911527708,
    },
    'e-1179': {
      id: 'e-1179',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1180' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc4f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc4f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1181': {
      id: 'e-1181',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1182' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc48',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc48',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1183': {
      id: 'e-1183',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1184' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc4a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc4a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1187': {
      id: 'e-1187',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1188' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.vertical-line.with-bg-opacity-15',
        originalId:
          '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc5c',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.vertical-line.with-bg-opacity-15',
          originalId:
            '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc5c',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1189': {
      id: 'e-1189',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1190' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.vertical-line.with-bg-opacity-25',
        originalId:
          '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc55',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.vertical-line.with-bg-opacity-25',
          originalId:
            '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc55',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1191': {
      id: 'e-1191',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1192' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.vertical-line.with-bg-opacity-5',
        originalId:
          '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc5a',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.vertical-line.with-bg-opacity-5',
          originalId:
            '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc5a',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 2200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1193': {
      id: 'e-1193',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1194' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc49',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc49',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911930022,
    },
    'e-1195': {
      id: 'e-1195',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_MOVE',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-4', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main'],
      target: {
        id: '6262894c335cf400cd7edc9d',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-4-p',
          selectedAxis: 'X_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: 'a-4-p-2',
          selectedAxis: 'Y_AXIS',
          basedOn: 'VIEWPORT',
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1650911945461,
    },
    'e-1196': {
      id: 'e-1196',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1197' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc51',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc51',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911969831,
    },
    'e-1198': {
      id: 'e-1198',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1199' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc4c',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc4c',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650911996880,
    },
    'e-1200': {
      id: 'e-1200',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1201' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc56',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|f7f781d0-f3f7-c191-f099-6873809ffc56',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650912011145,
    },
    'e-1202': {
      id: 'e-1202',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1203' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|5fd89004-6488-fd5e-718a-bc08a18d9ebc',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|5fd89004-6488-fd5e-718a-bc08a18d9ebc',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 800,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650912048727,
    },
    'e-1204': {
      id: 'e-1204',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1205' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daed',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daed',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650912053974,
    },
    'e-1206': {
      id: 'e-1206',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-12', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daf6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daf6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-12-p',
          smoothing: 98,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1650912053974,
    },
    'e-1207': {
      id: 'e-1207',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1208' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daeb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daeb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650912053974,
    },
    'e-1209': {
      id: 'e-1209',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1210' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daf2',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6262894c335cf400cd7edc9d|111f86c1-f97f-a30b-07a0-5b640840daf2',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650912053974,
    },
    'e-1211': {
      id: 'e-1211',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1212' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6253fcac74ad8675400d82ad|f984bf9f-81c3-784d-2806-d75d2fa65584',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '6253fcac74ad8675400d82ad|f984bf9f-81c3-784d-2806-d75d2fa65584',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 1000,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650918059227,
    },
    'e-1213': {
      id: 'e-1213',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1214' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455c8',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62530ddbe8b006890aa40375|32245ce4-b1ae-f529-f4d3-052c869455c8',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650918704181,
    },
    'e-1215': {
      id: 'e-1215',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInLeft', autoStopEventId: 'e-1216' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ecd90ffbcb15409535bda|707435a0-ad0f-0d1b-2fff-4ff011cdbfca',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ecd90ffbcb15409535bda|707435a0-ad0f-0d1b-2fff-4ff011cdbfca',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'LEFT',
        effectIn: true,
      },
      createdOn: 1650962270990,
    },
    'e-1217': {
      id: 'e-1217',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1218' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ecd90ffbcb15409535bda|17335549-d555-c136-2fa3-222a01aa6151',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ecd90ffbcb15409535bda|17335549-d555-c136-2fa3-222a01aa6151',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650962286559,
    },
    'e-1219': {
      id: 'e-1219',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1220' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '62611b520db44c43f5f9ca47|a5f2a85c-d090-fa5c-295b-6564485b3f08',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '62611b520db44c43f5f9ca47|a5f2a85c-d090-fa5c-295b-6564485b3f08',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650962356682,
    },
    'e-1221': {
      id: 'e-1221',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1222' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|7f27f17b-82f5-ab38-646a-f5af0f2ae462',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|7f27f17b-82f5-ab38-646a-f5af0f2ae462',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650966865779,
    },
    'e-1223': {
      id: 'e-1223',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1224' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|b7a23e19-c6f9-dec2-09bb-7bd54e3782ee',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|b7a23e19-c6f9-dec2-09bb-7bd54e3782ee',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650966874885,
    },
    'e-1225': {
      id: 'e-1225',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1226' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625e917db160935e42d735e9|30acf0b8-c8f7-6557-9d20-4eefdae3f547',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625e917db160935e42d735e9|30acf0b8-c8f7-6557-9d20-4eefdae3f547',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650966882401,
    },
    'e-1227': {
      id: 'e-1227',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1228' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|4949118d-cedd-a485-f4b9-978b65a964d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|4949118d-cedd-a485-f4b9-978b65a964d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979313419,
    },
    'e-1229': {
      id: 'e-1229',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1230' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|fdbac8a3-8f8f-0b3f-35f6-d2fc63f3a08f',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|fdbac8a3-8f8f-0b3f-35f6-d2fc63f3a08f',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979324272,
    },
    'e-1231': {
      id: 'e-1231',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1232' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|fdbac8a3-8f8f-0b3f-35f6-d2fc63f3a091',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|fdbac8a3-8f8f-0b3f-35f6-d2fc63f3a091',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979333057,
    },
    'e-1233': {
      id: 'e-1233',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1234' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|14615651-6e0f-774c-afc6-a74df431b0a1',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|14615651-6e0f-774c-afc6-a74df431b0a1',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979340449,
    },
    'e-1235': {
      id: 'e-1235',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1236' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|9443f39b-c860-a313-c78e-c342f11461b9',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|9443f39b-c860-a313-c78e-c342f11461b9',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979346578,
    },
    'e-1237': {
      id: 'e-1237',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1238' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|9443f39b-c860-a313-c78e-c342f11461bb',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|9443f39b-c860-a313-c78e-c342f11461bb',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979353773,
    },
    'e-1239': {
      id: 'e-1239',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1240' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|9a7c9a83-2260-cfda-8bed-699338de6f01',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|9a7c9a83-2260-cfda-8bed-699338de6f01',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979392701,
    },
    'e-1241': {
      id: 'e-1241',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1242' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|3ab60c01-acaf-fab8-191a-cdad7694aa59',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|3ab60c01-acaf-fab8-191a-cdad7694aa59',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979398350,
    },
    'e-1243': {
      id: 'e-1243',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1244' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|9fda3ae5-206e-f2c9-b983-b094205bbdf6',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|9fda3ae5-206e-f2c9-b983-b094205bbdf6',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650979405972,
    },
    'e-1245': {
      id: 'e-1245',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1246' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|0798f269-2c6b-3558-82ae-4fb1ef42cac7',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|0798f269-2c6b-3558-82ae-4fb1ef42cac7',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979411253,
    },
    'e-1247': {
      id: 'e-1247',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1248' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|d6677cd4-24a1-ad4f-7f8a-e473043f698b',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|d6677cd4-24a1-ad4f-7f8a-e473043f698b',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 100,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979417050,
    },
    'e-1249': {
      id: 'e-1249',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-1250' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625ad796f8c02b57011b5287|8177bf81-abf4-345d-f48b-be9e6c6b4a2a',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625ad796f8c02b57011b5287|8177bf81-abf4-345d-f48b-be9e6c6b4a2a',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 200,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1650979424309,
    },
    'e-1251': {
      id: 'e-1251',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GROW_EFFECT',
        instant: false,
        config: { actionListId: 'growIn', autoStopEventId: 'e-1252' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '81243046-8783-d51a-71a6-adbd6f644289',
        appliesTo: 'ELEMENT',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '81243046-8783-d51a-71a6-adbd6f644289',
          appliesTo: 'ELEMENT',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650980863041,
    },
    'e-1254': {
      id: 'e-1254',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_FINISH',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-62',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1253',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651400348080,
    },
    'e-1256': {
      id: 'e-1256',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_FINISH',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-62',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1255',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625295532800cf7ed68d3dd3',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625295532800cf7ed68d3dd3',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651401378997,
    },
    'e-1258': {
      id: 'e-1258',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_FINISH',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-63',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1257',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '625456ef7f4ca5fa11cd6928',
        appliesTo: 'PAGE',
        styleBlockIds: [],
      },
      targets: [
        {
          id: '625456ef7f4ca5fa11cd6928',
          appliesTo: 'PAGE',
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1651401534497,
    },
  },
  actionLists: {
    a: {
      id: 'a',
      title: 'Custom List 1 - scroll in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.circle-background',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4440'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-line',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4446'],
                },
                xValue: null,
                yValue: -101,
                xUnit: '%',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4447'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4447'],
                },
                yValue: 1,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.custom-list-icon',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4445'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-text',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4448'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-text',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4448'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-n-8',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.circle-background',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4440'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-n-9',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 200,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.custom-list-icon',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4445'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-n-10',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4447'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-n-11',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4447'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-n-12',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 600,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-text',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4448'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 600,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-text',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4448'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-n-14',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 800,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-line',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4446'],
                },
                xValue: null,
                yValue: 0,
                xUnit: '%',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1642263298752,
    },
    'a-5': {
      id: 'a-5',
      title: 'Hero - Experiences block - in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-5-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-5-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                yValue: -1.5,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-5-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-5-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                yValue: 1.5,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-5-n-9',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                yValue: -101,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-5-n-11',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-5-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-5-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 800,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-5-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 800,
                target: {},
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-5-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 800,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-5-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 800,
                target: {},
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-5-n-12',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 600,
                target: {},
                globalSwatchId: '',
                rValue: 32,
                bValue: 32,
                gValue: 32,
                aValue: 1,
              },
            },
            {
              id: 'a-5-n-13',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 600,
                target: {},
                globalSwatchId: '',
                rValue: 32,
                bValue: 32,
                gValue: 32,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649617766890,
    },
    'a-6': {
      id: 'a-6',
      title: 'Hero - Experiences block - out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-6-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-6-n-7',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                globalSwatchId: '7dc6a368',
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: 'a-6-n-6',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                globalSwatchId: '7dc6a368',
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: 'a-6-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                yValue: -1.5,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-6-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-6-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                yValue: 1.5,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-6-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'inOutCirc',
                duration: 500,
                target: {},
                yValue: -101,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649617766890,
    },
    'a-7': {
      id: 'a-7',
      title: 'Image Reveal',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-7-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.animation-color-bg',
                  selectorGuids: ['06dd96fb-e550-37cb-d78d-f0c533dcecf7'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-7-n-7',
              actionTypeId: 'TRANSFORM_SKEW',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.animation-color-bg',
                  selectorGuids: ['06dd96fb-e550-37cb-d78d-f0c533dcecf7'],
                },
                xValue: -60,
                xUnit: 'deg',
                yUnit: 'DEG',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-7-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.cover-image',
                  selectorGuids: ['539c7d3b-d776-9567-b857-40c933c1649e'],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-7-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 4000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.cover-image',
                  selectorGuids: ['539c7d3b-d776-9567-b857-40c933c1649e'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-7-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: [0, 0.235, 0.322, 0.995],
                duration: 4000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.animation-color-bg',
                  selectorGuids: ['06dd96fb-e550-37cb-d78d-f0c533dcecf7'],
                },
                xValue: 120,
                yValue: null,
                xUnit: '%',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1647603125615,
    },
    'a-4': {
      id: 'a-4',
      title: '3D For Image',
      continuousParameterGroups: [
        {
          id: 'a-4-p',
          type: 'MOUSE_X',
          parameterLabel: 'Mouse X',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-4-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    xValue: -4,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-2',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    xValue: null,
                    yValue: -6,
                    xUnit: 'deg',
                    yUnit: 'deg',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-4-n-9',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    xValue: -4,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-10',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    xValue: null,
                    yValue: -6,
                    xUnit: 'deg',
                    yUnit: 'deg',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-4-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    xValue: 4,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-4',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    yValue: 6,
                    xUnit: 'DEG',
                    yUnit: 'deg',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-4-n-11',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    xValue: 4,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-12',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    yValue: 6,
                    xUnit: 'DEG',
                    yUnit: 'deg',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'a-4-p-2',
          type: 'MOUSE_Y',
          parameterLabel: 'Mouse Y',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-4-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    yValue: -4,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-6',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    xValue: 4,
                    xUnit: 'deg',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-4-n-13',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    yValue: -4,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-14',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    xValue: 4,
                    xUnit: 'deg',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-4-n-7',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    yValue: 4,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-8',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector: '.image-animation-trigger._3d-for-image',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf8',
                      ],
                    },
                    xValue: -4,
                    xUnit: 'deg',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
                {
                  id: 'a-4-n-15',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    yValue: 4,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-4-n-16',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      selector:
                        '.image-animation-trigger._3d-for-image-visible',
                      selectorGuids: [
                        '06dd96fb-e550-37cb-d78d-f0c533dcecf6',
                        '4fa63ec7-5fdf-892c-0bde-d42e192116e6',
                      ],
                    },
                    xValue: -4,
                    xUnit: 'deg',
                    yUnit: 'DEG',
                    zUnit: 'DEG',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1647776060721,
    },
    'a-8': {
      id: 'a-8',
      title: 'Button - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-8-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-pattern',
                  selectorGuids: ['2333ab74-3bbd-ec65-7bb3-865e2f907a90'],
                },
                value: 0.25,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-8-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-pattern',
                  selectorGuids: ['2333ab74-3bbd-ec65-7bb3-865e2f907a90'],
                },
                value: 0.5,
                unit: '',
              },
            },
            {
              id: 'a-8-n-10',
              actionTypeId: 'STYLE_BACKGROUND_COLOR',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-inner',
                  selectorGuids: ['33cf2453-183c-f4f4-371f-12ce3cad63f1'],
                },
                globalSwatchId: '471c8a94',
                rValue: 5,
                bValue: 202,
                gValue: 62,
                aValue: 1,
              },
            },
            {
              id: 'a-8-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: 2,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 100,
                easing: 'inOutCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-8-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'inOutCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-title',
                  selectorGuids: ['925bbd69-302d-20e5-d76f-346e89f870bb'],
                },
                xValue: -0.5,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-8-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: -2,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-8-n-9',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-8-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649669625375,
    },
    'a-9': {
      id: 'a-9',
      title: 'Button - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-9-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-pattern',
                  selectorGuids: ['2333ab74-3bbd-ec65-7bb3-865e2f907a90'],
                },
                value: 0.25,
                unit: '',
              },
            },
            {
              id: 'a-9-n-3',
              actionTypeId: 'STYLE_BACKGROUND_COLOR',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-inner',
                  selectorGuids: ['33cf2453-183c-f4f4-371f-12ce3cad63f1'],
                },
                globalSwatchId: 'eccc8ac3',
                rValue: 6,
                bValue: 250,
                gValue: 77,
                aValue: 1,
              },
            },
            {
              id: 'a-9-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-9-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-icon',
                  selectorGuids: ['bf22a7f6-7f2a-5cdb-1c72-826517f7ae3a'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-9-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.button-title',
                  selectorGuids: ['925bbd69-302d-20e5-d76f-346e89f870bb'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649669625375,
    },
    'a-10': {
      id: 'a-10',
      title: 'Service Link - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-10-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                yValue: 1.5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-10-n-12',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-10-n-9',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-10-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 600,
                target: {},
                yValue: 1,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-10-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 600,
                target: {},
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-10-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                yValue: -1,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-10-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-10-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {},
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-10-n-13',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {},
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-10-n-11',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649678222643,
    },
    'a-11': {
      id: 'a-11',
      title: 'Service Link - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-11-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-11-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {},
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-11-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {},
                yValue: 1.5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-11-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {},
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649678222643,
    },
    'a-12': {
      id: 'a-12',
      title: 'Element moving 5 rem',
      continuousParameterGroups: [
        {
          id: 'a-12-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-12-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '81243046-8783-d51a-71a6-adbd6f644254',
                    },
                    xValue: null,
                    yValue: -5,
                    xUnit: 'em',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-12-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '81243046-8783-d51a-71a6-adbd6f644254',
                    },
                    yValue: 5,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1649690249872,
    },
    'a-13': {
      id: 'a-13',
      title: 'Content block moving',
      continuousParameterGroups: [
        {
          id: 'a-13-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-13-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.uppercase-title-border',
                      selectorGuids: ['400d3697-769b-7afb-da16-ca8ab2c77b5d'],
                    },
                    yValue: -7,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-13-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.heading',
                      selectorGuids: ['1a903631-3cbc-71d1-f996-1bae4a8ed3ad'],
                    },
                    yValue: -5,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-13-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-button-trigger',
                      selectorGuids: ['589ee551-cdd1-116a-2a2e-bdb037d2e735'],
                    },
                    yValue: -3,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: 'a-13-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.uppercase-title-border',
                      selectorGuids: ['400d3697-769b-7afb-da16-ca8ab2c77b5d'],
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-13-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.heading',
                      selectorGuids: ['1a903631-3cbc-71d1-f996-1bae4a8ed3ad'],
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-13-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'ease',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-button-trigger',
                      selectorGuids: ['589ee551-cdd1-116a-2a2e-bdb037d2e735'],
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1649690453373,
    },
    'a-15': {
      id: 'a-15',
      title: 'Dropdown - open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-15-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.dropdown-list',
                  selectorGuids: ['ca10db1e-ff9f-781b-f85f-946a68eca56c'],
                },
                yValue: 5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-15-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.dropdown-list',
                  selectorGuids: ['ca10db1e-ff9f-781b-f85f-946a68eca56c'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-15-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.dropdown-list',
                  selectorGuids: ['ca10db1e-ff9f-781b-f85f-946a68eca56c'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-15-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.dropdown-list',
                  selectorGuids: ['ca10db1e-ff9f-781b-f85f-946a68eca56c'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649694012897,
    },
    'a-16': {
      id: 'a-16',
      title: 'Dropdown - close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-16-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.dropdown-list',
                  selectorGuids: ['ca10db1e-ff9f-781b-f85f-946a68eca56c'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-16-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.dropdown-list',
                  selectorGuids: ['ca10db1e-ff9f-781b-f85f-946a68eca56c'],
                },
                yValue: 5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649694012897,
    },
    'a-21': {
      id: 'a-21',
      title: 'Service Content - scroll in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-21-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-anim-trigger',
                  selectorGuids: ['caa5d5ee-6bf7-6237-f50a-5e07e69ccc2f'],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-21-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-title-2',
                  selectorGuids: ['63452dce-8d43-625e-6c3f-4a0e698b1382'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-21-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-anim-trigger',
                  selectorGuids: ['9b9bd0d4-c653-c3c9-07a6-8309cd9a1797'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-21-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.main-button',
                  selectorGuids: ['d6f623c9-fba3-bff3-a6d6-a01a3f8dbabb'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-21-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.main-button',
                  selectorGuids: ['d6f623c9-fba3-bff3-a6d6-a01a3f8dbabb'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-21-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-anim-trigger',
                  selectorGuids: ['9b9bd0d4-c653-c3c9-07a6-8309cd9a1797'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-21-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-title-2',
                  selectorGuids: ['63452dce-8d43-625e-6c3f-4a0e698b1382'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-21-n-9',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-anim-trigger',
                  selectorGuids: ['caa5d5ee-6bf7-6237-f50a-5e07e69ccc2f'],
                },
                yValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-21-n-10',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-title-2',
                  selectorGuids: ['63452dce-8d43-625e-6c3f-4a0e698b1382'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-21-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-title-2',
                  selectorGuids: ['63452dce-8d43-625e-6c3f-4a0e698b1382'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-21-n-11',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-anim-trigger',
                  selectorGuids: ['9b9bd0d4-c653-c3c9-07a6-8309cd9a1797'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-21-n-12',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.content-anim-trigger',
                  selectorGuids: ['9b9bd0d4-c653-c3c9-07a6-8309cd9a1797'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-21-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 500,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.main-button',
                  selectorGuids: ['d6f623c9-fba3-bff3-a6d6-a01a3f8dbabb'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-21-n-14',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 500,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.main-button',
                  selectorGuids: ['d6f623c9-fba3-bff3-a6d6-a01a3f8dbabb'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649706708730,
    },
    'a-23': {
      id: 'a-23',
      title: 'Project Title Block - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-23-n-13',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-link-lines',
                  selectorGuids: ['b681f52b-4732-7c46-4a39-6c04b53be3af'],
                },
                value: 'none',
              },
            },
            {
              id: 'a-23-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-bg-2',
                  selectorGuids: ['1b76c382-faf4-4e8b-1ff0-4fa430ad144a'],
                },
                xValue: -101,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-23-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-bg-2',
                  selectorGuids: ['1b76c382-faf4-4e8b-1ff0-4fa430ad144a'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-23-n-17',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-line-2',
                  selectorGuids: ['1c1ed20d-cce9-5674-ac62-9a3911984c06'],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-23-n-19',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-line-1',
                  selectorGuids: ['7612a604-9e49-e451-405c-1205dddf4cce'],
                },
                widthValue: 0,
                heightValue: 2,
                widthUnit: '%',
                heightUnit: 'px',
                locked: false,
              },
            },
            {
              id: 'a-23-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-23-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                xValue: -3,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-23-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-23-n-9',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 700,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-bg-2',
                  selectorGuids: ['1b76c382-faf4-4e8b-1ff0-4fa430ad144a'],
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-23-n-14',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-link-lines',
                  selectorGuids: ['b681f52b-4732-7c46-4a39-6c04b53be3af'],
                },
                value: 'flex',
              },
            },
            {
              id: 'a-23-n-10',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon',
                  selectorGuids: ['a04f9c44-bd44-f8f4-4bc1-ed8d112c8def'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-23-n-12',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 700,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name',
                  selectorGuids: ['f6b76c2a-1369-985f-be83-ded9800b2d0d'],
                },
                xValue: 1,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-23-n-11',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 100,
                easing: 'ease',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name',
                  selectorGuids: ['f6b76c2a-1369-985f-be83-ded9800b2d0d'],
                },
                globalSwatchId: '7dc6a368',
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: 'a-23-n-18',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-line-2',
                  selectorGuids: ['1c1ed20d-cce9-5674-ac62-9a3911984c06'],
                },
                xValue: 1,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-23-n-20',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-line-1',
                  selectorGuids: ['7612a604-9e49-e451-405c-1205dddf4cce'],
                },
                widthValue: 100,
                heightValue: 2,
                widthUnit: '%',
                heightUnit: 'px',
                locked: false,
              },
            },
            {
              id: 'a-23-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-23-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649771055057,
    },
    'a-24': {
      id: 'a-24',
      title: 'Project Title Block - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-24-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 700,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-bg-2',
                  selectorGuids: ['1b76c382-faf4-4e8b-1ff0-4fa430ad144a'],
                },
                xValue: -101,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-24-n-11',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-24-n-15',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-line-1',
                  selectorGuids: ['7612a604-9e49-e451-405c-1205dddf4cce'],
                },
                widthValue: 0,
                heightValue: 2,
                widthUnit: '%',
                heightUnit: 'px',
                locked: false,
              },
            },
            {
              id: 'a-24-n-14',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-line-2',
                  selectorGuids: ['1c1ed20d-cce9-5674-ac62-9a3911984c06'],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-24-n-9',
              actionTypeId: 'STYLE_TEXT_COLOR',
              config: {
                delay: 100,
                easing: 'ease',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name',
                  selectorGuids: ['f6b76c2a-1369-985f-be83-ded9800b2d0d'],
                },
                globalSwatchId: '1e08cf50',
                rValue: 27,
                bValue: 58,
                gValue: 36,
                aValue: 1,
              },
            },
            {
              id: 'a-24-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name',
                  selectorGuids: ['f6b76c2a-1369-985f-be83-ded9800b2d0d'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-24-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon',
                  selectorGuids: ['a04f9c44-bd44-f8f4-4bc1-ed8d112c8def'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-24-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon-for-hover',
                  selectorGuids: ['f92bf7eb-5e90-917b-4fe1-3b62a6176553'],
                },
                xValue: -3,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-24-n-12',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-link-lines',
                  selectorGuids: ['b681f52b-4732-7c46-4a39-6c04b53be3af'],
                },
                value: 'none',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649771055057,
    },
    'a-25': {
      id: 'a-25',
      title: 'Solution Link - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-25-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-animation-bg',
                  selectorGuids: ['ba747480-5e2c-13db-317a-9db68db841e7'],
                },
                xValue: -101,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-18',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.more-text',
                  selectorGuids: ['975e6dd6-8007-1179-2012-43b952b3f020'],
                },
                xValue: -1,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.more-text',
                  selectorGuids: ['975e6dd6-8007-1179-2012-43b952b3f020'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-25-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-animation-bg',
                  selectorGuids: ['ba747480-5e2c-13db-317a-9db68db841e7'],
                },
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-25-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-animation-bg',
                  selectorGuids: ['ba747480-5e2c-13db-317a-9db68db841e7'],
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-25-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                xValue: 2,
                yValue: null,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-11',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-25-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 1,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-25-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                xValue: -1,
                yValue: null,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: -1,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-25-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-25-n-9',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                xValue: 0,
                yValue: null,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-15',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-14',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-25-n-19',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.more-text',
                  selectorGuids: ['975e6dd6-8007-1179-2012-43b952b3f020'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-25-n-17',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.more-text',
                  selectorGuids: ['975e6dd6-8007-1179-2012-43b952b3f020'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649774732758,
    },
    'a-26': {
      id: 'a-26',
      title: 'Solution Link - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-26-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-animation-bg',
                  selectorGuids: ['ba747480-5e2c-13db-317a-9db68db841e7'],
                },
                xValue: -101,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-26-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-26-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                xValue: 0,
                yValue: null,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-26-n-14',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-26-n-15',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-26-n-17',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.more-text',
                  selectorGuids: ['975e6dd6-8007-1179-2012-43b952b3f020'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-26-n-16',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.more-text',
                  selectorGuids: ['975e6dd6-8007-1179-2012-43b952b3f020'],
                },
                xValue: -1,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649774732758,
    },
    'a-17': {
      id: 'a-17',
      title: 'Circle Button - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-17-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-link-circle',
                  selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                },
                value: 'none',
              },
            },
            {
              id: 'a-17-n-6',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-link-circle',
                  selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-17-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-icon',
                  selectorGuids: ['1ba357f6-b6fd-4bfa-f3c4-b203066f5e0c'],
                },
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
            {
              id: 'a-17-n-4',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-link-circle',
                  selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-17-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-link-circle',
                  selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649694599129,
    },
    'a-18': {
      id: 'a-18',
      title: 'Circle Button - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-18-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-icon',
                  selectorGuids: ['1ba357f6-b6fd-4bfa-f3c4-b203066f5e0c'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-18-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-link-circle',
                  selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-18-n-6',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.moving-link-circle',
                  selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                },
                value: 'none',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649694599129,
    },
    'a-27': {
      id: 'a-27',
      title: 'Footer Link - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-27-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-link-line',
                  selectorGuids: ['6a013a36-f796-7b95-79a9-ff6fffcb933b'],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-27-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-link-line',
                  selectorGuids: ['6a013a36-f796-7b95-79a9-ff6fffcb933b'],
                },
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-27-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 300,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.footer-link',
                  selectorGuids: ['b107ce37-cb7f-1fb8-0fe8-8e067e02f593'],
                },
                value: 0.35,
                unit: '',
              },
            },
            {
              id: 'a-27-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-link-line',
                  selectorGuids: ['6a013a36-f796-7b95-79a9-ff6fffcb933b'],
                },
                xValue: 1,
                yValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649789658479,
    },
    'a-28': {
      id: 'a-28',
      title: 'Footer Link - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-28-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 300,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.footer-link',
                  selectorGuids: ['b107ce37-cb7f-1fb8-0fe8-8e067e02f593'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-28-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-link-line',
                  selectorGuids: ['6a013a36-f796-7b95-79a9-ff6fffcb933b'],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649789658479,
    },
    'a-29': {
      id: 'a-29',
      title: 'Footer Boder Line - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-29-n-3',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-border-line',
                  selectorGuids: ['3743d7c9-809c-55b2-0082-89844bd41b57'],
                },
                heightValue: 100,
                widthUnit: 'PX',
                heightUnit: '%',
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-29-n-5',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-border-line',
                  selectorGuids: ['3743d7c9-809c-55b2-0082-89844bd41b57'],
                },
                heightValue: 150,
                widthUnit: 'PX',
                heightUnit: '%',
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649789658479,
    },
    'a-30': {
      id: 'a-30',
      title: 'Footer Boder Line - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-30-n-2',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.footer-border-line',
                  selectorGuids: ['3743d7c9-809c-55b2-0082-89844bd41b57'],
                },
                heightValue: 100,
                widthUnit: 'PX',
                heightUnit: '%',
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649789658479,
    },
    'a-31': {
      id: 'a-31',
      title: 'Moving Circle',
      continuousParameterGroups: [
        {
          id: 'a-31-p',
          type: 'MOUSE_X',
          parameterLabel: 'Mouse X',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-31-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-link-circle',
                      selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                    },
                    xValue: -20,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-31-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-icon',
                      selectorGuids: ['1ba357f6-b6fd-4bfa-f3c4-b203066f5e0c'],
                    },
                    xValue: -40,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-31-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-link-circle',
                      selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                    },
                    xValue: 20,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-31-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-icon',
                      selectorGuids: ['1ba357f6-b6fd-4bfa-f3c4-b203066f5e0c'],
                    },
                    xValue: 40,
                    xUnit: '%',
                    yUnit: 'PX',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'a-31-p-2',
          type: 'MOUSE_Y',
          parameterLabel: 'Mouse Y',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-31-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-link-circle',
                      selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                    },
                    yValue: -20,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-31-n-7',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-icon',
                      selectorGuids: ['1ba357f6-b6fd-4bfa-f3c4-b203066f5e0c'],
                    },
                    yValue: -40,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-31-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-link-circle',
                      selectorGuids: ['b7c19db5-9609-f40b-8fb9-d64366fc5b80'],
                    },
                    yValue: 20,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-31-n-8',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.moving-icon',
                      selectorGuids: ['1ba357f6-b6fd-4bfa-f3c4-b203066f5e0c'],
                    },
                    yValue: 40,
                    xUnit: 'PX',
                    yUnit: '%',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1649793688025,
    },
    'a-34': {
      id: 'a-34',
      title: 'Custom List 2 - scroll in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-34-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.circle-background',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4440'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-34-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-line-2',
                  selectorGuids: ['b01ec8e9-a9e7-bb1f-023e-68e0424ddb23'],
                },
                xValue: -101,
                yValue: null,
                xUnit: '%',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-34-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title-2',
                  selectorGuids: ['ec193256-b995-e0e4-2e29-abb1b1eb931a'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-34-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title-2',
                  selectorGuids: ['ec193256-b995-e0e4-2e29-abb1b1eb931a'],
                },
                yValue: 1,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-34-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.custom-list-icon',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4445'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-34-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-paragraph-2',
                  selectorGuids: ['76ad909a-d183-0941-09b1-9b62341ab608'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-34-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-paragraph-2',
                  selectorGuids: ['76ad909a-d183-0941-09b1-9b62341ab608'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-34-n-8',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.circle-background',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4440'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-34-n-9',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 200,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.custom-list-icon',
                  selectorGuids: ['03828433-bf88-f363-2368-453048fe4445'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-34-n-10',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title-2',
                  selectorGuids: ['ec193256-b995-e0e4-2e29-abb1b1eb931a'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-34-n-11',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-title-2',
                  selectorGuids: ['ec193256-b995-e0e4-2e29-abb1b1eb931a'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-34-n-12',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 600,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-paragraph-2',
                  selectorGuids: ['76ad909a-d183-0941-09b1-9b62341ab608'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-34-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 600,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-paragraph-2',
                  selectorGuids: ['76ad909a-d183-0941-09b1-9b62341ab608'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-34-n-14',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 800,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.list-line-2',
                  selectorGuids: ['b01ec8e9-a9e7-bb1f-023e-68e0424ddb23'],
                },
                xValue: 0,
                yValue: null,
                xUnit: '%',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1642263298752,
    },
    'a-35': {
      id: 'a-35',
      title: 'Solution Link Description - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-35-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: 2,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-35-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-35-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 400,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description',
                  selectorGuids: ['6f06424f-96d5-f4fc-b8f5-2f2af886c0e9'],
                },
                xValue: 1,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-35-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 500,
                easing: 'outCirc',
                duration: 900,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-more-wrap',
                  selectorGuids: ['958fb6c7-e49a-099e-5ca7-e4fa716f41a5'],
                },
                xValue: 1,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-35-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: -2,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-35-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-35-n-8',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649965743812,
    },
    'a-36': {
      id: 'a-36',
      title: 'Solution Link Description - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-36-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-36-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description-line',
                  selectorGuids: ['4520dc64-afa6-1109-83d3-0e660901f069'],
                },
                xValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-36-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-description',
                  selectorGuids: ['6f06424f-96d5-f4fc-b8f5-2f2af886c0e9'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-36-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-more-wrap',
                  selectorGuids: ['958fb6c7-e49a-099e-5ca7-e4fa716f41a5'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649965743812,
    },
    'a-41': {
      id: 'a-41',
      title: 'Page Scroll Up',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-41-n-9',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {
                  selector: '.icon-scroll-to',
                  selectorGuids: ['b80e31c0-b120-b32c-ae35-7824de5c2e4c'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-41-n-10',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  selector: '.aside-button-line',
                  selectorGuids: ['b3a2b987-d574-a2a4-67db-9a678c31c60b'],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-41-n-11',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  selector: '.scroll-to-button',
                  selectorGuids: ['029acdba-a767-c52a-db1f-71489b8f14f6'],
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'em',
                locked: false,
              },
            },
            {
              id: 'a-41-n-13',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                heightValue: 6,
                widthUnit: 'PX',
                heightUnit: 'em',
                locked: false,
              },
            },
            {
              id: 'a-41-n-14',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 100,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-41-n-15',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 200,
                target: {
                  selector: '.scroll-to-button',
                  selectorGuids: ['029acdba-a767-c52a-db1f-71489b8f14f6'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-41-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {},
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-41-n-17',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  selector: '.goes-up-icon',
                  selectorGuids: ['63f052e5-8f49-a592-6886-ea59572372e7'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-41-n-18',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  selector: '.goes-up-icon',
                  selectorGuids: ['63f052e5-8f49-a592-6886-ea59572372e7'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649966751936,
    },
    'a-37': {
      id: 'a-37',
      title: 'Page Scroll Down',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-37-n-13',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'em',
                locked: false,
              },
            },
            {
              id: 'a-37-n-12',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-37-n-11',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                value: 'flex',
              },
            },
            {
              id: 'a-37-n-16',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.goes-up-icon',
                  selectorGuids: ['63f052e5-8f49-a592-6886-ea59572372e7'],
                },
                yValue: 1,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-37-n-17',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.goes-up-icon',
                  selectorGuids: ['63f052e5-8f49-a592-6886-ea59572372e7'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-37-n-8',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.scroll-to-button',
                  selectorGuids: ['029acdba-a767-c52a-db1f-71489b8f14f6'],
                },
                heightValue: 10,
                widthUnit: 'PX',
                heightUnit: 'em',
                locked: false,
              },
            },
            {
              id: 'a-37-n-28',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-37-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 400,
                target: {
                  selector: '.icon-scroll-to',
                  selectorGuids: ['b80e31c0-b120-b32c-ae35-7824de5c2e4c'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-37-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  selector: '.aside-button-line',
                  selectorGuids: ['b3a2b987-d574-a2a4-67db-9a678c31c60b'],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-37-n-6',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  selector: '.scroll-to-button',
                  selectorGuids: ['029acdba-a767-c52a-db1f-71489b8f14f6'],
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'em',
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-37-n-14',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                heightValue: 6,
                widthUnit: 'PX',
                heightUnit: 'em',
                locked: false,
              },
            },
            {
              id: 'a-37-n-15',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 100,
                target: {
                  selector: '.right-menu-button.is-goes-up',
                  selectorGuids: [
                    'fbce7055-dda9-82ff-dca5-cf0cf2b995c3',
                    '7bfd2b5b-7d43-5d02-78a8-fd0645059028',
                  ],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-37-n-26',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 200,
                target: {
                  selector: '.scroll-to-button',
                  selectorGuids: ['029acdba-a767-c52a-db1f-71489b8f14f6'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-37-n-29',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {},
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-37-n-19',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 500,
                easing: 'outCirc',
                duration: 600,
                target: {
                  selector: '.goes-up-icon',
                  selectorGuids: ['63f052e5-8f49-a592-6886-ea59572372e7'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-37-n-18',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 500,
                easing: 'outCirc',
                duration: 600,
                target: {
                  selector: '.goes-up-icon',
                  selectorGuids: ['63f052e5-8f49-a592-6886-ea59572372e7'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649966751936,
    },
    'a-42': {
      id: 'a-42',
      title: 'Element moving 3rem',
      continuousParameterGroups: [
        {
          id: 'a-42-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-42-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '625ad796f8c02b57011b5287|81243046-8783-d51a-71a6-adbd6f644254',
                    },
                    xValue: null,
                    yValue: -3,
                    xUnit: 'em',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-42-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '625ad796f8c02b57011b5287|81243046-8783-d51a-71a6-adbd6f644254',
                    },
                    yValue: 3,
                    xUnit: 'PX',
                    yUnit: 'rem',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1649690249872,
    },
    'a-32': {
      id: 'a-32',
      title: 'Solution Link Menu - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-32-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.cover-image',
                  selectorGuids: ['539c7d3b-d776-9567-b857-40c933c1649e'],
                },
                xValue: 1.15,
                yValue: 1.15,
                locked: true,
              },
            },
            {
              id: 'a-32-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                xValue: 0.7,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-32-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-more-menu',
                  selectorGuids: ['436a73d8-e102-36a6-154d-45f0254798bf'],
                },
                xValue: 0.7,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-32-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 0.7,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649836056082,
    },
    'a-33': {
      id: 'a-33',
      title: 'Solution Link Menu - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-33-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.cover-image',
                  selectorGuids: ['539c7d3b-d776-9567-b857-40c933c1649e'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-33-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-title-1',
                  selectorGuids: ['6e367a7d-d225-2d2f-dc84-2c3f29479c7f'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-33-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-more-menu',
                  selectorGuids: ['436a73d8-e102-36a6-154d-45f0254798bf'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-33-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.solution-icon',
                  selectorGuids: ['78500b51-90fb-9622-d3b0-ce746227d91a'],
                },
                xValue: 0,
                xUnit: 'rem',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1649836056082,
    },
    'a-49': {
      id: 'a-49',
      title: 'Explore Button - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-49-n-2',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.grid-link-block',
                  selectorGuids: ['78702b93-9aea-f279-7105-8bbea605493e'],
                },
                heightValue: 100,
                widthUnit: 'PX',
                heightUnit: '%',
                locked: false,
              },
            },
            {
              id: 'a-49-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-background',
                  selectorGuids: ['1f06bf80-114e-4477-8383-a2749daa20bf'],
                },
                yValue: 101,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-49-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-background',
                  selectorGuids: ['1f06bf80-114e-4477-8383-a2749daa20bf'],
                },
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-49-n',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.grid-link-block',
                  selectorGuids: ['78702b93-9aea-f279-7105-8bbea605493e'],
                },
                heightValue: 140,
                widthUnit: 'PX',
                heightUnit: '%',
                locked: false,
              },
            },
            {
              id: 'a-49-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-background',
                  selectorGuids: ['1f06bf80-114e-4477-8383-a2749daa20bf'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-49-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-49-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                yValue: 2.5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-49-n-9',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                yValue: -1.5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-49-n-10',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-49-n-11',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1650291927434,
    },
    'a-50': {
      id: 'a-50',
      title: 'Explore Button - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-50-n-4',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.grid-link-block',
                  selectorGuids: ['78702b93-9aea-f279-7105-8bbea605493e'],
                },
                heightValue: 100,
                widthUnit: 'PX',
                heightUnit: '%',
                locked: false,
              },
            },
            {
              id: 'a-50-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1400,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-background',
                  selectorGuids: ['1f06bf80-114e-4477-8383-a2749daa20bf'],
                },
                yValue: 101,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-50-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-50-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.explore-icon',
                  selectorGuids: ['09d69783-6850-6a40-ae22-798b611fd703'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1650291927434,
    },
    'a-51': {
      id: 'a-51',
      title: 'Service Content 2 - scroll in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-51-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-line-top',
                  selectorGuids: ['8e63cb9b-588f-0faf-4fba-814bd69276c5'],
                },
                xValue: 0,
                yValue: null,
                locked: false,
              },
            },
            {
              id: 'a-51-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-icon',
                  selectorGuids: ['ef1d0bf5-5b00-f9b9-790a-84942d332f1d'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-51-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-icon',
                  selectorGuids: ['ef1d0bf5-5b00-f9b9-790a-84942d332f1d'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-51-n-15',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-title-2',
                  selectorGuids: ['6a793ae2-f6cc-ba5b-bd6f-8078fbc91ef8'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-51-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-title-2',
                  selectorGuids: ['6a793ae2-f6cc-ba5b-bd6f-8078fbc91ef8'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-51-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-content-2',
                  selectorGuids: ['e4322e64-6568-a62b-ac35-3a038965b8f8'],
                },
                yValue: 2,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-51-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-content-2',
                  selectorGuids: ['e4322e64-6568-a62b-ac35-3a038965b8f8'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-51-n-8',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-line-top',
                  selectorGuids: ['8e63cb9b-588f-0faf-4fba-814bd69276c5'],
                },
                xValue: 1,
                yValue: null,
                locked: false,
              },
            },
            {
              id: 'a-51-n-9',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-icon',
                  selectorGuids: ['ef1d0bf5-5b00-f9b9-790a-84942d332f1d'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-51-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-icon',
                  selectorGuids: ['ef1d0bf5-5b00-f9b9-790a-84942d332f1d'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-51-n-17',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-title-2',
                  selectorGuids: ['6a793ae2-f6cc-ba5b-bd6f-8078fbc91ef8'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-51-n-18',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-title-2',
                  selectorGuids: ['6a793ae2-f6cc-ba5b-bd6f-8078fbc91ef8'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-51-n-12',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-content-2',
                  selectorGuids: ['e4322e64-6568-a62b-ac35-3a038965b8f8'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'rem',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-51-n-11',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.border-content-2',
                  selectorGuids: ['e4322e64-6568-a62b-ac35-3a038965b8f8'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649706708730,
    },
    'a-52': {
      id: 'a-52',
      title: 'Image - show in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-52-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 'block',
              },
            },
            {
              id: 'a-52-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                xValue: 1.3,
                yValue: 1.3,
                locked: true,
              },
            },
            {
              id: 'a-52-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-52-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                yValue: 101,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-52-n-5',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-52-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {},
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-52-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 1,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-52-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: [0.497, 0.849, 0.567, 0.983],
                duration: 1000,
                target: {},
                yValue: 101,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-52-n-9',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 2000,
                target: {},
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639908611234,
    },
    'a-53': {
      id: 'a-53',
      title: 'Accordion - open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-53-n',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg',
              },
            },
            {
              id: 'a-53-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-53-n-3',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: '%',
                heightUnit: 'px',
                locked: false,
              },
            },
            {
              id: 'a-53-n-4',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                value: 'none',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-53-n-5',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-53-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuad',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-53-n-7',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outQuad',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                widthValue: 100,
                widthUnit: '%',
                heightUnit: 'AUTO',
                locked: false,
              },
            },
            {
              id: 'a-53-n-8',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'outQuad',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                zValue: 180,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1616840669284,
    },
    'a-54': {
      id: 'a-54',
      title: 'Accordion - close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-54-n',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'outQuad',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg',
              },
            },
            {
              id: 'a-54-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuad',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-54-n-3',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outQuad',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: '%',
                heightUnit: 'px',
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-54-n-4',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-content',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac12e'],
                },
                value: 'none',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1616840669284,
    },
    'a-57': {
      id: 'a-57',
      title: 'Gallery - open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-57-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-background',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd3'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-57-n-10',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-background',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd3'],
                },
                zValue: 40,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg',
              },
            },
            {
              id: 'a-57-n-9',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-background',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd3'],
                },
                widthValue: 0,
                heightValue: 300,
                widthUnit: '%',
                heightUnit: '%',
                locked: false,
              },
            },
            {
              id: 'a-57-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-thumbnail',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd5'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-57-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon.in-gallery',
                  selectorGuids: [
                    '4bf048f3-a108-5e62-e696-507b0d812cd4',
                    '4bf048f3-a108-5e62-e696-507b0d812cd7',
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-57-n-5',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon.in-gallery',
                  selectorGuids: [
                    '4bf048f3-a108-5e62-e696-507b0d812cd4',
                    '4bf048f3-a108-5e62-e696-507b0d812cd7',
                  ],
                },
                value: 'block',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-57-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 1200,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-thumbnail',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd5'],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: 'a-57-n-12',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outExpo',
                duration: 4000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-background',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd3'],
                },
                widthValue: 150,
                widthUnit: '%',
                heightUnit: '%',
                locked: false,
              },
            },
            {
              id: 'a-57-n-8',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon.in-gallery',
                  selectorGuids: [
                    '4bf048f3-a108-5e62-e696-507b0d812cd4',
                    '4bf048f3-a108-5e62-e696-507b0d812cd7',
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1642275410357,
    },
    'a-58': {
      id: 'a-58',
      title: 'Gallery - close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-58-n-4',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'outExpo',
                duration: 700,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-background',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd3'],
                },
                widthValue: 0,
                widthUnit: '%',
                heightUnit: '%',
                locked: false,
              },
            },
            {
              id: 'a-58-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.gallery-thumbnail',
                  selectorGuids: ['4bf048f3-a108-5e62-e696-507b0d812cd5'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-58-n-3',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon.in-gallery',
                  selectorGuids: [
                    '4bf048f3-a108-5e62-e696-507b0d812cd4',
                    '4bf048f3-a108-5e62-e696-507b0d812cd7',
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1642275410357,
    },
    'a-55': {
      id: 'a-55',
      title: 'Accordion - hover in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-55-n-10',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-line',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac131'],
                },
                xValue: 0,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-55-n-9',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-line',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac131'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-55-n-17',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-open',
                  selectorGuids: ['8f1a74d3-7fa8-b4c1-5291-dca102812a98'],
                },
                xValue: -2,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-18',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-open',
                  selectorGuids: ['8f1a74d3-7fa8-b4c1-5291-dca102812a98'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-55-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-55-n-11',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-line',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac131'],
                },
                xValue: 1,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-55-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                xValue: null,
                yValue: 2,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-12',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-55-n-19',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-open',
                  selectorGuids: ['8f1a74d3-7fa8-b4c1-5291-dca102812a98'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-20',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-open',
                  selectorGuids: ['8f1a74d3-7fa8-b4c1-5291-dca102812a98'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-55-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                yValue: -60,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                xValue: null,
                yValue: -2,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-55-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-55-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-15',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                xValue: null,
                yValue: 0,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-55-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 600,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                value: 1,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1638622345946,
    },
    'a-56': {
      id: 'a-56',
      title: 'Accordion - hover out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-56-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                xValue: null,
                yValue: 0,
                xUnit: 'em',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-56-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-open',
                  selectorGuids: ['8f1a74d3-7fa8-b4c1-5291-dca102812a98'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-56-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-open',
                  selectorGuids: ['8f1a74d3-7fa8-b4c1-5291-dca102812a98'],
                },
                xValue: -2,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-56-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.acc-title',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac132'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-56-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-line',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac131'],
                },
                xValue: 0,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-56-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-56-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.accordion-arrow',
                  selectorGuids: ['18f1f203-d2ca-a0bd-30f1-6ebfed8ac133'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1638622345946,
    },
    'a-22': {
      id: 'a-22',
      title: 'Project Title Block - scroll in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-22-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-bg-1',
                  selectorGuids: ['b27db6eb-018a-78a6-6bf2-bd090c714b52'],
                },
                xValue: -101,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name-overlap',
                  selectorGuids: ['89e23242-4947-145b-bd28-f11fae30f3e2'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-22-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name-overlap',
                  selectorGuids: ['89e23242-4947-145b-bd28-f11fae30f3e2'],
                },
                xValue: 1.5,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon',
                  selectorGuids: ['a04f9c44-bd44-f8f4-4bc1-ed8d112c8def'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-22-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon',
                  selectorGuids: ['a04f9c44-bd44-f8f4-4bc1-ed8d112c8def'],
                },
                xValue: -2,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-22-n-12',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-link',
                  selectorGuids: ['0e4c4a8e-6807-7fbb-51be-85b48911cb4b'],
                },
                value: 'none',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-22-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 800,
                easing: 'outCirc',
                duration: 800,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-bg-1',
                  selectorGuids: ['b27db6eb-018a-78a6-6bf2-bd090c714b52'],
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-13',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 800,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-link',
                  selectorGuids: ['0e4c4a8e-6807-7fbb-51be-85b48911cb4b'],
                },
                value: 'flex',
              },
            },
            {
              id: 'a-22-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 1000,
                easing: 'outCirc',
                duration: 1200,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name-overlap',
                  selectorGuids: ['89e23242-4947-145b-bd28-f11fae30f3e2'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-22-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 1000,
                easing: 'outCirc',
                duration: 1200,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-name-overlap',
                  selectorGuids: ['89e23242-4947-145b-bd28-f11fae30f3e2'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-22-n-9',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 1200,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon',
                  selectorGuids: ['a04f9c44-bd44-f8f4-4bc1-ed8d112c8def'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-22-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 1200,
                easing: 'outCirc',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.project-icon',
                  selectorGuids: ['a04f9c44-bd44-f8f4-4bc1-ed8d112c8def'],
                },
                xValue: 0,
                xUnit: 'em',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1649770676881,
    },
    'a-61': {
      id: 'a-61',
      title: 'BG - from left to right - in',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-61-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '625456ef7f4ca5fa11cd6928|ee05fa90-a69e-a891-e4c7-f6f73f305e35',
                },
                xValue: -100,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-61-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '625456ef7f4ca5fa11cd6928|ee05fa90-a69e-a891-e4c7-f6f73f305e35',
                },
                xValue: 0,
                xUnit: '%',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1650622470474,
    },
    'a-62': {
      id: 'a-62',
      title: 'Preloader',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-62-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.page-wrapper',
                  selectorGuids: ['006abfcb-8dc6-7188-040b-3a2b3de2326a'],
                },
                value: 'none',
              },
            },
            {
              id: 'a-62-n-26',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.preloader',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7b2'],
                },
                value: 'flex',
              },
            },
            {
              id: 'a-62-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.preloader-loading',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7b0'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-62-n-6',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.preloader-line',
                  selectorGuids: ['947794f5-e546-7635-2f96-638e0e5e4bfe'],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-62-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.preloader-brand-name',
                  selectorGuids: ['8ef25fc6-b3ac-2a2d-2202-21c774abf2fa'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-62-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.preloader-logo',
                  selectorGuids: ['2291928e-5caf-f8bb-316d-78f2ded980f1'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-62-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.preloader-content-title',
                  selectorGuids: ['b6dd1a23-b4be-5d68-4d09-d9da281dedfd'],
                },
                yValue: 150,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-62-n-24',
              actionTypeId: 'TRANSFORM_SKEW',
              config: {
                delay: 0,
                easing: 'inOutCirc',
                duration: 1000,
                target: {
                  selector: '.preloader-background',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7ae'],
                },
                xValue: null,
                yValue: -10,
                xUnit: 'deg',
                yUnit: 'deg',
                zUnit: 'DEG',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-62-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.page-wrapper',
                  selectorGuids: ['006abfcb-8dc6-7188-040b-3a2b3de2326a'],
                },
                value: 'none',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-62-n-11',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-logo',
                  selectorGuids: ['2291928e-5caf-f8bb-316d-78f2ded980f1'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-62-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-loading',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7b0'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-62-n-10',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 100,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-brand-name',
                  selectorGuids: ['8ef25fc6-b3ac-2a2d-2202-21c774abf2fa'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-62-n-9',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 200,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  selector: '.preloader-line',
                  selectorGuids: ['947794f5-e546-7635-2f96-638e0e5e4bfe'],
                },
                xValue: 1,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: 'a-62-n-12',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 300,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-content-title.is-1st',
                  selectorGuids: [
                    'b6dd1a23-b4be-5d68-4d09-d9da281dedfd',
                    '8694fa3d-cdb7-0160-31ba-397083c7315c',
                  ],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-62-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 400,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-content-title.is-2nd',
                  selectorGuids: [
                    'b6dd1a23-b4be-5d68-4d09-d9da281dedfd',
                    'df1eca10-e6b3-5d05-41d5-d08fa091fd7d',
                  ],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-62-n-14',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 500,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-content-title.is-3rd',
                  selectorGuids: [
                    'b6dd1a23-b4be-5d68-4d09-d9da281dedfd',
                    'ffcd0395-e949-828e-b5ec-6328a8f61417',
                  ],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-62-n-15',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 1000,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-logo',
                  selectorGuids: ['2291928e-5caf-f8bb-316d-78f2ded980f1'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-62-n-23',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 1000,
                easing: '',
                duration: 0,
                target: {
                  selector: '.page-wrapper',
                  selectorGuids: ['006abfcb-8dc6-7188-040b-3a2b3de2326a'],
                },
                value: 'block',
              },
            },
            {
              id: 'a-62-n-18',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 1000,
                easing: 'outCirc',
                duration: 1000,
                target: {
                  selector: '.preloader-line',
                  selectorGuids: ['947794f5-e546-7635-2f96-638e0e5e4bfe'],
                },
                xValue: 1,
                yValue: 0,
                locked: false,
              },
            },
            {
              id: 'a-62-n-17',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 1000,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-brand-name',
                  selectorGuids: ['8ef25fc6-b3ac-2a2d-2202-21c774abf2fa'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-62-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 1000,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.preloader-loading',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7b0'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-62-n-22',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 1000,
                easing: 'inOutCirc',
                duration: 2200,
                target: {
                  selector: '.preloader-background',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7ae'],
                },
                yValue: -110,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-62-n-19',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 1100,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  selector: '.preloader-content-title.is-1st',
                  selectorGuids: [
                    'b6dd1a23-b4be-5d68-4d09-d9da281dedfd',
                    '8694fa3d-cdb7-0160-31ba-397083c7315c',
                  ],
                },
                yValue: -150,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-62-n-20',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 1200,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  selector: '.preloader-content-title.is-2nd',
                  selectorGuids: [
                    'b6dd1a23-b4be-5d68-4d09-d9da281dedfd',
                    'df1eca10-e6b3-5d05-41d5-d08fa091fd7d',
                  ],
                },
                yValue: -150,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-62-n-21',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 1300,
                easing: 'inOutCirc',
                duration: 800,
                target: {
                  selector: '.preloader-content-title.is-3rd',
                  selectorGuids: [
                    'b6dd1a23-b4be-5d68-4d09-d9da281dedfd',
                    'ffcd0395-e949-828e-b5ec-6328a8f61417',
                  ],
                },
                yValue: -150,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-62-n-25',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.preloader',
                  selectorGuids: ['66452e2d-8d88-3257-9186-4c273de8a7b2'],
                },
                value: 'none',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1651400353711,
    },
    'a-63': {
      id: 'a-63',
      title: 'Home 1 - Hero animation',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-63-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.social-link-block',
                  selectorGuids: ['fb869c31-a18c-6a62-c1de-2b051240c8e3'],
                },
                yValue: 3,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-63-n-11',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.social-link-block',
                  selectorGuids: ['fb869c31-a18c-6a62-c1de-2b051240c8e3'],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: 'a-63-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.chessboard-grid',
                  selectorGuids: ['f07e3969-c5af-6a87-216f-f23a163f750d'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-63-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero-grid',
                  selectorGuids: ['dec452d4-531b-170f-dc87-a6f5ccae5c45'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-63-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero-grid',
                  selectorGuids: ['dec452d4-531b-170f-dc87-a6f5ccae5c45'],
                },
                yValue: 5,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-63-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.social-link-block',
                  selectorGuids: ['fb869c31-a18c-6a62-c1de-2b051240c8e3'],
                },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-63-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 3500,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.hero-grid',
                  selectorGuids: ['dec452d4-531b-170f-dc87-a6f5ccae5c45'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-63-n-9',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 3500,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.hero-grid',
                  selectorGuids: ['dec452d4-531b-170f-dc87-a6f5ccae5c45'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-63-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 3700,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.chessboard-grid',
                  selectorGuids: ['f07e3969-c5af-6a87-216f-f23a163f750d'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-63-n-6',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 3900,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.social-link-block',
                  selectorGuids: ['fb869c31-a18c-6a62-c1de-2b051240c8e3'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'em',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-63-n-10',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 3900,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.social-link-block',
                  selectorGuids: ['fb869c31-a18c-6a62-c1de-2b051240c8e3'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-63-n-12',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 3900,
                easing: 'outCirc',
                duration: 800,
                target: {
                  selector: '.social-link-block',
                  selectorGuids: ['fb869c31-a18c-6a62-c1de-2b051240c8e3'],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1651401538218,
    },
    fadeIn: {
      id: 'fadeIn',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: 'slideInBottom',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: 'growIn',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: 'slideInRight',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: 'slideInLeft',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: 'main', min: 992, max: 10000 },
      { key: 'medium', min: 768, max: 991 },
      { key: 'small', min: 480, max: 767 },
      { key: 'tiny', min: 0, max: 479 },
    ],
  },
});
