import {
  s
} from "./chunk-YVULORT6.js";

// ../../../node_modules/@arcgis/core/support/actions/actionUtils.js
function t(i) {
  return i.icon ? i.icon : "image" in i && i.image || i.className ? void 0 : "question";
}
function n(i) {
  return i ? {
    backgroundImage: `url(${i})`
  } : {};
}
function e({
  action: t2,
  feature: n2
}) {
  const e2 = n2?.attributes, o = "image" in t2 ? t2.image : void 0;
  return o && e2 ? s(o, e2) : o ?? "";
}

export {
  t,
  n,
  e
};
//# sourceMappingURL=chunk-LSPBOBQ5.js.map
