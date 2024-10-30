import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-5EGQYY2H.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  d,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  o
} from "./chunk-6UEMNP3E.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/layers/CatalogDynamicGroupLayerView.js
var l = Symbol();
var u = (u2) => {
  let y2 = class extends u2 {
    constructor() {
      super(...arguments), this.layerViews = new V(), this._debouncedUpdate = k(() => __async(this, null, function* () {
        const {
          layer: e3,
          parent: r
        } = this, t = r?.footprintLayerView;
        let s = [];
        const i = this._createQuery();
        if (i && t) {
          const {
            features: r2
          } = yield t.queryFeatures(i);
          this.suspended || (s = r2.map((r3) => e3.acquireLayer(r3)));
        }
        this.removeHandles(l), this.addHandles(s, l);
      }));
    }
    get creatingLayerViews() {
      return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer) ?? false;
    }
    isUpdating() {
      return this.creatingLayerViews || this.layer.updating || this.layerViews.some((e3) => e3.updating);
    }
    enableLayerUpdates() {
      return o([this._updatingHandles.addWhen(() => false === this.parent?.footprintLayerView?.dataUpdating, () => this.updateLayers()), this._updatingHandles.add(() => [this.layer.maximumVisibleSublayers, this.layer.parent?.orderBy, this.parent?.footprintLayerView?.filter, this.parent?.footprintLayerView?.timeExtent, this.suspended], () => this.updateLayers()), e(() => this.removeHandles(l))]);
    }
    updateLayers() {
      this.suspended ? this.removeHandles(l) : this._updatingHandles.addPromise(d(this._debouncedUpdate()).catch((e3) => {
        n.getLogger(this).error(e3);
      }));
    }
    _createQuery() {
      const e3 = this.parent?.footprintLayerView, r = this.layer?.parent;
      if (!e3 || !r || r.destroyed) return null;
      const {
        layer: {
          maximumVisibleSublayers: t
        },
        view: {
          scale: s
        }
      } = this;
      if (!t) return null;
      const {
        itemTypeField: i,
        itemSourceField: a2,
        itemNameField: o2,
        minScaleField: d2,
        maxScaleField: p,
        objectIdField: l2,
        orderBy: u3
      } = r, y3 = n2(`${d2} IS NULL OR ${s} <= ${d2} OR ${d2} = 0`, `${p} IS NULL OR ${s} >= ${p}`), c = u3?.find((e4) => e4.field && !e4.valueExpression), m = e3.createQuery();
      if (m.returnGeometry = false, m.num = t, m.outFields = [l2, a2, o2], m.where = n2(m.where, y3), null != this.unsupportedItemTypes) {
        const e4 = `${i} NOT IN (${this.unsupportedItemTypes.map((e5) => `'${e5}'`)})`;
        m.where = n2(m.where, e4);
      }
      return c?.field && (m.orderByFields = [`${c.field} ${"descending" === c.order ? "DESC" : "ASC"}`], m.outFields.push(c.field)), m;
    }
  };
  return e2([y({
    readOnly: true
  })], y2.prototype, "creatingLayerViews", null), e2([y()], y2.prototype, "layer", void 0), e2([y()], y2.prototype, "layerViews", void 0), e2([y({
    readOnly: true
  })], y2.prototype, "unsupportedItemTypes", void 0), e2([y()], y2.prototype, "parent", void 0), e2([y({
    readOnly: true
  })], y2.prototype, "isUpdating", null), y2 = e2([a("esri.views.layers.CatalogDynamicGroupLayerView")], y2), y2;
};

export {
  u
};
//# sourceMappingURL=chunk-C7VQR3LI.js.map
