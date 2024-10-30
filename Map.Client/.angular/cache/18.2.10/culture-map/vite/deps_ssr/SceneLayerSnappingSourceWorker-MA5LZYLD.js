import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Y
} from "./chunk-TMXHZTIG.js";
import "./chunk-FIQ7DCCC.js";
import {
  M,
  h,
  v
} from "./chunk-SNHVHW2N.js";
import {
  m
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
import {
  V,
  _,
  st
} from "./chunk-L6FG3WIC.js";
import "./chunk-6ZLH7XBS.js";
import "./chunk-44ZUWZXU.js";
import "./chunk-2TNGEJGS.js";
import "./chunk-OYGNGIHQ.js";
import "./chunk-GSG4T2KM.js";
import "./chunk-D7C26LZP.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-KOI252FF.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-2OZSYJDX.js";
import {
  q,
  u,
  x
} from "./chunk-MZM4INJV.js";
import {
  n,
  t
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js
var t2 = 1e3;
function e2(t3, e3, a2) {
  const p = _(), m2 = V(p);
  return q(m2, m2, t3, 0.5), q(m2, m2, e3, 0.5), p[3] = x(m2, t3), u(m2, m2, a2), p;
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js
var f = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new Y((e3) => e3.bounds), this._edges = new Y((e3) => e3.bounds), this._tmpLineSegment = v(), this._tmpP1 = n(), this._tmpP2 = n(), this._tmpP3 = n(), this.remoteClient = null;
  }
  fetchCandidates(e3, o) {
    return __async(this, null, function* () {
      yield Promise.resolve(), s(o), yield this._ensureEdgeLocations(e3, o);
      const s2 = [];
      return this._edges.forEachNeighbor((t3) => (this._addCandidates(e3, t3, s2), s2.length < t2), e3.bounds), {
        result: {
          candidates: s2
        }
      };
    });
  }
  _ensureEdgeLocations(e3, t3) {
    return __async(this, null, function* () {
      const o = [];
      if (this._components.forEachNeighbor((e4) => {
        if (null == e4.info) {
          const {
            id: t4,
            uid: s3
          } = e4;
          o.push({
            id: t4,
            uid: s3
          });
        }
        return true;
      }, e3.bounds), !o.length) return;
      const s2 = {
        components: o
      }, n2 = yield this.remoteClient.invoke("fetchAllEdgeLocations", s2, t3 ?? {});
      for (const i of n2.components) this._setFetchEdgeLocations(i);
    });
  }
  add(e3) {
    return __async(this, null, function* () {
      const t3 = new j(e3.id, e3.bounds);
      return this._idToComponent.set(t3.id, t3), this._components.add([t3]), {
        result: {}
      };
    });
  }
  remove(e3) {
    return __async(this, null, function* () {
      const t3 = this._idToComponent.get(e3.id);
      if (t3) {
        const e4 = [];
        this._edges.forEachNeighbor((o) => (o.component === t3 && e4.push(o), true), t3.bounds), this._edges.remove(e4), this._components.remove([t3]), this._idToComponent.delete(t3.id);
      }
      return {
        result: {}
      };
    });
  }
  _setFetchEdgeLocations(e3) {
    const t3 = this._idToComponent.get(e3.id);
    if (null == t3 || e3.uid !== t3.uid) return;
    const o = m.createView(e3.locations), s2 = new Array(o.count), n2 = n(), r = n();
    for (let i = 0; i < o.count; i++) {
      o.position0.getVec(i, n2), o.position1.getVec(i, r);
      const c2 = e2(n2, r, e3.origin), d2 = new w(t3, i, c2);
      s2[i] = d2;
    }
    this._edges.add(s2);
    const {
      objectIds: c,
      origin: d
    } = e3;
    t3.info = {
      locations: o,
      objectIds: c,
      origin: d
    };
  }
  _addCandidates(e3, t3, o) {
    const {
      info: n2
    } = t3.component, {
      origin: i,
      objectIds: r
    } = n2, c = n2.locations, d = c.position0.getVec(t3.index, this._tmpP1), a2 = c.position1.getVec(t3.index, this._tmpP2);
    u(d, d, i), u(a2, a2, i);
    const p = r[c.componentIndex.get(t3.index)];
    this._addEdgeCandidate(e3, p, d, a2, o), b(e3, p, d, o), b(e3, p, a2, o);
  }
  _addEdgeCandidate(e3, t3, o, s2, i) {
    if (!e3.returnEdge) return;
    const c = V(e3.bounds), u2 = h(o, s2, this._tmpLineSegment), h2 = M(u2, c, this._tmpP3);
    st(e3.bounds, h2) && i.push({
      type: "edge",
      objectId: t3,
      target: t(h2),
      distance: x(c, h2),
      start: t(o),
      end: t(s2)
    });
  }
};
f = e([a("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], f);
var _2 = f;
function b(e3, t3, o, s2) {
  if (!e3.returnVertex || !st(e3.bounds, o)) return;
  const i = V(e3.bounds);
  s2.push({
    type: "vertex",
    objectId: t3,
    target: t(o),
    distance: x(i, o)
  });
}
var j = class _j {
  constructor(e3, t3) {
    this.id = e3, this.bounds = t3, this.info = null, this.uid = ++_j.uid;
  }
};
j.uid = 0;
var w = class {
  constructor(e3, t3, o) {
    this.component = e3, this.index = t3, this.bounds = o;
  }
};
export {
  _2 as default
};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-MA5LZYLD.js.map
