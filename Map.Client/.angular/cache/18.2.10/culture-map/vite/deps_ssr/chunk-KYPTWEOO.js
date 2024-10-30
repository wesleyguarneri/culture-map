import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a3,
  c,
  p
} from "./chunk-WVFB3H4O.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  Xe,
  b,
  h2 as h
} from "./chunk-I2TVVMQ6.js";
import {
  Y
} from "./chunk-2JI245BP.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  i as i2,
  n as n2
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S as S2
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  T,
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  S
} from "./chunk-AIZ3T7E3.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/popup/ExpressionInfo.js
var s2;
var p2 = s2 = class extends f {
  constructor(r2) {
    super(r2), this.name = null, this.title = null, this.expression = null, this.returnType = null;
  }
  clone() {
    return new s2({
      name: this.name,
      title: this.title,
      expression: this.expression,
      returnType: this.returnType
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "name", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "title", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "expression", void 0), e([y({
  type: ["string", "number"],
  json: {
    write: true
  }
})], p2.prototype, "returnType", void 0), p2 = s2 = e([a2("esri.popup.ExpressionInfo")], p2);
var i3 = p2;

// ../../../node_modules/@arcgis/core/popup/content/Content.js
var e2 = class extends f {
  constructor(o3) {
    super(o3), this.type = null;
  }
};
e([y({
  type: ["attachments", "custom", "fields", "media", "text", "expression", "relationship"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], e2.prototype, "type", void 0), e2 = e([a2("esri.popup.content.Content")], e2);
var p3 = e2;

// ../../../node_modules/@arcgis/core/popup/content/AttachmentsContent.js
var s3;
var p4 = s3 = class extends p3 {
  constructor(t2) {
    super(t2), this.description = null, this.displayType = "auto", this.title = null, this.type = "attachments";
  }
  clone() {
    return new s3({
      description: this.description,
      displayType: this.displayType,
      title: this.title
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p4.prototype, "description", void 0), e([y({
  type: ["auto", "preview", "list"],
  json: {
    write: true
  }
})], p4.prototype, "displayType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p4.prototype, "title", void 0), e([y({
  type: ["attachments"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], p4.prototype, "type", void 0), p4 = s3 = e([a2("esri.popup.content.AttachmentsContent")], p4);
var i4 = p4;

// ../../../node_modules/@arcgis/core/popup/content/CustomContent.js
var p5;
var i5 = p5 = class extends p3 {
  constructor(o3) {
    super(o3), this.creator = null, this.destroyer = null, this.outFields = null, this.type = "custom";
  }
  clone() {
    return new p5({
      creator: this.creator,
      destroyer: this.destroyer,
      outFields: Array.isArray(this.outFields) ? a(this.outFields) : null
    });
  }
};
e([y()], i5.prototype, "creator", void 0), e([y()], i5.prototype, "destroyer", void 0), e([y()], i5.prototype, "outFields", void 0), e([y({
  type: ["custom"],
  readOnly: true
})], i5.prototype, "type", void 0), i5 = p5 = e([a2("esri.popup.content.CustomContent")], i5);
var c2 = i5;

// ../../../node_modules/@arcgis/core/popup/ElementExpressionInfo.js
var s4;
var p6 = s4 = class extends f {
  constructor(r2) {
    super(r2), this.title = null, this.expression = null, this.returnType = "dictionary";
  }
  clone() {
    return new s4({
      title: this.title,
      expression: this.expression
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "title", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p6.prototype, "expression", void 0), e([y({
  type: ["dictionary"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], p6.prototype, "returnType", void 0), p6 = s4 = e([a2("esri.popup.ElementExpressionInfo")], p6);
var i6 = p6;

// ../../../node_modules/@arcgis/core/popup/content/ExpressionContent.js
var p7;
var n3 = p7 = class extends p3 {
  constructor(o3) {
    super(o3), this.expressionInfo = null, this.type = "expression";
  }
  clone() {
    return new p7({
      expressionInfo: this.expressionInfo?.clone()
    });
  }
};
e([y({
  type: i6,
  json: {
    write: true
  }
})], n3.prototype, "expressionInfo", void 0), e([y({
  type: ["expression"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], n3.prototype, "type", void 0), n3 = p7 = e([a2("esri.popup.content.ExpressionContent")], n3);
var i7 = n3;

// ../../../node_modules/@arcgis/core/popup/support/FieldInfoFormat.js
var i8 = class extends i(f) {
  constructor(o3) {
    super(o3), this.dateFormat = null, this.digitSeparator = false, this.places = null;
  }
};
e([o2(Y)], i8.prototype, "dateFormat", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], i8.prototype, "digitSeparator", void 0), e([y({
  type: N,
  json: {
    write: true
  }
})], i8.prototype, "places", void 0), i8 = e([a2("esri.popup.support.FieldInfoFormat")], i8);
var m = i8;

// ../../../node_modules/@arcgis/core/popup/FieldInfo.js
var a4;
var l = a4 = class extends f {
  constructor(t2) {
    super(t2), this.fieldName = null, this.format = void 0, this.isEditable = true, this.label = null, this.stringFieldOption = "text-box", this.statisticType = null, this.tooltip = null, this.visible = true;
  }
  clone() {
    return new a4({
      fieldName: this.fieldName,
      format: this.format?.clone(),
      isEditable: this.isEditable,
      label: this.label,
      stringFieldOption: this.stringFieldOption,
      statisticType: this.statisticType,
      tooltip: this.tooltip,
      visible: this.visible
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "fieldName", void 0), e([y({
  type: m,
  json: {
    write: true
  }
})], l.prototype, "format", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      alwaysWriteDefaults: true
    },
    default: true
  }
})], l.prototype, "isEditable", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "label", void 0), e([o2(new n2({
  richtext: "rich-text",
  textarea: "text-area",
  textbox: "text-box"
}), {
  default: "text-box"
})], l.prototype, "stringFieldOption", void 0), e([y({
  type: ["count", "sum", "min", "max", "avg", "stddev", "var"],
  json: {
    write: true
  }
})], l.prototype, "statisticType", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "tooltip", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], l.prototype, "visible", void 0), l = a4 = e([a2("esri.popup.FieldInfo")], l);
var n4 = l;

// ../../../node_modules/@arcgis/core/popup/content/FieldsContent.js
var n5;
var l2 = n5 = class extends p3 {
  constructor(t2) {
    super(t2), this.attributes = null, this.description = null, this.fieldInfos = null, this.title = null, this.type = "fields";
  }
  writeFieldInfos(t2, o3) {
    o3.fieldInfos = t2 && t2.map((t3) => t3.toJSON());
  }
  clone() {
    return new n5(a({
      attributes: this.attributes,
      description: this.description,
      fieldInfos: this.fieldInfos,
      title: this.title
    }));
  }
};
e([y({
  type: Object,
  json: {
    write: true
  }
})], l2.prototype, "attributes", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l2.prototype, "description", void 0), e([y({
  type: [n4]
})], l2.prototype, "fieldInfos", void 0), e([r("fieldInfos")], l2.prototype, "writeFieldInfos", null), e([y({
  type: String,
  json: {
    write: true
  }
})], l2.prototype, "title", void 0), e([y({
  type: ["fields"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], l2.prototype, "type", void 0), l2 = n5 = e([a2("esri.popup.content.FieldsContent")], l2);
var c3 = l2;

// ../../../node_modules/@arcgis/core/popup/content/mixins/MediaInfo.js
var s5 = class extends f {
  constructor(t2) {
    super(t2), this.altText = null, this.caption = "", this.title = "", this.type = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], s5.prototype, "altText", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s5.prototype, "caption", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], s5.prototype, "title", void 0), e([y({
  type: ["image", "bar-chart", "column-chart", "line-chart", "pie-chart"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], s5.prototype, "type", void 0), s5 = e([a2("esri.popup.content.mixins.MediaInfo")], s5);
var p8 = s5;

// ../../../node_modules/@arcgis/core/popup/content/support/ChartMediaInfoValueSeries.js
var s6;
var l3 = s6 = class extends S2 {
  constructor(o3) {
    super(o3), this.color = null, this.fieldName = null, this.tooltip = null, this.value = null;
  }
  clone() {
    return new s6({
      color: this.color?.clone(),
      fieldName: this.fieldName,
      tooltip: this.tooltip,
      value: this.value
    });
  }
};
e([y()], l3.prototype, "color", void 0), e([y()], l3.prototype, "fieldName", void 0), e([y()], l3.prototype, "tooltip", void 0), e([y()], l3.prototype, "value", void 0), l3 = s6 = e([a2("esri.popup.content.support.ChartMediaInfoValueSeries")], l3);
var p9 = l3;

// ../../../node_modules/@arcgis/core/popup/content/support/ChartMediaInfoValue.js
var n6;
var c4 = n6 = class extends f {
  constructor(o3) {
    super(o3), this.colors = null, this.fields = [], this.normalizeField = null, this.series = [], this.tooltipField = null;
  }
  clone() {
    return new n6({
      colors: a(this.colors),
      fields: a(this.fields),
      normalizeField: this.normalizeField,
      series: a(this.series),
      tooltipField: this.tooltipField
    });
  }
};
e([y({
  type: [u],
  json: {
    type: [[N]],
    write: true
  }
})], c4.prototype, "colors", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], c4.prototype, "fields", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c4.prototype, "normalizeField", void 0), e([y({
  type: [p9],
  json: {
    read: false
  }
})], c4.prototype, "series", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c4.prototype, "tooltipField", void 0), c4 = n6 = e([a2("esri.popup.content.support.ChartMediaInfoValue")], c4);
var d = c4;

// ../../../node_modules/@arcgis/core/popup/content/mixins/ChartMediaInfo.js
var p10 = class extends p8 {
  constructor(o3) {
    super(o3), this.type = null, this.value = void 0;
  }
};
e([y({
  type: ["bar-chart", "column-chart", "line-chart", "pie-chart"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], p10.prototype, "type", void 0), e([y({
  type: d,
  json: {
    write: true
  }
})], p10.prototype, "value", void 0), p10 = e([a2("esri.popup.content.mixins.ChartMediaInfo")], p10);
var a5 = p10;

// ../../../node_modules/@arcgis/core/popup/content/support/chartMediaInfoUtils.js
var c5 = i2()({
  barchart: "bar-chart",
  columnchart: "column-chart",
  linechart: "line-chart",
  piechart: "pie-chart"
});

// ../../../node_modules/@arcgis/core/popup/content/BarChartMediaInfo.js
var a6;
var p11 = a6 = class extends a5 {
  constructor(t2) {
    super(t2), this.type = "bar-chart";
  }
  clone() {
    return new a6({
      altText: this.altText,
      title: this.title,
      caption: this.caption,
      value: this.value?.clone()
    });
  }
};
e([y({
  type: ["bar-chart"],
  readOnly: true,
  json: {
    type: ["barchart"],
    read: false,
    write: c5.write
  }
})], p11.prototype, "type", void 0), p11 = a6 = e([a2("esri.popup.content.BarChartMediaInfo")], p11);
var i9 = p11;

// ../../../node_modules/@arcgis/core/popup/content/ColumnChartMediaInfo.js
var a7;
var c6 = a7 = class extends a5 {
  constructor(t2) {
    super(t2), this.type = "column-chart";
  }
  clone() {
    return new a7({
      altText: this.altText,
      title: this.title,
      caption: this.caption,
      value: this.value?.clone()
    });
  }
};
e([y({
  type: ["column-chart"],
  readOnly: true,
  json: {
    type: ["columnchart"],
    read: false,
    write: c5.write
  }
})], c6.prototype, "type", void 0), c6 = a7 = e([a2("esri.popup.content.ColumnChartMediaInfo")], c6);
var p12 = c6;

// ../../../node_modules/@arcgis/core/popup/content/support/ImageMediaInfoValue.js
var e3;
var p13 = e3 = class extends f {
  constructor(o3) {
    super(o3), this.linkURL = null, this.sourceURL = null;
  }
  clone() {
    return new e3({
      linkURL: this.linkURL,
      sourceURL: this.sourceURL
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p13.prototype, "linkURL", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p13.prototype, "sourceURL", void 0), p13 = e3 = e([a2("esri.popup.content.support.ImageMediaInfoValue")], p13);
var c7 = p13;

// ../../../node_modules/@arcgis/core/popup/content/ImageMediaInfo.js
var i10;
var a8 = i10 = class extends p8 {
  constructor(e5) {
    super(e5), this.refreshInterval = 0, this.type = "image", this.value = void 0;
  }
  clone() {
    return new i10({
      altText: this.altText,
      title: this.title,
      caption: this.caption,
      refreshInterval: this.refreshInterval,
      value: this.value?.clone()
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], a8.prototype, "refreshInterval", void 0), e([y({
  type: ["image"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], a8.prototype, "type", void 0), e([y({
  type: c7,
  json: {
    write: true
  }
})], a8.prototype, "value", void 0), a8 = i10 = e([a2("esri.popup.content.ImageMediaInfo")], a8);
var p14 = a8;

// ../../../node_modules/@arcgis/core/popup/content/LineChartMediaInfo.js
var i11;
var a9 = i11 = class extends a5 {
  constructor(t2) {
    super(t2), this.type = "line-chart";
  }
  clone() {
    return new i11({
      altText: this.altText,
      title: this.title,
      caption: this.caption,
      value: this.value?.clone()
    });
  }
};
e([y({
  type: ["line-chart"],
  readOnly: true,
  json: {
    type: ["linechart"],
    read: false,
    write: c5.write
  }
})], a9.prototype, "type", void 0), a9 = i11 = e([a2("esri.popup.content.LineChartMediaInfo")], a9);
var p15 = a9;

// ../../../node_modules/@arcgis/core/popup/content/PieChartMediaInfo.js
var i12;
var p16 = i12 = class extends a5 {
  constructor(t2) {
    super(t2), this.type = "pie-chart";
  }
  clone() {
    return new i12({
      altText: this.altText,
      title: this.title,
      caption: this.caption,
      value: this.value?.clone()
    });
  }
};
e([y({
  type: ["pie-chart"],
  readOnly: true,
  json: {
    type: ["piechart"],
    read: false,
    write: c5.write
  }
})], p16.prototype, "type", void 0), p16 = i12 = e([a2("esri.popup.content.PieChartMediaInfo")], p16);
var a10 = p16;

// ../../../node_modules/@arcgis/core/popup/content/support/mediaInfoTypes.js
var m2 = {
  base: p8,
  key: "type",
  defaultKeyValue: "image",
  typeMap: {
    "bar-chart": i9,
    "column-chart": p12,
    "line-chart": p15,
    "pie-chart": a10,
    image: p14
  }
};

// ../../../node_modules/@arcgis/core/popup/content/MediaContent.js
var l4;
var u2 = l4 = class extends p3 {
  constructor(t2) {
    super(t2), this.activeMediaInfoIndex = null, this.attributes = null, this.description = null, this.mediaInfos = null, this.title = null, this.type = "media";
  }
  readMediaInfos(t2) {
    return t2 && t2.map((t3) => "image" === t3.type ? p14.fromJSON(t3) : "barchart" === t3.type ? i9.fromJSON(t3) : "columnchart" === t3.type ? p12.fromJSON(t3) : "linechart" === t3.type ? p15.fromJSON(t3) : "piechart" === t3.type ? a10.fromJSON(t3) : void 0).filter(Boolean);
  }
  writeMediaInfos(t2, o3) {
    o3.mediaInfos = t2 && t2.map((t3) => t3.toJSON());
  }
  clone() {
    return new l4(a({
      activeMediaInfoIndex: this.activeMediaInfoIndex,
      attributes: this.attributes,
      description: this.description,
      mediaInfos: this.mediaInfos,
      title: this.title
    }));
  }
};
e([y()], u2.prototype, "activeMediaInfoIndex", void 0), e([y({
  type: Object,
  json: {
    write: true
  }
})], u2.prototype, "attributes", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "description", void 0), e([y({
  types: [m2]
})], u2.prototype, "mediaInfos", void 0), e([o("mediaInfos")], u2.prototype, "readMediaInfos", null), e([r("mediaInfos")], u2.prototype, "writeMediaInfos", null), e([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "title", void 0), e([y({
  type: ["media"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], u2.prototype, "type", void 0), u2 = l4 = e([a2("esri.popup.content.MediaContent")], u2);
var I = u2;

// ../../../node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var t;
var p17 = t = class extends f {
  constructor(r2) {
    super(r2), this.field = null, this.order = null;
  }
  clone() {
    return new t({
      field: this.field,
      order: this.order
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p17.prototype, "field", void 0), e([y({
  type: ["asc", "desc"],
  json: {
    write: true
  }
})], p17.prototype, "order", void 0), p17 = t = e([a2("esri.popup.support.RelatedRecordsInfoFieldOrder")], p17);
var i13 = p17;

// ../../../node_modules/@arcgis/core/popup/content/RelationshipContent.js
var n7 = class extends i(p3) {
  constructor(t2) {
    super(t2), this.description = null, this.displayCount = null, this.displayType = "list", this.orderByFields = null, this.relationshipId = null, this.title = null, this.type = "relationship";
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n7.prototype, "description", void 0), e([y({
  type: Number,
  json: {
    type: N,
    write: true
  }
})], n7.prototype, "displayCount", void 0), e([y({
  type: ["list"],
  json: {
    write: true
  }
})], n7.prototype, "displayType", void 0), e([y({
  type: [i13],
  json: {
    write: true
  }
})], n7.prototype, "orderByFields", void 0), e([y({
  type: Number,
  json: {
    type: N,
    write: true
  }
})], n7.prototype, "relationshipId", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n7.prototype, "title", void 0), e([y({
  type: ["relationship"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], n7.prototype, "type", void 0), n7 = e([a2("esri.popup.content.RelationshipContent")], n7);
var l5 = n7;

// ../../../node_modules/@arcgis/core/popup/content/TextContent.js
var s7;
var p18 = s7 = class extends p3 {
  constructor(t2) {
    super(t2), this.text = null, this.type = "text";
  }
  clone() {
    return new s7({
      text: this.text
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], p18.prototype, "text", void 0), e([y({
  type: ["text"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], p18.prototype, "type", void 0), p18 = s7 = e([a2("esri.popup.content.TextContent")], p18);
var c8 = p18;

// ../../../node_modules/@arcgis/core/popup/content.js
var p19 = {
  base: null,
  key: "type",
  typeMap: {
    attachment: i4,
    media: I,
    text: c8,
    expression: i7,
    field: c3,
    relationship: l5
  }
};

// ../../../node_modules/@arcgis/core/popup/LayerOptions.js
var e4;
var p20 = e4 = class extends f {
  constructor(o3) {
    super(o3), this.returnTopmostRaster = null, this.showNoDataRecords = null;
  }
  clone() {
    return new e4({
      showNoDataRecords: this.showNoDataRecords,
      returnTopmostRaster: this.returnTopmostRaster
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p20.prototype, "returnTopmostRaster", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p20.prototype, "showNoDataRecords", void 0), p20 = e4 = e([a2("esri.popup.LayerOptions")], p20);
var a11 = p20;

// ../../../node_modules/@arcgis/core/popup/RelatedRecordsInfo.js
var p21;
var l6 = p21 = class extends f {
  constructor(o3) {
    super(o3), this.showRelatedRecords = null, this.orderByFields = null;
  }
  clone() {
    return new p21({
      showRelatedRecords: this.showRelatedRecords,
      orderByFields: this.orderByFields ? a(this.orderByFields) : null
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], l6.prototype, "showRelatedRecords", void 0), e([y({
  type: [i13],
  json: {
    write: true
  }
})], l6.prototype, "orderByFields", void 0), l6 = p21 = e([a2("esri.popup.RelatedRecordsInfo")], l6);
var c9 = l6;

// ../../../node_modules/@arcgis/core/PopupTemplate.js
var J = "relationships/";
var b2 = "expression/";
var L = V.ofType({
  key: "type",
  defaultKeyValue: "button",
  base: p,
  typeMap: {
    button: c,
    toggle: a3
  }
});
var B = {
  base: p3,
  key: "type",
  typeMap: {
    media: I,
    custom: c2,
    text: c8,
    attachments: i4,
    fields: c3,
    expression: i7,
    relationship: l5
  }
};
var M = /* @__PURE__ */ new Set(["attachments", "fields", "media", "text", "expression", "relationship"]);
var P = class extends i(f) {
  constructor() {
    super(...arguments), this.actions = null, this.content = "", this.expressionInfos = null, this.fieldInfos = null, this.layerOptions = null, this.lastEditInfoEnabled = true, this.outFields = null, this.overwriteActions = false, this.returnGeometry = false, this.title = "";
  }
  castContent(t2) {
    return Array.isArray(t2) ? t2.map((t3) => T(B, t3)) : "string" == typeof t2 || "function" == typeof t2 || t2 instanceof HTMLElement || S(t2) ? t2 : (n.getLogger(this).error("content error", "unsupported content value", {
      value: t2
    }), null);
  }
  readContent(t2, e5) {
    const {
      popupElements: o3
    } = e5;
    return Array.isArray(o3) && o3.length > 0 ? this._readPopupInfoElements(e5.description, e5.mediaInfos, o3) : this._readPopupInfo(e5);
  }
  writeContent(t2, e5, o3, s8) {
    "string" != typeof t2 ? Array.isArray(t2) && (e5.popupElements = t2.filter((t3) => M.has(t3.type)).map((t3) => t3?.toJSON(s8)), e5.popupElements.forEach((t3) => {
      "attachments" === t3.type ? this._writeAttachmentContent(e5) : "media" === t3.type ? this._writeMediaContent(t3, e5) : "text" === t3.type ? this._writeTextContent(t3, e5) : "relationship" === t3.type && this._writeRelationshipContent(t3, e5);
    })) : e5.description = t2;
  }
  writeFieldInfos(t2, e5, o3, s8) {
    const {
      content: r2
    } = this, i14 = Array.isArray(r2) ? r2 : null;
    if (t2) {
      const o4 = i14 ? i14.filter((t3) => "fields" === t3.type) : [], r3 = o4.length && o4.every((t3) => t3.fieldInfos?.length);
      e5.fieldInfos = t2.filter(Boolean).map((t3) => {
        const e6 = t3.toJSON(s8);
        return r3 && (e6.visible = false), e6;
      });
    }
    if (i14) for (const n8 of i14) "fields" === n8.type && this._writeFieldsContent(n8, e5);
  }
  writeLayerOptions(t2, e5, o3, s8) {
    e5[o3] = !t2 || null === t2.showNoDataRecords && null === t2.returnTopmostRaster ? null : t2.toJSON(s8);
  }
  writeTitle(t2, e5) {
    e5.title = t2 || "";
  }
  collectRequiredFields(t2, e5) {
    return __async(this, null, function* () {
      const o3 = this.expressionInfos || [];
      yield this._collectExpressionInfoFields(t2, e5, [...o3, ...this._getContentExpressionInfos(this.content, o3)]), b(t2, e5, [...this.outFields || [], ...this._getActionsFields(this.actions), ...this._getTitleFields(this.title), ...this._getContentFields(this.content)]);
    });
  }
  getRequiredFields(t2) {
    return __async(this, null, function* () {
      const e5 = /* @__PURE__ */ new Set();
      return yield this.collectRequiredFields(e5, t2), [...e5].sort();
    });
  }
  _writeFieldsContent(t2, e5) {
    if (!Array.isArray(t2.fieldInfos) || !t2.fieldInfos.length) return;
    const o3 = a(t2.fieldInfos);
    Array.isArray(e5.fieldInfos) ? o3.forEach((t3) => {
      const o4 = e5.fieldInfos.find((e6) => e6.fieldName?.toLowerCase() === t3.fieldName?.toLowerCase());
      o4 ? o4.visible = true : e5.fieldInfos.push(t3);
    }) : e5.fieldInfos = o3;
  }
  _writeAttachmentContent(t2) {
    t2.showAttachments || (t2.showAttachments = true);
  }
  _writeRelationshipContent(t2, e5) {
    const o3 = t2.orderByFields?.map((e6) => this._toFieldOrderJSON(e6, t2.relationshipId)) || [], s8 = [...e5.relatedRecordsInfo?.orderByFields || [], ...o3];
    e5.relatedRecordsInfo = __spreadValues({
      showRelatedRecords: true
    }, s8?.length && {
      orderByFields: s8
    });
  }
  _writeTextContent(t2, e5) {
    !e5.description && t2.text && (e5.description = t2.text);
  }
  _writeMediaContent(t2, e5) {
    if (!Array.isArray(t2.mediaInfos) || !t2.mediaInfos.length) return;
    const o3 = a(t2.mediaInfos);
    Array.isArray(e5.mediaInfos) ? e5.mediaInfos = [...e5.mediaInfos, ...o3] : e5.mediaInfos = o3;
  }
  _readPopupInfoElements(t2, e5, o3) {
    const s8 = {
      description: false,
      mediaInfos: false
    };
    return o3.map((o4) => "media" === o4.type ? (o4.mediaInfos || !e5 || s8.mediaInfos || (o4.mediaInfos = e5, s8.mediaInfos = true), I.fromJSON(o4)) : "text" === o4.type ? (o4.text || !t2 || s8.description || (o4.text = t2, s8.description = true), c8.fromJSON(o4)) : "attachments" === o4.type ? i4.fromJSON(o4) : "fields" === o4.type ? c3.fromJSON(o4) : "expression" === o4.type ? i7.fromJSON(o4) : "relationship" === o4.type ? l5.fromJSON(o4) : void 0).filter(Boolean);
  }
  _toRelationshipContent(t2) {
    const {
      field: e5,
      order: o3
    } = t2;
    if (!e5?.startsWith(J)) return null;
    const s8 = e5.replace(J, "").split("/");
    if (2 !== s8.length) return null;
    const r2 = parseInt(s8[0], 10), i14 = s8[1];
    return "number" == typeof r2 && i14 ? l5.fromJSON({
      relationshipId: r2,
      orderByFields: [{
        field: i14,
        order: o3
      }]
    }) : null;
  }
  _toFieldOrderJSON(t2, e5) {
    const {
      order: o3,
      field: s8
    } = t2;
    return {
      field: `${J}${e5}/${s8}`,
      order: o3
    };
  }
  _readPopupInfo({
    description: t2,
    mediaInfos: e5,
    showAttachments: o3,
    relatedRecordsInfo: s8 = {
      showRelatedRecords: false
    }
  }) {
    const r2 = [];
    t2 ? r2.push(new c8({
      text: t2
    })) : r2.push(new c3()), Array.isArray(e5) && e5.length && r2.push(I.fromJSON({
      mediaInfos: e5
    })), o3 && r2.push(i4.fromJSON({
      displayType: "auto"
    }));
    const {
      showRelatedRecords: i14,
      orderByFields: n8
    } = s8;
    return i14 && n8?.length && n8.forEach((t3) => {
      const e6 = this._toRelationshipContent(t3);
      e6 && r2.push(e6);
    }), r2.length ? r2 : t2;
  }
  _getContentElementFields(t2) {
    const e5 = t2?.type;
    if ("attachments" === e5) return [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description)];
    if ("custom" === e5) return t2.outFields || [];
    if ("fields" === e5) return [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description), ...this._getFieldInfoFields(t2.fieldInfos ?? this.fieldInfos)];
    if ("media" === e5) {
      const e6 = t2.mediaInfos || [];
      return [...this._extractFieldNames(t2.title), ...this._extractFieldNames(t2.description), ...e6.reduce((t3, e7) => [...t3, ...this._getMediaInfoFields(e7)], [])];
    }
    return "text" === e5 ? this._extractFieldNames(t2.text) : [];
  }
  _getMediaInfoFields(t2) {
    const {
      caption: e5,
      title: o3,
      value: s8
    } = t2, r2 = s8 || {}, {
      fields: i14,
      normalizeField: n8,
      tooltipField: p22,
      sourceURL: l7,
      linkURL: a12
    } = r2, d2 = [...this._extractFieldNames(o3), ...this._extractFieldNames(e5), ...this._extractFieldNames(l7), ...this._extractFieldNames(a12), ...i14 ?? []];
    return n8 && d2.push(n8), p22 && d2.push(p22), d2;
  }
  _getContentExpressionInfos(t2, e5) {
    return Array.isArray(t2) ? t2.reduce((t3, e6) => [...t3, ..."expression" === e6.type && e6.expressionInfo ? [e6.expressionInfo] : []], e5) : [];
  }
  _getContentFields(t2) {
    return "string" == typeof t2 ? this._extractFieldNames(t2) : Array.isArray(t2) ? t2.reduce((t3, e5) => [...t3, ...this._getContentElementFields(e5)], []) : [];
  }
  _collectExpressionInfoFields(t2, e5, o3) {
    return __async(this, null, function* () {
      o3 && (yield Promise.all(o3.map((o4) => h(t2, e5, o4.expression))));
    });
  }
  _getFieldInfoFields(t2) {
    return t2 ? t2.filter(({
      fieldName: t3,
      visible: e5
    }) => !(void 0 !== e5 && !e5 || !t3 || t3.startsWith(J) || t3.startsWith(b2))).map((t3) => t3.fieldName) : [];
  }
  _getActionsFields(t2) {
    return t2 ? t2.toArray().reduce((t3, e5) => [...t3, ...this._getActionFields(e5)], []) : [];
  }
  _getActionFields(t2) {
    const {
      className: e5,
      title: o3,
      type: s8
    } = t2, r2 = "button" === s8 || "toggle" === s8 ? t2.image : "";
    return [...this._extractFieldNames(o3), ...this._extractFieldNames(e5), ...this._extractFieldNames(r2)];
  }
  _getTitleFields(t2) {
    return "string" == typeof t2 ? this._extractFieldNames(t2) : [];
  }
  _extractFieldNames(t2) {
    return Xe(t2).filter((t3) => !(0 === t3.indexOf(J) || 0 === t3.indexOf(b2)));
  }
};
e([y({
  type: L
})], P.prototype, "actions", void 0), e([y()], P.prototype, "content", void 0), e([s("content")], P.prototype, "castContent", null), e([o("content", ["description", "fieldInfos", "popupElements", "mediaInfos", "showAttachments", "relatedRecordsInfo"])], P.prototype, "readContent", null), e([r("content", {
  popupElements: {
    type: V.ofType(p19)
  },
  showAttachments: {
    type: Boolean
  },
  mediaInfos: {
    type: V.ofType(m2)
  },
  description: {
    type: String
  },
  relatedRecordsInfo: {
    type: c9
  }
})], P.prototype, "writeContent", null), e([y({
  type: [i3],
  json: {
    write: true
  }
})], P.prototype, "expressionInfos", void 0), e([y({
  type: [n4]
})], P.prototype, "fieldInfos", void 0), e([r("fieldInfos")], P.prototype, "writeFieldInfos", null), e([y({
  type: a11
})], P.prototype, "layerOptions", void 0), e([r("layerOptions")], P.prototype, "writeLayerOptions", null), e([y({
  type: Boolean,
  json: {
    read: {
      source: "showLastEditInfo"
    },
    write: {
      target: "showLastEditInfo"
    },
    default: true
  }
})], P.prototype, "lastEditInfoEnabled", void 0), e([y()], P.prototype, "outFields", void 0), e([y()], P.prototype, "overwriteActions", void 0), e([y()], P.prototype, "returnGeometry", void 0), e([y({
  json: {
    type: String
  }
})], P.prototype, "title", void 0), e([r("title")], P.prototype, "writeTitle", null), P = e([a2("esri.PopupTemplate")], P);
var k = P;

export {
  i4 as i,
  i6 as i2,
  m,
  n4 as n,
  c3 as c,
  p9 as p,
  I,
  i13 as i3,
  c8 as c2,
  i3 as i4,
  k
};
//# sourceMappingURL=chunk-KYPTWEOO.js.map
