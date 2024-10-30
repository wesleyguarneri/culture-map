import {
  Y
} from "./chunk-N3S77FRG.js";
import "./chunk-YYETZJJB.js";
import {
  M,
  h,
  v
} from "./chunk-MD2IQSSQ.js";
import {
  m
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
import {
  V,
  _,
  st
} from "./chunk-ZE47C44H.js";
import "./chunk-5GIS2C3K.js";
import "./chunk-XCOHDMBF.js";
import "./chunk-N4KQPPPI.js";
import "./chunk-4OGGMTIH.js";
import "./chunk-NQVBBKAN.js";
import "./chunk-4MMTPKY4.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-BQZBOYBD.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-3ZXOUEQG.js";
import {
  q,
  u,
  x
} from "./chunk-AXVPJBVW.js";
import {
  n,
  t
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=SceneLayerSnappingSourceWorker-XWIPOFKW.js.map
