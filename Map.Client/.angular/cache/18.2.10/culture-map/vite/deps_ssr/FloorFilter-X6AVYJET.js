import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n4,
  n2 as n5
} from "./chunk-5WZBN555.js";
import {
  e as e5
} from "./chunk-JRL65HQ7.js";
import {
  t
} from "./chunk-JPJAW3N6.js";
import {
  e as e4,
  n as n3
} from "./chunk-XJ4XZPHY.js";
import {
  i
} from "./chunk-YEDQK53F.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import "./chunk-PLGJMWC5.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-C2OXE4NQ.js";
import {
  B,
  e2
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import {
  b,
  g
} from "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import {
  s as s3
} from "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  A,
  P,
  d as d2
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import {
  d
} from "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  n
} from "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  s as s2
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/FloorFilter/css.js
var e6 = "esri-floor-filter";
var t2 = `${e6}__filter-menu`;
var o = {
  floorFilter: e6,
  floorFilterLayout: `${e6}__layout--`,
  floorFilterPosition: `${e6}__position--`,
  buttonContainer: `${e6}__button-container`,
  buttonContainerLevels: `${e6}__button-container--levels`,
  buttonInfo: `${e6}__button-info`,
  buttonLabel: `${e6}__button-label`,
  browseButton: `${e6}__browse-button`,
  closeLevelsButton: `${e6}__close-levels-button`,
  zoomButton: `${e6}__zoom-button`,
  zoomButtonLevels: `${e6}__zoom-button--levels`,
  minimizeToggleButton: `${e6}__minimize-toggle-button`,
  levelsContainer: `${e6}__levels-container`,
  levelButton: `${e6}__level-button`,
  levelButtonActive: `${e6}__level-button--active`,
  separator: `${e6}__separator`,
  filterMenu: t2,
  filterMenuHeader: `${t2}-header`,
  filterMenuHeaderTextGroup: `${t2}-header-text-group`,
  filterMenuHeaderText: `${t2}-header-text`,
  filterMenuHeaderSubtext: `${t2}-header-subtext`,
  filterMenuHeaderBack: `${t2}-header-back`,
  filterMenuSearch: `${t2}-search`,
  filterMenuSearchInput: `${t2}-search-input`,
  filterMenuItems: `${t2}-items`,
  filterMenuItemName: `${t2}-item-name`,
  filterMenuSelectedItem: `${t2}-item-name--selected`,
  filterMenuSite: `${t2}-site`,
  filterMenuFacility: `${t2}-facility`,
  selectedItemCircle: `${e6}__selected-item-circle`
};

