import {
  p as p6
} from "./chunk-SBTROJY3.js";
import {
  D,
  R as R2
} from "./chunk-ZUHJZKEM.js";
import {
  B2 as B,
  a2 as a5,
  e as e2,
  i as i4,
  m as m2,
  m2 as m3,
  n2 as n8,
  n4 as n9,
  o as o4,
  r3 as r2,
  t,
  u2
} from "./chunk-2AV27Q4X.js";
import {
  a2 as a6,
  f2 as f4,
  g,
  p2 as p4,
  s as s5
} from "./chunk-3HU4B6P4.js";
import {
  R
} from "./chunk-Z3GMSC63.js";
import {
  f as f3,
  i as i3,
  s as s4
} from "./chunk-YA5CTHMT.js";
import {
  a as a4,
  w as w2
} from "./chunk-OOGIXDXG.js";
import {
  A,
  j as j2,
  n as n6,
  n3 as n7,
  v
} from "./chunk-AQJS6F3O.js";
import {
  b
} from "./chunk-WUB6LJVL.js";
import {
  p as p5
} from "./chunk-5YIMTGEC.js";
import {
  d as d3
} from "./chunk-UFVMJL32.js";
import {
  p as p3
} from "./chunk-63QCTVYB.js";
import {
  a as a3,
  m,
  p as p2
} from "./chunk-U74WRHVJ.js";
import {
  y as y3
} from "./chunk-PFMGJTQM.js";
import {
  T,
  h
} from "./chunk-7KRERHHR.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  n as n5
} from "./chunk-634JLXD4.js";
import {
  S
} from "./chunk-IQLBZKUD.js";
import {
  y as y4
} from "./chunk-7MZZCQ64.js";
import {
  c
} from "./chunk-DR5TVNEL.js";
import {
  n as n4
} from "./chunk-GAW5JHG4.js";
import {
  p,
  y as y2
} from "./chunk-S3IO7V4Q.js";
import {
  d
} from "./chunk-DZALMCYL.js";
import {
  u
} from "./chunk-K226GFDN.js";
import {
  o as o2
} from "./chunk-4ZZRP4MA.js";
import {
  o as o3
} from "./chunk-7ZJ6P7J7.js";
import {
  j
} from "./chunk-T6GCUITX.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _,
  n as n3
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s as s3
} from "./chunk-NKCPFCP3.js";
import {
  i as i2,
  n as n2
} from "./chunk-V5C6HSAM.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  i
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  N,
  a3 as a2,
  s3 as s2
} from "./chunk-DDYVXG4F.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/rasterEnums.js
var a7 = i2()({
  RSP_NearestNeighbor: "nearest",
  RSP_BilinearInterpolation: "bilinear",
  RSP_CubicConvolution: "cubic",
  RSP_Majority: "majority"
});
var i5 = i2()({
  esriNoDataMatchAny: "any",
  esriNoDataMatchAll: "all"
});
var n10 = i2()({
  U1: "u1",
  U2: "u2",
  U4: "u4",
  U8: "u8",
  S8: "s8",
  U16: "u16",
  S16: "s16",
  U32: "u32",
  S32: "s32",
  F32: "f32",
  F64: "f64",
  C64: "c64",
  C128: "c128",
  UNKNOWN: "unknown"
});

// ../../../node_modules/@arcgis/core/layers/support/RasterFunctionInfo.js
var i6 = class extends f {
  constructor() {
    super(...arguments), this.pixelType = "unknown";
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i6.prototype, "name", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i6.prototype, "description", void 0), e([y({
  type: N,
  json: {
    type: N,
    write: true,
    name: "_object_id"
  }
})], i6.prototype, "id", void 0), e([y({
  type: String,
  json: {
    type: n10.jsonValues,
    read: n10.read,
    write: n10.write
  }
})], i6.prototype, "pixelType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i6.prototype, "type", void 0), i6 = e([a2("esri.layers.support.RasterFunctionInfo")], i6);
var n11 = i6;

// ../../../node_modules/@arcgis/core/layers/support/RasterFunctionVariable.js
var p7 = class extends f {
  constructor() {
    super(...arguments), this.isDataset = false, this.isPublic = false, this.type = "RasterFunctionVariable";
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p7.prototype, "name", void 0), e([y({
  type: Number,
  json: {
    type: N,
    write: true,
    name: "_object_id"
  }
})], p7.prototype, "id", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p7.prototype, "isDataset", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p7.prototype, "isPublic", void 0), e([y({
  json: {
    write: true
  }
})], p7.prototype, "value", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p7.prototype, "type", void 0), p7 = e([a2("esri.layers.support.RasterFunctionVariable")], p7);
var i7 = p7;

// ../../../node_modules/@arcgis/core/layers/support/RasterFunctionProperties.js
var i8 = {
  key: "type",
  base: null,
  typeMap: {
    RasterFunctionVariable: i7
  }
};
var a8 = class extends f {
};
e([y({
  types: i8,
  json: {
    types: i8,
    name: "MatchVariable"
  }
})], a8.prototype, "matchVariable", void 0), e([y({
  types: i8,
  json: {
    types: i8,
    name: "UnionDimension"
  }
})], a8.prototype, "unionDimension", void 0), e([y({
  type: Number,
  json: {
    type: N,
    write: true,
    name: "_object_id"
  }
})], a8.prototype, "id", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a8.prototype, "type", void 0), a8 = e([a2("esri.layers.support.RasterFunctionProperties")], a8);
var n12 = a8;

// ../../../node_modules/@arcgis/core/layers/support/RasterFunctionTemplate.js
var y5 = new n2({
  0: "mosaic",
  1: "item",
  2: "item-group"
}, {
  useNumericKeys: true
});
var a9 = class extends f {
  constructor() {
    super(...arguments), this.functionType = "mosaic", this.type = "RasterFunctionTemplate";
  }
};
e([y({
  type: [String],
  json: {
    write: true
  }
})], a9.prototype, "aliases", void 0), e([y({
  type: Object,
  json: {
    write: true
  }
})], a9.prototype, "arguments", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "description", void 0), e([y({
  type: n11,
  json: {
    write: true,
    name: "function"
  }
})], a9.prototype, "functionInfo", void 0), e([y({
  type: y5.apiValues,
  json: {
    type: [0, 1, 2],
    read: y5.read,
    write: y5.write
  }
})], a9.prototype, "functionType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "group", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "help", void 0), e([y({
  type: Number,
  json: {
    type: N,
    write: true,
    name: "_object_id"
  }
})], a9.prototype, "id", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "name", void 0), e([y({
  type: String,
  json: {
    write: true,
    name: "definition"
  }
})], a9.prototype, "queryDefinition", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "tag", void 0), e([y({
  type: n12,
  json: {
    write: true
  }
})], a9.prototype, "properties", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "thumbnail", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a9.prototype, "thumbnailEx", void 0), e([y({
  json: {
    type: ["RasterFunctionTemplate"],
    write: true
  }
})], a9.prototype, "type", void 0), a9 = e([a2("esri.layers.support.RasterFunctionTemplate")], a9);
var c2 = a9;

