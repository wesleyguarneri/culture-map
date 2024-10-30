import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-D2HCPUEP.js";
import "./chunk-4YRHCFPB.js";
import "./chunk-BQY5LM3B.js";
import {
  f as f2,
  i,
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

// ../../../node_modules/@arcgis/core/rest/networks/support/AssociationGeometriesResult.js
var p = class extends f {
  constructor(o) {
    super(o), this.maxGeometryCountExceeded = false, this.associations = [];
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p.prototype, "maxGeometryCountExceeded", void 0), e([y({
  type: [d],
  json: {
    write: true
  }
})], p.prototype, "associations", void 0), p = e([a("esri.rest.networks.support.AssociationGeometriesResult")], p);
var i2 = p;

// ../../../node_modules/@arcgis/core/rest/networks/synthesizeAssociationGeometries.js
function n(r, n2, c) {
  return __async(this, null, function* () {
    const a2 = f2(r), f3 = __spreadProps(__spreadValues({}, n2.toJSON()), {
      f: "json"
    }), m = s(__spreadValues(__spreadValues({}, a2.query), f3));
    c ? c.method = "post" : c = {
      method: "post"
    };
    const p2 = i(m, c), u = `${a2.path}/synthesizeAssociationGeometries`;
    return U(u, p2).then((o) => i3(o, n2.outSpatialReference));
  });
}
function i3(o, t) {
  const {
    data: e2
  } = o, s2 = i2.fromJSON(e2);
  if (t) for (const r of s2.associations) r.geometry.spatialReference = t.clone();
  return s2;
}
export {
  n as synthesizeAssociationGeometries
};
//# sourceMappingURL=synthesizeAssociationGeometries-PHMKD4U2.js.map
