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
  newWidgetsTimeSlider
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-time-slider.entry.js
var timeSliderCss = "arcgis-time-slider{}";
var ArcgisTimeSliderStyle0 = timeSliderCss;
var useTimeSliderWidget = makeWidgetController(newWidgetsTimeSlider);
var ArcgisTimeSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetTriggerAction = createEvent(this, "arcgisTriggerAction", 7);
    this.manager = useControllerManager(this);
    this.widget = useTimeSliderWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("effectiveStops", "fullTimeExtent", "timeExtent", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.actions = this.widget.actions;
    this.disabled = this.widget.disabled;
    this.effectiveStops = this.widget.effectiveStops;
    this.fullTimeExtent = this.widget.fullTimeExtent;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.layout = this.widget.layout;
    this.loop = this.widget.loop;
    this.mode = this.widget.mode;
    this.playRate = this.widget.playRate;
    this.stops = this.widget.stops;
    this.tickConfigs = this.widget.tickConfigs;
    this.timeExtent = this.widget.timeExtent;
    this.timeVisible = this.widget.timeVisible;
    this.timeZone = this.widget.timeZone;
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
  applyTimeSliderSettings(settings) {
    return __async(this, null, function* () {
      Object.assign(this, settings);
    });
  }
  next() {
    return __async(this, null, function* () {
      this.widget?.next();
    });
  }
  play() {
    return __async(this, null, function* () {
      this.widget?.play();
    });
  }
  previous() {
    return __async(this, null, function* () {
      this.widget?.previous();
    });
  }
  stop() {
    return __async(this, null, function* () {
      this.widget?.stop();
    });
  }
  updateWebDocument(webmap) {
    return __async(this, null, function* () {
      this.widget?.updateWebDocument(webmap);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisTimeSlider.style = ArcgisTimeSliderStyle0;
export {
  ArcgisTimeSlider as arcgis_time_slider
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-time-slider.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-time-slider.entry-3D5KIAHZ.js.map
