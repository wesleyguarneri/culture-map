import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  s
} from "./chunk-ASCK5HJ5.js";
import {
  u2 as u
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";

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
//# sourceMappingURL=chunk-RHVUMKCC.js.map
