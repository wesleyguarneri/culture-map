import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e2 as e,
  i,
  o,
  o2
} from "./chunk-K6JW77RY.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/Intersector.js
var s = class extends o {
  constructor(t, e2, r, n) {
    super(e2, r), this.point = t, this.createGraphic = n;
  }
};
function i2(e2) {
  return o2(e2) && e2.intersector === i.PCL && !!e2.target;
}
var o3 = class extends e {
  constructor(t, e2, r, n, s2) {
    super(t), this.layerUid = t, this.sublayerUid = e2, this.nodeIndex = r, this.componentIndex = n, this.triangleNr = s2;
  }
};
var c = class extends o {
  constructor(t, e2, r) {
    super(e2, null), this.point = t, this.createVoxelGraphic = r;
  }
};
var l = class extends o {
  constructor(t, e2) {
    super(t, null), this.createTiles3DGraphic = e2;
  }
};
function a(e2) {
  return o2(e2) && e2.intersector === i.I3S && !!e2.target;
}
function u(e2) {
  return o2(e2) && e2.intersector === i.VOXEL && !!e2.target;
}
function p(e2) {
  return o2(e2) && e2.intersector === i.TILES3D && !!e2.target;
}

export {
  s,
  i2 as i,
  o3 as o,
  c,
  l,
  a,
  u,
  p
};
//# sourceMappingURL=chunk-D7KGWTOO.js.map
