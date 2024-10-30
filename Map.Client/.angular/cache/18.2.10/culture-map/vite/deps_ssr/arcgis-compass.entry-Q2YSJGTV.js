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
  newWidgetsCompass
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-compass.entry.js
var compassCss = "";
var ArcgisCompassStyle0 = compassCss;
var useCompassWidget = makeWidgetController(newWidgetsCompass);
var ArcgisCompass = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useCompassWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("orientation", "state");
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.orientation = this.viewModel.orientation;
    this.position = "bottom-left";
    this.referenceElement = void 0;
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
  reset() {
    return __async(this, null, function* () {
      this.widget.reset();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisCompass.style = ArcgisCompassStyle0;
export {
  ArcgisCompass as arcgis_compass
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-compass.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-compass.entry-Q2YSJGTV.js.map
