import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  m as m2,
  p,
  t as t2
} from "./chunk-HP5U6UA4.js";
import {
  j,
  m2 as m,
  u
} from "./chunk-MRPCXIVS.js";
import {
  _,
  n as n3
} from "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  n as n2
} from "./chunk-GS7Y3YOG.js";
import {
  U,
  t3 as t
} from "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js
var t3 = class extends S {
  constructor(e7) {
    super(e7), this.headerKeys = [], this.outSpatialReference = null, this.exceededTransferLimit = false;
  }
};
e([y()], t3.prototype, "headerKeys", void 0), e([y()], t3.prototype, "outSpatialReference", void 0), e([y()], t3.prototype, "exceededTransferLimit", void 0), t3 = e([a("esri.rest.knowledgeGraph.GraphQueryResultHeader")], t3);
var p2 = t3;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResult.js
var p3 = class extends S {
  constructor(r4) {
    super(r4), this.resultRows = [], this.resultHeader = new p2();
  }
};
e([y()], p3.prototype, "resultRows", void 0), e([y()], p3.prototype, "resultHeader", void 0), p3 = e([a("esri.rest.knowledgeGraph.GraphQueryResult")], p3);
var c2 = p3;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreamingResult.js
var a2 = class extends S {
  constructor(r4) {
    super(r4), this.resultRowsStream = new ReadableStream(), this.resultHeader = new p2();
  }
};
e([y()], a2.prototype, "resultRowsStream", void 0), e([y()], a2.prototype, "resultHeader", void 0), a2 = e([a("esri.rest.knowledgeGraph.GraphQueryStreamingResult")], a2);
var p4 = a2;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js
var s2 = class extends f {
  constructor(o3) {
    super(o3), this.name = null, this.unique = null, this.ascending = null, this.description = null, this.fieldNames = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], s2.prototype, "name", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], s2.prototype, "unique", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], s2.prototype, "ascending", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s2.prototype, "description", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], s2.prototype, "fieldNames", void 0), s2 = e([a("esri.rest.knowledgeGraph.FieldIndex")], s2);
