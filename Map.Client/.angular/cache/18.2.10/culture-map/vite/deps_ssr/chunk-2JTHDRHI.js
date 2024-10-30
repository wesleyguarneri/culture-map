import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2
} from "./chunk-IIFJBCK7.js";
import {
  I,
  Z,
  d,
  k,
  v as v2
} from "./chunk-6TDXQOP5.js";
import {
  l
} from "./chunk-RCTGQZER.js";
import {
  t as t2
} from "./chunk-A2K6JP2G.js";
import {
  t as t3
} from "./chunk-FSGJEX7B.js";
import {
  D
} from "./chunk-233INU7Q.js";
import {
  N as N2,
  f as f2
} from "./chunk-REOQMQ44.js";
import {
  Ae,
  B2 as B,
  Be,
  E,
  E2,
  Ee,
  Fe,
  G2 as G,
  H,
  He,
  K,
  Ke,
  L,
  Me,
  Ne,
  O2 as O,
  P,
  Q,
  U,
  Ue,
  V,
  Ve,
  W,
  X,
  Y,
  Ze,
  _ as _2,
  a as a2,
  ae,
  ce,
  ee,
  ge,
  h as h2,
  he,
  i2 as i,
  ie,
  me,
  pe,
  q,
  qe,
  r,
  se,
  te,
  v2 as v,
  z
} from "./chunk-M633ZBOT.js";
import {
  t
} from "./chunk-GBPPBJPA.js";
import {
  p
} from "./chunk-PDBJ6G5O.js";
import {
  y
} from "./chunk-4DSGTDZJ.js";
import {
  j,
  m2,
  u
} from "./chunk-MRPCXIVS.js";
import {
  a
} from "./chunk-YTKVV2Y3.js";
import {
  n as n3
} from "./chunk-EGBDRLCX.js";
import {
  h,
  m,
  n as n2,
  n2 as n5
} from "./chunk-ABIG6PT5.js";
import {
  DateTime
} from "./chunk-N34BRXVM.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _,
  n as n4
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  c
} from "./chunk-AYL3HQHD.js";
import {
  N
} from "./chunk-XLEC46FY.js";
import {
  S
} from "./chunk-AIZ3T7E3.js";
import {
  n
} from "./chunk-6WGE3IUL.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade/ArcadeModuleLoader.js
var s = class {
  constructor(s3, t5) {
    this._moduleSingletons = s3, this._syntaxModules = t5;
  }
  loadLibrary(s3) {
    if (null == this._syntaxModules) return null;
    const t5 = this._syntaxModules[s3.toLowerCase()];
    return t5 ? {
      syntax: t5.script,
      uri: t5.uri
    } : null;
  }
};

