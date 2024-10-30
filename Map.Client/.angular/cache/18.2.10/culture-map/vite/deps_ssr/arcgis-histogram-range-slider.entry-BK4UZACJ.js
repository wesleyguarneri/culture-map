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
  newWidgetsHistogramRangeSlider
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-histogram-range-slider.entry.js
var histogramRangeSliderCss = "arcgis-histogram-range-slider{}";
var ArcgisHistogramRangeSliderStyle0 = histogramRangeSliderCss;
var useHistogramRangeSliderWidget = makeWidgetController(newWidgetsHistogramRangeSlider);
var ArcgisHistogramRangeSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useHistogramRangeSliderWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.average = this.widget.average;
    this.barCreatedFunction = this.widget.barCreatedFunction;
    this.bins = this.widget.bins;
    this.dataLineCreatedFunction = this.widget.dataLineCreatedFunction;
    this.dataLines = this.widget.dataLines;
    this.excludedBarColor = this.widget.excludedBarColor;
    this.includedBarColor = this.widget.includedBarColor;
    this.labelFormatFunction = this.widget.labelFormatFunction;
    this.max = this.widget.max;
    this.min = this.widget.min;
    this.precision = this.widget.precision;
    this.rangeType = this.widget.rangeType;
    this.standardDeviation = this.widget.standardDeviation;
    this.standardDeviationCount = this.widget.standardDeviationCount;
    this.values = this.widget.values;
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
  /**
   * Generates a SQL where clause based on a given field and the slider's
   * rangeType
   */
  generateWhereClause(field) {
    return __async(this, null, function* () {
      return this.widget.generateWhereClause(field);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisHistogramRangeSlider.style = ArcgisHistogramRangeSliderStyle0;
export {
  ArcgisHistogramRangeSlider as arcgis_histogram_range_slider
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-histogram-range-slider.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-histogram-range-slider.entry-BK4UZACJ.js.map
