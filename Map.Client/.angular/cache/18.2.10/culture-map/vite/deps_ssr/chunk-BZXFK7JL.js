import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  isBrowser
} from "./chunk-7JIACICA.js";
import {
  nodeListToArray
} from "./chunk-AHYZNZSK.js";

// ../../../node_modules/@esri/calcite-components/dist/components/utils2.js
var ComboboxItem = "CALCITE-COMBOBOX-ITEM";
var ComboboxItemGroup = "CALCITE-COMBOBOX-ITEM-GROUP";
var ComboboxChildSelector = `${ComboboxItem}, ${ComboboxItemGroup}`;
var CSS = {
  input: "input",
  inputHidden: "input--hidden",
  chipInvisible: "chip--invisible",
  selectionDisplayFit: "selection-display-fit",
  selectionDisplaySingle: "selection-display-single",
  listContainer: "list-container",
  icon: "icon",
  placeholderIcon: "placeholder-icon",
  selectedIcon: "selected-icon"
};
var IDS = {
  validationMessage: "comboboxValidationMessage"
};
function getAncestors(element) {
  const parent = element.parentElement?.closest(ComboboxChildSelector);
  const grandparent = parent?.parentElement?.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  return item.ancestors?.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM") || [];
}
function getItemChildren(item) {
  return nodeListToArray(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = nodeListToArray(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  if (!isBrowser()) {
    return 0;
  }
  const result = document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}
function isSingleLike(selectionMode) {
  return selectionMode.includes("single");
}
function getLabel(item) {
  return item.shortHeading || item.textLabel;
}

export {
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxChildSelector,
  CSS,
  IDS,
  getAncestors,
  getItemAncestors,
  getItemChildren,
  hasActiveChildren,
  getDepth,
  isSingleLike,
  getLabel
};
/*! Bundled license information:

@esri/calcite-components/dist/components/utils2.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-BZXFK7JL.js.map
