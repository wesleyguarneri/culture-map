import {
  L
} from "./chunk-VTRNFNJR.js";
import {
  i
} from "./chunk-ONOHIFCT.js";
import {
  T
} from "./chunk-W6GMJ4SS.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  a as a2
} from "./chunk-YZI2XBXY.js";
import {
  c
} from "./chunk-5453A3C5.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  b,
  g,
  v as v2
} from "./chunk-CQDYITZC.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  P,
  d,
  v
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Attachments/AttachmentsViewModel.js
var m = {
  editing: false,
  operations: {
    add: true,
    update: true,
    delete: true
  }
};
var f = V.ofType(a2);
var u = class extends S {
  constructor(t) {
    super(t), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = __spreadValues({}, m), this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f(), this.fileInfos = new V(), this.graphic = null, this.mode = "view", this.filesEnabled = false, this.addHandles(d(() => this.graphic, () => this._graphicChanged(), P));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t) {
    return __spreadValues(__spreadValues({}, m), t);
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const {
      graphic: t
    } = this;
    if (!t) return false;
    const e5 = t.layer || t.sourceLayer;
    return e5?.loaded && "capabilities" in e5 && e5.capabilities && "operations" in e5.capabilities && "supportsResizeAttachments" in e5.capabilities.operations && e5.capabilities.operations.supportsResizeAttachments || false;
  }
  getAttachments() {
    return __async(this, null, function* () {
      const {
        _attachmentLayer: t,
        attachmentInfos: e5
      } = this;
      if (!t || "function" != typeof t.queryAttachments) throw new s("invalid-layer", "getAttachments(): A valid layer is required.");
      const a3 = this._getObjectId(), i2 = new c({
        objectIds: [a3],
        returnMetadata: true
      }), r2 = [], s3 = t.queryAttachments(i2).then((t2) => t2[a3] || r2).catch(() => r2);
      this._getAttachmentsPromise = s3, this.notifyChange("state");
      const o = yield s3;
      return e5.destroyAll(), o.length && e5.addMany(o), this._getAttachmentsPromise = null, this.notifyChange("state"), o;
    });
  }
  addAttachment(_0) {
    return __async(this, arguments, function* (t, e5 = this.graphic) {
      const {
        _attachmentLayer: a3,
        attachmentInfos: i2,
        capabilities: r2
      } = this;
      if (!e5) throw new s("invalid-graphic", "addAttachment(): A valid graphic is required.", {
        graphic: e5
      });
      if (!t) throw new s("invalid-attachment", "addAttachment(): An attachment is required.", {
        attachment: t
      });
      if (!r2.operations?.add) throw new s("invalid-capabilities", "addAttachment(): add capabilities are required.");
      if (!a3 || "function" != typeof a3.addAttachment) throw new s("invalid-layer", "addAttachment(): A valid layer is required.");
      const s3 = a3.addAttachment(e5, t).then((t2) => this._queryAttachment(t2.objectId, e5)), o = yield s3;
      return i2.add(o), o;
    });
  }
  deleteAttachment(t) {
    return __async(this, null, function* () {
      const {
        _attachmentLayer: e5,
        attachmentInfos: a3,
        graphic: i2,
        capabilities: r2
      } = this;
      if (!t) throw new s("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", {
        attachmentInfo: t
      });
      if (!r2.operations?.delete) throw new s("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
      if (!e5 || "function" != typeof e5.deleteAttachments) throw new s("invalid-layer", "deleteAttachment(): A valid layer is required.");
      if (!i2) throw new s("invalid-graphic", "deleteAttachment(): A graphic is required.");
      const s3 = e5.deleteAttachments(i2, [t.id]).then(() => t), o = yield s3;
      return a3.remove(o), o.destroy(), o;
    });
  }
  updateAttachment(_0) {
    return __async(this, arguments, function* (t, e5 = this.activeAttachmentInfo) {
      const {
        _attachmentLayer: a3,
        attachmentInfos: i2,
        graphic: r2,
        capabilities: s3
      } = this;
      if (!t) throw new s("invalid-attachment", "updateAttachment(): An attachment is required.", {
        attachment: t
      });
      if (!e5) throw new s("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", {
        attachmentInfo: e5
      });
      if (!s3.operations?.update) throw new s("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
      const o = i2.indexOf(e5);
      if (!a3 || "function" != typeof a3.updateAttachment) throw new s("invalid-layer", "updateAttachment(): A valid layer is required.");
      if (!r2) throw new s("invalid-graphic", "updateAttachment(): A graphic is required.");
      const c2 = a3.updateAttachment(r2, e5.id, t).then((t2) => this._queryAttachment(t2.objectId)), h = yield c2;
      return i2.splice(o, 1, h), h;
    });
  }
  commitFiles() {
    return __async(this, null, function* () {
      return yield Promise.all(this.fileInfos.items.map((t) => this.addAttachment(t.form))), this.fileInfos.removeAll(), this.getAttachments();
    });
  }
  addFile(t, e5) {
    if (!t || !e5) return null;
    const a3 = {
      file: t,
      form: e5
    };
    return this.fileInfos.add(a3), a3;
  }
  updateFile(t, e5, a3 = this.activeFileInfo) {
    if (!t || !e5 || !a3) return null;
    const i2 = this.fileInfos.indexOf(a3);
    return i2 > -1 && this.fileInfos.splice(i2, 1, {
      file: t,
      form: e5
    }), this.fileInfos.items[i2];
  }
  deleteFile(t) {
    const e5 = this.fileInfos.find((e6) => e6.file === t);
    return e5 ? (this.fileInfos.remove(e5), e5) : null;
  }
  _queryAttachment(t, e5) {
    return __async(this, null, function* () {
      const {
        _attachmentLayer: a3
      } = this;
      if (!t || !a3?.queryAttachments) throw new s("invalid-attachment-id", "Could not query attachment.");
      const i2 = this._getObjectId(e5), r2 = new c({
        objectIds: [i2],
        attachmentsWhere: `AttachmentId=${t}`,
        returnMetadata: true
      });
      return a3.queryAttachments(r2).then((t2) => t2[i2][0]);
    });
  }
  _getObjectId(t = this.graphic) {
    return t?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => {
    }));
  }
  _setAttachmentLayer() {
    const {
      graphic: t
    } = this, e5 = L(t);
    this._attachmentLayer = e5 ? "scene" === e5.type && null != e5.associatedLayer ? e5.associatedLayer : e5 : null;
  }
};
e([y()], u.prototype, "capabilities", void 0), e([s2("capabilities")], u.prototype, "castCapabilities", null), e([y()], u.prototype, "activeAttachmentInfo", void 0), e([y()], u.prototype, "activeFileInfo", void 0), e([y({
  readOnly: true,
  type: f
})], u.prototype, "attachmentInfos", void 0), e([y()], u.prototype, "fileInfos", void 0), e([y({
  type: d2
})], u.prototype, "graphic", void 0), e([y()], u.prototype, "mode", void 0), e([y({
  readOnly: true
})], u.prototype, "state", null), e([y()], u.prototype, "filesEnabled", void 0), e([y({
  readOnly: true
})], u.prototype, "supportsResizeAttachments", null), u = e([a("esri.widgets.Attachments.AttachmentsViewModel")], u);
var y2 = u;

