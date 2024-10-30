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
  newWidgetsAreaMeasurement2D
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-area-measurement-2d.entry.js
var areaMeasurement2dCss = "";
var ArcgisAreaMeasurement2dStyle0 = areaMeasurement2dCss;
var useAreaMeasurement2dWidget = makeWidgetController(
  // Workaround for https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/61559
  newWidgetsAreaMeasurement2D
);
var ArcgisAreaMeasurement2d = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useAreaMeasurement2dWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.label = this.widget.label;
    this.icon = this.widget.icon;
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
ArcgisAreaMeasurement2d.style = ArcgisAreaMeasurement2dStyle0;
export {
  ArcgisAreaMeasurement2d as arcgis_area_measurement_2d
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-area-measurement-2d.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-area-measurement-2d.entry-4F3PNSB7.js.map
