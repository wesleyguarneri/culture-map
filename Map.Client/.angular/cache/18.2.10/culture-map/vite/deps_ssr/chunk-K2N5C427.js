import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b as b2
} from "./chunk-6VEI6WC5.js";
import {
  P as P2,
  a as a3,
  a2 as a4,
  c as c4,
  g,
  l as l2,
  p,
  u as u3,
  w as w3
} from "./chunk-2U6PTPT5.js";
import {
  x
} from "./chunk-VBF36LQH.js";
import {
  t as t2
} from "./chunk-3MEAEIED.js";
import {
  c as c3
} from "./chunk-6JVMYNKO.js";
import {
  T
} from "./chunk-MAPT6E5F.js";
import {
  a as a2
} from "./chunk-RIA56QWL.js";
import {
  $
} from "./chunk-KSVRNA4R.js";
import {
  h as h3
} from "./chunk-2CXNO3UO.js";
import {
  l
} from "./chunk-EJXWYKCR.js";
import {
  m
} from "./chunk-SNHVHW2N.js";
import {
  X,
  k as k2
} from "./chunk-L6FG3WIC.js";
import {
  k,
  v
} from "./chunk-6ZLH7XBS.js";
import {
  B as B2,
  E,
  d as d3
} from "./chunk-2TNGEJGS.js";
import {
  B
} from "./chunk-A2FDYA6M.js";
import {
  e as e4
} from "./chunk-YGAXDKHF.js";
import {
  e as e5
} from "./chunk-4TOSJLKR.js";
import {
  c,
  c3 as c2,
  d as d2,
  h as h2,
  j2,
  w as w2
} from "./chunk-ZREJ3Y2F.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  S
} from "./chunk-IUPJR3FF.js";
import {
  y as y2
} from "./chunk-TGZW6QWO.js";
import {
  o as o4
} from "./chunk-6EIBUVMG.js";
import {
  I,
  K as K2,
  N
} from "./chunk-LM3JDV4W.js";
import {
  z
} from "./chunk-KAHESDP5.js";
import {
  t
} from "./chunk-ONRZ4VTT.js";
import {
  e as e3
} from "./chunk-KOI252FF.js";
import {
  n as n3
} from "./chunk-I2TVVMQ6.js";
import {
  j,
  u as u2
} from "./chunk-MRPCXIVS.js";
import {
  o as o3
} from "./chunk-GCVQXAS4.js";
import {
  R,
  _,
  d,
  e as e2
} from "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s as s3
} from "./chunk-66YQWHHE.js";
import {
  M,
  h
} from "./chunk-2OZSYJDX.js";
import {
  K,
  P,
  u
} from "./chunk-MZM4INJV.js";
import {
  n as n2,
  o as o2
} from "./chunk-J4GMQHGL.js";
import {
  w
} from "./chunk-6SSA7P3A.js";
import {
  s as s4
} from "./chunk-FQBTLEUI.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  b,
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/PanoramicViewer/constants.js
var o5 = new _({
  x: 0,
  y: 0,
  z: 0,
  spatialReference: f2.WebMercator
});
var t3 = 1e3;
var m2 = 114;
var i2 = 120;
var p2 = 50;

