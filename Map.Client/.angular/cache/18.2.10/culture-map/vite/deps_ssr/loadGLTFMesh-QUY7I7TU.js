import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e4,
  f as f3,
  l as l2,
  l2 as l3,
  n2 as n3,
  o as o2,
  o2 as o3,
  o3 as o4
} from "./chunk-AD33ZJKF.js";
import {
  e as e3,
  f as f2
} from "./chunk-A2RMQRQR.js";
import {
  r as r5
} from "./chunk-FEREHKJY.js";
import "./chunk-EPIUUGS2.js";
import {
  h
} from "./chunk-2CXNO3UO.js";
import {
  l
} from "./chunk-EJXWYKCR.js";
import {
  c as c2,
  m,
  w
} from "./chunk-CE7BUKSQ.js";
import "./chunk-NOVQFMBE.js";
import {
  e as e2
} from "./chunk-UC4DX4SE.js";
import "./chunk-44O4APOL.js";
import {
  D
} from "./chunk-KYLW5XXS.js";
import {
  M as M2
} from "./chunk-MIIC4I55.js";
import {
  s as s2
} from "./chunk-B63XAMYJ.js";
import "./chunk-THUD7LGO.js";
import "./chunk-A45QR3VT.js";
import {
  f,
  o,
  u as u4
} from "./chunk-MYCEJRPQ.js";
import "./chunk-YSJVVDDH.js";
import {
  n as n2,
  r as r4,
  t,
  u as u3
} from "./chunk-53Z6KOJR.js";
import {
  E,
  L,
  O,
  T,
  c,
  i,
  u as u2,
  x
} from "./chunk-DLWZ3HVT.js";
import "./chunk-B76NC7GX.js";
import "./chunk-JTDKNK44.js";
import "./chunk-CSK4VZQ7.js";
import "./chunk-GSG4T2KM.js";
import "./chunk-GK5M6FUR.js";
import "./chunk-MRP3FBLV.js";
import "./chunk-Y7SJWJAL.js";
import {
  j,
  n
} from "./chunk-A2FDYA6M.js";
import "./chunk-YGAXDKHF.js";
import {
  e
} from "./chunk-4TOSJLKR.js";
import "./chunk-C7BQE556.js";
import "./chunk-DL2B6IFJ.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  r as r3
} from "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-KOI252FF.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-BXONKQKI.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import {
  M,
  _
} from "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import {
  r as r2
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  r2 as r
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/chunks/mat3.js
function e5(e7, t5, o7) {
  const r7 = e7.typedBuffer, f4 = e7.typedBufferStride, d = t5.typedBuffer, n4 = t5.typedBufferStride, c3 = o7 ? o7.count : t5.count;
  let u6 = (o7?.dstIndex ?? 0) * f4, l4 = (o7?.srcIndex ?? 0) * n4;
  for (let p = 0; p < c3; ++p) {
    for (let e8 = 0; e8 < 9; ++e8) r7[u6 + e8] = d[l4 + e8];
    u6 += f4, l4 += n4;
  }
}
var t2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  copy: e5
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/chunks/mat4.js
function e6(e7, t5, o7) {
  const r7 = e7.typedBuffer, f4 = e7.typedBufferStride, d = t5.typedBuffer, n4 = t5.typedBufferStride, c3 = o7 ? o7.count : t5.count;
  let u6 = (o7?.dstIndex ?? 0) * f4, l4 = (o7?.srcIndex ?? 0) * n4;
  for (let p = 0; p < c3; ++p) {
    for (let e8 = 0; e8 < 16; ++e8) r7[u6 + e8] = d[l4 + e8];
    u6 += f4, l4 += n4;
  }
}
var t3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  copy: e6
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/geometry/support/buffer/utils.js
function r6(s3, r7) {
  return new s3(new ArrayBuffer(r7 * s3.ElementCount * e2(s3.ElementType)));
}

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js
function K(e7, t5, o7) {
  return __async(this, null, function* () {
    const n4 = new n3(Q(o7)), s3 = (yield l3(n4, t5, o7, true)).model, a = s3.lods.shift(), i2 = /* @__PURE__ */ new Map(), l4 = /* @__PURE__ */ new Map();
    s3.textures.forEach((e8, t6) => i2.set(t6, X(e8))), s3.materials.forEach((e8, t6) => l4.set(t6, Y(e8, i2)));
    const c3 = W(a);
    for (const r7 of c3.parts) Z(c3, r7, l4);
    const {
      position: u6,
      normal: f4,
      tangent: m2,
      color: p,
      texCoord0: d
    } = c3.vertexAttributes, h2 = s2(e7, o7), T2 = e7.spatialReference.isGeographic ? s2(e7) : h2, v = M2({
      vertexAttributes: {
        position: u6.typedBuffer,
        normal: f4?.typedBuffer,
        tangent: m2?.typedBuffer
      },
      vertexSpace: T2,
      spatialReference: e7.spatialReference
    }, h2, {
      allowBufferReuse: true,
      sourceUnit: "meters"
    });
    if (!v) throw new s("loadGLTFMesh()", "Failed to load mesh from glTF due to projection errors");
    return {
      transform: null,
      vertexSpace: h2,
      components: c3.components,
      spatialReference: e7.spatialReference,
      vertexAttributes: new l(__spreadProps(__spreadValues({}, v), {
        color: p?.typedBuffer,
        uv: d?.typedBuffer
      }))
    };
  });
}
function Q(e7) {
  const r7 = e7?.resolveFile;
  return r7 ? {
    busy: false,
    request: (e8, o7, n4) => __async(this, null, function* () {
      const s3 = r7?.(e8) ?? e8, a = "image" === o7 ? "image" : "binary" === o7 || "image+type" === o7 ? "array-buffer" : "json";
      return (yield U(s3, {
        responseType: a,
        signal: n4?.signal,
        timeout: 0
      })).data;
    })
  } : null;
}
function H(e7, t5) {
  if (null == e7) return "-";
  const r7 = e7.typedBuffer;
  return `${r(t5, r7.buffer, () => t5.size)}/${r7.byteOffset}/${r7.byteLength}`;
}
function J(e7) {
  return null != e7 ? e7.toString() : "-";
}
function W(e7) {
  let t5 = 0;
  const has = {
    color: false,
    tangent: false,
    normal: false,
    texCoord0: false
  }, r7 = /* @__PURE__ */ new Map(), n4 = /* @__PURE__ */ new Map(), s3 = [];
  for (const a of e7.parts) {
    const {
      attributes: {
        position: e8,
        normal: i2,
        color: l4,
        tangent: c3,
        texCoord0: u6
      }
    } = a, f4 = `
      ${H(e8, r7)}/
      ${H(i2, r7)}/
      ${H(l4, r7)}/
      ${H(c3, r7)}/
      ${H(u6, r7)}/
      ${J(a.transform)}
    `;
    let m2 = false;
    const p = r(n4, f4, () => (m2 = true, {
      start: t5,
      length: e8.count
    }));
    m2 && (t5 += e8.count), i2 && (has.normal = true), l4 && (has.color = true), c3 && (has.tangent = true), u6 && (has.texCoord0 = true), s3.push({
      gltf: a,
      writeVertices: m2,
      region: p
    });
  }
  return {
    vertexAttributes: {
      position: r6(T, t5),
      normal: has.normal ? r6(i, t5) : null,
      tangent: has.tangent ? r6(c, t5) : null,
      color: has.color ? r6(x, t5) : null,
      texCoord0: has.texCoord0 ? r6(u2, t5) : null
    },
    parts: s3,
    components: []
  };
}
function X(e7) {
  return new w({
    data: (r5(e7.data), e7.data),
    wrap: re(e7.parameters.wrap)
  });
}
function Y(t5, r7) {
  const o7 = new u(se(t5.color, t5.opacity)), n4 = t5.emissiveFactor ? new u(ae(t5.emissiveFactor)) : null, a = (e7) => e7 ? new c2({
    scale: e7.scale ? [e7.scale[0], e7.scale[1]] : [1, 1],
    rotation: M(e7.rotation ?? 0),
    offset: e7.offset ? [e7.offset[0], e7.offset[1]] : [0, 0]
  }) : null;
  return new m({
    color: o7,
    colorTexture: r7.get(t5.textureColor),
    normalTexture: r7.get(t5.textureNormal),
    emissiveColor: n4,
    emissiveTexture: r7.get(t5.textureEmissive),
    occlusionTexture: r7.get(t5.textureOcclusion),
    alphaMode: te(t5.alphaMode),
    alphaCutoff: t5.alphaCutoff,
    doubleSided: t5.doubleSided,
    metallic: t5.metallicFactor,
    roughness: t5.roughnessFactor,
    metallicRoughnessTexture: r7.get(t5.textureMetallicRoughness),
    colorTextureTransform: a(t5.colorTextureTransform),
    normalTextureTransform: a(t5.normalTextureTransform),
    occlusionTextureTransform: a(t5.occlusionTextureTransform),
    emissiveTextureTransform: a(t5.emissiveTextureTransform),
    metallicRoughnessTextureTransform: a(t5.metallicRoughnessTextureTransform)
  });
}
function Z(e7, t5, r7) {
  t5.writeVertices && ee(e7, t5);
  const {
    indices: o7,
    attributes: n4,
    primitiveType: s3,
    material: a
  } = t5.gltf;
  let i2 = o3(o7 || n4.position.count, s3);
  const l4 = t5.region.start;
  if (l4) {
    const e8 = new Uint32Array(i2);
    for (let t6 = 0; t6 < i2.length; t6++) e8[t6] += l4;
    i2 = e8;
  }
  e7.components.push(new h({
    name: t5.gltf.name,
    faces: i2,
    material: r7.get(a),
    shading: n4.normal ? "source" : "flat",
    trustSourceNormals: true
  }));
}
function ee(e7, t5) {
  const {
    position: r7,
    normal: o7,
    tangent: s3,
    color: c3,
    texCoord0: u6
  } = e7.vertexAttributes, f4 = t5.region.start, {
    attributes: m2,
    transform: p
  } = t5.gltf, d = m2.position.count;
  if (t(r7.slice(f4, d), m2.position, p), null != m2.normal && null != o7) {
    const e8 = j(e(), p), t6 = o7.slice(f4, d);
    r4(t6, m2.normal, e8), _(e8) && u3(t6, t6);
  } else null != o7 && f2(o7, 0, 0, 1, {
    dstIndex: f4,
    count: d
  });
  if (null != m2.tangent && null != s3) {
    const e8 = n(e(), p), t6 = s3.slice(f4, d);
    f(t6, m2.tangent, e8), _(e8) && o(t6, t6);
  } else null != s3 && f3(s3, 0, 0, 1, 1, {
    dstIndex: f4,
    count: d
  });
  if (null != m2.texCoord0 && null != u6 ? o2(u6.slice(f4, d), m2.texCoord0) : null != u6 && l2(u6, 0, 0, {
    dstIndex: f4,
    count: d
  }), null != m2.color && null != c3) {
    const e8 = m2.color, t6 = c3.slice(f4, d);
    if (4 === e8.elementCount) e8 instanceof c ? u4(t6, e8, 255) : e8 instanceof x ? e4(t6, e8) : e8 instanceof L && u4(t6, e8, 1 / 256);
    else {
      f3(t6, 255, 255, 255, 255);
      const r8 = O.fromTypedArray(t6.typedBuffer, t6.typedBufferStride);
      e8 instanceof i ? n2(r8, e8, 255) : e8 instanceof O ? e3(r8, e8) : e8 instanceof E && n2(r8, e8, 1 / 256);
    }
  } else null != c3 && f3(c3.slice(f4, d), 255, 255, 255, 255);
}
function te(e7) {
  switch (e7) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function re(e7) {
  return {
    horizontal: oe(e7.s),
    vertical: oe(e7.t)
  };
}
function oe(e7) {
  switch (e7) {
    case D.CLAMP_TO_EDGE:
      return "clamp";
    case D.MIRRORED_REPEAT:
      return "mirror";
    case D.REPEAT:
      return "repeat";
  }
}
function ne(e7) {
  return e7 ** (1 / o4) * 255;
}
function se(e7, t5) {
  return r3(ne(e7[0]), ne(e7[1]), ne(e7[2]), t5);
}
function ae(e7) {
  return r2(ne(e7[0]), ne(e7[1]), ne(e7[2]));
}
export {
  K as loadGLTFMesh
};
//# sourceMappingURL=loadGLTFMesh-QUY7I7TU.js.map