// ../../../node_modules/@arcgis/core/widgets/FloorFilter/FloorFilterViewModel.js
function v(e7) {
  return "esri.WebScene" === e7.declaredClass;
}
var m = class extends t(S) {
  constructor(e7) {
    super(e7), this.filterMenuOpen = false, this.filterMenuType = "site", this.filterMode = "base-floors", this.levelsExpanded = true, this.searchTerm = null, this.view = null, this._updateFloorFilterTask = null, this._viewHeightBreakpoint = null, this._viewWidthBreakpoint = null;
  }
  initialize() {
    this.addHandles([d2(() => this.view?.map, (e7) => {
      null != this._updateFloorFilterTask && (this._updateFloorFilterTask.abort(), this._updateFloorFilterTask = null), this._updateFloorFilterTask = d((t3) => __async(this, null, function* () {
        yield this._updateFloorFilterFromMap(e7), s2(t3), this._setInitialViewState(e7);
      }));
    }, P), d2(() => this.view, (e7, t3) => {
      this._unregisterWidget(t3), this._registerWidget(e7), this._watchSearchResults(e7);
    }, A), d2(() => this.view?.widthBreakpoint ?? null, (e7) => {
      this._viewWidthBreakpoint = e7;
    }), d2(() => this.view?.heightBreakpoint ?? null, (e7) => {
      this._viewHeightBreakpoint = e7;
    })]);
  }
  destroy() {
    this._unregisterWidget(this.view), this.view = null, null != this._updateFloorFilterTask && (this._updateFloorFilterTask.abort(), this._updateFloorFilterTask = null);
  }
  set enabled(e7) {
    this._callOverride("enabled", e7);
  }
  set facility(e7) {
    if (e7 && this._isOverridden("facility")) {
      const t3 = this.getFacility(e7);
      this.hasMultipleSites && (this.site = t3?.siteId || null);
    }
    this._callOverride("facility", e7);
  }
  set filterFeatures(e7) {
    this._callOverride("filterFeatures", e7);
  }
  set filterLayers(e7) {
    this._callOverride("filterLayers", e7);
  }
  get hasFacilities() {
    return null != this.filterLayers?.facilityLayer && this.filterFeatures?.facilities?.facilitiesInfo?.length > 0;
  }
  get hasLevels() {
    return null != this.filterLayers?.levelLayer && this.filterFeatures?.levels?.levelsInfo?.length > 0;
  }
  get hasMultipleSites() {
    return null != this.filterLayers?.siteLayer && this.filterFeatures?.sites?.sitesInfo?.length > 1;
  }
  get isNormalMode() {
    let e7 = true;
    const t3 = this._viewWidthBreakpoint;
    return "xsmall" !== this._viewHeightBreakpoint && "xsmall" !== t3 || (e7 = false), e7;
  }
  set level(e7) {
    if (!e7) return this._callOverride("level", e7), this.facility = null, this.site = null, void this.setFloors(null);
    let t3 = null, i2 = null;
    const s4 = e7?.split("--");
    if (s4?.length > 1 && "all" === s4[0] ? (i2 = s4[1], t3 = {
      id: e7,
      facilityId: i2,
      shortName: null,
      longName: null,
      levelNumber: null,
      verticalOrder: null
    }) : (t3 = this.getLevel(e7), i2 = t3?.facilityId ?? null), this.level !== e7 || this.isNormalMode || this.levelsExpanded) t3 && this.hasFacilities && this.hasLevels ? (this.facility = i2, this.hasMultipleSites && (this.site = this.getFacility(i2)?.siteId || null), this.setFloors(t3)) : this._isOverridden("level") && (this.facility = null, this.site = null, this.hasMultipleSites && (this.filterMenuType = "site"), this.setFloors(null)), this._callOverride("level", e7);
    else {
      const e8 = this.getFacilityLevels(i2);
      e8?.length > 1 && (this.levelsExpanded = true);
    }
  }
  set longNames(e7) {
    this._callOverride("longNames", e7);
  }
  set minimized(e7) {
    this._callOverride("minimized", e7);
  }
  set pinnedLevels(e7) {
    this._callOverride("pinnedLevels", e7);
  }
  set site(e7) {
    this._callOverride("site", e7);
  }
  get state() {
    return this.view && this.filterFeatures && this.hasFacilities && this.hasLevels ? "ready" : this.view && !this.filterFeatures ? "loading" : "disabled";
  }
  filterFacilities(e7) {
    let t3 = e7;
    this.searchTerm && (this.searchTerm = this.searchTerm.trim(), t3 = e7.filter((e8) => {
      const {
        name: t4
      } = e8;
      return t4.toLowerCase().includes(this.searchTerm?.toLowerCase());
    })), this.site && (t3 = t3.filter((e8) => e8.siteId === this.site));
    return t3.sort((e8, t4) => {
      const i2 = e8.name, s4 = t4.name;
      return i2.localeCompare(s4, void 0, {
        sensitivity: "base"
      });
    });
  }
  filterSites(e7) {
    let t3 = e7;
    this.searchTerm && (this.searchTerm = this.searchTerm.trim(), t3 = e7.filter((e8) => {
      const {
        name: t4
      } = e8;
      return t4.toLowerCase().includes(this.searchTerm?.toLowerCase());
    }));
    return t3.sort((e8, t4) => {
      const i2 = e8.name, s4 = t4.name;
      return i2.localeCompare(s4, void 0, {
        sensitivity: "base"
      });
    });
  }
  getBaseLevel(e7) {
    const t3 = this.filterFeatures?.levels?.levelsInfo;
    let i2 = null;
    if (e7) {
      const {
        id: s4
      } = e7;
      if (t3 && t3.length > 0 && (t3.forEach((e8) => {
        0 === e8.verticalOrder && e8.facilityId === s4 && (i2 = e8);
      }), !i2)) {
        let e8 = null;
        t3.forEach((t4) => {
          t4.facilityId === s4 && (e8 ? (t4.verticalOrder ?? 0) >= 0 ? null != e8.verticalOrder && (e8.verticalOrder < 0 || (t4.verticalOrder ?? 0) < e8.verticalOrder) && (e8 = t4) : null != e8.verticalOrder && null != t4.verticalOrder && e8.verticalOrder < 0 && t4.verticalOrder > e8.verticalOrder && (e8 = t4) : e8 = t4);
        }), e8 && (i2 = e8);
      }
    }
    return i2;
  }
  getFacility(e7) {
    return this.filterFeatures?.facilities?.facilitiesInfo?.find((t3) => t3.id === e7) ?? null;
  }
  getFacilityLevels(e7) {
    if (!e7 || !this.filterFeatures?.levels?.levelsInfo) return [];
    return this.filterFeatures.levels.levelsInfo.filter((t3) => t3.facilityId === e7).sort((e8, t3) => {
      const i2 = e8.verticalOrder ?? 0, s4 = t3.verticalOrder ?? 0;
      return i2 > s4 ? -1 : i2 === s4 ? 0 : 1;
    });
  }
  getLevel(e7) {
    return this.filterFeatures?.levels?.levelsInfo?.find((t3) => t3.id === e7) ?? null;
  }
  getSite(e7) {
    return this.filterFeatures?.sites?.sitesInfo?.find((t3) => t3.id === e7) ?? null;
  }
  goTo(e7) {
    const {
      view: t3
    } = this;
    if (!t3 || !e7) return;
    const {
      geometry: i2
    } = e7;
    i2 && i2.extent && this.callGoTo({
      target: i2.extent,
      options: {
        duration: n(1e3),
        easing: "in-out-quad"
      }
    });
  }
  setFloors(e7) {
    const {
      view: t3
    } = this;
    t3 && (t3?.map?.allLayers?.forEach((e8) => {
      "feature" === e8.type && this._computeViewAllModeFloors(e8);
    }), t3.floors = new V(this._computeFloors(e7)));
  }
  updateWebDocument(e7) {
    if (e5(e7)) {
      const t3 = new n4({
        enabled: this.enabled,
        longNames: this.longNames,
        minimized: this.minimized,
        pinnedLevels: this.pinnedLevels,
        site: this.site ?? null,
        facility: this.facility ?? null,
        level: this.level ?? null
      });
      e7.widgets ? e7.widgets.floorFilter = t3 : e7.widgets = new n5({
        floorFilter: t3
      });
    }
  }
  _computeFloors(e7) {
    if ("single-floor" === this.filterMode) this._computeSingleFloor(e7);
    else if ("base-floors" === this.filterMode) return "3d" === this.view?.type ? this._computeBaseFloors3D(e7) : this._computeBaseFloors(e7);
    return this._computeEmptyFloors();
  }
  _computeSingleFloor(e7) {
    if (!e7) return this._computeEmptyFloors();
    const t3 = [];
    if ("all" === e7?.id) {
      this.getFacilityLevels(e7.facilityId).forEach((e8) => {
        e8.id && t3.push(e8.id);
      });
    } else e7 && t3.push(e7.id);
    return t3;
  }
  _computeBaseFloors(e7) {
    const t3 = this.filterFeatures?.levels?.levelsInfo;
    if (!t3?.length) return this._computeEmptyFloors();
    const i2 = [];
    if ("all" === e7?.id) {
      this.getFacilityLevels(e7.facilityId).forEach((e8) => {
        e8.id && i2.push(e8.id);
      });
    } else e7 && i2.push(e7.id);
    const s4 = e7?.facilityId;
    return t3.forEach((e8) => {
      const {
        id: t4,
        facilityId: l,
        verticalOrder: r
      } = e8;
      (s4 || 0 !== r || i2.includes(t4)) && (l === s4 || 0 !== r || i2.includes(t4)) || i2.push(t4);
    }), i2;
  }
  _computeBaseFloors3D(e7) {
    const t3 = this.filterFeatures?.levels?.levelsInfo;
    if (!t3?.length) return this._computeEmptyFloors();
    const i2 = [], s4 = e7?.id.split("--") ?? [];
    if (s4?.length > 1 && "all" === s4[0]) {
      this.getFacilityLevels(e7?.facilityId).forEach((e8) => {
        e8.id && i2.push(e8.id);
      });
    } else e7 && i2.push(e7.id);
    const l = e7?.facilityId;
    return t3.forEach((e8) => {
      const {
        id: t4,
        facilityId: s5
      } = e8;
      (l || i2.includes(t4)) && (s5 === l || i2.includes(t4)) || i2.push(t4);
    }), i2;
  }
  _computeEmptyFloors() {
    return [];
  }
  _setFilterLayers() {
    return __async(this, null, function* () {
      const {
        view: e7
      } = this;
      if (e7 && !this._isOverridden("filterLayers")) {
        if (!e5(e7.map) && !v(e7.map)) throw new s("Map must be a webmap or webscene");
        {
          const t3 = e7.map, i2 = t3?.allLayers;
          if (i2?.items?.length > 0) {
            const e8 = {
              siteLayer: null,
              facilityLayer: null,
              levelLayer: null
            }, s4 = t3.floorInfo?.siteLayer?.layerId, l = t3.floorInfo?.facilityLayer?.layerId, r = t3.floorInfo?.levelLayer?.layerId, o2 = t3.floorInfo?.siteLayer?.sublayerId || t3.floorInfo?.facilityLayer?.sublayerId || t3.floorInfo?.levelLayer?.sublayerId;
            if (!l || !r) return;
            const a2 = i2.items.filter((e9) => "feature" === e9.type || "scene" === e9.type), n6 = i2.items.filter((e9) => "map-image" === e9.type);
            if (n6?.length > 0 && o2) {
              yield Promise.all(n6.map((e9) => e9.load()));
              const i3 = t3.floorInfo?.siteLayer?.sublayerId, o3 = t3.floorInfo?.facilityLayer?.sublayerId, a3 = t3.floorInfo?.levelLayer?.sublayerId;
              n6.forEach((t4) => {
                const n7 = t4.id, h = t4?.allSublayers, d3 = h?.items;
                (n7 === s4 || n7 === l || n7 === r) && d3?.length > 0 && h.items.forEach((t5) => {
                  const l2 = t5.id;
                  n7 === s4 && l2 === i3 ? e8.siteLayer = t5 : l2 === o3 ? e8.facilityLayer = t5 : l2 === a3 && (e8.levelLayer = t5);
                });
              });
            }
            a2?.length > 0 && a2.forEach((t4) => {
              const i3 = t4.id;
              i3 === s4 ? e8.siteLayer = t4 : i3 === l ? e8.facilityLayer = t4 : i3 === r && (e8.levelLayer = t4);
            }), this.filterLayers = e8;
          }
        }
      }
    });
  }
  _getFilterFeatures() {
    return __async(this, null, function* () {
      if (this._isOverridden("filterFeatures")) return this.filterFeatures;
      const [e7, t3, i2] = yield Promise.all([this._getSites(), this._getFacilities(), this._getLevels()]);
      return {
        sites: e7,
        facilities: t3,
        levels: i2
      };
    });
  }
  _getSites() {
    return __async(this, null, function* () {
      const e7 = {
        sitesInfo: []
      }, {
        filterLayers: t3,
        view: i2
      } = this, s4 = i2?.map, {
        siteLayer: l
      } = t3;
      if (!l || !s4?.floorInfo?.siteLayer) return e7;
      const r = l.createQuery();
      r.returnGeometry = true, r.outFields = ["*"], r.returnZ = true, "type" in l && "scene" === l.type && (r.multipatchOption = "xyFootprint");
      const {
        siteIdField: o2,
        nameField: a2
      } = s4.floorInfo.siteLayer, n6 = yield l.queryFeatures(r);
      if (n6?.features?.length > 0) {
        const t4 = n6.features, i3 = l?.fieldsIndex.get(o2)?.name || o2, s5 = l?.fieldsIndex.get(a2)?.name || a2;
        null != i3 && null != s5 && t4.forEach((t5) => {
          const l2 = t5.attributes, r2 = t5.geometry, o3 = l2[i3], a3 = l2[s5];
          o3 && a3 && e7.sitesInfo.push({
            id: o3,
            name: a3,
            geometry: r2
          });
        });
      }
      return e7;
    });
  }
  _getFacilities() {
    return __async(this, null, function* () {
      const {
        filterLayers: e7,
        view: t3
      } = this, i2 = t3?.map, {
        facilityLayer: s4
      } = e7, l = {
        facilitiesInfo: []
      };
      if (!s4 || !i2?.floorInfo?.facilityLayer) return l;
      const r = s4.createQuery();
      r.returnGeometry = true, r.outFields = ["*"], r.returnZ = true, "type" in s4 && "scene" === s4.type && (r.multipatchOption = "xyFootprint");
      const {
        facilityIdField: o2,
        siteIdField: a2,
        nameField: n6
      } = i2.floorInfo.facilityLayer, h = yield s4.queryFeatures(r);
      if (h?.features?.length > 0) {
        const e8 = h.features, t4 = s4?.fieldsIndex.get(o2)?.name || o2, i3 = s4?.fieldsIndex.get(a2)?.name || a2, r2 = s4?.fieldsIndex.get(n6)?.name || n6;
        t4 && i3 && r2 && e8.forEach((e9) => {
          const s5 = e9.attributes, o3 = e9.geometry, a3 = s5[t4], n7 = s5[i3], h2 = s5[r2];
          a3 && h2 && l.facilitiesInfo.push({
            id: a3,
            siteId: n7,
            name: h2,
            geometry: o3
          });
        });
      }
      return l;
    });
  }
  _getLevels() {
    return __async(this, null, function* () {
      const {
        filterLayers: e7,
        view: t3
      } = this, i2 = t3?.map, {
        levelLayer: s4
      } = e7, l = {
        levelsInfo: []
      };
      if (!s4 || !i2?.floorInfo?.levelLayer) return l;
      const r = s4.createQuery();
      r.returnGeometry = true, r.outFields = ["*"], r.returnZ = true;
      const {
        levelIdField: o2,
        facilityIdField: a2,
        longNameField: n6,
        shortNameField: h,
        levelNumberField: d3,
        verticalOrderField: c
      } = i2.floorInfo.levelLayer, u = yield s4.queryFeatures(r);
      if (u?.features?.length > 0) {
        const e8 = u.features, t4 = s4?.fieldsIndex.get(o2)?.name || o2, i3 = s4?.fieldsIndex.get(a2)?.name || a2, r2 = s4?.fieldsIndex.get(n6)?.name || n6, f2 = s4?.fieldsIndex.get(h)?.name || h, y2 = s4?.fieldsIndex.get(d3)?.name || d3, p = s4?.fieldsIndex.get(c)?.name || c;
        t4 && i3 && r2 && f2 && y2 && p && e8.forEach((e9) => {
          const s5 = e9.attributes, o3 = s5[t4], a3 = s5[i3], n7 = s5[r2], h2 = s5[f2], d4 = s5[y2], c2 = s5[p];
          o3 && a3 && n7 && h2 && "number" == typeof d4 && "number" == typeof c2 && l.levelsInfo.push({
            id: o3,
            facilityId: a3,
            longName: n7,
            shortName: h2,
            levelNumber: d4,
            verticalOrder: c2
          });
        });
      }
      return l;
    });
  }
  _registerWidget(e7) {
    const t3 = e7?.persistableViewModels.includes(this);
    t3 || e7?.persistableViewModels.add(this);
  }
  _unregisterWidget(e7) {
    e7?.persistableViewModels.remove(this);
  }
  _watchSearchResults(e7) {
    e7?.on("select-result-floor", (e8) => {
      const t3 = this.getLevel(e8);
      t3 && this.level !== e8 && (this.level = e8, this.setFloors(t3));
    });
  }
  _setInitialViewState(e7) {
    return __async(this, null, function* () {
      if (this.view) try {
        yield this.view.when(), yield this._setFilterLayers();
        const t3 = yield this._getFilterFeatures();
        if (!t3) return;
        if (this.filterFeatures = t3, !this.hasFacilities || !this.hasLevels) return void console.error("Facilities and Levels are required for the Floor Filter widget");
        if (this.hasMultipleSites || (this.filterMenuType = "facility"), this.facility && this.level) {
          this.filterMenuType = "facility";
          const e8 = this.getFacility(this.facility), t4 = this.getLevel(this.level);
          this.site || (this.site = e8?.siteId || void 0), this.setFloors(t4);
        } else if (this.facility && !this.level) {
          this.filterMenuType = "facility";
          const e8 = this.getFacility(this.facility), t4 = this.getBaseLevel(e8);
          this.site || (this.site = e8?.siteId || void 0), this.level = t4?.id || void 0, this.setFloors(t4);
        } else if (!this.facility && this.level) {
          this.filterMenuType = "facility";
          const e8 = this.getLevel(this.level), t4 = this.getFacility(e8?.facilityId);
          this.facility = t4?.id || void 0, this.site || (this.site = t4?.siteId || void 0), this.setFloors(e8);
        } else if (!this.site || this.facility || this.level) {
          if (!e7 || !e5(e7)) return void this.setFloors(null);
          const t4 = e7?.widgets?.floorFilter;
          if (!t4) return void this.setFloors(null);
          t4.site && !this.site && (this.site = t4.site, this.filterMenuType = "facility"), this.setFloors(null);
        } else this.filterMenuType = "site", this.setFloors(null);
      } catch (t3) {
        console.error("Couldn't retrieve sites, facilities, and levels", t3);
      }
    });
  }
  _callOverride(e7, t3) {
    this._override(e7, t3);
  }
  _updateFloorFilterFromMap(e7) {
    return __async(this, null, function* () {
      if (!e7 || !e5(e7)) return;
      const t3 = e7?.widgets?.floorFilter;
      t3 && (this._isOverridden("enabled") || (this.enabled = t3.enabled), this._isOverridden("longNames") || (this.longNames = t3.longNames), this._isOverridden("minimized") || (this.minimized = t3.minimized), this._isOverridden("pinnedLevels") || (this.pinnedLevels = t3.pinnedLevels), this._isOverridden("site") || (this.site = t3.site), this._isOverridden("facility") || (this.facility = t3.facility), this._isOverridden("level") || (this.level = t3.level));
    });
  }
  _computeViewAllModeFloors(e7) {
    const {
      filterFeatures: t3
    } = this;
    if (e7.floorInfo?.viewAllMode && this.hasLevels && this.hasFacilities && "base-floors" === this.filterMode) {
      const {
        level: i2,
        facility: l
      } = this, r = [];
      t3.levels.levelsInfo.forEach((e8) => {
        const {
          id: t4,
          facilityId: s4
        } = e8;
        l && s4 === l ? i2 && t4 === i2 && r.push(t4) : r.push(t4);
      }), e7.floorInfo.viewAllLevelIds = new V(r);
    }
  }
};
e([y({
  value: false
})], m.prototype, "enabled", null), e([y({
  value: void 0
})], m.prototype, "facility", null), e([y({
  value: null
})], m.prototype, "filterFeatures", null), e([y({
  value: null
})], m.prototype, "filterLayers", null), e([y()], m.prototype, "filterMenuOpen", void 0), e([y()], m.prototype, "filterMenuType", void 0), e([y()], m.prototype, "filterMode", void 0), e([y()], m.prototype, "hasFacilities", null), e([y()], m.prototype, "hasLevels", null), e([y()], m.prototype, "hasMultipleSites", null), e([y({
  readOnly: true
})], m.prototype, "isNormalMode", null), e([y({
  value: void 0
})], m.prototype, "level", null), e([y({
  value: false
})], m.prototype, "longNames", null), e([y()], m.prototype, "levelsExpanded", void 0), e([y({
  value: false
})], m.prototype, "minimized", null), e([y({
  value: false
})], m.prototype, "pinnedLevels", null), e([y()], m.prototype, "searchTerm", void 0), e([y({
  value: void 0
})], m.prototype, "site", null), e([y({
  readOnly: true
})], m.prototype, "state", null), e([y()], m.prototype, "view", void 0), e([y()], m.prototype, "_viewHeightBreakpoint", void 0), e([y()], m.prototype, "_viewWidthBreakpoint", void 0), e([y()], m.prototype, "updateWebDocument", null), m = e([a("esri.widgets.FloorFilter.FloorFilterViewModel")], m);
var F = m;

