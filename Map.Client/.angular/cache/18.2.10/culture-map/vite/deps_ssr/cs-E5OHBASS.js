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

// ../../../node_modules/@esri/calcite-components/dist/components/cs.js
function plural(n) {
  return n > 1 && n < 5 && ~~(n / 10) !== 1;
}
function translate(number, withoutSuffix, key, isFuture) {
  var result = number + " ";
  switch (key) {
    case "s":
      return withoutSuffix || isFuture ? "pár sekund" : "pár sekundami";
    case "m":
      return withoutSuffix ? "minuta" : isFuture ? "minutu" : "minutou";
    case "mm":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "minuty" : "minut");
      }
      return result + "minutami";
    case "h":
      return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";
    case "hh":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "hodiny" : "hodin");
      }
      return result + "hodinami";
    case "d":
      return withoutSuffix || isFuture ? "den" : "dnem";
    case "dd":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "dny" : "dní");
      }
      return result + "dny";
    case "M":
      return withoutSuffix || isFuture ? "měsíc" : "měsícem";
    case "MM":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "měsíce" : "měsíců");
      }
      return result + "měsíci";
    case "y":
      return withoutSuffix || isFuture ? "rok" : "rokem";
    case "yy":
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? "roky" : "let");
      }
      return result + "lety";
  }
}
var locale = {
  name: "cs",
  weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
  weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
  weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
  months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
  monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
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
    past: "před %s",
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

@esri/calcite-components/dist/components/cs.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=cs-E5OHBASS.js.map