// ../../../node_modules/@arcgis/core/layers/support/RasterFunction.js
var c3;
var p8 = /* @__PURE__ */ new Set(["raster", "raster2", "dem", "fillraster"]);
var f5 = /* @__PURE__ */ new Set(["rasters"]);
var m4 = (t3) => t3?.rasterFunction ? d4.fromJSON(t3) : t3;
var l = (t3) => t3 && t3 instanceof d4 ? t3.toJSON() : t3;
var y6 = (t3) => t3?.functionName && !t3.declaredClass;
var F = (t3) => y6(t3) ? new d4(t3) : t3;
var h2 = (t3) => {
  if (null == t3) return null;
  t3 = a(t3);
  const n13 = {};
  for (const e3 of Object.keys(t3)) p8.has(e3.toLowerCase()) ? n13[e3] = m4(t3[e3]) : f5.has(e3.toLowerCase()) && Array.isArray(t3[e3]) ? n13[e3] = t3[e3].map(m4) : n13[e3] = t3[e3];
  return n13;
};
var g2 = {
  types: {
    key: "type",
    base: null,
    typeMap: {
      RasterFunctionTemplate: c2
    }
  },
  json: {
    write: true,
    name: "rasterFunctionDefinition"
  }
};
var d4 = c3 = class extends f {
  constructor(t3) {
    super(t3), this.functionName = null, this.outputPixelType = "unknown", this.variableName = null, this.functionDefinition = null;
  }
  set functionArguments(t3) {
    if (t3) {
      const n13 = Object.keys(t3);
      if (n13.some((n14) => p8.has(n14.toLowerCase()) && y6(t3[n14])) || n13.some((n14) => f5.has(n14.toLowerCase()) && Array.isArray(t3[n14]) && t3[n14].some((t4) => y6(t4)))) {
        t3 = a(t3);
        for (const e3 of n13) p8.has(e3.toLowerCase()) ? t3[e3] = F(t3[e3]) : f5.has(e3.toLowerCase()) && Array.isArray(t3[e3]) && (t3[e3] = t3[e3].map((t4) => F(t4)));
      }
    }
    this._set("functionArguments", t3);
  }
  readFunctionArguments(t3) {
    return h2(t3);
  }
  writeFunctionArguments(t3, n13, e3) {
    const o5 = {};
    for (const r3 of Object.keys(t3)) p8.has(r3.toLowerCase()) ? o5[r3] = l(t3[r3]) : f5.has(r3.toLowerCase()) && Array.isArray(t3[r3]) ? o5[r3] = t3[r3].map(l) : o5[r3] = l(t3[r3]);
    n13[e3] = o5;
  }
  readFunctionName(t3, n13) {
    const e3 = n13.rasterFunctionInfos, o5 = n13.name;
    return o5 || (e3?.length && "None" !== e3[0].name ? e3[0].name : n13.rasterFunctionDefinition ? n13.rasterFunctionDefinition.name : n13.rasterFunction);
  }
  get rasterFunctionDefinition() {
    return this.functionDefinition?.toJSON();
  }
  set rasterFunctionDefinition(t3) {
    this.functionDefinition = t3 ? c2.fromJSON(t3) : null;
  }
  get hasClipFunction() {
    return this.rasterFunctionDefinition ? JSON.stringify(this.rasterFunctionDefinition).includes('"type":"ClipFunction"') : JSON.stringify(this).includes('"rasterFunction":"Clip"');
  }
  clone() {
    return new c3({
      functionName: this.functionName,
      functionArguments: a(this.functionArguments),
      outputPixelType: this.outputPixelType,
      variableName: this.variableName,
      rasterFunctionDefinition: a(this.rasterFunctionDefinition)
    });
  }
};
e([y({
  json: {
    type: Object,
    name: "rasterFunctionArguments"
  }
})], d4.prototype, "functionArguments", null), e([o("functionArguments")], d4.prototype, "readFunctionArguments", null), e([r("functionArguments")], d4.prototype, "writeFunctionArguments", null), e([y({
  json: {
    type: String,
    write: {
      target: "rasterFunction"
    }
  }
})], d4.prototype, "functionName", void 0), e([o("functionName", ["rasterFunction", "rasterFunctionInfos", "rasterFunctionDefinition"])], d4.prototype, "readFunctionName", null), e([o2({
  C128: "c128",
  C64: "c64",
  F32: "f32",
  F64: "f64",
  S16: "s16",
  S32: "s32",
  S8: "s8",
  U1: "u1",
  U16: "u16",
  U2: "u2",
  U32: "u32",
  U4: "u4",
  U8: "u8",
  UNKNOWN: "unknown"
}, {
  ignoreUnknown: false
}), y({
  json: {
    default: "unknown"
  }
})], d4.prototype, "outputPixelType", void 0), e([y({
  type: String,
  json: {
    read: true,
    write: true
  }
})], d4.prototype, "variableName", void 0), e([y()], d4.prototype, "rasterFunctionDefinition", null), e([y(g2)], d4.prototype, "functionDefinition", void 0), e([y()], d4.prototype, "hasClipFunction", null), d4 = c3 = e([a2("esri.layers.support.RasterFunction")], d4);
var N2 = d4;

// ../../../node_modules/@arcgis/core/renderers/FlowRenderer.js
var d5;
var c4 = new n2({
  flow_from: "flow-from",
  flow_to: "flow-to"
});
var h3 = d5 = class extends v(f) {
  constructor(o5) {
    super(o5), this.density = 0.8, this.color = new u([255, 255, 255, 1]), this.maxPathLength = 200, this.trailWidth = 1.5, this.flowSpeed = 10, this.trailLength = 100, this.smoothing = 0, this.flowRepresentation = "flow-from", this.type = "flow", this.authoringInfo = null, this.legendOptions = null, this.trailCap = "butt", this.background = "none";
  }
  clone() {
    const {
      density: o5,
      maxPathLength: t3,
      trailWidth: e3,
      flowSpeed: r3,
      trailLength: i9,
      smoothing: s6,
      flowRepresentation: n13,
      trailCap: p13,
      background: a12
    } = this, l6 = this.color.clone(), m8 = (this.visualVariables || []).map((o6) => o6.clone()), c11 = this.authoringInfo?.clone(), h7 = this.legendOptions?.clone();
    return new d5({
      density: o5,
      color: l6,
      maxPathLength: t3,
      trailWidth: e3,
      flowSpeed: r3,
      trailLength: i9,
      trailCap: p13,
      background: a12,
      smoothing: s6,
      flowRepresentation: n13,
      visualVariables: m8,
      authoringInfo: c11,
      legendOptions: h7
    });
  }
  getSymbol(o5, t3) {
  }
  getSymbolAsync(o5, t3) {
    return __async(this, null, function* () {
    });
  }
  getSymbols() {
    return [];
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], h3.prototype, "density", void 0), e([y({
  type: u,
  json: {
    write: {
      allowNull: true
    }
  }
})], h3.prototype, "color", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], h3.prototype, "maxPathLength", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], h3.prototype, "trailWidth", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], h3.prototype, "flowSpeed", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], h3.prototype, "trailLength", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: false
  }
})], h3.prototype, "smoothing", void 0), e([y({
  type: c4.apiValues,
  json: {
    type: c4.jsonValues,
    read: {
      reader: c4.read
    },
    write: {
      writer: c4.write
    }
  }
})], h3.prototype, "flowRepresentation", void 0), e([o2({
  flowRenderer: "flow"
})], h3.prototype, "type", void 0), e([y({
  type: j2,
  json: {
    write: true
  }
})], h3.prototype, "authoringInfo", void 0), e([y({
  type: p3,
  json: {
    write: true
  }
})], h3.prototype, "legendOptions", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], h3.prototype, "trailCap", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], h3.prototype, "background", void 0), h3 = d5 = e([a2("esri.renderers.FlowRenderer")], h3);
var u3 = h3;

// ../../../node_modules/@arcgis/core/renderers/support/ColormapInfo.js
var c5 = class extends f {
  constructor() {
    super(...arguments), this.value = null, this.label = null, this.color = null;
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], c5.prototype, "value", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c5.prototype, "label", void 0), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], c5.prototype, "color", void 0), c5 = e([a2("esri.renderers.support.ColormapInfo")], c5);
var l2 = c5;

// ../../../node_modules/@arcgis/core/renderers/RasterColormapRenderer.js
var c6;
var m5 = c6 = class extends f {
  constructor(o5) {
    super(o5), this.colormapInfos = null, this.type = "raster-colormap";
  }
  static createFromColormap(o5, r3) {
    if (!o5) return null;
    const t3 = 5 === o5[0].length, e3 = [...o5].sort((o6, r4) => o6[0] - r4[0]).map((o6) => l2.fromJSON({
      value: o6[0],
      color: t3 ? o6.slice(1, 5) : o6.slice(1, 4).concat([255]),
      label: r3 ? r3[o6[0]] ?? "" : o6[0]
    }));
    return new c6({
      colormapInfos: e3
    });
  }
  static createFromColorramp(o5) {
    const r3 = B(o5);
    return c6.createFromColormap(r3);
  }
  clone() {
    return new c6({
      colormapInfos: this.colormapInfos.map((o5) => o5.toJSON())
    });
  }
  extractColormap() {
    return this.colormapInfos.map(({
      value: o5,
      color: r3
    }) => [o5, r3.r, r3.g, r3.b, r3.a > 1 ? r3.a : 255 * r3.a & 255]).sort((o5, r3) => o5[0] - r3[0]);
  }
};
e([y({
  type: [l2],
  json: {
    write: true
  }
})], m5.prototype, "colormapInfos", void 0), e([o2({
  rasterColormap: "raster-colormap"
})], m5.prototype, "type", void 0), m5 = c6 = e([a2("esri.renderers.RasterColormapRenderer")], m5);
var l3 = m5;

// ../../../node_modules/@arcgis/core/renderers/RasterShadedReliefRenderer.js
var c7;
var d6 = c7 = class extends f {
  constructor(e3) {
    super(e3), this.altitude = 45, this.azimuth = 315, this.colorRamp = null, this.hillshadeType = "traditional", this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.scalingType = "none", this.type = "raster-shaded-relief", this.zFactor = 1;
  }
  readColorRamp(e3) {
    return p2(e3);
  }
  clone() {
    return new c7({
      hillshadeType: this.hillshadeType,
      altitude: this.altitude,
      azimuth: this.azimuth,
      zFactor: this.zFactor,
      scalingType: this.scalingType,
      pixelSizeFactor: this.pixelSizeFactor,
      pixelSizePower: this.pixelSizePower,
      colorRamp: a(this.colorRamp)
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], d6.prototype, "altitude", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], d6.prototype, "azimuth", void 0), e([y({
  types: m,
  json: {
    write: true
  }
})], d6.prototype, "colorRamp", void 0), e([o("colorRamp")], d6.prototype, "readColorRamp", null), e([y({
  type: ["traditional", "multi-directional"],
  json: {
    write: true
  }
})], d6.prototype, "hillshadeType", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], d6.prototype, "pixelSizePower", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], d6.prototype, "pixelSizeFactor", void 0), e([y({
  type: ["none", "adjusted"],
  json: {
    write: true
  }
})], d6.prototype, "scalingType", void 0), e([o2({
  rasterShadedRelief: "raster-shaded-relief"
})], d6.prototype, "type", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], d6.prototype, "zFactor", void 0), d6 = c7 = e([a2("esri.renderers.RasterShadedReliefRenderer")], d6);
var m6 = d6;

