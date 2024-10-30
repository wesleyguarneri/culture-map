import {
  j as j2,
  p as p4
} from "./chunk-M6OMH2UP.js";
import {
  p as p3
} from "./chunk-Q7ENCKPJ.js";
import {
  p as p2
} from "./chunk-OHXCVJMH.js";
import {
  I,
  _ as _2,
  o as o2
} from "./chunk-VS26W5Y5.js";
import {
  n as n4,
  r as r2
} from "./chunk-DY7FJHTG.js";
import {
  s as s3
} from "./chunk-JYODC3YQ.js";
import {
  e as e3,
  t
} from "./chunk-TYQXPPSP.js";
import {
  l
} from "./chunk-CIW3KHOW.js";
import {
  V as V2
} from "./chunk-DUTZNK67.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  i
} from "./chunk-HT2T6PUB.js";
import {
  c as c2
} from "./chunk-7ZJ6P7J7.js";
import {
  n as n3
} from "./chunk-5I6J67HP.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  U as U2,
  m as m2,
  p,
  y as y2
} from "./chunk-U2ZVAEKG.js";
import {
  j
} from "./chunk-T6GCUITX.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  M,
  s as s2
} from "./chunk-3ZXOUEQG.js";
import {
  u as u2
} from "./chunk-POILQGXA.js";
import {
  U,
  V,
  Y,
  Z,
  tt,
  ut
} from "./chunk-SYATLP3H.js";
import {
  f,
  u2 as u
} from "./chunk-V6AMQYXE.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  e,
  n2
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  c
} from "./chunk-HJY2YILU.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/GeoreferenceBase.js
var c3 = class extends l {
  projectOrWarn(e4, r3) {
    if (null == e4) return e4;
    const {
      geometry: t2,
      pending: c4
    } = V2(e4, r3);
    return c4 ? null : c4 || t2 ? t2 : (n.getLogger(this).warn("geometry could not be projected to the spatial reference", {
      georeference: this,
      geometry: e4,
      sourceSpatialReference: e4.spatialReference,
      targetSpatialReference: r3
    }), null);
  }
};
c3 = e2([a("esri.layers.support.GeoreferenceBase")], c3);
var a2 = c3;

