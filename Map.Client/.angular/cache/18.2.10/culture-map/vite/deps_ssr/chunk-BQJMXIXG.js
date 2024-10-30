import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  i,
  o
} from "./chunk-ENMTKDU2.js";
import {
  r as r3
} from "./chunk-YQDGVKY6.js";
import {
  e as e2,
  r as r2
} from "./chunk-7PJ3GUSK.js";
import {
  e,
  t
} from "./chunk-DDV74AXO.js";
import {
  l,
  n,
  r
} from "./chunk-37RAJ54N.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/RenderableTile.js
var t2 = class extends r3 {
  _createTransforms() {
    return {
      displayViewScreenMat3: e2(),
      tileMat3: e2()
    };
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/jobs.js
function i2(e4, t5, n3, o3, i5, l3) {
  const {
    iconRotationAlignment: a,
    textRotationAlignment: c2,
    iconTranslate: h,
    iconTranslateAnchor: u,
    textTranslate: d,
    textTranslateAnchor: y
  } = o3;
  let x = 0;
  for (const g of e4.colliders) {
    const [e5, o4] = 0 === g.partIndex ? h : d, m = 0 === g.partIndex ? u : y, f = g.minLod <= l3 && l3 <= g.maxLod;
    x += f ? 0 : 1, g.enabled = f, g.xScreen = g.xTile * i5[0] + g.yTile * i5[3] + i5[6], g.yScreen = g.xTile * i5[1] + g.yTile * i5[4] + i5[7], m === r.MAP ? (g.xScreen += n3 * e5 - t5 * o4, g.yScreen += t5 * e5 + n3 * o4) : (g.xScreen += e5, g.yScreen += o4), l.VIEWPORT === (0 === g.partIndex ? a : c2) ? (g.dxScreen = g.dxPixels, g.dyScreen = g.dyPixels) : (g.dxScreen = n3 * (g.dxPixels + g.width / 2) - t5 * (g.dyPixels + g.height / 2) - g.width / 2, g.dyScreen = t5 * (g.dxPixels + g.width / 2) + n3 * (g.dyPixels + g.height / 2) - g.height / 2);
  }
  e4.colliders.length > 0 && x === e4.colliders.length && (e4.unique.show = false);
}
var l2 = class {
  constructor(o3, r5, s, i5, l3, a) {
    this._symbols = o3, this._styleRepository = i5, this._zoom = l3, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = /* @__PURE__ */ new Map(), this._allNeededMatrices = /* @__PURE__ */ new Map(), this._gridIndex = new i(r5, s, t), this._si = Math.sin(Math.PI * a / 180), this._co = Math.cos(Math.PI * a / 180);
    for (const t5 of o3) for (const n3 of t5.symbols) this._allNeededMatrices.has(n3.tile) || this._allNeededMatrices.set(n3.tile, r2(n3.tile.transforms.tileUnitsToPixels));
  }
  work(e4) {
    const t5 = this._gridIndex;
    function n3(e5) {
      const n4 = e5.xScreen + e5.dxScreen, o4 = e5.yScreen + e5.dyScreen, r5 = n4 + e5.width, s = o4 + e5.height, [i5, l3, a, c2] = t5.getCellSpan(n4, o4, r5, s);
      for (let h = l3; h <= c2; h++) for (let e6 = i5; e6 <= a; e6++) {
        const i6 = t5.cells[h][e6];
        for (const e7 of i6) {
          const t6 = e7.xScreen + e7.dxScreen, i7 = e7.yScreen + e7.dyScreen, l4 = t6 + e7.width, a2 = i7 + e7.height;
          if (!(r5 < t6 || n4 > l4 || s < i7 || o4 > a2)) return true;
        }
      }
      return false;
    }
    const o3 = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const t6 = this._symbols[this._currentLayerCursor], r5 = this._getProperties(t6.styleLayerUID);
      for (; this._currentSymbolCursor < t6.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - o3 > e4) return false;
        const s = t6.symbols[this._currentSymbolCursor];
        if (!s.unique.show) continue;
        i2(s, this._si, this._co, r5, this._allNeededMatrices.get(s.tile), this._zoom);
        const l3 = s.unique;
        if (!l3.show) continue;
        const {
          iconAllowOverlap: a,
          iconIgnorePlacement: c2,
          textAllowOverlap: h,
          textIgnorePlacement: u
        } = r5;
        for (const e5 of s.colliders) {
          if (!e5.enabled) continue;
          const t7 = l3.parts[e5.partIndex];
          if (!t7.show) continue;
          !(e5.partIndex ? h : a) && n3(e5) && (e5.hard ? l3.show = false : t7.show = false);
        }
        if (l3.show) for (const e5 of s.colliders) {
          if (!e5.enabled) continue;
          if (e5.partIndex ? u : c2) continue;
          if (!l3.parts[e5.partIndex].show) continue;
          const t7 = e5.xScreen + e5.dxScreen, n4 = e5.yScreen + e5.dyScreen, o4 = t7 + e5.width, r6 = n4 + e5.height, [s2, i5, a2, h2] = this._gridIndex.getCellSpan(t7, n4, o4, r6);
          for (let l4 = i5; l4 <= h2; l4++) for (let t8 = s2; t8 <= a2; t8++) {
            this._gridIndex.cells[l4][t8].push(e5);
          }
        }
      }
    }
    return true;
  }
  _getProperties(e4) {
    const t5 = this._styleProps.get(e4);
    if (t5) return t5;
    const n3 = this._zoom, s = this._styleRepository.getStyleLayerByUID(e4), i5 = s.getLayoutValue("symbol-placement", n3) !== n.POINT;
    let l3 = s.getLayoutValue("icon-rotation-alignment", n3);
    l3 === l.AUTO && (l3 = i5 ? l.MAP : l.VIEWPORT);
    let a = s.getLayoutValue("text-rotation-alignment", n3);
    a === l.AUTO && (a = i5 ? l.MAP : l.VIEWPORT);
    const c2 = s.getPaintValue("icon-translate", n3), h = s.getPaintValue("icon-translate-anchor", n3), u = s.getPaintValue("text-translate", n3), d = s.getPaintValue("text-translate-anchor", n3), y = {
      iconAllowOverlap: s.getLayoutValue("icon-allow-overlap", n3),
      iconIgnorePlacement: s.getLayoutValue("icon-ignore-placement", n3),
      textAllowOverlap: s.getLayoutValue("text-allow-overlap", n3),
      textIgnorePlacement: s.getLayoutValue("text-ignore-placement", n3),
      iconRotationAlignment: l3,
      textRotationAlignment: a,
      iconTranslateAnchor: h,
      iconTranslate: c2,
      textTranslateAnchor: d,
      textTranslate: u
    };
    return this._styleProps.set(e4, y), y;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolDeclutterer.js
function t3(o3, t5) {
  if (o3.priority - t5.priority) return o3.priority - t5.priority;
  const e4 = o3.tile.key, i5 = t5.tile.key;
  return e4.world - i5.world ? e4.world - i5.world : e4.level - i5.level ? e4.level - i5.level : e4.row - i5.row ? e4.row - i5.row : e4.col - i5.col ? e4.col - i5.col : o3.xTile - t5.xTile ? o3.xTile - t5.xTile : o3.yTile - t5.yTile;
}
var e3 = class {
  get running() {
    return this._running;
  }
  constructor(o3, t5, e4, i5, s, n3) {
    this._visibleTiles = o3, this._symbolRepository = t5, this._createCollisionJob = e4, this._assignTileSymbolsOpacity = i5, this._symbolLayerSorter = s, this._isLayerVisible = n3, this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  setScreenSize(o3, t5) {
    this._screenWidth === o3 && this._screenHeight === t5 || this.restart(), this._screenWidth = o3, this._screenHeight = t5;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = false, this._collisionJob = null, this._collisionJobCompleted = false, this._opacityJob = null, this._opacityJobCompleted = false, this._running = true;
  }
  continue(o3) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const t5 = performance.now();
      if (!this._selectionJob.work(o3)) return false;
      if (this._selectionJobCompleted = true, 0 === (o3 = Math.max(0, o3 - (performance.now() - t5)))) return false;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const t5 = performance.now();
      if (!this._collisionJob.work(o3)) return false;
      if (this._collisionJobCompleted = true, 0 === (o3 = Math.max(0, o3 - (performance.now() - t5)))) return false;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const t5 = performance.now();
      if (!this._opacityJob.work(o3)) return false;
      if (this._opacityJobCompleted = true, 0 === (o3 = Math.max(0, o3 - (performance.now() - t5)))) return false;
    }
    return this._running = false, true;
  }
  _createSelectionJob() {
    const o3 = this._symbolRepository.uniqueSymbols;
    for (let t5 = 0; t5 < o3.length; t5++) {
      const e5 = o3[t5];
      for (let o4 = 0; o4 < e5.uniqueSymbols.length; o4++) {
        const t6 = e5.uniqueSymbols[o4];
        for (const o5 of t6.tileSymbols) o5.selectedForRendering = false;
      }
    }
    const e4 = [];
    let i5 = 0, s = 0;
    const n3 = this._isLayerVisible;
    function r5(r6) {
      let l4;
      const c2 = performance.now();
      for (; s < o3.length; s++, i5 = 0) {
        const t5 = o3[s], h = t5.styleLayerUID;
        if (!n3(h)) {
          e4[s] || (e4[s] = {
            styleLayerUID: h,
            symbols: []
          });
          continue;
        }
        e4[s] = e4[s] || {
          styleLayerUID: h,
          symbols: []
        };
        const a = e4[s];
        for (; i5 < t5.uniqueSymbols.length; i5++) {
          if (l4 = t5.uniqueSymbols[i5], i5 % 100 == 99 && performance.now() - c2 > r6) return false;
          let o4 = null, e5 = false, s2 = false;
          for (const t6 of l4.tileSymbols) if (!s2 || !e5) {
            const i6 = t6.tile;
            (!o4 || i6.isCoverage || i6.neededForCoverage && !e5) && (o4 = t6, (i6.neededForCoverage || i6.isCoverage) && (s2 = true), i6.isCoverage && (e5 = true));
          }
          if (o4.selectedForRendering = true, s2) {
            a.symbols.push(o4), l4.show = true;
            for (const o5 of l4.parts) o5.show = true;
          } else l4.show = false;
        }
      }
      for (const o4 of e4) o4.symbols.sort(t3);
      return true;
    }
    const l3 = this._symbolLayerSorter;
    return {
      work: r5,
      get sortedSymbols() {
        return e4.sort(l3);
      }
    };
  }
  _createOpacityJob() {
    const o3 = this._assignTileSymbolsOpacity, t5 = this._visibleTiles;
    let e4 = 0;
    function s(t6, e5) {
      const n3 = t6.symbols;
      for (const [o4, s2] of n3) i3(s2, e5);
      o3(t6, e5);
      for (const o4 of t6.childrenTiles) s(o4, e5);
    }
    return {
      work(o4) {
        const i5 = performance.now();
        for (; e4 < t5.length; e4++) {
          if (performance.now() - i5 > o4) return false;
          const n3 = t5[e4];
          if (null != n3.parentTile) continue;
          s(n3, performance.now());
        }
        return true;
      }
    };
  }
};
function i3(t5, e4) {
  for (const i5 of t5) {
    const t6 = i5.unique;
    for (const i6 of t6.parts) {
      const s = i6.targetOpacity > 0.5 ? 1 : -1;
      i6.startOpacity += s * ((e4 - i6.startTime) / e), i6.startOpacity = Math.min(Math.max(i6.startOpacity, 0), 1), i6.startTime = e4, i6.targetOpacity = t6.show && i6.show ? 1 : 0;
    }
  }
}

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/SymbolRepository.js
var o2 = 32;
var t4 = 8;
var i4 = 64;
var n2 = 20;
var r4 = class {
  constructor(e4, s, l3) {
    this.tileCoordRange = e4, this._visibleTiles = s, this._createUnique = l3, this._tiles = /* @__PURE__ */ new Map(), this._uniqueSymbolsReferences = /* @__PURE__ */ new Map();
  }
  get uniqueSymbols() {
    return null == this._uniqueSymbolLayerArray && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  get uniqueSymbolsReferences() {
    return this._uniqueSymbolsReferences;
  }
  add(s, l3) {
    this._uniqueSymbolLayerArray = null;
    let n3 = this._tiles.get(s.id);
    n3 || (n3 = {
      symbols: /* @__PURE__ */ new Map()
    }, this._tiles.set(s.id, n3));
    const r5 = /* @__PURE__ */ new Map();
    if (l3) for (const e4 of l3) n3.symbols.has(e4) && (r5.set(e4, n3.symbols.get(e4)), n3.symbols.delete(e4));
    else for (const [e4, o3] of s.layerData) n3.symbols.has(e4) && (r5.set(e4, n3.symbols.get(e4)), n3.symbols.delete(e4));
    this._removeSymbols(r5);
    const y = s.symbols, a = /* @__PURE__ */ new Map();
    for (const [f, u] of y) {
      let s2 = u.length;
      if (s2 >= o2) {
        let l4 = this.tileCoordRange;
        do {
          l4 /= 2, s2 /= 4;
        } while (s2 > t4 && l4 > i4);
        const o3 = new i(this.tileCoordRange, this.tileCoordRange, l4);
        a.set(f, {
          flat: u,
          index: o3
        }), n3.symbols.set(f, {
          flat: u,
          index: o3
        });
        for (const e4 of u) o3.getCell(e4.xTile, e4.yTile).push(e4);
      } else a.set(f, {
        flat: u
      }), n3.symbols.set(f, {
        flat: u
      });
    }
    this._addSymbols(s.key, y);
  }
  deleteStyleLayers(e4) {
    this._uniqueSymbolLayerArray = null;
    for (const [s, l3] of this._tiles) {
      const o3 = /* @__PURE__ */ new Map();
      for (const s2 of e4) l3.symbols.has(s2) && (o3.set(s2, l3.symbols.get(s2)), l3.symbols.delete(s2));
      this._removeSymbols(o3), 0 === l3.symbols.size && this._tiles.delete(s);
    }
  }
  removeTile(e4) {
    this._uniqueSymbolLayerArray = null;
    const s = this._tiles.get(e4.id);
    if (!s) return;
    const l3 = /* @__PURE__ */ new Map();
    for (const [o3, t5] of e4.symbols) s.symbols.has(o3) && (l3.set(o3, s.symbols.get(o3)), s.symbols.delete(o3));
    this._removeSymbols(l3), 0 === s.symbols.size && this._tiles.delete(e4.id);
  }
  querySymbols(e4, l3, o3, t5) {
    const i5 = [], n3 = this.uniqueSymbols;
    for (const r5 of n3) {
      const t6 = r5.styleLayerUID, n4 = r5.uniqueSymbols;
      for (const r6 of n4) {
        const n5 = r6.tileSymbols.find((e5) => e5.selectedForRendering);
        n5 && c(n5, e4, l3 * (window.devicePixelRatio || 1), o3) && i5.push({
          vtlSymbol: n5,
          styleLayerUID: t6,
          tileKey: n5.tile.key
        });
      }
    }
    return i5;
  }
  _removeSymbols(e4) {
    for (const [s, {
      flat: l3
    }] of e4) for (const e5 of l3) {
      const l4 = e5.unique, o3 = l4.tileSymbols, t5 = o3.length - 1;
      for (let s2 = 0; s2 < t5; s2++) if (o3[s2] === e5) {
        o3[s2] = o3[t5];
        break;
      }
      if (o3.length = t5, 0 === t5) {
        const e6 = this._uniqueSymbolsReferences.get(s);
        e6.delete(l4), 0 === e6.size && this._uniqueSymbolsReferences.delete(s);
      }
      e5.unique = null;
    }
  }
  _addSymbols(e4, s) {
    if (0 === s.size) return;
    const l3 = this._visibleTiles;
    for (const o3 of l3) o3.parentTile || o3.key.world !== e4.world || o3.key.level === e4.level && !o3.key.equals(e4) || this._matchSymbols(o3, e4, s);
    for (const [o3, t5] of s) for (const e5 of t5) if (null == e5.unique) {
      const s2 = this._createUnique();
      e5.unique = s2, s2.tileSymbols.push(e5);
      let l4 = this._uniqueSymbolsReferences.get(o3);
      l4 || (l4 = /* @__PURE__ */ new Set(), this._uniqueSymbolsReferences.set(o3, l4)), l4.add(s2);
    }
  }
  _matchSymbols(e4, s, o3) {
    if (e4.key.level > s.level) {
      const l3 = e4.key.level - s.level;
      if (e4.key.row >> l3 !== s.row || e4.key.col >> l3 !== s.col) return;
    }
    if (s.level > e4.key.level) {
      const l3 = s.level - e4.key.level;
      if (s.row >> l3 !== e4.key.row || s.col >> l3 !== e4.key.col) return;
    }
    if (s.equals(e4.key)) {
      for (const l3 of e4.childrenTiles) this._matchSymbols(l3, s, o3);
      return;
    }
    const t5 = /* @__PURE__ */ new Map();
    for (const [i5, r5] of o3) {
      const o4 = [];
      for (const t6 of r5) {
        const i6 = o(this.tileCoordRange, t6.xTile, s.level, s.col, e4.key.level, e4.key.col), n3 = o(this.tileCoordRange, t6.yTile, s.level, s.row, e4.key.level, e4.key.row);
        i6 >= 0 && i6 < this.tileCoordRange && n3 >= 0 && n3 < this.tileCoordRange && o4.push({
          symbol: t6,
          xTransformed: i6,
          yTransformed: n3
        });
      }
      const y = [], a = (e4.key.level < s.level ? 1 : 1 << e4.key.level - s.level) + n2, f = this._tiles.get(e4.id).symbols.get(i5);
      if (f) {
        const e5 = f.flat;
        for (const s2 of o4) {
          let l3, o5 = false;
          const t6 = s2.xTransformed, i6 = s2.yTransformed;
          l3 = null != f.index ? f.index.getCell(t6, i6) : e5;
          const n3 = s2.symbol, r6 = n3.hash;
          for (const e6 of l3) if (r6 === e6.hash && Math.abs(t6 - e6.xTile) <= a && Math.abs(i6 - e6.yTile) <= a) {
            const s3 = e6.unique;
            n3.unique = s3, s3.tileSymbols.push(n3), o5 = true;
            break;
          }
          o5 || y.push(n3);
        }
      }
      y.length > 0 && t5.set(i5, y);
    }
    for (const l3 of e4.childrenTiles) this._matchSymbols(l3, s, t5);
  }
  _createUniqueSymbolLayerArray() {
    const e4 = this._uniqueSymbolsReferences, s = new Array(e4.size);
    let l3, o3 = 0;
    for (const [t5, i5] of e4) {
      const e5 = new Array(i5.size);
      l3 = 0;
      for (const s2 of i5) e5[l3++] = s2;
      s[o3] = {
        styleLayerUID: t5,
        uniqueSymbols: e5
      }, o3++;
    }
    return s;
  }
};

export {
  l2 as l,
  e3 as e,
  r4 as r,
  t2 as t
};
//# sourceMappingURL=chunk-BQJMXIXG.js.map