// ../../../node_modules/@arcgis/core/renderers/RasterStretchRenderer.js
var d7;
var h4 = d7 = class extends f {
  constructor(t3) {
    super(t3), this.colorRamp = null, this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.maxPercent = null, this.minPercent = null, this.numberOfStandardDeviations = null, this.outputMax = null, this.outputMin = null, this.sigmoidStrengthLevel = null, this.statistics = [], this.histograms = null, this.useGamma = false, this.stretchType = "none", this.type = "raster-stretch";
  }
  readColorRamp(t3) {
    if (t3) return p2(t3);
  }
  writeStatistics(t3, e3, r3) {
    t3?.length && (Array.isArray(t3[0]) || (t3 = t3.map((t4) => [t4.min, t4.max, t4.avg, t4.stddev])), e3[r3] = t3);
  }
  readStretchType(t3, e3) {
    let r3 = e3.stretchType;
    return "number" == typeof r3 && (r3 = a5[r3]), n9.read(r3);
  }
  clone() {
    return new d7({
      stretchType: this.stretchType,
      outputMin: this.outputMin,
      outputMax: this.outputMax,
      useGamma: this.useGamma,
      computeGamma: this.computeGamma,
      statistics: a(this.statistics),
      gamma: a(this.gamma),
      sigmoidStrengthLevel: this.sigmoidStrengthLevel,
      numberOfStandardDeviations: this.numberOfStandardDeviations,
      minPercent: this.minPercent,
      maxPercent: this.maxPercent,
      colorRamp: a(this.colorRamp),
      histograms: a(this.histograms),
      dynamicRangeAdjustment: this.dynamicRangeAdjustment
    });
  }
};
e([y({
  types: m,
  json: {
    write: true
  }
})], h4.prototype, "colorRamp", void 0), e([o("colorRamp")], h4.prototype, "readColorRamp", null), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], h4.prototype, "computeGamma", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      target: "dra"
    },
    read: {
      source: "dra"
    }
  }
})], h4.prototype, "dynamicRangeAdjustment", void 0), e([y({
  type: [Number],
  json: {
    write: true
  }
})], h4.prototype, "gamma", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], h4.prototype, "maxPercent", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], h4.prototype, "minPercent", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], h4.prototype, "numberOfStandardDeviations", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "max"
    },
    write: {
      target: "max"
    }
  }
})], h4.prototype, "outputMax", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "min"
    },
    write: {
      target: "min"
    }
  }
})], h4.prototype, "outputMin", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], h4.prototype, "sigmoidStrengthLevel", void 0), e([y({
  json: {
    type: [[Number]],
    write: true
  }
})], h4.prototype, "statistics", void 0), e([y()], h4.prototype, "histograms", void 0), e([r("statistics")], h4.prototype, "writeStatistics", null), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], h4.prototype, "useGamma", void 0), e([y({
  type: n9.apiValues,
  json: {
    type: n9.jsonValues,
    write: n9.write
  }
})], h4.prototype, "stretchType", void 0), e([o("stretchType", ["stretchType"])], h4.prototype, "readStretchType", null), e([o2({
  rasterStretch: "raster-stretch"
})], h4.prototype, "type", void 0), h4 = d7 = e([a2("esri.renderers.RasterStretchRenderer")], h4);
var y7 = h4;

