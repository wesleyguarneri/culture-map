import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-IEFK3IO5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-version-management-version-item_2.entry.js
var ArcgisVersionManagementVersionItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisManageVersion = createEvent(this, "arcgisManageVersion", 7);
    this.versionItemElementProps = void 0;
  }
  render() {
    const {
      versionItemElementProps: {
        currentUser,
        currentVersionIdentifier,
        hasAdvEditingUte,
        isVersioningApiAvailable,
        serviceUrl,
        strings: {
          actions
        },
        versionInfo
      }
    } = this;
    const fullVersionName = versionInfo.versionIdentifier.name;
    const versionName = fullVersionName.substring(fullVersionName.lastIndexOf(".") + 1);
    const versionOwner = fullVersionName.substring(0, fullVersionName.lastIndexOf(".")).toUpperCase();
    const guid = versionInfo.versionIdentifier.guid;
    const actionElementId = `actionSwitchToVersion_${guid}`;
    const canEditVersion = versionOwner.toUpperCase() === currentUser.toUpperCase() && isVersioningApiAvailable && hasAdvEditingUte;
    const isCurrentVersion = currentVersionIdentifier.guid === versionInfo.versionIdentifier.guid;
    const startActionChangeVersion = h("calcite-action", {
      key: "2f6e3eeea7fc7736a1199a29668894dd80dac94a",
      disabled: isCurrentVersion,
      id: actionElementId,
      icon: "code-branch",
      text: "",
      onClick: () => {
        this.arcgisManageVersion.emit({
          actionType: "changeVersion",
          serviceUrl,
          versionInfo
        });
      },
      slot: "actions-start"
    });
    const startActionChangeVersionTooltip = !isCurrentVersion ? h("calcite-tooltip", {
      "overlay-positioning": "fixed",
      referenceElement: actionElementId
    }, h("span", null, actions.switchToVersion)) : void 0;
    return h("calcite-list-item", {
      key: "74b8319a683737aaaf8cfc5f06147eaa401195a6",
      description: versionOwner,
      label: versionName,
      selected: false,
      value: guid
    }, startActionChangeVersion, startActionChangeVersionTooltip, h("calcite-action-menu", {
      key: "535784b416984e07bbfc44a275dfc5c81fb55daf",
      "overlay-positioning": "fixed",
      slot: "actions-end",
      label: ""
    }, h("calcite-action", {
      key: "5e89410767d43ab3ce8a6e3ac6ef5d2db5542ea7",
      disabled: isCurrentVersion,
      icon: "code-branch",
      onClick: () => {
        this.arcgisManageVersion.emit({
          actionType: "changeVersion",
          serviceUrl,
          versionInfo
        });
      },
      scale: "s",
      text: actions.switchToVersion,
      textEnabled: true
    }), h("calcite-action", {
      key: "cf3ab694540fb02bcfa7c5ef9557fcb6a93746c1",
      disabled: !canEditVersion || isCurrentVersion,
      icon: "code-branch-edit",
      onClick: () => {
        this.arcgisManageVersion.emit({
          actionType: "editVersion",
          serviceUrl,
          versionInfo
        });
      },
      scale: "s",
      text: actions.editVersion,
      textEnabled: true
    }), h("calcite-action", {
      key: "bb646b907dbbc62283a15295a265912ba45d73a4",
      disabled: !canEditVersion || canEditVersion && isCurrentVersion,
      icon: "trash",
      onClick: () => {
        this.arcgisManageVersion.emit({
          actionType: "deleteVersion",
          serviceUrl,
          versionInfo
        });
      },
      scale: "s",
      text: actions.deleteVersion,
      textEnabled: true
    })));
  }
  get el() {
    return getElement(this);
  }
};
var ArcgisVersionManagementVersionList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisNewVersion = createEvent(this, "arcgisNewVersion", 7);
    this.arcgisGetVersions = createEvent(this, "arcgisGetVersions", 7);
    this.arcgisManageVersion = createEvent(this, "arcgisManageVersion", 7);
    this._handleFilterChange = () => {
      const {
        versionListElementProps: {
          versionInfos
        }
      } = this;
      const filterText = this._filterInputElement.value.toUpperCase();
      this._filteredVersionInfos = filterText === "" ? versionInfos : versionInfos.filter((version) => version.versionIdentifier.name.toUpperCase().includes(filterText) || version.versionIdentifier.guid.toUpperCase().includes(filterText));
      if (this._filteredVersionInfos.length) {
        this.currentPage = 1;
      }
    };
    this._handleNoticeClosed = () => {
      this.versionListElementProps = __spreadProps(__spreadValues({}, this.versionListElementProps), {
        executionError: void 0
      });
    };
    this._handlePaginationChange = (event) => {
      this.currentPage = event.target.startItem;
    };
    this.currentPage = 1;
    this.versionListElementProps = void 0;
    this._filteredVersionInfos = void 0;
  }
  propertiesChangeHandler(newValue, oldValue) {
    if (oldValue.versionInfos !== newValue.versionInfos) {
      this._filteredVersionInfos = this.versionListElementProps.versionInfos;
      if (this._filterInputElement) {
        this._handleFilterChange();
      }
    }
  }
  componentWillLoad() {
    this._filteredVersionInfos = this.versionListElementProps.versionInfos;
  }
  componentDidRender() {
    this._filterInputElement?.setFocus();
  }
  render() {
    const {
      currentPage,
      versionListElementProps: {
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
        strings: {
          headers
        },
        strings,
        versionInfos
      }
    } = this;
    const currentVersionIdentifierBlock = h("calcite-block", {
      heading: headers.currentVersion,
      description: currentVersionIdentifier.name,
      overlayPositioning: "fixed"
    });
    const actionRefreshVersions = h("calcite-action", {
      id: "actionRefreshVersions",
      icon: "refresh",
      text: "",
      onClick: () => {
        this.arcgisGetVersions.emit({
          serviceUrl
        });
      },
      slot: "header-actions-end"
    }, h("calcite-tooltip", {
      "overlay-positioning": "fixed",
      referenceElement: "actionRefreshVersions"
    }, h("span", null, strings.actions.refreshVersions)));
    this._paginatedVersionInfos = this._filteredVersionInfos.length > pageSize ? this._paginate(this._filteredVersionInfos, pageSize, currentPage) : this._filteredVersionInfos;
    const pagination = this._filteredVersionInfos.length > pageSize ? h("calcite-pagination", {
      onCalcitePaginationChange: this._handlePaginationChange,
      pageSize: 1,
      startItem: currentPage,
      totalItems: Math.ceil(this._filteredVersionInfos.length / pageSize)
    }) : void 0;
    const versionItems = this._paginate(this._paginatedVersionInfos, pageSize, 1).map((versionInfo) => {
      const versionItemElementProps = {
        currentUser,
        currentVersionIdentifier,
        isCurrentVersionCard: false,
        hasAdvEditingUte,
        isVersioningApiAvailable,
        serviceUrl,
        strings,
        versionInfo
      };
      return h("arcgis-version-management-version-item", {
        versionItemElementProps
      });
    });
    const versionFilter = versionInfos.length > pageSize ? h("calcite-block", {
      heading: "",
      open: true
    }, h("calcite-input-text", {
      ref: (node) => {
        this._filterInputElement = node;
      },
      clearable: true,
      icon: "search",
      onCalciteInputTextInput: this._handleFilterChange,
      placeholder: strings.actions.searchVersions
    })) : void 0;
    const versionList = h("calcite-list", null, versionItems);
    const newVersionButton = isVersioningApiAvailable && hasAdvEditingUte ? h("calcite-fab", {
      appearance: "outline-fill",
      slot: "fab",
      textEnabled: true,
      text: strings.actions.newVersion,
      onClick: () => {
        this.arcgisNewVersion.emit({
          serviceUrl
        });
      }
    }) : void 0;
    const noticeError = executionError ? h("calcite-notice", {
      onCalciteNoticeClose: this._handleNoticeClosed,
      class: "notice",
      closable: true,
      kind: "warning",
      open: true,
      scale: "s",
      slot: "footer",
      width: "full"
    }, h("div", {
      slot: "message"
    }, this._getExecutionError(executionError))) : void 0;
    return h("calcite-flow-item", {
      closable,
      description: serviceName,
      heading
    }, h("calcite-panel", {
      loading: state === "executing"
    }, currentVersionIdentifierBlock, h("calcite-panel", {
      heading: this._filteredVersionInfos.length ? `${strings.headers.manageVersions} (${this._filteredVersionInfos.length})` : strings.headers.manageVersions
    }, actionRefreshVersions, versionFilter, versionList, newVersionButton), pagination, noticeError));
  }
  _getExecutionError(executionError) {
    const {
      versionListElementProps: {
        strings: {
          executionErrors
        }
      }
    } = this;
    switch (executionError) {
      case "no-advanced-editing-user-type-extension":
        return executionErrors.noAdvancedEditingUserTypeExtension;
      case "no-feature-service-found":
        return executionErrors.noFeatureServiceFound;
      case "no-valid-enterprise-version":
        return executionErrors.notValidEnterpriseVersion;
      case "no-valid-version-name":
        return executionErrors.invalidVersionName;
      default:
        return executionError;
    }
  }
  _paginate(versionInfos, pageSize, pageNumber) {
    return versionInfos.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "versionListElementProps": ["propertiesChangeHandler"]
    };
  }
};
export {
  ArcgisVersionManagementVersionItem as arcgis_version_management_version_item,
  ArcgisVersionManagementVersionList as arcgis_version_management_version_list
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-version-management-version-item_2.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-version-management-version-item_2.entry-ZJUF2AQN.js.map
