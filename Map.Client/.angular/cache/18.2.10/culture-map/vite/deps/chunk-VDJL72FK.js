import {
  e,
  u
} from "./chunk-IHVSZYZS.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/FeatureTileDescriptor3D.js
var t = class _t {
  constructor(e2, t2, h, r = null) {
    this.lij = [0, 0, 0], this.extent = u(), this.resolution = 0, this.loadPriority = 0, this.measures = {
      visibility: s.VISIBLE_ON_SURFACE,
      screenRect: u(),
      distance: 0,
      shouldSplit: false
    }, this.used = false, r && this.acquire(e2, t2, h, r);
  }
  acquire(i, e2, s2, h) {
    this.tilingScheme = h, this.id = _t.id(i, e2, s2), this.lij[0] = i, this.lij[1] = e2, this.lij[2] = s2, h.getExtent(i, e2, s2, this.extent), this.resolution = h.resolutionAtLevel(i);
  }
  release() {
    this.tilingScheme = null;
  }
  getChildren(i) {
    const e2 = this.lij[0] + 1, s2 = 2 * this.lij[1], h = 2 * this.lij[2];
    return i ? (i[0].acquire(e2, s2, h, this.tilingScheme), i[1].acquire(e2, s2 + 1, h, this.tilingScheme), i[2].acquire(e2, s2, h + 1, this.tilingScheme), i[3].acquire(e2, s2 + 1, h + 1, this.tilingScheme), i) : [new _t(e2, s2, h, this.tilingScheme), new _t(e2, s2 + 1, h, this.tilingScheme), new _t(e2, s2, h + 1, this.tilingScheme), new _t(e2, s2 + 1, h + 1, this.tilingScheme)];
  }
  copyMeasurementsFrom(i) {
    this.measures.visibility = i.measures.visibility, this.measures.shouldSplit = i.measures.shouldSplit, this.measures.distance = i.measures.distance, e(i.measures.screenRect, this.measures.screenRect);
  }
  static id(i, e2, t2) {
    return `${i}/${e2}/${t2}`;
  }
};
var s;
!function(i) {
  i[i.INVISIBLE = 0] = "INVISIBLE", i[i.VISIBLE_WHEN_EXTENDED = 1] = "VISIBLE_WHEN_EXTENDED", i[i.VISIBLE_ON_SURFACE = 2] = "VISIBLE_ON_SURFACE";
}(s || (s = {}));

export {
  t,
  s
};
//# sourceMappingURL=chunk-VDJL72FK.js.map
