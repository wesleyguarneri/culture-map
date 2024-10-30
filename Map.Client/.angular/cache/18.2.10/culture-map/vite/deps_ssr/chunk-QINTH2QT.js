import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  D as D2,
  E,
  F as F2,
  L,
  S as S3,
  T as T2,
  a as a2,
  d as d6,
  f as f4,
  f2 as f5,
  g as g2,
  m as m3,
  p,
  t as t4,
  v,
  w,
  w2,
  x as x2,
  y as y4
} from "./chunk-BKDLCDYW.js";
import {
  t as t3
} from "./chunk-FSGJEX7B.js";
import {
  N as N2
} from "./chunk-REOQMQ44.js";
import {
  B,
  B2,
  D,
  F,
  Ge,
  J,
  M,
  N,
  T,
  d as d2,
  f as f2,
  g,
  k,
  l2 as l,
  s3,
  ve,
  y as y3
} from "./chunk-M633ZBOT.js";
import {
  n as n6
} from "./chunk-XDYMUXAT.js";
import {
  s as s4,
  s2 as s5
} from "./chunk-FN552AT6.js";
import {
  a,
  s as s6
} from "./chunk-OEC3KBO5.js";
import {
  i,
  u
} from "./chunk-YT63GLYW.js";
import {
  Ze
} from "./chunk-FJ3AI2QH.js";
import {
  n as n8,
  x
} from "./chunk-D3XX7CQS.js";
import {
  n as n7
} from "./chunk-GVEKX2VV.js";
import {
  c as c2
} from "./chunk-LOZRWPGI.js";
import {
  d as d5
} from "./chunk-UUQ5O7GK.js";
import {
  d as d4
} from "./chunk-6XY35LS7.js";
import {
  b,
  m as m2
} from "./chunk-ORYC4PVJ.js";
import {
  K
} from "./chunk-VQNXE43R.js";
import {
  y as y2
} from "./chunk-VZ37C3ID.js";
import {
  Z
} from "./chunk-5R3HARKC.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import {
  f as f3
} from "./chunk-TPLUZX3A.js";
import {
  y
} from "./chunk-4DSGTDZJ.js";
import {
  O,
  n as n2,
  r,
  r2,
  s as s2,
  t
} from "./chunk-CBOFHWPI.js";
import {
  c,
  n as n3,
  n2 as n5
} from "./chunk-ABIG6PT5.js";
import {
  S as S2
} from "./chunk-KETDH2J4.js";
import {
  m
} from "./chunk-4L4Y34YK.js";
import {
  n as n4
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  d2 as d
} from "./chunk-6SSA7P3A.js";
import {
  U,
  t3 as t2
} from "./chunk-XLEC46FY.js";
import {
  S,
  h
} from "./chunk-AIZ3T7E3.js";
import {
  n
} from "./chunk-6WGE3IUL.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade/featureSetCollection.js
var e = class {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e3, t6, a6) {
    this._layerById[t6] = a6, this._layerByName[e3] = a6;
  }
  featureSetByName(_0) {
    return __async(this, arguments, function* (e3, t6 = true, a6 = ["*"]) {
      return void 0 === this._layerByName[e3] ? null : this._layerByName[e3];
    });
  }
  featureSetById(_0) {
    return __async(this, arguments, function* (e3, t6 = true, a6 = ["*"]) {
      return void 0 === this._layerById[e3] ? null : this._layerById[e3];
    });
  }
  castToText(e3 = false) {
    return "object, FeatureSetCollection";
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/actions/AttributeFilter.js
var c3 = class _c extends x2 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e3.parentfeatureset, e3.whereclause instanceof O ? (this._whereclause = e3.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e3.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new f({
      wkid: 4326
    }), this.geometryType = N.point);
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const t6 = yield this._parent._getFilteredSet("", null, this._whereclause, null, e3);
        return this._checkCancelled(e3), null !== this._whereClauseFunction ? this._wset = new t4(t6._candidates.slice(0).concat(t6._known.slice(0)), [], t6._ordered, this._clonePageDefinition(t6.pagesDefinition)) : this._wset = new t4(t6._candidates.slice(0), t6._known.slice(0), t6._ordered, this._clonePageDefinition(t6.pagesDefinition)), this._wset;
      }
      return this._wset;
    });
  }
  _isInFeatureSet(e3) {
    let t6 = this._parent?._isInFeatureSet(e3);
    return t6 === s3.NotInFeatureSet ? t6 : (t6 = this._idstates[e3], void 0 === t6 ? s3.Unknown : t6);
  }
  _getFeature(e3, t6, s8) {
    return this._parent._getFeature(e3, t6, s8);
  }
  _getFeatures(e3, t6, s8, i2) {
    return this._parent._getFeatures(e3, t6, s8, i2);
  }
  _featureFromCache(e3) {
    return this._parent._featureFromCache(e3);
  }
  executeWhereClause(e3) {
    return this._whereclause?.testFeature(e3) ?? false;
  }
  executeWhereClauseDeferred(e3) {
    return __async(this, null, function* () {
      if (null !== this._whereClauseFunction) {
        const t6 = this._whereClauseFunction(e3);
        return S(t6), t6;
      }
      return this.executeWhereClause(e3);
    });
  }
  _fetchAndRefineFeatures(e3, t6, s8) {
    return __async(this, null, function* () {
      const r3 = new t4([], e3, false, null), a6 = Math.min(t6, e3.length);
      if (yield this._parent?._getFeatures(r3, -1, a6, s8), this._checkCancelled(s8), null == this._whereClauseFunction) {
        for (let t7 = 0; t7 < a6; t7++) {
          const s9 = this._parent?._featureFromCache(e3[t7]);
          true === this.executeWhereClause(s9) ? this._idstates[e3[t7]] = s3.InFeatureSet : this._idstates[e3[t7]] = s3.NotInFeatureSet;
        }
        return "success";
      }
      const l3 = [];
      for (let i2 = 0; i2 < a6; i2++) {
        const t7 = this._parent?._featureFromCache(e3[i2]);
        l3.push(yield this.executeWhereClauseDeferred(t7));
      }
      for (let i2 = 0; i2 < t6; i2++) true === l3[i2] ? this._idstates[e3[i2]] = s3.InFeatureSet : this._idstates[e3[i2]] = s3.NotInFeatureSet;
      return "success";
    });
  }
  _getFilteredSet(e3, t6, s8, r3, n9) {
    return __async(this, null, function* () {
      null !== this._whereClauseFunction || (null !== s8 ? null !== this._whereclause && (s8 = g2(this._whereclause, s8)) : s8 = this._whereclause), yield this._ensureLoaded();
      const l3 = yield this._parent._getFilteredSet(e3, t6, s8, r3, n9);
      let h2;
      return this._checkCancelled(n9), h2 = null !== this._whereClauseFunction ? new t4(l3._candidates.slice(0).concat(l3._known.slice(0)), [], l3._ordered, this._clonePageDefinition(l3.pagesDefinition)) : new t4(l3._candidates.slice(0), l3._known.slice(0), l3._ordered, this._clonePageDefinition(l3.pagesDefinition)), h2;
    });
  }
  _stat(e3, t6, s8, i2, r3, n9, l3) {
    return __async(this, null, function* () {
      if (null !== this._whereClauseFunction) return null === r3 && "" === s8 && null === i2 ? this._manualStat(e3, t6, n9, l3) : {
        calculated: false
      };
      let h2 = this._whereclause;
      null !== r3 && null !== this._whereclause && (h2 = g2(this._whereclause, r3));
      const u2 = yield this._parent._stat(e3, t6, s8, i2, h2, n9, l3);
      return false === u2.calculated ? null === r3 && "" === s8 && null === i2 ? this._manualStat(e3, t6, n9, l3) : {
        calculated: false
      } : u2;
    });
  }
  _canDoAggregates(e3, t6, s8, i2, r3) {
    return __async(this, null, function* () {
      return null === this._whereClauseFunction && (null !== r3 ? null !== this._whereclause && (r3 = g2(this._whereclause, r3)) : r3 = this._whereclause, null !== this._parent && this._parent._canDoAggregates(e3, t6, s8, i2, r3));
    });
  }
  _getAggregatePagesDataSourceDefinition(s8, i2, r3, n9, l3, h2, u2) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s2(r.NeverReach);
      return null !== l3 ? null !== this._whereclause && (l3 = g2(this._whereclause, l3)) : l3 = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(s8, i2, r3, n9, l3, h2, u2);
    });
  }
  static registerAction() {
    x2._featuresetFunctions.filter = function(e3) {
      if ("function" == typeof e3) return new _c({
        parentfeatureset: this,
        whereclause: e3
      });
      let t6 = null;
      return e3 instanceof O && (t6 = e3), new _c({
        parentfeatureset: this,
        whereclause: t6
      });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/actions/Adapted.js
var D3 = class {
  constructor(e3) {
    this.field = e3, this.sqlRewritable = false;
  }
  postInitialization(e3, t6) {
  }
};
var I = class extends D3 {
  constructor(e3) {
    super(e3), this.sqlRewritable = true;
  }
  extractValue(e3) {
    return e3.attributes[this.field.name];
  }
  rewriteSql(e3) {
    return {
      rewritten: this.sqlRewritable,
      where: e3
    };
  }
};
var k2 = class extends D3 {
  constructor(e3, t6, r3) {
    super(y3(e3)), this.originalField = e3, this.sqlRewritable = true, this.field.name = t6, this.field.alias = r3;
  }
  rewriteSql(e3, t6) {
    return {
      rewritten: this.sqlRewritable,
      where: m3(e3, this.field.name, this.originalField.name, t6.getFieldsIndex())
    };
  }
  extractValue(e3) {
    return e3.attributes[this.originalField.name];
  }
};
var b2 = class _b extends D3 {
  constructor(e3, t6, r3) {
    super(e3), this.codefield = t6, this.lkp = r3, this.reverseLkp = {};
    for (const s8 in r3) this.reverseLkp[r3[s8]] = s8;
    this.sqlRewritable = true;
  }
  rewriteSql(e3, t6) {
    const r3 = this.evaluateNodeToWhereClause(e3.parseTree, l.Standardised, this.field.name, this.codefield instanceof O ? p(this.codefield, l.Standardised) : this.codefield, e3.parameters);
    return r3.includes(_b.BADNESS) ? {
      rewritten: false,
      where: e3
    } : {
      rewritten: this.sqlRewritable,
      where: O.create(r3, t6._parent.getFieldsIndex(), t6.dateFieldsTimeZoneDefaultUTC)
    };
  }
  evaluateNodeToWhereClause(e3, t6, a6 = null, i2 = null, l3) {
    let n9, o, h2, g4;
    switch (e3.type) {
      case "interval":
        return F2(this.evaluateNodeToWhereClause(e3.value, t6, a6, i2, l3), e3.qualifier, e3.op);
      case "case-expression": {
        let r3 = " CASE ";
        "simple" === e3.format && (r3 += this.evaluateNodeToWhereClause(e3.operand, t6, a6, _b.BADNESS, l3));
        for (let s8 = 0; s8 < e3.clauses.length; s8++) r3 += " WHEN " + this.evaluateNodeToWhereClause(e3.clauses[s8].operand, t6, a6, _b.BADNESS, l3) + " THEN " + this.evaluateNodeToWhereClause(e3.clauses[s8].value, t6, a6, _b.BADNESS, l3);
        return null !== e3.else && (r3 += " ELSE " + this.evaluateNodeToWhereClause(e3.else, t6, a6, _b.BADNESS, l3)), r3 += " END ", r3;
      }
      case "parameter": {
        const r3 = l3[e3.value.toLowerCase()];
        if ("string" == typeof r3) return "'" + r3.toString().replaceAll("'", "''") + "'";
        if (f2(r3)) return w(r3, t6);
        if (d2(r3)) return w(r3, t6);
        if (F(r3)) return E(r3, t6);
        if (T(r3)) return T2(r3, t6);
        if (g(r3)) return S3(r3, t6);
        if (Array.isArray(r3)) {
          const e4 = [];
          for (let s8 = 0; s8 < r3.length; s8++) "string" == typeof r3[s8] ? e4.push("'" + r3[s8].toString().replaceAll("'", "''") + "'") : f2(r3[s8]) || d2(r3[s8]) ? e4.push(w(r3[s8], t6)) : F(r3[s8]) ? e4.push(E(r3[s8], t6)) : T(r3[s8]) ? e4.push(T2(r3[s8], t6)) : g(r3[s8]) ? e4.push(S3(r3[s8], t6)) : e4.push(r3[s8].toString());
          return e4;
        }
        return r3.toString();
      }
      case "expression-list":
        o = [];
        for (const r3 of e3.value) o.push(this.evaluateNodeToWhereClause(r3, t6, a6, i2, l3));
        return o;
      case "unary-expression":
        return " ( NOT " + this.evaluateNodeToWhereClause(e3.expr, t6, a6, _b.BADNESS, l3) + " ) ";
      case "binary-expression":
        switch (e3.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " AND " + this.evaluateNodeToWhereClause(e3.right, t6, a6, i2, l3) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " OR " + this.evaluateNodeToWhereClause(e3.right, t6, a6, i2, l3) + ") ";
          case "IS":
            if ("null" !== e3.right.type) throw new n2(t.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " IS NULL )";
          case "ISNOT":
            if ("null" !== e3.right.type) throw new n2(t.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " IS NOT NULL )";
          case "IN":
            if (n9 = [], "expression-list" === e3.right.type) {
              if ("column-reference" === e3.left.type && e3.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const r3 = [];
                let s8 = true;
                for (const t7 of e3.right.value) {
                  if ("string" !== t7.type) {
                    s8 = false;
                    break;
                  }
                  if (void 0 === this.lkp[t7.value]) {
                    s8 = false;
                    break;
                  }
                  r3.push(this.lkp[t7.value].toString());
                }
                if (s8) return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " IN (" + r3.join(",") + ")) ";
              }
              return n9 = this.evaluateNodeToWhereClause(e3.right, t6, a6, i2, l3), " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " IN (" + n9.join(",") + ")) ";
            }
            return g4 = this.evaluateNodeToWhereClause(e3.right, t6, a6, i2, l3), Array.isArray(g4) ? " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " IN (" + g4.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " IN (" + g4 + ")) ";
          case "NOT IN":
            if (n9 = [], "expression-list" === e3.right.type) {
              if ("column-reference" === e3.left.type && e3.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const r3 = [];
                let s8 = true;
                for (const t7 of e3.right.value) {
                  if ("string" !== t7.type) {
                    s8 = false;
                    break;
                  }
                  if (void 0 === this.lkp[t7.value]) {
                    s8 = false;
                    break;
                  }
                  r3.push(this.lkp[t7.value].toString());
                }
                if (s8) return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " NOT IN (" + r3.join(",") + ")) ";
              }
              return n9 = this.evaluateNodeToWhereClause(e3.right, t6, a6, i2, l3), " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " NOT IN (" + n9.join(",") + ")) ";
            }
            return g4 = this.evaluateNodeToWhereClause(e3.right, t6, a6, i2, l3), Array.isArray(g4) ? " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " NOT IN (" + g4.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, i2, l3) + " NOT IN (" + g4 + ")) ";
          case "BETWEEN":
            return h2 = this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3), " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " BETWEEN " + h2[0] + " AND " + h2[1] + " ) ";
          case "NOTBETWEEN":
            return h2 = this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3), " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " NOT BETWEEN " + h2[0] + " AND " + h2[1] + " ) ";
          case "LIKE":
            return "" !== e3.escape ? " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " LIKE " + this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3) + " ESCAPE '" + e3.escape + "') " : " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " LIKE " + this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3) + ") ";
          case "NOT LIKE":
            return "" !== e3.escape ? " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " NOT LIKE " + this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3) + " ESCAPE '" + e3.escape + "') " : " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " NOT LIKE " + this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3) + ") ";
          case "<>":
          case "=":
            if ("column-reference" === e3.left.type && "string" === e3.right.type) {
              if (e3.left.column.toUpperCase() === this.field.name.toUpperCase() && void 0 !== this.lkp[e3.right.value.toString()]) return " (" + i2 + " " + e3.operator + " " + this.lkp[e3.right.value.toString()].toString() + ") ";
            } else if ("column-reference" === e3.right.type && "string" === e3.left.type && e3.right.column.toUpperCase() === this.field.name.toUpperCase()) return " (" + this.lkp[e3.right.value.toString()].toString() + " " + e3.operator + " " + i2 + ") ";
            return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " " + e3.operator + " " + this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t6, a6, _b.BADNESS, l3) + " " + e3.operator + " " + this.evaluateNodeToWhereClause(e3.right, t6, a6, _b.BADNESS, l3) + ") ";
        }
      case "null":
        return "null";
      case "boolean":
        return true === e3.value ? "1" : "0";
      case "string":
        return "'" + e3.value.toString().replaceAll("'", "''") + "'";
      case "timestamp":
        return `timestamp '${e3.value}'`;
      case "date":
        return `date '${e3.value}'`;
      case "time":
        return `time '${e3.value}'`;
      case "number":
        return e3.value.toString();
      case "current-time":
        return A("date" === e3.mode, t6);
      case "column-reference":
        return a6 && a6.toLowerCase() === e3.column.toLowerCase() ? "(" + i2 + ")" : e3.column;
      case "data-type":
        return e3.value;
      case "function": {
        const r3 = this.evaluateNodeToWhereClause(e3.args, t6, a6, _b.BADNESS, l3);
        return y4(e3.name, r3, t6);
      }
    }
    throw new n2(t.UnsupportedSyntax, {
      node: e3.type
    });
  }
  extractValue(e3) {
    return this.codefield instanceof O ? this.reverseLkp[O.convertValueToStorageFormat(this.codefield.calculateValueCompiled(e3))] : this.reverseLkp[e3.attributes[this.codefield]];
  }
};
b2.BADNESS = "_!!!_BAD_LKP_!!!!";
var B3 = class extends D3 {
  constructor(e3, t6) {
    super(e3), this._sql = t6;
  }
  rewriteSql(e3, t6) {
    return {
      rewritten: true,
      where: m3(e3, this.field.name, p(this._sql, l.Standardised), t6.getFieldsIndex())
    };
  }
  extractValue(e3) {
    return O.convertValueToStorageFormat(this._sql.calculateValueCompiled(e3), this.field.type);
  }
};
var L2 = class extends x2 {
  static findField(e3, t6) {
    for (const r3 of e3) if (r3.name.toLowerCase() === t6.toString().toLowerCase()) return r3;
    return null;
  }
  constructor(e3) {
    super(e3), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = [], this._extraFilter = null, this._extraFilter = e3.extraFilter, this._parent = e3.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e3.adaptedFields;
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new f({
      wkid: 4326
    }), this.objectIdField = "", this.globalIdField = "", this.geometryType = N.point, this.typeIdField = "", this.types = null, this.subtypeField = null, this.subtypes = null), this.fields = [];
    for (const e3 of this.adaptedFields) e3.postInitialization(this, this._parent), this.fields.push(e3.field);
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        let t6 = null;
        return t6 = this._extraFilter ? yield this._getFilteredSet("", null, null, null, e3) : yield this._parent?._getSet(e3), this._checkCancelled(e3), n(t6), this._wset = new t4(t6._candidates.slice(0), t6._known.slice(0), t6._ordered, this._clonePageDefinition(t6.pagesDefinition)), this._wset;
      }
      return this._wset;
    });
  }
  _isInFeatureSet(e3) {
    return this._parent._isInFeatureSet(e3);
  }
  _getFeatures(r3, s8, a6, i2) {
    return __async(this, null, function* () {
      const l3 = [];
      -1 !== s8 && void 0 === this._featureCache[s8] && l3.push(s8);
      const o = this._maxQueryRate();
      if (true === this._checkIfNeedToExpandKnownPage(r3, o)) return yield this._expandPagedSet(r3, o, 0, 0, i2), this._getFeatures(r3, s8, a6, i2);
      let h2 = 0;
      for (let e3 = r3._lastFetchedIndex; e3 < r3._known.length && (h2++, h2 <= a6 && (r3._lastFetchedIndex += 1), !(void 0 === this._featureCache[r3._known[e3]] && (r3._known[e3] !== s8 && l3.push(r3._known[e3]), l3.length >= o))); e3++) ;
      if (0 === l3.length) return "success";
      r3 = new t4([], l3, r3._ordered, null);
      const u2 = Math.min(l3.length, a6);
      yield this._parent?._getFeatures(r3, -1, u2, i2), this._checkCancelled(i2);
      const c5 = [];
      for (let e3 = 0; e3 < u2; e3++) {
        const t6 = this._parent?._featureFromCache(l3[e3]);
        void 0 !== t6 && c5.push({
          geometry: t6.geometry,
          attributes: t6.attributes,
          id: l3[e3]
        });
      }
      for (const n9 of c5) {
        const r4 = [];
        for (const e3 of this.adaptedFields) r4[e3.field.name] = e3.extractValue(n9);
        this._featureCache[n9.id] = new d3({
          attributes: r4,
          geometry: c(n9.geometry)
        });
      }
      return "success";
    });
  }
  _fetchAndRefineFeatures() {
    return __async(this, null, function* () {
      throw new s2(r.NeverReach);
    });
  }
  _getFilteredSet(e3, t6, r3, s8, a6) {
    return __async(this, null, function* () {
      let i2 = false;
      const l3 = this._reformulateWithoutAdaptions(r3);
      i2 = l3.cannot, r3 = l3.where;
      let o = false;
      if (null !== s8) {
        o = true;
        const e4 = [];
        for (const t7 of this.adaptedFields) if (!(t7 instanceof I) && true === s8.scanForField(t7.field.name)) {
          if (!(t7 instanceof k2)) {
            s8 = null, o = false;
            break;
          }
          e4.push({
            field: t7.field.name,
            newfield: t7.originalField.name
          });
        }
        s8 && e4.length > 0 && (s8 = s8.replaceFields(e4));
      }
      null !== r3 ? null !== this._extraFilter && (r3 = g2(this._extraFilter, r3)) : r3 = this._extraFilter, yield this._ensureLoaded();
      const h2 = yield this._parent._getFilteredSet(e3, t6, r3, s8, a6);
      let u2;
      return this._checkCancelled(a6), u2 = true === i2 ? new t4(h2._candidates.slice(0).concat(h2._known.slice(0)), [], true === o && h2._ordered, this._clonePageDefinition(h2.pagesDefinition)) : new t4(h2._candidates.slice(0), h2._known.slice(0), true === o && h2._ordered, this._clonePageDefinition(h2.pagesDefinition)), u2;
    });
  }
  _reformulateWithoutAdaptions(e3) {
    const t6 = {
      cannot: false,
      where: e3
    };
    if (null !== e3) {
      for (const r3 of this.adaptedFields) if (true === v(e3, r3.field.name)) {
        const s8 = r3.rewriteSql(e3, this);
        if (true !== s8.rewritten) {
          t6.cannot = true, t6.where = null;
          break;
        }
        t6.where = s8.where;
      }
    }
    return t6;
  }
  _stat(e3, t6, r3, s8, a6, i2, l3) {
    return __async(this, null, function* () {
      let n9 = false, o = this._reformulateWithoutAdaptions(t6);
      if (n9 = o.cannot, t6 = o.where, o = this._reformulateWithoutAdaptions(a6), n9 = n9 || o.cannot, null !== (a6 = o.where) ? null !== this._extraFilter && (a6 = g2(this._extraFilter, a6)) : a6 = this._extraFilter, true === n9) return null === a6 && "" === r3 && null === s8 ? this._manualStat(e3, t6, i2, l3) : {
        calculated: false
      };
      const h2 = yield this._parent._stat(e3, t6, r3, s8, a6, i2, l3);
      return false === h2.calculated ? null === a6 && "" === r3 && null === s8 ? this._manualStat(e3, t6, i2, l3) : {
        calculated: false
      } : h2;
    });
  }
  _canDoAggregates(e3, t6, r3, s8, a6) {
    return __async(this, null, function* () {
      if (null === this._parent) return false;
      for (let n9 = 0; n9 < e3.length; n9++) for (const t7 of this.adaptedFields) if (e3[n9].toLowerCase() === t7.field.name.toLowerCase() && !(t7 instanceof I)) return false;
      const i2 = [];
      for (let n9 = 0; n9 < t6.length; n9++) {
        const e4 = t6[n9];
        if (null !== e4.workingexpr) {
          const t7 = this._reformulateWithoutAdaptions(e4.workingexpr);
          if (t7.cannot) return false;
          const r4 = e4.clone();
          r4.workingexpr = t7.where, i2.push(r4);
        } else i2.push(e4);
      }
      const l3 = this._reformulateWithoutAdaptions(a6);
      return !l3.cannot && (null !== (a6 = l3.where) ? null !== this._extraFilter && (a6 = g2(this._extraFilter, a6)) : a6 = this._extraFilter, this._parent._canDoAggregates(e3, i2, r3, s8, a6));
    });
  }
  _getAggregatePagesDataSourceDefinition(e3, t6, r3, s8, l3, n9, o) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s2(r.NeverReach);
      const h2 = [];
      for (let c5 = 0; c5 < t6.length; c5++) {
        const e4 = t6[c5];
        if (null !== e4.workingexpr) {
          const t7 = this._reformulateWithoutAdaptions(e4.workingexpr);
          if (t7.cannot) throw new s2(r.NeverReach);
          const r4 = e4.clone();
          r4.workingexpr = t7.where, h2.push(r4);
        } else h2.push(e4);
      }
      const u2 = this._reformulateWithoutAdaptions(l3);
      if (u2.cannot) throw new s2(r.NeverReach);
      return null !== (l3 = u2.where) ? null !== this._extraFilter && (l3 = g2(this._extraFilter, l3)) : l3 = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e3, h2, r3, s8, l3, n9, o);
    });
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/support/OrderbyClause.js
function t5(t6, e3) {
  return t6 === e3 ? 0 : null === t6 ? -1 : null === e3 ? 1 : t6 < e3 ? -1 : 1;
}
var e2 = class _e {
  constructor(t6) {
    const e3 = t6.split(",");
    this._fields = [], this._directions = [];
    for (let s8 = 0; s8 < e3.length; s8++) {
      const t7 = e3[s8].match(/\S+/g);
      this._fields.push(t7[0]), 2 === t7.length ? "asc" === t7[1].toLowerCase() ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let t6 = "";
    for (let e3 = 0; e3 < this._fields.length; e3++) 0 !== e3 && (t6 += ","), t6 += this._fields[e3], 1 === this._directions[e3] ? t6 += " ASC" : t6 += " DESC";
    return t6;
  }
  order(e3) {
    e3.sort((e4, s8) => {
      for (let i2 = 0; i2 < this._fields.length; i2++) {
        const r3 = this.featureValue(e4.feature, this._fields[i2], i2), l3 = this.featureValue(s8.feature, this._fields[i2], i2);
        let o = 0;
        if (o = 1 === this._directions[i2] ? t5(r3, l3) : -1 * t5(r3, l3), 0 !== o) return o;
      }
      return 0;
    });
  }
  scanForField(t6) {
    for (let e3 = 0; e3 < this._fields.length; e3++) if (this._fields[e3].toLowerCase().trim() === t6.toLowerCase().trim()) return true;
    return false;
  }
  replaceFields(t6) {
    let s8 = "";
    for (let e3 = 0; e3 < this._fields.length; e3++) {
      0 !== e3 && (s8 += ",");
      let i2 = this._fields[e3];
      for (const e4 of t6) if (i2.toLowerCase() === e4.field.toLowerCase()) {
        i2 = e4.newfield;
        break;
      }
      s8 += i2, 1 === this._directions[e3] ? s8 += " ASC" : s8 += " DESC";
    }
    return new _e(s8);
  }
  featureValue(t6, e3, s8) {
    const i2 = t6.attributes[e3];
    if (void 0 !== i2) return i2;
    for (const r3 in t6.attributes) if (e3.toLowerCase() === r3.toLowerCase()) return this._fields[s8] = r3, t6.attributes[r3];
    return null;
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/actions/OrderBy.js
var a3 = class _a extends x2 {
  constructor(e3) {
    super(e3), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e3.orderbyclause, this._parent = e3.parentfeatureset;
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const t6 = yield this._getFilteredSet("", null, null, this._orderbyclause, e3);
        return this._checkCancelled(e3), this._wset = t6, this._wset;
      }
      return this._wset;
    });
  }
  manualOrderSet(e3, t6) {
    return __async(this, null, function* () {
      const r3 = yield this.getIdColumnDictionary(e3, [], -1, t6);
      this._orderbyclause?.order(r3);
      const n9 = new t4([], [], true, null);
      for (let s8 = 0; s8 < r3.length; s8++) n9._known.push(r3[s8].id);
      return n9;
    });
  }
  getIdColumnDictionary(t6, r3, n9, s8) {
    return __async(this, null, function* () {
      if (n9 < t6._known.length - 1) {
        const i2 = this._maxQueryRate();
        if ("GETPAGES" === t6._known[n9 + 1]) return yield ve(this._parent._expandPagedSet(t6, i2, 0, 0, s8)), this.getIdColumnDictionary(t6, r3, n9, s8);
        let a6 = n9 + 1;
        const o = [];
        for (; a6 < t6._known.length && "GETPAGES" !== t6._known[a6]; ) o.push(t6._known[a6]), a6++;
        n9 += o.length;
        const u2 = yield ve(this._parent._getFeatureBatch(o, s8));
        this._checkCancelled(s8);
        for (const e3 of u2) r3.push({
          id: e3.attributes[this.objectIdField],
          feature: e3
        });
        return this.getIdColumnDictionary(t6, r3, n9, s8);
      }
      return t6._candidates.length > 0 ? (yield ve(this._refineSetBlock(t6, this._maxProcessingRate(), s8)), this._checkCancelled(s8), this.getIdColumnDictionary(t6, r3, n9, s8)) : r3;
    });
  }
  _isInFeatureSet(e3) {
    return this._parent._isInFeatureSet(e3);
  }
  _getFeatures(e3, t6, r3, n9) {
    return this._parent._getFeatures(e3, t6, r3, n9);
  }
  _featureFromCache(e3) {
    if (void 0 === this._featureCache[e3]) {
      const t6 = this._parent._featureFromCache(e3);
      if (void 0 === t6) return;
      return null === t6 ? null : (this._featureCache[e3] = t6, t6);
    }
    return this._featureCache[e3];
  }
  _fetchAndRefineFeatures() {
    return __async(this, null, function* () {
      throw new s2(r.NeverReach);
    });
  }
  _getFilteredSet(e3, t6, r3, n9, i2) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const a6 = yield this._parent._getFilteredSet(e3, t6, r3, null === n9 ? this._orderbyclause : n9, i2);
      this._checkCancelled(i2);
      const o = new t4(a6._candidates.slice(0), a6._known.slice(0), a6._ordered, this._clonePageDefinition(a6.pagesDefinition));
      let u2 = true;
      if (a6._candidates.length > 0 && (u2 = false), false === o._ordered) {
        let e4 = yield this.manualOrderSet(o, i2);
        return false === u2 && (null === t6 && null === r3 || (e4 = new t4(e4._candidates.slice(0).concat(e4._known.slice(0)), [], e4._ordered, this._clonePageDefinition(e4.pagesDefinition)))), e4;
      }
      return o;
    });
  }
  static registerAction() {
    x2._featuresetFunctions.orderBy = function(e3) {
      return "" === e3 ? this : new _a({
        parentfeatureset: this,
        orderbyclause: new e2(e3)
      });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/support/StatsField.js
function s7(s8) {
  if ("function" === s8.parseTree.type) {
    if (0 === s8.parseTree.args.value.length) return {
      name: s8.parseTree.name,
      expr: null
    };
    if (s8.parseTree.args.value.length > 1) throw new n2(t.MissingStatisticParameters);
    const a6 = O.create(f4(s8.parseTree.args.value[0], l.Standardised, s8.parameters), s8.fieldsIndex, s8.timeZone);
    return {
      name: s8.parseTree.name,
      expr: a6
    };
  }
  return null;
}
var a4 = class _a {
  constructor() {
    this.field = "", this.tofieldname = "", this.typeofstat = "MIN", this.workingexpr = null;
  }
  clone() {
    const e3 = new _a();
    return e3.field = this.field, e3.tofieldname = this.tofieldname, e3.typeofstat = this.typeofstat, e3.workingexpr = this.workingexpr, e3;
  }
  static parseStatField(r3, n9, o, l3) {
    const p3 = new _a();
    p3.field = r3;
    const f7 = O.create(n9, o, l3), u2 = s7(f7);
    if (null === u2) throw new n2(t.UnsupportedSqlFunction, {
      function: ""
    });
    const c5 = u2.name.toUpperCase().trim();
    if ("MIN" === c5) {
      if (p3.typeofstat = "MIN", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: "min"
      });
    } else if ("MAX" === c5) {
      if (p3.typeofstat = "MAX", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: "max"
      });
    } else if ("COUNT" === c5) p3.typeofstat = "COUNT", p3.workingexpr = u2.expr;
    else if ("STDEV" === c5) {
      if (p3.typeofstat = "STDDEV", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: "stdev"
      });
    } else if ("SUM" === c5) {
      if (p3.typeofstat = "SUM", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: "sum"
      });
    } else if ("MEAN" === c5) {
      if (p3.typeofstat = "AVG", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: c5
      });
    } else if ("AVG" === c5) {
      if (p3.typeofstat = "AVG", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: "avg"
      });
    } else {
      if ("VAR" !== c5) throw new n2(t.UnsupportedSqlFunction, {
        function: c5
      });
      if (p3.typeofstat = "VAR", p3.workingexpr = u2.expr, null === f7) throw new n2(t.InvalidFunctionParameters, {
        function: "var"
      });
    }
    return p3;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/actions/GroupBy.js
