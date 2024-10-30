import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2,
  p as p2
} from "./chunk-GJ3FZNZ2.js";
import {
  l
} from "./chunk-DMKOSZH7.js";
import {
  t
} from "./chunk-A2K6JP2G.js";
import {
  N
} from "./chunk-REOQMQ44.js";
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
} from "./chunk-M633ZBOT.js";
import "./chunk-GBPPBJPA.js";
import {
  s as s2
} from "./chunk-PGTI2BU4.js";
import {
  c,
  m,
  p,
  t as t2
} from "./chunk-HP5U6UA4.js";
import "./chunk-PDBJ6G5O.js";
import "./chunk-AOGKNBDG.js";
import "./chunk-FDI2X6GO.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-6EIBUVMG.js";
import {
  K as K2,
  W,
  _
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-ABIG6PT5.js";
import "./chunk-ZEZ3LI2L.js";
import "./chunk-N34BRXVM.js";
import {
  S
} from "./chunk-KETDH2J4.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import {
  R,
  d,
  n
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
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
import {
  s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
    return yield t3.load(), null === F && (F = yield import("./knowledgeGraphService-6Q6K7UXT.js")), yield F.fetchKnowledgeGraph(t3.url);
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
      null === F && (F = yield import("./knowledgeGraphService-6Q6K7UXT.js"));
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
//# sourceMappingURL=knowledgegraph-UMFWRTMW.js.map