// ../../../node_modules/@arcgis/core/renderers/VectorFieldRenderer.js
var S2;
var z = /* @__PURE__ */ new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]);
var u4 = new n2({
  beaufort_ft: "beaufort-ft",
  beaufort_km: "beaufort-km",
  beaufort_kn: "beaufort-kn",
  beaufort_m: "beaufort-m",
  beaufort_mi: "beaufort-mi",
  classified_arrow: "classified-arrow",
  ocean_current_kn: "ocean-current-kn",
  ocean_current_m: "ocean-current-m",
  simple_scalar: "simple-scalar",
  single_arrow: "single-arrow",
  wind_speed: "wind-barb"
});
var Z = new n2({
  flow_from: "flow-from",
  flow_to: "flow-to"
});
var b2 = S2 = class extends v(f) {
  constructor(e3) {
    super(e3), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }
  readInputUnit(e3, M2) {
    return z.has(e3) ? s5.fromJSON(e3) : null;
  }
  readOutputUnit(e3, M2) {
    return z.has(e3) ? s5.fromJSON(e3) : null;
  }
  get styleRenderer() {
    const e3 = this.style, M2 = this.attributeField, i9 = this._createStyleRenderer(e3);
    return i9.field = M2, i9;
  }
  get sizeVariables() {
    const e3 = [];
    if (this.visualVariables) for (const M2 of this.visualVariables) "size" === M2.type && e3.push(M2);
    if (0 === e3.length) {
      const M2 = new b({
        field: "Magnitude",
        minSize: 0.2 * this.symbolTileSize,
        maxSize: 0.8 * this.symbolTileSize
      });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e3.push(M2);
    }
    return e3;
  }
  get rotationVariables() {
    const e3 = [];
    if (this.visualVariables) for (const M2 of this.visualVariables) "rotation" === M2.type && e3.push(M2);
    if (0 === e3.length) {
      const M2 = new n6({
        field: "Direction",
        rotationType: this.rotationType
      });
      this.visualVariables ? this.visualVariables.push(M2) : this._set("visualVariables", [M2]), e3.push(M2);
    }
    return e3;
  }
  clone() {
    return new S2({
      attributeField: this.attributeField,
      flowRepresentation: this.flowRepresentation,
      rotationType: this.rotationType,
      symbolTileSize: this.symbolTileSize,
      style: this.style,
      visualVariables: a(this.visualVariables),
      inputUnit: this.inputUnit,
      outputUnit: this.outputUnit
    });
  }
  getGraphicsFromPixelData(_0) {
    return __async(this, arguments, function* (e3, M2 = false, t3 = []) {
      const a12 = new Array(), I2 = a6(this.inputUnit, this.outputUnit), r3 = this.rotationVariables[0]?.rotationType || this.rotationType, g4 = M2 ? f4(e3.pixelBlock, "vector-uv", r3, I2) : p4(e3.pixelBlock, "vector-magdir", I2);
      if (null == g4) return a12;
      const o5 = e3.extent, A3 = null != g4.mask && g4.mask.length > 0;
      let d11 = 0;
      const D3 = (o5.xmax - o5.xmin) / g4.width, w4 = (o5.ymax - o5.ymin) / g4.height;
      for (let l6 = 0; l6 < g4.height; l6++) for (let e4 = 0; e4 < g4.width; e4++, d11++) {
        let M3 = new _({
          x: o5.xmin + e4 * D3 + D3 / 2,
          y: o5.ymax - l6 * w4 - w4 / 2,
          spatialReference: o5.spatialReference
        });
        M3 = (yield R(M3))[0];
        const I3 = t3.some((e5) => e5.intersects(M3));
        if ((!A3 || g4.mask[d11]) && !I3) {
          const e5 = {
            Magnitude: g4.pixels[0][d11],
            Direction: g4.pixels[1][d11]
          }, t4 = new d2({
            geometry: new _({
              x: M3.x,
              y: M3.y,
              spatialReference: o5.spatialReference
            }),
            attributes: e5
          });
          t4.symbol = this._getVisualVariablesAppliedSymbol(t4), a12.push(t4);
        }
      }
      return a12;
    });
  }
  getSymbol(e3, M2) {
  }
  getSymbolAsync(e3, M2) {
    return __async(this, null, function* () {
    });
  }
  getSymbols() {
    return [];
  }
  getClassBreakInfos() {
    return this.styleRenderer?.classBreakInfos;
  }
  getDefaultSymbol() {
    return this.styleRenderer?.defaultSymbol;
  }
  _getDefaultSymbol(e3) {
    return new y4({
      path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z",
      outline: new d({
        width: 0
      }),
      size: 20,
      color: e3 || new u([0, 92, 230])
    });
  }
  _getVisualVariablesAppliedSymbol(e3) {
    if (!e3) return;
    const M2 = this.styleRenderer?.getSymbol(e3)?.clone(), i9 = this.sizeVariables, t3 = this.rotationVariables;
    if (i9 && i9.length && this.sizeVariables.forEach((i10) => R2(M2, T([i10], e3))), t3 && t3.length) {
      const i10 = "flow-to" === this.flowRepresentation === ("ocean-current-kn" === this.style || "ocean-current-m" === this.style) ? 0 : 180;
      e3.attributes.Direction = e3.attributes.Direction + i10, this.rotationVariables.forEach((i11) => D(M2, h(i11, e3), i11.axis));
    }
    return M2;
  }
  _createStyleRenderer(e3) {
    let M2 = {
      defaultSymbol: this._getDefaultSymbol(),
      classBreakInfos: []
    };
    switch (e3) {
      case "single-arrow":
        M2 = this._createSingleArrowRenderer();
        break;
      case "beaufort-kn":
        M2 = this._createBeaufortKnotsRenderer();
        break;
      case "beaufort-m":
        M2 = this._createBeaufortMeterRenderer();
        break;
      case "beaufort-ft":
        M2 = this._createBeaufortFeetRenderer();
        break;
      case "beaufort-mi":
        M2 = this._createBeaufortMilesRenderer();
        break;
      case "beaufort-km":
        M2 = this._createBeaufortKilometersRenderer();
        break;
      case "ocean-current-m":
        M2 = this._createCurrentMeterRenderer();
        break;
      case "ocean-current-kn":
        M2 = this._createCurrentKnotsRenderer();
        break;
      case "simple-scalar":
        M2 = this._createSimpleScalarRenderer();
        break;
      case "wind-barb":
        M2 = this._createWindBarbsRenderer();
        break;
      case "classified-arrow":
        M2 = this._createClassifiedArrowRenderer();
    }
    return new w2(M2);
  }
  _createSingleArrowRenderer() {
    return {
      defaultSymbol: this._getDefaultSymbol()
    };
  }
  _createBeaufortKnotsRenderer() {
    const e3 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63], i9 = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return {
      defaultSymbol: this._getDefaultSymbol(new u([214, 47, 39])),
      classBreakInfos: this._getClassBreaks(e3, i9)
    };
  }
  _createBeaufortMeterRenderer() {
    const e3 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7], i9 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return {
      defaultSymbol: this._getDefaultSymbol(new u([214, 47, 39])),
      classBreakInfos: this._getClassBreaks(e3, i9)
    };
  }
  _createBeaufortFeetRenderer() {
    const e3 = this._getDefaultSymbol(new u([214, 47, 39]));
    let i9 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t3 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a12 = 3.28084;
    i9 = i9.map((e4) => e4 * a12);
    return {
      defaultSymbol: e3,
      classBreakInfos: this._getClassBreaks(i9, t3)
    };
  }
  _createBeaufortMilesRenderer() {
    const e3 = this._getDefaultSymbol(new u([214, 47, 39]));
    let i9 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t3 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a12 = 2.23694;
    i9 = i9.map((e4) => e4 * a12);
    return {
      defaultSymbol: e3,
      classBreakInfos: this._getClassBreaks(i9, t3)
    };
  }
  _createBeaufortKilometersRenderer() {
    const e3 = this._getDefaultSymbol(new u([214, 47, 39]));
    let i9 = [0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t3 = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]], a12 = 3.6;
    i9 = i9.map((e4) => e4 * a12);
    return {
      defaultSymbol: e3,
      classBreakInfos: this._getClassBreaks(i9, t3)
    };
  }
  _createCurrentMeterRenderer() {
    const e3 = [0, 0.5, 1, 1.5, 2], i9 = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return {
      defaultSymbol: this._getDefaultSymbol(new u([177, 177, 177])),
      classBreakInfos: this._getClassBreaks(e3, i9)
    };
  }
  _createCurrentKnotsRenderer() {
    const e3 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], i9 = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return {
      defaultSymbol: this._getDefaultSymbol(new u([177, 177, 177])),
      classBreakInfos: this._getClassBreaks(e3, i9)
    };
  }
  _createClassifiedArrowRenderer() {
    const e3 = this._getDefaultSymbol(new u([56, 168, 0]));
    let i9 = [0, 1e-6, 3.5, 7, 10.5, 14];
    if (this.sizeVariables?.length) {
      const e4 = this.sizeVariables[0].minDataValue, M2 = this.sizeVariables[0].maxDataValue;
      if (e4 && M2) {
        const t4 = (M2 - e4) / 5;
        i9 = Array.from(Array(6).keys()).map((M3) => e4 + t4 * M3);
      }
    }
    const t3 = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return {
      defaultSymbol: e3,
      classBreakInfos: this._getClassBreaks(i9, t3)
    };
  }
  _createSimpleScalarRenderer() {
    return {
      defaultSymbol: n5.fromJSON({
        imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=",
        height: 20,
        width: 20,
        type: "esriPMS",
        angle: 0
      })
    };
  }
  _createWindBarbsRenderer() {
    const e3 = Array.from(Array(31).keys()).map((e4) => 5 * e4), M2 = [{
      range: "0-5",
      path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "5-10",
      path: "M25 0 L25 40 M25 35 L17.5 37.5",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "10-15",
      path: "M25 0 L25 40 L10 45 L25 40",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "15-20",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "20-25",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "25-30",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "30-35",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "35-40",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "40-45",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "45-50",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "50-55",
      path: "M25 0 L25 40 L10 40 L25 35",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "55-60",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "60-65",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "65-70",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "70-75",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "75-80",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "80-85",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "85-90",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "90-95",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "95-100",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "100-105",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "105-110",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "110-115",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "115-120",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "120-125",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "125-130",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "130-135",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "135-140",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "140-145",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "145-150",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }], i9 = n5.fromJSON({
      imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC",
      height: 20,
      width: 20,
      type: "esriPMS",
      angle: 0
    }), t3 = e3.map((t4, a12) => {
      let I2;
      if (a12 !== e3.length - 1) if (0 === a12) I2 = {
        minValue: t4,
        maxValue: e3[a12 + 1],
        symbol: i9
      };
      else {
        const i10 = n5.fromJSON({
          type: "esriPMS",
          imageData: M2[a12].imageData,
          contentType: "image/svg+xml",
          height: 32,
          width: 32,
          angle: 0
        });
        I2 = {
          minValue: t4,
          maxValue: e3[a12 + 1],
          symbol: i10
        };
      }
      return new a4(I2);
    });
    return {
      defaultSymbol: i9,
      classBreakInfos: t3
    };
  }
  _getClassBreaks(e3, i9) {
    return i9.map((i10, t3) => new a4({
      minValue: e3[t3],
      maxValue: e3[t3 + 1],
      symbol: this._getDefaultSymbol(new u(i10))
    }));
  }
};
e([y({
  type: ["Magnitude"],
  json: {
    write: true
  }
})], b2.prototype, "attributeField", void 0), e([y({
  type: Z.apiValues,
  json: {
    type: Z.jsonValues,
    read: {
      reader: Z.read
    },
    write: {
      writer: Z.write
    }
  }
})], b2.prototype, "flowRepresentation", void 0), e([y({
  type: ["geographic", "arithmetic"],
  json: {
    write: true
  }
})], b2.prototype, "rotationType", void 0), e([y({
  type: u4.apiValues,
  json: {
    type: u4.jsonValues,
    read: {
      reader: u4.read
    },
    write: {
      writer: u4.write
    }
  }
})], b2.prototype, "style", void 0), e([y({
  json: {
    write: true
  }
})], b2.prototype, "symbolTileSize", void 0), e([y({
  type: s5.apiValues,
  json: {
    type: s5.jsonValues,
    write: {
      writer: s5.write
    }
  }
})], b2.prototype, "inputUnit", void 0), e([o("inputUnit")], b2.prototype, "readInputUnit", null), e([y({
  type: s5.apiValues,
  json: {
    type: s5.jsonValues,
    read: {
      reader: s5.read
    },
    write: {
      writer: s5.write
    }
  }
})], b2.prototype, "outputUnit", void 0), e([o("outputUnit")], b2.prototype, "readOutputUnit", null), e([o2({
  vectorField: "vector-field"
})], b2.prototype, "type", void 0), e([y({
  type: w2
})], b2.prototype, "styleRenderer", null), e([y({
  type: b
})], b2.prototype, "sizeVariables", null), e([y({
  type: n6
})], b2.prototype, "rotationVariables", null), b2 = S2 = e([a2("esri.renderers.VectorFieldRenderer")], b2);
var h5 = b2;

// ../../../node_modules/@arcgis/core/rasterRenderers.js
var l4 = {
  key: "type",
  base: null,
  typeMap: {
    "unique-value": A,
    "class-breaks": w2,
    "raster-colormap": l3,
    "raster-stretch": y7,
    "vector-field": h5,
    "raster-shaded-relief": m6,
    flow: u3
  }
};
var d8 = __spreadProps(__spreadValues({}, l4), {
  typeMap: __spreadValues({}, l4.typeMap)
});
delete d8.typeMap["vector-field"], delete d8.typeMap.flow;
var p9 = {
  uniqueValue: A,
  classBreaks: w2,
  rasterStretch: y7,
  rasterColormap: l3,
  vectorField: h5,
  rasterShadedRelief: m6,
  flowRenderer: u3
};
function u5(e3) {
  return e3 && p9[e3.type] || null;
}
function c8(r3, s6) {
  if (!r3) return null;
  if ("classBreaks" === r3.type && r3.classificationMethod) {
    const e3 = r3.authoringInfo || {
      classificationMethod: ""
    };
    e3.classificationMethod = r3.classificationMethod, r3.authoringInfo = e3;
  }
  "vectorField" === r3.type && r3.visualVariables && !Array.isArray(r3.visualVariables) && (r3.visualVariables = [r3.visualVariables]);
  const t3 = u5(r3);
  if (t3) {
    const e3 = new t3();
    return e3.read(r3, s6), e3;
  }
  return s6?.messages && r3 && s6.messages.push(new s2("renderer:unsupported", "Renderers of type '" + (r3.type || "unknown") + "' are not supported", {
    definition: r3,
    context: s6
  })), null;
}

