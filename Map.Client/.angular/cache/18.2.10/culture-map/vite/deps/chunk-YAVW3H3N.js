import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import {
  forceUpdate
} from "./chunk-2P72IR2Y.js";

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
//# sourceMappingURL=chunk-YAVW3H3N.js.map
