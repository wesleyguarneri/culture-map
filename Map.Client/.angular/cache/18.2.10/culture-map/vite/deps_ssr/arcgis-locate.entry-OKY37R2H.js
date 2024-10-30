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
  newWidgetsLocate
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-locate.entry.js
var locateCss = "arcgis-locate{}";
var ArcgisLocateStyle0 = locateCss;
var useLocateWidget = makeWidgetController(newWidgetsLocate);
var ArcgisLocate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.widgetLocate = createEvent(this, "arcgisSuccess", 7);
    this.widgetLocateError = createEvent(this, "arcgisError", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useLocateWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.error = this.viewModel.error;
    this.geolocationOptions = this.widget.geolocationOptions;
    this.goToLocationDisabled = this.widget.goToLocationEnabled;
    this.graphic = this.widget.graphic;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.popupDisabled = this.widget.popupEnabled;
    this.scale = this.widget.scale;
    this.state = this.viewModel.state;
    this.position = "bottom-left";
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
  cancelLocate() {
    return __async(this, null, function* () {
      this.widget?.cancelLocate();
    });
  }
  locate() {
    return __async(this, null, function* () {
      return yield this.widget?.locate();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisLocate.style = ArcgisLocateStyle0;
export {
  ArcgisLocate as arcgis_locate
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-locate.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-locate.entry-OKY37R2H.js.map
