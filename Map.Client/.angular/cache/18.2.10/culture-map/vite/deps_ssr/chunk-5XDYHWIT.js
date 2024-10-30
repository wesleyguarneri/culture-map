import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-WUTM5T74.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/TileReshuffleManager.js
var s2 = class {
  constructor() {
    this._candidateTiles = [];
  }
  schedule(s4) {
    this._candidateTiles.includes(s4) || this._candidateTiles.push(s4);
  }
  reshuffle(s4) {
    const e = [];
    for (const i of this._candidateTiles) s4 > 0 ? (i.reshuffle(), s4--) : e.push(i);
    this._candidateTiles = e;
  }
};

// ../../../node_modules/@arcgis/core/views/magnifier/resources.js
function s3(s4) {
  return __async(this, null, function* () {
    const r = import("./mask-svg-5CG5OXXY.js"), i = import("./overlay-svg-IFRWH4KM.js"), o = t((yield r).default, {
      signal: s4
    }), e = t((yield i).default, {
      signal: s4
    }), m = {
      mask: yield o,
      overlay: yield e
    };
    return s(s4), m;
  });
}

export {
  s2 as s,
  s3 as s2
};
//# sourceMappingURL=chunk-5XDYHWIT.js.map
