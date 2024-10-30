import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j as j2
} from "./chunk-4X2M4YSF.js";
import {
  J,
  on
} from "./chunk-LM3JDV4W.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
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
  s3 as s
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";

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
//# sourceMappingURL=chunk-F6WSQF55.js.map
