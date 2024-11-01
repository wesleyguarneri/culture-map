import {
  be,
  ce,
  fe,
  ge,
  le,
  ne,
  ue as ue2,
  xe
} from "./chunk-L5ZE2SZ3.js";
import {
  n as n3
} from "./chunk-7XLMHXRT.js";
import "./chunk-75CJCNTJ.js";
import "./chunk-HTPP6S7Z.js";
import "./chunk-ADBLGWRU.js";
import {
  Ke,
  Ne,
  Qe,
  Wt,
  e,
  g,
  n as n2,
  re,
  ue,
  w
} from "./chunk-42T5PSN4.js";
import {
  n
} from "./chunk-4Z5SGKRM.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureMedia/xyChart.js
var u = class _u extends ce {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_ph", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_pw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _makeGraphics(t, e2) {
    return this.makeColumn(e2, t);
  }
  _makeFieldNames() {
    super._makeFieldNames();
    const t = this.get("xAxis"), e2 = this.get("yAxis"), i = "CategoryAxis", s = "ValueAxis";
    t.isType(i) && (this.get("openCategoryXField") || (this._xOpenField = this._xField)), t.isType(s) && (this.get("openValueXField") || (this._xOpenField = this._xField)), e2.isType(i) && (this.get("openCategoryYField") || (this._yOpenField = this._yField)), e2.isType(s) && (this.get("openValueYField") || (this._yOpenField = this._yField));
  }
  _prepareChildren() {
    super._prepareChildren();
    const t = this.get("xAxis"), e2 = this.get("yAxis"), i = this.dataItems.length, s = Math.max(0, this.startIndex() - 2), a = Math.min(this.endIndex() + 2, i - 1);
    if (t.inited && e2.inited) for (let o = s; o <= a; o++) {
      let t2 = this.dataItems[o];
      this._createGraphics(t2);
    }
  }
  _updateChildren() {
    const t = this.chart;
    t && (this._ph = t.plotContainer.height(), this._pw = t.plotContainer.width());
    const e2 = this.get("xAxis"), s = this.get("yAxis"), a = this.get("baseAxis"), o = this.columns.template;
    this.isDirty("fill") && null == o.get("fill") && o.set("fill", this.get("fill")), this.isDirty("stroke") && null == o.get("stroke") && o.set("stroke", this.get("stroke"));
    let n4 = 0, r = 0, h = 0;
    w(a.series, (t2) => {
      if (t2 instanceof _u) {
        const e3 = t2.get("stacked");
        e3 && 0 == h && r++, !e3 && t2.get("clustered") && r++;
      }
      t2 === this && (n4 = r - 1), h++;
    }), this.get("clustered") || (n4 = 0, r = 1), 0 === r && (r = 1, n4 = 0);
    const l = e2.get("renderer"), g2 = s.get("renderer"), d = "cellStartLocation", c = "cellEndLocation", m = l.get(d, 0), p = l.get(c, 1), x2 = g2.get(d, 0), _2 = g2.get(c, 1);
    if (this._aLocationX0 = m + n4 / r * (p - m), this._aLocationX1 = m + (n4 + 1) / r * (p - m), this._aLocationY0 = x2 + n4 / r * (_2 - x2), this._aLocationY1 = x2 + (n4 + 1) / r * (_2 - x2), e2.inited && s.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty) {
        const t2 = this.dataItems.length;
        let e3 = Math.max(0, this.startIndex() - 2), i = Math.min(this.endIndex() + 2, t2 - 1);
        for (let a2 = 0; a2 < e3; a2++) this._toggleColumn(this.dataItems[a2], false);
        let s2 = this.dataItems[e3];
        for (let a2 = e3; a2 <= i; a2++) {
          let t3 = this.dataItems[a2];
          if (null != t3.get("valueX") && null != t3.get("valueY")) {
            if (s2 = t3, a2 > 0 && e3 > 0) for (let t4 = a2 - 1; t4 >= 0; t4--) {
              let e4 = this.dataItems[t4];
              if (null != e4.get("valueX") && null != e4.get("valueY")) {
                s2 = e4;
                break;
              }
            }
            break;
          }
          this._toggleColumn(t3, false);
        }
        for (let a2 = e3; a2 <= i; a2++) {
          let t3 = this.dataItems[a2];
          this._updateGraphics(t3, s2), null != t3.get("valueX") && null != t3.get("valueY") && (s2 = t3);
        }
        for (let a2 = i + 1; a2 < t2; a2++) this._toggleColumn(this.dataItems[a2], false);
      }
    } else this._skipped = true;
    this.updateLegendMarker(this.get("tooltipDataItem")), super._updateChildren();
  }
  _createGraphics(t) {
    let e2 = t.get("graphics");
    if (!e2) {
      e2 = this._makeGraphics(this.columns, t), t.set("graphics", e2), e2._setDataItem(t);
      const a = t.get("legendDataItem");
      if (a) {
        const t2 = a.get("markerRectangle");
        if (t2) {
          const a2 = t2.states.lookup("default");
          w(Ke, (i) => {
            const s = e2.get(i, this.get(i));
            t2.set(i, s), a2.set(i, s);
          });
        }
      }
      let o = t.get("rangeGraphics");
      o && w(o, (t2) => {
        t2.dispose();
      }), o = [], t.setRaw("rangeGraphics", o), this.axisRanges.each((e3) => {
        const i = e3.container, s = this._makeGraphics(e3.columns, t);
        o && o.push(s), s.setPrivate("list", e3.columns), i.children.push(s);
      });
    }
  }
  createAxisRange(t) {
    return w(this.dataItems, (t2) => {
      const e2 = t2.get("graphics");
      e2 && (e2.dispose(), t2.set("graphics", void 0));
    }), super.createAxisRange(t);
  }
  _updateGraphics(t, e2) {
    let s = t.get("graphics");
    const a = this._xField, r = this._yField, h = t.get(a), l = t.get(r);
    if (null != h && null != l) {
      const h2 = this._xOpenField, l2 = this._yOpenField, g2 = this.get("locationX", t.get("locationX", 0.5)), d = this.get("locationY", t.get("locationY", 0.5)), c = this.get("openLocationX", t.get("openLocationX", g2)), m = this.get("openLocationY", t.get("openLocationY", d)), p = s.get("width"), u2 = s.get("height"), x2 = this.get("stacked"), _2 = this.get("xAxis"), I = this.get("yAxis"), f = this.get("baseAxis"), y = _2.get("start"), P = _2.get("end"), b = I.get("start"), v = I.get("end");
      let D, T, C, w2, A = this.get("vcy", 1), k = this.get("vcx", 1), F = false, M = false;
      if (I.isType("CategoryAxis") && _2.isType("CategoryAxis")) {
        let e3 = this._aLocationX0 + c - 0.5, i = this._aLocationX1 + g2 - 0.5;
        if (p instanceof e) {
          let t2 = (i - e3) * (1 - p.value) / 2;
          e3 += t2, i -= t2;
        }
        if (D = _2.getDataItemPositionX(t, h2, e3, k), T = _2.getDataItemPositionX(t, a, i, k), e3 = this._aLocationY0 + m - 0.5, i = this._aLocationY1 + d - 0.5, u2 instanceof e) {
          let t2 = (i - e3) * (1 - u2.value) / 2;
          e3 += t2, i -= t2;
        }
        C = I.getDataItemPositionY(t, l2, e3, A), w2 = I.getDataItemPositionY(t, r, i, A), t.setRaw("point", {
          x: D + (T - D) / 2,
          y: C + (w2 - C) / 2
        });
      } else if (_2 === f) {
        let e3 = this._aLocationX0 + c - 0.5, i = this._aLocationX1 + g2 - 0.5;
        if (p instanceof e) {
          let t2 = (i - e3) * (1 - p.value) / 2;
          e3 += t2, i -= t2;
        }
        if (D = _2.getDataItemPositionX(t, h2, e3, k), T = _2.getDataItemPositionX(t, a, i, k), C = I.getDataItemPositionY(t, r, d, A), this._yOpenField !== this._yField) w2 = I.getDataItemPositionY(t, l2, m, A);
        else if (x2) {
          let e4 = t.get("stackToItemY");
          w2 = e4 ? I.getDataItemPositionY(e4, r, m, e4.component.get("vcy")) : I.basePosition();
        } else w2 = I.basePosition();
        t.setRaw("point", {
          x: D + (T - D) / 2,
          y: C
        }), M = true;
      } else if (I === f) {
        let e3 = this._aLocationY0 + m - 0.5, i = this._aLocationY1 + d - 0.5;
        if (u2 instanceof e) {
          let t2 = (i - e3) * (1 - u2.value) / 2;
          e3 += t2, i -= t2;
        }
        if (C = I.getDataItemPositionY(t, l2, e3, A), w2 = I.getDataItemPositionY(t, r, i, A), T = _2.getDataItemPositionX(t, a, g2, k), this._xOpenField !== this._xField) D = _2.getDataItemPositionX(t, h2, c, k);
        else if (x2) {
          let e4 = t.get("stackToItemX");
          D = e4 ? _2.getDataItemPositionX(e4, a, c, e4.component.get("vcx")) : _2.basePosition();
        } else D = _2.basePosition();
        F = true, t.setRaw("point", {
          x: T,
          y: C + (w2 - C) / 2
        });
      }
      this._updateSeriesGraphics(t, s, D, T, C, w2, F, M), D < y && T < y || D > P && T > P || C < b && w2 <= b || C >= v && w2 > v || n2(D) || n2(C) ? this._toggleColumn(t, false) : this._toggleColumn(t, true);
      let X = t.get("rangeGraphics");
      X && w(X, (e3) => {
        this._updateSeriesGraphics(t, e3, D, T, C, w2, F, M);
      }), this._applyGraphicsStates(t, e2);
    }
  }
  _updateSeriesGraphics(t, e2, i, s, a, o, n4, h) {
    const l = e2.get("width"), g2 = e2.get("height"), d = e2.get("maxWidth"), c = e2.get("maxHeight"), m = this.getPoint(i, a), p = this.getPoint(s, o), u2 = t.get("point");
    if (u2) {
      const t2 = this.getPoint(u2.x, u2.y);
      u2.x = t2.x + this._x, u2.y = t2.y + this._y;
    }
    if (i = m.x, s = p.x, a = m.y, o = p.y, g(l)) {
      const t2 = (s - i - l) / 2;
      i += t2, s -= t2;
    }
    if (g(d) && d < Math.abs(s - i)) {
      const t2 = (s - i - d) / 2;
      i += t2, s -= t2;
    }
    if (g(g2)) {
      const t2 = (o - a - g2) / 2;
      a += t2, o -= t2;
    }
    if (g(c) && c < Math.abs(o - a)) {
      const t2 = (o - a - c) / 2;
      a += t2, o -= t2;
    }
    this.get("adjustBulletPosition") && (n4 && (s = Math.min(Math.max(0, s), this._pw), i = Math.min(Math.max(0, i), this._pw)), h && (a = Math.min(Math.max(0, a), this._ph), o = Math.min(Math.max(0, o), this._ph))), t.setRaw("left", i), t.setRaw("right", s), t.setRaw("top", a), t.setRaw("bottom", o), e2.setPrivate("width", s - i), e2.setPrivate("height", o - a), e2.set("x", i), e2.set("y", o - (o - a));
  }
  _handleDataSetChange() {
    super._handleDataSetChange(), w(this._dataItems, (t) => {
      this._toggleColumn(t, false);
    });
  }
  _applyGraphicsStates(t, e2) {
    const i = t.get("graphics"), s = i.states.lookup("dropFromOpen"), a = i.states.lookup("riseFromOpen"), o = i.states.lookup("dropFromPrevious"), n4 = i.states.lookup("riseFromPrevious");
    if (s || o || a || n4) {
      const i2 = this.get("xAxis"), h = this.get("yAxis"), l = this.get("baseAxis");
      let g2, d, c;
      l === i2 && h.isType("ValueAxis") ? (g2 = t.get(this._yOpenField), d = t.get(this._yField), c = e2.get(this._yField)) : l === h && i2.isType("ValueAxis") && (g2 = t.get(this._xOpenField), d = t.get(this._xField), c = e2.get(this._xField)), g(g2) && g(d) && (d < g2 ? s && s.apply() : a && a.apply(), g(c) && (d < c ? o && o.apply() : n4 && n4.apply()));
    }
  }
  disposeDataItem(t) {
    super.disposeDataItem(t);
    const e2 = t.get("graphics");
    e2 && (this.columns.removeValue(e2), e2.dispose());
    const s = t.get("rangeGraphics");
    s && w(s, (t2) => {
      const e3 = t2.getPrivate("list");
      e3 && e3.removeValue(t2), t2.dispose();
    });
  }
  hideDataItem(t, e2) {
    const s = Object.create(null, {
      hideDataItem: {
        get: () => super.hideDataItem
      }
    });
    return n(this, void 0, void 0, function* () {
      const a = [s.hideDataItem.call(this, t, e2)], o = t.get("graphics");
      o && a.push(o.hide(e2));
      const n4 = t.get("rangeGraphics");
      n4 && w(n4, (t2) => {
        a.push(t2.hide(e2));
      }), yield Promise.all(a);
    });
  }
  _toggleColumn(t, e2) {
    const s = t.get("graphics");
    s && s.setPrivate("visible", e2);
    const a = t.get("rangeGraphics");
    a && w(a, (t2) => {
      t2.setPrivate("visible", e2);
    });
    const o = t.bullets;
    o && w(o, (t2) => {
      t2.setPrivate("hidden", !e2);
    });
  }
  showDataItem(t, e2) {
    const s = Object.create(null, {
      showDataItem: {
        get: () => super.showDataItem
      }
    });
    return n(this, void 0, void 0, function* () {
      const a = [s.showDataItem.call(this, t, e2)], o = t.get("graphics");
      o && a.push(o.show(e2));
      const n4 = t.get("rangeGraphics");
      n4 && w(n4, (t2) => {
        a.push(t2.show(e2));
      }), yield Promise.all(a);
    });
  }
  updateLegendMarker(t) {
    let e2 = this.get("legendDataItem");
    if (this.get("useLastColorForLegendMarker") && !t) {
      const e3 = this.dataItems[this.endIndex() - 1];
      e3 && (t = e3);
    }
    if (e2) {
      let a = this.columns.template;
      if (t) {
        let e3 = t.get("graphics");
        e3 && (a = e3);
      }
      const o = e2.get("markerRectangle");
      if (o && !e2.get("itemContainer").get("disabled")) {
        const t2 = o.states.lookup("default");
        w(Ke, (e3) => {
          const i = a.get(e3, this.get(e3));
          o.set(e3, i), t2.set(e3, i);
        });
      }
    }
  }
  _getTooltipTarget(t) {
    if ("bullet" == this.get("seriesTooltipTarget")) return super._getTooltipTarget(t);
    let e2 = t.get("graphics");
    return e2 || this;
  }
};
Object.defineProperty(u, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BaseColumnSeries"
}), Object.defineProperty(u, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ce.classNames.concat([u.className])
});
var x = class _x extends ue2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    }), Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = Wt(this._settings.themeTags, ["axis"]), this.fields.push("category"), this.setPrivateRaw("name", "category"), this.addTag("category"), super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const t = this.dataItems.length;
    let e2 = 0;
    this._valuesDirty && (this._itemMap = {}, w(this.dataItems, (t2) => {
      t2.setRaw("index", e2), this._itemMap[t2.get("category")] = t2, e2++;
    }), this.setPrivateRaw("maxZoomFactor", t)), this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * t), 0)), this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * t), t)), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && this.dataItems.length > 0 && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges());
  }
  _handleRangeChange() {
    w(this.series, (t) => {
      let e2 = this.dataItems[this.startIndex()].get("category"), s = this.dataItems[this.endIndex() - 1].get("category"), a = t.get("baseAxis"), o = t.get("xAxis"), n4 = t.get("yAxis");
      if (o instanceof _x && n4 instanceof _x) t._markDirtyAxes();
      else if (a === this) {
        let r, h, l = n4;
        if (o === a ? (t.get("categoryXField") && (r = "categoryX"), t.get("openCategoryXField") && (h = "openCategoryX")) : n4 === a && (t.get("categoryYField") && (r = "categoryY"), t.get("openCategoryYField") && (h = "openCategoryY"), l = o), "ValueAxis" == l.className && (r || h)) {
          let a2, o2;
          for (let i = 0, s2 = t.dataItems.length; i < s2; i++) {
            let s3 = t.dataItems[i];
            if (r && s3.get(r) === e2) {
              a2 = s3;
              break;
            }
            if (h && s3.get(h) === e2) {
              a2 = s3;
              break;
            }
          }
          for (let e3 = t.dataItems.length - 1; e3 >= 0; e3--) {
            let i = t.dataItems[e3];
            if (r && i.get(r) === s) {
              o2 = i;
              break;
            }
            if (h && i.get(h) === s) {
              o2 = i;
              break;
            }
          }
          let n5 = 0, l2 = t.dataItems.length;
          a2 && (n5 = t.dataItems.indexOf(a2)), o2 && (l2 = t.dataItems.indexOf(o2) + 1), t.setPrivate("startIndex", n5), t.setPrivate("endIndex", l2);
          let g2 = false;
          for (let e3 = n5; e3 < l2; e3++) {
            const s2 = t.dataItems[e3];
            if (w(t.__valueXShowFields, (t2) => {
              null != s2.get(t2) && (g2 = true);
            }), w(t.__valueYShowFields, (t2) => {
              null != s2.get(t2) && (g2 = true);
            }), g2) break;
          }
          t.setPrivate("outOfSelection", !g2);
        }
        t._markDirtyAxes();
      }
    });
  }
  _prepareAxisItems() {
    var t;
    const e2 = this.get("renderer"), i = this.dataItems.length;
    let s = this.startIndex();
    s > 0 && s--;
    let a = this.endIndex();
    a < i && a++;
    const o = e2.get("minorLabelsEnabled"), n4 = e2.get("minorGridEnabled", o);
    let r = e2.axisLength() / Math.max(e2.get("minGridDistance"), 1), h = Math.max(1, Math.min(i, Math.ceil((a - s) / r)));
    s = Math.floor(s / h) * h, this._frequency = h;
    for (let g2 = 0; g2 < i; g2++) this._toggleDataItem(this.dataItems[g2], false);
    let l = this.dataItems[s].get("index", 0);
    for (let g2 = s; g2 < a; g2 += h) {
      let t2 = this.dataItems[g2];
      this._createAssets(t2, []), this._toggleDataItem(t2, true);
      let e3 = h;
      n4 && (e3 = 1), this._prepareDataItem(t2, l, e3), l++;
    }
    if (e2.get("minorGridEnabled")) for (let g2 = s; g2 < a; g2++) {
      let e3 = this.dataItems[g2];
      g2 % h != 0 && (this._createAssets(e3, ["minor"], true), this._toggleDataItem(e3, true), this._prepareDataItem(e3, 0, 1), o || null === (t = e3.get("label")) || void 0 === t || t.setPrivate("visible", false));
    }
    this._updateGhost();
  }
  _prepareDataItem(t, e2, i) {
    let s = this.get("renderer"), a = t.get("categoryLocation", 0), o = t.get("endCategoryLocation", 1), n4 = t.get("index");
    g(n4) || (n4 = this.categoryToIndex(t.get("category")));
    let h, l = this.indexToPosition(n4, a), g2 = t.get("endCategory");
    g2 ? (h = this.categoryToIndex(g2), g(h) || (h = n4)) : h = n4;
    let d, c, m = this.indexToPosition(h, o);
    d = t.get("isRange") ? h : n4 + this._frequency - 1, c = this.indexToPosition(d, o), s.updateLabel(t.get("label"), l, m, i), s.updateGrid(t.get("grid"), l, m), s.updateTick(t.get("tick"), l, m, i), s.updateFill(t.get("axisFill"), l, c), this._processBullet(t), s.updateBullet(t.get("bullet"), l, m);
    const p = this.get("fillRule");
    p && p(t, e2);
  }
  startIndex() {
    let t = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), t - 1);
  }
  endIndex() {
    let t = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", t), t));
  }
  baseValue() {
  }
  basePosition() {
    return 0;
  }
  getX(t) {
    let e2 = this._itemMap[t];
    return e2 ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e2.get("index", 0))) : NaN;
  }
  getY(t) {
    let e2 = this._itemMap[t];
    return e2 ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e2.get("index", 0))) : NaN;
  }
  getDataItemPositionX(t, e2, i, s) {
    const a = t.get(e2), o = this._itemMap[a];
    return o ? this.indexToPosition(o.get("index", 0), i) : NaN;
  }
  getDataItemCoordinateX(t, e2, i, s) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t, e2, i, s));
  }
  getDataItemPositionY(t, e2, i, s) {
    const a = t.get(e2), o = this._itemMap[a];
    return o ? this.indexToPosition(o.get("index", 0), i) : NaN;
  }
  getDataItemCoordinateY(t, e2, i, s) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t, e2, i, s));
  }
  indexToPosition(t, e2) {
    g(e2) || (e2 = 0.5);
    let i = this.dataItems.length, s = this.get("startLocation", 0);
    i -= s, i -= 1 - this.get("endLocation", 1);
    let a = (t + e2 - s) / i, o = this.dataItems[t];
    return o && (a += o.get("deltaPosition", 0)), a;
  }
  categoryToIndex(t) {
    let e2 = this._itemMap[t];
    return e2 ? e2.get("index") : NaN;
  }
  dataItemToPosition(t) {
    return this.indexToPosition(t.get("index"));
  }
  roundAxisPosition(t, e2) {
    return t += (0.5 - e2) / this.dataItems.length, this.indexToPosition(this.axisPositionToIndex(t), e2);
  }
  axisPositionToIndex(t) {
    let e2 = this.dataItems.length;
    return ue(Math.floor(t * e2), 0, e2 - 1);
  }
  getTooltipText(t, e2) {
    const i = this.dataItems[this.axisPositionToIndex(t)];
    if (i) {
      const t2 = i.get("label");
      if (t2) return Qe(t2, this.get("tooltipText", ""));
    }
  }
  _updateTooltipText(t, e2) {
    t._setDataItem(this.dataItems[this.axisPositionToIndex(e2)]), t.label.text.markDirtyText();
  }
  getSeriesItem(t, e2) {
    if (this.dataItems.length > 0) {
      let i = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), s = this.axisPositionToIndex(e2), a = t.dataItems[s], o = this.dataItems[s], n4 = o.get("category");
      if (a && o && a.get(i) === n4) return a;
      for (let e3 = 0, r = t.dataItems.length; e3 < r; e3++) {
        let s2 = t.dataItems[e3];
        if (s2.get(i) === n4) return s2;
      }
    }
  }
  zoomToIndexes(t, e2, i) {
    let s = this.dataItems.length;
    this.zoom(t / s, e2 / s, i);
  }
  zoomToCategories(t, e2, i) {
    this.zoomToIndexes(this.categoryToIndex(t), this.categoryToIndex(e2) + 1, i);
  }
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
  }
  nextPosition(t) {
    null == t && (t = 1), "Y" == this.get("renderer").getPrivate("letter") && (t *= -1);
    const e2 = this.getPrivate("tooltipPosition", 0), i = ue(this.axisPositionToIndex(e2) + t, 0, this.dataItems.length - 1);
    return this.toGlobalPosition(this.indexToPosition(i));
  }
};
Object.defineProperty(x, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryAxis"
}), Object.defineProperty(x, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ue2.classNames.concat([x.className])
});
var _ = class extends u {
  constructor() {
    super(...arguments), Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new re(Ne.new({}), () => n3._new(this._root, {
        position: "absolute",
        themeTags: Wt(this.columns.template.get("themeTags", []), ["series", "column"])
      }, [this.columns.template]))
    });
  }
  makeColumn(t, e2) {
    const i = this.mainContainer.children.push(e2.make());
    return i._setDataItem(t), e2.push(i), i;
  }
  _processAxisRange(t) {
    super._processAxisRange(t), t.columns = new re(Ne.new({}), () => n3._new(this._root, {
      position: "absolute",
      themeTags: Wt(t.columns.template.get("themeTags", []), ["series", "column"])
    }, [this.columns.template, t.columns.template]));
  }
};
Object.defineProperty(_, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColumnSeries"
}), Object.defineProperty(_, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: u.classNames.concat([_.className])
});
export {
  be as AxisRendererXAm5,
  xe as AxisRendererYAm5,
  x as CategoryAxisAm5,
  _ as ColumnSeriesAm5,
  fe as LineSeriesAm5,
  ge as ValueAxisAm5,
  ne as XYChartAm5,
  le as XYCursorAm5
};
//# sourceMappingURL=xyChart-KFWXJBN5.js.map
