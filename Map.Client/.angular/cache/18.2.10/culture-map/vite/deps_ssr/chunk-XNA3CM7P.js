import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-UZL2AATT.js";
import {
  t
} from "./chunk-NE35ZNG6.js";
import {
  d
} from "./chunk-2W7YKBRA.js";
import {
  D,
  L,
  Q
} from "./chunk-ZWAQV54Z.js";
import {
  O
} from "./chunk-CBOFHWPI.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/DefinitionExpressionSceneLayerView.js
var t2 = (t4) => {
  let p = class extends t4 {
    constructor() {
      super(...arguments), this._definitionExpressionErrors = 0, this._maxDefinitionExpressionErrors = 20, this.logError = (r) => {
        this._definitionExpressionErrors < this._maxDefinitionExpressionErrors && n.getLogger(this).error("Error while evaluating definitionExpression: " + r), this._definitionExpressionErrors++, this._definitionExpressionErrors === this._maxDefinitionExpressionErrors && n.getLogger(this).error("Further errors are ignored");
      };
    }
    get parsedDefinitionExpression() {
      if (!this.i3slayer?.definitionExpression) return null;
      try {
        const r = O.create(this.i3slayer.definitionExpression, this.i3slayer.fieldsIndex);
        if (!r.isStandardized) return n.getLogger(this).error("definitionExpression is using non standard function"), null;
        const e2 = [], s = r.fieldNames;
        return L(s, this.i3slayer.fields, {
          missingFields: e2
        }), e2.length > 0 ? (n.getLogger(this).error(`definitionExpression references unknown fields: ${e2.join(", ")}`), null) : (this._definitionExpressionErrors = 0, r);
      } catch (r) {
        return n.getLogger(this).error("Failed to parse definitionExpression: " + r), null;
      }
    }
    get definitionExpressionFields() {
      return this.parsedDefinitionExpression ? this.parsedDefinitionExpression.fieldNames : [];
    }
    _evaluateClause(r, i2) {
      try {
        return r.testFeature(i2);
      } catch (e2) {
        return this.logError(e2), false;
      }
    }
    _addDefinitionExpressionToQuery(r) {
      if (!this.parsedDefinitionExpression) return r;
      const i2 = this.i3slayer.definitionExpression, e2 = r.clone();
      return e2.where ? e2.where = `(${i2}) AND (${e2.where})` : e2.where = i2, e2;
    }
  };
  return e([y({
    readOnly: true
  })], p.prototype, "parsedDefinitionExpression", null), e([y({
    readOnly: true
  })], p.prototype, "definitionExpressionFields", null), p = e([a("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")], p), p;
};

// ../../../node_modules/@arcgis/core/views/3d/layers/support/TemporalSceneLayerView.js
var u = (i2) => {
  let o = class extends i2 {
    get timeExtent() {
      return i(this.i3slayer, this.view?.timeExtent, this._get("timeExtent"));
    }
    get mergedFilter() {
      const {
        filter: t4,
        timeExtent: e2
      } = this;
      if (null == e2) return t4;
      const r = t4?.clone() ?? new d();
      return null != e2 && (r.timeExtent = r.timeExtent?.intersection(e2) ?? e2), r;
    }
    getTimeFilterDependencies() {
      const {
        timeInfo: t4
      } = this.i3slayer;
      if (null == t4) return [];
      const {
        startField: e2,
        endField: r
      } = t4;
      return [e2, r];
    }
    addTimeFilter(t4, e2) {
      if (null == e2) return;
      const {
        timeInfo: r
      } = this.i3slayer;
      if (null == r) return;
      const {
        startField: i3,
        endField: s,
        useTime: n3
      } = r;
      if (!n3 || null == i3 && null == s) return;
      const o2 = r.toJSON(), l = e2.toJSON();
      t4.push((t5, e3) => a2(t5, e3, o2, l));
    }
  };
  return e([y({
    readOnly: true
  })], o.prototype, "timeExtent", null), e([y()], o.prototype, "mergedFilter", null), o = e([a("esri.views.3d.layers.support.TemporalSceneLayerView")], o), o;
};
function a2(t4, e2, r, s) {
  const n3 = e2.attributeInfo?.attributeData;
  if (null == n3) return;
  const {
    startTimeField: l,
    endTimeField: u3
  } = r;
  if (!!(null != l && null == n3[l] || null != u3 && null == n3[u3])) return;
  const a3 = t(r, s, new m(n3));
  if (null == a3) return;
  const {
    featureIds: p
  } = e2;
  D(t4, p, a3);
}
var m = class {
  constructor(t4) {
    this.attributeData = t4;
  }
  getAttribute(t4, e2) {
    return Q(this.attributeData[e2], t4);
  }
  getAttributeAsTimestamp(t4, e2) {
    const r = this.getAttribute(t4, e2);
    return "string" == typeof r ? new Date(r).getTime() : "number" == typeof r || null == r ? r : null;
  }
};

// ../../../node_modules/@arcgis/core/core/maybeUpdating.js
var n2 = "updating";
function t3(n3) {
  return "updating" === n3 ? null : n3;
}
function u2(n3) {
  return "updating" === n3;
}

export {
  n2 as n,
  t3 as t,
  u2 as u,
  t2,
  u as u2
};
//# sourceMappingURL=chunk-XNA3CM7P.js.map
