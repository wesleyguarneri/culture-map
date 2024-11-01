import {
  A,
  l as l2
} from "./chunk-VGYXQASE.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import {
  b
} from "./chunk-CQDYITZC.js";
import "./chunk-5I6J67HP.js";
import {
  l,
  s as s2
} from "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-EDSMXTFO.js";
import {
  c
} from "./chunk-MNLT652N.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  P,
  d,
  p
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-YPWMP2VK.js";
import "./chunk-23E6RT3O.js";
import "./chunk-RCBGISRX.js";
import "./chunk-2P72IR2Y.js";
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
  o2 as o
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/ScaleRangeSlider/css.js
var e4 = "esri-scale-range-slider";
var a2 = `${e4}__scale-menu`;
var c2 = {
  base: e4,
  segmentElementActive: `${e4}__segment-active`,
  scaleIndicatorWrapper: `${e4}__scale-indicator-wrapper`,
  scaleIndicator: `${e4}__scale-indicator`,
  scaleIndicatorIcon: `${e4}__scale-indicator-icon`,
  scaleIndicatorContainer: `${e4}__scale-indicator-container`,
  scaleMenuContainer: `${a2}-container`,
  scaleMenuSeparator: `${a2}-separator`,
  scaleMenuToggle: `${a2}-toggle`,
  scaleMenuSubLabel: `${a2}-sublabel`,
  scalePreview: `${e4}__scale-preview`,
  scalePreviewThumbnail: `${e4}__scale-preview-thumbnail`
};

// ../../../node_modules/@arcgis/core/widgets/ScaleRangeSlider/scalePreviewUtils.js
var s3 = "en-wo";
var r2 = c().substr(0, 2);
var t;
!function(e5) {
  e5.ar = "ar", e5.bg = "bg", e5.cs = "cs", e5.da = "da", e5.de = "de", e5.el = "el", e5.en = "en", e5.es = "es", e5.et = "et", e5.fi = "fi", e5.fr = "fr", e5.is = "is", e5.it = "it", e5.ja = "ja", e5.ko = "ko", e5.lt = "lt", e5.lv = "lv", e5.nl = "nl", e5.nn = "nn", e5.pl = "pl", e5.pt = "pt", e5.ro = "ro", e5.ru = "ru", e5.sk = "sk", e5.sv = "sv", e5.th = "th", e5.zh = "zh";
}(t || (t = {}));
var i = {
  ae: t.en,
  ar: t.es,
  at: t.de,
  au: t.en,
  be: t.nl,
  bg: t.bg,
  bo: t.es,
  br: t.pt,
  ca: t.en,
  ch: t.de,
  ci: t.fr,
  cl: t.es,
  cn: t.zh,
  co: t.es,
  cr: t.es,
  cz: t.cs,
  de: t.de,
  dk: t.da,
  ee: t.et,
  eg: t.en,
  es: t.es,
  fi: t.fi,
  fr: t.fr,
  gb: t.en,
  gl: t.da,
  gr: t.el,
  gt: t.es,
  hk: t.en,
  id: t.en,
  ie: t.en,
  il: t.en,
  in: t.en,
  iq: t.ar,
  is: t.is,
  it: t.it,
  jp: t.ja,
  ke: t.en,
  kr: t.ko,
  kw: t.ar,
  li: t.de,
  lt: t.lt,
  lu: t.en,
  lv: t.lv,
  ma: t.fr,
  mg: t.fr,
  ml: t.fr,
  mo: t.en,
  mx: t.es,
  my: t.en,
  ni: t.es,
  nl: t.nl,
  no: t.nn,
  nz: t.en,
  pe: t.es,
  pl: t.pl,
  pr: t.es,
  pt: t.pt,
  ro: t.ro,
  ru: t.ru,
  rw: t.en,
  se: t.sv,
  sg: t.en,
  sk: t.sk,
  sr: t.nl,
  sv: t.es,
  th: t.th,
  tn: t.fr,
  tw: t.zh,
  us: t.en,
  ve: t.es,
  vi: t.en,
  wo: t.en,
  za: t.en
};
var l3 = /* @__PURE__ */ new Set(["ar-iq", "ar-kw", "bg-bg", "cs-cz", "da-dk", "da-gl", "de-at", "de-ch", "de-de", "de-li", "el-gr", "en-ae", "en-au", "en-ca", "en-eg", "en-gb", "en-hk", "en-id", "en-ie", "en-il", "en-in", "en-iq", "en-ke", "en-lu", "en-mo", "en-my", "en-nz", "en-rw", "en-sg", "en-us", "en-vi", "en-wo", "en-za", "es-ar", "es-bo", "es-cl", "es-co", "es-cr", "es-es", "es-gt", "es-mx", "es-ni", "es-pe", "es-pr", "es-sv", "es-ve", "et-ee", "fi-fi", "fr-ci", "fr-fr", "fr-ma", "fr-mg", "fr-ml", "fr-tn", "is-is", "it-it", "ja-jp", "ko-kr", "lt-lt", "lv-lv", "nl-be", "nl-nl", "nl-sr", "nn-no", "pl-pl", "pt-br", "pt-pt", "ro-ro", "ru-ru", "sk-sk", "sv-se", "th-th", "zh-cn", "zh-tw"]);
function a3(e5) {
  return e5.toLowerCase();
}
function o2(n3) {
  return `url(${n2(`esri/widgets/ScaleRangeSlider/images/scalePreview/${n3}.jpg`)})`;
}
function c3(e5) {
  e5 = a3(e5);
  const n3 = `${r2}-${e5}`, t2 = `${i[e5]}-${e5}`;
  return o2(l3.has(n3) ? n3 : l3.has(t2) ? t2 : s3);
}
function f(e5) {
  const n3 = 5, s5 = 5;
  if (e5 < 0 || e5 >= n3 * s5) return;
  return `-${128 * (e5 % n3)}px -${128 * Math.floor(e5 / s5)}px`;
}

