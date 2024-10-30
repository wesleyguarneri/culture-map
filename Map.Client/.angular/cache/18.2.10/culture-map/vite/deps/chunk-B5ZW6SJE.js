import {
  C
} from "./chunk-7XMEZQ34.js";
import {
  I
} from "./chunk-SYATLP3H.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-B5ZW6SJE.js.map
