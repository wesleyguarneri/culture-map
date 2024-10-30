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
  newLayersRouteLayer,
  newWidgetsDirections
} from "./chunk-OHJC6MYB.js";
import {
  isNullOrEmptyString
} from "./chunk-RXKDWJON.js";
import {
  createEvent,
  getElement,
  registerInstance
} from "./chunk-SKDTV3QX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-directions.entry.js
var directionsCss = "";
var ArcgisDirectionsStyle0 = directionsCss;
var useDirectionsWidget = makeWidgetController(newWidgetsDirections);
var loggerName = "map-components:arcgis-directions";
var ArcgisDirections = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useDirectionsWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("lastRoute", "state");
    this.autoDestroyDisabled = false;
    this.referenceElement = void 0;
    this.apiKey = this.widget.apiKey;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.routeLayerItemId = this.manager.getSet(void 0, {
      set: (value) => {
        if (isNullOrEmptyString(value)) {
          this.widget.view?.map.remove(this.layer);
          this._setDefaultLayer();
        } else if (value && this.widget) {
          newLayersRouteLayer({
            portalItem: {
              id: value
            }
          }).then((layer) => {
            this.layer = layer;
          }).catch(console.error);
        }
        return value;
      }
    });
    this.lastRoute = this.widget.lastRoute;
    this.layer = this.widget.layer;
    this.headingLevel = this.widget.headingLevel;
    this.maxStops = this.widget.maxStops;
    this.searchProperties = this.widget.searchProperties;
    this.unit = this.widget.unit;
    this.useDefaultRouteLayer = this.manager.getSet(false, {
      set: (newValue) => {
        this._setDefaultLayer();
        return newValue;
      }
    });
    this.hideLayerDetails = this.widget.visibleElements.layerDetails;
    this.hideSaveAsButton = this.widget.visibleElements.saveAsButton;
    this.hideSaveButton = this.widget.visibleElements.saveButton;
    this.position = "bottom-left";
    this.state = this.viewModel.state;
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /** Maintain a default route layer */
  _setDefaultLayer() {
    if (this.useDefaultRouteLayer) {
      newLayersRouteLayer({}).then((layer) => {
        this.layer = layer;
      }).catch(console.error);
    }
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
  getDirections() {
    return __async(this, null, function* () {
      if (this.widget?.viewModel?.state !== "ready") {
        throw new Error(`${loggerName} - component not ready to get directions`);
      }
      return yield this.widget?.getDirections();
    });
  }
  save() {
    return __async(this, null, function* () {
      if (this.widget?.viewModel?.state !== "ready") {
        throw new Error(`${loggerName} - component not ready to save directions`);
      }
      return yield this.widget?.save();
    });
  }
  saveAs(portalItem, options) {
    return __async(this, null, function* () {
      if (this.widget?.viewModel?.state !== "ready") {
        throw new Error(`${loggerName} - component not ready to save directions as a Portal Item`);
      }
      return yield this.widget?.saveAs(portalItem, options);
    });
  }
  zoomToRoute() {
    return __async(this, null, function* () {
      if (this.widget?.viewModel?.state !== "ready") {
        throw new Error(`${loggerName} - component not ready to zoom to route`);
      }
      this.widget?.zoomToRoute();
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisDirections.style = ArcgisDirectionsStyle0;
export {
  ArcgisDirections as arcgis_directions
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-directions.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-directions.entry-AYKBLA4K.js.map
