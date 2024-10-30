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

// ../../../node_modules/@esri/calcite-components/dist/components/sk.js
function plural(n) {
  return n > 1 && n < 5 && ~~(n / 10) !== 1;
}
function translate(number, withoutSuffix, key, isFuture) {
  var result = number + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "pár sekúnd" : "pár sekundami";
    case "m":
      return withoutSuffix ? "minúta" : isFuture ? "minútu" : "minútou";
    case "mm":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "minúty" : "minút");
      }
      return result + "minútami";
    case "h":
      return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
    case "hh":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "hodiny" : "hodín");
      }
      return result + "hodinami";
    case "d":
      return withoutSuffix || isFuture ? "deň" : "dňom";
    case "dd":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "dni" : "dní");
      }
      return result + "dňami";
    case "M":
      return withoutSuffix || isFuture ? "mesiac" : "mesiacom";
    case "MM":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "mesiace" : "mesiacov");
      }
      return result + "mesiacmi";
    case "y":
      return withoutSuffix || isFuture ? "rok" : "rokom";
    case "yy":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "roky" : "rokov");
      }
      return result + "rokmi";
  }
}
var locale = {
  name: "sk",
  weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
  weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
  weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
  months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
  monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
  weekStart: 1,
  yearStart: 4,
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  relativeTime: {
    future: "za %s",
    // Should be `o %s` (change when moment/moment#5408 is fixed)
    past: "pred %s",
    s: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/sk.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=sk-S4G2BOPN.js.map
