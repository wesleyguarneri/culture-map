import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f
} from "./chunk-G2BTFFN6.js";
import {
  t as t2,
  u
} from "./chunk-PE64OF24.js";
import {
  t
} from "./chunk-JPJAW3N6.js";
import {
  m
} from "./chunk-AENXIHUM.js";
import "./chunk-Z3B4X2BG.js";
import {
  e as e5
} from "./chunk-5L5LGHM5.js";
import {
  e as e4
} from "./chunk-XJ4XZPHY.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import "./chunk-HKAONIBH.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-DC5LRNPY.js";
import {
  s as s3
} from "./chunk-ASCK5HJ5.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import {
  E,
  j,
  o as o2
} from "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import {
  s as s2
} from "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S,
  i
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Bookmarks/BookmarksUserState.js
var s4 = class extends S {
  constructor(t4) {
    super(t4);
  }
  get editedBookmark() {
    const {
      bookmark: t4
    } = this;
    return t4 ? this._get("editedBookmark") || t4.clone() : null;
  }
  get customUrl() {
    return this.editedBookmark?.thumbnail?.isSecureUrl ? this.editedBookmark?.thumbnail?.url : null;
  }
  set customUrl(t4) {
    this._override("customUrl", t4);
  }
  get screenshotUrl() {
    return this.editedBookmark?.thumbnail?.isDataURI ? this.editedBookmark?.thumbnail?.url : null;
  }
  set screenshotUrl(t4) {
    this._override("screenshotUrl", t4);
  }
  get state() {
    return this._get("state");
  }
  set state(t4) {
    this.validationState = void 0, this.loading = void 0, this._set("state", t4);
  }
  get thumbnailState() {
    return this.editedBookmark?.thumbnail?.url ? this.editedBookmark?.thumbnail?.isSecureUrl ? "url" : "screenshot" : "none";
  }
  set thumbnailState(t4) {
    this._overrideIfSome("thumbnailState", t4);
  }
};
e([y()], s4.prototype, "bookmark", void 0), e([y({
  readOnly: true
})], s4.prototype, "editedBookmark", null), e([y()], s4.prototype, "customUrl", null), e([y()], s4.prototype, "screenshotUrl", null), e([y()], s4.prototype, "state", null), e([y()], s4.prototype, "thumbnailState", null), e([y()], s4.prototype, "validationState", void 0), e([y()], s4.prototype, "loading", void 0), s4 = e([a("esri.widgets.Bookmarks.BookmarksUserState")], s4);
var i2 = s4;

