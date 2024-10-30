import {
  closestElementCrossShadowBoundary,
  queryElementRoots
} from "./chunk-RGUNAV4Z.js";
import {
  h
} from "./chunk-2P72IR2Y.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/form.js
var componentsWithInputEvent = ["calcite-input", "calcite-input-number", "calcite-input-text", "calcite-text-area"];
function getClearValidationEventName(componentTag) {
  const componentTagCamelCase = componentTag.split("-").map((part, index) => index === 0 ? part : `${part[0].toUpperCase()}${part.slice(1)}`).join("");
  const clearValidationEvent = `${componentTagCamelCase}${componentsWithInputEvent.includes(componentTag) ? "Input" : "Change"}`;
  return clearValidationEvent;
}
var hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
  return "checked" in component;
}
var onFormResetMap = /* @__PURE__ */ new WeakMap();
var formComponentSet = /* @__PURE__ */ new WeakSet();
function hasRegisteredFormComponentParent(form, formComponentEl) {
  const hasParentComponentWithFormIdSet = closestElementCrossShadowBoundary(formComponentEl.parentElement, "[form]");
  if (hasParentComponentWithFormIdSet) {
    return true;
  }
  const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
  let hasRegisteredFormComponentParent2 = false;
  form.addEventListener(formComponentRegisterEventName, (event) => {
    hasRegisteredFormComponentParent2 = event.composedPath().some((element) => formComponentSet.has(element));
    event.stopPropagation();
  }, {
    once: true
  });
  formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
    bubbles: true,
    composed: true
  }));
  return hasRegisteredFormComponentParent2;
}
function displayValidationMessage(component, {
  status,
  message,
  icon
}) {
  if ("status" in component) {
    component.status = status;
  }
  if ("validationIcon" in component && typeof component.validationIcon !== "string") {
    component.validationIcon = icon;
  }
  if ("validationMessage" in component && !component.validationMessage) {
    component.validationMessage = message;
  }
}
function getValidationComponent(el) {
  if (el.nodeName === "CALCITE-RADIO-BUTTON") {
    return closestElementCrossShadowBoundary(el, "calcite-radio-button-group");
  }
  return el;
}
var invalidEvent = new CustomEvent("calciteInvalid", {
  bubbles: true,
  composed: true
});
function invalidHandler(event) {
  const hiddenInput = event?.target;
  const hiddenInputMessage = hiddenInput?.validationMessage;
  const formComponent = getValidationComponent(hiddenInput?.parentElement);
  if (!formComponent) {
    return;
  }
  const componentTag = formComponent?.nodeName?.toLowerCase();
  const componentTagParts = componentTag?.split("-");
  if (componentTagParts.length < 2 || componentTagParts[0] !== "calcite") {
    return;
  }
  event?.preventDefault();
  if ("validity" in formComponent) {
    formComponent.validity = hiddenInput?.validity;
  }
  formComponent.dispatchEvent(invalidEvent);
  displayValidationMessage(formComponent, {
    message: hiddenInputMessage,
    icon: true,
    status: "invalid"
  });
  const clearValidationEvent = getClearValidationEventName(componentTag);
  formComponent.addEventListener(clearValidationEvent, () => {
    if ("status" in formComponent) {
      formComponent.status = "idle";
    }
    if ("validationIcon" in formComponent && !formComponent.validationIcon) {
      formComponent.validationIcon = false;
    }
    if ("validationMessage" in formComponent && formComponent.validationMessage === hiddenInputMessage) {
      formComponent.validationMessage = "";
    }
    if ("validity" in formComponent) {
      formComponent.validity = hiddenInput?.validity;
    }
  }, {
    once: true
  });
}
function submitForm(component) {
  const {
    formEl
  } = component;
  if (!formEl) {
    return false;
  }
  formEl.addEventListener("invalid", invalidHandler, true);
  formEl.requestSubmit();
  formEl.removeEventListener("invalid", invalidHandler, true);
  requestAnimationFrame(() => {
    const invalidEls = formEl.querySelectorAll("[status=invalid]");
    for (const el of invalidEls) {
      if (el?.validationMessage) {
        el?.setFocus();
        break;
      }
    }
  });
  return true;
}
function resetForm(component) {
  component.formEl?.reset();
}
function connectForm(component) {
  const {
    el,
    value
  } = component;
  const associatedForm = findAssociatedForm(component);
  if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
    return;
  }
  component.formEl = associatedForm;
  component.defaultValue = value;
  if (isCheckable(component)) {
    component.defaultChecked = component.checked;
  }
  const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
  associatedForm.addEventListener("reset", boundOnFormReset);
  onFormResetMap.set(component.el, boundOnFormReset);
  formComponentSet.add(el);
}
function findAssociatedForm(component) {
  const {
    el,
    form
  } = component;
  return form ? queryElementRoots(el, {
    id: form
  }) : closestElementCrossShadowBoundary(el, "form");
}
function onFormReset() {
  if ("status" in this) {
    this.status = "idle";
  }
  if ("validationIcon" in this) {
    this.validationIcon = false;
  }
  if ("validationMessage" in this) {
    this.validationMessage = "";
  }
  if (isCheckable(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
}
function disconnectForm(component) {
  const {
    el,
    formEl
  } = component;
  if (!formEl) {
    return;
  }
  const boundOnFormReset = onFormResetMap.get(el);
  formEl.removeEventListener("reset", boundOnFormReset);
  onFormResetMap.delete(el);
  component.formEl = null;
  formComponentSet.delete(el);
}
function afterConnectDefaultValueSet(component, value) {
  component.defaultValue = value;
}
var internalHiddenInputInputEvent = "calciteInternalHiddenInputInput";
var hiddenInputInputHandler = (event) => {
  event.target.dispatchEvent(new CustomEvent(internalHiddenInputInputEvent, {
    bubbles: true
  }));
};
var removeHiddenInputChangeEventListener = (input) => input.removeEventListener("input", hiddenInputInputHandler);
function syncHiddenFormInput(component) {
  const {
    el,
    formEl,
    name,
    value
  } = component;
  const {
    ownerDocument
  } = el;
  const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
  if (!formEl || !name) {
    inputs.forEach((input) => {
      removeHiddenInputChangeEventListener(input);
      input.remove();
    });
    return;
  }
  const values = Array.isArray(value) ? value : [value];
  const extra = [];
  const seen = /* @__PURE__ */ new Set();
  inputs.forEach((input) => {
    const valueMatch = values.find((val) => (
      /* intentional non-strict equality check */
      val == input.value
    ));
    if (valueMatch != null) {
      seen.add(valueMatch);
      defaultSyncHiddenFormInput(component, input, valueMatch);
    } else {
      extra.push(input);
    }
  });
  let docFrag;
  values.forEach((value2) => {
    if (seen.has(value2)) {
      return;
    }
    let input = extra.pop();
    if (!input) {
      input = ownerDocument.createElement("input");
      input.slot = hiddenFormInputSlotName;
    }
    if (!docFrag) {
      docFrag = ownerDocument.createDocumentFragment();
    }
    docFrag.append(input);
    input.addEventListener("input", hiddenInputInputHandler);
    defaultSyncHiddenFormInput(component, input, value2);
  });
  if (docFrag) {
    el.append(docFrag);
  }
  extra.forEach((input) => {
    removeHiddenInputChangeEventListener(input);
    input.remove();
  });
}
function defaultSyncHiddenFormInput(component, input, value) {
  const {
    defaultValue,
    disabled,
    form,
    name,
    required
  } = component;
  input.defaultValue = defaultValue;
  input.disabled = disabled;
  input.name = name;
  input.required = required;
  input.tabIndex = -1;
  if (form) {
    input.setAttribute("form", form);
  } else {
    input.removeAttribute("form");
  }
  if (isCheckable(component)) {
    input.checked = component.checked;
    input.defaultChecked = component.defaultChecked;
    input.value = component.checked ? value || "on" : "";
  } else {
    input.value = value || "";
  }
  component.syncHiddenFormInput?.(input);
  const validationComponent = getValidationComponent(component.el);
  if (validationComponent && "validity" in validationComponent) {
    for (const key in __spreadValues({}, input?.validity)) {
      validationComponent.validity[key] = input.validity[key];
    }
  }
}
var HiddenFormInputSlot = ({
  component
}) => {
  syncHiddenFormInput(component);
  return h("slot", {
    name: hiddenFormInputSlotName
  });
};

export {
  submitForm,
  resetForm,
  connectForm,
  findAssociatedForm,
  disconnectForm,
  afterConnectDefaultValueSet,
  internalHiddenInputInputEvent,
  HiddenFormInputSlot
};
/*! Bundled license information:

@esri/calcite-components/dist/components/form.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-HIXQ76MY.js.map
