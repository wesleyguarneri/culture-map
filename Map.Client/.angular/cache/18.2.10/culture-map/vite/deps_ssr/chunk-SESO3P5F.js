import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V as V2
} from "./chunk-XJ6YJASZ.js";
import {
  V
} from "./chunk-YJSSLMB3.js";
import {
  e as e6
} from "./chunk-5L5LGHM5.js";
import {
  e as e5
} from "./chunk-XJ4XZPHY.js";
import {
  e as e4
} from "./chunk-FYGR4X6I.js";
import {
  d as d2
} from "./chunk-NVOJILW6.js";
import {
  O,
  k
} from "./chunk-7V4JSBFA.js";
import {
  s
} from "./chunk-ASCK5HJ5.js";
import {
  B,
  e2 as e3,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import {
  f
} from "./chunk-ODFKYX74.js";
import {
  P,
  d,
  p
} from "./chunk-LZSLQ24Q.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  e
} from "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/FeatureTemplates/TemplateItem.js
var a2;
var p2 = a2 = class extends S {
  constructor(t3) {
    super(t3), this._activeFetchInfo = {
      id: null,
      request: null
    }, this.disabled = false, this.layer = null, this.template = null, this.thumbnail = null;
  }
  initialize() {
    this.addHandles(d(() => {
      const {
        layer: t3
      } = this;
      return [t3 && "renderer" in t3 ? t3.renderer : null, this.template];
    }, () => {
      this._activeFetchInfo.id = null, this._activeFetchInfo.request = null, this._set("thumbnail", null);
    }, P));
  }
  get description() {
    return this.template?.description;
  }
  set description(t3) {
    this.template && (this.template.description = t3);
  }
  get label() {
    return this.template?.name;
  }
  set label(t3) {
    this.template && (this.template.name = t3);
  }
  get id() {
    return `${this.label ?? ""}–${this.layer?.id}`;
  }
  get supportsUpload() {
    return "scene" === this.layer?.type;
  }
  clone() {
    const t3 = null != this.thumbnail ? this.thumbnail.cloneNode(true) : null, e7 = new a2({
      layer: this.layer,
      template: this.template
    });
    return e7._set("thumbnail", t3), e7;
  }
  static fetchThumbnail(t3, e7) {
    return __async(this, null, function* () {
      const r3 = yield u(t3, e7);
      if (null == r3) return null;
      const i3 = {
        maxSize: 36
      };
      "dictionary" === t3.renderer?.type && (i3.fieldMap = t3.renderer.fieldMap ?? void 0, i3.feature = {
        attributes: e7.prototype.attributes ?? {}
      });
      return yield V2(r3, i3);
    });
  }
};
e2([y()], p2.prototype, "description", null), e2([y()], p2.prototype, "disabled", void 0), e2([y()], p2.prototype, "label", null), e2([y()], p2.prototype, "layer", void 0), e2([y()], p2.prototype, "template", void 0), e2([y({
  readOnly: true
})], p2.prototype, "thumbnail", void 0), e2([y()], p2.prototype, "id", null), e2([y()], p2.prototype, "supportsUpload", null), p2 = a2 = e2([a("esri.widgets.FeatureTemplates.TemplateItem")], p2);
var m = p2;
function u(t3, r3) {
  return __async(this, null, function* () {
    const {
      renderer: i3
    } = t3;
    if (i3) {
      const t4 = new d2({
        attributes: r3.prototype.attributes
      }), l2 = yield i3.getSymbolAsync(t4);
      if (l2) return l2;
    }
    return c(t3);
  });
}
function c(t3) {
  return __async(this, null, function* () {
    const {
      geometryType: e7
    } = t3, r3 = "point" === e7 || "multipoint" === e7 ? yield import("./SimpleMarkerSymbol-5IQZVMHL.js") : "polyline" === e7 ? yield import("./SimpleLineSymbol-JNCNDGGE.js") : "polygon" === e7 || "mesh" === e7 || "multipatch" === e7 ? yield import("./SimpleFillSymbol-WHWONNF7.js") : null;
    return r3 ? new r3.default() : null;
  });
}

