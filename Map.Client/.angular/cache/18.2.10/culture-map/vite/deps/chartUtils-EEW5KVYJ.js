import {
  e as e3
} from "./chunk-LHOHW73S.js";
import {
  r as r4,
  s as s4
} from "./chunk-SV4PAQ3O.js";
import {
  Be,
  Wt
} from "./chunk-TP65YCWJ.js";
import {
  l as l2,
  o as o2
} from "./chunk-BNV3YSK4.js";
import {
  u
} from "./chunk-5PDI5QQ5.js";
import {
  be,
  fe,
  ge,
  le,
  ne,
  xe
} from "./chunk-L5ZE2SZ3.js";
import "./chunk-7XLMHXRT.js";
import "./chunk-75CJCNTJ.js";
import "./chunk-HTPP6S7Z.js";
import "./chunk-ADBLGWRU.js";
import {
  Gt,
  r as r3,
  s as s3,
  zt
} from "./chunk-42T5PSN4.js";
import {
  b,
  g as g2
} from "./chunk-W6GMJ4SS.js";
import "./chunk-IIVUY2T7.js";
import "./chunk-YAGNWBGU.js";
import "./chunk-LQTSBE7P.js";
import "./chunk-GCFUJXGH.js";
import "./chunk-SLCHZ6DD.js";
import "./chunk-ZVFENZUF.js";
import "./chunk-LM2N2I5R.js";
import {
  r as r2
} from "./chunk-DM4WHMQY.js";
import "./chunk-SZWWBMQN.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-4MMTPKY4.js";
import "./chunk-IMVP5ADD.js";
import {
  r
} from "./chunk-VDB6Y4TZ.js";
import {
  g
} from "./chunk-CQDYITZC.js";
import {
  l,
  s as s2
} from "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-MNLT652N.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import {
  e as e2
} from "./chunk-POILQGXA.js";
import {
  j
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import {
  e,
  o
} from "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import {
  x
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/niceScale.js
function t(t2, n, r5 = 10) {
  const c = o3(n - t2, false);
  if (0 === c) return [t2, n];
  const e4 = o3(c / (r5 - 1), true);
  return [Math.floor(t2 / e4) * e4, Math.ceil(n / e4) * e4];
}
function o3(t2, o4) {
  const n = Math.floor(Math.log10(t2)), r5 = t2 / 10 ** n;
  let c;
  return c = o4 ? r5 < 1.5 ? 1 : r5 < 3 ? 2 : r5 < 5 ? 2.5 : r5 < 7 ? 5 : 10 : r5 <= 1 ? 1 : r5 <= 2 ? 2 : r5 <= 3 ? 2.5 : r5 <= 5 ? 5 : 10, c * 10 ** n;
}

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/chartUtils.js
var C = "#f8f8f8";
var j2 = "#a9a9a9";
var w = "#323232";
var H = "line";
var B = "fill";
var U = 15;
var D = 12;
var R = 1e-3;
var O = 0.1;
var W = 0.02;
var G = {
  fontFamily: "Avenir Next",
  paddingBottom: D / 2,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  axisGridStroke: "#f4f4f4",
  axisLabelsFontSize: 9,
  axisLabelsFontWeight: "400",
  axisLabelsColor: j2,
  axisTooltipFontSize: 12,
  axisTooltipBackgroundColor: w,
  axisTooltipLabelColor: C,
  axisTooltipPaddingTop: Math.round(D / 4),
  axisTooltipPaddingBottom: Math.round(D / 4),
  axisTooltipPaddingHorizontal: Math.round(U / 4),
  xAxisMinGridDistance: 50,
  xAxisLabelsSpacing: Math.round(D / 2),
  xAxisMinLabelPosition: 0.05,
  xAxisMaxLabelPosition: 0.9,
  yAxisMinGridDistance: 30,
  yAxisLabelSpacing: Math.round(U / 4),
  yAxisMinLabelPosition: 0,
  yAxisMaxLabelPosition: 0.8,
  seriesTooltipFontSize: 12,
  seriesTooltipBackgroundColor: C,
  seriesTooltipLabelColor: w,
  seriesFillLighten: 0.9,
  seriesTooltipSpacing: D / 2,
  seriesTooltipPaddingVertical: Math.round(U / 4),
  seriesTooltipPaddingHorizontal: Math.round(U / 4)
};
var V = __spreadProps(__spreadValues({}, G), {
  axisGridStroke: w,
  axisLabelsColor: j2,
  axisTooltipBackgroundColor: w,
  axisTooltipLabelColor: C,
  seriesTooltipBackgroundColor: w,
  seriesTooltipLabelColor: C,
  seriesFillLighten: -0.75
});
var E = {
  minX: void 0,
  maxX: void 0,
  minY: void 0,
  maxY: void 0
};
function I(e4) {
  return __async(this, null, function* () {
    const o4 = yield Wt(e4.container);
    s(e4.abortOptions);
    const l3 = r(), r5 = l3 ? V : G;
    o4.setThemes(l3 ? [o2.new(o4), l2.new(o4)] : [o2.new(o4)]);
    const d = g(e4.container), c = o4.container.children.push(ne.new(o4, {
      panX: true,
      panY: true,
      paddingTop: r5.paddingTop,
      paddingBottom: r5.paddingBottom,
      paddingLeft: d ? r5.paddingRight : r5.paddingLeft,
      paddingRight: d ? r5.paddingLeft : r5.paddingRight,
      maxTooltipDistance: 0
    }));
    c.zoomOutButton.set("forceHidden", true);
    const p = c.xAxes.push(ge.new(o4, {
      renderer: be.new(o4, {})
    })), m = c.yAxes.push(ge.new(o4, {
      renderer: xe.new(o4, {})
    })), u2 = r2(null), f = r2("loading"), g3 = {
      params: e4,
      chart: c,
      xAxis: p,
      yAxis: m,
      seriesInfos: /* @__PURE__ */ new Map(),
      messages: null,
      theme: r5,
      pointerIsOver: false,
      get state() {
        return f.value;
      },
      get data() {
        return u2.value;
      },
      set data(t2) {
        u2.value = t2;
      }
    };
    Z(g3), q(g3), N(g3);
    const L = o([lt(g3, e4.onRangeChange), dt(g3, e4.onCursorPositionChange), yt(o4.events.once("frameended", () => {
      f.value = "ready";
    })), yt(o4)]);
    return {
      destroy: () => {
        L.remove(), f.value = "destroyed";
      },
      update: (t2) => {
        t2.data === g3.data && t2.messages === g3.messages || $(g3) || J(g3, t2);
      },
      zoomOut: () => K(g3)
    };
  });
}
function $(t2) {
  return "destroyed" === t2.state;
}
function N({
  chart: t2,
  xAxis: i,
  yAxis: e4
}) {
  const n = le.new(t2.root, {
    behavior: "none",
    xAxis: i,
    yAxis: e4
  });
  n.lineY.set("visible", false), t2.set("cursor", n);
}
function Z(t2) {
  const {
    chart: i,
    xAxis: e4,
    theme: n
  } = t2;
  e4.setAll({
    extraMax: 0,
    extraMin: 0,
    maxDeviation: 0,
    numberFormatter: gt(t2, "distance"),
    strictMinMax: true,
    strictMinMaxSelection: true
  }), e4.axisHeader.set("forceHidden", true);
  const o4 = e4.get("renderer");
  o4.setAll({
    inside: false,
    minGridDistance: n.xAxisMinGridDistance
  }), o4.labels.template.setAll({
    centerX: s3,
    centerY: s3,
    fill: zt(n.axisLabelsColor),
    fontFamily: n.fontFamily,
    fontSize: n.axisLabelsFontSize,
    fontWeight: n.axisLabelsFontWeight,
    maxPosition: n.xAxisMaxLabelPosition,
    minPosition: n.xAxisMinLabelPosition,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: n.xAxisLabelsSpacing
  });
  const s5 = e4.set("tooltip", u.new(i.root, {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  }));
  s5.get("background")?.setAll({
    fill: zt(n.axisTooltipBackgroundColor),
    stroke: void 0
  }), s5.label.setAll({
    fill: zt(n.axisTooltipLabelColor),
    fontFamily: n.fontFamily,
    fontSize: n.axisTooltipFontSize,
    paddingBottom: n.axisTooltipPaddingBottom,
    paddingLeft: n.axisTooltipPaddingHorizontal,
    paddingRight: n.axisTooltipPaddingHorizontal,
    paddingTop: n.axisTooltipPaddingTop
  }), o4.grid.template.setAll({
    strokeOpacity: 1,
    stroke: zt(n.axisGridStroke)
  });
}
function q(t2) {
  const {
    yAxis: i,
    theme: e4
  } = t2;
  i.setAll({
    baseValue: r4().noDataValue,
    extraMax: 0,
    extraMin: 0,
    maxDeviation: 0,
    numberFormatter: gt(t2, "elevation"),
    strictMinMax: true,
    strictMinMaxSelection: true,
    tooltip: void 0
  }), i.axisHeader.set("visible", false);
  const n = g(t2.params.container), o4 = i.get("renderer");
  o4.setAll({
    minGridDistance: e4.yAxisMinGridDistance,
    opposite: n,
    inside: true
  }), o4.labels.template.setAll({
    centerX: s3,
    centerY: r3,
    fill: zt(e4.axisLabelsColor),
    fontFamily: e4.fontFamily,
    fontSize: e4.axisLabelsFontSize,
    fontWeight: e4.axisLabelsFontWeight,
    maxPosition: e4.yAxisMaxLabelPosition,
    minPosition: e4.yAxisMinLabelPosition,
    paddingBottom: 0,
    paddingLeft: n ? 0 : e4.yAxisLabelSpacing,
    paddingRight: n ? e4.yAxisLabelSpacing : 0,
    paddingTop: 0,
    textAlign: "start"
  }), o4.grid.template.setAll({
    strokeOpacity: 1,
    stroke: zt(e4.axisGridStroke)
  });
}
function J(t2, i) {
  if ($(t2)) return;
  const e4 = t2.data ?? void 0, n = i.data ?? void 0;
  t2.chart.get("cursor")?.set("forceHidden", !n?.refined);
  const o4 = e4 !== n, s5 = e4?.effectiveUnits !== n?.effectiveUnits, a = e4?.uniformScaling !== n?.uniformScaling;
  t2.data = n, t2.messages = i.messages, (o4 || s5) && (Q(t2), et(t2)), a && K(t2), pt(t2);
}
function K(t2) {
  $(t2) || (t2.xAxis.zoom(0, 1), t2.yAxis.zoom(0, 1));
}
function Q(t2) {
  const {
    chart: i,
    data: e4,
    xAxis: n,
    yAxis: o4
  } = t2, {
    minX: s5,
    maxX: a,
    minY: l3,
    maxY: r5
  } = _({
    data: e4,
    pixelWidth: n.width(),
    pixelHeight: o4.height()
  }), d = !!e4?.uniformScaling, c = !!e4?.refined;
  i.setAll({
    panX: true,
    panY: d,
    pinchZoomX: c,
    pinchZoomY: c && d,
    wheelX: "panX",
    wheelY: c ? d ? "zoomXY" : "zoomX" : "none"
  }), n.setAll({
    max: a,
    min: s5,
    panX: true,
    panY: false,
    zoomX: true,
    zoomY: d
  }), o4.setAll({
    max: r5,
    min: l3,
    panX: false,
    panY: d,
    zoomX: d,
    zoomY: d
  });
}
function _({
  data: t2,
  pixelWidth: i,
  pixelHeight: e4
}) {
  if (null == t2) return E;
  const n = t2.statistics, o4 = 0, s5 = n?.maxDistance;
  let a = n?.minElevation, l3 = n?.maxElevation;
  if (null == s5 || null == a || null == l3) return E;
  const r5 = Math.max(s5 - o4, R);
  let c = Math.max(l3 - a, R);
  const m = t2.effectiveUnits;
  if (t2.dynamicElevationRange) {
    const t3 = j(r5, m.distance, m.elevation);
    c = Math.max(c, t3 / r4().maxChartRatio);
  }
  return a -= W * c, l3 = a + c + O * c, [a, l3] = t(a, l3, 10), c = l3 - a, t2.uniformScaling ? tt({
    data: t2,
    bounds: {
      minX: o4,
      maxX: s5,
      minY: a,
      maxY: l3
    },
    pixelWidth: i,
    pixelHeight: e4,
    centered: true
  }) : {
    minX: o4,
    maxX: o4 + r5,
    minY: a,
    maxY: a + c
  };
}
function tt({
  data: t2,
  bounds: i,
  pixelWidth: e4,
  pixelHeight: n,
  centered: o4
}) {
  if (null == t2) return i;
  let {
    minX: s5,
    maxX: a,
    minY: l3,
    maxY: r5
  } = i;
  if (null == s5 || null == a || null == l3 || null == r5) return E;
  const c = a - s5, p = r5 - l3, m = t2.effectiveUnits, u2 = j(p, m.elevation, m.distance) / n / (c / e4);
  return u2 >= 1 ? [s5, a] = it([s5, a], u2, o4) : [l3, r5] = it([l3, r5], 1 / u2, o4), {
    minX: s5,
    maxX: a,
    minY: l3,
    maxY: r5
  };
}
function it([t2, i], e4, n) {
  const o4 = (i - t2) * e4;
  if (n) {
    const e5 = (t2 + i) / 2 - o4 / 2;
    return [e5, e5 + o4];
  }
  return [t2, t2 + o4];
}
function et(t2) {
  const {
    chart: i,
    data: e4,
    seriesInfos: n,
    xAxis: o4,
    yAxis: s5
  } = t2;
  if (null == e4 || 0 === e4.lines.length) return void i.series.clear();
  const a = /* @__PURE__ */ new Map(), l3 = new Set(i.series.values), r5 = e4.lines.length;
  for (let d = 0; d < r5; d++) {
    const o5 = e4.lines[d];
    let s6 = n.get(o5.id);
    s6 ? (s6.fill && l3.delete(s6.fill), l3.delete(s6.line)) : (s6 = ot(t2, o5), s6.fill && i.series.push(s6.fill), i.series.push(s6.line)), a.set(s6.id, s6);
    const c = r5 - d - 1;
    s6.fill?.set("layer", c), s6.line.set("layer", r5 + c), nt(t2, s6, o5);
  }
  t2.seriesInfos = a;
  for (const d of l3) i.series.removeValue(d);
  o4.set("layer", r5 + 1), s5.set("layer", r5 + 2);
}
function nt({
  theme: t2
}, i, e4) {
  const n = zt(e4.color.toCss()), o4 = e4.samples ?? [], s5 = o4.length > 0, {
    line: a,
    fill: l3
  } = i;
  a.set("visible", s5), a.set("stroke", n), l3?.set("visible", s5), l3?.set("fill", Gt.lighten(n, t2.seriesFillLighten)), a.data.setAll(o4), l3?.data.setAll(o4);
}
function ot(t2, i) {
  const {
    id: e4
  } = i, n = st(t2, `${H}-${e4}`);
  n.setAll({
    dy: i.chartStrokeOffsetY,
    tooltip: at(t2)
  }), n.strokes.template.setAll({
    strokeWidth: i.chartStrokeWidth
  });
  let o4 = null;
  return i.chartFillEnabled && (o4 = st(t2, `${B}-${e4}`), o4.fills.template.setAll({
    fillOpacity: 1,
    visible: true
  })), {
    id: e4,
    line: n,
    fill: o4
  };
}
function st(t2, i) {
  return fe.new(t2.chart.root, {
    connect: false,
    excludeFromTotal: true,
    fill: void 0,
    id: i,
    stroke: void 0,
    valueXField: "distance",
    valueYField: "elevation",
    xAxis: t2.xAxis,
    yAxis: t2.yAxis
  });
}
function at({
  theme: t2,
  chart: i
}) {
  const e4 = u.new(i.root, {
    autoTextColor: false,
    forceHidden: true,
    getFillFromSprite: false,
    getLabelFillFromSprite: false,
    pointerOrientation: "vertical",
    visible: false
  }), n = t2.seriesTooltipPaddingHorizontal, o4 = t2.seriesTooltipPaddingVertical;
  return e4.label.setAll({
    fill: zt(t2.seriesTooltipLabelColor),
    fontFamily: t2.fontFamily,
    fontSize: t2.seriesTooltipFontSize,
    paddingBottom: o4,
    paddingLeft: n,
    paddingRight: n,
    paddingTop: o4,
    textAlign: "start"
  }), e4.get("background")?.setAll({
    stroke: void 0,
    fill: zt(t2.seriesTooltipBackgroundColor)
  }), e4.adapters.add("dy", (i2) => {
    const n2 = t2.seriesTooltipSpacing, o5 = e4.get("pointTo")?.y ?? 0;
    return (i2 ?? 0) + (e4.y() > o5 ? n2 : -n2);
  }), e4;
}
function lt(t2, i) {
  const {
    xAxis: e4,
    yAxis: n
  } = t2, o4 = () => {
    i(rt(e4), rt(n));
  }, s5 = (t3) => [t3.on("start", o4), t3.on("end", o4)];
  return bt([...s5(e4), ...s5(n)]);
}
function rt(t2) {
  const i = Math.abs((t2.get("end") ?? 0) - (t2.get("start") ?? 0)), e4 = 0 !== i ? 1 / i : 1;
  return Math.abs(1 - e4) < e2() ? 1 : e4;
}
function dt(t2, i) {
  const {
    chart: e4,
    xAxis: n,
    yAxis: o4
  } = t2, s5 = e4.get("cursor"), a = e4.plotContainer.events, l3 = (i2) => {
    t2.pointerIsOver = i2, pt(t2);
  }, r5 = () => {
    l3(false), i(null, null);
  };
  return bt([s5?.events.on("cursormoved", () => {
    if (!t2.pointerIsOver) return;
    pt(t2);
    let e5 = s5?.getPrivate("positionX") ?? 0, a2 = s5?.getPrivate("positionY") ?? 0;
    const l4 = t2.data;
    if (null != l4?.statistics) {
      const {
        maxDistance: t3,
        minElevation: i2,
        maxElevation: s6
      } = l4.statistics;
      if (null != t3) {
        e5 = ct(e5, At(n), vt(n), 0, t3);
      }
      if (null != i2 && null != s6) {
        a2 = ct(a2, At(o4), vt(o4), i2, s6);
      }
    }
    i(e5, a2);
  }), a.on("pointerover", () => l3(true)), a.on("pointerout", r5), a.on("blur", r5)]);
}
function ct(t2, i, e4, n, o4) {
  return (i + t2 * (e4 - i) - n) / (o4 - n);
}
function pt(t2) {
  const i = mt(t2);
  if (!i) return void t2.seriesInfos.forEach((t3) => {
    t3.line.get("tooltip")?.set("forceHidden", true);
  });
  t2.seriesInfos.forEach((t3) => {
    const e4 = t3.line.get("tooltip");
    e4.set("forceHidden", false), e4.label.set("text", i);
  });
  t2.xAxis.getTooltip().setAll({
    tooltipText: xt(t2)
  });
}
function mt(t2) {
  const {
    data: i
  } = t2, e4 = i?.lines.map((i2) => ({
    line: i2,
    y: ht(t2, i2)?.elevation
  })).sort(ut);
  return e4 && 0 !== e4.length && null != e4[0].y ? e4.map(({
    y: i2,
    line: e5
  }) => ft(t2, e5, i2)).join("\n") : null;
}
function ut({
  y: t2
}, {
  y: i
}) {
  return null == t2 ? 1 : null == i ? -1 : i - t2;
}
function ft(t2, i, e4) {
  const {
    data: n,
    messages: o4
  } = t2;
  if (null == n || null == o4) return "";
  const s5 = r4().formatPrecision, a = s2(o4.chartTooltip, {
    name: e3(i, o4),
    elevation: null != e4 ? g2(o4, e4, n.effectiveUnits.elevation, s5) : s4
  });
  return `[${i.color.toHex()}]●[/] ${a}`;
}
function xt(t2) {
  const {
    data: i,
    messages: e4
  } = t2;
  if (null == i || null == e4) return "";
  const n = i.lines[0], o4 = n ? ht(t2, n) : null, s5 = r4().formatPrecision;
  return null != o4 ? g2(e4, o4.distance, i.effectiveUnits.distance, s5) : "-";
}
function gt(t2, i) {
  const e4 = Be.new(t2.chart.root, {});
  return e4.format = (e5, n, o4) => {
    const {
      data: s5,
      messages: a
    } = t2;
    if (null == a || null == s5 || "string" == typeof e5) return "";
    return `${l(e5, {
      maximumFractionDigits: o4
    })} ${b(a, s5.effectiveUnits[i], "abbr")}`;
  }, e4;
}
function ht({
  chart: t2,
  xAxis: i
}, n) {
  const o4 = n.samples ?? [];
  if (0 === o4.length) return null;
  const s5 = t2.get("cursor"), a = s5?.getPrivate("positionX") ?? 0, l3 = i.toAxisPosition(a), r5 = i.positionToValue(l3);
  return x(o4, r5, (t3) => t3.distance);
}
function At(t2) {
  return t2.positionToValue(t2.get("start") ?? 0);
}
function vt(t2) {
  return t2.positionToValue(t2.get("end") ?? 1);
}
function bt(t2) {
  return o(t2.map(yt));
}
function yt(t2) {
  return e(() => {
    t2?.dispose();
  });
}
export {
  I as createChart,
  _ as getAdjustedBounds
};
//# sourceMappingURL=chartUtils-EEW5KVYJ.js.map
