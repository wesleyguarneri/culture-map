import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-REW5WWC2.js";
import {
  a,
  i
} from "./chunk-THUD7LGO.js";
import {
  y
} from "./chunk-YSJVVDDH.js";
import {
  f as f2,
  l
} from "./chunk-53Z6KOJR.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  _
} from "./chunk-2OZSYJDX.js";
import {
  n
} from "./chunk-GS7Y3YOG.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/libs/i3s/enums.js
var n2;
var e;
!function(n4) {
  n4[n4.None = 0] = "None", n4[n4.Int16 = 1] = "Int16", n4[n4.Int32 = 2] = "Int32";
}(n2 || (n2 = {})), function(n4) {
  n4[n4.Replace = 0] = "Replace", n4[n4.Outside = 1] = "Outside", n4[n4.Inside = 2] = "Inside", n4[n4.Finished = 3] = "Finished";
}(e || (e = {}));

// ../../../node_modules/@arcgis/core/libs/i3s/I3SModule.js
function e2() {
  return n3 || (n3 = new Promise((t) => import("./i3s-EFUF3IYV.js").then((t2) => t2.i).then(({
    default: e3
  }) => {
    const n4 = e3({
      locateFile: i2,
      onRuntimeInitialized: () => t(n4)
    });
    delete n4.then;
  })).catch((t) => {
    throw t;
  })), n3;
}
function i2(e3) {
  return n(`esri/libs/i3s/${e3}`);
}
var n3;

