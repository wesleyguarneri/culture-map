import {
  d
} from "./chunk-DFCSCNHQ.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import "./chunk-HD65DNIO.js";
import "./chunk-4KWLMXIA.js";
import "./chunk-BIUXKPKA.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-6A7CWJED.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-6EUVKE22.js";
import {
  _
} from "./chunk-XTVPEVHA.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import {
  n as n2
} from "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import {
  j
} from "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import {
  O as O2,
  r
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/I3STreeDebugger.js
var u = class extends d {
  constructor(e3) {
    super(e3);
  }
  getTiles() {
    const e3 = this.lv.getVisibleNodes(), o = this.view.renderSpatialReference, s = this.nodeSR;
    return e3.map((e4) => f(e4, o, s)).filter(O).sort((e4, r2) => e4.lij[0] === r2.lij[0] ? e4.label > r2.label ? -1 : 1 : e4.lij[0] - r2.lij[0]);
  }
};
function f(e3, r2, o) {
  const s = e3.serviceObbInIndexSR;
  if (null == s || null == r2) return null;
  _(h, s.quaternion), r(j2, s.center), n2(j2, o, 0, j2, r2, 0, 1), h[12] = j2[0], h[13] = j2[1], h[14] = j2[2];
  const i = [[], [], []];
  O2(j2, s.halfSize, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[0] = -j2[0], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[0] = -j2[0], j2[1] = -j2[1], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[1] = -j2[1], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[0].push([j2[0], j2[1]]), i[1].push(i[0][0]), i[1].push(i[0][1]), r(j2, s.halfSize), j2[0] = -j2[0], j2[2] = -j2[2], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[1].push([j2[0], j2[1]]), r(j2, s.halfSize), j2[2] = -j2[2], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[1].push([j2[0], j2[1]]), i[2].push(i[0][0]), i[2].push(i[0][3]), r(j2, s.halfSize), j2[1] = -j2[1], j2[2] = -j2[2], O2(j2, j2, h), n2(j2, r2, 0, j2, o, 0, 1), i[2].push([j2[0], j2[1]]), i[2].push(i[1][3]);
  const c = new j({
    rings: i,
    spatialReference: o
  });
  return {
    lij: [e3.level, e3.childCount, 0],
    label: e3.id,
    geometry: c
  };
}
e([y({
  constructOnly: true
})], u.prototype, "lv", void 0), e([y({
  constructOnly: true
})], u.prototype, "nodeSR", void 0), u = e([a("esri.views.3d.layers.support.I3STreeDebugger")], u);
var h = e2();
var j2 = n();
export {
  u as I3STreeDebugger
};
//# sourceMappingURL=I3STreeDebugger-7RP7JCSS.js.map
