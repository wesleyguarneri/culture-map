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

// ../../../node_modules/@esri/calcite-components/dist/components/pl.js
function plural(n) {
  return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
}
function translate(number, withoutSuffix, key) {
  var result = number + " ";
  switch (key) {
    case "m":
      return withoutSuffix ? "minuta" : "minutę";
    case "mm":
      return result + (plural(number) ? "minuty" : "minut");
    case "h":
      return withoutSuffix ? "godzina" : "godzinę";
    case "hh":
      return result + (plural(number) ? "godziny" : "godzin");
    case "MM":
      return result + (plural(number) ? "miesiące" : "miesięcy");
    case "yy":
      return result + (plural(number) ? "lata" : "lat");
  }
}
var monthFormat = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
var monthStandalone = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_");
var MONTHS_IN_FORMAT = /D MMMM/;
var months = function months2(dayjsInstance, format) {
  if (MONTHS_IN_FORMAT.test(format)) {
    return monthFormat[dayjsInstance.month()];
  }
  return monthStandalone[dayjsInstance.month()];
};
months.s = monthStandalone;
months.f = monthFormat;
var locale = {
  name: "pl",
  weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
  weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
  weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
  months,
  monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: "za %s",
    past: "%s temu",
    s: "kilka sekund",
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: "1 dzień",
    dd: "%d dni",
    M: "miesiąc",
    MM: translate,
    y: "rok",
    yy: translate
  },
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/pl.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=pl-Z4KA6FNX.js.map
