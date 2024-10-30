import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E,
  G as G2,
  M,
  P as P2,
  T,
  k,
  p as p3,
  v
} from "./chunk-HIZXJ32N.js";
import {
  t as t2
} from "./chunk-JPJAW3N6.js";
import {
  e as e4
} from "./chunk-XJ4XZPHY.js";
import {
  t
} from "./chunk-LTKDZMRF.js";
import {
  i as i2
} from "./chunk-YEDQK53F.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  p as p2,
  r as r2,
  s as s3
} from "./chunk-PDBJ6G5O.js";
import {
  d as d2
} from "./chunk-NVOJILW6.js";
import "./chunk-KYPTWEOO.js";
import "./chunk-WVFB3H4O.js";
import {
  n as n4
} from "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-IUPJR3FF.js";
import "./chunk-TGZW6QWO.js";
import "./chunk-OYIDHTXG.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-NXXQ35YM.js";
import {
  K,
  W,
  _ as _2
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import {
  b,
  g
} from "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import {
  h
} from "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import {
  _,
  g as g2
} from "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import {
  c,
  f
} from "./chunk-AYL3HQHD.js";
import {
  s as s2
} from "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  G
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import {
  n as n3
} from "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d,
  p
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
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
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import {
  i
} from "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/CoordinateConversion/support/Conversion.js
var e5 = class extends S {
  constructor(o4) {
    super(o4), this.format = null, this.position = {
      coordinate: null,
      location: null
    };
  }
  get displayCoordinate() {
    return this.format?.getDisplayCoordinate(this.position?.coordinate);
  }
};
e([y({
  readOnly: true
})], e5.prototype, "displayCoordinate", null), e([y()], e5.prototype, "format", void 0), e([y()], e5.prototype, "position", void 0), e5 = e([a("esri.widgets.CoordinateConversion.support.Conversion")], e5);
var i3 = e5;

// ../../../node_modules/@arcgis/core/widgets/CoordinateConversion/support/coordinateConversionUtils.js
function e6(t3, n5) {
  const e7 = r3(n5);
  return [t3[0].toFixed(e7), t3[1].toFixed(e7)];
}
function r3(t3) {
  return t3 >= 500 ? 6 : t3 < 500 && t3 >= 50 ? 7 : t3 < 50 && t3 >= 5 ? 8 : 9;
}
function i4(e7, r5) {
  const i5 = e7.includes(",") ? "," : " ", [u3, s6, c4] = e7.split(i5).map((t3) => {
    const n5 = t3.trim();
    return n5 ? Number(n5) : null;
  });
  if (!o2(u3) || !o2(s6)) return null;
  const m2 = new _({
    x: u3,
    y: s6,
    spatialReference: r5 || f2.WGS84
  });
  return c4 && (m2.z = c4, m2.hasZ = true), m2;
}
function o2(t3) {
  return "number" == typeof t3 && isFinite(t3);
}
function u(t3) {
  return !!t3 && o2(t3.x) && o2(t3.y);
}
function s4(t3, n5) {
  if (t3.spatialReference.isGeographic && n5) {
    const [r5, i5] = e6([t3.x, t3.y], n5);
    return `${r5}, ${i5}`;
  }
  return `${t3.x.toFixed(3)}, ${t3.y.toFixed(3)}`;
}
var c2 = ["dd", "dms", "ddm", "mgrs", "usng", "utm"];
function m(t3) {
  return c2.includes(t3);
}

// ../../../node_modules/@arcgis/core/widgets/CoordinateConversion/support/Format.js
var _3 = class extends S {
  constructor(e7) {
    super(e7), this.conversionInfo = null, this.coordinateSegments = null, this._currentPattern = void 0, this.defaultPattern = null, this.name = null, this.viewModel = null;
  }
  get currentPattern() {
    return (this._currentPattern || this.defaultPattern) ?? "";
  }
  set currentPattern(e7) {
    this._currentPattern = e7;
  }
  get label() {
    return this.name ?? "";
  }
  set label(e7) {
    this._overrideIfSome("label", e7);
  }
  get hasDisplayProperties() {
    return !(!this.defaultPattern || !this.coordinateSegments);
  }
  get spatialReference() {
    return "basemap" === this.name ? this._viewSpatialReference : this.conversionInfo?.spatialReference ?? f2.WGS84;
  }
  set spatialReference(e7) {
    this._overrideIfSome("spatialReference", e7);
  }
  get _viewSpatialReference() {
    return this.viewModel?.view?.spatialReference ?? f2.WGS84;
  }
  get _additionalCharactersPattern() {
    const e7 = this.coordinateSegments;
    if (!e7) return null;
    const t3 = e7.map((e8) => e8.alias), r5 = this.currentPattern.replaceAll(new RegExp(`["nsew${t3.join()}]`, "gi"), "").replaceAll(" ", "");
    return new RegExp(`[${r5}]`, "g");
  }
  get test() {
  }
  convert(e7) {
    return __async(this, null, function* () {
      if (!u(e7)) throw new s("format:invalid-point", "Could not convert invalid point.", {
        point: e7
      });
      const t3 = this.conversionInfo?.convert;
      if (t3) return Promise.resolve().then(() => t3(e7));
      const n5 = yield this._project(e7, this.spatialReference);
      return {
        location: n5,
        coordinate: yield this._getCoordinate(n5)
      };
    });
  }
  getConversionStrategy() {
    const e7 = this._viewSpatialReference;
    return this.conversionInfo?.convert || this.viewModel?.formatterAvailable || "xy" === this.name && (e7.isWebMercator || e7.isWGS84) || "basemap" === this.name ? "client" : "server";
  }
  getDisplayCoordinate(e7) {
    if (!e7) return null;
    if (!this.coordinateSegments || !this.currentPattern) return e7;
    let t3 = this.currentPattern;
    const r5 = this._getSegmentMatches(e7, false);
    for (let n5 = this.coordinateSegments.length - 1; n5 >= 0; n5--) {
      const e8 = this.coordinateSegments[n5];
      t3 = t3.replace(e8.alias, r5[n5]);
    }
    return t3;
  }
  _parseUserInput(e7) {
    const {
      defaultPattern: t3,
      _additionalCharactersPattern: r5,
      coordinateSegments: n5
    } = this;
    if (!t3 || !r5) return "";
    let o4 = t3.replace(r5, "");
    e7 = e7.replace(r5, "");
    const i5 = this._getSegmentMatches(e7, true);
    if (n5) for (let s6 = n5.length - 1; s6 >= 0; s6--) {
      const e8 = n5[s6];
      o4 = o4.replace(e8.alias, i5[s6]);
    }
    return o4;
  }
  _getSegmentMatches(e7, t3) {
    const r5 = new Array(), {
      coordinateSegments: n5
    } = this;
    if (!n5) return r5;
    for (let o4 = 0; o4 < n5.length; o4++) {
      const i5 = n5[o4], s6 = e7.match(i5.searchPattern);
      if (!s6) {
        r5.push("");
        continue;
      }
      let a2 = s6[0];
      if (e7 = e7.replace(a2, "").trim(), i5.substitution) {
        const e8 = t3 ? i5.substitution.input(a2) : i5.substitution.output(a2);
        e8 && (a2 = `${e8}`);
      }
      r5.push(a2);
    }
    return r5;
  }
  reverseConvert(e7) {
    return __async(this, null, function* () {
      const t3 = this._parseUserInput(e7), n5 = this.conversionInfo?.reverseConvert;
      let o4;
      if (n5) o4 = n5(t3);
      else if ("xy" === this.name || "basemap" === this.name) o4 = i4(t3, this.spatialReference);
      else if (this.viewModel?.formatterAvailable) switch (this.name) {
        case "dd":
        case "ddm":
        case "dms":
          o4 = E(t3, this.spatialReference);
          break;
        case "mgrs": {
          const e8 = "automatic";
          o4 = T(t3, this.spatialReference, e8);
          break;
        }
        case "utm": {
          const e8 = "latitude-band-indicators";
          o4 = G2(t3, this.spatialReference, e8);
          break;
        }
        case "usng":
          o4 = P2(t3, this.spatialReference);
          break;
        default:
          o4 = null;
      }
      if (!o4) throw new s("format:invalid-input", "Could not parse input into point.", {
        userInput: e7
      });
      return this._project(o4, this._viewSpatialReference);
    });
  }
  _getCoordinate(e7) {
    return __async(this, null, function* () {
      const t3 = this.viewModel?.view?.scale ?? 0;
      if (!u(e7)) throw new s("format:invalid-point", "Could not transform invalid point into coordinate.", {
        point: e7
      });
      if (this.viewModel?.formatterAvailable || "basemap" === this.name || "xy" === this.name) switch (this.name) {
        case "dd":
        case "ddm":
        case "dms": {
          const r5 = r3(t3);
          return k(e7, this.name, r5);
        }
        case "mgrs":
          return p3(e7, "automatic", 5, false);
        case "usng":
          return M(e7, 5, false);
        case "utm":
          return v(e7, "latitude-band-indicators", true);
        default:
          return s4(e7, t3);
      }
      return s4(e7, t3);
    });
  }
  _project(e7, t3) {
    return __async(this, null, function* () {
      if (G(e7.spatialReference, t3) || !t3) return e7;
      if (this.viewModel?.formatterAvailable && _2()) return K(e7, t3);
      if (!this.viewModel?.formatterAvailable) {
        const r5 = g2(e7, t3);
        if (null != r5) return r5;
      }
      return null;
    });
  }
};
e([y()], _3.prototype, "conversionInfo", void 0), e([y()], _3.prototype, "coordinateSegments", void 0), e([y()], _3.prototype, "currentPattern", null), e([y()], _3.prototype, "_currentPattern", void 0), e([y()], _3.prototype, "label", null), e([y()], _3.prototype, "defaultPattern", void 0), e([y({
  readOnly: true
})], _3.prototype, "hasDisplayProperties", null), e([y()], _3.prototype, "name", void 0), e([y({
  type: f2
})], _3.prototype, "spatialReference", null), e([y()], _3.prototype, "viewModel", void 0), e([y({
  readOnly: true
})], _3.prototype, "_viewSpatialReference", null), e([y({
  readOnly: true
})], _3.prototype, "_additionalCharactersPattern", null), _3 = e([a("esri.widgets.CoordinateConversion.support.Format")], _3);
var R = _3;

