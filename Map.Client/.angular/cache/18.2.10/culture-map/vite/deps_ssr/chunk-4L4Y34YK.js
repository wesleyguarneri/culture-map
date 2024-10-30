import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-2HDBQXAR.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a,
  s3 as s2
} from "./chunk-UDMPWVPF.js";
import {
  w
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6WGE3IUL.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/core/Loadable.js
var i = "not-loaded";
var d = "loading";
var h = "failed";
var c = "loaded";
var u = (s3) => {
  let u2 = class extends s3 {
    constructor(...o) {
      super(...o), this._loadController = null, this.loadError = null, this.loadStatus = "not-loaded", this._set("loadWarnings", []), this.addResolvingPromise(new Promise((o2) => {
        const r = this.load.bind(this);
        this.load = (s4) => {
          const e3 = new Promise((o3, r2) => {
            const e4 = w(s4, r2);
            this.destroyed && r2(new s("load:instance-destroyed", `Instance of '${this.declaredClass || this.constructor.name}' is already destroyed`, {
              instance: this
            })), this.when(o3, r2).finally(() => {
              e4 && e4.remove();
            });
          });
          if (this.loadStatus === i) {
            this._set("loadStatus", d);
            const o3 = this._loadController = new AbortController();
            r({
              signal: o3.signal
            });
          }
          return o2(), e3;
        };
      })), this.when(() => {
        this._set("loadStatus", c), this._loadController = null;
      }, (o2) => {
        this._set("loadStatus", h), this._set("loadError", o2), this._loadController = null;
      });
    }
    destroy() {
      this._loadController && (this._loadController = e(this._loadController), this._promiseProps.abort()), this._set("loadError", null), this._set("loadWarnings", []);
    }
    get loaded() {
      return this.loadStatus === c;
    }
    get loadWarnings() {
      return this._get("loadWarnings");
    }
    load() {
      return null;
    }
    cancelLoad() {
      return this.isFulfilled() || (this._set("loadError", new s("load:cancelled", "Cancelled")), this._loadController?.abort(), this._promiseProps.abort()), this;
    }
  };
  return e2([y({
    readOnly: true
  })], u2.prototype, "loaded", null), e2([y({
    readOnly: true
  })], u2.prototype, "loadError", void 0), e2([y({
    clonable: false
  })], u2.prototype, "loadStatus", void 0), e2([y({
    type: [s2],
    readOnly: true
  })], u2.prototype, "loadWarnings", null), u2 = e2([a("esri.core.Loadable")], u2), u2;
};
var p = class extends u(m) {
};
p = e2([a("esri.core.Loadable")], p), function(o) {
  function t(o2) {
    return !(!o2 || !o2.load);
  }
  o.LoadableMixin = u, o.isLoadable = t;
}(p || (p = {}));
var m2 = p;

export {
  m2 as m
};
//# sourceMappingURL=chunk-4L4Y34YK.js.map
