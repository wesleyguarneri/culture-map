import {
  defineCustomElement as defineCustomElement6
} from "./chunk-QCVURXTN.js";
import {
  defineCustomElement as defineCustomElement5
} from "./chunk-HIXKWE2M.js";
import "./chunk-I7U2PT6O.js";
import {
  defineCustomElement as defineCustomElement4
} from "./chunk-TXGX3G6I.js";
import "./chunk-JKU7Z3N3.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-7LJZYMY3.js";
import "./chunk-3Q7H7LRX.js";
import "./chunk-K27J73UB.js";
import "./chunk-67SMQ6CN.js";
import "./chunk-LVO5HG5M.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-L7FZBUUR.js";
import {
  HiddenFormInputSlot,
  afterConnectDefaultValueSet,
  connectForm,
  disconnectForm
} from "./chunk-HIXQ76MY.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-46GG7UPH.js";
import {
  connectLabel,
  disconnectLabel
} from "./chunk-PBDQTCSC.js";
import "./chunk-YAVW3H3N.js";
import "./chunk-BJUGMQT5.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-XGIY42ZI.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-M6DKAVSK.js";
import {
  connectLocalized,
  disconnectLocalized,
  getDateTimeFormat
} from "./chunk-B3F3MSZ2.js";
import "./chunk-EU6DW6GK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import "./chunk-D25A7Z5T.js";
import "./chunk-RGUNAV4Z.js";
import "./chunk-RCBGISRX.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-input-time-zone.js
var CSS = {
  offset: "offset"
};
var hourToMinutes = 60;
function timeZoneOffsetToDecimal(shortOffsetTimeZoneName) {
  const minusSign = "−";
  const hyphen = "-";
  return shortOffsetTimeZoneName.replace(":15", ".25").replace(":30", ".5").replace(":45", ".75").replace(minusSign, hyphen);
}
function toOffsetValue(timeZoneName, referenceDateInMs) {
  const offset = getTimeZoneShortOffset(timeZoneName, "en-US", referenceDateInMs).replace("GMT", "");
  if (offset === "") {
    return 0;
  }
  return Number(timeZoneOffsetToDecimal(offset)) * hourToMinutes;
}
function getUserTimeZoneOffset() {
  const localDate = /* @__PURE__ */ new Date();
  return localDate.getTimezoneOffset() * -1;
}
function getUserTimeZoneName() {
  const dateFormatter = new Intl.DateTimeFormat();
  return dateFormatter.resolvedOptions().timeZone;
}
function getNormalizer(mode) {
  return __async(this, null, function* () {
    if (mode === "offset") {
      return (timeZone) => timeZone;
    }
    const {
      normalize
    } = yield import("./time-zones-MX7ZCLWU.js");
    return normalize;
  });
}
function createTimeZoneItems(locale, messages, mode, referenceDate, standardTime) {
  return __async(this, null, function* () {
    if (mode === "name") {
      const {
        groupByName
      } = yield import("./index2-W5BIYYA3.js");
      const groups2 = yield groupByName();
      return groups2.map(({
        label: timeZone
      }) => {
        const label = toUserFriendlyName(timeZone);
        const value = timeZone;
        return {
          label,
          value,
          metadata: {
            filterValue: timeZone
          }
        };
      }).filter((group) => !!group).sort();
    }
    const effectiveLocale = standardTime === "user" ? locale : (
      // we use locales that will always yield a short offset that matches `standardTime`
      standardTime === "utc" ? "fr" : "en-GB"
    );
    const referenceDateInMs = referenceDate.getTime();
    if (mode === "region") {
      const [{
        groupByRegion
      }, {
        getCountry,
        global: globalLabel
      }] = yield Promise.all([import("./index3-ZKJGXCLW.js"), import("./region-VXPIGCHH.js")]);
      const groups2 = yield groupByRegion();
      return groups2.map(({
        label: region,
        tzs
      }) => {
        tzs.sort((timeZoneA, timeZoneB) => {
          const labeledTimeZoneA = getTimeZoneLabel(timeZoneA, messages);
          const labeledTimeZoneB = getTimeZoneLabel(timeZoneB, messages);
          const gmtTimeZoneString = "Etc/GMT";
          if (timeZoneA.startsWith(gmtTimeZoneString) && timeZoneB.startsWith(gmtTimeZoneString)) {
            const offsetStringA = timeZoneA.substring(gmtTimeZoneString.length);
            const offsetStringB = timeZoneB.substring(gmtTimeZoneString.length);
            const offsetA = offsetStringA === "" ? 0 : parseInt(offsetStringA);
            const offsetB = offsetStringB === "" ? 0 : parseInt(offsetStringB);
            return offsetB - offsetA;
          }
          return labeledTimeZoneA.localeCompare(labeledTimeZoneB);
        });
        return {
          label: getMessageOrKeyFallback(messages, region),
          items: tzs.map((timeZone) => {
            const decimalOffset = timeZoneOffsetToDecimal(getTimeZoneShortOffset(timeZone, effectiveLocale, referenceDateInMs));
            const label = getTimeZoneLabel(timeZone, messages);
            const filterValue = region === globalLabel ? (
              // we rely on the label for search since GMT items have their signs inverted (see https://en.wikipedia.org/wiki/Tz_database#Area)
              // in addition to the label we also add "Global" and "Etc" to allow searching for these items
              `${getTimeZoneLabel(globalLabel, messages)} Etc`
            ) : toUserFriendlyName(timeZone);
            const countryCode = getCountry(timeZone);
            const country = getMessageOrKeyFallback(messages, countryCode);
            return {
              label,
              value: timeZone,
              metadata: {
                country: country === label ? void 0 : country,
                filterValue,
                offset: decimalOffset
              }
            };
          })
        };
      }).sort((groupA, groupB) => groupA.label === globalLabel ? -1 : groupB.label === globalLabel ? 1 : groupA.label.localeCompare(groupB.label));
    }
    const [{
      groupByOffset
    }, {
      DateEngine
    }] = yield Promise.all([import("./index4-JVPQWCEN.js"), import("./index5-AITJVWNE.js")]);
    const groups = yield groupByOffset({
      dateEngine: new DateEngine(),
      groupDateRange: 1,
      startDate: new Date(referenceDateInMs).toISOString()
    });
    const listFormatter = new Intl.ListFormat(locale, {
      style: "long",
      type: "conjunction"
    });
    const offsetTimeZoneNameBlockList = ["Factory", "Etc/UTC"];
    groups.forEach((group) => {
      const indexOffsets = [];
      let removedSoFar = 0;
      group.tzs.forEach((tz, index) => {
        if (offsetTimeZoneNameBlockList.includes(tz)) {
          removedSoFar++;
        }
        indexOffsets[index] = removedSoFar;
      });
      group.tzs = group.tzs.filter((tz) => !offsetTimeZoneNameBlockList.includes(tz));
      group.labelTzIdx = group.labelTzIdx.map((index) => index - indexOffsets[index]).filter((index) => index >= 0 && index < group.tzs.length);
    });
    return groups.map(({
      labelTzIdx,
      tzs
    }) => {
      const groupRepTz = tzs[0];
      const decimalOffset = timeZoneOffsetToDecimal(getTimeZoneShortOffset(groupRepTz, effectiveLocale, referenceDateInMs));
      const value = toOffsetValue(groupRepTz, referenceDateInMs);
      const tzLabels = labelTzIdx.map((index) => getTimeZoneLabel(tzs[index], messages));
      const label = createTimeZoneOffsetLabel(messages, decimalOffset, listFormatter.format(tzLabels));
      return {
        label,
        value,
        metadata: {
          filterValue: tzs.map((tz) => toUserFriendlyName(tz))
        }
      };
    }).filter((group) => !!group).sort((groupA, groupB) => groupA.value - groupB.value);
  });
}
function getTimeZoneLabel(timeZone, messages) {
  return messages[timeZone] || getCity(timeZone);
}
function getSelectedRegionTimeZoneLabel(city, country, messages) {
  const template = messages.timeZoneRegionLabel;
  return template.replace("{city}", city).replace("{country}", getMessageOrKeyFallback(messages, country));
}
function getMessageOrKeyFallback(messages, key) {
  return messages[key] || key;
}
function getCity(timeZone) {
  return timeZone.split("/").pop();
}
function toUserFriendlyName(timeZoneName) {
  return timeZoneName.replace(/_/g, " ");
}
function createTimeZoneOffsetLabel(messages, offsetLabel, groupLabel) {
  return messages.timeZoneLabel.replace("{offset}", offsetLabel).replace("{cities}", groupLabel);
}
function getTimeZoneShortOffset(timeZone, locale, referenceDateInMs = Date.now()) {
  const dateTimeFormat = getDateTimeFormat(locale, {
    timeZone,
    timeZoneName: "shortOffset"
  });
  const parts = dateTimeFormat.formatToParts(referenceDateInMs);
  return parts.find(({
    type
  }) => type === "timeZoneName").value;
}
function isGroup(item) {
  return item.items !== void 0;
}
function flattenTimeZoneItems(timeZoneItems) {
  return isGroup(timeZoneItems[0]) ? timeZoneItems.flatMap((item) => item.items) : timeZoneItems;
}
function findTimeZoneItemByProp(timeZoneItems, prop, valueToMatch) {
  return valueToMatch == null ? null : flattenTimeZoneItems(timeZoneItems).find((item) => (
    // intentional == to match string to number
    item[prop] == valueToMatch
  ));
}
var inputTimeZoneCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}.offset{white-space:nowrap}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";
var CalciteInputTimeZoneStyle0 = inputTimeZoneCss;
var InputTimeZone = proxyCustomElement(class InputTimeZone2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputTimeZoneBeforeClose = createEvent(this, "calciteInputTimeZoneBeforeClose", 6);
    this.calciteInputTimeZoneBeforeOpen = createEvent(this, "calciteInputTimeZoneBeforeOpen", 6);
    this.calciteInputTimeZoneChange = createEvent(this, "calciteInputTimeZoneChange", 6);
    this.calciteInputTimeZoneClose = createEvent(this, "calciteInputTimeZoneClose", 6);
    this.calciteInputTimeZoneOpen = createEvent(this, "calciteInputTimeZoneOpen", 6);
    this.setComboboxRef = (el) => {
      this.comboboxEl = el;
    };
    this.onComboboxBeforeClose = (event) => {
      event.stopPropagation();
      this.overrideSelectedLabelForRegion(false);
      this.calciteInputTimeZoneBeforeClose.emit();
    };
    this.onComboboxBeforeOpen = (event) => {
      event.stopPropagation();
      this.overrideSelectedLabelForRegion(true);
      this.calciteInputTimeZoneBeforeOpen.emit();
    };
    this.onComboboxChange = (event) => {
      event.stopPropagation();
      const combobox = event.target;
      const selectedItem = combobox.selectedItems[0];
      if (!selectedItem) {
        this.value = null;
        this.selectedTimeZoneItem = null;
        this.calciteInputTimeZoneChange.emit();
        return;
      }
      const selected = this.findTimeZoneItemByLabel(selectedItem.getAttribute("data-label"));
      const selectedValue = `${selected.value}`;
      if (this.value === selectedValue && selected.label === this.selectedTimeZoneItem.label) {
        return;
      }
      this.value = selectedValue;
      this.selectedTimeZoneItem = selected;
      this.calciteInputTimeZoneChange.emit();
    };
    this.onComboboxClose = (event) => {
      event.stopPropagation();
      this.open = false;
      this.calciteInputTimeZoneClose.emit();
    };
    this.onComboboxOpen = (event) => {
      this.open = true;
      event.stopPropagation();
      this.calciteInputTimeZoneOpen.emit();
    };
    this.clearable = false;
    this.disabled = false;
    this.form = void 0;
    this.maxItems = 0;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.mode = "offset";
    this.offsetStyle = "user";
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
    this.open = false;
    this.overlayPositioning = "absolute";
    this.referenceDate = void 0;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.value = void 0;
    this.readOnly = false;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
  }
  onMessagesChange() {
  }
  handleTimeZoneItemPropsChange() {
    if (!this.timeZoneItems) {
      return;
    }
    this.updateTimeZoneItems();
    this.updateTimeZoneSelection();
  }
  openChanged() {
    this.comboboxEl.open = this.open;
  }
  handleValueChange(value, oldValue) {
    value = this.normalizeValue(value);
    if (!value) {
      if (this.clearable) {
        this.value = value;
        this.selectedTimeZoneItem = null;
        return;
      }
      this.value = oldValue;
      this.selectedTimeZoneItem = this.findTimeZoneItem(oldValue);
      return;
    }
    const timeZoneItem = this.findTimeZoneItem(value);
    if (!timeZoneItem) {
      this.value = oldValue;
      return;
    }
    this.selectedTimeZoneItem = timeZoneItem;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      yield this.comboboxEl.setFocus();
    });
  }
  effectiveLocaleWatcher() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  /**
   * Helps override the selected item's label for region mode outside of item rendering logic to avoid flickering text change
   *
   * @param open
   * @private
   */
  overrideSelectedLabelForRegion(open) {
    if (this.mode !== "region" || !this.selectedTimeZoneItem) {
      return;
    }
    const {
      label,
      metadata
    } = this.selectedTimeZoneItem;
    this.comboboxEl.selectedItems[0].textLabel = !metadata.country || open ? label : getSelectedRegionTimeZoneLabel(label, metadata.country, this.messages);
  }
  findTimeZoneItem(value) {
    return findTimeZoneItemByProp(this.timeZoneItems, "value", value);
  }
  findTimeZoneItemByLabel(label) {
    return findTimeZoneItemByProp(this.timeZoneItems, "label", label);
  }
  updateTimeZoneItems() {
    return __async(this, null, function* () {
      this.timeZoneItems = yield this.createTimeZoneItems();
    });
  }
  updateTimeZoneSelection() {
    return __async(this, null, function* () {
      if (this.value === "" && this.clearable) {
        this.selectedTimeZoneItem = null;
        return;
      }
      const fallbackValue = this.mode === "offset" ? getUserTimeZoneOffset() : getUserTimeZoneName();
      const valueToMatch = this.value ?? fallbackValue;
      this.selectedTimeZoneItem = this.findTimeZoneItem(valueToMatch) || this.findTimeZoneItem(fallbackValue);
    });
  }
  createTimeZoneItems() {
    return __async(this, null, function* () {
      if (!this.effectiveLocale || !this.messages) {
        return [];
      }
      return createTimeZoneItems(this.effectiveLocale, this.messages, this.mode, this.referenceDate instanceof Date ? this.referenceDate : new Date(this.referenceDate ?? Date.now()), this.offsetStyle);
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectForm(this);
    connectLabel(this);
    connectLocalized(this);
    connectMessages(this);
  }
  disconnectedCallback() {
    disconnectForm(this);
    disconnectLabel(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  normalizeValue(value) {
    value = value === null ? "" : value;
    return value ? this.normalizer(value) : value;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      const [, normalizer] = yield Promise.all([setUpMessages(this), getNormalizer(this.mode)]);
      this.normalizer = normalizer;
      yield this.updateTimeZoneItems();
      this.value = this.normalizeValue(this.value);
      yield this.updateTimeZoneSelection();
      const selectedValue = this.selectedTimeZoneItem ? `${this.selectedTimeZoneItem.value}` : null;
      afterConnectDefaultValueSet(this, selectedValue);
      this.value = selectedValue;
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
    this.openChanged();
  }
  componentDidRender() {
    updateHostInteraction(this);
    this.overrideSelectedLabelForRegion(this.open);
  }
  render() {
    return h(Host, {
      key: "b94fb2d93cdcaf0c44bbd2a0c7deaf59701078bf"
    }, h(InteractiveContainer, {
      key: "45246bbab441e9daf0e372832e74d7660039c770",
      disabled: this.disabled
    }, h("calcite-combobox", {
      key: "294e44d8ab01079651c417f7808348e584f135b7",
      clearDisabled: !this.clearable,
      disabled: this.disabled,
      label: this.messages.chooseTimeZone,
      lang: this.effectiveLocale,
      maxItems: this.maxItems,
      onCalciteComboboxBeforeClose: this.onComboboxBeforeClose,
      onCalciteComboboxBeforeOpen: this.onComboboxBeforeOpen,
      onCalciteComboboxChange: this.onComboboxChange,
      onCalciteComboboxClose: this.onComboboxClose,
      onCalciteComboboxOpen: this.onComboboxOpen,
      overlayPositioning: this.overlayPositioning,
      placeholder: this.mode === "name" ? this.messages.namePlaceholder : this.mode === "offset" ? this.messages.offsetPlaceholder : this.messages.regionPlaceholder,
      placeholderIcon: "search",
      readOnly: this.readOnly,
      ref: this.setComboboxRef,
      scale: this.scale,
      selectionMode: this.clearable ? "single" : "single-persist",
      status: this.status,
      "validation-icon": this.validationIcon,
      "validation-message": this.validationMessage
    }, this.renderItems()), h(HiddenFormInputSlot, {
      key: "0b7a0694166f1d5b36b780d3436dad15d466bc3c",
      component: this
    })));
  }
  renderItems() {
    if (this.mode === "region") {
      return this.renderRegionItems();
    }
    return this.timeZoneItems.map((group) => {
      const selected = this.selectedTimeZoneItem === group;
      const {
        label,
        metadata,
        value
      } = group;
      return h("calcite-combobox-item", {
        "data-label": label,
        key: label,
        metadata,
        selected,
        textLabel: label,
        value
      });
    });
  }
  renderRegionItems() {
    return this.timeZoneItems.flatMap(({
      label,
      items
    }) => h("calcite-combobox-item-group", {
      key: label,
      label
    }, items.map((item) => {
      const selected = this.selectedTimeZoneItem === item;
      const {
        label: label2,
        metadata,
        value
      } = item;
      return h("calcite-combobox-item", {
        "data-label": label2,
        description: metadata.country,
        key: label2,
        metadata,
        selected,
        textLabel: label2,
        value
      }, h("span", {
        class: CSS.offset,
        slot: "content-end"
      }, metadata.offset));
    })));
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
      "messageOverrides": ["onMessagesChange"],
      "messages": ["handleTimeZoneItemPropsChange"],
      "mode": ["handleTimeZoneItemPropsChange"],
      "referenceDate": ["handleTimeZoneItemPropsChange"],
      "open": ["openChanged"],
      "value": ["handleValueChange"],
      "effectiveLocale": ["effectiveLocaleWatcher"]
    };
  }
  static get style() {
    return CalciteInputTimeZoneStyle0;
  }
}, [17, "calcite-input-time-zone", {
  "clearable": [516],
  "disabled": [516],
  "form": [513],
  "maxItems": [514, "max-items"],
  "messages": [1040],
  "messageOverrides": [1040],
  "mode": [513],
  "offsetStyle": [513, "offset-style"],
  "validationMessage": [1, "validation-message"],
  "validationIcon": [520, "validation-icon"],
  "validity": [1040],
  "name": [513],
  "open": [1540],
  "overlayPositioning": [513, "overlay-positioning"],
  "referenceDate": [1, "reference-date"],
  "required": [516],
  "scale": [513],
  "status": [513],
  "value": [1025],
  "readOnly": [516, "read-only"],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "setFocus": [64]
}, void 0, {
  "messageOverrides": ["onMessagesChange"],
  "messages": ["handleTimeZoneItemPropsChange"],
  "mode": ["handleTimeZoneItemPropsChange"],
  "referenceDate": ["handleTimeZoneItemPropsChange"],
  "open": ["openChanged"],
  "value": ["handleValueChange"],
  "effectiveLocale": ["effectiveLocaleWatcher"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-time-zone", "calcite-chip", "calcite-combobox", "calcite-combobox-item", "calcite-combobox-item-group", "calcite-icon", "calcite-input-message"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-input-time-zone":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, InputTimeZone);
        }
        break;
      case "calcite-chip":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-combobox":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
        }
        break;
      case "calcite-combobox-item":
        if (!customElements.get(tagName)) {
          defineCustomElement4();
        }
        break;
      case "calcite-combobox-item-group":
        if (!customElements.get(tagName)) {
          defineCustomElement6();
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
    }
  });
}
defineCustomElement$1();
var CalciteInputTimeZone = InputTimeZone;
var defineCustomElement7 = defineCustomElement$1;
export {
  CalciteInputTimeZone,
  defineCustomElement7 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-input-time-zone.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-input-time-zone-Y7XVAVIH.js.map
