import {
  l
} from "./chunk-L3T5PF4P.js";
import {
  n as n2
} from "./chunk-6A7CWJED.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  S
} from "./chunk-HJY2YILU.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/support/collectionUtils.js
function t(t2) {
  return new l({
    getCollections: () => [t2.tables, t2.layers],
    getChildrenFunction: (e2) => {
      const t3 = [];
      return "tables" in e2 && t3.push(e2.tables), "layers" in e2 && t3.push(e2.layers), t3;
    },
    itemFilterFunction: (e2) => {
      const t3 = e2.parent;
      return !!t3 && "tables" in t3 && t3.tables.includes(e2);
    }
  });
}
function n3(e2) {
  for (const t2 of e2.values()) t2?.destroy();
  e2.clear();
}

// ../../../node_modules/@arcgis/core/support/LayersMixin.js
function d(e2, r, t2) {
  let s, o;
  if (e2) for (let a3 = 0, i = e2.length; a3 < i; a3++) {
    if (s = e2.at(a3), s?.[r] === t2) return s;
    if ("group" === s?.type && (o = d(s.layers, r, t2), o)) return o;
  }
}
var l2 = (l3) => {
  let y2 = class extends l3 {
    constructor(...e2) {
      super(...e2), this.layers = new V();
      const t2 = (e3) => {
        e3.parent && "remove" in e3.parent && e3.parent.remove(e3);
      }, o = (e3) => {
        e3.parent = this, this.layerAdded(e3), "elevation" !== e3.type && "base-elevation" !== e3.type || n.getLogger(this).error(`Layer 'title:${e3.title}, id:${e3.id}' of type '${e3.type}' is not supported as an operational layer and will therefore be ignored.`);
      }, a3 = (e3) => {
        e3.parent = null, this.layerRemoved(e3);
      };
      this.addHandles([this.layers.on("before-add", (e3) => {
        if (e3.item === this) return e3.preventDefault(), void n.getLogger(this).error("#add()", "Cannot add layer to itself.");
        t2(e3.item);
      }), this.layers.on("after-add", (e3) => o(e3.item)), this.layers.on("after-remove", (e3) => a3(e3.item))]);
    }
    destroy() {
      const e2 = this.layers.toArray();
      for (const r of e2) r.destroy();
      this.layers.destroy();
    }
    set layers(e2) {
      this._set("layers", n2(e2, this._get("layers")));
    }
    add(e2, r) {
      const t2 = this.layers;
      if (r = t2.getNextIndex(r), e2 instanceof f) {
        const s = e2;
        s.parent === this ? this.reorder(s, r) : t2.add(s, r);
      } else S(e2) ? e2.then((e3) => {
        this.destroyed || this.add(e3, r);
      }) : n.getLogger(this).error("#add()", "The item being added is not a Layer or a Promise that resolves to a Layer.");
    }
    addMany(e2, r) {
      const t2 = this.layers;
      let s = t2.getNextIndex(r);
      e2.slice().forEach((e3) => {
        e3.parent !== this ? (t2.add(e3, s), s += 1) : this.reorder(e3, s);
      });
    }
    findLayerById(e2) {
      return d(this.layers, "id", e2);
    }
    findLayerByUid(e2) {
      return d(this.layers, "uid", e2);
    }
    remove(e2) {
      return this.layers.remove(e2);
    }
    removeMany(e2) {
      return this.layers.removeMany(e2);
    }
    removeAll() {
      return this.layers.removeAll();
    }
    reorder(e2, r) {
      return this.layers.reorder(e2, r);
    }
    layerAdded(e2) {
    }
    layerRemoved(e2) {
    }
  };
  return e([y()], y2.prototype, "layers", null), y2 = e([a("esri.support.LayersMixin")], y2), y2;
};

// ../../../node_modules/@arcgis/core/support/TablesMixin.js
function a2(t2, e2, r) {
  if (t2) for (let s = 0, o = t2.length; s < o; s++) {
    const o2 = t2.at(s);
    if (o2[e2] === r) return o2;
    if ("group" === o2?.type) {
      const t3 = a2(o2.tables, e2, r);
      if (t3) return t3;
    }
  }
}
var n4 = (n5) => {
  let l3 = class extends n5 {
    constructor(...t2) {
      super(...t2), this.tables = new V(), this.addHandles([this.tables.on("after-add", (t3) => {
        const e2 = t3.item;
        e2.parent && e2.parent !== this && "tables" in e2.parent && e2.parent.tables.remove(e2), e2.parent = this, "feature" !== e2.type && n.getLogger(this).error(`Layer 'title:${e2.title}, id:${e2.id}' of type '${e2.type}' is not supported as a table and will therefore be ignored.`);
      }), this.tables.on("after-remove", (t3) => {
        t3.item.parent = null;
      })]);
    }
    destroy() {
      const t2 = this.tables.toArray();
      for (const e2 of t2) e2.destroy();
      this.tables.destroy();
    }
    set tables(t2) {
      this._set("tables", n2(t2, this._get("tables")));
    }
    findTableById(t2) {
      return a2(this.tables, "id", t2);
    }
    findTableByUid(t2) {
      return a2(this.tables, "uid", t2);
    }
  };
  return e([y()], l3.prototype, "tables", null), l3 = e([a("esri.support.TablesMixin")], l3), l3;
};

export {
  t,
  n3 as n,
  l2 as l,
  n4 as n2
};
//# sourceMappingURL=chunk-ZACL2JP7.js.map