// ../../../node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js
var S2 = e3();
var N = n4();
var T = class extends f {
};
e2([y({
  type: Number,
  json: {
    write: true
  }
})], T.prototype, "x", void 0), e2([y({
  type: Number,
  json: {
    write: true
  }
})], T.prototype, "y", void 0), T = e2([a("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")], T);
var _3 = class extends l {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
e2([y()], _3.prototype, "sourcePoint", void 0), e2([y({
  type: _
})], _3.prototype, "mapPoint", void 0), _3 = e2([a("esri.layers.support.ControlPointsGeoreference.ControlPoint")], _3);
var O = class extends u(a2) {
  constructor(o3) {
    super(o3), this.controlPoints = null, this.height = 0, this.type = "control-points", this.width = 0;
  }
  readControlPoints(o3, t2) {
    const r3 = f2.fromJSON(t2.spatialReference), e4 = t(...t2.coefficients, 1);
    return o3.map((o4) => (o2(N, o4.x, o4.y), p4(N, N, e4), {
      sourcePoint: o4,
      mapPoint: new _({
        x: N[0],
        y: N[1],
        spatialReference: r3
      })
    }));
  }
  writeControlPoints(o3, t2, e4, n5) {
    if (null != this.transform) null != o3 && G(o3[0]) && (t2.controlPoints = o3.map((o4) => {
      const t3 = o4.sourcePoint;
      return {
        x: t3.x,
        y: t3.y
      };
    }), t2.spatialReference = o3[0].mapPoint.spatialReference.toJSON(), t2.coefficients = this.transform.slice(0, 8));
    else {
      const o4 = new s("web-document-write:invalid-georeference", "Invalid 'controlPoints', 'width', 'height' configuration.", {
        layer: n5?.layer,
        georeference: this
      });
      n5?.messages ? n5.messages.push(o4) : n.getLogger(this).error(o4.name, o4.message);
    }
  }
  get coords() {
    if (null == this.controlPoints) return null;
    const o3 = this._updateTransform(S2);
    if (null == o3 || !G(this.controlPoints[0])) return null;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return Q(o3, this.width, this.height, t2);
  }
  set coords(o3) {
    if (null == this.controlPoints || !G(this.controlPoints[0])) return;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    if (null == (o3 = this.projectOrWarn(o3, t2))) return;
    const {
      width: r3,
      height: e4
    } = this, {
      rings: [[n5, i2, l2, a4]]
    } = o3, p6 = {
      sourcePoint: c2(0, e4),
      mapPoint: new _({
        x: n5[0],
        y: n5[1],
        spatialReference: t2
      })
    }, u5 = {
      sourcePoint: c2(0, 0),
      mapPoint: new _({
        x: i2[0],
        y: i2[1],
        spatialReference: t2
      })
    }, m4 = {
      sourcePoint: c2(r3, 0),
      mapPoint: new _({
        x: l2[0],
        y: l2[1],
        spatialReference: t2
      })
    }, f4 = {
      sourcePoint: c2(r3, e4),
      mapPoint: new _({
        x: a4[0],
        y: a4[1],
        spatialReference: t2
      })
    };
    G(p6) && G(u5) && G(m4) && G(f4) && (W(S2, p6, u5, m4, f4), this.controlPoints = this.controlPoints.map(({
      sourcePoint: o4
    }) => (o2(N, o4.x, o4.y), p4(N, N, S2), {
      sourcePoint: o4,
      mapPoint: new _({
        x: N[0],
        y: N[1],
        spatialReference: t2
      })
    })));
  }
  get inverseTransform() {
    return null == this.transform ? null : s3(e3(), this.transform);
  }
  get transform() {
    return this._updateTransform();
  }
  toMap(o3) {
    if (null == o3 || null == this.transform || null == this.controlPoints || !G(this.controlPoints[0])) return null;
    o2(N, o3.x, o3.y);
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return p4(N, N, this.transform), new _({
      x: N[0],
      y: N[1],
      spatialReference: t2
    });
  }
  toSource(o3) {
    if (null == o3 || null == this.inverseTransform || null == this.controlPoints || !G(this.controlPoints[0])) return null;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return o3 = o3.normalize(), null == (o3 = V2(o3, t2).geometry) ? null : (o2(N, o3.x, o3.y), p4(N, N, this.inverseTransform), c2(N[0], N[1]));
  }
  toSourceNormalized(o3) {
    const t2 = this.toSource(o3);
    return null != t2 && (t2.x /= this.width, t2.y /= this.height), t2;
  }
  _updateTransform(o3) {
    const {
      controlPoints: t2,
      width: r3,
      height: e4
    } = this;
    if (!(null != t2 && r3 > 0 && e4 > 0)) return null;
    const [n5, i2, s5, l2] = t2;
    if (!G(n5)) return null;
    const c4 = n5.mapPoint.spatialReference, a4 = this._projectControlPoint(i2, c4), p6 = this._projectControlPoint(s5, c4), u5 = this._projectControlPoint(l2, c4);
    if (!a4.valid || !p6.valid || !u5.valid) return null;
    if (!G(a4.controlPoint)) return null;
    null == o3 && (o3 = e3());
    let m4 = null;
    return m4 = G(p6.controlPoint) && G(u5.controlPoint) ? W(o3, n5, a4.controlPoint, p6.controlPoint, u5.controlPoint) : G(p6.controlPoint) ? V3(o3, n5, a4.controlPoint, p6.controlPoint) : E(o3, n5, a4.controlPoint), m4.every((o4) => 0 === o4) ? null : m4;
  }
  _projectControlPoint(o3, t2) {
    if (!G(o3)) return {
      valid: true,
      controlPoint: o3
    };
    const {
      sourcePoint: r3,
      mapPoint: e4
    } = o3, {
      geometry: n5,
      pending: s5
    } = V2(e4, t2);
    return s5 ? {
      valid: false,
      controlPoint: null
    } : s5 || n5 ? {
      valid: true,
      controlPoint: {
        sourcePoint: r3,
        mapPoint: n5
      }
    } : (n.getLogger(this).warn("map point could not be projected to the spatial reference", {
      georeference: this,
      controlPoint: o3,
      sourceSpatialReference: e4.spatialReference,
      targetSpatialReference: t2
    }), {
      valid: false,
      controlPoint: null
    });
  }
};
function G(o3) {
  return null != o3?.sourcePoint && null != o3.mapPoint;
}
e2([y({
  type: [_3],
  json: {
    write: {
      allowNull: false,
      isRequired: true,
      target: {
        controlPoints: {
          type: [T]
        },
        coefficients: {
          type: [Number]
        },
        spatialReference: {
          type: f2
        }
      }
    }
  }
})], O.prototype, "controlPoints", void 0), e2([o("controlPoints")], O.prototype, "readControlPoints", null), e2([r("controlPoints")], O.prototype, "writeControlPoints", null), e2([y({
  clonable: false
})], O.prototype, "coords", null), e2([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], O.prototype, "height", void 0), e2([y({
  readOnly: true
})], O.prototype, "inverseTransform", null), e2([y({
  readOnly: true
})], O.prototype, "transform", null), e2([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], O.prototype, "width", void 0), O = e2([a("esri.layers.support.ControlPointsGeoreference")], O);
var I2 = n4();
var J = n4();
var L = n4();
var M2 = n4();
var z = n4();
var A = n4();
var U3 = n4();
var k = n4();
var q = Math.PI / 2;
function B(o3, t2, r3) {
  o2(o3, r3.sourcePoint.x, r3.sourcePoint.y), o2(t2, r3.mapPoint.x, r3.mapPoint.y);
}
function E(o3, t2, r3) {
  return B(I2, z, t2), B(J, A, r3), I(L, J, I2, q), I(M2, I2, J, q), I(U3, A, z, -q), I(k, z, A, -q), K(o3, I2, J, L, M2, z, A, U3, k);
}
function V3(o3, t2, r3, e4) {
  return B(I2, z, t2), B(J, A, r3), B(L, U3, e4), _2(M2, I2, J, 0.5), I(M2, L, M2, Math.PI), _2(k, z, A, 0.5), I(k, U3, k, Math.PI), K(o3, I2, J, L, M2, z, A, U3, k);
}
function W(o3, t2, r3, e4, n5) {
  return B(I2, z, t2), B(J, A, r3), B(L, U3, e4), B(M2, k, n5), K(o3, I2, J, L, M2, z, A, U3, k);
}
var D = new Array(8).fill(0);
var F = new Array(8).fill(0);
function H(o3, t2, r3, e4, n5) {
  return o3[0] = t2[0], o3[1] = t2[1], o3[2] = r3[0], o3[3] = r3[1], o3[4] = e4[0], o3[5] = e4[1], o3[6] = n5[0], o3[7] = n5[1], o3;
}
function K(o3, t2, r3, e4, n5, i2, s5, c4, a4) {
  return j2(o3, H(D, t2, r3, e4, n5), H(F, i2, s5, c4, a4));
}
function Q(o3, t2, r3, e4) {
  const n5 = r2(0, r3), i2 = r2(0, 0), l2 = r2(t2, 0), c4 = r2(t2, r3);
  return p4(n5, n5, o3), p4(i2, i2, o3), p4(l2, l2, o3), p4(c4, c4, o3), new j({
    rings: [[n5, i2, l2, c4, n5]],
    spatialReference: e4
  });
}
var X = O;

// ../../../node_modules/@arcgis/core/layers/support/mediaUtils.js
function m3(e4) {
  return "media" === e4?.type;
}
function f3(e4, o3) {
  const i2 = n2(o3);
  return m3(e4) && !!e4.portalItem && null != i2 && i2 > e.PORTAL_ITEM;
}
function y3(t2, n5, o3) {
  if (!t2 || "control-points" === t2.type) return t2;
  const {
    coords: r3
  } = t2;
  if (5 !== r3?.rings[0]?.length) return null;
  const [c4, a4, p6, l2] = r3.rings[0], {
    spatialReference: m4
  } = r3;
  return new X({
    controlPoints: [{
      mapPoint: new _({
        x: c4[0],
        y: c4[1],
        spatialReference: m4
      }),
      sourcePoint: c2(0, o3)
    }, {
      mapPoint: new _({
        x: a4[0],
        y: a4[1],
        spatialReference: m4
      }),
      sourcePoint: c2(0, 0)
    }, {
      mapPoint: new _({
        x: p6[0],
        y: p6[1],
        spatialReference: m4
      }),
      sourcePoint: c2(n5, 0)
    }, {
      mapPoint: new _({
        x: l2[0],
        y: l2[1],
        spatialReference: m4
      }),
      sourcePoint: c2(n5, o3)
    }],
    width: n5,
    height: o3
  });
}

// ../../../node_modules/@arcgis/core/layers/support/CornersGeoreference.js
var u3 = n4();
var y4 = class extends a2 {
  constructor(t2) {
    super(t2), this.bottomLeft = null, this.bottomRight = null, this.topLeft = null, this.topRight = null, this.type = "corners";
  }
  get coords() {
    let {
      topLeft: t2,
      topRight: o3,
      bottomLeft: e4,
      bottomRight: r3
    } = this;
    if (null == t2 || null == o3 || null == e4 || null == r3) return null;
    const s5 = t2.spatialReference;
    return o3 = this.projectOrWarn(o3, s5), e4 = this.projectOrWarn(e4, s5), r3 = this.projectOrWarn(r3, s5), null == o3 || null == e4 || null == r3 ? null : new j({
      rings: [[[e4.x, e4.y], [t2.x, t2.y], [o3.x, o3.y], [r3.x, r3.y], [e4.x, e4.y]]],
      spatialReference: s5
    });
  }
  set coords(t2) {
    const {
      topLeft: o3
    } = this;
    if (null == o3) return;
    const e4 = o3.spatialReference;
    if (null == (t2 = this.projectOrWarn(t2, e4))) return;
    const {
      rings: [[r3, s5, i2, l2]]
    } = t2;
    this.bottomLeft = new _({
      x: r3[0],
      y: r3[1],
      spatialReference: e4
    }), this.topLeft = new _({
      x: s5[0],
      y: s5[1],
      spatialReference: e4
    }), this.topRight = new _({
      x: i2[0],
      y: i2[1],
      spatialReference: e4
    }), this.bottomRight = new _({
      x: l2[0],
      y: l2[1],
      spatialReference: e4
    });
  }
  toSourceNormalized(t2) {
    const {
      topLeft: s5,
      topRight: i2,
      bottomRight: p6,
      bottomLeft: c4
    } = this;
    if (null == t2 || null == s5 || null == i2 || null == p6 || null == c4) return null;
    const m4 = s5.spatialReference;
    t2 = t2.normalize();
    const f4 = V2(t2, m4).geometry;
    if (null == f4) return null;
    o2(u3, f4.x, f4.y);
    const y6 = j2(e3(), [s5.x, s5.y, c4.x, c4.y, i2.x, i2.y, p6.x, p6.y], [0, 0, 0, 1, 1, 0, 1, 1]);
    return p4(u3, u3, y6), c2(u3[0], u3[1]);
  }
};
e2([y({
  clonable: false
})], y4.prototype, "coords", null), e2([y({
  type: _
})], y4.prototype, "bottomLeft", void 0), e2([y({
  type: _
})], y4.prototype, "bottomRight", void 0), e2([y({
  type: _
})], y4.prototype, "topLeft", void 0), e2([y({
  type: _
})], y4.prototype, "topRight", void 0), y4 = e2([a("esri.layers.support.CornersGeoreference")], y4);
var h = y4;

// ../../../node_modules/@arcgis/core/layers/support/ExtentAndRotationGeoreference.js
var p5 = class extends a2 {
  constructor(t2) {
    super(t2), this.extent = null, this.rotation = 0, this.type = "extent-and-rotation";
  }
  get coords() {
    if (null == this.extent) return null;
    const {
      xmin: t2,
      ymin: e4,
      xmax: r3,
      ymax: o3,
      spatialReference: n5
    } = this.extent;
    let s5;
    if (this.rotation) {
      const {
        x: n6,
        y: i2
      } = this.extent.center, a4 = x(n6, i2, this.rotation);
      s5 = [a4(t2, e4), a4(t2, o3), a4(r3, o3), a4(r3, e4)], s5.push(s5[0]);
    } else s5 = [[t2, e4], [t2, o3], [r3, o3], [r3, e4], [t2, e4]];
    return new j({
      rings: [s5],
      spatialReference: n5
    });
  }
  set coords(t2) {
    if (null == t2 || null == this.extent) return;
    const r3 = this.extent.spatialReference;
    if (t2 = this.projectOrWarn(t2, r3), null == t2?.extent) return;
    const {
      rings: [[o3, n5, s5]],
      extent: {
        center: {
          x: i2,
          y: c4
        }
      }
    } = t2, m4 = M(Math.PI / 2 - Math.atan2(n5[1] - o3[1], n5[0] - o3[0])), l2 = x(i2, c4, -m4), [p6, u5] = l2(o3[0], o3[1]), [f4, h3] = l2(s5[0], s5[1]);
    this.extent = new w({
      xmin: p6,
      ymin: u5,
      xmax: f4,
      ymax: h3,
      spatialReference: r3
    }), this.rotation = m4;
  }
  toSourceNormalized(t2) {
    const {
      extent: e4,
      rotation: n5
    } = this;
    if (null == t2 || null == e4) return null;
    const {
      xmin: s5,
      ymin: i2,
      xmax: a4,
      ymax: c4,
      center: l2,
      spatialReference: p6
    } = e4;
    t2 = t2.normalize();
    const u5 = V2(t2, p6).geometry;
    if (null == u5) return null;
    let f4 = u5.x, h3 = u5.y;
    return n5 && ([f4, h3] = x(l2.x, l2.y, -n5)(f4, h3)), c2(s2(f4, s5, a4, 0, 1), s2(h3, c4, i2, 0, 1));
  }
};
function x(t2, e4, r3) {
  const o3 = u2(r3), n5 = Math.cos(o3), s5 = Math.sin(o3);
  return (r4, o4) => [n5 * (r4 - t2) + s5 * (o4 - e4) + t2, n5 * (o4 - e4) - s5 * (r4 - t2) + e4];
}
e2([y({
  clonable: false
})], p5.prototype, "coords", null), e2([y({
  type: w
})], p5.prototype, "extent", void 0), e2([y({
  type: Number
})], p5.prototype, "rotation", void 0), p5 = e2([a("esri.layers.support.ExtentAndRotationGeoreference")], p5);
var u4 = p5;

// ../../../node_modules/@arcgis/core/layers/support/MediaElementBase.js
var y5 = {
  key: "type",
  base: a2,
  typeMap: {
    "control-points": X,
    corners: h,
    "extent-and-rotation": u4
  }
};
var g = {
  key: "type",
  base: a2,
  typeMap: {
    "control-points": X
  }
};
var h2 = class extends i(S(m)) {
  constructor(e4) {
    super(e4), this.georeference = null, this.opacity = 1;
  }
  readGeoreference(e4) {
    return X.fromJSON(e4);
  }
  writeGeoreference(e4, o3, t2, n5) {
    const i2 = n5?.resources?.pendingOperations, c4 = () => {
      const i3 = y3(this.georeference, this.contentWidth, this.contentHeight);
      if (i3) {
        if ("control-points" !== e4.type && n.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e4.type}' has been automatically converted.`), 4 !== i3.controlPoints?.length && n5?.messages) return void n5.messages.push(new s("property:unsupported", "only 'control-points' georeference with 4 control points may be persisted."));
        o3[t2] = i3.write({}, n5);
      }
    };
    if ("control-points" !== e4.type && !this.loaded && i2) return o3[t2] = {}, void i2.push(this.load().then(c4));
    c4();
  }
  get contentWidth() {
    return 0;
  }
  get contentHeight() {
    return 0;
  }
  toSource(e4) {
    const {
      georeference: r3,
      contentWidth: o3,
      contentHeight: t2
    } = this;
    if (null == e4 || null == r3 || 0 === o3 || 0 === t2) return null;
    const s5 = r3.toSourceNormalized(e4);
    return null == s5 ? null : (s5.x *= o3, s5.y *= t2, s5);
  }
};
e2([y({
  types: y5,
  json: {
    write: true,
    types: g
  }
})], h2.prototype, "georeference", void 0), e2([o("georeference")], h2.prototype, "readGeoreference", null), e2([r("georeference")], h2.prototype, "writeGeoreference", null), e2([y({
  json: {
    read: false,
    write: false
  }
})], h2.prototype, "opacity", void 0), h2 = e2([a("esri.layers.support.MediaElementBase")], h2);
var j3 = h2;

// ../../../node_modules/@arcgis/core/layers/support/ImageElement.js
var w2 = class extends j3 {
  constructor(e4) {
    super(e4), this.animationOptions = null, this.content = null, this.image = null, this.type = "image", this.image = null;
  }
  load() {
    const e4 = this.image;
    if ("string" == typeof e4) {
      const t2 = p2(e4).then((e5) => {
        this._set("content", e5);
      });
      this.addResolvingPromise(t2);
    } else if (e4 instanceof HTMLImageElement) {
      const t2 = e4.decode().then(() => {
        this._set("content", e4);
      });
      this.addResolvingPromise(t2);
    } else e4 ? this._set("content", e4) : this.addResolvingPromise(Promise.reject(new s("image-element:invalid-image-type", "Invalid image type", {
      image: e4
    })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return null == this.content ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalWidth : this.content.width;
  }
  get contentHeight() {
    return null == this.content ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalHeight : this.content.height;
  }
  readImage(e4, t2, r3) {
    return p(t2.url, r3);
  }
  writeImage(e4, t2, r3, o3) {
    if (null == e4) return;
    const n5 = o3?.portalItem, s5 = o3?.resources;
    if (!n5 || !s5) return void ("string" == typeof e4 && (t2[r3] = m2(e4, o3)));
    const a4 = E2(e4) ? e4 : null;
    if (a4) {
      if (null == U2(a4)) return void (t2[r3] = a4);
      const e5 = m2(a4, __spreadProps(__spreadValues({}, o3), {
        verifyItemRelativeUrls: o3?.verifyItemRelativeUrls ? {
          writtenUrls: o3.verifyItemRelativeUrls.writtenUrls,
          rootPath: void 0
        } : void 0
      }), y2.NO);
      if (n5 && e5 && !Y(e5)) return s5.toKeep.push({
        resource: n5.resourceFromPath(e5),
        compress: false
      }), void (t2[r3] = e5);
    }
    t2[r3] = "<pending>", s5.pendingOperations.push(H2(e4).then((e5) => {
      const o4 = U4(e5, n5);
      t2[r3] = o4.itemRelativeUrl, s5.toAdd.push({
        resource: o4,
        content: {
          type: "blob",
          blob: e5
        },
        compress: false,
        finish: (e6) => {
          this.image = e6.url;
        }
      });
    }));
  }
  write(e4, t2) {
    const r3 = super.write(e4, t2);
    return "mediaType" in r3 && !r3.url && delete r3.mediaType, r3;
  }
};
e2([y()], w2.prototype, "animationOptions", void 0), e2([y({
  readOnly: true
})], w2.prototype, "content", void 0), e2([y({
  readOnly: true
})], w2.prototype, "contentWidth", null), e2([y({
  readOnly: true
})], w2.prototype, "contentHeight", null), e2([y({
  json: {
    name: "url",
    type: String,
    write: {
      overridePolicy: (e4, t2, r3) => ({
        enabled: !f3(r3?.layer, r3?.origin)
      })
    }
  }
})], w2.prototype, "image", void 0), e2([o("image", ["url"])], w2.prototype, "readImage", null), e2([r("image")], w2.prototype, "writeImage", null), e2([y({
  readOnly: true,
  json: {
    read: false,
    write: {
      target: "mediaType",
      ignoreOrigin: true
    }
  }
})], w2.prototype, "type", void 0), w2 = e2([a("esri.layers.support.ImageElement")], w2);
var b = w2;
function E2(e4) {
  return "string" == typeof e4 && !tt(e4) && !Z(e4);
}
function H2(e4) {
  return __async(this, null, function* () {
    if ("string" == typeof e4) {
      if (tt(e4)) return ut(e4);
      return (yield U(e4, {
        responseType: "blob"
      })).data;
    }
    return new Promise((t2) => T2(e4).toBlob(t2));
  });
}
function T2(e4) {
  if (e4 instanceof HTMLCanvasElement) return e4;
  const t2 = e4 instanceof HTMLImageElement ? e4.naturalWidth : e4.width, r3 = e4 instanceof HTMLImageElement ? e4.naturalHeight : e4.height, o3 = document.createElement("canvas"), i2 = o3.getContext("2d");
  return o3.width = t2, o3.height = r3, e4 instanceof HTMLImageElement ? i2.drawImage(e4, 0, 0, e4.width, e4.height) : e4 instanceof ImageData && i2.putImageData(e4, 0, 0), o3;
}
function U4(e4, t2) {
  const r3 = n3(), o3 = `${V("media", r3)}.${p3({
    type: "blob",
    blob: e4
  })}`;
  return t2.resourceFromPath(o3);
}

// ../../../node_modules/@arcgis/core/layers/support/VideoElement.js
var d = class extends j3 {
  constructor(e4) {
    super(e4), this.autoplay = true, this.content = null, this.type = "video";
  }
  load() {
    const e4 = this.video;
    if ("string" == typeof e4) {
      const o3 = document.createElement("video");
      o3.src = e4, o3.crossOrigin = "anonymous", o3.autoplay = true, o3.muted = true, o3.loop = true, o3.playsInline = true, this.addResolvingPromise(this._loadVideo(o3).then(() => {
        this._set("content", o3);
      }));
    } else e4 instanceof HTMLVideoElement ? this.addResolvingPromise(this._loadVideo(e4).then(() => {
      this._set("content", e4);
    })) : this.addResolvingPromise(Promise.reject(new s("video-element:invalid-video-type", "Invalid video type", {
      video: e4
    })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return this.content?.videoWidth ?? 0;
  }
  get contentHeight() {
    return this.content?.videoHeight ?? 0;
  }
  set video(e4) {
    "not-loaded" === this.loadStatus ? this._set("video", e4) : n.getLogger(this).error("#video", "video cannot be changed after the element is loaded.");
  }
  _loadVideo(e4) {
    return new Promise((o3, s5) => {
      const r3 = c(e4, "canplay", () => {
        this.removeHandles("canplay"), this.autoplay ? e4.play().then(o3, s5) : o3();
      });
      this.addHandles(r3, "canplay"), "anonymous" !== e4.crossOrigin && (e4.crossOrigin = "anonymous", e4.src?.includes("blob:") || (e4.src = e4.src));
    });
  }
};
e2([y()], d.prototype, "autoplay", void 0), e2([y({
  readOnly: true
})], d.prototype, "content", void 0), e2([y({
  readOnly: true
})], d.prototype, "contentWidth", null), e2([y({
  readOnly: true
})], d.prototype, "contentHeight", null), e2([y()], d.prototype, "video", null), d = e2([a("esri.layers.support.VideoElement")], d);
var a3 = d;

export {
  X,
  f3 as f,
  j3 as j,
  b,
  a3 as a
};
//# sourceMappingURL=chunk-TG5SAXSX.js.map
