import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Y
} from "./chunk-YJSSLMB3.js";
import {
  Te,
  q
} from "./chunk-NDXKLAFE.js";
import {
  d as d4
} from "./chunk-UUQ5O7GK.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  s
} from "./chunk-ASCK5HJ5.js";
import {
  P,
  d as d2
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  d,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureRelationship/FeatureRelationshipViewModel.js
var g = 100;
var _ = class extends i(s(S)) {
  constructor(e2) {
    super(e2), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = false, this.title = null, this._cancelQuery = () => {
      const {
        _queryAbortController: e3
      } = this;
      e3 && e3.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const {
        _queryFeatureCountAbortController: e3
      } = this;
      e3 && e3.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const {
        _queryPageAbortController: e3
      } = this;
      e3 && e3.abort(), this._queryPageAbortController = null;
    }, this._queryController = () => __async(this, null, function* () {
      this._cancelQuery();
      const e3 = new AbortController();
      this._queryAbortController = e3, yield d(this._query()), this._queryAbortController === e3 && (this._queryAbortController = null);
    }), this._queryFeatureCountController = () => __async(this, null, function* () {
      this._loaded = false, this._cancelQueryFeatureCount();
      const e3 = new AbortController();
      this._queryFeatureCountAbortController = e3, yield d(this._queryFeatureCount()), this._queryFeatureCountAbortController === e3 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }), this._queryPageController = () => __async(this, null, function* () {
      const e3 = new AbortController();
      this._queryPageAbortController = e3, yield d(this._queryPage()), this._queryPageAbortController === e3 && (this._queryPageAbortController = null);
    }), this._queryDebounced = k(this._queryController, g), this._queryFeatureCountDebounced = k(this._queryFeatureCountController, g), this._queryPageDebounced = k(this._queryPageController, g), this._query = () => __async(this, null, function* () {
      const {
        _queryAbortController: e3,
        relatedFeatures: t
      } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t.destroyAll(), this.destroyed || t.addMany(this._sliceFeatures(yield this._queryRelatedFeatures({
        signal: e3?.signal
      }))));
    }), this.addHandles([d2(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount], () => this._queryDebounced(), P), d2(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), d2(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e2) {
    const {
      featuresPerPage: t,
      featureCount: r
    } = this, o = 1, l = Math.ceil(r / t) || 1;
    this._set("featurePage", Math.min(Math.max(e2, o), l));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const {
      orderByFields: e2,
      relatedLayer: t
    } = this;
    return e2 && t?.loaded ? e2.map((e3) => {
      const r = e3.clone();
      return r.field = q(e3.field, t), r;
    }) : e2 ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && null != this.relationshipId && "number" == typeof this.objectId;
  }
  get canQuery() {
    const e2 = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && null != this.relationshipId && null != this.objectId && e2?.supportsCount && e2?.supportsPagination);
  }
  get itemDescriptionFieldName() {
    return this.orderByFieldsFixedCasing[0]?.field || null;
  }
  set displayCount(e2) {
    const t = 0, r = 10;
    this._set("displayCount", Math.min(Math.max(e2, t), r));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new V();
  }
  get relatedLayer() {
    const {
      layer: e2,
      map: t,
      relationship: r
    } = this;
    return e2?.loaded && t && r ? Te(t, e2, r) ?? null : null;
  }
  get relationship() {
    const {
      relationshipId: e2,
      layer: t
    } = this;
    return null != e2 ? t?.relationships?.find(({
      id: t2
    }) => t2 === e2) ?? null : null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new V();
  }
  get state() {
    const {
      _queryAbortController: e2,
      _queryFeatureCountAbortController: t,
      _queryPageAbortController: r,
      canQuery: o,
      _loaded: l,
      canLoad: s2
    } = this;
    return t || s2 && !l ? "loading" : e2 || r ? "querying" : o ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e2) {
    return this.relatedFeatures.find((t) => t.getObjectId() === e2);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.destroyAll();
  }
  _queryFeatureCount() {
    return __async(this, null, function* () {
      const {
        layer: e2,
        relatedLayer: t,
        relationshipId: r,
        objectId: o,
        _queryFeatureCountAbortController: l,
        canQuery: s2,
        supportsCacheHint: a2
      } = this;
      if (yield e2?.load(), yield t?.load(), !s2 || !e2 || !t || null == o) return void this._set("featureCount", 0);
      const i2 = t.createQuery(), {
        historicMoment: n,
        gdbVersion: u
      } = e2, d5 = new d4({
        cacheHint: a2,
        gdbVersion: u,
        historicMoment: n,
        relationshipId: r,
        returnGeometry: false,
        objectIds: [o],
        where: i2.where ?? void 0
      }), h = yield e2.queryRelatedFeaturesCount(d5, {
        signal: l?.signal
      });
      this._set("featureCount", h[o] || 0);
    });
  }
  _sliceFeatures(e2) {
    const {
      showAllEnabled: t,
      displayCount: r
    } = this;
    return t ? e2 : r ? e2.slice(0, r) : [];
  }
  _queryPage() {
    return __async(this, null, function* () {
      const {
        relatedFeatures: e2,
        featurePage: t,
        showAllEnabled: r,
        _queryPageAbortController: o,
        featureCount: l
      } = this;
      !r || t < 2 || !l || e2.addMany(yield this._queryRelatedFeatures({
        signal: o?.signal
      }));
    });
  }
  _queryRelatedFeatures(e2) {
    return __async(this, null, function* () {
      const {
        orderByFieldsFixedCasing: t,
        showAllEnabled: r,
        featuresPerPage: l,
        displayCount: s2,
        layer: a2,
        relationshipId: i2,
        featurePage: n,
        featureCount: u,
        relatedLayer: d5,
        supportsCacheHint: h
      } = this, {
        canQuery: y2,
        objectId: c
      } = this;
      if (!y2 || !a2 || !d5 || null == c) return [];
      const C = r ? ((n - 1) * l + u) % u : 0, g2 = r ? l : s2, _2 = d5.objectIdField, F2 = [...t.map((e3) => e3.field), ...Y(d5), _2].filter(O), m = t.map((e3) => `${e3.field} ${e3.order}`), f = d5.createQuery(), {
        historicMoment: q2,
        gdbVersion: A
      } = a2, P2 = new d4({
        orderByFields: m,
        start: C,
        num: g2,
        outFields: F2,
        cacheHint: h,
        historicMoment: q2,
        gdbVersion: A,
        relationshipId: i2,
        returnGeometry: false,
        objectIds: [c],
        where: f.where ?? void 0
      }), w = yield a2.queryRelatedFeatures(P2, {
        signal: e2?.signal
      }), j = w[c]?.features || [];
      return j.forEach((e3) => {
        e3.sourceLayer = d5, e3.layer = d5;
      }), j;
    });
  }
};
e([y()], _.prototype, "_loaded", void 0), e([y()], _.prototype, "_queryAbortController", void 0), e([y()], _.prototype, "_queryPageAbortController", void 0), e([y()], _.prototype, "_queryFeatureCountAbortController", void 0), e([y({
  value: 1
})], _.prototype, "featurePage", null), e([y()], _.prototype, "featuresPerPage", void 0), e([y({
  readOnly: true
})], _.prototype, "orderByFieldsFixedCasing", null), e([y({
  readOnly: true
})], _.prototype, "supportsCacheHint", null), e([y({
  readOnly: true
})], _.prototype, "canLoad", null), e([y({
  readOnly: true
})], _.prototype, "canQuery", null), e([y()], _.prototype, "description", void 0), e([y({
  readOnly: true
})], _.prototype, "itemDescriptionFieldName", null), e([y({
  value: 3
})], _.prototype, "displayCount", null), e([y({
  type: d3
})], _.prototype, "graphic", void 0), e([y()], _.prototype, "layer", void 0), e([y()], _.prototype, "map", void 0), e([y({
  readOnly: true
})], _.prototype, "objectId", null), e([y({
  readOnly: true
})], _.prototype, "objectIdField", null), e([y()], _.prototype, "orderByFields", void 0), e([y({
  readOnly: true
})], _.prototype, "relatedFeatures", null), e([y({
  readOnly: true
})], _.prototype, "relatedLayer", null), e([y({
  readOnly: true
})], _.prototype, "relationship", null), e([y()], _.prototype, "featureCount", void 0), e([y({
  readOnly: true
})], _.prototype, "relatedFeatureViewModels", null), e([y()], _.prototype, "relationshipId", void 0), e([y()], _.prototype, "showAllEnabled", void 0), e([y()], _.prototype, "state", null), e([y()], _.prototype, "title", void 0), _ = e([a("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], _);
var F = _;

export {
  F
};
//# sourceMappingURL=chunk-BGWWZY5C.js.map