// ../../../node_modules/@arcgis/core/widgets/ScaleRangeSlider/ScaleRanges.js
var i2;
var c4 = 147914382;
var l4 = [{
  id: "room",
  minScale: 100
}, {
  id: "rooms",
  minScale: 400
}, {
  id: "smallBuilding",
  minScale: 800
}, {
  id: "building",
  minScale: 1999
}, {
  id: "buildings",
  minScale: 3999
}, {
  id: "street",
  minScale: 7499
}, {
  id: "streets",
  minScale: 14999
}, {
  id: "neighborhood",
  minScale: 29999
}, {
  id: "town",
  minScale: 59999
}, {
  id: "city",
  minScale: 119999
}, {
  id: "cities",
  minScale: 249999
}, {
  id: "metropolitanArea",
  minScale: 499999
}, {
  id: "county",
  minScale: 999999
}, {
  id: "counties",
  minScale: 1999999
}, {
  id: "stateProvince",
  minScale: 3999999
}, {
  id: "statesProvinces",
  minScale: 6999999
}, {
  id: "countriesSmall",
  minScale: 14999999
}, {
  id: "countriesBig",
  minScale: 34999999
}, {
  id: "continent",
  minScale: 99999999
}, {
  id: "world",
  minScale: c4
}];
function r3(e5, n3) {
  const t2 = l4, a4 = t2.length, i3 = [];
  let c6, r4 = e5;
  e5 = e5 >= 0 ? e5 : 0, n3 = n3 > 0 ? n3 : t2[a4 - 1].minScale;
  for (let l5 = 0; l5 < a4; l5++) {
    const a5 = Math.min(t2[l5].minScale, n3);
    c6 = Math.min(a5, n3), e5 <= a5 && r4 < n3 && i3.push({
      id: t2[l5].id,
      maxScale: Math.max(r4, e5),
      minScale: c6
    }), r4 = c6 + 1;
  }
  return i3.reverse(), s4(i3);
}
function s4(e5) {
  if (0 === e5.length) return e5;
  const [n3] = e5, t2 = e5[e5.length - 1];
  return n3.minScale === n3.maxScale && (e5.shift(), n3.minScale += 1), t2.minScale === t2.maxScale && (e5.pop(), t2.maxScale -= 1), e5;
}
var o3 = i2 = class extends S {
  constructor() {
    super(...arguments), this.ranges = [];
  }
  static fromScaleRange({
    maxScale: e5,
    minScale: n3
  }) {
    return new i2({
      ranges: r3(e5, n3)
    });
  }
  static fromLayer(e5) {
    return __async(this, null, function* () {
      yield e5.when();
      const n3 = "tileInfo" in e5 ? e5.tileInfo?.lods : void 0;
      let t2;
      if (n3) {
        t2 = r3(n3[n3.length - 1].scale, n3[0].scale);
      } else t2 = r3(0, 0);
      return new i2({
        ranges: t2
      });
    });
  }
  get firstRange() {
    return this.ranges[0];
  }
  get lastRange() {
    const e5 = this.ranges;
    return e5[e5.length - 1];
  }
  get length() {
    return this.ranges.length;
  }
  get maxScale() {
    return this.lastRange.maxScale;
  }
  get minScale() {
    return this.firstRange.minScale;
  }
  isMinScaleEdge(e5) {
    const {
      firstRange: n3
    } = this, t2 = n3.minScale, a4 = i2.RecommendedScales[n3.id] || n3.maxScale;
    return e5 <= t2 && e5 >= a4;
  }
  isMaxScaleEdge(e5) {
    const {
      lastRange: n3
    } = this, t2 = n3.maxScale;
    return e5 <= (i2.RecommendedScales[n3.id] || n3.minScale) && e5 >= t2;
  }
  findScaleRange(e5) {
    const n3 = this.ranges;
    let t2;
    if (e5 >= n3[0].maxScale) return n3[0];
    if (e5 <= n3[n3.length - 1].minScale) return n3[n3.length - 1];
    for (let a4 = 0; a4 < n3.length; a4++) {
      const i3 = n3[a4];
      if (e5 >= i3.maxScale && e5 <= i3.minScale) {
        t2 = i3;
        break;
      }
    }
    return t2;
  }
  findScaleRangeByIndex(e5) {
    return this.ranges[this._clampScaleRangeIndex(e5)];
  }
  scaleToRangeIndex(e5) {
    return this.ranges.indexOf(this.findScaleRange(e5));
  }
  clampScale(e5) {
    return Math.min(this.minScale, Math.max(this.maxScale, e5));
  }
  clampMinScale(e5) {
    return 0 === e5 ? this.minScale : this.clampScale(e5);
  }
  clampMaxScale(e5) {
    return this.clampScale(e5);
  }
  contains(e5) {
    const n3 = this.ranges;
    let t2 = false;
    for (let a4 = 0; a4 < n3.length; a4++) {
      const {
        maxScale: i3,
        minScale: c6
      } = n3[a4];
      if (e5 >= i3 && e5 <= c6) {
        t2 = true;
        break;
      }
    }
    return t2;
  }
  _clampScaleRangeIndex(e5) {
    const n3 = 0;
    if (e5 <= n3) return n3;
    const t2 = this.ranges.length - 1;
    return e5 > t2 ? t2 : Math.floor(e5);
  }
};
o3.RecommendedScales = Object.freeze({
  world: c4,
  continent: 5e7,
  countriesBig: 25e6,
  countriesSmall: 12e6,
  statesProvinces: 6e6,
  stateProvince: 3e6,
  counties: 15e5,
  county: 75e4,
  metropolitanArea: 32e4,
  cities: 16e4,
  city: 8e4,
  town: 4e4,
  neighborhood: 2e4,
  streets: 1e4,
  street: 5e3,
  buildings: 2500,
  building: 1250,
  smallBuilding: 800,
  rooms: 400,
  room: 100
}), e([y()], o3.prototype, "firstRange", null), e([y()], o3.prototype, "lastRange", null), e([y()], o3.prototype, "length", null), e([y()], o3.prototype, "maxScale", null), e([y()], o3.prototype, "minScale", null), e([y({
  constructOnly: true
})], o3.prototype, "ranges", void 0), o3 = i2 = e([a("esri.widgets.ScaleRangeSlider.ScaleRanges")], o3);
var m = o3;

