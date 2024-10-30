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

// ../../../node_modules/@esri/calcite-components/dist/components/sl.js
function dual(n) {
  return n % 100 == 2;
}
function threeFour(n) {
  return n % 100 == 3 || n % 100 == 4;
}
function translate(number, withoutSuffix, key, isFuture) {
  var result = number + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "nekaj sekund" : "nekaj sekundami";
    case "m":
      return withoutSuffix ? "ena minuta" : "eno minuto";
    case "mm":
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? "minuti" : "minutama");
      }
      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? "minute" : "minutami");
      }
      return result + (withoutSuffix || isFuture ? "minut" : "minutami");
    case "h":
      return withoutSuffix ? "ena ura" : isFuture ? "eno uro" : "eno uro";
    case "hh":
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? "uri" : "urama");
      }
      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? "ure" : "urami");
      }
      return result + (withoutSuffix || isFuture ? "ur" : "urami");
    case "d":
      return withoutSuffix || isFuture ? "en dan" : "enim dnem";
    case "dd":
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? "dneva" : "dnevoma");
      }
      return result + (withoutSuffix || isFuture ? "dni" : "dnevi");
    case "M":
      return withoutSuffix || isFuture ? "en mesec" : "enim mesecem";
    case "MM":
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? "meseca" : "mesecema");
      }
      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? "mesece" : "meseci");
      }
      return result + (withoutSuffix || isFuture ? "mesecev" : "meseci");
    case "y":
      return withoutSuffix || isFuture ? "eno leto" : "enim letom";
    case "yy":
      if (dual(number)) {
        return result + (withoutSuffix || isFuture ? "leti" : "letoma");
      }
      if (threeFour(number)) {
        return result + (withoutSuffix || isFuture ? "leta" : "leti");
      }
      return result + (withoutSuffix || isFuture ? "let" : "leti");
  }
}
var locale = {
  name: "sl",
  weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
  months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
  weekStart: 1,
  weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
  monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
  weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm",
    l: "D. M. YYYY"
  },
  relativeTime: {
    future: "čez %s",
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

@esri/calcite-components/dist/components/sl.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=sl-Z3CHJ3ZO.js.map
