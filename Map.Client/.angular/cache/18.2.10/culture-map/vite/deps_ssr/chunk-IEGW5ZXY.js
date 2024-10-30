import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  AccessorController,
  accessorSupport,
  proxyExports
} from "./chunk-QPBMOSKQ.js";
import {
  attachToParent
} from "./chunk-RXKDWJON.js";
import {
  __async,
  __superGet
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/useWidget-9b153437.js
var makeWidgetController = (loadWidget, _options) => (component, options) => proxy(component, loadWidget, options);
var WidgetController = class _WidgetController extends AccessorController {
  constructor(component, _loadAccessor, _options) {
    super(component, _loadAccessor, _options);
    this._watchedViewModelProperties = /* @__PURE__ */ new Map();
    this._watchedVisibleElementsProperties = {};
    this._isBindingViewModel = {
      value: true
    };
    Object.defineProperty(this.exports, "viewModel", {
      value: accessorSupport.makeGetterProxy(component, this._watchedViewModelProperties, this._isBindingViewModel)
    });
    Object.defineProperty(this.exports, "visibleElements", {
      value: this._makeVisibleElementsBinder()
    });
  }
  hostConnected() {
    super.hostConnected();
    this._isBindingViewModel.value = false;
    if (this.component.manager.didLoadCalled) {
      attachToParent(this.component);
    }
  }
  hostLoad() {
    return __async(this, null, function* () {
      this._watchedProperties.delete("viewModel");
      yield __superGet(_WidgetController.prototype, this, "hostLoad").call(this);
      if (this.component.manager.destroyed) {
        return;
      }
      this._watchMetaProperties();
      accessorSupport.reEmitAccessorEvents(this, this._instance, this.reactiveUtils, "widget");
      this.onLifecycle(() => this.reactiveUtils.watch(() => this._instance.viewModel, (newViewModel) => {
        this.component.viewModel = newViewModel;
      }, {
        initial: true
      }));
      const viewModel = this._instance.viewModel;
      if (typeof viewModel === "object") {
        accessorSupport.reEmitAccessorEvents(this, viewModel, this.reactiveUtils, "viewModel");
        accessorSupport.watchComponentUpdates(this, viewModel, this._watchedViewModelProperties);
        accessorSupport.watchAccessorUpdates(this, viewModel, this._watchedViewModelProperties);
      } else if (this._watchedViewModelProperties.size > 0) {
        throw new Error(`The widget does not have a viewModel to bind to. Tried to bind the following properties: ${Array.from(this._watchedViewModelProperties.keys()).join(", ")}`);
      }
      const visibleElements = Object.entries(this._watchedVisibleElementsProperties);
      if (visibleElements.length > 0) {
        this.onLifecycle(() => visibleElements.map(([prop, propertyChain]) => {
          let base = this._instance.visibleElements ?? {};
          let defaultVisible = void 0;
          for (const key of propertyChain.slice(0, -1)) {
            if (typeof base[key] === "object" && base[key] !== null) {
              base = base[key];
            } else {
              defaultVisible = Boolean(base[key]);
              break;
            }
          }
          if (defaultVisible === void 0) {
            defaultVisible = Boolean(base[propertyChain.slice(-1)[0]] ?? true);
          }
          prop.startsWith("hide") ? !defaultVisible : defaultVisible;
          const hideShowInName = prop.startsWith("hide") || prop.startsWith("show");
          const shouldFlip = hideShowInName ? prop.startsWith("hide") : defaultVisible;
          const genericComponent = this.component;
          if (typeof genericComponent[prop] === "boolean") {
            this._updateWidgetVisibleElement(propertyChain, genericComponent[prop], shouldFlip);
          } else {
            genericComponent[prop] = false;
          }
          return this.watch(prop, (rawVisible) => this._updateWidgetVisibleElement(propertyChain, rawVisible, shouldFlip));
        }));
      }
    });
  }
  _updateWidgetVisibleElement(propertyChain, propValue, shouldFlip) {
    let base = this._instance.visibleElements ?? {};
    for (const key of propertyChain.slice(0, -1)) {
      if (typeof base[key] !== "object" || base[key] === null) {
        base[key] = {};
      }
      base = base[key];
    }
    const visible = Boolean(shouldFlip ? !propValue : propValue);
    base[propertyChain.at(-1)] = visible;
  }
  hostLoaded() {
    const {
      el
    } = this.component;
    el.childElem ?? (el.childElem = document.createElement("div"));
    this._instance.container = el.childElem;
    let arcgisReadyEmitted = false;
    const currentView = this.component.el.view;
    Object.defineProperty(this.component.el, "view", {
      get: () => this._instance.view ?? this._instance.viewModel?.view,
      set: (view) => {
        if (!("view" in this._instance) && typeof this._instance.viewModel === "object") {
          this._instance.viewModel.view = view;
        } else {
          this._instance.view = view;
        }
        this._watchViewDestroy();
        if (!arcgisReadyEmitted) {
          arcgisReadyEmitted = true;
          this.component.arcgisReady.emit();
        }
      },
      configurable: true,
      enumerable: true
    });
    if (currentView) {
      this._instance.view = currentView;
    }
    if (this.component.el.isConnected) {
      attachToParent(this.component);
      this._watchViewDestroy();
    }
  }
  hostDisconnected() {
    if (typeof this.component.el.childElem === "object") {
      this.component.el.view?.ui?.remove(this.component.el.childElem);
    }
  }
  hostDestroy() {
    super.hostDestroy();
    this._watchViewDestroyHandle?.remove();
  }
  _watchMetaProperties() {
    this.watch("position", (position) => {
      if (this.component.el.childElem != null && typeof position === "string") {
        attachToParent(this.component);
      }
    });
    this.watch("referenceElement", () => attachToParent(this.component));
  }
  _makeVisibleElementsBinder() {
    return new Proxy({}, {
      has: (target, prop) => typeof prop === "string" || Reflect.has(target, prop),
      get: (target, prop) => {
        if (typeof prop === "symbol" || prop in Promise.prototype) {
          return Reflect.get(target, prop);
        }
        const propertyChain = [prop];
        const proxy2 = this._makeRecursiveProxy(propertyChain);
        return this.component.manager.trackPropKey((resolvedKey) => {
          if (resolvedKey === void 0) {
            throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");
          }
          this.component[resolvedKey] = false;
          this._watchedVisibleElementsProperties[resolvedKey] = propertyChain;
        }, proxy2);
      }
    });
  }
  _makeRecursiveProxy(propertyChain) {
    const chain = new Proxy({}, {
      get: (target, prop) => {
        const value = Reflect.get(target, prop);
        if (typeof prop === "symbol" || prop in Promise.prototype) {
          return value;
        }
        propertyChain.push(prop);
        return chain;
      }
    });
    return chain;
  }
  /**
   * Destroy the component if view gets destroyed. Note, that when view is
   * destroyed, component disconnect is triggered, which will destroy the
   * component in 1s but that can be too late, because in the meanwhile,
   * a watcher on the widget/viewModel instance may get triggered, and throw
   * an error if it's not able to access this.view.map or etc
   * (happens in VersionManagementViewModel for example).
   * We can't check for this in disconnectedCallback though as even though
   * view.destroy() does trigger disconnect on all map-components, the
   * view.destroyed is not yet set to true when disconnect is triggered.
   */
  _watchViewDestroy() {
    this._watchViewDestroyHandle?.remove();
    this._watchViewDestroyHandle = this.reactiveUtils.when(() => this.component.el.view?.destroyed === true, () => void this.component.destroy().catch(console.error), {
      sync: true
    });
  }
};
var proxy = proxyExports(WidgetController);

export {
  makeWidgetController
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/useWidget-9b153437.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-IEGW5ZXY.js.map