// ../../../node_modules/@arcgis/core/layers/support/MosaicRule.js
var w3;
var y8 = i2()({
  MT_FIRST: "first",
  MT_LAST: "last",
  MT_MIN: "min",
  MT_MAX: "max",
  MT_MEAN: "mean",
  MT_BLEND: "blend",
  MT_SUM: "sum"
});
var M = i2()({
  esriMosaicNone: "none",
  esriMosaicCenter: "center",
  esriMosaicNadir: "nadir",
  esriMosaicViewpoint: "viewpoint",
  esriMosaicAttribute: "attribute",
  esriMosaicLockRaster: "lock-raster",
  esriMosaicNorthwest: "northwest",
  esriMosaicSeamline: "seamline"
});
function g3(e3) {
  let t3;
  switch (e3 ? e3.toLowerCase().replace("esrimosaic", "") : "") {
    case "byattribute":
    case "attribute":
      t3 = "esriMosaicAttribute";
      break;
    case "lockraster":
      t3 = "esriMosaicLockRaster";
      break;
    case "center":
      t3 = "esriMosaicCenter";
      break;
    case "northwest":
      t3 = "esriMosaicNorthwest";
      break;
    case "nadir":
      t3 = "esriMosaicNadir";
      break;
    case "viewpoint":
      t3 = "esriMosaicViewpoint";
      break;
    case "seamline":
      t3 = "esriMosaicSeamline";
      break;
    default:
      t3 = "esriMosaicNone";
  }
  return M.fromJSON(t3);
}
var f6 = w3 = class extends f {
  constructor(e3) {
    super(e3), this.ascending = true, this.itemRasterFunction = null, this.lockRasterIds = null, this.method = null, this.multidimensionalDefinition = null, this.objectIds = null, this.operation = null, this.sortField = null, this.sortValue = null, this.viewpoint = null, this.where = null;
  }
  readAscending(e3, t3) {
    return null != t3.ascending ? t3.ascending : null == t3.sortAscending || t3.sortAscending;
  }
  get itemRenderingRule() {
    return i(n.getLogger(this), "itemRenderingRule", {
      replacement: "itemRasterFunction",
      version: "4.27",
      warnOnce: true
    }), this._get("itemRasterFunction");
  }
  set itemRenderingRule(e3) {
    i(n.getLogger(this), "itemRenderingRule", {
      replacement: "itemRasterFunction",
      version: "4.27",
      warnOnce: true
    }), this._set("itemRasterFunction", e3);
  }
  readMethod(e3, t3) {
    return g3(t3.mosaicMethod || t3.defaultMosaicMethod);
  }
  writeMultidimensionalDefinition(e3, t3, o5) {
    null != e3 && (e3 = e3.filter(({
      variableName: e4,
      dimensionName: t4
    }) => e4 && "*" !== e4 || t4)).length && (t3[o5] = e3.map((e4) => e4.toJSON()));
  }
  readOperation(e3, t3) {
    const o5 = t3.mosaicOperation, r3 = t3.mosaicOperator?.toLowerCase(), i9 = o5 || (r3 ? y8.toJSON(r3) : null);
    return y8.fromJSON(i9) || "first";
  }
  castSortValue(e3) {
    return null == e3 || "string" == typeof e3 || "number" == typeof e3 ? e3 : `${e3}`;
  }
  clone() {
    return new w3({
      ascending: this.ascending,
      itemRasterFunction: a(this.itemRasterFunction),
      lockRasterIds: a(this.lockRasterIds),
      method: this.method,
      multidimensionalDefinition: a(this.multidimensionalDefinition),
      objectIds: a(this.objectIds),
      operation: this.operation,
      sortField: this.sortField,
      sortValue: this.sortValue,
      viewpoint: a(this.viewpoint),
      where: this.where
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], f6.prototype, "ascending", void 0), e([o("ascending", ["ascending", "sortAscending"])], f6.prototype, "readAscending", null), e([y({
  type: N2,
  json: {
    name: "itemRenderingRule",
    write: true
  }
})], f6.prototype, "itemRasterFunction", void 0), e([y({
  type: N2
})], f6.prototype, "itemRenderingRule", null), e([y({
  type: [N],
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: "lock-raster" === this.method
        };
      }
    }
  }
})], f6.prototype, "lockRasterIds", void 0), e([y({
  type: String,
  json: {
    type: M.jsonValues,
    write: {
      target: "mosaicMethod",
      writer: M.write
    }
  }
})], f6.prototype, "method", void 0), e([o("method", ["mosaicMethod", "defaultMosaicMethod"])], f6.prototype, "readMethod", null), e([y({
  type: [p6],
  json: {
    write: true
  }
})], f6.prototype, "multidimensionalDefinition", void 0), e([r("multidimensionalDefinition")], f6.prototype, "writeMultidimensionalDefinition", null), e([y({
  type: [N],
  json: {
    name: "fids",
    write: true
  }
})], f6.prototype, "objectIds", void 0), e([y({
  json: {
    type: y8.jsonValues,
    read: {
      reader: y8.read
    },
    write: {
      target: "mosaicOperation",
      writer: y8.write
    }
  }
})], f6.prototype, "operation", void 0), e([o("operation", ["mosaicOperation", "mosaicOperator"])], f6.prototype, "readOperation", null), e([y({
  type: String,
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: "attribute" === this.method
        };
      }
    }
  }
})], f6.prototype, "sortField", void 0), e([y({
  type: [String, Number],
  json: {
    write: {
      allowNull: true,
      overridePolicy() {
        return {
          enabled: "attribute" === this.method,
          allowNull: true
        };
      }
    }
  }
})], f6.prototype, "sortValue", void 0), e([s3("sortValue")], f6.prototype, "castSortValue", null), e([y({
  type: _,
  json: {
    write: true
  }
})], f6.prototype, "viewpoint", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], f6.prototype, "where", void 0), f6 = w3 = e([a2("esri.layers.support.MosaicRule")], f6);
var j3 = f6;

// ../../../node_modules/@arcgis/core/layers/support/MultidimensionalSubset.js
var l5;
var p10 = {
  base: n3,
  key: "type",
  typeMap: {
    extent: w,
    polygon: j
  }
};
var u6 = l5 = class extends f {
  constructor(e3) {
    super(e3), this.areaOfInterest = null, this.subsetDefinitions = null;
  }
  get dimensions() {
    const {
      subsetDefinitions: e3
    } = this;
    if (null == e3 || 0 === e3.length) return [];
    const t3 = /* @__PURE__ */ new Map();
    e3.forEach((e4) => {
      if (!e4.dimensionName) return;
      let s7, o5;
      if (Array.isArray(e4.values[0])) {
        const t4 = e4.values;
        s7 = t4[0][0], o5 = t4[e4.values.length - 1][1];
      } else {
        const t4 = e4.values;
        s7 = t4[0], o5 = t4[e4.values.length - 1];
      }
      if (t3.has(e4.dimensionName)) {
        const r3 = t3.get(e4.dimensionName);
        r3[0] = Math.min(s7, r3[0]), r3[1] = Math.max(o5, r3[1]);
      } else t3.set(e4.dimensionName, [s7, o5]);
    });
    const s6 = [];
    for (const o5 of t3) s6.push({
      name: o5[0],
      extent: o5[1]
    });
    return s6;
  }
  get variables() {
    const {
      subsetDefinitions: e3
    } = this;
    if (null == e3 || 0 === e3.length) return [];
    const t3 = /* @__PURE__ */ new Set();
    return e3.forEach((e4) => {
      e4.variableName && t3.add(e4.variableName);
    }), [...t3];
  }
  clone() {
    const e3 = this.subsetDefinitions?.map((e4) => e4.clone()), t3 = this.areaOfInterest ? this.areaOfInterest.clone() : this.areaOfInterest;
    return new l5({
      areaOfInterest: t3,
      subsetDefinitions: e3
    });
  }
};
e([y({
  types: p10,
  json: {
    read: y2,
    write: true
  }
})], u6.prototype, "areaOfInterest", void 0), e([y({
  readOnly: true
})], u6.prototype, "dimensions", null), e([y({
  readOnly: true
})], u6.prototype, "variables", null), e([y({
  type: [p6],
  json: {
    write: true
  }
})], u6.prototype, "subsetDefinitions", void 0), u6 = l5 = e([a2("esri.layers.support.MultidimensionalSubset")], u6);
var c9 = u6;

