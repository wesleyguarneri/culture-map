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
  newWidgetsMeasurement
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-measurement.entry.js
var measurementCss = "arcgis-measurement{}";
var ArcgisMeasurementStyle0 = measurementCss;
var useMeasurementWidget = makeWidgetController(newWidgetsMeasurement);
var ArcgisMeasurement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useMeasurementWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("activeTool", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.activeTool = this.widget.activeTool;
    this.activeWidget = this.widget.activeWidget;
    this.areaUnit = this.widget.areaUnit;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.linearUnit = this.widget.linearUnit;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  clear() {
    return __async(this, null, function* () {
      this.widget?.clear();
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  startMeasurement() {
    return __async(this, null, function* () {
      this.widget?.startMeasurement();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisMeasurement.style = ArcgisMeasurementStyle0;
export {
  ArcgisMeasurement as arcgis_measurement
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-measurement.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-measurement.entry-CVLCHVTK.js.map
