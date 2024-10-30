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
  newWidgetsLineOfSight
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-line-of-sight.entry.js
var lineOfSightCss = "arcgis-line-of-sight{}";
var ArcgisLineOfSightStyle0 = lineOfSightCss;
var useLineOfSightWidget = makeWidgetController(newWidgetsLineOfSight);
var ArcgisLineOfSight = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useLineOfSightWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("analysis", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.analysis = this.widget.analysis;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.position = "bottom-left";
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
  clear() {
    return __async(this, null, function* () {
      this.widget?.viewModel.clear();
    });
  }
  continue() {
    return __async(this, null, function* () {
      this.widget?.viewModel.continue();
    });
  }
  start() {
    return __async(this, null, function* () {
      this.widget?.viewModel.start();
    });
  }
  stop() {
    return __async(this, null, function* () {
      this.widget?.viewModel.stop();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisLineOfSight.style = ArcgisLineOfSightStyle0;
export {
  ArcgisLineOfSight as arcgis_line_of_sight
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-line-of-sight.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-line-of-sight.entry-64JPD4FT.js.map
