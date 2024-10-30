import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a4,
  p as p2
} from "./chunk-IR6CVPPC.js";
import {
  a as a5,
  i as i3,
  u as u3
} from "./chunk-BBUQOCRA.js";
import {
  m as m2,
  m2 as m3,
  m3 as m4,
  n as n5,
  p as p4
} from "./chunk-YBUJLIWZ.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  S as S2,
  p as p3
} from "./chunk-IUPJR3FF.js";
import {
  i as i4,
  y as y2
} from "./chunk-TGZW6QWO.js";
import {
  d,
  e as e3,
  n as n3,
  n2 as n4
} from "./chunk-OYIDHTXG.js";
import {
  u as u2
} from "./chunk-KUBMHTYA.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  n as n2,
  t
} from "./chunk-NXXQ35YM.js";
import {
  h2
} from "./chunk-I2TVVMQ6.js";
import {
  e as e2,
  o as o3
} from "./chunk-VYTPFEL2.js";
import {
  C as C2
} from "./chunk-7QV7DHWN.js";
import {
  f as f2,
  h,
  m,
  p
} from "./chunk-BXONKQKI.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s as s3
} from "./chunk-66YQWHHE.js";
import {
  i as i2
} from "./chunk-Y2HYKTTT.js";
import {
  K,
  N as N2,
  V as V2,
  Y,
  ot,
  st,
  tt
} from "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  C,
  v
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S,
  a
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  T,
  a3,
  s3 as s2,
  u3 as u
} from "./chunk-UDMPWVPF.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  a as a2,
  l2 as l,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/symbols/support/IconSymbol3DLayerResource.js
var l2;
var d2 = i2()({
  circle: "circle",
  square: "square",
  cross: "cross",
  x: "x",
  kite: "kite",
  triangle: "triangle"
});
var h3 = l2 = class extends f {
  constructor(r4) {
    super(r4);
  }
  readHref(r4, e10, o9) {
    return r4 ? p(r4, o9) : e10.dataURI;
  }
  writeHref(r4, e10, o9, c16) {
    r4 && (tt(r4) ? e10.dataURI = r4 : (e10.href = m(r4, c16), Y(e10.href) && (e10.href = K(e10.href))));
  }
  clone() {
    return new l2({
      href: this.href,
      primitive: this.primitive
    });
  }
};
e([y({
  type: String,
  json: {
    write: true,
    read: {
      source: ["href", "dataURI"]
    }
  }
})], h3.prototype, "href", void 0), e([o("href")], h3.prototype, "readHref", null), e([r("href", {
  href: {
    type: String
  },
  dataURI: {
    type: String
  }
})], h3.prototype, "writeHref", null), e([o2(d2)], h3.prototype, "primitive", void 0), h3 = l2 = e([a3("esri.symbols.support.IconSymbol3DLayerResource")], h3);
var j = "circle";

// ../../../node_modules/@arcgis/core/symbols/support/ObjectSymbol3DLayerResource.js
var m5;
var n6 = i2()({
  sphere: "sphere",
  cylinder: "cylinder",
  cube: "cube",
  cone: "cone",
  diamond: "diamond",
  tetrahedron: "tetrahedron",
  invertedCone: "inverted-cone"
});
var a6 = m5 = class extends f {
  clone() {
    return new m5({
      href: this.href,
      primitive: this.primitive
    });
  }
};
e([y({
  type: String,
  json: {
    read: f2,
    write: h
  }
})], a6.prototype, "href", void 0), e([o2(n6)], a6.prototype, "primitive", void 0), a6 = m5 = e([a3("esri.symbols.support.ObjectSymbol3DLayerResource")], a6);
var d3 = "sphere";

// ../../../node_modules/@arcgis/core/symbols/support/StyleOrigin.js
var p5;
var l3 = p5 = class extends S {
  constructor(t9) {
    super(t9), this.name = null, this.styleUrl = null, this.styleName = null, this.portal = null;
  }
  clone() {
    return new p5({
      name: this.name,
      styleUrl: this.styleUrl,
      styleName: this.styleName,
      portal: this.portal
    });
  }
};
e([y({
  type: String
})], l3.prototype, "name", void 0), e([y({
  type: String
})], l3.prototype, "styleUrl", void 0), e([y({
  type: String
})], l3.prototype, "styleName", void 0), e([y({
  type: C2
})], l3.prototype, "portal", void 0), l3 = p5 = e([a3("esri.symbols.support.StyleOrigin")], l3);
var i5 = l3;

// ../../../node_modules/@arcgis/core/symbols/support/Thumbnail.js
var e4;
var c = e4 = class extends S {
  constructor() {
    super(...arguments), this.url = "";
  }
  clone() {
    return new e4({
      url: this.url
    });
  }
};
e([y({
  type: String
})], c.prototype, "url", void 0), c = e4 = e([a3("esri.symbols.support.Thumbnail")], c);

// ../../../node_modules/@arcgis/core/symbols/support/urlUtils.js
function l4(r4, t9, a15) {
  return t9.imageData ? st({
    mediaType: t9.contentType || "image/png",
    isBase64: true,
    data: t9.imageData
  }) : o4(t9.url, a15);
}
function o4(e10, a15) {
  if (!Y(e10)) {
    const r4 = p6(a15);
    if (r4) return V2(r4, "images", e10);
  }
  return p(e10, a15);
}
function s4(e10, r4, t9, i10) {
  if (tt(e10)) {
    const a15 = ot(e10);
    if (!a15) return;
    r4.contentType = a15.mediaType, r4.imageData = a15.data, t9 && t9.imageData === r4.imageData && t9.url && h(t9.url, r4, "url", i10);
  } else h(e10, r4, "url", i10);
}
var m6 = {
  json: {
    read: {
      source: ["imageData", "url"],
      reader: l4
    },
    write: {
      writer(e10, r4, t9, a15) {
        s4(e10, r4, this.source, a15);
      }
    }
  }
};
var c2 = {
  readOnly: true,
  json: {
    read: {
      source: ["imageData", "url"],
      reader(e10, r4, t9) {
        const a15 = {};
        return r4.imageData && (a15.imageData = r4.imageData), r4.contentType && (a15.contentType = r4.contentType), r4.url && (a15.url = o4(r4.url, t9)), a15;
      }
    }
  }
};
function p6(e10) {
  if (!e10) return null;
  const {
    origin: r4,
    layer: t9
  } = e10;
  if ("service" !== r4 && "portal-item" !== r4) return null;
  const a15 = t9?.type;
  return "feature" === a15 || "stream" === a15 ? t9.parsedUrl?.path : "map-image" === a15 || "tile" === a15 ? e10.url?.path : null;
}

// ../../../node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js
var l5;
var a7 = l5 = class extends i4 {
  constructor(...r4) {
    super(...r4), this.color = null, this.type = "picture-marker", this.url = null, this.source = null, this.height = 12, this.width = 12, this.size = null;
  }
  normalizeCtorArgs(r4, t9, o9) {
    if (r4 && "string" != typeof r4 && null == r4.imageData) return r4;
    const s6 = {};
    return r4 && (s6.url = r4), null != t9 && (s6.width = o3(t9)), null != o9 && (s6.height = o3(o9)), s6;
  }
  readHeight(r4, t9) {
    return t9.size || r4;
  }
  readWidth(r4, t9) {
    return t9.size || r4;
  }
  clone() {
    const r4 = new l5({
      angle: this.angle,
      height: this.height,
      url: this.url,
      width: this.width,
      xoffset: this.xoffset,
      yoffset: this.yoffset
    });
    return r4._set("source", a2(this.source)), r4;
  }
  hash() {
    return `${super.hash()}.${this.height}.${this.url}.${this.width}`;
  }
};
e([y({
  json: {
    write: false
  }
})], a7.prototype, "color", void 0), e([o2({
  esriPMS: "picture-marker"
}, {
  readOnly: true
})], a7.prototype, "type", void 0), e([y(m6)], a7.prototype, "url", void 0), e([y(c2)], a7.prototype, "source", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], a7.prototype, "height", void 0), e([o("height", ["height", "size"])], a7.prototype, "readHeight", null), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], a7.prototype, "width", void 0), e([y({
  json: {
    write: false
  }
})], a7.prototype, "size", void 0), a7 = l5 = e([a3("esri.symbols.PictureMarkerSymbol")], a7);
var n7 = a7;

