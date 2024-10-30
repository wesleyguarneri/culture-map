import {
  I,
  P as P2,
  c,
  p as p2
} from "./chunk-STVIJ4IV.js";
import {
  p
} from "./chunk-QRVAQWLH.js";
import {
  P,
  d
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  t
} from "./chunk-ANP42J2U.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/allLayerSnapping.js
function a(a3, s2) {
  const p4 = new c({
    enabled: true,
    selfEnabled: false,
    featureEnabled: true,
    distance: s2?.distance ?? p.distance,
    touchSensitivityMultiplier: s2?.touchSensitivityMultiplier ?? p.touchSensitivityMultiplier
  });
  return __spreadProps(__spreadValues({}, d(() => a3.map?.allLayers?.toArray() ?? [], (t2) => {
    p4.featureSources = new V(t2.map((e2) => new p2({
      layer: e2
    })));
  }, P)), {
    options: p4
  });
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingManagerPool.js
var i = /* @__PURE__ */ new Map();
function a2(n) {
  if (!i.has(n)) {
    const e2 = a(n, {
      distance: 10
    }), o2 = s(n, e2.options);
    i.set(n, {
      referenceCount: 0,
      snappingManager: o2,
      remove: () => {
        e2.remove(), o2.destroy();
      }
    });
  }
  const o = i.get(n);
  o.referenceCount++;
  const t2 = e(() => p3(n, o));
  return __spreadValues({
    snappingManager: o.snappingManager
  }, t2);
}
function p3(e2, r) {
  r.referenceCount--, r.referenceCount > 0 || t(() => {
    0 === r.referenceCount && (r.remove(), i.delete(e2));
  });
}
function s(e2, n) {
  return new I({
    view: e2,
    options: n,
    snappingEnginesFactory: (n2, r) => [new P2({
      view: e2,
      spatialReference: e2.spatialReference,
      options: r
    })]
  });
}

export {
  a2 as a
};
//# sourceMappingURL=chunk-23XRL5UO.js.map
