import {
  d
} from "./chunk-XQCKIDQO.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/layers/StreamLayerView.js
var r = (r2) => {
  let i = class extends r2 {
    resume() {
      this._isUserPaused = false, this.suspended || this._doResume();
    }
    pause() {
      this._isUserPaused = true, this.suspended || this._doPause();
    }
    disconnect() {
      this._doDisconnect();
    }
    connect() {
      this._doConnect();
    }
    clear() {
      this._doClear();
    }
    constructor(...s) {
      super(...s), this._isUserPaused = false, this.filter = null;
    }
    get connectionStatus() {
      return (this._isUserPaused || this.suspended) && "connected" === this._streamConnectionStatus ? "paused" : this._streamConnectionStatus;
    }
    _onSuspendedChange(s) {
      s ? this._doPause() : this._isUserPaused || this._doResume();
    }
  };
  return e([y()], i.prototype, "_isUserPaused", void 0), e([y({
    readOnly: true
  })], i.prototype, "connectionStatus", null), e([y({
    type: d
  })], i.prototype, "filter", void 0), i = e([a("esri.views.layers.StreamLayerView")], i), i;
};

export {
  r
};
//# sourceMappingURL=chunk-6DNKENXH.js.map