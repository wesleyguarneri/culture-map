import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  n
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
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/layers/support/Relationship.js
var n2 = new n({
  esriRelCardinalityOneToOne: "one-to-one",
  esriRelCardinalityOneToMany: "one-to-many",
  esriRelCardinalityManyToMany: "many-to-many"
});
var a2 = new n({
  esriRelRoleOrigin: "origin",
  esriRelRoleDestination: "destination"
});
var l = class extends i(f) {
  constructor(e2) {
    super(e2), this.cardinality = null, this.composite = null, this.id = null, this.keyField = null, this.keyFieldInRelationshipTable = null, this.name = null, this.relatedTableId = null, this.relationshipTableId = null, this.role = null;
  }
};
e([y({
  json: {
    read: n2.read,
    write: n2.write
  }
})], l.prototype, "cardinality", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "composite", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "id", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "keyField", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "keyFieldInRelationshipTable", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "name", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "relatedTableId", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], l.prototype, "relationshipTableId", void 0), e([y({
  json: {
    read: a2.read,
    write: a2.write
  }
})], l.prototype, "role", void 0), l = e([a("esri.layers.support.Relationship")], l);
var p = l;

export {
  p
};
//# sourceMappingURL=chunk-6NY22YWY.js.map
