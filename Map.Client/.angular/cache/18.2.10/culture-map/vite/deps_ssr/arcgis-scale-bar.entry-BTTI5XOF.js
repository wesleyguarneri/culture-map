import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  makeWidgetController
} from "./chunk-IEGW5ZXY.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  newWidgetsScaleBar
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-scale-bar.entry.js
var scaleBarCss = "arcgis-scale-bar{}";
var ArcgisScaleBarStyle0 = scaleBarCss;
var useScaleBarWidget = makeWidgetController(newWidgetsScaleBar);
var ArcgisScaleBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.manager = useControllerManager(this);
    this.widget = useScaleBarWidget(this);
    this.viewModel = this.widget.viewModel;
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.barStyle = this.widget.style;
    this.unit = this.widget.unit;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
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
  get el() {
    return getElement(this);
  }
};
ArcgisScaleBar.style = ArcgisScaleBarStyle0;
export {
  ArcgisScaleBar as arcgis_scale_bar
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-scale-bar.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-scale-bar.entry-BTTI5XOF.js.map
