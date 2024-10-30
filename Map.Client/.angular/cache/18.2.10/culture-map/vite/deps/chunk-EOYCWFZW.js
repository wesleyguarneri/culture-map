import {
  T,
  w
} from "./chunk-D4LAF4TH.js";

// ../../../node_modules/@arcgis/core/layers/support/timeSupport.js
function i(i2, n, s) {
  if (null == i2?.timeInfo) return null;
  const {
    datesInUnknownTimezone: l = false,
    timeOffset: o,
    useViewTime: m
  } = i2;
  let u = i2.timeExtent;
  l && (u = w(u));
  let r = m ? n && u ? n.intersection(u) : n || u : u;
  return !r || r.isEmpty || r.isAllTime ? r : (o && (r = r.offset(-o.value, o.unit)), l && (r = T(r)), r.equals(s) ? s : r);
}

export {
  i
};
//# sourceMappingURL=chunk-EOYCWFZW.js.map
