import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-SKDTV3QX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-version-management-service-item_2.entry.js
var ArcgisVersionManagementServiceItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisFlowItemBack = createEvent(this, "arcgisFlowItemBack", 7);
    this.arcgisFlowItemClose = createEvent(this, "arcgisFlowItemClose", 7);
    this.arcgisGetVersions = createEvent(this, "arcgisGetVersions", 7);
    this.arcgisManageVersion = createEvent(this, "arcgisManageVersion", 7);
    this.arcgisNewVersion = createEvent(this, "arcgisNewVersion", 7);
    this._versionListEventListeners = /* @__PURE__ */ new Map();
    this._arcgisGetVersions = (event) => {
      this.arcgisGetVersions.emit(event.detail);
    };
    this._arcgisManageVersion = (event) => {
      this.arcgisManageVersion.emit(event.detail);
    };
    this._arcgisNewVersion = (event) => {
      this.arcgisNewVersion.emit(event.detail);
    };
    this.serviceItemElementProps = void 0;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  disconnectedCallback() {
    if (this._versionList) {
      this._removeVersionListEventListeners(this._versionList);
    }
  }
  render() {
    const {
      serviceItemElementProps: {
        allowEditing,
        closable,
        currentUser,
        executionError,
        currentVersionIdentifier,
        flowElement,
        hasAdvEditingUte,
        heading,
        isVersioningApiAvailable,
        pageSize,
        serviceName,
        serviceUrl,
        state,
        strings,
        versionInfos
      }
    } = this;
    let {
      _versionList: versionList
    } = this;
    const comboboxVersions = h("calcite-combobox", {
      key: "e80f4924dbd00f2a29140b91ee53369dff826d39",
      clearDisabled: true,
      label: serviceName,
      maxItems: 5,
      overlayPositioning: "fixed",
      selectionMode: "single-persist",
      onCalciteComboboxChange: (event) => {
        const node = event.target;
        const versionInfo = versionInfos.find((version) => version.versionIdentifier.guid === node.value);
        this.arcgisManageVersion.emit({
          actionType: "changeVersion",
          serviceUrl,
          versionInfo
        });
      }
    }, versionInfos ? versionInfos.map((versionInfo) => h("calcite-combobox-item", {
      selected: currentVersionIdentifier.guid === versionInfo.versionIdentifier.guid && currentVersionIdentifier.name === versionInfo.versionIdentifier.name,
      textLabel: versionInfo.versionIdentifier.name,
      value: versionInfo.versionIdentifier.guid
    })) : void 0);
    let actionManageVersions;
    let tooltipManageVersions;
    if (allowEditing) {
      actionManageVersions = h("calcite-action", {
        key: "fc6779c583aa81cf1f12584bda094b7d0d25dd06",
        id: `actionManageVersions_${serviceName}`,
        icon: "list",
        scale: "s",
        slot: "control",
        text: "",
        onClick: () => __async(this, null, function* () {
          versionList = document.createElement("arcgis-version-management-version-list");
          versionList.versionListElementProps = {
            closable,
            currentUser,
            currentVersionIdentifier,
            executionError,
            hasAdvEditingUte,
            heading,
            isVersioningApiAvailable,
            pageSize,
            serviceName,
            serviceUrl,
            state,
            strings,
            versionInfos
          };
          versionList.addEventListener("calciteFlowItemBack", (e) => {
            e.preventDefault();
            this.arcgisFlowItemBack.emit();
          });
          versionList.addEventListener("calciteFlowItemClose", () => {
            this.arcgisFlowItemClose.emit();
          });
          this._addVersionListEventListeners(versionList);
          flowElement.append(versionList);
        })
      });
      tooltipManageVersions = h("calcite-tooltip", {
        key: "5d9377d1bec63e4c3d310a3941c0ad693e81f48b",
        overlayPositioning: "fixed",
        referenceElement: `actionManageVersions_${serviceName}`
      }, h("span", {
        key: "ce2e9fc08127e075738fb2cc59fa5387343eda50"
      }, strings.headers.manageVersions));
    }
    return h("calcite-block", {
      key: "357a2c3e708f61505efa5e1a8f82a7c8ab4ac8dd",
      open: true,
      heading: serviceName
    }, comboboxVersions, actionManageVersions, tooltipManageVersions);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  _addVersionListEventListeners(versionList) {
    versionList.addEventListener("arcgisGetVersions", this._arcgisGetVersions);
    this._versionListEventListeners.set("arcgisGetVersions", this._arcgisGetVersions);
    versionList.addEventListener("arcgisManageVersion", this._arcgisManageVersion);
    this._versionListEventListeners.set("arcgisManageVersion", this._arcgisManageVersion);
    versionList.addEventListener("arcgisNewVersion", this._arcgisNewVersion);
    this._versionListEventListeners.set("arcgisNewVersion", this._arcgisNewVersion);
  }
  _removeVersionListEventListeners(versionList) {
    for (const [type, listener] of this._versionListEventListeners) {
      versionList.removeEventListener(type, listener);
    }
  }
  get el() {
    return getElement(this);
  }
};
var ArcgisVersionManagementVersionProperties = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisAlterVersion = createEvent(this, "arcgisAlterVersion", 7);
    this.arcgisCreateVersion = createEvent(this, "arcgisCreateVersion", 7);
    this.arcgisFlowItemBack = createEvent(this, "arcgisFlowItemBack", 7);
    this.arcgisFlowItemClose = createEvent(this, "arcgisFlowItemClose", 7);
    this._switchToVersion = true;
    this._handleCancel = () => {
      this.arcgisFlowItemBack.emit();
    };
    this._handleChange = (event) => {
      const {
        _mode: mode,
        _ownerName: ownerName,
        _versionName: versionName,
        versionPropertiesElementProps: {
          currentUser,
          serviceUrl,
          versionInfo
        }
      } = this;
      let {
        _alterVersionParameters: alterVersionParameters,
        _createVersionParameters: createVersionParameters
      } = this;
      if (mode === "create") {
        if (!createVersionParameters) {
          createVersionParameters = {
            access: "public",
            description: "",
            featureServerUrl: serviceUrl,
            ownerName: currentUser.toUpperCase(),
            versionName: ""
          };
        }
      }
      if (mode === "edit") {
        if (!alterVersionParameters) {
          alterVersionParameters = {
            featureServerUrl: serviceUrl,
            versionIdentifier: versionInfo.versionIdentifier,
            ownerName,
            versionName,
            access: versionInfo.access,
            description: versionInfo.description
          };
        }
      }
      switch (event.type) {
        case "calciteChipGroupSelect": {
          const name = event.target.label;
          const value = event.target.selectedItems[0].value;
          if (mode === "create") {
            createVersionParameters = __spreadValues(__spreadValues({}, createVersionParameters), {
              [name]: value
            });
          }
          if (mode === "edit") {
            alterVersionParameters = __spreadValues(__spreadValues({}, alterVersionParameters), {
              [name]: value
            });
          }
          break;
        }
        case "calciteInputTextInput": {
          const name = event.target.name;
          const value = event.target.value;
          if (mode === "create") {
            createVersionParameters = __spreadValues(__spreadValues({}, createVersionParameters), {
              [name]: value
            });
          }
          if (mode === "edit") {
            alterVersionParameters = __spreadValues(__spreadValues({}, alterVersionParameters), {
              [name]: value
            });
          }
          break;
        }
        case "calciteTextAreaInput": {
          const name = event.target.name;
          const value = event.target.value;
          if (mode === "create") {
            createVersionParameters = __spreadValues(__spreadValues({}, createVersionParameters), {
              [name]: value
            });
          }
          if (mode === "edit") {
            alterVersionParameters = __spreadValues(__spreadValues({}, alterVersionParameters), {
              [name]: value
            });
          }
          break;
        }
      }
      if (mode === "create") {
        if (createVersionParameters.access !== "public" && currentUser.toUpperCase() !== createVersionParameters.ownerName?.toUpperCase()) {
          this.switchToVersionCheckboxElement.checked = false;
          this.switchToVersionCheckboxElement.disabled = true;
        } else {
          this.switchToVersionCheckboxElement.disabled = false;
        }
        this._createVersionParameters = createVersionParameters;
      }
      if (mode === "edit") {
        this._alterVersionParameters = alterVersionParameters;
      }
    };
    this._handleClose = () => {
      this.arcgisFlowItemClose.emit();
    };
    this._handleSave = () => {
      const {
        _alterVersionParameters: alterVersionParameters,
        _createVersionParameters: createVersionParameters,
        _mode: mode,
        _switchToVersion: switchToVersion
      } = this;
      if (mode === "create") {
        this.arcgisCreateVersion.emit({
          createVersionParameters,
          switchToVersion
        });
      }
      if (mode === "edit") {
        this.arcgisAlterVersion.emit({
          alterVersionParameters
        });
      }
    };
    this._handleSwitchToVersionChange = (event) => {
      this._switchToVersion = event.target.checked;
    };
    this.versionPropertiesElementProps = void 0;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      const {
        versionPropertiesElementProps: {
          versionInfo
        }
      } = this;
      if (versionInfo) {
        this._mode = "edit";
        this._fullVersionName = versionInfo.versionIdentifier.name;
        this._ownerName = this._fullVersionName.substring(0, this._fullVersionName.lastIndexOf(".")).toUpperCase();
        this._versionName = this._fullVersionName.substring(this._fullVersionName.lastIndexOf(".") + 1);
      } else {
        this._mode = "create";
      }
    });
  }
  componentDidRender() {
    if (this._mode === "create") {
      this.versionNameInputElement?.setFocus();
    }
  }
  render() {
    const {
      versionPropertiesElementProps: {
        closable,
        currentUser,
        hasAdvEditingUte,
        state,
        strings,
        versionInfo
      },
      _mode: mode,
      _ownerName: ownerName,
      _versionName: versionName
    } = this;
    const buttons = h("div", {
      key: "135d4141e995bbf31123c16d900a1e274575aafb"
    }, h("calcite-button", {
      key: "44a78143d595fe108d1d312da6ba1bf340be77b8",
      appearance: "outline",
      slot: "footer",
      width: "half",
      onClick: this._handleCancel
    }, strings.actions.cancelSave), h("calcite-button", {
      key: "30b32b985a16d7841a444e638309b914cac1b406",
      slot: "footer",
      width: "half",
      onClick: this._handleSave
    }, strings.actions.saveVersion));
    const chipGroupAccessLevel = h("calcite-label", {
      key: "fb496917361a78043ca219cdb438f30414dd5acd"
    }, strings.input.versionAccess, h("calcite-chip-group", {
      key: "f81920bbcdc1bd18187b8107d039cd2a61b8e4dc",
      label: "access",
      onCalciteChipGroupSelect: this._handleChange,
      selectionMode: "single-persist"
    }, h("calcite-chip", {
      key: "9e55255b9114d1d239a17248ccd200fd097af5f2",
      selected: mode === "edit" && versionInfo.access === "public" || mode === "create",
      value: "public"
    }, strings.accessLevels.public), h("calcite-chip", {
      key: "03374352be5cfff98f80bb915fe75be762078258",
      selected: mode === "edit" && versionInfo.access === "protected",
      value: "protected"
    }, strings.accessLevels.protected), h("calcite-chip", {
      key: "452499aeb04c69b51101b774d91c0479753cf43b",
      selected: mode === "edit" && versionInfo.access === "private",
      value: "private"
    }, strings.accessLevels.private)));
    const inputDescription = h("calcite-label", {
      key: "11c04b89dfd8d85b68d322d552ece3bf5cc35567"
    }, strings.input.versionDescription, h("calcite-text-area", {
      key: "469568f5e6f902076338f1e7a99332d724ff54da",
      name: "description",
      onCalciteTextAreaInput: this._handleChange,
      resize: "vertical",
      value: mode === "edit" ? versionInfo.description : ""
    }));
    const inputName = h("calcite-label", {
      key: "14b2dabc65093f576b8ebca98cec745210353c0b"
    }, strings.input.versionName, h("calcite-input-text", {
      key: "04c0d47377ea59031fa88c38b996203b0d7c9175",
      ref: (node) => {
        this.versionNameInputElement = node;
      },
      name: "versionName",
      onCalciteInputTextInput: this._handleChange,
      maxLength: 62,
      value: mode === "edit" ? versionName : ""
    }));
    const inputOwner = h("calcite-label", {
      key: "b1773ab9fd4183852b522f465a6ba5347934c358"
    }, strings.input.versionOwner, h("calcite-input-text", {
      key: "e62366ef2e7c143e9f63be1ae177a6b1a3639bce",
      name: "ownerName",
      onCalciteInputTextInput: this._handleChange,
      disabled: !hasAdvEditingUte,
      value: mode === "edit" ? ownerName : currentUser.toUpperCase()
    }));
    const switchToVersionCheckbox = mode === "create" ? h("calcite-label", {
      layout: "inline"
    }, h("calcite-checkbox", {
      ref: (node) => {
        this.switchToVersionCheckboxElement = node;
      },
      checked: true,
      name: "switchToVersion",
      onCalciteCheckboxChange: this._handleSwitchToVersionChange
    }), strings.actions.switchToVersion) : void 0;
    return h("calcite-flow-item", {
      key: "79059091093b6a5c977b43c2530db56f86c98133",
      closable,
      description: versionInfo ? versionInfo.versionIdentifier.name : "",
      heading: versionInfo ? strings.actions.editVersion : strings.actions.newVersion,
      onCalciteFlowItemClose: this._handleClose
    }, h("calcite-panel", {
      key: "0eecfe1d97445089ef205e3c4dc569a23edc863c",
      loading: state === "executing"
    }, h("calcite-block", {
      key: "ae61afab2e9d622c41d4b2e0f833057ceba024e0",
      heading: "",
      open: true
    }, inputName, inputDescription, chipGroupAccessLevel, inputOwner, switchToVersionCheckbox, buttons)));
  }
  get el() {
    return getElement(this);
  }
};
export {
  ArcgisVersionManagementServiceItem as arcgis_version_management_service_item,
  ArcgisVersionManagementVersionProperties as arcgis_version_management_version_properties
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-version-management-service-item_2.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-version-management-service-item_2.entry-H2L3PPTU.js.map
