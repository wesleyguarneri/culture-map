import {
  r
} from "./chunk-KDJZAYOF.js";
import {
  c
} from "./chunk-5453A3C5.js";
import {
  p
} from "./chunk-HCFDI7IX.js";
import {
  A
} from "./chunk-AQJS6F3O.js";
import {
  d
} from "./chunk-YPU2P4KO.js";
import {
  b as b2
} from "./chunk-TRSGUVSM.js";
import {
  h5 as h
} from "./chunk-634JLXD4.js";
import {
  x
} from "./chunk-JM7HAEY6.js";
import {
  e
} from "./chunk-JCWFGRHQ.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  t3 as t
} from "./chunk-SYATLP3H.js";
import {
  b
} from "./chunk-XNUH25NY.js";
import {
  u3 as u
} from "./chunk-DDYVXG4F.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/featureLayerUtils.js
var y = new n({
  esriGeometryPoint: "point",
  esriGeometryMultipoint: "multipoint",
  esriGeometryPolyline: "polyline",
  esriGeometryPolygon: "polygon",
  esriGeometryMultiPatch: "multipatch"
});
function m(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (yield h2(t2, e2, o), !a.addAttachment) throw new s(o, "Layer source does not support addAttachment capability");
    return a.addAttachment(e2, r2);
  });
}
function h2(t2, e2, r2) {
  const {
    attributes: o
  } = e2, {
    objectIdField: a
  } = t2;
  return t2.capabilities?.data?.supportsAttachment ? e2 ? o ? a && o[a] ? Promise.resolve() : Promise.reject(new s(r2, `feature is missing the identifying attribute ${a}`)) : Promise.reject(new s(r2, "'attributes' are required on a feature to query attachments")) : Promise.reject(new s(r2, "A feature is required to add/delete/update attachments")) : Promise.reject(new s(r2, "this layer doesn't support attachments"));
}
function w(t2, e2, r2, o, a) {
  return __async(this, null, function* () {
    const i = yield G(t2);
    if (yield h2(t2, e2, a), !i.updateAttachment) throw new s(a, "Layer source does not support updateAttachment capability");
    return i.updateAttachment(e2, r2, o);
  });
}
function b3(t2, e2, r2) {
  return __async(this, null, function* () {
    const {
      applyEdits: n2
    } = yield import("./editingSupport-PGDNTLCW.js"), o = yield t2.load();
    let a = r2;
    return "feature" === o.type && o.infoFor3D && null != e2.deleteFeatures && null != o.globalIdField && (a = __spreadProps(__spreadValues({}, a), {
      globalIdToObjectId: yield J(o, e2.deleteFeatures, o.globalIdField)
    })), n2(o, o.source, e2, r2);
  });
}
function g(t2, e2, r2) {
  return __async(this, null, function* () {
    const {
      uploadAssets: n2
    } = yield import("./editingSupport-PGDNTLCW.js"), o = yield t2.load();
    return n2(o, o.source, e2, r2);
  });
}
function j(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (yield h2(t2, e2, o), !a.deleteAttachments) throw new s(o, "Layer source does not support deleteAttachments capability");
    return a.deleteAttachments(e2, r2);
  });
}
function I(t2, e2, r2) {
  return __async(this, null, function* () {
    const o = (yield t2.load({
      signal: e2?.signal
    })).source;
    if (!o.fetchRecomputedExtents) throw new s(r2, "Layer source does not support fetchUpdates capability");
    return o.fetchRecomputedExtents(e2);
  });
}
function q(t2, e2, r2, o) {
  return __async(this, null, function* () {
    e2 = c.from(e2), yield t2.load();
    const a = t2.source, i = t2.capabilities;
    if (!i?.data?.supportsAttachment) throw new s(o, "this layer doesn't support attachments");
    const {
      attachmentTypes: s2,
      objectIds: u2,
      globalIds: l,
      num: c2,
      size: d2,
      start: f,
      where: y2
    } = e2;
    if (!i?.operations?.supportsQueryAttachments) {
      if (s2?.length > 0 || l?.length > 0 || d2?.length > 0 || c2 || f || y2) throw new s(o, "when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported", e2);
    }
    if (!(u2?.length || l?.length || y2)) throw new s(o, "'objectIds', 'globalIds', or 'where' are required to perform attachment query", e2);
    if (!a.queryAttachments) throw new s(o, "Layer source does not support queryAttachments capability", e2);
    return a.queryAttachments(e2);
  });
}
function F(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (!a.queryObjectIds) throw new s(o, "Layer source does not support queryObjectIds capability");
    return a.queryObjectIds(b2.from(e2) ?? t2.createQuery(), r2);
  });
}
function A2(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (!a.queryFeatureCount) throw new s(o, "Layer source does not support queryFeatureCount capability");
    return a.queryFeatureCount(b2.from(e2) ?? t2.createQuery(), r2);
  });
}
function O(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (!a.queryExtent) throw new s(o, "Layer source does not support queryExtent capability");
    return a.queryExtent(b2.from(e2) ?? t2.createQuery(), r2);
  });
}
function P(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (!a.queryRelatedFeatures) throw new s(o, "Layer source does not support queryRelatedFeatures capability");
    return a.queryRelatedFeatures(d.from(e2), r2);
  });
}
function S(t2, e2, r2, o) {
  return __async(this, null, function* () {
    const a = yield G(t2);
    if (!a.queryRelatedFeaturesCount) throw new s(o, "Layer source does not support queryRelatedFeaturesCount capability");
    return a.queryRelatedFeaturesCount(d.from(e2), r2);
  });
}
function E(t2) {
  return __async(this, null, function* () {
    const e2 = t2.source;
    if (e2?.refresh) try {
      const {
        dataChanged: r2,
        updates: n2
      } = yield e2.refresh();
      if (null != n2 && (t2.sourceJSON = __spreadValues(__spreadValues({}, t2.sourceJSON), n2), t2.read(n2, {
        origin: "service",
        url: t2.parsedUrl
      })), r2) return true;
    } catch {
    }
    if (t2.definitionExpression) try {
      return (yield e(t2.definitionExpression, t2.fieldsIndex)).hasDateFunctions;
    } catch {
    }
    return false;
  });
}
function x2(t2) {
  const e2 = new b2(), r2 = t2.capabilities?.data, n2 = t2.capabilities?.query;
  e2.historicMoment = t2.historicMoment, e2.gdbVersion = t2.gdbVersion, e2.returnGeometry = true, n2 && (e2.compactGeometryEnabled = n2.supportsCompactGeometry, e2.defaultSpatialReferenceEnabled = n2.supportsDefaultSpatialReference), r2 && (r2.supportsZ && null != t2.returnZ && (e2.returnZ = t2.returnZ), r2.supportsM && null != t2.returnM && (e2.returnM = t2.returnM)), e2.outFields = ["*"];
  const {
    timeOffset: o,
    timeExtent: a
  } = t2;
  return e2.timeExtent = null != o && null != a ? a.offset(-o.value, o.unit) : a || null, e2.multipatchOption = "multipatch" === t2.geometryType ? "xyFootprint" : null, e2;
}
function R(t2) {
  const {
    globalIdField: e2,
    fields: r2
  } = t2;
  if (e2) return e2;
  if (r2) {
    for (const n2 of r2) if ("esriFieldTypeGlobalID" === n2.type) return n2.name;
  }
}
function M(t2) {
  const {
    objectIdField: e2,
    fields: r2
  } = t2;
  if (e2) return e2;
  if (r2) {
    for (const n2 of r2) if ("esriFieldTypeOID" === n2.type) return n2.name;
  }
}
function C(t2) {
  return t2.currentVersion ? t2.currentVersion : t2.hasOwnProperty("capabilities") || t2.hasOwnProperty("drawingInfo") || t2.hasOwnProperty("hasAttachments") || t2.hasOwnProperty("htmlPopupType") || t2.hasOwnProperty("relationships") || t2.hasOwnProperty("timeInfo") || t2.hasOwnProperty("typeIdField") || t2.hasOwnProperty("types") ? 10 : 9.3;
}
function L(t2, e2) {
  const {
    subtypes: r2,
    subtypeField: n2
  } = t2;
  if (!e2 || !r2?.length || !n2) return null;
  const o = e2.attributes[n2];
  return null == o ? null : r2.find((t3) => t3.code === o);
}
function G(t2) {
  return __async(this, null, function* () {
    return (yield t2.load()).source;
  });
}
function Q(e2, r2) {
  return __async(this, null, function* () {
    if (!t) return;
    if (t.findCredential(e2)) return;
    let n2;
    try {
      const o = yield x(e2, r2);
      o && (n2 = yield t.checkSignInStatus(`${o}/sharing`));
    } catch (o) {
    }
    if (n2) try {
      const n3 = null != r2 ? r2.signal : null;
      yield t.getCredential(e2, {
        signal: n3
      });
    } catch (o) {
    }
  });
}
function T(t2, e2, r2) {
  return __async(this, null, function* () {
    const n2 = t2.parsedUrl?.path;
    n2 && t2.authenticationTriggerEvent === e2 && (yield Q(n2, r2));
  });
}
function v(t2) {
  return !Z(t2) && (t2.userHasUpdateItemPrivileges || t2.editingEnabled);
}
var D = u({
  types: h
});
function U(t2, e2) {
  if (t2.defaultSymbol) return t2.types?.length ? new A({
    defaultSymbol: D(t2.defaultSymbol, t2, e2),
    field: t2.typeIdField,
    uniqueValueInfos: t2.types.map((t3) => ({
      id: t3.id,
      symbol: D(t3.symbol, t3, e2)
    }))
  }) : new p({
    symbol: D(t2.defaultSymbol, t2, e2)
  });
}
function V(t2) {
  let e2 = t2.sourceJSON?.cacheMaxAge;
  if (!e2) return false;
  const r2 = t2.editingInfo?.lastEditDate?.getTime();
  return null == r2 || (e2 *= 1e3, Date.now() - r2 < e2);
}
function J(t2, e2, n2) {
  return __async(this, null, function* () {
    if (null == e2) return null;
    const o = [], {
      objectIdField: a
    } = t2;
    if (e2.forEach((t3) => {
      let e3 = null;
      if ("attributes" in t3) {
        const {
          attributes: r2
        } = t3;
        e3 = {
          globalId: r2[n2],
          objectId: null != r2[a] && -1 !== r2[a] ? r2[a] : null
        };
      } else e3 = {
        globalId: t3.globalId,
        objectId: null != t3.objectId && -1 !== t3.objectId ? t3.objectId : null
      };
      null != e3.globalId && (null != e3.objectId && -1 !== e3.objectId || o.push(e3.globalId));
    }), 0 === o.length) return null;
    const i = t2.createQuery();
    i.where = o.map((t3) => `${n2}='${t3}'`).join(" OR "), i.returnGeometry = false, i.outFields = [a, n2], i.cacheHint = false;
    const u2 = yield b(r(t2, i));
    if (!u2.ok) return null;
    const l = /* @__PURE__ */ new Map(), c2 = u2.value.features;
    for (const r2 of c2) {
      const t3 = r2.attributes[n2], e3 = r2.attributes[a];
      null != t3 && null != e3 && -1 !== e3 && l.set(t3, e3);
    }
    return l;
  });
}
function N(t2, e2, r2) {
  if (!e2 || !r2 || !t2) return null;
  const n2 = r2.getAttribute(e2);
  return null == n2 ? null : t2.find((t3) => {
    const {
      id: e3
    } = t3;
    return null != e3 && e3.toString() === n2.toString();
  }) ?? null;
}
function Z(t2) {
  return t2.sourceJSON?.isMultiServicesView || $(t2);
}
function $(t2) {
  return !!t2.sourceJSON?.capabilities?.toLowerCase().split(",").map((t3) => t3.trim()).includes("map");
}

export {
  y,
  m,
  w,
  b3 as b,
  g,
  j,
  I,
  q,
  F,
  A2 as A,
  O,
  P,
  S,
  E,
  x2 as x,
  R,
  M,
  C,
  L,
  Q,
  T,
  v,
  U,
  V,
  J,
  N,
  Z
};
//# sourceMappingURL=chunk-JFYQTYD3.js.map
