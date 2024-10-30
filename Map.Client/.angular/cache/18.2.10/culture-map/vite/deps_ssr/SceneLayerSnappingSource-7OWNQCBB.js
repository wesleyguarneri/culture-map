import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a3
} from "./chunk-JVMSRKZ6.js";
import {
  r as r2
} from "./chunk-2KWC6XPV.js";
import "./chunk-RFURERTV.js";
import {
  r
} from "./chunk-CATQ6UZ5.js";
import "./chunk-MIWJLMUG.js";
import {
  a as a2,
  p
} from "./chunk-MDOKECP3.js";
import "./chunk-IVVINOEJ.js";
import "./chunk-DUSY4H5O.js";
import "./chunk-XUM2DDAI.js";
import "./chunk-JRL65HQ7.js";
import "./chunk-62PN4TEW.js";
import "./chunk-OPXEKSUB.js";
import {
  h as h2
} from "./chunk-C7GHK6X7.js";
import "./chunk-MVFFVLIJ.js";
import "./chunk-BWIXIEN4.js";
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
  h
} from "./chunk-HFXXFWYN.js";
import "./chunk-QRWQ6QBB.js";
import "./chunk-ZSJNH2BT.js";
import "./chunk-OOK3QTWF.js";
import "./chunk-XP2AJZUL.js";
import {
  Z
} from "./chunk-L6FG3WIC.js";
import "./chunk-6ZLH7XBS.js";
import "./chunk-44ZUWZXU.js";
import "./chunk-7QOUHKW5.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-2TNGEJGS.js";
import "./chunk-OYGNGIHQ.js";
import "./chunk-GSG4T2KM.js";
import "./chunk-D7C26LZP.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-ORYC4PVJ.js";
import "./chunk-DXIKKLD7.js";
import "./chunk-VQNXE43R.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-KOI252FF.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  c2 as c,
  s
} from "./chunk-AIZ3T7E3.js";
import {
  l as l2
} from "./chunk-6UEMNP3E.js";
import {
  e,
  l
} from "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js
var l3 = class extends S {
  constructor(e3) {
    super(e3), this.availability = 0, this._ids = /* @__PURE__ */ new Set();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new h3(this.schedule, {
      fetchAllEdgeLocations: (e3, t) => this._fetchAllEdgeLocations(e3, t)
    });
  }
  fetchCandidates(e3, t) {
    return __async(this, null, function* () {
      const r3 = e3.coordinateHelper, {
        point: o
      } = e3, s2 = u;
      this.renderCoordsHelper.toRenderCoords(o, r3.spatialReference, s2);
      const n2 = e3.distance, a4 = "number" == typeof n2 ? n2 : n2.distance, d = yield this._workerHandle.invoke({
        bounds: Z(s2[0], s2[1], s2[2], a4),
        returnEdge: e3.returnEdge,
        returnVertex: "none" !== e3.vertexMode
      }, t);
      return d.candidates.sort((e4, t2) => e4.distance - t2.distance), d.candidates.map((e4) => this._convertCandidate(r3, e4));
    });
  }
  add(e3, t) {
    return __async(this, null, function* () {
      this._ids.add(e3.id), yield this._workerHandle.invokeMethod("add", e3, t);
    });
  }
  remove(e3, t) {
    return __async(this, null, function* () {
      this._ids.delete(e3.id), yield this._workerHandle.invokeMethod("remove", e3, t);
    });
  }
  _convertCandidate(e3, t) {
    switch (t.type) {
      case "edge":
        return new r({
          objectId: t.objectId,
          targetPoint: p(this._convertRenderCoordinate(e3, t.target)),
          edgeStart: this._convertRenderCoordinate(e3, t.start),
          edgeEnd: this._convertRenderCoordinate(e3, t.end),
          isDraped: false
        });
      case "vertex":
        return new r2({
          objectId: t.objectId,
          targetPoint: p(this._convertRenderCoordinate(e3, t.target)),
          isDraped: false
        });
    }
  }
  _convertRenderCoordinate({
    spatialReference: e3
  }, t) {
    const r3 = n();
    return this.renderCoordsHelper.fromRenderCoords(t, r3, e3), a2(r3);
  }
  _fetchAllEdgeLocations(e3, t) {
    return __async(this, null, function* () {
      const r3 = [], o = [];
      for (const {
        id: s2,
        uid: n2
      } of e3.components) this._ids.has(s2) && r3.push((() => __async(this, null, function* () {
        const e4 = yield this.fetchEdgeLocations(s2, t.signal), r4 = e4.locations.buffer;
        return o.push(r4), {
          id: s2,
          uid: n2,
          objectIds: e4.objectIds,
          locations: r4,
          origin: e4.origin,
          type: e4.type
        };
      }))());
      return {
        result: {
          components: (yield Promise.all(r3)).filter(({
            id: e4
          }) => this._ids.has(e4))
        },
        transferList: o
      };
    });
  }
};
e2([y({
  constructOnly: true
})], l3.prototype, "renderCoordsHelper", void 0), e2([y({
  constructOnly: true
})], l3.prototype, "fetchEdgeLocations", void 0), e2([y({
  constructOnly: true
})], l3.prototype, "schedule", void 0), e2([y({
  readOnly: true
})], l3.prototype, "availability", void 0), l3 = e2([a("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")], l3);
var h3 = class extends h2 {
  constructor(e3, t) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e3, {
      strategy: "dedicated",
      client: t
    });
  }
};
var u = n();

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js
var p2 = class extends S {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e3) {
    super(e3), this.availability = 1, this._updatingHandles = new h(), this._abortController = new AbortController();
  }
  destroy() {
    this._tracker = l(this._tracker), this._abortController = e(this._abortController), this._updatingHandles.destroy();
  }
  initialize() {
    const {
      view: e3
    } = this, r3 = e3.resourceController;
    this._edgeWorker = new a3(h4(r3)), this._workerHandle = new l3({
      renderCoordsHelper: this.view.renderCoordsHelper,
      schedule: h4(r3),
      fetchEdgeLocations: (e4, r4) => __async(this, null, function* () {
        if (null == this._tracker) throw new Error("tracker-not-initialized");
        return this._tracker.fetchEdgeLocations(e4, this._edgeWorker, r4);
      })
    }), this._updatingHandles.addPromise(this._setupLayerView()), this.addHandles([l2(this._workerHandle), l2(this._edgeWorker)]);
  }
  fetchCandidates(e3, r3) {
    return __async(this, null, function* () {
      return this._workerHandle.fetchCandidates(e3, r3);
    });
  }
  refresh() {
  }
  _setupLayerView() {
    return __async(this, null, function* () {
      if (this.destroyed) return;
      const e3 = this._abortController?.signal, r3 = yield this.getLayerView();
      null == r3 || c(e3) || (this._tracker = r3.trackSnappingSources({
        add: (r4, t) => {
          this._updatingHandles.addPromise(this._workerHandle.add({
            id: r4,
            bounds: t
          }, e3));
        },
        remove: (r4) => {
          this._updatingHandles.addPromise(this._workerHandle.remove({
            id: r4
          }, e3));
        }
      }));
    });
  }
};
function h4(e3) {
  return (r3) => e3.immediate.schedule(r3);
}
e2([y({
  constructOnly: true
})], p2.prototype, "getLayerView", void 0), e2([y({
  constructOnly: true
})], p2.prototype, "view", void 0), e2([y({
  readOnly: true
})], p2.prototype, "updating", null), e2([y({
  readOnly: true
})], p2.prototype, "availability", void 0), p2 = e2([a("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p2);

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js
var c2 = class extends S {
  get updating() {
    return this._i3sSources.some((e3) => e3.updating);
  }
  constructor(e3) {
    super(e3), this.availability = 1, this._i3sSources = [];
  }
  destroy() {
    this._i3sSources.forEach((e3) => e3.destroy()), this._i3sSources.length = 0;
  }
  initialize() {
    const {
      view: e3
    } = this, r3 = this.layerSource.layer;
    this._i3sSources = "building-scene" === r3.type ? this._getBuildingSceneI3SSources(e3, r3) : [this._getSceneLayerI3SSource(e3, r3)];
  }
  fetchCandidates(e3, r3) {
    return __async(this, null, function* () {
      const t = yield Promise.all(this._i3sSources.map((t2) => t2.fetchCandidates(e3, r3)));
      return s(r3), t.flat();
    });
  }
  refresh() {
    this._i3sSources.forEach((e3) => e3.refresh());
  }
  _getBuildingSceneI3SSources(e3, r3) {
    return r3.allSublayers.toArray().map((t) => "building-component" === t.type ? new p2({
      getLayerView: () => __async(this, null, function* () {
        return (yield e3.whenLayerView(r3)).whenSublayerView(t);
      }),
      view: e3
    }) : null).filter(O);
  }
  _getSceneLayerI3SSource(e3, r3) {
    return new p2({
      getLayerView: () => __async(this, null, function* () {
        const t = yield e3.whenLayerView(r3);
        return "scene-layer-graphics-3d" === t.type ? void 0 : t;
      }),
      view: e3
    });
  }
};
e2([y({
  constructOnly: true
})], c2.prototype, "layerSource", void 0), e2([y({
  constructOnly: true
})], c2.prototype, "view", void 0), e2([y({
  readOnly: true
})], c2.prototype, "updating", null), e2([y({
  readOnly: true
})], c2.prototype, "availability", void 0), c2 = e2([a("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], c2);
export {
  c2 as SceneLayerSnappingSource
};
//# sourceMappingURL=SceneLayerSnappingSource-7OWNQCBB.js.map
