import {
  g
} from "./chunk-CRNUMTSV.js";

// ../../../node_modules/@arcgis/core/layers/support/versionUtils.js
var r = [];
function t(t2, e) {
  if (g(t2.url ?? "")) return true;
  const {
    wkid: o
  } = e;
  for (const d of r) {
    if ((t2.version ?? 0) >= d[0]) return true;
    if ("function" == typeof d[1] && (d[1] = d[1]()), d[1].has(o)) return false;
  }
  return true;
}
r.push([10.91, () => {
  const d = /* @__PURE__ */ new Set([9709, 9716, 9741, 9761, 9766]);
  for (let r2 = 9712; r2 <= 9713; r2++) d.add(r2);
  for (let r2 = 9748; r2 <= 9749; r2++) d.add(r2);
  for (let r2 = 20904; r2 <= 20932; r2++) d.add(r2);
  for (let r2 = 21004; r2 <= 21032; r2++) d.add(r2);
  for (let r2 = 21207; r2 <= 21264; r2++) d.add(r2);
  for (let r2 = 21307; r2 <= 21364; r2++) d.add(r2);
  for (let r2 = 23301; r2 <= 23333; r2++) d.add(r2);
  for (let r2 = 102759; r2 <= 102760; r2++) d.add(r2);
  for (let r2 = 102934; r2 <= 102955; r2++) d.add(r2);
  return d;
}]), r.push([10.9, () => {
  const d = /* @__PURE__ */ new Set([9300, 9354, 9364, 9367, 9373, 9377, 9387, 9456, 9473, 9498, 9678, 9680, 29874, 103599, 103872, 104028]);
  for (let r2 = 9356; r2 <= 9360; r2++) d.add(r2);
  for (let r2 = 9404; r2 <= 9407; r2++) d.add(r2);
  for (let r2 = 9476; r2 <= 9482; r2++) d.add(r2);
  for (let r2 = 9487; r2 <= 9494; r2++) d.add(r2);
  for (let r2 = 9697; r2 <= 9699; r2++) d.add(r2);
  return d;
}]), r.push([10.81, () => {
  const d = /* @__PURE__ */ new Set([9265, 9333, 103598, 103699]);
  for (let r2 = 9248; r2 <= 9254; r2++) d.add(r2);
  for (let r2 = 9271; r2 <= 9273; r2++) d.add(r2);
  for (let r2 = 9284; r2 <= 9285; r2++) d.add(r2);
  for (let r2 = 21453; r2 <= 21463; r2++) d.add(r2);
  return d;
}]), r.push([10.8, () => {
  const d = /* @__PURE__ */ new Set([8088, 8395, 8428, 8433, 8531, 8687, 8692, 8694, 8699, 8900, 9003, 9006, 9009, 9012, 9017, 9191]);
  for (let r2 = 8035; r2 <= 8036; r2++) d.add(r2);
  for (let r2 = 8455; r2 <= 8456; r2++) d.add(r2);
  for (let r2 = 8518; r2 <= 8529; r2++) d.add(r2);
  for (let r2 = 8533; r2 <= 8536; r2++) d.add(r2);
  for (let r2 = 8538; r2 <= 8540; r2++) d.add(r2);
  for (let r2 = 8677; r2 <= 8679; r2++) d.add(r2);
  for (let r2 = 8902; r2 <= 8903; r2++) d.add(r2);
  for (let r2 = 8907; r2 <= 8910; r2++) d.add(r2);
  for (let r2 = 8949; r2 <= 8951; r2++) d.add(r2);
  for (let r2 = 8972; r2 <= 8987; r2++) d.add(r2);
  for (let r2 = 9039; r2 <= 9040; r2++) d.add(r2);
  for (let r2 = 9068; r2 <= 9069; r2++) d.add(r2);
  for (let r2 = 9140; r2 <= 9141; r2++) d.add(r2);
  for (let r2 = 9148; r2 <= 9150; r2++) d.add(r2);
  for (let r2 = 9153; r2 <= 9159; r2++) d.add(r2);
  for (let r2 = 9205; r2 <= 9218; r2++) d.add(r2);
  for (let r2 = 9221; r2 <= 9222; r2++) d.add(r2);
  for (let r2 = 54098; r2 <= 54101; r2++) d.add(r2);
  return d;
}]), r.push([10.71, () => {
  const d = /* @__PURE__ */ new Set([6316]);
  for (let r2 = 8351; r2 <= 8353; r2++) d.add(r2);
  for (let r2 = 9294; r2 <= 9297; r2++) d.add(r2);
  for (let r2 = 22619; r2 <= 22621; r2++) d.add(r2);
  for (let r2 = 103586; r2 <= 103594; r2++) d.add(r2);
  return d;
}]);

export {
  t
};
//# sourceMappingURL=chunk-C3UDKWXD.js.map
