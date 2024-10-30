import {
  n
} from "./chunk-PRREDSOB.js";

// ../../../node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js
function n2() {
  return new Promise((t) => import("./lyr3DMain-BS366O2H.js").then((t2) => t2.l).then(({
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
  return new Promise((t) => import("./lyr3DWorker-BDLHEGD5.js").then((t2) => t2.l).then(({
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
//# sourceMappingURL=chunk-6VKBA326.js.map
