import {
  f as f2
} from "./chunk-SGSUM5YO.js";
import {
  t
} from "./chunk-SG5TCCCK.js";
import {
  n as n3
} from "./chunk-6A7CWJED.js";
import {
  h
} from "./chunk-PB33BAI3.js";
import {
  S as S2
} from "./chunk-FYAEQPUY.js";
import {
  C
} from "./chunk-7XMEZQ34.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  a as a3,
  c
} from "./chunk-MNLT652N.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  I,
  U,
  pt
} from "./chunk-SYATLP3H.js";
import {
  u2
} from "./chunk-V6AMQYXE.js";
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
  y as y2
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  a,
  n2 as n,
  y
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/support/basemapDefinitions.js
function a4(e2) {
  return __async(this, null, function* () {
    if (!e2) return;
    const a5 = e2.includes("-vector") ? e2.slice(0, e2.indexOf("-vector")) : e2.includes("-3d") ? e2.slice(0, e2.indexOf("-3d")) : e2, s3 = yield h("esri/t9n/basemaps");
    return s3[e2] || s3[a5];
  });
}
var s2 = {
  satellite: {
    id: "satellite",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/satellite.jpg");
    },
    baseMapLayers: [{
      id: "satellite-base-layer",
      url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Imagery",
      showLegend: false,
      visibility: true,
      opacity: 1
    }]
  },
  hybrid: {
    id: "hybrid",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/hybrid.jpg");
    },
    baseMapLayers: [{
      id: "hybrid-base-layer",
      url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Imagery",
      showLegend: false,
      visibility: true,
      opacity: 1
    }, {
      id: "hybrid-reference-layer",
      styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Hybrid Reference Layer",
      isReference: true,
      showLegend: false,
      visibility: true,
      opacity: 1
    }]
  },
  terrain: {
    id: "terrain",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/terrain.jpg");
    },
    baseMapLayers: [{
      id: "terrain-base-layer",
      url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Terrain Base",
      showLegend: false,
      visibility: true,
      opacity: 1
    }, {
      id: "terrain-reference-layer",
      url: "//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Reference Overlay",
      isReference: true,
      showLegend: false,
      visibility: true,
      opacity: 1
    }]
  },
  oceans: {
    id: "oceans",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/oceans.jpg");
    },
    baseMapLayers: [{
      id: "oceans-base-layer",
      url: "//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Ocean Base",
      showLegend: false,
      visibility: true,
      opacity: 1
    }, {
      id: "oceans-reference-layer",
      url: "//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Ocean Reference",
      isReference: true,
      showLegend: false,
      visibility: true,
      opacity: 1
    }]
  },
  osm: {
    id: "osm",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/osm.jpg");
    },
    baseMapLayers: [{
      id: "osm-base-layer",
      layerType: "OpenStreetMap",
      title: "Open Street Map",
      showLegend: false,
      visibility: true,
      opacity: 1
    }]
  },
  "dark-gray-vector": {
    id: "dark-gray-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/dark-gray-vector.jpg");
    },
    baseMapLayers: [{
      id: "dark-gray-base-layer",
      styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Dark Gray Base",
      visibility: true,
      opacity: 1
    }, {
      id: "dark-gray-reference-layer",
      styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Dark Gray Reference",
      isReference: true,
      visibility: true,
      opacity: 1
    }]
  },
  get "dark-gray"() {
    return __spreadProps(__spreadValues({}, this["dark-gray-vector"]), {
      id: "dark-gray"
    });
  },
  "gray-vector": {
    id: "gray-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/gray-vector.jpg");
    },
    baseMapLayers: [{
      id: "gray-base-layer",
      styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Light Gray Base",
      visibility: true,
      opacity: 1
    }, {
      id: "gray-reference-layer",
      styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Light Gray Reference",
      isReference: true,
      visibility: true,
      opacity: 1
    }]
  },
  get gray() {
    return __spreadProps(__spreadValues({}, this["gray-vector"]), {
      id: "gray"
    });
  },
  "streets-vector": {
    id: "streets-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-vector.jpg");
    },
    baseMapLayers: [{
      id: "streets-vector-base-layer",
      styleUrl: "//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "World Streets",
      visibility: true,
      opacity: 1
    }]
  },
  get streets() {
    return __spreadProps(__spreadValues({}, this["streets-vector"]), {
      id: "streets"
    });
  },
  "topo-vector": {
    id: "topo-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/topo-vector.jpg");
    },
    baseMapLayers: [{
      id: "world-hillshade-layer",
      url: "//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Hillshade",
      showLegend: false,
      visibility: true,
      opacity: 1
    }, {
      id: "topo-vector-base-layer",
      styleUrl: "//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "World Topo",
      visibility: true,
      opacity: 1
    }]
  },
  get topo() {
    return __spreadProps(__spreadValues({}, this["topo-vector"]), {
      id: "topo"
    });
  },
  "streets-night-vector": {
    id: "streets-night-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-night.jpg");
    },
    baseMapLayers: [{
      id: "streets-night-vector-base-layer",
      styleUrl: "//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "World Streets Night",
      visibility: true,
      opacity: 1
    }]
  },
  "streets-relief-vector": {
    id: "streets-relief-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-relief.jpg");
    },
    baseMapLayers: [{
      id: "world-hillshade-layer",
      url: "//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",
      layerType: "ArcGISTiledMapServiceLayer",
      title: "World Hillshade",
      showLegend: false,
      visibility: true,
      opacity: 1
    }, {
      id: "streets-relief-vector-base-layer",
      styleUrl: "//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",
      title: "World Streets Relief",
      layerType: "VectorTileLayer",
      visibility: true,
      opacity: 1
    }]
  },
  "streets-navigation-vector": {
    id: "streets-navigation-vector",
    classic: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-navigation.jpg");
    },
    baseMapLayers: [{
      id: "streets-navigation-vector-base-layer",
      styleUrl: "//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "World Streets Navigation",
      visibility: true,
      opacity: 1
    }]
  },
  "topo-3d": {
    id: "topo-3d",
    is3d: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/topo-3d.png");
    },
    baseMapLayers: [{
      id: "topo-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/1e7d1784d1ef4b79ba6764d0bd6c3150/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Topographic",
      visibility: true,
      opacity: 1
    }, {
      id: "topo-3d-trees",
      title: "Trees",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Thematic_v1/SceneServer",
      itemId: "f75fef56b2d944fe92ef9f7737b4f953",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "topo-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",
      itemId: "a84404ad39c64c328d0596e361ec459b",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "topo-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "navigation-3d": {
    id: "navigation-3d",
    is3d: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/navigation-3d.jpg");
    },
    baseMapLayers: [{
      id: "navigation-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/ccc904ff872b4144b94934e55e32784b/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Navigation",
      visibility: true,
      opacity: 1
    }, {
      id: "navigation-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",
      itemId: "a84404ad39c64c328d0596e361ec459b",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "navigation-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "streets-3d": {
    id: "streets-3d",
    is3d: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-3d.png");
    },
    baseMapLayers: [{
      id: "streets-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/198298c4c64c4cb19de5b46aa00c198d/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Streets",
      visibility: true,
      opacity: 1
    }, {
      id: "streets-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",
      itemId: "a84404ad39c64c328d0596e361ec459b",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "streets-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "osm-3d": {
    id: "osm-3d",
    is3d: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/osm-3d.png");
    },
    baseMapLayers: [{
      id: "osm-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/8628d259c9d14bdc848771c23c513940/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "OpenStreetMap",
      visibility: true,
      opacity: 1
    }, {
      id: "osm-3d-trees",
      title: "Trees",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Thematic_v1/SceneServer",
      itemId: "f75fef56b2d944fe92ef9f7737b4f953",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "osm-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",
      itemId: "a84404ad39c64c328d0596e361ec459b",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "osm-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "gray-3d": {
    id: "gray-3d",
    is3d: true,
    get thumbnailUrl() {
      return n2("esri/images/basemap/gray-3d.png");
    },
    baseMapLayers: [{
      id: "gray-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/01a14b466345455ba4176d2e6390db92/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Streets",
      visibility: true,
      opacity: 1
    }, {
      id: "gray-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",
      itemId: "a84404ad39c64c328d0596e361ec459b",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "gray-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "navigation-dark-3d": {
    id: "navigation-dark-3d",
    itemId: "5a1365328b4943f09a54cf5fd1205707",
    is3d: true,
    baseMapLayers: [{
      id: "navigation-dark-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/451a1777ab3f4bf095fae24a117439d9/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "Navigation Dark"
    }, {
      id: "navigation-dark-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer/layers/0",
      itemId: "f364b70b012a4da5a4b5921e193eac4a",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "navigation-dark-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "streets-dark-3d": {
    id: "streets-dark-3d",
    itemId: "8a4efa2c20484ec9b4557895e65736ff",
    is3d: true,
    baseMapLayers: [{
      id: "streets-dark-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/bc599b6d741a4ac084b7eea7bf8c5938/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "OpenStreetMap Streets Night (for 3D)"
    }, {
      id: "streets-dark-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer",
      itemId: "f364b70b012a4da5a4b5921e193eac4a",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "streets-dark-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "dark-gray-3d": {
    id: "dark-gray-3d",
    itemId: "a8b7322a5fe94002bb0f5e0eeb0c5c18",
    is3d: true,
    baseMapLayers: [{
      id: "dark-gray-3d-base-layer",
      styleUrl: "https://www.arcgis.com/sharing/rest/content/items/4178f71acb934fb89f169e7d667c20c6/resources/styles/root.json",
      layerType: "VectorTileLayer",
      title: "OpenStreetMap Dark Gray Canvas (for 3D)"
    }, {
      id: "dark-gray-3d-places-and-labels",
      title: "Places and Labels",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer/layers/0",
      itemId: "f364b70b012a4da5a4b5921e193eac4a",
      layerType: "ArcGISSceneServiceLayer"
    }, {
      id: "dark-gray-3d-buildings",
      title: "Buildings",
      url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
      itemId: "ca0470dbbddb4db28bad74ed39949e25",
      layerType: "ArcGISSceneServiceLayer"
    }]
  },
  "arcgis-imagery": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/hybrid.jpg");
    },
    title: "Imagery Hybrid",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Imagery",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",
      title: "Hybrid Reference Layer",
      isReference: true
    }]
  },
  "arcgis-imagery-standard": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/satellite.jpg");
    },
    title: "Imagery",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Imagery",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"
    }]
  },
  "arcgis-imagery-labels": {
    title: "Hybrid [Reference]",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",
      title: "Hybrid Reference Layer",
      isReference: true
    }]
  },
  "arcgis-light-gray": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/gray-vector.jpg");
    },
    title: "Light Gray Canvas",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",
      title: "Light Gray Canvas Base"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",
      title: "Light Gray Canvas Labels",
      isReference: true
    }]
  },
  "arcgis-dark-gray": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/dark-gray.jpg");
    },
    title: "Dark Gray Canvas",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",
      title: "Dark Gray Canvas Base"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",
      title: "Dark Gray Canvas Labels",
      isReference: true
    }]
  },
  "arcgis-navigation": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-navigation.jpg");
    },
    title: "Navigation",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",
      title: "World Navigation Map"
    }]
  },
  "arcgis-navigation-night": {
    title: "Navigation (Dark Mode)",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",
      title: "World Navigation Map (Dark Mode)"
    }]
  },
  "arcgis-streets": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-vector.jpg");
    },
    title: "Streets",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",
      title: "World Street Map"
    }]
  },
  "arcgis-streets-night": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-night.jpg");
    },
    title: "Streets (Night)",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",
      title: "World Street Map (Night)"
    }]
  },
  "arcgis-streets-relief": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/streets-relief.jpg");
    },
    title: "Streets (with Relief)",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",
      title: "World Street Map (with Relief)"
    }]
  },
  "arcgis-topographic": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/topo.jpg");
    },
    title: "Topographic",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",
      title: "World Topographic Map"
    }]
  },
  "arcgis-oceans": {
    get thumbnailUrl() {
      return n2("esri/images/basemap/oceans.jpg");
    },
    title: "Oceans",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Ocean Base",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",
      title: "World Ocean Reference",
      isReference: true
    }]
  },
  "osm-standard": {
    title: "OpenStreetMap",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",
      title: "OpenStreetMap"
    }]
  },
  "osm-standard-relief": {
    title: "OpenStreetMap (with relief)",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",
      layerType: "VectorTileLayer",
      title: "OpenStreetMap Relief Base"
    }]
  },
  "osm-streets": {
    title: "OpenStreetMap (Streets)",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",
      title: "OpenStreetMap (Streets)"
    }]
  },
  "osm-streets-relief": {
    title: "OpenStreetMap (Streets with relief)",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",
      layerType: "VectorTileLayer",
      title: "OpenStreetMap Relief Base"
    }]
  },
  "osm-light-gray": {
    title: "OpenStreetMap (Light Gray Canvas)",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",
      title: "OSM (Light Gray Base)"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",
      title: "OSM (Light Gray Reference)",
      isReference: true
    }]
  },
  "osm-dark-gray": {
    title: "OpenStreetMap (Dark Gray Canvas)",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",
      title: "OSM (Dark Gray Base)"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",
      title: "OSM (Dark Gray Reference)",
      isReference: true
    }]
  },
  "arcgis-terrain": {
    title: "Terrain with Labels",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",
      title: "World Terrain Base"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",
      title: "World Terrain Reference",
      isReference: true
    }]
  },
  "arcgis-community": {
    title: "Community",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",
      title: "Community"
    }]
  },
  "arcgis-charted-territory": {
    title: "Charted Territory",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",
      title: "Charted Territory"
    }]
  },
  "arcgis-colored-pencil": {
    title: "Colored Pencil",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",
      title: "Colored Pencil"
    }]
  },
  "arcgis-nova": {
    title: "Nova",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",
      title: "Nova"
    }]
  },
  "arcgis-modern-antique": {
    title: "Modern Antique",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",
      title: "Modern Antique"
    }]
  },
  "arcgis-midcentury": {
    title: "Mid-Century",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",
      title: "Mid-Century"
    }]
  },
  "arcgis-newspaper": {
    title: "Newspaper",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",
      title: "Newspaper"
    }]
  },
  "arcgis-hillshade-light": {
    title: "Hillshade",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"
    }]
  },
  "arcgis-hillshade-dark": {
    title: "Hillshade (Dark)",
    baseMapLayers: [{
      layerType: "ArcGISTiledMapServiceLayer",
      showLegend: false,
      title: "World Hillshade (Dark)",
      url: "https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"
    }]
  },
  "arcgis-human-geography": {
    title: "Human Geography",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",
      title: "Human Geography Base"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",
      title: "Human Geography Detail",
      isReference: true
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",
      title: "Human Geography Label",
      isReference: true
    }]
  },
  "arcgis-human-geography-dark": {
    title: "Human Geography (Dark)",
    baseMapLayers: [{
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",
      title: "Human Geography Dark Base"
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",
      title: "Human Geography Dark Detail",
      isReference: true
    }, {
      layerType: "VectorTileLayer",
      styleUrl: "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",
      title: "Human Geography Dark Label",
      isReference: true
    }]
  }
};

