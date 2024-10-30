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

// ../../../node_modules/@esri/calcite-components/dist/components/zh-cn.js
var locale = {
  name: "zh-cn",
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  ordinal: function ordinal(number, period) {
    switch (period) {
      case "W":
        return number + "周";
      default:
        return number + "日";
    }
  },
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "YYYY/MM/DD",
    LL: "YYYY年M月D日",
    LLL: "YYYY年M月D日Ah点mm分",
    LLLL: "YYYY年M月D日ddddAh点mm分",
    l: "YYYY/M/D",
    ll: "YYYY年M月D日",
    lll: "YYYY年M月D日 HH:mm",
    llll: "YYYY年M月D日dddd HH:mm"
  },
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "几秒",
    m: "1 分钟",
    mm: "%d 分钟",
    h: "1 小时",
    hh: "%d 小时",
    d: "1 天",
    dd: "%d 天",
    M: "1 个月",
    MM: "%d 个月",
    y: "1 年",
    yy: "%d 年"
  },
  meridiem: function meridiem(hour, minute) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return "凌晨";
    } else if (hm < 900) {
      return "早上";
    } else if (hm < 1100) {
      return "上午";
    } else if (hm < 1300) {
      return "中午";
    } else if (hm < 1800) {
      return "下午";
    }
    return "晚上";
  }
};
dayjs.locale(locale, null, true);
export {
  locale as default
};
/*! Bundled license information:

@esri/calcite-components/dist/components/zh-cn.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=zh-cn-XE4UREHA.js.map
