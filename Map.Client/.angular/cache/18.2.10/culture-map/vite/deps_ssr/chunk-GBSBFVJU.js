import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-Y2HYKTTT.js";
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

// ../../../node_modules/@arcgis/core/rest/support/GPMessage.js
var p = new n({
  esriJobMessageTypeInformative: "informative",
  esriJobMessageTypeProcessDefinition: "process-definition",
  esriJobMessageTypeProcessStart: "process-start",
  esriJobMessageTypeProcessStop: "process-stop",
  esriJobMessageTypeWarning: "warning",
  esriJobMessageTypeError: "error",
  esriJobMessageTypeEmpty: "empty",
  esriJobMessageTypeAbort: "abort"
});
var i = class extends f {
  constructor(e2) {
    super(e2), this.description = null, this.type = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "description", void 0), e([y({
  type: String,
  json: {
    read: p.read,
    write: p.write
  }
})], i.prototype, "type", void 0), i = e([a("esri.rest.support.GPMessage")], i);
var a2 = i;

export {
  a2 as a
};
//# sourceMappingURL=chunk-GBSBFVJU.js.map
