import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-UZL2AATT.js";
import {
  se,
  v
} from "./chunk-PLQQNSQY.js";
import {
  p
} from "./chunk-VENH3UKS.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js
var u = (u2) => {
  let p2 = class extends u2 {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    get timeExtent() {
      return i(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    get hasTilingEffects() {
      return !!(this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment);
    }
    get datumTransformation() {
      return v(this.layer.fullExtent, this.view.spatialReference, true);
    }
    supportsSpatialReference(e2) {
      return !!se(this.layer.serviceRasterInfo, e2);
    }
    fetchPopupFeaturesAtLocation(e2, i2) {
      return __async(this, null, function* () {
        const {
          layer: s2
        } = this;
        if (!e2) throw new s("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", {
          layer: s2
        });
        const {
          popupEnabled: a2
        } = s2, o = p(s2, i2);
        if (!a2 || null == o) return [];
        const n = [], {
          value: u3,
          magdirValue: p3,
          processedValue: c
        } = yield s2.identify(e2, {
          timeExtent: this.timeExtent,
          signal: i2?.signal
        });
        let m = "";
        if (u3?.length) {
          m = "imagery-tile" === s2.type && s2.hasStandardTime() && null != u3[0] ? u3.map((e4) => s2.getStandardTimeValue(e4)).join(", ") : u3.join(", ");
          const e3 = {
            ObjectId: 0
          }, r = "Raster.ServicePixelValue";
          e3[r] = "imagery-tile" === s2.type && "Function" === s2.raster.datasetFormat ? c?.join(", ") : m, e3[r + ".Raw"] = m;
          const i3 = s2.raster?.rasterInfo ?? s2.serviceRasterInfo, a3 = i3?.attributeTable;
          if (null != a3) {
            const {
              fields: t,
              features: i4
            } = a3, s3 = t.find(({
              name: e4
            }) => "value" === e4.toLowerCase()), o3 = e3[r], n2 = s3 ? i4.find((e4) => String(e4.attributes[s3.name]) === o3) : null;
            if (n2) {
              for (const r2 in n2.attributes) if (n2.attributes.hasOwnProperty(r2)) {
                e3[this._rasterFieldPrefix + r2] = n2.attributes[r2];
              }
            }
          }
          const o2 = i3?.dataType;
          "vector-magdir" !== o2 && "vector-uv" !== o2 || (e3["Raster.Magnitude"] = p3?.[0], e3["Raster.Direction"] = p3?.[1]);
          const l = new d({
            geometry: this.fullExtent.clone(),
            attributes: e3,
            layer: s2,
            sourceLayer: s2
          });
          n.push(l);
        }
        return n;
      });
    }
    _getfullExtent() {
      return se(this.layer.serviceRasterInfo, this.view.spatialReference);
    }
  };
  return e([y()], p2.prototype, "fullExtent", null), e([y()], p2.prototype, "layer", void 0), e([y({
    readOnly: true
  })], p2.prototype, "timeExtent", null), e([y()], p2.prototype, "view", void 0), e([y()], p2.prototype, "tileInfo", void 0), e([y({
    readOnly: true
  })], p2.prototype, "hasTilingEffects", null), e([y()], p2.prototype, "datumTransformation", null), p2 = e([a("esri.views.layers.ImageryTileLayerView")], p2), p2;
};

export {
  u
};
//# sourceMappingURL=chunk-4BTJRLWJ.js.map
