import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  devToolsAwareTimeout
} from "./chunk-OHJC6MYB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/disconnected-602dc61b.js
function onDisconnectedHelper(element) {
  if (element.el.childElem) {
    if (!element.el.isConnected) {
      if (element.view?.ui) {
        element.view.ui.remove(element.el.childElem);
      } else if (element.widget?.view) {
        element.widget.view.ui.remove(element.el.childElem);
      }
      if (element._watchHandles) {
        element._watchHandles.forEach((handle) => {
          handle.remove();
        });
      }
      element._watchHandles = [];
      element.widget?.destroy();
    }
  } else {
    devToolsAwareTimeout(() => {
      if (!element.el.isConnected) {
        if (element.view?.ui) {
          element.view.ui.remove(element.el);
        } else if (element.widget?.view) {
          element.widget.view.ui.remove(element.el);
        }
        if (element._watchHandles) {
          element._watchHandles.forEach((handle) => {
            handle.remove();
          });
        }
        element._watchHandles = [];
        element.widget?.destroy();
      }
    }, 1e3);
  }
}

export {
  onDisconnectedHelper
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/disconnected-602dc61b.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-2HIBLSHK.js.map
