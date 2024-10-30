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
  newWidgetsShadowCast
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-shadow-cast.entry.js
var shadowCastCss = "arcgis-shadow-cast{}";
var ArcgisShadowCastStyle0 = shadowCastCss;
var useShadowCastWidget = makeWidgetController(newWidgetsShadowCast);
var ArcgisShadowCast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useShadowCastWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.discreteOptions = this.viewModel.discreteOptions;
    this.durationOptions = this.viewModel.durationOptions;
    this.endTimeOfDay = this.viewModel.endTimeOfDay;
    this.startTimeOfDay = this.viewModel.startTimeOfDay;
    this.thresholdOptions = this.viewModel.thresholdOptions;
    this.utcOffset = this.viewModel.utcOffset;
    this.visualizationType = this.viewModel.visualizationType;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.hideTimeRangeSlider = this.widget.visibleElements.timeRangeSlider;
    this.hideTimezone = this.widget.visibleElements.timezone;
    this.hideDatePicker = this.widget.visibleElements.datePicker;
    this.hideVisualizationOptions = this.widget.visibleElements.visualizationOptions;
    this.hideColorPicker = this.widget.visibleElements.colorPicker;
    this.hideTooltip = this.widget.visibleElements.tooltip;
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
  getDuration(point) {
    return __async(this, null, function* () {
      return this.widget?.viewModel.getDuration(point);
    });
  }
  start() {
    return __async(this, null, function* () {
      this.widget?.viewModel.start();
    });
  }
  stop() {
    return __async(this, null, function* () {
      this.widget?.viewModel.stop();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisShadowCast.style = ArcgisShadowCastStyle0;
export {
  ArcgisShadowCast as arcgis_shadow_cast
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-shadow-cast.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-shadow-cast.entry-Z5G2CB53.js.map
