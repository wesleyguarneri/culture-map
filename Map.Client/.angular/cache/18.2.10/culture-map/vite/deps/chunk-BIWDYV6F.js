import {
  h
} from "./chunk-YVOGHYE3.js";
import {
  D
} from "./chunk-IHVSZYZS.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js
var d = 5e4;
var n = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0
};
function t(i) {
  n.minX = i[0], n.minY = i[1], n.maxX = i[2], n.maxY = i[3];
}
function e(i, s, d2) {
  t(s), i.search(n, d2);
}
var o = class {
  constructor() {
    this._indexInvalid = false, this._boundsToLoad = [], this._boundsById = /* @__PURE__ */ new Map(), this._idByBounds = /* @__PURE__ */ new Map(), this._index = new h(9, has("esri-csp-restrictions") ? (i) => ({
      minX: i[0],
      minY: i[1],
      maxX: i[2],
      maxY: i[3]
    }) : ["[0]", "[1]", "[2]", "[3]"]), this._loadIndex = () => {
      if (this._indexInvalid) {
        const i = new Array(this._idByBounds.size);
        let s = 0;
        this._idByBounds.forEach((d2, n2) => {
          i[s++] = n2;
        }), this._indexInvalid = false, this._index.clear(), this._index.load(i);
      } else this._boundsToLoad.length && (this._index.load(Array.from(new Set(this._boundsToLoad.filter((i) => this._idByBounds.has(i))))), this._boundsToLoad.length = 0);
    };
  }
  get fullBounds() {
    if (!this._boundsById.size) return null;
    const i = D();
    for (const s of this._boundsById.values()) s && (i[0] = Math.min(s[0], i[0]), i[1] = Math.min(s[1], i[1]), i[2] = Math.max(s[2], i[2]), i[3] = Math.max(s[3], i[3]));
    return i;
  }
  get valid() {
    return !this._indexInvalid;
  }
  clear() {
    this._indexInvalid = false, this._boundsToLoad.length = 0, this._boundsById.clear(), this._idByBounds.clear(), this._index.clear();
  }
  delete(i) {
    const s = this._boundsById.get(i);
    this._boundsById.delete(i), s && (this._idByBounds.delete(s), this._indexInvalid || this._index.remove(s));
  }
  forEachInBounds(i, s) {
    this._loadIndex(), e(this._index, i, (i2) => s(this._idByBounds.get(i2)));
  }
  get(i) {
    return this._boundsById.get(i);
  }
  has(i) {
    return this._boundsById.has(i);
  }
  invalidateIndex() {
    this._indexInvalid || (this._indexInvalid = true, this._boundsToLoad.length = 0);
  }
  set(i, s) {
    if (!this._indexInvalid) {
      const s2 = this._boundsById.get(i);
      s2 && (this._index.remove(s2), this._idByBounds.delete(s2));
    }
    this._boundsById.set(i, s), s && (this._idByBounds.set(s, i), this._indexInvalid || (this._boundsToLoad.push(s), this._boundsToLoad.length > d && this._loadIndex()));
  }
};

export {
  o
};
//# sourceMappingURL=chunk-BIWDYV6F.js.map
