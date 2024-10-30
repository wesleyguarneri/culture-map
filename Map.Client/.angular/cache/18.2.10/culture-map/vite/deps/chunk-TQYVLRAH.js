import {
  A,
  C,
  q,
  y as y2,
  z
} from "./chunk-6A3XUATG.js";
import {
  I
} from "./chunk-ZWCV4HKG.js";
import {
  e as e4
} from "./chunk-NQVBBKAN.js";
import {
  e as e3
} from "./chunk-BQZBOYBD.js";
import {
  B,
  P,
  h
} from "./chunk-XTVPEVHA.js";
import {
  e as e2,
  n,
  r,
  t
} from "./chunk-OXEPWRM7.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/geometry/support/MeshTransform.js
var y3;
var A2 = y3 = class extends f {
  constructor(t2) {
    super(t2), this.translation = n(), this.rotationAxis = e2(C), this.rotationAngle = 0, this.scale = r(1, 1, 1);
  }
  get rotation() {
    return q(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t2) {
    this.rotationAxis = t(y2(t2)), this.rotationAngle = z(t2);
  }
  get localMatrix() {
    const t2 = e3();
    return I(d, y2(this.rotation), A(this.rotation)), P(t2, d, this.translation, this.scale), t2;
  }
  get localMatrixInverse() {
    return h(e3(), this.localMatrix);
  }
  equals(t2) {
    return this === t2 || null != t2 && B(this.localMatrix, t2.localMatrix);
  }
  clone() {
    const t2 = {
      translation: t(this.translation),
      rotationAxis: t(this.rotationAxis),
      rotationAngle: this.rotationAngle,
      scale: t(this.scale)
    };
    return new y3(t2);
  }
};
e([y({
  type: [Number],
  nonNullable: true,
  json: {
    write: true
  }
})], A2.prototype, "translation", void 0), e([y({
  type: [Number],
  nonNullable: true,
  json: {
    write: true
  }
})], A2.prototype, "rotationAxis", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], A2.prototype, "rotationAngle", void 0), e([y({
  type: [Number],
  nonNullable: true,
  json: {
    write: true
  }
})], A2.prototype, "scale", void 0), e([y()], A2.prototype, "rotation", null), e([y()], A2.prototype, "localMatrix", null), e([y()], A2.prototype, "localMatrixInverse", null), A2 = y3 = e([a("esri.geometry.support.MeshTransform")], A2);
var d = e4();
var N = A2;

export {
  N
};
//# sourceMappingURL=chunk-TQYVLRAH.js.map
