import {
  e as e2
} from "./chunk-QL5HR3YL.js";
import {
  e
} from "./chunk-WPPFJVPN.js";
import {
  c
} from "./chunk-DR5TVNEL.js";
import {
  o
} from "./chunk-OKJHJ3CY.js";
import {
  t
} from "./chunk-ANKOCGE2.js";
import {
  a,
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/webscene/utils.js
function t2(t3) {
  return null != t3 && "object" == typeof t3 && e in t3;
}

// ../../../node_modules/@arcgis/core/support/timeUtils.js
function m(t3) {
  return void 0 !== t3.timeInfo;
}
function u(t3, e3) {
  return __async(this, null, function* () {
    return t3.widgets?.timeSlider?.fullTimeExtent ?? f(t3.allLayers, e3);
  });
}
function a2(t3) {
  const e3 = t3.numThumbs ?? 2, n2 = t3.currentTimeExtent;
  if (n2) {
    const {
      start: t4,
      end: i
    } = n2;
    return null != t4 && null != i && t4.getTime() === i.getTime() ? "instant" : 2 === e3 ? "time-window" : null == t4 || 0 === t4.getTime() ? "cumulative-from-start" : "cumulative-from-end";
  }
  return 2 === e3 ? "time-window" : "cumulative-from-start";
}
function c2(t3) {
  const {
    numStops: e3,
    stopInterval: n2,
    stops: r
  } = t3;
  return r ? {
    dates: a(r)
  } : n2 ? {
    interval: n2.clone()
  } : {
    count: e3 ?? 5
  };
}
function f(n2, i) {
  return __async(this, null, function* () {
    if (0 === n2.length) return c.allTime;
    yield Promise.all(n2.map((t3) => t3.load({
      signal: i
    })));
    const r = n2.filter(m), s = n2.filter((t3) => !m(t3) && null != t3.visibilityTimeExtent);
    if (0 === r.length && 0 === s.length) return c.allTime;
    const l = [], o2 = [];
    for (const t3 of r) "feature" !== t3?.type && "map-image" !== t3?.type || !t3.timeInfo?.hasLiveData ? o2.push(t3) : l.push(t3);
    const u2 = (t3) => null == t3 || t3.isAllTime, a3 = [...o2.map((t3) => {
      const e3 = t3.timeInfo?.fullTimeExtent, {
        visibilityTimeExtent: n3
      } = t3;
      return e3?.intersection(n3) ?? n3;
    }), ...s.map((t3) => t3.visibilityTimeExtent)];
    if (a3.some(u2)) return c.allTime;
    const c3 = l.map((t3) => __async(this, null, function* () {
      const e3 = (yield t3.fetchRecomputedExtents({
        signal: i
      }))?.timeExtent ?? t3.timeInfo?.fullTimeExtent, {
        visibilityTimeExtent: n3
      } = t3;
      return e3?.intersection(n3) ?? n3;
    })), f2 = (yield Promise.allSettled(c3)).map((t3) => "fulfilled" === t3.status ? t3.value : null);
    if (f2.some(u2)) return c.allTime;
    const p2 = [...f2, ...a3].filter(O);
    if (0 === p2.length) return c.allTime;
    return p2.reduce((t3, e3) => t3.union(e3));
  });
}
function p(e3, n2) {
  const i = e3.currentTimeExtent;
  if (!i) return null;
  const {
    start: r,
    end: s
  } = i, l = r ?? s ?? null;
  switch (n2) {
    case "time-window":
      return new c({
        start: r,
        end: s
      });
    case "cumulative-from-start":
      return new c({
        start: null,
        end: l
      });
    case "cumulative-from-end":
      return new c({
        start: l,
        end: null
      });
    case "instant":
      return new c({
        start: l,
        end: l
      });
  }
}
function d(t3, e3) {
  return __async(this, null, function* () {
    return t(n.getLogger("esri.support.timeUtils.getTimeSliderSettingsFromWebMap"), "`timeUtils.getTimeSliderSettingsFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'", {
      replacement: "timeUtils.getTimeSliderSettingsFromWebDocument",
      version: "4.30",
      see: "https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",
      warnOnce: true
    }), null != t3 && e2(t3) ? yield g(t3, e3) : null;
  });
}
function g(t3, e3) {
  return __async(this, null, function* () {
    if (!e2(t3) && !t2(t3)) return null;
    yield t3.load({
      signal: e3
    });
    const n2 = t3?.widgets?.timeSlider;
    if (!n2) return null;
    const i = yield u(t3, e3), r = n2.loop, s = a2(n2);
    return {
      fullTimeExtent: i,
      loop: r,
      mode: s,
      playRate: n2.stopDelay ?? 2e3,
      stops: c2(n2),
      timeExtent: p(n2, s)
    };
  });
}
function T(e3) {
  if (!e3) return e3;
  const {
    start: n2,
    end: i
  } = e3;
  return new c({
    start: null != n2 ? o(n2, -n2.getTimezoneOffset(), "minutes") : n2,
    end: null != i ? o(i, -i.getTimezoneOffset(), "minutes") : i
  });
}
function w(e3) {
  if (!e3) return e3;
  const {
    start: n2,
    end: i
  } = e3;
  return new c({
    start: null != n2 ? o(n2, n2.getTimezoneOffset(), "minutes") : n2,
    end: null != i ? o(i, i.getTimezoneOffset(), "minutes") : i
  });
}

export {
  f,
  d,
  g,
  T,
  w
};
//# sourceMappingURL=chunk-D4LAF4TH.js.map
