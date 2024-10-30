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
//# sourceMappingURL=hu-FWU6ZHHT.js.map