// ../../../node_modules/@arcgis/core/symbols/CIMSymbol.js
var n8;
var l6 = n8 = class extends n3 {
  constructor(r4) {
    super(r4), this.data = null, this.type = "cim";
  }
  readData(r4, o9) {
    return o9;
  }
  writeData(r4, o9) {
    Object.assign(o9, r4);
  }
  collectRequiredFields(r4, o9) {
    return __async(this, null, function* () {
      if ("CIMSymbolReference" === this.data?.type) {
        const t9 = this.data.primitiveOverrides;
        if (t9) {
          const e10 = t9.map((t10) => {
            const e11 = t10.valueExpressionInfo;
            return e11 ? h2(r4, o9, e11.expression) : null;
          });
          yield Promise.all(e10);
        }
      }
    });
  }
  clone() {
    return new n8({
      data: a2(this.data)
    });
  }
  hash() {
    return l(JSON.stringify(this.data)).toString();
  }
};
e([y({
  json: {
    write: false
  }
})], l6.prototype, "color", void 0), e([y({
  json: {
    write: true
  }
})], l6.prototype, "data", void 0), e([o("data", ["symbol"])], l6.prototype, "readData", null), e([r("data", {})], l6.prototype, "writeData", null), e([o2({
  CIMSymbolReference: "cim"
}, {
  readOnly: true
})], l6.prototype, "type", void 0), l6 = n8 = e([a3("esri.symbols.CIMSymbol")], l6);
var d4 = l6;

// ../../../node_modules/@arcgis/core/symbols/Symbol3DLayer.js
var p7 = class extends f {
  constructor(e10) {
    super(e10), this.enabled = true, this.type = null, this.ignoreDrivers = false;
  }
  writeEnabled(e10, r4, o9) {
    e10 || (r4[o9] = e10);
  }
};
e([y({
  type: Boolean,
  json: {
    read: {
      source: "enable"
    },
    write: {
      target: "enable"
    }
  }
})], p7.prototype, "enabled", void 0), e([r("enabled")], p7.prototype, "writeEnabled", null), e([y({
  type: ["icon", "object", "line", "path", "fill", "water", "extrude", "text"],
  readOnly: true
})], p7.prototype, "type", void 0), p7 = e([a3("esri.symbols.Symbol3DLayer")], p7);
var a8 = p7;

// ../../../node_modules/@arcgis/core/symbols/edges/Edges3D.js
var l7 = class extends f {
  constructor(o9) {
    super(o9), this.color = new u2([0, 0, 0, 1]), this.extensionLength = 0, this.size = e2(1);
  }
  clone() {
  }
  cloneProperties() {
    return {
      color: a2(this.color),
      size: this.size,
      extensionLength: this.extensionLength
    };
  }
};
e([y({
  type: ["solid", "sketch"],
  readOnly: true,
  json: {
    read: true,
    write: {
      ignoreOrigin: true
    }
  }
})], l7.prototype, "type", void 0), e([y(p2)], l7.prototype, "color", void 0), e([y(__spreadProps(__spreadValues({}, a4), {
  json: {
    write: {
      overridePolicy: (o9) => ({
        enabled: !!o9
      })
    }
  }
}))], l7.prototype, "extensionLength", void 0), e([y(a4)], l7.prototype, "size", void 0), l7 = e([a3("esri.symbols.edges.Edges3D")], l7);
var m7 = l7;

// ../../../node_modules/@arcgis/core/symbols/edges/SketchEdges3D.js
var t2;
var c3 = t2 = class extends m7 {
  constructor(r4) {
    super(r4), this.type = "sketch";
  }
  clone() {
    return new t2(this.cloneProperties());
  }
};
e([o2({
  sketch: "sketch"
}, {
  readOnly: true
})], c3.prototype, "type", void 0), c3 = t2 = e([a3("esri.symbols.edges.SketchEdges3D")], c3);
var p8 = c3;

// ../../../node_modules/@arcgis/core/symbols/edges/SolidEdges3D.js
var t3;
var c4 = t3 = class extends m7 {
  constructor(o9) {
    super(o9), this.type = "solid";
  }
  clone() {
    return new t3(this.cloneProperties());
  }
};
e([o2({
  solid: "solid"
}, {
  readOnly: true
})], c4.prototype, "type", void 0), c4 = t3 = e([a3("esri.symbols.edges.SolidEdges3D")], c4);
var i6 = c4;

// ../../../node_modules/@arcgis/core/symbols/edges/utils.js
var t4 = {
  types: {
    key: "type",
    base: m7,
    typeMap: {
      solid: i6,
      sketch: p8
    }
  },
  json: {
    write: true
  }
};

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DMaterial.js
var c5;
var l8 = c5 = class extends f {
  constructor(o9) {
    super(o9), this.color = null;
  }
  clone() {
    const o9 = {
      color: null != this.color ? this.color.clone() : null
    };
    return new c5(o9);
  }
};
e([y(p2)], l8.prototype, "color", void 0), l8 = c5 = e([a3("esri.symbols.support.Symbol3DMaterial")], l8);

// ../../../node_modules/@arcgis/core/symbols/ExtrudeSymbol3DLayer.js
var p9;
var l9 = p9 = class extends a8 {
  constructor(e10) {
    super(e10), this.type = "extrude", this.size = 1, this.material = null, this.castShadows = true, this.edges = null;
  }
  clone() {
    return new p9({
      edges: this.edges?.clone(),
      enabled: this.enabled,
      material: this.material?.clone(),
      castShadows: this.castShadows,
      size: this.size
    });
  }
};
e([o2({
  Extrude: "extrude"
}, {
  readOnly: true
})], l9.prototype, "type", void 0), e([y({
  type: Number,
  json: {
    write: {
      enabled: true,
      isRequired: true
    }
  },
  nonNullable: true
})], l9.prototype, "size", void 0), e([y({
  type: l8,
  json: {
    write: true
  }
})], l9.prototype, "material", void 0), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: true,
    default: true
  }
})], l9.prototype, "castShadows", void 0), e([y(t4)], l9.prototype, "edges", void 0), l9 = p9 = e([a3("esri.symbols.ExtrudeSymbol3DLayer")], l9);
var d5 = l9;

// ../../../node_modules/@arcgis/core/symbols/patterns/LinePattern3D.js
var t5 = class extends f {
  constructor(r4) {
    super(r4);
  }
  clone() {
    throw new Error("Subclasses of LinePattern3D should implement their own clone method.");
  }
};
e([y({
  type: ["style"],
  readOnly: true,
  json: {
    read: true,
    write: {
      ignoreOrigin: true
    }
  }
})], t5.prototype, "type", void 0), t5 = e([a3("esri.symbols.patterns.LinePattern3D")], t5);
var p10 = t5;

// ../../../node_modules/@arcgis/core/symbols/patterns/lineStyles.js
var o5 = ["dash", "dash-dot", "dot", "long-dash", "long-dash-dot", "long-dash-dot-dot", "none", "short-dash", "short-dash-dot", "short-dash-dot-dot", "short-dot", "solid"];

// ../../../node_modules/@arcgis/core/symbols/patterns/LineStylePattern3D.js
var p11;
var h4 = i2()({
  dash: "dash",
  "dash-dot": "dash-dot",
  "dash-dot-dot": "long-dash-dot-dot",
  dot: "dot",
  "long-dash": "long-dash",
  "long-dash-dot": "long-dash-dot",
  null: "none",
  "short-dash": "short-dash",
  "short-dash-dot": "short-dash-dot",
  "short-dash-dot-dot": "short-dash-dot-dot",
  "short-dot": "short-dot",
  solid: "solid"
});
var n9 = p11 = class extends p10 {
  constructor(o9) {
    super(o9), this.type = "style", this.style = "solid";
  }
  clone() {
    const o9 = {
      style: this.style
    };
    return new p11(o9);
  }
};
e([y({
  type: ["style"]
})], n9.prototype, "type", void 0), e([o2(h4), y({
  type: o5
})], n9.prototype, "style", void 0), n9 = p11 = e([a3("esri.symbols.patterns.LineStylePattern3D")], n9);
var l10 = n9;

