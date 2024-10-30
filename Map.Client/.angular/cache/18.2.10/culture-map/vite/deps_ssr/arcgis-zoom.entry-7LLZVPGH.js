import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  load,
  usePropertyChange
} from "./chunk-M4K2V36W.js";
import {
  makeWidgetController
} from "./chunk-IEGW5ZXY.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  importCoreReactiveUtils,
  newWidgetsZoom
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-zoom.entry.js
var zoomCss = "arcgis-zoom{}";
var ArcgisZoomStyle0 = zoomCss;
var useZoomWidget = makeWidgetController(newWidgetsZoom);
var ArcgisZoom = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useZoomWidget(this);
    this.viewModel = this.widget.viewModel;
    this.reactiveUtils = load(importCoreReactiveUtils);
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.referenceElement = void 0;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.layout = this.widget.layout;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
    this.autoDestroyDisabled = false;
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
  zoomIn() {
    return __async(this, null, function* () {
      this.widget?.viewModel.zoomIn();
    });
  }
  zoomOut() {
    return __async(this, null, function* () {
      this.widget?.viewModel.zoomOut();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisZoom.style = ArcgisZoomStyle0;
export {
  ArcgisZoom as arcgis_zoom
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-zoom.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-zoom.entry-7LLZVPGH.js.map
