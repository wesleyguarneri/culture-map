import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-LVERV6OU.js";
import {
  r as r4
} from "./chunk-3FFTEL3W.js";
import {
  e as e2,
  r as r3
} from "./chunk-FWGI52X4.js";
import {
  t as t4
} from "./chunk-QA265FYQ.js";
import {
  t as t3
} from "./chunk-EPIUUGS2.js";
import {
  l as l2,
  t as t2
} from "./chunk-44O4APOL.js";
import {
  s
} from "./chunk-LCPLUSDH.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  o as o2,
  r as r2
} from "./chunk-YGAXDKHF.js";
import {
  A,
  O,
  U as U2,
  g,
  o,
  p,
  u
} from "./chunk-MZM4INJV.js";
import {
  n,
  r,
  t
} from "./chunk-J4GMQHGL.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  U,
  i,
  y2 as y
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
function o3(o6) {
  if (o6.length < U) return Array.from(o6);
  if (y(o6)) return Float64Array.from(o6);
  if (!("BYTES_PER_ELEMENT" in o6)) return Array.from(o6);
  switch (o6.BYTES_PER_ELEMENT) {
    case 1:
      return Uint8Array.from(o6);
    case 2:
      return i(o6) ? Uint16Array.from(o6) : Int16Array.from(o6);
    case 4:
      return Float32Array.from(o6);
    default:
      return Float64Array.from(o6);
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
var o4 = class _o {
  constructor(i3, e3, o6) {
    this.primitiveIndices = i3, this._numIndexPerPrimitive = e3, this.position = o6, this._children = void 0, s(i3.length >= 1), s(3 === o6.size || 4 === o6.size);
    const {
      data: c2,
      size: l5,
      indices: m2
    } = o6;
    s(m2.length % this._numIndexPerPrimitive == 0), s(m2.length >= i3.length * this._numIndexPerPrimitive);
    const d2 = i3.length;
    let u3 = l5 * m2[this._numIndexPerPrimitive * i3[0]];
    a.clear(), a.push(u3);
    const f2 = r(c2[u3], c2[u3 + 1], c2[u3 + 2]), x = t(f2);
    for (let t5 = 0; t5 < d2; ++t5) {
      const e4 = this._numIndexPerPrimitive * i3[t5];
      for (let i4 = 0; i4 < this._numIndexPerPrimitive; ++i4) {
        u3 = l5 * m2[e4 + i4], a.push(u3);
        let t6 = c2[u3];
        f2[0] = Math.min(t6, f2[0]), x[0] = Math.max(t6, x[0]), t6 = c2[u3 + 1], f2[1] = Math.min(t6, f2[1]), x[1] = Math.max(t6, x[1]), t6 = c2[u3 + 2], f2[2] = Math.min(t6, f2[2]), x[2] = Math.max(t6, x[2]);
      }
    }
    this.bbMin = f2, this.bbMax = x;
    const P = A(n(), this.bbMin, this.bbMax, 0.5);
    this.radius = 0.5 * Math.max(Math.max(x[0] - f2[0], x[1] - f2[1]), x[2] - f2[2]);
    let v = this.radius * this.radius;
    for (let t5 = 0; t5 < a.length; ++t5) {
      u3 = a.at(t5);
      const i4 = c2[u3] - P[0], e4 = c2[u3 + 1] - P[1], s3 = c2[u3 + 2] - P[2], r6 = i4 * i4 + e4 * e4 + s3 * s3;
      if (r6 <= v) continue;
      const n3 = Math.sqrt(r6), h = 0.5 * (n3 - this.radius);
      this.radius = this.radius + h, v = this.radius * this.radius;
      const o7 = h / n3;
      P[0] += i4 * o7, P[1] += e4 * o7, P[2] += s3 * o7;
    }
    this.center = P, a.clear();
  }
  getChildren() {
    if (this._children || p(this.bbMin, this.bbMax) <= 1) return this._children;
    const i3 = A(n(), this.bbMin, this.bbMax, 0.5), s3 = this.primitiveIndices.length, r6 = new Uint8Array(s3), h = new Array(8);
    for (let t5 = 0; t5 < 8; ++t5) h[t5] = 0;
    const {
      data: a3,
      size: c2,
      indices: l5
    } = this.position;
    for (let t5 = 0; t5 < s3; ++t5) {
      let e3 = 0;
      const s4 = this._numIndexPerPrimitive * this.primitiveIndices[t5];
      let n3 = c2 * l5[s4], o6 = a3[n3], m3 = a3[n3 + 1], d3 = a3[n3 + 2];
      for (let i4 = 1; i4 < this._numIndexPerPrimitive; ++i4) {
        n3 = c2 * l5[s4 + i4];
        const t6 = a3[n3], e4 = a3[n3 + 1], r7 = a3[n3 + 2];
        t6 < o6 && (o6 = t6), e4 < m3 && (m3 = e4), r7 < d3 && (d3 = r7);
      }
      o6 < i3[0] && (e3 |= 1), m3 < i3[1] && (e3 |= 2), d3 < i3[2] && (e3 |= 4), r6[t5] = e3, ++h[e3];
    }
    let m2 = 0;
    for (let t5 = 0; t5 < 8; ++t5) h[t5] > 0 && ++m2;
    if (m2 < 2) return;
    const d2 = new Array(8);
    for (let t5 = 0; t5 < 8; ++t5) d2[t5] = h[t5] > 0 ? new Uint32Array(h[t5]) : void 0;
    for (let t5 = 0; t5 < 8; ++t5) h[t5] = 0;
    for (let t5 = 0; t5 < s3; ++t5) {
      const i4 = r6[t5];
      d2[i4][h[i4]++] = this.primitiveIndices[t5];
    }
    this._children = new Array();
    for (let t5 = 0; t5 < 8; ++t5) void 0 !== d2[t5] && this._children.push(new _o(d2[t5], this._numIndexPerPrimitive, this.position));
    return this._children;
  }
  static prune() {
    a.prune();
  }
};
var a = new l({
  deallocator: null
});

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
function i2(r6, s3) {
  if (!r6) return false;
  const {
    size: i3,
    data: c2,
    indices: f2
  } = r6;
  o(s3, 0, 0, 0), o(m, 0, 0, 0);
  let g2 = 0, d2 = 0;
  for (let p2 = 0; p2 < f2.length - 2; p2 += 3) {
    const r7 = f2[p2] * i3, h = f2[p2 + 1] * i3, j = f2[p2 + 2] * i3;
    o(a2, c2[r7], c2[r7 + 1], c2[r7 + 2]), o(l3, c2[h], c2[h + 1], c2[h + 2]), o(u2, c2[j], c2[j + 1], c2[j + 2]);
    const z = d(a2, l3, u2);
    z ? (u(a2, a2, l3), u(a2, a2, u2), g(a2, a2, 1 / 3 * z), u(s3, s3, a2), g2 += z) : (u(m, m, a2), u(m, m, l3), u(m, m, u2), d2 += 3);
  }
  return (0 !== d2 || 0 !== g2) && (0 !== g2 ? (g(s3, s3, 1 / g2), true) : 0 !== d2 && (g(s3, m, 1 / d2), true));
}
function c(e3, r6) {
  if (!e3) return false;
  const {
    size: s3,
    data: o6,
    indices: i3
  } = e3;
  o(r6, 0, 0, 0);
  let c2 = -1, f2 = 0;
  for (let t5 = 0; t5 < i3.length; t5++) {
    const e4 = i3[t5] * s3;
    c2 !== e4 && (r6[0] += o6[e4], r6[1] += o6[e4 + 1], r6[2] += o6[e4 + 2], f2++), c2 = e4;
  }
  return f2 > 1 && g(r6, r6, 1 / f2), f2 > 0;
}
function f(s3, o6, i3) {
  if (!s3) return false;
  o(i3, 0, 0, 0), o(m, 0, 0, 0);
  let c2 = 0, f2 = 0;
  const {
    size: u3,
    data: g2,
    indices: d2
  } = s3, p2 = d2.length - 1, h = p2 + (o6 ? 2 : 0);
  for (let t5 = 0; t5 < h; t5 += 2) {
    const s4 = t5 < p2 ? t5 + 1 : 0, o7 = d2[t5 < p2 ? t5 : p2] * u3, h2 = d2[s4] * u3;
    a2[0] = g2[o7], a2[1] = g2[o7 + 1], a2[2] = g2[o7 + 2], l3[0] = g2[h2], l3[1] = g2[h2 + 1], l3[2] = g2[h2 + 2], g(a2, u(a2, a2, l3), 0.5);
    const j = U2(a2, l3);
    j > 0 ? (u(i3, i3, g(a2, a2, j)), c2 += j) : 0 === c2 && (u(m, m, a2), f2++);
  }
  return 0 !== c2 ? (g(i3, i3, 1 / c2), true) : 0 !== f2 && (g(i3, m, 1 / f2), true);
}
var a2 = n();
var l3 = n();
var u2 = n();
var m = n();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js
function n2(t5, e3) {
  return null == t5 && (t5 = []), t5.push(e3), t5;
}
function r5(t5, e3) {
  if (null == t5) return null;
  const n3 = t5.filter((t6) => t6 !== e3);
  return 0 === n3.length ? null : n3;
}
function l4(t5, n3, r6, l5, i3) {
  o5[0] = t5.get(n3, 0), o5[1] = t5.get(n3, 1), o5[2] = t5.get(n3, 2), t4(o5, s2, 3), r6.set(i3, 0, s2[0]), l5.set(i3, 0, s2[1]), r6.set(i3, 1, s2[2]), l5.set(i3, 1, s2[3]), r6.set(i3, 2, s2[4]), l5.set(i3, 2, s2[5]);
}
var o5 = n();
var s2 = new Float32Array(6);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
var I = class _I extends r3 {
  constructor(t5, i3, e3 = null, s3 = e2.Mesh, r6 = null, o6 = -1) {
    super(), this.material = t5, this.mapPositions = e3, this.type = s3, this.objectAndLayerIdColor = r6, this.edgeIndicesLength = o6, this.visible = true, this._attributes = /* @__PURE__ */ new Map(), this._boundingInfo = null;
    for (const [h, a3] of i3) this._attributes.set(h, __spreadProps(__spreadValues({}, a3), {
      indices: t2(a3.indices)
    })), h === e.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._attributes.get(h).indices.length : this.edgeIndicesLength);
  }
  instantiate(t5 = {}) {
    const i3 = new _I(t5.material || this.material, [], this.mapPositions, this.type, this.objectAndLayerIdColor, this.edgeIndicesLength);
    return this._attributes.forEach((t6, e3) => {
      t6.exclusive = false, i3._attributes.set(e3, t6);
    }), i3._boundingInfo = this._boundingInfo, i3.transformation = t5.transformation || this.transformation, i3;
  }
  get attributes() {
    return this._attributes;
  }
  getMutableAttribute(t5) {
    let i3 = this._attributes.get(t5);
    return i3 && !i3.exclusive && (i3 = __spreadProps(__spreadValues({}, i3), {
      exclusive: true,
      data: o3(i3.data)
    }), this._attributes.set(t5, i3)), i3;
  }
  setAttributeData(t5, i3) {
    const e3 = this._attributes.get(t5);
    e3 && this._attributes.set(t5, __spreadProps(__spreadValues({}, e3), {
      exclusive: true,
      data: i3
    }));
  }
  get indexCount() {
    const t5 = this._attributes.values().next().value.indices;
    return t5?.length ?? 0;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return null == this._boundingInfo && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(t5) {
    return !!(this.type === e2.Mesh ? this._computeAttachmentOriginTriangles(t5) : this.type === e2.Line ? this._computeAttachmentOriginLines(t5) : this._computeAttachmentOriginPoints(t5)) && (null != this._transformation && O(t5, t5, this._transformation), true);
  }
  _computeAttachmentOriginTriangles(t5) {
    const i3 = this.attributes.get(e.POSITION);
    return i2(i3, t5);
  }
  _computeAttachmentOriginLines(t5) {
    const i3 = this.attributes.get(e.POSITION);
    return f(i3, _(this.material.parameters, i3), t5);
  }
  _computeAttachmentOriginPoints(t5) {
    const i3 = this.attributes.get(e.POSITION);
    return c(i3, t5);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const t5 = this.attributes.get(e.POSITION);
    if (!t5 || 0 === t5.indices.length) return null;
    const i3 = this.type === e2.Mesh ? 3 : 1;
    s(t5.indices.length % i3 == 0, "Indexing error: " + t5.indices.length + " not divisible by " + i3);
    const e3 = l2(t5.indices.length / i3);
    return new o4(e3, i3, t5);
  }
  get transformation() {
    return this._transformation ?? o2;
  }
  set transformation(e3) {
    this._transformation = e3 && e3 !== o2 ? r2(e3) : null;
  }
  addHighlight() {
    const t5 = new r4(t3.Highlight);
    return this.highlights = n2(this.highlights, t5), t5;
  }
  removeHighlight(t5) {
    this.highlights = r5(this.highlights, t5);
  }
};
function _(t5, i3) {
  return !(!("isClosed" in t5) || !t5.isClosed) && i3.indices.length > 2;
}

export {
  o4 as o,
  n2 as n,
  r5 as r,
  l4 as l,
  I
};
//# sourceMappingURL=chunk-WQMUOLHB.js.map
