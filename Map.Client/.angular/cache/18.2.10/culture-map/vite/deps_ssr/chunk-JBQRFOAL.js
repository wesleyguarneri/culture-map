import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=chunk-JBQRFOAL.js.map
