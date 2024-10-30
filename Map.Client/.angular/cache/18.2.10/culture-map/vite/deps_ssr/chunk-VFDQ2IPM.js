import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-Q23C3NFQ.js";
import {
  w
} from "./chunk-J5J3QXIV.js";
import {
  x
} from "./chunk-IPGNBAEV.js";
import {
  a
} from "./chunk-HVJMAP6C.js";
import {
  F,
  I
} from "./chunk-EXKCGLRO.js";
import {
  j
} from "./chunk-ZSJNH2BT.js";
import {
  d as d2
} from "./chunk-LZSLQ24Q.js";
import {
  d,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  l
} from "./chunk-6WGE3IUL.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingDragPipelineStep.js
function f({
  predicate: o = () => true,
  snappingManager: i,
  snappingContext: l2,
  updatingHandles: u,
  useZ: c = true
}) {
  const p = new w();
  if (null == i) return {
    snappingStep: [y, p],
    cancelSnapping: y
  };
  let f2, Z = null, j2 = null, z = null;
  const T = () => {
    Z = e(Z), i.doneSnapping(), j2?.frameTask.remove(), j2 = null, f2 = l(f2), z = null;
  }, k2 = d3(i, c, p);
  let w2 = null, I2 = null, U = null;
  return {
    snappingStep: [(n) => {
      if (!o(n)) return n;
      const {
        action: e3
      } = n;
      if ("start" === e3) {
        const {
          info: e4
        } = n, t = m(i.view);
        if (j2 = g(l2, n, t), j2.context.selfSnappingZ = null, !c && null != e4) {
          const n2 = S(l2.coordinateHelper, e4.handle.component);
          null != n2 && (j2.context.selfSnappingZ = {
            value: n2,
            elevationInfo: l2.elevationInfo ?? j
          });
        }
      }
      if (null != j2) {
        const {
          context: o2,
          originalScenePos: l3,
          originalPos: a2
        } = j2, {
          mapEnd: s,
          mapStart: p2,
          scenePoints: d4
        } = n, m2 = x2(a2, v(s, p2)), g2 = v(p2, a2), S2 = __spreadProps(__spreadValues({}, n), {
          action: "update"
        }), y2 = j2.context, T2 = P(l3, d4), C = i.update({
          point: m2,
          scenePoint: T2,
          context: o2
        });
        if (U = C, h(s, C, g2, c), w2 = m2, I2 = T2, "end" !== e3) {
          const {
            frameTask: n2
          } = j2;
          null == Z && (Z = new AbortController()), z = (e4) => {
            u.addPromise(d(k2({
              frameTask: n2,
              event: S2,
              context: y2,
              point: m2,
              scenePoint: T2,
              delta: g2,
              getLastState: () => ({
                point: w2,
                scenePoint: I2,
                updatePoint: e4.forceUpdate ? null : U
              })
            }, Z.signal)));
          }, z({
            forceUpdate: false
          }), null == f2 && (f2 = d2(() => i.options.effectiveEnabled, () => z?.({
            forceUpdate: true
          })));
        }
      }
      return "end" === e3 && T(), n;
    }, p],
    cancelSnapping: (n) => (T(), n)
  };
}
function d3(n, e3, t) {
  return k((_0, _1) => __async(this, [_0, _1], function* ({
    frameTask: o,
    point: r,
    scenePoint: l2,
    context: a2,
    event: s,
    delta: u,
    getLastState: c
  }, p) {
    const f2 = yield o.schedule(() => n.snap({
      point: r,
      scenePoint: l2,
      context: a2,
      signal: p
    }), p);
    if (f2.valid) {
      let l3 = yield o.schedule(() => f2.apply(), p);
      const d4 = c();
      null != d4.point && r !== d4.point && (l3 = n.update({
        point: d4.point,
        scenePoint: d4.scenePoint,
        context: a2
      })), null != d4.updatePoint && a(l3, d4.updatePoint) || (h(s.mapEnd, l3, u, e3), t.execute(s));
    }
  }));
}
function m(n) {
  return "3d" === n.type ? n.resourceController.scheduler.registerTask(I.SNAPPING) : F;
}
function g(n, e3, t) {
  return {
    context: new e2({
      editGeometryOperations: n.editGeometryOperations,
      elevationInfo: n.elevationInfo,
      pointer: n.pointer,
      vertexHandle: null != e3.info ? e3.info.handle : null,
      excludeFeature: n.excludeFeature,
      feature: n.feature,
      visualizer: n.visualizer
    }),
    originalPos: null != e3.snapOrigin ? n.coordinateHelper.vectorToDehydratedPoint(e3.snapOrigin) : e3.mapStart,
    originalScenePos: null != e3.scenePoints ? e3.scenePoints.sceneStart : null,
    frameTask: t
  };
}
function x2(n, [e3, t, o]) {
  const r = x(n);
  return r.x += e3, r.y += t, r.hasZ && (r.z += o), r;
}
function P(n, e3) {
  return null == n || null == e3 ? null : x2(n, v(e3.sceneEnd, e3.sceneStart));
}
function v(n, e3) {
  const t = n.hasZ && e3.hasZ ? n.z - e3.z : 0;
  return [n.x - e3.x, n.y - e3.y, t];
}
function h(n, e3, [t, o, r], i) {
  n.x = e3.x + t, n.y = e3.y + o, i && n.hasZ && e3.hasZ && (n.z = e3.z + r);
}
function S(n, e3) {
  if (!n.hasZ()) return null;
  const t = e3.vertices;
  let o = null;
  for (const r of t) {
    const e4 = n.getZ(r.pos);
    if (null != o && null != e4 && Math.abs(e4 - o) > 1e-6) return null;
    null == o && (o = e4);
  }
  return o;
}
function y(n) {
  return n;
}

export {
  f
};
//# sourceMappingURL=chunk-VFDQ2IPM.js.map
