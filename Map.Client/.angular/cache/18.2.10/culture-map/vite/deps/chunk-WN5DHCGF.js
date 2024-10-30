import {
  h
} from "./chunk-2P72IR2Y.js";

// ../../../node_modules/@esri/calcite-components/dist/components/FloatingArrow.js
var CSS = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
};
var DEFAULTS = {
  width: 12,
  height: 6,
  strokeWidth: 1
};
var FloatingArrow = ({
  floatingLayout,
  key,
  ref
}) => {
  const {
    width,
    height,
    strokeWidth
  } = DEFAULTS;
  const svgX = width / 2;
  const isVertical = floatingLayout === "vertical";
  const dValue = `M0,0 H${width} L${width - svgX},${height} Q${svgX},${height} ${svgX},${height} Z`;
  return h("svg", {
    "aria-hidden": "true",
    class: CSS.arrow,
    height: width,
    key,
    ref,
    viewBox: `0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`,
    width: width + (isVertical ? strokeWidth : 0)
  }, strokeWidth > 0 && h("path", {
    class: CSS.arrowStroke,
    d: dValue,
    fill: "none",
    "stroke-width": strokeWidth + 1
  }), h("path", {
    d: dValue,
    stroke: "none"
  }));
};

export {
  FloatingArrow
};
/*! Bundled license information:

@esri/calcite-components/dist/components/FloatingArrow.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-WN5DHCGF.js.map
