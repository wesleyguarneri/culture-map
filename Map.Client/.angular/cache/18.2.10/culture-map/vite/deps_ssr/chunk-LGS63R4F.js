import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var t = class {
};
var n = t;
function o(t2, ...n2) {
  let o2 = "";
  for (let r = 0; r < n2.length; r++) o2 += t2[r] + n2[r];
  return o2 += t2[t2.length - 1], o2;
}
!function(t2) {
  function n2(t3) {
    return Math.round(t3).toString();
  }
  function o2(t3) {
    return t3.toPrecision(8);
  }
  t2.int = n2, t2.float = o2;
}(o || (o = {}));

export {
  n,
  o
};
//# sourceMappingURL=chunk-LGS63R4F.js.map