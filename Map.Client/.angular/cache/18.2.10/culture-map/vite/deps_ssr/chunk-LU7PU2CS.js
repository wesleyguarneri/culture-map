import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-4O23HCRT.js";
import {
  e as e3
} from "./chunk-3XHDZQO5.js";
import {
  e as e2,
  s as s2
} from "./chunk-2BLQXT54.js";
import {
  e
} from "./chunk-JSWVKNBA.js";
import {
  G,
  L
} from "./chunk-6SSA7P3A.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js
var n2 = ["esriGeometryPoint", "esriGeometryMultipoint", "esriGeometryPolyline", "esriGeometryPolygon"];
var a = class {
  constructor(e4) {
    this._options = e4, this.geometryTypes = n2, this._coordinatePtr = 0, this._vertexDimension = 0;
  }
  createFeatureResult() {
    return new e3();
  }
  prepareFeatures(e4) {
    this._vertexDimension = 2, e4.hasZ && this._vertexDimension++, e4.hasM && this._vertexDimension++;
  }
  finishFeatureResult(o2) {
    if (!o2?.features || !o2.hasZ || !this._options.sourceSpatialReference || !o2.spatialReference || G(o2.spatialReference, this._options.sourceSpatialReference) || o2.spatialReference.vcsWkid) return;
    const i2 = L(this._options.sourceSpatialReference) / L(o2.spatialReference);
    if (1 !== i2) for (const e4 of o2.features) {
      if (!s2(e4)) continue;
      const t2 = e4.geometry.coords;
      for (let e5 = 2; e5 < t2.length; e5 += 3) t2[e5] *= i2;
    }
  }
  addFeature(e4, t2) {
    e4.features.push(t2);
  }
  createFeature() {
    return new e2();
  }
  createSpatialReference() {
    return {
      wkid: 0
    };
  }
  createGeometry() {
    return new e();
  }
  addField(e4, t2) {
    e4.fields.push(t2);
  }
  allocateCoordinates(e4) {
    e4.coords.length = e4.lengths.reduce((e5, t2) => e5 + t2, 0) * this._vertexDimension, this._coordinatePtr = 0;
  }
  addCoordinate(e4, t2) {
    e4.coords[this._coordinatePtr++] = t2;
  }
  addCoordinatePoint(e4, t2) {
    e4.coords.push(t2);
  }
  addLength(e4, t2) {
    e4.lengths.push(t2);
  }
  addQueryGeometry(e4, t2) {
    e4.queryGeometry = t2.queryGeometry, e4.queryGeometryType = t2.queryGeometryType;
  }
  createPointGeometry() {
    return new e();
  }
};

