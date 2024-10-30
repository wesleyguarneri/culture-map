import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  w as w2
} from "./chunk-J5J3QXIV.js";
import {
  g as g2
} from "./chunk-NCXTRC7L.js";
import {
  T,
  e as e3,
  i as i2
} from "./chunk-K6JW77RY.js";
import {
  w
} from "./chunk-N4FQBAT2.js";
import {
  p
} from "./chunk-ZSJNH2BT.js";
import {
  h,
  m
} from "./chunk-6ZLH7XBS.js";
import {
  E,
  F,
  S,
  e as e2,
  j,
  t
} from "./chunk-2TNGEJGS.js";
import {
  $
} from "./chunk-LM3JDV4W.js";
import {
  d,
  i,
  l
} from "./chunk-VYTPFEL2.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  P,
  _ as _2,
  e,
  g,
  r,
  s,
  u
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/dragEventPipeline3D.js
function O(e4, n2) {
  return P2(e4, () => n2);
}
function C(e4) {
  return P2(e4, (e5) => e5.plane);
}
function P2(r2, t2) {
  const o = n(), l2 = n();
  let s2 = false;
  return (c) => {
    const a = t2(c);
    if ("start" === c.action) {
      const t3 = d(c.screenStart, l(t.get())), l3 = g2(r2.state.camera, t3, K);
      null != l3 && (s2 = S(a, l3, o));
    }
    if (!s2) return null;
    const i3 = d(c.screenEnd, l(t.get())), u2 = g2(r2.state.camera, i3, K);
    return null == u2 ? null : S(a, u2, l2) ? __spreadProps(__spreadValues({}, c), {
      renderStart: o,
      renderEnd: l2,
      plane: a,
      ray: u2
    }) : null;
  };
}
function T2(e4, n2, t2 = 0, o = null, l2 = null) {
  let s2 = null;
  return (c) => {
    if ("start" === c.action && (s2 = e4.sceneIntersectionHelper.intersectElevationFromScreen(i(c.screenStart.x, c.screenStart.y), n2, t2, l2), null != s2 && null != o && !$(s2, s2, o))) return null;
    if (null == s2) return null;
    const a = e4.sceneIntersectionHelper.intersectElevationFromScreen(i(c.screenEnd.x, c.screenEnd.y), n2, t2, l2);
    return null != a && (null == o || $(a, a, o)) ? __spreadProps(__spreadValues({}, c), {
      mapStart: s2,
      mapEnd: a
    }) : null;
  };
}
function D(e4, n2, r2, t2 = null, o = null) {
  return T2(e4, r2, p(n2, e4, r2), t2, o);
}
function M(e4, n2, r2, t2) {
  const o = r2.toMap(e4.screenStart);
  return null != o ? D(n2, o, r2.elevationInfo, t2) : null;
}
function N(e4, n2) {
  const r2 = B, t2 = J, o = E();
  e4.renderCoordsHelper.worldUpAtPosition(n2, r2);
  const c = _2(F(o), r2, e(t2, n2, e4.state.camera.eye));
  return _2(c, c, r2), j(n2, c, o);
}
function G(e4, n2, r2) {
  let t2 = null;
  const o = new w2();
  return o.next(O(e4, N(e4, n2))).next(h2(e4, n2)).next(A(e4, r2)).next((e5) => {
    e5.mapEnd.x = e5.mapStart.x, e5.mapEnd.y = e5.mapStart.y, t2 = e5;
  }), (e5) => (t2 = null, o.execute(e5), t2);
}
function h2(e4, n2) {
  const r2 = n(), l2 = s(n2);
  e4.renderCoordsHelper.worldUpAtPosition(n2, r2);
  const p2 = n(), m2 = n(), d2 = (o) => {
    if (e(o, o, n2), e2(r2, o, o), "global" === e4.viewingMode) {
      s(o) * Math.sign(P(r2, o)) < 1e-3 - l2 && e(o, g(o, r2, 1e-3), n2);
    }
    return u(o, o, n2), o;
  };
  return (e5) => (e5.renderStart = d2(r(p2, e5.renderStart)), e5.renderEnd = d2(r(m2, e5.renderEnd)), e5);
}
function k(r2, t2) {
  const o = (o2) => {
    const l2 = d(o2, l(t.get())), s2 = g2(r2.state.camera, l2, K);
    return null == s2 ? null : h(t2, s2, B, J)[1];
  };
  return (e4) => {
    const n2 = o(e4.screenStart);
    if (null == n2) return null;
    const r3 = o(e4.screenEnd);
    return null == r3 ? null : __spreadProps(__spreadValues({}, e4), {
      renderStart: n2,
      renderEnd: r3
    });
  };
}
function A(e4, n2) {
  const r2 = e4.renderCoordsHelper;
  return (e5) => {
    const t2 = r2.fromRenderCoords(e5.renderStart, new _({
      spatialReference: n2
    })), o = r2.fromRenderCoords(e5.renderEnd, new _({
      spatialReference: n2
    }));
    return null != t2 && null != o ? __spreadProps(__spreadValues({}, e5), {
      mapStart: t2,
      mapEnd: o
    }) : null;
  };
}
var F2;
function q(e4) {
  let n2 = null;
  return (r2) => {
    switch (r2.action) {
      case "start":
        n2 = e4.disableDisplay();
        break;
      case "end":
      case "cancel":
        null != n2 && (n2.remove(), n2 = null);
    }
    return r2;
  };
}
function z(n2, t2 = null) {
  const o = T(n2.state.viewingMode);
  o.options.selectionMode = true, o.options.store = e3.MIN, o.options.hud = false;
  const l2 = i(), s2 = {
    requiresGroundFeedback: true,
    enableDraped: true,
    exclude: /* @__PURE__ */ new Set()
  }, c = n(), a = t2 ?? n2.spatialReference, i3 = (r2) => {
    n2.map.ground && n2.map.ground.opacity < 1 ? s2.exclude.add(w) : s2.exclude.delete(w), n2.sceneIntersectionHelper.intersectIntersectorScreen(d(r2, l2), o, s2);
    const t3 = o.results.min;
    let i4;
    if (t3.getIntersectionPoint(c)) i4 = t3.intersector === i2.TERRAIN ? F2.GROUND : F2.OTHER;
    else {
      if (!o.results.ground.getIntersectionPoint(c)) return null;
      i4 = F2.GROUND;
    }
    return {
      location: n2.renderCoordsHelper.fromRenderCoords(c, new _({
        spatialReference: a
      })),
      surfaceType: i4
    };
  };
  let p2;
  return (e4) => {
    if ("start" === e4.action) {
      const n4 = i3(e4.screenStart);
      p2 = null != n4 ? n4.location : null;
    }
    if (null == p2) return null;
    const n3 = i3(e4.screenEnd);
    return null != n3?.location ? __spreadProps(__spreadValues({}, e4), {
      mapStart: p2,
      mapEnd: n3.location,
      surfaceType: n3.surfaceType
    }) : null;
  };
}
!function(e4) {
  e4[e4.GROUND = 0] = "GROUND", e4[e4.OTHER = 1] = "OTHER";
}(F2 || (F2 = {}));
var B = n();
var J = n();
var K = m();

export {
  O,
  C,
  D,
  M,
  G,
  k,
  A,
  F2 as F,
  q,
  z
};
//# sourceMappingURL=chunk-SPTEUQ5I.js.map