// ../../../node_modules/@arcgis/core/arcade/containerUtils.js
var h3 = 0;
function d2(s3, c3, i4, l4, u3 = 1) {
  let o2;
  switch (c3 = c3.toLowerCase()) {
    case "hasz": {
      const e2 = s3.hasZ;
      return void 0 !== e2 && e2;
    }
    case "hasm": {
      const e2 = s3.hasM;
      return void 0 !== e2 && e2;
    }
    case "spatialreference": {
      let a5 = s3.spatialReference._arcadeCacheId;
      if (void 0 === a5) {
        let e2 = true;
        Object.freeze && Object.isFrozen(s3.spatialReference) && (e2 = false), e2 && (h3++, s3.spatialReference._arcadeCacheId = h3, a5 = h3);
      }
      const r3 = new N2({
        wkt: s3.spatialReference.wkt,
        wkid: s3.spatialReference.wkid
      });
      return void 0 !== a5 && (r3._arcadeCacheId = "SPREF" + a5.toString()), r3;
    }
  }
  switch (s3.type) {
    case "extent":
      switch (c3) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const e2 = s3[c3];
          return void 0 !== e2 ? e2 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (c3) {
        case "rings":
          o2 = s3.cache._arcadeCacheId, void 0 === o2 && (h3++, o2 = h3, s3.cache._arcadeCacheId = o2);
          return new h2(s3.rings, s3.spatialReference, true === s3.hasZ, true === s3.hasM, o2);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (c3) {
        case "x":
        case "y":
        case "z":
        case "m":
          return s3[c3] ?? null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (c3) {
        case "paths":
          o2 = s3.cache._arcadeCacheId, void 0 === o2 && (h3++, o2 = h3, s3.cache._arcadeCacheId = o2);
          return new h2(s3.paths, s3.spatialReference, true === s3.hasZ, true === s3.hasM, o2);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (c3) {
        case "points":
          o2 = s3.cache._arcadeCacheId, void 0 === o2 && (h3++, o2 = h3, s3.cache._arcadeCacheId = o2);
          return new i(s3.points, s3.spatialReference, true === s3.hasZ, true === s3.hasM, o2, 1);
        case "type":
          return "Multipoint";
      }
  }
  if (1 === u3) throw new a2(i4, r.InvalidIdentifier, l4);
  return 2 === u3 ? {
    keystate: "notfound"
  } : null;
}
function p2(e2, a5) {
  let r3, t5 = e2;
  if (null == t5) return null;
  if (U(a5)) r3 = a5;
  else if (Q(a5)) r3 = a5.toArray();
  else {
    if (null == a5) return null;
    r3 = [a5];
  }
  for (const n7 of r3) {
    if (H(t5)) {
      if (false === G(n7)) return null;
      if (!t5.hasField(n7)) return null;
      t5 = t5.field(n7);
    } else if (K(t5)) {
      if (false === G(n7)) return null;
      if (!t5.hasField(n7)) return null;
      t5 = t5.field(n7);
    } else if (q(t5)) {
      if (false === G(n7)) return null;
      t5 = d2(t5, n7, null, null, 0);
    } else if (U(t5)) {
      if (false === E2(n7)) return null;
      t5 = n7 >= 0 ? t5[n7] : t5[t5.length + n7];
    } else {
      if (!Q(t5)) return null;
      if (false === E2(n7)) return null;
      t5 = n7 >= 0 ? t5.get(n7) : t5.get(t5.length() + n7);
    }
    if (null == t5) return null;
  }
  return t5;
}

// ../../../node_modules/@arcgis/core/arcade/treeAnalysis.js
var e = {
  all: {
    min: 2,
    max: 2
  },
  time: {
    min: 0,
    max: 4
  },
  dateonly: {
    min: 0,
    max: 3
  },
  getenvironment: {
    min: 0,
    max: 0
  },
  none: {
    min: 2,
    max: 2
  },
  any: {
    min: 2,
    max: 2
  },
  reduce: {
    min: 2,
    max: 3
  },
  map: {
    min: 2,
    max: 2
  },
  filter: {
    min: 2,
    max: 2
  },
  fromcodepoint: {
    min: 1,
    max: -1
  },
  fromcharcode: {
    min: 1,
    max: -1
  },
  tocodepoint: {
    min: 1,
    max: 2
  },
  tocharcode: {
    min: 1,
    max: 2
  },
  concatenate: {
    min: 0,
    max: -1
  },
  expects: {
    min: 1,
    max: -1
  },
  getfeatureset: {
    min: 1,
    max: 2
  },
  week: {
    min: 1,
    max: 2
  },
  fromjson: {
    min: 1,
    max: 1
  },
  length3d: {
    min: 1,
    max: 2
  },
  tohex: {
    min: 1,
    max: 1
  },
  hash: {
    min: 1,
    max: 1
  },
  timezone: {
    min: 1,
    max: 1
  },
  timezoneoffset: {
    min: 1,
    max: 1
  },
  changetimezone: {
    min: 2,
    max: 2
  },
  isoweek: {
    min: 1,
    max: 1
  },
  isoweekday: {
    min: 1,
    max: 1
  },
  hasvalue: {
    min: 2,
    max: 2
  },
  isomonth: {
    min: 1,
    max: 1
  },
  isoyear: {
    min: 1,
    max: 1
  },
  resize: {
    min: 2,
    max: 3
  },
  slice: {
    min: 0,
    max: -1
  },
  splice: {
    min: 0,
    max: -1
  },
  push: {
    min: 2,
    max: 2
  },
  pop: {
    min: 1,
    max: 1
  },
  includes: {
    min: 2,
    max: 2
  },
  array: {
    min: 0,
    max: 2
  },
  front: {
    min: 1,
    max: 1
  },
  back: {
    min: 1,
    max: 1
  },
  insert: {
    min: 3,
    max: 3
  },
  erase: {
    min: 2,
    max: 2
  },
  split: {
    min: 2,
    max: 4
  },
  guid: {
    min: 0,
    max: 1
  },
  standardizeguid: {
    min: 2,
    max: 2
  },
  today: {
    min: 0,
    max: 0
  },
  angle: {
    min: 2,
    max: 3
  },
  bearing: {
    min: 2,
    max: 3
  },
  urlencode: {
    min: 1,
    max: 1
  },
  now: {
    min: 0,
    max: 0
  },
  timestamp: {
    min: 0,
    max: 0
  },
  day: {
    min: 1,
    max: 1
  },
  month: {
    min: 1,
    max: 1
  },
  year: {
    min: 1,
    max: 1
  },
  hour: {
    min: 1,
    max: 1
  },
  second: {
    min: 1,
    max: 1
  },
  millisecond: {
    min: 1,
    max: 1
  },
  minute: {
    min: 1,
    max: 1
  },
  weekday: {
    min: 1,
    max: 1
  },
  toutc: {
    min: 1,
    max: 1
  },
  tolocal: {
    min: 1,
    max: 1
  },
  date: {
    min: 0,
    max: 8
  },
  datediff: {
    min: 2,
    max: 4
  },
  dateadd: {
    min: 2,
    max: 3
  },
  trim: {
    min: 1,
    max: 1
  },
  text: {
    min: 1,
    max: 2
  },
  left: {
    min: 2,
    max: 2
  },
  right: {
    min: 2,
    max: 2
  },
  mid: {
    min: 2,
    max: 3
  },
  upper: {
    min: 1,
    max: 1
  },
  proper: {
    min: 1,
    max: 2
  },
  lower: {
    min: 1,
    max: 1
  },
  find: {
    min: 2,
    max: 3
  },
  iif: {
    min: 3,
    max: 3
  },
  decode: {
    min: 2,
    max: -1
  },
  when: {
    min: 2,
    max: -1
  },
  defaultvalue: {
    min: 2,
    max: 3
  },
  isempty: {
    min: 1,
    max: 1
  },
  domaincode: {
    min: 2,
    max: 4
  },
  domainname: {
    min: 2,
    max: 4
  },
  polygon: {
    min: 1,
    max: 1
  },
  point: {
    min: 1,
    max: 1
  },
  polyline: {
    min: 1,
    max: 1
  },
  extent: {
    min: 1,
    max: 1
  },
  multipoint: {
    min: 1,
    max: 1
  },
  ringisclockwise: {
    min: 1,
    max: 1
  },
  geometry: {
    min: 1,
    max: 1
  },
  count: {
    min: 0,
    max: -1
  },
  number: {
    min: 1,
    max: 2
  },
  acos: {
    min: 1,
    max: 1
  },
  asin: {
    min: 1,
    max: 1
  },
  atan: {
    min: 1,
    max: 1
  },
  atan2: {
    min: 2,
    max: 2
  },
  ceil: {
    min: 1,
    max: 2
  },
  floor: {
    min: 1,
    max: 2
  },
  round: {
    min: 1,
    max: 2
  },
  cos: {
    min: 1,
    max: 1
  },
  exp: {
    min: 1,
    max: 1
  },
  log: {
    min: 1,
    max: 1
  },
  min: {
    min: 0,
    max: -1
  },
  constrain: {
    min: 3,
    max: 3
  },
  console: {
    min: 0,
    max: -1
  },
  max: {
    min: 0,
    max: -1
  },
  pow: {
    min: 2,
    max: 2
  },
  random: {
    min: 0,
    max: 0
  },
  sqrt: {
    min: 1,
    max: 1
  },
  sin: {
    min: 1,
    max: 1
  },
  tan: {
    min: 1,
    max: 1
  },
  abs: {
    min: 1,
    max: 1
  },
  isnan: {
    min: 1,
    max: 1
  },
  stdev: {
    min: 0,
    max: -1
  },
  average: {
    min: 0,
    max: -1
  },
  mean: {
    min: 0,
    max: -1
  },
  sum: {
    min: 0,
    max: -1
  },
  variance: {
    min: 0,
    max: -1
  },
  distinct: {
    min: 0,
    max: -1
  },
  first: {
    min: 1,
    max: 1
  },
  top: {
    min: 2,
    max: 2
  },
  boolean: {
    min: 1,
    max: 1
  },
  dictionary: {
    min: 0,
    max: -1
  },
  typeof: {
    min: 1,
    max: 1
  },
  reverse: {
    min: 1,
    max: 1
  },
  replace: {
    min: 3,
    max: 4
  },
  sort: {
    min: 1,
    max: 2
  },
  feature: {
    min: 1,
    max: -1
  },
  haskey: {
    min: 2,
    max: 2
  },
  indexof: {
    min: 2,
    max: 2
  },
  disjoint: {
    min: 2,
    max: 2
  },
  intersects: {
    min: 2,
    max: 2
  },
  touches: {
    min: 2,
    max: 2
  },
  crosses: {
    min: 2,
    max: 2
  },
  within: {
    min: 2,
    max: 2
  },
  contains: {
    min: 2,
    max: 2
  },
  overlaps: {
    min: 2,
    max: 2
  },
  equals: {
    min: 2,
    max: 2
  },
  relate: {
    min: 3,
    max: 3
  },
  intersection: {
    min: 2,
    max: 2
  },
  union: {
    min: 1,
    max: 2
  },
  difference: {
    min: 2,
    max: 2
  },
  symmetricdifference: {
    min: 2,
    max: 2
  },
  clip: {
    min: 2,
    max: 2
  },
  cut: {
    min: 2,
    max: 2
  },
  area: {
    min: 1,
    max: 2
  },
  areageodetic: {
    min: 1,
    max: 2
  },
  length: {
    min: 1,
    max: 2
  },
  lengthgeodetic: {
    min: 1,
    max: 2
  },
  distancegeodetic: {
    min: 2,
    max: 3
  },
  distance: {
    min: 2,
    max: 3
  },
  densify: {
    min: 2,
    max: 3
  },
  densifygeodetic: {
    min: 2,
    max: 3
  },
  generalize: {
    min: 2,
    max: 4
  },
  buffer: {
    min: 2,
    max: 3
  },
  buffergeodetic: {
    min: 2,
    max: 3
  },
  offset: {
    min: 2,
    max: 6
  },
  rotate: {
    min: 2,
    max: 3
  },
  issimple: {
    min: 1,
    max: 1
  },
  simplify: {
    min: 1,
    max: 1
  },
  convexhull: {
    min: 1,
    max: 1
  },
  centroid: {
    min: 1,
    max: 1
  },
  nearestcoordinate: {
    min: 2,
    max: 2
  },
  nearestvertex: {
    min: 2,
    max: 2
  },
  isselfintersecting: {
    min: 1,
    max: 1
  },
  multiparttosinglepart: {
    min: 1,
    max: 1
  },
  setgeometry: {
    min: 2,
    max: 2
  },
  portal: {
    min: 1,
    max: 1
  },
  getuser: {
    min: 0,
    max: 2
  },
  subtypes: {
    min: 1,
    max: 1
  },
  subtypecode: {
    min: 1,
    max: 1
  },
  subtypename: {
    min: 1,
    max: 1
  },
  domain: {
    min: 2,
    max: 3
  },
  convertdirection: {
    min: 3,
    max: 3
  },
  sqltimestamp: {
    min: 1,
    max: 3
  },
  schema: {
    min: 1,
    max: 1
  },
  measuretocoordinate: {
    min: 2,
    max: 2
  },
  distancetocoordinate: {
    min: 2,
    max: 2
  },
  pointtocoordinate: {
    min: 2,
    max: 2
  }
};
var n6 = {
  functionDefinitions: /* @__PURE__ */ new Map(),
  constantDefinitions: /* @__PURE__ */ new Map()
};
var a3 = {
  functionDefinitions: /* @__PURE__ */ new Map(),
  constantDefinitions: /* @__PURE__ */ new Map()
};
for (const b2 of ["pi", "infinity"]) a3.constantDefinitions.set(b2, {
  type: "constant"
}), n6.constantDefinitions.set(b2, {
  type: "constant"
});
a3.constantDefinitions.set("textformatting", {
  type: "namespace",
  key: "textformatting",
  members: [{
    key: "backwardslash",
    type: "constant"
  }, {
    key: "doublequote",
    type: "constant"
  }, {
    key: "forwardslash",
    type: "constant"
  }, {
    key: "tab",
    type: "constant"
  }, {
    key: "singlequote",
    type: "constant"
  }, {
    key: "newline",
    type: "constant"
  }]
}), n6.constantDefinitions.set("textformatting", {
  type: "namespace",
  key: "textformatting",
  members: [{
    key: "backwardslash",
    type: "constant"
  }, {
    key: "tab",
    type: "constant"
  }, {
    key: "singlequote",
    type: "constant"
  }, {
    key: "doublequote",
    type: "constant"
  }, {
    key: "forwardslash",
    type: "constant"
  }, {
    key: "newline",
    type: "constant"
  }]
});
for (const b2 in e) {
  const t5 = e[b2];
  a3.functionDefinitions.set(b2, {
    overloads: [{
      type: "function",
      parametersInfo: {
        min: t5.min,
        max: t5.max
      }
    }]
  }), n6.functionDefinitions.set(b2, {
    overloads: [{
      type: "function",
      parametersInfo: {
        min: t5.min,
        max: t5.max
      }
    }]
  });
}
var t4 = /* @__PURE__ */ new Set(["featureset", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "getfeatureset", "getuser", "attachments", "featuresetbyportalitem", "getfeaturesetinfo", "filterbysubtypecode", "knowledgegraphbyportalitem", "querygraph"]);
var i3 = /* @__PURE__ */ new Set(["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "nearestvertex", "nearestcoordinate", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "length3d", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "convexhull", "simplify", "multiparttosinglepart", "pointtocoordinate", "distancetocoordinate", "measuretocoordinate"]);
function m3(e2) {
  return "string" == typeof e2 || e2 instanceof String;
}
function o(e2, t5) {
  const i4 = "sync" === t5 ? n6 : a3;
  i4.functionDefinitions.has(e2.name.toLowerCase()) ? i4.functionDefinitions.get(e2.name.toLowerCase())?.overloads.push({
    type: "function",
    parametersInfo: {
      min: e2.min,
      max: e2.max
    }
  }) : i4.functionDefinitions.set(e2.name.toLowerCase(), {
    overloads: [{
      type: "function",
      parametersInfo: {
        min: e2.min,
        max: e2.max
      }
    }]
  });
}
function s2(e2, n7) {
  if (e2) for (const a5 of e2) r2(a5, n7);
}
function r2(e2, n7) {
  if (e2 && false !== n7(e2)) switch (e2.type) {
    case "ImportDeclaration":
      s2(e2.specifiers, n7), r2(e2.source, n7);
      break;
    case "ExportNamedDeclaration":
      r2(e2.declaration, n7);
      break;
    case "ArrayExpression":
      s2(e2.elements, n7);
      break;
    case "AssignmentExpression":
    case "BinaryExpression":
    case "LogicalExpression":
      r2(e2.left, n7), r2(e2.right, n7);
      break;
    case "BlockStatement":
    case "Program":
      s2(e2.body, n7);
      break;
    case "BreakStatement":
    case "ContinueStatement":
    case "EmptyStatement":
    case "Identifier":
    case "Literal":
      break;
    case "CallExpression":
      r2(e2.callee, n7), s2(e2.arguments, n7);
      break;
    case "ExpressionStatement":
      r2(e2.expression, n7);
      break;
    case "ForInStatement":
      r2(e2.left, n7), r2(e2.right, n7), r2(e2.body, n7);
      break;
    case "ForStatement":
      r2(e2.init, n7), r2(e2.test, n7), r2(e2.update, n7), r2(e2.body, n7);
      break;
    case "WhileStatement":
      r2(e2.test, n7), r2(e2.body, n7);
      break;
    case "FunctionDeclaration":
      r2(e2.id, n7), s2(e2.params, n7), r2(e2.body, n7);
      break;
    case "IfStatement":
      r2(e2.test, n7), r2(e2.consequent, n7), r2(e2.alternate, n7);
      break;
    case "MemberExpression":
      r2(e2.object, n7), r2(e2.property, n7);
      break;
    case "ObjectExpression":
      s2(e2.properties, n7);
      break;
    case "Property":
      r2(e2.key, n7), r2(e2.value, n7);
      break;
    case "ReturnStatement":
    case "UnaryExpression":
    case "UpdateExpression":
      r2(e2.argument, n7);
      break;
    case "VariableDeclaration":
      s2(e2.declarations, n7);
      break;
    case "VariableDeclarator":
      r2(e2.id, n7), r2(e2.init, n7);
      break;
    case "TemplateLiteral":
      s2(e2.expressions, n7), s2(e2.quasis, n7);
  }
}
function c2(e2, n7) {
  let a5 = false;
  const t5 = n7.toLowerCase();
  return r2(e2, (e3) => !a5 && ("Identifier" === e3.type && e3.name && e3.name.toLowerCase() === t5 && (a5 = true), true)), a5;
}
function x(e2) {
  const n7 = [];
  return r2(e2, (e3) => ("ImportDeclaration" === e3.type && e3.source && e3.source.value && n7.push({
    libname: e3.specifiers[0].local.name.toLowerCase(),
    source: e3.source.value
  }), true)), n7;
}
function p3(e2, n7) {
  let a5 = false;
  const t5 = n7.toLowerCase();
  return r2(e2, (e3) => !a5 && ("CallExpression" !== e3.type || "Identifier" !== e3.callee.type || !e3.callee.name || e3.callee.name.toLowerCase() !== t5 || (a5 = true, false))), a5;
}
function l2(e2) {
  const n7 = [];
  return r2(e2, (e3) => "MemberExpression" !== e3.type || "Identifier" !== e3.object.type || (false === e3.computed && e3.object && e3.object.name && e3.property && "Identifier" === e3.property.type && e3.property.name ? n7.push(e3.object.name.toLowerCase() + "." + e3.property.name.toLowerCase()) : e3.object && e3.object.name && e3.property && "Literal" === e3.property.type && "string" == typeof e3.property.value && n7.push(e3.object.name.toLowerCase() + "." + e3.property.value?.toString().toLowerCase()), false)), n7;
}
function u2(e2) {
  const n7 = [];
  return r2(e2, (e3) => {
    if ("CallExpression" === e3.type) {
      if ("Identifier" === e3.callee.type && "expects" === e3.callee.name.toLowerCase()) {
        let a5 = "";
        for (let t5 = 0; t5 < (e3.arguments || []).length; t5++) 0 === t5 ? "Identifier" === e3.arguments[t5].type && (a5 = e3.arguments[t5].name.toLowerCase()) : a5 && "Literal" === e3.arguments[t5].type && m3(e3.arguments[t5].value) && n7.push(a5 + "." + e3.arguments[t5].value.toLowerCase());
        return false;
      }
      if ("Identifier" === e3.callee.type && ["domainname", "domaincode", "domain", "haskey"].includes(e3.callee.name.toLowerCase()) && e3.arguments.length >= 2) {
        let a5 = "";
        return "Identifier" === e3.arguments[0].type && (a5 = e3.arguments[0].name.toLowerCase()), a5 && "Literal" === e3.arguments[1].type && m3(e3.arguments[1].value) && n7.push(a5 + "." + e3.arguments[1].value.toLowerCase()), false;
      }
    }
    return "MemberExpression" !== e3.type || "Identifier" !== e3.object.type || (false === e3.computed && e3.object && e3.object.name && e3.property && "Identifier" === e3.property.type && e3.property.name ? n7.push(e3.object.name.toLowerCase() + "." + e3.property.name.toLowerCase()) : e3.object && e3.object.name && e3.property && "Literal" === e3.property.type && "string" == typeof e3.property.value && n7.push(e3.object.name.toLowerCase() + "." + e3.property.value?.toString().toLowerCase()), false);
  }), n7;
}
function y2(e2) {
  const n7 = [];
  return r2(e2, (e3) => ("CallExpression" === e3.type && "Identifier" === e3.callee.type && n7.push(e3.callee.name.toLowerCase()), true)), n7;
}
function d3(e2, n7 = []) {
  let a5 = null;
  if (void 0 === e2.usesFeatureSet) {
    null === a5 && (a5 = y2(e2)), e2.usesFeatureSet = false;
    for (let n8 = 0; n8 < a5.length; n8++) t4.has(a5[n8]) && (e2.usesFeatureSet = true, e2.isAsync = true);
    if (false === e2.usesFeatureSet && n7 && n7.length > 0) {
      for (const a6 of n7) if (c2(e2, a6)) {
        e2.usesFeatureSet = true, e2.isAsync = true;
        break;
      }
    }
  }
  if (void 0 === e2.usesModules) {
    e2.usesModules = false;
    x(e2).length > 0 && (e2.usesModules = true);
  }
  if (void 0 === e2.usesGeometry) {
    e2.usesGeometry = false, null === a5 && (a5 = y2(e2));
    for (let n8 = 0; n8 < a5.length; n8++) i3.has(a5[n8]) && (e2.usesGeometry = true);
  }
}

// ../../../node_modules/@arcgis/core/chunks/array.js
function F(F3) {
  function p7(n7, o2, u3) {
    if (n7 instanceof t) return n7.toArray();
    if (U(n7)) return n7;
    throw new a2(o2, r.InvalidParameter, u3);
  }
  function y4(n7, t5) {
    const r3 = n7.length, e2 = Math.floor(r3 / 2);
    return 0 === r3 ? [] : 1 === r3 ? [n7[0]] : v4(y4(n7.slice(0, e2), t5), y4(n7.slice(e2, r3), t5), t5);
  }
  function v4(n7, t5, r3) {
    const e2 = [];
    for (; n7.length > 0 || t5.length > 0; ) if (n7.length > 0 && t5.length > 0) {
      let o2 = r3(n7[0], t5[0]);
      isNaN(o2) && (o2 = 0), o2 <= 0 ? (e2.push(n7[0]), n7 = n7.slice(1)) : (e2.push(t5[0]), t5 = t5.slice(1));
    } else n7.length > 0 ? (e2.push(n7[0]), n7 = n7.slice(1)) : t5.length > 0 && (e2.push(t5[0]), t5 = t5.slice(1));
    return e2;
  }
  function P4(n7, t5) {
    return __async(this, null, function* () {
      const r3 = n7.length, e2 = Math.floor(r3 / 2);
      if (0 === r3) return [];
      if (1 === r3) return [n7[0]];
      const o2 = [yield P4(n7.slice(0, e2), t5), yield P4(n7.slice(e2, r3), t5)];
      return I3(o2[0], o2[1], t5, []);
    });
  }
  function I3(n7, t5, r3, e2) {
    return __async(this, null, function* () {
      const o2 = e2;
      if (n7.length > 0 || t5.length > 0) {
        if (n7.length > 0 && t5.length > 0) {
          let i4 = yield r3(n7[0], t5[0]);
          return isNaN(i4) && (i4 = 1), i4 <= 0 ? (o2.push(n7[0]), n7 = n7.slice(1)) : (o2.push(t5[0]), t5 = t5.slice(1)), I3(n7, t5, r3, e2);
        }
        return n7.length > 0 ? (o2.push(n7[0]), I3(n7 = n7.slice(1), t5, r3, e2)) : (o2.push(t5[0]), I3(n7, t5 = t5.slice(1), r3, e2));
      }
      return e2;
    });
  }
  function O3(n7, e2, u3, a5) {
    ae(u3, 1, 2, n7, e2);
    let s3 = u3[0];
    if (Q(s3) && (s3 = s3.toArray()), false === U(s3)) throw new a2(n7, r.InvalidParameter, e2);
    if (u3.length > 1) {
      if (false === _2(u3[1])) throw new a2(n7, r.InvalidParameter, e2);
      let o2 = s3;
      const i4 = u3[1].createFunction(n7);
      return a5 ? P4(o2, i4) : (o2 = y4(o2, (n8, t5) => i4(n8, t5)), o2);
    }
    let l4 = s3;
    if (0 === l4.length) return [];
    const d5 = {};
    for (let t5 = 0; t5 < l4.length; t5++) {
      const n8 = L(l4[t5]);
      "" !== n8 && (d5[n8] = true);
    }
    if (true === d5.Array || true === d5.Dictionary || true === d5.Feature || true === d5.Point || true === d5.Polygon || true === d5.Polyline || true === d5.Multipoint || true === d5.Extent || true === d5.Function) return l4.slice(0);
    let m6 = 0, F4 = "";
    for (const t5 in d5) m6++, F4 = t5;
    return l4 = m6 > 1 || "String" === F4 ? y4(l4, (n8, t5) => {
      if (null == n8 || n8 === O) return null == t5 || t5 === O ? 0 : 1;
      if (null == t5 || t5 === O) return -1;
      const r3 = me(n8), e3 = me(t5);
      return r3 < e3 ? -1 : r3 === e3 ? 0 : 1;
    }) : "Number" === F4 ? y4(l4, (n8, t5) => n8 - t5) : "Boolean" === F4 ? y4(l4, (n8, t5) => n8 === t5 ? 0 : t5 ? -1 : 1) : "Date" === F4 ? y4(l4, (n8, t5) => t5 - n8) : l4.slice(0), l4;
  }
  F3.functions.array = function(e2, f4) {
    return F3.standardFunction(e2, f4, (d5, h4, w3) => {
      if (ae(w3, 0, 2, e2, f4), 0 === w3.length) return [];
      if (1 === w3.length && null === w3[0]) return [];
      if (U(w3[0])) {
        if (2 === w3.length && false === z(w3[1])) throw new a2(e2, r.InvalidParameter, f4);
        return true === P(w3[1], false) ? f2(w3[0]) : w3[0].slice(0);
      }
      if (Q(w3[0])) {
        if (2 === w3.length && false === z(w3[1])) throw new a2(e2, r.InvalidParameter, f4);
        return true === P(w3[1], false) ? f2(w3[0]) : w3[0].toArray().slice(0);
      }
      const g2 = ge(w3[0]);
      if (isNaN(g2) || false === V(g2)) throw new a2(e2, r.InvalidParameter, f4);
      const m6 = P(w3[1], null), F4 = new Array(g2);
      return F4.fill(m6), F4;
    });
  }, F3.functions.front = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, s3) => {
      if (ae(s3, 1, 1, n7, e2), Q(s3[0])) {
        if (s3[0].length() <= 0) throw new a2(n7, r.OutOfBounds, e2);
        return s3[0].get(0);
      }
      if (U(s3[0])) {
        if (s3[0].length <= 0) throw new a2(n7, r.OutOfBounds, e2);
        return s3[0][0];
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.back = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, s3) => {
      if (ae(s3, 1, 1, n7, e2), Q(s3[0])) {
        if (s3[0].length() <= 0) throw new a2(n7, r.OutOfBounds, e2);
        return s3[0].get(s3[0].length() - 1);
      }
      if (U(s3[0])) {
        if (s3[0].length <= 0) throw new a2(n7, r.OutOfBounds, e2);
        return s3[0][s3[0].length - 1];
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.push = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, c3) => {
      if (ae(c3, 1, 2, n7, e2), U(c3[0])) return c3[0][c3[0].length] = c3[1], c3[0].length;
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.pop = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, c3) => {
      if (ae(c3, 1, 1, n7, e2), U(c3[0])) {
        if (c3[0].length <= 0) throw new a2(n7, r.OutOfBounds, e2);
        const o2 = c3[0][c3[0].length - 1];
        return c3[0].length = c3[0].length - 1, o2;
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.erase = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, c3) => {
      if (ae(c3, 2, 2, n7, e2), U(c3[0])) {
        let o2 = ge(c3[1]);
        if (isNaN(o2) || false === V(o2)) throw new a2(n7, r.InvalidParameter, e2);
        const i4 = c3[0];
        if (i4.length <= 0) throw new a2(n7, r.OutOfBounds, e2);
        if (o2 < 0 && (o2 = i4.length + o2), o2 < 0) throw new a2(n7, r.OutOfBounds, e2);
        if (o2 >= i4.length) throw new a2(n7, r.OutOfBounds, e2);
        return i4.splice(o2, 1), O;
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.insert = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, c3) => {
      if (ae(c3, 3, 3, n7, e2), U(c3[0])) {
        const o2 = ge(c3[1]);
        if (isNaN(o2) || false === V(o2)) throw new a2(n7, r.InvalidParameter, e2);
        const i4 = c3[2], u4 = c3[0];
        if (o2 > u4.length) throw new a2(n7, r.OutOfBounds, e2);
        if (o2 < 0 && o2 < -1 * u4.length) throw new a2(n7, r.OutOfBounds, e2);
        return o2 === u4.length ? (u4[o2] = i4, O) : (u4.splice(o2, 0, i4), O);
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.resize = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, c3, d5) => {
      if (ae(d5, 2, 3, n7, e2), U(d5[0])) {
        const o2 = ge(d5[1]);
        if (isNaN(o2) || false === V(o2)) throw new a2(n7, r.InvalidParameter, e2);
        if (o2 < 0) throw new a2(n7, r.InvalidParameter, e2);
        const i4 = P(d5[2], null), u4 = d5[0];
        if (u4.length >= o2) return u4.length = o2, O;
        const c4 = u4.length;
        u4.length = o2;
        for (let n8 = c4; n8 < u4.length; n8++) u4[n8] = i4;
        return O;
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.includes = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, s3) => {
      if (ae(s3, 2, 2, n7, e2), U(s3[0])) {
        const n8 = s3[1];
        return s3[0].findIndex((t5) => ce(t5, n8)) > -1;
      }
      if (Q(s3[0])) {
        const n8 = s3[1];
        return s3[0].toArray().findIndex((t5) => ce(t5, n8)) > -1;
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.slice = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, f4, d5) => {
      if (ae(d5, 1, 3, n7, e2), U(d5[0])) {
        const o2 = ge(P(d5[1], 0)), i4 = ge(P(d5[2], d5[0].length));
        if (isNaN(o2) || false === V(o2)) throw new a2(n7, r.InvalidParameter, e2);
        if (isNaN(i4) || false === V(i4)) throw new a2(n7, r.InvalidParameter, e2);
        return d5[0].slice(o2, i4);
      }
      if (Q(d5[0])) {
        const o2 = d5[0], i4 = ge(P(d5[1], 0)), u4 = ge(P(d5[2], o2.length()));
        if (isNaN(i4) || false === V(i4)) throw new a2(n7, r.InvalidParameter, e2);
        if (isNaN(u4) || false === V(u4)) throw new a2(n7, r.InvalidParameter, e2);
        return o2.toArray().slice(i4, u4);
      }
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.splice = function(n7, t5) {
    return F3.standardFunction(n7, t5, (n8, t6, r3) => {
      const e2 = [];
      for (let o2 = 0; o2 < r3.length; o2++) U(r3[o2]) ? e2.push(...r3[o2]) : Q(r3[o2]) ? e2.push(...r3[o2].toArray()) : e2.push(r3[o2]);
      return e2;
    });
  }, F3.functions.top = function(n7, e2) {
    return F3.standardFunction(n7, e2, (u3, a5, l4) => {
      if (ae(l4, 2, 2, n7, e2), U(l4[0])) return ge(l4[1]) >= l4[0].length ? l4[0].slice(0) : l4[0].slice(0, ge(l4[1]));
      if (Q(l4[0])) return ge(l4[1]) >= l4[0].length() ? l4[0].slice(0) : l4[0].slice(0, ge(l4[1]));
      throw new a2(n7, r.InvalidParameter, e2);
    });
  }, F3.functions.first = function(n7, t5) {
    return F3.standardFunction(n7, t5, (r3, e2, u3) => (ae(u3, 1, 1, n7, t5), U(u3[0]) ? 0 === u3[0].length ? null : u3[0][0] : Q(u3[0]) ? 0 === u3[0].length() ? null : u3[0].get(0) : null));
  }, "sync" === F3.mode && (F3.functions.sort = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => O3(n7, r3, e2, false));
  }, F3.functions.any = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), a5 = p7(e2[0], n7, r3);
      for (const n8 of a5) {
        const t7 = i4(n8);
        if (z(t7) && true === t7) return true;
      }
      return false;
    });
  }, F3.functions.all = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3);
      for (const n8 of u3) {
        if (true !== i4(n8)) return false;
      }
      return true;
    });
  }, F3.functions.none = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3);
      for (const n8 of u3) {
        if (true === i4(n8)) return false;
      }
      return true;
    });
  }, F3.functions.reduce = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => {
      ae(e2, 2, 3, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3);
      return 2 === e2.length ? 0 === u3.length ? null : u3.reduce((n8, t7) => {
        const r4 = i4(n8, t7);
        return n8 = void 0 !== r4 && r4 !== O ? r4 : null;
      }) : u3.reduce((n8, t7) => {
        const r4 = i4(n8, t7);
        return n8 = void 0 !== r4 && r4 !== O ? r4 : null;
      }, e2[2]);
    });
  }, F3.functions.map = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3), a5 = [];
      for (const n8 of u3) {
        const t7 = i4(n8);
        void 0 !== t7 && t7 !== O ? a5.push(t7) : a5.push(null);
      }
      return a5;
    });
  }, F3.functions.filter = function(n7, t5) {
    return F3.standardFunction(n7, t5, (t6, r3, e2) => {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3), a5 = [];
      for (const n8 of u3) {
        true === i4(n8) && a5.push(n8);
      }
      return a5;
    });
  }), "async" === F3.mode && (F3.functions.sort = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      return O3(n7, r3, e2, true);
    }));
  }, F3.functions.any = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), a5 = p7(e2[0], n7, r3);
      for (const n8 of a5) {
        const t7 = yield i4(n8);
        let r4 = null;
        if (r4 = S(r4) ? yield t7 : t7, z(r4) && true === r4) return true;
      }
      return false;
    }));
  }, F3.functions.all = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3);
      for (const n8 of u3) {
        const t7 = yield i4(n8);
        let r4 = null;
        if (r4 = S(r4) ? yield t7 : t7, true !== r4) return false;
      }
      return true;
    }));
  }, F3.functions.none = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3);
      for (const n8 of u3) {
        const t7 = yield i4(n8);
        let r4 = null;
        if (r4 = S(r4) ? yield t7 : t7, true === r4) return false;
      }
      return true;
    }));
  }, F3.functions.filter = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3), a5 = [];
      for (const n8 of u3) {
        const t7 = yield i4(n8);
        let r4 = null;
        r4 = S(r4) ? yield t7 : t7, true === r4 && a5.push(n8);
      }
      return a5;
    }));
  }, F3.functions.reduce = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      ae(e2, 2, 3, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3);
      let c3;
      if (e2.length > 2) {
        const n8 = P(e2[2], null);
        c3 = u3.reduce((n9, t7) => __async(this, null, function* () {
          let r4 = yield n9;
          return void 0 !== r4 && r4 !== O || (r4 = null), i4(r4, t7);
        }), Promise.resolve(n8));
      } else {
        if (0 === u3.length) return null;
        c3 = u3.reduce((n8, t7, r4) => __async(this, null, function* () {
          if (r4 <= 1) return i4(n8, t7);
          let e3 = yield n8;
          return void 0 !== e3 && e3 !== O || (e3 = null), i4(e3, t7);
        }));
      }
      return c3.then((n8) => void 0 !== n8 && n8 !== O ? n8 : null);
    }));
  }, F3.functions.map = function(n7, t5) {
    return F3.standardFunctionAsync(n7, t5, (t6, r3, e2) => __async(this, null, function* () {
      ae(e2, 2, 2, n7, r3);
      const i4 = e2[1].createFunction(n7), u3 = p7(e2[0], n7, r3), a5 = [];
      for (const n8 of u3) {
        const t7 = yield i4(n8);
        let r4 = null;
        r4 = S(r4) ? yield t7 : t7, void 0 !== r4 && r4 !== O ? a5.push(r4) : a5.push(null);
      }
      return a5;
    }));
  });
}
var p4 = Object.freeze(Object.defineProperty({
  __proto__: null,
  registerFunctions: F
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/arcade/functions/date.js
function k2(n7, e2, r3) {
  return n7 + (T(r3) ? P2 : D2)[e2];
}
function T(n7) {
  return n7 % 4 == 0 && (n7 % 100 != 0 || n7 % 400 == 0);
}
var D2 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var P2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function S2(n7) {
  return null === n7 ? n7 : false === n7.isValid ? null : n7;
}
function Z2(n7, e2) {
  return "" === n7 || "default" === n7.toLowerCase().trim() ? He(e2) : "z" === n7 || "Z" === n7 ? "UTC" : n7;
}
function p5(n7, e2) {
  return ee(n7) ? n7.toArcadeDate() : he(n7, He(e2));
}
function C2(T3, D4) {
  T3.today = function(e2, r3) {
    return D4(e2, r3, (t5, a5, s3) => {
      ae(s3, 0, 0, e2, r3);
      const i4 = /* @__PURE__ */ new Date();
      return i4.setHours(0, 0, 0, 0), m.dateJSAndZoneToArcadeDate(i4, He(e2));
    });
  }, T3.time = function(e2, f4) {
    return D4(e2, f4, (m6, d5, h4) => {
      switch (ae(h4, 0, 4, e2, f4), h4.length) {
        case 0: {
          const r3 = m.nowToArcadeDate(He(e2));
          return new n5(r3.hour, r3.minute, r3.second, r3.millisecond);
        }
        case 1: {
          if (te(h4[0])) return h4[0].clone();
          if (X(h4[0])) return new n5(h4[0].hour, h4[0].minute, h4[0].second, h4[0].millisecond);
          if (ee(h4[0])) return new n5(0, 0, 0, 0);
          if (G(h4[0])) return n5.fromString(h4[0]);
          const n7 = ge(h4[0]);
          return false === isNaN(n7) ? n5.fromMilliseconds(n7) : null;
        }
        case 2:
          return G(h4[0]) && G(h4[1]) ? n5.fromString(h4[0], h4[1]) : n5.fromParts(ge(h4[0]), ge(h4[1]), 0, 0);
        case 3:
          return n5.fromParts(ge(h4[0]), ge(h4[1]), ge(h4[2]), 0);
        case 4:
          return n5.fromParts(ge(h4[0]), ge(h4[1]), ge(h4[2]), ge(h4[3]));
      }
      throw new a2(e2, r.InvalidParameter, f4);
    });
  }, T3.dateonly = function(e2, r3) {
    return D4(e2, r3, (t5, i4, m6) => {
      if (ae(m6, 0, 3, e2, r3), 3 === m6.length) return n2.fromParts(ge(m6[0]), ge(m6[1]) + 1, ge(m6[2]));
      if (2 === m6.length) {
        const n7 = me(m6[1]);
        return "" === n7 ? null : "X" === n7 ? n2.fromSeconds(ge(m6[0])) : "x" === n7 ? n2.fromMilliseconds(ge(m6[0])) : n2.fromString(me(m6[0]), n7);
      }
      if (1 === m6.length) {
        if (G(m6[0])) {
          if ("" === m6[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(m6[0])) return n2.fromString(m6[0] + "-01-01");
        }
        if (ee(m6[0])) return m6[0].clone();
        if (X(m6[0])) return n2.fromParts(m6[0].year, m6[0].monthJS + 1, m6[0].day);
        const n7 = ge(m6[0]);
        return false === isNaN(n7) ? n2.fromMilliseconds(n7) : G(m6[0]) ? n2.fromString(m6[0]) : null;
      }
      if (0 === m6.length) {
        const r4 = m.nowToArcadeDate(He(e2));
        return false === r4.isValid ? null : n2.fromParts(r4.year, r4.monthJS + 1, r4.day);
      }
      return null;
    });
  }, T3.changetimezone = function(a5, s3) {
    return D4(a5, s3, (i4, l4, d5) => {
      if (ae(d5, 2, 2, a5, s3), null === d5[0]) return null;
      if (ee(d5[0])) throw new a2(a5, r.CannotChangeTimeZoneDateOnly, s3);
      if (ee(d5[0])) throw new a2(a5, r.CannotChangeTimeZoneTime, s3);
      const h4 = he(d5[0], He(a5));
      if (null === h4) throw new a2(a5, r.InvalidParameter, s3);
      const y4 = h(Z2(me(d5[1]), a5), false);
      if (null === y4) return null;
      const N4 = m.arcadeDateAndZoneToArcadeDate(h4, y4);
      return false === N4.isValid ? null : N4;
    });
  }, T3.timezone = function(e2, r3) {
    return D4(e2, r3, (t5, a5, s3) => {
      if (ae(s3, 1, 2, e2, r3), te(s3[0])) return "Unknown";
      if (ee(s3[0])) return "Unknown";
      const l4 = he(s3[0], He(e2));
      if (null === l4) return null;
      const f4 = l4.timeZone;
      return "system" === f4 ? m.systemTimeZoneCanonicalName : "utc" === f4.toLowerCase() ? "UTC" : "unknown" === f4.toLowerCase() ? "Unknown" : f4;
    });
  }, T3.timezoneoffset = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = he(a5[0], He(n7));
      return null === s3 ? null : 60 * s3.timeZoneOffset * 1e3;
    });
  }, T3.now = function(e2, r3) {
    return D4(e2, r3, (t5, a5, s3) => {
      ae(s3, 0, 0, e2, r3);
      const i4 = m.nowToArcadeDate(He(e2));
      return false === i4.isValid ? null : i4;
    });
  }, T3.timestamp = function(e2, r3) {
    return D4(e2, r3, (t5, u3, a5) => {
      ae(a5, 0, 0, e2, r3);
      const s3 = m.nowUTCToArcadeDate();
      return false === s3.isValid ? null : s3;
    });
  }, T3.toutc = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = he(a5[0], He(n7));
      return null === s3 ? null : s3.toUTC();
    });
  }, T3.tolocal = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = he(a5[0], He(n7));
      return null === s3 ? null : s3.toLocal();
    });
  }, T3.day = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.day;
    });
  }, T3.month = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.monthJS;
    });
  }, T3.year = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.year;
    });
  }, T3.hour = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      if (ae(a5, 1, 1, n7, e2), te(a5[0])) return a5[0].hour;
      const s3 = he(a5[0], He(n7));
      return null === s3 ? NaN : s3.hour;
    });
  }, T3.second = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      if (ae(a5, 1, 1, n7, e2), te(a5[0])) return a5[0].second;
      const s3 = he(a5[0], He(n7));
      return null === s3 ? NaN : s3.second;
    });
  }, T3.millisecond = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      if (ae(a5, 1, 1, n7, e2), te(a5[0])) return a5[0].millisecond;
      const s3 = he(a5[0], He(n7));
      return null === s3 ? NaN : s3.millisecond;
    });
  }, T3.minute = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      if (ae(a5, 1, 1, n7, e2), te(a5[0])) return a5[0].minute;
      const s3 = he(a5[0], He(n7));
      return null === s3 ? NaN : s3.minute;
    });
  }, T3.week = function(n7, e2) {
    return D4(n7, e2, (s3, i4, l4) => {
      ae(l4, 1, 2, n7, e2);
      const c3 = p5(l4[0], He(n7));
      if (null === c3) return NaN;
      const f4 = ge(P(l4[1], 0));
      if (f4 < 0 || f4 > 6) throw new a2(n7, r.InvalidParameter, e2);
      const m6 = c3.day, h4 = c3.monthJS, y4 = c3.year, N4 = c3.dayOfWeekJS, w3 = k2(m6, h4, y4) - 1, g2 = Math.floor(w3 / 7);
      return N4 - f4 + (N4 - f4 < 0 ? 7 : 0) < w3 - 7 * g2 ? g2 + 1 : g2;
    });
  }, T3.weekday = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.dayOfWeekJS;
    });
  }, T3.isoweekday = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.dayOfWeekISO;
    });
  }, T3.isomonth = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.monthISO;
    });
  }, T3.isoweek = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.weekISO;
    });
  }, T3.isoyear = function(n7, e2) {
    return D4(n7, e2, (r3, t5, a5) => {
      ae(a5, 1, 1, n7, e2);
      const s3 = p5(a5[0], He(n7));
      return null === s3 ? NaN : s3.yearISO;
    });
  }, T3.date = function(r3, t5) {
    return D4(r3, t5, (l4, d5, y4) => {
      if (ae(y4, 0, 8, r3, t5), 3 === y4.length) {
        if (ee(y4[0]) && te(y4[1]) && G(y4[2])) {
          const t6 = h(Z2(me(y4[2]) ?? "unknown", r3), false);
          return null === t6 ? null : S2(m.fromParts(y4[0].year, y4[0].month, y4[0].day, y4[1].hour, y4[1].minute, y4[1].second, y4[1].millisecond, t6));
        }
        return S2(m.fromParts(ge(y4[0]), ge(y4[1]) + 1, ge(y4[2]), 0, 0, 0, 0, He(r3)));
      }
      if (4 === y4.length) return S2(m.fromParts(ge(y4[0]), ge(y4[1]) + 1, ge(y4[2]), ge(y4[3]), 0, 0, 0, He(r3)));
      if (5 === y4.length) return S2(m.fromParts(ge(y4[0]), ge(y4[1]) + 1, ge(y4[2]), ge(y4[3]), ge(y4[4]), 0, 0, He(r3)));
      if (6 === y4.length) return S2(m.fromParts(ge(y4[0]), ge(y4[1]) + 1, ge(y4[2]), ge(y4[3]), ge(y4[4]), ge(y4[5]), 0, He(r3)));
      if (7 === y4.length) return S2(m.fromParts(ge(y4[0]), ge(y4[1]) + 1, ge(y4[2]), ge(y4[3]), ge(y4[4]), ge(y4[5]), ge(y4[6]), He(r3)));
      if (8 === y4.length) {
        const t6 = h(Z2(me(y4[7]) ?? "unknown", r3), false);
        return null === t6 ? null : S2(m.fromParts(ge(y4[0]), ge(y4[1]) + 1, ge(y4[2]), ge(y4[3]), ge(y4[4]), ge(y4[5]), ge(y4[6]), t6));
      }
      if (2 === y4.length) {
        if (ee(y4[0]) && G(y4[1])) {
          const t7 = h(Z2(me(y4[1]) ?? "unknown", r3), false);
          return null === t7 ? null : S2(m.fromParts(y4[0].year, y4[0].month, y4[0].day, 0, 0, 0, 0, t7));
        }
        if (ee(y4[0]) && te(y4[1])) return S2(m.fromParts(y4[0].year, y4[0].month, y4[0].day, y4[1].hour, y4[1].minute, y4[1].second, y4[1].millisecond, "unknown"));
        let t6, o2 = me(y4[1]);
        return "" === o2 ? null : (o2 = se(o2, true), t6 = "X" === o2 ? DateTime.fromSeconds(ge(y4[0])) : "x" === o2 ? DateTime.fromMillis(ge(y4[0])) : DateTime.fromFormat(me(y4[0]), o2, {
          locale: c(),
          numberingSystem: "latn"
        }), t6.isValid ? m.dateTimeToArcadeDate(t6) : null);
      }
      if (1 === y4.length) {
        if (ee(y4[0])) return S2(m.fromParts(y4[0].year, y4[0].month, y4[0].day, 0, 0, 0, 0, "unknown"));
        if (G(y4[0])) {
          if ("" === y4[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(y4[0])) return he(y4[0] + "-01-01", He(r3));
        }
        const e2 = ge(y4[0]);
        if (false === isNaN(e2)) {
          const t6 = DateTime.fromMillis(e2);
          return t6.isValid ? m.dateTimeAndZoneToArcadeDate(t6, He(r3)) : null;
        }
        return he(y4[0], He(r3));
      }
      return 0 === y4.length ? m.nowToArcadeDate(He(r3)) : null;
    });
  }, T3.datediff = function(e2, r3) {
    return D4(e2, r3, (t5, a5, s3) => {
      if (ae(s3, 2, 4, e2, r3), te(s3[0])) return te(s3[1]) ? s3[0].difference(s3[1], me(s3[2])) : NaN;
      if (te(s3[1])) return NaN;
      if (ee(s3[0])) return ee(s3[1]) ? s3[0].difference(s3[1], me(s3[2])) : NaN;
      if (ee(s3[1])) return NaN;
      let l4 = he(s3[0], He(e2)), h4 = he(s3[1], He(e2));
      if (null === l4 || null === h4) return NaN;
      let y4 = P(s3[3], "");
      switch ("" !== y4 && null !== y4 ? (y4 = Z2(me(y4), e2), l4 = m.arcadeDateAndZoneToArcadeDate(l4, y4), h4 = m.arcadeDateAndZoneToArcadeDate(h4, y4)) : l4.timeZone !== h4.timeZone && (l4.isUnknownTimeZone ? l4 = m.arcadeDateAndZoneToArcadeDate(l4, h4.timeZone) : h4 = (h4.isUnknownTimeZone, m.arcadeDateAndZoneToArcadeDate(h4, l4.timeZone))), me(s3[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return l4.diff(h4, "days");
        case "months":
        case "month":
          return l4.diff(h4, "months");
        case "minutes":
        case "minute":
        case "m":
          return "M" === s3[2] ? l4.diff(h4, "months") : l4.diff(h4, "minutes");
        case "seconds":
        case "second":
        case "s":
          return l4.diff(h4, "seconds");
        case "milliseconds":
        case "millisecond":
        case "ms":
        default:
          return l4.diff(h4);
        case "hours":
        case "hour":
        case "h":
          return l4.diff(h4, "hours");
        case "years":
        case "year":
        case "y":
          return l4.diff(h4, "years");
      }
    });
  }, T3.dateadd = function(n7, e2) {
    return D4(n7, e2, (r3, t5, s3) => {
      ae(s3, 2, 3, n7, e2);
      let l4 = ge(s3[1]);
      if (isNaN(l4) || l4 === 1 / 0 || l4 === -1 / 0) return te(s3[0]) || ee(s3[0]) ? s3[0].clone() : he(s3[0], He(n7));
      let d5 = "milliseconds";
      switch (me(s3[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          d5 = "days", l4 = ee(s3[0]) ? l4 : ie(l4);
          break;
        case "months":
        case "month":
          d5 = "months", l4 = ee(s3[0]) ? l4 : ie(l4);
          break;
        case "minutes":
        case "minute":
        case "m":
          d5 = "M" === s3[2] ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          d5 = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          d5 = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          d5 = "hours";
          break;
        case "years":
        case "year":
        case "y":
          d5 = "years";
      }
      if (te(s3[0])) return s3[0].plus(d5, l4);
      if (ee(s3[0])) return s3[0].plus(d5, l4);
      const h4 = he(s3[0], He(n7));
      return null === h4 ? null : h4.plus({
        [d5]: l4
      });
    });
  };
}

// ../../../node_modules/@arcgis/core/arcade/functions/geometry.js
function L2(L4, U3) {
  L4.ringisclockwise = function(e2, t5) {
    return U3(e2, t5, (n7, i4, c3) => {
      ae(c3, 1, 1, e2, t5);
      let m6 = [];
      if (null === c3[0]) return false;
      if (U(c3[0])) for (const o2 of c3[0]) {
        if (!(o2 instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
        m6.push(o2.hasZ ? o2.hasM ? [o2.x, o2.y, o2.z, o2.m] : [o2.x, o2.y, o2.z] : [o2.x, o2.y]);
      }
      else if (c3[0] instanceof i) m6 = c3[0]._elements;
      else {
        if (!Q(c3[0])) throw new a2(e2, r.InvalidParameter, t5);
        for (const n8 of c3[0].toArray()) {
          if (!(n8 instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
          m6.push(n8.hasZ ? n8.hasM ? [n8.x, n8.y, n8.z, n8.m] : [n8.x, n8.y, n8.z] : [n8.x, n8.y]);
        }
      }
      return !(m6.length < 3) && a(m6);
    });
  }, L4.polygon = function(e2, t5) {
    return U3(e2, t5, (o2, s3, f4) => {
      let u3;
      if (ae(f4, 1, 1, e2, t5), f4[0] instanceof N2) {
        const n7 = Ze(D.parseGeometryFromDictionary(f4[0], e2.spatialReference), e2.spatialReference);
        if (n7 instanceof j == false) throw new a2(e2, r.InvalidParameter, t5);
        u3 = n7;
      } else if (f4[0] instanceof j) u3 = y(f4[0].toJSON());
      else {
        const t6 = JSON.parse(f4[0]);
        t6 && !t6.spatialReference && (t6.spatialReference = e2.spatialReference), u3 = Ze(new j(t6), e2.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e2.spatialReference)) throw new a2(e2, r.WrongSpatialReference, t5);
      return Ae(u3);
    });
  }, L4.polyline = function(e2, t5) {
    return U3(e2, t5, (o2, s3, f4) => {
      let u3;
      if (ae(f4, 1, 1, e2, t5), f4[0] instanceof N2) {
        const n7 = Ze(D.parseGeometryFromDictionary(f4[0], e2.spatialReference), e2.spatialReference);
        if (n7 instanceof m2 == false) throw new a2(e2, r.InvalidParameter, t5);
        u3 = n7;
      } else if (f4[0] instanceof m2) u3 = y(f4[0].toJSON());
      else {
        const t6 = JSON.parse(f4[0]);
        t6 && !t6.spatialReference && (t6.spatialReference = e2.spatialReference), u3 = Ze(new m2(t6), e2.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e2.spatialReference)) throw new a2(e2, r.WrongSpatialReference, t5);
      return Ae(u3);
    });
  }, L4.point = function(e2, t5) {
    return U3(e2, t5, (o2, s3, f4) => {
      let u3;
      if (ae(f4, 1, 1, e2, t5), f4[0] instanceof N2) {
        const n7 = Ze(D.parseGeometryFromDictionary(f4[0], e2.spatialReference), e2.spatialReference);
        if (n7 instanceof _ == false) throw new a2(e2, r.InvalidParameter, t5);
        u3 = n7;
      } else if (f4[0] instanceof _) u3 = y(f4[0].toJSON());
      else {
        const t6 = JSON.parse(f4[0]);
        t6 && !t6.spatialReference && (t6.spatialReference = e2.spatialReference), u3 = Ze(new _(t6), e2.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e2.spatialReference)) throw new a2(e2, r.WrongSpatialReference, t5);
      return Ae(u3);
    });
  }, L4.multipoint = function(e2, t5) {
    return U3(e2, t5, (o2, s3, f4) => {
      let u3;
      if (ae(f4, 1, 1, e2, t5), f4[0] instanceof N2) {
        const n7 = Ze(D.parseGeometryFromDictionary(f4[0], e2.spatialReference), e2.spatialReference);
        if (n7 instanceof u == false) throw new a2(e2, r.InvalidParameter, t5);
        u3 = n7;
      } else if (f4[0] instanceof u) u3 = y(f4[0].toJSON());
      else {
        const t6 = JSON.parse(f4[0]);
        t6 && !t6.spatialReference && (t6.spatialReference = e2.spatialReference), u3 = Ze(new u(t6), e2.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e2.spatialReference)) throw new a2(e2, r.WrongSpatialReference, t5);
      return Ae(u3);
    });
  }, L4.extent = function(e2, t5) {
    return U3(e2, t5, (o2, s3, f4) => {
      f4 = Fe(f4), ae(f4, 1, 1, e2, t5);
      let p7 = null;
      if (f4[0] instanceof N2) p7 = Ze(D.parseGeometryFromDictionary(f4[0], e2.spatialReference), e2.spatialReference);
      else if (f4[0] instanceof _) {
        const e3 = {
          xmin: f4[0].x,
          ymin: f4[0].y,
          xmax: f4[0].x,
          ymax: f4[0].y,
          spatialReference: f4[0].spatialReference.toJSON()
        }, t6 = f4[0];
        t6.hasZ ? (e3.zmin = t6.z, e3.zmax = t6.z) : t6.hasM && (e3.mmin = t6.m, e3.mmax = t6.m), p7 = y(e3);
      } else if (f4[0] instanceof j) p7 = y(f4[0].extent?.toJSON());
      else if (f4[0] instanceof m2) p7 = y(f4[0].extent?.toJSON());
      else if (f4[0] instanceof u) p7 = y(f4[0].extent?.toJSON());
      else if (f4[0] instanceof w) p7 = y(f4[0].toJSON());
      else {
        const t6 = JSON.parse(f4[0]);
        t6 && !t6.spatialReference && (t6.spatialReference = e2.spatialReference), p7 = Ze(new w(t6), e2.spatialReference);
      }
      if (null !== p7 && false === p7.spatialReference.equals(e2.spatialReference)) throw new a2(e2, r.WrongSpatialReference, t5);
      return Ae(p7);
    });
  }, L4.geometry = function(e2, t5) {
    return U3(e2, t5, (o2, s3, f4) => {
      ae(f4, 1, 1, e2, t5);
      let u3 = null;
      if (null === f4[0]) return null;
      if (H(f4[0])) u3 = Ze(f4[0].geometry(), e2.spatialReference);
      else if (f4[0] instanceof N2) u3 = Ze(D.parseGeometryFromDictionary(f4[0], e2.spatialReference), e2.spatialReference);
      else {
        const t6 = JSON.parse(f4[0]);
        t6 && !t6.spatialReference && (t6.spatialReference = e2.spatialReference), u3 = Ze(y(t6), e2.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e2.spatialReference)) throw new a2(e2, r.WrongSpatialReference, t5);
      return Ae(u3);
    });
  }, L4.setgeometry = function(e2, t5) {
    return U3(e2, t5, (n7, i4, o2) => {
      if (ae(o2, 2, 2, e2, t5), !H(o2[0])) throw new a2(e2, r.InvalidParameter, t5);
      if (true === o2[0].immutable) throw new a2(e2, r.Immutable, t5);
      if (!(o2[1] instanceof n4 || null === o2[1])) throw new a2(e2, r.InvalidParameter, t5);
      return o2[0]._geometry = o2[1], O;
    });
  }, L4.feature = function(e2, t5) {
    return U3(e2, t5, (o2, l4, s3) => {
      if (0 === s3.length) throw new a2(e2, r.WrongNumberOfParameters, t5);
      let f4;
      if (1 === s3.length) {
        if (G(s3[0])) f4 = D.fromJson(JSON.parse(s3[0]), e2.timeZone);
        else if (H(s3[0])) f4 = D.createFromArcadeFeature(s3[0]);
        else if (s3[0] instanceof n4) f4 = D.createFromGraphicLikeObject(s3[0], null, null, e2.timeZone);
        else {
          if (!(s3[0] instanceof N2)) throw new a2(e2, r.InvalidParameter, t5);
          {
            let t6 = s3[0].hasField("geometry") ? s3[0].field("geometry") : null, r3 = s3[0].hasField("attributes") ? s3[0].field("attributes") : null;
            null !== t6 && t6 instanceof N2 && (t6 = D.parseGeometryFromDictionary(t6, e2.spatialReference)), null !== r3 && (r3 = D.parseAttributesFromDictionary(r3)), f4 = D.createFromGraphicLikeObject(t6, r3, null, e2.timeZone);
          }
        }
      } else if (2 === s3.length) {
        let o3 = null, l5 = null;
        if (null !== s3[0]) if (s3[0] instanceof n4) o3 = s3[0];
        else {
          if (!(o3 instanceof N2)) throw new a2(e2, r.InvalidParameter, t5);
          o3 = D.parseGeometryFromDictionary(s3[0], e2.spatialReference);
        }
        if (null !== s3[1]) {
          if (!(s3[1] instanceof N2)) throw new a2(e2, r.InvalidParameter, t5);
          l5 = D.parseAttributesFromDictionary(s3[1]);
        }
        f4 = D.createFromGraphicLikeObject(o3, l5, null, e2.timeZone);
      } else {
        let o3 = null;
        const l5 = {};
        if (null !== s3[0]) if (s3[0] instanceof n4) o3 = s3[0];
        else {
          if (!(o3 instanceof N2)) throw new a2(e2, r.InvalidParameter, t5);
          o3 = D.parseGeometryFromDictionary(s3[0], e2.spatialReference);
        }
        for (let n7 = 1; n7 < s3.length; n7 += 2) {
          const i4 = me(s3[n7]), o4 = s3[n7 + 1];
          if (!(null == o4 || G(o4) || isNaN(o4) || X(o4) || E2(o4) || te(o4) || ee(o4) || z(o4))) throw new a2(e2, r.InvalidParameter, t5);
          if (_2(o4) || false === Y(o4)) throw new a2(e2, r.InvalidParameter, t5);
          l5[i4] = o4 === O ? null : o4;
        }
        f4 = D.createFromGraphicLikeObject(o3, l5, null, e2.timeZone);
      }
      return f4._geometry = Ze(f4.geometry(), e2.spatialReference), f4.immutable = false, f4;
    });
  }, L4.dictionary = function(e2, t5) {
    return U3(e2, t5, (i4, o2, l4) => {
      if (0 === l4.length || 1 === l4.length && null === l4[0]) {
        const e3 = new N2();
        return e3.immutable = false, e3;
      }
      if (1 === l4.length && G(l4[0])) try {
        const t6 = JSON.parse(l4[0]), r3 = N2.convertObjectToArcadeDictionary(t6, He(e2), false);
        return r3.immutable = false, r3;
      } catch (u3) {
        throw new a2(e2, r.InvalidParameter, t5);
      }
      if (1 === l4.length && l4[0] instanceof n4) try {
        const t6 = l4[0].toJSON();
        t6.hasZ = true === l4[0].hasZ, t6.hasM = true === l4[0].hasM;
        const r3 = N2.convertObjectToArcadeDictionary(t6, He(e2), false);
        return r3.immutable = false, r3;
      } catch (u3) {
        throw new a2(e2, r.InvalidParameter, t5);
      }
      if (1 === l4.length && H(l4[0])) try {
        const e3 = new N2();
        e3.immutable = false, e3.setField("geometry", l4[0].geometry());
        const t6 = new N2();
        t6.immutable = false, e3.setField("attributes", t6);
        for (const n7 of l4[0].keys()) t6.setField(n7, l4[0].field(n7));
        return e3;
      } catch (u3) {
        throw new a2(e2, r.InvalidParameter, t5);
      }
      if (1 === l4.length && l4[0] instanceof N2) try {
        const e3 = new N2();
        e3.immutable = false;
        for (const t6 of l4[0].keys()) e3.setField(t6, l4[0].field(t6));
        return e3;
      } catch (u3) {
        throw new a2(e2, r.InvalidParameter, t5);
      }
      if (2 === l4.length && l4[0] instanceof N2 && z(l4[1])) try {
        if (!(true === l4[1])) {
          const e3 = new N2();
          e3.immutable = false;
          for (const t6 of l4[0].keys()) e3.setField(t6, l4[0].field(t6));
          return e3;
        }
        return l4[0].deepClone();
      } catch (u3) {
        throw new a2(e2, r.InvalidParameter, t5);
      }
      if (l4.length % 2 != 0) throw new a2(e2, r.WrongNumberOfParameters, t5);
      const c3 = {};
      for (let n7 = 0; n7 < l4.length; n7 += 2) {
        const i5 = me(l4[n7]), o3 = l4[n7 + 1];
        if (!(null == o3 || G(o3) || isNaN(o3) || X(o3) || E2(o3) || z(o3) || ee(o3) || te(o3) || U(o3) || Q(o3))) throw new a2(e2, r.InvalidParameter, t5);
        if (_2(o3)) throw new a2(e2, r.InvalidParameter, t5);
        c3[i5] = o3 === O ? null : o3;
      }
      const m6 = new N2(c3);
      return m6.immutable = false, m6;
    });
  }, L4.haskey = function(t5, i4) {
    return U3(t5, i4, (o2, s3, f4) => {
      ae(f4, 2, 2, t5, i4);
      const c3 = me(f4[1]);
      if (H(f4[0])) return f4[0].hasField(c3);
      if (f4[0] instanceof N2) return f4[0].hasField(c3);
      if (f4[0] instanceof n4) {
        const t6 = d2(f4[0], c3, null, null, 2);
        return !t6 || "notfound" !== t6.keystate;
      }
      throw new a2(t5, r.InvalidParameter, i4);
    });
  }, L4.hasvalue = function(e2, n7) {
    return U3(e2, n7, (r3, a5, i4) => (ae(i4, 2, 2, e2, n7), null != p2(i4[0], i4[1])));
  }, L4.indexof = function(e2, t5) {
    return U3(e2, t5, (n7, i4, o2) => {
      ae(o2, 2, 2, e2, t5);
      const c3 = o2[1];
      if (U(o2[0])) {
        for (let e3 = 0; e3 < o2[0].length; e3++) if (ce(c3, o2[0][e3])) return e3;
        return -1;
      }
      if (Q(o2[0])) {
        const e3 = o2[0].length();
        for (let t6 = 0; t6 < e3; t6++) if (ce(c3, o2[0].get(t6))) return t6;
        return -1;
      }
      throw new a2(e2, r.InvalidParameter, t5);
    });
  }, L4.angle = function(e2, t5) {
    return U3(e2, t5, (n7, i4, o2) => {
      if (o2 = Fe(o2), ae(o2, 2, 3, e2, t5), !(o2[0] instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
      if (!(o2[1] instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
      if (o2.length > 2 && !(o2[2] instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
      return 2 === o2.length ? d(o2[0], o2[1]) : Z(o2[0], o2[1], o2[2]);
    });
  }, L4.bearing = function(e2, t5) {
    return U3(e2, t5, (n7, i4, o2) => {
      if (o2 = Fe(o2), ae(o2, 2, 3, e2, t5), !(o2[0] instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
      if (!(o2[1] instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
      if (o2.length > 2 && !(o2[2] instanceof _)) throw new a2(e2, r.InvalidParameter, t5);
      return 2 === o2.length ? v2(o2[0], o2[1]) : I(o2[0], o2[1], o2[2]);
    });
  }, L4.isselfintersecting = function(e2, t5) {
    return U3(e2, t5, (n7, r3, a5) => {
      a5 = Fe(a5), ae(a5, 1, 1, e2, t5);
      let i4 = a5[0];
      if (i4 instanceof j) return i4.isSelfIntersecting;
      if (i4 instanceof m2) return k(i4.paths);
      if (i4 instanceof u) {
        const e3 = i4.points;
        for (let t6 = 0; t6 < e3.length; t6++) for (let n8 = 0; n8 < e3.length; n8++) if (n8 !== t6) {
          let r4 = true;
          for (let a6 = 0; a6 < e3[t6].length; a6++) if (e3[t6][a6] !== e3[n8][a6]) {
            r4 = false;
            break;
          }
          if (true === r4) return true;
        }
      }
      if (U(i4) || Q(i4)) {
        const t6 = Me(i4, e2.spatialReference);
        return null !== t6 && (i4 = t6.paths), k(i4);
      }
      return false;
    });
  };
}

// ../../../node_modules/@arcgis/core/arcade/functions/maths.js
function m4(n7, t5, r3) {
  if (void 0 === r3 || 0 == +r3) return Math[n7](t5);
  if (t5 = +t5, r3 = +r3, isNaN(t5) || "number" != typeof r3 || r3 % 1 != 0) return NaN;
  let u3 = t5.toString().split("e");
  return u3 = (t5 = Math[n7](+(u3[0] + "e" + (u3[1] ? +u3[1] - r3 : -r3)))).toString().split("e"), +(u3[0] + "e" + (u3[1] ? +u3[1] + r3 : r3));
}
function M(M3, b2) {
  function p7(n7, t5, r3) {
    const u3 = ge(n7);
    return isNaN(u3) ? u3 : isNaN(t5) || isNaN(r3) || t5 > r3 ? NaN : u3 < t5 ? t5 : u3 > r3 ? r3 : u3;
  }
  M3.number = function(f4, c3) {
    return b2(f4, c3, (N4, l4, m6) => {
      ae(m6, 1, 2, f4, c3);
      const M4 = m6[0];
      if (E2(M4)) return M4;
      if (null === M4) return 0;
      if (X(M4) || te(M4) || ee(M4)) return M4.toNumber();
      if (z(M4)) return Number(M4);
      if (U(M4)) return NaN;
      if ("" === M4) return Number(M4);
      if (void 0 === M4) return Number(M4);
      if (G(M4)) {
        if (void 0 !== m6[1]) {
          let n7 = v(m6[1], "‰", "");
          return n7 = v(n7, "¤", ""), p(M4, {
            pattern: n7
          });
        }
        return Number(M4.trim());
      }
      return Number(M4);
    });
  }, M3.abs = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.abs(ge(o2[0]))));
  }, M3.acos = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.acos(ge(o2[0]))));
  }, M3.asin = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.asin(ge(o2[0]))));
  }, M3.atan = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.atan(ge(o2[0]))));
  }, M3.atan2 = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 2, 2, t5, r3), Math.atan2(ge(o2[0]), ge(o2[1]))));
  }, M3.ceil = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => {
      if (ae(o2, 1, 2, t5, r3), 2 === o2.length) {
        let n7 = ge(o2[1]);
        return isNaN(n7) && (n7 = 0), m4("ceil", ge(o2[0]), -1 * n7);
      }
      return Math.ceil(ge(o2[0]));
    });
  }, M3.round = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => {
      if (ae(o2, 1, 2, t5, r3), 2 === o2.length) {
        let n7 = ge(o2[1]);
        return isNaN(n7) && (n7 = 0), m4("round", ge(o2[0]), -1 * n7);
      }
      return Math.round(ge(o2[0]));
    });
  }, M3.floor = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => {
      if (ae(o2, 1, 2, t5, r3), 2 === o2.length) {
        let n7 = ge(o2[1]);
        return isNaN(n7) && (n7 = 0), m4("floor", ge(o2[0]), -1 * n7);
      }
      return Math.floor(ge(o2[0]));
    });
  }, M3.cos = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.cos(ge(o2[0]))));
  }, M3.isnan = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), "number" == typeof o2[0] && isNaN(o2[0])));
  }, M3.exp = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.exp(ge(o2[0]))));
  }, M3.log = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.log(ge(o2[0]))));
  }, M3.pow = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 2, 2, t5, r3), ge(o2[0]) ** ge(o2[1])));
  }, M3.random = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 0, 0, t5, r3), Math.random()));
  }, M3.sin = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.sin(ge(o2[0]))));
  }, M3.sqrt = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.sqrt(ge(o2[0]))));
  }, M3.tan = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), Math.tan(ge(o2[0]))));
  }, M3.isempty = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => (ae(o2, 1, 1, t5, r3), null === o2[0] || "" === o2[0] || void 0 === o2[0] || o2[0] === O));
  }, M3.boolean = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => {
      ae(o2, 1, 1, t5, r3);
      const i4 = o2[0];
      return Ne(i4);
    });
  }, M3.constrain = function(t5, r3) {
    return b2(t5, r3, (u3, e2, o2) => {
      ae(o2, 3, 3, t5, r3);
      const a5 = ge(o2[1]), s3 = ge(o2[2]);
      if (U(o2[0])) {
        const n7 = [];
        for (const t6 of o2[0]) n7.push(p7(t6, a5, s3));
        return n7;
      }
      if (Q(o2[0])) {
        const n7 = [];
        for (let t6 = 0; t6 < o2[0].length(); t6++) n7.push(p7(o2[0].get(t6), a5, s3));
        return n7;
      }
      return p7(o2[0], a5, s3);
    });
  };
}