// ../../../node_modules/@arcgis/core/widgets/FloorFilter.js
var M = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "End", "Home"]);
var g2 = class extends B {
  constructor(e7, s4) {
    super(e7, s4), this._activeMenu = null, this._activeMenuIndex = {
      levels: -1,
      menuItems: -1
    }, this._baseNode = null, this._facilitiesListNode = null, this._levelsListNode = null, this._sitesListNode = null, this._searchInput = null, this.viewModel = new F(), this.messages = null, this.messagesCommon = null, this.headingLevel = 2, this._resizeObserver = new ResizeObserver(() => this.scheduleRender()), this.addHandles(d2(() => this._searchInput, () => this._focusSearch()));
  }
  destroy() {
    this._resizeObserver?.disconnect();
  }
  get enabled() {
    return this.viewModel.enabled;
  }
  set enabled(e7) {
    this.viewModel.enabled = e7;
  }
  get longNames() {
    return this.viewModel.longNames;
  }
  set longNames(e7) {
    this.viewModel.longNames = e7;
  }
  get minimized() {
    return this.viewModel.minimized;
  }
  set minimized(e7) {
    this.viewModel.minimized = e7;
  }
  get pinnedLevels() {
    return this.viewModel.pinnedLevels;
  }
  set pinnedLevels(e7) {
    this.viewModel.pinnedLevels = e7;
  }
  get site() {
    return this.viewModel.site;
  }
  set site(e7) {
    this.viewModel.site = e7;
  }
  get facility() {
    return this.viewModel.facility;
  }
  set facility(e7) {
    this.viewModel.facility = e7;
  }
  get level() {
    return this.viewModel.level;
  }
  set level(e7) {
    this.viewModel.level = e7;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e7) {
    this.viewModel.view = e7;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e7) {
    this.viewModel.goToOverride = e7;
  }
  get icon() {
    return "floor-plan";
  }
  set icon(e7) {
    this._overrideIfSome("icon", e7);
  }
  updateWebDocument(e7) {
    return this.viewModel.updateWebDocument(e7);
  }
  render() {
    const {
      longNames: e7
    } = this, t3 = e7 && this.viewModel.isNormalMode ? "expanded" : "collapsed", s4 = this._renderButtons(), i2 = this._renderFilterMenu(), l = n2("div", {
      class: this.classes(o.separator)
    }), n6 = this._getComponentPosition(), a2 = this._getPosition(n6), c = "top-right" === n6 || "bottom-right" === n6, d3 = "top-left" === n6 || "bottom-left" === n6, u = g(this.container), v2 = u && d3 || !u && c ? i2 : s4, p = u && d3 || !u && c ? s4 : i2;
    return n2("div", {
      afterCreate: this._afterBaseNodeCreate,
      class: this.classes(o.floorFilter, e3.widget, `${o.floorFilterLayout}${t3}`, `${o.floorFilterPosition}${a2}`),
      key: "floor-filter-menu"
    }, v2, this.viewModel?.filterMenuOpen ? l : null, p);
  }
  _renderButtons() {
    const e7 = this._getComponentPosition(), t3 = [];
    return "top" === this._getPosition(e7) ? (t3.push(this._renderBrowseButton()), t3.push(this._renderLevelButtons()), t3.push(this._renderCloseLevelsButton()), t3.push(this._renderZoomButton()), t3.push(this._renderCollapseToggleButton())) : (t3.push(this._renderCollapseToggleButton()), t3.push(this._renderZoomButton()), t3.push(this._renderCloseLevelsButton()), t3.push(this._renderLevelButtons()), t3.push(this._renderBrowseButton())), n2("div", {
      class: this.classes(e3.widget, o.buttonContainer),
      key: "button-container"
    }, t3);
  }
  _renderBrowseButton() {
    const {
      longNames: e7,
      messages: t3
    } = this;
    return n2("button", {
      "aria-expanded": this.viewModel.filterMenuOpen.toString(),
      "aria-label": t3.buttons.browse,
      bind: this,
      class: this.classes(e3.widget, e3.widgetButton, e3.interactive, ("loading" === this.viewModel.state || "disabled" === this.viewModel.state) && e3.buttonDisabled, o.browseButton, this.viewModel?.filterMenuOpen && e3.widgetButtonActive),
      key: "browse-button",
      onclick: this._toggleFilterMenu,
      title: t3.buttons.browse,
      type: "button"
    }, n2("div", {
      class: this.classes(o.buttonInfo)
    }, n2("span", {
      class: this.classes(i.icon, i.urbanModel)
    }), n2("span", {
      class: this.classes(o.buttonLabel)
    }, e7 && this.viewModel.isNormalMode ? t3.buttons.browse : null)));
  }
  _renderLevelButtons() {
    if (!this.viewModel?.filterFeatures?.levels?.levelsInfo || !this.facility) return null;
    const {
      facility: e7,
      messagesCommon: t3,
      messages: s4
    } = this, i2 = this.viewModel?.getFacility(e7), l = this.viewModel?.getFacilityLevels(e7), n6 = l.map((e8) => this._renderLevelButton(e8));
    if (!n6.length) return null;
    const r = i2 && s3(s4.selector.levelsLabel, {
      name: `"${i2.name}"`
    });
    if (this._isWebScene(this.view?.map) && n6?.length > 1) {
      const s5 = {
        id: `all--${e7}`,
        facilityId: e7,
        shortName: t3.all,
        longName: t3.all,
        levelNumber: null,
        verticalOrder: null
      }, i3 = this._renderLevelButton(s5);
      n6.push(i3);
    }
    return n2("ul", {
      afterCreate: b,
      "aria-label": r,
      bind: this,
      class: this.classes(o.levelsContainer),
      "data-id": "levels",
      "data-node-ref": "_levelsListNode",
      key: "levels-button-container",
      onkeydown: this._handleListKeydown
    }, n6);
  }
  _renderLevelButton(e7) {
    const {
      longNames: t3
    } = this, {
      shortName: s4,
      longName: i2,
      id: l
    } = e7, n6 = `levels--${l}`, a2 = this.level === l, c = t3 && this.viewModel.isNormalMode ? i2 : s4;
    return this.viewModel.isNormalMode || a2 || this.viewModel.levelsExpanded ? n2("li", {
      key: n6
    }, n2("button", {
      bind: this,
      class: this.classes(e3.widgetButton, a2 ? e3.widgetButtonActive : null, e3.interactive, o.levelButton),
      "data-id": l,
      "data-list-id": "levels",
      onclick: this._levelSelected,
      onfocus: this._onItemFocus,
      type: "button"
    }, c)) : null;
  }
  _renderCloseLevelsButton() {
    if (!this.level || this.viewModel.isNormalMode || !this.viewModel.levelsExpanded) return null;
    const {
      messagesCommon: e7
    } = this;
    return n2("button", {
      "aria-label": e7.close,
      bind: this,
      class: this.classes(e3.widget, e3.widgetButton, e3.interactive, o.closeLevelsButton),
      key: "close-levels-button",
      onclick: this._closeLevels,
      title: e7.close,
      type: "button"
    }, n2("div", {
      class: this.classes(o.buttonInfo)
    }, n2("span", {
      class: this.classes(i.icon, i.close)
    })));
  }
  _renderZoomButton() {
    const {
      longNames: e7,
      messages: t3,
      facility: s4,
      site: i2
    } = this, l = this.viewModel?.filterMenuType, n6 = this.viewModel?.filterMenuOpen, a2 = this.viewModel?.getSite(i2), c = this.viewModel?.getFacility(s4), h = "site" === l && n6 ? !a2 : !c;
    return n2("button", {
      "aria-label": t3.buttons.zoomTo,
      bind: this,
      class: this.classes(e3.widget, e3.widgetButton, h && e3.buttonDisabled, e3.interactive, this.viewModel?.getFacilityLevels(s4).length > 0 ? o.zoomButtonLevels : o.zoomButton),
      key: "zoom-button",
      onclick: this._zoomToClicked,
      title: t3.buttons.zoomTo,
      type: "button"
    }, n2("div", {
      class: this.classes(o.buttonInfo)
    }, n2("span", {
      class: this.classes(i.icon, i.zoomToObject)
    }), n2("span", {
      class: this.classes(o.buttonLabel)
    }, e7 && this.viewModel.isNormalMode ? t3.buttons.zoomTo : null)));
  }
  _renderCollapseToggleButton() {
    const {
      longNames: e7,
      messagesCommon: t3
    } = this, s4 = e7 ? i.collapse : i.expand, i2 = this.classes(i.icon, s4), l = e7 ? t3.collapse : t3.expand;
    return n2("button", {
      "aria-label": l,
      bind: this,
      class: this.classes(e3.widget, e3.widgetButton, e3.interactive, o.minimizeToggleButton),
      key: "minimize-toggle-button",
      onclick: this._toggleCollapsed,
      title: l,
      type: "button"
    }, n2("div", {
      class: this.classes(o.buttonInfo)
    }, n2("span", {
      class: i2
    }), n2("span", {
      class: this.classes(o.buttonLabel)
    }, e7 && this.viewModel.isNormalMode ? t3.collapse : null)));
  }
  _renderFilterMenu() {
    return this.viewModel?.filterMenuOpen ? "site" === this.viewModel?.filterMenuType ? this._renderSiteFilterMenu() : "facility" === this.viewModel?.filterMenuType ? this._renderFacilityFilterMenu() : null : null;
  }
  _renderSiteFilterMenu() {
    const {
      messages: e7,
      messagesCommon: t3
    } = this, s4 = this.site ? this.viewModel?.getSite(this.site)?.name : e7.selector.selectSite, i2 = n2("div", {
      class: this.classes(`${o.filterMenuHeader}`),
      key: "filter-menu-site-header"
    }, n2("div", {
      class: this.classes(o.filterMenuHeaderTextGroup)
    }, n2(e4, {
      class: this.classes(o.filterMenuHeaderText),
      level: this.headingLevel
    }, s4)), n2("button", {
      bind: this,
      class: this.classes(i.icon, i.close),
      onclick: this._closeClicked,
      title: t3.close,
      type: "button"
    })), l = this._renderSearchInput(), n6 = this._renderSiteItems();
    return n2("div", {
      class: this.classes(o.filterMenu),
      key: "filter-menu-site"
    }, i2, l, n6);
  }
  _renderFacilityFilterMenu() {
    const {
      messages: e7,
      messagesCommon: t3,
      site: s4
    } = this, i2 = this.viewModel?.getSite(s4)?.name, l = this.facility && this.viewModel?.getFacility(this.facility)?.name || e7.selector.selectFacility, n6 = this.viewModel.hasMultipleSites ? n2("button", {
      bind: this,
      class: this.classes(o.filterMenuHeaderBack),
      onclick: this._backClicked,
      title: t3.back,
      type: "button"
    }, n2("span", {
      class: this.classes(g(this.container) ? i.right : i.left)
    })) : null, r = this.viewModel.hasMultipleSites ? n2(e4, {
      class: this.classes(o.filterMenuHeaderSubtext),
      level: n3(this.headingLevel)
    }, i2) : null, u = n2("div", {
      class: this.classes(o.filterMenuHeader),
      key: "filter-menu-site-header"
    }, n6, n2("div", {
      class: this.classes(o.filterMenuHeaderTextGroup)
    }, n2(e4, {
      class: this.classes(o.filterMenuHeaderText),
      level: this.headingLevel
    }, l), r), n2("button", {
      bind: this,
      class: this.classes(i.icon, i.close),
      onclick: this._closeClicked,
      title: t3.close,
      type: "button"
    })), v2 = this._renderSearchInput(), p = this._renderFacilityItems();
    return n2("div", {
      class: this.classes(o.filterMenu),
      key: "filter-menu-facility"
    }, u, v2, p);
  }
  _renderSearchInput() {
    const {
      messagesCommon: e7
    } = this;
    return n2("div", {
      class: this.classes(o.filterMenuSearch),
      key: "filter-menu-search"
    }, n2("span", {
      class: this.classes(i.icon, i.search)
    }), n2("input", {
      afterCreate: b,
      bind: this,
      class: this.classes(o.filterMenuSearchInput),
      "data-node-ref": "_searchInput",
      oninput: this._onSearchChange,
      onpaste: this._onSearchChange,
      placeholder: e7.search,
      value: this.viewModel.searchTerm ?? void 0
    }));
  }
  _renderBlueCircle() {
    return n2("span", {
      class: this.classes(o.selectedItemCircle),
      key: "floor-filter__selected-item-circle"
    });
  }
  _renderSiteItems() {
    if (!this.viewModel?.filterFeatures?.sites?.sitesInfo) return null;
    const {
      messages: e7
    } = this, t3 = this.viewModel.filterFeatures.sites.sitesInfo, s4 = this.viewModel.filterSites(t3).map((e8) => this._renderSiteItem(e8)), i2 = 0 === s4.length && this.viewModel?.searchTerm && n2("div", {
      class: this.classes(e3.empty)
    }, e7.noResults);
    return n2("ul", {
      afterCreate: b,
      "aria-label": e7.selector.sitesLabel,
      bind: this,
      class: this.classes(o.filterMenuItems),
      "data-id": "sites",
      "data-node-ref": "_sitesListNode",
      key: "filter-menu-items--sites",
      onkeydown: this._handleListKeydown,
      tabIndex: -1
    }, s4, i2);
  }
  _renderSiteItem(e7) {
    const {
      name: t3,
      id: s4
    } = e7, i2 = `filter-menu-site--${s4}`, l = this.site === s4;
    return n2("li", {
      key: i2
    }, n2("button", {
      bind: this,
      class: this.classes(o.filterMenuSite),
      "data-id": s4,
      "data-list-id": "sites",
      onclick: this._siteSelected,
      onfocus: this._onItemFocus,
      type: "button"
    }, l ? this._renderBlueCircle() : null, n2("span", {
      class: this.classes(l ? o.filterMenuSelectedItem : o.filterMenuItemName)
    }, t3), n2("span", {
      class: this.classes(g(this.container) ? i.left : i.right)
    })));
  }
  _renderFacilityItems() {
    if (!this.viewModel?.filterFeatures?.facilities?.facilitiesInfo) return null;
    const {
      messages: e7,
      site: t3
    } = this, s4 = this.viewModel.getSite(t3), i2 = this.viewModel.filterFeatures.facilities.facilitiesInfo, l = this.viewModel.filterFacilities(i2).map((e8) => this._renderFacilityItem(e8)), n6 = 0 === l.length && this.viewModel?.searchTerm && n2("div", {
      class: this.classes(e3.empty)
    }, e7.noResults), a2 = s4 ? s3(e7.selector.siteFacilitiesLabel, {
      name: `"${s4.name}"`
    }) : e7.selector.facilitiesLabel;
    return n2("ul", {
      afterCreate: b,
      "aria-label": a2,
      bind: this,
      class: this.classes(o.filterMenuItems),
      "data-id": "facilities",
      "data-node-ref": "_facilitiesListNode",
      key: "filter-menu-items--facilities",
      onkeydown: this._handleListKeydown,
      tabIndex: -1
    }, l, n6);
  }
  _renderFacilityItem(e7) {
    const {
      name: t3,
      id: s4
    } = e7, i2 = `filter-menu-facility--${s4}`, l = this.facility === s4;
    return n2("li", {
      key: i2
    }, n2("button", {
      bind: this,
      class: this.classes(o.filterMenuFacility),
      "data-id": s4,
      "data-list-id": "facilities",
      onclick: this._facilitySelected,
      onfocus: this._onItemFocus,
      type: "button"
    }, l ? this._renderBlueCircle() : null, n2("span", {
      class: this.classes(l ? o.filterMenuSelectedItem : o.filterMenuItemName)
    }, t3)));
  }
  _afterBaseNodeCreate(e7) {
    this._baseNode && this._resizeObserver?.unobserve(this._baseNode), this._baseNode = e7, this._resizeObserver?.observe(this._baseNode);
  }
  _toggleCollapsed() {
    this.longNames = !this.longNames;
  }
  _toggleFilterMenu() {
    const e7 = this.viewModel?.filterMenuOpen ?? false;
    this.viewModel.filterMenuOpen = !e7;
  }
  _setFilterMenuType(e7) {
    this.viewModel.filterMenuType = e7;
  }
  _zoomToClicked() {
    if (this.site && "site" === this.viewModel?.filterMenuType && this.viewModel?.filterMenuOpen) {
      const e7 = this.viewModel?.getSite(this.site);
      this.viewModel.goTo(e7);
    } else if (this.facility) {
      const e7 = this.viewModel?.getFacility(this.facility);
      this.viewModel.goTo(e7);
    } else if (this.site) {
      const e7 = this.viewModel?.getSite(this.site);
      this.viewModel.goTo(e7);
    }
  }
  _onSearchChange(e7) {
    const t3 = e7.target;
    "" === t3.value ? this.viewModel.searchTerm = null : t3.value && this.viewModel?.searchTerm !== t3.value && (this.viewModel.searchTerm = t3.value);
  }
  _closeClicked() {
    this.viewModel.searchTerm = null, this.viewModel.filterMenuOpen = false;
  }
  _backClicked() {
    this._setFilterMenuType("site"), this.viewModel.searchTerm = null;
  }
  _siteSelected(e7) {
    const t3 = e7.currentTarget.getAttribute("data-id"), s4 = this.viewModel.getSite(t3);
    let i2 = false;
    this.site !== t3 && (this.facility = null, this.level = null, i2 = true, this.viewModel.levelsExpanded = false), this.site = t3, this.viewModel.searchTerm = null, this._setFilterMenuType("facility"), this.viewModel.goTo(s4), i2 && this.viewModel.setFloors(null);
  }
  _facilitySelected(e7) {
    const t3 = e7.currentTarget.getAttribute("data-id"), s4 = this.viewModel.getFacility(t3);
    let i2 = false;
    if (this.facility !== t3) {
      if ("base-floors" === this.viewModel.filterMode) {
        const e8 = this.viewModel?.getBaseLevel(s4);
        this.level = e8 ? e8.id : null;
      } else this.level = null;
      i2 = true, this.viewModel.levelsExpanded = false;
    }
    if (this.facility = t3, this.viewModel.goTo(s4), i2) {
      const e8 = this.viewModel.getLevel(this.level);
      this.viewModel.setFloors(e8);
    }
    if (!this.viewModel.isNormalMode) {
      const e8 = this.viewModel.getFacilityLevels(t3);
      e8?.length > 1 && (this.viewModel.levelsExpanded = true);
    }
    setTimeout(() => this._focusActiveLevel(), 50);
  }
  _levelSelected(e7) {
    const t3 = e7.currentTarget.getAttribute("data-id");
    this.level = t3;
  }
  _closeLevels() {
    this.viewModel.levelsExpanded = false;
  }
  _isWebScene(e7) {
    return "esri.WebScene" === e7?.declaredClass;
  }
  _getComponentPosition() {
    return null != this.container ? this.view?.ui?.getPosition(this.container) : null;
  }
  _getPosition(e7) {
    switch (e7) {
      case "bottom-right":
      case "bottom-left":
        return "bottom";
      default:
        return "top";
    }
  }
  _handleListKeydown(e7) {
    const t3 = e7.currentTarget.getAttribute("data-id");
    let s4 = null;
    "sites" === t3 || "facilities" === t3 ? (this._activeMenu !== t3 && (this._activeMenuIndex.menuItems = -1), this._activeMenu = t3, s4 = "menuItems") : "levels" === t3 && (s4 = "levels");
    const i2 = "sites" === t3 ? this._sitesListNode : "facilities" === t3 ? this._facilitiesListNode : "levels" === t3 ? this._levelsListNode : null, {
      key: l
    } = e7, o2 = "Tab" === l, n6 = M.has(l);
    n6 && e7.preventDefault();
    const r = i2?.getElementsByTagName("li");
    r && 0 !== r.length && (n6 || o2) && this._handleItemNavigation(l, e7.shiftKey, r, o2, s4);
  }
  _handleItemNavigation(e7, t3, s4, i2, l) {
    if (!l) return;
    this._activeMenuIndex[l] === s4.length && this._activeMenuIndex[l]--, -1 === this._activeMenuIndex[l] && this._activeMenuIndex[l]++;
    const o2 = this._activeMenuIndex[l];
    switch (e7) {
      case "Home":
        this._activeMenuIndex[l] = 0;
        break;
      case "End":
        this._activeMenuIndex[l] = s4.length - 1;
        break;
      case "ArrowUp":
        this._activeMenuIndex[l] = this._activeMenuIndex[l] <= 0 ? s4.length - 1 : this._activeMenuIndex[l] - 1;
        break;
      case "ArrowDown":
        this._activeMenuIndex[l] = this._activeMenuIndex[l] === s4.length - 1 ? 0 : this._activeMenuIndex[l] + 1;
    }
    if ("Tab" === e7 && t3 && this._activeMenuIndex[l] >= 0 && this._activeMenuIndex[l]--, "Tab" === e7 && !t3 && this._activeMenuIndex[l] < s4.length && this._activeMenuIndex[l]++, o2 !== this._activeMenuIndex[l] && this._activeMenuIndex[l] > -1 && this._activeMenuIndex[l] < s4.length && !i2) {
      const e8 = s4[this._activeMenuIndex[l]].getElementsByTagName("button"), t4 = 1 === e8?.length ? e8[0] : null;
      t4?.focus();
    }
  }
  _focusSearch() {
    this._searchInput?.focus();
  }
  _focusActiveLevel() {
    const {
      level: e7
    } = this, t3 = this._levelsListNode, s4 = t3?.getElementsByTagName("li");
    if (!e7 || !t3 || !s4) return;
    const i2 = this._facilitiesListNode?.getElementsByTagName("li");
    this._activeMenuIndex.menuItems = i2 ? i2.length - 1 : -1;
    const l = [];
    for (let o2 = 0; o2 < s4.length; o2++) {
      const e8 = s4[o2].getElementsByTagName("button");
      1 === e8?.length && l.push(e8[0]);
    }
    l.forEach((t4, s5) => {
      t4.getAttribute("data-id") === e7 && (t4.focus(), this._activeMenuIndex.levels = s5);
    });
  }
  _onItemFocus(e7) {
    const t3 = e7.currentTarget, s4 = t3.getAttribute("data-list-id"), i2 = t3.getAttribute("data-id"), l = "sites" === s4 ? this._sitesListNode : "facilities" === s4 ? this._facilitiesListNode : "levels" === s4 ? this._levelsListNode : null;
    if (!l) return;
    const o2 = l?.getElementsByTagName("li");
    if (!o2) return;
    const n6 = [];
    Array.from(o2).forEach((e8) => {
      const t4 = e8.getElementsByTagName("button");
      1 === t4?.length && n6.push(t4[0]);
    });
    let r = null;
    switch (s4) {
      case "sites":
      case "facilities":
        r = "menuItems";
        break;
      case "levels":
        r = "levels";
    }
    if (!r) return;
    const a2 = r;
    n6.forEach((e8, t4) => {
      e8.getAttribute("data-id") === i2 && this._activeMenuIndex[a2] !== t4 && (this._activeMenuIndex[a2] = t4);
    });
  }
};
e([y()], g2.prototype, "_searchInput", void 0), e([y()], g2.prototype, "enabled", null), e([y()], g2.prototype, "longNames", null), e([y()], g2.prototype, "minimized", null), e([y()], g2.prototype, "pinnedLevels", null), e([y()], g2.prototype, "site", null), e([y()], g2.prototype, "facility", null), e([y()], g2.prototype, "level", null), e([y()], g2.prototype, "view", null), e([y({
  type: F
})], g2.prototype, "viewModel", void 0), e([y(), e2("esri/widgets/FloorFilter/t9n/FloorFilter")], g2.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], g2.prototype, "messagesCommon", void 0), e([y()], g2.prototype, "goToOverride", null), e([y()], g2.prototype, "headingLevel", void 0), e([y()], g2.prototype, "icon", null), g2 = e([a("esri.widgets.FloorFilter")], g2);
var f = g2;
export {
  f as default
};
//# sourceMappingURL=FloorFilter-X6AVYJET.js.map
