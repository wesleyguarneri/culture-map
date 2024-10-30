import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-2Q6GNCAJ.js";
import "./chunk-FD6MY73F.js";
import "./chunk-BQY5LM3B.js";
import {
  f as f2,
  i,
  s
} from "./chunk-FDI2X6GO.js";
import "./chunk-7TBQUMV3.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
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
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/networks/support/QueryNamedTraceConfigurationsResult.js
var a2 = class extends f {
  constructor(r) {
    super(r), this.namedTraceConfigurations = [];
  }
};
e([y({
  type: [d],
  json: {
    read: {
      source: "traceConfigurations"
    },
    write: {
      target: "traceConfigurations"
    }
  }
})], a2.prototype, "namedTraceConfigurations", void 0), a2 = e([a("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")], a2);
var c = a2;

// ../../../node_modules/@arcgis/core/rest/networks/queryNamedTraceConfigurations.js
function e2(e3, n, g) {
  return __async(this, null, function* () {
    const i2 = f2(e3), l = n.toJSON();
    n.globalIds && n.globalIds.length > 0 && (l.globalIds = JSON.stringify(n.globalIds)), n.creators && n.creators.length > 0 && (l.creators = JSON.stringify(n.creators)), n.tags && n.tags.length > 0 && (l.tags = JSON.stringify(n.tags)), n.names && n.names.length > 0 && (l.names = JSON.stringify(n.names));
    const m = __spreadProps(__spreadValues({}, l), {
      f: "json"
    }), f3 = s(__spreadValues(__spreadValues({}, i2.query), m)), u = i(f3, __spreadProps(__spreadValues({}, g), {
      method: "post"
    })), c2 = `${i2.path}/traceConfigurations/query`, {
      data: p
    } = yield U(c2, u);
    return c.fromJSON(p);
  });
}
export {
  e2 as queryNamedTraceConfigurations
};
//# sourceMappingURL=queryNamedTraceConfigurations-PIUL75IO.js.map
