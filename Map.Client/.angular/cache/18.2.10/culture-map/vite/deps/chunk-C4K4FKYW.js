import {
  a2 as a,
  a3 as a2,
  d
} from "./chunk-VHN5TB5W.js";
import {
  I,
  c,
  l,
  w
} from "./chunk-W5ERGD4Y.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js
function i(t, n, l2, s) {
  const {
    rendererJSON: i2,
    isRGBRenderer: u2
  } = t;
  let c3 = null, a4 = null;
  if (n && u2) c3 = n;
  else if (n && "pointCloudUniqueValueRenderer" === i2?.type) {
    a4 = a2.fromJSON(i2);
    const e = a4.colorUniqueValueInfos;
    c3 = new Uint8Array(3 * s);
    const r = d2(a4.fieldTransformType);
    for (let o = 0; o < s; o++) {
      const t2 = (r ? r(n[o]) : n[o]) + "";
      for (let r2 = 0; r2 < e.length; r2++) if (e[r2].values.includes(t2)) {
        c3[3 * o] = e[r2].color.r, c3[3 * o + 1] = e[r2].color.g, c3[3 * o + 2] = e[r2].color.b;
        break;
      }
    }
  } else if (n && "pointCloudStretchRenderer" === i2?.type) {
    a4 = a.fromJSON(i2);
    const e = a4.stops;
    c3 = new Uint8Array(3 * s);
    const o = d2(a4.fieldTransformType);
    for (let r = 0; r < s; r++) {
      const t2 = o ? o(n[r]) : n[r], l3 = e.length - 1;
      if (t2 < e[0].value) c3[3 * r] = e[0].color.r, c3[3 * r + 1] = e[0].color.g, c3[3 * r + 2] = e[0].color.b;
      else if (t2 >= e[l3].value) c3[3 * r] = e[l3].color.r, c3[3 * r + 1] = e[l3].color.g, c3[3 * r + 2] = e[l3].color.b;
      else for (let o2 = 1; o2 < e.length; o2++) if (t2 < e[o2].value) {
        const n2 = (t2 - e[o2 - 1].value) / (e[o2].value - e[o2 - 1].value);
        c3[3 * r] = e[o2].color.r * n2 + e[o2 - 1].color.r * (1 - n2), c3[3 * r + 1] = e[o2].color.g * n2 + e[o2 - 1].color.g * (1 - n2), c3[3 * r + 2] = e[o2].color.b * n2 + e[o2 - 1].color.b * (1 - n2);
        break;
      }
    }
  } else if (n && "pointCloudClassBreaksRenderer" === i2?.type) {
    a4 = d.fromJSON(i2);
    const r = a4.colorClassBreakInfos;
    c3 = new Uint8Array(3 * s);
    const o = d2(a4.fieldTransformType);
    for (let e = 0; e < s; e++) {
      const t2 = o ? o(n[e]) : n[e];
      for (let o2 = 0; o2 < r.length; o2++) if (t2 >= r[o2].minValue && t2 <= r[o2].maxValue) {
        c3[3 * e] = r[o2].color.r, c3[3 * e + 1] = r[o2].color.g, c3[3 * e + 2] = r[o2].color.b;
        break;
      }
    }
  } else c3 = new Uint8Array(3 * s).fill(255);
  if (l2 && a4?.colorModulation) {
    const e = a4.colorModulation.minValue, r = a4.colorModulation.maxValue, o = 0.3;
    for (let t2 = 0; t2 < s; t2++) {
      const n2 = l2[t2], s2 = n2 >= r ? 1 : n2 <= e ? o : o + (1 - o) * (n2 - e) / (r - e);
      c3[3 * t2] = s2 * c3[3 * t2], c3[3 * t2 + 1] = s2 * c3[3 * t2 + 1], c3[3 * t2 + 2] = s2 * c3[3 * t2 + 2];
    }
  }
  return c3;
}
function u(e, r) {
  if (null == e.encoding || "" === e.encoding) {
    const o = w(r, e);
    if (null == o.vertexAttributes.position) return;
    const l2 = l(r, o.vertexAttributes.position), s = o.header.fields, i2 = [s.offsetX, s.offsetY, s.offsetZ], u2 = [s.scaleX, s.scaleY, s.scaleZ], c3 = l2.length / 3, a4 = new Float64Array(3 * c3);
    for (let e2 = 0; e2 < c3; e2++) a4[3 * e2] = l2[3 * e2] * u2[0] + i2[0], a4[3 * e2 + 1] = l2[3 * e2 + 1] * u2[1] + i2[1], a4[3 * e2 + 2] = l2[3 * e2 + 2] * u2[2] + i2[2];
    return a4;
  }
  if ("lepcc-xyz" === e.encoding) return c(r).result;
}
function c2(e, r, o) {
  return e?.attributeInfo.useElevation ? r ? a3(r, o) : null : e?.attributeInfo.storageInfo ? I(e.attributeInfo.storageInfo, e.buffer, o) : null;
}
function a3(e, r) {
  const o = new Float64Array(r);
  for (let t = 0; t < r; t++) o[t] = e[3 * t + 2];
  return o;
}
function f(e, r, o, t, n) {
  const l2 = e.length / 3;
  let s = 0;
  for (let i2 = 0; i2 < l2; i2++) {
    let l3 = true;
    for (let e2 = 0; e2 < t.length && l3; e2++) {
      const {
        filterJSON: r2
      } = t[e2], o2 = n[e2].values[i2];
      switch (r2.type) {
        case "pointCloudValueFilter": {
          const e3 = "exclude" === r2.mode;
          r2.values.includes(o2) === e3 && (l3 = false);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const e3 = p(r2.requiredSetBits), t2 = p(r2.requiredClearBits);
          ((o2 & e3) !== e3 || o2 & t2) && (l3 = false);
          break;
        }
        case "pointCloudReturnFilter": {
          const e3 = 15 & o2, t2 = o2 >>> 4 & 15, n2 = t2 > 1, s2 = 1 === e3, i3 = e3 === t2;
          let u2 = false;
          for (const o3 of r2.includedReturns) if ("last" === o3 && i3 || "firstOfMany" === o3 && s2 && n2 || "lastOfMany" === o3 && i3 && n2 || "single" === o3 && !n2) {
            u2 = true;
            break;
          }
          u2 || (l3 = false);
          break;
        }
      }
    }
    l3 && (o[s] = i2, e[3 * s] = e[3 * i2], e[3 * s + 1] = e[3 * i2 + 1], e[3 * s + 2] = e[3 * i2 + 2], r[3 * s] = r[3 * i2], r[3 * s + 1] = r[3 * i2 + 1], r[3 * s + 2] = r[3 * i2 + 2], s++);
  }
  return s;
}
function d2(e) {
  switch (e) {
    default:
    case null:
    case "none":
      return (e2) => e2;
    case "low-four-bit":
      return (e2) => 15 & e2;
    case "high-four-bit":
      return (e2) => (240 & e2) >> 4;
    case "absolute-value":
      return (e2) => Math.abs(e2);
    case "modulo-ten":
      return (e2) => e2 % 10;
  }
}
function p(e) {
  let r = 0;
  for (const o of e || []) r |= 1 << o;
  return r;
}

export {
  i,
  u,
  c2 as c,
  a3 as a,
  f
};
//# sourceMappingURL=chunk-C4K4FKYW.js.map
