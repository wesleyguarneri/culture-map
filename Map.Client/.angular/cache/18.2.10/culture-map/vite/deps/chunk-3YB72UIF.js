import {
  h
} from "./chunk-Y37SHKPH.js";
import {
  t
} from "./chunk-JPUM54Z2.js";
import {
  f as f2
} from "./chunk-OCHDIAAK.js";
import {
  f,
  y2 as y
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js
var a = class extends h {
  constructor(e) {
    super("EdgeProcessingWorker", "extract", {
      extract: (e2) => [e2.dataBuffer],
      extractComponentsEdgeLocations: (e2) => [e2.dataBuffer],
      extractEdgeLocations: (e2) => [e2.dataBuffer]
    }, e);
  }
  process(e, t2, r) {
    return __async(this, null, function* () {
      if (r) return f2(e);
      return i(yield this.invoke(new o(e), t2));
    });
  }
  extractEdgeLocations(e, t2) {
    return __async(this, null, function* () {
      const r = yield this.invokeMethod("extractEdgeLocations", new o(e), t2);
      return t(r);
    });
  }
  extractComponentsEdgeLocations(e, t2) {
    return __async(this, null, function* () {
      const r = yield this.invokeMethod("extractComponentsEdgeLocations", new o(e), t2);
      return t(r);
    });
  }
};
function i(e) {
  return {
    regular: {
      instancesData: t(e.regular.instancesData),
      lodInfo: {
        lengths: new Float32Array(e.regular.lodInfo.lengths)
      }
    },
    silhouette: {
      instancesData: t(e.silhouette.instancesData),
      lodInfo: {
        lengths: new Float32Array(e.silhouette.lodInfo.lengths)
      }
    },
    averageEdgeLength: e.averageEdgeLength
  };
}
var o = class {
  constructor(r) {
    this.dataBuffer = r.data.buffer, this.writerSettings = r.writerSettings, this.skipDeduplicate = r.skipDeduplicate, this.indices = y(r.indices) ? r.indices : r.indices.buffer, this.indicesType = y(r.indices) ? "Array" : f(r.indices) ? "Uint32Array" : "Uint16Array", this.indicesLength = r.indicesLength;
  }
};

export {
  a
};
//# sourceMappingURL=chunk-3YB72UIF.js.map
