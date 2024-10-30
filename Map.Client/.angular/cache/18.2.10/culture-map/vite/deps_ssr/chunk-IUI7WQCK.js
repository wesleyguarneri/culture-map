import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  makeT9nController
} from "./chunk-M4K2V36W.js";
import {
  AccessorController,
  accessorSupport,
  proxyExports
} from "./chunk-QPBMOSKQ.js";
import {
  attachToParent
} from "./chunk-RXKDWJON.js";
import {
  getAssetPath
} from "./chunk-SKDTV3QX.js";
import {
  __async,
  __superGet
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/useT9n-e78c8d12.js
var makeViewModelController = (loadViewModel, _options) => (component, options) => proxy(component, loadViewModel, options);
var ViewModelController = class _ViewModelController extends AccessorController {
  hostConnected() {
    if (this.component.manager.didLoadCalled) {
      attachToParent(this.component);
    }
  }
  hostLoad() {
    return __async(this, null, function* () {
      yield __superGet(_ViewModelController.prototype, this, "hostLoad").call(this);
      if (this.component.manager.destroyed) {
        return;
      }
      this._watchMetaProperties();
      accessorSupport.reEmitAccessorEvents(this, this._instance, this.reactiveUtils, "viewModel");
    });
  }
  hostLoaded() {
    const {
      el
    } = this.component;
    const childNode = el.shadowRoot?.firstElementChild ?? el.firstElementChild ?? void 0;
    el.childElem = childNode ?? el.childElem;
    if (el.childElem === void 0 && false) {
      throw new Error("Unable to find component's root child");
    }
    let arcgisReadyEmitted = false;
    const currentView = this.component.el.view;
    Object.defineProperty(this.component.el, "view", {
      get: () => this._instance.view,
      set: (view) => {
        this._instance.view = view;
        this._watchViewDestroy();
        this.component.requestUpdate();
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
  /**
   * Destroy the component if view gets destroyed. Note, that when view is
   * destroyed, component disconnect is triggered, which will destroy the
   * component in 1s but that can be too late, because in the meanwhile,
   * a watcher on the widget/viewModel instance may get triggered, and throw
   * an error if it's not able to access this.view.map or etc
   * (happens in VersionManagementViewModel for example).
   * We can't check for this in disconnectedCallback though as, if the entire
   * component tree is removed, the disconnect for the component will be
   * triggered before that of arcgis-map, so the view might not be destroyed
   * yet at that point.
   */
  _watchViewDestroy() {
    this._watchViewDestroyHandle?.remove();
    this._watchViewDestroyHandle = this.reactiveUtils.when(() => this.component.el.view?.destroyed === true, () => void this.component.destroy().catch(console.error), {
      sync: true
    });
  }
};
var proxy = proxyExports(ViewModelController);
var useT9n = makeT9nController(getAssetPath);

export {
  makeViewModelController,
  useT9n
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/useT9n-e78c8d12.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-IUI7WQCK.js.map
