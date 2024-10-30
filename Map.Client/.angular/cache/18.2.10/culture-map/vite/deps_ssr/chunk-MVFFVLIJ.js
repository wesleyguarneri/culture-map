import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  G,
  I
} from "./chunk-GHPF24X4.js";

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
//# sourceMappingURL=chunk-MVFFVLIJ.js.map