var i = s2;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js
var i2 = class extends f {
  constructor(o3) {
    super(o3), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = null, this.required = null, this.defaultVisibility = null, this.systemMaintained = null, this.role = null, this.defaultValue = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i2.prototype, "name", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i2.prototype, "alias", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i2.prototype, "fieldType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i2.prototype, "geometryType", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "hasM", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "hasZ", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "nullable", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "editable", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "required", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "defaultVisibility", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i2.prototype, "systemMaintained", void 0), e([y()], i2.prototype, "role", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "defaultValue", void 0), i2 = e([a("esri.rest.knowledgeGraph.GraphProperty")], i2);
var s3 = i2;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js
var i3 = class extends f {
  constructor(o3) {
    super(o3), this.name = null, this.alias = null, this.role = null, this.strict = null, this.properties = null, this.fieldIndexes = null, this.type = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "name", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "alias", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i3.prototype, "role", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i3.prototype, "strict", void 0), e([y({
  type: [s3],
  json: {
    write: true
  }
})], i3.prototype, "properties", void 0), e([y({
  type: [i],
  json: {
    write: true
  }
})], i3.prototype, "fieldIndexes", void 0), i3 = e([a("esri.rest.knowledgeGraph.GraphObjectType")], i3);
var l = i3;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js
var t4 = class extends l {
  constructor(r4) {
    super(r4), this.type = "entity";
  }
};
t4 = e([a("esri.rest.knowledgeGraph.EntityType")], t4);
var e2 = t4;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js
var t5 = class extends l {
  constructor(o3) {
    super(o3), this.endPoints = [], this.type = "relationship";
  }
};
e([y()], t5.prototype, "endPoints", void 0), t5 = e([a("esri.rest.knowledgeGraph.RelationshipType")], t5);
var p5 = t5;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js
var n4 = class extends f {
  constructor(t9) {
    super(t9), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = null, this.entityTypes = null, this.relationshipTypes = null, this.metaEntityTypes = null;
  }
};
e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t9, e7) => {
        e7.timestamp = t9?.getTime();
      }
    }
  }
})], n4.prototype, "timestamp", void 0), e([y({
  type: f2,
  json: {
    write: true
  }
})], n4.prototype, "spatialReference", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], n4.prototype, "strict", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n4.prototype, "objectIdField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n4.prototype, "globalIdField", void 0), e([y()], n4.prototype, "arcgisManaged", void 0), e([y()], n4.prototype, "identifierInfo", void 0), e([y()], n4.prototype, "searchIndexes", void 0), e([y({
  type: [e2],
  json: {
    write: true
  }
})], n4.prototype, "entityTypes", void 0), e([y({
  type: [p5],
  json: {
    write: true
  }
})], n4.prototype, "relationshipTypes", void 0), e([y({
  type: [e2],
  json: {
    write: true
  }
})], n4.prototype, "metaEntityTypes", void 0), n4 = e([a("esri.rest.knowledgeGraph.DataModel")], n4);
var l2 = n4;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js
var p6 = class extends f {
  constructor(t9) {
    super(t9), this.capabilities = [], this.supportsSearch = false, this.supportedQueryFormats = [], this.allowGeometryUpdates = false, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = false, this.dataEditingNotSupported = false, this.schemaEditingNotSupported = false, this.supportsProvenance = false;
  }
};
e([y({
  type: [String],
  json: {
    write: true
  }
})], p6.prototype, "capabilities", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p6.prototype, "supportsSearch", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], p6.prototype, "supportedQueryFormats", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p6.prototype, "allowGeometryUpdates", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p6.prototype, "searchMaxRecordCount", void 0), e([y({
  type: Object,
  json: {
    write: true
  }
})], p6.prototype, "serviceCapabilities", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p6.prototype, "maxRecordCount", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "copyrightText", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "units", void 0), e([y({
  type: f2,
  json: {
    write: true
  }
})], p6.prototype, "spatialReference", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p6.prototype, "currentVersion", void 0), e([y({
  type: Object,
  json: {
    write: true
  }
})], p6.prototype, "dateFieldsTimeReference", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "serviceItemId", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p6.prototype, "supportsDocuments", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p6.prototype, "dataEditingNotSupported", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p6.prototype, "schemaEditingNotSupported", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p6.prototype, "supportsProvenance", void 0), p6 = e([a("esri.rest.knowledgeGraph.ServiceDefinition")], p6);
var s4 = p6;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/KnowledgeGraph.js
var p7 = class extends f {
  constructor(o3) {
    super(o3), this.dataModel = null, this.serviceDefinition = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p7.prototype, "url", void 0), e([y({
  type: l2,
  json: {
    write: true
  }
})], p7.prototype, "dataModel", void 0), e([y({
  type: s4,
  json: {
    write: true
  }
})], p7.prototype, "serviceDefinition", void 0), p7 = e([a("esri.rest.knowledgeGraph.KnowledgeGraph")], p7);
var c3 = p7;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess.js
var t6 = "esri/rest/knowledgeGraph/wasmInterface/";
var s5;
var n5 = null;
function r() {
  return __async(this, null, function* () {
    const e7 = n5 ?? s5;
    if (e7) return e7;
    const t9 = has("wasm-simd");
    return s5 = o(t9), s5;
  });
}
function o(s8) {
  return __async(this, null, function* () {
    if (s8) {
      const {
        default: s9
      } = yield import("./arcgis-knowledge-client-core-simd-BWBVPVBE.js").then((e7) => e7.a);
      return s9({
        locateFile: (s10) => n2(t6 + s10)
      });
    }
    const {
      default: n7
    } = yield import("./arcgis-knowledge-client-core-JXOLEBE5.js").then((e7) => e7.a);
    return n7({
      locateFile: (s9) => n2(t6 + s9)
    });
  });
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js
var e3;
var T;
var i4;
!function(e7) {
  e7[e7.OBJECT = 0] = "OBJECT", e7[e7.ENTITY = 1] = "ENTITY", e7[e7.RELATIONSHIP = 2] = "RELATIONSHIP", e7[e7.PATH = 3] = "PATH", e7[e7.ARRAY = 4] = "ARRAY";
}(e3 || (e3 = {})), function(e7) {
  e7[e7.view = 0] = "view", e7[e7.edit = 1] = "edit";
}(T || (T = {})), function(e7) {
  e7[e7.exclude = 0] = "exclude", e7[e7.include = 1] = "include";
}(i4 || (i4 = {}));

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js
function s6(e7, t9) {
  const n7 = new t9.ArrayValue();
  return n7.deleteLater(), e7.forEach((e8) => {
    n7.add_value(f3(e8, t9));
  }), n7;
}
function l3(e7, t9) {
  const n7 = new t9.ObjectValue();
  n7.deleteLater();
  for (const [o3, r4] of Object.entries(e7)) n7.set_key_value(o3, f3(r4, t9));
  return n7;
}
function u2(a5, i7) {
  if (a5 instanceof u) return g(a5, i7);
  if (a5 instanceof _) return h(a5, i7);
  if (a5 instanceof m || a5 instanceof j) return p8(a5, i7);
  throw new s("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", {
    geometry: a5
  });
}
function y2(e7, t9) {
  t9.input_quantization_parameters = {
    xy_resolution: e7.xyResolution,
    x_false_origin: e7.xFalseOrigin,
    y_false_origin: e7.yFalseOrigin,
    z_resolution: e7.zResolution,
    z_false_origin: e7.zFalseOrigin,
    m_resolution: e7.mResolution,
    m_false_origin: e7.mFalseOrigin
  };
}
function m3(t9, n7, o3) {
  if (!t9.extent) throw new s("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", t9.extent);
  if (!t9.quantizeMode) throw new s("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", t9.quantizeMode);
  if (!t9.tolerance) throw new s("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", t9.quantizeMode);
  n7.output_quantization_parameters = {
    extent: {
      xmax: t9.extent.xmax,
      ymax: t9.extent.ymax,
      xmin: t9.extent.xmin,
      ymin: t9.extent.ymin
    },
    quantize_mode: o3.esriQuantizeMode[t9.quantizeMode],
    tolerance: t9.tolerance
  };
}
function c4(e7, t9) {
  t9.provenance_behavior = {
    value: i4[e7]
  };
}
function f3(e7, t9) {
  if (null == e7) return "";
  if ("object" != typeof e7) return e7;
  if (e7 instanceof Date) return e7;
  if (e7 instanceof n3) return u2(e7, t9);
  if (Array.isArray(e7)) {
    const n7 = new t9.ArrayValue();
    return n7.deleteLater(), e7.forEach((e8) => {
      n7.add_value(f3(e8, t9));
    }), n7;
  }
  return l3(e7, t9);
}
function p8(e7, t9) {
  const n7 = new t9.GeometryValue();
  n7.deleteLater(), n7.has_z = e7.hasZ, n7.has_m = e7.hasM;
  const a5 = [], i7 = [];
  let s8 = [];
  e7 instanceof m ? (n7.geometry_type = t9.esriGeometryType.esriGeometryPolyline, s8 = e7.paths) : e7 instanceof j && (n7.geometry_type = t9.esriGeometryType.esriGeometryPolygon, s8 = e7.rings);
  let l5 = 0, u3 = 0;
  return s8.forEach((e8) => {
    let t10 = 0;
    e8.forEach((e9) => {
      t10++, e9.forEach((e10) => {
        a5[u3] = e10, u3++;
      });
    }), i7[l5] = t10, l5++;
  }), n7.coords = new Float64Array(a5), n7.lengths = new Uint32Array(i7), n7;
}
function g(e7, t9) {
  const n7 = new t9.GeometryValue();
  n7.deleteLater(), n7.geometry_type = n7.geometry_type = t9.esriGeometryType.esriGeometryMultipoint, n7.has_z = e7.hasZ, n7.has_m = e7.hasM;
  const o3 = [], r4 = [];
  r4[0] = e7.points.length;
  let a5 = 0;
  return e7.points.forEach((e8) => {
    e8.forEach((e9) => {
      o3[a5] = e9, a5++;
    });
  }), n7.coords = new Float64Array(o3), n7.lengths = new Uint32Array(r4), n7;
}
function h(e7, t9) {
  const n7 = new t9.GeometryValue();
  n7.deleteLater(), n7.geometry_type = t9.esriGeometryType.esriGeometryPoint, n7.has_z = e7.hasZ, n7.has_m = e7.hasM;
  const o3 = [], r4 = [];
  r4[0] = 1, o3[0] = e7.x, o3[1] = e7.y;
  let a5 = 2;
  return e7.hasZ && (o3[a5] = e7.z, a5++), e7.hasM && (o3[a5] = e7.m, a5++), n7.coords = new Float64Array(o3), n7.lengths = new Uint32Array(r4), n7;
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js
function r2(i7, n7) {
  if (!i7.typeName) throw new s("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (i7 instanceof m2) {
    const e7 = new n7.EntityValue();
    e7.deleteLater(), e7.type_name = i7.typeName;
    for (const [t9, o3] of Object.entries(i7.properties)) e7.set_key_value(t9, a3(o3, n7));
    return i7.id && e7.set_id(i7.id), e7;
  }
  if (i7 instanceof p) {
    const e7 = new n7.RelationshipValue();
    e7.deleteLater(), e7.type_name = i7.typeName;
    for (const [t9, o3] of Object.entries(i7.properties)) e7.set_key_value(t9, a3(o3, n7));
    return i7.id && e7.set_id(i7.id), i7.originId && i7.destinationId && e7.set_related_entity_ids(i7.originId, i7.destinationId), e7;
  }
  throw new s("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function s7(e7) {
  return {
    xy_resolution: e7.xyResolution,
    x_false_origin: e7.xFalseOrigin,
    y_false_origin: e7.yFalseOrigin,
    z_resolution: e7.zResolution,
    z_false_origin: e7.zFalseOrigin,
    m_resolution: e7.mResolution,
    m_false_origin: e7.mFalseOrigin
  };
}
function a3(e7, t9) {
  return null == e7 ? null : "object" != typeof e7 || e7 instanceof Date ? e7 : e7 instanceof n3 ? u2(e7, t9) : null;
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/SearchIndex.js
var t7 = class extends S {
  constructor(r4) {
    super(r4), this.name = null, this.supportedCategory = null, this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
e([y()], t7.prototype, "name", void 0), e([y()], t7.prototype, "supportedCategory", void 0), e([y()], t7.prototype, "analyzers", void 0), e([y()], t7.prototype, "searchProperties", void 0), t7 = e([a("esri.rest.knowledgeGraph.SearchIndex")], t7);
var p9 = t7;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces.js
var e4;
var r3;
var i5;
var t8;
var o2;
var p10;
var n6;
!function(e7) {
  e7[e7.Regular = 0] = "Regular", e7[e7.Provenance = 1] = "Provenance", e7[e7.Document = 2] = "Document";
}(e4 || (e4 = {})), function(e7) {
  e7[e7.esriFieldTypeSmallInteger = 0] = "esriFieldTypeSmallInteger", e7[e7.esriFieldTypeInteger = 1] = "esriFieldTypeInteger", e7[e7.esriFieldTypeSingle = 2] = "esriFieldTypeSingle", e7[e7.esriFieldTypeDouble = 3] = "esriFieldTypeDouble", e7[e7.esriFieldTypeString = 4] = "esriFieldTypeString", e7[e7.esriFieldTypeDate = 5] = "esriFieldTypeDate", e7[e7.esriFieldTypeOID = 6] = "esriFieldTypeOID", e7[e7.esriFieldTypeGeometry = 7] = "esriFieldTypeGeometry", e7[e7.esriFieldTypeBlob = 8] = "esriFieldTypeBlob", e7[e7.esriFieldTypeRaster = 9] = "esriFieldTypeRaster", e7[e7.esriFieldTypeGUID = 10] = "esriFieldTypeGUID", e7[e7.esriFieldTypeGlobalID = 11] = "esriFieldTypeGlobalID", e7[e7.esriFieldTypeXML = 12] = "esriFieldTypeXML", e7[e7.esriFieldTypeBigInteger = 13] = "esriFieldTypeBigInteger", e7[e7.esriFieldTypeDateOnly = 14] = "esriFieldTypeDateOnly", e7[e7.esriFieldTypeTimeOnly = 15] = "esriFieldTypeTimeOnly", e7[e7.esriFieldTypeTimestampOffset = 16] = "esriFieldTypeTimestampOffset";
}(r3 || (r3 = {})), function(e7) {
  e7[e7.esriGeometryNull = 0] = "esriGeometryNull", e7[e7.esriGeometryPoint = 1] = "esriGeometryPoint", e7[e7.esriGeometryMultipoint = 2] = "esriGeometryMultipoint", e7[e7.esriGeometryPolyline = 3] = "esriGeometryPolyline", e7[e7.esriGeometryPolygon = 4] = "esriGeometryPolygon", e7[e7.esriGeometryEnvelope = 5] = "esriGeometryEnvelope", e7[e7.esriGeometryAny = 6] = "esriGeometryAny", e7[e7.esriGeometryMultiPatch = 7] = "esriGeometryMultiPatch";
}(i5 || (i5 = {})), function(e7) {
  e7[e7.esriMethodHintUNSPECIFIED = 0] = "esriMethodHintUNSPECIFIED", e7[e7.esriUUIDESRI = 1] = "esriUUIDESRI", e7[e7.esriUUIDRFC4122 = 2] = "esriUUIDRFC4122";
}(t8 || (t8 = {})), function(e7) {
  e7[e7.esriTypeUNSPECIFIED = 0] = "esriTypeUNSPECIFIED", e7[e7.esriTypeEntity = 1] = "esriTypeEntity", e7[e7.esriTypeRelationship = 2] = "esriTypeRelationship", e7[e7.esriTypeBoth = 4] = "esriTypeBoth";
}(o2 || (o2 = {})), function(e7) {
  e7[e7.esriGraphPropertyUNSPECIFIED = 0] = "esriGraphPropertyUNSPECIFIED", e7[e7.esriGraphPropertyRegular = 1] = "esriGraphPropertyRegular", e7[e7.esriGraphPropertyDocumentName = 2] = "esriGraphPropertyDocumentName", e7[e7.esriGraphPropertyDocumentTitle = 3] = "esriGraphPropertyDocumentTitle", e7[e7.esriGraphPropertyDocumentUrl = 4] = "esriGraphPropertyDocumentUrl", e7[e7.esriGraphPropertyDocumentText = 5] = "esriGraphPropertyDocumentText", e7[e7.esriGraphPropertyDocumentKeywords = 6] = "esriGraphPropertyDocumentKeywords", e7[e7.esriGraphPropertyDocumentContentType = 7] = "esriGraphPropertyDocumentContentType", e7[e7.esriGraphPropertyDocumentMetadata = 8] = "esriGraphPropertyDocumentMetadata", e7[e7.esriGraphPropertyDocumentFileExtension = 9] = "esriGraphPropertyDocumentFileExtension", e7[e7.esriGraphPropertyProvenanceInstanceId = 10] = "esriGraphPropertyProvenanceInstanceId", e7[e7.esriGraphPropertyProvenanceSourceType = 11] = "esriGraphPropertyProvenanceSourceType", e7[e7.esriGraphPropertyProvenanceSourceName = 12] = "esriGraphPropertyProvenanceSourceName", e7[e7.esriGraphPropertyProvenanceSource = 13] = "esriGraphPropertyProvenanceSource", e7[e7.esriGraphPropertyProvenanceComment = 14] = "esriGraphPropertyProvenanceComment", e7[e7.esriGraphPropertyProvenanceTypeName = 15] = "esriGraphPropertyProvenanceTypeName", e7[e7.esriGraphPropertyProvenancePropertyName = 16] = "esriGraphPropertyProvenancePropertyName";
}(p10 || (p10 = {})), function(e7) {
  e7[e7.esriIdentifierInfoTypeUNSPECIFIED = 0] = "esriIdentifierInfoTypeUNSPECIFIED", e7[e7.esriIdentifierInfoTypeDatabaseNative = 1] = "esriIdentifierInfoTypeDatabaseNative", e7[e7.esriIdentifierInfoTypeUniformProperty = 2] = "esriIdentifierInfoTypeUniformProperty";
}(n6 || (n6 = {}));

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelFactories.js
function _2(i7) {
  return i7.deleteLater(), new l2({
    timestamp: i7.timestamp,
    spatialReference: new f2(i7.spatial_reference),
    strict: i7.strict,
    objectIdField: i7.objectid_property,
    globalIdField: i7.globalid_property,
    arcgisManaged: i7.arcgis_managed,
    identifierInfo: {
      identifierMappingInfo: {
        identifierInfoType: n6[i7.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],
        databaseNativeIdentifier: i7.identifier_info?.identifier_mapping_info?.database_native_identifier,
        uniformPropertyIdentifier: {
          identifierPropertyName: i7.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name
        }
      },
      identifierGenerationInfo: {
        uuidMethodHint: t8[i7.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]
      }
    },
    searchIndexes: M(i7.search_indexes),
    entityTypes: j2(i7.entity_types),
    relationshipTypes: x(i7.relationship_types),
    metaEntityTypes: j2(i7.meta_entity_types)
  });
}
function c5(e7) {
  return e7.deleteLater(), new e2(z(e7));
}
function g2(e7) {
  return e7.deleteLater(), new i({
    name: e7.name,
    unique: e7.unique,
    ascending: e7.ascending,
    description: e7.description,
    fieldNames: I(e7.fields)
  });
}
function z(e7) {
  return {
    name: e7.name,
    alias: e7.alias,
    role: e4[e7.role.value] ? e4[e7.role.value] : null,
    strict: e7.strict,
    properties: T2(e7.properties),
    fieldIndexes: w(e7.field_indexes)
  };
}
function b(e7) {
  return e7.deleteLater(), new s3({
    alias: e7.alias,
    name: e7.name,
    fieldType: r3[e7.field_type.value] ? r3[e7.field_type.value] : null,
    geometryType: i5[e7.geometry_type.value] ? i5[e7.geometry_type.value] : null,
    hasM: e7.has_m,
    hasZ: e7.has_z,
    nullable: e7.nullable,
    editable: e7.editable,
    required: e7.required,
    defaultVisibility: e7.default_visibility,
    systemMaintained: e7.system_maintained,
    role: p10[e7.role.value],
    defaultValue: e7.default_value
  });
}
function v(e7) {
  e7.deleteLater();
  const t9 = z(e7), i7 = [];
  for (let n7 = 0; n7 < e7.end_points.size(); n7++) {
    const t10 = e7.end_points.get(n7);
    i7.push({
      originEntityType: t10.origin_entity_type,
      destinationEntityType: t10.dest_entity_type
    });
  }
  return e7.end_points.delete(), new p5(Object.assign({
    endPoints: i7
  }, t9));
}
function j2(e7) {
  const t9 = [];
  for (let i7 = 0; i7 < e7.size(); i7++) t9.push(c5(e7.get(i7)));
  return e7.delete(), t9;
}
function I(e7) {
  const t9 = [];
  for (let i7 = 0; i7 < e7.size(); i7++) t9.push(e7.get(i7));
  return e7.delete(), t9;
}
function T2(e7) {
  const t9 = [];
  for (let i7 = 0; i7 < e7.size(); i7++) t9.push(b(e7.get(i7)));
  return e7.delete(), t9;
}
function w(e7) {
  const t9 = [];
  for (let i7 = 0; i7 < e7.size(); i7++) t9.push(g2(e7.get(i7)));
  return e7.delete(), t9;
}
function x(e7) {
  const t9 = [];
  for (let i7 = 0; i7 < e7.size(); i7++) t9.push(v(e7.get(i7)));
  return e7.delete(), t9;
}
function M(e7) {
  const t9 = [];
  for (let i7 = 0; i7 < e7.size(); i7++) {
    const i8 = new p9(), n7 = e7.get(0);
    i8.name = n7.name, i8.supportedCategory = o2[n7.supported_category.value];
    const r4 = n7.analyzers.size();
    for (let e8 = 0; e8 < r4; e8++) i8.analyzers.push({
      name: n7.analyzers.get(e8).name
    });
    n7.analyzers.delete();
    for (let e8 = 0; e8 < n7.search_properties.keys().size(); e8++) {
      const t10 = n7.search_properties.keys().get(e8), r5 = n7.search_properties.get(t10), a5 = [];
      for (let e9 = 0; e9 < r5.property_names.size(); e9++) a5.push(r5.property_names.get(e9));
      i8.searchProperties.set(t10, {
        propertyNames: a5
      });
    }
    t9.push(i8);
  }
  return e7.delete(), t9;
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/KnowledgeWasmInterface.js
var E;
!function(E4) {
  E4[E4.ESRI_GEOMETRY_NULL = 0] = "ESRI_GEOMETRY_NULL", E4[E4.ESRI_GEOMETRY_POINT = 1] = "ESRI_GEOMETRY_POINT", E4[E4.ESRI_GEOMETRY_MULTIPOINT = 2] = "ESRI_GEOMETRY_MULTIPOINT", E4[E4.ESRI_GEOMETRY_POLYLINE = 3] = "ESRI_GEOMETRY_POLYLINE", E4[E4.ESRI_GEOMETRY_POLYGON = 4] = "ESRI_GEOMETRY_POLYGON", E4[E4.ESRI_GEOMETRY_ENVELOPE = 5] = "ESRI_GEOMETRY_ENVELOPE", E4[E4.ESRI_GEOMETRY_ANY = 6] = "ESRI_GEOMETRY_ANY", E4[E4.ESRI_GEOMETRY_MULTI_PATCH = 7] = "ESRI_GEOMETRY_MULTI_PATCH";
}(E || (E = {}));

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToGeometryFactories.js
function l4(e7, o3) {
  const r4 = {
    spatialReference: o3
  }, n7 = c6(e7, r4), s8 = e7.lengths, l5 = e7.coords, i7 = s8[0];
  r4.points = [];
  let a5 = 0;
  for (let t9 = 0; t9 < i7; t9++) {
    const e8 = [];
    for (let t10 = 0; t10 < n7; t10++) e8[t10] = l5[a5], a5++;
    r4.points.push(e8);
  }
  return new u(r4);
}
function i6(e7, t9) {
  const r4 = {
    spatialReference: t9
  };
  let n7 = 2;
  c6(e7, r4);
  const s8 = e7.coords;
  return r4.x = s8[0], r4.y = s8[1], e7.has_z && (r4.z = s8[n7], n7++), e7.has_m && (r4.m = s8[n7]), new _(r4);
}
function a4(e7, t9) {
  return new m(f4(e7, t9));
}
function m4(e7, t9) {
  return new j(f4(e7, t9));
}
function f4(t9, o3) {
  const r4 = {
    spatialReference: o3
  }, n7 = c6(t9, r4), l5 = t9.lengths, i7 = t9.coords;
  let a5 = "";
  if (t9.geometry_type.value === E.ESRI_GEOMETRY_POLYGON) a5 = "rings";
  else {
    if (t9.geometry_type.value !== E.ESRI_GEOMETRY_POLYLINE) throw new s("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
    a5 = "paths";
  }
  r4[a5] = [];
  let m6 = 0;
  return l5.forEach((e7) => {
    const t10 = [];
    for (let o4 = 0; o4 < e7; o4++) {
      const e8 = [];
      for (let t11 = 0; t11 < n7; t11++) e8[t11] = i7[m6], m6++;
      t10.push(e8);
    }
    r4[a5].push(t10);
  }), r4;
}
function c6(e7, t9) {
  let o3 = 2;
  return e7.has_z ? (t9.hasZ = e7.has_z, o3++) : t9.hasZ = false, e7.has_m ? (t9.hasM = e7.has_m, o3++) : t9.hasM = false, o3;
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js
var m5 = () => n.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");
var f5 = {
  decodedWasmObjToQueryResponseObj: (e7, t9, r4) => {
    if (null == e7) return null;
    if ("object" != typeof e7) return e7;
    if ("getDate" in e7) return e7;
    if ("geometry_type" in e7) switch (e7.geometry_type.value) {
      case null:
        return null;
      case E.ESRI_GEOMETRY_POINT:
        return i6(e7, r4);
      case E.ESRI_GEOMETRY_MULTIPOINT:
        return l4(e7, r4);
      case E.ESRI_GEOMETRY_POLYLINE:
        return a4(e7, r4);
      case E.ESRI_GEOMETRY_POLYGON:
        return m4(e7, r4);
      case E.ESRI_GEOMETRY_ENVELOPE:
      case E.ESRI_GEOMETRY_MULTI_PATCH:
        return m5().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
      case E.ESRI_GEOMETRY_NULL:
      case E.ESRI_GEOMETRY_ANY:
      default:
        return m5().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
    }
    else {
      if (!("object_value_type" in e7)) return m5().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
      switch (e7.object_value_type.value) {
        case e3.OBJECT:
          return j3(e7, t9, r4);
        case e3.ENTITY:
          return E2(e7, t9, r4);
        case e3.RELATIONSHIP:
          return h2(e7, t9, r4);
        case e3.PATH:
          return T3(e7, t9, r4);
        case e3.ARRAY:
          return y3(e7, t9, r4);
        default:
          return m5().warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
      }
    }
  }
};
function y3(e7, t9, r4) {
  const n7 = [], o3 = e7.count();
  for (let s8 = 0; s8 < o3; s8++) {
    const o4 = e7.get_value_at(s8);
    n7.push(g3(o4, t9, r4));
  }
  return n7;
}
function g3(e7, t9, r4) {
  return f5.decodedWasmObjToQueryResponseObj(e7, t9, r4);
}
function E2(e7, r4, n7) {
  const o3 = e7.type_name, s8 = O(e7, r4, n7), a5 = e7.get_id();
  return new m2(Object.assign({
    typeName: o3,
    id: a5
  }, s8));
}
function O(e7, t9, r4) {
  const n7 = {}, o3 = e7.key_count();
  for (let s8 = 0; s8 < o3; s8++) n7[e7.get_key_at(s8)] = g3(e7.get_value_at(s8), t9, r4);
  return {
    properties: n7
  };
}
function j3(e7, t9, r4) {
  return new t2(O(e7, t9, r4));
}
function T3(e7, t9, r4) {
  const n7 = e7.entity_count(), o3 = e7.relationship_count(), a5 = [];
  for (let s8 = 0; s8 < n7; s8++) a5.push(E2(e7.get_entity_at(s8), t9, r4)), s8 < o3 && a5.push(h2(e7.get_relationship_at(s8), t9, r4));
  return new c({
    path: a5
  });
}
function h2(e7, t9, r4) {
  const n7 = e7.type_name, o3 = O(e7, t9, r4);
  return new p(Object.assign({
    typeName: n7,
    id: e7.get_id(),
    originId: e7.get_origin_entity_id(),
    destinationId: e7.get_destination_entity_id()
  }, o3));
}
function w2(e7) {
  const t9 = [];
  for (let n7 = 0; n7 < e7.get_header_keys().size(); n7++) t9.push(e7.get_header_keys().get(n7));
  const r4 = new f2(e7.get_out_sr());
  return new p2({
    headerKeys: t9,
    outSpatialReference: r4,
    exceededTransferLimit: e7.exceeded_transfer_limit()
  });
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphApplyEditsResult.js
var e5 = class extends S {
  constructor(r4) {
    super(r4), this.hasError = null, this.error = null, this.editResults = [];
  }
};
e([y()], e5.prototype, "hasError", void 0), e([y()], e5.prototype, "error", void 0), e([y()], e5.prototype, "editResults", void 0), e5 = e([a("esri.rest.knowledgeGraph.GraphApplyEditsResult")], e5);
var p12 = e5;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js
function e6(e7) {
  const o3 = e7.has_error(), t9 = new p12({
    hasError: o3,
    error: o3 ? {
      errorCode: e7.error.error_code,
      errorMessage: e7.error.error_message
    } : null
  }), s8 = e7.get_edit_results_count();
  for (let r4 = 0; r4 < s8; r4++) {
    const o4 = e7.get_edit_results_at(r4), s9 = e7.get_edit_results_type_name_at(r4), _3 = [], d = [], u3 = [], a5 = o4.get_add_results_count(), l5 = o4.get_update_results_count(), g4 = o4.get_delete_results_count();
    for (let r5 = 0; r5 < a5; r5++) {
      const e8 = o4.get_add_result_at(r5);
      _3.push({
        id: e8.id,
        error: {
          errorCode: e8.error.error_code,
          errorMessage: e8.error.error_message
        }
      });
    }
    for (let r5 = 0; r5 < l5; r5++) {
      const e8 = o4.get_update_result_at(r5);
      d.push({
        id: e8.id,
        error: {
          errorCode: e8.error.error_code,
          errorMessage: e8.error.error_message
        }
      });
    }
    for (let r5 = 0; r5 < g4; r5++) {
      const e8 = o4.get_delete_result_at(r5);
      u3.push({
        id: e8.id,
        error: {
          errorCode: e8.error.error_code,
          errorMessage: e8.error.error_message
        }
      });
    }
    t9.editResults.push({
      typeName: s9,
      adds: _3,
      updates: d,
      deletes: u3
    });
  }
  return t9;
}

// ../../../node_modules/@arcgis/core/rest/knowledgeGraphService.js
var G = {
  fetchKnowledgeGraph: (e7) => __async(void 0, null, function* () {
    const t9 = new c3({
      url: e7
    }), r4 = [];
    return r4.push(A(t9)), r4.push(M2(t9)), yield Promise.all(r4), t9;
  }),
  refreshDataModel: (e7) => __async(void 0, null, function* () {
    e7.dataModel = yield K(e7);
  }),
  refreshServiceDefinition: (e7) => __async(void 0, null, function* () {
    const r4 = (yield U(e7.url, {
      query: {
        f: "json"
      }
    })).data;
    return r4.capabilities = r4?.capabilities?.split(","), r4.supportedQueryFormats = r4?.supportedQueryFormats?.split(","), e7.serviceDefinition = new s4(r4), e7.serviceDefinition;
  }),
  executeQueryStreaming: (e7, t9, a5) => __async(void 0, null, function* () {
    const n7 = "include", o3 = `${e7.url}/graph/query`;
    yield C(e7);
    const d = yield L(o3, a5);
    if (!e7.serviceDefinition?.supportsProvenance && t9.provenanceBehavior === n7) throw new s("knowledge-graph:provenance-not-supported", "The Knowledge Graph Service definition indicated that provenance is not supported");
    d.data.body = yield P(t9, e7);
    const s8 = yield j4(d.data.url, d.data);
    if (e7.dataModel) {
      const t10 = yield U2(s8, e7.dataModel);
      return new p4({
        resultRowsStream: t10.readableStream,
        resultHeader: t10.resultHeader
      });
    }
    throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }),
  executeApplyEdits: (e7, t9, a5) => __async(void 0, null, function* () {
    if (e7.serviceDefinition?.dataEditingNotSupported) throw new s("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
    const n7 = `${e7.url}/graph/applyEdits`;
    yield C(e7);
    const o3 = yield L(n7, a5);
    o3.data.body = yield W(t9, e7);
    return I2(yield j4(o3.data.url, o3.data));
  }),
  executeQuery: (e7, a5, o3) => __async(void 0, null, function* () {
    const i7 = `${e7.url}/graph/query`, d = yield U(i7, {
      responseType: "array-buffer",
      query: __spreadValues({
        f: "pbf",
        openCypherQuery: a5.openCypherQuery
      }, o3?.query),
      signal: o3?.signal,
      timeout: o3?.timeout
    }), s8 = d.getHeader?.("content-type"), l5 = d.data;
    if (s8?.includes("application/x-protobuf")) {
      const t9 = new (yield r()).GraphQueryDecoder();
      if (t9.deleteLater(), e7.dataModel) {
        const r4 = z2(t9, l5, e7.dataModel);
        return new c2({
          resultRows: r4.resultRows,
          resultHeader: r4.resultHeader
        });
      }
      throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
    }
    throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", {
      responseType: s8,
      data: d.data
    });
  }),
  executeSearch: (e7, a5, o3) => __async(void 0, null, function* () {
    const i7 = a5.typeCategoryFilter, d = `${e7.url}/graph/search`, s8 = yield U(d, {
      responseType: "array-buffer",
      query: __spreadValues({
        f: "pbf",
        searchQuery: `"${a5.searchQuery}"`,
        typeCategoryFilter: i7
      }, o3?.query),
      signal: o3?.signal,
      timeout: o3?.timeout
    }), l5 = s8.getHeader?.("content-type"), c7 = s8.data;
    if (l5?.includes("application/x-protobuf")) {
      const t9 = new (yield r()).GraphQueryDecoder();
      if (t9.deleteLater(), e7.dataModel) {
        const r4 = z2(t9, c7, e7.dataModel);
        return new c2({
          resultRows: r4.resultRows,
          resultHeader: r4.resultHeader
        });
      }
      throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
    }
    throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", {
      responseType: l5,
      data: s8.data
    });
  }),
  executeSearchStreaming: (e7, t9, a5) => __async(void 0, null, function* () {
    const n7 = `${e7.url}/graph/search`;
    yield C(e7);
    const o3 = yield L(n7, a5);
    o3.data.body = yield F(t9);
    const d = yield j4(o3.data.url, o3.data);
    if (e7.dataModel) {
      const t10 = yield U2(d, e7.dataModel);
      return new p4({
        resultRowsStream: t10.readableStream,
        resultHeader: t10.resultHeader
      });
    }
    throw new s("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }),
  _fetchWrapper: (e7, t9) => __async(void 0, null, function* () {
    return fetch(e7, t9);
  })
};
function x2(e7, t9, r4) {
  return __async(this, null, function* () {
    return G.executeApplyEdits(e7, t9, r4);
  });
}
function E3(e7, t9, r4) {
  return __async(this, null, function* () {
    return G.executeQuery(e7, t9, r4);
  });
}
function T4(e7, t9, r4) {
  return __async(this, null, function* () {
    return G.executeQueryStreaming(e7, t9, r4);
  });
}
function q(e7, t9, r4) {
  return __async(this, null, function* () {
    return G.executeSearch(e7, t9, r4);
  });
}
function Q(e7, t9, r4) {
  return __async(this, null, function* () {
    return G.executeSearchStreaming(e7, t9, r4);
  });
}
function R(e7) {
  return __async(this, null, function* () {
    return G.fetchKnowledgeGraph(e7);
  });
}
function A(e7) {
  return __async(this, null, function* () {
    return G.refreshDataModel(e7);
  });
}
function M2(e7) {
  return __async(this, null, function* () {
    return G.refreshServiceDefinition(e7);
  });
}
function j4(e7, t9) {
  return __async(this, null, function* () {
    return G._fetchWrapper(e7, t9);
  });
}
function C(t9) {
  return __async(this, null, function* () {
    const r4 = t?.findCredential(t9.url);
    r4 || (t9.dataModel ? yield K(t9) : yield A(t9));
  });
}
function D(e7, t9, a5) {
  if (0 !== e7.error_code) throw new s(t9, a5, {
    errorCode: e7.error_code,
    errorMessage: e7.error_message
  });
}
function H(e7, t9, r4, a5) {
  null == t9 ? r4.set_param_key_value(e7, "") : "object" != typeof t9 || t9 instanceof Date ? r4.set_param_key_value(e7, t9) : t9 instanceof n3 ? r4.set_param_key_value(e7, u2(t9, a5)) : Array.isArray(t9) ? r4.set_param_key_value(e7, s6(t9, a5)) : r4.set_param_key_value(e7, l3(t9, a5));
}
function W(e7, t9) {
  return __async(this, null, function* () {
    if (t9.dataModel || (yield A(t9)), !t9.dataModel) throw new s("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
    const a5 = yield r(), n7 = !!e7.options?.cascadeDelete, o3 = new a5.GraphApplyEditsEncoder(a5.SpatialReferenceUtil.WGS84(), e7.options?.inputQuantizationParameters ? s7(e7.options?.inputQuantizationParameters) : a5.InputQuantizationUtil.WGS84_lossless());
    o3.deleteLater(), o3.cascade_delete = n7;
    try {
      let t10;
      e7.entityAdds?.forEach((e8) => {
        t10 = o3.add_entity(r2(e8, a5)), D(t10, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
      }), e7.relationshipAdds?.forEach((e8) => {
        if (!e8.originId || !e8.destinationId) throw new s("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
        t10 = o3.add_relationship(r2(e8, a5)), D(t10, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
      }), e7.entityUpdates?.forEach((e8) => {
        if (!e8.id) throw new s("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
        t10 = o3.update_entity(r2(e8, a5)), D(t10, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
      }), e7.relationshipUpdates?.forEach((e8) => {
        if (!e8.id) throw new s("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
        t10 = o3.update_relationship(r2(e8, a5)), D(t10, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
      }), e7.entityDeletes?.forEach((e8) => {
        if (!e8.typeName) throw new s("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
        const t11 = o3.make_delete_helper(e8.typeName, true);
        t11.deleteLater(), e8.ids?.forEach((e9) => {
          t11.delete_by_id(e9);
        });
      }), e7.relationshipDeletes?.forEach((e8) => {
        if (!e8.typeName) throw new s("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
        const t11 = o3.make_delete_helper(e8.typeName, false);
        e8.ids?.forEach((e9) => {
          t11.delete_by_id(e9);
        });
      }), o3.encode();
    } catch (d) {
      throw new s("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", {
        error: d
      });
    }
    const i7 = o3.get_encoding_result();
    return D(i7.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), structuredClone(i7.get_byte_buffer());
  });
}
function P(e7, t9) {
  return __async(this, null, function* () {
    const a5 = yield r(), n7 = new a5.GraphQueryRequestEncoder();
    if (n7.deleteLater(), e7.outputSpatialReference ? n7.output_spatial_reference = {
      wkid: e7.outputSpatialReference.wkid,
      latestWkid: e7.outputSpatialReference.latestWkid,
      vcsWkid: e7.outputSpatialReference.vcsWkid,
      latestVcsWkid: e7.outputSpatialReference.latestVcsWkid,
      wkt: e7.outputSpatialReference.wkt ?? ""
    } : n7.output_spatial_reference = a5.SpatialReferenceUtil.WGS84(), n7.open_cypher_query = e7.openCypherQuery, e7.bindParameters) for (const [r4, d] of Object.entries(e7.bindParameters)) H(r4, d, n7, a5);
    if (e7.bindGeometryQuantizationParameters) y2(e7.bindGeometryQuantizationParameters, n7);
    else {
      if (t9.dataModel || (yield A(t9)), 4326 !== t9.dataModel?.spatialReference?.wkid) throw new s("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
      n7.input_quantization_parameters = a5.InputQuantizationUtil.WGS84_lossless();
    }
    e7.outputQuantizationParameters && m3(e7.outputQuantizationParameters, n7, a5), e7.provenanceBehavior && c4(e7.provenanceBehavior, n7);
    try {
      n7.encode();
    } catch (i7) {
      throw new s("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", {
        error: i7
      });
    }
    const o3 = n7.get_encoding_result();
    if (0 !== o3.error.error_code) throw new s("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", {
      errorCode: o3.error.error_code,
      errorMessage: o3.error.error_message
    });
    return structuredClone(o3.get_byte_buffer());
  });
}
function F(e7) {
  return __async(this, null, function* () {
    const t9 = yield r(), a5 = new t9.GraphSearchRequestEncoder();
    if (a5.deleteLater(), a5.search_query = e7.searchQuery, a5.type_category_filter = t9.esriNamedTypeCategory[e7.typeCategoryFilter], true === e7.returnSearchContext && (a5.return_search_context = e7.returnSearchContext), null != e7.start && e7.start > 0 && (a5.start_index = e7.start), null != e7.num && (a5.max_num_results = e7.num), null != e7.idsFilter && Array.isArray(e7.idsFilter) && e7.idsFilter.length > 0) try {
      a5.set_ids_filter(s6(e7.idsFilter, t9));
    } catch (o3) {
      throw new s("knowledge-graph:ids-format-error", "Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string", {
        error: o3
      });
    }
    e7.namedTypesFilter?.forEach((e8) => {
      a5.add_named_type_filter(e8);
    });
    try {
      a5.encode();
    } catch (o3) {
      throw new s("knowledge-graph:search-encoding-failed", "Attempting to encode the search failed", {
        error: o3
      });
    }
    const n7 = a5.get_encoding_result();
    if (0 !== n7.error.error_code) throw new s("knowledge-graph:search-encoding-failed", "Attempting to get encoding result from the query failed", {
      errorCode: n7.error.error_code,
      errorMessage: n7.error.error_message
    });
    return structuredClone(n7.get_byte_buffer());
  });
}
function L(e7, r4) {
  return __async(this, null, function* () {
    return U(e7, {
      responseType: "native-request-init",
      method: "post",
      query: __spreadValues({
        f: "pbf"
      }, r4?.query),
      body: "x",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      signal: r4?.signal,
      timeout: r4?.timeout
    });
  });
}
function I2(e7) {
  return __async(this, null, function* () {
    const t9 = e7.headers.get("content-type");
    if (t9?.includes("application/x-protobuf")) {
      const t10 = yield e7.arrayBuffer(), r4 = new (yield r()).GraphApplyEditsDecoder();
      return r4.deleteLater(), r4.decode(new Uint8Array(t10)), e6(r4);
    }
    throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", {
      responseType: t9,
      data: e7.text()
    });
  });
}
function z2(e7, t9, a5, n7) {
  e7.push_buffer(new Uint8Array(t9));
  const o3 = [];
  let i7, d, s8 = 0;
  for (; e7.next_row(); ) {
    i7 && d || (i7 = n7 ?? w2(e7), d = i7.outSpatialReference ?? new f2({
      wkid: 4326
    })), s8 || (s8 = e7.get_header_keys().size());
    const t10 = new Array(s8);
    for (let r4 = 0; r4 < s8; r4++) {
      const n8 = e7.get_value(r4);
      t10[r4] = g3(n8, a5, d);
    }
    o3.push(t10);
  }
  if (e7.has_error()) throw new s("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - inner row decoding", {
    errorCode: e7.error.error_code,
    errorMessage: e7.error.error_message
  });
  return {
    resultHeader: i7,
    resultRows: o3
  };
}
function U2(e7, t9) {
  return __async(this, null, function* () {
    const n7 = e7.headers.get("content-type");
    if (e7.headers.get("content-length") && n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), n7?.includes("application/x-protobuf")) {
      let _a;
      const n8 = e7.body?.getReader(), i7 = new (yield r()).GraphQueryDecoder();
      let d, s8, l5;
      i7.deleteLater();
      const c7 = new Promise((e8, t10) => {
        s8 = e8, l5 = t10;
      });
      let u3 = false;
      return {
        readableStream: new ReadableStream({
          start(e8) {
            return __async(this, null, function* () {
              try {
                return p13();
              } catch (c8) {
                n8?.releaseLock(), e8.error(new s("knowledge-graph:stream-decoding-error", "The server returned a valid response, but there was an error decoding the response stream", {
                  error: c8
                })), e8.close();
              }
              function p13() {
                return n8?.read().then(({
                  done: c8,
                  value: h3
                }) => {
                  try {
                    if (c8) {
                      let t10;
                      if (i7.has_error() ? t10 = new s("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - query stream done", {
                        errorCode: i7.error.error_code,
                        errorMessage: i7.error.error_message
                      }) : u3 || s8(new p2()), n8.releaseLock(), t10) throw e8.error(t10), l5(t10), t10;
                      return void e8.close();
                    }
                    const a5 = z2(i7, h3, t9, d), w3 = a5.resultRows;
                    return w3.length > 0 && e8.enqueue(w3), !d && a5.resultHeader && (d = a5.resultHeader, s8(a5.resultHeader), u3 = true), p13();
                  } catch (w3) {
                    throw n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(w3), l5(w3), new s("knowledge-graph:unexpected-server-response", "Error inside streaming data return parsing", {
                      error: w3
                    });
                  }
                });
              }
            });
          }
        }),
        resultHeader: yield c7
      };
    }
    throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", {
      responseType: n7,
      data: e7.text()
    });
  });
}
function K(e7) {
  return __async(this, null, function* () {
    const a5 = `${e7.url}/dataModel/queryDataModel`, n7 = yield U(a5, {
      responseType: "array-buffer",
      query: {
        f: "pbf"
      }
    }), o3 = n7.getHeader?.("content-type"), i7 = n7.data;
    if (o3?.includes("application/x-protobuf")) {
      const e8 = (yield r()).decode_data_model_from_protocol_buffer(new Uint8Array(i7));
      if (!e8) throw new s("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
      return _2(e8);
    }
    throw new s("knowledge-graph:unexpected-server-response", "server returned an unexpected response", {
      responseType: o3,
      data: n7.data
    });
  });
}

export {
  r,
  G,
  x2 as x,
  E3 as E,
  T4 as T,
  q,
  Q,
  R,
  A,
  M2 as M,
  j4 as j
};
//# sourceMappingURL=chunk-BHMMT4R2.js.map