// ../../../node_modules/@arcgis/core/layers/orientedImagery/transformations/utils.js
function z2(t4, a7, n5) {
  const [s5, i3, h4, o6] = a7, [M4, r2, c6, e7] = n5;
  return f3(t4, s5, i3, h4, o6, M4, r2, c6, e7);
}
function f3(t4, a7, n5, i3, o6, M4, r2, c6, e7) {
  let u5 = false;
  0 === a7.z && 0 === n5.z && 0 === i3.z && 0 === o6.z && (a7.z = n5.z = i3.z = o6.z = 1, t4.z = 1), a7.z = a7.z ?? 1, n5.z = n5.z ?? 1, i3.z = i3.z ?? 1, o6.z = o6.z ?? 1, 0 === M4.z && 0 === r2.z && 0 === c6.z && 0 === e7.z && (u5 = true, M4.z = r2.z = c6.z = e7.z = 1), M4.z = M4.z ?? 1, r2.z = r2.z ?? 1, c6.z = c6.z ?? 1, e7.z = e7.z ?? 1;
  const m3 = y3(a7, n5, i3, o6), z3 = y3(M4, r2, c6, e7), f4 = e3(e4(), m3), x4 = e4();
  x4[0] = z3[0] * f4[0] + z3[1] * f4[4] + z3[2] * f4[8] + z3[3] * f4[12], x4[1] = z3[0] * f4[1] + z3[1] * f4[5] + z3[2] * f4[9] + z3[3] * f4[13], x4[2] = z3[0] * f4[2] + z3[1] * f4[6] + z3[2] * f4[10] + z3[3] * f4[14], x4[3] = z3[0] * f4[3] + z3[1] * f4[7] + z3[2] * f4[11] + z3[3] * f4[15], x4[4] = z3[4] * f4[0] + z3[5] * f4[4] + z3[6] * f4[8] + z3[7] * f4[12], x4[5] = z3[4] * f4[1] + z3[5] * f4[5] + z3[6] * f4[9] + z3[7] * f4[13], x4[6] = z3[4] * f4[2] + z3[5] * f4[6] + z3[6] * f4[10] + z3[7] * f4[14], x4[7] = z3[4] * f4[3] + z3[5] * f4[7] + z3[6] * f4[11] + z3[7] * f4[15], x4[8] = z3[8] * f4[0] + z3[9] * f4[4] + z3[10] * f4[8] + z3[11] * f4[12], x4[9] = z3[8] * f4[1] + z3[9] * f4[5] + z3[10] * f4[9] + z3[11] * f4[13], x4[10] = z3[8] * f4[2] + z3[9] * f4[6] + z3[10] * f4[10] + z3[11] * f4[14], x4[11] = z3[8] * f4[3] + z3[9] * f4[7] + z3[10] * f4[11] + z3[11] * f4[15], x4[12] = z3[12] * f4[0] + z3[13] * f4[4] + z3[14] * f4[8] + z3[15] * f4[12], x4[13] = z3[12] * f4[1] + z3[13] * f4[5] + z3[14] * f4[9] + z3[15] * f4[13], x4[14] = z3[12] * f4[2] + z3[13] * f4[6] + z3[14] * f4[10] + z3[15] * f4[14], x4[15] = z3[12] * f4[3] + z3[13] * f4[7] + z3[14] * f4[11] + z3[15] * f4[15];
  const p5 = x4[0] * t4.x + x4[1] * t4.y + x4[2] * t4.z + x4[3], l4 = x4[4] * t4.x + x4[5] * t4.y + x4[6] * t4.z + x4[7], b6 = x4[8] * t4.x + x4[9] * t4.y + x4[10] * t4.z + x4[11];
  let g3 = x4[12] * t4.x + x4[13] * t4.y + x4[14] * t4.z + x4[15];
  return 0 === g3 && (g3 = 1), {
    x: p5 / g3,
    y: l4 / g3,
    z: u5 ? 0 : b6 / g3
  };
}
function y3(t4, a7, n5, s5) {
  const i3 = b3([s5.x, s5.y, s5.z, 1], e3(new Array(16), [t4.x, a7.x, n5.x, 0, t4.y, a7.y, n5.y, 0, t4.z, a7.z, n5.z, 0, 1, 1, 1, 1])), o6 = i3[0], M4 = i3[1], r2 = i3[2], c6 = new Array(16);
  return c6[0] = o6 * t4.x, c6[1] = M4 * a7.x, c6[2] = r2 * n5.x, c6[3] = 0, c6[4] = o6 * t4.y, c6[5] = M4 * a7.y, c6[6] = r2 * n5.y, c6[7] = 0, c6[8] = o6 * t4.z, c6[9] = M4 * a7.z, c6[10] = r2 * n5.z, c6[11] = 0, c6[12] = o6, c6[13] = M4, c6[14] = r2, c6[15] = 1, c6;
}
function x2(t4, a7, n5, s5, h4 = o2()) {
  return h4[0] = t4[0] + a7[0] * n5, h4[1] = t4[1] + a7[1] * n5, h4[2] = t4[2] + a7[2] * (n5 / s5), h4;
}
function p3(t4, a7, n5) {
  const s5 = o2();
  return s5[0] = t4[0] * a7, s5[1] = t4[1] * a7, s5[2] = t4[2] * (a7 / n5), s5;
}
function l3(t4, a7) {
  const [n5, s5, h4] = t4, o6 = o2();
  return o6[0] = n5 * a7[0] + s5 * a7[3] + h4 * a7[6], o6[1] = n5 * a7[1] + s5 * a7[4] + h4 * a7[7], o6[2] = n5 * a7[2] + s5 * a7[5] + h4 * a7[8], o6;
}
function b3(t4, a7) {
  const [n5, s5, i3, h4] = t4, o6 = new Array(4);
  return o6[0] = n5 * a7[0] + s5 * a7[1] + i3 * a7[2] + h4 * a7[3], o6[1] = n5 * a7[4] + s5 * a7[5] + i3 * a7[6] + h4 * a7[7], o6[2] = n5 * a7[8] + s5 * a7[9] + i3 * a7[10] + h4 * a7[11], o6[3] = n5 * a7[12] + s5 * a7[13] + i3 * a7[14] + h4 * a7[15], o6;
}
function g2(t4, a7) {
  const s5 = Math.PI / 180, i3 = e5();
  if ("OPK" === t4) {
    const t5 = Number(a7[0]) * s5, n5 = Number(a7[1]) * s5, h4 = Number(a7[2]) * s5;
    i3[0] = Math.cos(n5) * Math.cos(h4), i3[1] = Math.cos(t5) * Math.sin(h4) + Math.sin(t5) * Math.sin(n5) * Math.cos(h4), i3[2] = Math.sin(t5) * Math.sin(h4) - Math.cos(t5) * Math.sin(n5) * Math.cos(h4), i3[3] = -Math.cos(n5) * Math.sin(h4), i3[4] = Math.cos(t5) * Math.cos(h4) - Math.sin(t5) * Math.sin(n5) * Math.sin(h4), i3[5] = Math.sin(t5) * Math.cos(h4) + Math.cos(t5) * Math.sin(n5) * Math.sin(h4), i3[6] = Math.sin(n5), i3[7] = -Math.sin(t5) * Math.cos(n5), i3[8] = Math.cos(t5) * Math.cos(n5);
  } else {
    const t5 = Number(a7[0]) * s5, n5 = Number(a7[1]) * s5, h4 = Number(a7[2]) * s5;
    i3[0] = Math.cos(t5) * Math.cos(h4) - Math.sin(t5) * Math.cos(n5) * Math.sin(h4), i3[1] = Math.sin(t5) * Math.cos(h4) * -1 - Math.cos(t5) * Math.cos(n5) * Math.sin(h4), i3[2] = Math.sin(h4) * Math.sin(n5) * -1, i3[3] = Math.cos(t5) * Math.sin(h4) + Math.sin(t5) * Math.cos(n5) * Math.cos(h4), i3[4] = Math.sin(t5) * Math.sin(h4) * -1 + Math.cos(t5) * Math.cos(n5) * Math.cos(h4), i3[5] = Math.cos(h4) * Math.sin(n5), i3[6] = Math.sin(t5) * Math.sin(n5) * -1, i3[7] = Math.cos(t5) * Math.sin(n5) * -1, i3[8] = Math.cos(n5);
  }
  return i3;
}
function d4(t4, a7, n5) {
  const s5 = Math.sin(n5 * Math.PI / 180), i3 = Math.cos(n5 * Math.PI / 180), h4 = [[t4, 0], [t4, a7], [0, a7]];
  h4.forEach((t5, a8) => {
    h4[a8] = [i3 * t5[0] - s5 * t5[1], s5 * t5[0] + i3 * t5[1]];
  });
  const o6 = {
    xmin: Math.min(0, h4[0][0], h4[1][0], h4[2][0]),
    xmax: Math.max(0, h4[0][0], h4[1][0], h4[2][0]),
    ymin: Math.min(0, h4[0][1], h4[1][1], h4[2][1]),
    ymax: Math.max(0, h4[0][1], h4[1][1], h4[2][1])
  };
  return {
    hfov: Math.abs(o6.xmax - o6.xmin),
    vfov: Math.abs(o6.ymax - o6.ymin)
  };
}
function j3(t4, a7, n5, s5, i3, h4) {
  const o6 = n5 * (a7.x - t4.x) + s5 * (a7.y - t4.y) + i3 * (a7.z - t4.z);
  if (0 === o6) return null;
  const M4 = -(n5 * t4.x + s5 * t4.y + i3 * t4.z + h4) / o6;
  return {
    x: t4.x + M4 * (a7.x - t4.x),
    y: t4.y + M4 * (a7.y - t4.y),
    z: t4.z + M4 * (a7.z - t4.z)
  };
}
function q(t4, a7) {
  const n5 = Math.PI / 180, s5 = t4.y * n5, i3 = t4.x * n5, h4 = t4.z || 0, o6 = a7[0] * n5, M4 = a7[1] * n5, r2 = a7[2] / Math.sqrt(1 - a7[3] * Math.sin(o6) ** 2), c6 = i3 - M4, e7 = a7[2] / Math.sqrt(1 - a7[3] * Math.sin(s5) ** 2), u5 = a7[3] * (r2 * Math.sin(o6) - e7 * Math.sin(s5));
  return {
    x: (e7 + h4) * Math.cos(s5) * Math.sin(c6),
    y: (e7 + h4) * (Math.sin(s5) * Math.cos(o6) - Math.sin(o6) * Math.cos(s5) * Math.cos(c6)) + u5 * Math.cos(o6),
    z: (e7 + h4) * (Math.sin(s5) * Math.sin(o6) + Math.cos(o6) * Math.cos(s5) * Math.cos(c6)) - r2 + u5 * Math.sin(o6)
  };
}
function w4(t4, a7) {
  const n5 = Math.PI / 180, s5 = Number(t4.x), i3 = Number(t4.y), h4 = Number(t4.z), o6 = a7[0] * n5, M4 = a7[1] * n5, r2 = a7[2] / Math.sqrt(1 - a7[3] * Math.sin(o6) ** 2), c6 = s5 / r2, e7 = i3 / r2, u5 = h4 / r2, m3 = Math.cos(o6) - Math.sin(o6) * e7 + Math.cos(o6) * u5, z3 = Math.sin(o6) + Math.cos(o6) * e7 + Math.sin(o6) * u5, f4 = Math.sqrt(m3 ** 2 + c6 ** 2), y4 = a7[3] * r2 * Math.sin(o6), x4 = o6, p5 = Math.atan(z3 / f4 - (y4 - a7[3] * (a7[2] / Math.sqrt(1 - a7[3] * Math.sin(x4) ** 2)) * Math.sin(x4)) / (r2 * f4)), l4 = Math.atan(z3 / f4 - (y4 - a7[3] * (a7[2] / Math.sqrt(1 - a7[3] * Math.sin(p5) ** 2)) * Math.sin(p5)) / (r2 * f4)), b6 = Math.atan(z3 / f4 - (y4 - a7[3] * (a7[2] / Math.sqrt(1 - a7[3] * Math.sin(l4) ** 2)) * Math.sin(l4)) / (r2 * f4)), g3 = Math.atan(z3 / f4 - (y4 - a7[3] * (a7[2] / Math.sqrt(1 - a7[3] * Math.sin(b6) ** 2)) * Math.sin(b6)) / (r2 * f4)), d6 = Math.atan(s5 / (r2 * m3)) + M4;
  return {
    x: d6 / n5,
    y: g3 / n5,
    z: s5 / (Math.cos(g3) * Math.sin(d6 - M4)) - a7[2] / Math.sqrt(1 - a7[3] * Math.sin(g3) ** 2),
    spatialReference: {
      wkid: 4326
    }
  };
}
function N2(t4) {
  return t4 && w(t4?.spatialReference) ? 1 / Math.cos(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * t4.y / s4.radius))) : 1;
}
function P3(t4, a7, n5) {
  const s5 = 360 / a7, i3 = 180 / n5;
  return {
    heading: (t4.x - a7 / 2) * s5,
    pitch: 90 - (t4.y - n5 / 2) * i3
  };
}
function R2(t4, a7, n5, s5 = t3 / 2) {
  const {
    heading: i3,
    pitch: h4
  } = v2(t4, s5);
  return I2(i3, h4, a7, n5);
}
function I2(t4, a7, n5, s5) {
  return {
    x: n5 / 2 + t4 / (360 / n5),
    y: s5 - a7 / (180 / s5),
    heading: t4,
    pitch: a7
  };
}
function v2(a7, n5) {
  const s5 = M(Math.acos(-a7.z / n5));
  return {
    heading: M(Math.atan2(a7.x, a7.y)),
    pitch: s5
  };
}
function A(t4, n5, s5 = t3 / 2) {
  return [s5 * (Math.sin(h(t4)) * Math.sin(h(n5))), s5 * (Math.cos(h(t4)) * Math.sin(h(n5))), s5 * Math.cos(h(180 - n5))];
}
function E2(a7, n5, s5) {
  return __async(this, null, function* () {
    yield N(n5.spatialReference, a7.spatialReference, null, s5);
    const i3 = yield I(n5, a7.spatialReference, s5);
    let h4 = M(Math.atan2(i3.y - a7.y, i3.x - a7.x));
    return h4 = h4 >= 0 && h4 <= 90 ? 90 - h4 : h4 > 90 && h4 <= 180 ? 360 - h4 + 90 : 90 + Math.abs(h4), h4;
  });
}
function U(t4, a7, n5) {
  const s5 = Math.cos(n5), i3 = Math.sin(n5), h4 = [1, 0, 0, 1, 0, 0], o6 = h4[0] * s5 + h4[2] * i3, M4 = h4[1] * s5 + h4[3] * i3, r2 = -h4[0] * i3 + h4[2] * s5, c6 = -h4[1] * i3 + h4[3] * s5;
  h4[0] = o6, h4[1] = M4, h4[2] = r2, h4[3] = c6;
  return [t4 * h4[0] + a7 * h4[2] + h4[4], t4 * h4[1] + a7 * h4[3] + h4[5]];
}
function k3(t4) {
  return 4 === t4?.type;
}