// ../../../node_modules/@arcgis/core/symbols/patterns/Pattern3D.js
var t6 = class extends f {
  constructor(r4) {
    super(r4), this.type = "style";
  }
  clone() {
    throw new Error("Subclasses of Pattern3D should implement their own clone method.");
  }
};
e([y({
  type: ["style"],
  readOnly: true,
  json: {
    read: true,
    write: {
      ignoreOrigin: true
    }
  }
})], t6.prototype, "type", void 0), t6 = e([a3("esri.symbols.patterns.Pattern3D")], t6);
var p12 = t6;

// ../../../node_modules/@arcgis/core/symbols/patterns/styles.js
var a9 = ["backward-diagonal", "cross", "diagonal-cross", "forward-diagonal", "horizontal", "none", "solid", "vertical"];

// ../../../node_modules/@arcgis/core/symbols/patterns/StylePattern3D.js
var p13;
var c6 = p13 = class extends p12 {
  constructor(t9) {
    super(t9), this.type = "style", this.style = "solid";
  }
  clone() {
    return new p13({
      style: this.style
    });
  }
};
e([y({
  type: ["style"]
})], c6.prototype, "type", void 0), e([y({
  type: a9,
  json: {
    read: true,
    write: true
  }
})], c6.prototype, "style", void 0), c6 = p13 = e([a3("esri.symbols.patterns.StylePattern3D")], c6);
var i7 = c6;

// ../../../node_modules/@arcgis/core/symbols/patterns/utils.js
var s5 = {
  types: {
    key: "type",
    base: p12,
    typeMap: {
      style: i7
    }
  },
  json: {
    write: true
  }
};
var o6 = {
  types: {
    key: "type",
    base: p10,
    typeMap: {
      style: l10
    }
  },
  json: {
    write: true
  }
};

// ../../../node_modules/@arcgis/core/symbols/support/colors.js
var o7 = new u2("white");
var r2 = new u2("black");
var e5 = new u2([255, 255, 255, 0]);
function t7(n17) {
  return 0 === n17.r && 0 === n17.g && 0 === n17.b;
}

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DFillMaterial.js
var e6;
var l11 = e6 = class extends l8 {
  constructor(o9) {
    super(o9), this.colorMixMode = null;
  }
  clone() {
    const o9 = {
      color: null != this.color ? this.color.clone() : null,
      colorMixMode: this.colorMixMode
    };
    return new e6(o9);
  }
};
e([o2({
  multiply: "multiply",
  replace: "replace",
  tint: "tint"
})], l11.prototype, "colorMixMode", void 0), l11 = e6 = e([a3("esri.symbols.support.Symbol3DFillMaterial")], l11);

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DOutline.js
var c7;
var m8 = c7 = class extends f {
  constructor(t9) {
    super(t9), this.color = new u2([0, 0, 0, 1]), this.size = e2(1), this.pattern = null, this.patternCap = "butt";
  }
  clone() {
    const t9 = {
      color: null != this.color ? this.color.clone() : null,
      size: this.size,
      pattern: null != this.pattern ? this.pattern.clone() : null,
      patternCap: this.patternCap
    };
    return new c7(t9);
  }
};
e([y(p2)], m8.prototype, "color", void 0), e([y(a4)], m8.prototype, "size", void 0), e([y(o6)], m8.prototype, "pattern", void 0), e([y({
  type: i3,
  json: {
    default: "butt",
    write: {
      overridePolicy() {
        return {
          enabled: null != this.pattern
        };
      }
    }
  }
})], m8.prototype, "patternCap", void 0), m8 = c7 = e([a3("esri.symbols.support.Symbol3DOutline")], m8);

// ../../../node_modules/@arcgis/core/symbols/FillSymbol3DLayer.js
var y3;
var d6 = y3 = class extends a8 {
  constructor(t9) {
    super(t9), this.type = "fill", this.material = null, this.pattern = null, this.castShadows = true, this.outline = null, this.edges = null;
  }
  clone() {
    const t9 = {
      edges: null != this.edges ? this.edges.clone() : null,
      enabled: this.enabled,
      material: null != this.material ? this.material.clone() : null,
      pattern: null != this.pattern ? this.pattern.clone() : null,
      castShadows: this.castShadows,
      outline: null != this.outline ? this.outline.clone() : null
    };
    return new y3(t9);
  }
  static fromSimpleFillSymbol(t9) {
    const o9 = t9.outline && t9.outline.style && "solid" !== t9.outline.style ? new l10({
      style: t9.outline.style
    }) : null, e10 = {
      size: t9.outline?.width ?? 0,
      color: (t9.outline?.color ?? o7).clone(),
      pattern: o9
    };
    return o9 && t9.outline?.cap && (e10.patternCap = t9.outline.cap), new y3({
      material: new l11({
        color: (t9.color ?? e5).clone()
      }),
      pattern: t9.style && "solid" !== t9.style ? new i7({
        style: t9.style
      }) : null,
      outline: e10
    });
  }
};
e([o2({
  Fill: "fill"
}, {
  readOnly: true
})], d6.prototype, "type", void 0), e([y({
  type: l11,
  json: {
    write: true
  }
})], d6.prototype, "material", void 0), e([y(s5)], d6.prototype, "pattern", void 0), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: true,
    default: true
  }
})], d6.prototype, "castShadows", void 0), e([y({
  type: m8,
  json: {
    write: true
  }
})], d6.prototype, "outline", void 0), e([y(t4)], d6.prototype, "edges", void 0), d6 = y3 = e([a3("esri.symbols.FillSymbol3DLayer")], d6);
var h5 = d6;

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition2D.js
var e7;
var p14 = e7 = class extends S {
  constructor() {
    super(...arguments), this.x = 0, this.y = 0;
  }
  clone() {
    return new e7({
      x: this.x,
      y: this.y
    });
  }
};
e([y({
  type: Number
})], p14.prototype, "x", void 0), e([y({
  type: Number
})], p14.prototype, "y", void 0), p14 = e7 = e([a3("esri.symbols.support.Symbol3DAnchorPosition2D")], p14);

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DIconOutline.js
var l12;
var m9 = l12 = class extends f {
  constructor(o9) {
    super(o9), this.color = new u2([0, 0, 0, 1]), this.size = e2(1);
  }
  clone() {
    const o9 = {
      color: null != this.color ? this.color.clone() : null,
      size: this.size
    };
    return new l12(o9);
  }
};
e([y(p2)], m9.prototype, "color", void 0), e([y(a4)], m9.prototype, "size", void 0), m9 = l12 = e([a3("esri.symbols.support.Symbol3DIconOutline")], m9);

