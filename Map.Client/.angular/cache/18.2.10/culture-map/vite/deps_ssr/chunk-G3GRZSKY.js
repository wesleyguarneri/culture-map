import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  numberKeys
} from "./chunk-HCYVIRBF.js";
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import {
  closestElementCrossShadowBoundary,
  containsCrossShadowBoundary
} from "./chunk-AHYZNZSK.js";

// ../../../node_modules/@esri/calcite-components/dist/components/locale.js
var unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
var trailingZeros = new RegExp("0+$");
var BigDecimal = class _BigDecimal {
  constructor(input) {
    if (input instanceof _BigDecimal) {
      return input;
    }
    const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
    this.value = BigInt(integers + decimals.padEnd(_BigDecimal.DECIMALS, "0").slice(0, _BigDecimal.DECIMALS)) + BigInt(_BigDecimal.ROUNDED && decimals[_BigDecimal.DECIMALS] >= "5");
    this.isNegative = input.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const s = this.value.toString().replace("-", "").padStart(_BigDecimal.DECIMALS + 1, "0");
    const integers = s.slice(0, -_BigDecimal.DECIMALS);
    const decimals = s.slice(-_BigDecimal.DECIMALS).replace(trailingZeros, "");
    return {
      integers,
      decimals
    };
  }
  toString() {
    const {
      integers,
      decimals
    } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
  }
  formatToParts(formatter) {
    const {
      integers,
      decimals
    } = this.getIntegersAndDecimals();
    const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
    this.isNegative && parts.unshift({
      type: "minusSign",
      value: formatter.minusSign
    });
    if (decimals.length) {
      parts.push({
        type: "decimal",
        value: formatter.decimal
      });
      decimals.split("").forEach((char) => parts.push({
        type: "fraction",
        value: char
      }));
    }
    return parts;
  }
  format(formatter) {
    const {
      integers,
      decimals
    } = this.getIntegersAndDecimals();
    const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
    const decimalsFormatted = decimals.length ? `${formatter.decimal}${decimals.split("").map((char) => formatter.numberFormatter.format(Number(char))).join("")}` : "";
    return `${integersFormatted}${decimalsFormatted}`;
  }
  add(n) {
    return _BigDecimal.fromBigInt(this.value + new _BigDecimal(n).value);
  }
  subtract(n) {
    return _BigDecimal.fromBigInt(this.value - new _BigDecimal(n).value);
  }
  multiply(n) {
    return _BigDecimal._divRound(this.value * new _BigDecimal(n).value, _BigDecimal.SHIFT);
  }
  divide(n) {
    return _BigDecimal._divRound(this.value * _BigDecimal.SHIFT, new _BigDecimal(n).value);
  }
};
BigDecimal.DECIMALS = 100;
BigDecimal.ROUNDED = true;
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS));
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? dividend * BigInt(2) / divisor % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), {
  value: bigint,
  isNegative: bigint < BigInt(0)
});
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString.split("").filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/-/g) && i === 0) {
        return true;
      }
      return numberKeys.includes(value);
    }).join("");
    return isValidNumber(result) ? new BigDecimal(result).toString() : "";
  });
}
var allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
var decimalOnlyAtEndOfString = /(?!^\.)\.$/;
var allHyphensExceptTheStart = /(?!^-)-/g;
var isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
var hasTrailingDecimalZeros = /0*$/;
var sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
  const sanitizedValue = nonExpoNumString.replace(allHyphensExceptTheStart, "").replace(decimalOnlyAtEndOfString, "").replace(allLeadingZerosOptionallyNegative, "$1");
  return isValidNumber(sanitizedValue) ? isNegativeDecimalOnlyZeros.test(sanitizedValue) ? sanitizedValue : getBigDecimalAsString(sanitizedValue) : nonExpoNumString;
});
function getBigDecimalAsString(sanitizedValue) {
  const sanitizedValueDecimals = sanitizedValue.split(".")[1];
  const value = new BigDecimal(sanitizedValue).toString();
  const [bigDecimalValueInteger, bigDecimalValueDecimals] = value.split(".");
  return sanitizedValueDecimals && bigDecimalValueDecimals !== sanitizedValueDecimals ? `${bigDecimalValueInteger}.${sanitizedValueDecimals}` : value;
}
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  if (!firstE) {
    return func(numberString);
  }
  return numberString.replace(/[eE]*$/g, "").substring(0, firstE).concat(numberString.slice(firstE).replace(/[eE]/g, "")).split(/[eE]/).map((section, i) => i === 1 ? func(section.replace(/\./g, "")) : func(section)).join("e").replace(/^e/, "1e");
}
function expandExponentialNumberString(numberString) {
  const exponentialParts = numberString.split(/[eE]/);
  if (exponentialParts.length === 1) {
    return numberString;
  }
  const number = +numberString;
  if (Number.isSafeInteger(number)) {
    return `${number}`;
  }
  const isNegative = numberString.charAt(0) === "-";
  const magnitude = +exponentialParts[1];
  const decimalParts = exponentialParts[0].split(".");
  const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
  const decimals = decimalParts[1] || "";
  const shiftDecimalLeft = (integers2, magnitude2) => {
    const magnitudeDelta = Math.abs(magnitude2) - integers2.length;
    const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers2}` : integers2;
    const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude2)}${"."}${leftPaddedZeros.slice(magnitude2)}`;
    return shiftedDecimal;
  };
  const shiftDecimalRight = (decimals2, magnitude2) => {
    const rightPaddedZeros = magnitude2 > decimals2.length ? `${decimals2}${"0".repeat(magnitude2 - decimals2.length)}` : decimals2;
    const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude2)}${"."}${rightPaddedZeros.slice(magnitude2)}`;
    return shiftedDecimal;
  };
  const expandedNumberString = magnitude > 0 ? `${integers}${shiftDecimalRight(decimals, magnitude)}` : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
  return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString.replace(unnecessaryDecimal, "").replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
  return numberKeys.some((number) => string.includes(number));
}
function addLocalizedTrailingDecimalZeros(localizedValue, value, formatter) {
  const decimals = value.split(".")[1];
  if (decimals) {
    const trailingDecimalZeros = decimals.match(hasTrailingDecimalZeros)[0];
    if (trailingDecimalZeros && formatter.delocalize(localizedValue).length !== value.length && decimals.indexOf("e") === -1) {
      const decimalSeparator = formatter.decimal;
      localizedValue = !localizedValue.includes(decimalSeparator) ? `${localizedValue}${decimalSeparator}` : localizedValue;
      return localizedValue.padEnd(localizedValue.length + trailingDecimalZeros.length, formatter.localize("0"));
    }
  }
  return localizedValue;
}
var defaultLocale = "en";
var t9nLocales = ["ar", "bg", "bs", "ca", "cs", "da", "de", "el", defaultLocale, "es", "et", "fi", "fr", "he", "hr", "hu", "id", "it", "ja", "ko", "lt", "lv", "no", "nl", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sl", "sr", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-HK", "zh-TW"];
var locales = ["ar", "bg", "bs", "ca", "cs", "da", "de", "de-AT", "de-CH", "el", defaultLocale, "en-AU", "en-CA", "en-GB", "es", "es-MX", "et", "fi", "fr", "fr-CH", "he", "hi", "hr", "hu", "id", "it", "it-CH", "ja", "ko", "lt", "lv", "mk", "no", "nl", "pl", "pt", "pt-PT", "ro", "ru", "sk", "sl", "sr", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-HK", "zh-TW"];
var numberingSystems = ["arab", "arabext", "latn"];
var isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
var browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
var defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem) ? "latn" : browserNumberingSystem;
var getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
function getSupportedLocale(locale, context = "cldr") {
  const contextualLocales = context === "cldr" ? locales : t9nLocales;
  if (!locale) {
    return defaultLocale;
  }
  if (contextualLocales.includes(locale)) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "nb") {
    return "no";
  }
  if (context === "t9n" && locale === "pt") {
    return "pt-BR";
  }
  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!contextualLocales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }
  if (locale === "zh") {
    return "zh-CN";
  }
  if (!contextualLocales.includes(locale)) {
    console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
    return defaultLocale;
  }
  return locale;
}
function getDateFormatSupportedLocale(locale) {
  switch (locale) {
    case "it-CH":
      return "de-CH";
    case "bs":
      return "bs-Cyrl";
    default:
      return locale;
  }
}
var connectedComponents = /* @__PURE__ */ new Set();
function connectLocalized(component) {
  updateEffectiveLocale(component);
  if (connectedComponents.size === 0) {
    mutationObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
      subtree: true
    });
  }
  connectedComponents.add(component);
}
function updateEffectiveLocale(component) {
  component.effectiveLocale = getLocale(component);
}
function disconnectLocalized(component) {
  connectedComponents.delete(component);
  if (connectedComponents.size === 0) {
    mutationObserver.disconnect();
  }
}
var mutationObserver = createObserver("mutation", (records) => {
  records.forEach((record) => {
    const el = record.target;
    connectedComponents.forEach((component) => {
      const inUnrelatedSubtree = !containsCrossShadowBoundary(el, component.el);
      if (inUnrelatedSubtree) {
        return;
      }
      const closestLangEl = closestElementCrossShadowBoundary(component.el, "[lang]");
      if (!closestLangEl) {
        component.effectiveLocale = defaultLocale;
        return;
      }
      const closestLang = closestLangEl.lang;
      component.effectiveLocale = // user set lang="" means unknown language, so we use default
      closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
    });
  });
});
function getLocale(component) {
  return component.el.lang || closestElementCrossShadowBoundary(component.el, "[lang]")?.lang || document.documentElement.lang || defaultLocale;
}
var NumberStringFormat = class {
  constructor() {
    this.delocalize = (numberString) => (
      // For performance, (de)localization is skipped if the formatter isn't initialized.
      // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
      // `numberFormatOptions` must be set in a component to create and cache the formatter.
      this._numberFormatOptions ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString.replace(new RegExp(`[${this._minusSign}]`, "g"), "-").replace(new RegExp(`[${this._group}]`, "g"), "").replace(new RegExp(`[${this._decimal}]`, "g"), ".").replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex)) : numberString
    );
    this.localize = (numberString) => this._numberFormatOptions ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim()) ? new BigDecimal(nonExpoNumString.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group) : nonExpoNumString) : numberString;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(options) {
    options.locale = getSupportedLocale(options?.locale);
    options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
    if (
      // No need to create the formatter if `locale` and `numberingSystem`
      // are the default values and `numberFormatOptions` has not been set
      !this._numberFormatOptions && options.locale === defaultLocale && options.numberingSystem === defaultNumberingSystem && // don't skip initialization if any options besides locale/numberingSystem are set
      Object.keys(options).length === 2 || // cache formatter by only recreating when options change
      JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)
    ) {
      return;
    }
    this._numberFormatOptions = options;
    this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
    this._digits = [...new Intl.NumberFormat(this._numberFormatOptions.locale, {
      useGrouping: false,
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).format(9876543210)].reverse();
    const index = new Map(this._digits.map((d, i) => [d, i]));
    const parts = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).formatToParts(-123456789e-1);
    this._actualGroup = parts.find((d) => d.type === "group").value;
    this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? " " : this._actualGroup;
    this._decimal = parts.find((d) => d.type === "decimal").value;
    this._minusSign = parts.find((d) => d.type === "minusSign").value;
    this._getDigitIndex = (d) => index.get(d);
  }
};
var numberStringFormatter = new NumberStringFormat();
var dateTimeFormatCache;
var previousLocaleUsedForCaching;
function buildDateTimeFormatCacheKey(options = {}) {
  return Object.entries(options).sort(([key1], [key2]) => key1.localeCompare(key2)).map((keyValue) => `${keyValue[0]}-${keyValue[1]}`).flat().join(":");
}
function getDateTimeFormat(locale, options) {
  locale = getSupportedLocale(locale);
  if (!dateTimeFormatCache) {
    dateTimeFormatCache = /* @__PURE__ */ new Map();
  }
  if (previousLocaleUsedForCaching !== locale) {
    dateTimeFormatCache.clear();
    previousLocaleUsedForCaching = locale;
  }
  const key = buildDateTimeFormatCacheKey(options);
  const cached = dateTimeFormatCache.get(key);
  if (cached) {
    return cached;
  }
  const format = new Intl.DateTimeFormat(locale, options);
  dateTimeFormatCache.set(key, format);
  return format;
}

export {
  BigDecimal,
  isValidNumber,
  parseNumberString,
  sanitizeNumberString,
  addLocalizedTrailingDecimalZeros,
  getSupportedNumberingSystem,
  getSupportedLocale,
  getDateFormatSupportedLocale,
  connectLocalized,
  disconnectLocalized,
  numberStringFormatter,
  getDateTimeFormat
};
/*! Bundled license information:

@esri/calcite-components/dist/components/locale.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-G3GRZSKY.js.map
