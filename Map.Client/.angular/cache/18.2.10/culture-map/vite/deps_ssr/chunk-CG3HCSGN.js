import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import {
  S3 as S
} from "./chunk-6SSA7P3A.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/widgets/support/UnitSelect.js
var a2 = "esri-unit-select";
var p = {
  base: a2,
  label: `${a2}__label`,
  select: `${a2}__select`
};
var n2 = class extends B {
  constructor(e3, t) {
    super(e3, t), this._onSelectChange = (e4) => {
      this.onChange(e4.target.value);
    };
  }
  loadDependencies() {
    return r({
      label: () => import("./calcite-label-7BB63OZC.js"),
      option: () => import("./calcite-option-DLZBJJ3Y.js"),
      select: () => import("./calcite-select-5COJZAUD.js")
    });
  }
  render() {
    const {
      messages: e3,
      options: s,
      selectLabel: o,
      value: r2,
      _onSelectChange: c
    } = this;
    return n("div", {
      class: p.base,
      key: "units"
    }, n("calcite-label", {
      class: p.label
    }, o, n("calcite-select", {
      class: p.select,
      label: o,
      onCalciteSelectChange: c
    }, s.map((s2) => n("calcite-option", {
      key: s2,
      selected: s2 === r2,
      value: s2
    }, S(s2) ? e3.systems[s2] : e3.units[s2]?.pluralCapitalized)))));
  }
};
e([y()], n2.prototype, "options", void 0), e([y()], n2.prototype, "onChange", void 0), e([y()], n2.prototype, "selectLabel", void 0), e([y()], n2.prototype, "value", void 0), e([y(), e2("esri/core/t9n/Units")], n2.prototype, "messages", void 0), n2 = e([a("esri.widgets.support.UnitSelect")], n2);

export {
  n2 as n
};
//# sourceMappingURL=chunk-CG3HCSGN.js.map
