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
  newWidgetsHistogram
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-histogram.entry.js
var histogramCss = "arcgis-histogram{}";
var ArcgisHistogramStyle0 = histogramCss;
var useHistogramWidget = makeWidgetController(newWidgetsHistogram);
var ArcgisHistogram = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useHistogramWidget(this);
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
    this.labelFormatFunction = this.widget.labelFormatFunction;
    this.layout = this.widget.layout;
    this.max = this.widget.max;
    this.min = this.widget.min;
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
ArcgisHistogram.style = ArcgisHistogramStyle0;
export {
  ArcgisHistogram as arcgis_histogram
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-histogram.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-histogram.entry-DU2EAUQE.js.map
