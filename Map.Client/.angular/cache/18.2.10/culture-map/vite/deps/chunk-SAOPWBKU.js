import {
  c as c2,
  p as p2
} from "./chunk-Z2JVKOTW.js";
import {
  e as e2,
  p as p3,
  t as t2
} from "./chunk-YW5DYBTP.js";
import {
  p as p5
} from "./chunk-2C54H6O6.js";
import {
  a as a4
} from "./chunk-UHMXQYZT.js";
import {
  p as p4
} from "./chunk-LZUPV7SL.js";
import {
  v
} from "./chunk-N3IR233K.js";
import {
  C as C2,
  M,
  R,
  V as V2,
  Z,
  y as y2
} from "./chunk-JFYQTYD3.js";
import {
  i2,
  n as n2
} from "./chunk-PFMGJTQM.js";
import {
  i3
} from "./chunk-4KWLMXIA.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  C,
  S
} from "./chunk-CRNUMTSV.js";
import {
  d,
  j,
  p,
  u
} from "./chunk-DSEUCBVP.js";
import {
  a as a3
} from "./chunk-UPDWQH75.js";
import {
  Xe,
  b,
  h2 as h,
  w2
} from "./chunk-DTUSTSEJ.js";
import {
  c
} from "./chunk-CVB43GGP.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r as r2
} from "./chunk-MFOQYQFG.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  me,
  oe
} from "./chunk-JJS7PR2U.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  r4 as r,
  t5 as t
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  T,
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a,
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/form/elements/Element.js
var e3 = class extends f {
  constructor(t3) {
    super(t3), this.description = null, this.label = null, this.type = null, this.visibilityExpression = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], e3.prototype, "description", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], e3.prototype, "label", void 0), e([y()], e3.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], e3.prototype, "visibilityExpression", void 0), e3 = e([a2("esri.form.elements.Element")], e3);
var i4 = e3;

// ../../../node_modules/@arcgis/core/form/elements/inputs/AttachmentInput.js
var s2;
var p6 = s2 = class extends f {
  constructor(t3) {
    super(t3), this.type = null;
  }
  clone() {
    return new s2({
      type: this.type
    });
  }
};
e([y({
  type: ["attachment", "audio", "document", "image", "signature", "video"],
  json: {
    write: true
  }
})], p6.prototype, "type", void 0), p6 = s2 = e([a2("esri.form.elements.inputs.AttachmentInput")], p6);
var c3 = p6;

// ../../../node_modules/@arcgis/core/form/elements/AttachmentElement.js
var i5;
var p7 = i5 = class extends i4 {
  constructor(t3) {
    super(t3), this.attachmentKeyword = null, this.editableExpression = null, this.input = null, this.type = "attachment";
  }
  clone() {
    return new i5({
      attachmentKeyword: this.attachmentKeyword,
      description: this.description,
      editableExpression: this.editableExpression,
      input: this.input,
      label: this.label,
      visibilityExpression: this.visibilityExpression
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p7.prototype, "attachmentKeyword", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p7.prototype, "editableExpression", void 0), e([y({
  type: c3,
  json: {
    read: {
      source: "inputType"
    },
    write: {
      target: "inputType"
    }
  }
})], p7.prototype, "input", void 0), e([y({
  type: ["attachment"],
  json: {
    read: false,
    write: true
  }
})], p7.prototype, "type", void 0), p7 = i5 = e([a2("esri.form.elements.AttachmentElement")], p7);
var n3 = p7;

// ../../../node_modules/@arcgis/core/form/elements/FieldElement.js
var n4;
var l = n4 = class extends i4 {
  constructor(e4) {
    super(e4), this.domain = null, this.editableExpression = null, this.fieldName = null, this.hint = null, this.input = null, this.requiredExpression = null, this.type = "field", this.valueExpression = null;
  }
  get editable() {
    return this._get("editable") ?? true;
  }
  set editable(e4) {
    this._set("editable", e4);
  }
  clone() {
    return new n4({
      description: this.description,
      domain: this.domain,
      editable: this.editable,
      editableExpression: this.editableExpression,
      fieldName: this.fieldName,
      hint: this.hint,
      input: this.input,
      label: this.label,
      requiredExpression: this.requiredExpression,
      valueExpression: this.valueExpression,
      visibilityExpression: this.visibilityExpression
    });
  }
};
e([y({
  types: n2,
  json: {
    read: {
      reader: i2
    },
    write: true
  }
})], l.prototype, "domain", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], l.prototype, "editable", null), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "editableExpression", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "fieldName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "hint", void 0), e([y({
  types: c2,
  json: {
    read: {
      source: "inputType"
    },
    write: {
      target: "inputType"
    }
  }
})], l.prototype, "input", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "requiredExpression", void 0), e([y({
  type: String,
  json: {
    read: false,
    write: true
  }
})], l.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "valueExpression", void 0), l = n4 = e([a2("esri.form.elements.FieldElement")], l);
var a5 = l;

