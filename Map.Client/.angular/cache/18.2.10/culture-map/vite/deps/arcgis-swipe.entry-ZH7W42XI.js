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
  newWidgetsSwipe
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-swipe.entry.js
var swipeCss = "arcgis-swipe{}";
var ArcgisSwipeStyle0 = swipeCss;
var useSwipeWidget = makeWidgetController(newWidgetsSwipe);
var ArcgisSwipe = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useSwipeWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.direction = this.widget.direction;
    this.dragLabel = this.widget.dragLabel;
    this.leadingLayers = this.widget.leadingLayers;
    this.swipePosition = this.widget.position;
    this.trailingLayers = this.widget.trailingLayers;
    this.position = "manual";
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
  get el() {
    return getElement(this);
  }
};
ArcgisSwipe.style = ArcgisSwipeStyle0;
export {
  ArcgisSwipe as arcgis_swipe
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-swipe.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-swipe.entry-ZH7W42XI.js.map