// ../../../node_modules/@arcgis/core/widgets/Attachments/support/attachmentUtils.js
function e4(i2) {
  const e5 = i2.toLowerCase();
  return "image/bmp" === e5 || "image/emf" === e5 || "image/exif" === e5 || "image/gif" === e5 || "image/x-icon" === e5 || "image/jpeg" === e5 || "image/png" === e5 || "image/tiff" === e5 || "image/x-wmf" === e5;
}
function p(e5) {
  const p2 = n2("esri/themes/base/images/files/");
  return e5 ? "text/plain" === e5 ? `${p2}text-32.svg` : "application/pdf" === e5 ? `${p2}pdf-32.svg` : "text/csv" === e5 ? `${p2}csv-32.svg` : "application/gpx+xml" === e5 ? `${p2}gpx-32.svg` : "application/x-dwf" === e5 ? `${p2}cad-32.svg` : "application/postscript" === e5 || "application/json" === e5 || "text/xml" === e5 || "model/vrml" === e5 ? `${p2}code-32.svg` : "application/x-zip-compressed" === e5 || "application/x-7z-compressed" === e5 || "application/x-gzip" === e5 || "application/x-tar" === e5 || "application/x-gtar" === e5 || "application/x-bzip2" === e5 || "application/gzip" === e5 || "application/x-compress" === e5 || "application/x-apple-diskimage" === e5 || "application/x-rar-compressed" === e5 || "application/zip" === e5 ? `${p2}zip-32.svg` : e5.includes("image/") ? `${p2}image-32.svg` : e5.includes("audio/") ? `${p2}sound-32.svg` : e5.includes("video/") ? `${p2}video-32.svg` : e5.includes("msexcel") || e5.includes("ms-excel") || e5.includes("spreadsheetml") ? `${p2}excel-32.svg` : e5.includes("msword") || e5.includes("ms-word") || e5.includes("wordprocessingml") ? `${p2}word-32.svg` : e5.includes("powerpoint") || e5.includes("presentationml") ? `${p2}report-32.svg` : `${p2}generic-32.svg` : `${p2}generic-32.svg`;
}

