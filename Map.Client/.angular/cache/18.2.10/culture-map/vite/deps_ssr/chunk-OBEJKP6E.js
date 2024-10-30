import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/intlUtils.js
function e(e2, {
  profiles: r
}) {
  const t = e2.title;
  if (null != t) return t;
  switch (e2.type) {
    case "ground":
      return r.ground;
    case "input":
      return r.input;
    case "query":
      return r.query;
    case "view":
      return r.view;
    default:
      return "";
  }
}

export {
  e
};
//# sourceMappingURL=chunk-OBEJKP6E.js.map
