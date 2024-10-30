import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  C as C2,
  F,
  G,
  J as J2,
  M,
  U,
  h as h2,
  v
} from "./chunk-YJSSLMB3.js";
import {
  J
} from "./chunk-NDXKLAFE.js";
import {
  i,
  p
} from "./chunk-VZ37C3ID.js";
import {
  Z
} from "./chunk-42ZAWY2C.js";
import {
  O
} from "./chunk-7V4JSBFA.js";
import {
  $,
  Ae,
  B,
  Ee,
  Ne,
  P,
  _,
  be,
  d as d2,
  h,
  he,
  k,
  m,
  n,
  pe,
  s as s2,
  ye
} from "./chunk-I2TVVMQ6.js";
import {
  C,
  d
} from "./chunk-LZSLQ24Q.js";
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
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/InputBase.js
var r = class extends S {
  constructor(e2) {
    super(e2), this.element = null, this.feature = null, this.layer = null, this.timeZone = null, this.type = null, this.visibilityExpressionExecutor = null;
  }
  get description() {
    return this.element?.description;
  }
  get evaluatedVisibilityExpression() {
    const {
      visibilityExpressionExecutor: e2
    } = this;
    return null != e2 ? !!e2.lastEvaluatedValue : null;
  }
  get label() {
    return this.element?.label;
  }
  get updating() {
    return false;
  }
  get visible() {
    return null != this.evaluatedVisibilityExpression ? this.evaluatedVisibilityExpression : null != this.element;
  }
};
e([y({
  readOnly: true
})], r.prototype, "description", null), e([y({
  constructOnly: true
})], r.prototype, "element", void 0), e([y()], r.prototype, "evaluatedVisibilityExpression", null), e([y()], r.prototype, "feature", void 0), e([y()], r.prototype, "label", null), e([y()], r.prototype, "layer", void 0), e([y()], r.prototype, "timeZone", void 0), e([y()], r.prototype, "type", void 0), e([y()], r.prototype, "updating", null), e([y()], r.prototype, "visible", null), e([y()], r.prototype, "visibilityExpressionExecutor", void 0), r = e([a("esri.widgets.FeatureForm.InputBase")], r);
var s3 = r;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/EditableInput.js
var a2 = class extends s3 {
  constructor(t) {
    super(t), this.arcadeEditType = "NA", this.editableExpressionExecutor = null;
  }
  get editable() {
    return !!this.layerAllowsEdits && (this.evaluatedEditableExpression ?? true);
  }
  get evaluatedEditableExpression() {
    const {
      editableExpressionExecutor: t
    } = this;
    return null != t ? !!t.lastEvaluatedValue : null;
  }
  get layerAllowsEdits() {
    const {
      layer: t
    } = this;
    if (!t) return false;
    const e2 = O(t), r2 = e2?.operations.supportsEditing, i2 = G(e2, this.arcadeEditType);
    return !(!r2 || !i2);
  }
};
e([y()], a2.prototype, "arcadeEditType", void 0), e([y()], a2.prototype, "editable", null), e([y()], a2.prototype, "editableExpressionExecutor", void 0), e([y()], a2.prototype, "evaluatedEditableExpression", null), e([y()], a2.prototype, "layerAllowsEdits", null), a2 = e([a("esri.widgets.FeatureForm.EditableInput")], a2);
var l = a2;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/FieldInput.js
var M2;
!function(e2) {
  e2.Text = "text", e2.Number = "number", e2.Date = "date", e2.Unsupported = "unsupported";
}(M2 || (M2 = {}));
var U2 = "__internal-type-based-coded-value-domain__";
var S2 = class extends l {
  constructor(e2) {
    super(e2), this._storedValue = null, this.error = null, this.preservesValueWhenHidden = true, this.field = null, this.group = null, this.requiredExpressionExecutor = null, this.type = "field", this._fieldInputWasVisibleDuringLifetime = false, this.valueExpressionExecutor = null;
  }
  initialize() {
    this.addHandles(d(() => this.feature, () => this._fieldInputWasVisibleDuringLifetime = false, C));
  }
  get _dateFormRange() {
    const {
      element: e2,
      field: t
    } = this;
    if ("date" !== this.dataType) return {};
    const i2 = e2?.domain ? m(t, e2.domain) : null;
    if (!e2?.input) return i2 ?? {};
    const l2 = e2.input, {
      type: n2
    } = l2;
    let r2 = {};
    if ("date-picker" !== n2 && "time-picker" !== n2 && "datetimeoffset-picker" !== n2 || (r2 = d2(t, l2.max, l2.min)), "datetime-picker" === n2) {
      const {
        max: e3,
        min: t2
      } = l2;
      r2 = {
        max: null != e3 && k2(e3) ? e3.getTime() : null,
        min: null != t2 && k2(t2) ? t2.getTime() : null
      };
    }
    const {
      max: s4,
      min: u
    } = r2;
    if (i2) {
      const {
        max: e3,
        min: t2
      } = i2, l3 = n(e3) && (null == s4 || null != s4 && e3 < s4), n3 = n(t2) && (null == u || null != u && t2 > u);
      return {
        max: l3 ? e3 : s4 ?? null,
        min: n3 ? t2 : u ?? null,
        rawMax: l3 ? i2.rawMax : r2?.rawMax ?? null,
        rawMin: n3 ? i2.rawMin : r2?.rawMin ?? null
      };
    }
    return {
      min: u,
      max: s4,
      rawMax: r2?.rawMax ?? null,
      rawMin: r2?.rawMin ?? null
    };
  }
  get _dateRange() {
    const {
      _dateFormRange: e2,
      field: t
    } = this;
    if ("date" !== this.dataType) return {};
    const i2 = m(t);
    if (!i2) return e2;
    const {
      max: l2,
      min: n2,
      rawMax: r2,
      rawMin: s4
    } = e2;
    if ("date" === t.type) {
      const {
        max: e3,
        min: t2
      } = i2;
      return {
        max: n(l2) && (null === e3 || null != e3 && l2 < e3) ? l2 : e3 ?? null,
        min: n(n2) && (null === t2 || null != t2 && n2 > t2) ? n2 : t2 ?? null
      };
    }
    if ("date-only" === t.type || "time-only" === t.type || "timestamp-offset" === t.type) {
      const {
        max: e3,
        min: t2,
        rawMax: u,
        rawMin: a3
      } = i2, o = n(l2) && r2 && (null == e3 || l2 < e3);
      return {
        max: o ? l2 : e3,
        min: n(n2) && s4 && (null == t2 || n2 > t2) ? n2 : t2,
        rawMax: o ? r2 : u,
        rawMin: o ? s4 : a3
      };
    }
    return {
      max: null,
      min: null
    };
  }
  get _configAllowsEdits() {
    const {
      element: e2,
      layer: t,
      name: i2
    } = this;
    if (null != e2) return e2.editableExpression ? !!this.evaluatedEditableExpression : false !== e2.editable;
    if (t?.userHasUpdateItemPrivileges) return true;
    const l2 = t && "popupTemplate" in t ? t?.popupTemplate?.fieldInfos?.find(({
      fieldName: e3
    }) => e3 === i2) : null;
    return l2?.isEditable ?? true;
  }
  get _layerAndFieldAllowEdits() {
    return this.layerAllowsEdits && this.field?.editable;
  }
  get _isVisibleByDefault() {
    const {
      field: e2,
      layer: t
    } = this;
    return !!e2?.visible && B(e2, t);
  }
  get _isEditTrackingField() {
    return P(this.layer).includes(this.name?.toLowerCase());
  }
  get _shouldUseValueExpression() {
    return this._layerAndFieldAllowEdits && !this._configAllowsEdits && null != this.valueExpressionExecutor;
  }
  get isSubtypeField() {
    const {
      layer: e2
    } = this;
    if (e2 && "subtypeField" in e2) {
      const {
        subtypeField: t,
        fieldsIndex: i2
      } = e2;
      return (i2.get(t)?.name ?? t) === this.name;
    }
    return false;
  }
  get valueIsOutOfDomain() {
    const {
      domain: e2,
      value: t,
      field: i2
    } = this;
    return !(!e2 || null == t) && null !== s2(i2, t, e2);
  }
  get dataType() {
    const {
      field: e2
    } = this;
    return pe(e2) ? M2.Number : ye(e2) ? M2.Text : Z(e2) || be(e2) ? M2.Date : M2.Unsupported;
  }
  get dateDataType() {
    if (this.dataType === M2.Date) return "date" !== this.field.type ? "string" : "number";
  }
  get description() {
    const {
      element: e2,
      feature: t,
      layer: i2,
      timeZone: l2
    } = this, n2 = e2?.description;
    return null != i2 && null != n2 ? U({
      label: n2,
      attributes: t.attributes,
      fieldsIndex: i2.fieldsIndex,
      timeZone: l2
    }) : n2;
  }
  get domain() {
    const {
      layer: e2
    } = this, {
      typeFieldName: t,
      types: i2
    } = C2(e2);
    if (this.isSubtypeField && "subtypes" in e2 && e2.subtypes) return new i({
      name: U2,
      codedValues: e2.subtypes.map(({
        code: e3,
        name: t2
      }) => new p({
        code: e3,
        name: t2
      }))
    });
    if (t === this.name && null == this.field.domain) return new i({
      name: U2,
      codedValues: i2.map(({
        code: e3,
        name: t2
      }) => new p({
        code: e3,
        name: t2
      }))
    });
    const {
      feature: l2
    } = this, n2 = e2?.getFieldDomain(this.name, {
      feature: l2
    }), r2 = this.element?.domain;
    return null != r2 && this._isDomainCompatible(r2) ? r2 : n2;
  }
  get editable() {
    return !!this._layerAndFieldAllowEdits && (this.evaluatedEditableExpression ?? this._configAllowsEdits);
  }
  get evaluatedRequiredExpression() {
    const {
      requiredExpressionExecutor: e2
    } = this;
    return null != e2 ? !!e2.lastEvaluatedValue : null;
  }
  get evaluatedValueExpression() {
    const {
      valueExpressionExecutor: e2
    } = this;
    return null != e2 ? e2.lastEvaluatedValue : null;
  }
  get hint() {
    return this.element?.hint;
  }
  get includeDate() {
    return !(this.dataType !== M2.Date || "time-only" === this.field.type);
  }
  get includeTime() {
    const {
      element: e2,
      field: t
    } = this;
    if (this.dataType !== M2.Date) return false;
    if ("time-only" === t.type) return true;
    if ("date-only" === t.type) return false;
    const i2 = "datetime-picker" === e2?.input?.type ? e2.input.includeTime : void 0;
    return void 0 === i2 || i2;
  }
  get includeTimeOffset() {
    if ("timestamp-offset" !== this.field.type) return false;
    const e2 = this.element?.input;
    return !e2 || "datetimeoffset-picker" === e2.type && e2.includeTimeOffset;
  }
  set initialFeature(e2) {
    this._set("initialFeature", e2), this.notifyChange("valid");
  }
  get inputType() {
    return this.element?.input?.type;
  }
  get hasInvalidSwitchValue() {
    const {
      element: e2
    } = this, t = v(e2, "switch") ? e2.input : null;
    return !t || J2(this.value, t);
  }
  get isRelationshipKeyField() {
    const {
      field: e2,
      layer: t
    } = this;
    return J(t) && !!t.relationships?.some((t2) => t2.keyField === e2.name);
  }
  get label() {
    const {
      element: e2,
      feature: t,
      field: i2,
      layer: l2,
      timeZone: n2
    } = this;
    return null != l2 && null != e2?.label ? U({
      label: e2.label,
      attributes: t.attributes,
      fieldsIndex: l2.fieldsIndex,
      timeZone: n2
    }) : e2?.label || i2.alias || i2.name;
  }
  get maxLength() {
    const e2 = -1;
    if (this.dataType === M2.Date) return e2;
    const {
      field: t,
      element: i2
    } = this, l2 = t?.length ?? -1, n2 = F(i2) ? i2.input.maxLength : NaN;
    return null != n2 && !isNaN(n2) && n2 >= e2 && (l2 === e2 || n2 <= l2) ? n2 : l2;
  }
  get minLength() {
    const e2 = -1;
    if (this.dataType === M2.Date) return e2;
    const {
      field: t,
      element: i2
    } = this, l2 = t?.length ?? -1, n2 = F(i2) ? i2.input.minLength : NaN;
    return null != n2 && !isNaN(n2) && n2 >= e2 && (l2 === e2 || n2 <= l2) ? n2 : e2;
  }
  get name() {
    return this.field?.name;
  }
  get range() {
    const {
      domain: e2,
      element: t,
      field: i2
    } = this;
    if ("date" === this.dataType) return this._dateRange;
    const l2 = m(i2, e2) || Ne(i2, e2), n2 = l2?.max === Number.MAX_VALUE ? null : l2?.max ?? null, r2 = l2?.min === -Number.MAX_VALUE ? null : l2?.min ?? null;
    if (!t?.domain || "range" !== t.domain.type) return {
      max: n2,
      min: r2
    };
    const {
      max: s4,
      min: u
    } = m(i2) || {};
    return {
      max: null != s4 && (null === n2 || null != n2 && s4 < n2) ? s4 : n2,
      min: null != u && (null === r2 || null != r2 && u > r2) ? u : r2
    };
  }
  get required() {
    const {
      editable: e2,
      evaluatedRequiredExpression: t,
      field: i2,
      visible: l2,
      isSubtypeField: n2
    } = this;
    if (!e2) return false;
    if (false === i2?.nullable) return true;
    if (n2) return true;
    return !(!l2 || false === this.group?.visible || null == t) && t;
  }
  set required(e2) {
    this._overrideIfSome("required", e2);
  }
  get showNoValueOptionEnabled() {
    const {
      element: e2
    } = this;
    return !this.required && (!h2(e2) || e2.input.showNoValueOption);
  }
  get showNoValueLabel() {
    const {
      element: e2
    } = this;
    return h2(e2) ? e2.input.noValueOptionLabel : null;
  }
  get submittable() {
    const {
      field: e2,
      required: t,
      valid: i2,
      value: l2
    } = this;
    return (!t || null != l2) && (!!i2 || this.initialFeature.getAttribute(e2.name) === l2);
  }
  get timeResolution() {
    const e2 = this.element?.input;
    if (e2 && ("datetimeoffset-picker" === e2.type || "time-picker" === e2.type)) return e2.timeResolution ?? "minutes";
  }
  get timeStep() {
    return null != this.timeResolution ? h.get(this.timeResolution) : void 0;
  }
  get updating() {
    const {
      editableExpressionExecutor: e2,
      valueExpressionExecutor: t,
      visibilityExpressionExecutor: i2,
      preservesValueWhenHidden: l2
    } = this;
    return null != t && t.updating || null != e2 && e2.updating || false === l2 && null != i2 && i2.updating;
  }
  get valid() {
    const e2 = this.editable ? this._validate() : null;
    return this._set("error", e2), null === e2;
  }
  get value() {
    if (this._fieldInputWasVisibleDuringLifetime = this._fieldInputWasVisibleDuringLifetime || this.visible && false !== this.group?.visible, false === this.preservesValueWhenHidden && this._fieldInputWasVisibleDuringLifetime && (false === this.visibilityExpressionExecutor?.lastEvaluatedValue || false === this.group?.visibilityExpressionExecutor?.lastEvaluatedValue)) return null !== this._storedValue && this.set("_storedValue", null), null;
    if (this._shouldUseValueExpression) {
      const e2 = this.evaluatedValueExpression;
      return this.dataType === M2.Date ? this._arcadeOutputToDateFieldValue(e2) : null != e2 && "object" == typeof e2 ? e2.toString() : e2;
    }
    return this._storedValue;
  }
  set value(e2) {
    this.notifyChange("evaluatedVisibilityExpression"), this.set("_storedValue", e2);
  }
  get visible() {
    return !this._isEditTrackingField && (null != this.evaluatedVisibilityExpression ? this.evaluatedVisibilityExpression : null != this.element || this._isVisibleByDefault);
  }
  _arcadeOutputToDateFieldValue(e2) {
    const i2 = this.field.type;
    try {
      if ("object" == typeof e2) {
        if (null === e2) throw new s("feature-form:invalid-date-value");
        if (k(e2)) return _(e2, i2);
        if ("getTime" in e2 && "function" == typeof e2.getTime && "date" === i2) return parseInt(e2.getTime(), 10);
        if ("date-only" === i2 || "time-only" === i2 || "timestamp-offset" === i2) return e2.toString();
      } else {
        if ("string" == typeof e2) return "date" === i2 ? parseInt(e2, 10) : e2;
        if ("number" == typeof e2 && "date" === i2) return e2;
      }
      throw new s("feature-form:invalid-date-value");
    } catch {
      return "date" === i2 ? NaN : "";
    }
  }
  _isDomainCompatible(e2) {
    const {
      field: t
    } = this;
    if ("coded-value" === e2?.type) {
      const i2 = typeof e2.codedValues[0].code;
      if ("string" === i2 && ye(t) || "number" === i2 && pe(t)) return true;
    }
    return !!("range" === e2?.type && pe(t) || Z(t) || be(t));
  }
  _validate() {
    const {
      dataType: e2,
      domain: t,
      field: i2,
      initialFeature: l2,
      minLength: n2,
      range: r2,
      required: s4,
      valid: u,
      value: a3,
      maxLength: o
    } = this, d3 = s4 && null == a3, m2 = void 0 !== u;
    if (!d3 && l2.getAttribute(i2.name) === a3 && m2) return null;
    if (d3) return Ee.INVALID_TYPE;
    if ("text" === e2 && "string" == typeof a3) {
      if (n2 > -1 && a3.length < n2) return M.TOO_SHORT;
      if (o > -1 && a3.length > o) return M.TOO_LONG;
    }
    return "date" !== e2 || null == a3 || $({
      type: i2.type,
      range: r2,
      value: a3
    }) ? t ? null !== a3 || s4 ? s2(i2, a3) : null : Ae(i2, a3) : he.OUT_OF_RANGE;
  }
};
e([y()], S2.prototype, "_dateFormRange", null), e([y()], S2.prototype, "_dateRange", null), e([y()], S2.prototype, "_storedValue", void 0), e([y()], S2.prototype, "_configAllowsEdits", null), e([y()], S2.prototype, "_layerAndFieldAllowEdits", null), e([y()], S2.prototype, "_isVisibleByDefault", null), e([y()], S2.prototype, "_isEditTrackingField", null), e([y()], S2.prototype, "_shouldUseValueExpression", null), e([y()], S2.prototype, "isSubtypeField", null), e([y()], S2.prototype, "valueIsOutOfDomain", null), e([y()], S2.prototype, "dataType", null), e([y()], S2.prototype, "dateDataType", null), e([y()], S2.prototype, "description", null), e([y()], S2.prototype, "domain", null), e([y()], S2.prototype, "editable", null), e([y({
  readOnly: true
})], S2.prototype, "error", void 0), e([y({
  constructOnly: true
})], S2.prototype, "preservesValueWhenHidden", void 0), e([y()], S2.prototype, "evaluatedRequiredExpression", null), e([y()], S2.prototype, "evaluatedValueExpression", null), e([y()], S2.prototype, "field", void 0), e([y()], S2.prototype, "group", void 0), e([y({
  readOnly: true
})], S2.prototype, "hint", null), e([y()], S2.prototype, "includeDate", null), e([y()], S2.prototype, "includeTime", null), e([y()], S2.prototype, "includeTimeOffset", null), e([y()], S2.prototype, "initialFeature", null), e([y({
  readOnly: true
})], S2.prototype, "inputType", null), e([y()], S2.prototype, "hasInvalidSwitchValue", null), e([y()], S2.prototype, "isRelationshipKeyField", null), e([y()], S2.prototype, "label", null), e([y()], S2.prototype, "maxLength", null), e([y()], S2.prototype, "minLength", null), e([y({
  readOnly: true
})], S2.prototype, "name", null), e([y()], S2.prototype, "range", null), e([y()], S2.prototype, "required", null), e([y()], S2.prototype, "requiredExpressionExecutor", void 0), e([y()], S2.prototype, "showNoValueOptionEnabled", null), e([y()], S2.prototype, "submittable", null), e([y()], S2.prototype, "timeResolution", null), e([y()], S2.prototype, "timeStep", null), e([y({
  readOnly: true
})], S2.prototype, "type", void 0), e([y()], S2.prototype, "updating", null), e([y()], S2.prototype, "valid", null), e([y({
  value: null
})], S2.prototype, "value", null), e([y()], S2.prototype, "valueExpressionExecutor", void 0), e([y()], S2.prototype, "visible", null), S2 = e([a("esri.widgets.FeatureForm.FieldInput")], S2);
var k2 = (e2) => e2 && !Number.isNaN(e2.valueOf());
var q = S2;

export {
  s3 as s,
  l,
  q
};
//# sourceMappingURL=chunk-MOS2AZCM.js.map
