import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  s
} from "./chunk-HT2T6PUB.js";
import {
  u2 as u
} from "./chunk-V6AMQYXE.js";
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
import {
  O
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/analysis/Analysis.js
var l = 0;
var p = class extends u(i(s(S))) {
  constructor(e2) {
    super(e2), this.id = `${Date.now().toString(16)}-analysis-${l++}`, this.title = null;
  }
  get parent() {
    return this._get("parent");
  }
  set parent(e2) {
    const t = this.parent;
    if (null != t) switch (t.type) {
      case "line-of-sight":
      case "dimension":
        t.releaseAnalysis(this);
        break;
      case "2d":
      case "3d":
        t.analyses.includes(this) && t.analyses.remove(this);
    }
    this._set("parent", e2);
  }
  get isEditable() {
    return this.requiredPropertiesForEditing.every(O);
  }
};
e([y({
  type: String,
  constructOnly: true,
  clonable: false
})], p.prototype, "id", void 0), e([y({
  type: String
})], p.prototype, "title", void 0), e([y({
  clonable: false,
  value: null
})], p.prototype, "parent", null), e([y({
  readOnly: true
})], p.prototype, "isEditable", null), p = e([a("esri.analysis.Analysis")], p);
var c = p;

export {
  c
};
//# sourceMappingURL=chunk-CQRPND5N.js.map
