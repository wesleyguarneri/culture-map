import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var i;
var l = i = class extends f {
  constructor(t) {
    super(t), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(t) {
    return c(t, Uint8Array, [Uint8ClampedArray], {
      loggerTag: ".color=",
      stride: 4
    }, n.getLogger(this));
  }
  castPosition(t) {
    t && t instanceof Float32Array && n.getLogger(this).warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");
    return c(t, Float64Array, [Float32Array], {
      loggerTag: ".position=",
      stride: 3
    }, n.getLogger(this));
  }
  castUv(t) {
    return c(t, Float32Array, [Float64Array], {
      loggerTag: ".uv=",
      stride: 2
    }, n.getLogger(this));
  }
  castNormal(t) {
    return c(t, Float32Array, [Float64Array], {
      loggerTag: ".normal=",
      stride: 3
    }, n.getLogger(this));
  }
  castTangent(t) {
    return c(t, Float32Array, [Float64Array], {
      loggerTag: ".tangent=",
      stride: 4
    }, n.getLogger(this));
  }
  clone() {
    const t = {
      position: a(this.position),
      uv: a(this.uv),
      normal: a(this.normal),
      tangent: a(this.tangent),
      color: a(this.color)
    };
    return new i(t);
  }
  clonePositional() {
    const t = {
      position: a(this.position),
      normal: a(this.normal),
      tangent: a(this.tangent),
      uv: this.uv,
      color: this.color
    };
    return new i(t);
  }
  get memoryUsage() {
    let t = 0;
    return t += this.position.byteLength, null != this.uv && (t += this.uv.byteLength), null != this.normal && (t += this.normal.byteLength), null != this.tangent && (t += this.tangent.byteLength), null != this.color && (t += this.color.byteLength), t;
  }
};
function g(t, r, o, e2) {
  const {
    loggerTag: n2,
    stride: s2
  } = r;
  return t.length % s2 != 0 ? (e2.error(n2, `Invalid array length, expected a multiple of ${s2}`), new o([])) : t;
}
function c(t, r, o, e2, n2) {
  if (!t) return t;
  if (t instanceof r) return g(t, e2, r, n2);
  for (const s2 of o) if (t instanceof s2) return g(new r(t), e2, r, n2);
  if (Array.isArray(t)) return g(new r(t), e2, r, n2);
  {
    const e3 = o.map((t2) => `'${t2.name}'`);
    return n2.error(`Failed to set property, expected one of ${e3}, but got ${t.constructor.name}`), new r([]);
  }
}
function p(t, r, o) {
  r[o] = u(t);
}
function u(t) {
  const r = new Array(t.length);
  for (let o = 0; o < t.length; o++) r[o] = t[o];
  return r;
}
e([y({
  json: {
    write: p
  }
})], l.prototype, "color", void 0), e([s("color")], l.prototype, "castColor", null), e([y({
  nonNullable: true,
  json: {
    write: p
  }
})], l.prototype, "position", void 0), e([s("position")], l.prototype, "castPosition", null), e([y({
  json: {
    write: p
  }
})], l.prototype, "uv", void 0), e([s("uv")], l.prototype, "castUv", null), e([y({
  json: {
    write: p
  }
})], l.prototype, "normal", void 0), e([s("normal")], l.prototype, "castNormal", null), e([y({
  json: {
    write: p
  }
})], l.prototype, "tangent", void 0), e([s("tangent")], l.prototype, "castTangent", null), l = i = e([a2("esri.geometry.support.MeshVertexAttributes")], l);

export {
  l,
  c
};
//# sourceMappingURL=chunk-EJXWYKCR.js.map