// ../../../node_modules/@arcgis/core/widgets/ScaleRangeSlider/ScaleRangeSliderViewModel.js
var c5 = class extends S {
  constructor(e5) {
    super(e5), this.layer = null, this.mode = "range", this.scaleRanges = m.fromScaleRange({
      minScale: 0,
      maxScale: 0
    }), this.sliderViewModel = (() => {
      const {
        max: e6
      } = this._getSliderIndexRange(this.scaleRanges.length - 1);
      return new l2({
        precision: 10,
        min: 0,
        max: e6,
        values: [0, e6]
      });
    })();
  }
  initialize() {
    this.addHandles([d(() => this.layer, (e5) => e5?.load().catch(() => {
    })), d(() => this.mode, (e5) => {
      "range" === e5 && 1 === this.sliderViewModel.values?.length ? this.sliderViewModel.values = [this.sliderViewModel.min, this.sliderViewModel.values[0]] : 2 === this.sliderViewModel.values?.length && ("min-scale-only" === e5 ? this.sliderViewModel.values = [this.sliderViewModel.values[0]] : "max-scale-only" === e5 && (this.sliderViewModel.values = [this.sliderViewModel.values[1]]));
    }), d(() => ({
      loaded: this.layer?.loaded,
      ready: this.view?.ready
    }), ({
      loaded: e5,
      ready: i3
    }) => {
      if (!e5 || !i3) return;
      if (this._hasTiledLayer()) {
        const e6 = this._getLayerResampling() ? void 0 : this.mapScaleToSlider(this._getTiledLayerMaxScale()), i4 = this.mapScaleToSlider(this._getTiledLayerMinScale());
        this.sliderViewModel.effectiveMax = e6, this.sliderViewModel.effectiveMin = i4;
      } else {
        const e6 = this.layer && "maxScaleRange" in this.layer ? this.layer.maxScaleRange : null, {
          minScale: i4 = 0,
          maxScale: a5 = 0
        } = e6 ?? {};
        this.sliderViewModel.effectiveMax = 0 === a5 ? void 0 : this.mapScaleToSlider(a5), this.sliderViewModel.effectiveMin = 0 === i4 ? void 0 : this.mapScaleToSlider(i4);
      }
      const a4 = this.layer;
      a4 && "minScale" in a4 && "maxScale" in a4 ? (this.minScale = a4.minScale, this.maxScale = a4.maxScale) : (this.minScale = void 0, this.maxScale = void 0);
    }, P)]);
  }
  get effectiveMaxScale() {
    return 0 === this.maxScale ? this.maxScaleLimit : this.maxScale;
  }
  get effectiveMinScale() {
    return 0 === this.minScale ? this.minScaleLimit : this.minScale;
  }
  get effectiveMaxScaleLimit() {
    return this.mapSliderToScale(this.sliderViewModel.effectiveMax ?? this.sliderViewModel.max);
  }
  get effectiveMinScaleLimit() {
    return this.mapSliderToScale(this.sliderViewModel.effectiveMin ?? this.sliderViewModel.min);
  }
  get maxScale() {
    return this._getScale("max");
  }
  set maxScale(e5) {
    this._setMaxScaleOnSlider(e5);
  }
  get maxScaleLimit() {
    return this.mapSliderToScale(this.sliderViewModel.max);
  }
  set maxScaleLimit(e5) {
    this._setSliderRange({
      maxScale: e5,
      minScale: this.minScaleLimit
    });
  }
  get minScale() {
    return this._getScale("min");
  }
  set minScale(e5) {
    this._setMinScaleOnSlider(e5);
  }
  get minScaleLimit() {
    return this.mapSliderToScale(this.sliderViewModel.min);
  }
  set minScaleLimit(e5) {
    this._setSliderRange({
      maxScale: this.maxScaleLimit,
      minScale: e5
    });
  }
  get state() {
    const {
      view: e5,
      layer: i3
    } = this;
    return !e5 && !i3 || !e5 && i3?.loaded || !i3 && e5?.ready || e5 && e5.ready && i3?.loaded ? "ready" : "disabled";
  }
  set view(e5) {
    this._set("view", e5);
  }
  mapScaleToSlider(e5) {
    const i3 = this.scaleRanges.scaleToRangeIndex(e5), a4 = this.scaleRanges.findScaleRangeByIndex(i3), {
      maxScale: l5,
      minScale: t2
    } = a4, {
      max: s5,
      min: r4
    } = this._getSliderIndexRange(i3);
    return this._mapToRange(e5, t2, l5, r4, s5);
  }
  mapSliderToScale(e5) {
    const i3 = this.scaleRanges.findScaleRangeByIndex(e5), {
      maxScale: a4,
      minScale: l5
    } = i3, {
      max: t2,
      min: s5
    } = this._getSliderIndexRange(e5);
    return this._mapToRange(e5, s5, t2, l5, a4);
  }
  _setSliderRange(e5) {
    this.scaleRanges = m.fromScaleRange(e5);
    const {
      max: i3
    } = this._getSliderIndexRange(this.scaleRanges.length - 1);
    this.sliderViewModel.max = i3, this.sliderViewModel.min = 0, this.notifyChange("maxScaleLimit"), this.notifyChange("minScaleLimit");
  }
  _getSliderIndexRange(e5) {
    const i3 = Math.floor(e5);
    return {
      min: i3,
      max: i3 + 0.99999
    };
  }
  _mapToRange(e5, i3, a4, l5, t2) {
    return l5 + (e5 - i3) * (t2 - l5) / (a4 - i3);
  }
  _getSliderValue(e5) {
    const {
      min: i3,
      max: a4,
      values: l5
    } = this.sliderViewModel, [t2, s5] = l5;
    switch (this.mode) {
      case "max-scale-only":
        return "min" === e5 ? i3 : t2;
      case "min-scale-only":
        return "min" === e5 ? t2 : a4;
      default:
        return "min" === e5 ? t2 ?? i3 : s5 ?? a4;
    }
  }
  _getScale(e5) {
    const i3 = this.mapSliderToScale(this._getSliderValue(e5));
    return this._normalizeScale(e5, i3);
  }
  _setMaxScaleOnSlider(e5) {
    const {
      scaleRanges: i3,
      sliderViewModel: a4
    } = this;
    if (void 0 !== e5) {
      const l5 = this.mapScaleToSlider(this._constrainMaxScaleToLayer(i3.clampMaxScale(e5)));
      switch (this.mode) {
        case "range":
          a4.values = [a4.values[0], l5];
          break;
        case "max-scale-only":
          a4.values = [l5];
      }
    }
  }
  _setMinScaleOnSlider(e5) {
    const {
      scaleRanges: i3,
      sliderViewModel: a4
    } = this;
    if (void 0 !== e5) {
      const l5 = this.mapScaleToSlider(this._constrainMinScaleToLayer(i3.clampMinScale(e5)));
      switch (this.mode) {
        case "range":
          a4.values = [l5, a4.values[1]];
          break;
        case "min-scale-only":
          a4.values = [l5];
      }
    }
  }
  _constrainMinScaleToLayer(e5) {
    const {
      scaleRanges: i3
    } = this;
    if (this._hasTiledLayer()) {
      const {
        firstRange: a4
      } = i3, l5 = this._getTiledLayerMinScale(), t2 = 0.85;
      e5 = this._mapToRange(e5, a4.maxScale, a4.minScale, 0, 1) > t2 || e5 > l5 ? l5 : e5;
    }
    return e5;
  }
  _constrainMaxScaleToLayer(e5) {
    if (this._hasTiledLayer() && !this._getLayerResampling()) {
      const i3 = this._getTiledLayerMaxScale();
      e5 = e5 < i3 ? i3 : e5;
    }
    return e5;
  }
  _normalizeScale(e5, i3) {
    const a4 = "max" === e5 ? "maxScale" : "minScale", l5 = this._hasTiledLayer() ? "min" === e5 ? this._getTiledLayerMinScale() : this._getTiledLayerMaxScale() : this.scaleRanges[a4], t2 = this._hasTiledLayer() ? "min" === e5 ? this._getTiledLayerRealMinScale() : this._getTiledLayerRealMaxScale() : l5, s5 = 1e-6, r4 = 0 === i3 || t2 === i3 || Math.abs(t2 - i3) <= s5;
    return Number((r4 ? 0 : i3).toFixed(6));
  }
  _getLayerLODS() {
    if (!this.layer?.loaded || !("tileInfo" in this.layer)) return null;
    return "imagery-tile" === this.layer?.type && "Raster" === this.layer.raster?.tileType ? null : this.layer.tileInfo?.lods;
  }
  _getLayerResampling() {
    return !!this.layer?.loaded && (!("resampling" in this.layer) || this.layer.resampling);
  }
  _getTiledLayerMinScale() {
    const e5 = this._getLayerLODS();
    return this.scaleRanges.clampMinScale(e5[0].scale);
  }
  _getTiledLayerMaxScale() {
    const e5 = this._getLayerLODS();
    return e5[e5.length - 1].scale;
  }
  _getTiledLayerRealMinScale() {
    const e5 = this._getLayerLODS(), i3 = this.layer, a4 = i3 && "sourceJSON" in i3 ? i3.sourceJSON?.tileInfo?.lods ?? e5 : e5;
    return this.scaleRanges.clampMinScale(a4[0].scale);
  }
  _getTiledLayerRealMaxScale() {
    const e5 = this._getLayerLODS(), i3 = this.layer, a4 = i3 && "sourceJSON" in i3 ? i3.sourceJSON?.tileInfo?.lods ?? e5 : e5;
    return a4[a4.length - 1].scale;
  }
  _hasTiledLayer() {
    return !!this._getLayerLODS();
  }
};
e([y({
  readOnly: true
})], c5.prototype, "effectiveMaxScale", null), e([y({
  readOnly: true
})], c5.prototype, "effectiveMinScale", null), e([y()], c5.prototype, "effectiveMaxScaleLimit", null), e([y()], c5.prototype, "effectiveMinScaleLimit", null), e([y()], c5.prototype, "layer", void 0), e([y()], c5.prototype, "maxScale", null), e([y()], c5.prototype, "maxScaleLimit", null), e([y()], c5.prototype, "mode", void 0), e([y()], c5.prototype, "minScale", null), e([y()], c5.prototype, "minScaleLimit", null), e([y()], c5.prototype, "scaleRanges", void 0), e([y()], c5.prototype, "sliderViewModel", void 0), e([y({
  readOnly: true
})], c5.prototype, "state", null), e([y()], c5.prototype, "view", null), c5 = e([a("esri.widgets.ScaleRangeSlider.ScaleRangeSliderViewModel")], c5);
var o4 = c5;

