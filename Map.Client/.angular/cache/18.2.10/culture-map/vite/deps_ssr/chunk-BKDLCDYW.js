import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  D
} from "./chunk-233INU7Q.js";
import {
  F,
  G,
  N,
  O as O2,
  T,
  b,
  c2 as c,
  d,
  f as f2,
  g,
  l2 as l,
  p2 as p,
  s3 as s2,
  u2 as u,
  v,
  w
} from "./chunk-M633ZBOT.js";
import {
  F as F2,
  K,
  M,
  O as O3,
  R,
  S as S2,
  W,
  b as b2,
  h,
  m as m2,
  p as p2,
  x
} from "./chunk-IS3LAXOO.js";
import {
  Z
} from "./chunk-5R3HARKC.js";
import {
  O,
  n,
  r,
  r2,
  s,
  t
} from "./chunk-CBOFHWPI.js";
import {
  m,
  n as n2,
  n2 as n3
} from "./chunk-ABIG6PT5.js";
import {
  DateTime
} from "./chunk-N34BRXVM.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  S
} from "./chunk-AIZ3T7E3.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade/featureset/support/cache.js
var a = class {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(a2) {
    void 0 === this._databaseTypeMetaData[a2] && delete this._databaseTypeMetaData[a2];
  }
  getDatabaseType(a2) {
    return "MUSTBESET" === a2 || void 0 === this._databaseTypeMetaData[a2] ? null : this._databaseTypeMetaData[a2];
  }
  setDatabaseType(a2, e2) {
    this._databaseTypeMetaData[a2] = e2;
  }
  getLayerInfo(a2) {
    return void 0 === this._layerInfo[a2] ? null : this._layerInfo[a2];
  }
  setLayerInfo(a2, e2) {
    this._layerInfo[a2] = e2;
  }
  clearLayerInfo(a2) {
    void 0 !== this._layerInfo[a2] && delete this._layerInfo[a2];
  }
};
a.applicationCache = null;

