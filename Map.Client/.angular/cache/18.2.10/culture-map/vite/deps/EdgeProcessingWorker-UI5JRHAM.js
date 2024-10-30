import {
  u
} from "./chunk-JPUM54Z2.js";
import {
  E,
  d,
  f,
  m,
  p,
  u as u2
} from "./chunk-OCHDIAAK.js";
import "./chunk-ENQEWBGS.js";
import "./chunk-66QAJ2MI.js";
import "./chunk-WN3YAMRZ.js";
import "./chunk-NWICVENM.js";
import "./chunk-OUP4PSAG.js";
import "./chunk-A4RKV2C7.js";
import "./chunk-WU7FVYT7.js";
import "./chunk-SYYDVGKY.js";
import "./chunk-6HBAAUBO.js";
import "./chunk-YLE5AYZV.js";
import "./chunk-JNWMZ6EJ.js";
import "./chunk-VS26W5Y5.js";
import "./chunk-4MMTPKY4.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-4323ZVPF.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js
var o = class {
  extract(e) {
    return __async(this, null, function* () {
      const t = c(e), n = f(t), r = [t.data.buffer];
      return {
        result: u3(n, r),
        transferList: r
      };
    });
  }
  extractComponentsEdgeLocations(t) {
    return __async(this, null, function* () {
      const s = c(t), i = u2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p(i, p2), o2 = [];
      return {
        result: u(a.regular.instancesData, o2),
        transferList: o2
      };
    });
  }
  extractEdgeLocations(t) {
    return __async(this, null, function* () {
      const s = c(t), i = u2(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p(i, f2), o2 = [];
      return {
        result: u(a.regular.instancesData, o2),
        transferList: o2
      };
    });
  }
};
function c(e) {
  return {
    data: E.createView(e.dataBuffer),
    indices: "Uint32Array" === e.indicesType ? new Uint32Array(e.indices) : "Uint16Array" === e.indicesType ? new Uint16Array(e.indices) : e.indices,
    indicesLength: e.indicesLength,
    writerSettings: e.writerSettings,
    skipDeduplicate: e.skipDeduplicate
  };
}
function u3(t, n) {
  n.push(t.regular.lodInfo.lengths.buffer), n.push(t.silhouette.lodInfo.lengths.buffer);
  return {
    regular: {
      instancesData: u(t.regular.instancesData, n),
      lodInfo: {
        lengths: t.regular.lodInfo.lengths.buffer
      }
    },
    silhouette: {
      instancesData: u(t.silhouette.instancesData, n),
      lodInfo: {
        lengths: t.silhouette.lodInfo.lengths.buffer
      }
    },
    averageEdgeLength: t.averageEdgeLength
  };
}
var l = class {
  allocate(e) {
    return d.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1);
  }
};
var d2 = class {
  allocate(e) {
    return m.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1), e.componentIndex.set(t, n.componentIndex);
  }
};
var f2 = new l();
var p2 = new d2();
export {
  o as default
};
//# sourceMappingURL=EdgeProcessingWorker-UI5JRHAM.js.map
