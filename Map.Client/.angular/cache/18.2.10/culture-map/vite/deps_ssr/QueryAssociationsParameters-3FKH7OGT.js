import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-4YRHCFPB.js";
import {
  i
} from "./chunk-BQY5LM3B.js";
import "./chunk-Y2HYKTTT.js";
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

// ../../../node_modules/@arcgis/core/rest/networks/support/QueryAssociationsParameters.js
var m;
var n = m = class extends f {
  static from(e2) {
    return g(m, e2);
  }
  constructor(e2) {
    super(e2), this.returnDeletes = false, this.elements = [], this.types = [], this.gdbVersion = null, this.moment = null;
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], n.prototype, "returnDeletes", void 0), e([y({
  type: [p],
  json: {
    write: true
  }
})], n.prototype, "elements", void 0), e([y({
  type: [i.apiValues],
  json: {
    type: i.jsonValues,
    read: i.read,
    write: i.write
  }
})], n.prototype, "types", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n.prototype, "gdbVersion", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (e2, t) => {
        t.moment = e2?.getTime();
      }
    }
  }
})], n.prototype, "moment", void 0), n = m = e([a("esri.rest.networks.support.QueryAssociationsParameters")], n);
var a2 = n;
export {
  a2 as default
};
//# sourceMappingURL=QueryAssociationsParameters-3FKH7OGT.js.map
