import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-PZKTCBLJ.js";
import {
  n as n2,
  p
} from "./chunk-VENH3UKS.js";
import {
  w
} from "./chunk-GGTDLTZW.js";
import {
  d as d2
} from "./chunk-2W7YKBRA.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  I2 as I,
  J,
  L,
  M,
  O,
  b as b2,
  je,
  v2,
  w2,
  x
} from "./chunk-I2TVVMQ6.js";
import {
  i
} from "./chunk-JKPUNUQA.js";
import {
  A,
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/layers/FeatureLayerView.js
var _ = (_2) => {
  let q = class extends _2 {
    constructor(...e2) {
      super(...e2), this._updatingRequiredFieldsPromise = null, this.dataUpdating = false, this.filter = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.addHandles([d(() => {
        const e2 = this.layer;
        return [e2 && "elevationInfo" in e2 ? e2.elevationInfo?.featureExpressionInfo : null, e2 && "displayField" in e2 ? e2.displayField : null, e2 && "timeInfo" in e2 && e2.timeInfo, e2 && "renderer" in e2 && e2.renderer, e2 && "labelingInfo" in e2 && e2.labelingInfo, e2 && "floorInfo" in e2 && e2.floorInfo, this.filter, this.featureEffect, this.timeExtent];
      }, () => this._handleRequiredFieldsChange(), A), v(() => this.view?.floors, "change", () => this._handleRequiredFieldsChange()), v(() => {
        const e2 = this.layer;
        return e2 && "sublayers" in e2 ? e2.sublayers : null;
      }, "change", () => this._handleRequiredFieldsChange())]);
    }
    get availableFields() {
      if (!this.layer) return [];
      const {
        layer: e2,
        layer: {
          fieldsIndex: t
        },
        requiredFields: r
      } = this;
      return "outFields" in e2 && e2.outFields ? I(t, [...x(t, e2.outFields), ...r]) : I(t, r);
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(e2) {
      this._override("featureEffect", e2);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(e2) {
      n.getLogger(this).error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return false;
    }
    highlight(e2) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const e2 = {
        outFields: ["*"],
        returnGeometry: true,
        outSpatialReference: this.view.spatialReference
      }, t = null != this.filter ? this.filter.createQuery(e2) : new b(e2);
      if ("floorInfo" in this.layer && this.layer.floorInfo) {
        const e3 = o(this);
        null != e3 && (t.where = t.where ? `(${t.where}) AND (${e3})` : e3);
      }
      return null != this.timeExtent && (t.timeExtent = null != t.timeExtent ? t.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), t;
    }
    createAggregateQuery() {
      const e2 = {
        outFields: ["*"],
        returnGeometry: true,
        outSpatialReference: this.view.spatialReference
      };
      return new b(e2);
    }
    queryFeatures(e2, t) {
      throw new Error("missing implementation");
    }
    queryObjectIds(e2, t) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(e2, t) {
      throw new Error("missing implementation");
    }
    queryExtent(e2, t) {
      throw new Error("missing implementation");
    }
    fetchPopupFeaturesFromGraphics(e2, t) {
      return __async(this, null, function* () {
        return this._validateFetchPopupFeatures(e2, t), this._fetchPopupFeatures(e2, t);
      });
    }
    _loadArcadeModules(e2) {
      return e2.expressionInfos?.length || Array.isArray(e2.content) && e2.content.some((e3) => "expression" === e3.type) ? i() : Promise.resolve();
    }
    _handleRequiredFieldsChange() {
      const e2 = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", e2), e2.then(() => {
        this._updatingRequiredFieldsPromise === e2 && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    _updateRequiredFields() {
      return __async(this, null, function* () {
        if (!this.layer || !this.view) return;
        const e2 = "3d" === this.view.type, {
          layer: t,
          layer: {
            fieldsIndex: i2,
            objectIdField: o2
          }
        } = this, s3 = "renderer" in t && t.renderer, n3 = "orderBy" in t && t.orderBy, l = "featureReduction" in t ? t.featureReduction : null, a2 = /* @__PURE__ */ new Set(), u = yield Promise.allSettled([s3 ? s3.collectRequiredFields(a2, i2) : null, J(a2, t), e2 && "elevationInfo" in t ? v2(a2, t) : null, null != this.filter ? M(a2, t, this.filter) : null, e2 || null == this.featureEffect ? null : M(a2, t, this.featureEffect.filter), !e2 && l ? L(a2, t, l) : null, !e2 && n3 ? O(a2, t, n3) : null]);
        if ("timeInfo" in t && t.timeInfo && this.timeExtent && b2(a2, t.fieldsIndex, [t.timeInfo.startField, t.timeInfo.endField]), "floorInfo" in t && t.floorInfo && b2(a2, t.fieldsIndex, [t.floorInfo.floorField]), "feature" === t.type && e2 && null != t.infoFor3D && (null == t.globalIdField && n.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"), b2(a2, t.fieldsIndex, [t.globalIdField])), "subtype-group" === t.type) {
          w2(a2, i2, t.subtypeField);
          const e3 = t.sublayers.map((e4) => Promise.all([e4.renderer?.collectRequiredFields(a2, i2), J(a2, e4)]));
          yield Promise.allSettled(e3);
        }
        if ("catalog-footprint" === t.type && t.parent) {
          const e3 = t.parent;
          b2(a2, i2, [e3.itemNameField, e3.itemSourceField, e3.itemTypeField, e3.maxScaleField, e3.minScaleField]);
        }
        for (const d3 of u) "rejected" === d3.status && n.getLogger(this).error(d3.reason);
        w2(a2, i2, o2), e2 && "displayField" in t && t.displayField && w2(a2, i2, t.displayField);
        const p2 = Array.from(a2).sort();
        this._set("requiredFields", p2);
      });
    }
    _validateFetchPopupFeatures(e2, r) {
      if (null != r) for (const i2 of e2) {
        const e3 = i2.origin && "layer" in i2.origin ? i2.origin.layer : i2.layer;
        if ("popupEnabled" in e3 && !e3.popupEnabled) throw new s("featurelayerview:fetchPopupFeatures", "Popups are disabled", {
          layer: e3
        });
        if (i2.isAggregate) {
          const r2 = "featureReduction" in e3 ? e3.featureReduction : null;
          if (!(r2 && "popupTemplate" in r2 && r2.popupEnabled && r2.popupTemplate)) throw new s("featurelayerview:fetchPopupFeatures", "Popups are disabled", {
            layer: e3
          });
        } else if ("popupTemplate" in e3) {
          if (!p(e3, r)) throw new s("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", {
            layer: e3
          });
        }
      }
    }
    _popupFeatureHasRequiredFields(e2, t) {
      return je(t, e2);
    }
    _fetchPopupFeatures(e2, t) {
      return __async(this, null, function* () {
        const r = new Array(e2.length), o2 = /* @__PURE__ */ new Map(), s3 = yield this._createPopupQuery(e2.map((e3) => e3.origin?.layer ?? e3.layer), t);
        for (let n3 = 0; n3 < e2.length; n3++) {
          const l = e2[n3];
          if (l.isAggregate) {
            r[n3] = l;
            continue;
          }
          const a2 = l.origin?.layer ?? l.layer;
          if (!a2 || !("popupEnabled" in a2)) continue;
          const u = x(this.layer.fieldsIndex, s3.outFields), p2 = p(a2, t);
          if (null == p2) continue;
          const d3 = yield this._loadArcadeModules(p2);
          s2(t);
          d3 && d3.arcadeUtils.hasGeometryOperations(p2) || !this._popupFeatureHasRequiredFields(l, u) ? o2.set(l.getObjectId(), {
            graphic: l,
            index: n3
          }) : r[n3] = l;
        }
        if ("stream" === this.layer.type || 0 === o2.size) return r.filter(Boolean);
        s3.objectIds = Array.from(o2.keys());
        try {
          const e3 = yield this.layer.queryFeatures(s3, t);
          for (const t2 of e3.features) {
            const {
              graphic: {
                geometry: e4,
                origin: i2
              },
              index: s4
            } = o2.get(t2.getObjectId());
            t2.geometry ||= e4, t2.origin = i2, r[s4] = t2;
          }
        } catch {
        }
        return r.filter(Boolean);
      });
    }
    _createPopupQuery(e2, t) {
      return __async(this, null, function* () {
        const r = this.layer.createQuery(), o2 = /* @__PURE__ */ new Set();
        let s3 = false;
        const n3 = e2 ?? [this.layer];
        for (const l of n3) {
          if (!("popupEnabled" in l)) continue;
          const e3 = p(l, t);
          if (null == e3) continue;
          const r2 = yield this._loadArcadeModules(e3);
          s2(t);
          const n4 = r2 && r2.arcadeUtils.hasGeometryOperations(e3);
          s3 = !("point" !== this.layer.geometryType && !n4);
          const a2 = yield n2(this.layer, e3);
          s2(t);
          for (const t2 of a2) o2.add(t2);
        }
        if (r.returnGeometry = s3, r.returnZ = s3, r.returnM = s3, r.outFields = Array.from(o2), r.outSpatialReference = this.view.spatialReference, "floorInfo" in this.layer && this.layer.floorInfo) {
          const e3 = o(this);
          null != e3 && (r.where = r.where ? `(${r.where}) AND (${e3})` : e3);
        }
        return r;
      });
    }
    canResume() {
      return !!super.canResume() && (null == this.timeExtent || !this.timeExtent.isEmpty);
    }
    getTest() {
    }
    get test() {
    }
  };
  return e([y()], q.prototype, "_updatingRequiredFieldsPromise", void 0), e([y({
    readOnly: true
  })], q.prototype, "availableFields", null), e([y({
    readOnly: true
  })], q.prototype, "dataUpdating", void 0), e([y({
    type: w
  })], q.prototype, "featureEffect", null), e([y({
    type: d2
  })], q.prototype, "filter", void 0), e([y()], q.prototype, "layer", void 0), e([y({
    type: Number
  })], q.prototype, "maximumNumberOfFeatures", null), e([y({
    readOnly: true,
    type: Boolean
  })], q.prototype, "maximumNumberOfFeaturesExceeded", null), e([y({
    readOnly: true
  })], q.prototype, "requiredFields", void 0), e([y()], q.prototype, "suspended", void 0), e([y()], q.prototype, "view", void 0), q = e([a("esri.views.layers.FeatureLayerView")], q), q;
};

export {
  _
};
//# sourceMappingURL=chunk-XKOGWI3D.js.map