// ../../../node_modules/@arcgis/core/layers/support/RasterJobHandler.js
var t2 = class {
  constructor() {
    this._workerThread = null, this._destroyed = false;
  }
  initialize() {
    return __async(this, null, function* () {
      const e3 = yield p5("RasterWorker");
      this._destroyed ? e3.close() : this._workerThread = e3;
    });
  }
  destroy() {
    this._destroyed = true, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }
  convertVectorFieldData(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const n13 = yield this._workerThread.invoke("convertVectorFieldData", {
        pixelBlock: r3.pixelBlock.toJSON(),
        type: r3.dataType
      }, t3);
      return n13 ? new g(n13) : null;
    });
  }
  computeStatisticsHistograms(r3, o5) {
    if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
    return this._workerThread.invoke("computeStatisticsHistograms", {
      pixelBlock: r3.pixelBlock.toJSON()
    }, o5);
  }
  decode(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const n13 = yield this._workerThread.invoke("decode", r3, t3);
      return n13 ? new g(n13) : null;
    });
  }
  symbolize(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const n13 = {
        extent: r3.extent?.toJSON(),
        pixelBlock: r3.pixelBlock?.toJSON(),
        simpleStretchParams: r3.simpleStretchParams,
        bandIds: r3.bandIds
      }, a12 = yield this._workerThread.invoke("symbolize", n13, t3);
      return a12 ? new g(a12) : null;
    });
  }
  updateSymbolizer(r3, o5) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const t3 = r3?.rendererJSON?.histograms;
      yield Promise.all(this._workerThread.broadcast("updateSymbolizer", {
        symbolizerJSON: r3.toJSON(),
        histograms: t3
      }, o5));
    });
  }
  updateRasterFunction(r3, o5) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      yield Promise.all(this._workerThread.broadcast("updateRasterFunction", {
        rasterFunctionJSON: r3.toJSON()
      }, o5));
    });
  }
  process(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const n13 = yield this._workerThread.invoke("process", {
        extent: r3.extent?.toJSON(),
        primaryPixelSizes: r3.primaryPixelSizes?.map((e3) => null != e3 ? e3.toJSON() : null),
        primaryPixelBlocks: r3.primaryPixelBlocks.map((e3) => null != e3 ? e3.toJSON() : null),
        primaryRasterIds: r3.primaryRasterIds
      }, t3);
      return n13 ? new g(n13) : null;
    });
  }
  stretch(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (!r3?.pixelBlock) return null;
      const n13 = {
        srcPixelBlock: r3.pixelBlock.toJSON(),
        stretchParams: r3.stretchParams
      }, a12 = yield this._workerThread.invoke("stretch", n13, t3);
      return a12 ? new g(a12) : null;
    });
  }
  split(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (!r3?.pixelBlock) return null;
      const n13 = {
        srcPixelBlock: r3.pixelBlock.toJSON(),
        tileSize: r3.tileSize,
        maximumPyramidLevel: r3.maximumPyramidLevel,
        useBilinear: r3.useBilinear
      }, a12 = yield this._workerThread.invoke("split", n13, t3);
      return a12 && a12.forEach((e3, r4) => {
        a12.set(r4, e3 ? g.fromJSON(e3) : null);
      }), a12;
    });
  }
  clipTile(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (!r3?.pixelBlock) return null;
      const n13 = __spreadProps(__spreadValues({}, r3), {
        pixelBlock: r3.pixelBlock.toJSON()
      }), a12 = yield this._workerThread.invoke("clipTile", n13, t3);
      return a12 ? g.fromJSON(a12) : null;
    });
  }
  estimateStatisticsHistograms(r3, o5) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (!r3?.pixelBlock) return null;
      const t3 = {
        srcPixelBlock: r3.pixelBlock.toJSON()
      };
      return yield this._workerThread.invoke("estimateStatisticsHistograms", t3, o5);
    });
  }
  mosaicAndTransform(r3, t3) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      if (!r3?.srcPixelBlocks?.length) return {
        pixelBlock: null
      };
      const n13 = __spreadProps(__spreadValues({}, r3), {
        srcPixelBlocks: r3.srcPixelBlocks.map((e3) => null != e3 ? e3.toJSON() : null)
      }), a12 = yield this._workerThread.invoke("mosaicAndTransform", n13, t3);
      return {
        pixelBlock: a12.pixelBlock ? new g(a12.pixelBlock) : null,
        localNorthDirections: a12.localNorthDirections
      };
    });
  }
  createFlowMesh(r3, o5) {
    return __async(this, null, function* () {
      if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
      const t3 = {
        buffer: r3.flowData.data.buffer,
        maskBuffer: r3.flowData.mask.buffer,
        width: r3.flowData.width,
        height: r3.flowData.height
      }, {
        meshType: n13,
        simulationSettings: a12
      } = r3, i9 = yield this._workerThread.invoke("createFlowMesh", {
        meshType: n13,
        flowData: t3,
        simulationSettings: a12
      }, __spreadProps(__spreadValues({}, o5), {
        transferList: [t3.buffer, t3.maskBuffer]
      }));
      return {
        vertexData: new Float32Array(i9.vertexBuffer),
        indexData: new Uint32Array(i9.indexBuffer)
      };
    });
  }
  getProjectionOffsetGrid(r3, o5) {
    if (!this._workerThread) throw new s("raster-jobhandler:no-connection", "no available worker connection");
    const t3 = null != r3.datumTransformation ? r3.datumTransformation.steps.map((e3) => ({
      wkid: e3.wkid,
      wkt: e3.wkt,
      isInverse: e3.isInverse
    })) : null, n13 = null != r3.rasterTransform ? r3.rasterTransform.toJSON() : null, a12 = {
      projectedExtent: r3.projectedExtent.toJSON(),
      srcBufferExtent: r3.srcBufferExtent.toJSON(),
      pixelSize: r3.pixelSize,
      hasWrapAround: r3.hasWrapAround,
      spacing: r3.spacing,
      datumTransformationSteps: t3,
      rasterTransform: n13,
      isAdaptive: r3.isAdaptive,
      includeGCSGrid: r3.includeGCSGrid
    };
    return this._workerThread.invoke("getProjectionOffsetGrid", a12, o5);
  }
};

