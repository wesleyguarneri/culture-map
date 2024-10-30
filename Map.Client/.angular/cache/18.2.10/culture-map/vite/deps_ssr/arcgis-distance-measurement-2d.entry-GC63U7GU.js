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
  newWidgetsDistanceMeasurement2D
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-distance-measurement-2d.entry.js
var distanceMeasurement2dCss = "";
var ArcgisDistanceMeasurement2dStyle0 = distanceMeasurement2dCss;
var useDistanceMeasurement2dWidget = makeWidgetController(newWidgetsDistanceMeasurement2D);
var ArcgisDistanceMeasurement2d = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useDistanceMeasurement2dWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.unit = this.widget.unit;
    this.unitOptions = this.widget.unitOptions;
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
ArcgisDistanceMeasurement2d.style = ArcgisDistanceMeasurement2dStyle0;
export {
  ArcgisDistanceMeasurement2d as arcgis_distance_measurement_2d
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-distance-measurement-2d.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-distance-measurement-2d.entry-GC63U7GU.js.map
