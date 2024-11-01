import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-GBPPBJPA.js";
import {
  Ze
} from "./chunk-FJ3AI2QH.js";
import {
  d as d2
} from "./chunk-6XY35LS7.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  i
} from "./chunk-JKPUNUQA.js";
import {
  m,
  n,
  n2
} from "./chunk-ABIG6PT5.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  a,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade.js
var p = null;
function f(e, t2, a2, n3 = {}) {
  const o = t2.elementType, s2 = "value", c = "array" === o.type ? [{
    name: s2,
    type: o.type,
    elementType: o.elementType
  }] : "dictionary" === o.type ? [{
    name: s2,
    type: o.type,
    properties: o.properties
  }] : [{
    name: s2,
    type: o.type
  }];
  return new t(e.map((e2) => {
    const t3 = {};
    return b(t3, c, {
      [s2]: e2
    }, a2, n3), t3[s2];
  }));
}
function m2(e, t2, r = {}) {
  const a2 = e instanceof d2 ? new Ze({
    source: e.features,
    geometryType: e.geometryType,
    fields: e.fields,
    spatialReference: e.spatialReference
  }) : e;
  return t2.constructFeatureSet(a2, r.spatialReference, null, true, r.lruCache, r.interceptor);
}
function y(e, t2, r = {}) {
  const {
    spatialReference: a2,
    interceptor: n3,
    lruCache: o
  } = r;
  return "string" == typeof e ? t2.createFeatureSetCollectionFromService(e, a2, o, n3) : t2.createFeatureSetCollectionFromMap(e, a2, o, n3);
}
function d3(e, t2, r, a2 = {}) {
  const n3 = {};
  return b(n3, t2.properties, e, r, a2), new p.Dictionary(n3);
}
function b(e, r, a2, n3, c = {}) {
  const i2 = {};
  for (const t2 of Object.keys(a2)) i2[t2.toLowerCase()] = a2[t2];
  for (const l of r) {
    const r2 = l.name.toLowerCase();
    if (c.variablesPreProcessed) e[r2] = i2[r2];
    else switch (l.type) {
      case "array": {
        const t2 = i2[r2];
        e[r2] = null == t2 ? null : f(t2, l, n3, c);
        break;
      }
      case "feature": {
        const t2 = i2[r2];
        e[r2] = null == t2 ? null : p.Feature.createFromGraphic(t2, c?.timeZone);
        break;
      }
      case "featureSet": {
        const t2 = i2[r2];
        e[r2] = null == t2 ? null : n3 ? m2(t2, n3, c) : null;
        break;
      }
      case "featureSetCollection": {
        const t2 = i2[r2];
        e[r2] = null == t2 ? null : n3 ? y(t2, n3, c) : null;
        break;
      }
      case "dictionary": {
        const t2 = i2[r2];
        e[r2] = null == t2 ? null : d3(t2, l, n3, c);
        break;
      }
      case "date": {
        const a3 = i2[r2];
        e[r2] = a3 ? a3 instanceof m ? a3 : c?.timeZone ? m.dateJSAndZoneToArcadeDate(a3, c?.timeZone) : m.dateJSToArcadeDate(a3) : null;
        break;
      }
      case "dateOnly": {
        const t2 = i2[r2];
        e[r2] = t2 ? t2 instanceof n ? t2 : n.fromReader(t2) : null;
        break;
      }
      case "time": {
        const t2 = i2[r2];
        e[r2] = t2 ? t2 instanceof n2 ? t2 : n2.fromReader(t2) : null;
        break;
      }
      case "knowledgeGraph":
      case "geometry":
      case "boolean":
      case "text":
      case "number":
        e[r2] = i2[r2];
    }
  }
}
function v(e, t2) {
  for (const r of e) t2.push(r), "dictionary" === r.type && v(r.properties, t2);
  return t2;
}
function S(e, t2, r, a2, n3) {
  const {
    spatialReference: o,
    interceptor: s2,
    lruCache: c,
    console: l,
    abortSignal: u,
    timeZone: p2,
    services: f2 = {
      portal: C.getDefault()
    }
  } = r, m3 = {
    vars: {},
    spatialReference: o,
    interceptor: s2,
    timeZone: p2,
    lrucache: c,
    useAsync: n3,
    services: f2,
    console: l,
    abortSignal: u
  };
  return t2 ? (b(m3.vars, e.variables, t2, a2, r), m3) : m3;
}
function g(t2, r) {
  switch (r.getArcadeType(t2)) {
    case "number":
    case "text":
    case "boolean":
    case "point":
    case "polygon":
    case "polyline":
    case "multipoint":
    case "extent":
      return t2;
    case "date":
      return t2.toJSDate();
    case "time":
    case "dateOnly":
      return t2.toString();
    case "feature": {
      const r2 = (t2.type, t2), a2 = "geometry" in r2 ? r2.geometry() : null, n3 = "readAttributes" in r2 ? r2.readAttributes() : r2.attributes;
      return new d({
        geometry: a2,
        attributes: n3
      });
    }
    case "dictionary": {
      const e = t2, a2 = e.attributes, n3 = {};
      for (const t3 of Object.keys(a2)) n3[t3] = g(e.field(t3), r);
      return n3;
    }
    case "array":
      return ("toArray" in t2 ? t2.toArray() : t2).map((e) => g(e, r));
  }
  return t2;
}
var w = {
  variables: [{
    name: "$feature",
    type: "feature"
  }, {
    name: "$layer",
    type: "featureSet"
  }, {
    name: "$datastore",
    type: "featureSetCollection"
  }, {
    name: "$map",
    type: "featureSetCollection"
  }, {
    name: "$userInput",
    type: "geometry"
  }, {
    name: "$graph",
    type: "knowledgeGraph"
  }]
};
var $ = {
  variables: [{
    name: "$feature",
    type: "feature"
  }, {
    name: "$aggregatedFeatures",
    type: "featureSet"
  }]
};
var h = /* @__PURE__ */ new Map([["aggregate-field", {
  variables: [{
    name: "$feature",
    type: "feature"
  }]
}], ["form-constraint", {
  variables: [{
    name: "$feature",
    type: "feature"
  }]
}], ["feature-z", {
  variables: [{
    name: "$feature",
    type: "feature"
  }]
}], ["field-calculation", {
  variables: [{
    name: "$feature",
    type: "feature"
  }, {
    name: "$datastore",
    type: "featureSetCollection"
  }]
}], ["form-calculation", {
  variables: [{
    name: "$feature",
    type: "feature"
  }, {
    name: "$originalFeature",
    type: "feature"
  }, {
    name: "$layer",
    type: "featureSet"
  }, {
    name: "$featureSet",
    type: "featureSet"
  }, {
    name: "$datastore",
    type: "featureSetCollection"
  }, {
    name: "$map",
    type: "featureSetCollection"
  }, {
    name: "$editContext",
    type: "dictionary",
    properties: [{
      name: "editType",
      type: "text"
    }]
  }]
}], ["labeling", {
  variables: [{
    name: "$feature",
    type: "feature"
  }]
}], ["popup", w], ["popup-element", w], ["feature-reduction-popup", $], ["feature-reduction-popup-element", $], ["visualization", {
  variables: [{
    name: "$feature",
    type: "feature"
  }, {
    name: "$view",
    type: "dictionary",
    properties: [{
      name: "scale",
      type: "number"
    }]
  }]
}]]);
function C2(e) {
  const t2 = h.get(e);
  if (!t2) {
    const t3 = Array.from(h.keys()).map((e2) => `'${e2}'`).join(", ");
    throw new s("createArcadeProfile:invalid-profile-name", `Invalid profile name '${e}'. You must specify one of the following values: ${t3}`);
  }
  return a(t2);
}
function A(_0, _1) {
  return __async(this, arguments, function* (e, t2, r = {}) {
    p || (p = yield i());
    const {
      arcade: n3,
      arcadeUtils: o
    } = p, {
      loadScriptDependencies: s2,
      referencesMember: c,
      scriptIsAsync: i2
    } = n3, l = v(t2.variables, []), f2 = l.filter((e2) => "featureSet" === e2.type || "featureSetCollection" === e2.type).map((e2) => e2.name.toLowerCase()), m3 = n3.parseScript(e, f2);
    if (!m3) throw new s("arcade:invalid-script", "Unable to create SyntaxTree");
    const y2 = o.extractFieldNames(m3), d4 = n3.scriptTouchesGeometry(m3), b2 = l.map((e2) => e2.name.toLowerCase()).filter((e2) => c(m3, e2)), w2 = i2(m3, f2);
    yield s2(m3, w2, f2);
    const $2 = {
      vars: {},
      spatialReference: null,
      useAsync: w2
    };
    for (const a2 of b2) $2.vars[a2] = "any";
    const {
      lruCache: h2
    } = r, C3 = n3.compileScript(m3, $2), A2 = n3.featureSetUtils(), {
      services: j
    } = r;
    return {
      execute: (e2, r2 = {}) => {
        if (w2) throw new s("arcade:invalid-execution-mode", "Cannot execute the script in synchronous mode");
        const n4 = C3(S(t2, e2, __spreadValues({
          lruCache: h2
        }, r2), A2, w2));
        return r2.rawOutput ? n4 : g(n4, o);
      },
      executeAsync: (_02, ..._12) => __async(this, [_02, ..._12], function* (e2, r2 = {}) {
        const a2 = yield C3(S(t2, e2, __spreadValues({
          lruCache: h2,
          services: j
        }, r2), A2, w2));
        return r2.rawOutput ? a2 : g(a2, o);
      }),
      isAsync: w2,
      variablesUsed: b2,
      fieldsUsed: y2,
      geometryUsed: d4,
      syntaxTree: m3
    };
  });
}

export {
  C2 as C,
  A
};
//# sourceMappingURL=chunk-2ZELMUDG.js.map