// ../../../node_modules/@arcgis/core/symbols/IconSymbol3DLayer.js
var f3;
var d7 = "esri.symbols.IconSymbol3DLayer";
var b = f3 = class extends a8 {
  constructor(o9) {
    super(o9), this.material = null, this.resource = null, this.type = "icon", this.size = 12, this.anchor = "center", this.anchorPosition = null, this.outline = null;
  }
  clone() {
    return new f3({
      anchor: this.anchor,
      anchorPosition: a2(this.anchorPosition),
      enabled: this.enabled,
      material: a2(this.material),
      outline: a2(this.outline),
      resource: a2(this.resource),
      size: this.size
    });
  }
  static fromSimpleMarkerSymbol(o9) {
    const t9 = o9.color || o7, r4 = g(o9), e10 = o9.outline && o9.outline.width > 0 ? {
      size: o9.outline.width,
      color: (o9.outline.color || o7).clone()
    } : null;
    return new f3({
      size: o9.size,
      resource: {
        primitive: S3(o9.style)
      },
      material: {
        color: t9
      },
      outline: e10,
      anchor: r4 ? "relative" : void 0,
      anchorPosition: r4
    });
  }
  static fromPictureMarkerSymbol(o9) {
    const t9 = !o9.color || t7(o9.color) ? o7 : o9.color, r4 = g(o9);
    return new f3({
      size: o9.width <= o9.height ? o9.height : o9.width,
      resource: {
        href: o9.url
      },
      material: {
        color: t9.clone()
      },
      anchor: r4 ? "relative" : void 0,
      anchorPosition: r4
    });
  }
  static fromCIMSymbol(o9) {
    return new f3({
      resource: {
        href: st({
          mediaType: "application/json",
          data: JSON.stringify(o9.data)
        })
      }
    });
  }
};
e([y({
  type: l8,
  json: {
    write: true
  }
})], b.prototype, "material", void 0), e([y({
  type: h3,
  json: {
    write: true
  }
})], b.prototype, "resource", void 0), e([o2({
  Icon: "icon"
}, {
  readOnly: true
})], b.prototype, "type", void 0), e([y(a4)], b.prototype, "size", void 0), e([o2({
  center: "center",
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
  topLeft: "top-left",
  topRight: "top-right",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  relative: "relative"
}), y({
  json: {
    default: "center"
  }
})], b.prototype, "anchor", void 0), e([y({
  type: p14,
  json: {
    type: [Number],
    read: {
      reader: (o9) => new p14({
        x: o9[0],
        y: o9[1]
      })
    },
    write: {
      writer: (o9, t9) => {
        t9.anchorPosition = [o9.x, o9.y];
      },
      overridePolicy() {
        return {
          enabled: "relative" === this.anchor
        };
      }
    }
  }
})], b.prototype, "anchorPosition", void 0), e([y({
  type: m9,
  json: {
    write: true
  }
})], b.prototype, "outline", void 0), b = f3 = e([a3(d7)], b);
var j2 = b;
function g(o9) {
  const t9 = "width" in o9 ? o9.width : o9.size, r4 = "height" in o9 ? o9.height : o9.size, e10 = v2(o9.xoffset), i10 = v2(o9.yoffset);
  return (e10 || i10) && t9 && r4 ? {
    x: -e10 / t9,
    y: i10 / r4
  } : null;
}
function v2(o9) {
  return isFinite(o9) ? o9 : 0;
}
var w = {
  circle: "circle",
  cross: "cross",
  diamond: "kite",
  square: "square",
  x: "x",
  triangle: "triangle",
  path: null
};
function S3(o9) {
  const t9 = w[o9];
  return t9 || (n.getLogger(d7).warn(`${o9} cannot be mapped to Icon symbol. Fallback to "circle"`), "circle");
}

// ../../../node_modules/@arcgis/core/symbols/LineStyleMarker3D.js
var n10 = class extends i(f) {
  constructor(o9) {
    super(o9), this.type = "style", this.placement = "begin-end", this.style = "arrow", this.color = null;
  }
  equals(o9) {
    return null != o9 && o9.placement === this.placement && o9.style === this.style && (null == this.color && null == o9.color || null != this.color && null != o9.color && this.color.toJSON() === o9.color.toJSON());
  }
};
e([y({
  type: ["style"],
  readOnly: true,
  json: {
    read: true,
    write: {
      ignoreOrigin: true
    }
  }
})], n10.prototype, "type", void 0), e([y({
  type: e3,
  json: {
    default: "begin-end",
    write: true
  }
})], n10.prototype, "placement", void 0), e([y({
  type: n4,
  json: {
    default: "arrow",
    write: true
  }
})], n10.prototype, "style", void 0), e([y({
  type: u2,
  json: {
    type: [N],
    default: null,
    write: true
  }
})], n10.prototype, "color", void 0), n10 = e([a3("esri.symbols.LineStyleMarker3D")], n10);
var a10 = n10;

// ../../../node_modules/@arcgis/core/symbols/LineSymbol3DLayer.js
var j3;
var d8 = j3 = class extends a8 {
  constructor(t9) {
    super(t9), this.material = null, this.type = "line", this.join = "miter", this.cap = "butt", this.size = e2(1), this.pattern = null, this.marker = null;
  }
  clone() {
    const t9 = {
      enabled: this.enabled,
      material: null != this.material ? this.material.clone() : null,
      size: this.size,
      join: this.join,
      cap: this.cap,
      pattern: null != this.pattern ? this.pattern.clone() : null,
      marker: null != this.marker ? this.marker.clone() : null
    };
    return new j3(t9);
  }
  static fromSimpleLineSymbol(t9) {
    const e10 = {
      enabled: true,
      size: t9.width ?? e2(1),
      cap: t9.cap || "butt",
      join: t9.join || "miter",
      pattern: t9.style ? new l10({
        style: t9.style
      }) : null,
      material: new l8({
        color: (t9.color || o7).clone()
      }),
      marker: t9.marker ? new a10({
        placement: t9.marker.placement,
        style: t9.marker.style,
        color: t9.marker.color?.clone() ?? null
      }) : null
    };
    return new j3(e10);
  }
};
e([y({
  type: l8,
  json: {
    write: true
  }
})], d8.prototype, "material", void 0), e([o2({
  Line: "line"
}, {
  readOnly: true
})], d8.prototype, "type", void 0), e([y({
  type: a5,
  json: {
    write: true,
    default: "miter"
  }
})], d8.prototype, "join", void 0), e([y({
  type: i3,
  json: {
    write: true,
    default: "butt"
  }
})], d8.prototype, "cap", void 0), e([y(a4)], d8.prototype, "size", void 0), e([y(o6)], d8.prototype, "pattern", void 0), e([y({
  types: {
    key: "type",
    base: a10,
    typeMap: {
      style: a10
    }
  },
  json: {
    write: true
  }
})], d8.prototype, "marker", void 0), d8 = j3 = e([a3("esri.symbols.LineSymbol3DLayer")], d8);
var h6 = d8;

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition3D.js
var e8;
var p15 = e8 = class extends S {
  constructor() {
    super(...arguments), this.x = 0, this.y = 0, this.z = 0;
  }
  clone() {
    return new e8({
      x: this.x,
      y: this.y,
      z: this.z
    });
  }
};
e([y({
  type: Number
})], p15.prototype, "x", void 0), e([y({
  type: Number
})], p15.prototype, "y", void 0), e([y({
  type: Number
})], p15.prototype, "z", void 0), p15 = e8 = e([a3("esri.symbols.support.Symbol3DAnchorPosition3D")], p15);

// ../../../node_modules/@arcgis/core/symbols/ObjectSymbol3DLayer.js
var h7;
var a11 = h7 = class extends a8 {
  constructor(o9) {
    super(o9), this.material = null, this.castShadows = true, this.resource = null, this.type = "object", this.width = void 0, this.height = void 0, this.depth = void 0, this.anchor = void 0, this.anchorPosition = void 0, this.heading = void 0, this.tilt = void 0, this.roll = void 0;
  }
  clone() {
    return new h7({
      heading: this.heading,
      tilt: this.tilt,
      roll: this.roll,
      anchor: this.anchor,
      anchorPosition: this.anchorPosition?.clone(),
      depth: this.depth,
      enabled: this.enabled,
      height: this.height,
      material: this.material?.clone() ?? null,
      castShadows: this.castShadows,
      resource: this.resource?.clone(),
      width: this.width
    });
  }
  get isPrimitive() {
    return !this.resource || "string" != typeof this.resource.href;
  }
};
e([y({
  type: l8,
  json: {
    write: true
  }
})], a11.prototype, "material", void 0), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: true,
    default: true
  }
})], a11.prototype, "castShadows", void 0), e([y({
  type: a6,
  json: {
    write: true
  }
})], a11.prototype, "resource", void 0), e([o2({
  Object: "object"
}, {
  readOnly: true
})], a11.prototype, "type", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a11.prototype, "width", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a11.prototype, "height", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a11.prototype, "depth", void 0), e([o2({
  center: "center",
  top: "top",
  bottom: "bottom",
  origin: "origin",
  relative: "relative"
}), y({
  json: {
    default: "origin"
  }
})], a11.prototype, "anchor", void 0), e([y({
  type: p15,
  json: {
    type: [Number],
    read: {
      reader: (o9) => new p15({
        x: o9[0],
        y: o9[1],
        z: o9[2]
      })
    },
    write: {
      writer: (o9, t9) => {
        t9.anchorPosition = [o9.x, o9.y, o9.z];
      },
      overridePolicy() {
        return {
          enabled: "relative" === this.anchor
        };
      }
    }
  }
})], a11.prototype, "anchorPosition", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a11.prototype, "heading", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a11.prototype, "tilt", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a11.prototype, "roll", void 0), e([y({
  readOnly: true
})], a11.prototype, "isPrimitive", null), a11 = h7 = e([a3("esri.symbols.ObjectSymbol3DLayer")], a11);
var c8 = a11;

