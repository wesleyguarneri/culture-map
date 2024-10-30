import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  defineCustomElements
} from "./chunk-5JDIN3DS.js";
import "./chunk-SKDTV3QX.js";
import {
  APP_INITIALIZER,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgModule,
  NgZone,
  require_cjs,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-5CQJCNWU.js";
import {
  __toESM
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/map-components-angular/fesm2022/arcgis-map-components-angular.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var _c0 = ["*"];
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = (0, import_rxjs.fromEvent)(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ArcgisAreaMeasurement2d = class ArcgisAreaMeasurement2d2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisAreaMeasurement2d_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisAreaMeasurement2d2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisAreaMeasurement2d2,
    selectors: [["arcgis-area-measurement-2d"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      unit: "unit",
      unitOptions: "unitOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisAreaMeasurement2d_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisAreaMeasurement2d = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisAreaMeasurement2d);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisAreaMeasurement2d, [{
    type: Component,
    args: [{
      selector: "arcgis-area-measurement-2d",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisAreaMeasurement3d = class ArcgisAreaMeasurement3d2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisAreaMeasurement3d_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisAreaMeasurement3d2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisAreaMeasurement3d2,
    selectors: [["arcgis-area-measurement-3d"]],
    inputs: {
      analysis: "analysis",
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      unit: "unit",
      unitOptions: "unitOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisAreaMeasurement3d_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisAreaMeasurement3d = __decorate([ProxyCmp({
  inputs: ["analysis", "autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"],
  methods: ["clear", "destroy", "start"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisAreaMeasurement3d);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisAreaMeasurement3d, [{
    type: Component,
    args: [{
      selector: "arcgis-area-measurement-3d",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["analysis", "autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisAttachments = class ArcgisAttachments2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisAttachments_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisAttachments2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisAttachments2,
    selectors: [["arcgis-attachments"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      capabilities: "capabilities",
      displayType: "displayType",
      graphic: "graphic",
      hideAddButton: "hideAddButton",
      hideAddSubmitButton: "hideAddSubmitButton",
      hideCancelAddButton: "hideCancelAddButton",
      hideCancelUpdateButton: "hideCancelUpdateButton",
      hideDeleteButton: "hideDeleteButton",
      hideErrorMessage: "hideErrorMessage",
      hideProgressBar: "hideProgressBar",
      hideUpdateButton: "hideUpdateButton",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      submitting: "submitting"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisAttachments_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisAttachments = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "capabilities", "displayType", "graphic", "hideAddButton", "hideAddSubmitButton", "hideCancelAddButton", "hideCancelUpdateButton", "hideDeleteButton", "hideErrorMessage", "hideProgressBar", "hideUpdateButton", "icon", "label", "position", "referenceElement", "state", "submitting"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisAttachments);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisAttachments, [{
    type: Component,
    args: [{
      selector: "arcgis-attachments",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "capabilities", "displayType", "graphic", "hideAddButton", "hideAddSubmitButton", "hideCancelAddButton", "hideCancelUpdateButton", "hideDeleteButton", "hideErrorMessage", "hideProgressBar", "hideUpdateButton", "icon", "label", "position", "referenceElement", "state", "submitting"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisBasemapGallery = class ArcgisBasemapGallery2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisBasemapGallery_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisBasemapGallery2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisBasemapGallery2,
    selectors: [["arcgis-basemap-gallery"]],
    inputs: {
      activeBasemap: "activeBasemap",
      autoDestroyDisabled: "autoDestroyDisabled",
      disabled: "disabled",
      headingLevel: "headingLevel",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      source: "source",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisBasemapGallery_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisBasemapGallery = __decorate([ProxyCmp({
  inputs: ["activeBasemap", "autoDestroyDisabled", "disabled", "headingLevel", "icon", "label", "position", "referenceElement", "source", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisBasemapGallery);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisBasemapGallery, [{
    type: Component,
    args: [{
      selector: "arcgis-basemap-gallery",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBasemap", "autoDestroyDisabled", "disabled", "headingLevel", "icon", "label", "position", "referenceElement", "source", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisBasemapLayerList = class ArcgisBasemapLayerList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisTriggerAction", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisBasemapLayerList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisBasemapLayerList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisBasemapLayerList2,
    selectors: [["arcgis-basemap-layer-list"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      baseFilterText: "baseFilterText",
      baseItems: "baseItems",
      baseListItemCreatedFunction: "baseListItemCreatedFunction",
      basemapTitle: "basemapTitle",
      catalogLayerList: "catalogLayerList",
      catalogOptions: "catalogOptions",
      collapsed: "collapsed",
      dragEnabled: "dragEnabled",
      editingTitle: "editingTitle",
      filterPlaceholder: "filterPlaceholder",
      headingLevel: "headingLevel",
      hideBaseLayers: "hideBaseLayers",
      hideFlow: "hideFlow",
      hideHeading: "hideHeading",
      hideReferenceLayers: "hideReferenceLayers",
      hideStatusIndicators: "hideStatusIndicators",
      icon: "icon",
      label: "label",
      minFilterItems: "minFilterItems",
      position: "position",
      referenceElement: "referenceElement",
      referenceFilterText: "referenceFilterText",
      referenceListItemCreatedFunction: "referenceListItemCreatedFunction",
      selectedItems: "selectedItems",
      selectionMode: "selectionMode",
      showCloseButton: "showCloseButton",
      showCollapseButton: "showCollapseButton",
      showEditTitleButton: "showEditTitleButton",
      showErrors: "showErrors",
      showFilter: "showFilter",
      showTemporaryLayerIndicators: "showTemporaryLayerIndicators",
      state: "state",
      visibilityAppearance: "visibilityAppearance"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisBasemapLayerList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisBasemapLayerList = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "baseFilterText", "baseItems", "baseListItemCreatedFunction", "basemapTitle", "catalogLayerList", "catalogOptions", "collapsed", "dragEnabled", "editingTitle", "filterPlaceholder", "headingLevel", "hideBaseLayers", "hideFlow", "hideHeading", "hideReferenceLayers", "hideStatusIndicators", "icon", "label", "minFilterItems", "position", "referenceElement", "referenceFilterText", "referenceListItemCreatedFunction", "selectedItems", "selectionMode", "showCloseButton", "showCollapseButton", "showEditTitleButton", "showErrors", "showFilter", "showTemporaryLayerIndicators", "state", "visibilityAppearance"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisBasemapLayerList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisBasemapLayerList, [{
    type: Component,
    args: [{
      selector: "arcgis-basemap-layer-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "baseFilterText", "baseItems", "baseListItemCreatedFunction", "basemapTitle", "catalogLayerList", "catalogOptions", "collapsed", "dragEnabled", "editingTitle", "filterPlaceholder", "headingLevel", "hideBaseLayers", "hideFlow", "hideHeading", "hideReferenceLayers", "hideStatusIndicators", "icon", "label", "minFilterItems", "position", "referenceElement", "referenceFilterText", "referenceListItemCreatedFunction", "selectedItems", "selectionMode", "showCloseButton", "showCollapseButton", "showEditTitleButton", "showErrors", "showFilter", "showTemporaryLayerIndicators", "state", "visibilityAppearance"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisBasemapToggle = class ArcgisBasemapToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisBasemapToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisBasemapToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisBasemapToggle2,
    selectors: [["arcgis-basemap-toggle"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      nextBasemap: "nextBasemap",
      position: "position",
      referenceElement: "referenceElement",
      showTitle: "showTitle",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisBasemapToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisBasemapToggle = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "icon", "label", "nextBasemap", "position", "referenceElement", "showTitle", "state"],
  methods: ["destroy", "toggle"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisBasemapToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisBasemapToggle, [{
    type: Component,
    args: [{
      selector: "arcgis-basemap-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "icon", "label", "nextBasemap", "position", "referenceElement", "showTitle", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisBookmarks = class ArcgisBookmarks2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisEdit", "arcgisSelect", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisBookmarks_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisBookmarks2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisBookmarks2,
    selectors: [["arcgis-bookmarks"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      bookmarks: "bookmarks",
      defaultCreateOptions: "defaultCreateOptions",
      defaultEditOptions: "defaultEditOptions",
      disabled: "disabled",
      dragEnabled: "dragEnabled",
      filterPlaceholder: "filterPlaceholder",
      filterText: "filterText",
      hideFlow: "hideFlow",
      hideThumbnail: "hideThumbnail",
      hideTime: "hideTime",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      showAddBookmarkButton: "showAddBookmarkButton",
      showCloseButton: "showCloseButton",
      showCollapseButton: "showCollapseButton",
      showEditBookmarkButton: "showEditBookmarkButton",
      showFilter: "showFilter",
      showHeading: "showHeading",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisBookmarks_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisBookmarks = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "bookmarks", "defaultCreateOptions", "defaultEditOptions", "disabled", "dragEnabled", "filterPlaceholder", "filterText", "hideFlow", "hideThumbnail", "hideTime", "icon", "label", "position", "referenceElement", "showAddBookmarkButton", "showCloseButton", "showCollapseButton", "showEditBookmarkButton", "showFilter", "showHeading", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisBookmarks);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisBookmarks, [{
    type: Component,
    args: [{
      selector: "arcgis-bookmarks",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "bookmarks", "defaultCreateOptions", "defaultEditOptions", "disabled", "dragEnabled", "filterPlaceholder", "filterText", "hideFlow", "hideThumbnail", "hideTime", "icon", "label", "position", "referenceElement", "showAddBookmarkButton", "showCloseButton", "showCollapseButton", "showEditBookmarkButton", "showFilter", "showHeading", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisBuildingExplorer = class ArcgisBuildingExplorer2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisBuildingExplorer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisBuildingExplorer2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisBuildingExplorer2,
    selectors: [["arcgis-building-explorer"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      headingLevel: "headingLevel",
      hideDisciplines: "hideDisciplines",
      hideLevels: "hideLevels",
      hidePhases: "hidePhases",
      icon: "icon",
      label: "label",
      layers: "layers",
      level: "level",
      phase: "phase",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisBuildingExplorer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisBuildingExplorer = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "headingLevel", "hideDisciplines", "hideLevels", "hidePhases", "icon", "label", "layers", "level", "phase", "position", "referenceElement", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisBuildingExplorer);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisBuildingExplorer, [{
    type: Component,
    args: [{
      selector: "arcgis-building-explorer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "headingLevel", "hideDisciplines", "hideLevels", "hidePhases", "icon", "label", "layers", "level", "phase", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisCompass = class ArcgisCompass2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisCompass_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisCompass2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisCompass2,
    selectors: [["arcgis-compass"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      orientation: "orientation",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisCompass_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisCompass = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "icon", "label", "orientation", "position", "referenceElement", "state"],
  methods: ["destroy", "reset"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisCompass);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisCompass, [{
    type: Component,
    args: [{
      selector: "arcgis-compass",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "icon", "label", "orientation", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisCoordinateConversion = class ArcgisCoordinateConversion2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisCoordinateConversion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisCoordinateConversion2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisCoordinateConversion2,
    selectors: [["arcgis-coordinate-conversion"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      conversions: "conversions",
      currentLocation: "currentLocation",
      formats: "formats",
      headingLevel: "headingLevel",
      hideCaptureButton: "hideCaptureButton",
      hideEditButton: "hideEditButton",
      hideExpandButton: "hideExpandButton",
      hideSettingsButton: "hideSettingsButton",
      icon: "icon",
      label: "label",
      locationSymbol: "locationSymbol",
      mode: "mode",
      multipleConversionsDisabled: "multipleConversionsDisabled",
      orientation: "orientation",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      storageDisabled: "storageDisabled",
      storageType: "storageType"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisCoordinateConversion_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisCoordinateConversion = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "conversions", "currentLocation", "formats", "headingLevel", "hideCaptureButton", "hideEditButton", "hideExpandButton", "hideSettingsButton", "icon", "label", "locationSymbol", "mode", "multipleConversionsDisabled", "orientation", "position", "referenceElement", "state", "storageDisabled", "storageType"],
  methods: ["destroy", "reverseConvert"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisCoordinateConversion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisCoordinateConversion, [{
    type: Component,
    args: [{
      selector: "arcgis-coordinate-conversion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "conversions", "currentLocation", "formats", "headingLevel", "hideCaptureButton", "hideEditButton", "hideExpandButton", "hideSettingsButton", "icon", "label", "locationSymbol", "mode", "multipleConversionsDisabled", "orientation", "position", "referenceElement", "state", "storageDisabled", "storageType"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisDaylight = class ArcgisDaylight2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisDaylight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisDaylight2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisDaylight2,
    selectors: [["arcgis-daylight"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      currentSeason: "currentSeason",
      dateOrSeason: "dateOrSeason",
      dayPlaying: "dayPlaying",
      headingLevel: "headingLevel",
      hideDatePicker: "hideDatePicker",
      hideHeader: "hideHeader",
      hidePlayButtons: "hidePlayButtons",
      hideShadowsToggle: "hideShadowsToggle",
      hideSunLightingToggle: "hideSunLightingToggle",
      hideTimezone: "hideTimezone",
      icon: "icon",
      label: "label",
      playSpeedMultiplier: "playSpeedMultiplier",
      position: "position",
      referenceElement: "referenceElement",
      timeSliderSteps: "timeSliderSteps",
      yearPlaying: "yearPlaying"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisDaylight_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisDaylight = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "currentSeason", "dateOrSeason", "dayPlaying", "headingLevel", "hideDatePicker", "hideHeader", "hidePlayButtons", "hideShadowsToggle", "hideSunLightingToggle", "hideTimezone", "icon", "label", "playSpeedMultiplier", "position", "referenceElement", "timeSliderSteps", "yearPlaying"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisDaylight);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisDaylight, [{
    type: Component,
    args: [{
      selector: "arcgis-daylight",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "currentSeason", "dateOrSeason", "dayPlaying", "headingLevel", "hideDatePicker", "hideHeader", "hidePlayButtons", "hideShadowsToggle", "hideSunLightingToggle", "hideTimezone", "icon", "label", "playSpeedMultiplier", "position", "referenceElement", "timeSliderSteps", "yearPlaying"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisDirectionalPad = class ArcgisDirectionalPad2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisDirectionalPad_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisDirectionalPad2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisDirectionalPad2,
    selectors: [["arcgis-directional-pad"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      disabled: "disabled",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      visualScale: "visualScale"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisDirectionalPad_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisDirectionalPad = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "disabled", "icon", "label", "position", "referenceElement", "state", "visualScale"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisDirectionalPad);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisDirectionalPad, [{
    type: Component,
    args: [{
      selector: "arcgis-directional-pad",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "disabled", "icon", "label", "position", "referenceElement", "state", "visualScale"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisDirections = class ArcgisDirections2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisDirections_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisDirections2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisDirections2,
    selectors: [["arcgis-directions"]],
    inputs: {
      apiKey: "apiKey",
      autoDestroyDisabled: "autoDestroyDisabled",
      headingLevel: "headingLevel",
      hideLayerDetails: "hideLayerDetails",
      hideSaveAsButton: "hideSaveAsButton",
      hideSaveButton: "hideSaveButton",
      icon: "icon",
      label: "label",
      lastRoute: "lastRoute",
      layer: "layer",
      maxStops: "maxStops",
      position: "position",
      referenceElement: "referenceElement",
      routeLayerItemId: "routeLayerItemId",
      searchProperties: "searchProperties",
      state: "state",
      unit: "unit",
      useDefaultRouteLayer: "useDefaultRouteLayer"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisDirections_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisDirections = __decorate([ProxyCmp({
  inputs: ["apiKey", "autoDestroyDisabled", "headingLevel", "hideLayerDetails", "hideSaveAsButton", "hideSaveButton", "icon", "label", "lastRoute", "layer", "maxStops", "position", "referenceElement", "routeLayerItemId", "searchProperties", "state", "unit", "useDefaultRouteLayer"],
  methods: ["destroy", "getDirections", "save", "saveAs", "zoomToRoute"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisDirections);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisDirections, [{
    type: Component,
    args: [{
      selector: "arcgis-directions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["apiKey", "autoDestroyDisabled", "headingLevel", "hideLayerDetails", "hideSaveAsButton", "hideSaveButton", "icon", "label", "lastRoute", "layer", "maxStops", "position", "referenceElement", "routeLayerItemId", "searchProperties", "state", "unit", "useDefaultRouteLayer"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisDirectlineMeasurement3d = class ArcgisDirectlineMeasurement3d2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisDirectlineMeasurement3d_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisDirectlineMeasurement3d2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisDirectlineMeasurement3d2,
    selectors: [["arcgis-directline-measurement-3d"]],
    inputs: {
      analysis: "analysis",
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      unit: "unit",
      unitOptions: "unitOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisDirectlineMeasurement3d_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisDirectlineMeasurement3d = __decorate([ProxyCmp({
  inputs: ["analysis", "autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"],
  methods: ["clear", "destroy", "start"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisDirectlineMeasurement3d);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisDirectlineMeasurement3d, [{
    type: Component,
    args: [{
      selector: "arcgis-directline-measurement-3d",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["analysis", "autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisDistanceMeasurement2d = class ArcgisDistanceMeasurement2d2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisDistanceMeasurement2d_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisDistanceMeasurement2d2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisDistanceMeasurement2d2,
    selectors: [["arcgis-distance-measurement-2d"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      unit: "unit",
      unitOptions: "unitOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisDistanceMeasurement2d_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisDistanceMeasurement2d = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisDistanceMeasurement2d);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisDistanceMeasurement2d, [{
    type: Component,
    args: [{
      selector: "arcgis-distance-measurement-2d",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state", "unit", "unitOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisEditor = class ArcgisEditor2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisEditor2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisEditor2,
    selectors: [["arcgis-editor"]],
    inputs: {
      activeWorkflow: "activeWorkflow",
      allowedWorkflows: "allowedWorkflows",
      autoDestroyDisabled: "autoDestroyDisabled",
      headingLevel: "headingLevel",
      hideCreateFeaturesSection: "hideCreateFeaturesSection",
      hideEditFeaturesSection: "hideEditFeaturesSection",
      hideLabelsToggle: "hideLabelsToggle",
      hideSnappingControlsElementsEnabledToggle: "hideSnappingControlsElementsEnabledToggle",
      hideSnappingControlsElementsFeatureEnabledToggle: "hideSnappingControlsElementsFeatureEnabledToggle",
      hideSnappingControlsElementsLayerList: "hideSnappingControlsElementsLayerList",
      hideSnappingControlsElementsSelfEnabledToggle: "hideSnappingControlsElementsSelfEnabledToggle",
      hideTooltipsToggle: "hideTooltipsToggle",
      icon: "icon",
      label: "label",
      labelOptions: "labelOptions",
      layerInfos: "layerInfos",
      position: "position",
      referenceElement: "referenceElement",
      showSnappingControlsElementsHeader: "showSnappingControlsElementsHeader",
      snappingOptions: "snappingOptions",
      state: "state",
      supportingWidgetDefaults: "supportingWidgetDefaults",
      tooltipOptions: "tooltipOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisEditor_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisEditor = __decorate([ProxyCmp({
  inputs: ["activeWorkflow", "allowedWorkflows", "autoDestroyDisabled", "headingLevel", "hideCreateFeaturesSection", "hideEditFeaturesSection", "hideLabelsToggle", "hideSnappingControlsElementsEnabledToggle", "hideSnappingControlsElementsFeatureEnabledToggle", "hideSnappingControlsElementsLayerList", "hideSnappingControlsElementsSelfEnabledToggle", "hideTooltipsToggle", "icon", "label", "labelOptions", "layerInfos", "position", "referenceElement", "showSnappingControlsElementsHeader", "snappingOptions", "state", "supportingWidgetDefaults", "tooltipOptions"],
  methods: ["cancelWorkflow", "destroy", "deleteFeatureFromWorkflow", "startCreateFeaturesWorkflowAtFeatureCreation", "startCreateFeaturesWorkflowAtFeatureTypeSelection", "startUpdateWorkflowAtFeatureEdit", "startUpdateWorkflowAtFeatureSelection", "startUpdateWorkflowAtMultipleFeatureSelection"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisEditor);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisEditor, [{
    type: Component,
    args: [{
      selector: "arcgis-editor",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeWorkflow", "allowedWorkflows", "autoDestroyDisabled", "headingLevel", "hideCreateFeaturesSection", "hideEditFeaturesSection", "hideLabelsToggle", "hideSnappingControlsElementsEnabledToggle", "hideSnappingControlsElementsFeatureEnabledToggle", "hideSnappingControlsElementsLayerList", "hideSnappingControlsElementsSelfEnabledToggle", "hideTooltipsToggle", "icon", "label", "labelOptions", "layerInfos", "position", "referenceElement", "showSnappingControlsElementsHeader", "snappingOptions", "state", "supportingWidgetDefaults", "tooltipOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisElevationProfile = class ArcgisElevationProfile2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisElevationProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisElevationProfile2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisElevationProfile2,
    selectors: [["arcgis-elevation-profile"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      effectiveUnits: "effectiveUnits",
      hideChart: "hideChart",
      hideClearButton: "hideClearButton",
      hideLegend: "hideLegend",
      hideSelectButton: "hideSelectButton",
      hideSettingsButton: "hideSettingsButton",
      hideSketchButton: "hideSketchButton",
      hideUniformChartScalingToggle: "hideUniformChartScalingToggle",
      hideUnitSelector: "hideUnitSelector",
      highlightEnabled: "highlightEnabled",
      hoveredChartPosition: "hoveredChartPosition",
      icon: "icon",
      input: "input",
      label: "label",
      position: "position",
      profiles: "profiles",
      progress: "progress",
      referenceElement: "referenceElement",
      state: "state",
      uniformChartScaling: "uniformChartScaling",
      unit: "unit",
      unitOptions: "unitOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisElevationProfile_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisElevationProfile = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "effectiveUnits", "hideChart", "hideClearButton", "hideLegend", "hideSelectButton", "hideSettingsButton", "hideSketchButton", "hideUniformChartScalingToggle", "hideUnitSelector", "highlightEnabled", "hoveredChartPosition", "icon", "input", "label", "position", "profiles", "progress", "referenceElement", "state", "uniformChartScaling", "unit", "unitOptions"],
  methods: ["destroy", "start", "stop"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisElevationProfile);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisElevationProfile, [{
    type: Component,
    args: [{
      selector: "arcgis-elevation-profile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "effectiveUnits", "hideChart", "hideClearButton", "hideLegend", "hideSelectButton", "hideSettingsButton", "hideSketchButton", "hideUniformChartScalingToggle", "hideUnitSelector", "highlightEnabled", "hoveredChartPosition", "icon", "input", "label", "position", "profiles", "progress", "referenceElement", "state", "uniformChartScaling", "unit", "unitOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisExpand = class ArcgisExpand2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisExpand_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisExpand2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisExpand2,
    selectors: [["arcgis-expand"]],
    inputs: {
      autoCollapse: "autoCollapse",
      autoDestroyDisabled: "autoDestroyDisabled",
      closeOnEsc: "closeOnEsc",
      collapseIcon: "collapseIcon",
      collapseTooltip: "collapseTooltip",
      expandIcon: "expandIcon",
      expandTooltip: "expandTooltip",
      expanded: "expanded",
      group: "group",
      iconNumber: "iconNumber",
      label: "label",
      mode: "mode",
      placement: "placement",
      position: "position",
      referenceElement: "referenceElement"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisExpand_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisExpand = __decorate([ProxyCmp({
  inputs: ["autoCollapse", "autoDestroyDisabled", "closeOnEsc", "collapseIcon", "collapseTooltip", "expandIcon", "expandTooltip", "expanded", "group", "iconNumber", "label", "mode", "placement", "position", "referenceElement"],
  methods: ["destroy", "collapse", "expand", "toggle"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisExpand);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisExpand, [{
    type: Component,
    args: [{
      selector: "arcgis-expand",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoCollapse", "autoDestroyDisabled", "closeOnEsc", "collapseIcon", "collapseTooltip", "expandIcon", "expandTooltip", "expanded", "group", "iconNumber", "label", "mode", "placement", "position", "referenceElement"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFeature = class ArcgisFeature2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisFeature_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFeature2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFeature2,
    selectors: [["arcgis-feature"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      defaultPopupTemplateEnabled: "defaultPopupTemplateEnabled",
      graphic: "graphic",
      headingLevel: "headingLevel",
      hideContentAttachments: "hideContentAttachments",
      hideContentExpression: "hideContentExpression",
      hideContentFields: "hideContentFields",
      hideContentMedia: "hideContentMedia",
      hideContentText: "hideContentText",
      hideLastEditInfo: "hideLastEditInfo",
      hideTitle: "hideTitle",
      icon: "icon",
      label: "label",
      location: "location",
      map: "map",
      position: "position",
      referenceElement: "referenceElement",
      spatialReference: "spatialReference",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFeature_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFeature = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "defaultPopupTemplateEnabled", "graphic", "headingLevel", "hideContentAttachments", "hideContentExpression", "hideContentFields", "hideContentMedia", "hideContentText", "hideLastEditInfo", "hideTitle", "icon", "label", "location", "map", "position", "referenceElement", "spatialReference", "state"],
  methods: ["destroy", "nextMedia", "previousMedia", "setActiveMedia"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFeature);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFeature, [{
    type: Component,
    args: [{
      selector: "arcgis-feature",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "defaultPopupTemplateEnabled", "graphic", "headingLevel", "hideContentAttachments", "hideContentExpression", "hideContentFields", "hideContentMedia", "hideContentText", "hideLastEditInfo", "hideTitle", "icon", "label", "location", "map", "position", "referenceElement", "spatialReference", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFeatureForm = class ArcgisFeatureForm2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisSubmit", "arcgisValueChange", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisFeatureForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFeatureForm2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFeatureForm2,
    selectors: [["arcgis-feature-form"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      feature: "feature",
      formTemplate: "formTemplate",
      groupDisplay: "groupDisplay",
      headingLevel: "headingLevel",
      icon: "icon",
      label: "label",
      layer: "layer",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      timeZone: "timeZone"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFeatureForm_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFeatureForm = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "feature", "formTemplate", "groupDisplay", "headingLevel", "icon", "label", "layer", "position", "referenceElement", "state", "timeZone"],
  methods: ["destroy", "getValues", "submit"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFeatureForm);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFeatureForm, [{
    type: Component,
    args: [{
      selector: "arcgis-feature-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "feature", "formTemplate", "groupDisplay", "headingLevel", "icon", "label", "layer", "position", "referenceElement", "state", "timeZone"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFeatureTable = class ArcgisFeatureTable2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisSelectionChange", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisFeatureTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFeatureTable2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFeatureTable2,
    selectors: [["arcgis-feature-table"]],
    inputs: {
      activeFilters: "activeFilters",
      activeSortOrders: "activeSortOrders",
      attachmentsEnabled: "attachmentsEnabled",
      autoDestroyDisabled: "autoDestroyDisabled",
      autoRefreshEnabled: "autoRefreshEnabled",
      columnReorderingEnabled: "columnReorderingEnabled",
      columns: "columns",
      description: "description",
      editingEnabled: "editingEnabled",
      filterBySelectionEnabled: "filterBySelectionEnabled",
      filterGeometry: "filterGeometry",
      hiddenFields: "hiddenFields",
      hideColumnMenus: "hideColumnMenus",
      hideHeader: "hideHeader",
      hideMenu: "hideMenu",
      hideMenuItemsClearSelection: "hideMenuItemsClearSelection",
      hideMenuItemsDeleteSelection: "hideMenuItemsDeleteSelection",
      hideMenuItemsRefreshData: "hideMenuItemsRefreshData",
      hideMenuItemsSelectedRecordsShowAllToggle: "hideMenuItemsSelectedRecordsShowAllToggle",
      hideMenuItemsToggleColumns: "hideMenuItemsToggleColumns",
      hideMenuItemsZoomToSelection: "hideMenuItemsZoomToSelection",
      hideSelectionColumn: "hideSelectionColumn",
      highlightEnabled: "highlightEnabled",
      highlightIds: "highlightIds",
      icon: "icon",
      itemId: "itemId",
      label: "label",
      layer: "layer",
      menuConfig: "menuConfig",
      multiSortEnabled: "multiSortEnabled",
      objectIds: "objectIds",
      pageSize: "pageSize",
      position: "position",
      referenceElement: "referenceElement",
      relatedRecordsEnabled: "relatedRecordsEnabled",
      returnGeometryEnabled: "returnGeometryEnabled",
      returnMEnabled: "returnMEnabled",
      returnZEnabled: "returnZEnabled",
      state: "state",
      tableTemplate: "tableTemplate",
      timeZone: "timeZone",
      url: "url"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFeatureTable_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFeatureTable = __decorate([ProxyCmp({
  inputs: ["activeFilters", "activeSortOrders", "attachmentsEnabled", "autoDestroyDisabled", "autoRefreshEnabled", "columnReorderingEnabled", "columns", "description", "editingEnabled", "filterBySelectionEnabled", "filterGeometry", "hiddenFields", "hideColumnMenus", "hideHeader", "hideMenu", "hideMenuItemsClearSelection", "hideMenuItemsDeleteSelection", "hideMenuItemsRefreshData", "hideMenuItemsSelectedRecordsShowAllToggle", "hideMenuItemsToggleColumns", "hideMenuItemsZoomToSelection", "hideSelectionColumn", "highlightEnabled", "highlightIds", "icon", "itemId", "label", "layer", "menuConfig", "multiSortEnabled", "objectIds", "pageSize", "position", "referenceElement", "relatedRecordsEnabled", "returnGeometryEnabled", "returnMEnabled", "returnZEnabled", "state", "tableTemplate", "timeZone", "url"],
  methods: ["destroy", "clearSelectionFilter", "deleteSelection", "filterBySelection", "findColumn", "hideColumn", "refresh", "scrollToIndex", "showAllColumns", "showColumn", "sortColumn", "zoomToSelection"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFeatureTable);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFeatureTable, [{
    type: Component,
    args: [{
      selector: "arcgis-feature-table",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeFilters", "activeSortOrders", "attachmentsEnabled", "autoDestroyDisabled", "autoRefreshEnabled", "columnReorderingEnabled", "columns", "description", "editingEnabled", "filterBySelectionEnabled", "filterGeometry", "hiddenFields", "hideColumnMenus", "hideHeader", "hideMenu", "hideMenuItemsClearSelection", "hideMenuItemsDeleteSelection", "hideMenuItemsRefreshData", "hideMenuItemsSelectedRecordsShowAllToggle", "hideMenuItemsToggleColumns", "hideMenuItemsZoomToSelection", "hideSelectionColumn", "highlightEnabled", "highlightIds", "icon", "itemId", "label", "layer", "menuConfig", "multiSortEnabled", "objectIds", "pageSize", "position", "referenceElement", "relatedRecordsEnabled", "returnGeometryEnabled", "returnMEnabled", "returnZEnabled", "state", "tableTemplate", "timeZone", "url"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFeatureTemplates = class ArcgisFeatureTemplates2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisSelect", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisFeatureTemplates_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFeatureTemplates2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFeatureTemplates2,
    selectors: [["arcgis-feature-templates"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      enableListScroll: "enableListScroll",
      filterFunction: "filterFunction",
      filterText: "filterText",
      groupBy: "groupBy",
      headingLevel: "headingLevel",
      hideFilter: "hideFilter",
      icon: "icon",
      label: "label",
      layers: "layers",
      position: "position",
      referenceElement: "referenceElement",
      selectionMode: "selectionMode",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFeatureTemplates_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFeatureTemplates = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "enableListScroll", "filterFunction", "filterText", "groupBy", "headingLevel", "hideFilter", "icon", "label", "layers", "position", "referenceElement", "selectionMode", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFeatureTemplates);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFeatureTemplates, [{
    type: Component,
    args: [{
      selector: "arcgis-feature-templates",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "enableListScroll", "filterFunction", "filterText", "groupBy", "headingLevel", "hideFilter", "icon", "label", "layers", "position", "referenceElement", "selectionMode", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFeatures = class ArcgisFeatures2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisTriggerAction"]);
  }
  static ɵfac = function ArcgisFeatures_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFeatures2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFeatures2,
    selectors: [["arcgis-features"]],
    inputs: {
      actions: "actions",
      active: "active",
      autoDestroyDisabled: "autoDestroyDisabled",
      collapsed: "collapsed",
      content: "content",
      featureViewModelAbilities: "featureViewModelAbilities",
      features: "features",
      featuresPerPage: "featuresPerPage",
      featuresTitle: "featuresTitle",
      goToOverride: "goToOverride",
      headingLevel: "headingLevel",
      hideActionBar: "hideActionBar",
      hideCloseButton: "hideCloseButton",
      hideFeatureNavigation: "hideFeatureNavigation",
      hideFlow: "hideFlow",
      hideHeading: "hideHeading",
      hideSpinner: "hideSpinner",
      icon: "icon",
      includeDefaultActions: "includeDefaultActions",
      label: "label",
      map: "map",
      position: "position",
      promises: "promises",
      referenceElement: "referenceElement",
      selectedFeature: "selectedFeature",
      selectedFeatureIndex: "selectedFeatureIndex",
      showCollapseButton: "showCollapseButton",
      spatialReference: "spatialReference",
      state: "state",
      timeZone: "timeZone"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFeatures_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFeatures = __decorate([ProxyCmp({
  inputs: ["actions", "active", "autoDestroyDisabled", "collapsed", "content", "featureViewModelAbilities", "features", "featuresPerPage", "featuresTitle", "goToOverride", "headingLevel", "hideActionBar", "hideCloseButton", "hideFeatureNavigation", "hideFlow", "hideHeading", "hideSpinner", "icon", "includeDefaultActions", "label", "map", "position", "promises", "referenceElement", "selectedFeature", "selectedFeatureIndex", "showCollapseButton", "spatialReference", "state", "timeZone"],
  methods: ["destroy", "fetchFeatures", "clear", "close", "next", "open", "previous", "triggerAction"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFeatures);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFeatures, [{
    type: Component,
    args: [{
      selector: "arcgis-features",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["actions", "active", "autoDestroyDisabled", "collapsed", "content", "featureViewModelAbilities", "features", "featuresPerPage", "featuresTitle", "goToOverride", "headingLevel", "hideActionBar", "hideCloseButton", "hideFeatureNavigation", "hideFlow", "hideHeading", "hideSpinner", "icon", "includeDefaultActions", "label", "map", "position", "promises", "referenceElement", "selectedFeature", "selectedFeatureIndex", "showCollapseButton", "spatialReference", "state", "timeZone"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFloorFilter = class ArcgisFloorFilter2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisFloorFilter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFloorFilter2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFloorFilter2,
    selectors: [["arcgis-floor-filter"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      facility: "facility",
      headingLevel: "headingLevel",
      icon: "icon",
      label: "label",
      level: "level",
      longNames: "longNames",
      position: "position",
      referenceElement: "referenceElement",
      site: "site"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFloorFilter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFloorFilter = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "facility", "headingLevel", "icon", "label", "level", "longNames", "position", "referenceElement", "site"],
  methods: ["destroy", "updateWebDocument"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFloorFilter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFloorFilter, [{
    type: Component,
    args: [{
      selector: "arcgis-floor-filter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "facility", "headingLevel", "icon", "label", "level", "longNames", "position", "referenceElement", "site"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisFullscreen = class ArcgisFullscreen2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisFullscreen_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisFullscreen2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisFullscreen2,
    selectors: [["arcgis-fullscreen"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      element: "element",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisFullscreen_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisFullscreen = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "element", "icon", "label", "position", "referenceElement", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisFullscreen);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisFullscreen, [{
    type: Component,
    args: [{
      selector: "arcgis-fullscreen",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "element", "icon", "label", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisHistogram = class ArcgisHistogram2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisHistogram_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisHistogram2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisHistogram2,
    selectors: [["arcgis-histogram"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      average: "average",
      barCreatedFunction: "barCreatedFunction",
      bins: "bins",
      dataLineCreatedFunction: "dataLineCreatedFunction",
      dataLines: "dataLines",
      icon: "icon",
      label: "label",
      labelFormatFunction: "labelFormatFunction",
      layout: "layout",
      max: "max",
      min: "min",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisHistogram_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisHistogram = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "average", "barCreatedFunction", "bins", "dataLineCreatedFunction", "dataLines", "icon", "label", "labelFormatFunction", "layout", "max", "min", "position", "referenceElement", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisHistogram);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisHistogram, [{
    type: Component,
    args: [{
      selector: "arcgis-histogram",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "average", "barCreatedFunction", "bins", "dataLineCreatedFunction", "dataLines", "icon", "label", "labelFormatFunction", "layout", "max", "min", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisHistogramRangeSlider = class ArcgisHistogramRangeSlider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisHistogramRangeSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisHistogramRangeSlider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisHistogramRangeSlider2,
    selectors: [["arcgis-histogram-range-slider"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      average: "average",
      barCreatedFunction: "barCreatedFunction",
      bins: "bins",
      dataLineCreatedFunction: "dataLineCreatedFunction",
      dataLines: "dataLines",
      excludedBarColor: "excludedBarColor",
      icon: "icon",
      includedBarColor: "includedBarColor",
      label: "label",
      labelFormatFunction: "labelFormatFunction",
      max: "max",
      min: "min",
      position: "position",
      precision: "precision",
      rangeType: "rangeType",
      referenceElement: "referenceElement",
      standardDeviation: "standardDeviation",
      standardDeviationCount: "standardDeviationCount",
      state: "state",
      values: "values"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisHistogramRangeSlider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisHistogramRangeSlider = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "average", "barCreatedFunction", "bins", "dataLineCreatedFunction", "dataLines", "excludedBarColor", "icon", "includedBarColor", "label", "labelFormatFunction", "max", "min", "position", "precision", "rangeType", "referenceElement", "standardDeviation", "standardDeviationCount", "state", "values"],
  methods: ["destroy", "generateWhereClause"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisHistogramRangeSlider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisHistogramRangeSlider, [{
    type: Component,
    args: [{
      selector: "arcgis-histogram-range-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "average", "barCreatedFunction", "bins", "dataLineCreatedFunction", "dataLines", "excludedBarColor", "icon", "includedBarColor", "label", "labelFormatFunction", "max", "min", "position", "precision", "rangeType", "referenceElement", "standardDeviation", "standardDeviationCount", "state", "values"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisHome = class ArcgisHome2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisGo", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisHome_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisHome2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisHome2,
    selectors: [["arcgis-home"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      goToOverride: "goToOverride",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      viewpoint: "viewpoint"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisHome_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisHome = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "goToOverride", "icon", "label", "position", "referenceElement", "state", "viewpoint"],
  methods: ["cancelGo", "destroy", "go"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisHome);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisHome, [{
    type: Component,
    args: [{
      selector: "arcgis-home",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "goToOverride", "icon", "label", "position", "referenceElement", "state", "viewpoint"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisLayerList = class ArcgisLayerList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisTriggerAction", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisLayerList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisLayerList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisLayerList2,
    selectors: [["arcgis-layer-list"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      catalogLayerList: "catalogLayerList",
      catalogOptions: "catalogOptions",
      collapsed: "collapsed",
      dragEnabled: "dragEnabled",
      filterPlaceholder: "filterPlaceholder",
      filterText: "filterText",
      headingLevel: "headingLevel",
      hideCatalogLayerList: "hideCatalogLayerList",
      hideFlow: "hideFlow",
      hideStatusIndicators: "hideStatusIndicators",
      icon: "icon",
      knowledgeGraphOptions: "knowledgeGraphOptions",
      label: "label",
      listItemCreatedFunction: "listItemCreatedFunction",
      minDragEnabledItems: "minDragEnabledItems",
      minFilterItems: "minFilterItems",
      position: "position",
      referenceElement: "referenceElement",
      selectedItems: "selectedItems",
      selectionMode: "selectionMode",
      showCloseButton: "showCloseButton",
      showCollapseButton: "showCollapseButton",
      showErrors: "showErrors",
      showFilter: "showFilter",
      showHeading: "showHeading",
      showTemporaryLayerIndicators: "showTemporaryLayerIndicators",
      state: "state",
      tableList: "tableList",
      visibilityAppearance: "visibilityAppearance"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisLayerList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisLayerList = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "catalogLayerList", "catalogOptions", "collapsed", "dragEnabled", "filterPlaceholder", "filterText", "headingLevel", "hideCatalogLayerList", "hideFlow", "hideStatusIndicators", "icon", "knowledgeGraphOptions", "label", "listItemCreatedFunction", "minDragEnabledItems", "minFilterItems", "position", "referenceElement", "selectedItems", "selectionMode", "showCloseButton", "showCollapseButton", "showErrors", "showFilter", "showHeading", "showTemporaryLayerIndicators", "state", "tableList", "visibilityAppearance"],
  methods: ["destroy", "triggerAction"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisLayerList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisLayerList, [{
    type: Component,
    args: [{
      selector: "arcgis-layer-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "catalogLayerList", "catalogOptions", "collapsed", "dragEnabled", "filterPlaceholder", "filterText", "headingLevel", "hideCatalogLayerList", "hideFlow", "hideStatusIndicators", "icon", "knowledgeGraphOptions", "label", "listItemCreatedFunction", "minDragEnabledItems", "minFilterItems", "position", "referenceElement", "selectedItems", "selectionMode", "showCloseButton", "showCollapseButton", "showErrors", "showFilter", "showHeading", "showTemporaryLayerIndicators", "state", "tableList", "visibilityAppearance"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisLegend = class ArcgisLegend2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisLegend_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisLegend2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisLegend2,
    selectors: [["arcgis-legend"]],
    inputs: {
      activeLayerInfos: "activeLayerInfos",
      autoDestroyDisabled: "autoDestroyDisabled",
      basemapLegendVisible: "basemapLegendVisible",
      headingLevel: "headingLevel",
      hideLayersNotInCurrentView: "hideLayersNotInCurrentView",
      icon: "icon",
      label: "label",
      layerInfos: "layerInfos",
      legendStyle: "legendStyle",
      position: "position",
      referenceElement: "referenceElement",
      respectLayerDefinitionExpression: "respectLayerDefinitionExpression",
      respectLayerVisibilityDisabled: "respectLayerVisibilityDisabled",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisLegend_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisLegend = __decorate([ProxyCmp({
  inputs: ["activeLayerInfos", "autoDestroyDisabled", "basemapLegendVisible", "headingLevel", "hideLayersNotInCurrentView", "icon", "label", "layerInfos", "legendStyle", "position", "referenceElement", "respectLayerDefinitionExpression", "respectLayerVisibilityDisabled", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisLegend);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisLegend, [{
    type: Component,
    args: [{
      selector: "arcgis-legend",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeLayerInfos", "autoDestroyDisabled", "basemapLegendVisible", "headingLevel", "hideLayersNotInCurrentView", "icon", "label", "layerInfos", "legendStyle", "position", "referenceElement", "respectLayerDefinitionExpression", "respectLayerVisibilityDisabled", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisLineOfSight = class ArcgisLineOfSight2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisLineOfSight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisLineOfSight2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisLineOfSight2,
    selectors: [["arcgis-line-of-sight"]],
    inputs: {
      analysis: "analysis",
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisLineOfSight_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisLineOfSight = __decorate([ProxyCmp({
  inputs: ["analysis", "autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state"],
  methods: ["destroy", "clear", "continue", "start", "stop"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisLineOfSight);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisLineOfSight, [{
    type: Component,
    args: [{
      selector: "arcgis-line-of-sight",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["analysis", "autoDestroyDisabled", "icon", "label", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisLocate = class ArcgisLocate2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisSuccess", "arcgisError", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisLocate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisLocate2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisLocate2,
    selectors: [["arcgis-locate"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      error: "error",
      geolocationOptions: "geolocationOptions",
      goToLocationDisabled: "goToLocationDisabled",
      graphic: "graphic",
      icon: "icon",
      label: "label",
      popupDisabled: "popupDisabled",
      position: "position",
      referenceElement: "referenceElement",
      scale: "scale",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisLocate_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisLocate = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "error", "geolocationOptions", "goToLocationDisabled", "graphic", "icon", "label", "popupDisabled", "position", "referenceElement", "scale", "state"],
  methods: ["destroy", "cancelLocate", "locate"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisLocate);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisLocate, [{
    type: Component,
    args: [{
      selector: "arcgis-locate",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "error", "geolocationOptions", "goToLocationDisabled", "graphic", "icon", "label", "popupDisabled", "position", "referenceElement", "scale", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisMap = class ArcgisMap2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisViewReadyChange", "arcgisViewChange", "arcgisViewClick", "arcgisViewDoubleClick", "arcgisViewDrag", "arcgisViewHold", "arcgisViewImmediateClick", "arcgisViewImmediateDoubleClick", "arcgisViewKeyDown", "arcgisViewKeyUp", "arcgisViewLayerviewCreate", "arcgisViewLayerviewCreateError", "arcgisViewLayerviewDestroy", "arcgisViewMouseWheel", "arcgisViewPointerDown", "arcgisViewPointerEnter", "arcgisViewPointerLeave", "arcgisViewPointerMove", "arcgisViewPointerUp"]);
  }
  static ɵfac = function ArcgisMap_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisMap2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisMap2,
    selectors: [["arcgis-map"]],
    inputs: {
      allLayerViews: "allLayerViews",
      autoDestroyDisabled: "autoDestroyDisabled",
      background: "background",
      basemap: "basemap",
      basemapView: "basemapView",
      center: "center",
      constraints: "constraints",
      extent: "extent",
      fatalError: "fatalError",
      floors: "floors",
      gamepad: "gamepad",
      graphics: "graphics",
      ground: "ground",
      highlightOptions: "highlightOptions",
      interacting: "interacting",
      itemId: "itemId",
      layerViews: "layerViews",
      magnifier: "magnifier",
      map: "map",
      navigating: "navigating",
      navigation: "navigation",
      padding: "padding",
      popup: "popup",
      popupDisabled: "popupDisabled",
      ready: "ready",
      resizeAlign: "resizeAlign",
      resolution: "resolution",
      rotation: "rotation",
      scale: "scale",
      spatialReference: "spatialReference",
      stationary: "stationary",
      suspended: "suspended",
      theme: "theme",
      timeExtent: "timeExtent",
      timeZone: "timeZone",
      toMap: "toMap",
      toScreen: "toScreen",
      updating: "updating",
      view: "view",
      viewpoint: "viewpoint",
      zoom: "zoom"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisMap_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisMap = __decorate([ProxyCmp({
  inputs: ["allLayerViews", "autoDestroyDisabled", "background", "basemap", "basemapView", "center", "constraints", "extent", "fatalError", "floors", "gamepad", "graphics", "ground", "highlightOptions", "interacting", "itemId", "layerViews", "magnifier", "map", "navigating", "navigation", "padding", "popup", "popupDisabled", "ready", "resizeAlign", "resolution", "rotation", "scale", "spatialReference", "stationary", "suspended", "theme", "timeExtent", "timeZone", "toMap", "toScreen", "updating", "view", "viewpoint", "zoom"],
  methods: ["addLayer", "addLayers", "closePopup", "destroy", "goTo", "hitTest", "openPopup", "takeScreenshot", "tryFatalErrorRecovery", "whenLayerView"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisMap);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisMap, [{
    type: Component,
    args: [{
      selector: "arcgis-map",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allLayerViews", "autoDestroyDisabled", "background", "basemap", "basemapView", "center", "constraints", "extent", "fatalError", "floors", "gamepad", "graphics", "ground", "highlightOptions", "interacting", "itemId", "layerViews", "magnifier", "map", "navigating", "navigation", "padding", "popup", "popupDisabled", "ready", "resizeAlign", "resolution", "rotation", "scale", "spatialReference", "stationary", "suspended", "theme", "timeExtent", "timeZone", "toMap", "toScreen", "updating", "view", "viewpoint", "zoom"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisMeasurement = class ArcgisMeasurement2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisMeasurement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisMeasurement2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisMeasurement2,
    selectors: [["arcgis-measurement"]],
    inputs: {
      activeTool: "activeTool",
      activeWidget: "activeWidget",
      areaUnit: "areaUnit",
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      linearUnit: "linearUnit",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisMeasurement_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisMeasurement = __decorate([ProxyCmp({
  inputs: ["activeTool", "activeWidget", "areaUnit", "autoDestroyDisabled", "icon", "label", "linearUnit", "position", "referenceElement", "state"],
  methods: ["clear", "destroy", "startMeasurement"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisMeasurement);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisMeasurement, [{
    type: Component,
    args: [{
      selector: "arcgis-measurement",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeTool", "activeWidget", "areaUnit", "autoDestroyDisabled", "icon", "label", "linearUnit", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisNavigationToggle = class ArcgisNavigationToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisNavigationToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisNavigationToggle2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisNavigationToggle2,
    selectors: [["arcgis-navigation-toggle"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      layout: "layout",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisNavigationToggle_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisNavigationToggle = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "icon", "label", "layout", "position", "referenceElement", "state"],
  methods: ["destroy", "toggle"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisNavigationToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisNavigationToggle, [{
    type: Component,
    args: [{
      selector: "arcgis-navigation-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "icon", "label", "layout", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisOrientedImageryViewer = class ArcgisOrientedImageryViewer2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisOrientedImageryViewer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisOrientedImageryViewer2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisOrientedImageryViewer2,
    selectors: [["arcgis-oriented-imagery-viewer"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      currentCoverageVisible: "currentCoverageVisible",
      disabled: "disabled",
      galleryOpened: "galleryOpened",
      icon: "icon",
      imageEnhancementToolActive: "imageEnhancementToolActive",
      imageGalleryEnabled: "imageGalleryEnabled",
      isAdditionalCoverageVisible: "isAdditionalCoverageVisible",
      isAdditionalPointSourcesVisible: "isAdditionalPointSourcesVisible",
      label: "label",
      layer: "layer",
      mapImageConversionToolState: "mapImageConversionToolState",
      navigationToolActive: "navigationToolActive",
      position: "position",
      referenceElement: "referenceElement",
      referencePoint: "referencePoint"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisOrientedImageryViewer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisOrientedImageryViewer = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "currentCoverageVisible", "disabled", "galleryOpened", "icon", "imageEnhancementToolActive", "imageGalleryEnabled", "isAdditionalCoverageVisible", "isAdditionalPointSourcesVisible", "label", "layer", "mapImageConversionToolState", "navigationToolActive", "position", "referenceElement", "referencePoint"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisOrientedImageryViewer);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisOrientedImageryViewer, [{
    type: Component,
    args: [{
      selector: "arcgis-oriented-imagery-viewer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "currentCoverageVisible", "disabled", "galleryOpened", "icon", "imageEnhancementToolActive", "imageGalleryEnabled", "isAdditionalCoverageVisible", "isAdditionalPointSourcesVisible", "label", "layer", "mapImageConversionToolState", "navigationToolActive", "position", "referenceElement", "referencePoint"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisPlacement = class ArcgisPlacement2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisPlacement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisPlacement2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisPlacement2,
    selectors: [["arcgis-placement"]],
    inputs: {
      position: "position",
      referenceElement: "referenceElement"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisPlacement_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisPlacement = __decorate([ProxyCmp({
  inputs: ["position", "referenceElement"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisPlacement);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisPlacement, [{
    type: Component,
    args: [{
      selector: "arcgis-placement",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["position", "referenceElement"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisPrint = class ArcgisPrint2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisComplete", "arcgisSubmit", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisPrint_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisPrint2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisPrint2,
    selectors: [["arcgis-print"]],
    inputs: {
      allowedFormats: "allowedFormats",
      allowedLayouts: "allowedLayouts",
      autoDestroyDisabled: "autoDestroyDisabled",
      exportedLinks: "exportedLinks",
      extraParameters: "extraParameters",
      headingLevel: "headingLevel",
      icon: "icon",
      includeDefaultTemplatesDisabled: "includeDefaultTemplatesDisabled",
      label: "label",
      portal: "portal",
      position: "position",
      printServiceUrl: "printServiceUrl",
      referenceElement: "referenceElement",
      showPrintAreaEnabled: "showPrintAreaEnabled",
      state: "state",
      templateCustomTextElements: "templateCustomTextElements",
      templateOptions: "templateOptions"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisPrint_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisPrint = __decorate([ProxyCmp({
  inputs: ["allowedFormats", "allowedLayouts", "autoDestroyDisabled", "exportedLinks", "extraParameters", "headingLevel", "icon", "includeDefaultTemplatesDisabled", "label", "portal", "position", "printServiceUrl", "referenceElement", "showPrintAreaEnabled", "state", "templateCustomTextElements", "templateOptions"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisPrint);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisPrint, [{
    type: Component,
    args: [{
      selector: "arcgis-print",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowedFormats", "allowedLayouts", "autoDestroyDisabled", "exportedLinks", "extraParameters", "headingLevel", "icon", "includeDefaultTemplatesDisabled", "label", "portal", "position", "printServiceUrl", "referenceElement", "showPrintAreaEnabled", "state", "templateCustomTextElements", "templateOptions"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisScaleBar = class ArcgisScaleBar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisScaleBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisScaleBar2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisScaleBar2,
    selectors: [["arcgis-scale-bar"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      barStyle: "barStyle",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      unit: "unit"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisScaleBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisScaleBar = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "barStyle", "icon", "label", "position", "referenceElement", "unit"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisScaleBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisScaleBar, [{
    type: Component,
    args: [{
      selector: "arcgis-scale-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "barStyle", "icon", "label", "position", "referenceElement", "unit"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisScaleRangeSlider = class ArcgisScaleRangeSlider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisScaleRangeSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisScaleRangeSlider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisScaleRangeSlider2,
    selectors: [["arcgis-scale-range-slider"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      disabled: "disabled",
      hidePreview: "hidePreview",
      hideScaleMenusMaxScaleMenu: "hideScaleMenusMaxScaleMenu",
      hideScaleMenusMinScaleMenu: "hideScaleMenusMinScaleMenu",
      icon: "icon",
      label: "label",
      layer: "layer",
      maxScale: "maxScale",
      maxScaleLimit: "maxScaleLimit",
      minScale: "minScale",
      minScaleLimit: "minScaleLimit",
      mode: "mode",
      position: "position",
      referenceElement: "referenceElement",
      region: "region",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisScaleRangeSlider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisScaleRangeSlider = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "disabled", "hidePreview", "hideScaleMenusMaxScaleMenu", "hideScaleMenusMinScaleMenu", "icon", "label", "layer", "maxScale", "maxScaleLimit", "minScale", "minScaleLimit", "mode", "position", "referenceElement", "region", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisScaleRangeSlider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisScaleRangeSlider, [{
    type: Component,
    args: [{
      selector: "arcgis-scale-range-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "disabled", "hidePreview", "hideScaleMenusMaxScaleMenu", "hideScaleMenusMinScaleMenu", "icon", "label", "layer", "maxScale", "maxScaleLimit", "minScale", "minScaleLimit", "mode", "position", "referenceElement", "region", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisScene = class ArcgisScene2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisViewReadyChange", "arcgisViewChange", "arcgisViewClick", "arcgisViewDoubleClick", "arcgisViewDrag", "arcgisViewHold", "arcgisViewImmediateClick", "arcgisViewImmediateDoubleClick", "arcgisViewKeyDown", "arcgisViewKeyUp", "arcgisViewLayerviewCreate", "arcgisViewLayerviewCreateError", "arcgisViewLayerviewDestroy", "arcgisViewMouseWheel", "arcgisViewPointerDown", "arcgisViewPointerEnter", "arcgisViewPointerLeave", "arcgisViewPointerMove", "arcgisViewPointerUp"]);
  }
  static ɵfac = function ArcgisScene_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisScene2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisScene2,
    selectors: [["arcgis-scene"]],
    inputs: {
      allLayerViews: "allLayerViews",
      alphaCompositingEnabled: "alphaCompositingEnabled",
      analyses: "analyses",
      autoDestroyDisabled: "autoDestroyDisabled",
      basemap: "basemap",
      basemapView: "basemapView",
      camera: "camera",
      center: "center",
      clippingArea: "clippingArea",
      constraints: "constraints",
      environment: "environment",
      extent: "extent",
      fatalError: "fatalError",
      floors: "floors",
      gamepad: "gamepad",
      graphics: "graphics",
      ground: "ground",
      groundView: "groundView",
      highlightOptions: "highlightOptions",
      interacting: "interacting",
      itemId: "itemId",
      layerViews: "layerViews",
      magnifier: "magnifier",
      map: "map",
      navigating: "navigating",
      navigation: "navigation",
      padding: "padding",
      performanceInfo: "performanceInfo",
      popup: "popup",
      popupDisabled: "popupDisabled",
      qualityProfile: "qualityProfile",
      ready: "ready",
      resolution: "resolution",
      scale: "scale",
      spatialReference: "spatialReference",
      stationary: "stationary",
      suspended: "suspended",
      theme: "theme",
      timeExtent: "timeExtent",
      toMap: "toMap",
      toScreen: "toScreen",
      updating: "updating",
      view: "view",
      viewingMode: "viewingMode",
      viewpoint: "viewpoint",
      zoom: "zoom"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisScene_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisScene = __decorate([ProxyCmp({
  inputs: ["allLayerViews", "alphaCompositingEnabled", "analyses", "autoDestroyDisabled", "basemap", "basemapView", "camera", "center", "clippingArea", "constraints", "environment", "extent", "fatalError", "floors", "gamepad", "graphics", "ground", "groundView", "highlightOptions", "interacting", "itemId", "layerViews", "magnifier", "map", "navigating", "navigation", "padding", "performanceInfo", "popup", "popupDisabled", "qualityProfile", "ready", "resolution", "scale", "spatialReference", "stationary", "suspended", "theme", "timeExtent", "toMap", "toScreen", "updating", "view", "viewingMode", "viewpoint", "zoom"],
  methods: ["addLayer", "addLayers", "closePopup", "destroy", "goTo", "hitTest", "openPopup", "takeScreenshot", "tryFatalErrorRecovery", "whenAnalysisView", "whenLayerView"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisScene);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisScene, [{
    type: Component,
    args: [{
      selector: "arcgis-scene",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allLayerViews", "alphaCompositingEnabled", "analyses", "autoDestroyDisabled", "basemap", "basemapView", "camera", "center", "clippingArea", "constraints", "environment", "extent", "fatalError", "floors", "gamepad", "graphics", "ground", "groundView", "highlightOptions", "interacting", "itemId", "layerViews", "magnifier", "map", "navigating", "navigation", "padding", "performanceInfo", "popup", "popupDisabled", "qualityProfile", "ready", "resolution", "scale", "spatialReference", "stationary", "suspended", "theme", "timeExtent", "toMap", "toScreen", "updating", "view", "viewingMode", "viewpoint", "zoom"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisSearch = class ArcgisSearch2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisBlur", "arcgisClear", "arcgisComplete", "arcgisFocus", "arcgisStart", "arcgisSelectResult", "arcgisSuggestComplete", "arcgisSuggestStart"]);
  }
  static ɵfac = function ArcgisSearch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisSearch2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisSearch2,
    selectors: [["arcgis-search"]],
    inputs: {
      activeMenu: "activeMenu",
      activeSource: "activeSource",
      activeSourceIndex: "activeSourceIndex",
      allPlaceholder: "allPlaceholder",
      allSources: "allSources",
      autoDestroyDisabled: "autoDestroyDisabled",
      autoSelectDisabled: "autoSelectDisabled",
      defaultSources: "defaultSources",
      disabled: "disabled",
      icon: "icon",
      includeDefaultSourcesDisabled: "includeDefaultSourcesDisabled",
      label: "label",
      locationDisabled: "locationDisabled",
      maxResults: "maxResults",
      maxSuggestions: "maxSuggestions",
      minSuggestCharacters: "minSuggestCharacters",
      popupDisabled: "popupDisabled",
      popupTemplate: "popupTemplate",
      portal: "portal",
      position: "position",
      referenceElement: "referenceElement",
      resultGraphic: "resultGraphic",
      resultGraphicDisabled: "resultGraphicDisabled",
      results: "results",
      searchAllDisabled: "searchAllDisabled",
      searchTerm: "searchTerm",
      selectedResult: "selectedResult",
      sources: "sources",
      state: "state",
      suggestions: "suggestions",
      suggestionsDisabled: "suggestionsDisabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisSearch_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisSearch = __decorate([ProxyCmp({
  inputs: ["activeMenu", "activeSource", "activeSourceIndex", "allPlaceholder", "allSources", "autoDestroyDisabled", "autoSelectDisabled", "defaultSources", "disabled", "icon", "includeDefaultSourcesDisabled", "label", "locationDisabled", "maxResults", "maxSuggestions", "minSuggestCharacters", "popupDisabled", "popupTemplate", "portal", "position", "referenceElement", "resultGraphic", "resultGraphicDisabled", "results", "searchAllDisabled", "searchTerm", "selectedResult", "sources", "state", "suggestions", "suggestionsDisabled"],
  methods: ["blurSearch", "clearSearch", "focusSearch", "destroy", "search", "suggest"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisSearch);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisSearch, [{
    type: Component,
    args: [{
      selector: "arcgis-search",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeMenu", "activeSource", "activeSourceIndex", "allPlaceholder", "allSources", "autoDestroyDisabled", "autoSelectDisabled", "defaultSources", "disabled", "icon", "includeDefaultSourcesDisabled", "label", "locationDisabled", "maxResults", "maxSuggestions", "minSuggestCharacters", "popupDisabled", "popupTemplate", "portal", "position", "referenceElement", "resultGraphic", "resultGraphicDisabled", "results", "searchAllDisabled", "searchTerm", "selectedResult", "sources", "state", "suggestions", "suggestionsDisabled"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisShadowCast = class ArcgisShadowCast2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisShadowCast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisShadowCast2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisShadowCast2,
    selectors: [["arcgis-shadow-cast"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      discreteOptions: "discreteOptions",
      durationOptions: "durationOptions",
      endTimeOfDay: "endTimeOfDay",
      headingLevel: "headingLevel",
      hideColorPicker: "hideColorPicker",
      hideDatePicker: "hideDatePicker",
      hideTimeRangeSlider: "hideTimeRangeSlider",
      hideTimezone: "hideTimezone",
      hideTooltip: "hideTooltip",
      hideVisualizationOptions: "hideVisualizationOptions",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      startTimeOfDay: "startTimeOfDay",
      state: "state",
      thresholdOptions: "thresholdOptions",
      utcOffset: "utcOffset",
      visualizationType: "visualizationType"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisShadowCast_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisShadowCast = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "discreteOptions", "durationOptions", "endTimeOfDay", "headingLevel", "hideColorPicker", "hideDatePicker", "hideTimeRangeSlider", "hideTimezone", "hideTooltip", "hideVisualizationOptions", "icon", "label", "position", "referenceElement", "startTimeOfDay", "state", "thresholdOptions", "utcOffset", "visualizationType"],
  methods: ["destroy", "getDuration", "start", "stop"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisShadowCast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisShadowCast, [{
    type: Component,
    args: [{
      selector: "arcgis-shadow-cast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "discreteOptions", "durationOptions", "endTimeOfDay", "headingLevel", "hideColorPicker", "hideDatePicker", "hideTimeRangeSlider", "hideTimezone", "hideTooltip", "hideVisualizationOptions", "icon", "label", "position", "referenceElement", "startTimeOfDay", "state", "thresholdOptions", "utcOffset", "visualizationType"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisSketch = class ArcgisSketch2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisCreate", "arcgisDelete", "arcgisRedo", "arcgisUndo", "arcgisUpdate"]);
  }
  static ɵfac = function ArcgisSketch_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisSketch2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisSketch2,
    selectors: [["arcgis-sketch"]],
    inputs: {
      activeTool: "activeTool",
      autoDestroyDisabled: "autoDestroyDisabled",
      availableCreateTools: "availableCreateTools",
      createGraphic: "createGraphic",
      creationMode: "creationMode",
      defaultCreateOptions: "defaultCreateOptions",
      defaultGraphicsLayerDisabled: "defaultGraphicsLayerDisabled",
      defaultUpdateOptions: "defaultUpdateOptions",
      hideCreateToolsCircle: "hideCreateToolsCircle",
      hideCreateToolsPoint: "hideCreateToolsPoint",
      hideCreateToolsPolygon: "hideCreateToolsPolygon",
      hideCreateToolsPolyline: "hideCreateToolsPolyline",
      hideCreateToolsRectangle: "hideCreateToolsRectangle",
      hideDuplicateButton: "hideDuplicateButton",
      hideLabelsToggle: "hideLabelsToggle",
      hideSelectionToolsLassoSelection: "hideSelectionToolsLassoSelection",
      hideSelectionToolsRectangleSelection: "hideSelectionToolsRectangleSelection",
      hideSettingsMenu: "hideSettingsMenu",
      hideSnappingControls: "hideSnappingControls",
      hideSnappingControlsElementsEnabledToggle: "hideSnappingControlsElementsEnabledToggle",
      hideSnappingControlsElementsFeatureEnabledToggle: "hideSnappingControlsElementsFeatureEnabledToggle",
      hideSnappingControlsElementsLayerList: "hideSnappingControlsElementsLayerList",
      hideSnappingControlsElementsSelfEnabledToggle: "hideSnappingControlsElementsSelfEnabledToggle",
      hideTooltipsToggle: "hideTooltipsToggle",
      hideUndoRedoMenu: "hideUndoRedoMenu",
      icon: "icon",
      label: "label",
      labelOptions: "labelOptions",
      layer: "layer",
      layout: "layout",
      pointSymbol: "pointSymbol",
      polygonSymbol: "polygonSymbol",
      polylineSymbol: "polylineSymbol",
      position: "position",
      referenceElement: "referenceElement",
      showSnappingControlsElementsHeader: "showSnappingControlsElementsHeader",
      snappingOptions: "snappingOptions",
      state: "state",
      tooltipOptions: "tooltipOptions",
      updateGraphics: "updateGraphics"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisSketch_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisSketch = __decorate([ProxyCmp({
  inputs: ["activeTool", "autoDestroyDisabled", "availableCreateTools", "createGraphic", "creationMode", "defaultCreateOptions", "defaultGraphicsLayerDisabled", "defaultUpdateOptions", "hideCreateToolsCircle", "hideCreateToolsPoint", "hideCreateToolsPolygon", "hideCreateToolsPolyline", "hideCreateToolsRectangle", "hideDuplicateButton", "hideLabelsToggle", "hideSelectionToolsLassoSelection", "hideSelectionToolsRectangleSelection", "hideSettingsMenu", "hideSnappingControls", "hideSnappingControlsElementsEnabledToggle", "hideSnappingControlsElementsFeatureEnabledToggle", "hideSnappingControlsElementsLayerList", "hideSnappingControlsElementsSelfEnabledToggle", "hideTooltipsToggle", "hideUndoRedoMenu", "icon", "label", "labelOptions", "layer", "layout", "pointSymbol", "polygonSymbol", "polylineSymbol", "position", "referenceElement", "showSnappingControlsElementsHeader", "snappingOptions", "state", "tooltipOptions", "updateGraphics"],
  methods: ["cancel", "complete", "create", "delete", "destroy", "duplicate", "redo", "undo", "update"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisSketch);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisSketch, [{
    type: Component,
    args: [{
      selector: "arcgis-sketch",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeTool", "autoDestroyDisabled", "availableCreateTools", "createGraphic", "creationMode", "defaultCreateOptions", "defaultGraphicsLayerDisabled", "defaultUpdateOptions", "hideCreateToolsCircle", "hideCreateToolsPoint", "hideCreateToolsPolygon", "hideCreateToolsPolyline", "hideCreateToolsRectangle", "hideDuplicateButton", "hideLabelsToggle", "hideSelectionToolsLassoSelection", "hideSelectionToolsRectangleSelection", "hideSettingsMenu", "hideSnappingControls", "hideSnappingControlsElementsEnabledToggle", "hideSnappingControlsElementsFeatureEnabledToggle", "hideSnappingControlsElementsLayerList", "hideSnappingControlsElementsSelfEnabledToggle", "hideTooltipsToggle", "hideUndoRedoMenu", "icon", "label", "labelOptions", "layer", "layout", "pointSymbol", "polygonSymbol", "polylineSymbol", "position", "referenceElement", "showSnappingControlsElementsHeader", "snappingOptions", "state", "tooltipOptions", "updateGraphics"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisSlice = class ArcgisSlice2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisSlice_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisSlice2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisSlice2,
    selectors: [["arcgis-slice"]],
    inputs: {
      analysis: "analysis",
      autoDestroyDisabled: "autoDestroyDisabled",
      excludeGroundSurface: "excludeGroundSurface",
      excludedLayers: "excludedLayers",
      headingLevel: "headingLevel",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      shape: "shape",
      state: "state",
      tiltEnabled: "tiltEnabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisSlice_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisSlice = __decorate([ProxyCmp({
  inputs: ["analysis", "autoDestroyDisabled", "excludeGroundSurface", "excludedLayers", "headingLevel", "icon", "label", "position", "referenceElement", "shape", "state", "tiltEnabled"],
  methods: ["clear", "destroy", "start"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisSlice);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisSlice, [{
    type: Component,
    args: [{
      selector: "arcgis-slice",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["analysis", "autoDestroyDisabled", "excludeGroundSurface", "excludedLayers", "headingLevel", "icon", "label", "position", "referenceElement", "shape", "state", "tiltEnabled"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisSlider = class ArcgisSlider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisMaxChange", "arcgisMaxClick", "arcgisMinChange", "arcgisMinClick", "arcgisSegmentClick", "arcgisSegmentDrag", "arcgisThumbChange", "arcgisThumbClick", "arcgisThumbDrag", "arcgisTickClick", "arcgisTrackClick"]);
  }
  static ɵfac = function ArcgisSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisSlider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisSlider2,
    selectors: [["arcgis-slider"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      draggableSegmentsEnabled: "draggableSegmentsEnabled",
      effectiveMax: "effectiveMax",
      effectiveMin: "effectiveMin",
      effectiveSegmentElements: "effectiveSegmentElements",
      icon: "icon",
      label: "label",
      labelElements: "labelElements",
      labelInputsEnabled: "labelInputsEnabled",
      labels: "labels",
      layout: "layout",
      max: "max",
      maxLabelElement: "maxLabelElement",
      min: "min",
      minLabelElement: "minLabelElement",
      position: "position",
      precision: "precision",
      rangeLabelInputsEnabled: "rangeLabelInputsEnabled",
      referenceElement: "referenceElement",
      segmentElements: "segmentElements",
      snapOnClickEnabled: "snapOnClickEnabled",
      state: "state",
      steps: "steps",
      syncedSegmentsEnabled: "syncedSegmentsEnabled",
      thumbElements: "thumbElements",
      thumbsConstrained: "thumbsConstrained",
      tickConfigs: "tickConfigs",
      tickElements: "tickElements",
      trackElement: "trackElement",
      values: "values"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisSlider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisSlider = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "draggableSegmentsEnabled", "effectiveMax", "effectiveMin", "effectiveSegmentElements", "icon", "label", "labelElements", "labelInputsEnabled", "labels", "layout", "max", "maxLabelElement", "min", "minLabelElement", "position", "precision", "rangeLabelInputsEnabled", "referenceElement", "segmentElements", "snapOnClickEnabled", "state", "steps", "syncedSegmentsEnabled", "thumbElements", "thumbsConstrained", "tickConfigs", "tickElements", "trackElement", "values"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisSlider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisSlider, [{
    type: Component,
    args: [{
      selector: "arcgis-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "draggableSegmentsEnabled", "effectiveMax", "effectiveMin", "effectiveSegmentElements", "icon", "label", "labelElements", "labelInputsEnabled", "labels", "layout", "max", "maxLabelElement", "min", "minLabelElement", "position", "precision", "rangeLabelInputsEnabled", "referenceElement", "segmentElements", "snapOnClickEnabled", "state", "steps", "syncedSegmentsEnabled", "thumbElements", "thumbsConstrained", "tickConfigs", "tickElements", "trackElement", "values"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisSwipe = class ArcgisSwipe2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisSwipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisSwipe2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisSwipe2,
    selectors: [["arcgis-swipe"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      direction: "direction",
      dragLabel: "dragLabel",
      icon: "icon",
      label: "label",
      leadingLayers: "leadingLayers",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      swipePosition: "swipePosition",
      trailingLayers: "trailingLayers"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisSwipe_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisSwipe = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "direction", "dragLabel", "icon", "label", "leadingLayers", "position", "referenceElement", "state", "swipePosition", "trailingLayers"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisSwipe);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisSwipe, [{
    type: Component,
    args: [{
      selector: "arcgis-swipe",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "direction", "dragLabel", "icon", "label", "leadingLayers", "position", "referenceElement", "state", "swipePosition", "trailingLayers"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisTableList = class ArcgisTableList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisTriggerAction"]);
  }
  static ɵfac = function ArcgisTableList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisTableList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisTableList2,
    selectors: [["arcgis-table-list"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      collapsed: "collapsed",
      dragEnabled: "dragEnabled",
      filterPlaceholder: "filterPlaceholder",
      filterText: "filterText",
      icon: "icon",
      label: "label",
      listItemCreatedFunction: "listItemCreatedFunction",
      minDragEnabledItems: "minDragEnabledItems",
      minFilterItems: "minFilterItems",
      position: "position",
      referenceElement: "referenceElement",
      selectedItems: "selectedItems",
      selectionMode: "selectionMode",
      state: "state",
      visibleElementsCloseButton: "visibleElementsCloseButton",
      visibleElementsCollapseButton: "visibleElementsCollapseButton",
      visibleElementsErrors: "visibleElementsErrors",
      visibleElementsFilter: "visibleElementsFilter",
      visibleElementsFlow: "visibleElementsFlow",
      visibleElementsHeading: "visibleElementsHeading",
      visibleElementsStatusIndicators: "visibleElementsStatusIndicators",
      visibleElementsTemporaryTableIndicators: "visibleElementsTemporaryTableIndicators"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisTableList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisTableList = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "collapsed", "dragEnabled", "filterPlaceholder", "filterText", "icon", "label", "listItemCreatedFunction", "minDragEnabledItems", "minFilterItems", "position", "referenceElement", "selectedItems", "selectionMode", "state", "visibleElementsCloseButton", "visibleElementsCollapseButton", "visibleElementsErrors", "visibleElementsFilter", "visibleElementsFlow", "visibleElementsHeading", "visibleElementsStatusIndicators", "visibleElementsTemporaryTableIndicators"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisTableList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisTableList, [{
    type: Component,
    args: [{
      selector: "arcgis-table-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "collapsed", "dragEnabled", "filterPlaceholder", "filterText", "icon", "label", "listItemCreatedFunction", "minDragEnabledItems", "minFilterItems", "position", "referenceElement", "selectedItems", "selectionMode", "state", "visibleElementsCloseButton", "visibleElementsCollapseButton", "visibleElementsErrors", "visibleElementsFilter", "visibleElementsFlow", "visibleElementsHeading", "visibleElementsStatusIndicators", "visibleElementsTemporaryTableIndicators"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisTimeSlider = class ArcgisTimeSlider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisTriggerAction"]);
  }
  static ɵfac = function ArcgisTimeSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisTimeSlider2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisTimeSlider2,
    selectors: [["arcgis-time-slider"]],
    inputs: {
      actions: "actions",
      autoDestroyDisabled: "autoDestroyDisabled",
      disabled: "disabled",
      effectiveStops: "effectiveStops",
      fullTimeExtent: "fullTimeExtent",
      icon: "icon",
      label: "label",
      layout: "layout",
      loop: "loop",
      mode: "mode",
      playRate: "playRate",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      stops: "stops",
      tickConfigs: "tickConfigs",
      timeExtent: "timeExtent",
      timeVisible: "timeVisible",
      timeZone: "timeZone"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisTimeSlider_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisTimeSlider = __decorate([ProxyCmp({
  inputs: ["actions", "autoDestroyDisabled", "disabled", "effectiveStops", "fullTimeExtent", "icon", "label", "layout", "loop", "mode", "playRate", "position", "referenceElement", "state", "stops", "tickConfigs", "timeExtent", "timeVisible", "timeZone"],
  methods: ["destroy", "applyTimeSliderSettings", "next", "play", "previous", "stop", "updateWebDocument"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisTimeSlider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisTimeSlider, [{
    type: Component,
    args: [{
      selector: "arcgis-time-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["actions", "autoDestroyDisabled", "disabled", "effectiveStops", "fullTimeExtent", "icon", "label", "layout", "loop", "mode", "playRate", "position", "referenceElement", "state", "stops", "tickConfigs", "timeExtent", "timeVisible", "timeZone"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisTrack = class ArcgisTrack2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisComplete", "arcgisError"]);
  }
  static ɵfac = function ArcgisTrack_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisTrack2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisTrack2,
    selectors: [["arcgis-track"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      error: "error",
      geolocationOptions: "geolocationOptions",
      goToLocationEnabled: "goToLocationEnabled",
      graphic: "graphic",
      icon: "icon",
      label: "label",
      position: "position",
      positionFilterFunction: "positionFilterFunction",
      referenceElement: "referenceElement",
      rotationEnabled: "rotationEnabled",
      scale: "scale",
      state: "state",
      tracking: "tracking"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisTrack_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisTrack = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "error", "geolocationOptions", "goToLocationEnabled", "graphic", "icon", "label", "position", "positionFilterFunction", "referenceElement", "rotationEnabled", "scale", "state", "tracking"],
  methods: ["destroy", "start", "stop"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisTrack);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisTrack, [{
    type: Component,
    args: [{
      selector: "arcgis-track",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "error", "geolocationOptions", "goToLocationEnabled", "graphic", "icon", "label", "position", "positionFilterFunction", "referenceElement", "rotationEnabled", "scale", "state", "tracking"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisUtilityNetworkAssociations = class ArcgisUtilityNetworkAssociations2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisUtilityNetworkAssociations_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisUtilityNetworkAssociations2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisUtilityNetworkAssociations2,
    selectors: [["arcgis-utility-network-associations"]],
    inputs: {
      autoRefreshAssociationsDisabled: "autoRefreshAssociationsDisabled",
      connectivityAssociationsLineSymbol: "connectivityAssociationsLineSymbol",
      includeConnectivityAssociationsDisabled: "includeConnectivityAssociationsDisabled",
      includeStructuralAttachmentAssociationsDisabled: "includeStructuralAttachmentAssociationsDisabled",
      maxAllowableAssociations: "maxAllowableAssociations",
      maxAllowableAssociationsSliderMax: "maxAllowableAssociationsSliderMax",
      maxAllowableAssociationsSliderMin: "maxAllowableAssociationsSliderMin",
      maxAllowableAssociationsSliderStep: "maxAllowableAssociationsSliderStep",
      position: "position",
      referenceElement: "referenceElement",
      showArrowsConnectivity: "showArrowsConnectivity",
      showArrowsStructuralAttachment: "showArrowsStructuralAttachment",
      showAssociationsEnabled: "showAssociationsEnabled",
      structuralAttachmentAssociationsLineSymbol: "structuralAttachmentAssociationsLineSymbol",
      utilityNetwork: "utilityNetwork",
      visibleElementsConnectivityAssociationsSettingsArrowsToggle: "visibleElementsConnectivityAssociationsSettingsArrowsToggle",
      visibleElementsConnectivityAssociationsSettingsCapSelect: "visibleElementsConnectivityAssociationsSettingsCapSelect",
      visibleElementsConnectivityAssociationsSettingsColorPicker: "visibleElementsConnectivityAssociationsSettingsColorPicker",
      visibleElementsConnectivityAssociationsSettingsStylePicker: "visibleElementsConnectivityAssociationsSettingsStylePicker",
      visibleElementsConnectivityAssociationsSettingsWidthInput: "visibleElementsConnectivityAssociationsSettingsWidthInput",
      visibleElementsMaxAllowableAssociationsSlider: "visibleElementsMaxAllowableAssociationsSlider",
      visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle: "visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle",
      visibleElementsStructuralAttachmentAssociationsSettingsCapSelect: "visibleElementsStructuralAttachmentAssociationsSettingsCapSelect",
      visibleElementsStructuralAttachmentAssociationsSettingsStylePicker: "visibleElementsStructuralAttachmentAssociationsSettingsStylePicker",
      visibleElementsStructuralAttachmentAssociationsSettingsWidthInput: "visibleElementsStructuralAttachmentAssociationsSettingsWidthInput"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisUtilityNetworkAssociations_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisUtilityNetworkAssociations = __decorate([ProxyCmp({
  inputs: ["autoRefreshAssociationsDisabled", "connectivityAssociationsLineSymbol", "includeConnectivityAssociationsDisabled", "includeStructuralAttachmentAssociationsDisabled", "maxAllowableAssociations", "maxAllowableAssociationsSliderMax", "maxAllowableAssociationsSliderMin", "maxAllowableAssociationsSliderStep", "position", "referenceElement", "showArrowsConnectivity", "showArrowsStructuralAttachment", "showAssociationsEnabled", "structuralAttachmentAssociationsLineSymbol", "utilityNetwork", "visibleElementsConnectivityAssociationsSettingsArrowsToggle", "visibleElementsConnectivityAssociationsSettingsCapSelect", "visibleElementsConnectivityAssociationsSettingsColorPicker", "visibleElementsConnectivityAssociationsSettingsStylePicker", "visibleElementsConnectivityAssociationsSettingsWidthInput", "visibleElementsMaxAllowableAssociationsSlider", "visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle", "visibleElementsStructuralAttachmentAssociationsSettingsCapSelect", "visibleElementsStructuralAttachmentAssociationsSettingsStylePicker", "visibleElementsStructuralAttachmentAssociationsSettingsWidthInput"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisUtilityNetworkAssociations);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisUtilityNetworkAssociations, [{
    type: Component,
    args: [{
      selector: "arcgis-utility-network-associations",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoRefreshAssociationsDisabled", "connectivityAssociationsLineSymbol", "includeConnectivityAssociationsDisabled", "includeStructuralAttachmentAssociationsDisabled", "maxAllowableAssociations", "maxAllowableAssociationsSliderMax", "maxAllowableAssociationsSliderMin", "maxAllowableAssociationsSliderStep", "position", "referenceElement", "showArrowsConnectivity", "showArrowsStructuralAttachment", "showAssociationsEnabled", "structuralAttachmentAssociationsLineSymbol", "utilityNetwork", "visibleElementsConnectivityAssociationsSettingsArrowsToggle", "visibleElementsConnectivityAssociationsSettingsCapSelect", "visibleElementsConnectivityAssociationsSettingsColorPicker", "visibleElementsConnectivityAssociationsSettingsStylePicker", "visibleElementsConnectivityAssociationsSettingsWidthInput", "visibleElementsMaxAllowableAssociationsSlider", "visibleElementsStructuralAttachmentAssociationsSettingsArrowsToggle", "visibleElementsStructuralAttachmentAssociationsSettingsCapSelect", "visibleElementsStructuralAttachmentAssociationsSettingsStylePicker", "visibleElementsStructuralAttachmentAssociationsSettingsWidthInput"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisUtilityNetworkTrace = class ArcgisUtilityNetworkTrace2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisAddFlag", "arcgisAddFlagComplete", "arcgisAddFlagError", "arcgisAddResultArea", "arcgisRemoveResultArea"]);
  }
  static ɵfac = function ArcgisUtilityNetworkTrace_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisUtilityNetworkTrace2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisUtilityNetworkTrace2,
    selectors: [["arcgis-utility-network-trace"]],
    inputs: {
      defaultGraphicColor: "defaultGraphicColor",
      disabled: "disabled",
      enableResultArea: "enableResultArea",
      flags: "flags",
      gdbVersion: "gdbVersion",
      inputSettings: "inputSettings",
      position: "position",
      referenceElement: "referenceElement",
      resultAreaProperties: "resultAreaProperties",
      selectOnCompleteDisabled: "selectOnCompleteDisabled",
      selectedTraces: "selectedTraces",
      showGraphicsOnCompleteDisabled: "showGraphicsOnCompleteDisabled",
      showSelectionAttributesDisabled: "showSelectionAttributesDisabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisUtilityNetworkTrace_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisUtilityNetworkTrace = __decorate([ProxyCmp({
  inputs: ["defaultGraphicColor", "disabled", "enableResultArea", "flags", "gdbVersion", "inputSettings", "position", "referenceElement", "resultAreaProperties", "selectOnCompleteDisabled", "selectedTraces", "showGraphicsOnCompleteDisabled", "showSelectionAttributesDisabled"],
  methods: ["checkCanTrace", "confirmReset"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisUtilityNetworkTrace);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisUtilityNetworkTrace, [{
    type: Component,
    args: [{
      selector: "arcgis-utility-network-trace",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["defaultGraphicColor", "disabled", "enableResultArea", "flags", "gdbVersion", "inputSettings", "position", "referenceElement", "resultAreaProperties", "selectOnCompleteDisabled", "selectedTraces", "showGraphicsOnCompleteDisabled", "showSelectionAttributesDisabled"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisUtilityNetworkValidateTopology = class ArcgisUtilityNetworkValidateTopology2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady"]);
  }
  static ɵfac = function ArcgisUtilityNetworkValidateTopology_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisUtilityNetworkValidateTopology2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisUtilityNetworkValidateTopology2,
    selectors: [["arcgis-utility-network-validate-topology"]],
    inputs: {
      extentToValidate: "extentToValidate",
      position: "position",
      referenceElement: "referenceElement",
      utilityNetwork: "utilityNetwork"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisUtilityNetworkValidateTopology_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisUtilityNetworkValidateTopology = __decorate([ProxyCmp({
  inputs: ["extentToValidate", "position", "referenceElement", "utilityNetwork"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisUtilityNetworkValidateTopology);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisUtilityNetworkValidateTopology, [{
    type: Component,
    args: [{
      selector: "arcgis-utility-network-validate-topology",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["extentToValidate", "position", "referenceElement", "utilityNetwork"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisValuePicker = class ArcgisValuePicker2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange", "arcgisAnimate", "arcgisNext", "arcgisPause", "arcgisPlay", "arcgisPrevious"]);
  }
  static ɵfac = function ArcgisValuePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisValuePicker2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisValuePicker2,
    selectors: [["arcgis-value-picker"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      canNext: "canNext",
      canPlay: "canPlay",
      canPrevious: "canPrevious",
      caption: "caption",
      component: "component",
      hideNextButton: "hideNextButton",
      hidePlayButton: "hidePlayButton",
      hidePreviousButton: "hidePreviousButton",
      icon: "icon",
      label: "label",
      layout: "layout",
      loop: "loop",
      playRate: "playRate",
      position: "position",
      referenceElement: "referenceElement",
      values: "values"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisValuePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisValuePicker = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "canNext", "canPlay", "canPrevious", "caption", "component", "hideNextButton", "hidePlayButton", "hidePreviousButton", "icon", "label", "layout", "loop", "playRate", "position", "referenceElement", "values"],
  methods: ["destroy", "next", "pause", "play", "previous"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisValuePicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisValuePicker, [{
    type: Component,
    args: [{
      selector: "arcgis-value-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "canNext", "canPlay", "canPrevious", "caption", "component", "hideNextButton", "hidePlayButton", "hidePreviousButton", "icon", "label", "layout", "loop", "playRate", "position", "referenceElement", "values"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisVersionManagement = class ArcgisVersionManagement2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisVersioningStateChanged"]);
  }
  static ɵfac = function ArcgisVersionManagement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisVersionManagement2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisVersionManagement2,
    selectors: [["arcgis-version-management"]],
    inputs: {
      allowEditingDisabled: "allowEditingDisabled",
      autoDestroyDisabled: "autoDestroyDisabled",
      closable: "closable",
      icon: "icon",
      label: "label",
      mode: "mode",
      pageSize: "pageSize",
      position: "position",
      referenceElement: "referenceElement",
      state: "state",
      versioningStates: "versioningStates",
      view: "view"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisVersionManagement_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisVersionManagement = __decorate([ProxyCmp({
  inputs: ["allowEditingDisabled", "autoDestroyDisabled", "closable", "icon", "label", "mode", "pageSize", "position", "referenceElement", "state", "versioningStates", "view"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisVersionManagement);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisVersionManagement, [{
    type: Component,
    args: [{
      selector: "arcgis-version-management",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEditingDisabled", "autoDestroyDisabled", "closable", "icon", "label", "mode", "pageSize", "position", "referenceElement", "state", "versioningStates", "view"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisVersionManagementServiceItem = class ArcgisVersionManagementServiceItem2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisFlowItemBack", "arcgisFlowItemClose", "arcgisGetVersions", "arcgisManageVersion", "arcgisNewVersion"]);
  }
  static ɵfac = function ArcgisVersionManagementServiceItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisVersionManagementServiceItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisVersionManagementServiceItem2,
    selectors: [["arcgis-version-management-service-item"]],
    inputs: {
      serviceItemElementProps: "serviceItemElementProps"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisVersionManagementServiceItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisVersionManagementServiceItem = __decorate([ProxyCmp({
  inputs: ["serviceItemElementProps"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisVersionManagementServiceItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisVersionManagementServiceItem, [{
    type: Component,
    args: [{
      selector: "arcgis-version-management-service-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["serviceItemElementProps"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisVersionManagementVersionItem = class ArcgisVersionManagementVersionItem2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisManageVersion"]);
  }
  static ɵfac = function ArcgisVersionManagementVersionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisVersionManagementVersionItem2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisVersionManagementVersionItem2,
    selectors: [["arcgis-version-management-version-item"]],
    inputs: {
      versionItemElementProps: "versionItemElementProps"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisVersionManagementVersionItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisVersionManagementVersionItem = __decorate([ProxyCmp({
  inputs: ["versionItemElementProps"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisVersionManagementVersionItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisVersionManagementVersionItem, [{
    type: Component,
    args: [{
      selector: "arcgis-version-management-version-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["versionItemElementProps"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisVersionManagementVersionList = class ArcgisVersionManagementVersionList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisNewVersion", "arcgisGetVersions", "arcgisManageVersion"]);
  }
  static ɵfac = function ArcgisVersionManagementVersionList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisVersionManagementVersionList2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisVersionManagementVersionList2,
    selectors: [["arcgis-version-management-version-list"]],
    inputs: {
      currentPage: "currentPage",
      versionListElementProps: "versionListElementProps"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisVersionManagementVersionList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisVersionManagementVersionList = __decorate([ProxyCmp({
  inputs: ["currentPage", "versionListElementProps"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisVersionManagementVersionList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisVersionManagementVersionList, [{
    type: Component,
    args: [{
      selector: "arcgis-version-management-version-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["currentPage", "versionListElementProps"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisVersionManagementVersionProperties = class ArcgisVersionManagementVersionProperties2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisAlterVersion", "arcgisCreateVersion", "arcgisFlowItemBack", "arcgisFlowItemClose"]);
  }
  static ɵfac = function ArcgisVersionManagementVersionProperties_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisVersionManagementVersionProperties2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisVersionManagementVersionProperties2,
    selectors: [["arcgis-version-management-version-properties"]],
    inputs: {
      versionPropertiesElementProps: "versionPropertiesElementProps"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisVersionManagementVersionProperties_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisVersionManagementVersionProperties = __decorate([ProxyCmp({
  inputs: ["versionPropertiesElementProps"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisVersionManagementVersionProperties);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisVersionManagementVersionProperties, [{
    type: Component,
    args: [{
      selector: "arcgis-version-management-version-properties",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["versionPropertiesElementProps"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisWeather = class ArcgisWeather2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisWeather_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisWeather2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisWeather2,
    selectors: [["arcgis-weather"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      headingLevel: "headingLevel",
      hideHeader: "hideHeader",
      icon: "icon",
      label: "label",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisWeather_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisWeather = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "headingLevel", "hideHeader", "icon", "label", "position", "referenceElement", "state"],
  methods: ["destroy"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisWeather);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisWeather, [{
    type: Component,
    args: [{
      selector: "arcgis-weather",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "headingLevel", "hideHeader", "icon", "label", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var ArcgisZoom = class ArcgisZoom2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["arcgisReady", "arcgisPropertyChange"]);
  }
  static ɵfac = function ArcgisZoom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ArcgisZoom2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: ArcgisZoom2,
    selectors: [["arcgis-zoom"]],
    inputs: {
      autoDestroyDisabled: "autoDestroyDisabled",
      icon: "icon",
      label: "label",
      layout: "layout",
      position: "position",
      referenceElement: "referenceElement",
      state: "state"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ArcgisZoom_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
ArcgisZoom = __decorate([ProxyCmp({
  inputs: ["autoDestroyDisabled", "icon", "label", "layout", "position", "referenceElement", "state"],
  methods: ["destroy", "zoomIn", "zoomOut"]
}), __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])], ArcgisZoom);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcgisZoom, [{
    type: Component,
    args: [{
      selector: "arcgis-zoom",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoDestroyDisabled", "icon", "label", "layout", "position", "referenceElement", "state"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], null);
})();
var DIRECTIVES = [ArcgisAreaMeasurement2d, ArcgisAreaMeasurement3d, ArcgisAttachments, ArcgisBasemapGallery, ArcgisBasemapLayerList, ArcgisBasemapToggle, ArcgisBookmarks, ArcgisBuildingExplorer, ArcgisCompass, ArcgisCoordinateConversion, ArcgisDaylight, ArcgisDirectionalPad, ArcgisDirections, ArcgisDirectlineMeasurement3d, ArcgisDistanceMeasurement2d, ArcgisEditor, ArcgisElevationProfile, ArcgisExpand, ArcgisFeature, ArcgisFeatureForm, ArcgisFeatureTable, ArcgisFeatureTemplates, ArcgisFeatures, ArcgisFloorFilter, ArcgisFullscreen, ArcgisHistogram, ArcgisHistogramRangeSlider, ArcgisHome, ArcgisLayerList, ArcgisLegend, ArcgisLineOfSight, ArcgisLocate, ArcgisMap, ArcgisMeasurement, ArcgisNavigationToggle, ArcgisOrientedImageryViewer, ArcgisPlacement, ArcgisPrint, ArcgisScaleBar, ArcgisScaleRangeSlider, ArcgisScene, ArcgisSearch, ArcgisShadowCast, ArcgisSketch, ArcgisSlice, ArcgisSlider, ArcgisSwipe, ArcgisTableList, ArcgisTimeSlider, ArcgisTrack, ArcgisUtilityNetworkAssociations, ArcgisUtilityNetworkTrace, ArcgisUtilityNetworkValidateTopology, ArcgisValuePicker, ArcgisVersionManagement, ArcgisVersionManagementServiceItem, ArcgisVersionManagementVersionItem, ArcgisVersionManagementVersionList, ArcgisVersionManagementVersionProperties, ArcgisWeather, ArcgisZoom];
var ComponentLibraryModule = class _ComponentLibraryModule {
  static ɵfac = function ComponentLibraryModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComponentLibraryModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ComponentLibraryModule,
    declarations: [ArcgisAreaMeasurement2d, ArcgisAreaMeasurement3d, ArcgisAttachments, ArcgisBasemapGallery, ArcgisBasemapLayerList, ArcgisBasemapToggle, ArcgisBookmarks, ArcgisBuildingExplorer, ArcgisCompass, ArcgisCoordinateConversion, ArcgisDaylight, ArcgisDirectionalPad, ArcgisDirections, ArcgisDirectlineMeasurement3d, ArcgisDistanceMeasurement2d, ArcgisEditor, ArcgisElevationProfile, ArcgisExpand, ArcgisFeature, ArcgisFeatureForm, ArcgisFeatureTable, ArcgisFeatureTemplates, ArcgisFeatures, ArcgisFloorFilter, ArcgisFullscreen, ArcgisHistogram, ArcgisHistogramRangeSlider, ArcgisHome, ArcgisLayerList, ArcgisLegend, ArcgisLineOfSight, ArcgisLocate, ArcgisMap, ArcgisMeasurement, ArcgisNavigationToggle, ArcgisOrientedImageryViewer, ArcgisPlacement, ArcgisPrint, ArcgisScaleBar, ArcgisScaleRangeSlider, ArcgisScene, ArcgisSearch, ArcgisShadowCast, ArcgisSketch, ArcgisSlice, ArcgisSlider, ArcgisSwipe, ArcgisTableList, ArcgisTimeSlider, ArcgisTrack, ArcgisUtilityNetworkAssociations, ArcgisUtilityNetworkTrace, ArcgisUtilityNetworkValidateTopology, ArcgisValuePicker, ArcgisVersionManagement, ArcgisVersionManagementServiceItem, ArcgisVersionManagementVersionItem, ArcgisVersionManagementVersionList, ArcgisVersionManagementVersionProperties, ArcgisWeather, ArcgisZoom],
    exports: [ArcgisAreaMeasurement2d, ArcgisAreaMeasurement3d, ArcgisAttachments, ArcgisBasemapGallery, ArcgisBasemapLayerList, ArcgisBasemapToggle, ArcgisBookmarks, ArcgisBuildingExplorer, ArcgisCompass, ArcgisCoordinateConversion, ArcgisDaylight, ArcgisDirectionalPad, ArcgisDirections, ArcgisDirectlineMeasurement3d, ArcgisDistanceMeasurement2d, ArcgisEditor, ArcgisElevationProfile, ArcgisExpand, ArcgisFeature, ArcgisFeatureForm, ArcgisFeatureTable, ArcgisFeatureTemplates, ArcgisFeatures, ArcgisFloorFilter, ArcgisFullscreen, ArcgisHistogram, ArcgisHistogramRangeSlider, ArcgisHome, ArcgisLayerList, ArcgisLegend, ArcgisLineOfSight, ArcgisLocate, ArcgisMap, ArcgisMeasurement, ArcgisNavigationToggle, ArcgisOrientedImageryViewer, ArcgisPlacement, ArcgisPrint, ArcgisScaleBar, ArcgisScaleRangeSlider, ArcgisScene, ArcgisSearch, ArcgisShadowCast, ArcgisSketch, ArcgisSlice, ArcgisSlider, ArcgisSwipe, ArcgisTableList, ArcgisTimeSlider, ArcgisTrack, ArcgisUtilityNetworkAssociations, ArcgisUtilityNetworkTrace, ArcgisUtilityNetworkValidateTopology, ArcgisValuePicker, ArcgisVersionManagement, ArcgisVersionManagementServiceItem, ArcgisVersionManagementVersionItem, ArcgisVersionManagementVersionList, ArcgisVersionManagementVersionProperties, ArcgisWeather, ArcgisZoom]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [{
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentLibraryModule, [{
    type: NgModule,
    args: [{
      declarations: [...DIRECTIVES],
      exports: [...DIRECTIVES],
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: () => defineCustomElements,
        multi: true
      }]
    }]
  }], null, null);
})();
export {
  ArcgisAreaMeasurement2d,
  ArcgisAreaMeasurement3d,
  ArcgisAttachments,
  ArcgisBasemapGallery,
  ArcgisBasemapLayerList,
  ArcgisBasemapToggle,
  ArcgisBookmarks,
  ArcgisBuildingExplorer,
  ArcgisCompass,
  ArcgisCoordinateConversion,
  ArcgisDaylight,
  ArcgisDirectionalPad,
  ArcgisDirections,
  ArcgisDirectlineMeasurement3d,
  ArcgisDistanceMeasurement2d,
  ArcgisEditor,
  ArcgisElevationProfile,
  ArcgisExpand,
  ArcgisFeature,
  ArcgisFeatureForm,
  ArcgisFeatureTable,
  ArcgisFeatureTemplates,
  ArcgisFeatures,
  ArcgisFloorFilter,
  ArcgisFullscreen,
  ArcgisHistogram,
  ArcgisHistogramRangeSlider,
  ArcgisHome,
  ArcgisLayerList,
  ArcgisLegend,
  ArcgisLineOfSight,
  ArcgisLocate,
  ArcgisMap,
  ArcgisMeasurement,
  ArcgisNavigationToggle,
  ArcgisOrientedImageryViewer,
  ArcgisPlacement,
  ArcgisPrint,
  ArcgisScaleBar,
  ArcgisScaleRangeSlider,
  ArcgisScene,
  ArcgisSearch,
  ArcgisShadowCast,
  ArcgisSketch,
  ArcgisSlice,
  ArcgisSlider,
  ArcgisSwipe,
  ArcgisTableList,
  ArcgisTimeSlider,
  ArcgisTrack,
  ArcgisUtilityNetworkAssociations,
  ArcgisUtilityNetworkTrace,
  ArcgisUtilityNetworkValidateTopology,
  ArcgisValuePicker,
  ArcgisVersionManagement,
  ArcgisVersionManagementServiceItem,
  ArcgisVersionManagementVersionItem,
  ArcgisVersionManagementVersionList,
  ArcgisVersionManagementVersionProperties,
  ArcgisWeather,
  ArcgisZoom,
  ComponentLibraryModule,
  DIRECTIVES
};
//# sourceMappingURL=@arcgis_map-components-angular.js.map
