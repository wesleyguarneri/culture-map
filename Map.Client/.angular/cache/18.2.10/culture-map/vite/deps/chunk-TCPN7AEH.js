import {
  r
} from "./chunk-IMVP5ADD.js";
import {
  L
} from "./chunk-H7WPOTQH.js";
import {
  u
} from "./chunk-K226GFDN.js";

// ../../../node_modules/@arcgis/core/core/colorUtils.js
function o(n) {
  return "r" in n && "g" in n && "b" in n;
}
function u2(n) {
  return "h" in n && "s" in n && "v" in n;
}
function e(n) {
  return "l" in n && "a" in n && "b" in n;
}
function c(n) {
  return "l" in n && "c" in n && "h" in n;
}
function i(n) {
  return "x" in n && "y" in n && "z" in n;
}
var a = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
var s = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
function f(n, t) {
  const r2 = [];
  let o2, u3;
  if (n[0].length !== t.length) throw new Error("dimensions do not match");
  const e2 = n.length, c2 = n[0].length;
  let i2 = 0;
  for (o2 = 0; o2 < e2; o2++) {
    for (i2 = 0, u3 = 0; u3 < c2; u3++) i2 += n[o2][u3] * t[u3];
    r2.push(i2);
  }
  return r2;
}
function h(n) {
  const t = [n.r / 255, n.g / 255, n.b / 255].map((n2) => n2 <= 0.04045 ? n2 / 12.92 : ((n2 + 0.055) / 1.055) ** 2.4), r2 = f(a, t);
  return {
    x: 100 * r2[0],
    y: 100 * r2[1],
    z: 100 * r2[2]
  };
}
function l(n) {
  const t = f(s, [n.x / 100, n.y / 100, n.z / 100]).map((n2) => {
    const t2 = n2 <= 31308e-7 ? 12.92 * n2 : 1.055 * n2 ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(t2, 0));
  });
  return {
    r: Math.round(255 * t[0]),
    g: Math.round(255 * t[1]),
    b: Math.round(255 * t[2])
  };
}
function b(n) {
  const t = [n.x / 95.047, n.y / 100, n.z / 108.883].map((n2) => n2 > (6 / 29) ** 3 ? n2 ** (1 / 3) : 1 / 3 * (29 / 6) ** 2 * n2 + 4 / 29);
  return {
    l: 116 * t[1] - 16,
    a: 500 * (t[0] - t[1]),
    b: 200 * (t[1] - t[2])
  };
}
function g(n) {
  const t = n.l, r2 = [(t + 16) / 116 + n.a / 500, (t + 16) / 116, (t + 16) / 116 - n.b / 200].map((n2) => n2 > 6 / 29 ? n2 ** 3 : 3 * (6 / 29) ** 2 * (n2 - 4 / 29));
  return {
    x: 95.047 * r2[0],
    y: 100 * r2[1],
    z: 108.883 * r2[2]
  };
}
function M(n) {
  const t = n.l, r2 = n.a, o2 = n.b, u3 = Math.sqrt(r2 * r2 + o2 * o2);
  let e2 = Math.atan2(o2, r2);
  return e2 = e2 > 0 ? e2 : e2 + 2 * Math.PI, {
    l: t,
    c: u3,
    h: e2
  };
}
function m(n) {
  const t = n.l, r2 = n.c, o2 = n.h;
  return {
    l: t,
    a: r2 * Math.cos(o2),
    b: r2 * Math.sin(o2)
  };
}
function d(n) {
  return b(h(n));
}
function p(n) {
  return l(g(n));
}
function x(n) {
  return M(b(h(n)));
}
function k(n) {
  return l(g(m(n)));
}
function w(n) {
  const t = n.r, r2 = n.g, o2 = n.b, u3 = Math.max(t, r2, o2), e2 = u3 - Math.min(t, r2, o2);
  let c2 = u3, i2 = 0 === e2 ? 0 : u3 === t ? (r2 - o2) / e2 % 6 : u3 === r2 ? (o2 - t) / e2 + 2 : (t - r2) / e2 + 4, a2 = 0 === e2 ? 0 : e2 / c2;
  return i2 < 0 && (i2 += 6), i2 *= 60, a2 *= 100, c2 *= 100 / 255, {
    h: i2,
    s: a2,
    v: c2
  };
}
function v(n) {
  const t = (n.h + 360) % 360 / 60, r2 = n.s / 100, o2 = n.v / 100 * 255, u3 = o2 * r2, e2 = u3 * (1 - Math.abs(t % 2 - 1));
  let c2;
  switch (Math.floor(t)) {
    case 0:
      c2 = {
        r: u3,
        g: e2,
        b: 0
      };
      break;
    case 1:
      c2 = {
        r: e2,
        g: u3,
        b: 0
      };
      break;
    case 2:
      c2 = {
        r: 0,
        g: u3,
        b: e2
      };
      break;
    case 3:
      c2 = {
        r: 0,
        g: e2,
        b: u3
      };
      break;
    case 4:
      c2 = {
        r: e2,
        g: 0,
        b: u3
      };
      break;
    case 5:
    case 6:
      c2 = {
        r: u3,
        g: 0,
        b: e2
      };
      break;
    default:
      c2 = {
        r: 0,
        g: 0,
        b: 0
      };
  }
  return c2.r = Math.round(c2.r + o2 - u3), c2.g = Math.round(c2.g + o2 - u3), c2.b = Math.round(c2.b + o2 - u3), c2;
}
function y(n) {
  return o(n) ? n : c(n) ? k(n) : e(n) ? p(n) : i(n) ? l(n) : u2(n) ? v(n) : n;
}
function z(n) {
  if (u2(n)) return n;
  return w(y(n));
}
function A(n) {
  return e(n) ? n : d(y(n));
}
function j(n) {
  return c(n) ? n : x(y(n));
}
function C(t) {
  let {
    r: r2,
    g: o2,
    b: u3,
    a: e2
  } = t;
  return e2 < 1 && (r2 = Math.round(e2 * r2 + 255 * (1 - e2)), o2 = Math.round(e2 * o2 + 255 * (1 - e2)), u3 = Math.round(e2 * u3 + 255 * (1 - e2))), new u({
    r: r2,
    g: o2,
    b: u3
  });
}
function H(n, t) {
  const {
    r: r2,
    g: o2,
    b: u3
  } = t?.ignoreAlpha ? n : C(n);
  return 0.2126 * r2 + 0.7152 * o2 + 0.0722 * u3;
}
var q;
function G(t, r2 = q.High) {
  return H(t, {
    ignoreAlpha: true
  }) > r2 ? new u([0, 0, 0, t.a]) : new u([255, 255, 255, t.a]);
}
function L2(n, t) {
  const r2 = A(n);
  r2.l *= 1 - t;
  const o2 = y(r2), u3 = n.clone();
  return u3.setColor(o2), u3.a = n.a, u3;
}
function R(n, t) {
  const r2 = n.clone();
  return r2.a *= t, r2;
}
function U(n, t) {
  const r2 = z(n);
  r2.s *= t;
  const o2 = y(r2), u3 = n.clone();
  return u3.setColor(o2), u3.a = n.a, u3;
}
function E(t) {
  return u.toUnitRGBA(t);
}
function I(n, t) {
  return n === t || null != n && n.equals(t);
}
function P(n, r2) {
  return n === r2 || null != n && null != r2 && L(n, r2);
}
function D(n) {
  return r(n[0], n[1], n[2], n.length > 3 ? n[3] : 1);
}
function F(t, r2) {
  const o2 = u.toUnitRGBA(t);
  return o2[3] *= r2, o2;
}
!function(n) {
  n[n.Low = 160] = "Low", n[n.High = 225] = "High";
}(q || (q = {}));

export {
  o,
  y,
  z,
  A,
  j,
  H,
  q,
  G,
  L2 as L,
  R,
  U,
  E,
  I,
  P,
  D,
  F
};
//# sourceMappingURL=chunk-TCPN7AEH.js.map
