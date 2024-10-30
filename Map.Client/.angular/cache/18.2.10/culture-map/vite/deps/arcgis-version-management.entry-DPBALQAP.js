import {
  makeViewModelController,
  useT9n
} from "./chunk-O3THHOQ7.js";
import {
  load
} from "./chunk-Y6JJRVUO.js";
import {
  useControllerManager
} from "./chunk-ULE6BIEJ.js";
import {
  importCoreReactiveUtils,
  newWidgetsVersionManagementVersionManagementViewModel
} from "./chunk-37R24ZKG.js";
import "./chunk-GC7DXVF7.js";
import {
  Fragment,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-version-management.entry.js
var versionManagementCss = ".calcite-flow-widget{width:350px}calcite-block{margin:0}calcite-pagination{justify-content:center}";
var ArcgisVersionManagementStyle0 = versionManagementCss;
var useVersionManagementViewModel = makeViewModelController(newWidgetsVersionManagementVersionManagementViewModel);
var ArcgisVersionManagement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.arcgisVersioningStateChanged = createEvent(this, "arcgisVersioningStateChanged", 7);
    this.manager = useControllerManager(this);
    this.reactiveUtils = load(importCoreReactiveUtils);
    this.viewModel = useVersionManagementViewModel(this);
    this.messages = this.manager.readonly(useT9n({
      blocking: true
    }));
    this.allowEditingDisabled = false;
    this.autoDestroyDisabled = false;
    this.closable = false;
    this.icon = void 0;
    this.label = void 0;
    this.mode = void 0;
    this.pageSize = 5;
    this.position = "top-right";
    this.referenceElement = void 0;
    this.state = this.viewModel.state;
    this.versioningStates = this.viewModel.versioningStates;
    this.view = this.viewModel.view;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    return __async(this, null, function* () {
      const {
        watch
      } = this.reactiveUtils;
      this.manager.onLifecycle(() => [watch(() => this.viewModel.state, (state) => {
        const {
          flowElement
        } = this;
        const versionProperties = flowElement?.getElementsByTagName("arcgis-version-management-version-properties")[0];
        const versionList = flowElement?.getElementsByTagName("arcgis-version-management-version-list")[0];
        if (state === "disabled") {
          if (versionProperties) {
            this._removeVersionPropertiesFlowItem(flowElement);
          }
          if (versionList) {
            this._removeVersionListFlowItem(flowElement);
          }
          return;
        }
        if (versionList) {
          versionList.versionListElementProps = __spreadProps(__spreadValues({}, versionList.versionListElementProps), {
            executionError: this.viewModel.executionError
          });
          versionList.versionListElementProps = __spreadProps(__spreadValues({}, versionList.versionListElementProps), {
            state
          });
        }
        if (versionProperties) {
          versionProperties.versionPropertiesElementProps = __spreadProps(__spreadValues({}, versionProperties.versionPropertiesElementProps), {
            state
          });
        }
      })]);
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  render() {
    const {
      allowEditingDisabled,
      closable,
      flowElement,
      label,
      messages,
      pageSize,
      viewModel,
      viewModel: {
        loadError,
        state
      }
    } = this;
    const arrayServiceNames = Array.from(viewModel.serviceNameLookup, ([url, name]) => ({
      url,
      name
    }));
    const serviceItems = state !== "disabled" ? h(Fragment, null, arrayServiceNames.map((service) => {
      const serviceItemElementProps = {
        allowEditing: !allowEditingDisabled,
        closable,
        currentUser: viewModel.userLookup.get(service.url),
        currentVersionIdentifier: viewModel.versioningStateLookup.get(service.url).currentVersionInfo.versionIdentifier,
        executionError: void 0,
        flowElement,
        hasAdvEditingUte: viewModel.advancedEditingUserTypeExtensionLookup.get(service.url),
        heading: label,
        isVersioningApiAvailable: (viewModel.serverVersionLookup.get(service.url) ?? 0) >= 11.2,
        pageSize,
        serviceName: service.name,
        state,
        serviceUrl: service.url,
        strings: messages,
        versionInfos: viewModel.versioningStateLookup.get(service.url)?.versionInfos ?? []
      };
      return h("arcgis-version-management-service-item", {
        serviceItemElementProps,
        onArcgisGetVersions: (event) => __async(this, null, function* () {
          yield this._refreshVersionList(event.detail.serviceUrl);
        }),
        onArcgisFlowItemBack: () => {
          this._removeVersionListFlowItem(flowElement);
        },
        onArcgisFlowItemClose: () => {
          this._handleFlowItemClose();
        },
        onArcgisManageVersion: (event) => {
          this._handleManageVersionAction(event, flowElement);
        },
        onArcgisNewVersion: (event) => {
          const versionPropertiesFlow = this._createVersionPropertiesFlowItem(event.detail.serviceUrl, void 0);
          flowElement?.appendChild(versionPropertiesFlow);
        }
      });
    })) : void 0;
    const notice = state === "disabled" ? h("calcite-notice", {
      class: "notice",
      closable: false,
      kind: "warning",
      open: true,
      scale: "s",
      slot: "footer",
      width: "full"
    }, h("div", {
      slot: "message"
    }, this._getLoadError(loadError))) : void 0;
    return h("calcite-flow", {
      ref: (node) => {
        this.flowElement = node;
      },
      class: this.mode === "dialog" ? "" : "calcite-flow-widget"
    }, h("calcite-flow-item", {
      closable: this.closable,
      heading: label,
      onCalciteFlowItemClose: () => {
        this._handleFlowItemClose();
      }
    }, h("calcite-panel", {
      loading: state === "loading" || state === "executing"
    }, serviceItems, notice)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  _createVersionPropertiesFlowItem(serviceUrl, versionInfo) {
    const {
      closable,
      flowElement,
      viewModel,
      viewModel: {
        state
      }
    } = this;
    const versionProperties = document.createElement("arcgis-version-management-version-properties");
    versionProperties.versionPropertiesElementProps = {
      closable,
      currentUser: viewModel.userLookup.get(serviceUrl),
      hasAdvEditingUte: viewModel.advancedEditingUserTypeExtensionLookup.get(serviceUrl),
      serviceUrl,
      state,
      strings: this.messages,
      versionInfo
    };
    versionProperties.addEventListener("arcgisCreateVersion", (event) => {
      const {
        createVersionParameters,
        switchToVersion
      } = event.detail;
      viewModel.createVersion(createVersionParameters).then((createVersionResult) => __async(this, null, function* () {
        if (createVersionResult) {
          this.arcgisVersioningStateChanged.emit({
            type: "version-created",
            versionIdentifier: createVersionResult.versionIdentifier,
            versioningState: viewModel.versioningStateLookup.get(serviceUrl)
          });
        }
        if (switchToVersion) {
          yield this.viewModel.changeVersion(serviceUrl, createVersionResult.versionIdentifier.name, createVersionResult.versionIdentifier.guid).then((changeVersionResult) => {
            if (changeVersionResult) {
              this.arcgisVersioningStateChanged.emit({
                type: "version-switched",
                versionIdentifier: createVersionResult.versionIdentifier,
                versioningState: viewModel.versioningStateLookup.get(serviceUrl)
              });
            }
          });
        }
      })).finally(() => __async(this, null, function* () {
        yield this._refreshVersionList(serviceUrl);
        this._removeVersionPropertiesFlowItem(flowElement);
      }));
    });
    versionProperties.addEventListener("arcgisAlterVersion", (event) => __async(this, null, function* () {
      const {
        flowElement: flowElement2
      } = this;
      const {
        alterVersionParameters
      } = event.detail;
      yield viewModel.alterVersion(alterVersionParameters).then((alterVersionResult) => __async(this, null, function* () {
        if (alterVersionResult) {
          this.arcgisVersioningStateChanged.emit({
            type: "version-changed",
            versionIdentifier: alterVersionParameters.versionIdentifier,
            versioningState: viewModel.versioningStateLookup.get(serviceUrl)
          });
        }
        yield this._refreshVersionList(serviceUrl);
      })).finally(() => {
        this._removeVersionPropertiesFlowItem(flowElement2);
      });
    }));
    versionProperties.addEventListener("arcgisFlowItemBack", () => {
      this._removeVersionPropertiesFlowItem(this.flowElement);
    });
    versionProperties.addEventListener("calciteFlowItemBack", (event) => {
      event.preventDefault();
      this._removeVersionPropertiesFlowItem(this.flowElement);
    });
    versionProperties.addEventListener("calciteFlowItemClose", () => {
      this._handleFlowItemClose();
    });
    return versionProperties;
  }
  _getLoadError(loadError) {
    const {
      messages
    } = this;
    switch (loadError) {
      case "no-feature-services":
        return messages.loadErrors.noFeatureServices;
      case "no-view-property":
        return messages.loadErrors.noViewProperty;
      default:
        return loadError;
    }
  }
  _handleFlowItemClose() {
    const versionManagementComponent = document.querySelector("arcgis-version-management");
    const parentElement = versionManagementComponent.parentElement;
    parentElement?.removeChild(versionManagementComponent);
  }
  _handleManageVersionAction(e, flowElement) {
    return __async(this, null, function* () {
      const {
        actionType,
        serviceUrl,
        versionInfo
      } = e.detail;
      const {
        viewModel
      } = this;
      switch (actionType) {
        case "changeVersion": {
          viewModel.changeVersion(serviceUrl, versionInfo.versionIdentifier.name, versionInfo.versionIdentifier.guid).then((changeVersionResult) => {
            if (changeVersionResult) {
              this.arcgisVersioningStateChanged.emit({
                type: "version-switched",
                versionIdentifier: versionInfo.versionIdentifier,
                versioningState: viewModel.versioningStateLookup.get(serviceUrl)
              });
            }
            const versionList = flowElement?.getElementsByTagName("arcgis-version-management-version-list")[0];
            if (versionList) {
              if (versionList) {
                versionList.versionListElementProps = __spreadProps(__spreadValues({}, versionList.versionListElementProps), {
                  currentVersionIdentifier: viewModel.versioningStateLookup.get(serviceUrl).currentVersionInfo.versionIdentifier
                });
              }
            }
          });
          break;
        }
        case "deleteVersion": {
          viewModel.deleteVersion(serviceUrl, versionInfo.versionIdentifier.name, versionInfo.versionIdentifier.guid).then((deleteVersionResult) => __async(this, null, function* () {
            if (deleteVersionResult) {
              this.arcgisVersioningStateChanged.emit({
                type: "version-deleted",
                versionIdentifier: versionInfo.versionIdentifier,
                versioningState: viewModel.versioningStateLookup.get(serviceUrl)
              });
            }
            yield this._refreshVersionList(serviceUrl);
          }));
          break;
        }
        case "editVersion": {
          const versionPropertiesFlow = this._createVersionPropertiesFlowItem(serviceUrl, versionInfo);
          flowElement.appendChild(versionPropertiesFlow);
          break;
        }
      }
    });
  }
  _refreshVersionList(serviceUrl) {
    return __async(this, null, function* () {
      const {
        flowElement,
        viewModel
      } = this;
      if (flowElement) {
        const versionInfos = yield viewModel.getVersionInfos(serviceUrl);
        const serviceItemElements = flowElement.getElementsByTagName("arcgis-version-management-service-item");
        for (const serviceItemElement of serviceItemElements) {
          if (serviceItemElement.serviceItemElementProps.serviceUrl === serviceUrl) {
            serviceItemElement.serviceItemElementProps = __spreadProps(__spreadValues({}, serviceItemElement.serviceItemElementProps), {
              versionInfos
            });
          }
        }
        const versionListElement = flowElement.getElementsByTagName("arcgis-version-management-version-list")[0];
        if (versionListElement) {
          versionListElement.versionListElementProps = __spreadProps(__spreadValues({}, versionListElement.versionListElementProps), {
            currentVersionIdentifier: viewModel.versioningStateLookup.get(serviceUrl).currentVersionInfo.versionIdentifier,
            versionInfos
          });
        }
      }
    });
  }
  _removeVersionListFlowItem(flowElement) {
    for (const childNode of flowElement.childNodes) {
      if (childNode.nodeName.toUpperCase() === "ARCGIS-VERSION-MANAGEMENT-VERSION-LIST") {
        flowElement.removeChild(childNode);
      }
      if (childNode.nodeName.toUpperCase() === "CALCITE-FLOW-ITEM") {
        childNode.hidden = false;
      }
    }
  }
  _removeVersionPropertiesFlowItem(flowElement) {
    for (const childNode of flowElement.childNodes) {
      if (childNode.nodeName.toUpperCase() === "ARCGIS-VERSION-MANAGEMENT-VERSION-PROPERTIES") {
        flowElement.removeChild(childNode);
      }
      if (childNode.nodeName.toUpperCase() === "ARCGIS-VERSION-MANAGEMENT-VERSION-LIST") {
        childNode.getElementsByTagName("calcite-flow-item")[0].hidden = false;
      }
    }
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return getElement(this);
  }
};
ArcgisVersionManagement.style = ArcgisVersionManagementStyle0;
export {
  ArcgisVersionManagement as arcgis_version_management
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-version-management.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-version-management.entry-DPBALQAP.js.map