// ../../../node_modules/@arcgis/core/widgets/CoordinateConversion/support/formatUtils.js
var s5 = r2().decimal;
var r4 = {
  N: "north",
  S: "south",
  E: "east",
  W: "west"
};
var o3 = `°${"‎"}`;
var u2 = new RegExp(`-?\\d+[\\.|\\${s5}]?\\d*`);
var d3 = /^[\\0]+(?=\d)/;
function c3(e7, i5) {
  const a2 = "ar" === c(), s6 = e7.abbreviatedDirections.north, u3 = e7.abbreviatedDirections.south, d4 = e7.abbreviatedDirections.east, c4 = e7.abbreviatedDirections.west, p5 = r2().decimal, h2 = {
    [s6]: "N",
    [u3]: "S",
    [d4]: "E",
    [c4]: "W"
  }, g3 = new RegExp(`-?\\d+[\\.|\\${p5}]?\\d*`), P5 = new RegExp(`N|S|${s6}|${u3}`, "i"), $ = new RegExp(`E|W|${d4}|${c4}`, "i"), m2 = {
    ddm: `Y${o3} A'${e7.abbreviatedDirections.north}, X${o3} B'${e7.abbreviatedDirections.east}`,
    dms: `Y${o3} A' B"${e7.abbreviatedDirections.north}, X${o3} C' D"${e7.abbreviatedDirections.east}`,
    dd: `Y${o3}${e7.abbreviatedDirections.north}, X${o3}${e7.abbreviatedDirections.east}`,
    xy: `X${o3}, Y${o3}`,
    basemap: "X, Y"
  }, w2 = {
    ddm: `${e7.abbreviatedDirections.north}${o3}Y 'A ,${e7.abbreviatedDirections.east}${o3}X 'B`,
    dms: `${e7.abbreviatedDirections.north}${o3}Y 'A "B ,${e7.abbreviatedDirections.east}${o3}X 'C "D`,
    dd: `${e7.abbreviatedDirections.north}${o3}Y ,${e7.abbreviatedDirections.east}${o3}X`,
    xy: `X${o3} ,Y${o3}`,
    basemap: "X ,Y"
  }, D = (t3) => null != t3 && Object.keys(m2).includes(t3), E3 = new RegExp(`\\d{1,2}[\\.|\\${p5}]?\\d*`, "i"), v2 = new RegExp(`\\d{1,3}[\\.|\\${p5}]?\\d*`, "i");
  i5.forEach((t3) => {
    const {
      name: i6
    } = t3;
    if ("dd" === i6 ? t3.coordinateSegments = [{
      alias: "Y",
      description: "degrees latitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: e7.abbreviatedDirections.north,
      description: "north/south indicator",
      searchPattern: P5,
      substitution: {
        input: (t4) => h2[t4],
        output: (t4) => e7.abbreviatedDirections[r4[t4]]
      }
    }, {
      alias: "X",
      description: "degrees longitude",
      searchPattern: v2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: e7.abbreviatedDirections.east,
      description: "east/west indicator",
      searchPattern: $,
      substitution: {
        input: (t4) => h2[t4],
        output: (t4) => e7.abbreviatedDirections[r4[t4]]
      }
    }] : "ddm" === i6 ? t3.coordinateSegments = [{
      alias: "Y",
      description: "degrees latitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "A",
      description: "minutes latitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: e7.abbreviatedDirections.north,
      description: "north/south indicator",
      searchPattern: P5,
      substitution: {
        input: (t4) => h2[t4],
        output: (t4) => e7.abbreviatedDirections[r4[t4]]
      }
    }, {
      alias: "X",
      description: "degrees longitude",
      searchPattern: v2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "B",
      description: "minutes longitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: e7.abbreviatedDirections.east,
      description: "east/west indicator",
      searchPattern: $,
      substitution: {
        input: (t4) => h2[t4],
        output: (t4) => e7.abbreviatedDirections[r4[t4]]
      }
    }] : "dms" === i6 ? t3.coordinateSegments = [{
      alias: "Y",
      description: "degrees latitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "A",
      description: "minutes latitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "B",
      description: "seconds latitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: e7.abbreviatedDirections.north,
      description: "north/south indicator",
      searchPattern: P5,
      substitution: {
        input: (t4) => h2[t4],
        output: (t4) => e7.abbreviatedDirections[r4[t4]]
      }
    }, {
      alias: "X",
      description: "degrees longitude",
      searchPattern: v2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "C",
      description: "minutes longitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "D",
      description: "seconds longitude",
      searchPattern: E3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: e7.abbreviatedDirections.east,
      description: "east/west indicator",
      searchPattern: $,
      substitution: {
        input: (t4) => h2[t4],
        output: (t4) => e7.abbreviatedDirections[r4[t4]]
      }
    }] : ("xy" === t3.name || "basemap" === t3.name) && (t3.coordinateSegments = [{
      alias: "X",
      description: "easting",
      searchPattern: g3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "Y",
      description: "northing",
      searchPattern: g3,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }]), D(i6)) {
      const e8 = a2 ? w2[i6] : m2[i6];
      t3.defaultPattern = e8, t3.currentPattern = e8;
    }
  });
}
function p4() {
  const t3 = new RegExp("N|S", "i"), e7 = new RegExp("E|W", "i");
  return [new R({
    name: "basemap",
    coordinateSegments: [{
      alias: "X",
      description: "easting",
      searchPattern: u2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "Y",
      description: "northing",
      searchPattern: u2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }],
    defaultPattern: "X, Y",
    viewModel: null
  }), new R({
    name: "dd",
    coordinateSegments: [{
      alias: "Y",
      description: "degrees latitude",
      searchPattern: new RegExp(`\\d{1,2}[\\.|\\${s5}]?\\d*(?=\\D*?[N|S])`, "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "N",
      description: "north/south indicator",
      searchPattern: t3
    }, {
      alias: "X",
      description: "degrees longitude",
      searchPattern: new RegExp(`\\d{1,3}[\\.|\\${s5}]?\\d*(?=\\D*?[E|W|])`, "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "E",
      description: "east/west indicator",
      searchPattern: e7
    }],
    defaultPattern: `Y${o3}N, X${o3}E`,
    viewModel: null
  }), new R({
    name: "ddm",
    coordinateSegments: [{
      alias: "Y",
      description: "degrees latitude",
      searchPattern: new RegExp("\\d{1,2}(?=.*?\\s+.*?[N|S])", "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "A",
      description: "minutes latitude",
      searchPattern: new RegExp(`\\d{1,2}[\\.\\${s5}]?\\d*(?=.*?[N|S])`, "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "N",
      description: "north/south indicator",
      searchPattern: t3
    }, {
      alias: "X",
      description: "degrees longitude",
      searchPattern: new RegExp("\\d{1,3}(?=\\D*?\\s+.*?[E|W])", "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "B",
      description: "minutes longitude",
      searchPattern: new RegExp(`\\d{1,2}[\\.|\\|${s5}]?\\d*(?=.*?[E|W])`, "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "E",
      description: "east/west indicator",
      searchPattern: e7
    }],
    defaultPattern: `Y${o3} A'N, X${o3} B'E`,
    viewModel: null
  }), new R({
    name: "dms",
    coordinateSegments: [{
      alias: "Y",
      description: "degrees latitude",
      searchPattern: new RegExp("\\d{1,2}(?=.*?\\s+.*?[N|S])", "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "A",
      description: "minutes latitude",
      searchPattern: new RegExp("\\d{1,2}(?=.*?[N|S])", "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "B",
      description: "seconds latitude",
      searchPattern: new RegExp(`\\d{1,2}[\\.|\\${s5}]?\\d*(?=.*?[N|S])`, "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "N",
      description: "north/south indicator",
      searchPattern: t3
    }, {
      alias: "X",
      description: "degrees longitude",
      searchPattern: new RegExp("\\d{1,3}(?=.*?\\s+.*?[E|W])", "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "C",
      description: "minutes longitude",
      searchPattern: new RegExp("\\d{1,2}(?=.*?[E|W])", "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "D",
      description: "seconds longitude",
      searchPattern: new RegExp(`\\d{1,2}[\\.|\\${s5}]?\\d*(?=.*?[E|W])`, "i"),
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "E",
      description: "east/west indicator",
      searchPattern: e7
    }],
    defaultPattern: `Y${o3} A' B"N, X${o3} C' D"E`,
    viewModel: null
  }), new R({
    name: "xy",
    coordinateSegments: [{
      alias: "X",
      description: "longitude",
      searchPattern: u2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }, {
      alias: "Y",
      description: "latitude",
      searchPattern: u2,
      substitution: {
        input: (t4) => b2(t4),
        output: (t4) => l(t4)
      }
    }],
    defaultPattern: `X${o3}, Y${o3}`,
    viewModel: null
  }), new R({
    name: "mgrs",
    coordinateSegments: [{
      alias: "Z",
      description: "grid zone",
      searchPattern: /\d{1,2}\w|[abyz]/i
    }, {
      alias: "S",
      description: "grid square",
      searchPattern: /\w{2}/
    }, {
      alias: "X",
      description: "easting",
      searchPattern: /^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/
    }, {
      alias: "Y",
      description: "northing",
      searchPattern: /^\d{1,5}/
    }],
    defaultPattern: "Z S X Y",
    viewModel: null
  }), new R({
    name: "usng",
    coordinateSegments: [{
      alias: "Z",
      description: "grid zone",
      searchPattern: /\d{1,2}\w|[abyz]/i
    }, {
      alias: "S",
      description: "grid square",
      searchPattern: /\w{2}/
    }, {
      alias: "X",
      description: "easting",
      searchPattern: /^\d{5}(?=.?\d{5}$)|^\d{4}(?=.?\d{4}$)|^\d{3}(?=.?\d{3}$)|^\d{2}(?=.?\d{2}$)|^\d(?=.?\d$)/
    }, {
      alias: "Y",
      description: "northing",
      searchPattern: /^\d{1,5}/
    }],
    defaultPattern: "Z S X Y",
    viewModel: null
  }), new R({
    name: "utm",
    coordinateSegments: [{
      alias: "Z",
      description: "zone number",
      searchPattern: /\d{1,2}|[abyz]/i
    }, {
      alias: "B",
      description: "latitude band",
      searchPattern: /^\D/
    }, {
      alias: "X",
      description: "easting",
      searchPattern: /\d{1,7}(?=\s*\d{7}$)/
    }, {
      alias: "Y",
      description: "northing",
      searchPattern: /\d{1,7}/
    }],
    defaultPattern: "ZB X Y",
    viewModel: null
  })];
}
function l(t3) {
  const i5 = t3.match(d3), n5 = i5 ? i5[0] : "", a2 = t3.includes(".") ? t3.split(".")[1].length : 0;
  return n5 + s3(Number(t3), {
    pattern: "###0.###",
    places: a2,
    round: -1
  });
}
function b2(t3) {
  return p2(t3);
}

// ../../../node_modules/@arcgis/core/widgets/CoordinateConversion/CoordinateConversionViewModel.js
var P3 = {
  default: "default",
  crosshair: "crosshair"
};
var j = new _([0, 0, 500]);
var S2 = "xy";
var F = ["mgrs", "utm", "usng", "dd", "dms", "ddm"];
var G3 = "esri__coordinateConversionWidgetState";
var H = {
  conversions: "conversions",
  formats: "formats",
  view: "view",
  viewChange: "view-change"
};
var E2 = "esri/images/search/search-symbol-32.png";
var x = class extends t2(o.EventedAccessor) {
  constructor(t3) {
    super(t3), this._conversionPromise = null, this._locationGraphic = null, this._pointerCount = 0, this.conversions = new V(), this.formats = new V(), this.formatterAvailable = false, this.messages = null, this.filteredFormats = new V(), this.locationSymbol = new n4({
      url: n3(E2),
      width: 24,
      height: 24
    }), this.storageEnabled = true, this.storageType = "session", this.view = null, this._saveWidgetState = this._saveWidgetState.bind(this), this._handleFormatChange = this._handleFormatChange.bind(this), this._handleConversionChange = this._handleConversionChange.bind(this), this._handleViewChange = this._handleViewChange.bind(this), this._onClick = this._onClick.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerDown = this._onPointerDown.bind(this), this._onPointerUp = this._onPointerUp.bind(this);
  }
  initialize() {
    const t3 = () => __async(this, null, function* () {
      return this.messages = yield h("esri/widgets/CoordinateConversion/t9n/CoordinateConversion");
    });
    this.formats.addMany(p4()), t3().then(() => {
      if (!this.destroyed && (c3(this.messages, this.formats), this.storageEnabled && this._loadWidgetState(), this.formats.forEach((t4) => {
        t4.viewModel = this, this.addHandles(d(() => t4.currentPattern, this._saveWidgetState), t4.name ?? "unnamed-format");
      }), this.addHandles(this.conversions.on("change", this._handleConversionChange), H.conversions), this.addHandles(this.formats.on("change", this._handleFormatChange), H.formats), this.addHandles(f(() => {
        t3().then(() => {
          c3(this.messages, this.formats);
        });
      })), W().then(() => {
        this.formatterAvailable = true;
      }).catch((t4) => {
        n.getLogger(this).error(new s("coordinate-conversion:projection-load-failed", "Failed to load the projection module.", {
          error: t4
        })), this.formatterAvailable = false, this._filterFormatsAndConversions();
      }).then(() => this.addHandles(d(() => this.view, this._handleViewChange, P), H.viewChange)), 0 === this.conversions.length)) {
        const t4 = this.formats.find((t5) => t5.name === S2) || this.formats.at(0);
        this.conversions.add(new i3({
          format: t4
        }));
      }
    });
  }
  destroy() {
    this.removeHandles(), this._cleanUpView(this.view), this.view = null;
  }
  castConversions(t3) {
    return this._castToConversions(t3);
  }
  set currentLocation(t3) {
    this._set("currentLocation", t3), this._updateConversions();
  }
  get currentLocation() {
    return this._get("currentLocation") || null;
  }
  set mode(t3) {
    switch (t3) {
      case "capture":
        this.currentLocation = null, this._startCaptureMode(), this._set("mode", t3);
        break;
      case "live":
        this._startLiveMode(), this._set("mode", t3);
    }
  }
  get mode() {
    return this._get("mode") || "live";
  }
  get state() {
    const {
      messages: t3,
      view: e7
    } = this, o4 = e7?.ready;
    return t3 ? o4 ? "ready" : e7 ? "loading" : "disabled" : "disabled";
  }
  get storage() {
    const {
      storageType: t3
    } = this;
    return "session" === t3 ? sessionStorage : localStorage;
  }
  get waitingForConversions() {
    return null != this._conversionPromise;
  }
  setLocation(t3) {
    if (this._locationGraphic && this.view?.graphics.remove(this._locationGraphic), !t3) return;
    const e7 = t3.clone();
    e7.hasZ && (e7.z = void 0), this._locationGraphic = new d2({
      geometry: e7,
      symbol: this.locationSymbol
    }), this.view?.graphics.add(this._locationGraphic);
  }
  convert(t3, e7) {
    return __async(this, null, function* () {
      if (!u(e7)) throw new s("coordinate-conversion:invalid-point", "Invalid point cannot be converted.", {
        point: e7
      });
      return Promise.resolve().then(() => t3.convert(e7));
    });
  }
  goToLocation(t3) {
    return __async(this, null, function* () {
      const {
        view: e7
      } = this;
      if (!e7) throw new s("coordinate-conversion:go-to-failed", "no view");
      const o4 = "3d" === e7.type ? e7.clippingArea : null, i5 = e7.map?.basemap?.baseLayers;
      if (o4 || i5?.length > 0) {
        const e8 = o4 ?? i5.at(0)?.fullExtent;
        if (null != e8 && !e8.contains(t3)) throw new s("coordinate-conversion:go-to-failed", "Point outside basemap extent.", {
          point: t3
        });
      }
      return this.callGoTo({
        target: t3
      });
    });
  }
  pause() {
    this.currentLocation = null, this.removeHandles(H.view), this.view && (this.view.cursor = P3.default, this._locationGraphic && this.view.graphics.remove(this._locationGraphic));
  }
  previewConversion(_0) {
    return __async(this, arguments, function* (t3, e7 = this.currentLocation || j) {
      return (yield W2(t3, e7)).displayCoordinate;
    });
  }
  resume() {
    "capture" === this.mode ? this._startCaptureMode() : this._startLiveMode();
  }
  reverseConvert(t3, e7) {
    return e7.reverseConvert(t3);
  }
  updateConversions(t3, e7) {
    return __async(this, null, function* () {
      if ("point" !== e7?.type) throw this._clearConversions(this.conversions), new s("coordinate-conversion:invalid-input-point", "Point is invalid, conversions cannot be updated.", {
        point: e7
      });
      return this._convertMany(t3, e7);
    });
  }
  _castToConversions(t3) {
    const e7 = new V();
    return t3.forEach((t4) => {
      let o4 = null;
      if (t4 instanceof i3) o4 = t4;
      else if ("string" == typeof t4) {
        const e8 = this.formats.find((e9) => e9.name === t4);
        e8 && (o4 = new i3({
          format: e8
        }));
      }
      o4 && e7.add(o4);
    }), e7;
  }
  _cleanUpView(t3) {
    t3 && (this._locationGraphic && t3.graphics.remove(this._locationGraphic), this.removeHandles(H.view), t3.cursor = P3.default);
  }
  _clearConversions(t3) {
    t3.forEach((t4) => {
      t4.position = {
        location: null,
        coordinate: null
      };
    });
  }
  _convertMany(t3, e7) {
    return __async(this, null, function* () {
      return Promise.all(t3.map((t4) => W2(t4, e7)));
    });
  }
  _handleConversionChange(t3) {
    for (const e7 of t3.added) {
      const {
        format: t4
      } = e7;
      t4 && (t4.viewModel = this, this.currentLocation && (this._set("waitingForConversions", true), this.convert(t4, this.currentLocation).then((t5) => {
        e7.position = t5, this._set("waitingForConversions", false);
      })));
    }
    this._saveWidgetState();
  }
  _handleFormatChange(t3) {
    t3.added.forEach((t4) => {
      this.addHandles(d(() => t4.currentPattern, this._saveWidgetState), t4.name ?? "unnamed-format"), t4.viewModel = this;
    }), t3.removed.forEach((t4) => {
      t4.viewModel = null;
      const e7 = this.conversions.filter((e8) => e8.format === t4);
      this.conversions.removeMany(e7), t4.name && this.removeHandles(t4.name);
    });
  }
  _loadWidgetState() {
    try {
      const t3 = JSON.parse(this.storage.getItem(G3));
      t3 && this._setWidgetState(t3);
    } catch (t3) {
      n.getLogger(this).error(new s("coordinate-conversion:invalid-session-storage-json", "Could not read from storage.", {
        error: t3
      }));
    }
  }
  _startCaptureMode() {
    this.removeHandles(H.view), this.view && (this.view.cursor = P3.crosshair, this.currentLocation && this.setLocation(this.currentLocation), this.addHandles(this.view.on("click", this._onClick), H.view));
  }
  _startLiveMode() {
    this._pointerCount = 0, this.removeHandles(H.view), this.view && (this.view.cursor = P3.default, this._locationGraphic && this.view.graphics.remove(this._locationGraphic), this.addHandles([this.view.on("pointer-down", this._onPointerDown), this.view.on("pointer-up", this._onPointerUp), this.view.on("pointer-move", this._onPointerMove)], H.view));
  }
  _handleViewChange(t3, e7) {
    e7 && e7 !== t3 && this._cleanUpView(e7), t3 && ("capture" === this.mode ? this._startCaptureMode() : this._startLiveMode(), e7 && this._filterFormatsAndConversions());
  }
  _onClick(t3) {
    if (0 === t3.button) {
      const e7 = this.view?.toMap(t3), o4 = e7?.normalize();
      this.setLocation(o4), this.currentLocation = o4;
    }
  }
  _onPointerDown(t3) {
    const {
      pointerType: e7
    } = t3;
    if (this._pointerCount++, ("touch" === e7 || "pen" === e7) && 1 === this._pointerCount) {
      const e8 = this.view?.toMap(t3);
      this.currentLocation = e8?.normalize();
    }
  }
  _onPointerMove(t3) {
    const {
      pointerType: e7
    } = t3;
    if ("mouse" === e7 || 1 === this._pointerCount) {
      const e8 = this.view?.toMap(t3);
      this.currentLocation = e8?.normalize();
    }
  }
  _onPointerUp() {
    this._pointerCount--;
  }
  _setWidgetState(t3) {
    try {
      t3.formats.forEach((e7) => {
        const o4 = this.formats.find((t4) => t4.name === e7.name);
        o4 && t3.locale === c() && e7.currentPattern && (o4.currentPattern = e7.currentPattern), o4 && e7.index >= 0 && this.conversions.add(new i3({
          format: o4
        }));
      });
    } catch (e7) {
      n.getLogger(this).warn(new s("coordinate-conversion:session-storage-read-error", "Could not get widget state from stored JSON.", {
        error: e7
      }));
    }
  }
  _saveWidgetState() {
    if (!this.storageEnabled) return;
    const t3 = this._toJSON();
    try {
      this.storage.setItem(G3, JSON.stringify({
        formats: t3,
        locale: c()
      }));
    } catch (e7) {
      n.getLogger(this).error(new s("coordinate-conversion:local-storage-write-error", "Could not write to localStorage.", {
        error: e7
      }));
    }
  }
  _updateConversions() {
    return __async(this, null, function* () {
      try {
        yield this.updateConversions(this.conversions.toArray(), this.currentLocation);
      } catch {
      }
    });
  }
  _toJSON() {
    return this.formats.filter((t3) => {
      const e7 = t3.name;
      return "xy" === e7 || "basemap" === e7 || m(e7);
    }).map((t3) => ({
      name: t3.name,
      currentPattern: t3.currentPattern,
      defaultPattern: t3.defaultPattern,
      index: this.conversions.findIndex((e7) => e7.format === t3)
    })).sort((t3, e7) => t3.index - e7.index).toArray();
  }
  _filterFormatsAndConversions() {
    const {
      formatterAvailable: t3,
      conversions: e7,
      formats: o4
    } = this;
    t3 || this.addHandles(p(() => this.view?.spatialReference, (t4) => {
      const i5 = t4.isWebMercator || t4.isWGS84, s6 = o4.filter((t5) => {
        const {
          name: e8
        } = t5;
        return !!A(e8) || "xy" === e8 && !i5;
      }), r5 = this.filteredFormats.filter((t5) => "xy" === t5.name && i5 && !this.formats.includes(t5)), n5 = e7.filter((t5) => s6.includes(t5.format));
      o4.removeMany(s6), e7.removeMany(n5), this.filteredFormats.addMany(s6.filter((t5) => !this.filteredFormats.includes(t5))), o4.addMany(r5);
    }, {
      once: true,
      initial: true
    }), H.view);
  }
};
function W2(t3, e7) {
  return __async(this, null, function* () {
    try {
      t3.position = yield t3.format?.convert(e7);
    } catch (o4) {
      t3.position = null;
    }
    return t3;
  });
}
function A(t3) {
  return F.includes(t3);
}
e([y()], x.prototype, "conversions", void 0), e([s2("conversions")], x.prototype, "castConversions", null), e([y({
  type: _
})], x.prototype, "currentLocation", null), e([y()], x.prototype, "formats", void 0), e([y()], x.prototype, "messages", void 0), e([y()], x.prototype, "mode", null), e([y()], x.prototype, "filteredFormats", void 0), e([y({
  readOnly: true
})], x.prototype, "state", null), e([y()], x.prototype, "locationSymbol", void 0), e([y({
  readOnly: true,
  dependsOn: ["storageType"]
})], x.prototype, "storage", null), e([y()], x.prototype, "storageEnabled", void 0), e([y()], x.prototype, "storageType", void 0), e([y({
  readOnly: true
})], x.prototype, "waitingForConversions", null), e([y()], x.prototype, "view", void 0), x = e([a("esri.widgets.CoordinateConversion.CoordinateConversionViewModel")], x);
var T2 = x;

// ../../../node_modules/@arcgis/core/widgets/CoordinateConversion.js
var b3 = "esri-coordinate-conversion";
var y2 = {
  base: b3,
  captureMode: `${b3}--capture-mode`,
  noBasemap: `${b3}--no-basemap`,
  popup: `${b3}__popup`,
  clipboardPopup: `${b3}__clipboard-popup`,
  conversionList: `${b3}__conversion-list`,
  conversionRow: `${b3}__row`,
  coordDisplay: `${b3}__display`,
  expandButton: `${b3}__expand-button`,
  expanded: `${b3}__conversions-view--expanded`,
  expandDown: `${b3}__conversions-view--expand-down`,
  expandUp: `${b3}__conversions-view--expand-up`,
  conversionsView: `${b3}__conversions-view`,
  rowSelect: `${b3}__select-row`,
  toolDisplay: `${b3}__tools`,
  modeToggle: `${b3}__mode-toggle`,
  rowButton: `${b3}__row-button`,
  coordinateInput: `${b3}__input-coordinate`,
  inputForm: `${b3}__input-form`,
  inputFormGroup: `${b3}__input-group`,
  inputSelect: `${b3}__input-select`,
  sectionHeading: `${b3}__heading`,
  patternInput: `${b3}__pattern-input`,
  settings: `${b3}__settings`,
  settingsFormGroup: `${b3}__settings-group`,
  settingsFormGroupHorizontal: `${b3}__settings-group-horizontal`,
  previewCoordinate: `${b3}__preview-coordinate`
};
var C = {
  settingsButton: true,
  inputButton: true,
  captureButton: true,
  expandButton: true
};
var w = 750;
var f3 = 2500;
var T3 = class extends B {
  constructor(e7, t3) {
    super(e7, t3), this._popupMessage = null, this._popupTimeoutId = void 0, this._clipboardPopupTimeoutId = void 0, this._coordinateInput = null, this._badInput = false, this._goToEnabled = false, this._conversionFormat = null, this._settingsFormat = null, this._previewConversion = null, this._expanded = false, this._clipboardPopupVisible = false, this._popupVisible = false, this._settingsVisible = false, this._inputVisible = false, this.headingLevel = 4, this.messages = null, this.messagesCommon = null, this.orientation = "auto", this.viewModel = new T2(), this.visibleElements = __spreadValues({}, C);
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      checkbox: () => import("./calcite-checkbox-73YMZEMH.js"),
      input: () => import("./calcite-input-WIKYKTSA.js"),
      label: () => import("./calcite-label-7BB63OZC.js"),
      option: () => import("./calcite-option-DLZBJJ3Y.js"),
      select: () => import("./calcite-select-5COJZAUD.js")
    });
  }
  get conversions() {
    return this.viewModel.conversions;
  }
  set conversions(e7) {
    this.viewModel.conversions = e7;
  }
  get currentLocation() {
    return this.viewModel.currentLocation;
  }
  set currentLocation(e7) {
    this.viewModel.currentLocation = e7;
  }
  get formats() {
    return this.viewModel.formats;
  }
  set formats(e7) {
    this.viewModel.formats = e7;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e7) {
    this.viewModel.goToOverride = e7;
  }
  get icon() {
    return "coordinate-system";
  }
  set icon(e7) {
    this._overrideIfSome("icon", e7);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e7) {
    this._overrideIfSome("label", e7);
  }
  get mode() {
    return this.viewModel.mode;
  }
  set mode(e7) {
    this.viewModel.mode = e7;
  }
  set multipleConversions(e7) {
    false === e7 && (this._expanded = false, this.conversions.splice(1, this.conversions.length - 1)), this._set("multipleConversions", e7);
  }
  get multipleConversions() {
    const e7 = this._get("multipleConversions");
    return "boolean" != typeof e7 || e7;
  }
  get locationSymbol() {
    return this.viewModel.locationSymbol;
  }
  set locationSymbol(e7) {
    this.viewModel.locationSymbol = e7;
  }
  get storageEnabled() {
    return this.viewModel.storageEnabled;
  }
  set storageEnabled(e7) {
    this.viewModel.storageEnabled = e7;
  }
  get storageType() {
    return this.viewModel.storageType;
  }
  set storageType(e7) {
    this.viewModel.storageType = e7;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e7) {
    this.viewModel.view = e7;
  }
  castVisibleElements(e7) {
    return __spreadValues(__spreadValues({}, C), e7);
  }
  reverseConvert(e7, t3) {
    return this.viewModel.reverseConvert(e7, t3);
  }
  render() {
    const e7 = this.viewModel?.state, t3 = "disabled" === e7 ? n2("div", {
      key: "esri-coordinate__no-basemap"
    }, this.messages?.noBasemap) : null, o4 = !t3 && this._inputVisible ? this._renderInputForm() : null, i5 = !t3 && this._settingsVisible ? this._renderSettings() : null, s6 = t3 || o4 || i5 ? null : this._renderConversionsView(), n5 = this._popupVisible ? this._renderPopup() : null, r5 = {
      [y2.captureMode]: "capture" === this.mode,
      [e3.disabled]: "loading" === e7,
      [y2.noBasemap]: "disabled" === e7
    };
    return n2("div", {
      class: this.classes(y2.base, e3.widget, r5)
    }, n5, t3, s6, i5, o4);
  }
  _addConversion(e7) {
    const t3 = e7.target, o4 = t3.selectedOption.value, i5 = x2(t3);
    if (null == o4 || null == i5) return;
    const s6 = new i3({
      format: o4
    });
    t3.value = "default", i5 >= 0 ? (this.conversions.removeAt(i5), this.conversions.add(s6, i5)) : this.conversions.add(s6);
  }
  _findSettingsFormat() {
    return this._settingsFormat || this.conversions.reduceRight((e7, t3) => {
      const o4 = t3.format;
      return o4?.hasDisplayProperties ? o4 : e7;
    }, null) || this.formats.find((e7) => e7.hasDisplayProperties);
  }
  _hidePopup() {
    this._popupTimeoutId && (clearTimeout(this._popupTimeoutId), this._popupTimeoutId = void 0), this._popupVisible = false, this._popupMessage = null, this.scheduleRender();
  }
  _hideClipboardPopup() {
    this._clipboardPopupTimeoutId && (clearTimeout(this._clipboardPopupTimeoutId), this._clipboardPopupTimeoutId = void 0), this._clipboardPopupVisible = false, this.scheduleRender();
  }
  _onConvertComplete() {
    this._inputVisible = false, this._coordinateInput.value = "";
  }
  _onCopy(e7) {
    const t3 = P4(e7.currentTarget)?.displayCoordinate;
    null != t3 && (e7.clipboardData?.setData("text/plain", t3), this._showClipboardPopup(), e7.preventDefault());
  }
  _processUserInput(e7) {
    const i5 = i(e7, "key"), s6 = this.viewModel;
    if ("Enter" !== i5 && i5) this._badInput && (this._badInput = false);
    else {
      const e8 = this._conversionFormat || this.conversions.at(0).format;
      if (!e8) return;
      const o4 = this._coordinateInput.value;
      this._reverseConvert(o4, e8).then((e9) => {
        "capture" === this.mode ? s6.resume() : this.mode = "capture", this.currentLocation = e9, s6.setLocation(e9), this._onConvertComplete();
      }).catch((e9) => {
        n.getLogger(this).error(e9), this._showPopup(this.messages?.invalidCoordinate), this._badInput = true;
      });
    }
  }
  _reverseConvert(e7, o4) {
    return __async(this, null, function* () {
      const i5 = this.viewModel, s6 = yield o4.reverseConvert(e7);
      return this._goToEnabled && s6 && i5.goToLocation(s6).catch((e8) => {
        n.getLogger(this).warn(e8), this._showPopup(this.messages?.locationOffBasemap);
      }), s6;
    });
  }
  _setInputFormat(e7) {
    const t3 = e7.target.selectedOption.value;
    null != t3 && (this._conversionFormat = t3);
  }
  _setPreviewConversion() {
    const e7 = this._findSettingsFormat(), t3 = this.viewModel;
    if (e7) {
      const o4 = this.conversions.find((t4) => t4.format === e7);
      this._previewConversion = new i3({
        format: e7,
        position: {
          location: this.currentLocation,
          coordinate: o4?.position?.coordinate
        }
      }), this._previewConversion.position?.coordinate || t3.previewConversion(this._previewConversion);
    }
  }
  _setSettingsFormat(e7) {
    const t3 = e7.target.selectedOption.value;
    null != t3 && (this._settingsFormat = t3, this._setPreviewConversion());
  }
  _showClipboardPopup() {
    this._clipboardPopupVisible ? clearTimeout(this._clipboardPopupTimeoutId) : this._clipboardPopupVisible = true, this.scheduleRender(), this._popupTimeoutId = setTimeout(() => {
      this._popupTimeoutId = void 0, this._hideClipboardPopup();
    }, w);
  }
  _showPopup(e7, t3 = f3) {
    this._popupMessage = e7, this._popupVisible ? clearTimeout(this._popupTimeoutId) : this._popupVisible = true, this.scheduleRender(), this._popupTimeoutId = setTimeout(() => {
      this._popupTimeoutId = void 0, this._hidePopup();
    }, t3);
  }
  _toggleGoTo() {
    this._goToEnabled = !this._goToEnabled;
  }
  _updateCurrentPattern(e7) {
    e7.stopPropagation();
    const t3 = e7.target, o4 = this._findSettingsFormat();
    o4 && (o4.currentPattern = t3.value);
  }
  _renderConversion(e7, t3) {
    const {
      messages: o4
    } = this;
    if (!o4) return n2("li", null);
    const {
      format: i5
    } = e7, s6 = i5?.label ?? "", n5 = `${this.id}__list-item-${t3}`, r5 = `${s6} ${o4.conversionOutputSuffix}`, a2 = 0 === t3, l2 = a2 || this._expanded, p5 = a2 ? this._renderFirstConversion(e7) : this._renderTools(t3, e7, n5), c4 = a2 && !e7.displayCoordinate ? o4.noLocation : e7.displayCoordinate, d4 = n2("div", {
      "aria-label": c4,
      class: y2.coordDisplay,
      "data-conversion": e7,
      role: "listitem",
      tabIndex: 0,
      title: c4 ?? ""
    }, c4), u3 = this._renderOptions(this.formats.filter((e8) => e8 !== i5));
    return l2 ? n2("li", {
      "aria-label": r5,
      class: y2.conversionRow,
      id: n5,
      key: e7,
      role: "group",
      tabIndex: 0,
      title: r5
    }, n2("calcite-select", {
      "aria-controls": n5,
      bind: this,
      class: y2.rowSelect,
      "data-index": t3,
      label: o4.selectFormat,
      scale: "s",
      onCalciteSelectChange: this._addConversion
    }, n2("calcite-option", {
      label: s6.toUpperCase(),
      selected: true
    }, s6.toUpperCase()), u3), d4, p5) : null;
  }
  _renderCopyButton(e7) {
    const t3 = this._clipboardPopupVisible && this._renderClipboardPopup(), {
      messagesCommon: o4
    } = this;
    return o4 ? n2("li", {
      "aria-label": o4.copy,
      bind: this,
      class: this.classes(e3.widgetButton, y2.rowButton),
      "data-conversion": e7,
      onclick: this._copyCoordinateOutput,
      oncopy: this._onCopy,
      onkeydown: this._copyCoordinateOutput,
      role: "button",
      tabIndex: 0,
      title: o4.copy
    }, t3, n2("span", {
      "aria-hidden": "true",
      class: i2.duplicate
    })) : n2("li", null);
  }
  _renderFirstConversion(e7) {
    const t3 = this.id, {
      messages: o4,
      messagesCommon: i5,
      multipleConversions: s6,
      visibleElements: n5
    } = this;
    if (!i5 || !o4) return n2("ul", null);
    const r5 = "live" === this.mode ? o4.captureMode : o4.liveMode, a2 = this._expanded ? i5.collapse : i5.expand, l2 = e7.displayCoordinate && "capture" === this.mode ? this._renderCopyButton(e7) : null, p5 = s6 && n5.expandButton && this._renderIconButton({
      iconType: this._expanded ? "chevron-down" : "chevron-up",
      clickFunction: this._toggleExpand,
      classes: [y2.expandButton],
      attributes: {
        "aria-controls": `${t3}__${y2.conversionList}`,
        label: a2
      }
    }), c4 = !s6 && n5.captureButton && this._renderIconButton({
      iconType: "live" === this.mode ? "pin-tear" : "pin-tear-f",
      clickFunction: this._toggleMode,
      classes: [y2.modeToggle],
      attributes: {
        label: r5
      }
    });
    return n2("ul", {
      class: y2.toolDisplay
    }, l2, p5, c4);
  }
  _renderInputForm() {
    const e7 = this._conversionFormat || this.conversions.at(0).format, t3 = this.formats.findIndex((t4) => t4.name === e7?.name), o4 = this.id, i5 = `${o4}__${y2.coordinateInput}`, s6 = `${o4}__${y2.coordinateInput}__header`, n5 = this._renderOptions(this.formats, true, t3), {
      messages: r5,
      messagesCommon: a2,
      headingLevel: l2
    } = this;
    if (!a2 || !r5) return n2("div", null);
    const p5 = this._renderIconButton({
      iconType: g(this.container) ? "arrow-right" : "arrow-left",
      clickFunction: this._toggleInputVisibility,
      attributes: {
        label: a2.back
      }
    });
    return n2("div", {
      "aria-labelledby": s6,
      class: y2.inputForm,
      key: "esri-coordinate-conversion__input-form",
      role: "search"
    }, n2("div", {
      class: y2.sectionHeading
    }, p5, n2(e4, {
      class: e3.heading,
      id: s6,
      level: l2
    }, r5.inputCoordTitle)), n2("div", {
      class: y2.inputFormGroup
    }, n2("calcite-select", {
      "aria-controls": i5,
      bind: this,
      class: y2.inputSelect,
      label: r5.selectFormat,
      scale: "s",
      onCalciteSelectChange: this._setInputFormat
    }, n5), n2("calcite-input", {
      afterCreate: b,
      "aria-labelledby": s6,
      bind: this,
      class: y2.coordinateInput,
      "data-format": e7,
      "data-node-ref": "_coordinateInput",
      id: i5,
      onkeydown: this._processUserInput,
      placeholder: r5.inputCoordTitle,
      required: true,
      scale: "s",
      spellcheck: false,
      status: this._badInput ? "invalid" : "idle"
    })), n2("div", {
      class: y2.inputFormGroup
    }, n2("calcite-label", {
      layout: "inline",
      scale: "s"
    }, n2("calcite-checkbox", {
      bind: this,
      checked: this._goToEnabled,
      onCalciteCheckboxChange: this._toggleGoTo
    }), r5.goTo), n2("calcite-button", {
      appearance: "outline",
      bind: this,
      kind: "neutral",
      onclick: this._processUserInput,
      type: "button",
      width: "auto"
    }, r5.convert)));
  }
  _renderConversionsView() {
    const {
      messages: e7
    } = this;
    if (!e7) return n2("div", null);
    const t3 = `${this.id}__${y2.conversionList}`, o4 = this._renderPrimaryTools(), i5 = this._renderOptions(this.formats), s6 = this.conversions.map((e8, t4) => this._renderConversion(e8, t4)).toArray(), n5 = this._expanded ? n2("div", {
      class: y2.conversionRow
    }, n2("calcite-select", {
      "aria-controls": t3,
      bind: this,
      "data-index": -1,
      label: e7.addConversion,
      scale: "s",
      onCalciteSelectChange: this._addConversion
    }, n2("calcite-option", {
      disabled: true,
      selected: true,
      value: "default"
    }, e7.addConversion), i5), o4) : null, r5 = {
      [y2.expanded]: this._expanded,
      [y2.expandUp]: "expand-up" === this.orientation,
      [y2.expandDown]: "expand-down" === this.orientation
    };
    return n2("div", {
      class: this.classes(y2.conversionsView, r5),
      key: "esri-coordinate-conversion__main-view"
    }, n2("ul", {
      "aria-expanded": this._expanded ? "true" : "false",
      class: y2.conversionList,
      id: t3
    }, s6), n5);
  }
  _renderOptions(e7, t3, o4) {
    const i5 = this.conversions.at(0), s6 = i5.format?.name;
    return e7.map((e8, n5) => {
      const r5 = !(t3 || !i5) && (s6 === e8.name || this.conversions.map((e9) => e9.format?.name).includes(e8.name));
      return n2("calcite-option", {
        disabled: r5,
        key: e8.name ?? "unnamed-format",
        label: e8.label.toUpperCase(),
        selected: n5 === o4,
        value: e8
      }, e8.label);
    }).toArray();
  }
  _renderPopup() {
    return n2("div", {
      class: y2.popup,
      role: "alert"
    }, this._popupMessage);
  }
  _renderClipboardPopup() {
    const {
      messages: e7
    } = this;
    return e7 ? n2("div", {
      class: this.classes(y2.popup, y2.clipboardPopup),
      role: "alert"
    }, e7.copySuccessMessage) : n2("div", null);
  }
  _renderPrimaryTools() {
    const {
      messages: e7,
      visibleElements: t3
    } = this;
    if (!e7) return n2("ul", null);
    const o4 = "live" === this.mode ? e7.captureMode : e7.liveMode, i5 = t3.inputButton && this._renderIconButton({
      iconType: "pencil",
      clickFunction: this._toggleInputVisibility,
      attributes: {
        label: e7.inputCoordTitle
      }
    }), s6 = t3.captureButton && this._renderIconButton({
      iconType: "live" === this.mode ? "pin-tear" : "pin-tear-f",
      clickFunction: this._toggleMode,
      classes: [y2.modeToggle],
      attributes: {
        label: o4
      }
    }), n5 = t3.settingsButton && this._renderIconButton({
      iconType: "gear",
      clickFunction: this._toggleSettingsVisibility,
      attributes: {
        label: e7.settingsTitle
      }
    });
    return n2("ul", {
      class: y2.toolDisplay
    }, i5, s6, n5);
  }
  _renderSettings() {
    const e7 = this.id, t3 = `${e7}__${y2.patternInput}`, o4 = `${e7}__${y2.patternInput}__header`, i5 = `${e7}__${y2.previewCoordinate}`, s6 = this.formats.filter((e8) => e8.hasDisplayProperties), n5 = this._findSettingsFormat(), r5 = n5 ? s6.indexOf(n5) : -1, a2 = this._renderOptions(s6, true, r5), l2 = n5?.currentPattern, {
      messages: p5,
      messagesCommon: u3,
      headingLevel: h2
    } = this;
    if (!u3 || !p5) return n2("div", null);
    const _4 = this._renderIconButton({
      iconType: g(this.container) ? "arrow-right" : "arrow-left",
      clickFunction: this._toggleSettingsVisibility,
      attributes: {
        label: u3.back
      }
    }), g3 = this._renderIconButton({
      iconType: "refresh",
      clickFunction: this._setDefaultPattern,
      attributes: {
        label: p5.defaultPattern
      }
    });
    return n2("div", {
      "aria-labelledby": o4,
      class: y2.settings,
      key: y2.settings
    }, n2("div", {
      class: y2.sectionHeading
    }, _4, n2(e4, {
      class: e3.heading,
      id: o4,
      level: h2
    }, p5.settingsTitle)), n2("div", {
      class: y2.settingsFormGroup
    }, n2("label", {
      for: t3
    }, p5.changeCoordinateDisplay), n2("calcite-select", {
      bind: this,
      label: p5.selectFormat,
      width: "full",
      onCalciteSelectChange: this._setSettingsFormat
    }, a2), n2("div", {
      class: y2.settingsFormGroupHorizontal
    }, n2("calcite-input", {
      "aria-controls": i5,
      bind: this,
      class: y2.patternInput,
      id: t3,
      spellcheck: false,
      type: "text",
      value: l2,
      onCalciteInputInput: this._updateCurrentPattern
    }), g3)), n2("div", {
      class: y2.settingsFormGroup
    }, n2("label", null, u3.preview, n2("div", {
      class: y2.previewCoordinate,
      id: i5,
      tabIndex: 0
    }, this._previewConversion?.displayCoordinate))));
  }
  _renderIconButton(e7) {
    const {
      iconType: t3,
      clickFunction: o4,
      classes: i5,
      attributes: s6
    } = e7;
    return n2("calcite-button", __spreadValues({
      appearance: "transparent",
      bind: this,
      class: this.classes(i5),
      iconStart: t3,
      kind: "neutral",
      onclick: o4,
      onkeydown: o4
    }, s6));
  }
  _renderTools(e7, t3, o4) {
    const i5 = t3.displayCoordinate && "capture" === this.mode ? this._renderCopyButton(t3) : null, {
      messages: s6
    } = this;
    if (!s6) return n2("ul", null);
    const n5 = this._renderIconButton({
      iconType: "x",
      clickFunction: this._removeConversion,
      attributes: {
        "aria-controls": o4,
        label: s6.removeConversion,
        "data-index": e7
      }
    });
    return n2("ul", {
      class: y2.toolDisplay,
      role: "listitem"
    }, i5, n2("li", {
      class: this.classes(y2.rowButton)
    }, n5));
  }
  _copyCoordinateOutput(e7) {
    const t3 = e7.target;
    if (!("createTextRange" in document.body)) {
      const e8 = window.getSelection(), o4 = document.createRange();
      o4.selectNodeContents(t3), e8?.removeAllRanges(), e8?.addRange(o4);
    }
    document.execCommand("copy");
  }
  _removeConversion(e7) {
    const t3 = x2(e7.currentTarget);
    null != t3 && this.conversions.removeAt(t3);
  }
  _setDefaultPattern(e7) {
    e7.stopPropagation();
    const t3 = this._findSettingsFormat();
    t3 && (t3.currentPattern = t3.defaultPattern);
  }
  _toggleExpand() {
    this._expanded = !this._expanded;
  }
  _toggleInputVisibility() {
    this._inputVisible = !this._inputVisible, this._popupVisible && this._hidePopup(), this._inputVisible ? this.viewModel.pause() : this.viewModel.resume();
  }
  _toggleMode() {
    this.mode = "live" === this.mode ? "capture" : "live";
  }
  _toggleSettingsVisibility() {
    this._settingsVisible = !this._settingsVisible, this._popupVisible && this._hidePopup(), this._settingsVisible ? (this._setPreviewConversion(), this.viewModel.pause()) : this.viewModel.resume();
  }
};
e([y()], T3.prototype, "conversions", null), e([y()], T3.prototype, "currentLocation", null), e([y()], T3.prototype, "formats", null), e([y()], T3.prototype, "goToOverride", null), e([y()], T3.prototype, "headingLevel", void 0), e([y()], T3.prototype, "icon", null), e([y()], T3.prototype, "label", null), e([y(), e2("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")], T3.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], T3.prototype, "messagesCommon", void 0), e([y()], T3.prototype, "mode", null), e([y()], T3.prototype, "orientation", void 0), e([y()], T3.prototype, "multipleConversions", null), e([y()], T3.prototype, "locationSymbol", null), e([y()], T3.prototype, "storageEnabled", null), e([y()], T3.prototype, "storageType", null), e([y()], T3.prototype, "view", null), e([y({
  type: T2
})], T3.prototype, "viewModel", void 0), e([y()], T3.prototype, "visibleElements", void 0), e([s2("visibleElements")], T3.prototype, "castVisibleElements", null), e([t()], T3.prototype, "_copyCoordinateOutput", null), e([t()], T3.prototype, "_removeConversion", null), e([t()], T3.prototype, "_setDefaultPattern", null), e([t()], T3.prototype, "_toggleExpand", null), e([t()], T3.prototype, "_toggleInputVisibility", null), e([t()], T3.prototype, "_toggleMode", null), e([t()], T3.prototype, "_toggleSettingsVisibility", null), T3 = e([a("esri.widgets.CoordinateConversion")], T3);
var I = T3;
function x2(e7) {
  return e7["data-index"];
}
function P4(e7) {
  return e7["data-conversion"];
}
export {
  I as default
};
//# sourceMappingURL=CoordinateConversion-ARVIR7OP.js.map
