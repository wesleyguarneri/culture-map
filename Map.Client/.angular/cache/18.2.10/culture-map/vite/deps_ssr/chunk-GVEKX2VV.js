import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-WQZJGTGX.js";
import {
  i2
} from "./chunk-VZ37C3ID.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

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
//# sourceMappingURL=chunk-GVEKX2VV.js.map