// ../../../node_modules/@arcgis/core/symbols/PathSymbol3DLayer.js
var h8;
var n11 = h8 = class extends a8 {
  constructor(t9) {
    super(t9), this.material = null, this.castShadows = true, this.type = "path", this.profile = "circle", this.join = "miter", this.cap = "butt", this.width = void 0, this.height = void 0, this.anchor = "center", this.profileRotation = "all";
  }
  readWidth(t9, o9) {
    return null != t9 ? t9 : null == o9.height && null != o9.size ? o9.size : void 0;
  }
  readHeight(t9, o9) {
    return null != t9 ? t9 : null == o9.width && null != o9.size ? o9.size : void 0;
  }
  clone() {
    return new h8({
      enabled: this.enabled,
      material: null != this.material ? this.material.clone() : null,
      castShadows: this.castShadows,
      profile: this.profile,
      join: this.join,
      cap: this.cap,
      width: this.width,
      height: this.height,
      profileRotation: this.profileRotation,
      anchor: this.anchor
    });
  }
};
e([y({
  type: l8,
  json: {
    write: true
  }
})], n11.prototype, "material", void 0), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: true,
    default: true
  }
})], n11.prototype, "castShadows", void 0), e([o2({
  Path: "path"
}, {
  readOnly: true
})], n11.prototype, "type", void 0), e([y({
  type: ["circle", "quad"],
  json: {
    write: true,
    default: "circle"
  }
})], n11.prototype, "profile", void 0), e([y({
  type: a5,
  json: {
    write: true,
    default: "miter"
  }
})], n11.prototype, "join", void 0), e([y({
  type: u3,
  json: {
    write: true,
    default: "butt"
  }
})], n11.prototype, "cap", void 0), e([y({
  type: Number,
  json: {
    write: {
      enabled: true,
      target: {
        width: {
          type: Number
        },
        size: {
          type: Number
        }
      }
    }
  }
})], n11.prototype, "width", void 0), e([o("width", ["width", "size", "height"])], n11.prototype, "readWidth", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], n11.prototype, "height", void 0), e([o("height", ["height", "size", "width"])], n11.prototype, "readHeight", null), e([y({
  type: ["center", "bottom", "top"],
  json: {
    write: true,
    default: "center"
  }
})], n11.prototype, "anchor", void 0), e([y({
  type: ["heading", "all"],
  json: {
    write: true,
    default: "all"
  }
})], n11.prototype, "profileRotation", void 0), n11 = h8 = e([a3("esri.symbols.PathSymbol3DLayer")], n11);
var d9 = n11;

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DHalo.js
var m10;
var l13 = m10 = class extends f {
  constructor() {
    super(...arguments), this.color = new u2([0, 0, 0, 1]), this.size = 0;
  }
  clone() {
    const o9 = {
      color: a2(this.color),
      size: this.size
    };
    return new m10(o9);
  }
};
e([y(p2)], l13.prototype, "color", void 0), e([y(a4)], l13.prototype, "size", void 0), l13 = m10 = e([a3("esri.symbols.support.Symbol3DHalo")], l13);

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DTextBackground.js
var c9 = class extends i(f) {
  constructor(o9) {
    super(o9), this.color = null;
  }
};
e([y(p2)], c9.prototype, "color", void 0), c9 = e([a3("esri.symbols.support.Symbol3DTextBackground")], c9);

// ../../../node_modules/@arcgis/core/symbols/TextSymbol3DLayer.js
var g2;
var y4 = g2 = class extends a8 {
  constructor(t9) {
    super(t9), this._userSize = void 0, this.halo = null, this.horizontalAlignment = "center", this.lineHeight = 1, this.material = null, this.background = null, this.text = null, this.type = "text", this.verticalAlignment = "baseline";
  }
  get font() {
    return this._get("font") || null;
  }
  set font(t9) {
    null != t9 && null != this._userSize && (t9.size = this._userSize), this._set("font", t9);
  }
  writeFont(t9, o9, e10, r4) {
    const i10 = __spreadProps(__spreadValues({}, r4), {
      textSymbol3D: true
    });
    o9.font = t9.write({}, i10), delete o9.font.size;
  }
  get size() {
    return null != this._userSize ? this._userSize : null != this.font?.size ? this.font.size : 9;
  }
  set size(t9) {
    this._userSize = t9, null != this.font && (this.font.size = this._userSize), this.notifyChange("size");
  }
  clone() {
    const t9 = new g2({
      enabled: this.enabled,
      font: this.font && a2(this.font),
      halo: this.halo && a2(this.halo),
      horizontalAlignment: this.horizontalAlignment,
      lineHeight: this.lineHeight,
      material: null != this.material ? this.material.clone() : null,
      text: this.text,
      verticalAlignment: this.verticalAlignment,
      background: a2(this.background)
    });
    return t9._userSize = this._userSize, t9;
  }
  static fromTextSymbol(t9) {
    return new g2({
      font: null != t9.font ? t9.font.clone() : new m3(),
      halo: d10(t9.haloColor, t9.haloSize),
      horizontalAlignment: t9.horizontalAlignment,
      lineHeight: t9.lineHeight,
      material: t9.color ? new l8({
        color: t9.color.clone()
      }) : null,
      text: t9.text,
      verticalAlignment: t9.verticalAlignment,
      background: t9.backgroundColor ? new c9({
        color: t9.backgroundColor.clone()
      }) : null
    });
  }
};
function d10(t9, e10) {
  return t9 && null != e10 && e10 > 0 ? new l13({
    color: a2(t9),
    size: e10
  }) : null;
}
e([y({
  type: m3,
  json: {
    write: true
  }
})], y4.prototype, "font", null), e([r("font")], y4.prototype, "writeFont", null), e([y({
  type: l13,
  json: {
    write: true
  }
})], y4.prototype, "halo", void 0), e([y(__spreadProps(__spreadValues({}, m2), {
  json: {
    default: "center",
    write: true
  }
}))], y4.prototype, "horizontalAlignment", void 0), e([y(__spreadProps(__spreadValues({}, n5), {
  json: {
    default: 1,
    write: true
  }
}))], y4.prototype, "lineHeight", void 0), e([y({
  type: l8,
  json: {
    write: true
  }
})], y4.prototype, "material", void 0), e([y({
  type: c9,
  json: {
    write: true
  }
})], y4.prototype, "background", void 0), e([y(a4)], y4.prototype, "size", null), e([y({
  type: String,
  json: {
    write: true
  }
})], y4.prototype, "text", void 0), e([o2({
  Text: "text"
}, {
  readOnly: true
})], y4.prototype, "type", void 0), e([y(__spreadProps(__spreadValues({}, p4), {
  json: {
    default: "baseline",
    write: true
  }
}))], y4.prototype, "verticalAlignment", void 0), y4 = g2 = e([a3("esri.symbols.TextSymbol3DLayer")], y4);
var z = y4;

// ../../../node_modules/@arcgis/core/symbols/WaterSymbol3DLayer.js
var l14;
var c10 = l14 = class extends a8 {
  constructor(e10) {
    super(e10), this.color = n12.clone(), this.type = "water", this.waterbodySize = "medium", this.waveDirection = null, this.waveStrength = "moderate";
  }
  clone() {
    return new l14({
      color: a2(this.color),
      waterbodySize: this.waterbodySize,
      waveDirection: this.waveDirection,
      waveStrength: this.waveStrength
    });
  }
};
e([y({
  type: u2,
  nonNullable: true,
  json: {
    type: [N],
    write: (e10, r4, t9) => r4[t9] = e10.toArray(u2.AlphaMode.UNLESS_OPAQUE),
    default: () => n12.clone(),
    defaultEquals: (e10) => e10.toCss(true) === n12.toCss(true)
  }
})], c10.prototype, "color", void 0), e([o2({
  Water: "water"
}, {
  readOnly: true
})], c10.prototype, "type", void 0), e([y({
  type: ["small", "medium", "large"],
  json: {
    write: true,
    default: "medium"
  }
})], c10.prototype, "waterbodySize", void 0), e([y({
  type: Number,
  json: {
    write: true,
    default: null
  }
})], c10.prototype, "waveDirection", void 0), e([y({
  type: ["calm", "rippled", "slight", "moderate"],
  json: {
    write: true,
    default: "moderate"
  }
})], c10.prototype, "waveStrength", void 0), c10 = l14 = e([a3("esri.symbols.WaterSymbol3DLayer")], c10);
var m11 = c10;
var n12 = new u2([0, 119, 190]);

