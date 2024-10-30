import {
  d
} from "./chunk-CYRWOVUJ.js";
import "./chunk-VKKATW5E.js";
import "./chunk-2ACBZNFZ.js";
import {
  f as f2,
  i,
  s
} from "./chunk-YA5CTHMT.js";
import "./chunk-RXWBJSJ5.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-V5C6HSAM.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=queryNamedTraceConfigurations-ZY24BV62.js.map
