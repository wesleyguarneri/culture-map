import {
  timeZones
} from "./chunk-3DEXNMKE.js";
import {
  extractRegion,
  global
} from "./chunk-CIJRPJYO.js";
import "./chunk-XAY3H5XC.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/index4.js
var now = /* @__PURE__ */ new Date();
var startDate = now.toISOString();
var daysInYear = 365;
var groupDateRange = daysInYear;
var defaultGroupingOptions = {
  groupDateRange,
  startDate
};
var _getDates = (startDate2, numberDays, dateEngine) => {
  const dateArray = [];
  let date = dateEngine.create(startDate2);
  for (let i = 0; i <= numberDays; i++) {
    date = dateEngine.increase(date);
    dateArray.push(dateEngine.formatToIsoDateString(date));
  }
  return dateArray;
};
var generateTimeZoneMetadata = (timeZoneItems, startDate2, numberDays, dateEngine) => {
  const processedDates = /* @__PURE__ */ new Map();
  const theDates = _getDates(startDate2, numberDays, dateEngine);
  return timeZoneItems.map((tzItem) => {
    const {
      label
    } = tzItem;
    const continent = extractRegion(label);
    const dates = theDates.map((date) => {
      const key = `${date}-${label}`;
      let utc = processedDates.get(key);
      if (utc) {
        return utc;
      }
      utc = dateEngine.isoToTimeZone(date, label);
      processedDates.set(key, utc);
      return utc;
    });
    return __spreadProps(__spreadValues({}, tzItem), {
      continent,
      isRegularContinent: continent !== global,
      dates
    });
  });
};
var compareDateArrs = (array1, array2, dateEngine) => array1.length === array2.length && array1.every((value, index) => dateEngine.same(value, array2[index]));
var getGroupLabelTimeZoneIndices = (rawTZs, max = 5) => {
  const shrinkedTzs = rawTZs.filter(({
    label
  }) => extractRegion(label) !== global);
  if (shrinkedTzs.length === 0) {
    return [0];
  }
  const validLabels = shrinkedTzs.map((tz) => rawTZs.indexOf(tz));
  return equallyDistributedSampling(validLabels, max);
};
function equallyDistributedSampling(items, maxItems = 5) {
  const totalItems = items.length;
  if (totalItems <= maxItems) {
    return items;
  }
  const numberItemsToSelect = Math.min(totalItems - 2, maxItems - 2);
  const stepSize = (totalItems - 1) / (numberItemsToSelect + 1);
  return [items[0], ...Array.from({
    length: numberItemsToSelect
  }, (_, i) => items[Math.round((i + 1) * stepSize)]), items[totalItems - 1]];
}
function groupByOffset(options) {
  return __async(this, null, function* () {
    const {
      groupDateRange: groupDateRange2,
      startDate: startDate2,
      dateEngine
    } = __spreadValues(__spreadValues({}, defaultGroupingOptions), options);
    const grouping = [];
    if (!dateEngine) {
      throw new Error("dateEngine is required");
    }
    const timeZoneItems = timeZones.map((tz) => ({
      label: tz
    }));
    const timeZoneMetadata = generateTimeZoneMetadata(timeZoneItems, startDate2, groupDateRange2, dateEngine);
    for (const tzMetadatumI of timeZoneMetadata) {
      const {
        label,
        continent,
        dates
      } = tzMetadatumI;
      if (tzMetadatumI.visited) {
        continue;
      }
      tzMetadatumI.visited = true;
      const newGroup = {
        labelIdx: [],
        tzs: [{
          label
        }]
      };
      for (const tzMetadatumJ of timeZoneMetadata.filter((_) => !_.visited)) {
        const {
          label: labelJ,
          continent: continentJ,
          isRegularContinent: isRegularContinentJ,
          dates: datesJ
        } = tzMetadatumJ;
        if ((continent === continentJ || !isRegularContinentJ) && compareDateArrs(dates, datesJ, dateEngine)) {
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
        labelTzIdx: getGroupLabelTimeZoneIndices(group.tzs, 7),
        tzs: group.tzs.map((_) => _.label)
      };
    }).sort((a, b) => b.tzs.length - a.tzs.length);
  });
}
export {
  groupByOffset
};
/*! Bundled license information:

@esri/calcite-components/dist/components/index4.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=index4-JVPQWCEN.js.map
