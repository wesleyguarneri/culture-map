import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-BY3XBMAH.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  o as o2
} from "./chunk-34V2CLL5.js";
import {
  y as y2
} from "./chunk-4DSGTDZJ.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  Et,
  U
} from "./chunk-XLEC46FY.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
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
  A,
  L
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/StreamConnection.js
var c2 = class extends o.EventedAccessor {
  destroy() {
    this.emit("destroy");
  }
  get connectionError() {
    return this.errorString ? new s("stream-connection", this.errorString) : null;
  }
  onFeature(r2) {
    this.emit("data-received", r2);
  }
  onMessage(r2) {
    this.emit("message-received", r2);
  }
};
e([y({
  readOnly: true
})], c2.prototype, "connectionError", null), c2 = e([a("esri.layers.support.StreamConnection")], c2);
var n2 = c2;

// ../../../node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js
var h;
!function(e2) {
  e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSING = 2] = "CLOSING", e2[e2.CLOSED = 3] = "CLOSED";
}(h || (h = {}));
var d = class extends n2 {
  constructor(e2) {
    super({}), this._outstandingMessages = [], this.errorString = null;
    const {
      geometryType: t,
      spatialReference: o4,
      sourceSpatialReference: s2
    } = e2;
    this._config = e2, this._featureZScaler = o2(t, s2, o4), this._open();
  }
  normalizeCtorArgs() {
    return {};
  }
  _open() {
    return __async(this, null, function* () {
      yield this._tryCreateWebSocket(), this.destroyed || (yield this._handshake());
    });
  }
  destroy() {
    super.destroy(), null != this._websocket && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (null == this._websocket) return "disconnected";
    switch (this._websocket.readyState) {
      case h.CONNECTING:
      case h.OPEN:
        return "connected";
      case h.CLOSING:
      case h.CLOSED:
        return "disconnected";
    }
  }
  sendMessageToSocket(e2) {
    null != this._websocket ? this._websocket.send(JSON.stringify(e2)) : this._outstandingMessages.push(e2);
  }
  sendMessageToClient(e2) {
    this._onMessage(e2);
  }
  updateCustomParameters(e2) {
    this._config.customParameters = e2, null != this._websocket && this._websocket.close();
  }
  _tryCreateWebSocket() {
    return __async(this, arguments, function* (e2 = this._config.source.path, r2 = 1e3, i = 0) {
      try {
        if (this.destroyed) return;
        const t = Et(e2, this._config.customParameters ?? {});
        this._websocket = yield this._createWebSocket(t), this.notifyChange("connectionStatus");
      } catch (c3) {
        const n3 = r2 / 1e3;
        return this._config.maxReconnectionAttempts && i >= this._config.maxReconnectionAttempts ? (n.getLogger(this).error(new s("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (n.getLogger(this).error(new s("websocket-connection", `Failed to connect. Attempting to reconnect in ${n3}s`, c3)), yield A(r2), this._tryCreateWebSocket(e2, Math.min(1.5 * r2, 1e3 * this._config.maxReconnectionInterval), i + 1));
      }
    });
  }
  _setWebSocketJSONParseHandler(e2) {
    e2.onmessage = (e3) => {
      try {
        const t = JSON.parse(e3.data);
        this._onMessage(t);
      } catch (s2) {
        return void n.getLogger(this).error(new s("websocket-connection", "Failed to parse message, invalid JSON", {
          error: s2
        }));
      }
    };
  }
  _createWebSocket(e2) {
    return new Promise((t, o4) => {
      const s2 = new WebSocket(e2);
      s2.onopen = () => {
        if (s2.onopen = null, this.destroyed) return s2.onclose = null, void s2.close();
        s2.onclose = (e3) => this._onClose(e3), s2.onerror = (e3) => this._onError(e3), this._setWebSocketJSONParseHandler(s2), t(s2);
      }, s2.onclose = (e3) => {
        s2.onopen = s2.onclose = null, o4(e3);
      };
    });
  }
  _handshake(e2 = 1e4) {
    return __async(this, null, function* () {
      const s2 = this._websocket;
      if (null == s2) return;
      const n3 = L(), i = s2.onmessage, {
        filter: c3,
        outFields: a3,
        spatialReference: l
      } = this._config;
      return n3.timeout(e2), s2.onmessage = (e3) => {
        let r2 = null;
        try {
          r2 = JSON.parse(e3.data);
        } catch (h3) {
        }
        r2 && "object" == typeof r2 || (n.getLogger(this).error(new s("websocket-connection", "Protocol violation. Handshake failed - malformed message", e3.data)), n3.reject(), this.destroy()), r2.spatialReference?.wkid !== l?.wkid && (n.getLogger(this).error(new s("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l.wkid}`, e3.data)), n3.reject(), this.destroy()), "json" !== r2.format && (n.getLogger(this).error(new s("websocket-connection", "Protocol violation. Handshake failed - format is not set", e3.data)), n3.reject(), this.destroy()), c3 && r2.filter !== c3 && n.getLogger(this).error(new s("websocket-connection", "Tried to set filter, but server doesn't support it")), a3 && r2.outFields !== a3 && n.getLogger(this).error(new s("websocket-connection", "Tried to set outFields, but server doesn't support it")), s2.onmessage = i;
        for (const t of this._outstandingMessages) s2.send(JSON.stringify(t));
        this._outstandingMessages = [], n3.resolve();
      }, s2.send(JSON.stringify({
        filter: c3,
        outFields: a3,
        format: "json",
        spatialReference: {
          wkid: l.wkid
        }
      })), n3.promise;
    });
  }
  _onMessage(e2) {
    if (this.onMessage(e2), "type" in e2) switch (e2.type) {
      case "features":
      case "featureResult":
        for (const t of e2.features) null != this._featureZScaler && this._featureZScaler(t.geometry), this.onFeature(t);
    }
  }
  _onError(e2) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t), n.getLogger(this).error("websocket-connection", t);
  }
  _onClose(e2) {
    this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e2.code && n.getLogger(this).error("websocket-connection", `WebSocket closed unexpectedly with error code ${e2.code}`), this.destroyed || this._open();
  }
};
e([y()], d.prototype, "connectionStatus", null), e([y()], d.prototype, "errorString", void 0), d = e([a("esri.layers.graphics.sources.connections.WebSocketConnection")], d);

// ../../../node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js
var h2 = 1e4;
var d2 = {
  maxQueryDepth: 5,
  maxRecordCountFactor: 3
};
var g = class extends d {
  constructor(e2) {
    super(__spreadValues(__spreadValues({}, d2), e2)), this._buddyServicesQuery = null, this._relatedFeatures = null;
  }
  _open() {
    return __async(this, null, function* () {
      const e2 = yield this._fetchServiceDefinition(this._config.source);
      e2.timeInfo.trackIdField || n.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
      const t = this._fetchWebSocketUrl(e2.streamUrls, this._config.spatialReference);
      this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), yield this._buddyServicesQuery, yield this._tryCreateWebSocket(t);
      const {
        filter: r2,
        outFields: o4
      } = this._config;
      this.destroyed || this._setFilter(r2, o4);
    });
  }
  _onMessage(e2) {
    if ("attributes" in e2) {
      let o4;
      try {
        o4 = this._enrich(e2), null != this._featureZScaler && this._featureZScaler(o4.geometry);
      } catch (t) {
        return void n.getLogger(this).error(new s("geoevent-connection", "Failed to parse message", t));
      }
      this.onFeature(o4);
    } else this.onMessage(e2);
  }
  _fetchServiceDefinition(e2) {
    return __async(this, null, function* () {
      const r2 = __spreadValues({
        f: "json"
      }, this._config.customParameters), i = U(e2.path, {
        query: r2,
        responseType: "json"
      }), o4 = (yield i).data;
      return this._serviceDefinition = o4, o4;
    });
  }
  _fetchWebSocketUrl(e2, t) {
    const r2 = e2[0], {
      urls: i,
      token: o4
    } = r2, n3 = this._inferWebSocketBaseUrl(i);
    return Et(`${n3}/subscribe`, {
      outSR: "" + t.wkid,
      token: o4
    });
  }
  _inferWebSocketBaseUrl(e2) {
    if (1 === e2.length) return e2[0];
    for (const t of e2) if (t.includes("wss")) return t;
    return n.getLogger(this).error(new s("geoevent-connection", "Unable to infer WebSocket url", e2)), null;
  }
  _setFilter(e2, t) {
    return __async(this, null, function* () {
      const s2 = this._websocket;
      if (null == s2 || null == e2 && null == t) return;
      const n3 = JSON.stringify({
        filter: this._serializeFilter(e2, t)
      });
      let a3 = false;
      const c3 = L(), u = () => {
        a3 || (this.destroyed || this._websocket !== s2 || n.getLogger(this).error(new s("geoevent-connection", "Server timed out when setting filter")), c3.reject());
      }, l = (e3) => {
        const t2 = JSON.parse(e3.data);
        t2.filter && (t2.error && (n.getLogger(this).error(new s("geoevent-connection", "Failed to set service filter", t2.error)), this._set("errorString", `Could not set service filter - ${t2.error}`), c3.reject(t2.error)), this._setWebSocketJSONParseHandler(s2), a3 = true, c3.resolve());
      };
      return s2.onmessage = l, s2.send(n3), setTimeout(u, h2), c3.promise;
    });
  }
  _serializeFilter(e2, t) {
    const o4 = {};
    if (null == e2 && null == t) return o4;
    if (e2?.geometry) try {
      const t2 = y2(e2.geometry);
      if ("extent" !== t2.type) throw new s(`Expected extent but found type ${t2.type}`);
      o4.geometry = JSON.stringify(t2.shiftCentralMeridian());
    } catch (s2) {
      n.getLogger(this).error(new s("geoevent-connection", "Encountered an error when setting connection geometryDefinition", s2));
    }
    return e2?.where && "1 = 1" !== e2.where && "1=1" !== e2.where && (o4.where = e2.where), null != t && (o4.outFields = t.join(",")), o4;
  }
  _enrich(e2) {
    if (!this._relatedFeatures) return e2;
    const t = this._serviceDefinition.relatedFeatures.joinField, o4 = e2.attributes[t], s2 = this._relatedFeatures.get(o4);
    if (!s2) return n.getLogger(this).warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e2), e2;
    const {
      attributes: n3,
      geometry: a3
    } = s2;
    for (const r2 in n3) e2.attributes[r2] = n3[r2];
    return a3 && (e2.geometry = a3), e2.geometry || e2.centroid || n.getLogger(this).error(new s("geoevent-connection", "Found malformed feature - no geometry found", e2)), e2;
  }
  _queryBuddyServices() {
    return __async(this, null, function* () {
      try {
        const {
          relatedFeatures: e2,
          keepLatestArchive: t
        } = this._serviceDefinition, r2 = this._queryRelatedFeatures(e2), i = this._queryArchive(t);
        yield r2;
        const o4 = yield i;
        if (!o4) return;
        for (const s2 of o4.features) this.onFeature(this._enrich(s2));
      } catch (e2) {
        n.getLogger(this).error(new s("geoevent-connection", "Encountered an error when querying buddy services", {
          error: e2
        }));
      }
    });
  }
  _queryRelatedFeatures(e2) {
    return __async(this, null, function* () {
      if (!e2) return;
      const t = yield this._queryBuddy(e2.featuresUrl);
      this._addRelatedFeatures(t);
    });
  }
  _queryArchive(e2) {
    return __async(this, null, function* () {
      if (e2) return this._queryBuddy(e2.featuresUrl);
    });
  }
  _queryBuddy(e2) {
    return __async(this, null, function* () {
      const t = new (yield import("./FeatureLayer-IUH5F6QB.js")).default({
        url: e2
      }), {
        capabilities: r2
      } = yield t.load(), i = r2.query.supportsMaxRecordCountFactor, o4 = r2.query.supportsPagination, s2 = r2.query.supportsCentroid, n3 = this._config.maxRecordCountFactor, a3 = t.capabilities.query.maxRecordCount, l = i ? a3 * n3 : a3, h3 = new b();
      if (h3.outFields = this._config.outFields ?? ["*"], h3.where = this._config.filter?.where ?? "1=1", h3.returnGeometry = true, h3.returnExceededLimitFeatures = true, h3.outSpatialReference = f.fromJSON(this._config.spatialReference), s2 && (h3.returnCentroid = true), i && (h3.maxRecordCountFactor = n3), o4) return h3.num = l, t.destroy(), this._queryPages(e2, h3);
      const d3 = yield c(e2, h3, this._config.sourceSpatialReference);
      return t.destroy(), d3.data;
    });
  }
  _queryPages(_0, _1) {
    return __async(this, arguments, function* (e2, t, r2 = [], i = 0) {
      t.start = null != t.num ? i * t.num : null;
      const {
        data: o4
      } = yield c(e2, t, this._config.sourceSpatialReference);
      return o4.exceededTransferLimit && i < (this._config.maxQueryDepth ?? 0) ? (o4.features.forEach((e3) => r2.push(e3)), this._queryPages(e2, t, r2, i + 1)) : (r2.forEach((e3) => o4.features.push(e3)), o4);
    });
  }
  _addRelatedFeatures(e2) {
    const t = /* @__PURE__ */ new Map(), r2 = e2.features, i = this._serviceDefinition.relatedFeatures.joinField;
    for (const o4 of r2) {
      const e3 = o4.attributes[i];
      t.set(e3, o4);
    }
    this._relatedFeatures = t;
  }
};
g = e([a("esri.layers.graphics.sources.connections.GeoEventConnection")], g);
var y3 = g;

// ../../../node_modules/@arcgis/core/layers/support/ClientSideConnection.js
var a2 = class extends n2 {
  constructor(e2) {
    super({}), this.connectionStatus = "connected", this.errorString = null;
    const {
      geometryType: r2,
      spatialReference: t,
      sourceSpatialReference: s2
    } = e2;
    this._featureZScaler = o2(r2, s2, t);
  }
  normalizeCtorArgs() {
    return {};
  }
  updateCustomParameters(e2) {
  }
  sendMessageToSocket(e2) {
  }
  sendMessageToClient(e2) {
    if ("type" in e2) switch (e2.type) {
      case "features":
      case "featureResult":
        for (const r2 of e2.features) null != this._featureZScaler && this._featureZScaler(r2.geometry), this.onFeature(r2);
    }
    this.onMessage(e2);
  }
};
e([y()], a2.prototype, "connectionStatus", void 0), e([y()], a2.prototype, "errorString", void 0), a2 = e([a("esri.layers.support.ClientSideConnection")], a2);

// ../../../node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js
function o3(e2, t) {
  if (null == e2 && null == t) return null;
  const n3 = {};
  return null != t && (n3.geometry = t), null != e2 && (n3.where = e2), n3;
}
function r(r2, i, s2, c3, l, u, a3, m, p) {
  const f2 = {
    source: r2,
    sourceSpatialReference: i,
    spatialReference: s2,
    geometryType: c3,
    filter: o3(l, u),
    maxReconnectionAttempts: a3,
    maxReconnectionInterval: m,
    customParameters: p
  };
  if (!r2) return new a2(f2);
  return r2.path.startsWith("wss://") || r2.path.startsWith("ws://") ? new d(f2) : new y3(f2);
}

export {
  r
};
//# sourceMappingURL=chunk-VUWWHENY.js.map