// ../../../node_modules/@arcgis/core/symbols/Symbol3D.js
var v3 = {
  icon: j2,
  object: c8,
  line: h6,
  path: d9,
  fill: h5,
  extrude: d5,
  text: z,
  water: m11
};
var C3 = V.ofType({
  base: a8,
  key: "type",
  typeMap: v3,
  errorContext: "symbol-layer"
});
var T2 = class extends n3 {
  constructor(e10) {
    super(e10), this.styleOrigin = null, this.thumbnail = null, this.type = null;
    const t9 = this.__accessor__ && this.__accessor__.metadata && this.__accessor__.metadata.symbolLayers, o9 = t9?.type, s6 = o9 || V;
    this._set("symbolLayers", new s6());
  }
  get color() {
    return null;
  }
  set color(e10) {
    this.constructed && n.getLogger(this).error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");
  }
  set symbolLayers(e10) {
    n2(e10, this._get("symbolLayers"));
  }
  readStyleOrigin(e10, r4, t9) {
    if (e10.styleUrl && e10.name) {
      const r5 = p(e10.styleUrl, t9);
      return new i5({
        styleUrl: r5,
        name: e10.name
      });
    }
    if (e10.styleName && e10.name) return new i5({
      portal: t9?.portal || C2.getDefault(),
      styleName: e10.styleName,
      name: e10.name
    });
    t9?.messages && t9.messages.push(new s2("symbol3d:incomplete-style-origin", "Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property", {
      context: t9,
      definition: e10
    }));
  }
  writeStyleOrigin(e10, r4, t9, o9) {
    if (e10.styleUrl && e10.name) {
      let t10 = m(e10.styleUrl, o9);
      Y(t10) && (t10 = K(t10)), r4.styleOrigin = {
        styleUrl: t10,
        name: e10.name
      };
    } else e10.styleName && e10.name && (e10.portal && o9?.portal && !N2(e10.portal.restUrl, o9.portal.restUrl) ? o9?.messages && o9.messages.push(new s2("symbol:cross-portal", "The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.", {
      symbol: this
    })) : r4.styleOrigin = {
      styleName: e10.styleName,
      name: e10.name
    });
  }
  normalizeCtorArgs(e10) {
    return e10 instanceof a8 || e10 && v3[e10.type] ? {
      symbolLayers: [e10]
    } : Array.isArray(e10) ? {
      symbolLayers: e10
    } : e10;
  }
};
e([y({
  json: {
    read: false,
    write: false
  }
})], T2.prototype, "color", null), e([y({
  type: C3,
  nonNullable: true,
  json: {
    write: true
  }
}), s3(t)], T2.prototype, "symbolLayers", null), e([y({
  type: i5
})], T2.prototype, "styleOrigin", void 0), e([o("styleOrigin")], T2.prototype, "readStyleOrigin", null), e([r("styleOrigin", {
  "styleOrigin.styleUrl": {
    type: String
  },
  "styleOrigin.styleName": {
    type: String
  },
  "styleOrigin.name": {
    type: String
  }
})], T2.prototype, "writeStyleOrigin", null), e([y({
  type: c,
  json: {
    read: false
  }
})], T2.prototype, "thumbnail", void 0), e([y({
  type: ["point-3d", "line-3d", "polygon-3d", "mesh-3d", "label-3d"],
  readOnly: true
})], T2.prototype, "type", void 0), T2 = e([a3("esri.symbols.Symbol3D")], T2);
var k = T2;

// ../../../node_modules/@arcgis/core/symbols/callouts/Callout3D.js
var t8 = class extends f {
  constructor(o9) {
    super(o9), this.visible = true;
  }
  clone() {
    throw new Error("Subclasses of Callout3D should implement their own clone method.");
  }
};
e([y({
  type: ["line"],
  constructOnly: true,
  json: {
    read: false,
    write: {
      ignoreOrigin: true
    }
  }
})], t8.prototype, "type", void 0), e([y({
  readOnly: true
})], t8.prototype, "visible", void 0), t8 = e([a3("esri.symbols.callouts.Callout3D")], t8);
var c11 = t8;

// ../../../node_modules/@arcgis/core/symbols/callouts/LineCallout3DBorder.js
var l15;
var i8 = l15 = class extends f {
  constructor(o9) {
    super(o9), this.color = new u2("white");
  }
  clone() {
    return new l15({
      color: a2(this.color)
    });
  }
};
e([y(p2)], i8.prototype, "color", void 0), i8 = l15 = e([a3("esri.symbols.callouts.LineCallout3DBorder")], i8);
var m12 = i8;

// ../../../node_modules/@arcgis/core/symbols/callouts/LineCallout3D.js
var n13;
var u4 = n13 = class extends c11 {
  constructor(o9) {
    super(o9), this.type = "line", this.color = new u2([0, 0, 0, 1]), this.size = e2(1), this.border = null;
  }
  get visible() {
    return this.size > 0 && null != this.color && this.color.a > 0;
  }
  clone() {
    return new n13({
      color: a2(this.color),
      size: this.size,
      border: a2(this.border)
    });
  }
};
e([o2({
  line: "line"
})], u4.prototype, "type", void 0), e([y(p2)], u4.prototype, "color", void 0), e([y(a4)], u4.prototype, "size", void 0), e([y({
  type: m12,
  json: {
    write: true
  }
})], u4.prototype, "border", void 0), e([y({
  readOnly: true
})], u4.prototype, "visible", null), u4 = n13 = e([a3("esri.symbols.callouts.LineCallout3D")], u4);
var d11 = u4;

// ../../../node_modules/@arcgis/core/symbols/callouts/calloutUtils.js
function e9(t9) {
  if (!t9) return false;
  const n17 = t9.verticalOffset;
  return !!n17 && !(n17.screenLength <= 0 || null != n17.maxWorldLength && n17.maxWorldLength <= 0);
}
function r3(t9) {
  if (!t9) return false;
  if (!t9.supportsCallout || !t9.supportsCallout()) return false;
  const n17 = t9.callout;
  return !!n17 && !!n17.visible && !!e9(t9);
}
function o8(t9) {
  return "point-3d" === t9.type || "label-3d" === t9.type;
}
function l16(t9) {
  return "center" === t9.horizontalAlignment;
}
var u5 = {
  types: {
    key: "type",
    base: c11,
    typeMap: {
      line: d11
    }
  },
  json: {
    write: true
  }
};

// ../../../node_modules/@arcgis/core/symbols/support/Symbol3DVerticalOffset.js
var n14;
var i9 = n14 = class extends f {
  constructor(r4) {
    super(r4), this.screenLength = 0, this.minWorldLength = 0, this.maxWorldLength = null;
  }
  clone() {
    return new n14({
      screenLength: this.screenLength,
      minWorldLength: this.minWorldLength,
      maxWorldLength: this.maxWorldLength
    });
  }
};
e([y(a4)], i9.prototype, "screenLength", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true,
    default: 0
  }
})], i9.prototype, "minWorldLength", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], i9.prototype, "maxWorldLength", void 0), i9 = n14 = e([a3("esri.symbols.support.Symbol3DVerticalOffset")], i9);
var p16 = i9;

