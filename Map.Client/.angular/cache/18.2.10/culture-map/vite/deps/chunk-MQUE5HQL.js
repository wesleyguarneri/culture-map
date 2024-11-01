import {
  I
} from "./chunk-WG5JLPNN.js";
import {
  e as e2
} from "./chunk-LQTSBE7P.js";
import {
  t as t2
} from "./chunk-WN3YAMRZ.js";
import {
  A
} from "./chunk-WU7FVYT7.js";
import {
  t as t3
} from "./chunk-62WUYJJN.js";
import {
  G,
  o
} from "./chunk-VS26W5Y5.js";
import {
  t
} from "./chunk-RDQF44TE.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  n
} from "./chunk-DY7FJHTG.js";
import {
  s as s2
} from "./chunk-IMVP5ADD.js";
import {
  H
} from "./chunk-OGZAGPIO.js";
import {
  s3 as s
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/views/3d/support/engineContent/line.js
function b(t4, e3, r = null) {
  const o2 = [], n2 = e3.mapPositions;
  g(e3, o2);
  const i = o2[0][1].data, a = o2[0][1].indices.length, l2 = A(a);
  return h(e3, o2, l2), j(e3, o2, l2), T(e3, o2, l2), D(e3, o2, l2), w(e3, o2, l2), y(e3, o2, l2), E(e3, o2, i), new I(t4, o2, n2, e2.Line, r);
}
function g(t4, e3) {
  const {
    attributeData: {
      position: r
    },
    removeDuplicateStartEnd: o2
  } = t4, n2 = A2(r) && o2, i = r.length / 3 - (n2 ? 1 : 0), a = new Array(2 * (i - 1)), l2 = n2 ? r.slice(0, -3) : r;
  let u = 0;
  for (let s3 = 0; s3 < i - 1; s3++) a[u++] = s3, a[u++] = s3 + 1;
  e3.push([e.POSITION, new t(l2, a, 3, n2)]);
}
function h(t4, e3, r) {
  if (null != t4.attributeData.colorFeature) return;
  const n2 = t4.attributeData.color;
  e3.push([e.COLOR, new t(n2 ?? s2, r, 4)]);
}
function T(t4, e3, r) {
  t4.attributeData.normal && e3.push([e.NORMAL, new t(t4.attributeData.normal, r, 3)]);
}
function D(t4, e3, r) {
  null != t4.attributeData.colorFeature && e3.push([e.COLORFEATUREATTRIBUTE, new t([t4.attributeData.colorFeature], r, 1, true)]);
}
function j(t4, e3, r) {
  null == t4.attributeData.sizeFeature && e3.push([e.SIZE, new t([t4.attributeData.size ?? 1], r, 1, true)]);
}
function w(t4, e3, r) {
  null != t4.attributeData.sizeFeature && e3.push([e.SIZEFEATUREATTRIBUTE, new t([t4.attributeData.sizeFeature], r, 1, true)]);
}
function y(t4, e3, r) {
  null != t4.attributeData.opacityFeature && e3.push([e.OPACITYFEATUREATTRIBUTE, new t([t4.attributeData.opacityFeature], r, 1, true)]);
}
function E(r, o2, u) {
  if (null == r.overlayInfo || r.overlayInfo.renderCoordsHelper.viewingMode !== l.Global || !r.overlayInfo.spatialReference.isGeographic) return;
  const p = t3(u.length), f = s(r.overlayInfo.spatialReference);
  for (let t4 = 0; t4 < p.length; t4 += 3) H(u, t4, p, t4, f);
  const b2 = u.length / 3, g2 = t2(b2 + 1);
  let h2 = I2, T2 = F, D2 = 0, j2 = 0;
  o(h2, p[j2++], p[j2++]), j2++, g2[0] = 0;
  for (let n2 = 1; n2 < b2 + 1; ++n2) n2 === b2 && (j2 = 0), o(T2, p[j2++], p[j2++]), j2++, D2 += G(h2, T2), g2[n2] = D2, [h2, T2] = [T2, h2];
  o2.push([e.DISTANCETOSTART, new t(g2, o2[0][1].indices, 1, true)]);
}
function A2(t4) {
  const e3 = t4.length;
  return t4[0] === t4[e3 - 3] && t4[1] === t4[e3 - 2] && t4[2] === t4[e3 - 1];
}
var I2 = n();
var F = n();
function R(t4, e3) {
  if (null == t4 || 0 === t4.length) return [];
  const r = [];
  return t4.forEach((t5) => {
    const o2 = t5.length, n2 = t3(3 * o2);
    t5.forEach((t6, e4) => {
      n2[3 * e4] = t6[0], n2[3 * e4 + 1] = t6[1], n2[3 * e4 + 2] = t6[2];
    });
    const i = {
      attributeData: {
        position: n2,
        normal: e3
      },
      removeDuplicateStartEnd: false
    };
    r.push(i);
  }), r;
}

export {
  b,
  R
};
//# sourceMappingURL=chunk-MQUE5HQL.js.map
