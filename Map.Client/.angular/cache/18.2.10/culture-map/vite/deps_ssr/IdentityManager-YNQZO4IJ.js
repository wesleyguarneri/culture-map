import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c as c2
} from "./chunk-HEG4CVDM.js";
import {
  B,
  e2,
  r as r2
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import {
  s as s3
} from "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import {
  A,
  Et,
  F,
  I,
  K,
  T,
  U,
  _,
  a as a2,
  et,
  n,
  r,
  t3 as t2,
  v,
  x
} from "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o as o2
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  L,
  c2 as c,
  m,
  o2 as o
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  l,
  s,
  s2,
  t
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/identity/IdentityModal.js
var c3 = "esri-identity-modal";
var p = {
  base: c3,
  info: `${c3}__info`,
  notice: `${c3}__notice`
};
var d = "ArcGIS Online";
var u = class extends B {
  constructor(t4, e4) {
    super(t4, e4), this.container = document.createElement("div"), this.error = null, this.oAuthPrompt = false, this.open = false, this.signingIn = false, this.server = null, this.resource = null, this._usernameInputNode = null, this._passwordInputNode = null, document.body.appendChild(this.container);
  }
  loadDependencies() {
    return r2({
      button: () => import("./calcite-button-LAMWLR56.js"),
      input: () => import("./calcite-input-WIKYKTSA.js"),
      label: () => import("./calcite-label-7BB63OZC.js"),
      modal: () => import("./calcite-modal-OBAWLRLV.js"),
      notice: () => import("./calcite-notice-GSFPF5BZ.js")
    });
  }
  get title() {
    return this.commonMessages?.auth.signIn;
  }
  render() {
    const {
      open: t4,
      title: e4,
      messages: s7,
      signingIn: o3,
      oAuthPrompt: i3,
      server: n3,
      resource: c4,
      error: u2
    } = this, {
      info: m3,
      oAuthInfo: h,
      lblItem: g,
      invalidUser: b2,
      noAuthService: v2,
      lblUser: y2,
      lblPwd: f2,
      lblCancel: _2,
      lblSigning: I2,
      lblOk: j2
    } = s7;
    return n2("div", {
      class: this.classes(p.base, c2())
    }, n2("form", {
      bind: this,
      onsubmit: this._submit
    }, n2("calcite-modal", {
      bind: this,
      open: t4,
      outsideCloseDisabled: true,
      scale: "s",
      widthScale: "s",
      onCalciteModalClose: this._cancel,
      onCalciteModalOpen: this._focusUsernameInput
    }, n2("div", {
      slot: "header"
    }, e4), n2("div", {
      slot: "content"
    }, n2("div", {
      class: p.info
    }, s3(i3 ? h : m3, {
      server: n3 && /\.arcgis\.com/i.test(n3) ? d : n3,
      resource: `(${c4 || g})`
    })), u2 ? n2("calcite-notice", {
      class: p.notice,
      icon: "exclamation-mark-triangle",
      kind: "danger",
      open: true
    }, n2("div", {
      slot: "message"
    }, u2.details?.httpStatus ? b2 : v2)) : null, i3 ? null : [n2("calcite-label", null, y2, n2("calcite-input", {
      afterCreate: (t5) => this._usernameInputNode = t5,
      autocomplete: "off",
      bind: this,
      name: "username",
      required: true,
      spellcheck: false,
      type: "text",
      value: ""
    })), n2("calcite-label", null, f2, n2("calcite-input", {
      afterCreate: (t5) => this._passwordInputNode = t5,
      bind: this,
      name: "password",
      required: true,
      type: "password",
      value: ""
    }))]), n2("calcite-button", {
      appearance: "outline",
      bind: this,
      onclick: this._cancel,
      slot: "secondary",
      type: "button",
      width: "full"
    }, _2), n2("calcite-button", {
      loading: !!o3,
      slot: "primary",
      type: "submit",
      width: "full"
    }, o3 ? I2 : j2))));
  }
  _focusUsernameInput() {
    requestAnimationFrame(() => {
      this._usernameInputNode?.setFocus();
    });
  }
  _cancel() {
    this._set("signingIn", false), this.open = false, this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(t4) {
    t4.preventDefault(), this._set("signingIn", true);
    const e4 = this.oAuthPrompt ? {} : {
      username: this._usernameInputNode?.value,
      password: this._passwordInputNode?.value
    };
    this.emit("submit", e4);
  }
};
e([y({
  readOnly: true
})], u.prototype, "container", void 0), e([y(), e2("esri/t9n/common")], u.prototype, "commonMessages", void 0), e([y()], u.prototype, "error", void 0), e([y(), e2("esri/identity/t9n/identity")], u.prototype, "messages", void 0), e([y()], u.prototype, "oAuthPrompt", void 0), e([y()], u.prototype, "open", void 0), e([y()], u.prototype, "signingIn", void 0), e([y()], u.prototype, "server", void 0), e([y({
  readOnly: true
})], u.prototype, "title", null), e([y()], u.prototype, "resource", void 0), u = e([a("esri.identity.IdentityModal")], u);
var m2 = u;

// ../../../node_modules/@arcgis/core/identity/OAuthCredential.js
var t3 = "esriJSAPIOAuth";
var e3 = class {
  constructor(t4, e4) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = t4, this.storage = e4, this._init();
  }
  isValid() {
    let t4 = false;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (null == this.expires && this.refreshToken) t4 = true;
      else if (this.expires) {
        const e4 = Date.now();
        if (this.expires > e4) {
          (this.expires - e4) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (t4 = true);
        }
      }
    }
    return t4;
  }
  save() {
    if (!this.storage) return false;
    const e4 = this._load(), s7 = this.oAuthInfo;
    if (s7?.authNamespace && s7.portalUrl) {
      let r4 = e4[s7.authNamespace];
      r4 || (r4 = e4[s7.authNamespace] = {}), this.appId || (this.appId = s7.appId), r4[s7.portalUrl] = {
        appId: this.appId,
        codeVerifier: this.codeVerifier,
        expires: this.expires,
        refreshToken: this.refreshToken,
        ssl: this.ssl,
        stateUID: this.stateUID,
        token: this.token,
        userId: this.userId
      };
      try {
        this.storage.setItem(t3, JSON.stringify(e4));
      } catch (i3) {
        return console.warn(i3), false;
      }
      return true;
    }
    return false;
  }
  destroy() {
    const e4 = this._load(), s7 = this.oAuthInfo;
    if (s7?.appId && s7?.portalUrl && (null == this.expires || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t4 = s7.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", e5 = new FormData();
      if (e5.append("f", "json"), e5.append("auth_token", this.refreshToken || this.token), e5.append("client_id", s7.appId), e5.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), "function" == typeof navigator.sendBeacon) navigator.sendBeacon(t4, e5);
      else {
        const s8 = new XMLHttpRequest();
        s8.open("POST", t4), s8.send(e5);
      }
    }
    if (s7?.authNamespace && s7.portalUrl && this.storage) {
      const r4 = e4[s7.authNamespace];
      if (r4) {
        delete r4[s7.portalUrl];
        try {
          this.storage.setItem(t3, JSON.stringify(e4));
        } catch (i3) {
          console.log(i3);
        }
      }
    }
    s7 && (s7._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t4 = this._load(), e4 = this.oAuthInfo;
    if (e4?.authNamespace && e4.portalUrl) {
      let s7 = t4[e4.authNamespace];
      s7 && (s7 = s7[e4.portalUrl], s7 && (this.appId = s7.appId, this.codeVerifier = s7.codeVerifier, this.expires = s7.expires, this.refreshToken = s7.refreshToken, this.ssl = s7.ssl, this.stateUID = s7.stateUID, this.token = s7.token, this.userId = s7.userId));
    }
  }
  _load() {
    let e4 = {};
    if (this.storage) {
      const i3 = this.storage.getItem(t3);
      if (i3) try {
        e4 = JSON.parse(i3);
      } catch (s7) {
        console.warn(s7);
      }
    }
    return e4;
  }
};
e3.prototype.declaredClass = "esri.identity.OAuthCredential";

