import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l,
  q as q2,
  s as s4
} from "./chunk-MOS2AZCM.js";
import {
  e as e8
} from "./chunk-H5Z6ZNKP.js";
import {
  s as s3
} from "./chunk-AEX7USXS.js";
import {
  F as F2
} from "./chunk-BGWWZY5C.js";
import {
  $,
  B as B2,
  C as C3,
  D as D2,
  E,
  I as I3,
  K,
  N,
  O as O3,
  Q,
  R,
  S as S2,
  T as T2,
  U as U3,
  b as b2,
  g,
  j as j2,
  q,
  v as v2,
  w as w3,
  x,
  y as y2
} from "./chunk-YJSSLMB3.js";
import {
  e as e7
} from "./chunk-5L5LGHM5.js";
import {
  e as e6,
  n as n6
} from "./chunk-XJ4XZPHY.js";
import {
  A,
  C as C2
} from "./chunk-2ZELMUDG.js";
import {
  J
} from "./chunk-NDXKLAFE.js";
import {
  e as e5
} from "./chunk-FYGR4X6I.js";
import {
  s as s2
} from "./chunk-IQEF4U4C.js";
import {
  h
} from "./chunk-HFXXFWYN.js";
import {
  V as V3,
  n as n5
} from "./chunk-D5ZVYTUT.js";
import {
  e as e4,
  o as o3,
  p,
  t as t2
} from "./chunk-CAYYEMNX.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import {
  n as n4
} from "./chunk-C7BQE556.js";
import {
  d as d2
} from "./chunk-CXNERL22.js";
import {
  O as O2
} from "./chunk-7V4JSBFA.js";
import {
  C,
  D,
  F,
  I,
  I2,
  T,
  U as U2,
  V as V2,
  Xe,
  ge,
  me,
  t,
  w as w2,
  ye
} from "./chunk-I2TVVMQ6.js";
import {
  B,
  e2 as e3,
  r as r3
} from "./chunk-UVQYXHKM.js";
import {
  n as n3
} from "./chunk-M5N6UHWJ.js";
import {
  j
} from "./chunk-ODFKYX74.js";
import {
  s
} from "./chunk-THZPD5CT.js";
import {
  i as i3,
  o as o2,
  r as r2
} from "./chunk-2JI245BP.js";
import {
  m
} from "./chunk-4L4Y34YK.js";
import {
  n as n2
} from "./chunk-2HDBQXAR.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  u2
} from "./chunk-4AZPIP7K.js";
import {
  P,
  d,
  v,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S,
  e3 as e,
  i
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a,
  r2 as r
} from "./chunk-UDMPWVPF.js";
import {
  L,
  b,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  u
} from "./chunk-6WGE3IUL.js";
import {
  i as i2,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Editor/icons.js
var a2 = "exclamation-mark-triangle";

// ../../../node_modules/@arcgis/core/widgets/Editor/components/Prompt.js
var a3 = "esri-editor__prompt";
var c = {
  base: a3,
  header: `${a3}__header`,
  heading: `${a3}__header__heading`,
  message: `${a3}__message`,
  divider: `${a3}__divider`,
  actions: `${a3}__actions`
};
var n7 = () => r3({
  button: () => import("./calcite-button-LAMWLR56.js"),
  icon: () => import("./calcite-icon-42Z6A6ZS.js"),
  scrim: () => import("./calcite-scrim-GBXWCUR2.js"),
  label: () => import("./calcite-label-7BB63OZC.js"),
  "radio-button": () => import("./calcite-radio-button-O7HCNAS5.js"),
  "radio-button-group": () => import("./calcite-radio-button-group-F5ZDNN6U.js")
});
function s5(_a) {
  var _b = _a, {
    actions: e14,
    context: a6,
    headingLevel: n9,
    message: s6,
    title: d5
  } = _b, p8 = __objRest(_b, [
    "actions",
    "context",
    "headingLevel",
    "message",
    "title"
  ]);
  const {
    primary: m3,
    secondary: u6
  } = e14;
  let b4;
  switch (a6) {
    case "danger":
      b4 = "danger";
      break;
    case "info":
      b4 = "brand";
      break;
    default:
      b4 = "neutral";
  }
  const g3 = n3("calcite-button", {
    afterCreate: l2,
    appearance: "solid",
    "data-testid": "primary-prompt-button",
    key: "prompt-primary-button",
    kind: b4,
    onclick: m3.action,
    width: u6 ? "half" : "full"
  }, m3.label), h4 = u6 && n3("calcite-button", {
    appearance: "outline",
    "data-testid": "secondary-prompt-button",
    key: "prompt-secondary-button",
    kind: b4,
    onclick: u6.action,
    width: "half"
  }, u6.label);
  return n3("calcite-scrim", {
    "data-testid": "prompt",
    key: "prompt"
  }, n3("div", {
    class: `${c.base}--${a6}`
  }, n3("div", {
    class: c.header
  }, n3("calcite-icon", {
    icon: a2
  }), n3(e6, {
    class: c.heading,
    level: n9
  }, d5)), n3("div", {
    class: c.message
  }, s6), r4(p8) ?? n3("div", {
    class: c.divider
  }), n3("div", {
    class: c.actions
  }, h4, g3)));
}
function r4({
  radios: t7,
  onRadioSelection: e14,
  defaultRadioSelection: o4
}) {
  return t7?.length ? n3("calcite-radio-button-group", {
    name: "PromptChoiceList"
  }, t7.map((t8) => n3("calcite-label", {
    layout: "inline"
  }, n3("calcite-radio-button", {
    checked: t8.value === o4,
    value: t8.value,
    onCalciteRadioButtonChange: () => e14?.(t8.value)
  }), t8.label))) : void 0;
}
function l2(t7) {
  requestAnimationFrame(() => t7.setFocus());
}

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/css.js
var e9 = "esri-feature-form";
var t3 = `${e9}__group`;
var r5 = `${e9}__input`;
var a4 = `${e9}__related-records`;
var i4 = {
  base: e9,
  form: `${e9}__form`,
  formHeader: `${e9}__form-header`,
  label: `${e9}__label`,
  labelTextContent: `${e9}__label-text-content`,
  fieldInput: `${r5}`,
  inputRadio: `${r5}--radio`,
  inputRadioGroup: `${r5}--radio-group`,
  inputRadioLabel: `${r5}--radio-label`,
  inputDisabled: `${r5}--disabled`,
  inputSwitch: `${r5}--switch`,
  centeredButton: `${e9}__centered-button`,
  description: `${e9}__description-text`,
  listObserver: `${e9}__list-observer`,
  relatedRecordsHeader: `${a4}_header`,
  relatedRecordsLabel: `${a4}_label`,
  relatedRecordsList: `${a4}_list`,
  dateInputContainer: `${`${e9}__date`}-input-container`,
  textElement: `${e9}__text-element`,
  group: t3,
  groupSequential: `${t3}--sequential`,
  groupActive: `${t3}--active`
};

// ../../../node_modules/@arcgis/core/layers/support/ContingentValue.js
var t4 = class extends S {
  constructor(o4) {
    super(o4), this.maxValue = null, this.minValue = null, this.codedValue = null;
  }
};
e2([y()], t4.prototype, "objectType", void 0), e2([y()], t4.prototype, "maxValue", void 0), e2([y()], t4.prototype, "minValue", void 0), e2([y()], t4.prototype, "codedValue", void 0), t4 = e2([a("esri.layers.support.ContingentValue")], t4);
var p2 = t4;

// ../../../node_modules/@arcgis/core/layers/support/Contingency.js
var e10 = class extends S {
  constructor(o4) {
    super(o4), this.isRetired = false;
  }
};
e2([y()], e10.prototype, "id", void 0), e2([y()], e10.prototype, "isRetired", void 0), e2([y()], e10.prototype, "subtype", void 0), e2([y()], e10.prototype, "values", void 0), e10 = e2([a("esri.layers.support.Contingency")], e10);
var p3 = e10;

// ../../../node_modules/@arcgis/core/layers/support/ContingencyConstraintViolation.js
var e11 = class extends S {
  constructor(o4) {
    super(o4);
  }
};
e2([y()], e11.prototype, "fieldGroup", void 0), e2([y()], e11.prototype, "type", void 0), e11 = e2([a("esri.layers.support.ContingencyConstraintViolation")], e11);
var p4 = e11;

// ../../../node_modules/@arcgis/core/layers/support/ContingentValuesResult.js
var t5 = class extends S {
  constructor(o4) {
    super(o4);
  }
};
e2([y()], t5.prototype, "contingentValuesAllGroups", void 0), e2([y()], t5.prototype, "contingentValuesByFieldGroup", void 0), t5 = e2([a("esri.layers.support.ContingentValuesResult")], t5);
var p5 = t5;

// ../../../node_modules/@arcgis/core/layers/support/FieldGroup.js
var e12 = class extends S {
  constructor(o4) {
    super(o4), this.fields = null, this.isEditingRestrictive = false;
  }
};
e2([y()], e12.prototype, "name", void 0), e2([y()], e12.prototype, "fields", void 0), e2([y()], e12.prototype, "isEditingRestrictive", void 0), e2([y()], e12.prototype, "contingencies", void 0), e12 = e2([a("esri.layers.support.FieldGroup")], e12);
var i5 = e12;

// ../../../node_modules/@arcgis/core/layers/support/LayerContingentValuesCache.js
var h2;
var V4 = h2 = class extends u2(m) {
  constructor(e14) {
    super(e14), this.request = U, this.fieldGroups = null, this.fieldGroupDefinitions = null;
  }
  initialize() {
  }
  get subtypeFieldName() {
    return C3(this.layer).typeFieldName;
  }
  static createLoadedLayerContingentValuesCache(e14) {
    return __async(this, null, function* () {
      yield e14.load();
      const t7 = e14.sourceJSON;
      if (void 0 === e14.layerId) return null;
      const n9 = t7.hasContingentValuesDefinition;
      if (n9) return new h2({
        layer: e14
      }).load();
      if (void 0 === n9) {
        const t8 = d2(e14.url);
        if (null == t8) return null;
        const n10 = t8.url.path;
        if ((yield C4(n10)).supportsQueryDataElements) {
          const t9 = e14.layerId.toString(), i6 = yield x2(n10, t9);
          if (i6) {
            const t10 = i6.map((t11) => ({
              name: t11.name,
              isEditingRestrictive: t11.isEditingRestrictive,
              fields: t11.fieldNames.names.map((t12) => e14.fieldsIndex.normalizeFieldName(t12))
            }));
            return new h2({
              layer: e14,
              fieldGroupDefinitions: t10
            }).load();
          }
        }
      }
      return null;
    });
  }
  load(e14) {
    return __async(this, null, function* () {
      const t7 = this.layer.load(e14).then(() => this._initializeContingentValues(this.fieldGroupDefinitions, e14));
      return this.addResolvingPromise(t7), this;
    });
  }
  validateContingencyConstraints(e14, t7) {
    const n9 = Object.keys(e14), i6 = [], s6 = [];
    for (const o4 of this.fieldGroups) {
      const r6 = o4.isEditingRestrictive ? "error" : "warning";
      if (t7 && !o4.fields.some((e15) => t7.includes(e15))) continue;
      if (!o4.fields.every((e15) => n9.includes(e15))) {
        s6.push(new p4({
          fieldGroup: o4,
          type: r6
        }));
        continue;
      }
      let a6 = false;
      const l5 = e14[this.subtypeFieldName], c4 = o4.contingencies.filter((e15) => !(!e15.isRetired && e15.subtype) || e15.subtype.code === l5);
      if (0 !== c4.length) {
        for (const t8 of c4) {
          let n10 = true;
          for (const i7 in t8.values) {
            const s7 = t8.values[i7];
            if ("any" !== s7.objectType) {
              if ("null" === s7.objectType) {
                if (null != e14[i7]) {
                  n10 = false;
                  break;
                }
              } else if ("code" === s7.objectType) {
                if (e14[i7] !== s7.codedValue.code) {
                  n10 = false;
                  break;
                }
              } else if ("range" === s7.objectType) {
                const t9 = e14[i7];
                if (t9 < s7.minValue || t9 > s7.maxValue) {
                  n10 = false;
                  break;
                }
              }
            }
          }
          if (n10) {
            a6 = true;
            break;
          }
        }
        a6 || i6.push(new p4({
          fieldGroup: o4,
          type: r6
        }));
      }
    }
    return {
      invalid: i6,
      incomplete: s6
    };
  }
  getContingentValues(e14, t7, n9 = false) {
    const i6 = e14[this.subtypeFieldName], s6 = null != i6, o4 = {};
    let r6 = [];
    const a6 = this.fieldGroups.filter((e15) => e15.fields.includes(t7));
    r6.push(new p2({
      objectType: "any"
    }));
    for (const l5 of a6) {
      let a7 = [];
      const u6 = l5.contingencies.filter((e15) => !(e15.isRetired || e15.subtype && s6 && e15.subtype.code !== i6));
      let c4 = false;
      const p8 = {};
      for (const n10 of u6) {
        let i7, s7 = true;
        for (const o5 in n10.values) {
          const r7 = n10.values[o5];
          if (t7 !== o5) {
            if (void 0 !== e14[o5] && "any" !== r7.objectType) {
              if ("null" === r7.objectType) null !== e14[o5] && (s7 = false);
              else if ("code" === r7.objectType) e14[o5] !== r7.codedValue.code && (s7 = false);
              else if ("range" === r7.objectType) {
                const t8 = e14[o5];
                (t8 < r7.minValue || t8 > r7.maxValue) && (s7 = false);
              }
            }
          } else i7 = r7, c4 = c4 || "range" === r7.objectType;
        }
        if (i7 && s7) {
          if ("any" === i7.objectType) {
            a7.length = 0, a7.push(i7);
            break;
          }
          const e15 = b3(i7);
          p8[e15] || a7.push(i7), p8[e15] = true;
        }
      }
      c4 && (a7 = j3(a7)), o4[l5.name] = a7, r6 = n9 ? G(r6, a7) : [];
    }
    return 1 === a6.length && n9 && (r6 = []), new p5({
      contingentValuesAllGroups: r6,
      contingentValuesByFieldGroup: o4
    });
  }
  _initializeContingentValues(e14, t7) {
    return __async(this, null, function* () {
      const n9 = e14 ?? (yield this._fetchFieldGroupDefs(t7));
      if (0 === n9.length) return void (this.fieldGroups = []);
      const i6 = yield this._fetchContingentValues(n9, t7);
      this.fieldGroups = i6;
    });
  }
  _fetchFieldGroupDefs(e14) {
    return __async(this, null, function* () {
      if (void 0 === this.layer.layerId) return [];
      const t7 = this.layer.sourceJSON, n9 = this.layer.layerId.toString(), i6 = d2(this.layer.url).url.path;
      if (t7.hasContingentValuesDefinition) {
        return (yield v3(i6, n9, e14)).map((e15) => ({
          name: e15.name,
          isEditingRestrictive: e15.restrictive,
          fields: e15.fields.map((e16) => this.layer.fieldsIndex.normalizeFieldName(e16))
        }));
      }
      return void 0 !== t7.hasContingentValuesDefinition ? [] : C4(i6, e14).then((t8) => __async(this, null, function* () {
        if (t8.supportsQueryDataElements) {
          return (yield x2(i6, n9, e14)).map((e15) => ({
            name: e15.name,
            isEditingRestrictive: e15.isEditingRestrictive,
            fields: e15.fieldNames.names.map((e16) => this.layer.fieldsIndex.normalizeFieldName(e16))
          }));
        }
        return [];
      }));
    });
  }
  _fetchContingentValues(e14, t7) {
    return __async(this, null, function* () {
      if (void 0 === this.layer.layerId) return [];
      const n9 = this.layer.sourceJSON, i6 = this.layer.layerId.toString(), s6 = d2(this.layer.url).url.path;
      if (n9.hasContingentValuesDefinition) {
        const n10 = yield S3(s6, i6, t7);
        return this._constructFieldGroupsAGOL(e14, n10);
      }
      const o4 = yield F3(s6, i6, t7);
      return this._constructFieldGroupsEnterprise(e14, o4);
    });
  }
  _constructFieldGroupsAGOL(e14, t7) {
    return e14.map((e15) => {
      const n9 = t7.contingentValuesDefinition.fieldGroups.find((t8) => t8.name === e15.name);
      if (n9) {
        let i6 = [];
        return i6 = t7.contingentValuesDefinition.hasSubType ? this._parseAGOLFieldGroupSubtype(e15, t7, n9.subTypes) : this._parseAGOLFieldGroup(e15, t7, n9.contingentValues), new i5({
          name: e15.name,
          isEditingRestrictive: e15.isEditingRestrictive,
          fields: e15.fields,
          contingencies: i6
        });
      }
      return null;
    }).filter(O);
  }
  _parseAGOLFieldGroupSubtype(e14, t7, n9) {
    let i6 = [];
    return n9?.forEach((n10) => {
      const s6 = this._getSubtypeAGOL(n10.name);
      i6 = i6.concat(this._parseAGOLFieldGroup(e14, t7, n10.contingentValues, s6));
    }), i6;
  }
  _parseAGOLFieldGroup(e14, t7, n9, i6 = null) {
    const s6 = [];
    for (const o4 of n9 ?? []) {
      const n10 = this._parseAGOLContingency(o4, e14, t7, i6);
      s6.push(n10);
    }
    return s6;
  }
  _parseAGOLContingency(e14, t7, n9, i6) {
    const s6 = e14.id, o4 = !!e14.retired && 1 === e14.retired, r6 = {};
    for (let a6 = 0, l5 = 0; a6 < t7.fields.length; a6++) {
      const s7 = t7.fields[a6], o5 = n9.typeCodes[e14.types[a6]];
      if ("Code" === o5) {
        let t8 = e14.values[l5];
        l5++;
        const o6 = this._getDomain(i6, s7), a7 = this.layer.getField(s7);
        if ("string" === a7?.type) {
          const e15 = n9.stringDicts.find((e16) => e16.domain === o6?.name);
          e15 && (t8 = e15.entries[t8]);
        }
        const u6 = o6?.codedValues.find((e15) => e15.code === t8), p8 = new p2({
          codedValue: u6,
          objectType: "code"
        });
        r6[s7] = p8;
      } else if ("Range" === o5) {
        const t8 = e14.values[l5];
        l5++;
        const n10 = t8.range[0], i7 = t8.range[1], o6 = new p2({
          minValue: n10,
          maxValue: i7,
          objectType: "range"
        });
        r6[s7] = o6;
      } else if ("Any" === o5) {
        const e15 = new p2({
          objectType: "any"
        });
        r6[s7] = e15;
      } else {
        const e15 = new p2({
          objectType: "null"
        });
        r6[s7] = e15;
      }
    }
    return new p3({
      id: s6,
      isRetired: o4,
      subtype: i6,
      values: r6
    });
  }
  _constructFieldGroupsEnterprise(e14, t7) {
    const i6 = t7.fieldGroups;
    return e14.map((e15) => {
      const n9 = i6.find((t8) => t8.name === e15.name);
      if (n9) {
        const i7 = n9.contingencies.map((n10) => {
          const i8 = n10.id, s6 = n10.isRetired || false, o4 = this._getSubtypeEnterprise(n10.subtypeCode), r6 = {};
          for (let a6 = 0; a6 < e15.fields.length; a6++) {
            const i9 = e15.fields[a6];
            let s7 = n10.values[a6];
            if ("number" == typeof s7 || "string" == typeof s7) {
              const e16 = this._getDomain(o4, i9), n11 = this.layer.getField(i9);
              if (ye(n11)) s7 = t7.stringDictionary[s7];
              else if (ge(n11)) {
                const e17 = /* @__PURE__ */ new Date(`${s7}+00:00`);
                s7 = e17.getTime();
              }
              const a7 = e16?.codedValues.find((e17) => e17.code === s7), l5 = new p2({
                codedValue: a7,
                objectType: "code"
              });
              r6[i9] = l5;
            } else if ("object" == typeof s7) {
              const e16 = s7.minValue, t8 = s7.maxValue, n11 = new p2({
                minValue: e16,
                maxValue: t8,
                objectType: "range"
              });
              r6[i9] = n11;
            } else if (s7) {
              const e16 = new p2({
                objectType: "any"
              });
              r6[i9] = e16;
            } else {
              const e16 = new p2({
                objectType: "null"
              });
              r6[i9] = e16;
            }
          }
          return new p3({
            id: i8,
            isRetired: s6,
            subtype: o4,
            values: r6
          });
        });
        return new i5({
          name: e15.name,
          isEditingRestrictive: e15.isEditingRestrictive,
          fields: e15.fields,
          contingencies: i7
        });
      }
      return null;
    }).filter(O);
  }
  _getSubtypeEnterprise(e14) {
    const t7 = this.layer.sourceJSON;
    let n9;
    if (t7.subtypes) {
      const i6 = t7.subtypes.find((t8) => t8.code === e14);
      n9 = n5.fromJSON(i6);
    }
    return n9 || null;
  }
  _getSubtypeAGOL(e14) {
    const t7 = this.layer.sourceJSON;
    let n9;
    if (t7.subtypes) {
      const i6 = t7.subtypes.find((t8) => t8.name === e14);
      n9 = n5.fromJSON(i6);
    }
    return n9 || null;
  }
  _getDomain(e14, t7) {
    const n9 = e14 ? O4(e14, t7) : this.layer.getFieldDomain(t7);
    return "inherited" === n9?.type ? this.layer.getFieldDomain(t7) : n9;
  }
};
function b3(e14) {
  switch (e14.objectType) {
    case "any":
      return "@any@";
    case "null":
      return "@null@";
    case "code":
      return e14.codedValue.name + e14.codedValue.code.toString();
    case "range":
      return e14.minValue.toString() + "-" + e14.maxValue.toString();
  }
}
function j3(e14) {
  let t7, n9;
  e14.sort((e15, t8) => "null" === e15.objectType ? -1 : "null" === t8.objectType ? 1 : e15.minValue - t8.minValue);
  const i6 = [];
  for (const s6 of e14) "null" !== s6.objectType ? null != t7 && null != n9 ? n9 < s6.minValue ? (i6.push(new p2({
    objectType: "range",
    minValue: t7,
    maxValue: n9
  })), t7 = s6.minValue, n9 = s6.maxValue) : n9 < s6.maxValue && (n9 = s6.maxValue) : (t7 = s6.minValue, n9 = s6.maxValue) : i6.push(s6);
  return i6.push(new p2({
    objectType: "range",
    minValue: t7,
    maxValue: n9
  })), i6;
}
function T3(e14, t7) {
  const n9 = [];
  let i6, s6 = 0;
  for (const o4 of e14) for (; s6 < t7.length; s6++) {
    const e15 = t7[s6];
    if ("null" === o4.objectType && "null" === e15.objectType) n9.push(new p2({
      objectType: "null"
    }));
    else {
      if ("null" === o4.objectType) break;
      if ("null" === e15.objectType) continue;
    }
    if (o4.maxValue < e15.minValue) break;
    if (o4.maxValue === e15.minValue) {
      n9.push(new p2({
        objectType: "range",
        minValue: o4.maxValue,
        maxValue: e15.minValue
      }));
      break;
    }
    if (!(o4.minValue > e15.maxValue)) if (o4.minValue !== e15.maxValue) {
      if (i6 = o4.minValue > e15.minValue ? o4.minValue : e15.minValue, o4.maxValue < e15.maxValue) {
        n9.push(new p2({
          objectType: "range",
          minValue: i6,
          maxValue: o4.maxValue
        }));
        break;
      }
      n9.push(new p2({
        objectType: "range",
        minValue: i6,
        maxValue: e15.maxValue
      }));
    } else n9.push(new p2({
      objectType: "range",
      minValue: o4.minValue,
      maxValue: e15.maxValue
    }));
  }
  return n9;
}
function w4(e14, t7) {
  const n9 = [];
  for (const i6 of e14) t7.some((e15) => {
    if (i6.objectType === e15.objectType) switch (i6.objectType) {
      case "any":
      case "null":
        return true;
      case "code":
        return i6.codedValue.code === e15.codedValue.code && i6.codedValue.name === e15.codedValue.name;
    }
    return false;
  }) && n9.push(i6);
  return n9;
}
function G(e14, t7) {
  if (0 === e14.length || 0 === t7.length) return [];
  if ("any" === e14[0].objectType) return t7;
  if ("any" === t7[0].objectType) return e14;
  const n9 = "range" === e14[0].objectType || "range" === e14[1]?.objectType, i6 = "range" === t7[0].objectType || "range" === t7[1]?.objectType;
  return n9 || i6 ? T3(e14, t7) : w4(e14, t7);
}
function v3(e14, n9, i6) {
  return __async(this, null, function* () {
    return U(`${e14}/${n9}/fieldgroups`, __spreadValues({
      responseType: "json",
      query: {
        f: "json"
      }
    }, i6)).then((e15) => e15.data.fieldGroups ?? []);
  });
}
function x2(e14, n9, i6) {
  return __async(this, null, function* () {
    return U(`${e14}/queryDataElements`, __spreadValues({
      responseType: "json",
      query: {
        layers: JSON.stringify([n9]),
        f: "json"
      }
    }, i6)).then((e15) => e15.data.layerDataElements?.[0].dataElement.fieldGroups ?? []);
  });
}
function C4(e14, n9) {
  return __async(this, null, function* () {
    return U(e14, __spreadValues({
      responseType: "json",
      query: {
        f: "json"
      }
    }, n9)).then((e15) => e15.data);
  });
}
function F3(e14, n9, i6) {
  return __async(this, null, function* () {
    return U(`${e14}/queryContingentValues`, __spreadValues({
      responseType: "json",
      query: {
        layers: JSON.stringify([n9]),
        f: "json"
      }
    }, i6)).then((e15) => e15.data.contingentValueSets?.[0]);
  });
}
function S3(e14, n9, i6) {
  return __async(this, null, function* () {
    return U(`${e14}/${n9}/contingentValues`, __spreadValues({
      responseType: "json",
      query: {
        f: "json"
      }
    }, i6)).then((e15) => e15.data);
  });
}
function O4(e14, t7) {
  const n9 = e14.domains;
  if (n9) {
    const [e15, i6] = Object.entries(n9).find(([e16]) => e16.trim().toLowerCase() === t7.trim().toLowerCase()) || [];
    return i6 || null;
  }
  return null;
}
e2([y({
  constructOnly: true
})], V4.prototype, "layer", void 0), e2([y({
  constructOnly: true
})], V4.prototype, "request", void 0), e2([y({
  type: [i5]
})], V4.prototype, "fieldGroups", void 0), e2([y({
  constructOnly: true
})], V4.prototype, "fieldGroupDefinitions", void 0), e2([y()], V4.prototype, "subtypeFieldName", null), V4 = h2 = e2([a("esri.layers.support.LayerContingentValuesCache")], V4);
var _ = V4;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/FormExpressionArcadeExecutor.js
var u3;
var c2 = Symbol("FormExpressionArcadeExecutor");
var p6 = class extends S {
  constructor(t7) {
    super(t7), this[u3] = true, this._lastEvaluatedValue = null, this._abortController = new AbortController(), this._stale = false, this._updatingTracking = new h(), this._executeAsyncDebounced = k((t8, e14, r6) => __async(this, null, function* () {
      const s6 = yield this.executor.executeAsync(t8, __spreadProps(__spreadValues({}, e14), {
        abortSignal: r6
      }));
      return r6.aborted ? this._lastEvaluatedValue : (this._lastEvaluatedValue = s6, this._stale = false, s6);
    }));
  }
  get isAsync() {
    return this.executor.isAsync;
  }
  get fieldsUsed() {
    return this.executor.fieldsUsed;
  }
  get syntaxTree() {
    return this.executor.syntaxTree;
  }
  get updating() {
    return this._updatingTracking.updating;
  }
  get stale() {
    return this._stale;
  }
  get geometryUsed() {
    return this.executor.geometryUsed;
  }
  get variablesUsed() {
    return this.executor.variablesUsed;
  }
  get lastEvaluatedValue() {
    return this._lastEvaluatedValue;
  }
  abort() {
    this._abortController.abort();
  }
  execute(t7, e14) {
    this._abortController = new AbortController();
    const r6 = this.executor.execute(t7, __spreadProps(__spreadValues({}, e14), {
      abortSignal: this._abortController.signal
    }));
    return this._lastEvaluatedValue = r6, r6;
  }
  executeAsync(t7, e14) {
    return __async(this, null, function* () {
      return this._abortController = new AbortController(), this._updatingTracking.addPromise(this._executeAsyncDebounced(t7, e14 ?? {}, this._abortController.signal));
    });
  }
  markStale() {
    this._stale = true;
  }
  reset() {
    this.abort(), this._lastEvaluatedValue = null, this._stale = false;
  }
};
u3 = c2, e2([y()], p6.prototype, "_lastEvaluatedValue", void 0), e2([y()], p6.prototype, "_stale", void 0), e2([y()], p6.prototype, "_updatingTracking", void 0), e2([y({
  constructOnly: true
})], p6.prototype, "executor", void 0), e2([y()], p6.prototype, "isAsync", null), e2([y()], p6.prototype, "fieldsUsed", null), e2([y()], p6.prototype, "syntaxTree", null), e2([y()], p6.prototype, "updating", null), e2([y()], p6.prototype, "stale", null), e2([y()], p6.prototype, "geometryUsed", null), e2([y()], p6.prototype, "variablesUsed", null), e2([y()], p6.prototype, "lastEvaluatedValue", null), p6 = e2([a("esri.widgets.FeatureForm.FormExpressionArcadeExecutor")], p6);
var d4 = (t7, s6) => __async(void 0, null, function* () {
  const o4 = C2("form-calculation"), a6 = yield A(t7, o4, {});
  return s6?.fieldsIndex && (a6.fieldsUsed = I2(s6.fieldsIndex, a6.fieldsUsed)), new p6({
    executor: a6
  });
});

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/FormExpressionsManager.js
var l3 = "#JSAPI_FORM_EXPRESSIONS_MANAGER_GEOMETRY";
var c3 = class extends S {
  constructor(e14) {
    super(e14), this._fieldReferencesLookup = /* @__PURE__ */ new Map(), this._fieldsAffectedLookup = /* @__PURE__ */ new Map(), this.preserveFieldValuesWhenHidden = true, this._latestFieldValues = __spreadValues({}, e14.feature.attributes);
  }
  initialize() {
    this._dependencyGraph = this._buildDependencyGraph();
  }
  destroy() {
    this.resetExecutors();
  }
  get _asyncExecutors() {
    return this.executors.filter((e14) => e14.isAsync);
  }
  get _baseContext() {
    const {
      editType: e14,
      layer: t7,
      map: s6,
      originalFeature: r6,
      spatialReference: o4,
      timeZone: a6
    } = this.arcadeContextInfo, i6 = "scene" === t7?.type && null != t7.associatedLayer ? t7.associatedLayer : t7;
    return [{
      $originalfeature: r6,
      $editcontext: {
        editType: e14
      },
      $layer: i6,
      $featureset: i6,
      $datastore: t7?.url,
      $map: s6
    }, {
      rawOutput: true,
      spatialReference: o4 ?? void 0,
      timeZone: a6
    }];
  }
  set feature(e14) {
    this._latestFieldValues = __spreadValues({}, e14?.attributes), this._set("feature", e14);
  }
  evaluateAll() {
    return this._evaluate(this.executors);
  }
  evaluateAsyncExpressions() {
    return this._evaluate(this._asyncExecutors);
  }
  evaluateExpressions(e14) {
    return this._evaluate(e14);
  }
  evaluateInvalidated(e14) {
    const {
      _fieldReferencesLookup: t7,
      _latestFieldValues: s6,
      feature: r6
    } = this, o4 = /* @__PURE__ */ new Set();
    for (const a6 of e14) if (s6[a6] = r6.getAttribute(a6), t7.has(a6)) for (const e15 of t7.get(a6)) o4.add(e15);
    return this._evaluate([...o4]);
  }
  evaluateInvalidatedByGeometry() {
    return __async(this, null, function* () {
      if (this._fieldReferencesLookup.has(l3)) return this._evaluate([...this._fieldReferencesLookup.get(l3)]);
    });
  }
  resetExecutors() {
    for (const e14 of this.executors) e14.reset();
  }
  _buildDependencyGraph() {
    const {
      _fieldReferencesLookup: e14,
      _fieldsAffectedLookup: t7,
      executors: s6,
      preserveFieldValuesWhenHidden: o4
    } = this, a6 = new Map(this.fieldInputs.map((e15) => [e15.name, e15])), i6 = false === o4, n9 = new Map(s6.map((e15) => [e15, new Array()]));
    for (const c4 of s6) {
      for (const s7 of c4.fieldsUsed) {
        r(e14, s7, () => /* @__PURE__ */ new Set()).add(c4);
        const o5 = a6.get(s7);
        [o5?.valueExpressionExecutor, o5?.editableExpressionExecutor, i6 ? o5?.group?.visibilityExpressionExecutor : null, i6 ? o5?.visibilityExpressionExecutor : null].filter((e15) => null != e15 && e15 !== c4).forEach((e15) => {
          n9.get(e15).push(c4);
          r(t7, e15, () => /* @__PURE__ */ new Set()).add(o5);
        });
      }
      if (c4.geometryUsed) {
        r(e14, l3, () => /* @__PURE__ */ new Set()).add(c4);
      }
    }
    return n9;
  }
  _evaluate(e14) {
    return __async(this, null, function* () {
      const t7 = /* @__PURE__ */ new Map(), {
        _dependencyGraph: r6,
        _fieldsAffectedLookup: a6,
        _latestFieldValues: i6
      } = this;
      for (const s6 of e14) u4(s6, t7, r6);
      for (const [s6, {
        resolver: l5,
        dependencyPromises: c4
      }] of t7) {
        Promise.all(c4).then(() => __async(this, null, function* () {
          const [e15, t8] = this._makeContext(i6);
          return s6.executeAsync(e15, t8);
        })).then(() => {
          if (a6.has(s6)) for (const e15 of a6.get(s6)) this._latestFieldValues[e15.name] = e15.value;
          l5.resolve();
        }, (e15) => {
          !e15 || b(e15) || p7(e15) || s6.markStale(), l5.reject(e15);
        });
      }
      const n9 = (yield Promise.allSettled(Array.from(t7.values(), ({
        resolver: e15
      }) => e15.promise))).filter((e15) => "rejected" === e15.status && !(b(e15.reason) || p7(e15.reason)));
      if (n9.length > 0) {
        const e15 = new AggregateError(n9, `One or more expression executions failed. First error message: ${n9[0].reason}`);
        throw n.getLogger(this).error(e15), e15;
      }
    });
  }
  _makeContext(e14) {
    const [t7, s6] = this._baseContext, r6 = this.feature.clone();
    return r6.attributes = e14, [__spreadProps(__spreadValues({}, t7), {
      $feature: r6
    }), s6];
  }
  get test() {
  }
};
e2([y()], c3.prototype, "_asyncExecutors", null), e2([y()], c3.prototype, "_baseContext", null), e2([y()], c3.prototype, "feature", null), e2([y({
  constructOnly: true
})], c3.prototype, "preserveFieldValuesWhenHidden", void 0), e2([y()], c3.prototype, "executors", void 0), e2([y()], c3.prototype, "fieldInputs", void 0), e2([y()], c3.prototype, "arcadeContextInfo", void 0), c3 = e2([a("esri.widgets.FeatureForm.FormExpressionsManager")], c3);
var u4 = (e14, t7, s6) => {
  if (t7.has(e14)) return;
  const r6 = L();
  t7.set(e14, {
    resolver: r6,
    dependencyPromises: []
  }), e14.abort();
  const o4 = s6.get(e14);
  for (const a6 of o4) u4(a6, t7, s6), t7.get(a6).dependencyPromises.push(r6.promise);
};
var p7 = (e14) => e14 && "object" == typeof e14 && "message" in e14 && "Cancelled" === e14.message;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/GroupInput.js
var l4 = class extends s4 {
  constructor(e14) {
    super(e14), this._expressionTrackingHandles = /* @__PURE__ */ new Map(), this.id = e().toString(), this.type = "group";
  }
  initialize() {
    this.addHandles([d(() => [this.visible, this.inputs], ([e14]) => {
      const {
        inputs: t7
      } = this, i6 = !!e14 && void 0;
      for (const s6 of t7) y2(s6) && (s6.required = i6);
    }, {
      initial: true,
      equals: (e14, t7) => t7[0] === e14[0] && t7[1] === e14[1]
    })]);
  }
  destroy() {
    for (const e14 of this._expressionTrackingHandles.values()) e14.remove();
  }
  get initialState() {
    return this.element.initialState || "expanded";
  }
  get inputs() {
    return this._get("inputs");
  }
  set inputs(e14) {
    this.removeAllHandles(), e14 && this.addHandles(e14.map((e15) => d(() => e15.visible, () => this._dirtyEvaluatedVisibilityExpression()))), this._set("inputs", e14);
  }
  get label() {
    return this.element.label;
  }
  set label(e14) {
    const {
      element: t7
    } = this;
    t7 && (t7.label = e14);
  }
  get open() {
    return "expanded" === this.initialState;
  }
  set open(e14) {
    this._override("open", e14);
  }
  get state() {
    return i(n.getLogger(this), "state", {
      replacement: "open",
      version: "4.28",
      warnOnce: true
    }), this.open ? "expanded" : "collapsed";
  }
  set state(e14) {
    i(n.getLogger(this), "state", {
      replacement: "open",
      version: "4.28",
      warnOnce: true
    }), this.open = "expanded" === e14;
  }
  get visible() {
    return false !== this.evaluatedVisibilityExpression && this.inputs && this.inputs.some((e14) => e14.visible);
  }
  _dirtyEvaluatedVisibilityExpression() {
    const {
      element: e14
    } = this;
    e14.visibilityExpression && this.notifyChange("evaluatedVisibilityExpression");
  }
};
e2([y()], l4.prototype, "id", void 0), e2([y()], l4.prototype, "initialState", null), e2([y()], l4.prototype, "inputs", null), e2([y()], l4.prototype, "label", null), e2([y()], l4.prototype, "open", null), e2([y()], l4.prototype, "type", void 0), e2([y()], l4.prototype, "visible", null), l4 = e2([a("esri.widgets.FeatureForm.GroupInput")], l4);
var u5 = l4;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/RelationshipInput.js
var h3 = 3;
var y3 = class extends l {
  constructor(e14) {
    super(e14), this._relationshipVM = null, this.group = null, this.type = "relationship", this.addHandles([d(() => ({
      feature: this.feature,
      element: this.element,
      layer: this.layer
    }), (e15) => this._createRelationshipVM(e15), P), v(() => this.relatedLayer, "edits", () => this._relationshipVM?.refresh())]);
  }
  destroy() {
    this._relationshipVM?.destroy();
  }
  get canAddRelatedFeature() {
    const {
      editable: e14,
      featureCount: t7,
      relationship: r6
    } = this;
    if (!r6 || !this.loaded || !this.relatedLayerAllowsAdds) return false;
    const {
      cardinality: i6,
      role: l5
    } = r6;
    return !("one-to-one" === i6 && t7 > 0) && "many-to-many" !== i6 && !("one-to-many" === i6 && "destination" === l5 && t7 > 0) && e14;
  }
  get displayCount() {
    return this.element.displayCount ?? h3;
  }
  get displayType() {
    return this.element.displayType;
  }
  get editable() {
    return !!this.relatedLayerAllowsEdits && (this.evaluatedEditableExpression ?? true);
  }
  get featureCount() {
    return this._relationshipVM?.featureCount ?? 0;
  }
  get loaded() {
    return "loading" !== this._relationshipVM?.state;
  }
  get map() {
    return this._get("map");
  }
  set map(e14) {
    e14 && this._relationshipVM?.set("map", e14), this._set("map", e14);
  }
  get orderByFields() {
    return this.element.orderByFields;
  }
  get originHasValidKey() {
    return !(!this.relationship || !this.feature.getAttribute(this.relationship.keyField));
  }
  get relationship() {
    return this._relationshipVM?.relationship;
  }
  get relationshipId() {
    return this.element.relationshipId;
  }
  get relatedFeatureInfos() {
    const {
      _relationshipVM: e14,
      timeZone: t7
    } = this;
    if (!e14?.relatedFeatures?.length || !e14?.relatedLayer) return [];
    const {
      itemDescriptionFieldName: r6,
      relatedFeatures: i6,
      relatedLayer: l5
    } = e14, s6 = l5 && "formTemplate" in l5 && l5.formTemplate ? l5.formTemplate.title : void 0;
    return i6.map((e15) => {
      let i7;
      if (r6) {
        const s7 = e15.getAttribute(r6), o4 = l5.fieldsIndex.get(r6);
        if (o4) {
          const e16 = S2({
            values: [s7],
            fields: [o4],
            timeZone: t7 ?? void 0
          })[r6];
          null != e16 && (i7 = e16.toString());
        }
      }
      return {
        feature: e15,
        description: i7,
        title: s6 ? U3({
          label: s6,
          attributes: e15.attributes,
          fieldsIndex: l5.fieldsIndex,
          timeZone: t7
        }) : void 0
      };
    }).toArray();
  }
  get relatedLayer() {
    return this._relationshipVM?.relatedLayer;
  }
  get relatedLayerIsTable() {
    return !!this.relatedLayer?.isTable;
  }
  get relatedLayerAllowsAdds() {
    const {
      relatedLayer: e14
    } = this;
    if (!e14 || !this.relatedLayerAllowsEdits) return false;
    const t7 = O2(e14);
    return !!t7?.operations?.supportsAdd;
  }
  get relatedLayerAllowsEdits() {
    const {
      relatedLayer: e14
    } = this;
    if (!e14) return false;
    const t7 = O2(e14);
    return !!t7?.operations?.supportsEditing;
  }
  get showAllEnabled() {
    return this._get("showAllEnabled");
  }
  set showAllEnabled(e14) {
    this._relationshipVM?.set("showAllEnabled", e14), this._set("showAllEnabled", e14);
  }
  get showAllActionVisible() {
    return !this.showAllEnabled && this.featureCount > 0 && this.featureCount > this.displayCount;
  }
  get visible() {
    const {
      relationship: e14
    } = this;
    if (!e14) return false;
    const {
      cardinality: t7
    } = e14;
    return "many-to-many" !== t7 && (null != this.evaluatedVisibilityExpression ? this.evaluatedVisibilityExpression : null != this.element);
  }
  get updating() {
    return "loading" === this._relationshipVM?.state || "querying" === this._relationshipVM?.state;
  }
  incrementPage() {
    this._relationshipVM && this._relationshipVM.featurePage++;
  }
  getRelatedFeatureByObjectId(e14) {
    return this._relationshipVM?.getRelatedFeatureByObjectId(e14);
  }
  _createRelationshipVM(e14) {
    const {
      feature: t7,
      element: r6,
      layer: i6
    } = e14;
    if (this._relationshipVM?.destroy(), !t7 || !r6 || !i6) return;
    const {
      displayCount: l5,
      map: s6,
      orderByFields: o4,
      relationshipId: p8,
      showAllEnabled: d5
    } = this;
    J(i6) && (this._relationshipVM = new F2({
      graphic: t7,
      displayCount: l5,
      layer: i6,
      map: s6,
      orderByFields: o4,
      relationshipId: p8,
      showAllEnabled: d5
    }));
  }
};
e2([y()], y3.prototype, "_relationshipVM", void 0), e2([y()], y3.prototype, "canAddRelatedFeature", null), e2([y()], y3.prototype, "displayCount", null), e2([y()], y3.prototype, "displayType", null), e2([y()], y3.prototype, "editable", null), e2([y()], y3.prototype, "featureCount", null), e2([y()], y3.prototype, "group", void 0), e2([y()], y3.prototype, "loaded", null), e2([y()], y3.prototype, "map", null), e2([y()], y3.prototype, "orderByFields", null), e2([y()], y3.prototype, "originHasValidKey", null), e2([y()], y3.prototype, "relationship", null), e2([y()], y3.prototype, "relationshipId", null), e2([y()], y3.prototype, "relatedFeatureInfos", null), e2([y()], y3.prototype, "relatedLayer", null), e2([y()], y3.prototype, "relatedLayerIsTable", null), e2([y()], y3.prototype, "relatedLayerAllowsAdds", null), e2([y()], y3.prototype, "relatedLayerAllowsEdits", null), e2([y()], y3.prototype, "showAllEnabled", null), e2([y()], y3.prototype, "showAllActionVisible", null), e2([y({
  readOnly: true
})], y3.prototype, "type", void 0), e2([y()], y3.prototype, "visible", null), e2([y()], y3.prototype, "updating", null), y3 = e2([a("esri.widgets.FeatureForm.RelationshipInput")], y3);
var m2 = y3;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/support/textManipulationUtils.js
var e13;
var t6 = ["blockquote", "html", "hr", "checkbox", "table", "tablerow", "tablecell", "image"];
function a5(t7) {
  return __async(this, null, function* () {
    return e13 || (yield n8()), e13.parse(t7);
  });
}
function n8() {
  return __async(this, null, function* () {
    const {
      Marked: a6
    } = yield import("./marked.esm-KORLIMRJ.js"), n9 = (e14) => `<span style="text-decoration:line-through;">${e14}</span>`, l5 = (e14, t7, a7) => `<a${null != e14 ? ` href="${e14}"` : ""}${null != t7 ? ` title="${t7}"` : ""} target="_blank">${a7 ?? ""}</a>`, r6 = () => "", o4 = {};
    for (const e14 of t6) o4[e14] = r6;
    e13 = new a6({
      renderer: __spreadValues({
        del: n9,
        link: l5
      }, o4)
    });
  });
}

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/TextElementInput.js
var _2 = class extends s4 {
  constructor(e14) {
    super(e14), this.group = null, this.id = `TextElementInput-${e()}`, this.type = "text", this._expressionReferences = new s2(), this._expressionsUsed = new s3(), this._fieldsUsed = new s3(), this._literalParts = new V(), this._templateParts = new V(), this._updatingHandles = new h();
  }
  initialize() {
    const {
      rawText: e14
    } = this;
    e14 ? "markdown" === this.textFormat ? this._updatingHandles.addPromise(a5(e14).then((e15) => this._initializeTextParts(e15))) : this._initializeTextParts(e14) : this._literalParts.push("");
  }
  get expressionsUsed() {
    return Array.from(this._expressionsUsed);
  }
  get fieldsIndex() {
    return this.layer.fieldsIndex;
  }
  set fieldsIndex(e14) {
    this._overrideIfSome("fieldsIndex", e14);
  }
  get fieldsUsed() {
    return Array.from(this._fieldsUsed);
  }
  get rawText() {
    return this.element.text;
  }
  get text() {
    const e14 = this._templateParts.map((e15) => `${this._expressionReferences.get(e15)?.lastEvaluatedValue ?? ""}`);
    return j.sanitize(y4(this._literalParts, e14));
  }
  get textFormat() {
    return this.element.textFormat;
  }
  get updating() {
    return this._updatingHandles.updating || Array.from(this._expressionReferences.values()).some((e14) => e14?.updating);
  }
  setExpressionExecutor(e14, t7) {
    this._expressionReferences.set(R(e14), t7);
  }
  setFieldExecutor(e14, t7) {
    this._expressionReferences.set($(e14), t7);
  }
  _initializeTextParts(e14) {
    const {
      fieldsIndex: t7
    } = this, {
      literals: s6,
      templates: r6
    } = g2(e14), i6 = [], o4 = [];
    for (let n9 = 0; n9 < r6.length; n9++) {
      const e15 = s6[n9], p8 = Xe(r6[n9])[0];
      if (D2(p8)) this._expressionsUsed.add(I3(p8)), this._expressionReferences.set(p8, null), i6.push(e15), o4.push(p8);
      else if (w3(p8)) {
        this._expressionsUsed.add(p8);
        const t8 = R(p8);
        this._expressionReferences.set(t8, null), i6.push(e15), o4.push(t8);
      } else if (t7?.has(p8)) {
        const s7 = t7.normalizeFieldName(p8);
        this._fieldsUsed.add(s7);
        const r7 = $(s7);
        this._expressionReferences.set(r7, null), i6.push(e15), o4.push(r7);
      } else s6[n9 + 1] = e15.concat(p8, s6[n9 + 1]);
    }
    i6.push(s6.at(-1)), this._literalParts.addMany(i6), this._templateParts.addMany(o4);
  }
};
function g2(e14) {
  const t7 = /{[^{]+?}/g, s6 = [...e14.matchAll(t7)];
  let r6 = 0;
  const i6 = [], o4 = [];
  for (const n9 of s6) {
    const t8 = n9[0];
    i6.push(e14.slice(r6, n9.index)), o4.push(t8), r6 = n9.index + t8.length;
  }
  return i6.push(e14.slice(r6)), {
    literals: i6,
    templates: o4
  };
}
function y4(e14, t7) {
  return t7.reduce((t8, s6, r6) => t8.concat(e14.at(r6), s6), "").concat(e14.at(-1));
}
e2([y()], _2.prototype, "expressionsUsed", null), e2([y()], _2.prototype, "fieldsIndex", null), e2([y()], _2.prototype, "fieldsUsed", null), e2([y()], _2.prototype, "group", void 0), e2([y()], _2.prototype, "id", void 0), e2([y()], _2.prototype, "rawText", null), e2([y()], _2.prototype, "text", null), e2([y()], _2.prototype, "textFormat", null), e2([y()], _2.prototype, "type", void 0), e2([y()], _2.prototype, "updating", null), _2 = e2([a("esri.widgets.FeatureForm.TextElementInput")], _2);

// ../../../node_modules/@arcgis/core/widgets/FeatureForm/FeatureFormViewModel.js
var P2 = new d3({
  attributes: {}
});
var O5 = {
  field: ["editableExpression", "requiredExpression", "valueExpression", "visibilityExpression"],
  group: ["visibilityExpression"],
  relationship: ["editableExpression", "visibilityExpression"],
  text: ["visibilityExpression"]
};
var W = "#JSAPI_CONTINGENT_VALUE_EMPTY_HASH";
var G2 = "#JSAPI_CONTINGENT_VALUE_ANY_HASH";
var $2 = "#JSAPI_CONTINGENT_VALUE_NULL_HASH";
var z = "esri.widgets.FeatureForm.FeatureFormViewModel";
var D3 = () => n.getLogger(z);
var J2 = class extends n2(o.EventedAccessor) {
  constructor(e14) {
    super(e14), this._expressionExecutorsInUse = /* @__PURE__ */ new Set(), this._expressionExecutorLookup = /* @__PURE__ */ new Map(), this._expressionsManager = null, this._contingentValuesCache = null, this._featureClone = P2.clone(), this._initialFeature = P2.clone(), this._timeZone = null, this._updatingHandles = new h(), this.arcadeEditType = "NA", this.contingencyConstraintViolations = /* @__PURE__ */ new Map(), this.disabled = false, this.highlightHelper = null, this.inputs = [], this.map = null, this.relatedRecordCallbacks = null, this.strict = false, this.hasPendingSubtypeChoice = false;
  }
  initialize() {
    const e14 = d(() => [this.layer, !!this.layer?.loaded, this.formTemplate, this.feature, this.timeZone, this.arcadeEditType], (_0) => __async(this, [_0], function* ([e15, t8]) {
      null != e15 && (t8 ? this._updatingHandles.addPromise(this._updateInputs()) : e15.load().catch(() => {
      }));
    }), {
      equals: ([e15, t8, n10, s6, i6, o4], [r6, a6, l5, u6, p8, c4]) => e15 === r6 && t8 === a6 && n10 === l5 && s6 === u6 && i6 === p8 && o4 === c4,
      initial: true
    }), t7 = d(() => this._arcadeContextInfo, (e15) => {
      null != this._expressionsManager && (this._expressionsManager.arcadeContextInfo = e15, this._updatingHandles.addPromise(this._expressionsManager.evaluateAll().finally(() => this._afterExpressionsEvaluated())));
    }), n9 = d(() => this.layer, (e15) => {
      const t8 = "subtype-sublayer" === e15?.type ? e15.parent : "feature" === e15?.type ? e15 : null;
      t8 && this.addResolvingPromise(_.createLoadedLayerContingentValuesCache(t8).then((e16) => {
        this._contingentValuesCache = e16, this.notifyChange("fieldsWithContingentValues");
      }));
    }, {
      initial: true
    });
    this.addHandles([e14, t7, n9]);
  }
  destroy() {
    this.feature = null, this.layer = null, this._contingentValuesCache = u(this._contingentValuesCache), this.highlightHelper?.removeAll(), this._updatingHandles.destroy();
  }
  get _expressionInfosLookup() {
    return new Map(this.formTemplate?.expressionInfos?.map((e14) => [e14.name, e14]));
  }
  get activeRelationshipInput() {
    return this.allRelationshipInputs.find((e14) => e14.relationshipId === this.relationshipId);
  }
  get _arcadeContextInfo() {
    const {
      _initialFeature: e14,
      arcadeEditType: t7,
      layer: n9,
      map: s6,
      spatialReference: i6,
      timeZone: o4
    } = this;
    return {
      layer: e8(n9) ? n9 : null,
      originalFeature: e14,
      editType: t7,
      map: s6,
      spatialReference: i6,
      timeZone: o4
    };
  }
  get allFieldInputs() {
    return j2(this.inputs);
  }
  get allGroupInputs() {
    return this.inputs.filter(b2);
  }
  get allRelationshipInputs() {
    return N(this.inputs);
  }
  get _layerFieldsByName() {
    return new Map(this.layer?.fields.map((e14) => [e14.name, e14]));
  }
  get feature() {
    return this._get("feature");
  }
  set feature(e14) {
    const t7 = this._get("feature");
    this._featureClone = e14 ? e14.clone() : P2.clone(), this._initialFeature = this._featureClone.clone(), this._expressionsManager && (this._expressionsManager.feature = this._featureClone), e14 ? (this._resetFieldInputValues(this._featureClone), this.allRelationshipInputs.forEach((t8) => t8.feature = e14)) : (this.inputs.forEach((e15) => e15.destroy()), this.inputs.length = 0), t7 !== e14 && (this.hasPendingSubtypeChoice = false), this.contingencyConstraintViolations.clear(), this._set("feature", e14);
  }
  get fieldsWithContingentValues() {
    if (null == this._contingentValuesCache) return /* @__PURE__ */ new Set();
    const e14 = this._contingentValuesCache.fieldGroups.flatMap((e15) => e15.fields);
    return new Set(e14);
  }
  get formTemplate() {
    return this.layer && "formTemplate" in this.layer ? this.layer.formTemplate : null;
  }
  set formTemplate(e14) {
    void 0 === e14 ? this._clearOverride("formTemplate") : this._override("formTemplate", e14);
  }
  get formDescription() {
    const {
      formTemplate: e14,
      layer: t7
    } = this;
    return e14?.description && t7 ? U3({
      label: e14.description,
      attributes: this.getValues(),
      fieldsIndex: t7.fieldsIndex,
      timeZone: this.timeZone
    }) : null;
  }
  get formTitle() {
    const {
      formTemplate: e14,
      layer: t7
    } = this;
    return e14?.title && t7 ? U3({
      label: e14.title,
      attributes: this.getValues(),
      fieldsIndex: t7.fieldsIndex,
      timeZone: this.timeZone
    }) : null;
  }
  get formHeaderVisible() {
    const {
      activeRelationshipInput: e14,
      formDescription: t7,
      formTitle: n9
    } = this;
    return !(e14 || !t7 && !n9);
  }
  get joinedContingentValues() {
    return this._joinContingentValues();
  }
  get layer() {
    return this.feature?.sourceLayer && "applyEdits" in this.feature.sourceLayer ? this.feature.sourceLayer : null;
  }
  set layer(e14) {
    this._override("layer", e14);
  }
  get relationshipId() {
    return this._get("relationshipId");
  }
  set relationshipId(e14) {
    const t7 = this.allRelationshipInputs;
    if (null != e14 && e14 === this.relationshipId || t7.forEach((e15) => e15.showAllEnabled = false), null != e14) {
      const n9 = t7.find((t8) => t8.relationshipId === e14);
      n9 && (n9.showAllEnabled = true);
    }
    this._set("relationshipId", e14);
  }
  get spatialReference() {
    return this.layer?.spatialReference ?? null;
  }
  set spatialReference(e14) {
    this._override("spatialReference", e14);
  }
  get state() {
    return this.layer?.loaded ? "ready" : "disabled";
  }
  get submittable() {
    return !!this.valid || this.allFieldInputs.filter((e14) => !e14.valid).every(({
      submittable: e14
    }) => e14);
  }
  get timeZone() {
    const {
      layer: e14
    } = this;
    if (e14 && "datesInUnknownTimezone" in e14 && e14.datesInUnknownTimezone) return i3;
    const t7 = e14 && "preferredTimeZone" in e14 && e14.preferredTimeZone;
    return this._timeZone === r2 ? t7 || i3 : this._timeZone || o2;
  }
  set timeZone(e14) {
    this._timeZone = e14;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get valid() {
    const e14 = this.allFieldInputs;
    return e14.length > 0 && e14.every(({
      valid: e15
    }) => e15);
  }
  findField(e14) {
    return this.allFieldInputs.find((t7) => t7.name === e14);
  }
  getFieldValueOptionsForField(e14, t7) {
    const n9 = this.findField(e14);
    if (!n9) return [[], [], []];
    const s6 = "coded-value" === n9.domain?.type ? n9.domain.codedValues.map(({
      name: e15,
      code: t8
    }) => ({
      name: e15,
      value: t8
    })) : [], i6 = null == n9.value || s6.some((e15) => e15.value === n9.value) ? [] : [{
      name: `${n9.value}`,
      value: n9.value
    }], o4 = this.fieldsWithContingentValues.has(e14) ? this._getContingentValueOptionsForField(e14, t7) : [];
    if (o4.length > 0) {
      const e15 = new Set(o4.map((e16) => e16.value));
      return [o4, s6.filter((t8) => !e15.has(t8.value)), i6];
    }
    return [s6, [], i6];
  }
  getValue(e14) {
    const t7 = this.layer?.getField(e14);
    if (null != t7) return this._featureClone.getAttribute(t7.name) ?? null;
  }
  setValue(e14, t7) {
    const {
      _featureClone: n9,
      strict: s6
    } = this, i6 = this.findField(e14);
    t7 = "" === t7 ? null : t7, i6 && n9.getAttribute(e14) !== t7 && (i6.value = t7, s6 && !i6.valid || (this._afterValueChange(i6), null != this._expressionsManager && this._updatingHandles.addPromise(this._expressionsManager.evaluateInvalidated([i6.name]).finally(() => this._afterExpressionsEvaluated()))));
  }
  getValues() {
    return __spreadValues({}, this._featureClone.attributes);
  }
  overrideInitialFeature(e14) {
    this._initialFeature = e14;
  }
  submit() {
    const e14 = this.allFieldInputs, t7 = new Set(e14.filter((e15) => e15.valid).map(({
      name: e15
    }) => e15)), n9 = e14.filter((e15) => !e15.valid).map(({
      name: e15
    }) => e15), s6 = this.getValues();
    if (this.validateContingencyConstraints(s6, {
      includeIncompleteViolations: true
    }).length > 0) for (const [i6, o4] of this.contingencyConstraintViolations.entries()) "error" === o4.type && (t7.delete(i6), n9.push(i6));
    this.emit("submit", {
      valid: [...t7],
      invalid: n9,
      values: s6
    });
  }
  validateContingencyConstraints(e14, t7) {
    const {
      _contingentValuesCache: n9
    } = this, s6 = /* @__PURE__ */ new Map();
    if (this.contingencyConstraintViolations = s6, null == n9) return [];
    const {
      invalid: i6,
      incomplete: o4
    } = n9.validateContingencyConstraints(e14), r6 = [...i6, ...t7?.includeIncompleteViolations ? o4 : []];
    for (const a6 of r6) for (const e15 of a6.fieldGroup.fields) s6.set(e15, a6);
    return r6;
  }
  notifyFeatureGeometryChanged() {
    const {
      _expressionsManager: e14,
      feature: t7,
      _featureClone: n9
    } = this;
    n9.geometry = t7.geometry, null != e14 && this._updatingHandles.addPromise(e14.evaluateInvalidatedByGeometry().finally(() => this._afterExpressionsEvaluated()));
  }
  applySubtypeDefaults(e14) {
    const {
      defaultValues: t7
    } = e14, {
      allFieldInputs: n9
    } = this;
    for (const {
      name: s6
    } of n9) {
      const e15 = t7[s6];
      null != e15 && this.setValue(s6, e15);
    }
  }
  _emitChangeEvent({
    name: e14,
    valid: t7,
    value: n9
  }) {
    this.emit("value-change", {
      layer: this.layer,
      feature: this.feature,
      fieldName: e14,
      value: n9,
      valid: t7
    });
  }
  _updateInputs() {
    return __async(this, null, function* () {
      this._stopExpressions();
      const {
        _featureClone: e14,
        _initialFeature: t7,
        arcadeEditType: n9,
        formTemplate: s6,
        inputs: i6,
        layer: o4,
        timeZone: r6
      } = this;
      if (!o4) return;
      const a6 = {
        arcadeEditType: n9,
        feature: e14,
        initialFeature: t7,
        layer: o4,
        timeZone: r6
      }, l5 = i6.slice(), u6 = s6?.elements && s6.elements.length > 0 ? yield this._updateInputsUsingFormElements(l5, s6.elements, a6) : this._updateInputsUsingLayerFields(l5, o4?.fields, a6);
      this.inputs = u6, yield this._startExpressions();
    });
  }
  _updateInputsUsingFormElements(e14, t7, n9) {
    return __async(this, null, function* () {
      const s6 = /* @__PURE__ */ new Map();
      for (const r6 of e14) if (b2(r6)) {
        s6.set(r6.element, r6);
        for (const e15 of r6.inputs) e15.element && s6.set(e15.element, e15);
      } else r6.element && s6.set(r6.element, r6);
      const i6 = /* @__PURE__ */ new Map(), o4 = yield this._updateInputsUsingFormElementsRecursive({
        existingInputsByElement: s6,
        updatedElements: t7.filter(B3),
        sharedInitializationProperties: n9,
        group: null,
        newExpressionExecutorPromises: i6
      });
      for (const [r6, a6] of s6.entries()) s6.delete(r6), a6.destroy();
      return yield Promise.all(Array.from(i6.values())), o4;
    });
  }
  _updateInputsUsingFormElementsRecursive(e14) {
    return __async(this, null, function* () {
      const {
        existingInputsByElement: t7,
        updatedElements: n9,
        sharedInitializationProperties: s6,
        group: i6,
        newExpressionExecutorPromises: o4
      } = e14, r6 = [];
      for (const a6 of n9) {
        const e15 = t7.has(a6), n10 = e15 ? t7.get(a6) : this._makeInputFromElement(a6, s6, i6);
        if (n10) {
          if (r6.push(n10), yield w(() => !n10.updating), this._assignExpressionExecutors(n10, a6, o4), e15) if (t7.delete(a6), b2(n10)) {
            const {
              feature: e16,
              timeZone: t8
            } = s6;
            n10.set({
              feature: e16,
              timeZone: t8
            });
          } else if (g(n10)) {
            const e16 = this.relationshipId === a6.relationshipId;
            n10.set(s6), n10.set({
              map: this.map,
              showAllEnabled: e16
            });
          } else n10.set(s6);
          if (e4(a6)) {
            const e16 = a6.elements.filter((e17) => B3(e17));
            n10.inputs = yield this._updateInputsUsingFormElementsRecursive({
              existingInputsByElement: t7,
              updatedElements: e16,
              sharedInitializationProperties: s6,
              group: n10,
              newExpressionExecutorPromises: o4
            });
          }
        }
      }
      return r6;
    });
  }
  _updateInputsUsingLayerFields(e14, t7, n9) {
    if (!Array.isArray(t7)) return D3().warn(this.declaredClass, "No attribute fields found."), [];
    const s6 = /* @__PURE__ */ new Map();
    for (const o4 of e14) if (b2(o4)) {
      for (const e15 of o4.inputs) e15.destroy();
      o4.inputs.length = 0, o4.destroy();
    } else g(o4) ? o4.destroy() : y2(o4) && (null !== o4.element ? o4.destroy() : s6.set(o4.field, o4));
    const i6 = [];
    for (const o4 of t7) {
      const e15 = n9.feature?.getAttribute(o4.name) ?? null, t8 = s6.get(o4) ?? new q2({
        field: o4,
        preservesValueWhenHidden: this.formTemplate?.preserveFieldValuesWhenHidden
      });
      i6.push(t8.set(__spreadProps(__spreadValues({}, n9), {
        value: e15
      }))), s6.delete(o4);
    }
    for (const [o4, r6] of s6.entries()) s6.delete(o4), r6.destroy();
    return i6;
  }
  _resetFieldInputValues(e14) {
    for (const t7 of this.allFieldInputs) t7.value = e14.getAttribute(t7.name);
  }
  _makeInputFromElement(e14, t7, s6) {
    return e4(e14) ? K2(e14, t7) : t2(e14) ? this._makeFieldInputFromElement(e14, t7, s6) : o3(e14) ? this._makeRelationshipInputFromElement(e14, t7, s6) : p(e14) ? q3(e14, t7) : n4();
  }
  _makeFieldInputFromElement(e14, t7, n9) {
    const {
      arcadeEditType: s6,
      feature: i6,
      initialFeature: o4,
      layer: r6,
      timeZone: a6
    } = t7, {
      fieldName: l5
    } = e14, u6 = l5 && this._layerFieldsByName.get(l5);
    return u6 ? new q2({
      arcadeEditType: s6,
      element: e14,
      field: u6,
      value: i6?.getAttribute(e14.fieldName) ?? null,
      feature: i6,
      initialFeature: o4,
      layer: r6,
      group: n9,
      preservesValueWhenHidden: this.formTemplate?.preserveFieldValuesWhenHidden,
      timeZone: a6
    }) : null;
  }
  _makeRelationshipInputFromElement(e14, t7, n9 = null) {
    const {
      map: s6
    } = this, {
      feature: i6,
      layer: o4,
      timeZone: r6
    } = t7, a6 = new m2({
      element: e14,
      feature: i6,
      group: n9,
      layer: o4,
      map: s6,
      timeZone: r6
    });
    return a6.addHandles(v(() => a6.relatedLayer, "edits", () => this._expressionsManager?.evaluateAsyncExpressions())), a6;
  }
  _assignExpressionExecutors(e14, t7, n9) {
    const s6 = O5[t7.type], i6 = [];
    for (const o4 of s6) {
      const s7 = `${o4}Executor`;
      if (e14[s7]) {
        this._useExecutor(e14[s7]);
        continue;
      }
      const r6 = t7[o4];
      if (null != r6 && "" !== r6) {
        const t8 = this._expressionInfosLookup.get(r6)?.expression ?? r6;
        i6.push(this._getOrCreateExecutorForExpression(t8, n9).then((t9) => {
          e14[s7] = this._useExecutor(t9);
        }));
      }
    }
    return x(e14) && i6.push(...this._assignTextElementExpressionExecutors(e14, n9)), i6;
  }
  _assignTextElementExpressionExecutors(e14, t7) {
    const {
      _expressionInfosLookup: n9
    } = this, s6 = [];
    for (const o4 of e14.expressionsUsed) {
      const r6 = n9.get(o4);
      null != r6 ? s6.push(this._getOrCreateExecutorForExpression(r6.expression, t7).then((t8) => e14.setExpressionExecutor(o4, this._useExecutor(t8)))) : n.getLogger(this).error("feature-form:expression-not-found", `Could not find expressionInfo object with name '${o4}'`);
    }
    for (const i6 of e14.fieldsUsed) {
      const n10 = `return $feature['${i6}'];`;
      s6.push(this._getOrCreateExecutorForExpression(n10, t7).then((t8) => e14.setFieldExecutor(i6, this._useExecutor(t8))));
    }
    return s6;
  }
  _getOrCreateExecutorForExpression(e14, t7) {
    return __async(this, null, function* () {
      const {
        _expressionExecutorLookup: n9
      } = this;
      if (n9.has(e14)) return n9.get(e14);
      if (t7.has(e14)) return t7.get(e14);
      const s6 = d4(e14, this.layer);
      t7.set(e14, s6);
      const i6 = yield s6;
      return n9.set(e14, i6), i6;
    });
  }
  _createExpressionsManager(e14) {
    const {
      _arcadeContextInfo: t7,
      _featureClone: n9,
      allFieldInputs: s6,
      formTemplate: i6
    } = this;
    this._expressionsManager = new c3({
      executors: e14,
      feature: n9,
      arcadeContextInfo: t7,
      fieldInputs: s6,
      preserveFieldValuesWhenHidden: true === i6?.preserveFieldValuesWhenHidden
    });
  }
  _startExpressions() {
    return __async(this, null, function* () {
      if (0 === this._expressionExecutorsInUse.size) return;
      const e14 = Array.from(this._expressionExecutorsInUse);
      this._createExpressionsManager(e14), yield this._expressionsManager.evaluateAll().finally(() => this._afterExpressionsEvaluated());
    });
  }
  _stopExpressions() {
    this._expressionsManager = u(this._expressionsManager), this._expressionExecutorsInUse.clear();
  }
  _useExecutor(e14) {
    return this._expressionExecutorsInUse.add(e14), e14;
  }
  _afterValueChange(e14) {
    const {
      name: t7,
      value: n9
    } = e14, {
      _featureClone: s6,
      formTemplate: i6,
      layer: o4
    } = this;
    if (!o4) return;
    const r6 = s6.getAttribute(t7);
    s6.setAttribute(t7, n9);
    const {
      typeFieldName: a6,
      types: l5
    } = C3(o4);
    if ((e14.isSubtypeField || t7 === a6) && n9 !== r6) {
      if ("subtype-sublayer" === o4.type) {
        const e16 = o4.parent?.findSublayerForFeature(s6);
        s6.sourceLayer = this.feature.sourceLayer = e16;
      }
      const e15 = /* @__PURE__ */ new Set();
      for (const t8 of l5) if (t8.domains && "object" == typeof t8.domains) for (const n10 of Object.keys(t8.domains)) e15.add(n10);
      for (const t8 of e15) {
        const e16 = this.findField(t8);
        e16 && e16.notifyChange("domain");
      }
      this.notifyChange("joinedContingentValues");
    }
    if (null != i6) {
      const {
        description: e15,
        title: n10
      } = i6;
      n10 && i2(n10, t7) && this.notifyChange("formTitle"), e15 && i2(e15, t7) && this.notifyChange("formDescription");
    }
    this._emitChangeEvent(e14);
  }
  _afterExpressionsEvaluated() {
    const {
      _featureClone: e14
    } = this;
    for (const t7 of this.allFieldInputs) t7.value !== e14.getAttribute(t7.name) && this._afterValueChange(t7);
  }
  _joinContingentValues() {
    const e14 = this._contingentValuesCache;
    if (null == e14) return [];
    const {
      typeFieldName: t7
    } = C3(this.layer), n9 = t7 ? this.getValue(t7) : null, s6 = [];
    for (const r6 of e14.fieldGroups) {
      const {
        contingencies: e15,
        fields: t8,
        name: i7
      } = r6, o5 = [];
      for (const s7 of e15) s7.isRetired || null != s7.subtype && s7.subtype.code !== n9 || o5.push({
        values: s7.values
      });
      o5.length > 0 && s6.push({
        name: i7,
        fields: t8,
        contingencies: o5
      });
    }
    const [i6, o4] = this._generateJoinPlan(s6);
    return [...i6.flatMap((e15) => this._joinFieldGroupContingencies(e15)), ...o4.flatMap((e15) => e15.contingencies)];
  }
  _generateJoinPlan(e14) {
    const t7 = /* @__PURE__ */ new Map(), n9 = [], s6 = /* @__PURE__ */ new Set();
    for (const l5 of e14) for (const e15 of l5.fields) if (t7.has(e15)) {
      const i7 = t7.get(e15), o5 = l5, r7 = [i7.name, o5.name].sort().join("|");
      if (s6.has(r7)) continue;
      n9.push([i7, o5]), s6.add(r7), t7.set(e15, o5);
    } else t7.set(e15, l5);
    const i6 = new Set(n9.flat()), o4 = new Set(e14);
    for (const l5 of i6) o4.delete(l5);
    const r6 = /* @__PURE__ */ new Map(), a6 = /* @__PURE__ */ new Map();
    for (const l5 of new Set(n9.flat())) {
      const e15 = Symbol(l5.name);
      r6.set(e15, /* @__PURE__ */ new Set([l5])), a6.set(l5, e15);
    }
    for (const [l5, u6] of n9) {
      const e15 = a6.get(l5), t8 = a6.get(u6);
      if (e15 === t8) continue;
      const n10 = r6.get(e15), s7 = r6.get(t8);
      for (const i7 of s7) n10.add(i7), a6.set(i7, e15);
      r6.delete(t8);
    }
    return [[...r6.values()].map((e15) => [...e15]), [...o4]];
  }
  _joinFieldGroupContingencies(e14) {
    const t7 = e14.slice(), n9 = t7.shift();
    let s6 = t7.shift(), i6 = this._generateJoinKey(n9.fields, s6.fields), o4 = /* @__PURE__ */ new Set([...n9.fields, ...s6.fields]), r6 = /* @__PURE__ */ new Map();
    for (const l5 of n9.contingencies) {
      const [e15] = this._hashContingency(l5, i6.codedValueFields, true);
      r6.has(e15) ? r6.get(e15)?.push(l5) : r6.set(e15, [l5]);
    }
    for (; t7.length > 0; ) {
      const e15 = /* @__PURE__ */ new Map(), n10 = t7.shift(), a7 = this._generateJoinKey(o4, n10.fields);
      for (const t8 of s6.contingencies) {
        const [n11, s7] = this._hashContingency(t8, i6.codedValueFields), o5 = s7 ? this._findMatchingContingenciesWithAnyHashMask(r6, n11) : r6.get(n11);
        if (r6.has(G2) && o5?.push(...this._findMatchingContingenciesContainingAny(t8, r6.get(G2), i6.codedValueFields)), null != o5) for (const r7 of o5) {
          const n12 = i6.rangeFields.length > 0 ? this._joinContingenciesWithRangeDomains(r7, t8, i6.rangeFields) : this._joinContingencies(r7, t8);
          if (null == n12) break;
          const [s8] = this._hashContingency(n12, a7.codedValueFields, true);
          e15.has(s8) ? e15.get(s8)?.push(n12) : e15.set(s8, [n12]);
        }
      }
      r6 = e15, s6 = n10, i6 = a7, o4 = /* @__PURE__ */ new Set([...o4, ...s6.fields]);
    }
    const a6 = [];
    for (const l5 of s6.contingencies) {
      const [e15, t8] = this._hashContingency(l5, i6.codedValueFields), n10 = t8 ? this._findMatchingContingenciesWithAnyHashMask(r6, e15) : r6.get(e15);
      if (r6.has(G2) && n10.push(...this._findMatchingContingenciesContainingAny(l5, r6.get(G2), i6.codedValueFields)), null != n10) for (const s7 of n10) {
        const e16 = i6.rangeFields.length > 0 ? this._joinContingenciesWithRangeDomains(s7, l5, i6.rangeFields) : this._joinContingencies(s7, l5);
        null != e16 && a6.push(e16);
      }
    }
    return a6;
  }
  _joinContingencies(e14, t7) {
    const n9 = {
      values: __spreadValues(__spreadValues({}, e14.values), t7.values)
    };
    for (const [s6, i6] of Object.entries(n9.values)) "any" === i6.objectType && null != e14.values[s6] && (n9.values[s6] = e14.values[s6]);
    return n9;
  }
  _joinContingenciesWithRangeDomains(e14, t7, n9) {
    const s6 = this._joinContingencies(e14, t7);
    for (const i6 of n9) {
      const n10 = e14.values[i6], o4 = t7.values[i6], {
        leftIsNull: r6,
        rightIsNull: a6,
        bothAreNull: l5,
        leftIsAny: u6,
        rightIsAny: p8,
        bothAreAny: c4,
        leftIsRange: d5,
        rightIsRange: h4
      } = this._compareObjectTypes(n10.objectType, o4.objectType);
      if (l5 || c4) continue;
      if (r6 && p8 || a6 && u6) {
        s6.values[i6] = new p2({
          objectType: "null"
        });
        continue;
      }
      if (r6 && h4 || a6 && d5) return null;
      u6 ? (n10.minValue = -1 / 0, n10.maxValue = 1 / 0) : p8 && (o4.minValue = -1 / 0, o4.maxValue = 1 / 0);
      const f = Math.max(n10.minValue, o4.minValue), m3 = Math.min(n10.maxValue, o4.maxValue);
      if (f > m3) return null;
      s6.values[i6] = new p2({
        objectType: "range",
        minValue: f,
        maxValue: m3
      });
    }
    return s6;
  }
  _findMatchingContingenciesContainingAny(e14, t7, n9) {
    return t7.filter((t8) => n9.every((n10) => {
      const s6 = t8.values[n10], i6 = e14.values[n10];
      return "any" === s6.objectType || "any" === i6.objectType || s6.codedValue?.code === i6.codedValue?.code;
    }));
  }
  _findMatchingContingenciesWithAnyHashMask(e14, t7) {
    const n9 = RegExp(`${t7}$`), s6 = [];
    for (const [i6, o4] of e14) {
      if (i6 === G2) break;
      n9.test(i6) && s6.push(...o4);
    }
    return s6;
  }
  _generateJoinKey(e14, t7) {
    const n9 = Array.isArray(e14) ? new Set(e14) : e14, s6 = Array.isArray(t7) ? new Set(t7) : t7, i6 = n9.size < s6.size ? n9 : s6, o4 = i6 === n9 ? s6 : n9, r6 = /* @__PURE__ */ new Set(), a6 = /* @__PURE__ */ new Set();
    for (const l5 of i6) if (o4.has(l5)) {
      const e15 = this.layer?.getFieldDomain(l5, {
        feature: this.feature
      });
      if (null == e15) continue;
      switch (e15.type) {
        case "coded-value":
          r6.add(l5);
          break;
        case "range":
          a6.add(l5);
      }
    }
    return {
      codedValueFields: [...r6],
      rangeFields: [...a6]
    };
  }
  _contingencyIsValid(e14, t7) {
    const n9 = {};
    for (const {
      name: s6,
      value: i6
    } of this.allFieldInputs) this.fieldsWithContingentValues.has(s6) && null != i6 && s6 !== e14 && (n9[s6] = i6);
    return Object.entries(n9).every(([e15, n10]) => !t7.values.hasOwnProperty(e15) || K(n10, t7.values[e15]));
  }
  _getContingentValueOptionsForField(e14, t7) {
    const n9 = this.joinedContingentValues.slice(), s6 = /* @__PURE__ */ new Map(), i6 = {
      code: "",
      name: t7 ?? "No value"
    };
    for (const o4 of n9) {
      const t8 = o4.values[e14];
      if ("code" === t8?.objectType || "null" === t8?.objectType) {
        const {
          code: n10,
          name: r6
        } = t8.codedValue && "null" !== t8.objectType ? t8.codedValue : i6;
        !s6.has(n10) && this._contingencyIsValid(e14, o4) && s6.set(n10, {
          name: r6,
          value: n10
        });
      }
    }
    return [...s6.values()];
  }
  _hashContingency(e14, t7, n9 = false) {
    if (t7.length < 1) return [W, false];
    const s6 = [];
    let i6 = false;
    for (const o4 of t7) {
      const t8 = e14.values[o4];
      if ("any" === t8.objectType) {
        if (n9) return [G2, true];
        i6 = true, s6.push(`${o4}:.*`);
      } else "null" === t8.objectType ? s6.push(`${o4}:${$2}`) : s6.push(`${o4}:${t8.codedValue?.code}`);
    }
    return [s6.sort().join("&"), i6];
  }
  _compareObjectTypes(e14, t7) {
    return {
      leftIsNull: "null" === e14,
      rightIsNull: "null" === t7,
      bothAreNull: "null" === e14 && "null" === t7,
      leftIsAny: "any" === e14,
      rightIsAny: "any" === t7,
      bothAreAny: "any" === e14 && "any" === t7,
      leftIsRange: "range" === e14,
      rightIsRange: "range" === t7
    };
  }
};
function B3(e14) {
  return "field" === e14.type || "group" === e14.type || "relationship" === e14.type || "text" === e14.type || (D3().warn("form-info::unsupported-element-type", "Only element types 'field', 'group' and 'relationship' are supported", `Element ${e14.label} has unsupported type '${e14.type}'`), false);
}
function K2(e14, t7) {
  const {
    feature: n9,
    layer: s6
  } = t7;
  return new u5({
    element: e14,
    inputs: [],
    feature: n9,
    layer: s6
  });
}
function q3(e14, t7, n9 = null) {
  const {
    feature: s6,
    layer: i6,
    timeZone: o4
  } = t7;
  return new _2({
    element: e14,
    feature: s6,
    group: n9,
    layer: i6,
    timeZone: o4
  });
}
e2([y()], J2.prototype, "_expressionInfosLookup", null), e2([y()], J2.prototype, "_featureClone", void 0), e2([y()], J2.prototype, "_timeZone", void 0), e2([y()], J2.prototype, "activeRelationshipInput", null), e2([y()], J2.prototype, "_arcadeContextInfo", null), e2([y()], J2.prototype, "allFieldInputs", null), e2([y()], J2.prototype, "allGroupInputs", null), e2([y()], J2.prototype, "allRelationshipInputs", null), e2([y()], J2.prototype, "_layerFieldsByName", null), e2([y()], J2.prototype, "arcadeEditType", void 0), e2([y()], J2.prototype, "contingencyConstraintViolations", void 0), e2([y()], J2.prototype, "disabled", void 0), e2([y()], J2.prototype, "feature", null), e2([y()], J2.prototype, "fieldsWithContingentValues", null), e2([y({
  type: V3
})], J2.prototype, "formTemplate", null), e2([y()], J2.prototype, "formDescription", null), e2([y()], J2.prototype, "formTitle", null), e2([y()], J2.prototype, "formHeaderVisible", null), e2([y()], J2.prototype, "highlightHelper", void 0), e2([y()], J2.prototype, "inputs", void 0), e2([y()], J2.prototype, "joinedContingentValues", null), e2([y()], J2.prototype, "layer", null), e2([y()], J2.prototype, "map", void 0), e2([y()], J2.prototype, "relatedRecordCallbacks", void 0), e2([y()], J2.prototype, "relationshipId", null), e2([y()], J2.prototype, "spatialReference", null), e2([y()], J2.prototype, "state", null), e2([y()], J2.prototype, "strict", void 0), e2([y()], J2.prototype, "submittable", null), e2([y()], J2.prototype, "timeZone", null), e2([y()], J2.prototype, "updating", null), e2([y()], J2.prototype, "valid", null), e2([y()], J2.prototype, "hasPendingSubtypeChoice", void 0), e2([y()], J2.prototype, "getValues", null), e2([y()], J2.prototype, "submit", null), J2 = e2([a(z)], J2);
var Y = J2;

// ../../../node_modules/@arcgis/core/widgets/FeatureForm.js
var $3 = "data-field-name";
var H = class extends B {
  constructor(e14, t7) {
    super(e14, t7), this._attemptFocusOnNextRender = false, this._dateComponentMap = /* @__PURE__ */ new Map(), this._inputsWithChanges = /* @__PURE__ */ new Set(), this._focusedFieldName = null, this._pendingSubtypeChoice = null, this._listObserverNode = null, this._listObserver = new IntersectionObserver((e15) => {
      e15.length && e15[0].isIntersecting && this._incrementRelatedRecordPage();
    }, {
      root: window.document
    }), this._prompt = null, this.groupDisplay = "all", this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.messagesFeature = null, this.messagesTemplates = null, this.viewModel = new Y(), this._onShowAllRelatedRecordsClick = (e15) => {
      const {
        feature: t8,
        relatedRecordCallbacks: i6
      } = this;
      t8 && i6?.showAllRelatedRecords && i6.showAllRelatedRecords({
        parentFeature: t8,
        relationshipId: e15
      });
    }, this._onAddRelatedRecordsClick = (e15, t8) => {
      const {
        feature: i6,
        relatedRecordCallbacks: o4
      } = this;
      i6 && o4?.addRelatedRecord && o4.addRelatedRecord({
        parentFeature: i6,
        relatedLayer: t8,
        relationshipId: e15
      });
    }, this._onFormKeyDown = this._onFormKeyDown.bind(this), this._onFormSubmit = this._onFormSubmit.bind(this), this._onGroupToggle = this._onGroupToggle.bind(this), this._onComponentBlur = this._onComponentBlur.bind(this), this._onComponentFocus = this._onComponentFocus.bind(this), this._onComponentKeyDown = this._onComponentKeyDown.bind(this), this._afterComponentCreate = this._afterComponentCreate.bind(this), this._afterComponentCreateOrUpdate = this._afterComponentCreateOrUpdate.bind(this), this._afterDateComponentCreate = this._afterDateComponentCreate.bind(this), this._afterDateComponentCreateOrUpdate = this._afterDateComponentCreateOrUpdate.bind(this), this._afterRadioGroupCreateOrUpdate = this._afterRadioGroupCreateOrUpdate.bind(this);
  }
  initialize() {
    this.addHandles([d(() => this.feature, () => {
      this._inputsWithChanges.clear(), this._dateComponentMap.clear(), w(() => !this.viewModel.updating).then(() => {
        const e14 = this._getFocusableInput("forward");
        this._syncGroupInputStates(), this._focusedFieldName = e14?.name || null, this._attemptFocusOnNextRender = true;
      });
    }), d(() => this.groupDisplay, () => this._syncGroupInputStates()), this.on("submit", (e14) => {
      if (e14.invalid.length > 0) {
        const [t7] = e14.invalid;
        e14.invalid.forEach((e15) => this._inputsWithChanges.add(e15)), this._focusedFieldName = t7, this._attemptFocusOnNextRender = true, this.scheduleRender();
      }
    }), d(() => [this.viewModel.activeRelationshipInput, this._listObserverNode], () => this._onObserverChange())]);
  }
  loadDependencies() {
    return r3({
      block: () => import("./calcite-block-A5JXTHEP.js"),
      button: () => import("./calcite-button-LAMWLR56.js"),
      combobox: () => import("./calcite-combobox-BFC4W4CQ.js"),
      "combobox-item": () => import("./calcite-combobox-item-IPTNE3NV.js"),
      "combobox-item-group": () => import("./calcite-combobox-item-group-VLX6SJZL.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      input: () => import("./calcite-input-WIKYKTSA.js"),
      "input-date-picker": () => import("./calcite-input-date-picker-DWGYE6EQ.js"),
      "input-message": () => import("./calcite-input-message-I3ARMNZ6.js"),
      "input-number": () => import("./calcite-input-number-PI4IHVGV.js"),
      "input-time-picker": () => import("./calcite-input-time-picker-5CLEU7OD.js"),
      "input-time-zone": () => import("./calcite-input-time-zone-ZCNAEBP3.js"),
      label: () => import("./calcite-label-7BB63OZC.js"),
      list: () => import("./calcite-list-IDJ56B53.js"),
      "list-item": () => import("./calcite-list-item-TVXB7DPG.js"),
      loader: () => import("./calcite-loader-XGS6NTUP.js"),
      notice: () => import("./calcite-notice-GSFPF5BZ.js"),
      "radio-button": () => import("./calcite-radio-button-O7HCNAS5.js"),
      "radio-button-group": () => import("./calcite-radio-button-group-F5ZDNN6U.js"),
      switch: () => import("./calcite-switch-LUKP66OP.js"),
      "text-area": () => import("./calcite-text-area-IWDSMHX3.js")
    });
  }
  destroy() {
    this._listObserverNode && this._listObserver.unobserve(this._listObserverNode);
  }
  get _relatedRecordsEnabled() {
    const e14 = this.relatedRecordCallbacks;
    return !(!e14 || !(e14.addRelatedRecord || e14.editRelatedRecord || e14.showAllRelatedRecords));
  }
  get disabled() {
    return this.viewModel.disabled;
  }
  set disabled(e14) {
    this.viewModel.disabled = e14;
  }
  get feature() {
    return this.viewModel.feature;
  }
  set feature(e14) {
    this.viewModel.feature = e14;
  }
  get formTemplate() {
    return this.viewModel.formTemplate;
  }
  set formTemplate(e14) {
    this.viewModel.formTemplate = e14;
  }
  get icon() {
    return "form-field";
  }
  set icon(e14) {
    this._overrideIfSome("icon", e14);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e14) {
    this._overrideIfSome("label", e14);
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e14) {
    this.viewModel.layer = e14;
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e14) {
    this.viewModel.map = e14;
  }
  get relatedRecordCallbacks() {
    return this.viewModel.relatedRecordCallbacks;
  }
  set relatedRecordCallbacks(e14) {
    this.viewModel.relatedRecordCallbacks = e14;
  }
  get relationshipId() {
    return this.viewModel.relationshipId;
  }
  set relationshipId(e14) {
    this.viewModel.relationshipId = e14;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e14) {
    this.viewModel.spatialReference = e14;
  }
  get strict() {
    return this.viewModel.strict;
  }
  set strict(e14) {
    this.viewModel.strict = e14;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e14) {
    this.viewModel.timeZone = e14;
  }
  get showPrompt() {
    return (e14) => {
      this._prompt?.cancel?.(), this._prompt = e14;
    };
  }
  set showPrompt(e14) {
    this._overrideIfSome("showPrompt", e14);
  }
  get clearPrompt() {
    return () => this._prompt = null;
  }
  set clearPrompt(e14) {
    this._overrideIfSome("clearPrompt", e14);
  }
  getValues() {
    return this.viewModel.getValues();
  }
  submit() {
    return this.viewModel.submit();
  }
  render() {
    const {
      state: e14
    } = this.viewModel;
    return n3("div", {
      class: this.classes(i4.base, e5.widget, e5.panel)
    }, "ready" === e14 ? this._renderForm() : null);
  }
  _renderForm() {
    return n3("div", null, n3("form", {
      class: i4.form,
      novalidate: true,
      onkeydown: this._onFormKeyDown,
      onsubmit: this._onFormSubmit
    }, this._renderHeader(), this._renderContent()), this._prompt ? n3(s5, __spreadProps(__spreadValues({}, this._prompt), {
      headingLevel: this.headingLevel
    })) : void 0);
  }
  _renderHeader() {
    const e14 = this.viewModel;
    if (!e14.formHeaderVisible) return;
    const t7 = null != e14.formTitle && n3(e6, {
      key: "title",
      level: this.headingLevel
    }, e14.formTitle), i6 = null != e14.formDescription && n3("p", {
      class: i4.description,
      key: "description"
    }, e14.formDescription);
    return n3("div", {
      class: i4.formHeader
    }, t7, i6);
  }
  _renderContent() {
    const {
      viewModel: e14
    } = this;
    return e14.activeRelationshipInput ? this._renderRelationshipInput(e14.activeRelationshipInput) : e14.inputs.filter(O).filter((e15) => e15.visible).map((e15) => this._renderInput(e15));
  }
  _renderInput(e14) {
    return b2(e14) ? this._renderGroup(e14) : y2(e14) ? this._renderLabeledField(e14) : g(e14) ? this._renderRelationshipInput(e14) : x(e14) ? this._renderTextElementInput(e14) : void 0;
  }
  _renderDescriptionOrEmpty(e14, t7) {
    return null == e14 ? null : n3("div", {
      class: this.classes(i4.description),
      id: t7
    }, e14);
  }
  _renderGroup(e14) {
    const {
      disabled: t7,
      formTemplate: i6,
      headingLevel: o4
    } = this, {
      description: n9,
      id: a6,
      inputs: s6,
      label: r6,
      open: l5
    } = e14, d5 = s6.filter((e15) => e15.visible), p8 = this.viewModel.findField(this._focusedFieldName), c4 = p8?.group === e14, m3 = "sequential" === this.groupDisplay;
    return n3("calcite-block", {
      class: this.classes(i4.group, m3 ? i4.groupSequential : null, c4 ? i4.groupActive : null, t7 ? i4.inputDisabled : null),
      collapsible: true,
      "data-group": e14,
      description: n9 || void 0,
      disabled: t7,
      heading: `${r6}`,
      headingLevel: i6?.title ? n6(o4) : o4,
      id: a6,
      key: a6,
      open: l5,
      onCalciteBlockToggle: ({
        target: t8
      }) => this._onGroupToggle(t8, e14)
    }, d5.map((e15) => this._renderInput(e15)));
  }
  _getFocusableInput(e14, t7) {
    const i6 = O3(this.viewModel.inputs);
    let o4;
    if ("backward" === e14 && i6.reverse(), t7) {
      if (b2(t7)) {
        const e15 = t7.inputs.find((e16) => e16.visible);
        o4 = e15 ? i6.indexOf(e15) : 0;
      } else {
        let n9;
        if (T2(t7) && !t7.group.open) {
          const i7 = t7.group.inputs.filter(y2);
          n9 = "forward" === e14 ? i7[i7.length - 1] : i7[0];
        } else n9 = t7;
        o4 = i6.indexOf(n9) + 1;
      }
    } else o4 = 0;
    for (let n9 = o4; n9 < i6.length; n9++) {
      const e15 = i6[n9];
      if (e15.visible && y2(e15)) return e15;
    }
    return null;
  }
  _renderLabeledField(e14) {
    const {
      dataType: t7,
      feature: i6,
      label: o4,
      layer: n9,
      required: a6
    } = e14, s6 = {
      "aria-label": a6 ? s(this.messages.requiredFieldLabel, {
        name: o4
      }) : o4,
      class: i4.label,
      key: `${n9.id}-${i6.uid}-${e14.name}`
    }, r6 = [n3("div", {
      class: i4.labelTextContent,
      key: "labelTextContainer"
    }, o4, a6 ? n3("span", {
      "aria-hidden": "true",
      title: this.messagesCommon.required
    }, "*") : void 0), "unsupported" !== t7 ? this._renderFieldInput(e14) : this._renderReadOnlyComponent(e14), this._renderAuxiliaryText(e14)];
    return "date" === t7 && "coded-value" !== e14.domain?.type ? n3("label", __spreadValues({}, s6), r6) : n3("calcite-label", __spreadValues({}, s6), r6);
  }
  _renderFieldInput(e14) {
    const {
      dataType: t7,
      domain: i6,
      inputType: o4,
      name: n9
    } = e14, a6 = this.getCommonInputProps(e14);
    if ("coded-value" === i6?.type) {
      const t8 = this.viewModel.getFieldValueOptionsForField(n9, this.messages.empty);
      return "switch" !== o4 || e14.hasInvalidSwitchValue ? "radio-buttons" === o4 ? this._renderRadioButtonComponents(e14, t8.flat(), a6) : this._renderComboBoxComponent(e14, t8, a6) : this._renderSwitchComponent(e14, a6);
    }
    return "datetime-picker" === o4 || "date" === t7 ? this._renderDateComponents(e14, a6) : "number" === t7 ? this._renderNumberComponent(e14, a6) : this._renderStringComponent(e14, a6);
  }
  _renderStringComponent(e14, t7) {
    return "text-area" === e14.inputType ? t7.readOnly ? n3("calcite-input", __spreadProps(__spreadValues({}, t7), {
      loading: e14.updating,
      type: "textarea",
      onCalciteInputInput: (e15) => this._saveValueFromComponent(e15.target)
    })) : n3("calcite-text-area", __spreadProps(__spreadValues({}, t7), {
      resize: "vertical",
      onCalciteTextAreaInput: (e15) => this._saveValueFromComponent(e15.target)
    })) : n3("calcite-input", __spreadProps(__spreadValues({}, t7), {
      loading: e14.updating,
      type: "text",
      onCalciteInputInput: (e15) => this._saveValueFromComponent(e15.target)
    }));
  }
  _renderNumberComponent(e14, t7) {
    return n3("calcite-input-number", __spreadProps(__spreadValues({}, t7), {
      integer: me(e14.field),
      loading: e14.updating,
      type: "number",
      onCalciteInputNumberInput: (e15) => this._saveValueFromComponent(e15.target)
    }));
  }
  _renderDateComponents(e14, t7) {
    const {
      field: i6
    } = e14;
    switch (i6.type) {
      case "date":
        return this._renderDateFieldComponents(e14, t7);
      case "date-only":
        return this._renderDateOnlyFieldComponent(e14, t7);
      case "time-only":
        return this._renderTimeOnlyFieldComponent(e14, t7);
      case "timestamp-offset":
        return this._renderTimestampOffsetFieldComponents(e14, t7);
      default:
        return this._renderReadOnlyComponent(e14, T(i6, t7.value, __spreadValues({
          timeZone: this.timeZone
        }, F(i6))));
    }
  }
  _renderDateOnlyFieldComponent(e14, t7) {
    const {
      range: i6,
      valid: o4,
      value: n9
    } = e14, {
      class: a6,
      key: s6,
      readOnly: r6
    } = t7, {
      rawMax: l5,
      rawMin: d5
    } = i6;
    return n3("calcite-input-date-picker", {
      afterCreate: this._afterDateComponentCreate,
      afterUpdate: this._afterDateComponentCreateOrUpdate,
      "aria-invalid": !o4,
      class: a6,
      "data-date-part": "date",
      "data-field-name": t7[$3],
      key: `${s6}-date-input`,
      max: t(l5) ? l5 : void 0,
      min: t(d5) ? d5 : void 0,
      numberingSystem: w2,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      onfocus: this._onComponentFocus,
      overlayPositioning: "fixed",
      readOnly: r6,
      value: null != n9 ? `${n9}` : void 0,
      onCalciteInputDatePickerChange: (e15) => this._saveValueFromDateComponent(e15.target)
    });
  }
  _renderTimeOnlyFieldComponent(e14, t7) {
    const {
      valid: i6,
      value: o4
    } = e14, {
      class: n9,
      key: a6,
      readOnly: s6
    } = t7;
    return n3("calcite-input-time-picker", {
      afterCreate: this._afterDateComponentCreate,
      afterUpdate: this._afterDateComponentCreateOrUpdate,
      "aria-invalid": !i6,
      class: n9,
      "data-date-part": "time",
      "data-field-name": t7[$3],
      key: `${a6}-time-input`,
      numberingSystem: w2,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      onfocus: this._onComponentFocus,
      overlayPositioning: "fixed",
      readOnly: s6,
      step: e14.timeStep,
      value: null != o4 ? `${o4}` : void 0,
      onCalciteInputTimePickerChange: (e15) => this._saveValueFromDateComponent(e15.target)
    });
  }
  _renderTimestampOffsetFieldComponents(e14, t7) {
    const {
      name: i6,
      range: o4,
      timeZone: n9,
      valid: a6,
      value: s6
    } = e14, {
      class: r6,
      key: l5,
      readOnly: d5
    } = t7, {
      rawMax: p8,
      rawMin: c4
    } = o4, m3 = {
      afterCreate: this._afterDateComponentCreate,
      afterUpdate: this._afterDateComponentCreateOrUpdate,
      "aria-invalid": !a6,
      numberingSystem: w2,
      overlayPositioning: "fixed",
      readOnly: d5,
      [$3]: i6,
      onfocus: this._onComponentFocus
    }, h4 = I(p8, n9), v4 = I(c4, n9), g3 = I(s6, n9);
    return n3("div", {
      class: i4.dateInputContainer,
      key: `${l5}-date-time-container`
    }, n3("calcite-input-date-picker", __spreadProps(__spreadValues({}, m3), {
      class: r6,
      "data-date-part": "date",
      key: `${l5}-date-input`,
      max: h4?.date ?? void 0,
      min: v4?.date ?? void 0,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      value: g3.date ?? void 0,
      onCalciteInputDatePickerChange: (e15) => this._saveValueFromDateComponent(e15.target)
    })), n3("calcite-input-time-picker", __spreadProps(__spreadValues({}, m3), {
      class: r6,
      "data-date-part": "time",
      key: `${l5}-time-input`,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      step: e14.timeStep,
      value: g3.time ?? void 0,
      onCalciteInputTimePickerChange: (e15) => this._saveValueFromDateComponent(e15.target)
    })), e14.includeTimeOffset ? n3("calcite-input-time-zone", __spreadProps(__spreadValues({}, m3), {
      class: r6,
      "data-date-part": "timeZone",
      disabled: d5,
      key: `${l5}-timezone-input`,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      value: g3.timeZoneOffset ?? "0",
      onCalciteInputTimeZoneChange: (e15) => this._saveValueFromDateComponent(e15.target)
    })) : null);
  }
  _renderDateFieldComponents(e14, t7) {
    const {
      includeTime: i6,
      name: o4,
      valid: n9,
      value: a6
    } = e14, {
      class: s6,
      key: r6,
      max: l5,
      min: d5,
      readOnly: p8
    } = t7, {
      timeZone: c4
    } = this, m3 = {
      afterCreate: this._afterDateComponentCreate,
      afterUpdate: this._afterDateComponentCreateOrUpdate,
      "aria-invalid": !n9,
      numberingSystem: w2,
      overlayPositioning: "fixed",
      readOnly: p8,
      [$3]: o4,
      onfocus: this._onComponentFocus
    }, h4 = V2(a6, c4), v4 = V2(l5, c4), g3 = V2(d5, c4);
    return n3("div", {
      class: i4.dateInputContainer,
      key: `${r6}-date-time-container`
    }, n3("calcite-input-date-picker", __spreadProps(__spreadValues({}, m3), {
      class: s6,
      "data-date-part": "date",
      key: `${r6}-date-input`,
      max: v4?.date ?? void 0,
      min: g3?.date ?? void 0,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      value: h4.date ?? void 0,
      onCalciteInputDatePickerChange: (e15) => this._saveValueFromDateComponent(e15.target)
    })), i6 ? n3("calcite-input-time-picker", __spreadProps(__spreadValues({}, m3), {
      class: s6,
      "data-date-part": "time",
      key: `${r6}-time-input`,
      onblur: (e15) => {
        this._focusedFieldName = null, this._saveValueFromDateComponent(e15.target);
      },
      step: 1,
      value: h4.time ?? void 0,
      onCalciteInputTimePickerChange: (e15) => this._saveValueFromDateComponent(e15.target)
    })) : null);
  }
  _renderReadOnlyComponent(e14, t7) {
    const i6 = this.getCommonInputProps(e14);
    return n3("calcite-input", __spreadProps(__spreadValues({}, i6), {
      class: this.classes(i4.fieldInput, i4.inputDisabled),
      readOnly: true,
      type: "text",
      value: null != t7 ? `${t7}` : i6.value
    }));
  }
  _renderComboBoxComponent(e14, t7, i6) {
    const {
      value: o4,
      name: n9
    } = e14, {
      viewModel: a6,
      _inputsWithChanges: s6
    } = this, r6 = "INSERT" === a6.arcadeEditType, l5 = s6.has(n9), d5 = null == o4 && (!r6 || l5), p8 = r6 && e14.showNoValueOptionEnabled && !l5 ? () => {
    } : i6.onblur;
    return n3("calcite-combobox", __spreadProps(__spreadValues({}, i6), {
      allowCustomValues: false,
      clearDisabled: true,
      disabled: i6.readOnly,
      onblur: p8,
      overlayPositioning: "fixed",
      selectionMode: "single",
      onCalciteComboboxChange: ({
        target: t8
      }) => {
        d5 && 0 === t8.selectedItems.length ? this._ignoreDeselectionOfNoValueOption(t8) : e14.isSubtypeField && 0 === t8.selectedItems.length ? t8.value = `${e14.value}` : this._saveValueFromComponent(t8);
      }
    }), this.renderComboboxOptionsList(e14, t7));
  }
  renderComboboxOptionsList(e14, t7) {
    const {
      value: i6,
      name: o4
    } = e14, {
      messages: n9,
      messagesTemplates: a6,
      viewModel: s6,
      _inputsWithChanges: r6
    } = this, [l5, d5, p8] = t7.map((e15) => e15.map(({
      name: e16,
      value: t8
    }) => n3("calcite-combobox-item", {
      key: `#${t8}`,
      selected: i6 === t8,
      textLabel: e16,
      value: `${t8}`
    }))), u6 = [];
    d5.length > 0 && u6.push(n3("calcite-combobox-item-group", {
      key: "other",
      label: a6.other
    }, d5)), p8.length > 0 && u6.push(n3("calcite-combobox-item-group", {
      key: "unsupported",
      label: n9.subtypes.unsupportedDomainGroupTitle
    }, p8)), u6.length > 0 ? u6.unshift(n3("calcite-combobox-item-group", {
      key: "recommended",
      label: n9.recommended
    }, l5)) : u6.push(...l5);
    const c4 = "INSERT" === s6.arcadeEditType, m3 = r6.has(o4), h4 = null == i6 && (!c4 || m3);
    return e14.showNoValueOptionEnabled && u6.unshift(n3("calcite-combobox-item", {
      key: "empty-option",
      selected: h4,
      textLabel: e14.showNoValueLabel || n9.empty,
      value: ""
    })), u6;
  }
  _renderRadioButtonComponents(e14, t7, i6) {
    const {
      name: o4,
      value: n9
    } = e14, a6 = t7.map(({
      name: e15,
      value: t8
    }) => this._renderRadioButtonComponent({
      key: e15,
      label: e15,
      name: o4,
      value: t8,
      selected: t8 === n9,
      props: i6
    }));
    if (e14.showNoValueOptionEnabled) {
      const t8 = "", s6 = e14.showNoValueLabel || this.messages.empty, r6 = n9 === t8 || null === n9;
      a6.unshift(this._renderRadioButtonComponent({
        key: "empty-option",
        label: s6,
        name: o4,
        value: t8,
        selected: r6,
        props: i6
      }));
    }
    return n3("calcite-radio-button-group", {
      afterCreate: this._afterRadioGroupCreateOrUpdate,
      afterUpdate: this._afterRadioGroupCreateOrUpdate,
      class: i4.inputRadioGroup,
      "data-field-name": i6[$3],
      key: `${i6.key}-radio-group`,
      layout: "vertical",
      name: i6.key,
      required: i6.required
    }, a6);
  }
  _renderSwitchComponent(e14, t7) {
    const {
      value: i6
    } = e14, o4 = !!v2(e14.element, "switch") && i6 === e14.element.input.onValue;
    return n3("calcite-switch", __spreadProps(__spreadValues({}, t7), {
      checked: o4,
      class: i4.inputSwitch,
      disabled: t7.readOnly,
      onblur: () => {
        this._focusedFieldName = null;
      },
      onCalciteSwitchChange: (e15) => this._saveValueFromComponent(e15.target)
    }));
  }
  _renderRadioButtonComponent({
    key: e14,
    name: t7,
    value: i6,
    selected: o4,
    label: n9,
    props: a6
  }) {
    return n3("calcite-label", {
      class: i4.inputRadioLabel,
      key: e14,
      layout: "inline"
    }, n3("calcite-radio-button", __spreadProps(__spreadValues({}, a6), {
      afterCreate: void 0,
      afterUpdate: void 0,
      checked: o4,
      class: i4.inputRadio,
      disabled: a6.readOnly,
      name: t7,
      onblur: () => {
        this._focusedFieldName = null;
      },
      value: i6,
      onCalciteRadioButtonChange: ({
        target: e15
      }) => {
        e15.checked && this._saveValueFromComponent(e15);
      }
    })), n9);
  }
  _renderAuxiliaryText(e14) {
    const t7 = e14.name, i6 = this._inputsWithChanges.has(t7) && !e14.valid ? q(e14, this.messages, this.timeZone) : null != this.viewModel.contingencyConstraintViolations.get(t7) ? this.messages.validationErrors.valuesIncompatible : null != e14.valueExpressionExecutor && e14.valueExpressionExecutor.stale ? this.messages.valueExpressionError : null;
    return null != i6 ? n3("calcite-input-message", {
      icon: true,
      status: "invalid"
    }, i6) : this._inputsWithChanges.has(t7) && e14.valueIsOutOfDomain ? n3("calcite-input-message", {
      icon: true,
      status: "idle"
    }, this.messages.subtypes.fieldOutOfSubtypeDomainWarning) : this._renderDescriptionOrEmpty(e14.description);
  }
  _renderShowAllRelatedRecordsListItem(e14) {
    const {
      featureCount: t7,
      relationshipId: i6,
      showAllActionVisible: o4
    } = e14, {
      relatedRecordCallbacks: n9
    } = this;
    if (!o4 || !n9?.showAllRelatedRecords) return;
    const a6 = this.messages;
    return n3("calcite-list-item", {
      description: s(a6.totalCount, {
        count: t7
      }),
      label: a6.showAll,
      value: true,
      onCalciteListItemSelect: () => this._onShowAllRelatedRecordsClick(i6)
    }, n3("calcite-icon", {
      icon: "list",
      scale: "s",
      slot: "content-end"
    }));
  }
  _renderAddRelatedRecordButton(e14) {
    const {
      canAddRelatedFeature: t7,
      relationshipId: i6,
      relatedLayer: o4
    } = e14, {
      messages: n9,
      relatedRecordCallbacks: a6
    } = this;
    if (t7 && a6?.addRelatedRecord && o4) return n3("calcite-button", {
      alignment: "center",
      appearance: "outline-fill",
      class: i4.centeredButton,
      disabled: e14.updating || !e14.originHasValidKey,
      iconStart: "plus",
      key: `${i6}-add-button`,
      onclick: () => {
        !e14.updating && e14.originHasValidKey && this._onAddRelatedRecordsClick(i6, o4);
      },
      round: true,
      scale: "s",
      width: "half"
    }, e14.relatedLayerIsTable ? n9.addRecord : n9.addFeature);
  }
  _renderRelatedRecordListItem(e14, t7) {
    const {
      feature: i6,
      description: o4,
      title: n9
    } = e14, {
      feature: a6,
      relatedRecordCallbacks: s6
    } = this, {
      highlightHelper: r6
    } = this.viewModel, l5 = () => {
      r6?.removeAll(), s6?.editRelatedRecord && a6 && s6.editRelatedRecord({
        parentFeature: a6,
        relationshipId: t7,
        relatedFeature: i6
      });
    }, d5 = r6 ? () => r6.add(i6) : void 0, p8 = r6 ? () => r6.remove(i6) : void 0;
    return n3("calcite-list-item", {
      bind: this,
      description: o4,
      key: `${t7}-${i6.uid}`,
      label: n9,
      onclick: l5,
      onmouseenter: d5,
      onmouseleave: p8,
      value: n9
    }, n3("calcite-icon", {
      icon: B2(i6),
      slot: "content-start"
    }), n3("calcite-icon", {
      icon: "chevron-right",
      scale: "s",
      slot: "content-end"
    }));
  }
  _renderRelationshipInput(e14) {
    if (!this._relatedRecordsEnabled || !e14.editable) return;
    const {
      featureCount: t7,
      relationshipId: i6,
      showAllEnabled: o4
    } = e14, n9 = o4 ? null : this._renderDescriptionOrEmpty(e14.description), a6 = t7 > 0 ? this._renderRelatedRecordsList(e14) : e14.loaded ? e14.originHasValidKey ? this._renderNoRelatedRecordsNotice() : this._renderNoValidOriginKeyNotice(e14) : void 0;
    return n3("calcite-label", {
      class: this.classes(i4.label, i4.relatedRecordsLabel),
      key: `relationship-${i6}-container`
    }, n3("div", null, this._renderRelatedRecordsHeaderContainer(e14), n9, a6), this._renderAddRelatedRecordButton(e14));
  }
  _renderRelatedRecordsHeaderContainer(e14) {
    const t7 = e14.updating || !e14.loaded;
    return n3("div", {
      class: i4.relatedRecordsHeader,
      key: `relationship-${e14.relationshipId}-header`
    }, n3("span", null, e14.label), t7 ? n3("calcite-loader", {
      inline: true,
      key: "loader",
      label: this.messagesCommon?.loading,
      scale: "s",
      type: "indeterminate"
    }) : void 0);
  }
  _renderRelatedRecordsList(e14) {
    const {
      relationshipId: t7
    } = e14;
    return n3("calcite-list", {
      class: i4.relatedRecordsList
    }, e14.relatedFeatureInfos.map((e15) => this._renderRelatedRecordListItem(e15, t7)), this._renderShowAllRelatedRecordsListItem(e14), this._renderObserverNode());
  }
  _renderNoValidOriginKeyNotice(e14) {
    const {
      messages: t7
    } = this, i6 = e14.relatedLayerIsTable ? t7.noOriginKeyRecord : t7.noOriginKeyFeature, o4 = e14.relationship?.keyField, n9 = this.viewModel.findField(o4), a6 = e14.layer?.fieldsIndex.get(o4), s6 = n9?.label || a6?.alias || o4, r6 = s(i6, {
      relatedLayerName: e14.relatedLayer?.title,
      originKeyField: s6
    });
    return n3("calcite-notice", {
      icon: "information",
      kind: "brand",
      open: true,
      scale: "s",
      width: "full"
    }, n3("div", {
      slot: "message"
    }, r6));
  }
  _renderNoRelatedRecordsNotice() {
    return n3("calcite-notice", {
      icon: "information",
      kind: "brand",
      open: true,
      scale: "s",
      width: "full"
    }, n3("div", {
      slot: "message"
    }, this.messagesFeature.noRelatedFeatures));
  }
  _renderObserverNode() {
    if (this.viewModel.activeRelationshipInput?.showAllEnabled) return n3("div", {
      afterCreate: this._afterListObserverCreated,
      afterRemoved: this._afterListObserverRemoved,
      bind: this,
      class: i4.listObserver,
      key: "feature-observer"
    });
  }
  _renderTextElementInput(e14) {
    return n3("div", {
      class: i4.textElement,
      innerHTML: e14.text,
      key: e14.id
    });
  }
  getCommonInputProps(e14) {
    const {
      disabled: t7
    } = this, {
      editable: i6,
      hint: o4,
      label: n9,
      maxLength: a6,
      minLength: s6,
      name: r6,
      range: {
        max: l5,
        min: d5
      },
      required: p8,
      valid: c4,
      value: m3
    } = e14, h4 = this._inputsWithChanges.has(r6), v4 = !i6 || t7;
    return {
      afterCreate: this._afterComponentCreate,
      afterUpdate: this._afterComponentCreateOrUpdate,
      "aria-invalid": c4 ? "false" : "true",
      class: this.classes(i4.fieldInput, v4 ? i4.inputDisabled : null),
      status: h4 && !c4 ? "invalid" : "idle",
      key: r6,
      label: n9,
      max: null != l5 ? l5 : void 0,
      min: null != d5 ? d5 : void 0,
      maxLength: a6 > -1 ? a6 : void 0,
      minLength: s6 > -1 ? s6 : void 0,
      placeholder: o4 ?? void 0,
      readOnly: v4,
      required: p8,
      value: null == m3 ? "" : `${m3}`,
      onblur: this._onComponentBlur,
      onfocus: this._onComponentFocus,
      onkeydown: this._onComponentKeyDown,
      [$3]: r6
    };
  }
  _getFieldInputFromHTMLElement(e14) {
    return this.viewModel.findField(e14.getAttribute($3));
  }
  _afterDateComponentCreate(e14) {
    const t7 = this._getFieldInputFromHTMLElement(e14), i6 = e14.dataset.datePart, o4 = this._dateComponentMap.get(t7.name);
    if ("valueAsDate" in e14 && null != e14.value) {
      const i7 = new ResizeObserver(() => {
        switch (e14.value = void 0, t7.field.type) {
          case "date":
            e14.value = V2(t7.value, this.timeZone).date ?? "";
            break;
          case "timestamp-offset":
            e14.value = I(t7.value, this.timeZone).date ?? "";
            break;
          default:
            e14.value = `${t7.value}`;
        }
        i7.unobserve(e14);
      });
      i7.observe(e14);
    }
    if (null != o4) switch (i6) {
      case "date":
        o4.date = e14;
        break;
      case "time":
        o4.time = e14;
        break;
      case "timeZone":
        o4.timeZone = e14;
    }
    else this._dateComponentMap.set(t7.name, {
      [i6]: e14
    });
    this._afterDateComponentCreateOrUpdate(e14);
  }
  _afterDateComponentCreateOrUpdate(e14) {
    this._afterComponentCreateOrUpdate(e14);
  }
  _afterComponentCreate(e14) {
    const t7 = this._getFieldInputFromHTMLElement(e14);
    E(t7) && null != e14.value && "setNumberValue" in e14 && e14.setNumberValue({
      committing: false,
      value: e14.value,
      origin: "direct"
    }), this._afterComponentCreateOrUpdate(e14);
  }
  _afterRadioGroupCreateOrUpdate(e14) {
    const t7 = e14.selectedItem, i6 = e14.querySelector("calcite-radio-button"), o4 = t7 || i6;
    o4 && this._afterComponentCreateOrUpdate(o4);
  }
  _afterComponentCreateOrUpdate(e14) {
    const {
      viewModel: t7
    } = this, i6 = this._getFieldInputFromHTMLElement(e14), o4 = t7.findField(this._focusedFieldName);
    this._attemptFocusOnNextRender && o4 === i6 && (this._attemptFocusOnNextRender = false, T2(i6) && (i6.group.open = true), e14.setFocus());
  }
  _onComponentFocus(e14) {
    const t7 = e14.target, i6 = this._getFieldInputFromHTMLElement(t7);
    this._focusedFieldName = i6.name;
  }
  _onComponentBlur(e14) {
    const t7 = e14.target;
    this._focusedFieldName = null, this._saveValueFromComponent(t7);
  }
  _saveValueFromDateComponent(e14) {
    const {
      timeZone: t7
    } = this, i6 = this._getFieldInputFromHTMLElement(e14), o4 = i6.field.type, {
      name: n9,
      range: a6
    } = i6, s6 = this._dateComponentMap.get(n9);
    if (!s6) return;
    let r6 = this.viewModel.getValue(n9), l5 = null;
    "date-only" === o4 ? l5 = Array.isArray(e14.value) ? e14.value[0] : e14.value : "time-only" === o4 ? (r6 = U2(r6), l5 = U2(e14.value)) : l5 = "timestamp-offset" === o4 ? null != e14.value ? D({
      dateComponent: s6.date,
      timeComponent: s6.time,
      timeZoneComponent: s6.timeZone,
      oldValue: r6,
      defaultTimeZone: t7
    }) : null : null != e14.value ? C({
      oldValue: r6,
      dateComponent: s6.date,
      timeComponent: s6.time,
      timeZone: t7,
      max: a6.max,
      min: a6.min
    }) : null, null !== l5 && e14.value ? r6 !== l5 && this._updateFieldValue(n9, l5) : this._updateFieldValue(n9, null);
  }
  _saveValueFromComponent(e14) {
    const t7 = this._getFieldInputFromHTMLElement(e14), i6 = this._parseValue(e14), o4 = t7.value;
    t7.isSubtypeField && Q(this.layer, o4, i6) ? this._pendingSubtypeChoice || i6 === o4 || (this._pendingSubtypeChoice = this._handleSubtypeChoice(t7, i6)) : this._updateFieldValue(t7.name, i6);
  }
  _handleSubtypeChoice(e14, t7) {
    return __async(this, null, function* () {
      const {
        value: i6,
        name: n9
      } = e14, {
        layer: a6,
        messages: s6,
        viewModel: r6,
        messagesCommon: l5
      } = this;
      if (this._updateFieldValue(n9, t7), !a6 || !("subtypes" in a6) || !a6.subtypes?.length) return;
      const d5 = a6.subtypes.find((e15) => e15.code === t7), p8 = a6.subtypes.find((e15) => e15.code === i6)?.name ?? `${i6}`;
      if (!d5) return;
      r6.hasPendingSubtypeChoice = true;
      const u6 = L();
      let c4 = "update-fields";
      const m3 = [{
        label: s6.subtypes.useDefaultValuesOption,
        value: "update-fields"
      }, {
        label: s6.subtypes.keepCurrentValuesOption,
        value: "keep-existing"
      }], h4 = {
        context: "info",
        title: s6.subtypes.changeWarningTitle,
        message: s(s6.subtypes.changeWarning, {
          originalType: p8,
          newType: d5.name
        }),
        radios: m3,
        defaultRadioSelection: "update-fields",
        onRadioSelection: (e15) => c4 = e15,
        actions: {
          primary: {
            label: l5.apply,
            action: () => u6.resolve(c4),
            type: "positive"
          },
          secondary: {
            label: l5.cancel,
            type: "neutral",
            action: () => u6.resolve("undo")
          }
        },
        cancel: () => u6.reject()
      };
      try {
        this.showPrompt(h4);
        switch (yield u6.promise) {
          case "update-fields":
            r6.applySubtypeDefaults(d5), this._validateContingenciesForNonNullFields();
            break;
          case "keep-existing":
            this._validateContingenciesForNonNullFields();
            break;
          case "undo":
            this._updateFieldValue(e14.name, i6);
        }
      } finally {
        r6.hasPendingSubtypeChoice = false, this.clearPrompt(), this._pendingSubtypeChoice = null;
      }
    });
  }
  _onComponentKeyDown({
    key: e14,
    target: t7
  }) {
    const i6 = this._getFieldInputFromHTMLElement(t7);
    "Enter" === e14 && T2(i6) && !i6.group.open && (i6.group.open = true);
  }
  _updateFieldValue(e14, t7) {
    const i6 = this.viewModel.getValue(e14);
    this.viewModel.setValue(e14, t7), this._inputsWithChanges.add(e14);
    i6 !== t7 && this.viewModel.fieldsWithContingentValues.has(e14) && this._validateContingenciesForNonNullFields();
  }
  _validateContingenciesForNonNullFields() {
    const e14 = Object.fromEntries(Object.entries(this.getValues()).filter(([e15, t7]) => null != t7));
    this.viewModel.validateContingencyConstraints(e14);
  }
  _parseValue(e14) {
    const t7 = this._getFieldInputFromHTMLElement(e14), i6 = e14.value;
    return v2(t7.element, "switch") ? e14.checked ? t7.element.input.onValue : t7.element.input.offValue : null == i6 || "" === i6 ? null : "number" === t7.dataType ? "-0" === i6 || "-0." === i6 || "-0," === i6 ? i6 : parseFloat(i6) : "date" === t7.field.type ? parseFloat(i6) : i6;
  }
  _ignoreDeselectionOfNoValueOption(e14) {
    const {
      firstChild: t7,
      selectedItems: o4
    } = e14;
    0 === o4.length && t7 && "selected" in t7 ? t7.selected = true : n.getLogger(this).warnOnce("Failed to override user attempt to deselect 'No value' option.");
  }
  _onGroupToggle(e14, t7) {
    e14.open ? (t7.open = true, this._focusedFieldName = this._getFocusableInput("forward", t7)?.name || null, this._attemptFocusOnNextRender = true, "sequential" === this.groupDisplay && this.viewModel.allGroupInputs.forEach((e15) => {
      e15 !== t7 && (e15.open = false);
    })) : t7.open = false, this.scheduleRender();
  }
  _onFormSubmit(e14) {
    e14.preventDefault();
  }
  _onFormKeyDown(e14) {
    "Enter" === e14.key && this.viewModel.submit();
  }
  _afterListObserverCreated(e14) {
    this.viewModel.activeRelationshipInput && (this._listObserverNode = e14);
  }
  _afterListObserverRemoved() {
    this._listObserverNode = null;
  }
  _onObserverChange() {
    this._listObserverNode && this._listObserver.unobserve(this._listObserverNode);
    const e14 = this.viewModel.activeRelationshipInput;
    e14 && this._listObserverNode && e14.showAllEnabled && this._listObserver.observe(this._listObserverNode);
  }
  _incrementRelatedRecordPage() {
    const e14 = this.viewModel.activeRelationshipInput;
    e14?.incrementPage();
  }
  _syncGroupInputStates() {
    if ("sequential" !== this.groupDisplay) return;
    const e14 = this.viewModel.allGroupInputs;
    if (!e14.length) return;
    const t7 = e14.filter((e15) => e15.open);
    0 === t7.length ? e14[0].open = true : t7.length > 1 && t7.slice(1).forEach((e15) => e15.open = false);
  }
  get test() {
    return {
      inputsWithChanges: this._inputsWithChanges
    };
  }
};
e2([y()], H.prototype, "_listObserverNode", void 0), e2([y()], H.prototype, "_relatedRecordsEnabled", null), e2([y()], H.prototype, "_prompt", void 0), e2([y()], H.prototype, "disabled", null), e2([y()], H.prototype, "feature", null), e2([y()], H.prototype, "formTemplate", null), e2([y()], H.prototype, "groupDisplay", void 0), e2([y()], H.prototype, "headingLevel", void 0), e2([y()], H.prototype, "icon", null), e2([y()], H.prototype, "label", null), e2([y()], H.prototype, "layer", null), e2([y()], H.prototype, "map", null), e2([y(), e3("esri/widgets/FeatureForm/t9n/FeatureForm")], H.prototype, "messages", void 0), e2([y(), e3("esri/t9n/common")], H.prototype, "messagesCommon", void 0), e2([y(), e3("esri/widgets/Feature/t9n/Feature")], H.prototype, "messagesFeature", void 0), e2([y(), e3("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")], H.prototype, "messagesTemplates", void 0), e2([y()], H.prototype, "relatedRecordCallbacks", null), e2([y()], H.prototype, "relationshipId", null), e2([y()], H.prototype, "spatialReference", null), e2([y()], H.prototype, "strict", null), e2([y()], H.prototype, "timeZone", null), e2([y()], H.prototype, "showPrompt", null), e2([y()], H.prototype, "clearPrompt", null), e2([y(), e7(["value-change", "submit"])], H.prototype, "viewModel", void 0), e2([y()], H.prototype, "test", null), H = e2([a("esri.widgets.FeatureForm")], H);
var Z = H;

export {
  a2 as a,
  n7 as n,
  s5 as s,
  Y,
  Z
};
//# sourceMappingURL=chunk-QQ2ANQLR.js.map
