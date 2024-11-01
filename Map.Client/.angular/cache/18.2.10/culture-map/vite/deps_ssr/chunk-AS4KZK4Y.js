import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-6EIBUVMG.js";
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

// ../../../node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var p = class extends f {
  constructor() {
    super(...arguments), this.nodesPerPage = null, this.rootIndex = 0, this.lodSelectionMetricType = null;
  }
};
e([y({
  type: Number
})], p.prototype, "nodesPerPage", void 0), e([y({
  type: Number
})], p.prototype, "rootIndex", void 0), e([y({
  type: String
})], p.prototype, "lodSelectionMetricType", void 0), p = e([a("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")], p);
var i = class extends f {
  constructor() {
    super(...arguments), this.factor = 1;
  }
};
e([y({
  type: Number,
  json: {
    read: {
      source: "textureSetDefinitionId"
    }
  }
})], i.prototype, "id", void 0), e([y({
  type: Number
})], i.prototype, "factor", void 0), i = e([a("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")], i);
var n = class extends f {
  constructor() {
    super(...arguments), this.baseColorFactor = [1, 1, 1, 1], this.baseColorTexture = null, this.metallicRoughnessTexture = null, this.metallicFactor = 1, this.roughnessFactor = 1;
  }
};
e([y({
  type: [Number]
})], n.prototype, "baseColorFactor", void 0), e([y({
  type: i
})], n.prototype, "baseColorTexture", void 0), e([y({
  type: i
})], n.prototype, "metallicRoughnessTexture", void 0), e([y({
  type: Number
})], n.prototype, "metallicFactor", void 0), e([y({
  type: Number
})], n.prototype, "roughnessFactor", void 0), n = e([a("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")], n);
var a2 = class extends f {
  constructor() {
    super(...arguments), this.alphaMode = "opaque", this.alphaCutoff = 0.25, this.doubleSided = false, this.cullFace = "none", this.normalTexture = null, this.occlusionTexture = null, this.emissiveTexture = null, this.emissiveFactor = null, this.pbrMetallicRoughness = null;
  }
};
e([o({
  opaque: "opaque",
  mask: "mask",
  blend: "blend"
})], a2.prototype, "alphaMode", void 0), e([y({
  type: Number
})], a2.prototype, "alphaCutoff", void 0), e([y({
  type: Boolean
})], a2.prototype, "doubleSided", void 0), e([o({
  none: "none",
  back: "back",
  front: "front"
})], a2.prototype, "cullFace", void 0), e([y({
  type: i
})], a2.prototype, "normalTexture", void 0), e([y({
  type: i
})], a2.prototype, "occlusionTexture", void 0), e([y({
  type: i
})], a2.prototype, "emissiveTexture", void 0), e([y({
  type: [Number]
})], a2.prototype, "emissiveFactor", void 0), e([y({
  type: n
})], a2.prototype, "pbrMetallicRoughness", void 0), a2 = e([a("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")], a2);
var l = class extends f {
};
e([y({
  type: String,
  json: {
    read: {
      source: ["name", "index"],
      reader: (e2, t) => null != e2 ? e2 : `${t.index}`
    }
  }
})], l.prototype, "name", void 0), e([o({
  jpg: "jpg",
  png: "png",
  dds: "dds",
  "ktx-etc2": "ktx-etc2",
  ktx2: "ktx2",
  basis: "basis"
})], l.prototype, "format", void 0), l = e([a("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")], l);
var y2 = class extends f {
  constructor() {
    super(...arguments), this.atlas = false;
  }
};
e([y({
  type: [l]
})], y2.prototype, "formats", void 0), e([y({
  type: Boolean
})], y2.prototype, "atlas", void 0), y2 = e([a("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")], y2);
var u = class extends f {
};
e([o({
  Float32: "Float32",
  UInt64: "UInt64",
  UInt32: "UInt32",
  UInt16: "UInt16",
  UInt8: "UInt8"
})], u.prototype, "type", void 0), e([y({
  type: Number
})], u.prototype, "component", void 0), u = e([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")], u);
var d = class extends f {
};
e([o({
  draco: "draco"
})], d.prototype, "encoding", void 0), e([y({
  type: [String]
})], d.prototype, "attributes", void 0), d = e([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")], d);
var c = class extends f {
  constructor() {
    super(...arguments), this.offset = 0;
  }
};
e([y({
  type: Number
})], c.prototype, "offset", void 0), e([y({
  type: u
})], c.prototype, "position", void 0), e([y({
  type: u
})], c.prototype, "normal", void 0), e([y({
  type: u
})], c.prototype, "uv0", void 0), e([y({
  type: u
})], c.prototype, "color", void 0), e([y({
  type: u
})], c.prototype, "uvRegion", void 0), e([y({
  type: u
})], c.prototype, "featureId", void 0), e([y({
  type: u
})], c.prototype, "faceRange", void 0), e([y({
  type: d
})], c.prototype, "compressedAttributes", void 0), c = e([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")], c);
var m = class extends f {
};
e([o({
  triangle: "triangle"
})], m.prototype, "topology", void 0), e([y()], m.prototype, "geometryBuffers", void 0), m = e([a("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")], m);

export {
  p,
  a2 as a,
  y2 as y,
  m
};
//# sourceMappingURL=chunk-AS4KZK4Y.js.map
