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
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/layers/support/OrderByInfo.js
var i;
var p = new n({
  asc: "ascending",
  desc: "descending"
});
var n2 = i = class extends f {
  constructor(r) {
    super(r), this.field = null, this.valueExpression = null, this.order = "ascending";
  }
  clone() {
    return new i({
      field: this.field,
      valueExpression: this.valueExpression,
      order: this.order
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n2.prototype, "field", void 0), e([y({
  type: String,
  json: {
    write: true,
    origins: {
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], n2.prototype, "valueExpression", void 0), e([y({
  type: p.apiValues,
  json: {
    type: p.jsonValues,
    read: p.read,
    write: p.write
  }
})], n2.prototype, "order", void 0), n2 = i = e([a("esri.layers.support.OrderByInfo")], n2);
var a2 = n2;

export {
  a2 as a
};
//# sourceMappingURL=chunk-DD6UQHSS.js.map
