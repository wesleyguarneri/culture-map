import {
  y
} from "./chunk-D2NB6D6N.js";
import {
  l2 as l
} from "./chunk-A3NNJ7XA.js";
import {
  e,
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/effects/jsonUtils.js
function n(e2, t, r) {
  try {
    return c(e2);
  } catch (s2) {
    r?.messages?.push(s2);
  }
  return null;
}
function a(e2, r, s2, n2) {
  try {
    const n3 = o(e2);
    e(s2, n3, r);
  } catch (a2) {
    n2.messages && n2.messages.push(a2);
  }
}
function o(e2) {
  const t = y(e2);
  return t ? l(t) ? t.map((e3) => e3.toJSON()) : t.map(({
    scale: e3,
    effects: t2
  }) => ({
    scale: e3,
    value: t2.map((e4) => e4.toJSON())
  })) : null;
}
function c(e2) {
  if (!e2 || 0 === e2.length) return null;
  if (f(e2)) {
    const t = [];
    for (const r of e2) t.push({
      scale: r.scale,
      value: i(r.value)
    });
    return t;
  }
  return i(e2);
}
function f(e2) {
  const t = e2[0];
  return !!t && "scale" in t;
}
function i(e2) {
  if (!e2?.length) return "";
  const t = [];
  for (const s2 of e2) {
    let e3 = [];
    switch (s2.type) {
      case "grayscale":
      case "sepia":
      case "saturate":
      case "invert":
      case "brightness":
      case "contrast":
      case "opacity":
        e3 = [u(s2, "amount")];
        break;
      case "blur":
        e3 = [u(s2, "radius", "pt")];
        break;
      case "hue-rotate":
        e3 = [u(s2, "angle", "deg")];
        break;
      case "drop-shadow":
        e3 = [u(s2, "xoffset", "pt"), u(s2, "yoffset", "pt"), u(s2, "blurRadius", "pt"), l2(s2, "color")];
        break;
      case "bloom":
        e3 = [u(s2, "strength"), u(s2, "radius", "pt"), u(s2, "threshold")];
    }
    const n2 = `${s2.type}(${e3.filter(Boolean).join(" ")})`;
    y(n2), t.push(n2);
  }
  return t.join(" ");
}
function u(t, r, s2) {
  if (null == t[r]) throw new s("effect:missing-parameter", `Missing parameter '${r}' in ${t.type} effect`, {
    effect: t
  });
  return s2 ? t[r] + s2 : "" + t[r];
}
function l2(t, r) {
  if (null == t[r]) throw new s("effect:missing-parameter", `Missing parameter '${r}' in ${t.type} effect`, {
    effect: t
  });
  const s2 = t[r];
  return `rgba(${s2[0] || 0}, ${s2[1] || 0}, ${s2[2] || 0}, ${s2[3] / 255 || 0})`;
}

export {
  n,
  a,
  i
};
//# sourceMappingURL=chunk-V5RMUGJJ.js.map