// ../../../node_modules/@arcgis/core/widgets/FeatureTemplates/TemplateItemGroup.js
var p3 = class extends s(S) {
  constructor(e7) {
    super(e7), this.items = null, this.label = null;
  }
  get id() {
    return this.label;
  }
  findByTemplate(e7) {
    return this.items.find((r3) => r3.template === e7);
  }
};
e2([y()], p3.prototype, "items", void 0), e2([y()], p3.prototype, "label", void 0), e2([y()], p3.prototype, "id", null), p3 = e2([a("esri.widgets.FeatureTemplates.TemplateItemGroup")], p3);
var i = p3;

// ../../../node_modules/@arcgis/core/widgets/support/templateUtils.js
var t = (t3) => {
  if (null == t3 || "object" != typeof t3) return [];
  return [..."templates" in t3 && Array.isArray(t3.templates) ? t3.templates : [], ..."types" in t3 && Array.isArray(t3.types) ? t3.types.flatMap((t4) => t4.templates) : []];
};

// ../../../node_modules/@arcgis/core/widgets/FeatureTemplates/FeatureTemplatesViewModel.js
var p4;
var m2 = ({
  layer: e7
}) => ({
  key: e7,
  label: e7.title ?? ""
});
var y2 = ({
  layer: e7
}) => ({
  key: e7.geometryType,
  label: e7.geometryType ?? ""
});
var c2 = p4 = class extends o.EventedAccessor {
  constructor(e7) {
    super(e7), this._groupPool = new e(i), this._itemPool = new e(m), this.disabled = false, this.disabledItemFunction = null, this.filterFunction = null, this.selectedItem = null;
  }
  initialize() {
    this._get("groupBy") || (this.groupBy = "layer");
  }
  get _featureTemplatesByLayer() {
    if (!this.layers) return /* @__PURE__ */ new Map();
    const e7 = /* @__PURE__ */ new Map();
    for (const t3 of this.layers) if ("subtype-group" === t3.type) for (const s3 of t3.sublayers) e7.set(s3, t(s3));
    else e7.set(t3, t(t3));
    return e7;
  }
  set groupBy(e7) {
    if (this._set("groupBy", e7), "function" != typeof e7) switch (e7) {
      case "layer":
        this._groupByFunction = m2;
        break;
      case "geometry":
        this._groupByFunction = y2;
        break;
      default:
        this._groupByFunction = null;
    }
    else this._groupByFunction = (t3) => this._ensureGroupByObject(e7(t3));
  }
  set layers(e7) {
    const t3 = "layers";
    if (this.removeHandles(t3), e7) {
      const s3 = () => this.notifyChange("state");
      this.addHandles(e7.map((e8) => p(() => e8.loadStatus, s3)), t3);
    }
    this._set("layers", e7);
  }
  get layers() {
    return this._get("layers");
  }
  get state() {
    const {
      layers: e7
    } = this;
    return e7 && 0 !== e7.length ? e7.some((e8) => "loading" === e8.loadStatus || "not-loaded" === e8.loadStatus) ? "loading" : "ready" : "disabled";
  }
  get numberOfFeatureTemplates() {
    return Array.from(this._featureTemplatesByLayer.values()).reduce((e7, t3) => e7 + t3.length, 0);
  }
  get items() {
    if (0 === this.numberOfFeatureTemplates) return this._releasePreviousItems(), [];
    const e7 = this._featureTemplatesByLayer, t3 = [], s3 = null != this.filterFunction ? this.filterFunction : p4._nullFilterFunction;
    for (const [l2, i3] of e7) if (l2.loaded || "subtype-sublayer" === l2.type && l2.parent?.loaded) {
      const e8 = O(l2)?.operations;
      if (e8?.supportsEditing && e8?.supportsAdd) for (const r4 of i3) t3.push({
        layer: l2,
        template: r4,
        matchesFilter: s3({
          label: r4.name
        })
      });
    }
    if (null == this._groupByFunction) {
      const e8 = t3.filter(({
        matchesFilter: e9
      }) => e9).map(({
        template: e9,
        layer: t4
      }) => this._createItem(e9, t4));
      return this._releasePreviousItems(), e8;
    }
    const r3 = /* @__PURE__ */ new Map();
    for (const l2 of t3) {
      const {
        template: e8,
        layer: t4
      } = l2, s4 = this._groupByFunction({
        template: e8,
        layer: t4
      }), {
        key: o4,
        label: a4
      } = null != s4.key ? s4 : p4.nullGroupBy;
      r3.has(o4) || r3.set(o4, {
        label: a4,
        templateItemInfos: []
      }), r3.get(o4)?.templateItemInfos.push(l2);
    }
    const o3 = [];
    for (const l2 of r3.values()) {
      const {
        label: e8,
        templateItemInfos: t4
      } = l2, r4 = t4.filter(({
        matchesFilter: e9
      }) => e9), a4 = s3({
        label: e8
      }) ? t4 : t4.length > 0 ? r4 : [];
      if (a4.length > 0) {
        const t5 = a4.map(({
          template: e9,
          layer: t6
        }) => this._createItem(e9, t6));
        o3.push(this._createGroup(e8, t5));
      }
    }
    return 1 === o3.length && o3[0].label === p4.nullGroupBy.label ? (this._releasePreviousItems(), o3[0].items) : (this._releasePreviousItems(), o3);
  }
  refresh() {
    this.notifyChange("items");
  }
  select(e7, {
    emit: t3 = true
  } = {}) {
    const s3 = this.selectedItem, r3 = e7?.clone() || null;
    this._set("selectedItem", r3), t3 && this.emit("select", {
      item: r3,
      oldItem: s3,
      template: r3?.template ?? null
    });
  }
  _createItem(e7, t3) {
    const s3 = this._itemPool.acquire(), r3 = this.disabledItemFunction?.({
      template: e7,
      layer: t3
    }) ?? false;
    return s3.set({
      disabled: r3,
      layer: t3,
      template: e7
    }), s3;
  }
  _createGroup(e7, t3) {
    const s3 = this._groupPool.acquire();
    return s3.set("label", e7), s3.items = t3, s3;
  }
  _releasePreviousItems() {
    this._destroyItems(this._get("items"));
  }
  _destroyItems(e7) {
    if (!e7) return;
    e7[0] instanceof m ? e7.forEach((e8) => this._destroyItem(e8)) : e7.forEach((e8) => this._destroyGroup(e8));
  }
  _destroyGroup(e7) {
    e7.items.forEach((e8) => this._destroyItem(e8)), e7.items.length = 0, this._groupPool.release(e7);
  }
  _destroyItem(e7) {
    e7.layer = null, e7.template = null, this._itemPool.release(e7);
  }
  _ensureGroupByObject(e7) {
    return "string" == typeof e7 ? {
      key: e7,
      label: e7
    } : e7;
  }
};
c2.nullGroupBy = {
  key: Symbol(),
  label: "Other​"
}, c2._nullFilterFunction = (e7) => true, e2([y()], c2.prototype, "_featureTemplatesByLayer", null), e2([y()], c2.prototype, "_groupByFunction", void 0), e2([y()], c2.prototype, "disabled", void 0), e2([y()], c2.prototype, "disabledItemFunction", void 0), e2([y()], c2.prototype, "filterFunction", void 0), e2([y()], c2.prototype, "groupBy", null), e2([y()], c2.prototype, "layers", null), e2([y()], c2.prototype, "state", null), e2([y({
  readOnly: true
})], c2.prototype, "numberOfFeatureTemplates", null), e2([y({
  readOnly: true
})], c2.prototype, "items", null), e2([y({
  readOnly: true
})], c2.prototype, "selectedItem", void 0), c2 = p4 = e2([a("esri.widgets.FeatureTemplates.FeatureTemplatesViewModel")], c2);
var h = c2;