// ../../../node_modules/@arcgis/core/arcade/functions/stats.js
function a4(n7, r3) {
  if (1 === r3.length) {
    if (U(r3[0])) return l(n7, r3[0], -1);
    if (Q(r3[0])) return l(n7, r3[0].toArray(), -1);
  }
  return l(n7, r3, -1);
}
function f3(o2, f4) {
  o2.stdev = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("stdev", t5));
  }, o2.variance = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("variance", t5));
  }, o2.average = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("mean", t5));
  }, o2.mean = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("mean", t5));
  }, o2.sum = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("sum", t5));
  }, o2.min = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("min", t5));
  }, o2.max = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("max", t5));
  }, o2.distinct = function(n7, r3) {
    return f4(n7, r3, (n8, r4, t5) => a4("distinct", t5));
  }, o2.count = function(o3, a5) {
    return f4(o3, a5, (f5, c3, m6) => {
      if (ae(m6, 1, 1, o3, a5), U(m6[0]) || G(m6[0])) return m6[0].length;
      if (Q(m6[0])) return m6[0].length();
      throw new a2(o3, r.InvalidParameter, a5);
    });
  };
}

// ../../../node_modules/@arcgis/core/arcade/functions/convertdirection.js
var l3 = (e2) => (n7, t5, r3) => (r3 = r3 || 14, +e2(n7, t5).toFixed(r3));
var d4 = (e2, n7) => e2 + n7;
var m5 = (e2, n7) => e2 * n7;
var g = (e2, n7) => e2 / n7;
var _3 = (e2, n7, t5) => l3(d4)(e2, n7, t5);
var w2 = (e2, n7, t5) => l3(m5)(e2, n7, t5);
var A = (e2, n7, t5) => l3(g)(e2, n7, t5);
var D3 = 360;
var p6 = 400;
var E3 = 2 * Math.PI;
var T2 = 3600;
var S3 = 3240;
var R = 60;
var M2 = 60;
var F2 = 180 * T2 / Math.PI;
var v3 = D3 * R * M2;
var L3 = 90 * T2;
var U2 = 180 * T2;
var N3 = 270 * T2;
var x2 = String.fromCharCode(7501);
var z2 = "°";
function O2(e2) {
  if (false === G(e2)) throw new a2(null, r.InvalidParameter, null);
  return e2;
}
function G2(e2, n7) {
  const t5 = 10 ** n7;
  return Math.round(e2 * t5) / t5;
}
function I2(e2, n7) {
  return e2 % n7;
}
function b(e2) {
  const n7 = parseFloat(e2.toString().replace(Math.trunc(e2).toString(), "0")) * Math.sign(e2);
  if (e2 < 0) {
    return {
      fraction: n7,
      integer: Math.ceil(e2)
    };
  }
  return {
    fraction: n7,
    integer: Math.floor(e2)
  };
}
var H2;
var y3;
var q2;
var k3;
function C3(e2, n7) {
  switch (e2) {
    case H2.north:
      return "SHORT" === n7 ? "N" : "North";
    case H2.east:
      return "SHORT" === n7 ? "E" : "East";
    case H2.south:
      return "SHORT" === n7 ? "S" : "South";
    case H2.west:
      return "SHORT" === n7 ? "W" : "West";
  }
}
function P3(e2, n7) {
  return e2 - Math.floor(e2 / n7) * n7;
}
function Q2(e2) {
  switch (e2) {
    case y3.truncated_degrees:
    case y3.decimal_degrees:
      return D3;
    case y3.radians:
      return E3;
    case y3.gradians:
      return p6;
    case y3.seconds:
      return v3;
    case y3.fractional_degree_minutes:
      return R;
    case y3.fractional_minute_seconds:
      return M2;
    default:
      throw new a2(null, r.LogicError, null, {
        reason: "unsupported evaluations"
      });
  }
}
function j2(e2) {
  switch (e2.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return q2.north_azimuth;
    case "POLAR":
      return q2.polar;
    case "QUADRANT":
      return q2.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return q2.south_azimuth;
  }
  throw new a2(null, r.LogicError, null, {
    reason: "unsupported directionType"
  });
}
function W2(e2) {
  switch (e2.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return y3.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return y3.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return y3.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return y3.gradians;
  }
  throw new a2(null, r.LogicError, null, {
    reason: "unsupported units"
  });
}
!function(e2) {
  e2[e2.north = 0] = "north", e2[e2.east = 1] = "east", e2[e2.south = 2] = "south", e2[e2.west = 3] = "west";
}(H2 || (H2 = {})), function(e2) {
  e2[e2.decimal_degrees = 1] = "decimal_degrees", e2[e2.seconds = 2] = "seconds", e2[e2.degrees_minutes_seconds = 3] = "degrees_minutes_seconds", e2[e2.radians = 4] = "radians", e2[e2.gradians = 5] = "gradians", e2[e2.truncated_degrees = 6] = "truncated_degrees", e2[e2.fractional_degree_minutes = 7] = "fractional_degree_minutes", e2[e2.fractional_minute_seconds = 8] = "fractional_minute_seconds";
}(y3 || (y3 = {})), function(e2) {
  e2[e2.north_azimuth = 1] = "north_azimuth", e2[e2.polar = 2] = "polar", e2[e2.quadrant = 3] = "quadrant", e2[e2.south_azimuth = 4] = "south_azimuth";
}(q2 || (q2 = {})), function(e2) {
  e2[e2.meridian = 0] = "meridian", e2[e2.direction = 1] = "direction";
}(k3 || (k3 = {}));
var Z3 = class _Z {
  constructor(e2, n7, t5) {
    this.m_degrees = e2, this.m_minutes = n7, this.m_seconds = t5;
  }
  getField(e2) {
    switch (e2) {
      case y3.decimal_degrees:
      case y3.truncated_degrees:
        return this.m_degrees;
      case y3.fractional_degree_minutes:
        return this.m_minutes;
      case y3.seconds:
      case y3.fractional_minute_seconds:
        return this.m_seconds;
      default:
        throw new a2(null, r.LogicError, null, {
          reason: "unexpected evaluation"
        });
    }
  }
  static secondsToDMS(e2) {
    const n7 = b(e2).fraction;
    let t5 = b(e2).integer;
    const r3 = Math.floor(t5 / T2);
    t5 -= r3 * T2;
    const s3 = Math.floor(t5 / M2);
    return t5 -= s3 * M2, new _Z(r3, s3, t5 + n7);
  }
  static numberToDms(e2) {
    const n7 = b(e2).fraction, t5 = b(e2).integer, r3 = w2(b(100 * n7).fraction, 100), s3 = b(100 * n7).integer;
    return new _Z(t5, s3, r3);
  }
  format(e2, n7) {
    let t5 = G2(this.m_seconds, n7), r3 = this.m_minutes, s3 = this.m_degrees;
    if (e2 === y3.seconds || e2 === y3.fractional_minute_seconds) M2 <= t5 && (t5 -= M2, ++r3), R <= r3 && (r3 = 0, ++s3), D3 <= s3 && (s3 = 0);
    else if (e2 === y3.fractional_degree_minutes) t5 = 0, r3 = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, s3 = this.m_degrees, R <= r3 && (r3 = 0, ++s3), D3 <= s3 && (s3 = 0);
    else if (e2 === y3.decimal_degrees || e2 === y3.truncated_degrees) {
      const e3 = A(this.m_seconds, T2), n8 = A(this.m_minutes, R);
      s3 = Math.round(this.m_degrees + n8 + e3), r3 = 0, t5 = 0;
    }
    return new _Z(s3, r3, t5);
  }
  static dmsToSeconds(e2, n7, t5) {
    return e2 * T2 + n7 * M2 + t5;
  }
};
var B2 = class {
  constructor(e2, n7, t5) {
    this.meridian = e2, this.angle = n7, this.direction = t5;
  }
  fetchAzimuth(e2) {
    return e2 === k3.meridian ? this.meridian : this.direction;
  }
};
var V2 = class _V {
  constructor(e2) {
    this._angle = e2;
  }
  static createFromAngleAndDirection(e2, n7) {
    return new _V(new J(_V._convertDirectionFormat(e2.extractAngularUnits(y3.seconds), n7, q2.north_azimuth)));
  }
  getAngle(e2) {
    const n7 = this._angle.extractAngularUnits(y3.seconds);
    switch (e2) {
      case q2.north_azimuth:
      case q2.south_azimuth:
      case q2.polar:
        return new J(_V._convertDirectionFormat(n7, q2.north_azimuth, e2));
      case q2.quadrant: {
        const e3 = _V.secondsNorthAzimuthToQuadrant(n7);
        return new J(e3.angle);
      }
    }
  }
  getMeridian(e2) {
    const n7 = this._angle.extractAngularUnits(y3.seconds);
    switch (e2) {
      case q2.north_azimuth:
        return H2.north;
      case q2.south_azimuth:
        return H2.south;
      case q2.polar:
        return H2.east;
      case q2.quadrant:
        return _V.secondsNorthAzimuthToQuadrant(n7).meridian;
    }
  }
  getDirection(e2) {
    const n7 = this._angle.extractAngularUnits(y3.seconds);
    switch (e2) {
      case q2.north_azimuth:
        return H2.east;
      case q2.south_azimuth:
        return H2.west;
      case q2.polar:
        return H2.north;
      case q2.quadrant:
        return _V.secondsNorthAzimuthToQuadrant(n7).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(e2) {
    const n7 = e2 <= L3 || e2 >= N3 ? H2.north : H2.south, t5 = n7 === H2.north ? Math.min(v3 - e2, e2) : Math.abs(e2 - U2), r3 = e2 > U2 ? H2.west : H2.east;
    return new B2(n7, t5, r3);
  }
  static createFromAngleMeridianAndDirection(e2, n7, t5) {
    return new _V(new J(_V.secondsQuadrantToNorthAzimuth(e2.extractAngularUnits(y3.seconds), n7, t5)));
  }
  static secondsQuadrantToNorthAzimuth(e2, n7, t5) {
    return n7 === H2.north ? t5 === H2.east ? e2 : v3 - e2 : t5 === H2.east ? U2 - e2 : U2 + e2;
  }
  static _convertDirectionFormat(e2, r3, s3) {
    let a5 = 0;
    switch (r3) {
      case q2.north_azimuth:
        a5 = e2;
        break;
      case q2.polar:
        a5 = L3 - e2;
        break;
      case q2.quadrant:
        throw new a2(null, r.LogicError, null, {
          reason: "unexpected evaluation"
        });
      case q2.south_azimuth:
        a5 = e2 + U2;
    }
    let i4 = 0;
    switch (s3) {
      case q2.north_azimuth:
        i4 = a5;
        break;
      case q2.polar:
        i4 = L3 - a5;
        break;
      case q2.quadrant:
        throw new a2(null, r.LogicError, null, {
          reason: "unexpected evaluation"
        });
      case q2.south_azimuth:
        i4 = a5 - U2;
    }
    return i4 = I2(i4, v3), i4 < 0 ? v3 + i4 : i4;
  }
};
function X2(e2, r3, s3) {
  let a5 = null;
  switch (r3) {
    case y3.decimal_degrees:
      a5 = w2(e2, T2);
      break;
    case y3.seconds:
      a5 = e2;
      break;
    case y3.gradians:
      a5 = w2(e2, S3);
      break;
    case y3.radians:
      a5 = w2(e2, F2);
      break;
    default:
      throw new a2(null, r.LogicError, null, {
        reason: "unexpected evaluation"
      });
  }
  switch (s3) {
    case y3.decimal_degrees:
      return A(a5, T2);
    case y3.seconds:
      return a5;
    case y3.gradians:
      return A(a5, S3);
    case y3.radians:
      return a5 / F2;
    default:
      throw new a2(null, r.LogicError, null, {
        reason: "unexpected evaluation"
      });
  }
}
var J = class _J {
  constructor(e2) {
    this._seconds = e2;
  }
  static createFromAngleAndUnits(e2, n7) {
    return new _J(X2(e2, n7, y3.seconds));
  }
  extractAngularUnits(e2) {
    return X2(this._seconds, y3.seconds, K2(e2));
  }
  static createFromDegreesMinutesSeconds(e2, n7, t5) {
    return new _J(_3(_3(w2(e2, T2), w2(n7, M2)), t5));
  }
};
function K2(e2) {
  switch (n(e2), e2) {
    case y3.decimal_degrees:
    case y3.truncated_degrees:
    case y3.degrees_minutes_seconds:
      return y3.decimal_degrees;
    case y3.gradians:
      return y3.gradians;
    case y3.fractional_degree_minutes:
      return y3.fractional_degree_minutes;
    case y3.radians:
      return y3.radians;
    case y3.seconds:
    case y3.fractional_minute_seconds:
      return y3.seconds;
  }
}
var Y2 = class _Y {
  constructor(e2, n7, t5, r3) {
    this.view = e2, this.angle = n7, this.merdian = t5, this.direction = r3, this._dms = null, this._formattedDms = null;
  }
  static createFromStringAndBearing(e2, n7, t5) {
    return new _Y(e2, n7.getAngle(t5), n7.getMeridian(t5), n7.getDirection(t5));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return null === this._dms && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return null === this._formattedDms && this._calculateDms(), this._formattedDms;
  }
  _calculateDms() {
    let e2 = null, n7 = y3.truncated_degrees, t5 = 0;
    for (let r3 = 0; r3 < this.view.length; r3++) {
      const s3 = this.view[r3];
      switch (s3) {
        case "m":
          e2 = le(this.view, r3, s3), n7 = n7 === y3.truncated_degrees ? y3.fractional_degree_minutes : n7, r3 = e2.newpos;
          continue;
        case "s":
          e2 = le(this.view, r3, s3), n7 = y3.fractional_minute_seconds, t5 = t5 < e2.rounding ? e2.rounding : t5, r3 = e2.newpos;
          continue;
        default:
          continue;
      }
    }
    this._dms = Z3.secondsToDMS(this.angle.extractAngularUnits(y3.seconds)), this._formattedDms = Z3.secondsToDMS(this.angle.extractAngularUnits(y3.seconds)).format(n7, t5);
  }
};
function $(e2, r3, s3, a5, i4) {
  let o2 = null;
  switch (r3) {
    case y3.decimal_degrees:
    case y3.radians:
    case y3.gradians:
      return o2 = P3(G2(e2.extractAngularUnits(r3), a5), Q2(r3)), o2.toFixed(a5).padStart(s3 + a5 + (a5 > 0 ? 1 : 0), "0");
    case y3.truncated_degrees:
    case y3.fractional_degree_minutes:
      return o2 = P3(i4.fetchFormattedDms().getField(r3), Q2(r3)), o2.toFixed(a5).padStart(s3 + a5 + (a5 > 0 ? 1 : 0), "0");
    case y3.fractional_minute_seconds:
      return o2 = P3(G2(i4.fetchDms().getField(r3), a5), Q2(r3)), o2.toFixed(a5).padStart(s3 + a5 + (a5 > 0 ? 1 : 0), "0");
    default:
      throw new a2(null, r.LogicError, null, {
        reason: "unexpected evaluation"
      });
  }
}
function ee2(e2, r3, s3) {
  if (s3 === q2.quadrant) throw new a2(null, r.LogicError, null, {
    reason: "conversion error"
  });
  if (r3 === y3.degrees_minutes_seconds) {
    const n7 = Z3.numberToDms(e2);
    return V2.createFromAngleAndDirection(J.createFromDegreesMinutesSeconds(n7.m_degrees, n7.m_minutes, n7.m_seconds), s3);
  }
  return V2.createFromAngleAndDirection(J.createFromAngleAndUnits(e2, K2(r3)), s3);
}
function ne(e2) {
  switch (ge(e2)) {
    case 1:
      return {
        first: H2.north,
        second: H2.east
      };
    case 2:
      return {
        first: H2.south,
        second: H2.east
      };
    case 3:
      return {
        first: H2.south,
        second: H2.west
      };
    case 4:
      return {
        first: H2.north,
        second: H2.west
      };
  }
  return null;
}
function te2(e2) {
  switch (e2.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return H2.north;
    case "E":
    case "EAST":
      return H2.east;
    case "S":
    case "SOUTH":
      return H2.south;
    case "W":
    case "WEST":
      return H2.west;
  }
  return null;
}
function re(e2) {
  const r3 = parseFloat(e2);
  if (E2(r3)) {
    if (isNaN(r3)) throw new a2(null, r.LogicError, null, {
      reason: "invalid conversion"
    });
    return r3;
  }
  throw new a2(null, r.LogicError, null, {
    reason: "invalid conversion"
  });
}
function se2(e2, s3, a5) {
  const i4 = a5 === q2.quadrant;
  let o2 = null, c3 = null, u3 = 0, l4 = 0, d5 = 0;
  if (i4) {
    if (e2.length < 2) throw new a2(null, r.LogicError, null, {
      reason: "conversion error"
    });
    d5 = 1;
    const s4 = ne(me(e2[e2.length - 1]));
    if (s4 ? (o2 = s4.first, c3 = s4.second) : (u3 = 1, o2 = te2(me(e2[0])), c3 = te2(me(e2[e2.length - 1]))), null === o2 || null === c3) throw new a2(null, r.LogicError, null, {
      reason: "invalid conversion"
    });
  }
  switch (s3) {
    case y3.decimal_degrees:
    case y3.radians:
    case y3.gradians:
      if (0 === e2.length) throw new a2(null, r.LogicError, null, {
        reason: "invalid conversion"
      });
      return i4 ? V2.createFromAngleMeridianAndDirection(J.createFromAngleAndUnits(re(e2[u3]), K2(s3)), o2, c3) : V2.createFromAngleAndDirection(J.createFromAngleAndUnits(re(e2[u3]), K2(s3)), a5);
    case y3.degrees_minutes_seconds:
      if (l4 = e2.length - d5 - u3, 3 === l4) {
        const n7 = J.createFromDegreesMinutesSeconds(re(e2[u3]), re(e2[u3 + 1]), re(e2[u3 + 2]));
        return i4 ? V2.createFromAngleMeridianAndDirection(n7, o2, c3) : V2.createFromAngleAndDirection(n7, a5);
      }
      if (1 === l4) {
        const n7 = re(e2[u3]), t5 = Z3.numberToDms(n7), r3 = J.createFromDegreesMinutesSeconds(t5.m_degrees, t5.m_minutes, t5.m_seconds);
        return i4 ? V2.createFromAngleMeridianAndDirection(r3, o2, c3) : V2.createFromAngleAndDirection(r3, a5);
      }
  }
  throw new a2(null, r.LogicError, null, {
    reason: "invalid conversion"
  });
}
function ae2(e2) {
  const n7 = /* @__PURE__ */ new Set([" ", "-", "/", "'", '"', "\\", "^", z2, x2, "	", "\r", "\n", "*"]);
  let t5 = "";
  for (let r3 = 0; r3 < e2.length; r3++) {
    const s3 = e2.charAt(r3);
    n7.has(s3) ? t5 += "RRSPLITRRSPLITRR" : t5 += s3;
  }
  return t5.split("RRSPLITRRSPLITRR").filter((e3) => "" !== e3);
}
function ie2(e2, r3, u3) {
  if (E2(e2)) return ee2(ge(e2), r3, u3);
  if (G(e2)) return se2(ae2(e2), r3, u3);
  if (U(e2)) return se2(e2, r3, u3);
  if (Q(e2)) return se2(e2.toArray(), r3, u3);
  throw new a2(null, r.LogicError, null, {
    reason: "conversion error"
  });
}
function oe(e2, r3, s3) {
  const a5 = K2(s3);
  if (a5 && s3 !== y3.degrees_minutes_seconds) {
    return e2.getAngle(r3).extractAngularUnits(a5);
  }
  throw new a2(null, r.LogicError, null, {
    reason: "conversion error"
  });
}
function ce2(e2, n7, t5) {
  const r3 = e2.getAngle(n7);
  if (n7 === q2.quadrant && t5 === y3.degrees_minutes_seconds) {
    const t6 = Z3.secondsToDMS(r3.extractAngularUnits(y3.seconds));
    return [C3(e2.getMeridian(n7), "SHORT"), t6.m_degrees, t6.m_minutes, t6.m_seconds, C3(e2.getDirection(n7), "SHORT")];
  }
  if (t5 === y3.degrees_minutes_seconds) {
    const e3 = Z3.secondsToDMS(r3.extractAngularUnits(y3.seconds));
    return [e3.m_degrees, e3.m_minutes, e3.m_seconds];
  }
  return n7 === q2.quadrant ? [C3(e2.getMeridian(n7), "SHORT"), r3.extractAngularUnits(t5), C3(e2.getDirection(n7), "SHORT")] : [r3.extractAngularUnits(t5)];
}
function ue(e2, r3) {
  let s3 = "";
  switch (e2) {
    case y3.decimal_degrees:
      s3 = r3 === q2.quadrant ? "DD.DD" + z2 : "DDD.DD" + z2;
      break;
    case y3.degrees_minutes_seconds:
      s3 = r3 === q2.quadrant ? "dd" + z2 + ` mm' ss"` : "ddd" + z2 + ` mm' ss.ss"`;
      break;
    case y3.radians:
      s3 = "R.RR";
      break;
    case y3.gradians:
      s3 = "GGG.GG" + x2;
      break;
    default:
      throw new a2(null, r.LogicError, null, {
        reason: "conversion error"
      });
  }
  return r3 === q2.quadrant && (s3 = "p " + s3 + " b"), s3;
}
function le(e2, n7, t5) {
  const r3 = {
    padding: 0,
    rounding: 0,
    newpos: n7
  };
  let s3 = false;
  for (; n7 < e2.length; ) {
    const a5 = e2[n7];
    if (a5 === t5) s3 ? r3.rounding++ : r3.padding++, n7++;
    else {
      if ("." !== a5) break;
      s3 = true, n7++;
    }
  }
  return r3.newpos = n7 - 1, r3;
}
function de(e2, n7, t5) {
  const r3 = {
    escaped: "",
    newpos: n7
  };
  for (n7++; n7 < e2.length; ) {
    const t6 = e2[n7];
    if (n7++, "]" === t6) break;
    r3.escaped += t6;
  }
  return r3.newpos = n7 - 1, r3;
}
function he2(e2, n7, t5) {
  let r3 = "", s3 = null, a5 = null;
  const i4 = Y2.createFromStringAndBearing(n7, e2, t5), o2 = {
    D: y3.decimal_degrees,
    d: y3.truncated_degrees,
    m: y3.fractional_degree_minutes,
    s: y3.fractional_minute_seconds,
    R: y3.radians,
    G: y3.gradians
  };
  for (let c3 = 0; c3 < n7.length; c3++) {
    const u3 = n7[c3];
    switch (u3) {
      case "[":
        s3 = de(n7, c3), r3 += s3.escaped, c3 = s3.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        s3 = le(n7, c3, u3), a5 = e2.getAngle(t5), r3 += $(a5, o2[u3], s3.padding, s3.rounding, i4), c3 = s3.newpos;
        continue;
      case "P":
      case "p":
        r3 += C3(i4.fetchMeridian(), "p" === u3 ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r3 += C3(i4.fetchDirection(), "b" === u3 ? "SHORT" : "LONG");
        continue;
      default:
        r3 += u3;
    }
  }
  return r3;
}
function me2(s3, a5, i4) {
  if (!(a5 instanceof N2)) throw new a2(null, r.InvalidParameter, null);
  if (false === a5.hasField("directionType")) throw new a2(null, r.LogicError, null, {
    reason: "missing directionType"
  });
  if (false === a5.hasField("angleType")) throw new a2(null, r.LogicError, null, {
    reason: "missing angleType"
  });
  const o2 = j2(O2(a5.field("directiontype"))), c3 = ie2(s3, W2(O2(a5.field("angletype"))), o2);
  if (!(i4 instanceof N2)) throw new a2(null, r.InvalidParameter, null);
  if (false === i4.hasField("directionType")) throw new a2(null, r.LogicError, null, {
    reason: "missing directionType"
  });
  if (false === i4.hasField("outputType")) throw new a2(null, r.LogicError, null, {
    reason: "missing angleType"
  });
  const u3 = j2(O2(i4.field("directiontype"))), l4 = i4.hasField("angleType") ? W2(O2(i4.field("angletype"))) : null, d5 = O2(i4.field("outputType")).toUpperCase().trim();
  if (!u3 || !d5) throw new a2(null, r.LogicError, null, {
    reason: "conversion error"
  });
  if (!(l4 || "TEXT" === d5 && i4.hasField("format"))) throw new a2(null, r.LogicError, null, {
    reason: "invalid unit"
  });
  switch (d5) {
    case "VALUE":
      return u3 === q2.quadrant || l4 === y3.degrees_minutes_seconds ? ce2(c3, u3, l4) : oe(c3, u3, l4);
    case "TEXT": {
      let e2 = "";
      return i4.hasField("format") && (e2 = me(i4.field("format"))), null !== e2 && "" !== e2 || (e2 = ue(l4, u3)), he2(c3, e2, u3);
    }
    default:
      throw new a2(null, r.InvalidParameter, null);
  }
}

// ../../../node_modules/@arcgis/core/arcade/functions/string.js
function E4(t5) {
  if ("loaded" === t5.loadStatus && t5.user?.sourceJSON) {
    return t5.user.sourceJSON;
  }
  return null;
}
function q3(t5, e2) {
  return !!t5 && N(t5, e2?.restUrl || "");
}
function K3(t5, e2) {
  if (!t5 || !e2) return t5 === e2;
  if (t5.x === e2.x && t5.y === e2.y) {
    if (t5.hasZ) {
      if (t5.z !== e2.z) return false;
    } else if (e2.hasZ) return false;
    if (t5.hasM) {
      if (t5.m !== e2.m) return false;
    } else if (e2.hasM) return false;
    return true;
  }
  return false;
}
function X3(o2, i4, u3) {
  if (null !== o2) {
    if (U(o2)) {
      if (i4.updateUint8Array([61]), u3.map.has(o2)) {
        const t5 = u3.map.get(o2);
        i4.updateIntArray([61237541 ^ t5]);
      } else {
        u3.map.set(o2, u3.currentLength++);
        for (const t5 of o2) X3(t5, i4, u3);
        u3.map.delete(o2), u3.currentLength--;
      }
      i4.updateUint8Array([199]);
    } else if (Q(o2)) {
      if (i4.updateUint8Array([61]), u3.map.has(o2)) {
        const t5 = u3.map.get(o2);
        i4.updateIntArray([61237541 ^ t5]);
      } else {
        u3.map.set(o2, u3.currentLength++);
        for (const t5 of o2.toArray()) X3(t5, i4, u3);
        u3.map.delete(o2), u3.currentLength--;
      }
      i4.updateUint8Array([199]);
    } else {
      if (X(o2)) return i4.updateIntArray([o2.toNumber()]), void i4.updateUint8Array([241]);
      if (ee(o2)) return i4.updateIntArray([o2.toNumber()]), void i4.updateIntArray([257]);
      if (te(o2)) return i4.updateIntArray([o2.toNumber()]), void i4.updateIntArray([263]);
      if (G(o2)) return i4.updateIntArray([o2.length]), i4.updateWithString(o2), void i4.updateUint8Array([41]);
      if (z(o2)) i4.updateUint8Array([true === o2 ? 1 : 0, 113]);
      else {
        if (E2(o2)) return i4.updateFloatArray([o2]), void i4.updateUint8Array([173]);
        if (o2 instanceof t3) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
        if (o2 instanceof t2) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
        if (!(o2 instanceof N2)) {
          if (H(o2)) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
          if (o2 instanceof _) return i4.updateIntArray([3833836621]), i4.updateIntArray([0]), i4.updateFloatArray([o2.x]), i4.updateIntArray([1]), i4.updateFloatArray([o2.y]), o2.hasZ && (i4.updateIntArray([2]), i4.updateFloatArray([o2.z])), o2.hasM && (i4.updateIntArray([3]), i4.updateFloatArray([o2.m])), i4.updateIntArray([3765347959]), void X3(o2.spatialReference.wkid, i4, u3);
          if (o2 instanceof j) {
            i4.updateIntArray([1266616829]);
            for (let t5 = 0; t5 < o2.rings.length; t5++) {
              const e2 = o2.rings[t5], r3 = [];
              let n7 = null, a5 = null;
              for (let i5 = 0; i5 < e2.length; i5++) {
                const u4 = o2.getPoint(t5, i5);
                if (0 === i5) n7 = u4;
                else if (K3(a5, u4)) continue;
                a5 = u4, i5 === e2.length - 1 && K3(n7, u4) || r3.push(u4);
              }
              i4.updateIntArray([1397116793, r3.length]);
              for (let t6 = 0; t6 < r3.length; t6++) {
                const e3 = r3[t6];
                i4.updateIntArray([3962308117, t6]), X3(e3, i4, u3), i4.updateIntArray([2716288009]);
              }
              i4.updateIntArray([2278822459]);
            }
            return i4.updateIntArray([3878477243]), void X3(o2.spatialReference.wkid, i4, u3);
          }
          if (o2 instanceof m2) {
            i4.updateIntArray([4106883559]);
            for (let t5 = 0; t5 < o2.paths.length; t5++) {
              const e2 = o2.paths[t5];
              i4.updateIntArray([1397116793, e2.length]);
              for (let r3 = 0; r3 < e2.length; r3++) i4.updateIntArray([3962308117, r3]), X3(o2.getPoint(t5, r3), i4, u3), i4.updateIntArray([2716288009]);
              i4.updateIntArray([2278822459]);
            }
            return i4.updateIntArray([2568784753]), void X3(o2.spatialReference.wkid, i4, u3);
          }
          if (o2 instanceof u) {
            i4.updateIntArray([588535921, o2.points.length]);
            for (let t5 = 0; t5 < o2.points.length; t5++) {
              const e2 = o2.getPoint(t5);
              i4.updateIntArray([t5]), X3(e2, i4, u3);
            }
            return i4.updateIntArray([1700171621]), void X3(o2.spatialReference.wkid, i4, u3);
          }
          if (o2 instanceof w) return i4.updateIntArray([3483648373]), i4.updateIntArray([0]), i4.updateFloatArray([o2.xmax]), i4.updateIntArray([1]), i4.updateFloatArray([o2.xmin]), i4.updateIntArray([2]), i4.updateFloatArray([o2.ymax]), i4.updateIntArray([3]), i4.updateFloatArray([o2.ymin]), o2.hasZ && (i4.updateIntArray([4]), i4.updateFloatArray([o2.zmax]), i4.updateIntArray([5]), i4.updateFloatArray([o2.zmin])), o2.hasM && (i4.updateIntArray([6]), i4.updateFloatArray([o2.mmax]), i4.updateIntArray([7]), i4.updateFloatArray([o2.mmin])), i4.updateIntArray([3622027469]), void X3(o2.spatialReference.wkid, i4, u3);
          if (o2 instanceof f) return i4.updateIntArray([14]), void 0 !== o2.wkid && null !== o2.wkid && i4.updateIntArray([o2.wkid]), o2.wkt && i4.updateWithString(o2.wkt), void (o2.wkt2 && i4.updateWithString(o2.wkt2));
          if (_2(o2)) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
          if (B(o2)) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
          if (W(o2)) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
          if (o2 === O) throw new a2(u3.context, r.UnsupportedHashType, u3.node);
          throw new a2(u3.context, r.UnsupportedHashType, u3.node);
        }
        if (i4.updateUint8Array([223]), u3.map.has(o2)) {
          const t5 = u3.map.get(o2);
          i4.updateIntArray([61237541 ^ t5]);
        } else {
          u3.map.set(o2, u3.currentLength++);
          for (const t5 of o2.keys()) {
            i4.updateIntArray([t5.length]), i4.updateWithString(t5), i4.updateUint8Array([251]);
            X3(o2.field(t5), i4, u3), i4.updateUint8Array([239]);
          }
          u3.map.delete(o2), u3.currentLength--;
        }
        i4.updateUint8Array([73]);
      }
    }
  } else i4.updateUint8Array([0, 139]);
}
function Y3(e2, x3) {
  e2.portal = function(e3, r3) {
    return x3(e3, r3, (n7, a5, u3) => (ae(u3, 1, 1, e3, r3), new t2(me(u3[0]))));
  }, e2.typeof = function(t5, e3) {
    return x3(t5, e3, (r3, i4, s3) => {
      ae(s3, 1, 1, t5, e3);
      const l4 = L(s3[0]);
      if ("Unrecognized Type" === l4) throw new a2(t5, r.UnrecognizedType, e3);
      return l4;
    });
  }, e2.trim = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => (ae(a5, 1, 1, t5, e3), me(a5[0]).trim()));
  }, e2.tohex = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 1, 1, t5, e3);
      const i4 = ge(a5[0]);
      return isNaN(i4) ? i4 : i4.toString(16);
    });
  }, e2.upper = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => (ae(a5, 1, 1, t5, e3), me(a5[0]).toUpperCase()));
  }, e2.proper = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 1, 2, t5, e3);
      let u3 = 1;
      2 === a5.length && "firstword" === me(a5[1]).toLowerCase() && (u3 = 2);
      const s3 = /\s/, l4 = me(a5[0]);
      let d5 = "", p7 = true;
      for (let t6 = 0; t6 < l4.length; t6++) {
        let e4 = l4[t6];
        if (s3.test(e4)) 1 === u3 && (p7 = true);
        else {
          e4.toUpperCase() !== e4.toLowerCase() && (p7 ? (e4 = e4.toUpperCase(), p7 = false) : e4 = e4.toLowerCase());
        }
        d5 += e4;
      }
      return d5;
    });
  }, e2.lower = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => (ae(a5, 1, 1, t5, e3), me(a5[0]).toLowerCase()));
  }, e2.guid = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      if (ae(a5, 0, 1, t5, e3), a5.length > 0) switch (me(a5[0]).toLowerCase()) {
        case "digits":
          return n3().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return n3();
        case "digits-hyphen-braces":
          return "{" + n3() + "}";
        case "digits-hyphen-parentheses":
          return "(" + n3() + ")";
      }
      return "{" + n3() + "}";
    });
  }, e2.standardizeguid = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 2, 2, t5, e3);
      let u3 = me(a5[0]);
      if ("" === u3 || null === u3) return "";
      const s3 = /^(\{|\()?(?<partA>[0-9a-z]{8})(-?)(?<partB>[0-9a-z]{4})(-?)(?<partC>[0-9a-z]{4})(-?)(?<partD>[0-9a-z]{4})(-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(u3);
      if (!s3) return "";
      const l4 = s3.groups;
      switch (u3 = l4.partA + "-" + l4.partB + "-" + l4.partC + "-" + l4.partD + "-" + l4.partE, me(a5[1]).toLowerCase()) {
        case "digits":
          return u3.replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return u3;
        case "digits-hyphen-braces":
          return "{" + u3 + "}";
        case "digits-hyphen-parentheses":
          return "(" + u3 + ")";
      }
      return "{" + u3 + "}";
    });
  }, e2.console = function(t5, e3) {
    return x3(t5, e3, (e4, r3, n7) => (0 === n7.length || (1 === n7.length ? t5.console(me(n7[0])) : t5.console(me(n7))), O));
  }, e2.mid = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 2, 3, t5, e3);
      let u3 = ge(a5[1]);
      if (isNaN(u3)) return "";
      if (u3 < 0 && (u3 = 0), 2 === a5.length) return me(a5[0]).substr(u3);
      let l4 = ge(a5[2]);
      return isNaN(l4) ? "" : (l4 < 0 && (l4 = 0), me(a5[0]).substr(u3, l4));
    });
  }, e2.find = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 2, 3, t5, e3);
      let u3 = 0;
      if (a5.length > 2) {
        if (u3 = ge(P(a5[2], 0)), isNaN(u3)) return -1;
        u3 < 0 && (u3 = 0);
      }
      return me(a5[1]).indexOf(me(a5[0]), u3);
    });
  }, e2.left = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 2, 2, t5, e3);
      let u3 = ge(a5[1]);
      return isNaN(u3) ? "" : (u3 < 0 && (u3 = 0), me(a5[0]).substr(0, u3));
    });
  }, e2.right = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 2, 2, t5, e3);
      let u3 = ge(a5[1]);
      return isNaN(u3) ? "" : (u3 < 0 && (u3 = 0), me(a5[0]).substr(-1 * u3, u3));
    });
  }, e2.split = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      let u3;
      ae(a5, 2, 4, t5, e3);
      let l4 = ge(P(a5[2], -1));
      const c3 = Ne(P(a5[3], false));
      if (-1 === l4 || null === l4 || true === c3 ? u3 = me(a5[0]).split(me(a5[1])) : (isNaN(l4) && (l4 = -1), l4 < -1 && (l4 = -1), u3 = me(a5[0]).split(me(a5[1]), l4)), false === c3) return u3;
      const f4 = [];
      for (let t6 = 0; t6 < u3.length && !(-1 !== l4 && f4.length >= l4); t6++) "" !== u3[t6] && void 0 !== u3[t6] && f4.push(u3[t6]);
      return f4;
    });
  }, e2.text = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => (ae(a5, 1, 2, t5, e3), pe(a5[0], a5[1])));
  }, e2.concatenate = function(t5, e3) {
    return x3(t5, e3, (t6, e4, r3) => {
      const n7 = [];
      if (r3.length < 1) return "";
      if (U(r3[0])) {
        const t7 = P(r3[2], "");
        for (let e5 = 0; e5 < r3[0].length; e5++) n7[e5] = pe(r3[0][e5], t7);
        return r3.length > 1 ? n7.join(r3[1]) : n7.join("");
      }
      if (Q(r3[0])) {
        const t7 = P(r3[2], "");
        for (let e5 = 0; e5 < r3[0].length(); e5++) n7[e5] = pe(r3[0].get(e5), t7);
        return r3.length > 1 ? n7.join(r3[1]) : n7.join("");
      }
      for (let a5 = 0; a5 < r3.length; a5++) n7[a5] = pe(r3[a5]);
      return n7.join("");
    });
  }, e2.reverse = function(t5, e3) {
    return x3(t5, e3, (r3, i4, u3) => {
      if (ae(u3, 1, 1, t5, e3), U(u3[0])) {
        const t6 = u3[0].slice(0);
        return t6.reverse(), t6;
      }
      if (Q(u3[0])) {
        const t6 = u3[0].toArray().slice(0);
        return t6.reverse(), t6;
      }
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.replace = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 3, 4, t5, e3);
      const u3 = me(a5[0]), s3 = me(a5[1]), l4 = me(a5[2]);
      return 4 !== a5.length || Ne(a5[3]) ? v(u3, s3, l4) : u3.replace(s3, l4);
    });
  }, e2.schema = function(t5, e3) {
    return x3(t5, e3, (o2, i4, u3) => {
      if (H(u3[0])) {
        const e4 = Be(u3[0]);
        return e4 ? N2.convertObjectToArcadeDictionary(e4, He(t5)) : null;
      }
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.subtypes = function(t5, e3) {
    return x3(t5, e3, (i4, u3, s3) => {
      if (ae(s3, 1, 1, t5, e3), H(s3[0])) {
        const e4 = Ve(s3[0]);
        return e4 ? N2.convertObjectToArcadeDictionary(e4, He(t5)) : null;
      }
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.subtypecode = function(t5, e3) {
    return x3(t5, e3, (r3, i4, u3) => {
      if (ae(u3, 1, 1, t5, e3), H(u3[0])) {
        const t6 = Ve(u3[0]);
        if (!t6) return null;
        if (t6.subtypeField && u3[0].hasField(t6.subtypeField)) {
          const e4 = u3[0].field(t6.subtypeField);
          for (const r4 of t6.subtypes) if (r4.code === e4) return r4.code;
          return null;
        }
        return null;
      }
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.subtypename = function(t5, e3) {
    return x3(t5, e3, (r3, i4, u3) => {
      if (ae(u3, 1, 1, t5, e3), H(u3[0])) {
        const t6 = Ve(u3[0]);
        if (!t6) return "";
        if (t6.subtypeField && u3[0].hasField(t6.subtypeField)) {
          const e4 = u3[0].field(t6.subtypeField);
          for (const r4 of t6.subtypes) if (r4.code === e4) return r4.name;
          return "";
        }
        return "";
      }
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.gdbversion = function(t5, e3) {
    return x3(t5, e3, (r3, i4, u3) => {
      if (ae(u3, 1, 1, t5, e3), H(u3[0])) return u3[0].gdbVersion();
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.domain = function(t5, e3) {
    return x3(t5, e3, (u3, s3, l4) => {
      if (ae(l4, 2, 3, t5, e3), H(l4[0])) {
        const e4 = Ee(l4[0], me(l4[1]), void 0 === l4[2] ? void 0 : l4[2]);
        return e4 && e4.domain ? "coded-value" === e4.domain.type || "codedValue" === e4.domain.type ? N2.convertObjectToArcadeDictionary({
          type: "codedValue",
          name: e4.domain.name,
          dataType: E[e4.field.type],
          codedValues: e4.domain.codedValues.map((t6) => ({
            name: t6.name,
            code: t6.code
          }))
        }, He(t5)) : N2.convertObjectToArcadeDictionary({
          type: "range",
          name: e4.domain.name,
          dataType: E[e4.field.type],
          min: e4.domain.minValue,
          max: e4.domain.maxValue
        }, He(t5)) : null;
      }
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.domainname = function(t5, e3) {
    return x3(t5, e3, (r3, u3, s3) => {
      if (ae(s3, 2, 4, t5, e3), H(s3[0])) return qe(s3[0], me(s3[1]), s3[2], void 0 === s3[3] ? void 0 : s3[3]);
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.domaincode = function(t5, e3) {
    return x3(t5, e3, (r3, u3, s3) => {
      if (ae(s3, 2, 4, t5, e3), H(s3[0])) return Ue(s3[0], me(s3[1]), s3[2], void 0 === s3[3] ? void 0 : s3[3]);
      throw new a2(t5, r.InvalidParameter, e3);
    });
  }, e2.urlencode = function(t5, e3) {
    return x3(t5, e3, (n7, a5, u3) => {
      if (ae(u3, 1, 1, t5, e3), null === u3[0]) return "";
      if (u3[0] instanceof N2) {
        let t6 = "";
        for (const e4 of u3[0].keys()) {
          const r3 = u3[0].field(e4);
          "" !== t6 && (t6 += "&"), t6 += null === r3 ? encodeURIComponent(e4) + "=" : encodeURIComponent(e4) + "=" + encodeURIComponent(r3);
        }
        return t6;
      }
      return encodeURIComponent(me(u3[0]));
    });
  }, e2.hash = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => {
      ae(a5, 1, 1, t5, e3);
      const i4 = new i2(0);
      return X3(a5[0], i4, {
        context: t5,
        node: e3,
        map: /* @__PURE__ */ new Map(),
        currentLength: 0
      }), i4.digest();
    });
  }, e2.convertdirection = function(t5, e3) {
    return x3(t5, e3, (r3, n7, a5) => (ae(a5, 3, 3, t5, e3), me2(a5[0], a5[1], a5[2])));
  }, e2.fromjson = function(t5, e3) {
    return x3(t5, e3, (u3, s3, l4) => {
      if (ae(l4, 1, 1, t5, e3), false === G(l4[0])) throw new a2(t5, r.InvalidParameter, e3);
      return N2.convertJsonToArcade(JSON.parse(me(l4[0])), He(t5));
    });
  }, e2.expects = function(t5, e3) {
    return x3(t5, e3, (r3, o2, i4) => {
      if (i4.length < 1) throw new a2(t5, r.WrongNumberOfParameters, e3);
      return O;
    });
  }, e2.tocharcode = function(t5, e3) {
    return x3(t5, e3, (r3, u3, l4) => {
      ae(l4, 1, 2, t5, e3);
      const p7 = ge(P(l4[1], 0)), c3 = me(l4[0]);
      if (0 === c3.length && 1 === l4.length) return null;
      if (c3.length <= p7 || p7 < 0) throw new a2(t5, r.OutOfBounds, e3);
      return c3.charCodeAt(p7);
    });
  }, e2.tocodepoint = function(t5, e3) {
    return x3(t5, e3, (r3, u3, l4) => {
      ae(l4, 1, 2, t5, e3);
      const p7 = ge(P(l4[1], 0)), c3 = me(l4[0]);
      if (0 === c3.length && 1 === l4.length) return null;
      if (c3.length <= p7 || p7 < 0) throw new a2(t5, r.OutOfBounds, e3);
      return c3.codePointAt(p7);
    });
  }, e2.fromcharcode = function(t5, e3) {
    return x3(t5, e3, (r3, o2, i4) => {
      if (i4.length < 1) throw new a2(t5, r.WrongNumberOfParameters, e3);
      const u3 = i4.map((t6) => Math.trunc(ge(t6))).filter((t6) => t6 >= 0 && t6 <= 65535);
      return 0 === u3.length ? null : String.fromCharCode.apply(null, u3);
    });
  }, e2.fromcodepoint = function(t5, e3) {
    return x3(t5, e3, (r3, o2, i4) => {
      if (i4.length < 1) throw new a2(t5, r.WrongNumberOfParameters, e3);
      let u3;
      try {
        u3 = i4.map((t6) => Math.trunc(ge(t6))).filter((t6) => t6 <= 1114111 && t6 >>> 0 === t6);
      } catch (l4) {
        return null;
      }
      return 0 === u3.length ? null : String.fromCodePoint.apply(null, u3);
    });
  }, e2.getuser = function(e3, u3) {
    return x3(e3, u3, (s3, l4, p7) => {
      ae(p7, 0, 2, e3, u3);
      let c3 = P(p7[1], "");
      if (c3 = true === c3 || false === c3 ? "" : me(c3), null !== c3 && "" !== c3) return null;
      if (0 === p7.length || p7[0] instanceof t2) {
        let t5 = null;
        if (t5 = e3.services?.portal ? e3.services.portal : C.getDefault(), p7.length > 0) {
          if (!q3(p7[0].field("url"), t5)) return null;
        }
        if (!t5) return null;
        if ("" === c3) {
          const n7 = E4(t5);
          if (n7) {
            const t6 = JSON.parse(JSON.stringify(n7));
            for (const e4 of ["lastLogin", "created", "modified"]) void 0 !== t6[e4] && null !== t6[e4] && (t6[e4] = new Date(t6[e4]));
            return N2.convertObjectToArcadeDictionary(t6, He(e3));
          }
        }
        return null;
      }
      throw new a2(e3, r.InvalidParameter, u3);
    });
  }, e2.getenvironment = function(t5, e3) {
    return x3(t5, e3, (n7, a5, i4) => (ae(i4, 0, 0, t5, e3), N2.convertObjectToArcadeDictionary(Ke(He(t5), t5.spatialReference), He(t5), true)));
  };
}

export {
  s,
  d2 as d,
  p2 as p,
  o,
  c2 as c,
  x,
  p3 as p2,
  l2 as l,
  u2 as u,
  y2 as y,
  d3 as d2,
  p4 as p3,
  C2 as C,
  L2 as L,
  M,
  f3 as f,
  Y3 as Y
};
//# sourceMappingURL=chunk-2JTHDRHI.js.map
