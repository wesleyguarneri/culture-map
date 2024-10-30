import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/layers/support/ElevationQueryTileCache.js
var t = class {
  constructor(t2) {
    this._store = t2;
  }
  destroy() {
    this._store.destroy();
  }
  get(t2) {
    return this._store.get(t2);
  }
  put(t2, s) {
    this._store.put(t2, s, s.values.byteLength + 256);
  }
};

export {
  t
};
//# sourceMappingURL=chunk-OMBGLREJ.js.map
