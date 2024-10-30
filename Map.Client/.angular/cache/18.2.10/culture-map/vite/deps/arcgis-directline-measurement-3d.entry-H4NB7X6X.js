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
  newWidgetsDirectLineMeasurement3D
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-directline-measurement-3d.entry.js
var directlineMeasurement3dCss = "";
var ArcgisDirectlineMeasurement3dStyle0 = directlineMeasurement3dCss;
var useDirectLineMeasurement3dWidget = makeWidgetController(newWidgetsDirectLineMeasurement3D);
var ArcgisDirectLineMeasurement3d = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useDirectLineMeasurement3dWidget(this);
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
ArcgisDirectLineMeasurement3d.style = ArcgisDirectlineMeasurement3dStyle0;
export {
  ArcgisDirectLineMeasurement3d as arcgis_directline_measurement_3d
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-directline-measurement-3d.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-directline-measurement-3d.entry-H4NB7X6X.js.map