// ../../../node_modules/@arcgis/core/widgets/Bookmarks/BookmarksViewModel.js
var m2 = V.ofType(f);
var u2 = {
  width: 128,
  height: 128,
  format: "png"
};
var k = {
  takeScreenshot: true,
  captureViewpoint: true,
  captureRotation: true,
  captureScale: true,
  captureTimeExtent: true
};
var w = {
  time: true
};
var d = class extends t(o.EventedAccessor) {
  constructor(t4) {
    super(t4), this.capabilities = __spreadValues({}, w), this.activeBookmark = null, this.view = null;
  }
  destroy() {
    this.view = null, this._set("activeBookmark", null);
  }
  castCapabilities(t4) {
    return __spreadValues(__spreadValues({}, w), t4);
  }
  get bookmarks() {
    return this.view?.map?.bookmarks ?? new m2();
  }
  set bookmarks(t4) {
    this._overrideIfSome("bookmarks", t4);
  }
  set defaultCreateOptions(t4) {
    this._set("defaultCreateOptions", __spreadValues(__spreadValues({}, k), t4));
  }
  get defaultCreateOptions() {
    return k;
  }
  set defaultEditOptions(t4) {
    this._set("defaultEditOptions", __spreadValues(__spreadValues({}, k), t4));
  }
  get defaultEditOptions() {
    return k;
  }
  get state() {
    const {
      view: t4
    } = this;
    return t4 && !t4.ready ? "loading" : "ready";
  }
  createBookmark(t4) {
    return __async(this, null, function* () {
      const {
        view: e6,
        defaultCreateOptions: o4,
        capabilities: a3
      } = this;
      if (!e6) throw new s("create-bookmark:invalid-view", "Cannot create a bookmark without a view.");
      const {
        takeScreenshot: r2,
        screenshotSettings: n5,
        captureViewpoint: s6,
        captureRotation: c,
        captureScale: l,
        captureTimeExtent: m3
      } = __spreadValues(__spreadValues({}, o4), t4), u3 = r2 ? yield this._createThumbnail(n5) : void 0, k2 = a3.time && m3 && null != e6.timeExtent ? e6.timeExtent.clone() : void 0;
      return new f(__spreadValues(__spreadValues(__spreadValues({}, u3 && {
        thumbnail: u3
      }), m3 && {
        timeExtent: k2
      }), s6 && {
        viewpoint: this._createViewpoint({
          view: e6,
          captureScale: l,
          captureRotation: c
        })
      }));
    });
  }
  editBookmark(t4, e6) {
    return __async(this, null, function* () {
      if (!t4) return t4;
      const {
        view: o4,
        defaultEditOptions: a3
      } = this;
      if (!o4) throw new s("edit-bookmark:invalid-view", "Cannot edit a bookmark without a view.");
      const {
        takeScreenshot: r2,
        screenshotSettings: n5,
        captureViewpoint: s6,
        captureRotation: c,
        captureScale: p,
        captureTimeExtent: l
      } = __spreadValues(__spreadValues({}, a3), e6), m3 = r2 ? yield this._createThumbnail(n5) : void 0;
      return m3 && (t4.thumbnail = m3), s6 && (t4.viewpoint = this._createViewpoint({
        view: o4,
        captureScale: p,
        captureRotation: c
      })), l && null != o4.timeExtent && (t4.timeExtent = o4.timeExtent.clone()), this.emit("bookmark-edit", {
        bookmark: t4
      }), t4;
    });
  }
  goTo(t4) {
    const {
      capabilities: e6,
      view: o4
    } = this;
    if (!o4) throw new s("go-to:invalid-view", "Cannot go to a bookmark without a view");
    const a3 = t4?.viewpoint;
    if (!a3) throw new s("go-to:invalid-bookmark", "Cannot go to a bookmark that does not contain a 'viewpoint'.", {
      bookmark: t4
    });
    this._set("activeBookmark", t4);
    const r2 = {
      target: a3
    }, n5 = this.callGoTo(r2), s6 = t4?.timeExtent;
    return e6.time && s6 && (o4.timeExtent = s6), this.emit("bookmark-select", {
      bookmark: t4
    }), n5.catch(() => {
    }).then(() => this._set("activeBookmark", null)), n5;
  }
  _createThumbnail(t4) {
    return __async(this, null, function* () {
      const {
        view: e6
      } = this;
      if (!e6) throw new s("bookmark:invalid-view", "Cannot create slide thumbnail without a view");
      const o4 = yield e6.takeScreenshot(__spreadValues(__spreadValues({}, u2), t4));
      return new u({
        url: o4.dataUrl
      });
    });
  }
  _createViewpoint({
    view: t4,
    captureRotation: o4,
    captureScale: i3
  }) {
    const a3 = t4.viewpoint?.clone();
    return new m({
      targetGeometry: t4.extent?.clone(),
      rotation: (o4 ? a3?.rotation : null) ?? 0,
      scale: (i3 ? a3?.scale : null) ?? 0
    });
  }
};
e([y()], d.prototype, "capabilities", void 0), e([s2("capabilities")], d.prototype, "castCapabilities", null), e([y({
  readOnly: true
})], d.prototype, "activeBookmark", void 0), e([y({
  type: m2
})], d.prototype, "bookmarks", null), e([y()], d.prototype, "defaultCreateOptions", null), e([y()], d.prototype, "defaultEditOptions", null), e([y({
  readOnly: true
})], d.prototype, "state", null), e([y()], d.prototype, "view", void 0), d = e([a("esri.widgets.Bookmarks.BookmarksViewModel")], d);
var h = d;

// ../../../node_modules/@arcgis/core/widgets/Bookmarks/BookmarksVisibleElements.js
var n3 = class extends S {
  constructor() {
    super(...arguments), this.addBookmarkButton = false, this.closeButton = false, this.collapseButton = false, this.editBookmarkButton = false, this.filter = false, this.flow = true, this.heading = false, this.thumbnail = true, this.time = true;
  }
  get addBookmark() {
    return i(n.getLogger(this), "addBookmark", {
      replacement: "addBookmarkButton",
      version: "4.29",
      warnOnce: true
    }), this.addBookmarkButton;
  }
  set addBookmark(o4) {
    i(n.getLogger(this), "addBookmark", {
      replacement: "addBookmarkButton",
      version: "4.29",
      warnOnce: true
    }), this.addBookmarkButton = o4;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "addBookmark", null), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "addBookmarkButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "closeButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "collapseButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "editBookmarkButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "filter", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "flow", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "heading", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "thumbnail", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n3.prototype, "time", void 0), n3 = e([a("esri.widgets.Bookmarks.BookmarksVisibleElements")], n3);
var s5 = n3;

// ../../../node_modules/@arcgis/core/widgets/Bookmarks/css.js
var o3 = "esri-bookmarks";
var a2 = `${o3}__authoring`;
var n4 = `${o3}__bookmark`;
var t3 = {
  base: o3,
  noBookmarksHeader: `${o3}__no-bookmarks-heading`,
  noBookmarksDescription: `${o3}__no-bookmarks-description`,
  form: `${o3}__form`,
  list: `${o3}__list`,
  loader: `${o3}__loader`,
  filterNoResults: `${o3}__filter-no-results`,
  formContent: `${o3}__form-content`,
  addBookmarkButton: `${o3}__add-bookmark-button`,
  editBookmarkInput: `${o3}__edit-bookmark-input`,
  addBookmarkInput: `${o3}__add-bookmark-input`,
  dragEnabled: `${o3}--drag-enabled`,
  bookmarkImage: `${o3}__image`,
  bookmarkImageContainer: `${n4}-image-container`,
  bookmarkContent: `${n4}-content`,
  bookmarkContentLabel: `${n4}-content-label`,
  authoring: a2,
  authoringImageContainer: `${a2}-image-container`,
  authoringRefreshThumbnailButton: `${a2}-refresh-thumbnail-button`
};

