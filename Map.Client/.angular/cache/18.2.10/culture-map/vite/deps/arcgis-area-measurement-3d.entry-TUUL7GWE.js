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
  newWidgetsAreaMeasurement3D
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-area-measurement-3d.entry.js
var areaMeasurement3dCss = "";
var ArcgisAreaMeasurement3dStyle0 = areaMeasurement3dCss;
var useAreaMeasurement3dWidget = makeWidgetController(newWidgetsAreaMeasurement3D);
var ArcgisAreaMeasurement3d = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useAreaMeasurement3dWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("analysis", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.analysis = this.widget.analysis;
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
  clear() {
    return __async(this, null, function* () {
      this.widget?.viewModel.clear();
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  start() {
    return __async(this, null, function* () {
      this.widget?.viewModel.start();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisAreaMeasurement3d.style = ArcgisAreaMeasurement3dStyle0;
export {
  ArcgisAreaMeasurement3d as arcgis_area_measurement_3d
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-area-measurement-3d.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-area-measurement-3d.entry-TUUL7GWE.js.map
