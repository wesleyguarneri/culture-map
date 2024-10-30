import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  makeViewModelController,
  useT9n
} from "./chunk-IUI7WQCK.js";
import {
  usePropertyChange
} from "./chunk-M4K2V36W.js";
import {
  useControllerManager
} from "./chunk-QPBMOSKQ.js";
import {
  classes,
  newWidgetsHomeHomeViewModel
} from "./chunk-OHJC6MYB.js";
import "./chunk-RXKDWJON.js";
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-SKDTV3QX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/arcgis-home.entry.js
var globalCss = {
  anchor: "esri-widget__anchor",
  anchorDisabled: "esri-widget__anchor--disabled",
  button: "esri-button",
  buttonDisabled: "esri-button--disabled",
  buttonHalf: "esri-button--half",
  buttonSecondary: "esri-button--secondary",
  buttonSmall: "esri-button--small",
  buttonTertiary: "esri-button--tertiary",
  buttonThird: "esri-button--third",
  disabled: "esri-disabled",
  disabledElement: "esri-disabled-element",
  empty: "esri-widget__content--empty",
  emptyIllustration: "esri-widget__content-illustration--empty",
  heading: "esri-widget__heading",
  hidden: "esri-hidden",
  input: "esri-input",
  interactive: "esri-interactive",
  loader: "esri-widget__loader",
  loaderAnimation: "esri-widget__loader-animation",
  loaderText: "esri-widget__loader-text",
  menu: "esri-menu",
  menuHeader: "esri-menu__header",
  menuItem: "esri-menu__list-item",
  menuItemActive: "esri-menu__list-item--active",
  menuItemFocus: "esri-menu__list-item--focus",
  menuList: "esri-menu__list",
  noBookmarksIcon: "esri-widget__no-bookmark-icon",
  panel: "esri-widget--panel",
  panelHeightOnly: "esri-widget--panel-height-only",
  primaryTick: "primary-tick",
  primaryTickAmPm: "primary-tick__ampm",
  primaryTickLabel: "primary-tick__label",
  rotating: "esri-rotating",
  secondaryTick: "secondary-tick",
  select: "esri-select",
  table: "esri-widget__table",
  ui: "esri-component",
  widget: "esri-widget",
  widgetButton: "esri-widget--button",
  widgetButtonActive: "esri-widget--button-active",
  widgetDisabled: "esri-widget--disabled"
};
var css = {
  base: "esri-home"
};
var useHomeViewModel = makeViewModelController(newWidgetsHomeHomeViewModel);
var ArcgisHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.arcgisReady = createEvent(this, "arcgisReady", 7);
    this.viewModelGo = createEvent(this, "arcgisGo", 7);
    this.arcgisPropertyChange = createEvent(this, "arcgisPropertyChange", 7);
    this.manager = useControllerManager(this);
    this.messages = useT9n();
    this.viewModel = useHomeViewModel(this);
    this.arcgisPropertyChange = usePropertyChange()("state");
    this._go = () => {
      const {
        viewModel
      } = this;
      if (viewModel.state === "going-home") {
        viewModel.cancelGo();
      } else {
        viewModel.go();
      }
    };
    this.goToOverride = this.viewModel.goToOverride;
    this.icon = "home";
    this.label = void 0;
    this.position = "top-left";
    this.referenceElement = void 0;
    this.viewpoint = this.viewModel.viewpoint;
    this.state = this.viewModel.state;
    this.autoDestroyDisabled = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * This function provides the ability to interrupt and cancel the process
   * of navigating the view back to the view's initial extent.
   *
   * @since 4.9
   */
  cancelGo() {
    return __async(this, null, function* () {
      this.viewModel.cancelGo();
    });
  }
  /** Permanently destroy the component */
  destroy() {
    return __async(this, null, function* () {
      yield this.manager.destroy();
    });
  }
  /**
   * Animates the view to the initial Viewpoint of the view or the
   * value of `viewpoint`
   */
  go() {
    return __async(this, null, function* () {
      return this.viewModel.go();
    });
  }
  render() {
    const {
      messages,
      icon
    } = this;
    const state = this.viewModel?.state;
    const isLoading = state === "going-home";
    return h("div", {
      key: "1cad33e6ced15f9d1983419cfea451283142b84e",
      class: classes(css.base, globalCss.widget)
    }, h("calcite-button", {
      key: "8667cb2f7e0204af1c28f9f4fcbaab4607ad5acd",
      class: globalCss.widgetButton,
      disabled: state === "disabled",
      "icon-start": isLoading ? void 0 : icon,
      kind: "neutral",
      label: messages.componentLabel,
      onClick: this._go,
      // Workaround for https://github.com/Esri/calcite-design-system/issues/8490
      scale: isLoading ? "s" : "m",
      title: state === "going-home" ? messages.cancel : messages.title
    }, isLoading ? (
      // Cannot use calcite-button's loading=true. See https://devtopia.esri.com/WebGIS/arcgis-js-api/pull/58358#discussion_r1106927
      h("calcite-loader", {
        inline: true,
        label: ""
      })
    ) : null));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return getElement(this);
  }
};
export {
  ArcgisHome as arcgis_home
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/arcgis-home.entry.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=arcgis-home.entry-MABKVDTM.js.map