// ../../../node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js
var a2 = ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeString", "esriFieldTypeDate", "esriFieldTypeOID", "esriFieldTypeGeometry", "esriFieldTypeBlob", "esriFieldTypeRaster", "esriFieldTypeGUID", "esriFieldTypeGlobalID", "esriFieldTypeXML", "esriFieldTypeBigInteger", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"];
var n3 = ["sqlTypeBigInt", "sqlTypeBinary", "sqlTypeBit", "sqlTypeChar", "sqlTypeDate", "sqlTypeDecimal", "sqlTypeDouble", "sqlTypeFloat", "sqlTypeGeometry", "sqlTypeGUID", "sqlTypeInteger", "sqlTypeLongNVarchar", "sqlTypeLongVarbinary", "sqlTypeLongVarchar", "sqlTypeNChar", "sqlTypeNVarchar", "sqlTypeOther", "sqlTypeReal", "sqlTypeSmallInt", "sqlTypeSqlXml", "sqlTypeTime", "sqlTypeTimestamp", "sqlTypeTimestamp2", "sqlTypeTinyInt", "sqlTypeVarbinary", "sqlTypeVarchar"];
var i = ["upperLeft", "lowerLeft"];
function o(e4) {
  return e4 >= a2.length ? null : a2[e4];
}
function c(e4) {
  return e4 >= n3.length ? null : n3[e4];
}
function l(e4) {
  return e4 >= i.length ? null : i[e4];
}
function g(e4, t2) {
  return t2 >= e4.geometryTypes.length ? null : e4.geometryTypes[t2];
}
function p(e4, t2, s3) {
  const r = 3, a3 = e4.asUnsafe(), n4 = t2.createPointGeometry(s3);
  for (; a3.next(); ) switch (a3.tag()) {
    case r: {
      const e5 = a3.getUInt32(), s4 = a3.pos() + e5;
      let r2 = 0;
      for (; a3.pos() < s4; ) t2.addCoordinatePoint(n4, a3.getSInt64(), r2++);
      break;
    }
    default:
      a3.skip();
  }
  return n4;
}
function u(e4, t2, s3) {
  const r = 2, a3 = 3, n4 = e4.asUnsafe(), i2 = t2.createGeometry(s3), o2 = 2 + (s3.hasZ ? 1 : 0) + (s3.hasM ? 1 : 0);
  for (; n4.next(); ) switch (n4.tag()) {
    case r: {
      const e5 = n4.getUInt32(), s4 = n4.pos() + e5;
      let r2 = 0;
      for (; n4.pos() < s4; ) t2.addLength(i2, n4.getUInt32(), r2++);
      break;
    }
    case a3: {
      const e5 = n4.getUInt32(), s4 = n4.pos() + e5;
      let r2 = 0;
      for (t2.allocateCoordinates(i2); n4.pos() < s4; ) t2.addCoordinate(i2, n4.getSInt64(), r2), r2++, r2 === o2 && (r2 = 0);
      break;
    }
    default:
      n4.skip();
  }
  return i2;
}
function f(e4) {
  const t2 = 1, a3 = 2, n4 = 3, i2 = e4.asUnsafe(), o2 = new e();
  let c2 = "esriGeometryPoint";
  for (; i2.next(); ) switch (i2.tag()) {
    case a3: {
      const e5 = i2.getUInt32(), t3 = i2.pos() + e5;
      for (; i2.pos() < t3; ) o2.lengths.push(i2.getUInt32());
      break;
    }
    case n4: {
      const e5 = i2.getUInt32(), t3 = i2.pos() + e5;
      for (; i2.pos() < t3; ) o2.coords.push(i2.getSInt64());
      break;
    }
    case t2:
      c2 = n2[i2.getEnum()];
      break;
    default:
      i2.skip();
  }
  return {
    queryGeometry: o2,
    queryGeometryType: c2
  };
}
function y(e4) {
  const t2 = 1, s3 = 2, r = 3, a3 = 4, n4 = 5, i2 = 6, o2 = 7, c2 = 8, l2 = 9, g2 = e4.asUnsafe();
  for (; g2.next(); ) switch (g2.tag()) {
    case t2:
      return g2.getString();
    case s3:
      return g2.getFloat();
    case r:
      return g2.getDouble();
    case a3:
      return g2.getSInt32();
    case n4:
      return g2.getUInt32();
    case i2:
      return g2.getInt64();
    case o2:
      return g2.getUInt64();
    case c2:
      return g2.getSInt64();
    case l2:
      return g2.getBool();
    default:
      return g2.skip(), null;
  }
  return null;
}
function b(e4) {
  const t2 = 1, s3 = 2, r = 3, a3 = 4, n4 = 5, i2 = 6, l2 = e4.asUnsafe(), g2 = {
    type: o(0)
  };
  for (; l2.next(); ) switch (l2.tag()) {
    case t2:
      g2.name = l2.getString();
      break;
    case s3:
      g2.type = o(l2.getEnum());
      break;
    case r:
      g2.alias = l2.getString();
      break;
    case a3:
      g2.sqlType = c(l2.getEnum());
      break;
    case n4:
      l2.skip();
      break;
    case i2:
      g2.defaultValue = l2.getString();
      break;
    default:
      l2.skip();
  }
  return g2;
}
function k(e4) {
  const t2 = 1, s3 = 2, r = {}, a3 = e4.asUnsafe();
  for (; a3.next(); ) switch (a3.tag()) {
    case t2:
      r.name = a3.getString();
      break;
    case s3:
      r.isSystemMaintained = a3.getBool();
      break;
    default:
      a3.skip();
  }
  return r;
}
function d(e4, t2, s3, r) {
  const a3 = 1, n4 = 2, i2 = 4, o2 = t2.createFeature(s3);
  let c2 = 0;
  for (; e4.next(); ) switch (e4.tag()) {
    case a3: {
      const t3 = r[c2++].name;
      o2.attributes[t3] = e4.processMessage(y);
      break;
    }
    case n4:
      o2.geometry = e4.processMessageWithArgs(u, t2, s3);
      break;
    case i2:
      o2.centroid = e4.processMessageWithArgs(p, t2, s3);
      break;
    default:
      e4.skip();
  }
  return o2;
}
function T(e4) {
  const t2 = 1, s3 = 2, r = 3, a3 = 4, n4 = [1, 1, 1, 1], i2 = e4.asUnsafe();
  for (; i2.next(); ) switch (i2.tag()) {
    case t2:
      n4[0] = i2.getDouble();
      break;
    case s3:
      n4[1] = i2.getDouble();
      break;
    case a3:
      n4[2] = i2.getDouble();
      break;
    case r:
      n4[3] = i2.getDouble();
      break;
    default:
      i2.skip();
  }
  return n4;
}
function m(e4) {
  const t2 = 1, s3 = 2, r = 3, a3 = 4, n4 = [0, 0, 0, 0], i2 = e4.asUnsafe();
  for (; i2.next(); ) switch (i2.tag()) {
    case t2:
      n4[0] = i2.getDouble();
      break;
    case s3:
      n4[1] = i2.getDouble();
      break;
    case a3:
      n4[2] = i2.getDouble();
      break;
    case r:
      n4[3] = i2.getDouble();
      break;
    default:
      i2.skip();
  }
  return n4;
}
function h(e4) {
  const t2 = 1, s3 = 2, r = 3, a3 = {
    originPosition: l(0)
  }, n4 = e4.asUnsafe();
  for (; n4.next(); ) switch (n4.tag()) {
    case t2:
      a3.originPosition = l(n4.getEnum());
      break;
    case s3:
      a3.scale = n4.processMessage(T);
      break;
    case r:
      a3.translate = n4.processMessage(m);
      break;
    default:
      n4.skip();
  }
  return a3;
}
function F(e4) {
  const t2 = 1, s3 = 2, r = 3, a3 = {}, n4 = e4.asUnsafe();
  for (; n4.next(); ) switch (n4.tag()) {
    case t2:
      a3.shapeAreaFieldName = n4.getString();
      break;
    case s3:
      a3.shapeLengthFieldName = n4.getString();
      break;
    case r:
      a3.units = n4.getString();
      break;
    default:
      n4.skip();
  }
  return a3;
}
function q(e4, t2) {
  const s3 = 1, r = 2, a3 = 3, n4 = 4, i2 = 5, o2 = t2.createSpatialReference();
  for (; e4.next(); ) switch (e4.tag()) {
    case s3:
      o2.wkid = e4.getUInt32();
      break;
    case i2:
      o2.wkt = e4.getString();
      break;
    case r:
      o2.latestWkid = e4.getUInt32();
      break;
    case a3:
      o2.vcsWkid = e4.getUInt32();
      break;
    case n4:
      o2.latestVcsWkid = e4.getUInt32();
      break;
    default:
      e4.skip();
  }
  return o2;
}
function I(e4, t2) {
  const s3 = 1, r = 2, a3 = 3, n4 = 4, i2 = 5, o2 = 7, c2 = 8, l2 = 9, p2 = 10, u2 = 11, f2 = 12, y2 = 13, T2 = 15, m2 = t2.createFeatureResult(), I2 = e4.asUnsafe();
  m2.geometryType = g(t2, 0);
  let U2 = false;
  for (; I2.next(); ) switch (I2.tag()) {
    case s3:
      m2.objectIdFieldName = I2.getString();
      break;
    case a3:
      m2.globalIdFieldName = I2.getString();
      break;
    case n4:
      m2.geohashFieldName = I2.getString();
      break;
    case i2:
      m2.geometryProperties = I2.processMessage(F);
      break;
    case o2:
      m2.geometryType = g(t2, I2.getEnum());
      break;
    case c2:
      m2.spatialReference = I2.processMessageWithArgs(q, t2);
      break;
    case p2:
      m2.hasZ = I2.getBool();
      break;
    case u2:
      m2.hasM = I2.getBool();
      break;
    case f2:
      m2.transform = I2.processMessage(h);
      break;
    case l2:
      m2.exceededTransferLimit = I2.getBool();
      break;
    case y2:
      t2.addField(m2, I2.processMessage(b));
      break;
    case T2:
      U2 || (t2.prepareFeatures(m2), U2 = true), t2.addFeature(m2, I2.processMessageWithArgs(d, t2, m2, m2.fields));
      break;
    case r:
      m2.uniqueIdField = I2.processMessage(k);
      break;
    default:
      I2.skip();
  }
  return t2.finishFeatureResult(m2), m2;
}
function U(e4, t2) {
  const s3 = 1, r = 4, a3 = {};
  let n4 = null;
  for (; e4.next(); ) switch (e4.tag()) {
    case r:
      n4 = e4.processMessageWithArgs(f);
      break;
    case s3:
      a3.featureResult = e4.processMessageWithArgs(I, t2);
      break;
    default:
      e4.skip();
  }
  return null != n4 && a3.featureResult && t2.addQueryGeometry(a3, n4), a3;
}
function S(s3, r) {
  try {
    const e4 = 2, a3 = new n(new Uint8Array(s3), new DataView(s3)), n4 = {};
    for (; a3.next(); ) if (a3.tag() === e4) n4.queryResult = a3.processMessageWithArgs(U, r);
    else a3.skip();
    return n4;
  } catch (a3) {
    throw new s("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", {
      error: a3
    });
  }
}

// ../../../node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js
function t(t2, r) {
  const u2 = S(t2, r), o2 = u2.queryResult.featureResult, s3 = u2.queryResult.queryGeometry, y2 = u2.queryResult.queryGeometryType;
  if (o2 && o2.features && o2.features.length && o2.objectIdFieldName) {
    const e4 = o2.objectIdFieldName;
    for (const t3 of o2.features) t3.attributes && (t3.objectId = t3.attributes[e4]);
  }
  return o2 && (o2.queryGeometry = s3, o2.queryGeometryType = y2), o2;
}

export {
  a,
  b,
  h,
  t
};
//# sourceMappingURL=chunk-LU7PU2CS.js.map
