import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  usePropertyChange
} from "./chunk-M4K2V36W.js";
import {
  makeWidgetController
} from "./chunk-IEGW5ZXY.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  newWidgetsScaleRangeSlider
} from "./chunk-OHJC6MYB.js";
import "./chunk-RXKDWJON.js";
import {
  createEvent,
  getElement,
  registerInstance
} from "./chunk-SKDTV3QX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-scale-range-slider.entry.js
var scaleRangeSliderCss = "arcgis-scale-range-slider{}";
var ArcgisScaleRangeSliderStyle0 = scaleRangeSliderCss;
var useScaleRangeSliderWidget = makeWidgetController(newWidgetsScaleRangeSlider);
var ArcgisScaleRangeSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useScaleRangeSliderWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.disabled = this.widget.disabled;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.layer = this.widget.layer;
    this.maxScale = this.widget.maxScale;
    this.maxScaleLimit = this.widget.maxScaleLimit;
    this.minScale = this.widget.minScale;
    this.minScaleLimit = this.widget.minScaleLimit;
    this.mode = this.widget.mode;
    this.region = this.widget.region;
    this.hidePreview = this.widget.visibleElements.preview;
    this.hideScaleMenusMinScaleMenu = this.widget.visibleElements.scaleMenus.minScaleMenu;
    this.hideScaleMenusMaxScaleMenu = this.widget.visibleElements.scaleMenus.maxScaleMenu;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisScaleRangeSlider.style = ArcgisScaleRangeSliderStyle0;
export {
  ArcgisScaleRangeSlider as arcgis_scale_range_slider
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-scale-range-slider.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-scale-range-slider.entry-WX2OT762.js.map
