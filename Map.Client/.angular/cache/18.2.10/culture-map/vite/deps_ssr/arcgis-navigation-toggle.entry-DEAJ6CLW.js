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
  newWidgetsNavigationToggle
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-navigation-toggle.entry.js
var navigationToggleCss = "arcgis-navigation-toggle{}";
var ArcgisNavigationToggleStyle0 = navigationToggleCss;
var useNavigationToggleWidget = makeWidgetController(newWidgetsNavigationToggle);
var ArcgisNavigationToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useNavigationToggleWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("layout", "state");
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.referenceElement = void 0;
    this.layout = this.widget.layout;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Watchers
  //
  //--------------------------------------------------------------------------
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  toggle() {
    return __async(this, null, function* () {
      this.widget?.toggle();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisNavigationToggle.style = ArcgisNavigationToggleStyle0;
export {
  ArcgisNavigationToggle as arcgis_navigation_toggle
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-navigation-toggle.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-navigation-toggle.entry-DEAJ6CLW.js.map
