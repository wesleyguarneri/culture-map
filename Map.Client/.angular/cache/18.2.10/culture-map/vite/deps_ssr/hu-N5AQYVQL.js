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

// ../../../node_modules/@esri/calcite-components/dist/components/hu.js
var locale = {
  name: "hu",
  weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
  weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
  weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
  months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
  monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
  ordinal: function ordinal(n) {
    return n + ".";
  },
  weekStart: 1,
  relativeTime: {
    future: "%s múlva",
    past: "%s",
    s: function s(_, _s, ___, isFuture) {
      return "néhány másodperc" + (isFuture || _s ? "" : "e");
    },
    m: function m(_, s2, ___, isFuture) {
      return "egy perc" + (isFuture || s2 ? "" : "e");
    },
    mm: function mm(n, s2, ___, isFuture) {
      return n + " perc" + (isFuture || s2 ? "" : "e");
    },
    h: function h(_, s2, ___, isFuture) {
      return "egy " + (isFuture || s2 ? "óra" : "órája");
    },
    hh: function hh(n, s2, ___, isFuture) {
      return n + " " + (isFuture || s2 ? "óra" : "órája");
    },
    d: function d(_, s2, ___, isFuture) {
      return "egy " + (isFuture || s2 ? "nap" : "napja");
    },
    dd: function dd(n, s2, ___, isFuture) {
      return n + " " + (isFuture || s2 ? "nap" : "napja");
    },
    M: function M(_, s2, ___, isFuture) {
      return "egy " + (isFuture || s2 ? "hónap" : "hónapja");
    },
    MM: function MM(n, s2, ___, isFuture) {
      return n + " " + (isFuture || s2 ? "hónap" : "hónapja");
    },
    y: function y(_, s2, ___, isFuture) {
      return "egy " + (isFuture || s2 ? "év" : "éve");
    },
    yy: function yy(n, s2, ___, isFuture) {
      return n + " " + (isFuture || s2 ? "év" : "éve");
    }
  },
  formats: {
    LT: "H:mm",
    LTS: "H:mm:ss",
    L: "YYYY.MM.DD.",
    LL: "YYYY. MMMM D.",
    LLL: "YYYY. MMMM D. H:mm",
    LLLL: "YYYY. MMMM D., dddd H:mm"
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/hu.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=hu-N5AQYVQL.js.map
