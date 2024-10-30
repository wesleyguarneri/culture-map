import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b as b3
} from "./chunk-ZGV7AVXO.js";
import {
  e as e2
} from "./chunk-H5Z6ZNKP.js";
import {
  b as b2,
  m,
  y as y2
} from "./chunk-TVHVZK5G.js";
import {
  F
} from "./chunk-P2MUOE6G.js";
import {
  l as l2,
  n2,
  t
} from "./chunk-M6PHREXO.js";
import {
  l
} from "./chunk-KLK34CGP.js";
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
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
  a3 as a,
  b
} from "./chunk-UDMPWVPF.js";
import {
  u
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/support/groundUtils.js
var i = {
  "world-elevation": {
    id: "worldElevation",
    url: "//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",
    layerType: "ArcGISTiledElevationServiceLayer"
  },
  "world-topobathymetry": {
    id: "worldTopoBathymetry",
    url: "//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",
    layerType: "ArcGISTiledElevationServiceLayer"
  }
};
function t2(t3) {
  let a2 = null;
  if ("string" == typeof t3) {
    if (t3 in i) {
      const r = i[t3];
      a2 = new b3({
        resourceInfo: {
          data: {
            layers: [r]
          }
        }
      });
    } else n.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${t3}. Try "world-elevation"`);
  } else a2 = b(b3, t3);
  return a2;
}

// ../../../node_modules/@arcgis/core/Map.js
var j = class extends n2(l2(o.EventedMixin(S))) {
  constructor(e3) {
    super(e3), this.allLayers = new l({
      getCollections: () => [this.basemap?.baseLayers, this.ground?.layers, this.layers, this.basemap?.referenceLayers],
      getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null
    }), this.allTables = t(this), this.basemap = null, this.editableLayers = new l({
      getCollections: () => [this.allLayers],
      itemFilterFunction: e2
    }), this.ground = new b3(), this._basemapCache = y2();
  }
  destroy() {
    m(this._basemapCache), this._basemapCache = null, this.allLayers.destroy(), this.allTables.destroy(), this.editableLayers.destroy(), this.basemap = u(this.basemap), u(this.ground), this._set("ground", null);
  }
  castBasemap(e3) {
    return b2(e3, this._basemapCache);
  }
  castGround(e3) {
    const s2 = t2(e3);
    return s2 ?? this._get("ground");
  }
  findLayerById(e3) {
    return this.allLayers.find((s2) => s2.id === e3);
  }
  findTableById(e3) {
    return this.allTables.find((s2) => s2.id === e3);
  }
};
e([y({
  readOnly: true,
  dependsOn: []
})], j.prototype, "allLayers", void 0), e([y({
  readOnly: true
})], j.prototype, "allTables", void 0), e([y({
  type: F,
  json: {
    read: {
      source: "baseMap"
    },
    write: {
      target: "baseMap"
    }
  }
})], j.prototype, "basemap", void 0), e([s("basemap")], j.prototype, "castBasemap", null), e([y({
  readOnly: true
})], j.prototype, "editableLayers", void 0), e([y({
  type: b3,
  nonNullable: true
})], j.prototype, "ground", void 0), e([s("ground")], j.prototype, "castGround", null), e([y()], j.prototype, "undoRedo", void 0), j = e([a("esri.Map")], j);
var L = j;

export {
  L
};
//# sourceMappingURL=chunk-7HNGFXGM.js.map
