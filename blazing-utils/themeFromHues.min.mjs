var it = Object.defineProperty,
  at = Object.defineProperties
var lt = Object.getOwnPropertyDescriptors
var Oe = Object.getOwnPropertySymbols
var st = Object.prototype.hasOwnProperty,
  ut = Object.prototype.propertyIsEnumerable
var Fe = (e, t, r) =>
    t in e
      ? it(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  w = (e, t) => {
    for (var r in t || (t = {})) st.call(t, r) && Fe(e, r, t[r])
    if (Oe) for (var r of Oe(t)) ut.call(t, r) && Fe(e, r, t[r])
    return e
  },
  F = (e, t) => at(e, lt(t))
var Re = {
  code: {
    family:
      'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    sizes: [
      {
        ascenderHeight: 3,
        descenderHeight: 3,
        fontSize: 10,
        iconSize: 17,
        lineHeight: 13,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 4,
        descenderHeight: 4,
        fontSize: 13,
        iconSize: 21,
        lineHeight: 17,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 5,
        descenderHeight: 5,
        fontSize: 16,
        iconSize: 25,
        lineHeight: 21,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 6,
        descenderHeight: 6,
        fontSize: 19,
        iconSize: 29,
        lineHeight: 25,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 7,
        descenderHeight: 7,
        fontSize: 22,
        iconSize: 33,
        lineHeight: 29,
        letterSpacing: 0,
      },
    ],
  },
  heading: {
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
    weights: { regular: 700, medium: 800, semibold: 900, bold: 900 },
    sizes: [
      {
        ascenderHeight: 4,
        descenderHeight: 4,
        fontSize: 12,
        iconSize: 17,
        lineHeight: 17,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 5,
        descenderHeight: 5,
        fontSize: 16,
        iconSize: 25,
        lineHeight: 21,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 6,
        descenderHeight: 6,
        fontSize: 21,
        iconSize: 33,
        lineHeight: 27,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 7,
        descenderHeight: 7,
        fontSize: 27,
        iconSize: 41,
        lineHeight: 33,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 8,
        descenderHeight: 8,
        fontSize: 33,
        iconSize: 49,
        lineHeight: 39,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 9,
        descenderHeight: 9,
        fontSize: 38,
        iconSize: 53,
        lineHeight: 45,
        letterSpacing: 0,
      },
    ],
  },
  label: {
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',
    weights: { regular: 600, medium: 700, semibold: 800, bold: 900 },
    sizes: [
      {
        ascenderHeight: 2,
        descenderHeight: 2,
        fontSize: 9.8,
        iconSize: 15,
        lineHeight: 11,
        letterSpacing: 0.5,
      },
      {
        ascenderHeight: 2,
        descenderHeight: 2,
        fontSize: 11.25,
        iconSize: 17,
        lineHeight: 12,
        letterSpacing: 0.5,
      },
      {
        ascenderHeight: 2,
        descenderHeight: 2,
        fontSize: 12.75,
        iconSize: 19,
        lineHeight: 13,
        letterSpacing: 0.5,
      },
      {
        ascenderHeight: 2,
        descenderHeight: 2,
        fontSize: 14,
        iconSize: 21,
        lineHeight: 14,
        letterSpacing: 0.5,
      },
      {
        ascenderHeight: 2,
        descenderHeight: 2,
        fontSize: 15.5,
        iconSize: 23,
        lineHeight: 15,
        letterSpacing: 0.5,
      },
    ],
  },
  text: {
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
    sizes: [
      {
        ascenderHeight: 3,
        descenderHeight: 3,
        fontSize: 10,
        iconSize: 17,
        lineHeight: 13,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 4,
        descenderHeight: 4,
        fontSize: 13,
        iconSize: 21,
        lineHeight: 17,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 5,
        descenderHeight: 5,
        fontSize: 16,
        iconSize: 25,
        lineHeight: 21,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 6,
        descenderHeight: 6,
        fontSize: 19,
        iconSize: 29,
        lineHeight: 25,
        letterSpacing: 0,
      },
      {
        ascenderHeight: 7,
        descenderHeight: 7,
        fontSize: 22,
        iconSize: 33,
        lineHeight: 29,
        letterSpacing: 0,
      },
    ],
  },
}
var Be = {
  avatar: {
    sizes: [
      { distance: -3, size: 25 },
      { distance: -6, size: 35 },
      { distance: -9, size: 55 },
    ],
  },
  button: { textWeight: 'medium' },
  container: [320, 640, 960, 1280, 1600, 1920],
  focusRing: { offset: 1, width: 2 },
  fonts: Re,
  media: [360, 600, 900, 1200, 1800, 2400],
  radius: [0, 1, 3, 6, 9, 12, 21],
  shadows: [
    null,
    { umbra: [0, 0, 0, 0], penumbra: [0, 0, 0, 0], ambient: [0, 0, 0, 0] },
    { umbra: [0, 3, 5, -1], penumbra: [0, 6, 10, 0], ambient: [0, 1, 18, 0] },
    { umbra: [0, 7, 8, -4], penumbra: [0, 12, 17, 2], ambient: [0, 5, 22, 4] },
    { umbra: [0, 9, 11, -5], penumbra: [0, 18, 28, 2], ambient: [0, 7, 34, 6] },
    {
      umbra: [0, 11, 15, -7],
      penumbra: [0, 24, 38, 3],
      ambient: [0, 9, 46, 8],
    },
  ],
  space: [0, 4, 8, 12, 20, 32, 52, 84, 136, 220],
  input: {
    checkbox: { size: 17 },
    radio: { size: 17, markSize: 9 },
    switch: {
      width: 33,
      height: 17,
      padding: 4,
      transitionDurationMs: 150,
      transitionTimingFunction: 'ease-out',
    },
    border: { width: 1 },
  },
}
var ft = '#101112',
  ct = '#fff',
  dt = {
    50: { title: 'Gray 50', hex: '#f2f3f5' },
    100: { title: 'Gray 100', hex: '#e6e8ec' },
    200: { title: 'Gray 200', hex: '#ced2d9' },
    300: { title: 'Gray 300', hex: '#b6bcc6' },
    400: { title: 'Gray 400', hex: '#9ea6b3' },
    500: { title: 'Gray 500', hex: '#8690a0' },
    600: { title: 'Gray 600', hex: '#6e7683' },
    700: { title: 'Gray 700', hex: '#565d67' },
    800: { title: 'Gray 800', hex: '#3f434a' },
    900: { title: 'Gray 900', hex: '#272a2e' },
    950: { title: 'Gray 950', hex: '#1b1d20' },
  },
  ht = {
    50: { title: 'Blue 50', hex: '#e8f1fe' },
    100: { title: 'Blue 100', hex: '#d2e3fe' },
    200: { title: 'Blue 200', hex: '#a6c8fd' },
    300: { title: 'Blue 300', hex: '#7aacfd' },
    400: { title: 'Blue 400', hex: '#4e91fc' },
    500: { title: 'Blue 500', hex: '#2276fc' },
    600: { title: 'Blue 600', hex: '#1e61cd' },
    700: { title: 'Blue 700', hex: '#1a4d9e' },
    800: { title: 'Blue 800', hex: '#17396f' },
    900: { title: 'Blue 900', hex: '#132540' },
    950: { title: 'Blue 950', hex: '#111b29' },
  },
  pt = {
    50: { title: 'Purple 50', hex: '#f8e9fe' },
    100: { title: 'Purple 100', hex: '#f2d3fe' },
    200: { title: 'Purple 200', hex: '#e6a7fd' },
    300: { title: 'Purple 300', hex: '#d97bfd' },
    400: { title: 'Purple 400', hex: '#cd4efc' },
    500: { title: 'Purple 500', hex: '#c123fc' },
    600: { title: 'Purple 600', hex: '#9d1fcd' },
    700: { title: 'Purple 700', hex: '#7a1b9e' },
    800: { title: 'Purple 800', hex: '#56186f' },
    900: { title: 'Purple 900', hex: '#331440' },
    950: { title: 'Purple 950', hex: '#211229' },
  },
  mt = {
    50: { title: 'Magenta 50', hex: '#fcebf5' },
    100: { title: 'Magenta 100', hex: '#f9d7eb' },
    200: { title: 'Magenta 200', hex: '#f4afd8' },
    300: { title: 'Magenta 300', hex: '#ef87c4' },
    400: { title: 'Magenta 400', hex: '#ea5fb1' },
    500: { title: 'Magenta 500', hex: '#e5389e' },
    600: { title: 'Magenta 600', hex: '#ba3082' },
    700: { title: 'Magenta 700', hex: '#8f2866' },
    800: { title: 'Magenta 800', hex: '#65204a' },
    900: { title: 'Magenta 900', hex: '#3a182d' },
    950: { title: 'Magenta 950', hex: '#25141f' },
  },
  gt = {
    50: { title: 'Red 50', hex: '#fdebea' },
    100: { title: 'Red 100', hex: '#fcd8d5' },
    200: { title: 'Red 200', hex: '#f9b1ab' },
    300: { title: 'Red 300', hex: '#f68b82' },
    400: { title: 'Red 400', hex: '#f36458' },
    500: { title: 'Red 500', hex: '#f03e2f' },
    600: { title: 'Red 600', hex: '#c33529' },
    700: { title: 'Red 700', hex: '#962c23' },
    800: { title: 'Red 800', hex: '#69231d' },
    900: { title: 'Red 900', hex: '#3c1a17' },
    950: { title: 'Red 950', hex: '#261514' },
  },
  bt = {
    50: { title: 'Orange 50', hex: '#fef0e6' },
    100: { title: 'Orange 100', hex: '#fee2ce' },
    200: { title: 'Orange 200', hex: '#fdc59d' },
    300: { title: 'Orange 300', hex: '#fca86d' },
    400: { title: 'Orange 400', hex: '#fb8b3c' },
    500: { title: 'Orange 500', hex: '#e57322' },
    600: { title: 'Orange 600', hex: '#ba5f1f' },
    700: { title: 'Orange 700', hex: '#904b1b' },
    800: { title: 'Orange 800', hex: '#653818' },
    900: { title: 'Orange 900', hex: '#3a2415' },
    950: { title: 'Orange 950', hex: '#251a13' },
  },
  xt = {
    50: { title: 'Yellow 50', hex: '#fef7da' },
    100: { title: 'Yellow 100', hex: '#fdefb6' },
    200: { title: 'Yellow 200', hex: '#fcdf6d' },
    300: { title: 'Yellow 300', hex: '#fbd024' },
    400: { title: 'Yellow 400', hex: '#d9b421' },
    500: { title: 'Yellow 500', hex: '#b7991e' },
    600: { title: 'Yellow 600', hex: '#967e1c' },
    700: { title: 'Yellow 700', hex: '#746219' },
    800: { title: 'Yellow 800', hex: '#534717' },
    900: { title: 'Yellow 900', hex: '#312c14' },
    950: { title: 'Yellow 950', hex: '#201e13' },
  },
  yt = {
    50: { title: 'Green 50', hex: '#e7f9ed' },
    100: { title: 'Green 100', hex: '#d0f4dc' },
    200: { title: 'Green 200', hex: '#a1eaba' },
    300: { title: 'Green 300', hex: '#72e097' },
    400: { title: 'Green 400', hex: '#43d675' },
    500: { title: 'Green 500', hex: '#3ab564' },
    600: { title: 'Green 600', hex: '#329454' },
    700: { title: 'Green 700', hex: '#297343' },
    800: { title: 'Green 800', hex: '#215233' },
    900: { title: 'Green 900', hex: '#183122' },
    950: { title: 'Green 950', hex: '#14211a' },
  },
  vt = {
    50: { title: 'Cyan 50', hex: '#e3fafd' },
    100: { title: 'Cyan 100', hex: '#c7f5fc' },
    200: { title: 'Cyan 200', hex: '#90ecf9' },
    300: { title: 'Cyan 300', hex: '#59e3f6' },
    400: { title: 'Cyan 400', hex: '#22daf4' },
    500: { title: 'Cyan 500', hex: '#1fb8ce' },
    600: { title: 'Cyan 600', hex: '#1c97a8' },
    700: { title: 'Cyan 700', hex: '#197583' },
    800: { title: 'Cyan 800', hex: '#16545d' },
    900: { title: 'Cyan 900', hex: '#133237' },
    950: { title: 'Cyan 950', hex: '#112124' },
  },
  Me = {
    gray: dt,
    blue: ht,
    purple: pt,
    magenta: mt,
    red: gt,
    orange: bt,
    yellow: xt,
    green: yt,
    cyan: vt,
  }
