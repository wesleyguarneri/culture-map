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
  newWidgetsBasemapGallery
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-basemap-gallery.entry.js
var basemapGalleryCss = "";
var ArcgisBasemapGalleryStyle0 = basemapGalleryCss;
var useBasemapGalleryWidget = makeWidgetController(newWidgetsBasemapGallery);
var ArcgisBasemapGallery = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useBasemapGalleryWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("activeBasemap", "state");
    this.activeBasemap = this.widget.activeBasemap;
    this.autoDestroyDisabled = false;
    this.disabled = this.widget.disabled;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.source = this.widget.source;
    this.position = "bottom-left";
    this.referenceElement = void 0;
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
ArcgisBasemapGallery.style = ArcgisBasemapGalleryStyle0;
export {
  ArcgisBasemapGallery as arcgis_basemap_gallery
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-basemap-gallery.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-basemap-gallery.entry-DTSDIHWD.js.map