// ../../../node_modules/@arcgis/core/layers/orientedImagery/core/coverageUtils.js
var A2 = Math.PI / 180;
function b4(e7) {
  return e7.isSpherical ? V2(e7) : D(e7);
}
function D(e7) {
  const {
    horizontalFieldOfView: t4,
    verticalFieldOfView: n5,
    geometry: r2,
    cameraHeading: a7
  } = e7, o6 = N2(r2);
  let i3 = e7.cameraPitch, s5 = e7.cameraRoll, c6 = 150;
  t4 > 150 && (i3 = 90, s5 = 0, c6 = 5);
  const f4 = Math.ceil(t4 / c6), y4 = H(f4, a7, t4);
  let l4 = e7.farDistance ? e7.farDistance * o6 : e7.cameraHeight * o6 / Math.cos(i3 * A2);
  e7.cameraPitch + n5 / 2 >= 90 && (l4 = (e7.farDistance || 20) * o6);
  const m3 = new j({
    spatialReference: r2?.spatialReference
  });
  m3.imageID = e7.objectId;
  let u5 = null;
  for (const x4 of y4) u5 = I3(x4, i3, s5, e7, r2, l4, o6, n5, t4, f4, m3);
  return u5.imageID = e7.objectId, {
    polygon: m3,
    frustum: u5
  };
}
function H(e7, t4, n5) {
  const r2 = [];
  if (e7 % 2 == 0) for (let a7 = 0; a7 < e7 / 2; a7++) r2.push(t4 - n5 / e7 * (a7 + 0.5), t4 + n5 / e7 * (a7 + 0.5));
  else {
    r2.push(t4);
    for (let a7 = 1; a7 < e7 / 2; a7++) r2.push(t4 - n5 / e7 * a7, t4 + n5 / e7 * a7);
  }
  return r2.sort(), r2;
}
function I3(e7, n5, o6, i3, s5, c6, f4, y4, l4, m3, u5) {
  const x4 = g2("HPR", [e7, n5, o6]), p5 = q2(i3, x4), h4 = l3([0, 0, -1], x4), {
    x: d6,
    y: R3
  } = s5, j5 = x2([d6, R3, i3.cameraHeight], h4, c6, f4), P4 = 2 * Math.tan(y4 * A2 / 2) * c6, v4 = 2 * Math.tan(l4 / m3 * A2 / 2) * c6, b6 = l3([0, 1, 0], x4), D2 = l3([1, 0, 0], x4), H3 = p3(b6, P4 / 2, f4), I6 = p3(D2, v4 / 2, f4), V3 = K(o2(), H3, I6), F2 = u(o2(), H3, I6), U3 = S2([u(o2(), j5, V3), u(o2(), j5, F2), K(o2(), j5, V3), K(o2(), j5, F2)], i3.cameraHeight, s5, f4);
  return U3.push(U3[0]), u5.addRing(U3), p5;
}
function S2(e7, t4, n5, r2) {
  return e7.map((e8) => O(e8, t4, n5, r2));
}
function V2(e7) {
  const {
    geometry: t4,
    farDistance: n5,
    objectId: r2,
    nearDistance: a7,
    cameraHeight: s5
  } = e7, c6 = N2(t4), f4 = new b2({
    center: t4.clone(),
    radius: n5 * c6
  });
  if (f4.imageID = r2, a7) {
    const e8 = new b2({
      center: t4.clone(),
      radius: a7 * c6
    });
    f4.addRing(e8.rings[0]);
  }
  const y4 = t4.clone();
  y4.z = s5 - n5 * c6;
  const l4 = $.createSphere(y4, {
    size: 2 * n5 * c6
  });
  return l4.imageID = r2, {
    polygon: f4,
    frustum: l4
  };
}
function F(e7, t4) {
  return e7.contains(t4);
}
function U2(e7, t4) {
  return Math.sign(e7) !== Math.sign(t4);
}
function q2(e7, n5, o6) {
  const {
    cameraHeight: s5,
    cameraPitch: c6,
    farDistance: f4,
    geometry: y4,
    horizontalFieldOfView: m3,
    nearDistance: u5,
    verticalFieldOfView: x4
  } = e7, p5 = k4(y4), h4 = u5 < 0 ? 0 : u5 * p5;
  let g3 = s5 * p5 / Math.cos(c6 * A2), d6 = true;
  c6 + x4 / 2 >= 90 && (g3 = (f4 ?? 20) * p5, d6 = false);
  const R3 = 2 * Math.tan(x4 * A2 / 2) * h4, j5 = 2 * Math.tan(m3 * A2 / 2) * h4, P4 = 2 * Math.tan(x4 * A2 / 2) * g3, v4 = 2 * Math.tan(m3 * A2 / 2) * g3;
  let b6, D2;
  D2 = [0, 0, -1], D2 = l3(D2, n5), b6 = x2([y4.x, y4.y, s5], D2, g3, p5), d6 && (b6[2] = 0);
  const H3 = x2([y4.x, y4.y, s5], D2, h4, p5);
  let I6 = [0, 1, 0];
  I6 = l3(I6, n5);
  let S5 = [1, 0, 0];
  S5 = l3(S5, n5);
  let V3 = [], F2 = [];
  h4 ? (F2 = [{
    faces: [4, 0, 3, 4, 7, 3]
  }, {
    faces: [5, 1, 2, 5, 6, 2]
  }, {
    faces: [4, 0, 1, 4, 5, 1]
  }, {
    faces: [6, 2, 3, 6, 7, 3]
  }], V3 = V3.concat(u(o2(), H3, K(o2(), p3(I6, R3 / 2, p5), p3(S5, j5 / 2, p5)))), V3 = V3.concat(u(o2(), H3, u(o2(), p3(I6, R3 / 2, p5), p3(S5, j5 / 2, p5)))), V3 = V3.concat(K(o2(), H3, K(o2(), p3(I6, R3 / 2, p5), p3(S5, j5 / 2, p5)))), V3 = V3.concat(K(o2(), H3, u(o2(), p3(I6, R3 / 2, p5), p3(S5, j5 / 2, p5))))) : (V3 = [y4.x, y4.y, s5], F2 = [{
    faces: [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1]
  }]), V3 = V3.concat(u(o2(), b6, K(o2(), p3(I6, P4 / 2, p5), p3(S5, v4 / 2, p5)))), V3 = V3.concat(u(o2(), b6, u(o2(), p3(I6, P4 / 2, p5), p3(S5, v4 / 2, p5)))), V3 = V3.concat(K(o2(), b6, K(o2(), p3(I6, P4 / 2, p5), p3(S5, v4 / 2, p5)))), V3 = V3.concat(K(o2(), b6, u(o2(), p3(I6, P4 / 2, p5), p3(S5, v4 / 2, p5))));
  const U3 = new l({
    position: Float64Array.from(V3)
  });
  return new $({
    vertexAttributes: U3,
    components: F2,
    spatialReference: y4.spatialReference
  });
}
function O(e7, n5, a7, o6) {
  {
    const i3 = Math.sqrt((e7[2] - n5) ** 2 + (Math.sqrt((e7[0] - a7.x) ** 2 + (e7[1] - a7.y) ** 2) / o6) ** 2) * o6, s5 = p3(K(o2(), [e7[0], e7[1], e7[2]], [a7.x, a7.y, n5]), 1 / i3, 1 / o6), c6 = n5 / (n5 - e7[2]), f4 = {
      x: (1 - c6) * a7.x + c6 * e7[0],
      y: (1 - c6) * a7.y + c6 * e7[1],
      z: (1 - c6) * n5 + c6 * e7[2]
    }, y4 = Math.sqrt((f4.z - n5) ** 2 + (Math.sqrt((f4.x - a7.x) ** 2 + (f4.y - a7.y) ** 2) / o6) ** 2) * o6, l4 = p3(K(o2(), [f4.x, f4.y, f4.z], [a7.x, a7.y, n5]), 1 / y4, 1 / o6);
    return U2(s5[0], l4[0]) && U2(s5[1], l4[1]) && U2(s5[2], l4[2]) || e7[2] >= 0 ? [e7[0], e7[1], 0] : [f4.x, f4.y, f4.z];
  }
}
function C(e7) {
  const {
    spatialReference: t4,
    x: n5,
    y: r2
  } = e7.geometry, {
    cameraHeading: a7,
    cameraPitch: o6,
    farDistance: i3,
    nearDistance: s5
  } = e7, c6 = k4(e7.geometry), f4 = new j({
    spatialReference: t4
  }), y4 = Math.abs(1.44 * i3 * c6);
  let l4 = Math.abs(1.44 * s5 * c6);
  (o6 < 20 || null == a7) && (l4 = y4);
  const m3 = [];
  return m3[0] = {
    x: n5 + y4 * Math.sin((a7 - 45) * A2),
    y: r2 + y4 * Math.cos((a7 - 45) * A2)
  }, m3[1] = {
    x: n5 + y4 * Math.sin((a7 + 45) * A2),
    y: r2 + y4 * Math.cos((a7 + 45) * A2)
  }, m3[2] = {
    x: n5 + l4 * Math.sin((a7 + 135) * A2),
    y: r2 + l4 * Math.cos((a7 + 135) * A2)
  }, m3[3] = {
    x: n5 + l4 * Math.sin((a7 + 225) * A2),
    y: r2 + l4 * Math.cos((a7 + 225) * A2)
  }, f4.addRing([[m3[0].x, m3[0].y, 0], [m3[1].x, m3[1].y, 0], [m3[2].x, m3[2].y, 0], [m3[3].x, m3[3].y, 0], [m3[0].x, m3[0].y, 0]]), f4;
}
function k4(e7) {
  return e7 && w(e7?.spatialReference) ? 1 / Math.cos(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * e7.y / s4.radius))) : 1;
}
function E3(e7, n5) {
  const a7 = 1 + n5 / 100;
  if ("esri.geometry.Circle" === e7.declaredClass) {
    const {
      radius: t4,
      center: n6
    } = e7, r2 = new b2({
      radius: t4 * a7,
      center: n6
    });
    return e7.rings.length > 1 && r2.addRing(e7.rings[1]), r2;
  }
  if ("esri.geometry.Polygon" === e7.declaredClass) {
    const n6 = new j({
      spatialReference: e7.spatialReference
    }), o6 = e7.centroid;
    if (o6) {
      const i3 = [];
      for (let n7 = 0; n7 < e7.rings[0].length; n7++) {
        const s5 = Math.sqrt((o6.x - e7.rings[0][n7][0]) ** 2 + (o6.y - e7.rings[0][n7][1]) ** 2), c6 = p3(K(o2(), [e7.rings[0][n7][0], e7.rings[0][n7][1], 0], [o6.x, o6.y, 0]), 1 / s5, 1), f4 = x2([o6.x, o6.y, 0], c6, s5 * a7, 1);
        i3.push({
          x: f4[0],
          y: f4[1]
        });
      }
      n6.addRing([[i3[0].x, i3[0].y, 0], [i3[1].x, i3[1].y, 0], [i3[2].x, i3[2].y, 0], [i3[3].x, i3[3].y, 0], [i3[0].x, i3[0].y, 0]]);
    }
    return n6;
  }
  return e7;
}
function L(e7, t4, n5) {
  return __async(this, null, function* () {
    const {
      cameraHeight: r2,
      cameraLocation: a7,
      cameraPitch: o6,
      frustumVertices: i3,
      horizontalFieldOfView: s5,
      imageHeight: c6,
      imageWidth: f4,
      inSRS: y4,
      outSRS: l4,
      verticalFieldOfView: m3,
      cameraRoll: u5,
      imageRotation: x4,
      options: p5
    } = n5, h4 = new f2(y4), g3 = new f2(l4), z3 = d4(s5, m3, u5 ?? 0), M4 = i3.length > 15;
    return o6 + z3.vfov / 2 >= 90 ? yield K3(i3, e7, f4, c6, h4, g3, M4, x4, p5) : yield W(i3, e7, t4, a7, r2, M4, h4, g3, p5);
  });
}
function W(e7, t4, n5, r2, a7, o6, s5, c6, f4) {
  return __async(this, null, function* () {
    const y4 = B3(e7, t4, n5, r2, a7);
    if (!y4) return;
    const {
      farPlane: m3,
      nearPlane: u5
    } = y4, x4 = yield N3([...u5?.vertexPositions ?? e7.slice(0, 3), ...m3.vertexPositions], s5, c6, f4);
    return new $({
      vertexAttributes: new l({
        position: x4
      }),
      components: Y(X2(o6)),
      spatialReference: c6
    });
  });
}
function B3(e7, t4, n5, r2, a7) {
  const o6 = T2(e7), i3 = T2(e7, "near");
  if (!o6) return;
  const {
    coefficients: s5
  } = o6, c6 = t4.length;
  for (let f4 = 0; f4 < c6; f4++) {
    const e8 = Q([n5[f4][0], n5[f4][1]], s5), t5 = n5[f4];
    t5[2] = (t5[2] >= 0 ? e8 : t5[2]) ?? 0;
    const c7 = [t5[0] - r2[0], t5[1] - r2[1], t5[2] - (r2[2] ?? a7)];
    J(r2, c7, f4, i3), G(r2, c7, f4, o6, n5, e8);
  }
  return {
    farPlane: o6,
    nearPlane: i3
  };
}
function G(e7, t4, r2, a7, o6, i3) {
  const {
    coefficients: s5,
    vertexPositions: c6
  } = a7;
  if (null != i3 && i3 >= 0) c6.splice(3 * r2, 3, ...o6[r2]);
  else {
    const a8 = n2();
    B2(s5, m(e7, t4), a8) && c6.splice(3 * r2, 3, ...a8);
  }
}
function J(e7, t4, r2, a7) {
  if (!a7) return;
  const o6 = n2();
  B2(a7.coefficients, m(e7, t4), o6) && a7.vertexPositions.splice(3 * r2, 3, ...o6);
}
function K3(e7, t4, n5, r2, a7, o6, s5, c6 = 0, f4) {
  return __async(this, null, function* () {
    const y4 = Math.cos((c6 ?? 0) * A2), m3 = Math.sin((c6 ?? 0) * A2), u5 = Math.abs(n5 * y4 + r2 * m3), x4 = Math.abs(n5 * -m3 + r2 * y4);
    let p5, h4, g3 = s5 ? new Array() : [e7[0], e7[1], e7[2]], z3 = new Array();
    const M4 = t4.length;
    for (let i3 = 0; i3 < M4; i3++) {
      const a8 = [u5 / 2, x4 / 2], o7 = t4[i3];
      h4 = [(o7[0] - a8[0]) * y4 - (o7[1] - a8[1]) * m3 + a8[0], (o7[0] - a8[0]) * m3 + (o7[1] - a8[1]) * y4 + a8[1]], s5 ? (p5 = f3({
        x: h4[0],
        y: h4[1],
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, {
        x: n5,
        y: 0,
        z: 1
      }, {
        x: n5,
        y: r2,
        z: 1
      }, {
        x: 0,
        y: r2,
        z: 1
      }, {
        x: e7[0],
        y: e7[1],
        z: e7[2]
      }, {
        x: e7[3],
        y: e7[4],
        z: e7[5]
      }, {
        x: e7[6],
        y: e7[7],
        z: e7[8]
      }, {
        x: e7[9],
        y: e7[10],
        z: e7[11]
      }), g3 = g3.concat([p5.x, p5.y, p5.z]), p5 = f3({
        x: h4[0],
        y: h4[1],
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, {
        x: n5,
        y: 0,
        z: 1
      }, {
        x: n5,
        y: r2,
        z: 1
      }, {
        x: 0,
        y: r2,
        z: 1
      }, {
        x: e7[12],
        y: e7[13],
        z: e7[14]
      }, {
        x: e7[15],
        y: e7[16],
        z: e7[17]
      }, {
        x: e7[18],
        y: e7[19],
        z: e7[20]
      }, {
        x: e7[21],
        y: e7[22],
        z: e7[23]
      }), z3 = z3.concat([p5.x, p5.y, p5.z])) : (p5 = f3({
        x: h4[0],
        y: h4[1],
        z: 1
      }, {
        x: 0,
        y: 0,
        z: 1
      }, {
        x: n5,
        y: 0,
        z: 1
      }, {
        x: n5,
        y: r2,
        z: 1
      }, {
        x: 0,
        y: r2,
        z: 1
      }, {
        x: e7[3],
        y: e7[4],
        z: e7[5]
      }, {
        x: e7[6],
        y: e7[7],
        z: e7[8]
      }, {
        x: e7[9],
        y: e7[10],
        z: e7[11]
      }, {
        x: e7[12],
        y: e7[13],
        z: e7[14]
      }), g3 = g3.concat([p5.x, p5.y, p5.z]));
    }
    g3 = g3.concat(z3);
    const w7 = yield N3(g3, a7, o6, f4);
    return new $({
      vertexAttributes: new l({
        position: w7
      }),
      components: Y(X2(s5)),
      spatialReference: o6
    });
  });
}
function N3(t4, n5, r2, a7) {
  return __async(this, null, function* () {
    if (n5.equals(r2)) return t4;
    const o6 = t4.reduce((e7, t5, n6) => {
      const r3 = Math.floor(n6 / 3);
      return e7[r3] || (e7[r3] = new Array()), e7[r3].push(t5), e7;
    }, new Array()), {
      points: i3
    } = yield I(new u2(o6, n5), r2, a7);
    return s2(a7), i3.flat();
  });
}
function Q(e7, t4) {
  if (t4) return (-t4[3] - t4[0] * e7[0] - t4[1] * e7[1]) / t4[2];
}
function T2(e7, t4 = "far") {
  const n5 = E();
  let r2;
  switch (t4) {
    case "far":
      if (r2 = Array.from(15 === e7.length ? e7.slice(3) : e7.slice(12)), d3(n5, r2, false)) return {
        coefficients: n5,
        vertexPositions: r2
      };
      break;
    case "near":
      if (r2 = Array.from(e7.slice(0, 12)), 15 === e7.length || !d3(n5, r2, false)) return;
      return {
        coefficients: n5,
        vertexPositions: r2
      };
  }
}
var X2 = (e7) => e7 ? [{
  faces: new Uint32Array([4, 0, 3, 4, 7, 3])
}, {
  faces: new Uint32Array([5, 1, 2, 5, 6, 2])
}, {
  faces: new Uint32Array([4, 0, 1, 4, 5, 1])
}, {
  faces: new Uint32Array([6, 2, 3, 6, 7, 3])
}] : [{
  faces: new Uint32Array([0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1])
}];
var Y = (e7) => e7.map((e8) => new h3(e8));

// ../../../node_modules/@arcgis/core/layers/orientedImagery/core/cameraOrientationFactory.js
var e6 = class {
  static getCameraOrientation(r2) {
    return w3(r2);
  }
  static register(r2, o6, s5) {
    g.set(r2, {
      desc: o6,
      constructor: s5
    });
  }
};
e6 = e([a("esri.layers.orientedImagery.core.cameraOrientationFactory")], e6);
var a5 = e6;

// ../../../node_modules/@arcgis/core/layers/orientedImagery/core/ExposurePoint.js
function v3(e7) {
  throw new s("exposure-point:missing-default-value", `a value for ${e7} is missing in default properties`);
}
function w5(e7, r2) {
  throw new s("exposure-point:missing-attribute-value", `a value for ${e7} is missing in attribute table`, {
    exposurePoint: r2
  });
}
var O2 = class extends i(f) {
  constructor(e7) {
    super(e7), this.cameraOrientation = null, this.elevation = null, this.elevationSource = null, this.name = null, this.sourceMap = null;
  }
  read(e7, r2) {
    const t4 = {}, {
      attributes: o6,
      layer: a7,
      geometry: i3
    } = e7, n5 = {};
    for (const c6 in o6) t4[c6.toLowerCase()] = o6[c6], n5[c6.toLowerCase()] = c6;
    super.read(__spreadValues({
      geometry: i3,
      layer: a7 ?? {},
      sourceMap: n5
    }, t4), r2);
  }
  write(e7, r2) {
    const t4 = super.write(e7, r2), {
      sourceMap: o6
    } = this;
    if (!o6 || !t4) return t4;
    const a7 = {};
    for (const i3 in t4) {
      const e8 = o6[i3.toLowerCase()];
      e8 && (a7[e8] = t4[i3]);
    }
    return a7;
  }
  readCameraHeading(e7, r2) {
    const {
      cameraheading: t4,
      camheading: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.cameraHeading;
  }
  readCameraHeight(e7, r2) {
    const {
      cameraheight: t4,
      avghtag: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.cameraHeight;
  }
  readCamOffset(e7, r2) {
    const {
      cameraoffset: t4,
      camoffset: o6
    } = r2;
    return t4?.split(";").map(Number) ?? o6?.split(";").map(Number) ?? null;
  }
  writeCameraOffset(e7, r2) {
    e7 && (r2.cameraOffset = e7.join(";"));
  }
  readCameraOrientation(e7, r2) {
    const {
      cameraorientation: t4,
      camori: o6
    } = r2;
    return t4 ?? o6;
  }
  readCameraPitch(e7, r2) {
    const {
      camerapitch: t4,
      campitch: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.cameraPitch;
  }
  readCameraRoll(e7, r2) {
    const {
      cameraroll: t4,
      camroll: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.cameraRoll;
  }
  readDepthImage(e7, r2) {
    const {
      depthimage: t4,
      depthimg: o6,
      layer: a7
    } = r2, i3 = t4 ?? o6 ?? null, {
      depthImagePathPrefix: n5,
      depthImagePathSuffix: c6
    } = a7 ?? {};
    return u3(i3, n5, c6);
  }
  readElevationSource(e7, r2) {
    const {
      elevationsource: t4,
      layer: o6
    } = r2, {
      demPathSuffix: a7,
      demPathPrefix: i3
    } = o6;
    if (t4) {
      const e8 = this._parseIfJSON(t4);
      return c4(e8, i3, a7);
    }
    return o6.effectiveElevationSource;
  }
  readFarDistance(e7, r2) {
    const {
      fardistance: t4,
      fardist: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.farDistance;
  }
  readHFOV(e7, r2) {
    const {
      horizontalfieldofview: t4,
      hfov: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.horizontalFieldOfView;
  }
  readImageURL(e7, r2) {
    const {
      imagepath: t4,
      layer: o6
    } = r2;
    t4 || w5("imagePath", this);
    const {
      imagePathPrefix: a7,
      imagePathSuffix: i3
    } = o6;
    return u3(t4, a7, i3);
  }
  readImageRotation(e7, r2) {
    const {
      imagerotation: t4,
      imgrot: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.imageRotation;
  }
  get isHorizontal() {
    return "horizontal" === this.orientedImageryType;
  }
  get isInspection() {
    return "inspection" === this.orientedImageryType;
  }
  get isNadir() {
    return "nadir" === this.orientedImageryType;
  }
  get isOblique() {
    return "oblique" === this.orientedImageryType;
  }
  get isSpherical() {
    return "360" === this.orientedImageryType;
  }
  get location() {
    const {
      cameraOrientation: e7,
      cameraHeight: r2,
      elevation: t4
    } = this;
    if (e7) {
      const {
        type: r3,
        x: t5,
        y: o7,
        z: a7,
        horizontalWKID: i3
      } = e7;
      return new _({
        x: t5,
        y: o7,
        z: a7,
        spatialReference: {
          wkid: r3 === P2.LTP ? 4326 : i3
        }
      });
    }
    if ("number" != typeof r2) throw v3("cameraHeight");
    const o6 = this.geometry.clone();
    return o6.z = o6.hasZ ? o6.z : (t4 ?? 0) + r2, o6;
  }
  readNearDistance(e7, r2) {
    const {
      neardistance: t4,
      neardist: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.nearDistance;
  }
  readOrientationAccuracy(e7, r2) {
    const {
      accuracy: t4,
      orientationaccuracy: o6
    } = r2;
    return o6?.split(";").map(Number) ?? t4?.split(";").map(Number) ?? null;
  }
  writeOrientationAccuracy(e7, r2) {
    e7 && (r2.orientationAccuracy = e7.join(";"));
  }
  readOIType(e7, r2) {
    const {
      orientedimagerytype: t4,
      oitype: o6,
      camerapitch: a7,
      campitch: i3,
      layer: n5
    } = r2, c6 = p.read(t4 ?? o6 ?? n5.orientedImageryType), p5 = a7 ?? i3 ?? n5.cameraPitch;
    return "oblique" === c6 ? p5 < 10 ? "nadir" : "oblique" : c6;
  }
  readVFOV(e7, r2) {
    const {
      verticalfieldofview: t4,
      vfov: o6,
      layer: a7
    } = r2;
    return t4 ?? o6 ?? a7.verticalFieldOfView;
  }
  _parseIfJSON(e7) {
    let r2 = null;
    try {
      r2 = JSON.parse(e7);
    } catch (t4) {
      n.getLogger(this).error("couldn't parse the given elevation source JSON", e7, t4);
    }
    return r2;
  }
};
e([y({
  type: Date,
  json: {
    write: {
      enabled: true,
      target: "aquisitionDate"
    },
    name: "acquisitiondate"
  }
})], O2.prototype, "acquisitionDate", void 0), e([y({
  type: Number,
  json: {
    write: true,
    read: {
      source: ["cameraheading", "camheading", "layer.cameraHeading"]
    }
  }
})], O2.prototype, "cameraHeading", void 0), e([o("cameraHeading")], O2.prototype, "readCameraHeading", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "cameraHeight", void 0), e([o("cameraHeight", ["cameraheight", "avghtag", "layer.cameraHeight"])], O2.prototype, "readCameraHeight", null), e([y()], O2.prototype, "cameraOffset", void 0), e([o("cameraOffset", ["cameraoffset", "camoffset"])], O2.prototype, "readCamOffset", null), e([r("cameraOffset")], O2.prototype, "writeCameraOffset", null), e([y({
  json: {
    write: {
      writer: (e7, r2, t4) => {
        r2[t4] = e7.toString();
      }
    }
  },
  type: a3
}), s3((e7) => e7 ? a5.getCameraOrientation(e7) : null)], O2.prototype, "cameraOrientation", void 0), e([o("cameraOrientation", ["cameraorientation", "camori"])], O2.prototype, "readCameraOrientation", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "cameraPitch", void 0), e([o("cameraPitch", ["camerapitch", "campitch", "layer.cameraPitch"])], O2.prototype, "readCameraPitch", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "cameraRoll", void 0), e([o("cameraRoll", ["cameraroll", "camroll", "layer.cameraRoll"])], O2.prototype, "readCameraRoll", null), e([y({
  json: {
    write: true
  },
  type: String
})], O2.prototype, "depthImage", void 0), e([o("depthImage", ["depthimage", "depthimg"])], O2.prototype, "readDepthImage", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "elevation", void 0), e([y({
  json: {
    write: true
  },
  clonable: "reference"
})], O2.prototype, "elevationSource", void 0), e([o("elevationSource", ["elevationsource", "layer.effectiveElevationSource"])], O2.prototype, "readElevationSource", null), e([y({
  json: {
    name: "exposurestationid",
    write: {
      target: "exposureStationId"
    }
  },
  type: String
})], O2.prototype, "exposureStationId", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "farDistance", void 0), e([o("farDistance", ["fardistance", "fardist", "layer.farDistance"])], O2.prototype, "readFarDistance", null), e([y({
  type: _,
  json: {
    name: "geometry"
  }
})], O2.prototype, "geometry", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "horizontalFieldOfView", void 0), e([o("horizontalFieldOfView", ["horizontalfieldofview", "hfov", "layer.horizontalFieldOfView"])], O2.prototype, "readHFOV", null), e([y({
  json: {
    write: true
  },
  type: String
})], O2.prototype, "imagePath", void 0), e([o("imagePath", ["imagepath"])], O2.prototype, "readImageURL", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "imageRotation", void 0), e([o("imageRotation", ["imagerotation", "imgrot", "layer.imageRotation"])], O2.prototype, "readImageRotation", null), e([y()], O2.prototype, "isHorizontal", null), e([y()], O2.prototype, "isInspection", null), e([y()], O2.prototype, "isNadir", null), e([y()], O2.prototype, "isOblique", null), e([y()], O2.prototype, "isSpherical", null), e([y()], O2.prototype, "location", null), e([y({
  json: {
    write: true
  },
  type: String
})], O2.prototype, "name", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "nearDistance", void 0), e([o("nearDistance", ["neardistance", "neardist", "layer.nearDistance"])], O2.prototype, "readNearDistance", null), e([y({
  json: {
    write: true,
    name: "objectid"
  },
  type: Number
})], O2.prototype, "objectId", void 0), e([y()], O2.prototype, "orientationAccuracy", void 0), e([o("orientationAccuracy", ["accuracy", "orientationaccuracy"])], O2.prototype, "readOrientationAccuracy", null), e([r("orientationAccuracy")], O2.prototype, "writeOrientationAccuracy", null), e([o4(p)], O2.prototype, "orientedImageryType", void 0), e([o("orientedImageryType", ["orientedimagerytype", "oitype", "layer.orientedImageryType"])], O2.prototype, "readOIType", null), e([y({
  type: Number,
  json: {
    name: "sortorder",
    write: {
      target: "sortOrder"
    }
  }
})], O2.prototype, "sortOrder", void 0), e([y({
  type: Object
})], O2.prototype, "sourceMap", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], O2.prototype, "verticalFieldOfView", void 0), e([o("verticalFieldOfView", ["verticalfieldofview", "vfov", "layer.verticalFieldOfView"])], O2.prototype, "readVFOV", null), O2 = e([a("esri.layers.orientedImagery.core.ExposurePoint")], O2);
var j4 = O2;

// ../../../node_modules/@arcgis/core/layers/orientedImagery/transformations/groundToImageUtils.js
var x3 = Math.PI / 180;
function S3(e7, t4, a7 = false) {
  return __async(this, null, function* () {
    if (!e7) return [];
    e7 = e7.map((e8) => "esri.geometry.Point" === e8.declaredClass ? e8 : _.fromJSON(e8));
    const {
      feature: r2
    } = t4, {
      attributes: i3
    } = r2;
    if (isNaN(parseFloat(i3.elevation))) {
      const e8 = yield M2([r2.geometry], t4);
      r2.attributes.elevation = e8[0].z;
    }
    return M2(e7, t4, a7).then((e8) => H2(e8, t4));
  });
}
function M2(e7, t4, a7 = false) {
  return __async(this, null, function* () {
    if (a7) return e7;
    const {
      feature: {
        attributes: {
          cameraOrientation: r2,
          elevationSource: i3,
          cameraHeight: n5,
          location: o6
        },
        elevationSample: s5
      }
    } = t4;
    return s5 ? Promise.all(e7.map(N4(s5, t4.options))) : i3 && (a4(i3) || i3.url?.length) ? E4(e7, t4) : I4(e7, r2 && "number" == typeof o6.z ? o6.z - n5 : 0);
  });
}
function E4(e7, r2) {
  return __async(this, null, function* () {
    const {
      feature: i3,
      options: n5,
      footprintExtent: s5
    } = r2, c6 = i3.attributes.elevationSource;
    if (!c6) return e7;
    if (a4(c6)) {
      const {
        constantElevation: t4
      } = c6;
      return "number" != typeof t4 ? e7 : I4(e7, t4);
    }
    const {
      url: m3
    } = c6;
    if (!m3) return e7;
    const {
      elevationSample: p5
    } = i3;
    if (!p5) {
      if (!s5) return e7;
      const r3 = s5.clone(), {
        error: o6,
        isSupported: p6,
        isDynamic: y4
      } = yield l2(m3);
      if (!p6) {
        n.getLogger(c6).warn(o6);
        const {
          location: a7,
          cameraHeight: r4,
          cameraOrientation: n6
        } = i3.attributes;
        return I4(e7, n6 && "number" == typeof a7.z ? a7.z - r4 : 0);
      }
      let h4, w7 = e7;
      try {
        if (y4) {
          h4 = new x({
            url: m3,
            format: "lerc",
            rasterFunction: {
              functionName: c6.rasterFunction ?? "None"
            }
          }), yield h4.load(n5);
          let e8, t4 = 512, a7 = 512;
          const o7 = s5.width / s5.height;
          o7 > 1 ? (a7 /= o7, e8 = r3.height / a7) : (t4 *= o7, e8 = r3.width / t4);
          const p7 = yield h4.fetchImage(s5, t4, a7, n5), f4 = z.create({
            scales: [e8],
            size: 512,
            spatialReference: s5.spatialReference
          }), y5 = new t(null, 0, 0, 0, o3(s5)), d6 = new a2(p7.pixelData.pixelBlock.pixels[0], t4, a7, 0), g3 = new t2(y5, d6);
          i3.elevationSample = new c3(g3, f4, void 0);
        } else h4 = new T(m3), yield h4.load(), i3.elevationSample = yield h4.createElevationSampler(r3, n5);
        w7 = yield Promise.all(e7.map(N4(i3.elevationSample, n5)));
      } catch (g3) {
        if (!b(g3)) {
          n.getLogger("esri.layers.orientedImagery.transformations.groundToImageUtils").warn(`#updateElevation() failed to update elevation using the provided elevation source URL: ${m3}. Please provide a valid elevation source url.`, g3);
          const {
            location: a7,
            cameraHeight: r4,
            cameraOrientation: n6
          } = i3.attributes;
          e7 = I4(e7, n6 && "number" == typeof a7.z ? a7.z - r4 : 0);
        }
      } finally {
        h4?.destroy();
      }
      return w7;
    }
    return yield N(e7[0].spatialReference, p5.spatialReference, null, r2.options), Promise.all(e7.map(N4(p5, n5)));
  });
}
function N4(e7, t4) {
  return s2(t4), (a7) => __async(this, null, function* () {
    a7.z = 1;
    const r2 = e7.queryElevation(K2(a7, e7.spatialReference));
    return r2?.z && (a7.z = (yield I(r2, a7.spatialReference, t4)).z), a7;
  });
}
function I4(e7, t4) {
  return e7.map((e8) => (e8.z = t4, e8));
}
function H2(e7, t4) {
  const {
    attributes: a7
  } = t4.feature;
  return a7.isSpherical || 360 === a7.horizontalFieldOfView ? W2(e7, t4) : a7.cameraOrientation?.isAdvanced ? T3(e7, t4) : Promise.resolve(L2(e7, t4));
}
function W2(e7, t4) {
  return __async(this, null, function* () {
    const a7 = Array.isArray(e7) ? e7 : [e7], r2 = new Array(), {
      location: i3,
      cameraOrientation: n5,
      cameraHeading: o6
    } = t4.feature.attributes, s5 = t4.imageProperties.height ?? 1, c6 = t4.imageProperties.width ?? 1;
    return yield q3(i3, a7, o6, c6, s5, r2, n5), r2;
  });
}
function q3(e7, t4, a7, r2, i3, o6, s5) {
  return __async(this, null, function* () {
    const l4 = e7.spatialReference.isWGS84 && 4 !== s5?.type ? d(e7) : new _(e7), {
      latitude: f4,
      longitude: u5,
      ellipsoidRadius: y4,
      squaredEccentricity: d6
    } = s5 ?? {};
    for (const p5 of t4) {
      const e8 = p5.spatialReference.isWGS84 && 4 === s5?.type ? new _(q(p5, [f4, u5, y4, d6])) : p5.spatialReference.equals(l4.spatialReference) ? new _(p5) : yield I(p5, l4.spatialReference), t5 = e2(l4, e8);
      e8.x -= l4.x, e8.y -= l4.y, e8.z = (e8.z ?? 0) - (l4.z ?? 0);
      const R3 = v2(e8, t5);
      R3.heading = (R3.heading - a7) % 360;
      const {
        x: v4,
        y: b6
      } = I2(R3.heading, R3.pitch, r2, i3);
      o6.push(new _(v4, b6, o5.spatialReference));
    }
  });
}
function L2(e7, t4) {
  const {
    feature: a7,
    imageProperties: r2
  } = t4, {
    width: o6,
    height: s5
  } = r2, {
    attributes: c6
  } = a7, l4 = g2("HPR", [c6.cameraHeading, c6.cameraPitch, c6.cameraRoll]), m3 = Math.sin(c6.imageRotation ?? 0 * x3), f4 = Math.cos(c6.imageRotation ?? 0 * x3), u5 = o6 ?? 1, y4 = s5 ?? 1, d6 = [Math.abs(f4 * u5 + m3 * y4), Math.abs(f4 * y4 - m3 * u5)], h4 = {
    horizontal: 1 / (2 * Math.tan(c6.horizontalFieldOfView * x3 / 2)),
    vertical: 1 / (2 * Math.tan(c6.verticalFieldOfView * x3 / 2))
  }, w7 = [-h4.horizontal, 0, 0.5, 0, h4.vertical, 0.5, 0, 0, 1];
  let v4 = new _(c6.location);
  v4.spatialReference.isWGS84 && 4 !== c6.cameraOrientation?.type && (v4 = d(v4));
  const b6 = v4.spatialReference.isWebMercator ? 1 / Math.cos(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * v4.y / 6378137))) : 1, z3 = B(new Array(9), l4, w7);
  return e7.map((e8) => {
    let t5 = new _(e8);
    if (t5.spatialReference.isWGS84) if (4 === c6.cameraOrientation?.type) {
      const e9 = c6.cameraOrientation;
      t5 = new _(q(t5, [e9.latitude, e9.longitude, e9.ellipsoidRadius, e9.squaredEccentricity]));
    } else t5 = new _(d(t5));
    const a8 = (t5.z ?? 0) - (v4.z ?? 0), r3 = (t5.x - v4.x) / b6, i3 = (t5.y - v4.y) / b6, o7 = (z3[0] * r3 + z3[1] * i3 + z3[2] * a8) / (z3[6] * r3 + z3[7] * i3 + z3[8] * a8), s6 = (z3[3] * r3 + z3[4] * i3 + z3[5] * a8) / (z3[6] * r3 + z3[7] * i3 + z3[8] * a8), l5 = {
      x: o7 * d6[0],
      y: s6 * d6[1]
    };
    return {
      x: f4 * (l5.x - d6[0] / 2) + m3 * (l5.y - d6[1] / 2) + u5 / 2,
      y: -m3 * (l5.x - d6[0] / 2) + f4 * (l5.y - d6[1] / 2) + y4 / 2
    };
  });
}
function T3(t4, a7) {
  const {
    feature: r2
  } = a7, {
    attributes: i3
  } = r2, c6 = i3.cameraOrientation;
  if (!c6) throw new s("groundToImageUtils:missing-camera-orientation-parameters", "CameraOrientation Parameters are required to perform advanced transformations");
  let l4 = new _(i3.location);
  l4.spatialReference.isWGS84 && 4 !== i3.cameraOrientation?.type && (l4 = d(l4));
  const m3 = l4.spatialReference.isWebMercator ? 1 / Math.cos(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * l4.y / 6378137))) : 1;
  let f4;
  if ("esri.layers.orientedImagery.core.CameraOrientationOPK" === c6.declaredClass) {
    const {
      omega: e7,
      phi: t5,
      kappa: a8
    } = c6;
    f4 = g2("OPK", [e7, t5, a8]);
  } else {
    const {
      cameraHeading: e7,
      cameraPitch: t5,
      cameraRoll: a8
    } = i3;
    f4 = g2("HPR", [e7, t5, a8]);
  }
  const {
    principalOffsetPoint: u5,
    focalLength: y4,
    radialDistortionCoefficients: d6,
    affineTransformations: h4,
    tangentialDistortionCoefficients: w7
  } = c6;
  return Promise.all(t4.map((e7) => __async(this, null, function* () {
    let r3;
    return e7.spatialReference.equals(l4.spatialReference) ? (r3 = new _(e7), c7(r3)) : (yield N(t4[0].spatialReference, l4.spatialReference, null, a7.options), r3 = K2(e7, l4.spatialReference), c7(r3));
    function c7(e8) {
      if (e8.spatialReference.isWGS84) if (4 === i3.cameraOrientation?.type) {
        const t6 = i3.cameraOrientation;
        e8 = new _(q(e8, [t6.latitude, t6.longitude, t6.ellipsoidRadius, t6.squaredEccentricity]));
      } else e8 = new _(d(e8));
      const t5 = (e8.z ?? 0) - (l4.z ?? 0), a8 = (e8.x - l4.x) / m3, r4 = (e8.y - l4.y) / m3, o6 = (f4[0] * a8 + f4[1] * r4 + f4[2] * t5) / (f4[6] * a8 + f4[7] * r4 + f4[8] * t5), s5 = (f4[3] * a8 + f4[4] * r4 + f4[5] * t5) / (f4[6] * a8 + f4[7] * r4 + f4[8] * t5), c8 = o6 ** 2 + s5 ** 2;
      let R3 = 0, v4 = 0, b6 = 0, z3 = 0, P4 = 0, O3 = 0, j5 = 0;
      d6 && (R3 = d6[0] ?? 0, v4 = d6[1] ?? 0, b6 = d6[2] ?? 0), w7 && (z3 = w7[0], P4 = w7[1]), u5 && (O3 = u5[0] ?? 0, j5 = u5[1] ?? 0);
      const x4 = 1 + (R3 || 0) * c8 + (v4 || 0) * c8 * c8 + (b6 || 0) * c8 * c8 * c8;
      let S5 = o6 * x4 + (z3 || 0) * (c8 + 2 * o6 ** 2) + 2 * (P4 || 0) * o6 * s5, M4 = s5 * x4 + (P4 || 0) * (c8 + 2 * s5 ** 2) + 2 * (z3 || 0) * o6 * s5;
      S5 = -(y4 ?? 0) * S5 + O3, M4 = -(y4 ?? 0) * M4 + j5;
      return {
        x: Number(h4[0]) + Number(h4[1]) * S5 + Number(h4[2]) * M4,
        y: Number(h4[3]) + Number(h4[4]) * S5 + Number(h4[5]) * M4
      };
    }
  })));
}

// ../../../node_modules/@arcgis/core/layers/orientedImagery/transformations/imageToGroundUtils.js
function E5(e7, t4) {
  if (!e7) return Promise.resolve([]);
  const r2 = t4.feature;
  let a7 = r2.attributes;
  return a7 instanceof j4 || (a7 = j4.fromJSON(r2), a7 && (r2.attributes = a7)), G2(e7, t4);
}
function G2(e7, t4) {
  const {
    attributes: r2
  } = t4.feature;
  if (r2.isSpherical || 360 === r2.horizontalFieldOfView) {
    const {
      location: a7,
      cameraOrientation: n5,
      farDistance: i3,
      cameraHeading: o6,
      cameraHeight: s5
    } = r2;
    return W3(e7, a7, i3, [t4.imageProperties.width, t4.imageProperties.height], o6, s5, n5);
  }
  return k5(e7, t4);
}
function W3(e7, t4, a7, n5, i3, s5, c6) {
  return __async(this, null, function* () {
    let f4 = new _(t4);
    f4.spatialReference.isGeographic && f4.spatialReference.isWGS84 && 4 !== c6?.type && (f4 = d(f4));
    const g3 = N2(f4), w7 = new Array(), [x4, z3, h4] = f4.toArray(), d6 = k2([x4, z3, h4 ?? 0], a7 * g3), v4 = o5.toArray();
    for (const l4 of e7) {
      let e8, t5;
      if (n3(l4.heading) && n3(l4.pitch)) e8 = l4.heading, t5 = l4.pitch;
      else {
        const r2 = P3({
          x: l4.x,
          y: l4.y
        }, n5[0], n5[1]);
        e8 = r2.heading, t5 = r2.pitch;
      }
      e8 = (e8 + i3) % 360;
      const a8 = k([v4[0], v4[1], v4[2]], A(e8, t5)), c7 = v([x4, z3, h4 ?? 0], a8.direction), u5 = n2();
      X(d6, c7, u5);
      const R3 = (f4.z ?? 0) - s5;
      if (u5[2] < R3) {
        const e9 = Math.abs((f4.z - R3) / -a8.direction[2]) * g3;
        x2([f4.x, f4.y, f4.z], a8.direction, e9, g3, u5);
      } else u5[2] = R3;
      w7.push(new _(u5, f4.spatialReference));
    }
    return w7;
  });
}
function k5(e7, t4) {
  return __async(this, null, function* () {
    const {
      feature: r2,
      footprintExtent: a7,
      options: n5
    } = t4, {
      attributes: {
        cameraHeight: i3,
        cameraOrientation: c6,
        cameraPitch: f4,
        cameraRoll: p5,
        elevationSource: m3,
        horizontalFieldOfView: l4,
        location: y4,
        verticalFieldOfView: x4
      },
      elevationSample: z3
    } = r2, d6 = k3(c6), {
      vfov: j5
    } = d4(l4, x4, p5 ?? 0);
    let b6 = new _(y4), P4 = false;
    d6 && (b6 = new _(w4(b6, [c6.latitude, c6.longitude, c6.ellipsoidRadius, c6.squaredEccentricity]))), b6.spatialReference.isWGS84 && (P4 = true, b6 = d(b6));
    const F2 = N2(b6), L3 = I5(t4, b6, F2), H3 = d6 ? L3.map((e8) => R(new _(e8))) : L3, V3 = yield S3(H3, t4, true).then((e8) => e8.map((e9) => ({
      x: e9.x,
      y: e9.y,
      z: 1
    }))), A3 = new Array();
    for (const u5 of e7) {
      const e8 = __spreadProps(__spreadValues({}, u5), {
        z: 1
      }), c7 = __spreadProps(__spreadValues({}, z2(e8, V3, H3)), {
        spatialReference: b6.spatialReference
      }), [p6] = yield S3([d6 ? R(new _(c7)) : new _(c7)], t4, true);
      yield B4(e8, p6, V3, H3, b6, c7, d6, t4);
      const l5 = r2.attributes.clone();
      l5.geometry = b6.clone();
      const {
        polygon: y5
      } = b4(l5), x5 = y5.rings[0].map((e9) => new _(e9, y5.spatialReference)), R3 = yield I(m3 || z3 ? yield q4({
        cameraLocation: b6,
        groundFootPrint: x5,
        projectedPoint: c7,
        webMercatorScalingFactor: F2,
        vfov: j5,
        shouldConvertToLatLong: P4,
        isCameraOrientationLTP: d6,
        imgPoint: e8
      }, t4) : new _(N5(c7, b6, F2, b6.z - i3, f4, j5, P4)), a7.spatialReference, n5);
      A3.push(R3);
    }
    return A3;
  });
}
function q4(e7, t4) {
  return __async(this, null, function* () {
    const {
      cameraLocation: r2,
      groundFootPrint: a7,
      projectedPoint: n5,
      webMercatorScalingFactor: i3,
      vfov: s5,
      shouldConvertToLatLong: f4,
      isCameraOrientationLTP: p5,
      imgPoint: m3
    } = e7, {
      cameraHeight: l4,
      cameraPitch: y4
    } = t4.feature.attributes;
    yield N(r2.spatialReference, t4.footprintExtent.spatialReference, null, t4.options);
    let u5 = yield Z(a7, t4), w7 = 0, x4 = (r2.z ?? 0) - l4, z3 = 0;
    for (; z3 < 10; ) {
      const e8 = K4(u5, r2, n5);
      if (!e8 || !J2([r2.x, r2.y, r2.z], [e8.x, e8.y, e8.z], [n5.x, n5.y, n5.z])) return new _(N5(n5, r2, i3, x4, y4, s5, f4));
      const a8 = new _({
        x: e8.x,
        y: e8.y,
        z: e8.z,
        spatialReference: r2.spatialReference
      }), c6 = yield S3([p5 ? R(a8) : a8], t4);
      if (w7 = Math.abs(m3.x - c6[0].x) + Math.abs(m3.y - c6[0].y), x4 = e8.z, w7 <= 1) return new _(N5(n5, r2, i3, x4, y4, s5, f4));
      z3 += 1;
      const {
        extent: l5
      } = u5, R3 = (l5?.width ?? 0) / 10, j5 = (l5?.height ?? 0) / 10;
      if (R3 < 1 || j5 < 1) return new _(N5(n5, r2, i3, x4, y4, s5, f4));
      const {
        x: b6,
        y: P4
      } = e8, v4 = yield M2(Q2(R3, j5).map(([e9, t5]) => new _({
        x: b6 + e9,
        y: P4 + t5,
        spatialReference: r2.spatialReference
      })), t4, false);
      v4.push(v4[0]), u5 = new j({
        rings: [v4.map((e9) => e9.toArray())],
        spatialReference: r2.spatialReference
      });
    }
    return new _(N5(n5, r2, i3, x4, y4, s5, f4));
  });
}
var J2 = (e7, r2, i3) => P(K(o2(), r2, e7), K(o2(), i3, e7)) > 0;
function N5(e7, r2, a7, i3, s5, c6, f4) {
  const p5 = Math.sqrt((e7.z - r2.z) ** 2 + (Math.sqrt((e7.x - r2.x) ** 2 + (e7.y - r2.y) ** 2) / a7) ** 2) * a7, m3 = p3(K(o2(), [e7.x, e7.y, e7.z], [r2.x, r2.y, r2.z]), 1 / p5, 1 / a7);
  if (e7.z < i3 || s5 + c6 / 2 < 90) {
    const t4 = Math.abs((r2.z - i3) / -m3[2]) * a7, n5 = x2([r2.x, r2.y, r2.z], m3, t4, a7);
    e7.x = n5[0], e7.y = n5[1], e7.z = n5[2];
  } else e7.z = i3;
  return f4 ? R(new _(e7)).toJSON() : e7;
}
function I5(r2, a7, s5) {
  const {
    feature: c6
  } = r2, {
    attributes: f4
  } = c6, p5 = 2 * Math.tan(h(f4.verticalFieldOfView) / 2) * f4.farDistance * s5, m3 = 2 * Math.tan(h(f4.horizontalFieldOfView) / 2) * f4.farDistance * s5, l4 = g2("HPR", [f4.cameraHeading, f4.cameraPitch, f4.cameraRoll ?? 0]), y4 = l3([0, 0, -1], l4), u5 = x2([a7.x, a7.y, a7.z], y4, f4.farDistance * s5, s5), g3 = l3([0, 1, 0], l4), w7 = l3([1, 0, 0], l4), x4 = p3(g3, p5 / 2, s5), z3 = p3(w7, m3 / 2, s5), h4 = K(o2(), x4, z3), d6 = u(o2(), x4, z3);
  return [u(o2(), u5, h4), u(o2(), u5, d6), K(o2(), u5, h4), K(o2(), u5, d6)].map((e7) => {
    const [t4, r3, n5] = e7;
    return new _({
      x: t4,
      y: r3,
      z: n5,
      spatialReference: a7.spatialReference
    });
  });
}
function Z(e7, t4) {
  return __async(this, null, function* () {
    const r2 = e7[0].spatialReference.isWGS84 ? f2.WebMercator : e7[0].spatialReference, {
      cameraHeight: a7,
      location: n5,
      elevation: i3
    } = t4.feature.attributes, s5 = "number" == typeof n5.z && "number" == typeof i3 ? n5.z - i3 : a7, c6 = S2(e7.map(({
      x: e8,
      y: t5,
      z: r3
    }) => [e8, t5, r3]), s5, n5, N2(n5)), p5 = (yield M2(c6.map((e8) => new _(e8, n5.spatialReference)), t4, false)).map((e8) => K2(e8, r2));
    return new j({
      hasZ: true,
      rings: [p5.map((e8) => [e8.x, e8.y, e8.z])],
      spatialReference: r2
    });
  });
}
function B4(e7, t4, r2, a7, n5, i3, s5, c6) {
  return __async(this, null, function* () {
    let f4 = 0;
    const p5 = 8;
    for (let m3 = 0; m3 <= p5; m3 += 1) {
      if (f4 = Math.abs(e7.x - t4.x) + Math.abs(e7.y - t4.y), f4 <= 1) return;
      const [p6, m4, l4, y4] = Q2(f4, f4).map(([t5, i4]) => __spreadProps(__spreadValues({}, f3({
        x: e7.x + t5,
        y: e7.y + i4,
        z: 1
      }, r2[0], r2[1], r2[2], r2[3], {
        x: a7[0].x,
        y: a7[0].y,
        z: a7[0].z
      }, {
        x: a7[1].x,
        y: a7[1].y,
        z: a7[1].z
      }, {
        x: a7[2].x,
        y: a7[2].y,
        z: a7[2].z
      }, {
        x: a7[3].x,
        y: a7[3].y,
        z: a7[3].z
      })), {
        spatialReference: n5.spatialReference
      })), [u5, w7, x4, z3] = yield S3(s5 ? [R(new _(p6)), R(new _(m4)), R(new _(l4)), R(new _(y4))] : [new _(p6), new _(m4), new _(l4), new _(y4)], c6, true).then((e8) => e8.map((e9) => __spreadProps(__spreadValues({}, e9), {
        z: 0
      }))), {
        x: d6,
        y: R3,
        z: j5
      } = f3(e7, u5, w7, x4, z3, p6, m4, l4, y4);
      i3.x = d6, i3.y = R3, i3.z = j5, [t4] = yield S3([s5 ? R(new _(i3)) : new _(i3)], c6, true);
    }
  });
}
function K4(e7, t4, r2) {
  const a7 = {
    x: e7.rings[0][0][0],
    y: e7.rings[0][0][1],
    z: e7.rings[0][0][2]
  }, n5 = {
    x: e7.rings[0][1][0],
    y: e7.rings[0][1][1],
    z: e7.rings[0][1][2]
  }, i3 = {
    x: e7.rings[0][1][0],
    y: e7.rings[0][1][1],
    z: e7.rings[0][1][2]
  }, o6 = {
    x: e7.rings[0][2][0],
    y: e7.rings[0][2][1],
    z: e7.rings[0][2][2]
  }, s5 = (o6.z - i3.z) * (n5.y - a7.y) - (o6.y - i3.y) * (n5.z - a7.z), c6 = -((o6.z - i3.z) * (n5.x - a7.x) - (n5.z - a7.z) * (o6.x - i3.x)), f4 = (o6.y - i3.y) * (n5.x - a7.x) - (n5.y - a7.y) * (o6.x - i3.x), p5 = -(s5 * a7.x + c6 * a7.y + f4 * a7.z);
  return j3(t4.toJSON(), r2, s5, c6, f4, p5);
}
var Q2 = (e7, t4) => [[-e7, -t4], [e7, -t4], [e7, t4], [-e7, t4]];

// ../../../node_modules/@arcgis/core/widgets/OrientedImageryViewer/symbols.js
var n4 = new y2({
  size: 15,
  style: "circle",
  color: [255, 102, 102, 0.5],
  outline: null
});
var a6 = new y2({
  size: 10,
  style: "circle",
  color: [0, 128, 192, 0.5],
  outline: null
});
var b5 = new S({
  style: "solid",
  color: [0, 128, 192, 0.5],
  outline: null
});
var c5 = new S({
  style: "solid",
  color: [255, 102, 102, 0.5],
  outline: null
});
var p4 = new y2({
  size: 10,
  style: "diamond",
  color: [255, 102, 102],
  outline: null
});
var w6 = new w2({
  symbolLayers: new V([new j2({
    size: 10,
    material: {
      color: "red"
    },
    resource: {
      primitive: "x"
    },
    outline: {
      color: "black",
      size: 1
    }
  })])
});
var S4 = new w2({
  symbolLayers: new V([new c({
    width: 9,
    height: 9,
    depth: 9,
    material: {
      color: [255, 102, 102]
    },
    resource: {
      primitive: "diamond"
    },
    castShadows: false
  })])
});
var d5 = new d2({
  data: {
    type: "CIMSymbolReference",
    symbol: {
      type: "CIMPointSymbol",
      symbolLayers: [{
        type: "CIMVectorMarker",
        enable: true,
        size: 10,
        frame: {
          xmin: -5,
          ymin: -5,
          xmax: 5,
          ymax: 5
        },
        markerGraphics: [{
          type: "CIMMarkerGraphic",
          geometry: {
            rings: [[[0, 1.4142135623730951], [3.585786437626905, 5], [5, 3.585786437626905], [1.4142135623730951, 0], [5, -3.585786437626905], [3.585786437626905, -5], [0, -1.4142135623730951], [-3.585786437626905, -5], [-5, -3.585786437626905], [-1.4142135623730951, 0], [-5, 3.585786437626905], [-3.585786437626905, 5], [0, 1.4142135623730951]]]
          },
          symbol: {
            type: "CIMPolygonSymbol",
            symbolLayers: [{
              type: "CIMSolidStroke",
              enable: true,
              width: 1,
              color: [0, 0, 0, 100]
            }, {
              type: "CIMSolidFill",
              enable: true,
              color: [255, 0, 0, 255]
            }]
          }
        }]
      }]
    }
  }
});
var u4 = new c2({
  symbolLayers: new V([new h2({
    material: {
      color: [255, 102, 102, 0.5]
    },
    edges: null
  })])
});
var M3 = new c2({
  symbolLayers: new V([new h2({
    material: {
      color: [0, 128, 192, 0.25]
    },
    edges: null
  })])
});

export {
  o5 as o,
  t3 as t,
  m2 as m,
  i2 as i,
  p2 as p,
  P3 as P,
  R2 as R,
  I2 as I,
  A,
  E2 as E,
  U,
  j4 as j,
  b4 as b,
  F,
  C,
  E3 as E2,
  L,
  N3 as N,
  S3 as S,
  M2 as M,
  E5 as E3,
  n4 as n,
  a6 as a,
  b5 as b2,
  c5 as c,
  p4 as p2,
  w6 as w,
  S4 as S2,
  d5 as d,
  u4 as u,
  M3 as M2
};
//# sourceMappingURL=chunk-K2N5C427.js.map
