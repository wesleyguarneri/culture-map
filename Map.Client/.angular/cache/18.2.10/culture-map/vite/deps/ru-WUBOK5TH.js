import {
  dayjs
} from "./chunk-JGSWLZG7.js";
import "./chunk-MWH4LPTV.js";
import "./chunk-A3REIP66.js";
import "./chunk-5DGWLHL7.js";
import "./chunk-RXFX2JA3.js";
import "./chunk-WN5DHCGF.js";
import "./chunk-K27J73UB.js";
import "./chunk-67SMQ6CN.js";
import "./chunk-AMGONSU2.js";
import "./chunk-KJHR46PR.js";
import "./chunk-GL2UDHKK.js";
import "./chunk-LVO5HG5M.js";
import "./chunk-L7FZBUUR.js";
import "./chunk-HIXQ76MY.js";
import "./chunk-46GG7UPH.js";
import "./chunk-PBDQTCSC.js";
import "./chunk-LY6QK6XQ.js";
import "./chunk-YPWMP2VK.js";
import "./chunk-URKUSNVW.js";
import "./chunk-BJUGMQT5.js";
import "./chunk-XGIY42ZI.js";
import "./chunk-M6DKAVSK.js";
import "./chunk-B3F3MSZ2.js";
import "./chunk-EU6DW6GK.js";
import "./chunk-AX5NQF7U.js";
import "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import "./chunk-D25A7Z5T.js";
import "./chunk-RGUNAV4Z.js";
import "./chunk-RCBGISRX.js";
import "./chunk-2P72IR2Y.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/ru.js
var monthFormat = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_");
var monthStandalone = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_");
var monthShortFormat = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_");
var monthShortStandalone = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_");
var MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
function plural(word, num) {
  var forms = word.split("_");
  return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
}
function relativeTimeWithPlural(number, withoutSuffix, key) {
  var format = {
    mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
    hh: "час_часа_часов",
    dd: "день_дня_дней",
    MM: "месяц_месяца_месяцев",
    yy: "год_года_лет"
  };
  if (key === "m") {
    return withoutSuffix ? "минута" : "минуту";
  }
  return number + " " + plural(format[key], +number);
}
var months = function months2(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }
  return monthStandalone[dayjsInstance.month()];
};
months.s = monthStandalone;
months.f = monthFormat;
var monthsShort = function monthsShort2(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthShortFormat[dayjsInstance.month()];
  }
  return monthShortStandalone[dayjsInstance.month()];
};
monthsShort.s = monthShortStandalone;
monthsShort.f = monthShortFormat;
var locale = {
  name: "ru",
  weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
  weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
  weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
  months,
  monthsShort,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY г.",
    LLL: "D MMMM YYYY г., H:mm",
    LLLL: "dddd, D MMMM YYYY г., H:mm"
  },
  relativeTime: {
    future: "через %s",
    past: "%s назад",
    s: "несколько секунд",
    m: relativeTimeWithPlural,
    mm: relativeTimeWithPlural,
    h: "час",
    hh: relativeTimeWithPlural,
    d: "день",
    dd: relativeTimeWithPlural,
    M: "месяц",
    MM: relativeTimeWithPlural,
    y: "год",
    yy: relativeTimeWithPlural
  },
  ordinal: function ordinal(n) {
    return n;
  },
  meridiem: function meridiem(hour) {
    if (hour < 4) {
      return "ночи";
    } else if (hour < 12) {
      return "утра";
    } else if (hour < 17) {
      return "дня";
    }
    return "вечера";
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/ru.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=ru-WUBOK5TH.js.map
