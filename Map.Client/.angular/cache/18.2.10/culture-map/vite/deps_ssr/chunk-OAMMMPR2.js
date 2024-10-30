import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  N
} from "./chunk-2H3S7IXI.js";
import {
  $,
  v
} from "./chunk-NTSKCH4Y.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  J,
  L,
  Q
} from "./chunk-LM3JDV4W.js";
import {
  y
} from "./chunk-4DSGTDZJ.js";
import {
  G,
  z
} from "./chunk-6SSA7P3A.js";
import {
  Wt
} from "./chunk-XLEC46FY.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js
function m(t, e, r) {
  return __async(this, null, function* () {
    const {
      geometry: o
    } = e, i = __spreadValues({}, e.attributes);
    if (null != r && "mesh" === o?.type) {
      const {
        transformFieldRoles: e2
      } = r, {
        origin: c,
        spatialReference: p,
        vertexSpace: m2
      } = o, f2 = o.transform ?? new N(), g2 = "local" === m2.type, b2 = t.spatialReference, y3 = b2.isGeographic, R2 = G(b2, p), h2 = L(p, b2) && J(p, b2);
      if (!(g2 && y3 && h2 || !g2 && !y3 && R2)) return null;
      const I2 = Q(c, p, b2);
      if (null == I2) return null;
      if (i[e2.originX] = I2.x, i[e2.originY] = I2.y, i[e2.originZ] = I2.z ?? 0, null != f2) {
        const {
          translation: t2,
          scale: r2,
          rotation: o2
        } = f2, s2 = g2 ? 1 : z(p) / z(b2);
        i[e2.translationX] = t2[0] * s2, i[e2.translationY] = t2[2] * s2, i[e2.translationZ] = -t2[1] * s2, i[e2.scaleX] = r2[0], i[e2.scaleY] = r2[2], i[e2.scaleZ] = r2[1], i[e2.rotationX] = o2[0], i[e2.rotationY] = o2[2], i[e2.rotationZ] = -o2[1], i[e2.rotationDeg] = o2[3];
      }
      return {
        attributes: i
      };
    }
    return null == o ? {
      attributes: i
    } : "mesh" === o.type || "extent" === o.type ? null : {
      geometry: o.toJSON(),
      attributes: i
    };
  });
}
function f(t, e) {
  return __async(this, null, function* () {
    const r = yield Promise.all((e.addAttachments ?? []).map((e2) => g(t, e2))), a = yield Promise.all((e.updateAttachments ?? []).map((e2) => g(t, e2))), o = e.deleteAttachments ?? [];
    return r.length || a.length || o.length ? {
      adds: r,
      updates: a,
      deletes: [...o]
    } : null;
  });
}
function g(t, e) {
  return __async(this, null, function* () {
    const {
      feature: r,
      attachment: a
    } = e, {
      globalId: s2,
      name: n2,
      contentType: l,
      data: i,
      uploadId: u
    } = a, d2 = {
      globalId: s2
    };
    if (r && ("attributes" in r ? d2.parentGlobalId = r.attributes?.[t.globalIdField] : r.globalId && (d2.parentGlobalId = r.globalId)), u) d2.uploadId = u;
    else if (i) {
      const t2 = yield Wt(i);
      t2 && (d2.contentType = t2.mediaType, d2.data = t2.data), i instanceof File && (d2.name = i.name);
    }
    return n2 && (d2.name = n2), l && (d2.contentType = l), d2;
  });
}
function b(t, e, r) {
  if (!e || 0 === e.length) return [];
  if (r && $(e)) return e.map((t2) => t2.globalId);
  if (v(e)) return e.map((t2) => t2.objectId);
  const a = r ? t.globalIdField : t.objectIdField;
  return a ? e.map((t2) => t2.getAttribute(a)) : [];
}
function y2(t) {
  const e = t?.assetMaps;
  if (e) {
    for (const t2 of e.addResults) t2.success || n.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t2.globalId}.`);
    for (const t2 of e.updateResults) t2.success || n.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t2.globalId}.`);
  }
  const a = t?.attachments, o = {
    addFeatureResults: t?.addResults?.map(R) ?? [],
    updateFeatureResults: t?.updateResults?.map(R) ?? [],
    deleteFeatureResults: t?.deleteResults?.map(R) ?? [],
    addAttachmentResults: a?.addResults ? a.addResults.map(R) : [],
    updateAttachmentResults: a?.updateResults ? a.updateResults.map(R) : [],
    deleteAttachmentResults: a?.deleteResults ? a.deleteResults.map(R) : []
  };
  return t?.editMoment && (o.editMoment = t.editMoment), o;
}
function R(t) {
  const r = true === t.success ? null : t.error || {
    code: void 0,
    description: void 0
  };
  return {
    objectId: t.objectId,
    globalId: t.globalId,
    error: r ? new s("feature-layer-source:edit-failure", r.description, {
      code: r.code
    }) : null
  };
}
function h(e, r) {
  return new d({
    attributes: e.attributes,
    geometry: y(__spreadProps(__spreadValues({}, e.geometry), {
      spatialReference: r
    }))
  });
}
function I(t, e) {
  return {
    adds: t?.adds?.map((t2) => h(t2, e)) || [],
    updates: t?.updates?.map((t2) => ({
      original: h(t2[0], e),
      current: h(t2[1], e)
    })) || [],
    deletes: t?.deletes?.map((t2) => h(t2, e)) || [],
    spatialReference: e
  };
}
function j(t) {
  const e = t.details.raw, r = +e.code, a = +e.extendedCode;
  return 500 === r && (-2147217144 === a || -2147467261 === a);
}

export {
  m,
  f,
  b,
  y2 as y,
  R,
  I,
  j
};
//# sourceMappingURL=chunk-OAMMMPR2.js.map