// ../../../node_modules/@arcgis/core/identity/OAuthInfo.js
var p2;
var s4 = p2 = class extends f {
  constructor(o3) {
    super(o3), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return p2.fromJSON(this.toJSON());
  }
};
e([y({
  json: {
    write: true
  }
})], s4.prototype, "appId", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "authNamespace", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "expiration", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "flowType", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "forceLogin", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "forceUserId", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "locale", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "minTimeUntilExpiration", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "popup", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "popupCallbackUrl", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "popupWindowFeatures", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "portalUrl", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "preserveUrlHash", void 0), e([y({
  json: {
    write: true
  }
})], s4.prototype, "userId", void 0), s4 = p2 = e([a("esri.identity.OAuthInfo")], s4);
var i = s4;

// ../../../node_modules/@arcgis/core/identity/ServerInfo.js
var i2 = class extends f {
  constructor(o3) {
    super(o3), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
e([y({
  json: {
    write: true
  }
})], i2.prototype, "adminTokenServiceUrl", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "currentVersion", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "hasPortal", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "hasServer", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "owningSystemUrl", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "owningTenant", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "server", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "shortLivedTokenValidity", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "tokenServiceUrl", void 0), e([y({
  json: {
    write: true
  }
})], i2.prototype, "webTierAuth", void 0), i2 = e([a("esri.identity.ServerInfo")], i2);
var s5 = i2;

// ../../../node_modules/@arcgis/core/identity/IdentityManagerBase.js
var R = {};
var C = (e4) => {
  const t4 = new x(e4.owningSystemUrl).host, r4 = new x(e4.server).host, s7 = /.+\.arcgis\.com$/i;
  return s7.test(t4) && s7.test(r4);
};
var b = (e4, t4) => !!(C(e4) && t4 && t4.some((t5) => t5.test(e4.server)));
var D = null;
var q = null;
try {
  D = window.localStorage, q = window.sessionStorage;
} catch {
}
var j = class extends o2 {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appOrigin = "null" !== window.origin ? window.origin : window.location.origin, this._appUrlObj = I(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^/]+\/[^/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{
      regex: /^https?:\/\/www\.arcgis\.com/i,
      customBaseUrl: "maps.arcgis.com",
      tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken"
    }, {
      regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,
      customBaseUrl: "mapsdev.arcgis.com",
      tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken"
    }, {
      regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
      customBaseUrl: "mapsdevext.arcgis.com",
      tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken"
    }, {
      regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,
      customBaseUrl: "mapsqa.arcgis.com",
      tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken"
    }, {
      regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,
      customBaseUrl: "maps.arcgis.com",
      tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken"
    }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi, this._gwUser = /http.+\/users\/([^/]+).*/i, this._gwItem = /http.+\/items\/([^/]+).*/i, this._gwGroup = /http.+\/groups\/([^/]+).*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getPlatformSelfError = null, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e4) => {
      this._pageShowHandler(e4);
    });
  }
  registerServers(e4) {
    const t4 = this.serverInfos;
    t4 ? (e4 = e4.filter((e5) => !this.findServerInfo(e5.server)), this.serverInfos = t4.concat(e4)) : this.serverInfos = e4, e4.forEach((e5) => {
      e5.owningSystemUrl && this._portals.push(e5.owningSystemUrl), e5.hasPortal && this._portals.push(e5.server);
    });
  }
  registerOAuthInfos(e4) {
    const t4 = this.oAuthInfos;
    if (t4) {
      for (const r4 of e4) {
        const e5 = this.findOAuthInfo(r4.portalUrl);
        e5 && t4.splice(t4.indexOf(e5), 1);
      }
      this.oAuthInfos = t4.concat(e4);
    } else this.oAuthInfos = e4;
  }
  registerToken(e4) {
    e4 = __spreadValues({}, e4);
    const t4 = this._sanitizeUrl(e4.server), r4 = this._isServerRsrc(t4);
    let s7, i3 = this.findServerInfo(t4), o3 = true;
    i3 || (i3 = new s5(), i3.server = this._getServerInstanceRoot(t4), r4 ? i3.hasServer = true : (i3.tokenServiceUrl = this._getTokenSvcUrl(t4), i3.hasPortal = true), this.registerServers([i3])), s7 = this._findCredential(t4), s7 ? (delete e4.server, Object.assign(s7, e4), o3 = false) : (s7 = new E({
      userId: e4.userId,
      server: i3.server ?? void 0,
      token: e4.token,
      expires: e4.expires,
      ssl: e4.ssl,
      scope: r4 ? "server" : "portal"
    }), s7.resources = [t4], this.credentials.push(s7)), s7.emitTokenChange(false), o3 || s7.refreshServerTokens();
  }
  toJSON() {
    return l({
      serverInfos: this.serverInfos.map((e4) => e4.toJSON()),
      oAuthInfos: this.oAuthInfos.map((e4) => e4.toJSON()),
      credentials: this.credentials.map((e4) => e4.toJSON())
    });
  }
  initialize(e4) {
    if (!e4) return;
    "string" == typeof e4 && (e4 = JSON.parse(e4));
    const t4 = e4.serverInfos, r4 = e4.oAuthInfos, s7 = e4.credentials;
    if (t4) {
      const e5 = [];
      t4.forEach((t5) => {
        t5.server && t5.tokenServiceUrl && e5.push(t5.declaredClass ? t5 : new s5(t5));
      }), e5.length && this.registerServers(e5);
    }
    if (r4) {
      const e5 = [];
      r4.forEach((t5) => {
        t5.appId && e5.push(t5.declaredClass ? t5 : new i(t5));
      }), e5.length && this.registerOAuthInfos(e5);
    }
    s7 && s7.forEach((e5) => {
      e5.server && e5.token && e5.expires && e5.expires > Date.now() && ((e5 = e5.declaredClass ? e5 : new E(e5)).emitTokenChange(), this.credentials.push(e5));
    });
  }
  findServerInfo(e4) {
    let t4;
    e4 = this._sanitizeUrl(e4);
    for (const r4 of this.serverInfos) if (this._hasSameServerInstance(r4.server, e4)) {
      t4 = r4;
      break;
    }
    return t4;
  }
  findOAuthInfo(e4) {
    let t4;
    e4 = this._sanitizeUrl(e4);
    for (const r4 of this.oAuthInfos) if (this._hasSameServerInstance(r4.portalUrl, e4)) {
      t4 = r4;
      break;
    }
    return t4;
  }
  findCredential(e4, t4) {
    if (!e4) return;
    let r4;
    e4 = this._sanitizeUrl(e4);
    const s7 = this._isServerRsrc(e4) ? "server" : "portal";
    if (t4) {
      for (const i3 of this.credentials) if (this._hasSameServerInstance(i3.server, e4) && t4 === i3.userId && i3.scope === s7) {
        r4 = i3;
        break;
      }
    } else for (const i3 of this.credentials) if (this._hasSameServerInstance(i3.server, e4) && -1 !== this._getIdenticalSvcIdx(e4, i3) && i3.scope === s7) {
      r4 = i3;
      break;
    }
    return r4;
  }
  getCredential(e4, t4) {
    let r4, s7, o3 = true;
    t4 && (r4 = !!t4.token, s7 = t4.error, o3 = false !== t4.prompt), t4 = __spreadValues({}, t4), e4 = this._sanitizeUrl(e4);
    const n3 = new AbortController(), a3 = L();
    if (t4.signal && m(t4.signal, () => {
      n3.abort();
    }), m(n3, () => {
      a3.reject(new s2("identity-manager:user-aborted", "ABORTED"));
    }), c(n3)) return a3.promise;
    t4.signal = n3.signal;
    const h = this._isAdminResource(e4), u2 = r4 ? this.findCredential(e4) : null;
    let _2;
    if (u2 && s7 && s7.details && 498 === s7.details.httpStatus) u2.destroy();
    else if (u2) return _2 = new s2("identity-manager:not-authorized", "You are currently signed in as: '" + u2.userId + "'. You do not have access to this resource: " + e4, {
      error: s7
    }), a3.reject(_2), a3.promise;
    const f2 = this._findCredential(e4, t4);
    if (f2) return a3.resolve(f2), a3.promise;
    let g = this.findServerInfo(e4);
    if (g) !g.hasPortal && g.server && g.owningSystemUrl && this._hasSameServerInstance(g.server, g.owningSystemUrl) && (g.hasPortal = true), !g.hasServer && this._isServerRsrc(e4) && (g._restInfoPms = this._getTokenSvcUrl(e4), g.hasServer = true);
    else {
      const t5 = this._getTokenSvcUrl(e4);
      if (!t5) return _2 = new s2("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), a3.reject(_2), a3.promise;
      g = new s5(), g.server = this._getServerInstanceRoot(e4), "string" == typeof t5 ? (g.tokenServiceUrl = t5, g.hasPortal = true) : (g._restInfoPms = t5, g.hasServer = true), this.registerServers([g]);
    }
    return g.hasPortal && void 0 === g._selfReq && (o3 || F(g.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((e5) => e5.tokenServiceUrl === g.tokenServiceUrl)) && (g._selfReq = {
      owningTenant: t4?.owningTenant,
      selfDfd: this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e4)
    }), this._enqueue(e4, g, t4, a3, h);
  }
  getResourceName(e4) {
    return this._isRESTService(e4) ? e4.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e4) && e4.replace(this._gwUser, "$1") || this._gwItem.test(e4) && e4.replace(this._gwItem, "$1") || this._gwGroup.test(e4) && e4.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e4, t4, r4) {
    const o3 = this._rePortalTokenSvc.test(e4.tokenServiceUrl), n3 = new x(this._appOrigin), a3 = e4.shortLivedTokenValidity;
    let h, l2, c4, d2, u2, f2, g, m3;
    t4 && (m3 = this.tokenValidity || a3 || this._defaultTokenValidity, m3 > a3 && a3 > 0 && (m3 = a3)), r4 && (h = r4.isAdmin, l2 = r4.serverUrl, c4 = r4.token, f2 = r4.signal, g = r4.ssl, e4.customParameters = r4.customParameters), h ? d2 = e4.adminTokenServiceUrl : (d2 = e4.tokenServiceUrl, u2 = new x(d2.toLowerCase()), e4.webTierAuth && r4?.serverUrl && !g && "http" === n3.scheme && (F(n3.uri, d2, true) || "https" === u2.scheme && n3.host === u2.host && "7080" === n3.port && "7443" === u2.port) && (d2 = d2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v2 = __spreadValues({
      query: __spreadValues({
        request: "getToken",
        username: t4?.username,
        password: t4?.password,
        serverUrl: l2,
        token: c4,
        expiration: m3,
        referer: h || o3 ? this._appOrigin : null,
        client: h ? "referer" : null,
        f: "json"
      }, e4.customParameters),
      method: "post",
      authMode: "anonymous",
      useProxy: this._useProxy(e4, r4),
      signal: f2
    }, r4?.ioArgs);
    o3 || (v2.withCredentials = false);
    return U(d2, v2).then((r5) => {
      const s7 = r5.data;
      if (!s7?.token) return new s2("identity-manager:authentication-failed", "Unable to generate token");
      const o4 = e4.server;
      return R[o4] || (R[o4] = {}), t4 && (R[o4][t4.username] = t4.password), s7.validity = m3, s7;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e4) {
    return __async(this, null, function* () {
      return (yield this.checkAppAccess(e4, "")).credential;
    });
  }
  checkAppAccess(e4, t4, r4) {
    let o3 = false;
    return this.getCredential(e4, {
      prompt: false
    }).then((n3) => {
      let a3;
      const h = {
        f: "json"
      };
      if ("portal" === n3.scope) {
        if (t4 && (this._doPortalSignIn(e4) || r4?.force)) a3 = n3.server + "/sharing/rest/oauth2/validateAppAccess", h.client_id = t4;
        else {
          if (!n3.token) return {
            credential: n3
          };
          a3 = n3.server + "/sharing/rest";
        }
      } else {
        if (!n3.token) return {
          credential: n3
        };
        a3 = n3.server + "/rest/services";
      }
      return n3.token && (h.token = n3.token), U(a3, {
        query: h,
        authMode: "anonymous"
      }).then((e5) => {
        if (false === e5.data.valid) throw new s2("identity-manager:not-authorized", `You are currently signed in as: '${n3.userId}'.`, e5.data);
        return o3 = !!e5.data.viewOnlyUserTypeApp, {
          credential: n3
        };
      }).catch((e5) => {
        if ("identity-manager:not-authorized" === e5.name) throw e5;
        const t5 = e5.details?.httpStatus;
        if (498 === t5) throw n3.destroy(), new s2("identity-manager:not-authenticated", "User is not signed in.");
        if (400 === t5) throw new s2("identity-manager:invalid-request");
        return {
          credential: n3
        };
      });
    }).then((e5) => ({
      credential: e5.credential,
      viewOnly: o3
    }));
  }
  setOAuthResponseHash(e4) {
    e4 && ("#" === e4.charAt(0) && (e4 = e4.substring(1)), this._processOAuthPopupParams(A(e4)));
  }
  setOAuthRedirectionHandler(e4) {
    this._oAuthRedirectFunc = e4;
  }
  setProtocolErrorHandler(e4) {
    this._protocolFunc = e4;
  }
  signIn(e4, t4, r4 = {}) {
    const s7 = L(), o3 = () => {
      h?.remove(), d2?.remove(), this.dialog?.destroy(), this.dialog = h = d2 = null;
    }, n3 = () => {
      o3(), this._oAuthDfd = null, s7.reject(new s2("identity-manager:user-aborted", "ABORTED"));
    };
    r4.signal && m(r4.signal, () => {
      n3();
    });
    const a3 = new m2({
      open: true,
      resource: this.getResourceName(e4),
      server: t4.server
    });
    this.dialog = a3, this.emit("dialog-create");
    let h = a3.on("cancel", n3), d2 = a3.on("submit", (e5) => {
      this.generateToken(t4, e5, {
        isAdmin: r4.isAdmin,
        signal: r4.signal
      }).then((i3) => {
        o3();
        const n4 = new E({
          userId: e5.username,
          server: t4.server ?? void 0,
          token: i3.token,
          expires: null != i3.expires ? Number(i3.expires) : null,
          ssl: !!i3.ssl,
          isAdmin: r4.isAdmin,
          validity: i3.validity
        });
        s7.resolve(n4);
      }).catch((e6) => {
        a3.error = e6, a3.signingIn = false;
      });
    });
    return s7.promise;
  }
  oAuthSignIn(e4, t4, r4, s7) {
    this._oAuthDfd = L();
    const o3 = this._oAuthDfd;
    let n3;
    s7?.signal && m(s7.signal, () => {
      const e5 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e5 && !e5.closed ? e5.close() : this.dialog && u2();
    }), o3.resUrl_ = e4, o3.sinfo_ = t4, o3.oinfo_ = r4;
    const a3 = r4._oAuthCred;
    if (a3.storage && ("authorization-code" === r4.flowType || "auto" === r4.flowType && t4.currentVersion >= 8.4)) {
      let e5 = crypto.getRandomValues(new Uint8Array(32));
      n3 = et(e5), a3.codeVerifier = n3, e5 = crypto.getRandomValues(new Uint8Array(32)), a3.stateUID = et(e5), a3.save() || (a3.codeVerifier = n3 = null);
    } else a3.codeVerifier = null;
    let h, d2;
    this._getCodeChallenge(n3).then((i3) => {
      const o4 = !s7 || false !== s7.oAuthPopupConfirmation;
      if (!r4.popup || !o4) return void this._doOAuthSignIn(e4, t4, r4, i3);
      const n4 = new m2({
        oAuthPrompt: true,
        server: t4.server,
        open: true
      });
      this.dialog = n4, this.emit("dialog-create"), h = n4.on("cancel", u2), d2 = n4.on("submit", () => {
        p3(), this._doOAuthSignIn(e4, t4, r4, i3);
      });
    });
    const u2 = () => {
      p3(), this._oAuthDfd = null, o3.reject(new s2("identity-manager:user-aborted", "ABORTED"));
    }, p3 = () => {
      h?.remove(), d2?.remove(), this.dialog?.destroy(), this.dialog = null;
    };
    return o3.promise;
  }
  destroyCredentials() {
    if (this.credentials) {
      this.credentials.slice().forEach((e4) => {
        e4.destroy();
      });
    }
    this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e4 = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = o(window, "message", (t4) => {
      if ((t4.origin === this._appOrigin || t4.origin.endsWith(".arcgis.com")) && "arcgis:auth:requestCredential" === t4.data?.type) {
        const r4 = t4.source;
        this.getCredential(e4).then((e5) => {
          r4.postMessage({
            type: "arcgis:auth:credential",
            credential: {
              expires: e5.expires,
              server: e5.server,
              ssl: e5.ssl,
              token: e5.token,
              userId: e5.userId
            }
          }, t4.origin);
        }).catch((e5) => {
          r4.postMessage({
            type: "arcgis:auth:error",
            error: {
              name: e5.name,
              message: e5.message
            }
          }, t4.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    let e4 = window.location.hash;
    if (e4) {
      "#" === e4.charAt(0) && (e4 = e4.substring(1));
      const t5 = A(e4);
      let r4 = false;
      if (t5.access_token && t5.expires_in && t5.state && t5.hasOwnProperty("username")) try {
        t5.state = JSON.parse(t5.state), t5.state.portalUrl && (this._oAuthLocationParams = t5, r4 = true);
      } catch {
      }
      else if (t5.error && t5.error_description && (console.log("IdentityManager OAuth Error: ", t5.error, " - ", t5.error_description), "access_denied" === t5.error && (r4 = true, t5.state))) try {
        t5.state = JSON.parse(t5.state);
      } catch {
      }
      r4 && (window.location.hash = t5.state?.hash || "");
    }
    let t4 = window.location.search;
    if (t4) {
      "?" === t4.charAt(0) && (t4 = t4.substring(1));
      const e5 = A(t4);
      let r4 = false;
      if (e5.code && e5.state) try {
        e5.state = JSON.parse(e5.state), e5.state.portalUrl && e5.state.uid && (this._oAuthLocationParams = e5, r4 = true);
      } catch {
      }
      else if (e5.error && e5.error_description && (console.log("IdentityManager OAuth Error: ", e5.error, " - ", e5.error_description), "access_denied" === e5.error && (r4 = true, e5.state))) try {
        e5.state = JSON.parse(e5.state);
      } catch {
      }
      if (r4) {
        const t5 = __spreadValues({}, e5);
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((e6) => {
          delete t5[e6];
        });
        const r5 = v(t5), s7 = window.location.pathname + (r5 ? `?${r5}` : "") + (e5.state?.hash || "");
        window.history.replaceState(window.history.state, "", s7);
      }
    }
  }
  _getOAuthToken(e4, t4, r4, i3, o3) {
    return e4 = e4.replace(/^http:/i, "https:"), U(`${e4}/sharing/rest/oauth2/token`, {
      authMode: "anonymous",
      method: "post",
      query: i3 && o3 ? {
        grant_type: "authorization_code",
        code: t4,
        redirect_uri: i3,
        client_id: r4,
        code_verifier: o3
      } : {
        grant_type: "refresh_token",
        refresh_token: t4,
        client_id: r4
      }
    }).then((e5) => e5.data);
  }
  _getCodeChallenge(e4) {
    return __async(this, null, function* () {
      if (e4 && globalThis.isSecureContext) {
        const t4 = new TextEncoder().encode(e4), r4 = yield crypto.subtle.digest("SHA-256", t4);
        return et(new Uint8Array(r4));
      }
      return null;
    });
  }
  _pageShowHandler(e4) {
    if (e4.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const e5 = new s2("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(e5);
    }
  }
  _findCredential(e4, t4) {
    let r4, s7, i3, o3, n3 = -1;
    const a3 = t4?.token, h = t4?.resource, l2 = this._isServerRsrc(e4) ? "server" : "portal", c4 = this.credentials.filter((t5) => this._hasSameServerInstance(t5.server, e4) && t5.scope === l2);
    if (e4 = h || e4, c4.length) if (1 === c4.length) {
      if (r4 = c4[0], i3 = this.findServerInfo(r4.server), s7 = i3?.owningSystemUrl, o3 = s7 ? this.findCredential(s7, r4.userId) : void 0, n3 = this._getIdenticalSvcIdx(e4, r4), !a3) return -1 === n3 && r4.resources.push(e4), this._addResource(e4, o3), r4;
      -1 !== n3 && (r4.resources.splice(n3, 1), this._removeResource(e4, o3));
    } else {
      let t5, r5;
      if (c4.some((a4) => (r5 = this._getIdenticalSvcIdx(e4, a4), -1 !== r5 && (t5 = a4, i3 = this.findServerInfo(t5.server), s7 = i3?.owningSystemUrl, o3 = s7 ? this.findCredential(s7, t5.userId) : void 0, n3 = r5, true))), a3) t5 && (t5.resources.splice(n3, 1), this._removeResource(e4, o3));
      else if (t5) return this._addResource(e4, o3), t5;
    }
  }
  _findOAuthInfo(e4) {
    let t4 = this.findOAuthInfo(e4);
    if (!t4) {
      for (const r4 of this.oAuthInfos) if (this._isIdProvider(r4.portalUrl, e4)) {
        t4 = r4;
        break;
      }
    }
    return t4;
  }
  _addResource(e4, t4) {
    t4 && -1 === this._getIdenticalSvcIdx(e4, t4) && t4.resources.push(e4);
  }
  _removeResource(e4, t4) {
    let r4 = -1;
    t4 && (r4 = this._getIdenticalSvcIdx(e4, t4), r4 > -1 && t4.resources.splice(r4, 1));
  }
  _useProxy(e4, t4) {
    return t4?.isAdmin && !F(e4.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e4.tokenServiceUrl) && "10.1" === String(e4.currentVersion) && !F(e4.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e4) {
    const t4 = new x(e4);
    return t4.scheme + "://" + t4.host + (null != t4.port ? ":" + t4.port : "");
  }
  _getServerInstanceRoot(e4) {
    const t4 = e4.toLowerCase();
    let r4 = t4.indexOf(this._agsRest);
    return -1 === r4 && this._isAdminResource(e4) && (r4 = this._agsAdmin.test(e4) ? e4.replace(this._agsAdmin, "$1").length : e4.search(this._adminSvcs)), -1 !== r4 || a2(t4) || (r4 = t4.indexOf("/sharing")), -1 === r4 && t4.endsWith("/") && (r4 = t4.length - 1), r4 > -1 ? e4.substring(0, r4) : e4;
  }
  _hasSameServerInstance(e4, t4) {
    return e4.endsWith("/") && (e4 = e4.slice(0, -1)), e4 = e4.toLowerCase(), t4 = this._getServerInstanceRoot(t4).toLowerCase(), e4 = r(e4), t4 = r(t4), (e4 = e4.substring(e4.indexOf(":"))) === (t4 = t4.substring(t4.indexOf(":")));
  }
  _sanitizeUrl(e4) {
    const r4 = (s.request.proxyUrl || "").toLowerCase(), s7 = r4 ? e4.toLowerCase().indexOf(r4 + "?") : -1;
    return -1 !== s7 && (e4 = e4.substring(s7 + r4.length + 1)), e4 = K(e4), I(e4).path;
  }
  _isRESTService(e4) {
    return e4.includes(this._agsRest);
  }
  _isAdminResource(e4) {
    return this._agsAdmin.test(e4) || this._adminSvcs.test(e4);
  }
  _isServerRsrc(e4) {
    return this._isRESTService(e4) || this._isAdminResource(e4);
  }
  _isIdenticalService(e4, t4) {
    let r4 = false;
    if (this._isRESTService(e4) && this._isRESTService(t4)) {
      const s7 = this._getSuffix(e4).toLowerCase(), i3 = this._getSuffix(t4).toLowerCase();
      if (r4 = s7 === i3, !r4) {
        const e5 = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r4 = s7.replaceAll(e5, "$1") === i3.replaceAll(e5, "$1");
      }
    } else this._isAdminResource(e4) && this._isAdminResource(t4) ? r4 = true : this._isServerRsrc(e4) || this._isServerRsrc(t4) || !this._isPortalDomain(e4) || (r4 = true);
    return r4;
  }
  _isPortalDomain(e4) {
    const r4 = new x(e4.toLowerCase()), s7 = this._portalConfig;
    let i3 = this._gwDomains.some((e5) => e5.regex.test(r4.uri));
    return !i3 && s7 && (i3 = this._hasSameServerInstance(this._getServerInstanceRoot(s7.restBaseUrl), r4.uri)), i3 || s.portalUrl && (i3 = F(r4, s.portalUrl, true)), i3 || (i3 = this._portals.some((e5) => this._hasSameServerInstance(e5, r4.uri))), i3 = i3 || this._agsPortal.test(r4.path), i3;
  }
  _isIdProvider(e4, t4) {
    let r4 = -1, s7 = -1;
    this._gwDomains.forEach((i4, o3) => {
      -1 === r4 && i4.regex.test(e4) && (r4 = o3), -1 === s7 && i4.regex.test(t4) && (s7 = o3);
    });
    let i3 = false;
    if (r4 > -1 && s7 > -1 && (0 === r4 || 4 === r4 ? 0 !== s7 && 4 !== s7 || (i3 = true) : 1 === r4 ? 1 !== s7 && 2 !== s7 || (i3 = true) : 2 === r4 ? 2 === s7 && (i3 = true) : 3 === r4 && 3 === s7 && (i3 = true)), !i3) {
      const r5 = this.findServerInfo(t4), s8 = r5?.owningSystemUrl;
      s8 && C(r5) && this._isPortalDomain(s8) && this._isIdProvider(e4, s8) && (i3 = true);
    }
    return i3;
  }
  _getIdenticalSvcIdx(e4, t4) {
    let r4 = -1;
    for (let s7 = 0; s7 < t4.resources.length; s7++) {
      const i3 = t4.resources[s7];
      if (this._isIdenticalService(e4, i3)) {
        r4 = s7;
        break;
      }
    }
    return r4;
  }
  _getSuffix(e4) {
    return e4.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e4) {
    let t4, r4, i3;
    if (this._isRESTService(e4) || this._isAdminResource(e4)) {
      const i4 = this._getServerInstanceRoot(e4);
      return t4 = i4 + "/admin/generateToken", r4 = U(e4 = i4 + "/rest/info", {
        query: {
          f: "json"
        }
      }).then((e5) => e5.data), {
        adminUrl: t4,
        promise: r4
      };
    }
    if (this._isPortalDomain(e4)) {
      let t5 = "";
      if (this._gwDomains.some((r5) => (r5.regex.test(e4) && (t5 = r5.tokenServiceUrl), !!t5)), t5 || this._portals.some((r5) => (this._hasSameServerInstance(r5, e4) && (t5 = r5 + this._gwTokenUrl), !!t5)), t5 || (i3 = e4.toLowerCase().indexOf("/sharing"), -1 !== i3 && (t5 = e4.substring(0, i3) + this._gwTokenUrl)), t5 || (t5 = this._getOrigin(e4) + this._gwTokenUrl), t5) {
        const r5 = new x(e4).port;
        /^http:\/\//i.test(e4) && "7080" === r5 && (t5 = t5.replace(/:7080/i, ":7443")), t5 = t5.replace(/http:/i, "https:");
      }
      return t5;
    }
  }
  _processOAuthResponseParams(e4, t4, r4) {
    const s7 = t4._oAuthCred;
    if (e4.code) {
      const i4 = s7.codeVerifier;
      return s7.codeVerifier = null, s7.stateUID = null, s7.save(), this._getOAuthToken(r4.server, e4.code, t4.appId, this._getRedirectURI(t4, true), i4).then((i5) => {
        const o3 = new E({
          userId: i5.username,
          server: r4.server ?? void 0,
          token: i5.access_token,
          expires: Date.now() + 1e3 * i5.expires_in,
          ssl: i5.ssl,
          oAuthState: e4.state,
          _oAuthCred: s7
        });
        return t4.userId = o3.userId, s7.storage = i5.persist ? D : q, s7.refreshToken = i5.refresh_token, s7.token = null, s7.expires = i5.refresh_token_expires_in ? Date.now() + 1e3 * i5.refresh_token_expires_in : null, s7.userId = o3.userId, s7.ssl = o3.ssl, s7.save(), o3;
      });
    }
    const i3 = new E({
      userId: e4.username,
      server: r4.server ?? void 0,
      token: e4.access_token,
      expires: Date.now() + 1e3 * Number(e4.expires_in),
      ssl: "true" === e4.ssl,
      oAuthState: e4.state,
      _oAuthCred: s7
    });
    return t4.userId = i3.userId, s7.storage = e4.persist ? D : q, s7.refreshToken = null, s7.token = i3.token, s7.expires = i3.expires, s7.userId = i3.userId, s7.ssl = i3.ssl, s7.save(), Promise.resolve(i3);
  }
  _processOAuthPopupParams(e4) {
    const t4 = this._oAuthDfd;
    if (this._oAuthDfd = null, t4) if (clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle?.remove(), e4.error) {
      const r4 = "access_denied" === e4.error, s7 = new s2(r4 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", r4 ? "ABORTED" : "OAuth: " + e4.error + " - " + e4.error_description);
      t4.reject(s7);
    } else this._processOAuthResponseParams(e4, t4.oinfo_, t4.sinfo_).then((e5) => {
      t4.resolve(e5);
    }).catch((e5) => {
      t4.reject(e5);
    });
  }
  _setOAuthResponseQueryString(e4) {
    e4 && ("?" === e4.charAt(0) && (e4 = e4.substring(1)), this._processOAuthPopupParams(A(e4)));
  }
  _exchangeToken(e4, t4, r4) {
    return __async(this, null, function* () {
      return (yield U(`${e4}/sharing/rest/oauth2/exchangeToken`, {
        authMode: "anonymous",
        method: "post",
        query: {
          f: "json",
          client_id: t4,
          token: r4
        }
      })).data.token;
    });
  }
  _getPlatformSelf(e4, t4) {
    return __async(this, null, function* () {
      if (this._getPlatformSelfError && Date.now() - this._getPlatformSelfError[1] < 1e3) throw this._getPlatformSelfError[0];
      e4 = e4.replace(/^http:/i, "https:");
      try {
        const r4 = yield U(`${e4}/sharing/rest/oauth2/platformSelf`, {
          authMode: "anonymous",
          headers: {
            "X-Esri-Auth-Client-Id": t4,
            "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "")
          },
          method: "post",
          query: {
            f: "json",
            expiration: 30
          },
          withCredentials: true
        });
        return this._getPlatformSelfError = null, r4.data;
      } catch (r4) {
        throw "OAUTH_0066" === r4.details?.messageCode && (this._getPlatformSelfError = [r4, Date.now()]), r4;
      }
    });
  }
  _getPortalSelf(e4, t4) {
    let r4;
    if (this._gwDomains.some((t5) => (t5.regex.test(e4) && (r4 = t5.customBaseUrl), !!r4)), r4) return Promise.resolve({
      allSSL: true,
      currentVersion: "8.4",
      customBaseUrl: r4,
      portalMode: "multitenant",
      supportsOAuth: true
    });
    this._appOrigin.startsWith("https:") ? e4 = e4.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t4) && (e4 = e4.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return U(e4, {
      query: {
        f: "json"
      },
      authMode: "anonymous",
      withCredentials: true
    }).then((e5) => e5.data);
  }
  _doPortalSignIn(e4) {
    const t4 = this._portalConfig, r4 = window.location.href, s7 = this.findServerInfo(e4);
    return !(!t4 && !this._isPortalDomain(r4) || !(s7 ? s7.hasPortal || s7.owningSystemUrl && this._isPortalDomain(s7.owningSystemUrl) : this._isPortalDomain(e4)) || !(this._isIdProvider(r4, e4) || t4 && (this._hasSameServerInstance(this._getServerInstanceRoot(t4.restBaseUrl), e4) || this._isIdProvider(t4.restBaseUrl, e4)) || F(r4, e4, true)));
  }
  _checkProtocol(e4, t4, r4, s7) {
    let o3 = true;
    const n3 = s7 ? t4.adminTokenServiceUrl : t4.tokenServiceUrl;
    if (n3.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && T(n3) && (o3 = !!this._protocolFunc && !!this._protocolFunc({
      resourceUrl: e4,
      serverInfo: t4
    }), !o3)) {
      r4(new s2("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return o3;
  }
  _enqueue(e4, t4, r4, s7, i3, o3) {
    return s7 || (s7 = L()), s7.resUrl_ = e4, s7.sinfo_ = t4, s7.options_ = r4, s7.admin_ = i3, s7.refresh_ = o3, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e4), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s7)) : this._xoReqs.push(s7) : this._doSignIn(s7), s7.promise;
  }
  _doSignIn(e4) {
    this._busy = e4, this._rejectOnPersistedPageShow = false;
    const t4 = (t5) => {
      const r5 = e4.options_?.resource, s8 = e4.resUrl_, i3 = e4.refresh_;
      let o4 = false;
      this.credentials.includes(t5) || (i3 && this.credentials.includes(i3) ? (i3.userId = t5.userId, i3.token = t5.token, i3.expires = t5.expires, i3.validity = t5.validity, i3.ssl = t5.ssl, i3.creationTime = t5.creationTime, o4 = true, t5 = i3) : this.credentials.push(t5)), t5.resources || (t5.resources = []), t5.resources.includes(r5 || s8) || t5.resources.push(r5 || s8), t5.scope = this._isServerRsrc(s8) ? "server" : "portal", t5.emitTokenChange();
      const n3 = this._soReqs, a4 = {};
      this._soReqs = [], n3.forEach((e5) => {
        if (!this._isIdenticalService(s8, e5.resUrl_)) {
          const r6 = this._getSuffix(e5.resUrl_);
          a4[r6] || (a4[r6] = true, t5.resources.push(e5.resUrl_));
        }
      }), e4.resolve(t5), n3.forEach((e5) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(s8), e5.resUrl_) ? e5.resolve(t5) : this._soReqs.push(e5);
      }), this._busy = e4.resUrl_ = e4.sinfo_ = e4.refresh_ = null, o4 || this.emit("credential-create", {
        credential: t5
      }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r4 = (t5) => {
      e4.reject(t5), this._busy = e4.resUrl_ = e4.sinfo_ = e4.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s7 = (o4, a4, h, l3) => {
      const d3 = e4.sinfo_, u2 = !e4.options_ || false !== e4.options_.prompt, _2 = d3.hasPortal && this._findOAuthInfo(e4.resUrl_);
      let f2, g;
      if (o4) t4(new E({
        userId: o4,
        server: d3.server ?? void 0,
        token: h ?? void 0,
        expires: null != l3 ? Number(l3) : null,
        ssl: !!a4
      }));
      else if (window !== window.parent && this._appUrlObj.query?.["arcgis-auth-origin"] && this._appUrlObj.query?.["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e4.resUrl_)) {
        window.parent.postMessage({
          type: "arcgis:auth:requestCredential"
        }, this._appUrlObj.query["arcgis-auth-origin"]);
        const s8 = o(window, "message", (e5) => {
          e5.source === window.parent && e5.data && ("arcgis:auth:credential" === e5.data.type ? (s8.remove(), e5.data.credential.expires < Date.now() ? r4(new s2("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t4(new E(e5.data.credential))) : "arcgis:auth:error" === e5.data.type && (s8.remove(), "tokenExpiredError" === e5.data.error.name ? r4(new s2("identity-manager:credential-request-failed", "Parent application's token has expired.")) : r4(s2.fromJSON(e5.data.error))));
        });
        m(e4.options_?.signal, () => {
          s8.remove();
        });
      } else if (_2) {
        let o5 = _2._oAuthCred;
        if (!o5) {
          const e5 = new e3(_2, D), t5 = new e3(_2, q);
          e5.isValid() && t5.isValid() ? e5.expires > t5.expires ? (o5 = e5, t5.destroy()) : (o5 = t5, e5.destroy()) : o5 = e5.isValid() ? e5 : t5, _2._oAuthCred = o5;
        }
        if (o5.isValid()) {
          f2 = new E({
            userId: o5.userId ?? void 0,
            server: d3.server ?? void 0,
            token: o5.token ?? void 0,
            expires: o5.expires,
            ssl: o5.ssl ?? void 0,
            _oAuthCred: o5
          });
          const r5 = _2.appId !== o5.appId && this._doPortalSignIn(e4.resUrl_);
          r5 || o5.refreshToken ? (e4._pendingDfd = o5.refreshToken ? this._getOAuthToken(d3.server, o5.refreshToken, o5.appId).then((e5) => (f2.expires = Date.now() + 1e3 * e5.expires_in, f2.token = e5.access_token, f2)) : Promise.resolve(f2), e4._pendingDfd.then((e5) => r5 ? this._exchangeToken(e5.server, _2.appId, e5.token).then((t5) => (e5.token = t5, e5)).catch(() => e5) : e5).then((e5) => {
            t4(e5);
          }).catch(() => {
            o5?.destroy(), s7();
          })) : t4(f2);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(_2.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === o5.stateUID && o5.codeVerifier)) {
          const s8 = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e4._pendingDfd = this._processOAuthResponseParams(s8, _2, d3).then((e5) => {
            t4(e5);
          }).catch(r4);
        } else {
          const s8 = () => {
            u2 ? e4._pendingDfd = this.oAuthSignIn(e4.resUrl_, d3, _2, e4.options_).then(t4, r4) : (g = new s2("identity-manager:not-authenticated", "User is not signed in."), r4(g));
          };
          this._doPortalSignIn(e4.resUrl_) ? e4._pendingDfd = this._getPlatformSelf(d3.server, _2.appId).then((e5) => {
            F(e5.portalUrl, this._appOrigin, true) ? (f2 = new E({
              userId: e5.username,
              server: d3.server ?? void 0,
              expires: Date.now() + 1e3 * e5.expires_in,
              token: e5.token
            }), t4(f2)) : s8();
          }).catch(s8) : s8();
        }
      } else if (u2) {
        if (this._checkProtocol(e4.resUrl_, d3, r4, e4.admin_)) {
          let s8 = e4.options_;
          e4.admin_ && (s8 = s8 || {}, s8.isAdmin = true), e4._pendingDfd = this.signIn(e4.resUrl_, d3, s8).then(t4, r4);
        }
      } else g = new s2("identity-manager:not-authenticated", "User is not signed in."), r4(g);
    }, o3 = () => {
      const s8 = e4.sinfo_, i3 = s8.owningSystemUrl, o4 = e4.options_;
      let n3, a4, h, l3;
      if (o4 && (n3 = o4.token, a4 = o4.error, h = o4.prompt), l3 = this._findCredential(i3, {
        token: n3,
        resource: e4.resUrl_
      }), !l3) {
        for (const e5 of this.credentials) if (this._isIdProvider(i3, e5.server)) {
          l3 = e5;
          break;
        }
      }
      if (l3) {
        const i4 = this.findCredential(e4.resUrl_, l3.userId);
        if (i4) t4(i4);
        else if (b(s8, this._legacyFed)) {
          const e5 = l3.toJSON();
          e5.server = s8.server, e5.resources = null, t4(new E(e5));
        } else {
          (e4._pendingDfd = this.generateToken(this.findServerInfo(l3.server), null, {
            serverUrl: e4.resUrl_,
            token: l3.token,
            signal: e4.options_.signal,
            ssl: l3.ssl
          })).then((r5) => {
            t4(new E({
              userId: l3?.userId,
              server: s8.server ?? void 0,
              token: r5.token,
              expires: null != r5.expires ? Number(r5.expires) : null,
              ssl: !!r5.ssl,
              isAdmin: e4.admin_,
              validity: r5.validity
            }));
          }, r4);
        }
      } else {
        this._busy = null, n3 && (e4.options_.token = null);
        (e4._pendingDfd = this.getCredential(i3.replace(/\/?$/, "/sharing"), {
          resource: e4.resUrl_,
          owningTenant: s8.owningTenant,
          signal: e4.options_.signal,
          token: n3,
          error: a4,
          prompt: h
        })).then(() => {
          this._enqueue(e4.resUrl_, e4.sinfo_, e4.options_, e4, e4.admin_);
        }, (t5) => {
          e4.resUrl_ = e4.sinfo_ = e4.refresh_ = null, e4.reject(t5);
        });
      }
    };
    this._errbackFunc = r4;
    const a3 = e4.sinfo_.owningSystemUrl, l2 = this._isServerRsrc(e4.resUrl_), d2 = e4.sinfo_._restInfoPms;
    d2 ? d2.promise.then((t5) => {
      const r5 = e4.sinfo_;
      if (r5._restInfoPms) {
        r5.adminTokenServiceUrl = r5._restInfoPms.adminUrl, r5._restInfoPms = null, r5.tokenServiceUrl = (t("authInfo.tokenServicesUrl", t5) || t("authInfo.tokenServiceUrl", t5) || t("tokenServiceUrl", t5)) ?? null, r5.shortLivedTokenValidity = t("authInfo.shortLivedTokenValidity", t5) ?? null, r5.currentVersion = t5.currentVersion, r5.owningTenant = t5.owningTenant;
        const e5 = r5.owningSystemUrl = t5.owningSystemUrl;
        e5 && this._portals.push(e5);
      }
      l2 && r5.owningSystemUrl ? o3() : s7();
    }, () => {
      e4.sinfo_._restInfoPms = null;
      const t5 = new s2("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      r4(t5);
    }) : l2 && a3 ? o3() : e4.sinfo_._selfReq ? e4.sinfo_._selfReq.selfDfd.then((t5) => {
      const r5 = {};
      let s8, i3, o4, n3;
      return t5 && (s8 = t5.user?.username, r5.username = s8, r5.allSSL = t5.allSSL, i3 = t5.supportsOAuth, n3 = parseFloat(t5.currentVersion), "multitenant" === t5.portalMode && (o4 = t5.customBaseUrl), e4.sinfo_.currentVersion = n3), e4.sinfo_.webTierAuth = !!s8, s8 && this.normalizeWebTierAuth ? this.generateToken(e4.sinfo_, null, {
        ssl: r5.allSSL
      }).catch(() => null).then((e5) => (r5.portalToken = e5?.token, r5.tokenExpiration = e5?.expires, r5)) : !s8 && i3 && n3 >= 4.4 && !this._findOAuthInfo(e4.resUrl_) ? this._generateOAuthInfo({
        portalUrl: e4.sinfo_.server,
        customBaseUrl: o4,
        owningTenant: e4.sinfo_._selfReq.owningTenant
      }).catch(() => null).then(() => r5) : r5;
    }).catch(() => null).then((t5) => {
      e4.sinfo_._selfReq = null, t5 ? s7(t5.username, t5.allSSL, t5.portalToken, t5.tokenExpiration) : s7();
    }) : s7();
  }
  _generateOAuthInfo(e4) {
    let t4, r4 = null, i3 = e4.portalUrl;
    const o3 = e4.customBaseUrl, n3 = e4.owningTenant, a3 = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (a3) {
      r4 = window.location.href;
      let e5 = r4.indexOf("?");
      e5 > -1 && (r4 = r4.slice(0, e5)), e5 = r4.search(/\/(apps|home)\//), r4 = e5 > -1 ? r4.slice(0, e5) : null;
    }
    return a3 && r4 ? (this._hasTestedIfAppIsOnPortal = true, t4 = U(r4 + "/sharing/rest", {
      query: {
        f: "json"
      }
    }).then(() => {
      this._defaultOAuthInfo = new i({
        appId: "arcgisonline",
        popupCallbackUrl: r4 + "/home/oauth-callback.html"
      });
    })) : t4 = Promise.resolve(), t4.then(() => {
      if (this._defaultOAuthInfo) return i3 = i3.replace(/^http:/i, "https:"), U(i3 + "/sharing/rest/oauth2/validateRedirectUri", {
        query: {
          accountId: n3,
          client_id: this._defaultOAuthInfo.appId,
          redirect_uri: _(this._defaultOAuthInfo.popupCallbackUrl),
          f: "json"
        }
      }).then((e5) => {
        if (e5.data.valid) {
          const t5 = this._defaultOAuthInfo.clone();
          e5.data.urlKey && o3 ? t5.portalUrl = "https://" + e5.data.urlKey.toLowerCase() + "." + o3 : t5.portalUrl = i3, t5.popup = window !== window.top || !(F(i3, this._appOrigin) || this._gwDomains.some((e6) => e6.regex.test(i3) && e6.regex.test(this._appOrigin))), this.oAuthInfos.push(t5);
        }
      });
    });
  }
  _doOAuthSignIn(e4, t4, r4, s7) {
    const o3 = r4._oAuthCred, a3 = {
      portalUrl: r4.portalUrl
    };
    !r4.popup && r4.preserveUrlHash && window.location.hash && (a3.hash = window.location.hash), o3.stateUID && (a3.uid = o3.stateUID);
    const h = {
      client_id: r4.appId,
      response_type: o3.codeVerifier ? "code" : "token",
      state: JSON.stringify(a3),
      expiration: r4.expiration,
      locale: r4.locale,
      redirect_uri: this._getRedirectURI(r4, !!o3.codeVerifier)
    };
    r4.forceLogin && (h.force_login = true), r4.forceUserId && r4.userId && (h.prepopulatedusername = r4.userId), !r4.popup && this._doPortalSignIn(e4) && (h.redirectToUserOrgUrl = true), o3.codeVerifier && (h.code_challenge = s7 || o3.codeVerifier, h.code_challenge_method = s7 ? "S256" : "plain");
    const l2 = r4.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", c4 = l2 + "?" + v(h);
    if (r4.popup) {
      const e5 = window.open(c4, "esriJSAPIOAuth", r4.popupWindowFeatures);
      if (e5) e5.focus(), this._oAuthDfd.oAuthWin_ = e5, this._oAuthIntervalId = setInterval(() => {
        if (e5.closed) {
          clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
          const e6 = this._oAuthDfd;
          if (e6) {
            const t5 = new s2("identity-manager:user-aborted", "ABORTED");
            e6.reject(t5);
          }
        }
      }, 500), this._oAuthOnPopupHandle = o(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (e6) => {
        "arcgis:auth:hash" === e6.type ? this.setOAuthResponseHash(e6.detail) : this._setOAuthResponseQueryString(e6.detail);
      });
      else {
        const e6 = new s2("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e6);
      }
    } else this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({
      authorizeParams: h,
      authorizeUrl: l2,
      resourceUrl: e4,
      serverInfo: t4,
      oAuthInfo: r4
    }) : window.location.href = c4;
  }
  _getRedirectURI(e4, t4) {
    const r4 = window.location.href.replace(/#.*$/, "");
    if (e4.popup) return _(e4.popupCallbackUrl);
    if (t4) {
      const e5 = I(r4);
      return e5.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((t5) => {
        delete e5.query[t5];
      }), Et(e5.path, e5.query);
    }
    return r4;
  }
};
j.prototype.declaredClass = "esri.identity.IdentityManagerBase";
var E = class extends o2.EventedAccessor {
  constructor(e4) {
    super(e4), this._oAuthCred = null, this.tokenRefreshBuffer = 2, e4?._oAuthCred && (this._oAuthCred = e4._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], null == this.creationTime && (this.creationTime = Date.now());
  }
  refreshToken() {
    const e4 = t2, t4 = e4.findServerInfo(this.server), s7 = t4?.owningSystemUrl, i3 = !!s7 && "server" === this.scope, o3 = i3 && b(t4, e4._legacyFed), n3 = t4.webTierAuth, a3 = n3 && e4.normalizeWebTierAuth, h = R[this.server], l2 = h?.[this.userId];
    let c4, d2 = this.resources && this.resources[0], u2 = i3 ? e4.findServerInfo(s7) : null, p3 = {
      username: this.userId,
      password: l2
    };
    if (n3 && !a3) return;
    i3 && !u2 && e4.serverInfos.some((t5) => (e4._isIdProvider(s7, t5.server) && (u2 = t5), !!u2));
    const _2 = u2 ? e4.findCredential(u2.server, this.userId) : null;
    if (!i3 || _2) {
      if (!o3) {
        if (i3) c4 = {
          serverUrl: d2,
          token: _2?.token,
          ssl: _2?.ssl
        };
        else if (a3) p3 = null, c4 = {
          ssl: this.ssl
        };
        else {
          if (!l2) {
            let r4;
            return d2 && (d2 = e4._sanitizeUrl(d2), this._enqueued = 1, r4 = e4._enqueue(d2, t4, null, null, this.isAdmin, this), r4.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), r4;
          }
          this.isAdmin && (c4 = {
            isAdmin: true
          });
        }
        return e4.generateToken(i3 ? u2 : t4, i3 ? null : p3, c4).then((e5) => {
          this.token = e5.token, this.expires = null != e5.expires ? Number(e5.expires) : null, this.creationTime = Date.now(), this.validity = e5.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      _2?.refreshToken();
    }
  }
  refreshServerTokens() {
    if ("portal" === this.scope) {
      const e4 = t2;
      e4.credentials.forEach((t4) => {
        const r4 = e4.findServerInfo(t4.server), s7 = r4?.owningSystemUrl;
        t4 !== this && t4.userId === this.userId && s7 && "server" === t4.scope && (e4._hasSameServerInstance(this.server, s7) || e4._isIdProvider(s7, this.server)) && (b(r4, e4._legacyFed) ? (t4.token = this.token, t4.expires = this.expires, t4.creationTime = this.creationTime, t4.validity = this.validity, t4.emitTokenChange()) : t4.refreshToken());
      });
    }
  }
  emitTokenChange(e4) {
    clearTimeout(this._refreshTimer);
    const t4 = t2, s7 = this.server ? t4.findServerInfo(this.server) : null, i3 = s7?.owningSystemUrl, o3 = i3 ? t4.findServerInfo(i3) : null;
    false === e4 || i3 && "portal" !== this.scope && (!o3?.webTierAuth || t4.normalizeWebTierAuth) || null == this.expires && null == this.validity || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e4 = t2, t4 = e4.credentials.indexOf(this);
    t4 > -1 && e4.credentials.splice(t4, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e4 = l({
      userId: this.userId,
      server: this.server,
      token: this.token,
      expires: this.expires,
      validity: this.validity,
      ssl: this.ssl,
      isAdmin: this.isAdmin,
      creationTime: this.creationTime,
      scope: this.scope
    }), t4 = this.resources;
    return t4 && t4.length > 0 && (e4.resources = t4.slice()), e4;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e4 = 6e4 * this.tokenRefreshBuffer, t4 = 2 ** 31 - 1;
    let r4 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    r4 < 0 ? r4 = 0 : r4 > t4 && (r4 = t4), this._refreshTimer = setTimeout(this.refreshToken.bind(this), r4 > e4 ? r4 - e4 : r4);
  }
};
e([y()], E.prototype, "creationTime", void 0), e([y()], E.prototype, "expires", void 0), e([y()], E.prototype, "isAdmin", void 0), e([y()], E.prototype, "oAuthState", void 0), e([y()], E.prototype, "resources", void 0), e([y()], E.prototype, "scope", void 0), e([y()], E.prototype, "server", void 0), e([y()], E.prototype, "ssl", void 0), e([y()], E.prototype, "token", void 0), e([y()], E.prototype, "tokenRefreshBuffer", void 0), e([y()], E.prototype, "userId", void 0), e([y()], E.prototype, "validity", void 0), E = e([a("esri.identity.Credential")], E);

// ../../../node_modules/@arcgis/core/identity/IdentityManager.js
var r3 = class extends j {
};
r3.prototype.declaredClass = "esri.identity.IdentityManager";
var s6 = new r3();
n(s6);
export {
  s6 as default
};
//# sourceMappingURL=IdentityManager-YNQZO4IJ.js.map
