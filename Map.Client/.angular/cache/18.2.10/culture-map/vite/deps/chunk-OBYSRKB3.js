import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

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
//# sourceMappingURL=chunk-OBYSRKB3.js.map
