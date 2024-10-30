import {
  r as r2
} from "./chunk-K5IDJ4GJ.js";
import {
  h
} from "./chunk-ZUHJZKEM.js";
import {
  l
} from "./chunk-5U4TBXYS.js";
import {
  E
} from "./chunk-CVB43GGP.js";
import {
  r2 as r
} from "./chunk-DDYVXG4F.js";
import {
  s
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Legend/support/heatmapRampUtils.js
function r3(r4) {
  if (!r4.colorStops) return [];
  const e = [...r4.colorStops].filter((o) => o.color?.a > 0);
  let t = e.length - 1;
  if (e && e[0]) {
    const r5 = e[t];
    r5 && 1 !== r5.ratio && (e.push(new l({
      ratio: 1,
      color: r5.color
    })), t++);
  }
  return e.map((o, e2) => {
    let l2 = "";
    return 0 === e2 ? l2 = r4.legendOptions?.minLabel || "low" : e2 === t && (l2 = r4.legendOptions?.maxLabel || "high"), {
      color: o.color,
      label: l2,
      ratio: o.ratio
    };
  }).reverse();
}

// ../../../node_modules/@arcgis/core/renderers/support/utils.js
var v = E("short-date");
function w(e, l2, t) {
  return __async(this, null, function* () {
    r(e, l2, () => []).push(...t);
  });
}
function x(l2) {
  return __async(this, null, function* () {
    const t = /* @__PURE__ */ new Map();
    if (!l2) return t;
    if ("visualVariables" in l2 && l2.visualVariables) {
      const e = l2.visualVariables.filter((e2) => "color" === e2.type);
      for (const l3 of e) {
        const e2 = ((yield r2(l3)) ?? []).map((e3) => e3.color);
        yield w(t, l3.field || l3.valueExpression, e2);
      }
    }
    if ("heatmap" === l2.type) {
      const e = r3(l2).map((e2) => e2.color);
      yield w(t, l2.field || l2.valueExpression, e);
    } else if ("pie-chart" === l2.type) {
      for (const e of l2.attributes) yield w(t, e.field || e.valueExpression, [e.color]);
      yield w(t, "default", [l2?.othersCategory?.color, h(l2.backgroundFillSymbol, null)]);
    } else if ("dot-density" === l2.type) {
      for (const e of l2.attributes) yield w(t, e.field || e.valueExpression, [e.color]);
      yield w(t, "default", [l2.backgroundColor]);
    } else if ("unique-value" === l2.type) {
      if ("predominance" === l2.authoringInfo?.type) for (const e of l2.uniqueValueInfos ?? []) yield w(t, e.value.toString(), [h(e.symbol, null)]);
      else {
        const e = (l2.uniqueValueInfos ?? []).map((e2) => h(e2.symbol, null)), {
          field: i,
          field2: o,
          field3: a2,
          valueExpression: n2
        } = l2;
        (i || n2) && (yield w(t, i || n2, e)), o && (yield w(t, o, e)), a2 && (yield w(t, a2, e));
      }
    } else if ("class-breaks" === l2.type) {
      const e = l2.classBreakInfos.map((e2) => h(e2.symbol, null)), {
        field: i,
        valueExpression: o
      } = l2;
      yield w(t, i ?? o, e);
    } else "simple" === l2.type && (yield w(t, "default", [h(l2.symbol, null)]));
    return "defaultSymbol" in l2 && l2.defaultSymbol && (yield w(t, "default", [h(l2.defaultSymbol, null)])), t.forEach((l3, i) => {
      const o = s(l3.filter(Boolean), (e, l4) => JSON.stringify(e) === JSON.stringify(l4));
      t.set(i, o);
    }), t;
  });
}

export {
  r3 as r,
  v,
  x
};
//# sourceMappingURL=chunk-DME7BDTC.js.map
