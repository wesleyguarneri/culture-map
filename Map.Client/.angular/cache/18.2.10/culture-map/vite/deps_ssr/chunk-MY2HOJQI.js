import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/form/ExpressionInfo.js
var s;
var i = s = class extends f {
  constructor(e3) {
    super(e3), this.expression = null, this.name = null, this.returnType = "boolean", this.title = null;
  }
  clone() {
    return new s({
      name: this.name,
      title: this.title,
      expression: this.expression,
      returnType: this.returnType
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "expression", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "name", void 0), e([y({
  type: ["boolean", "date", "number", "string"],
  json: {
    write: true
  }
})], i.prototype, "returnType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "title", void 0), i = s = e([a("esri.form.ExpressionInfo")], i);
var p = i;

// ../../../node_modules/@arcgis/core/form/elements/inputs/Input.js
var e2 = class extends f {
  constructor(o2) {
    super(o2), this.type = null;
  }
};
e([y()], e2.prototype, "type", void 0), e2 = e([a("esri.form.elements.inputs.Input")], e2);
var p2 = e2;

// ../../../node_modules/@arcgis/core/form/elements/inputs/TextInput.js
var s2 = class extends p2 {
  constructor(o2) {
    super(o2), this.maxLength = null, this.minLength = 0;
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], s2.prototype, "maxLength", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], s2.prototype, "minLength", void 0), s2 = e([a("esri.form.elements.inputs.TextInput")], s2);
var p3 = s2;

// ../../../node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
var s3;
var n = s3 = class extends p3 {
  constructor(r2) {
    super(r2), this.type = "barcode-scanner";
  }
  clone() {
    return new s3({
      maxLength: this.maxLength,
      minLength: this.minLength
    });
  }
};
e([y({
  type: ["barcode-scanner"],
  json: {
    read: false,
    write: true
  }
})], n.prototype, "type", void 0), n = s3 = e([a("esri.form.elements.inputs.BarcodeScannerInput")], n);
var c = n;

// ../../../node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
var s4;
var p4 = s4 = class extends p2 {
  constructor(o2) {
    super(o2), this.noValueOptionLabel = null, this.showNoValueOption = true, this.type = "combo-box";
  }
  clone() {
    return new s4({
      showNoValueOption: this.showNoValueOption,
      noValueOptionLabel: this.noValueOptionLabel
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p4.prototype, "noValueOptionLabel", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p4.prototype, "showNoValueOption", void 0), e([y({
  type: ["combo-box"],
  json: {
    read: false,
    write: true
  }
})], p4.prototype, "type", void 0), p4 = s4 = e([a("esri.form.elements.inputs.ComboBoxInput")], p4);
var i2 = p4;

// ../../../node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
var p5;
function s5(r2) {
  return null != r2 ? r2 : null;
}
function a2(r2) {
  return null != r2 ? r2 : null;
}
var m = p5 = class extends p2 {
  constructor(r2) {
    super(r2), this.max = null, this.min = null, this.type = "date-picker";
  }
  readMax(r2, t) {
    return s5(t.max);
  }
  writeMax(r2, t) {
    t.max = a2(r2);
  }
  readMin(r2, t) {
    return s5(t.min);
  }
  writeMin(r2, t) {
    t.min = a2(r2);
  }
  clone() {
    return new p5({
      max: this.max,
      min: this.min
    });
  }
};
e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], m.prototype, "max", void 0), e([o("max")], m.prototype, "readMax", null), e([r("max")], m.prototype, "writeMax", null), e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], m.prototype, "min", void 0), e([o("min")], m.prototype, "readMin", null), e([r("min")], m.prototype, "writeMin", null), e([y({
  type: ["date-picker"],
  json: {
    read: false,
    write: true
  }
})], m.prototype, "type", void 0), m = p5 = e([a("esri.form.elements.inputs.DatePickerInput")], m);
var c2 = m;

// ../../../node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
var s6;
function p6(t) {
  return null != t ? t : null;
}
function m2(t) {
  return null != t ? t : null;
}
var u = s6 = class extends p2 {
  constructor(t) {
    super(t), this.includeTimeOffset = true, this.max = null, this.min = null, this.timeResolution = "minutes", this.type = "datetimeoffset-picker";
  }
  readMax(t, e3) {
    return p6(e3.max);
  }
  writeMax(t, e3) {
    e3.max = m2(t);
  }
  readMin(t, e3) {
    return p6(e3.min);
  }
  writeMin(t, e3) {
    e3.min = m2(t);
  }
  readTimeResolution(t, e3) {
    return p6(e3.timeResolution);
  }
  writeTimeResolution(t, e3) {
    e3.timeResolution = m2(t);
  }
  clone() {
    return new s6({
      includeTimeOffset: this.includeTimeOffset,
      max: this.max,
      min: this.min,
      timeResolution: this.timeResolution
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "includeTimeOffset", void 0), e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], u.prototype, "max", void 0), e([o("max")], u.prototype, "readMax", null), e([r("max")], u.prototype, "writeMax", null), e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], u.prototype, "min", void 0), e([o("min")], u.prototype, "readMin", null), e([r("min")], u.prototype, "writeMin", null), e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], u.prototype, "timeResolution", void 0), e([o("timeResolution")], u.prototype, "readTimeResolution", null), e([r("timeResolution")], u.prototype, "writeTimeResolution", null), e([y({
  type: ["datetimeoffset-picker"],
  json: {
    read: false,
    write: true
  }
})], u.prototype, "type", void 0), u = s6 = e([a("esri.form.elements.inputs.DateTimeOffsetPickerInput")], u);
var l = u;

