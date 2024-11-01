import {
  H2 as H,
  be,
  c,
  ge,
  pe,
  we,
  xe
} from "./chunk-DTUSTSEJ.js";
import {
  f,
  i,
  r as r2
} from "./chunk-CVB43GGP.js";
import {
  t
} from "./chunk-EODIWR2E.js";
import {
  FixedOffsetZone,
  IANAZone
} from "./chunk-LLDOZWVV.js";
import {
  a
} from "./chunk-V6AMQYXE.js";
import {
  r2 as r
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/support/FieldsIndex.js
function y(e) {
  return "timeZone" in e;
}
function _(e) {
  return "timeZone" in e;
}
function g(e) {
  return "dateFieldsTimeZone" in e;
}
var T = /* @__PURE__ */ new Map();
var Z = class _Z {
  static fromJSON(e) {
    return new _Z(e.fields, e.timeZoneByFieldName);
  }
  static fromLayer(e) {
    return new _Z(e.fields ?? [], S(e));
  }
  static fromLayerJSON(e) {
    return new _Z(e.fields ?? [], S(e));
  }
  constructor(e = [], i2) {
    this._fieldsMap = /* @__PURE__ */ new Map(), this._normalizedFieldsMap = /* @__PURE__ */ new Map(), this._dateFieldsSet = /* @__PURE__ */ new Set(), this._numericFieldsSet = /* @__PURE__ */ new Set(), this._requiredFields = null, this.dateFields = [], this.numericFields = [], this.fields = e || [], this._timeZoneByFieldName = i2 ? new Map(i2) : null;
    const t2 = [];
    for (const s2 of this.fields) {
      const e2 = s2?.name, i3 = M(e2);
      if (e2 && i3) {
        const n2 = w(e2);
        this._fieldsMap.set(e2, s2), this._fieldsMap.set(n2, s2), this._normalizedFieldsMap.set(i3, s2), t2.push(`${n2}:${s2.type}:${this._timeZoneByFieldName?.get(e2)}`), ge(s2) ? (this.dateFields.push(s2), this._dateFieldsSet.add(s2)) : pe(s2) && (this._numericFieldsSet.add(s2), this.numericFields.push(s2)), we(s2) || xe(s2) || (s2.editable = null == s2.editable || !!s2.editable, s2.nullable = null == s2.nullable || !!s2.nullable);
      }
    }
    t2.sort(), this.uid = t2.join();
  }
  get requiredFields() {
    if (!this._requiredFields) {
      this._requiredFields = [];
      for (const e of this.fields) we(e) || xe(e) || e.nullable || void 0 !== H(e) || this._requiredFields.push(e);
    }
    return this._requiredFields;
  }
  equals(e) {
    return this.uid === e?.uid;
  }
  has(e) {
    return null != this.get(e);
  }
  get(e) {
    if (!e) return;
    let i2 = this._fieldsMap.get(e);
    return i2 || (i2 = this._fieldsMap.get(w(e)) ?? this._normalizedFieldsMap.get(M(e)), i2 && this._fieldsMap.set(e, i2), i2);
  }
  getTimeZone(i2) {
    const s2 = this.get(i2 && "string" != typeof i2 ? i2.name : i2);
    return s2 ? this._timeZoneByFieldName ? this._timeZoneByFieldName.get(s2.name) : "date" === s2.type || "esriFieldTypeDate" === s2.type ? (n.getLogger("esri.layers.support.FieldsIndex").error(new s("getTimeZone:no-timezone-information", `no time zone information for field '${s2.name}'`)), i) : N.has(s2.type) ? r2 : null : null;
  }
  getLuxonTimeZone(e) {
    const i2 = this.getTimeZone(e);
    return i2 ? i2 === r2 ? t.instance : i2 === i ? FixedOffsetZone.utcInstance : r(T, i2, () => IANAZone.create(i2)) : null;
  }
  isDateField(e) {
    return this._dateFieldsSet.has(this.get(e));
  }
  isTimeOnlyField(e) {
    return be(this.get(e));
  }
  isNumericField(e) {
    return this._numericFieldsSet.has(this.get(e));
  }
  normalizeFieldName(e) {
    return this.get(e)?.name ?? void 0;
  }
  toJSON() {
    return {
      fields: this.fields.map((e) => a(e) ? e.toJSON() : e),
      timeZoneByFieldName: this._timeZoneByFieldName ? Array.from(this._timeZoneByFieldName.entries()) : null
    };
  }
};
function w(e) {
  return e.trim().toLowerCase();
}
function M(e) {
  return c(e)?.toLowerCase() ?? "";
}
var N = /* @__PURE__ */ new Set(["time-only", "date-only", "timestamp-offset", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]);
function S(e) {
  const i2 = /* @__PURE__ */ new Map();
  if (!e.fields) return i2;
  const t2 = true === e.datesInUnknownTimezone, {
    timeInfo: s2,
    editFieldsInfo: n2
  } = e, r3 = (s2 ? "startField" in s2 ? s2.startField : s2.startTimeField : "") ?? "", l = (s2 ? "endField" in s2 ? s2.endField : s2.endTimeField : "") ?? "", o = g(e) ? e.dateFieldsTimeZone ?? null : e.dateFieldsTimeReference ? f(e.dateFieldsTimeReference) : null, d = n2 ? y(n2) ? n2.timeZone ?? o : n2.dateFieldsTimeReference ? f(n2.dateFieldsTimeReference) : o ?? i : null, a2 = s2 ? _(s2) ? s2.timeZone ?? o : s2.timeReference ? f(s2.timeReference) : o : null, m = /* @__PURE__ */ new Map([[w(n2?.creationDateField ?? ""), d], [w(n2?.editDateField ?? ""), d], [w(r3), a2], [w(l), a2]]);
  for (const {
    name: u,
    type: f2
  } of e.fields) if (N.has(f2)) i2.set(u, r2);
  else if ("date" !== f2 && "esriFieldTypeDate" !== f2) i2.set(u, null);
  else if (t2) i2.set(u, r2);
  else {
    const e2 = m.get(w(u ?? "")) ?? o;
    i2.set(u, e2);
  }
  return i2;
}

export {
  Z
};
//# sourceMappingURL=chunk-Q7SRMLJZ.js.map
