import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/support/arcadeOnDemand.js
var a = () => n.getLogger("esri.support.arcadeOnDemand");
var s2;
function i() {
  return s2 || (s2 = (() => __async(this, null, function* () {
    const e = yield import("./arcadeUtils-IJ2IZQRF.js");
    return {
      arcade: e.arcade,
      arcadeUtils: e,
      Dictionary: e.Dictionary,
      Feature: e.arcadeFeature
    };
  }))()), s2;
}
var c = (e, r, t) => p.create(e, r, t, null, ["$feature", "$view"], []);
var o = (e, r, t) => p.create(e, r, t, null, ["$feature", "$view"], []);
var u = (e, r, t, a2) => p.create(e, r, t, a2, ["$feature", "$view"], []);
var p = class _p {
  constructor(e, r, t, a2, s3, i2, c2) {
    this.services = null, this.script = e, this.evaluate = a2;
    const n2 = Array.isArray(i2) ? i2 : i2?.fields;
    this.fields = n2 ?? [], this._syntaxTree = t, this._arcade = r, this._arcadeFeature = s3, this._spatialReference = c2, this._referencesGeometry = r.scriptTouchesGeometry(this._syntaxTree), this._referencesScale = this._arcade.referencesMember(this._syntaxTree, "scale");
  }
  static create(r, s3, c2, n2, o2, l) {
    return __async(this, null, function* () {
      const {
        arcade: u2,
        Feature: f2,
        Dictionary: m
      } = yield i(), d = f.fromJSON(s3);
      let y;
      try {
        y = u2.parseScript(r, l);
      } catch (x) {
        return a().error(new s("arcade-bad-expression", "Failed to parse arcade script", {
          script: r,
          error: x
        })), null;
      }
      const h = o2.reduce((e, r2) => __spreadProps(__spreadValues({}, e), {
        [r2]: null
      }), {});
      let w = null;
      null != n2 && (w = new m(n2), w.immutable = true, h.$config = null);
      const v = u2.scriptUsesGeometryEngine(y), $ = v && u2.enableGeometrySupport(), g = u2.scriptUsesFeatureSet(y) && u2.enableFeatureSetSupport(), _ = u2.scriptIsAsync(y), F = _ && u2.enableAsyncSupport(), S = {
        vars: h,
        spatialReference: d,
        useAsync: !!F
      };
      yield Promise.all([$, g, F]);
      const b = /* @__PURE__ */ new Set();
      yield u2.loadDependentModules(b, y, null, _, v);
      const R = new m();
      R.immutable = false, R.setField("scale", 0);
      const j = u2.compileScript(y, S), G = (e, r2) => {
        const t = e.$view?.timeZone;
        return "$view" in e && e.$view && (R.setField("scale", "object" == typeof e.$view && "scale" in e.$view ? e.$view.scale : void 0), e.$view = R), w && (e.$config = w), j({
          vars: e,
          spatialReference: d,
          services: r2,
          timeZone: t
        });
      };
      return new _p(r, u2, y, G, new f2(), c2, d);
    });
  }
  repurposeFeature(e) {
    return e.geometry && !e.geometry.spatialReference && (e.geometry.spatialReference = this._spatialReference), this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry, e.attributes, {
      fields: this.fields
    }), this._arcadeFeature;
  }
  referencesGeometry() {
    return this._referencesGeometry;
  }
  referencesScale() {
    return this._referencesScale;
  }
};

export {
  i,
  c,
  o,
  u
};
//# sourceMappingURL=chunk-JKPUNUQA.js.map
