import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  g
} from "./chunk-LJYYJZLF.js";
import {
  a as a2
} from "./chunk-ZPMUEGLK.js";
import {
  J
} from "./chunk-LM3JDV4W.js";
import {
  O
} from "./chunk-7V4JSBFA.js";
import {
  w
} from "./chunk-LZSLQ24Q.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/FeatureLayerView3D.js
var l = class extends g {
  constructor() {
    super(...arguments), this.type = "feature-3d", this.direct3DObjectFeatureLayerDisplayEnabled = a2();
  }
  initialize() {
    const {
      layer: e2,
      view: s2
    } = this;
    O(e2)?.operations.supportsQuery || this.addResolvingPromise(Promise.reject(new s("featurelayerview:query-not-supported", "layer view requires a layer with query capability", {
      layer: e2
    }))), null != e2.infoFor3D && (this.direct3DObjectFeatureLayerDisplayEnabled ? this.addResolvingPromise((() => __async(this, null, function* () {
      const e3 = yield w(() => this.graphicsPipeline);
      this.destroyed || e3.destroyed || (e3.suspendResumeExtentMode = "computed");
    }))()) : this.addResolvingPromise(Promise.reject(new s("featurelayerview3d:unsupported-geometry-type", `Unsupported geometry type ${e2.geometryType}`)))), "mesh" !== e2.geometryType || J(e2.spatialReference, s2.spatialReference) || this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial references of the feature layer is incompatible with the spatial reference of the view")));
  }
  get featureSpatialReference() {
    return this.view.featureTiles?.tilingScheme?.spatialReference;
  }
};
e([y({
  constructOnly: true
})], l.prototype, "direct3DObjectFeatureLayerDisplayEnabled", void 0), e([y()], l.prototype, "layer", void 0), l = e([a("esri.views.3d.layers.FeatureLayerView3D")], l);
var n = l;

export {
  n
};
//# sourceMappingURL=chunk-6U6SXU74.js.map
