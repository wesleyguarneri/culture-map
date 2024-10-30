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
  newWidgetsSlider
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-slider.entry.js
var sliderCss = "arcgis-slider{min-width:200px;min-height:25px}";
var ArcgisSliderStyle0 = sliderCss;
var useSliderWidget = makeWidgetController(newWidgetsSlider);
var ArcgisSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetMaxChange = createEvent(this, "arcgisMaxChange", 7);
    this.widgetMaxClick = createEvent(this, "arcgisMaxClick", 7);
    this.widgetMinChange = createEvent(this, "arcgisMinChange", 7);
    this.widgetMinClick = createEvent(this, "arcgisMinClick", 7);
    this.widgetSegmentClick = createEvent(this, "arcgisSegmentClick", 7);
    this.widgetSegmentDrag = createEvent(this, "arcgisSegmentDrag", 7);
    this.widgetThumbChange = createEvent(this, "arcgisThumbChange", 7);
    this.widgetThumbClick = createEvent(this, "arcgisThumbClick", 7);
    this.widgetThumbDrag = createEvent(this, "arcgisThumbDrag", 7);
    this.widgetTickClick = createEvent(this, "arcgisTickClick", 7);
    this.widgetTrackClick = createEvent(this, "arcgisTrackClick", 7);
    this.manager = useControllerManager(this);
    this.widget = useSliderWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.draggableSegmentsEnabled = this.widget.draggableSegmentsEnabled;
    this.effectiveMax = this.widget.effectiveMax;
    this.effectiveMin = this.widget.effectiveMin;
    this.effectiveSegmentElements = this.widget.effectiveSegmentElements;
    this.labelElements = this.widget.labelElements;
    this.labelInputsEnabled = this.widget.labelInputsEnabled;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.labels = this.widget.labels;
    this.layout = this.widget.layout;
    this.min = this.widget.min;
    this.max = this.widget.max;
    this.maxLabelElement = this.widget.maxLabelElement;
    this.minLabelElement = this.widget.minLabelElement;
    this.precision = this.widget.precision;
    this.rangeLabelInputsEnabled = this.widget.rangeLabelInputsEnabled;
    this.segmentElements = this.widget.segmentElements;
    this.snapOnClickEnabled = this.widget.snapOnClickEnabled;
    this.syncedSegmentsEnabled = this.widget.syncedSegmentsEnabled;
    this.thumbElements = this.widget.thumbElements;
    this.thumbsConstrained = this.widget.thumbsConstrained;
    this.tickConfigs = this.widget.tickConfigs;
    this.tickElements = this.widget.tickElements;
    this.trackElement = this.widget.trackElement;
    this.steps = this.manager.getSet(this.widget.steps, {
      set: (newValue) => typeof newValue === "string" ? newValue.split(",").map(Number) : newValue
    });
    this.values = this.manager.getSet(this.widget.values, {
      set: (newValue) => typeof newValue === "string" ? newValue.split(",").map(Number) : newValue
    });
    this.position = "bottom-left";
    this.state = this.widget.state;
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
ArcgisSlider.style = ArcgisSliderStyle0;
export {
  ArcgisSlider as arcgis_slider
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-slider.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-slider.entry-N3WKK64Y.js.map
