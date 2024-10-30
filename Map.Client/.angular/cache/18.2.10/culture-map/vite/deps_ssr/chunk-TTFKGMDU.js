import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-GS7Y3YOG.js";

// ../../../node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js
function n2() {
  return new Promise((t) => import("./lyr3DMain-GQAXBBUC.js").then((t2) => t2.l).then(({
    default: n3
  }) => {
    const e2 = n3({
      locateFile: i,
      onRuntimeInitialized: () => t(e2)
    });
  })).catch((t) => {
    throw t;
  });
}
function e() {
  return new Promise((t) => import("./lyr3DWorker-CDHIHZQN.js").then((t2) => t2.l).then(({
    default: n3
  }) => {
    const e2 = n3({
      locateFile: i,
      onRuntimeInitialized: () => t(e2)
    });
  })).catch((t) => {
    throw t;
  });
}
function i(n3) {
  return n(`esri/libs/lyr3d/${n3}`);
}

export {
  n2 as n,
  e
};
//# sourceMappingURL=chunk-TTFKGMDU.js.map