// ../../../node_modules/@arcgis/core/widgets/FeatureTemplates/ItemList.js
var l = "esri-item-list";
var i2 = `${l}__list-item`;
var r2 = {
  base: l,
  filterContainerSticky: `${l}__filter-container--sticky`,
  group: `${l}__group`,
  groupHeader: `${l}__group__header`,
  item: i2,
  itemDisabled: `${i2}--disabled`,
  itemIcon: `${i2}-icon`,
  itemContentEnd: `${i2}-content-end`,
  noMatchesMessage: `${l}__no-matches-message`,
  scroller: `${l}__scroller`,
  scrollerEnabled: `${l}__scroller--enabled`
};
var s2 = 4;
function o2(e7) {
  const _a = e7, {
    disabled: t3,
    filterText: l2 = "",
    id: i3,
    messages: r3,
    onFilterChange: s3
  } = _a, o3 = __objRest(_a, [
    "disabled",
    "filterText",
    "id",
    "messages",
    "onFilterChange"
  ]);
  return n("div", {
    key: i3
  }, e7.filterEnabled ?? 1 ? c3({
    disabled: t3,
    filterText: l2,
    id: i3,
    messages: r3,
    onFilterChange: s3
  }) : null, d3(__spreadProps(__spreadValues({}, o3), {
    disabled: t3,
    enableListScroll: e7.enableListScroll ?? true,
    filterText: l2,
    messages: r3
  })));
}
function a3(e7) {
  return !!e7.items;
}
function d3(e7) {
  const _a = e7, {
    headingLevel: l2,
    items: i3
  } = _a, s3 = __objRest(_a, [
    "headingLevel",
    "items"
  ]);
  return 0 === i3.length ? n("div", {
    class: r2.noMatchesMessage,
    key: "no-matches"
  }, e7.messages.noMatches) : n("div", {
    class: f({
      [r2.scroller]: true,
      [r2.scrollerEnabled]: !!e7.enableListScroll
    }),
    key: "item-container"
  }, i3.map((e8) => a3(e8) ? b(__spreadProps(__spreadValues({}, s3), {
    group: e8,
    headingLevel: l2
  })) : m3(__spreadProps(__spreadValues({}, s3), {
    grouped: true,
    item: e8
  }))));
}
function c3(e7) {
  const {
    disabled: t3,
    messages: l2,
    filterText: i3,
    enableListScroll: s3
  } = e7;
  return n("div", {
    class: s3 ? void 0 : r2.filterContainerSticky,
    key: "filter"
  }, n("calcite-input", {
    disabled: t3,
    placeholder: l2.filterPlaceholder,
    type: "search",
    value: i3,
    onCalciteInputInput: (t4) => {
      const n2 = t4.currentTarget;
      e7.onFilterChange && e7.onFilterChange(n2.value);
    }
  }));
}
function m3(e7) {
  const {
    disabled: l2,
    grouped: i3,
    identify: s3,
    item: o3,
    onItemMouseEnter: a4,
    onItemMouseLeave: d4,
    onItemSelect: c5,
    renderIcon: m4,
    renderCustomItem: b3,
    renderItemContent: g2,
    renderItemContentEnd: f2,
    renderItemLabel: v,
    renderItemDescription: _,
    selectedItem: h2
  } = e7, I2 = u2(o3, s3), y4 = I2 === u2(h2, s3), C2 = b3?.(e7);
  if (C2) return C2;
  const k2 = g2?.(o3), $ = f2?.(o3), L = !(!o3.disabled && !l2);
  return n("calcite-list-item", {
    afterUpdate: (e8) => {
      e8.selected = y4;
    },
    "aria-level": i3 ? "2" : "",
    class: f({
      [r2.item]: true,
      [r2.itemDisabled]: L
    }),
    "data-item": o3,
    description: k2 ? void 0 : _?.(o3) ?? void 0,
    disabled: L,
    key: I2,
    label: k2 ? void 0 : v?.(o3) ?? o3.label ?? void 0,
    onmouseenter: (e8) => a4?.(p5(e8)),
    onmouseleave: (e8) => d4?.(p5(e8)),
    selected: y4,
    tabIndex: L ? -1 : 0,
    onCalciteListItemSelect: (e8) => {
      e8.preventDefault(), c5?.(p5(e8));
    }
  }, n("div", {
    class: r2.itemIcon,
    key: "content-start",
    slot: "content-start"
  }, m4?.(o3)), k2 ? n("div", {
    key: "content",
    slot: "content"
  }, k2) : null, $ ? n("div", {
    class: r2.itemContentEnd,
    key: "content-end",
    slot: "content-end"
  }, $) : null);
}
function u2(e7, t3) {
  return e7 ? `${t3?.(e7) || e7.id}__${e7.label}` : "";
}
function p5(e7) {
  return e7.currentTarget["data-item"];
}
function b(t3) {
  const _a = t3, {
    disabled: l2,
    group: i3,
    headingLevel: o3 = s2,
    selectionMode: a4 = "none",
    renderCustomGroupContent: d4
  } = _a, c5 = __objRest(_a, [
    "disabled",
    "group",
    "headingLevel",
    "selectionMode",
    "renderCustomGroupContent"
  ]), u3 = d4?.(t3);
  return n("div", {
    class: r2.group,
    key: i3.label ?? void 0
  }, n(e5, {
    class: r2.groupHeader,
    level: o3
  }, i3.label), u3 || n("calcite-list", {
    disabled: l2,
    selectionAppearance: "border",
    selectionMode: a4
  }, i3.items.map((e7) => m3(__spreadProps(__spreadValues({}, c5), {
    disabled: l2,
    item: e7,
    grouped: true
  })))));
}

