import {
  usePropertyChange
} from "./chunk-Y6JJRVUO.js";
import {
  makeWidgetController
} from "./chunk-GBDBWCYP.js";
import {
  useControllerManager
} from "./chunk-ULE6BIEJ.js";
import {
  newWidgetsElevationProfile
} from "./chunk-37R24ZKG.js";
import "./chunk-GC7DXVF7.js";
import {
  createEvent,
  getElement,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-elevation-profile.entry.js
var elevationProfileCss = "";
var ArcgisElevationProfileStyle0 = elevationProfileCss;
var useElevationProfileWidget = makeWidgetController(newWidgetsElevationProfile);
var ArcgisElevationProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useElevationProfileWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("input", "effectiveUnits", "progress", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.effectiveUnits = this.viewModel.effectiveUnits;
    this.highlightEnabled = this.viewModel.highlightEnabled;
    this.hoveredChartPosition = this.viewModel.hoveredChartPosition;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.input = this.widget.input;
    this.profiles = this.widget.profiles;
    this.progress = this.viewModel.progress;
    this.unit = this.widget.unit;
    this.uniformChartScaling = this.viewModel.uniformChartScaling;
    this.unitOptions = this.widget.unitOptions;
    this.hideLegend = this.widget.visibleElements.legend;
    this.hideChart = this.widget.visibleElements.chart;
    this.hideClearButton = this.widget.visibleElements.clearButton;
    this.hideSettingsButton = this.widget.visibleElements.settingsButton;
    this.hideSketchButton = this.widget.visibleElements.sketchButton;
    this.hideSelectButton = this.widget.visibleElements.selectButton;
    this.hideUnitSelector = this.widget.visibleElements.unitSelector;
    this.hideUniformChartScalingToggle = this.widget.visibleElements.uniformChartScalingToggle;
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
  start() {
    return __async(this, null, function* () {
      this.widget.viewModel.start();
    });
  }
  stop() {
    return __async(this, null, function* () {
      this.widget.viewModel.stop();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisElevationProfile.style = ArcgisElevationProfileStyle0;
export {
  ArcgisElevationProfile as arcgis_elevation_profile
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-elevation-profile.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-elevation-profile.entry-HZHEGUDH.js.map
