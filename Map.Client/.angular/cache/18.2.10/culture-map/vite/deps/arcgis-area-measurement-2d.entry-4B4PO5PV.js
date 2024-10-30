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
  newWidgetsAreaMeasurement2D
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
//# sourceMappingURL=arcgis-area-measurement-2d.entry-4B4PO5PV.js.map
