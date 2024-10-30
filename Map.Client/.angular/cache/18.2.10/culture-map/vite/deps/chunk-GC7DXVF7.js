import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/map-components/dist/esm/component-utils-de9339fe.js
function addHandles(element, handle) {
  if (Array.isArray(handle)) {
    element._watchHandles = [...element._watchHandles, ...handle];
  } else {
    element._watchHandles.push(handle);
  }
}
function attachToParent(component) {
  const parent = findClosestParent(component);
  if (!parent) {
    const referenceElement = resolveReferenceElement(component.referenceElement);
    if (!referenceElement) {
      return void 0;
    }
    attachToView(referenceElement, component, false);
    return referenceElement;
  }
  if (ignoreParentChange(parent, component.el.parent)) {
    return parent;
  }
  component.el.parent = parent;
  if (component.el.childElem) {
    component.el.childElem.ownedBy = component.el;
  }
  if (parent.tagName.toLowerCase() === "arcgis-expand") {
    attachToExpand(parent, component);
  } else if (parent.tagName.toLowerCase() === "arcgis-placement") {
    attachToPlacement(parent, component);
  } else {
    attachToView(parent, component, true);
  }
  return parent;
}
function findClosestParent({
  el
}) {
  for (let element = el.parentElement; element; element = element?.parentElement ?? null) {
    if (possibleParents.has(element.tagName.toLowerCase())) {
      return element;
    }
    if ("ownedBy" in element && element.ownedBy instanceof HTMLElement && possibleParents.has(element.ownedBy.tagName.toLowerCase())) {
      return element.ownedBy;
    }
  }
  return void 0;
}
var possibleParents = /* @__PURE__ */ new Set(["arcgis-map", "arcgis-scene", "arcgis-expand", "arcgis-placement"]);
function ignoreParentChange(newParent, oldParent) {
  if (newParent !== oldParent) {
    return false;
  }
  const tagName = newParent.tagName.toLowerCase();
  return tagName === "arcgis-expand" || tagName === "arcgis-placement";
}
function awaitReady(element, callback, eventName = "arcgisReady") {
  const maybeHasView = element;
  if (typeof maybeHasView.view?.ready === "boolean") {
    callback(maybeHasView.view);
  } else {
    element.addEventListener(eventName, () => awaitReady(element, callback, eventName), {
      once: true
    });
  }
}
var attachToExpand = (expandRef, component) => awaitReady(expandRef, (view) => {
  if (component.el.childElem && typeof expandRef.content === "object") {
    expandRef.content?.append(component.el.childElem);
  }
  expandRef.expandIcon = component.icon || component.widget?.icon || expandRef.expandIcon;
  component.position = expandRef.position;
  component.el.view = view;
});
var attachToPlacement = (placementRef, component) => awaitReady(placementRef, (view) => {
  if (component.el.childElem) {
    component.el.append(component.el.childElem);
  }
  component.position = placementRef.position;
  component.el.view = view;
});
var attachToView = (referenceElement, component, addToView) => awaitReady(referenceElement, (view) => {
  if (addToView) {
    addToViewUi(referenceElement, component);
  } else if (component.el.childElem) {
    component.el.append(component.el.childElem);
  }
  component.el.view = view;
}, "arcgisViewReadyChange");
function addToViewUi(referenceElement, component) {
  const el = component.el.childElem ?? component.el;
  const childElements = [...referenceElement.children];
  const childrenPositions = {};
  for (const child of childElements) {
    const position = child.getAttribute("position") ?? "manual";
    childrenPositions[position] ?? (childrenPositions[position] = []);
    childrenPositions[position].push({
      child,
      position,
      index: childElements.indexOf(child)
    });
  }
  const index = childrenPositions[component.position ?? "manual"]?.findIndex(({
    child
  }) => child === component.el);
  referenceElement.view.ui.remove(el);
  referenceElement.view.ui.add(el, {
    position: component.position,
    index
  });
}
function defineViewProperty(component) {
  let arcgisReadyEmitted = false;
  let view = component.el.view;
  const originalAccessor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(component.el), "view") ?? {
    get: () => view,
    set: (newView) => view = newView
  };
  Object.defineProperty(component.el, "view", {
    get: originalAccessor.get.bind(component),
    set: (newView) => {
      originalAccessor.set.call(component, newView);
      if (newView && !arcgisReadyEmitted) {
        arcgisReadyEmitted = true;
        component.arcgisReady.emit();
      }
    },
    configurable: true,
    enumerable: true
  });
  if (view) {
    component.el.view = view;
  }
}
function isNullOrEmptyString(value) {
  return value === void 0 || value === null || value === "";
}
function isNotSameCamera(camera, camera2) {
  return camera2 === void 0 || camera.position !== camera2.position || camera.heading !== camera2.heading || camera.tilt !== camera2.tilt;
}
function isNotSameEnvironment(environment, environment2) {
  return environment2 === void 0 || environment2?.atmosphereEnabled !== environment?.atmosphereEnabled || (environment2?.lighting).date !== (environment?.lighting).date || (environment2?.lighting).directShadowsEnabled !== (environment?.lighting).directShadowsEnabled || (environment2?.lighting).cameraTrackingEnabled !== (environment?.lighting).cameraTrackingEnabled || (environment2?.lighting).date !== (environment?.lighting).date || (environment2?.lighting).displayUTCOffset !== (environment?.lighting).displayUTCOffset;
}
function isNotSameViewpoint(viewpoint, viewpoint2) {
  return viewpoint2 === void 0 || viewpoint?.targetGeometry !== viewpoint2?.targetGeometry || viewpoint?.rotation !== viewpoint2?.rotation || viewpoint?.scale !== viewpoint2?.scale;
}
function parseCenter(newValue, view) {
  if (typeof newValue === "string") {
    const center = newValue.split(",").map(Number);
    if (center[0] !== view?.center.longitude && center[1] !== view?.center.latitude) {
      return center;
    }
  } else if (Array.isArray(newValue)) {
    if (newValue[0] !== view?.center.longitude && newValue[1] !== view?.center.latitude) {
      return newValue;
    }
  } else if (newValue && !view?.center.equals(newValue)) {
    return newValue;
  }
  return void 0;
}
function referenceElementHelper(component, refElement) {
  return __async(this, null, function* () {
    if (refElement == null) {
      return;
    } else if (typeof refElement === "string") {
      component.el.view = yield updateForView(refElement);
    } else if (component.widget) {
      component.el.view = refElement.view;
    }
  });
}
function updateForView(referenceElement) {
  return __async(this, null, function* () {
    const viewRef = resolveReferenceElement(referenceElement);
    return yield new Promise((resolve) => {
      if (typeof viewRef?.view?.ready === "boolean") {
        resolve(viewRef.view);
      } else if (viewRef) {
        viewRef.addEventListener("arcgisViewReadyChange", () => resolve(viewRef.view), {
          once: true
        });
      }
    });
  });
}
function resolveReferenceElement(referenceElement) {
  if (typeof referenceElement !== "string") {
    return referenceElement ?? void 0;
  }
  const isComplexSelector = referenceElement.includes("#") || referenceElement.includes(".") || referenceElement.includes("[");
  const resolved = (isComplexSelector ? void 0 : document.querySelector(`#${referenceElement}`)) ?? document.querySelector(referenceElement);
  return resolved ?? void 0;
}

export {
  addHandles,
  attachToParent,
  defineViewProperty,
  isNullOrEmptyString,
  isNotSameCamera,
  isNotSameEnvironment,
  isNotSameViewpoint,
  parseCenter,
  referenceElementHelper
};
/*! Bundled license information:

@arcgis/map-components/dist/esm/component-utils-de9339fe.js:
  (*!
   * All material copyright Esri, All Rights Reserved, unless otherwise specified.
   * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
   * v4.30.7
   *)
*/
//# sourceMappingURL=chunk-GC7DXVF7.js.map
