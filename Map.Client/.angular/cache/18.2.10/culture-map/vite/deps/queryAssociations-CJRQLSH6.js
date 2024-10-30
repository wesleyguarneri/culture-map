import {
  d
} from "./chunk-6XDEYSEU.js";
import "./chunk-7NERSLA5.js";
import {
  i as i3
} from "./chunk-2ACBZNFZ.js";
import {
  f as f2,
  i as i2,
  s
} from "./chunk-YA5CTHMT.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
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
import {
  i
} from "./chunk-ANKOCGE2.js";
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
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/networks/support/QueryAssociationsResult.js
var p = class extends f {
  constructor(o) {
    super(o), this.associations = [];
  }
};
e([y({
  type: [d],
  json: {
    write: true
  }
})], p.prototype, "associations", void 0), p = e([a("esri.rest.networks.support.QueryAssociationsResult")], p);
var c = p;

// ../../../node_modules/@arcgis/core/rest/networks/queryAssociations.js
function a2(e2) {
  const {
    returnDeletes: t,
    elements: r,
    gdbVersion: s2,
    moment: n2
  } = e2.toJSON();
  return {
    returnDeletes: t,
    elements: JSON.stringify(r.map((e3) => ({
      globalId: e3.globalId,
      networkSourceId: e3.networkSourceId,
      terminalId: e3.terminalId
    }))),
    types: JSON.stringify(e2.types.map((e3) => i3.toJSON(e3))).replaceAll('"connectivity"', '"junctionJunctionConnectivity"'),
    gdbVersion: s2,
    moment: n2
  };
}
function p2(o, p3, m) {
  return __async(this, null, function* () {
    const u = f2(o), l = __spreadProps(__spreadValues({}, a2(p3)), {
      f: "json"
    }), y2 = s(__spreadValues(__spreadValues({}, u.query), l)), d2 = i2(y2, __spreadProps(__spreadValues({}, m), {
      method: "post"
    })), f3 = `${u.path}/associations/query`, {
      data: g
    } = yield U(f3, d2), j = c.fromJSON(g);
    return p3.types.includes("connectivity") && i(n.getLogger("esri/rest/networks/support/QueryAssociationsParameters"), "types", {
      replacement: "Please use 'junction-junction-connectivity' instead of 'connectivity'.",
      see: "https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",
      version: "4.29",
      warnOnce: true
    }), j;
  });
}
export {
  p2 as queryAssociations
};
//# sourceMappingURL=queryAssociations-CJRQLSH6.js.map
