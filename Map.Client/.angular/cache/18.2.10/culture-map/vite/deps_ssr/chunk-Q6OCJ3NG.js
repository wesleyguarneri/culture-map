import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a2
} from "./chunk-DD6UQHSS.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  e
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
function i(r, o, e3) {
  if (!r) return null;
  const t = r.find((r2) => !!r2.field);
  if (!t) return null;
  const i2 = new a2();
  return i2.read(t, e3), [i2];
}
function n(r, e3, t, s) {
  const i2 = r.find((r2) => !!r2.field);
  i2 && e(t, [i2.toJSON()], e3);
}
var c = {
  type: [a2],
  json: {
    origins: {
      "web-scene": {
        write: false,
        read: false
      }
    },
    name: "layerDefinition.orderBy",
    read: {
      reader: i
    },
    write: {
      writer: n
    }
  }
};
var p = (o) => {
  let s = class extends o {
    constructor() {
      super(...arguments), this.orderBy = null;
    }
  };
  return e2([y(c)], s.prototype, "orderBy", void 0), s = e2([a("esri.layers.mixins.OrderedLayer")], s), s;
};

export {
  c,
  p
};
//# sourceMappingURL=chunk-Q6OCJ3NG.js.map