var Ae = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
  ],
  Ie = { title: 'Black', hex: ft },
  Pe = { title: 'White', hex: ct }
var D = Pe.hex,
  U = Ie.hex,
  K = ['default', 'transparent'],
  {
    blue: Q,
    cyan: de,
    gray: H,
    green: oe,
    magenta: ie,
    orange: ae,
    purple: j,
    red: L,
    yellow: $,
  } = Me
function je(e) {
  return {
    default: w(
      { lightest: D, darkest: U, mid: '#8690A0', midPoint: 500 },
      e.default
    ),
    primary: w(
      { lightest: D, darkest: U, mid: '#2276FC', midPoint: 500 },
      e.primary
    ),
    transparent: w(
      { lightest: D, darkest: U, mid: '#8690A0', midPoint: 500 },
      e.transparent
    ),
    positive: w(
      { lightest: D, darkest: U, mid: '#43D675', midPoint: 400 },
      e.positive
    ),
    caution: w(
      { lightest: D, darkest: U, mid: '#FBD024', midPoint: 300 },
      e.caution
    ),
    critical: w(
      { lightest: D, darkest: U, mid: '#F03E2F', midPoint: 500 },
      e.critical
    ),
  }
}
function O() {
  return (
    (O = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    O.apply(this, arguments)
  )
}
function he(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e
}
function G(e, t) {
  return (
    (G = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n
        }),
    G(e, t)
  )
}
function pe(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    G(e, t)
}
function k(e) {
  return (
    (k = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r)
        }),
    k(e)
  )
}
function me(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch (t) {
    return typeof e == 'function'
  }
}
function le() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
  } catch (t) {}
  return (le = function () {
    return !!e
  })()
}
function ge(e, t, r) {
  if (le()) return Reflect.construct.apply(null, arguments)
  var n = [null]
  n.push.apply(n, t)
  var o = new (e.bind.apply(e, n))()
  return r && G(o, r.prototype), o
}
function ee(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (ee = function (n) {
      if (n === null || !me(n)) return n
      if (typeof n != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      if (typeof t < 'u') {
        if (t.has(n)) return t.get(n)
        t.set(n, o)
      }
      function o() {
        return ge(n, arguments, k(this).constructor)
      }
      return (
        (o.prototype = Object.create(n.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        G(o, n)
      )
    }),
    ee(e)
  )
}
var R = (function (e) {
  pe(t, e)
  function t(r) {
    var n
    if (!0)
      n =
        e.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            r +
            ' for more information.'
        ) || this
    else for (var o, c, x; x < o; x++);
    return he(n)
  }
  return t
})(ee(Error))
function $e(e, t) {
  return e.substr(-t.length) === t
}
var St = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
function Le(e) {
  if (typeof e != 'string') return e
  var t = e.match(St)
  return t ? parseFloat(e) : e
}
var Tt = function (t) {
    return function (r, n) {
      n === void 0 && (n = '16px')
      var o = r,
        c = n
      if (typeof r == 'string') {
        if (!$e(r, 'px')) throw new R(69, t, r)
        o = Le(r)
      }
      if (typeof n == 'string') {
        if (!$e(n, 'px')) throw new R(70, t, n)
        c = Le(n)
      }
      if (typeof o == 'string') throw new R(71, r, t)
      if (typeof c == 'string') throw new R(72, n, t)
      return '' + o / c + t
    }
  },
  Ee = Tt,
  Ur = Ee('em')
var qr = Ee('rem')
function be(e) {
  return Math.round(e * 255)
}
function wt(e, t, r) {
  return be(e) + ',' + be(t) + ',' + be(r)
}
function te(e, t, r, n) {
  if ((n === void 0 && (n = wt), t === 0)) return n(r, r, r)
  var o = (((e % 360) + 360) % 360) / 60,
    c = (1 - Math.abs(2 * r - 1)) * t,
    x = c * (1 - Math.abs((o % 2) - 1)),
    g = 0,
    S = 0,
    b = 0
  o >= 0 && o < 1
    ? ((g = c), (S = x))
    : o >= 1 && o < 2
    ? ((g = x), (S = c))
    : o >= 2 && o < 3
    ? ((S = c), (b = x))
    : o >= 3 && o < 4
    ? ((S = x), (b = c))
    : o >= 4 && o < 5
    ? ((g = x), (b = c))
    : o >= 5 && o < 6 && ((g = c), (b = x))
  var I = r - c / 2,
    z = g + I,
    C = S + I,
    W = b + I
  return n(z, C, W)
}
var Ge = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
}
function Ct(e) {
  if (typeof e != 'string') return e
  var t = e.toLowerCase()
  return Ge[t] ? '#' + Ge[t] : e
}
var zt = /^#[a-fA-F0-9]{6}$/,
  Ht = /^#[a-fA-F0-9]{8}$/,
  Ot = /^#[a-fA-F0-9]{3}$/,
  Ft = /^#[a-fA-F0-9]{4}$/,
  xe = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  Rt =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  Bt =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  Mt =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function J(e) {
  if (typeof e != 'string') throw new R(3)
  var t = Ct(e)
  if (t.match(zt))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
    }
  if (t.match(Ht)) {
    var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[2], 16),
      green: parseInt('' + t[3] + t[4], 16),
      blue: parseInt('' + t[5] + t[6], 16),
      alpha: r,
    }
  }
  if (t.match(Ot))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
    }
  if (t.match(Ft)) {
    var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
    return {
      red: parseInt('' + t[1] + t[1], 16),
      green: parseInt('' + t[2] + t[2], 16),
      blue: parseInt('' + t[3] + t[3], 16),
      alpha: n,
    }
  }
  var o = xe.exec(t)
  if (o)
    return {
      red: parseInt('' + o[1], 10),
      green: parseInt('' + o[2], 10),
      blue: parseInt('' + o[3], 10),
    }
  var c = Rt.exec(t.substring(0, 50))
  if (c)
    return {
      red: parseInt('' + c[1], 10),
      green: parseInt('' + c[2], 10),
      blue: parseInt('' + c[3], 10),
      alpha:
        parseFloat('' + c[4]) > 1
          ? parseFloat('' + c[4]) / 100
          : parseFloat('' + c[4]),
    }
  var x = Bt.exec(t)
  if (x) {
    var g = parseInt('' + x[1], 10),
      S = parseInt('' + x[2], 10) / 100,
      b = parseInt('' + x[3], 10) / 100,
      I = 'rgb(' + te(g, S, b) + ')',
      z = xe.exec(I)
    if (!z) throw new R(4, t, I)
    return {
      red: parseInt('' + z[1], 10),
      green: parseInt('' + z[2], 10),
      blue: parseInt('' + z[3], 10),
    }
  }
  var C = Mt.exec(t.substring(0, 50))
  if (C) {
    var W = parseInt('' + C[1], 10),
      i = parseInt('' + C[2], 10) / 100,
      a = parseInt('' + C[3], 10) / 100,
      u = 'rgb(' + te(W, i, a) + ')',
      f = xe.exec(u)
    if (!f) throw new R(4, t, u)
    return {
      red: parseInt('' + f[1], 10),
      green: parseInt('' + f[2], 10),
      blue: parseInt('' + f[3], 10),
      alpha:
        parseFloat('' + C[4]) > 1
          ? parseFloat('' + C[4]) / 100
          : parseFloat('' + C[4]),
    }
  }
  throw new R(5)
}
function At(e) {
  var t = e.red / 255,
    r = e.green / 255,
    n = e.blue / 255,
    o = Math.max(t, r, n),
    c = Math.min(t, r, n),
    x = (o + c) / 2
  if (o === c)
    return e.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: x, alpha: e.alpha }
      : { hue: 0, saturation: 0, lightness: x }
  var g,
    S = o - c,
    b = x > 0.5 ? S / (2 - o - c) : S / (o + c)
  switch (o) {
    case t:
      g = (r - n) / S + (r < n ? 6 : 0)
      break
    case r:
      g = (n - t) / S + 2
      break
    default:
      g = (t - r) / S + 4
      break
  }
  return (
    (g *= 60),
    e.alpha !== void 0
      ? { hue: g, saturation: b, lightness: x, alpha: e.alpha }
      : { hue: g, saturation: b, lightness: x }
  )
}
function E(e) {
  return At(J(e))
}
var It = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? '#' + t[1] + t[3] + t[5]
      : t
  },
  ve = It
