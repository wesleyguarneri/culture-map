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
  newWidgetsTrack
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-track.entry.js
var trackCss = "";
var ArcgisTrackStyle0 = trackCss;
var useTrackWidget = makeWidgetController(newWidgetsTrack);
var ArcgisTrack = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.widgetTrack = createEvent(this, "arcgisComplete", 7);
    this.widgetTrackError = createEvent(this, "arcgisError", 7);
    this.manager = useControllerManager(this);
    this.widget = useTrackWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.error = this.viewModel.error;
    this.geolocationOptions = this.widget.geolocationOptions;
    this.goToLocationEnabled = this.widget.goToLocationEnabled;
    this.graphic = this.widget.graphic;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.positionFilterFunction = this.viewModel.positionFilterFunction;
    this.rotationEnabled = this.widget.rotationEnabled;
    this.scale = this.widget.scale;
    this.tracking = this.widget.tracking;
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
  start() {
    return __async(this, null, function* () {
      this.widget.start();
    });
  }
  stop() {
    return __async(this, null, function* () {
      this.widget.stop();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisTrack.style = ArcgisTrackStyle0;
export {
  ArcgisTrack as arcgis_track
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-track.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-track.entry-DFPPHBB7.js.map