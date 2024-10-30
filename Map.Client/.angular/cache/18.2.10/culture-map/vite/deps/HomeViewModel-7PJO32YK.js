import {
  m
} from "./chunk-XTCHBO6P.js";
import "./chunk-NE4OJEWH.js";
import {
  t
} from "./chunk-YKOY3XWH.js";
import "./chunk-SLCHZ6DD.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Home/HomeViewModel.js
var l = class extends t(o.EventedAccessor) {
  constructor(o2) {
    super(o2), this._initialViewpoint = null, this._goingHomeController = null, this.go = this.go.bind(this);
  }
  destroy() {
    this._cancelGo(), this.view = null;
  }
  get state() {
    return this.view?.ready ? this._goingHomeController ? "going-home" : "ready" : "disabled";
  }
  set view(o2) {
    this._initialViewpoint = null, this._set("view", o2), o2 && o2.when().then(() => {
      this.view === o2 && (this._initialViewpoint = o2.viewpoint.clone(), this.notifyChange("viewpoint"));
    });
  }
  get viewpoint() {
    return this._get("viewpoint") || this._initialViewpoint;
  }
  set viewpoint(o2) {
    this._set("viewpoint", o2);
  }
  go() {
    return __async(this, null, function* () {
      if (!this.view?.ready) throw new s("home:disabled-state", "Cannot go when disabled.");
      this._cancelGo(), this.emit("go");
      const o2 = new AbortController();
      this._goingHomeController = o2;
      try {
        yield this.view?.when(), yield this.callGoTo({
          target: this.viewpoint,
          options: {
            signal: o2.signal
          }
        });
      } catch (t2) {
      }
      this._goingHomeController = null;
    });
  }
  cancelGo() {
    this._cancelGo();
  }
  _cancelGo() {
    const {
      _goingHomeController: o2
    } = this;
    o2 && o2.abort(), this._goingHomeController = null;
  }
};
e([y()], l.prototype, "_goingHomeController", void 0), e([y({
  readOnly: true
})], l.prototype, "state", null), e([y()], l.prototype, "view", null), e([y({
  type: m
})], l.prototype, "viewpoint", null), e([y()], l.prototype, "go", null), e([y()], l.prototype, "cancelGo", null), l = e([a("esri.widgets.Home.HomeViewModel")], l);
var p = l;
export {
  p as default
};
//# sourceMappingURL=HomeViewModel-7PJO32YK.js.map
