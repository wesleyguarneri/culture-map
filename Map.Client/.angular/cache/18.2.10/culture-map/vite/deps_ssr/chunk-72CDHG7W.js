import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  isBrowser
} from "./chunk-7JIACICA.js";

// ../../../node_modules/@esri/calcite-components/dist/components/utils3.js
var listSelector = "calcite-list";
var listItemGroupSelector = "calcite-list-item-group";
var listItemSelector = "calcite-list-item";
function getListItemChildLists(slotEl) {
  return Array.from(slotEl.assignedElements({
    flatten: true
  }).filter((el) => el.matches(listSelector)));
}
function getListItemChildren(slotEl) {
  const assignedElements = slotEl.assignedElements({
    flatten: true
  });
  const listItemGroupChildren = assignedElements.filter((el) => el?.matches(listItemGroupSelector)).map((group) => Array.from(group.querySelectorAll(listItemSelector))).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector));
  const listItemListChildren = assignedElements.filter((el) => el?.matches(listSelector)).map((list) => Array.from(list.querySelectorAll(listItemSelector))).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  return [...listItemListChildren, ...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
  listItemChildren.forEach((listItem) => {
    listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
    listItem.setSize = listItemChildren.length;
  });
}
function getDepth(element, includeGroup = false) {
  if (!isBrowser()) {
    return 0;
  }
  const expression = includeGroup ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}

export {
  getListItemChildLists,
  getListItemChildren,
  updateListItemChildren,
  getDepth
};
/*! Bundled license information:

@esri/calcite-components/dist/components/utils3.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-72CDHG7W.js.map