// ../../../node_modules/@arcgis/core/widgets/Bookmarks.js
var w2 = class extends s3(B) {
  constructor(e6, t4) {
    super(e6, t4), this._addInputNode = null, this._editInputNode = null, this._urlEditInputNode = null, this._lastDragDetail = null, this._selectedDragBookmarkUid = null, this._editIncludeTimeExtent = void 0, this._userState = null, this._focusRootFlowItem = false, this._focusAddFlowItem = false, this._focusEditFlowItem = false, this.disabled = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterText = "", this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.viewModel = new h(), this.visibleElements = new s5(), this._onCalciteListOrderChange = (e7) => {
      const {
        _lastDragDetail: t5,
        bookmarks: o4
      } = this, {
        toEl: i3,
        fromEl: r2,
        dragEl: a3,
        newIndex: s6
      } = e7;
      if (!o4.length) return;
      if (!r2 || !i3 || t5?.newIndex === s6 && t5?.dragEl === a3 && t5?.toEl === i3 && t5?.fromEl === r2) return;
      this._lastDragDetail = e7;
      const n5 = Array.from(r2.children).filter((e8) => e8?.matches("calcite-list-item")).map((e8) => e8.value);
      o4.sort((e8, t6) => {
        const o5 = n5.indexOf(e8.uid), i4 = n5.indexOf(t6.uid);
        return o5 > i4 ? 1 : o5 < i4 ? -1 : 0;
      });
    };
  }
  normalizeCtorArgs(e6) {
    return null != e6?.editingEnabled && null != e6.visibleElements ? __spreadProps(__spreadValues({}, e6), {
      visibleElements: new s5(__spreadProps(__spreadValues({}, e6.visibleElements), {
        addBookmarkButton: e6.editingEnabled,
        editBookmarkButton: e6.editingEnabled
      }))
    }) : e6;
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-BXG7XWUR.js"),
      button: () => import("./calcite-button-LAMWLR56.js"),
      "chip-group": () => import("./calcite-chip-group-QYO44XDU.js"),
      chip: () => import("./calcite-chip-4NNOBJDH.js"),
      fab: () => import("./calcite-fab-HCJ6FNUC.js"),
      flow: () => import("./calcite-flow-WGSZ7TX4.js"),
      "flow-item": () => import("./calcite-flow-item-6QKZ7KRC.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      input: () => import("./calcite-input-WIKYKTSA.js"),
      "input-message": () => import("./calcite-input-message-I3ARMNZ6.js"),
      label: () => import("./calcite-label-7BB63OZC.js"),
      list: () => import("./calcite-list-IDJ56B53.js"),
      "list-item": () => import("./calcite-list-item-TVXB7DPG.js"),
      loader: () => import("./calcite-loader-XGS6NTUP.js"),
      notice: () => import("./calcite-notice-GSFPF5BZ.js"),
      scrim: () => import("./calcite-scrim-GBXWCUR2.js"),
      switch: () => import("./calcite-switch-LUKP66OP.js"),
      table: () => import("./calcite-table-CTQHOTKR.js"),
      "table-cell": () => import("./calcite-table-cell-73DFYGI3.js"),
      "table-header": () => import("./calcite-table-header-5VD5GMT4.js"),
      "table-row": () => import("./calcite-table-row-CXGJZ26H.js")
    });
  }
  get defaultCreateOptions() {
    return this.viewModel.defaultCreateOptions;
  }
  set defaultCreateOptions(e6) {
    this.viewModel.defaultCreateOptions = e6;
  }
  get defaultEditOptions() {
    return this.viewModel.defaultEditOptions;
  }
  set defaultEditOptions(e6) {
    this.viewModel.defaultEditOptions = e6;
  }
  get bookmarks() {
    return this.viewModel.bookmarks;
  }
  set bookmarks(e6) {
    this.viewModel.bookmarks = e6;
  }
  get editingEnabled() {
    return i(n.getLogger(this), "editingEnabled", {
      replacement: "dragEnabled, visibleElements.editBookmarkButton, visibleElements.addBookmarkButton",
      version: "4.29",
      warnOnce: true
    }), this.dragEnabled && this.visibleElements.editBookmarkButton && this.visibleElements.addBookmarkButton;
  }
  set editingEnabled(e6) {
    i(n.getLogger(this), "editingEnabled", {
      replacement: "dragEnabled, visibleElements.editBookmarkButton, visibleElements.addBookmarkButton",
      version: "4.29",
      warnOnce: true
    }), this.dragEnabled = e6, this.visibleElements.editBookmarkButton = e6, this.visibleElements.addBookmarkButton = e6;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e6) {
    this.viewModel.goToOverride = e6;
  }
  get icon() {
    return "bookmark";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  endAddBookmark() {
    this._userState = null;
  }
  goTo(e6) {
    return this.viewModel.goTo(e6);
  }
  render() {
    return n2("div", {
      class: this.classes(t3.base, e3.widget, e3.panel)
    }, this._renderBookmarksContainer());
  }
  startAddBookmark() {
    this._userState = new i2({
      state: "add"
    }), this._focusAddFlowItem = true;
  }
  _renderNoBookmarksContainer(e6) {
    const {
      messages: t4,
      viewModel: {
        state: o4
      }
    } = this;
    return e6.length || "loading" === o4 ? null : n2("div", {
      class: e3.empty,
      key: "no-bookmarks"
    }, n2("calcite-icon", {
      icon: "bookmark",
      scale: "l"
    }), n2(e4, {
      class: this.classes(e3.heading, t3.noBookmarksHeader),
      level: this.headingLevel
    }, t4?.noBookmarksHeading), n2("p", {
      class: t3.noBookmarksDescription
    }, t4.noBookmarksDescription));
  }
  _renderEditBookmarkFlowItems() {
    const {
      _userState: e6
    } = this, t4 = e6?.editedBookmark;
    return t4 && "edit" === e6?.state ? this._renderEditingBookmark(t4) : [];
  }
  _renderBookmarkItems(e6) {
    return e6 ? e6.toArray().map((e7) => this._renderBookmark(e7)) : [];
  }
  _handleCalciteListDragEnd(e6) {
    const {
      fromEl: t4,
      dragEl: o4,
      oldIndex: i3
    } = e6;
    t4.insertBefore(o4, t4.children[i3]);
  }
  _renderBookmarksContainer() {
    const {
      viewModel: {
        state: e6,
        bookmarks: o4
      },
      dragEnabled: i3,
      messages: r2,
      disabled: a3,
      filterPlaceholder: s6,
      filterText: n5,
      visible: l,
      headingLevel: d2,
      visibleElements: {
        closeButton: m3,
        collapseButton: c,
        filter: u3,
        heading: k2,
        flow: h2
      },
      uid: p
    } = this, g = o4.filter(O), _ = g.length ? n2("calcite-list", {
      class: t3.list,
      dragEnabled: i3,
      filterEnabled: u3,
      filterPlaceholder: s6,
      filterText: n5,
      group: `bookmarks-${p}`,
      key: "bookmark-list",
      label: r2.widgetLabel,
      selectionAppearance: "border",
      selectionMode: "none",
      onCalciteListDragEnd: (e7) => this._handleCalciteListDragEnd(e7.detail),
      onCalciteListFilter: (e7) => this.filterText = e7.target?.filterText ?? "",
      onCalciteListOrderChange: (e7) => this._onCalciteListOrderChange(e7.detail)
    }, this._renderBookmarkItems(g), u3 ? n2("div", {
      class: t3.filterNoResults,
      slot: "filter-no-results"
    }, n2("calcite-notice", {
      kind: "info",
      open: true,
      width: "full"
    }, n2("div", {
      slot: "message"
    }, r2.noBookmarksHeading), ";")) : null) : null, v = [n2("calcite-flow-item", {
      afterCreate: this._focusRootFlowItemNode,
      afterUpdate: this._focusRootFlowItemNode,
      bind: this,
      closable: m3,
      closed: !l,
      collapsible: c,
      disabled: a3,
      heading: k2 ? r2.widgetLabel : void 0,
      headingLevel: d2,
      loading: "loading" === e6,
      onCalciteFlowItemClose: () => this.visible = false
    }, this._renderNoBookmarksContainer(g), _, this._renderAddBookmarkButton()), this._renderAddingBookmark(), this._renderEditBookmarkFlowItems()];
    return l ? h2 ? n2("calcite-flow", {
      key: "root-flow"
    }, v) : v : null;
  }
  _renderAddBookmarkButton() {
    const {
      messages: e6,
      _userState: t4,
      disabled: o4,
      viewModel: {
        view: i3,
        state: r2
      },
      visibleElements: {
        addBookmarkButton: a3
      }
    } = this, s6 = t4?.loading ?? false;
    return i3 && "loading" !== r2 && a3 ? n2("calcite-fab", {
      appearance: "outline-fill",
      bind: this,
      class: t3.addBookmarkButton,
      disabled: o4 || s6,
      icon: "plus",
      key: "add-bookmark-item",
      kind: "neutral",
      loading: s6,
      onclick: this.startAddBookmark,
      slot: "fab",
      text: e6.addBookmark,
      textEnabled: true,
      title: e6.addBookmark,
      type: "button"
    }) : null;
  }
  _renderEditContainer(e6) {
    const {
      messagesCommon: t4,
      visibleElements: {
        editBookmarkButton: o4
      }
    } = this, i3 = `${t4.edit} ${this._getBookmarkTitle(e6)}`;
    return o4 ? n2("calcite-action", {
      appearance: "transparent",
      icon: "pencil",
      key: "edit-action",
      onclick: () => this._showEditBookmarkForm(e6),
      slot: "actions-end",
      text: i3,
      title: i3
    }) : null;
  }
  _renderBookmarkImage(e6, t4) {
    return t4 ? n2("img", {
      alt: "",
      class: t3.bookmarkImage,
      key: "bookmark-image",
      src: e6.thumbnail?.url
    }) : null;
  }
  _renderBookmarkTimeSwitch(e6) {
    const {
      messages: t4,
      viewModel: {
        view: o4
      }
    } = this, {
      timeExtent: i3
    } = e6;
    return o4?.timeExtent ?? i3 ? n2("calcite-label", {
      layout: "inline-space-between"
    }, t4.includeTimeExtent, n2("calcite-switch", {
      checked: !!i3,
      onCalciteSwitchChange: (e7) => {
        this._editIncludeTimeExtent = !!e7.target.checked;
      }
    })) : null;
  }
  _renderEditBookmarkTimeExtent(e6) {
    return this._editIncludeTimeExtent ? this._renderBookmarkTimeExtent(e6) : null;
  }
  _getTimeExtentStrings(e6) {
    const {
      visibleElements: t4
    } = this, {
      timeExtent: o4
    } = e6;
    if (!o4) return {};
    const {
      start: i3,
      end: r2
    } = o4, a3 = null != r2 && (null == i3 || i3.getTime() !== r2.getTime()), s6 = i3 ? this._formatDate(i3) : "", n5 = i3 && t4.time ? this._formatTime(i3) : "";
    if (!a3) return {
      startDate: s6,
      startTime: n5
    };
    return {
      startDate: s6,
      startTime: n5,
      endDate: this._formatDate(r2),
      endTime: t4.time ? this._formatTime(r2) : ""
    };
  }
  _renderTimeExtentDescription(e6) {
    const {
      startDate: t4,
      startTime: o4,
      endDate: i3,
      endTime: r2
    } = this._getTimeExtentStrings(e6);
    if (!t4) return "";
    const a3 = `${t4} ${o4}`;
    return i3 ? `${a3} - ${`${i3} ${r2}`}` : a3;
  }
  _renderBookmarkTimeExtent(e6, t4 = false) {
    const {
      messages: o4
    } = this, {
      startDate: i3,
      startTime: r2,
      endDate: a3,
      endTime: s6
    } = this._getTimeExtentStrings(e6), n5 = t4 ? null : n2("calcite-table-row", {
      slot: "table-header"
    }, n2("calcite-table-header", {
      heading: o4.startDate
    }), a3 ? n2("calcite-table-header", {
      heading: o4.endDate
    }) : null);
    return i3 ? n2("calcite-table", {
      caption: o4.timeExtent,
      scale: "s"
    }, n5, n2("calcite-table-row", null, n2("calcite-table-cell", null, i3, " ", r2 ? [n2("br", null), r2] : null), a3 ? n2("calcite-table-cell", null, a3, s6 ? [n2("br", null), s6] : null) : null)) : null;
  }
  _renderBookmarkActiveScrim(e6, t4) {
    return this.viewModel.activeBookmark === e6 && t4 ? n2("calcite-scrim", {
      key: "bookmark-active-scrim",
      loading: true
    }) : null;
  }
  _renderBookmarkActiveLoader(e6, t4) {
    return this.viewModel.activeBookmark !== e6 || t4 ? null : n2("calcite-loader", {
      class: t3.loader,
      inline: true,
      key: "bookmark-active-loader",
      label: this.messagesCommon.loading
    });
  }
  _renderBookmarkImageIcon(e6, t4) {
    return this.viewModel.activeBookmark === e6 || t4 ? null : n2("calcite-icon", {
      icon: "bookmark",
      key: "bookmark-icon",
      scale: "s"
    });
  }
  _renderBookmarkThumbnail(e6) {
    const t4 = this.visibleElements.thumbnail && !!e6.thumbnail?.url;
    return n2("div", {
      class: t3.bookmarkImageContainer,
      slot: "content-start"
    }, this._renderBookmarkActiveScrim(e6, t4), this._renderBookmarkImage(e6, t4), this._renderBookmarkActiveLoader(e6, t4), this._renderBookmarkImageIcon(e6, t4));
  }
  _focusSelectedDragEl(e6, t4) {
    this._selectedDragBookmarkUid === t4.uid && requestAnimationFrame(() => e6?.setFocus());
  }
  _handleCalciteListItemDragHandleChange(e6, t4) {
    e6.stopPropagation();
    const o4 = e6.target.dragSelected;
    this._selectedDragBookmarkUid = o4 ? t4.uid : null;
  }
  _renderBookmark(e6) {
    return n2("calcite-list-item", {
      afterCreate: (t4) => this._focusSelectedDragEl(t4, e6),
      afterUpdate: (t4) => this._focusSelectedDragEl(t4, e6),
      class: this.classes({
        [t3.dragEnabled]: this.dragEnabled
      }),
      description: this._renderTimeExtentDescription(e6),
      dragSelected: e6.uid === this._selectedDragBookmarkUid,
      key: e6.uid,
      label: this._getBookmarkTitle(e6),
      value: e6.uid,
      onCalciteListItemDragHandleChange: (t4) => this._handleCalciteListItemDragHandleChange(t4, e6),
      onCalciteListItemSelect: () => this._goToBookmark(e6)
    }, this._renderBookmarkThumbnail(e6), this._renderBookmarkContent(e6), this._renderEditContainer(e6));
  }
  _renderBookmarkContent(e6) {
    return n2("div", {
      class: t3.bookmarkContent,
      slot: "content"
    }, n2("span", {
      class: t3.bookmarkContentLabel
    }, this._getBookmarkTitle(e6)), this._renderBookmarkTimeExtent(e6, true));
  }
  _renderEditingBookmarkName(e6) {
    const {
      messages: t4,
      _userState: o4
    } = this, i3 = "name-required" === o4?.validationState;
    return n2("calcite-label", null, t4.title, n2("calcite-input", {
      afterCreate: this._storeEditInput,
      bind: this,
      class: t3.editBookmarkInput,
      name: "bookmark-name",
      placeholder: t4.titlePlaceholder,
      required: true,
      type: "text",
      value: e6.name
    }), i3 ? n2("calcite-input-message", {
      icon: "exclamation-mark-triangle",
      status: "invalid"
    }, t4.invalidTitle) : null);
  }
  _renderEditingBookmarkActions() {
    const {
      messagesCommon: e6,
      _userState: t4
    } = this, o4 = t4?.bookmark;
    return [n2("calcite-button", {
      appearance: "transparent",
      kind: "danger",
      onclick: () => this._deleteBookmark(o4),
      slot: "footer",
      type: "button",
      width: "full"
    }, e6.delete), n2("calcite-button", {
      appearance: "outline",
      bind: this,
      onclick: this._closeEditBookmarkForm,
      slot: "footer",
      type: "button",
      width: "full"
    }, e6.cancel), n2("calcite-button", {
      slot: "footer",
      type: "submit",
      width: "full"
    }, e6.save)];
  }
  _handleUrlEditInputChange() {
    const {
      _userState: e6,
      _urlEditInputNode: t4
    } = this, o4 = t4?.value;
    if (!e6?.editedBookmark || !o4) return;
    e6.validationState = void 0, e6.editedBookmark.thumbnail?.isDataURI && (e6.screenshotUrl = e6.editedBookmark.thumbnail?.url);
    const i3 = new u({
      url: o4
    });
    i3.isSecureUrl && (e6.customUrl = o4, e6.editedBookmark.thumbnail = i3);
  }
  _renderEditingTimeExtent(e6) {
    const {
      capabilities: t4,
      view: o4
    } = this.viewModel, {
      timeExtent: i3
    } = e6;
    return t4.time && (o4?.timeExtent ?? i3) ? n2("div", {
      key: "edit-bookmark-time-container"
    }, this._renderBookmarkTimeSwitch(e6), this._renderEditBookmarkTimeExtent(e6)) : null;
  }
  _renderEditingBookmarkImage(e6) {
    const {
      _userState: t4
    } = this, o4 = t4?.thumbnailState, i3 = e6.thumbnail?.isSecureUrl ? "url" === o4 : e6.thumbnail?.isDataURI ? "screenshot" === o4 : null;
    if (i3) return this._renderBookmarkImage(e6, i3);
  }
  _renderEditingThumbnail(e6) {
    const {
      _userState: t4,
      visibleElements: o4
    } = this, i3 = t4?.thumbnailState;
    return o4.thumbnail && "none" !== i3 ? n2("div", {
      class: t3.authoringImageContainer
    }, this._renderEditingBookmarkImage(e6)) : null;
  }
  _renderUpdateThumbnailButton() {
    const {
      visibleElements: e6,
      messages: t4,
      _userState: o4
    } = this, i3 = o4?.thumbnailState;
    return e6.thumbnail && "screenshot" === i3 ? n2("calcite-button", {
      appearance: "outline",
      class: t3.authoringRefreshThumbnailButton,
      iconStart: "refresh",
      key: "update-thumbnail",
      kind: "neutral",
      onclick: () => {
        this._updateThumbnail();
      },
      width: "half"
    }, t4.updateThumbnail) : null;
  }
  _renderEditingBookmarkUrlInput(e6) {
    const {
      messages: t4,
      _userState: o4
    } = this, i3 = e6.thumbnail?.url, r2 = e6.thumbnail?.isSecureUrl ? i3 : void 0, a3 = i3 && "absolute-url-required" === o4?.validationState, s6 = o4?.thumbnailState;
    return "url" === s6 ? n2("calcite-label", {
      key: "thumbnail-url-input"
    }, n2("calcite-input", {
      afterCreate: this._storeUrlEditInput,
      bind: this,
      name: "bookmark-thumbnail-url",
      pattern: t2,
      placeholder: t4 ? `https://<${t4.imageUrlPlaceholder}>` : void 0,
      required: true,
      title: t4.imageUrlTooltip,
      type: "text",
      value: r2,
      onCalciteInputChange: this._handleUrlEditInputChange,
      onCalciteInputInput: this._handleUrlEditInputChange
    }), a3 ? n2("calcite-input-message", {
      icon: "exclamation-mark-triangle",
      status: "invalid"
    }, t4.invalidImageUrl) : null) : null;
  }
  _renderThumbnailSelector() {
    const {
      visibleElements: e6,
      messages: t4,
      _userState: o4
    } = this, i3 = o4?.thumbnailState;
    return e6.thumbnail ? n2("calcite-label", {
      key: "thumbnail-chip-group"
    }, t4.thumbnail, n2("calcite-chip-group", {
      label: t4.thumbnail,
      selectionMode: "single-persist",
      onCalciteChipGroupSelect: (e7) => this._handleThumbnailTypeSelect(e7.target.selectedItems[0].value)
    }, n2("calcite-chip", {
      selected: "screenshot" === i3,
      value: "screenshot"
    }, t4.screenshot), n2("calcite-chip", {
      selected: "url" === i3,
      value: "url"
    }, t4.url), n2("calcite-chip", {
      selected: "none" === i3,
      value: "none"
    }, t4.none))) : null;
  }
  _renderEditingBookmark(e6) {
    const {
      disabled: t4,
      messagesCommon: o4,
      headingLevel: i3
    } = this;
    return e6 ? n2("form", {
      bind: this,
      class: t3.form,
      disabled: this.disabled,
      onsubmit: this._editBookmarkSubmit
    }, n2("calcite-flow-item", {
      afterCreate: this._focusEditFlowItemNode,
      afterUpdate: this._focusEditFlowItemNode,
      bind: this,
      disabled: t4,
      heading: o4.edit,
      headingLevel: i3,
      key: "edit-bookmark-form",
      onCalciteFlowItemBack: (e7) => {
        e7.preventDefault(), this._closeEditBookmarkForm();
      }
    }, n2("div", {
      class: t3.formContent
    }, n2("div", {
      class: t3.authoring
    }, this._renderEditingBookmarkName(e6), this._renderThumbnailSelector(), this._renderEditingThumbnail(e6), this._renderEditingBookmarkUrlInput(e6), this._renderUpdateThumbnailButton(), this._renderEditingTimeExtent(e6))), this._renderEditingBookmarkActions())) : null;
  }
  _renderAddingBookmarkName() {
    const {
      _userState: e6,
      messages: t4
    } = this, o4 = "name-required" === e6?.validationState;
    return n2("calcite-label", null, t4.title, n2("calcite-input", {
      afterCreate: this._storeAddInput,
      bind: this,
      class: t3.addBookmarkInput,
      name: "bookmark-name",
      placeholder: t4.titlePlaceholder,
      required: true,
      type: "text",
      value: ""
    }), o4 ? n2("calcite-input-message", {
      icon: "exclamation-mark-triangle",
      status: "invalid"
    }, t4.invalidTitle) : null);
  }
  _renderAddingBookmarkActions() {
    const {
      messagesCommon: e6
    } = this;
    return [n2("calcite-button", {
      appearance: "outline",
      bind: this,
      onclick: this._endAddBookmark,
      slot: "footer",
      type: "button",
      width: "half"
    }, e6.cancel), n2("calcite-button", {
      slot: "footer",
      type: "submit",
      width: "half"
    }, e6.add)];
  }
  _renderAddingBookmark() {
    const {
      disabled: e6,
      messages: t4,
      headingLevel: o4,
      _userState: i3
    } = this;
    return "add" === i3?.state ? n2("form", {
      bind: this,
      class: t3.form,
      disabled: e6,
      onsubmit: this._addBookmarkSubmitClick
    }, n2("calcite-flow-item", {
      afterCreate: this._focusAddFlowItemNode,
      afterUpdate: this._focusAddFlowItemNode,
      bind: this,
      disabled: e6,
      heading: t4.addBookmark,
      headingLevel: o4,
      key: "add-bookmark-form",
      onCalciteFlowItemBack: (e7) => {
        e7.preventDefault(), this._endAddBookmark();
      }
    }, n2("div", {
      class: t3.formContent
    }, this._renderAddingBookmarkName()), this._renderAddingBookmarkActions())) : null;
  }
  _getBookmarkTitle(e6) {
    return e6?.name || this.messagesCommon.untitled;
  }
  _formatDate(e6) {
    return e6 ? j(e6, __spreadProps(__spreadValues({}, E("short-date")), {
      timeZone: this.viewModel.view?.timeZone ?? o2
    })) : "";
  }
  _formatTime(e6) {
    return e6 ? j(e6, __spreadProps(__spreadValues({}, E("long-time")), {
      timeZone: this.viewModel.view?.timeZone ?? o2
    })) : "";
  }
  _endAddBookmark() {
    this.endAddBookmark(), this._focusRootFlowItem = true;
  }
  _showEditBookmarkForm(e6) {
    e6 && (this._editIncludeTimeExtent = !!e6.timeExtent, this._userState = new i2({
      bookmark: e6,
      state: "edit"
    }), this._focusEditFlowItem = true, this.viewModel.goTo(e6));
  }
  _createNewScreenshotUrl() {
    return __async(this, null, function* () {
      const e6 = yield this.viewModel.createBookmark();
      return e6.thumbnail?.url ?? null;
    });
  }
  _storeCurrentUrl() {
    const {
      _userState: e6
    } = this, t4 = e6?.editedBookmark?.thumbnail?.url;
    t4 && (e6?.editedBookmark?.thumbnail?.isSecureUrl ? e6.customUrl = t4 : e6?.editedBookmark?.thumbnail?.isDataURI && (e6.screenshotUrl = t4));
  }
  _handleThumbnailTypeSelect(e6) {
    return __async(this, null, function* () {
      const {
        _userState: t4
      } = this;
      if (!t4) return;
      const {
        screenshotUrl: o4,
        customUrl: i3,
        editedBookmark: r2
      } = t4, a3 = "screenshot" === e6 ? o4 ?? (yield this._createNewScreenshotUrl()) : "url" === e6 && i3 ? i3 : null;
      this._storeCurrentUrl(), r2 && a3 && (r2.thumbnail = new u({
        url: a3
      })), t4.validationState = void 0, t4.thumbnailState = e6;
    });
  }
  _closeEditBookmarkForm() {
    this._userState = null, this._focusRootFlowItem = true;
  }
  _addBookmarkSubmitClick(e6) {
    e6.preventDefault(), this._addBookmarkSubmit();
  }
  _addBookmarkSubmit() {
    return __async(this, null, function* () {
      const {
        _addInputNode: e6,
        _userState: t4,
        viewModel: o4,
        viewModel: {
          bookmarks: i3
        }
      } = this;
      if (!t4) return;
      const r2 = e6 ? e6.value.trim() : null;
      if (!r2) return void (t4.validationState = "name-required");
      t4.loading = true;
      const a3 = yield o4.createBookmark();
      a3.name = r2, i3.add(a3), this._endAddBookmark();
    });
  }
  _editBookmarkAndClose(e6, t4) {
    return __async(this, null, function* () {
      const {
        viewModel: o4,
        viewModel: {
          defaultEditOptions: i3
        }
      } = this;
      yield o4.editBookmark(e6, __spreadValues(__spreadValues({}, i3), t4)), this._closeEditBookmarkForm();
    });
  }
  _editBookmarkSubmit(e6) {
    e6.preventDefault();
    const {
      _editInputNode: t4,
      _userState: o4,
      _editIncludeTimeExtent: i3,
      _urlEditInputNode: r2
    } = this;
    if (!o4?.bookmark || !o4.editedBookmark) return;
    o4.validationState = void 0, o4.customUrl = void 0, o4.screenshotUrl = void 0;
    const a3 = t4?.value.trim();
    if (!a3) return void (o4.validationState = "name-required");
    o4.bookmark.name = a3, o4.bookmark.thumbnail = o4.editedBookmark.thumbnail, i3 || (o4.bookmark.timeExtent = null);
    const s6 = o4.thumbnailState;
    if ("url" === s6 && r2) {
      const e7 = r2.value, t5 = new u({
        url: e7
      });
      if (!t5.isSecureUrl) return void (o4.validationState = "absolute-url-required");
      o4.bookmark.thumbnail = t5;
    } else "none" === s6 && (o4.bookmark.thumbnail = null);
    this._editBookmarkAndClose(o4.bookmark, {
      takeScreenshot: false,
      captureTimeExtent: i3
    });
  }
  _storeEditInput(e6) {
    this._editInputNode = e6;
  }
  _storeAddInput(e6) {
    this._addInputNode = e6;
  }
  _storeUrlEditInput(e6) {
    this._urlEditInputNode = e6;
  }
  _deleteBookmark(e6) {
    this._closeEditBookmarkForm(), e6 && (this.viewModel.bookmarks.remove(e6), e6.destroy());
  }
  _goToBookmark(e6) {
    e6 && (this.endAddBookmark(), this.viewModel.goTo(e6));
  }
  _updateThumbnail() {
    return __async(this, null, function* () {
      const {
        _userState: e6,
        viewModel: t4
      } = this;
      e6 && (e6.validationState = void 0, yield t4.editBookmark(e6.editedBookmark, {
        takeScreenshot: true,
        captureViewpoint: false,
        captureRotation: false,
        captureScale: false,
        captureTimeExtent: false
      }));
    });
  }
  _focusRootFlowItemNode(e6) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _focusEditFlowItemNode(e6) {
    this._focusEditFlowItem && (this._focusEditFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _focusAddFlowItemNode(e6) {
    this._focusAddFlowItem && (this._focusAddFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
};
e([y()], w2.prototype, "_editIncludeTimeExtent", void 0), e([y({
  type: i2
})], w2.prototype, "_userState", void 0), e([y()], w2.prototype, "_focusRootFlowItem", void 0), e([y()], w2.prototype, "_focusAddFlowItem", void 0), e([y()], w2.prototype, "_focusEditFlowItem", void 0), e([y()], w2.prototype, "defaultCreateOptions", null), e([y()], w2.prototype, "defaultEditOptions", null), e([y()], w2.prototype, "bookmarks", null), e([y()], w2.prototype, "disabled", void 0), e([y()], w2.prototype, "dragEnabled", void 0), e([y()], w2.prototype, "editingEnabled", null), e([y()], w2.prototype, "filterPlaceholder", void 0), e([y()], w2.prototype, "filterText", void 0), e([y()], w2.prototype, "headingLevel", void 0), e([y()], w2.prototype, "goToOverride", null), e([y()], w2.prototype, "icon", null), e([y()], w2.prototype, "label", null), e([y(), e2("esri/widgets/Bookmarks/t9n/Bookmarks")], w2.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], w2.prototype, "messagesCommon", void 0), e([y()], w2.prototype, "uiStrings", void 0), e([y()], w2.prototype, "view", null), e([y({
  type: h
}), e5(["select-bookmark", "bookmark-edit", "bookmark-select"])], w2.prototype, "viewModel", void 0), e([y({
  type: s5,
  nonNullable: true
})], w2.prototype, "visibleElements", void 0), e([y()], w2.prototype, "endAddBookmark", null), e([y()], w2.prototype, "startAddBookmark", null), w2 = e([a("esri.widgets.Bookmarks")], w2);
var I = w2;
export {
  I as default
};
//# sourceMappingURL=Bookmarks-X7LQLNFU.js.map
