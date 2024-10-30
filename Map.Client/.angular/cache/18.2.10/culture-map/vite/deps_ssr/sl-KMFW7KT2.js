import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  dayjs
} from "./chunk-ZWDWQHNT.js";
import "./chunk-FIPYJJUZ.js";
import "./chunk-56BIK5HT.js";
import "./chunk-QYQC4Y6O.js";
import "./chunk-26WMHNH4.js";
import "./chunk-B2HEJPB4.js";
import "./chunk-FFCABFWN.js";
import "./chunk-6J7SHXU3.js";
import "./chunk-LC2LO3MD.js";
import "./chunk-BMGXHOVM.js";
import "./chunk-ZFSZO3AF.js";
import "./chunk-FZPWZBJV.js";
import "./chunk-WIAYKTPO.js";
import "./chunk-BJU43354.js";
import "./chunk-H4DSEZHF.js";
import "./chunk-YJ576OO7.js";
import "./chunk-IZRKG5Z7.js";
import "./chunk-XKIWE4VL.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-5S5OSPDN.js";
import "./chunk-JQGPN2VA.js";
import "./chunk-3LOI6Q5C.js";
import "./chunk-G3GRZSKY.js";
import "./chunk-HCYVIRBF.js";
import "./chunk-JTD7ODRH.js";
import "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import "./chunk-SJNQ3G2B.js";
import "./chunk-AHYZNZSK.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=sl-KMFW7KT2.js.map
