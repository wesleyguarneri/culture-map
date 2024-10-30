import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  SLOTS as SLOTS2
} from "./chunk-C34SJG42.js";
import {
  SLOTS
} from "./chunk-7YMGQ7BX.js";
import {
  getElementDir
} from "./chunk-AHYZNZSK.js";
import {
  forceUpdate,
  h
} from "./chunk-IAO6HACY.js";

// ../../../node_modules/@esri/calcite-components/dist/components/ExpandToggle.js
var groupBufferPx = 2;
var getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
var geActionDimensions = (actions) => {
  const actionsNotSlotted = actions.filter((action) => action.slot !== SLOTS2.menuActions);
  const actionLen = actionsNotSlotted?.length;
  return {
    actionWidth: actionLen ? getAverage(actionsNotSlotted.map((action) => action.clientWidth || 0)) : 0,
    actionHeight: actionLen ? getAverage(actionsNotSlotted.map((action) => action.clientHeight || 0)) : 0
  };
};
var getMaxActionCount = ({
  width,
  actionWidth,
  layout,
  height,
  actionHeight,
  groupCount
}) => {
  const maxContainerPx = layout === "horizontal" ? width : height;
  const avgItemPx = layout === "horizontal" ? actionWidth : actionHeight;
  return Math.floor((maxContainerPx - groupCount * groupBufferPx) / avgItemPx);
};
var getOverflowCount = ({
  layout,
  actionCount,
  actionWidth,
  width,
  actionHeight,
  height,
  groupCount
}) => {
  return Math.max(actionCount - getMaxActionCount({
    width,
    actionWidth,
    layout,
    height,
    actionHeight,
    groupCount
  }), 0);
};
var queryActions = (el) => {
  return Array.from(el.querySelectorAll("calcite-action")).filter((action) => action.closest("calcite-action-menu") ? action.slot === SLOTS.trigger : true);
};
var overflowActions = ({
  actionGroups,
  expanded,
  overflowCount
}) => {
  let needToSlotCount = overflowCount;
  actionGroups.reverse().forEach((group) => {
    let slottedWithinGroupCount = 0;
    const groupActions = queryActions(group).reverse();
    groupActions.forEach((groupAction) => {
      if (groupAction.slot === SLOTS2.menuActions) {
        groupAction.removeAttribute("slot");
        groupAction.textEnabled = expanded;
      }
    });
    if (needToSlotCount > 0) {
      groupActions.some((groupAction) => {
        const unslottedActions = groupActions.filter((action) => !action.slot);
        if (unslottedActions.length > 1 && groupActions.length > 2 && !groupAction.closest("calcite-action-menu")) {
          groupAction.textEnabled = true;
          groupAction.setAttribute("slot", SLOTS2.menuActions);
          slottedWithinGroupCount++;
          if (slottedWithinGroupCount > 1) {
            needToSlotCount--;
          }
        }
        return needToSlotCount < 1;
      });
    }
    forceUpdate(group);
  });
};
var ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function getCalcitePosition(position, el) {
  return position || el.closest("calcite-shell-panel")?.position || "start";
}
function toggleChildActionText({
  el,
  expanded
}) {
  queryActions(el).filter((el2) => el2.slot !== SLOTS2.menuActions).forEach((action) => action.textEnabled = expanded);
  el.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((el2) => el2.expanded = expanded);
}
var setTooltipReference = ({
  tooltip,
  referenceElement,
  expanded,
  ref
}) => {
  if (tooltip) {
    tooltip.referenceElement = !expanded && referenceElement ? referenceElement : null;
  }
  if (ref) {
    ref(referenceElement);
  }
  return referenceElement;
};
var ExpandToggle = ({
  expanded,
  expandText,
  collapseText,
  expandLabel,
  collapseLabel,
  toggle,
  el,
  position,
  tooltip,
  ref,
  scale
}) => {
  const rtl = getElementDir(el) === "rtl";
  const text = expanded ? collapseText : expandText;
  const label = expanded ? collapseLabel : expandLabel;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
  if (rtl) {
    icons.reverse();
  }
  const end = getCalcitePosition(position, el) === "end";
  const expandIcon = end ? icons[1] : icons[0];
  const collapseIcon = end ? icons[0] : icons[1];
  const actionNode = h("calcite-action", {
    icon: expanded ? expandIcon : collapseIcon,
    id: "expand-toggle",
    label,
    onClick: toggle,
    ref: (referenceElement) => setTooltipReference({
      tooltip,
      referenceElement,
      expanded,
      ref
    }),
    scale,
    text,
    textEnabled: expanded,
    title: !expanded && !tooltip ? text : null
  });
  return actionNode;
};

export {
  geActionDimensions,
  getOverflowCount,
  queryActions,
  overflowActions,
  toggleChildActionText,
  ExpandToggle
};
/*! Bundled license information:

@esri/calcite-components/dist/components/ExpandToggle.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-DQYERV6U.js.map
