import {
  A,
  d as d2,
  w
} from "./chunk-6WHTZNUH.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import {
  m
} from "./chunk-HJY2YILU.js";
import {
  l
} from "./chunk-2MMLMOWS.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/analysis/analysisViewUtils.js
function l2(n, r) {
  n.interactive = true;
  const {
    tool: l3,
    view: a2
  } = n;
  a2.activeTool = l3;
  let c2 = m(r, () => {
    a2.activeTool === l3 && (a2.activeTool = null);
  });
  return d((o) => __async(this, null, function* () {
    yield w(() => null == l3 || !l3.active, o), c2 = l(c2);
  }), r);
}
function a(o, t) {
  return d2(() => o.interactive, () => c(o, t), A);
}
function c(o, t) {
  o.interactive ? s(o, t) : v(o);
}
function s(o, t) {
  v(o);
  const {
    view: i,
    analysis: e
  } = o, n = new t({
    view: i,
    analysis: e,
    analysisViewData: o
  });
  return o.tool = n, i.tools.add(n), n;
}
function v(o) {
  const {
    view: t,
    tool: i
  } = o;
  null != i && (t.tools.remove(i), o.tool = null);
}

export {
  l2 as l,
  a,
  v
};
//# sourceMappingURL=chunk-FE5XLG7H.js.map
