import {
  n as n2
} from "./chunk-OGZAGPIO.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/support/extentUtils.js
function m(l, m2, u2) {
  if (null == l || null == u2) return false;
  let i = true;
  return e[0] = null != l.xmin ? l.xmin : 0, e[1] = null != l.ymin ? l.ymin : 0, e[2] = null != l.zmin ? l.zmin : 0, i = i && n2(e, l.spatialReference, 0, m2, u2, 0, 1), e[0] = null != l.xmax ? l.xmax : 0, e[1] = null != l.ymax ? l.ymax : 0, e[2] = null != l.zmax ? l.zmax : 0, i = i && n2(e, l.spatialReference, 0, m2, u2, 3, 1), null == l.xmin && (m2[0] = -1 / 0), null == l.ymin && (m2[1] = -1 / 0), null == l.zmin && (m2[2] = -1 / 0), null == l.xmax && (m2[3] = 1 / 0), null == l.ymax && (m2[4] = 1 / 0), null == l.zmax && (m2[5] = 1 / 0), i;
}
function u(l, m2, u2) {
  if (null == l || null == u2) return false;
  let i = true;
  return e[0] = null != l.xmin ? l.xmin : 0, e[1] = null != l.ymin ? l.ymin : 0, e[2] = null != l.zmin ? l.zmin : 0, i = i && n2(e, l.spatialReference, 0, e, u2, 0, 1), m2[0] = e[0], m2[1] = e[1], e[0] = null != l.xmax ? l.xmax : 0, e[1] = null != l.ymax ? l.ymax : 0, e[2] = null != l.zmax ? l.zmax : 0, i = i && n2(e, l.spatialReference, 0, e, u2, 0, 1), m2[2] = e[0], m2[3] = e[1], null == l.xmin && (m2[0] = -1 / 0), null == l.ymin && (m2[1] = -1 / 0), null == l.xmax && (m2[2] = 1 / 0), null == l.ymax && (m2[3] = 1 / 0), i;
}
var e = n();

export {
  m,
  u
};
//# sourceMappingURL=chunk-ONNA6736.js.map
