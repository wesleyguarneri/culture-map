import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@esri/calcite-components/dist/components/input.js
var minMaxStepTypes = ["date", "datetime-local", "month", "number", "range", "time", "week"];
var patternTypes = ["email", "password", "search", "tel", "text", "url"];
var minMaxLengthTypes = ["email", "password", "search", "tel", "text", "textarea", "url"];
function updateConstraintValidation(inputComponent, input, propName, matchesType) {
  const attributeName = propName.toLowerCase();
  const value = inputComponent[propName];
  if (matchesType && value != null) {
    input.setAttribute(attributeName, `${value}`);
  } else {
    input.removeAttribute(attributeName);
  }
}
function syncHiddenFormInput(type, inputComponent, hiddenFormInput) {
  hiddenFormInput.type = type === "textarea" ? "text" : type;
  const isMinMaxStepType = minMaxStepTypes.includes(type);
  const numericInputComponent = inputComponent;
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "min", isMinMaxStepType);
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "max", isMinMaxStepType);
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "step", isMinMaxStepType);
  const isMinMaxLengthType = minMaxLengthTypes.includes(type);
  const textualInputComponent = inputComponent;
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "minLength", isMinMaxLengthType);
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "maxLength", isMinMaxLengthType);
  const isPatternType = patternTypes.includes(type);
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "pattern", isPatternType);
}

export {
  syncHiddenFormInput
};
/*! Bundled license information:

@esri/calcite-components/dist/components/input.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-ZFSZO3AF.js.map
