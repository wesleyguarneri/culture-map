import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-EJXWYKCR.js";
import {
  a as a3,
  m
} from "./chunk-CE7BUKSQ.js";
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
  a3 as a2,
  g2 as g
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/MeshComponent.js
var p;
var u = p = class extends f {
  static from(t) {
    return g(p, t);
  }
  constructor(t) {
    super(t), this.faces = null, this.material = null, this.name = void 0, this.shading = "source", this.trustSourceNormals = false;
  }
  castFaces(t) {
    return c(t, Uint32Array, [Uint16Array], {
      loggerTag: ".faces=",
      stride: 3
    }, n.getLogger(this));
  }
  castMaterial(t) {
    return g(t && "object" == typeof t && ("metallic" in t || "roughness" in t || "metallicRoughnessTexture" in t) ? m : a3, t);
  }
  clone() {
    return new p({
      faces: a(this.faces),
      shading: this.shading,
      material: a(this.material),
      trustSourceNormals: this.trustSourceNormals,
      name: this.name
    });
  }
  cloneWithDeduplication(t, r) {
    const s2 = {
      faces: a(this.faces),
      shading: this.shading,
      material: this.material ? this.material.cloneWithDeduplication(t, r) : null,
      trustSourceNormals: this.trustSourceNormals,
      name: this.name
    };
    return new p(s2);
  }
  get memoryUsage() {
    let t = 0;
    return null != this.faces && (t += this.faces.byteLength), null != this.material && (t += this.material.memoryUsage), t;
  }
};
e([y({
  json: {
    write: true
  }
})], u.prototype, "faces", void 0), e([s("faces")], u.prototype, "castFaces", null), e([y({
  type: a3,
  json: {
    write: true
  }
})], u.prototype, "material", void 0), e([s("material")], u.prototype, "castMaterial", null), e([y()], u.prototype, "name", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u.prototype, "shading", void 0), e([y({
  type: Boolean
})], u.prototype, "trustSourceNormals", void 0), u = p = e([a2("esri.geometry.support.MeshComponent")], u);
var h = u;

export {
  h
};
//# sourceMappingURL=chunk-2CXNO3UO.js.map
