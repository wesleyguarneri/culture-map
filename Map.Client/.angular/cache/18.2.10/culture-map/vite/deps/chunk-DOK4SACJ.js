import {
  a as a2
} from "./chunk-UPDWQH75.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  i3 as i
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  d,
  k
} from "./chunk-HJY2YILU.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/mixins/refresh.js
var t = new V();
var o = /* @__PURE__ */ new WeakMap();
function n2(e2) {
  f(e2) && t.push(new WeakRef(e2));
}
function s2(e2) {
  const r = t.find((r2) => r2.deref() === e2);
  r && t.remove(r);
}
function f(e2) {
  return null != e2 && "object" == typeof e2 && "refreshInterval" in e2 && "refresh" in e2;
}
function c(e2, r) {
  return Number.isFinite(e2) && Number.isFinite(r) ? r <= 0 ? e2 : c(r, e2 % r) : 0;
}
var i2 = 0;
var l = 0;
function a3() {
  const e2 = Date.now();
  let r = false;
  for (const n3 of t) {
    const t2 = n3.deref();
    if (t2) {
      if (t2.refreshInterval) {
        e2 - (o.get(t2) ?? 0) + 5 >= 6e4 * t2.refreshInterval && (o.set(t2, e2), t2.refresh(e2));
      }
    } else r = true;
  }
  if (r) for (let o2 = t.length - 1; o2 >= 0; o2--) {
    t.at(o2).deref() || t.removeAt(o2);
  }
}
i(() => {
  const e2 = Date.now();
  let r = 0;
  for (const n3 of t) {
    const t2 = n3.deref();
    t2 && (r = c(Math.round(6e4 * t2.refreshInterval), r), t2.refreshInterval ? o.get(t2) || o.set(t2, e2) : o.delete(t2));
  }
  if (r !== l) {
    if (l = r, clearInterval(i2), 0 === l) return void (i2 = 0);
    i2 = setInterval(a3, l);
  }
});

// ../../../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js
function m(e2) {
  return null != e2 && "object" == typeof e2 && "refreshTimestamp" in e2 && "refresh" in e2;
}
var c2 = 0.1;
var f2 = (m2) => {
  let f3 = class extends m2 {
    constructor(...e2) {
      super(...e2), this.refreshInterval = 0, this.refreshTimestamp = 0, this._debounceHasDataChanged = k(() => this.hasDataChanged()), this.when().then(() => {
        this.destroyed || n2(this);
      }, () => {
      });
    }
    destroy() {
      s2(this);
    }
    castRefreshInterval(e2) {
      return e2 >= c2 ? e2 : e2 <= 0 ? 0 : c2;
    }
    get refreshParameters() {
      return {
        _ts: this.refreshTimestamp || null
      };
    }
    refresh(e2 = Date.now()) {
      d(this._debounceHasDataChanged()).then((r) => {
        r && this._set("refreshTimestamp", e2), this.emit("refresh", {
          dataChanged: r
        });
      }, (e3) => {
        n.getLogger(this).error(e3), this.emit("refresh", {
          dataChanged: false,
          error: e3
        });
      });
    }
    hasDataChanged() {
      return __async(this, null, function* () {
        return true;
      });
    }
    get test() {
    }
  };
  return e([y({
    type: Number,
    json: {
      write: true,
      origins: {
        "web-scene": {
          write: {
            enabled: true,
            layerContainerTypes: a2
          }
        }
      }
    }
  })], f3.prototype, "refreshInterval", void 0), e([s("refreshInterval")], f3.prototype, "castRefreshInterval", null), e([y({
    readOnly: true
  })], f3.prototype, "refreshTimestamp", void 0), e([y({
    readOnly: true
  })], f3.prototype, "refreshParameters", null), f3 = e([a("esri.layers.mixins.RefreshableLayer")], f3), f3;
};

export {
  m,
  f2 as f
};
//# sourceMappingURL=chunk-DOK4SACJ.js.map
