import {
  t
} from "./chunk-HUX6Y26H.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
    const r = import("./mask-svg-UQ7SX6OS.js"), i = import("./overlay-svg-3QAHDE2T.js"), o = t((yield r).default, {
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
//# sourceMappingURL=chunk-RVQEQAAL.js.map
