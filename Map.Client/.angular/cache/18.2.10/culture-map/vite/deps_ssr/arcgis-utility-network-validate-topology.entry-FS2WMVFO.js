import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  onDisconnectedHelper
} from "./chunk-2HIBLSHK.js";
import {
  newWidgetsUtilityNetworkValidateTopology
} from "./chunk-OHJC6MYB.js";
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

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-utility-network-validate-topology.entry.js
var utilityNetworkValidateTopologyCss = "arcgis-utility-network-validate-topology{}";
var ArcgisUtilityNetworkValidateTopologyStyle0 = utilityNetworkValidateTopologyCss;
var ArcgisUtilityNetworkValidateTopology = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this._watchHandles = [];
    this.referenceElement = void 0;
    this.extentToValidate = "current";
    this.utilityNetwork = void 0;
    this.position = "bottom-left";
    this.view = void 0;
    this.widget = void 0;
  }
  referenceElementWatcher(value) {
    void referenceElementHelper(this, value);
  }
  extentToValidateWatcher(value) {
    if (this.widget) {
      this.widget.extentToValidate = value;
    }
  }
  utilityNetworkWatcher(value) {
    if (this.widget) {
      this.widget.utilityNetwork = value;
    }
  }
  positionWatcher(value) {
    if (value !== void 0 && this.widget && this.el.childElem) {
      this.view.ui.move(this.el.childElem, value);
    }
  }
  viewWatcher(value) {
    if (value !== void 0 && this.widget) {
      this.widget.view = value;
      void this._loadUtilityNetwork();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    return __async(this, null, function* () {
      const params = this._createParams();
      const widget = yield newWidgetsUtilityNetworkValidateTopology(params);
      this.widget = widget;
      this._addContainer();
      defineViewProperty(this);
      attachToParent(this);
    });
  }
  disconnectedCallback() {
    onDisconnectedHelper(this);
  }
  render() {
    return h("div", {
      key: "b799fc1c383c67bd8690ce4b0df49625493d1b1e",
      ref: (el) => this.el.childElem = el
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  _addContainer() {
    this.widget.container = this.el.childElem;
  }
  _createParams() {
    const params = {};
    if (this.extentToValidate !== void 0) {
      params.extentToValidate = this.extentToValidate;
    }
    if (this.utilityNetwork !== void 0) {
      params.utilityNetwork = this.utilityNetwork;
    }
    return params;
  }
  _loadUtilityNetwork() {
    return __async(this, null, function* () {
      if (this.view?.map && this.view.map.portalItem) {
        yield this.view.map.load();
        const utilityNetwork = this.view.map.utilityNetworks.getItemAt(0);
        yield utilityNetwork.load();
        this.utilityNetwork = utilityNetwork;
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "referenceElement": ["referenceElementWatcher"],
      "extentToValidate": ["extentToValidateWatcher"],
      "utilityNetwork": ["utilityNetworkWatcher"],
      "position": ["positionWatcher"],
      "view": ["viewWatcher"]
    };
  }
};
ArcgisUtilityNetworkValidateTopology.style = ArcgisUtilityNetworkValidateTopologyStyle0;
export {
  ArcgisUtilityNetworkValidateTopology as arcgis_utility_network_validate_topology
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-utility-network-validate-topology.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-utility-network-validate-topology.entry-FS2WMVFO.js.map
