function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it =
    (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e70) {
          throw _e70;
        },
        f: F,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e71) {
      didErr = true;
      err = _e71;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (
          !_n &&
          null != _i["return"] &&
          ((_r = _i["return"]()), Object(_r) !== _r)
        )
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
!(function (t, e) {
  "object" ==
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).window =
          t.window || {})
      );
})(this, function (t) {
  "use strict";

  var e = function e(t) {
      return (
        "object" == _typeof(t) &&
        null !== t &&
        t.constructor === Object &&
        "[object Object]" === Object.prototype.toString.call(t)
      );
    },
    i = function i(t) {
      var s = arguments.length <= 1 ? 0 : arguments.length - 1;
      for (var _o = 0; _o < s; _o++) {
        var _s =
          (_o + 1 < 1 || arguments.length <= _o + 1
            ? undefined
            : arguments[_o + 1]) || {};
        Object.entries(_s).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            n = _ref2[0],
            s = _ref2[1];
          var o = Array.isArray(s) ? [] : {};
          t[n] || Object.assign(t, _defineProperty({}, n, o)),
            e(s)
              ? Object.assign(t[n], i(o, s))
              : Array.isArray(s)
              ? Object.assign(t, _defineProperty({}, n, _toConsumableArray(s)))
              : Object.assign(t, _defineProperty({}, n, s));
        });
      }
      return t;
    },
    n = function n(t) {
      var e = new DOMParser().parseFromString(t, "text/html").body;
      if (e.childElementCount > 1) {
        for (var i = document.createElement("div"); e.firstChild; )
          i.appendChild(e.firstChild);
        return i;
      }
      return e.firstChild;
    },
    s = function s(t) {
      return t && null !== t && t instanceof Element && "nodeType" in t;
    },
    o = function o(t) {
      var e = window.pageYOffset,
        i = window.pageYOffset + window.innerHeight;
      if (!s(t)) return 0;
      var n = t.getBoundingClientRect(),
        o = n.y + window.pageYOffset,
        a = n.y + n.height + window.pageYOffset;
      if (e > a || i < o) return 0;
      if (e < o && i > a) return 100;
      if (o < e && a > i) return 100;
      var r = n.height;
      o < e && (r -= window.pageYOffset - o), a > i && (r -= a - i);
      var l = (r / window.innerHeight) * 100;
      return Math.round(l);
    },
    a = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
  var r;
  var l = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
      "iframe",
      "object",
      "embed",
      "video",
      "audio",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
    ].join(","),
    c = function c(t) {
      if (t && a) {
        void 0 === r &&
          document.createElement("div").focus({
            get preventScroll() {
              return (r = !0), !1;
            },
          });
        try {
          if (r)
            t.focus({
              preventScroll: !0,
            });
          else {
            var _e2 = window.pageXOffset || document.body.scrollTop,
              _i2 = window.pageYOffset || document.body.scrollLeft;
            t.focus(),
              document.body.scrollTo({
                top: _e2,
                left: _i2,
                behavior: "auto",
              });
          }
        } catch (t) {}
      }
    },
    h =
      '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
    d = {
      PANUP: "Move up",
      PANDOWN: "Move down",
      PANLEFT: "Move left",
      PANRIGHT: "Move right",
      ZOOMIN: "Zoom in",
      ZOOMOUT: "Zoom out",
      TOGGLEZOOM: "Toggle zoom level",
      TOGGLE1TO1: "Toggle zoom level",
      ITERATEZOOM: "Toggle zoom level",
      ROTATECCW: "Rotate counterclockwise",
      ROTATECW: "Rotate clockwise",
      FLIPX: "Flip horizontally",
      FLIPY: "Flip vertically",
      FITX: "Fit horizontally",
      FITY: "Fit vertically",
      RESET: "Reset",
      TOGGLEFS: "Toggle fullscreen",
    },
    u = {
      dragToClose: !0,
      hideScrollbar: !0,
      Carousel: {
        classes: {
          container: "fancybox__carousel",
          viewport: "fancybox__viewport",
          track: "fancybox__track",
          slide: "fancybox__slide",
        },
      },
      contentClick: "toggleZoom",
      contentDblClick: !1,
      backdropClick: "close",
      animated: !0,
      idle: 3500,
      showClass: "f-zoomInUp",
      hideClass: "f-fadeOut",
      commonCaption: !1,
      parentEl: null,
      startIndex: 0,
      l10n: Object.assign(Object.assign({}, d), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download",
      }),
      tpl: {
        closeButton:
          '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
      },
      groupAll: !1,
      groupAttr: "data-fancybox",
      defaultType: "image",
      defaultDisplay: "block",
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      closeButton: "auto",
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev",
      },
      Fullscreen: {
        autoStart: !1,
      },
      compact: function compact() {
        return window.matchMedia("(max-width: 578px), (max-height: 578px)")
          .matches;
      },
      wheel: "zoom",
    };
  var p, f;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Closing = 2)] = "Closing"),
      (t[(t.CustomClosing = 3)] = "CustomClosing"),
      (t[(t.Destroy = 4)] = "Destroy");
  })(p || (p = {})),
    (function (t) {
      (t[(t.Loading = 0)] = "Loading"),
        (t[(t.Opening = 1)] = "Opening"),
        (t[(t.Ready = 2)] = "Ready"),
        (t[(t.Closing = 3)] = "Closing");
    })(f || (f = {}));
  var m = function m(t, e) {
    return t.split(".").reduce(function (t, e) {
      return "object" == _typeof(t) ? t[e] : void 0;
    }, e);
  };
  var g = /*#__PURE__*/ (function () {
    function g() {
      var t =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, g);
      Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "events", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        this.setOptions(t);
      var _iterator = _createForOfIteratorHelper(
          Object.getOwnPropertyNames(Object.getPrototypeOf(this))
        ),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _t = _step.value;
          _t.startsWith("on") &&
            "function" == typeof this[_t] &&
            (this[_t] = this[_t].bind(this));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    _createClass(g, [
      {
        key: "setOptions",
        value: function setOptions(t) {
          this.options = t ? i({}, this.constructor.defaults, t) : {};
          for (
            var _i3 = 0,
              _Object$entries = Object.entries(this.option("on") || {});
            _i3 < _Object$entries.length;
            _i3++
          ) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
              _t2 = _Object$entries$_i[0],
              _e3 = _Object$entries$_i[1];
            this.on(_t2, _e3);
          }
        },
      },
      {
        key: "option",
        value: function option(t) {
          var _i4;
          var i = m(t, this.options);
          for (
            var _len = arguments.length,
              e = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            e[_key - 1] = arguments[_key];
          }
          return (
            i &&
              "function" == typeof i &&
              (i = (_i4 = i).call.apply(_i4, [this, this].concat(e))),
            i
          );
        },
      },
      {
        key: "optionFor",
        value: function optionFor(t, e, i) {
          var _s2;
          var s = m(e, t);
          var o;
          for (
            var _len2 = arguments.length,
              n = new Array(_len2 > 3 ? _len2 - 3 : 0),
              _key2 = 3;
            _key2 < _len2;
            _key2++
          ) {
            n[_key2 - 3] = arguments[_key2];
          }
          "string" != typeof (o = s) ||
            isNaN(o) ||
            isNaN(parseFloat(o)) ||
            (s = parseFloat(s)),
            "true" === s && (s = !0),
            "false" === s && (s = !1),
            s &&
              "function" == typeof s &&
              (s = (_s2 = s).call.apply(_s2, [this, this, t].concat(n)));
          var a = m(e, this.options);
          return (
            a && "function" == typeof a
              ? (s = a.call.apply(a, [this, this, t].concat(n, [s])))
              : void 0 === s && (s = a),
            void 0 === s ? i : s
          );
        },
      },
      {
        key: "cn",
        value: function cn(t) {
          var e = this.options.classes;
          return (e && e[t]) || "";
        },
      },
      {
        key: "localize",
        value: function localize(t) {
          var _this = this;
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];
          t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, e, i) {
            var n = "";
            return (
              i
                ? (n = _this.option(
                    ""
                      .concat(e[0] + e.toLowerCase().substring(1), ".l10n.")
                      .concat(i)
                  ))
                : e && (n = _this.option("l10n.".concat(e))),
              n || (n = t),
              n
            );
          });
          for (var _i5 = 0; _i5 < e.length; _i5++)
            t = t.split(e[_i5][0]).join(e[_i5][1]);
          return (t = t.replace(/\{\{(.*?)\}\}/g, function (t, e) {
            return e;
          }));
        },
      },
      {
        key: "on",
        value: function on(t, e) {
          var _this2 = this;
          var i = [];
          "string" == typeof t
            ? (i = t.split(" "))
            : Array.isArray(t) && (i = t),
            this.events || (this.events = new Map()),
            i.forEach(function (t) {
              var i = _this2.events.get(t);
              i || (_this2.events.set(t, []), (i = [])),
                i.includes(e) || i.push(e),
                _this2.events.set(t, i);
            });
        },
      },
      {
        key: "off",
        value: function off(t, e) {
          var _this3 = this;
          var i = [];
          "string" == typeof t
            ? (i = t.split(" "))
            : Array.isArray(t) && (i = t),
            i.forEach(function (t) {
              var i = _this3.events.get(t);
              if (Array.isArray(i)) {
                var _t3 = i.indexOf(e);
                _t3 > -1 && i.splice(_t3, 1);
              }
            });
        },
      },
      {
        key: "emit",
        value: function emit(t) {
          var _this4 = this;
          for (
            var _len3 = arguments.length,
              e = new Array(_len3 > 1 ? _len3 - 1 : 0),
              _key3 = 1;
            _key3 < _len3;
            _key3++
          ) {
            e[_key3 - 1] = arguments[_key3];
          }
          _toConsumableArray(this.events.get(t) || []).forEach(function (t) {
            return t.apply(void 0, [_this4].concat(e));
          }),
            "*" !== t && this.emit.apply(this, ["*", t].concat(e));
        },
      },
    ]);
    return g;
  })();
  Object.defineProperty(g, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.14",
  }),
    Object.defineProperty(g, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {},
    });
  var b = /*#__PURE__*/ (function (_g) {
    _inherits(b, _g);
    var _super = _createSuper(b);
    function b() {
      var _this5;
      var t =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, b);
      (_this5 = _super.call(this, t)),
        Object.defineProperty(_assertThisInitialized(_this5), "plugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        });
      return _this5;
    }
    _createClass(b, [
      {
        key: "attachPlugins",
        value: function attachPlugins() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          var e = new Map();
          for (
            var _i6 = 0, _Object$entries2 = Object.entries(t);
            _i6 < _Object$entries2.length;
            _i6++
          ) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
              _i7 = _Object$entries2$_i[0],
              _n2 = _Object$entries2$_i[1];
            var _t4 = this.option(_i7),
              _s3 = this.plugins[_i7];
            _s3 || !1 === _t4
              ? _s3 && !1 === _t4 && (_s3.detach(), delete this.plugins[_i7])
              : e.set(_i7, new _n2(this, _t4 || {}));
          }
          var _iterator2 = _createForOfIteratorHelper(e),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                _t5 = _step2$value[0],
                _i8 = _step2$value[1];
              (this.plugins[_t5] = _i8), _i8.attach();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          this.emit("attachPlugins");
        },
      },
      {
        key: "detachPlugins",
        value: function detachPlugins() {
          for (
            var _i9 = 0, _Object$values = Object.values(this.plugins);
            _i9 < _Object$values.length;
            _i9++
          ) {
            var _t6 = _Object$values[_i9];
            _t6.detach();
          }
          return (this.plugins = {}), this.emit("detachPlugins"), this;
        },
      },
    ]);
    return b;
  })(g);
  var v = /*#__PURE__*/ (function (_g2) {
    _inherits(v, _g2);
    var _super2 = _createSuper(v);
    function v(t, e) {
      var _this6;
      _classCallCheck(this, v);
      (_this6 = _super2.call(this, e)),
        Object.defineProperty(_assertThisInitialized(_this6), "instance", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: t,
        });
      return _this6;
    }
    _createClass(v, [
      {
        key: "attach",
        value: function attach() {},
      },
      {
        key: "detach",
        value: function detach() {},
      },
    ]);
    return v;
  })(g);
  var y = function y() {
    queueMicrotask(function () {
      (function () {
        var _w$parseURL = w.parseURL(),
          t = _w$parseURL.slug,
          e = _w$parseURL.index,
          i = It.getInstance();
        if (i && !1 !== i.option("Hash")) {
          var _n3 = i.carousel;
          if (t && _n3) {
            var _iterator3 = _createForOfIteratorHelper(_n3.slides),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _e4 = _step3.value;
                if (_e4.slug && _e4.slug === t) return _n3.slideTo(_e4.index);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            if (t === i.option("slug")) return _n3.slideTo(e - 1);
            var _s4 = i.getSlide(),
              _o2 = _s4 && _s4.triggerEl && _s4.triggerEl.dataset;
            if (_o2 && _o2.fancybox === t) return _n3.slideTo(e - 1);
          }
          (w.hasSilentClose = !0), i.close();
        }
        w.startFromUrl();
      })();
    });
  };
  var w = /*#__PURE__*/ (function (_v) {
    _inherits(w, _v);
    var _super3 = _createSuper(w);
    function w() {
      var _this7;
      _classCallCheck(this, w);
      (_this7 = _super3.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this7), "origHash", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "",
        }),
        Object.defineProperty(_assertThisInitialized(_this7), "timer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this7;
    }
    _createClass(
      w,
      [
        {
          key: "onChange",
          value: function onChange() {
            var t = this.instance,
              e = t.carousel;
            this.timer && clearTimeout(this.timer);
            var i = t.getSlide();
            if (!e || !i) return;
            var n = t.isOpeningSlide(i),
              s = new URL(document.URL).hash;
            var o,
              a = i.slug || void 0;
            (o = a || this.instance.option("slug")),
              !o &&
                i.triggerEl &&
                i.triggerEl.dataset &&
                (o = i.triggerEl.dataset.fancybox);
            var r = "";
            o &&
              "true" !== o &&
              (r =
                "#" +
                o +
                (!a && e.slides.length > 1 ? "-" + (i.index + 1) : "")),
              n && (this.origHash = s !== r ? s : ""),
              r &&
                s !== r &&
                (this.timer = setTimeout(function () {
                  try {
                    window.history[n ? "pushState" : "replaceState"](
                      {},
                      document.title,
                      window.location.pathname + window.location.search + r
                    );
                  } catch (t) {}
                }, 300));
          },
        },
        {
          key: "onClose",
          value: function onClose() {
            if (
              (this.timer && clearTimeout(this.timer), !0 !== w.hasSilentClose)
            )
              try {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname +
                    window.location.search +
                    (this.origHash || "")
                );
              } catch (t) {}
          },
        },
        {
          key: "attach",
          value: function attach() {
            this.instance.on("Carousel.ready", this.onChange),
              this.instance.on("Carousel.change", this.onChange),
              this.instance.on("close", this.onClose);
          },
        },
        {
          key: "detach",
          value: function detach() {
            this.instance.off("Carousel.ready", this.onChange),
              this.instance.off("Carousel.change", this.onChange),
              this.instance.off("close", this.onClose);
          },
        },
      ],
      [
        {
          key: "parseURL",
          value: function parseURL() {
            var t = window.location.hash.slice(1),
              e = t.split("-"),
              i = e[e.length - 1],
              n =
                (i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10)) || 1;
            return {
              hash: t,
              slug: e.join("-"),
              index: n,
            };
          },
        },
        {
          key: "startFromUrl",
          value: function startFromUrl() {
            if (
              ((w.hasSilentClose = !1),
              It.getInstance() || !1 === It.defaults.Hash)
            )
              return;
            var _w$parseURL2 = w.parseURL(),
              t = _w$parseURL2.hash,
              e = _w$parseURL2.slug,
              i = _w$parseURL2.index;
            if (!e) return;
            var n = document.querySelector('[data-slug="'.concat(t, '"]'));
            if (
              (n &&
                n.dispatchEvent(
                  new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                  })
                ),
              It.getInstance())
            )
              return;
            var s = document.querySelectorAll(
              '[data-fancybox="'.concat(e, '"]')
            );
            s.length &&
              ((n = s[i - 1]),
              n &&
                n.dispatchEvent(
                  new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0,
                  })
                ));
          },
        },
        {
          key: "destroy",
          value: function destroy() {
            window.removeEventListener("hashchange", y, !1);
          },
        },
      ]
    );
    return w;
  })(v);
  function x() {
    window.addEventListener("hashchange", y, !1),
      setTimeout(function () {
        w.startFromUrl();
      }, 500);
  }
  Object.defineProperty(w, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {},
  }),
    Object.defineProperty(w, "hasSilentClose", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1,
    }),
    a &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? x()
        : document.addEventListener("DOMContentLoaded", x));
  var E = function E(t) {
      var e =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
      return (
        (t = parseFloat(t + "") || 0), Math.round((t + Number.EPSILON) * e) / e
      );
    },
    S = function S(t) {
      if (!(t && t instanceof Element && t.offsetParent)) return !1;
      var e = t.scrollHeight > t.clientHeight,
        i = window.getComputedStyle(t).overflowY,
        n = -1 !== i.indexOf("hidden"),
        s = -1 !== i.indexOf("visible");
      return e && !n && !s;
    },
    P = function P(t, e) {
      return (
        !(!t || t === document.body || (e && t === e)) &&
        (S(t) ? t : P(t.parentElement, e))
      );
    },
    C = function C(t) {
      return ""
        .concat(t || "")
        .split(" ")
        .filter(function (t) {
          return !!t;
        });
    },
    M = function M(t, e, i) {
      C(e).forEach(function (e) {
        t && t.classList.toggle(e, i || !1);
      });
    };
  var T = /*#__PURE__*/ _createClass(function T(t) {
    _classCallCheck(this, T);
    Object.defineProperty(this, "pageX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0,
    }),
      Object.defineProperty(this, "pageY", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "clientX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "clientY", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "id", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "time", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "nativePointer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.nativePointer = t),
      (this.pageX = t.pageX),
      (this.pageY = t.pageY),
      (this.clientX = t.clientX),
      (this.clientY = t.clientY),
      (this.id = self.Touch && t instanceof Touch ? t.identifier : -1),
      (this.time = Date.now());
  });
  var O = {
    passive: !1,
  };
  var A = /*#__PURE__*/ (function () {
    function A(t, _ref3) {
      var _ref3$start = _ref3.start,
        e =
          _ref3$start === void 0
            ? function () {
                return !0;
              }
            : _ref3$start,
        _ref3$move = _ref3.move,
        i = _ref3$move === void 0 ? function () {} : _ref3$move,
        _ref3$end = _ref3.end,
        n = _ref3$end === void 0 ? function () {} : _ref3$end;
      _classCallCheck(this, A);
      Object.defineProperty(this, "element", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
        Object.defineProperty(this, "startCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "moveCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "endCallback", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "currentPointers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(this, "startPointers", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        (this.element = t),
        (this.startCallback = e),
        (this.moveCallback = i),
        (this.endCallback = n);
      for (
        var _i10 = 0,
          _arr2 = [
            "onPointerStart",
            "onTouchStart",
            "onMove",
            "onTouchEnd",
            "onPointerEnd",
            "onWindowBlur",
          ];
        _i10 < _arr2.length;
        _i10++
      ) {
        var _t7 = _arr2[_i10];
        this[_t7] = this[_t7].bind(this);
      }
      this.element.addEventListener("mousedown", this.onPointerStart, O),
        this.element.addEventListener("touchstart", this.onTouchStart, O),
        this.element.addEventListener("touchmove", this.onMove, O),
        this.element.addEventListener("touchend", this.onTouchEnd),
        this.element.addEventListener("touchcancel", this.onTouchEnd);
    }
    _createClass(A, [
      {
        key: "onPointerStart",
        value: function onPointerStart(t) {
          if (!t.buttons || 0 !== t.button) return;
          var e = new T(t);
          this.currentPointers.some(function (t) {
            return t.id === e.id;
          }) ||
            (this.triggerPointerStart(e, t) &&
              (window.addEventListener("mousemove", this.onMove),
              window.addEventListener("mouseup", this.onPointerEnd),
              window.addEventListener("blur", this.onWindowBlur)));
        },
      },
      {
        key: "onTouchStart",
        value: function onTouchStart(t) {
          for (
            var _i11 = 0, _Array$from = Array.from(t.changedTouches || []);
            _i11 < _Array$from.length;
            _i11++
          ) {
            var _e5 = _Array$from[_i11];
            this.triggerPointerStart(new T(_e5), t);
          }
          window.addEventListener("blur", this.onWindowBlur);
        },
      },
      {
        key: "onMove",
        value: function onMove(t) {
          var _this8 = this;
          var e = this.currentPointers.slice(),
            i =
              "changedTouches" in t
                ? Array.from(t.changedTouches || []).map(function (t) {
                    return new T(t);
                  })
                : [new T(t)],
            n = [];
          var _iterator4 = _createForOfIteratorHelper(i),
            _step4;
          try {
            var _loop = function _loop() {
              var t = _step4.value;
              var e = _this8.currentPointers.findIndex(function (e) {
                return e.id === t.id;
              });
              e < 0 || (n.push(t), (_this8.currentPointers[e] = t));
            };
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              _loop();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          n.length && this.moveCallback(t, this.currentPointers.slice(), e);
        },
      },
      {
        key: "onPointerEnd",
        value: function onPointerEnd(t) {
          (t.buttons > 0 && 0 !== t.button) ||
            (this.triggerPointerEnd(t, new T(t)),
            window.removeEventListener("mousemove", this.onMove),
            window.removeEventListener("mouseup", this.onPointerEnd),
            window.removeEventListener("blur", this.onWindowBlur));
        },
      },
      {
        key: "onTouchEnd",
        value: function onTouchEnd(t) {
          for (
            var _i12 = 0, _Array$from2 = Array.from(t.changedTouches || []);
            _i12 < _Array$from2.length;
            _i12++
          ) {
            var _e6 = _Array$from2[_i12];
            this.triggerPointerEnd(t, new T(_e6));
          }
        },
      },
      {
        key: "triggerPointerStart",
        value: function triggerPointerStart(t, e) {
          return (
            !!this.startCallback(e, t, this.currentPointers.slice()) &&
            (this.currentPointers.push(t), this.startPointers.push(t), !0)
          );
        },
      },
      {
        key: "triggerPointerEnd",
        value: function triggerPointerEnd(t, e) {
          var i = this.currentPointers.findIndex(function (t) {
            return t.id === e.id;
          });
          i < 0 ||
            (this.currentPointers.splice(i, 1),
            this.startPointers.splice(i, 1),
            this.endCallback(t, e, this.currentPointers.slice()));
        },
      },
      {
        key: "onWindowBlur",
        value: function onWindowBlur() {
          this.clear();
        },
      },
      {
        key: "clear",
        value: function clear() {
          for (; this.currentPointers.length; ) {
            var _t8 = this.currentPointers[this.currentPointers.length - 1];
            this.currentPointers.splice(this.currentPointers.length - 1, 1),
              this.startPointers.splice(this.currentPointers.length - 1, 1),
              this.endCallback(
                new Event("touchend", {
                  bubbles: !0,
                  cancelable: !0,
                  clientX: _t8.clientX,
                  clientY: _t8.clientY,
                }),
                _t8,
                this.currentPointers.slice()
              );
          }
        },
      },
      {
        key: "stop",
        value: function stop() {
          this.element.removeEventListener("mousedown", this.onPointerStart, O),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              O
            ),
            this.element.removeEventListener("touchmove", this.onMove, O),
            this.element.removeEventListener("touchend", this.onTouchEnd),
            this.element.removeEventListener("touchcancel", this.onTouchEnd),
            window.removeEventListener("mousemove", this.onMove),
            window.removeEventListener("mouseup", this.onPointerEnd),
            window.removeEventListener("blur", this.onWindowBlur);
        },
      },
    ]);
    return A;
  })();
  function z(t, e) {
    return e
      ? Math.sqrt(
          Math.pow(e.clientX - t.clientX, 2) +
            Math.pow(e.clientY - t.clientY, 2)
        )
      : 0;
  }
  function L(t, e) {
    return e
      ? {
          clientX: (t.clientX + e.clientX) / 2,
          clientY: (t.clientY + e.clientY) / 2,
        }
      : t;
  }
  var R;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Error = 1)] = "Error"),
      (t[(t.Ready = 2)] = "Ready"),
      (t[(t.Panning = 3)] = "Panning"),
      (t[(t.Mousemove = 4)] = "Mousemove"),
      (t[(t.Destroy = 5)] = "Destroy");
  })(R || (R = {}));
  var k = ["a", "b", "c", "d", "e", "f"],
    I = {
      content: null,
      width: "auto",
      height: "auto",
      panMode: "drag",
      touch: !0,
      dragMinThreshold: 3,
      lockAxis: !1,
      mouseMoveFactor: 1,
      mouseMoveFriction: 0.12,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: "auto",
      minScale: 1,
      maxScale: 2,
      friction: 0.25,
      dragFriction: 0.35,
      decelFriction: 0.05,
      click: "toggleZoom",
      dblClick: !1,
      wheel: "zoom",
      wheelLimit: 7,
      spinner: !0,
      bounds: "auto",
      infinite: !1,
      rubberband: !0,
      bounce: !0,
      maxVelocity: 75,
      transformParent: !1,
      classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen",
      },
      l10n: d,
    },
    D = function D(t, e) {
      t &&
        C(e).forEach(function (e) {
          t.classList.remove(e);
        });
    },
    F = function F(t, e) {
      t &&
        C(e).forEach(function (e) {
          t.classList.add(e);
        });
    },
    j = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0,
    },
    H = 1e5,
    B = 1e3,
    _ = "mousemove",
    N = "drag",
    W = "content";
  var $ = null,
    X = null;
  var Y = /*#__PURE__*/ (function (_b) {
    _inherits(Y, _b);
    var _super4 = _createSuper(Y);
    function Y(t) {
      var _this9;
      var e =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _classCallCheck(this, Y);
      var s;
      if (
        ((_this9 = _super4.call(this, e)),
        Object.defineProperty(
          _assertThisInitialized(_this9),
          "pointerTracker",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }
        ),
        Object.defineProperty(
          _assertThisInitialized(_this9),
          "resizeObserver",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this9), "updateTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "rAF", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "isTicking", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "friction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "ignoreBounds", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "isBouncingX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "isBouncingY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "clicks", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(
          _assertThisInitialized(_this9),
          "trackingPoints",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this9), "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "cwd", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "pmme", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: R.Init,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "isDragging", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "content", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "spinner", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "containerRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
          },
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "contentRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            fullWidth: 0,
            fullHeight: 0,
            fitWidth: 0,
            fitHeight: 0,
            width: 0,
            height: 0,
          },
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "dragStart", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            x: 0,
            y: 0,
            top: 0,
            left: 0,
            time: 0,
          },
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "dragOffset", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            x: 0,
            y: 0,
            time: 0,
          },
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "current", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, j),
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, j),
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "velocity", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
          },
        }),
        Object.defineProperty(_assertThisInitialized(_this9), "lockedAxis", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        !t)
      )
        throw new Error("Container Element Not Found");
      (_this9.container = t),
        _this9.initContent(),
        _this9.attachPlugins(Object.assign(Object.assign({}, Y.Plugins), i)),
        _this9.emit("init");
      var o = _this9.content;
      if (
        (o.addEventListener("load", _this9.onLoad),
        o.addEventListener("error", _this9.onError),
        _this9.isContentLoading)
      ) {
        if (_this9.option("spinner")) {
          t.classList.add(_this9.cn("isLoading"));
          var _e7 = n(h);
          !t.contains(o) || o.parentElement instanceof HTMLPictureElement
            ? (_this9.spinner = t.appendChild(_e7))
            : (_this9.spinner =
                (null === (s = o.parentElement) || void 0 === s
                  ? void 0
                  : s.insertBefore(_e7, o)) || null);
        }
        _this9.emit("beforeLoad");
      } else
        queueMicrotask(function () {
          _this9.enable();
        });
      return _possibleConstructorReturn(_this9);
    }
    _createClass(Y, [
      {
        key: "isTouchDevice",
        get: function get() {
          return (
            null === X && (X = window.matchMedia("(hover: none)").matches), X
          );
        },
      },
      {
        key: "isMobile",
        get: function get() {
          return (
            null === $ &&
              ($ = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
            $
          );
        },
      },
      {
        key: "panMode",
        get: function get() {
          return this.options.panMode !== _ || this.isTouchDevice ? N : _;
        },
      },
      {
        key: "panOnlyZoomed",
        get: function get() {
          var t = this.options.panOnlyZoomed;
          return "auto" === t ? this.isTouchDevice : t;
        },
      },
      {
        key: "isInfinite",
        get: function get() {
          return this.option("infinite");
        },
      },
      {
        key: "angle",
        get: function get() {
          return (
            (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
          );
        },
      },
      {
        key: "targetAngle",
        get: function get() {
          return (
            (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0
          );
        },
      },
      {
        key: "scale",
        get: function get() {
          var _this$current = this.current,
            t = _this$current.a,
            e = _this$current.b;
          return Math.sqrt(t * t + e * e) || 1;
        },
      },
      {
        key: "targetScale",
        get: function get() {
          var _this$target = this.target,
            t = _this$target.a,
            e = _this$target.b;
          return Math.sqrt(t * t + e * e) || 1;
        },
      },
      {
        key: "minScale",
        get: function get() {
          return this.option("minScale") || 1;
        },
      },
      {
        key: "fullScale",
        get: function get() {
          var t = this.contentRect;
          return t.fullWidth / t.fitWidth || 1;
        },
      },
      {
        key: "maxScale",
        get: function get() {
          return this.fullScale * (this.option("maxScale") || 1) || 1;
        },
      },
      {
        key: "coverScale",
        get: function get() {
          var t = this.containerRect,
            e = this.contentRect,
            i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
          return Math.min(this.fullScale, i);
        },
      },
      {
        key: "isScaling",
        get: function get() {
          return (
            Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
          );
        },
      },
      {
        key: "isContentLoading",
        get: function get() {
          var t = this.content;
          return !!(t && t instanceof HTMLImageElement) && !t.complete;
        },
      },
      {
        key: "isResting",
        get: function get() {
          if (this.isBouncingX || this.isBouncingY) return !1;
          for (var _i13 = 0, _k = k; _i13 < _k.length; _i13++) {
            var _t9 = _k[_i13];
            var _e8 = "e" == _t9 || "f" === _t9 ? 0.001 : 1e-5;
            if (Math.abs(this.target[_t9] - this.current[_t9]) > _e8) return !1;
          }
          return !(!this.ignoreBounds && !this.checkBounds().inBounds);
        },
      },
      {
        key: "initContent",
        value: function initContent() {
          var t = this.container,
            e = this.cn(W);
          var i = this.option(W) || t.querySelector(".".concat(e));
          if (
            (i ||
              ((i = t.querySelector("img,picture") || t.firstElementChild),
              i && F(i, e)),
            i instanceof HTMLPictureElement && (i = i.querySelector("img")),
            !i)
          )
            throw new Error("No content found");
          this.content = i;
        },
      },
      {
        key: "onLoad",
        value: function onLoad() {
          this.spinner && (this.spinner.remove(), (this.spinner = null)),
            this.option("spinner") &&
              this.container.classList.remove(this.cn("isLoading")),
            this.emit("afterLoad"),
            this.state === R.Init ? this.enable() : this.updateMetrics();
        },
      },
      {
        key: "onError",
        value: function onError() {
          this.state !== R.Destroy &&
            (this.spinner && (this.spinner.remove(), (this.spinner = null)),
            this.stop(),
            this.detachEvents(),
            (this.state = R.Error),
            this.emit("error"));
        },
      },
      {
        key: "attachObserver",
        value: function attachObserver() {
          var _this10 = this;
          var t;
          var e = function e() {
            return (
              Math.abs(
                _this10.containerRect.width -
                  _this10.container.getBoundingClientRect().width
              ) > 0.1 ||
              Math.abs(
                _this10.containerRect.height -
                  _this10.container.getBoundingClientRect().height
              ) > 0.1
            );
          };
          this.resizeObserver ||
            void 0 === window.ResizeObserver ||
            (this.resizeObserver = new ResizeObserver(function () {
              _this10.updateTimer ||
                (e()
                  ? (_this10.onResize(),
                    _this10.isMobile &&
                      (_this10.updateTimer = setTimeout(function () {
                        e() && _this10.onResize(), (_this10.updateTimer = null);
                      }, 500)))
                  : _this10.updateTimer &&
                    (clearTimeout(_this10.updateTimer),
                    (_this10.updateTimer = null)));
            })),
            null === (t = this.resizeObserver) ||
              void 0 === t ||
              t.observe(this.container);
        },
      },
      {
        key: "detachObserver",
        value: function detachObserver() {
          var t;
          null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
        },
      },
      {
        key: "attachEvents",
        value: function attachEvents() {
          var t = this.container;
          t.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
            t.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            (this.pointerTracker = new A(t, {
              start: this.onPointerDown,
              move: this.onPointerMove,
              end: this.onPointerUp,
            })),
            document.addEventListener(_, this.onMouseMove);
        },
      },
      {
        key: "detachEvents",
        value: function detachEvents() {
          var t;
          var e = this.container;
          e.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
            e.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            null === (t = this.pointerTracker) || void 0 === t || t.stop(),
            (this.pointerTracker = null),
            document.removeEventListener(_, this.onMouseMove),
            document.removeEventListener("keydown", this.onKeydown, !0),
            this.clickTimer &&
              (clearTimeout(this.clickTimer), (this.clickTimer = null)),
            this.updateTimer &&
              (clearTimeout(this.updateTimer), (this.updateTimer = null));
        },
      },
      {
        key: "animate",
        value: function animate() {
          var _this11 = this;
          var t = this.friction;
          this.setTargetForce();
          var e = this.option("maxVelocity");
          for (var _i14 = 0, _k2 = k; _i14 < _k2.length; _i14++) {
            var _i15 = _k2[_i14];
            t
              ? ((this.velocity[_i15] *= 1 - t),
                e &&
                  !this.isScaling &&
                  (this.velocity[_i15] = Math.max(
                    Math.min(this.velocity[_i15], e),
                    -1 * e
                  )),
                (this.current[_i15] += this.velocity[_i15]))
              : (this.current[_i15] = this.target[_i15]);
          }
          this.setTransform(),
            this.setEdgeForce(),
            !this.isResting || this.isDragging
              ? (this.rAF = requestAnimationFrame(function () {
                  return _this11.animate();
                }))
              : this.stop("current");
        },
      },
      {
        key: "setTargetForce",
        value: function setTargetForce() {
          for (var _i16 = 0, _k3 = k; _i16 < _k3.length; _i16++) {
            var _t10 = _k3[_i16];
            ("e" === _t10 && this.isBouncingX) ||
              ("f" === _t10 && this.isBouncingY) ||
              (this.velocity[_t10] =
                (1 / (1 - this.friction) - 1) *
                (this.target[_t10] - this.current[_t10]));
          }
        },
      },
      {
        key: "checkBounds",
        value: function checkBounds() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          var i = this.current,
            n = i.e + t,
            s = i.f + e,
            o = this.getBounds(),
            a = o.x,
            r = o.y,
            l = a.min,
            c = a.max,
            h = r.min,
            d = r.max;
          var u = 0,
            p = 0;
          return (
            l !== 1 / 0 && n < l
              ? (u = l - n)
              : c !== 1 / 0 && n > c && (u = c - n),
            h !== 1 / 0 && s < h
              ? (p = h - s)
              : d !== 1 / 0 && s > d && (p = d - s),
            Math.abs(u) < 0.001 && (u = 0),
            Math.abs(p) < 0.001 && (p = 0),
            Object.assign(Object.assign({}, o), {
              xDiff: u,
              yDiff: p,
              inBounds: !u && !p,
            })
          );
        },
      },
      {
        key: "clampTargetBounds",
        value: function clampTargetBounds() {
          var t = this.target,
            _this$getBounds = this.getBounds(),
            e = _this$getBounds.x,
            i = _this$getBounds.y;
          e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)),
            e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)),
            i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)),
            i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
        },
      },
      {
        key: "calculateContentDim",
        value: function calculateContentDim() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.current;
          var e = this.content,
            i = this.contentRect,
            n = i.fitWidth,
            s = i.fitHeight,
            o = i.fullWidth,
            a = i.fullHeight;
          var r = o,
            l = a;
          if (this.option("zoom") || 0 !== this.angle) {
            var _i17 =
                !(e instanceof HTMLImageElement) &&
                ("none" === window.getComputedStyle(e).maxWidth ||
                  "none" === window.getComputedStyle(e).maxHeight),
              _c = _i17 ? o : n,
              _h = _i17 ? a : s,
              _d2 = this.getMatrix(t),
              _u = new DOMPoint(0, 0).matrixTransform(_d2),
              _p = new DOMPoint(0 + _c, 0).matrixTransform(_d2),
              _f = new DOMPoint(0 + _c, 0 + _h).matrixTransform(_d2),
              _m = new DOMPoint(0, 0 + _h).matrixTransform(_d2),
              _g3 = Math.abs(_f.x - _u.x),
              _b2 = Math.abs(_f.y - _u.y),
              _v2 = Math.abs(_m.x - _p.x),
              _y = Math.abs(_m.y - _p.y);
            (r = Math.max(_g3, _v2)), (l = Math.max(_b2, _y));
          }
          return {
            contentWidth: r,
            contentHeight: l,
          };
        },
      },
      {
        key: "setEdgeForce",
        value: function setEdgeForce() {
          if (
            this.ignoreBounds ||
            this.isDragging ||
            this.panMode === _ ||
            this.targetScale < this.scale
          )
            return (this.isBouncingX = !1), void (this.isBouncingY = !1);
          var t = this.target,
            _this$checkBounds = this.checkBounds(),
            e = _this$checkBounds.x,
            i = _this$checkBounds.y,
            n = _this$checkBounds.xDiff,
            s = _this$checkBounds.yDiff;
          var o = this.option("maxVelocity");
          var a = this.velocity.e,
            r = this.velocity.f;
          0 !== n
            ? ((this.isBouncingX = !0),
              n * a <= 0
                ? (a += 0.14 * n)
                : ((a = 0.14 * n),
                  e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)),
                  e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))),
              o && (a = Math.max(Math.min(a, o), -1 * o)))
            : (this.isBouncingX = !1),
            0 !== s
              ? ((this.isBouncingY = !0),
                s * r <= 0
                  ? (r += 0.14 * s)
                  : ((r = 0.14 * s),
                    i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)),
                    i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))),
                o && (r = Math.max(Math.min(r, o), -1 * o)))
              : (this.isBouncingY = !1),
            this.isBouncingX && (this.velocity.e = a),
            this.isBouncingY && (this.velocity.f = r);
        },
      },
      {
        key: "enable",
        value: function enable() {
          var t = this.content,
            e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
          for (var _i18 = 0, _k4 = k; _i18 < _k4.length; _i18++) {
            var _t11 = _k4[_i18];
            this.current[_t11] = this.target[_t11] = e[_t11];
          }
          this.updateMetrics(),
            this.attachObserver(),
            this.attachEvents(),
            (this.state = R.Ready),
            this.emit("ready");
        },
      },
      {
        key: "onClick",
        value: function onClick(t) {
          var _this12 = this;
          var e;
          this.isDragging &&
            (null === (e = this.pointerTracker) || void 0 === e || e.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
          var i = t.target;
          if (!i || t.defaultPrevented) return;
          if (i && i.hasAttribute("disabled"))
            return t.preventDefault(), void t.stopPropagation();
          if (
            (function () {
              var t = window.getSelection();
              return t && "Range" === t.type;
            })() &&
            !i.closest("button")
          )
            return;
          var n = i.closest("[data-panzoom-action]"),
            o = i.closest("[data-panzoom-change]"),
            a = n || o,
            r = a && s(a) ? a.dataset : null;
          if (r) {
            var _e9 = r.panzoomChange,
              _i19 = r.panzoomAction;
            if (((_e9 || _i19) && t.preventDefault(), _e9)) {
              var _t12 = {};
              try {
                _t12 = JSON.parse(_e9);
              } catch (t) {
                console && console.warn("The given data was not valid JSON");
              }
              return void this.applyChange(_t12);
            }
            if (_i19) return void (this[_i19] && this[_i19]());
          }
          if (
            Math.abs(this.dragOffset.x) > 3 ||
            Math.abs(this.dragOffset.y) > 3
          )
            return t.preventDefault(), void t.stopPropagation();
          var l = this.content.getBoundingClientRect();
          if (
            this.dragStart.time &&
            !this.canZoomOut() &&
            (Math.abs(l.x - this.dragStart.x) > 2 ||
              Math.abs(l.y - this.dragStart.y) > 2)
          )
            return;
          this.dragStart.time = 0;
          var c = function c(e) {
              _this12.option("zoom") &&
                e &&
                "string" == typeof e &&
                /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
                  e
                ) &&
                "function" == typeof _this12[e] &&
                (t.preventDefault(),
                _this12[e]({
                  event: t,
                }));
            },
            h = this.option("click", t),
            d = this.option("dblClick", t);
          d
            ? (this.clicks++,
              1 == this.clicks &&
                (this.clickTimer = setTimeout(function () {
                  1 === _this12.clicks
                    ? (_this12.emit("click", t),
                      !t.defaultPrevented && h && c(h))
                    : (_this12.emit("dblClick", t), t.defaultPrevented || c(d)),
                    (_this12.clicks = 0),
                    (_this12.clickTimer = null);
                }, 350)))
            : (this.emit("click", t), !t.defaultPrevented && h && c(h));
        },
      },
      {
        key: "addTrackingPoint",
        value: function addTrackingPoint(t) {
          var e = this.trackingPoints.filter(function (t) {
            return t.time > Date.now() - 100;
          });
          e.push(t), (this.trackingPoints = e);
        },
      },
      {
        key: "onPointerDown",
        value: function onPointerDown(t, e, i) {
          var n;
          (this.pwt = 0),
            (this.dragOffset = {
              x: 0,
              y: 0,
              time: 0,
            }),
            (this.trackingPoints = []);
          var s = this.content.getBoundingClientRect();
          if (
            ((this.dragStart = {
              x: s.x,
              y: s.y,
              top: s.top,
              left: s.left,
              time: Date.now(),
            }),
            this.clickTimer)
          )
            return !1;
          if (this.panMode === _ && this.targetScale > 1)
            return t.preventDefault(), t.stopPropagation(), !1;
          if (!i.length) {
            var _e10 = t.composedPath()[0];
            if (
              ["A", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(
                _e10.nodeName
              ) ||
              _e10.closest("[contenteditable]") ||
              _e10.closest("[data-selectable]") ||
              _e10.closest("[data-panzoom-change]") ||
              _e10.closest("[data-panzoom-action]")
            )
              return !1;
            null === (n = window.getSelection()) ||
              void 0 === n ||
              n.removeAllRanges();
          }
          if ("mousedown" === t.type) t.preventDefault();
          else if (Math.abs(this.velocity.a) > 0.3) return !1;
          return (
            (this.target.e = this.current.e),
            (this.target.f = this.current.f),
            this.stop(),
            this.isDragging ||
              ((this.isDragging = !0),
              this.addTrackingPoint(e),
              this.emit("touchStart", t)),
            !0
          );
        },
      },
      {
        key: "onPointerMove",
        value: function onPointerMove(t, e, i) {
          if (!1 === this.option("touch", t)) return;
          if (!this.isDragging) return;
          if (
            e.length < 2 &&
            this.panOnlyZoomed &&
            E(this.targetScale) <= E(this.minScale)
          )
            return;
          if ((this.emit("touchMove", t), t.defaultPrevented)) return;
          this.addTrackingPoint(e[0]);
          var n = this.content,
            s = L(i[0], i[1]),
            o = L(e[0], e[1]);
          var a = 0,
            r = 0;
          if (e.length > 1) {
            var _t13 = n.getBoundingClientRect();
            (a = s.clientX - _t13.left - 0.5 * _t13.width),
              (r = s.clientY - _t13.top - 0.5 * _t13.height);
          }
          var l = z(i[0], i[1]),
            c = z(e[0], e[1]);
          var h = l ? c / l : 1,
            d = o.clientX - s.clientX,
            u = o.clientY - s.clientY;
          (this.dragOffset.x += d),
            (this.dragOffset.y += u),
            (this.dragOffset.time = Date.now() - this.dragStart.time);
          var p =
            E(this.targetScale) === E(this.minScale) && this.option("lockAxis");
          if (p && !this.lockedAxis)
            if ("xy" === p || "y" === p || "touchmove" === t.type) {
              if (
                Math.abs(this.dragOffset.x) < 6 &&
                Math.abs(this.dragOffset.y) < 6
              )
                return void t.preventDefault();
              var _e11 = Math.abs(
                (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) /
                  Math.PI
              );
              (this.lockedAxis = _e11 > 45 && _e11 < 135 ? "y" : "x"),
                (this.dragOffset.x = 0),
                (this.dragOffset.y = 0),
                (d = 0),
                (u = 0);
            } else this.lockedAxis = p;
          if (
            (P(t.target, this.content) && ((p = "x"), (this.dragOffset.y = 0)),
            p &&
              "xy" !== p &&
              this.lockedAxis !== p &&
              E(this.targetScale) === E(this.minScale))
          )
            return;
          t.cancelable && t.preventDefault(),
            this.container.classList.add(this.cn("isDragging"));
          var f = this.checkBounds(d, u);
          this.option("rubberband")
            ? ("x" !== this.isInfinite &&
                ((f.xDiff > 0 && d < 0) || (f.xDiff < 0 && d > 0)) &&
                (d *= Math.max(
                  0,
                  0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff)
                )),
              "y" !== this.isInfinite &&
                ((f.yDiff > 0 && u < 0) || (f.yDiff < 0 && u > 0)) &&
                (u *= Math.max(
                  0,
                  0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff)
                )))
            : (f.xDiff && (d = 0), f.yDiff && (u = 0));
          var m = this.targetScale,
            g = this.minScale,
            b = this.maxScale;
          m < 0.5 * g && (h = Math.max(h, g)),
            m > 1.5 * b && (h = Math.min(h, b)),
            "y" === this.lockedAxis && E(m) === E(g) && (d = 0),
            "x" === this.lockedAxis && E(m) === E(g) && (u = 0),
            this.applyChange({
              originX: a,
              originY: r,
              panX: d,
              panY: u,
              scale: h,
              friction: this.option("dragFriction"),
              ignoreBounds: !0,
            });
        },
      },
      {
        key: "onPointerUp",
        value: function onPointerUp(t, e, i) {
          if (i.length)
            return (
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              void (this.trackingPoints = [])
            );
          this.container.classList.remove(this.cn("isDragging")),
            this.isDragging &&
              (this.addTrackingPoint(e),
              this.panOnlyZoomed &&
                this.contentRect.width - this.contentRect.fitWidth < 1 &&
                this.contentRect.height - this.contentRect.fitHeight < 1 &&
                (this.trackingPoints = []),
              P(t.target, this.content) &&
                "y" === this.lockedAxis &&
                (this.trackingPoints = []),
              this.emit("touchEnd", t),
              (this.isDragging = !1),
              (this.lockedAxis = !1),
              this.state !== R.Destroy &&
                (t.defaultPrevented || this.startDecelAnim()));
        },
      },
      {
        key: "startDecelAnim",
        value: function startDecelAnim() {
          var t = this.isScaling;
          this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
            (this.isBouncingX = !1),
            (this.isBouncingY = !1);
          for (var _i20 = 0, _k5 = k; _i20 < _k5.length; _i20++) {
            var _t14 = _k5[_i20];
            this.velocity[_t14] = 0;
          }
          (this.target.e = this.current.e),
            (this.target.f = this.current.f),
            D(this.container, "is-scaling"),
            D(this.container, "is-animating"),
            (this.isTicking = !1);
          var e = this.trackingPoints,
            i = e[0],
            n = e[e.length - 1];
          var s = 0,
            o = 0,
            a = 0;
          n &&
            i &&
            ((s = n.clientX - i.clientX),
            (o = n.clientY - i.clientY),
            (a = n.time - i.time));
          var r = 0,
            l = 0,
            c = 0,
            h = 0,
            d = this.option("decelFriction");
          var u = this.targetScale;
          if (a > 0) {
            (c = Math.abs(s) > 3 ? s / (a / 30) : 0),
              (h = Math.abs(o) > 3 ? o / (a / 30) : 0);
            var _t15 = this.option("maxVelocity");
            _t15 &&
              ((c = Math.max(Math.min(c, _t15), -1 * _t15)),
              (h = Math.max(Math.min(h, _t15), -1 * _t15)));
          }
          c && (r = c / (1 / (1 - d) - 1)),
            h && (l = h / (1 / (1 - d) - 1)),
            ("y" === this.option("lockAxis") ||
              ("xy" === this.option("lockAxis") &&
                "y" === this.lockedAxis &&
                E(u) === this.minScale)) &&
              (r = c = 0),
            ("x" === this.option("lockAxis") ||
              ("xy" === this.option("lockAxis") &&
                "x" === this.lockedAxis &&
                E(u) === this.minScale)) &&
              (l = h = 0);
          var p = this.dragOffset.x,
            f = this.dragOffset.y,
            m = this.option("dragMinThreshold") || 0;
          Math.abs(p) < m && Math.abs(f) < m && ((r = l = 0), (c = h = 0)),
            (u < this.minScale - 1e-5 ||
              u > this.maxScale + 1e-5 ||
              (t && !r && !l)) &&
              (d = 0.35),
            this.applyChange({
              panX: r,
              panY: l,
              friction: d,
            }),
            this.emit("decel", c, h, p, f);
        },
      },
      {
        key: "onWheel",
        value: function onWheel(t) {
          var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(
            function (t, e) {
              return Math.abs(e) > Math.abs(t) ? e : t;
            }
          );
          var i = Math.max(-1, Math.min(1, e));
          if ((this.emit("wheel", t, i), this.panMode === _)) return;
          if (t.defaultPrevented) return;
          var n = this.option("wheel");
          "pan" === n
            ? (t.preventDefault(),
              (this.panOnlyZoomed && !this.canZoomOut()) ||
                this.applyChange({
                  panX: 2 * -t.deltaX,
                  panY: 2 * -t.deltaY,
                  bounce: !1,
                }))
            : "zoom" === n &&
              !1 !== this.option("zoom") &&
              this.zoomWithWheel(t);
        },
      },
      {
        key: "onMouseMove",
        value: function onMouseMove(t) {
          this.panWithMouse(t);
        },
      },
      {
        key: "onKeydown",
        value: function onKeydown(t) {
          "Escape" === t.key && this.toggleFS();
        },
      },
      {
        key: "onResize",
        value: function onResize() {
          this.updateMetrics(),
            this.checkBounds().inBounds || this.requestTick();
        },
      },
      {
        key: "setTransform",
        value: function setTransform() {
          this.emit("beforeTransform");
          var t = this.current,
            e = this.target,
            i = this.content,
            n = this.contentRect,
            s = Object.assign({}, j);
          for (var _i21 = 0, _k6 = k; _i21 < _k6.length; _i21++) {
            var _i22 = _k6[_i21];
            var _n4 = "e" == _i22 || "f" === _i22 ? B : H;
            (s[_i22] = E(t[_i22], _n4)),
              Math.abs(e[_i22] - t[_i22]) <
                ("e" == _i22 || "f" === _i22 ? 0.51 : 0.001) &&
                (t[_i22] = e[_i22]);
          }
          var o = s.a,
            a = s.b,
            r = s.c,
            l = s.d,
            c = s.e,
            h = s.f,
            d = "matrix("
              .concat(o, ", ")
              .concat(a, ", ")
              .concat(r, ", ")
              .concat(l, ", ")
              .concat(c, ", ")
              .concat(h, ")"),
            u =
              i.parentElement instanceof HTMLPictureElement
                ? i.parentElement
                : i;
          if (
            (this.option("transformParent") && (u = u.parentElement || u),
            u.style.transform === d)
          )
            return;
          u.style.transform = d;
          var _this$calculateConten = this.calculateContentDim(),
            p = _this$calculateConten.contentWidth,
            f = _this$calculateConten.contentHeight;
          (n.width = p), (n.height = f), this.emit("afterTransform");
        },
      },
      {
        key: "updateMetrics",
        value: function updateMetrics() {
          var _ref4;
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : !1;
          if (!this || this.state === R.Destroy) return;
          if (this.isContentLoading) return;
          var e = this.container,
            i = this.content,
            n = i instanceof HTMLImageElement,
            s = e.getBoundingClientRect(),
            o = getComputedStyle(this.container),
            a = s.width,
            r = s.height,
            l = parseFloat(o.paddingTop) + parseFloat(o.paddingBottom),
            c = a - (parseFloat(o.paddingLeft) + parseFloat(o.paddingRight)),
            h = r - l;
          this.containerRect = {
            width: a,
            height: r,
            innerWidth: c,
            innerHeight: h,
          };
          var d = this.option("width") || "auto",
            u = this.option("height") || "auto";
          "auto" === d &&
            (d =
              parseFloat(i.dataset.width || "") ||
              (function (t) {
                var e = 0;
                return (
                  (e =
                    t instanceof HTMLImageElement
                      ? t.naturalWidth
                      : t instanceof SVGElement
                      ? t.width.baseVal.value
                      : Math.max(t.offsetWidth, t.scrollWidth)),
                  e || 0
                );
              })(i)),
            "auto" === u &&
              (u =
                parseFloat(i.dataset.height || "") ||
                (function (t) {
                  var e = 0;
                  return (
                    (e =
                      t instanceof HTMLImageElement
                        ? t.naturalHeight
                        : t instanceof SVGElement
                        ? t.height.baseVal.value
                        : Math.max(t.offsetHeight, t.scrollHeight)),
                    e || 0
                  );
                })(i));
          var p =
            i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
          this.option("transformParent") && (p = p.parentElement || p);
          var f = p.getAttribute("style") || "";
          p.style.setProperty("transform", "none", "important"),
            n && ((p.style.width = ""), (p.style.height = "")),
            p.offsetHeight;
          var m = i.getBoundingClientRect();
          var g = m.width,
            b = m.height,
            v = 0,
            y = 0;
          n &&
            (Math.abs(d - g) > 1 || Math.abs(u - b) > 1) &&
            ((_ref4 = (function (t, e, i, n) {
              var s = i / n;
              return (
                s > t / e ? ((i = t), (n = t / s)) : ((i = e * s), (n = e)),
                {
                  width: i,
                  height: n,
                  top: 0.5 * (e - n),
                  left: 0.5 * (t - i),
                }
              );
            })(g, b, d, u)),
            (g = _ref4.width),
            (b = _ref4.height),
            (v = _ref4.top),
            (y = _ref4.left),
            _ref4),
            (this.contentRect = Object.assign(
              Object.assign({}, this.contentRect),
              {
                top: m.top - s.top + v,
                bottom: s.bottom - m.bottom + v,
                left: m.left - s.left + y,
                right: s.right - m.right + y,
                fitWidth: g,
                fitHeight: b,
                width: g,
                height: b,
                fullWidth: d,
                fullHeight: u,
              }
            )),
            (p.style.cssText = f),
            n &&
              ((p.style.width = "".concat(g, "px")),
              (p.style.height = "".concat(b, "px"))),
            this.setTransform(),
            !0 !== t && this.emit("refresh"),
            this.ignoreBounds ||
              (E(this.targetScale) < E(this.minScale)
                ? this.zoomTo(this.minScale, {
                    friction: 0,
                  })
                : this.targetScale > this.maxScale
                ? this.zoomTo(this.maxScale, {
                    friction: 0,
                  })
                : this.state === R.Init ||
                  this.checkBounds().inBounds ||
                  this.requestTick()),
            this.updateControls();
        },
      },
      {
        key: "getBounds",
        value: function getBounds() {
          var t = this.option("bounds");
          if ("auto" !== t) return t;
          var _this$calculateConten2 = this.calculateContentDim(this.target),
            e = _this$calculateConten2.contentWidth,
            i = _this$calculateConten2.contentHeight;
          var n = 0,
            s = 0,
            o = 0,
            a = 0;
          var r = this.option("infinite");
          if (!0 === r || (this.lockedAxis && r === this.lockedAxis))
            (n = -1 / 0), (o = 1 / 0), (s = -1 / 0), (a = 1 / 0);
          else {
            var _t16 = this.containerRect,
              _r2 = this.contentRect,
              _l = E(this.contentRect.fitWidth * this.targetScale, B),
              _c2 = E(this.contentRect.fitHeight * this.targetScale, B),
              _h2 = _t16.innerWidth,
              _d3 = _t16.innerHeight;
            if (
              (this.containerRect.width === _l && (_h2 = _t16.width),
              this.containerRect.width === _c2 && (_d3 = _t16.height),
              e > _h2)
            ) {
              (o = 0.5 * (e - _h2)), (n = -1 * o);
              var _t17 = 0.5 * (_r2.right - _r2.left);
              (n += _t17), (o += _t17);
            }
            if (
              (this.contentRect.fitWidth > _h2 &&
                e < _h2 &&
                ((n -= 0.5 * (this.contentRect.fitWidth - _h2)),
                (o -= 0.5 * (this.contentRect.fitWidth - _h2))),
              i > _d3)
            ) {
              (a = 0.5 * (i - _d3)), (s = -1 * a);
              var _t18 = 0.5 * (_r2.bottom - _r2.top);
              (s += _t18), (a += _t18);
            }
            this.contentRect.fitHeight > _d3 &&
              i < _d3 &&
              ((n -= 0.5 * (this.contentRect.fitHeight - _d3)),
              (o -= 0.5 * (this.contentRect.fitHeight - _d3)));
          }
          return {
            x: {
              min: n,
              max: o,
            },
            y: {
              min: s,
              max: a,
            },
          };
        },
      },
      {
        key: "updateControls",
        value: function updateControls() {
          var t = this,
            e = t.container,
            i = t.panMode,
            n = t.contentRect,
            s = t.fullScale,
            o = t.targetScale,
            a = t.coverScale,
            r = t.maxScale,
            l = t.minScale;
          var c =
              {
                toggleMax: o - l < 0.5 * (r - l) ? r : l,
                toggleCover: o - l < 0.5 * (a - l) ? a : l,
                toggleZoom: o - l < 0.5 * (s - l) ? s : l,
              }[t.option("click") || ""] || l,
            h = t.canZoomIn(),
            d = t.canZoomOut(),
            u = d && i === N;
          E(o) < E(l) && !this.panOnlyZoomed && (u = !0),
            (E(n.width, 1) > E(n.fitWidth, 1) ||
              E(n.height, 1) > E(n.fitHeight, 1)) &&
              (u = !0),
            E(n.width * o, 1) < E(n.fitWidth, 1) && (u = !1),
            i === _ && (u = !1);
          var p = h && E(c) > E(o),
            f = !p && !u && d && E(c) < E(o);
          M(e, this.cn("canZoomIn"), p),
            M(e, this.cn("canZoomOut"), f),
            M(e, this.cn("isDraggable"), u);
          var _iterator5 = _createForOfIteratorHelper(
              e.querySelectorAll('[data-panzoom-action="zoomIn"]')
            ),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              var _t19 = _step5.value;
              h
                ? (_t19.removeAttribute("disabled"),
                  _t19.removeAttribute("tabindex"))
                : (_t19.setAttribute("disabled", ""),
                  _t19.setAttribute("tabindex", "-1"));
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          var _iterator6 = _createForOfIteratorHelper(
              e.querySelectorAll('[data-panzoom-action="zoomOut"]')
            ),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              var _t20 = _step6.value;
              d
                ? (_t20.removeAttribute("disabled"),
                  _t20.removeAttribute("tabindex"))
                : (_t20.setAttribute("disabled", ""),
                  _t20.setAttribute("tabindex", "-1"));
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          var _iterator7 = _createForOfIteratorHelper(
              e.querySelectorAll(
                '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
              )
            ),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              var _t21 = _step7.value;
              h || d
                ? (_t21.removeAttribute("disabled"),
                  _t21.removeAttribute("tabindex"))
                : (_t21.setAttribute("disabled", ""),
                  _t21.setAttribute("tabindex", "-1"));
              var _e12 = _t21.querySelector("g");
              _e12 && (_e12.style.display = h ? "" : "none");
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        },
      },
      {
        key: "panTo",
        value: function panTo(_ref5) {
          var _ref5$x = _ref5.x,
            t = _ref5$x === void 0 ? this.target.e : _ref5$x,
            _ref5$y = _ref5.y,
            e = _ref5$y === void 0 ? this.target.f : _ref5$y,
            _ref5$scale = _ref5.scale,
            i = _ref5$scale === void 0 ? this.targetScale : _ref5$scale,
            _ref5$friction = _ref5.friction,
            n =
              _ref5$friction === void 0
                ? this.option("friction")
                : _ref5$friction,
            _ref5$angle = _ref5.angle,
            s = _ref5$angle === void 0 ? 0 : _ref5$angle,
            _ref5$originX = _ref5.originX,
            o = _ref5$originX === void 0 ? 0 : _ref5$originX,
            _ref5$originY = _ref5.originY,
            a = _ref5$originY === void 0 ? 0 : _ref5$originY,
            _ref5$flipX = _ref5.flipX,
            r = _ref5$flipX === void 0 ? !1 : _ref5$flipX,
            _ref5$flipY = _ref5.flipY,
            l = _ref5$flipY === void 0 ? !1 : _ref5$flipY,
            _ref5$ignoreBounds = _ref5.ignoreBounds,
            c = _ref5$ignoreBounds === void 0 ? !1 : _ref5$ignoreBounds;
          this.state !== R.Destroy &&
            this.applyChange({
              panX: t - this.target.e,
              panY: e - this.target.f,
              scale: i / this.targetScale,
              angle: s,
              originX: o,
              originY: a,
              friction: n,
              flipX: r,
              flipY: l,
              ignoreBounds: c,
            });
        },
      },
      {
        key: "applyChange",
        value: function applyChange(_ref6) {
          var _ref6$panX = _ref6.panX,
            t = _ref6$panX === void 0 ? 0 : _ref6$panX,
            _ref6$panY = _ref6.panY,
            e = _ref6$panY === void 0 ? 0 : _ref6$panY,
            _ref6$scale = _ref6.scale,
            i = _ref6$scale === void 0 ? 1 : _ref6$scale,
            _ref6$angle = _ref6.angle,
            n = _ref6$angle === void 0 ? 0 : _ref6$angle,
            _ref6$originX = _ref6.originX,
            s = _ref6$originX === void 0 ? -this.current.e : _ref6$originX,
            _ref6$originY = _ref6.originY,
            o = _ref6$originY === void 0 ? -this.current.f : _ref6$originY,
            _ref6$friction = _ref6.friction,
            a =
              _ref6$friction === void 0
                ? this.option("friction")
                : _ref6$friction,
            _ref6$flipX = _ref6.flipX,
            r = _ref6$flipX === void 0 ? !1 : _ref6$flipX,
            _ref6$flipY = _ref6.flipY,
            l = _ref6$flipY === void 0 ? !1 : _ref6$flipY,
            _ref6$ignoreBounds = _ref6.ignoreBounds,
            c = _ref6$ignoreBounds === void 0 ? !1 : _ref6$ignoreBounds,
            _ref6$bounce = _ref6.bounce,
            h = _ref6$bounce === void 0 ? this.option("bounce") : _ref6$bounce;
          if (this.state === R.Destroy) return;
          this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
            (this.friction = a || 0),
            (this.ignoreBounds = c);
          var d = this.current,
            u = d.e,
            p = d.f,
            f = this.getMatrix(this.target);
          var m = new DOMMatrix()
            .translate(u, p)
            .translate(s, o)
            .translate(t, e);
          if (this.option("zoom")) {
            if (!c) {
              var _t22 = this.targetScale,
                _e13 = this.minScale,
                _n5 = this.maxScale;
              _t22 * i < _e13 && (i = _e13 / _t22),
                _t22 * i > _n5 && (i = _n5 / _t22);
            }
            m = m.scale(i);
          }
          (m = m.translate(-s, -o).translate(-u, -p).multiply(f)),
            n && (m = m.rotate(n)),
            r && (m = m.scale(-1, 1)),
            l && (m = m.scale(1, -1));
          for (var _i23 = 0, _k7 = k; _i23 < _k7.length; _i23++) {
            var _t23 = _k7[_i23];
            "e" !== _t23 &&
            "f" !== _t23 &&
            (m[_t23] > this.minScale + 1e-5 || m[_t23] < this.minScale - 1e-5)
              ? (this.target[_t23] = m[_t23])
              : (this.target[_t23] = E(m[_t23], B));
          }
          (this.targetScale < this.scale ||
            Math.abs(i - 1) > 0.1 ||
            this.panMode === _ ||
            !1 === h) &&
            !c &&
            this.clampTargetBounds(),
            this.isResting || ((this.state = R.Panning), this.requestTick());
        },
      },
      {
        key: "stop",
        value: function stop() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : !1;
          if (this.state === R.Init || this.state === R.Destroy) return;
          var e = this.isTicking;
          this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
            (this.isBouncingX = !1),
            (this.isBouncingY = !1);
          for (var _i24 = 0, _k8 = k; _i24 < _k8.length; _i24++) {
            var _e14 = _k8[_i24];
            (this.velocity[_e14] = 0),
              "current" === t
                ? (this.current[_e14] = this.target[_e14])
                : "target" === t && (this.target[_e14] = this.current[_e14]);
          }
          this.setTransform(),
            D(this.container, "is-scaling"),
            D(this.container, "is-animating"),
            (this.isTicking = !1),
            (this.state = R.Ready),
            e && (this.emit("endAnimation"), this.updateControls());
        },
      },
      {
        key: "requestTick",
        value: function requestTick() {
          var _this13 = this;
          this.isTicking ||
            (this.emit("startAnimation"),
            this.updateControls(),
            F(this.container, "is-animating"),
            this.isScaling && F(this.container, "is-scaling")),
            (this.isTicking = !0),
            this.rAF ||
              (this.rAF = requestAnimationFrame(function () {
                return _this13.animate();
              }));
        },
      },
      {
        key: "panWithMouse",
        value: function panWithMouse(t) {
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.option("mouseMoveFriction");
          if (((this.pmme = t), this.panMode !== _ || !t)) return;
          if (E(this.targetScale) <= E(this.minScale)) return;
          this.emit("mouseMove", t);
          var i = this.container,
            n = this.containerRect,
            s = this.contentRect,
            o = n.width,
            a = n.height,
            r = i.getBoundingClientRect(),
            l = (t.clientX || 0) - r.left,
            c = (t.clientY || 0) - r.top;
          var _this$calculateConten3 = this.calculateContentDim(this.target),
            h = _this$calculateConten3.contentWidth,
            d = _this$calculateConten3.contentHeight;
          var u = this.option("mouseMoveFactor");
          u > 1 && (h !== o && (h *= u), d !== a && (d *= u));
          var p = 0.5 * (h - o) - (((l / o) * 100) / 100) * (h - o);
          p += 0.5 * (s.right - s.left);
          var f = 0.5 * (d - a) - (((c / a) * 100) / 100) * (d - a);
          (f += 0.5 * (s.bottom - s.top)),
            this.applyChange({
              panX: p - this.target.e,
              panY: f - this.target.f,
              friction: e,
            });
        },
      },
      {
        key: "zoomWithWheel",
        value: function zoomWithWheel(t) {
          if (this.state === R.Destroy || this.state === R.Init) return;
          var e = Date.now();
          if (e - this.pwt < 45) return void t.preventDefault();
          this.pwt = e;
          var i = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(
            function (t, e) {
              return Math.abs(e) > Math.abs(t) ? e : t;
            }
          );
          var n = Math.max(-1, Math.min(1, i)),
            s = this.targetScale,
            o = this.maxScale,
            a = this.minScale;
          var r = (s * (100 + 45 * n)) / 100;
          E(r) < E(a) && E(s) <= E(a)
            ? ((this.cwd += Math.abs(n)), (r = a))
            : E(r) > E(o) && E(s) >= E(o)
            ? ((this.cwd += Math.abs(n)), (r = o))
            : ((this.cwd = 0), (r = Math.max(Math.min(r, o), a))),
            this.cwd > this.option("wheelLimit") ||
              (t.preventDefault(),
              E(r) !== E(s) &&
                this.zoomTo(r, {
                  event: t,
                }));
        },
      },
      {
        key: "canZoomIn",
        value: function canZoomIn() {
          return (
            this.option("zoom") &&
            (E(this.contentRect.width, 1) < E(this.contentRect.fitWidth, 1) ||
              E(this.targetScale) < E(this.maxScale))
          );
        },
      },
      {
        key: "canZoomOut",
        value: function canZoomOut() {
          return this.option("zoom") && E(this.targetScale) > E(this.minScale);
        },
      },
      {
        key: "zoomIn",
        value: function zoomIn() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 1.25;
          var e = arguments.length > 1 ? arguments[1] : undefined;
          this.zoomTo(this.targetScale * t, e);
        },
      },
      {
        key: "zoomOut",
        value: function zoomOut() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0.8;
          var e = arguments.length > 1 ? arguments[1] : undefined;
          this.zoomTo(this.targetScale * t, e);
        },
      },
      {
        key: "zoomToFit",
        value: function zoomToFit(t) {
          this.zoomTo("fit", t);
        },
      },
      {
        key: "zoomToCover",
        value: function zoomToCover(t) {
          this.zoomTo("cover", t);
        },
      },
      {
        key: "zoomToFull",
        value: function zoomToFull(t) {
          this.zoomTo("full", t);
        },
      },
      {
        key: "zoomToMax",
        value: function zoomToMax(t) {
          this.zoomTo("max", t);
        },
      },
      {
        key: "toggleZoom",
        value: function toggleZoom(t) {
          this.zoomTo(
            this.targetScale - this.minScale <
              0.5 * (this.fullScale - this.minScale)
              ? "full"
              : "fit",
            t
          );
        },
      },
      {
        key: "toggleMax",
        value: function toggleMax(t) {
          this.zoomTo(
            this.targetScale - this.minScale <
              0.5 * (this.maxScale - this.minScale)
              ? "max"
              : "fit",
            t
          );
        },
      },
      {
        key: "toggleCover",
        value: function toggleCover(t) {
          this.zoomTo(
            this.targetScale - this.minScale <
              0.5 * (this.coverScale - this.minScale)
              ? "cover"
              : "fit",
            t
          );
        },
      },
      {
        key: "iterateZoom",
        value: function iterateZoom(t) {
          this.zoomTo("next", t);
        },
      },
      {
        key: "zoomTo",
        value: function zoomTo() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 1;
          var _ref7 =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref7$friction = _ref7.friction,
            e = _ref7$friction === void 0 ? "auto" : _ref7$friction,
            _ref7$originX = _ref7.originX,
            i = _ref7$originX === void 0 ? 0 : _ref7$originX,
            _ref7$originY = _ref7.originY,
            n = _ref7$originY === void 0 ? 0 : _ref7$originY,
            s = _ref7.event;
          if (this.isContentLoading || this.state === R.Destroy) return;
          var o = this.targetScale;
          this.stop();
          var a = 1;
          if ((this.panMode === _ && (s = this.pmme || s), s)) {
            var _t24 = this.content.getBoundingClientRect(),
              _e15 = s.clientX || 0,
              _o3 = s.clientY || 0;
            (i = _e15 - _t24.left - 0.5 * _t24.width),
              (n = _o3 - _t24.top - 0.5 * _t24.height);
          }
          var r = this.fullScale,
            l = this.maxScale;
          var c = this.coverScale;
          "number" == typeof t
            ? (a = t / o)
            : ("next" === t &&
                (r - c < 0.2 && (c = r),
                (t = o < r - 1e-5 ? "full" : o < l - 1e-5 ? "max" : "fit")),
              (a =
                "full" === t
                  ? r / o || 1
                  : "cover" === t
                  ? c / o || 1
                  : "max" === t
                  ? l / o || 1
                  : 1 / o || 1)),
            (e = "auto" === e ? (a > 1 ? 0.15 : 0.25) : e),
            this.applyChange({
              scale: a,
              originX: i,
              originY: n,
              friction: e,
            }),
            s && this.panMode === _ && this.panWithMouse(s, e);
        },
      },
      {
        key: "rotateCCW",
        value: function rotateCCW() {
          this.applyChange({
            angle: -90,
          });
        },
      },
      {
        key: "rotateCW",
        value: function rotateCW() {
          this.applyChange({
            angle: 90,
          });
        },
      },
      {
        key: "flipX",
        value: function flipX() {
          this.applyChange({
            flipX: !0,
          });
        },
      },
      {
        key: "flipY",
        value: function flipY() {
          this.applyChange({
            flipY: !0,
          });
        },
      },
      {
        key: "fitX",
        value: function fitX() {
          this.stop("target");
          var t = this.containerRect,
            e = this.contentRect,
            i = this.target;
          this.applyChange({
            panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
            panY: 0.5 * t.height - (e.top + 0.5 * e.fitHeight) - i.f,
            scale: t.width / e.fitWidth / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0,
          });
        },
      },
      {
        key: "fitY",
        value: function fitY() {
          this.stop("target");
          var t = this.containerRect,
            e = this.contentRect,
            i = this.target;
          this.applyChange({
            panX: 0.5 * t.width - (e.left + 0.5 * e.fitWidth) - i.e,
            panY: 0.5 * t.innerHeight - (e.top + 0.5 * e.fitHeight) - i.f,
            scale: t.height / e.fitHeight / this.targetScale,
            originX: 0,
            originY: 0,
            ignoreBounds: !0,
          });
        },
      },
      {
        key: "toggleFS",
        value: function toggleFS() {
          var t = this.container,
            e = this.cn("inFullscreen"),
            i = this.cn("htmlHasFullscreen");
          t.classList.toggle(e);
          var n = t.classList.contains(e);
          n
            ? (document.documentElement.classList.add(i),
              document.addEventListener("keydown", this.onKeydown, !0))
            : (document.documentElement.classList.remove(i),
              document.removeEventListener("keydown", this.onKeydown, !0)),
            this.updateMetrics(),
            this.emit(n ? "enterFS" : "exitFS");
        },
      },
      {
        key: "getMatrix",
        value: function getMatrix() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.current;
          var e = t.a,
            i = t.b,
            n = t.c,
            s = t.d,
            o = t.e,
            a = t.f;
          return new DOMMatrix([e, i, n, s, o, a]);
        },
      },
      {
        key: "reset",
        value: function reset(t) {
          if (this.state !== R.Init && this.state !== R.Destroy) {
            this.stop("current");
            for (var _i25 = 0, _k9 = k; _i25 < _k9.length; _i25++) {
              var _t25 = _k9[_i25];
              this.target[_t25] = j[_t25];
            }
            (this.target.a = this.minScale),
              (this.target.d = this.minScale),
              this.clampTargetBounds(),
              this.isResting ||
                ((this.friction = void 0 === t ? this.option("friction") : t),
                (this.state = R.Panning),
                this.requestTick());
          }
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          this.stop(),
            (this.state = R.Destroy),
            this.detachEvents(),
            this.detachObserver();
          var t = this.container,
            e = this.content,
            i = this.option("classes") || {};
          for (
            var _i26 = 0, _Object$values2 = Object.values(i);
            _i26 < _Object$values2.length;
            _i26++
          ) {
            var _e16 = _Object$values2[_i26];
            t.classList.remove(_e16 + "");
          }
          e &&
            (e.removeEventListener("load", this.onLoad),
            e.removeEventListener("error", this.onError)),
            this.detachPlugins();
        },
      },
    ]);
    return Y;
  })(b);
  Object.defineProperty(Y, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: I,
  }),
    Object.defineProperty(Y, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {},
    });
  var q = function q(t) {
    return new Promise(function (e, i) {
      var n = new Image();
      (n.onload = e), (n.onerror = i), (n.src = t);
    });
  };
  var Z = /*#__PURE__*/ (function (_v3) {
    _inherits(Z, _v3);
    var _super5 = _createSuper(Z);
    function Z() {
      _classCallCheck(this, Z);
      return _super5.apply(this, arguments);
    }
    _createClass(Z, [
      {
        key: "onCreateSlide",
        value: function onCreateSlide(t, e, i) {
          var _this14 = this;
          var n = this.instance,
            s = n.optionFor(i, "src") || "",
            o = i.el,
            a = i.type;
          o &&
            "image" === a &&
            "string" == typeof s &&
            this.setContent(i, s).then(
              function (t) {
                if (n.isClosing()) return;
                var e = i.contentEl,
                  s = i.imageEl,
                  o = i.thumbElSrc,
                  a = _this14.optionFor(i, "initialSize"),
                  r = _this14.optionFor(i, "zoom"),
                  l = {
                    event: n.prevMouseMoveEvent || n.options.event,
                    friction: r ? 0.12 : 0,
                  };
                if (
                  e &&
                  s &&
                  o &&
                  n.isOpeningSlide(i) &&
                  _this14.getZoomInfo(i)
                ) {
                  var _t26 = document.createElement("img");
                  F(_t26, "fancybox-ghost"),
                    e.appendChild(_t26),
                    (_t26.src = o),
                    setTimeout(function () {
                      n.animate(_t26, "f-fadeFastOut", function () {
                        _t26 && (_t26.remove(), (_t26 = null));
                      });
                    }, 333),
                    q(o).then(
                      function () {
                        (i.state = f.Opening),
                          _this14.instance.emit("reveal", i),
                          _this14.zoomIn(i).then(
                            function () {
                              _this14.instance.done(i);
                            },
                            function () {
                              n.hideLoading(i);
                            }
                          );
                      },
                      function () {
                        n.hideLoading(i), n.revealContent(i);
                      }
                    );
                } else {
                  var _e17 = n.optionFor(i, "showClass") || void 0,
                    _s5 = !0;
                  n.isOpeningSlide(i) &&
                    ("full" === a
                      ? t.zoomToFull(l)
                      : "cover" === a
                      ? t.zoomToCover(l)
                      : "max" === a
                      ? t.zoomToMax(l)
                      : (_s5 = !1),
                    t.stop("current")),
                    _s5 && _e17 && (_e17 = "f-fadeIn"),
                    n.revealContent(i, _e17);
                }
              },
              function () {
                n.setError(i, "{{IMAGE_ERROR}}");
              }
            );
        },
      },
      {
        key: "onRemoveSlide",
        value: function onRemoveSlide(t, e, i) {
          i.panzoom && i.panzoom.destroy(),
            (i.panzoom = void 0),
            (i.imageEl = void 0);
        },
      },
      {
        key: "onChange",
        value: function onChange(t, e, i, n) {
          var _iterator8 = _createForOfIteratorHelper(e.slides),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              var _t27 = _step8.value;
              var _e18 = _t27.panzoom;
              _e18 && _t27.index !== i && _e18.reset(0.35);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        },
      },
      {
        key: "onClose",
        value: function onClose() {
          var t = this.instance,
            e = t.container,
            i = t.getSlide();
          if (!e || !e.parentElement || !i) return;
          var n = i.el,
            s = i.contentEl,
            o = i.panzoom,
            a = i.thumbElSrc;
          if (
            !n ||
            !a ||
            !s ||
            !o ||
            o.isContentLoading ||
            o.state === R.Init ||
            o.state === R.Destroy
          )
            return;
          o.updateMetrics();
          var r = this.getZoomInfo(i);
          if (!r) return;
          (this.instance.state = p.CustomClosing),
            n.classList.remove("is-zooming-in"),
            n.classList.add("is-zooming-out"),
            (s.style.backgroundImage = "url('".concat(a, "')")),
            q(a).then(
              function () {
                n.classList.add("hide-image");
              },
              function () {}
            );
          var l = e.getBoundingClientRect();
          Object.assign(e.style, {
            position: "absolute",
            top: "".concat(window.pageYOffset, "px"),
            left: "".concat(window.pageXOffset, "px"),
            bottom: "auto",
            right: "auto",
            width: "".concat(l.width, "px"),
            height: "".concat(l.height, "px"),
            overflow: "hidden",
          });
          var c = r.x,
            h = r.y,
            d = r.scale,
            u = r.opacity;
          if (u) {
            var _t28 = (function (t, e, i, n) {
              var s = e - t,
                o = n - i;
              return function (e) {
                return i + (((e - t) / s) * o || 0);
              };
            })(o.scale, d, 1, 0);
            o.on("afterTransform", function () {
              s.style.opacity = _t28(o.scale) + "";
            });
          }
          o.on("endAnimation", function () {
            t.destroy();
          }),
            (o.target.a = d),
            (o.target.b = 0),
            (o.target.c = 0),
            (o.target.d = d),
            o.panTo({
              x: c,
              y: h,
              scale: d,
              friction: u ? 0.2 : 0.33,
              ignoreBounds: !0,
            }),
            o.isResting && t.destroy();
        },
      },
      {
        key: "setContent",
        value: function setContent(t, e) {
          var _this15 = this;
          return new Promise(function (o, a) {
            var r, l;
            var c = _this15.instance,
              h = t.el;
            if (!h) return void a();
            c.showLoading(t);
            var d = _this15.optionFor(t, "content");
            if (
              ("string" == typeof d && (d = n(d)),
              (d && s(d)) ||
                ((d = document.createElement("img")),
                d instanceof HTMLImageElement &&
                  ((d.src = e || ""),
                  (d.alt =
                    (null === (r = t.caption) || void 0 === r
                      ? void 0
                      : r.replace(/<[^>]+>/gi, "").substring(0, 1e3)) ||
                    "Image "
                      .concat(t.index + 1, " of ")
                      .concat(
                        null === (l = c.carousel) || void 0 === l
                          ? void 0
                          : l.pages.length
                      )),
                  (d.draggable = !1),
                  t.srcset && d.setAttribute("srcset", t.srcset)),
                t.sizes && d.setAttribute("sizes", t.sizes)),
              d.classList.add("fancybox-image"),
              (t.imageEl = d),
              c.setContent(t, d, !1),
              _this15.option("protected"))
            ) {
              h.addEventListener("contextmenu", function (t) {
                t.preventDefault();
              });
              var _e19 = t.contentEl;
              if (_e19) {
                var _t29 = document.createElement("div");
                F(_t29, "fancybox-protected"), _e19.append(_t29);
              }
            }
            t.panzoom = new Y(
              h,
              i({}, _this15.option("Panzoom") || {}, {
                content: d,
                width: c.optionFor(t, "width", "auto"),
                height: c.optionFor(t, "height", "auto"),
                wheel: function wheel() {
                  var t = c.option("wheel");
                  return ("zoom" === t || "pan" == t) && t;
                },
                click: function click(e, i) {
                  var n, s;
                  if (c.isCompact || c.isClosing()) return !1;
                  if (
                    t.index !==
                    (null === (n = c.getSlide()) || void 0 === n
                      ? void 0
                      : n.index)
                  )
                    return !1;
                  var o =
                    !i ||
                    (i.target &&
                      (null === (s = t.contentEl) || void 0 === s
                        ? void 0
                        : s.contains(i.target)));
                  return c.option(o ? "contentClick" : "backdropClick") || !1;
                },
                dblClick: function dblClick() {
                  return c.isCompact
                    ? "toggleZoom"
                    : c.option("contentDblClick") || !1;
                },
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                transformParent: !0,
                on: {
                  ready: function ready(t) {
                    o(t);
                  },
                  error: function error() {
                    a();
                  },
                  destroy: function destroy() {
                    a();
                  },
                },
              })
            );
          });
        },
      },
      {
        key: "zoomIn",
        value: function zoomIn(t) {
          var _this16 = this;
          return new Promise(function (e, i) {
            var n = t.panzoom,
              s = t.contentEl,
              o = t.el;
            n && n.updateMetrics();
            var a = _this16.getZoomInfo(t);
            if (!(a && o && s && n)) return void i();
            var r = a.x,
              l = a.y,
              c = a.scale,
              h = a.opacity,
              d = function d() {
                t.state !== f.Closing &&
                  (h &&
                    (s.style.opacity =
                      Math.max(Math.min(1, 1 - (1 - n.scale) / (1 - c)), 0) +
                      ""),
                  n.scale >= 1 && n.scale > n.targetScale - 0.1 && e(n));
              },
              u = function u(t) {
                t.scale < 0.99 ||
                  t.scale > 1.01 ||
                  ((s.style.opacity = ""),
                  o.classList.remove("is-zooming-in"),
                  t.off("endAnimation", u),
                  t.off("touchStart", u),
                  t.off("afterTransform", d),
                  e(t));
              };
            n.on("endAnimation", u),
              n.on("touchStart", u),
              n.on("afterTransform", d),
              n.on(["error", "destroy"], function () {
                i();
              }),
              n.panTo({
                x: r,
                y: l,
                scale: c,
                friction: 0,
                ignoreBounds: !0,
              }),
              n.stop("current");
            var p = _this16.instance,
              m = {
                event:
                  "mousemove" === n.panMode
                    ? p.prevMouseMoveEvent || p.options.event
                    : void 0,
              },
              g = _this16.optionFor(t, "initialSize");
            F(o, "is-zooming-in"),
              p.hideLoading(t),
              "full" === g
                ? n.zoomToFull(m)
                : "cover" === g
                ? n.zoomToCover(m)
                : "max" === g
                ? n.zoomToMax(m)
                : n.reset(0.165);
          });
        },
      },
      {
        key: "getZoomInfo",
        value: function getZoomInfo(t) {
          var e = t.el,
            i = t.imageEl,
            n = t.thumbEl,
            s = t.panzoom;
          if (
            !e ||
            !i ||
            !n ||
            !s ||
            o(n) < 3 ||
            !this.optionFor(t, "zoom") ||
            this.instance.state === p.Destroy
          )
            return !1;
          var _n$getBoundingClientR = n.getBoundingClientRect(),
            a = _n$getBoundingClientR.top,
            r = _n$getBoundingClientR.left,
            l = _n$getBoundingClientR.width,
            c = _n$getBoundingClientR.height;
          var _s$contentRect = s.contentRect,
            h = _s$contentRect.top,
            d = _s$contentRect.left,
            u = _s$contentRect.fitWidth,
            f = _s$contentRect.fitHeight;
          if (!(l && c && u && f)) return !1;
          var m = l / u,
            g = s.container.getBoundingClientRect();
          (h += g.top), (d += g.left);
          var b = -1 * (d + 0.5 * u - (r + 0.5 * l)),
            v = -1 * (h + 0.5 * f - (a + 0.5 * c));
          var y = this.option("zoomOpacity") || !1;
          return (
            "auto" === y && (y = Math.abs(l / c - u / f) > 0.1),
            {
              x: b,
              y: v,
              scale: m,
              opacity: y,
            }
          );
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("Carousel.change", this.onChange),
            this.instance.on("Carousel.createSlide", this.onCreateSlide),
            this.instance.on("Carousel.removeSlide", this.onRemoveSlide),
            this.instance.on("close", this.onClose);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("Carousel.change", this.onChange),
            this.instance.off("Carousel.createSlide", this.onCreateSlide),
            this.instance.off("Carousel.removeSlide", this.onRemoveSlide),
            this.instance.off("close", this.onClose);
        },
      },
    ]);
    return Z;
  })(v);
  Object.defineProperty(Z, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      initialSize: "fit",
      Panzoom: {
        maxScale: 1,
      },
      protected: !1,
      zoom: !0,
      zoomOpacity: "auto",
    },
  });
  var V = function V(t) {
      var e =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = new URL(t),
        n = new URLSearchParams(i.search),
        s = new URLSearchParams();
      for (
        var _i27 = 0,
          _arr3 = [].concat(
            _toConsumableArray(n),
            _toConsumableArray(Object.entries(e))
          );
        _i27 < _arr3.length;
        _i27++
      ) {
        var _arr3$_i = _slicedToArray(_arr3[_i27], 2),
          _t30 = _arr3$_i[0],
          _i28 = _arr3$_i[1];
        var _e20 = _i28.toString();
        "t" === _t30
          ? s.set("start", parseInt(_e20).toString())
          : s.set(_t30, _e20);
      }
      var o = s.toString(),
        a = t.match(/#t=((.*)?\d+s)/);
      return a && (o += "#t=".concat(a[1])), o;
    },
    G = {
      ajax: null,
      autoSize: !0,
      preload: !0,
      videoAutoplay: !0,
      videoRatio: 16 / 9,
      videoTpl:
        '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
      videoFormat: "",
      vimeo: {
        byline: 1,
        color: "00adef",
        controls: 1,
        dnt: 1,
        muted: 0,
      },
      youtube: {
        controls: 1,
        enablejsapi: 1,
        nocookie: 1,
        rel: 0,
        fs: 1,
      },
    },
    U = [
      "image",
      "html",
      "ajax",
      "inline",
      "clone",
      "iframe",
      "map",
      "pdf",
      "html5video",
      "youtube",
      "vimeo",
      "video",
    ];
  var K = /*#__PURE__*/ (function (_v4) {
    _inherits(K, _v4);
    var _super6 = _createSuper(K);
    function K() {
      _classCallCheck(this, K);
      return _super6.apply(this, arguments);
    }
    _createClass(K, [
      {
        key: "onInitSlide",
        value: function onInitSlide(t, e, i) {
          this.processType(i);
        },
      },
      {
        key: "onCreateSlide",
        value: function onCreateSlide(t, e, i) {
          this.setContent(i);
        },
      },
      {
        key: "onRemoveSlide",
        value: function onRemoveSlide(t, e, i) {
          i.closeBtnEl && (i.closeBtnEl.remove(), (i.closeBtnEl = void 0)),
            i.xhr && (i.xhr.abort(), (i.xhr = null)),
            i.iframeEl &&
              ((i.iframeEl.onload = i.iframeEl.onerror = null),
              (i.iframeEl.src = "//about:blank"),
              (i.iframeEl = null));
          var n = i.contentEl,
            s = i.placeholderEl;
          if ("inline" === i.type && n && s)
            n.classList.remove("fancybox__content"),
              "none" !== n.style.display && (n.style.display = "none"),
              s.parentNode && s.parentNode.insertBefore(n, s),
              s.remove(),
              (i.placeholderEl = null);
          else
            for (; i.el && i.el.firstChild; ) i.el.removeChild(i.el.firstChild);
        },
      },
      {
        key: "onSelectSlide",
        value: function onSelectSlide(t, e, i) {
          i.state === f.Ready && this.playVideo();
        },
      },
      {
        key: "onUnselectSlide",
        value: function onUnselectSlide(t, e, i) {
          var n, s;
          if ("html5video" === i.type) {
            try {
              null ===
                (s =
                  null === (n = i.el) || void 0 === n
                    ? void 0
                    : n.querySelector("video")) ||
                void 0 === s ||
                s.pause();
            } catch (t) {}
            return;
          }
          var o;
          "vimeo" === i.type
            ? (o = {
                method: "pause",
                value: "true",
              })
            : "youtube" === i.type &&
              (o = {
                event: "command",
                func: "pauseVideo",
              }),
            o &&
              i.iframeEl &&
              i.iframeEl.contentWindow &&
              i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
            i.poller && clearTimeout(i.poller);
        },
      },
      {
        key: "onDone",
        value: function onDone(t, e) {
          t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
        },
      },
      {
        key: "onRefresh",
        value: function onRefresh(t, e) {
          var _this17 = this;
          e.slides.forEach(function (t) {
            t.el && (_this17.setAspectRatio(t), _this17.resizeIframe(t));
          });
        },
      },
      {
        key: "onMessage",
        value: function onMessage(t) {
          try {
            var _e21 = JSON.parse(t.data);
            if ("https://player.vimeo.com" === t.origin) {
              if ("ready" === _e21.event)
                for (
                  var _i29 = 0,
                    _Array$from3 = Array.from(
                      document.getElementsByClassName("fancybox__iframe")
                    );
                  _i29 < _Array$from3.length;
                  _i29++
                ) {
                  var _e22 = _Array$from3[_i29];
                  _e22 instanceof HTMLIFrameElement &&
                    _e22.contentWindow === t.source &&
                    (_e22.dataset.ready = "true");
                }
            } else if (
              t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
              "onReady" === _e21.event
            ) {
              var _t31 = document.getElementById(_e21.id);
              _t31 && (_t31.dataset.ready = "true");
            }
          } catch (t) {}
        },
      },
      {
        key: "loadAjaxContent",
        value: function loadAjaxContent(t) {
          var e = this.instance.optionFor(t, "src") || "";
          this.instance.showLoading(t);
          var i = this.instance,
            n = new XMLHttpRequest();
          i.showLoading(t),
            (n.onreadystatechange = function () {
              n.readyState === XMLHttpRequest.DONE &&
                i.state === p.Ready &&
                (i.hideLoading(t),
                200 === n.status
                  ? i.setContent(t, n.responseText)
                  : i.setError(
                      t,
                      404 === n.status
                        ? "{{AJAX_NOT_FOUND}}"
                        : "{{AJAX_FORBIDDEN}}"
                    ));
            });
          var s = t.ajax || null;
          n.open(s ? "POST" : "GET", e + ""),
            n.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            ),
            n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            n.send(s),
            (t.xhr = n);
        },
      },
      {
        key: "setInlineContent",
        value: function setInlineContent(t) {
          var e = null;
          if (s(t.src)) e = t.src;
          else if ("string" == typeof t.src) {
            var _i30 = t.src.split("#", 2).pop();
            e = _i30 ? document.getElementById(_i30) : null;
          }
          if (e) {
            if ("clone" === t.type || e.closest(".fancybox__slide")) {
              e = e.cloneNode(!0);
              var _i31 = e.dataset.animationName;
              _i31 &&
                (e.classList.remove(_i31), delete e.dataset.animationName);
              var _n6 = e.getAttribute("id");
              (_n6 = _n6
                ? "".concat(_n6, "--clone")
                : "clone-".concat(this.instance.id, "-").concat(t.index)),
                e.setAttribute("id", _n6);
            } else if (e.parentNode) {
              var _i32 = document.createElement("div");
              _i32.classList.add("fancybox-placeholder"),
                e.parentNode.insertBefore(_i32, e),
                (t.placeholderEl = _i32);
            }
            this.instance.setContent(t, e);
          } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
        },
      },
      {
        key: "setIframeContent",
        value: function setIframeContent(t) {
          var _this18 = this;
          var e = t.src,
            i = t.el;
          if (!e || "string" != typeof e || !i) return;
          var n = this.instance,
            s = document.createElement("iframe");
          (s.className = "fancybox__iframe"),
            s.setAttribute(
              "id",
              "fancybox__iframe_".concat(n.id, "_").concat(t.index)
            ),
            s.setAttribute("allow", "autoplay; fullscreen"),
            s.setAttribute("scrolling", "auto"),
            (s.onerror = function () {
              n.setError(t, "{{IFRAME_ERROR}}");
            }),
            (t.iframeEl = s);
          var o = this.optionFor(t, "preload");
          if ((i.classList.add("is-loading"), "iframe" !== t.type || !1 === o))
            return (
              s.setAttribute("src", t.src + ""),
              this.resizeIframe(t),
              void n.setContent(t, s)
            );
          n.showLoading(t),
            (s.onload = function () {
              if (!s.src.length) return;
              var e = "true" !== s.dataset.ready;
              (s.dataset.ready = "true"),
                _this18.resizeIframe(t),
                e ? n.revealContent(t) : n.hideLoading(t);
            }),
            s.setAttribute("src", e),
            n.setContent(t, s, !1);
        },
      },
      {
        key: "resizeIframe",
        value: function resizeIframe(t) {
          var e = t.iframeEl,
            i = null == e ? void 0 : e.parentElement;
          if (!e || !i) return;
          var n = t.autoSize,
            s = t.width || 0,
            o = t.height || 0;
          s && o && (n = !1);
          var a = i && i.style;
          if (!1 !== t.preload && !1 !== n && a)
            try {
              var _t32 = window.getComputedStyle(i),
                _n7 =
                  parseFloat(_t32.paddingLeft) + parseFloat(_t32.paddingRight),
                _r3 =
                  parseFloat(_t32.paddingTop) + parseFloat(_t32.paddingBottom),
                _l2 = e.contentWindow;
              if (_l2) {
                var _t33 = _l2.document,
                  _e23 = _t33.getElementsByTagName("html")[0],
                  _i33 = _t33.body;
                (a.width = ""),
                  (_i33.style.overflow = "hidden"),
                  (s = s || _e23.scrollWidth + _n7),
                  (a.width = "".concat(s, "px")),
                  (_i33.style.overflow = ""),
                  (a.flex = "0 0 auto"),
                  (a.height = "".concat(_i33.scrollHeight, "px")),
                  (o = _e23.scrollHeight + _r3);
              }
            } catch (t) {}
          if (s || o) {
            var _t34 = {
              flex: "0 1 auto",
              width: "",
              height: "",
            };
            s && (_t34.width = "".concat(s, "px")),
              o && (_t34.height = "".concat(o, "px")),
              Object.assign(a, _t34);
          }
        },
      },
      {
        key: "playVideo",
        value: function playVideo() {
          var t = this.instance.getSlide();
          if (!t) return;
          var e = t.el;
          if (!e || !e.offsetParent) return;
          if (!this.optionFor(t, "videoAutoplay")) return;
          if ("html5video" === t.type)
            try {
              var _t35 = e.querySelector("video");
              if (_t35) {
                var _e24 = _t35.play();
                void 0 !== _e24 &&
                  _e24
                    .then(function () {})
                    ["catch"](function (e) {
                      (_t35.muted = !0), _t35.play();
                    });
              }
            } catch (t) {}
          if ("youtube" !== t.type && "vimeo" !== t.type) return;
          var i = function i() {
            if (t.iframeEl && t.iframeEl.contentWindow) {
              var _e25;
              if ("true" === t.iframeEl.dataset.ready)
                return (
                  (_e25 =
                    "youtube" === t.type
                      ? {
                          event: "command",
                          func: "playVideo",
                        }
                      : {
                          method: "play",
                          value: "true",
                        }),
                  _e25 &&
                    t.iframeEl.contentWindow.postMessage(
                      JSON.stringify(_e25),
                      "*"
                    ),
                  void (t.poller = void 0)
                );
              "youtube" === t.type &&
                ((_e25 = {
                  event: "listening",
                  id: t.iframeEl.getAttribute("id"),
                }),
                t.iframeEl.contentWindow.postMessage(
                  JSON.stringify(_e25),
                  "*"
                ));
            }
            t.poller = setTimeout(i, 250);
          };
          i();
        },
      },
      {
        key: "processType",
        value: function processType(t) {
          if (t.html)
            return (t.type = "html"), (t.src = t.html), void (t.html = "");
          var e = this.instance.optionFor(t, "src", "");
          if (!e || "string" != typeof e) return;
          var i = t.type,
            n = null;
          if (
            (n = e.match(
              /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
            ))
          ) {
            var _s6 = this.optionFor(t, "youtube"),
              _o4 = _s6.nocookie,
              _a = (function (t, e) {
                var i = {};
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) &&
                    e.indexOf(n) < 0 &&
                    (i[n] = t[n]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var s = 0;
                  for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
                    e.indexOf(n[s]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
                      (i[n[s]] = t[n[s]]);
                }
                return i;
              })(_s6, ["nocookie"]),
              _r4 = "www.youtube".concat(_o4 ? "-nocookie" : "", ".com"),
              _l3 = V(e, _a),
              _c3 = encodeURIComponent(n[2]);
            (t.videoId = _c3),
              (t.src = "https://"
                .concat(_r4, "/embed/")
                .concat(_c3, "?")
                .concat(_l3)),
              (t.thumbSrc =
                t.thumbSrc ||
                "https://i.ytimg.com/vi/".concat(_c3, "/mqdefault.jpg")),
              (i = "youtube");
          } else if (
            (n = e.match(
              /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
            ))
          ) {
            var _s7 = V(e, this.optionFor(t, "vimeo")),
              _o5 = encodeURIComponent(n[1]),
              _a2 = n[4] || "";
            (t.videoId = _o5),
              (t.src = "https://player.vimeo.com/video/"
                .concat(_o5, "?")
                .concat(_a2 ? "h=".concat(_a2).concat(_s7 ? "&" : "") : "")
                .concat(_s7)),
              (i = "vimeo");
          }
          if (!i && t.triggerEl) {
            var _e26 = t.triggerEl.dataset.type;
            U.includes(_e26) && (i = _e26);
          }
          i ||
            ("string" == typeof e &&
              ("#" === e.charAt(0)
                ? (i = "inline")
                : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((i = "html5video"),
                  (t.videoFormat =
                    t.videoFormat ||
                    "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
                : e.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (i = "image")
                : e.match(/\.(pdf)((\?|#).*)?$/i)
                ? (i = "pdf")
                : (n = e.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
                  ))
                ? ((t.src = "https://maps.google."
                    .concat(n[1], "/?ll=")
                    .concat(
                      (n[2]
                        ? n[2] +
                          "&z=" +
                          Math.floor(parseFloat(n[3])) +
                          (n[4] ? n[4].replace(/^\//, "&") : "")
                        : n[4] + ""
                      ).replace(/\?/, "&"),
                      "&output="
                    )
                    .concat(
                      n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
                    )),
                  (i = "map"))
                : (n = e.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
                  )) &&
                  ((t.src = "https://maps.google."
                    .concat(n[1], "/maps?q=")
                    .concat(
                      n[2].replace("query=", "q=").replace("api=1", ""),
                      "&output=embed"
                    )),
                  (i = "map")))),
            (i = i || this.instance.option("defaultType")),
            (t.type = i),
            "image" === i && (t.thumbSrc = t.thumbSrc || t.src);
        },
      },
      {
        key: "setContent",
        value: function setContent(t) {
          var e = this.instance.optionFor(t, "src") || "";
          if (t && t.type && e) {
            switch (t.type) {
              case "html":
                this.instance.setContent(t, e);
                break;
              case "html5video":
                var _i34 = this.option("videoTpl");
                _i34 &&
                  this.instance.setContent(
                    t,
                    _i34
                      .replace(/\{\{src\}\}/gi, e + "")
                      .replace(
                        /\{\{format\}\}/gi,
                        this.optionFor(t, "videoFormat") || ""
                      )
                      .replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || "")
                  );
                break;
              case "inline":
              case "clone":
                this.setInlineContent(t);
                break;
              case "ajax":
                this.loadAjaxContent(t);
                break;
              case "pdf":
              case "map":
              case "youtube":
              case "vimeo":
                t.preload = !1;
              case "iframe":
                this.setIframeContent(t);
            }
            this.setAspectRatio(t);
          }
        },
      },
      {
        key: "setAspectRatio",
        value: function setAspectRatio(t) {
          var e;
          var i = t.contentEl,
            n = this.optionFor(t, "videoRatio"),
            s =
              null === (e = t.el) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
          if (
            !(
              i &&
              s &&
              n &&
              1 !== n &&
              t.type &&
              ["video", "youtube", "vimeo", "html5video"].includes(t.type)
            )
          )
            return;
          var o = s.width,
            a = s.height;
          (i.style.aspectRatio = n + ""),
            (i.style.width = o / a > n ? "auto" : ""),
            (i.style.height = o / a > n ? "" : "auto");
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("Carousel.initSlide", this.onInitSlide),
            this.instance.on("Carousel.createSlide", this.onCreateSlide),
            this.instance.on("Carousel.removeSlide", this.onRemoveSlide),
            this.instance.on("Carousel.selectSlide", this.onSelectSlide),
            this.instance.on("Carousel.unselectSlide", this.onUnselectSlide),
            this.instance.on("Carousel.Panzoom.refresh", this.onRefresh),
            this.instance.on("done", this.onDone),
            window.addEventListener("message", this.onMessage);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("Carousel.initSlide", this.onInitSlide),
            this.instance.off("Carousel.createSlide", this.onCreateSlide),
            this.instance.off("Carousel.removeSlide", this.onRemoveSlide),
            this.instance.off("Carousel.selectSlide", this.onSelectSlide),
            this.instance.off("Carousel.unselectSlide", this.onUnselectSlide),
            this.instance.off("Carousel.Panzoom.refresh", this.onRefresh),
            this.instance.off("done", this.onDone),
            window.removeEventListener("message", this.onMessage);
        },
      },
    ]);
    return K;
  })(v);
  Object.defineProperty(K, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: G,
  });
  var J = /*#__PURE__*/ (function (_v5) {
    _inherits(J, _v5);
    var _super7 = _createSuper(J);
    function J() {
      var _this19;
      _classCallCheck(this, J);
      (_this19 = _super7.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this19), "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "ready",
        }),
        Object.defineProperty(_assertThisInitialized(_this19), "inHover", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this19), "timer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this19), "progressBar", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this19;
    }
    _createClass(J, [
      {
        key: "isActive",
        get: function get() {
          return "ready" !== this.state;
        },
      },
      {
        key: "onReady",
        value: function onReady(t) {
          this.option("autoStart") &&
            (t.isInfinite || t.page < t.pages.length - 1) &&
            this.start();
        },
      },
      {
        key: "onChange",
        value: function onChange() {
          var t;
          (null === (t = this.instance.panzoom) || void 0 === t
            ? void 0
            : t.isResting) || (this.removeProgressBar(), this.pause());
        },
      },
      {
        key: "onSettle",
        value: function onSettle() {
          this.resume();
        },
      },
      {
        key: "onVisibilityChange",
        value: function onVisibilityChange() {
          "visible" === document.visibilityState ? this.resume() : this.pause();
        },
      },
      {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          (this.inHover = !0), this.pause();
        },
      },
      {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          var t;
          (this.inHover = !1),
            (null === (t = this.instance.panzoom) || void 0 === t
              ? void 0
              : t.isResting) && this.resume();
        },
      },
      {
        key: "onTimerEnd",
        value: function onTimerEnd() {
          "play" === this.state &&
            (this.instance.isInfinite ||
            this.instance.page !== this.instance.pages.length - 1
              ? this.instance.slideNext()
              : this.instance.slideTo(0));
        },
      },
      {
        key: "removeProgressBar",
        value: function removeProgressBar() {
          this.progressBar &&
            (this.progressBar.remove(), (this.progressBar = null));
        },
      },
      {
        key: "createProgressBar",
        value: function createProgressBar() {
          var t;
          if (!this.option("showProgress")) return null;
          this.removeProgressBar();
          var e = this.instance,
            i =
              (null === (t = e.pages[e.page]) || void 0 === t
                ? void 0
                : t.slides) || [];
          var n = this.option("progressParentEl");
          if ((n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n))
            return null;
          var s = document.createElement("div");
          return (
            F(s, "f-progress"),
            n.prepend(s),
            (this.progressBar = s),
            s.offsetHeight,
            s
          );
        },
      },
      {
        key: "set",
        value: function set() {
          var _this20 = this;
          if (this.instance.pages.length < 2) return;
          if (this.progressBar) return;
          var t = this.option("timeout");
          (this.state = "play"), F(this.instance.container, "has-autoplay");
          var e = this.createProgressBar();
          e &&
            ((e.style.transitionDuration = "".concat(t, "ms")),
            (e.style.transform = "scaleX(1)")),
            (this.timer = setTimeout(function () {
              (_this20.timer = null), _this20.inHover || _this20.onTimerEnd();
            }, t)),
            this.emit("set");
        },
      },
      {
        key: "clear",
        value: function clear() {
          this.timer && (clearTimeout(this.timer), (this.timer = null)),
            this.removeProgressBar();
        },
      },
      {
        key: "start",
        value: function start() {
          if ((this.set(), this.option("pauseOnHover"))) {
            var _t36 = this.instance.container;
            _t36.addEventListener("mouseenter", this.onMouseEnter, !1),
              _t36.addEventListener("mouseleave", this.onMouseLeave, !1);
          }
          document.addEventListener(
            "visibilitychange",
            this.onVisibilityChange,
            !1
          );
        },
      },
      {
        key: "stop",
        value: function stop() {
          var t = this.instance.container;
          this.clear(),
            (this.state = "ready"),
            t.removeEventListener("mouseenter", this.onMouseEnter, !1),
            t.removeEventListener("mouseleave", this.onMouseLeave, !1),
            document.removeEventListener(
              "visibilitychange",
              this.onVisibilityChange,
              !1
            ),
            D(t, "has-autoplay"),
            this.emit("stop");
        },
      },
      {
        key: "pause",
        value: function pause() {
          "play" === this.state &&
            ((this.state = "pause"), this.clear(), this.emit("pause"));
        },
      },
      {
        key: "resume",
        value: function resume() {
          var t = this.instance;
          if (t.isInfinite || t.page !== t.pages.length - 1) {
            if ("play" !== this.state) {
              if ("pause" === this.state && !this.inHover) {
                var _t37 = new Event("resume", {
                  bubbles: !0,
                  cancelable: !0,
                });
                this.emit("resume", event), _t37.defaultPrevented || this.set();
              }
            } else this.set();
          } else this.stop();
        },
      },
      {
        key: "toggle",
        value: function toggle() {
          "play" === this.state || "pause" === this.state
            ? this.stop()
            : this.set();
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("ready", this.onReady),
            this.instance.on("Panzoom.startAnimation", this.onChange),
            this.instance.on("Panzoom.endAnimation", this.onSettle),
            this.instance.on("Panzoom.touchMove", this.onChange);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("ready", this.onReady),
            this.instance.off("Panzoom.startAnimation", this.onChange),
            this.instance.off("Panzoom.endAnimation", this.onSettle),
            this.instance.off("Panzoom.touchMove", this.onChange),
            this.stop();
        },
      },
    ]);
    return J;
  })(v);
  Object.defineProperty(J, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      autoStart: !0,
      pauseOnHover: !0,
      progressParentEl: null,
      showProgress: !0,
      timeout: 3e3,
    },
  });
  var Q = /*#__PURE__*/ (function (_v6) {
    _inherits(Q, _v6);
    var _super8 = _createSuper(Q);
    function Q() {
      var _this21;
      _classCallCheck(this, Q);
      (_this21 = _super8.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this21), "ref", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this21;
    }
    _createClass(Q, [
      {
        key: "onPrepare",
        value: function onPrepare(t) {
          var e = t.carousel;
          if (!e) return;
          var n = t.container;
          n &&
            ((e.options.Autoplay = i(this.option("Autoplay") || {}, {
              pauseOnHover: !1,
              autoStart: !1,
              timeout: this.option("timeout"),
              progressParentEl: function progressParentEl() {
                return (
                  n.querySelector(
                    ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
                  ) || n
                );
              },
              on: {
                set: function set(e) {
                  var i;
                  n.classList.add("has-slideshow"),
                    (null === (i = t.getSlide()) || void 0 === i
                      ? void 0
                      : i.state) !== f.Ready && e.pause();
                },
                stop: function stop() {
                  n.classList.remove("has-slideshow"),
                    t.isCompact || t.endIdle();
                },
                resume: function resume(e, i) {
                  var n, s, o;
                  !i ||
                    !i.cancelable ||
                    ((null === (n = t.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) === f.Ready &&
                      (null ===
                        (o =
                          null === (s = t.carousel) || void 0 === s
                            ? void 0
                            : s.panzoom) || void 0 === o
                        ? void 0
                        : o.isResting)) ||
                    i.preventDefault();
                },
              },
            })),
            e.attachPlugins({
              Autoplay: J,
            }),
            (this.ref = e.plugins.Autoplay));
        },
      },
      {
        key: "onReady",
        value: function onReady(t) {
          var e = t.carousel,
            i = this.ref;
          e &&
            i &&
            this.option("playOnStart") &&
            (e.isInfinite || e.page < e.pages.length - 1) &&
            i.start();
        },
      },
      {
        key: "onDone",
        value: function onDone(t, e) {
          var i = this.ref;
          if (!i) return;
          var n = e.panzoom;
          n &&
            n.on("startAnimation", function () {
              t.isCurrentSlide(e) && i.stop();
            }),
            t.isCurrentSlide(e) && i.resume();
        },
      },
      {
        key: "onKeydown",
        value: function onKeydown(t, e) {
          var i;
          var n = this.ref;
          n &&
            e === this.option("key") &&
            "BUTTON" !==
              (null === (i = document.activeElement) || void 0 === i
                ? void 0
                : i.nodeName) &&
            n.toggle();
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("Carousel.init", this.onPrepare),
            this.instance.on("Carousel.ready", this.onReady),
            this.instance.on("done", this.onDone),
            this.instance.on("keydown", this.onKeydown);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("Carousel.init", this.onPrepare),
            this.instance.off("Carousel.ready", this.onReady),
            this.instance.off("done", this.onDone),
            this.instance.off("keydown", this.onKeydown);
        },
      },
    ]);
    return Q;
  })(v);
  Object.defineProperty(Q, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      key: " ",
      playOnStart: !1,
      timeout: 3e3,
    },
  });
  var tt = {
    classes: {
      container: "f-thumbs f-carousel__thumbs",
      viewport: "f-thumbs__viewport",
      track: "f-thumbs__track",
      slide: "f-thumbs__slide",
      isResting: "is-resting",
      isSelected: "is-selected",
      isLoading: "is-loading",
      hasThumbs: "has-thumbs",
    },
    minCount: 2,
    parentEl: null,
    thumbTpl:
      '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern",
  };
  var et;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Hidden = 2)] = "Hidden"),
      (t[(t.Disabled = 3)] = "Disabled");
  })(et || (et = {}));
  var it = /*#__PURE__*/ (function (_v7) {
    _inherits(it, _v7);
    var _super9 = _createSuper(it);
    function it() {
      var _this22;
      _classCallCheck(this, it);
      (_this22 = _super9.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this22), "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "modern",
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "carousel", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "panzoom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "thumbWidth", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(
          _assertThisInitialized(_this22),
          "thumbClipWidth",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this22), "thumbHeight", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "thumbGap", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(
          _assertThisInitialized(_this22),
          "thumbExtraGap",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this22), "shouldCenter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !0,
        }),
        Object.defineProperty(_assertThisInitialized(_this22), "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et.Init,
        });
      return _this22;
    }
    _createClass(it, [
      {
        key: "formatThumb",
        value: function formatThumb(t, e) {
          return this.instance.localize(e, [
            ["%i", t.index],
            ["%d", t.index + 1],
            [
              "%s",
              t.thumbSrc ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            ],
          ]);
        },
      },
      {
        key: "getSlides",
        value: function getSlides() {
          var t = [],
            e = this.option("thumbTpl") || "";
          if (e) {
            var _iterator9 = _createForOfIteratorHelper(
                this.instance.slides || []
              ),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                var _i35 = _step9.value;
                var _n8 = "";
                _i35.type &&
                  ((_n8 = "for-".concat(_i35.type)),
                  _i35.type &&
                    ["video", "youtube", "vimeo", "html5video"].includes(
                      _i35.type
                    ) &&
                    (_n8 += " for-video")),
                  t.push({
                    html: this.formatThumb(_i35, e),
                    customClass: _n8,
                  });
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
          return t;
        },
      },
      {
        key: "onInitSlide",
        value: function onInitSlide(t, e) {
          var i = e.el;
          i &&
            ((e.thumbSrc = i.dataset.thumbSrc || e.thumbSrc || ""),
            (e.thumbClipWidth =
              parseFloat(i.dataset.thumbClipWidth || "") ||
              e.thumbClipWidth ||
              0),
            (e.thumbHeight =
              parseFloat(i.dataset.thumbHeight || "") || e.thumbHeight || 0));
        },
      },
      {
        key: "onInitSlides",
        value: function onInitSlides() {
          this.state === et.Init && this.build();
        },
      },
      {
        key: "onRefreshM",
        value: function onRefreshM() {
          this.refreshModern();
        },
      },
      {
        key: "onChangeM",
        value: function onChangeM() {
          "modern" === this.type &&
            ((this.shouldCenter = !0), this.centerModern());
        },
      },
      {
        key: "onClickModern",
        value: function onClickModern(t) {
          t.preventDefault(), t.stopPropagation();
          var e = this.instance,
            i = e.page,
            n = function n(t) {
              if (t) {
                var _e27 = t.closest("[data-carousel-index]");
                if (_e27)
                  return parseInt(_e27.dataset.carouselIndex || "", 10) || 0;
              }
              return -1;
            },
            s = function s(t, e) {
              var i = document.elementFromPoint(t, e);
              return i ? n(i) : -1;
            };
          var o = n(t.target);
          o < 0 &&
            ((o = s(t.clientX + this.thumbGap, t.clientY)),
            o === i && (o = i - 1)),
            o < 0 &&
              ((o = s(t.clientX - this.thumbGap, t.clientY)),
              o === i && (o = i + 1)),
            o < 0 &&
              (o = (function (e) {
                var n = s(t.clientX - e, t.clientY),
                  a = s(t.clientX + e, t.clientY);
                return (
                  o < 0 && n === i && (o = i + 1),
                  o < 0 && a === i && (o = i - 1),
                  o
                );
              })(this.thumbExtraGap)),
            o === i
              ? this.centerModern()
              : o > -1 && o < e.pages.length && e.slideTo(o);
        },
      },
      {
        key: "onTransformM",
        value: function onTransformM() {
          if ("modern" !== this.type) return;
          var t = this.instance,
            e = this.container,
            i = this.track,
            n = t.panzoom;
          if (!(e && i && n && this.panzoom)) return;
          M(e, this.cn("isResting"), n.state !== R.Init && n.isResting);
          var s = this.thumbGap,
            o = this.thumbExtraGap,
            a = this.thumbClipWidth;
          var r = 0,
            l = 0,
            c = 0;
          var _iterator10 = _createForOfIteratorHelper(t.slides),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
              var _e28 = _step10.value;
              var _i36 = _e28.index,
                _n9 = _e28.thumbSlideEl;
              if (!_n9) continue;
              M(_n9, this.cn("isSelected"), _i36 === t.page),
                (l = 1 - Math.abs(t.getProgress(_i36))),
                _n9.style.setProperty("--progress", l ? l + "" : "");
              var _h3 = 0.5 * ((_e28.thumbWidth || 0) - a);
              (r += s),
                (r += _h3),
                l && (r -= l * (_h3 + o)),
                _n9.style.setProperty("--shift", r - s + ""),
                (r += _h3),
                l && (r -= l * (_h3 + o)),
                (r -= s),
                0 === _i36 && (c = o * l);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          i &&
            (i.style.setProperty("--left", c + ""),
            i.style.setProperty("--width", r + c + s + o * l + "")),
            this.shouldCenter && this.centerModern();
        },
      },
      {
        key: "buildClassic",
        value: function buildClassic() {
          var _this23 = this;
          var t = this.container,
            e = this.track,
            n = this.getSlides();
          if (!t || !e || !n) return;
          var s = new this.instance.constructor(
            t,
            i(
              {
                track: e,
                infinite: !1,
                center: !0,
                fill: !0,
                dragFree: !0,
                slidesPerPage: 1,
                transition: !1,
                Dots: !1,
                Navigation: !1,
                Sync: {},
                classes: {
                  container: "f-thumbs",
                  viewport: "f-thumbs__viewport",
                  track: "f-thumbs__track",
                  slide: "f-thumbs__slide",
                },
              },
              this.option("Carousel") || {},
              {
                Sync: {
                  target: this.instance,
                },
                slides: n,
              }
            )
          );
          (this.carousel = s),
            (this.track = e),
            s.on("ready", function () {
              _this23.emit("ready");
            });
        },
      },
      {
        key: "buildModern",
        value: function buildModern() {
          var _this24 = this;
          if ("modern" !== this.type) return;
          var t = this.container,
            e = this.track,
            i = this.instance,
            s = this.option("thumbTpl") || "";
          if (!t || !e || !s) return;
          F(t, "is-horizontal"), this.updateModern();
          var _iterator11 = _createForOfIteratorHelper(i.slides || []),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
              var _t38 = _step11.value;
              var _i37 = document.createElement("div");
              if ((F(_i37, this.cn("slide")), _t38.type)) {
                var _e29 = "for-".concat(_t38.type);
                ["video", "youtube", "vimeo", "html5video"].includes(
                  _t38.type
                ) && (_e29 += " for-video"),
                  F(_i37, _e29);
              }
              _i37.appendChild(n(this.formatThumb(_t38, s))),
                (_t38.thumbSlideEl = _i37),
                e.appendChild(_i37),
                this.resizeModernSlide(_t38);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
          var o = new i.constructor.Panzoom(t, {
            content: e,
            lockAxis: "x",
            zoom: !1,
            panOnlyZoomed: !1,
            bounds: function bounds() {
              var t = 0,
                e = 0,
                n = i.slides[0],
                s = i.slides[i.slides.length - 1],
                o = i.slides[i.page];
              return (
                n &&
                  s &&
                  o &&
                  ((e = -1 * _this24.getModernThumbPos(0)),
                  0 !== i.page && (e += 0.5 * (n.thumbWidth || 0)),
                  (t = -1 * _this24.getModernThumbPos(i.slides.length - 1)),
                  i.page !== i.slides.length - 1 &&
                    (t +=
                      (s.thumbWidth || 0) -
                      (o.thumbWidth || 0) -
                      0.5 * (s.thumbWidth || 0))),
                {
                  x: {
                    min: t,
                    max: e,
                  },
                  y: {
                    min: 0,
                    max: 0,
                  },
                }
              );
            },
          });
          o.on("touchStart", function (t, e) {
            _this24.shouldCenter = !1;
          }),
            o.on("click", function (t, e) {
              return _this24.onClickModern(e);
            }),
            o.on("ready", function () {
              _this24.centerModern(), _this24.emit("ready");
            }),
            o.on(["afterTransform", "refresh"], function (t) {
              _this24.lazyLoadModern();
            }),
            (this.panzoom = o),
            this.refreshModern();
        },
      },
      {
        key: "updateModern",
        value: function updateModern() {
          if ("modern" !== this.type) return;
          var t = this.container;
          t &&
            ((this.thumbGap =
              parseFloat(
                getComputedStyle(t).getPropertyValue("--f-thumb-gap")
              ) || 0),
            (this.thumbExtraGap =
              parseFloat(
                getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap")
              ) || 0),
            (this.thumbWidth =
              parseFloat(
                getComputedStyle(t).getPropertyValue("--f-thumb-width")
              ) || 40),
            (this.thumbClipWidth =
              parseFloat(
                getComputedStyle(t).getPropertyValue("--f-thumb-clip-width")
              ) || 40),
            (this.thumbHeight =
              parseFloat(
                getComputedStyle(t).getPropertyValue("--f-thumb-height")
              ) || 40));
        },
      },
      {
        key: "refreshModern",
        value: function refreshModern() {
          var t;
          if ("modern" === this.type) {
            this.updateModern();
            var _iterator12 = _createForOfIteratorHelper(
                this.instance.slides || []
              ),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                var _t39 = _step12.value;
                this.resizeModernSlide(_t39);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
            this.onTransformM(),
              null === (t = this.panzoom) ||
                void 0 === t ||
                t.updateMetrics(!0),
              this.centerModern(0);
          }
        },
      },
      {
        key: "centerModern",
        value: function centerModern(t) {
          var e = this.instance,
            i = this.container,
            n = this.panzoom;
          if (!i || !n || n.state === R.Init) return;
          var s = e.page;
          var o = this.getModernThumbPos(s),
            a = o;
          for (var _t40 = e.page - 3; _t40 < e.page + 3; _t40++) {
            if (_t40 < 0 || _t40 > e.pages.length - 1 || _t40 === e.page)
              continue;
            var _i38 = 1 - Math.abs(e.getProgress(_t40));
            _i38 > 0 &&
              _i38 < 1 &&
              (a += _i38 * (this.getModernThumbPos(_t40) - o));
          }
          var r = 100;
          void 0 === t &&
            ((t = 0.2),
            e.inTransition.size > 0 && (t = 0.12),
            Math.abs(-1 * n.current.e - a) > n.containerRect.width &&
              ((t = 0.5), (r = 0))),
            (n.options.maxVelocity = r),
            n.applyChange({
              panX: E(-1 * a - n.target.e, 1e3),
              friction: null === e.prevPage ? 0 : t,
            });
        },
      },
      {
        key: "lazyLoadModern",
        value: function lazyLoadModern() {
          var _this25 = this;
          var t = this.instance,
            e = this.panzoom;
          if (!e) return;
          var i = -1 * e.current.e || 0;
          var s = this.getModernThumbPos(t.page);
          if (e.state !== R.Init || 0 === s) {
            var _iterator13 = _createForOfIteratorHelper(t.slides || []),
              _step13;
            try {
              var _loop2 = function _loop2() {
                var s = _step13.value;
                var t = s.thumbSlideEl;
                if (!t) return "continue";
                var o = t.querySelector("img[data-lazy-src]"),
                  a = s.index,
                  r = _this25.getModernThumbPos(a),
                  l = i - 0.5 * e.containerRect.innerWidth,
                  c = l + e.containerRect.innerWidth;
                if (!o || r < l || r > c) return "continue";
                var d = o.dataset.lazySrc;
                if (!d || !d.length) return "continue";
                if ((delete o.dataset.lazySrc, (o.src = d), o.complete))
                  return "continue";
                F(t, _this25.cn("isLoading"));
                var u = n(h);
                t.appendChild(u),
                  o.addEventListener(
                    "load",
                    function () {
                      t.offsetParent &&
                        (t.classList.remove(_this25.cn("isLoading")),
                        u.remove());
                    },
                    !1
                  );
              };
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                var _ret = _loop2();
                if (_ret === "continue") continue;
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        },
      },
      {
        key: "resizeModernSlide",
        value: function resizeModernSlide(t) {
          if ("modern" !== this.type) return;
          if (!t.thumbSlideEl) return;
          var e =
            t.thumbClipWidth && t.thumbHeight
              ? Math.round(
                  this.thumbHeight * (t.thumbClipWidth / t.thumbHeight)
                )
              : this.thumbWidth;
          t.thumbWidth = e;
        },
      },
      {
        key: "getModernThumbPos",
        value: function getModernThumbPos(t) {
          var e = this.instance.slides[t],
            i = this.panzoom;
          if (!i || !i.contentRect.fitWidth) return 0;
          var n = i.containerRect.innerWidth,
            s = i.contentRect.width;
          2 === this.instance.slides.length &&
            ((t -= 1), (s = 2 * this.thumbClipWidth));
          var o =
            t * (this.thumbClipWidth + this.thumbGap) +
            this.thumbExtraGap +
            0.5 * (e.thumbWidth || 0);
          return (o -= s > n ? 0.5 * n : 0.5 * s), E(o || 0, 1);
        },
      },
      {
        key: "build",
        value: function build() {
          var t = this.instance,
            e = t.container,
            i = this.option("minCount") || 0;
          if (i) {
            var _e30 = 0;
            var _iterator14 = _createForOfIteratorHelper(t.slides || []),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                var _i39 = _step14.value;
                _i39.thumbSrc && _e30++;
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
            if (_e30 < i)
              return this.cleanup(), void (this.state = et.Disabled);
          }
          var n = this.option("type");
          if (["modern", "classic"].indexOf(n) < 0)
            return void (this.state = et.Disabled);
          this.type = n;
          var s = document.createElement("div");
          F(s, this.cn("container")), F(s, "is-".concat(n));
          var o = this.option("parentEl");
          o ? o.appendChild(s) : e.after(s),
            (this.container = s),
            F(e, this.cn("hasThumbs"));
          var a = document.createElement("div");
          F(a, this.cn("track")),
            s.appendChild(a),
            (this.track = a),
            "classic" === n ? this.buildClassic() : this.buildModern(),
            (this.state = et.Ready),
            s.addEventListener("click", function (e) {
              setTimeout(function () {
                var e;
                null ===
                  (e =
                    null == s
                      ? void 0
                      : s.querySelector(
                          '[data-carousel-index="'.concat(t.page, '"]')
                        )) ||
                  void 0 === e ||
                  e.focus();
              }, 100);
            });
        },
      },
      {
        key: "cleanup",
        value: function cleanup() {
          this.carousel && this.carousel.destroy(),
            (this.carousel = null),
            this.panzoom && this.panzoom.destroy(),
            (this.panzoom = null),
            this.container && this.container.remove(),
            (this.container = null),
            (this.track = null),
            (this.state = et.Init),
            D(this.instance.container, this.cn("hasThumbs"));
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("initSlide", this.onInitSlide),
            this.instance.on("initSlides", this.onInitSlides),
            this.instance.on("Panzoom.afterTransform", this.onTransformM),
            this.instance.on("Panzoom.refresh", this.onRefreshM),
            this.instance.on("change", this.onChangeM);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("initSlide", this.onInitSlide),
            this.instance.off("initSlides", this.onInitSlides),
            this.instance.off("Panzoom.afterTransform", this.onTransformM),
            this.instance.off("Panzoom.refresh", this.onRefreshM),
            this.instance.off("change", this.onChangeM),
            this.cleanup();
        },
      },
    ]);
    return it;
  })(v);
  Object.defineProperty(it, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: tt,
  });
  var nt = Object.assign(Object.assign({}, tt), {
    key: "t",
    showOnStart: !0,
    parentEl: null,
  });
  var st = /*#__PURE__*/ (function (_v8) {
    _inherits(st, _v8);
    var _super10 = _createSuper(st);
    function st() {
      var _this26;
      _classCallCheck(this, st);
      (_this26 = _super10.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this26), "ref", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this26), "hidden", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        });
      return _this26;
    }
    _createClass(st, [
      {
        key: "isEnabled",
        get: function get() {
          var t = this.ref;
          return t && t.state !== et.Disabled;
        },
      },
      {
        key: "isHidden",
        get: function get() {
          return this.hidden;
        },
      },
      {
        key: "onInit",
        value: function onInit() {
          var _this27 = this;
          var t = this.instance,
            e = t.carousel;
          if (!e) return;
          var n = this.option("parentEl") || t.footer || t.container;
          n &&
            ((e.options.Thumbs = i({}, this.options, {
              parentEl: n,
              classes: {
                container: "f-thumbs fancybox__thumbs",
              },
              Carousel: {
                Sync: {
                  friction: t.option("Carousel.friction"),
                },
                on: {
                  click: function click(t, e) {
                    e.stopPropagation();
                  },
                },
              },
              on: {
                ready: function ready(t) {
                  var e = t.container;
                  e &&
                    _this27.hidden &&
                    (_this27.refresh(),
                    (e.style.transition = "none"),
                    _this27.hide(),
                    e.offsetHeight,
                    queueMicrotask(function () {
                      (e.style.transition = ""), _this27.show();
                    }));
                },
              },
            })),
            e.attachPlugins({
              Thumbs: it,
            }),
            (this.ref = e.plugins.Thumbs),
            this.option("showOnStart") ||
              ((this.ref.state = et.Hidden), (this.hidden = !0)));
        },
      },
      {
        key: "onResize",
        value: function onResize() {
          var t;
          var e =
            null === (t = this.ref) || void 0 === t ? void 0 : t.container;
          e && (e.style.maxHeight = "");
        },
      },
      {
        key: "onKeydown",
        value: function onKeydown(t, e) {
          var i = this.option("key");
          i && i === e && this.toggle();
        },
      },
      {
        key: "toggle",
        value: function toggle() {
          var t = this.ref;
          t &&
            t.state !== et.Disabled &&
            (t.state !== et.Hidden
              ? this.hidden
                ? this.show()
                : this.hide()
              : t.build());
        },
      },
      {
        key: "show",
        value: function show() {
          var t = this.ref,
            e = t && t.state !== et.Disabled && t.container;
          e &&
            (this.refresh(),
            e.offsetHeight,
            e.removeAttribute("aria-hidden"),
            e.classList.remove("is-hidden"),
            (this.hidden = !1));
        },
      },
      {
        key: "hide",
        value: function hide() {
          var t = this.ref,
            e = t && t.container;
          e &&
            (this.refresh(),
            e.offsetHeight,
            e.classList.add("is-hidden"),
            e.setAttribute("aria-hidden", "true")),
            (this.hidden = !0);
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          var t = this.ref;
          if (!t || t.state === et.Disabled) return;
          var e = t.container,
            i = (null == e ? void 0 : e.firstChild) || null;
          e &&
            i &&
            i.childNodes.length &&
            (e.style.maxHeight = "".concat(
              i.getBoundingClientRect().height,
              "px"
            ));
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("Carousel.init", this.onInit),
            this.instance.on("resize", this.onResize),
            this.instance.on("keydown", this.onKeydown);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("Carousel.init", this.onInit),
            this.instance.off("resize", this.onResize),
            this.instance.off("keydown", this.onKeydown);
        },
      },
    ]);
    return st;
  })(v);
  Object.defineProperty(st, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: nt,
  });
  var ot = {
    panLeft: {
      icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
      change: {
        panX: -100,
      },
    },
    panRight: {
      icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
      change: {
        panX: 100,
      },
    },
    panUp: {
      icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
      change: {
        panY: -100,
      },
    },
    panDown: {
      icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
      change: {
        panY: 100,
      },
    },
    zoomIn: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
      action: "zoomIn",
    },
    zoomOut: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "zoomOut",
    },
    toggle1to1: {
      icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
      action: "toggleZoom",
    },
    toggleZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "toggleZoom",
    },
    iterateZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "iterateZoom",
    },
    rotateCCW: {
      icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
      action: "rotateCCW",
    },
    rotateCW: {
      icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
      action: "rotateCW",
    },
    flipX: {
      icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
      action: "flipX",
    },
    flipY: {
      icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
      action: "flipY",
    },
    fitX: {
      icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
      action: "fitX",
    },
    fitY: {
      icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
      action: "fitY",
    },
    reset: {
      icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
      action: "reset",
    },
    toggleFS: {
      icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
      action: "toggleFS",
    },
  };
  var at;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Disabled = 2)] = "Disabled");
  })(at || (at = {}));
  var rt = {
      absolute: "auto",
      display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
      },
      enabled: "auto",
      items: {
        infobar: {
          tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
        },
        download: {
          tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
        },
        prev: {
          tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
        },
        next: {
          tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
        },
        slideshow: {
          tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
        },
        fullscreen: {
          tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
        },
        thumbs: {
          tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
        },
        close: {
          tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
        },
      },
      parentEl: null,
    },
    lt = {
      tabindex: "-1",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
    };
  var ct = /*#__PURE__*/ (function (_v9) {
    _inherits(ct, _v9);
    var _super11 = _createSuper(ct);
    function ct() {
      var _this28;
      _classCallCheck(this, ct);
      (_this28 = _super11.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this28), "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: at.Init,
        }),
        Object.defineProperty(_assertThisInitialized(_this28), "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this28;
    }
    _createClass(ct, [
      {
        key: "onReady",
        value: function onReady(t) {
          var e;
          if (!t.carousel) return;
          var i = this.option("display"),
            n = this.option("absolute"),
            s = this.option("enabled");
          if ("auto" === s) {
            var _t41 = this.instance.carousel;
            var _e31 = 0;
            if (_t41) {
              var _iterator15 = _createForOfIteratorHelper(_t41.slides),
                _step15;
              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                  var _i40 = _step15.value;
                  (_i40.panzoom || "image" === _i40.type) && _e31++;
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
            _e31 || (s = !1);
          }
          s || (i = void 0);
          var o = 0;
          var a = {
            left: [],
            middle: [],
            right: [],
          };
          if (i)
            for (
              var _i41 = 0, _arr4 = ["left", "middle", "right"];
              _i41 < _arr4.length;
              _i41++
            ) {
              var _t42 = _arr4[_i41];
              var _iterator16 = _createForOfIteratorHelper(i[_t42]),
                _step16;
              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                  var _n10 = _step16.value;
                  var _i42 = this.createEl(_n10);
                  _i42 &&
                    (null === (e = a[_t42]) || void 0 === e || e.push(_i42),
                    o++);
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }
          var r = null;
          if ((o && (r = this.createContainer()), r)) {
            for (
              var _i43 = 0, _Object$entries3 = Object.entries(a);
              _i43 < _Object$entries3.length;
              _i43++
            ) {
              var _Object$entries3$_i = _slicedToArray(
                  _Object$entries3[_i43],
                  2
                ),
                _t43 = _Object$entries3$_i[0],
                _e32 = _Object$entries3$_i[1];
              var _i44 = document.createElement("div");
              F(_i44, "fancybox__toolbar__column is-" + _t43);
              var _iterator17 = _createForOfIteratorHelper(_e32),
                _step17;
              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
                  var _t44 = _step17.value;
                  _i44.appendChild(_t44);
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
              "auto" !== n || "middle" !== _t43 || _e32.length || (n = !0),
                r.appendChild(_i44);
            }
            !0 === n && F(r, "is-absolute"),
              (this.state = at.Ready),
              this.onRefresh();
          } else this.state = at.Disabled;
        },
      },
      {
        key: "onClick",
        value: function onClick(t) {
          var e, i;
          var n = this.instance,
            o = n.getSlide(),
            a = null == o ? void 0 : o.panzoom,
            r = t.target,
            l = r && s(r) ? r.dataset : null;
          if (!l) return;
          if (void 0 !== l.fancyboxToggleThumbs)
            return (
              t.preventDefault(),
              t.stopPropagation(),
              void (
                null === (e = n.plugins.Thumbs) ||
                void 0 === e ||
                e.toggle()
              )
            );
          if (void 0 !== l.fancyboxToggleFullscreen)
            return (
              t.preventDefault(),
              t.stopPropagation(),
              void this.instance.toggleFullscreen()
            );
          if (void 0 !== l.fancyboxToggleSlideshow) {
            t.preventDefault(), t.stopPropagation();
            var _e33 =
              null === (i = n.carousel) || void 0 === i
                ? void 0
                : i.plugins.Autoplay;
            var _s8 = _e33.isActive;
            return (
              a && "mousemove" === a.panMode && !_s8 && a.reset(),
              void (_s8 ? _e33.stop() : _e33.start())
            );
          }
          var c = l.panzoomAction,
            h = l.panzoomChange;
          if (((h || c) && (t.preventDefault(), t.stopPropagation()), h)) {
            var _t45 = {};
            try {
              _t45 = JSON.parse(h);
            } catch (t) {}
            a && a.applyChange(_t45);
          } else c && a && a[c] && a[c]();
        },
      },
      {
        key: "onChange",
        value: function onChange() {
          this.onRefresh();
        },
      },
      {
        key: "onRefresh",
        value: function onRefresh() {
          if (this.instance.isClosing()) return;
          var t = this.container;
          if (!t) return;
          var e = this.instance.getSlide();
          if (!e || e.state !== f.Ready) return;
          var i = e && !e.error && e.panzoom;
          var _iterator18 = _createForOfIteratorHelper(
              t.querySelectorAll("[data-panzoom-action]")
            ),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
              var _e34 = _step18.value;
              i
                ? (_e34.removeAttribute("disabled"),
                  _e34.removeAttribute("tabindex"))
                : (_e34.setAttribute("disabled", ""),
                  _e34.setAttribute("tabindex", "-1"));
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          var n = i && i.canZoomIn(),
            s = i && i.canZoomOut();
          var _iterator19 = _createForOfIteratorHelper(
              t.querySelectorAll('[data-panzoom-action="zoomIn"]')
            ),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
              var _e35 = _step19.value;
              n
                ? (_e35.removeAttribute("disabled"),
                  _e35.removeAttribute("tabindex"))
                : (_e35.setAttribute("disabled", ""),
                  _e35.setAttribute("tabindex", "-1"));
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          var _iterator20 = _createForOfIteratorHelper(
              t.querySelectorAll('[data-panzoom-action="zoomOut"]')
            ),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
              var _e36 = _step20.value;
              s
                ? (_e36.removeAttribute("disabled"),
                  _e36.removeAttribute("tabindex"))
                : (_e36.setAttribute("disabled", ""),
                  _e36.setAttribute("tabindex", "-1"));
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
          var _iterator21 = _createForOfIteratorHelper(
              t.querySelectorAll(
                '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
              )
            ),
            _step21;
          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
              var _e37 = _step21.value;
              s || n
                ? (_e37.removeAttribute("disabled"),
                  _e37.removeAttribute("tabindex"))
                : (_e37.setAttribute("disabled", ""),
                  _e37.setAttribute("tabindex", "-1"));
              var _t46 = _e37.querySelector("g");
              _t46 && (_t46.style.display = n ? "" : "none");
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
        },
      },
      {
        key: "onDone",
        value: function onDone(t, e) {
          var _this29 = this;
          var i;
          null === (i = e.panzoom) ||
            void 0 === i ||
            i.on("afterTransform", function () {
              _this29.instance.isCurrentSlide(e) && _this29.onRefresh();
            }),
            this.instance.isCurrentSlide(e) && this.onRefresh();
        },
      },
      {
        key: "createContainer",
        value: function createContainer() {
          var t = this.instance.container;
          if (!t) return null;
          var e = this.option("parentEl") || t,
            i = document.createElement("div");
          return (
            F(i, "fancybox__toolbar"),
            e.prepend(i),
            i.addEventListener("click", this.onClick, {
              passive: !1,
              capture: !0,
            }),
            t && F(t, "has-toolbar"),
            (this.container = i),
            i
          );
        },
      },
      {
        key: "createEl",
        value: function createEl(t) {
          var _this30 = this;
          var e;
          var i = this.instance.carousel;
          if (!i) return null;
          if ("toggleFS" === t) return null;
          if ("fullscreen" === t && !this.instance.fsAPI) return null;
          var s = null;
          var o = i.slides.length || 0;
          var a = 0,
            r = 0;
          var _iterator22 = _createForOfIteratorHelper(i.slides),
            _step22;
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
              var _t49 = _step22.value;
              (_t49.panzoom || "image" === _t49.type) && a++,
                ("image" === _t49.type || _t49.downloadSrc) && r++;
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
          if (o < 2 && ["infobar", "prev", "next"].includes(t)) return s;
          if (void 0 !== ot[t] && !a) return null;
          if ("download" === t && !r) return null;
          if ("thumbs" === t) {
            var _t47 = this.instance.plugins.Thumbs;
            if (!_t47 || !_t47.isEnabled) return null;
          }
          if ("slideshow" === t) {
            if (
              !(null === (e = this.instance.carousel) || void 0 === e
                ? void 0
                : e.plugins.Autoplay) ||
              o < 2
            )
              return null;
          }
          if (void 0 !== ot[t]) {
            var _e38 = ot[t];
            (s = document.createElement("button")),
              s.setAttribute(
                "title",
                this.instance.localize("{{".concat(t.toUpperCase(), "}}"))
              ),
              F(s, "f-button"),
              _e38.action && (s.dataset.panzoomAction = _e38.action),
              _e38.change &&
                (s.dataset.panzoomChange = JSON.stringify(_e38.change)),
              s.appendChild(n(this.instance.localize(_e38.icon)));
          } else {
            var _e39 = (this.option("items") || [])[t];
            _e39 &&
              ((s = n(this.instance.localize(_e39.tpl))),
              "function" == typeof _e39.click &&
                s.addEventListener("click", function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof _e39.click &&
                      _e39.click.call(_this30, _this30, t);
                }));
          }
          var l = null == s ? void 0 : s.querySelector("svg");
          if (l)
            for (
              var _i45 = 0, _Object$entries4 = Object.entries(lt);
              _i45 < _Object$entries4.length;
              _i45++
            ) {
              var _Object$entries4$_i = _slicedToArray(
                  _Object$entries4[_i45],
                  2
                ),
                _t48 = _Object$entries4$_i[0],
                _e40 = _Object$entries4$_i[1];
              l.getAttribute(_t48) || l.setAttribute(_t48, String(_e40));
            }
          return s;
        },
      },
      {
        key: "removeContainer",
        value: function removeContainer() {
          var t;
          var e = this.container;
          e &&
            e.removeEventListener("click", this.onClick, {
              passive: !1,
              capture: !0,
            }),
            null === (t = this.container) || void 0 === t || t.remove(),
            (this.container = null),
            (this.state = at.Disabled);
          var i = this.instance.container;
          i && D(i, "has-toolbar");
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on("Carousel.initSlides", this.onReady),
            this.instance.on("done", this.onDone),
            this.instance.on("reveal", this.onChange),
            this.instance.on("Carousel.change", this.onChange),
            this.onReady(this.instance);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off("Carousel.initSlides", this.onReady),
            this.instance.off("done", this.onDone),
            this.instance.off("reveal", this.onChange),
            this.instance.off("Carousel.change", this.onChange),
            this.removeContainer();
        },
      },
    ]);
    return ct;
  })(v);
  Object.defineProperty(ct, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: rt,
  });
  var ht = {
      Hash: w,
      Html: K,
      Images: Z,
      Slideshow: Q,
      Thumbs: st,
      Toolbar: ct,
    },
    dt = function dt(t, e) {
      var i = !0;
      return function () {
        i &&
          ((i = !1),
          t.apply(void 0, arguments),
          setTimeout(function () {
            i = !0;
          }, e));
      };
    },
    ut = function ut(t, e) {
      var i = [];
      return (
        t.childNodes.forEach(function (t) {
          t.nodeType !== Node.ELEMENT_NODE || (e && !t.matches(e)) || i.push(t);
        }),
        i
      );
    },
    pt = {
      viewport: null,
      track: null,
      enabled: !0,
      slides: [],
      axis: "x",
      transition: "fade",
      preload: 1,
      slidesPerPage: "auto",
      initialPage: 0,
      friction: 0.12,
      Panzoom: {
        decelFriction: 0.12,
      },
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      adaptiveHeight: !1,
      direction: "ltr",
      classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected",
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d",
      },
    };
  var ft;
  !(function (t) {
    (t[(t.Init = 0)] = "Init"),
      (t[(t.Ready = 1)] = "Ready"),
      (t[(t.Destroy = 2)] = "Destroy");
  })(ft || (ft = {}));
  var mt = function mt(t) {
      if (
        ("string" == typeof t &&
          (t = {
            html: t,
          }),
        !(t instanceof String || t instanceof HTMLElement))
      ) {
        var _e41 = t.thumb;
        void 0 !== _e41 &&
          ("string" == typeof _e41 && (t.thumbSrc = _e41),
          _e41 instanceof HTMLImageElement &&
            ((t.thumbEl = _e41),
            (t.thumbElSrc = _e41.src),
            (t.thumbSrc = _e41.src)),
          delete t.thumb);
      }
      return Object.assign(
        {
          html: "",
          el: null,
          isDom: !1,
          class: "",
          index: -1,
          dim: 0,
          gap: 0,
          pos: 0,
          transition: !1,
        },
        t
      );
    },
    gt = function gt() {
      var t =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.assign(
        {
          index: -1,
          slides: [],
          dim: 0,
          pos: -1,
        },
        t
      );
    },
    bt = {
      classes: {
        list: "f-carousel__dots",
        isDynamic: "is-dynamic",
        hasDots: "has-dots",
        dot: "f-carousel__dot",
        isBeforePrev: "is-before-prev",
        isPrev: "is-prev",
        isCurrent: "is-current",
        isNext: "is-next",
        isAfterNext: "is-after-next",
      },
      dotTpl:
        '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
      dynamicFrom: 11,
      maxCount: 1 / 0,
      minCount: 2,
    };
  var vt = /*#__PURE__*/ (function (_v10) {
    _inherits(vt, _v10);
    var _super12 = _createSuper(vt);
    function vt() {
      var _this31;
      _classCallCheck(this, vt);
      (_this31 = _super12.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this31), "isDynamic", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this31), "list", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this31;
    }
    _createClass(vt, [
      {
        key: "onRefresh",
        value: function onRefresh() {
          this.refresh();
        },
      },
      {
        key: "build",
        value: function build() {
          var t = this.list;
          return (
            t ||
              ((t = document.createElement("ul")),
              F(t, this.cn("list")),
              t.setAttribute("role", "tablist"),
              this.instance.container.appendChild(t),
              F(this.instance.container, this.cn("hasDots")),
              (this.list = t)),
            t
          );
        },
      },
      {
        key: "refresh",
        value: function refresh() {
          var t;
          var e = this.instance.pages.length,
            i = Math.min(2, this.option("minCount")),
            n = Math.max(2e3, this.option("maxCount")),
            s = this.option("dynamicFrom");
          if (e < i || e > n) return void this.cleanup();
          var o = "number" == typeof s && e > 5 && e >= s,
            a =
              !this.list ||
              this.isDynamic !== o ||
              this.list.children.length !== e;
          a && this.cleanup();
          var r = this.build();
          if ((M(r, this.cn("isDynamic"), !!o), a))
            for (var _t50 = 0; _t50 < e; _t50++)
              r.append(this.createItem(_t50));
          var l,
            c = 0;
          for (
            var _i46 = 0, _arr5 = _toConsumableArray(r.children);
            _i46 < _arr5.length;
            _i46++
          ) {
            var _e42 = _arr5[_i46];
            var _i47 = c === this.instance.page;
            _i47 && (l = _e42),
              M(_e42, this.cn("isCurrent"), _i47),
              null === (t = _e42.children[0]) ||
                void 0 === t ||
                t.setAttribute("aria-selected", _i47 ? "true" : "false");
            for (
              var _i48 = 0,
                _arr6 = ["isBeforePrev", "isPrev", "isNext", "isAfterNext"];
              _i48 < _arr6.length;
              _i48++
            ) {
              var _t51 = _arr6[_i48];
              D(_e42, this.cn(_t51));
            }
            c++;
          }
          if (((l = l || r.firstChild), o && l)) {
            var _t52 = l.previousElementSibling,
              _e43 = _t52 && _t52.previousElementSibling;
            F(_t52, this.cn("isPrev")), F(_e43, this.cn("isBeforePrev"));
            var _i49 = l.nextElementSibling,
              _n11 = _i49 && _i49.nextElementSibling;
            F(_i49, this.cn("isNext")), F(_n11, this.cn("isAfterNext"));
          }
          this.isDynamic = o;
        },
      },
      {
        key: "createItem",
        value: function createItem() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var e;
          var i = document.createElement("li");
          i.setAttribute("role", "presentation");
          var s = n(
            this.instance
              .localize(this.option("dotTpl"), [["%d", t + 1]])
              .replace(/\%i/g, t + "")
          );
          return (
            i.appendChild(s),
            null === (e = i.children[0]) ||
              void 0 === e ||
              e.setAttribute("role", "tab"),
            i
          );
        },
      },
      {
        key: "cleanup",
        value: function cleanup() {
          this.list && (this.list.remove(), (this.list = null)),
            (this.isDynamic = !1),
            D(this.instance.container, this.cn("hasDots"));
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on(["refresh", "change"], this.onRefresh);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off(["refresh", "change"], this.onRefresh),
            this.cleanup();
        },
      },
    ]);
    return vt;
  })(v);
  Object.defineProperty(vt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: bt,
  });
  var yt = /*#__PURE__*/ (function (_v11) {
    _inherits(yt, _v11);
    var _super13 = _createSuper(yt);
    function yt() {
      var _this32;
      _classCallCheck(this, yt);
      (_this32 = _super13.apply(this, arguments)),
        Object.defineProperty(_assertThisInitialized(_this32), "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this32), "prev", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this32), "next", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this32;
    }
    _createClass(yt, [
      {
        key: "onRefresh",
        value: function onRefresh() {
          var t = this.instance,
            e = t.pages.length,
            i = t.page;
          if (e < 2) return void this.cleanup();
          this.build();
          var n = this.prev,
            s = this.next;
          n &&
            s &&
            (n.removeAttribute("disabled"),
            s.removeAttribute("disabled"),
            t.isInfinite ||
              (i <= 0 && n.setAttribute("disabled", ""),
              i >= e - 1 && s.setAttribute("disabled", "")));
        },
      },
      {
        key: "createButton",
        value: function createButton(t) {
          var e = this.instance,
            i = document.createElement("button");
          i.setAttribute("tabindex", "0"),
            i.setAttribute(
              "title",
              e.localize("{{".concat(t.toUpperCase(), "}}"))
            ),
            F(
              i,
              this.cn("button") +
                " " +
                this.cn("next" === t ? "isNext" : "isPrev")
            );
          var n = e.isRTL ? ("next" === t ? "prev" : "next") : t;
          var s;
          return (
            (i.innerHTML = e.localize(this.option("".concat(n, "Tpl")))),
            (i.dataset[
              "carousel".concat(
                ((s = t),
                s
                  ? s.match("^[a-z]")
                    ? s.charAt(0).toUpperCase() + s.substring(1)
                    : s
                  : "")
              )
            ] = "true"),
            i
          );
        },
      },
      {
        key: "build",
        value: function build() {
          var t = this.container;
          t ||
            ((this.container = t = document.createElement("div")),
            F(t, this.cn("container")),
            this.instance.container.appendChild(t)),
            this.next || (this.next = t.appendChild(this.createButton("next"))),
            this.prev || (this.prev = t.appendChild(this.createButton("prev")));
        },
      },
      {
        key: "cleanup",
        value: function cleanup() {
          this.prev && this.prev.remove(),
            this.next && this.next.remove(),
            this.container && this.container.remove(),
            (this.prev = null),
            (this.next = null),
            (this.container = null);
        },
      },
      {
        key: "attach",
        value: function attach() {
          this.instance.on(["refresh", "change"], this.onRefresh);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.instance.off(["refresh", "change"], this.onRefresh),
            this.cleanup();
        },
      },
    ]);
    return yt;
  })(v);
  Object.defineProperty(yt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      classes: {
        container: "f-carousel__nav",
        button: "f-button",
        isNext: "is-next",
        isPrev: "is-prev",
      },
      nextTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
      prevTpl:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
    },
  });
  var wt = /*#__PURE__*/ (function (_v12) {
    _inherits(wt, _v12);
    var _super14 = _createSuper(wt);
    function wt() {
      var _this33;
      _classCallCheck(this, wt);
      (_this33 = _super14.apply(this, arguments)),
        Object.defineProperty(
          _assertThisInitialized(_this33),
          "selectedIndex",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this33), "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this33), "nav", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        });
      return _this33;
    }
    _createClass(wt, [
      {
        key: "addAsTargetFor",
        value: function addAsTargetFor(t) {
          (this.target = this.instance), (this.nav = t), this.attachEvents();
        },
      },
      {
        key: "addAsNavFor",
        value: function addAsNavFor(t) {
          (this.nav = this.instance), (this.target = t), this.attachEvents();
        },
      },
      {
        key: "attachEvents",
        value: function attachEvents() {
          this.nav &&
            this.target &&
            ((this.nav.options.initialSlide = this.target.options.initialPage),
            this.nav.on("ready", this.onNavReady),
            this.nav.state === ft.Ready && this.onNavReady(this.nav),
            this.target.on("ready", this.onTargetReady),
            this.target.state === ft.Ready && this.onTargetReady(this.target));
        },
      },
      {
        key: "onNavReady",
        value: function onNavReady(t) {
          t.on("createSlide", this.onNavCreateSlide),
            t.on("Panzoom.click", this.onNavClick),
            t.on("Panzoom.touchEnd", this.onNavTouch),
            this.onTargetChange();
        },
      },
      {
        key: "onTargetReady",
        value: function onTargetReady(t) {
          t.on("change", this.onTargetChange),
            t.on("Panzoom.refresh", this.onTargetChange),
            this.onTargetChange();
        },
      },
      {
        key: "onNavClick",
        value: function onNavClick(t, e, i) {
          i.pointerType || this.onNavTouch(t, t.panzoom, i);
        },
      },
      {
        key: "onNavTouch",
        value: function onNavTouch(t, e, i) {
          var n, s;
          if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3)
            return;
          var o = i.target,
            a = this.nav,
            r = this.target;
          if (!a || !r || !o) return;
          var l = o.closest("[data-index]");
          if ((i.stopPropagation(), i.preventDefault(), !l)) return;
          var c = parseInt(l.dataset.index || "", 10) || 0,
            h = r.getPageForSlide(c),
            d = a.getPageForSlide(c);
          a.slideTo(d),
            r.slideTo(h, {
              friction:
                null ===
                  (s =
                    null === (n = this.nav) || void 0 === n
                      ? void 0
                      : n.plugins) || void 0 === s
                  ? void 0
                  : s.Sync.option("friction"),
            }),
            this.markSelectedSlide(c);
        },
      },
      {
        key: "onNavCreateSlide",
        value: function onNavCreateSlide(t, e) {
          e.index === this.selectedIndex && this.markSelectedSlide(e.index);
        },
      },
      {
        key: "onTargetChange",
        value: function onTargetChange() {
          var t = this.target,
            e = this.nav;
          if (!t || !e) return;
          if (e.state !== ft.Ready || t.state !== ft.Ready) return;
          var i = t.pages[t.page].slides[0].index,
            n = e.getPageForSlide(i);
          this.markSelectedSlide(i), e.slideTo(n);
        },
      },
      {
        key: "markSelectedSlide",
        value: function markSelectedSlide(t) {
          var e = this.nav;
          e &&
            e.state === ft.Ready &&
            ((this.selectedIndex = t),
            _toConsumableArray(e.slides).map(function (e) {
              e.el &&
                e.el.classList[e.index === t ? "add" : "remove"](
                  "is-nav-selected"
                );
            }));
        },
      },
      {
        key: "attach",
        value: function attach() {
          var t = this.options.target,
            e = this.options.nav;
          t ? this.addAsNavFor(t) : e && this.addAsTargetFor(e);
        },
      },
      {
        key: "detach",
        value: function detach() {
          this.nav &&
            (this.nav.off("ready", this.onNavReady),
            this.nav.off("createSlide", this.onNavCreateSlide),
            this.nav.off("Panzoom.click", this.onNavClick),
            this.nav.off("Panzoom.touchEnd", this.onNavTouch)),
            (this.nav = null),
            this.target &&
              (this.target.off("ready", this.onTargetReady),
              this.target.off("refresh", this.onTargetChange),
              this.target.off("change", this.onTargetChange)),
            (this.target = null);
        },
      },
    ]);
    return wt;
  })(v);
  Object.defineProperty(wt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      friction: 0.35,
    },
  });
  var xt = {
    Navigation: yt,
    Dots: vt,
    Sync: wt,
  };
  var Et = /*#__PURE__*/ (function (_b3) {
    _inherits(Et, _b3);
    var _super15 = _createSuper(Et);
    function Et(t) {
      var _this34;
      var e =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _classCallCheck(this, Et);
      if (
        ((_this34 = _super15.call(this)),
        Object.defineProperty(_assertThisInitialized(_this34), "userOptions", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "bp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: "",
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "lp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ft.Init,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "page", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "prevPage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "viewport", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "slides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "pages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "panzoom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "inTransition", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Set(),
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "contentDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this34), "viewportDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        "string" == typeof t && (t = document.querySelector(t)),
        !t || !s(t))
      )
        throw new Error("No Element found");
      (_this34.container = t),
        (_this34.slideNext = dt(
          _this34.slideNext.bind(_assertThisInitialized(_this34)),
          150
        )),
        (_this34.slidePrev = dt(
          _this34.slidePrev.bind(_assertThisInitialized(_this34)),
          150
        )),
        (_this34.userOptions = e),
        (_this34.userPlugins = i),
        queueMicrotask(function () {
          _this34.processOptions();
        });
      return _possibleConstructorReturn(_this34);
    }
    _createClass(Et, [
      {
        key: "axis",
        get: function get() {
          return this.isHorizontal ? "e" : "f";
        },
      },
      {
        key: "isEnabled",
        get: function get() {
          return this.state === ft.Ready;
        },
      },
      {
        key: "isInfinite",
        get: function get() {
          var t = !1;
          var e = this.contentDim,
            i = this.viewportDim;
          return (
            this.pages.length >= 2 &&
              e > 1.5 * i &&
              (t = this.option("infinite")),
            t
          );
        },
      },
      {
        key: "isRTL",
        get: function get() {
          return "rtl" === this.option("direction");
        },
      },
      {
        key: "isHorizontal",
        get: function get() {
          return "x" === this.option("axis");
        },
      },
      {
        key: "processOptions",
        value: function processOptions() {
          var _this35 = this;
          var t = i({}, Et.defaults, this.userOptions);
          var n = "";
          var s = t.breakpoints;
          if (s && e(s))
            for (
              var _i50 = 0, _Object$entries5 = Object.entries(s);
              _i50 < _Object$entries5.length;
              _i50++
            ) {
              var _Object$entries5$_i = _slicedToArray(
                  _Object$entries5[_i50],
                  2
                ),
                _o6 = _Object$entries5$_i[0],
                _a3 = _Object$entries5$_i[1];
              window.matchMedia(_o6).matches &&
                e(_a3) &&
                ((n += _o6), i(t, _a3));
            }
          (n === this.bp && this.state !== ft.Init) ||
            ((this.bp = n),
            this.state === ft.Ready &&
              (t.initialSlide = this.pages[this.page].slides[0].index),
            this.state !== ft.Init && this.destroy(),
            _get(_getPrototypeOf(Et.prototype), "setOptions", this).call(
              this,
              t
            ),
            !1 === this.option("enabled")
              ? this.attachEvents()
              : setTimeout(function () {
                  _this35.init();
                }, 0));
        },
      },
      {
        key: "init",
        value: function init() {
          (this.state = ft.Init),
            this.emit("init"),
            this.attachPlugins(
              Object.assign(Object.assign({}, Et.Plugins), this.userPlugins)
            ),
            this.initLayout(),
            this.initSlides(),
            this.updateMetrics(),
            this.setInitialPosition(),
            this.initPanzoom(),
            this.attachEvents(),
            (this.state = ft.Ready),
            this.emit("ready");
        },
      },
      {
        key: "initLayout",
        value: function initLayout() {
          var _i51, _n12;
          var t = this.container,
            e = this.option("classes");
          F(t, this.cn("container")),
            M(t, e.isLTR, !this.isRTL),
            M(t, e.isRTL, this.isRTL),
            M(t, e.isVertical, !this.isHorizontal),
            M(t, e.isHorizontal, this.isHorizontal);
          var i =
            this.option("viewport") || t.querySelector(".".concat(e.viewport));
          i ||
            ((i = document.createElement("div")),
            F(i, e.viewport),
            (_i51 = i).append.apply(
              _i51,
              _toConsumableArray(ut(t, ".".concat(e.slide)))
            ),
            t.prepend(i));
          var n = this.option("track") || t.querySelector(".".concat(e.track));
          n ||
            ((n = document.createElement("div")),
            F(n, e.track),
            (_n12 = n).append.apply(
              _n12,
              _toConsumableArray(Array.from(i.childNodes))
            )),
            n.setAttribute("aria-live", "polite"),
            i.contains(n) || i.prepend(n),
            (this.viewport = i),
            (this.track = n),
            this.emit("initLayout");
        },
      },
      {
        key: "initSlides",
        value: function initSlides() {
          var _this36 = this;
          var t = this.track;
          if (t) {
            (this.slides = []),
              _toConsumableArray(ut(t, ".".concat(this.cn("slide")))).forEach(
                function (t) {
                  if (s(t)) {
                    var _e44 = mt({
                      el: t,
                      isDom: !0,
                      index: _this36.slides.length,
                    });
                    _this36.slides.push(_e44),
                      _this36.emit("initSlide", _e44, _this36.slides.length);
                  }
                }
              );
            var _iterator23 = _createForOfIteratorHelper(
                this.option("slides", [])
              ),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                var _t53 = _step23.value;
                var _e45 = mt(_t53);
                (_e45.index = this.slides.length),
                  this.slides.push(_e45),
                  this.emit("initSlide", _e45, this.slides.length);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
            this.emit("initSlides");
          }
        },
      },
      {
        key: "setInitialPage",
        value: function setInitialPage() {
          var t = 0;
          var e = this.option("initialSlide");
          (t =
            "number" == typeof e
              ? this.getPageForSlide(e)
              : parseInt(this.option("initialPage", 0) + "", 10) || 0),
            (this.page = t);
        },
      },
      {
        key: "setInitialPosition",
        value: function setInitialPosition() {
          if (!this.track || !this.pages.length) return;
          var t = this.isHorizontal;
          var e = this.page;
          this.pages[e] || (this.page = e = 0);
          var i = this.pages[e].pos * (this.isRTL && t ? 1 : -1),
            n = t ? "".concat(i, "px") : "0",
            s = t ? "0" : "".concat(i, "px");
          (this.track.style.transform = "translate3d("
            .concat(n, ", ")
            .concat(s, ", 0) scale(1)")),
            this.option("adaptiveHeight") && this.setViewportHeight();
        },
      },
      {
        key: "initPanzoom",
        value: function initPanzoom() {
          var _this37 = this;
          this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
          var t = this.option("Panzoom") || {};
          (this.panzoom = new Y(
            this.viewport,
            i(
              {},
              {
                content: this.track,
                zoom: !1,
                panOnlyZoomed: !1,
                lockAxis: this.isHorizontal ? "x" : "y",
                infinite: this.isInfinite,
                click: !1,
                dblClick: !1,
                touch: function touch(t) {
                  return !(_this37.pages.length < 2 && !t.options.infinite);
                },
                bounds: function bounds() {
                  return _this37.getBounds();
                },
                maxVelocity: function maxVelocity(t) {
                  return Math.abs(
                    t.target[_this37.axis] - t.current[_this37.axis]
                  ) <
                    2 * _this37.viewportDim
                    ? 100
                    : 0;
                },
              },
              t
            )
          )),
            this.panzoom.on("*", function (t, e) {
              for (
                var _len4 = arguments.length,
                  i = new Array(_len4 > 2 ? _len4 - 2 : 0),
                  _key4 = 2;
                _key4 < _len4;
                _key4++
              ) {
                i[_key4 - 2] = arguments[_key4];
              }
              _this37.emit.apply(_this37, ["Panzoom.".concat(e), t].concat(i));
            }),
            this.panzoom.on("decel", this.onDecel),
            this.panzoom.on("refresh", this.onRefresh),
            this.panzoom.on("beforeTransform", this.onBeforeTransform),
            this.panzoom.on("endAnimation", this.onEndAnimation);
        },
      },
      {
        key: "attachEvents",
        value: function attachEvents() {
          var t = this.container;
          t &&
            (t.addEventListener("click", this.onClick, {
              passive: !1,
              capture: !1,
            }),
            t.addEventListener("slideTo", this.onSlideTo)),
            window.addEventListener("resize", this.onResize);
        },
      },
      {
        key: "createPages",
        value: function createPages() {
          var t = [];
          var e = this.contentDim,
            i = this.viewportDim,
            n = this.option("slidesPerPage");
          if ("number" == typeof n && e > i) {
            for (var _e46 = 0; _e46 < this.slides.length; _e46 += n)
              t.push(
                gt({
                  index: _e46,
                  slides: this.slides.slice(_e46, _e46 + n),
                })
              );
            return t;
          }
          var s = 0,
            o = 0;
          var _iterator24 = _createForOfIteratorHelper(this.slides),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
              var _e47 = _step24.value;
              (!t.length || o + _e47.dim > i) &&
                (t.push(gt()), (s = t.length - 1), (o = 0)),
                (o += _e47.dim + _e47.gap),
                t[s].slides.push(_e47);
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
          return t;
        },
      },
      {
        key: "processPages",
        value: function processPages() {
          var _this38 = this;
          var t = this.pages,
            e = this.contentDim,
            i = this.viewportDim,
            n = this.option("center"),
            s = this.option("fill"),
            o = s && n && e > i && !this.isInfinite;
          if (
            (t.forEach(function (t, s) {
              (t.index = s), (t.pos = t.slides[0].pos), (t.dim = 0);
              var _iterator25 = _createForOfIteratorHelper(t.slides.entries()),
                _step25;
              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
                  var _step25$value = _slicedToArray(_step25.value, 2),
                    _e48 = _step25$value[0],
                    _i52 = _step25$value[1];
                  (t.dim += _i52.dim),
                    _e48 < t.slides.length - 1 && (t.dim += _i52.gap);
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
              o && t.pos + 0.5 * t.dim < 0.5 * i
                ? (t.pos = 0)
                : o && t.pos + 0.5 * t.dim >= e - 0.5 * i
                ? (t.pos = e - i)
                : n && (t.pos += -0.5 * (i - t.dim));
            }),
            t.forEach(function (t, n) {
              s &&
                !_this38.isInfinite &&
                e > i &&
                ((t.pos = Math.max(t.pos, 0)),
                (t.pos = Math.min(t.pos, e - i))),
                (t.pos = E(t.pos, 1e3)),
                (t.dim = E(t.dim, 1e3)),
                t.pos < 0.1 && t.pos > -0.1 && (t.pos = 0);
            }),
            this.isInfinite)
          )
            return t;
          var a = [];
          var r;
          return (
            t.forEach(function (t) {
              var e = Object.assign({}, t);
              r && e.pos === r.pos
                ? ((r.dim += e.dim),
                  (r.slides = [].concat(
                    _toConsumableArray(r.slides),
                    _toConsumableArray(e.slides)
                  )))
                : ((e.index = a.length), (r = e), a.push(e));
            }),
            a
          );
        },
      },
      {
        key: "getPageFromIndex",
        value: function getPageFromIndex() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var e = this.pages.length;
          var i;
          return (
            (t = parseInt((t || 0).toString()) || 0),
            (i = this.isInfinite
              ? ((t % e) + e) % e
              : Math.max(Math.min(t, this.pages.length - 1), 0)),
            i
          );
        },
      },
      {
        key: "getSlideMetrics",
        value: function getSlideMetrics(t) {
          var e = this.isHorizontal ? "width" : "height";
          var i = 0,
            n = 0,
            s = t.el;
          s
            ? (i = parseFloat(s.dataset[e] || "") || 0)
            : ((s = document.createElement("div")),
              (s.style.visibility = "hidden"),
              F(s, this.cn("slide") + " " + t["class"]),
              (this.track || document.body).prepend(s)),
            i
              ? ((s.style[e] = "".concat(i, "px")),
                (s.style["width" === e ? "height" : "width"] = ""))
              : (i = s.getBoundingClientRect()[e]);
          var o = getComputedStyle(s);
          return (
            "content-box" === o.boxSizing &&
              (this.isHorizontal
                ? ((i += parseFloat(o.paddingLeft) || 0),
                  (i += parseFloat(o.paddingRight) || 0))
                : ((i += parseFloat(o.paddingTop) || 0),
                  (i += parseFloat(o.paddingBottom) || 0))),
            (n =
              parseFloat(
                o[this.isHorizontal ? "marginRight" : "marginBottom"]
              ) || 0),
            this.isHorizontal,
            t.el || s.remove(),
            {
              dim: E(i, 1e3),
              gap: E(n, 1e3),
            }
          );
        },
      },
      {
        key: "getBounds",
        value: function getBounds() {
          var t = {
            min: 0,
            max: 0,
          };
          if (this.isInfinite)
            t = {
              min: -1 / 0,
              max: 1 / 0,
            };
          else if (this.pages.length) {
            var _e49 = this.pages[0].pos,
              _i53 = this.pages[this.pages.length - 1].pos;
            t =
              this.isRTL && this.isHorizontal
                ? {
                    min: _e49,
                    max: _i53,
                  }
                : {
                    min: -1 * _i53,
                    max: -1 * _e49,
                  };
          }
          return {
            x: this.isHorizontal
              ? t
              : {
                  min: 0,
                  max: 0,
                },
            y: this.isHorizontal
              ? {
                  min: 0,
                  max: 0,
                }
              : t,
          };
        },
      },
      {
        key: "repositionSlides",
        value: function repositionSlides() {
          var t,
            e = this.viewport,
            i = this.viewportDim,
            n = this.contentDim,
            s = this.page,
            o = this.pages,
            a = 0,
            r = 0,
            l = 0,
            c = 0;
          this.panzoom
            ? (c = -1 * this.panzoom.current[this.axis])
            : o[s] && (c = o[s].pos || 0),
            (t = this.isHorizontal ? (this.isRTL ? "right" : "left") : "top"),
            this.isRTL && this.isHorizontal && (c *= -1);
          var _iterator26 = _createForOfIteratorHelper(this.slides),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
              var _e52 = _step26.value;
              _e52.el
                ? ("top" === t
                    ? ((_e52.el.style.right = ""), (_e52.el.style.left = ""))
                    : (_e52.el.style.top = ""),
                  _e52.index !== a
                    ? (_e52.el.style[t] =
                        0 === r ? "" : "".concat(E(r, 1e3), "px"))
                    : (_e52.el.style[t] = ""),
                  (l += _e52.dim + _e52.gap),
                  a++)
                : (r += _e52.dim + _e52.gap);
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          if (this.isInfinite && l && e) {
            var _s9 = this.isHorizontal;
            var _o7 = getComputedStyle(e),
              _a4 = "padding",
              _h4 = _s9 ? "Right" : "Bottom",
              _d4 = parseFloat(_o7[_a4 + (_s9 ? "Left" : "Top")]);
            (c -= _d4), (i += _d4), (i += parseFloat(_o7[_a4 + _h4]));
            var _iterator27 = _createForOfIteratorHelper(this.slides),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
                var _e50 = _step27.value;
                _e50.el &&
                  (E(_e50.pos) < E(i) &&
                    E(_e50.pos + _e50.dim + _e50.gap) < E(c) &&
                    E(c) > E(n - i) &&
                    (_e50.el.style[t] = "".concat(E(r + l, 1e3), "px")),
                  E(_e50.pos + _e50.gap) >= E(n - i) &&
                    E(_e50.pos) > E(c + i) &&
                    E(c) < E(i) &&
                    (_e50.el.style[t] = "-".concat(E(l, 1e3), "px")));
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
          var h,
            d,
            u = _toConsumableArray(this.inTransition);
          if (
            (u.length > 1 && ((h = this.pages[u[0]]), (d = this.pages[u[1]])),
            h && d)
          ) {
            var _e51 = 0;
            var _iterator28 = _createForOfIteratorHelper(this.slides),
              _step28;
            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
                var _i54 = _step28.value;
                _i54.el
                  ? this.inTransition.has(_i54.index) &&
                    h.slides.indexOf(_i54) < 0 &&
                    (_i54.el.style[t] = "".concat(
                      E(_e51 + (h.pos - d.pos), 1e3),
                      "px"
                    ))
                  : (_e51 += _i54.dim + _i54.gap);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          }
        },
      },
      {
        key: "createSlideEl",
        value: function createSlideEl(t) {
          if (!this.track || !t) return;
          if (t.el) return;
          var e = document.createElement("div");
          F(e, this.cn("slide")),
            F(e, t["class"]),
            F(e, t.customClass),
            t.html && (e.innerHTML = t.html);
          var i = [];
          this.slides.forEach(function (t, e) {
            t.el && i.push(e);
          });
          var n = t.index;
          var s = null;
          if (i.length) {
            var _t54 = i.reduce(function (t, e) {
              return Math.abs(e - n) < Math.abs(t - n) ? e : t;
            });
            s = this.slides[_t54];
          }
          var o =
            s && s.el ? (s.index < t.index ? s.el.nextSibling : s.el) : null;
          this.track.insertBefore(e, this.track.contains(o) ? o : null),
            (t.el = e),
            this.emit("createSlide", t);
        },
      },
      {
        key: "removeSlideEl",
        value: function removeSlideEl(t) {
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : !1;
          var i = t.el;
          if (!i) return;
          if ((D(i, this.cn("isSelected")), t.isDom && !e))
            return (
              i.removeAttribute("aria-hidden"),
              i.removeAttribute("data-index"),
              D(i, this.cn("isSelected")),
              void (i.style.left = "")
            );
          this.emit("removeSlide", t);
          var n = new CustomEvent("animationend");
          i.dispatchEvent(n), t.el && t.el.remove(), (t.el = null);
        },
      },
      {
        key: "transitionTo",
        value: function transitionTo() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.option("transition");
          if (!e) return !1;
          var i = this.pages,
            n = this.panzoom;
          t = parseInt((t || 0).toString()) || 0;
          var s = this.getPageFromIndex(t);
          if (
            !n ||
            !i[s] ||
            i.length < 2 ||
            i[this.page].slides[0].dim < this.viewportDim
          )
            return !1;
          var o = t > this.page ? 1 : -1,
            a = this.pages[s].pos * (this.isRTL ? 1 : -1);
          if (this.page === s && E(a, 1e3) === E(n.target[this.axis], 1e3))
            return !1;
          this.clearTransitions();
          var r = n.isResting;
          F(this.container, this.cn("inTransition"));
          var l = this.pages[this.page].slides[0],
            c = this.pages[s].slides[0];
          this.inTransition.add(c.index), this.createSlideEl(c);
          var h = l.el,
            d = c.el;
          r || "slide" === e || ((e = "fadeFast"), (h = null));
          var u = this.isRTL ? "next" : "prev",
            p = this.isRTL ? "prev" : "next";
          return (
            h &&
              (this.inTransition.add(l.index),
              (l.transition = e),
              h.addEventListener("animationend", this.onAnimationEnd),
              h.classList.add(
                "f-".concat(e, "Out"),
                "to-".concat(o > 0 ? p : u)
              )),
            d &&
              ((c.transition = e),
              d.addEventListener("animationend", this.onAnimationEnd),
              d.classList.add(
                "f-".concat(e, "In"),
                "from-".concat(o > 0 ? u : p)
              )),
            n.panTo({
              x: this.isHorizontal ? a : 0,
              y: this.isHorizontal ? 0 : a,
              friction: 0,
            }),
            this.onChange(s),
            !0
          );
        },
      },
      {
        key: "manageSlideVisiblity",
        value: function manageSlideVisiblity() {
          var t = new Set(),
            e = new Set(),
            i = this.getVisibleSlides(
              parseFloat(this.option("preload", 0) + "") || 0
            );
          var _iterator29 = _createForOfIteratorHelper(this.slides),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
              var _n13 = _step29.value;
              i.has(_n13) ? t.add(_n13) : e.add(_n13);
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
          var _iterator30 = _createForOfIteratorHelper(this.inTransition),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done; ) {
              var _e53 = _step30.value;
              t.add(this.slides[_e53]);
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
          var _iterator31 = _createForOfIteratorHelper(t),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done; ) {
              var _e54 = _step31.value;
              this.createSlideEl(_e54), this.lazyLoadSlide(_e54);
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          var _iterator32 = _createForOfIteratorHelper(e),
            _step32;
          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done; ) {
              var _i55 = _step32.value;
              t.has(_i55) || this.removeSlideEl(_i55);
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }
          this.markSelectedSlides(), this.repositionSlides();
        },
      },
      {
        key: "markSelectedSlides",
        value: function markSelectedSlides() {
          if (!this.pages[this.page] || !this.pages[this.page].slides) return;
          var t = "aria-hidden";
          var e = this.cn("isSelected");
          if (e) {
            var _iterator33 = _createForOfIteratorHelper(this.slides),
              _step33;
            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done; ) {
                var _i56 = _step33.value;
                _i56.el &&
                  ((_i56.el.dataset.index = "".concat(_i56.index)),
                  this.pages[this.page].slides.includes(_i56)
                    ? (_i56.el.classList.contains(e) ||
                        (F(_i56.el, e), this.emit("selectSlide", _i56)),
                      _i56.el.removeAttribute(t))
                    : (_i56.el.classList.contains(e) &&
                        (D(_i56.el, e), this.emit("unselectSlide", _i56)),
                      _i56.el.setAttribute(t, "true")));
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }
        },
      },
      {
        key: "flipInfiniteTrack",
        value: function flipInfiniteTrack() {
          var t = this.panzoom;
          if (!t || !this.isInfinite) return;
          var e = "x" === this.option("axis") ? "e" : "f",
            i = this.viewportDim,
            n = this.contentDim;
          var s = t.current[e],
            o = t.target[e] - s,
            a = 0,
            r = 0.5 * i,
            l = n;
          this.isRTL && this.isHorizontal
            ? (s < -r && ((a = -1), (s += l)), s > l - r && ((a = 1), (s -= l)))
            : (s > r && ((a = 1), (s -= l)),
              s < -l + r && ((a = -1), (s += l))),
            a && ((t.current[e] = s), (t.target[e] = s + o));
        },
      },
      {
        key: "lazyLoadSlide",
        value: function lazyLoadSlide(t) {
          var _this39 = this;
          var e = this,
            i = t && t.el;
          if (!i) return;
          var o = new Set(),
            a = "f-fadeIn";
          i.querySelectorAll("[data-lazy-srcset]").forEach(function (t) {
            t instanceof HTMLImageElement && o.add(t);
          });
          var r = Array.from(i.querySelectorAll("[data-lazy-src]"));
          i.dataset.lazySrc && r.push(i),
            r.map(function (t) {
              t instanceof HTMLImageElement
                ? o.add(t)
                : s(t) &&
                  ((t.style.backgroundImage = "url('".concat(
                    t.dataset.lazySrc || "",
                    "')"
                  )),
                  delete t.dataset.lazySrc);
            });
          var l = function l(t, i, n) {
            n && (n.remove(), (n = null)),
              i.complete &&
                (i.classList.add(a),
                setTimeout(function () {
                  i.classList.remove(a);
                }, 350),
                (i.style.display = "")),
              _this39.option("adaptiveHeight") &&
                t.el &&
                _this39.pages[_this39.page].slides.indexOf(t) > -1 &&
                (e.updateMetrics(), e.setViewportHeight()),
              _this39.emit("load", t);
          };
          var _iterator34 = _createForOfIteratorHelper(o),
            _step34;
          try {
            var _loop3 = function _loop3() {
              var e = _step34.value;
              var i = null;
              (e.src = e.dataset.lazySrcset || e.dataset.lazySrc || ""),
                delete e.dataset.lazySrc,
                delete e.dataset.lazySrcset,
                (e.style.display = "none"),
                e.addEventListener("error", function () {
                  l(t, e, i);
                }),
                e.addEventListener("load", function () {
                  l(t, e, i);
                }),
                setTimeout(function () {
                  e.parentNode &&
                    t.el &&
                    (e.complete
                      ? l(t, e, i)
                      : ((i = n(h)), e.parentNode.insertBefore(i, e)));
                }, 300);
            };
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done; ) {
              _loop3();
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        },
      },
      {
        key: "onAnimationEnd",
        value: function onAnimationEnd(t) {
          var e;
          var i = t.target,
            n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
            s = this.slides[n],
            o = t.animationName;
          if (!i || !s || !o) return;
          var a = !!this.inTransition.has(n) && s.transition;
          a &&
            o.substring(0, a.length + 2) === "f-".concat(a) &&
            this.inTransition["delete"](n),
            this.inTransition.size || this.clearTransitions(),
            n === this.page &&
              (null === (e = this.panzoom) || void 0 === e
                ? void 0
                : e.isResting) &&
              this.emit("settle");
        },
      },
      {
        key: "onDecel",
        value: function onDecel(t) {
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          var i =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 0;
          var n =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : 0;
          var s =
            arguments.length > 4 && arguments[4] !== undefined
              ? arguments[4]
              : 0;
          var o = this.isRTL,
            a = this.isHorizontal,
            r = this.axis,
            l = this.pages.length,
            c = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
          var h = 0;
          if (((h = c > 45 && c < 135 ? (a ? 0 : i) : a ? e : 0), !l)) return;
          var d = this.option("dragFree");
          var u = this.page;
          var p = t.target[r] * (this.isRTL && a ? 1 : -1),
            _this$getPageFromPosi = this.getPageFromPosition(p),
            f = _this$getPageFromPosi.pageIndex,
            m = t.current[r] * (o && a ? 1 : -1);
          var _this$getPageFromPosi2 = this.getPageFromPosition(m),
            g = _this$getPageFromPosi2.page;
          d
            ? this.onChange(f)
            : (Math.abs(h) > 5
                ? ((this.pages.length < 3 ||
                    Math.max(Math.abs(n), Math.abs(s)) >
                      this.pages[u].slides[0].dim) &&
                    (u = g),
                  (u =
                    o && a ? (h < 0 ? u - 1 : u + 1) : h < 0 ? u + 1 : u - 1))
                : (u = g),
              this.slideTo(u, {
                transition: !1,
                friction: t.option("decelFriction"),
              }));
        },
      },
      {
        key: "onClick",
        value: function onClick(t) {
          var e = t.target,
            i = e && s(e) ? e.dataset : null;
          var n, o;
          i &&
            (void 0 !== i.carouselPage
              ? ((o = "slideTo"), (n = i.carouselPage))
              : void 0 !== i.carouselNext
              ? (o = "slideNext")
              : void 0 !== i.carouselPrev && (o = "slidePrev")),
            o
              ? (t.preventDefault(),
                t.stopPropagation(),
                e && !e.hasAttribute("disabled") && this[o](n))
              : this.emit("click", t);
        },
      },
      {
        key: "onSlideTo",
        value: function onSlideTo(t) {
          var e = t.detail || 0;
          this.slideTo(this.getPageForSlide(e), {
            friction: 0,
          });
        },
      },
      {
        key: "onChange",
        value: function onChange(t) {
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0;
          var i = this.page;
          (this.prevPage = i),
            (this.page = t),
            this.option("adaptiveHeight") && this.setViewportHeight(),
            t !== i &&
              (this.markSelectedSlides(), this.emit("change", t, i, e));
        },
      },
      {
        key: "onRefresh",
        value: function onRefresh() {
          var t = this.contentDim,
            e = this.viewportDim;
          this.updateMetrics(),
            (this.contentDim === t && this.viewportDim === e) ||
              this.slideTo(this.page, {
                friction: 0,
                transition: !1,
              });
        },
      },
      {
        key: "onResize",
        value: function onResize() {
          this.option("breakpoints") && this.processOptions();
        },
      },
      {
        key: "onBeforeTransform",
        value: function onBeforeTransform(t) {
          this.lp !== t.current[this.axis] &&
            (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
            (this.lp = t.current.e);
        },
      },
      {
        key: "onEndAnimation",
        value: function onEndAnimation() {
          this.inTransition.size || this.emit("settle");
        },
      },
      {
        key: "reInit",
        value: function reInit() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;
          this.destroy(),
            (this.state = ft.Init),
            (this.userOptions = t || this.userOptions),
            (this.userPlugins = e || this.userPlugins),
            this.processOptions();
        },
      },
      {
        key: "slideTo",
        value: function slideTo() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var _ref8 =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {},
            _ref8$friction = _ref8.friction,
            e =
              _ref8$friction === void 0
                ? this.option("friction")
                : _ref8$friction,
            _ref8$transition = _ref8.transition,
            i =
              _ref8$transition === void 0
                ? this.option("transition")
                : _ref8$transition;
          if (this.state === ft.Destroy) return;
          var n = this.panzoom,
            s = this.pages.length;
          if (!n || !s) return;
          if (this.transitionTo(t, i)) return;
          var o = this.axis,
            a = this.getPageFromIndex(t);
          var r = this.pages[a].pos,
            l = 0;
          if (this.isInfinite) {
            var _t55 =
                n.current[o] * (this.isRTL && this.isHorizontal ? 1 : -1),
              _e55 = this.contentDim,
              _i57 = r + _e55,
              _s10 = r - _e55;
            Math.abs(_t55 - _i57) < Math.abs(_t55 - r) && ((r = _i57), (l = 1)),
              Math.abs(_t55 - _s10) < Math.abs(_t55 - r) &&
                ((r = _s10), (l = -1));
          }
          (r *= this.isRTL && this.isHorizontal ? 1 : -1),
            Math.abs(n.target[o] - r) < 0.1 ||
              (n.panTo({
                x: this.isHorizontal ? r : 0,
                y: this.isHorizontal ? 0 : r,
                friction: e,
              }),
              this.onChange(a, l));
        },
      },
      {
        key: "slideToClosest",
        value: function slideToClosest(t) {
          if (this.panzoom) {
            var _this$getPageFromPosi3 = this.getPageFromPosition(
                this.panzoom.current[this.isHorizontal ? "e" : "f"]
              ),
              _e56 = _this$getPageFromPosi3.pageIndex;
            this.slideTo(_e56, t);
          }
        },
      },
      {
        key: "slideNext",
        value: function slideNext() {
          this.slideTo(this.page + 1);
        },
      },
      {
        key: "slidePrev",
        value: function slidePrev() {
          this.slideTo(this.page - 1);
        },
      },
      {
        key: "clearTransitions",
        value: function clearTransitions() {
          this.inTransition.clear(), D(this.container, this.cn("inTransition"));
          var t = ["to-prev", "to-next", "from-prev", "from-next"];
          var _iterator35 = _createForOfIteratorHelper(this.slides),
            _step35;
          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done; ) {
              var _e57 = _step35.value;
              var _i58 = _e57.el;
              if (_i58) {
                var _i58$classList;
                _i58.removeEventListener("animationend", this.onAnimationEnd),
                  (_i58$classList = _i58.classList).remove.apply(
                    _i58$classList,
                    t
                  );
                var _n14 = _e57.transition;
                _n14 &&
                  _i58.classList.remove(
                    "f-".concat(_n14, "Out"),
                    "f-".concat(_n14, "In")
                  );
              }
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
          this.manageSlideVisiblity();
        },
      },
      {
        key: "prependSlide",
        value: function prependSlide(t) {
          var e, i;
          var n = Array.isArray(t) ? t : [t];
          var _iterator36 = _createForOfIteratorHelper(n.reverse()),
            _step36;
          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done; ) {
              var _t58 = _step36.value;
              this.slides.unshift(mt(_t58));
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
          for (var _t56 = 0; _t56 < this.slides.length; _t56++)
            this.slides[_t56].index = _t56;
          var s =
            (null === (e = this.pages[this.page]) || void 0 === e
              ? void 0
              : e.pos) || 0;
          (this.page += n.length), this.updateMetrics();
          var o =
            (null === (i = this.pages[this.page]) || void 0 === i
              ? void 0
              : i.pos) || 0;
          if (this.panzoom) {
            var _t57 = this.isRTL ? s - o : o - s;
            (this.panzoom.target.e -= _t57),
              (this.panzoom.current.e -= _t57),
              this.panzoom.requestTick();
          }
        },
      },
      {
        key: "appendSlide",
        value: function appendSlide(t) {
          var e = Array.isArray(t) ? t : [t];
          var _iterator37 = _createForOfIteratorHelper(e),
            _step37;
          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done; ) {
              var _t59 = _step37.value;
              var _e58 = mt(_t59);
              (_e58.index = this.slides.length),
                this.slides.push(_e58),
                this.emit("initSlide", _t59, this.slides.length);
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
          this.updateMetrics();
        },
      },
      {
        key: "removeSlide",
        value: function removeSlide(t) {
          var e = this.slides.length;
          (t = ((t % e) + e) % e),
            this.removeSlideEl(this.slides[t], !0),
            this.slides.splice(t, 1);
          for (var _t60 = 0; _t60 < this.slides.length; _t60++)
            this.slides[_t60].index = _t60;
          this.updateMetrics(),
            this.slideTo(this.page, {
              friction: 0,
              transition: !1,
            });
        },
      },
      {
        key: "updateMetrics",
        value: function updateMetrics() {
          var t = this.panzoom,
            e = this.viewport,
            i = this.track,
            n = this.isHorizontal;
          if (!i) return;
          var s = n ? "width" : "height";
          if (e) {
            var _t61 = E(e.getBoundingClientRect()[s], 1e3),
              _i59 = getComputedStyle(e),
              _o8 = "padding",
              _a5 = n ? "Right" : "Bottom";
            (_t61 -=
              parseFloat(_i59[_o8 + (n ? "Left" : "Top")]) +
              parseFloat(_i59[_o8 + _a5])),
              (this.viewportDim = _t61);
          }
          var o,
            a = this.pages.length,
            r = 0;
          var _iterator38 = _createForOfIteratorHelper(this.slides.entries()),
            _step38;
          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done; ) {
              var _this$getSlideMetrics;
              var _step38$value = _slicedToArray(_step38.value, 2),
                _t62 = _step38$value[0],
                _e59 = _step38$value[1];
              var _i60 = 0,
                _n15 = 0;
              !_e59.el && o
                ? ((_i60 = o.dim), (_n15 = o.gap))
                : (((_this$getSlideMetrics = this.getSlideMetrics(_e59)),
                  (_i60 = _this$getSlideMetrics.dim),
                  (_n15 = _this$getSlideMetrics.gap)),
                  (o = _e59)),
                (_i60 = E(_i60, 1e3)),
                (_n15 = E(_n15, 1e3)),
                (_e59.dim = _i60),
                (_e59.gap = _n15),
                (_e59.pos = r),
                (r += _i60),
                (this.isInfinite || _t62 < this.slides.length - 1) &&
                  (r += _n15);
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }
          var l = this.contentDim;
          (r = E(r, 1e3)),
            (this.contentDim = r),
            t &&
              ((t.contentRect[s] = r),
              (t.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] =
                r)),
            (this.pages = this.createPages()),
            (this.pages = this.processPages()),
            this.state === ft.Init && this.setInitialPage(),
            (this.page = Math.max(
              0,
              Math.min(this.page, this.pages.length - 1)
            )),
            t &&
              a === this.pages.length &&
              Math.abs(r - l) > 0.5 &&
              ((t.target[this.axis] = -1 * this.pages[this.page].pos),
              (t.current[this.axis] = -1 * this.pages[this.page].pos),
              t.stop()),
            this.manageSlideVisiblity(),
            this.emit("refresh");
        },
      },
      {
        key: "getProgress",
        value: function getProgress(t) {
          var e =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : !1;
          void 0 === t && (t = this.page);
          var i = this,
            n = i.panzoom,
            s = i.pages[t] || 0;
          if (!s || !n) return 0;
          var o = -1 * n.current.e,
            a = i.contentDim;
          var r = [
            E((o - s.pos) / (1 * s.dim), 1e3),
            E((o + a - s.pos) / (1 * s.dim), 1e3),
            E((o - a - s.pos) / (1 * s.dim), 1e3),
          ].reduce(function (t, e) {
            return Math.abs(e) < Math.abs(t) ? e : t;
          });
          return e ? r : Math.max(-1, Math.min(1, r));
        },
      },
      {
        key: "setViewportHeight",
        value: function setViewportHeight() {
          var t = this.page,
            e = this.pages,
            i = this.viewport,
            n = this.isHorizontal;
          if (!i || !e[t]) return;
          var s = 0;
          n &&
            this.track &&
            ((this.track.style.height = "auto"),
            e[t].slides.forEach(function (t) {
              t.el && (s = Math.max(s, t.el.offsetHeight));
            })),
            (i.style.height = s ? "".concat(s, "px") : "");
        },
      },
      {
        key: "getPageForSlide",
        value: function getPageForSlide(t) {
          var _iterator39 = _createForOfIteratorHelper(this.pages),
            _step39;
          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done; ) {
              var _e60 = _step39.value;
              var _iterator40 = _createForOfIteratorHelper(_e60.slides),
                _step40;
              try {
                for (_iterator40.s(); !(_step40 = _iterator40.n()).done; ) {
                  var _i61 = _step40.value;
                  if (_i61.index === t) return _e60.index;
                }
              } catch (err) {
                _iterator40.e(err);
              } finally {
                _iterator40.f();
              }
            }
          } catch (err) {
            _iterator39.e(err);
          } finally {
            _iterator39.f();
          }
          return -1;
        },
      },
      {
        key: "getVisibleSlides",
        value: function getVisibleSlides() {
          var t =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0;
          var e;
          var i = new Set();
          var n = this.contentDim,
            s = this.viewportDim,
            o = this.pages,
            a = this.page;
          n =
            n +
              (null === (e = this.slides[this.slides.length - 1]) ||
              void 0 === e
                ? void 0
                : e.gap) || 0;
          var r = 0;
          (r = this.panzoom
            ? -1 * this.panzoom.current[this.axis]
            : (o[a] && o[a].pos) || 0),
            this.isInfinite && (r -= Math.floor(r / n) * n),
            this.isRTL && this.isHorizontal && (r *= -1);
          var l = r - s * t,
            c = r + s * (t + 1),
            h = this.isInfinite ? [-1, 0, 1] : [0];
          var _iterator41 = _createForOfIteratorHelper(this.slides),
            _step41;
          try {
            for (_iterator41.s(); !(_step41 = _iterator41.n()).done; ) {
              var _t63 = _step41.value;
              var _iterator42 = _createForOfIteratorHelper(h),
                _step42;
              try {
                for (_iterator42.s(); !(_step42 = _iterator42.n()).done; ) {
                  var _e61 = _step42.value;
                  var _s11 = _t63.pos + _e61 * n,
                    _o9 = _t63.pos + _t63.dim + _t63.gap + _e61 * n;
                  _s11 < c && _o9 > l && i.add(_t63);
                }
              } catch (err) {
                _iterator42.e(err);
              } finally {
                _iterator42.f();
              }
            }
          } catch (err) {
            _iterator41.e(err);
          } finally {
            _iterator41.f();
          }
          return i;
        },
      },
      {
        key: "getPageFromPosition",
        value: function getPageFromPosition(t) {
          var e = this.viewportDim,
            i = this.contentDim,
            n = this.pages.length,
            s = this.slides.length,
            o = this.slides[s - 1];
          var a = 0,
            r = 0,
            l = 0;
          var c = this.option("center");
          c && (t += 0.5 * e),
            this.isInfinite ||
              (t = Math.max(this.slides[0].pos, Math.min(t, o.pos)));
          var h = i + o.gap;
          (l = Math.floor(t / h) || 0), (t -= l * h);
          var d = o,
            u = this.slides.find(function (e) {
              var i = t + (d && !c ? 0.5 * d.dim : 0);
              return (d = e), e.pos <= i && e.pos + e.dim + e.gap > i;
            });
          return (
            u || (u = o),
            (r = this.getPageForSlide(u.index)),
            (a = r + l * n),
            {
              page: a,
              pageIndex: r,
            }
          );
        },
      },
      {
        key: "destroy",
        value: function destroy() {
          var _this40 = this;
          if ([ft.Destroy].includes(this.state)) return;
          this.state = ft.Destroy;
          var t = this.container,
            e = this.viewport,
            i = this.track,
            n = this.slides,
            s = this.panzoom,
            o = this.option("classes");
          t.removeEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
            t.removeEventListener("slideTo", this.onSlideTo),
            window.removeEventListener("resize", this.onResize),
            s && (s.destroy(), (this.panzoom = null)),
            n &&
              n.forEach(function (t) {
                _this40.removeSlideEl(t);
              }),
            this.detachPlugins(),
            (this.track = null),
            (this.viewport = null),
            (this.page = 0),
            e && i && e.replaceWith.apply(e, _toConsumableArray(i.childNodes));
          for (
            var _i62 = 0, _Object$entries6 = Object.entries(o);
            _i62 < _Object$entries6.length;
            _i62++
          ) {
            var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i62], 2),
              _e62 = _Object$entries6$_i[0],
              _i63 = _Object$entries6$_i[1];
            "container" !== _e62 && _i63 && t.classList.remove(_i63);
          }
          this.slides = [];
          var a = this.events.get("ready");
          (this.events = new Map()), a && this.events.set("ready", a);
        },
      },
    ]);
    return Et;
  })(b);
  Object.defineProperty(Et, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Y,
  }),
    Object.defineProperty(Et, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: pt,
    }),
    Object.defineProperty(Et, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: xt,
    });
  var St = "with-fancybox",
    Pt = "hide-scrollbar",
    Ct = "--fancybox-scrollbar-compensate",
    Mt = "--fancybox-body-margin",
    Tt = "is-animated",
    Ot = "is-compact",
    At = "is-loading";
  var zt = null,
    Lt = null;
  var Rt = new Map();
  var kt = 0;
  var It = /*#__PURE__*/ (function (_b4) {
    _inherits(It, _b4);
    var _super16 = _createSuper(It);
    function It() {
      var _this41;
      var t =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _classCallCheck(this, It);
      (_this41 = _super16.call(this, e)),
        Object.defineProperty(_assertThisInitialized(_this41), "userSlides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: [],
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "idle", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "idleTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(
          _assertThisInitialized(_this41),
          "ignoreFocusChange",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this41), "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: p.Init,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "id", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "footer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "caption", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "carousel", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(_assertThisInitialized(_this41), "lastFocus", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null,
        }),
        Object.defineProperty(
          _assertThisInitialized(_this41),
          "prevMouseMoveEvent",
          {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }
        ),
        Object.defineProperty(_assertThisInitialized(_this41), "fsAPI", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (_this41.fsAPI = (function () {
          var t,
            e = "",
            i = "",
            n = "";
          return (
            document.fullscreenEnabled
              ? ((e = "requestFullscreen"),
                (i = "exitFullscreen"),
                (n = "fullscreenElement"))
              : document.webkitFullscreenEnabled &&
                ((e = "webkitRequestFullscreen"),
                (i = "webkitExitFullscreen"),
                (n = "webkitFullscreenElement")),
            e &&
              (t = {
                request: function request(t) {
                  return "webkitRequestFullscreen" === e
                    ? t[e](Element.ALLOW_KEYBOARD_INPUT)
                    : t[e]();
                },
                exit: function exit() {
                  return document[n] && document[i]();
                },
                isFullscreen: function isFullscreen() {
                  return document[n];
                },
              }),
            t
          );
        })()),
        (_this41.id = e.id || ++kt),
        Rt.set(_this41.id, _assertThisInitialized(_this41)),
        (_this41.userSlides = t),
        (_this41.userPlugins = i),
        queueMicrotask(function () {
          _this41.init();
        });
      return _this41;
    }
    _createClass(
      It,
      [
        {
          key: "isIdle",
          get: function get() {
            return this.idle;
          },
        },
        {
          key: "isCompact",
          get: function get() {
            return this.option("compact");
          },
        },
        {
          key: "init",
          value: function init() {
            var _this42 = this;
            if (this.state === p.Destroy) return;
            (this.state = p.Init),
              this.attachPlugins(
                Object.assign(Object.assign({}, It.Plugins), this.userPlugins)
              ),
              this.emit("init"),
              !0 === this.option("hideScrollbar") &&
                (function () {
                  if (!a) return;
                  var t = document.body;
                  if (t.classList.contains(Pt)) return;
                  var e =
                      window.innerWidth -
                      document.documentElement.getBoundingClientRect().width,
                    i = t.currentStyle || window.getComputedStyle(t),
                    n = parseFloat(i.marginRight);
                  document.documentElement.style.setProperty(
                    Ct,
                    "".concat(e, "px")
                  ),
                    n && t.style.setProperty(Mt, "".concat(n, "px")),
                    t.classList.add(Pt);
                })(),
              this.initLayout();
            var t = function t() {
              _this42.initCarousel(_this42.userSlides),
                (_this42.state = p.Ready),
                _this42.attachEvents(),
                _this42.emit("ready"),
                setTimeout(function () {
                  _this42.container &&
                    _this42.container.setAttribute("aria-hidden", "false");
                }, 16);
            };
            this.option("Fullscreen.autoStart") &&
            this.fsAPI &&
            !this.fsAPI.isFullscreen()
              ? this.fsAPI
                  .request(this.container)
                  .then(function () {
                    return t();
                  })
                  ["catch"](function () {
                    return t();
                  })
              : t();
          },
        },
        {
          key: "initLayout",
          value: function initLayout() {
            var _this43 = this;
            var t = this.option("parentEl") || document.body,
              e = n(this.localize(this.option("tpl.main") || ""));
            e &&
              (e.setAttribute("id", "fancybox-".concat(this.id)),
              e.setAttribute("aria-label", this.localize("{{MODAL}}")),
              e.classList.toggle(Ot, this.isCompact),
              F(e, this.option("mainClass") || ""),
              (this.container = e),
              (this.footer = e.querySelector(".fancybox__footer")),
              t.appendChild(e),
              F(document.documentElement, St),
              (zt && Lt) ||
                ((zt = document.createElement("span")),
                F(zt, "fancybox-focus-guard"),
                zt.setAttribute("tabindex", "0"),
                zt.setAttribute("aria-hidden", "true"),
                zt.setAttribute("aria-label", "Focus guard"),
                (Lt = zt.cloneNode()),
                document.body.insertBefore(zt, e),
                document.body.append(Lt)),
              this.option("animated") &&
                (F(e, Tt),
                setTimeout(function () {
                  _this43.isClosing() || D(e, Tt);
                }, 350)),
              this.emit("initLayout"));
          },
        },
        {
          key: "initCarousel",
          value: function initCarousel(t) {
            var _this44 = this;
            var e = this.container;
            if (!e) return;
            var n = e.querySelector(".fancybox__carousel");
            if (!n) return;
            var s = (this.carousel = new Et(
              n,
              i(
                {},
                {
                  slides: t,
                  transition: "fade",
                  Panzoom: {
                    lockAxis: this.option("dragToClose") ? "xy" : "x",
                    infinite: !!this.option("dragToClose") && "y",
                  },
                  Dots: !1,
                  Navigation: {
                    classes: {
                      container: "fancybox__nav",
                      button: "f-button",
                      isNext: "is-next",
                      isPrev: "is-prev",
                    },
                  },
                  initialPage: this.option("startIndex"),
                  l10n: this.option("l10n"),
                },
                this.option("Carousel") || {}
              )
            ));
            s.on("*", function (t, e) {
              for (
                var _len5 = arguments.length,
                  i = new Array(_len5 > 2 ? _len5 - 2 : 0),
                  _key5 = 2;
                _key5 < _len5;
                _key5++
              ) {
                i[_key5 - 2] = arguments[_key5];
              }
              _this44.emit.apply(_this44, ["Carousel.".concat(e), t].concat(i));
            }),
              s.on(["ready", "change"], function () {
                var t;
                var e = _this44.getSlide();
                e &&
                  (null === (t = e.panzoom) ||
                    void 0 === t ||
                    t.updateControls()),
                  _this44.manageCaption(e);
              }),
              s.on("removeSlide", function (t, e) {
                e.closeBtnEl && e.closeBtnEl.remove(),
                  (e.closeBtnEl = void 0),
                  e.captionEl && e.captionEl.remove(),
                  (e.captionEl = void 0),
                  e.spinnerEl && e.spinnerEl.remove(),
                  (e.spinnerEl = void 0),
                  (e.state = void 0);
              }),
              s.on("Panzoom.touchStart", function () {
                _this44.isCompact || _this44.endIdle();
              }),
              s.on("settle", function () {
                _this44.idleTimer ||
                  _this44.isCompact ||
                  !_this44.option("idle") ||
                  _this44.setIdle(),
                  _this44.option("autoFocus") && _this44.checkFocus();
              }),
              this.option("dragToClose") &&
                (s.on("Panzoom.afterTransform", function (t, e) {
                  var i = _this44.getSlide();
                  if (i && S(i.el)) return;
                  var n = _this44.container;
                  if (n) {
                    var _t64 = Math.abs(e.current.f),
                      _i64 =
                        _t64 < 1
                          ? ""
                          : Math.max(
                              0.5,
                              Math.min(
                                1,
                                1 - (_t64 / e.contentRect.fitHeight) * 1.5
                              )
                            );
                    n.style.setProperty("--fancybox-ts", _i64 ? "0s" : ""),
                      n.style.setProperty("--fancybox-opacity", _i64 + "");
                  }
                }),
                s.on("Panzoom.touchEnd", function (t, e, i) {
                  var n;
                  var s = _this44.getSlide();
                  if (s && S(s.el)) return;
                  if (
                    e.isMobile &&
                    document.activeElement &&
                    -1 !==
                      ["TEXTAREA", "INPUT"].indexOf(
                        null === (n = document.activeElement) || void 0 === n
                          ? void 0
                          : n.nodeName
                      )
                  )
                    return;
                  var o = Math.abs(e.dragOffset.y);
                  "y" === e.lockedAxis &&
                    (o >= 200 || (o >= 50 && e.dragOffset.time < 300)) &&
                    (i && i.cancelable && i.preventDefault(),
                    _this44.close(
                      i,
                      "f-throwOut" + (e.current.f < 0 ? "Up" : "Down")
                    ));
                })),
              s.on(["change"], function (t) {
                var e;
                var i =
                  null === (e = _this44.getSlide()) || void 0 === e
                    ? void 0
                    : e.triggerEl;
                if (i) {
                  var _e63 = new CustomEvent("slideTo", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: t.page,
                  });
                  i.dispatchEvent(_e63);
                }
              }),
              s.on(["refresh", "change"], function (t) {
                var e = _this44.container;
                if (!e) return;
                var _iterator43 = _createForOfIteratorHelper(
                    e.querySelectorAll("[data-fancybox-current-index]")
                  ),
                  _step43;
                try {
                  for (_iterator43.s(); !(_step43 = _iterator43.n()).done; ) {
                    var _i67 = _step43.value;
                    _i67.innerHTML = t.page + 1;
                  }
                } catch (err) {
                  _iterator43.e(err);
                } finally {
                  _iterator43.f();
                }
                var _iterator44 = _createForOfIteratorHelper(
                    e.querySelectorAll("[data-fancybox-count]")
                  ),
                  _step44;
                try {
                  for (_iterator44.s(); !(_step44 = _iterator44.n()).done; ) {
                    var _i68 = _step44.value;
                    _i68.innerHTML = t.pages.length;
                  }
                } catch (err) {
                  _iterator44.e(err);
                } finally {
                  _iterator44.f();
                }
                if (!t.isInfinite) {
                  var _iterator45 = _createForOfIteratorHelper(
                      e.querySelectorAll("[data-fancybox-next]")
                    ),
                    _step45;
                  try {
                    for (_iterator45.s(); !(_step45 = _iterator45.n()).done; ) {
                      var _i65 = _step45.value;
                      t.page < t.pages.length - 1
                        ? (_i65.removeAttribute("disabled"),
                          _i65.removeAttribute("tabindex"))
                        : (_i65.setAttribute("disabled", ""),
                          _i65.setAttribute("tabindex", "-1"));
                    }
                  } catch (err) {
                    _iterator45.e(err);
                  } finally {
                    _iterator45.f();
                  }
                  var _iterator46 = _createForOfIteratorHelper(
                      e.querySelectorAll("[data-fancybox-prev]")
                    ),
                    _step46;
                  try {
                    for (_iterator46.s(); !(_step46 = _iterator46.n()).done; ) {
                      var _i66 = _step46.value;
                      t.page > 0
                        ? (_i66.removeAttribute("disabled"),
                          _i66.removeAttribute("tabindex"))
                        : (_i66.setAttribute("disabled", ""),
                          _i66.setAttribute("tabindex", "-1"));
                    }
                  } catch (err) {
                    _iterator46.e(err);
                  } finally {
                    _iterator46.f();
                  }
                }
                var i = _this44.getSlide();
                if (!i) return;
                var n = i.downloadSrc || "";
                n ||
                  "image" !== i.type ||
                  i.error ||
                  "string" != typeof i.src ||
                  (n = i.src);
                var _iterator47 = _createForOfIteratorHelper(
                    e.querySelectorAll("[data-fancybox-download]")
                  ),
                  _step47;
                try {
                  for (_iterator47.s(); !(_step47 = _iterator47.n()).done; ) {
                    var _t65 = _step47.value;
                    var _e64 = i.downloadFilename;
                    n
                      ? (_t65.removeAttribute("disabled"),
                        _t65.removeAttribute("tabindex"),
                        _t65.setAttribute("href", n),
                        _t65.setAttribute("download", _e64 || n),
                        _t65.setAttribute("target", "_blank"))
                      : (_t65.setAttribute("disabled", ""),
                        _t65.setAttribute("tabindex", "-1"),
                        _t65.removeAttribute("href"),
                        _t65.removeAttribute("download"));
                  }
                } catch (err) {
                  _iterator47.e(err);
                } finally {
                  _iterator47.f();
                }
              }),
              this.emit("initCarousel");
          },
        },
        {
          key: "attachEvents",
          value: function attachEvents() {
            var t = this.container;
            t &&
              (t.addEventListener("click", this.onClick, {
                passive: !1,
                capture: !1,
              }),
              t.addEventListener("wheel", this.onWheel, {
                passive: !1,
                capture: !1,
              }),
              document.addEventListener("keydown", this.onKeydown, {
                passive: !1,
                capture: !0,
              }),
              document.addEventListener(
                "visibilitychange",
                this.onVisibilityChange,
                !1
              ),
              document.addEventListener("mousemove", this.onMousemove),
              this.option("trapFocus") &&
                document.addEventListener("focus", this.onFocus, !0),
              window.addEventListener("resize", this.onResize));
          },
        },
        {
          key: "detachEvents",
          value: function detachEvents() {
            var t = this.container;
            t &&
              (document.removeEventListener("keydown", this.onKeydown, {
                passive: !1,
                capture: !0,
              }),
              t.removeEventListener("wheel", this.onWheel, {
                passive: !1,
                capture: !1,
              }),
              t.removeEventListener("click", this.onClick, {
                passive: !1,
                capture: !1,
              }),
              document.removeEventListener("mousemove", this.onMousemove),
              window.removeEventListener("resize", this.onResize),
              document.removeEventListener(
                "visibilitychange",
                this.onVisibilityChange,
                !1
              ),
              document.removeEventListener("focus", this.onFocus, !0));
          },
        },
        {
          key: "onClick",
          value: function onClick(t) {
            var _this45 = this;
            var e, i;
            if (this.isClosing()) return;
            !this.isCompact && this.option("idle") && this.resetIdle();
            var n = t.composedPath()[0];
            if (
              n ===
              (null === (e = this.carousel) || void 0 === e
                ? void 0
                : e.container)
            )
              return;
            if (n.closest(".f-spinner") || n.closest("[data-fancybox-close]"))
              return t.preventDefault(), void this.close(t);
            if (n.closest("[data-fancybox-prev]"))
              return t.preventDefault(), void this.prev();
            if (n.closest("[data-fancybox-next]"))
              return t.preventDefault(), void this.next();
            if (
              this.isCompact &&
              "image" ===
                (null === (i = this.getSlide()) || void 0 === i
                  ? void 0
                  : i.type)
            )
              return void (this.clickTimer
                ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
                : (this.clickTimer = setTimeout(function () {
                    _this45.toggleIdle(), (_this45.clickTimer = null);
                  }, 350)));
            if ((this.emit("click", t), t.defaultPrevented)) return;
            var s = !1;
            var o = document.activeElement;
            if (n.closest(".fancybox__content")) {
              if (o) {
                if (o.closest("[contenteditable]")) return;
                n.matches(l) || o.blur();
              }
              if ((a = window.getSelection()) && "Range" === a.type) return;
              s = this.option("contentClick");
            } else
              n.closest(".fancybox__carousel") &&
                !n.matches(l) &&
                (s = this.option("backdropClick"));
            var a;
            "close" === s
              ? (t.preventDefault(), this.close(t))
              : "next" === s
              ? (t.preventDefault(), this.next())
              : "prev" === s && (t.preventDefault(), this.prev());
          },
        },
        {
          key: "onWheel",
          value: function onWheel(t) {
            var e = this.option("wheel", t),
              i = "slide" === e,
              n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(
                function (t, e) {
                  return Math.abs(e) > Math.abs(t) ? e : t;
                }
              ),
              s = Math.max(-1, Math.min(1, n)),
              o = Date.now();
            this.pwt && o - this.pwt < 300
              ? i && t.preventDefault()
              : ((this.pwt = o),
                this.emit("wheel", t),
                t.defaultPrevented ||
                  ("close" === e
                    ? (t.preventDefault(), this.close(t))
                    : "slide" === e &&
                      (t.preventDefault(), this[s > 0 ? "prev" : "next"]())));
          },
        },
        {
          key: "onKeydown",
          value: function onKeydown(t) {
            if (!this.isTopmost()) return;
            this.isCompact ||
              !this.option("idle") ||
              this.isClosing() ||
              this.resetIdle();
            var e = t.key,
              i = this.option("keyboard");
            if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
            var n = t.composedPath()[0],
              o = document.activeElement && document.activeElement.classList,
              a =
                (o && o.contains("f-button")) ||
                n.dataset.carouselPage ||
                n.dataset.carouselIndex;
            if ("Escape" !== e && !a && s(n)) {
              if (
                n.isContentEditable ||
                -1 !==
                  ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
                    n.nodeName
                  )
              )
                return;
            }
            this.emit("keydown", e, t);
            var r = i[e];
            "function" == typeof this[r] && (t.preventDefault(), this[r]());
          },
        },
        {
          key: "onResize",
          value: function onResize() {
            var t = this.container;
            if (!t) return;
            var e = this.isCompact;
            t.classList.toggle("is-compact", e),
              this.manageCaption(this.getSlide()),
              this.isCompact ? this.clearIdle() : this.endIdle(),
              this.emit("resize");
          },
        },
        {
          key: "onFocus",
          value: function onFocus(t) {
            this.isTopmost() && this.checkFocus(t);
          },
        },
        {
          key: "onMousemove",
          value: function onMousemove(t) {
            (this.prevMouseMoveEvent = t),
              !this.isCompact && this.option("idle") && this.resetIdle();
          },
        },
        {
          key: "onVisibilityChange",
          value: function onVisibilityChange() {
            "visible" === document.visibilityState
              ? this.checkFocus()
              : this.endIdle();
          },
        },
        {
          key: "manageCloseBtn",
          value: function manageCloseBtn(t) {
            var e = this.optionFor(t, "closeButton") || !1;
            if ("auto" === e) {
              var _t66 = this.plugins.Toolbar;
              if (_t66 && _t66.state === at.Ready) return;
            }
            if (!e) return;
            if (!t.contentEl || t.closeBtnEl) return;
            var i = this.option("tpl.closeButton");
            if (i) {
              var _e65 = n(this.localize(i));
              (t.closeBtnEl = t.contentEl.appendChild(_e65)),
                t.el && F(t.el, "has-close-btn");
            }
          },
        },
        {
          key: "manageCaption",
          value: function manageCaption(t) {
            var _this46 = this;
            var e, i;
            var n = "fancybox__caption",
              s = "has-caption",
              o = this.container;
            if (!o) return;
            var a = this.isCompact || this.option("commonCaption"),
              r = !a;
            if (
              (this.caption && this.stop(this.caption),
              r &&
                this.caption &&
                (this.caption.remove(), (this.caption = null)),
              a && !this.caption)
            ) {
              var _iterator48 = _createForOfIteratorHelper(
                  (null === (e = this.carousel) || void 0 === e
                    ? void 0
                    : e.slides) || []
                ),
                _step48;
              try {
                for (_iterator48.s(); !(_step48 = _iterator48.n()).done; ) {
                  var _t67 = _step48.value;
                  _t67.captionEl &&
                    (_t67.captionEl.remove(),
                    (_t67.captionEl = void 0),
                    D(_t67.el, s),
                    null === (i = _t67.el) ||
                      void 0 === i ||
                      i.removeAttribute("aria-labelledby"));
                }
              } catch (err) {
                _iterator48.e(err);
              } finally {
                _iterator48.f();
              }
            }
            if (
              (t || (t = this.getSlide()), !t || (a && !this.isCurrentSlide(t)))
            )
              return;
            var l = t.el;
            var c = this.optionFor(t, "caption", "");
            if ("string" != typeof c || !c.length)
              return void (
                a &&
                this.caption &&
                this.animate(this.caption, "f-fadeOut", function () {
                  var t;
                  null === (t = _this46.caption) || void 0 === t || t.remove(),
                    (_this46.caption = null);
                })
              );
            var h = null;
            if (r) {
              if (((h = t.captionEl || null), l && !h)) {
                var _e66 = "fancybox__caption_"
                  .concat(this.id, "_")
                  .concat(t.index);
                (h = document.createElement("div")),
                  F(h, n),
                  h.setAttribute("id", _e66),
                  (t.captionEl = l.appendChild(h)),
                  F(l, s),
                  l.setAttribute("aria-labelledby", _e66);
              }
            } else {
              if (
                ((h = this.caption), h || (h = o.querySelector("." + n)), !h)
              ) {
                (h = document.createElement("div")),
                  (h.dataset.fancyboxCaption = ""),
                  F(h, n),
                  (h.innerHTML = c);
                (this.footer || o).prepend(h);
              }
              F(o, s), (this.caption = h);
            }
            h && (h.innerHTML = c);
          },
        },
        {
          key: "checkFocus",
          value: function checkFocus(t) {
            var e;
            var i = document.activeElement || null;
            (i &&
              (null === (e = this.container) || void 0 === e
                ? void 0
                : e.contains(i))) ||
              this.focus(t);
          },
        },
        {
          key: "focus",
          value: function focus(t) {
            var e;
            if (this.ignoreFocusChange) return;
            var i = document.activeElement || null,
              n = (null == t ? void 0 : t.target) || null,
              s = this.container,
              o = this.getSlide();
            if (
              !s ||
              !(null === (e = this.carousel) || void 0 === e
                ? void 0
                : e.viewport)
            )
              return;
            if (!t && i && s.contains(i)) return;
            var a = o && o.state === f.Ready ? o.el : null;
            if (!a || a.contains(i) || s === i) return;
            t && t.cancelable && t.preventDefault(),
              (this.ignoreFocusChange = !0);
            var r = Array.from(s.querySelectorAll(l));
            var h = [],
              d = null;
            for (var _i69 = 0, _r5 = r; _i69 < _r5.length; _i69++) {
              var _t68 = _r5[_i69];
              var _e67 =
                  !_t68.offsetParent || _t68.closest('[aria-hidden="true"]'),
                _i70 = a && a.contains(_t68),
                _n16 = !this.carousel.viewport.contains(_t68);
              _t68 === s || ((_i70 || _n16) && !_e67)
                ? (h.push(_t68),
                  void 0 !== _t68.dataset.origTabindex &&
                    (_t68.tabIndex = parseFloat(_t68.dataset.origTabindex)),
                  _t68.removeAttribute("data-orig-tabindex"),
                  (!_t68.hasAttribute("autoFocus") && d) || (d = _t68))
                : ((_t68.dataset.origTabindex =
                    void 0 === _t68.dataset.origTabindex
                      ? _t68.getAttribute("tabindex") || void 0
                      : _t68.dataset.origTabindex),
                  (_t68.tabIndex = -1));
            }
            var u = null;
            t
              ? (!n || h.indexOf(n) < 0) &&
                ((u = d || s),
                h.length &&
                  (i === Lt
                    ? (u = h[0])
                    : (this.lastFocus !== s && i !== zt) ||
                      (u = h[h.length - 1])))
              : (u = o && "image" === o.type ? s : d || s),
              u && c(u),
              (this.lastFocus = document.activeElement),
              (this.ignoreFocusChange = !1);
          },
        },
        {
          key: "next",
          value: function next() {
            var t = this.carousel;
            t && t.pages.length > 1 && t.slideNext();
          },
        },
        {
          key: "prev",
          value: function prev() {
            var t = this.carousel;
            t && t.pages.length > 1 && t.slidePrev();
          },
        },
        {
          key: "jumpTo",
          value: function jumpTo() {
            var _this$carousel;
            this.carousel &&
              (_this$carousel = this.carousel).slideTo.apply(
                _this$carousel,
                arguments
              );
          },
        },
        {
          key: "isTopmost",
          value: function isTopmost() {
            var t;
            return (
              (null === (t = It.getInstance()) || void 0 === t
                ? void 0
                : t.id) == this.id
            );
          },
        },
        {
          key: "animate",
          value: function animate() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : null;
            var e =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : "";
            var i = arguments.length > 2 ? arguments[2] : undefined;
            if (!t || !e) return void (i && i());
            this.stop(t);
            var n = function n(s) {
              s.target === t &&
                t.dataset.animationName &&
                (t.removeEventListener("animationend", n),
                delete t.dataset.animationName,
                i && i(),
                D(t, e));
            };
            (t.dataset.animationName = e),
              t.addEventListener("animationend", n),
              F(t, e);
          },
        },
        {
          key: "stop",
          value: function stop(t) {
            t &&
              t.dispatchEvent(
                new CustomEvent("animationend", {
                  bubbles: !1,
                  cancelable: !0,
                  currentTarget: t,
                })
              );
          },
        },
        {
          key: "setContent",
          value: function setContent(t) {
            var e =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : "";
            var i =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : !0;
            if (this.isClosing()) return;
            var o = t.el;
            if (!o) return;
            var a = null;
            s(e)
              ? ["img", "picture", "iframe", "video", "audio"].includes(
                  e.nodeName.toLowerCase()
                )
                ? ((a = document.createElement("div")), a.appendChild(e))
                : (a = e)
              : "string" == typeof e &&
                ((a = n(e)),
                s(a) ||
                  ((a = document.createElement("div")), (a.innerHTML = e))),
              a instanceof Element &&
                t.filter &&
                !t.error &&
                (a = a.querySelector(t.filter)),
              a instanceof Element
                ? (F(a, "fancybox__content"),
                  t.id && a.setAttribute("id", t.id),
                  ("none" !== a.style.display &&
                    "none" !==
                      getComputedStyle(a).getPropertyValue("display")) ||
                    (a.style.display =
                      t.display || this.option("defaultDisplay") || "flex"),
                  o.classList.add(
                    "has-".concat(t.error ? "error" : t.type || "unknown")
                  ),
                  o.prepend(a),
                  (t.contentEl = a),
                  i && this.revealContent(t),
                  this.manageCloseBtn(t),
                  this.manageCaption(t))
                : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
          },
        },
        {
          key: "revealContent",
          value: function revealContent(t, e) {
            var _this47 = this;
            var i = t.el,
              n = t.contentEl;
            i &&
              n &&
              (this.emit("reveal", t),
              this.hideLoading(t),
              (t.state = f.Opening),
              (e = this.isOpeningSlide(t)
                ? void 0 === e
                  ? this.optionFor(t, "showClass")
                  : e
                : "f-fadeIn")
                ? this.animate(n, e, function () {
                    _this47.done(t);
                  })
                : this.done(t));
          },
        },
        {
          key: "done",
          value: function done(t) {
            var _this48 = this;
            this.isClosing() ||
              ((t.state = f.Ready),
              this.emit("done", t),
              F(t.el, "is-done"),
              this.isCurrentSlide(t) &&
                this.option("autoFocus") &&
                queueMicrotask(function () {
                  _this48.option("autoFocus") &&
                    (_this48.option("autoFocus")
                      ? _this48.focus()
                      : _this48.checkFocus());
                }),
              this.isOpeningSlide(t) &&
                !this.isCompact &&
                this.option("idle") &&
                this.setIdle());
          },
        },
        {
          key: "isCurrentSlide",
          value: function isCurrentSlide(t) {
            var e = this.getSlide();
            return !(!t || !e) && e.index === t.index;
          },
        },
        {
          key: "isOpeningSlide",
          value: function isOpeningSlide(t) {
            var e, i;
            return (
              null ===
                (null === (e = this.carousel) || void 0 === e
                  ? void 0
                  : e.prevPage) &&
              t.index ===
                (null === (i = this.getSlide()) || void 0 === i
                  ? void 0
                  : i.index)
            );
          },
        },
        {
          key: "showLoading",
          value: function showLoading(t) {
            var _this49 = this;
            t.state = f.Loading;
            var e = t.el;
            if (!e) return;
            F(e, At),
              this.emit("loading", t),
              t.spinnerEl ||
                setTimeout(function () {
                  if (
                    !_this49.isClosing() &&
                    !t.spinnerEl &&
                    t.state === f.Loading
                  ) {
                    var _i71 = n(h);
                    (t.spinnerEl = _i71),
                      e.prepend(_i71),
                      _this49.animate(_i71, "f-fadeIn");
                  }
                }, 250);
          },
        },
        {
          key: "hideLoading",
          value: function hideLoading(t) {
            var e = t.el;
            if (!e) return;
            var i = t.spinnerEl;
            this.isClosing()
              ? null == i || i.remove()
              : (D(e, At),
                i &&
                  this.animate(i, "f-fadeOut", function () {
                    i.remove();
                  }),
                t.state === f.Loading &&
                  (this.emit("loaded", t), (t.state = f.Ready)));
          },
        },
        {
          key: "setError",
          value: function setError(t, e) {
            if (this.isClosing()) return;
            this.emit("error"),
              (t.error = e),
              this.hideLoading(t),
              this.clearContent(t);
            var i = document.createElement("div");
            i.classList.add("fancybox-error"),
              (i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>")),
              this.setContent(t, i);
          },
        },
        {
          key: "clearContent",
          value: function clearContent(t) {
            var e;
            null === (e = this.carousel) ||
              void 0 === e ||
              e.emit("removeSlide", t),
              t.contentEl && (t.contentEl.remove(), (t.contentEl = void 0)),
              t.closeBtnEl && (t.closeBtnEl.remove(), (t.closeBtnEl = void 0));
            var i = t.el;
            i &&
              (D(i, At),
              D(i, "has-error"),
              D(i, "has-unknown"),
              D(i, "has-".concat(t.type || "unknown")));
          },
        },
        {
          key: "getSlide",
          value: function getSlide() {
            var t;
            var e = this.carousel;
            return (
              (null ===
                (t =
                  null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) ||
              void 0 === t
                ? void 0
                : t.slides[0]) || void 0
            );
          },
        },
        {
          key: "close",
          value: function close(t, e) {
            var _this50 = this;
            if (this.isClosing()) return;
            var i = new Event("shouldClose", {
              bubbles: !0,
              cancelable: !0,
            });
            if ((this.emit("shouldClose", i, t), i.defaultPrevented)) return;
            t && t.cancelable && (t.preventDefault(), t.stopPropagation());
            var n = this.fsAPI,
              s = function s() {
                _this50.proceedClose(t, e);
              };
            n && n.isFullscreen()
              ? Promise.resolve(n.exit()).then(function () {
                  return s();
                })
              : s();
          },
        },
        {
          key: "clearIdle",
          value: function clearIdle() {
            this.idleTimer && clearTimeout(this.idleTimer),
              (this.idleTimer = null);
          },
        },
        {
          key: "setIdle",
          value: function setIdle() {
            var _this51 = this;
            var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : !1;
            var e = function e() {
              _this51.clearIdle(),
                (_this51.idle = !0),
                F(_this51.container, "is-idle"),
                _this51.emit("setIdle");
            };
            if ((this.clearIdle(), !this.isClosing()))
              if (t) e();
              else {
                var _t69 = this.option("idle");
                _t69 && (this.idleTimer = setTimeout(e, _t69));
              }
          },
        },
        {
          key: "endIdle",
          value: function endIdle() {
            this.clearIdle(),
              this.idle &&
                !this.isClosing() &&
                ((this.idle = !1),
                D(this.container, "is-idle"),
                this.emit("endIdle"));
          },
        },
        {
          key: "resetIdle",
          value: function resetIdle() {
            this.endIdle(), this.setIdle();
          },
        },
        {
          key: "toggleIdle",
          value: function toggleIdle() {
            this.idle ? this.endIdle() : this.setIdle(!0);
          },
        },
        {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            var t = this.fsAPI;
            t &&
              (t.isFullscreen()
                ? t.exit()
                : this.container && t.request(this.container));
          },
        },
        {
          key: "isClosing",
          value: function isClosing() {
            return [p.Closing, p.CustomClosing, p.Destroy].includes(this.state);
          },
        },
        {
          key: "proceedClose",
          value: function proceedClose(t, e) {
            var _this52 = this;
            var i;
            (this.state = p.Closing), this.clearIdle(), this.detachEvents();
            var n = this.container,
              s = this.carousel,
              a = this.getSlide(),
              r =
                a && this.option("placeFocusBack")
                  ? a.triggerEl || this.option("trigger")
                  : null;
            if (
              (r && (o(r) ? c(r) : r.focus()),
              n &&
                (F(n, "is-closing"),
                n.setAttribute("aria-hidden", "true"),
                this.option("animated") && F(n, Tt),
                (n.style.pointerEvents = "none")),
              s)
            ) {
              s.clearTransitions(),
                null === (i = s.panzoom) || void 0 === i || i.destroy();
              var _iterator49 = _createForOfIteratorHelper(s.slides),
                _step49;
              try {
                for (_iterator49.s(); !(_step49 = _iterator49.n()).done; ) {
                  var _t70 = _step49.value;
                  (_t70.state = f.Closing), this.hideLoading(_t70);
                  var _e68 = _t70.contentEl;
                  _e68 && this.stop(_e68);
                  var _i72 = null == _t70 ? void 0 : _t70.panzoom;
                  _i72 &&
                    (_i72.stop(), _i72.detachEvents(), _i72.detachObserver()),
                    this.isCurrentSlide(_t70) || s.emit("removeSlide", _t70);
                }
              } catch (err) {
                _iterator49.e(err);
              } finally {
                _iterator49.f();
              }
            }
            this.emit("close", t),
              this.state !== p.CustomClosing
                ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")),
                  e && a
                    ? (this.animate(a.contentEl, e, function () {
                        s && s.emit("removeSlide", a);
                      }),
                      setTimeout(function () {
                        _this52.destroy();
                      }, 500))
                    : this.destroy())
                : setTimeout(function () {
                    _this52.destroy();
                  }, 500);
          },
        },
        {
          key: "destroy",
          value: function destroy() {
            var t;
            if (this.state === p.Destroy) return;
            (this.state = p.Destroy),
              null === (t = this.carousel) || void 0 === t || t.destroy();
            var e = this.container;
            e && e.remove(), Rt["delete"](this.id);
            var i = It.getInstance();
            i
              ? i.focus()
              : (zt && (zt.remove(), (zt = null)),
                Lt && (Lt.remove(), (Lt = null)),
                D(document.documentElement, St),
                (function () {
                  if (!a) return;
                  var t = document,
                    e = t.body;
                  e.classList.remove(Pt),
                    e.style.setProperty(Mt, ""),
                    t.documentElement.style.setProperty(Ct, "");
                })(),
                this.emit("destroy"));
          },
        },
      ],
      [
        {
          key: "bind",
          value: function bind(t, e, i) {
            if (!a) return;
            var n,
              o = "",
              r = {};
            if (
              (void 0 === t
                ? (n = document.body)
                : "string" == typeof t
                ? ((n = document.body),
                  (o = t),
                  "object" == _typeof(e) && (r = e || {}))
                : ((n = t),
                  "string" == typeof e && (o = e),
                  "object" == _typeof(i) && (r = i || {})),
              !n || !s(n))
            )
              return;
            o = o || "[data-fancybox]";
            var l = It.openers.get(n) || new Map();
            l.set(o, r),
              It.openers.set(n, l),
              1 === l.size && n.addEventListener("click", It.fromEvent);
          },
        },
        {
          key: "unbind",
          value: function unbind(t, e) {
            var i,
              n = "";
            if (
              ("string" == typeof t
                ? ((i = document.body), (n = t))
                : ((i = t), "string" == typeof e && (n = e)),
              !i)
            )
              return;
            var s = It.openers.get(i);
            s && n && s["delete"](n),
              (n && s) ||
                (It.openers["delete"](i),
                i.removeEventListener("click", It.fromEvent));
          },
        },
        {
          key: "destroy",
          value: function destroy() {
            var t;
            for (; (t = It.getInstance()); ) t.destroy();
            var _iterator50 = _createForOfIteratorHelper(It.openers.keys()),
              _step50;
            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done; ) {
                var _t71 = _step50.value;
                _t71.removeEventListener("click", It.fromEvent);
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
            }
            It.openers = new Map();
          },
        },
        {
          key: "fromEvent",
          value: function fromEvent(t) {
            if (t.defaultPrevented) return;
            if (t.button && 0 !== t.button) return;
            if (t.ctrlKey || t.metaKey || t.shiftKey) return;
            var e = t.composedPath()[0];
            var n = e.closest("[data-fancybox-trigger]");
            if (n) {
              var _t72 = n.dataset.fancyboxTrigger || "",
                _i73 = document.querySelectorAll(
                  '[data-fancybox="'.concat(_t72, '"]')
                ),
                _s12 = parseInt(n.dataset.fancyboxIndex || "", 10) || 0;
              e = _i73[_s12] || e;
            }
            if (!(e && e instanceof Element)) return;
            var s, o, a, r;
            if (
              (_toConsumableArray(It.openers)
                .reverse()
                .find(function (_ref9) {
                  var _ref10 = _slicedToArray(_ref9, 2),
                    t = _ref10[0],
                    i = _ref10[1];
                  return !(
                    !t.contains(e) ||
                    !_toConsumableArray(i)
                      .reverse()
                      .find(function (_ref11) {
                        var _ref12 = _slicedToArray(_ref11, 2),
                          i = _ref12[0],
                          n = _ref12[1];
                        var l = e.closest(i);
                        return !!l && ((s = t), (o = i), (a = l), (r = n), !0);
                      })
                  );
                }),
              !s || !o || !a)
            )
              return;
            (r = r || {}), t.preventDefault(), (e = a);
            var l = [],
              c = i({}, u, r);
            (c.event = t), (c.trigger = e), (c.delegate = n);
            var h = c.groupAll,
              d = c.groupAttr,
              p = d && e ? e.getAttribute("".concat(d)) : "";
            if (
              ((!e || p || h) && (l = [].slice.call(s.querySelectorAll(o))),
              e &&
                !h &&
                (l = p
                  ? l.filter(function (t) {
                      return t.getAttribute("".concat(d)) === p;
                    })
                  : [e]),
              !l.length)
            )
              return;
            var f = It.getInstance();
            return f && f.options.trigger && l.indexOf(f.options.trigger) > -1
              ? void 0
              : (e && (c.startIndex = l.indexOf(e)), It.fromNodes(l, c));
          },
        },
        {
          key: "fromNodes",
          value: function fromNodes(t, e) {
            e = i({}, u, e);
            var n = [];
            var _iterator51 = _createForOfIteratorHelper(t),
              _step51;
            try {
              for (_iterator51.s(); !(_step51 = _iterator51.n()).done; ) {
                var _i74 = _step51.value;
                var _t73 = _i74.dataset || {},
                  _s13 =
                    _t73.src ||
                    _i74.getAttribute("href") ||
                    _i74.getAttribute("currentSrc") ||
                    _i74.getAttribute("src") ||
                    void 0;
                var _o10 = void 0;
                var _a6 = e.delegate;
                var _r6 = void 0;
                _a6 &&
                  n.length === e.startIndex &&
                  (_o10 =
                    _a6 instanceof HTMLImageElement
                      ? _a6
                      : _a6.querySelector("img:not([aria-hidden])")),
                  _o10 ||
                    (_o10 =
                      _i74 instanceof HTMLImageElement
                        ? _i74
                        : _i74.querySelector("img:not([aria-hidden])")),
                  _o10 &&
                    ((_r6 = _o10.currentSrc || _o10.src || void 0),
                    !_r6 &&
                      _o10.dataset &&
                      (_r6 =
                        _o10.dataset.lazySrc || _o10.dataset.src || void 0));
                var _l4 = {
                  src: _s13,
                  triggerEl: _i74,
                  thumbEl: _o10,
                  thumbElSrc: _r6,
                  thumbSrc: _r6,
                };
                for (var _e69 in _t73)
                  "fancybox" !== _e69 && (_l4[_e69] = _t73[_e69] + "");
                n.push(_l4);
              }
            } catch (err) {
              _iterator51.e(err);
            } finally {
              _iterator51.f();
            }
            return new It(n, e);
          },
        },
        {
          key: "getInstance",
          value: function getInstance(t) {
            if (t) return Rt.get(t);
            return (
              Array.from(Rt.values())
                .reverse()
                .find(function (t) {
                  return !t.isClosing() && t;
                }) || null
            );
          },
        },
        {
          key: "getSlide",
          value: function getSlide() {
            var t;
            return (
              (null === (t = It.getInstance()) || void 0 === t
                ? void 0
                : t.getSlide()) || null
            );
          },
        },
        {
          key: "show",
          value: function show() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : [];
            var e =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            return new It(t, e);
          },
        },
        {
          key: "next",
          value: function next() {
            var t = It.getInstance();
            t && t.next();
          },
        },
        {
          key: "prev",
          value: function prev() {
            var t = It.getInstance();
            t && t.prev();
          },
        },
        {
          key: "close",
          value: function close() {
            var t =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : !0;
            for (
              var _len6 = arguments.length,
                e = new Array(_len6 > 1 ? _len6 - 1 : 0),
                _key6 = 1;
              _key6 < _len6;
              _key6++
            ) {
              e[_key6 - 1] = arguments[_key6];
            }
            if (t) {
              var _iterator52 = _createForOfIteratorHelper(Rt.values()),
                _step52;
              try {
                for (_iterator52.s(); !(_step52 = _iterator52.n()).done; ) {
                  var _t74 = _step52.value;
                  _t74.close.apply(_t74, e);
                }
              } catch (err) {
                _iterator52.e(err);
              } finally {
                _iterator52.f();
              }
            } else {
              var _t75 = It.getInstance();
              _t75 && _t75.close.apply(_t75, e);
            }
          },
        },
      ]
    );
    return It;
  })(b);
  Object.defineProperty(It, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.14",
  }),
    Object.defineProperty(It, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: u,
    }),
    Object.defineProperty(It, "Plugins", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ht,
    }),
    Object.defineProperty(It, "openers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Map(),
    }),
    (t.Fancybox = It);
});
