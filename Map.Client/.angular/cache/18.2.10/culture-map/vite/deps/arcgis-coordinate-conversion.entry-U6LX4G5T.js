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
  newWidgetsCoordinateConversion
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-coordinate-conversion.entry.js
var coordinateConversionCss = "";
var ArcgisCoordinateConversionStyle0 = coordinateConversionCss;
var useCoordinateConversionWidget = makeWidgetController(newWidgetsCoordinateConversion);
var ArcgisCoordinateConversion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useCoordinateConversionWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("currentLocation", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.conversions = this.widget.conversions;
    this.currentLocation = this.widget.currentLocation;
    this.formats = this.widget.formats;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.locationSymbol = this.widget.locationSymbol;
    this.headingLevel = this.widget.headingLevel;
    this.mode = this.widget.mode;
    this.multipleConversionsDisabled = this.widget.multipleConversions;
    this.orientation = this.widget.orientation;
    this.storageDisabled = this.widget.storageEnabled;
    this.storageType = this.widget.storageType;
    this.hideSettingsButton = this.widget.visibleElements.settingsButton;
    this.hideEditButton = this.widget.visibleElements.editButton;
    this.hideExpandButton = this.widget.visibleElements.expandButton;
    this.hideCaptureButton = this.widget.visibleElements.captureButton;
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
  reverseConvert(coordinate, format) {
    return __async(this, null, function* () {
      return yield this.widget?.reverseConvert(coordinate, format);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisCoordinateConversion.style = ArcgisCoordinateConversionStyle0;
export {
  ArcgisCoordinateConversion as arcgis_coordinate_conversion
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-coordinate-conversion.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-coordinate-conversion.entry-U6LX4G5T.js.map