// ../../../node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
var p7;
function s7(e3) {
  return null != e3 ? new Date(e3) : null;
}
function m3(e3) {
  return e3 ? e3.getTime() : null;
}
var a3 = p7 = class extends p2 {
  constructor(e3) {
    super(e3), this.includeTime = false, this.max = null, this.min = null, this.type = "datetime-picker";
  }
  readMax(e3, r2) {
    return s7(r2.max);
  }
  writeMax(e3, r2) {
    r2.max = m3(e3);
  }
  readMin(e3, r2) {
    return s7(r2.min);
  }
  writeMin(e3, r2) {
    r2.min = m3(e3);
  }
  clone() {
    return new p7({
      includeTime: this.includeTime,
      max: this.max,
      min: this.min
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a3.prototype, "includeTime", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: true
  }
})], a3.prototype, "max", void 0), e([o("max")], a3.prototype, "readMax", null), e([r("max")], a3.prototype, "writeMax", null), e([y({
  type: Date,
  json: {
    type: Number,
    write: true
  }
})], a3.prototype, "min", void 0), e([o("min")], a3.prototype, "readMin", null), e([r("min")], a3.prototype, "writeMin", null), e([y({
  type: ["datetime-picker"],
  json: {
    read: false,
    write: true
  }
})], a3.prototype, "type", void 0), a3 = p7 = e([a("esri.form.elements.inputs.DateTimePickerInput")], a3);
var c3 = a3;

