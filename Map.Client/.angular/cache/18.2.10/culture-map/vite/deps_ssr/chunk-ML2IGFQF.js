import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f as f6,
  g,
  p
} from "./chunk-PW54Q6GB.js";
import {
  a as a3,
  c,
  n as n5,
  r
} from "./chunk-727KBFZ6.js";
import {
  t as t3
} from "./chunk-JPJAW3N6.js";
import {
  n as n6
} from "./chunk-LUORW76W.js";
import {
  e as e5
} from "./chunk-5L5LGHM5.js";
import {
  t as t2
} from "./chunk-LTKDZMRF.js";
import {
  i as i3
} from "./chunk-YEDQK53F.js";
import {
  e as e4
} from "./chunk-FYGR4X6I.js";
import {
  t
} from "./chunk-N6MF4TGQ.js";
import {
  f as f5,
  i as i2,
  s as s5
} from "./chunk-FDI2X6GO.js";
import {
  i
} from "./chunk-DXIKKLD7.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import {
  k as k2
} from "./chunk-KYPTWEOO.js";
import {
  n as n4
} from "./chunk-ZREJ3Y2F.js";
import {
  m3 as m
} from "./chunk-YBUJLIWZ.js";
import {
  S as S2
} from "./chunk-IUPJR3FF.js";
import {
  d as d2
} from "./chunk-OYIDHTXG.js";
import {
  s as s4
} from "./chunk-ASCK5HJ5.js";
import {
  j as j2
} from "./chunk-MRPCXIVS.js";
import {
  B,
  e2 as e3
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import {
  A as A2,
  b as b2,
  k
} from "./chunk-ODFKYX74.js";
import {
  s as s3
} from "./chunk-THZPD5CT.js";
import {
  h
} from "./chunk-OBCA6CWH.js";
import {
  j
} from "./chunk-2JI245BP.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  w as w2
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f as f4
} from "./chunk-ZDRQSPB6.js";
import {
  f as f3
} from "./chunk-AYL3HQHD.js";
import {
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  n as n3
} from "./chunk-GS7Y3YOG.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  f as f2
} from "./chunk-4AZPIP7K.js";
import {
  P,
  d,
  v as v2,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  o as o2
} from "./chunk-JAMSDYD6.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2,
  b
} from "./chunk-UDMPWVPF.js";
import {
  A,
  v
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  f,
  u
} from "./chunk-6WGE3IUL.js";
import {
  a,
  n2 as n,
  o,
  s,
  s2
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Search/css.js
var n7 = "esri-search";
var s6 = {
  base: n7,
  hasMultipleSources: `${n7}--multiple-sources`,
  isLoading: `${n7}--loading`,
  isSearching: `${n7}--searching`,
  showSuggestions: `${n7}--show-suggestions`,
  showSources: `${n7}--sources`,
  showWarning: `${n7}--warning`,
  container: `${n7}__container`,
  input: `${n7}__input`,
  inputContainer: `${n7}__input-container`,
  form: `${n7}__form`,
  submitButton: `${n7}__submit-button`,
  sourcesButton: `${n7}__sources-button`,
  sourcesButtonDown: `${n7}__sources-button--down`,
  sourcesButtonUp: `${n7}__sources-button--up`,
  clearButton: `${n7}__clear-button`,
  sourceName: `${n7}__source-name`,
  suggestionsMenu: `${n7}__suggestions-menu`,
  suggestionList: `${n7}__suggestions-list`,
  suggestionListCurrentLocation: `${n7}__suggestions-list--current-location`,
  sourcesMenu: `${n7}__sources-menu`,
  source: `${n7}__source`,
  warningMenu: `${n7}__warning-menu`,
  warningMenuBody: `${n7}__warning-body`,
  warningMenuHeader: `${n7}__warning-header`,
  warningMenuText: `${n7}__warning-text`,
  noValueText: `${n7}__no-value-text`
};

// ../../../node_modules/@arcgis/core/widgets/Search/searchResultRendererCSS.js
var e6 = "esri-search-result-renderer";
var s7 = {
  base: e6,
  showMoreResults: `${e6}__more-results--show-more-results`,
  moreResults: `${e6}__more-results`,
  moreResultsList: `${e6}__more-results-list`,
  moreResultsHeader: `${e6}__more-results-header`,
  moreResultsItem: `${e6}__more-results-item`,
  moreResultsListHeader: `${e6}__more-results-list-header`
};

// ../../../node_modules/@arcgis/core/widgets/Search/SearchSource.js
var p2 = class extends s4(f2) {
  constructor(o4) {
    super(o4), this.autoNavigate = null, this.filter = null, this.getResults = null, this.getSuggestions = null, this.maxResults = null, this.maxSuggestions = null, this.minSuggestCharacters = null, this.outFields = null, this.placeholder = "", this.popupEnabled = null, this.popupTemplate = null, this.prefix = "", this.resultGraphicEnabled = null, this.resultSymbol = null, this.suggestionsEnabled = null, this.suffix = "", this.withinViewEnabled = false, this.zoomScale = null;
  }
};
e2([y()], p2.prototype, "autoNavigate", void 0), e2([y()], p2.prototype, "filter", void 0), e2([y()], p2.prototype, "getResults", void 0), e2([y()], p2.prototype, "getSuggestions", void 0), e2([y()], p2.prototype, "maxResults", void 0), e2([y()], p2.prototype, "maxSuggestions", void 0), e2([y()], p2.prototype, "minSuggestCharacters", void 0), e2([y()], p2.prototype, "outFields", void 0), e2([y()], p2.prototype, "placeholder", void 0), e2([y()], p2.prototype, "popupEnabled", void 0), e2([y()], p2.prototype, "popupTemplate", void 0), e2([y()], p2.prototype, "prefix", void 0), e2([y()], p2.prototype, "resultGraphicEnabled", void 0), e2([y()], p2.prototype, "resultSymbol", void 0), e2([y()], p2.prototype, "suggestionsEnabled", void 0), e2([y()], p2.prototype, "suffix", void 0), e2([y()], p2.prototype, "withinViewEnabled", void 0), e2([y()], p2.prototype, "zoomScale", void 0), p2 = e2([a2("esri.widgets.Search.SearchSource")], p2);
var r2 = p2;

// ../../../node_modules/@arcgis/core/widgets/Search/support/layerSearchUtils.js
var d4 = /https?:\/\/services.*\.arcgis\.com/i;
var f7 = /(?:\{([^}]+)\})/g;
var m2 = () => n.getLogger("esri.widgets.Search.support.layerSearchUtils");
function p3(t4, r3) {
  const {
    exactMatch: i7 = false,
    location: l4,
    maxResults: o4,
    spatialReference: s8,
    source: u3,
    sourceIndex: a7,
    suggestResult: c5,
    view: d9
  } = t4, {
    layer: f11,
    filter: p6,
    zoomScale: g4
  } = u3, b5 = d9?.scale, L2 = y2(u3, d9), R2 = r3?.signal;
  return F(f11).then(() => {
    const e9 = f11.popupTemplate;
    return e9 ? e9.getRequiredFields(f11.fieldsIndex) : null;
  }).then((t5) => {
    const {
      objectIdField: r4,
      returnZ: y5
    } = f11, F2 = S3(u3);
    if (!I(f11, F2)) throw m2().error("invalid-field: displayField is invalid."), new s2("getResults():invalid-field", "displayField is invalid.");
    const C4 = t5?.length ? t5 : [F2], E3 = u3.outFields || C4, D2 = h2(E3);
    E3.includes(r4) || D2 || E3.push(r4), f11.floorInfo?.floorField && E3.push(f11.floorInfo.floorField);
    if (!(D2 || j3(f11, E3))) throw m2().error("invalid-field: outField is invalid."), new s2("getResults():invalid-field", "outField is invalid.");
    const A4 = f11.createQuery(), {
      orderByFields: N2
    } = u3;
    if (N2 && (A4.orderByFields = N2), s8) {
      A4.outSpatialReference = s8;
      const e9 = 1 / W(s8);
      e9 && (A4.maxAllowableOffset = e9);
    }
    const k4 = "mesh" === f11.geometryType || "multipatch" === f11.geometryType, O3 = f11.capabilities?.data?.supportsZ && !k4;
    if (A4.returnZ = O3 && false !== y5, A4.returnGeometry = true, A4.multipatchOption = k4 ? "xyFootprint" : null, E3 && (A4.outFields = E3), l4) A4.geometry = l4;
    else if (c5.key) A4.objectIds = [c5.key];
    else {
      const t6 = u3.searchFields || [F2];
      if (!j3(f11, t6)) throw m2().error("invalid-field: search field is invalid."), new s2("getResults():invalid-field", "search field is invalid.");
      T(f11) && (A4.num = o4), L2 && (A4.geometry = L2);
      const r5 = c5.text?.trim();
      if (!r5) return [];
      const n13 = c5.text, {
        prefix: l5 = "",
        suffix: s9 = ""
      } = u3, a8 = q(`${l5}${n13}${s9}`);
      $(f11) && v3(f11, t6) && !i7 && n13 && (A4.fullText = w3({
        text: n13,
        searchFields: t6
      }));
      const d10 = M({
        searchTerm: a8,
        layer: f11,
        searchFields: t6,
        filter: p6,
        exactMatch: i7,
        query: A4,
        type: "search"
      });
      if (A4.where = d10, !x(A4)) return [];
    }
    return f11.queryFeatures(A4, {
      signal: R2
    }).then((e9) => Z(e9, d9, u3, a7, F2, b5, g4));
  });
}
function g2(t4, r3) {
  const {
    source: i7,
    spatialReference: n13,
    view: l4,
    suggestTerm: o4,
    maxSuggestions: s8,
    sourceIndex: u3,
    exactMatch: a7
  } = t4, {
    layer: c5,
    filter: d9
  } = i7, p6 = r3?.signal, g4 = y2(i7, l4);
  return F(c5).then(() => {
    if (!T(c5)) return [];
    const t5 = S3(i7), r4 = i7.searchFields || [t5], l5 = [];
    i7.suggestionTemplate ? i7.suggestionTemplate.replaceAll(f7, (e9, t6) => (l5.push(t6), e9)) : l5.push(t5);
    const y5 = h2(l5);
    l5.includes(c5.objectIdField) || y5 || l5.push(c5.objectIdField);
    const F2 = I(c5, t5), b5 = y5 || j3(c5, l5), L2 = j3(c5, r4);
    if (!F2) throw m2().error("invalid-field: displayField is invalid."), new s2("getSuggestions():invalid-field", "displayField is invalid.");
    if (!b5) throw m2().error("invalid-field: outField is invalid."), new s2("getSuggestions():invalid-field", "outField is invalid.");
    if (!L2) throw m2().error("invalid-field: search field is invalid."), new s2("getSuggestions():invalid-field", "search field is invalid.");
    const R2 = c5.createQuery(), {
      orderByFields: C4
    } = i7;
    C4 && (R2.orderByFields = C4), R2.outSpatialReference = n13, R2.returnGeometry = false, R2.num = s8, R2.outFields = l5, g4 && (R2.geometry = g4);
    if (!o4.trim()) return [];
    const {
      prefix: E3 = "",
      suffix: D2 = ""
    } = i7, A4 = q(`${E3}${o4}${D2}`);
    $(c5) && v3(c5, r4) && !a7 && o4 && (R2.fullText = w3({
      text: o4,
      searchFields: r4
    }));
    const N2 = M({
      searchTerm: A4,
      layer: c5,
      searchFields: r4,
      filter: d9,
      exactMatch: a7,
      query: R2,
      type: "suggest"
    });
    return R2.where = N2, x(R2) ? c5.queryFeatures(R2, {
      signal: p6
    }).then((e9) => B2(e9, i7, u3, t5)) : [];
  });
}
function y2(e9, t4) {
  const {
    filter: r3,
    withinViewEnabled: i7
  } = e9, n13 = t4?.extent, l4 = r3?.geometry;
  return l4 ?? (i7 && n13 ? n13 : void 0);
}
function h2(e9) {
  return e9 && e9.includes("*");
}
function F(e9) {
  return __async(this, null, function* () {
    e9 && (yield e9.load());
  });
}
function x(e9) {
  return !(!e9.fullText && !e9.where);
}
function v3(e9, t4) {
  const r3 = e9?.indexes;
  if (!r3 || !t4?.length) return false;
  return r3.filter((e10) => "FullText" === e10.indexType).some((e10) => {
    const r4 = e10.fields?.split(",").map((e11) => e11.trim().toLowerCase()) || [];
    return t4.every((e11) => r4.includes(e11.toLowerCase()));
  });
}
function w3({
  text: e9,
  searchFields: t4
}) {
  return e9.trim().split(" ").filter((e10) => !!e10.trim()).map((e10) => new i({
    onFields: t4,
    searchTerm: e10,
    searchType: "prefix"
  }));
}
function $(e9) {
  return e9?.capabilities?.query?.supportsFullTextSearch ?? false;
}
function T(e9) {
  return e9?.capabilities?.query?.supportsPagination ?? false;
}
function b3(e9) {
  return e9?.fieldsIndex?.fields?.find((e10) => "string" === e10.type)?.name ?? "";
}
function S3(e9) {
  return e9.displayField || e9.layer.displayField || b3(e9.layer);
}
function j3(e9, t4) {
  return !(!e9 || !t4?.length) && t4.every((t5) => I(e9, t5));
}
function I(e9, t4) {
  return !!e9.getField(t4);
}
function L(e9) {
  for (let t4 = 0; t4 < e9.length; t4++) if (e9.charCodeAt(t4) > 255) return true;
  return false;
}
function R({
  codedValues: e9
}, t4, r3) {
  return f(e9 ?? [], (e10) => {
    const i7 = e10.name, n13 = r3 ? i7 : i7.toLowerCase();
    return (r3 ? t4 : t4.toLowerCase()) === n13 ? e10.code.toString() : null;
  }) ?? null;
}
function q(e9) {
  return e9.replaceAll("'", "''");
}
function C2(e9, t4) {
  const r3 = t4?.where;
  return r3 ? `(${e9}) AND (${r3})` : e9;
}
function E({
  currentTerm: e9,
  field: t4,
  filter: r3,
  exactMatch: i7,
  url: n13,
  type: l4
}) {
  const o4 = t4?.type, s8 = t4?.name;
  if ("string" === o4 || "date" === o4 || "global-id" === o4) {
    const t5 = d4.test(n13 ?? ""), o5 = t5 && L(e9) ? "N" : "";
    if (i7 && "search" === l4) return C2(`${s8} = ${o5}'${e9}'`, r3);
    if (t5) {
      return C2(`${s8} LIKE ${o5}${`'${e9}%'`}`, r3);
    }
    return C2(`${`LOWER(${s8})`} LIKE ${o5}${`'${e9.toLowerCase()}%'`}`, r3);
  }
  if ("oid" === o4 || "small-integer" === o4 || "integer" === o4 || "single" === o4 || "double" === o4) {
    const t5 = Number(e9);
    return isNaN(t5) ? null : C2(`${s8} = ${t5}`, r3);
  }
  return C2(`${s8} = ${e9}`, r3);
}
function D(e9, t4) {
  return e9 ? ` OR (${t4})` : `(${t4})`;
}
function M({
  searchTerm: e9,
  layer: t4,
  searchFields: r3,
  filter: i7,
  exactMatch: n13,
  query: l4,
  type: o4
}) {
  const {
    definitionExpression: s8,
    url: u3
  } = t4;
  let a7 = "";
  return !l4.fullText && e9 && r3 && r3.forEach((r4) => {
    const l5 = t4.getField(r4), s9 = "function" == typeof t4.getFieldDomain && t4.getFieldDomain(r4), c5 = (s9 && "coded-value" === s9.type ? R(s9, e9, n13) : null) || e9 || null;
    if (null !== c5) {
      const e10 = E({
        currentTerm: c5,
        field: l5,
        filter: i7,
        exactMatch: n13,
        url: u3,
        type: o4
      });
      e10 && (a7 += D(a7, e10));
    }
  }), s8 && a7 ? `(${s8}) AND (${a7})` : s8 || a7;
}
function A3(e9, t4) {
  let r3 = null;
  const {
    codedValues: i7
  } = e9;
  return i7 && i7.length && i7.some((e10) => e10.code === t4 && (r3 = e10.name, true)), r3;
}
function N(e9, t4) {
  return e9[t4] ?? e9[Object.keys(e9).find((e10) => e10.toLowerCase() === t4.toLowerCase())];
}
function k3(e9, t4, r3) {
  const i7 = e9.sourceLayer, {
    attributes: n13
  } = e9, l4 = "function" == typeof i7.getFieldDomain && i7.getFieldDomain(r3);
  if (t4) return s3(t4, n13);
  if (r3 && n13) {
    const e10 = i7.getField(r3), t5 = N(n13, r3);
    return null == t5 ? "" : l4 && "coded-value" === l4.type ? A3(l4, t5) ?? "" : "date" === e10?.type ? j(new Date(t5)) : "number" == typeof t5 ? t5.toString() : "string" != typeof t5 ? "" : t5.trim();
  }
  return "";
}
function O2(e9, t4, r3, i7) {
  const n13 = e9.sourceLayer, {
    attributes: l4
  } = e9, {
    objectIdField: o4
  } = n13, s8 = o4 ? l4[o4] : null;
  return {
    text: k3(e9, t4.suggestionTemplate, i7),
    key: s8,
    sourceIndex: r3
  };
}
function B2(e9, t4, r3, i7) {
  return e9.features.map((e10) => O2(e10, t4, r3, i7));
}
function U2(e9) {
  return null != e9 && null != e9.minScale && null != e9.maxScale;
}
function V2(e9, r3, i7, n13, u3, a7, c5) {
  const d9 = e9.clone(), f11 = e9.sourceLayer, m4 = f11?.objectIdField, p6 = m4 ? e9.attributes[m4] : null, g4 = k3(e9, i7.searchTemplate, u3);
  null != a7 && U2(f11) && (f11.minScale && f11.minScale < a7 ? a7 = f11.minScale : f11.maxScale && f11.maxScale > a7 && (a7 = f11.maxScale));
  const y5 = d9.geometry ? c(d9.geometry, r3 ?? void 0, a7 ?? void 0) : void 0, h5 = "number" == typeof c5 && y5 ? a3(a(y5), r3 ?? void 0, c5) : y5, F2 = e9.clone();
  return null != h5 && (F2.geometry = j2.fromExtent(h5)), {
    extent: h5,
    target: F2,
    feature: d9,
    key: p6,
    name: g4,
    sourceIndex: n13
  };
}
function Z(e9, t4, r3, i7, n13, l4, o4) {
  return e9.features.map((e10) => V2(e10, t4, r3, i7, n13, l4, o4));
}

