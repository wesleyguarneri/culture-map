import {
  d
} from "./chunk-6XDEYSEU.js";
import "./chunk-7NERSLA5.js";
import "./chunk-2ACBZNFZ.js";
import {
  f as f2,
  i,
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
//# sourceMappingURL=synthesizeAssociationGeometries-JFDFLE4J.js.map