// ../../../node_modules/@arcgis/core/form/elements/RelationshipElement.js
var p8;
var l2 = p8 = class extends i4 {
  constructor(e4) {
    super(e4), this.displayCount = null, this.displayType = "list", this.editableExpression = null, this.orderByFields = null, this.relationshipId = null, this.type = "relationship";
  }
  clone() {
    return new p8({
      description: this.description,
      displayCount: this.displayCount,
      displayType: this.displayType,
      editableExpression: this.editableExpression,
      label: this.label,
      orderByFields: a(this.orderByFields),
      relationshipId: this.relationshipId,
      visibilityExpression: this.visibilityExpression
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], l2.prototype, "displayCount", void 0), e([y({
  type: ["list"],
  json: {
    write: true
  }
})], l2.prototype, "displayType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l2.prototype, "editableExpression", void 0), e([y({
  type: [i3],
  json: {
    write: true
  }
})], l2.prototype, "orderByFields", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l2.prototype, "relationshipId", void 0), e([y({
  type: ["relationship"],
  json: {
    read: false,
    write: true
  }
})], l2.prototype, "type", void 0), l2 = p8 = e([a2("esri.form.elements.RelationshipElement")], l2);
var n5 = l2;

// ../../../node_modules/@arcgis/core/form/elements/TextElement.js
var s3;
var i6 = s3 = class extends i4 {
  constructor(t3) {
    super(t3), this.text = null, this.textFormat = "plain-text", this.type = "text";
  }
  clone() {
    return new s3({
      text: this.text,
      textFormat: this.textFormat,
      visibilityExpression: this.visibilityExpression
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i6.prototype, "text", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i6.prototype, "textFormat", void 0), e([y({
  type: ["text"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], i6.prototype, "type", void 0), i6 = s3 = e([a2("esri.form.elements.TextElement")], i6);
var p9 = i6;

// ../../../node_modules/@arcgis/core/form/support/elements.js
function i7(t3) {
  return {
    typesWithGroup: {
      base: i4,
      key: "type",
      typeMap: {
        attachment: n3,
        field: a5,
        group: t3,
        relationship: n5,
        text: p9
      }
    },
    typesWithoutGroup: {
      base: i4,
      key: "type",
      typeMap: {
        attachment: n3,
        field: a5,
        relationship: n5,
        text: p9
      }
    }
  };
}
function m(t3, e4, p12 = true) {
  if (!t3) return null;
  const r3 = p12 ? e4.typesWithGroup.typeMap : e4.typesWithoutGroup.typeMap;
  return t3.filter((t4) => r3[t4.type]).map((t4) => r3[t4.type].fromJSON(t4));
}
function s4(t3, e4, p12 = true) {
  if (!t3) return null;
  const r3 = p12 ? e4.typesWithGroup.typeMap : e4.typesWithoutGroup.typeMap;
  return t3.filter((t4) => r3[t4.type]).map((t4) => t4.toJSON());
}
function u2(e4, p12, r3 = true) {
  return e4 ? e4.map((e5) => T(r3 ? p12.typesWithGroup : p12.typesWithoutGroup, e5)) : null;
}

// ../../../node_modules/@arcgis/core/form/elements/GroupElement.js
var d2;
var u3 = d2 = class extends i4 {
  constructor(e4) {
    super(e4), this.elements = null, this.initialState = "expanded", this.type = "group";
  }
  castElements(e4) {
    return u2(e4, f3, false);
  }
  readElements(e4, t3) {
    return m(t3.formElements, f3, false);
  }
  writeElements(e4, t3) {
    t3.formElements = s4(e4, f3, false);
  }
  clone() {
    return new d2({
      description: this.description,
      elements: a(this.elements),
      initialState: this.initialState,
      label: this.label,
      visibilityExpression: this.visibilityExpression
    });
  }
};
e([y({
  json: {
    write: true
  }
})], u3.prototype, "elements", void 0), e([s("elements")], u3.prototype, "castElements", null), e([o("elements", ["formElements"])], u3.prototype, "readElements", null), e([r2("elements")], u3.prototype, "writeElements", null), e([y({
  type: ["collapsed", "expanded"],
  json: {
    write: true
  }
})], u3.prototype, "initialState", void 0), e([y({
  type: String,
  json: {
    read: false,
    write: true
  }
})], u3.prototype, "type", void 0), u3 = d2 = e([a2("esri.form.elements.GroupElement")], u3);
var f3 = i7(u3);
var y3 = u3;

// ../../../node_modules/@arcgis/core/form/FormTemplate.js
var I;
var b2 = i7(y3);
var F = I = class extends f {
  constructor(e4) {
    super(e4), this.description = null, this.elements = null, this.expressionInfos = null, this.preserveFieldValuesWhenHidden = false, this.title = null;
  }
  castElements(e4) {
    return u2(e4, b2);
  }
  readElements(e4, s5) {
    return m(s5.formElements, b2);
  }
  writeElements(e4, s5) {
    s5.formElements = s4(e4, b2);
  }
  clone() {
    return new I({
      description: this.description,
      expressionInfos: a(this.expressionInfos),
      elements: a(this.elements),
      title: this.title,
      preserveFieldValuesWhenHidden: this.preserveFieldValuesWhenHidden
    });
  }
  getFieldsUsed(e4, s5) {
    return __async(this, null, function* () {
      const t3 = /* @__PURE__ */ new Set(), {
        description: r3,
        elements: o2,
        expressionInfos: i8,
        title: n7
      } = this;
      if (U(t3, e4, r3), U(t3, e4, n7), !o2) return [];
      const p12 = k(o2, i8).map((s6) => h(t3, e4, s6));
      yield Promise.all(p12);
      for (const l4 of o2) g(t3, {
        fieldsIndex: e4,
        relationships: s5
      }, l4);
      return Array.from(t3).sort();
    });
  }
};
function g(e4, s5, t3) {
  const {
    fieldsIndex: r3
  } = s5;
  if (!r3 || r3.fields.length !== e4.size) switch (U(e4, r3, t3.label), U(e4, r3, t3.description), t3.type) {
    case "field":
      w2(e4, r3, t3.fieldName);
      break;
    case "group":
      t3.elements.forEach((t4) => g(e4, s5, t4));
      break;
    case "relationship":
      if (s5.relationships) {
        const o2 = s5.relationships.find((e5) => e5.id === t3.relationshipId);
        o2 && w2(e4, r3, o2.keyField);
      }
      b(e4, r3, t3.orderByFields?.map((e5) => e5.field));
      break;
    case "text":
      U(e4, r3, t3.text);
  }
}
function k(e4, s5) {
  if (!s5 || 0 === s5.length) return [];
  const t3 = H(e4), r3 = [];
  for (const o2 of s5) t3.has(o2.name) && r3.push(o2.expression);
  return r3;
}
function H(e4) {
  const s5 = /* @__PURE__ */ new Set();
  for (const t3 of e4) if (t(s5, t3.visibilityExpression), !p3(t3)) {
    if (e2(t3)) r(s5, H(t3.elements));
    else if (t(s5, t3.editableExpression), t2(t3)) {
      const {
        requiredExpression: e5,
        valueExpression: r3
      } = t3;
      r(s5, [e5, r3]);
    }
  }
  return s5;
}
function U(e4, s5, t3) {
  b(e4, s5, Xe(t3));
}
e([y({
  type: String,
  json: {
    write: true
  }
})], F.prototype, "description", void 0), e([y({
  json: {
    write: true
  }
})], F.prototype, "elements", void 0), e([s("elements")], F.prototype, "castElements", null), e([o("elements", ["formElements"])], F.prototype, "readElements", null), e([r2("elements")], F.prototype, "writeElements", null), e([y({
  type: [p2],
  json: {
    write: true
  }
})], F.prototype, "expressionInfos", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], F.prototype, "preserveFieldValuesWhenHidden", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], F.prototype, "title", void 0), F = I = e([a2("esri.form.FormTemplate")], F);
var V3 = F;

// ../../../node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
var l3 = class extends i(f) {
  constructor(o2) {
    super(o2), this.creatorField = null, this.creationDateField = null, this.editorField = null, this.editDateField = null, this.realm = null, this.timeZone = null;
  }
};
e([y()], l3.prototype, "creatorField", void 0), e([y()], l3.prototype, "creationDateField", void 0), e([y()], l3.prototype, "editorField", void 0), e([y()], l3.prototype, "editDateField", void 0), e([y()], l3.prototype, "realm", void 0), e([y(c("dateFieldsTimeReference", true))], l3.prototype, "timeZone", void 0), l3 = e([a2("esri.layers.support.EditFieldsInfo")], l3);
var p10 = l3;

// ../../../node_modules/@arcgis/core/layers/support/FeatureIndex.js
var p11 = class extends i(f) {
  constructor(o2) {
    super(o2);
  }
};
e([y({
  constructOnly: true,
  json: {
    write: true
  }
})], p11.prototype, "name", void 0), e([y({
  constructOnly: true,
  json: {
    write: true
  }
})], p11.prototype, "fields", void 0), e([y({
  constructOnly: true,
  json: {
    write: true
  }
})], p11.prototype, "isAscending", void 0), e([y({
  constructOnly: true,
  json: {
    write: true
  }
})], p11.prototype, "indexType", void 0), e([y({
  constructOnly: true,
  json: {
    write: true
  }
})], p11.prototype, "isUnique", void 0), e([y({
  constructOnly: true,
  json: {
    write: true
  }
})], p11.prototype, "description", void 0), p11 = e([a2("esri.layers.support.FeatureIndex")], p11);

// ../../../node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
var a6 = class extends i(f) {
  constructor(e4) {
    super(e4), this.shapeAreaField = null, this.shapeLengthField = null, this.units = null;
  }
};
e([y({
  type: String,
  json: {
    read: {
      source: "shapeAreaFieldName"
    }
  }
})], a6.prototype, "shapeAreaField", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "shapeLengthFieldName"
    }
  }
})], a6.prototype, "shapeLengthField", void 0), e([y({
  type: String,
  json: {
    read: (e4) => oe.read(e4) || me.read(e4)
  }
})], a6.prototype, "units", void 0), a6 = e([a2("esri.layers.support.GeometryFieldsInfo")], a6);
var c4 = a6;

