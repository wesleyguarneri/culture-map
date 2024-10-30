import {
  timeZones
} from "./chunk-3DEXNMKE.js";
import {
  extractRegion
} from "./chunk-CIJRPJYO.js";
import "./chunk-XAY3H5XC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/index3.js
var generateTimeZoneMetadata = (timeZoneItems) => {
  return timeZoneItems.map((tzItem) => {
    const {
      label
    } = tzItem;
    const continent = extractRegion(label);
    return __spreadProps(__spreadValues({}, tzItem), {
      continent
    });
  });
};
function groupByRegion() {
  return __async(this, null, function* () {
    const grouping = [];
    const timeZoneItems = timeZones.map((tz) => ({
      label: tz
    }));
    const timeZoneMetadata = generateTimeZoneMetadata(timeZoneItems);
    for (const tzMetadatum of timeZoneMetadata) {
      const {
        label,
        continent
      } = tzMetadatum;
      if (tzMetadatum.visited) {
        continue;
      }
      tzMetadatum.visited = true;
      const newGroup = {
        label: continent,
        tzs: [{
          label
        }]
      };
      for (const tzMetadatumJ of timeZoneMetadata.filter((_) => !_.visited)) {
        const {
          label: labelJ,
          continent: continentJ
        } = tzMetadatumJ;
        if (continent === continentJ) {
          const tzItem = {
            label: labelJ
          };
          newGroup.tzs.push(tzItem);
          tzMetadatumJ.visited = true;
        }
      }
      grouping.push(newGroup);
    }
    return grouping.map((group) => {
      group.tzs = group.tzs.sort((a, b) => a.label.localeCompare(b.label));
      return {
        label: group.label,
        tzs: group.tzs.map((_) => _.label)
      };
    }).sort((a, b) => a.label.localeCompare(b.label));
  });
}
export {
  groupByRegion
};
/*! Bundled license information:

@esri/calcite-components/dist/components/index3.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=index3-ZKJGXCLW.js.map
