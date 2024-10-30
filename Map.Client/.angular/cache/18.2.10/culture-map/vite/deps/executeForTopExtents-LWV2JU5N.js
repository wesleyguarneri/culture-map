import {
  d
} from "./chunk-CZACVZDW.js";
import "./chunk-UXW277HY.js";
import "./chunk-Z3GMSC63.js";
import "./chunk-F35MWZH7.js";
import "./chunk-ED7UGR2X.js";
import {
  f
} from "./chunk-YA5CTHMT.js";
import {
  S
} from "./chunk-B67FUUE5.js";
import "./chunk-W2IRSMFY.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-MNLT652N.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
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
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/query/executeForTopExtents.js
function a(a2, m, n) {
  return __async(this, null, function* () {
    const s = f(a2), i = yield d(s, S.from(m), __spreadValues({}, n)), u = i.data.extent;
    return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? {
      count: i.data.count,
      extent: null
    } : {
      count: i.data.count,
      extent: w.fromJSON(u)
    };
  });
}
export {
  a as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-LWV2JU5N.js.map
