import {
  G,
  I
} from "./chunk-NWICVENM.js";

// ../../../node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js
function u(r, u2) {
  return u2.push(r.buffer), {
    buffer: r.buffer,
    layout: new I(r.layout)
  };
}
function t(e) {
  return new G(e.layout).createView(e.buffer);
}

export {
  u,
  t
};
//# sourceMappingURL=chunk-JPUM54Z2.js.map
