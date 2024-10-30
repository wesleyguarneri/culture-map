import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  makeWidgetController
} from "./chunk-IEGW5ZXY.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  newWidgetsExpand
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-expand.entry.js
var expandCss = "arcgis-expand{pointer-events:auto}arcgis-expand>.esri-expand__content--expanded{background-color:var(--calcite-color-background)}";
var ArcgisExpandStyle0 = expandCss;
var useExpandWidget = makeWidgetController(newWidgetsExpand);
var ArcgisExpand = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.manager = useControllerManager(this);
    this.widget = useExpandWidget(this);
    this.viewModel = this.widget.viewModel;
    this.autoDestroyDisabled = false;
    this.icon = this.widget.icon;
    this.content = this.widget.content;
    this.label = this.widget.label;
    this.autoCollapse = this.widget.autoCollapse;
    this.closeOnEsc = this.widget.closeOnEsc;
    this.collapseIcon = this.widget.collapseIcon;
    this.collapseTooltip = this.widget.collapseTooltip;
    this.expanded = this.widget.expanded;
    this.expandIcon = this.widget.expandIcon;
    this.expandTooltip = this.widget.expandTooltip;
    this.group = this.widget.group;
    this.iconNumber = this.widget.iconNumber;
    this.mode = this.widget.mode;
    this.placement = this.widget.placement;
    this.position = "top-right";
    this.referenceElement = void 0;
    this.content ?? (this.content = document.createElement("div"));
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
  collapse() {
    return __async(this, null, function* () {
      this.widget?.collapse();
    });
  }
  expand() {
    return __async(this, null, function* () {
      this.widget?.expand();
    });
  }
  toggle() {
    return __async(this, null, function* () {
      if (this.expanded) {
        yield this.collapse();
      } else {
        yield this.expand();
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
ArcgisExpand.style = ArcgisExpandStyle0;
export {
  ArcgisExpand as arcgis_expand
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-expand.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-expand.entry-DV3UYUXI.js.map
