import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-BFSKQ7XP.js";
import {
  t as t2
} from "./chunk-WHVSAUHM.js";
import {
  H
} from "./chunk-GHPF24X4.js";
import {
  e as e3
} from "./chunk-PK6A5N2R.js";
import {
  e as e2
} from "./chunk-D7C26LZP.js";
import {
  h,
  m
} from "./chunk-2OZSYJDX.js";
import {
  J,
  P,
  _,
  e,
  o,
  r,
  u,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  t
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js
var E = H().vec3f(e2.POSITION).u16(e2.COMPONENTINDEX).freeze();
var I = H().vec2u8(e2.SIDENESS).freeze();
var S = t2(I);
var T = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1).vec2i16(e2.NORMALCOMPRESSED).u16(e2.COMPONENTINDEX).u8(e2.VARIANTOFFSET, {
  glNormalized: true
}).u8(e2.VARIANTSTROKE).u8(e2.VARIANTEXTENSION, {
  glNormalized: true
}).freeze();
var A = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1).vec2i16(e2.NORMALCOMPRESSED).vec2i16(e2.NORMAL2COMPRESSED).u16(e2.COMPONENTINDEX).u8(e2.VARIANTOFFSET, {
  glNormalized: true
}).u8(e2.VARIANTSTROKE).u8(e2.VARIANTEXTENSION, {
  glNormalized: true
}).freeze();
var r2 = /* @__PURE__ */ new Map([[e2.POSITION0, 0], [e2.POSITION1, 1], [e2.COMPONENTINDEX, 2], [e2.VARIANTOFFSET, 3], [e2.VARIANTSTROKE, 4], [e2.VARIANTEXTENSION, 5], [e2.NORMALCOMPRESSED, 6], [e2.NORMAL2COMPRESSED, 7], [e2.SIDENESS, 8]]);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js
var s2 = class {
  constructor() {
    this.position0 = n(), this.position1 = n(), this.faceNormal0 = n(), this.faceNormal1 = n(), this.componentIndex = 0, this.cosAngle = 0;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js
var d = -1;
function p(e4, t4, o2) {
  const c2 = e4.vertices.position, l3 = e4.vertices.componentIndex, i = j.position0, h3 = j.position1, g3 = j.faceNormal0, u4 = j.faceNormal1, {
    edges: p4,
    normals: v2
  } = w(e4), V2 = p4.length / 4, y3 = t4.allocate(V2);
  let I3 = 0;
  const N3 = V2, b2 = o2?.allocate(N3);
  let E3 = 0, D2 = 0, k2 = 0;
  x2.length = 0;
  for (let s3 = 0; s3 < V2; ++s3) {
    const e5 = 4 * s3;
    c2.getVec(p4.data[e5], i), c2.getVec(p4.data[e5 + 1], h3);
    const t5 = x2.pushNew();
    t5.index = 4 * s3, t5.length = x(i, h3);
  }
  x2.sort((e5, t5) => t5.length - e5.length);
  const P2 = new Array(), U = new Array();
  x2.forAll(({
    length: e5,
    index: n2
  }) => {
    const w3 = p4.data[n2], x3 = p4.data[n2 + 1], V3 = p4.data[n2 + 2], N4 = p4.data[n2 + 3], q2 = N4 === d;
    if (c2.getVec(w3, i), c2.getVec(x3, h3), q2) {
      const e6 = 3 * V3;
      o(g3, v2.data[e6], v2.data[e6 + 1], v2.data[e6 + 2]), r(u4, g3), j.componentIndex = l3.get(w3), j.cosAngle = P(g3, u4);
    } else {
      let e6 = 3 * V3;
      if (o(g3, v2.data[e6], v2.data[e6 + 1], v2.data[e6 + 2]), e6 = 3 * N4, o(u4, v2.data[e6], v2.data[e6 + 1], v2.data[e6 + 2]), j.componentIndex = l3.get(w3), j.cosAngle = P(g3, u4), m2(j, M)) return;
      j.cosAngle < -0.9999 && r(u4, g3);
    }
    D2 += e5, k2++, q2 || f(j, L) ? (t4.write(y3, I3++, j), P2.push(e5)) : A2(j, F) && (b2 && o2 && o2.write(b2, E3++, j), U.push(e5));
  });
  const q = new Float32Array(P2.reverse()), z2 = new Float32Array(U.reverse()), B2 = b2 && o2 ? {
    instancesData: b2.slice(0, E3),
    lodInfo: {
      lengths: z2
    }
  } : void 0;
  return {
    regular: {
      instancesData: y3.slice(0, I3),
      lodInfo: {
        lengths: q
      }
    },
    silhouette: B2,
    averageEdgeLength: D2 / k2
  };
}
function f(e4, t4) {
  return e4.cosAngle < t4;
}
function m2(e4, t4) {
  return e4.cosAngle > t4;
}
function A2(t4, o2) {
  const n2 = m(t4.cosAngle);
  J(N, t4.position1, t4.position0);
  return n2 * (P(_(I2, t4.faceNormal0, t4.faceNormal1), N) > 0 ? -1 : 1) > o2;
}
function w(e4) {
  const t4 = e4.faces.length / 3, o2 = e4.faces, n2 = e4.neighbors, s3 = e4.vertices.position;
  V.length = y.length = 0;
  for (let a2 = 0; a2 < t4; a2++) {
    const e5 = 3 * a2, t5 = n2[e5], r3 = n2[e5 + 1], c2 = n2[e5 + 2], g3 = o2[e5], u4 = o2[e5 + 1], p4 = o2[e5 + 2];
    s3.getVec(g3, b), s3.getVec(u4, E2), s3.getVec(p4, D), e(E2, E2, b), e(D, D, b), _(b, E2, D), z(b, b), y.pushArray(b), (t5 === d || g3 < u4) && (V.push(g3), V.push(u4), V.push(a2), V.push(t5)), (r3 === d || u4 < p4) && (V.push(u4), V.push(p4), V.push(a2), V.push(r3)), (c2 === d || p4 < g3) && (V.push(p4), V.push(g3), V.push(a2), V.push(c2));
  }
  return {
    edges: V,
    normals: y
  };
}
var v = class {
  constructor() {
    this.index = 0, this.length = 0;
  }
};
var x2 = new l({
  allocator: (e4) => e4 || new v(),
  deallocator: null
});
var V = new l({
  deallocator: null
});
var y = new l({
  deallocator: null
});
var j = new s2();
var I2 = n();
var N = n();
var b = n();
var E2 = n();
var D = n();
var F = h(4);
var M = Math.cos(F);
var k = h(35);
var L = Math.cos(k);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js
var c = 0.7;
var f2 = class {
  updateSettings(t4) {
    this.settings = t4, this._edgeHashFunction = t4.reducedPrecision ? d2 : l2;
  }
  write(t4, o2, e4) {
    B.seed = this._edgeHashFunction(e4);
    const r3 = B.getIntRange(0, 255), n2 = B.getIntRange(0, this.settings.variants - 1), i = B.getFloat(), s3 = 255 * (0.5 * y2(-(1 - Math.min(i / c, 1)) + Math.max(0, i - c) / (1 - c), 1.2) + 0.5);
    t4.position0.setVec(o2, e4.position0), t4.position1.setVec(o2, e4.position1), t4.componentIndex.set(o2, e4.componentIndex), t4.variantOffset.set(o2, r3), t4.variantStroke.set(o2, n2), t4.variantExtension.set(o2, s3);
  }
};
var m3 = new Float32Array(6);
var p2 = new Uint32Array(m3.buffer);
var u2 = new Uint32Array(1);
function l2(t4) {
  return m3[0] = t4.position0[0], m3[1] = t4.position0[1], m3[2] = t4.position0[2], m3[3] = t4.position1[0], m3[4] = t4.position1[1], m3[5] = t4.position1[2], u2[0] = 31 * (31 * (31 * (31 * (31 * (166811 + p2[0]) + p2[1]) + p2[2]) + p2[3]) + p2[4]) + p2[5], u2[0];
}
function d2(t4) {
  const o2 = m3;
  o2[0] = h2(t4.position0[0]), o2[1] = h2(t4.position0[1]), o2[2] = h2(t4.position0[2]), o2[3] = h2(t4.position1[0]), o2[4] = h2(t4.position1[1]), o2[5] = h2(t4.position1[2]), u2[0] = 5381;
  for (let e4 = 0; e4 < p2.length; e4++) u2[0] = 31 * u2[0] + p2[e4];
  return u2[0];
}
var g = 1e4;
function h2(t4) {
  return Math.round(t4 * g) / g;
}
function y2(t4, o2) {
  return Math.abs(t4) ** o2 * Math.sign(t4);
}
var w2 = class {
  constructor() {
    this._commonWriter = new f2();
  }
  updateSettings(t4) {
    this._commonWriter.updateSettings(t4);
  }
  allocate(t4) {
    return T.createBuffer(t4);
  }
  write(t4, r3, n2) {
    this._commonWriter.write(t4, r3, n2), u(S2, n2.faceNormal0, n2.faceNormal1), z(S2, S2);
    const {
      typedBuffer: s3,
      typedBufferStride: a2
    } = t4.normalCompressed;
    s(s3, r3, S2[0], S2[1], S2[2], a2);
  }
};
w2.Layout = T, w2.glLayout = t2(T, 1);
var N2 = class {
  constructor() {
    this._commonWriter = new f2();
  }
  updateSettings(t4) {
    this._commonWriter.updateSettings(t4);
  }
  allocate(t4) {
    return A.createBuffer(t4);
  }
  write(t4, o2, e4) {
    this._commonWriter.write(t4, o2, e4);
    {
      const {
        typedBuffer: r3,
        typedBufferStride: n2
      } = t4.normalCompressed;
      s(r3, o2, e4.faceNormal0[0], e4.faceNormal0[1], e4.faceNormal0[2], n2);
    }
    {
      const {
        typedBuffer: r3,
        typedBufferStride: n2
      } = t4.normal2Compressed;
      s(r3, o2, e4.faceNormal1[0], e4.faceNormal1[1], e4.faceNormal1[2], n2);
    }
  }
};
N2.Layout = A, N2.glLayout = t2(A, 1);
var S2 = n();
var B = new t();

// ../../../node_modules/@arcgis/core/views/3d/support/meshProcessing.js
function t3(t4, o2, n2) {
  const r3 = o2 / 3, c2 = new Uint32Array(n2 + 1), e4 = new Uint32Array(n2 + 1), s3 = (t5, o3) => {
    t5 < o3 ? c2[t5 + 1]++ : e4[o3 + 1]++;
  };
  for (let x3 = 0; x3 < r3; x3++) {
    const o3 = t4[3 * x3], n3 = t4[3 * x3 + 1], r4 = t4[3 * x3 + 2];
    s3(o3, n3), s3(n3, r4), s3(r4, o3);
  }
  let f4 = 0, l3 = 0;
  for (let x3 = 0; x3 < n2; x3++) {
    const t5 = c2[x3 + 1], o3 = e4[x3 + 1];
    c2[x3 + 1] = f4, e4[x3 + 1] = l3, f4 += t5, l3 += o3;
  }
  const i = new Uint32Array(6 * r3), a2 = c2[n2], w3 = (t5, o3, n3) => {
    if (t5 < o3) {
      const r4 = c2[t5 + 1]++;
      i[2 * r4] = o3, i[2 * r4 + 1] = n3;
    } else {
      const r4 = e4[o3 + 1]++;
      i[2 * a2 + 2 * r4] = t5, i[2 * a2 + 2 * r4 + 1] = n3;
    }
  };
  for (let x3 = 0; x3 < r3; x3++) {
    const o3 = t4[3 * x3], n3 = t4[3 * x3 + 1], r4 = t4[3 * x3 + 2];
    w3(o3, n3, x3), w3(n3, r4, x3), w3(r4, o3, x3);
  }
  const y3 = (t5, o3) => {
    const n3 = 2 * t5, r4 = o3 - t5;
    for (let c3 = 1; c3 < r4; c3++) {
      const t6 = i[n3 + 2 * c3], o4 = i[n3 + 2 * c3 + 1];
      let r5 = c3 - 1;
      for (; r5 >= 0 && i[n3 + 2 * r5] > t6; r5--) i[n3 + 2 * r5 + 2] = i[n3 + 2 * r5], i[n3 + 2 * r5 + 3] = i[n3 + 2 * r5 + 1];
      i[n3 + 2 * r5 + 2] = t6, i[n3 + 2 * r5 + 3] = o4;
    }
  };
  for (let x3 = 0; x3 < n2; x3++) y3(c2[x3], c2[x3 + 1]), y3(a2 + e4[x3], a2 + e4[x3 + 1]);
  const A3 = new Int32Array(3 * r3), U = (o3, n3) => o3 === t4[3 * n3] ? 0 : o3 === t4[3 * n3 + 1] ? 1 : o3 === t4[3 * n3 + 2] ? 2 : -1, u4 = (t5, o3) => {
    const n3 = U(t5, o3);
    A3[3 * o3 + n3] = -1;
  }, p4 = (t5, o3, n3, r4) => {
    const c3 = U(t5, o3);
    A3[3 * o3 + c3] = r4;
    const e5 = U(n3, r4);
    A3[3 * r4 + e5] = o3;
  };
  for (let x3 = 0; x3 < n2; x3++) {
    let t5 = c2[x3];
    const o3 = c2[x3 + 1];
    let n3 = e4[x3];
    const r4 = e4[x3 + 1];
    for (; t5 < o3 && n3 < r4; ) {
      const o4 = i[2 * t5], r5 = i[2 * a2 + 2 * n3];
      o4 === r5 ? (p4(x3, i[2 * t5 + 1], r5, i[2 * a2 + 2 * n3 + 1]), t5++, n3++) : o4 < r5 ? (u4(x3, i[2 * t5 + 1]), t5++) : (u4(r5, i[2 * a2 + 2 * n3 + 1]), n3++);
    }
    for (; t5 < o3; ) u4(x3, i[2 * t5 + 1]), t5++;
    for (; n3 < r4; ) {
      u4(i[2 * a2 + 2 * n3], i[2 * a2 + 2 * n3 + 1]), n3++;
    }
  }
  return A3;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js
function f3(e4) {
  const t4 = u3(e4.data, e4.skipDeduplicate, e4.indices, e4.indicesLength);
  return g2.updateSettings(e4.writerSettings), a.updateSettings(e4.writerSettings), p(t4, g2, a);
}
function u3(r3, i, n2, o2) {
  if (i) {
    const e4 = t3(n2, o2, r3.count);
    return new p3(n2, o2, e4, r3);
  }
  const c2 = e3(r3.buffer, r3.stride / 4, {
    originalIndices: n2,
    originalIndicesLength: o2
  }), f4 = t3(c2.indices, o2, c2.uniqueCount);
  return {
    faces: c2.indices,
    facesLength: c2.indices.length,
    neighbors: f4,
    vertices: E.createView(c2.buffer)
  };
}
var p3 = class {
  constructor(e4, t4, r3, i) {
    this.faces = e4, this.facesLength = t4, this.neighbors = r3, this.vertices = i;
  }
};
var g2 = new w2();
var a = new N2();
var d3 = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1);
var m4 = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1).u16(e2.COMPONENTINDEX);

export {
  E,
  I,
  S,
  r2 as r,
  p,
  w2 as w,
  N2 as N,
  f3 as f,
  u3 as u,
  d3 as d,
  m4 as m
};
//# sourceMappingURL=chunk-BWIXIEN4.js.map
