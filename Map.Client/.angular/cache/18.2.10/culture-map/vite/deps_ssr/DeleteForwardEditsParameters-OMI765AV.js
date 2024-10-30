import { createRequire } from 'module';const require = createRequire(import.meta.url);
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

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters.js
var p;
var i = p = class extends f {
  static from(r) {
    return g(p, r);
  }
  constructor(r) {
    super(r), this.sessionId = void 0, this.moment = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "sessionId", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (r, o) => {
        o.moment = r ? r.getTime() : null;
      }
    }
  }
})], i.prototype, "moment", void 0), i = p = e([a("esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters")], i);
var m = i;
export {
  m as default
};
//# sourceMappingURL=DeleteForwardEditsParameters-OMI765AV.js.map
