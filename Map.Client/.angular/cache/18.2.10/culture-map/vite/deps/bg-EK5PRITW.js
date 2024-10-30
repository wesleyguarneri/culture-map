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

// ../../../node_modules/@esri/calcite-components/dist/components/bg.js
var locale = {
  name: "bg",
  weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
  weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
  weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
  months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
  monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
  weekStart: 1,
  ordinal: function ordinal(n) {
    var last2Digits = n % 100;
    if (last2Digits > 10 && last2Digits < 20) {
      return n + "-ти";
    }
    var lastDigit = n % 10;
    if (lastDigit === 1) {
      return n + "-ви";
    } else if (lastDigit === 2) {
      return n + "-ри";
    } else if (lastDigit === 7 || lastDigit === 8) {
      return n + "-ми";
    }
    return n + "-ти";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "D.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY H:mm",
    LLLL: "dddd, D MMMM YYYY H:mm"
  },
  relativeTime: {
    future: "след %s",
    past: "преди %s",
    s: "няколко секунди",
    m: "минута",
    mm: "%d минути",
    h: "час",
    hh: "%d часа",
    d: "ден",
    dd: "%d дена",
    M: "месец",
    MM: "%d месеца",
    y: "година",
    yy: "%d години"
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/bg.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=bg-EK5PRITW.js.map
