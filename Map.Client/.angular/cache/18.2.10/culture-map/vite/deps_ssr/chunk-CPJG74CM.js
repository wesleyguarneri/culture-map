import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-BGSY2E4G.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  m,
  o
} from "./chunk-C2OXE4NQ.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import {
  j,
  v
} from "./chunk-2JI245BP.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/widgets/support/timeWidgetUtils.js
var f = {
  hour: "numeric",
  minute: "numeric",
  timeZone: "UTC"
};
var l = {
  hour: "numeric",
  timeZone: "UTC"
};
function m2(t, e4) {
  const n2 = c(t, e4);
  let s = j(n2, f);
  return 0 !== t && "00:00" === s && (s = "24:00"), "tick" === e4 && s.includes(" ") && (s = j(n2, l), s = s.replace(":00", "")), s;
}
function r2({
  tickElement: t,
  labelElement: e4,
  tickClasses: o2 = [],
  onClick: n2
}) {
  t && e4 && (t.classList.add(...o2, e3.primaryTick), e4.classList.add(...o2, e3.primaryTickLabel), n2 && (e4.onclick = t.onclick = () => n2()));
}
function u2({
  tickElement: t,
  tickClasses: e4 = [],
  onClick: o2
}) {
  t && (t.classList.add(...e4, e3.secondaryTick), o2 && (t.onclick = () => o2()));
}
function z() {
  return v(l).formatToParts(c(0, "value")).some(({
    type: t
  }) => "dayPeriod" === t);
}
function c(e4, o2) {
  if ("tick" === o2) {
    const o3 = Math.round(m(e4, "minutes", "hours"));
    return new Date(m(o3, "hours", "milliseconds"));
  }
  return new Date(6e4 * e4);
}
function a2(t, o2, n2, i) {
  if (null == o2 || null == n2) return null;
  const f2 = u.getTimes(t, o2, n2), l3 = f2.sunrise, m4 = f2.sunset, r3 = o(t, i, "hours"), u4 = o(l3, i, "hours"), z2 = o(m4, i, "hours");
  if (r3.getUTCDate() !== u4.getUTCDate() || r3.getUTCDate() !== z2.getUTCDate()) {
    const t2 = r3.getTime() - u4.getTime() > 0 ? 1 : -1;
    l3.setUTCDate(l3.getUTCDate() + t2), m4.setUTCDate(m4.getUTCDate() + t2);
  }
  return {
    sunrise: l3,
    sunset: m4
  };
}
function h(t) {
  return [{
    utcOffset: -12,
    short: "UTC-12",
    long: t.timezoneDateline
  }, {
    utcOffset: -11,
    short: "UTC-11",
    long: t.timezoneSamoa
  }, {
    utcOffset: -10,
    short: t.timezoneHAST,
    long: t.timezoneHawaii
  }, {
    utcOffset: -9,
    short: t.timezoneAKST,
    long: t.timezoneAlaska
  }, {
    utcOffset: -8,
    short: t.timezonePST,
    long: t.timezoneBaja
  }, {
    utcOffset: -7,
    short: t.timezoneMST,
    long: t.timezoneMountain
  }, {
    utcOffset: -7,
    short: t.timezoneMST,
    long: t.timezoneLaPaz
  }, {
    utcOffset: -7,
    short: t.timezoneMST,
    long: t.timezoneArizona
  }, {
    utcOffset: -6,
    short: t.timezoneCST,
    long: t.timezoneSaskatchewan
  }, {
    utcOffset: -6,
    short: t.timezoneCST,
    long: t.timezoneCentralAmerica
  }, {
    utcOffset: -6,
    short: t.timezoneCST,
    long: t.timezoneCentralTime
  }, {
    utcOffset: -6,
    short: t.timezoneCST,
    long: t.timezoneMexico
  }, {
    utcOffset: -5,
    short: t.timezoneEST,
    long: t.timezoneEasternUS
  }, {
    utcOffset: -5,
    short: t.timezoneEST,
    long: t.timezoneLima
  }, {
    utcOffset: -5,
    short: t.timezoneEST,
    long: t.timezoneIndiana
  }, {
    utcOffset: -4,
    short: null,
    long: t.timezoneAtlantic
  }, {
    utcOffset: -4,
    short: null,
    long: t.timezoneCuiaba
  }, {
    utcOffset: -4,
    short: null,
    long: t.timezoneSantiago
  }, {
    utcOffset: -4,
    short: null,
    long: t.timezoneManaus
  }, {
    utcOffset: -4,
    short: null,
    long: t.timezoneAsuncion
  }, {
    utcOffset: -3,
    short: null,
    long: t.timezoneBrasilia
  }, {
    utcOffset: -3,
    short: null,
    long: t.timezoneGreenland
  }, {
    utcOffset: -3,
    short: null,
    long: t.timezoneMontevideo
  }, {
    utcOffset: -3,
    short: null,
    long: t.timezoneCayenne
  }, {
    utcOffset: -3,
    short: null,
    long: t.timezoneBuenosAires
  }, {
    utcOffset: -2,
    short: null,
    long: t.timezoneMidAtlantic
  }, {
    utcOffset: -1,
    short: null,
    long: t.timezoneAzores
  }, {
    utcOffset: -1,
    short: null,
    long: t.timezoneCaboVerde
  }, {
    utcOffset: 0,
    short: null,
    long: t.timezoneDublin
  }, {
    utcOffset: 0,
    short: null,
    long: t.timezoneReykjavik
  }, {
    utcOffset: 0,
    short: null,
    long: t.timezoneCasablanca
  }, {
    utcOffset: 1,
    short: t.timezoneCET,
    long: t.timezoneBelgrade
  }, {
    utcOffset: 1,
    short: t.timezoneCET,
    long: t.timezoneSarajevo
  }, {
    utcOffset: 1,
    short: t.timezoneCET,
    long: t.timezoneBrussels
  }, {
    utcOffset: 1,
    short: t.timezoneCET,
    long: t.timezoneWCAfrica
  }, {
    utcOffset: 1,
    short: t.timezoneCET,
    long: t.timezoneAmsterdam
  }, {
    utcOffset: 1,
    short: t.timezoneCET,
    long: t.timezoneWindhoek
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneMinsk
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneCairo
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneHelsinki
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneAthens
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneJerusalem
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneAmman
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneBeirut
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneHarare
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneDamascus
  }, {
    utcOffset: 2,
    short: t.timezoneEET,
    long: t.timezoneIstanbul
  }, {
    utcOffset: 3,
    short: t.timezoneMSK,
    long: t.timezoneKuwait
  }, {
    utcOffset: 3,
    short: t.timezoneMSK,
    long: t.timezoneBaghdad
  }, {
    utcOffset: 3,
    short: t.timezoneMSK,
    long: t.timezoneNairobi
  }, {
    utcOffset: 3,
    short: t.timezoneMSK,
    long: t.timezoneKaliningrad
  }, {
    utcOffset: 4,
    short: t.timezoneGST,
    long: t.timezoneMoscow
  }, {
    utcOffset: 4,
    short: t.timezoneGST,
    long: t.timezoneMuscat
  }, {
    utcOffset: 4,
    short: t.timezoneGST,
    long: t.timezoneBaku
  }, {
    utcOffset: 4,
    short: t.timezoneGST,
    long: t.timezoneYerevan
  }, {
    utcOffset: 4,
    short: t.timezoneGST,
    long: t.timezoneTbilisi
  }, {
    utcOffset: 4,
    short: t.timezoneGST,
    long: t.timezonePortLouis
  }, {
    utcOffset: 5,
    short: null,
    long: t.timezoneTashkent
  }, {
    utcOffset: 5,
    short: null,
    long: t.timezoneIslamabad
  }, {
    utcOffset: 6,
    short: null,
    long: t.timezoneEkaterinburg
  }, {
    utcOffset: 6,
    short: null,
    long: t.timezoneAstana
  }, {
    utcOffset: 6,
    short: null,
    long: t.timezoneDhaka
  }, {
    utcOffset: 7,
    short: t.timezoneICT,
    long: t.timezoneNovosibirsk
  }, {
    utcOffset: 7,
    short: t.timezoneICT,
    long: t.timezoneBangkok
  }, {
    utcOffset: 8,
    short: t.timezoneCCT,
    long: t.timezoneKrasnoyarsk
  }, {
    utcOffset: 8,
    short: t.timezoneCCT,
    long: t.timezoneBeijing
  }, {
    utcOffset: 8,
    short: t.timezoneCCT,
    long: t.timezoneSingapore
  }, {
    utcOffset: 8,
    short: t.timezoneCCT,
    long: t.timezoneTaipei
  }, {
    utcOffset: 8,
    short: t.timezoneCCT,
    long: t.timezonePerth
  }, {
    utcOffset: 8,
    short: t.timezoneCCT,
    long: t.timezoneUlaanbaatar
  }, {
    utcOffset: 9,
    short: t.timezoneJST,
    long: t.timezoneIrkutsk
  }, {
    utcOffset: 9,
    short: t.timezoneJST,
    long: t.timezoneSeoul
  }, {
    utcOffset: 9,
    short: t.timezoneJST,
    long: t.timezoneOsaka
  }, {
    utcOffset: 10,
    short: t.timezoneAEST,
    long: t.timezoneYakutsk
  }, {
    utcOffset: 10,
    short: t.timezoneAEST,
    long: t.timezoneCanberra
  }, {
    utcOffset: 10,
    short: t.timezoneAEST,
    long: t.timezoneBrisbane
  }, {
    utcOffset: 10,
    short: t.timezoneAEST,
    long: t.timezoneHobart
  }, {
    utcOffset: 10,
    short: t.timezoneAEST,
    long: t.timezoneGuam
  }, {
    utcOffset: 11,
    short: null,
    long: t.timezoneVladivostok
  }, {
    utcOffset: 11,
    short: null,
    long: t.timezoneSolomon
  }, {
    utcOffset: 12,
    short: t.timezoneNZST,
    long: t.timezoneMagadan
  }, {
    utcOffset: 12,
    short: t.timezoneNZST,
    long: t.timezoneFiji
  }, {
    utcOffset: 12,
    short: t.timezoneNZST,
    long: t.timezoneAuckland
  }, {
    utcOffset: 12,
    short: t.timezoneNZST,
    long: t.timezoneNukualofa
  }].map(({
    utcOffset: t2,
    short: e4,
    long: o2
  }) => {
    const n2 = t2 > 0 ? `UTC+${t2}` : t2 < 0 ? `UTC${t2}` : "GMT";
    return e4 ? {
      utcOffset: t2,
      short: e4,
      shortWithUTC: `${n2} (${e4})`,
      long: o2
    } : {
      utcOffset: t2,
      short: n2,
      shortWithUTC: n2,
      long: o2
    };
  });
}

