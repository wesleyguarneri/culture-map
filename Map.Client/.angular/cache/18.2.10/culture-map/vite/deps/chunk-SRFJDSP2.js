import {
  D,
  b
} from "./chunk-HJY2YILU.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/TileInfoTilemapCache.js
var e = class {
  constructor(l, t = 0, i = l.lods[l.lods.length - 1].level) {
    this.tileInfo = l, this.minLOD = t, this.maxLOD = i, l.lodAt(t) || (this.minLOD = l.lods[0].level), l.lodAt(i) || (this.maxLOD = l.lods[l.lods.length - 1].level);
  }
  get effectiveMinLOD() {
    return this.minLOD ?? this.tileInfo.lods[0].level;
  }
  get effectiveMaxLOD() {
    return this.maxLOD ?? this.tileInfo.lods[this.tileInfo.lods.length - 1].level;
  }
  getAvailability(l, t, i) {
    const e2 = this.tileInfo?.lodAt(l);
    return !e2 || l < this.minLOD || l > this.maxLOD ? "unavailable" : e2.cols && e2.rows ? i >= e2.cols[0] && i <= e2.cols[1] && t >= e2.rows[0] && t <= e2.rows[1] ? "unknown" : "unavailable" : "unknown";
  }
  fetchAvailability(i, e2, o, s2) {
    return __async(this, null, function* () {
      yield D(s2);
      const a = this.getAvailability(i, e2, o);
      if ("unavailable" === a) throw new s("tile-map:tile-unavailable", "Tile is not available", {
        level: i,
        row: e2,
        col: o
      });
      return a;
    });
  }
  fetchAvailabilityUpsample(l, e2, o, s2, a) {
    return __async(this, null, function* () {
      yield D(a), s2.level = l, s2.row = e2, s2.col = o;
      const n = this.tileInfo;
      return n.updateTileInfo(s2), this.fetchAvailability(l, e2, o, a).catch((l2) => {
        if (b(l2)) throw l2;
        if (n.upsampleTile(s2)) return this.fetchAvailabilityUpsample(s2.level, s2.row, s2.col, s2, a);
        throw l2;
      });
    });
  }
};

export {
  e
};
//# sourceMappingURL=chunk-SRFJDSP2.js.map
