import {
  p
} from "./chunk-BPMRTFHU.js";
import {
  i2
} from "./chunk-PFMGJTQM.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/support/FeatureType.js
var c = class extends i(f) {
  constructor(o2) {
    super(o2), this.id = null, this.name = null, this.domains = null, this.templates = null;
  }
  readDomains(o2) {
    const r2 = {};
    for (const t of Object.keys(o2)) r2[t] = i2(o2[t]);
    return r2;
  }
  writeDomains(o2, r2) {
    const t = {};
    for (const s of Object.keys(o2)) o2[s] && (t[s] = o2[s]?.toJSON());
    r2.domains = t;
  }
};
e([y({
  json: {
    write: true
  }
})], c.prototype, "id", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "name", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "domains", void 0), e([o("domains")], c.prototype, "readDomains", null), e([r("domains")], c.prototype, "writeDomains", null), e([y({
  type: [p],
  json: {
    write: true
  }
})], c.prototype, "templates", void 0), c = e([a("esri.layers.support.FeatureType")], c);
var n = c;

export {
  n
};
//# sourceMappingURL=chunk-2GRLWAHK.js.map
