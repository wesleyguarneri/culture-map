import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  makeWidgetController
} from "./chunk-IEGW5ZXY.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  newWidgetsDaylight
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-daylight.entry.js
var daylightCss = "";
var ArcgisDaylightStyle0 = daylightCss;
var useDaylightWidget = makeWidgetController(newWidgetsDaylight);
var ArcgisDaylight = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.manager = useControllerManager(this);
    this.widget = useDaylightWidget(this);
    this.viewModel = this.widget.viewModel;
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.currentSeason = this.viewModel.currentSeason;
    this.dayPlaying = this.viewModel.dayPlaying;
    this.yearPlaying = this.viewModel.yearPlaying;
    this.dateOrSeason = this.widget.dateOrSeason;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.playSpeedMultiplier = this.widget.playSpeedMultiplier;
    this.timeSliderSteps = this.widget.timeSliderSteps;
    this.hideHeader = this.widget.visibleElements.header;
    this.hidePlayButtons = this.widget.visibleElements.playButtons;
    this.hideDatePicker = this.widget.visibleElements.datePicker;
    this.hideTimezone = this.widget.visibleElements.timezone;
    this.hideSunLightingToggle = this.widget.visibleElements.sunLightingToggle;
    this.hideShadowsToggle = this.widget.visibleElements.shadowsToggle;
    this.position = "bottom-left";
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
ArcgisDaylight.style = ArcgisDaylightStyle0;
export {
  ArcgisDaylight as arcgis_daylight
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-daylight.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-daylight.entry-IDLDXEU2.js.map
