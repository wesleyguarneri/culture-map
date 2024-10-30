import {
  i
} from "./chunk-4HODTCAO.js";
import {
  c,
  e2 as e
} from "./chunk-P7OSFLIX.js";
import {
  s as s2
} from "./chunk-ZDC4PV4Y.js";
import {
  t
} from "./chunk-6HBAAUBO.js";
import {
  C,
  U
} from "./chunk-YLE5AYZV.js";
import {
  l2 as l,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/DisplayRecord.js
var t2 = class _t {
  constructor(t5, e4, s6, r3, i3, h2, n5) {
    this.instanceId = t5, this.textureKey = e4, this.indexStart = s6, this.indexCount = r3, this.vertexStart = i3, this.vertexCount = h2, this.overlaps = n5;
  }
  updateBaseOffsets(t5) {
    this.vertexStart += t5.vertexFrom, this.indexStart += t5.indexFrom;
  }
  clone() {
    return new _t(this.instanceId, this.textureKey, this.indexStart, this.indexCount, this.vertexStart, this.vertexCount, this.overlaps);
  }
  static write(t5, e4, s6, r3, i3, h2, n5, a2) {
    t5.push(e4), t5.push(s6), t5.push(r3), t5.push(i3), t5.push(h2), t5.push(n5), t5.push(a2);
  }
  serialize(t5) {
    return t5.push(this.instanceId), t5.push(this.textureKey), t5.push(this.indexStart), t5.push(this.indexCount), t5.push(this.vertexStart), t5.push(this.vertexCount), t5.push(this.overlaps), t5;
  }
  static deserialize(e4) {
    const s6 = e4.readInt32(), r3 = e4.readInt32(), i3 = e4.readInt32(), h2 = e4.readInt32(), n5 = e4.readInt32(), a2 = e4.readInt32(), u2 = e4.readInt32();
    return new _t(s6, r3, i3, h2, n5, a2, u2);
  }
};
t2.byteSizeHint = 7 * Uint32Array.BYTES_PER_ELEMENT;

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/util/serializationUtils.js
function e2(e4, n5) {
  if (null !== n5) {
    e4.push(n5.length);
    for (const r3 of n5) r3.serialize(e4);
    return e4;
  }
  e4.push(0);
}
function n2(e4, n5, r3) {
  const t5 = e4.readInt32(), o3 = new Array(t5);
  for (let i3 = 0; i3 < o3.length; i3++) o3[i3] = n5.deserialize(e4, r3);
  return o3;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/DisplayEntity.js
var s3 = class _s {
  constructor(t5, r3) {
    this.id = t5, this.sortKey = r3, this.records = [];
  }
  serialize(t5) {
    return t5.push(this.id), t5.writeF32(this.sortKey), e2(t5, this.records), t5;
  }
  static deserialize(r3) {
    const e4 = r3.readInt32(), o3 = r3.readF32(), a2 = new _s(e4, o3);
    return a2.records = n2(r3, t2) ?? [], a2;
  }
};
s3.byteSizeHint = 2 * Uint32Array.BYTES_PER_ELEMENT + t2.byteSizeHint;

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/number.js
var n3 = new Float32Array(1);
var t3 = new Uint32Array(n3.buffer);
function a(r3) {
  return n3[0] = r3, t3[0];
}
function s4(n5, t5) {
  return 65535 & n5 | t5 << 16;
}
function y(n5) {
  const t5 = a(n5), r3 = t5 >>> 31;
  let u2 = t5 >>> 23 & 255, o3 = 8388607 & t5;
  return u2 -= 127, u2 > 15 ? r3 << 15 | 31744 : u2 < -25 ? 0 : (u2 < -14 && (o3 += 8388608, o3 /= 2 ** (-14 - u2), u2 = -15), u2 += 15, o3 /= 8192, o3 = A(o3, 1023), r3 << 15 | u2 << 10 | o3);
}
function A(n5, t5) {
  const r3 = Math.floor(n5), u2 = n5 - r3;
  return r3 < t5 && (u2 > 0.5 || 0.5 === u2 && r3 % 2 == 1) ? r3 + 1 : r3;
}
function b(n5) {
  let t5 = n5 >>> 15, r3 = n5 >> 10 & 31, u2 = 1023 & n5;
  return t5 = t5 ? -1 : 1, r3 -= 15, u2 /= 1024, r3 > -15 ? u2 += 1 : r3 = -14, t5 * 2 ** r3 * u2;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/utils.js
function t4(t5) {
  const o3 = t5.map(({
    name: e4,
    count: t6,
    type: o4
  }) => `${e4}.${t6}.${o4}`).join(",");
  return l(o3);
}
function o(e4, t5, r3, i3, n5, a2, c3) {
  if (e4.primitiveName === t5) {
    for (const o3 in e4) if (o3 === r3) {
      let t6 = i3?.readWithDefault(n5, a2, e4[o3] && c3);
      return "text" === e4.type && (t6 = t6.toString()), void (e4[o3] = t6);
    }
  }
  if ("type" in e4 && null != e4.type) switch (e4.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      if (e4.symbolLayers) for (const s6 of e4.symbolLayers) o(s6, t5, r3, i3, n5, a2, c3);
      break;
    case "CIMHatchFill":
      e4.lineSymbol && o(e4.lineSymbol, t5, r3, i3, n5, a2, c3);
      break;
    case "CIMSolidStroke":
    case "CIMSolidFill":
    case "CIMVectorMarker":
      if ("CIMVectorMarker" === e4.type && e4.markerGraphics) for (const s6 of e4.markerGraphics) o(s6, t5, r3, i3, n5, a2, c3), o(s6.symbol, t5, r3, i3, n5, a2, c3);
  }
}
var r = 400;
function i2(e4) {
  const t5 = e4.width;
  return null != e4.effects ? r : Math.max(1.25 * t5, 8);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js
var u = () => n.getLogger("esri.views.2d.engine.webgl.Utils");
function c2(t5) {
  switch (t5) {
    case U.UNSIGNED_BYTE:
      return 1;
    case U.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case U.FLOAT:
      return 4;
    default:
      return void u().error(new s("webgl-utils", `Unable to handle type ${t5}`));
  }
}
function d(t5) {
  switch (t5) {
    case U.UNSIGNED_BYTE:
      return Uint8Array;
    case U.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case U.FLOAT:
      return Float32Array;
    default:
      return void u().error(new s("webgl-utils", `Unable to handle type ${t5}`));
  }
}
function f(e4) {
  const t5 = {};
  for (const r3 in e4) {
    const n5 = e4[r3];
    let o3 = 0;
    t5[r3] = n5.map((e5) => {
      const t6 = new t(e5.name, e5.count, e5.type, o3, 0, e5.normalized || false);
      return o3 += e5.count * s2(e5.type), t6;
    }), t5[r3]?.forEach((e5) => e5.stride = o3);
  }
  return t5;
}
var g = (e4) => {
  const t5 = /* @__PURE__ */ new Map();
  for (const r3 in e4) for (const n5 of e4[r3]) t5.set(n5.name, n5.location);
  return t5;
};
var h = (e4) => {
  const t5 = {};
  for (const r3 in e4) {
    const n5 = e4[r3];
    t5[r3] = n5?.length ? n5[0].stride : 0;
  }
  return t5;
};
var w = /* @__PURE__ */ new Map();
var b2 = (e4, t5) => {
  if (!w.has(e4)) {
    const r3 = f(t5), n5 = {
      strides: h(r3),
      bufferLayouts: r3,
      attributes: g(t5)
    };
    w.set(e4, n5);
  }
  return w.get(e4);
};
var y2 = (e4) => e4.includes("data:image/svg+xml");
function j(e4) {
  const t5 = [];
  for (let r3 = 0; r3 < e4.length; r3++) t5.push(e4.charCodeAt(r3));
  return t5;
}
function T(e4, t5, r3) {
  const n5 = new e(t5.width, t5.height);
  return n5.dataType = t5.dataType, t5.depth && (n5.depth = t5.depth), t5.flipped && (n5.flipped = t5.flipped), t5.hasMipmap && (n5.hasMipmap = t5.hasMipmap), n5.internalFormat = t5.internalFormat, t5.isImmutable && (n5.isImmutable = t5.isImmutable), t5.isOpaque && (n5.isOpaque = t5.isOpaque), t5.maxAnisotropy && (n5.maxAnisotropy = t5.maxAnisotropy), n5.pixelFormat = t5.pixelFormat, t5.preMultiplyAlpha && (n5.preMultiplyAlpha = t5.preMultiplyAlpha), t5.samplingMode && (n5.samplingMode = t5.samplingMode), t5.target && (n5.target = t5.target), n5.uniform = t5.uniform, t5.unpackAlignment && (n5.unpackAlignment = t5.unpackAlignment), t5.wrapMode && (n5.wrapMode = t5.wrapMode), new c(e4, n5, r3);
}
function M(e4) {
  return "url" in e4 && "urlHash" in e4 ? __spreadProps(__spreadValues({}, e4), {
    url: ""
  }) : e4;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LabelMetric.js
var r2 = class _r {
  constructor(e4, i3, t5, r3, s6, n5, o3, a2, h2 = []) {
    this.entityTexel = e4, this.anchorX = i3, this.anchorY = t5, this.directionX = r3, this.directionY = s6, this.maxScale = n5, this.minScale = o3, this.referenceBounds = a2, this.bounds = h2;
  }
  serialize(e4) {
    e4.push(this.entityTexel), e4.writeF32(this.anchorX), e4.writeF32(this.anchorY), e4.writeF32(this.directionX), e4.writeF32(this.directionY), e4.writeF32(this.maxScale), e4.writeF32(this.minScale), null === this.referenceBounds ? (e4.writeF32(0), e4.writeF32(0), e4.writeF32(0)) : (e4.writeF32(this.referenceBounds.size), e4.writeF32(this.referenceBounds.offsetX), e4.writeF32(this.referenceBounds.offsetY)), e2(e4, this.bounds);
  }
  static deserialize(i3) {
    const s6 = i3.readInt32(), n5 = i3.readF32(), o3 = i3.readF32(), a2 = i3.readF32(), h2 = i3.readF32(), d2 = i3.readF32(), c3 = i3.readF32(), F = i3.readF32(), f2 = i3.readF32(), l2 = i3.readF32(), u2 = n2(i3, i) ?? [];
    return new _r(s6, n5, o3, a2, h2, d2, c3, {
      size: F,
      offsetX: f2,
      offsetY: l2
    }, u2);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/dataViewUtils.js
function o2(e4, o3, s6, f2) {
  const r3 = s6.packPrecisionFactor ?? 1;
  switch (s6.type) {
    case C.BYTE:
      if (1 === s6.count) e4.setInt8(f2 + s6.offset, o3 * r3);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Int8Array.BYTES_PER_ELEMENT;
        e4.setInt8(f2 + s6.offset + n5, o3[t5] * r3);
      }
      break;
    case C.UNSIGNED_BYTE:
      if (1 === s6.count) e4.setUint8(f2 + s6.offset, o3 * r3);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Uint8Array.BYTES_PER_ELEMENT;
        e4.setUint8(f2 + s6.offset + n5, o3[t5] * r3);
      }
      break;
    case C.SHORT:
      if (1 === s6.count) e4.setInt16(f2 + s6.offset, o3 * r3, true);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Int16Array.BYTES_PER_ELEMENT;
        e4.setInt16(f2 + s6.offset + n5, o3[t5] * r3, true);
      }
      break;
    case C.UNSIGNED_SHORT:
      if (1 === s6.count) e4.setUint16(f2 + s6.offset, o3 * r3, true);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Uint16Array.BYTES_PER_ELEMENT;
        e4.setUint16(f2 + s6.offset + n5, o3[t5] * r3, true);
      }
      break;
    case C.INT:
      if (1 === s6.count) e4.setInt32(f2 + s6.offset, o3 * r3, true);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Int32Array.BYTES_PER_ELEMENT;
        e4.setInt32(f2 + s6.offset + n5, o3[t5] * r3, true);
      }
      break;
    case C.UNSIGNED_INT:
      if (1 === s6.count) e4.setUint32(f2 + s6.offset, o3 * r3, true);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Uint32Array.BYTES_PER_ELEMENT;
        e4.setUint32(f2 + s6.offset + n5, o3[t5] * r3, true);
      }
      break;
    case C.FLOAT:
      if (1 === s6.count) e4.setFloat32(f2 + s6.offset, o3 * r3, true);
      else for (let t5 = 0; t5 < s6.count; t5++) {
        const n5 = t5 * Float32Array.BYTES_PER_ELEMENT;
        e4.setFloat32(f2 + s6.offset + n5, o3[t5] * r3, true);
      }
      break;
    case C.HALF_FLOAT:
      if (1 === s6.count) e4.setUint16(f2 + s6.offset, y(o3 * r3), true);
      else for (let n5 = 0; n5 < s6.count; n5++) {
        const E = n5 * Uint16Array.BYTES_PER_ELEMENT;
        e4.setUint16(f2 + s6.offset + E, y(o3[n5] * r3), true);
      }
  }
}
function s5(t5, o3, s6) {
  switch (o3.type) {
    case C.BYTE: {
      if (1 === o3.count) return t5.getInt8(s6 + o3.offset);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Int8Array.BYTES_PER_ELEMENT;
        e4.push(t5.getInt8(s6 + o3.offset + f2));
      }
      return e4;
    }
    case C.UNSIGNED_BYTE: {
      if (1 === o3.count) return t5.getUint8(s6 + o3.offset);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Uint8Array.BYTES_PER_ELEMENT;
        e4.push(t5.getUint8(s6 + o3.offset + f2));
      }
      return e4;
    }
    case C.SHORT: {
      if (1 === o3.count) return t5.getInt16(s6 + o3.offset, true);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Int16Array.BYTES_PER_ELEMENT;
        e4.push(t5.getInt16(s6 + o3.offset + f2, true));
      }
      return e4;
    }
    case C.UNSIGNED_SHORT: {
      if (1 === o3.count) return t5.getUint16(s6 + o3.offset, true);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Uint16Array.BYTES_PER_ELEMENT;
        e4.push(t5.getUint16(s6 + o3.offset + f2, true));
      }
      return e4;
    }
    case C.INT: {
      if (1 === o3.count) return t5.getInt32(s6 + o3.offset, true);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Int32Array.BYTES_PER_ELEMENT;
        e4.push(t5.getInt32(s6 + o3.offset + f2, true));
      }
      return e4;
    }
    case C.UNSIGNED_INT: {
      if (1 === o3.count) return t5.getUint32(s6 + o3.offset, true);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Uint32Array.BYTES_PER_ELEMENT;
        e4.push(t5.getUint32(s6 + o3.offset + f2, true));
      }
      return e4;
    }
    case C.FLOAT: {
      if (1 === o3.count) return t5.getFloat32(s6 + o3.offset, true);
      const e4 = [];
      for (let n5 = 0; n5 < o3.count; n5++) {
        const f2 = n5 * Float32Array.BYTES_PER_ELEMENT;
        e4.push(t5.getFloat32(s6 + o3.offset + f2, true));
      }
      return e4;
    }
    case C.HALF_FLOAT: {
      if (1 === o3.count) return b(t5.getUint16(s6 + o3.offset, true));
      const n5 = [];
      for (let f2 = 0; f2 < o3.count; f2++) {
        const r3 = f2 * Uint16Array.BYTES_PER_ELEMENT;
        n5.push(b(t5.getUint16(s6 + o3.offset + r3, true)));
      }
      return n5;
    }
  }
}

export {
  t2 as t,
  n2 as n,
  s3 as s,
  c2 as c,
  d,
  b2 as b,
  y2 as y,
  j,
  T,
  M,
  s4 as s2,
  t4 as t2,
  o,
  i2 as i,
  o2,
  s5 as s3,
  r2 as r
};
//# sourceMappingURL=chunk-EMZQT2MP.js.map
