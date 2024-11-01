import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  defineCustomElement as defineCustomElement4
} from "./chunk-FIPYJJUZ.js";
import {
  Heading
} from "./chunk-26WMHNH4.js";
import {
  FloatingCSS,
  connectFloatingUI,
  defaultMenuPlacement,
  disconnectFloatingUI,
  filterValidFlipPlacements,
  reposition
} from "./chunk-FFCABFWN.js";
import "./chunk-6J7SHXU3.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-BMGXHOVM.js";
import {
  syncHiddenFormInput
} from "./chunk-ZFSZO3AF.js";
import {
  Validation
} from "./chunk-FZPWZBJV.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-WIAYKTPO.js";
import {
  HiddenFormInputSlot,
  connectForm,
  disconnectForm,
  submitForm
} from "./chunk-BJU43354.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
import {
  connectLabel,
  disconnectLabel
} from "./chunk-YJ576OO7.js";
import {
  activateFocusTrap,
  connectFocusTrap,
  deactivateFocusTrap
} from "./chunk-IZRKG5Z7.js";
import {
  onToggleOpenCloseComponent
} from "./chunk-XKIWE4VL.js";
import "./chunk-L4CMR4WM.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-JQGPN2VA.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  connectLocalized,
  disconnectLocalized,
  getDateFormatSupportedLocale,
  getDateTimeFormat,
  getSupportedLocale,
  getSupportedNumberingSystem,
  numberStringFormatter
} from "./chunk-G3GRZSKY.js";
import {
  isActivationKey,
  numberKeys
} from "./chunk-HCYVIRBF.js";
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import "./chunk-OOEWT25O.js";
import {
  isBrowser
} from "./chunk-7JIACICA.js";
import {
  getIconScale
} from "./chunk-SJNQ3G2B.js";
import {
  closestElementCrossShadowBoundary,
  focusFirstTabbable,
  guid,
  toAriaBoolean
} from "./chunk-AHYZNZSK.js";
import "./chunk-IE4UBD3F.js";
import {
  Fragment,
  H,
  Host,
  createEvent,
  getAssetPath,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/date.js
function inRange(date, min, max) {
  if (!date) {
    return;
  }
  const time = date.getTime();
  const afterMin = !(min instanceof Date) || time >= min.getTime();
  const beforeMax = !(max instanceof Date) || time <= max.getTime();
  return afterMin && beforeMax;
}
function dateFromRange(date, min, max) {
  if (!(date instanceof Date)) {
    return null;
  }
  const time = date.getTime();
  const beforeMin = min instanceof Date && time < min.getTime();
  const afterMax = max instanceof Date && time > max.getTime();
  if (beforeMin) {
    return min;
  }
  if (afterMax) {
    return max;
  }
  return date;
}
function dateFromISO(iso8601, isEndDate = false) {
  if (iso8601 instanceof Date) {
    return iso8601;
  }
  if (!iso8601 || typeof iso8601 !== "string") {
    return null;
  }
  const d = iso8601.split(/[: T-]/).map(parseFloat);
  const date = new Date(d[0], (d[1] || 1) - 1, d[2] || 1);
  date.setFullYear(d[0]);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid ISO 8601 date: "${iso8601}"`);
  }
  if (isEndDate) {
    return setEndOfDay(date);
  }
  return date;
}
function dateFromLocalizedString(value, localeData) {
  if (!localeData) {
    return null;
  }
  const {
    separator
  } = localeData;
  const parts = parseDateString(value, localeData);
  const {
    day,
    month
  } = parts;
  const year = parseCalendarYear(parts.year, localeData);
  const date = new Date(year, month, day);
  date.setFullYear(year);
  const validDay = day > 0;
  const validMonth = month > -1;
  const validDate = !isNaN(date.getTime());
  const validLength = value.split(separator).filter((c) => c).length > 2;
  const validYear = year.toString().length > 0;
  if (validDay && validMonth && validDate && validLength && validYear) {
    return date;
  }
  return null;
}
function parseCalendarYear(year, localeData) {
  return processCalendarYear(year, localeData, "read");
}
function formatCalendarYear(year, localeData) {
  return processCalendarYear(year, localeData, "write");
}
function processCalendarYear(year, localeData, mode) {
  if (localeData["default-calendar"] !== "buddhist") {
    return year;
  }
  const BUDDHIST_CALENDAR_YEAR_OFFSET = 543;
  const yearOffset = BUDDHIST_CALENDAR_YEAR_OFFSET * (mode === "read" ? -1 : 1);
  return year + yearOffset;
}
function datePartsFromLocalizedString(string, localeData) {
  const {
    separator,
    unitOrder
  } = localeData;
  const order = getOrder(unitOrder);
  const values = string.split(separator).map((part) => numberStringFormatter.delocalize(part));
  const day = values[order.indexOf("d")];
  const month = values[order.indexOf("m")];
  const year = values[order.indexOf("y")];
  return {
    day,
    month,
    year
  };
}
function dateToISO(date) {
  if (date instanceof Date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(4, "0");
    return `${year}-${month}-${day}`;
  }
  return "";
}
function datePartsFromISO(isoDate) {
  const dateParts = isoDate.split("-");
  return {
    day: dateParts[2],
    month: dateParts[1],
    year: dateParts[0]
  };
}
function sameDate(d1, d2) {
  return d1 instanceof Date && d2 instanceof Date && d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}
function prevMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month - 1);
  if (month === nextDate.getMonth()) {
    return new Date(date.getFullYear(), month, 0);
  }
  return nextDate;
}
function nextMonth(date) {
  const month = date.getMonth();
  const nextDate = new Date(date);
  nextDate.setMonth(month + 1);
  if ((month + 2) % 7 === nextDate.getMonth() % 7) {
    return new Date(date.getFullYear(), month + 2, 0);
  }
  return nextDate;
}
function parseDateString(string, localeData) {
  const {
    day,
    month,
    year
  } = datePartsFromLocalizedString(string, localeData);
  return {
    day: parseInt(day),
    month: parseInt(month) - 1,
    // this subtracts by 1 because the month in the Date constructor is zero-based https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    year: parseInt(year)
  };
}
function getOrder(unitOrder) {
  const signifiers = ["d", "m", "y"];
  const order = unitOrder.toLowerCase();
  return signifiers.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
function getDaysDiff(date1, date2) {
  const ts1 = date1.getTime();
  const ts2 = date2.getTime();
  return (ts1 - ts2) / (1e3 * 3600 * 24);
}
function setEndOfDay(date) {
  date.setHours(23, 59, 59, 999);
  return date;
}

// ../../../node_modules/@esri/calcite-components/dist/components/date-picker-day.js
var datePickerDayCss = ':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;cursor:pointer;color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.day-v-wrapper{flex:1 1 auto}.day-wrapper{position:relative;display:flex;flex-direction:column;align-items:center}:host([range]) .day-wrapper::before,:host([range]) .day-wrapper::after,:host([range-hover]) .day-wrapper::before,:host([range-hover]) .day-wrapper::after{pointer-events:none;position:absolute;inset-block:0;content:"";block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.day{z-index:var(--calcite-z-index);display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent;block-size:var(--calcite-internal-day-size);inline-size:var(--calcite-internal-day-size)}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]){--calcite-internal-day-size:27px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-day-size:33px}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding:0px}:host([scale=m]) .day{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-day-size:43px}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{font-size:var(--calcite-font-size-0)}:host(:not([current-month])) .day{opacity:var(--calcite-opacity-disabled)}:host(:hover:not([disabled]):not([selected])) .day,:host([active]:not([range]):not([selected])) .day{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-color-brand);color:var(--calcite-color-foreground-1)}:host(:focus:not([disabled])) .day,:host([start-of-range]:not(:focus)) .day,:host([end-of-range]:not(:focus)) .day{box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}:host([range-hover]:not([selected])) .day-wrapper::before,:host([highlighted]:not([selected])) .day-wrapper::before{inset-inline-end:50%;border-radius:0}:host([range-hover]:not([selected])) .day-wrapper::after,:host([highlighted]:not([selected])) .day-wrapper::after{inset-inline-start:50%;border-radius:0}:host([range-hover]:not([selected])) .day,:host([highlighted]:not([selected])) .day{color:var(--calcite-color-text-1)}:host([highlighted]) .day-wrapper::before,:host([highlighted]) .day-wrapper::after,:host([selected]:not(.hover--outside-range)) .day-wrapper::before,:host([selected]:not(.hover--outside-range)) .day-wrapper::after{background-color:var(--calcite-color-foreground-current)}:host([range-hover]:not([selected])) .day-wrapper::before,:host([range-hover]:not([selected])) .day-wrapper::after{background-color:var(--calcite-color-foreground-2)}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper::before,:host([highlighted][end-of-range]) .day-wrapper::before,:host([highlighted][range-edge=end]) .day-wrapper::before,:host([range-hover][range-edge=end]) .day-wrapper::before,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper::before{inset-inline-end:50%}:host(:hover[range-hover]:not([selected]).focused--end) .day-wrapper::after,:host([highlighted][end-of-range]) .day-wrapper::after,:host([highlighted][range-edge=end]) .day-wrapper::after,:host([range-hover][range-edge=end]) .day-wrapper::after,:host(:hover[range-hover].focused--end.hover--outside-range) .day-wrapper::after{inset-inline-start:50%;border-start-end-radius:var(--calcite-internal-day-size);border-end-end-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper::before,:host([highlighted][range-edge=start]) .day-wrapper::before,:host([range-hover][range-edge=start]) .day-wrapper::before,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper::before,:host([start-of-range].hover--inside-range) .day-wrapper::before,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper::before{inset-inline-end:50%;border-start-start-radius:var(--calcite-internal-day-size);border-end-start-radius:var(--calcite-internal-day-size);inline-size:calc(var(--calcite-internal-day-size) / 2)}:host([highlighted][start-of-range]) .day-wrapper::after,:host([highlighted][range-edge=start]) .day-wrapper::after,:host([range-hover][range-edge=start]) .day-wrapper::after,:host(:hover[range-hover]:not([selected]).focused--start) .day-wrapper::after,:host([start-of-range].hover--inside-range) .day-wrapper::after,:host(:hover[range-hover].focused--start.hover--outside-range) .day-wrapper::after{inset-inline-start:50%}:host([range-hover][start-of-range][range-edge=end]) .day-wrapper::after,:host([range-hover][start-of-range][range-edge=end]) .day-wrapper::before,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper::after,:host([range-hover][end-of-range][range-edge=start]) .day-wrapper::before,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper::after,:host([start-of-range][range-edge=end].hover--inside-range) .day-wrapper::before,:host([end-of-range]) .day-wrapper::after,:host([end-of-range]) .day-wrapper::before{content:unset}:host(:hover[range-hover]:not([selected]).focused--start) .day,:host(:hover[range-hover]:not([selected]).focused--end) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .day{box-shadow:0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){.day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host(:hover:not([selected])) .day{border-radius:50%}:host([range][selected]) .day-wrapper::before,:host([range][selected]) .day-wrapper::after,:host([highlighted]) .day-wrapper::before,:host([highlighted]) .day-wrapper::after,:host([range-hover]:not([selected])) .day-wrapper::before,:host([range-hover]:not([selected])) .day-wrapper::after{background-color:highlight}:host([range-hover]) .day-wrapper::before,:host([range-hover]) .day-wrapper::after,:host([range][selected][start-of-range]) .day-wrapper::before,:host([range][selected][start-of-range]) .day-wrapper::after,:host([range][selected][end-of-range]) .day-wrapper::before,:host([range][selected][end-of-range]) .day-wrapper::after{background-color:canvas}}:host([hidden]){display:none}[hidden]{display:none}';
var CalciteDatePickerDayStyle0 = datePickerDayCss;
var DatePickerDay = proxyCustomElement(class DatePickerDay2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDaySelect = createEvent(this, "calciteDaySelect", 6);
    this.calciteInternalDayHover = createEvent(this, "calciteInternalDayHover", 6);
    this.onClick = () => {
      if (this.disabled) {
        return;
      }
      this.calciteDaySelect.emit();
    };
    this.keyDownHandler = (event) => {
      if (isActivationKey(event.key)) {
        !this.disabled && this.calciteDaySelect.emit();
        event.preventDefault();
      }
    };
    this.day = void 0;
    this.dateTimeFormat = void 0;
    this.disabled = false;
    this.currentMonth = false;
    this.selected = false;
    this.highlighted = false;
    this.range = false;
    this.rangeEdge = void 0;
    this.startOfRange = false;
    this.endOfRange = false;
    this.rangeHover = false;
    this.active = false;
    this.scale = void 0;
    this.value = void 0;
  }
  pointerOverHandler() {
    if (this.disabled) {
      return;
    }
    this.calciteInternalDayHover.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      this.parentDatePickerEl = closestElementCrossShadowBoundary(this.el, "calcite-date-picker");
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.el.focus();
    });
  }
  render() {
    const dayId = dateToISO(this.value).replaceAll("-", "");
    if (this.parentDatePickerEl) {
      const {
        numberingSystem,
        lang: locale
      } = this.parentDatePickerEl;
      numberStringFormatter.numberFormatOptions = __spreadValues(__spreadValues({
        useGrouping: false
      }, numberingSystem && {
        numberingSystem
      }), locale && {
        locale
      });
    }
    const formattedDay = numberStringFormatter.localize(String(this.day));
    const dayLabel = this.dateTimeFormat.format(this.value);
    return h(Host, {
      key: "99367dbc5f33128ec7e60922a7ccb68f54362f78",
      "aria-label": dayLabel,
      "aria-selected": toAriaBoolean(this.active),
      id: dayId,
      onClick: this.onClick,
      onKeyDown: this.keyDownHandler,
      role: "button",
      tabIndex: this.active && !this.disabled ? 0 : -1
    }, h(InteractiveContainer, {
      key: "50e5172f11d617e5e52aade2bb9fbdd7c46ccc60",
      disabled: this.disabled
    }, h("div", {
      key: "cfb5af0dcdb9283e00d3220e3658c253fc8fdc05",
      "aria-hidden": "true",
      class: {
        "day-v-wrapper": true
      }
    }, h("div", {
      key: "f1a85d642b0abdf35676fea5873c2ac4c92d451c",
      class: "day-wrapper"
    }, h("span", {
      key: "79daaedf22745c9d633b4461c5a28b828b6803ae",
      class: "day"
    }, h("span", {
      key: "14152896fce841cbe975eeabd5171024ae5133d3",
      class: "text"
    }, formattedDay))))));
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteDatePickerDayStyle0;
  }
}, [1, "calcite-date-picker-day", {
  "day": [2],
  "dateTimeFormat": [16],
  "disabled": [516],
  "currentMonth": [516, "current-month"],
  "selected": [516],
  "highlighted": [516],
  "range": [516],
  "rangeEdge": [513, "range-edge"],
  "startOfRange": [516, "start-of-range"],
  "endOfRange": [516, "end-of-range"],
  "rangeHover": [516, "range-hover"],
  "active": [516],
  "scale": [513],
  "value": [16],
  "setFocus": [64]
}, [[1, "pointerover", "pointerOverHandler"]]]);
function defineCustomElement5() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-day"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-date-picker-day":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, DatePickerDay);
        }
        break;
    }
  });
}
defineCustomElement5();

// ../../../node_modules/@esri/calcite-components/dist/components/date-picker-month.js
var datePickerMonthCss = ":host([hidden]){display:none}[hidden]{display:none}.calendar{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-3);inline-size:14.2857142857%}.day{display:flex;min-inline-size:0px;justify-content:center;inline-size:100%}.day calcite-date-picker-day{inline-size:100%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:grid;grid-template-columns:repeat(7, 1fr);grid-auto-rows:1fr;padding-block:0;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";
var CalciteDatePickerMonthStyle0 = datePickerMonthCss;
var DAYS_PER_WEEK = 7;
var DAYS_MAXIMUM_INDEX = 6;
var DatePickerMonth = proxyCustomElement(class DatePickerMonth2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalDatePickerSelect = createEvent(this, "calciteInternalDatePickerSelect", 6);
    this.calciteInternalDatePickerHover = createEvent(this, "calciteInternalDatePickerHover", 6);
    this.calciteInternalDatePickerActiveDateChange = createEvent(this, "calciteInternalDatePickerActiveDateChange", 6);
    this.calciteInternalDatePickerMouseOut = createEvent(this, "calciteInternalDatePickerMouseOut", 6);
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const isRTL = this.el.dir === "rtl";
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          this.addDays(-7);
          break;
        case "ArrowRight":
          event.preventDefault();
          this.addDays(isRTL ? -1 : 1);
          break;
        case "ArrowDown":
          event.preventDefault();
          this.addDays(7);
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.addDays(isRTL ? 1 : -1);
          break;
        case "PageUp":
          event.preventDefault();
          this.addMonths(-1);
          break;
        case "PageDown":
          event.preventDefault();
          this.addMonths(1);
          break;
        case "Home":
          event.preventDefault();
          this.activeDate.setDate(1);
          this.addDays();
          break;
        case "End":
          event.preventDefault();
          this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
          this.addDays();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          break;
        case "Tab":
          this.activeFocus = false;
      }
    };
    this.disableActiveFocus = () => {
      this.activeFocus = false;
    };
    this.dayHover = (event) => {
      const target = event.target;
      if (target.disabled) {
        this.calciteInternalDatePickerMouseOut.emit();
      } else {
        this.calciteInternalDatePickerHover.emit(target.value);
      }
      event.stopPropagation();
    };
    this.daySelect = (event) => {
      const target = event.target;
      this.calciteInternalDatePickerSelect.emit(target.value);
    };
    this.dateTimeFormat = void 0;
    this.selectedDate = void 0;
    this.activeDate = /* @__PURE__ */ new Date();
    this.startDate = void 0;
    this.endDate = void 0;
    this.min = void 0;
    this.max = void 0;
    this.scale = void 0;
    this.localeData = void 0;
    this.hoverRange = void 0;
  }
  pointerOutHandler() {
    this.calciteInternalDatePickerMouseOut.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const month = this.activeDate.getMonth();
    const year = this.activeDate.getFullYear();
    const startOfWeek = this.localeData.weekStart % 7;
    const {
      abbreviated,
      short,
      narrow
    } = this.localeData.days;
    const weekDays = this.scale === "s" ? narrow || short || abbreviated : short || abbreviated || narrow;
    const adjustedWeekDays = [...weekDays.slice(startOfWeek, 7), ...weekDays.slice(0, startOfWeek)];
    const curMonDays = this.getCurrentMonthDays(month, year);
    const prevMonDays = this.getPreviousMonthDays(month, year, startOfWeek);
    const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
    let dayInWeek = 0;
    const getDayInWeek = () => dayInWeek++ % 7;
    const days = [...prevMonDays.map((day) => {
      return {
        active: false,
        day,
        dayInWeek: getDayInWeek(),
        date: new Date(year, month - 1, day)
      };
    }), ...curMonDays.map((day) => {
      const date = new Date(year, month, day);
      const active = sameDate(date, this.activeDate);
      return {
        active,
        currentMonth: true,
        day,
        dayInWeek: getDayInWeek(),
        date,
        ref: true
      };
    }), ...nextMonDays.map((day) => {
      return {
        active: false,
        day,
        dayInWeek: getDayInWeek(),
        date: new Date(year, month + 1, day)
      };
    })];
    return h(Host, {
      onFocusout: this.disableActiveFocus,
      onKeyDown: this.keyDownHandler
    }, h("div", {
      class: "calendar",
      role: "grid"
    }, h("div", {
      class: "week-headers",
      role: "row"
    }, adjustedWeekDays.map((weekday) => h("span", {
      class: "week-header",
      role: "columnheader"
    }, weekday))), h("div", {
      class: "week-days",
      role: "row"
    }, days.map((day, index) => this.renderDateDay(day, index)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Add n months to the current month
   *
   * @param step
   */
  addMonths(step) {
    const nextDate = new Date(this.activeDate);
    nextDate.setMonth(this.activeDate.getMonth() + step);
    this.calciteInternalDatePickerActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Add n days to the current date
   *
   * @param step
   */
  addDays(step = 0) {
    const nextDate = new Date(this.activeDate);
    nextDate.setDate(this.activeDate.getDate() + step);
    this.calciteInternalDatePickerActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
    this.activeFocus = true;
  }
  /**
   * Get dates for last days of the previous month
   *
   * @param month
   * @param year
   * @param startOfWeek
   */
  getPreviousMonthDays(month, year, startOfWeek) {
    const lastDate = new Date(year, month, 0);
    const date = lastDate.getDate();
    const startDay = lastDate.getDay();
    const days = [];
    if (startDay === (startOfWeek + DAYS_MAXIMUM_INDEX) % DAYS_PER_WEEK) {
      return days;
    }
    if (startDay === startOfWeek) {
      return [date];
    }
    for (let i = (DAYS_PER_WEEK + startDay - startOfWeek) % DAYS_PER_WEEK; i >= 0; i--) {
      days.push(date - i);
    }
    return days;
  }
  /**
   * Get dates for the current month
   *
   * @param month
   * @param year
   */
  getCurrentMonthDays(month, year) {
    const num = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < num; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Get dates for first days of the next month
   *
   * @param month
   * @param year
   * @param startOfWeek
   */
  getNextMonthDays(month, year, startOfWeek) {
    const endDay = new Date(year, month + 1, 0).getDay();
    const days = [];
    if (endDay === (startOfWeek + DAYS_MAXIMUM_INDEX) % DAYS_PER_WEEK) {
      return days;
    }
    for (let i = 0; i < (DAYS_MAXIMUM_INDEX - (endDay - startOfWeek)) % DAYS_PER_WEEK; i++) {
      days.push(i + 1);
    }
    return days;
  }
  /**
   * Determine if the date is in between the start and end dates
   *
   * @param date
   */
  betweenSelectedRange(date) {
    return !!(this.startDate && this.endDate && date > this.startDate && date < this.endDate && !this.isRangeHover(date));
  }
  /**
   * Determine if the date should be in selected state
   *
   * @param date
   */
  isSelected(date) {
    return !!(sameDate(date, this.selectedDate) || this.startDate && sameDate(date, this.startDate) || this.endDate && sameDate(date, this.endDate));
  }
  /**
   * Determine if the date is the start of the date range
   *
   * @param date
   */
  isStartOfRange(date) {
    return !!(this.startDate && !sameDate(this.startDate, this.endDate) && sameDate(this.startDate, date) && !this.isEndOfRange(date));
  }
  isEndOfRange(date) {
    return !!(this.endDate && !sameDate(this.startDate, this.endDate) && sameDate(this.endDate, date) || !this.endDate && this.hoverRange && sameDate(this.startDate, this.hoverRange.end) && sameDate(date, this.hoverRange.end));
  }
  /**
   * Render calcite-date-picker-day
   *
   * @param active.active
   * @param active
   * @param day
   * @param dayInWeek
   * @param date
   * @param currentMonth
   * @param ref
   * @param active.currentMonth
   * @param active.date
   * @param active.day
   * @param active.dayInWeek
   * @param active.ref
   * @param key
   */
  renderDateDay({
    active,
    currentMonth,
    date,
    day,
    dayInWeek,
    ref
  }, key) {
    const isFocusedOnStart = this.isFocusedOnStart();
    const isHoverInRange = this.isHoverInRange() || !this.endDate && this.hoverRange && sameDate(this.hoverRange?.end, this.startDate);
    return h("div", {
      class: "day",
      key,
      role: "gridcell"
    }, h("calcite-date-picker-day", {
      active,
      class: {
        "hover--inside-range": this.startDate && isHoverInRange,
        "hover--outside-range": this.startDate && !isHoverInRange,
        "focused--start": isFocusedOnStart,
        "focused--end": !isFocusedOnStart
      },
      currentMonth,
      dateTimeFormat: this.dateTimeFormat,
      day,
      disabled: !inRange(date, this.min, this.max),
      endOfRange: this.isEndOfRange(date),
      highlighted: this.betweenSelectedRange(date),
      onCalciteDaySelect: this.daySelect,
      onCalciteInternalDayHover: this.dayHover,
      range: !!this.startDate && !!this.endDate && !sameDate(this.startDate, this.endDate),
      rangeEdge: dayInWeek === 0 ? "start" : dayInWeek === 6 ? "end" : void 0,
      rangeHover: this.isRangeHover(date),
      ref: (el) => {
        if (ref && active && this.activeFocus) {
          el?.setFocus();
        }
      },
      scale: this.scale,
      selected: this.isSelected(date),
      startOfRange: this.isStartOfRange(date),
      value: date
    }));
  }
  isFocusedOnStart() {
    return this.hoverRange?.focused === "start";
  }
  isHoverInRange() {
    if (!this.hoverRange) {
      return false;
    }
    const {
      start,
      end
    } = this.hoverRange;
    return !!(!this.isFocusedOnStart() && this.startDate && (!this.endDate || end < this.endDate) || this.isFocusedOnStart() && this.startDate && start > this.startDate);
  }
  isRangeHover(date) {
    if (!this.hoverRange) {
      return false;
    }
    const {
      start,
      end
    } = this.hoverRange;
    const isStart = this.isFocusedOnStart();
    const insideRange = this.isHoverInRange();
    const cond1 = insideRange && (!isStart && date > this.startDate && (date < end || sameDate(date, end)) || isStart && date < this.endDate && (date > start || sameDate(date, start)));
    const cond2 = !insideRange && (!isStart && date >= this.endDate && (date < end || sameDate(date, end)) || isStart && (this.startDate && date < this.startDate || this.endDate && sameDate(date, this.startDate)) && (start && date > start || sameDate(date, start)));
    return cond1 || cond2;
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteDatePickerMonthStyle0;
  }
}, [1, "calcite-date-picker-month", {
  "dateTimeFormat": [16],
  "selectedDate": [16],
  "activeDate": [16],
  "startDate": [16],
  "endDate": [16],
  "min": [16],
  "max": [16],
  "scale": [513],
  "localeData": [16],
  "hoverRange": [16]
}, [[1, "pointerout", "pointerOutHandler"]]]);
function defineCustomElement6() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-month", "calcite-date-picker-day"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-date-picker-month":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, DatePickerMonth);
        }
        break;
      case "calcite-date-picker-day":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
        }
        break;
    }
  });
}
defineCustomElement6();

// ../../../node_modules/@esri/calcite-components/dist/components/date-picker-month-header.js
var CSS = {
  header: "header",
  month: "month",
  chevron: "chevron",
  suffix: "suffix",
  yearSuffix: "year--suffix",
  yearWrap: "year-wrap",
  textReverse: "text--reverse"
};
var ICON = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right"
};
var datePickerMonthHeaderCss = ":host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-color-foreground-1);padding-inline:0.25rem;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.chevron:hover,.chevron:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.chevron:active{background-color:var(--calcite-color-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteDatePickerMonthHeaderStyle0 = datePickerMonthHeaderCss;
var DatePickerMonthHeader = proxyCustomElement(class DatePickerMonthHeader2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalDatePickerSelect = createEvent(this, "calciteInternalDatePickerSelect", 6);
    this.onYearKey = (event) => {
      const localizedYear = this.parseCalendarYear(event.target.value);
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.setYear({
            localizedYear,
            offset: -1
          });
          break;
        case "ArrowUp":
          event.preventDefault();
          this.setYear({
            localizedYear,
            offset: 1
          });
          break;
      }
    };
    this.onYearChange = (event) => {
      this.setYear({
        localizedYear: this.parseCalendarYear(event.target.value)
      });
    };
    this.onYearInput = (event) => {
      this.setYear({
        localizedYear: this.parseCalendarYear(event.target.value),
        commit: false
      });
    };
    this.prevMonthClick = (event) => {
      this.handleArrowClick(event, this.prevMonthDate);
    };
    this.prevMonthKeydown = (event) => {
      if (isActivationKey(event.key)) {
        this.prevMonthClick(event);
      }
    };
    this.nextMonthClick = (event) => {
      this.handleArrowClick(event, this.nextMonthDate);
    };
    this.nextMonthKeydown = (event) => {
      if (isActivationKey(event.key)) {
        this.nextMonthClick(event);
      }
    };
    this.handleArrowClick = (event, date) => {
      event.preventDefault();
      this.calciteInternalDatePickerSelect.emit(date);
    };
    this.selectedDate = void 0;
    this.activeDate = void 0;
    this.headingLevel = void 0;
    this.min = void 0;
    this.max = void 0;
    this.scale = void 0;
    this.localeData = void 0;
    this.messages = void 0;
    this.nextMonthDate = void 0;
    this.prevMonthDate = void 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.parentDatePickerEl = closestElementCrossShadowBoundary(this.el, "calcite-date-picker");
  }
  connectedCallback() {
    this.setNextPrevMonthDates();
  }
  render() {
    return h("div", {
      key: "4943ff396e6db2ee2ba30f4994a75fb2d5afeda1",
      class: CSS.header
    }, this.renderContent());
  }
  renderContent() {
    const {
      messages,
      localeData,
      activeDate
    } = this;
    if (!activeDate || !localeData) {
      return null;
    }
    if (this.parentDatePickerEl) {
      const {
        numberingSystem,
        lang: locale
      } = this.parentDatePickerEl;
      numberStringFormatter.numberFormatOptions = __spreadValues(__spreadValues({
        useGrouping: false
      }, numberingSystem && {
        numberingSystem
      }), locale && {
        locale
      });
    }
    const activeMonth = activeDate.getMonth();
    const {
      months,
      unitOrder
    } = localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = this.formatCalendarYear(activeDate.getFullYear());
    const order = getOrder(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const suffix = localeData.year?.suffix;
    return h(Fragment, null, h("a", {
      "aria-disabled": `${this.prevMonthDate.getMonth() === activeMonth}`,
      "aria-label": messages.prevMonth,
      class: CSS.chevron,
      href: "#",
      onClick: this.prevMonthClick,
      onKeyDown: this.prevMonthKeydown,
      role: "button",
      tabindex: this.prevMonthDate.getMonth() === activeMonth ? -1 : 0
    }, h("calcite-icon", {
      "flip-rtl": true,
      icon: ICON.chevronLeft,
      scale: getIconScale(this.scale)
    })), h("div", {
      class: {
        text: true,
        [CSS.textReverse]: reverse
      }
    }, h(Heading, {
      class: CSS.month,
      level: this.headingLevel
    }, localizedMonth), h("span", {
      class: CSS.yearWrap
    }, h("input", {
      "aria-label": messages.year,
      class: {
        year: true,
        [CSS.yearSuffix]: !!suffix
      },
      inputmode: "numeric",
      maxlength: "4",
      minlength: "1",
      onChange: this.onYearChange,
      onInput: this.onYearInput,
      onKeyDown: this.onYearKey,
      pattern: "\\d*",
      ref: (el) => this.yearInput = el,
      type: "text",
      value: localizedYear
    }), suffix && h("span", {
      class: CSS.suffix
    }, suffix))), h("a", {
      "aria-disabled": `${this.nextMonthDate.getMonth() === activeMonth}`,
      "aria-label": messages.nextMonth,
      class: CSS.chevron,
      href: "#",
      onClick: this.nextMonthClick,
      onKeyDown: this.nextMonthKeydown,
      role: "button",
      tabindex: this.nextMonthDate.getMonth() === activeMonth ? -1 : 0
    }, h("calcite-icon", {
      "flip-rtl": true,
      icon: ICON.chevronRight,
      scale: getIconScale(this.scale)
    })));
  }
  setNextPrevMonthDates() {
    if (!this.activeDate) {
      return;
    }
    this.nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
    this.prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
  }
  formatCalendarYear(year) {
    return numberStringFormatter.localize(`${formatCalendarYear(year, this.localeData)}`);
  }
  parseCalendarYear(year) {
    return numberStringFormatter.localize(`${parseCalendarYear(Number(numberStringFormatter.delocalize(year)), this.localeData)}`);
  }
  getInRangeDate({
    localizedYear,
    offset = 0
  }) {
    const {
      min,
      max,
      activeDate
    } = this;
    const parsedYear = Number(numberStringFormatter.delocalize(localizedYear));
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + offset;
    const inRange2 = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    if (year && inRange2 && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      return dateFromRange(nextDate, min, max);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   *
   * @param root0
   * @param root0.localizedYear
   * @param root0.commit
   * @param root0.offset
   */
  setYear({
    localizedYear,
    commit = true,
    offset = 0
  }) {
    const {
      yearInput,
      activeDate
    } = this;
    const inRangeDate = this.getInRangeDate({
      localizedYear,
      offset
    });
    if (inRangeDate) {
      this.calciteInternalDatePickerSelect.emit(inRangeDate);
    }
    if (commit) {
      yearInput.value = this.formatCalendarYear((inRangeDate || activeDate).getFullYear());
    }
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "min": ["setNextPrevMonthDates"],
      "max": ["setNextPrevMonthDates"],
      "activeDate": ["setNextPrevMonthDates"]
    };
  }
  static get style() {
    return CalciteDatePickerMonthHeaderStyle0;
  }
}, [1, "calcite-date-picker-month-header", {
  "selectedDate": [16],
  "activeDate": [16],
  "headingLevel": [2, "heading-level"],
  "min": [16],
  "max": [16],
  "scale": [513],
  "localeData": [16],
  "messages": [1040],
  "nextMonthDate": [32],
  "prevMonthDate": [32]
}, void 0, {
  "min": ["setNextPrevMonthDates"],
  "max": ["setNextPrevMonthDates"],
  "activeDate": ["setNextPrevMonthDates"]
}]);
function defineCustomElement7() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker-month-header", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-date-picker-month-header":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, DatePickerMonthHeader);
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
    }
  });
}
defineCustomElement7();

// ../../../node_modules/@esri/calcite-components/dist/components/date-picker.js
var HEADING_LEVEL = 2;
var DATE_PICKER_FORMAT_OPTIONS = {
  dateStyle: "full"
};
var translationCache = {};
var requestCache = {};
function getLocaleData(lang) {
  return __async(this, null, function* () {
    const locale = getSupportedLocale(lang);
    if (translationCache[locale]) {
      return translationCache[locale];
    }
    if (!requestCache[locale]) {
      requestCache[locale] = fetch(getAssetPath(`./assets/date-picker/nls/${locale}.json`)).then((resp) => resp.json()).catch(() => {
        console.error(`Translations for "${locale}" not found or invalid, falling back to english`);
        return getLocaleData("en");
      });
    }
    const data = yield requestCache[locale];
    translationCache[locale] = data;
    return data;
  });
}
function getValueAsDateRange(value) {
  return value.map((v, index) => dateFromISO(v, index === 1));
}
var datePickerCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:inline-block;inline-size:auto;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);vertical-align:top}:host([scale=s]){inline-size:234px;min-inline-size:216px;max-inline-size:380px}:host([scale=m]){inline-size:304px;min-inline-size:272px;max-inline-size:480px}:host([scale=l]){inline-size:370px;min-inline-size:320px;max-inline-size:600px}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteDatePickerStyle0 = datePickerCss;
var DatePicker = proxyCustomElement(class DatePicker2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteDatePickerChange = createEvent(this, "calciteDatePickerChange", 6);
    this.calciteDatePickerRangeChange = createEvent(this, "calciteDatePickerRangeChange", 6);
    this.keyDownHandler = (event) => {
      if (event.key === "Escape") {
        this.resetActiveDates();
      }
    };
    this.monthHeaderSelectChange = (event) => {
      const date = new Date(event.detail);
      if (!this.range) {
        this.activeDate = date;
      } else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        } else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthActiveDateChange = (event) => {
      const date = new Date(event.detail);
      if (!this.range) {
        this.activeDate = date;
      } else {
        if (this.activeRange === "end") {
          this.activeEndDate = date;
        } else {
          this.activeStartDate = date;
        }
        this.mostRecentRangeValue = date;
      }
    };
    this.monthHoverChange = (event) => {
      if (!this.range) {
        this.hoverRange = void 0;
        return;
      }
      const {
        valueAsDate
      } = this;
      const start = Array.isArray(valueAsDate) && valueAsDate[0];
      const end = Array.isArray(valueAsDate) && valueAsDate[1];
      const date = new Date(event.detail);
      this.hoverRange = {
        focused: this.activeRange || "start",
        start,
        end
      };
      if (this.proximitySelectionDisabled) {
        if (end && start || !end && date >= start) {
          this.hoverRange.focused = "end";
          this.hoverRange.end = date;
        } else if (!end && date < start) {
          this.hoverRange = {
            focused: "start",
            start: date,
            end: start
          };
        } else {
          this.hoverRange = void 0;
        }
      } else {
        if (start && end) {
          const startDiff = getDaysDiff(date, start);
          const endDiff = getDaysDiff(date, end);
          if (endDiff > 0) {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          } else if (startDiff < 0) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          } else if (startDiff > endDiff) {
            this.hoverRange.start = date;
            this.hoverRange.focused = "start";
          } else {
            this.hoverRange.end = date;
            this.hoverRange.focused = "end";
          }
        } else {
          if (start) {
            if (date < start) {
              this.hoverRange = {
                focused: "start",
                start: date,
                end: start
              };
            } else {
              this.hoverRange.end = date;
              this.hoverRange.focused = "end";
            }
          }
        }
      }
      event.stopPropagation();
    };
    this.monthMouseOutChange = () => {
      if (this.hoverRange) {
        this.hoverRange = void 0;
      }
    };
    this.resetActiveDates = () => {
      const {
        valueAsDate
      } = this;
      if (!Array.isArray(valueAsDate) && valueAsDate && valueAsDate !== this.activeDate) {
        this.activeDate = new Date(valueAsDate);
      }
      if (Array.isArray(valueAsDate)) {
        if (valueAsDate[0] && valueAsDate[0] !== this.activeStartDate) {
          this.activeStartDate = new Date(valueAsDate[0]);
        }
        if (valueAsDate[1] && valueAsDate[1] !== this.activeEndDate) {
          this.activeEndDate = new Date(valueAsDate[1]);
        }
      }
    };
    this.monthDateChange = (event) => {
      const date = new Date(event.detail);
      const isoDate = dateToISO(date);
      if (!this.range && isoDate === dateToISO(this.valueAsDate)) {
        return;
      }
      if (!this.range) {
        this.value = isoDate || "";
        this.valueAsDate = date || null;
        this.activeDate = date || null;
        this.calciteDatePickerChange.emit();
        return;
      }
      const start = this.getStartDate();
      const end = this.getEndDate();
      if (!start || !end && date < start) {
        if (start) {
          this.setEndDate(new Date(start));
        }
        if (this.activeRange == "end") {
          this.setEndDate(date);
        } else {
          this.setStartDate(date);
        }
      } else if (!end) {
        this.setEndDate(date);
      } else {
        if (this.proximitySelectionDisabled) {
          this.setStartDate(date);
          this.setEndDate(null);
        } else {
          if (this.activeRange) {
            if (this.activeRange == "end") {
              this.setEndDate(date);
            } else {
              this.setStartDate(date);
            }
          } else {
            const startDiff = getDaysDiff(date, start);
            const endDiff = getDaysDiff(date, end);
            if (endDiff === 0 || startDiff < 0) {
              this.setStartDate(date);
            } else if (startDiff === 0 || endDiff < 0) {
              this.setEndDate(date);
            } else if (startDiff < endDiff) {
              this.setStartDate(date);
            } else {
              this.setEndDate(date);
            }
          }
        }
      }
      this.calciteDatePickerChange.emit();
    };
    this.activeDate = void 0;
    this.activeRange = void 0;
    this.value = void 0;
    this.headingLevel = void 0;
    this.valueAsDate = void 0;
    this.minAsDate = void 0;
    this.maxAsDate = void 0;
    this.min = void 0;
    this.max = void 0;
    this.numberingSystem = void 0;
    this.scale = "m";
    this.range = false;
    this.proximitySelectionDisabled = false;
    this.messageOverrides = void 0;
    this.messages = void 0;
    this.activeEndDate = void 0;
    this.activeStartDate = void 0;
    this.dateTimeFormat = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
    this.endAsDate = void 0;
    this.hoverRange = void 0;
    this.localeData = void 0;
    this.mostRecentRangeValue = void 0;
    this.startAsDate = void 0;
  }
  activeDateWatcher(newActiveDate) {
    if (this.activeRange === "end") {
      this.activeEndDate = newActiveDate;
    }
  }
  valueAsDateWatcher(newValueAsDate) {
    if (this.range && Array.isArray(newValueAsDate)) {
      const {
        activeStartDate,
        activeEndDate
      } = this;
      const newActiveStartDate = newValueAsDate[0];
      const newActiveEndDate = newValueAsDate[1];
      this.activeStartDate = activeStartDate !== newActiveStartDate && newActiveStartDate;
      this.activeEndDate = activeEndDate !== newActiveEndDate && newActiveEndDate;
    } else if (newValueAsDate && newValueAsDate !== this.activeDate) {
      this.activeDate = newValueAsDate;
    }
  }
  onMinChanged(min) {
    this.minAsDate = dateFromISO(min);
  }
  onMaxChanged(max) {
    this.maxAsDate = dateFromISO(max);
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.el.focus();
    });
  }
  /**
   * Resets active date state.
   * @internal
   */
  reset() {
    return __async(this, null, function* () {
      this.resetActiveDates();
      this.mostRecentRangeValue = void 0;
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    if (Array.isArray(this.value)) {
      this.valueAsDate = getValueAsDateRange(this.value);
    } else if (this.value) {
      this.valueAsDate = dateFromISO(this.value);
    }
    if (this.min) {
      this.minAsDate = dateFromISO(this.min);
    }
    if (this.max) {
      this.maxAsDate = dateFromISO(this.max);
    }
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield this.loadLocaleData();
      this.onMinChanged(this.min);
      this.onMaxChanged(this.max);
      yield setUpMessages(this);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  render() {
    const date = dateFromRange(this.range && Array.isArray(this.valueAsDate) ? this.valueAsDate[0] : this.valueAsDate, this.minAsDate, this.maxAsDate);
    let activeDate = this.getActiveDate(date, this.minAsDate, this.maxAsDate);
    const endDate = this.range && Array.isArray(this.valueAsDate) ? dateFromRange(this.valueAsDate[1], this.minAsDate, this.maxAsDate) : null;
    const activeEndDate = this.getActiveEndDate(endDate, this.minAsDate, this.maxAsDate);
    if ((this.activeRange === "end" || this.hoverRange?.focused === "end" && (!this.proximitySelectionDisabled || endDate)) && activeEndDate) {
      activeDate = activeEndDate;
    }
    if (this.range && this.mostRecentRangeValue) {
      activeDate = this.mostRecentRangeValue;
    }
    const minDate = this.range && this.activeRange ? this.activeRange === "start" ? this.minAsDate : date || this.minAsDate : this.minAsDate;
    const maxDate = this.range && this.activeRange ? this.activeRange === "start" ? endDate || this.maxAsDate : this.maxAsDate : this.maxAsDate;
    return h(Host, {
      key: "32213cf1e0848af340d9a7cdaf0838f88d04e0cb",
      onBlur: this.resetActiveDates,
      onKeyDown: this.keyDownHandler
    }, this.renderCalendar(activeDate, maxDate, minDate, date, endDate));
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  valueHandler(value) {
    if (Array.isArray(value)) {
      this.valueAsDate = getValueAsDateRange(value);
    } else if (value) {
      this.valueAsDate = dateFromISO(value);
    }
  }
  loadLocaleData() {
    return __async(this, null, function* () {
      if (!isBrowser()) {
        return;
      }
      numberStringFormatter.numberFormatOptions = {
        numberingSystem: this.numberingSystem,
        locale: this.effectiveLocale,
        useGrouping: false
      };
      this.localeData = yield getLocaleData(this.effectiveLocale);
      this.dateTimeFormat = getDateTimeFormat(this.effectiveLocale, DATE_PICKER_FORMAT_OPTIONS);
    });
  }
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
   *
   * @param activeDate
   * @param maxDate
   * @param minDate
   * @param date
   * @param endDate
   */
  renderCalendar(activeDate, maxDate, minDate, date, endDate) {
    return this.localeData && [h("calcite-date-picker-month-header", {
      activeDate,
      headingLevel: this.headingLevel || HEADING_LEVEL,
      localeData: this.localeData,
      max: maxDate,
      messages: this.messages,
      min: minDate,
      onCalciteInternalDatePickerSelect: this.monthHeaderSelectChange,
      scale: this.scale,
      selectedDate: this.activeRange === "end" ? endDate : date || /* @__PURE__ */ new Date()
    }), h("calcite-date-picker-month", {
      activeDate,
      dateTimeFormat: this.dateTimeFormat,
      endDate: this.range ? endDate : void 0,
      hoverRange: this.hoverRange,
      localeData: this.localeData,
      max: maxDate,
      min: minDate,
      onCalciteInternalDatePickerActiveDateChange: this.monthActiveDateChange,
      onCalciteInternalDatePickerHover: this.monthHoverChange,
      onCalciteInternalDatePickerMouseOut: this.monthMouseOutChange,
      onCalciteInternalDatePickerSelect: this.monthDateChange,
      scale: this.scale,
      selectedDate: this.activeRange === "end" ? endDate : date,
      startDate: this.range ? date : void 0
    })];
  }
  getEndDate() {
    return Array.isArray(this.valueAsDate) && this.valueAsDate[1] || void 0;
  }
  setEndDate(date) {
    const startDate = this.getStartDate();
    const newEndDate = date ? setEndOfDay(date) : date;
    this.value = [dateToISO(startDate), dateToISO(date)];
    this.valueAsDate = [startDate, date];
    this.mostRecentRangeValue = newEndDate;
    this.calciteDatePickerRangeChange.emit();
    this.activeEndDate = date || null;
  }
  getStartDate() {
    return Array.isArray(this.valueAsDate) && this.valueAsDate[0];
  }
  setStartDate(date) {
    const endDate = this.getEndDate();
    this.value = [dateToISO(date), dateToISO(endDate)];
    this.valueAsDate = [date, endDate];
    this.mostRecentRangeValue = date;
    this.calciteDatePickerRangeChange.emit();
    this.activeStartDate = date || null;
  }
  /**
   * Get an active date using the value, or current date as default
   *
   * @param value
   * @param min
   * @param max
   */
  getActiveDate(value, min, max) {
    return dateFromRange(this.activeDate, min, max) || value || dateFromRange(/* @__PURE__ */ new Date(), min, max);
  }
  getActiveEndDate(value, min, max) {
    return dateFromRange(this.activeEndDate, min, max) || value || dateFromRange(/* @__PURE__ */ new Date(), min, max);
  }
  static get delegatesFocus() {
    return true;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "activeDate": ["activeDateWatcher"],
      "valueAsDate": ["valueAsDateWatcher"],
      "min": ["onMinChanged"],
      "max": ["onMaxChanged"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange", "loadLocaleData"],
      "value": ["valueHandler"]
    };
  }
  static get style() {
    return CalciteDatePickerStyle0;
  }
}, [17, "calcite-date-picker", {
  "activeDate": [1040],
  "activeRange": [513, "active-range"],
  "value": [1025],
  "headingLevel": [514, "heading-level"],
  "valueAsDate": [1040],
  "minAsDate": [1040],
  "maxAsDate": [1040],
  "min": [513],
  "max": [513],
  "numberingSystem": [513, "numbering-system"],
  "scale": [513],
  "range": [516],
  "proximitySelectionDisabled": [516, "proximity-selection-disabled"],
  "messageOverrides": [1040],
  "messages": [1040],
  "activeEndDate": [32],
  "activeStartDate": [32],
  "dateTimeFormat": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "endAsDate": [32],
  "hoverRange": [32],
  "localeData": [32],
  "mostRecentRangeValue": [32],
  "startAsDate": [32],
  "setFocus": [64],
  "reset": [64]
}, void 0, {
  "activeDate": ["activeDateWatcher"],
  "valueAsDate": ["valueAsDateWatcher"],
  "min": ["onMinChanged"],
  "max": ["onMaxChanged"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleChange", "loadLocaleData"],
  "value": ["valueHandler"]
}]);
function defineCustomElement8() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-date-picker", "calcite-date-picker-day", "calcite-date-picker-month", "calcite-date-picker-month-header", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-date-picker":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, DatePicker);
        }
        break;
      case "calcite-date-picker-day":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
        }
        break;
      case "calcite-date-picker-month":
        if (!customElements.get(tagName)) {
          defineCustomElement6();
        }
        break;
      case "calcite-date-picker-month-header":
        if (!customElements.get(tagName)) {
          defineCustomElement7();
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
    }
  });
}
defineCustomElement8();

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-input-date-picker.js
function isTwoDigitYear(value) {
  if (!value) {
    return false;
  }
  const {
    year
  } = datePartsFromISO(value);
  return Number(year) < 100;
}
function normalizeToCurrentCentury(twoDigitYear) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const normalizedYear = Math.floor(currentYear / 100) * 100 + twoDigitYear;
  return normalizedYear;
}
var CSS2 = {
  assistiveText: "assistive-text",
  calendarWrapper: "calendar-wrapper",
  calendarWrapperEnd: "calendar-wrapper--end",
  horizontalArrowContainer: "horizontal-arrow-container",
  inputBorderTopColorOne: "border-top-color-one",
  inputContainer: "input-container",
  inputNoBottomBorder: "no-bottom-border",
  inputWrapper: "input-wrapper",
  input: "input",
  menu: "menu-container",
  menuActive: "menu-container--active",
  toggleIcon: "toggle-icon",
  verticalArrowContainer: "vertical-arrow-container",
  chevronIcon: "chevron-icon"
};
var IDS = {
  validationMessage: "inputDatePickerValidationMessage"
};
var inputDatePickerCss = ":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.calendar-wrapper{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.input-wrapper .chevron-icon{color:var(--calcite-color-text-3)}.input-wrapper:focus-within .chevron-icon,.input-wrapper:active .chevron-icon,.input-wrapper:hover .chevron-icon{color:var(--calcite-color-text-1)}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-z-index);margin-inline:1px;background-color:var(--calcite-color-foreground-1);padding-inline:0.625rem;inset-inline-start:0}.menu-container{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.menu-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.menu-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.menu-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteInputDatePickerStyle0 = inputDatePickerCss;
var InputDatePicker = proxyCustomElement(class InputDatePicker2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputDatePickerChange = createEvent(this, "calciteInputDatePickerChange", 6);
    this.calciteInputDatePickerBeforeClose = createEvent(this, "calciteInputDatePickerBeforeClose", 6);
    this.calciteInputDatePickerClose = createEvent(this, "calciteInputDatePickerClose", 6);
    this.calciteInputDatePickerBeforeOpen = createEvent(this, "calciteInputDatePickerBeforeOpen", 6);
    this.calciteInputDatePickerOpen = createEvent(this, "calciteInputDatePickerOpen", 6);
    this.calciteInternalInputInputHandler = (event) => {
      const target = event.target;
      const value = target.value;
      const parsedValue = this.parseNumerals(value);
      const formattedValue = this.formatNumerals(parsedValue);
      target.value = formattedValue;
      const {
        year
      } = datePartsFromLocalizedString(value, this.localeData);
      if (year && year.length < 4) {
        return;
      }
      const date = dateFromLocalizedString(value, this.localeData);
      if (inRange(date, this.min, this.max)) {
        this.datePickerActiveDate = date;
      }
    };
    this.calciteInternalInputBlurHandler = () => {
      this.commitValue();
    };
    this.dialogId = `date-picker-dialog--${guid()}`;
    this.focusOnOpen = false;
    this.userChangedValue = false;
    this.openTransitionProp = "opacity";
    this.valueAsDateChangedExternally = false;
    this.placeholderTextId = `calcite-input-date-picker-placeholder-${guid()}`;
    this.onInputWrapperPointerDown = () => {
      this.currentOpenInput = this.focusedInput;
    };
    this.onInputWrapperClick = (event) => {
      const {
        range,
        endInput,
        startInput,
        currentOpenInput
      } = this;
      const currentTarget = event.currentTarget;
      const position = currentTarget.getAttribute("data-position");
      const path = event.composedPath();
      const wasToggleClicked = path.find((el) => el.classList?.contains(CSS2.toggleIcon));
      if (wasToggleClicked) {
        const targetInput = position === "start" ? startInput : endInput;
        targetInput.setFocus();
      }
      if (!range || !this.open || currentOpenInput === position) {
        this.open = !this.open;
      }
    };
    this.setFilteredPlacements = () => {
      const {
        el,
        flipPlacements
      } = this;
      this.filteredFlipPlacements = flipPlacements ? filterValidFlipPlacements(flipPlacements, el) : null;
    };
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.setStartInput = (el) => {
      this.startInput = el;
    };
    this.setEndInput = (el) => {
      this.endInput = el;
    };
    this.blurHandler = () => {
      this.open = false;
    };
    this.keyDownHandler = (event) => {
      const {
        defaultPrevented,
        key
      } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        event.preventDefault();
        this.commitValue();
        if (this.shouldFocusRangeEnd()) {
          this.endInput?.setFocus();
        } else if (this.shouldFocusRangeStart()) {
          this.startInput?.setFocus();
        }
        if (submitForm(this)) {
          this.restoreInputFocus();
        }
      } else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      } else if (key === "Escape") {
        this.open = false;
        event.preventDefault();
        this.restoreInputFocus();
      }
    };
    this.startInputFocus = () => {
      this.focusedInput = "start";
    };
    this.endInputFocus = () => {
      this.focusedInput = "end";
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      connectFloatingUI(this, this.referenceEl, this.floatingEl);
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
      this.setReferenceEl();
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
      this.setReferenceEl();
    };
    this.setDatePickerRef = (el) => {
      this.datePickerEl = el;
      connectFocusTrap(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false
        }
      });
    };
    this.handleDateChange = (event) => {
      if (this.range) {
        return;
      }
      event.stopPropagation();
      this.setValue(event.target.valueAsDate);
      this.localizeInputValues();
      this.restoreInputFocus();
    };
    this.handleDateRangeChange = (event) => {
      if (!this.range) {
        return;
      }
      event.stopPropagation();
      const value = event.target.valueAsDate;
      this.setRangeValue(value);
      this.localizeInputValues();
      this.restoreInputFocus();
    };
    this.setInputValue = (newValue, input = "start") => {
      const inputEl = this[`${input}Input`];
      if (!inputEl) {
        return;
      }
      inputEl.value = newValue;
    };
    this.setRangeValue = (valueAsDate) => {
      if (!this.range) {
        return;
      }
      const {
        value: oldValue
      } = this;
      const oldValueIsArray = Array.isArray(oldValue);
      const valueIsArray = Array.isArray(valueAsDate);
      const newStartDate = valueIsArray ? valueAsDate[0] : null;
      let newStartDateISO = valueIsArray ? dateToISO(newStartDate) : "";
      if (newStartDateISO) {
        newStartDateISO = this.getNormalizedDate(newStartDateISO);
      }
      const newEndDate = valueIsArray ? valueAsDate[1] : null;
      let newEndDateISO = valueIsArray ? dateToISO(newEndDate) : "";
      if (newEndDateISO) {
        newEndDateISO = this.getNormalizedDate(newEndDateISO);
      }
      const newValue = newStartDateISO || newEndDateISO ? [newStartDateISO, newEndDateISO] : "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue;
      this.valueAsDate = newValue ? getValueAsDateRange(newValue) : void 0;
      const changeEvent = this.calciteInputDatePickerChange.emit();
      if (changeEvent && changeEvent.defaultPrevented) {
        this.value = oldValue;
        if (oldValueIsArray) {
          this.setInputValue(oldValue[0], "start");
          this.setInputValue(oldValue[1], "end");
        } else {
          this.value = oldValue;
          this.setInputValue(oldValue);
        }
      }
    };
    this.setValue = (value) => {
      if (this.range) {
        return;
      }
      const oldValue = this.value;
      let newValue = dateToISO(value);
      newValue = this.getNormalizedDate(newValue);
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.valueAsDate = newValue ? dateFromISO(newValue) : void 0;
      this.value = newValue || "";
      const changeEvent = this.calciteInputDatePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.value = oldValue;
        this.setInputValue(oldValue);
      }
    };
    this.commonDateSeparators = [".", "-", "/"];
    this.formatNumerals = (value) => value ? value.split("").map((char) => this.commonDateSeparators?.includes(char) ? this.localeData?.separator : numberKeys?.includes(char) ? numberStringFormatter?.numberFormatter?.format(Number(char)) : char).join("") : "";
    this.parseNumerals = (value) => value ? value.split("").map((char) => numberKeys.includes(char) ? numberStringFormatter.delocalize(char) : char).join("") : "";
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = void 0;
    this.readOnly = false;
    this.value = "";
    this.flipPlacements = void 0;
    this.headingLevel = void 0;
    this.valueAsDate = void 0;
    this.messageOverrides = void 0;
    this.messages = void 0;
    this.minAsDate = void 0;
    this.maxAsDate = void 0;
    this.min = void 0;
    this.max = void 0;
    this.open = false;
    this.validationMessage = void 0;
    this.validationIcon = void 0;
    this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    this.name = void 0;
    this.numberingSystem = void 0;
    this.scale = "m";
    this.status = "idle";
    this.placement = defaultMenuPlacement;
    this.range = false;
    this.required = false;
    this.overlayPositioning = "absolute";
    this.proximitySelectionDisabled = false;
    this.layout = "horizontal";
    this.datePickerActiveDate = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
    this.focusedInput = "start";
    this.localeData = void 0;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? deactivateFocusTrap(this) : activateFocusTrap(this);
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      let newValueAsDate;
      if (Array.isArray(newValue)) {
        newValueAsDate = getValueAsDateRange(newValue);
      } else if (newValue) {
        newValueAsDate = dateFromISO(newValue);
      } else {
        newValueAsDate = void 0;
      }
      if (!this.valueAsDateChangedExternally && newValueAsDate !== this.valueAsDate) {
        this.valueAsDate = newValueAsDate;
      }
      this.localizeInputValues();
    }
    this.userChangedValue = false;
  }
  valueAsDateWatcher(valueAsDate) {
    this.datePickerActiveDate = valueAsDate;
    const newValue = this.range && Array.isArray(valueAsDate) ? [dateToISO(valueAsDate[0]), dateToISO(valueAsDate[1])] : dateToISO(valueAsDate);
    if (this.value !== newValue) {
      this.valueAsDateChangedExternally = true;
      this.value = newValue;
      this.valueAsDateChangedExternally = false;
    }
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
  }
  onMinChanged(min) {
    this.minAsDate = dateFromISO(min);
  }
  onMaxChanged(max) {
    this.maxAsDate = dateFromISO(max);
  }
  openHandler() {
    onToggleOpenCloseComponent(this);
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    this.reposition(true);
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteDaySelectHandler() {
    if (this.shouldFocusRangeStart() || this.shouldFocusRangeEnd()) {
      return;
    }
    this.open = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      focusFirstTabbable(this.el);
    });
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed If true, the repositioning is delayed.
   * @returns void
   */
  reposition(delayed = false) {
    return __async(this, null, function* () {
      const {
        floatingEl,
        referenceEl,
        placement,
        overlayPositioning,
        filteredFlipPlacements
      } = this;
      return reposition(this, {
        floatingEl,
        referenceEl,
        overlayPositioning,
        placement,
        flipPlacements: filteredFlipPlacements,
        type: "menu"
      }, delayed);
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    this.handleDateTimeFormatChange();
    const {
      open
    } = this;
    open && this.openHandler();
    if (this.min) {
      this.minAsDate = dateFromISO(this.min);
    }
    if (this.max) {
      this.maxAsDate = dateFromISO(this.max);
    }
    if (Array.isArray(this.value)) {
      this.valueAsDate = getValueAsDateRange(this.value);
    } else if (this.value) {
      try {
        const date = dateFromISO(this.value);
        const dateInRange = dateFromRange(date, this.minAsDate, this.maxAsDate);
        this.valueAsDate = dateInRange;
      } catch (error) {
        this.warnAboutInvalidValue(this.value);
        this.value = "";
      }
    } else if (this.valueAsDate) {
      if (this.range && Array.isArray(this.valueAsDate)) {
        this.value = [dateToISO(this.valueAsDate[0]), dateToISO(this.valueAsDate[1])];
      } else if (!this.range && !Array.isArray(this.valueAsDate)) {
        this.value = dateToISO(this.valueAsDate);
      }
    }
    connectLabel(this);
    connectForm(this);
    connectMessages(this);
    this.setFilteredPlacements();
    numberStringFormatter.numberFormatOptions = {
      numberingSystem: this.numberingSystem,
      locale: this.effectiveLocale,
      useGrouping: false
    };
    if (this.open) {
      onToggleOpenCloseComponent(this);
    }
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield Promise.all([this.loadLocaleData(), setUpMessages(this)]);
      this.onMinChanged(this.min);
      this.onMaxChanged(this.max);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
    this.localizeInputValues();
    connectFloatingUI(this, this.referenceEl, this.floatingEl);
  }
  disconnectedCallback() {
    deactivateFocusTrap(this);
    disconnectLabel(this);
    disconnectForm(this);
    disconnectFloatingUI(this, this.referenceEl, this.floatingEl);
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  render() {
    const {
      disabled,
      effectiveLocale,
      messages,
      numberingSystem,
      readOnly
    } = this;
    numberStringFormatter.numberFormatOptions = {
      numberingSystem,
      locale: effectiveLocale,
      useGrouping: false
    };
    return h(Host, {
      key: "b31ae837415083aa63451c5f32b78253b1d6af1e",
      onBlur: this.blurHandler,
      onKeyDown: this.keyDownHandler
    }, h(InteractiveContainer, {
      key: "7315a0e5773a1ef96c00b48b138c8afd50aca28a",
      disabled: this.disabled
    }, this.localeData && h("div", {
      key: "022f86001938e2994ab523b30a2e3cb379a550b4",
      class: CSS2.inputContainer
    }, h("div", {
      key: "4a3add7824ea7ec41b75ddd5e9b847afa1ca0708",
      class: CSS2.inputWrapper,
      "data-position": "start",
      onClick: this.onInputWrapperClick,
      onPointerDown: this.onInputWrapperPointerDown,
      ref: this.setStartWrapper
    }, h("calcite-input-text", {
      key: "d415c8d890333f76793fc5f804111c0a72f4d3c8",
      "aria-autocomplete": "none",
      "aria-controls": this.dialogId,
      "aria-describedby": this.placeholderTextId,
      "aria-errormessage": IDS.validationMessage,
      "aria-expanded": toAriaBoolean(this.open),
      "aria-haspopup": "dialog",
      "aria-invalid": toAriaBoolean(this.status === "invalid"),
      class: {
        [CSS2.input]: true,
        [CSS2.inputNoBottomBorder]: this.layout === "vertical" && this.range
      },
      disabled,
      icon: "calendar",
      onCalciteInputTextInput: this.calciteInternalInputInputHandler,
      onCalciteInternalInputTextBlur: this.calciteInternalInputBlurHandler,
      onCalciteInternalInputTextFocus: this.startInputFocus,
      placeholder: this.localeData?.placeholder,
      readOnly,
      ref: this.setStartInput,
      role: "combobox",
      scale: this.scale,
      status: this.status
    }), !this.readOnly && this.renderToggleIcon(this.open && this.focusedInput === "start"), h("span", {
      key: "7d5b86f35bde88b757f9a46485ce37bf8317ac88",
      "aria-hidden": "true",
      class: CSS2.assistiveText,
      id: this.placeholderTextId
    }, "Date Format: ", this.localeData?.placeholder)), h("div", {
      key: "8d38fc155dcc3851865e699645f64e3278519f02",
      "aria-hidden": toAriaBoolean(!this.open),
      "aria-label": messages.chooseDate,
      "aria-live": "polite",
      "aria-modal": "true",
      class: {
        [CSS2.menu]: true,
        [CSS2.menuActive]: this.open
      },
      id: this.dialogId,
      ref: this.setFloatingEl,
      role: "dialog"
    }, h("div", {
      key: "92b37e521a0d2e0e8fb30ca129a53e75d26e9dd6",
      class: {
        [CSS2.calendarWrapper]: true,
        [CSS2.calendarWrapperEnd]: this.focusedInput === "end",
        [FloatingCSS.animation]: true,
        [FloatingCSS.animationActive]: this.open
      },
      ref: this.setTransitionEl
    }, h("calcite-date-picker", {
      key: "35aa39e5552eff762bb58368b4cbe1069692ee38",
      activeDate: this.datePickerActiveDate,
      activeRange: this.focusedInput,
      headingLevel: this.headingLevel,
      max: this.max,
      maxAsDate: this.maxAsDate,
      messageOverrides: this.messageOverrides,
      min: this.min,
      minAsDate: this.minAsDate,
      numberingSystem,
      onCalciteDatePickerChange: this.handleDateChange,
      onCalciteDatePickerRangeChange: this.handleDateRangeChange,
      proximitySelectionDisabled: this.proximitySelectionDisabled,
      range: this.range,
      ref: this.setDatePickerRef,
      scale: this.scale,
      tabIndex: this.open ? void 0 : -1,
      valueAsDate: this.valueAsDate
    }))), this.range && this.layout === "horizontal" && h("div", {
      key: "386b0a687fc16a4f96ef9cc199aca653ab90071b",
      class: CSS2.horizontalArrowContainer
    }, h("calcite-icon", {
      key: "65b1d5b9e7b77f524ef40cd1f0efda3776db33e1",
      flipRtl: true,
      icon: "arrow-right",
      scale: getIconScale(this.scale)
    })), this.range && this.layout === "vertical" && this.scale !== "s" && h("div", {
      key: "50b0b98f4d51c5866557ab5691692a42704d08f2",
      class: CSS2.verticalArrowContainer
    }, h("calcite-icon", {
      key: "48758a61b800c61109b492d77ca468519ad65227",
      icon: "arrow-down",
      scale: getIconScale(this.scale)
    })), this.range && h("div", {
      key: "af12058d6a8d299fd988ae4ac7fc0422d05342c6",
      class: CSS2.inputWrapper,
      "data-position": "end",
      onClick: this.onInputWrapperClick,
      onPointerDown: this.onInputWrapperPointerDown,
      ref: this.setEndWrapper
    }, h("calcite-input-text", {
      key: "38c68e0df3d516ea5b840a1a937d1af6d1c971b0",
      "aria-autocomplete": "none",
      "aria-controls": this.dialogId,
      "aria-errormessage": IDS.validationMessage,
      "aria-expanded": toAriaBoolean(this.open),
      "aria-haspopup": "dialog",
      "aria-invalid": toAriaBoolean(this.status === "invalid"),
      class: {
        [CSS2.input]: true,
        [CSS2.inputBorderTopColorOne]: this.layout === "vertical" && this.range
      },
      disabled,
      icon: "calendar",
      onCalciteInputTextInput: this.calciteInternalInputInputHandler,
      onCalciteInternalInputTextBlur: this.calciteInternalInputBlurHandler,
      onCalciteInternalInputTextFocus: this.endInputFocus,
      placeholder: this.localeData?.placeholder,
      readOnly,
      ref: this.setEndInput,
      role: "combobox",
      scale: this.scale,
      status: this.status
    }), !this.readOnly && this.renderToggleIcon(this.open && this.focusedInput === "end"))), h(HiddenFormInputSlot, {
      key: "65e98114397e07a95ccf82217412360be3a36d96",
      component: this
    }), this.validationMessage && this.status === "invalid" ? h(Validation, {
      icon: this.validationIcon,
      id: IDS.validationMessage,
      message: this.validationMessage,
      scale: this.scale,
      status: this.status
    }) : null));
  }
  renderToggleIcon(open) {
    return (
      // we set tab index to -1 to prevent delegatesFocus from stealing focus before we can set it
      h("span", {
        class: CSS2.toggleIcon,
        tabIndex: -1
      }, h("calcite-icon", {
        class: CSS2.chevronIcon,
        icon: open ? "chevron-up" : "chevron-down",
        scale: getIconScale(this.scale)
      }))
    );
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
    this.loadLocaleData();
  }
  handleDateTimeFormatChange() {
    const formattingOptions = {
      // we explicitly set numberingSystem to prevent the browser-inferred value
      // see https://github.com/Esri/calcite-design-system/issues/3079#issuecomment-1168964195 for more info
      numberingSystem: getSupportedNumberingSystem(this.numberingSystem)
    };
    this.dateTimeFormat = new Intl.DateTimeFormat(getDateFormatSupportedLocale(this.effectiveLocale), formattingOptions);
  }
  setReferenceEl() {
    const {
      focusedInput,
      layout,
      endWrapper,
      startWrapper
    } = this;
    this.referenceEl = focusedInput === "end" || layout === "vertical" ? endWrapper || startWrapper : startWrapper || endWrapper;
    requestAnimationFrame(() => connectFloatingUI(this, this.referenceEl, this.floatingEl));
  }
  onLabelClick() {
    this.setFocus();
  }
  onBeforeOpen() {
    this.calciteInputDatePickerBeforeOpen.emit();
  }
  onOpen() {
    activateFocusTrap(this, {
      onActivate: () => {
        if (this.focusOnOpen) {
          this.datePickerEl.setFocus();
          this.focusOnOpen = false;
        }
      }
    });
    this.calciteInputDatePickerOpen.emit();
  }
  onBeforeClose() {
    this.calciteInputDatePickerBeforeClose.emit();
  }
  onClose() {
    this.calciteInputDatePickerClose.emit();
    deactivateFocusTrap(this);
    this.restoreInputFocus();
    this.focusOnOpen = false;
    this.datePickerEl.reset();
  }
  syncHiddenFormInput(input) {
    syncHiddenFormInput("date", this, input);
  }
  commitValue() {
    const {
      focusedInput,
      value
    } = this;
    const focusedInputName = `${focusedInput}Input`;
    const focusedInputValue = this[focusedInputName].value;
    const date = dateFromLocalizedString(focusedInputValue, this.localeData);
    const dateAsISO = dateToISO(date);
    const valueIsArray = Array.isArray(value);
    if (this.range) {
      const focusedInputValueIndex = focusedInput === "start" ? 0 : 1;
      if (valueIsArray) {
        if (dateAsISO === value[focusedInputValueIndex]) {
          return;
        }
        if (date) {
          this.setRangeValue([focusedInput === "start" ? date : dateFromISO(value[0]), focusedInput === "end" ? date : dateFromISO(value[1])]);
          this.localizeInputValues();
        } else {
          this.setRangeValue([focusedInput === "end" && dateFromISO(value[0]), focusedInput === "start" && dateFromISO(value[1])]);
        }
      } else {
        if (date) {
          this.setRangeValue([focusedInput === "start" ? date : dateFromISO(value[0]), focusedInput === "end" ? date : dateFromISO(value[1])]);
          this.localizeInputValues();
        }
      }
    } else {
      if (dateAsISO === value) {
        return;
      }
      this.setValue(date);
      this.localizeInputValues();
    }
  }
  loadLocaleData() {
    return __async(this, null, function* () {
      if (!isBrowser()) {
        return;
      }
      numberStringFormatter.numberFormatOptions = {
        numberingSystem: this.numberingSystem,
        locale: this.effectiveLocale,
        useGrouping: false
      };
      this.localeData = yield getLocaleData(this.effectiveLocale);
      this.localizeInputValues();
    });
  }
  shouldFocusRangeStart() {
    const startValue = this.value[0];
    const endValue = this.value[1];
    return !!(endValue && !startValue && this.focusedInput === "end" && this.startInput);
  }
  shouldFocusRangeEnd() {
    const startValue = this.value[0];
    const endValue = this.value[1];
    return !!(startValue && !endValue && this.focusedInput === "start" && this.endInput);
  }
  restoreInputFocus() {
    if (!this.range) {
      this.startInput.setFocus();
      return;
    }
    const focusedInput = this.focusedInput === "start" ? this.startInput : this.endInput;
    focusedInput.setFocus();
  }
  localizeInputValues() {
    const date = dateFromRange(this.range ? Array.isArray(this.valueAsDate) && this.valueAsDate[0] || void 0 : this.valueAsDate, this.minAsDate, this.maxAsDate);
    const endDate = this.range ? dateFromRange(Array.isArray(this.valueAsDate) && this.valueAsDate[1] || void 0, this.minAsDate, this.maxAsDate) : null;
    this.setInputValue((date && this.dateTimeFormat.format(date)) ?? "", "start");
    this.setInputValue((this.range && endDate && this.dateTimeFormat.format(endDate)) ?? "", "end");
  }
  warnAboutInvalidValue(value) {
    console.warn(`The specified value "${value}" does not conform to the required format, "YYYY-MM-DD".`);
  }
  getNormalizedDate(value) {
    if (!value) {
      return "";
    }
    if (!isTwoDigitYear(value)) {
      return value;
    }
    const {
      day,
      month,
      year
    } = datePartsFromISO(value);
    const normalizedYear = normalizeToCurrentCentury(Number(year));
    return `${normalizedYear}-${month}-${day}`;
  }
  static get delegatesFocus() {
    return true;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "focusTrapDisabled": ["handleFocusTrapDisabled"],
      "disabled": ["handleDisabledAndReadOnlyChange"],
      "readOnly": ["handleDisabledAndReadOnlyChange"],
      "value": ["valueWatcher"],
      "valueAsDate": ["valueAsDateWatcher"],
      "flipPlacements": ["flipPlacementsHandler"],
      "messageOverrides": ["onMessagesChange"],
      "min": ["onMinChanged"],
      "max": ["onMaxChanged"],
      "open": ["openHandler"],
      "overlayPositioning": ["overlayPositioningHandler"],
      "effectiveLocale": ["effectiveLocaleChange", "handleDateTimeFormatChange"],
      "numberingSystem": ["handleDateTimeFormatChange"],
      "layout": ["setReferenceEl"],
      "focusedInput": ["setReferenceEl"]
    };
  }
  static get style() {
    return CalciteInputDatePickerStyle0;
  }
}, [17, "calcite-input-date-picker", {
  "disabled": [516],
  "focusTrapDisabled": [516, "focus-trap-disabled"],
  "form": [513],
  "readOnly": [516, "read-only"],
  "value": [1025],
  "flipPlacements": [16],
  "headingLevel": [514, "heading-level"],
  "valueAsDate": [1040],
  "messageOverrides": [1040],
  "messages": [1040],
  "minAsDate": [1040],
  "maxAsDate": [1040],
  "min": [513],
  "max": [513],
  "open": [1540],
  "validationMessage": [1, "validation-message"],
  "validationIcon": [520, "validation-icon"],
  "validity": [1040],
  "name": [513],
  "numberingSystem": [513, "numbering-system"],
  "scale": [513],
  "status": [513],
  "placement": [513],
  "range": [516],
  "required": [516],
  "overlayPositioning": [513, "overlay-positioning"],
  "proximitySelectionDisabled": [4, "proximity-selection-disabled"],
  "layout": [513],
  "datePickerActiveDate": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "focusedInput": [32],
  "localeData": [32],
  "setFocus": [64],
  "reposition": [64]
}, [[0, "calciteDaySelect", "calciteDaySelectHandler"]], {
  "focusTrapDisabled": ["handleFocusTrapDisabled"],
  "disabled": ["handleDisabledAndReadOnlyChange"],
  "readOnly": ["handleDisabledAndReadOnlyChange"],
  "value": ["valueWatcher"],
  "valueAsDate": ["valueAsDateWatcher"],
  "flipPlacements": ["flipPlacementsHandler"],
  "messageOverrides": ["onMessagesChange"],
  "min": ["onMinChanged"],
  "max": ["onMaxChanged"],
  "open": ["openHandler"],
  "overlayPositioning": ["overlayPositioningHandler"],
  "effectiveLocale": ["effectiveLocaleChange", "handleDateTimeFormatChange"],
  "numberingSystem": ["handleDateTimeFormatChange"],
  "layout": ["setReferenceEl"],
  "focusedInput": ["setReferenceEl"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-date-picker", "calcite-date-picker", "calcite-date-picker-day", "calcite-date-picker-month", "calcite-date-picker-month-header", "calcite-icon", "calcite-input-message", "calcite-input-text", "calcite-progress"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-input-date-picker":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, InputDatePicker);
        }
        break;
      case "calcite-date-picker":
        if (!customElements.get(tagName)) {
          defineCustomElement8();
        }
        break;
      case "calcite-date-picker-day":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
        }
        break;
      case "calcite-date-picker-month":
        if (!customElements.get(tagName)) {
          defineCustomElement6();
        }
        break;
      case "calcite-date-picker-month-header":
        if (!customElements.get(tagName)) {
          defineCustomElement7();
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
      case "calcite-input-message":
        if (!customElements.get(tagName)) {
          defineCustomElement2();
        }
        break;
      case "calcite-input-text":
        if (!customElements.get(tagName)) {
          defineCustomElement4();
        }
        break;
      case "calcite-progress":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteInputDatePicker = InputDatePicker;
var defineCustomElement9 = defineCustomElement$1;
export {
  CalciteInputDatePicker,
  defineCustomElement9 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/date.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/date-picker-day.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/date-picker-month.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/date-picker-month-header.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/date-picker.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-input-date-picker.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-input-date-picker-DWGYE6EQ.js.map
