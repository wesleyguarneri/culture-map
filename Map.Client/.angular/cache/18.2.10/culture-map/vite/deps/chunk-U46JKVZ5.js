import {
  n,
  p
} from "./chunk-2N3BR7QT.js";
import {
  Re,
  x
} from "./chunk-DTUSTSEJ.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/PopupSceneLayerView.js
var i = (i2) => {
  let c = class extends i2 {
    _validateFetchPopupFeatures(e2) {
      const {
        layer: r
      } = this, {
        popupEnabled: s2
      } = r;
      if (!s2) throw new s("scenelayerview3d:fetchPopupFeatures", "Popups are disabled", {
        layer: r
      });
      if (!p(r, e2)) throw new s("scenelayerview3d:fetchPopupFeatures", "Layer does not define a popup template", {
        layer: r
      });
    }
    prepareFetchPopupFeatures(e2) {
      return __async(this, null, function* () {
      });
    }
    fetchPopupFeaturesFromGraphics(e2, t) {
      return __async(this, null, function* () {
        if (this._validateFetchPopupFeatures(t), 0 === e2.length) return [];
        const r = "scene" === this.layer.type && null != this.layer.associatedLayer ? this.layer.associatedLayer : this.layer;
        let i3 = [];
        "fieldsIndex" in this.layer && (i3 = x(this.layer.fieldsIndex, yield n(r, p(this.layer, t)))), yield this.prepareFetchPopupFeatures(i3);
        const c2 = /* @__PURE__ */ new Set(), n2 = [], l = [];
        for (const s2 of e2) Re(i3, s2, c2) ? l.push(s2) : n2.push(s2);
        if (0 === l.length) return n2;
        const u = /* @__PURE__ */ new Map();
        for (let s2 = 0; s2 < e2.length; s2++) u.set(e2[s2].getObjectId() ?? 0, s2);
        const h = yield this.whenGraphicAttributes(l, [...c2]).catch(() => l).then((e3) => n2.concat(e3));
        return h.sort((e3, t2) => {
          const r2 = e3.getObjectId() ?? 0, s2 = u.get(r2) ?? 0, a2 = t2.getObjectId() ?? 0;
          return s2 - (u.get(a2) ?? 0);
        }), h;
      });
    }
  };
  return c = e([a("esri.views.3d.layers.support.PopupSceneLayerView")], c), c;
};

export {
  i
};
//# sourceMappingURL=chunk-U46JKVZ5.js.map