// ../../../node_modules/@arcgis/core/renderers/support/rasterRendererHelper.js
var I = 0.25;
var S3 = a3.fromJSON({
  type: "multipart",
  colorRamps: [{
    fromColor: [0, 0, 255],
    toColor: [0, 255, 255]
  }, {
    fromColor: [0, 255, 255],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [255, 0, 0]
  }]
});
var k = a3.fromJSON(m3[0]);
var F2 = /* @__PURE__ */ new Set(["scientific", "standard-time", "vector-uv", "vector-magdir", "vector-u", "vector-v", "vector-magnitude", "vector-direction"]);
function L(e3, t3) {
  const {
    attributeTable: n13,
    colormap: a12
  } = e3;
  if (o4(e3)) {
    const t4 = Y(e3);
    if (null != t4) return t4;
  }
  if (t3?.rasterFunctionColorRamp) {
    const n14 = z2(e3, t3);
    return n14.colorRamp = t3.rasterFunctionColorRamp, n14;
  }
  if (null != a12) {
    const t4 = _2(e3);
    if (null != t4) return t4;
  }
  if (null != n13) {
    const t4 = A2(e3);
    if (null != t4) return t4;
  }
  return z2(e3, t3);
}
function B2(e3, t3 = false) {
  const n13 = ["raster-stretch"];
  return u2(e3, t3) && n13.push("raster-colormap"), t(e3) && n13.push("unique-value"), r2(e3, t3) && n13.push("class-breaks"), e2(e3) && n13.push("raster-shaded-relief"), o4(e3) && n13.push("vector-field"), i4(e3) && n13.push("flow"), n13;
}
function E(e3) {
  return "Function" === e3.datasetFormat && "Colormap" === e3.rasterFunction.functionName ? e3.rasterFunction.colorRamp : void 0;
}
function q(e3, t3, n13) {
  const a12 = ["nearest", "bilinear", "cubic", "majority"], r3 = n13?.toLowerCase().replace("bicubic", "cubic"), l6 = a12.find((e4) => e4 === r3);
  if ("Map" === t3) return l6 ?? "bilinear";
  if ("standard-time" === e3.dataType) return l6 ?? "nearest";
  return "thematic" === e3.dataType || e3.attributeTable || e3.colormap ? "nearest" === l6 || "majority" === l6 ? l6 : "nearest" : l6 ?? "bilinear";
}
function z2(e3, t3) {
  e3 = W2(e3, t3?.variableName);
  const {
    bandCount: n13
  } = e3;
  let {
    bandIds: a12,
    stretchType: r3
  } = t3 || {};
  a12?.some((e4) => e4 >= n13) && (a12 = null);
  let l6 = e3.statistics, s6 = e3.histograms;
  n13 > 1 ? (a12 = a12?.length ? a12 : U2(e3), l6 = null == l6 ? null : a12?.map((e4) => l6[e4]), s6 = null == s6 ? null : a12?.map((e4) => s6[e4])) : a12 = [0], null == r3 && (r3 = O(e3));
  let o5 = false;
  switch (r3) {
    case "none":
      o5 = false;
      break;
    case "percent-clip":
      o5 = !s6?.length;
      break;
    default:
      o5 = !l6?.length;
  }
  const {
    dataType: i9
  } = e3, u7 = 1 === a12?.length && F2.has(i9) ? S3 : null, m8 = new y7({
    stretchType: r3,
    dynamicRangeAdjustment: o5,
    colorRamp: u7,
    outputMin: 0,
    outputMax: 255,
    gamma: 1 === a12?.length ? [1] : [1, 1, 1],
    useGamma: false
  });
  return "percent-clip" === r3 ? m8.maxPercent = m8.minPercent = I : "standard-deviation" === r3 && (m8.numberOfStandardDeviations = 2), o5 || null == e3.multidimensionalInfo && !t3?.includeStatisticsInStretch || ("percent-clip" === r3 ? m8.histograms = s6 : "min-max" !== r3 && "standard-deviation" !== r3 || (m8.statistics = l6)), m8;
}
function W2(e3, t3) {
  const {
    multidimensionalInfo: n13
  } = e3;
  if (!t3 || !n13) return e3;
  const a12 = n13.variables.find((e4) => e4.name === t3);
  if (!a12) return e3;
  if (e3 = e3.clone(), a12) {
    const {
      statistics: t4,
      histograms: n14
    } = a12;
    t4?.length && (e3.statistics = t4.map((e4) => ({
      min: e4.min,
      max: e4.max,
      avg: e4.avg,
      stddev: e4.stddev
    }))), n14?.length && (e3.histograms = n14);
  }
  return e3;
}
function U2(e3) {
  const t3 = e3.bandCount;
  if (1 === t3) return null;
  if (2 === t3) return [0];
  const {
    bandInfos: n13
  } = e3;
  let a12;
  if (n13.length === t3) {
    const {
      red: e4,
      green: t4,
      blue: r3,
      nir: l6
    } = D2(n13);
    null != e4 && null != t4 && null != r3 ? a12 = [e4, t4, r3] : null != l6 && null != e4 && null != t4 && (a12 = [l6, e4, t4]);
  }
  return !a12 && t3 >= 3 && (a12 = [0, 1, 2]), a12;
}
function D2(e3) {
  const t3 = {};
  for (let n13 = 0; n13 < e3.length; n13++) {
    const a12 = e3[n13], r3 = a12.name.toLowerCase();
    if ("red" === r3) t3.red = n13;
    else if ("green" === r3) t3.green = n13;
    else if ("blue" === r3) t3.blue = n13;
    else if ("nearinfrared" === r3 || "nearinfrared_1" === r3 || "nir" === r3) t3.nir = n13;
    else if (a12.maxWavelength && a12.minWavelength) {
      const e4 = a12.minWavelength, r4 = a12.maxWavelength;
      null == t3.blue && e4 >= 410 && e4 <= 480 && r4 >= 480 && r4 <= 540 ? t3.blue = n13 : null == t3.green && e4 >= 490 && e4 <= 560 && r4 >= 560 && r4 <= 610 ? t3.green = n13 : null == t3.red && e4 >= 595 && e4 <= 670 && r4 >= 660 && r4 <= 730 ? t3.red = n13 : null == t3.nir && e4 >= 700 && e4 <= 860 && r4 >= 800 && r4 <= 950 && (t3.nir = n13);
    }
  }
  return t3;
}
function O(e3) {
  let t3 = "percent-clip";
  const {
    pixelType: n13,
    dataType: a12,
    histograms: r3,
    statistics: l6,
    multidimensionalInfo: s6
  } = e3, o5 = F2.has(a12) || "generic" === a12 && null != s6;
  return "u8" !== n13 || "processed" !== a12 && null != r3 && null != l6 ? "u8" === n13 || "elevation" === a12 || o5 ? t3 = "min-max" : null != r3 ? t3 = "percent-clip" : null != l6 && (t3 = "min-max") : t3 = "none", t3;
}
function A2(t3, n13, a12, l6) {
  if (!t(t3, n13)) return null;
  const {
    attributeTable: s6,
    statistics: i9
  } = t3, u7 = J(s6, n13), c11 = G(s6, "red"), f8 = G(s6, "green"), p13 = G(s6, "blue"), b3 = new j2(), h7 = [], g4 = /* @__PURE__ */ new Set(), v2 = !!(c11 && f8 && p13);
  if (null != s6) s6.features.forEach((t4) => {
    const n14 = t4.attributes[u7.name];
    if (!g4.has(t4.attributes[u7.name]) && null != n14) {
      g4.add(n14);
      const a13 = v2 && ("single" === c11.type || "double" === c11.type) && ("single" === f8.type || "double" === f8.type) && ("single" === p13.type || "double" === p13.type) && !s6.features.some((e3) => e3.attributes[c11.name] > 1 || e3.attributes[f8.name] > 1 || e3.attributes[p13.name] > 1), r3 = a13 ? 255 : 1;
      h7.push(new n7({
        value: t4.attributes[u7.name],
        label: t4.attributes[u7.name] + "",
        symbol: new S({
          style: "solid",
          outline: null,
          color: new u(v2 ? [t4.attributes[c11.name] * r3, t4.attributes[f8.name] * r3, t4.attributes[p13.name] * r3, 1] : [0, 0, 0, 0])
        })
      }));
    }
  });
  else if (i9?.[0]) for (let r3 = i9[0].min; r3 <= i9[0].max; r3++) h7.push(new n7({
    value: r3,
    label: r3.toString(),
    symbol: new S({
      style: "solid",
      outline: null,
      color: new u([0, 0, 0, 0])
    })
  }));
  if (h7.sort((e3, t4) => e3.value && "string" == typeof e3.value.valueOf() ? 0 : e3.value > t4.value ? 1 : -1), !v2) {
    const t4 = B(k, {
      numColors: h7.length
    });
    h7.forEach((n14, a13) => n14.symbol.color = new u(t4[a13].slice(1, 4))), b3.colorRamp = k;
  }
  if (a12 || l6) {
    const t4 = a12 || B(l6, {
      numColors: h7.length
    }).map((e3) => e3.slice(1));
    h7.forEach((n14, a13) => n14.symbol.color = new u(t4[a13])), b3.colorRamp = l6;
  }
  return new A({
    field: u7.name,
    uniqueValueInfos: h7,
    authoringInfo: b3
  });
}
function J(e3, t3, a12) {
  let r3;
  return null != e3 ? (r3 = t3 ? e3.fields.find((e4) => t3.toLowerCase() === e4.name.toLowerCase()) : P(e3.fields), r3 || (a12 || (r3 = e3.fields.find((e4) => "string" === e4.type)), r3 || (r3 = G(e3, "value")))) : r3 = new y3({
    name: "value"
  }), r3;
}
function P(e3) {
  let t3;
  for (let n13 = 0; n13 < e3.length; n13++) {
    const a12 = e3[n13].name.toLowerCase();
    if ("string" === e3[n13].type) {
      if (a12.startsWith("class")) {
        t3 = e3[n13];
        break;
      }
      null == t3 && (a12.endsWith("name") || a12.endsWith("type")) && (t3 = e3[n13]);
    }
  }
  return t3;
}
function G(e3, t3) {
  return null == e3 ? null : e3.fields.find((e4) => e4.name.toLowerCase() === t3);
}
function _2(e3) {
  if (!u2(e3)) return null;
  let t3;
  const {
    attributeTable: n13,
    colormap: a12
  } = e3;
  if (null != n13) {
    const e4 = G(n13, "value"), a13 = J(n13, null, true);
    "string" === a13.type && (t3 = {}, n13.features.forEach((n14) => {
      const r3 = n14.attributes;
      t3[r3[e4.name]] = a13 ? r3[a13.name] : r3[e4.name];
    }));
  }
  return l3.createFromColormap(a12, t3);
}
var X = /* @__PURE__ */ new Map([["m/s", "meter-per-second"], ["km/h", "kilometer-per-hour"], ["knots", "knots"], ["ft/s", "feet-per-second"], ["mph", "mile-per-hour"]]);
function Y(e3) {
  if (!o4(e3)) return null;
  let t3;
  if (null != e3.statistics && e3.statistics.length && ("vector-magdir" === e3.dataType || "vector-uv" === e3.dataType)) {
    const {
      minMagnitude: n14,
      maxMagnitude: a13
    } = te(e3.dataType, e3.statistics);
    t3 = [new b({
      field: "Magnitude",
      minSize: 10,
      maxSize: 40,
      minDataValue: n14,
      maxDataValue: a13
    })];
  }
  const n13 = null != e3.multidimensionalInfo ? X.get(e3.multidimensionalInfo.variables[0].unit) : void 0, a12 = new h5({
    visualVariables: t3,
    inputUnit: n13,
    rotationType: "geographic"
  });
  return a12.visualVariables = [...a12.sizeVariables, ...a12.rotationVariables], a12;
}
function Z2(e3) {
  return {
    color: e3.symbolLayers[0].material?.color,
    type: "esriSFS",
    style: "esriSFSSolid"
  };
}
function $(e3) {
  if ("uniqueValue" === e3.type) {
    const t3 = e3.uniqueValueInfos, n13 = t3?.[0].symbol;
    return n13?.symbolLayers?.length && (e3.uniqueValueInfos = t3?.map((e4) => ({
      value: e4.value,
      label: e4.label,
      symbol: e4.symbol ? Z2(e4.symbol) : null
    }))), e3;
  }
  if ("classBreaks" === e3.type) {
    const t3 = e3.classBreakInfos, n13 = t3[0].symbol;
    return n13?.symbolLayers?.length && (e3.classBreakInfos = t3.map((e4) => ({
      classMinValue: e4.classMinValue,
      classMaxValue: e4.classMaxValue,
      label: e4.label,
      symbol: e4.symbol ? Z2(e4.symbol) : null
    }))), e3;
  }
  return e3;
}
function te(e3, t3) {
  let n13, a12;
  if ("vector-magdir" === e3) n13 = t3[0].min, a12 = t3[0].max;
  else {
    const e4 = t3[0].min, r3 = t3[0].max, l6 = t3[1].min, s6 = t3[1].max;
    n13 = 0, a12 = Math.max(Math.abs(e4), Math.abs(l6), Math.abs(r3), Math.abs(s6));
  }
  return {
    minMagnitude: n13,
    maxMagnitude: a12
  };
}

