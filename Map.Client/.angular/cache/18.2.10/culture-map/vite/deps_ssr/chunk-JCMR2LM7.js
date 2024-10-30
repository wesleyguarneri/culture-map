import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import {
  forceUpdate
} from "./chunk-IAO6HACY.js";

// ../../../node_modules/@esri/calcite-components/dist/components/conditionalSlot.js
var mutationObserver;
var observerOptions = {
  childList: true
};
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = createObserver("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
function disconnectConditionalSlotComponent(component) {
  mutationObserver.unobserve(component.el);
}
function processMutations(mutations) {
  mutations.forEach(({
    target
  }) => {
    forceUpdate(target);
  });
}

export {
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
};
/*! Bundled license information:

@esri/calcite-components/dist/components/conditionalSlot.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-JCMR2LM7.js.map
