import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  attachToParent,
  defineViewProperty,
  referenceElementHelper
} from "./chunk-RXKDWJON.js";
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-SKDTV3QX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-placement.entry.js
var placementCss = "arcgis-placement{display:block;pointer-events:auto;box-shadow:none}.arcgis-placement__container{display:flex}";
var ArcgisPlacementStyle0 = placementCss;
var ArcgisPlacement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this._setContainer = (element) => {
      this.el.childElem = element;
    };
    this.referenceElement = void 0;
    this.position = "bottom-left";
  }
  referenceElementWatcher(newValue) {
    void referenceElementHelper(this, newValue);
  }
  positionWatcher(newValue) {
    if (this.el.childElem && newValue !== void 0) {
      this.el.view?.ui.move(this.el.childElem, newValue);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    return __async(this, null, function* () {
      defineViewProperty(this);
      attachToParent(this);
    });
  }
  disconnectedCallback() {
    if (this.el.childElem) {
      this.el.view?.ui?.remove(this.el.childElem);
    }
  }
  render() {
    return h("div", {
      key: "6a5216cd50b19569d307a87af6e1d1c1e938d096",
      ref: this._setContainer,
      class: "arcgis-placement__container"
    }, h("slot", {
      key: "e7f78de5ce1621f0aafa7f84005b60ca66cbbc8c"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "referenceElement": ["referenceElementWatcher"],
      "position": ["positionWatcher"]
    };
  }
};
ArcgisPlacement.style = ArcgisPlacementStyle0;
export {
  ArcgisPlacement as arcgis_placement
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-placement.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-placement.entry-6C73FHIA.js.map
