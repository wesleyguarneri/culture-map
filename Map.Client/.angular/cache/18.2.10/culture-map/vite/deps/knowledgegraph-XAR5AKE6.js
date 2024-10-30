import {
  n as n2,
  p as p2
} from "./chunk-IM5W3NWZ.js";
import {
  l
} from "./chunk-LZNBGZUA.js";
import {
  t
} from "./chunk-KNXGNI77.js";
import {
  N
} from "./chunk-FAW72HJW.js";
import {
  $,
  E2 as E,
  G2 as G,
  He,
  K,
  P,
  U,
  X,
  a,
  ae,
  ee,
  me,
  q,
  r,
  re,
  te
} from "./chunk-WD7XZJEZ.js";
import "./chunk-ADI7256P.js";
import {
  s as s2
} from "./chunk-AX5IV6EC.js";
import {
  c,
  m,
  p,
  t as t2
} from "./chunk-CI7E4T7M.js";
import "./chunk-UOW7A3SI.js";
import "./chunk-F35MWZH7.js";
import "./chunk-YA5CTHMT.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-DWASPXVI.js";
import {
  K as K2,
  W,
  _
} from "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-GWC3DAGP.js";
import "./chunk-EODIWR2E.js";
import "./chunk-LLDOZWVV.js";
import {
  S
} from "./chunk-FYAEQPUY.js";
import {
  C
} from "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import {
  R,
  d,
  n
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
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
import {
  s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/arcade/functions/knowledgegraph.js
var F = null;
function J(r2) {
  return __async(this, null, function* () {
    const t3 = s.geometryServiceUrl ?? "";
    if (!t3) {
      _() || (yield W());
      for (const e of r2) e.container[e.indexer] = K2(e.container[e.indexer], f.WGS84);
      return;
    }
    const n3 = r2.map((e) => e.container[e.indexer]), o = new p2({
      geometries: n3,
      outSpatialReference: f.WGS84
    }), a2 = yield n2(t3, o);
    for (let e = 0; e < a2.length; e++) {
      const t4 = r2[e];
      t4.container[t4.indexer] = a2[e];
    }
  });
}
function M(e, r2) {
  return __async(this, null, function* () {
    const t3 = new S({
      portal: e,
      id: r2
    });
    return yield t3.load(), null === F && (F = yield import("./knowledgeGraphService-3IQP7N46.js")), yield F.fetchKnowledgeGraph(t3.url);
  });
}
function Q(e, r2, t3, n3, o) {
  if (null === e) return null;
  if (G(e) || E(e)) return e;
  if (X(e)) return e.toJSDate();
  if (X(e)) return e.toJSDate();
  if (ee(e)) return e.toStorageFormat();
  if (te(e)) return e.toStorageString();
  if (K(e)) {
    const a2 = {};
    for (const i of e.keys()) a2[i] = Q(e.field(i), r2, t3, n3, o), a2[i] instanceof n && o.push({
      container: a2,
      indexer: i
    });
    return a2;
  }
  if (U(e)) {
    const a2 = e.map((e2) => Q(e2, r2, t3, n3, o));
    for (let e2 = 0; e2 < a2.length; e2++) a2[e2] instanceof n && o.push({
      container: a2,
      indexer: e2
    });
    return a2;
  }
  return q(e) ? e.spatialReference.isWGS84 ? e : e.spatialReference.isWebMercator && r2 ? R(e) : e : void 0;
}
function E2(e, r2) {
  if (!e) return e;
  if (e.spatialReference.isWGS84 && r2.spatialReference.isWebMercator) return d(e);
  if (e.spatialReference.equals(r2.spatialReference)) return e;
  throw new a(r2, r.WrongSpatialReference, null);
}
function K3(e, r2) {
  if (!e) return null;
  const t3 = {};
  for (const n3 in e) t3[n3] = V(e[n3], r2);
  return t3;
}
function V(e, r2) {
  return null === e ? null : U(e) ? e.map((e2) => V(e2, r2)) : e instanceof m ? {
    graphTypeName: e.typeName,
    id: e.id,
    graphType: "entity",
    properties: K3(e.properties, r2)
  } : e instanceof t2 ? {
    graphType: "object",
    properties: K3(e.properties, r2)
  } : e instanceof p ? {
    graphTypeName: e.typeName,
    id: e.id,
    graphType: "relationship",
    originId: e.originId ?? null,
    destinationId: e.destinationId ?? null,
    properties: K3(e.properties, r2)
  } : e instanceof c ? {
    graphType: "path",
    path: e.path ? e.path.map((e2) => V(e2, r2)) : null
  } : q(e) ? E2(e, r2) : G(e) || E(e) || re(e) ? e : null;
}
function C2(e) {
  "async" === e.mode && (e.functions.knowledgegraphbyportalitem = function(t3, p3) {
    return e.standardFunctionAsync(t3, p3, (e2, l2, c2) => {
      if (ae(c2, 2, 2, t3, p3), null === c2[0]) throw new a(t3, r.PortalRequired, p3);
      if (c2[0] instanceof t) {
        const e3 = me(c2[1]);
        let r2;
        r2 = t3.services?.portal ? t3.services.portal : C.getDefault();
        return M(l(c2[0], r2), e3);
      }
      if (false === G(c2[0])) throw new a(t3, r.InvalidParameter, p3);
      const f2 = me(c2[0]);
      return M(t3.services?.portal ?? C.getDefault(), f2);
    });
  }, e.signatures.push({
    name: "knowledgegraphbyportalitem",
    min: 2,
    max: 2
  }), e.functions.querygraph = function(r2, i) {
    return e.standardFunctionAsync(r2, i, (e2, u, m2) => __async(this, null, function* () {
      ae(m2, 2, 4, r2, i);
      const d2 = m2[0];
      if (!$(d2)) throw new a(r2, r.InvalidParameter, i);
      const g = m2[1];
      if (!G(g)) throw new a(r2, r.InvalidParameter, i);
      null === F && (F = yield import("./knowledgeGraphService-3IQP7N46.js"));
      let h = null;
      const w = P(m2[2], null);
      if (!(w instanceof N || null === w)) throw new a(r2, r.InvalidParameter, i);
      if (w) {
        let e3 = [];
        h = Q(w, true, false, r2, e3), e3 = e3.filter((e4) => !e4.container[e4.indexer].spatialReference.isWGS84), e3.length > 0 && (yield J(e3));
      }
      const y = new s2({
        openCypherQuery: g,
        bindParameters: h
      });
      (d2?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (y.outputSpatialReference = r2.spatialReference);
      const j = (yield F.executeQueryStreaming(d2, y)).resultRowsStream.getReader(), S2 = [];
      try {
        for (; ; ) {
          const {
            done: e3,
            value: t3
          } = yield j.read();
          if (e3) break;
          if (U(t3)) for (const n3 of t3) S2.push(V(n3, r2));
          else {
            const e4 = [];
            for (const n3 of t3) e4.push(V(t3[n3], r2));
            S2.push(e4);
          }
        }
      } catch (v) {
        throw v;
      }
      return N.convertJsonToArcade(S2, He(r2), false, true);
    }));
  }, e.signatures.push({
    name: "querygraph",
    min: 2,
    max: 4
  }));
}
export {
  C2 as registerFunctions
};
//# sourceMappingURL=knowledgegraph-XAR5AKE6.js.map
