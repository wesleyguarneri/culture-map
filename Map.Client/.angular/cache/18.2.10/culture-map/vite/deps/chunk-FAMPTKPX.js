import {
  i
} from "./chunk-EOYCWFZW.js";
import {
  p
} from "./chunk-2N3BR7QT.js";
import {
  b
} from "./chunk-TRSGUVSM.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
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
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/layers/ImageryLayerView.js
var m = (m2) => {
  let u = class extends m2 {
    constructor() {
      super(...arguments), this.view = null;
    }
    get timeExtent() {
      return i(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    fetchPopupFeaturesAtLocation(e2, o) {
      return __async(this, null, function* () {
        const {
          layer: s3
        } = this;
        if (!e2) throw new s("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", {
          layer: s3
        });
        const {
          popupEnabled: p2
        } = s3, m3 = p(s3, o);
        if (!p2 || null == m3) return [];
        const u2 = yield m3.getRequiredFields();
        s2(o);
        const c = new b();
        c.timeExtent = this.timeExtent, c.geometry = e2, c.outFields = u2, c.outSpatialReference = e2.spatialReference;
        const {
          resolution: l,
          spatialReference: y2
        } = this.view, h = "2d" === this.view.type ? new _(l, l, y2) : new _(0.5 * l, 0.5 * l, y2), {
          returnTopmostRaster: d,
          showNoDataRecords: f
        } = m3.layerOptions || {
          returnTopmostRaster: true,
          showNoDataRecords: false
        }, w = {
          returnDomainValues: true,
          returnTopmostRaster: d,
          pixelSize: h,
          showNoDataRecords: f,
          signal: o?.signal
        };
        return s3.queryVisibleRasters(c, w).then((e3) => e3);
      });
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return e([y()], u.prototype, "layer", void 0), e([y()], u.prototype, "suspended", void 0), e([y({
    readOnly: true
  })], u.prototype, "timeExtent", null), e([y()], u.prototype, "view", void 0), u = e([a("esri.views.layers.ImageryLayerView")], u), u;
};

export {
  m
};
//# sourceMappingURL=chunk-FAMPTKPX.js.map
