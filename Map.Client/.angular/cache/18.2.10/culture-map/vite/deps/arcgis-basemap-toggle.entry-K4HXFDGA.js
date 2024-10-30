import {
  load,
  usePropertyChange
} from "./chunk-Y6JJRVUO.js";
import {
  makeWidgetController
} from "./chunk-GBDBWCYP.js";
import {
  useControllerManager
} from "./chunk-ULE6BIEJ.js";
import {
  importCoreReactiveUtils,
  newWidgetsBasemapToggle
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-basemap-toggle.entry.js
var basemapToggleCss = "";
var ArcgisBasemapToggleStyle0 = basemapToggleCss;
var useBasemapToggleWidget = makeWidgetController(newWidgetsBasemapToggle);
var ArcgisBasemapToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.reactiveUtils = load(importCoreReactiveUtils);
    this.widget = useBasemapToggleWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("nextBasemap", "state");
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.position = "bottom-left";
    this.referenceElement = void 0;
    this.nextBasemap = this.widget.nextBasemap;
    this.showTitle = this.widget.visibleElements.title;
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
  toggle() {
    return __async(this, null, function* () {
      return yield this.widget?.toggle();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisBasemapToggle.style = ArcgisBasemapToggleStyle0;
export {
  ArcgisBasemapToggle as arcgis_basemap_toggle
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-basemap-toggle.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-basemap-toggle.entry-K4HXFDGA.js.map
