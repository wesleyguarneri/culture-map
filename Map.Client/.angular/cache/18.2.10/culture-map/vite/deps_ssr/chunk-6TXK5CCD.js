import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n3 as n2,
  n4 as n3,
  s
} from "./chunk-ZTTGFJJT.js";
import {
  p
} from "./chunk-IR6CVPPC.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/webscene/SunLighting.js
var d;
var i = d = class extends f {
  constructor(e2) {
    super(e2), this.type = "sun", this.date = null, this.directShadowsEnabled = false, this.displayUTCOffset = null;
  }
  readDate(e2, t3) {
    return null != t3.datetime && new Date(t3.datetime) || null;
  }
  writeDate(e2, t3, r2) {
    t3[r2] = e2.getTime();
  }
  readDirectShadowsEnabled(e2, t3) {
    return !!t3.directShadows;
  }
  writedirectShadowsEnabled(e2, t3, r2) {
    e2 && (t3[r2] = e2);
  }
  writeDisplayUTCOffset(e2, t3) {
    null != e2 && (t3.displayUTCOffset = e2);
  }
  clone() {
    return new d(this.cloneConstructProperties());
  }
  cloneConstructProperties() {
    const e2 = {
      directShadowsEnabled: this.directShadowsEnabled,
      displayUTCOffset: null != this.displayUTCOffset ? this.displayUTCOffset : null
    };
    return null != this.date && (e2.date = new Date(this.date.getTime())), e2;
  }
};
e([y({
  readOnly: true,
  type: ["sun"],
  json: {
    write: true
  }
})], i.prototype, "type", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      target: "datetime"
    }
  }
})], i.prototype, "date", void 0), e([o("date", ["datetime"])], i.prototype, "readDate", null), e([r("date")], i.prototype, "writeDate", null), e([y({
  type: Boolean,
  json: {
    default: false,
    write: {
      target: "directShadows"
    }
  }
})], i.prototype, "directShadowsEnabled", void 0), e([o("directShadowsEnabled", ["directShadows"])], i.prototype, "readDirectShadowsEnabled", null), e([r("directShadowsEnabled")], i.prototype, "writedirectShadowsEnabled", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], i.prototype, "displayUTCOffset", void 0), e([r("displayUTCOffset")], i.prototype, "writeDisplayUTCOffset", null), i = d = e([a2("esri.webscene.SunLighting")], i);
var p2 = i;

// ../../../node_modules/@arcgis/core/webscene/VirtualLighting.js
var s2;
var c = s2 = class extends f {
  constructor(r2) {
    super(r2), this.type = "virtual", this.directShadowsEnabled = false;
  }
  clone() {
    return new s2(this.cloneConstructProperties());
  }
  cloneConstructProperties() {
    return {
      directShadowsEnabled: this.directShadowsEnabled
    };
  }
};
e([y({
  readOnly: true,
  type: ["virtual"],
  json: {
    write: true
  }
})], c.prototype, "type", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    name: "directShadows",
    write: true
  }
})], c.prototype, "directShadowsEnabled", void 0), c = s2 = e([a2("esri.webscene.VirtualLighting")], c);
var i2 = c;

// ../../../node_modules/@arcgis/core/webscene/lightingTypes.js
var i3 = {
  key: "type",
  defaultKeyValue: "sun",
  base: null,
  typeMap: {
    sun: p2,
    virtual: i2
  }
};

// ../../../node_modules/@arcgis/core/webscene/background/Background.js
var t = class extends f {
  constructor(o4) {
    super(o4);
  }
  clone() {
    throw new Error("Subclasses of Background should implement their own clone method.");
  }
};
e([y({
  readOnly: true,
  json: {
    read: false
  }
})], t.prototype, "type", void 0), t = e([a2("esri.webscene.background.Background")], t);
var c2 = t;

// ../../../node_modules/@arcgis/core/webscene/background/ColorBackground.js
var l;
var i4 = __spreadProps(__spreadValues({}, p), {
  nonNullable: true
});
var n4 = l = class extends c2 {
  constructor(o4) {
    super(o4), this.type = "color", this.color = new u([0, 0, 0, 1]);
  }
  clone() {
    return new l(this.cloneProperties());
  }
  cloneProperties() {
    return {
      color: this.color.clone()
    };
  }
};
e([o2({
  color: "color"
}, {
  readOnly: true
})], n4.prototype, "type", void 0), e([y(i4)], n4.prototype, "color", void 0), n4 = l = e([a2("esri.webscene.background.ColorBackground")], n4);
var a3 = n4;

// ../../../node_modules/@arcgis/core/webscene/background/utils.js
var o3 = {
  base: c2,
  key: "type",
  typeMap: {
    color: a3
  }
};
function t2(e2) {
  return (r2, o4, t3) => {
    if (!r2) return r2;
    for (const n6 in e2.typeMap) if (r2.type === n6) {
      const o5 = new e2.typeMap[n6]();
      return o5.read(r2, t3), o5;
    }
  };
}
var n5 = {
  types: o3,
  json: {
    read: t2(o3),
    write: {
      overridePolicy: (e2, r2, o4) => ({
        enabled: !o4?.isPresentation
      })
    }
  }
};

// ../../../node_modules/@arcgis/core/webscene/Environment.js
var g;
var u2 = (e2, t3, o4) => ({
  enabled: !o4?.isPresentation
});
var d2 = g = class extends f {
  constructor(e2) {
    super(e2), this.lighting = new p2(), this.background = null, this.atmosphereEnabled = true, this.starsEnabled = true;
  }
  set weather(e2) {
    s(e2?.type, n.getLogger(this)) && this._set("weather", e2);
  }
  clone() {
    return new g(this.cloneConstructProperties());
  }
  cloneConstructProperties() {
    return {
      lighting: this.lighting && "virtual" === this.lighting.type ? i2.prototype.clone.call(this.lighting) : p2.prototype.clone.call(this.lighting),
      background: a(this.background),
      atmosphereEnabled: this.atmosphereEnabled,
      starsEnabled: this.starsEnabled,
      weather: this.weather.clone()
    };
  }
};
e([y({
  types: i3,
  nonNullable: true,
  json: {
    write: true
  }
})], d2.prototype, "lighting", void 0), e([y(n5)], d2.prototype, "background", void 0), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: {
      overridePolicy: u2
    }
  }
})], d2.prototype, "atmosphereEnabled", void 0), e([y({
  type: Boolean,
  nonNullable: true,
  json: {
    write: {
      overridePolicy: u2
    }
  }
})], d2.prototype, "starsEnabled", void 0), e([y({
  types: n3,
  nonNullable: true,
  json: {
    write: true
  },
  value: new n2()
})], d2.prototype, "weather", null), d2 = g = e([a2("esri.webscene.Environment")], d2);
var b = d2;

export {
  p2 as p,
  i2 as i,
  i3 as i2,
  a3 as a,
  b
};
//# sourceMappingURL=chunk-6TXK5CCD.js.map