// ../../../node_modules/@arcgis/core/arcade/featureset/support/sqlUtils.js
function p3(e2, r3) {
  return h2(e2?.parseTree, r3, e2?.parameters);
}
function f3(e2, r3, t3) {
  return h2(e2, r3, t3);
}
function m3(e2, r3, t3, s3) {
  return O.create(h2(e2.parseTree, l.Standardised, e2.parameters, r3, t3), s3, e2.timeZone);
}
function g2(e2, r3, t3 = "AND") {
  return O.create("((" + p3(e2, l.Standardised) + ")" + t3 + "(" + p3(r3, l.Standardised) + "))", e2.fieldsIndex, e2.timeZone);
}
function h2(e2, l2, u4, d3 = null, p5 = null) {
  let f6, m5, g4, L2;
  switch (e2.type) {
    case "interval":
      return F3(h2(e2.value, l2, u4, d3, p5), e2.qualifier, e2.op);
    case "case-expression": {
      let r3 = " CASE ";
      "simple" === e2.format && (r3 += h2(e2.operand, l2, u4, d3, p5));
      for (let t3 = 0; t3 < e2.clauses.length; t3++) r3 += " WHEN " + h2(e2.clauses[t3].operand, l2, u4, d3, p5) + " THEN " + h2(e2.clauses[t3].value, l2, u4, d3, p5);
      return null !== e2.else && (r3 += " ELSE " + h2(e2.else, l2, u4, d3, p5)), r3 += " END ", r3;
    }
    case "parameter": {
      const r3 = u4[e2.value.toLowerCase()];
      if ("string" == typeof r3) {
        return "'" + u4[e2.value.toLowerCase()].toString().replaceAll("'", "''") + "'";
      }
      if (f2(r3)) return w2(r3, l2);
      if (d(r3)) return w2(r3, l2);
      if (F(r3)) return E(r3, l2);
      if (T(r3)) return T2(r3, l2);
      if (g(r3)) return S3(r3, l2);
      if (Array.isArray(r3)) {
        const e3 = [];
        for (let t3 = 0; t3 < r3.length; t3++) "string" == typeof r3[t3] ? e3.push("'" + r3[t3].toString().replaceAll("'", "''") + "'") : f2(r3[t3]) || d(r3[t3]) ? e3.push(w2(r3[t3], l2)) : F(r3[t3]) ? e3.push(E(r3[t3], l2)) : T(r3[t3]) ? e3.push(T2(r3[t3], l2)) : g(r3[t3]) ? e3.push(S3(r3[t3], l2)) : e3.push(r3[t3].toString());
        return e3;
      }
      return r3.toString();
    }
    case "expression-list":
      m5 = [];
      for (const r3 of e2.value) m5.push(h2(r3, l2, u4, d3, p5));
      return m5;
    case "unary-expression":
      return " ( NOT " + h2(e2.expr, l2, u4, d3, p5) + " ) ";
    case "binary-expression":
      switch (e2.operator) {
        case "AND":
          return " (" + h2(e2.left, l2, u4, d3, p5) + " AND " + h2(e2.right, l2, u4, d3, p5) + ") ";
        case "OR":
          return " (" + h2(e2.left, l2, u4, d3, p5) + " OR " + h2(e2.right, l2, u4, d3, p5) + ") ";
        case "IS":
          if ("null" !== e2.right.type) throw new n(t.UnsupportedIsRhs);
          return " (" + h2(e2.left, l2, u4, d3, p5) + " IS NULL )";
        case "ISNOT":
          if ("null" !== e2.right.type) throw new n(t.UnsupportedIsRhs);
          return " (" + h2(e2.left, l2, u4, d3, p5) + " IS NOT NULL )";
        case "IN":
          return f6 = [], "expression-list" === e2.right.type ? (f6 = h2(e2.right, l2, u4, d3, p5), " (" + h2(e2.left, l2, u4, d3, p5) + " IN (" + f6.join(",") + ")) ") : (L2 = h2(e2.right, l2, u4, d3, p5), Array.isArray(L2) ? " (" + h2(e2.left, l2, u4, d3, p5) + " IN (" + L2.join(",") + ")) " : " (" + h2(e2.left, l2, u4, d3, p5) + " IN (" + L2 + ")) ");
        case "NOT IN":
          return f6 = [], "expression-list" === e2.right.type ? (f6 = h2(e2.right, l2, u4, d3, p5), " (" + h2(e2.left, l2, u4, d3, p5) + " NOT IN (" + f6.join(",") + ")) ") : (L2 = h2(e2.right, l2, u4, d3, p5), Array.isArray(L2) ? " (" + h2(e2.left, l2, u4, d3, p5) + " NOT IN (" + L2.join(",") + ")) " : " (" + h2(e2.left, l2, u4, d3, p5) + " NOT IN (" + L2 + ")) ");
        case "BETWEEN":
          return g4 = h2(e2.right, l2, u4, d3, p5), " (" + h2(e2.left, l2, u4, d3, p5) + " BETWEEN " + g4[0] + " AND " + g4[1] + " ) ";
        case "NOTBETWEEN":
          return g4 = h2(e2.right, l2, u4, d3, p5), " (" + h2(e2.left, l2, u4, d3, p5) + " NOT BETWEEN " + g4[0] + " AND " + g4[1] + " ) ";
        case "LIKE":
          return "" !== e2.escape ? " (" + h2(e2.left, l2, u4, d3, p5) + " LIKE " + h2(e2.right, l2, u4, d3, p5) + " ESCAPE '" + e2.escape + "') " : " (" + h2(e2.left, l2, u4, d3, p5) + " LIKE " + h2(e2.right, l2, u4, d3, p5) + ") ";
        case "NOT LIKE":
          return "" !== e2.escape ? " (" + h2(e2.left, l2, u4, d3, p5) + " NOT LIKE " + h2(e2.right, l2, u4, d3, p5) + " ESCAPE '" + e2.escape + "') " : " (" + h2(e2.left, l2, u4, d3, p5) + " NOT LIKE " + h2(e2.right, l2, u4, d3, p5) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + h2(e2.left, l2, u4, d3, p5) + " " + e2.operator + " " + h2(e2.right, l2, u4, d3, p5) + ") ";
        case "||":
          return " (" + h2(e2.left, l2, u4, d3, p5) + " " + (l2 === l.SqlServer ? "+" : e2.operator) + " " + h2(e2.right, l2, u4, d3, p5) + ") ";
      }
      throw new n(t.UnsupportedOperator, {
        operator: e2.operator
      });
    case "null":
      return "null";
    case "boolean":
      return true === e2.value ? "1" : "0";
    case "string":
      return "'" + e2.value.toString().replaceAll("'", "''") + "'";
    case "timestamp":
      return `timestamp '${e2.value}'`;
    case "date":
      return `date '${e2.value}'`;
    case "time":
      return `time '${e2.value}'`;
    case "number":
      return e2.value.toString();
    case "current-time":
      return A("date" === e2.mode, l2);
    case "column-reference":
      return d3 ? d3.toLowerCase() === e2.column.toLowerCase() ? "(" + p5 + ")" : true === e2.delimited ? `"${e2.column.split('"').join('""')}"` : e2.column : e2.column;
    case "data-type":
      return e2.value;
    case "function": {
      const r3 = h2(e2.args, l2, u4, d3, p5);
      return y(e2.name, r3, l2);
    }
  }
  throw new n(t.UnsupportedSyntax, {
    node: e2.type
  });
}
function y(e2, s3, n4) {
  switch (e2.toLowerCase().trim()) {
    case "cos":
    case "sin":
    case "tan":
    case "cosh":
    case "tanh":
    case "sinh":
    case "acos":
    case "asin":
    case "atan":
    case "floor":
    case "log10":
    case "log":
    case "abs":
      if (1 !== s3.length) throw new n(t.InvalidFunctionParameters, {
        function: e2.toLowerCase().trim()
      });
      return `${e2.toUpperCase().trim()}(${s3[0]})`;
    case "ceiling":
    case "ceil":
      if (1 !== s3.length) throw new n(t.InvalidFunctionParameters, {
        function: "ceiling"
      });
      switch (n4) {
        case l.Standardised:
        case l.StandardisedNoInterval:
      }
      return "CEILING(" + s3[0] + ")";
    case "mod":
    case "power":
    case "nullif":
      if (2 !== s3.length) throw new n(t.InvalidFunctionParameters, {
        function: e2.toLowerCase().trim()
      });
      return `${e2.toUpperCase().trim()}(${s3[0]},${s3[1]})`;
    case "round":
      if (2 === s3.length) return "ROUND(" + s3[0] + "," + s3[1] + ")";
      if (1 === s3.length) return "ROUND(" + s3[0] + ")";
      throw new n(t.InvalidFunctionParameters, {
        function: "round"
      });
    case "truncate":
      if (s3.length < 1 || s3.length > 2) throw new n(t.InvalidFunctionParameters, {
        function: "truncate"
      });
      return n4 === l.SqlServer ? "ROUND(" + s3[0] + (1 === s3.length ? "0" : "," + s3[1]) + ",1)" : "TRUNCATE(" + s3[0] + (1 === s3.length ? ")" : "," + s3[1] + ")");
    case "char_length":
    case "len":
      if (1 !== s3.length) throw new n(t.InvalidFunctionParameters, {
        function: "char_length"
      });
      switch (n4) {
        case l.SqlServer:
          return "LEN(" + s3[0] + ")";
        case l.Oracle:
          return "LENGTH(" + s3[0] + ")";
        default:
          return "CHAR_LENGTH(" + s3[0] + ")";
      }
    case "coalesce":
    case "concat": {
      if (s3.length < 1) throw new n(t.InvalidFunctionParameters, {
        function: e2.toLowerCase()
      });
      let a2 = e2.toUpperCase().trim() + "(";
      for (let e3 = 0; e3 < s3.length; e3++) 0 !== e3 && (a2 += ","), a2 += s3[e3];
      return a2 += ")", a2;
    }
    case "lower":
    case "lcase":
      if (1 !== s3.length) throw new n(t.InvalidFunctionParameters, {
        function: "lower"
      });
      return "LOWER(" + s3[0] + ")";
    case "upper":
    case "ucase":
      if (1 !== s3.length) throw new n(t.InvalidFunctionParameters, {
        function: "upper"
      });
      return "UPPER(" + s3[0] + ")";
    case "substring": {
      let e3 = "";
      switch (n4) {
        case l.Oracle:
          return e3 = "SUBSTR(" + s3[0] + "," + s3[1], 3 === s3.length && (e3 += "," + s3[2]), e3 += ")", e3;
        case l.SqlServer:
          return e3 = 3 === s3.length ? "SUBSTRING(" + s3[0] + "," + s3[1] + "," + s3[2] + ")" : "SUBSTRING(" + s3[0] + ",  " + s3[1] + ", LEN(" + s3[0] + ") - " + s3[1] + ")", e3;
        default:
          return e3 = "SUBSTRING(" + s3[0] + " FROM " + s3[1], 3 === s3.length && (e3 += " FOR " + s3[2]), e3 += ")", e3;
      }
    }
    case "extract":
      return "EXTRACT(" + s3[0].replaceAll("'", "") + " FROM " + s3[1] + ")";
    case "cast": {
      let e3 = "";
      switch (n4) {
        case l.Oracle:
          switch (s3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "DOUBLE";
              break;
            case "integer":
              e3 = "INTEGER";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s3[1].size.toString() + ")";
          }
          return `CAST(${s3[0]} AS ${e3})`;
        case l.Postgres:
          switch (s3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "DOUBLE PRECISION";
              break;
            case "integer":
              e3 = "INT";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s3[1].size.toString() + ")";
          }
          return `CAST(${s3[0]} AS ${e3})`;
        case l.SqlServer:
          switch (s3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "FLOAT";
              break;
            case "integer":
              e3 = "INT";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "DATETIME";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s3[1].size.toString() + ")";
          }
          return `CAST(${s3[0]} AS ${e3})`;
        default:
          switch (s3[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "FLOAT";
              break;
            case "integer":
              e3 = "INTEGER";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s3[1].size.toString() + ")";
          }
          return `CAST(${s3[0]} AS ${e3})`;
      }
    }
  }
  throw new n(t.InvalidFunctionParameters, {
    function: e2
  });
}
function T2(e2, r3) {
  const t3 = e2.toDateTime(), s3 = 0 === t3.hour && 0 === t3.minute && 0 === t3.second && 0 === t3.millisecond;
  switch (r3) {
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
      return s3 ? `date '${t3.toFormat("yyyy-LL-dd")}'` : `timestamp '${t3.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
    case l.Oracle:
      return s3 ? `TO_DATE('${t3.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')` : `TO_DATE('${t3.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;
    case l.SqlServer:
      return `'${t3.toFormat(s3 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    case l.PGDB:
      return `#${t3.toFormat(s3 ? "LL-dd-yyyy" : "LL-dd-yyyy HH:mm:ss")}#`;
    case l.Postgres:
      return `TIMESTAMP '${t3.toFormat(s3 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    default:
      return `timestamp '${t3.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
  }
}
function S3(e2, r3) {
  switch (r3) {
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
      return e2.toSQLWithKeyword();
    case l.Oracle:
      return `TO_DATE('${e2.toFormat("Y-MM-DD")}'`;
    case l.SqlServer:
      return `'${e2.toFormat("Y-MM-DD")}'`;
    case l.PGDB:
      return `#${e2.toFormat("Y-MM-DD")}#`;
    case l.Postgres:
      return `TIMESTAMP '${e2.toFormat("Y-MM-DD")}'`;
    default:
      return e2.toSQLWithKeyword();
  }
}
function E(e2, r3) {
  switch (e2 instanceof n3 && (e2 = e2.toStorageString()), r3) {
    case l.Oracle:
      return `TO_DATE('${e2}', 'HH24:MI:SS')`;
    case l.SqlServer:
      return `'${e2}'`;
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
    case l.Postgres:
    default:
      return `time '${e2}'`;
  }
}
function w2(r3, t3) {
  return T2(m.dateTimeToArcadeDate(d(r3) ? r3 : DateTime.fromJSDate(r3)), t3);
}
function A(e2, r3) {
  switch (r3) {
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
    case l.Oracle:
      return e2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
    case l.SqlServer:
      return e2 ? "CAST(GETDATE() AS DATE)" : "GETDATE()";
    case l.PGDB:
    case l.Postgres:
    default:
      return e2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
  }
}
function L(e2, r3, t3 = {}) {
  const a2 = {}, s3 = {}, n4 = {
    esriFieldTypeSmallInteger: "integer",
    esriFieldTypeInteger: "integer",
    esriFieldTypeBigInteger: "integer",
    esriFieldTypeSingle: "double",
    esriFieldTypeDouble: "double",
    esriFieldTypeString: "string",
    esriFieldTypeTimeOnly: "time-only",
    esriFieldTypeDateOnly: "date-only",
    esriFieldTypeTimestampOffset: "timestamp-offset",
    esriFieldTypeDate: "date",
    esriFieldTypeOID: "integer",
    esriFieldTypeGUID: "guid",
    esriFieldTypeGlobalID: "guid",
    oid: "integer",
    long: "integer",
    "small-integer": "integer",
    integer: "integer",
    "big-integer": "integer",
    single: "double",
    "time-only": "time-only",
    "date-only": "date-only",
    "timestamp-offset": "timestemp-offset",
    double: "double",
    date: "date",
    guid: "guid",
    "global-id": "guid",
    string: "string"
  };
  for (const c2 of r3) {
    const e3 = c2.type ? n4[c2.type] : void 0;
    a2[c2.name.toLowerCase()] = void 0 === e3 ? "" : e3;
  }
  for (const c2 in t3) {
    const e3 = n4[t3[c2]];
    s3[c2.toLowerCase()] = void 0 === e3 ? "" : e3;
  }
  switch (I(a2, e2.parseTree, e2.parameters, s3)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "date":
      return "date";
    case "date-only":
      return "date-only";
    case "time-only":
      return "time-only";
    case "timestamp-offset":
      return "timestamp-offset";
    case "string":
      return "string";
    case "global-id":
    case "guid":
      return "guid";
  }
  return "";
}
function I(e2, a2, n4, l2) {
  let u4;
  switch (a2.type) {
    case "interval":
      return "integer";
    case "case-expression": {
      const r3 = [];
      if ("simple" === a2.format) {
        for (let t3 = 0; t3 < a2.clauses.length; t3++) r3.push(I(e2, a2.clauses[t3].value, n4, l2));
        null !== a2.else && r3.push(I(e2, a2.else, n4, l2));
      } else {
        for (let t3 = 0; t3 < a2.clauses.length; t3++) r3.push(I(e2, a2.else, n4, l2));
        null !== a2.else && r3.push(I(e2, a2.else, n4, l2));
      }
      return b3(r3);
    }
    case "parameter": {
      const e3 = l2[a2.value.toLowerCase()];
      if (void 0 === e3 && n4) {
        const e4 = n4[a2.value.toLowerCase()];
        if (void 0 === e4) return "";
        if (null === e4) return "";
        if ("string" == typeof e4 || e4 instanceof String) return "string";
        if ("boolean" == typeof e4) return "boolean";
        if (f2(e4)) return "date";
        if (T(e4)) return "date";
        if (g(e4)) return "date-only";
        if (F(e4)) return "time-only";
        if ("number" == typeof e4) return e4 % 1 == 0 ? "integer" : "double";
      }
      return void 0 === e3 ? "" : e3;
    }
    case "expression-list": {
      const r3 = [];
      for (const t3 of a2.value) r3.push(I(e2, t3, n4, l2));
      return r3;
    }
    case "unary-expression":
      return "boolean";
    case "binary-expression":
      switch (a2.operator) {
        case "AND":
        case "OR":
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "IS":
        case "ISNOT":
          if ("null" !== a2.right.type) throw new n(t.UnsupportedIsRhs);
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return b3([I(e2, a2.left, n4, l2), I(e2, a2.right, n4, l2)]);
        case "||":
          return "string";
        default:
          throw new n(t.UnsupportedOperator, {
            operator: a2.operator
          });
      }
    case "null":
      return "";
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return null === a2.value ? "" : a2.value % 1 == 0 ? "integer" : "double";
    case "date":
      return "date";
    case "timestamp":
      return a2.withtimezone ? "timestamp-offset" : "date";
    case "time":
      return "time-only";
    case "current-time":
      return "date";
    case "column-reference": {
      const r3 = e2[a2.column.toLowerCase()];
      return void 0 === r3 ? "" : r3;
    }
    case "function":
      switch (a2.name.toLowerCase()) {
        case "cast":
          switch (a2.args?.value[1]?.value.type ?? "") {
            case "integer":
            case "smallint":
              return "integer";
            case "real":
            case "float":
              return "double";
            case "date":
            case "timestamp":
              return true === a2.args?.value[1]?.value?.withtimezone ? "timestamp-offset" : "date";
            case "time":
              return "time-only";
            case "varchar":
              return "string";
            default:
              return "";
          }
        case "position":
        case "extract":
        case "char_length":
        case "mod":
          return "integer";
        case "round":
          if (u4 = I(e2, a2.args, n4, l2), Array.isArray(u4)) {
            if (u4.length <= 0) return "double";
            u4 = u4[0];
          }
          return u4;
        case "sign":
          return "integer";
        case "ceiling":
        case "floor":
        case "abs":
          return u4 = I(e2, a2.args, n4, l2), Array.isArray(u4) && (u4 = b3(u4)), "integer" === u4 || "double" === u4 ? u4 : "double";
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "cosh":
        case "sinh":
        case "tanh":
        case "power":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
        case "truncate":
          return "double";
        case "nullif":
        case "coalesce":
          return u4 = I(e2, a2.args, n4, l2), Array.isArray(u4) ? u4.length > 0 ? u4[0] : "" : u4;
      }
      return "";
  }
  throw new n(t.UnsupportedSyntax, {
    node: a2.type
  });
}
var N2 = {
  boolean: 1,
  string: 2,
  integer: 3,
  double: 4,
  date: 5
};
function b3(e2) {
  if (e2) {
    let r3 = "";
    for (const t3 of e2) "" !== t3 && (r3 = "" === r3 || N2[r3] < N2[t3] ? t3 : r3);
    return r3;
  }
  return "";
}
function v2(e2, r3) {
  return O4(e2.parseTree, r3);
}
function D2(e2) {
  return "column-reference" === e2?.parseTree.type;
}
function O4(e2, r3) {
  if (null == e2) return false;
  switch (e2.type) {
    case "when-clause":
      return O4(e2.operand, r3) || O4(e2.value, r3);
    case "case-expression":
      for (const t3 of e2.clauses) if (O4(t3, r3)) return true;
      return !("simple" !== e2.format || !O4(e2.operand, r3)) || !(null === e2.else || !O4(e2.else, r3));
    case "parameter":
    case "null":
    case "boolean":
    case "date":
    case "timestamp":
    case "time":
    case "string":
    case "number":
      return false;
    case "expression-list":
      for (const t3 of e2.value) if (O4(t3, r3)) return true;
      return false;
    case "unary-expression":
      return O4(e2.expr, r3);
    case "binary-expression":
      return O4(e2.left, r3) || O4(e2.right, r3);
    case "column-reference":
      return r3.toLowerCase() === e2.column.toLowerCase();
    case "function":
      return O4(e2.args, r3);
  }
  return false;
}
function R2(e2) {
  let r3 = "";
  return r3 += e2.period.toUpperCase(), r3;
}
function F3(e2, r3, t3) {
  let a2 = "";
  return a2 = "interval-period" === r3.type ? R2(r3) : R2(r3.start) + " TO " + R2(r3.end), "INTERVAL " + t3 + " " + e2 + " " + a2;
}

// ../../../node_modules/@arcgis/core/arcade/featureset/support/FeatureSetIterator.js
var e = class {
  constructor(t3, e2) {
    this._lastId = -1, this._progress = e2, this._parent = t3;
  }
  reset() {
    this._lastId = -1;
  }
  nextBatchAsArcadeFeatures(e2, s3) {
    return __async(this, null, function* () {
      const n4 = yield this.nextBatch(e2);
      return null === n4 ? n4 : n4.map((e3) => D.createFromGraphicLikeObject(e3.geometry, e3.attributes, this._parent, s3));
    });
  }
  nextBatch(t3) {
    if (null !== this._parent._mainSetInUse) return this._parent._mainSetInUse.then((e3) => this.nextBatch(t3), (e3) => this.nextBatch(t3));
    const e2 = {
      returnpromise: null,
      hasset: false
    }, s3 = [];
    return e2.returnpromise = new Promise((n4, a2) => {
      this._parent._getSet(this._progress).then((r3) => {
        const i = r3._known;
        let h4 = i.length - 1;
        if ("GETPAGES" === i[i.length - 1] && (h4 -= 1), this._lastId + t3 > h4 && i.length > 0 && "GETPAGES" === i[i.length - 1]) return void this._parent._expandPagedSet(r3, this._parent._maxQueryRate(), 0, 0, this._progress).then((s4) => {
          e2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(t3).then(n4, a2);
        }, (t4) => {
          e2.hasset = true, this._parent._mainSetInUse = null, a2(t4);
        });
        const _ = r3._candidates;
        if (h4 >= this._lastId + t3 || 0 === _.length) {
          for (let e3 = 0; e3 < t3; e3++) {
            const t4 = e3 + this._lastId + 1;
            if (t4 >= i.length) break;
            s3[e3] = i[t4];
          }
          return this._lastId += s3.length, 0 === s3.length && (e2.hasset = true, this._parent._mainSetInUse = null, n4([])), void this._parent._getFeatureBatch(s3, this._progress).then((t4) => {
            e2.hasset = true, this._parent._mainSetInUse = null, n4(t4);
          }, (t4) => {
            e2.hasset = true, this._parent._mainSetInUse = null, a2(t4);
          });
        }
        this._parent._refineSetBlock(r3, this._parent._maxProcessingRate(), this._progress).then(() => {
          e2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(t3).then(n4, a2);
        }, (t4) => {
          e2.hasset = true, this._parent._mainSetInUse = null, a2(t4);
        });
      }, (t4) => {
        e2.hasset = true, this._parent._mainSetInUse = null, a2(t4);
      });
    }), false === e2.hasset && (this._parent._mainSetInUse = e2.returnpromise, e2.hasset = true), e2.returnpromise;
  }
  next() {
    if (null !== this._parent._mainSetInUse) return this._parent._mainSetInUse.then((t4) => this.next(), (t4) => this.next());
    const t3 = {
      returnpromise: null,
      hasset: false
    };
    return t3.returnpromise = new Promise((e2, s3) => {
      this._parent._getSet(this._progress).then((n4) => {
        const a2 = n4._known;
        if (this._lastId < a2.length - 1) "GETPAGES" === a2[this._lastId + 1] ? this._parent._expandPagedSet(n4, this._parent._maxQueryRate(), 0, 0, this._progress).then((e3) => (t3.hasset = true, this._parent._mainSetInUse = null, this.next())).then(e2, s3) : (this._lastId += 1, this._parent._getFeature(n4, a2[this._lastId], this._progress).then((s4) => {
          t3.hasset = true, this._parent._mainSetInUse = null, e2(s4);
        }, (e3) => {
          t3.hasset = true, this._parent._mainSetInUse = null, s3(e3);
        }));
        else {
          n4._candidates.length > 0 ? this._parent._refineSetBlock(n4, this._parent._maxProcessingRate(), this._progress).then(() => {
            t3.hasset = true, this._parent._mainSetInUse = null, this.next().then(e2, s3);
          }, (e3) => {
            t3.hasset = true, this._parent._mainSetInUse = null, s3(e3);
          }) : (t3.hasset = true, this._parent._mainSetInUse = null, e2(null));
        }
      }, (e3) => {
        t3.hasset = true, this._parent._mainSetInUse = null, s3(e3);
      });
    }), false === t3.hasset && (this._parent._mainSetInUse = t3.returnpromise, t3.hasset = true), t3.returnpromise;
  }
  count() {
    return __async(this, null, function* () {
      if (-1 !== this._parent._totalCount) return this._parent._totalCount;
      const t3 = yield this._parent._getSet(this._progress), e2 = yield this._refineAllSets(t3);
      return this._parent._totalCount = e2._known.length, this._parent._totalCount;
    });
  }
  _refineAllSets(t3) {
    return __async(this, null, function* () {
      if (t3._known.length > 0 && "GETPAGES" === t3._known[t3._known.length - 1]) return yield this._parent._expandPagedSet(t3, this._parent._maxQueryRate(), 0, 1, this._progress), this._refineAllSets(t3);
      if (t3._candidates.length > 0) {
        if ("GETPAGES" === t3._known[t3._candidates.length - 1]) return yield this._parent._expandPagedSet(t3, this._parent._maxQueryRate(), 0, 2, this._progress), this._refineAllSets(t3);
        const e2 = yield this._parent._refineSetBlock(t3, this._parent._maxProcessingRate(), this._progress);
        return e2._candidates.length > 0 ? this._refineAllSets(e2) : e2;
      }
      return t3;
    });
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/support/IdSet.js
var t2 = class {
  constructor(t3, s3, e2, i) {
    this._lastFetchedIndex = 0, this._ordered = false, this.pagesDefinition = null, this._candidates = t3, this._known = s3, this._ordered = e2, this.pagesDefinition = i;
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/support/stats.js
function u2(t3) {
  return t3 = +t3, isFinite(t3) ? t3 - t3 % 1 || (t3 < 0 ? -0 : 0 === t3 ? t3 : 0) : t3;
}
function f4(t3) {
  let n4 = 0;
  for (let e2 = 0; e2 < t3.length; e2++) n4 += t3[e2];
  return n4 / t3.length;
}
function h3(t3) {
  const n4 = f4(t3);
  let e2 = 0;
  for (let r3 = 0; r3 < t3.length; r3++) e2 += (n4 - t3[r3]) ** 2;
  return e2 / t3.length;
}
function m4(t3) {
  const n4 = f4(t3);
  let e2 = 0;
  for (let r3 = 0; r3 < t3.length; r3++) e2 += (n4 - t3[r3]) ** 2;
  return e2 / (t3.length - 1);
}
function g3(t3) {
  let n4 = 0;
  for (let e2 = 0; e2 < t3.length; e2++) n4 += t3[e2];
  return n4;
}
function p4(t3, n4) {
  const c2 = [], s3 = {}, i = [];
  for (let o = 0; o < t3.length; o++) {
    if (void 0 !== t3[o] && null !== t3[o]) {
      const n5 = t3[o];
      if (c(n5) || p(n5)) void 0 === s3[n5] && (c2.push(n5), s3[n5] = 1);
      else {
        let t4 = false;
        for (let e2 = 0; e2 < i.length; e2++) true === G(i[e2], n5) && (t4 = true);
        false === t4 && (i.push(n5), c2.push(n5));
      }
    }
    if (c2.length >= n4 && -1 !== n4) return c2;
  }
  return c2;
}
function w3(t3) {
  switch (t3.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
function d2(t3, n4, e2 = 1e3) {
  switch (t3.toLowerCase()) {
    case "distinct":
      return p4(n4, e2);
    case "avg":
    case "mean":
      return f4(n4);
    case "min":
      return Math.min.apply(Math, n4);
    case "sum":
      return g3(n4);
    case "max":
      return Math.max.apply(Math, n4);
    case "stdev":
    case "stddev":
      return Math.sqrt(h3(n4));
    case "var":
    case "variance":
      return h3(n4);
    case "count":
      return n4.length;
  }
  return 0;
}
function v3(t3, n4, e2) {
  return __async(this, null, function* () {
    const r3 = yield O5(t3, n4, e2, true);
    return 0 === r3.length ? null : Math.min.apply(Math, r3);
  });
}
function y2(t3, n4, e2) {
  return __async(this, null, function* () {
    const r3 = yield O5(t3, n4, e2, true);
    return 0 === r3.length ? null : Math.max.apply(Math, r3);
  });
}
function M2(t3, n4, e2) {
  return __async(this, null, function* () {
    let r3 = "";
    n4 && !D2(n4) && (r3 = L(n4, t3.fields));
    const a2 = yield O5(t3, n4, e2, true);
    if (0 === a2.length) return null;
    const i = f4(a2);
    return null === i ? i : "integer" === r3 ? u2(i) : i;
  });
}
function x2(t3, n4, e2) {
  return __async(this, null, function* () {
    const r3 = yield O5(t3, n4, e2, true);
    return 0 === r3.length ? null : m4(r3);
  });
}
function T3(t3, n4, e2) {
  return __async(this, null, function* () {
    const r3 = yield O5(t3, n4, e2, true);
    return 0 === r3.length ? null : Math.sqrt(m4(r3));
  });
}
function k(t3, n4, e2) {
  return __async(this, null, function* () {
    const r3 = yield O5(t3, n4, e2, true);
    return 0 === r3.length ? null : g3(r3);
  });
}
function q(t3, n4) {
  return __async(this, null, function* () {
    return t3.iterator(n4).count();
  });
}
function O5(e2, r3, a2, c2 = false) {
  return __async(this, null, function* () {
    const s3 = e2.iterator(a2), u4 = [], f6 = {
      ticker: 0
    };
    let h4 = yield s3.next();
    for (; null !== h4; ) {
      if (f6.ticker++, a2.aborted) throw new s(r.Cancelled);
      f6.ticker % 100 == 0 && (f6.ticker = 0, yield new Promise((t3) => {
        setTimeout(t3, 0);
      }));
      const e3 = r3?.calculateValue(h4);
      null === e3 ? false === c2 && (u4[u4.length] = e3) : u4[u4.length] = e3 instanceof n2 || e3 instanceof n3 ? e3.toNumber() : e3 instanceof r2 ? e3.toMilliseconds() : e3, h4 = yield s3.next();
    }
    return u4;
  });
}
function S4(e2, r3, a2 = 1e3, c2 = null) {
  return __async(this, null, function* () {
    const s3 = e2.iterator(c2), u4 = [], f6 = {}, h4 = {
      ticker: 0
    };
    let m5 = yield s3.next();
    for (; null !== m5; ) {
      if (h4.ticker++, c2?.aborted) throw new s(r.Cancelled);
      h4.ticker % 100 == 0 && (h4.ticker = 0, yield new Promise((t3) => {
        setTimeout(t3, 0);
      }));
      const e3 = r3?.calculateValue(m5);
      let g4 = e3;
      if (e3 instanceof n2 ? g4 = "!!DATEONLY!!-" + e3.toString() : e3 instanceof r2 ? g4 = "!!TSOFFSETONLY!!-" + e3.toString() : e3 instanceof n3 ? g4 = "!!TIMEONLY!!-" + e3.toString() : e3 instanceof Date && (g4 = "!!DATE!!-" + e3.toString()), null != e3 && void 0 === f6[g4] && (u4.push(e3), f6[g4] = 1), u4.length >= a2 && -1 !== a2) return u4;
      m5 = yield s3.next();
    }
    return u4;
  });
}

// ../../../node_modules/@arcgis/core/arcade/featureset/support/FeatureSet.js
var x3 = class _x {
  constructor(e2) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = l.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = [], this.typeIdField = null, this.types = null, this.subtypeField = null, this.subtypes = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = false, this.hasZ = false, this._transparent = false, this.loaded = false, this._loadPromise = null, this._fieldsIndex = null, this.fsetInfo = null, e2?.lrucache && (this.recentlyUsedQueries = e2.lrucache), e2?.interceptor && (this.featureSetQueryInterceptor = e2.interceptor);
  }
  optimisePagingFeatureQueries(e2) {
    this._parent && this._parent.optimisePagingFeatureQueries(e2);
  }
  _hasMemorySource() {
    return true;
  }
  prop(e2, t3) {
    return void 0 === t3 ? this[e2] : (void 0 !== this[e2] && (this[e2] = t3), this);
  }
  end() {
    return null !== this._parent && true === this._parent._transparent ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return null === this._loadPromise && (this._loadPromise = this.loadImpl()), this._loadPromise;
  }
  loadImpl() {
    return __async(this, null, function* () {
      return true === this._parent?.loaded ? (this._initialiseFeatureSet(), this) : (yield this._parent?.load(), this._initialiseFeatureSet(), this);
    });
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types, this.subtypeField = this._parent.subtypeField, this.subtypes = this._parent.subtypes) : (this.fields = [], this.typeIdField = "", this.subtypeField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new f({
      wkid: 4326
    }), this.geometryType = N.point);
  }
  getField(e2, t3) {
    let s3;
    return (t3 = t3 || this.fields) && (e2 = e2.toLowerCase(), t3.some((t4) => (t4 && t4.name.toLowerCase() === e2 && (s3 = t4), !!s3))), s3;
  }
  getFieldsIndex() {
    return null === this._fieldsIndex && (this._fieldsIndex = Z.fromLayer({
      timeInfo: this.timeInfo,
      editFieldsInfo: this.editFieldsInfo,
      dateFieldsTimeZone: this.dateFieldsTimeZone,
      datesInUnknownTimezone: this.datesInUnknownTimezone,
      fields: this.fields
    })), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return null !== this._parent ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return null !== this._parent ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e2) {
    if (null != e2 && e2.aborted) throw new s(r.Cancelled);
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  _canDoAggregates(e2, t3, s3, n4, i) {
    return __async(this, null, function* () {
      return null !== this._parent && this._parent._canDoAggregates(e2, t3, s3, n4, i);
    });
  }
  _getAggregatePagesDataSourceDefinition(e2, n4, i, a2, r3, l2, u4) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s(r.NeverReach);
      return this._parent._getAggregatePagesDataSourceDefinition(e2, n4, i, a2, r3, l2, u4);
    });
  }
  _getAgregagtePhysicalPage(e2, n4, i) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s(r.NeverReach);
      return this._parent._getAgregagtePhysicalPage(e2, n4, i);
    });
  }
  databaseType() {
    return __async(this, null, function* () {
      if (this._databaseType === l.NotEvaluated) {
        if (null !== a.applicationCache) {
          const t3 = a.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
          if (null !== t3) return t3;
        }
        if (null !== this._databaseTypeProbed) return this._databaseTypeProbed;
        try {
          this._databaseTypeProbed = this._getDatabaseTypeImpl(), null !== a.applicationCache && a.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), this._databaseTypeProbed);
        } catch (t3) {
          throw null !== a.applicationCache && a.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), t3;
        }
        return this._databaseTypeProbed;
      }
      return this._databaseType;
    });
  }
  _getDatabaseTypeImpl() {
    return __async(this, null, function* () {
      const e2 = [{
        thetype: l.SqlServer,
        testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0"
      }, {
        thetype: l.Oracle,
        testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0"
      }, {
        thetype: l.StandardisedNoInterval,
        testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0"
      }];
      for (const t3 of e2) {
        if (true === (yield this._runDatabaseProbe(t3.testwhere))) return t3.thetype;
      }
      return l.StandardisedNoInterval;
    });
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  _runDatabaseProbe(e2) {
    return __async(this, null, function* () {
      if (null !== this._parent) return this._parent._runDatabaseProbe(e2);
      throw new s(r.NotImplemented);
    });
  }
  isTable() {
    return this._parent?.isTable() ?? false;
  }
  _featureFromCache(e2) {
    if (void 0 !== this._featureCache[e2]) return this._featureCache[e2];
  }
  _isInFeatureSet(e2) {
    return s2.Unknown;
  }
  _getSet(e2) {
    throw new s(r.NotImplemented);
  }
  _getFeature(e2, n4, i) {
    return __async(this, null, function* () {
      if (this._checkCancelled(i), void 0 !== this._featureFromCache(n4)) return this._featureFromCache(n4);
      if (yield this._getFeatures(e2, n4, this._maxProcessingRate(), i), this._checkCancelled(i), void 0 !== this._featureFromCache(n4)) return this._featureFromCache(n4);
      throw new s(r.MissingFeatures);
    });
  }
  _getFeatureBatch(e2, t3) {
    return __async(this, null, function* () {
      this._checkCancelled(t3);
      const s3 = new t2([], e2, false, null), n4 = [];
      yield this._getFeatures(s3, -1, e2.length, t3), this._checkCancelled(t3);
      for (const i of e2) void 0 !== this._featureFromCache(i) && n4.push(this._featureFromCache(i));
      return n4;
    });
  }
  _getFeatures(e2, t3, s3, n4) {
    return __async(this, null, function* () {
      return "success";
    });
  }
  _getFilteredSet(e2, n4, i, a2, r3) {
    throw new s(r.NotImplemented);
  }
  _refineSetBlock(e2, t3, s3) {
    return __async(this, null, function* () {
      if (true === this._checkIfNeedToExpandCandidatePage(e2, this._maxQueryRate())) return yield this._expandPagedSet(e2, this._maxQueryRate(), 0, 0, s3), this._refineSetBlock(e2, t3, s3);
      this._checkCancelled(s3);
      const n4 = e2._candidates.length;
      this._refineKnowns(e2, t3);
      let i = n4 - e2._candidates.length;
      if (0 === e2._candidates.length) return e2;
      if (i >= t3) return e2;
      if (yield this._refineIfParentKnown(e2, t3 - i, s3), this._checkCancelled(s3), this._refineKnowns(e2, t3 - i), i = n4 - e2._candidates.length, i < t3 && e2._candidates.length > 0) {
        const n5 = t3 - i, a2 = this._prepareFetchAndRefineSet(e2._candidates);
        return yield this._fetchAndRefineFeatures(a2, a2.length > n5 ? n5 : e2._candidates.length, s3), this._checkCancelled(s3), this._refineKnowns(e2, t3 - i), e2;
      }
      return e2;
    });
  }
  _fetchAndRefineFeatures(e2, t3, s3) {
    return null;
  }
  _prepareFetchAndRefineSet(e2) {
    const t3 = [];
    for (let s3 = 0; s3 < e2.length; s3++) this._isPhysicalFeature(e2[s3]) && t3.push(e2[s3]);
    return t3;
  }
  _isPhysicalFeature(e2) {
    return null === this._parent || this._parent._isPhysicalFeature(e2);
  }
  _refineKnowns(e2, t3) {
    let s3 = 0, n4 = null;
    const i = [];
    t3 = this._maxQueryRate();
    for (let a2 = 0; a2 < e2._candidates.length && "GETPAGES" !== e2._candidates[a2]; a2++) {
      let r3 = false;
      const u4 = this._candidateIdTransform(e2._candidates[a2]);
      u4 !== e2._candidates[a2] && (r3 = true);
      const h4 = this._isInFeatureSet(u4);
      if (h4 === s2.InFeatureSet) true === r3 ? e2._known.includes(u4) || (e2._known.push(u4), s3 += 1) : (e2._known.push(e2._candidates[a2]), s3 += 1), null === n4 ? n4 = {
        start: a2,
        end: a2
      } : n4.end === a2 - 1 ? n4.end = a2 : (i.push(n4), n4 = {
        start: a2,
        end: a2
      });
      else if (h4 === s2.NotInFeatureSet) null === n4 ? n4 = {
        start: a2,
        end: a2
      } : n4.end === a2 - 1 ? n4.end = a2 : (i.push(n4), n4 = {
        start: a2,
        end: a2
      }), s3 += 1;
      else if (h4 === s2.Unknown && (s3 += 1, true === e2._ordered)) break;
      if (s3 >= t3) break;
    }
    null !== n4 && i.push(n4);
    for (let a2 = i.length - 1; a2 >= 0; a2--) e2._candidates.splice(i[a2].start, i[a2].end - i[a2].start + 1);
  }
  _refineIfParentKnown(e2, t3, s3) {
    const n4 = new t2([], [], e2._ordered, null);
    return n4._candidates = e2._candidates.slice(0), this._parent._refineSetBlock(n4, t3, s3);
  }
  _candidateIdTransform(e2) {
    return this._parent._candidateIdTransform(e2);
  }
  _checkIfNeedToExpandKnownPage(e2, t3) {
    if (null === e2.pagesDefinition) return false;
    let s3 = 0;
    for (let n4 = e2._lastFetchedIndex; n4 < e2._known.length; n4++) {
      if ("GETPAGES" === e2._known[n4]) return true;
      if (void 0 === this._featureCache[e2._known[n4]] && (s3 += 1, s3 >= t3)) break;
    }
    return false;
  }
  _checkIfNeedToExpandCandidatePage(e2, t3) {
    if (null === e2.pagesDefinition) return false;
    let s3 = 0;
    for (let n4 = 0; n4 < e2._candidates.length; n4++) {
      if ("GETPAGES" === e2._candidates[n4]) return true;
      if (s3 += 1, s3 >= t3) break;
    }
    return false;
  }
  _expandPagedSet(e2, n4, i, a2, r3) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s(r.NotImplemented);
      return this._parent._expandPagedSet(e2, n4, i, a2, r3);
    });
  }
  _expandPagedSetFeatureSet(e2, t3, s3, n4, i) {
    return __async(this, null, function* () {
      if (e2._known.length > 0 && "GETPAGES" === e2._known[e2._known.length - 1] && (n4 = 1), 0 === n4 && e2._candidates.length > 0 && "GETPAGES" === e2._candidates[e2._candidates.length - 1] && (n4 = 2), 0 === n4) return "finished";
      const a2 = yield this._getPage(e2, n4, i);
      return s3 + a2 < t3 ? this._expandPagedSet(e2, t3, s3 + a2, 0, i) : "success";
    });
  }
  _getPage(e2, t3, s3) {
    return __async(this, null, function* () {
      const n4 = 1 === t3 ? e2._known : e2._candidates;
      if (e2.pagesDefinition.internal.set.length > e2.pagesDefinition.resultOffset || true === e2.pagesDefinition.internal.fullyResolved) {
        n4.length = n4.length - 1;
        let t4 = 0;
        for (let i = 0; i < e2.pagesDefinition.resultRecordCount && !(e2.pagesDefinition.resultOffset + i >= e2.pagesDefinition.internal.set.length); i++) n4[n4.length] = e2.pagesDefinition.internal.set[e2.pagesDefinition.resultOffset + i], t4++;
        e2.pagesDefinition.resultOffset += t4;
        let s4 = false;
        return true === e2.pagesDefinition.internal.fullyResolved && e2.pagesDefinition.internal.set.length <= e2.pagesDefinition.resultOffset && (s4 = true), false === s4 && n4.push("GETPAGES"), t4;
      }
      return yield this._getPhysicalPage(e2, t3, s3), this._getPage(e2, t3, s3);
    });
  }
  _getPhysicalPage(e2, t3, s3) {
    return null;
  }
  _clonePageDefinition(e2) {
    return null === this._parent ? null : this._parent._clonePageDefinition(e2);
  }
  _first(e2) {
    return this.iterator(e2).next();
  }
  first(e2) {
    return this._first(e2);
  }
  calculateStatistic(e2, t3, s3, n4) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      let i = yield this._stat(e2, t3, "", null, null, s3, n4);
      return false === i.calculated && (i = yield this._manualStat(e2, t3, s3, n4)), i.result;
    });
  }
  _manualStat(e2, t3, s3, n4) {
    return __async(this, null, function* () {
      let i = null;
      switch (e2.toLowerCase()) {
        case "count":
          return i = yield q(this, n4), {
            calculated: true,
            result: i
          };
        case "distinct":
          return i = yield S4(this, t3, s3, n4), {
            calculated: true,
            result: i
          };
        case "avg":
        case "mean":
          return i = yield M2(this, t3, n4), {
            calculated: true,
            result: i
          };
        case "stdev":
          return i = yield T3(this, t3, n4), {
            calculated: true,
            result: i
          };
        case "variance":
          return i = yield x2(this, t3, n4), {
            calculated: true,
            result: i
          };
        case "sum":
          return i = yield k(this, t3, n4), {
            calculated: true,
            result: i
          };
        case "min":
          return i = yield v3(this, t3, n4), {
            calculated: true,
            result: i
          };
        case "max":
          return i = yield y2(this, t3, n4), {
            calculated: true,
            result: i
          };
        default:
          return {
            calculated: true,
            result: 0
          };
      }
    });
  }
  _stat(e2, t3, s3, n4, i, a2, r3) {
    return __async(this, null, function* () {
      const l2 = yield this._parent._stat(e2, t3, s3, n4, i, a2, r3);
      return false === l2.calculated ? null === i && "" === s3 && null === n4 ? this._manualStat(e2, t3, a2, r3) : {
        calculated: false
      } : l2;
    });
  }
  _unionAllGeomSelf(e2) {
    const t3 = this.iterator(this._defaultTracker(e2)), s3 = [];
    return new Promise((e3, n4) => {
      this._unionShapeInBatches(s3, t3, e3, n4);
    });
  }
  _unionAllGeom(e2) {
    return new Promise((t3, s3) => {
      const n4 = this.iterator(this._defaultTracker(e2)), i = [];
      this._unionShapeInBatches(i, n4, t3, s3);
    });
  }
  _unionShapeInBatches(e2, t3, s3, n4) {
    t3.next().then((i) => {
      try {
        null !== i && null !== i.geometry && e2.push(i.geometry), e2.length > 30 || null === i && e2.length > 1 ? b2(e2).then((a2) => {
          try {
            null === i ? s3(a2) : (e2 = [a2], this._unionShapeInBatches(e2, t3, s3, n4));
          } catch (r3) {
            n4(r3);
          }
        }, n4) : null === i ? 1 === e2.length ? s3(e2[0]) : s3(null) : this._unionShapeInBatches(e2, t3, s3, n4);
      } catch (a2) {
        n4(a2);
      }
    }, n4);
  }
  iterator(e2) {
    return new e(this, e2);
  }
  intersection(e2, t3 = false) {
    return _x._featuresetFunctions.intersection.bind(this)(e2, t3);
  }
  difference(e2, t3 = false, s3 = true) {
    return _x._featuresetFunctions.difference.bind(this)(e2, t3, s3);
  }
  symmetricDifference(e2, t3 = false, s3 = true) {
    return _x._featuresetFunctions.symmetricDifference.bind(this)(e2, t3, s3);
  }
  morphShape(e2, t3, s3 = "unknown", n4 = null) {
    return _x._featuresetFunctions.morphShape.bind(this)(e2, t3, s3, n4);
  }
  morphShapeAndAttributes(e2, t3, s3 = "unknown") {
    return _x._featuresetFunctions.morphShapeAndAttributes.bind(this)(e2, t3, s3);
  }
  union(e2, t3 = false) {
    return _x._featuresetFunctions.union.bind(this)(e2, t3);
  }
  intersects(e2) {
    return _x._featuresetFunctions.intersects.bind(this)(e2);
  }
  envelopeIntersects(e2) {
    return _x._featuresetFunctions.envelopeIntersects.bind(this)(e2);
  }
  contains(e2) {
    return _x._featuresetFunctions.contains.bind(this)(e2);
  }
  overlaps(e2) {
    return _x._featuresetFunctions.overlaps.bind(this)(e2);
  }
  relate(e2, t3) {
    return _x._featuresetFunctions.relate.bind(this)(e2, t3);
  }
  within(e2) {
    return _x._featuresetFunctions.within.bind(this)(e2);
  }
  touches(e2) {
    return _x._featuresetFunctions.touches.bind(this)(e2);
  }
  top(e2) {
    return _x._featuresetFunctions.top.bind(this)(e2);
  }
  crosses(e2) {
    return _x._featuresetFunctions.crosses.bind(this)(e2);
  }
  buffer(e2, t3, s3, n4 = true) {
    return _x._featuresetFunctions.buffer.bind(this)(e2, t3, s3, n4);
  }
  filter(e2, t3 = null) {
    return _x._featuresetFunctions.filter.bind(this)(e2, t3);
  }
  orderBy(e2) {
    return _x._featuresetFunctions.orderBy.bind(this)(e2);
  }
  dissolve(e2, t3) {
    return _x._featuresetFunctions.dissolve.bind(this)(e2, t3);
  }
  groupby(e2, t3) {
    return _x._featuresetFunctions.groupby.bind(this)(e2, t3);
  }
  reduce(e2, t3 = null, s3) {
    return new Promise((n4, i) => {
      this._reduceImpl(this.iterator(this._defaultTracker(s3)), e2, t3, 0, n4, i, 0);
    });
  }
  _reduceImpl(e2, t3, s3, n4, i, a2, r3) {
    try {
      if (++r3 > 1e3) return void setTimeout(() => {
        r3 = 0, this._reduceImpl(e2, t3, s3, n4, i, a2, r3);
      });
      e2.next().then((l2) => {
        try {
          if (null === l2) i(s3);
          else {
            const u4 = t3(s3, l2, n4, this);
            S(u4) ? u4.then((s4) => {
              this._reduceImpl(e2, t3, s4, n4 + 1, i, a2, r3);
            }, a2) : this._reduceImpl(e2, t3, u4, n4 + 1, i, a2, r3);
          }
        } catch (u4) {
          a2(u4);
        }
      }, a2);
    } catch (l2) {
      a2(l2);
    }
  }
  removeField(e2) {
    return _x._featuresetFunctions.removeField.bind(this)(e2);
  }
  addField(e2, t3, s3 = null) {
    return _x._featuresetFunctions.addField.bind(this)(e2, t3, s3);
  }
  sumArea(e2, t3 = false, s3) {
    const n4 = O2(e2);
    return this.reduce((e3, s4) => null === s4.geometry ? 0 : t3 ? K(s4.geometry, n4).then((t4) => e3 + t4) : W(s4.geometry, n4).then((t4) => e3 + t4), 0, s3);
  }
  sumLength(e2, t3 = false, s3) {
    const n4 = v(e2);
    return this.reduce((e3, s4) => null === s4.geometry ? 0 : t3 ? M(s4.geometry, n4).then((t4) => e3 + t4) : F2(s4.geometry, n4).then((t4) => e3 + t4), 0, s3);
  }
  distinct(e2, t3 = 1e3, s3 = null, n4) {
    return __async(this, null, function* () {
      yield this.load();
      const i = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(i, s3), this.calculateStatistic("distinct", i, t3, this._defaultTracker(n4));
    });
  }
  min(e2, t3 = null, s3) {
    return __async(this, null, function* () {
      yield this.load();
      const n4 = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(n4, t3), this.calculateStatistic("min", n4, -1, this._defaultTracker(s3));
    });
  }
  max(e2, t3 = null, s3) {
    return __async(this, null, function* () {
      yield this.load();
      const n4 = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(n4, t3), this.calculateStatistic("max", n4, -1, this._defaultTracker(s3));
    });
  }
  avg(e2, t3 = null, s3) {
    return __async(this, null, function* () {
      yield this.load();
      const n4 = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(n4, t3), this.calculateStatistic("avg", n4, -1, this._defaultTracker(s3));
    });
  }
  sum(e2, t3 = null, s3) {
    return __async(this, null, function* () {
      yield this.load();
      const n4 = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(n4, t3), this.calculateStatistic("sum", n4, -1, this._defaultTracker(s3));
    });
  }
  stdev(e2, t3 = null, s3) {
    return __async(this, null, function* () {
      yield this.load();
      const n4 = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(n4, t3), this.calculateStatistic("stdev", n4, -1, this._defaultTracker(s3));
    });
  }
  variance(e2, t3 = null, s3) {
    return __async(this, null, function* () {
      yield this.load();
      const n4 = O.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
      return v4(n4, t3), this.calculateStatistic("variance", n4, -1, this._defaultTracker(s3));
    });
  }
  count(e2) {
    return __async(this, null, function* () {
      return yield this.load(), this.calculateStatistic("count", O.create("1", this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), -1, this._defaultTracker(e2));
    });
  }
  _defaultTracker(e2) {
    return e2 ?? {
      aborted: false
    };
  }
  forEach(e2, t3) {
    return new Promise((s3, n4) => {
      this._forEachImpl(this.iterator(this._defaultTracker(t3)), e2, this, s3, n4, 0);
    });
  }
  _forEachImpl(e2, t3, s3, n4, i, a2) {
    try {
      if (++a2 > 1e3) return void setTimeout(() => {
        a2 = 0, this._forEachImpl(e2, t3, s3, n4, i, a2);
      }, 0);
      e2.next().then((r3) => {
        try {
          if (null === r3) n4(s3);
          else {
            const l2 = t3(r3);
            null == l2 ? this._forEachImpl(e2, t3, s3, n4, i, a2) : S(l2) ? l2.then(() => {
              try {
                this._forEachImpl(e2, t3, s3, n4, i, a2);
              } catch (r4) {
                i(r4);
              }
            }, i) : this._forEachImpl(e2, t3, s3, n4, i, a2);
          }
        } catch (l2) {
          i(l2);
        }
      }, i);
    } catch (r3) {
      i(r3);
    }
  }
  convertToJSON(e2) {
    const t3 = {
      layerDefinition: {
        geometryType: this.geometryType,
        fields: []
      },
      featureSet: {
        features: [],
        geometryType: this.geometryType
      }
    };
    for (let s3 = 0; s3 < this.fields.length; s3++) t3.layerDefinition.fields.push(u(this.fields[s3]));
    return this.reduce((e3, s3) => {
      const n4 = {
        geometry: s3.geometry?.toJSON(),
        attributes: {}
      };
      for (const t4 in s3.attributes) n4.attributes[t4] = s3.attributes[t4];
      return t3.featureSet.features.push(n4), 1;
    }, 0, e2).then(() => t3);
  }
  castToText(e2 = false) {
    return "object, FeatureSet";
  }
  queryAttachments(e2, t3, s3, n4, i) {
    return this._parent.queryAttachments(e2, t3, s3, n4, i);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypeMetaData() {
    return this.subtypeField && this.subtypes ? {
      subtypeField: this.subtypeField,
      subtypes: this.subtypes ? this.subtypes.map((e2) => ({
        name: e2.name,
        code: e2.code
      })) : []
    } : this.typeIdField ? {
      subtypeField: this.typeIdField,
      subtypes: this.types ? this.types.map((e2) => ({
        name: e2.name,
        code: e2.id
      })) : []
    } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e2 = [];
    for (const t3 of this.fields) e2.push(u(t3));
    return {
      objectIdField: this.objectIdField,
      globalIdField: this.globalIdField,
      geometryType: void 0 === w[this.geometryType] ? "esriGeometryNull" : w[this.geometryType],
      fields: e2
    };
  }
  convertToText(e2, t3) {
    return __async(this, null, function* () {
      if ("schema" === e2) return yield this._ensureLoaded(), JSON.stringify(this.schema());
      if ("featureset" === e2) {
        yield this._ensureLoaded();
        const e3 = [];
        yield this.reduce((t4, s4) => {
          const n4 = {
            geometry: s4.geometry ? s4.geometry.toJSON() : null,
            attributes: s4.attributes
          };
          return null !== n4.geometry && n4.geometry.spatialReference && delete n4.geometry.spatialReference, e3.push(n4), 1;
        }, 0, t3);
        const s3 = this.schema();
        return s3.features = e3, s3.spatialReference = this.spatialReference.toJSON(), JSON.stringify(s3);
      }
      return this.castToText();
    });
  }
  getFeatureByObjectId(e2, t3) {
    return this._parent.getFeatureByObjectId(e2, t3);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
  getRootFeatureSet() {
    return null !== this._parent ? this._parent.getRootFeatureSet() : this;
  }
  getDataSourceFeatureSet() {
    return null !== this._parent ? this._parent.getDataSourceFeatureSet() : this;
  }
  castAsJson(e2 = null) {
    return "keeptype" === e2?.featureset ? this : "none" === e2?.featureset ? null : {
      type: "FeatureSet"
    };
  }
  castAsJsonAsync(e2 = null, t3 = null) {
    return __async(this, null, function* () {
      if ("keeptype" === t3?.featureset) return this;
      if ("schema" === t3?.featureset) return yield this._ensureLoaded(), JSON.parse(JSON.stringify(this.schema()));
      if ("none" === t3?.featureset) return null;
      yield this._ensureLoaded();
      const s3 = [];
      yield this.reduce((e3, n5) => {
        const i = {
          geometry: n5.geometry ? true === t3?.keepGeometryType ? n5.geometry : n5.geometry.toJSON() : null,
          attributes: n5.attributes
        };
        return null !== i.geometry && i.geometry.spatialReference && true !== t3?.keepGeometryType && delete i.geometry.spatialReference, s3.push(i), 1;
      }, 0, e2);
      const n4 = this.schema();
      return n4.features = s3, n4.spatialReference = true === t3?.keepGeometryType ? this.spatialReference : this.spatialReference?.toJSON(), n4;
    });
  }
  fieldTimeZone(e2) {
    return this.getFieldsIndex().getTimeZone(e2);
  }
  get preferredTimeZone() {
    return this._parent?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._parent?.dateFieldsTimeZone ?? null;
  }
  get dateFieldsTimeZoneDefaultUTC() {
    if (this.datesInUnknownTimezone) return "unknown";
    const e2 = this.dateFieldsTimeZone ?? "UTC";
    return "" === e2 ? "UTC" : e2;
  }
  get datesInUnknownTimezone() {
    return this._parent.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._parent?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._parent?.timeInfo ?? null;
  }
  set featureSetInfo(e2) {
    this.fsetInfo = e2;
  }
  getFeatureSetInfo() {
    return __async(this, null, function* () {
      return this.fsetInfo ?? (yield this._parent?.getFeatureSetInfo()) ?? null;
    });
  }
};
function v4(e2, t3) {
  if (null !== t3) {
    const s3 = {};
    for (const e3 in t3) s3[e3.toLowerCase()] = t3[e3];
    e2.parameters = s3;
  }
}
x3._featuresetFunctions = {};

// ../../../node_modules/@arcgis/core/arcade/featureset/sources/Empty.js
var u3 = class extends x3 {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new t2([], [], false, null), this._parent = e2.parentfeatureset, this._databaseType = l.Standardised;
  }
  _getSet() {
    return __async(this, null, function* () {
      return this._wset;
    });
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return s2.NotInFeatureSet;
  }
  _getFeature() {
    return __async(this, null, function* () {
      throw new s(r.NeverReach);
    });
  }
  queryAttachments() {
    return __async(this, null, function* () {
      return [];
    });
  }
  _getFeatures() {
    return __async(this, null, function* () {
      return "success";
    });
  }
  _featureFromCache() {
    return null;
  }
  _fetchAndRefineFeatures() {
    return __async(this, null, function* () {
      throw new s(r.NeverReach);
    });
  }
  _getFilteredSet() {
    return __async(this, null, function* () {
      return new t2([], [], false, null);
    });
  }
  _stat(e2, t3, r3, s3, a2, n4, u4) {
    return this._manualStat(e2, t3, n4, u4);
  }
  _canDoAggregates() {
    return __async(this, null, function* () {
      return false;
    });
  }
};