function q(e) {
  var t = e.toString(16)
  return t.length === 1 ? '0' + t : t
}
function ye(e) {
  return q(Math.round(e * 255))
}
function Pt(e, t, r) {
  return ve('#' + ye(e) + ye(t) + ye(r))
}
function se(e, t, r) {
  return te(e, t, r, Pt)
}
function jt(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return se(e, t, r)
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return se(e.hue, e.saturation, e.lightness)
  throw new R(1)
}
function $t(e, t, r, n) {
  if (
    typeof e == 'number' &&
    typeof t == 'number' &&
    typeof r == 'number' &&
    typeof n == 'number'
  )
    return n >= 1 ? se(e, t, r) : 'rgba(' + te(e, t, r) + ',' + n + ')'
  if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1
      ? se(e.hue, e.saturation, e.lightness)
      : 'rgba(' + te(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
  throw new R(2)
}
function Se(e, t, r) {
  if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
    return ve('#' + q(e) + q(t) + q(r))
  if (typeof e == 'object' && t === void 0 && r === void 0)
    return ve('#' + q(e.red) + q(e.green) + q(e.blue))
  throw new R(6)
}
function ue(e, t, r, n) {
  if (typeof e == 'string' && typeof t == 'number') {
    var o = J(e)
    return 'rgba(' + o.red + ',' + o.green + ',' + o.blue + ',' + t + ')'
  } else {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1
        ? Se(e, t, r)
        : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? Se(e.red, e.green, e.blue)
        : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
  }
  throw new R(7)
}
var Lt = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    )
  },
  Gt = function (t) {
    return (
      typeof t.red == 'number' &&
      typeof t.green == 'number' &&
      typeof t.blue == 'number' &&
      typeof t.alpha == 'number'
    )
  },
  Et = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      (typeof t.alpha != 'number' || typeof t.alpha > 'u')
    )
  },
  Nt = function (t) {
    return (
      typeof t.hue == 'number' &&
      typeof t.saturation == 'number' &&
      typeof t.lightness == 'number' &&
      typeof t.alpha == 'number'
    )
  }
