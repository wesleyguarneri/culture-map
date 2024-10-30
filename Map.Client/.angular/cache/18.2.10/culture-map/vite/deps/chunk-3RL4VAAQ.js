import {
  r as r2
} from "./chunk-JPIYGHSR.js";
import {
  v
} from "./chunk-N3IR233K.js";
import {
  n as n2,
  p as p2
} from "./chunk-SNY4EEM3.js";
import {
  i as i2
} from "./chunk-2GDRAUF6.js";
import {
  i
} from "./chunk-XLPKC3OB.js";
import {
  o as o2
} from "./chunk-B5ZW6SJE.js";
import {
  t
} from "./chunk-APL7ANIA.js";
import {
  C,
  S as S2,
  d,
  m,
  w as w2
} from "./chunk-CRNUMTSV.js";
import {
  g,
  p
} from "./chunk-DSEUCBVP.js";
import {
  S
} from "./chunk-FYAEQPUY.js";
import {
  C as C2
} from "./chunk-7XMEZQ34.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  I,
  U
} from "./chunk-SYATLP3H.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  k
} from "./chunk-HJY2YILU.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
var n3 = null;
function u() {
  return n3;
}

// ../../../node_modules/@arcgis/core/layers/mixins/SceneService.js
var L = (L2) => {
  let M = class extends L2 {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = {
        major: Number.NaN,
        minor: Number.NaN,
        versionString: ""
      }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = k((e2, t2, r3) => __async(this, null, function* () {
        switch (e2) {
          case C3.SAVE:
            return this._save(t2);
          case C3.SAVE_AS:
            return this._saveAs(r3, t2);
        }
      }));
    }
    readSpatialReference(e2, t2) {
      return T(t2);
    }
    readFullExtent(e2, t2, r3) {
      if (null != e2 && "object" == typeof e2) {
        const o4 = null == e2.spatialReference ? __spreadProps(__spreadValues({}, e2), {
          spatialReference: T(t2)
        }) : e2;
        return w.fromJSON(o4, r3);
      }
      const o3 = t2.store, i3 = T(t2);
      return null == i3 || null == o3?.extent || !Array.isArray(o3.extent) || o3.extent.some((e3) => e3 < U2) ? null : new w({
        xmin: o3.extent[0],
        ymin: o3.extent[1],
        xmax: o3.extent[2],
        ymax: o3.extent[3],
        spatialReference: i3
      });
    }
    parseVersionString(e2) {
      const t2 = {
        major: Number.NaN,
        minor: Number.NaN,
        versionString: e2
      }, r3 = e2.split(".");
      return r3.length >= 2 && (t2.major = parseInt(r3[0], 10), t2.minor = parseInt(r3[1], 10)), t2;
    }
    readVersion(e2, t2) {
      const r3 = t2.store, o3 = null != r3.version ? r3.version.toString() : "";
      return this.parseVersionString(o3);
    }
    readTitlePortalItem(e2) {
      return "item-title" !== this.sublayerTitleMode ? void 0 : e2;
    }
    readTitleService(e2, t2) {
      const r3 = this.portalItem?.title;
      if ("item-title" === this.sublayerTitleMode) return this.url ? w2(this.url, t2.name) : t2.name;
      let o3 = t2.name;
      if (!o3 && this.url) {
        const e3 = d(this.url);
        null != e3 && (o3 = e3.title);
      }
      return "item-title-and-service-name" === this.sublayerTitleMode && r3 && (o3 = r3 + " - " + o3), m(o3);
    }
    set url(e2) {
      if (null == e2) return void this._set("url", e2);
      const t2 = S2({
        layer: this,
        url: e2,
        nonStandardUrlAllowed: false,
        logger: n.getLogger(this)
      });
      this._set("url", t2.url), null != t2.layerId && this._set("layerId", t2.layerId);
    }
    writeUrl(e2, t2, r3, o3) {
      C(this, e2, "layers", t2, o3);
    }
    get parsedUrl() {
      const e2 = this._get("url"), t2 = I(e2);
      return t2 && null != this.layerId && (t2.path = `${t2.path}/layers/${this.layerId}`), t2;
    }
    _fetchIndexAndUpdateExtent(e2, t2) {
      return __async(this, null, function* () {
        this.indexInfo = r2(this.parsedUrl?.path ?? "", this.rootNode, e2, this.customParameters, this.apiKey, n.getLogger(this), t2), null == this.fullExtent || this.fullExtent.hasZ || this._updateExtent(yield this.indexInfo);
      });
    }
    _updateExtent(e2) {
      if ("page" === e2?.type) {
        const t2 = e2.rootIndex % e2.pageSize, o3 = e2.rootPage?.nodes?.[t2];
        if (null == o3?.obb?.center || null == o3.obb.halfSize) throw new s("sceneservice:invalid-node-page", "Invalid node page.");
        if (o3.obb.center[0] < U2 || null == this.fullExtent || this.fullExtent.hasZ) return;
        const i3 = o3.obb.halfSize, s2 = o3.obb.center[2], a2 = Math.sqrt(i3[0] * i3[0] + i3[1] * i3[1] + i3[2] * i3[2]);
        this.fullExtent.zmin = s2 - a2, this.fullExtent.zmax = s2 + a2;
      } else if ("node" === e2?.type) {
        const t2 = e2.rootNode?.mbs;
        if (!Array.isArray(t2) || 4 !== t2.length || t2[0] < U2) return;
        const r3 = t2[2], o3 = t2[3], {
          fullExtent: i3
        } = this;
        i3 && (i3.zmin = r3 - o3, i3.zmax = r3 + o3);
      }
    }
    _fetchService(e2) {
      return __async(this, null, function* () {
        if (null == this.url) throw new s("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
        if (null == this.layerId && /SceneServer\/*$/i.test(this.url)) {
          const t2 = yield this._fetchFirstLayerId(e2);
          null != t2 && (this.layerId = t2);
        }
        return this._fetchServiceLayer(e2);
      });
    }
    _fetchFirstLayerId(e2) {
      return __async(this, null, function* () {
        const r3 = yield U(this.url ?? "", {
          query: __spreadProps(__spreadValues({
            f: "json"
          }, this.customParameters), {
            token: this.apiKey
          }),
          responseType: "json",
          signal: e2
        });
        if (r3.data && Array.isArray(r3.data.layers) && r3.data.layers.length > 0) return r3.data.layers[0].id;
      });
    }
    _fetchServiceLayer(e2) {
      return __async(this, null, function* () {
        const r3 = yield U(this.parsedUrl?.path ?? "", {
          query: __spreadProps(__spreadValues({
            f: "json"
          }, this.customParameters), {
            token: this.apiKey
          }),
          responseType: "json",
          signal: e2
        });
        r3.ssl && this.url && (this.url = this.url.replace(/^http:/i, "https:"));
        let o3 = false;
        if (r3.data.layerType && "Voxel" === r3.data.layerType && (o3 = true), o3) return this._fetchVoxelServiceLayer();
        const i3 = r3.data;
        this.read(i3, this._getServiceContext()), this.validateLayer(i3);
      });
    }
    _fetchVoxelServiceLayer(e2) {
      return __async(this, null, function* () {
        const r3 = (yield U(this.parsedUrl?.path + "/layer", {
          query: __spreadProps(__spreadValues({
            f: "json"
          }, this.customParameters), {
            token: this.apiKey
          }),
          responseType: "json",
          signal: e2
        })).data;
        this.read(r3, this._getServiceContext()), this.validateLayer(r3);
      });
    }
    _getServiceContext() {
      return {
        origin: "service",
        portalItem: this.portalItem,
        portal: this.portalItem?.portal,
        url: this.parsedUrl
      };
    }
    _ensureLoadBeforeSave() {
      return __async(this, null, function* () {
        yield this.load(), "beforeSave" in this && "function" == typeof this.beforeSave && (yield this.beforeSave());
      });
    }
    validateLayer(e2) {
    }
    _saveAs(e2, t2) {
      return __async(this, null, function* () {
        const o3 = __spreadValues(__spreadValues({}, V), t2);
        let i3 = S.from(e2);
        if (!i3) throw new s("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to");
        i2(i3), i3.id && (i3 = i3.clone(), i3.id = null);
        const s2 = i3.portal || C2.getDefault();
        yield this._ensureLoadBeforeSave(), i3.type = K, i3.portal = s2;
        const a2 = o2(i3, "portal-item", true), n4 = {
          layers: [this.write({}, a2)]
        };
        return yield Promise.all(a2.resources.pendingOperations ?? []), yield this._validateAgainstJSONSchema(n4, a2, o3), this.url && (i3.url = this.url), i3.title || (i3.title = this.title), O(i3, o3, P.newItem), yield s2.signIn(), yield s2.user?.addItem({
          item: i3,
          folder: o3?.folder,
          data: n4
        }), yield p2(this.resourceReferences, a2), this.portalItem = i3, i(a2), a2.portalItem = i3, i3;
      });
    }
    _save(e2) {
      return __async(this, null, function* () {
        const t2 = __spreadValues(__spreadValues({}, V), e2);
        if (!this.portalItem) throw new s("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
        if (i2(this.portalItem), this.portalItem.type !== K) throw new s("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${K}"`);
        yield this._ensureLoadBeforeSave();
        const o3 = o2(this.portalItem, "portal-item", true), i3 = {
          layers: [this.write({}, o3)]
        };
        return yield Promise.all(o3.resources.pendingOperations ?? []), yield this._validateAgainstJSONSchema(i3, o3, t2), this.url && (this.portalItem.url = this.url), this.portalItem.title || (this.portalItem.title = this.title), O(this.portalItem, t2, P.existingItem), yield n2(this.portalItem, i3, this.resourceReferences, o3), i(o3), this.portalItem;
      });
    }
    _validateAgainstJSONSchema(e2, t2, i3) {
      return __async(this, null, function* () {
        const s2 = i3?.validationOptions;
        t(t2, {
          errorName: "sceneservice:save"
        }, {
          ignoreUnsupported: s2?.ignoreUnsupported,
          supplementalUnsupportedErrors: ["scenemodification:unsupported"]
        });
        const a2 = s2?.enabled, n4 = u();
        if (a2 && n4) {
          const t3 = (yield n4()).validate(e2, i3.portalItemLayerType);
          if (!t3.length) return;
          const a3 = `Layer item did not validate:
${t3.join("\n")}`;
          if (n.getLogger(this).error(`_validateAgainstJSONSchema(): ${a3}`), "throw" === s2.failPolicy) {
            const e3 = t3.map((e4) => new s("sceneservice:schema-validation", e4));
            throw new s("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", {
              validationErrors: e3
            });
          }
        }
      });
    }
  };
  return e([y(g)], M.prototype, "id", void 0), e([y({
    type: f
  })], M.prototype, "spatialReference", void 0), e([o("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], M.prototype, "readSpatialReference", null), e([y({
    type: w
  })], M.prototype, "fullExtent", void 0), e([o("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], M.prototype, "readFullExtent", null), e([y({
    readOnly: true,
    type: v
  })], M.prototype, "heightModelInfo", void 0), e([y({
    type: Number,
    json: {
      name: "layerDefinition.minScale",
      write: true,
      origins: {
        service: {
          read: {
            source: "minScale"
          },
          write: false
        }
      }
    }
  })], M.prototype, "minScale", void 0), e([y({
    type: Number,
    json: {
      name: "layerDefinition.maxScale",
      write: true,
      origins: {
        service: {
          read: {
            source: "maxScale"
          },
          write: false
        }
      }
    }
  })], M.prototype, "maxScale", void 0), e([y({
    readOnly: true
  })], M.prototype, "version", void 0), e([o("version", ["store.version"])], M.prototype, "readVersion", null), e([y({
    type: String,
    json: {
      read: {
        source: "copyrightText"
      }
    }
  })], M.prototype, "copyright", void 0), e([y({
    type: String,
    json: {
      read: false
    }
  })], M.prototype, "sublayerTitleMode", void 0), e([y({
    type: String
  })], M.prototype, "title", void 0), e([o("portal-item", "title")], M.prototype, "readTitlePortalItem", null), e([o("service", "title", ["name"])], M.prototype, "readTitleService", null), e([y({
    type: Number,
    json: {
      origins: {
        service: {
          read: {
            source: "id"
          }
        },
        "portal-item": {
          write: {
            target: "id",
            isRequired: true,
            ignoreOrigin: true
          },
          read: false
        }
      }
    }
  })], M.prototype, "layerId", void 0), e([y(p)], M.prototype, "url", null), e([r("url")], M.prototype, "writeUrl", null), e([y()], M.prototype, "parsedUrl", null), e([y({
    readOnly: true
  })], M.prototype, "store", void 0), e([y({
    type: String,
    readOnly: true,
    json: {
      read: {
        source: "store.rootNode"
      }
    }
  })], M.prototype, "rootNode", void 0), M = e([a("esri.layers.mixins.SceneService")], M), M;
};
var U2 = -1e38;
function T(e2) {
  if (null != e2.spatialReference) return f.fromJSON(e2.spatialReference);
  const t2 = e2.store, r3 = t2.indexCRS || t2.geographicCRS, o3 = r3 && parseInt(r3.substring(r3.lastIndexOf("/") + 1, r3.length), 10);
  return null != o3 ? new f(o3) : null;
}
function O(e2, t2, r3) {
  e2.typeKeywords || (e2.typeKeywords = []);
  const o3 = t2.getTypeKeywords();
  for (const i3 of o3) e2.typeKeywords.push(i3);
  e2.typeKeywords && (e2.typeKeywords = e2.typeKeywords.filter((e3, t3, r4) => r4.indexOf(e3) === t3), r3 === P.newItem && (e2.typeKeywords = e2.typeKeywords.filter((e3) => "Hosted Service" !== e3)));
}
var P;
!function(e2) {
  e2[e2.existingItem = 0] = "existingItem", e2[e2.newItem = 1] = "newItem";
}(P || (P = {}));
var K = "Scene Service";
var V = {
  getTypeKeywords: () => [],
  portalItemLayerType: "unknown",
  validationOptions: {
    enabled: true,
    ignoreUnsupported: false,
    failPolicy: "throw"
  }
};
var C3;
!function(e2) {
  e2[e2.SAVE = 0] = "SAVE", e2[e2.SAVE_AS = 1] = "SAVE_AS";
}(C3 || (C3 = {}));

export {
  L,
  C3 as C
};
//# sourceMappingURL=chunk-3RL4VAAQ.js.map
