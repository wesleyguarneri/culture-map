import {
  N,
  Z
} from "./chunk-DI6VABAK.js";
import {
  r
} from "./chunk-OKJHJ3CY.js";
import {
  be
} from "./chunk-DTUSTSEJ.js";
import {
  d
} from "./chunk-DZALMCYL.js";
import {
  l
} from "./chunk-YVULORT6.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/renderers/support/numberUtils.js
var n = /^-?(\d+)(\.(\d+))?$/i;
function e(t, n2) {
  return t - n2;
}
function r2(t, n2) {
  let e2, r4;
  return e2 = Number(t.toFixed(n2)), e2 < t ? r4 = e2 + 1 / 10 ** n2 : (r4 = e2, e2 -= 1 / 10 ** n2), e2 = Number(e2.toFixed(n2)), r4 = Number(r4.toFixed(n2)), [e2, r4];
}
function o(t, n2, e2, r4, o2) {
  const i2 = l2(t, n2, e2, r4), u3 = null == i2.previous || i2.previous <= o2, s3 = null == i2.next || i2.next <= o2;
  return u3 && s3 || i2.previous + i2.next <= 2 * o2;
}
function i(t) {
  const e2 = String(t), r4 = e2.match(n);
  if (r4?.[1]) return {
    integer: r4[1].split("").length,
    fractional: r4[3] ? r4[3].split("").length : 0
  };
  if (e2.toLowerCase().includes("e")) {
    const t2 = e2.split("e"), n2 = t2[0], r5 = t2[1];
    if (n2 && r5) {
      const t3 = Number(n2);
      let e3 = Number(r5);
      const o2 = e3 > 0;
      o2 || (e3 = Math.abs(e3));
      const l4 = i(t3);
      return o2 ? (l4.integer += e3, e3 > l4.fractional ? l4.fractional = 0 : l4.fractional -= e3) : (l4.fractional += e3, e3 > l4.integer ? l4.integer = 1 : l4.integer -= e3), l4;
    }
  }
  return {
    integer: 0,
    fractional: 0
  };
}
function l2(t, n2, e2, r4) {
  const o2 = {
    previous: null,
    next: null
  };
  if (null != e2) {
    const r5 = t - e2, i2 = n2 - e2 - r5;
    o2.previous = Math.floor(Math.abs(100 * i2 / r5));
  }
  if (null != r4) {
    const e3 = r4 - t, i2 = r4 - n2 - e3;
    o2.next = Math.floor(Math.abs(100 * i2 / e3));
  }
  return o2;
}
function u(t, n2 = {}) {
  const l4 = t.slice(0), {
    tolerance: u3 = 2,
    strictBounds: s3 = false,
    indexes: c3 = l4.map((t2, n3) => n3)
  } = n2;
  c3.sort(e);
  for (let e2 = 0; e2 < c3.length; e2++) {
    const t2 = c3[e2], n3 = l4[t2], a2 = 0 === t2 ? null : l4[t2 - 1], f2 = t2 === l4.length - 1 ? null : l4[t2 + 1], m2 = i(n3).fractional;
    if (m2) {
      let i2, c4 = 0, g = false;
      for (; c4 <= m2 && !g; ) {
        const t3 = r2(n3, c4);
        i2 = s3 && 0 === e2 ? t3[1] : t3[0], g = o(n3, i2, a2, f2, u3), c4++;
      }
      g && (l4[t2] = i2);
    }
  }
  return l4;
}
var s = {
  maximumFractionDigits: 20
};
function c(n2) {
  return l(n2, s);
}

// ../../../node_modules/@arcgis/core/widgets/Legend/support/utils.js
var a = "<";
var l3 = ">";
function r3(e2, A, i2, o2) {
  let r4 = "";
  0 === A ? r4 = `${a} ` : A === i2 && (r4 = `${l3} `);
  return r4 + (o2 ? N(e2, o2) : c(e2));
}
var s2 = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];
function u2(e2) {
  return __async(this, null, function* () {
    if (!("visualVariables" in e2) || !e2.visualVariables) return null;
    const A = e2.visualVariables.find((e3) => "color" === e3.type);
    if (!A) return null;
    let t = null, n2 = null;
    if (A.stops) {
      if (1 === A.stops.length) return A.stops[0].color;
      t = A.stops[0].value, n2 = A.stops[A.stops.length - 1].value;
    }
    const i2 = null != t && null != n2 ? t + (n2 - t) / 2 : 0, {
      getColor: o2
    } = yield import("./visualVariableUtils-YDPTPXKG.js");
    return o2(A, i2) ?? null;
  });
}
function p(e2, A) {
  return __async(this, null, function* () {
    const t = e2.trailCap, n2 = e2.trailWidth || 1, i2 = A || (yield u2(e2)) || e2.color;
    return new d({
      cap: t,
      color: i2,
      width: n2
    });
  });
}
function f(e2) {
  return null != e2 && "object" == typeof e2 && "min" in e2 && "max" in e2;
}
function m(e2, A) {
  if (!A.field) return null;
  if ("featureReduction" in e2) switch (e2.featureReduction?.type) {
    case "cluster":
    case "binning": {
      const t = e2.featureReduction.fields.find(({
        name: e3
      }) => e3.toLowerCase() === A.field.toLowerCase());
      return t && "getField" in e2 ? e2.getField(t.onStatisticField) : null;
    }
  }
  return "getField" in e2 ? e2.getField?.(A.field) : null;
}
function d2(e2, A) {
  const t = "popupTemplate" in e2 ? e2.popupTemplate?.fieldInfos : null;
  if (t?.length && A) return t.find((e3) => e3.fieldName?.toLowerCase() === A.toLowerCase())?.format?.dateFormat;
}
function c2(t, n2, o2) {
  const a2 = m(t, n2);
  if (!a2 || !Z(a2) && !be(a2)) return null;
  let l4 = d2(t, a2.name);
  if (!l4 && "date" === a2.type) {
    let A = 0, t2 = 0;
    n2.stops ? (A = n2.stops?.at(0)?.value ?? A, t2 = n2.stops?.at(-1)?.value ?? t2) : "minDataValue" in n2 && "maxDataValue" in n2 && (A = n2.minDataValue ?? A, t2 = n2.maxDataValue ?? t2), l4 = t2 - A > 2 * r.days ? "short-date" : "short-date-short-time";
  }
  return {
    fieldType: a2.type,
    format: l4,
    timeZoneOptions: {
      layerTimeZone: "preferredTimeZone" in t ? t.preferredTimeZone : null,
      viewTimeZone: o2,
      datesInUnknownTimezone: "datesInUnknownTimezone" in t && t.datesInUnknownTimezone
    }
  };
}
function w(e2) {
  if ("authoringInfo" in e2) return e2.authoringInfo?.visualVariables?.find(({
    theme: e3
  }) => "reference-size" === e3);
}

export {
  i,
  l2 as l,
  u,
  a,
  l3 as l2,
  r3 as r,
  s2 as s,
  u2,
  p,
  f,
  c2 as c,
  w
};
//# sourceMappingURL=chunk-TPVEWGXS.js.map
