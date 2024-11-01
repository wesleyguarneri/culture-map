import {
  decimalPlaces,
  getDecimals
} from "./chunk-MWH4LPTV.js";
import {
  defineCustomElement as defineCustomElement7
} from "./chunk-A3REIP66.js";
import {
  defineCustomElement as defineCustomElement6
} from "./chunk-5DGWLHL7.js";
import {
  defineCustomElement as defineCustomElement5
} from "./chunk-AMGONSU2.js";
import {
  defineCustomElement as defineCustomElement4
} from "./chunk-KJHR46PR.js";
import {
  syncHiddenFormInput
} from "./chunk-GL2UDHKK.js";
import {
  Validation
} from "./chunk-LVO5HG5M.js";
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-L7FZBUUR.js";
import {
  HiddenFormInputSlot,
  connectForm,
  disconnectForm,
  submitForm
} from "./chunk-HIXQ76MY.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-46GG7UPH.js";
import {
  connectLabel,
  disconnectLabel,
  getLabelText
} from "./chunk-PBDQTCSC.js";
import {
  activateFocusTrap,
  connectFocusTrap,
  deactivateFocusTrap
} from "./chunk-LY6QK6XQ.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-URKUSNVW.js";
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
  getDateTimeFormat,
  getSupportedLocale,
  getSupportedNumberingSystem,
  isValidNumber,
  numberStringFormatter
} from "./chunk-B3F3MSZ2.js";
import {
  numberKeys
} from "./chunk-EU6DW6GK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  getIconScale
} from "./chunk-D25A7Z5T.js";
import {
  focusFirstTabbable,
  toAriaBoolean
} from "./chunk-RGUNAV4Z.js";
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

