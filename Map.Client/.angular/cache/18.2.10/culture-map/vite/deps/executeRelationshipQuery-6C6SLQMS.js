import {
  t
} from "./chunk-UXW277HY.js";
import {
  f
} from "./chunk-YA5CTHMT.js";
import {
  d as d3
} from "./chunk-YPU2P4KO.js";
import {
  d as d2
} from "./chunk-UFVMJL32.js";
import "./chunk-WYKKCLBI.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-DWASPXVI.js";
import "./chunk-HD65DNIO.js";
import "./chunk-4KWLMXIA.js";
import "./chunk-BIUXKPKA.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-6A7CWJED.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-6EUVKE22.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
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
import {
  d2 as d
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
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
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
function r(e, o) {
  const r2 = e.toJSON();
  return r2.objectIds && (r2.objectIds = r2.objectIds.join(",")), r2.orderByFields && (r2.orderByFields = r2.orderByFields.join(",")), r2.outFields && !o?.returnCountOnly ? r2.outFields.includes("*") ? r2.outFields = "*" : r2.outFields = r2.outFields.join(",") : delete r2.outFields, r2.outSR && (r2.outSR = d(r2.outSR)), r2.dynamicDataSource && (r2.layer = JSON.stringify({
    source: r2.dynamicDataSource
  }), delete r2.dynamicDataSource), r2;
}
function s(e, t2, o) {
  return __async(this, null, function* () {
    const r2 = yield a(e, t2, o), s2 = r2.data, n3 = s2.geometryType, d4 = s2.spatialReference, c = {};
    for (const a2 of s2.relatedRecordGroups) {
      const e2 = {
        fields: void 0,
        objectIdFieldName: void 0,
        geometryType: n3,
        spatialReference: d4,
        hasZ: !!s2.hasZ,
        hasM: !!s2.hasM,
        features: a2.relatedRecords
      };
      if (null != a2.objectId) c[a2.objectId] = e2;
      else for (const t3 of Object.keys(a2)) "relatedRecords" !== t3 && (c[a2[t3]] = e2);
    }
    return __spreadProps(__spreadValues({}, r2), {
      data: c
    });
  });
}
function n(e, t2, o) {
  return __async(this, null, function* () {
    const r2 = yield a(e, t2, o, {
      returnCountOnly: true
    }), s2 = r2.data, n3 = {};
    for (const a2 of s2.relatedRecordGroups) null != a2.objectId && (n3[a2.objectId] = a2.count);
    return __spreadProps(__spreadValues({}, r2), {
      data: n3
    });
  });
}
function a(_0, _1) {
  return __async(this, arguments, function* (t2, s2, n3 = {}, a2) {
    const d4 = t(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, t2.query), {
      f: "json"
    }), a2), r(s2, a2)));
    return U(t2.path + "/queryRelatedRecords", __spreadProps(__spreadValues({}, n3), {
      query: __spreadValues(__spreadValues({}, n3.query), d4)
    }));
  });
}

// ../../../node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
function n2(e, n3, u2) {
  return __async(this, null, function* () {
    n3 = d3.from(n3);
    const a2 = f(e);
    return s(a2, n3, u2).then((t2) => {
      const r2 = t2.data, e2 = {};
      return Object.keys(r2).forEach((t3) => e2[t3] = d2.fromJSON(r2[t3])), e2;
    });
  });
}
function u(r2, o, n3) {
  return __async(this, null, function* () {
    o = d3.from(o);
    const u2 = f(r2);
    return n(u2, o, __spreadValues({}, n3)).then((t2) => t2.data);
  });
}
export {
  n2 as executeRelationshipQuery,
  u as executeRelationshipQueryForCount
};
//# sourceMappingURL=executeRelationshipQuery-6C6SLQMS.js.map
