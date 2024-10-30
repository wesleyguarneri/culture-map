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
  newWidgetsFeature
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-feature.entry.js
var featureCss = "";
var ArcgisFeatureStyle0 = featureCss;
var useFeatureWidget = makeWidgetController(newWidgetsFeature);
var ArcgisFeature = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useFeatureWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("state");
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.headingLevel = this.widget.headingLevel;
    this.referenceElement = void 0;
    this.defaultPopupTemplateEnabled = this.widget.defaultPopupTemplateEnabled;
    this.graphic = this.widget.graphic;
    this.location = this.viewModel.location;
    this.map = this.widget.map;
    this.spatialReference = this.widget.spatialReference;
    this.hideTitle = this.widget.visibleElements.title;
    this.hideContentAttachments = this.widget.visibleElements.content.attachments;
    this.hideContentFields = this.widget.visibleElements.content.fields;
    this.hideContentMedia = this.widget.visibleElements.content.media;
    this.hideContentText = this.widget.visibleElements.content.text;
    this.hideContentExpression = this.widget.visibleElements.content.expression;
    this.hideLastEditInfo = this.widget.visibleElements.lastEditedInfo;
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
  nextMedia(contentElementIndex) {
    return __async(this, null, function* () {
      this.widget?.nextMedia(contentElementIndex);
    });
  }
  previousMedia(contentElementIndex) {
    return __async(this, null, function* () {
      this.widget?.previousMedia(contentElementIndex);
    });
  }
  setActiveMedia(contentElementIndex, mediaInfoIndex) {
    return __async(this, null, function* () {
      this.widget?.setActiveMedia(contentElementIndex, mediaInfoIndex);
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisFeature.style = ArcgisFeatureStyle0;
export {
  ArcgisFeature as arcgis_feature
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-feature.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-feature.entry-YSS74Q4K.js.map
