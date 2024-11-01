import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-I6EZE7ZH.js";
import {
  e as e2
} from "./chunk-J7FRIDYV.js";
import {
  _
} from "./chunk-QWE4DSVN.js";
import {
  b,
  m
} from "./chunk-B76NC7GX.js";
import {
  R,
  u as u2
} from "./chunk-GCVQXAS4.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  u
} from "./chunk-6WGE3IUL.js";

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileQueue.js
function c(e3, t2) {
  return e3.length = 0, t2.forEach((t3) => e3.push(t3)), e3;
}
var u3 = /* @__PURE__ */ new Set();
var a2 = [];
var h = /* @__PURE__ */ new Map();
var l = [0, 0];
var p = class extends S {
  constructor(e3) {
    super(e3), this._keyToItem = /* @__PURE__ */ new Map(), this.concurrency = 6, this.strategy = "scale-first", this.tileInfoView = null;
  }
  initialize() {
    const {
      concurrency: e3,
      process: t2,
      strategy: s2
    } = this;
    this._queue = new _({
      concurrency: e3,
      process: (e4, s3) => {
        const r2 = this._keyToItem.get(e4);
        return t2(r2, {
          signal: s3
        });
      },
      peeker: "scale-first" === s2 ? (e4) => this._peekByScaleFirst(e4) : (e4) => this._peekByCenterFirst(e4)
    });
  }
  destroy() {
    this.clear(), this._queue = u(this._queue);
  }
  get length() {
    return this._queue ? this._queue.length : 0;
  }
  get onGoingCount() {
    return this._keyToItem.size;
  }
  abort(e3) {
    const t2 = "string" == typeof e3 ? e3 : e3.id;
    this._queue.abort(t2);
  }
  clear() {
    this._queue.clear(), this._keyToItem.clear();
  }
  has(e3) {
    return "string" == typeof e3 ? this._keyToItem.has(e3) : this._keyToItem.has(e3.id);
  }
  isOngoing(e3) {
    const t2 = "string" == typeof e3 ? e3 : e3.id;
    return this.has(t2) && this._queue.isOngoing(t2);
  }
  pause() {
    this._queue.pause();
  }
  push(e3) {
    const t2 = e3.key.id;
    if (this._queue.has(t2)) return this._queue.get(t2);
    const s2 = this._queue.push(t2), r2 = () => {
      this._keyToItem.delete(t2);
    };
    return this._keyToItem.set(t2, e3), s2.then(r2, r2), s2;
  }
  reset() {
    this._queue.reset();
  }
  resume() {
    this._queue.resume();
  }
  _peekByScaleFirst(e3) {
    if (!this.state) return e3.values().next().value;
    const t2 = this.tileInfoView;
    let s2 = Number.NEGATIVE_INFINITY, r2 = Number.POSITIVE_INFINITY;
    e3.forEach((e4) => {
      const t3 = this._keyToItem.get(e4), o3 = this.tileInfoView.getTileScale(t3.key);
      h.has(o3) || (h.set(o3, []), s2 = Math.max(o3, s2), r2 = Math.min(o3, r2)), h.get(o3).push(t3.key), u3.add(o3);
    });
    let o2 = this.state.scale;
    h.has(o2) || (c(a2, u3), a2.sort((e4, t3) => e4 - t3), o2 = a2.reduce((e4, t3) => Math.abs(t3 - o2) < Math.abs(e4 - o2) ? t3 : e4, a2[0])), o2 = Math.min(o2, s2), o2 = Math.max(o2, r2);
    const i2 = h.get(o2), n = t2.getClosestInfoForScale(o2), l2 = n.getColumnForX(this.state.center[0]), p2 = n.getRowForY(this.state.center[1]);
    return i2.sort((e4, t3) => {
      const s3 = n.denormalizeCol(e4.col, e4.world), r3 = n.denormalizeCol(t3.col, t3.world);
      return Math.sqrt((l2 - s3) * (l2 - s3) + (p2 - e4.row) * (p2 - e4.row)) - Math.sqrt((l2 - r3) * (l2 - r3) + (p2 - t3.row) * (p2 - t3.row));
    }), u3.clear(), h.clear(), i2[0].id;
  }
  _peekByCenterFirst(e3) {
    if (!this.state) return e3.values().next().value;
    const t2 = this.tileInfoView, s2 = this.state.center;
    let r2, o2 = Number.POSITIVE_INFINITY;
    return e3.forEach((e4) => {
      const n = this._keyToItem.get(e4);
      t2.getTileCoords(l, n.key);
      const c3 = m(l, s2);
      c3 < o2 && (o2 = c3, r2 = n.key);
    }), r2.id;
  }
};
e([y({
  constructOnly: true
})], p.prototype, "concurrency", void 0), e([y({
  constructOnly: true
})], p.prototype, "process", void 0), e([y()], p.prototype, "state", void 0), e([y({
  constructOnly: true
})], p.prototype, "strategy", void 0), e([y({
  constructOnly: true
})], p.prototype, "tileInfoView", void 0), p = e([a("esri.views.2d.tiling.TileQueue")], p);
var m2 = p;

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileCache.js
var t = class {
  constructor(e3, t2, i2) {
    this.maxSize = e3, this._tileInfoView = t2, this._removedFunc = i2, this._tilePerId = /* @__PURE__ */ new Map(), this._tileKeysPerLevel = [];
  }
  clear() {
    this._tilePerId.clear(), this._tileKeysPerLevel = [];
  }
  has(e3) {
    return this._tilePerId.has(e3);
  }
  get(e3) {
    return this._tilePerId.get(e3);
  }
  pop(e3) {
    const t2 = this._tilePerId.get(e3);
    if (!t2) return;
    const r2 = t2.key.level, s2 = this._tileKeysPerLevel[r2];
    i(this._tilePerId, e3);
    for (let i2 = 0; i2 < s2.length; i2++) if (s2[i2].id === e3) {
      s2.splice(i2, 1);
      break;
    }
    return t2.visible = true, t2;
  }
  add(e3) {
    e3.visible = false;
    const t2 = e3.key, i2 = t2.id;
    if (this._tilePerId.has(i2)) return;
    this._tilePerId.set(i2, e3);
    const r2 = t2.level;
    this._tileKeysPerLevel[r2] || (this._tileKeysPerLevel[r2] = []), this._tileKeysPerLevel[r2].push(t2);
  }
  prune(e3, t2, i2) {
    let r2 = this._tilePerId.size;
    if (r2 <= this.maxSize) return;
    let s2 = this._tileKeysPerLevel.length - 1;
    for (; r2 > this.maxSize && s2 >= 0; ) s2 !== e3 && (r2 = this._pruneAroundCenterTile(r2, t2, i2, s2)), s2--;
    r2 > this.maxSize && (r2 = this._pruneAroundCenterTile(r2, t2, i2, e3));
  }
  _pruneAroundCenterTile(t2, i2, r2, s2) {
    const l2 = this._tileKeysPerLevel[s2];
    if (!l2 || 0 === l2.length) return t2;
    const {
      size: h3,
      origin: n
    } = this._tileInfoView.tileInfo, o2 = r2 * h3[0], _2 = r2 * h3[1], d = [0, 0], c3 = [0, 0];
    for (l2.sort((t3, r3) => (d[0] = n.x + o2 * (t3.col + 0.5), d[1] = n.y - _2 * (t3.row + 0.5), c3[0] = n.x + o2 * (r3.col + 0.5), c3[1] = n.y - _2 * (r3.row + 0.5), b(d, i2) - b(c3, i2))); l2.length > 0; ) {
      const e3 = l2.pop();
      if (this._removeTile(e3.id), --t2 === this.maxSize) break;
    }
    return t2;
  }
  _removeTile(e3) {
    const t2 = this._tilePerId.get(e3);
    this._removedFunc && t2 && this._removedFunc(t2), i(this._tilePerId, e3);
  }
};
function i(e3, t2) {
  e3.delete(t2);
}

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileStrategy.js
var o = new e2(0, 0, 0, 0);
var h2 = /* @__PURE__ */ new Map();
var a3 = [];
var c2 = [];
var r = class {
  constructor(e3) {
    this._previousScale = Number.POSITIVE_INFINITY, this.cachePolicy = "keep", this.coveragePolicy = "closest", this.resampling = true, this.tileIndex = /* @__PURE__ */ new Map(), this.tiles = [], this.buffer = 192, this.acquireTile = e3.acquireTile, this.releaseTile = e3.releaseTile, this.tileInfoView = e3.tileInfoView, null != e3.resampling && (this.resampling = e3.resampling), e3.cachePolicy && (this.cachePolicy = e3.cachePolicy), e3.coveragePolicy && (this.coveragePolicy = e3.coveragePolicy), null != e3.buffer && (this.buffer = e3.buffer), e3.cacheSize && (this._tileCache = new t(e3.cacheSize, this.tileInfoView, (e4) => {
      this.releaseTile(e4);
    }));
  }
  destroy() {
    this.tileIndex.clear();
  }
  update(e3) {
    const {
      resampling: i2,
      tileIndex: t2
    } = this, {
      scale: l2,
      center: r2,
      resolution: n
    } = e3.state, {
      minScale: f,
      maxScale: d
    } = this.tileInfoView, u4 = !e3.stationary && l2 > this._previousScale;
    if (this._previousScale = l2, !i2 && (l2 > f || l2 < d)) return this.tiles.length = 0, void this.clear();
    const p2 = this.tileInfoView.getTileCoverage(e3.state, this.buffer, this.resampling, this.coveragePolicy);
    if (!p2) return this.tiles.length = 0, void this.clear();
    const {
      spans: y2,
      lodInfo: g
    } = p2, {
      level: I
    } = g;
    this.tiles.length = 0, t2.forEach((e4) => e4.visible = true);
    let v = 0, m3 = 0;
    if (y2.length > 0) for (const {
      row: s2,
      colFrom: a4,
      colTo: c3
    } of y2) for (let e4 = a4; e4 <= c3; e4++) {
      v++;
      const i3 = o.set(I, s2, g.normalizeCol(e4), g.getWorldForColumn(e4)).id;
      let l3 = t2.get(i3);
      if (l3) l3.isReady ? (h2.set(i3, l3), m3++) : u4 || this._addParentTile(i3, h2);
      else {
        if (this._tileCache?.has(i3)) {
          if (l3 = this._tileCache.pop(i3), this.tileIndex.set(i3, l3), l3.isReady) {
            h2.set(i3, l3), m3++;
            continue;
          }
        } else l3 = this.acquireTile(o), this.tileIndex.set(i3, l3);
        u4 || this._addParentTile(i3, h2);
      }
    }
    const T = m3 === v;
    for (const [s2, _2] of t2) {
      if (h2.has(s2)) continue;
      o.set(s2);
      const e4 = this.tileInfoView.intersects(p2, o), i3 = "purge" === this.cachePolicy ? o.level !== I : o.level > I;
      !e4 || !u4 && T ? !i3 && e4 || a3.push(_2) : _2.isReady ? i3 && "purge" === this.cachePolicy && this._hasReadyAncestor(o, I) ? a3.push(_2) : c2.push(_2) : i3 && a3.push(_2);
    }
    for (const s2 of c2) s2.isReady && h2.set(s2.key.id, s2);
    for (const s2 of a3) this._tileCache ? this._tileCache.add(s2) : this.releaseTile(s2), t2.delete(s2.key.id);
    for (const s2 of h2.values()) this.tiles.push(s2);
    for (const s2 of t2.values()) h2.has(s2.key.id) || (s2.visible = false);
    this._tileCache?.prune(I, r2, n), s.pool.release(p2), c2.length = 0, a3.length = 0, h2.clear();
  }
  clear() {
    const {
      tileIndex: e3
    } = this;
    for (const i2 of e3.values()) this.releaseTile(i2);
    e3.clear();
  }
  refresh(e3) {
    for (const i2 of this.tileIndex.values()) this.tiles.includes(i2) ? e3(i2) : a3.push(i2);
    for (const i2 of a3) this.releaseTile(i2), this.tileIndex.delete(i2.key.id);
    this._tileCache?.clear();
  }
  updateCacheSize(e3) {
    this._tileCache && (this._tileCache.maxSize = e3);
  }
  _addParentTile(e3, i2) {
    let t2 = e3, s2 = null;
    for (; t2 = this.tileInfoView.getTileParentId(t2), t2; ) if (this.tileIndex.has(t2)) {
      if (s2 = this.tileIndex.get(t2), s2?.isReady) {
        i2.has(s2.key.id) || i2.set(s2.key.id, s2);
        break;
      }
    } else if (this._tileCache?.has(t2) && (s2 = this._tileCache.pop(t2), this.tileIndex.set(t2, s2), s2?.isReady)) {
      i2.has(s2.key.id) || i2.set(s2.key.id, s2);
      break;
    }
  }
  _hasReadyAncestor(t2, s2) {
    const l2 = u2();
    this.tileInfoView.getTileBounds(l2, t2, true);
    for (const o2 of this.tileIndex.values()) if (o2.isReady && o2.key.level >= s2 && o2.key.level < t2.level) {
      const t3 = u2();
      if (this.tileInfoView.getTileBounds(t3, o2.key, true), R(t3, l2)) return true;
    }
    return false;
  }
};

export {
  m2 as m,
  r
};
//# sourceMappingURL=chunk-RVAIZQSS.js.map
