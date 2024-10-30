import {
  a as a2
} from "./chunk-MI7B6AEI.js";
import {
  e as e3
} from "./chunk-DKRGLYVY.js";
import {
  F
} from "./chunk-IWPREEVF.js";
import {
  x as x2
} from "./chunk-DME7BDTC.js";
import {
  e as e5
} from "./chunk-HR6RJVBL.js";
import {
  e as e6,
  t
} from "./chunk-7PY7QIZQ.js";
import {
  o as o2
} from "./chunk-3JEG7JG5.js";
import {
  I as I2,
  y as y2
} from "./chunk-IQRHHD7Z.js";
import {
  C,
  D,
  E,
  Ie,
  J,
  L,
  P as P2,
  R,
  Y,
  ae,
  be,
  ce,
  de,
  ie,
  ne,
  oe,
  q,
  re,
  se,
  ue,
  v as v3,
  x,
  z
} from "./chunk-VTRNFNJR.js";
import {
  e as e4
} from "./chunk-HBMA4SRU.js";
import {
  s as s6
} from "./chunk-BB54E5CP.js";
import {
  Ze
} from "./chunk-B7GRWOZI.js";
import {
  d as d3
} from "./chunk-YPU2P4KO.js";
import {
  b as b2,
  m
} from "./chunk-TRSGUVSM.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  I,
  c,
  c2,
  i2 as i,
  i4 as i2,
  n as n3,
  p
} from "./chunk-4KWLMXIA.js";
import {
  s as s5
} from "./chunk-HT2T6PUB.js";
import {
  pe
} from "./chunk-DTUSTSEJ.js";
import {
  r as r2
} from "./chunk-VDB6Y4TZ.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n as n2
} from "./chunk-K7TO5IIO.js";
import {
  g
} from "./chunk-CQDYITZC.js";
import {
  s as s4
} from "./chunk-YVULORT6.js";
import {
  o
} from "./chunk-CVB43GGP.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  s as s3
} from "./chunk-NKCPFCP3.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  P,
  d,
  v as v2
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  A,
  b,
  h,
  v
} from "./chunk-HJY2YILU.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2
} from "./chunk-WYIDUUN2.js";
import {
  O,
  s
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureAttachments/FeatureAttachmentsViewModel.js
var s7 = class extends y2 {
  constructor(t3) {
    super(t3), this.description = null, this.title = null;
  }
};
e([y()], s7.prototype, "description", void 0), e([y()], s7.prototype, "title", void 0), s7 = e([a("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], s7);
var c3 = s7;

// ../../../node_modules/@arcgis/core/widgets/Feature/support/FeatureElementInfo.js
var n4 = "esri-feature-element-info";
var p2 = {
  base: n4,
  title: `${n4}__title`,
  description: `${n4}__description`
};
var c4 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return n2("div", {
      class: p2.base
    }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const {
      title: e9
    } = this;
    return e9 ? n2(e5, {
      class: p2.title,
      innerHTML: e9,
      level: this.headingLevel
    }) : null;
  }
  _renderDescription() {
    const {
      description: e9
    } = this;
    return e9 ? n2("div", {
      class: p2.description,
      innerHTML: e9,
      key: "description"
    }) : null;
  }
};
e([y()], c4.prototype, "description", void 0), e([y()], c4.prototype, "headingLevel", void 0), e([y()], c4.prototype, "title", void 0), c4 = e([a("esri.widgets.Feature.support.FeatureElementInfo")], c4);
var l = c4;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureAttachments.js
var d4 = {
  base: "esri-feature-attachments"
};
var h2 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this._featureElementInfo = null, this.attachmentsWidget = new I2(), this.headingLevel = 2, this.viewModel = new c3();
  }
  initialize() {
    this._featureElementInfo = new l(), this.addHandles([d(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), P), d(() => this.viewModel, (e9) => this.attachmentsWidget.viewModel = e9, P)]);
  }
  destroy() {
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), this._featureElementInfo?.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e9) {
    this.viewModel.description = e9;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(e9) {
    this.attachmentsWidget.displayType = e9;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e9) {
    this.viewModel.graphic = e9;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e9) {
    this.viewModel.title = e9;
  }
  render() {
    const {
      attachmentsWidget: e9
    } = this;
    return n2("div", {
      class: d4.base
    }, this._featureElementInfo?.render(), e9?.render());
  }
  _setupFeatureElementInfo() {
    const {
      description: e9,
      title: t3,
      headingLevel: i3
    } = this;
    this._featureElementInfo?.set({
      description: e9,
      title: t3,
      headingLevel: i3
    });
  }
};
e([y({
  readOnly: true
})], h2.prototype, "attachmentsWidget", void 0), e([y()], h2.prototype, "description", null), e([y()], h2.prototype, "displayType", null), e([y()], h2.prototype, "graphic", null), e([y()], h2.prototype, "headingLevel", void 0), e([y()], h2.prototype, "title", null), e([y({
  type: c3
})], h2.prototype, "viewModel", void 0), h2 = e([a("esri.widgets.Feature.FeatureAttachments")], h2);
var c5 = h2;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureContent/FeatureContentViewModel.js
var c6 = class extends S {
  constructor(t3) {
    super(t3), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(d(() => this.creator, (t4) => {
      this._destroyContent(), this._createContent(t4);
    }, P));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const {
      created: t3,
      graphic: e9,
      destroyer: r3
    } = this;
    t3 && e9 && (E({
      type: "content",
      value: r3,
      event: {
        graphic: e9
      }
    }), this._set("created", null));
  }
  _createContent(t3) {
    return __async(this, null, function* () {
      const e9 = this.graphic;
      if (!e9 || !t3) return;
      const r3 = E({
        type: "content",
        value: t3,
        event: {
          graphic: e9
        }
      });
      this._loadingPromise = r3, this.notifyChange("state");
      const o3 = yield r3;
      r3 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o3));
    });
  }
};
e([y({
  readOnly: true
})], c6.prototype, "created", void 0), e([y()], c6.prototype, "creator", void 0), e([y()], c6.prototype, "destroyer", void 0), e([y({
  type: d2
})], c6.prototype, "graphic", void 0), e([y({
  readOnly: true
})], c6.prototype, "state", null), c6 = e([a("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], c6);
var p3 = c6;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureContent.js
var n5 = "esri-feature-content";
var c7 = {
  base: n5,
  loaderContainer: `${n5}__loader-container`,
  loader: `${n5}__loader`
};
var l2 = class extends B {
  constructor(e9, r3) {
    super(e9, r3), this.viewModel = null, this._addTargetToAnchors = (e10) => {
      Array.from(e10.querySelectorAll("a")).forEach((e11) => {
        v3(e11.href) && !e11.hasAttribute("target") && e11.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    return this.viewModel?.creator;
  }
  set creator(e9) {
    this.viewModel && (this.viewModel.creator = e9);
  }
  get graphic() {
    return this.viewModel?.graphic;
  }
  set graphic(e9) {
    this.viewModel && (this.viewModel.graphic = e9);
  }
  render() {
    const e9 = this.viewModel?.state;
    return n2("div", {
      class: c7.base
    }, "loading" === e9 ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return n2("div", {
      class: c7.loaderContainer,
      key: "loader"
    }, n2("div", {
      class: c7.loader
    }));
  }
  _renderCreated() {
    const e9 = this.viewModel?.created;
    return e9 ? e9 instanceof HTMLElement ? n2("div", {
      afterCreate: this._attachToNode,
      bind: e9,
      key: e9
    }) : e6(e9) ? n2("div", {
      key: e9
    }, !e9.destroyed && e9.render()) : n2("div", {
      afterCreate: this._addTargetToAnchors,
      innerHTML: e9,
      key: e9
    }) : null;
  }
  _attachToNode(e9) {
    const r3 = this;
    e9.appendChild(r3);
  }
};
e([y()], l2.prototype, "creator", null), e([y()], l2.prototype, "graphic", null), e([y({
  type: p3
})], l2.prototype, "viewModel", void 0), l2 = e([a("esri.widgets.Feature.FeatureContent")], l2);
var p4 = l2;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureFields/FeatureFieldsViewModel.js
var l3 = class extends S {
  constructor(o3) {
    super(o3), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const {
      expressionInfos: o3,
      fieldInfos: e9
    } = this, t3 = [];
    return e9?.forEach((e10) => {
      if (!(!e10.hasOwnProperty("visible") || e10.visible)) return;
      const s9 = e10.clone();
      s9.label = C(s9, o3), t3.push(s9);
    }), t3;
  }
};
e([y()], l3.prototype, "attributes", void 0), e([y({
  type: [i2]
})], l3.prototype, "expressionInfos", void 0), e([y()], l3.prototype, "description", void 0), e([y({
  type: [n3]
})], l3.prototype, "fieldInfos", void 0), e([y({
  readOnly: true
})], l3.prototype, "formattedFieldInfos", null), e([y()], l3.prototype, "title", void 0), l3 = e([a("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], l3);
var n6 = l3;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureFields.js
var u2 = "esri-feature-fields";
var m2 = {
  base: u2,
  fieldHeader: `${u2}__field-header`,
  fieldData: `${u2}__field-data`,
  fieldDataDate: `${u2}__field-data--date`
};
var c8 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this._featureElementInfo = null, this.viewModel = new n6(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new l(), this.addHandles(d(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), P));
  }
  destroy() {
    this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e9) {
    this.viewModel.attributes = e9;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e9) {
    this.viewModel.description = e9;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e9) {
    this.viewModel.expressionInfos = e9;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e9) {
    this.viewModel.fieldInfos = e9;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e9) {
    this.viewModel.title = e9;
  }
  render() {
    return n2("div", {
      class: m2.base
    }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(e9, t3) {
    const {
      attributes: s9
    } = this.viewModel, i3 = e9.fieldName || "", r3 = e9.label || i3, o3 = s9 ? null == s9[i3] ? "" : s9[i3] : "", l5 = !!e9.format?.dateFormat, n9 = "number" == typeof o3 && !l5 ? this._forceLTR(o3) : a2(this.messagesURIUtils, o3), d7 = {
      [m2.fieldDataDate]: l5
    };
    return n2("tr", {
      key: `fields-element-info-row-${i3}-${t3}`
    }, n2("th", {
      class: m2.fieldHeader,
      innerHTML: r3,
      key: `fields-element-info-row-header-${i3}-${t3}`
    }), n2("td", {
      class: this.classes(m2.fieldData, d7),
      innerHTML: n9,
      key: `fields-element-info-row-data-${i3}-${t3}`
    }));
  }
  _renderFields() {
    const {
      formattedFieldInfos: e9
    } = this.viewModel;
    return e9?.length ? n2("table", {
      class: e4.table,
      summary: this.messages.fieldsSummary
    }, n2("tbody", null, e9.map((e10, t3) => this._renderFieldInfo(e10, t3)))) : null;
  }
  _setupFeatureElementInfo() {
    const {
      description: e9,
      title: t3
    } = this;
    this._featureElementInfo?.set({
      description: e9,
      title: t3
    });
  }
  _forceLTR(e9) {
    return `&lrm;${e9}`;
  }
};
e([y()], c8.prototype, "attributes", null), e([y()], c8.prototype, "description", null), e([y()], c8.prototype, "expressionInfos", null), e([y()], c8.prototype, "fieldInfos", null), e([y()], c8.prototype, "title", null), e([y({
  type: n6,
  nonNullable: true
})], c8.prototype, "viewModel", void 0), e([y(), e2("esri/widgets/Feature/t9n/Feature")], c8.prototype, "messages", void 0), e([y(), e2("esri/widgets/support/t9n/uriUtils")], c8.prototype, "messagesURIUtils", void 0), c8 = e([a("esri.widgets.Feature.FeatureFields")], c8);
var h3 = c8;

// ../../../node_modules/@arcgis/core/widgets/Feature/support/relatedFeatureUtils.js
var f = "esri.widgets.Feature.support.relatedFeatureUtils";
var m3 = () => n.getLogger(f);
var d5 = /* @__PURE__ */ new Map();
function y3(e9) {
  if (!de(e9)) return null;
  const [t3, r3] = e9.split("/").slice(1);
  return {
    layerId: t3,
    fieldName: r3
  };
}
function j(e9, t3) {
  if (!t3.relationships) return null;
  let r3 = null;
  const {
    relationships: o3
  } = t3;
  return o3.some((t4) => t4.id === parseInt(e9, 10) && (r3 = t4, true)), r3;
}
function g2({
  originRelationship: e9,
  relationships: t3,
  layerId: r3
}) {
  return t3.find(({
    relatedTableId: t4,
    id: o3
  }) => `${t4}` === r3 && o3 === e9?.id) ?? null;
}
function h4(e9, t3) {
  const r3 = t3.toLowerCase();
  for (const o3 in e9) if (o3.toLowerCase() === r3) return e9[o3];
  return null;
}
function F2(e9, t3) {
  const r3 = j(e9, t3);
  if (!r3) return;
  return {
    url: `${t3.url}/${r3.relatedTableId}`,
    sourceSpatialReference: t3.spatialReference,
    relation: r3,
    relatedFields: [],
    outStatistics: []
  };
}
function I3(e9, t3) {
  if (!t3) return;
  if (!e9) return;
  const {
    features: r3,
    statsFeatures: o3
  } = e9, i3 = r3?.value;
  t3.relatedFeatures = i3 ? i3.features : [];
  const s9 = o3?.value;
  t3.relatedStatsFeatures = s9 ? s9.features : [];
}
function S2(e9, t3, r3, o3) {
  const i3 = new d3();
  return i3.outFields = ["*"], i3.relationshipId = "number" == typeof t3.id ? t3.id : parseInt(t3.id, 10), i3.objectIds = [e9.attributes[r3.objectIdField]], i3.gdbVersion = r3.gdbVersion ?? null, i3.historicMoment = r3.historicMoment ?? null, r3.queryRelatedFeatures?.(i3, o3) ?? Promise.resolve({});
}
function b3(e9, t3, r3) {
  let o3 = 0;
  const i3 = [];
  for (; o3 < t3.length; ) i3.push(`${e9} IN (${t3.slice(o3, r3 + o3)})`), o3 += r3;
  return i3.join(" OR ");
}
function w(e9) {
  return e9 ? s(e9) : void 0;
}
function R2(e9) {
  return e9 ? s(e9, (e10, t3) => JSON.stringify(e10.toJSON()) === JSON.stringify(t3.toJSON())) : void 0;
}
function U2(e9, t3, r3, o3) {
  return __async(this, null, function* () {
    const i3 = r3.layerId.toString(), {
      layerInfo: u5,
      relation: p6,
      relatedFields: c10,
      outStatistics: f4,
      url: m6,
      sourceSpatialReference: d7
    } = t3, y7 = w(c10), j4 = R2(f4);
    if (!u5 || !p6) return null;
    const F5 = g2({
      originRelationship: p6,
      relationships: u5.relationships,
      layerId: i3
    });
    if (F5?.relationshipTableId && F5.keyFieldInRelationshipTable) {
      const t4 = (yield S2(e9, F5, r3, o3))[e9.attributes[r3.objectIdField]];
      if (!t4) return null;
      const i4 = t4.features.map((e10) => e10.attributes[u5.objectIdField]);
      if (j4?.length && u5.supportsStatistics) {
        const e10 = new b2();
        e10.where = b3(u5.objectIdField, i4, 1e3), e10.outFields = y7, e10.outStatistics = j4, e10.sourceSpatialReference = d7;
        const r4 = {
          features: Promise.resolve(t4),
          statsFeatures: s6(m6, e10)
        };
        return v(r4);
      }
    }
    const I7 = F5?.keyField;
    if (I7) {
      const t4 = pe(v4(u5.fields, I7)), i4 = h4(e9.attributes, p6.keyField), c11 = t4 ? `${I7}=${i4}` : `${I7}='${i4}'`, f5 = r3.historicMoment, g6 = r3.gdbVersion, F6 = s6(m6, new b2({
        where: c11,
        outFields: y7,
        sourceSpatialReference: d7,
        historicMoment: f5,
        gdbVersion: g6
      }), o3), S3 = !!j4?.length && u5.supportsStatistics ? s6(m6, new b2({
        where: c11,
        outFields: y7,
        outStatistics: j4,
        sourceSpatialReference: d7
      }), o3) : null, b7 = {
        features: F6
      };
      return S3 && (b7.statsFeatures = S3), v(b7);
    }
    return null;
  });
}
function $(t3, r3) {
  return U(t3, {
    query: {
      f: "json"
    },
    signal: r3?.signal
  });
}
function N({
  relatedInfos: e9,
  layer: t3
}, o3) {
  const n9 = {};
  return e9.forEach((e10, o4) => {
    const {
      relation: i3
    } = e10;
    if (!i3) {
      const e11 = new s2("relation-required", "A relation is required on a layer to retrieve related records.");
      throw m3().error(e11), e11;
    }
    const {
      relatedTableId: s9
    } = i3;
    if ("number" != typeof s9) {
      const e11 = new s2("A related table ID is required on a layer to retrieve related records.");
      throw m3().error(e11), e11;
    }
    const l5 = `${t3.url}/${s9}`, a3 = d5.get(l5), u5 = a3 ?? $(l5);
    a3 || d5.set(l5, u5), n9[o4] = u5;
  }), h(v(n9), o3);
}
function T({
  graphic: e9,
  relatedInfos: t3,
  layer: r3
}, o3) {
  const i3 = {};
  return t3.forEach((t4, s9) => {
    t4.layerInfo && (i3[s9] = U2(e9, t4, r3, o3));
  }), v(i3);
}
function q2({
  relatedInfo: e9,
  fieldName: t3,
  fieldInfo: r3
}) {
  if (e9.relatedFields?.push(t3), r3.statisticType) {
    const o3 = new m({
      statisticType: r3.statisticType,
      onStatisticField: t3,
      outStatisticFieldName: t3
    });
    e9.outStatistics?.push(o3);
  }
}
function v4(e9, t3) {
  if (null != e9) {
    t3 = t3.toLowerCase();
    for (const r3 of e9) if (r3 && r3.name.toLowerCase() === t3) return r3;
  }
  return null;
}

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureMedia/FeatureMediaViewModel.js
var I4 = {
  chartAnimation: true
};
var v5 = class extends S {
  constructor(t3) {
    super(t3), this.abilities = __spreadValues({}, I4), this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = false, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t3) {
    return __spreadValues(__spreadValues({}, I4), t3);
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(t3) {
    this._setContentElementMedia(t3);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t3) {
    const {
      formattedMediaInfoCount: e9
    } = this, i3 = (t3 + e9) % e9;
    this.activeMediaInfoIndex = i3;
  }
  _pageContentElementMedia(t3) {
    const {
      activeMediaInfoIndex: e9
    } = this, i3 = e9 + t3;
    this._setContentElementMedia(i3);
  }
  _formatMediaInfos() {
    const {
      mediaInfos: t3,
      layer: e9
    } = this, o3 = this.attributes ?? {}, r3 = this.formattedAttributes ?? {}, a3 = this.expressionAttributes ?? {}, s9 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return t3?.map((t4) => {
      const i3 = t4?.clone();
      if (!i3) return null;
      if (i3.title = D({
        attributes: o3,
        fieldInfoMap: s9,
        globalAttributes: r3,
        expressionAttributes: a3,
        layer: e9,
        text: i3.title
      }), i3.caption = D({
        attributes: o3,
        fieldInfoMap: s9,
        globalAttributes: r3,
        expressionAttributes: a3,
        layer: e9,
        text: i3.caption
      }), i3.altText = D({
        attributes: o3,
        fieldInfoMap: s9,
        globalAttributes: r3,
        expressionAttributes: a3,
        layer: e9,
        text: i3.altText
      }), "image" === i3.type) {
        if (!i3.value) return;
        return this._setImageValue({
          value: i3.value,
          formattedAttributes: r3,
          layer: e9
        }), i3.value.sourceURL ? i3 : void 0;
      }
      if ("pie-chart" === i3.type || "line-chart" === i3.type || "column-chart" === i3.type || "bar-chart" === i3.type) {
        if (!i3.value) return;
        return this._setChartValue({
          value: i3.value,
          chartType: i3.type,
          attributes: o3,
          formattedAttributes: r3,
          layer: e9,
          expressionAttributes: a3
        }), i3;
      }
      return null;
    }).filter(O) ?? [];
  }
  _setImageValue(t3) {
    const e9 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), {
      value: i3,
      formattedAttributes: o3,
      layer: r3
    } = t3, {
      linkURL: a3,
      sourceURL: s9
    } = i3;
    if (s9) {
      const t4 = P2(s9, r3);
      i3.sourceURL = z({
        formattedAttributes: o3,
        template: t4,
        fieldInfoMap: e9
      });
    }
    if (a3) {
      const t4 = P2(a3, r3);
      i3.linkURL = z({
        formattedAttributes: o3,
        template: t4,
        fieldInfoMap: e9
      });
    }
  }
  _setChartValue(t3) {
    const {
      value: e9,
      attributes: i3,
      formattedAttributes: o3,
      chartType: r3,
      layer: a3,
      expressionAttributes: s9
    } = t3, {
      popupTemplate: l5,
      relatedInfos: n9
    } = this, {
      fields: p6,
      normalizeField: d7
    } = e9, m6 = a3;
    e9.fields = R(p6, m6), d7 && (e9.normalizeField = q(d7, m6));
    if (!p6.some((t4) => !!(null != o3[t4] || de(t4) && n9?.size))) return;
    const h6 = l5?.fieldInfos ?? [];
    p6.forEach((t4, a4) => {
      const l6 = e9.colors?.[a4];
      if (de(t4)) return void (e9.series = [...e9.series, ...this._getRelatedChartInfos({
        fieldInfos: h6,
        fieldName: t4,
        formattedAttributes: o3,
        chartType: r3,
        value: e9,
        color: l6
      })]);
      const n10 = this._getChartOption({
        value: e9,
        attributes: i3,
        chartType: r3,
        formattedAttributes: o3,
        expressionAttributes: s9,
        fieldName: t4,
        fieldInfos: h6,
        color: l6
      });
      e9.series.push(n10);
    });
  }
  _getRelatedChartInfos(t3) {
    const {
      fieldInfos: e9,
      fieldName: i3,
      formattedAttributes: o3,
      chartType: r3,
      value: a3,
      color: s9
    } = t3, l5 = [], n9 = y3(i3), p6 = n9 && this.relatedInfos?.get(n9.layerId.toString());
    if (!p6) return l5;
    const {
      relatedFeatures: d7,
      relation: u5
    } = p6;
    if (!u5 || !d7) return l5;
    const {
      cardinality: f4
    } = u5;
    d7.forEach((t4) => {
      const {
        attributes: p7
      } = t4;
      p7 && Object.keys(p7).forEach((t5) => {
        t5 === n9.fieldName && l5.push(this._getChartOption({
          value: a3,
          attributes: p7,
          formattedAttributes: o3,
          fieldName: i3,
          chartType: r3,
          relatedFieldName: t5,
          hasMultipleRelatedFeatures: d7?.length > 1,
          fieldInfos: e9,
          color: s9
        }));
      });
    });
    return "one-to-many" === f4 || "many-to-many" === f4 ? l5 : [l5[0]];
  }
  _getTooltip({
    label: t3,
    value: e9,
    chartType: i3
  }) {
    return "pie-chart" === i3 ? `${t3}` : `${t3}: ${e9}`;
  }
  _getChartOption(t3) {
    const {
      value: e9,
      attributes: i3,
      formattedAttributes: o3,
      expressionAttributes: r3,
      fieldName: a3,
      relatedFieldName: n9,
      fieldInfos: p6,
      chartType: d7,
      hasMultipleRelatedFeatures: u5,
      color: I7
    } = t3, v7 = this.layer, M3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), {
      normalizeField: A3,
      tooltipField: g6
    } = e9, x4 = A3 ? de(A3) ? i3[y3(A3).fieldName] : i3[A3] : null, _2 = x(a3) && r3 && void 0 !== r3[a3] ? r3[a3] : n9 && void 0 !== i3[n9] ? i3[n9] : void 0 !== i3[a3] ? i3[a3] : o3[a3], C5 = new p({
      fieldName: a3,
      color: I7,
      value: void 0 === _2 ? null : _2 && x4 ? _2 / x4 : _2
    });
    if (de(a3)) {
      const t4 = M3.get(a3.toLowerCase()), e10 = g6 && M3.get(g6.toLowerCase()), r4 = t4?.fieldName ?? a3, s9 = u5 && g6 ? y3(g6).fieldName : e10?.fieldName ?? g6, l5 = u5 && s9 ? i3[s9] : o3[s9] ?? t4?.label ?? t4?.fieldName ?? n9, p7 = u5 && n9 ? i3[n9] : o3[r4];
      return C5.tooltip = this._getTooltip({
        label: l5,
        value: p7,
        chartType: d7
      }), C5;
    }
    const T3 = Y(p6, a3), N2 = q(a3, v7), F5 = g6 && void 0 !== o3[g6] ? o3[g6] : C(T3 || new n3({
      fieldName: N2
    }), this.popupTemplate?.expressionInfos), j4 = o3[N2];
    return C5.tooltip = this._getTooltip({
      label: F5,
      value: j4,
      chartType: d7
    }), C5;
  }
};
e([y()], v5.prototype, "abilities", void 0), e([s3("abilities")], v5.prototype, "castAbilities", null), e([y()], v5.prototype, "activeMediaInfoIndex", void 0), e([y({
  readOnly: true
})], v5.prototype, "activeMediaInfo", null), e([y()], v5.prototype, "attributes", void 0), e([y()], v5.prototype, "description", void 0), e([y()], v5.prototype, "fieldInfoMap", void 0), e([y()], v5.prototype, "formattedAttributes", void 0), e([y()], v5.prototype, "expressionAttributes", void 0), e([y({
  readOnly: true
})], v5.prototype, "formattedMediaInfos", null), e([y()], v5.prototype, "isAggregate", void 0), e([y()], v5.prototype, "layer", void 0), e([y({
  readOnly: true
})], v5.prototype, "formattedMediaInfoCount", null), e([y()], v5.prototype, "mediaInfos", void 0), e([y()], v5.prototype, "popupTemplate", void 0), e([y()], v5.prototype, "relatedInfos", void 0), e([y()], v5.prototype, "title", void 0), v5 = e([a("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v5);
var M = v5;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureMedia.js
var v6 = "esri-feature-media";
var g3 = {
  base: v6,
  mediaContainer: `${v6}__container`,
  mediaItemContainer: `${v6}__item-container`,
  mediaItem: `${v6}__item`,
  mediaItemText: `${v6}__item-text`,
  mediaItemTitle: `${v6}__item-title`,
  mediaItemCaption: `${v6}__item-caption`,
  mediaNavigation: `${v6}__item-navigation`,
  mediaPagination: `${v6}__pagination`,
  mediaPaginationText: `${v6}__pagination-text`,
  mediaPrevious: `${v6}__previous`,
  mediaPreviousIconLTR: `${v6}__previous-icon`,
  mediaPreviousIconRTL: `${v6}__previous-icon--rtl`,
  mediaNext: `${v6}__next`,
  mediaNextIconLTR: `${v6}__next-icon`,
  mediaNextIconRTL: `${v6}__next-icon--rtl`,
  mediaChart: `${v6}__chart`,
  mediaPaginationButton: `${v6}__pagination-button`,
  mediaPaginationIcon: `${v6}__pagination-icon`,
  mediaChartRendered: `${v6}__chart--rendered`
};
var M2 = 15;
var w2 = "category";
var I5 = "value";
var A2 = "rgba(50, 50, 50, 1)";
var C2 = 250;
var y4 = 500;
var x3 = 200;
var T2 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new M(), this.messages = null, this._disposeChart = (e10) => {
      this._chartRootMap.get(e10)?.dispose(), this._chartRootMap.delete(e10);
    }, this._createChart = (e10) => __async(this, null, function* () {
      const {
        destroyed: t4,
        viewModel: i3
      } = this;
      if (t4 || !i3 || !e10) return;
      const {
        createRoot: r3
      } = yield import("./chartUtilsAm5-WB2Y5DC3.js"), a3 = yield r3(e10);
      this._chartRootMap.set(e10, a3), this._renderChart({
        mediaInfo: i3.activeMediaInfo,
        root: a3
      });
    });
  }
  initialize() {
    this._featureElementInfo = new l(), this.addHandles([d(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), P), d(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), P)]);
  }
  loadDependencies() {
    return r({
      icon: () => import("./calcite-icon-FE3MORNT.js")
    });
  }
  destroy() {
    this._clearMediaRefreshTimer(), this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e9) {
    this.viewModel.attributes = e9;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e9) {
    this.viewModel.activeMediaInfoIndex = e9;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e9) {
    this.viewModel.description = e9;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e9) {
    this.viewModel.fieldInfoMap = e9;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e9) {
    this.viewModel.layer = e9;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e9) {
    this.viewModel.mediaInfos = e9;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e9) {
    this.viewModel.popupTemplate = e9;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e9) {
    this.viewModel.relatedInfos = e9;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e9) {
    this.viewModel.title = e9;
  }
  render() {
    return n2("div", {
      bind: this,
      class: g3.base,
      onkeyup: this._handleMediaKeyup
    }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const {
      formattedMediaInfoCount: e9,
      activeMediaInfoIndex: t3
    } = this.viewModel, i3 = this._renderMediaText();
    return e9 ? n2("div", {
      class: g3.mediaContainer,
      key: "media-element-container"
    }, this._renderMediaInfo(), n2("div", {
      class: g3.mediaNavigation
    }, i3, e9 > 1 ? n2("div", {
      class: g3.mediaPagination
    }, this._renderMediaPageButton("previous"), n2("span", {
      class: g3.mediaPaginationText
    }, s4(this.messages.pageText, {
      index: t3 + 1,
      total: e9
    })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const {
      activeMediaInfo: e9
    } = this.viewModel;
    if (!e9) return null;
    const t3 = e9 && e9.title ? n2("div", {
      class: g3.mediaItemTitle,
      innerHTML: e9.title,
      key: "media-title"
    }) : null, i3 = e9 && e9.caption ? n2("div", {
      class: g3.mediaItemCaption,
      innerHTML: e9.caption,
      key: "media-caption"
    }) : null;
    return t3 || i3 ? n2("div", {
      class: g3.mediaItemText,
      key: "media-text"
    }, t3, i3) : null;
  }
  _renderImageMediaInfo(e9) {
    if (!e9.value) return null;
    const {
      _refreshIntervalInfo: t3
    } = this, {
      activeMediaInfoIndex: i3,
      formattedMediaInfoCount: r3
    } = this.viewModel, {
      value: a3,
      refreshInterval: s9,
      altText: o3,
      title: n9,
      type: l5
    } = e9, {
      sourceURL: d7,
      linkURL: c10
    } = a3, h6 = v3(c10 ?? void 0) ? "_blank" : "_self", p6 = "_blank" === h6 ? "noreferrer" : "", f4 = s9 ? t3 : null, _2 = f4 ? f4.timestamp : 0, v7 = f4 ? f4.sourceURL : d7, g6 = n2("img", {
      alt: o3 || n9,
      key: `media-${l5}-${i3}-${r3}-${_2}`,
      src: v7 ?? void 0
    });
    return (c10 ? n2("a", {
      href: c10,
      rel: p6,
      target: h6,
      title: n9
    }, g6) : null) ?? g6;
  }
  _renderChartMediaInfo(e9) {
    const {
      activeMediaInfoIndex: t3,
      formattedMediaInfoCount: i3
    } = this.viewModel;
    return n2("div", {
      afterCreate: this._createChart,
      afterRemoved: this._disposeChart,
      bind: this,
      class: g3.mediaChart,
      key: `media-${e9.type}-${t3}-${i3}`
    });
  }
  _renderMediaInfoType() {
    const {
      activeMediaInfo: e9
    } = this.viewModel;
    return e9 ? "image" === e9.type ? this._renderImageMediaInfo(e9) : e9.type.includes("chart") ? this._renderChartMediaInfo(e9) : null : null;
  }
  _renderMediaInfo() {
    const {
      activeMediaInfo: e9
    } = this.viewModel;
    return e9 ? n2("div", {
      class: g3.mediaItemContainer,
      key: "media-container"
    }, n2("div", {
      class: g3.mediaItem,
      key: "media-item-container"
    }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e9) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const t3 = "previous" === e9, i3 = t3 ? this.messages.previous : this.messages.next, r3 = t3 ? "chevron-left" : "chevron-right", a3 = t3 ? "media-previous" : "media-next", s9 = t3 ? this._previous : this._next;
    return n2("button", {
      "aria-label": i3,
      bind: this,
      class: g3.mediaPaginationButton,
      key: a3,
      onclick: s9,
      tabIndex: 0,
      title: i3,
      type: "button"
    }, n2("calcite-icon", {
      class: g3.mediaPaginationIcon,
      icon: r3,
      scale: "s"
    }));
  }
  _setupFeatureElementInfo() {
    const {
      description: e9,
      title: t3
    } = this;
    this._featureElementInfo?.set({
      description: e9,
      title: t3
    });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel) return;
    const {
      isAggregate: e9,
      layer: t3
    } = this.viewModel;
    return e9 && t3?.featureReduction && "renderer" in t3.featureReduction ? t3.featureReduction.renderer : t3?.renderer;
  }
  _getSeriesColors(e9) {
    return __async(this, null, function* () {
      const {
        colorAm5: t3
      } = yield import("./chartCommon-DWKNEOY3.js"), i3 = /* @__PURE__ */ new Map();
      return e9.forEach((e10) => {
        e10.color && i3.set(e10, t3(e10.color.toCss(true)));
      }), i3;
    });
  }
  _getRendererColors() {
    return __async(this, null, function* () {
      const {
        colorAm5: e9
      } = yield import("./chartCommon-DWKNEOY3.js"), t3 = /* @__PURE__ */ new Map(), i3 = this._getRenderer(), r3 = "default";
      if (!i3) return t3;
      const a3 = yield x2(i3);
      a3.delete(r3);
      return Array.from(a3.values()).every((e10) => 1 === e10?.length) ? (Array.from(a3.keys()).forEach((i4) => {
        const r4 = a3.get(i4)?.[0]?.toCss(true);
        r4 && t3.set(i4, e9(r4));
      }), t3) : t3;
    });
  }
  _handleMediaKeyup(e9) {
    const {
      key: t3
    } = e9;
    "ArrowLeft" === t3 && (e9.stopPropagation(), this.viewModel.previous()), "ArrowRight" === t3 && (e9.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && !!this.viewModel.abilities.chartAnimation && !o2();
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? C2 : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? y4 : 0;
  }
  _renderChart(e9) {
    return __async(this, null, function* () {
      const {
        root: t3,
        mediaInfo: i3
      } = e9, {
        value: r3,
        type: a3
      } = i3, {
        ResponsiveThemeAm5: s9,
        DarkThemeAm5: o3,
        AnimatedThemeAm5: n9,
        ColorSetAm5: l5,
        ThemeAm5: d7,
        esriChartColorSet: m6
      } = yield import("./chartCommon-DWKNEOY3.js"), c10 = d7.new(t3);
      c10.rule("ColorSet").set("colors", m6), c10.rule("ColorSet").set("reuse", true);
      const h6 = [s9.new(t3), c10];
      r2() && h6.push(o3.new(t3)), this._canAnimateChart() && h6.push(n9.new(t3)), t3.setThemes(h6);
      const p6 = yield this._getRendererColors(), u5 = yield this._getSeriesColors(r3.series), _2 = l5.new(t3, {}), v7 = u5.get(r3.series[0]), g6 = v7 ? {
        lineSettings: {
          stroke: v7
        }
      } : void 0, M3 = r3.series.map((e10, t4) => {
        const i4 = u5.get(e10) || p6.get(e10.fieldName) || _2.getIndex(t4);
        return __spreadValues({
          [w2]: e10.tooltip,
          [I5]: e10.value,
          columnSettings: {
            fill: i4,
            stroke: i4
          }
        }, g6);
      }).filter((e10) => "pie-chart" !== a3 || null != e10.value && e10.value > 0);
      "pie-chart" === a3 ? this._createPieChart(e9, M3) : this._createXYChart(e9, M3);
    });
  }
  _getDirection() {
    return g(this.container) ? "rtl" : "ltr";
  }
  _isInversed() {
    return !!g(this.container);
  }
  _customizeChartTooltip(e9, t3 = "horizontal") {
    return __async(this, null, function* () {
      const {
        colorAm5: i3
      } = yield import("./chartCommon-DWKNEOY3.js");
      e9.setAll({
        pointerOrientation: t3
      }), e9.get("background")?.setAll({
        stroke: i3(A2)
      }), e9.label.setAll({
        direction: this._getDirection(),
        oversizedBehavior: "wrap",
        maxWidth: x3
      });
    });
  }
  _createPieChart(e9, t3) {
    return __async(this, null, function* () {
      const {
        TooltipAm5: i3
      } = yield import("./chartCommon-DWKNEOY3.js"), {
        PieChartAm5: r3,
        PieSeriesAm5: a3
      } = yield import("./pieChart-JLLX7CEQ.js"), {
        mediaInfo: s9,
        root: o3
      } = e9, {
        title: n9
      } = s9, l5 = 5, d7 = s9?.altText || s9?.title || "", m6 = o3.container.children.push(r3.new(o3, {
        ariaLabel: d7,
        focusable: true,
        paddingBottom: l5,
        paddingTop: l5,
        paddingLeft: l5,
        paddingRight: l5
      })), c10 = "{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})", h6 = i3.new(o3, {
        labelText: c10
      }), p6 = m6.series.push(a3.new(o3, {
        name: n9,
        valueField: I5,
        categoryField: w2,
        tooltip: h6
      }));
      p6.ticks.template.set("forceHidden", true), p6.labels.template.set("forceHidden", true), p6.slices.template.states.create("active", {
        shiftRadius: l5
      }), this._customizeChartTooltip(h6), p6.slices.template.setAll({
        ariaLabel: c10,
        focusable: true,
        templateField: "columnSettings"
      }), p6.data.setAll(t3), p6.appear(this._getChartSeriesAnimationMS()), m6.appear(this._getChartAnimationMS()), m6.root.dom.classList.toggle(g3.mediaChartRendered, true);
    });
  }
  _getMinSeriesValue(e9) {
    let t3 = 0;
    return e9.forEach((e10) => t3 = Math.min(e10.value, t3)), t3;
  }
  _createColumnChart(e9, t3, i3) {
    return __async(this, null, function* () {
      const {
        TooltipAm5: r3,
        ScrollbarAm5: a3
      } = yield import("./chartCommon-DWKNEOY3.js"), {
        CategoryAxisAm5: s9,
        AxisRendererXAm5: o3,
        ValueAxisAm5: n9,
        AxisRendererYAm5: l5,
        ColumnSeriesAm5: d7
      } = yield import("./xyChart-KFWXJBN5.js"), {
        mediaInfo: m6,
        root: c10
      } = t3, {
        value: h6,
        title: p6
      } = m6;
      e9.setAll({
        wheelX: "panX",
        wheelY: "zoomX"
      });
      const u5 = e9.xAxes.push(s9.new(c10, {
        renderer: o3.new(c10, {
          inversed: this._isInversed()
        }),
        categoryField: w2
      }));
      u5.get("renderer").labels.template.setAll({
        forceHidden: true
      });
      const f4 = e9.yAxes.push(n9.new(c10, {
        renderer: l5.new(c10, {
          inside: false
        }),
        min: this._getMinSeriesValue(h6.series)
      }));
      f4.get("renderer").labels.template.setAll({
        direction: this._getDirection()
      });
      const _2 = "{categoryX}", v7 = r3.new(c10, {
        labelText: _2
      }), g6 = e9.series.push(d7.new(c10, {
        name: p6,
        xAxis: u5,
        yAxis: f4,
        valueYField: I5,
        categoryXField: w2,
        tooltip: v7
      }));
      this._customizeChartTooltip(v7), g6.columns.template.setAll({
        ariaLabel: _2,
        focusable: true,
        templateField: "columnSettings"
      }), h6.series.length > M2 && e9.set("scrollbarX", a3.new(c10, {
        orientation: "horizontal"
      })), u5.data.setAll(i3), g6.data.setAll(i3), g6.appear(this._getChartSeriesAnimationMS()), e9.appear(this._getChartAnimationMS());
    });
  }
  _createBarChart(e9, t3, i3) {
    return __async(this, null, function* () {
      const {
        TooltipAm5: r3,
        ScrollbarAm5: a3
      } = yield import("./chartCommon-DWKNEOY3.js"), {
        CategoryAxisAm5: s9,
        AxisRendererXAm5: o3,
        ValueAxisAm5: n9,
        AxisRendererYAm5: l5,
        ColumnSeriesAm5: d7
      } = yield import("./xyChart-KFWXJBN5.js"), {
        mediaInfo: m6,
        root: c10
      } = t3, {
        value: h6,
        title: p6
      } = m6;
      e9.setAll({
        wheelX: "panY",
        wheelY: "zoomY"
      });
      const u5 = e9.yAxes.push(s9.new(c10, {
        renderer: l5.new(c10, {
          inversed: true
        }),
        categoryField: w2
      }));
      u5.get("renderer").labels.template.setAll({
        forceHidden: true
      });
      const f4 = e9.xAxes.push(n9.new(c10, {
        renderer: o3.new(c10, {
          inside: false,
          inversed: this._isInversed()
        }),
        min: this._getMinSeriesValue(h6.series)
      }));
      f4.get("renderer").labels.template.setAll({
        direction: this._getDirection()
      });
      const _2 = "{categoryY}", v7 = r3.new(c10, {
        labelText: _2
      }), g6 = e9.series.push(d7.new(c10, {
        name: p6,
        xAxis: f4,
        yAxis: u5,
        valueXField: I5,
        categoryYField: w2,
        tooltip: v7
      }));
      this._customizeChartTooltip(v7, "vertical"), g6.columns.template.setAll({
        ariaLabel: _2,
        focusable: true,
        templateField: "columnSettings"
      }), h6.series.length > M2 && e9.set("scrollbarY", a3.new(c10, {
        orientation: "vertical"
      })), u5.data.setAll(i3), g6.data.setAll(i3), g6.appear(this._getChartSeriesAnimationMS()), e9.appear(this._getChartAnimationMS());
    });
  }
  _createLineChart(e9, t3, i3) {
    return __async(this, null, function* () {
      const {
        TooltipAm5: r3,
        ScrollbarAm5: a3
      } = yield import("./chartCommon-DWKNEOY3.js"), {
        CategoryAxisAm5: s9,
        AxisRendererXAm5: o3,
        ValueAxisAm5: n9,
        AxisRendererYAm5: l5,
        LineSeriesAm5: d7
      } = yield import("./xyChart-KFWXJBN5.js"), {
        root: m6,
        mediaInfo: c10
      } = t3, {
        value: h6,
        title: p6
      } = c10;
      e9.setAll({
        wheelX: "panX",
        wheelY: "zoomX"
      });
      const u5 = e9.xAxes.push(s9.new(m6, {
        renderer: o3.new(m6, {
          inversed: this._isInversed()
        }),
        categoryField: w2
      }));
      u5.get("renderer").labels.template.setAll({
        forceHidden: true
      });
      const f4 = e9.yAxes.push(n9.new(m6, {
        renderer: l5.new(m6, {
          inside: false
        }),
        min: this._getMinSeriesValue(h6.series)
      }));
      f4.get("renderer").labels.template.setAll({
        direction: this._getDirection()
      });
      const _2 = "{categoryX}", v7 = i3[0]?.lineSettings?.stroke, g6 = r3.new(m6, {
        getFillFromSprite: !v7,
        labelText: _2
      });
      v7 && g6.get("background")?.setAll({
        fill: v7
      });
      const A3 = e9.series.push(d7.new(m6, {
        name: p6,
        xAxis: u5,
        yAxis: f4,
        valueYField: I5,
        categoryXField: w2,
        tooltip: g6
      }));
      A3.strokes.template.setAll({
        templateField: "lineSettings"
      }), this._customizeChartTooltip(g6, "vertical"), h6.series.length > M2 && e9.set("scrollbarX", a3.new(m6, {
        orientation: "horizontal"
      })), u5.data.setAll(i3), A3.data.setAll(i3), A3.appear(this._getChartSeriesAnimationMS()), e9.appear(this._getChartAnimationMS());
    });
  }
  _createXYChart(e9, t3) {
    return __async(this, null, function* () {
      const {
        XYChartAm5: i3,
        XYCursorAm5: r3
      } = yield import("./xyChart-KFWXJBN5.js"), {
        root: a3,
        mediaInfo: s9
      } = e9, {
        type: o3
      } = s9, n9 = s9?.altText || s9?.title || "", l5 = a3.container.children.push(i3.new(a3, {
        ariaLabel: n9,
        focusable: true,
        panX: true,
        panY: true
      }));
      l5.set("cursor", r3.new(a3, {})), "column-chart" === o3 && (yield this._createColumnChart(l5, e9, t3)), "bar-chart" === o3 && (yield this._createBarChart(l5, e9, t3)), "line-chart" === o3 && (yield this._createLineChart(l5, e9, t3)), l5.root.dom.classList.toggle(g3.mediaChartRendered, true);
    });
  }
  _clearMediaRefreshTimer() {
    const {
      _refreshTimer: e9
    } = this;
    e9 && (clearTimeout(e9), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e9) {
    const t3 = Date.now();
    this._refreshIntervalInfo = {
      timestamp: t3,
      sourceURL: e9 && this._getImageSource(e9, t3)
    };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const {
      activeMediaInfo: e9
    } = this.viewModel;
    "image" === e9?.type && e9?.refreshInterval > 0 && this._setRefreshTimeout(e9);
  }
  _setRefreshTimeout(e9) {
    const {
      refreshInterval: t3,
      value: i3
    } = e9, r3 = 6e4 * t3;
    this._updateMediaInfoTimestamp(i3.sourceURL);
    const a3 = setInterval(() => {
      this._updateMediaInfoTimestamp(i3.sourceURL);
    }, r3);
    this._refreshTimer = a3;
  }
  _getImageSource(e9, t3) {
    const i3 = e9.includes("?") ? "&" : "?", [r3, a3 = ""] = e9.split("#");
    return `${r3}${i3}timestamp=${t3}${a3 ? "#" : ""}${a3}`;
  }
};
e([y()], T2.prototype, "_refreshIntervalInfo", void 0), e([y()], T2.prototype, "attributes", null), e([y()], T2.prototype, "activeMediaInfoIndex", null), e([y()], T2.prototype, "description", null), e([y()], T2.prototype, "fieldInfoMap", null), e([y()], T2.prototype, "layer", null), e([y()], T2.prototype, "mediaInfos", null), e([y()], T2.prototype, "popupTemplate", null), e([y()], T2.prototype, "relatedInfos", null), e([y()], T2.prototype, "title", null), e([y({
  type: M
})], T2.prototype, "viewModel", void 0), e([y(), e2("esri/widgets/Feature/t9n/Feature")], T2.prototype, "messages", void 0), T2 = e([a("esri.widgets.Feature.FeatureMedia")], T2);
var b4 = T2;

// ../../../node_modules/@arcgis/core/widgets/Feature/support/arcadeFeatureUtils.js
var n7 = "esri.widgets.Feature.support.arcadeFeatureUtils";
var s8 = () => n.getLogger(n7);
function p5(e9) {
  return "string" == typeof e9 ? ae(oe(e9)) : Array.isArray(e9) ? c9(e9) : "esri.arcade.Dictionary" === e9?.declaredClass ? u3(e9) : e9;
}
function c9(e9) {
  return `<ul class="esri-widget__list">${e9.map((e10) => `<li>${"string" == typeof e10 ? ae(oe(e10)) : e10}</li>`).join("")}</ul>`;
}
function u3(e9) {
  const r3 = e9.keys().map((r4) => {
    const t3 = e9.field(r4);
    return `<tr><th>${r4}</th><td>${"string" == typeof t3 ? ae(oe(t3)) : t3}</td></tr>`;
  }).join("");
  return `<table class="${e4.table}">${r3}</table>`;
}
function l4() {
  return import("./arcade-AWQNPMXA.js");
}
function d6(e9) {
  return "createQuery" in e9 && "queryFeatures" in e9;
}
function y5(_0) {
  return __async(this, arguments, function* ({
    graphic: e9,
    view: r3,
    options: t3
  }) {
    const {
      isAggregate: a3,
      layer: o3
    } = e9;
    if (!a3 || !o3 || "2d" !== r3?.type) return [];
    const i3 = yield r3.whenLayerView(o3);
    if (!d6(i3)) return [];
    const n9 = i3.createQuery(), s9 = e9.getObjectId();
    n9.aggregateIds = null != s9 ? [s9] : [];
    const {
      features: p6
    } = yield i3.queryFeatures(n9, t3);
    return p6;
  });
}
function f2({
  layer: e9,
  aggregatedFeatures: r3,
  interceptor: a3
}) {
  const {
    fields: o3,
    objectIdField: i3,
    geometryType: n9,
    spatialReference: s9,
    displayField: p6
  } = e9;
  return new Ze(__spreadProps(__spreadValues({
    fields: o3,
    objectIdField: i3,
    geometryType: n9,
    spatialReference: s9,
    displayField: p6,
    interceptor: a3
  }, "feature" === e9.type ? {
    templates: e9.templates,
    typeIdField: e9.typeIdField,
    types: e9.types
  } : null), {
    source: r3
  }));
}
function g4(_0) {
  return __async(this, arguments, function* ({
    expressionInfo: e9,
    arcade: r3,
    interceptor: t3,
    spatialReference: a3,
    map: o3,
    graphic: i3,
    location: n9,
    view: p6,
    options: c10
  }) {
    if (!e9?.expression) return null;
    const {
      isAggregate: u5
    } = i3, l5 = (i3.sourceLayer || i3.layer) ?? void 0, d7 = u5 ? "feature-reduction-popup" : "popup", g6 = r3.createArcadeProfile(d7), m6 = r3.createArcadeExecutor(e9.expression, g6).catch((r4) => s8().error("arcade-executor-error", {
      error: r4,
      expressionInfo: e9
    })), [w5, h6] = yield Promise.all([y5({
      graphic: i3,
      view: p6,
      options: c10
    }), m6]);
    if (!h6) return null;
    const F5 = "feature-reduction-popup" === d7 ? f2({
      layer: l5,
      aggregatedFeatures: w5,
      interceptor: t3
    }) : void 0, $2 = __spreadProps(__spreadValues({}, "feature-reduction-popup" === d7 ? {
      $aggregatedFeatures: F5
    } : {
      $datastore: l5?.url,
      $layer: "feature" === l5?.type || "subtype-sublayer" === l5?.type || "catalog-footprint" === l5?.type || "oriented-imagery" === l5?.type ? l5 : "scene" === l5?.type && null != l5.associatedLayer ? l5.associatedLayer : void 0,
      $map: o3,
      $userInput: n9,
      $graph: "knowledge-graph-sublayer" === l5?.type ? l5?.parentCompositeLayer?.knowledgeGraph : void 0
    }), {
      $feature: i3
    }), v7 = {
      abortSignal: c10?.signal ?? void 0,
      interceptor: t3 ?? void 0,
      rawOutput: true,
      spatialReference: a3 ?? void 0,
      timeZone: p6?.timeZone
    };
    return yield h6.executeAsync($2, v7).catch((r4) => s8().error("arcade-execution-error", {
      error: r4,
      graphic: i3,
      expressionInfo: e9
    })).finally(() => F5?.destroy());
  });
}
function m4(_0) {
  return __async(this, arguments, function* ({
    expressionInfos: e9,
    spatialReference: t3,
    graphic: a3,
    interceptor: o3,
    map: i3,
    view: n9,
    location: s9,
    options: c10
  }) {
    if (!e9?.length) return {};
    const u5 = yield l4(), d7 = {};
    for (const r3 of e9) d7[`expression/${r3.name}`] = g4({
      expressionInfo: r3,
      arcade: u5,
      interceptor: o3,
      spatialReference: t3,
      map: i3,
      graphic: a3,
      location: s9,
      view: n9,
      options: c10
    });
    const y7 = yield v(d7), f4 = {};
    for (const r3 in y7) f4[r3] = p5(y7[r3].value);
    return f4;
  });
}

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureExpression/FeatureExpressionViewModel.js
var w3 = 1;
var j2 = class extends S {
  constructor(t3) {
    super(t3), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._cancelQuery = () => {
      const {
        _abortController: t4
      } = this;
      t4 && t4.abort(), this._abortController = null;
    }, this._createVM = () => {
      const t4 = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const e9 = "fields" === t4 ? new n6() : "media" === t4 ? new M() : "text" === t4 ? new p3() : null;
      this._set("contentElementViewModel", e9);
    }, this._compile = () => __async(this, null, function* () {
      this._cancelQuery();
      const t4 = new AbortController();
      this._abortController = t4, yield this._compileExpression(), this._abortController === t4 && (this._abortController = null);
    }), this._compileThrottled = e3(this._compile, w3, this), this._compileExpression = () => __async(this, null, function* () {
      const {
        expressionInfo: t4,
        graphic: e9,
        interceptor: o3,
        spatialReference: r3,
        map: n9,
        location: i3,
        view: s9,
        _abortController: l5
      } = this;
      if (!t4 || !e9) return void this._set("contentElement", null);
      const m6 = yield l4();
      if (l5 !== this._abortController) return;
      const h6 = yield g4({
        arcade: m6,
        expressionInfo: t4,
        graphic: e9,
        location: i3,
        interceptor: o3,
        map: n9,
        spatialReference: r3,
        view: s9
      });
      if (!h6 || "esri.arcade.Dictionary" !== h6.declaredClass) return void this._set("contentElement", null);
      const d7 = yield h6.castAsJsonAsync(l5?.signal), u5 = d7?.type, _2 = "media" === u5 ? I.fromJSON(d7) : "text" === u5 ? c2.fromJSON(d7) : "fields" === u5 ? c.fromJSON(d7) : null;
      this._set("contentElement", _2);
    }), this.addHandles([d(() => [this.expressionInfo, this.graphic, this.map, this.spatialReference, this.view], () => this._compileThrottled(), P), d(() => [this.contentElement], () => this._createVM(), P)]);
  }
  initialize() {
    this.addHandles(this._compileThrottled);
  }
  destroy() {
    this._cancelQuery(), this.contentElementViewModel?.destroy(), this._set("contentElementViewModel", null), this._set("contentElement", null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(t3) {
    this._override("spatialReference", t3);
  }
  get state() {
    const {
      _abortController: t3,
      contentElement: e9,
      contentElementViewModel: o3
    } = this;
    return t3 ? "loading" : e9 || o3 ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(t3) {
    this._override("map", t3);
  }
};
e([y()], j2.prototype, "_abortController", void 0), e([y({
  type: i
})], j2.prototype, "expressionInfo", void 0), e([y({
  type: d2
})], j2.prototype, "graphic", void 0), e([y({
  readOnly: true
})], j2.prototype, "contentElement", void 0), e([y({
  readOnly: true
})], j2.prototype, "contentElementViewModel", void 0), e([y()], j2.prototype, "interceptor", void 0), e([y({
  type: _
})], j2.prototype, "location", void 0), e([y()], j2.prototype, "spatialReference", null), e([y({
  readOnly: true
})], j2.prototype, "state", null), e([y()], j2.prototype, "map", null), e([y()], j2.prototype, "view", void 0), j2 = e([a("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], j2);
var C3 = j2;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureExpression.js
var m5 = "esri-feature";
var u4 = {
  base: `${m5}-expression`,
  loadingSpinnerContainer: `${m5}__loading-container`
};
var g5 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this._contentWidget = null, this.viewModel = new C3();
  }
  initialize() {
    this.addHandles(d(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), P));
  }
  loadDependencies() {
    return r({
      loader: () => import("./calcite-loader-UGV3HF5I.js")
    });
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const {
      state: e9
    } = this.viewModel;
    return n2("div", {
      class: u4.base
    }, "loading" === e9 ? this._renderLoading() : "disabled" === e9 ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return n2("div", {
      class: u4.loadingSpinnerContainer,
      key: "loading-container"
    }, n2("calcite-loader", {
      inline: true,
      label: ""
    }));
  }
  _destroyContentWidget() {
    const {
      _contentWidget: e9
    } = this;
    e9 && (e9.viewModel = null, e9.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const {
      contentElementViewModel: e9,
      contentElement: t3
    } = this.viewModel, o3 = t3?.type;
    this._destroyContentWidget();
    const s9 = e9 ? "fields" === o3 ? new h3({
      viewModel: e9
    }) : "media" === o3 ? new b4({
      viewModel: e9
    }) : "text" === o3 ? new p4({
      viewModel: e9
    }) : null : null;
    this._contentWidget = s9, this.scheduleRender();
  }
};
e([y({
  type: C3
})], g5.prototype, "viewModel", void 0), g5 = e([a("esri.widgets.Feature.FeatureExpression")], g5);
var h5 = g5;

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureRelationship.js
var w4 = "esri-feature";
var b5 = `${w4}-relationship`;
var f3 = {
  base: b5,
  listContainer: `${b5}__list`,
  listItem: `${b5}__list-item`,
  listItemHidden: `${b5}__list-item--hidden`,
  listContainerQuerying: `${b5}__list--querying`,
  featureObserver: `${w4}__feature-observer`,
  stickySpinnerContainer: `${w4}__sticky-loading-container`,
  loadingSpinnerContainer: `${w4}__loading-container`
};
var y6 = {
  title: true,
  description: true
};
var F3 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([e10]) => {
      e10?.isIntersecting && this._increaseFeaturePage();
    }, {
      root: window.document
    }), this.headingLevel = 2, this.viewModel = new F(), this.messages = null, this.messagesCommon = null, this.visibleElements = __spreadValues({}, y6), this._increaseFeaturePage = () => {
      const {
        state: e10,
        showAllEnabled: t4,
        relatedFeatures: s9,
        featuresPerPage: r3,
        featurePage: i3
      } = this.viewModel;
      "ready" === e10 && t4 && s9.length >= r3 * i3 && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new l(), this.addHandles([d(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), P), d(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), v2(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return r({
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      list: () => import("./calcite-list-QRFMTME5.js"),
      "list-item": () => import("./calcite-list-item-MF2DTJRA.js"),
      loader: () => import("./calcite-loader-UGV3HF5I.js"),
      notice: () => import("./calcite-notice-56I7IIQT.js")
    });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = u(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const {
      showAllEnabled: e9,
      featureCount: t3,
      displayCount: s9,
      state: r3
    } = this.viewModel;
    return !e9 && !!t3 && "ready" === r3 && (t3 > s9 || 0 === s9);
  }
  get displayListItems() {
    return this.displayShowAllButton || this.viewModel.relatedFeatureViewModels.length > 0;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e9) {
    this.viewModel.description = e9;
  }
  get featureCountDescription() {
    const {
      messages: e9
    } = this, {
      featureCount: t3
    } = this.viewModel;
    return s4(e9?.numberRecords, {
      number: t3
    });
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e9) {
    this.viewModel.title = e9;
  }
  castVisibleElements(e9) {
    return __spreadValues(__spreadValues({}, y6), e9);
  }
  render() {
    const {
      state: e9
    } = this.viewModel;
    return n2("div", {
      class: this.classes(f3.base, e4.widget)
    }, this._featureElementInfo?.render(), "loading" === e9 ? this._renderLoading() : "disabled" === e9 ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n2("div", {
      class: f3.stickySpinnerContainer,
      key: "sticky-loader"
    }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n2("calcite-loader", {
      inline: true,
      label: ""
    });
  }
  _renderLoading() {
    return n2("div", {
      class: f3.loadingSpinnerContainer,
      key: "loading-container"
    }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return n2("calcite-icon", {
      icon: "list",
      scale: "s",
      slot: "content-end"
    });
  }
  _renderChevronIconNode() {
    const e9 = g(this.container) ? "chevron-left" : "chevron-right";
    return n2("calcite-icon", {
      icon: e9,
      scale: "s",
      slot: "content-end"
    });
  }
  _renderRelatedFeature(e9) {
    const {
      itemDescriptionFieldName: t3
    } = this.viewModel, s9 = e9.title;
    e9.description = t3 && e9.formattedAttributes?.global[t3];
    const r3 = "loading" === e9.state;
    return n2("calcite-list-item", {
      class: this.classes(f3.listItem, {
        [f3.listItemHidden]: r3
      }),
      description: e9.description ?? "",
      key: e9.uid,
      label: s9,
      onCalciteListItemSelect: () => this.emit("select-record", {
        featureViewModel: e9
      })
    }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? n2("calcite-list-item", {
      description: this.featureCountDescription,
      key: "show-all-item",
      label: this.messages?.showAll,
      onCalciteListItemSelect: () => this.emit("show-all-records")
    }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return n2("calcite-notice", {
      icon: "information",
      key: "no-related-features-message",
      kind: "brand",
      open: true,
      scale: "s",
      width: "full"
    }, n2("div", {
      slot: "message"
    }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return n2("div", {
      afterCreate: this._relatedFeatureIntersectionObserverCreated,
      bind: this,
      class: f3.featureObserver,
      key: "feature-observer"
    });
  }
  _renderList() {
    const {
      relatedFeatureViewModels: e9
    } = this.viewModel;
    return n2("calcite-list", null, e9.toArray().map((e10) => this._renderRelatedFeature(e10)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const {
      displayListItems: e9
    } = this, {
      state: t3
    } = this.viewModel;
    return n2("div", {
      class: this.classes(f3.listContainer, {
        [f3.listContainerQuerying]: "querying" === t3
      }),
      key: "list-container"
    }, e9 ? this._renderList() : "ready" === t3 ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return n2("calcite-notice", {
      icon: "exclamation-mark-triangle",
      key: "relationship-not-found",
      kind: "danger",
      open: true,
      scale: "s",
      width: "full"
    }, n2("div", {
      slot: "message"
    }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const {
      relatedFeatureViewModels: e9
    } = this.viewModel, t3 = "related-feature-viewmodels";
    this.removeHandles(t3), e9?.forEach((e10) => {
      this.addHandles(d(() => [e10.title, e10.state], () => this.scheduleRender(), P), t3);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const {
      headingLevel: e9,
      visibleElements: t3
    } = this, s9 = t3.description && this.description, r3 = t3.title && this.title;
    this._featureElementInfo?.set({
      description: s9,
      title: r3,
      headingLevel: e9
    });
  }
  _handleRelatedFeatureObserverChange() {
    return __async(this, null, function* () {
      this._unobserveRelatedFeatureObserver();
      const {
        state: e9,
        showAllEnabled: t3
      } = this.viewModel;
      yield A(0), this._relatedFeatureIntersectionObserverNode && "ready" === e9 && t3 && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
    });
  }
  _relatedFeatureIntersectionObserverCreated(e9) {
    this._relatedFeatureIntersectionObserverNode = e9;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
e([y()], F3.prototype, "_relatedFeatureIntersectionObserverNode", void 0), e([y({
  readOnly: true
})], F3.prototype, "displayShowAllButton", null), e([y({
  readOnly: true
})], F3.prototype, "displayListItems", null), e([y()], F3.prototype, "description", null), e([y({
  readOnly: true
})], F3.prototype, "featureCountDescription", null), e([y()], F3.prototype, "headingLevel", void 0), e([y()], F3.prototype, "title", null), e([y({
  type: F
})], F3.prototype, "viewModel", void 0), e([y(), e2("esri/widgets/Feature/t9n/Feature")], F3.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], F3.prototype, "messagesCommon", void 0), e([y()], F3.prototype, "visibleElements", void 0), e([s3("visibleElements")], F3.prototype, "castVisibleElements", null), F3 = e([a("esri.widgets.Feature.FeatureRelationship")], F3);
var I6 = F3;

// ../../../node_modules/@arcgis/core/arcade/featureset/support/FeatureSetQueryInterceptor.js
var e7 = class {
  constructor(e9, a3) {
    this.preLayerQueryCallback = e9, this.preRequestCallback = a3, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e10) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e10) => {
    });
  }
};

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureViewModel.js
var G;
var z2 = 1;
var J2 = "content-view-models";
var K = "relationship-view-models";
var W = {
  attachmentsContent: true,
  chartAnimation: true,
  customContent: true,
  expressionContent: true,
  fieldsContent: true,
  mediaContent: true,
  textContent: true,
  relationshipContent: true
};
var X = G = class extends s5(S) {
  constructor(e9) {
    super(e9), this._error = null, this._featureAbortController = null, this._graphicChangedThrottled = e3(this._graphicChanged, z2, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = __spreadValues({}, W), this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (e10) => {
      const {
        abilities: t3
      } = this;
      return "attachments" === e10.type && !!t3.attachmentsContent || "custom" === e10.type && !!t3.customContent || "fields" === e10.type && !!t3.fieldsContent || "media" === e10.type && !!t3.mediaContent || "text" === e10.type && !!t3.textContent || "expression" === e10.type && !!t3.expressionContent || "relationship" === e10.type && !!t3.relationshipContent;
    }, this.addHandles(d(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), P));
  }
  initialize() {
    this.addHandles(this._graphicChangedThrottled);
  }
  destroy() {
    this._clear(), this._cancelFeatureQuery(), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return null != this.graphic ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return re(ie(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return L(this.graphic);
  }
  castAbilities(e9) {
    return __spreadValues(__spreadValues({}, W), e9);
  }
  get isTable() {
    return this._sourceLayer?.isTable || false;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(e9) {
    this._set("graphic", e9?.clone() ?? null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e9) {
    this._override("spatialReference", e9);
  }
  get timeZone() {
    return this.view?.timeZone ?? o;
  }
  set timeZone(e9) {
    this._overrideIfSome("timeZone", e9);
  }
  get map() {
    return this.view?.map || null;
  }
  set map(e9) {
    this._override("map", e9);
  }
  get waitingForContent() {
    return !!this._featureAbortController;
  }
  setActiveMedia(e9, t3) {
    const i3 = this.contentViewModels[e9];
    i3 instanceof M && i3.setActiveMedia(t3);
  }
  nextMedia(e9) {
    const t3 = this.contentViewModels[e9];
    t3 instanceof M && t3.next();
  }
  previousMedia(e9) {
    const t3 = this.contentViewModels[e9];
    t3 instanceof M && t3.previous();
  }
  updateGeometry() {
    return __async(this, null, function* () {
      const {
        graphic: e9,
        spatialReference: t3,
        _sourceLayer: i3
      } = this;
      yield i3?.load();
      const r3 = i3?.objectIdField;
      if (!r3 || !e9 || !i3) return;
      const o3 = e9?.attributes?.[r3];
      if (null == o3) return;
      const s9 = [o3];
      if (!e9.geometry) {
        const r4 = yield se({
          layer: i3,
          graphic: e9,
          outFields: [],
          objectIds: s9,
          returnGeometry: true,
          spatialReference: t3
        }), o4 = r4?.geometry;
        o4 && (e9.geometry = o4);
      }
    });
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  _graphicChanged() {
    return __async(this, null, function* () {
      this._cancelFeatureQuery(), this._error = null, this._clear();
      const {
        graphic: e9
      } = this;
      if (!e9) return;
      const t3 = new AbortController();
      this._featureAbortController = t3;
      try {
        yield this._queryFeature({
          signal: t3.signal
        });
      } catch (i3) {
        b(i3) || (this._error = i3, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", {
          error: i3,
          graphic: e9,
          popupTemplate: this._effectivePopupTemplate
        }));
      }
      this._featureAbortController === t3 && (this._featureAbortController = null);
    });
  }
  _cancelFeatureQuery() {
    const {
      _featureAbortController: e9
    } = this;
    e9 && e9.abort(), this._featureAbortController = null;
  }
  _compileContentElement(e9, t3) {
    return "attachments" === e9.type ? this._compileAttachments(e9, t3) : "custom" === e9.type ? this._compileCustom(e9, t3) : "fields" === e9.type ? this._compileFields(e9, t3) : "media" === e9.type ? this._compileMedia(e9, t3) : "text" === e9.type ? this._compileText(e9, t3) : "expression" === e9.type ? this._compileExpression(e9, t3) : "relationship" === e9.type ? this._compileRelationship(e9, t3) : void 0;
  }
  _compileContent(e9) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(e9) ? e9.filter(this._isAllowedContentType).map((e10, t3) => this._compileContentElement(e10, t3)).filter(O) : "string" == typeof e9 ? this._compileText(new c2({
      text: e9
    }), 0).text : e9;
  }
  _destroyContentViewModels() {
    this.removeHandles(K), this.removeHandles(J2), this.contentViewModels.forEach((e9) => e9 && !e9.destroyed && e9.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e9, t3) {
    const i3 = e9?.graphic?.getObjectId(), r3 = t3?.getObjectId();
    return null != i3 && null != r3 && i3 === r3;
  }
  _setRelatedFeaturesViewModels({
    relatedFeatureViewModels: e9,
    relatedFeatures: t3,
    map: i3
  }) {
    const {
      view: r3,
      spatialReference: o3,
      timeZone: s9
    } = this;
    t3?.filter(Boolean).forEach((t4) => {
      e9.some((e10) => this._matchesFeature(e10, t4)) || e9.add(new G({
        abilities: {
          relationshipContent: false
        },
        map: i3,
        view: r3,
        spatialReference: o3,
        timeZone: s9,
        graphic: t4
      }));
    }), e9.forEach((i4) => {
      const r4 = t3?.find((e10) => this._matchesFeature(i4, e10));
      r4 || e9.remove(i4);
    });
  }
  _setExpressionContentVM(e9, t3) {
    const i3 = this.formattedAttributes, {
      contentElement: r3,
      contentElementViewModel: o3
    } = e9, s9 = r3?.type;
    o3 && s9 && ("fields" === s9 && (this._createFieldsFormattedAttributes({
      contentElement: r3,
      contentElementIndex: t3,
      formattedAttributes: i3
    }), o3.set(this._createFieldsVMParams(r3, t3))), "media" === s9 && (this._createMediaFormattedAttributes({
      contentElement: r3,
      contentElementIndex: t3,
      formattedAttributes: i3
    }), o3.set(this._createMediaVMParams(r3, t3))), "text" === s9 && o3.set(this._createTextVMParams(r3)));
  }
  _compileRelationship(e9, t3) {
    const {
      displayCount: i3,
      orderByFields: r3,
      relationshipId: o3,
      title: s9,
      description: n9
    } = e9, {
      _sourceLayer: a3,
      graphic: l5,
      map: p6
    } = this;
    if (!J(a3)) return;
    const d7 = new F(__spreadValues({
      displayCount: i3,
      graphic: l5,
      orderByFields: r3,
      relationshipId: o3,
      layer: a3,
      map: p6
    }, this._compileTitleAndDesc({
      title: s9,
      description: n9
    })));
    return this.contentViewModels[t3] = d7, this.addHandles(v2(() => d7.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(d7)), K), e9;
  }
  _compileExpression(e9, t3) {
    const {
      expressionInfo: i3
    } = e9, {
      graphic: r3,
      map: o3,
      spatialReference: s9,
      view: n9,
      location: a3
    } = this, l5 = new C3({
      expressionInfo: i3,
      graphic: r3,
      interceptor: G.interceptor,
      map: o3,
      spatialReference: s9,
      view: n9,
      location: a3
    });
    return this.contentViewModels[t3] = l5, this.addHandles(d(() => l5.contentElementViewModel, () => this._setExpressionContentVM(l5, t3), P), J2), e9;
  }
  _compileAttachments(e9, t3) {
    const {
      graphic: i3
    } = this, {
      description: r3,
      title: o3
    } = e9;
    return this.contentViewModels[t3] = new c3(__spreadValues({
      graphic: i3
    }, this._compileTitleAndDesc({
      title: o3,
      description: r3
    }))), e9;
  }
  _compileCustom(e9, t3) {
    const {
      graphic: i3
    } = this, {
      creator: r3,
      destroyer: o3
    } = e9;
    return this.contentViewModels[t3] = new p3({
      graphic: i3,
      creator: r3,
      destroyer: o3
    }), e9;
  }
  _compileTitleAndDesc({
    title: e9,
    description: t3
  }) {
    const {
      _fieldInfoMap: i3,
      _sourceLayer: r3,
      graphic: o3,
      formattedAttributes: s9
    } = this, n9 = o3?.attributes, a3 = this._expressionAttributes, l5 = s9.global;
    return {
      title: D({
        attributes: n9,
        fieldInfoMap: i3,
        globalAttributes: l5,
        expressionAttributes: a3,
        layer: r3,
        text: e9
      }),
      description: D({
        attributes: n9,
        fieldInfoMap: i3,
        globalAttributes: l5,
        expressionAttributes: a3,
        layer: r3,
        text: t3
      })
    };
  }
  _createFieldsVMParams(e9, t3) {
    const i3 = this._effectivePopupTemplate, r3 = this.formattedAttributes, o3 = __spreadValues(__spreadValues({}, r3?.global), r3?.content[t3]), s9 = e9?.fieldInfos || i3?.fieldInfos, n9 = s9?.filter(({
      fieldName: e10
    }) => !!e10 && (x(e10) || de(e10) || o3.hasOwnProperty(e10))), a3 = i3?.expressionInfos, {
      description: l5,
      title: p6
    } = e9;
    return __spreadValues({
      attributes: o3,
      expressionInfos: a3,
      fieldInfos: n9
    }, this._compileTitleAndDesc({
      title: p6,
      description: l5
    }));
  }
  _compileFields(e9, t3) {
    const i3 = e9.clone(), r3 = new n6(this._createFieldsVMParams(e9, t3));
    return this.contentViewModels[t3] = r3, i3.fieldInfos = r3.formattedFieldInfos.slice(0), i3;
  }
  _createMediaVMParams(e9, t3) {
    const {
      abilities: i3,
      graphic: r3,
      _fieldInfoMap: o3,
      _effectivePopupTemplate: s9,
      relatedInfos: n9,
      _sourceLayer: a3,
      _expressionAttributes: l5
    } = this, p6 = this.formattedAttributes, c10 = r3?.attributes ?? {}, {
      description: d7,
      mediaInfos: u5,
      title: h6
    } = e9;
    return __spreadValues({
      abilities: {
        chartAnimation: i3.chartAnimation
      },
      activeMediaInfoIndex: e9.activeMediaInfoIndex || 0,
      attributes: c10,
      isAggregate: r3?.isAggregate,
      layer: a3,
      fieldInfoMap: o3,
      formattedAttributes: __spreadValues(__spreadValues({}, p6?.global), p6?.content[t3]),
      expressionAttributes: l5,
      mediaInfos: u5,
      popupTemplate: s9,
      relatedInfos: n9
    }, this._compileTitleAndDesc({
      title: h6,
      description: d7
    }));
  }
  _compileMedia(e9, t3) {
    const i3 = e9.clone(), r3 = new M(this._createMediaVMParams(e9, t3));
    return i3.mediaInfos = r3.formattedMediaInfos.slice(0), this.contentViewModels[t3] = r3, i3;
  }
  _createTextVMParams(e9) {
    const {
      graphic: t3,
      _fieldInfoMap: i3,
      _sourceLayer: r3,
      _expressionAttributes: o3
    } = this;
    if (e9 && e9.text) {
      const s9 = t3?.attributes ?? {}, n9 = this.formattedAttributes?.global ?? {};
      e9.text = D({
        attributes: s9,
        fieldInfoMap: i3,
        globalAttributes: n9,
        expressionAttributes: o3,
        layer: r3,
        text: e9.text
      });
    }
    return {
      graphic: t3,
      creator: e9.text
    };
  }
  _compileText(e9, t3) {
    const i3 = e9.clone();
    return this.contentViewModels[t3] = new p3(this._createTextVMParams(i3)), i3;
  }
  _compileLastEditInfo() {
    const {
      _effectivePopupTemplate: e9,
      _sourceLayer: t3,
      graphic: i3,
      timeZone: r3
    } = this;
    if (!e9) return;
    const {
      lastEditInfoEnabled: o3
    } = e9, s9 = t3?.editFieldsInfo;
    return o3 && s9 ? ne(s9, i3?.attributes, r3, t3) : void 0;
  }
  _compileTitle(e9) {
    const {
      _fieldInfoMap: t3,
      _sourceLayer: i3,
      graphic: r3,
      _expressionAttributes: o3
    } = this, s9 = r3?.attributes ?? {}, n9 = this.formattedAttributes?.global ?? {};
    return D({
      attributes: s9,
      fieldInfoMap: t3,
      globalAttributes: n9,
      expressionAttributes: o3,
      layer: i3,
      text: e9
    });
  }
  _getTitle() {
    return __async(this, null, function* () {
      const {
        _effectivePopupTemplate: e9,
        graphic: t3
      } = this;
      return t3 ? E({
        type: "title",
        value: e9?.title,
        event: {
          graphic: t3
        }
      }) : null;
    });
  }
  _getContent() {
    return __async(this, null, function* () {
      const {
        _effectivePopupTemplate: e9,
        graphic: t3
      } = this;
      return t3 ? E({
        type: "content",
        value: e9?.content,
        event: {
          graphic: t3
        }
      }) : null;
    });
  }
  _queryFeature(e9) {
    return __async(this, null, function* () {
      const {
        _featureAbortController: t3,
        _sourceLayer: i3,
        graphic: r3,
        _effectivePopupTemplate: o3
      } = this, s9 = this.map, n9 = this.view, a3 = this.spatialReference, p6 = this.location;
      if (t3 !== this._featureAbortController || !r3) return;
      yield ce({
        graphic: r3,
        popupTemplate: o3,
        layer: i3,
        spatialReference: a3
      }, e9);
      const {
        content: {
          value: c10
        },
        title: {
          value: d7
        }
      } = yield v({
        content: this._getContent(),
        title: this._getTitle()
      }), {
        expressionAttributes: {
          value: u5
        }
      } = yield v({
        checkForRelatedFeatures: this._checkForRelatedFeatures(e9),
        expressionAttributes: m4({
          expressionInfos: o3?.expressionInfos,
          spatialReference: a3,
          graphic: r3,
          map: s9,
          interceptor: G.interceptor,
          view: n9,
          options: e9,
          location: p6
        })
      });
      t3 === this._featureAbortController && r3 && (this._expressionAttributes = u5, this._graphicExpressionAttributes = __spreadValues(__spreadValues({}, r3.attributes), u5), this._set("formattedAttributes", this._createFormattedAttributes(c10)), this._set("title", this._compileTitle(d7)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(c10) || null));
    });
  }
  _createMediaFormattedAttributes({
    contentElement: e9,
    contentElementIndex: t3,
    formattedAttributes: i3
  }) {
    const {
      _effectivePopupTemplate: r3,
      graphic: o3,
      relatedInfos: s9,
      _sourceLayer: n9,
      _fieldInfoMap: a3,
      _graphicExpressionAttributes: l5,
      timeZone: p6
    } = this;
    i3.content[t3] = ue({
      fieldInfos: r3?.fieldInfos,
      graphic: o3,
      attributes: __spreadValues(__spreadValues({}, l5), e9.attributes),
      layer: n9,
      fieldInfoMap: a3,
      relatedInfos: s9,
      timeZone: p6
    });
  }
  _createFieldsFormattedAttributes({
    contentElement: e9,
    contentElementIndex: t3,
    formattedAttributes: i3
  }) {
    if (e9.fieldInfos) {
      const {
        graphic: r3,
        relatedInfos: o3,
        _sourceLayer: s9,
        _fieldInfoMap: n9,
        _graphicExpressionAttributes: a3,
        timeZone: l5
      } = this;
      i3.content[t3] = ue({
        fieldInfos: e9.fieldInfos,
        graphic: r3,
        attributes: __spreadValues(__spreadValues({}, a3), e9.attributes),
        layer: s9,
        fieldInfoMap: n9,
        relatedInfos: o3,
        timeZone: l5
      });
    }
  }
  _createFormattedAttributes(e9) {
    const {
      _effectivePopupTemplate: t3,
      graphic: i3,
      relatedInfos: r3,
      _sourceLayer: o3,
      _fieldInfoMap: s9,
      _graphicExpressionAttributes: n9,
      timeZone: a3
    } = this, l5 = t3?.fieldInfos, p6 = {
      global: ue({
        fieldInfos: l5,
        graphic: i3,
        attributes: n9,
        layer: o3,
        fieldInfoMap: s9,
        relatedInfos: r3,
        timeZone: a3
      }),
      content: []
    };
    return Array.isArray(e9) && e9.forEach((e10, t4) => {
      "fields" === e10.type && this._createFieldsFormattedAttributes({
        contentElement: e10,
        contentElementIndex: t4,
        formattedAttributes: p6
      }), "media" === e10.type && this._createMediaFormattedAttributes({
        contentElement: e10,
        contentElementIndex: t4,
        formattedAttributes: p6
      });
    }), p6;
  }
  _checkForRelatedFeatures(e9) {
    const {
      graphic: t3,
      _effectivePopupTemplate: i3
    } = this;
    return this._queryRelatedInfos(t3, ie(i3), e9);
  }
  _queryRelatedInfos(e9, t3, i3) {
    return __async(this, null, function* () {
      const {
        relatedInfos: r3,
        _sourceLayer: o3
      } = this;
      r3.clear();
      const s9 = null != o3?.associatedLayer ? yield o3?.associatedLayer.load(i3) : o3;
      if (!s9 || !e9) return;
      const n9 = t3.filter((e10) => !!e10.fieldName && de(e10.fieldName));
      if (!n9?.length) return;
      t3.forEach((e10) => this._configureRelatedInfo(e10, s9));
      const a3 = yield N({
        relatedInfos: r3,
        layer: s9
      }, i3);
      Object.keys(a3).forEach((e10) => {
        const t4 = r3.get(e10.toString()), i4 = a3[e10]?.value;
        t4 && i4 && (t4.layerInfo = i4.data);
      });
      const l5 = yield T({
        graphic: e9,
        relatedInfos: r3,
        layer: s9
      }, i3);
      Object.keys(l5).forEach((e10) => {
        I3(l5[e10]?.value, r3.get(e10.toString()));
      });
    });
  }
  _configureRelatedInfo(e9, t3) {
    const {
      relatedInfos: i3
    } = this, r3 = y3(e9.fieldName || "");
    if (!r3) return;
    const {
      layerId: o3,
      fieldName: s9
    } = r3;
    if (!o3) return;
    const n9 = i3.get(o3.toString()) || F2(o3, t3);
    n9 && (q2({
      relatedInfo: n9,
      fieldName: s9,
      fieldInfo: e9
    }), this.relatedInfos.set(o3, n9));
  }
};
X.interceptor = new e7(be, Ie), e([y()], X.prototype, "_error", void 0), e([y()], X.prototype, "_featureAbortController", void 0), e([y({
  readOnly: true
})], X.prototype, "_effectivePopupTemplate", null), e([y({
  readOnly: true
})], X.prototype, "_fieldInfoMap", null), e([y({
  readOnly: true
})], X.prototype, "_sourceLayer", null), e([y()], X.prototype, "abilities", void 0), e([s3("abilities")], X.prototype, "castAbilities", null), e([y({
  readOnly: true
})], X.prototype, "content", void 0), e([y({
  readOnly: true
})], X.prototype, "contentViewModels", void 0), e([y()], X.prototype, "description", void 0), e([y({
  type: Boolean
})], X.prototype, "defaultPopupTemplateEnabled", void 0), e([y({
  readOnly: true
})], X.prototype, "isTable", null), e([y({
  readOnly: true
})], X.prototype, "state", null), e([y({
  readOnly: true
})], X.prototype, "formattedAttributes", void 0), e([y({
  type: d2,
  value: null
})], X.prototype, "graphic", null), e([y({
  readOnly: true
})], X.prototype, "lastEditInfo", void 0), e([y({
  type: _
})], X.prototype, "location", void 0), e([y({
  readOnly: true
})], X.prototype, "relatedInfos", void 0), e([y()], X.prototype, "spatialReference", null), e([y()], X.prototype, "timeZone", null), e([y({
  readOnly: true
})], X.prototype, "title", void 0), e([y()], X.prototype, "map", null), e([y({
  readOnly: true
})], X.prototype, "waitingForContent", null), e([y()], X.prototype, "view", void 0), X = G = e([a("esri.widgets.Feature.FeatureViewModel")], X);
var Y2 = X;

// ../../../node_modules/@arcgis/core/widgets/Feature/resources.js
var e8 = "esri-feature";
var t2 = {
  base: e8,
  container: `${e8}__size-container`,
  title: `${e8}__title`,
  main: `${e8}__main-container`,
  btn: `${e8}__button`,
  icon: `${e8}__icon`,
  content: `${e8}__content`,
  contentNode: `${e8}__content-node`,
  contentNodeText: `${e8}__content-node--text`,
  contentElement: `${e8}__content-element`,
  text: `${e8}__text`,
  lastEditedInfo: `${e8}__last-edited-info`,
  fields: `${e8}__fields`,
  fieldHeader: `${e8}__field-header`,
  fieldData: `${e8}__field-data`,
  fieldDataDate: `${e8}__field-data--date`,
  loadingSpinnerContainer: `${e8}__loading-container`
};

// ../../../node_modules/@arcgis/core/widgets/Feature/support/FeatureContentMixin.js
var n8 = (n9) => {
  let i3 = class extends n9 {
    constructor() {
      super(...arguments), this.renderNodeContent = (e9) => e6(e9) && !e9.destroyed ? n2("div", {
        class: t2.contentNode,
        key: e9
      }, e9.render()) : e9 instanceof HTMLElement ? n2("div", {
        afterCreate: this._attachToNode,
        bind: e9,
        class: t2.contentNode,
        key: e9
      }) : t(e9) ? n2("div", {
        afterCreate: this._attachToNode,
        bind: e9.domNode,
        class: t2.contentNode,
        key: e9
      }) : null;
    }
    _attachToNode(e9) {
      const o3 = this;
      e9.appendChild(o3);
    }
  };
  return i3 = e([a("esri.widgets.Feature.support.FeatureContentMixin")], i3), i3;
};

// ../../../node_modules/@arcgis/core/widgets/Feature.js
var b6;
var j3 = {
  title: true,
  content: true,
  lastEditedInfo: true
};
var C4 = "relationship-handles";
var F4 = b6 = class extends n8(B) {
  constructor(e9, t3) {
    super(e9, t3), this._contentWidgets = [], this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = __spreadValues({}, j3), this.viewModel = new Y2();
  }
  initialize() {
    this.addHandles(d(() => this.viewModel?.contentViewModels, () => this._setupContentWidgets(), P));
  }
  loadDependencies() {
    return r({
      notice: () => import("./calcite-notice-56I7IIQT.js"),
      loader: () => import("./calcite-loader-UGV3HF5I.js")
    });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e9) {
    this.viewModel.graphic = e9;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e9) {
    this.viewModel.defaultPopupTemplateEnabled = e9;
  }
  get isTable() {
    return this.viewModel.isTable;
  }
  get icon() {
    return "polygon";
  }
  set icon(e9) {
    this._overrideIfSome("icon", e9);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e9) {
    this._overrideIfSome("label", e9);
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e9) {
    this.viewModel.spatialReference = e9;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e9) {
    this.viewModel.timeZone = e9;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(e9) {
    return __spreadValues(__spreadValues({}, j3), e9);
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e9) {
    this.viewModel.map = e9;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e9) {
    this.viewModel.view = e9;
  }
  setActiveMedia(e9, t3) {
    return this.viewModel.setActiveMedia(e9, t3);
  }
  nextMedia(e9) {
    return this.viewModel.nextMedia(e9);
  }
  previousMedia(e9) {
    return this.viewModel.previousMedia(e9);
  }
  render() {
    const {
      state: e9
    } = this.viewModel, t3 = n2("div", {
      class: t2.container,
      key: "container"
    }, this._renderTitle(), "error" === e9 ? this._renderError() : "loading" === e9 ? this._renderLoading() : this._renderContentContainer());
    return n2("div", {
      class: this.classes(t2.base, e4.widget)
    }, t3);
  }
  _renderError() {
    const {
      messagesCommon: e9,
      messages: t3,
      visibleElements: s9
    } = this;
    return n2("calcite-notice", {
      icon: "exclamation-mark-circle",
      kind: "danger",
      open: true,
      scale: "s"
    }, s9.title ? n2("div", {
      key: "error-title",
      slot: "title"
    }, e9.errorMessage) : null, n2("div", {
      key: "error-message",
      slot: "message"
    }, t3.loadingError));
  }
  _renderLoading() {
    return n2("div", {
      class: t2.loadingSpinnerContainer,
      key: "loading-container"
    }, n2("calcite-loader", {
      inline: true,
      label: ""
    }));
  }
  _renderContentContainer() {
    const {
      visibleElements: e9
    } = this;
    return e9.content ? n2("div", {
      class: t2.main
    }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const {
      visibleElements: e9,
      title: t3
    } = this;
    return e9.title ? n2(e5, {
      class: t2.title,
      innerHTML: t3,
      level: this.headingLevel
    }) : null;
  }
  _renderContent() {
    const e9 = this.viewModel.content, t3 = "content";
    if (!e9) return null;
    if (Array.isArray(e9)) return e9.length ? n2("div", {
      class: t2.contentNode,
      key: `${t3}-content-elements`
    }, e9.map(this._renderContentElement, this)) : null;
    if ("string" == typeof e9) {
      const e10 = this._contentWidgets[0];
      return !e10 || e10.destroyed ? null : n2("div", {
        class: this.classes(t2.contentNode, t2.contentNodeText),
        key: `${t3}-content`
      }, e10.render());
    }
    return this.renderNodeContent(e9);
  }
  _renderContentElement(e9, t3) {
    const {
      visibleElements: s9
    } = this;
    if ("boolean" != typeof s9.content && !s9.content?.[e9.type]) return null;
    switch (e9.type) {
      case "attachments":
        return this._renderAttachments(t3);
      case "custom":
        return this._renderCustom(e9, t3);
      case "fields":
        return this._renderFields(t3);
      case "media":
        return this._renderMedia(t3);
      case "text":
        return this._renderText(e9, t3);
      case "expression":
        return this._renderExpression(t3);
      case "relationship":
        return this._renderRelationship(t3);
      default:
        return null;
    }
  }
  _renderAttachments(e9) {
    const t3 = this._contentWidgets[e9];
    if (!t3 || t3.destroyed) return null;
    const {
      state: s9,
      attachmentInfos: i3
    } = t3.viewModel;
    return "loading" === s9 || i3.length > 0 ? n2("div", {
      class: this.classes(t2.contentElement),
      key: this._buildKey("attachments-element", e9)
    }, t3.render()) : null;
  }
  _renderRelationship(e9) {
    const t3 = this._contentWidgets[e9];
    return t3 && !t3.destroyed && this.flowItems ? n2("div", {
      class: t2.contentElement,
      key: this._buildKey("relationship-element", e9)
    }, t3.render()) : null;
  }
  _renderExpression(e9) {
    const t3 = this._contentWidgets[e9];
    return !t3 || t3.destroyed ? null : n2("div", {
      class: t2.contentElement,
      key: this._buildKey("expression-element", e9)
    }, t3.render());
  }
  _renderCustom(e9, t3) {
    const {
      creator: s9
    } = e9, i3 = this._contentWidgets[t3];
    return !i3 || i3.destroyed ? null : s9 ? n2("div", {
      class: t2.contentElement,
      key: this._buildKey("custom-element", t3)
    }, i3.render()) : null;
  }
  _renderFields(e9) {
    const t3 = this._contentWidgets[e9];
    return !t3 || t3.destroyed ? null : n2("div", {
      class: t2.contentElement,
      key: this._buildKey("fields-element", e9)
    }, t3.render());
  }
  _renderMedia(e9) {
    const t3 = this._contentWidgets[e9];
    return !t3 || t3.destroyed ? null : n2("div", {
      class: t2.contentElement,
      key: this._buildKey("media-element", e9)
    }, t3.render());
  }
  _renderLastEditInfo() {
    const {
      visibleElements: e9,
      messages: t3
    } = this, {
      lastEditInfo: s9
    } = this.viewModel;
    if (!s9 || !e9.lastEditedInfo) return null;
    const {
      date: i3,
      user: n9
    } = s9, r3 = "edit" === s9.type ? n9 ? t3.lastEditedByUser : t3.lastEdited : n9 ? t3.lastCreatedByUser : t3.lastCreated, o3 = s4(r3, {
      date: i3,
      user: n9
    });
    return n2("div", {
      class: this.classes(t2.lastEditedInfo, t2.contentElement),
      key: "edit-info-element"
    }, o3);
  }
  _renderText(e9, t3) {
    const s9 = e9.text, i3 = this._contentWidgets[t3];
    return !i3 || i3.destroyed ? null : s9 ? n2("div", {
      class: this.classes(t2.contentElement, t2.text),
      key: this._buildKey("text-element", t3)
    }, i3.render()) : null;
  }
  _buildKey(e9, ...t3) {
    return `${e9}__${this.viewModel?.graphic?.uid || "0"}-${t3.join("-")}`;
  }
  _destroyContentWidget(e9) {
    e9 && (e9.viewModel = null, !e9.destroyed && e9.destroy());
  }
  _destroyContentWidgets() {
    this.removeHandles(C4), this._contentWidgets.forEach((e9) => this._destroyContentWidget(e9)), this._contentWidgets = [];
  }
  _addFeatureRelationshipHandles(e9) {
    const {
      flowItems: t3,
      visibleElements: i3
    } = this;
    this.addHandles([v2(() => e9, "select-record", ({
      featureViewModel: e10
    }) => {
      t3 && (e10.abilities = {
        relationshipContent: true
      }, t3.push(new b6({
        flowItems: t3,
        viewModel: e10,
        visibleElements: i3
      })));
    }), v2(() => e9, "show-all-records", () => {
      if (!t3) return;
      const {
        viewModel: s9
      } = e9;
      s9.showAllEnabled = true;
      const i4 = new I6({
        visibleElements: {
          title: false,
          description: false
        },
        viewModel: s9
      });
      this._addFeatureRelationshipHandles(i4), t3.push(i4);
    })], C4);
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const {
      headingLevel: e9,
      visibleElements: t3
    } = this, s9 = this.viewModel?.content, {
      contentViewModels: i3
    } = this.viewModel;
    if (Array.isArray(s9)) s9.forEach((s10, n9) => {
      if ("attachments" === s10.type && (this._contentWidgets[n9] = new c5({
        displayType: s10.displayType,
        headingLevel: t3.title && e9 < 6 ? e9 + 1 : e9,
        viewModel: i3[n9]
      })), "fields" === s10.type && (this._contentWidgets[n9] = new h3({
        viewModel: i3[n9]
      })), "media" === s10.type && (this._contentWidgets[n9] = new b4({
        viewModel: i3[n9]
      })), "text" === s10.type && (this._contentWidgets[n9] = new p4({
        viewModel: i3[n9]
      })), "custom" === s10.type && (this._contentWidgets[n9] = new p4({
        viewModel: i3[n9]
      })), "expression" === s10.type && (this._contentWidgets[n9] = new h5({
        viewModel: i3[n9]
      })), "relationship" === s10.type) {
        const e10 = new I6({
          viewModel: i3[n9]
        });
        this._addFeatureRelationshipHandles(e10), this._contentWidgets[n9] = e10;
      }
    }, this);
    else {
      const e10 = i3[0];
      e10 && !e10.destroyed && (this._contentWidgets[0] = new p4({
        viewModel: e10
      }));
    }
    this.scheduleRender();
  }
};
e([y()], F4.prototype, "graphic", null), e([y()], F4.prototype, "defaultPopupTemplateEnabled", null), e([y()], F4.prototype, "flowItems", void 0), e([y()], F4.prototype, "headingLevel", void 0), e([y({
  readOnly: true
})], F4.prototype, "isTable", null), e([y()], F4.prototype, "icon", null), e([y()], F4.prototype, "label", null), e([y(), e2("esri/widgets/Feature/t9n/Feature")], F4.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], F4.prototype, "messagesCommon", void 0), e([y()], F4.prototype, "spatialReference", null), e([y()], F4.prototype, "timeZone", null), e([y({
  readOnly: true
})], F4.prototype, "title", null), e([y()], F4.prototype, "visibleElements", void 0), e([s3("visibleElements")], F4.prototype, "castVisibleElements", null), e([y()], F4.prototype, "map", null), e([y()], F4.prototype, "view", null), e([y({
  type: Y2
})], F4.prototype, "viewModel", void 0), F4 = b6 = e([a("esri.widgets.Feature")], F4);
var W2 = F4;

export {
  Y2 as Y,
  t2 as t,
  n8 as n,
  W2 as W
};
//# sourceMappingURL=chunk-H32YBWKM.js.map
