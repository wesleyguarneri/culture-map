import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2,
  i as i2,
  j as j3,
  n,
  r as r2,
  s
} from "./chunk-CKGGV3KL.js";
import {
  N,
  S,
  T,
  f as f2,
  g,
  k,
  p,
  w
} from "./chunk-VVKE6BJ3.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  k as k2
} from "./chunk-KYPTWEOO.js";
import {
  j3 as j2
} from "./chunk-ZREJ3Y2F.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  j,
  m2 as m
} from "./chunk-MRPCXIVS.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
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

// ../../../node_modules/@arcgis/core/rest/support/DirectionLine.js
var u;
var m2 = u = class extends i(f) {
  constructor(e3) {
    super(e3), this.directionLineType = null, this.directionPointId = null, this.distance = null, this.duration = null, this.fromLevel = null, this.geometry = null, this.objectId = null, this.popupTemplate = null, this.symbol = null, this.toLevel = null, this.type = "direction-line";
  }
  static fromGraphic(e3) {
    return new u({
      directionLineType: f2.fromJSON(e3.attributes.DirectionLineType),
      directionPointId: e3.attributes.DirectionPointID,
      distance: e3.attributes.Meters,
      duration: e3.attributes.Minutes,
      fromLevel: e3.attributes.FromLevel ?? null,
      geometry: e3.geometry,
      objectId: e3.attributes.ObjectID ?? e3.attributes.__OBJECTID,
      popupTemplate: e3.popupTemplate,
      symbol: e3.symbol,
      toLevel: e3.attributes.ToLevel ?? null
    });
  }
  toGraphic() {
    const e3 = {
      ObjectID: this.objectId,
      DirectionLineType: null != this.directionLineType ? f2.toJSON(this.directionLineType) : null,
      DirectionPointID: this.directionPointId,
      Meters: this.distance,
      Minutes: this.duration
    };
    return null != this.fromLevel && (e3.FromLevel = this.fromLevel), null != this.toLevel && (e3.ToLevel = this.toLevel), new d({
      geometry: this.geometry,
      attributes: e3,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
m2.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "DirectionLineType",
  alias: "Line Type",
  type: "esriFieldTypeInteger"
}, {
  name: "DirectionPointID",
  alias: "Direction Point ID",
  type: "esriFieldTypeInteger"
}, {
  name: "FromLevel",
  alias: "From Level",
  type: "esriFieldTypeInteger"
}, {
  name: "Meters",
  alias: "Meters",
  type: "esriFieldTypeDouble"
}, {
  name: "Minutes",
  alias: "Minutes",
  type: "esriFieldTypeDouble"
}, {
  name: "ToLevel",
  alias: "To Level",
  type: "esriFieldTypeInteger"
}], e([y({
  type: f2.apiValues,
  json: {
    read: {
      source: "attributes.DirectionLineType",
      reader: f2.read
    }
  }
})], m2.prototype, "directionLineType", void 0), e([y({
  json: {
    read: {
      source: "attributes.DirectionPointID"
    }
  }
})], m2.prototype, "directionPointId", void 0), e([y({
  json: {
    read: {
      source: "attributes.Meters"
    }
  }
})], m2.prototype, "distance", void 0), e([y({
  json: {
    read: {
      source: "attributes.Minutes"
    }
  }
})], m2.prototype, "duration", void 0), e([y({
  json: {
    read: {
      source: "attributes.FromLevel"
    }
  }
})], m2.prototype, "fromLevel", void 0), e([y({
  type: m
})], m2.prototype, "geometry", void 0), e([y({
  json: {
    read: {
      source: "attributes.ObjectID"
    }
  }
})], m2.prototype, "objectId", void 0), e([y({
  type: k2
})], m2.prototype, "popupTemplate", void 0), e([y({
  types: j2
})], m2.prototype, "symbol", void 0), e([y({
  json: {
    read: {
      source: "attributes.ToLevel"
    }
  }
})], m2.prototype, "toLevel", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], m2.prototype, "type", void 0), m2 = u = e([a("esri.rest.support.DirectionLine")], m2);
var c = m2;

// ../../../node_modules/@arcgis/core/rest/support/DirectionPoint.js
var m3;
var c2 = m3 = class extends i(f) {
  constructor(e3) {
    super(e3), this.alternateName = null, this.arrivalTime = null, this.arrivalTimeOffset = null, this.azimuth = null, this.branchName = null, this.directionPointType = null, this.displayText = null, this.exitName = null, this.geometry = null, this.intersectingName = null, this.level = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sequence = null, this.shortVoiceInstruction = null, this.stopId = null, this.symbol = null, this.towardName = null, this.type = "direction-point", this.voiceInstruction = null;
  }
  readArrivalTime(e3, t) {
    return null != t.attributes.ArrivalTime ? new Date(t.attributes.ArrivalTime) : null;
  }
  static fromGraphic(e3) {
    return new m3({
      alternateName: e3.attributes.AlternateName ?? null,
      arrivalTime: null != e3.attributes.ArrivalTime ? new Date(e3.attributes.ArrivalTime) : null,
      arrivalTimeOffset: e3.attributes.ArrivalUTCOffset ?? null,
      azimuth: e3.attributes.Azimuth ?? null,
      branchName: e3.attributes.BranchName ?? null,
      directionPointType: S.fromJSON(e3.attributes.DirectionPointType),
      displayText: e3.attributes.DisplayText ?? null,
      exitName: e3.attributes.ExitName ?? null,
      geometry: e3.geometry,
      intersectingName: e3.attributes.IntersectingName ?? null,
      level: e3.attributes.Level ?? null,
      name: e3.attributes.Name ?? null,
      objectId: e3.attributes.ObjectID ?? e3.attributes.__OBJECTID,
      popupTemplate: e3.popupTemplate,
      sequence: e3.attributes.Sequence,
      shortVoiceInstruction: e3.attributes.ShortVoiceInstruction ?? null,
      stopId: e3.attributes.StopID ?? null,
      symbol: e3.symbol,
      towardName: e3.attributes.TowardName ?? null,
      voiceInstruction: e3.attributes.VoiceInstruction ?? null
    });
  }
  toGraphic() {
    const e3 = {
      ObjectID: this.objectId,
      DirectionPointType: null != this.directionPointType ? S.toJSON(this.directionPointType) : null,
      Sequence: this.sequence,
      StopID: this.stopId
    };
    return null != this.alternateName && (e3.AlternateName = this.alternateName), null != this.arrivalTime && (e3.ArrivalTime = this.arrivalTime.getTime()), null != this.arrivalTimeOffset && (e3.ArrivalUTCOffset = this.arrivalTimeOffset), null != this.azimuth && (e3.Azimuth = this.azimuth), null != this.branchName && (e3.BranchName = this.branchName), null != this.displayText && (e3.DisplayText = this.displayText), null != this.exitName && (e3.ExitName = this.exitName), null != this.intersectingName && (e3.IntersectingName = this.intersectingName), null != this.level && (e3.Level = this.level), null != this.name && (e3.Name = this.name), null != this.shortVoiceInstruction && (e3.ShortVoiceInstruction = this.shortVoiceInstruction), null != this.towardName && (e3.TowardName = this.towardName), null != this.voiceInstruction && (e3.VoiceInstruction = this.voiceInstruction), new d({
      geometry: this.geometry,
      attributes: e3,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
c2.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "AlternateName",
  alias: "Alternative Name",
  type: "esriFieldTypeString"
}, {
  name: "ArrivalTime",
  alias: "Arrival Time",
  type: "esriFieldTypeDate"
}, {
  name: "ArrivalUTCOffset",
  alias: "Arrival Time Offset",
  type: "esriFieldTypeInteger"
}, {
  name: "Azimuth",
  alias: "Azimuth",
  type: "esriFieldTypeDouble"
}, {
  name: "BranchName",
  alias: "Branch Name",
  type: "esriFieldTypeString"
}, {
  name: "DirectionPointType",
  alias: "Directions Point Type",
  type: "esriFieldTypeInteger"
}, {
  name: "DisplayText",
  alias: "Display Text",
  type: "esriFieldTypeString"
}, {
  name: "ExitName",
  alias: "Exit Name",
  type: "esriFieldTypeString"
}, {
  name: "IntersectingName",
  alias: "Intersecting Name",
  type: "esriFieldTypeString"
}, {
  name: "Level",
  alias: "Level",
  type: "esriFieldTypeInteger"
}, {
  name: "Name",
  alias: "Name",
  type: "esriFieldTypeString"
}, {
  name: "Sequence",
  alias: "Sequence",
  type: "esriFieldTypeInteger"
}, {
  name: "ShortVoiceInstruction",
  alias: "Short Voice Instruction",
  type: "esriFieldTypeString"
}, {
  name: "StopID",
  alias: "Stop ID",
  type: "esriFieldTypeInteger"
}, {
  name: "TowardName",
  alias: "Toward Name",
  type: "esriFieldTypeString"
}, {
  name: "VoiceInstruction",
  alias: "Voice Instruction",
  type: "esriFieldTypeString"
}], e([y({
  json: {
    read: {
      source: "attributes.AlternateName"
    }
  }
})], c2.prototype, "alternateName", void 0), e([y()], c2.prototype, "arrivalTime", void 0), e([o("arrivalTime", ["attributes.ArrivalTime"])], c2.prototype, "readArrivalTime", null), e([y({
  json: {
    read: {
      source: "attributes.ArrivalUTCOffset"
    }
  }
})], c2.prototype, "arrivalTimeOffset", void 0), e([y({
  json: {
    read: {
      source: "attributes.Azimuth"
    }
  }
})], c2.prototype, "azimuth", void 0), e([y({
  json: {
    read: {
      source: "attributes.BranchName"
    }
  }
})], c2.prototype, "branchName", void 0), e([y({
  type: S.apiValues,
  json: {
    read: {
      source: "attributes.DirectionPointType",
      reader: S.read
    }
  }
})], c2.prototype, "directionPointType", void 0), e([y({
  json: {
    read: {
      source: "attributes.DisplayText"
    }
  }
})], c2.prototype, "displayText", void 0), e([y({
  json: {
    read: {
      source: "attributes.ExitName"
    }
  }
})], c2.prototype, "exitName", void 0), e([y({
  type: _
})], c2.prototype, "geometry", void 0), e([y({
  json: {
    read: {
      source: "attributes.IntersectingName"
    }
  }
})], c2.prototype, "intersectingName", void 0), e([y()], c2.prototype, "level", void 0), e([y({
  json: {
    read: {
      source: "attributes.Name"
    }
  }
})], c2.prototype, "name", void 0), e([y({
  json: {
    read: {
      source: "attributes.ObjectID"
    }
  }
})], c2.prototype, "objectId", void 0), e([y({
  type: k2
})], c2.prototype, "popupTemplate", void 0), e([y({
  json: {
    read: {
      source: "attributes.Sequence"
    }
  }
})], c2.prototype, "sequence", void 0), e([y({
  json: {
    read: {
      source: "attributes.ShortVoiceInstruction"
    }
  }
})], c2.prototype, "shortVoiceInstruction", void 0), e([y({
  json: {
    read: {
      source: "attributes.StopID"
    }
  }
})], c2.prototype, "stopId", void 0), e([y({
  types: j2
})], c2.prototype, "symbol", void 0), e([y({
  json: {
    read: {
      source: "attributes.TowardName"
    }
  }
})], c2.prototype, "towardName", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], c2.prototype, "type", void 0), e([y({
  json: {
    read: {
      source: "attributes.VoiceInstruction"
    }
  }
})], c2.prototype, "voiceInstruction", void 0), c2 = m3 = e([a("esri.rest.support.DirectionPoint")], c2);
var y2 = c2;

// ../../../node_modules/@arcgis/core/rest/support/PointBarrier.js
var S2;
var T2 = S2 = class extends i(f) {
  constructor(t) {
    super(t), this.addedCost = null, this.barrierType = null, this.costs = null, this.curbApproach = null, this.fullEdge = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.sideOfEdge = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.type = "point-barrier";
  }
  readCosts(t, e3) {
    return r2(e3.attributes, "Attr_");
  }
  writeCosts(t, e3) {
    i2(t, e3, "Attr_");
  }
  static fromGraphic(t) {
    return new S2({
      addedCost: t.attributes.AddedCost ?? null,
      barrierType: null != t.attributes.BarrierType ? g.fromJSON(t.attributes.BarrierType) : null,
      costs: null != t.attributes.Costs ? e2(JSON.parse(t.attributes.Costs)) : null,
      curbApproach: null != t.attributes.CurbApproach ? p.fromJSON(t.attributes.CurbApproach) : null,
      fullEdge: null != t.attributes.FullEdge ? k.fromJSON(t.attributes.FullEdge) : null,
      geometry: t.geometry,
      name: t.attributes.Name ?? null,
      objectId: t.attributes.ObjectID ?? t.attributes.__OBJECTID,
      popupTemplate: t.popupTemplate,
      status: null != t.attributes.Status ? T.fromJSON(t.attributes.Status) : null,
      symbol: t.symbol
    });
  }
  toGraphic() {
    const t = {
      ObjectID: this.objectId,
      AddedCost: this.addedCost,
      BarrierType: null != this.barrierType ? g.toJSON(this.barrierType) : null,
      Costs: null != this.costs ? JSON.stringify(s(this.costs)) : null,
      CurbApproach: null != this.curbApproach ? p.toJSON(this.curbApproach) : null,
      FullEdge: null != this.fullEdge ? k.toJSON(this.fullEdge) : null,
      Name: this.name,
      Status: null != this.status ? T.toJSON(this.status) : null
    };
    return new d({
      geometry: this.geometry,
      attributes: t,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
T2.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "AddedCost",
  alias: "Added Cost",
  type: "esriFieldTypeDouble"
}, {
  name: "BarrierType",
  alias: "Barrier Type",
  type: "esriFieldTypeInteger"
}, {
  name: "Costs",
  alias: "Costs",
  type: "esriFieldTypeString"
}, {
  name: "CurbApproach",
  alias: "Curb Approach",
  type: "esriFieldTypeInteger"
}, {
  name: "FullEdge",
  alias: "Full Edge",
  type: "esriFieldTypeInteger"
}, {
  name: "Name",
  alias: "Name",
  type: "esriFieldTypeString"
}, {
  name: "Status",
  alias: "Status",
  type: "esriFieldTypeInteger"
}], e([y()], T2.prototype, "addedCost", void 0), e([y({
  type: g.apiValues,
  json: {
    name: "attributes.BarrierType",
    read: {
      reader: g.read
    },
    write: {
      writer: g.write
    }
  }
})], T2.prototype, "barrierType", void 0), e([y()], T2.prototype, "costs", void 0), e([o("costs", ["attributes"])], T2.prototype, "readCosts", null), e([r("costs")], T2.prototype, "writeCosts", null), e([y({
  constructOnly: true,
  type: p.apiValues,
  json: {
    read: {
      source: "attributes.CurbApproach",
      reader: p.read
    }
  }
})], T2.prototype, "curbApproach", void 0), e([y({
  type: k.apiValues,
  json: {
    name: "attributes.FullEdge",
    read: {
      reader: k.read
    },
    write: {
      writer: k.write
    }
  }
})], T2.prototype, "fullEdge", void 0), e([y({
  type: _,
  json: {
    write: true
  }
})], T2.prototype, "geometry", void 0), e([y({
  json: {
    name: "attributes.Name"
  }
})], T2.prototype, "name", void 0), e([y({
  json: {
    name: "attributes.ObjectID"
  }
})], T2.prototype, "objectId", void 0), e([y({
  type: k2
})], T2.prototype, "popupTemplate", void 0), e([y({
  type: N.apiValues,
  json: {
    read: {
      source: "attributes.SideOfEdge",
      reader: N.read
    }
  }
})], T2.prototype, "sideOfEdge", void 0), e([y({
  json: {
    read: {
      source: "attributes.SourceID"
    }
  }
})], T2.prototype, "sourceId", void 0), e([y({
  json: {
    read: {
      source: "attributes.SourceOID"
    }
  }
})], T2.prototype, "sourceOid", void 0), e([y({
  type: T.apiValues,
  json: {
    read: {
      source: "attributes.Status",
      reader: T.read
    }
  }
})], T2.prototype, "status", void 0), e([y({
  types: j2
})], T2.prototype, "symbol", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], T2.prototype, "type", void 0), T2 = S2 = e([a("esri.rest.support.PointBarrier")], T2);
var C = T2;

// ../../../node_modules/@arcgis/core/rest/support/PolygonBarrier.js
var j4;
var h = j4 = class extends i(f) {
  constructor(t) {
    super(t), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null, this.type = "polygon-barrier";
  }
  readCosts(t, e3) {
    return r2(e3.attributes, "Attr_");
  }
  writeCosts(t, e3) {
    i2(t, e3, "Attr_");
  }
  static fromGraphic(t) {
    return new j4({
      barrierType: null != t.attributes.BarrierType ? g.fromJSON(t.attributes.BarrierType) : null,
      costs: null != t.attributes.Costs ? e2(JSON.parse(t.attributes.Costs)) : null,
      geometry: t.geometry,
      name: t.attributes.Name ?? null,
      objectId: t.attributes.ObjectID ?? t.attributes.__OBJECTID,
      popupTemplate: t.popupTemplate,
      scaleFactor: t.attributes.ScaleFactor ?? null,
      symbol: t.symbol
    });
  }
  toGraphic() {
    const t = {
      ObjectID: this.objectId,
      BarrierType: null != this.barrierType ? g.toJSON(this.barrierType) : null,
      Costs: null != this.costs ? JSON.stringify(s(this.costs)) : null,
      Name: this.name ?? null,
      ScaleFactor: this.scaleFactor ?? null
    };
    return new d({
      geometry: this.geometry,
      attributes: t,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
h.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "BarrierType",
  alias: "Barrier Type",
  type: "esriFieldTypeInteger"
}, {
  name: "Costs",
  alias: "Costs",
  type: "esriFieldTypeString"
}, {
  name: "Name",
  alias: "Name",
  type: "esriFieldTypeString"
}, {
  name: "ScaleFactor",
  alias: "Scale Factor",
  type: "esriFieldTypeDouble"
}], e([y({
  type: g.apiValues,
  json: {
    name: "attributes.BarrierType",
    read: {
      reader: g.read
    },
    write: {
      writer: g.write
    }
  }
})], h.prototype, "barrierType", void 0), e([y()], h.prototype, "costs", void 0), e([o("costs", ["attributes"])], h.prototype, "readCosts", null), e([r("costs")], h.prototype, "writeCosts", null), e([y({
  type: j,
  json: {
    write: true
  }
})], h.prototype, "geometry", void 0), e([y({
  json: {
    name: "attributes.Name"
  }
})], h.prototype, "name", void 0), e([y({
  json: {
    name: "attributes.ObjectID"
  }
})], h.prototype, "objectId", void 0), e([y({
  type: k2
})], h.prototype, "popupTemplate", void 0), e([y()], h.prototype, "scaleFactor", void 0), e([y({
  types: j2
})], h.prototype, "symbol", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], h.prototype, "type", void 0), h = j4 = e([a("esri.rest.support.PolygonBarrier")], h);
var T3 = h;

// ../../../node_modules/@arcgis/core/rest/support/PolylineBarrier.js
var b;
var d2 = b = class extends i(f) {
  constructor(e3) {
    super(e3), this.barrierType = null, this.costs = null, this.geometry = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.scaleFactor = null, this.symbol = null, this.type = "polyline-barrier";
  }
  readCosts(e3, t) {
    return r2(t.attributes, "Attr_");
  }
  static fromGraphic(e3) {
    return new b({
      barrierType: null != e3.attributes.BarrierType ? g.fromJSON(e3.attributes.BarrierType) : null,
      costs: null != e3.attributes.Costs ? e2(JSON.parse(e3.attributes.Costs)) : null,
      geometry: e3.geometry,
      name: e3.attributes.Name ?? null,
      objectId: e3.attributes.ObjectID ?? e3.attributes.__OBJECTID,
      popupTemplate: e3.popupTemplate,
      scaleFactor: e3.attributes.ScaleFactor ?? null,
      symbol: e3.symbol
    });
  }
  toGraphic() {
    const e3 = {
      ObjectID: this.objectId,
      BarrierType: null != this.barrierType ? g.toJSON(this.barrierType) : null,
      Costs: null != this.costs ? JSON.stringify(s(this.costs)) : null,
      Name: this.name,
      ScaleFactor: this.scaleFactor
    };
    return new d({
      geometry: this.geometry,
      attributes: e3,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
d2.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "BarrierType",
  alias: "Barrier Type",
  type: "esriFieldTypeInteger"
}, {
  name: "Costs",
  alias: "Costs",
  type: "esriFieldTypeString"
}, {
  name: "Name",
  alias: "Name",
  type: "esriFieldTypeString"
}, {
  name: "ScaleFactor",
  alias: "Scale Factor",
  type: "esriFieldTypeDouble"
}], e([y({
  type: g.apiValues,
  json: {
    read: {
      source: "attributes.BarrierType",
      reader: g.read
    }
  }
})], d2.prototype, "barrierType", void 0), e([y()], d2.prototype, "costs", void 0), e([o("costs", ["attributes"])], d2.prototype, "readCosts", null), e([y({
  type: m,
  json: {
    write: true
  }
})], d2.prototype, "geometry", void 0), e([y({
  json: {
    name: "attributes.Name"
  }
})], d2.prototype, "name", void 0), e([y({
  json: {
    name: "attributes.ObjectID"
  }
})], d2.prototype, "objectId", void 0), e([y({
  type: k2
})], d2.prototype, "popupTemplate", void 0), e([y()], d2.prototype, "scaleFactor", void 0), e([y({
  types: j2
})], d2.prototype, "symbol", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], d2.prototype, "type", void 0), d2 = b = e([a("esri.rest.support.PolylineBarrier")], d2);
var j5 = d2;

// ../../../node_modules/@arcgis/core/rest/support/RouteSettings.js
var a2 = class extends f {
  constructor(t) {
    super(t), this.accumulateAttributes = null, this.directionsLanguage = null, this.findBestSequence = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.startTimeIsUTC = null, this.timeWindowsAreUTC = null, this.travelMode = null;
  }
  readAccumulateAttributes(t) {
    return null == t ? null : t.map((t2) => w.fromJSON(t2));
  }
  writeAccumulateAttributes(t, e3, r3) {
    t?.length && (e3[r3] = t.map((t2) => w.toJSON(t2)));
  }
};
e([y({
  type: [String],
  json: {
    name: "accumulateAttributeNames",
    write: true
  }
})], a2.prototype, "accumulateAttributes", void 0), e([o("accumulateAttributes")], a2.prototype, "readAccumulateAttributes", null), e([r("accumulateAttributes")], a2.prototype, "writeAccumulateAttributes", null), e([y({
  type: String,
  json: {
    write: true
  }
})], a2.prototype, "directionsLanguage", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a2.prototype, "findBestSequence", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a2.prototype, "preserveFirstStop", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a2.prototype, "preserveLastStop", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a2.prototype, "startTimeIsUTC", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a2.prototype, "timeWindowsAreUTC", void 0), e([y({
  type: j3,
  json: {
    write: true
  }
})], a2.prototype, "travelMode", void 0), a2 = e([a("esri.rest.support.RouteSettings")], a2);
var c3 = a2;

// ../../../node_modules/@arcgis/core/rest/support/RouteInfo.js
var b2;
var f3 = b2 = class extends i(f) {
  constructor(t) {
    super(t), this.analysisSettings = null, this.endTime = null, this.endTimeOffset = null, this.firstStopId = null, this.geometry = null, this.lastStopId = null, this.messages = null, this.name = null, this.objectId = null, this.popupTemplate = null, this.startTime = null, this.startTimeOffset = null, this.stopCount = null, this.symbol = null, this.totalCosts = null, this.totalDistance = null, this.totalDuration = null, this.totalLateDuration = null, this.totalViolations = null, this.totalWait = null, this.totalWaitDuration = null, this.type = "route-info", this.version = "1.0.0";
  }
  readEndTime(t, e3) {
    return null != e3.attributes.EndTimeUTC ? new Date(e3.attributes.EndTimeUTC) : null;
  }
  readEndTimeOffset(t, e3) {
    return n(e3.attributes.EndTime, e3.attributes.EndTimeUTC);
  }
  readStartTime(t, e3) {
    return null != e3.attributes.StartTimeUTC ? new Date(e3.attributes.StartTimeUTC) : null;
  }
  readStartTimeOffset(t, e3) {
    return n(e3.attributes.StartTime, e3.attributes.StartTimeUTC);
  }
  readTotalCosts(t, e3) {
    return r2(e3.attributes, "Total_");
  }
  readTotalViolations(t, e3) {
    return r2(e3.attributes, "TotalViolation_");
  }
  readTotalWait(t, e3) {
    return r2(e3.attributes, "TotalWait_");
  }
  static fromGraphic(t) {
    return new b2({
      analysisSettings: null != t.attributes.AnalysisSettings ? c3.fromJSON(JSON.parse(t.attributes.AnalysisSettings)) : null,
      endTime: null != t.attributes.EndTime ? new Date(t.attributes.EndTime) : null,
      endTimeOffset: t.attributes.EndUTCOffset ?? null,
      geometry: t.geometry,
      messages: null != t.attributes.Messages ? JSON.parse(t.attributes.Messages) : null,
      name: t.attributes.RouteName,
      objectId: t.attributes.ObjectID ?? t.attributes.__OBJECTID,
      popupTemplate: t.popupTemplate,
      startTime: null != t.attributes.StartTime ? new Date(t.attributes.StartTime) : null,
      startTimeOffset: t.attributes.StartUTCOffset ?? null,
      symbol: t.symbol,
      totalCosts: null != t.attributes.TotalCosts ? e2(JSON.parse(t.attributes.TotalCosts)) : null,
      totalDistance: t.attributes.TotalMeters ?? null,
      totalDuration: t.attributes.TotalMinutes ?? null,
      totalLateDuration: t.attributes.TotalLateMinutes ?? null,
      totalWaitDuration: t.attributes.TotalWaitMinutes ?? null,
      version: t.attributes.Version
    });
  }
  toGraphic() {
    const t = {
      ObjectID: this.objectId,
      AnalysisSettings: null != this.analysisSettings ? JSON.stringify(this.analysisSettings.toJSON()) : null,
      EndTime: null != this.endTime ? this.endTime.getTime() : null,
      EndUTCOffset: this.endTimeOffset,
      Messages: null != this.messages ? JSON.stringify(this.messages) : null,
      RouteName: this.name,
      StartTime: null != this.startTime ? this.startTime.getTime() : null,
      StartUTCOffset: this.startTimeOffset,
      TotalCosts: null != this.totalCosts ? JSON.stringify(s(this.totalCosts)) : null,
      TotalLateMinutes: this.totalLateDuration,
      TotalMeters: this.totalDistance,
      TotalMinutes: this.totalDuration,
      TotalWaitMinutes: this.totalWaitDuration,
      Version: this.version
    };
    return new d({
      geometry: this.geometry,
      attributes: t,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
f3.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "AnalysisSettings",
  alias: "Analysis Settings",
  type: "esriFieldTypeString"
}, {
  name: "EndTime",
  alias: "End Time",
  type: "esriFieldTypeDate"
}, {
  name: "EndUTCOffset",
  alias: "End Time Offset",
  type: "esriFieldTypeInteger"
}, {
  name: "Messages",
  alias: "Messages",
  type: "esriFieldTypeString"
}, {
  name: "RouteName",
  alias: "Route Name",
  type: "esriFieldTypeString"
}, {
  name: "StartTime",
  alias: "Start Time",
  type: "esriFieldTypeDate"
}, {
  name: "StartUTCOffset",
  alias: "Start Time Offset",
  type: "esriFieldTypeInteger"
}, {
  name: "TotalCosts",
  alias: "Total Costs",
  type: "esriFieldTypeString"
}, {
  name: "TotalLateMinutes",
  alias: "Total Late Minutes",
  type: "esriFieldTypeDouble"
}, {
  name: "TotalMeters",
  alias: "Total Meters",
  type: "esriFieldTypeDouble"
}, {
  name: "TotalMinutes",
  alias: "Total Minutes",
  type: "esriFieldTypeDouble"
}, {
  name: "TotalWaitMinutes",
  alias: "Total Wait Minutes",
  type: "esriFieldTypeDouble"
}, {
  name: "Version",
  alias: "Version",
  type: "esriFieldTypeString"
}], e([y()], f3.prototype, "analysisSettings", void 0), e([y()], f3.prototype, "endTime", void 0), e([o("endTime", ["attributes.EndTimeUTC"])], f3.prototype, "readEndTime", null), e([y()], f3.prototype, "endTimeOffset", void 0), e([o("endTimeOffset", ["attributes.EndTime", "attributes.EndTimeUTC"])], f3.prototype, "readEndTimeOffset", null), e([y({
  json: {
    read: {
      source: "attributes.FirstStopID"
    }
  }
})], f3.prototype, "firstStopId", void 0), e([y({
  type: m
})], f3.prototype, "geometry", void 0), e([y({
  json: {
    read: {
      source: "attributes.LastStopID"
    }
  }
})], f3.prototype, "lastStopId", void 0), e([y()], f3.prototype, "messages", void 0), e([y({
  json: {
    read: {
      source: "attributes.Name"
    }
  }
})], f3.prototype, "name", void 0), e([y({
  json: {
    read: {
      source: "attributes.ObjectID"
    }
  }
})], f3.prototype, "objectId", void 0), e([y({
  type: k2
})], f3.prototype, "popupTemplate", void 0), e([y()], f3.prototype, "startTime", void 0), e([o("startTime", ["attributes.StartTimeUTC"])], f3.prototype, "readStartTime", null), e([y()], f3.prototype, "startTimeOffset", void 0), e([o("startTimeOffset", ["attributes.StartTime", "attributes.StartTimeUTC"])], f3.prototype, "readStartTimeOffset", null), e([y({
  json: {
    read: {
      source: "attributes.StopCount"
    }
  }
})], f3.prototype, "stopCount", void 0), e([y({
  types: j2
})], f3.prototype, "symbol", void 0), e([y()], f3.prototype, "totalCosts", void 0), e([o("totalCosts", ["attributes"])], f3.prototype, "readTotalCosts", null), e([y()], f3.prototype, "totalDistance", void 0), e([y()], f3.prototype, "totalDuration", void 0), e([y()], f3.prototype, "totalLateDuration", void 0), e([y()], f3.prototype, "totalViolations", void 0), e([o("totalViolations", ["attributes"])], f3.prototype, "readTotalViolations", null), e([y()], f3.prototype, "totalWait", void 0), e([o("totalWait", ["attributes"])], f3.prototype, "readTotalWait", null), e([y()], f3.prototype, "totalWaitDuration", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], f3.prototype, "type", void 0), e([y()], f3.prototype, "version", void 0), f3 = b2 = e([a("esri.rest.support.RouteInfo")], f3);
var S3 = f3;

export {
  c,
  y2 as y,
  C,
  T3 as T,
  j5 as j,
  c3 as c2,
  S3 as S
};
//# sourceMappingURL=chunk-TSFH34P2.js.map