// ../../../node_modules/@arcgis/core/widgets/Search/LayerSearchSource.js
var o3;
var h3 = o3 = class extends r2 {
  constructor(e9) {
    super(e9), this.displayField = null, this.exactMatch = null, this.orderByFields = null, this.searchFields = null, this.searchTemplate = null, this.suggestionTemplate = null, this.getResults = (e10, t4) => p3(__spreadValues({
      source: this
    }, e10), t4), this.getSuggestions = (e10, t4) => g2(__spreadValues({
      source: this
    }, e10), t4);
  }
  set layer(e9) {
    this._set("layer", e9), e9 && e9.load().catch(() => {
    });
  }
  get name() {
    return this._getLayerTitle() ?? "";
  }
  set name(e9) {
    this._overrideIfSome("name", e9);
  }
  clone() {
    return new o3({
      autoNavigate: this.autoNavigate,
      filter: this.filter,
      maxResults: this.maxResults,
      maxSuggestions: this.maxSuggestions,
      minSuggestCharacters: this.minSuggestCharacters,
      outFields: this.outFields ? a(this.outFields) : null,
      placeholder: this.placeholder,
      popupEnabled: this.popupEnabled,
      prefix: this.prefix,
      resultGraphicEnabled: this.resultGraphicEnabled,
      resultSymbol: this.resultSymbol ? this.resultSymbol.clone() : null,
      suggestionsEnabled: this.suggestionsEnabled,
      suffix: this.suffix,
      withinViewEnabled: this.withinViewEnabled,
      displayField: this.displayField,
      exactMatch: this.exactMatch,
      layer: this.layer,
      searchFields: this.searchFields ? a(this.searchFields) : null,
      suggestionTemplate: this.suggestionTemplate,
      zoomScale: this.zoomScale
    });
  }
  _getFirstStringField() {
    return this.layer.fieldsIndex?.fields.find((e9) => "string" === e9.type)?.name ?? "";
  }
  _getDisplayField() {
    return this.displayField || this.layer.displayField || this._getFirstStringField();
  }
  _getSearchFieldsString() {
    const {
      layer: e9,
      searchFields: t4
    } = this;
    if (!e9.loaded) return "";
    return `: ${(t4 || [this._getDisplayField()]).map((t5) => {
      const s8 = e9.getField(t5);
      return s8?.alias || t5;
    }).join(", ")}`;
  }
  _getLayerTitle() {
    const {
      layer: e9
    } = this;
    if (!e9) return;
    const {
      title: t4
    } = e9;
    return t4 ? `${t4}${this._getSearchFieldsString()}` : void 0;
  }
};
e2([y({
  json: {
    read: {
      source: "field.name"
    },
    write: {
      target: "field.name"
    }
  }
})], h3.prototype, "displayField", void 0), e2([y({
  json: {
    read: {
      source: "field.exactMatch"
    },
    write: {
      target: "field.exactMatch"
    }
  }
})], h3.prototype, "exactMatch", void 0), e2([y({
  value: null
})], h3.prototype, "layer", null), e2([y()], h3.prototype, "name", null), e2([y({
  type: [String],
  json: {
    write: true
  }
})], h3.prototype, "orderByFields", void 0), e2([y()], h3.prototype, "searchFields", void 0), e2([y()], h3.prototype, "searchTemplate", void 0), e2([y()], h3.prototype, "suggestionTemplate", void 0), h3 = o3 = e2([a2("esri.widgets.Search.LayerSearchSource")], h3);
var n8 = h3;

// ../../../node_modules/@arcgis/core/rest/locator/utils.js
function e7(e9) {
  return !!e9 && "number" == typeof e9.x && "number" == typeof e9.y;
}
function n9(e9) {
  return e9 && "number" == typeof e9.xmin && "number" == typeof e9.ymin && "number" == typeof e9.xmax && "number" == typeof e9.ymax;
}

// ../../../node_modules/@arcgis/core/rest/support/AddressCandidate.js
var i4 = class extends f2 {
  constructor(t4) {
    super(t4), this.address = null, this.attributes = null, this.extent = null, this.location = null, this.score = null;
  }
};
e2([y({
  type: String,
  json: {
    write: true
  }
})], i4.prototype, "address", void 0), e2([y({
  type: Object,
  json: {
    write: true
  }
})], i4.prototype, "attributes", void 0), e2([y({
  type: w2,
  json: {
    write: true
  }
})], i4.prototype, "extent", void 0), e2([y({
  type: _,
  json: {
    write: true
  }
})], i4.prototype, "location", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], i4.prototype, "score", void 0), i4 = e2([a2("esri.rest.support.AddressCandidate")], i4);
var c2 = i4;

// ../../../node_modules/@arcgis/core/rest/support/AddressToLocationsParameters.js
var l = class extends f2 {
  constructor(o4) {
    super(o4), this.address = null, this.apiKey = null, this.categories = null, this.countryCode = null, this.forStorage = null, this.location = null, this.locationType = null, this.magicKey = null, this.maxLocations = null, this.outFields = null, this.outSpatialReference = null, this.searchExtent = null;
  }
};
e2([y({
  type: Object,
  json: {
    write: true
  }
})], l.prototype, "address", void 0), e2([y(t)], l.prototype, "apiKey", void 0), e2([y({
  type: [String],
  json: {
    read: {
      source: "category",
      reader: (o4) => o4 ? o4.split(",") : null
    },
    write: {
      target: "category",
      writer: (o4, t4) => {
        t4.category = o4 ? o4.join(",") : null;
      }
    }
  }
})], l.prototype, "categories", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "countryCode", void 0), e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], l.prototype, "forStorage", void 0), e2([y({
  type: _,
  json: {
    write: {
      writer: (o4, t4) => {
        t4.location = o4 ? o4.clone().normalize() : null;
      }
    }
  }
})], l.prototype, "location", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "locationType", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "magicKey", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], l.prototype, "maxLocations", void 0), e2([y({
  type: [String],
  json: {
    write: {
      writer: (o4, t4) => {
        t4.outFields = o4 ? o4.join(",") : null;
      }
    }
  }
})], l.prototype, "outFields", void 0), e2([y({
  type: f4,
  json: {
    read: {
      source: "outSR"
    },
    write: {
      target: "outSR"
    }
  }
})], l.prototype, "outSpatialReference", void 0), e2([y({
  type: w2,
  json: {
    write: {
      writer: (o4, t4) => {
        const e9 = o4 ? o4.shiftCentralMeridian() : null;
        t4.searchExtent = e9;
      }
    }
  }
})], l.prototype, "searchExtent", void 0), l = e2([a2("esri.rest.support.AddressToLocationsParameters")], l), l.from = b(l);
var c3 = l;

