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

// ../../../node_modules/@esri/calcite-components/dist/components/hr.js
var monthFormat = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_");
var monthStandalone = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_");
var MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
var months = function months2(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }
  return monthStandalone[dayjsInstance.month()];
};
months.s = monthStandalone;
months.f = monthFormat;
var locale = {
  name: "hr",
  weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
  weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
  weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
  months,
  monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
  weekStart: 1,
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  },
  relativeTime: {
    future: "za %s",
    past: "prije %s",
    s: "sekunda",
    m: "minuta",
    mm: "%d minuta",
    h: "sat",
    hh: "%d sati",
    d: "dan",
    dd: "%d dana",
    M: "mjesec",
    MM: "%d mjeseci",
    y: "godina",
    yy: "%d godine"
  },
  ordinal: function ordinal(n) {
    return n + ".";
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/hr.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=hr-JF6TQEBG.js.map
