import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  whenTransitionDone
} from "./chunk-AHYZNZSK.js";
import {
  readTask
} from "./chunk-IAO6HACY.js";

// ../../../node_modules/@esri/calcite-components/dist/components/openCloseComponent.js
var internalReadTask = readTask;
function isOpen(component) {
  return "opened" in component ? component.opened : component.open;
}
function onToggleOpenCloseComponent(component) {
  internalReadTask(() => {
    if (!component.transitionEl) {
      return;
    }
    whenTransitionDone(component.transitionEl, component.openTransitionProp, () => {
      if (isOpen(component)) {
        component.onBeforeOpen();
      } else {
        component.onBeforeClose();
      }
    }, () => {
      if (isOpen(component)) {
        component.onOpen();
      } else {
        component.onClose();
      }
    });
  });
}

export {
  onToggleOpenCloseComponent
};
/*! Bundled license information:

@esri/calcite-components/dist/components/openCloseComponent.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-XKIWE4VL.js.map
