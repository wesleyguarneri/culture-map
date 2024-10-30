import {
  a as a3
} from "./chunk-3YB72UIF.js";
import {
  r as r2
} from "./chunk-GHN4GWVN.js";
import "./chunk-TJIA4U42.js";
import {
  r
} from "./chunk-WQXGIEVZ.js";
import "./chunk-T3EGKTN6.js";
import {
  a as a2,
  p
} from "./chunk-ZFPMGEAK.js";
import "./chunk-4SCJM64G.js";
import "./chunk-DABQKFI5.js";
import "./chunk-67V5AGVJ.js";
import "./chunk-2ERGO64O.js";
import "./chunk-RP2GKJCD.js";
import "./chunk-QL5HR3YL.js";
import {
  h as h2
} from "./chunk-Y37SHKPH.js";
import "./chunk-JPUM54Z2.js";
import "./chunk-OCHDIAAK.js";
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
  h
} from "./chunk-PVO5NM6Q.js";
import "./chunk-DM4WHMQY.js";
import "./chunk-6MR4UDDL.js";
import "./chunk-5YIMTGEC.js";
import "./chunk-O2DTA3XK.js";
import {
  Z
} from "./chunk-ZE47C44H.js";
import "./chunk-5GIS2C3K.js";
import "./chunk-XCOHDMBF.js";
import "./chunk-6XGV55XZ.js";
import "./chunk-HOH445RO.js";
import "./chunk-N4KQPPPI.js";
import "./chunk-4OGGMTIH.js";
import "./chunk-NQVBBKAN.js";
import "./chunk-4MMTPKY4.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-BQZBOYBD.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-TRSGUVSM.js";
import "./chunk-U3MA63JX.js";
import "./chunk-WYKKCLBI.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-DWASPXVI.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-3RRMLFFN.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-K64AAM77.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-MNLT652N.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  c2 as c,
  s
} from "./chunk-HJY2YILU.js";
import {
  l as l2
} from "./chunk-7DA6A5LD.js";
import {
  e,
  l
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=SceneLayerSnappingSource-MHYLYYCL.js.map
