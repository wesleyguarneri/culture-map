import {
  U,
  t3 as t
} from "./chunk-SYATLP3H.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/portal/support/utils.js
function n(n2, t3, s) {
  return __async(this, null, function* () {
    const u = t?.findCredential(n2.restUrl);
    if (!u) return null;
    if ("loaded" === n2.loadStatus && "" === t3 && n2.user?.sourceJSON && false === s) return n2.user.sourceJSON;
    const o = {
      responseType: "json",
      query: {
        f: "json"
      }
    };
    if (s && (o.query.returnUserLicenseTypeExtensions = true), "" === t3) {
      const e = yield U(n2.restUrl + "/community/self", o);
      if (e.data) {
        const r = e.data;
        if (r?.username) return r;
      }
      return null;
    }
    const i = yield U(n2.restUrl + "/community/users/" + t3, o);
    if (i.data) {
      const e = i.data;
      return e.error ? null : e;
    }
    return null;
  });
}
function t2(e, r, t3) {
  return __async(this, null, function* () {
    const s = yield n(e, r, true);
    return s?.userLicenseTypeExtensions?.includes(t3) ?? false;
  });
}

export {
  n,
  t2 as t
};
//# sourceMappingURL=chunk-322SYD2C.js.map