// ../../../node_modules/@arcgis/core/widgets/Attachments.js
var A = {
  addButton: true,
  addSubmitButton: true,
  cancelAddButton: true,
  cancelUpdateButton: true,
  deleteButton: true,
  errorMessage: true,
  progressBar: true,
  updateButton: true
};
var w = "esri-attachments";
var F = {
  base: w,
  loaderContainer: `${w}__loader-container`,
  loader: `${w}__loader`,
  fadeIn: `${w}--fade-in`,
  container: `${w}__container`,
  containerList: `${w}__container--list`,
  containerPreview: `${w}__container--preview`,
  actions: `${w}__actions`,
  deleteButton: `${w}__delete-button`,
  addAttachmentButton: `${w}__add-attachment-button`,
  errorMessage: `${w}__error-message`,
  items: `${w}__items`,
  item: `${w}__item`,
  itemButton: `${w}__item-button`,
  itemMask: `${w}__item-mask`,
  itemMaskIcon: `${w}__item-mask--icon`,
  itemImage: `${w}__image`,
  itemImageResizable: `${w}__image--resizable`,
  itemLabel: `${w}__label`,
  itemFilename: `${w}__filename`,
  itemChevronIcon: `${w}__item-chevron-icon`,
  itemLink: `${w}__item-link`,
  itemLinkOverlay: `${w}__item-link-overlay`,
  itemLinkOverlayIcon: `${w}__item-link-overlay-icon`,
  itemEditIcon: `${w}__item-edit-icon`,
  itemAddIcon: `${w}__item-add-icon`,
  itemAddButton: `${w}__item-add-button`,
  formNode: `${w}__form-node`,
  fileFieldset: `${w}__file-fieldset`,
  fileLabel: `${w}__file-label`,
  fileName: `${w}__file-name`,
  fileInput: `${w}__file-input`,
  metadata: `${w}__metadata`,
  metadataFieldset: `${w}__metadata-fieldset`,
  progressBar: `${w}__progress-bar`
};
var k = window.CSS;
var M = class extends B {
  constructor(e5, t) {
    super(e5, t), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = false, this.viewModel = null, this.visibleElements = __spreadValues({}, A), this._supportsImageOrientation = k && k.supports && k.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e5) {
    return e5?.viewModel || (e5 = __spreadValues({
      viewModel: new y2()
    }, e5)), e5;
  }
  initialize() {
    this.addHandles([v(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), v(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), d(() => this.viewModel?.mode, () => this._modeChanged(), P)]);
  }
  loadDependencies() {
    return r({
      icon: () => import("./calcite-icon-FE3MORNT.js")
    });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e5) {
    this.viewModel.capabilities = e5;
  }
  get effectiveDisplayType() {
    const {
      displayType: e5
    } = this;
    return e5 && "auto" !== e5 ? e5 : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e5) {
    this.viewModel.graphic = e5;
  }
  get icon() {
    return "attachment";
  }
  set icon(e5) {
    this._overrideIfSome("icon", e5);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e5) {
    this._overrideIfSome("label", e5);
  }
  castVisibleElements(e5) {
    return __spreadValues(__spreadValues({}, A), e5);
  }
  addAttachment() {
    const {
      _addAttachmentForm: e5,
      viewModel: s3
    } = this;
    return this._set("submitting", true), this._set("error", null), s3.addAttachment(e5).then((e6) => (this._set("submitting", false), this._set("error", null), s3.mode = "view", e6)).catch((e6) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:add-attachment", this.messages.addErrorMessage, e6)), e6;
    });
  }
  deleteAttachment(e5) {
    const {
      viewModel: s3
    } = this;
    return this._set("submitting", true), this._set("error", null), s3.deleteAttachment(e5).then((e6) => (this._set("submitting", false), this._set("error", null), s3.mode = "view", e6)).catch((e6) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:delete-attachment", this.messages.deleteErrorMessage, e6)), e6;
    });
  }
  updateAttachment() {
    const {
      viewModel: e5
    } = this, {
      _updateAttachmentForm: s3
    } = this;
    return this._set("submitting", true), this._set("error", null), e5.updateAttachment(s3).then((t) => (this._set("submitting", false), this._set("error", null), e5.mode = "view", t)).catch((e6) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:update-attachment", this.messages.updateErrorMessage, e6)), e6;
    });
  }
  addFile() {
    const e5 = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e5;
  }
  updateFile() {
    const {
      viewModel: e5
    } = this, t = e5.updateFile(this.selectedFile, this._updateAttachmentForm, e5.activeFileInfo);
    return e5.mode = "view", t;
  }
  deleteFile(e5) {
    const t = this.viewModel.deleteFile(e5 || this.viewModel.activeFileInfo?.file);
    return this.viewModel.mode = "view", t;
  }
  render() {
    const {
      submitting: e5,
      viewModel: t
    } = this, {
      state: s3
    } = t;
    return n("div", {
      class: this.classes(F.base, e3.widget)
    }, e5 ? this._renderProgressBar() : null, "loading" === s3 ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const {
      error: e5,
      visibleElements: t
    } = this;
    return e5 && t.errorMessage ? n("div", {
      class: F.errorMessage,
      key: "error-message"
    }, e5.message) : null;
  }
  _renderAttachments() {
    const {
      activeFileInfo: e5,
      mode: t,
      activeAttachmentInfo: s3
    } = this.viewModel;
    return "add" === t ? this._renderAddForm() : "edit" === t ? this._renderDetailsForm(s3 || e5) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return n("div", {
      class: F.loaderContainer,
      key: "loader"
    }, n("div", {
      class: F.loader
    }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? n("div", {
      class: F.progressBar,
      key: "progress-bar"
    }) : null;
  }
  _renderAddForm() {
    const {
      submitting: e5,
      selectedFile: t
    } = this, s3 = e5 || !t, i2 = this.visibleElements.cancelAddButton ? n("button", {
      bind: this,
      class: this.classes(e3.button, e3.buttonTertiary, e3.buttonSmall, e3.buttonHalf, e5 && e3.buttonDisabled),
      disabled: e5,
      onclick: this._cancelForm,
      type: "button"
    }, this.messages.cancel) : null, a3 = this.visibleElements.addSubmitButton ? n("button", {
      class: this.classes(e3.button, e3.buttonSecondary, e3.buttonSmall, e3.buttonHalf, {
        [e3.buttonDisabled]: s3
      }),
      disabled: s3,
      type: "submit"
    }, this.messages.add) : null, n3 = t ? n("span", {
      class: F.fileName,
      key: "file-name"
    }, t.name) : null, l = n("form", {
      afterCreate: b,
      afterRemoved: v2,
      bind: this,
      "data-node-ref": "_addAttachmentForm",
      onsubmit: this._submitAddAttachment
    }, n("fieldset", {
      class: F.fileFieldset
    }, n3, n("label", {
      class: this.classes(F.fileLabel, e3.button, e3.buttonSecondary)
    }, t ? this.messages.changeFile : this.messages.selectFile, n("input", {
      bind: this,
      class: F.fileInput,
      name: "attachment",
      onchange: this._handleFileInputChange,
      type: "file"
    }))), a3, i2);
    return n("div", {
      class: F.formNode,
      key: "add-form-container"
    }, l);
  }
  _renderDetailsForm(e5) {
    const {
      visibleElements: t,
      viewModel: s3,
      selectedFile: i2,
      submitting: a3
    } = this, {
      capabilities: l
    } = s3, r2 = a3 || !i2;
    let o, d3, c2, m2;
    i2 ? (o = i2.type, d3 = i2.name, c2 = i2.size) : e5 && "file" in e5 ? (o = e5.file.type, d3 = e5.file.name, c2 = e5.file.size) : e5 && "contentType" in e5 && (o = e5.contentType, d3 = e5.name, c2 = e5.size, m2 = e5.url);
    const h = l.editing && l.operations?.delete && t.deleteButton ? n("button", {
      bind: this,
      class: this.classes(e3.button, e3.buttonSmall, e3.buttonTertiary, F.deleteButton, {
        [e3.buttonDisabled]: a3
      }),
      disabled: a3,
      key: "delete-button",
      onclick: (t2) => this._submitDeleteAttachment(t2, e5),
      type: "button"
    }, this.messages.delete) : void 0, u2 = l.editing && l.operations?.update && t.updateButton ? n("button", {
      class: this.classes(e3.button, e3.buttonSmall, e3.buttonThird, {
        [e3.buttonDisabled]: r2
      }),
      disabled: r2,
      key: "update-button",
      type: "submit"
    }, this.messages.update) : void 0, b2 = this.visibleElements.cancelUpdateButton ? n("button", {
      bind: this,
      class: this.classes(e3.button, e3.buttonSmall, e3.buttonTertiary, e3.buttonThird, {
        [e3.buttonDisabled]: a3
      }),
      disabled: a3,
      key: "cancel-button",
      onclick: this._cancelForm,
      type: "button"
    }, this.messages.cancel) : void 0, f2 = l.editing && l.operations?.update ? n("fieldset", {
      class: F.fileFieldset,
      key: "file"
    }, n("span", {
      class: F.fileName,
      key: "file-name"
    }, d3), n("label", {
      class: this.classes(F.fileLabel, e3.button, e3.buttonSecondary)
    }, this.messages.changeFile, n("input", {
      bind: this,
      class: F.fileInput,
      name: "attachment",
      onchange: this._handleFileInputChange,
      type: "file"
    }))) : void 0, v3 = n("fieldset", {
      class: F.metadataFieldset,
      key: "size"
    }, n("label", null, T(this.messagesUnits, c2 ?? 0))), A2 = n("fieldset", {
      class: F.metadataFieldset,
      key: "content-type"
    }, n("label", null, o)), w2 = null != m2 ? n("a", {
      class: F.itemLink,
      href: m2,
      rel: "noreferrer",
      target: "_blank"
    }, this._renderImageMask(e5, 400), n("div", {
      class: F.itemLinkOverlay
    }, n("span", {
      class: F.itemLinkOverlayIcon
    }, n("calcite-icon", {
      icon: "launch"
    })))) : this._renderImageMask(e5, 400), k2 = n("form", {
      afterCreate: b,
      afterRemoved: v2,
      bind: this,
      "data-node-ref": "_updateAttachmentForm",
      onsubmit: (t2) => this._submitUpdateAttachment(t2, e5)
    }, n("div", {
      class: F.metadata
    }, v3, A2), f2, n("div", {
      class: F.actions
    }, h, b2, u2));
    return n("div", {
      class: F.formNode,
      key: "edit-form-container"
    }, w2, k2);
  }
  _renderImageMask(e5, t) {
    return e5 ? "file" in e5 ? this._renderGenericImageMask(e5.file.name, e5.file.type) : this._renderImageMaskForAttachment(e5, t) : null;
  }
  _renderGenericImageMask(e5, t) {
    const {
      supportsResizeAttachments: s3
    } = this.viewModel, i2 = p(t), a3 = {
      [F.itemImageResizable]: s3
    };
    return n("div", {
      class: this.classes(F.itemMaskIcon, F.itemMask),
      key: i2
    }, n("img", {
      alt: e5,
      class: this.classes(a3, F.itemImage),
      src: i2,
      title: e5
    }));
  }
  _renderImageMaskForAttachment(e5, t) {
    const {
      supportsResizeAttachments: s3
    } = this.viewModel;
    if (!e5) return null;
    const {
      contentType: i2,
      name: a3,
      url: n3
    } = e5;
    if (!s3 || !e4(i2)) return this._renderGenericImageMask(a3, i2);
    const l = this._getCSSTransform(e5), r2 = l ? {
      transform: l,
      "image-orientation": "none"
    } : {}, o = `${n3}${n3?.includes("?") ? "&" : "?"}w=${t}`, d3 = {
      [F.itemImageResizable]: s3
    };
    return n("div", {
      class: this.classes(F.itemMask),
      key: o
    }, n("img", {
      alt: a3,
      class: this.classes(d3, F.itemImage),
      src: o,
      styles: r2,
      title: a3
    }));
  }
  _renderFile(e5) {
    const {
      file: t
    } = e5;
    return n("li", {
      class: F.item,
      key: t
    }, n("button", {
      "aria-label": this.messages.attachmentDetails,
      bind: this,
      class: F.itemButton,
      key: "details-button",
      onclick: () => this._startEditFile(e5),
      title: this.messages.attachmentDetails,
      type: "button"
    }, this._renderImageMask(e5), n("label", {
      class: F.itemLabel
    }, n("span", {
      class: F.itemFilename
    }, t.name || this.messages.noTitle), n("span", {
      "aria-hidden": "true",
      class: this.classes(F.itemChevronIcon, g(this.container) ? i.left : i.right)
    }))));
  }
  _renderAttachmentInfo({
    attachmentInfo: e5,
    displayType: t
  }) {
    const {
      viewModel: s3,
      effectiveDisplayType: i2
    } = this, {
      capabilities: a3,
      supportsResizeAttachments: n3
    } = s3, {
      contentType: l,
      name: r2,
      url: o
    } = e5, d3 = this._renderImageMask(e5, "list" === t ? 48 : 400), c2 = a3.editing ? n("span", {
      "aria-hidden": "true",
      class: this.classes(F.itemChevronIcon, g(this.container) ? i.left : i.right)
    }) : null, m2 = [d3, "preview" === i2 && n3 && e4(l) ? null : n("label", {
      class: F.itemLabel
    }, n("span", {
      class: F.itemFilename
    }, r2 || this.messages.noTitle), c2)], u2 = a3.editing ? n("button", {
      "aria-label": this.messages.attachmentDetails,
      bind: this,
      class: F.itemButton,
      "data-attachment-info-id": e5.id,
      key: "details-button",
      onclick: () => this._startEditAttachment(e5),
      title: this.messages.attachmentDetails,
      type: "button"
    }, m2) : n("a", {
      class: F.itemButton,
      href: o ?? void 0,
      key: "details-link",
      rel: "noreferrer",
      target: "_blank"
    }, m2);
    return n("li", {
      class: F.item,
      key: e5
    }, u2);
  }
  _renderAttachmentContainer() {
    const {
      effectiveDisplayType: e5,
      viewModel: t,
      visibleElements: s3
    } = this, {
      attachmentInfos: i2,
      capabilities: a3,
      fileInfos: n3
    } = t, l = !!i2?.length, r2 = !!n3?.length, o = {
      [F.containerList]: "preview" !== e5,
      [F.containerPreview]: "preview" === e5
    }, d3 = a3.editing && a3.operations?.add && s3.addButton ? n("button", {
      bind: this,
      class: this.classes(e3.button, e3.buttonTertiary, F.addAttachmentButton),
      onclick: () => this._startAddAttachment(),
      type: "button"
    }, n("span", {
      "aria-hidden": "true",
      class: this.classes(F.itemAddIcon, i.plus)
    }), this.messages.add) : void 0, c2 = l ? n("ul", {
      class: F.items,
      key: "attachments-list"
    }, i2.toArray().map((t2) => this._renderAttachmentInfo({
      attachmentInfo: t2,
      displayType: e5
    }))) : void 0, m2 = r2 ? n("ul", {
      class: F.items,
      key: "file-list"
    }, n3.toArray().map((e6) => this._renderFile(e6))) : void 0, h = r2 || l ? void 0 : n("div", {
      class: e3.empty
    }, this.messages.noAttachments);
    return n("div", {
      class: this.classes(F.container, o),
      key: "attachments-container"
    }, c2, m2, h, d3);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e5) {
    const t = e5.target, s3 = t.files?.item(0);
    this._set("selectedFile", s3);
  }
  _submitDeleteAttachment(e5, t) {
    e5.preventDefault(), t && ("file" in t ? this.deleteFile(t.file) : t && this.deleteAttachment(t));
  }
  _submitAddAttachment(e5) {
    e5.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e5, t) {
    e5.preventDefault(), t && "file" in t ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e5) {
    const {
      viewModel: t
    } = this;
    t.activeFileInfo = null, t.activeAttachmentInfo = e5, t.mode = "edit";
  }
  _startEditFile(e5) {
    const {
      viewModel: t
    } = this;
    t.activeAttachmentInfo = null, t.activeFileInfo = e5, t.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e5) {
    e5.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e5) {
    const {
      orientationInfo: t
    } = e5;
    return !this._supportsImageOrientation && t ? [t.rotation ? `rotate(${t.rotation}deg)` : "", t.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
e([y()], M.prototype, "capabilities", null), e([y()], M.prototype, "displayType", void 0), e([y({
  readOnly: true
})], M.prototype, "effectiveDisplayType", null), e([y()], M.prototype, "graphic", null), e([y()], M.prototype, "icon", null), e([y()], M.prototype, "label", null), e([y(), e2("esri/widgets/Attachments/t9n/Attachments")], M.prototype, "messages", void 0), e([y(), e2("esri/core/t9n/Units")], M.prototype, "messagesUnits", void 0), e([y({
  readOnly: true
})], M.prototype, "selectedFile", void 0), e([y({
  readOnly: true
})], M.prototype, "submitting", void 0), e([y({
  readOnly: true
})], M.prototype, "error", void 0), e([y({
  type: y2
})], M.prototype, "viewModel", void 0), e([y()], M.prototype, "visibleElements", void 0), e([s2("visibleElements")], M.prototype, "castVisibleElements", null), M = e([a("esri.widgets.Attachments")], M);
var I = M;

export {
  y2 as y,
  I
};
//# sourceMappingURL=chunk-IQRHHD7Z.js.map