// ../../../node_modules/@arcgis/core/widgets/ScaleRangeSlider.js
var y2 = {
  preview: true,
  scaleMenus: {
    maxScaleMenu: true,
    minScaleMenu: true
  }
};
var x = {
  maximumFractionDigits: 0
};
var I = "1:";
var L = 16;
var j = class extends B {
  constructor(e5, i3) {
    super(e5, i3), this._activeMenu = null, this._activeThumb = null, this._customInput = null, this._maxThumbNode = null, this._minThumbNode = null, this._previewAutoCloseTimeoutId = void 0, this._previewPopover = null, this._slider = new A({
      thumbCreatedFunction: (e6, i4, l5) => {
        0 === e6 ? this._minThumbNode = l5 : 1 === e6 && (this._maxThumbNode = l5), this.addHandles([o(l5, "mouseenter", () => {
          this._activeThumb = e6, this.scheduleRender();
        }), o(l5, "mouseleave", () => {
          this._previewAutoCloseTimeoutId || (this._activeThumb = null, this.scheduleRender());
        })]);
      }
    }), this.disabled = false, this.messages = null, this.region = "US", this.viewModel = new o4(), this.visibleElements = y2, this._afterInputNumberCreate = (e6) => {
      "value" in e6 && null != e6.value && "setNumberValue" in e6 && e6.setNumberValue({
        committing: false,
        value: e6.value,
        origin: "direct"
      }), this._customInput = e6;
    }, this._handleCustomScaleInputChange = (e6, t2) => {
      const {
        viewModel: {
          scaleRanges: i4
        }
      } = this, l5 = Number.parseFloat(t2.value);
      Number.isNaN(l5) ? t2.value = e6 : this._setScale(i4.clampScale(l5));
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js"),
      dropdown: () => import("./calcite-dropdown-KSN3N5QS.js"),
      "dropdown-group": () => import("./calcite-dropdown-group-NOJPDGFC.js"),
      "dropdown-item": () => import("./calcite-dropdown-item-TU2YDPC5.js"),
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      "input-number": () => import("./calcite-input-number-OFLJXQWU.js"),
      label: () => import("./calcite-label-NSQ5QQOX.js"),
      popover: () => import("./calcite-popover-24Y2F2AH.js")
    });
  }
  initialize() {
    this.addHandles([d(() => this.viewModel, (e5) => this._slider.viewModel = e5?.sliderViewModel ?? null, P), d(() => this._interactive, (e5) => {
      this._slider.disabled = !e5, e5 || this._setActiveMenu(null);
    }, P), this._slider.on("thumb-drag", ({
      index: e5
    }) => {
      this._activeThumb = e5, clearTimeout(this._previewAutoCloseTimeoutId);
      const t2 = 250;
      this._previewAutoCloseTimeoutId = setTimeout(() => {
        this._previewAutoCloseTimeoutId = void 0, this._activeThumb = null;
      }, t2);
    }), p(() => true === this.view?.stationary, () => this.scheduleRender())]);
  }
  destroy() {
    this._slider = u(this._slider);
  }
  get _maxScaleMenuEnabled() {
    const {
      scaleMenus: e5
    } = this.visibleElements;
    return true === e5 || "boolean" != typeof e5 && e5.maxScaleMenu;
  }
  get _minScaleMenuEnabled() {
    const {
      scaleMenus: e5
    } = this.visibleElements;
    return true === e5 || "boolean" != typeof e5 && e5.minScaleMenu;
  }
  get _interactive() {
    return "disabled" !== this.viewModel?.state && !this.disabled;
  }
  get effectiveMaxScale() {
    return this.viewModel.effectiveMaxScale;
  }
  get effectiveMinScale() {
    return this.viewModel.effectiveMinScale;
  }
  get effectiveMaxScaleLimit() {
    return this.viewModel.effectiveMaxScaleLimit;
  }
  get effectiveMinScaleLimit() {
    return this.viewModel.effectiveMinScaleLimit;
  }
  get icon() {
    return "actual-size";
  }
  set icon(e5) {
    this._overrideIfSome("icon", e5);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e5) {
    this._overrideIfSome("label", e5);
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e5) {
    this.viewModel.layer = e5;
  }
  get maxScale() {
    return this.viewModel.maxScale;
  }
  set maxScale(e5) {
    this.viewModel.maxScale = e5;
  }
  get maxScaleLimit() {
    return this.viewModel.maxScaleLimit;
  }
  set maxScaleLimit(e5) {
    this.viewModel.maxScaleLimit = e5;
  }
  get mode() {
    return this.viewModel.mode;
  }
  set mode(e5) {
    this.viewModel.mode = e5;
  }
  get minScale() {
    return this.viewModel.minScale;
  }
  set minScale(e5) {
    this.viewModel.minScale = e5;
  }
  get minScaleLimit() {
    return this.viewModel.minScaleLimit;
  }
  set minScaleLimit(e5) {
    this.viewModel.minScaleLimit = e5;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  castVisibleElements(e5) {
    return __spreadProps(__spreadValues(__spreadValues({}, y2), e5), {
      scaleMenus: "boolean" == typeof e5?.scaleMenus ? e5.scaleMenus : __spreadValues(__spreadValues({}, y2.scaleMenus), e5?.scaleMenus)
    });
  }
  formatScale(e5) {
    return `${I}${l(e5, x)}`;
  }
  render() {
    const {
      _interactive: e5,
      _slider: t2,
      label: i3,
      view: l5,
      viewModel: {
        state: s5
      }
    } = this, a4 = this._getLabel("min"), n3 = this._getLabel("max"), {
      segmentElements: o5
    } = t2, r4 = o5.at("min-scale-only" === this.mode ? -1 : -2);
    return r4 && r4.classList.add(c2.segmentElementActive), n("div", {
      "aria-label": i3,
      class: this.classes(c2.base, e3.widget, e5 ? null : e3.disabled)
    }, n("div", {
      class: c2.scaleIndicatorWrapper,
      dir: "ltr"
    }, "ready" === s5 && l5 ? this._renderCurrentScaleIndicator() : null, t2.render(), this._renderPreviewPopover()), n("div", {
      class: c2.scaleMenuContainer
    }, this._minScaleMenuEnabled && a4 ? this._renderScaleMenuToggle("min", a4) : null, n("div", {
      class: c2.scaleMenuSeparator
    }), this._maxScaleMenuEnabled && n3 ? this._renderScaleMenuToggle("max", n3) : null));
  }
  _renderPreviewPopover() {
    const {
      _activeThumb: e5
    } = this, t2 = null != e5 && this.visibleElements.preview, i3 = t2 ? 0 === e5 ? this._minThumbNode : this._maxThumbNode : "";
    return n("calcite-popover", {
      afterCreate: b,
      afterUpdate: () => this._previewPopover?.reposition(),
      bind: this,
      "data-node-ref": "_previewPopover",
      label: this.messages.preview,
      offsetDistance: L,
      open: t2,
      overlayPositioning: "fixed",
      placement: "top",
      referenceElement: i3,
      triggerDisabled: true
    }, this._renderScalePreview());
  }
  _renderScalePreview() {
    const {
      _activeThumb: e5,
      _slider: t2,
      region: i3,
      viewModel: {
        scaleRanges: l5
      }
    } = this, s5 = 0 === e5 || "range" !== this.mode ? t2.values[0] : t2.values[1], a4 = Object.keys(m.RecommendedScales).indexOf(l5.findScaleRangeByIndex(s5).id), n3 = {
      backgroundImage: c3(i3),
      backgroundPosition: f(a4)
    };
    return n("div", {
      class: c2.scalePreview
    }, n("div", {
      class: c2.scalePreviewThumbnail,
      styles: n3
    }));
  }
  _getLabel(e5) {
    const {
      _slider: t2,
      messages: i3,
      mode: l5,
      viewModel: {
        scaleRanges: s5
      }
    } = this, [a4, n3] = t2.values, o5 = "min" === e5 || "range" !== l5 ? a4 : n3, r4 = i3.scaleRangeLabels[s5.findScaleRangeByIndex(o5).id];
    switch (l5) {
      case "range":
        return r4;
      case "max-scale-only":
        return "min" === e5 ? null : r4;
      case "min-scale-only":
        return "min" === e5 ? r4 : null;
    }
  }
  _renderScaleMenuToggle(e5, t2) {
    const {
      _activeMenu: i3,
      _interactive: l5
    } = this, s5 = i3 === e5;
    return [n("calcite-dropdown", {
      closeOnSelectDisabled: true,
      "data-type": e5,
      open: s5,
      overlayPositioning: "fixed",
      placement: "max" === e5 ? "bottom-end" : "bottom-start",
      scale: "s",
      onCalciteDropdownClose: ({
        target: t3
      }) => {
        this._activeMenu === e5 && this._setActiveMenu(null), t3.setFocus();
      },
      onCalciteDropdownOpen: () => this._setActiveMenu(e5)
    }, n("calcite-button", {
      appearance: s5 ? "outline" : "transparent",
      "aria-pressed": s5.toString(),
      class: c2.scaleMenuToggle,
      disabled: !l5,
      iconEnd: "chevron-down",
      scale: "s",
      slot: "trigger"
    }, t2), s5 && "max" === e5 ? this._renderMaxScaleMenu() : null, s5 && "min" === e5 ? this._renderMinScaleMenu() : null)];
  }
  _renderMinScaleMenu() {
    const {
      effectiveMaxScale: e5,
      effectiveMinScaleLimit: t2,
      view: i3,
      viewModel: {
        scaleRanges: l5
      }
    } = this, s5 = i3 ? i3.scale : void 0;
    return this._renderScaleMenu({
      type: "min",
      min: t2,
      max: l5.findScaleRange(e5).minScale,
      viewScale: s5
    });
  }
  _renderMaxScaleMenu() {
    const {
      effectiveMinScale: e5,
      effectiveMaxScaleLimit: t2,
      view: i3,
      viewModel: {
        scaleRanges: l5
      }
    } = this, s5 = i3 ? i3.scale : void 0;
    return this._renderScaleMenu({
      type: "max",
      min: l5.findScaleRange(e5).maxScale,
      max: t2,
      viewScale: s5
    });
  }
  _renderScaleMenu({
    viewScale: e5,
    min: t2,
    max: i3,
    type: l5
  }) {
    const {
      effectiveMaxScale: s5,
      effectiveMinScale: a4,
      messages: n3
    } = this, o5 = "max" === l5 ? s5 : a4, r4 = m.fromScaleRange({
      minScale: t2,
      maxScale: i3
    }), c6 = this.messages.featuredScaleLabels, m2 = m.RecommendedScales, d2 = Object.keys(m2).filter((e6) => r4.contains(m2[e6])).map((e6) => this._renderScaleMenuItem({
      scaleLabel: c6[e6],
      scaleValue: m2[e6],
      isSelected: o5 === m2[e6],
      valueVisible: "world" !== e6
    }));
    return n("calcite-dropdown-group", {
      key: `${this.id}__scale-menu--${l5}`
    }, this._renderCustomScaleValue({
      currentScale: o5
    }), null != e5 ? this._renderScaleMenuItem({
      scaleValue: e5,
      scaleLabel: n3.featuredScaleLabels.current,
      isSelected: o5 === e5,
      valueVisible: true
    }) : null, d2);
  }
  _renderCustomScaleValue({
    currentScale: e5
  }) {
    const {
      messages: t2
    } = this, i3 = Math.round(e5).toString();
    return n("calcite-dropdown-item", {
      afterCreate: (e6) => {
        e6.setFocus();
      },
      key: "custom-scale",
      label: t2.featuredScaleLabels.custom,
      onCalciteDropdownItemSelect: () => {
        this._customInput?.setFocus();
      }
    }, n("calcite-label", {
      scale: "s"
    }, n("span", null, t2.featuredScaleLabels.custom), n("calcite-input-number", {
      afterCreate: this._afterInputNumberCreate,
      groupSeparator: true,
      inputMode: "numeric",
      max: m.RecommendedScales.world,
      min: 0,
      numberButtonType: "none",
      placeholder: t2.customScaleInputTooltip,
      prefixText: I,
      scale: "s",
      step: 1,
      value: i3,
      onCalciteInputNumberChange: ({
        target: e6
      }) => this._handleCustomScaleInputChange(i3, e6)
    })));
  }
  _renderScaleMenuItem(e5) {
    const {
      scaleValue: t2,
      scaleLabel: i3,
      valueVisible: l5,
      isSelected: s5
    } = e5;
    return n("calcite-dropdown-item", {
      key: i3,
      label: i3,
      selected: s5,
      onCalciteDropdownItemSelect: this._setScale.bind(this, t2)
    }, i3, l5 ? n("div", {
      class: c2.scaleMenuSubLabel
    }, this.formatScale(t2)) : void 0);
  }
  _renderCurrentScaleIndicator() {
    const {
      _slider: e5,
      messages: t2,
      view: i3,
      viewModel: {
        scaleRanges: l5
      }
    } = this, s5 = l5.clampScale(i3.scale), a4 = this.viewModel.mapScaleToSlider(s5), n3 = a4 / e5.max, o5 = t2.scaleRangeLabels[l5.findScaleRangeByIndex(a4).id], r4 = s2(t2.currentScaleTooltip, {
      scaleLabel: o5
    });
    return n("div", {
      class: c2.scaleIndicatorContainer,
      key: "scale-indicator"
    }, n("div", {
      "aria-label": r4,
      class: c2.scaleIndicator,
      styles: {
        left: 100 * n3 + "%"
      },
      title: r4
    }, this.renderCurrentScaleIndicatorIcon()));
  }
  renderCurrentScaleIndicatorIcon() {
    return n("calcite-icon", {
      class: c2.scaleIndicatorIcon,
      icon: "caret-up",
      scale: "s"
    });
  }
  _setScale(e5) {
    "max" === this._activeMenu ? this.maxScale = Math.min(e5, this.effectiveMinScale - 1) : this.minScale = Math.max(e5, this.effectiveMaxScale + 1), this._setActiveMenu(null);
  }
  _setActiveMenu(e5) {
    this._activeMenu = e5;
  }
};
e([y()], j.prototype, "_activeMenu", void 0), e([y()], j.prototype, "_activeThumb", void 0), e([y()], j.prototype, "_customInput", void 0), e([y()], j.prototype, "_maxScaleMenuEnabled", null), e([y()], j.prototype, "_minScaleMenuEnabled", null), e([y()], j.prototype, "_slider", void 0), e([y({
  readOnly: true
})], j.prototype, "_interactive", null), e([y()], j.prototype, "disabled", void 0), e([y()], j.prototype, "effectiveMaxScale", null), e([y()], j.prototype, "effectiveMinScale", null), e([y()], j.prototype, "effectiveMaxScaleLimit", null), e([y()], j.prototype, "effectiveMinScaleLimit", null), e([y()], j.prototype, "icon", null), e([y()], j.prototype, "label", null), e([y()], j.prototype, "layer", null), e([y()], j.prototype, "maxScale", null), e([y()], j.prototype, "maxScaleLimit", null), e([y(), e2("esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider")], j.prototype, "messages", void 0), e([y()], j.prototype, "mode", null), e([y()], j.prototype, "minScale", null), e([y()], j.prototype, "minScaleLimit", null), e([y()], j.prototype, "region", void 0), e([y()], j.prototype, "view", null), e([y()], j.prototype, "viewModel", void 0), e([y()], j.prototype, "visibleElements", void 0), e([s("visibleElements")], j.prototype, "castVisibleElements", null), j = e([a("esri.widgets.ScaleRangeSlider")], j);
var C = j;
export {
  C as default
};
//# sourceMappingURL=ScaleRangeSlider-OO7TFSYN.js.map
