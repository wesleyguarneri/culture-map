import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m2 as m
} from "./chunk-MRPCXIVS.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
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

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphObject.js
var t = class extends f {
  constructor(r) {
    super(r), this.properties = null;
  }
};
e([y({
  json: {
    write: true
  }
})], t.prototype, "properties", void 0), t = e([a("esri.rest.knowledgeGraph.GraphObject")], t);
var p = t;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/GraphNamedObject.js
var s = class extends p {
  constructor(r) {
    super(r), this.typeName = null, this.id = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], s.prototype, "typeName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s.prototype, "id", void 0), s = e([a("esri.rest.knowledgeGraph.GraphNamedObject")], s);
var p2 = s;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/Entity.js
var p3 = class extends p2 {
  constructor(o) {
    super(o), this.layoutGeometry = null;
  }
};
e([y({
  type: _,
  json: {
    write: true
  }
})], p3.prototype, "layoutGeometry", void 0), p3 = e([a("esri.rest.knowledgeGraph.Entity")], p3);
var m2 = p3;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/Relationship.js
var i = class extends p2 {
  constructor(o) {
    super(o), this.originId = null, this.destinationId = null, this.layoutGeometry = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "originId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "destinationId", void 0), e([y({
  type: m,
  json: {
    write: true
  }
})], i.prototype, "layoutGeometry", void 0), i = e([a("esri.rest.knowledgeGraph.Relationship")], i);
var p4 = i;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/ObjectValue.js
var e2 = class extends p {
  constructor(r) {
    super(r);
  }
};
e2 = e([a("esri.rest.knowledgeGraph.ObjectValue")], e2);
var t2 = e2;

// ../../../node_modules/@arcgis/core/rest/knowledgeGraph/Path.js
var p5 = class extends f {
  constructor(r) {
    super(r), this.path = null;
  }
};
e([y({
  type: [p],
  json: {
    write: true
  }
})], p5.prototype, "path", void 0), p5 = e([a("esri.rest.knowledgeGraph.Path")], p5);
var c = p5;

export {
  m2 as m,
  p4 as p,
  t2 as t,
  c
};
//# sourceMappingURL=chunk-HP5U6UA4.js.map
