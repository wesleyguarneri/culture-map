import {
  getAllTimezones,
  getTimezone
} from "./chunk-XAY3H5XC.js";

// ../../../node_modules/@esri/calcite-components/dist/components/time-zones.js
var deprecatedTimeZonesToAlias = {
  /* eslint-disable @typescript-eslint/naming-convention */
  CET: "Europe/Brussels",
  CST6CDT: "America/Chicago",
  EET: "Europe/Athens",
  EST: "America/Panama",
  EST5EDT: "America/New_York",
  HST: "Pacific/Honolulu",
  MET: "Europe/Brussels",
  MST: "America/Phoenix",
  MST7MDT: "America/Denver",
  PST8PDT: "America/Los_Angeles",
  WET: "Europe/Lisbon"
  /* eslint-enable @typescript-eslint/naming-convention */
};
var timeZones = (() => {
  const futureDeprecatedTimeZones = Object.keys(deprecatedTimeZonesToAlias);
  return Object.keys(getAllTimezones()).filter((tz) => !futureDeprecatedTimeZones.includes(tz));
})();
function normalize(tz) {
  const localDeprecatedTimeZone = deprecatedTimeZonesToAlias[tz];
  if (localDeprecatedTimeZone) {
    return localDeprecatedTimeZone;
  }
  const tzData = getTimezone(tz);
  return tzData?.aliasOf ?? tz;
}

export {
  timeZones,
  normalize
};
/*! Bundled license information:

@esri/calcite-components/dist/components/time-zones.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-3DEXNMKE.js.map