// ../../../node_modules/@arcgis/core/widgets/support/TimezonePicker.js
var p = "esri-timezone-picker";
var l2 = {
  base: p,
  trigger: `${p}__trigger`,
  itemTitle: `${p}__item-title`,
  itemDescription: `${p}__item_description`
};
var d = class extends B {
  constructor(t, e4) {
    super(t, e4), this.value = null, this.onChange = null, this.open = false, this.onOpen = null, this.onClose = null, this._selectedId = null, this._onOpen = () => {
      this.open = true, this.onOpen?.();
    }, this._onClose = () => {
      this.open = false, this.onClose?.();
    }, this._killEvent = (t2) => (t2.stopPropagation(), true), this._onChange = (t2) => {
      const e5 = t2.target, o2 = e5.selectedItems?.[0].getAttribute("data-id"), s = a3(this._gmtOffsets, o2)?.utcOffset;
      s && (this._selectedId = o2, this.onChange?.(s));
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      dropdown: () => import("./calcite-dropdown-ZM6WJ4QW.js"),
      "dropdown-group": () => import("./calcite-dropdown-group-N2246TES.js"),
      "dropdown-item": () => import("./calcite-dropdown-item-JNHSNNU5.js")
    });
  }
  render() {
    const t = this._messages;
    if (!t) return n("div", {
      class: l2.base,
      key: "empty"
    });
    const e4 = this._selectedItem, o2 = u3(e4);
    return n("div", {
      class: l2.base,
      key: "container",
      onpointerdown: this._killEvent
    }, n("calcite-dropdown", {
      open: this.open,
      overlayPositioning: "fixed",
      placement: "bottom-end",
      scale: "s",
      onCalciteDropdownClose: this._onClose,
      onCalciteDropdownOpen: this._onOpen,
      onCalciteDropdownSelect: this._onChange
    }, n("calcite-button", {
      appearance: "transparent",
      class: l2.trigger,
      "data-testid": "timezone-picker-button",
      key: "trigger",
      kind: "neutral",
      scale: "s",
      slot: "trigger",
      tabIndex: 0,
      title: t.chooseTimezone
    }, e4?.short ?? ""), n("calcite-dropdown-group", {
      selectionMode: "single"
    }, this._gmtOffsets.map((t2) => {
      const e5 = u3(t2);
      return n("calcite-dropdown-item", {
        "data-id": e5,
        key: e5,
        selected: o2 === e5
      }, n("div", {
        class: l2.itemTitle,
        key: "title"
      }, t2.shortWithUTC), n("div", {
        class: l2.itemDescription,
        key: "description"
      }, t2.long));
    }))));
  }
  get _gmtOffsets() {
    const t = this._messages;
    return t ? h(t) : [];
  }
  get _selectedItem() {
    const t = this._gmtOffsets, e4 = this.value, o2 = a3(t, this._selectedId);
    return o2?.utcOffset === e4 ? o2 : m3(t, e4);
  }
};
function a3(t, e4) {
  return t.find((t2) => u3(t2) === e4);
}
function m3(t, e4) {
  return t.find((t2) => t2.utcOffset === e4);
}
function u3(t) {
  return t ? `${t.utcOffset}-${t.long}` : void 0;
}
e([y()], d.prototype, "value", void 0), e([y()], d.prototype, "onChange", void 0), e([y()], d.prototype, "open", void 0), e([y()], d.prototype, "onOpen", void 0), e([y()], d.prototype, "onClose", void 0), e([y(), e2("esri/widgets/support/t9n/timezone")], d.prototype, "_messages", void 0), e([y()], d.prototype, "_gmtOffsets", null), e([y()], d.prototype, "_selectedItem", null), e([y()], d.prototype, "_selectedId", void 0), d = e([a("esri.widgets.support.TimezonePicker")], d);

export {
  f,
  m2 as m,
  r2 as r,
  u2 as u,
  z,
  a2 as a,
  d
};
//# sourceMappingURL=chunk-CPJG74CM.js.map
