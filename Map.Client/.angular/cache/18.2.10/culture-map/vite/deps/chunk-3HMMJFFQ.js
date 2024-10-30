import {
  r
} from "./chunk-WU45X43Z.js";
import {
  n
} from "./chunk-D3AKDIJC.js";
import {
  Ne
} from "./chunk-VTRNFNJR.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/draw/support/HighlightHelper.js
var a2 = class extends S {
  constructor(r2) {
    super(r2), this.view = null;
  }
  add(r2) {
    const s = !r2 || Array.isArray(r2) ? r2 : [r2];
    s?.length && s.forEach((r3) => this._highlight(r3));
  }
  remove(r2) {
    const s = !r2 || Array.isArray(r2) ? r2 : [r2];
    s?.length && s.forEach((r3) => this._removeHighlight(r3));
  }
  removeAll() {
    this.removeAllHandles();
  }
  _highlight(r2) {
    const s = r(this.view, r2.layer);
    n(s) && this.addHandles(s.highlight(r2), Ne(r2));
  }
  _removeHighlight(r2) {
    r2 && this.removeHandles(Ne(r2));
  }
};
e([y()], a2.prototype, "view", void 0), a2 = e([a("esri.views.draw.support.HighlightHelper")], a2);
var h = a2;

export {
  h
};
//# sourceMappingURL=chunk-3HMMJFFQ.js.map