// ../../../node_modules/@arcgis/core/rest/locator/addressToLocations.js
function d5(o4, n13, a7) {
  return __async(this, null, function* () {
    n13 = c3.from(n13);
    const d9 = f5(o4), _a = n13.toJSON(), {
      address: p6
    } = _a, m4 = __objRest(_a, [
      "address"
    ]), u3 = __spreadProps(__spreadValues(__spreadValues({}, p6), m4), {
      f: "json"
    }), c5 = s5(__spreadValues(__spreadValues({}, d9.query), u3)), j5 = i2(c5, a7), l4 = `${d9.path}/findAddressCandidates`;
    return U(l4, j5).then(f8);
  });
}
function f8({
  data: r3
}) {
  if (!r3) return [];
  const {
    candidates: t4,
    spatialReference: e9
  } = r3;
  return t4 ? t4.map((r4) => {
    if (!r4) return;
    const {
      extent: t5,
      location: s8
    } = r4, i7 = !t5 || n9(t5);
    return e7(s8) && i7 ? (t5 && (t5.spatialReference = e9), s8 && (s8.spatialReference = e9), c2.fromJSON(r4)) : void 0;
  }) : [];
}

// ../../../node_modules/@arcgis/core/rest/support/LocationToAddressParameters.js
var a4 = class extends f2 {
  constructor(o4) {
    super(o4), this.apiKey = null, this.location = null, this.locationType = null, this.outSpatialReference = null;
  }
};
e2([y(t)], a4.prototype, "apiKey", void 0), e2([y({
  type: _,
  json: {
    write: {
      writer: (o4, r3) => {
        const t4 = o4 ? o4.clone().normalize() : null, e9 = void 0 !== t4;
        r3.location = e9 ? t4 : null;
      }
    }
  }
})], a4.prototype, "location", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "locationType", void 0), e2([y({
  type: f4,
  json: {
    read: {
      source: "outSR"
    },
    write: {
      target: "outSR"
    }
  }
})], a4.prototype, "outSpatialReference", void 0), a4 = e2([a2("esri.rest.support.LocationToAddressParameters")], a4), a4.from = b(a4);
var n10 = a4;

// ../../../node_modules/@arcgis/core/rest/locator/locationToAddress.js
function n11(e9, n13, i7) {
  return __async(this, null, function* () {
    n13 = n10.from(n13);
    const c5 = f5(e9), m4 = __spreadProps(__spreadValues({}, n13.toJSON()), {
      f: "json"
    }), u3 = s5(__spreadValues(__spreadValues({}, c5.query), m4)), f11 = i2(u3, i7), p6 = `${c5.path}/reverseGeocode`;
    return U(p6, f11).then(d6);
  });
}
function d6({
  data: r3
}) {
  if (!r3) return;
  const {
    address: o4,
    location: t4
  } = r3, s8 = o4?.Match_addr || "";
  return c2.fromJSON({
    address: s8,
    attributes: o4 || {},
    location: t4,
    score: 100
  });
}

// ../../../node_modules/@arcgis/core/rest/support/SuggestionCandidate.js
var e8 = class extends f2 {
  constructor(o4) {
    super(o4), this.isCollection = null, this.magicKey = null, this.text = null;
  }
};
e2([y({
  type: Boolean,
  json: {
    write: true
  }
})], e8.prototype, "isCollection", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], e8.prototype, "magicKey", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], e8.prototype, "text", void 0), e8 = e2([a2("esri.rest.support.SuggestionCandidate")], e8);
var i5 = e8;

// ../../../node_modules/@arcgis/core/rest/support/SuggestLocationsParameters.js
var c4 = class extends f2 {
  constructor(t4) {
    super(t4), this.apiKey = null, this.categories = null, this.countryCode = null, this.location = null, this.maxSuggestions = null, this.outSpatialReference = null, this.searchExtent = null, this.text = null;
  }
};
e2([y(t)], c4.prototype, "apiKey", void 0), e2([y({
  type: [String],
  json: {
    read: {
      source: "category",
      reader: (t4) => t4 ? t4.split(",") : null
    },
    write: {
      target: "category",
      writer: (t4, o4) => {
        o4.category = t4 ? t4.join(",") : null;
      }
    }
  }
})], c4.prototype, "categories", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], c4.prototype, "countryCode", void 0), e2([y({
  type: _,
  json: {
    write: {
      writer: (t4, o4) => {
        o4.location = t4 ? t4.clone().normalize() : null;
      }
    }
  }
})], c4.prototype, "location", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], c4.prototype, "maxSuggestions", void 0), e2([y({
  type: f4,
  json: {
    read: {
      source: "outSR"
    },
    write: {
      target: "outSR"
    }
  }
})], c4.prototype, "outSpatialReference", void 0), e2([y({
  type: w2,
  json: {
    write: {
      writer: (t4, o4) => {
        const e9 = t4 ? t4.shiftCentralMeridian() : null;
        o4.searchExtent = JSON.stringify(e9);
      }
    }
  }
})], c4.prototype, "searchExtent", void 0), e2([y({
  type: String,
  json: {
    write: true
  }
})], c4.prototype, "text", void 0), c4 = e2([a2("esri.rest.support.SuggestLocationsParameters")], c4), c4.from = b(c4);
var l2 = c4;

// ../../../node_modules/@arcgis/core/rest/locator/suggestLocations.js
function u2(n13, u3, m4) {
  return __async(this, null, function* () {
    const p6 = f5(n13), a7 = __spreadProps(__spreadValues({}, (u3 = l2.from(u3)).toJSON()), {
      f: "json"
    }), f11 = s5(__spreadValues(__spreadValues({}, p6.query), a7)), g4 = i2(f11, m4), c5 = `${p6.path}/suggest`;
    return U(c5, g4).then(i6);
  });
}
function i6(t4) {
  const {
    data: o4
  } = t4;
  if (!o4) return [];
  const {
    suggestions: r3
  } = o4;
  return r3 ? r3.map((t5) => new i5(t5)) : [];
}

