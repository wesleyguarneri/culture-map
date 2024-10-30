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

// ../../../node_modules/@esri/calcite-components/dist/components/et.js
function relativeTimeWithTense(number, withoutSuffix, key, isFuture) {
  var format = {
    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
    m: ["ühe minuti", "üks minut"],
    mm: ["%d minuti", "%d minutit"],
    h: ["ühe tunni", "tund aega", "üks tund"],
    hh: ["%d tunni", "%d tundi"],
    d: ["ühe päeva", "üks päev"],
    M: ["kuu aja", "kuu aega", "üks kuu"],
    MM: ["%d kuu", "%d kuud"],
    y: ["ühe aasta", "aasta", "üks aasta"],
    yy: ["%d aasta", "%d aastat"]
  };
  if (withoutSuffix) {
    return (format[key][2] ? format[key][2] : format[key][1]).replace("%d", number);
  }
  return (isFuture ? format[key][0] : format[key][1]).replace("%d", number);
}
var locale = {
  name: "et",
  // Estonian
  weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
  // Note weekdays are not capitalized in Estonian
  weekdaysShort: "P_E_T_K_N_R_L".split("_"),
  // There is no short form of weekdays in Estonian except this 1 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: "P_E_T_K_N_R_L".split("_"),
  months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
  // Note month names are not capitalized in Estonian
  monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: "%s pärast",
    past: "%s tagasi",
    s: relativeTimeWithTense,
    m: relativeTimeWithTense,
    mm: relativeTimeWithTense,
    h: relativeTimeWithTense,
    hh: relativeTimeWithTense,
    d: relativeTimeWithTense,
    dd: "%d päeva",
    M: relativeTimeWithTense,
    MM: relativeTimeWithTense,
    y: relativeTimeWithTense,
    yy: relativeTimeWithTense
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM YYYY",
    LLL: "D. MMMM YYYY H:mm",
    LLLL: "dddd, D. MMMM YYYY H:mm"
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/et.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=et-BJ3CLQMG.js.map
