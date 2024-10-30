import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/views/3d/support/updatingProperties.js
var e = {
  value: 0.5,
  readOnly: true
};
var t = {
  readOnly: true,
  value: 0.5,
  get() {
    return this.updating ? this.updatingProgressValue : 1;
  }
};

export {
  e,
  t
};
//# sourceMappingURL=chunk-J53R4G62.js.map
