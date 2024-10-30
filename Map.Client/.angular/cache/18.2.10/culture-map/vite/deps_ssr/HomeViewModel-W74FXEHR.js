import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-JPJAW3N6.js";
import {
  m
} from "./chunk-AENXIHUM.js";
import "./chunk-Z3B4X2BG.js";
import "./chunk-HKAONIBH.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
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
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=HomeViewModel-W74FXEHR.js.map
