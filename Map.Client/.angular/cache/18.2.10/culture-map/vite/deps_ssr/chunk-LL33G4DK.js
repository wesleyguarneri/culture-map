import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f
} from "./chunk-CILHMGNK.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  v,
  y
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js
var h = class {
  constructor(t = 9, i) {
    this._compareMinX = m, this._compareMinY = u, this._toBBox = (t2) => t2, this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), i && ("function" == typeof i ? this._toBBox = i : this._initFormat(i)), this.clear();
  }
  destroy() {
    this.clear(), X.prune(), Y.prune(), B.prune(), w.prune();
  }
  all(t) {
    a(this._data, t);
  }
  search(t, i) {
    let n = this._data;
    const e = this._toBBox;
    if (g(t, n)) for (X.clear(); n; ) {
      for (let h2 = 0, s2 = n.children.length; h2 < s2; h2++) {
        const s3 = n.children[h2], r2 = n.leaf ? e(s3) : s3;
        g(t, r2) && (n.leaf ? i(s3) : p(t, r2) ? a(s3, i) : X.push(s3));
      }
      n = X.pop();
    }
  }
  collides(t) {
    let i = this._data;
    const n = this._toBBox;
    if (!g(t, i)) return false;
    for (X.clear(); i; ) {
      for (let e = 0, h2 = i.children.length; e < h2; e++) {
        const h3 = i.children[e], s2 = i.leaf ? n(h3) : h3;
        if (g(t, s2)) {
          if (i.leaf || p(t, s2)) return true;
          X.push(h3);
        }
      }
      i = X.pop();
    }
    return false;
  }
  load(t) {
    if (!t.length) return this;
    if (t.length < this._minEntries) {
      for (let i2 = 0, n = t.length; i2 < n; i2++) this.insert(t[i2]);
      return this;
    }
    let i = this._build(t.slice(0, t.length), 0, t.length - 1, 0);
    if (this._data.children.length) {
      if (this._data.height === i.height) this._splitRoot(this._data, i);
      else {
        if (this._data.height < i.height) {
          const t2 = this._data;
          this._data = i, i = t2;
        }
        this._insert(i, this._data.height - i.height - 1, true);
      }
    } else this._data = i;
    return this;
  }
  insert(t) {
    return t && this._insert(t, this._data.height - 1), this;
  }
  clear() {
    return this._data = new j([]), this;
  }
  remove(i) {
    if (!i) return this;
    let n, e = this._data, h2 = null, s2 = 0, a2 = false;
    const r2 = this._toBBox(i);
    for (B.clear(), w.clear(); e || B.length > 0; ) {
      if (e || (e = B.pop(), h2 = B.data[B.length - 1], s2 = w.pop() ?? 0, a2 = true), e.leaf && (n = y(e.children, i, e.children.length, e.indexHint), -1 !== n)) return e.children.splice(n, 1), B.push(e), this._condense(B), this;
      a2 || e.leaf || !p(e, r2) ? h2 ? (s2++, e = h2.children[s2], a2 = false) : e = null : (B.push(e), w.push(s2), s2 = 0, h2 = e, e = e.children[0]);
    }
    return this;
  }
  toJSON() {
    return this._data;
  }
  fromJSON(t) {
    return this._data = t, this;
  }
  _build(t, i, n, e) {
    const h2 = n - i + 1;
    let s2 = this._maxEntries;
    if (h2 <= s2) {
      const e2 = new j(t.slice(i, n + 1));
      return o(e2, this._toBBox), e2;
    }
    e || (e = Math.ceil(Math.log(h2) / Math.log(s2)), s2 = Math.ceil(h2 / s2 ** (e - 1)));
    const a2 = new S([]);
    a2.height = e;
    const r2 = Math.ceil(h2 / s2), l3 = r2 * Math.ceil(Math.sqrt(s2));
    M(t, i, n, l3, this._compareMinX);
    for (let o2 = i; o2 <= n; o2 += l3) {
      const i2 = Math.min(o2 + l3 - 1, n);
      M(t, o2, i2, r2, this._compareMinY);
      for (let n2 = o2; n2 <= i2; n2 += r2) {
        const h3 = Math.min(n2 + r2 - 1, i2);
        a2.children.push(this._build(t, n2, h3, e - 1));
      }
    }
    return o(a2, this._toBBox), a2;
  }
  _insert(t, i, n) {
    const e = this._toBBox, h2 = n ? t : e(t);
    B.clear();
    const a2 = s(h2, this._data, i, B);
    for (a2.children.push(t), c(a2, h2); i >= 0 && B.data[i].children.length > this._maxEntries; ) this._split(B, i), i--;
    r(h2, B, i);
  }
  _split(t, i) {
    const n = t.data[i], e = n.children.length, h2 = this._minEntries;
    this._chooseSplitAxis(n, h2, e);
    const s2 = this._chooseSplitIndex(n, h2, e);
    if (!s2) return;
    const a2 = n.children.splice(s2, n.children.length - s2), r2 = n.leaf ? new j(a2) : new S(a2);
    r2.height = n.height, o(n, this._toBBox), o(r2, this._toBBox), i ? t.data[i - 1].children.push(r2) : this._splitRoot(n, r2);
  }
  _splitRoot(t, i) {
    this._data = new S([t, i]), this._data.height = t.height + 1, o(this._data, this._toBBox);
  }
  _chooseSplitIndex(t, i, n) {
    let e, h2, s2;
    e = h2 = 1 / 0;
    for (let a2 = i; a2 <= n - i; a2++) {
      const i2 = l2(t, 0, a2, this._toBBox), r2 = l2(t, a2, n, this._toBBox), o2 = _(i2, r2), c2 = d(i2) + d(r2);
      o2 < e ? (e = o2, s2 = a2, h2 = c2 < h2 ? c2 : h2) : o2 === e && c2 < h2 && (h2 = c2, s2 = a2);
    }
    return s2;
  }
  _chooseSplitAxis(t, i, n) {
    const e = t.leaf ? this._compareMinX : m, h2 = t.leaf ? this._compareMinY : u;
    this._allDistMargin(t, i, n, e) < this._allDistMargin(t, i, n, h2) && t.children.sort(e);
  }
  _allDistMargin(t, i, n, e) {
    t.children.sort(e);
    const h2 = this._toBBox, s2 = l2(t, 0, i, h2), a2 = l2(t, n - i, n, h2);
    let r2 = f2(s2) + f2(a2);
    for (let o2 = i; o2 < n - i; o2++) {
      const i2 = t.children[o2];
      c(s2, t.leaf ? h2(i2) : i2), r2 += f2(s2);
    }
    for (let o2 = n - i - 1; o2 >= i; o2--) {
      const i2 = t.children[o2];
      c(a2, t.leaf ? h2(i2) : i2), r2 += f2(a2);
    }
    return r2;
  }
  _condense(i) {
    for (let n = i.length - 1; n >= 0; n--) {
      const e = i.data[n];
      if (0 === e.children.length) {
        if (n > 0) {
          const h2 = i.data[n - 1], s2 = h2.children;
          s2.splice(y(s2, e, s2.length, h2.indexHint), 1);
        } else this.clear();
      } else o(e, this._toBBox);
    }
  }
  _initFormat(t) {
    const i = ["return a", " - b", ";"];
    this._compareMinX = new Function("a", "b", i.join(t[0])), this._compareMinY = new Function("a", "b", i.join(t[1])), this._toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
  }
};
function s(t, i, n, e) {
  for (; e.push(i), true !== i.leaf && e.length - 1 !== n; ) {
    let n2, e2 = 1 / 0, h2 = 1 / 0;
    for (let s2 = 0, a2 = i.children.length; s2 < a2; s2++) {
      const a3 = i.children[s2], r2 = d(a3), o2 = x(t, a3) - r2;
      o2 < h2 ? (h2 = o2, e2 = r2 < e2 ? r2 : e2, n2 = a3) : o2 === h2 && r2 < e2 && (e2 = r2, n2 = a3);
    }
    i = n2 || i.children[0];
  }
  return i;
}
function a(t, i) {
  let n = t;
  for (Y.clear(); n; ) {
    if (true === n.leaf) for (const t2 of n.children) i(t2);
    else Y.pushArray(n.children);
    n = Y.pop() ?? null;
  }
}
function r(t, i, n) {
  for (let e = n; e >= 0; e--) c(i.data[e], t);
}
function o(t, i) {
  l2(t, 0, t.children.length, i, t);
}
function l2(t, i, n, e, h2) {
  h2 || (h2 = new j([])), h2.minX = 1 / 0, h2.minY = 1 / 0, h2.maxX = -1 / 0, h2.maxY = -1 / 0;
  for (let s2, a2 = i; a2 < n; a2++) s2 = t.children[a2], c(h2, t.leaf ? e(s2) : s2);
  return h2;
}
function c(t, i) {
  t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY);
}
function m(t, i) {
  return t.minX - i.minX;
}
function u(t, i) {
  return t.minY - i.minY;
}
function d(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function f2(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function x(t, i) {
  return (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) * (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY));
}
function _(t, i) {
  const n = Math.max(t.minX, i.minX), e = Math.max(t.minY, i.minY), h2 = Math.min(t.maxX, i.maxX), s2 = Math.min(t.maxY, i.maxY);
  return Math.max(0, h2 - n) * Math.max(0, s2 - e);
}
function p(t, i) {
  return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
}
function g(t, i) {
  return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
}
function M(t, i, n, h2, s2) {
  const a2 = [i, n];
  for (; a2.length; ) {
    const i2 = a2.pop(), n2 = a2.pop();
    if (i2 - n2 <= h2) continue;
    const r2 = n2 + Math.ceil((i2 - n2) / h2 / 2) * h2;
    f(t, r2, n2, i2, s2), a2.push(n2, r2, r2, i2);
  }
}
var X = new l();
var Y = new l();
var B = new l();
var w = new l({
  deallocator: void 0
});
var E = class {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
};
var b = class extends E {
  constructor() {
    super(...arguments), this.height = 1, this.indexHint = new v();
  }
};
var j = class extends b {
  constructor(t) {
    super(), this.children = t, this.leaf = true;
  }
};
var S = class extends b {
  constructor(t) {
    super(), this.children = t, this.leaf = false;
  }
};

export {
  h
};
//# sourceMappingURL=chunk-LL33G4DK.js.map
