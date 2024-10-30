import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y as y2
} from "./chunk-VZ37C3ID.js";
import {
  o as o3
} from "./chunk-6EIBUVMG.js";
import {
  o as o2
} from "./chunk-HGHPYGKP.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  i
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  T,
  a3 as a,
  b,
  u3 as u
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/layers/support/source/MapLayerSource.js
var a2;
var c = a2 = class extends f {
  constructor(r) {
    super(r), this.type = "map-layer";
  }
  clone() {
    const {
      mapLayerId: r,
      gdbVersion: o4
    } = this;
    return new a2({
      mapLayerId: r,
      gdbVersion: o4
    });
  }
};
e([o3({
  mapLayer: "map-layer"
})], c.prototype, "type", void 0), e([y({
  type: N,
  json: {
    write: true
  }
})], c.prototype, "mapLayerId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c.prototype, "gdbVersion", void 0), c = a2 = e([a("esri.layers.support.source.MapLayerSource")], c);

// ../../../node_modules/@arcgis/core/layers/support/source/QueryTableDataSource.js
var c2;
var a3 = c2 = class extends f {
  constructor(e2) {
    super(e2), this.type = "query-table";
  }
  clone() {
    const {
      workspaceId: e2,
      query: r,
      oidFields: o4,
      spatialReference: t,
      geometryType: p3
    } = this, s2 = {
      workspaceId: e2,
      query: r,
      oidFields: o4,
      spatialReference: t?.clone() ?? void 0,
      geometryType: p3
    };
    return new c2(s2);
  }
};
e([o3({
  queryTable: "query-table"
})], a3.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a3.prototype, "workspaceId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a3.prototype, "query", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a3.prototype, "oidFields", void 0), e([y({
  type: f2,
  json: {
    write: true
  }
})], a3.prototype, "spatialReference", void 0), e([o3(o2)], a3.prototype, "geometryType", void 0), a3 = c2 = e([a("esri.layers.support.source.QueryTableDataSource")], a3);

// ../../../node_modules/@arcgis/core/layers/support/source/RasterDataSource.js
var p;
var a4 = p = class extends f {
  constructor(r) {
    super(r), this.type = "raster";
  }
  clone() {
    const {
      workspaceId: r,
      dataSourceName: o4
    } = this;
    return new p({
      workspaceId: r,
      dataSourceName: o4
    });
  }
};
e([o3({
  raster: "raster"
})], a4.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "dataSourceName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a4.prototype, "workspaceId", void 0), a4 = p = e([a("esri.layers.support.source.RasterDataSource")], a4);

// ../../../node_modules/@arcgis/core/layers/support/source/TableDataSource.js
var p2;
var a5 = p2 = class extends f {
  constructor(o4) {
    super(o4), this.type = "table";
  }
  clone() {
    const {
      workspaceId: o4,
      gdbVersion: r,
      dataSourceName: e2
    } = this;
    return new p2({
      workspaceId: o4,
      gdbVersion: r,
      dataSourceName: e2
    });
  }
};
e([o3({
  table: "table"
})], a5.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a5.prototype, "workspaceId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a5.prototype, "gdbVersion", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], a5.prototype, "dataSourceName", void 0), a5 = p2 = e([a("esri.layers.support.source.TableDataSource")], a5);

// ../../../node_modules/@arcgis/core/layers/support/source/DataLayerSource.js
var d;
var m;
var T2 = i()({
  esriLeftInnerJoin: "left-inner-join",
  esriLeftOuterJoin: "left-outer-join"
});
var j = d = class extends f {
  constructor(e2) {
    super(e2), this.type = "join-table";
  }
  readLeftTableSource(e2, r, o4) {
    return g()(e2, r, o4);
  }
  castLeftTableSource(e2) {
    return T(L(), e2);
  }
  readRightTableSource(e2, r, o4) {
    return g()(e2, r, o4);
  }
  castRightTableSource(e2) {
    return T(L(), e2);
  }
  clone() {
    const {
      leftTableKey: e2,
      rightTableKey: r,
      leftTableSource: o4,
      rightTableSource: t,
      joinType: a6
    } = this, s2 = {
      leftTableKey: e2,
      rightTableKey: r,
      leftTableSource: o4?.clone() ?? void 0,
      rightTableSource: t?.clone() ?? void 0,
      joinType: a6
    };
    return new d(s2);
  }
};
e([o3({
  joinTable: "join-table"
})], j.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], j.prototype, "leftTableKey", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], j.prototype, "rightTableKey", void 0), e([y({
  json: {
    write: true
  }
})], j.prototype, "leftTableSource", void 0), e([o("leftTableSource")], j.prototype, "readLeftTableSource", null), e([s("leftTableSource")], j.prototype, "castLeftTableSource", null), e([y({
  json: {
    write: true
  }
})], j.prototype, "rightTableSource", void 0), e([o("rightTableSource")], j.prototype, "readRightTableSource", null), e([s("rightTableSource")], j.prototype, "castRightTableSource", null), e([o3(T2)], j.prototype, "joinType", void 0), j = d = e([a("esri.layers.support.source.JoinTableDataSource")], j);
var h = null;
function g() {
  return h || (h = u({
    types: L()
  })), h;
}
var v = null;
function L() {
  return v || (v = {
    key: "type",
    base: null,
    typeMap: {
      "data-layer": K,
      "map-layer": c
    }
  }), v;
}
var w = {
  key: "type",
  base: null,
  typeMap: {
    "join-table": j,
    "query-table": a3,
    raster: a4,
    table: a5
  }
};
var K = m = class extends f {
  constructor(e2) {
    super(e2), this.type = "data-layer";
  }
  clone() {
    const {
      fields: e2,
      dataSource: r
    } = this;
    return new m({
      fields: e2,
      dataSource: r
    });
  }
};
e([o3({
  dataLayer: "data-layer"
})], K.prototype, "type", void 0), e([y({
  type: [y2],
  json: {
    write: true
  }
})], K.prototype, "fields", void 0), e([y({
  types: w,
  json: {
    write: true
  }
})], K.prototype, "dataSource", void 0), K = m = e([a("esri.layers.support.source.DataLayerSource")], K), K.from = b(K);

export {
  c,
  K
};
//# sourceMappingURL=chunk-VQNXE43R.js.map