// ../../../node_modules/@arcgis/core/arcade/featureset/actions/SpatialFilter.js
var f5 = class _f extends x3 {
  constructor(e2) {
    super(e2), this._relation = "", this._relationGeom = null, this._relationString = "", this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._relationString = e2.relationString, this._parent = e2.parentfeatureset, this._maxProcessing = 40, this._relation = e2.relation, this._relationGeom = e2.relationGeom;
  }
  _getSet(e2) {
    return __async(this, null, function* () {
      if (null === this._wset) {
        yield this._ensureLoaded();
        const t3 = yield this._parent._getFilteredSet("esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, e2);
        return this._checkCancelled(e2), this._wset = new t2(t3._candidates.slice(0), t3._known.slice(0), t3._ordered, this._clonePageDefinition(t3.pagesDefinition)), this._wset;
      }
      return this._wset;
    });
  }
  _isInFeatureSet(e2) {
    let t3 = this._parent._isInFeatureSet(e2);
    return t3 === s2.NotInFeatureSet ? t3 : (t3 = this._idstates[e2], void 0 === t3 ? s2.Unknown : t3);
  }
  _getFeature(e2, t3, i) {
    return this._parent._getFeature(e2, t3, i);
  }
  _getFeatures(e2, t3, i, r3) {
    return this._parent._getFeatures(e2, t3, i, r3);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  executeSpatialRelationTest(e2) {
    return __async(this, null, function* () {
      if (null === e2.geometry) return false;
      switch (this._relation) {
        case "esriSpatialRelEnvelopeIntersects":
          return h(b(this._relationGeom), b(e2.geometry));
        case "esriSpatialRelIntersects":
          return h(this._relationGeom, e2.geometry);
        case "esriSpatialRelContains":
          return p2(this._relationGeom, e2.geometry);
        case "esriSpatialRelOverlaps":
          return O3(this._relationGeom, e2.geometry);
        case "esriSpatialRelWithin":
          return x(this._relationGeom, e2.geometry);
        case "esriSpatialRelTouches":
          return S2(this._relationGeom, e2.geometry);
        case "esriSpatialRelCrosses":
          return m2(this._relationGeom, e2.geometry);
        case "esriSpatialRelRelation":
          return R(this._relationGeom, e2.geometry, this._relationString ?? "");
      }
    });
  }
  _fetchAndRefineFeatures(e2, t3, i) {
    return __async(this, null, function* () {
      const r3 = new t2([], e2, false, null), s3 = Math.min(t3, e2.length);
      yield this._parent?._getFeatures(r3, -1, s3, i), this._checkCancelled(i);
      const l2 = [];
      for (let n4 = 0; n4 < s3; n4++) {
        const t4 = this._parent._featureFromCache(e2[n4]);
        l2.push(yield this.executeSpatialRelationTest(t4));
      }
      for (let n4 = 0; n4 < t3; n4++) true === l2[n4] ? this._idstates[e2[n4]] = s2.InFeatureSet : this._idstates[e2[n4]] = s2.NotInFeatureSet;
      return "success";
    });
  }
  _getFilteredSet(e2, t3, i, r3, a2) {
    return __async(this, null, function* () {
      yield this._ensureLoaded();
      const s3 = yield this._parent._getFilteredSet("esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, i, r3, a2);
      let l2;
      return this._checkCancelled(a2), l2 = null !== t3 ? new t2(s3._candidates.slice(0).concat(s3._known.slice(0)), [], s3._ordered, this._clonePageDefinition(s3.pagesDefinition)) : new t2(s3._candidates.slice(0), s3._known.slice(0), s3._ordered, this._clonePageDefinition(s3.pagesDefinition)), l2;
    });
  }
  _stat(e2, t3, i, r3, n4, a2, s3) {
    return __async(this, null, function* () {
      if ("" !== i) return {
        calculated: false
      };
      const l2 = yield this._parent._stat(e2, t3, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n4, a2, s3);
      return false === l2.calculated ? null === n4 && "" === i && null === r3 ? this._manualStat(e2, t3, a2, s3) : {
        calculated: false
      } : l2;
    });
  }
  _canDoAggregates(e2, t3, i, r3, n4) {
    return __async(this, null, function* () {
      return "" === i && null === r3 && null !== this._parent && this._parent._canDoAggregates(e2, t3, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n4);
    });
  }
  _getAggregatePagesDataSourceDefinition(e2, r3, n4, a2, s3, l2, o) {
    return __async(this, null, function* () {
      if (null === this._parent) throw new s(r.NeverReach);
      return this._parent._getAggregatePagesDataSourceDefinition(e2, r3, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s3, l2, o);
    });
  }
  static registerAction() {
    x3._featuresetFunctions.intersects = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelIntersects",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.envelopeIntersects = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelEnvelopeIntersects",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.contains = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelContains",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.overlaps = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelOverlaps",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.within = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelWithin",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.touches = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelTouches",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.crosses = function(t3) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelCrosses",
        relationGeom: t3
      });
    }, x3._featuresetFunctions.relate = function(t3, i) {
      return null == t3 ? new u3({
        parentfeatureset: this
      }) : new _f({
        parentfeatureset: this,
        relation: "esriSpatialRelRelation",
        relationGeom: t3,
        relationString: i
      });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

export {
  a,
  t2 as t,
  p3 as p,
  f3 as f,
  m3 as m,
  g2 as g,
  y,
  T2 as T,
  S3 as S,
  E,
  w2 as w,
  A,
  L,
  v2 as v,
  D2 as D,
  F3 as F,
  w3 as w2,
  d2 as d,
  x3 as x,
  u3 as u,
  f5 as f2
};
//# sourceMappingURL=chunk-BKDLCDYW.js.map
