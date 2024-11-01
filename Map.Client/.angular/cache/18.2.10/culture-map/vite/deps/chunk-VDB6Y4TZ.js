// ../../../node_modules/@arcgis/core/support/themeUtils.js
var t = "calcite-mode-";
function e() {
  return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replaceAll(/\s|'|"/g, "");
}
function r() {
  return e().startsWith("dark");
}
function c() {
  return `${t}${r() ? "dark" : "light"}`;
}
function n(t2) {
  o(t2), t2.classList.add(c());
}
function o(e2) {
  Array.from(e2.classList).forEach((r2) => {
    r2.startsWith(t) && e2.classList.remove(r2);
  });
}

export {
  r,
  c,
  n
};
//# sourceMappingURL=chunk-VDB6Y4TZ.js.map