// ../../../node_modules/@arcgis/core/support/BasemapStyle.js
var p = /* @__PURE__ */ new Set(["ar", "bs", "ca", "hr", "cs", "da", "nl", "en", "et", "fi", "fr", "de", "el", "he", "hu", "id", "it", "ja", "ko", "lv", "lt", "nb", "pl", "ro", "ru", "sr", "es", "sv", "th", "tr", "uk", "vi"]);
var c2 = class extends S {
  constructor(r2) {
    super(r2), this.id = null, this.language = null, this.places = null, this.serviceUrl = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/webmaps", this.worldview = null;
  }
  getLanguageParamValue() {
    if (this.language) return this.language;
    const r2 = c().toLowerCase();
    switch (r2) {
      case "pt-br":
        return "pt-BR";
      case "pt-pt":
        return "pt-PT";
      case "zh-cn":
        return "zh-CN";
      case "zh-hk":
        return "zh-HK";
      case "zh-tw":
        return "zh-TW";
    }
    const e2 = a3(r2);
    return "pt" === e2 ? "pt-BR" : e2 && p.has(e2) ? e2 : "global";
  }
};
e([y2()], c2.prototype, "id", void 0), e([y2()], c2.prototype, "language", void 0), e([y2()], c2.prototype, "places", void 0), e([y2()], c2.prototype, "serviceUrl", void 0), e([y2()], c2.prototype, "worldview", void 0), c2 = e([a2("esri.support.BasemapStyle")], c2);
var i = c2;

