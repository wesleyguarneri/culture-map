import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
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
  a3 as a,
  g2 as g
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/ReconcileParameters.js
var p;
var c = new n({
  byObject: "by-object",
  byAttribute: "by-attribute"
});
var n2 = p = class extends f {
  static from(o) {
    return g(p, o);
  }
  constructor(o) {
    super(o), this.sessionId = void 0, this.abortIfConflicts = false, this.conflictDetection = null, this.withPost = false;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n2.prototype, "sessionId", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], n2.prototype, "abortIfConflicts", void 0), e([y({
  type: c.apiValues,
  json: {
    type: c.jsonValues,
    read: c.read,
    write: c.write
  }
})], n2.prototype, "conflictDetection", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], n2.prototype, "withPost", void 0), n2 = p = e([a("esri.rest.versionManagement.gdbVersion.support.ReconcileParameters")], n2);
var a2 = n2;
export {
  a2 as default
};
//# sourceMappingURL=ReconcileParameters-OOGYBDII.js.map
