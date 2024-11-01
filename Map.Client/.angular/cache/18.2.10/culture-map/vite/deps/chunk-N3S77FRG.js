import {
  s
} from "./chunk-YYETZJJB.js";
import {
  i
} from "./chunk-SYYDVGKY.js";
import {
  H,
  N,
  T,
  V,
  _
} from "./chunk-ZE47C44H.js";
import {
  l as l2
} from "./chunk-5GIS2C3K.js";
import {
  A,
  g,
  p,
  r as r2,
  u
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-5SELS7VU.js";
import {
  l
} from "./chunk-4323ZVPF.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
var b = class _b {
  get bounds() {
    return this._root.bounds;
  }
  get halfSize() {
    return this._root.halfSize;
  }
  get root() {
    return this._root.node;
  }
  get maximumObjectsPerNode() {
    return this._maximumObjectsPerNode;
  }
  get maximumDepth() {
    return this._maximumDepth;
  }
  get objectCount() {
    return this._objectCount;
  }
  constructor(t, e2) {
    this.objectToBoundingSphere = t, this._maximumObjectsPerNode = 10, this._maximumDepth = 20, this._degenerateObjects = /* @__PURE__ */ new Set(), this._root = new g2(), this._objectCount = 0, e2 && (void 0 !== e2.maximumObjectsPerNode && (this._maximumObjectsPerNode = e2.maximumObjectsPerNode), void 0 !== e2.maximumDepth && (this._maximumDepth = e2.maximumDepth));
  }
  destroy() {
    this._degenerateObjects.clear(), g2.clearPool(), q[0] = null, K.prune(), Q.prune();
  }
  add(t, e2 = t.length) {
    this._objectCount += e2, this._grow(t, e2);
    const n2 = g2.acquire();
    for (let o = 0; o < e2; o++) {
      const e3 = t[o];
      this._isDegenerate(e3) ? this._degenerateObjects.add(e3) : (n2.init(this._root), this._add(e3, n2));
    }
    g2.release(n2);
  }
  remove(t, e2 = null) {
    this._objectCount -= t.length;
    const n2 = g2.acquire();
    for (const o of t) {
      const t2 = e2 ?? T(this.objectToBoundingSphere(o), J);
      C(t2[3]) ? (n2.init(this._root), O(o, t2, n2)) : this._degenerateObjects.delete(o);
    }
    g2.release(n2), this._shrink();
  }
  update(t, e2) {
    if (!C(e2[3]) && this._isDegenerate(t)) return;
    const n2 = y(t);
    this.remove(n2, e2), this.add(n2);
  }
  forEachAlongRay(t, e2, n2) {
    const o = l2(t, e2);
    S(this._root, (t2) => {
      if (!T2(o, t2)) return false;
      const e3 = t2.node;
      return e3.terminals.forAll((t3) => {
        this._intersectsObject(o, t3) && n2(t3);
      }), null !== e3.residents && e3.residents.forAll((t3) => {
        this._intersectsObject(o, t3) && n2(t3);
      }), true;
    });
  }
  forEachAlongRayWithVerticalOffset(t, e2, n2, o) {
    const i2 = l2(t, e2);
    S(this._root, (t2) => {
      if (!z(i2, t2, o)) return false;
      const e3 = t2.node;
      return e3.terminals.forAll((t3) => {
        this._intersectsObjectWithOffset(i2, t3, o) && n2(t3);
      }), null !== e3.residents && e3.residents.forAll((t3) => {
        this._intersectsObjectWithOffset(i2, t3, o) && n2(t3);
      }), true;
    });
  }
  forEach(t) {
    S(this._root, (e2) => {
      const n2 = e2.node;
      return n2.terminals.forAll(t), null !== n2.residents && n2.residents.forAll(t), true;
    }), this._degenerateObjects.forEach(t);
  }
  forEachDegenerateObject(t) {
    this._degenerateObjects.forEach(t);
  }
  findClosest(t, e2, n2, o = () => true, s2 = 1 / 0) {
    let h = 1 / 0, a = 1 / 0, d = null;
    const u2 = F(t, e2), c = (i2) => {
      if (--s2, !o(i2)) return;
      const r3 = this.objectToBoundingSphere(i2);
      if (!s(n2, r3)) return;
      const u3 = v(t, e2, V(r3)), c2 = u3 - r3[3], f = u3 + r3[3];
      c2 < h && (h = c2, a = f, d = i2);
    };
    return j(this._root, (o2) => {
      if (s2 <= 0 || !s(n2, o2.bounds)) return false;
      g(I, u2, o2.halfSize), u(I, I, V(o2.bounds));
      if (v(t, e2, I) > a) return false;
      const h2 = o2.node;
      return h2.terminals.forAll((t2) => c(t2)), null !== h2.residents && h2.residents.forAll((t2) => c(t2)), true;
    }, t, e2), d;
  }
  forEachInDepthRange(t, e2, n2, o, s2, h, a) {
    let d = -1 / 0, u2 = 1 / 0;
    const c = {
      setRange: (t2) => {
        n2 === _b.DepthOrder.FRONT_TO_BACK ? (d = Math.max(d, t2.near), u2 = Math.min(u2, t2.far)) : (d = Math.max(d, -t2.far), u2 = Math.min(u2, -t2.near));
      }
    };
    c.setRange(o);
    const f = v(e2, n2, t), _2 = F(e2, n2), p2 = F(e2, -n2), g3 = (t2) => {
      if (!a(t2)) return;
      const o2 = this.objectToBoundingSphere(t2), i2 = V(o2), r3 = v(e2, n2, i2) - f, _3 = r3 - o2[3], p3 = r3 + o2[3];
      _3 > u2 || p3 < d || !s(h, o2) || s2(t2, c);
    };
    j(this._root, (t2) => {
      if (!s(h, t2.bounds)) return false;
      g(I, _2, t2.halfSize), u(I, I, V(t2.bounds));
      if (v(e2, n2, I) - f > u2) return false;
      g(I, p2, t2.halfSize), u(I, I, V(t2.bounds));
      if (v(e2, n2, I) - f < d) return false;
      const o2 = t2.node;
      return o2.terminals.forAll((t3) => g3(t3)), null !== o2.residents && o2.residents.forAll((t3) => g3(t3)), true;
    }, e2, n2);
  }
  forEachNode(t) {
    S(this._root, (e2) => t(e2.node, e2.bounds, e2.halfSize, e2.depth));
  }
  forEachNeighbor(t, e2) {
    const n2 = N(e2), o = V(e2), i2 = (e3) => {
      const i3 = this.objectToBoundingSphere(e3), r4 = N(i3), h2 = n2 + r4;
      return !(p(V(i3), o) - h2 * h2 <= 0) || t(e3);
    };
    let r3 = true;
    const h = (t2) => {
      r3 && (r3 = i2(t2));
    };
    S(this._root, (t2) => {
      const e3 = N(t2.bounds), i3 = n2 + e3;
      if (p(V(t2.bounds), o) - i3 * i3 > 0) return false;
      const a = t2.node;
      return a.terminals.forAll(h), r3 && null !== a.residents && a.residents.forAll(h), r3;
    }), r3 && this.forEachDegenerateObject(h);
  }
  _intersectsObject(t, e2) {
    const n2 = this.objectToBoundingSphere(e2);
    return !(n2[3] > 0) || H(n2, t);
  }
  _intersectsObjectWithOffset(t, e2, n2) {
    const o = this.objectToBoundingSphere(e2);
    return !(o[3] > 0) || H(n2.applyToBoundingSphere(o), t);
  }
  _add(t, e2) {
    e2.advanceTo(this.objectToBoundingSphere(t)) ? e2.node.terminals.push(t) : (e2.node.residents.push(t), e2.node.residents.length > this._maximumObjectsPerNode && e2.depth < this._maximumDepth && this._split(e2));
  }
  _split(t) {
    const e2 = t.node.residents;
    t.node.residents = null;
    for (let n2 = 0; n2 < e2.length; n2++) {
      const o = g2.acquire().init(t);
      this._add(e2.at(n2), o), g2.release(o);
    }
  }
  _grow(t, e2) {
    if (0 !== e2 && (D(t, e2, (t2) => this.objectToBoundingSphere(t2), W), C(W[3]) && !this._fitsInsideTree(W))) if (N2(this._root.node)) T(W, this._root.bounds), this._root.halfSize = 1.25 * this._root.bounds[3], this._root.updateBoundsRadiusFromHalfSize();
    else {
      const t2 = this._rootBoundsForRootAsSubNode(W);
      this._placingRootViolatesMaxDepth(t2) ? this._rebuildTree(W, t2) : this._growRootAsSubNode(t2), g2.release(t2);
    }
  }
  _rebuildTree(t, e2) {
    r2(V(V2), V(e2.bounds)), V2[3] = e2.halfSize, D([t, V2], 2, (t2) => t2, G);
    const o = g2.acquire().init(this._root);
    this._root.initFrom(null, G, G[3]), this._root.increaseHalfSize(1.25), S(o, (t2) => (this.add(t2.node.terminals.data, t2.node.terminals.length), null !== t2.node.residents && this.add(t2.node.residents.data, t2.node.residents.length), true)), g2.release(o);
  }
  _placingRootViolatesMaxDepth(t) {
    const e2 = Math.log(t.halfSize / this._root.halfSize) * Math.LOG2E;
    let n2 = 0;
    return S(this._root, (t2) => (n2 = Math.max(n2, t2.depth), n2 + e2 <= this._maximumDepth)), n2 + e2 > this._maximumDepth;
  }
  _rootBoundsForRootAsSubNode(t) {
    const e2 = t[3], n2 = t;
    let o = -1 / 0;
    const i2 = this._root.bounds, r3 = this._root.halfSize;
    for (let h = 0; h < 3; h++) {
      const t2 = i2[h] - r3 - (n2[h] - e2), s3 = n2[h] + e2 - (i2[h] + r3), a = Math.max(0, Math.ceil(t2 / (2 * r3))), l3 = Math.max(0, Math.ceil(s3 / (2 * r3))) + 1, d = 2 ** Math.ceil(Math.log(a + l3) * Math.LOG2E);
      o = Math.max(o, d), U[h].min = a, U[h].max = l3;
    }
    for (let h = 0; h < 3; h++) {
      let t2 = U[h].min, e3 = U[h].max;
      const n3 = (o - (t2 + e3)) / 2;
      t2 += Math.ceil(n3), e3 += Math.floor(n3);
      const s3 = i2[h] - r3 - t2 * r3 * 2;
      k[h] = s3 + (e3 + t2) * r3;
    }
    const s2 = o * r3;
    return k[3] = s2 * w, g2.acquire().initFrom(null, k, s2, 0);
  }
  _growRootAsSubNode(t) {
    const e2 = this._root.node;
    r2(V(W), V(this._root.bounds)), W[3] = this._root.halfSize, this._root.init(t), t.advanceTo(W, null, true), t.node.children = e2.children, t.node.residents = e2.residents, t.node.terminals = e2.terminals;
  }
  _shrink() {
    for (; ; ) {
      const t = this._findShrinkIndex();
      if (-1 === t) break;
      this._root.advance(t), this._root.depth = 0;
    }
  }
  _findShrinkIndex() {
    if (0 !== this._root.node.terminals.length || this._root.isLeaf()) return -1;
    let t = null;
    const e2 = this._root.node.children;
    let n2 = 0, o = 0;
    for (; o < e2.length && null == t; ) n2 = o++, t = e2[n2];
    for (; o < e2.length; ) if (e2[o++]) return -1;
    return n2;
  }
  _isDegenerate(t) {
    return !C(this.objectToBoundingSphere(t)[3]);
  }
  _fitsInsideTree(t) {
    const e2 = this._root.bounds, n2 = this._root.halfSize;
    return t[3] <= n2 && t[0] >= e2[0] - n2 && t[0] <= e2[0] + n2 && t[1] >= e2[1] - n2 && t[1] <= e2[1] + n2 && t[2] >= e2[2] - n2 && t[2] <= e2[2] + n2;
  }
  toJSON() {
    const {
      maximumDepth: t,
      maximumObjectsPerNode: e2,
      _objectCount: n2
    } = this, o = this._nodeToJSON(this._root.node);
    return {
      maximumDepth: t,
      maximumObjectsPerNode: e2,
      objectCount: n2,
      root: {
        bounds: this._root.bounds,
        halfSize: this._root.halfSize,
        depth: this._root.depth,
        node: o
      }
    };
  }
  _nodeToJSON(t) {
    const e2 = t.children.map((t2) => t2 ? this._nodeToJSON(t2) : null), n2 = t.residents?.map((t2) => this.objectToBoundingSphere(t2)), o = t.terminals?.map((t2) => this.objectToBoundingSphere(t2));
    return {
      children: e2,
      residents: n2,
      terminals: o
    };
  }
  static fromJSON(t) {
    const e2 = new _b((t2) => t2, {
      maximumDepth: t.maximumDepth,
      maximumObjectsPerNode: t.maximumObjectsPerNode
    });
    return e2._objectCount = t.objectCount, e2._root.initFrom(t.root.node, t.root.bounds, t.root.halfSize, t.root.depth), e2;
  }
};
var g2 = class _g {
  constructor() {
    this.bounds = _(), this.halfSize = 0, this.initFrom(null, null, 0, 0);
  }
  init(t) {
    return this.initFrom(t.node, t.bounds, t.halfSize, t.depth);
  }
  initFrom(t, e2, n2, o = this.depth) {
    return this.node = null != t ? t : _g.createEmptyNode(), e2 && T(e2, this.bounds), this.halfSize = n2, this.depth = o, this;
  }
  increaseHalfSize(t) {
    this.halfSize *= t, this.updateBoundsRadiusFromHalfSize();
  }
  updateBoundsRadiusFromHalfSize() {
    this.bounds[3] = this.halfSize * w;
  }
  advance(t) {
    let e2 = this.node.children[t];
    e2 || (e2 = _g.createEmptyNode(), this.node.children[t] = e2), this.node = e2, this.halfSize /= 2, this.depth++;
    const n2 = E[t];
    return this.bounds[0] += n2[0] * this.halfSize, this.bounds[1] += n2[1] * this.halfSize, this.bounds[2] += n2[2] * this.halfSize, this.updateBoundsRadiusFromHalfSize(), this;
  }
  advanceTo(t, e2, n2 = false) {
    for (; ; ) {
      if (this.isTerminalFor(t)) return e2 && e2(this, -1), true;
      if (this.isLeaf()) {
        if (!n2) return e2 && e2(this, -1), false;
        this.node.residents = null;
      }
      const o = this._childIndex(t);
      e2 && e2(this, o), this.advance(o);
    }
  }
  isLeaf() {
    return null != this.node.residents;
  }
  isTerminalFor(t) {
    return t[3] > this.halfSize / 2;
  }
  _childIndex(t) {
    const e2 = this.bounds;
    return (e2[0] < t[0] ? 1 : 0) + (e2[1] < t[1] ? 2 : 0) + (e2[2] < t[2] ? 4 : 0);
  }
  static createEmptyNode() {
    return {
      children: [null, null, null, null, null, null, null, null],
      terminals: new l({
        shrink: true
      }),
      residents: new l({
        shrink: true
      })
    };
  }
  static acquire() {
    return _g._pool.acquire();
  }
  static release(t) {
    _g._pool.release(t);
  }
  static clearPool() {
    _g._pool.prune();
  }
};
function S(t, e2) {
  let n2 = g2.acquire().init(t);
  const o = [n2];
  for (; 0 !== o.length; ) {
    if (n2 = o.pop(), e2(n2) && !n2.isLeaf()) for (let t2 = 0; t2 < n2.node.children.length; t2++) {
      n2.node.children[t2] && o.push(g2.acquire().init(n2).advance(t2));
    }
    g2.release(n2);
  }
}
function j(t, e2, n2, o = b.DepthOrder.FRONT_TO_BACK) {
  let i2 = g2.acquire().init(t);
  const r3 = [i2];
  for (R(n2, o, X); 0 !== r3.length; ) {
    if (i2 = r3.pop(), e2(i2) && !i2.isLeaf()) for (let t2 = 7; t2 >= 0; --t2) {
      const e3 = X[t2];
      i2.node.children[e3] && r3.push(g2.acquire().init(i2).advance(e3));
    }
    g2.release(i2);
  }
}
function O(t, e2, n2) {
  K.clear();
  const o = n2.advanceTo(e2, (t2, e3) => {
    K.push(t2.node), K.push(e3);
  }) ? n2.node.terminals : n2.node.residents;
  if (o.removeUnordered(t), 0 === o.length) for (let i2 = K.length - 2; i2 >= 0; i2 -= 2) {
    if (!x(K.data[i2], K.data[i2 + 1])) break;
  }
}
function x(t, n2) {
  return n2 >= 0 && (t.children[n2] = null), !!N2(t) && (null === t.residents && (t.residents = new l({
    shrink: true
  })), true);
}
function T2(t, e2) {
  return B(V(e2.bounds), 2 * -e2.halfSize, L), B(V(e2.bounds), 2 * e2.halfSize, H2), i(t.origin, t.direction, L, H2);
}
function z(t, e2, n2) {
  return B(V(e2.bounds), 2 * -e2.halfSize, L), B(V(e2.bounds), 2 * e2.halfSize, H2), n2.applyToMinMax(L, H2), i(t.origin, t.direction, L, H2);
}
function N2(t) {
  if (0 !== t.terminals.length) return false;
  if (null !== t.residents) return 0 === t.residents.length;
  for (let e2 = 0; e2 < t.children.length; e2++) if (t.children[e2]) return false;
  return true;
}
function M(t, e2) {
  t[0] = Math.min(t[0], e2[0] - e2[3]), t[1] = Math.min(t[1], e2[1] - e2[3]), t[2] = Math.min(t[2], e2[2] - e2[3]);
}
function A2(t, e2) {
  t[0] = Math.max(t[0], e2[0] + e2[3]), t[1] = Math.max(t[1], e2[1] + e2[3]), t[2] = Math.max(t[2], e2[2] + e2[3]);
}
function B(t, e2, n2) {
  n2[0] = t[0] + e2, n2[1] = t[1] + e2, n2[2] = t[2] + e2;
}
function D(t, e2, n2, i2) {
  if (1 === e2) {
    const e3 = n2(t[0]);
    T(e3, i2);
  } else {
    L[0] = 1 / 0, L[1] = 1 / 0, L[2] = 1 / 0, H2[0] = -1 / 0, H2[1] = -1 / 0, H2[2] = -1 / 0;
    for (let o = 0; o < e2; o++) {
      const e3 = n2(t[o]);
      C(e3[3]) && (M(L, e3), A2(H2, e3));
    }
    A(V(i2), L, H2, 0.5), i2[3] = Math.max(H2[0] - L[0], H2[1] - L[1], H2[2] - L[2]) / 2;
  }
}
function R(t, e2, n2) {
  if (!Q.length) for (let o = 0; o < 8; ++o) Q.push({
    index: 0,
    distance: 0
  });
  for (let o = 0; o < 8; ++o) {
    const n3 = E[o];
    Q.data[o].index = o, Q.data[o].distance = v(t, e2, n3);
  }
  Q.sort((t2, e3) => t2.distance - e3.distance);
  for (let o = 0; o < 8; ++o) n2[o] = Q.data[o].index;
}
function F(t, e2) {
  let n2, o = 1 / 0;
  for (let i2 = 0; i2 < 8; ++i2) {
    const r3 = v(t, e2, P[i2]);
    r3 < o && (o = r3, n2 = P[i2]);
  }
  return n2;
}
function v(t, e2, n2) {
  return e2 * (t[0] * n2[0] + t[1] * n2[1] + t[2] * n2[2]);
}
function C(t) {
  return !isNaN(t) && t !== -1 / 0 && t !== 1 / 0 && t > 0;
}
g2._pool = new e(g2), function(t) {
  var e2;
  (e2 = t.DepthOrder || (t.DepthOrder = {}))[e2.FRONT_TO_BACK = 1] = "FRONT_TO_BACK", e2[e2.BACK_TO_FRONT = -1] = "BACK_TO_FRONT";
}(b || (b = {}));
var E = [r(-1, -1, -1), r(1, -1, -1), r(-1, 1, -1), r(1, 1, -1), r(-1, -1, 1), r(1, -1, 1), r(-1, 1, 1), r(1, 1, 1)];
var P = [r(-1, -1, -1), r(-1, -1, 1), r(-1, 1, -1), r(-1, 1, 1), r(1, -1, -1), r(1, -1, 1), r(1, 1, -1), r(1, 1, 1)];
var w = Math.sqrt(3);
var q = [null];
function y(t) {
  return q[0] = t, q;
}
var k = _();
var I = n();
var L = n();
var H2 = n();
var K = new l();
var J = _();
var W = _();
var V2 = _();
var G = _();
var U = [{
  min: 0,
  max: 0
}, {
  min: 0,
  max: 0
}, {
  min: 0,
  max: 0
}];
var Q = new l();
var X = [0, 0, 0, 0, 0, 0, 0, 0];
var Y = b;

export {
  Y
};
//# sourceMappingURL=chunk-N3S77FRG.js.map