// ../../../node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
var s8;
var p8 = s8 = class extends p2 {
  constructor(o2) {
    super(o2), this.noValueOptionLabel = null, this.showNoValueOption = true, this.type = "radio-buttons";
  }
  clone() {
    return new s8({
      noValueOptionLabel: this.noValueOptionLabel,
      showNoValueOption: this.showNoValueOption
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p8.prototype, "noValueOptionLabel", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p8.prototype, "showNoValueOption", void 0), e([y({
  type: ["radio-buttons"],
  json: {
    read: false,
    write: true
  }
})], p8.prototype, "type", void 0), p8 = s8 = e([a("esri.form.elements.inputs.RadioButtonsInput")], p8);
var i3 = p8;

// ../../../node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
var s9;
var p9 = s9 = class extends p2 {
  constructor(o2) {
    super(o2), this.offValue = null, this.onValue = null, this.type = "switch";
  }
  clone() {
    return new s9({
      offValue: this.offValue,
      onValue: this.onValue
    });
  }
};
e([y({
  type: [String, Number],
  json: {
    write: true
  }
})], p9.prototype, "offValue", void 0), e([y({
  type: [String, Number],
  json: {
    write: true
  }
})], p9.prototype, "onValue", void 0), e([y({
  type: ["switch"],
  json: {
    read: false,
    write: true
  }
})], p9.prototype, "type", void 0), p9 = s9 = e([a("esri.form.elements.inputs.SwitchInput")], p9);
var i4 = p9;

// ../../../node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
var s10;
var p10 = s10 = class extends p3 {
  constructor(t) {
    super(t), this.type = "text-area";
  }
  clone() {
    return new s10({
      maxLength: this.maxLength,
      minLength: this.minLength
    });
  }
};
e([y({
  type: ["text-area"],
  json: {
    read: false,
    write: true
  }
})], p10.prototype, "type", void 0), p10 = s10 = e([a("esri.form.elements.inputs.TextAreaInput")], p10);
var a4 = p10;

// ../../../node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
var s11;
var p11 = s11 = class extends p3 {
  constructor(t) {
    super(t), this.type = "text-box";
  }
  clone() {
    return new s11({
      maxLength: this.maxLength,
      minLength: this.minLength
    });
  }
};
e([y({
  type: ["text-box"],
  json: {
    read: false,
    write: true
  }
})], p11.prototype, "type", void 0), p11 = s11 = e([a("esri.form.elements.inputs.TextBoxInput")], p11);
var n2 = p11;

// ../../../node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
var s12;
function p12(t) {
  return null != t ? t : null;
}
function m4(t) {
  return null != t ? t : null;
}
var u2 = s12 = class extends p2 {
  constructor(t) {
    super(t), this.max = null, this.min = null, this.timeResolution = "minutes", this.type = "time-picker";
  }
  readMax(t, e3) {
    return p12(e3.max);
  }
  writeMax(t, e3) {
    e3.max = m4(t);
  }
  readMin(t, e3) {
    return p12(e3.min);
  }
  writeMin(t, e3) {
    e3.min = m4(t);
  }
  readTimeResolution(t, e3) {
    return p12(e3.timeResolution);
  }
  writeTimeResolution(t, e3) {
    e3.timeResolution = m4(t);
  }
  clone() {
    return new s12({
      max: this.max,
      min: this.min,
      timeResolution: this.timeResolution
    });
  }
};
e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], u2.prototype, "max", void 0), e([o("max")], u2.prototype, "readMax", null), e([r("max")], u2.prototype, "writeMax", null), e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], u2.prototype, "min", void 0), e([o("min")], u2.prototype, "readMin", null), e([r("min")], u2.prototype, "writeMin", null), e([y({
  type: String,
  json: {
    type: String,
    write: true
  }
})], u2.prototype, "timeResolution", void 0), e([o("timeResolution")], u2.prototype, "readTimeResolution", null), e([r("timeResolution")], u2.prototype, "writeTimeResolution", null), e([y({
  type: ["time-picker"],
  json: {
    read: false,
    write: true
  }
})], u2.prototype, "type", void 0), u2 = s12 = e([a("esri.form.elements.inputs.TimePickerInput")], u2);
var l2 = u2;

// ../../../node_modules/@arcgis/core/form/elements/support/inputs.js
var c4 = {
  base: p2,
  key: "type",
  typeMap: {
    "barcode-scanner": c,
    "combo-box": i2,
    "date-picker": c2,
    "datetime-picker": c3,
    "datetimeoffset-picker": l,
    "radio-buttons": i3,
    switch: i4,
    "text-area": a4,
    "text-box": n2,
    "time-picker": l2
  }
};

export {
  p,
  c4 as c
};
//# sourceMappingURL=chunk-MY2HOJQI.js.map
