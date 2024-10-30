import {
  t as t2
} from "./chunk-4DJIV2NV.js";
import {
  u as u3
} from "./chunk-CX4XTOUC.js";
import {
  K,
  N
} from "./chunk-DUTZNK67.js";
import {
  t
} from "./chunk-2OMCGIU4.js";
import {
  m2 as m,
  u
} from "./chunk-T6GCUITX.js";
import {
  R,
  o,
  u as u2
} from "./chunk-IHVSZYZS.js";
import {
  _ as _2
} from "./chunk-O7UDKFOW.js";
import {
  W2 as W
} from "./chunk-JJS7PR2U.js";
import {
  _
} from "./chunk-XNUH25NY.js";
import {
  a,
  h
} from "./chunk-HJY2YILU.js";
import {
  n
} from "./chunk-2MMLMOWS.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/ElevationQuery.js
var T = class {
  queryAll(e, i, n2) {
    return __async(this, null, function* () {
      if (!(e = n2?.ignoreInvisibleLayers ? e.filter((e2) => e2.visible) : e.slice()).length) throw new s("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
      const o2 = w.fromGeometry(i);
      let l = false;
      n2?.returnSampleInfo || (l = true);
      const s2 = __spreadProps(__spreadValues(__spreadValues({}, R2), n2), {
        returnSampleInfo: true
      }), a2 = yield this.query(e[e.length - 1], o2, s2), r = yield this._queryAllContinue(e, a2, s2);
      return r.geometry = r.geometry.export(), l && delete r.sampleInfo, r;
    });
  }
  query(e, i, n2) {
    return __async(this, null, function* () {
      if (!e) throw new s("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
      if (!i || !(i instanceof w) && "point" !== i.type && "multipoint" !== i.type && "polyline" !== i.type) throw new s("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
      const o2 = __spreadValues(__spreadValues({}, R2), n2), l = new x(e, i.spatialReference, o2), s2 = o2.signal;
      return yield e.load({
        signal: s2
      }), yield q(l, i, s2), yield this._selectTiles(l, s2), yield F(l, s2), j(l), b(l, s2);
    });
  }
  createSampler(e, i, n2) {
    return __async(this, null, function* () {
      if (!e) throw new s("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
      if (!i || "extent" !== i.type) throw new s("elevation-query:invalid-extent", "Invalid or undefined extent");
      const o2 = __spreadValues(__spreadValues({}, R2), n2);
      return this._createSampler(e, i, o2);
    });
  }
  createSamplerAll(e, i, n2) {
    return __async(this, null, function* () {
      if (!(e = n2?.ignoreInvisibleLayers ? e.filter((e2) => e2.visible) : e.slice()).length) throw new s("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
      if (!i || "extent" !== i.type) throw new s("elevation-query:invalid-extent", "Invalid or undefined extent");
      const o2 = __spreadProps(__spreadValues(__spreadValues({}, R2), n2), {
        returnSampleInfo: true
      }), l = yield this._createSampler(e[e.length - 1], i, o2);
      return this._createSamplerAllContinue(e, i, l, o2);
    });
  }
  _createSampler(e, t3, i, n2) {
    return __async(this, null, function* () {
      const o2 = i.signal;
      yield e.load({
        signal: o2
      });
      const l = t3.spatialReference, s2 = e.tileInfo.spatialReference;
      l.equals(s2) || (yield N([{
        source: l,
        dest: s2
      }], {
        signal: o2
      }), t3 = K(t3, s2));
      const a2 = new _3(e, t3, i, n2);
      return yield this._selectTiles(a2, o2), yield F(a2, o2), new u3(a2.elevationTiles, a2.layer.tileInfo, a2.options.noDataValue);
    });
  }
  _createSamplerAllContinue(e, t3, i, n2) {
    return __async(this, null, function* () {
      if (e.pop(), !e.length) return i;
      const o2 = i.samplers.filter((e2) => !e2.tile.hasNoDataValues).map((e2) => o(e2.extent)), l = yield this._createSampler(e[e.length - 1], t3, n2, o2);
      if (0 === l.samplers.length) return i;
      const s2 = i.samplers.concat(l.samplers), a2 = new u3(s2, n2.noDataValue);
      return this._createSamplerAllContinue(e, t3, a2, n2);
    });
  }
  _queryAllContinue(e, t3, n2) {
    return __async(this, null, function* () {
      const o2 = e.pop(), l = t3.geometry.coordinates, s2 = t3.sampleInfo;
      n(s2);
      const a2 = [], r = [];
      for (let i = 0; i < l.length; i++) {
        const t4 = s2[i];
        t4.demResolution >= 0 ? t4.source || (t4.source = o2) : e.length && (a2.push(l[i]), r.push(i));
      }
      if (!e.length || 0 === a2.length) return t3;
      const c = t3.geometry.clone(a2), u4 = yield this.query(e[e.length - 1], c, n2), h2 = u4.sampleInfo;
      if (!h2) throw new Error("no sampleInfo");
      return r.forEach((e2, t4) => {
        l[e2].z = u4.geometry.coordinates[t4].z, s2[e2].demResolution = h2[t4].demResolution;
      }), this._queryAllContinue(e, t3, n2);
    });
  }
  _selectTiles(e, i) {
    return __async(this, null, function* () {
      "geometry" === e.type && I(e);
      const n2 = e.options.demResolution;
      if ("number" == typeof n2) C(e, n2);
      else if ("finest-contiguous" === n2) yield this._selectTilesFinestContiguous(e, i);
      else {
        if ("auto" !== n2) throw new s("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${n2}', expected a number, "finest-contiguous" or "auto"`);
        yield this._selectTilesAuto(e, i);
      }
    });
  }
  _selectTilesFinestContiguous(e, t3) {
    return __async(this, null, function* () {
      const {
        tileInfo: i,
        tilemapCache: n2
      } = e.layer, o2 = E(i, n2, e.options.minDemResolution);
      yield this._selectTilesFinestContiguousAt(e, o2, t3);
    });
  }
  _selectTilesFinestContiguousAt(e, i, l) {
    return __async(this, null, function* () {
      const s2 = e.layer;
      if (e.selectTilesAtLOD(i), i < 0) return;
      const a2 = s2.tilemapCache, r = e.getTilesToFetch();
      try {
        if (a2 && !L(a2)) yield h(Promise.all(r.map((e2) => a2.fetchAvailability(e2.level, e2.row, e2.col, {
          signal: l
        }))), l);
        else if (yield F(e, l), !e.allElevationTilesFetched()) throw e.clearElevationTiles(), new s("elevation-query:has-unavailable-tiles");
      } catch (c) {
        a(c), yield this._selectTilesFinestContiguousAt(e, i - 1, l);
      }
    });
  }
  _selectTilesAuto(t3, i) {
    return __async(this, null, function* () {
      M(t3), S(t3);
      const l = t3.layer.tilemapCache;
      if (!l || L(l)) return this._selectTilesAutoPrefetchUpsample(t3, i);
      const s2 = t3.getTilesToFetch(), a2 = {}, r = s2.map((t4) => __async(this, null, function* () {
        const n2 = new t(null, 0, 0, 0, u2()), s3 = yield _(l.fetchAvailabilityUpsample(t4.level, t4.row, t4.col, n2, {
          signal: i
        }));
        false !== s3.ok ? null != t4.id && (a2[t4.id] = n2) : a(s3.error);
      }));
      yield h(Promise.all(r), i), t3.remapTiles(a2);
    });
  }
  _selectTilesAutoPrefetchUpsample(e, t3) {
    return __async(this, null, function* () {
      const i = e.layer.tileInfo;
      yield F(e, t3);
      let n2 = false;
      e.forEachTileToFetch((e2, t4) => {
        i.upsampleTile(e2) ? n2 = true : t4();
      }), n2 && (yield this._selectTilesAutoPrefetchUpsample(e, t3));
    });
  }
};
var w = class _w {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e) {
    const t3 = new _w();
    return t3.geometry = this.geometry, t3.spatialReference = this.spatialReference, t3.coordinates = e || this.coordinates.map((e2) => e2.clone()), t3._exporter = this._exporter, t3;
  }
  project(e, t3) {
    return __async(this, null, function* () {
      if (this.spatialReference.equals(e)) return this.clone();
      yield N([{
        source: this.spatialReference,
        dest: e
      }], {
        signal: t3
      });
      const i = new u({
        spatialReference: this.spatialReference,
        points: this.coordinates.map((e2) => [e2.x, e2.y])
      }), n2 = K(i, e);
      if (!n2) return null;
      const o2 = this.coordinates.map((e2, t4) => {
        const i2 = e2.clone(), o3 = n2.points[t4];
        return i2.x = o3[0], i2.y = o3[1], i2;
      }), l = this.clone(o2);
      return l.spatialReference = e, l;
    });
  }
  static fromGeometry(e) {
    const t3 = new _w();
    if (t3.geometry = e, t3.spatialReference = e.spatialReference, e instanceof _w) t3.coordinates = e.coordinates.map((e2) => e2.clone()), t3._exporter = (t4, i) => {
      const n2 = e.clone(t4);
      return n2.spatialReference = i, n2;
    };
    else switch (e.type) {
      case "point": {
        const i = e, {
          hasZ: n2,
          hasM: o2
        } = i;
        t3.coordinates = n2 && o2 ? [new v(i.x, i.y, i.z, i.m)] : n2 ? [new v(i.x, i.y, i.z)] : o2 ? [new v(i.x, i.y, null, i.m)] : [new v(i.x, i.y)], t3._exporter = (t4, i2) => e.hasM ? new _2(t4[0].x, t4[0].y, t4[0].z, t4[0].m, i2) : new _2(t4[0].x, t4[0].y, t4[0].z, i2);
        break;
      }
      case "multipoint": {
        const i = e, {
          hasZ: n2,
          hasM: o2
        } = i;
        t3.coordinates = n2 && o2 ? i.points.map((e2) => new v(e2[0], e2[1], e2[2], e2[3])) : n2 ? i.points.map((e2) => new v(e2[0], e2[1], e2[2])) : o2 ? i.points.map((e2) => new v(e2[0], e2[1], null, e2[2])) : i.points.map((e2) => new v(e2[0], e2[1])), t3._exporter = (t4, i2) => e.hasM ? new u({
          points: t4.map((e2) => [e2.x, e2.y, e2.z, e2.m]),
          hasZ: true,
          hasM: true,
          spatialReference: i2
        }) : new u(t4.map((e2) => [e2.x, e2.y, e2.z]), i2);
        break;
      }
      case "polyline": {
        const i = e, n2 = [], o2 = [], {
          hasZ: l,
          hasM: s2
        } = e;
        let a2 = 0;
        for (const e2 of i.paths) if (o2.push([a2, a2 + e2.length]), a2 += e2.length, l && s2) for (const t4 of e2) n2.push(new v(t4[0], t4[1], t4[2], t4[3]));
        else if (l) for (const t4 of e2) n2.push(new v(t4[0], t4[1], t4[2]));
        else if (s2) for (const t4 of e2) n2.push(new v(t4[0], t4[1], null, t4[2]));
        else for (const t4 of e2) n2.push(new v(t4[0], t4[1]));
        t3.coordinates = n2, t3._exporter = (t4, i2) => {
          const n3 = e.hasM ? t4.map((e2) => [e2.x, e2.y, e2.z, e2.m]) : t4.map((e2) => [e2.x, e2.y, e2.z]), l2 = o2.map((e2) => n3.slice(e2[0], e2[1]));
          return new m({
            paths: l2,
            hasM: e.hasM,
            hasZ: true,
            spatialReference: i2
          });
        };
        break;
      }
    }
    return t3;
  }
};
var v = class _v {
  constructor(e, t3, i = null, n2 = null, o2 = null, l = null) {
    this.x = e, this.y = t3, this.z = i, this.m = n2, this.tile = o2, this.elevationTile = l;
  }
  clone() {
    return new _v(this.x, this.y, this.z, this.m);
  }
};
var g = class {
  constructor(e, t3) {
    this.layer = e, this.options = t3;
  }
};
var x = class extends g {
  constructor(e, t3, i) {
    super(e, i), this.outSpatialReference = t3, this.type = "geometry";
  }
  selectTilesAtLOD(e) {
    if (e < 0) this.geometry.coordinates.forEach((e2) => e2.tile = null);
    else {
      const {
        tileInfo: t3,
        tilemapCache: i
      } = this.layer, n2 = D(t3, i)[e].level;
      this.geometry.coordinates.forEach((e2) => e2.tile = t3.tileAt(n2, e2.x, e2.y));
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e) => !e.elevationTile);
  }
  clearElevationTiles() {
    for (const e of this.geometry.coordinates) e.elevationTile !== this.outsideExtentTile && (e.elevationTile = null);
  }
  populateElevationTiles(e) {
    for (const t3 of this.geometry.coordinates) !t3.elevationTile && t3.tile?.id && (t3.elevationTile = e[t3.tile.id]);
  }
  remapTiles(e) {
    for (const t3 of this.geometry.coordinates) {
      const i = t3.tile?.id;
      t3.tile = i ? e[i] : null;
    }
  }
  getTilesToFetch() {
    const e = {}, t3 = [];
    for (const i of this.geometry.coordinates) {
      const n2 = i.tile;
      if (!n2) continue;
      const o2 = i.tile?.id;
      i.elevationTile || !o2 || e[o2] || (e[o2] = n2, t3.push(n2));
    }
    return t3;
  }
  forEachTileToFetch(e) {
    for (const t3 of this.geometry.coordinates) t3.tile && !t3.elevationTile && e(t3.tile, () => {
      t3.tile = null;
    });
  }
};
var _3 = class extends g {
  constructor(e, t3, i, n2) {
    super(e, i), this.type = "extent", this.elevationTiles = [], this._candidateTiles = [], this._fetchedCandidates = /* @__PURE__ */ new Set(), this.extent = t3.clone().intersection(e.fullExtent), this.maskExtents = n2;
  }
  selectTilesAtLOD(e, t3) {
    const i = this._maximumLodForRequests(t3), n2 = Math.min(i, e);
    n2 < 0 ? this._candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(n2);
  }
  _maximumLodForRequests(e) {
    const {
      tileInfo: t3,
      tilemapCache: i
    } = this.layer, n2 = D(t3, i);
    if (!e) return n2.length - 1;
    const o2 = this.extent;
    if (null == o2) return -1;
    for (let l = n2.length - 1; l >= 0; l--) {
      const i2 = n2[l], s2 = i2.resolution * t3.size[0], a2 = i2.resolution * t3.size[1];
      if (Math.ceil(o2.width / s2) * Math.ceil(o2.height / a2) <= e) return l;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this._candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    this.elevationTiles.length = 0, this._fetchedCandidates.clear();
  }
  populateElevationTiles(e) {
    for (const t3 of this._candidateTiles) {
      const i = t3.id && e[t3.id];
      i && (this._fetchedCandidates.add(t3), this.elevationTiles.push(i));
    }
  }
  remapTiles(e) {
    this._candidateTiles = z(this._candidateTiles.map((t3) => e[t3.id]));
  }
  getTilesToFetch() {
    return this._candidateTiles;
  }
  forEachTileToFetch(e, t3) {
    const i = this._candidateTiles;
    this._candidateTiles = [], i.forEach((i2) => {
      if (this._fetchedCandidates.has(i2)) return void (t3 && t3(i2));
      let n2 = false;
      e(i2, () => n2 = true), n2 ? t3 && t3(i2) : this._candidateTiles.push(i2);
    }), this._candidateTiles = z(this._candidateTiles, t3);
  }
  _selectCandidateTilesCoveringExtentAt(e) {
    this._candidateTiles.length = 0;
    const t3 = this.extent;
    if (null == t3) return;
    const {
      tileInfo: i,
      tilemapCache: n2
    } = this.layer, o2 = D(i, n2)[e], l = i.tileAt(o2.level, t3.xmin, t3.ymin), s2 = l.extent;
    if (null == s2) return;
    const a2 = o2.resolution * i.size[0], r = o2.resolution * i.size[1], c = Math.ceil((t3.xmax - s2[0]) / a2), u4 = Math.ceil((t3.ymax - s2[1]) / r);
    for (let h2 = 0; h2 < u4; h2++) for (let e2 = 0; e2 < c; e2++) {
      const t4 = new t(null, l.level, l.row - h2, l.col + e2);
      i.updateTileInfo(t4), this._tileIsMasked(t4) || this._candidateTiles.push(t4);
    }
  }
  _tileIsMasked(e) {
    return !!this.maskExtents && this.maskExtents.some((t3) => e.extent && R(t3, e.extent));
  }
};
function E(e, t3, i = 0) {
  const n2 = D(e, t3);
  let o2 = n2.length - 1;
  if (i > 0) {
    const t4 = i / W(e.spatialReference), s2 = n2.findIndex((e2) => e2.resolution < t4);
    0 === s2 ? o2 = 0 : s2 > 0 && (o2 = s2 - 1);
  }
  return o2;
}
var R2 = {
  maximumAutoTileRequests: 20,
  noDataValue: 0,
  returnSampleInfo: false,
  demResolution: "auto",
  minDemResolution: 0
};
function q(e, i, n2) {
  return __async(this, null, function* () {
    let o2;
    const l = e.layer.tileInfo.spatialReference;
    if (i instanceof w ? o2 = yield i.project(l, n2) : (yield N([{
      source: i.spatialReference,
      dest: l
    }], {
      signal: n2
    }), o2 = K(i, l)), !o2) throw new s("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);
    e.geometry = w.fromGeometry(o2);
  });
}
function I(e) {
  if (null == e.layer.fullExtent) return;
  const t3 = new t2(null);
  t3.sample = () => e.options.noDataValue, e.outsideExtentTile = t3;
  const i = e.layer.fullExtent;
  e.geometry.coordinates.forEach((e2) => {
    const n2 = e2.x, o2 = e2.y;
    (n2 < i.xmin || n2 > i.xmax || o2 < i.ymin || o2 > i.ymax) && (e2.elevationTile = t3);
  });
}
function A(e, t3) {
  const {
    tileInfo: i,
    tilemapCache: n2
  } = e.layer, o2 = t3 / W(i.spatialReference), s2 = D(i, n2);
  let a2 = s2[0], r = 0;
  for (let l = 1; l < s2.length; l++) {
    const e2 = s2[l];
    Math.abs(e2.resolution - o2) < Math.abs(a2.resolution - o2) && (a2 = e2, r = l);
  }
  return r;
}
function C(e, t3) {
  const i = A(e, t3);
  e.selectTilesAtLOD(i);
}
function M(e) {
  const {
    tileInfo: t3,
    tilemapCache: i
  } = e.layer, n2 = E(t3, i, e.options.minDemResolution);
  e.selectTilesAtLOD(n2, e.options.maximumAutoTileRequests);
}
function D(e, t3) {
  const i = e.lods;
  if (L(t3)) {
    const {
      effectiveMinLOD: e2,
      effectiveMaxLOD: n2
    } = t3;
    return i.filter((t4) => t4.level >= e2 && t4.level <= n2);
  }
  return i;
}
function F(e, t3) {
  return __async(this, null, function* () {
    const i = e.getTilesToFetch(), o2 = {}, l = e.options.cache, s2 = e.options.noDataValue, a2 = i.map((i2) => __async(this, null, function* () {
      if (null == i2.id) return;
      const n2 = `${e.layer.uid}:${i2.id}:${s2}`, a3 = null != l ? l.get(n2) : null, r = null != a3 ? a3 : yield e.layer.fetchTile(i2.level, i2.row, i2.col, {
        noDataValue: s2,
        signal: t3
      });
      null != l && l.put(n2, r), o2[i2.id] = new t2(i2, r);
    }));
    yield h(Promise.allSettled(a2), t3), e.populateElevationTiles(o2);
  });
}
function S(e) {
  const t3 = e.layer.tileInfo;
  let i = 0;
  const n2 = {}, o2 = (e2) => {
    null != e2.id && (e2.id in n2 ? n2[e2.id]++ : (n2[e2.id] = 1, i++));
  }, l = (e2) => {
    if (null == e2.id) return;
    const t4 = n2[e2.id];
    1 === t4 ? (delete n2[e2.id], i--) : n2[e2.id] = t4 - 1;
  };
  e.forEachTileToFetch(o2, l);
  let s2 = true;
  for (; s2 && (s2 = false, e.forEachTileToFetch((n3) => {
    i <= e.options.maximumAutoTileRequests || (l(n3), t3.upsampleTile(n3) && (s2 = true), o2(n3));
  }, l), s2); ) ;
}
function j(e) {
  e.geometry.coordinates.forEach((t3) => {
    const i = t3.elevationTile;
    let n2 = e.options.noDataValue;
    if (i) {
      const e2 = i.sample(t3.x, t3.y);
      null != e2 ? n2 = e2 : t3.elevationTile = null;
    }
    t3.z = n2;
  });
}
function z(e, t3) {
  const i = {}, n2 = [];
  for (const l of e) {
    const e2 = l.id;
    e2 && !i[e2] ? (i[e2] = l, n2.push(l)) : t3 && t3(l);
  }
  const o2 = n2.sort((e2, t4) => e2.level - t4.level);
  return o2.filter((e2, i2) => {
    for (let n3 = 0; n3 < i2; n3++) {
      const i3 = o2[n3].extent;
      if (i3 && e2.extent && R(i3, e2.extent)) return t3 && t3(e2), false;
    }
    return true;
  });
}
function b(e, t3) {
  return __async(this, null, function* () {
    const n2 = yield e.geometry.project(e.outSpatialReference, t3);
    n(n2);
    const o2 = {
      geometry: n2.export(),
      noDataValue: e.options.noDataValue
    };
    return e.options.returnSampleInfo && (o2.sampleInfo = k(e)), e.geometry.coordinates.forEach((e2) => {
      e2.tile = null, e2.elevationTile = null;
    }), o2;
  });
}
function k(e) {
  const t3 = e.layer.tileInfo, i = W(t3.spatialReference);
  return e.geometry.coordinates.map((n2) => {
    let o2 = -1;
    if (n2.elevationTile && n2.elevationTile !== e.outsideExtentTile) {
      o2 = t3.lodAt(n2.elevationTile.tile.level).resolution * i;
    }
    return {
      demResolution: o2
    };
  });
}
function L(e) {
  return null != e?.tileInfo;
}

export {
  T,
  w,
  E
};
//# sourceMappingURL=chunk-Z3I5AN4P.js.map
