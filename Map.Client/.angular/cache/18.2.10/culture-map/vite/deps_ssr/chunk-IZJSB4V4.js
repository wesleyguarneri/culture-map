import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
function r(r2, n, t, s2, a, i, l) {
  return __async(this, null, function* () {
    let d = null;
    if (null != t) {
      const o = `${r2}/nodepages/`, n2 = o + Math.floor(t.rootIndex / t.nodesPerPage);
      try {
        return {
          type: "page",
          rootPage: (yield U(n2, {
            query: __spreadProps(__spreadValues({
              f: "json"
            }, s2), {
              token: a
            }),
            responseType: "json",
            signal: l
          })).data,
          rootIndex: t.rootIndex,
          pageSize: t.nodesPerPage,
          lodMetric: t.lodSelectionMetricType,
          urlPrefix: o
        };
      } catch (g) {
        null != i && i.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", n2, g), d = g;
      }
    }
    if (!n) return null;
    const p = n?.split("/").pop(), c = `${r2}/nodes/`, u = c + p;
    try {
      return {
        type: "node",
        rootNode: (yield U(u, {
          query: __spreadProps(__spreadValues({
            f: "json"
          }, s2), {
            token: a
          }),
          responseType: "json",
          signal: l
        })).data,
        urlPrefix: c
      };
    } catch (g) {
      throw new s("sceneservice:root-node-missing", "Root node missing.", {
        pageError: d,
        nodeError: g,
        url: u
      });
    }
  });
}

export {
  r
};
//# sourceMappingURL=chunk-IZJSB4V4.js.map
