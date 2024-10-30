import {
  i
} from "./chunk-ONOHIFCT.js";
import {
  a,
  c,
  p
} from "./chunk-BIUXKPKA.js";
import {
  V
} from "./chunk-EITGQLII.js";

// ../../../node_modules/@arcgis/core/widgets/Popup/actions.js
var i2 = V.ofType({
  key: "type",
  defaultKeyValue: "button",
  base: p,
  typeMap: {
    button: c,
    toggle: a
  }
});
var n = new c({
  icon: "magnifying-glass-plus",
  id: "zoom-to-feature",
  title: "{messages.zoom}",
  className: i.zoomInMagnifyingGlass
});
var r = new c({
  icon: "trash",
  id: "remove-selected-feature",
  title: "{messages.remove}",
  className: i.trash
});
var l = new c({
  icon: "magnifying-glass-plus",
  id: "zoom-to-clustered-features",
  title: "{messages.zoom}",
  className: i.zoomInMagnifyingGlass
});
var m = new a({
  icon: "table",
  id: "browse-clustered-features",
  title: "{messages.browseClusteredFeatures}",
  className: i.table,
  value: false
});

export {
  i2 as i,
  n,
  r,
  l,
  m
};
//# sourceMappingURL=chunk-55LUHDLJ.js.map