// ../../../node_modules/@esri/calcite-components/dist/components/time-picker.js
var maxTenthForMinuteAndSecond = 5;
function createLocaleDateTimeFormatter(locale2, numberingSystem, includeSeconds = true, fractionalSecondDigits) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    numberingSystem: getSupportedNumberingSystem(numberingSystem)
  };
  if (includeSeconds) {
    options.second = "2-digit";
    if (fractionalSecondDigits) {
      options.fractionalSecondDigits = fractionalSecondDigits;
    }
  }
  return getDateTimeFormat(locale2, options);
}
function formatTimePart(number, minLength) {
  if (number === null || number === void 0) {
    return;
  }
  const numberAsString = number.toString();
  const numberDecimalPlaces = decimalPlaces(number);
  if (number < 1 && numberDecimalPlaces > 0 && numberDecimalPlaces < 4) {
    const fractionalDigits = numberAsString.replace("0.", "");
    if (!minLength || fractionalDigits.length === minLength) {
      return fractionalDigits;
    }
    if (fractionalDigits.length < minLength) {
      return fractionalDigits.padEnd(minLength, "0");
    }
    return fractionalDigits;
  }
  if (number >= 0 && number < 10) {
    return numberAsString.padStart(2, "0");
  }
  if (number >= 10) {
    return numberAsString;
  }
}
function formatTimeString(value) {
  if (!isValidTime(value)) {
    return null;
  }
  const {
    hour,
    minute,
    second,
    fractionalSecond
  } = parseTimeString(value);
  let formattedValue = `${formatTimePart(parseInt(hour))}:${formatTimePart(parseInt(minute))}`;
  if (second) {
    formattedValue += `:${formatTimePart(parseInt(second))}`;
    if (fractionalSecond) {
      formattedValue += `.${fractionalSecond}`;
    }
  }
  return formattedValue;
}
function fractionalSecondPartToMilliseconds(fractionalSecondPart) {
  return parseInt((parseFloat(`0.${fractionalSecondPart}`) / 1e-3).toFixed(3));
}
function getLocaleHourCycle(locale2, numberingSystem) {
  const formatter = createLocaleDateTimeFormatter(locale2, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart("meridiem", parts) ? "12" : "24";
}
function getLocalizedDecimalSeparator(locale2, numberingSystem) {
  numberStringFormatter.numberFormatOptions = {
    locale: locale2,
    numberingSystem
  };
  return numberStringFormatter.localize("1.1").split("")[1];
}
function getLocalizedTimePartSuffix(part, locale2, numberingSystem = "latn") {
  const formatter = createLocaleDateTimeFormatter(locale2, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart(`${part}Suffix`, parts);
}
function getLocalizedTimePart(part, parts) {
  if (!part || !parts) {
    return null;
  }
  if (part === "hourSuffix") {
    const hourIndex = parts.indexOf(parts.find(({
      type
    }) => type === "hour"));
    const minuteIndex = parts.indexOf(parts.find(({
      type
    }) => type === "minute"));
    const hourSuffix = parts[hourIndex + 1];
    return hourSuffix && hourSuffix.type === "literal" && minuteIndex - hourIndex === 2 ? hourSuffix.value?.trim() || null : null;
  }
  if (part === "minuteSuffix") {
    const minuteIndex = parts.indexOf(parts.find(({
      type
    }) => type === "minute"));
    const secondIndex = parts.indexOf(parts.find(({
      type
    }) => type === "second"));
    const minuteSuffix = parts[minuteIndex + 1];
    return minuteSuffix && minuteSuffix.type === "literal" && secondIndex - minuteIndex === 2 ? minuteSuffix.value?.trim() || null : null;
  }
  if (part === "secondSuffix") {
    const secondIndex = parts.indexOf(parts.find(({
      type
    }) => type === "second"));
    const secondSuffix = parts[secondIndex + 1];
    return secondSuffix && secondSuffix.type === "literal" ? secondSuffix.value?.trim() || null : null;
  }
  return parts.find(({
    type
  }) => part == "meridiem" ? type === "dayPeriod" : type === part)?.value || null;
}
function getMeridiem(hour) {
  if (!isValidNumber(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  return hourAsNumber >= 0 && hourAsNumber <= 11 ? "AM" : "PM";
}
function getMeridiemOrder(locale2) {
  const isRtl = locale2 === "ar" || locale2 === "he";
  if (isRtl) {
    return 0;
  }
  const timeParts = getTimeParts({
    value: "00:00:00",
    locale: locale2,
    numberingSystem: "latn"
  });
  return timeParts.findIndex((value) => value.type === "dayPeriod");
}
function isValidTime(value) {
  if (!value || value.startsWith(":") || value.endsWith(":")) {
    return false;
  }
  const splitValue = value.split(":");
  const validLength = splitValue.length > 1 && splitValue.length < 4;
  if (!validLength) {
    return false;
  }
  const [hour, minute, second] = splitValue;
  const hourAsNumber = parseInt(splitValue[0]);
  const minuteAsNumber = parseInt(splitValue[1]);
  const secondAsNumber = parseInt(splitValue[2]);
  const hourValid = isValidNumber(hour) && hourAsNumber >= 0 && hourAsNumber < 24;
  const minuteValid = isValidNumber(minute) && minuteAsNumber >= 0 && minuteAsNumber < 60;
  const secondValid = isValidNumber(second) && secondAsNumber >= 0 && secondAsNumber < 60;
  if (hourValid && minuteValid && !second || hourValid && minuteValid && secondValid) {
    return true;
  }
}
function isValidTimePart(value, part) {
  if (part === "meridiem") {
    return value === "AM" || value === "PM";
  }
  if (!isValidNumber(value)) {
    return false;
  }
  const valueAsNumber = Number(value);
  return part === "hour" ? valueAsNumber >= 0 && valueAsNumber < 24 : valueAsNumber >= 0 && valueAsNumber < 60;
}
function localizeTimePart({
  value,
  part,
  locale: locale2,
  numberingSystem
}) {
  if (part === "fractionalSecond") {
    const localizedDecimalSeparator = getLocalizedDecimalSeparator(locale2, numberingSystem);
    let localizedFractionalSecond = null;
    if (value) {
      numberStringFormatter.numberFormatOptions = {
        locale: locale2,
        numberingSystem
      };
      const localizedZero = numberStringFormatter.localize("0");
      if (parseInt(value) === 0) {
        localizedFractionalSecond = "".padStart(value.length, localizedZero);
      } else {
        localizedFractionalSecond = numberStringFormatter.localize(`0.${value}`).replace(`${localizedZero}${localizedDecimalSeparator}`, "");
        if (localizedFractionalSecond.length < value.length) {
          localizedFractionalSecond = localizedFractionalSecond.padEnd(value.length, localizedZero);
        }
      }
    }
    return localizedFractionalSecond;
  }
  if (!isValidTimePart(value, part)) {
    return;
  }
  const valueAsNumber = parseInt(value);
  const date = new Date(Date.UTC(0, 0, 0, part === "hour" ? valueAsNumber : part === "meridiem" ? value === "AM" ? 0 : 12 : 0, part === "minute" ? valueAsNumber : 0, part === "second" ? valueAsNumber : 0));
  if (!date) {
    return;
  }
  const formatter = createLocaleDateTimeFormatter(locale2, numberingSystem);
  const parts = formatter.formatToParts(date);
  return getLocalizedTimePart(part, parts);
}
function localizeTimeString({
  value,
  locale: locale2,
  numberingSystem,
  includeSeconds = true,
  fractionalSecondDigits
}) {
  if (!isValidTime(value)) {
    return null;
  }
  const {
    hour,
    minute,
    second = "0",
    fractionalSecond
  } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second), fractionalSecond && fractionalSecondPartToMilliseconds(fractionalSecond)));
  const formatter = createLocaleDateTimeFormatter(locale2, numberingSystem, includeSeconds, fractionalSecondDigits);
  return formatter.format(dateFromTimeString) || null;
}
function localizeTimeStringToParts({
  value,
  locale: locale2,
  numberingSystem = "latn"
}) {
  if (!isValidTime(value)) {
    return null;
  }
  const {
    hour,
    minute,
    second = "0",
    fractionalSecond
  } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale2, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return {
      localizedHour: getLocalizedTimePart("hour", parts),
      localizedHourSuffix: getLocalizedTimePart("hourSuffix", parts),
      localizedMinute: getLocalizedTimePart("minute", parts),
      localizedMinuteSuffix: getLocalizedTimePart("minuteSuffix", parts),
      localizedSecond: getLocalizedTimePart("second", parts),
      localizedDecimalSeparator: getLocalizedDecimalSeparator(locale2, numberingSystem),
      localizedFractionalSecond: localizeTimePart({
        value: fractionalSecond,
        part: "fractionalSecond",
        locale: locale2,
        numberingSystem
      }),
      localizedSecondSuffix: getLocalizedTimePart("secondSuffix", parts),
      localizedMeridiem: getLocalizedTimePart("meridiem", parts)
    };
  }
  return null;
}
function getTimeParts({
  value,
  locale: locale2,
  numberingSystem
}) {
  if (!isValidTime(value)) {
    return null;
  }
  const {
    hour,
    minute,
    second = "0"
  } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale2, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return parts;
  }
  return null;
}
function parseTimeString(value) {
  if (isValidTime(value)) {
    const [hour, minute, secondDecimal] = value.split(":");
    let second = secondDecimal;
    let fractionalSecond = null;
    if (secondDecimal?.includes(".")) {
      [second, fractionalSecond] = secondDecimal.split(".");
    }
    return {
      fractionalSecond,
      hour,
      minute,
      second
    };
  }
  return {
    fractionalSecond: null,
    hour: null,
    minute: null,
    second: null
  };
}
function toISOTimeString(value, includeSeconds = true) {
  if (!isValidTime(value)) {
    return "";
  }
  const {
    hour,
    minute,
    second,
    fractionalSecond
  } = parseTimeString(value);
  let isoTimeString = `${formatTimePart(parseInt(hour))}:${formatTimePart(parseInt(minute))}`;
  if (includeSeconds) {
    isoTimeString += `:${formatTimePart(parseInt(includeSeconds && second || "0"))}`;
    if (fractionalSecond) {
      isoTimeString += `.${fractionalSecond}`;
    }
  }
  return isoTimeString;
}
var CSS = {
  button: "button",
  buttonBottomLeft: "button--bottom-left",
  buttonBottomRight: "button--bottom-right",
  buttonFractionalSecondDown: "button--fractionalSecond-down",
  buttonFractionalSecondUp: "button--fractionalSecond-up",
  buttonHourDown: "button--hour-down",
  buttonHourUp: "button--hour-up",
  buttonMeridiemDown: "button--meridiem-down",
  buttonMeridiemUp: "button--meridiem-up",
  buttonMinuteDown: "button--minute-down",
  buttonMinuteUp: "button--minute-up",
  buttonSecondDown: "button--second-down",
  buttonSecondUp: "button--second-up",
  buttonTopLeft: "button--top-left",
  buttonTopRight: "button--top-right",
  column: "column",
  delimiter: "delimiter",
  fractionalSecond: "fractionalSecond",
  hour: "hour",
  input: "input",
  inputFocus: "inputFocus",
  meridiem: "meridiem",
  minute: "minute",
  second: "second",
  showMeridiem: "show-meridiem",
  showSecond: "show-second",
  "scale-s": "scale-s",
  "scale-m": "scale-m",
  "scale-l": "scale-l",
  timePicker: "time-picker",
  meridiemStart: "meridiem--start"
};
var timePickerCss = ":host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-color-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:var(--calcite-z-index-header);outline-offset:0}.time-picker .button:active{background-color:var(--calcite-color-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-color-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-color-foreground-2);z-index:var(--calcite-z-index-header)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;outline-offset:0}.time-picker .input.inputFocus,.time-picker .input:hover.inputFocus{box-shadow:inset 0 0 0 2px var(--calcite-color-brand);z-index:var(--calcite-z-index-header)}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteTimePickerStyle0 = timePickerCss;
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var TimePicker = proxyCustomElement(class TimePicker2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalTimePickerChange = createEvent(this, "calciteInternalTimePickerChange", 6);
    this.pointerActivated = false;
    this.decrementHour = () => {
      const newHour = !this.hour ? 0 : this.hour === "00" ? 23 : parseInt(this.hour) - 1;
      this.setValuePart("hour", newHour);
    };
    this.decrementMeridiem = () => {
      const newMeridiem = this.meridiem === "PM" ? "AM" : "PM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.decrementMinuteOrSecond = (key) => {
      let newValue;
      if (isValidNumber(this[key])) {
        const valueAsNumber = parseInt(this[key]);
        newValue = valueAsNumber === 0 ? 59 : valueAsNumber - 1;
      } else {
        newValue = 59;
      }
      this.setValuePart(key, newValue);
    };
    this.decrementMinute = () => {
      this.decrementMinuteOrSecond("minute");
    };
    this.decrementSecond = () => {
      this.decrementMinuteOrSecond("second");
    };
    this.focusHandler = (event) => {
      if (this.pointerActivated) {
        return;
      }
      this.activeEl = event.currentTarget;
    };
    this.fractionalSecondKeyDownHandler = (event) => {
      const {
        key
      } = event;
      if (numberKeys.includes(key)) {
        const stepPrecision = decimalPlaces(this.step);
        const fractionalSecondAsInteger = parseInt(this.fractionalSecond);
        const fractionalSecondAsIntegerLength = fractionalSecondAsInteger.toString().length;
        let newFractionalSecondAsIntegerString;
        if (fractionalSecondAsIntegerLength >= stepPrecision) {
          newFractionalSecondAsIntegerString = key.padStart(stepPrecision, "0");
        } else if (fractionalSecondAsIntegerLength < stepPrecision) {
          newFractionalSecondAsIntegerString = `${fractionalSecondAsInteger}${key}`.padStart(stepPrecision, "0");
        }
        this.setValuePart("fractionalSecond", parseFloat(`0.${newFractionalSecondAsIntegerString}`));
      } else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("fractionalSecond", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.nudgeFractionalSecond("down");
            break;
          case "ArrowUp":
            event.preventDefault();
            this.nudgeFractionalSecond("up");
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.fractionalSecondDownClickHandler = () => {
      this.activeEl = this.fractionalSecondEl;
      this.fractionalSecondEl.focus();
      this.nudgeFractionalSecond("down");
    };
    this.fractionalSecondUpClickHandler = () => {
      this.activeEl = this.fractionalSecondEl;
      this.fractionalSecondEl.focus();
      this.nudgeFractionalSecond("up");
    };
    this.hourDownClickHandler = () => {
      this.activeEl = this.hourEl;
      this.hourEl.focus();
      this.decrementHour();
    };
    this.hourKeyDownHandler = (event) => {
      const {
        key
      } = event;
      if (numberKeys.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newHour;
        if (isValidNumber(this.hour)) {
          switch (this.hourCycle) {
            case "12":
              newHour = this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2 ? `1${keyAsNumber}` : keyAsNumber;
              break;
            case "24":
              if (this.hour === "01") {
                newHour = `1${keyAsNumber}`;
              } else if (this.hour === "02" && keyAsNumber >= 0 && keyAsNumber <= 3) {
                newHour = `2${keyAsNumber}`;
              } else {
                newHour = keyAsNumber;
              }
              break;
          }
        } else {
          newHour = keyAsNumber;
        }
        this.setValuePart("hour", newHour);
      } else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("hour", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementHour();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementHour();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.hourUpClickHandler = () => {
      this.activeEl = this.hourEl;
      this.hourEl.focus();
      this.incrementHour();
    };
    this.incrementMeridiem = () => {
      const newMeridiem = this.meridiem === "AM" ? "PM" : "AM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.incrementHour = () => {
      const newHour = isValidNumber(this.hour) ? this.hour === "23" ? 0 : parseInt(this.hour) + 1 : 1;
      this.setValuePart("hour", newHour);
    };
    this.incrementMinuteOrSecond = (key) => {
      const newValue = isValidNumber(this[key]) ? this[key] === "59" ? 0 : parseInt(this[key]) + 1 : 0;
      this.setValuePart(key, newValue);
    };
    this.incrementMinute = () => {
      this.incrementMinuteOrSecond("minute");
    };
    this.incrementSecond = () => {
      this.incrementMinuteOrSecond("second");
    };
    this.inputClickHandler = (event) => {
      this.activeEl = event.target;
    };
    this.meridiemUpClickHandler = () => {
      this.activeEl = this.meridiemEl;
      this.meridiemEl.focus();
      this.incrementMeridiem();
    };
    this.meridiemKeyDownHandler = (event) => {
      switch (event.key) {
        case "a":
          this.setValuePart("meridiem", "AM");
          break;
        case "p":
          this.setValuePart("meridiem", "PM");
          break;
        case "Backspace":
        case "Delete":
          this.setValuePart("meridiem", null);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementMeridiem();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementMeridiem();
          break;
        case " ":
          event.preventDefault();
          break;
      }
    };
    this.meridiemDownClickHandler = () => {
      this.activeEl = this.meridiemEl;
      this.meridiemEl.focus();
      this.decrementMeridiem();
    };
    this.minuteDownClickHandler = () => {
      this.activeEl = this.minuteEl;
      this.minuteEl.focus();
      this.decrementMinute();
    };
    this.minuteUpClickHandler = () => {
      this.activeEl = this.minuteEl;
      this.minuteEl.focus();
      this.incrementMinute();
    };
    this.minuteKeyDownHandler = (event) => {
      const {
        key
      } = event;
      if (numberKeys.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newMinute;
        if (isValidNumber(this.minute) && this.minute.startsWith("0")) {
          const minuteAsNumber = parseInt(this.minute);
          newMinute = minuteAsNumber > maxTenthForMinuteAndSecond ? keyAsNumber : `${minuteAsNumber}${keyAsNumber}`;
        } else {
          newMinute = keyAsNumber;
        }
        this.setValuePart("minute", newMinute);
      } else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("minute", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementMinute();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementMinute();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.nudgeFractionalSecond = (direction) => {
      const stepDecimal = getDecimals(this.step);
      const stepPrecision = decimalPlaces(this.step);
      const fractionalSecondAsInteger = parseInt(this.fractionalSecond);
      const fractionalSecondAsFloat = parseFloat(`0.${this.fractionalSecond}`);
      let nudgedValue;
      let nudgedValueRounded;
      let nudgedValueRoundedDecimals;
      let newFractionalSecond;
      if (direction === "up") {
        nudgedValue = isNaN(fractionalSecondAsInteger) ? 0 : fractionalSecondAsFloat + stepDecimal;
        nudgedValueRounded = parseFloat(nudgedValue.toFixed(stepPrecision));
        nudgedValueRoundedDecimals = getDecimals(nudgedValueRounded);
        newFractionalSecond = nudgedValueRounded < 1 && decimalPlaces(nudgedValueRoundedDecimals) > 0 ? formatTimePart(nudgedValueRoundedDecimals, stepPrecision) : "".padStart(stepPrecision, "0");
      }
      if (direction === "down") {
        nudgedValue = isNaN(fractionalSecondAsInteger) || fractionalSecondAsInteger === 0 ? 1 - stepDecimal : fractionalSecondAsFloat - stepDecimal;
        nudgedValueRounded = parseFloat(nudgedValue.toFixed(stepPrecision));
        nudgedValueRoundedDecimals = getDecimals(nudgedValueRounded);
        newFractionalSecond = nudgedValueRounded < 1 && decimalPlaces(nudgedValueRoundedDecimals) > 0 && Math.sign(nudgedValueRoundedDecimals) === 1 ? formatTimePart(nudgedValueRoundedDecimals, stepPrecision) : "".padStart(stepPrecision, "0");
      }
      this.setValuePart("fractionalSecond", newFractionalSecond);
    };
    this.sanitizeValue = (value) => {
      const {
        hour,
        minute,
        second,
        fractionalSecond
      } = parseTimeString(value);
      if (fractionalSecond) {
        const sanitizedFractionalSecond = this.sanitizeFractionalSecond(fractionalSecond);
        return `${hour}:${minute}:${second}.${sanitizedFractionalSecond}`;
      }
      return isValidTime(value) && value;
    };
    this.sanitizeFractionalSecond = (fractionalSecond) => fractionalSecond && decimalPlaces(this.step) !== fractionalSecond.length ? parseFloat(`0.${fractionalSecond}`).toFixed(decimalPlaces(this.step)).replace("0.", "") : fractionalSecond;
    this.secondKeyDownHandler = (event) => {
      const {
        key
      } = event;
      if (numberKeys.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newSecond;
        if (isValidNumber(this.second) && this.second.startsWith("0")) {
          const secondAsNumber = parseInt(this.second);
          newSecond = secondAsNumber > maxTenthForMinuteAndSecond ? keyAsNumber : `${secondAsNumber}${keyAsNumber}`;
        } else {
          newSecond = keyAsNumber;
        }
        this.setValuePart("second", newSecond);
      } else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("second", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementSecond();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementSecond();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.secondDownClickHandler = () => {
      this.activeEl = this.secondEl;
      this.secondEl.focus();
      this.decrementSecond();
    };
    this.secondUpClickHandler = () => {
      this.activeEl = this.secondEl;
      this.secondEl.focus();
      this.incrementSecond();
    };
    this.setHourEl = (el) => this.hourEl = el;
    this.setMeridiemEl = (el) => this.meridiemEl = el;
    this.setMinuteEl = (el) => this.minuteEl = el;
    this.setSecondEl = (el) => this.secondEl = el;
    this.setFractionalSecondEl = (el) => this.fractionalSecondEl = el;
    this.setValue = (value) => {
      if (isValidTime(value)) {
        const {
          hour,
          minute,
          second,
          fractionalSecond
        } = parseTimeString(value);
        const {
          effectiveLocale: locale2,
          numberingSystem
        } = this;
        const {
          localizedHour,
          localizedHourSuffix,
          localizedMinute,
          localizedMinuteSuffix,
          localizedSecond,
          localizedDecimalSeparator,
          localizedFractionalSecond,
          localizedSecondSuffix,
          localizedMeridiem
        } = localizeTimeStringToParts({
          value,
          locale: locale2,
          numberingSystem
        });
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.fractionalSecond = this.sanitizeFractionalSecond(fractionalSecond);
        this.localizedHour = localizedHour;
        this.localizedHourSuffix = localizedHourSuffix;
        this.localizedMinute = localizedMinute;
        this.localizedMinuteSuffix = localizedMinuteSuffix;
        this.localizedSecond = localizedSecond;
        this.localizedDecimalSeparator = localizedDecimalSeparator;
        this.localizedFractionalSecond = localizedFractionalSecond;
        this.localizedSecondSuffix = localizedSecondSuffix;
        if (localizedMeridiem) {
          this.localizedMeridiem = localizedMeridiem;
          this.meridiem = getMeridiem(this.hour);
        }
      } else {
        this.hour = null;
        this.fractionalSecond = null;
        this.localizedHour = null;
        this.localizedHourSuffix = getLocalizedTimePartSuffix("hour", this.effectiveLocale, this.numberingSystem);
        this.localizedMeridiem = null;
        this.localizedMinute = null;
        this.localizedMinuteSuffix = getLocalizedTimePartSuffix("minute", this.effectiveLocale, this.numberingSystem);
        this.localizedSecond = null;
        this.localizedDecimalSeparator = getLocalizedDecimalSeparator(this.effectiveLocale, this.numberingSystem);
        this.localizedFractionalSecond = null;
        this.localizedSecondSuffix = getLocalizedTimePartSuffix("second", this.effectiveLocale, this.numberingSystem);
        this.meridiem = null;
        this.minute = null;
        this.second = null;
        this.value = null;
      }
    };
    this.setValuePart = (key, value) => {
      const {
        effectiveLocale: locale2,
        numberingSystem
      } = this;
      if (key === "meridiem") {
        this.meridiem = value;
        if (isValidNumber(this.hour)) {
          const hourAsNumber = parseInt(this.hour);
          switch (value) {
            case "AM":
              if (hourAsNumber >= 12) {
                this.hour = formatTimePart(hourAsNumber - 12);
              }
              break;
            case "PM":
              if (hourAsNumber < 12) {
                this.hour = formatTimePart(hourAsNumber + 12);
              }
              break;
          }
          this.localizedHour = localizeTimePart({
            value: this.hour,
            part: "hour",
            locale: locale2,
            numberingSystem
          });
        }
      } else if (key === "fractionalSecond") {
        const stepPrecision = decimalPlaces(this.step);
        if (typeof value === "number") {
          this.fractionalSecond = value === 0 ? "".padStart(stepPrecision, "0") : formatTimePart(value, stepPrecision);
        } else {
          this.fractionalSecond = value;
        }
        this.localizedFractionalSecond = localizeTimePart({
          value: this.fractionalSecond,
          part: "fractionalSecond",
          locale: locale2,
          numberingSystem
        });
      } else {
        this[key] = typeof value === "number" ? formatTimePart(value) : value;
        this[`localized${capitalize(key)}`] = localizeTimePart({
          value: this[key],
          part: key,
          locale: locale2,
          numberingSystem
        });
      }
      let emit = false;
      let newValue;
      if (this.hour && this.minute) {
        newValue = `${this.hour}:${this.minute}`;
        if (this.showSecond) {
          newValue = `${newValue}:${this.second ?? "00"}`;
          if (this.showFractionalSecond && this.fractionalSecond) {
            newValue = `${newValue}.${this.fractionalSecond}`;
          }
        }
      } else {
        newValue = null;
      }
      if (this.value !== newValue) {
        emit = true;
      }
      this.value = newValue;
      this.localizedMeridiem = this.value ? localizeTimeStringToParts({
        value: this.value,
        locale: locale2,
        numberingSystem
      })?.localizedMeridiem || null : localizeTimePart({
        value: this.meridiem,
        part: "meridiem",
        locale: locale2,
        numberingSystem
      });
      if (emit) {
        this.calciteInternalTimePickerChange.emit();
      }
    };
    this.scale = "m";
    this.step = 60;
    this.numberingSystem = void 0;
    this.value = null;
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.activeEl = void 0;
    this.effectiveLocale = "";
    this.fractionalSecond = void 0;
    this.hour = void 0;
    this.hourCycle = void 0;
    this.localizedDecimalSeparator = ".";
    this.localizedHour = void 0;
    this.localizedHourSuffix = void 0;
    this.localizedMeridiem = void 0;
    this.localizedFractionalSecond = void 0;
    this.localizedMinute = void 0;
    this.localizedMinuteSuffix = void 0;
    this.localizedSecond = void 0;
    this.localizedSecondSuffix = void 0;
    this.meridiem = void 0;
    this.minute = void 0;
    this.second = void 0;
    this.showFractionalSecond = void 0;
    this.showSecond = void 0;
    this.defaultMessages = void 0;
  }
  stepChange() {
    this.toggleSecond();
  }
  valueWatcher(newValue) {
    this.setValue(newValue);
  }
  onMessagesChange() {
  }
  effectiveLocaleWatcher() {
    this.updateLocale();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    this.activeEl = void 0;
    this.pointerActivated = false;
  }
  keyDownHandler(event) {
    this.pointerActivated = false;
    const {
      defaultPrevented,
      key
    } = event;
    if (defaultPrevented) {
      return;
    }
    switch (this.activeEl) {
      case this.hourEl:
        if (key === "ArrowRight") {
          this.focusPart("minute");
          event.preventDefault();
        }
        break;
      case this.minuteEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("hour");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            } else if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.secondEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("minute");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.showFractionalSecond) {
              this.focusPart("fractionalSecond");
            } else if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.fractionalSecondEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("second");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.meridiemEl:
        switch (key) {
          case "ArrowLeft":
            if (this.showFractionalSecond) {
              this.focusPart("fractionalSecond");
            } else if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            } else {
              this.focusPart("minute");
              event.preventDefault();
            }
            break;
        }
        break;
    }
  }
  pointerDownHandler() {
    this.pointerActivated = true;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.el?.focus();
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  focusPart(target) {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this[`${target || "hour"}El`]?.focus();
    });
  }
  toggleSecond() {
    this.showSecond = this.step < 60;
    this.showFractionalSecond = decimalPlaces(this.step) > 0;
  }
  updateLocale() {
    updateMessages(this, this.effectiveLocale);
    this.hourCycle = getLocaleHourCycle(this.effectiveLocale, this.numberingSystem);
    this.localizedDecimalSeparator = getLocalizedDecimalSeparator(this.effectiveLocale, this.numberingSystem);
    this.meridiemOrder = getMeridiemOrder(this.effectiveLocale);
    this.setValue(this.sanitizeValue(this.value));
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    this.updateLocale();
    connectMessages(this);
    this.toggleSecond();
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield setUpMessages(this);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  disconnectedCallback() {
    disconnectLocalized(this);
    disconnectMessages(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const hourIsNumber = isValidNumber(this.hour);
    const iconScale = getIconScale(this.scale);
    const minuteIsNumber = isValidNumber(this.minute);
    const secondIsNumber = isValidNumber(this.second);
    const fractionalSecondIsNumber = isValidNumber(this.fractionalSecond);
    const showMeridiem = this.hourCycle === "12";
    return h("div", {
      key: "e15ff4d20ae40919921b991d99c8c76625a73cfc",
      class: {
        [CSS.timePicker]: true,
        [CSS.showMeridiem]: showMeridiem,
        [CSS.showSecond]: this.showSecond,
        [CSS[`scale-${this.scale}`]]: true
      },
      dir: "ltr"
    }, h("div", {
      key: "d4bfad89ac334afbb31bb4fc8e8fe386142f6d4b",
      class: CSS.column,
      role: "group"
    }, h("span", {
      key: "ba564179d2ca507bbb659b9b38de09625afe35f2",
      "aria-label": this.messages.hourUp,
      class: {
        [CSS.button]: true,
        [CSS.buttonHourUp]: true,
        [CSS.buttonTopLeft]: true
      },
      onClick: this.hourUpClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "5aa45f9254a0394584e214fc5173d2607a706832",
      icon: "chevron-up",
      scale: iconScale
    })), h("span", {
      key: "79e888572eabf36cefd24f15e06c4e36f0550b63",
      "aria-label": this.messages.hour,
      "aria-valuemax": "23",
      "aria-valuemin": "1",
      "aria-valuenow": hourIsNumber && parseInt(this.hour) || "0",
      "aria-valuetext": this.hour,
      class: {
        [CSS.input]: true,
        [CSS.hour]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.hourEl
      },
      onClick: this.inputClickHandler,
      onFocus: this.focusHandler,
      onKeyDown: this.hourKeyDownHandler,
      ref: this.setHourEl,
      role: "spinbutton",
      tabIndex: 0
    }, this.localizedHour || "--"), h("span", {
      key: "6964ac9f00917c3da0b9161f14cfdc85c38dfef4",
      "aria-label": this.messages.hourDown,
      class: {
        [CSS.button]: true,
        [CSS.buttonHourDown]: true,
        [CSS.buttonBottomLeft]: true
      },
      onClick: this.hourDownClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "c3985301caa70272059aecfb18a29a0b7ba7fb83",
      icon: "chevron-down",
      scale: iconScale
    }))), h("span", {
      key: "a9aa1571b4a9266276c7f684053b665397164582",
      class: CSS.delimiter
    }, this.localizedHourSuffix), h("div", {
      key: "0b1f353766357c699e1815af3105a5c0bc1d1a32",
      class: CSS.column,
      role: "group"
    }, h("span", {
      key: "ed36c1fe986b96db3f8f50c6b518c78d5a1239d6",
      "aria-label": this.messages.minuteUp,
      class: {
        [CSS.button]: true,
        [CSS.buttonMinuteUp]: true
      },
      onClick: this.minuteUpClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "7da952d6ef1a05f63367b5d67dd7625f0efc12f8",
      icon: "chevron-up",
      scale: iconScale
    })), h("span", {
      key: "90bc5c9b7d12a8a7769a42e4a4dc86053da03b22",
      "aria-label": this.messages.minute,
      "aria-valuemax": "12",
      "aria-valuemin": "1",
      "aria-valuenow": minuteIsNumber && parseInt(this.minute) || "0",
      "aria-valuetext": this.minute,
      class: {
        [CSS.input]: true,
        [CSS.minute]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.minuteEl
      },
      onClick: this.inputClickHandler,
      onFocus: this.focusHandler,
      onKeyDown: this.minuteKeyDownHandler,
      ref: this.setMinuteEl,
      role: "spinbutton",
      tabIndex: 0
    }, this.localizedMinute || "--"), h("span", {
      key: "9ebd5b4a961b9b20758bab5a58d8778c6795db40",
      "aria-label": this.messages.minuteDown,
      class: {
        [CSS.button]: true,
        [CSS.buttonMinuteDown]: true
      },
      onClick: this.minuteDownClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "2845804742fae9b51db039666ea693c1486d19bf",
      icon: "chevron-down",
      scale: iconScale
    }))), this.showSecond && h("span", {
      key: "0816f11d5eeb5478a6c1c9e0872f56ad4a1ecaa2",
      class: CSS.delimiter
    }, this.localizedMinuteSuffix), this.showSecond && h("div", {
      key: "3b83633e26c0e024cb5084499f88edc7d72f79fc",
      class: CSS.column,
      role: "group"
    }, h("span", {
      key: "90a351d935269aa847aee19d0e91cbbb0b66d3df",
      "aria-label": this.messages.secondUp,
      class: {
        [CSS.button]: true,
        [CSS.buttonSecondUp]: true
      },
      onClick: this.secondUpClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "56ec5929764834986e91054432a1ec1c746f4a45",
      icon: "chevron-up",
      scale: iconScale
    })), h("span", {
      key: "c44f0a291d49a94141a1eaf03b9baea12365e417",
      "aria-label": this.messages.second,
      "aria-valuemax": "59",
      "aria-valuemin": "0",
      "aria-valuenow": secondIsNumber && parseInt(this.second) || "0",
      "aria-valuetext": this.second,
      class: {
        [CSS.input]: true,
        [CSS.second]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.secondEl
      },
      onClick: this.inputClickHandler,
      onFocus: this.focusHandler,
      onKeyDown: this.secondKeyDownHandler,
      ref: this.setSecondEl,
      role: "spinbutton",
      tabIndex: 0
    }, this.localizedSecond || "--"), h("span", {
      key: "4009df6e3dc774e30cbd77fc01802bc8be2f8ddf",
      "aria-label": this.messages.secondDown,
      class: {
        [CSS.button]: true,
        [CSS.buttonSecondDown]: true
      },
      onClick: this.secondDownClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "2140cd873a3f10c72b7314da6c6d913b8345c778",
      icon: "chevron-down",
      scale: iconScale
    }))), this.showFractionalSecond && h("span", {
      key: "99be37a3a562a8a217c690612d757d2a463b98fe",
      class: CSS.delimiter
    }, this.localizedDecimalSeparator), this.showFractionalSecond && h("div", {
      key: "7b1095f7972da474f96a3190097eeaf282726743",
      class: CSS.column,
      role: "group"
    }, h("span", {
      key: "c66e94a7309934bcfe86f8d73170101937bcbbdd",
      "aria-label": this.messages.fractionalSecondUp,
      class: {
        [CSS.button]: true,
        [CSS.buttonFractionalSecondUp]: true
      },
      onClick: this.fractionalSecondUpClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "45fa888598fda5d21ab6a5e2f8561314c04cfba8",
      icon: "chevron-up",
      scale: iconScale
    })), h("span", {
      key: "61d5ae14f3b1a1984d07437e57ca6e60ba64f27b",
      "aria-label": this.messages.fractionalSecond,
      "aria-valuemax": "999",
      "aria-valuemin": "1",
      "aria-valuenow": fractionalSecondIsNumber && parseInt(this.fractionalSecond) || "0",
      "aria-valuetext": this.localizedFractionalSecond,
      class: {
        [CSS.input]: true,
        [CSS.fractionalSecond]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.fractionalSecondEl
      },
      onClick: this.inputClickHandler,
      onFocus: this.focusHandler,
      onKeyDown: this.fractionalSecondKeyDownHandler,
      ref: this.setFractionalSecondEl,
      role: "spinbutton",
      tabIndex: 0
    }, this.localizedFractionalSecond || "--"), h("span", {
      key: "35d0b37c0113289a9a060ae236f9ed88597707a7",
      "aria-label": this.messages.fractionalSecondDown,
      class: {
        [CSS.button]: true,
        [CSS.buttonFractionalSecondDown]: true
      },
      onClick: this.fractionalSecondDownClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "0dfd40ceff6d507cbd3495c5f5f4104b98d2ba99",
      icon: "chevron-down",
      scale: iconScale
    }))), this.localizedSecondSuffix && h("span", {
      key: "4cee863e88b4eac2a1da4ea48cac56777025a36c",
      class: CSS.delimiter
    }, this.localizedSecondSuffix), showMeridiem && h("div", {
      key: "7cfcd524e6742691774e49e2c6ad053865f11256",
      class: {
        [CSS.column]: true,
        [CSS.meridiemStart]: this.meridiemOrder === 0
      },
      role: "group"
    }, h("span", {
      key: "640bcd84761d7dec7783092a53c79f5a49795014",
      "aria-label": this.messages.meridiemUp,
      class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemUp]: true,
        [CSS.buttonTopRight]: true
      },
      onClick: this.meridiemUpClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "134662da0e72d17cbd6d6d83657c6f37b8de9520",
      icon: "chevron-up",
      scale: iconScale
    })), h("span", {
      key: "8097bcea625e4d272c86ae1598e471e6d55e98af",
      "aria-label": this.messages.meridiem,
      "aria-valuemax": "2",
      "aria-valuemin": "1",
      "aria-valuenow": this.meridiem === "PM" && "2" || "1",
      "aria-valuetext": this.meridiem,
      class: {
        [CSS.input]: true,
        [CSS.meridiem]: true,
        [CSS.inputFocus]: this.activeEl && this.activeEl === this.meridiemEl
      },
      onClick: this.inputClickHandler,
      onFocus: this.focusHandler,
      onKeyDown: this.meridiemKeyDownHandler,
      ref: this.setMeridiemEl,
      role: "spinbutton",
      tabIndex: 0
    }, this.localizedMeridiem || "--"), h("span", {
      key: "42a40925539e83e3ab8aeae295fbbad21795e5bc",
      "aria-label": this.messages.meridiemDown,
      class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemDown]: true,
        [CSS.buttonBottomRight]: true
      },
      onClick: this.meridiemDownClickHandler,
      role: "button"
    }, h("calcite-icon", {
      key: "36364532badec14bcc07124127156ab1561539d4",
      icon: "chevron-down",
      scale: iconScale
    }))));
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
      "step": ["stepChange"],
      "value": ["valueWatcher"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleWatcher"]
    };
  }
  static get style() {
    return CalciteTimePickerStyle0;
  }
}, [17, "calcite-time-picker", {
  "scale": [513],
  "step": [514],
  "numberingSystem": [1, "numbering-system"],
  "value": [1025],
  "messages": [1040],
  "messageOverrides": [1040],
  "activeEl": [32],
  "effectiveLocale": [32],
  "fractionalSecond": [32],
  "hour": [32],
  "hourCycle": [32],
  "localizedDecimalSeparator": [32],
  "localizedHour": [32],
  "localizedHourSuffix": [32],
  "localizedMeridiem": [32],
  "localizedFractionalSecond": [32],
  "localizedMinute": [32],
  "localizedMinuteSuffix": [32],
  "localizedSecond": [32],
  "localizedSecondSuffix": [32],
  "meridiem": [32],
  "minute": [32],
  "second": [32],
  "showFractionalSecond": [32],
  "showSecond": [32],
  "defaultMessages": [32],
  "setFocus": [64]
}, [[0, "blur", "blurHandler"], [0, "keydown", "keyDownHandler"], [1, "pointerdown", "pointerDownHandler"]], {
  "step": ["stepChange"],
  "value": ["valueWatcher"],
  "messageOverrides": ["onMessagesChange"],
  "effectiveLocale": ["effectiveLocaleWatcher"]
}]);
function defineCustomElement8() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-time-picker", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-time-picker":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TimePicker);
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

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-input-time-picker.js
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
var MS = "millisecond";
var S = "second";
var MIN = "minute";
var H2 = "hour";
var D = "day";
var W = "week";
var M = "month";
var Q = "quarter";
var Y = "year";
var DATE = "date";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var INVALID_DATE_STRING = "Invalid Date";
var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var en = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};
var en$1 = Object.freeze({
  __proto__: null,
  "default": en
});
var padStart = function padStart2(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};
var padZoneStr = function padZoneStr2(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
};
var monthDiff = function monthDiff2(a, b) {
  if (a.date() < b.date()) return -monthDiff2(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};
var absFloor = function absFloor2(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};
var prettyUnit = function prettyUnit2(u3) {
  var special = {
    M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H2,
    m: MIN,
    s: S,
    ms: MS,
    Q
  };
  return special[u3] || String(u3 || "").toLowerCase().replace(/s$/, "");
};
var isUndefined = function isUndefined2(s) {
  return s === void 0;
};
var U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};
var L = "en";
var Ls = {};
Ls[L] = en;
var IS_DAYJS = "$isDayjsObject";
var isDayjs = function isDayjs2(d) {
  return d instanceof Dayjs || !!(d && d[IS_DAYJS]);
};
var parseLocale = function parseLocale2(preset, object, isLocal) {
  var l;
  if (!preset) return L;
  if (typeof preset === "string") {
    var presetLower = preset.toLowerCase();
    if (Ls[presetLower]) {
      l = presetLower;
    }
    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }
    var presetSplit = preset.split("-");
    if (!l && presetSplit.length > 1) {
      return parseLocale2(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};
var dayjs = function dayjs2(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  var cfg = typeof c === "object" ? c : {};
  cfg.date = date;
  cfg.args = arguments;
  return new Dayjs(cfg);
};
var wrapper = function wrapper2(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset
    // todo: refactor; do not use this.$offset in you code
  });
};
var Utils = U;
Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;
var parseDate = function parseDate2(cfg) {
  var date = cfg.date, utc = cfg.utc;
  if (date === null) return /* @__PURE__ */ new Date(NaN);
  if (Utils.u(date)) return /* @__PURE__ */ new Date();
  if (date instanceof Date) return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);
    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || "0").substring(0, 3);
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
var Dayjs = function() {
  function Dayjs2(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg);
    this.$x = this.$x || cfg.x || {};
    this[IS_DAYJS] = true;
  }
  var _proto = Dayjs2.prototype;
  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.init();
  };
  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  };
  _proto.$utils = function $utils() {
    return Utils;
  };
  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };
  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };
  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };
  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };
  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };
  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1e3);
  };
  _proto.valueOf = function valueOf() {
    return this.$d.getTime();
  };
  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);
    var instanceFactory = function instanceFactory2(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet2(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply(
        // eslint-disable-line prefer-spread
        _this.toDate("s"),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), _this);
    };
    var $W = this.$W, $M = this.$M, $D = this.$D;
    var utcPad = "set" + (this.$u ? "UTC" : "");
    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
      case W: {
        var weekStart = this.$locale().weekStart || 0;
        var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
        return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
      }
      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);
      case H2:
        return instanceFactorySet(utcPad + "Minutes", 1);
      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);
      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);
      default:
        return this.clone();
    }
  };
  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };
  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? "UTC" : "");
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H2] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;
    if (unit === M || unit === Y) {
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);
    this.init();
    return this;
  };
  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };
  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };
  _proto.add = function add(number, units) {
    var _this2 = this, _C$MIN$C$H$C$S$unit;
    number = Number(number);
    var unit = Utils.p(units);
    var instanceFactorySet = function instanceFactorySet2(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };
    if (unit === M) {
      return this.set(M, this.$M + number);
    }
    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H2] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };
  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };
  _proto.format = function format(formatStr) {
    var _this3 = this;
    var locale2 = this.$locale();
    if (!this.isValid()) return locale2.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H, $m = this.$m, $M = this.$M;
    var weekdays = locale2.weekdays, months = locale2.months, meridiem = locale2.meridiem;
    var getShort = function getShort2(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };
    var get$H = function get$H2(num) {
      return Utils.s($H % 12 || 12, num, "0");
    };
    var meridiemFunc = meridiem || function(hour, minute, isLowercase) {
      var m = hour < 12 ? "AM" : "PM";
      return isLowercase ? m.toLowerCase() : m;
    };
    var matches = function matches2(match) {
      switch (match) {
        case "YY":
          return String(_this3.$y).slice(-2);
        case "YYYY":
          return Utils.s(_this3.$y, 4, "0");
        case "M":
          return $M + 1;
        case "MM":
          return Utils.s($M + 1, 2, "0");
        case "MMM":
          return getShort(locale2.monthsShort, $M, months, 3);
        case "MMMM":
          return getShort(months, $M);
        case "D":
          return _this3.$D;
        case "DD":
          return Utils.s(_this3.$D, 2, "0");
        case "d":
          return String(_this3.$W);
        case "dd":
          return getShort(locale2.weekdaysMin, _this3.$W, weekdays, 2);
        case "ddd":
          return getShort(locale2.weekdaysShort, _this3.$W, weekdays, 3);
        case "dddd":
          return weekdays[_this3.$W];
        case "H":
          return String($H);
        case "HH":
          return Utils.s($H, 2, "0");
        case "h":
          return get$H(1);
        case "hh":
          return get$H(2);
        case "a":
          return meridiemFunc($H, $m, true);
        case "A":
          return meridiemFunc($H, $m, false);
        case "m":
          return String($m);
        case "mm":
          return Utils.s($m, 2, "0");
        case "s":
          return String(_this3.$s);
        case "ss":
          return Utils.s(_this3.$s, 2, "0");
        case "SSS":
          return Utils.s(_this3.$ms, 3, "0");
        case "Z":
          return zoneStr;
      }
      return null;
    };
    return str.replace(REGEX_FORMAT, function(match, $1) {
      return $1 || matches(match) || zoneStr.replace(":", "");
    });
  };
  _proto.utcOffset = function utcOffset() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };
  _proto.diff = function diff(input, units, _float) {
    var _this4 = this;
    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff2 = this - that;
    var getMonth = function getMonth2() {
      return Utils.m(_this4, that);
    };
    var result;
    switch (unit) {
      case Y:
        result = getMonth() / 12;
        break;
      case M:
        result = getMonth();
        break;
      case Q:
        result = getMonth() / 3;
        break;
      case W:
        result = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK;
        break;
      case D:
        result = (diff2 - zoneDelta) / MILLISECONDS_A_DAY;
        break;
      case H2:
        result = diff2 / MILLISECONDS_A_HOUR;
        break;
      case MIN:
        result = diff2 / MILLISECONDS_A_MINUTE;
        break;
      case S:
        result = diff2 / MILLISECONDS_A_SECOND;
        break;
      default:
        result = diff2;
        break;
    }
    return _float ? result : Utils.a(result);
  };
  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };
  _proto.$locale = function $locale() {
    return Ls[this.$L];
  };
  _proto.locale = function locale2(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };
  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };
  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };
  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };
  _proto.toISOString = function toISOString() {
    return this.$d.toISOString();
  };
  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };
  return Dayjs2;
}();
var proto = Dayjs.prototype;
dayjs.prototype = proto;
[["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H2], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
  proto[g[1]] = function(input) {
    return this.$g(input, g[0], g[1]);
  };
});
dayjs.extend = function(plugin, option) {
  if (!plugin.$i) {
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;
dayjs.unix = function(timestamp) {
  return dayjs(timestamp * 1e3);
};
dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
var t = function t2(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
var u = function u2(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};
var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/;
var match2 = /\d\d/;
var match3 = /\d{3}/;
var match4 = /\d{4}/;
var match1to2 = /\d\d?/;
var matchSigned = /[+-]?\d+/;
var matchOffset = /[+-]\d\d:?(\d\d)?|Z/;
var matchWord = /\d*[^-_:/,()\s\d]+/;
var locale = {};
var parseTwoDigitYear = function parseTwoDigitYear2(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2e3);
};
function offsetFromString(string) {
  if (!string) return 0;
  if (string === "Z") return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === "+" ? -minutes : minutes;
}
var addInput = function addInput2(property) {
  return function(input) {
    this[property] = +input;
  };
};
var zoneExpressions = [matchOffset, function(input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];
var getLocalePart = function getLocalePart2(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};
var meridiemMatch = function meridiemMatch2(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale, meridiem = _locale.meridiem;
  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? "pm" : "PM");
  } else {
    for (var i = 1; i <= 24; i += 1) {
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }
  return isAfternoon;
};
var expressions = {
  A: [matchWord, function(input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function(input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  S: [match1, function(input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function(input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function(input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput("seconds")],
  ss: [match1to2, addInput("seconds")],
  m: [match1to2, addInput("minutes")],
  mm: [match1to2, addInput("minutes")],
  H: [match1to2, addInput("hours")],
  h: [match1to2, addInput("hours")],
  HH: [match1to2, addInput("hours")],
  hh: [match1to2, addInput("hours")],
  D: [match1to2, addInput("day")],
  DD: [match2, addInput("day")],
  Do: [matchWord, function(input) {
    var _locale2 = locale, ordinal2 = _locale2.ordinal;
    var _input$match = input.match(/\d+/);
    this.day = _input$match[0];
    if (!ordinal2) return;
    for (var i = 1; i <= 31; i += 1) {
      if (ordinal2(i).replace(/\[|\]/g, "") === input) {
        this.day = i;
      }
    }
  }],
  M: [match1to2, addInput("month")],
  MM: [match2, addInput("month")],
  MMM: [matchWord, function(input) {
    var months = getLocalePart("months");
    var monthsShort = getLocalePart("monthsShort");
    var matchIndex = (monthsShort || months.map(function(_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;
    if (matchIndex < 1) {
      throw new Error();
    }
    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function(input) {
    var months = getLocalePart("months");
    var matchIndex = months.indexOf(input) + 1;
    if (matchIndex < 1) {
      throw new Error();
    }
    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput("year")],
  YY: [match2, function(input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput("year")],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};
function correctHours(time) {
  var afternoon = time.afternoon;
  if (afternoon !== void 0) {
    var hours = time.hours;
    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }
    delete time.afternoon;
  }
}
function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;
  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];
    if (parser) {
      array[i] = {
        regex,
        parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, "");
    }
  }
  return function(input) {
    var time = {};
    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];
      if (typeof _token === "string") {
        start += _token.length;
      } else {
        var _regex = _token.regex, _parser = _token.parser;
        var part = input.slice(start);
        var match = _regex.exec(part);
        var value = match[0];
        _parser.call(time, value);
        input = input.replace(value, "");
      }
    }
    correctHours(time);
    return time;
  };
}
var parseFormattedInput = function parseFormattedInput2(input, format, utc) {
  try {
    if (["x", "X"].indexOf(format) > -1) return new Date((format === "X" ? 1e3 : 1) * input);
    var parser = makeParser(format);
    var _parser2 = parser(input), year = _parser2.year, month = _parser2.month, day = _parser2.day, hours = _parser2.hours, minutes = _parser2.minutes, seconds = _parser2.seconds, milliseconds = _parser2.milliseconds, zone = _parser2.zone;
    var now = /* @__PURE__ */ new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M2 = 0;
    if (!(year && !month)) {
      M2 = month > 0 ? month - 1 : now.getMonth();
    }
    var h2 = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;
    if (zone) {
      return new Date(Date.UTC(y, M2, d, h2, m, s, ms + zone.offset * 60 * 1e3));
    }
    if (utc) {
      return new Date(Date.UTC(y, M2, d, h2, m, s, ms));
    }
    return new Date(y, M2, d, h2, m, s, ms);
  } catch (e) {
    return /* @__PURE__ */ new Date("");
  }
};
var customParseFormat = function(o, C, d) {
  d.p.customParseFormat = true;
  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }
  var proto2 = C.prototype;
  var oldParse = proto2.parse;
  proto2.parse = function(cfg) {
    var date = cfg.date, utc = cfg.utc, args = cfg.args;
    this.$u = utc;
    var format = args[1];
    if (typeof format === "string") {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];
      if (isStrictWithLocale) {
        pl = args[2];
      }
      locale = this.$locale();
      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }
      this.$d = parseFormattedInput(date, format, utc);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L;
      if (isStrict && date != this.format(format)) {
        this.$d = /* @__PURE__ */ new Date("");
      }
      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;
      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);
        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }
        if (i === len) this.$d = /* @__PURE__ */ new Date("");
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
};
var localeData = function(o, c, dayjs3) {
  var proto2 = c.prototype;
  var getLocalePart3 = function getLocalePart4(part) {
    return part && (part.indexOf ? part : part.s);
  };
  var getShort = function getShort2(ins, target, full, num, localeOrder) {
    var locale2 = ins.name ? ins : ins.$locale();
    var targetLocale = getLocalePart3(locale2[target]);
    var fullLocale = getLocalePart3(locale2[full]);
    var result = targetLocale || fullLocale.map(function(f) {
      return f.slice(0, num);
    });
    if (!localeOrder) return result;
    var weekStart = locale2.weekStart;
    return result.map(function(_, index) {
      return result[(index + (weekStart || 0)) % 7];
    });
  };
  var getDayjsLocaleObject = function getDayjsLocaleObject2() {
    return dayjs3.Ls[dayjs3.locale()];
  };
  var getLongDateFormat = function getLongDateFormat2(l, format) {
    return l.formats[format] || t(l.formats[format.toUpperCase()]);
  };
  var localeData2 = function localeData3() {
    var _this = this;
    return {
      months: function months(instance) {
        return instance ? instance.format("MMMM") : getShort(_this, "months");
      },
      monthsShort: function monthsShort(instance) {
        return instance ? instance.format("MMM") : getShort(_this, "monthsShort", "months", 3);
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdays: function weekdays(instance) {
        return instance ? instance.format("dddd") : getShort(_this, "weekdays");
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance ? instance.format("dd") : getShort(_this, "weekdaysMin", "weekdays", 2);
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance ? instance.format("ddd") : getShort(_this, "weekdaysShort", "weekdays", 3);
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(_this.$locale(), format);
      },
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
    };
  };
  proto2.localeData = function() {
    return localeData2.bind(this)();
  };
  dayjs3.localeData = function() {
    var localeObject = getDayjsLocaleObject();
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      },
      weekdays: function weekdays() {
        return dayjs3.weekdays();
      },
      weekdaysShort: function weekdaysShort() {
        return dayjs3.weekdaysShort();
      },
      weekdaysMin: function weekdaysMin() {
        return dayjs3.weekdaysMin();
      },
      months: function months() {
        return dayjs3.months();
      },
      monthsShort: function monthsShort() {
        return dayjs3.monthsShort();
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(localeObject, format);
      },
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    };
  };
  dayjs3.months = function() {
    return getShort(getDayjsLocaleObject(), "months");
  };
  dayjs3.monthsShort = function() {
    return getShort(getDayjsLocaleObject(), "monthsShort", "months", 3);
  };
  dayjs3.weekdays = function(localeOrder) {
    return getShort(getDayjsLocaleObject(), "weekdays", null, null, localeOrder);
  };
  dayjs3.weekdaysShort = function(localeOrder) {
    return getShort(getDayjsLocaleObject(), "weekdaysShort", "weekdays", 3, localeOrder);
  };
  dayjs3.weekdaysMin = function(localeOrder) {
    return getShort(getDayjsLocaleObject(), "weekdaysMin", "weekdays", 2, localeOrder);
  };
};
var localizedFormat = function(o, c, d) {
  var proto2 = c.prototype;
  var oldFormat = proto2.format;
  d.en.formats = englishFormats;
  proto2.format = function(formatStr) {
    if (formatStr === void 0) {
      formatStr = FORMAT_DEFAULT;
    }
    var _this$$locale = this.$locale(), _this$$locale$formats = _this$$locale.formats, formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats;
    var result = u(formatStr, formats);
    return oldFormat.call(this, result);
  };
};
var preParsePostFormat = function(option, dayjsClass) {
  var oldParse = dayjsClass.prototype.parse;
  dayjsClass.prototype.parse = function(cfg) {
    if (typeof cfg.date === "string") {
      var locale2 = this.$locale();
      cfg.date = locale2 && locale2.preparse ? locale2.preparse(cfg.date) : cfg.date;
    }
    return oldParse.bind(this)(cfg);
  };
  var oldFormat = dayjsClass.prototype.format;
  dayjsClass.prototype.format = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var result = oldFormat.call.apply(oldFormat, [this].concat(args));
    var locale2 = this.$locale();
    return locale2 && locale2.postformat ? locale2.postformat(result) : result;
  };
  var oldFromTo = dayjsClass.prototype.fromToBase;
  if (oldFromTo) {
    dayjsClass.prototype.fromToBase = function(input, withoutSuffix, instance, isFrom) {
      var locale2 = this.$locale() || instance.$locale();
      return oldFromTo.call(this, input, withoutSuffix, instance, isFrom, locale2 && locale2.postformat);
    };
  }
};
var updateLocale = function(option, Dayjs2, dayjs3) {
  dayjs3.updateLocale = function(locale2, customConfig) {
    var localeList = dayjs3.Ls;
    var localeConfig = localeList[locale2];
    if (!localeConfig) return;
    var customConfigKeys = customConfig ? Object.keys(customConfig) : [];
    customConfigKeys.forEach(function(c) {
      localeConfig[c] = customConfig[c];
    });
    return localeConfig;
  };
};
var CSS2 = {
  toggleIcon: "toggle-icon"
};
var IDS = {
  validationMessage: "inputTimePickerValidationMessage"
};
var inputTimePickerCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing);--calcite-icon-color:var(--calcite-color-text-3)}.input-wrapper:hover .toggle-icon,calcite-input-text:focus+.toggle-icon{--calcite-icon-color:var(--calcite-color-text-1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteInputTimePickerStyle0 = inputTimePickerCss;
var supportedDayjsLocaleToLocaleConfigImport = /* @__PURE__ */ new Map([["ar", () => import("./ar-OYA2LCQP.js")], ["bg", () => import("./bg-EK5PRITW.js")], ["bs", () => import("./bs-C7EKUI7E.js")], ["ca", () => import("./ca-VOFMW7FV.js")], ["cs", () => import("./cs-5TDW4BWC.js")], ["da", () => import("./da-H65UZE65.js")], ["de", () => import("./de-4W47AVHJ.js")], ["de-at", () => import("./de-at-F77YQ26L.js")], ["de-ch", () => import("./de-ch-YJB2OTJO.js")], ["el", () => import("./el-RLPDJOA4.js")], ["en", () => Promise.resolve().then(function() {
  return en$1;
})], ["en-au", () => import("./en-au-ZKXCEDQF.js")], ["en-ca", () => import("./en-ca-VSB7MMCQ.js")], ["en-gb", () => import("./en-gb-P5QD67SU.js")], ["es", () => import("./es-UKG44N43.js")], ["es-mx", () => import("./es-mx-DZJ7NKDT.js")], ["et", () => import("./et-BJ3CLQMG.js")], ["fi", () => import("./fi-7WBDHTW5.js")], ["fr", () => import("./fr-2OYVOHSY.js")], ["fr-ch", () => import("./fr-ch-N3S6OZLS.js")], ["he", () => import("./he-XUYJVSZ4.js")], ["hi", () => import("./hi-5FN7IDNS.js")], ["hr", () => import("./hr-4L47LUE6.js")], ["hu", () => import("./hu-FWU6ZHHT.js")], ["id", () => import("./id-GR2GYIHB.js")], ["it", () => import("./it-PZ66H2ZK.js")], ["it-ch", () => import("./it-ch-4JXDZC7A.js")], ["ja", () => import("./ja-CP7AVTC5.js")], ["ko", () => import("./ko-G5WWCJHW.js")], ["lt", () => import("./lt-YGDOBBT2.js")], ["lv", () => import("./lv-4WHB5N7H.js")], ["mk", () => import("./mk-NVQR4PC7.js")], ["nl", () => import("./nl-G7QT3635.js")], ["nb", () => import("./nb-B5AF7C3M.js")], ["pl", () => import("./pl-W77FF4AN.js")], ["pt", () => import("./pt-RLJAJZCH.js")], ["pt-br", () => import("./pt-br-ZIKTZKGF.js")], ["ro", () => import("./ro-VBHJHYXP.js")], ["ru", () => import("./ru-WUBOK5TH.js")], ["sk", () => import("./sk-S4G2BOPN.js")], ["sl", () => import("./sl-Z3CHJ3ZO.js")], ["sr", () => import("./sr-T7ID7V72.js")], ["sv", () => import("./sv-3UNYUMA5.js")], ["th", () => import("./th-GE6LL5N3.js")], ["tr", () => import("./tr-245KZBT4.js")], ["uk", () => import("./uk-WXOMFKT6.js")], ["vi", () => import("./vi-M6IMRBKU.js")], ["zh-cn", () => import("./zh-cn-UH66Y5EP.js")], ["zh-hk", () => import("./zh-hk-4TPSIWIR.js")], ["zh-tw", () => import("./zh-tw-GLTFAH2M.js")]]);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(preParsePostFormat);
dayjs.extend(updateLocale);
var InputTimePicker = proxyCustomElement(class InputTimePicker2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInputTimePickerBeforeClose = createEvent(this, "calciteInputTimePickerBeforeClose", 6);
    this.calciteInputTimePickerBeforeOpen = createEvent(this, "calciteInputTimePickerBeforeOpen", 6);
    this.calciteInputTimePickerChange = createEvent(this, "calciteInputTimePickerChange", 7);
    this.calciteInputTimePickerClose = createEvent(this, "calciteInputTimePickerClose", 6);
    this.calciteInputTimePickerOpen = createEvent(this, "calciteInputTimePickerOpen", 6);
    this.focusOnOpen = false;
    this.userChangedValue = false;
    this.hostBlurHandler = () => {
      const inputValue = this.calciteInputEl.value;
      const delocalizedInputValue = this.delocalizeTimeString(inputValue);
      if (!delocalizedInputValue) {
        this.setValue("");
        return;
      }
      if (delocalizedInputValue !== this.value) {
        this.setValue(delocalizedInputValue);
      }
      const localizedTimeString = localizeTimeString({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds(),
        fractionalSecondDigits: decimalPlaces(this.step)
      });
      if (localizedTimeString !== inputValue) {
        this.setInputValue(localizedTimeString);
      }
      this.deactivate();
    };
    this.calciteInternalInputFocusHandler = (event) => {
      if (!this.readOnly) {
        event.stopPropagation();
      }
    };
    this.calciteInternalInputInputHandler = (event) => {
      const {
        effectiveLocale: locale2,
        numberingSystem
      } = this;
      if (numberingSystem && numberingSystem !== "latn") {
        const target = event.target;
        numberStringFormatter.numberFormatOptions = {
          locale: locale2,
          numberingSystem,
          useGrouping: false
        };
        const valueInNumberingSystem = numberStringFormatter.delocalize(target.value).split("").map((char) => numberKeys.includes(char) ? numberStringFormatter.numberFormatter.format(Number(char)) : char).join("");
        this.setInputValue(valueInNumberingSystem);
      }
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      const includeSeconds = this.shouldIncludeSeconds();
      this.setValue(toISOTimeString(value, includeSeconds));
      this.setInputValue(localizeTimeString({
        value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds,
        fractionalSecondDigits: decimalPlaces(this.step)
      }));
    };
    this.popoverBeforeOpenHandler = (event) => {
      event.stopPropagation();
      this.calciteInputTimePickerBeforeOpen.emit();
    };
    this.popoverOpenHandler = (event) => {
      event.stopPropagation();
      this.calciteInputTimePickerOpen.emit();
      activateFocusTrap(this, {
        onActivate: () => {
          if (this.focusOnOpen) {
            this.calciteTimePickerEl.setFocus();
            this.focusOnOpen = false;
          }
        }
      });
    };
    this.popoverBeforeCloseHandler = (event) => {
      event.stopPropagation();
      this.calciteInputTimePickerBeforeClose.emit();
    };
    this.popoverCloseHandler = (event) => {
      event.stopPropagation();
      this.calciteInputTimePickerClose.emit();
      deactivateFocusTrap(this, {
        onDeactivate: () => {
          this.calciteInputEl.setFocus();
          this.focusOnOpen = false;
        }
      });
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
        if (submitForm(this)) {
          event.preventDefault();
          this.calciteInputEl.setFocus();
        }
        if (event.composedPath().includes(this.calciteTimePickerEl)) {
          return;
        }
        const newValue = this.delocalizeTimeString(this.calciteInputEl.value);
        if (isValidTime(newValue)) {
          this.setValue(newValue);
          const localizedTimeString = localizeTimeString({
            value: this.value,
            locale: this.effectiveLocale,
            numberingSystem: this.numberingSystem,
            includeSeconds: this.shouldIncludeSeconds(),
            fractionalSecondDigits: decimalPlaces(this.step)
          });
          if (newValue && this.calciteInputEl.value !== localizedTimeString) {
            this.setInputValue(localizedTimeString);
          }
        }
      } else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      } else if (key === "Escape" && this.open) {
        this.open = false;
        event.preventDefault();
        this.calciteInputEl.setFocus();
      }
    };
    this.setCalcitePopoverEl = (el) => {
      this.popoverEl = el;
      this.openHandler();
    };
    this.setInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
      connectFocusTrap(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false
        }
      });
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    this.setValue = (value) => {
      const oldValue = this.value;
      const newValue = formatTimeString(value) || "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue || "";
      const changeEvent = this.calciteInputTimePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.userChangedValue = false;
        this.value = oldValue;
        this.setInputValue(localizeTimeString({
          value: oldValue,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          includeSeconds: this.shouldIncludeSeconds(),
          fractionalSecondDigits: decimalPlaces(this.step)
        }));
      }
    };
    this.setValueDirectly = (value) => {
      const includeSeconds = this.shouldIncludeSeconds();
      this.value = toISOTimeString(value, includeSeconds);
      this.setInputValue(this.value ? localizeTimeString({
        value: this.value,
        includeSeconds,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        fractionalSecondDigits: decimalPlaces(this.step)
      }) : "");
    };
    this.onInputWrapperClick = () => {
      this.open = !this.open;
    };
    this.deactivate = () => {
      this.open = false;
    };
    this.open = false;
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = void 0;
    this.readOnly = false;
    this.max = void 0;
    this.min = void 0;
    this.messageOverrides = void 0;
    this.messages = void 0;
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
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.step = 60;
    this.value = null;
    this.calciteInputEl = void 0;
    this.defaultMessages = void 0;
    this.effectiveLocale = "";
  }
  openHandler() {
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    this.popoverEl.open = this.open;
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
  onMessagesChange() {
  }
  numberingSystemWatcher(numberingSystem) {
    this.setInputValue(localizeTimeString({
      value: this.value,
      locale: this.effectiveLocale,
      numberingSystem,
      includeSeconds: this.shouldIncludeSeconds(),
      fractionalSecondDigits: decimalPlaces(this.step)
    }));
  }
  stepWatcher(newStep, oldStep) {
    if (oldStep >= 60 && newStep > 0 && newStep < 60 || newStep >= 60 && oldStep > 0 && oldStep < 60) {
      this.setValueDirectly(this.value);
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      this.setValueDirectly(newValue);
    }
    this.userChangedValue = false;
  }
  effectiveLocaleWatcher(locale2) {
    return __async(this, null, function* () {
      yield Promise.all([this.loadDateTimeLocaleData(), updateMessages(this, this.effectiveLocale)]);
      this.setInputValue(localizeTimeString({
        value: this.value,
        locale: locale2,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds(),
        fractionalSecondDigits: decimalPlaces(this.step)
      }));
    });
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
   * @param delayed If true, delay the repositioning.
   */
  reposition(delayed = false) {
    return __async(this, null, function* () {
      this.popoverEl?.reposition(delayed);
    });
  }
  syncHiddenFormInput(input) {
    syncHiddenFormInput("time", this, input);
  }
  delocalizeTimeString(value) {
    dayjs.locale(this.effectiveLocale.toLowerCase());
    const nonFractionalSecondParts = this.delocalizeTimeStringToParts(value);
    let delocalizedTimeString;
    if (this.shouldIncludeFractionalSeconds()) {
      const stepPrecision = decimalPlaces(this.step);
      const centisecondParts = this.delocalizeTimeStringToParts(value, "S");
      if (stepPrecision === 1) {
        delocalizedTimeString = centisecondParts.millisecond !== 0 ? this.getTimeStringFromParts(centisecondParts) : this.getTimeStringFromParts(nonFractionalSecondParts);
      } else {
        const decisecondParts = this.delocalizeTimeStringToParts(value, "SS");
        if (stepPrecision === 2) {
          if (decisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(decisecondParts);
          } else if (centisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(centisecondParts);
          } else {
            delocalizedTimeString = this.getTimeStringFromParts(nonFractionalSecondParts);
          }
        } else if (stepPrecision >= 3) {
          const millisecondParts = this.delocalizeTimeStringToParts(value, "SSS");
          if (millisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(millisecondParts);
          } else if (decisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(decisecondParts);
          } else if (centisecondParts.millisecond !== 0) {
            delocalizedTimeString = this.getTimeStringFromParts(centisecondParts);
          } else {
            delocalizedTimeString = this.getTimeStringFromParts(nonFractionalSecondParts);
          }
        }
      }
    } else {
      delocalizedTimeString = this.getTimeStringFromParts(nonFractionalSecondParts);
    }
    return delocalizedTimeString;
  }
  delocalizeTimeStringToParts(localizedTimeString, fractionalSecondFormatToken) {
    const ltsFormatString = this.localeConfig?.formats?.LTS;
    const fractionalSecondTokenMatch = ltsFormatString.match(/ss\.*(S+)/g);
    if (fractionalSecondFormatToken && this.shouldIncludeFractionalSeconds()) {
      const secondFormatToken = `ss.${fractionalSecondFormatToken}`;
      this.localeConfig.formats.LTS = fractionalSecondTokenMatch ? ltsFormatString.replace(fractionalSecondTokenMatch[0], secondFormatToken) : ltsFormatString.replace("ss", secondFormatToken);
    } else if (fractionalSecondTokenMatch) {
      this.localeConfig.formats.LTS = ltsFormatString.replace(fractionalSecondTokenMatch[0], "ss");
    }
    dayjs.updateLocale(this.getSupportedDayjsLocale(getSupportedLocale(this.effectiveLocale)), this.localeConfig);
    const dayjsParseResult = dayjs(localizedTimeString, ["LTS", "LT"]);
    if (dayjsParseResult.isValid()) {
      return {
        hour: dayjsParseResult.get("hour"),
        minute: dayjsParseResult.get("minute"),
        second: dayjsParseResult.get("second"),
        millisecond: dayjsParseResult.get("millisecond")
      };
    }
    return {
      hour: null,
      minute: null,
      second: null,
      millisecond: null
    };
  }
  getTimeStringFromParts(parts) {
    let timeString = "";
    if (!parts) {
      return timeString;
    }
    if (parts.hour !== null && parts.minute !== null) {
      timeString = `${formatTimePart(parts.hour)}:${formatTimePart(parts.minute)}`;
      if (this.shouldIncludeSeconds() && parts.second !== null) {
        timeString += `:${formatTimePart(parts.second)}`;
        if (this.shouldIncludeFractionalSeconds() && parts.millisecond !== null) {
          const second = (parts.millisecond * 1e-3).toFixed(decimalPlaces(this.step));
          timeString += `.${second.toString().replace("0.", "")}`;
        }
      }
    }
    return timeString;
  }
  getSupportedDayjsLocale(locale2) {
    const dayjsLocale = locale2.toLowerCase();
    if (dayjsLocale === "no") {
      return "nb";
    }
    if (dayjsLocale === "pt-pt") {
      return "pt";
    }
    return dayjsLocale;
  }
  loadDateTimeLocaleData() {
    return __async(this, null, function* () {
      let supportedLocale = getSupportedLocale(this.effectiveLocale).toLowerCase();
      supportedLocale = this.getSupportedDayjsLocale(supportedLocale);
      const {
        default: localeConfig
      } = yield supportedDayjsLocaleToLocaleConfigImport.get(supportedLocale)();
      this.localeConfig = localeConfig;
      dayjs.locale(this.localeConfig, null, true);
      dayjs.updateLocale(supportedLocale, this.getExtendedLocaleConfig(supportedLocale));
    });
  }
  getExtendedLocaleConfig(locale2) {
    if (locale2 === "ar") {
      return {
        meridiem: (hour) => hour > 12 ? "م" : "ص",
        formats: {
          LT: "HH:mm A",
          LTS: "HH:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm A",
          LLLL: "dddd D MMMM YYYY HH:mm A"
        }
      };
    }
    if (locale2 === "en-au") {
      return {
        meridiem: (hour) => hour > 12 ? "pm" : "am"
      };
    }
    if (locale2 === "en-ca") {
      return {
        meridiem: (hour) => hour > 12 ? "p.m." : "a.m."
      };
    }
    if (locale2 === "el") {
      return {
        meridiem: (hour) => hour > 12 ? "μ.μ." : "π.μ."
      };
    }
    if (locale2 === "hi") {
      return {
        formats: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, h:mm A",
          LLLL: "dddd, D MMMM YYYY, h:mm A"
        },
        meridiem: (hour) => hour > 12 ? "pm" : "am"
      };
    }
    if (locale2 === "ko") {
      return {
        meridiem: (hour) => hour > 12 ? "오후" : "오전"
      };
    }
    if (locale2 === "zh-tw") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss"
        }
      };
    }
    if (locale2 === "zh-hk") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss"
        },
        meridiem: (hour) => hour > 12 ? "下午" : "上午"
      };
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  shouldIncludeFractionalSeconds() {
    return decimalPlaces(this.step) > 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    if (isValidTime(this.value)) {
      this.setValueDirectly(this.value);
    } else {
      this.value = void 0;
    }
    connectLabel(this);
    connectForm(this);
    connectMessages(this);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      yield Promise.all([setUpMessages(this), this.loadDateTimeLocaleData()]);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
    if (isValidTime(this.value)) {
      this.setInputValue(localizeTimeString({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds(),
        fractionalSecondDigits: decimalPlaces(this.step)
      }));
    }
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
    disconnectLocalized(this);
    deactivateFocusTrap(this);
    disconnectMessages(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      disabled,
      messages,
      readOnly
    } = this;
    return h(Host, {
      key: "7d5021d0867938190a71ecc258687504668aa919",
      onBlur: this.hostBlurHandler,
      onKeyDown: this.keyDownHandler
    }, h(InteractiveContainer, {
      key: "3df503ada54e8259f0e4e7013191942e4bc17020",
      disabled: this.disabled
    }, h("div", {
      key: "748dd86d90db29b4baaa1af42839b3b234e54d0b",
      class: "input-wrapper",
      onClick: this.onInputWrapperClick
    }, h("calcite-input-text", {
      key: "af404dc58cb00afb62ecef587db4426bfc7b3495",
      "aria-autocomplete": "none",
      "aria-errormessage": IDS.validationMessage,
      "aria-haspopup": "dialog",
      "aria-invalid": toAriaBoolean(this.status === "invalid"),
      disabled,
      icon: "clock",
      label: getLabelText(this),
      lang: this.effectiveLocale,
      onCalciteInputTextInput: this.calciteInternalInputInputHandler,
      onCalciteInternalInputTextFocus: this.calciteInternalInputFocusHandler,
      readOnly,
      ref: this.setInputEl,
      role: "combobox",
      scale: this.scale,
      status: this.status
    }, !this.readOnly && this.renderToggleIcon(this.open))), h("calcite-popover", {
      key: "93f1e3a580ad988617e4959a2e379f03a5128bf0",
      autoClose: true,
      focusTrapDisabled: true,
      label: messages.chooseTime,
      lang: this.effectiveLocale,
      onCalcitePopoverBeforeClose: this.popoverBeforeCloseHandler,
      onCalcitePopoverBeforeOpen: this.popoverBeforeOpenHandler,
      onCalcitePopoverClose: this.popoverCloseHandler,
      onCalcitePopoverOpen: this.popoverOpenHandler,
      overlayPositioning: this.overlayPositioning,
      placement: this.placement,
      ref: this.setCalcitePopoverEl,
      referenceElement: this.calciteInputEl,
      triggerDisabled: true
    }, h("calcite-time-picker", {
      key: "264696f0f4187f69999b4d751ffbe02759214e78",
      lang: this.effectiveLocale,
      messageOverrides: this.messageOverrides,
      numberingSystem: this.numberingSystem,
      onCalciteInternalTimePickerChange: this.timePickerChangeHandler,
      ref: this.setCalciteTimePickerEl,
      scale: this.scale,
      step: this.step,
      tabIndex: this.open ? void 0 : -1,
      value: this.value
    })), h(HiddenFormInputSlot, {
      key: "73e605e12a6de2c5480e392cbfbea09025243111",
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
    return h("span", {
      class: CSS2.toggleIcon,
      slot: "action"
    }, h("calcite-icon", {
      icon: open ? "chevron-up" : "chevron-down",
      scale: getIconScale(this.scale)
    }));
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
      "open": ["openHandler"],
      "focusTrapDisabled": ["handleFocusTrapDisabled"],
      "disabled": ["handleDisabledAndReadOnlyChange"],
      "readOnly": ["handleDisabledAndReadOnlyChange"],
      "messageOverrides": ["onMessagesChange"],
      "numberingSystem": ["numberingSystemWatcher"],
      "step": ["stepWatcher"],
      "value": ["valueWatcher"],
      "effectiveLocale": ["effectiveLocaleWatcher"]
    };
  }
  static get style() {
    return CalciteInputTimePickerStyle0;
  }
}, [17, "calcite-input-time-picker", {
  "open": [1540],
  "disabled": [516],
  "focusTrapDisabled": [516, "focus-trap-disabled"],
  "form": [513],
  "readOnly": [516, "read-only"],
  "max": [513],
  "min": [513],
  "messageOverrides": [1040],
  "messages": [1040],
  "validationMessage": [1, "validation-message"],
  "validationIcon": [520, "validation-icon"],
  "validity": [1040],
  "name": [1],
  "numberingSystem": [1, "numbering-system"],
  "required": [516],
  "scale": [513],
  "status": [513],
  "overlayPositioning": [1, "overlay-positioning"],
  "placement": [513],
  "step": [2],
  "value": [1025],
  "calciteInputEl": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "setFocus": [64],
  "reposition": [64]
}, void 0, {
  "open": ["openHandler"],
  "focusTrapDisabled": ["handleFocusTrapDisabled"],
  "disabled": ["handleDisabledAndReadOnlyChange"],
  "readOnly": ["handleDisabledAndReadOnlyChange"],
  "messageOverrides": ["onMessagesChange"],
  "numberingSystem": ["numberingSystemWatcher"],
  "step": ["stepWatcher"],
  "value": ["valueWatcher"],
  "effectiveLocale": ["effectiveLocaleWatcher"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-time-picker", "calcite-action", "calcite-icon", "calcite-input-message", "calcite-input-text", "calcite-loader", "calcite-popover", "calcite-progress", "calcite-time-picker"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-input-time-picker":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, InputTimePicker);
        }
        break;
      case "calcite-action":
        if (!customElements.get(tagName)) {
          defineCustomElement5();
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
      case "calcite-input-message":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-input-text":
        if (!customElements.get(tagName)) {
          defineCustomElement7();
        }
        break;
      case "calcite-loader":
        if (!customElements.get(tagName)) {
          defineCustomElement2();
        }
        break;
      case "calcite-popover":
        if (!customElements.get(tagName)) {
          defineCustomElement6();
        }
        break;
      case "calcite-progress":
        if (!customElements.get(tagName)) {
          defineCustomElement4();
        }
        break;
      case "calcite-time-picker":
        if (!customElements.get(tagName)) {
          defineCustomElement8();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteInputTimePicker = InputTimePicker;
var defineCustomElement9 = defineCustomElement$1;

export {
  dayjs,
  CalciteInputTimePicker,
  defineCustomElement9 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/time-picker.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-input-time-picker.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-JGSWLZG7.js.map
