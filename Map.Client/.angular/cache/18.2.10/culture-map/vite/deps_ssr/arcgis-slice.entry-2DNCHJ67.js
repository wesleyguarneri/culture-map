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
  newWidgetsSlice
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-slice.entry.js
var sliceCss = "arcgis-slice{}";
var ArcgisSliceStyle0 = sliceCss;
var useSliceWidget = makeWidgetController(newWidgetsSlice);
var ArcgisSlice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useSliceWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("analysis", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.analysis = this.widget.analysis;
    this.excludedLayers = this.viewModel.excludedLayers;
    this.excludeGroundSurface = this.viewModel.excludeGroundSurface;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.shape = this.viewModel.shape;
    this.tiltEnabled = this.viewModel.tiltEnabled;
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
ArcgisSlice.style = ArcgisSliceStyle0;
export {
  ArcgisSlice as arcgis_slice
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-slice.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-slice.entry-2DNCHJ67.js.map