function N(e) {
  if (typeof e != 'object') throw new R(8)
  if (Gt(e)) return ue(e)
  if (Lt(e)) return Se(e)
  if (Nt(e)) return $t(e)
  if (Et(e)) return jt(e)
  throw new R(8)
}
function Ne(e, t, r) {
  return function () {
    var o = r.concat(Array.prototype.slice.call(arguments))
    return o.length >= t ? e.apply(this, o) : Ne(e, t, o)
  }
}
function B(e) {
  return Ne(e, e.length, [])
}
function Wt(e, t) {
  if (t === 'transparent') return t
  var r = E(t)
  return N(O({}, r, { hue: r.hue + parseFloat(e) }))
}
var Yr = B(Wt)
function Z(e, t, r) {
  return Math.max(e, Math.min(t, r))
}
function Dt(e, t) {
  if (t === 'transparent') return t
  var r = E(t)
  return N(O({}, r, { lightness: Z(0, 1, r.lightness - parseFloat(e)) }))
}
var Kr = B(Dt)
function Ut(e, t) {
  if (t === 'transparent') return t
  var r = E(t)
  return N(O({}, r, { saturation: Z(0, 1, r.saturation - parseFloat(e)) }))
}
var Qr = B(Ut)
function qt(e, t) {
  if (t === 'transparent') return t
  var r = E(t)
  return N(O({}, r, { lightness: Z(0, 1, r.lightness + parseFloat(e)) }))
}
var Jr = B(qt)
function Yt(e, t, r) {
  if (t === 'transparent') return r
  if (r === 'transparent') return t
  if (e === 0) return r
  var n = J(t),
    o = O({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
    c = J(r),
    x = O({}, c, { alpha: typeof c.alpha == 'number' ? c.alpha : 1 }),
    g = o.alpha - x.alpha,
    S = parseFloat(e) * 2 - 1,
    b = S * g === -1 ? S : S + g,
    I = 1 + S * g,
    z = (b / I + 1) / 2,
    C = 1 - z,
    W = {
      red: Math.floor(o.red * z + x.red * C),
      green: Math.floor(o.green * z + x.green * C),
      blue: Math.floor(o.blue * z + x.blue * C),
      alpha: o.alpha * parseFloat(e) + x.alpha * (1 - parseFloat(e)),
    }
  return ue(W)
}
var Kt = B(Yt),
  re = Kt
function Qt(e, t) {
  if (t === 'transparent') return t
  var r = J(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = O({}, r, { alpha: Z(0, 1, (n * 100 + parseFloat(e) * 100) / 100) })
  return ue(o)
}
var Zr = B(Qt)
function Jt(e, t) {
  if (t === 'transparent') return t
  var r = E(t)
  return N(O({}, r, { saturation: Z(0, 1, r.saturation + parseFloat(e)) }))
}
var Xr = B(Jt)
function Zt(e, t) {
  return t === 'transparent' ? t : N(O({}, E(t), { hue: parseFloat(e) }))
}
var Vr = B(Zt)
function Xt(e, t) {
  return t === 'transparent' ? t : N(O({}, E(t), { lightness: parseFloat(e) }))
}
var _r = B(Xt)
function Vt(e, t) {
  return t === 'transparent' ? t : N(O({}, E(t), { saturation: parseFloat(e) }))
}
var kr = B(Vt)
function _t(e, t) {
  return t === 'transparent' ? t : re(parseFloat(e), 'rgb(0, 0, 0)', t)
}
var en = B(_t)
function kt(e, t) {
  return t === 'transparent' ? t : re(parseFloat(e), 'rgb(255, 255, 255)', t)
}
var tn = B(kt)
function er(e, t) {
  if (t === 'transparent') return t
  var r = J(t),
    n = typeof r.alpha == 'number' ? r.alpha : 1,
    o = O({}, r, {
      alpha: Z(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    })
  return ue(o)
}
var rn = B(er)
function We(e, t) {
  let r = Number(t),
    n = e.midPoint || 500,
    o = 1e3 - n,
    c = r / n,
    x = (r - n) / o
  return r === n
    ? e.mid.toLowerCase()
    : r < n
    ? re(c, e.mid, e.lightest)
    : re(x, e.darkest, e.mid)
}
function X(e, t) {
  let r = {}
  return Ae.reduce(
    (o, c) => ((o[c] = { title: `${t} ${c}`, hex: We(e, c) }), o),
    r
  )
}
function De(e) {
  return {
    default: X(e.default, 'Default'),
    primary: X(e.primary, 'Primary'),
    transparent: X(e.transparent, 'Transparent'),
    positive: X(e.positive, 'Positive'),
    caution: X(e.caution, 'Caution'),
    critical: X(e.critical, 'Critical'),
  }
}
function tr(e) {
  switch (e) {
    case 'blue':
      return Q
    case 'cyan':
      return de
    case 'gray':
      return H
    case 'green':
      return oe
    case 'magenta':
      return ie
    case 'orange':
      return ae
    case 'purple':
      return j
    case 'red':
      return L
    case 'yellow':
      return $
    default:
      throw new Error(`Unknown tint: ${e}`)
  }
}
function Ue({
  hues: e,
  studioTheme: t,
  multiply: r,
  screen: n,
  rgba: o,
  createColorTheme: c,
}) {
  let x = je(e),
    g = { title: 'Black', hex: x.default.darkest },
    S = { title: 'white', hex: x.default.lightest },
    b = De(x),
    I = b.primary,
    z = b.critical,
    C = b.primary,
    W = c({
      base: ({ dark: i, name: a }) => {
        if (a === 'default') {
          let h = i ? b.transparent[900].hex : b.transparent[100].hex
          return {
            fg: i ? S.hex : g.hex,
            bg: i ? g.hex : S.hex,
            border: b.transparent[i ? 800 : 200].hex,
            focusRing: I[500].hex,
            shadow: {
              outline: o(b.transparent[500].hex, 0.4),
              umbra: o(i ? g.hex : b.transparent[500].hex, 0.2),
              penumbra: o(i ? g.hex : b.transparent[500].hex, 0.14),
              ambient: o(i ? g.hex : b.transparent[500].hex, 0.12),
            },
            skeleton: { from: h, to: o(h, 0.5) },
          }
        }
        if (a === 'transparent') {
          let h = b.default,
            l = h[i ? 800 : 200].hex
          return {
            fg: h[i ? 100 : 900].hex,
            bg: h[i ? 950 : 50].hex,
            border: h[i ? 800 : 300].hex,
            focusRing: I[500].hex,
            shadow: {
              outline: o(h[500].hex, i ? 0.2 : 0.4),
              umbra: o(i ? g.hex : h[500].hex, 0.2),
              penumbra: o(i ? g.hex : h[500].hex, 0.14),
              ambient: o(i ? g.hex : h[500].hex, 0.12),
            },
            skeleton: { from: l, to: o(l, 0.5) },
          }
        }
        let u = b[a] || b.default,
          f = u[i ? 800 : 200].hex
        return {
          fg: u[i ? 100 : 900].hex,
          bg: u[i ? 950 : 50].hex,
          border: u[i ? 800 : 200].hex,
          focusRing: u[500].hex,
          shadow: {
            outline: o(u[500].hex, i ? 0.2 : 0.4),
            umbra: o(i ? g.hex : u[500].hex, 0.2),
            penumbra: o(i ? g.hex : u[500].hex, 0.14),
            ambient: o(i ? g.hex : u[500].hex, 0.12),
          },
          skeleton: { from: f, to: o(f, 0.5) },
        }
      },
      solid: ({ base: i, dark: a, name: u, state: f, tone: h }) => {
        let l = a ? n : r,
          T = a ? r : n,
          M = b[u] || b.default,
          d = K.includes(u) && K.includes(h),
          p = b[h === 'default' ? u : h] || M
        if (f === 'disabled') {
          p = M
          let y = l(i.bg, p[a ? 800 : 200].hex),
            P = T(y, p[a ? 200 : 800].hex)
          return {
            bg: y,
            bg2: T(y, p[a ? 50 : 950].hex),
            border: l(i.bg, p[a ? 800 : 200].hex),
            fg: l(i.bg, a ? g.hex : S.hex),
            muted: { fg: l(i.bg, p[a ? 950 : 50].hex) },
            accent: { fg: l(i.bg, p[a ? 950 : 50].hex) },
            link: { fg: l(i.bg, p[a ? 950 : 50].hex) },
            code: { bg: y, fg: l(i.bg, p[a ? 950 : 50].hex) },
            skeleton: { from: P, to: o(P, 0.5) },
          }
        }
        if (f === 'hovered') {
          let y = l(i.bg, p[a ? 300 : 600].hex),
            P = T(y, p[a ? 200 : 800].hex)
          return {
            bg: y,
            bg2: T(y, p[a ? 50 : 950].hex),
            border: l(i.bg, p[a ? 300 : 600].hex),
            fg: l(i.bg, a ? g.hex : S.hex),
            muted: { fg: l(i.bg, p[a ? 800 : 200].hex) },
            accent: { fg: T(y, z[a ? 800 : 200].hex) },
            link: { fg: T(y, C[a ? 800 : 200].hex) },
            code: {
              bg: l(y, p[a ? 950 : 50].hex),
              fg: l(i.bg, p[a ? 800 : 200].hex),
            },
            skeleton: { from: P, to: o(P, 0.5) },
          }
        }
        if (f === 'pressed') {
          let y = l(i.bg, p[a ? 200 : 800].hex),
            P = T(y, p[a ? 200 : 800].hex)
          return {
            bg: l(i.bg, p[a ? 200 : 800].hex),
            bg2: T(y, p[a ? 50 : 950].hex),
            border: l(i.bg, p[a ? 200 : 800].hex),
            fg: l(i.bg, a ? g.hex : S.hex),
            muted: { fg: l(i.bg, p[a ? 800 : 200].hex) },
            accent: { fg: T(y, z[a ? 800 : 200].hex) },
            link: { fg: T(y, C[a ? 800 : 200].hex) },
            code: {
              bg: l(y, p[a ? 950 : 50].hex),
              fg: l(i.bg, p[a ? 800 : 200].hex),
            },
            skeleton: { from: P, to: o(P, 0.5) },
          }
        }
        if (f === 'selected') {
          d && (p = b.primary)
          let y = l(i.bg, p[a ? 200 : 800].hex),
            P = T(y, p[a ? 200 : 800].hex)
          return {
            bg: y,
            bg2: T(y, p[a ? 50 : 950].hex),
            border: l(i.bg, p[a ? 200 : 800].hex),
            fg: l(i.bg, a ? g.hex : S.hex),
            muted: { fg: l(i.bg, p[a ? 800 : 200].hex) },
            accent: { fg: T(y, z[a ? 800 : 200].hex) },
            link: { fg: T(y, C[a ? 800 : 200].hex) },
            code: {
              bg: l(y, p[a ? 950 : 50].hex),
              fg: l(i.bg, p[a ? 800 : 200].hex),
            },
            skeleton: { from: P, to: o(P, 0.5) },
          }
        }
        let A = l(i.bg, p[a ? 400 : 500].hex),
          v = T(A, p[a ? 200 : 800].hex)
        return {
          bg: A,
          bg2: T(A, p[a ? 50 : 950].hex),
          border: l(i.bg, p[a ? 400 : 500].hex),
          fg: l(i.bg, a ? g.hex : S.hex),
          muted: { fg: l(i.bg, p[a ? 900 : 100].hex) },
          accent: { fg: T(A, z[a ? 900 : 100].hex) },
          link: { fg: T(A, C[a ? 900 : 100].hex) },
          code: {
            bg: l(A, p[a ? 950 : 50].hex),
            fg: l(i.bg, p[a ? 900 : 100].hex),
          },
          skeleton: { from: v, to: o(v, 0.5) },
        }
      },
      muted: ({ base: i, dark: a, name: u, state: f, tone: h }) => {
        let l = a ? n : r,
          T = b[u] || b.default,
          M = K.includes(u) && K.includes(h),
          d = b[h === 'default' ? u : h] || T
        if (f === 'disabled') {
          d = T
          let v = i.bg,
            y = l(v, d[a ? 900 : 100].hex)
          return {
            bg: v,
            bg2: l(v, d[a ? 950 : 50].hex),
            border: l(v, d[a ? 950 : 50].hex),
            fg: l(v, d[a ? 800 : 200].hex),
            muted: { fg: l(v, d[a ? 900 : 100].hex) },
            accent: { fg: l(v, d[a ? 900 : 100].hex) },
            link: { fg: l(v, d[a ? 900 : 100].hex) },
            code: { bg: v, fg: l(v, d[a ? 900 : 100].hex) },
            skeleton: { from: o(y, 0.5), to: o(y, 0.25) },
          }
        }
        if (f === 'hovered') {
          M && (d = b.primary)
          let v = l(i.bg, d[a ? 950 : 50].hex),
            y = l(v, d[a ? 900 : 100].hex)
          return {
            bg: v,
            bg2: l(v, d[a ? 950 : 50].hex),
            border: l(v, d[a ? 900 : 100].hex),
            fg: l(i.bg, d[a ? 200 : 800].hex),
            muted: { fg: l(i.bg, d[a ? 400 : 600].hex) },
            accent: { fg: l(i.bg, C[a ? 400 : 500].hex) },
            link: { fg: l(i.bg, C[a ? 400 : 600].hex) },
            code: {
              bg: l(v, d[a ? 950 : 50].hex),
              fg: l(i.bg, d[a ? 400 : 600].hex),
            },
            skeleton: { from: y, to: o(y, 0.5) },
          }
        }
        if (f === 'pressed') {
          M && (d = b.primary)
          let v = l(i.bg, d[a ? 900 : 100].hex),
            y = l(v, d[a ? 900 : 100].hex)
          return {
            bg: v,
            bg2: l(v, d[a ? 950 : 50].hex),
            border: l(v, d[a ? 900 : 100].hex),
            fg: l(i.bg, d[a ? 200 : 800].hex),
            muted: { fg: l(i.bg, d[a ? 400 : 600].hex) },
            accent: { fg: l(v, z[a ? 400 : 500].hex) },
            link: { fg: l(v, C[a ? 400 : 600].hex) },
            code: {
              bg: l(v, d[a ? 950 : 50].hex),
              fg: l(i.bg, d[a ? 400 : 600].hex),
            },
            skeleton: { from: y, to: o(y, 0.5) },
          }
        }
        if (f === 'selected') {
          M && (d = b.primary)
          let v = l(i.bg, d[a ? 900 : 100].hex),
            y = l(v, d[a ? 900 : 100].hex)
          return {
            bg: v,
            bg2: l(v, d[a ? 950 : 50].hex),
            border: l(v, d[a ? 900 : 100].hex),
            fg: l(i.bg, d[a ? 200 : 800].hex),
            muted: { fg: l(i.bg, d[a ? 400 : 600].hex) },
            accent: { fg: l(v, z[a ? 400 : 500].hex) },
            link: { fg: l(v, C[a ? 400 : 600].hex) },
            code: {
              bg: l(v, d[a ? 950 : 50].hex),
              fg: l(i.bg, d[a ? 400 : 600].hex),
            },
            skeleton: { from: y, to: o(y, 0.5) },
          }
        }
        let p = i.bg,
          A = l(p, d[a ? 900 : 100].hex)
        return {
          bg: p,
          bg2: l(p, d[a ? 950 : 50].hex),
          border: l(p, d[a ? 900 : 100].hex),
          fg: l(i.bg, d[a ? 300 : 700].hex),
          muted: { fg: l(i.bg, d[a ? 400 : 600].hex) },
          accent: { fg: l(i.bg, z[a ? 400 : 500].hex) },
          link: { fg: l(i.bg, C[a ? 400 : 600].hex) },
          code: {
            bg: l(i.bg, d[a ? 950 : 50].hex),
            fg: l(i.bg, d[a ? 400 : 600].hex),
          },
          skeleton: { from: A, to: o(A, 0.5) },
        }
      },
      button: ({ base: i, mode: a, muted: u, solid: f }) =>
        a === 'bleed'
          ? {
              enabled: F(w({}, u.enabled), { border: u.enabled.bg }),
              hovered: F(w({}, u.hovered), { border: u.hovered.bg }),
              pressed: F(w({}, u.pressed), { border: u.pressed.bg }),
              selected: F(w({}, u.selected), { border: u.selected.bg }),
              disabled: F(w({}, u.disabled), { border: u.disabled.bg }),
            }
          : a === 'ghost'
          ? F(w({}, f), {
              enabled: F(w({}, u.enabled), { border: i.border }),
              disabled: u.disabled,
            })
          : f,
      card: ({ base: i, dark: a, muted: u, name: f, solid: h, state: l }) => {
        if (l === 'hovered') return u[f].hovered
        if (l === 'disabled') return u[f].disabled
        let T = K.includes(f),
          M = b[f] || b.default,
          d = a ? n : r
        if (l === 'pressed') return T ? u.primary.pressed : u[f].pressed
        if (l === 'selected') return T ? h.primary.enabled : h[f].enabled
        let p = i.bg,
          A = d(i.bg, M[a ? 900 : 100].hex)
        return {
          bg: p,
          bg2: d(p, M[a ? 950 : 50].hex),
          fg: i.fg,
          border: i.border,
          muted: { fg: d(i.bg, M[a ? 400 : 600].hex) },
          accent: { fg: d(i.bg, L[a ? 400 : 500].hex) },
          link: { fg: d(i.bg, Q[a ? 400 : 600].hex) },
          code: { bg: d(i.bg, M[a ? 950 : 50].hex), fg: M[a ? 400 : 600].hex },
          skeleton: { from: A, to: o(A, 0.5) },
        }
      },
      input: ({ base: i, dark: a, mode: u, state: f }) => {
        let h = a ? n : r
        if (u === 'invalid') {
          let l = b.critical
          return {
            bg: h(i.bg, l[a ? 950 : 50].hex),
            fg: h(i.bg, l[a ? 400 : 600].hex),
            border: h(i.bg, l[a ? 800 : 200].hex),
            placeholder: h(i.bg, l[a ? 600 : 400].hex),
          }
        }
        return f === 'hovered'
          ? {
              bg: i.bg,
              fg: i.fg,
              border: h(i.bg, H[a ? 700 : 300].hex),
              placeholder: h(i.bg, H[a ? 600 : 400].hex),
            }
          : f === 'disabled'
          ? {
              bg: h(i.bg, H[a ? 950 : 50].hex),
              fg: h(i.bg, H[a ? 700 : 300].hex),
              border: h(i.bg, H[a ? 900 : 100].hex),
              placeholder: h(i.bg, H[a ? 800 : 200].hex),
            }
          : f === 'readOnly'
          ? {
              bg: h(i.bg, H[a ? 950 : 50].hex),
              fg: h(i.bg, H[a ? 200 : 800].hex),
              border: h(i.bg, H[a ? 800 : 200].hex),
              placeholder: h(i.bg, H[a ? 600 : 400].hex),
            }
          : {
              bg: i.bg,
              fg: i.fg,
              border: i.border,
              placeholder: h(i.bg, H[a ? 600 : 400].hex),
            }
      },
      selectable: ({ base: i, muted: a, tone: u, solid: f, state: h }) =>
        h === 'enabled'
          ? F(w({}, a[u].enabled), { bg: i.bg })
          : h === 'pressed'
          ? u === 'default'
            ? a.primary.pressed
            : a[u].pressed
          : h === 'selected'
          ? u === 'default'
            ? f.primary.enabled
            : f[u].enabled
          : h === 'disabled'
          ? F(w({}, a[u].disabled), { bg: i.bg })
          : a[u][h],
      spot: ({ base: i, dark: a, key: u }) =>
        (a ? n : r)(i.bg, tr(u)[a ? 400 : 500].hex),
      syntax: ({ base: i, dark: a }) => {
        let u = a ? n : r,
          f = a ? 400 : 600,
          h = a ? 600 : 400
        return {
          atrule: u(i.bg, j[f].hex),
          attrName: u(i.bg, oe[f].hex),
          attrValue: u(i.bg, $[f].hex),
          attribute: u(i.bg, $[f].hex),
          boolean: u(i.bg, j[f].hex),
          builtin: u(i.bg, j[f].hex),
          cdata: u(i.bg, $[f].hex),
          char: u(i.bg, $[f].hex),
          class: u(i.bg, ae[f].hex),
          className: u(i.bg, de[f].hex),
          comment: u(i.bg, H[h].hex),
          constant: u(i.bg, j[f].hex),
          deleted: u(i.bg, L[f].hex),
          doctype: u(i.bg, H[h].hex),
          entity: u(i.bg, L[f].hex),
          function: u(i.bg, oe[f].hex),
          hexcode: u(i.bg, Q[f].hex),
          id: u(i.bg, j[f].hex),
          important: u(i.bg, j[f].hex),
          inserted: u(i.bg, $[f].hex),
          keyword: u(i.bg, ie[f].hex),
          number: u(i.bg, j[f].hex),
          operator: u(i.bg, ie[f].hex),
          prolog: u(i.bg, H[h].hex),
          property: u(i.bg, Q[f].hex),
          pseudoClass: u(i.bg, $[f].hex),
          pseudoElement: u(i.bg, $[f].hex),
          punctuation: u(i.bg, H[f].hex),
          regex: u(i.bg, Q[f].hex),
          selector: u(i.bg, L[f].hex),
          string: u(i.bg, $[f].hex),
          symbol: u(i.bg, j[f].hex),
          tag: u(i.bg, L[f].hex),
          unit: u(i.bg, ae[f].hex),
          url: u(i.bg, L[f].hex),
          variable: u(i.bg, L[f].hex),
        }
      },
    })
  return F(w({}, t), { color: W })
}
function Te(e, t) {
  return e * t
}
function qe(e, t) {
  return {
    r: Math.round(we(Te(e.r / 255, t.r / 255) * 255)),
    g: Math.round(we(Te(e.g / 255, t.g / 255) * 255)),
    b: Math.round(we(Te(e.b / 255, t.b / 255) * 255)),
  }
}
function we(e) {
  return Math.max(Math.min(e, 255), 0)
}
function Ce(e, t) {
  return e + t - e * t
}
function Ye(e, t) {
  return {
    r: Math.round(ze(Ce(e.r / 255, t.r / 255) * 255)),
    g: Math.round(ze(Ce(e.g / 255, t.g / 255) * 255)),
    b: Math.round(ze(Ce(e.b / 255, t.b / 255) * 255)),
  }
}
function ze(e) {
  return Math.max(Math.min(e, 255), 0)
}
function Ke(e) {
  if (e.length === 4) {
    let t = e.slice(1, 2),
      r = e.slice(2, 3),
      n = e.slice(3, 4)
    return {
      r: parseInt(t + t, 16),
      g: parseInt(r + r, 16),
      b: parseInt(n + n, 16),
    }
  }
  return {
    r: parseInt(e.slice(1, 3), 16),
    g: parseInt(e.slice(3, 5), 16),
    b: parseInt(e.slice(5, 7), 16),
  }
}
function He({ r: e, g: t, b: r }) {
  return '#' + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1)
}
function Qe(e) {
  let t = e.s / 100,
    r = e.l / 100,
    n = (1 - Math.abs(2 * r - 1)) * t,
    o = n * (1 - Math.abs(((e.h / 60) % 2) - 1)),
    c = r - n / 2,
    x = 0,
    g = 0,
    S = 0
  return (
    0 <= e.h && e.h < 60
      ? ((x = n), (g = o), (S = 0))
      : 60 <= e.h && e.h < 120
      ? ((x = o), (g = n), (S = 0))
      : 120 <= e.h && e.h < 180
      ? ((x = 0), (g = n), (S = o))
      : 180 <= e.h && e.h < 240
      ? ((x = 0), (g = o), (S = n))
      : 240 <= e.h && e.h < 300
      ? ((x = o), (g = 0), (S = n))
      : 300 <= e.h && e.h < 360 && ((x = n), (g = 0), (S = o)),
    {
      r: Math.round((x + c) * 255),
      g: Math.round((g + c) * 255),
      b: Math.round((S + c) * 255),
    }
  )
}
var rr = '0123456789ABCDEFabcdef',
  nr = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i
function or(e) {
  for (let t of e) if (rr.indexOf(t) === -1) return !1
  return !0
}
function ir(e) {
  return e[0] !== '#' || !(e.length === 4 || e.length === 7)
    ? !1
    : or(e.slice(1))
}
function ar(e) {
  let t = nr.exec(e)
  if (!t) throw new Error(`parseHsl: string is not a HSL color: "${e}"`)
  return { h: parseInt(t[1]), s: parseFloat(t[3]), l: parseFloat(t[5]) }
}
function Y(e) {
  if (!e) return { r: 0, g: 0, b: 0 }
  if (typeof e != 'string') throw new Error('parseColor: expected a string')
  if (ir(e)) return Ke(e)
  if (e.startsWith('hsl(')) return Qe(ar(e))
  throw new Error(`parseColor: unexpected color format: "${e}"`)
}
function Je(e, t) {
  let r = Y(e)
  return `rgba(${r.r},${r.g},${r.b},${t})`
}
function fe(e, t, r, n, o, c) {
  return {
    default: e.button({
      base: t,
      dark: r,
      solid: n.default,
      muted: o.default,
      mode: c,
    }),
    primary: e.button({
      base: t,
      dark: r,
      solid: n.primary,
      muted: o.primary,
      mode: c,
    }),
    positive: e.button({
      base: t,
      dark: r,
      solid: n.positive,
      muted: o.positive,
      mode: c,
    }),
    caution: e.button({
      base: t,
      dark: r,
      solid: n.caution,
      muted: o.caution,
      mode: c,
    }),
    critical: e.button({
      base: t,
      dark: r,
      solid: n.critical,
      muted: o.critical,
      mode: c,
    }),
  }
}
function Ze(e, t, r, n, o) {
  return {
    default: fe(e, t, r, n, o, 'default'),
    ghost: fe(e, t, r, n, o, 'ghost'),
    bleed: fe(e, t, r, n, o, 'bleed'),
  }
}
function Xe(e, t, r, n, o, c) {
  return {
    enabled: e.card({
      base: t,
      dark: r,
      name: n,
      state: 'enabled',
      solid: o,
      muted: c,
    }),
    disabled: e.card({
      base: t,
      dark: r,
      name: n,
      state: 'disabled',
      solid: o,
      muted: c,
    }),
    hovered: e.card({
      base: t,
      dark: r,
      name: n,
      state: 'hovered',
      solid: o,
      muted: c,
    }),
    pressed: e.card({
      base: t,
      dark: r,
      name: n,
      state: 'pressed',
      solid: o,
      muted: c,
    }),
    selected: e.card({
      base: t,
      dark: r,
      name: n,
      state: 'selected',
      solid: o,
      muted: c,
    }),
  }
}
var s = 'hsl(0, 0%, 0%)',
  V = 'hsl(0, 0%, 100%)',
  m = {
    default: {
      lightest: 'hsl(0, 0%, 95%)',
      lighter: 'hsl(0, 0%, 70%)',
      light: 'hsl(0, 0%, 65%)',
      base: 'hsl(0, 0%, 50%)',
      dark: 'hsl(0, 0%, 35%)',
      darker: 'hsl(0, 0%, 20%)',
      darkest: 'hsl(0, 0%, 5%)',
    },
    transparent: {
      lightest: 'hsl(240, 100%, 95%)',
      lighter: 'hsl(240, 100%, 70%)',
      light: 'hsl(240, 100%, 65%)',
      base: 'hsl(240, 100%, 50%)',
      dark: 'hsl(240, 100%, 35%)',
      darker: 'hsl(240, 100%, 20%)',
      darkest: 'hsl(240, 100%, 5%)',
    },
    primary: {
      lightest: 'hsl(240, 100%, 95%)',
      lighter: 'hsl(240, 100%, 70%)',
      light: 'hsl(240, 100%, 65%)',
      base: 'hsl(240, 100%, 50%)',
      dark: 'hsl(240, 100%, 35%)',
      darker: 'hsl(240, 100%, 20%)',
      darkest: 'hsl(240, 100%, 5%)',
    },
    positive: {
      lightest: 'hsl(120, 100%, 95%)',
      lighter: 'hsl(120, 100%, 70%)',
      light: 'hsl(120, 100%, 65%)',
      base: 'hsl(120, 100%, 50%)',
      dark: 'hsl(120, 100%, 35%)',
      darker: 'hsl(120, 100%, 20%)',
      darkest: 'hsl(120, 100%, 5%)',
    },
    caution: {
      lightest: 'hsl(60, 100%, 95%)',
      lighter: 'hsl(60, 100%, 70%)',
      light: 'hsl(60, 100%, 65%)',
      base: 'hsl(60, 100%, 50%)',
      dark: 'hsl(60, 100%, 35%)',
      darker: 'hsl(60, 100%, 20%)',
      darkest: 'hsl(60, 100%, 5%)',
    },
    critical: {
      lightest: 'hsl(0, 100%, 95%)',
      lighter: 'hsl(0, 100%, 70%)',
      light: 'hsl(0, 100%, 65%)',
      base: 'hsl(0, 100%, 50%)',
      dark: 'hsl(0, 100%, 35%)',
      darker: 'hsl(0, 100%, 20%)',
      darkest: 'hsl(0, 100%, 5%)',
    },
  },
  lr = {
    gray: 'hsl(0, 0%, 50%)',
    red: 'hsl(0, 100%, 50%)',
    orange: 'hsl(30, 100%, 50%)',
    yellow: 'hsl(60, 100%, 50%)',
    green: 'hsl(120, 100%, 50%)',
    cyan: 'hsl(180, 100%, 50%)',
    blue: 'hsl(240, 100%, 50%)',
    purple: 'hsl(270, 100%, 50%)',
    magenta: 'hsl(300, 100%, 50%)',
  },
  ce = {
    transparent: {
      bg: [m.transparent.darkest, m.transparent.lightest],
      fg: [m.transparent.lightest, m.transparent.darkest],
      border: [m.transparent.darker, m.transparent.lighter],
      focusRing: [m.transparent.base, m.transparent.base],
    },
    primary: {
      bg: [m.primary.darkest, m.primary.lightest],
      fg: [m.primary.lightest, m.primary.darkest],
      border: [m.primary.darker, m.primary.lighter],
      focusRing: [m.primary.base, m.primary.base],
    },
    positive: {
      bg: [m.positive.darkest, m.positive.lightest],
      fg: [m.positive.lightest, m.positive.darkest],
      border: [m.positive.darker, m.positive.lighter],
      focusRing: [m.positive.base, m.positive.base],
    },
    caution: {
      bg: [m.caution.darkest, m.caution.lightest],
      fg: [m.caution.lightest, m.caution.darkest],
      border: [m.caution.darker, m.caution.lighter],
      focusRing: [m.caution.base, m.caution.base],
    },
    critical: {
      bg: [m.critical.darkest, m.critical.lightest],
      fg: [m.critical.lightest, m.critical.darkest],
      border: [m.critical.darker, m.critical.lighter],
      focusRing: [m.critical.base, m.critical.base],
    },
  },
  Ve = {
    base: ({ dark: e, name: t }) =>
      t === 'default'
        ? {
            bg: e ? s : V,
            fg: e ? V : s,
            border: e ? m.default.darkest : m.default.lightest,
            focusRing: m.primary.base,
            shadow: { outline: s, umbra: s, penumbra: s, ambient: s },
            skeleton: { from: e ? V : s, to: e ? V : s },
          }
        : {
            bg: ce[t].bg[e ? 0 : 1],
            fg: ce[t].fg[e ? 0 : 1],
            border: ce[t].border[e ? 0 : 1],
            focusRing: ce[t].focusRing[e ? 0 : 1],
            shadow: { outline: s, umbra: s, penumbra: s, ambient: s },
            skeleton: { from: e ? V : s, to: e ? V : s },
          },
    solid: ({ base: e, dark: t, state: r, tone: n }) => {
      let o = m[n]
      return r === 'hovered'
        ? {
            bg: t ? o.light : o.dark,
            bg2: t ? o.light : o.dark,
            border: t ? o.lighter : o.darker,
            fg: t ? o.darkest : o.lightest,
            muted: { fg: s },
            accent: { fg: s },
            link: { fg: s },
            code: { bg: s, fg: s },
            skeleton: e.skeleton,
          }
        : {
            bg: o.base,
            bg2: o.base,
            border: t ? o.light : o.dark,
            fg: t ? o.darkest : o.lightest,
            muted: { fg: s },
            accent: { fg: s },
            link: { fg: s },
            code: { bg: s, fg: s },
            skeleton: e.skeleton,
          }
    },
    muted: ({ base: e, dark: t, state: r, tone: n }) => {
      let o = m[n]
      return r === 'hovered'
        ? {
            bg: t ? o.darker : o.lighter,
            bg2: t ? o.darker : o.lighter,
            border: t ? o.lighter : o.darker,
            fg: t ? o.lightest : o.darkest,
            muted: { fg: s },
            accent: { fg: s },
            link: { fg: s },
            code: { bg: s, fg: s },
            skeleton: e.skeleton,
          }
        : {
            bg: t ? o.darkest : o.lightest,
            bg2: t ? o.darkest : o.lightest,
            border: t ? o.darker : o.lighter,
            fg: t ? o.lighter : o.darker,
            muted: { fg: s },
            accent: { fg: s },
            link: { fg: s },
            code: { bg: s, fg: s },
            skeleton: e.skeleton,
          }
    },
    button: ({ base: e, mode: t, muted: r, solid: n }) =>
      t === 'bleed'
        ? F(w({}, r), {
            enabled: {
              bg: 'transparent',
              bg2: 'transparent',
              fg: r.enabled.fg,
              border: 'transparent',
              muted: { fg: s },
              accent: { fg: s },
              link: { fg: s },
              code: { bg: s, fg: s },
              skeleton: e.skeleton,
            },
            hovered: {
              bg: r.enabled.bg,
              bg2: r.enabled.bg,
              fg: r.hovered.fg,
              border: 'transparent',
              muted: { fg: s },
              accent: { fg: s },
              link: { fg: s },
              code: { bg: s, fg: s },
              skeleton: e.skeleton,
            },
          })
        : t === 'ghost'
        ? F(w({}, n), { enabled: r.enabled })
        : n,
    card: ({ base: e }) => ({
      bg: s,
      bg2: s,
      fg: s,
      border: s,
      muted: { fg: s },
      accent: { fg: s },
      link: { fg: s },
      code: { bg: s, fg: s },
      skeleton: e.skeleton,
    }),
    input: () => ({ bg: s, fg: s, border: s, placeholder: s }),
    selectable: ({ muted: e, state: t, tone: r }) => e[r][t],
    spot: ({ key: e }) => lr[e],
    syntax: () => ({
      atrule: s,
      attrName: s,
      attrValue: s,
      attribute: s,
      boolean: s,
      builtin: s,
      cdata: s,
      char: s,
      class: s,
      className: s,
      comment: s,
      constant: s,
      deleted: s,
      doctype: s,
      entity: s,
      function: s,
      hexcode: s,
      id: s,
      important: s,
      inserted: s,
      keyword: s,
      number: s,
      operator: s,
      prolog: s,
      property: s,
      pseudoClass: s,
      pseudoElement: s,
      punctuation: s,
      regex: s,
      selector: s,
      string: s,
      symbol: s,
      tag: s,
      unit: s,
      url: s,
      variable: s,
    }),
  }
function _e(e, t, r, n, o) {
  return {
    default: {
      enabled: e.input({
        base: t,
        dark: r,
        mode: 'default',
        state: 'enabled',
        solid: n.default,
        muted: o.default,
      }),
      disabled: e.input({
        base: t,
        dark: r,
        mode: 'default',
        state: 'disabled',
        solid: n.default,
        muted: o.default,
      }),
      hovered: e.input({
        base: t,
        dark: r,
        mode: 'default',
        state: 'hovered',
        solid: n.default,
        muted: o.default,
      }),
      readOnly: e.input({
        base: t,
        dark: r,
        mode: 'default',
        state: 'readOnly',
        solid: n.default,
        muted: o.default,
      }),
    },
    invalid: {
      enabled: e.input({
        base: t,
        dark: r,
        mode: 'invalid',
        state: 'enabled',
        solid: n.default,
        muted: o.default,
      }),
      disabled: e.input({
        base: t,
        dark: r,
        mode: 'invalid',
        state: 'disabled',
        solid: n.default,
        muted: o.default,
      }),
      hovered: e.input({
        base: t,
        dark: r,
        mode: 'invalid',
        state: 'hovered',
        solid: n.default,
        muted: o.default,
      }),
      readOnly: e.input({
        base: t,
        dark: r,
        mode: 'invalid',
        state: 'readOnly',
        solid: n.default,
        muted: o.default,
      }),
    },
  }
}
function ke(e, t, r, n) {
  return {
    default: {
      enabled: e.muted({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'enabled',
      }),
      disabled: e.muted({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'disabled',
      }),
      hovered: e.muted({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'hovered',
      }),
      pressed: e.muted({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'pressed',
      }),
      selected: e.muted({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'selected',
      }),
    },
    transparent: {
      enabled: e.muted({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'enabled',
      }),
      disabled: e.muted({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'disabled',
      }),
      hovered: e.muted({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'hovered',
      }),
      pressed: e.muted({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'pressed',
      }),
      selected: e.muted({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'selected',
      }),
    },
    primary: {
      enabled: e.muted({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'enabled',
      }),
      disabled: e.muted({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'disabled',
      }),
      hovered: e.muted({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'hovered',
      }),
      pressed: e.muted({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'pressed',
      }),
      selected: e.muted({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'selected',
      }),
    },
    positive: {
      enabled: e.muted({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'enabled',
      }),
      disabled: e.muted({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'disabled',
      }),
      hovered: e.muted({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'hovered',
      }),
      pressed: e.muted({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'pressed',
      }),
      selected: e.muted({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'selected',
      }),
    },
    caution: {
      enabled: e.muted({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'enabled',
      }),
      disabled: e.muted({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'disabled',
      }),
      hovered: e.muted({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'hovered',
      }),
      pressed: e.muted({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'pressed',
      }),
      selected: e.muted({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'selected',
      }),
    },
    critical: {
      enabled: e.muted({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'enabled',
      }),
      disabled: e.muted({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'disabled',
      }),
      hovered: e.muted({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'hovered',
      }),
      pressed: e.muted({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'pressed',
      }),
      selected: e.muted({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'selected',
      }),
    },
  }
}
function et(e, t, r, n, o) {
  return {
    default: ne(e, t, r, n, o, 'default'),
    primary: ne(e, t, r, n, o, 'primary'),
    positive: ne(e, t, r, n, o, 'positive'),
    caution: ne(e, t, r, n, o, 'caution'),
    critical: ne(e, t, r, n, o, 'critical'),
  }
}
function ne(e, t, r, n, o, c) {
  return {
    enabled: e.selectable({
      base: t,
      dark: r,
      solid: n,
      muted: o,
      state: 'enabled',
      tone: c,
    }),
    hovered: e.selectable({
      base: t,
      dark: r,
      solid: n,
      muted: o,
      state: 'hovered',
      tone: c,
    }),
    pressed: e.selectable({
      base: t,
      dark: r,
      solid: n,
      muted: o,
      state: 'pressed',
      tone: c,
    }),
    selected: e.selectable({
      base: t,
      dark: r,
      solid: n,
      muted: o,
      state: 'selected',
      tone: c,
    }),
    disabled: e.selectable({
      base: t,
      dark: r,
      solid: n,
      muted: o,
      state: 'disabled',
      tone: c,
    }),
  }
}
function tt(e, t, r, n) {
  return {
    default: {
      enabled: e.solid({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'enabled',
      }),
      disabled: e.solid({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'disabled',
      }),
      hovered: e.solid({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'hovered',
      }),
      pressed: e.solid({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'pressed',
      }),
      selected: e.solid({
        base: t,
        dark: r,
        tone: 'default',
        name: n,
        state: 'selected',
      }),
    },
    transparent: {
      enabled: e.solid({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'enabled',
      }),
      disabled: e.solid({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'disabled',
      }),
      hovered: e.solid({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'hovered',
      }),
      pressed: e.solid({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'pressed',
      }),
      selected: e.solid({
        base: t,
        dark: r,
        tone: 'transparent',
        name: n,
        state: 'selected',
      }),
    },
    primary: {
      enabled: e.solid({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'enabled',
      }),
      disabled: e.solid({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'disabled',
      }),
      hovered: e.solid({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'hovered',
      }),
      pressed: e.solid({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'pressed',
      }),
      selected: e.solid({
        base: t,
        dark: r,
        tone: 'primary',
        name: n,
        state: 'selected',
      }),
    },
    positive: {
      enabled: e.solid({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'enabled',
      }),
      disabled: e.solid({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'disabled',
      }),
      hovered: e.solid({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'hovered',
      }),
      pressed: e.solid({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'pressed',
      }),
      selected: e.solid({
        base: t,
        dark: r,
        tone: 'positive',
        name: n,
        state: 'selected',
      }),
    },
    caution: {
      enabled: e.solid({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'enabled',
      }),
      disabled: e.solid({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'disabled',
      }),
      hovered: e.solid({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'hovered',
      }),
      pressed: e.solid({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'pressed',
      }),
      selected: e.solid({
        base: t,
        dark: r,
        tone: 'caution',
        name: n,
        state: 'selected',
      }),
    },
    critical: {
      enabled: e.solid({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'enabled',
      }),
      disabled: e.solid({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'disabled',
      }),
      hovered: e.solid({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'hovered',
      }),
      pressed: e.solid({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'pressed',
      }),
      selected: e.solid({
        base: t,
        dark: r,
        tone: 'critical',
        name: n,
        state: 'selected',
      }),
    },
  }
}
function rt(e, t, r) {
  return {
    gray: e.spot({ base: t, dark: r, key: 'gray' }),
    blue: e.spot({ base: t, dark: r, key: 'blue' }),
    purple: e.spot({ base: t, dark: r, key: 'purple' }),
    magenta: e.spot({ base: t, dark: r, key: 'magenta' }),
    red: e.spot({ base: t, dark: r, key: 'red' }),
    orange: e.spot({ base: t, dark: r, key: 'orange' }),
    yellow: e.spot({ base: t, dark: r, key: 'yellow' }),
    green: e.spot({ base: t, dark: r, key: 'green' }),
    cyan: e.spot({ base: t, dark: r, key: 'cyan' }),
  }
}
function ot(e = {}) {
  let t = w(w({}, Ve), e)
  return { light: nt(t, !1), dark: nt(t, !0) }
}
function nt(e, t) {
  return {
    default: _(e, t, 'default'),
    transparent: _(e, t, 'transparent'),
    primary: _(e, t, 'primary'),
    positive: _(e, t, 'positive'),
    caution: _(e, t, 'caution'),
    critical: _(e, t, 'critical'),
  }
}
function _(e, t, r) {
  let n = e.base({ dark: t, name: r }),
    o = tt(e, n, t, r),
    c = ke(e, n, t, r)
  return {
    base: n,
    button: Ze(e, n, t, o, c),
    card: Xe(e, n, t, r, o, c),
    dark: t,
    input: _e(e, n, t, o, c),
    selectable: et(e, n, t, o, c),
    spot: rt(e, n, t),
    syntax: e.syntax({ base: n, dark: t }),
    solid: o,
    muted: c,
  }
}
function sr(e, t) {
  let r = Y(e),
    n = Y(t)
  return He(qe(r, n))
}
function ur(e, t) {
  let r = Y(e),
    n = Y(t)
  return He(Ye(r, n))
}
var Qn = Ue({
  hues: process.env.__HUES__,
  studioTheme: Be,
  multiply: sr,
  screen: ur,
  rgba: Je,
  createColorTheme: ot,
})
export { Qn as theme }
