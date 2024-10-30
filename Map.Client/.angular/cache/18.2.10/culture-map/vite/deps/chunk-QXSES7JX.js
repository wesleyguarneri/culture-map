import {
  o
} from "./chunk-7ZJ6P7J7.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var i;
var l = i = class extends f {
  constructor(e2) {
    super(e2), this.label = null, this.size = null, this.value = null, this.useMinValue = null, this.useMaxValue = null;
  }
  clone() {
    return new i({
      label: this.label,
      size: this.size,
      value: this.value,
      useMaxValue: this.useMaxValue,
      useMinValue: this.useMinValue
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "label", void 0), e([y({
  type: Number,
  cast: o,
  json: {
    write: true
  }
})], l.prototype, "size", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l.prototype, "value", void 0), e([y({
  type: Boolean,
  json: {
    write: false
  }
})], l.prototype, "useMinValue", void 0), e([y({
  type: Boolean,
  json: {
    write: false
  }
})], l.prototype, "useMaxValue", void 0), l = i = e([a("esri.renderers.visualVariables.support.SizeStop")], l);
var a2 = l;

export {
  a2 as a
};
//# sourceMappingURL=chunk-QXSES7JX.js.map
