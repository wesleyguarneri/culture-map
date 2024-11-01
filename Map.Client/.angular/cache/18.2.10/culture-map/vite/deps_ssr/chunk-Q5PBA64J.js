import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  N
} from "./chunk-EPIUUGS2.js";
import {
  I,
  O
} from "./chunk-KYLW5XXS.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
var i = {
  func: O.LESS
};
var s = {
  func: O.ALWAYS
};
var e = {
  mask: 255
};
var l = {
  mask: 0
};
var t = (a) => ({
  function: {
    func: O.NOTEQUAL,
    ref: a,
    mask: a
  },
  operation: {
    fail: I.KEEP,
    zFail: I.KEEP,
    zPass: I.KEEP
  }
});
var u = (a) => ({
  function: {
    func: O.ALWAYS,
    ref: a,
    mask: a
  },
  operation: {
    fail: I.KEEP,
    zFail: I.KEEP,
    zPass: I.REPLACE
  }
});
var f = {
  function: {
    func: O.ALWAYS,
    ref: N.OutlineVisualElementMask,
    mask: N.OutlineVisualElementMask
  },
  operation: {
    fail: I.KEEP,
    zFail: I.KEEP,
    zPass: I.ZERO
  }
};
var o = {
  function: {
    func: O.ALWAYS,
    ref: N.OutlineVisualElementMask,
    mask: N.OutlineVisualElementMask
  },
  operation: {
    fail: I.KEEP,
    zFail: I.KEEP,
    zPass: I.REPLACE
  }
};
var P = {
  function: {
    func: O.EQUAL,
    ref: N.OutlineVisualElementMask,
    mask: N.OutlineVisualElementMask
  },
  operation: {
    fail: I.KEEP,
    zFail: I.KEEP,
    zPass: I.KEEP
  }
};
var m = {
  function: {
    func: O.NOTEQUAL,
    ref: N.OutlineVisualElementMask,
    mask: N.OutlineVisualElementMask
  },
  operation: {
    fail: I.KEEP,
    zFail: I.KEEP,
    zPass: I.KEEP
  }
};

export {
  i,
  s,
  e,
  l,
  t,
  u,
  f,
  o,
  P,
  m
};
//# sourceMappingURL=chunk-Q5PBA64J.js.map