// ../../../node_modules/@arcgis/core/rest/support/ImageHistogramParameters.js
var j4;
var d10 = j4 = class extends f {
  constructor() {
    super(...arguments), this.geometry = null, this.mosaicRule = null, this.rasterFunction = null, this.pixelSize = null, this.raster = void 0, this.timeExtent = null;
  }
  writeGeometry(e3, r3, t3) {
    null != e3 && (r3.geometryType = p(e3), r3[t3] = e3.toJSON());
  }
  get renderingRule() {
    return i(n.getLogger(this), "renderingRule", {
      replacement: "rasterFunction",
      version: "4.27",
      warnOnce: true
    }), this._get("rasterFunction");
  }
  set renderingRule(e3) {
    i(n.getLogger(this), "renderingRule", {
      replacement: "rasterFunction",
      version: "4.27",
      warnOnce: true
    }), this._set("rasterFunction", e3);
  }
  clone() {
    return new j4(a({
      geometry: this.geometry,
      mosaicRule: this.mosaicRule,
      rasterFunction: this.rasterFunction,
      pixelSize: this.pixelSize,
      raster: this.raster,
      timeExtent: this.timeExtent
    }));
  }
};
e([y({
  types: n4,
  json: {
    read: y2
  }
})], d10.prototype, "geometry", void 0), e([r("geometry")], d10.prototype, "writeGeometry", null), e([y({
  type: j3,
  json: {
    write: true
  }
})], d10.prototype, "mosaicRule", void 0), e([y({
  type: N2
})], d10.prototype, "renderingRule", null), e([y({
  type: N2,
  json: {
    write: true,
    name: "renderingRule"
  }
})], d10.prototype, "rasterFunction", void 0), e([y({
  type: _,
  json: {
    write: true
  }
})], d10.prototype, "pixelSize", void 0), e([y({
  json: {
    write: true
  }
})], d10.prototype, "raster", void 0), e([y({
  type: c,
  json: {
    read: {
      source: "time"
    },
    write: {
      target: "time"
    }
  }
})], d10.prototype, "timeExtent", void 0), d10 = j4 = e([a2("esri.rest.support.ImageHistogramParameters")], d10);
var h6 = d10;

// ../../../node_modules/@arcgis/core/rest/imageService/fetchRasterInfo.js
function m7(m8, f8, p13) {
  return __async(this, null, function* () {
    const c11 = f3(m8), {
      rasterFunction: d11,
      sourceJSON: h7
    } = f8 || {}, g4 = d11 ? JSON.stringify(d11.rasterFunctionDefinition || d11) : null, y9 = s4(__spreadProps(__spreadValues({}, c11.query), {
      renderingRule: g4,
      f: "json"
    })), x = i3(y9, p13);
    m8 = c11.path;
    const b3 = h7 || (yield U(m8, x).then((e3) => e3.data)), v2 = b3.hasRasterAttributeTable ? U(`${m8}/rasterAttributeTable`, x) : null, S4 = b3.hasColormap ? U(`${m8}/colormap`, x) : null, V = b3.hasHistograms ? U(`${m8}/histograms`, x) : null, D3 = b3.currentVersion >= 10.3 ? U(`${m8}/keyProperties`, x) : null, I2 = b3.hasMultidimensions ? U(`${m8}/multidimensionalInfo`, x) : null, T2 = yield Promise.allSettled([v2, S4, V, D3, I2]);
    let R3 = null;
    if (b3.minValues && b3.minValues.length === b3.bandCount) {
      R3 = [];
      for (let e3 = 0; e3 < b3.minValues.length; e3++) R3.push({
        min: b3.minValues[e3],
        max: b3.maxValues[e3],
        avg: b3.meanValues[e3],
        stddev: b3.stdvValues[e3]
      });
    }
    const j5 = w.fromJSON(b3.extent), w4 = Math.ceil(j5.width / b3.pixelSizeX - 0.1), M2 = Math.ceil(j5.height / b3.pixelSizeY - 0.1), N3 = f2.fromJSON(b3.spatialReference || b3.extent.spatialReference), J2 = "fulfilled" === T2[0].status ? T2[0].value?.data : null, O2 = J2?.features?.length ? d3.fromJSON(J2) : null, k2 = "fulfilled" === T2[1].status ? T2[1].value?.data.colormap : null, C = k2?.length ? k2 : null, P2 = "fulfilled" === T2[2].status ? T2[2].value?.data.histograms : null, z3 = P2?.[0]?.counts?.length ? P2 : null, F3 = "fulfilled" === T2[3].status ? T2[3].value?.data ?? {} : {}, $2 = "fulfilled" === T2[4].status ? T2[4].value?.data.multidimensionalInfo : null, H = $2?.variables?.length ? $2 : null;
    H && H.variables.forEach((e3) => {
      e3.statistics?.length && e3.statistics.forEach((e4) => {
        e4.avg = e4.mean, e4.stddev = e4.standardDeviation;
      });
    });
    const {
      defaultVariable: L2,
      serviceDataType: A3
    } = b3;
    L2 && L2 !== F3.DefaultVariable && (F3.DefaultVariable = L2), A3?.includes("esriImageServiceDataTypeVector") && !A3.includes(F3.DataType) && (F3.DataType = A3.replace("esriImageServiceDataType", ""));
    let E2 = b3.noDataValue;
    b3.noDataValues?.length && b3.noDataValues.some((e3) => e3 !== E2) && (E2 = b3.noDataValues);
    const q2 = b3.transposeInfo ? new n8({
      blockWidth: 256,
      blockHeight: 256,
      pyramidBlockWidth: 256,
      pyramidBlockHeight: 256,
      pyramidScalingFactor: 2,
      compression: "lerc",
      origin: new _({
        x: b3.extent.xmin,
        y: b3.extent.ymax,
        spatialReference: N3
      }),
      firstPyramidLevel: 1,
      maximumPyramidLevel: Math.max(0, Math.round(Math.log(Math.max(w4, M2)) / Math.LN2 - 8)),
      transposeInfo: b3.transposeInfo
    }) : void 0;
    return new m2({
      width: w4,
      height: M2,
      bandCount: b3.bandCount,
      extent: w.fromJSON(b3.extent),
      spatialReference: N3,
      pixelSize: new _({
        x: b3.pixelSizeX,
        y: b3.pixelSizeY,
        spatialReference: N3
      }),
      pixelType: b3.pixelType.toLowerCase(),
      statistics: R3,
      attributeTable: O2,
      colormap: C,
      histograms: z3,
      keyProperties: F3,
      noDataValue: E2,
      multidimensionalInfo: H,
      storageInfo: q2
    });
  });
}
function f7(e3, t3, a12) {
  return m7(e3, {
    sourceJSON: t3
  }, a12);
}
function p12(e3, t3, a12) {
  return m7(e3, {
    rasterFunction: t3
  }, a12);
}
function c10(e3, t3) {
  e3.attributeTable || (t3.hasRasterAttributeTable = false), e3.histograms || (t3.hasHistograms = false), e3.colormap || (t3.hasColormap = false), e3.multidimensionalInfo || (t3.hasMultidimensions = false);
}

export {
  l4 as l,
  d8 as d,
  c8 as c,
  a7 as a,
  i5 as i,
  n10 as n,
  N2 as N,
  j3 as j,
  c9 as c2,
  t2 as t,
  L,
  B2 as B,
  E,
  q,
  W2 as W,
  U2 as U,
  $,
  h6 as h,
  f7 as f,
  p12 as p,
  c10 as c3
};
//# sourceMappingURL=chunk-6562L2GA.js.map