// ../../../node_modules/@arcgis/core/widgets/FeatureTemplates/VisibleElements.js
var t2 = class extends S {
  constructor(o3) {
    super(o3), this.filter = true;
  }
};
e2([y({
  type: Boolean,
  nonNullable: true
})], t2.prototype, "filter", void 0), t2 = e2([a("esri.widgets.FeatureTemplates.VisibleElements")], t2);
var c4 = t2;

// ../../../node_modules/@arcgis/core/widgets/FeatureTemplates.js
var b2 = {
  base: "esri-feature-templates"
};
function I(e7) {
  return e7.length > 0 && V(e7[0]);
}
function y3(e7) {
  return e7.id;
}
var g = class extends B {
  constructor(e7, t3) {
    super(e7, t3), this.enableListScroll = true, this.filterText = "", this.headingLevel = 4, this.messages = null, this.messagesCommon = null, this.selectionMode = "none", this.viewModel = new h(), this.visibleElements = new c4(), this.renderCustomItem = (e8) => null, this.renderCustomGroupContent = (e8) => null, this.renderItemLabel = () => null, this.renderItemDescription = () => null, this.renderItemContent = (e8) => null, this.renderItemContentEnd = (e8) => null, this._iconIntersectionObserver = new IntersectionObserver((e8, t4) => {
      e8.forEach((e9) => __async(this, null, function* () {
        if (e9.isIntersecting) {
          const o3 = e9.target;
          if (w(o3)) return void t4.unobserve(o3);
          const r3 = C(o3), {
            layer: i3,
            template: s3
          } = r3;
          j(o3, true);
          const n2 = yield m.fetchThumbnail(i3, s3).catch(() => (j(o3, false), null));
          if (null == n2) return;
          o3.appendChild(n2);
        }
      }));
    }), this._renderItemIcon = (e8) => k(e8.layer) ? n("span", {
      "data-has-icon": true,
      "data-item": e8,
      key: "icon"
    }, n("calcite-icon", {
      icon: "table"
    })) : n("span", {
      afterCreate: this._afterItemCreateOrUpdate,
      afterRemoved: this._afterItemRemoved,
      afterUpdate: this._afterItemCreateOrUpdate,
      "data-has-icon": false,
      "data-item": e8,
      key: "icon"
    }), this._afterItemCreateOrUpdate = (e8) => {
      this._iconIntersectionObserver?.observe(e8);
    }, this._afterItemRemoved = (e8) => {
      this._iconIntersectionObserver?.unobserve(e8);
    };
  }
  initialize() {
    const e7 = ({
      label: e8
    }) => !this.filterText || !!e8?.toLowerCase().includes(this.filterText.toLowerCase());
    this.addHandles(d(() => this.viewModel, (t3, o3) => {
      t3 && !t3.filterFunction && (this.filterFunction = e7), o3 && o3 !== t3 && o3.filterFunction === e7 && (o3.filterFunction = null);
    }, P));
  }
  destroy() {
    this._iconIntersectionObserver?.disconnect(), this._iconIntersectionObserver = null;
  }
  loadDependencies() {
    return r({
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      loader: () => import("./calcite-loader-XGS6NTUP.js"),
      input: () => import("./calcite-input-WIKYKTSA.js"),
      list: () => import("./calcite-list-IDJ56B53.js"),
      "list-item": () => import("./calcite-list-item-TVXB7DPG.js"),
      notice: () => import("./calcite-notice-GSFPF5BZ.js")
    });
  }
  get disabled() {
    return this.viewModel.disabled;
  }
  set disabled(e7) {
    this.viewModel.disabled = e7;
  }
  get filterFunction() {
    return this.viewModel.filterFunction;
  }
  set filterFunction(e7) {
    this.viewModel.filterFunction = e7;
  }
  get groupBy() {
    return this.viewModel.groupBy;
  }
  set groupBy(e7) {
    this.viewModel.groupBy = e7;
  }
  get icon() {
    return "list-rectangle";
  }
  set icon(e7) {
    this._overrideIfSome("icon", e7);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e7) {
    this._overrideIfSome("label", e7);
  }
  get layers() {
    return this.viewModel.layers;
  }
  set layers(e7) {
    this.viewModel.layers = e7;
  }
  get selectedItem() {
    return this.viewModel.selectedItem;
  }
  select(e7, t3) {
    return this.viewModel.select(e7, t3);
  }
  render() {
    const {
      disabled: e7,
      enableListScroll: t3,
      filterText: o3,
      headingLevel: r3,
      messages: i3,
      viewModel: {
        items: s3,
        numberOfFeatureTemplates: n2,
        selectedItem: c5,
        state: m4
      }
    } = this, p6 = this.visibleElements.filter && n2 > 1;
    if (I(s3)) {
      const e8 = s3.find((e9) => e9.label === h.nullGroupBy.label);
      e8 && (e8.label = i3.other);
    }
    return n("div", {
      "aria-label": i3.widgetLabel,
      class: this.classes(b2.base, e4.widget)
    }, "loading" === m4 ? n("calcite-loader", {
      key: "loader",
      label: this.messagesCommon.loading,
      type: "indeterminate"
    }) : "ready" === m4 ? n(o2, {
      disabled: e7,
      enableListScroll: t3,
      filterEnabled: p6,
      filterText: o3,
      headingLevel: r3,
      id: this.id,
      identify: y3,
      items: s3,
      messages: {
        filterPlaceholder: i3.filterPlaceholder,
        noItems: i3.noItems,
        noMatches: i3.noMatches
      },
      renderCustomGroupContent: this.renderCustomGroupContent,
      renderCustomItem: this.renderCustomItem,
      renderIcon: this._renderItemIcon,
      renderItemContent: this.renderItemContent,
      renderItemContentEnd: this.renderItemContentEnd,
      renderItemDescription: this.renderItemDescription,
      renderItemLabel: this.renderItemLabel,
      selectedItem: c5 ?? void 0,
      selectionMode: this.selectionMode ?? void 0,
      onFilterChange: (e8) => {
        this.filterText = e8, this.viewModel.refresh();
      },
      onItemSelect: (e8) => !V(e8) && this.viewModel.select(e8)
    }) : null);
  }
};
function C(e7) {
  return e7?.["data-item"];
}
function w(e7) {
  return !!e7?.["data-has-icon"];
}
function j(e7, t3) {
  e7 && (e7["data-has-icon"] = t3);
}
e2([y()], g.prototype, "disabled", null), e2([y()], g.prototype, "enableListScroll", void 0), e2([y()], g.prototype, "filterFunction", null), e2([y()], g.prototype, "filterText", void 0), e2([y()], g.prototype, "groupBy", null), e2([y()], g.prototype, "headingLevel", void 0), e2([y()], g.prototype, "icon", null), e2([y()], g.prototype, "label", null), e2([y()], g.prototype, "layers", null), e2([y(), e3("esri/widgets/FeatureTemplates/t9n/FeatureTemplates")], g.prototype, "messages", void 0), e2([y(), e3("esri/t9n/common")], g.prototype, "messagesCommon", void 0), e2([y({
  readOnly: true
})], g.prototype, "selectedItem", null), e2([y()], g.prototype, "selectionMode", void 0), e2([y(), e6("select")], g.prototype, "viewModel", void 0), e2([y({
  type: c4,
  nonNullable: true
})], g.prototype, "visibleElements", void 0), e2([y()], g.prototype, "renderCustomItem", void 0), e2([y()], g.prototype, "renderCustomGroupContent", void 0), e2([y()], g.prototype, "renderItemLabel", void 0), e2([y()], g.prototype, "renderItemDescription", void 0), e2([y()], g.prototype, "renderItemContent", void 0), e2([y()], g.prototype, "renderItemContentEnd", void 0), g = e2([a("esri.widgets.FeatureTemplates")], g);
var F = g;

export {
  t,
  h,
  o2 as o,
  m3 as m,
  F
};
//# sourceMappingURL=chunk-SESO3P5F.js.map
