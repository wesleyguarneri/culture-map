import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-DJBRQU7Y.js";
import {
  n as n2
} from "./chunk-BUAHJQUY.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js
var e = (r) => {
  let t = "";
  t += r[0].toUpperCase();
  for (let e2 = 1; e2 < r.length; e2++) {
    const s2 = r[e2];
    s2 === s2.toUpperCase() ? (t += "_", t += s2) : t += s2.toUpperCase();
  }
  return t;
};
var s = (r) => {
  const s2 = {};
  for (const t in r) {
    s2[e(t)] = r[t];
  }
  return n(s2);
};
var o = (t, e2, o2, n3) => {
  const a = t + t.substring(t.lastIndexOf("/")), p = e2 + e2.substring(e2.lastIndexOf("/")), f = s(n3);
  return {
    attributes: o2,
    shaders: {
      vertexShader: f + n2(`${a}.vert`),
      fragmentShader: f + n2(`${p}.frag`)
    }
  };
};

export {
  o
};
//# sourceMappingURL=chunk-YPXYKVMN.js.map
