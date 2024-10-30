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
  newWidgetsOrientedImageryViewer
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-oriented-imagery-viewer.entry.js
var orientedImageryViewerCss = "";
var ArcgisOrientedImageryViewerStyle0 = orientedImageryViewerCss;
var useOrientedImageryViewerWidget = makeWidgetController(newWidgetsOrientedImageryViewer);
var ArcgisOrientedImageryViewer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useOrientedImageryViewerWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("imageGalleryEnabled");
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.position = "bottom-left";
    this.referenceElement = void 0;
    this.currentCoverageVisible = this.widget.currentCoverageVisible;
    this.disabled = this.widget.disabled;
    this.galleryOpened = this.widget.galleryOpened;
    this.imageEnhancementToolActive = this.widget.imageEnhancementToolActive;
    this.imageGalleryEnabled = this.widget.imageGalleryEnabled;
    this.isAdditionalCoverageVisible = this.widget.isAdditionalCoverageVisible;
    this.isAdditionalPointSourcesVisible = this.widget.isAdditionalPointSourcesVisible;
    this.layer = this.widget.layer;
    this.mapImageConversionToolState = this.widget.mapImageConversionToolState;
    this.navigationToolActive = this.widget.navigationToolActive;
    this.referencePoint = this.widget.referencePoint;
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
  get el() {
    return getElement(this);
  }
};
ArcgisOrientedImageryViewer.style = ArcgisOrientedImageryViewerStyle0;
export {
  ArcgisOrientedImageryViewer as arcgis_oriented_imagery_viewer
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-oriented-imagery-viewer.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-oriented-imagery-viewer.entry-FIDHB4FY.js.map
