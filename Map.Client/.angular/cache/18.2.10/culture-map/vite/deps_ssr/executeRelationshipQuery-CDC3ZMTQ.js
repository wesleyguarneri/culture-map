import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-OO7WNZEW.js";
import {
  f
} from "./chunk-FDI2X6GO.js";
import {
  d as d3
} from "./chunk-UUQ5O7GK.js";
import {
  d as d2
} from "./chunk-6XY35LS7.js";
import "./chunk-VQNXE43R.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-NVOJILW6.js";
import "./chunk-KYPTWEOO.js";
import "./chunk-WVFB3H4O.js";
import "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-IUPJR3FF.js";
import "./chunk-TGZW6QWO.js";
import "./chunk-OYIDHTXG.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  d2 as d
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
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
//# sourceMappingURL=executeRelationshipQuery-CDC3ZMTQ.js.map