// ../../../node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var n15;
var u6 = V.ofType({
  base: null,
  key: "type",
  typeMap: {
    text: z
  }
});
var f4 = n15 = class extends k {
  constructor(t9) {
    super(t9), this.verticalOffset = null, this.callout = null, this.styleOrigin = null, this.symbolLayers = new u6(), this.type = "label-3d";
  }
  supportsCallout() {
    return true;
  }
  hasVisibleCallout() {
    return r3(this);
  }
  hasVisibleVerticalOffset() {
    return e9(this);
  }
  clone() {
    return new n15({
      styleOrigin: a2(this.styleOrigin),
      symbolLayers: a2(this.symbolLayers),
      thumbnail: a2(this.thumbnail),
      callout: a2(this.callout),
      verticalOffset: a2(this.verticalOffset)
    });
  }
  static fromTextSymbol(t9) {
    return new n15({
      symbolLayers: new V([z.fromTextSymbol(t9)])
    });
  }
};
e([y({
  type: p16,
  json: {
    write: true
  }
})], f4.prototype, "verticalOffset", void 0), e([y(u5)], f4.prototype, "callout", void 0), e([y({
  json: {
    read: false,
    write: false
  }
})], f4.prototype, "styleOrigin", void 0), e([y({
  type: u6
})], f4.prototype, "symbolLayers", void 0), e([o2({
  LabelSymbol3D: "label-3d"
}, {
  readOnly: true
})], f4.prototype, "type", void 0), f4 = n15 = e([a3("esri.symbols.LabelSymbol3D")], f4);
var b2 = f4;

// ../../../node_modules/@arcgis/core/symbols/LineSymbol3D.js
var l17;
var a12 = V.ofType({
  base: null,
  key: "type",
  typeMap: {
    line: h6,
    path: d9
  }
});
var n16 = V.ofType({
  base: null,
  key: "type",
  typeMap: {
    line: h6,
    path: d9
  }
});
var c12 = l17 = class extends k {
  constructor(o9) {
    super(o9), this.symbolLayers = new a12(), this.type = "line-3d";
  }
  clone() {
    return new l17({
      styleOrigin: a2(this.styleOrigin),
      symbolLayers: a2(this.symbolLayers),
      thumbnail: a2(this.thumbnail)
    });
  }
  static fromSimpleLineSymbol(o9) {
    return new l17({
      symbolLayers: new V([h6.fromSimpleLineSymbol(o9)])
    });
  }
};
e([y({
  type: a12,
  json: {
    type: n16
  }
})], c12.prototype, "symbolLayers", void 0), e([o2({
  LineSymbol3D: "line-3d"
}, {
  readOnly: true
})], c12.prototype, "type", void 0), c12 = l17 = e([a3("esri.symbols.LineSymbol3D")], c12);
var b3 = c12;

// ../../../node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var p17;
var y5 = V.ofType({
  base: null,
  key: "type",
  typeMap: {
    fill: h5
  }
});
var a13 = p17 = class extends k {
  constructor(o9) {
    super(o9), this.symbolLayers = new y5(), this.type = "mesh-3d";
  }
  clone() {
    return new p17({
      styleOrigin: a2(this.styleOrigin),
      symbolLayers: a2(this.symbolLayers),
      thumbnail: a2(this.thumbnail)
    });
  }
  static fromSimpleFillSymbol(o9) {
    return new p17({
      symbolLayers: new V([h5.fromSimpleFillSymbol(o9)])
    });
  }
};
e([y({
  type: y5
})], a13.prototype, "symbolLayers", void 0), e([o2({
  MeshSymbol3D: "mesh-3d"
}, {
  readOnly: true
})], a13.prototype, "type", void 0), a13 = p17 = e([a3("esri.symbols.MeshSymbol3D")], a13);
var c13 = a13;

// ../../../node_modules/@arcgis/core/symbols/PictureFillSymbol.js
var c14;
var u7 = c14 = class extends p3 {
  constructor(...t9) {
    super(...t9), this.type = "picture-fill", this.url = null, this.xscale = 1, this.yscale = 1, this.width = 12, this.height = 12, this.xoffset = 0, this.yoffset = 0, this.source = null;
  }
  normalizeCtorArgs(t9, s6, e10, r4) {
    if (t9 && "string" != typeof t9 && null == t9.imageData) return t9;
    const i10 = {};
    return t9 && (i10.url = t9), s6 && (i10.outline = s6), null != e10 && (i10.width = o3(e10)), null != r4 && (i10.height = o3(r4)), i10;
  }
  clone() {
    const t9 = new c14({
      color: a2(this.color),
      height: this.height,
      outline: a2(this.outline),
      url: this.url,
      width: this.width,
      xoffset: this.xoffset,
      xscale: this.xscale,
      yoffset: this.yoffset,
      yscale: this.yscale
    });
    return t9._set("source", a2(this.source)), t9;
  }
  hash() {
    return `${super.hash()}.${this.color?.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`;
  }
};
e([o2({
  esriPFS: "picture-fill"
}, {
  readOnly: true
})], u7.prototype, "type", void 0), e([y(m6)], u7.prototype, "url", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], u7.prototype, "xscale", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], u7.prototype, "yscale", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], u7.prototype, "width", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], u7.prototype, "height", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], u7.prototype, "xoffset", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], u7.prototype, "yoffset", void 0), e([y(c2)], u7.prototype, "source", void 0), u7 = c14 = e([a3("esri.symbols.PictureFillSymbol")], u7);
var a14 = u7;

// ../../../node_modules/@arcgis/core/symbols/PointSymbol3D.js
var h9;
var S4 = V.ofType({
  base: null,
  key: "type",
  typeMap: {
    icon: j2,
    object: c8,
    text: z
  }
});
var j4 = h9 = class extends k {
  constructor(o9) {
    super(o9), this.verticalOffset = null, this.callout = null, this.symbolLayers = new S4(), this.type = "point-3d";
  }
  supportsCallout() {
    if ((this.symbolLayers ? this.symbolLayers.length : 0) < 1) return false;
    for (const o9 of this.symbolLayers.items) switch (o9.type) {
      case "icon":
      case "text":
      case "object":
        continue;
      default:
        return false;
    }
    return true;
  }
  hasVisibleCallout() {
    return r3(this);
  }
  hasVisibleVerticalOffset() {
    return e9(this);
  }
  clone() {
    return new h9({
      verticalOffset: a2(this.verticalOffset),
      callout: a2(this.callout),
      styleOrigin: a2(this.styleOrigin),
      symbolLayers: a2(this.symbolLayers),
      thumbnail: a2(this.thumbnail)
    });
  }
  static fromSimpleMarkerSymbol(o9) {
    return new h9({
      symbolLayers: new V([j2.fromSimpleMarkerSymbol(o9)])
    });
  }
  static fromPictureMarkerSymbol(o9) {
    return new h9({
      symbolLayers: new V([j2.fromPictureMarkerSymbol(o9)])
    });
  }
  static fromCIMSymbol(o9) {
    const e10 = o9.data?.symbol?.type;
    if ("CIMPointSymbol" !== e10) return null;
    const s6 = o9.data.symbol;
    return new h9(s6?.callout ? {
      symbolLayers: new V([j2.fromCIMSymbol(o9)]),
      callout: new d11({
        size: 0.5,
        color: new u2([0, 0, 0])
      }),
      verticalOffset: new p16({
        screenLength: 40
      })
    } : {
      symbolLayers: new V([j2.fromCIMSymbol(o9)])
    });
  }
  static fromTextSymbol(o9) {
    return new h9({
      symbolLayers: new V([z.fromTextSymbol(o9)])
    });
  }
};
e([y({
  type: p16,
  json: {
    write: true
  }
})], j4.prototype, "verticalOffset", void 0), e([y(u5)], j4.prototype, "callout", void 0), e([y({
  type: S4,
  json: {
    origins: {
      "web-scene": {
        write: true
      }
    }
  }
})], j4.prototype, "symbolLayers", void 0), e([o2({
  PointSymbol3D: "point-3d"
}, {
  readOnly: true
})], j4.prototype, "type", void 0), j4 = h9 = e([a3("esri.symbols.PointSymbol3D")], j4);
var w2 = j4;

