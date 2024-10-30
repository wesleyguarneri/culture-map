import {
  U
} from "./chunk-SYATLP3H.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/serverVersionUtils.js
function r(r2, t) {
  return __async(this, null, function* () {
    let n = null;
    const a = "string" == typeof t ? t : t.path;
    if (!r2.has(a)) {
      const s = yield U(a.replace(/\/VersionManagementServer/i, "/FeatureServer"), {
        query: {
          f: "json"
        }
      });
      n = {
        serverVersion: Number(s.data.currentVersion),
        featureServerUrl: a.replace(/\/VersionManagementServer/i, "/FeatureServer")
      }, r2.set(t, n);
    }
  });
}

export {
  r
};
//# sourceMappingURL=chunk-3YX3MWZT.js.map