// ../../../node_modules/@arcgis/core/Basemap.js
var _;
var v = 0;
var x = _ = class extends u2(m) {
  constructor(e2) {
    super(e2), this.id = null, this.portalItem = null, this.spatialReference = null, this.style = null, this.thumbnailUrl = null, this.title = "Basemap", this.id = Date.now().toString(16) + "-basemap-" + v++, this.baseLayers = new V(), this.referenceLayers = new V();
    const r2 = (e3) => {
      e3.parent && e3.parent !== this && "remove" in e3.parent && e3.parent.remove(e3), e3.parent = this, "elevation" === e3.type && n.getLogger(this).error(`Layer '${e3.title}, id:${e3.id}' of type '${e3.type}' is not supported as a basemap layer and will therefore be ignored.`);
    }, s3 = (e3) => {
      e3.parent = null;
    };
    this.addHandles([this.baseLayers.on("after-add", (e3) => r2(e3.item)), this.referenceLayers.on("after-add", (e3) => r2(e3.item)), this.baseLayers.on("after-remove", (e3) => s3(e3.item)), this.referenceLayers.on("after-remove", (e3) => s3(e3.item))]);
  }
  initialize() {
    this.when().catch((e2) => {
      n.getLogger(this).error("#load()", `Failed to load basemap (title: '${this.title}', id: '${this.id}')`, e2);
    }), this.resourceInfo && this.read(this.resourceInfo.data, this.resourceInfo.context);
  }
  destroy() {
    const e2 = this.baseLayers.toArray();
    for (const t2 of e2) t2.destroy();
    const r2 = this.referenceLayers.toArray();
    for (const t2 of r2) t2.destroy();
    this.baseLayers.destroy(), this.referenceLayers.destroy(), this.portalItem = u(this.portalItem);
  }
  normalizeCtorArgs(e2) {
    return e2 && "resourceInfo" in e2 && (this._set("resourceInfo", e2.resourceInfo), delete (e2 = __spreadValues({}, e2)).resourceInfo), e2;
  }
  set baseLayers(e2) {
    this._set("baseLayers", n3(e2, this._get("baseLayers")));
  }
  _writeBaseLayers(e2, r2, t2) {
    const s3 = [];
    e2 ? (t2 = __spreadProps(__spreadValues({}, t2), {
      layerContainerType: "basemap"
    }), this.baseLayers.forEach((e3) => {
      const r3 = f2(e3, t2.webmap ? t2.webmap.getLayerJSONFromResourceInfo(e3) : null, t2);
      null != r3 && s3.push(r3);
    }), this.referenceLayers.forEach((e3) => {
      const r3 = f2(e3, t2.webmap ? t2.webmap.getLayerJSONFromResourceInfo(e3) : null, t2);
      null != r3 && ("scene" !== e3.type && (r3.isReference = true), s3.push(r3));
    }), r2.baseMapLayers = s3) : r2.baseMapLayers = s3;
  }
  set referenceLayers(e2) {
    this._set("referenceLayers", n3(e2, this._get("referenceLayers")));
  }
  writeTitle(e2, r2) {
    r2.title = e2 || "Basemap";
  }
  load(e2) {
    return this.addResolvingPromise(this._loadFromSource(e2)), Promise.resolve(this);
  }
  loadAll() {
    return t(this, (e2) => {
      e2(this.baseLayers, this.referenceLayers);
    });
  }
  clone() {
    const e2 = {
      id: this.id,
      title: this.title,
      portalItem: this.portalItem,
      baseLayers: this.baseLayers.map((e3) => y(e3) ? e3.clone() : e3),
      referenceLayers: this.referenceLayers.map((e3) => y(e3) ? e3.clone() : e3)
    };
    return this.loaded && (e2.loadStatus = "loaded"), new _({
      resourceInfo: this.resourceInfo
    }).set(e2);
  }
  read(e2, r2) {
    this.resourceInfo || this._set("resourceInfo", {
      data: e2,
      context: r2
    }), super.read(e2, r2);
  }
  write(e2, r2) {
    return e2 = e2 || {}, r2?.origin || (r2 = __spreadValues({
      origin: "web-map"
    }, r2)), super.write(e2, r2), !this.loaded && this.resourceInfo?.data.baseMapLayers && (e2.baseMapLayers = this.resourceInfo.data.baseMapLayers.map((e3) => {
      const r3 = a(e3);
      return r3.url && pt(r3.url) && (r3.url = `https:${r3.url}`), r3.templateUrl && pt(r3.templateUrl) && (r3.templateUrl = `https:${r3.templateUrl}`), r3;
    })), e2;
  }
  _loadFromSource(e2) {
    return __async(this, null, function* () {
      const {
        resourceInfo: r2,
        portalItem: t2,
        style: s3
      } = this;
      s(e2);
      const a5 = [];
      if (r2) {
        const t3 = r2.context ? r2.context.url : null;
        if (a5.push(this._loadLayersFromJSON(r2.data, t3, e2)), r2.data.id && !r2.data.title) {
          const e3 = r2.data.id;
          a5.push(a4(e3).then((e4) => {
            e4 && this.read({
              title: e4
            }, r2.context);
          }));
        }
      } else t2 ? a5.push(this._loadFromItem(t2, e2)) : s3 && a5.push(this._loadFromStylesService(s3, e2));
      yield Promise.all(a5);
    });
  }
  _loadLayersFromJSON(e2, r2, t2) {
    return __async(this, null, function* () {
      const s3 = this.resourceInfo?.context, a5 = this.portalItem?.portal || s3?.portal || null, o = U2[s3?.origin || ""] ?? "web-map", {
        populateOperationalLayers: i2
      } = yield import("./layersCreator-Y3WHDGYL.js"), n4 = [];
      if (s(t2), e2.baseMapLayers && Array.isArray(e2.baseMapLayers)) {
        const t3 = {
          context: __spreadProps(__spreadValues({}, s3), {
            origin: o,
            url: r2,
            portal: a5,
            layerContainerType: "basemap"
          }),
          defaultLayerType: "DefaultTileLayer"
        }, l = (e3) => "web-scene" === o && "ArcGISSceneServiceLayer" === e3.layerType || e3.isReference, p2 = i2(this.baseLayers, e2.baseMapLayers.filter((e3) => !l(e3)), t3);
        n4.push(p2);
        const c3 = i2(this.referenceLayers, e2.baseMapLayers.filter(l), t3);
        n4.push(c3);
      }
      yield Promise.allSettled(n4);
    });
  }
  _loadFromItem(e2, r2) {
    return __async(this, null, function* () {
      const t2 = yield e2.load(r2), s3 = yield t2.fetchData("json", r2), a5 = I(e2.itemUrl ?? "");
      return this._set("resourceInfo", {
        data: s3.baseMap ?? {},
        context: {
          origin: M[e2.type || ""] ?? "web-map",
          portal: e2.portal || C.getDefault(),
          url: a5
        }
      }), this.read(this.resourceInfo.data, this.resourceInfo.context), this.read({
        spatialReference: s3.spatialReference
      }, this.resourceInfo.context), this.read({
        title: e2.title,
        thumbnailUrl: e2.thumbnailUrl
      }, {
        origin: "portal-item",
        portal: e2.portal || C.getDefault(),
        url: a5
      }), this._loadLayersFromJSON(this.resourceInfo.data, a5, r2);
    });
  }
  _loadFromStylesService(e2, t2) {
    return __async(this, null, function* () {
      const s3 = `${e2.serviceUrl}/${e2.id}`, a5 = (yield U(s3, {
        query: {
          language: e2.getLanguageParamValue(),
          places: e2.places,
          worldview: e2.worldview
        },
        signal: t2?.signal
      })).data, o = I(s3);
      return this._set("resourceInfo", {
        data: a5.baseMap ?? {},
        context: {
          origin: "web-map",
          url: o
        }
      }), this.read(this.resourceInfo.data, this.resourceInfo.context), this.read({
        spatialReference: a5.spatialReference
      }, this.resourceInfo.context), this._loadLayersFromJSON(this.resourceInfo.data, o, t2);
    });
  }
  static fromId(e2) {
    const r2 = s2[e2];
    return r2 ? r2.itemId ? new _({
      portalItem: {
        id: r2.itemId,
        portal: {
          url: "https://www.arcgis.com"
        }
      }
    }) : _.fromJSON(r2, {
      origin: r2.is3d ? "web-scene" : "web-map"
    }) : null;
  }
};
e([y2({
  json: {
    write: {
      ignoreOrigin: true,
      target: "baseMapLayers",
      writer(e2, r2, t2, s3) {
        this._writeBaseLayers(e2, r2, s3);
      }
    },
    origins: {
      "web-scene": {
        write: {
          ignoreOrigin: true,
          target: {
            baseMapLayers: {
              type: V
            }
          },
          writer(e2, r2, t2, s3) {
            this._writeBaseLayers(e2, r2, s3);
          }
        }
      }
    }
  }
})], x.prototype, "baseLayers", null), e([y2({
  type: String,
  json: {
    origins: {
      "web-scene": {
        write: true
      }
    }
  }
})], x.prototype, "id", void 0), e([y2({
  type: S2
})], x.prototype, "portalItem", void 0), e([y2()], x.prototype, "referenceLayers", null), e([y2({
  readOnly: true
})], x.prototype, "resourceInfo", void 0), e([y2({
  type: f
})], x.prototype, "spatialReference", void 0), e([y2({
  type: i
})], x.prototype, "style", void 0), e([y2()], x.prototype, "thumbnailUrl", void 0), e([y2({
  type: String,
  json: {
    origins: {
      "web-scene": {
        write: {
          isRequired: true
        }
      }
    }
  }
})], x.prototype, "title", void 0), e([r("title")], x.prototype, "writeTitle", null), x = _ = e([a2("esri.Basemap")], x);
var M = {
  "Web Scene": "web-scene",
  "Web Map": "web-map",
  "Link Chart": "link-chart"
};
var U2 = {
  "web-scene": "web-scene",
  "web-map": "web-map",
  "link-chart": "link-chart"
};
var F = x;

export {
  s2 as s,
  F
};
//# sourceMappingURL=chunk-5JA2JHV3.js.map
