import {
  j as j2
} from "./chunk-6PFH6TN3.js";
import {
  J,
  on
} from "./chunk-DUTZNK67.js";
import {
  j
} from "./chunk-T6GCUITX.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
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
  a3 as a2,
  s3 as s
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/support/SceneModification.js
var l;
var y2 = l = class extends f {
  constructor(e2) {
    super(e2), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e2, r2, o, s2) {
    if (s2.layer?.spatialReference && !s2.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!J(e2.spatialReference, s2.layer.spatialReference)) return void (s2?.messages && s2.messages.push(new s("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", {
        modification: this,
        spatialReference: s2.layer.spatialReference,
        context: s2
      })));
      const p = new j();
      on(e2, p, s2.layer.spatialReference), r2[o] = p.toJSON(s2);
    } else r2[o] = e2.toJSON(s2);
    delete r2[o].spatialReference;
  }
  clone() {
    return new l({
      geometry: a(this.geometry),
      type: this.type
    });
  }
};
e([y({
  type: j
}), j2()], y2.prototype, "geometry", void 0), e([r(["web-scene", "portal-item"], "geometry")], y2.prototype, "writeGeometry", null), e([y({
  type: ["clip", "mask", "replace"],
  nonNullable: true
}), j2()], y2.prototype, "type", void 0), y2 = l = e([a2("esri.layers.support.SceneModification")], y2);
var f2 = y2;

export {
  f2 as f
};
//# sourceMappingURL=chunk-HMUNABEN.js.map
