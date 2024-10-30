import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e4
} from "./chunk-L2VTN5PI.js";
import {
  E as E2,
  _,
  g as g2,
  m
} from "./chunk-HIZXJ32N.js";
import {
  C,
  F,
  S as S2,
  U,
  k,
  q,
  x as x2
} from "./chunk-2I3RVFNX.js";
import {
  e as e3
} from "./chunk-MH54QISY.js";
import {
  T
} from "./chunk-DUZT23UA.js";
import {
  t
} from "./chunk-6NBMJUQX.js";
import {
  f as f3
} from "./chunk-DUSY4H5O.js";
import {
  o as o5
} from "./chunk-P6I54QB7.js";
import {
  b
} from "./chunk-WYPPXVX7.js";
import {
  i as i2,
  o as o4,
  s as s2
} from "./chunk-T2SCEBLQ.js";
import {
  n as n3
} from "./chunk-HKAONIBH.js";
import {
  n as n2
} from "./chunk-HEG4CVDM.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  i,
  n
} from "./chunk-M5N6UHWJ.js";
import {
  f as f2,
  g
} from "./chunk-ODFKYX74.js";
import {
  l,
  o as o3
} from "./chunk-THZPD5CT.js";
import {
  E2 as E,
  R2,
  x
} from "./chunk-6SSA7P3A.js";
import {
  A as A2,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  o as o2
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  M,
  R,
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  A,
  f2 as f,
  o2 as o,
  s
} from "./chunk-AIZ3T7E3.js";
import {
  u
} from "./chunk-6WGE3IUL.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/css.js
var e5 = "esri-tooltip";
var t2 = `${e5}-content`;
var n4 = `${e5}-content--input`;
var _2 = `${e5}-content__header`;
var a2 = `${e5}-content__header__spacer`;
var o6 = `${e5}-content__header__actions`;
var s3 = `${e5}-draw-header-actions`;
var c = `${e5}-table`;
var $ = `${e5}-help-message`;
var r2 = `${e5}-help-message__text`;
var h = `${e5}-help-message__icon`;

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipField.js
var p = `${e5}-field`;
var d2 = {
  base: p,
  inputMode: `${p}--input`,
  title: `${p}__title`,
  value: `${p}__value`
};
var c2 = class extends B {
  constructor() {
    super(...arguments), this.hidden = false, this.mode = "feedback";
  }
  render() {
    return n("div", {
      class: this.classes({
        [d2.base]: true,
        [d2.inputMode]: "input" === this.mode
      })
    }, n("div", {
      class: d2.title
    }, this.title), n("div", {
      class: d2.value
    }, this.value));
  }
};
e([y()], c2.prototype, "hidden", void 0), e([y()], c2.prototype, "mode", void 0), e([y()], c2.prototype, "title", void 0), e([y()], c2.prototype, "value", void 0), c2 = e([a("esri.views.interactive.tooltip.components.TooltipField")], c2);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/components/ValueByValue.js
var p2 = {
  base: `${e5}-value-by-value`
};
var a3 = class extends B {
  constructor() {
    super(...arguments), this.divider = "×";
  }
  render() {
    return n("div", {
      class: p2.base
    }, n("span", null, this.left), n("span", null, this.divider), n("span", null, this.right));
  }
};
e([y()], a3.prototype, "left", void 0), e([y()], a3.prototype, "divider", void 0), e([y()], a3.prototype, "right", void 0), a3 = e([a("esri.views.interactive.tooltip.components.ValueByValue")], a3);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/fields/parsingAndFormattingUtils.js
var v = 1;
var y2 = 6;
function D(t3, u3) {
  return {
    angleRelative: x3,
    direction: j,
    directionRelative: R3,
    directionRelativeBilateral: $2,
    latitudeDecimalDegrees: w,
    longitudeDecimalDegrees: F2,
    area: (e6, r4) => k(t3, e6, r4 ?? u3.area),
    length: (n14, r4, i9) => x2(t3, n14, r4 ?? u3.length, i9),
    lengthRelative: (n14, e6) => C(t3, n14, e6 ?? u3.length),
    totalLength: (n14, r4) => x2(t3, n14, r4 ?? u3.length),
    verticalLength: (n14, e6) => F(t3, n14, e6 ?? u3.length),
    verticalLengthRelative: (n14, e6) => S2(t3, n14, e6 ?? u3.verticalLength),
    percentage: T2,
    scalar: b2,
    scale: Z
  };
}
function x3(t3) {
  return l(t3, __spreadValues({
    signDisplay: "exceptZero"
  }, z(v)));
}
function j(t3) {
  return U(t3, t3.rotationType, v);
}
function R3(t3) {
  const n14 = T(t3);
  return l(n14, __spreadValues({
    style: "unit",
    unitDisplay: "narrow",
    unit: "degree",
    signDisplay: n14 > 0 ? "never" : "exceptZero"
  }, z(v)));
}
function $2(t3) {
  return U(t3, t3.rotationType, v);
}
function F2(t3) {
  return U2(t3, N);
}
function w(t3) {
  return U2(t3, O);
}
function L(t3) {
  return q2(t3, N);
}
function A3(t3) {
  return q2(t3, O);
}
function U2(t3, n14) {
  const e6 = false, r4 = "geographic";
  return U(s2(t3, "degrees"), r4, y2, n14, e6);
}
function q2(t3, n14) {
  const e6 = false, r4 = n14.normalize(s2(t3, "degrees").value, void 0, e6);
  return b2(i2(r4), y2);
}
function T2(t3) {
  return l(t3.value, {
    style: "percent"
  });
}
function Z(t3) {
  return l(t3, {
    style: "percent",
    maximumFractionDigits: 0
  });
}
function b2(t3, n14) {
  return l(t3.value, z(n14));
}
function z(t3) {
  return {
    minimumFractionDigits: t3,
    maximumFractionDigits: t3
  };
}
function B2(t3) {
  return (n14, e6) => {
    const r4 = o3(n14);
    return null != r4 ? t3(r4, e6) : null;
  };
}
var C2 = (t3) => {
  let n14 = `[-+]?[0-9${t3.thousands}]+`;
  return "" !== t3.decimal && (n14 += `${t3.decimal}[0-9]+`), new RegExp(`^(${n14}\\s*)${t3.separator}(\\s*${n14})$`, "i");
};
var E3 = " ";
var I = [];
for (const P of [",", "\\|", "\\s+"]) for (const t3 of ["\\.", ",", ""]) for (const n14 of ["", ",", "\\.", E3, "\\s+"]) P !== t3 && P !== n14 && t3 !== n14 && I.push({
  separator: P,
  decimal: t3,
  thousands: n14,
  pattern: C2({
    decimal: t3,
    thousands: n14,
    separator: P
  })
});
function M2(t3) {
  for (const {
    decimal: n14,
    thousands: e6,
    pattern: r4
  } of I) {
    r4.lastIndex = 0;
    const i9 = t3.match(r4);
    if (!i9) continue;
    const o7 = o3(k2(i9[1], n14, e6)), u3 = o3(k2(i9[2], n14, e6));
    if (null != o7 && null != u3) return {
      x: i2(o7),
      y: i2(u3)
    };
  }
  return null;
}
function k2(t3, n14, e6) {
  let r4 = t3.replaceAll(/[\s+]/g, "");
  return "" !== e6 && (r4 = r4.replaceAll(e6, "")), "" !== n14 && (r4 = r4.replaceAll(n14, ".")), r4;
}
function G(t3) {
  if (!t3 || null != o3(t3) || !_()) return null;
  const n14 = E2(t3), e6 = K(n14?.latitude), r4 = K(n14?.longitude);
  return null != r4 && null != e6 ? {
    latitude: e6,
    longitude: r4
  } : null;
}
function H(t3) {
  return K(g2(t3));
}
function J(t3) {
  return K(m(t3));
}
function K(t3) {
  return null != t3 ? o4(t3, "degrees", "geographic") : null;
}
var N = new n3(-180, 180);
var O = new n3(-90, 90);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContent.js
var D2 = class extends B {
  constructor() {
    super(...arguments), this._focusAbortController = new AbortController(), this._transition = null, this._mode = "feedback", this._getFormatters = t(D), this._onDiscard = () => {
      this.info.clearInputValues(), this.exitInputMode();
    }, this._onCommit = (t3, e6) => {
      if ("commit-and-exit" === e6) return void this.exitInputMode();
      if ("commit-on-blur" === e6) return;
      const o7 = this._getFocusableElements(), s6 = o7.length, i9 = o7.indexOf(t3);
      if (-1 === i9) return void this.exitInputMode();
      const n14 = ((i9 + ("commit-and-next" === e6 ? 1 : -1)) % s6 + s6) % s6;
      S3(o7.at(n14));
    }, this._handleTab = (t3) => {
      if (t3.code !== f3.next) return;
      const e6 = this._getFocusableElements(), o7 = e6.at(0), s6 = e6.at(-1);
      o7 && s6 && (t3.shiftKey ? document.activeElement === o7 && (t3.preventDefault(), S3(s6)) : document.activeElement === s6 && (t3.preventDefault(), S3(o7)));
    };
  }
  get mode() {
    return this._mode;
  }
  get _displayUnits() {
    const t3 = e3(this.tooltip.view);
    return {
      length: t3,
      verticalLength: t3,
      area: t3,
      angle: "degrees"
    };
  }
  get _inputUnitInfos() {
    const t3 = this._messagesUnits, e6 = (e7) => ({
      unit: e7,
      abbreviation: b(t3, e7, "abbr")
    }), o7 = e3(this.tooltip.view), s6 = e6(E(o7)), i9 = e6(R2(o7)), n14 = e6(x(o7)), r4 = e6("degrees");
    return {
      length: s6,
      lengthRelative: s6,
      verticalLength: i9,
      verticalLengthRelative: i9,
      area: n14,
      direction: r4,
      orientation: r4,
      rotation: r4,
      longitudeLatitude: r4
    };
  }
  get _formatters() {
    return this._getFormatters(this._messagesUnits, this._displayUnits);
  }
  get fieldContext() {
    return {
      formatters: this._formatters,
      inputUnitInfos: this._inputUnitInfos,
      messages: this._messagesTooltip,
      sketchOptions: this.info.sketchOptions,
      onCommit: this._onCommit,
      onDiscard: this._onDiscard
    };
  }
  render() {
    const {
      visibleElements: t3
    } = this.info.sketchOptions.tooltips, e6 = this._renderedContent, o7 = this._renderedActions, s6 = this._renderedHelpMessage, i9 = e6.length > 0, n14 = i9 || !!s6, r4 = "input" === this.mode;
    return n("div", {
      class: f2(t2, r4 && n4),
      onkeydown: this._handleTab
    }, r4 && n14 && t3.header ? n("div", {
      class: _2,
      key: "header"
    }, n("calcite-button", {
      appearance: "transparent",
      "data-testid": "tooltip-back-button",
      iconFlipRtl: "both",
      iconStart: "chevron-left",
      key: "discard-button",
      kind: "neutral",
      onclick: this._onDiscard,
      scale: "s",
      tabIndex: -1
    }), o7.length > 0 ? n(i, null, n("div", {
      class: a2,
      key: "spacer"
    }), n("div", {
      class: o6,
      key: "actions"
    }, o7)) : null) : null, i9 ? n("div", {
      class: c,
      key: "content"
    }, ...e6) : null, s6);
  }
  _renderActions() {
    return null;
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      input: () => import("./calcite-input-WIKYKTSA.js")
    });
  }
  enterInputMode(t3) {
    return __async(this, null, function* () {
      try {
        yield this._transitionTo("input"), yield this._focusField(t3);
      } catch (e6) {
        f(e6);
      }
    });
  }
  exitInputMode() {
    return __async(this, arguments, function* ({
      focusOnView: t3 = true
    } = {}) {
      try {
        const {
          container: e6,
          info: o7
        } = this;
        o7.clearInputValues();
        const s6 = t3 ? e6?.closest(".esri-view")?.querySelector(".esri-view-surface") : null;
        yield this._transitionTo("feedback"), s6 instanceof HTMLElement && s6.focus();
      } catch (e6) {
        f(e6);
      }
    });
  }
  get _renderedContent() {
    return H2(this._renderContent());
  }
  get _renderedActions() {
    return H2(this._renderActions());
  }
  get _renderedHelpMessage() {
    const {
      sketchOptions: t3,
      visibleElements: e6
    } = this.info;
    if (!e6.helpMessage) return null;
    const o7 = t3.tooltips.helpMessage ?? this._defaultHelpMessage;
    if (!o7) return null;
    const s6 = t3.tooltips.helpMessageIcon ?? "information";
    return n("div", {
      class: $,
      key: "help-message"
    }, s6 ? n("calcite-icon", {
      class: h,
      icon: s6,
      scale: "s"
    }) : null, n("div", {
      class: r2
    }, o7));
  }
  get _defaultHelpMessage() {
    const {
      helpMessage: t3,
      viewType: e6
    } = this.info;
    if (null == t3) return null;
    const o7 = "3d" === e6 ? "helpMessages3d" : "helpMessages2d";
    return this._messagesTooltip?.sketch?.[o7]?.[t3];
  }
  _focusField(t3) {
    return __async(this, null, function* () {
      this._focusAbortController?.abort(), this._focusAbortController = new AbortController();
      const {
        signal: e6
      } = this._focusAbortController;
      yield this._waitForInputs(), s(e6);
      const o7 = this._getFocusableInputs(), s6 = t3 ? o7.find((e7) => e7.getAttribute("data-field-name") === t3) : o7.at(0);
      yield S3(s6);
    });
  }
  _transitionTo(t3) {
    return __async(this, null, function* () {
      if (this._mode === t3) return;
      const o7 = () => {
        this._mode = t3;
      };
      if (!this.domNode?.firstChild || !document.startViewTransition || o5()) return void o7();
      this.autoRenderingEnabled = false, this._transition?.skipTransition();
      const s6 = this._transition = document.startViewTransition(() => {
        if (!this.destroyed) return this.autoRenderingEnabled = true, o7(), this.renderNow(), M();
      });
      try {
        yield this._transition.finished;
      } finally {
        s6 === this._transition && (this._transition = null);
      }
    });
  }
  _waitForInputs() {
    return __async(this, null, function* () {
      const t3 = () => Array.from(this.domNode?.querySelectorAll("calcite-input") ?? []);
      for (; 0 === t3().length; ) yield A(L2);
      yield R();
    });
  }
  _getFocusableInputs() {
    return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])") ?? []);
  }
  _getFocusableElements() {
    const t3 = this.domNode?.querySelector(`.${s3}`);
    return [...Array.from(t3?.querySelectorAll(`.${o6} calcite-button:not([disabled])`) ?? []), ...this._getFocusableInputs()];
  }
};
function S3(t3) {
  return __async(this, null, function* () {
    yield t3?.setFocus();
  });
}
function H2(t3) {
  return (Array.isArray(t3) ? t3 : [t3]).flat(10).filter((t4) => !!t4);
}
e([e2("esri/core/t9n/Units"), y()], D2.prototype, "_messagesUnits", void 0), e([e2("esri/views/interactive/tooltip/t9n/Tooltip"), y()], D2.prototype, "_messagesTooltip", void 0), e([y()], D2.prototype, "info", void 0), e([y()], D2.prototype, "tooltip", void 0), e([y()], D2.prototype, "_mode", void 0), e([y()], D2.prototype, "mode", null), e([y()], D2.prototype, "_displayUnits", null), e([y()], D2.prototype, "_inputUnitInfos", null), e([y()], D2.prototype, "_formatters", null), e([y()], D2.prototype, "fieldContext", null), e([y()], D2.prototype, "_renderedContent", null), e([y()], D2.prototype, "_renderedActions", null), e([y()], D2.prototype, "_renderedHelpMessage", null), e([y()], D2.prototype, "_defaultHelpMessage", null), D2 = e([a("esri.views.interactive.tooltip.content.TooltipContent")], D2);
var L2 = 20;

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawCircle.js
var n5 = class extends D2 {
  _renderContent() {
    const {
      area: t3,
      radius: e6,
      xSize: s6,
      ySize: n14,
      visibleElements: a4
    } = this.info, p5 = this._messagesTooltip.sketch, m4 = this._formatters;
    return n(i, null, a4.radius && null != e6 ? n(c2, {
      title: p5.radius,
      value: m4.length(e6)
    }) : null, a4.size && null != s6 && null != n14 ? n(c2, {
      title: p5.size,
      value: n(a3, {
        left: m4.length(s6),
        right: m4.length(n14)
      })
    }) : null, a4.area ? n(c2, {
      title: p5.area,
      value: m4.area(t3)
    }) : null);
  }
};
n5 = e([a("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")], n5);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipEditableField.js
var d3 = `${e5}-editable-field`;
var p3 = {
  base: d3,
  inputMode: `${d3}--input`,
  feedbackMode: `${d3}--feedback`,
  readOnly: `${d3}--read-only`,
  locked: `${d3}--locked`,
  title: `${d3}__title`,
  value: `${d3}__value`,
  valueContent: `${d3}__value__content`,
  valueContentReadOnly: `${d3}__value__content--read-only`,
  lockIcon: `${d3}__lock-icon`,
  input: `${d3}__input`,
  inputSuffix: `${d3}__input-suffix`,
  button: `${d3}__button`
};
var m2 = {
  lock: "lock",
  unlock: "unlock"
};
var h2 = class extends B {
  constructor() {
    super(...arguments), this._input = null, this._onKeyDown = (t3) => {
      t3.key === f3.discard && "input" === this.mode && this._input && this.context.onDiscard(this._input);
    }, this._onInputKeyDown = (t3) => {
      const e6 = this._input;
      if (e6) switch (t3.key) {
        case f3.commit:
          return this.field.onCommit("commit-and-exit", e6, this.context);
        case f3.next: {
          t3.preventDefault(), t3.stopPropagation();
          const i9 = t3.shiftKey ? "commit-and-previous" : "commit-and-next";
          return this.field.onCommit(i9, e6, this.context);
        }
      }
    }, this._onInput = (t3) => {
      this.field.onInput(t3.target.value);
    }, this._onInputBlur = () => {
      const t3 = this._input;
      t3 && this.field.onCommit("commit-on-blur", t3, this.context);
    }, this._selectText = () => {
      const t3 = () => {
        this._input === document.activeElement && this._input?.selectText();
      };
      t3(), R().then(t3);
    };
  }
  initialize() {
    this.addHandles(d(() => this._rawDisplayValue, () => {
      const {
        committed: t3,
        inputValue: e6
      } = this.field;
      t3 || e6 || this._input !== document.activeElement || this._selectText();
    }));
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      input: () => import("./calcite-input-WIKYKTSA.js")
    });
  }
  render() {
    const {
      field: t3,
      mode: e6
    } = this, i9 = "input" === e6, {
      locked: o7,
      readOnly: n14
    } = t3;
    return n("div", {
      class: this.classes({
        [p3.base]: true,
        [p3.feedbackMode]: "feedback" === e6,
        [p3.inputMode]: "input" === e6,
        [p3.locked]: o7,
        [p3.readOnly]: n14
      })
    }, n("div", {
      class: p3.title,
      key: "title"
    }, this._title), n("div", {
      class: p3.value,
      key: "value",
      onkeydown: this._onKeyDown
    }, i9 ? this._renderValueInputMode() : this._renderValueFeedbackMode()));
  }
  get _formattedValue() {
    return this.field.getFormattedValue(this.context) || _3;
  }
  get _rawDisplayValue() {
    return this.field.getRawDisplayValue(this.context);
  }
  get _suffix() {
    return this.field.getSuffix(this.context);
  }
  get _title() {
    const {
      title: t3
    } = this.field;
    return "string" == typeof t3 ? t3 : t3(this.context);
  }
  _renderValueFeedbackMode() {
    return n(i, null, n("div", {
      class: p3.valueContent,
      key: "value-feedback"
    }, this._formattedValue), this.field.locked && "input" !== this.mode ? n("calcite-icon", {
      class: p3.lockIcon,
      icon: m2.lock,
      key: "icon",
      scale: "s"
    }) : null);
  }
  _renderValueInputMode() {
    return this.field.readOnly ? this._renderValueReadOnly() : this._renderValueWritable();
  }
  _renderValueReadOnly() {
    return n("div", {
      class: this.classes(p3.valueContent, p3.valueContentReadOnly),
      key: "value-read-only"
    }, this._formattedValue);
  }
  _renderValueWritable() {
    const {
      field: t3
    } = this, {
      name: e6,
      invalid: i9,
      locked: o7
    } = t3, n14 = this.context?.messages.sketch ?? {}, s6 = o7 ? n14.unlockConstraint : n14.lockConstraint;
    return n(i, null, n("calcite-input", {
      afterCreate: (t4) => {
        this._input = t4;
      },
      class: p3.input,
      "data-field-name": e6,
      "data-testid": `tooltip-field-${e6}`,
      onblur: this._onInputBlur,
      onfocus: this._selectText,
      onkeydown: this._onInputKeyDown,
      scale: "s",
      status: i9 ? "invalid" : "idle",
      type: "text",
      value: this._rawDisplayValue ?? _3,
      onCalciteInputInput: this._onInput
    }), n("div", {
      class: p3.inputSuffix,
      key: "suffix"
    }, this._suffix), t3.lockable ? n("calcite-button", {
      alignment: "center",
      appearance: "transparent",
      class: p3.button,
      "data-testid": `tooltip-field-${e6}-lock`,
      iconStart: o7 ? m2.lock : m2.unlock,
      key: "lock",
      kind: "neutral",
      label: s6,
      onclick: () => {
        t3.toggleLock(this.context);
      },
      scale: "s",
      tabIndex: -1,
      title: s6
    }) : n("div", {
      key: "lock-empty"
    }));
  }
};
e([y()], h2.prototype, "field", void 0), e([y()], h2.prototype, "context", void 0), e([y()], h2.prototype, "mode", void 0), e([y()], h2.prototype, "_input", void 0), e([y()], h2.prototype, "_formattedValue", null), e([y()], h2.prototype, "_rawDisplayValue", null), e([y()], h2.prototype, "_suffix", null), e([y()], h2.prototype, "_title", null), h2 = e([a("esri.views.interactive.tooltip.components.TooltipEditableField")], h2);
var _3 = "—";

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/Fields.js
function i3(i9) {
  const l7 = i9.fields.filter((t3) => true === t3?.visible);
  return 0 === l7.length ? null : n(i, null, l7.map((e6) => n(h2, {
    context: i9.context,
    field: e6,
    key: e6.id,
    mode: i9.mode
  })));
}

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawMesh.js
var s4 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: t3,
      mode: i9
    } = this, {
      visibleElements: s6
    } = t3;
    return n(i3, {
      context: o7,
      fields: [s6.coordinates ? t3.effectiveX : void 0, s6.coordinates ? t3.effectiveY : void 0, s6.elevation ? t3.elevation : void 0, s6.orientation ? t3.orientation : void 0, s6.scale ? t3.scale : void 0],
      mode: i9
    });
  }
};
s4 = e([a("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")], s4);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPoint.js
var i4 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: t3,
      mode: r4
    } = this, {
      elevation: i9,
      visibleElements: n14
    } = t3;
    return n(i3, {
      context: o7,
      fields: [n14.coordinates ? t3.effectiveX : void 0, n14.coordinates ? t3.effectiveY : void 0, n14.elevation ? i9 : void 0],
      mode: r4
    });
  }
};
i4 = e([a("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")], i4);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/components/DrawHeaderActions.js
var p4 = class extends B {
  constructor(e6) {
    super(e6), this.visibleElements = {};
  }
  render() {
    return n("div", {
      class: s3
    }, this._isElementVisible("direction") ? n(l2, {
      messages: this.messages,
      sketchOptions: this.sketchOptions
    }) : null);
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      dropdown: () => import("./calcite-dropdown-ZM6WJ4QW.js"),
      "dropdown-item": () => import("./calcite-dropdown-item-JNHSNNU5.js"),
      "dropdown-group": () => import("./calcite-dropdown-group-N2246TES.js")
    });
  }
  _isElementVisible(e6) {
    return this.visibleElements?.[e6] ?? this.sketchOptions.tooltips.visibleElements[e6];
  }
};
function l2(e6) {
  const {
    directionMode: t3
  } = e6.sketchOptions.values, o7 = e6.messages?.sketch, s6 = o7?.directionModeSelect?.title, r4 = "absolute", c3 = "relative";
  return n("calcite-dropdown", {
    key: "direction-mode",
    placement: "bottom-end",
    scale: "s",
    widthScale: "s",
    onCalciteDropdownSelect: (t4) => {
      const o8 = t4.target.selectedItems?.[0]?.getAttribute("data-mode");
      e6.sketchOptions.values.directionMode = o8 ?? "absolute";
    }
  }, n("calcite-button", {
    alignment: "end",
    appearance: "transparent",
    iconStart: e4[t3],
    kind: "neutral",
    label: s6,
    scale: "s",
    slot: "trigger",
    title: s6
  }), n("calcite-dropdown-group", {
    selectionMode: "single"
  }, n("calcite-dropdown-item", {
    "data-mode": c3,
    "data-testid": "tooltip-direction-mode-relative",
    iconStart: e4.relative,
    key: "relative",
    selected: t3 === c3
  }, o7?.directionModeSelect?.relative), n("calcite-dropdown-item", {
    "data-mode": r4,
    "data-testid": "tooltip-direction-mode-absolute",
    iconStart: e4.absolute,
    key: "absolute",
    selected: t3 === r4
  }, o7?.directionModeSelect?.absolute)));
}
e([e2("esri/views/interactive/tooltip/t9n/Tooltip"), y()], p4.prototype, "messages", void 0), e([y()], p4.prototype, "sketchOptions", void 0), e([y()], p4.prototype, "visibleElements", void 0), p4 = e([a("esri.views.interactive.tooltip.components.DrawHeaderActions")], p4);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolygon.js
var n6 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: e6,
      mode: t3
    } = this, {
      xyMode: r4,
      visibleElements: n14
    } = e6;
    return n(i3, {
      context: o7,
      fields: [..."direction-distance" === r4 ? [n14.direction ? e6.direction : void 0, n14.distance ? e6.distance : void 0] : [n14.coordinates ? e6.effectiveX : void 0, n14.coordinates ? e6.effectiveY : void 0], n14.elevation ? e6.elevation : void 0, n14.area ? e6.area : void 0],
      mode: t3
    });
  }
  _renderActions() {
    const {
      xyMode: o7,
      sketchOptions: e6
    } = this.info;
    return n(p4, {
      sketchOptions: e6,
      visibleElements: {
        direction: "direction-distance" === o7
      }
    });
  }
};
n6 = e([a("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")], n6);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolyline.js
var n7 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: t3,
      mode: e6
    } = this, {
      xyMode: s6,
      visibleElements: n14
    } = t3;
    return n(i3, {
      context: o7,
      fields: [..."direction-distance" === s6 ? [n14.direction ? t3.direction : void 0, n14.distance ? t3.distance : void 0] : [n14.coordinates ? t3.effectiveX : void 0, n14.coordinates ? t3.effectiveY : void 0], n14.elevation ? t3.elevation : void 0, n14.totalLength ? t3.totalLength : void 0],
      mode: e6
    });
  }
  _renderActions() {
    const {
      xyMode: o7,
      sketchOptions: t3
    } = this.info;
    return n(p4, {
      sketchOptions: t3,
      visibleElements: {
        direction: "direction-distance" === o7
      }
    });
  }
};
n7 = e([a("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")], n7);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawRectangle.js
var n8 = class extends D2 {
  _renderContent() {
    const {
      area: t3,
      xSize: e6,
      ySize: s6,
      visibleElements: n14
    } = this.info, a4 = this._messagesTooltip.sketch, p5 = this._formatters;
    return n(i, null, n14.size && null != e6 && null != s6 ? n(c2, {
      title: a4.size,
      value: n(a3, {
        left: p5.length(e6),
        right: p5.length(s6)
      })
    }) : null, n14.area ? n(c2, {
      title: a4.area,
      value: p5.area(t3)
    }) : null);
  }
};
n8 = e([a("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")], n8);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentRotate.js
var n9 = class extends D2 {
  _renderContent() {
    const {
      angle: t3,
      visibleElements: o7
    } = this.info, s6 = this._messagesTooltip.sketch;
    return n(i, null, o7.rotation ? n(c2, {
      title: s6.rotation,
      value: this._formatters.angleRelative(t3)
    }) : null);
  }
};
n9 = e([a("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")], n9);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentScale.js
var n10 = class extends D2 {
  _renderContent() {
    const t3 = this.info, {
      visibleElements: e6
    } = t3, r4 = this._messagesTooltip.sketch, n14 = this._formatters;
    return n(i, null, e6.size ? n(c2, {
      title: r4.size,
      value: n(a3, {
        left: n14.length(t3.xSize),
        right: n14.length(t3.ySize)
      })
    }) : null, e6.scale ? n(c2, {
      title: r4.scale,
      value: n(a3, {
        left: n14.scale(t3.xScale),
        right: n14.scale(t3.yScale)
      })
    }) : null);
  }
};
n10 = e([a("esri.views.interactive.tooltip.content.TooltipContentExtentScale")], n10);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentMovePoint.js
var i5 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: t3,
      mode: r4
    } = this, {
      visibleElements: i9
    } = t3;
    return n(i3, {
      context: o7,
      fields: [i9.coordinates ? t3.effectiveX : void 0, i9.coordinates ? t3.effectiveY : void 0, i9.elevation ? t3.elevation : void 0],
      mode: r4
    });
  }
};
i5 = e([a("esri.views.interactive.tooltip.content.TooltipContentMovePoint")], i5);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentReshapeEdgeOffset.js
var l3 = class extends D2 {
  _renderContent() {
    const {
      area: t3,
      distance: e6,
      totalLength: s6,
      visibleElements: l7
    } = this.info, n14 = this._messagesTooltip.sketch, a4 = this._formatters;
    return n(i, null, l7.distance ? n(c2, {
      title: n14.distance,
      value: a4.lengthRelative(e6)
    }) : null, l7.area && null != t3 ? n(c2, {
      title: n14.area,
      value: a4.area(t3)
    }) : null, l7.totalLength && null != s6 ? n(c2, {
      title: n14.totalLength,
      value: a4.length(s6)
    }) : null);
  }
};
l3 = e([a("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")], l3);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentSelectedVertex.js
var i6 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: e6,
      info: o7,
      mode: r4
    } = this, {
      visibleElements: i9
    } = o7;
    return n(i3, {
      context: e6,
      fields: [i9.coordinates ? o7.effectiveX : void 0, i9.coordinates ? o7.effectiveY : void 0, i9.elevation ? o7.elevation : void 0, i9.area && "polygon" === o7.geometryType ? o7.area : null, i9.totalLength && "polyline" === o7.geometryType ? o7.totalLength : null],
      mode: r4
    });
  }
};
i6 = e([a("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")], i6);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformAbsolute.js
var l4 = class extends D2 {
  _renderContent() {
    const {
      info: t3
    } = this, {
      visibleElements: e6
    } = t3, s6 = this._messagesTooltip.sketch, l7 = this._formatters;
    return n(i, null, e6.orientation && null != t3.orientation ? n(c2, {
      key: "orientation",
      title: s6.orientation,
      value: U(t3.orientation, t3.rotationType, t3.orientationPrecision)
    }) : null, e6.size && null != t3.size ? n(c2, {
      key: "size",
      title: s6.size,
      value: l7.length(t3.size, t3.sizeUnit, t3.sizePrecision)
    }) : null);
  }
};
l4 = e([a("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")], l4);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformMesh.js
var s5 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: t3,
      mode: i9
    } = this, {
      visibleElements: s6
    } = t3;
    return n(i3, {
      context: o7,
      fields: [s6.coordinates ? t3.effectiveX : void 0, s6.coordinates ? t3.effectiveY : void 0, s6.elevation ? t3.elevation : void 0, s6.orientation ? t3.orientation : void 0, s6.scale ? t3.scale : void 0],
      mode: i9
    });
  }
};
s5 = e([a("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")], s5);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformPoint.js
var i7 = class extends D2 {
  _renderContent() {
    const {
      fieldContext: o7,
      info: t3,
      mode: r4
    } = this, {
      visibleElements: i9
    } = t3;
    return n(i3, {
      context: o7,
      fields: [i9.coordinates ? t3.effectiveX : void 0, i9.coordinates ? t3.effectiveY : void 0, i9.elevation ? t3.elevation : void 0],
      mode: r4
    });
  }
};
i7 = e([a("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")], i7);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformRotate.js
var l5 = class extends D2 {
  _renderContent() {
    const {
      info: o7
    } = this, {
      visibleElements: i9
    } = o7, n14 = this._messagesTooltip.sketch;
    return n(i, null, i9.rotation && null != o7.rotation ? n(c2, {
      key: "rotation",
      title: n14.rotation,
      value: q(o7.rotation, o7.rotationType, o7.rotationPrecision)
    }) : null, i9.orientation && null != o7.orientation ? n(c2, {
      key: "orientation",
      title: n14.orientation,
      value: U(o7.orientation, o7.rotationType, o7.orientationPrecision)
    }) : null);
  }
};
l5 = e([a("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")], l5);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformScale.js
var l6 = class extends D2 {
  _renderContent() {
    const {
      info: e6
    } = this, {
      visibleElements: s6
    } = e6, o7 = this._messagesTooltip.sketch, l7 = this._formatters;
    return n(i, null, s6.scale && null != e6.scale ? n(c2, {
      key: "scale",
      title: o7.scale,
      value: l7.percentage(e6.scale)
    }) : null, s6.size && null != e6.size ? n(c2, {
      key: "size",
      title: o7.size,
      value: l7.length(e6.size, e6.sizeUnit, e6.sizePrecision)
    }) : null);
  }
};
l6 = e([a("esri.views.interactive.tooltip.content.TooltipContentTransformScale")], l6);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslate.js
var n11 = class extends D2 {
  _renderContent() {
    const {
      info: t3
    } = this, {
      visibleElements: o7
    } = t3, e6 = this._messagesTooltip.sketch, n14 = this._formatters;
    return n(i, null, o7.distance ? n(c2, {
      title: e6.distance,
      value: n14.length(t3.distance)
    }) : null);
  }
};
n11 = e([a("esri.views.interactive.tooltip.content.TooltipContentTranslate")], n11);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateVertex.js
var i8 = class extends D2 {
  _renderContent() {
    const {
      distance: t3,
      elevation: e6,
      area: l7,
      totalLength: i9,
      visibleElements: n14
    } = this.info, a4 = this._messagesTooltip.sketch, c3 = this._formatters;
    return n(i, null, n14.distance ? n(c2, {
      title: a4.distance,
      value: c3.length(t3)
    }) : null, n14.elevation && null != e6?.actual ? n(c2, {
      title: a4.elevation,
      value: c3.verticalLength(e6.actual)
    }) : null, n14.area && null != l7 ? n(c2, {
      title: a4.area,
      value: c3.area(l7)
    }) : null, n14.totalLength && null != i9 ? n(c2, {
      title: a4.totalLength,
      value: c3.length(i9)
    }) : null);
  }
};
i8 = e([a("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")], i8);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateXY.js
var n12 = class extends D2 {
  _renderContent() {
    const {
      info: t3
    } = this, {
      visibleElements: o7
    } = t3, e6 = this._messagesTooltip.sketch, n14 = this._formatters;
    return n(i, null, o7.distance ? n(c2, {
      title: e6.distance,
      value: n14.length(t3.distance)
    }) : null);
  }
};
n12 = e([a("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")], n12);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateZ.js
var n13 = class extends D2 {
  _renderContent() {
    const {
      info: t3
    } = this, {
      visibleElements: o7
    } = t3, e6 = this._messagesTooltip.sketch;
    return n(i, null, o7.distance ? n(c2, {
      title: e6.distance,
      value: this._formatters.verticalLengthRelative(t3.distance)
    }) : null);
  }
};
n13 = e([a("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")], n13);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/content/tooltipContentFactory.js
function h3(h5, g3) {
  if (null == g3) return null;
  const y3 = document.createElement("div");
  switch (g3.type) {
    case "draw-point":
      return new i4({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "draw-polygon":
      return new n6({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "draw-polyline":
      return new n7({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "draw-mesh":
      return new s4({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "draw-rectangle":
      return new n8({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "draw-circle":
      return new n5({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "extent-rotate":
      return new n9({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "extent-scale":
      return new n10({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "move-point":
      return new i5({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "selected-vertex":
      return new i6({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "transform-absolute":
      return new l4({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "transform-point":
      return new i7({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "transform-mesh":
      return new s5({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "transform-rotate":
      return new l5({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "transform-scale":
      return new l6({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "translate":
      return new n11({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "translate-vertex":
      return new i8({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "translate-z":
      return new n13({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "translate-xy":
      return new n12({
        tooltip: h5,
        info: g3,
        container: y3
      });
    case "reshape-edge-offset":
      return new l3({
        tooltip: h5,
        info: g3,
        container: y3
      });
  }
}

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/Tooltip.js
var u2 = {
  base: `${e5}`
};
var h4 = class extends o2.EventedAccessor {
  constructor(t3) {
    super(t3), this.info = null, this.position = null, this.content = null, this.contentContainer = (() => {
      const t4 = document.createElement("div");
      return t4.classList.add(u2.base), n2(t4), t4;
    })();
  }
  initialize() {
    const {
      contentContainer: t3
    } = this;
    this.addHandles([d(() => this.view.overlay?.surface, (o7) => {
      t3.remove(), o7?.appendChild(t3);
    }, A2), d(() => this.info, (o7, e6) => {
      if (null != this.content && null != o7 && null != e6 && o7.type === e6.type) this.content.info = o7;
      else {
        this.content = u(this.content);
        const e7 = h3(this, o7);
        e7 && (this.content = e7, e7.container && t3.appendChild(e7.container), this.exitInputMode());
      }
    }, A2), d(() => ({
      container: this.contentContainer,
      content: this.content,
      screenPoint: this._screenPoint,
      positionMode: this.positionMode,
      position: this.position
    }), m3, A2), o(this.contentContainer, "paste", (t4) => {
      this.emit("paste", t4);
    })]);
  }
  destroy() {
    this.info = null, this.content = u(this.content), this.contentContainer.remove();
  }
  get positionMode() {
    return "input" === this.content?.mode ? "fixed" : "follow-cursor";
  }
  get mode() {
    return this.content?.mode ?? "feedback";
  }
  get _screenPoint() {
    const {
      inputManager: t3
    } = this.view;
    return t3?.multiTouchActive ? null : t3?.latestPointerLocation;
  }
  get visible() {
    return "none" !== this.contentContainer?.style.display;
  }
  clear() {
    this.info = null;
  }
  enterInputMode(t3) {
    return __async(this, null, function* () {
      yield this.content?.enterInputMode(t3);
    });
  }
  exitInputMode(t3) {
    return __async(this, null, function* () {
      yield this.content?.exitInputMode(t3);
    });
  }
};
function m3(t3) {
  if ("fixed" === t3.positionMode && !t3.position) return;
  const {
    style: o7
  } = t3.container, e6 = t3.position ?? t3.screenPoint;
  if (null != e6 && null != t3.content) {
    o7.display = "block";
    const n14 = g(t3.container), i9 = `translate(${Math.round(e6.x) + f4[0] * (n14 ? -1 : 1)}px, ${Math.round(e6.y) + f4[1]}px)`;
    o7.transform = n14 ? `translate(-100%, 0) ${i9}` : i9;
  } else o7.display = "none";
}
e([y({
  nonNullable: true
})], h4.prototype, "view", void 0), e([y()], h4.prototype, "info", void 0), e([y()], h4.prototype, "positionMode", null), e([y()], h4.prototype, "position", void 0), e([y()], h4.prototype, "content", void 0), e([y()], h4.prototype, "mode", null), e([y()], h4.prototype, "contentContainer", void 0), e([y()], h4.prototype, "_screenPoint", null), h4 = e([a("esri.views.interactive.tooltip.Tooltip")], h4);
var f4 = [20, 20];

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/SketchTooltipInfo.js
var r3 = class extends S {
  constructor(e6) {
    super(e6), this.helpMessage = void 0, this.viewType = void 0;
  }
  get visibleElements() {
    return this.sketchOptions.tooltips.visibleElements;
  }
  get allFields() {
    return [];
  }
  get editableFields() {
    return this.allFields.filter((e6) => e6.visible && !e6.readOnly);
  }
  clearInputValues() {
    this.allFields.forEach((e6) => e6.clearInputValue());
  }
};
e([y()], r3.prototype, "sketchOptions", void 0), e([y()], r3.prototype, "visibleElements", null), e([y()], r3.prototype, "helpMessage", void 0), e([y()], r3.prototype, "viewType", void 0), e([y()], r3.prototype, "allFields", null), e([y()], r3.prototype, "editableFields", null), r3 = e([a("esri.views.interactive.tooltip.infos.SketchTooltipInfo")], r3);

export {
  L,
  A3 as A,
  B2 as B,
  M2 as M,
  G,
  H,
  J,
  K,
  r3 as r,
  h4 as h
};
//# sourceMappingURL=chunk-7B3BAV5J.js.map
