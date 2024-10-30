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

// ../../../node_modules/@esri/calcite-components/dist/components/fi.js
function relativeTimeFormatter(number, withoutSuffix, key, isFuture) {
  var past = {
    s: "muutama sekunti",
    m: "minuutti",
    mm: "%d minuuttia",
    h: "tunti",
    hh: "%d tuntia",
    d: "päivä",
    dd: "%d päivää",
    M: "kuukausi",
    MM: "%d kuukautta",
    y: "vuosi",
    yy: "%d vuotta",
    numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")
  };
  var future = {
    s: "muutaman sekunnin",
    m: "minuutin",
    mm: "%d minuutin",
    h: "tunnin",
    hh: "%d tunnin",
    d: "päivän",
    dd: "%d päivän",
    M: "kuukauden",
    MM: "%d kuukauden",
    y: "vuoden",
    yy: "%d vuoden",
    numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")
  };
  var words = isFuture && !withoutSuffix ? future : past;
  var result = words[key];
  if (number < 10) {
    return result.replace("%d", words.numbers[number]);
  }
  return result.replace("%d", number);
}
var locale = {
  name: "fi",
  // Finnish
  weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
  // Note weekdays are not capitalized in Finnish
  weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
  // There is no short form of weekdays in Finnish except this 2 letter format so it is used for both 'weekdaysShort' and 'weekdaysMin'
  weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
  months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
  // Note month names are not capitalized in Finnish
  monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  yearStart: 4,
  relativeTime: {
    future: "%s päästä",
    past: "%s sitten",
    s: relativeTimeFormatter,
    m: relativeTimeFormatter,
    mm: relativeTimeFormatter,
    h: relativeTimeFormatter,
    hh: relativeTimeFormatter,
    d: relativeTimeFormatter,
    dd: relativeTimeFormatter,
    M: relativeTimeFormatter,
    MM: relativeTimeFormatter,
    y: relativeTimeFormatter,
    yy: relativeTimeFormatter
  },
  formats: {
    LT: "HH.mm",
    LTS: "HH.mm.ss",
    L: "DD.MM.YYYY",
    LL: "D. MMMM[ta] YYYY",
    LLL: "D. MMMM[ta] YYYY, [klo] HH.mm",
    LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm",
    l: "D.M.YYYY",
    ll: "D. MMM YYYY",
    lll: "D. MMM YYYY, [klo] HH.mm",
    llll: "ddd, D. MMM YYYY, [klo] HH.mm"
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/fi.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=fi-NYMYV3AE.js.map
