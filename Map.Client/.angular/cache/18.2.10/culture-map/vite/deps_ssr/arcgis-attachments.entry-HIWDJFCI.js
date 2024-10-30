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
  newWidgetsAttachments
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-attachments.entry.js
var attachmentsCss = "";
var ArcgisAttachmentsStyle0 = attachmentsCss;
var useAttachmentsWidget = makeWidgetController(newWidgetsAttachments);
var ArcgisAttachments = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.widget = useAttachmentsWidget(this);
    this.viewModel = this.widget.viewModel;
    this.arcgisPropertyChange = usePropertyChange()("submitting", "state");
    this.referenceElement = void 0;
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.label = this.widget.label;
    this.position = "bottom-left";
    this.capabilities = this.widget.capabilities;
    this.displayType = this.widget.displayType;
    this.graphic = this.widget.graphic;
    this.submitting = this.widget.submitting;
    this.hideAddButton = this.widget.visibleElements.addButton;
    this.hideAddSubmitButton = this.widget.visibleElements.addSubmitButton;
    this.hideCancelAddButton = this.widget.visibleElements.cancelAddButton;
    this.hideCancelUpdateButton = this.widget.visibleElements.cancelUpdateButton;
    this.hideDeleteButton = this.widget.visibleElements.deleteButton;
    this.hideErrorMessage = this.widget.visibleElements.errorMessage;
    this.hideProgressBar = this.widget.visibleElements.progressBar;
    this.hideUpdateButton = this.widget.visibleElements.updateButton;
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
ArcgisAttachments.style = ArcgisAttachmentsStyle0;
export {
  ArcgisAttachments as arcgis_attachments
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-attachments.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-attachments.entry-HIWDJFCI.js.map