// ../../../node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js
function l2(e3) {
  return __async(this, null, function* () {
    w = yield x();
    const r2 = [e3.geometryBuffer];
    return {
      result: j(w, e3, r2),
      transferList: r2
    };
  });
}
function u(e3) {
  return __async(this, null, function* () {
    w = yield x();
    const r2 = [e3.geometryBuffer], {
      geometryBuffer: t
    } = e3, o = t.byteLength, n4 = w._malloc(o), s = new Uint8Array(w.HEAPU8.buffer, n4, o);
    s.set(new Uint8Array(t));
    const i3 = w.dracoDecompressPointCloudData(n4, s.byteLength);
    if (w._free(n4), i3.error.length > 0) throw new Error(`i3s.wasm: ${i3.error}`);
    const a2 = i3.featureIds?.length > 0 ? i3.featureIds.slice() : null, f3 = i3.positions.slice();
    return a2 && r2.push(a2.buffer), r2.push(f3.buffer), {
      result: {
        positions: f3,
        featureIds: a2
      },
      transferList: r2
    };
  });
}
function m(e3) {
  return __async(this, null, function* () {
    yield x(), L(e3);
    const r2 = {
      buffer: e3.buffer
    };
    return {
      result: r2,
      transferList: [r2.buffer]
    };
  });
}
function y2(e3) {
  return __async(this, null, function* () {
    yield x(), E(e3);
  });
}
function p(e3) {
  return __async(this, null, function* () {
    w = yield x(), w.setLegacySchema(e3.context, e3.jsonSchema);
  });
}
function d(e3) {
  return __async(this, null, function* () {
    const {
      localMatrix: s,
      origin: i3,
      positions: a2,
      vertexSpace: f3,
      localMode: c
    } = e3, l3 = f.fromJSON(e3.inSpatialReference), u2 = f.fromJSON(e3.outSpatialReference);
    let m2;
    const [{
      projectBuffer: y3
    }, {
      initializeProjection: p2
    }] = yield Promise.all([import("./projectBuffer-IZCBCHJG.js"), import("./projection-75VSYJ5S.js")]);
    yield p2(l3, u2);
    const d2 = [0, 0, 0];
    if (!y3(i3, l3, 0, d2, u2, 0, 1)) throw new Error("Failed to project");
    if ("georeferenced" === f3.type && null == f3.origin) {
      if (m2 = new Float64Array(a2.length), !y3(a2, l3, 0, m2, u2, 0, m2.length / 3)) throw new Error("Failed to project");
    } else {
      const e4 = "georeferenced" === f3.type ? i.fromJSON(f3) : a.fromJSON(f3), {
        project: r2
      } = yield import("./projection-XBDFTCV2.js"), i4 = r2({
        positions: a2,
        transform: s ? {
          localMatrix: s
        } : void 0,
        vertexSpace: e4,
        inSpatialReference: l3,
        outSpatialReference: u2,
        localMode: c
      });
      if (!i4) throw new Error("Failed to project");
      m2 = y(i4);
    }
    const b2 = m2.length, [h2, g2, w2] = d2;
    for (let r2 = 0; r2 < b2; r2 += 3) m2[r2] -= h2, m2[r2 + 1] -= g2, m2[r2 + 2] -= w2;
    return {
      result: {
        projected: m2,
        original: a2,
        projectedOrigin: d2
      },
      transferList: [m2.buffer, a2.buffer]
    };
  });
}
function b(_0) {
  return __async(this, arguments, function* ({
    normalMatrix: r2,
    normals: t
  }) {
    const o = new Float32Array(t.length);
    return f2(o, t, r2), _(r2) && l(o, o), {
      result: {
        transformed: o,
        original: t
      },
      transferList: [o.buffer, t.buffer]
    };
  });
}
function h(e3) {
  I(e3);
}
var g;
var w;
function E(e3) {
  if (!w) return;
  const r2 = e3.modifications, t = w._malloc(8 * r2.length), o = new Float64Array(w.HEAPU8.buffer, t, r2.length);
  for (let n4 = 0; n4 < r2.length; ++n4) o[n4] = r2[n4];
  w.setModifications(e3.context, t, r2.length, e3.isGeodetic), w._free(t);
}
function j(e3, r2, t) {
  const {
    context: o,
    globalTrafo: n4,
    mbs: s,
    obbData: i3,
    elevationOffset: f3,
    geometryBuffer: c,
    geometryDescriptor: l3,
    indexToVertexProjector: u2,
    vertexToRenderProjector: m2
  } = r2, y3 = e3._malloc(c.byteLength), p2 = 33, d2 = e3._malloc(p2 * Float64Array.BYTES_PER_ELEMENT), b2 = new Uint8Array(e3.HEAPU8.buffer, y3, c.byteLength);
  b2.set(new Uint8Array(c));
  const h2 = new Float64Array(e3.HEAPU8.buffer, d2, p2);
  S(h2, [NaN, NaN, NaN]);
  let g2 = h2.byteOffset + 3 * h2.BYTES_PER_ELEMENT, w2 = new Float64Array(h2.buffer, g2);
  S(w2, n4), g2 += 16 * h2.BYTES_PER_ELEMENT, w2 = new Float64Array(h2.buffer, g2), S(w2, s), g2 += 4 * h2.BYTES_PER_ELEMENT, i3 && (w2 = new Float64Array(h2.buffer, g2), S(w2, i3));
  const E2 = l3, j2 = {
    isDraco: false,
    isLegacy: false,
    color: r2.layouts.some((e4) => e4.some((e5) => "color" === e5.name)),
    normal: r2.needNormals && r2.layouts.some((e4) => e4.some((e5) => "normalCompressed" === e5.name)),
    uv0: r2.layouts.some((e4) => e4.some((e5) => "uv0" === e5.name)),
    uvRegion: r2.layouts.some((e4) => e4.some((e5) => "uvRegion" === e5.name)),
    featureIndex: E2.featureIndex
  }, A2 = e3.process(o, !!r2.obbData, y3, b2.byteLength, E2, j2, d2, f3, u2, m2, r2.normalReferenceFrame);
  if (e3._free(d2), e3._free(y3), A2.error.length > 0) throw new Error(`i3s.wasm: ${A2.error}`);
  if (A2.discarded) return null;
  const L2 = A2.componentOffsets.length > 0 ? A2.componentOffsets.slice() : null, I2 = A2.featureIds.length > 0 ? A2.featureIds.slice() : null, _3 = A2.anchorIds.length > 0 ? Array.from(A2.anchorIds) : null, x2 = A2.anchors.length > 0 ? Array.from(A2.anchors) : null, M2 = A2.interleavedVertedData.slice().buffer, N = A2.indicesType === n2.Int16 ? new Uint16Array(A2.indices.buffer, A2.indices.byteOffset, A2.indices.byteLength / 2).slice() : new Uint32Array(A2.indices.buffer, A2.indices.byteOffset, A2.indices.byteLength / 4).slice(), P = A2.positions.slice(), U = A2.positionIndicesType === n2.Int16 ? new Uint16Array(A2.positionIndices.buffer, A2.positionIndices.byteOffset, A2.positionIndices.byteLength / 2).slice() : new Uint32Array(A2.positionIndices.buffer, A2.positionIndices.byteOffset, A2.positionIndices.byteLength / 4).slice(), T = {
    layout: r2.layouts[0],
    interleavedVertexData: M2,
    indices: N,
    hasColors: A2.hasColors,
    hasModifications: A2.hasModifications,
    positionData: {
      data: P,
      indices: U
    }
  };
  return I2 && t.push(I2.buffer), L2 && t.push(L2.buffer), t.push(M2), t.push(N.buffer), t.push(P.buffer), t.push(U.buffer), {
    componentOffsets: L2,
    featureIds: I2,
    anchorIds: _3,
    anchors: x2,
    transformedGeometry: T,
    obb: A2.obb,
    globalTrafo: n4
  };
}
function A(e3) {
  return 0 === e3 ? r.Unmodified : 1 === e3 ? r.PotentiallyModified : 2 === e3 ? r.Culled : r.Unknown;
}
function L(e3) {
  if (!w) return;
  const {
    context: r2,
    buffer: t
  } = e3, o = w._malloc(t.byteLength), n4 = t.byteLength / Float64Array.BYTES_PER_ELEMENT, s = new Float64Array(w.HEAPU8.buffer, o, n4), i3 = new Float64Array(t);
  s.set(i3), w.filterOBBs(r2, o, n4), i3.set(s), w._free(o);
}
function I(e3) {
  w && 0 === w.destroy(e3) && (w = null);
}
function S(e3, r2) {
  for (let t = 0; t < r2.length; ++t) e3[t] = r2[t];
}
function _2() {
  return __async(this, null, function* () {
    w || (yield x());
  });
}
function x() {
  return w ? Promise.resolve(w) : (g || (g = e2().then((e3) => (w = e3, g = null, w))), g);
}
var M = {
  transform: (e3, r2) => w && j(w, e3, r2),
  destroy: I
};

export {
  e,
  l2 as l,
  u,
  m,
  y2 as y,
  p,
  d,
  b,
  h,
  E,
  A,
  L,
  _2 as _,
  M
};
//# sourceMappingURL=chunk-JI64OMNU.js.map
