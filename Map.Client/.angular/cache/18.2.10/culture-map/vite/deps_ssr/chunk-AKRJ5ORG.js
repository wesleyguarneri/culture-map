import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  I
} from "./chunk-XLEC46FY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/portal/support/jsonContext.js
function e(t, r) {
  return __spreadProps(__spreadValues({}, l(t, r)), {
    readResourcePaths: []
  });
}
function o(r, e2, o2) {
  const i = I(r.itemUrl);
  return __spreadProps(__spreadValues({}, l(r, e2)), {
    messages: [],
    writtenProperties: [],
    blockedRelativeUrls: [],
    verifyItemRelativeUrls: i ? {
      rootPath: i.path,
      writtenUrls: []
    } : null,
    resources: o2 ? {
      toAdd: [],
      toUpdate: [],
      toKeep: [],
      pendingOperations: []
    } : null
  });
}
function l(e2, o2) {
  return {
    origin: o2,
    url: I(e2.itemUrl),
    portal: e2.portal || C.getDefault(),
    portalItem: e2
  };
}

export {
  e,
  o
};
//# sourceMappingURL=chunk-AKRJ5ORG.js.map
