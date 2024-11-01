import {
  componentOnReady
} from "./chunk-D25A7Z5T.js";
import {
  closestElementCrossShadowBoundary,
  isBefore,
  queryElementRoots
} from "./chunk-RGUNAV4Z.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/label.js
var labelClickEvent = "calciteInternalLabelClick";
var labelConnectedEvent = "calciteInternalLabelConnected";
var labelDisconnectedEvent = "calciteInternalLabelDisconnected";
var labelTagName = "calcite-label";
var labelToLabelables = /* @__PURE__ */ new WeakMap();
var onLabelClickMap = /* @__PURE__ */ new WeakMap();
var onLabelConnectedMap = /* @__PURE__ */ new WeakMap();
var onLabelDisconnectedMap = /* @__PURE__ */ new WeakMap();
var unlabeledComponents = /* @__PURE__ */ new Set();
var findLabelForComponent = (componentEl) => {
  const {
    id
  } = componentEl;
  const forLabel = id && queryElementRoots(componentEl, {
    selector: `${labelTagName}[for="${id}"]`
  });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = closestElementCrossShadowBoundary(componentEl, labelTagName);
  if (!parentLabel || // labelable components within other custom elements are not considered labelable
  hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, {
    once: true
  });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, {
    composed: true,
    bubbles: true
  }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements.filter((el) => el !== componentEl && el !== label).filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
function connectLabel(component) {
  if (!component) {
    return;
  }
  const labelEl = findLabelForComponent(component.el);
  if (onLabelClickMap.has(labelEl) && labelEl === component.labelEl || !labelEl && unlabeledComponents.has(component)) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const labelables = labelToLabelables.get(labelEl) || [];
    labelables.push(component);
    labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
    if (!onLabelClickMap.has(component.labelEl)) {
      onLabelClickMap.set(component.labelEl, onLabelClick);
      component.labelEl.addEventListener(labelClickEvent, onLabelClick);
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  } else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
function disconnectLabel(component) {
  if (!component) {
    return;
  }
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const labelables = labelToLabelables.get(component.labelEl);
  if (labelables.length === 1) {
    component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
    onLabelClickMap.delete(component.labelEl);
  }
  labelToLabelables.set(component.labelEl, labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder));
  component.labelEl = null;
}
function sortByDOMOrder(a, b) {
  return isBefore(a.el, b.el) ? -1 : 1;
}
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  const labelClickTarget = event.detail.sourceEvent.target;
  const labelables = labelToLabelables.get(this);
  const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
  const labelableChildClicked = labelables.includes(clickedLabelable);
  if (labelableChildClicked) {
    return;
  }
  const firstLabelable = labelables[0];
  if (firstLabelable.disabled) {
    return;
  }
  firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}
function associateExplicitLabelToUnlabeledComponent(label) {
  return __async(this, null, function* () {
    yield componentOnReady(label);
    const alreadyLabeled = labelToLabelables.has(label);
    if (alreadyLabeled) {
      return;
    }
    const forComponentEl = label.ownerDocument?.getElementById(label.for);
    if (!forComponentEl) {
      return;
    }
    requestAnimationFrame(() => {
      for (const labelable of unlabeledComponents) {
        if (labelable.el === forComponentEl) {
          connectLabel(labelable);
          break;
        }
      }
    });
  });
}

export {
  labelConnectedEvent,
  labelDisconnectedEvent,
  connectLabel,
  disconnectLabel,
  getLabelText,
  associateExplicitLabelToUnlabeledComponent
};
/*! Bundled license information:

@esri/calcite-components/dist/components/label.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-PBDQTCSC.js.map
