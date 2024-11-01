import {
  _,
  r as r4
} from "./chunk-VS26W5Y5.js";
import {
  l as l2
} from "./chunk-KKD7A2GN.js";
import {
  v
} from "./chunk-4OGGMTIH.js";
import {
  n as n2,
  r as r3
} from "./chunk-DY7FJHTG.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import {
  l,
  m,
  o as o3,
  p,
  x
} from "./chunk-XTVPEVHA.js";
import {
  o
} from "./chunk-7RMVJCDW.js";
import {
  e,
  f
} from "./chunk-3ZXOUEQG.js";
import {
  A,
  O,
  g,
  o as o2,
  r as r2,
  u,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r,
  t
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/chunks/SunCalc.js
var t2;
var r5;
var e3;
var o4 = {
  exports: {}
};
t2 = o4, r5 = function() {
  var n3 = Math.PI, t3 = Math.sin, r6 = Math.cos, e4 = Math.tan, o5 = Math.asin, u3 = Math.atan2, a = Math.acos, i = n3 / 180, c = 864e5, f2 = 2440588, s = 2451545, d = {
    dec: 0,
    ra: 0
  };
  function p2(n4) {
    return n4.valueOf() / c - 0.5 + f2;
  }
  function v2(n4) {
    return new Date((n4 + 0.5 - f2) * c);
  }
  function M2(n4) {
    return p2(n4) - s;
  }
  var l3 = 23.4397 * i;
  function h(n4, o6) {
    return u3(t3(n4) * r6(l3) - e4(o6) * t3(l3), r6(n4));
  }
  function x2(n4, e5) {
    return o5(t3(e5) * r6(l3) + r6(e5) * t3(l3) * t3(n4));
  }
  function N(n4, o6, a2) {
    return u3(t3(n4), r6(n4) * t3(o6) - e4(a2) * r6(o6));
  }
  function P2(n4, e5, u4) {
    return o5(t3(e5) * t3(u4) + r6(e5) * r6(u4) * r6(n4));
  }
  function m2(n4, t4) {
    return i * (280.16 + 360.9856235 * n4) - t4;
  }
  function E2(n4) {
    return i * (357.5291 + 0.98560028 * n4);
  }
  function I2(n4) {
    return i * (1.9148 * t3(n4) + 0.02 * t3(2 * n4) + 3e-4 * t3(3 * n4));
  }
  function g2(t4, r7) {
    return t4 + r7 + 102.9372 * i + n3;
  }
  function O3(n4, t4) {
    var r7 = E2(n4), e5 = g2(r7, I2(r7));
    return t4 || (t4 = {
      dec: 0,
      ra: 0
    }), t4.dec = x2(e5, 0), t4.ra = h(e5, 0), t4;
  }
  var T = {
    PolarException: {
      NORMAL: 0,
      MIDNIGHT_SUN: 1,
      POLAR_NIGHT: 2
    },
    getPosition: function(n4, t4, r7, e5) {
      var o6 = i * -r7, u4 = i * t4, a2 = M2(n4), c2 = O3(a2, d), f3 = m2(a2, o6) - c2.ra;
      return e5 || (e5 = {
        azimuth: 0,
        altitude: 0
      }), e5.azimuth = N(f3, u4, c2.dec), e5.altitude = P2(f3, u4, c2.dec), e5;
    }
  }, A2 = [[-0.83, "sunrise", "sunset"]];
  T.addTime = function(n4, t4, r7) {
    A2.push([n4, t4, r7]);
  };
  var H2 = 9e-4;
  function L2(t4, r7) {
    return Math.round(t4 - H2 - r7 / (2 * n3));
  }
  function R2(t4, r7, e5) {
    return H2 + (t4 + r7) / (2 * n3) + e5;
  }
  function _3(n4, r7, e5) {
    return s + n4 + 53e-4 * t3(r7) - 69e-4 * t3(2 * e5);
  }
  function G2(n4, e5, o6) {
    return a((t3(n4) - t3(e5) * t3(o6)) / (r6(e5) * r6(o6)));
  }
  function z3(n4) {
    var e5 = i * (134.963 + 13.064993 * n4), o6 = i * (93.272 + 13.22935 * n4), u4 = i * (218.316 + 13.176396 * n4) + 6.289 * i * t3(e5), a2 = 5.128 * i * t3(o6), c2 = 385001 - 20905 * r6(e5);
    return {
      ra: h(u4, a2),
      dec: x2(u4, a2),
      dist: c2
    };
  }
  return T.getTimes = function(n4, e5, o6) {
    var u4 = i * -o6, a2 = i * e5, c2 = L2(M2(n4), u4), f3 = R2(0, u4, c2), s2 = E2(f3), d2 = I2(s2), p3 = g2(s2, d2), l4 = x2(p3, 0), h2 = _3(f3, s2, p3);
    function N2(n5) {
      return _3(R2(G2(n5, a2, l4), u4, c2), s2, p3);
    }
    function P3(n5) {
      var e6 = (t3(n5) - t3(a2) * t3(l4)) / (r6(a2) * r6(l4));
      return e6 < -1 ? T.PolarException.MIDNIGHT_SUN : e6 > 1 ? T.PolarException.POLAR_NIGHT : T.PolarException.NORMAL;
    }
    var m3, O4, H3, z4, D2, S2 = {
      solarNoon: v2(h2),
      nadir: v2(h2 - 0.5),
      polarException: T.PolarException.NORMAL
    };
    for (m3 = 0, O4 = A2.length; m3 < O4; m3 += 1) D2 = h2 - ((z4 = N2((H3 = A2[m3])[0] * i)) - h2), S2[H3[1]] = v2(D2), S2[H3[2]] = v2(z4);
    return S2.polarException = P3(A2[0][0] * i), S2;
  }, T.getMoonPosition = function(n4, t4, r7) {
    var o6 = i * -r7, u4 = i * t4, a2 = M2(n4), c2 = z3(a2), f3 = m2(a2, o6) - c2.ra, s2 = P2(f3, u4, c2.dec);
    return s2 += 0.017 * i / e4(s2 + 10.26 * i / (s2 + 5.1 * i)), {
      azimuth: N(f3, u4, c2.dec),
      altitude: s2,
      distance: c2.dist
    };
  }, T.getMoonFraction = function(n4) {
    var e5 = M2(n4), o6 = O3(e5), i2 = z3(e5), c2 = 149598e3, f3 = a(t3(o6.dec) * t3(i2.dec) + r6(o6.dec) * r6(i2.dec) * r6(o6.ra - i2.ra)), s2 = u3(c2 * t3(f3), i2.dist - c2 * r6(f3));
    return (1 + r6(s2)) / 2;
  }, T;
}, void 0 !== (e3 = r5()) && (t2.exports = e3);
var u2 = o(o4.exports);

// ../../../node_modules/@arcgis/core/views/3d/support/sunUtils.js
var M = {
  local: {
    altitude: 1500,
    ambientAtNight: 0.1,
    ambientAtNoon: 0.45,
    ambientAtTwilight: 0.2,
    directAtNoon: 0.65,
    directAtTwilight: 0.7
  },
  global: {
    altitude: 8e5,
    ambient: 0.015,
    direct: 0.75
  },
  planarDirection: {
    localAltitude: 1e4,
    globalAltitude: 1e6,
    globalAngles: {
      azimuth: 1.3 * Math.PI,
      altitude: 0.6 * Math.PI
    }
  }
};
var j = class {
  constructor(t3, e4) {
    this.direct = t3, this.ambient = e4;
  }
};
function S(i, o5, n3, a, l3, r6) {
  o2(r6.ambient.color, 1, 1, 1), r6.ambient.intensity = M.global.ambient, o2(r6.direct.color, 1, 1, 1), r6.direct.intensity = M.global.direct;
  const c = o5[2], s = e((Math.abs(c) - M.local.altitude) / (M.global.altitude - M.local.altitude), 0, 1);
  let u3;
  if (r6.globalFactor = s, null != i && (u3 = u2.getTimes(i, o5[1], o5[0])), s < 1) {
    let e4;
    if (null != i) e4 = ot(i, u3, a);
    else {
      const t3 = L(a);
      e4 = {
        direct: {
          intensity: M.local.directAtNoon * t3.direct,
          color: r(1, 1, 1)
        },
        ambient: {
          intensity: M.local.ambientAtNoon * t3.ambient,
          color: r(1, 1, 1)
        },
        timeOfDay: "early afternoon"
      };
    }
    A(r6.ambient.color, e4.ambient.color, r6.ambient.color, s), r6.ambient.intensity = f(e4.ambient.intensity, r6.ambient.intensity, s), A(r6.direct.color, e4.direct.color, r6.direct.color, s), r6.direct.intensity = f(e4.direct.intensity, r6.direct.intensity, s), r6.specularStrength = "rainy" === a || "snowy" === a || "foggy" === a ? 0 : 1, r6.environmentStrength = "rainy" === a ? 0.7 : "snowy" === a || "foggy" === a ? 0.75 : 1;
  }
  r6.noonFactor = null != i ? F(i, u3) : 1, null != i ? P(i, o5, n3, r6.direct.directionToLightSource) : O2(l3, n3, r6.direct.directionToLightSource);
}
function O2(t3, e4, o5) {
  e4 === l2.Global ? z(lt, t3.eye) : o2(lt, 0, 0, 1), g(rt, t3.viewForward, -1);
  const n3 = v(rt, lt), a = Math.max(n3 - 2 * st, 0), l3 = 0.85 * a / (a + 1), r6 = Math.max(st, n3 - st - l3);
  p(at, -r6, t3.viewRight), O(o5, rt, at), u(o5, o5, g(ct, t3.viewRight, ut)), z(o5, o5);
}
function P(t3, i, r6, c) {
  const s = H, u3 = o3(G);
  if (r6 === l2.Global) u2.getPosition(t3, 0, 0, s), o2(c, 0, 0, -1), l(u3, u3, -s.azimuth), m(u3, u3, -s.altitude), O(c, c, u3);
  else {
    const o5 = M.planarDirection, a = o5.globalAngles, r7 = i[2];
    let m2 = (Math.abs(r7) - o5.localAltitude) / (o5.globalAltitude - o5.localAltitude);
    m2 = e(m2, 0, 1), m2 < 1 ? (u2.getPosition(t3, i[1], i[0], s), s.azimuth = (1 - m2) * s.azimuth + m2 * a.azimuth, s.altitude = (1 - m2) * s.altitude + m2 * a.altitude) : (s.azimuth = a.azimuth, s.altitude = a.altitude), o2(c, 0, -1, 0), x(u3, u3, -s.azimuth), l(u3, u3, -s.altitude), O(c, c, u3);
  }
}
function z2(t3, e4) {
  if (e4 === l2.Global) return true;
  const i = M.planarDirection;
  return Math.abs(t3) < i.localAltitude;
}
function D(t3, e4, i, o5, n3) {
  const a = t3.getTime(), l3 = e4.getTime() - a, r6 = Math.floor(l3 / i) + 1, c = new Array(r6);
  for (let s = 0; s < r6; ++s) nt.setTime(a + i * s), c[s] = n(), P(nt, o5, n3, c[s]);
  return c;
}
var E = r(0.5773502691896258, -0.5773502691896258, 0.5773502691896258);
var I = class {
  constructor() {
    this.ambient = {
      color: r(1, 1, 1),
      intensity: 0.55
    }, this.direct = {
      color: r(1, 1, 1),
      intensity: 0.55,
      directionToLightSource: t(E)
    }, this.noonFactor = 0.5, this.globalFactor = 0, this.specularStrength = 1, this.environmentStrength = 1;
  }
};
var G = e2();
var H = {
  azimuth: 0,
  altitude: 0
};
function F(t3, i) {
  const o5 = t3.valueOf();
  let n3, a;
  i.polarException === u2.PolarException.MIDNIGHT_SUN ? (n3 = o5 - 60 * (t3.getHours() + 48) * 60 * 1e3 - 60 * t3.getMinutes() * 1e3, a = n3 + 432e6) : i.polarException === u2.PolarException.POLAR_NIGHT ? (n3 = o5 - 2, a = o5 - 1) : (n3 = i.sunrise.valueOf(), a = i.sunset.valueOf());
  const l3 = n3 + (a - n3) / 2;
  return 1 - e(Math.abs(o5 - l3) / 432e5, 0, 1);
}
function L(t3) {
  switch (t3) {
    case "disabled":
    case "sunny":
    case "cloudy":
      return new j(1, 1);
    case "rainy":
      return new j(0.4, 1.2);
    case "snowy":
      return new j(0.5, 1.3);
    case "foggy":
      return new j(0.2, 1.6);
  }
}
function R(t3, e4) {
  const i = (t3[0] + t3[1] + t3[2]) / 3;
  t3[0] += (i - t3[0]) * e4, t3[1] += (i - t3[1]) * e4, t3[2] += (i - t3[2]) * e4;
}
var U = r(0.01, 0.01, 0.01);
var _2 = r(1, 0.6, 0.5);
var k = r(1, 0.98, 0.98);
var V = r(1, 1, 1);
var C = r(0.8, 0.8, 1);
var q = r(0.8, 0.8, 1);
var B = r(0.98, 0.98, 1);
var J = r(1, 1, 1);
var K = r3(0.01, M.local.ambientAtNight);
var Q = r3(M.local.directAtTwilight, M.local.ambientAtTwilight);
var W = r3(0.9 * M.local.directAtNoon, M.local.ambientAtNoon);
var X = r3(M.local.directAtNoon, M.local.ambientAtNoon);
var Y = W;
var Z = k;
var $ = B;
var tt = Q;
var et = _2;
var it = q;
function ot(t3, e4, i) {
  const o5 = t3.valueOf();
  let n3, a;
  e4.polarException === u2.PolarException.MIDNIGHT_SUN ? (n3 = o5 - 60 * (t3.getHours() + 48) * 60 * 1e3 - 60 * t3.getMinutes() * 1e3, a = n3 + 432e6) : e4.polarException === u2.PolarException.POLAR_NIGHT ? (n3 = o5 - 2, a = o5 - 1) : (n3 = e4.sunrise.valueOf(), a = e4.sunset.valueOf());
  const l3 = a - n3, r6 = n3 + l3 / 2, u3 = l3 / 4, g2 = r6 - u3, d = r6 + u3, h = 0.06 * l3, b = n3 - h / 2, y = n3 + h / 2, A2 = a - h / 2, x2 = a + h / 2, N = n2(), T = n(), M2 = n();
  let j2 = "";
  if (o5 < b || o5 > x2) r4(N, K), r2(T, U), r2(M2, C), j2 = "night";
  else if (o5 < y) {
    const t4 = (o5 - b) / (y - b);
    _(N, K, Q, t4), A(T, U, _2, t4), A(M2, C, q, t4), j2 = "sun rising";
  } else if (o5 < g2) {
    const t4 = (o5 - y) / (g2 - y);
    _(N, Q, W, t4), A(T, _2, k, t4), A(M2, q, B, t4), j2 = "early morning";
  } else if (o5 < r6) {
    const t4 = (o5 - g2) / (r6 - g2);
    _(N, W, X, t4), A(T, k, V, t4), A(M2, B, J, t4), j2 = "late morning";
  } else if (o5 < d) {
    const t4 = (o5 - r6) / (d - r6);
    _(N, X, Y, t4), A(T, V, Z, t4), A(M2, J, $, t4), j2 = "early afternoon";
  } else if (o5 < A2) {
    const t4 = (o5 - d) / (A2 - d);
    _(N, Y, tt, t4), A(T, Z, et, t4), A(M2, $, it, t4), j2 = "late afternoon";
  } else if (o5 < x2) {
    const t4 = (o5 - A2) / (x2 - A2);
    _(N, tt, K, t4), A(T, et, U, t4), A(M2, it, C, t4), j2 = "sun setting";
  }
  let S2 = 0;
  switch (i) {
    case "rainy":
    case "foggy":
      S2 = 0.8;
      break;
    case "snowy":
      S2 = 0.5;
  }
  S2 > 0 && (R(T, S2), R(M2, S2));
  const O3 = L(i);
  return {
    direct: {
      intensity: N[0] * O3.direct,
      color: T
    },
    ambient: {
      intensity: N[1] * O3.ambient,
      color: M2
    },
    timeOfDay: j2
  };
}
var nt = /* @__PURE__ */ new Date(0);
var at = e2();
var lt = n();
var rt = n();
var ct = n();
var st = 0.25;
var ut = 0.2;

export {
  u2 as u,
  S,
  O2 as O,
  z2 as z,
  D,
  I
};
//# sourceMappingURL=chunk-JF6YDQ2P.js.map