// ../../../node_modules/@arcgis/core/widgets/Search/support/locatorUtils.js
var l3 = "Single Line Input";
var d7 = 3e5;
function m3(e9, t4) {
  return e9.location ? S4(e9, t4) : h4(e9, t4);
}
function f9(e9, t4) {
  if (t4.localSearchDisabled) return null;
  const o4 = e9?.scale;
  return "number" == typeof o4 && o4 <= d7 ? e9?.extent?.center : null;
}
function p4(e9, t4) {
  return __async(this, null, function* () {
    const {
      source: o4,
      spatialReference: r3,
      view: n13,
      suggestTerm: s8,
      maxSuggestions: c5,
      sourceIndex: a7
    } = e9, l4 = new l2(), {
      apiKey: d9,
      url: m4
    } = o4, p6 = w4(o4, n13), g4 = t4?.signal;
    if (!m4) return null;
    d9 && (l4.apiKey = d9), o4.categories && (l4.categories = o4.categories), r3 && (l4.outSpatialReference = r3);
    const y5 = f9(n13, o4);
    y5 && (l4.location = y5);
    if (!s8.trim()) return null;
    const {
      prefix: x4 = "",
      suffix: v5 = ""
    } = o4, S5 = `${x4}${s8}${v5}`;
    return l4.text = S5, p6 && (l4.searchExtent = p6), l4.maxSuggestions = c5, o4.countryCode && (l4.countryCode = o4.countryCode), u2(m4, l4, {
      signal: g4
    }).then((e10) => I2(e10, a7));
  });
}
function g3(e9) {
  return !!e9 && /(?:geocode-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(e9);
}
function y3(e9) {
  return !!e9 && /(?:\/servers\/[\da-z.-]+\/rest\/services\/world\/geocodeserver).*/i.test(e9);
}
function x2(e9) {
  return !!e9 && /(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/i.test(e9);
}
var v4 = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";
function S4(e9, t4) {
  return __async(this, null, function* () {
    const {
      source: o4,
      spatialReference: r3,
      location: n13,
      sourceIndex: i7,
      view: c5
    } = e9, {
      apiKey: u3,
      url: l4,
      zoomScale: d9,
      defaultZoomScale: m4
    } = o4;
    if (null == l4) return [];
    const f11 = c5?.scale, p6 = t4?.signal, g4 = new n10({
      location: n13
    });
    u3 && (g4.apiKey = u3), r3 && (g4.outSpatialReference = r3);
    try {
      return K([yield n11(l4, g4, {
        signal: p6
      })], {
        sourceIndex: i7,
        scale: f11,
        view: c5,
        zoomScale: d9,
        defaultZoomScale: m4
      });
    } catch (y5) {
      return [];
    }
  });
}
function w4(e9, t4) {
  const {
    filter: r3,
    withinViewEnabled: n13
  } = e9, s8 = t4?.scale, i7 = t4?.extent, c5 = r3?.geometry;
  return (c5 ? c(c5, t4 ?? void 0, s8) : void 0) || (n13 && i7 ? i7 : void 0);
}
function h4(e9, t4) {
  return __async(this, null, function* () {
    const {
      source: o4,
      suggestResult: r3,
      spatialReference: s8,
      view: i7,
      maxResults: a7,
      sourceIndex: u3
    } = e9, d9 = o4?.zoomScale, m4 = o4?.defaultZoomScale, p6 = r3.text?.trim();
    if (!p6) return null;
    const g4 = !r3.key && o4.prefix ? o4.prefix : "", y5 = !r3.key && o4.suffix ? o4.suffix : "", x4 = `${g4}${r3.text}${y5}`, v5 = new c3(), {
      apiKey: S5,
      url: h5
    } = o4, j5 = i7?.scale, I3 = w4(o4, i7), $3 = t4?.signal;
    if (S5 && (v5.apiKey = S5), !h5) return null;
    o4.categories && (v5.categories = o4.categories), o4.locationType && (v5.locationType = o4.locationType), s8 && (v5.outSpatialReference = s8);
    const L2 = f9(i7, o4);
    L2 && (v5.location = L2), v5.maxLocations = a7, I3 && (v5.searchExtent = I3), o4.countryCode && (v5.countryCode = o4.countryCode);
    const {
      key: R2
    } = r3, T3 = `${R2}`;
    return R2 && (v5.magicKey = T3), v5.address = {}, v5.address[o4.singleLineFieldName || l3] = x4, o4.outFields && (v5.outFields = o4.outFields), d5(h5, v5, {
      signal: $3
    }).then((e10) => K(e10, {
      key: T3,
      scale: j5,
      sourceIndex: u3,
      view: i7,
      zoomScale: d9,
      defaultZoomScale: m4
    }));
  });
}
function j4(e9, t4) {
  return {
    text: e9.text,
    key: e9.magicKey,
    sourceIndex: t4
  };
}
function I2(e9, t4) {
  return e9.map((e10) => j4(e10, t4));
}
function $2(n13, s8) {
  const {
    key: i7,
    scale: c5,
    sourceIndex: a7,
    view: u3,
    zoomScale: l4,
    defaultZoomScale: d9
  } = s8, {
    attributes: m4,
    extent: f11,
    location: p6,
    address: g4
  } = n13, y5 = new d3({
    geometry: p6,
    attributes: m4
  }), x4 = f11 || p6, v5 = x4 ? c(x4, u3 ?? void 0, c5 ?? void 0) : void 0, S5 = v5 ? "number" == typeof l4 ? a3(v5, u3 ?? void 0, l4) : "number" == typeof d9 && "point" === x4?.type ? a3(v5, u3 ?? void 0, d9) : v5 : null, w5 = p6 ? `${p6.x},${p6.y}` : "", h5 = g4 || w5, j5 = y5.clone();
  return null != S5 && (j5.geometry = j2.fromExtent(S5)), {
    extent: S5,
    feature: y5,
    target: j5,
    key: i7,
    name: h5,
    sourceIndex: a7
  };
}
function K(e9, t4) {
  return e9.filter(Boolean).map((e10) => $2(e10, t4));
}

// ../../../node_modules/@arcgis/core/widgets/Search/LocatorSearchSource.js
var a5;
var p5 = a5 = class extends r2 {
  constructor(e9) {
    super(e9), this.apiKey = null, this.categories = null, this.countryCode = null, this.defaultZoomScale = null, this.localSearchDisabled = false, this.locationType = null, this.name = "", this.placeholder = "", this.searchTemplate = "", this.singleLineFieldName = null, this.suggestionsEnabled = null, this.url = null, this.zoomScale = null, this.getResults = (e10, t4) => m3(__spreadValues({
      source: this
    }, e10), t4), this.getSuggestions = (e10, t4) => p4(__spreadValues({
      source: this
    }, e10), t4);
  }
  clone() {
    return new a5({
      apiKey: this.apiKey,
      autoNavigate: this.autoNavigate,
      filter: this.filter,
      maxResults: this.maxResults,
      maxSuggestions: this.maxSuggestions,
      minSuggestCharacters: this.minSuggestCharacters,
      outFields: this.outFields ? a(this.outFields) : null,
      placeholder: this.placeholder,
      popupEnabled: this.popupEnabled,
      prefix: this.prefix,
      resultGraphicEnabled: this.resultGraphicEnabled,
      resultSymbol: this.resultSymbol ? this.resultSymbol.clone() : null,
      suggestionsEnabled: this.suggestionsEnabled,
      suffix: this.suffix,
      withinViewEnabled: this.withinViewEnabled,
      categories: this.categories ? a(this.categories) : null,
      countryCode: this.countryCode,
      locationType: this.locationType,
      searchTemplate: this.searchTemplate,
      singleLineFieldName: this.singleLineFieldName,
      zoomScale: this.zoomScale
    });
  }
};
e2([y()], p5.prototype, "apiKey", void 0), e2([y()], p5.prototype, "categories", void 0), e2([y()], p5.prototype, "countryCode", void 0), e2([y({
  json: {
    write: true
  }
})], p5.prototype, "defaultZoomScale", void 0), e2([y()], p5.prototype, "localSearchDisabled", void 0), e2([y()], p5.prototype, "locationType", void 0), e2([y({
  json: {
    write: true
  }
})], p5.prototype, "name", void 0), e2([y({
  json: {
    write: true
  }
})], p5.prototype, "placeholder", void 0), e2([y()], p5.prototype, "searchTemplate", void 0), e2([y({
  json: {
    write: true
  }
})], p5.prototype, "singleLineFieldName", void 0), e2([y({
  json: {
    read: {
      source: "suggest"
    },
    write: {
      target: "suggest"
    }
  }
})], p5.prototype, "suggestionsEnabled", void 0), e2([y({
  json: {
    write: true
  }
})], p5.prototype, "url", void 0), e2([y({
  json: {
    write: true
  }
})], p5.prototype, "zoomScale", void 0), p5 = a5 = e2([a2("esri.widgets.Search.LocatorSearchSource")], p5);
var n12 = p5;

// ../../../node_modules/@arcgis/core/widgets/Search/SearchViewModel.js
function H(e9, t4) {
  return e9.hasOwnProperty(t4) && null != e9[t4] && "" !== e9[t4];
}
var U3 = () => h("esri/widgets/Search/t9n/Search");
var B3 = "highlight";
var Q = V.ofType({
  key: (e9) => e9.layer ? "layer" : "locator",
  base: r2,
  typeMap: {
    layer: n8,
    locator: n12
  }
});
var Z2 = f4.WGS84;
var q2 = "esri/images/search/search-symbol-32.png";
var z = /<[\s\S]*?>/g;
var K2 = -1;
var W2 = class extends t3(o2.EventedMixin(S)) {
  constructor(e9) {
    super(e9), this._gotoController = null, this._searching = null, this._updatingPromise = null, this._createdFeatureLayers = [], this.autoNavigate = true, this.autoSelect = true, this.defaultPopupTemplate = null, this.defaultSources = new Q(), this.defaultSymbols = {
      point: new n4({
        url: n3(q2),
        size: 24,
        width: 24,
        height: 24
      }),
      polyline: new d2({
        color: [130, 130, 130, 1],
        width: 2
      }),
      polygon: new S2({
        color: [235, 235, 235, 0.4],
        outline: {
          color: [130, 130, 130, 1],
          width: 2
        }
      })
    }, this.includeDefaultSources = true, this.maxInputLength = 128, this.maxResults = 6, this.maxSuggestions = 6, this.messages = null, this.minSuggestCharacters = 3, this.popupEnabled = true, this.popupTemplate = null, this.portal = C.getDefault(), this.resultCount = null, this.resultGraphicEnabled = true, this.resultGraphic = null, this.results = null, this.selectedSuggestion = null, this.searchAllEnabled = true, this.selectedResult = null, this.sources = new Q(), this.suggestionDelay = 350, this.suggestionCount = null, this.suggestions = null, this.suggestionsEnabled = true, this.view = null;
  }
  initialize() {
    const e9 = () => __async(this, null, function* () {
      const e10 = yield U3();
      this.messages = e10, this.defaultPopupTemplate = new k2({
        title: e10.searchResult,
        content: "{Match_addr}"
      });
    });
    e9(), this.addHandles([d(() => [this.includeDefaultSources, this.view, this.portal], () => this._update(), P), f3(e9)]);
  }
  destroy() {
    this._destroyFeatureLayers(), this._abortGoTo(), this.clearGraphics();
  }
  get activeSource() {
    return this.allSources.at(this.activeSourceIndex) ?? null;
  }
  get activeSourceIndex() {
    return 1 === this.allSources.length || !this.searchAllEnabled ? 0 : K2;
  }
  set activeSourceIndex(e9) {
    this._overrideIfSome("activeSourceIndex", e9);
  }
  get allPlaceholder() {
    return this.messages?.allPlaceholder;
  }
  set allPlaceholder(e9) {
    this._overrideIfSome("allPlaceholder", e9);
  }
  get allSources() {
    const {
      sources: e9,
      defaultSources: t4,
      includeDefaultSources: r3
    } = this, s8 = "function" == typeof r3 ? r3.call(null, {
      sources: e9,
      defaultSources: t4
    }) : r3 ? t4.concat(e9) : e9, o4 = this._get("allSources") || new Q();
    return o4.removeAll(), o4.addMany(s8.filter(Boolean)), o4;
  }
  get locationEnabled() {
    return this._get("locationEnabled") || g();
  }
  set locationEnabled(e9) {
    if (void 0 === e9) return void this._clearOverride("locationEnabled");
    const t4 = g();
    if (e9 && !t4) {
      const e10 = new s2("locationEnabled:geolocation-unsupported", "Geolocation API is unsupported.", {
        geolocation: navigator.geolocation
      });
      n.getLogger(this).error(e10);
    }
    this._override("locationEnabled", !!e9 && t4);
  }
  get placeholder() {
    const {
      allSources: e9,
      activeSourceIndex: t4,
      allPlaceholder: r3
    } = this;
    if (t4 === K2) return r3 ?? "";
    const s8 = e9.at(t4);
    return s8?.placeholder ?? "";
  }
  set searchTerm(e9) {
    this._set("searchTerm", e9 || ""), this.clearGraphics(), this.selectedSuggestion && this.selectedSuggestion.text !== e9 && this._set("selectedSuggestion", null), "" === e9 && this._clear();
  }
  get searchTerm() {
    return this._get("searchTerm") || "";
  }
  get state() {
    return this._searching ? "searching" : this.updating ? "loading" : 0 === this.allSources.length ? "disabled" : "ready";
  }
  get updating() {
    return null != this._updatingPromise;
  }
  clear() {
    this.searchTerm = "";
  }
  clearGraphics() {
    this._removeHighlight(), this._closePopup();
    const {
      view: e9,
      resultGraphic: t4
    } = this;
    e9 && t4 && e9.graphics.remove(t4), this._set("resultGraphic", null);
  }
  search(e9, t4) {
    this.emit("search-start"), this.clearGraphics();
    const r3 = this._createSuggestionForSearch(e9), s8 = (() => __async(this, null, function* () {
      try {
        yield this.when();
        const e10 = yield this._getResultsFromSources(r3, t4);
        if (t4?.signal?.aborted) return null;
        const s9 = {
          activeSourceIndex: this.activeSourceIndex,
          searchTerm: r3.text ?? "",
          numResults: 0,
          numErrors: 0,
          errors: [],
          results: []
        };
        this._formatResponse(s9, e10, r3);
        const o4 = this._getFirstResult(s9.results), i7 = r3.location && o4 ? o4.name : r3.text, l4 = i7?.replace(z, "");
        return this._set("searchTerm", l4), (r3.key && "number" == typeof r3.sourceIndex || r3.location) && this._set("selectedSuggestion", r3), this._set("results", s9.results), this._set("resultCount", s9.results.reduce((e11, t5) => e11 + (t5.results?.length ?? 0), 0)), this.emit("search-complete", s9), yield this._selectFirstResult(o4), s9;
      } finally {
        this._clearSearching();
      }
    }))();
    return this._searching = s8, s8;
  }
  searchNearby(e9) {
    return __async(this, null, function* () {
      if (!this.locationEnabled) {
        const e10 = new s2("searchNearby:geolocation-unsupported", "Geolocation API is unsupported.", {
          geolocation: navigator.geolocation
        });
        throw n.getLogger(this).error(e10), e10;
      }
      const t4 = (() => __async(this, null, function* () {
        try {
          const t5 = yield p(), r3 = yield f6({
            position: t5,
            view: this.view
          }, e9);
          return yield this.search(r3, e9);
        } finally {
          this._clearSearching();
        }
      }))();
      return this._searching = t4, t4;
    });
  }
  select(e9) {
    return __async(this, null, function* () {
      if (this.clearGraphics(), !e9) {
        const t5 = new s2("select:missing-parameter", "Cannot select without a searchResult.", {
          searchResult: e9
        });
        throw n.getLogger(this).error(t5), t5;
      }
      const {
        view: t4
      } = this, r3 = H(e9, "sourceIndex") ? e9.sourceIndex : this._getSourceIndexOfResult(e9), o4 = null != r3 ? this.allSources.at(r3) : null;
      if (!o4) {
        const e10 = new s2("select:missing-source", "Cannot select without a source.", {
          source: o4
        });
        throw n.getLogger(this).error(e10), e10;
      }
      const i7 = o4 instanceof n8 ? this._getLayerSourcePopupTemplate(o4) : o4.popupTemplate, l4 = o4.resultSymbol || this._getDefaultSymbol(e9), a7 = H(o4, "resultGraphicEnabled") ? o4.resultGraphicEnabled : this.resultGraphicEnabled, u3 = H(o4, "autoNavigate") ? o4.autoNavigate : this.autoNavigate, h5 = H(o4, "popupEnabled") ? o4.popupEnabled : this.popupEnabled, g4 = h5 ? i7 || this.popupTemplate || this.defaultPopupTemplate : null, {
        feature: d9
      } = e9;
      if (!d9) {
        const e10 = new s2("select:missing-feature", "Cannot select without a feature.", {
          feature: d9
        });
        throw n.getLogger(this).error(e10), e10;
      }
      const {
        attributes: m4,
        geometry: y5,
        layer: f11,
        sourceLayer: S5
      } = d9, _2 = y5 ? n5(y5) : null, v5 = {
        layerViewQuery: this._getLayerView(d9),
        elevationQuery: t4 && null != _2 ? r(_2, t4) : Promise.resolve(_2)
      }, x4 = yield v(v5), L2 = x4.layerViewQuery.value, I3 = x4.elevationQuery.value;
      l4 instanceof m && (l4.text = e9.name);
      const E3 = t4 && u3 ? e9.target || e9.extent : null, F2 = null != E3 ? this._goToSearchResult(E3) : Promise.resolve();
      yield F2;
      const j5 = L2 ? d9 : new d3({
        geometry: y5,
        symbol: l4,
        attributes: m4,
        layer: f11,
        sourceLayer: S5,
        popupTemplate: g4
      }), P2 = t4?.popup, C4 = P2 && h5 && j5.getEffectivePopupTemplate(P2.defaultPopupTemplateEnabled);
      return C4 && (yield t4.openPopup({
        features: [j5],
        location: I3
      })), L2 && n6(L2) && !C4 && this._highlightFeature({
        graphic: j5,
        layerView: L2
      }), !L2 && a7 && t4 && t4.graphics.push(j5), this._setResultFloor(e9), this._set("selectedResult", e9), this._set("resultGraphic", j5), this.emit("select-result", {
        result: e9,
        source: o4,
        sourceIndex: r3
      }), e9;
    });
  }
  suggest(e9, t4, r3) {
    return __async(this, null, function* () {
      const s8 = e9 || this.searchTerm;
      this.emit("suggest-start", {
        searchTerm: s8
      }), yield this._suggestTimer(t4, r3);
      const o4 = yield this._suggestImmediate(s8, r3);
      return this._set("suggestions", o4?.results), this._set("suggestionCount", o4?.results.reduce((e10, t5) => e10 + (t5.results?.length ?? 0), 0) ?? null), this.emit("suggest-complete", o4), o4;
    });
  }
  when() {
    return __async(this, null, function* () {
      yield w(() => !this.updating);
    });
  }
  _update() {
    return __async(this, null, function* () {
      const {
        portal: e9,
        view: t4
      } = this;
      if (this.includeDefaultSources) {
        const r3 = this._updatingPromise = v([e9?.load(), t4?.when()]);
        if (this.destroyed) return;
        if (yield r3, r3 !== this._updatingPromise) return;
      }
      yield w(() => this.messages), this.destroyed || this._updateDefaultSources(), this._updatingPromise = null;
    });
  }
  _clearSearching() {
    this._searching = null;
  }
  _convertHelperServices() {
    const e9 = this.portal?.helperServices?.geocode;
    if (!e9) return [];
    return e9.map((e10) => {
      if (false === e10.placefinding) return;
      const t4 = s.apiKey && x2(e10.url) ? {
        url: v4
      } : null, s8 = n12.fromJSON(__spreadValues(__spreadValues({}, e10), t4)), o4 = s8.url;
      if (x2(o4) || y3(o4) || g3(o4)) {
        const e11 = s8.outFields ?? ["Addr_type", "Match_addr", "StAddr", "City"], t5 = (s8.placeholder || this.messages?.placeholder) ?? "", r3 = "number" == typeof s8.defaultZoomScale ? s8.defaultZoomScale : 2500;
        s8.singleLineFieldName = "SingleLine", s8.outFields = e11, s8.placeholder = t5, s8.defaultZoomScale = r3;
      }
      return s8.singleLineFieldName ? s8 : void 0;
    }).filter(O);
  }
  _destroyFeatureLayers() {
    this._createdFeatureLayers.forEach((e9) => e9?.destroy()), this._createdFeatureLayers = [];
  }
  _getLayerSources(e9, t4) {
    const r3 = this.view?.map;
    return e9.map((e10) => {
      const s8 = r3.findLayerById(e10.id);
      if (!s8) return;
      const o4 = this._getLayerJSON(e10), i7 = n8.fromJSON(o4);
      return i7.placeholder = t4, this._getLayer(s8, o4).then((e11) => {
        i7.layer = e11;
      }), i7;
    }).filter(O).toArray();
  }
  _getTableSources(e9, t4) {
    const r3 = this.view?.map;
    return e9.map((e10) => {
      if (!e10.id) return;
      const s8 = r3.findTableById(e10.id);
      if (!s8) return;
      const o4 = this._getLayerJSON(e10), i7 = n8.fromJSON(o4);
      return i7.placeholder = t4, this._getLayer(s8, o4).then((e11) => {
        i7.layer = e11;
      }), i7;
    }).filter(O).toArray();
  }
  _convertApplicationProperties() {
    const e9 = this.view?.map, t4 = e9?.applicationProperties?.viewing?.search;
    if (!t4) return [];
    const {
      enabled: r3,
      hintText: s8,
      layers: o4,
      tables: i7
    } = t4;
    if (!r3) return [];
    return [...this._getLayerSources(o4, s8), ...this._getTableSources(i7, s8)];
  }
  _getSubLayer(e9, t4) {
    return __async(this, null, function* () {
      if (yield e9.load(), !e9.allSublayers) throw new Error();
      const r3 = e9.allSublayers.find((e10) => e10.id === t4.subLayer);
      if (!r3) throw new Error();
      const s8 = yield r3.createFeatureLayer?.();
      if (!s8) throw new Error();
      return this._createdFeatureLayers.push(s8), s8;
    });
  }
  _getBuildingSubLayer(e9, t4) {
    return __async(this, null, function* () {
      yield e9.load();
      const r3 = e9.allSublayers.find((e10) => e10.id === t4.subLayer);
      if ("building-component" !== r3?.type) throw new Error();
      if (yield r3.load(), null == r3.associatedLayer) throw new Error();
      return yield r3.associatedLayer.load(), r3;
    });
  }
  _getLayer(e9, t4) {
    return __async(this, null, function* () {
      if ("feature" === e9.type || "scene" === e9.type || "csv" === e9.type || "geojson" === e9.type || "ogc-feature" === e9.type) return e9;
      if ("map-image" === e9.type) try {
        return yield this._getSubLayer(e9, t4);
      } catch (r3) {
        const t5 = new s2("search:create-featurelayer", "Could not create a FeatureLayer from the MapImageLayer", {
          layer: e9
        });
        return n.getLogger(this).error(t5), null;
      }
      return "building-scene" === e9.type ? this._getBuildingSubLayer(e9, t4) : null;
    });
  }
  _getLayerJSON(e9) {
    return "function" == typeof e9.toJSON ? e9.toJSON() : e9;
  }
  _updateDefaultSources() {
    const {
      defaultSources: e9,
      includeDefaultSources: t4
    } = this;
    this._destroyFeatureLayers(), e9.removeAll(), t4 && e9.addMany([...this._convertApplicationProperties(), ...this._convertHelperServices()]);
  }
  _abortGoTo() {
    this._gotoController && this._gotoController.abort(), this._gotoController = null;
  }
  _clear() {
    this._abortGoTo(), this._set("resultCount", null), this._set("results", null), this._set("suggestions", null), this._set("suggestionCount", null), this._set("selectedResult", null), this._set("selectedSuggestion", null), this.emit("search-clear");
  }
  _closePopup() {
    const e9 = this.view?.popup, {
      resultGraphic: t4
    } = this;
    if (!e9 || !t4) return;
    const r3 = "selectedFeature" in e9, s8 = r3 ? e9.selectedFeature : null;
    r3 && s8 && s8 === t4 && e9.close();
  }
  _suggestTimer(e9, t4) {
    const r3 = null != e9 ? e9 : this.suggestionDelay;
    return A(r3, null, t4?.signal);
  }
  _createLocationForSearch(e9) {
    return e9 instanceof d3 && e9.geometry ? n5(e9.geometry) : e9 instanceof _ ? e9 : Array.isArray(e9) && 2 === e9.length ? new _({
      longitude: e9[0],
      latitude: e9[1]
    }) : null;
  }
  _createSuggestionForSearch(e9) {
    if (e9 && H(e9, "key") && H(e9, "text") && H(e9, "sourceIndex")) return e9;
    const t4 = this._createLocationForSearch(e9), r3 = "string" == typeof e9 ? e9 : this.searchTerm, {
      selectedSuggestion: s8,
      selectedResult: o4
    } = this, i7 = !e9 && s8 && o4, l4 = i7 && s8.key === o4.key && s8.sourceIndex === o4.sourceIndex, a7 = i7 && s8.location;
    return l4 || a7 ? s8 : {
      location: t4,
      text: t4 ? "" : r3,
      sourceIndex: null,
      key: null
    };
  }
  _getFirstResult(e9) {
    return f(e9, ({
      results: e10
    }) => e10?.[0]) ?? null;
  }
  _selectFirstResult(e9) {
    return __async(this, null, function* () {
      return this.autoSelect && e9 ? this.select(e9) : null;
    });
  }
  _suggestImmediate(e9, t4) {
    return __async(this, null, function* () {
      yield this.when();
      const r3 = yield this._getSuggestionsFromSources(e9, t4);
      if (t4?.signal?.aborted) return null;
      const s8 = {
        activeSourceIndex: this.activeSourceIndex,
        searchTerm: e9 ?? "",
        numResults: 0,
        numErrors: 0,
        errors: [],
        results: []
      };
      return this._formatResponse(s8, r3), s8;
    });
  }
  _formatSourceResponse(e9, t4, r3) {
    const s8 = t4?.value || [], o4 = t4?.error, i7 = this.allSources.at(r3);
    if (o4) {
      const t5 = {
        sourceIndex: r3,
        source: i7,
        error: o4
      };
      e9.errors.push(t5), n.getLogger(this).error(o4), e9.numErrors++;
    } else {
      const t5 = {
        sourceIndex: r3,
        source: i7,
        results: s8
      };
      e9.results.push(t5), e9.numResults += s8.length;
    }
  }
  _formatResponse(e9, t4, r3) {
    if (t4) if (e9.activeSourceIndex === K2) {
      const s8 = r3 && H(r3, "sourceIndex") && -1 !== r3.sourceIndex ? r3.sourceIndex : void 0;
      t4.forEach((t5, r4) => {
        const o4 = void 0 !== s8 ? s8 : r4;
        this._formatSourceResponse(e9, t5, o4);
      });
    } else this._formatSourceResponse(e9, t4[0], e9.activeSourceIndex);
  }
  _getResultsFromSources(e9, t4) {
    return __async(this, null, function* () {
      const {
        allSources: r3
      } = this, s8 = !e9.location && H(e9, "sourceIndex") ? e9.sourceIndex : this.activeSourceIndex, o4 = [];
      if (!r3.length) {
        const e10 = new s2("search:no-sources-defined", "At least one source is required.", {
          allSources: r3
        });
        throw n.getLogger(this).error(e10), e10;
      }
      return s8 === K2 ? r3.forEach((r4, s9) => {
        o4.push(this._getResultsFromSource(e9, s9, t4));
      }) : o4.push(this._getResultsFromSource(e9, s8, t4)), v(o4);
    });
  }
  _getSuggestionsFromSources(e9, t4) {
    return __async(this, null, function* () {
      const {
        allSources: r3,
        activeSourceIndex: s8
      } = this, o4 = [];
      if (!r3.length) {
        const e10 = new s2("suggest:no-sources-defined", "At least one source is required.", {
          allSources: r3
        });
        throw n.getLogger(this).error(e10), e10;
      }
      return s8 === K2 ? r3.forEach((r4, s9) => {
        o4.push(this._getSuggestionsFromSource(e9, s9, t4));
      }) : o4.push(this._getSuggestionsFromSource(e9, s8, t4)), v(o4);
    });
  }
  _getResultsFromSource(e9, t4, r3) {
    return __async(this, null, function* () {
      const s8 = null != t4 ? this.allSources.at(t4) : null;
      if (!s8) return null;
      const {
        location: o4 = null
      } = e9, i7 = this.view?.spatialReference || Z2, l4 = H(s8, "maxResults") ? s8.maxResults : this.maxResults, a7 = !!(s8 instanceof n8 && H(s8, "exactMatch")) && s8.exactMatch, {
        view: n13
      } = this;
      return s8.getResults?.({
        view: n13,
        sourceIndex: t4,
        location: o4,
        suggestResult: e9,
        spatialReference: i7,
        exactMatch: a7,
        maxResults: l4
      }, r3);
    });
  }
  _getSuggestionsFromSource(e9, t4, r3) {
    return __async(this, null, function* () {
      const s8 = this.allSources.at(t4);
      if (!s8) return null;
      e9 ??= "";
      const o4 = H(s8, "suggestionsEnabled") ? s8.suggestionsEnabled : this.suggestionsEnabled, i7 = e9?.length, l4 = H(s8, "minSuggestCharacters") ? s8.minSuggestCharacters : this.minSuggestCharacters;
      if (o4 && e9.trim() && i7 >= l4) {
        const o5 = this.view?.spatialReference || Z2, i8 = H(s8, "maxSuggestions") ? s8.maxSuggestions : this.maxSuggestions, {
          view: l5
        } = this, a7 = !!(s8 instanceof n8 && H(s8, "exactMatch")) && s8.exactMatch;
        return s8.getSuggestions?.({
          view: l5,
          sourceIndex: t4,
          suggestTerm: e9,
          spatialReference: o5,
          maxSuggestions: i8,
          exactMatch: a7
        }, r3);
      }
      return null;
    });
  }
  _getLayerSourcePopupTemplate(e9) {
    const {
      layer: t4
    } = e9;
    if (t4) return H(e9, "popupTemplate") ? e9.popupTemplate : t4.popupTemplate;
  }
  _getSourceIndexOfResult(e9) {
    return f(this.results ?? [], ({
      results: t4,
      sourceIndex: r3
    }) => {
      const s8 = t4?.includes(e9);
      return s8 ? r3 : null;
    }) ?? null;
  }
  _goToSearchResult(e9) {
    return __async(this, null, function* () {
      this._abortGoTo();
      const t4 = new AbortController();
      this._gotoController = t4;
      const r3 = {
        target: {
          target: e9
        },
        options: {
          signal: t4.signal
        }
      };
      e9 || (r3.options.animate = false), yield this.callGoTo(r3), this._gotoController = null;
    });
  }
  _getDefaultSymbol(e9) {
    const {
      defaultSymbols: t4
    } = this, r3 = e9.feature?.geometry;
    if (null == r3) return null;
    switch (r3.type) {
      case "point":
      case "multipoint":
        return t4.point;
      case "polyline":
        return t4.polyline;
      case "extent":
      case "polygon":
        return t4.polygon;
      default:
        return null;
    }
  }
  _removeHighlight() {
    this.removeHandles(B3);
  }
  _getLayerView(e9) {
    return __async(this, null, function* () {
      const {
        view: t4
      } = this;
      if (!e9 || !t4 || "building-component" === e9.layer?.type || "subtype-sublayer" === e9.layer?.type) return null;
      const {
        layer: r3
      } = e9;
      return r3 ? (yield t4.when(), t4.whenLayerView(r3)) : null;
    });
  }
  _highlightFeature(e9) {
    const {
      graphic: t4,
      layerView: r3
    } = e9, {
      attributes: s8,
      layer: o4
    } = t4, {
      objectIdField: i7
    } = o4, l4 = (i7 && s8?.[i7]) ?? null, a7 = r3.highlight(l4 ?? t4);
    this.addHandles(a7, B3);
  }
  _setResultFloor(e9) {
    const {
      view: t4
    } = this, r3 = e9.feature?.attributes, s8 = e9.feature?.sourceLayer;
    if (s8 && "floorInfo" in s8 && s8?.floorInfo?.floorField && r3) {
      const e10 = r3[s8.floorInfo.floorField];
      t4?.emit("select-result-floor", e10);
    }
  }
};
W2.ALL_INDEX = K2, e2([y()], W2.prototype, "_searching", void 0), e2([y()], W2.prototype, "_updatingPromise", void 0), e2([y({
  readOnly: true,
  value: null
})], W2.prototype, "activeSource", null), e2([y()], W2.prototype, "activeSourceIndex", null), e2([y()], W2.prototype, "allPlaceholder", null), e2([y({
  readOnly: true
})], W2.prototype, "allSources", null), e2([y()], W2.prototype, "autoNavigate", void 0), e2([y()], W2.prototype, "autoSelect", void 0), e2([y()], W2.prototype, "defaultPopupTemplate", void 0), e2([y({
  readOnly: true
})], W2.prototype, "defaultSources", void 0), e2([y()], W2.prototype, "defaultSymbols", void 0), e2([y()], W2.prototype, "includeDefaultSources", void 0), e2([y()], W2.prototype, "locationEnabled", null), e2([y()], W2.prototype, "maxInputLength", void 0), e2([y()], W2.prototype, "maxResults", void 0), e2([y()], W2.prototype, "maxSuggestions", void 0), e2([y()], W2.prototype, "messages", void 0), e2([y()], W2.prototype, "minSuggestCharacters", void 0), e2([y({
  readOnly: true
})], W2.prototype, "placeholder", null), e2([y()], W2.prototype, "popupEnabled", void 0), e2([y({
  type: k2
})], W2.prototype, "popupTemplate", void 0), e2([y({
  type: C
})], W2.prototype, "portal", void 0), e2([y()], W2.prototype, "resultCount", void 0), e2([y()], W2.prototype, "resultGraphicEnabled", void 0), e2([y({
  readOnly: true
})], W2.prototype, "resultGraphic", void 0), e2([y({
  readOnly: true
})], W2.prototype, "results", void 0), e2([y({
  readOnly: true
})], W2.prototype, "selectedSuggestion", void 0), e2([y()], W2.prototype, "searchAllEnabled", void 0), e2([y({
  readOnly: true
})], W2.prototype, "selectedResult", void 0), e2([y()], W2.prototype, "searchTerm", null), e2([y({
  type: Q
})], W2.prototype, "sources", void 0), e2([y({
  readOnly: true
})], W2.prototype, "state", null), e2([y()], W2.prototype, "suggestionDelay", void 0), e2([y()], W2.prototype, "suggestionCount", void 0), e2([y({
  readOnly: true
})], W2.prototype, "suggestions", void 0), e2([y()], W2.prototype, "suggestionsEnabled", void 0), e2([y({
  readOnly: true
})], W2.prototype, "updating", null), e2([y()], W2.prototype, "view", void 0), e2([y()], W2.prototype, "clear", null), W2 = e2([a2("esri.widgets.Search.SearchViewModel")], W2);
var X = W2;

// ../../../node_modules/@arcgis/core/widgets/Search/SearchResultRenderer.js
var d8 = class extends B {
  constructor(e9, s8) {
    super(e9, s8), this.messages = null, this.showMoreResultsOpen = false, this.viewModel = null;
  }
  destroy() {
    this.viewModel = null;
  }
  render() {
    const e9 = {
      [s7.showMoreResults]: this.showMoreResultsOpen
    };
    return n2("div", {
      class: this.classes(s7.base, e4.widget)
    }, n2("div", {
      class: this.classes(s7.moreResults, e9),
      key: "esri-search-renderer__container"
    }, this._renderSearchResultName(), this._renderMoreResults()));
  }
  _renderMoreResults() {
    return n2("div", {
      key: "esri-search-renderer__more-results"
    }, this._renderMoreResultsButton(), this._renderMoreResultsLists());
  }
  _renderSearchResultName() {
    const e9 = this.viewModel?.selectedResult, s8 = e9?.name || "";
    return n2("div", {
      class: s7.moreResultsItem,
      key: "esri-search-renderer__result-name"
    }, s8);
  }
  _renderMoreResultsLists() {
    const {
      viewModel: e9
    } = this;
    if (!e9) return [];
    const s8 = e9.results;
    if ((e9.resultCount ?? 0) < 2) return null;
    const r3 = s8?.map((e10) => this._renderMoreResultsList(e10));
    return n2("div", {
      class: s7.moreResultsList,
      key: "esri-search-renderer__more-results-container"
    }, r3);
  }
  _renderMoreResultsButton() {
    const {
      messages: e9,
      viewModel: s8
    } = this;
    if (!s8) return null;
    return (s8.resultCount ?? 0) < 2 ? null : n2("div", {
      class: s7.moreResultsItem,
      key: "esri-search-renderer__more-results-button"
    }, n2("a", {
      bind: this,
      class: e4.anchor,
      href: "#",
      onclick: this._showMoreResultsClick,
      onkeydown: this._showMoreResultsClick
    }, this.showMoreResultsOpen ? e9.hideMoreResults : e9.showMoreResults));
  }
  _renderMoreResultsHeader(e9, s8) {
    return n2("div", {
      class: s7.moreResultsListHeader,
      key: `esri-search-result-renderer__header-${s8}`
    }, e9);
  }
  _renderMoreResultsList(e9) {
    const {
      results: s8
    } = e9, r3 = s8?.length ?? 0, t4 = r3 > 0, o4 = this.viewModel?.selectedResult, l4 = 1 === r3 && s8[0] === o4, i7 = this._getSourceName(e9.source, e9.sourceIndex), u3 = (this.viewModel?.results?.length ?? 0) > 1 && !l4 ? this._renderMoreResultsHeader(i7, e9.sourceIndex) : null, n13 = t4 && s8.map((e10, s9) => this._renderMoreResultsListItem(e10, s9)), d9 = t4 && !l4 ? n2("ul", {
      key: `esri-search-result-renderer__list-${e9.sourceIndex}`
    }, n13) : null;
    return t4 ? n2("div", {
      key: `esri-search-result-renderer__results-${e9.sourceIndex}`
    }, u3, d9) : null;
  }
  _renderMoreResultsListItem(e9, s8) {
    const r3 = this.viewModel?.selectedResult;
    return e9 !== r3 ? n2("li", {
      key: `esri-search-result-renderer__list-item-${s8}`
    }, n2("a", {
      bind: this,
      class: e4.anchor,
      "data-result": e9,
      href: "#",
      onclick: this._selectResultClick,
      onkeydown: this._selectResultClick,
      tabIndex: 0
    }, e9.name)) : null;
  }
  _showMoreResultsClick(e9) {
    e9.preventDefault(), this.showMoreResultsOpen = !this.showMoreResultsOpen;
    const s8 = this.viewModel?.view?.popup;
    s8 && "reposition" in s8 && s8.reposition();
  }
  _selectResultClick(e9) {
    e9.preventDefault();
    const s8 = e9.currentTarget["data-result"];
    this.viewModel?.select(s8);
  }
  _getSourceName(e9, s8) {
    return s8 === X.ALL_INDEX ? this.messages.all : e9.name;
  }
};
e2([y(), e3("esri/widgets/Search/t9n/Search")], d8.prototype, "messages", void 0), e2([y()], d8.prototype, "showMoreResultsOpen", void 0), e2([y()], d8.prototype, "viewModel", void 0), e2([t2()], d8.prototype, "_showMoreResultsClick", null), e2([t2()], d8.prototype, "_selectResultClick", null), d8 = e2([a2("esri.widgets.Search.SearchResultRenderer")], d8);
var a6 = d8;

// ../../../node_modules/@arcgis/core/widgets/Search.js
var b4 = /<[a-z/][\s\S]*>/i;
var y4 = (e9, t4) => {
  const s8 = o(t4).split(/\s/), r3 = new RegExp(`(${s8.join("|")})`, "gi");
  return e9.replace(r3, (e10) => `<strong>${e10}</strong>`);
};
var f10 = class extends B {
  constructor(e9, t4) {
    super(e9, t4), this._activeMenuItemIndex = -1, this._inputNode = null, this._menuItemCount = 0, this._sourceMenuButtonNode = null, this._sourceListNode = null, this._suggestionListNode = null, this._searchResultRenderer = new a6(), this._suggestController = null, this._searchController = null, this._locateFailed = false, this._container = null, this.activeMenu = "none", this.disabled = false, this.messages = null, this.messagesCommon = null, this.viewModel = new X(), this._clearActiveMenu = () => {
      this.activeMenu = "none";
    }, this._removeActiveMenu = (e10) => {
      const t5 = e10.relatedTarget;
      t5 && this._container?.contains(t5) || this._clearActiveMenu();
    }, this.addHandles([d(() => this.searchTerm, (e10) => {
      (e10 && "warning" === this.activeMenu || !e10 && !this.viewModel?.selectedSuggestion?.location) && this._clearActiveMenu();
    }), v2(() => this.viewModel?.allSources, "change", () => this._watchSourceChanges()), d(() => this.activeMenu, () => this._resetActiveMenuItemIndex(), P), d(() => this.viewModel?.defaultPopupTemplate, (e10) => {
      e10 && (e10.content = this._renderSearchResultsContent.bind(this));
    }, P)]);
  }
  destroy() {
    this._cancelSuggest(), this._cancelSearch(), this._searchResultRenderer = u(this._searchResultRenderer);
  }
  get displayedSearchTerm() {
    return `${this.viewModel.searchTerm}`.trim();
  }
  get inputId() {
    return this._buildId("input");
  }
  get suggestionsMenuId() {
    return this._buildId("suggest-menu");
  }
  get sourceMenuId() {
    return this._buildId("source-menu");
  }
  get sourceMenuButtonId() {
    return this._buildId("source-menu-button");
  }
  get activeSource() {
    return this.viewModel?.activeSource;
  }
  get activeSourceIndex() {
    return this.viewModel.activeSourceIndex;
  }
  set activeSourceIndex(e9) {
    this.viewModel.activeSourceIndex = e9;
  }
  get allPlaceholder() {
    return this.viewModel.allPlaceholder;
  }
  set allPlaceholder(e9) {
    this.viewModel.allPlaceholder = e9;
  }
  get allSources() {
    return this.viewModel.allSources;
  }
  get autoNavigate() {
    return this.viewModel.autoNavigate;
  }
  set autoNavigate(e9) {
    this.viewModel.autoNavigate = e9;
  }
  get autoSelect() {
    return this.viewModel.autoSelect;
  }
  set autoSelect(e9) {
    this.viewModel.autoSelect = e9;
  }
  get defaultSources() {
    return this.viewModel.defaultSources;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e9) {
    this.viewModel.goToOverride = e9;
  }
  get icon() {
    return "search";
  }
  set icon(e9) {
    this._overrideIfSome("icon", e9);
  }
  get includeDefaultSources() {
    return this.viewModel.includeDefaultSources;
  }
  set includeDefaultSources(e9) {
    this.viewModel.includeDefaultSources = e9;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e9) {
    this._overrideIfSome("label", e9);
  }
  get locationEnabled() {
    return this.viewModel.locationEnabled;
  }
  set locationEnabled(e9) {
    this.viewModel.locationEnabled = e9;
  }
  get maxResults() {
    return this.viewModel.maxResults;
  }
  set maxResults(e9) {
    this.viewModel.maxResults = e9;
  }
  get maxSuggestions() {
    return this.viewModel.maxSuggestions;
  }
  set maxSuggestions(e9) {
    this.viewModel.maxSuggestions = e9;
  }
  get minSuggestCharacters() {
    return this.viewModel.minSuggestCharacters;
  }
  set minSuggestCharacters(e9) {
    this.viewModel.minSuggestCharacters = e9;
  }
  get popupEnabled() {
    return this.viewModel.popupEnabled;
  }
  set popupEnabled(e9) {
    this.viewModel.popupEnabled = e9;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e9) {
    this.viewModel.popupTemplate = e9;
  }
  get portal() {
    return this.viewModel?.portal;
  }
  set portal(e9) {
    this.viewModel && (this.viewModel.portal = e9);
  }
  get resultGraphic() {
    return this.viewModel.resultGraphic;
  }
  set resultGraphic(e9) {
    this.viewModel.resultGraphic = e9;
  }
  get resultGraphicEnabled() {
    return this.viewModel.resultGraphicEnabled;
  }
  set resultGraphicEnabled(e9) {
    this.viewModel.resultGraphicEnabled = e9;
  }
  get results() {
    return this.viewModel.results;
  }
  get searchAllEnabled() {
    return this.viewModel.searchAllEnabled;
  }
  set searchAllEnabled(e9) {
    this.viewModel.searchAllEnabled = e9;
  }
  get searchTerm() {
    return this.viewModel.searchTerm;
  }
  set searchTerm(e9) {
    this.viewModel.searchTerm = e9;
  }
  get selectedResult() {
    return this.viewModel.selectedResult;
  }
  get sources() {
    return this.viewModel.sources;
  }
  set sources(e9) {
    this.viewModel.sources = e9;
  }
  get suggestions() {
    return this.viewModel.suggestions;
  }
  get suggestionsEnabled() {
    return this.viewModel.suggestionsEnabled;
  }
  set suggestionsEnabled(e9) {
    this.viewModel.suggestionsEnabled = e9;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e9) {
    this.viewModel.view = e9;
  }
  clear() {
    this.viewModel.clear();
  }
  focus() {
    this._inputNode?.focus(), this.emit("search-focus");
  }
  blur() {
    this._inputNode?.blur(), this.emit("search-blur");
  }
  search(e9) {
    return __async(this, null, function* () {
      this._clearActiveMenu(), this._cancelSuggest(), this._cancelSearch();
      const t4 = new AbortController(), {
        signal: s8
      } = t4;
      this._searchController = t4;
      try {
        const r3 = yield this.viewModel.search(e9, {
          signal: s8
        });
        if (this._searchController !== t4) return;
        return this.activeMenu = r3?.numResults ? "none" : "warning", this._searchController = null, r3;
      } catch (r3) {
        if (this._searchController !== t4) return;
        return this._clearActiveMenu(), void (this._searchController = null);
      }
    });
  }
  suggest(e9) {
    return __async(this, null, function* () {
      this._cancelSuggest();
      const t4 = new AbortController(), {
        signal: s8
      } = t4;
      this._suggestController = t4;
      try {
        const r3 = yield this.viewModel.suggest(e9, null, {
          signal: s8
        });
        if (this._suggestController !== t4) return;
        return this._suggestController = null, r3?.numResults && this._openSuggestionMenu(), this._scrollToTopSuggestion(), r3;
      } catch (r3) {
        return this._suggestController !== t4 || (this._suggestController = null), null;
      }
    });
  }
  render() {
    const {
      state: e9
    } = this.viewModel, t4 = {
      [e4.disabled]: "disabled" === e9,
      [e4.widgetDisabled]: this.disabled
    };
    return n2("div", {
      class: this.classes(s6.base, e4.widget, t4)
    }, "loading" === e9 ? this._renderLoader() : this._renderContainer());
  }
  _renderSubmitButton() {
    const {
      messages: e9,
      disabled: t4
    } = this;
    return n2("button", {
      "aria-label": e9.searchButtonTitle,
      bind: this,
      class: this.classes(s6.submitButton, e4.widgetButton),
      disabled: t4,
      key: "esri-search__submit-button",
      onclick: this._handleSearchButtonClick,
      title: e9.searchButtonTitle,
      type: "button"
    }, n2("span", {
      "aria-hidden": "true",
      class: i3.search
    }));
  }
  _renderWarningMenu() {
    return n2("div", {
      class: this.classes(e4.menu, s6.warningMenu),
      key: "esri-search__error-menu"
    }, n2("div", {
      class: s6.warningMenuBody
    }, this._renderWarning()));
  }
  _renderSourceMenuButton() {
    const {
      messages: e9,
      activeMenu: t4,
      sourceMenuId: s8,
      sourceMenuButtonId: r3,
      disabled: n13
    } = this, {
      activeSourceIndex: i7,
      allSources: o4
    } = this.viewModel;
    return o4.length > 1 ? n2("button", {
      afterCreate: b2,
      "aria-controls": s8,
      "aria-expanded": ("source" === t4).toString(),
      "aria-haspopup": "true",
      "aria-label": e9.searchIn,
      bind: this,
      class: this.classes(s6.sourcesButton, e4.widgetButton),
      "data-node-ref": "_sourceMenuButtonNode",
      disabled: n13,
      id: r3,
      key: "esri-search__source-menu-button",
      onclick: this._handleSourcesMenuToggleClick,
      onfocus: this._handleSourcesMenuToggleFocus,
      title: e9.searchIn,
      type: "button"
    }, n2("span", {
      "aria-hidden": "true",
      class: this.classes(i3.downArrow, s6.sourcesButtonDown)
    }), n2("span", {
      "aria-hidden": "true",
      class: this.classes(i3.upArrow, s6.sourcesButtonUp)
    }), n2("span", {
      class: s6.sourceName
    }, this._getSourceName(i7))) : null;
  }
  _renderSourcesList() {
    const {
      allSources: e9,
      searchAllEnabled: t4
    } = this.viewModel, {
      _activeMenuItemIndex: s8,
      activeMenu: r3,
      sourceMenuId: n13,
      sourceMenuButtonId: i7
    } = this, o4 = "source" === r3 && s8 > -1 ? this._buildId("source-item", s8) : null;
    return e9.length > 1 ? n2("ul", {
      afterCreate: b2,
      "aria-activedescendant": o4,
      "aria-labelledby": i7,
      bind: this,
      class: e4.menuList,
      "data-node-ref": "_sourceListNode",
      id: n13,
      onkeydown: this._handleSourceMenuKeydown,
      onkeyup: this._handleSourceMenuKeyup,
      role: "menu",
      tabIndex: -1
    }, t4 ? this._renderSource(X.ALL_INDEX) : null, e9.map((e10, t5) => this._renderSource(t5)).toArray()) : null;
  }
  _renderSourcesMenu() {
    const {
      allSources: e9
    } = this.viewModel;
    return e9.length > 1 ? n2("div", {
      class: this.classes(e4.menu, s6.sourcesMenu),
      key: "esri-search__source-menu"
    }, this._renderSourcesList()) : null;
  }
  _renderLoader() {
    const {
      messages: e9,
      messagesCommon: t4,
      disabled: s8
    } = this;
    return n2("div", {
      class: e4.loader,
      key: "base-loader",
      tabIndex: s8 ? -1 : void 0
    }, n2("span", {
      "aria-hidden": "true",
      class: e4.loaderAnimation
    }), n2("span", {
      class: i3.fontFallbackText
    }, e9.searchButtonTitle), n2("span", {
      class: e4.loaderText
    }, t4.loading));
  }
  _renderContainer() {
    const {
      allSources: e9,
      state: t4
    } = this.viewModel, {
      activeMenu: s8
    } = this, r3 = {
      [s6.hasMultipleSources]: e9.length > 1,
      [s6.isLoading]: "loading" === t4,
      [s6.isSearching]: "searching" === t4,
      [s6.showWarning]: "warning" === s8,
      [s6.showSources]: "source" === s8,
      [s6.showSuggestions]: "suggestion" === s8
    };
    return n2("div", {
      afterCreate: (e10) => {
        this._container = e10, e10.addEventListener("focusout", this._removeActiveMenu);
      },
      afterRemoved: (e10) => {
        e10.removeEventListener("focusout", this._removeActiveMenu);
      },
      class: this.classes(r3, s6.container),
      key: "base-container",
      tabIndex: -1
    }, this._renderSourceMenuButton(), this._renderSourcesMenu(), this._renderInputContainer(), this._renderSubmitButton(), this._renderWarningMenu());
  }
  _renderClearButton() {
    return this.searchTerm ? n2("button", {
      bind: this,
      class: this.classes(s6.clearButton, e4.widgetButton),
      disabled: this.disabled,
      key: "esri-search__clear-button",
      onclick: this._handleClearButtonClick,
      onfocus: this._clearActiveMenu,
      title: this.messages.clearButtonTitle,
      type: "button"
    }, n2("span", {
      "aria-hidden": "true",
      class: i3.close
    })) : null;
  }
  _renderLocationGroup() {
    const {
      messages: e9,
      locationEnabled: t4,
      displayedSearchTerm: s8
    } = this, r3 = t4 && !s8, n13 = "suggestion" === this.activeMenu && 0 === this._activeMenuItemIndex;
    return r3 ? n2("ul", {
      class: this.classes(e4.menuList, s6.suggestionList, s6.suggestionListCurrentLocation),
      key: "esri-search__suggestion-list-current-location",
      role: "group"
    }, n2("li", {
      "aria-selected": ("suggestion" === this.activeMenu && 0 === this._activeMenuItemIndex).toString(),
      bind: this,
      class: this.classes(e4.menuItem, n13 ? e4.menuItemFocus : null),
      "data-current-location-item": true,
      id: this._buildId("suggestion-item", 0),
      onclick: this._handleUseCurrentLocationClick,
      role: "option"
    }, n2("span", {
      "aria-hidden": "true",
      class: i3.locateCircled
    }), " ", e9.useCurrentLocation)) : null;
  }
  _renderInput() {
    const {
      activeMenu: e9,
      locationEnabled: t4,
      displayedSearchTerm: s8,
      messages: r3,
      suggestionsMenuId: n13,
      inputId: i7,
      _activeMenuItemIndex: o4,
      disabled: u3
    } = this, {
      maxInputLength: l4,
      placeholder: a7,
      searchTerm: d9,
      suggestionCount: h5
    } = this.viewModel, p6 = !(!(t4 && !s8) && !h5), m4 = "suggestion" === e9 && o4 > -1 ? this._buildId("suggestion-item", o4) : null;
    return n2("input", {
      afterCreate: b2,
      "aria-activedescendant": m4,
      "aria-autocomplete": "list",
      "aria-controls": p6 ? n13 : null,
      "aria-expanded": (p6 && "suggestion" === e9).toString(),
      "aria-haspopup": "listbox",
      "aria-label": r3.searchButtonTitle,
      autocomplete: "off",
      bind: this,
      class: this.classes(e4.input, s6.input),
      "data-node-ref": "_inputNode",
      disabled: u3,
      id: i7,
      maxlength: l4,
      onblur: this.blur,
      onclick: this._openSuggestionMenu,
      onfocus: this.focus,
      oninput: this._handleInputPaste,
      onkeyup: this._handleInputKeyup,
      onpaste: this._handleInputPaste,
      placeholder: a7,
      role: "combobox",
      title: d9 ? "" : a7,
      type: "text",
      value: d9
    });
  }
  _renderForm() {
    return n2("form", {
      bind: this,
      class: s6.form,
      disabled: this.disabled,
      key: "esri-search__form",
      onsubmit: this._formSubmit,
      role: "search"
    }, this._renderInput());
  }
  _renderSuggestList(e9) {
    const {
      sourceIndex: t4
    } = e9, {
      results: s8
    } = e9, r3 = s8?.length;
    return r3 ? n2("ul", {
      class: this.classes(e4.menuList, s6.suggestionList),
      key: `esri-search__suggestion-list-${t4}`,
      role: "group"
    }, s8?.map((e10) => this._renderSuggestion(e10, this._menuItemCount++))) : null;
  }
  _renderSuggestionsGroup() {
    const {
      suggestions: e9
    } = this.viewModel;
    return e9 ? e9.map((e10) => [this._renderSuggestionHeader(e10), this._renderSuggestList(e10)]) : [];
  }
  _renderSuggestionsMenu() {
    const {
      displayedSearchTerm: e9,
      locationEnabled: t4,
      suggestionsMenuId: s8,
      inputId: r3
    } = this, {
      suggestionCount: n13
    } = this.viewModel, i7 = t4 && !e9 || n13;
    return this._menuItemCount = 0, i7 ? n2("div", {
      afterCreate: b2,
      "aria-labelledby": r3,
      bind: this,
      class: this.classes(e4.menu, s6.suggestionsMenu),
      "data-node-ref": "_suggestionListNode",
      id: s8,
      key: "esri-search__suggestions-menu",
      role: "listbox"
    }, this._renderLocationGroup(), this._renderSuggestionsGroup()) : null;
  }
  _renderInputContainer() {
    return n2("div", {
      class: s6.inputContainer,
      key: "esri-search__input-container"
    }, this._renderForm(), this._renderSuggestionsMenu(), this._renderClearButton());
  }
  _renderSuggestionHeader(e9) {
    const {
      allSources: t4,
      activeSourceIndex: s8
    } = this.viewModel, {
      sourceIndex: r3
    } = e9, n13 = e9.results?.length, i7 = t4.length > 1 && s8 === X.ALL_INDEX;
    return n13 && i7 ? n2("div", {
      class: e4.menuHeader,
      key: `esri-search__suggestion-header-${r3}`
    }, this._getSourceName(r3)) : null;
  }
  _renderSuggestion(e9, t4) {
    const {
      _activeMenuItemIndex: s8,
      viewModel: {
        searchTerm: r3
      }
    } = this;
    if (!r3) return;
    const n13 = "suggestion" === this.activeMenu && s8 === t4;
    return n2("li", {
      "aria-selected": ("suggestion" === this.activeMenu && this._activeMenuItemIndex === t4).toString(),
      bind: this,
      class: this.classes(e4.menuItem, n13 ? e4.menuItemFocus : null),
      "data-suggestion": e9,
      id: this._buildId("suggestion-item", t4),
      innerHTML: this._getSuggestResultHTML(e9.text, r3),
      key: `esri-search__suggestion_${t4}`,
      onclick: this._handleSuggestionClick,
      role: "option"
    });
  }
  _renderSource(e9) {
    const {
      activeSourceIndex: t4,
      searchAllEnabled: s8
    } = this.viewModel, r3 = {
      [e4.menuItemActive]: e9 === t4,
      [e4.menuItemFocus]: "source" === this.activeMenu && e9 === (s8 ? this._activeMenuItemIndex - 1 : this._activeMenuItemIndex)
    }, n13 = s8 ? e9 + 1 : e9;
    return n2("li", {
      "aria-checked": (e9 === t4).toString(),
      bind: this,
      class: this.classes(s6.source, e4.menuItem, r3),
      "data-source-index": e9,
      id: this._buildId("source-item", n13),
      key: `esri-search__source-${e9}`,
      onclick: this._handleSourceClick,
      role: "menuitemradio"
    }, this._getSourceName(e9));
  }
  _renderNoResultsWarning(e9) {
    const {
      messages: t4
    } = this, s8 = e9 ? s3(t4.noResultsFoundForValue, {
      value: `"${e9}"`
    }) : t4.noResultsFound;
    return n2("div", {
      key: "esri-search__no_results"
    }, n2("div", {
      class: s6.warningMenuHeader
    }, t4.noResults), n2("div", {
      class: s6.warningMenuText
    }, s8));
  }
  _renderEmptySearchWarning() {
    const {
      messages: e9
    } = this;
    return n2("div", {
      key: "esri-search__empty-search"
    }, n2("span", {
      "aria-hidden": "true",
      class: i3.noticeTriangle
    }), n2("span", {
      class: s6.noValueText
    }, e9.emptyValue));
  }
  _renderLocateWarning() {
    const {
      messages: e9
    } = this;
    return n2("div", {
      key: "esri-search__locate-error"
    }, n2("span", {
      "aria-hidden": "true",
      class: i3.noticeTriangle
    }), n2("span", {
      class: s6.noValueText
    }, e9.locateError));
  }
  _renderWarning() {
    const {
      displayedSearchTerm: e9,
      _locateFailed: t4
    } = this, {
      viewModel: s8
    } = this;
    return t4 ? this._renderLocateWarning() : s8.selectedSuggestion?.location || e9 ? this._renderNoResultsWarning(e9) : this._renderEmptySearchWarning();
  }
  _resetActiveMenuItemIndex() {
    this._activeMenuItemIndex = -1;
  }
  _buildId(e9, t4) {
    return `${this.id}-${e9}${void 0 === t4 ? "" : `-${t4}`}`;
  }
  _watchSourceChanges() {
    const {
      viewModel: {
        allSources: e9
      }
    } = this, t4 = "sources";
    this.removeHandles(t4), e9.forEach((e10) => this.addHandles(d(() => e10.name, () => this.scheduleRender()), t4));
  }
  _handleSourcesMenuToggleFocus() {
    "source" !== this.activeMenu && this._clearActiveMenu();
  }
  _handleSourcesMenuToggleClick() {
    const e9 = "source" === this.activeMenu;
    this.activeMenu = e9 ? "none" : "source", this.renderNow(), "source" === this.activeMenu && this._sourceListNode?.focus();
  }
  _handleClearButtonClick() {
    this.viewModel.clear(), this._focus();
  }
  _handleSearchButtonClick() {
    this.search();
  }
  _handleSuggestionClick(e9) {
    const t4 = C3(e9.currentTarget);
    t4 && (this._focus(), this.search(t4));
  }
  _handleUseCurrentLocationClick() {
    this._useCurrentLocation();
  }
  _useCurrentLocation() {
    this._focus("none"), this._cancelSuggest(), this._cancelSearch();
    const e9 = new AbortController(), {
      signal: t4
    } = e9;
    this._searchController = e9;
    (() => __async(this, null, function* () {
      try {
        const e10 = yield this.viewModel.searchNearby({
          signal: t4
        });
        this.activeMenu = e10?.numResults ? "none" : "warning";
      } catch (e10) {
        this._locateFailed = true, this.activeMenu = "warning";
      } finally {
        this._searchController = null;
      }
    }))();
  }
  _handleSourceClick(e9) {
    this._setSourceFromMenuItem(e9.currentTarget);
  }
  _setSourceFromMenuItem(e9) {
    if (!e9) return;
    const t4 = x3(e9);
    null != t4 && (this.viewModel.activeSourceIndex = t4, this._clearActiveMenu(), this._sourceMenuButtonNode?.focus());
  }
  _cancelSuggest() {
    this._suggestController = e(this._suggestController);
  }
  _cancelSearch() {
    this._searchController = e(this._searchController), this._locateFailed = false;
  }
  _handleInputKeyup(e9) {
    const {
      key: t4
    } = e9;
    if (e9.ctrlKey || e9.metaKey || "Copy" === t4 || "ArrowLeft" === t4 || "ArrowRight" === t4 || "Shift" === t4) return;
    if ("Tab" === t4 || "Escape" === t4 || e9.shiftKey && "Tab" === t4) return this._cancelSuggest(), void ("Escape" === t4 && this._clearActiveMenu());
    const s8 = "Home" === t4 || "End" === t4 || "ArrowUp" === t4 || "ArrowDown" === t4;
    if ("Enter" === t4 && this._activeMenuItemIndex < 0) return void this._cancelSuggest();
    const r3 = this._suggestionListNode?.getElementsByTagName("li");
    if (r3?.length) {
      if ("suggestion" !== this.activeMenu && this._openSuggestionMenu(), s8) return e9.preventDefault(), this._cancelSuggest(), void this._handleItemNavigation(t4, r3, this._suggestionListNode);
      const n13 = r3[this._activeMenuItemIndex];
      if ("Enter" === t4 && n13) {
        const e10 = C3(n13);
        return void (e10 ? (this._focus(), this.search(e10)) : T2(n13) && this._useCurrentLocation());
      }
    }
    this.viewModel.searchTerm && this.suggest();
  }
  _handleItemNavigation(e9, t4, s8) {
    const r3 = this._activeMenuItemIndex;
    "Home" === e9 && (this._activeMenuItemIndex = 0), "End" === e9 && (this._activeMenuItemIndex = t4.length - 1), "ArrowUp" === e9 && (this._activeMenuItemIndex = this._activeMenuItemIndex <= 0 ? t4.length - 1 : this._activeMenuItemIndex - 1), "ArrowDown" === e9 && (this._activeMenuItemIndex = this._activeMenuItemIndex === t4.length - 1 ? 0 : this._activeMenuItemIndex + 1), r3 !== this._activeMenuItemIndex && s8 && A2(t4[this._activeMenuItemIndex], s8);
  }
  _scrollToTopSuggestion() {
    this._suggestionListNode && (this._suggestionListNode.scrollTop = 0);
  }
  _openSuggestionMenu() {
    this.activeMenu = "suggestion";
  }
  _handleInputPaste(e9) {
    const t4 = e9.target;
    this.viewModel.searchTerm !== t4.value && (this.viewModel.searchTerm = t4.value), this.viewModel.searchTerm && this.suggest();
  }
  _handleSourceMenuKeydown(e9) {
    const {
      key: t4
    } = e9;
    if (k(t4)) {
      e9.preventDefault();
      const t5 = this._sourceListNode?.getElementsByTagName("li"), s8 = t5?.[this._activeMenuItemIndex];
      this._setSourceFromMenuItem(s8);
    } else "ArrowUp" !== t4 && "ArrowDown" !== t4 && "End" !== t4 && "Home" !== t4 || e9.preventDefault();
  }
  _handleSourceMenuKeyup(e9) {
    const {
      key: t4
    } = e9, s8 = "ArrowUp" === t4 || "ArrowDown" === t4 || "End" === t4 || "Home" === t4;
    if (s8 && e9.preventDefault(), "Escape" === t4) return this._clearActiveMenu(), void this._sourceMenuButtonNode?.focus();
    const r3 = this._sourceListNode?.getElementsByTagName("li");
    return r3 && 0 !== r3.length && s8 ? ("source" !== this.activeMenu && (this.activeMenu = "source"), void this._handleItemNavigation(t4, r3, this._sourceListNode?.parentElement)) : void 0;
  }
  _focus(e9) {
    this.focus(), e9 && (this.activeMenu = e9);
  }
  _formSubmit(e9) {
    e9.preventDefault(), -1 === this._activeMenuItemIndex && this.search();
  }
  _getSourceName(e9) {
    const {
      messages: t4
    } = this, s8 = this.viewModel, {
      allSources: r3
    } = s8, n13 = r3.at(e9);
    return e9 === X.ALL_INDEX ? t4.all : n13 && n13.name || t4.untitledSource;
  }
  _getSuggestResultHTML(e9, t4) {
    return e9 ? b4.test(e9) ? e9 : y4(e9, t4) : this.messages.untitledResult;
  }
  _renderSearchResultsContent() {
    return this._searchResultRenderer.showMoreResultsOpen = false, this._searchResultRenderer.viewModel = this.viewModel, this._searchResultRenderer;
  }
};
function C3(e9) {
  return e9?.["data-suggestion"];
}
function x3(e9) {
  return e9?.["data-source-index"];
}
function T2(e9) {
  return !!e9?.["data-current-location-item"];
}
e2([y()], f10.prototype, "_activeMenuItemIndex", void 0), e2([y()], f10.prototype, "displayedSearchTerm", null), e2([y({
  readOnly: true
})], f10.prototype, "inputId", null), e2([y({
  readOnly: true
})], f10.prototype, "suggestionsMenuId", null), e2([y({
  readOnly: true
})], f10.prototype, "sourceMenuId", null), e2([y({
  readOnly: true
})], f10.prototype, "sourceMenuButtonId", null), e2([y()], f10.prototype, "activeMenu", void 0), e2([y({
  readOnly: true
})], f10.prototype, "activeSource", null), e2([y()], f10.prototype, "activeSourceIndex", null), e2([y()], f10.prototype, "allPlaceholder", null), e2([y({
  readOnly: true
})], f10.prototype, "allSources", null), e2([y()], f10.prototype, "autoNavigate", null), e2([y()], f10.prototype, "autoSelect", null), e2([y({
  readOnly: true
})], f10.prototype, "defaultSources", null), e2([y()], f10.prototype, "disabled", void 0), e2([y()], f10.prototype, "goToOverride", null), e2([y()], f10.prototype, "icon", null), e2([y()], f10.prototype, "includeDefaultSources", null), e2([y()], f10.prototype, "label", null), e2([y()], f10.prototype, "locationEnabled", null), e2([y()], f10.prototype, "maxResults", null), e2([y()], f10.prototype, "maxSuggestions", null), e2([y(), e3("esri/widgets/Search/t9n/Search")], f10.prototype, "messages", void 0), e2([y(), e3("esri/t9n/common")], f10.prototype, "messagesCommon", void 0), e2([y()], f10.prototype, "minSuggestCharacters", null), e2([y()], f10.prototype, "popupEnabled", null), e2([y()], f10.prototype, "popupTemplate", null), e2([y()], f10.prototype, "portal", null), e2([y()], f10.prototype, "resultGraphic", null), e2([y()], f10.prototype, "resultGraphicEnabled", null), e2([y({
  readOnly: true
})], f10.prototype, "results", null), e2([y()], f10.prototype, "searchAllEnabled", null), e2([y()], f10.prototype, "searchTerm", null), e2([y({
  readOnly: true
})], f10.prototype, "selectedResult", null), e2([y()], f10.prototype, "sources", null), e2([y({
  readOnly: true
})], f10.prototype, "suggestions", null), e2([y()], f10.prototype, "suggestionsEnabled", null), e2([y()], f10.prototype, "view", null), e2([e5(["search-complete", "search-clear", "search-start", "select-result", "suggest-start", "suggest-complete"]), y({
  type: X
})], f10.prototype, "viewModel", void 0), f10 = e2([a2("esri.widgets.Search")], f10);
var E2 = f10;

export {
  x2 as x,
  v4 as v,
  E2 as E
};
//# sourceMappingURL=chunk-ML2IGFQF.js.map
