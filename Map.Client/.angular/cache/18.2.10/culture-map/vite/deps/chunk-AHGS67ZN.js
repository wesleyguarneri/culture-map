// ../../../node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/featureReductionUtils.js
function e(e2, a) {
  const c = e2.featureReduction;
  return c && "selection" !== c.type && (!("maxScale" in c) || !c.maxScale || c.maxScale < a.scale) ? c : null;
}

export {
  e
};
//# sourceMappingURL=chunk-AHGS67ZN.js.map