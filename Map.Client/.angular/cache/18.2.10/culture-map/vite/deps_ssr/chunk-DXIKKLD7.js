import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-DL2B6IFJ.js";
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

// ../../../node_modules/@arcgis/core/rest/support/FullTextSearch.js
var p = class extends i(f) {
  constructor(r) {
    super(r), this.onFields = null, this.operator = null, this.searchTerm = null, this.searchType = null;
  }
};
e([y({
  type: [String],
  json: {
    write: {
      enabled: true,
      overridePolicy() {
        return {
          enabled: null != this.onFields && this.onFields.length > 0
        };
      }
    }
  }
})], p.prototype, "onFields", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "operator", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "searchTerm", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "searchType", void 0), p = e([a("esri.rest.support.FullTextSearch")], p);
var i2 = p;

export {
  i2 as i
};
//# sourceMappingURL=chunk-DXIKKLD7.js.map
