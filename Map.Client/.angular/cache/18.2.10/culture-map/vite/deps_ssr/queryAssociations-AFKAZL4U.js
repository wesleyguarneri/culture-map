import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-D2HCPUEP.js";
import "./chunk-4YRHCFPB.js";
import {
  i as i3
} from "./chunk-BQY5LM3B.js";
import {
  f as f2,
  i as i2,
  s
} from "./chunk-FDI2X6GO.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
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
import {
  i
} from "./chunk-NXK752PZ.js";
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
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=queryAssociations-AFKAZL4U.js.map
