import {
  o as o2
} from "./chunk-N6TJI25E.js";
import {
  t
} from "./chunk-SG5TCCCK.js";
import {
  n as n2
} from "./chunk-6A7CWJED.js";
import {
  n as n3,
  r as r2
} from "./chunk-6EUVKE22.js";
import {
  u as u3
} from "./chunk-K226GFDN.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  f,
  u2
} from "./chunk-V6AMQYXE.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  N,
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  b,
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
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

// ../../../node_modules/@arcgis/core/ground/NavigationConstraint.js
var s3;
var p = s3 = class extends f {
  constructor(o3) {
    super(o3), this.type = "none";
  }
  clone() {
    return new s3({
      type: this.type
    });
  }
};
e([o({
  none: "none",
  stayAbove: "stay-above"
})], p.prototype, "type", void 0), p = s3 = e([a2("esri.ground.NavigationConstraint")], p);

// ../../../node_modules/@arcgis/core/Ground.js
var S;
var C = S = class extends u2(m) {
  constructor(r3) {
    super(r3), this.opacity = 1, this.surfaceColor = null, this.navigationConstraint = null, this.layers = new V();
    const e2 = (r4) => {
      r4.parent && r4.parent !== this && "remove" in r4.parent && r4.parent.remove(r4), r4.parent = this, "elevation" !== r4.type && "base-elevation" !== r4.type && n.getLogger(this).error(`Layer '${r4.title}, id:${r4.id}' of type '${r4.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`);
    }, t2 = (r4) => {
      r4.parent = null;
    };
    this.addHandles([this.layers.on("after-add", (r4) => e2(r4.item)), this.layers.on("after-remove", (r4) => t2(r4.item))]);
  }
  initialize() {
    this.when().catch((r3) => {
      b(r3) || n.getLogger(this).error("#load()", "Failed to load ground", r3);
    }), this.resourceInfo && this.read(this.resourceInfo.data, this.resourceInfo.context);
  }
  destroy() {
    const r3 = this.layers.removeAll();
    for (const e2 of r3) u(e2);
    this.layers.destroy();
  }
  normalizeCtorArgs(r3) {
    return r3 && "resourceInfo" in r3 && (this._set("resourceInfo", r3.resourceInfo), delete (r3 = __spreadValues({}, r3)).resourceInfo), r3;
  }
  set layers(r3) {
    this._set("layers", n2(r3, this._get("layers")));
  }
  writeLayers(r3, e2, o3, t2) {
    const i = [];
    r3 ? (t2 = __spreadProps(__spreadValues({}, t2), {
      layerContainerType: "ground"
    }), r3.forEach((r4) => {
      if ("write" in r4) {
        const e3 = {};
        o2(r4)().write(e3, t2) && i.push(e3);
      } else t2?.messages && t2.messages.push(new s("layer:unsupported", `Layers (${r4.title}, ${r4.id}) of type '${r4.declaredClass}' cannot be persisted in the ground`, {
        layer: r4
      }));
    }), e2.layers = i) : e2.layers = i;
  }
  load(r3) {
    return this.addResolvingPromise(this._loadFromSource(r3)), Promise.resolve(this);
  }
  loadAll() {
    return t(this, (r3) => {
      r3(this.layers);
    });
  }
  queryElevation(r3, e2) {
    return __async(this, null, function* () {
      yield this.load({
        signal: e2?.signal
      });
      const {
        ElevationQuery: o3
      } = yield import("./ElevationQuery-HI6MQWAL.js");
      s2(e2);
      const t2 = new o3(), s4 = this.layers.filter(L).toArray();
      return t2.queryAll(s4, r3, e2);
    });
  }
  createElevationSampler(r3, e2) {
    return __async(this, null, function* () {
      yield this.load({
        signal: e2?.signal
      });
      const {
        ElevationQuery: o3
      } = yield import("./ElevationQuery-HI6MQWAL.js");
      s2(e2);
      const t2 = new o3(), s4 = this.layers.filter(L).toArray();
      return t2.createSamplerAll(s4, r3, e2);
    });
  }
  clone() {
    const r3 = {
      opacity: this.opacity,
      surfaceColor: a(this.surfaceColor),
      navigationConstraint: a(this.navigationConstraint),
      layers: this.layers.slice()
    };
    return this.loaded && (r3.loadStatus = "loaded"), new S({
      resourceInfo: this.resourceInfo
    }).set(r3);
  }
  read(r3, e2) {
    this.resourceInfo || this._set("resourceInfo", {
      data: r3,
      context: e2
    }), super.read(r3, e2);
  }
  _loadFromSource(r3) {
    const e2 = this.resourceInfo;
    return e2 ? this._loadLayersFromJSON(e2.data, e2.context, r3) : Promise.resolve();
  }
  _loadLayersFromJSON(r3, e2, o3) {
    return __async(this, null, function* () {
      const t2 = e2?.origin || "web-scene", s4 = e2?.portal || null, a3 = e2?.url || null, {
        populateOperationalLayers: i
      } = yield import("./layersCreator-Y3WHDGYL.js");
      s2(o3);
      const n4 = [];
      if (r3.layers && Array.isArray(r3.layers)) {
        const e3 = {
          context: {
            origin: t2,
            url: a3,
            portal: s4,
            layerContainerType: "ground"
          },
          defaultLayerType: "ArcGISTiledElevationServiceLayer"
        };
        n4.push(i(this.layers, r3.layers, e3));
      }
      yield Promise.allSettled(n4);
    });
  }
};
function I(r3) {
  return r3 && "createElevationSampler" in r3;
}
function L(r3) {
  return "elevation" === r3.type || I(r3);
}
e([y({
  json: {
    read: false
  }
})], C.prototype, "layers", null), e([r("layers")], C.prototype, "writeLayers", null), e([y({
  readOnly: true
})], C.prototype, "resourceInfo", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 1
  },
  json: {
    type: N,
    read: {
      reader: r2,
      source: "transparency"
    },
    write: {
      writer: (r3, e2) => {
        e2.transparency = n3(r3);
      },
      target: "transparency"
    }
  }
})], C.prototype, "opacity", void 0), e([y({
  type: u3,
  json: {
    type: [N],
    write: (r3, e2) => {
      e2.surfaceColor = r3.toJSON().slice(0, 3);
    }
  }
})], C.prototype, "surfaceColor", void 0), e([y({
  type: p,
  json: {
    write: true
  }
})], C.prototype, "navigationConstraint", void 0), C = S = e([a2("esri.Ground")], C);
var b2 = C;

export {
  b2 as b
};
//# sourceMappingURL=chunk-2EMKXJIJ.js.map
