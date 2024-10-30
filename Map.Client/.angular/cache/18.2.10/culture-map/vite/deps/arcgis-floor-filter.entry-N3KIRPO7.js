import {
  makeWidgetController
} from "./chunk-GBDBWCYP.js";
import {
  useControllerManager
} from "./chunk-ULE6BIEJ.js";
import {
  newWidgetsFloorFilter
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-floor-filter.entry.js
var floorFilterCss = "";
var ArcgisFloorFilterStyle0 = floorFilterCss;
var useFloorFilterWidget = makeWidgetController(newWidgetsFloorFilter);
var ArcgisFloorFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.manager = useControllerManager(this);
    this.widget = useFloorFilterWidget(this);
    this.viewModel = this.widget.viewModel;
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.referenceElement = void 0;
    this.facility = this.widget.facility;
    this.headingLevel = this.widget.headingLevel;
    this.level = this.widget.level;
    this.longNames = this.widget.longNames;
    this.site = this.widget.site;
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
  updateWebDocument(webMap) {
    return __async(this, null, function* () {
      this.widget?.updateWebDocument(webMap);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisFloorFilter.style = ArcgisFloorFilterStyle0;
export {
  ArcgisFloorFilter as arcgis_floor_filter
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-floor-filter.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-floor-filter.entry-N3KIRPO7.js.map
