// ../../../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var t = 2;
var e = class _e {
  constructor(t2 = [], e2 = [], s = false) {
    this.lengths = t2 ?? [], this.coords = e2 ?? [], this.hasIndeterminateRingOrder = s;
  }
  static fromJSON(t2) {
    return new _e(t2.lengths, t2.coords, t2.hasIndeterminateRingOrder);
  }
  static fromRect(t2) {
    const [s, r, n, h] = t2, o = n - s, i = h - r;
    return new _e([5], [s, r, o, 0, 0, i, -o, 0, 0, -i]);
  }
  get isPoint() {
    return 0 === this.lengths.length;
  }
  get maxLength() {
    return Math.max(...this.lengths);
  }
  get size() {
    return this.lengths.reduce((t2, e2) => t2 + e2);
  }
  forEachVertex(e2) {
    let s = 0;
    this.lengths.length || e2(this.coords[0], this.coords[1]);
    for (let r = 0; r < this.lengths.length; r++) {
      const n = this.lengths[r];
      for (let r2 = 0; r2 < n; r2++) {
        e2(this.coords[t * (r2 + s)], this.coords[t * (r2 + s) + 1]);
      }
      s += n;
    }
  }
  deltaDecode() {
    const t2 = this.clone(), {
      coords: e2,
      lengths: s
    } = t2;
    let r = 0;
    for (const n of s) {
      for (let t3 = 1; t3 < n; t3++) e2[2 * (r + t3)] += e2[2 * (r + t3) - 2], e2[2 * (r + t3) + 1] += e2[2 * (r + t3) - 1];
      r += n;
    }
    return t2;
  }
  clone(s) {
    if (0 === this.lengths.length) return new _e([], [this.coords[0], this.coords[1]]);
    const r = (0 === this.lengths.length ? 1 : this.lengths.reduce((t2, e2) => t2 + e2)) * t, n = this.coords.slice(0, r);
    return s ? (s.set(n), new _e(this.lengths, s, this.hasIndeterminateRingOrder)) : new _e(Array.from(this.lengths), Array.from(n), this.hasIndeterminateRingOrder);
  }
};

export {
  e
};
//# sourceMappingURL=chunk-YZNT6QWD.js.map
