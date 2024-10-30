import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E
} from "./chunk-EFLOBCAZ.js";
import {
  e as e3
} from "./chunk-BKSTWG4S.js";
import {
  t
} from "./chunk-ONRZ4VTT.js";
import {
  U as U2,
  v
} from "./chunk-XLEC46FY.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S,
  y
} from "./chunk-NXK752PZ.js";
import {
  y as y2
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  b,
  c2 as c,
  m,
  u
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  a,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  A2 as A,
  U
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/support/UintArray.js
function n(n3, e4 = false) {
  return n3 <= U ? e4 ? new Array(n3).fill(0) : new Array(n3) : new Uint32Array(n3);
}

// ../../../node_modules/@arcgis/core/layers/support/Tilemap.js
var l2 = class _l {
  constructor(t2) {
    s2(t2);
    const {
      location: i,
      data: l3
    } = t2;
    this.location = Object.freeze(a(i));
    const r2 = this.location.width, n3 = this.location.height;
    let h = true, c2 = true;
    const m2 = Math.ceil(r2 * n3 / 32), f = n(m2);
    let w2 = 0;
    for (let e4 = 0; e4 < l3.length; e4++) {
      const t3 = e4 % 32;
      l3[e4] ? (c2 = false, f[w2] |= 1 << t3) : h = false, 31 === t3 && ++w2;
    }
    c2 ? (this._availability = "unavailable", this.byteSize = 40) : h ? (this._availability = "available", this.byteSize = 40) : (this._availability = f, this.byteSize = 40 + A(f));
  }
  getAvailability(t2, i) {
    if ("unavailable" === this._availability || "available" === this._availability) return this._availability;
    const e4 = (t2 - this.location.top) * this.location.width + (i - this.location.left), a3 = e4 % 32, o = e4 >> 5, l3 = this._availability;
    return o < 0 || o > l3.length ? "unknown" : l3[o] & 1 << a3 ? "available" : "unavailable";
  }
  static fromDefinition(e4, a3) {
    const o = e4.service.request || U2, {
      row: r2,
      col: s3,
      width: h,
      height: c2
    } = e4, m2 = {
      query: {
        f: "json"
      }
    };
    return a3 = a3 ? __spreadValues(__spreadValues({}, m2), a3) : m2, o(n2(e4), a3).then((t2) => t2.data).catch((t2) => {
      if (422 === t2?.details?.httpStatus) return {
        location: {
          top: r2,
          left: s3,
          width: h,
          height: c2
        },
        valid: true,
        data: new Array(h * c2).fill(0)
      };
      throw t2;
    }).then((t2) => {
      if (t2.location && (t2.location.top !== r2 || t2.location.left !== s3 || t2.location.width !== h || t2.location.height !== c2)) throw new s("tilemap:location-mismatch", "Tilemap response for different location than requested", {
        response: t2,
        definition: {
          top: r2,
          left: s3,
          width: h,
          height: c2
        }
      });
      return _l.fromJSON(t2);
    });
  }
  static fromJSON(t2) {
    return Object.freeze(new _l(t2));
  }
};
function r(t2) {
  return `${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
}
function n2(t2) {
  let i;
  if (t2.service.tileServers?.length) {
    const e5 = t2.service.tileServers;
    i = `${e5 && e5.length ? e5[t2.row % e5.length] : t2.service.url}/tilemap/${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
  } else i = `${t2.service.url}/tilemap/${t2.level}/${t2.row}/${t2.col}/${t2.width}/${t2.height}`;
  const e4 = t2.service.query;
  return e4 && (i = `${i}?${e4}`), i;
}
function s2(t2) {
  if (!t2?.location) throw new s("tilemap:missing-location", "Location missing from tilemap response");
  if (false === t2.valid) throw new s("tilemap:invalid", "Tilemap response was marked as invalid");
  if (!t2.data) throw new s("tilemap:missing-data", "Data missing from tilemap response");
  if (!Array.isArray(t2.data)) throw new s("tilemap:data-mismatch", "Data must be an array of numbers");
  if (t2.data.length !== t2.location.width * t2.location.height) throw new s("tilemap:data-mismatch", "Number of data items does not match width/height of tilemap");
}

// ../../../node_modules/@arcgis/core/layers/support/TilemapCache.js
var w;
var j = w = class extends S {
  constructor(e4) {
    super(e4), this._pendingTilemapRequests = {}, this.request = U2, this.size = 32, this._prefetchingEnabled = true;
  }
  initialize() {
    this._tilemapCache = new e3(2 * E.MEGABYTES), this.addHandles(d(() => {
      const {
        layer: e4
      } = this;
      return [e4?.parsedUrl, e4?.tileServers, e4?.apiKey, e4?.customParameters];
    }, () => this._initializeTilemapDefinition(), P));
  }
  get effectiveMinLOD() {
    return this.minLOD ?? this.layer.tileInfo.lods[0].level;
  }
  get effectiveMaxLOD() {
    return this.maxLOD ?? this.layer.tileInfo.lods[this.layer.tileInfo.lods.length - 1].level;
  }
  getAvailability(e4, t2, i) {
    if (!this.layer.tileInfo.lodAt(e4) || e4 < this.effectiveMinLOD || e4 > this.effectiveMaxLOD) return "unavailable";
    const r2 = this._tilemapFromCache(e4, t2, i, this._tmpTilemapDefinition);
    return r2 ? r2.getAvailability(t2, i) : "unknown";
  }
  fetchAvailability(e4, t2, i, r2) {
    return !this.layer.tileInfo.lodAt(e4) || e4 < this.effectiveMinLOD || e4 > this.effectiveMaxLOD ? Promise.reject(new s("tile-map:tile-unavailable", "Tile is not available", {
      level: e4,
      row: t2,
      col: i
    })) : this._fetchTilemap(e4, t2, i, r2).catch((e5) => e5).then((r3) => {
      if (r3 instanceof l2) {
        const l3 = r3.getAvailability(t2, i);
        if ("unavailable" === l3) throw new s("tile-map:tile-unavailable", "Tile is not available", {
          level: e4,
          row: t2,
          col: i
        });
        return l3;
      }
      if (b(r3)) throw r3;
      return "unknown";
    });
  }
  fetchAvailabilityUpsample(e4, t2, i, r2, s3) {
    r2.level = e4, r2.row = t2, r2.col = i;
    const l3 = this.layer.tileInfo;
    l3.updateTileInfo(r2);
    const o = this.fetchAvailability(e4, t2, i, s3).catch((e5) => {
      if (b(e5)) throw e5;
      if (l3.upsampleTile(r2)) return this.fetchAvailabilityUpsample(r2.level, r2.row, r2.col, r2, s3);
      throw e5;
    });
    return this._fetchAvailabilityUpsamplePrefetch(r2.id, e4, t2, i, s3, o), o;
  }
  _fetchAvailabilityUpsamplePrefetch(e4, t2, i, r2, s3, o) {
    return __async(this, null, function* () {
      if (!this._prefetchingEnabled || null == e4) return;
      const a3 = `prefetch-${e4}`;
      if (this.hasHandles(a3)) return;
      const n3 = new AbortController();
      o.then(() => n3.abort(), () => n3.abort());
      let h = false;
      const p = e(() => {
        h || (h = true, n3.abort());
      });
      if (this.addHandles(p, a3), yield y(10, n3.signal).catch(() => {
      }), h || (h = true, this.removeHandles(a3)), c(n3)) return;
      const m2 = new t(e4, t2, i, r2), f = __spreadProps(__spreadValues({}, s3), {
        signal: n3.signal
      }), v2 = this.layer.tileInfo;
      for (let l3 = 0; w._prefetches.length < w._maxPrefetch && v2.upsampleTile(m2); ++l3) {
        const e5 = this.fetchAvailability(m2.level, m2.row, m2.col, f);
        w._prefetches.push(e5);
        const t3 = () => {
          w._prefetches.removeUnordered(e5);
        };
        e5.then(t3, t3);
      }
    });
  }
  _fetchTilemap(e4, t2, i, r2) {
    if (!this.layer.tileInfo.lodAt(e4) || e4 < this.effectiveMinLOD || e4 > this.effectiveMaxLOD) return Promise.reject(new s("tilemap-cache:level-unavailable", `Level ${e4} is unavailable in the service`));
    const l3 = this._tmpTilemapDefinition, o = this._tilemapFromCache(e4, t2, i, l3);
    if (o) return Promise.resolve(o);
    const a3 = r2?.signal;
    return r2 = __spreadProps(__spreadValues({}, r2), {
      signal: null
    }), new Promise((e5, t3) => {
      m(a3, () => t3(u()));
      const i2 = r(l3);
      let s3 = this._pendingTilemapRequests[i2];
      if (!s3) {
        s3 = l2.fromDefinition(l3, r2).then((e7) => (this._tilemapCache.put(i2, e7, e7.byteSize), e7));
        const e6 = () => {
          delete this._pendingTilemapRequests[i2];
        };
        this._pendingTilemapRequests[i2] = s3, s3.then(e6, e6);
      }
      s3.then(e5, t3);
    });
  }
  _initializeTilemapDefinition() {
    if (!this.layer.parsedUrl) return;
    const {
      parsedUrl: e4,
      apiKey: t2,
      customParameters: i
    } = this.layer;
    this._tilemapCache.clear(), this._tmpTilemapDefinition = {
      service: {
        url: e4.path,
        query: v(__spreadProps(__spreadValues(__spreadValues({}, e4.query), i), {
          token: t2 ?? e4.query?.token
        })),
        tileServers: this.layer.tileServers,
        request: this.request
      },
      width: this.size,
      height: this.size,
      level: 0,
      row: 0,
      col: 0
    };
  }
  _tilemapFromCache(e4, t2, i, r2) {
    r2.level = e4, r2.row = t2 - t2 % this.size, r2.col = i - i % this.size;
    const s3 = r(r2);
    return this._tilemapCache.get(s3);
  }
  get test() {
  }
};
j._maxPrefetch = 4, j._prefetches = new l({
  initialSize: w._maxPrefetch
}), e2([y2({
  constructOnly: true
})], j.prototype, "layer", void 0), e2([y2({
  constructOnly: true
})], j.prototype, "minLOD", void 0), e2([y2({
  constructOnly: true
})], j.prototype, "maxLOD", void 0), e2([y2({
  constructOnly: true
})], j.prototype, "request", void 0), e2([y2({
  constructOnly: true
})], j.prototype, "size", void 0), j = w = e2([a2("esri.layers.support.TilemapCache")], j);

export {
  j
};
//# sourceMappingURL=chunk-KU2YMUPJ.js.map
