import {
  h
} from "./chunk-2P72IR2Y.js";

// ../../../node_modules/@esri/calcite-components/dist/components/Heading.js
var Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return h(HeadingTag, {
    class: props.class,
    key: props.key
  }, children);
};

export {
  Heading
};
/*! Bundled license information:

@esri/calcite-components/dist/components/Heading.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-RXFX2JA3.js.map
