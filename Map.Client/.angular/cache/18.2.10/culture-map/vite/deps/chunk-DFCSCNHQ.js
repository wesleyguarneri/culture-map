import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  d3 as d,
  m,
  p2 as p,
  w,
  z
} from "./chunk-634JLXD4.js";
import {
  m3 as m2
} from "./chunk-T5JGQSO3.js";
import {
  S as S2
} from "./chunk-IQLBZKUD.js";
import {
  u
} from "./chunk-K226GFDN.js";
import {
  f
} from "./chunk-3ZXOUEQG.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/support/TileTreeDebugger.js
var u2 = [[0, 179, 255], [117, 62, 128], [0, 104, 255], [215, 189, 166], [32, 0, 193], [98, 162, 206], [102, 112, 129], [52, 125, 0], [142, 118, 246], [138, 83, 0], [92, 122, 255], [122, 55, 83], [0, 142, 255], [81, 40, 179], [0, 200, 244], [13, 24, 127], [0, 170, 147], [19, 58, 241], [22, 44, 35]];
var d3 = class extends S {
  constructor(e2) {
    super(e2), this.updating = false, this.enablePolygons = true, this.enableLabels = true, this._polygons = /* @__PURE__ */ new Map(), this._labels = /* @__PURE__ */ new Map(), this._enabled = true;
  }
  initialize() {
    this._symbols = u2.map((e2) => new S2({
      color: [e2[0], e2[1], e2[2], 0.6],
      outline: {
        color: "black",
        width: 1
      }
    })), this.update();
  }
  destroy() {
    this._enabled = false, this.clear();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e2) {
    this._enabled !== e2 && (this._enabled = e2, this.update());
  }
  update() {
    if (!this._enabled) return void this.clear();
    const e2 = (e3) => {
      if (null != e3.label) return e3.label;
      let s = e3.lij.toString();
      return null != e3.loadPriority && (s += ` (${e3.loadPriority})`), s;
    }, t = this.getTiles(), i = new Array(), n = new Set((this._labels.size, this._labels.keys()));
    t.forEach((m4, u3) => {
      const d4 = m4.lij.toString();
      n.delete(d4);
      const g = m4.lij[0], f2 = m4.geometry;
      if (this.enablePolygons && !this._polygons.has(d4)) {
        const e3 = new d2({
          geometry: f2,
          symbol: this._symbols[g % this._symbols.length]
        });
        this._polygons.set(d4, e3), i.push(e3);
      }
      if (this.enableLabels) {
        const n2 = e2(m4), g2 = u3 / (t.length - 1), w2 = f(0, 200, g2), _ = f(20, 6, g2) / 0.75, j = null != m4.loadPriority && m4.loadPriority >= t.length, v = new u([w2, j ? 0 : w2, j ? 0 : w2]), S3 = "3d" === this.view.type ? () => new w({
          verticalOffset: new p({
            screenLength: 40 / 0.75
          }),
          callout: new d({
            color: new u("white"),
            border: new m({
              color: new u("black")
            })
          }),
          symbolLayers: new V([new z({
            text: n2,
            halo: {
              color: "white",
              size: 1 / 0.75
            },
            material: {
              color: v
            },
            size: _
          })])
        }) : () => new m2({
          text: n2,
          haloColor: "white",
          haloSize: 1 / 0.75,
          color: v,
          size: _
        }), L = this._labels.get(d4);
        if (L) {
          const e3 = S3();
          null != L.symbol && JSON.stringify(e3) === JSON.stringify(L.symbol) || (L.symbol = e3);
        } else {
          const e3 = new d2({
            geometry: f2.extent.center,
            symbol: S3()
          });
          this._labels.set(d4, e3), i.push(e3);
        }
      }
    });
    const m3 = new Array();
    n.forEach((e3) => {
      const s = this._polygons.get(e3);
      null != s && (m3.push(s), this._polygons.delete(e3));
      const o = this._labels.get(e3);
      null != o && (m3.push(o), this._labels.delete(e3));
    }), this.view.graphics.removeMany(m3), this.view.graphics.addMany(i);
  }
  clear() {
    this.view.graphics.removeMany(Array.from(this._polygons.values())), this.view.graphics.removeMany(Array.from(this._labels.values())), this._polygons.clear(), this._labels.clear();
  }
};
e([y({
  constructOnly: true
})], d3.prototype, "view", void 0), e([y({
  readOnly: true
})], d3.prototype, "updating", void 0), e([y()], d3.prototype, "enabled", null), d3 = e([a("esri.views.support.TileTreeDebugger")], d3);

export {
  d3 as d
};
//# sourceMappingURL=chunk-DFCSCNHQ.js.map
