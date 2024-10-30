import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-MVFFVLIJ.js";
import {
  E,
  d,
  f,
  m,
  p,
  u as u2
} from "./chunk-BWIXIEN4.js";
import "./chunk-BFSKQ7XP.js";
import "./chunk-WHVSAUHM.js";
import "./chunk-LQUVB46M.js";
import "./chunk-GHPF24X4.js";
import "./chunk-PK6A5N2R.js";
import "./chunk-UC4DX4SE.js";
import "./chunk-44O4APOL.js";
import "./chunk-LCPLUSDH.js";
import "./chunk-KINQ7OJ3.js";
import "./chunk-KYLW5XXS.js";
import "./chunk-DLWZ3HVT.js";
import "./chunk-B76NC7GX.js";
import "./chunk-D7C26LZP.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=EdgeProcessingWorker-VZJ76YTH.js.map