// ../../../node_modules/@arcgis/core/layers/support/Subtype.js
var c5 = class extends i(f) {
  constructor(o2) {
    super(o2), this.code = null, this.defaultValues = {}, this.domains = null, this.name = null;
  }
  readDomains(o2) {
    if (!o2) return null;
    const r3 = {};
    for (const t3 of Object.keys(o2)) r3[t3] = i2(o2[t3]);
    return r3;
  }
  writeDomains(o2, r3) {
    if (!o2) return;
    const t3 = {};
    for (const e4 of Object.keys(o2)) o2[e4] && (t3[e4] = o2[e4]?.toJSON());
    r3.domains = t3;
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], c5.prototype, "code", void 0), e([y({
  type: Object,
  json: {
    write: true
  }
})], c5.prototype, "defaultValues", void 0), e([y({
  json: {
    write: true
  }
})], c5.prototype, "domains", void 0), e([o("domains")], c5.prototype, "readDomains", null), e([r2("domains")], c5.prototype, "writeDomains", null), e([y({
  type: String,
  json: {
    write: true
  }
})], c5.prototype, "name", void 0), c5 = e([a2("esri.layers.support.Subtype")], c5);
var n6 = c5;

// ../../../node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
var R2 = (R3) => {
  let B = class extends R3 {
    constructor() {
      super(...arguments), this.copyright = null, this.capabilities = null, this.dateFieldsTimeZone = null, this.datesInUnknownTimezone = false, this.definitionExpression = null, this.displayField = null, this.editFieldsInfo = null, this.editingInfo = null, this.elevationInfo = null, this.floorInfo = null, this.fullExtent = null, this.gdbVersion = null, this.geometryFieldsInfo = null, this.geometryType = null, this.globalIdField = null, this.hasM = void 0, this.hasZ = void 0, this.heightModelInfo = null, this.historicMoment = null, this.indexes = new (V.ofType(p11))(), this.isTable = false, this.layerId = void 0, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.preferredTimeZone = null, this.relationships = null, this.returnM = void 0, this.returnZ = void 0, this.serviceDefinitionExpression = null, this.serviceItemId = null, this.sourceJSON = null, this.spatialReference = f2.WGS84, this.subtypeField = null, this.subtypes = null, this.trackIdField = null, this.version = void 0;
    }
    get authenticationTriggerEvent() {
      if (!this.url) return null;
      const {
        capabilities: e4
      } = this;
      if (e4) {
        const {
          query: t4,
          operations: r3,
          editing: i8
        } = e4;
        if (!t4.supportsQueryByOthers || !t4.supportsQueryByAnonymous) return "load";
        if (r3.supportsEditing && !(i8.supportsUpdateByOthers && i8.supportsUpdateByAnonymous && i8.supportsDeleteByOthers && i8.supportsDeleteByAnonymous)) return "load";
      }
      if (this.userHasUpdateItemPrivileges) {
        if (V2(this)) return "load";
        if (this.hasUpdateItemRestrictions) return e4.operations.supportsQuery ? "editing" : "load";
      }
      if (this.userHasFullEditingPrivileges && this.hasFullEditingRestrictions) return "editing";
      const t3 = this.editFieldsInfo;
      return (t3?.creatorField || t3?.editorField) && e4?.operations.supportsEditing ? "editing" : null;
    }
    readCapabilitiesFromService(e4, t3) {
      return a4(t3, this.url);
    }
    readEditingInfo(e4, t3) {
      const {
        editingInfo: r3
      } = t3;
      return r3 ? {
        lastEditDate: null != r3.lastEditDate ? new Date(r3.lastEditDate) : null
      } : null;
    }
    get effectiveCapabilities() {
      const e4 = this.capabilities;
      if (!e4) return null;
      const t3 = a(e4), {
        operations: i8,
        editing: o2
      } = t3;
      return Z(this) ? (this.userHasUpdateItemPrivileges && (i8.supportsQuery = true), t3) : this.userHasUpdateItemPrivileges ? (i8.supportsAdd = i8.supportsDelete = i8.supportsEditing = i8.supportsQuery = i8.supportsUpdate = o2.supportsDeleteByOthers = o2.supportsGeometryUpdate = o2.supportsUpdateByOthers = true, t3) : (this.userHasFullEditingPrivileges && i8.supportsEditing && (i8.supportsAdd = i8.supportsDelete = i8.supportsUpdate = o2.supportsGeometryUpdate = true), t3);
    }
    readGlobalIdFieldFromService(e4, t3) {
      return R(t3);
    }
    get hasFullEditingRestrictions() {
      const e4 = this.capabilities;
      if (!e4 || Z(this)) return false;
      const {
        operations: t3,
        editing: r3
      } = e4;
      return t3.supportsEditing && !(t3.supportsAdd && t3.supportsDelete && t3.supportsUpdate && r3.supportsGeometryUpdate);
    }
    get hasUpdateItemRestrictions() {
      const e4 = this.capabilities;
      if (!e4) return false;
      const {
        operations: t3,
        editing: r3
      } = e4;
      return Z(this) ? !t3.supportsQuery : !(t3.supportsAdd && t3.supportsDelete && t3.supportsEditing && t3.supportsQuery && t3.supportsUpdate && r3.supportsDeleteByOthers && r3.supportsGeometryUpdate && r3.supportsUpdateByOthers);
    }
    readIsTableFromService(e4, t3) {
      return "Table" === t3.type;
    }
    readMaxScale(e4, t3) {
      return t3.effectiveMaxScale || e4 || 0;
    }
    readMinScale(e4, t3) {
      return t3.effectiveMinScale || e4 || 0;
    }
    readObjectIdFieldFromService(e4, t3) {
      return M(t3);
    }
    readServiceDefinitionExpression(e4, t3) {
      return t3.definitionQuery || t3.definitionExpression;
    }
    set url(e4) {
      if (null == e4) return void this._set("url", e4);
      const t3 = S({
        layer: this,
        url: e4,
        nonStandardUrlAllowed: true,
        logger: n.getLogger(this)
      });
      this._set("url", t3.url), null != t3.layerId && this._set("layerId", t3.layerId);
    }
    writeUrl(e4, t3, r3, i8) {
      C(this, e4, null, t3, i8);
    }
    readVersion(e4, t3) {
      return C2(t3);
    }
  };
  return e([y({
    readOnly: true
  })], B.prototype, "authenticationTriggerEvent", null), e([y({
    type: String,
    json: {
      origins: {
        service: {
          read: {
            source: "copyrightText"
          }
        }
      }
    }
  })], B.prototype, "copyright", void 0), e([y({
    readOnly: true,
    json: {
      read: false,
      origins: {
        service: {
          read: {
            source: ["advancedQueryCapabilities", "allowGeometryUpdates", "allowUpdateWithoutMValues", "archivingInfo", "capabilities", "datesInUnknownTimezone", "hasAttachments", "hasM", "hasZ", "maxRecordCount", "maxRecordCountFactor", "ownershipBasedAccessControlForFeatures", "standardMaxRecordCount", "supportedQueryFormats", "supportsAdvancedQueries", "supportsApplyEditsWithGlobalIds", "supportsAttachmentsByUploadId", "supportsAttachmentsResizing", "supportsCalculate", "supportsCoordinatesQuantization", "supportsExceedsLimitStatistics", "supportsFieldDescriptionProperty", "supportsQuantizationEditMode", "supportsRollbackOnFailureParameter", "supportsStatistics", "supportsTruncate", "supportsValidateSql", "tileMaxRecordCount", "useStandardizedQueries"]
          }
        }
      }
    }
  })], B.prototype, "capabilities", void 0), e([o("service", "capabilities")], B.prototype, "readCapabilitiesFromService", null), e([y(c("dateFieldsTimeReference"))], B.prototype, "dateFieldsTimeZone", void 0), e([y({
    type: Boolean
  })], B.prototype, "datesInUnknownTimezone", void 0), e([y({
    type: String,
    json: {
      origins: {
        service: {
          read: false,
          write: false
        }
      },
      name: "layerDefinition.definitionExpression",
      write: {
        enabled: true,
        allowNull: true
      }
    }
  })], B.prototype, "definitionExpression", void 0), e([y({
    type: String,
    json: {
      origins: {
        service: {
          read: {
            source: "displayField"
          }
        }
      }
    }
  })], B.prototype, "displayField", void 0), e([y({
    readOnly: true,
    type: p10
  })], B.prototype, "editFieldsInfo", void 0), e([y({
    readOnly: true
  })], B.prototype, "editingInfo", void 0), e([o("editingInfo")], B.prototype, "readEditingInfo", null), e([y({
    readOnly: true
  })], B.prototype, "effectiveCapabilities", null), e([y((() => {
    const e4 = a(d), t3 = e4.json.origins;
    return t3["web-map"] = {
      read: false,
      write: false
    }, t3["portal-item"] = {
      read: false,
      write: false
    }, e4;
  })())], B.prototype, "elevationInfo", void 0), e([y({
    type: p4,
    json: {
      name: "layerDefinition.floorInfo",
      write: true,
      origins: {
        "web-scene": {
          name: "layerDefinition.floorInfo",
          write: {
            enabled: true,
            layerContainerTypes: a3
          }
        }
      }
    }
  })], B.prototype, "floorInfo", void 0), e([y({
    type: w,
    json: {
      origins: {
        service: {
          read: {
            source: "extent"
          }
        }
      }
    }
  })], B.prototype, "fullExtent", void 0), e([y()], B.prototype, "gdbVersion", void 0), e([y({
    readOnly: true,
    type: c4,
    json: {
      read: {
        source: "geometryProperties"
      }
    }
  })], B.prototype, "geometryFieldsInfo", void 0), e([y({
    type: ["point", "polygon", "polyline", "multipoint", "multipatch", "mesh"],
    json: {
      origins: {
        service: {
          read: y2.read
        }
      }
    }
  })], B.prototype, "geometryType", void 0), e([y({
    type: String
  })], B.prototype, "globalIdField", void 0), e([o("service", "globalIdField", ["globalIdField", "fields"])], B.prototype, "readGlobalIdFieldFromService", null), e([y({
    readOnly: true
  })], B.prototype, "hasFullEditingRestrictions", null), e([y({
    type: Boolean,
    json: {
      origins: {
        service: {
          read: true
        }
      }
    }
  })], B.prototype, "hasM", void 0), e([y({
    readOnly: true
  })], B.prototype, "hasUpdateItemRestrictions", null), e([y({
    type: Boolean,
    json: {
      origins: {
        service: {
          read: true
        }
      }
    }
  })], B.prototype, "hasZ", void 0), e([y({
    readOnly: true,
    type: v
  })], B.prototype, "heightModelInfo", void 0), e([y({
    type: Date
  })], B.prototype, "historicMoment", void 0), e([y({
    type: V.ofType(p11),
    readOnly: true
  })], B.prototype, "indexes", void 0), e([y({
    readOnly: true
  })], B.prototype, "isTable", void 0), e([o("service", "isTable", ["type"])], B.prototype, "readIsTableFromService", null), e([y({
    type: Number,
    json: {
      origins: {
        service: {
          read: {
            source: "id"
          }
        },
        "portal-item": {
          read: false,
          write: {
            target: "id"
          }
        }
      },
      read: false
    }
  })], B.prototype, "layerId", void 0), e([y(j)], B.prototype, "maxScale", void 0), e([o("service", "maxScale", ["maxScale", "effectiveMaxScale"])], B.prototype, "readMaxScale", null), e([y(u)], B.prototype, "minScale", void 0), e([o("service", "minScale", ["minScale", "effectiveMinScale"])], B.prototype, "readMinScale", null), e([y({
    type: String
  })], B.prototype, "objectIdField", void 0), e([o("service", "objectIdField", ["objectIdField", "fields"])], B.prototype, "readObjectIdFieldFromService", null), e([y(c("preferredTimeReference"))], B.prototype, "preferredTimeZone", void 0), e([y({
    type: [p5],
    readOnly: true
  })], B.prototype, "relationships", void 0), e([y({
    type: Boolean
  })], B.prototype, "returnM", void 0), e([y({
    type: Boolean
  })], B.prototype, "returnZ", void 0), e([y({
    readOnly: true,
    json: {
      write: false
    }
  })], B.prototype, "serverGens", void 0), e([y({
    readOnly: true
  })], B.prototype, "serviceDefinitionExpression", void 0), e([o("service", "serviceDefinitionExpression", ["definitionQuery", "definitionExpression"])], B.prototype, "readServiceDefinitionExpression", null), e([y({
    type: String,
    readOnly: true,
    json: {
      read: false,
      origins: {
        service: {
          read: true
        }
      }
    }
  })], B.prototype, "serviceItemId", void 0), e([y()], B.prototype, "sourceJSON", void 0), e([y({
    type: f2,
    json: {
      origins: {
        service: {
          read: {
            source: "extent.spatialReference"
          }
        }
      }
    }
  })], B.prototype, "spatialReference", void 0), e([y({
    type: String,
    readOnly: true,
    json: {
      origins: {
        service: {
          read: true
        }
      }
    }
  })], B.prototype, "subtypeField", void 0), e([y({
    type: [n6],
    readOnly: true,
    json: {
      read: false,
      origins: {
        service: {
          read: true
        }
      }
    }
  })], B.prototype, "subtypes", void 0), e([y({
    type: String,
    json: {
      read: {
        source: "timeInfo.trackIdField"
      }
    }
  })], B.prototype, "trackIdField", void 0), e([y(p)], B.prototype, "url", null), e([r2("url")], B.prototype, "writeUrl", null), e([y({
    json: {
      origins: {
        service: {
          read: true
        }
      },
      read: false
    }
  })], B.prototype, "version", void 0), e([o("service", "version", ["currentVersion", "capabilities", "drawingInfo", "hasAttachments", "htmlPopupType", "relationships", "timeInfo", "typeIdField", "types"])], B.prototype, "readVersion", null), B = e([a2("esri.layers.mixins.FeatureLayerBase")], B), B;
};

export {
  V3 as V,
  n6 as n,
  R2 as R
};
//# sourceMappingURL=chunk-SAOPWBKU.js.map