function G(e3) {
  if (!e3) return "COUNT";
  switch (e3.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
var O2 = class _O extends x2 {
  constructor(e3) {
    super(e3), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = true, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e3.parentfeatureset, this._config = e3;
  }
  isTable() {
    return true;
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        const t6 = yield this._getFilteredSet("", null, null, null, e3);
        return this._wset = t6, this._wset;
      }
      return this._wset;
    });
  }
  _isInFeatureSet() {
    return s3.InFeatureSet;
  }
  _nextUniqueName(e3) {
    for (; 1 === e3["T" + this._uniqueIds.toString()]; ) this._uniqueIds++;
    const t6 = "T" + this._uniqueIds.toString();
    return e3[t6] = 1, t6;
  }
  _convertToEsriFieldType(e3) {
    return e3;
  }
  _initialiseFeatureSet() {
    const e3 = {};
    let t6 = false, n9 = 1;
    const r3 = this._parent ? this._parent.getFieldsIndex() : new Z([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; false === t6; ) {
      let e4 = false;
      for (let t7 = 0; t7 < this._config.groupbyfields.length; t7++) if (this._config.groupbyfields[t7].name.toLowerCase() === this.objectIdField.toLowerCase()) {
        e4 = true;
        break;
      }
      if (false === e4) {
        for (let t7 = 0; t7 < this._config.statsfields.length; t7++) if (this._config.statsfields[t7].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          e4 = true;
          break;
        }
      }
      false === e4 ? t6 = true : (this.objectIdField = "ROW__ID" + n9.toString(), n9++);
    }
    for (const i2 of this._config.statsfields) {
      const e4 = new a4();
      e4.field = i2.name, e4.tofieldname = i2.name, e4.workingexpr = i2.expression instanceof O ? i2.expression : O.create(i2.expression, r3, this.dateFieldsTimeZoneDefaultUTC), e4.typeofstat = G(i2.statistic), this._decodedStatsfield.push(e4);
    }
    this._decodedGroupbyfield = [];
    for (const i2 of this._config.groupbyfields) {
      const e4 = {
        name: i2.name,
        singlefield: null,
        tofieldname: i2.name,
        expression: i2.expression instanceof O ? i2.expression : O.create(i2.expression, r3, this.dateFieldsTimeZoneDefaultUTC),
        sqlType: null
      };
      this._decodedGroupbyfield.push(e4);
    }
    if (null !== this._parent) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const t7 of this._parent.fields) e3[t7.name.toUpperCase()] = 1;
      this.types = null, this.subtypes = null, this.subtypeField = "";
    } else this.geometryType = N.point, this.typeIdField = "", this.types = null, this.subtypes = null, this.subtypeField = "", this.spatialReference = new f({
      wkid: 4326
    });
    this.fields = [];
    const a6 = new a4();
    a6.field = this._nextUniqueName(e3), a6.tofieldname = this.objectIdField, a6.workingexpr = O.create(this._parent.objectIdField, this._parent.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), a6.typeofstat = "MIN", this._decodedStatsfield.push(a6);
    for (const s8 of this._decodedGroupbyfield) {
      const t7 = new y2();
      if (s8.name = this._nextUniqueName(e3), t7.name = s8.tofieldname, t7.alias = t7.name, D2(s8.expression)) {
        const e4 = this._parent.getField(p(s8.expression, l.Standardised));
        if (!e4) throw new s2(r.AggregationFieldNotFound);
        s8.name = e4.name, s8.singlefield = e4.name, this.phsyicalgroupbyfields.push(e4.name), t7.type = e4.type, s8.sqlType = e4.type;
      } else {
        t7.type = this._convertToEsriFieldType(L(s8.expression, this._parent.fields));
        const e4 = new y2();
        e4.name = s8.name, e4.alias = e4.name, this.phsyicalgroupbyfields.push(s8.name), this._adaptedFields.push(new B3(e4, s8.expression)), this._candosimplegroupby = false, s8.sqlType = t7.type;
      }
      this.fields.push(t7);
    }
    if (this._adaptedFields.length > 0) for (const i2 of this._parent.fields) this._adaptedFields.push(new I(i2));
    for (let i2 = 0; i2 < this._decodedStatsfield.length; i2++) {
      const t7 = new y2();
      let s8 = null;
      const n10 = this._decodedStatsfield[i2];
      n10.field = this._nextUniqueName(e3), n10.tofieldname === this.objectIdField && (this._internalObjectIdField = n10.field), t7.name = n10.tofieldname, t7.alias = t7.name;
      const r4 = null !== n10.workingexpr && D2(n10.workingexpr) ? p(n10.workingexpr, l.Standardised) : "";
      switch (this._decodedStatsfield[i2].typeofstat) {
        case "SUM":
          if ("" !== r4) {
            if (s8 = this._parent.getField(r4), !s8) throw new s2(r.AggregationFieldNotFound);
            t7.type = s8.type;
          } else t7.type = "double";
          break;
        case "MIN":
        case "MAX":
          if ("" !== r4) {
            if (s8 = this._parent.getField(r4), !s8) throw new s2(r.AggregationFieldNotFound);
            t7.type = s8.type;
          } else t7.type = "double";
          break;
        case "COUNT":
          t7.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if ("" !== r4 && (s8 = this._parent.getField(r4), !s8)) throw new s2(r.AggregationFieldNotFound);
          t7.type = "double";
      }
      this.fields.push(t7);
    }
  }
  _canDoAggregates() {
    return __async(this, null, function* () {
      return false;
    });
  }
  _getFeatures(e3, t6, i2, s8) {
    return __async(this, null, function* () {
      -1 !== t6 && this._featureCache[t6];
      const n9 = this._maxQuery;
      return true === this._checkIfNeedToExpandKnownPage(e3, n9) ? (yield this._expandPagedSet(e3, n9, 0, 0, s8), this._getFeatures(e3, t6, i2, s8)) : "success";
    });
  }
  _getFilteredSet(e3, t6, i2, s8, l3) {
    return __async(this, null, function* () {
      if ("" !== e3) return new t4([], [], true, null);
      let o = null;
      const d10 = {
        ordered: false,
        nowhereclause: false
      };
      if (yield this._ensureLoaded(), null !== i2) {
        for (let n9 = 0; n9 < this._decodedStatsfield.length; n9++) if (true === v(i2, this._decodedStatsfield[n9].tofieldname)) {
          d10.nowhereclause = true, i2 = null;
          break;
        }
      }
      if (null !== s8) {
        d10.ordered = true;
        for (let e4 = 0; e4 < this._decodedStatsfield.length; e4++) if (true === s8.scanForField(this._decodedStatsfield[e4].tofieldname)) {
          s8 = null, d10.ordered = false;
          break;
        }
        if (null !== s8) {
          for (const e4 of this._decodedGroupbyfield) if (null === e4.singlefield && true === s8.scanForField(e4.tofieldname)) {
            s8 = null, d10.ordered = false;
            break;
          }
        }
      }
      if (false !== this._candosimplegroupby && (yield this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null))) {
        let e4 = null;
        i2 && (e4 = this._reformulateWhereClauseWithoutGroupByFields(i2));
        let t7 = null;
        s8 && (t7 = this._reformulateOrderClauseWithoutGroupByFields(s8));
        const n9 = yield this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, e4, t7, this._internalObjectIdField);
        return this._checkCancelled(l3), o = true === d10.nowhereclause ? new t4(n9._candidates.slice(0).concat(n9._known.slice(0)), [], true === d10.ordered && n9._ordered, this._clonePageDefinition(n9.pagesDefinition)) : new t4(n9._candidates.slice(0), n9._known.slice(0), true === d10.ordered && n9._ordered, this._clonePageDefinition(n9.pagesDefinition)), o;
      }
      let c5 = this._parent;
      if (this._adaptedFields.length > 0 && (c5 = new L2({
        parentfeatureset: this._parent,
        adaptedFields: this._adaptedFields,
        extraFilter: null
      })), true === d10.nowhereclause) o = new t4(["GETPAGES"], [], false, {
        aggregatefeaturesetpagedefinition: true,
        resultOffset: 0,
        resultRecordCount: this._maxQuery,
        internal: {
          fullyResolved: false,
          workingItem: null,
          type: "manual",
          iterator: null,
          set: [],
          subfeatureset: new a3({
            parentfeatureset: c5,
            orderbyclause: new e2(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC")
          })
        }
      });
      else {
        let e4 = c5;
        if (null !== i2) {
          let t7 = null;
          i2 && (t7 = this._reformulateWhereClauseWithoutGroupByFields(i2)), e4 = new c3({
            parentfeatureset: e4,
            whereclause: t7
          });
        }
        o = new t4(["GETPAGES"], [], false, {
          aggregatefeaturesetpagedefinition: true,
          resultOffset: 0,
          resultRecordCount: this._maxQuery,
          internal: {
            fullyResolved: false,
            workingItem: null,
            type: "manual",
            iterator: null,
            set: [],
            subfeatureset: new a3({
              parentfeatureset: e4,
              orderbyclause: new e2(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC")
            })
          }
        });
      }
      return o;
    });
  }
  _reformulateWhereClauseWithoutStatsFields(e3) {
    for (const t6 of this._decodedStatsfield) e3 = m3(e3, t6.tofieldname, p(t6.workingexpr, l.Standardised), this._parent.getFieldsIndex());
    return e3;
  }
  _reformulateWhereClauseWithoutGroupByFields(e3) {
    for (const t6 of this._decodedGroupbyfield) t6.tofieldname !== t6.name && (e3 = m3(e3, t6.tofieldname, p(t6.expression, l.Standardised), this._parent.getFieldsIndex()));
    return e3;
  }
  _reformulateOrderClauseWithoutGroupByFields(e3) {
    const t6 = [];
    for (const i2 of this._decodedGroupbyfield) i2.tofieldname !== i2.name && t6.push({
      field: i2.tofieldname,
      newfield: i2.name
    });
    return t6.length > 0 ? e3.replaceFields(t6) : e3;
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true === e3.aggregatefeaturesetpagedefinition ? {
      aggregatefeaturesetpagedefinition: true,
      resultRecordCount: e3.resultRecordCount,
      resultOffset: e3.resultOffset,
      internal: e3.internal
    } : this._parent._clonePageDefinition(e3);
  }
  _refineSetBlock(e3, t6, i2) {
    return __async(this, null, function* () {
      if (true === this._checkIfNeedToExpandCandidatePage(e3, this._maxQuery)) return yield this._expandPagedSet(e3, this._maxQuery, 0, 0, i2), this._refineSetBlock(e3, t6, i2);
      this._checkCancelled(i2);
      const s8 = e3._candidates.length;
      this._refineKnowns(e3, t6);
      e3._candidates.length;
      return e3._candidates.length, e3;
    });
  }
  _expandPagedSet(e3, t6, i2, s8, n9) {
    return this._expandPagedSetFeatureSet(e3, t6, i2, s8, n9);
  }
  _getPhysicalPage(t6, i2, s8) {
    return __async(this, null, function* () {
      if (true === t6.pagesDefinition.aggregatefeaturesetpagedefinition) return this._sequentialGetPhysicalItem(t6, t6.pagesDefinition.resultRecordCount, s8, []);
      const n9 = yield this._getAgregagtePhysicalPage(t6, i2, s8);
      for (const r3 of n9) {
        const t7 = {
          geometry: r3.geometry,
          attributes: {}
        }, i3 = {};
        for (const e3 in r3.attributes) i3[e3.toLowerCase()] = r3.attributes[e3];
        for (const e3 of this._decodedGroupbyfield) t7.attributes[e3.tofieldname] = i3[e3.name.toLowerCase()];
        for (const e3 of this._decodedStatsfield) t7.attributes[e3.tofieldname] = i3[e3.field.toLowerCase()];
        this._featureCache[t7.attributes[this.objectIdField]] = new d3(t7);
      }
      return n9.length;
    });
  }
  _sequentialGetPhysicalItem(e3, t6, i2, s8) {
    return new Promise((n9, r3) => {
      null === e3.pagesDefinition.internal.iterator && (e3.pagesDefinition.internal.iterator = e3.pagesDefinition.internal.subfeatureset.iterator(i2)), true === e3.pagesDefinition.internal.fullyResolved || 0 === t6 ? n9(s8.length) : this._nextAggregateItem(e3, t6, i2, s8, (r4) => {
        null === r4 ? n9(s8.length) : (t6 -= 1, n9(this._sequentialGetPhysicalItem(e3, t6, i2, s8)));
      }, r3);
    });
  }
  _nextAggregateItem(e3, i2, s8, n9, r3, a6) {
    try {
      ve(e3.pagesDefinition.internal.iterator.next()).then((t6) => {
        if (null === t6) {
          if (null !== e3.pagesDefinition.internal.workingItem) {
            const t7 = this._calculateAndAppendAggregateItem(e3.pagesDefinition.internal.workingItem);
            n9.push(t7), e3.pagesDefinition.internal.workingItem = null, e3.pagesDefinition.internal.set.push(t7.attributes[this.objectIdField]), e3.pagesDefinition.internal.fullyResolved = true, r3(null);
          } else e3.pagesDefinition.internal.fullyResolved = true, r3(null);
        } else {
          const l3 = this._generateAggregateHash(t6);
          if (null === e3.pagesDefinition.internal.workingItem) e3.pagesDefinition.internal.workingItem = {
            features: [t6],
            id: l3
          };
          else {
            if (l3 !== e3.pagesDefinition.internal.workingItem.id) {
              const s9 = this._calculateAndAppendAggregateItem(e3.pagesDefinition.internal.workingItem);
              return n9.push(s9), e3.pagesDefinition.internal.workingItem = null, e3.pagesDefinition.internal.set.push(s9.attributes[this.objectIdField]), i2 -= 1, e3.pagesDefinition.internal.workingItem = {
                features: [t6],
                id: l3
              }, void r3(s9);
            }
            e3.pagesDefinition.internal.workingItem.features.push(t6);
          }
          this._nextAggregateItem(e3, i2, s8, n9, r3, a6);
        }
      }, a6);
    } catch (l3) {
      a6(l3);
    }
  }
  _calculateFieldStat(e3, t6, i2) {
    const s8 = [];
    for (let n9 = 0; n9 < e3.features.length; n9++) if (null !== t6.workingexpr) {
      const i3 = t6.workingexpr.calculateValue(e3.features[n9]);
      null !== i3 && (i3 instanceof n3 || i3 instanceof n5 ? s8.push(i3.toNumber()) : i3 instanceof r2 ? s8.push(i3.toMilliseconds()) : s8.push(i3));
    } else s8.push(null);
    switch (t6.typeofstat) {
      case "MIN":
        i2.attributes[t6.tofieldname] = d6("min", s8, -1);
        break;
      case "MAX":
        i2.attributes[t6.tofieldname] = d6("max", s8, -1);
        break;
      case "SUM":
        i2.attributes[t6.tofieldname] = d6("sum", s8, -1);
        break;
      case "COUNT":
        i2.attributes[t6.tofieldname] = s8.length;
        break;
      case "VAR":
        i2.attributes[t6.tofieldname] = d6("var", s8, -1);
        break;
      case "STDDEV":
        i2.attributes[t6.tofieldname] = d6("stddev", s8, -1);
        break;
      case "AVG":
        i2.attributes[t6.tofieldname] = d6("avg", s8, -1);
    }
    return true;
  }
  _calculateAndAppendAggregateItem(t6) {
    const i2 = {
      attributes: {},
      geometry: null
    };
    for (const e3 of this._decodedGroupbyfield) {
      const s9 = e3.singlefield ? t6.features[0].attributes[e3.singlefield] : O.convertValueToStorageFormat(e3.expression.calculateValue(t6.features[0]), e3.sqlType);
      i2.attributes[e3.tofieldname] = s9;
    }
    for (const e3 of this._decodedStatsfield) this._calculateFieldStat(t6, e3, i2);
    const s8 = [];
    for (let e3 = 0; e3 < this._decodedStatsfield.length; e3++) s8.push(this._calculateFieldStat(t6, this._decodedStatsfield[e3], i2));
    return this._featureCache[i2.attributes[this.objectIdField]] = new d3({
      attributes: i2.attributes,
      geometry: i2.geometry
    }), i2;
  }
  _generateAggregateHash(e3) {
    let t6 = "";
    for (const i2 of this._decodedGroupbyfield) {
      const s8 = i2.singlefield ? e3.attributes[i2.singlefield] : i2.expression.calculateValue(e3);
      t6 += null == s8 ? ":" : ":" + s8.toString();
    }
    return x(t6, n8.String);
  }
  _stat() {
    return __async(this, null, function* () {
      return {
        calculated: false
      };
    });
  }
  getFeatureByObjectId() {
    return __async(this, null, function* () {
      return null;
    });
  }
  static registerAction() {
    x2._featuresetFunctions.groupby = function(e3, t6) {
      return new _O({
        parentfeatureset: this,
        groupbyfields: e3,
        statsfields: t6
      });
    };
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/actions/Top.js
var a5 = class _a extends x2 {
  constructor(t6) {
    super(t6), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = t6.topnum, this._parent = t6.parentfeatureset;
  }
  _getSet(t6) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const e3 = yield this._parent._getSet(t6);
        return this._wset = new t4(e3._candidates.slice(0), e3._known.slice(0), false, this._clonePageDefinition(e3.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset;
      }
      return this._wset;
    });
  }
  _setKnownLength(t6) {
    return t6._known.length > 0 && "GETPAGES" === t6._known[t6._known.length - 1] ? t6._known.length - 1 : t6._known.length;
  }
  _isInFeatureSet(t6) {
    const e3 = this._parent._isInFeatureSet(t6);
    if (e3 === s3.NotInFeatureSet) return e3;
    const n9 = this._idstates[t6];
    return n9 === s3.InFeatureSet || n9 === s3.NotInFeatureSet ? n9 : e3 === s3.InFeatureSet && void 0 === n9 ? this._countedin < this._topnum ? (this._idstates[t6] = s3.InFeatureSet, this._countedin++, s3.InFeatureSet) : (this._idstates[t6] = s3.NotInFeatureSet, s3.NotInFeatureSet) : s3.Unknown;
  }
  _expandPagedSet(n9, s8, i2, a6, o) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s2(r.NotImplemented);
      if (s8 > this._topnum && (s8 = this._topnum), this._countedin >= this._topnum && n9.pagesDefinition.internal.set.length <= n9.pagesDefinition.resultOffset) {
        let t6 = n9._known.length;
        return t6 > 0 && "GETPAGES" === n9._known[t6 - 1] && (n9._known.length = t6 - 1), t6 = n9._candidates.length, t6 > 0 && "GETPAGES" === n9._candidates[t6 - 1] && (n9._candidates.length = t6 - 1), "success";
      }
      const r3 = yield this._parent._expandPagedSet(n9, s8, i2, a6, o);
      return this._setKnownLength(n9) > this._topnum && (n9._known.length = this._topnum), this._setKnownLength(n9) >= this._topnum && (n9._candidates.length = 0), r3;
    });
  }
  _getFeatures(t6, e3, n9, i2) {
    return __async(this, null, function* () {
      const a6 = [], o = this._maxQueryRate();
      if (true === this._checkIfNeedToExpandKnownPage(t6, o)) return yield this._expandPagedSet(t6, o, 0, 0, i2), this._getFeatures(t6, e3, n9, i2);
      -1 !== e3 && void 0 === this._featureCache[e3] && a6.push(e3);
      let r3 = 0;
      for (let s8 = t6._lastFetchedIndex; s8 < t6._known.length && (r3++, r3 <= n9 && (t6._lastFetchedIndex += 1), !(void 0 === this._featureCache[t6._known[s8]] && (t6._known[s8] !== e3 && a6.push(t6._known[s8]), a6.length > o))); s8++) ;
      if (0 === a6.length) return "success";
      const _ = new t4([], a6, false, null), h2 = Math.min(a6.length, n9);
      yield this._parent._getFeatures(_, -1, h2, i2);
      for (let s8 = 0; s8 < h2; s8++) {
        const t7 = this._parent._featureFromCache(a6[s8]);
        void 0 !== t7 && (this._featureCache[a6[s8]] = t7);
      }
      return "success";
    });
  }
  _getFilteredSet(t6, e3, n9, i2, a6) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const o = yield this._getSet(a6);
      return new t4(o._candidates.slice(0).concat(o._known.slice(0)), [], false, this._clonePageDefinition(o.pagesDefinition));
    });
  }
  _refineKnowns(t6, e3) {
    let n9 = 0, s8 = null;
    const a6 = [];
    for (let o = 0; o < t6._candidates.length; o++) {
      const r3 = this._isInFeatureSet(t6._candidates[o]);
      if (r3 === s3.InFeatureSet) {
        if (t6._known.push(t6._candidates[o]), n9 += 1, null === s8 ? s8 = {
          start: o,
          end: o
        } : s8.end === o - 1 ? s8.end = o : (a6.push(s8), s8 = {
          start: o,
          end: o
        }), t6._known.length >= this._topnum) break;
      } else if (r3 === s3.NotInFeatureSet) null === s8 ? s8 = {
        start: o,
        end: o
      } : s8.end === o - 1 ? s8.end = o : (a6.push(s8), s8 = {
        start: o,
        end: o
      }), n9 += 1;
      else if (r3 === s3.Unknown) break;
      if (n9 >= e3) break;
    }
    null !== s8 && a6.push(s8);
    for (let i2 = a6.length - 1; i2 >= 0; i2--) t6._candidates.splice(a6[i2].start, a6[i2].end - a6[i2].start + 1);
    this._setKnownLength(t6) > this._topnum && (t6._known = t6._known.slice(0, this._topnum)), this._setKnownLength(t6) >= this._topnum && (t6._candidates = []);
  }
  _stat() {
    return __async(this, null, function* () {
      return {
        calculated: false
      };
    });
  }
  _canDoAggregates() {
    return __async(this, null, function* () {
      return false;
    });
  }
  static registerAction() {
    x2._featuresetFunctions.top = function(t6) {
      return new _a({
        parentfeatureset: this,
        topnum: t6
      });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// ../../../node_modules/@arcgis/core/rest/query/executeQuery.js
function f6(t6, o, r3, e3) {
  return __async(this, null, function* () {
    return m4(o, yield c4(t6, o, r3, e3), r3, e3);
  });
}
function c4(t6, o, r3, e3) {
  return __async(this, null, function* () {
    const n9 = __spreadValues({}, e3), i2 = p2(o, r3), u2 = null != o.outStatistics?.[0], f7 = has("featurelayer-pbf-statistics"), c5 = !u2 || f7;
    let m5;
    if ("pbf" === r3?.format && c5) try {
      m5 = yield n6(t6, i2, n9);
    } catch (d10) {
      if ("query:parsing-pbf" !== d10.name) throw d10;
      r3.format = "json";
    }
    return "json" !== r3?.format && c5 || (m5 = yield a(t6, i2, n9)), l2(r3?.fieldsIndex, m5.fields), m5;
  });
}
function l2(t6, o) {
  if (null != t6 && null != o) for (const r3 of o) {
    const o2 = t6.get(r3.name);
    o2 && Object.assign(r3, o2.toJSON());
  }
}
function m4(t6, r3, e3, n9) {
  return __async(this, null, function* () {
    const s8 = e3?.infoFor3D;
    if (!d7(t6, s8) || null == s8 || !r3.assetMaps || !r3.features?.length) return d4.fromJSON(r3);
    const {
      meshFeatureSetFromJSON: a6
    } = yield h(import("./meshFeatureSet-Z5LCHGYV.js"), n9);
    return a6(t6, s8, r3);
  });
}
function p2(o, s8) {
  let a6 = b.from(o);
  a6.sourceSpatialReference = a6.sourceSpatialReference ?? s8?.sourceSpatialReference ?? null, (s8?.gdbVersion || s8?.dynamicDataSource) && (a6 = a6 === o ? a6.clone() : a6, a6.gdbVersion = o.gdbVersion || s8.gdbVersion, a6.dynamicDataSource = o.dynamicDataSource ? K.from(o.dynamicDataSource) : s8.dynamicDataSource);
  const i2 = s8?.infoFor3D;
  if (null != i2 && d7(o, i2)) {
    a6 = a6 === o ? a6.clone() : a6, a6.formatOf3DObjects = null;
    const {
      supportedFormats: n9,
      queryFormats: s9
    } = i2, u2 = u("model/gltf-binary", n9) ?? i("glb", n9), f7 = u("model/gltf+json", n9) ?? i("gtlf", n9);
    for (const t6 of s9) {
      if (t6 === u2) {
        a6.formatOf3DObjects = t6;
        break;
      }
      t6 !== f7 || a6.formatOf3DObjects || (a6.formatOf3DObjects = t6);
    }
    if (!a6.formatOf3DObjects) throw new s("query:unsupported-3d-query-formats", "Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");
    if (null == a6.outFields || !a6.outFields.includes("*")) {
      a6 = a6 === o ? a6.clone() : a6, null == a6.outFields && (a6.outFields = []);
      const {
        originX: t6,
        originY: r3,
        originZ: e3,
        translationX: n10,
        translationY: s10,
        translationZ: u3,
        scaleX: f8,
        scaleY: c5,
        scaleZ: l3,
        rotationX: m5,
        rotationY: p3,
        rotationZ: d10,
        rotationDeg: y5
      } = i2.transformFieldRoles;
      a6.outFields.push(t6, r3, e3, n10, s10, u3, f8, c5, l3, m5, p3, d10, y5);
    }
  }
  return a6;
}
function d7(t6, o) {
  return null != o && true === t6.returnGeometry && "xyFootprint" !== t6.multipatchOption && !t6.outStatistics;
}

// ../../../node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerDynamic.js
var P = class _P extends x2 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = false, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = false, this._requestStandardised = false, this._useDefinitionExpression = true, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return D;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e3) {
    this._pageJustIds = e3;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e3) {
    const t6 = this.urlQueryPath + "," + J(e3.toJSON());
    return x(t6, n8.String);
  }
  loadImpl() {
    return __async(this, null, function* () {
      return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (yield this._layer.load(), this._initialiseFeatureSet(), this);
    });
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this.hasZ = true === this._layer?.capabilities?.data?.supportsZ, this.hasM = true === this._layer?.capabilities?.data?.supportsM, null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e3 = [], t6 = [];
      for (const i2 of this.fields) if ("oid" === i2.type) e3.push(i2), t6.push(i2.name);
      else for (const r3 of this._overrideFields) if (r3.toLowerCase() === i2.name.toLowerCase()) {
        e3.push(i2), t6.push(i2.name);
        break;
      }
      this.fields = e3, this._overrideFields = t6;
    }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e3 = this._layer.source.sourceJSON.currentVersion;
      true === this._layer.source.sourceJSON.useStandardizedQueries ? (this._databaseType = l.StandardisedNoInterval, null != e3 && e3 >= 10.61 && (this._databaseType = l.Standardised)) : null != e3 && (e3 >= 10.5 && (this._databaseType = l.StandardisedNoInterval, this._requestStandardised = true), e3 >= 10.61 && (this._databaseType = l.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e3 of this.fields) "global-id" === e3.type && (this.globalIdField = e3.name);
    "subtype-group" === this._layer.type ? (this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.types = null, this.typeIdField = null) : "oriented-imagery" === this._layer.type ? (this.subtypeField = null, this.subtypes = null, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types) : (this.subtypeField = this._layer.subtypeField, this.subtypes = this._layer.subtypes, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types);
  }
  _isInFeatureSet() {
    return s3.InFeatureSet;
  }
  _refineSetBlock(e3) {
    return __async(this, null, function* () {
      return e3;
    });
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const t6 = yield this._getFilteredSet("", null, null, null, e3);
        return this._wset = t6, t6;
      }
      return this._wset;
    });
  }
  _runDatabaseProbe(e3) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const t6 = new b();
      this.datesInUnknownTimezone && (t6.timeReferenceUnknownClient = true), t6.where = e3.replace("OBJECTID", this._layer.objectIdField);
      try {
        return yield this._layer.queryObjectIds(t6), true;
      } catch (i2) {
        return false;
      }
    });
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || true !== this._layer.capabilities.query.supportsPagination);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e3) {
    const t6 = this._layer?.capabilities?.query;
    return !e3.outStatistics && true === t6?.supportsFormatPBF && true === t6?.supportsQuantizationEditMode;
  }
  queryPBF(e3) {
    return __async(this, null, function* () {
      return e3.quantizationParameters = {
        mode: "edit"
      }, (yield f6(this._layer.parsedUrl, e3, {
        format: "pbf"
      }, {})).unquantize();
    });
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion || "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return {
      title: this._layer.title ?? "",
      source: this,
      canQueryRelated: true,
      capabilities: this._layer.capabilities,
      databaseType: this._databaseType,
      requestStandardised: this._requestStandardised
    };
  }
  executeQuery(e3, t6) {
    e3.returnZ = this.hasZ, e3.returnM = this.hasM;
    const i2 = "execute" === t6 ? s6 : "executeForCount" === t6 ? s4 : s5, r3 = "execute" === t6 && this.pbfSupportedForQuery(e3);
    let s8 = null;
    if (this.recentlyUsedQueries) {
      const t7 = this.convertQueryToLruCacheKey(e3);
      s8 = this.recentlyUsedQueries.getFromCache(t7), null === s8 && (s8 = true !== r3 ? i2(this._layer.parsedUrl.path, e3) : this.queryPBF(e3), this.recentlyUsedQueries.addToCache(t7, s8), s8 = s8.catch((e4) => {
        throw this.recentlyUsedQueries?.removeFromCache(t7), e4;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({
      layer: this._layer,
      query: e3,
      method: t6
    }), null === s8 && (s8 = true !== r3 ? i2(this._layer.parsedUrl.path, e3) : this.queryPBF(e3)), s8;
  }
  _getFilteredSet(e3, t6, i2, r3, s8) {
    return __async(this, null, function* () {
      const a6 = yield this.databaseType();
      if (this.isTable() && t6 && null !== e3 && "" !== e3) {
        return new t4([], [], true, null);
      }
      if (this._canUsePagination()) return this._getFilteredSetUsingPaging(e3, t6, i2, r3, s8);
      let n9 = "", l3 = false;
      null !== r3 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (n9 = r3.constructClause(), l3 = true);
      const u2 = new b();
      this.datesInUnknownTimezone && (u2.timeReferenceUnknownClient = true), u2.where = null === i2 ? null === t6 ? "1=1" : "" : p(i2, a6), this._requestStandardised && (u2.sqlFormat = "standard"), u2.spatialRelationship = this._makeRelationshipEnum(e3), u2.outSpatialReference = this.spatialReference, u2.orderByFields = "" !== n9 ? n9.split(",") : null, u2.geometry = null === t6 ? null : t6, u2.relationParameter = this._makeRelationshipParam(e3);
      let d10 = yield this.executeQuery(u2, "executeForIds");
      null === d10 && (d10 = []), this._checkCancelled(s8);
      return new t4([], d10, l3, null);
    });
  }
  _expandPagedSet(e3, t6, i2, r3, s8) {
    return this._expandPagedSetFeatureSet(e3, t6, i2, r3, s8);
  }
  _getFilteredSetUsingPaging(e3, t6, i2, r3, s8) {
    return __async(this, null, function* () {
      let a6 = "", n9 = false;
      null !== r3 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (a6 = r3.constructClause(), n9 = true);
      const l3 = yield this.databaseType();
      let u2 = null === i2 ? null === t6 ? "1=1" : "" : p(i2, l3);
      this._layer.definitionExpression && this._useDefinitionExpression && (u2 = "" !== u2 ? "((" + this._layer.definitionExpression + ") AND (" + u2 + "))" : this._layer.definitionExpression);
      let d10 = this._maxQueryRate();
      const p3 = this._layer.capabilities?.query.maxRecordCount;
      null != p3 && p3 < d10 && (d10 = p3);
      let h2 = null;
      if (true === this._pageJustIds) h2 = new t4([], ["GETPAGES"], n9, {
        spatialRel: this._makeRelationshipEnum(e3),
        relationParam: this._makeRelationshipParam(e3),
        outFields: this._layer.objectIdField,
        resultRecordCount: d10,
        resultOffset: 0,
        geometry: null === t6 ? null : t6,
        where: u2,
        orderByFields: a6,
        returnGeometry: false,
        returnIdsOnly: "false",
        internal: {
          set: [],
          lastRetrieved: 0,
          lastPage: 0,
          fullyResolved: false
        }
      });
      else {
        let i3 = true;
        true === this._removeGeometry && (i3 = false);
        const r4 = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]);
        h2 = new t4([], ["GETPAGES"], n9, {
          spatialRel: this._makeRelationshipEnum(e3),
          relationParam: this._makeRelationshipParam(e3),
          outFields: r4.join(","),
          resultRecordCount: d10,
          resultOffset: 0,
          geometry: null === t6 ? null : t6,
          where: u2,
          orderByFields: a6,
          returnGeometry: i3,
          returnIdsOnly: "false",
          internal: {
            set: [],
            lastRetrieved: 0,
            lastPage: 0,
            fullyResolved: false
          }
        });
      }
      return yield this._expandPagedSet(h2, d10, 0, 1, s8), h2;
    });
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true !== e3.groupbypage ? {
      groupbypage: false,
      spatialRel: e3.spatialRel,
      relationParam: e3.relationParam,
      outFields: e3.outFields,
      resultRecordCount: e3.resultRecordCount,
      resultOffset: e3.resultOffset,
      geometry: e3.geometry,
      where: e3.where,
      orderByFields: e3.orderByFields,
      returnGeometry: e3.returnGeometry,
      returnIdsOnly: e3.returnIdsOnly,
      internal: e3.internal
    } : {
      groupbypage: true,
      spatialRel: e3.spatialRel,
      relationParam: e3.relationParam,
      outFields: e3.outFields,
      resultRecordCount: e3.resultRecordCount,
      useOIDpagination: e3.useOIDpagination,
      generatedOid: e3.generatedOid,
      groupByFieldsForStatistics: e3.groupByFieldsForStatistics,
      resultOffset: e3.resultOffset,
      outStatistics: e3.outStatistics,
      geometry: e3.geometry,
      where: e3.where,
      orderByFields: e3.orderByFields,
      returnGeometry: e3.returnGeometry,
      returnIdsOnly: e3.returnIdsOnly,
      internal: e3.internal
    };
  }
  _getPhysicalPage(e3, t6, i2) {
    return __async(this, null, function* () {
      const r3 = e3.pagesDefinition.internal.lastRetrieved, s8 = r3, a6 = e3.pagesDefinition.internal.lastPage, n9 = new b();
      this._requestStandardised && (n9.sqlFormat = "standard"), this.datesInUnknownTimezone && (n9.timeReferenceUnknownClient = true), n9.spatialRelationship = e3.pagesDefinition.spatialRel, n9.relationParameter = e3.pagesDefinition.relationParam, n9.outFields = e3.pagesDefinition.outFields.split(","), n9.num = e3.pagesDefinition.resultRecordCount, n9.start = e3.pagesDefinition.internal.lastPage, n9.geometry = e3.pagesDefinition.geometry, n9.where = e3.pagesDefinition.where, n9.orderByFields = "" !== e3.pagesDefinition.orderByFields ? e3.pagesDefinition.orderByFields.split(",") : null, n9.returnGeometry = e3.pagesDefinition.returnGeometry, n9.outSpatialReference = this.spatialReference;
      const l3 = yield this.executeQuery(n9, "execute");
      if (this._checkCancelled(i2), e3.pagesDefinition.internal.lastPage !== a6) return "done";
      const o = this._layer.objectIdField;
      for (let u2 = 0; u2 < l3.features.length; u2++) e3.pagesDefinition.internal.set[s8 + u2] = l3.features[u2].attributes[o];
      if (false === this._pageJustIds) for (let u2 = 0; u2 < l3.features.length; u2++) this._featureCache[l3.features[u2].attributes[o]] = l3.features[u2];
      return (void 0 === l3.exceededTransferLimit && l3.features.length !== e3.pagesDefinition.resultRecordCount || false === l3.exceededTransferLimit) && (e3.pagesDefinition.internal.fullyResolved = true), e3.pagesDefinition.internal.lastRetrieved = r3 + l3.features.length, e3.pagesDefinition.internal.lastPage += e3.pagesDefinition.resultRecordCount, "done";
    });
  }
  _fieldsIncludingObjectId(e3) {
    if (null === e3) return [this.objectIdField];
    const t6 = e3.slice(0);
    if (t6.includes("*")) return t6;
    let i2 = false;
    for (const r3 of t6) if (r3.toUpperCase() === this.objectIdField.toUpperCase()) {
      i2 = true;
      break;
    }
    return false === i2 && t6.push(this.objectIdField), t6;
  }
  _getFeatures(e3, t6, i2, r3) {
    return __async(this, null, function* () {
      const s8 = [];
      if (-1 !== t6 && void 0 === this._featureCache[t6] && s8.push(t6), true === this._checkIfNeedToExpandKnownPage(e3, this._maxProcessingRate())) return yield this._expandPagedSet(e3, this._maxProcessingRate(), 0, 0, r3), this._getFeatures(e3, t6, i2, r3);
      let l3 = 0;
      for (let a6 = e3._lastFetchedIndex; a6 < e3._known.length; a6++) {
        if (e3._lastFetchedIndex += 1, l3++, void 0 === this._featureCache[e3._known[a6]]) {
          let i3 = false;
          if (null !== this._layer._mode && void 0 !== this._layer._mode) {
            const t7 = this._layer._mode;
            if (void 0 !== t7._featureMap[e3._known[a6]]) {
              const r4 = t7._featureMap[e3._known[a6]];
              null !== r4 && (i3 = true, this._featureCache[e3._known[a6]] = r4);
            }
          }
          if (false === i3 && (e3._known[a6] !== t6 && s8.push(e3._known[a6]), s8.length >= this._maxProcessingRate() - 1)) break;
        }
        if (l3 >= i2 && 0 === s8.length) break;
      }
      if (0 === s8.length) return "success";
      const o = new b();
      this._requestStandardised && (o.sqlFormat = "standard"), this.datesInUnknownTimezone && (o.timeReferenceUnknownClient = true), o.objectIds = s8, o.outFields = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), o.returnGeometry = true, true === this._removeGeometry && (o.returnGeometry = false), o.outSpatialReference = this.spatialReference;
      const u2 = yield this.executeQuery(o, "execute");
      if (this._checkCancelled(r3), void 0 !== u2.error) throw new s2(r.RequestFailed, {
        reason: u2.error
      });
      const d10 = this._layer.objectIdField;
      for (let a6 = 0; a6 < u2.features.length; a6++) this._featureCache[u2.features[a6].attributes[d10]] = u2.features[a6];
      return "success";
    });
  }
  _getDistinctPages(e3, t6, i2, r3, s8, l3, o, u2, d10) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const p3 = yield this.databaseType();
      let h2 = i2.parseTree.column;
      const c5 = this._layer.fields ?? [];
      for (let a6 = 0; a6 < c5.length; a6++) if (c5[a6].name.toLowerCase() === h2.toLowerCase()) {
        h2 = c5[a6].name;
        break;
      }
      const f7 = new b();
      this._requestStandardised && (f7.sqlFormat = "standard"), this.datesInUnknownTimezone && (f7.timeReferenceUnknownClient = true);
      let m5 = null === l3 ? null === s8 ? "1=1" : "" : p(l3, p3);
      this._layer.definitionExpression && this._useDefinitionExpression && (m5 = "" !== m5 ? "((" + this._layer.definitionExpression + ") AND (" + m5 + "))" : this._layer.definitionExpression), f7.where = m5, f7.spatialRelationship = this._makeRelationshipEnum(r3), f7.relationParameter = this._makeRelationshipParam(r3), f7.geometry = null === s8 ? null : s8, f7.returnDistinctValues = true, f7.returnGeometry = false, f7.outFields = [h2];
      const _ = yield this.executeQuery(f7, "execute");
      if (this._checkCancelled(d10), !_.hasOwnProperty("features")) throw new s2(r.InvalidStatResponse);
      let g4 = false;
      for (let a6 = 0; a6 < c5.length; a6++) if (c5[a6].name === h2) {
        "date" === c5[a6].type && (g4 = true);
        break;
      }
      for (let a6 = 0; a6 < _.features.length; a6++) {
        if (g4) {
          const e4 = _.features[a6].attributes[h2];
          null !== e4 ? u2.push(new Date(e4)) : u2.push(e4);
        } else u2.push(_.features[a6].attributes[h2]);
        if (u2.length >= o) break;
      }
      if (0 === _.features.length) return u2;
      if (_.features.length === this._layer.capabilities?.query.maxRecordCount && u2.length < o) {
        return {
          calculated: true,
          result: yield this._getDistinctPages(e3 + _.features.length, t6, i2, r3, s8, l3, o, u2, d10)
        };
      }
      return u2;
    });
  }
  _distinctStat(e3, t6, i2, r3, s8, a6, n9) {
    return __async(this, null, function* () {
      return {
        calculated: true,
        result: yield this._getDistinctPages(0, e3, t6, i2, r3, s8, a6, [], n9)
      };
    });
  }
  isTable() {
    return this._layer.isTable || null === this._layer.geometryType || "table" === this._layer.type || "" === this._layer.geometryType || "esriGeometryNull" === this._layer.geometryType;
  }
  _countstat(e3, t6, i2, r3) {
    return __async(this, null, function* () {
      const s8 = yield this.databaseType(), a6 = new b();
      if (this._requestStandardised && (a6.sqlFormat = "standard"), this.isTable() && i2 && null !== t6 && "" !== t6) return {
        calculated: true,
        result: 0
      };
      let n9 = null === r3 ? null === i2 ? "1=1" : "" : p(r3, s8);
      this._layer.definitionExpression && this._useDefinitionExpression && (n9 = "" !== n9 ? "((" + this._layer.definitionExpression + ") AND (" + n9 + "))" : this._layer.definitionExpression), a6.where = n9, this.datesInUnknownTimezone && (a6.timeReferenceUnknownClient = true), a6.where = n9, a6.spatialRelationship = this._makeRelationshipEnum(t6), a6.relationParameter = this._makeRelationshipParam(t6), a6.geometry = null === i2 ? null : i2, a6.returnGeometry = false;
      return {
        calculated: true,
        result: yield this.executeQuery(a6, "executeForCount")
      };
    });
  }
  _stats(e3, t6, i2, r3, s8, l3, o) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const u2 = this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsSqlExpression, d10 = this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsStatistics, p3 = this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsDistinct;
      if ("count" === e3) return p3 ? this._countstat(e3, i2, r3, s8) : {
        calculated: false
      };
      if (false === d10 || false === D2(t6) && false === u2 || false === t6.isStandardized) return "" !== i2 || null !== s8 ? {
        calculated: false
      } : this._manualStat(e3, t6, l3, o);
      if ("distinct" === e3) return false === p3 ? "" !== i2 || null !== s8 ? {
        calculated: false
      } : this._manualStat(e3, t6, l3, o) : this._distinctStat(e3, t6, i2, r3, s8, l3, o);
      const h2 = yield this.databaseType();
      if (this.isTable() && r3 && null !== i2 && "" !== i2) return {
        calculated: true,
        result: null
      };
      const c5 = new b();
      this._requestStandardised && (c5.sqlFormat = "standard");
      let _ = null === s8 ? null === r3 ? "1=1" : "" : p(s8, h2);
      this._layer.definitionExpression && this._useDefinitionExpression && (_ = "" !== _ ? "((" + this._layer.definitionExpression + ") AND (" + _ + "))" : this._layer.definitionExpression), c5.where = _, c5.spatialRelationship = this._makeRelationshipEnum(i2), c5.relationParameter = this._makeRelationshipParam(i2), c5.geometry = null === r3 ? null : r3, this.datesInUnknownTimezone && (c5.timeReferenceUnknownClient = true);
      const g4 = new m2();
      g4.statisticType = w2(e3), g4.onStatisticField = p(t6, h2), g4.outStatisticFieldName = "ARCADE_STAT_RESULT", c5.returnGeometry = false;
      let w3 = "ARCADE_STAT_RESULT";
      c5.outStatistics = [g4];
      const R = yield this.executeQuery(c5, "execute");
      if (!R.hasOwnProperty("features") || 0 === R.features.length) throw new s2(r.InvalidStatResponse);
      let b4 = false;
      const F4 = R.fields ?? [];
      for (let a6 = 0; a6 < F4.length; a6++) if ("ARCADE_STAT_RESULT" === F4[a6].name.toUpperCase()) {
        w3 = F4[a6].name, "date" === F4[a6].type && (b4 = true);
        break;
      }
      if (b4) {
        let e4 = R.features[0].attributes[w3];
        return null !== e4 && (e4 = new Date(R.features[0].attributes[w3])), {
          calculated: true,
          result: e4
        };
      }
      return {
        calculated: true,
        result: R.features[0].attributes[w3]
      };
    });
  }
  _stat(e3, t6, i2, r3, s8, a6, n9) {
    return this._stats(e3, t6, i2, r3, s8, a6, n9);
  }
  _canDoAggregates(e3, t6) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      let i2 = false;
      const r3 = this._layer.capabilities?.query, s8 = true === r3?.supportsSqlExpression;
      if (null != r3 && true === r3.supportsStatistics && true === r3.supportsOrderBy && (i2 = true), i2) for (let a6 = 0; a6 < t6.length - 1; a6++) (false === t6[a6].workingexpr?.isStandardized || false === D2(t6[a6].workingexpr) && false === s8) && (i2 = false);
      return false !== i2;
    });
  }
  _makeRelationshipEnum(e3) {
    if (e3.includes("esriSpatialRelRelation")) return "relation";
    switch (e3) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e3;
  }
  _makeRelationshipParam(e3) {
    return e3.includes("esriSpatialRelRelation") ? e3.split(":")[1] : "";
  }
  _getAggregatePagesDataSourceDefinition(e3, t6, i2, r3, s8, a6, n9) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const l3 = yield this.databaseType();
      let u2 = "", d10 = false, p3 = false;
      null !== a6 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (u2 = a6.constructClause(), p3 = true), this._layer.capabilities && this._layer.capabilities.query && false === this._layer.capabilities.query.supportsPagination && (p3 = false, d10 = true, u2 = this._layer.objectIdField);
      const h2 = [];
      for (let o = 0; o < t6.length; o++) {
        const e4 = new m2();
        e4.onStatisticField = null !== t6[o].workingexpr ? p(t6[o].workingexpr, l3) : "", e4.outStatisticFieldName = t6[o].field, e4.statisticType = t6[o].toStatisticsName(), h2.push(e4);
      }
      "" === u2 && (u2 = e3.join(","));
      let c5 = this._maxQueryRate();
      const f7 = this._layer.capabilities?.query.maxRecordCount;
      null != f7 && f7 < c5 && (c5 = f7);
      let m5 = null === s8 ? null === r3 ? "1=1" : "" : p(s8, l3);
      this._layer.definitionExpression && this._useDefinitionExpression && (m5 = "" !== m5 ? "((" + this._layer.definitionExpression + ") AND (" + m5 + "))" : this._layer.definitionExpression);
      return new t4([], ["GETPAGES"], p3, {
        groupbypage: true,
        spatialRel: this._makeRelationshipEnum(i2),
        relationParam: this._makeRelationshipParam(i2),
        outFields: ["*"],
        useOIDpagination: d10,
        generatedOid: n9,
        resultRecordCount: c5,
        resultOffset: 0,
        groupByFieldsForStatistics: e3,
        outStatistics: h2,
        geometry: null === r3 ? null : r3,
        where: m5,
        orderByFields: u2,
        returnGeometry: false,
        returnIdsOnly: false,
        internal: {
          lastMaxId: -1,
          set: [],
          lastRetrieved: 0,
          lastPage: 0,
          fullyResolved: false
        }
      });
    });
  }
  _getAgregagtePhysicalPage(t6, i2, r3) {
    return __async(this, null, function* () {
      let s8 = t6.pagesDefinition.where;
      true === t6.pagesDefinition.useOIDpagination && (s8 = "" !== s8 ? "(" + s8 + ") AND (" + t6.pagesDefinition.generatedOid + ">" + t6.pagesDefinition.internal.lastMaxId.toString() + ")" : t6.pagesDefinition.generatedOid + ">" + t6.pagesDefinition.internal.lastMaxId.toString());
      const l3 = t6.pagesDefinition.internal.lastRetrieved, o = l3, u2 = t6.pagesDefinition.internal.lastPage, d10 = new b();
      if (this._requestStandardised && (d10.sqlFormat = "standard"), d10.where = s8, d10.spatialRelationship = t6.pagesDefinition.spatialRel, d10.relationParameter = t6.pagesDefinition.relationParam, d10.outFields = t6.pagesDefinition.outFields, d10.outStatistics = t6.pagesDefinition.outStatistics, d10.geometry = t6.pagesDefinition.geometry, d10.groupByFieldsForStatistics = t6.pagesDefinition.groupByFieldsForStatistics, d10.num = t6.pagesDefinition.resultRecordCount, d10.start = t6.pagesDefinition.internal.lastPage, d10.returnGeometry = t6.pagesDefinition.returnGeometry, this.datesInUnknownTimezone && (d10.timeReferenceUnknownClient = true), d10.orderByFields = "" !== t6.pagesDefinition.orderByFields ? t6.pagesDefinition.orderByFields.split(",") : null, this.isTable() && d10.geometry && d10.spatialRelationship) return [];
      const p3 = yield this.executeQuery(d10, "execute");
      if (this._checkCancelled(r3), !p3.hasOwnProperty("features")) throw new s2(r.InvalidStatResponse);
      const h2 = [];
      if (t6.pagesDefinition.internal.lastPage !== u2) return [];
      p3.features.length > 0 && void 0 === p3.features[0].attributes[t6.pagesDefinition.generatedOid] && (t6.pagesDefinition.generatedOid = t6.pagesDefinition.generatedOid.toLowerCase());
      for (let e3 = 0; e3 < p3.features.length; e3++) t6.pagesDefinition.internal.set[o + e3] = p3.features[e3].attributes[t6.pagesDefinition.generatedOid];
      for (let a6 = 0; a6 < p3.features.length; a6++) h2.push(new d3({
        attributes: p3.features[a6].attributes,
        geometry: null
      }));
      return true === t6.pagesDefinition.useOIDpagination ? 0 === p3.features.length ? t6.pagesDefinition.internal.fullyResolved = true : t6.pagesDefinition.internal.lastMaxId = p3.features[p3.features.length - 1].attributes[t6.pagesDefinition.generatedOid] : (void 0 === p3.exceededTransferLimit && p3.features.length !== t6.pagesDefinition.resultRecordCount || false === p3.exceededTransferLimit) && (t6.pagesDefinition.internal.fullyResolved = true), t6.pagesDefinition.internal.lastRetrieved = l3 + p3.features.length, t6.pagesDefinition.internal.lastPage += t6.pagesDefinition.resultRecordCount, h2;
    });
  }
  static create(e3, t6, i2, r3, s8) {
    const a6 = new Ze({
      url: e3,
      outFields: null === t6 ? ["*"] : t6
    });
    return new _P({
      layer: a6,
      spatialReference: i2,
      lrucache: r3,
      interceptor: s8
    });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON?.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return k(this._layer.parsedUrl.path);
  }
  queryAttachments(e3, t6, i2, a6, n9) {
    return __async(this, null, function* () {
      function l3(e4) {
        const t7 = e4.capabilities;
        return t7?.data.supportsAttachment && t7?.operations.supportsQueryAttachments;
      }
      const o = this._layer;
      if (l3(o)) {
        const l4 = {
          objectIds: [e3],
          returnMetadata: n9
        };
        (t6 && t6 > 0 || i2 && i2 > 0) && (l4.size = [t6 && t6 > 0 ? t6 : 0, i2 && i2 > 0 ? i2 : t6 + 1]), a6 && a6.length > 0 && (l4.attachmentTypes = a6), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({
          layer: o,
          query: l4,
          method: "attachments"
        });
        const u2 = yield o.queryAttachments(new c2(l4)), d10 = [];
        return u2 && u2[e3] && u2[e3].forEach((t7) => {
          const i3 = this._layer.parsedUrl.path + "/" + e3.toString() + "/attachments/" + t7.id.toString();
          let a7 = null;
          n9 && t7.exifInfo && (a7 = N2.convertJsonToArcade(t7.exifInfo, "system", true)), d10.push(new t3(t7.id, t7.name, t7.contentType, t7.size, i3, a7, t7.keywords ?? null));
        }), d10;
      }
      return [];
    });
  }
  queryRelatedFeatures(t6) {
    return __async(this, null, function* () {
      const r3 = {
        f: "json",
        relationshipId: t6.relationshipId.toString(),
        definitionExpression: t6.where,
        outFields: t6.outFields?.join(","),
        returnGeometry: t6.returnGeometry.toString()
      };
      void 0 !== t6.resultOffset && null !== t6.resultOffset && (r3.resultOffset = t6.resultOffset.toString()), void 0 !== t6.resultRecordCount && null !== t6.resultRecordCount && (r3.resultRecordCount = t6.resultRecordCount.toString()), t6.orderByFields && (r3.orderByFields = t6.orderByFields.join(",")), t6.objectIds && t6.objectIds.length > 0 && (r3.objectIds = t6.objectIds.join(",")), t6.outSpatialReference && (r3.outSR = d(t6.outSpatialReference)), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({
        layer: this._layer,
        queryPayload: r3,
        method: "relatedrecords",
        url: this._layer.parsedUrl.path + "/queryRelatedRecords"
      });
      const s8 = yield U(this._layer.parsedUrl.path + "/queryRelatedRecords", {
        responseType: "json",
        query: r3
      });
      if (s8.data) {
        const t7 = {}, i2 = s8.data;
        if (i2?.relatedRecordGroups) {
          const r4 = i2.spatialReference;
          for (const s9 of i2.relatedRecordGroups) {
            const a6 = s9.objectId, n9 = [];
            for (const t8 of s9.relatedRecords) {
              t8.geometry && (t8.geometry.spatialReference = r4);
              const i3 = new d3({
                geometry: t8.geometry ? y(t8.geometry) : null,
                attributes: t8.attributes
              });
              n9.push(i3);
            }
            t7[a6] = {
              features: n9,
              exceededTransferLimit: true === i2.exceededTransferLimit
            };
          }
        }
        return t7;
      }
      throw new s2(r.InvalidRequest);
    });
  }
  getFeatureByObjectId(e3, t6) {
    return __async(this, null, function* () {
      const i2 = new b();
      i2.outFields = t6, i2.returnGeometry = false, i2.outSpatialReference = this.spatialReference, i2.where = this.objectIdField + "=" + e3.toString(), this.datesInUnknownTimezone && (i2.timeReferenceUnknownClient = true), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({
        layer: this._layer,
        query: i2,
        method: "execute"
      });
      const r3 = yield s6(this._layer.parsedUrl.path, i2);
      return 1 === r3.features.length ? r3.features[0] : null;
    });
  }
  getIdentityUser() {
    return __async(this, null, function* () {
      yield this.load();
      const e3 = t2?.findCredential(this._layer.url);
      return e3 ? e3.userId : null;
    });
  }
  getOwningSystemUrl() {
    return __async(this, null, function* () {
      yield this.load();
      const e3 = t2?.findServerInfo(this._layer.url);
      if (e3) return e3.owningSystemUrl;
      let r3 = this._layer.url;
      const s8 = r3.toLowerCase().indexOf("/rest/services");
      if (r3 = s8 > -1 ? r3.substring(0, s8) : r3, r3) {
        r3 += "/rest/info";
        try {
          const e4 = yield U(r3, {
            query: {
              f: "json"
            }
          });
          let t6 = "";
          return e4.data?.owningSystemUrl && (t6 = e4.data.owningSystemUrl), t6;
        } catch (a6) {
          return "";
        }
      }
      return "";
    });
  }
  getDataSourceFeatureSet() {
    const e3 = new _P({
      layer: this._layer,
      spatialReference: this.spatialReference ?? void 0,
      outFields: this._overrideFields ?? void 0,
      includeGeometry: !this._removeGeometry,
      lrucache: this.recentlyUsedQueries ?? void 0,
      interceptor: this.featureSetQueryInterceptor ?? void 0
    });
    return e3._useDefinitionExpression = false, e3;
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone ?? false;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._layer.timeInfo ?? null;
  }
  getFeatureSetInfo() {
    return __async(this, null, function* () {
      if (this.fsetInfo) return this.fsetInfo;
      let e3 = null, t6 = this._layer.serviceItemId ?? null;
      const r3 = this._layer.parsedUrl.path;
      if (r3) {
        const s9 = yield U(r3, {
          responseType: "json",
          query: {
            f: "json"
          }
        });
        e3 = s9?.data?.name ?? null, t6 = s9?.data?.serviceItemId ?? null;
      }
      const s8 = this._layer.title && null !== (this._layer.parent ?? null);
      return this.featureSetInfo = {
        layerId: this._layer.layerId,
        layerName: "" === e3 ? null : e3,
        itemId: "" === t6 ? null : t6,
        serviceLayerUrl: "" === r3 ? null : r3,
        webMapLayerId: s8 ? this._layer.id ?? null : null,
        webMapLayerTitle: s8 ? this._layer.title ?? null : null,
        className: null,
        objectClassId: null
      }, this.fsetInfo;
    });
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerMemory.js
var d8 = class _d extends x2 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = false, this._overrideFields = null, this._forceIsTable = false, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, true === e3.isTable && (this._forceIsTable = true), void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return D;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  loadImpl() {
    return __async(this, null, function* () {
      return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (yield this._layer.load(), this._initialiseFeatureSet(), this);
    });
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e3 = [], t6 = [];
      for (const s8 of this.fields) if ("oid" === s8.type) e3.push(s8), t6.push(s8.name);
      else for (const r3 of this._overrideFields) if (r3.toLowerCase() === s8.name.toLowerCase()) {
        e3.push(s8), t6.push(s8.name);
        break;
      }
      this.fields = e3, this._overrideFields = t6;
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e3 of this.fields) "global-id" === e3.type && (this.globalIdField = e3.name);
    this._databaseType = l.Standardised, this.hasZ = true === this._layer?.capabilities?.data?.supportsZ, this.hasM = true === this._layer?.capabilities?.data?.supportsM, "subtype-group" === this._layer.type ? (this.subtypeField = this._layer.subtypeField ?? "", this.subtypes = this._layer.subtypes, this.types = null, this.typeIdField = null) : "oriented-imagery" === this._layer.type ? (this.subtypeField = null, this.subtypes = null, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types) : (this.subtypeField = this._layer.subtypeField, this.subtypes = this._layer.subtypes, this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types);
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || "table" === this._layer.type || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return s3.InFeatureSet;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const t6 = yield this._getFilteredSet("", null, null, null, e3);
        return this._wset = t6, t6;
      }
      return this._wset;
    });
  }
  _changeFeature(t6) {
    const s8 = {};
    for (const e3 of this.fields) s8[e3.name] = t6.attributes[e3.name];
    return new d3({
      geometry: true === this._removeGeometry ? null : t6.geometry,
      attributes: s8
    });
  }
  _getFilteredSet(e3, t6, s8, r3, a6) {
    return __async(this, null, function* () {
      let n9 = "", u2 = false;
      if (null !== r3 && (n9 = r3.constructClause(), u2 = true), this.isTable() && t6 && null !== e3 && "" !== e3) {
        return new t4([], [], true, null);
      }
      const h2 = new b();
      h2.returnZ = this.hasZ, h2.returnM = this.hasM, h2.where = null === s8 ? null === t6 ? "1=1" : "" : p(s8, l.Standardised), h2.spatialRelationship = this._makeRelationshipEnum(e3), h2.outSpatialReference = this.spatialReference, h2.orderByFields = "" !== n9 ? n9.split(",") : null, h2.geometry = null === t6 ? null : t6, h2.returnGeometry = true, h2.relationParameter = this._makeRelationshipParam(e3);
      const y5 = yield this._layer.queryFeatures(h2);
      if (null === y5) return new t4([], [], u2, null);
      this._checkCancelled(a6);
      const p3 = [];
      y5.features.forEach((e4) => {
        const t7 = e4.attributes[this._layer.objectIdField];
        p3.push(t7), this._featureCache[t7] = this._changeFeature(e4);
      });
      return new t4([], p3, u2, null);
    });
  }
  _makeRelationshipEnum(e3) {
    if (e3.includes("esriSpatialRelRelation")) return "relation";
    switch (e3) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e3;
  }
  _makeRelationshipParam(e3) {
    return e3.includes("esriSpatialRelRelation") ? e3.split(":")[1] : "";
  }
  _queryAllFeatures() {
    return __async(this, null, function* () {
      if (this._wset) return this._wset;
      const e3 = new b();
      if (e3.where = "1=1", yield this._ensureLoaded(), this._layer.source && this._layer.source.items) {
        const e4 = [];
        return this._layer.source.items.forEach((t7) => {
          const s9 = t7.attributes[this._layer.objectIdField];
          e4.push(s9), this._featureCache[s9] = this._changeFeature(t7);
        }), this._wset = new t4([], e4, false, null), this._wset;
      }
      e3.returnZ = this.hasZ, e3.returnM = this.hasM;
      const t6 = yield this._layer.queryFeatures(e3), s8 = [];
      return t6.features.forEach((e4) => {
        const t7 = e4.attributes[this._layer.objectIdField];
        s8.push(t7), this._featureCache[t7] = this._changeFeature(e4);
      }), this._wset = new t4([], s8, false, null), this._wset;
    });
  }
  _getFeatures(e3, r3, i2) {
    return __async(this, null, function* () {
      const a6 = [];
      -1 !== r3 && void 0 === this._featureCache[r3] && a6.push(r3);
      for (let t6 = e3._lastFetchedIndex; t6 < e3._known.length && (e3._lastFetchedIndex += 1, !(void 0 === this._featureCache[e3._known[t6]] && (e3._known[t6] !== r3 && a6.push(e3._known[t6]), a6.length > i2))); t6++) ;
      if (0 === a6.length) return "success";
      throw new s2(r.MissingFeatures);
    });
  }
  _refineSetBlock(e3) {
    return __async(this, null, function* () {
      return e3;
    });
  }
  _stat() {
    return __async(this, null, function* () {
      return {
        calculated: false
      };
    });
  }
  _canDoAggregates() {
    return __async(this, null, function* () {
      return false;
    });
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e3) {
    const t6 = {};
    for (const s8 in e3) t6[s8] = e3[s8];
    return t6;
  }
  nativeCapabilities() {
    return {
      title: this._layer.title ?? "",
      canQueryRelated: false,
      source: this,
      capabilities: this._layer.capabilities,
      databaseType: this._databaseType,
      requestStandardised: true
    };
  }
  static create(e3, t6) {
    let s8 = e3.layerDefinition.objectIdField;
    const r3 = e3.layerDefinition.typeIdField ?? "", i2 = [];
    if (e3.layerDefinition.types) for (const u2 of e3.layerDefinition.types) i2.push(n7.fromJSON(u2));
    let a6 = e3.layerDefinition.geometryType;
    void 0 === a6 && (a6 = e3.featureSet.geometryType || "");
    let l3 = e3.featureSet.features;
    const n9 = t6.toJSON();
    if (!s8) {
      let t7 = false;
      for (const r4 of e3.layerDefinition.fields) if ("oid" === r4.type || "esriFieldTypeOID" === r4.type) {
        s8 = r4.name, t7 = true;
        break;
      }
      if (false === t7) {
        let t8 = "FID", r4 = true, i3 = 0;
        for (; r4; ) {
          let s9 = true;
          for (const r5 of e3.layerDefinition.fields) if (r5.name === t8) {
            s9 = false;
            break;
          }
          true === s9 ? r4 = false : (i3++, t8 = "FID" + i3.toString());
        }
        e3.layerDefinition.fields.push({
          type: "esriFieldTypeOID",
          name: t8,
          alias: t8
        });
        const a7 = [];
        for (let s9 = 0; s9 < l3.length; s9++) a7.push({
          geometry: e3.featureSet.features[s9].geometry,
          attributes: e3.featureSet.features[s9].attributes ? this._cloneAttr(e3.featureSet.features[s9].attributes) : {}
        }), a7[s9].attributes[t8] = s9;
        l3 = a7, s8 = t8;
      }
    }
    const o = [];
    for (const u2 of e3.layerDefinition.fields) u2 instanceof y2 ? o.push(u2) : o.push(y2.fromJSON(u2));
    let c5 = a6;
    switch (c5 || (c5 = ""), c5) {
      case "esriGeometryPoint":
        c5 = "point";
        break;
      case "esriGeometryPolyline":
        c5 = "polyline";
        break;
      case "esriGeometryPolygon":
        c5 = "polygon";
        break;
      case "esriGeometryEnvelope":
        c5 = "extent";
        break;
      case "esriGeometryMultipoint":
        c5 = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        c5 = "esriGeometryNull";
    }
    if ("esriGeometryNull" !== c5) for (const h2 of l3) h2.geometry && h2.geometry instanceof n4 == false && (h2.geometry.type = c5, void 0 === h2.geometry.spatialReference && (h2.geometry.spatialReference = n9));
    else for (const u2 of l3) u2.geometry && (u2.geometry = null);
    const f7 = {
      outFields: ["*"],
      source: l3,
      fields: o,
      hasZ: true === e3?.layerDefinition?.hasZ || true === e3?.featureSet?.hasZ,
      hasM: true === e3?.layerDefinition?.hasM || true === e3?.featureSet?.hasM,
      types: i2,
      typeIdField: r3,
      objectIdField: s8,
      spatialReference: t6
    }, _ = "esriGeometryNull" === c5 || null === c5;
    _ || (f7.geometryType = c5);
    const m5 = new Ze(f7);
    e3?.layerDefinition?.subtypeField && e3?.layerDefinition?.subtypes && m5.read({
      subtypes: e3.layerDefinition.subtypes,
      subtypeField: e3.layerDefinition.subtypeField
    });
    return new _d({
      layer: m5,
      spatialReference: t6,
      isTable: _
    });
  }
  queryAttachments() {
    return __async(this, null, function* () {
      return [];
    });
  }
  getFeatureByObjectId(e3) {
    return __async(this, null, function* () {
      const t6 = new b();
      t6.where = this.objectIdField + "=" + e3.toString(), t6.returnZ = this.hasZ, t6.returnM = this.hasM;
      const s8 = yield this._layer.queryFeatures(t6);
      return 1 === s8.features.length ? s8.features[0] : null;
    });
  }
  getOwningSystemUrl() {
    return __async(this, null, function* () {
      return "";
    });
  }
  getIdentityUser() {
    return __async(this, null, function* () {
      return "";
    });
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone ?? false;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo;
  }
  get timeInfo() {
    return this._layer?.timeInfo;
  }
  getFeatureSetInfo() {
    return __async(this, null, function* () {
      const e3 = this._layer.title && this._layer.parent;
      return this.fsetInfo ?? {
        layerId: null,
        layerName: null,
        itemId: null,
        serviceLayerUrl: null,
        webMapLayerId: e3 ? this._layer.id ?? null : null,
        webMapLayerTitle: e3 ? this._layer.title ?? null : null,
        className: null,
        objectClassId: null
      };
    });
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/sources/FeatureLayerRelated.js
var d9 = class extends x2 {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = false, this._removeGeometry = false, this._overrideFields = null, this.featureObjectId = null, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, this._findObjectId = e3.objectId, this.featureObjectId = e3.objectId, this.relationship = e3.relationship, this._relatedLayer = e3.relatedLayer, void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return D;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  loadImpl() {
    return __async(this, null, function* () {
      return yield Promise.all([this._layer.load(), this._relatedLayer?.load()]), this._initialiseFeatureSet(), this;
    });
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(0), this.hasZ = this._relatedLayer.hasZ, this.hasM = this._relatedLayer.hasM, null !== this._overrideFields) if (1 === this._overrideFields.length && "*" === this._overrideFields[0]) this._overrideFields = null;
    else {
      const e4 = [], t6 = [];
      for (const r3 of this.fields) if ("oid" === r3.type) e4.push(r3), t6.push(r3.name);
      else for (const i2 of this._overrideFields) if (i2.toLowerCase() === r3.name.toLowerCase()) {
        e4.push(r3), t6.push(r3.name);
        break;
      }
      this.fields = e4, this._overrideFields = t6;
    }
    const e3 = this._layer.nativeCapabilities();
    e3 && (this._databaseType = e3.databaseType, this._requestStandardised = e3.requestStandardised), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types, this.subtypeField = this._relatedLayer.subtypeField, this.subtypes = this._relatedLayer.subtypes;
  }
  databaseType() {
    return __async(this, null, function* () {
      return yield this._relatedLayer.databaseType(), this._databaseType = this._relatedLayer._databaseType, this._databaseType;
    });
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return s3.InFeatureSet;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  _getSet(e3) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const t6 = yield this._getFilteredSet("", null, null, null, e3);
        return this._wset = t6, t6;
      }
      return this._wset;
    });
  }
  _changeFeature(t6) {
    const r3 = {};
    for (const e3 of this.fields) r3[e3.name] = t6.attributes[e3.name];
    return new d3({
      geometry: true === this._removeGeometry ? null : t6.geometry,
      attributes: r3
    });
  }
  _getFilteredSet(e3, t6, r3, i2, a6) {
    return __async(this, null, function* () {
      if (yield this.databaseType(), this.isTable() && t6 && null !== e3 && "" !== e3) {
        return new t4([], [], true, null);
      }
      const n9 = this._layer.nativeCapabilities();
      if (false === n9.canQueryRelated) {
        return new t4([], [], true, null);
      }
      if (n9.capabilities?.queryRelated.supportsPagination) return this._getFilteredSetUsingPaging(e3, t6, r3, i2, a6);
      let d10 = "", o = false;
      null !== i2 && true === n9.capabilities?.queryRelated.supportsOrderBy && (d10 = i2.constructClause(), o = true);
      const u2 = new d5();
      u2.objectIds = [this._findObjectId];
      const h2 = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e4) => e4.name) : ["*"]);
      u2.outFields = h2, u2.relationshipId = this.relationship.id, u2.where = "1=1";
      let c5 = true;
      true === this._removeGeometry && (c5 = false), u2.returnGeometry = c5, this._requestStandardised && (u2.sqlFormat = "standard"), u2.outSpatialReference = this.spatialReference, u2.orderByFields = "" !== d10 ? d10.split(",") : null;
      const y5 = yield n9.source.queryRelatedFeatures(u2);
      this._checkCancelled(a6);
      const p3 = y5[this._findObjectId] ? y5[this._findObjectId].features : [], _ = [];
      for (let s8 = 0; s8 < p3.length; s8++) this._featureCache[p3[s8].attributes[this._relatedLayer.objectIdField]] = p3[s8], _.push(p3[s8].attributes[this._relatedLayer.objectIdField]);
      const f7 = t6 && null !== e3 && "" !== e3, g4 = null != r3;
      return new t4(f7 || g4 ? _ : [], f7 || g4 ? [] : _, o, null);
    });
  }
  _fieldsIncludingObjectId(e3) {
    if (null === e3) return [this.objectIdField];
    const t6 = e3.slice(0);
    if (t6.includes("*")) return t6;
    let r3 = false;
    for (const i2 of t6) if (i2.toUpperCase() === this.objectIdField.toUpperCase()) {
      r3 = true;
      break;
    }
    return false === r3 && t6.push(this.objectIdField), t6;
  }
  _getFilteredSetUsingPaging(e3, t6, r3, i2, a6) {
    return __async(this, null, function* () {
      let n9 = "", l3 = false;
      const d10 = this._layer.nativeCapabilities();
      null !== i2 && true === d10.capabilities?.queryRelated.supportsOrderBy && (n9 = i2.constructClause(), l3 = true), yield this.databaseType();
      const o = "1=1";
      let u2 = this._maxQueryRate();
      const h2 = d10.capabilities?.query.maxRecordCount;
      null != h2 && h2 < u2 && (u2 = h2);
      const c5 = t6 && null !== e3 && "" !== e3, y5 = null != r3;
      let p3 = null, _ = true;
      true === this._removeGeometry && (_ = false);
      const f7 = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e4) => e4.name) : ["*"]);
      return p3 = new t4(c5 || y5 ? ["GETPAGES"] : [], c5 || y5 ? [] : ["GETPAGES"], l3, {
        outFields: f7.join(","),
        resultRecordCount: u2,
        resultOffset: 0,
        objectIds: [this._findObjectId],
        where: o,
        orderByFields: n9,
        returnGeometry: _,
        returnIdsOnly: "false",
        internal: {
          set: [],
          lastRetrieved: 0,
          lastPage: 0,
          fullyResolved: false
        }
      }), yield this._expandPagedSet(p3, u2, 0, 0, a6), p3;
    });
  }
  _expandPagedSet(e3, t6, r3, i2, s8) {
    return this._expandPagedSetFeatureSet(e3, t6, r3, i2, s8);
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true !== e3.groupbypage ? {
      groupbypage: false,
      outFields: e3.outFields,
      resultRecordCount: e3.resultRecordCount,
      resultOffset: e3.resultOffset,
      where: e3.where,
      objectIds: e3.objectIds,
      orderByFields: e3.orderByFields,
      returnGeometry: e3.returnGeometry,
      returnIdsOnly: e3.returnIdsOnly,
      internal: e3.internal
    } : {
      groupbypage: true,
      outFields: e3.outFields,
      resultRecordCount: e3.resultRecordCount,
      useOIDpagination: e3.useOIDpagination,
      generatedOid: e3.generatedOid,
      groupByFieldsForStatistics: e3.groupByFieldsForStatistics,
      resultOffset: e3.resultOffset,
      outStatistics: e3.outStatistics,
      geometry: e3.geometry,
      where: e3.where,
      objectIds: e3.objectIds,
      orderByFields: e3.orderByFields,
      returnGeometry: e3.returnGeometry,
      returnIdsOnly: e3.returnIdsOnly,
      internal: e3.internal
    };
  }
  _getPhysicalPage(e3, t6, r3) {
    return __async(this, null, function* () {
      const i2 = e3.pagesDefinition.internal.lastRetrieved, s8 = i2, a6 = e3.pagesDefinition.internal.lastPage, n9 = this._layer.nativeCapabilities(), d10 = new d5();
      true === this._requestStandardised && (d10.sqlFormat = "standard"), d10.relationshipId = this.relationship.id, d10.objectIds = e3.pagesDefinition.objectIds, d10.resultOffset = e3.pagesDefinition.internal.lastPage, d10.resultRecordCount = e3.pagesDefinition.resultRecordCount, d10.outFields = e3.pagesDefinition.outFields.split(","), d10.where = e3.pagesDefinition.where, d10.orderByFields = "" !== e3.pagesDefinition.orderByFields ? e3.pagesDefinition.orderByFields.split(",") : null, d10.returnGeometry = e3.pagesDefinition.returnGeometry, d10.outSpatialReference = this.spatialReference;
      const o = yield n9.source.queryRelatedFeatures(d10);
      if (this._checkCancelled(r3), e3.pagesDefinition.internal.lastPage !== a6) return 0;
      const u2 = o[this._findObjectId] ? o[this._findObjectId].features : [];
      for (let l3 = 0; l3 < u2.length; l3++) e3.pagesDefinition.internal.set[s8 + l3] = u2[l3].attributes[this._relatedLayer.objectIdField];
      for (let l3 = 0; l3 < u2.length; l3++) this._featureCache[u2[l3].attributes[this._relatedLayer.objectIdField]] = u2[l3];
      const h2 = !o[this._findObjectId] || false === o[this._findObjectId].exceededTransferLimit;
      return u2.length !== e3.pagesDefinition.resultRecordCount && h2 && (e3.pagesDefinition.internal.fullyResolved = true), e3.pagesDefinition.internal.lastRetrieved = i2 + u2.length, e3.pagesDefinition.internal.lastPage += e3.pagesDefinition.resultRecordCount, u2.length;
    });
  }
  _getFeatures(e3, i2, s8, a6) {
    return __async(this, null, function* () {
      const n9 = [];
      -1 !== i2 && void 0 === this._featureCache[i2] && n9.push(i2);
      const l3 = this._maxQueryRate();
      if (true === this._checkIfNeedToExpandKnownPage(e3, l3)) return yield this._expandPagedSet(e3, l3, 0, 0, a6), this._getFeatures(e3, i2, s8, a6);
      let d10 = 0;
      for (let t6 = e3._lastFetchedIndex; t6 < e3._known.length && (d10++, d10 <= s8 && (e3._lastFetchedIndex += 1), !("GETPAGES" !== e3._known[t6] && void 0 === this._featureCache[e3._known[t6]] && (e3._known[t6] !== i2 && n9.push(e3._known[t6]), n9.length > s8))) && !(d10 >= s8 && 0 === n9.length); t6++) ;
      if (0 === n9.length) return "success";
      throw new s2(r.MissingFeatures);
    });
  }
  _refineSetBlock(e3, t6, r3) {
    return __async(this, null, function* () {
      return e3;
    });
  }
  _stat(e3, t6, r3, i2, s8, a6, n9) {
    return __async(this, null, function* () {
      return {
        calculated: false
      };
    });
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  _canDoAggregates(e3, t6, r3, i2, s8) {
    return __async(this, null, function* () {
      return false;
    });
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e3, t6, r3, i2, s8) {
    return this._relatedLayer.queryAttachments(e3, t6, r3, i2, s8);
  }
  getFeatureByObjectId(e3, t6) {
    return this._relatedLayer.getFeatureByObjectId(e3, t6);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeZone() {
    return this._relatedLayer?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._relatedLayer?.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._relatedLayer?.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._relatedLayer?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._relatedLayer?.timeInfo ?? null;
  }
  getFeatureSetInfo() {
    return __async(this, null, function* () {
      return this.fsetInfo ?? this._layer.featureSetInfo;
    });
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureSetUtils.js
function F3() {
  null === a2.applicationCache && (a2.applicationCache = new a2());
}
function g3(e3, t6, a6) {
  return __async(this, null, function* () {
    if (a2.applicationCache) {
      const a7 = a2.applicationCache.getLayerInfo(e3);
      if (a7) {
        const r3 = yield a7;
        return new Ze({
          url: e3,
          outFields: t6,
          sourceJSON: r3
        });
      }
      const n9 = new Ze({
        url: e3,
        outFields: t6
      }), i2 = (() => __async(this, null, function* () {
        return yield n9.load(), n9.sourceJSON;
      }))();
      if (a2.applicationCache) {
        a2.applicationCache.setLayerInfo(e3, i2);
        try {
          return yield i2, n9;
        } catch (r3) {
          throw a2.applicationCache.clearLayerInfo(e3), r3;
        }
      }
      return yield i2, n9;
    }
    if (null != a6) {
      const r3 = a6.getCachedLayerMetadata(e3);
      if (r3) {
        const a7 = yield r3;
        return new Ze({
          url: e3,
          outFields: t6,
          sourceJSON: a7
        });
      }
      const i2 = new Ze({
        url: e3,
        outFields: t6
      }), s8 = (() => __async(this, null, function* () {
        return yield i2.load(), i2.sourceJSON;
      }))();
      a6.setCachedLayerMetadata(e3, s8);
      try {
        return yield s8, i2;
      } catch (n9) {
        throw a6.removeCachedLayerMetadata(e3, s8), n9;
      }
    }
    return new Ze({
      url: e3,
      outFields: t6
    });
  });
}
function N3(e3, t6, a6, r3, n9, i2 = null) {
  return __async(this, null, function* () {
    return T3(yield g3(e3, ["*"], n9), t6, a6, r3, n9, i2);
  });
}
function T3(e3, t6 = null, a6 = null, r3 = true, n9 = null, i2 = null) {
  if ("catalog-footprint" === e3.type) return T3(e3.parent, t6, a6, r3, n9, i2);
  if ("subtype-sublayer" === e3.type) {
    const s8 = T3(e3.parent, t6, a6, r3, n9, i2);
    return s8.filter(O.create(e3.parent.subtypeField + "=" + e3.subtypeCode.toString(), e3.parent.fieldsIndex, s8.dateFieldsTimeZoneDefaultUTC));
  }
  if (M(e3)) {
    const s8 = {
      layer: e3,
      spatialReference: t6,
      outFields: a6,
      includeGeometry: r3,
      lrucache: n9,
      interceptor: i2
    };
    return true == !(e3.url || !e3.source) ? new d8(s8) : new P(s8);
  }
  throw new Error(`Unsupported layer type: ${e3.type}`);
}
function A2(t6) {
  return __async(this, null, function* () {
    if (null !== a2.applicationCache) {
      const e3 = a2.applicationCache.getLayerInfo(t6);
      if (null !== e3) return e3;
    }
    const a6 = (() => __async(this, null, function* () {
      const a7 = yield U(t6, {
        responseType: "json",
        query: {
          f: "json"
        }
      });
      return a7.data ? a7.data : null;
    }))();
    if (null !== a2.applicationCache) {
      a2.applicationCache.setLayerInfo(t6, a6);
      try {
        return yield a6;
      } catch (r3) {
        throw a2.applicationCache.clearLayerInfo(t6), r3;
      }
    }
    return a6;
  });
}
function b3(t6, a6) {
  return __async(this, null, function* () {
    const r3 = "QUERYDATAELEMTS:" + a6.toString() + ":" + t6;
    if (null !== a2.applicationCache) {
      const e3 = a2.applicationCache.getLayerInfo(r3);
      if (null !== e3) return e3;
    }
    const n9 = (() => __async(this, null, function* () {
      const r4 = yield U(t6 + "/queryDataElements", {
        method: "post",
        responseType: "json",
        query: {
          layers: JSON.stringify([a6.toString()]),
          f: "json"
        }
      });
      if (r4.data) {
        const e3 = r4.data;
        if (e3.layerDataElements?.[0]) return e3.layerDataElements[0];
      }
      throw new s2(r.DataElementsNotFound);
    }))();
    if (null !== a2.applicationCache) {
      a2.applicationCache.setLayerInfo(r3, n9);
      try {
        return yield n9;
      } catch (i2) {
        throw a2.applicationCache.clearLayerInfo(r3), i2;
      }
    }
    return n9;
  });
}
function k3(t6, a6) {
  return __async(this, null, function* () {
    if (null !== a2.applicationCache) {
      const e3 = a2.applicationCache.getLayerInfo(t6);
      if (null !== e3) return e3;
    }
    if (null != a6) {
      const e3 = a6.getCachedServiceMetadata(t6);
      if (null != e3) return e3;
    }
    const r3 = (() => __async(this, null, function* () {
      const a7 = yield U(t6, {
        responseType: "json",
        query: {
          f: "json"
        }
      });
      if (a7.data) {
        const e3 = a7.data;
        return e3.layers || (e3.layers = []), e3.tables || (e3.tables = []), e3;
      }
      return {
        layers: [],
        tables: []
      };
    }))();
    if (null !== a2.applicationCache) {
      a2.applicationCache.setLayerInfo(t6, r3);
      try {
        return yield r3;
      } catch (n9) {
        throw a2.applicationCache.clearLayerInfo(t6), n9;
      }
    }
    if (null != a6) {
      a6.setCachedServiceMetadata(t6, r3);
      try {
        return yield r3;
      } catch (i2) {
        throw a6.removeCachedServiceMetadata(t6, r3), i2;
      }
    }
    return r3;
  });
}
function O3(e3, t6) {
  return __async(this, null, function* () {
    const a6 = {
      metadata: null,
      networkId: -1,
      unVersion: 3,
      terminals: [],
      queryelem: null,
      layerNameLkp: {},
      lkp: null
    }, r3 = yield k3(e3, null);
    if (a6.metadata = r3, void 0 !== r3.controllerDatasetLayers?.utilityNetworkLayerId && null !== r3.controllerDatasetLayers.utilityNetworkLayerId) {
      if (r3.layers) for (const e4 of r3.layers) a6.layerNameLkp[e4.id] = e4.name;
      if (r3.tables) for (const e4 of r3.tables) a6.layerNameLkp[e4.id] = e4.name;
      const n9 = r3.controllerDatasetLayers.utilityNetworkLayerId;
      a6.networkId = n9;
      const i2 = yield b3(e3, n9);
      if (i2) {
        a6.queryelem = i2, a6.queryelem?.dataElement && void 0 !== a6.queryelem.dataElement.schemaGeneration && (a6.unVersion = a6.queryelem.dataElement.schemaGeneration), a6.lkp = {}, a6.queryelem.dataElement.domainNetworks || (a6.queryelem.dataElement.domainNetworks = []);
        for (const e4 of a6.queryelem.dataElement.domainNetworks) {
          for (const t7 of e4.edgeSources ?? []) {
            const e5 = {
              layerId: t7.layerId,
              sourceId: t7.sourceId,
              className: a6.layerNameLkp[t7.layerId] ?? null
            };
            e5.className && (a6.lkp[e5.className] = e5);
          }
          for (const t7 of e4.junctionSources ?? []) {
            const e5 = {
              layerId: t7.layerId,
              sourceId: t7.sourceId,
              className: a6.layerNameLkp[t7.layerId] ?? null
            };
            e5.className && (a6.lkp[e5.className] = e5);
          }
        }
        if (a6.queryelem.dataElement.terminalConfigurations) for (const e4 of a6.queryelem.dataElement.terminalConfigurations) for (const t7 of e4.terminals) a6.terminals.push({
          terminalId: t7.terminalId,
          terminalName: t7.terminalName
        });
        const r4 = yield A2(e3 + "/" + n9);
        if (void 0 !== r4.systemLayers?.associationsTableId && null !== r4.systemLayers.associationsTableId) {
          const n10 = [];
          a6.unVersion >= 4 && (n10.push("STATUS"), n10.push("PERCENTALONG"));
          let i3 = yield N3(e3 + "/" + r4.systemLayers.associationsTableId.toString(), t6, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...n10], false, null, null);
          return yield i3.load(), a6.unVersion >= 4 && (i3 = i3.filter(O.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)", i3.getFieldsIndex(), i3.dateFieldsTimeZoneDefaultUTC)), yield i3.load()), {
            lkp: a6.lkp,
            associations: i3,
            unVersion: a6.unVersion,
            terminals: a6.terminals
          };
        }
        return {
          associations: null,
          unVersion: a6.unVersion,
          lkp: null,
          terminals: []
        };
      }
      return {
        associations: null,
        unVersion: a6.unVersion,
        lkp: null,
        terminals: []
      };
    }
    return {
      associations: null,
      unVersion: a6.unVersion,
      lkp: null,
      terminals: []
    };
  });
}
function E2(e3, t6, a6, r3 = null, n9 = null, i2 = true, s8 = null, l3 = null) {
  return __async(this, null, function* () {
    let o = e3.serviceUrl();
    if (!o) return null;
    o = "/" === o.charAt(o.length - 1) ? o + t6.relatedTableId.toString() : o + "/" + t6.relatedTableId.toString();
    const u2 = yield N3(o, r3, n9, i2, s8, l3);
    return new d9({
      layer: e3,
      relatedLayer: u2,
      relationship: t6,
      objectId: a6,
      spatialReference: r3,
      outFields: n9,
      includeGeometry: i2,
      lrucache: s8,
      interceptor: l3
    });
  });
}
c3.registerAction(), O2.registerAction(), a3.registerAction(), f5.registerAction(), a5.registerAction();
var j = class extends e {
  constructor(e3, t6 = null, a6 = null, r3 = null) {
    super(), this._map = e3, this._overridespref = t6, this._lrucache = a6, this._interceptor = r3, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e3, t6 = true, a6 = null) {
    const r3 = T3(e3, this._overridespref, null === a6 ? ["*"] : a6, t6, this._lrucache, this._interceptor);
    return this._instantLayers.push({
      featureset: r3,
      opitem: e3,
      includeGeometry: t6,
      outFields: JSON.stringify(a6)
    }), r3;
  }
  featureSetByName(e3, t6 = true, a6 = null) {
    return __async(this, null, function* () {
      if (m.isLoadable(this._map) && !this._map.loaded) return yield this._map.load(), this.featureSetByName(e3, t6, a6);
      null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice(0)).sort();
      const r3 = JSON.stringify(a6);
      for (let i2 = 0; i2 < this._instantLayers.length; i2++) {
        const a7 = this._instantLayers[i2];
        if (a7.opitem.title === e3 && a7.includeGeometry === t6 && a7.outFields === r3) return this._instantLayers[i2].featureset;
      }
      const n9 = this._map.allLayers.find((t7) => B(t7) && t7.title === e3);
      if (null != n9) return this._makeAndAddFeatureSet(n9, t6, a6);
      if (this._map.tables) {
        const r4 = this._map.tables.find((t7) => t7.title === e3);
        if (null != r4) {
          if (r4 instanceof Ze) return this._makeAndAddFeatureSet(r4, t6, a6);
          if (null == r4._materializedTable) {
            const e4 = r4.outFields ? r4 : __spreadProps(__spreadValues({}, r4), {
              outFields: ["*"]
            });
            r4._materializedTable = new Ze(e4);
          }
          return yield r4._materializedTable.load(), this._makeAndAddFeatureSet(r4._materializedTable, t6, a6);
        }
      }
      return null;
    });
  }
  featureSetById(_0) {
    return __async(this, arguments, function* (e3, t6 = true, a6 = ["*"]) {
      if (m.isLoadable(this._map) && !this._map.loaded) return yield this._map.load(), this.featureSetById(e3, t6, a6);
      null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice(0)).sort();
      const r3 = JSON.stringify(a6);
      for (let i2 = 0; i2 < this._instantLayers.length; i2++) {
        const a7 = this._instantLayers[i2];
        if (a7.opitem.id === e3 && a7.includeGeometry === t6 && a7.outFields === r3) return this._instantLayers[i2].featureset;
      }
      const n9 = this._map.allLayers.find((t7) => B(t7) && t7.id === e3);
      if (n9) return this._makeAndAddFeatureSet(n9, t6, a6);
      if (this._map.tables) {
        const r4 = this._map.tables.find((t7) => t7.id === e3);
        if (null != r4) {
          if (r4 instanceof Ze) return this._makeAndAddFeatureSet(r4, t6, a6);
          if (null == r4._materializedTable) {
            const e4 = __spreadProps(__spreadValues({}, r4), {
              outFields: ["*"]
            });
            r4._materializedTable = new Ze(e4);
          }
          return yield r4._materializedTable.load(), this._makeAndAddFeatureSet(r4._materializedTable, t6, a6);
        }
      }
      return null;
    });
  }
};
var D4 = class _D extends e {
  constructor(e3, t6 = null, a6 = null, r3 = null) {
    super(), this._url = e3, this._overridespref = t6, this._lrucache = a6, this._interceptor = r3, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e3, t6 = true, a6 = null) {
    const r3 = T3(e3, this._overridespref, null === a6 ? ["*"] : a6, t6, this._lrucache);
    return this._instantLayers.push({
      featureset: r3,
      opitem: e3,
      includeGeometry: t6,
      outFields: JSON.stringify(a6)
    }), r3;
  }
  _loadMetaData() {
    return __async(this, null, function* () {
      const e3 = yield k3(this._url, this._lrucache);
      return this.metadata = e3, e3;
    });
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new _D(this._url, this._overridespref, this._lrucache, this._interceptor);
  }
  featureSetByName(e3, t6 = true, a6 = null) {
    return __async(this, null, function* () {
      null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice(0)).sort();
      const r3 = JSON.stringify(a6);
      for (let s8 = 0; s8 < this._instantLayers.length; s8++) {
        const a7 = this._instantLayers[s8];
        if (a7.opitem.title === e3 && a7.includeGeometry === t6 && a7.outFields === r3) return this._instantLayers[s8].featureset;
      }
      const n9 = yield this._loadMetaData();
      let i2 = null;
      for (const s8 of n9.layers ?? []) s8.name === e3 && (i2 = s8);
      if (!i2) for (const s8 of n9.tables ?? []) s8.name === e3 && (i2 = s8);
      if (i2) {
        const e4 = yield g3(this._url + "/" + i2.id, ["*"], this._lrucache);
        return this._makeAndAddFeatureSet(e4, t6, a6);
      }
      return null;
    });
  }
  featureSetById(_0) {
    return __async(this, arguments, function* (e3, t6 = true, a6 = ["*"]) {
      null === a6 && (a6 = ["*"]), a6 = (a6 = a6.slice(0)).sort();
      const r3 = JSON.stringify(a6);
      e3 = null != e3 ? e3.toString() : "";
      for (let s8 = 0; s8 < this._instantLayers.length; s8++) {
        const a7 = this._instantLayers[s8];
        if (a7.opitem.id === e3 && a7.includeGeometry === t6 && a7.outFields === r3) return this._instantLayers[s8].featureset;
      }
      const n9 = yield this._loadMetaData();
      let i2 = null;
      for (const s8 of n9.layers ?? []) null !== s8.id && void 0 !== s8.id && s8.id.toString() === e3 && (i2 = s8);
      if (!i2) for (const s8 of n9.tables ?? []) null !== s8.id && void 0 !== s8.id && s8.id.toString() === e3 && (i2 = s8);
      if (i2) {
        const e4 = yield g3(this._url + "/" + i2.id, ["*"], this._lrucache);
        return this._makeAndAddFeatureSet(e4, t6, a6);
      }
      return null;
    });
  }
};
function v2(e3, t6, a6 = null, r3 = null) {
  return new j(e3, t6, a6, r3);
}
function M2(e3, t6, a6 = null, r3 = null) {
  return new D4(e3, t6, a6, r3);
}
function q(e3, t6, n9, i2, s8) {
  if (null === e3) return null;
  if (B2(e3)) {
    switch (t6) {
      case "datasource":
        return e3.getDataSourceFeatureSet();
      case "parent":
        return e3;
      case "root":
        return e3.getRootFeatureSet();
    }
    return null;
  }
  if (e3 instanceof f3 && M(e3)) {
    const a6 = e3;
    switch (t6) {
      case "datasource":
        return T3(a6, s8, a6.outFields, true, n9, i2).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return T3(a6, s8, a6.outFields, true, n9, i2);
    }
    return null;
  }
  if (Ge(e3)) {
    switch (t6) {
      case "datasource":
        return T3(e3.parent, s8, e3.parent.outFields, true, n9, i2).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return T3(e3, s8, e3.parent.outFields, true, n9, i2);
    }
    return null;
  }
  return null;
}
function G2(e3, t6, a6, r3, n9, i2, s8, l3 = null) {
  return __async(this, null, function* () {
    if (a2.applicationCache) {
      const o2 = a2.applicationCache.getLayerInfo(e3 + ":" + i2.url);
      if (o2) {
        const e4 = yield o2;
        return T3(yield g3(k(e4.url ?? "") + "/" + t6, ["*"], s8), a6, r3, n9, s8, l3);
      }
    }
    if (null != s8) {
      const o2 = s8.getCachedPortalItem(i2.url, e3);
      if (null != o2) {
        const e4 = yield o2;
        return T3(yield g3(k(e4.url ?? "") + "/" + t6, ["*"], s8), a6, r3, n9, s8, l3);
      }
    }
    const o = new S2({
      id: e3,
      portal: i2
    }).load();
    a2.applicationCache ? a2.applicationCache.setLayerInfo(e3 + ":" + i2.url, o) : null != s8 && s8.setCachedPortalItem(i2.url, e3, o);
    try {
      const e4 = yield o;
      return T3(yield g3(k(e4.url ?? "") + "/" + t6, ["*"], s8), a6, r3, n9, s8, l3);
    } catch (u2) {
      throw a2.applicationCache && a2.applicationCache.clearLayerInfo(e3 + ":" + i2.url), null != s8 && s8.removeCachedPortalItem(i2.url, e3, o), u2;
    }
  });
}

export {
  c3 as c,
  I,
  k2 as k,
  b2 as b,
  B3 as B,
  L2 as L,
  e2 as e,
  a3 as a,
  a5 as a2,
  d8 as d,
  F3 as F,
  N3 as N,
  T3 as T,
  O3 as O,
  E2 as E,
  v2 as v,
  M2 as M,
  q,
  G2 as G
};
//# sourceMappingURL=chunk-QINTH2QT.js.map
