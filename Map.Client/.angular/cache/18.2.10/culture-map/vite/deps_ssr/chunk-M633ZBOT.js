import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-GBPPBJPA.js";
import {
  p,
  s as s2
} from "./chunk-PDBJ6G5O.js";
import {
  y as y2
} from "./chunk-VZ37C3ID.js";
import {
  y
} from "./chunk-4DSGTDZJ.js";
import {
  j,
  m2,
  u
} from "./chunk-MRPCXIVS.js";
import {
  a
} from "./chunk-YTKVV2Y3.js";
import {
  h,
  m,
  n,
  n2 as n3
} from "./chunk-ABIG6PT5.js";
import {
  DateTime
} from "./chunk-N34BRXVM.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _,
  n as n2
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  c
} from "./chunk-AYL3HQHD.js";
import {
  r2
} from "./chunk-XLEC46FY.js";
import {
  S
} from "./chunk-AIZ3T7E3.js";
import {
  r,
  s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade/ArcadeModule.js
var s3 = class {
  constructor(s7) {
    this.source = s7;
  }
};

// ../../../node_modules/@arcgis/core/arcade/executionError.js
var r3;
!function(e2) {
  e2.AsyncNotEnabled = "AsyncNotEnabled", e2.ModulesNotSupported = "ModulesNotSupported", e2.CircularModules = "CircularModules", e2.CannotCompareDateAndTime = "CannotCompareDateAndTime", e2.NeverReach = "NeverReach", e2.UnsupportedHashType = "UnsupportedHashType", e2.InvalidParameter = "InvalidParameter", e2.FeatureSetDoesNotHaveSubtypes = "FeatureSetDoesNotHaveSubtypes", e2.UnexpectedToken = "UnexpectedToken", e2.Unrecognized = "Unrecognized", e2.UnrecognizedType = "UnrecognizedType", e2.MaximumCallDepth = "MaximumCallDepth", e2.BooleanConditionRequired = "BooleanConditionRequired", e2.TypeNotAllowedInFeature = "TypeNotAllowedInFeature", e2.KeyMustBeString = "KeyMustBeString", e2.WrongNumberOfParameters = "WrongNumberOfParameters", e2.CallNonFunction = "CallNonFunction", e2.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral", e2.NoFunctionInDictionary = "NoFunctionInDictionary", e2.NoFunctionInArray = "NoFunctionInArray", e2.AssignModuleFunction = "AssignModuleFunction", e2.LogicExpressionOrAnd = "LogicExpressionOrAnd", e2.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean", e2.FunctionNotFound = "FunctionNotFound", e2.InvalidMemberAccessKey = "InvalidMemberAccessKey", e2.UnsupportedUnaryOperator = "UnsupportUnaryOperator", e2.InvalidIdentifier = "InvalidIdentifier", e2.MemberOfNull = "MemberOfNull", e2.UnsupportedOperator = "UnsupportedOperator", e2.Cancelled = "Cancelled", e2.ModuleAccessorMustBeString = "ModuleAccessorMustBeString", e2.ModuleExportNotFound = "ModuleExportNotFound", e2.Immutable = "Immutable", e2.OutOfBounds = "OutOfBounds", e2.IllegalResult = "IllegalResult", e2.FieldNotFound = "FieldNotFound", e2.PortalRequired = "PortalRequired", e2.LogicError = "LogicError", e2.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber", e2.KeyAccessorMustBeString = "KeyAccessorMustBeString", e2.WrongSpatialReference = "WrongSpatialReference", e2.CannotChangeTimeZoneTime = "CannotChangeTimeZoneTime", e2.CannotChangeTimeZoneDateOnly = "CannotChangeTimeZoneDateOnly";
}(r3 || (r3 = {}));
var o = {
  [r3.TypeNotAllowedInFeature]: "Feature attributes only support dates, numbers, strings, guids.",
  [r3.LogicError]: "Logic error - {reason}",
  [r3.CannotCompareDateAndTime]: "Cannot compare date or dateonly with timeonly types",
  [r3.NeverReach]: "Encountered unreachable logic",
  [r3.AsyncNotEnabled]: "Async Arcade must be enabled for this script",
  [r3.ModuleAccessorMustBeString]: "Module accessor must be a string",
  [r3.ModuleExportNotFound]: "Module has no export with provided identifier",
  [r3.ModulesNotSupported]: "Current profile does not support modules",
  [r3.ArrayAccessorMustBeNumber]: "Array accessor must be a number",
  [r3.FunctionNotFound]: "Function not found",
  [r3.FieldNotFound]: "Key not found - {key}",
  [r3.CircularModules]: "Circular module dependencies are not allowed",
  [r3.Cancelled]: "Execution cancelled",
  [r3.UnsupportedHashType]: "Type not supported in hash function",
  [r3.IllegalResult]: "Value is not a supported return type",
  [r3.PortalRequired]: "Portal is required",
  [r3.InvalidParameter]: "Invalid parameter",
  [r3.WrongNumberOfParameters]: "Call with wrong number of parameters",
  [r3.Unrecognized]: "Unrecognized code structure",
  [r3.UnrecognizedType]: "Unrecognized type",
  [r3.WrongSpatialReference]: "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",
  [r3.BooleanConditionRequired]: "Conditions must use booleans",
  [r3.NoFunctionInDictionary]: "Dictionaries cannot contain functions.",
  [r3.NoFunctionInArray]: "Arrays cannot contain functions.",
  [r3.NoFunctionInTemplateLiteral]: "Template Literals do not expect functions by value.",
  [r3.KeyAccessorMustBeString]: "Accessor must be a string",
  [r3.KeyMustBeString]: "Object keys must be a string",
  [r3.Immutable]: "Object is immutable",
  [r3.UnexpectedToken]: "Unexpected token",
  [r3.MemberOfNull]: "Cannot access property of null object",
  [r3.MaximumCallDepth]: "Exceeded maximum function depth",
  [r3.OutOfBounds]: "Out of bounds",
  [r3.InvalidIdentifier]: "Identifier not recognized",
  [r3.CallNonFunction]: "Expression is not a function",
  [r3.InvalidMemberAccessKey]: "Cannot access value using a key of this type",
  [r3.AssignModuleFunction]: "Cannot assign function to module variable",
  [r3.UnsupportedUnaryOperator]: "Unsupported unary operator",
  [r3.UnsupportedOperator]: "Unsupported operator",
  [r3.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean",
  [r3.LogicExpressionOrAnd]: "Logical expression can only be combined with || or &&",
  [r3.CannotChangeTimeZoneTime]: "Cannot change the timezone of a Time",
  [r3.CannotChangeTimeZoneDateOnly]: "Cannot change the timezone of a DateOnly",
  [r3.FeatureSetDoesNotHaveSubtypes]: "FeatureSet does not have subtypes"
};
var n4 = class extends Error {
  constructor(...e2) {
    super(...e2);
  }
};
var t2 = class _t extends n4 {
  constructor(e2, r5) {
    super(s4(r5) + e2.message, {
      cause: e2
    }), this.loc = null, Error.captureStackTrace && Error.captureStackTrace(this, _t), r5?.loc && (this.loc = r5.loc);
  }
};
var a2 = class _a extends Error {
  constructor(r5, n6, t3, c4) {
    super("Execution error - " + s4(t3) + r(o[n6], c4)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadeexecutionerror", Error.captureStackTrace && Error.captureStackTrace(this, _a), t3?.loc && (this.loc = t3.loc);
  }
};
function s4(e2) {
  return e2 && e2.loc ? `Line : ${e2.loc.start?.line}, ${e2.loc.start?.column}: ` : "";
}
var c2 = class _c extends Error {
  constructor(r5, n6, t3, a3) {
    super("Compilation error - " + s4(t3) + r(o[n6], a3)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadecompilationerror", Error.captureStackTrace && Error.captureStackTrace(this, _c), t3?.loc && (this.loc = t3.loc);
  }
};
var i = class _i extends Error {
  constructor() {
    super("Uncompilable code structures"), this.declaredRootClass = "esri.arcade.arcadeuncompilableerror", Error.captureStackTrace && Error.captureStackTrace(this, _i);
  }
};
function u2(e2, r5, o2) {
  return "esri.arcade.arcadeexecutionerror" === o2.declaredRootClass || "esri.arcade.arcadecompilationerror" === o2.declaredRootClass ? null === o2.loc && r5?.loc ? new t2(o2, {
    cause: o2
  }) : o2 : ("esri.arcade.featureset.support.featureseterror" === o2.declaredRootClass || "esri.arcade.featureset.support.sqlerror" === o2.declaredRootClass || o2.declaredRootClass, r5?.loc ? new t2(o2, {
    cause: o2
  }) : o2);
}
var l;
!function(e2) {
  e2.UnrecognizedUri = "UnrecognizedUri", e2.UnsupportedUriProtocol = "UnsupportedUriProtocol";
}(l || (l = {}));
var d = {
  [l.UnrecognizedUri]: "Unrecognized uri - {uri}",
  [l.UnsupportedUriProtocol]: "Unrecognized uri protocol"
};
var p2 = class _p extends Error {
  constructor(r5, o2) {
    super(r(d[r5], o2)), this.declaredRootClass = "esri.arcade.arcademoduleerror", Error.captureStackTrace && Error.captureStackTrace(this, _p);
  }
};

// ../../../node_modules/@arcgis/core/arcade/FunctionWrapper.js
var r4 = class {
  constructor() {
  }
};
function n5(t3, n6, e2) {
  if (t3 instanceof r4 && !(t3 instanceof s5)) {
    const r5 = new s5();
    return r5.fn = t3, r5.parameterEvaluator = e2, r5.context = n6, r5;
  }
  return t3;
}
var e = class extends r4 {
  constructor(t3) {
    super(), this.fn = t3;
  }
  createFunction(t3) {
    return (...r5) => this.fn(t3, {
      preparsed: true,
      arguments: r5
    });
  }
  call(t3, r5) {
    return this.fn(t3, r5);
  }
  marshalledCall(e2, a3, l3, c4) {
    return c4(e2, a3, (a4, o2, i3) => {
      i3 = i3.map((t3) => t3 instanceof r4 && !(t3 instanceof s5) ? n5(t3, e2, c4) : t3);
      const u4 = this.call(l3, {
        args: i3
      });
      return S(u4) ? u4.then((t3) => n5(t3, l3, c4)) : u4;
    });
  }
};
var s5 = class extends r4 {
  constructor() {
    super(...arguments), this.fn = null, this.context = null;
  }
  createFunction(t3) {
    return this.fn.createFunction(this.context);
  }
  call(t3, r5) {
    return this.fn.marshalledCall(t3, r5, this.context, this.parameterEvaluator);
  }
  marshalledCall(t3, r5, n6) {
    return this.fn.marshalledCall(t3, r5, this.context, this.parameterEvaluator);
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/support/shared.js
var l2;
var s6;
function y3(e2) {
  return y2.fromJSON(e2.toJSON());
}
function u3(e2) {
  return e2.toJSON ? e2.toJSON() : e2;
}
function p3(e2) {
  return "string" == typeof e2 || e2 instanceof String;
}
function c3(e2) {
  return "number" == typeof e2;
}
function f2(e2) {
  return e2 instanceof Date;
}
function d2(e2) {
  return e2 instanceof DateTime;
}
function T(r5) {
  return r5 instanceof m;
}
function g(e2) {
  return e2 instanceof n;
}
function F(e2) {
  return e2 instanceof n3;
}
function G(e2, r5) {
  return e2 === r5 || !(!f2(e2) && !T(e2) || !f2(r5) && !T(r5)) && e2.getTime() === r5.getTime();
}
function O(e2) {
  if (null == e2) return null;
  if ("number" == typeof e2) return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
      return 109404;
    case "miles":
    case "mile":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "km":
      return 109414;
  }
  return null;
}
function b(e2) {
  if (null == e2) return null;
  switch (e2.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return e2.extent;
    case "point":
      return new w({
        xmin: e2.x,
        ymin: e2.y,
        xmax: e2.x,
        ymax: e2.y,
        spatialReference: e2.spatialReference
      });
    case "extent":
      return e2;
  }
  return null;
}
function v(e2) {
  if (null == e2) return null;
  if ("number" == typeof e2) return e2;
  if ("number" == typeof e2) return e2;
  switch (e2.toLowerCase()) {
    case "meters":
    case "meter":
      return 9001;
    case "miles":
    case "mile":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "km":
      return 9036;
  }
  return null;
}
!function(e2) {
  e2[e2.Standardised = 0] = "Standardised", e2[e2.StandardisedNoInterval = 1] = "StandardisedNoInterval", e2[e2.SqlServer = 2] = "SqlServer", e2[e2.Oracle = 3] = "Oracle", e2[e2.Postgres = 4] = "Postgres", e2[e2.PGDB = 5] = "PGDB", e2[e2.FILEGDB = 6] = "FILEGDB", e2[e2.NotEvaluated = 7] = "NotEvaluated";
}(l2 || (l2 = {})), function(e2) {
  e2[e2.InFeatureSet = 0] = "InFeatureSet", e2[e2.NotInFeatureSet = 1] = "NotInFeatureSet", e2[e2.Unknown = 2] = "Unknown";
}(s6 || (s6 = {}));
var D = 1e3;
var N = {
  point: "point",
  polygon: "polygon",
  polyline: "polyline",
  multipoint: "multipoint",
  extent: "extent",
  esriGeometryPoint: "point",
  esriGeometryPolygon: "polygon",
  esriGeometryPolyline: "polyline",
  esriGeometryMultipoint: "multipoint",
  esriGeometryEnvelope: "extent",
  envelope: "extent"
};
var w2 = {
  point: "esriGeometryPoint",
  polygon: "esriGeometryPolygon",
  polyline: "esriGeometryPolyline",
  multipoint: "esriGeometryMultipoint",
  extent: "esriGeometryEnvelope",
  esriGeometryPoint: "esriGeometryPoint",
  esriGeometryPolygon: "esriGeometryPolygon",
  esriGeometryPolyline: "esriGeometryPolyline",
  esriGeometryMultipoint: "esriGeometryMultipoint",
  esriGeometryEnvelope: "esriGeometryEnvelope",
  envelope: "esriGeometryEnvelope"
};
var E = {
  "small-integer": "esriFieldTypeSmallInteger",
  integer: "esriFieldTypeInteger",
  long: "esriFieldTypeLong",
  single: "esriFieldTypeSingle",
  double: "esriFieldTypeDouble",
  string: "esriFieldTypeString",
  date: "esriFieldTypeDate",
  "date-only": "esriFieldTypeDateOnly",
  "time-only": "esriFieldTypeTimeOnly",
  "timestamp-offset": "esriFieldTypeTimestampOffset",
  oid: "esriFieldTypeOID",
  geometry: "esriFieldTypeGeometry",
  blob: "esriFieldTypeBlob",
  raster: "esriFieldTypeRaster",
  guid: "esriFieldTypeGUID",
  "global-id": "esriFieldTypeGlobalID",
  xml: "esriFieldTypeXML",
  "big-integer": "esriFieldTypeBigInteger",
  esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger",
  esriFieldTypeInteger: "esriFieldTypeInteger",
  esriFieldTypeLong: "esriFieldTypeLong",
  esriFieldTypeSingle: "esriFieldTypeSingle",
  esriFieldTypeDouble: "esriFieldTypeDouble",
  esriFieldTypeString: "esriFieldTypeString",
  esriFieldTypeDate: "esriFieldTypeDate",
  esriFieldTypeDateOnly: "esriFieldTypeDateOnly",
  esriFieldTypeTimeOnly: "esriFieldTypeTimeOnly",
  esriFieldTypeTimestampOffset: "esriFieldTypeTimestampOffset",
  esriFieldTypeOID: "esriFieldTypeOID",
  esriFieldTypeGeometry: "esriFieldTypeGeometry",
  esriFieldTypeBlob: "esriFieldTypeBlob",
  esriFieldTypeRaster: "esriFieldTypeRaster",
  esriFieldTypeGUID: "esriFieldTypeGUID",
  esriFieldTypeGlobalID: "esriFieldTypeGlobalID",
  esriFieldTypeXML: "esriFieldTypeXML",
  esriFieldTypeBigInteger: "esriFieldTypeBigInteger"
};
function k(e2) {
  return void 0 === e2 ? "" : e2 = (e2 = (e2 = e2.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
}
function J(e2, r5) {
  r5 || (r5 = {}), "function" == typeof r5 && (r5 = {
    cmp: r5
  });
  const t3 = "boolean" == typeof r5.cycles && r5.cycles, i3 = r5.cmp && (n6 = r5.cmp, function(e3) {
    return function(r6, t4) {
      const i4 = {
        key: r6,
        value: e3[r6]
      }, o3 = {
        key: t4,
        value: e3[t4]
      };
      return n6(i4, o3);
    };
  });
  var n6;
  const o2 = [];
  return function e3(r6) {
    if (r6?.toJSON && "function" == typeof r6.toJSON && (r6 = r6.toJSON()), void 0 === r6) return;
    if ("number" == typeof r6) return isFinite(r6) ? "" + r6 : "null";
    if ("object" != typeof r6) return JSON.stringify(r6);
    let n7, l3;
    if (Array.isArray(r6)) {
      for (l3 = "[", n7 = 0; n7 < r6.length; n7++) n7 && (l3 += ","), l3 += e3(r6[n7]) || "null";
      return l3 + "]";
    }
    if (null === r6) return "null";
    if (o2.includes(r6)) {
      if (t3) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const s7 = o2.push(r6) - 1, y4 = Object.keys(r6).sort(i3?.(r6));
    for (l3 = "", n7 = 0; n7 < y4.length; n7++) {
      const t4 = y4[n7], i4 = e3(r6[t4]);
      i4 && (l3 && (l3 += ","), l3 += JSON.stringify(t4) + ":" + i4);
    }
    return o2.splice(s7, 1), "{" + l3 + "}";
  }(e2);
}
function M(e2) {
  switch (e2.type) {
    case "catalog":
    case "feature":
    case "oriented-imagery":
    case "subtype-group":
      return true;
    default:
      return false;
  }
}
function B(e2) {
  switch (e2.type) {
    case "catalog-footprint":
    case "subtype-sublayer":
      return true;
    default:
      return M(e2);
  }
}

// ../../../node_modules/@arcgis/core/arcade/ImmutablePointArray.js
var i2 = class _i extends t {
  constructor(t3, s7, i3, e2, h3, a3) {
    super(t3), this._lazyPt = [], this._hasZ = false, this._hasM = false, this._spRef = s7, this._hasZ = i3, this._hasM = e2, this._cacheId = h3, this._partId = a3;
  }
  get(t3) {
    if (void 0 === this._lazyPt[t3]) {
      const i3 = this._elements[t3];
      if (void 0 === i3) return;
      const e2 = this._hasZ, h3 = this._hasM;
      let a3;
      a3 = e2 && !h3 ? new _(i3[0], i3[1], i3[2], void 0, this._spRef) : h3 && !e2 ? new _(i3[0], i3[1], void 0, i3[2], this._spRef) : e2 && h3 ? new _(i3[0], i3[1], i3[2], i3[3], this._spRef) : new _(i3[0], i3[1], this._spRef), a3.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + t3.toString(), this._lazyPt[t3] = a3;
    }
    return this._lazyPt[t3];
  }
  equalityTest(t3) {
    return t3 === this || null !== t3 && t3 instanceof _i != false && t3.getUniqueHash() === this.getUniqueHash();
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
};

// ../../../node_modules/@arcgis/core/arcade/ImmutablePathArray.js
var h2 = class _h extends t {
  constructor(t3, s7, h3, i3, e2) {
    super(t3), this._lazyPath = [], this._hasZ = false, this._hasM = false, this._hasZ = h3, this._hasM = i3, this._spRef = s7, this._cacheId = e2;
  }
  get(t3) {
    if (void 0 === this._lazyPath[t3]) {
      const h3 = this._elements[t3];
      if (void 0 === h3) return;
      this._lazyPath[t3] = new i2(h3, this._spRef, this._hasZ, this._hasM, this._cacheId, t3);
    }
    return this._lazyPath[t3];
  }
  equalityTest(t3) {
    return t3 === this || null !== t3 && t3 instanceof _h != false && t3.getUniqueHash() === this.getUniqueHash();
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
};

// ../../../node_modules/@arcgis/core/chunks/languageUtils.js
var F2 = class {
  constructor(e2) {
    this.value = e2;
  }
};
var w3 = class {
  constructor(e2) {
    this.value = e2;
  }
};
var x = w3;
var M2 = F2;
var O2 = {
  type: "VOID"
};
var R = {
  type: "BREAK"
};
var J2 = {
  type: "CONTINUE"
};
function v2(e2, t3, n6) {
  return "" === t3 || null == t3 || t3 === n6 || t3 === n6 ? e2 : e2 = e2.split(t3).join(n6);
}
function _2(e2) {
  return e2 instanceof r4;
}
function I(e2) {
  return e2 instanceof s3;
}
function Y(e2) {
  return !!G2(e2) || !!E2(e2) || !!X(e2) || !!ee(e2) || !!te(e2) || !!z(e2) || null === e2 || e2 === O2 || "number" == typeof e2;
}
function P(e2, t3) {
  return void 0 === e2 ? t3 : e2;
}
function L(e2) {
  return null == e2 ? "" : U(e2) || Q(e2) ? "Array" : X(e2) ? "Date" : te(e2) ? "Time" : ee(e2) ? "DateOnly" : G2(e2) ? "String" : z(e2) ? "Boolean" : E2(e2) ? "Number" : "esri.arcade.Attachment" === e2?.declaredClass ? "Attachment" : "esri.arcade.Portal" === e2?.declaredClass ? "Portal" : "esri.arcade.Dictionary" === e2?.declaredClass ? "Dictionary" : $(e2) ? "KnowledgeGraph" : e2 instanceof s3 ? "Module" : H(e2) ? "Feature" : e2 instanceof _ ? "Point" : e2 instanceof j ? "Polygon" : e2 instanceof m2 ? "Polyline" : e2 instanceof u ? "Multipoint" : e2 instanceof w ? "Extent" : _2(e2) ? "Function" : B2(e2) ? "FeatureSet" : W(e2) ? "FeatureSetCollection" : e2 === O2 ? "" : "number" == typeof e2 && isNaN(e2) ? "Number" : "Unrecognized Type";
}
function G2(e2) {
  return "string" == typeof e2 || e2 instanceof String;
}
function z(e2) {
  return "boolean" == typeof e2;
}
function E2(e2) {
  return "number" == typeof e2;
}
function V(e2) {
  return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
}
function q(e2) {
  return e2 instanceof n2;
}
function U(e2) {
  return Array.isArray(e2);
}
function H(e2) {
  return "esri.arcade.Feature" === e2?.arcadeDeclaredClass;
}
function B2(e2) {
  return "esri.arcade.featureset.support.FeatureSet" === e2?.declaredRootClass;
}
function K(e2) {
  return "esri.arcade.Dictionary" === e2?.declaredClass;
}
function W(e2) {
  return "esri.arcade.featureSetCollection" === e2?.declaredRootClass;
}
function $(e2) {
  return "esri.rest.knowledgeGraph.KnowledgeGraph" === e2?.declaredClass;
}
function Q(e2) {
  return e2 instanceof t;
}
function X(e2) {
  return e2 instanceof m;
}
function ee(e2) {
  return e2 instanceof n;
}
function te(e2) {
  return e2 instanceof n3;
}
function ne(e2) {
  return null != e2 && "object" == typeof e2;
}
function re(e2) {
  return e2 instanceof Date;
}
function ae(e2, t3, n6, r5, a3) {
  if (e2.length < t3 || e2.length > n6) throw new a2(r5, r3.WrongNumberOfParameters, a3);
}
function ie(e2) {
  return e2 < 0 ? -Math.round(-e2) : Math.round(e2);
}
function oe(e2, t3) {
  return isNaN(e2) || null == t3 || "" === t3 ? e2.toString() : (t3 = v2(t3, "‰", ""), t3 = v2(t3, "¤", ""), s2(e2, {
    pattern: t3
  }));
}
function ue(e2, t3) {
  return null == t3 || "" === t3 ? e2.toISOString(true) : e2.toFormat(se(t3), {
    locale: c(),
    numberingSystem: "latn"
  });
}
function se(e2, t3 = false) {
  e2 = e2.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g, "[$&]");
  let n6 = "";
  const r5 = /(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;
  for (const a3 of e2.match(r5) || []) switch (a3) {
    case "D":
      n6 += "d";
      break;
    case "DD":
      n6 += "dd";
      break;
    case "DDD":
      n6 += "o";
      break;
    case "d":
      n6 += "c";
      break;
    case "ddd":
      n6 += "ccc";
      break;
    case "dddd":
      n6 += "cccc";
      break;
    case "M":
      n6 += "L";
      break;
    case "MM":
      n6 += "LL";
      break;
    case "MMM":
      n6 += "LLL";
      break;
    case "MMMM":
      n6 += "LLLL";
      break;
    case "YY":
      n6 += "yy";
      break;
    case "Y":
    case "YYYY":
      n6 += "yyyy";
      break;
    case "Q":
      n6 += "q";
      break;
    case "Z":
      n6 += "Z";
      break;
    case "ZZ":
      n6 += "ZZ";
      break;
    case "ZZZ":
      n6 += "ZZZ";
      break;
    case "ZZZZ":
      n6 += t3 ? "[ZZZZ]" : "ZZZZ";
      break;
    case "ZZZZZ":
      n6 += t3 ? "[ZZZZZ]" : "ZZZZZ";
      break;
    case "S":
      n6 += "'S'";
      break;
    case "SS":
      n6 += "'SS'";
      break;
    case "SSS":
      n6 += "u";
      break;
    case "A":
    case "a":
      n6 += "a";
      break;
    case "m":
    case "mm":
    case "h":
    case "hh":
    case "H":
    case "HH":
    case "s":
    case "ss":
    case "X":
    case "x":
      n6 += a3;
      break;
    default:
      a3.length >= 2 && "[" === a3.slice(0, 1) && "]" === a3.slice(-1) ? n6 += `'${a3.slice(1, -1)}'` : n6 += `'${a3}'`;
  }
  return n6;
}
function le(e2, t3, n6) {
  switch (n6) {
    case ">":
      return e2 > t3;
    case "<":
      return e2 < t3;
    case ">=":
      return e2 >= t3;
    case "<=":
      return e2 <= t3;
  }
  return false;
}
function fe(e2, t3, r5) {
  if (null === e2) {
    if (null === t3 || t3 === O2) return le(null, null, r5);
    if (E2(t3)) return le(0, t3, r5);
    if (G2(t3)) return le(0, ge(t3), r5);
    if (z(t3)) return le(0, ge(t3), r5);
    if (X(t3)) return le(0, t3.toNumber(), r5);
    if (te(t3)) return le(e2, t3.toNumber(), r5);
    if (ee(t3)) return le(e2, t3.toNumber(), r5);
  }
  if (e2 === O2) {
    if (null === t3 || t3 === O2) return le(null, null, r5);
    if (E2(t3)) return le(0, t3, r5);
    if (G2(t3)) return le(0, ge(t3), r5);
    if (z(t3)) return le(0, ge(t3), r5);
    if (X(t3)) return le(0, t3.toNumber(), r5);
    if (te(t3)) return le(e2, t3.toNumber(), r5);
    if (ee(t3)) return le(e2, t3.toNumber(), r5);
  } else if (E2(e2)) {
    if (E2(t3)) return le(e2, t3, r5);
    if (z(t3)) return le(e2, ge(t3), r5);
    if (null === t3 || t3 === O2) return le(e2, 0, r5);
    if (G2(t3)) return le(e2, ge(t3), r5);
    if (X(t3)) return le(e2, t3.toNumber(), r5);
    if (te(t3)) return le(e2, t3.toNumber(), r5);
    if (ee(t3)) return le(e2, t3.toNumber(), r5);
  } else if (G2(e2)) {
    if (G2(t3)) return le(me(e2), me(t3), r5);
    if (X(t3)) return le(ge(e2), t3.toNumber(), r5);
    if (te(t3)) return le(ge(e2), t3.toNumber(), r5);
    if (ee(t3)) return le(ge(e2), t3.toNumber(), r5);
    if (E2(t3)) return le(ge(e2), t3, r5);
    if (null === t3 || t3 === O2) return le(ge(e2), 0, r5);
    if (z(t3)) return le(ge(e2), ge(t3), r5);
  } else if (X(e2)) {
    if (X(t3)) return e2.timeZone !== t3.timeZone && (e2.isUnknownTimeZone ? e2 = m.arcadeDateAndZoneToArcadeDate(e2, t3.timeZone) : t3.isUnknownTimeZone && (t3 = m.arcadeDateAndZoneToArcadeDate(t3, e2.timeZone))), le(e2.toNumber(), t3.toNumber(), r5);
    if (null === t3 || t3 === O2) return le(e2.toNumber(), 0, r5);
    if (E2(t3)) return le(e2.toNumber(), t3, r5);
    if (z(t3)) return le(e2.toNumber(), ge(t3), r5);
    if (G2(t3)) return le(e2.toNumber(), ge(t3), r5);
    if (te(t3)) throw new a2(null, r3.CannotCompareDateAndTime, null);
    if (ee(t3)) return le(e2.toNumber(), t3.toNumber(), r5);
  } else if (z(e2)) {
    if (z(t3)) return le(e2, t3, r5);
    if (E2(t3)) return le(ge(e2), ge(t3), r5);
    if (X(t3)) return le(ge(e2), t3.toNumber(), r5);
    if (te(t3)) return le(ge(e2), t3.toNumber(), r5);
    if (ee(t3)) return le(ge(e2), t3.toNumber(), r5);
    if (null === t3 || t3 === O2) return le(ge(e2), 0, r5);
    if (G2(t3)) return le(ge(e2), ge(t3), r5);
  } else if (ee(e2)) {
    if (X(t3)) return le(e2.toNumber(), t3.toNumber(), r5);
    if (null === t3 || t3 === O2) return le(e2.toNumber(), 0, r5);
    if (E2(t3)) return le(e2.toNumber(), t3, r5);
    if (z(t3)) return le(e2.toNumber(), ge(t3), r5);
    if (G2(t3)) return le(e2.toNumber(), ge(t3), r5);
    if (te(t3)) throw new a2(null, r3.CannotCompareDateAndTime, null);
    if (ee(t3)) return le(e2.toNumber(), t3.toNumber(), r5);
  } else if (te(e2)) {
    if (X(t3)) throw new a2(null, r3.CannotCompareDateAndTime, null);
    if (null === t3 || t3 === O2) return le(e2.toNumber(), 0, r5);
    if (E2(t3)) return le(e2.toNumber(), t3, r5);
    if (z(t3)) return le(e2.toNumber(), ge(t3), r5);
    if (G2(t3)) return le(e2.toNumber(), ge(t3), r5);
    if (te(t3)) return le(e2.toNumber(), t3.toNumber(), r5);
    if (ee(t3)) throw new a2(null, r3.CannotCompareDateAndTime, null);
  }
  return !!ce(e2, t3) && ("<=" === r5 || ">=" === r5);
}
function ce(e2, t3) {
  if (e2 === t3) return true;
  if (null === e2 && t3 === O2 || null === t3 && e2 === O2) return true;
  if (X(e2) && X(t3)) return e2.equals(t3);
  if (te(e2) && te(t3)) return e2.equals(t3);
  if (ee(e2) && ee(t3)) return e2.equals(t3);
  if (e2 instanceof h2) return e2.equalityTest(t3);
  if (e2 instanceof i2) return e2.equalityTest(t3);
  if (e2 instanceof _ && t3 instanceof _) {
    const n6 = e2.cache._arcadeCacheId, r5 = t3.cache._arcadeCacheId;
    if (null != n6) return n6 === r5;
  }
  if (ne(e2) && ne(t3)) {
    if (e2._arcadeCacheId === t3._arcadeCacheId && void 0 !== e2._arcadeCacheId && null !== e2._arcadeCacheId) return true;
    if (e2._underlyingGraphic === t3._underlyingGraphic && void 0 !== e2._underlyingGraphic && null !== e2._underlyingGraphic) return true;
  }
  return false;
}
function me(e2, t3) {
  if (G2(e2)) return e2;
  if (null === e2) return "";
  if (E2(e2)) return oe(e2, t3);
  if (z(e2)) return e2.toString();
  if (X(e2)) return ue(e2, t3);
  if (te(e2)) return e2.toFormat(t3);
  if (ee(e2)) return e2.toFormat(t3);
  if (e2 instanceof n2) return JSON.stringify(e2.toJSON());
  if (U(e2)) {
    const t4 = [];
    for (let n6 = 0; n6 < e2.length; n6++) t4[n6] = ye(e2[n6]);
    return "[" + t4.join(",") + "]";
  }
  if (e2 instanceof t) {
    const t4 = [];
    for (let n6 = 0; n6 < e2.length(); n6++) t4[n6] = ye(e2.get(n6));
    return "[" + t4.join(",") + "]";
  }
  return null !== e2 && "object" == typeof e2 && void 0 !== e2.castToText ? e2.castToText() : _2(e2) ? "object, Function" : e2 === O2 ? "" : I(e2) ? "object, Module" : "";
}
function de(e2) {
  const t3 = [];
  if (!U(e2)) return null;
  if (e2 instanceof t) {
    for (let n6 = 0; n6 < e2.length(); n6++) t3[n6] = ge(e2.get(n6));
    return t3;
  }
  for (let n6 = 0; n6 < e2.length; n6++) t3[n6] = ge(e2[n6]);
  return t3;
}
function pe(e2, t3, n6 = false) {
  if (G2(e2)) return e2;
  if (null === e2) return "";
  if (E2(e2)) return oe(e2, t3);
  if (z(e2)) return e2.toString();
  if (X(e2)) return ue(e2, t3);
  if (te(e2)) return e2.toFormat(t3);
  if (ee(e2)) return e2.toFormat(t3);
  if (e2 instanceof n2) return e2 instanceof w ? '{"xmin":' + e2.xmin.toString() + ',"ymin":' + e2.ymin.toString() + "," + (e2.hasZ ? '"zmin":' + e2.zmin.toString() + "," : "") + (e2.hasM ? '"mmin":' + e2.mmin.toString() + "," : "") + '"xmax":' + e2.xmax.toString() + ',"ymax":' + e2.ymax.toString() + "," + (e2.hasZ ? '"zmax":' + e2.zmax.toString() + "," : "") + (e2.hasM ? '"mmax":' + e2.mmax.toString() + "," : "") + '"spatialReference":' + je(e2.spatialReference) + "}" : je(e2.toJSON(), (e3, t4) => e3.key === t4.key ? 0 : "spatialReference" === e3.key ? 1 : "spatialReference" === t4.key || e3.key < t4.key ? -1 : e3.key > t4.key ? 1 : 0);
  if (U(e2)) {
    const t4 = [];
    for (let r5 = 0; r5 < e2.length; r5++) t4[r5] = ye(e2[r5], n6);
    return "[" + t4.join(",") + "]";
  }
  if (e2 instanceof t) {
    const t4 = [];
    for (let r5 = 0; r5 < e2.length(); r5++) t4[r5] = ye(e2.get(r5), n6);
    return "[" + t4.join(",") + "]";
  }
  return null !== e2 && "object" == typeof e2 && void 0 !== e2.castToText ? e2.castToText(n6) : _2(e2) ? "object, Function" : e2 === O2 ? "" : I(e2) ? "object, Module" : "";
}
function ye(e2, t3 = false) {
  if (null === e2) return "null";
  if (z(e2) || E2(e2) || G2(e2)) return JSON.stringify(e2);
  if (e2 instanceof n2) return pe(e2, null, t3);
  if (e2 instanceof t) return pe(e2, null, t3);
  if (Array.isArray(e2)) return pe(e2, null, t3);
  if (X(e2)) return t3 ? JSON.stringify(e2.getTime()) : JSON.stringify(ue(e2, ""));
  if (te(e2)) return JSON.stringify(e2.toString());
  if (ee(e2)) return JSON.stringify(e2.toString());
  if (null !== e2 && "object" == typeof e2) {
    if (void 0 !== e2.castToText) return e2.castToText(t3);
  } else if (e2 === O2) return "null";
  return "null";
}
function ge(e2, t3) {
  return E2(e2) ? e2 : null === e2 || "" === e2 ? 0 : X(e2) || ee(e2) || te(e2) ? NaN : z(e2) ? e2 ? 1 : 0 : U(e2) || "" === e2 || void 0 === e2 ? NaN : void 0 !== t3 && G2(e2) ? (t3 = v2(t3, "‰", ""), t3 = v2(t3, "¤", ""), p(e2, {
    pattern: t3
  })) : e2 === O2 ? 0 : Number(e2);
}
function he(e2, t3) {
  if (X(e2)) return e2;
  if (G2(e2)) {
    const r5 = be(e2, t3);
    if (r5) return m.dateTimeToArcadeDate(r5);
  }
  return null;
}
function be(e2, t3) {
  const n6 = / (\d\d)/, a3 = h(t3);
  let i3 = DateTime.fromISO(e2, {
    zone: a3
  });
  return i3.isValid || n6.test(e2) && (e2 = e2.replace(n6, "T$1"), i3 = DateTime.fromISO(e2, {
    zone: t3
  }), i3.isValid) ? i3 : null;
}
function Ne(e2) {
  return z(e2) ? e2 : G2(e2) ? "true" === (e2 = e2.toLowerCase()) : !!E2(e2) && 0 !== e2 && !isNaN(e2);
}
function Se(e2, t3) {
  const n6 = JSON.parse(e2);
  return n6 && !n6.spatialReference && (n6.spatialReference = t3), y(n6);
}
function Ze(e2, t3) {
  return null == e2 ? null : (null !== e2.spatialReference && void 0 !== e2.spatialReference || (e2.spatialReference = t3), e2);
}
function Ae(e2) {
  if (null === e2) return null;
  if (e2 instanceof _) return "NaN" === e2.x || null === e2.x || isNaN(e2.x) ? null : e2;
  if (e2 instanceof j) {
    if (0 === e2.rings.length) return null;
    for (const t3 of e2.rings) if (t3.length > 0) return e2;
    return null;
  }
  if (e2 instanceof m2) {
    if (0 === e2.paths.length) return null;
    for (const t3 of e2.paths) if (t3.length > 0) return e2;
    return null;
  }
  return e2 instanceof u ? 0 === e2.points.length ? null : e2 : e2 instanceof w ? "NaN" === e2.xmin || null === e2.xmin || isNaN(e2.xmin) ? null : e2 : null;
}
function Te(e2, t3) {
  if (!e2) return t3;
  if (!e2.domain) return t3;
  let n6 = null, r5 = null;
  if (X(t3)) n6 = t3.toNumber();
  else if (ee(t3)) n6 = t3.toString();
  else if (te(t3)) n6 = t3.toStorageString();
  else if ("string" === e2.field.type || "esriFieldTypeString" === e2.field.type) n6 = me(t3);
  else {
    if (null == t3) return null;
    if ("" === t3) return t3;
    n6 = ge(t3);
  }
  for (let a3 = 0; a3 < e2.domain.codedValues.length; a3++) {
    const t4 = e2.domain.codedValues[a3];
    t4.code === n6 && (r5 = t4);
  }
  return null === r5 ? me(t3) : r5.name;
}
function ke(e2, t3) {
  if (!e2) return t3;
  if (!e2.domain) return t3;
  let n6 = null;
  const r5 = me(t3);
  for (let a3 = 0; a3 < e2.domain.codedValues.length; a3++) {
    const t4 = e2.domain.codedValues[a3];
    t4.name === r5 && (n6 = t4);
  }
  return null === n6 ? t3 : n6.code;
}
function Ce(e2, t3, n6 = null, r5 = null) {
  if (!t3) return null;
  if (!t3.fields) return null;
  let a3, u4, s7 = null;
  for (let i3 = 0; i3 < t3.fields.length; i3++) {
    const n7 = t3.fields[i3];
    n7.name.toLowerCase() === e2.toString().toLowerCase() && (s7 = n7);
  }
  if (null === s7) throw new a2(null, r3.FieldNotFound, null, {
    key: e2
  });
  let l3 = t3.typeIdField, f3 = "id", c4 = t3.types;
  if (t3.subtypeField && (l3 = t3.subtypeField, f3 = "code", c4 = t3.subtypes ?? []), null === r5 && n6 && l3) r5 = n6.hasField(l3) ? n6.field(l3) : null;
  else if (l3 && null !== r5) {
    let e3 = false;
    for (const t4 of c4 || []) if (r5 === t4[f3]) {
      e3 = true;
      break;
    }
    if (!e3) {
      for (const t4 of c4 || []) if (r5 === t4.name) {
        r5 = t4[f3], e3 = true;
        break;
      }
    }
    e3 || (r5 = null, n6 && l3 && (r5 = n6.hasField(l3) ? n6.field(l3) : null));
  }
  return null != r5 && c4.some((e3) => e3[f3] === r5 && (a3 = e3.domains?.[s7.name], a3 && "inherited" === a3.type && (a3 = De(s7.name, t3), u4 = true), true)), u4 || a3 || (a3 = De(e2, t3)), {
    field: s7,
    domain: a3
  };
}
function De(e2, t3) {
  let n6;
  return t3.fields.some((t4) => (t4.name.toLowerCase() === e2.toLowerCase() && (n6 = t4.domain), !!n6)), n6;
}
function je(e2, t3) {
  t3 || (t3 = {}), "function" == typeof t3 && (t3 = {
    cmp: t3
  });
  const n6 = "boolean" == typeof t3.cycles && t3.cycles, r5 = t3.cmp && (a3 = t3.cmp, function(e3) {
    return function(t4, n7) {
      const r6 = {
        key: t4,
        value: e3[t4]
      }, i4 = {
        key: n7,
        value: e3[n7]
      };
      return a3(r6, i4);
    };
  });
  var a3;
  const i3 = [];
  return function e3(t4) {
    if (t4?.toJSON && "function" == typeof t4.toJSON && (t4 = t4.toJSON()), void 0 === t4) return;
    if ("number" == typeof t4) return isFinite(t4) ? "" + t4 : "null";
    if ("object" != typeof t4) return JSON.stringify(t4);
    let a4, o2;
    if (Array.isArray(t4)) {
      for (o2 = "[", a4 = 0; a4 < t4.length; a4++) a4 && (o2 += ","), o2 += e3(t4[a4]) || "null";
      return o2 + "]";
    }
    if (null === t4) return "null";
    if (i3.includes(t4)) {
      if (n6) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const u4 = i3.push(t4) - 1, s7 = Object.keys(t4).sort(r5?.(t4));
    for (o2 = "", a4 = 0; a4 < s7.length; a4++) {
      const n7 = s7[a4], r6 = e3(t4[n7]);
      r6 && (o2 && (o2 += ","), o2 += JSON.stringify(n7) + ":" + r6);
    }
    return i3.splice(u4, 1), "{" + o2 + "}";
  }(e2);
}
function Fe(e2) {
  if (null === e2) return null;
  const t3 = [];
  for (const n6 of e2) n6?.arcadeDeclaredClass && "esri.arcade.Feature" === n6.arcadeDeclaredClass ? t3.push(n6.geometry()) : t3.push(n6);
  return t3;
}
function we(e2, t3) {
  if (!(t3 instanceof _)) throw new a2(null, r3.InvalidParameter, null);
  e2.push(t3.hasZ ? t3.hasM ? [t3.x, t3.y, t3.z, t3.m] : [t3.x, t3.y, t3.z] : [t3.x, t3.y]);
}
function xe(e2, t3) {
  if (U(e2) || Q(e2)) {
    let n6 = false, r5 = false, a3 = [], u4 = t3;
    if (U(e2)) {
      for (const t4 of e2) we(a3, t4);
      a3.length > 0 && (u4 = e2[0].spatialReference, n6 = e2[0].hasZ, r5 = e2[0].hasM);
    } else if (e2 instanceof i2) a3 = e2._elements, a3.length > 0 && (n6 = e2._hasZ, r5 = e2._hasM, u4 = e2.get(0).spatialReference);
    else {
      if (!Q(e2)) throw new a2(null, r3.InvalidParameter, null);
      for (const t4 of e2.toArray()) we(a3, t4);
      a3.length > 0 && (u4 = e2.get(0).spatialReference, n6 = true === e2.get(0).hasZ, r5 = true === e2.get(0).hasM);
    }
    if (0 === a3.length) return null;
    return a(a3) || (a3 = a3.slice(0).reverse()), new j({
      rings: [a3],
      spatialReference: u4,
      hasZ: n6,
      hasM: r5
    });
  }
  return e2;
}
function Me(e2, t3) {
  if (U(e2) || Q(e2)) {
    let n6 = false, r5 = false, a3 = [], i3 = t3;
    if (U(e2)) {
      for (const t4 of e2) we(a3, t4);
      a3.length > 0 && (i3 = e2[0].spatialReference, n6 = true === e2[0].hasZ, r5 = true === e2[0].hasM);
    } else if (e2 instanceof i2) a3 = e2._elements, a3.length > 0 && (n6 = e2._hasZ, r5 = e2._hasM, i3 = e2.get(0).spatialReference);
    else if (Q(e2)) {
      for (const t4 of e2.toArray()) we(a3, t4);
      a3.length > 0 && (i3 = e2.get(0).spatialReference, n6 = true === e2.get(0).hasZ, r5 = true === e2.get(0).hasM);
    }
    return 0 === a3.length ? null : new m2({
      paths: [a3],
      spatialReference: i3,
      hasZ: n6,
      hasM: r5
    });
  }
  return e2;
}
function Oe(e2, t3) {
  if (U(e2) || Q(e2)) {
    let n6 = false, r5 = false, a3 = [], i3 = t3;
    if (U(e2)) {
      for (const t4 of e2) we(a3, t4);
      a3.length > 0 && (i3 = e2[0].spatialReference, n6 = true === e2[0].hasZ, r5 = true === e2[0].hasM);
    } else if (e2 instanceof i2) a3 = e2._elements, a3.length > 0 && (n6 = e2._hasZ, r5 = e2._hasM, i3 = e2.get(0).spatialReference);
    else if (Q(e2)) {
      for (const t4 of e2.toArray()) we(a3, t4);
      a3.length > 0 && (i3 = e2.get(0).spatialReference, n6 = true === e2.get(0).hasZ, r5 = true === e2.get(0).hasM);
    }
    return 0 === a3.length ? null : new u({
      points: a3,
      spatialReference: i3,
      hasZ: n6,
      hasM: r5
    });
  }
  return e2;
}
function Re(e2, t3 = false) {
  const n6 = [];
  if (null === e2) return n6;
  if (true === U(e2)) {
    for (let r5 = 0; r5 < e2.length; r5++) {
      const a3 = me(e2[r5]);
      "" === a3 && true !== t3 || n6.push(a3);
    }
    return n6;
  }
  if (e2 instanceof t) {
    for (let r5 = 0; r5 < e2.length(); r5++) {
      const a3 = me(e2.get(r5));
      "" === a3 && true !== t3 || n6.push(a3);
    }
    return n6;
  }
  if (Y(e2)) {
    const r5 = me(e2);
    return "" === r5 && true !== t3 || n6.push(r5), n6;
  }
  return [];
}
var Je = 0;
function ve(e2) {
  return Je++, Je % 100 == 0 ? (Je = 0, new Promise((t3) => {
    setTimeout(() => {
      t3(e2);
    }, 0);
  })) : e2;
}
function _e(e2, t3, n6) {
  switch (n6) {
    case "&":
      return e2 & t3;
    case "|":
      return e2 | t3;
    case "^":
      return e2 ^ t3;
    case "<<":
      return e2 << t3;
    case ">>":
      return e2 >> t3;
    case ">>>":
      return e2 >>> t3;
  }
}
function Ie(e2, t3 = null) {
  return null == e2 ? null : z(e2) || E2(e2) || G2(e2) ? e2 : e2 instanceof n2 ? true === t3?.keepGeometryType ? e2 : e2.toJSON() : e2 instanceof t ? e2.toArray().map((e3) => Ie(e3, t3)) : Array.isArray(e2) ? e2.map((e3) => Ie(e3, t3)) : re(e2) ? e2 : X(e2) ? e2.toJSDate() : te(e2) ? e2.toString() : ee(e2) ? e2.toJSDate() : null !== e2 && "object" == typeof e2 && void 0 !== e2.castAsJson ? e2.castAsJson(t3) : null;
}
function Ye(e2, t3, n6, r5, a3) {
  return __async(this, null, function* () {
    const i3 = yield Pe(e2, t3, n6);
    a3[r5] = i3;
  });
}
function Pe(e2, t3 = null, n6 = null) {
  return __async(this, null, function* () {
    if (e2 instanceof t && (e2 = e2.toArray()), null == e2) return null;
    if (Y(e2) || e2 instanceof n2 || re(e2) || X(e2)) return Ie(e2, n6);
    if (Array.isArray(e2)) {
      const r5 = [], a3 = [];
      for (const i3 of e2) null === i3 || Y(i3) || i3 instanceof n2 || re(i3) || X(i3) ? a3.push(Ie(i3, n6)) : (a3.push(null), r5.push(Ye(i3, t3, n6, a3.length - 1, a3)));
      return r5.length > 0 && (yield Promise.all(r5)), a3;
    }
    return null !== e2 && "object" == typeof e2 && void 0 !== e2.castAsJsonAsync ? e2.castAsJsonAsync(t3, n6) : null;
  });
}
function Le(e2) {
  return Ge(e2) ? e2.parent : e2;
}
function Ge(e2) {
  return e2 && "declaredClass" in e2 && "esri.layers.support.SubtypeSublayer" === e2.declaredClass;
}
function ze(e2) {
  return e2 && "declaredClass" in e2 && "esri.layers.SubtypeGroupLayer" === e2.declaredClass;
}
function Ee(e2, t3, n6) {
  const r5 = Le(e2.fullSchema());
  if (null === r5) return null;
  if (!r5.fields) return null;
  return Ce(t3, r5, e2, n6);
}
function Ve(e2) {
  const t3 = Le(e2.fullSchema());
  return null === t3 ? null : t3.fields ? t3.subtypeField ? {
    subtypeField: t3.subtypeField,
    subtypes: t3.subtypes ? t3.subtypes.map((e3) => ({
      name: e3.name,
      code: e3.code
    })) : []
  } : t3.typeIdField ? {
    subtypeField: t3.typeIdField,
    subtypes: t3.types ? t3.types.map((e3) => ({
      name: e3.name,
      code: e3.id
    })) : []
  } : null : null;
}
function qe(e2, t3, n6, r5) {
  const a3 = Le(e2.fullSchema());
  if (null === a3) return null;
  if (!a3.fields) return null;
  const i3 = Ce(t3, a3, e2, r5);
  if (void 0 === n6) try {
    n6 = e2.field(t3);
  } catch (o2) {
    return null;
  }
  return Te(i3, n6);
}
function Ue(e2, t3, n6, r5) {
  const a3 = Le(e2.fullSchema());
  if (null === a3) return null;
  if (!a3.fields) return null;
  if (void 0 === n6) {
    try {
      n6 = e2.field(t3);
    } catch (i3) {
      return null;
    }
    return n6;
  }
  return ke(Ce(t3, a3, e2, r5), n6);
}
function He(e2) {
  return e2?.timeZone ?? "system";
}
function Be(e2) {
  const t3 = Le(e2.fullSchema());
  if (null === t3) return null;
  if (!t3.fields) return null;
  const n6 = [];
  for (const r5 of t3.fields) n6.push(u3(r5));
  return {
    objectIdField: t3.objectIdField,
    globalIdField: t3.globalIdField ?? "",
    geometryType: void 0 === w2[t3.geometryType] ? "" : w2[t3.geometryType],
    fields: n6
  };
}
function Ke(r5, a3) {
  return "system" === r5 && (r5 = m.systemTimeZoneCanonicalName), {
    version: We,
    engineVersion: r2,
    timeZone: r5,
    spatialReference: a3 instanceof f ? a3.toJSON() : a3,
    application: s.applicationName ?? "",
    engine: "web",
    locale: c()
  };
}
var We = "1.24";
var $e = Object.freeze(Object.defineProperty({
  __proto__: null,
  ImplicitResultE: w3,
  ReturnResultE: F2,
  absRound: ie,
  arcadeVersion: We,
  autoCastArrayOfPointsToMultiPoint: Oe,
  autoCastArrayOfPointsToPolygon: xe,
  autoCastArrayOfPointsToPolyline: Me,
  autoCastFeatureToGeometry: Fe,
  binaryOperator: _e,
  breakResult: R,
  castAsJson: Ie,
  castAsJsonAsync: Pe,
  continueResult: J2,
  defaultExecutingContext: Ke,
  defaultTimeZone: He,
  defaultUndefined: P,
  equalityTest: ce,
  featureDomainCodeLookup: Ue,
  featureDomainValueLookup: qe,
  featureFullDomain: Ee,
  featureSchema: Be,
  featureSubtypes: Ve,
  fixNullGeometry: Ae,
  fixSpatialReference: Ze,
  formatDate: ue,
  formatNumber: oe,
  getDomain: Ce,
  getDomainCode: ke,
  getDomainValue: Te,
  getType: L,
  greaterThanLessThan: fe,
  implicitResult: x,
  isArray: U,
  isBoolean: z,
  isDate: X,
  isDateOnly: ee,
  isDictionary: K,
  isFeature: H,
  isFeatureSet: B2,
  isFeatureSetCollection: W,
  isFunctionParameter: _2,
  isGeometry: q,
  isImmutableArray: Q,
  isInteger: V,
  isJsDate: re,
  isKnowledgeGraph: $,
  isModule: I,
  isNumber: E2,
  isObject: ne,
  isSimpleType: Y,
  isString: G2,
  isSubtypeGrouplayer: ze,
  isSubtypeSublayer: Ge,
  isTime: te,
  multiReplace: v2,
  parseGeometryFromJson: Se,
  pcCheck: ae,
  returnResult: M2,
  stableStringify: je,
  standardiseDateFormat: se,
  tick: ve,
  toBoolean: Ne,
  toDate: he,
  toNumber: ge,
  toNumberArray: de,
  toString: me,
  toStringArray: Re,
  toStringExplicit: pe,
  voidOperation: O2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  s3 as s,
  r3 as r,
  a2 as a,
  c2 as c,
  i,
  u2 as u,
  l,
  p2 as p,
  r4 as r2,
  n5 as n,
  e,
  s5 as s2,
  i2,
  h2 as h,
  l2,
  s6 as s3,
  y3 as y,
  u3 as u2,
  p3 as p2,
  c3 as c2,
  f2 as f,
  d2 as d,
  T,
  g,
  F,
  G,
  O,
  b,
  v,
  D,
  N,
  w2 as w,
  E,
  k,
  J,
  M,
  B,
  x,
  M2,
  O2,
  R,
  J2,
  v2,
  _2 as _,
  Y,
  P,
  L,
  G2,
  z,
  E2,
  V,
  q,
  U,
  H,
  B2,
  K,
  W,
  $,
  Q,
  X,
  ee,
  te,
  re,
  ae,
  ie,
  se,
  fe,
  ce,
  me,
  de,
  pe,
  ge,
  he,
  Ne,
  Ze,
  Ae,
  Te,
  ke,
  Ce,
  Fe,
  xe,
  Me,
  Oe,
  Re,
  ve,
  _e,
  Ie,
  Pe,
  Ge,
  Ee,
  Ve,
  qe,
  Ue,
  He,
  Be,
  Ke,
  $e
};
//# sourceMappingURL=chunk-M633ZBOT.js.map
