import {
  N,
  m as m2
} from "./chunk-FAW72HJW.js";
import {
  B2 as B,
  E2 as E,
  G2 as G,
  Ie,
  X,
  Y,
  a,
  ee,
  pe,
  r,
  te,
  z
} from "./chunk-WD7XZJEZ.js";
import {
  t
} from "./chunk-ADI7256P.js";
import {
  rt
} from "./chunk-C7NRYPDG.js";
import {
  Z
} from "./chunk-Q7SRMLJZ.js";
import {
  y
} from "./chunk-S3IO7V4Q.js";
import {
  m,
  n,
  n2 as n3
} from "./chunk-GWC3DAGP.js";
import {
  _,
  n as n2
} from "./chunk-O7UDKFOW.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/arcade/Feature.js
var D = class _D {
  constructor() {
    this.arcadeDeclaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._fieldTypesFixed = true, this.fieldsIndex = null, this.contextTimeZone = null, this.immutable = true, this._fieldsToFixDataTypes = null, this.immutable = true;
  }
  static createFromGraphic(e, t2) {
    const i = new _D();
    return i.contextTimeZone = t2 ?? null, i._geometry = null != e.geometry ? e.geometry : null, void 0 === e.attributes || null === e.attributes ? i.attributes = {} : i.attributes = e.attributes, e._sourceLayer ? (i._layer = e._sourceLayer, i._fieldTypesFixed = false) : e._layer ? (i._layer = e._layer, i._fieldTypesFixed = false) : e.layer && "fields" in e.layer ? (i._layer = e.layer, i._fieldTypesFixed = false) : e.sourceLayer && "fields" in e.sourceLayer && (i._layer = e.sourceLayer, i._fieldTypesFixed = false), i._layer && !i._fieldTypesFixed && (i.fieldsIndex = this.hydrateFieldsIndex(i._layer)), i;
  }
  static createFromArcadeFeature(e) {
    if (e instanceof _D) {
      const t3 = new _D();
      return t3._fieldTypesFixed = e._fieldTypesFixed, t3.attributes = e.attributes, t3._geometry = e._geometry, t3._optimizedGeomDefinition = e._optimizedGeomDefinition, e._layer && (t3._layer = e._layer), t3.fieldsIndex = e.fieldsIndex, t3.contextTimeZone = e.contextTimeZone, t3;
    }
    const t2 = {};
    for (const i of e.keys()) t2[i] = e.field(i);
    return _D.createFromGraphicLikeObject(e.geometry(), t2, e.fullSchema(), e.contextTimeZone);
  }
  static createFromOptimisedFeature(e, t2, i) {
    const s = new _D();
    return s._geometry = e.geometry ? {
      geometry: e.geometry
    } : null, s._optimizedGeomDefinition = i, s.attributes = e.attributes || {}, s._layer = t2, s._fieldTypesFixed = false, s;
  }
  static createFromArcadeDictionary(e, t2) {
    const s = new _D();
    return s.attributes = e.field("attributes"), null !== s.attributes && s.attributes instanceof N ? (s.attributes = s.attributes.attributes, null === s.attributes && (s.attributes = {})) : s.attributes = {}, s._geometry = e.field("geometry"), null !== s._geometry && (s._geometry instanceof N ? s._geometry = _D.parseGeometryFromDictionary(s._geometry, t2) : s._geometry instanceof n2 || (s._geometry = null)), s;
  }
  static createFromGraphicLikeObject(e, t2, i = null, s) {
    const r2 = new _D();
    return r2.contextTimeZone = s ?? null, null === t2 && (t2 = {}), r2.attributes = t2, r2._geometry = null != e ? e : null, r2._layer = i, r2._layer && (r2._fieldTypesFixed = false, r2.fieldsIndex = this.hydrateFieldsIndex(r2._layer)), r2;
  }
  static hydrateFieldsIndex(e) {
    return null === e ? null : B(e) ? e.getFieldsIndex() : e.fieldsIndex ? e.fieldsIndex : Z.fromLayerJSON({
      datesInUnknownTimezone: e.datesInUnknownTimezone,
      fields: e.fields,
      timeInfo: e.timeInfo,
      editFieldsInfo: e.editFieldsInfo,
      dateFieldsTimeReference: e.dateFieldsTimeReference ?? {
        timeZone: "UTC",
        respectsDaylightSaving: false
      }
    });
  }
  repurposeFromGraphicLikeObject(e, t2, i = null) {
    null === t2 && (t2 = {}), this.attributes = t2, this._geometry = e ?? null, this._layer = i, this._layer ? this._fieldTypesFixed = false : this._fieldTypesFixed = true;
  }
  castToText(t2 = false) {
    let i = "";
    false === this._fieldTypesFixed && this._fixFieldTypes();
    for (const s in this.attributes) {
      "" !== i && (i += ",");
      const r2 = this.attributes[s];
      null == r2 ? i += JSON.stringify(s) + ":null" : z(r2) || E(r2) || G(r2) ? i += JSON.stringify(s) + ":" + JSON.stringify(r2) : r2 instanceof n2 ? i += JSON.stringify(s) + ":" + pe(r2) : r2 instanceof n3 || r2 instanceof n ? i += `${JSON.stringify(s)}:${JSON.stringify(r2.toString())}` : r2 instanceof t || Array.isArray(r2) ? i += JSON.stringify(s) + ":" + pe(r2, null, t2) : r2 instanceof m ? i += t2 ? JSON.stringify(s) + ":" + JSON.stringify(r2.getTime()) : JSON.stringify(s) + ":" + r2.stringify() : null !== r2 && "object" == typeof r2 && void 0 !== r2.castToText && (i += JSON.stringify(s) + ":" + r2.castToText(t2));
    }
    return '{"geometry":' + (null === this.geometry() ? "null" : pe(this.geometry())) + ',"attributes":{' + i + "}}";
  }
  _fixFieldTypes() {
    if (this._fieldsToFixDataTypes && this._fieldsToFixDataTypes?.length > 0) return this._fixAllFields(this._fieldsToFixDataTypes), void (this._fieldTypesFixed = true);
    const e = [], t2 = this._layer.fields;
    for (let i = 0; i < t2.length; i++) {
      const s = t2[i], {
        name: r2,
        type: n4
      } = s;
      switch (n4) {
        case "date":
        case "esriFieldTypeDate":
          e.push({
            field: r2,
            dataType: "date"
          });
          break;
        case "date-only":
        case "esriFieldTypeDateOnly":
          e.push({
            field: r2,
            dataType: "date-only"
          });
          break;
        case "time-only":
        case "esriFieldTypeTimeOnly":
          e.push({
            field: r2,
            dataType: "time-only"
          });
          break;
        case "timestamp-offset":
        case "esriFieldTypeTimestampOffset":
          e.push({
            field: r2,
            dataType: "timestamp-offset"
          });
      }
    }
    this._fieldsToFixDataTypes = e, e.length > 0 && this._fixAllFields(e), this._fieldTypesFixed = true;
  }
  isUnknownDateTimeField(e) {
    return "unknown" === this.fieldsIndex?.getTimeZone(e);
  }
  _fixAllFields(t2) {
    this.attributes = __spreadValues({}, this.attributes);
    const i = this.contextTimeZone ?? "system";
    for (let s = 0; s < t2.length; s++) {
      const r2 = t2[s].field, n4 = t2[s].dataType;
      let o = this.attributes[r2];
      if (void 0 === o) {
        for (const t3 in this.attributes) if (t3.toLowerCase() === r2.toLowerCase()) {
          if (o = this.attributes[t3], null !== o) {
            if ("time-only" === n4) {
              te(o) || (this.attributes[t3] = n3.fromReader(o.toString()));
              break;
            }
            if ("date-only" === n4) {
              ee(o) || (this.attributes[t3] = n.fromReader(o.toString()));
              break;
            }
            if ("timestamp-offset" === n4) {
              X(o) || (this.attributes[t3] = m.fromReaderAsTimeStampOffset(o.toString()));
              break;
            }
            const s2 = this.isUnknownDateTimeField(t3);
            o instanceof Date ? this.attributes[t3] = s2 ? m.unknownDateJSToArcadeDate(o) : m.dateJSAndZoneToArcadeDate(o, i) : X(o) || (this.attributes[t3] = s2 ? m.unknownEpochToArcadeDate(o) : m.epochToArcadeDate(o, i));
          }
          break;
        }
      } else if (null !== o) {
        if ("time-only" === n4) {
          te(o) ? this.attributes[r2] = o : this.attributes[r2] = n3.fromReader(o.toString());
          continue;
        }
        if ("date-only" === n4) {
          ee(o) ? this.attributes[r2] = o : this.attributes[r2] = n.fromReader(o.toString());
          continue;
        }
        if ("timestamp-offset" === n4) {
          X(o) ? this.attributes[r2] = o : this.attributes[r2] = m.fromReaderAsTimeStampOffset(o.toString());
          continue;
        }
        const t3 = this.isUnknownDateTimeField(r2);
        X(o) ? this.attributes[r2] = o : o instanceof Date ? this.attributes[r2] = t3 ? m.unknownDateJSToArcadeDate(o) : m.dateJSAndZoneToArcadeDate(o, i) : this.attributes[r2] = t3 ? m.unknownEpochToArcadeDate(o) : m.epochToArcadeDate(o, i);
      }
    }
  }
  geometry() {
    return null === this._geometry || this._geometry instanceof n2 || (this._optimizedGeomDefinition ? (this._geometry = y(rt(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM)), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = y(this._geometry)), this._geometry;
  }
  field(e) {
    this._fieldTypesFixed || this._fixFieldTypes();
    const t2 = this.attributes[e];
    if (void 0 !== t2) return t2;
    const i = e.toLowerCase();
    for (const s in this.attributes) if (s.toLowerCase() === i) return this.attributes[s];
    if (this._hasFieldDefinition(i)) return null;
    throw new a(null, r.FieldNotFound, null, {
      key: e
    });
  }
  _hasFieldDefinition(e) {
    if (null === this._layer) return false;
    for (let t2 = 0; t2 < this._layer.fields.length; t2++) {
      if (this._layer.fields[t2].name.toLowerCase() === e) return true;
    }
    return false;
  }
  setField(t2, i) {
    if (this.immutable) throw new a(null, r.Immutable, null);
    if (i instanceof Date && (i = this.isUnknownDateTimeField(t2) ? m.unknownDateJSToArcadeDate(i) : m.dateJSToArcadeDate(i)), false === Y(i)) throw new a(null, r.TypeNotAllowedInFeature, null);
    const n4 = t2.toLowerCase();
    if (void 0 === this.attributes[t2]) {
      for (const e in this.attributes) if (e.toLowerCase() === n4) return void (this.attributes[e] = i);
      this.attributes[t2] = i;
    } else this.attributes[t2] = i;
  }
  hasField(e) {
    const t2 = e.toLowerCase();
    if (void 0 !== this.attributes[e]) return true;
    for (const i in this.attributes) if (i.toLowerCase() === t2) return true;
    return !!this._hasFieldDefinition(t2);
  }
  keys() {
    let e = [];
    const t2 = {};
    for (const i in this.attributes) e.push(i), t2[i.toLowerCase()] = 1;
    if (null !== this._layer) for (let i = 0; i < this._layer.fields.length; i++) {
      const s = this._layer.fields[i];
      1 !== t2[s.name.toLowerCase()] && e.push(s.name);
    }
    return e = e.sort(), e;
  }
  static parseGeometryFromDictionary(e, t2) {
    const i = _D._convertDictionaryToJson(e, true);
    return void 0 !== i.hasm && (i.hasM = i.hasm, delete i.hasm), void 0 !== i.hasz && (i.hasZ = i.hasz, delete i.hasz), void 0 !== i.spatialreference && (i.spatialReference = i.spatialreference, delete i.spatialreference), i.spatialReference || (i.spatialReference = t2), void 0 !== i.rings && (i.rings = this._fixPathArrays(i.rings, true === i.hasZ, true === i.hasZ)), void 0 !== i.paths && (i.paths = this._fixPathArrays(i.paths, true === i.hasZ, true === i.hasM)), void 0 !== i.points && (i.points = this._fixPointArrays(i.points, true === i.hasZ, true === i.hasM)), y(i);
  }
  static _fixPathArrays(e, t2, i) {
    const s = [];
    if (Array.isArray(e)) for (let r2 = 0; r2 < e.length; r2++) s.push(this._fixPointArrays(e[r2], t2, i));
    else if (e instanceof t) for (let r2 = 0; r2 < e.length(); r2++) s.push(this._fixPointArrays(e.get(r2), t2, i));
    return s;
  }
  static _fixPointArrays(e, t2, i) {
    const s = [];
    if (Array.isArray(e)) for (let r2 = 0; r2 < e.length; r2++) {
      const o = e[r2];
      o instanceof _ ? t2 && i ? s.push([o.x, o.y, o.z, o.m]) : t2 ? s.push([o.x, o.y, o.z]) : i ? s.push([o.x, o.y, o.m]) : s.push([o.x, o.y]) : o instanceof t ? s.push(o.toArray()) : s.push(o);
    }
    else if (e instanceof t) for (let r2 = 0; r2 < e.length(); r2++) {
      const o = e.get(r2);
      o instanceof _ ? t2 && i ? s.push([o.x, o.y, o.z, o.m]) : t2 ? s.push([o.x, o.y, o.z]) : i ? s.push([o.x, o.y, o.m]) : s.push([o.x, o.y]) : o instanceof t ? s.push(o.toArray()) : s.push(o);
    }
    return s;
  }
  static _convertDictionaryToJson(e, t2 = false) {
    const s = {};
    for (const r2 in e.attributes) {
      let n4 = e.attributes[r2];
      n4 instanceof N && (n4 = _D._convertDictionaryToJson(n4)), t2 ? s[r2.toLowerCase()] = n4 : s[r2] = n4;
    }
    return s;
  }
  static parseAttributesFromDictionary(e) {
    const t2 = {};
    for (const i in e.attributes) {
      const n4 = e.attributes[i];
      if (!Y(n4)) throw new a(null, r.InvalidParameter, null);
      t2[i] = n4;
    }
    return t2;
  }
  static fromJson(e, t2) {
    let i = null;
    null !== e.geometry && void 0 !== e.geometry && (i = y(e.geometry));
    const n4 = {};
    if (null !== e.attributes && void 0 !== e.attributes) for (const o in e.attributes) {
      const t3 = e.attributes[o];
      if (null === t3) n4[o] = t3;
      else {
        if (!(G(t3) || E(t3) || z(t3) || X(t3) || te(t3) || ee(t3))) throw new a(null, r.InvalidParameter, null);
        n4[o] = t3;
      }
    }
    return _D.createFromGraphicLikeObject(i, n4, null, t2 ?? null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    if (null === this._layer) return "";
    const e = this._layer.gdbVersion;
    return void 0 === e ? "" : "" === e && this._layer.capabilities?.isVersioned ? "SDE.DEFAULT" : e;
  }
  castAsJson(e) {
    const t2 = {
      attributes: {},
      geometry: true === e?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null
    };
    for (const i in this.attributes) {
      const s = this.attributes[i];
      void 0 !== s && (t2.attributes[i] = Ie(s, e));
    }
    return t2;
  }
  castAsJsonAsync(e = null, t2) {
    return __async(this, null, function* () {
      return this.castAsJson(t2);
    });
  }
};
m2(D);

export {
  D
};
//# sourceMappingURL=chunk-ADMKSP6W.js.map