// ../../../node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var u8;
var j5 = V.ofType({
  base: null,
  key: "type",
  typeMap: {
    extrude: d5,
    fill: h5,
    icon: j2,
    line: h6,
    object: c8,
    text: z,
    water: m11
  }
});
var g3 = u8 = class extends k {
  constructor(o9) {
    super(o9), this.symbolLayers = new j5(), this.type = "polygon-3d";
  }
  initialize() {
    const o9 = (o10) => {
      "line" === o10.type && a(n.getLogger(this), "LineSymbol3DLayer can not be used as a SymbolLayer with a PolygonSymbol3D symbol anymore.", {
        replacement: "Use FillSymbol3DLayer.outline instead.",
        version: "4.28"
      }), "text" === o10.type && a(n.getLogger(this), "TextSymbol3DLayer can not be used as a SymbolLayer with a PolygonSymbol3D symbol anymore.", {
        replacement: "Use Labels instead.",
        version: "4.28"
      });
    };
    for (const e10 of this.symbolLayers) o9(e10);
    this.addHandles(v(() => this.symbolLayers, "after-add", ({
      item: e10
    }) => o9(e10), C));
  }
  clone() {
    return new u8({
      styleOrigin: a2(this.styleOrigin),
      symbolLayers: a2(this.symbolLayers),
      thumbnail: a2(this.thumbnail)
    });
  }
  static fromJSON(o9) {
    const e10 = new u8();
    if (e10.read(o9), 2 === e10.symbolLayers.length && "fill" === e10.symbolLayers.at(0).type && "line" === e10.symbolLayers.at(1).type) {
      const r4 = e10.symbolLayers.at(0), s6 = e10.symbolLayers.at(1);
      !s6.enabled || o9.symbolLayers?.[1] && false === o9.symbolLayers[1].enable || (r4.outline = {
        size: s6.size,
        color: null != s6.material ? s6.material.color : null
      }), e10.symbolLayers.removeAt(1);
    }
    return e10;
  }
  static fromSimpleFillSymbol(o9) {
    return new u8({
      symbolLayers: new V([h5.fromSimpleFillSymbol(o9)])
    });
  }
};
e([y({
  type: j5,
  json: {
    write: true
  }
})], g3.prototype, "symbolLayers", void 0), e([o2({
  PolygonSymbol3D: "polygon-3d"
}, {
  readOnly: true
})], g3.prototype, "type", void 0), g3 = u8 = e([a3("esri.symbols.PolygonSymbol3D")], g3);
var h10 = g3;

// ../../../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var c15;
var y6 = c15 = class extends n3 {
  constructor(t9) {
    super(t9), this.color = null, this.styleName = null, this.portal = null, this.styleUrl = null, this.thumbnail = null, this.name = null, this.type = "web-style";
  }
  get _fetchCacheKey() {
    const t9 = null != this.portal ? this.portal : C2.getDefault(), e10 = t9.user ? t9.user.username : null;
    return `${this.styleName}:${this.styleUrl}:${this.name}:${e10}:${t9.url}`;
  }
  read(t9, e10) {
    this.portal = e10?.portal, super.read(t9, e10);
  }
  clone() {
    return new c15({
      name: this.name,
      styleUrl: this.styleUrl,
      styleName: this.styleName,
      portal: this.portal
    });
  }
  fetchSymbol(t9) {
    return this._fetchSymbol("webRef", t9);
  }
  fetchCIMSymbol(t9) {
    return this._fetchSymbol("cimRef", t9);
  }
  _fetchSymbol(t9, r4) {
    return __async(this, null, function* () {
      const s6 = null != r4 ? r4.cache : null, l18 = s6 ? this._fetchCacheKey : null;
      if (null != s6) {
        const t10 = l18 && s6.get(l18);
        if (t10) return t10.clone();
      }
      const {
        resolveWebStyleSymbol: i10
      } = yield import("./webStyleSymbolUtils-JK5TYHUO.js");
      s(r4);
      const p18 = i10(this, {
        portal: this.portal
      }, t9, r4);
      p18.catch((t10) => {
        n.getLogger(this).error("#fetchSymbol()", "Failed to create symbol from style", t10);
      });
      const a15 = yield p18;
      return "webRef" === t9 && "point-3d" === a15.type || "cimRef" === t9 && "cim" === a15.type ? (null != s6 && s6.set(l18, a15.clone()), a15) : null;
    });
  }
};
e([y({
  json: {
    write: false
  }
})], y6.prototype, "color", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], y6.prototype, "styleName", void 0), e([y({
  type: C2,
  json: {
    write: false
  }
})], y6.prototype, "portal", void 0), e([y({
  type: String,
  json: {
    read: f2,
    write: h
  }
})], y6.prototype, "styleUrl", void 0), e([y({
  type: c,
  json: {
    read: false
  }
})], y6.prototype, "thumbnail", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], y6.prototype, "name", void 0), e([o2({
  styleSymbolReference: "web-style"
}, {
  readOnly: true
})], y6.prototype, "type", void 0), e([y()], y6.prototype, "_fetchCacheKey", null), y6 = c15 = e([a3("esri.symbols.WebStyleSymbol")], y6);
var h11 = y6;

// ../../../node_modules/@arcgis/core/symbols.js
function S5(e10) {
  if (!e10) return false;
  switch (e10.type) {
    case "picture-fill":
    case "picture-marker":
    case "simple-fill":
    case "simple-line":
    case "simple-marker":
    case "text":
    case "cim":
      return true;
    default:
      return false;
  }
}
function x(e10) {
  if (!e10) return false;
  switch (e10.type) {
    case "label-3d":
    case "line-3d":
    case "mesh-3d":
    case "point-3d":
    case "polygon-3d":
      return true;
    default:
      return false;
  }
}
var j6 = {
  base: n3,
  key: "type",
  typeMap: {
    "simple-fill": S2,
    "picture-fill": a14,
    "picture-marker": n7,
    "simple-line": d,
    "simple-marker": y2,
    text: m4,
    "label-3d": b2,
    "line-3d": b3,
    "mesh-3d": c13,
    "point-3d": w2,
    "polygon-3d": h10,
    "web-style": h11,
    cim: d4
  },
  errorContext: "symbol"
};
var D = {
  base: n3,
  key: "type",
  typeMap: {
    "picture-marker": n7,
    "simple-marker": y2,
    "point-3d": w2,
    cim: d4
  },
  errorContext: "symbol"
};
var L = {
  base: n3,
  key: "type",
  typeMap: {
    "simple-line": d,
    "line-3d": b3,
    cim: d4
  },
  errorContext: "symbol"
};
var k2 = {
  base: n3,
  key: "type",
  typeMap: {
    "simple-fill": S2,
    "picture-fill": a14,
    "polygon-3d": h10,
    cim: d4
  },
  errorContext: "symbol"
};
var M = {
  base: n3,
  key: "type",
  typeMap: {
    "picture-marker": n7,
    "simple-marker": y2,
    text: m4,
    "web-style": h11,
    cim: d4
  },
  errorContext: "symbol"
};
var C4 = u({
  types: j6
});
var h12 = {
  base: n3,
  key: "type",
  typeMap: {
    "simple-fill": S2,
    "picture-fill": a14,
    "picture-marker": n7,
    "simple-line": d,
    "simple-marker": y2,
    text: m4,
    "line-3d": b3,
    "mesh-3d": c13,
    "point-3d": w2,
    "polygon-3d": h10,
    "web-style": h11,
    cim: d4
  },
  errorContext: "symbol"
};
var F = {
  base: n3,
  key: "type",
  typeMap: {
    text: m4,
    "label-3d": b2
  },
  errorContext: "symbol"
};
var w3 = {
  base: n3,
  key: "type",
  typeMap: {
    "line-3d": b3,
    "mesh-3d": c13,
    "point-3d": w2,
    "polygon-3d": h10,
    "web-style": h11,
    cim: d4
  },
  errorContext: "symbol"
};
var P = {
  base: n3,
  key: "type",
  typeMap: {
    "label-3d": b2
  },
  errorContext: "symbol"
};
var B = T(j6);

export {
  d4 as d,
  i6 as i,
  t4 as t,
  l8 as l,
  h5 as h,
  j,
  p14 as p,
  j2,
  h6 as h2,
  d3 as d2,
  c8 as c,
  z,
  i5 as i2,
  c as c2,
  k,
  m12 as m,
  d11 as d3,
  o8 as o,
  l16 as l2,
  p16 as p2,
  b2 as b,
  b3 as b2,
  c13 as c3,
  n7 as n,
  w2 as w,
  h10 as h3,
  h11 as h4,
  S5 as S,
  x,
  j6 as j3,
  D,
  L,
  k2,
  M,
  C4 as C,
  h12 as h5,
  F,
  w3 as w2,
  P,
  B
};
//# sourceMappingURL=chunk-ZREJ3Y2F.js.map
