import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-UZL2AATT.js";
import {
  a as a2
} from "./chunk-7QB35HXN.js";
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
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  u
} from "./chunk-6WGE3IUL.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/layers/WMSLayerView.js
var m = (m2) => {
  let n = class extends m2 {
    initialize() {
      this.exportImageParameters = new a2({
        layer: this.layer
      });
    }
    destroy() {
      this.exportImageParameters = u(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return i(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    fetchPopupFeaturesAtLocation(e2, r) {
      return __async(this, null, function* () {
        const {
          layer: s3
        } = this;
        if (!e2) throw new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", {
          layer: s3
        });
        const {
          popupEnabled: a3
        } = s3;
        if (!a3) throw new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", {
          popupEnabled: a3
        });
        const p = this.createFetchPopupFeaturesQuery(e2);
        if (!p) return [];
        const {
          extent: i2,
          width: m3,
          height: n2,
          x: c,
          y: u2
        } = p;
        if (!(i2 && m3 && n2)) throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", {
          extent: i2,
          width: m3,
          height: n2
        });
        const h = yield s3.fetchFeatureInfo(i2, m3, n2, c, u2);
        return s2(r), h;
      });
    }
  };
  return e([y()], n.prototype, "exportImageParameters", void 0), e([y({
    readOnly: true
  })], n.prototype, "exportImageVersion", null), e([y()], n.prototype, "layer", void 0), e([y({
    readOnly: true
  })], n.prototype, "timeExtent", null), n = e([a("esri.views.layers.WMSLayerView")], n), n;
};

export {
  m
};
//# sourceMappingURL=chunk-T24WHHIJ.js.map
