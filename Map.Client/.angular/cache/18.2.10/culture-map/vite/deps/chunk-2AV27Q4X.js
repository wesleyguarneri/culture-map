import {
  a as a4,
  f as f3,
  g,
  h,
  l,
  o as o3,
  u as u3
} from "./chunk-3HU4B6P4.js";
import {
  l as l2,
  s as s2
} from "./chunk-5AUX2A3J.js";
import {
  A,
  j,
  y as y2,
  z
} from "./chunk-TCPN7AEH.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  o as o2
} from "./chunk-7RMVJCDW.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  n as n4
} from "./chunk-PRREDSOB.js";
import {
  n as n3
} from "./chunk-V5C6HSAM.js";
import {
  a as a3,
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  c2 as c,
  u
} from "./chunk-HJY2YILU.js";
import {
  n as n2
} from "./chunk-2MMLMOWS.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/chunks/Zlib.js
var e2;
var r2;
var i;
var s3 = {
  exports: {}
};
r2 = s3, void 0 !== (e2 = function() {
  function t8() {
    this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
  }
  return t8.prototype = {
    ensureBuffer: function(t9) {
      var e7 = this.buffer, r13 = e7 ? e7.byteLength : 0;
      if (t9 < r13) return e7;
      for (var i8 = 512; i8 < t9; ) i8 <<= 1;
      for (var s8 = new Uint8Array(i8), f9 = 0; f9 < r13; ++f9) s8[f9] = e7[f9];
      return this.buffer = s8;
    },
    getByte: function() {
      for (var t9 = this.pos; this.bufferLength <= t9; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getBytes: function(t9) {
      var e7 = this.pos;
      if (t9) {
        this.ensureBuffer(e7 + t9);
        for (var r13 = e7 + t9; !this.eof && this.bufferLength < r13; ) this.readBlock();
        var i8 = this.bufferLength;
        r13 > i8 && (r13 = i8);
      } else {
        for (; !this.eof; ) this.readBlock();
        r13 = this.bufferLength;
      }
      return this.pos = r13, this.buffer.subarray(e7, r13);
    },
    lookChar: function() {
      for (var t9 = this.pos; this.bufferLength <= t9; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    },
    getChar: function() {
      for (var t9 = this.pos; this.bufferLength <= t9; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    },
    makeSubStream: function(t9, e7, r13) {
      for (var i8 = t9 + e7; this.bufferLength <= i8 && !this.eof; ) this.readBlock();
      return new Stream(this.buffer, t9, e7, r13);
    },
    skip: function(t9) {
      t9 || (t9 = 1), this.pos += t9;
    },
    reset: function() {
      this.pos = 0;
    }
  }, t8;
}(), i = function() {
  if (!self || !self.Uint32Array) return null;
  var t8 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), r13 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), i8 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), s8 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], f9 = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
  function o11(t9) {
    throw new Error(t9);
  }
  function n15(t9) {
    var r14 = 0, i9 = t9[r14++], s9 = t9[r14++];
    -1 != i9 && -1 != s9 || o11("Invalid header in flate stream"), 8 != (15 & i9) && o11("Unknown compression method in flate stream"), ((i9 << 8) + s9) % 31 != 0 && o11("Bad FCHECK in flate stream"), 32 & s9 && o11("FDICT bit set in flate stream"), this.bytes = t9, this.bytesPos = r14, this.codeSize = 0, this.codeBuf = 0, e2.call(this);
  }
  return n15.prototype = Object.create(e2.prototype), n15.prototype.getBits = function(t9) {
    for (var e7, r14 = this.codeSize, i9 = this.codeBuf, s9 = this.bytes, f10 = this.bytesPos; r14 < t9; ) void 0 === (e7 = s9[f10++]) && o11("Bad encoding in flate stream"), i9 |= e7 << r14, r14 += 8;
    return e7 = i9 & (1 << t9) - 1, this.codeBuf = i9 >> t9, this.codeSize = r14 -= t9, this.bytesPos = f10, e7;
  }, n15.prototype.getCode = function(t9) {
    for (var e7 = t9[0], r14 = t9[1], i9 = this.codeSize, s9 = this.codeBuf, f10 = this.bytes, n16 = this.bytesPos; i9 < r14; ) {
      var a13;
      void 0 === (a13 = f10[n16++]) && o11("Bad encoding in flate stream"), s9 |= a13 << i9, i9 += 8;
    }
    var h7 = e7[s9 & (1 << r14) - 1], u12 = h7 >> 16, l7 = 65535 & h7;
    return (0 == i9 || i9 < u12 || 0 == u12) && o11("Bad encoding in flate stream"), this.codeBuf = s9 >> u12, this.codeSize = i9 - u12, this.bytesPos = n16, l7;
  }, n15.prototype.generateHuffmanTable = function(t9) {
    for (var e7 = t9.length, r14 = 0, i9 = 0; i9 < e7; ++i9) t9[i9] > r14 && (r14 = t9[i9]);
    for (var s9 = 1 << r14, f10 = new Uint32Array(s9), o12 = 1, n16 = 0, a13 = 2; o12 <= r14; ++o12, n16 <<= 1, a13 <<= 1) for (var h7 = 0; h7 < e7; ++h7) if (t9[h7] == o12) {
      var u12 = 0, l7 = n16;
      for (i9 = 0; i9 < o12; ++i9) u12 = u12 << 1 | 1 & l7, l7 >>= 1;
      for (i9 = u12; i9 < s9; i9 += a13) f10[i9] = o12 << 16 | h7;
      ++n16;
    }
    return [f10, r14];
  }, n15.prototype.readBlock = function() {
    function e7(t9, e8, r14, i9, s9) {
      for (var f10 = t9.getBits(r14) + i9; f10-- > 0; ) e8[b4++] = s9;
    }
    var n16 = this.getBits(3);
    if (1 & n16 && (this.eof = true), 0 != (n16 >>= 1)) {
      var a13, h7;
      if (1 == n16) a13 = s8, h7 = f9;
      else if (2 == n16) {
        for (var u12 = this.getBits(5) + 257, l7 = this.getBits(5) + 1, c7 = this.getBits(4) + 4, d4 = Array(t8.length), b4 = 0; b4 < c7; ) d4[t8[b4++]] = this.getBits(3);
        for (var v5 = this.generateHuffmanTable(d4), g6 = 0, B3 = (b4 = 0, u12 + l7), p5 = new Array(B3); b4 < B3; ) {
          var y6 = this.getCode(v5);
          16 == y6 ? e7(this, p5, 2, 3, g6) : 17 == y6 ? e7(this, p5, 3, 3, g6 = 0) : 18 == y6 ? e7(this, p5, 7, 11, g6 = 0) : p5[b4++] = g6 = y6;
        }
        a13 = this.generateHuffmanTable(p5.slice(0, u12)), h7 = this.generateHuffmanTable(p5.slice(u12, B3));
      } else o11("Unknown block type in flate stream");
      for (var m6 = (x4 = this.buffer) ? x4.length : 0, k4 = this.bufferLength; ; ) {
        var w5 = this.getCode(a13);
        if (w5 < 256) k4 + 1 >= m6 && (m6 = (x4 = this.ensureBuffer(k4 + 1)).length), x4[k4++] = w5;
        else {
          if (256 == w5) return void (this.bufferLength = k4);
          var C5 = (w5 = r13[w5 -= 257]) >> 16;
          C5 > 0 && (C5 = this.getBits(C5)), g6 = (65535 & w5) + C5, w5 = this.getCode(h7), (C5 = (w5 = i8[w5]) >> 16) > 0 && (C5 = this.getBits(C5));
          var L3 = (65535 & w5) + C5;
          k4 + g6 >= m6 && (m6 = (x4 = this.ensureBuffer(k4 + g6)).length);
          for (var S4 = 0; S4 < g6; ++S4, ++k4) x4[k4] = x4[k4 - L3];
        }
      }
    } else {
      var A5, U4 = this.bytes, P3 = this.bytesPos;
      void 0 === (A5 = U4[P3++]) && o11("Bad block header in flate stream");
      var z2 = A5;
      void 0 === (A5 = U4[P3++]) && o11("Bad block header in flate stream"), z2 |= A5 << 8, void 0 === (A5 = U4[P3++]) && o11("Bad block header in flate stream");
      var H2 = A5;
      void 0 === (A5 = U4[P3++]) && o11("Bad block header in flate stream"), (H2 |= A5 << 8) != (65535 & ~z2) && o11("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
      var T3 = this.bufferLength, x4 = this.ensureBuffer(T3 + z2), j3 = T3 + z2;
      this.bufferLength = j3;
      for (var E3 = T3; E3 < j3; ++E3) {
        if (void 0 === (A5 = U4[P3++])) {
          this.eof = true;
          break;
        }
        x4[E3] = A5;
      }
      this.bytesPos = P3;
    }
  }, n15;
}()) && (r2.exports = i);
var f4 = o2(s3.exports);

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/ImageCanvasDecoder.js
var i2 = class _i {
  constructor(t8) {
    this._canvas = null, this._ctx = null, t8 && (this._canvas = t8.canvas, this._ctx = t8.ctx || t8.canvas && t8.canvas.getContext("2d"));
  }
  decode(n15, s8, r13) {
    if (!n15 || n15.byteLength < 10) throw new s("imagecanvasdecoder: decode", "required a valid encoded data as input.");
    let {
      width: c7 = 0,
      height: h7 = 0,
      format: o11
    } = s8;
    const {
      applyJpegMask: l7
    } = s8;
    if (l7 && (!c7 || !h7)) throw new s("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
    return new Promise((t8, d4) => {
      let g6 = null;
      "jpg" === o11 && l7 && (g6 = _i._getMask(n15, {
        width: c7,
        height: h7
      }));
      const w5 = new Blob([new Uint8Array(n15)], {
        type: "image/" + o11 == "jpg" ? "jpeg" : o11
      }), v5 = URL.createObjectURL(w5), m6 = new Image();
      let _3;
      m6.src = v5, m6.onload = () => {
        if (URL.revokeObjectURL(v5), c(r13)) return void d4(u());
        c7 = m6.width, h7 = m6.height, this._canvas && this._ctx ? (this._canvas.width === c7 && this._canvas.height === h7 || (this._canvas.width = c7, this._canvas.height = h7), this._ctx.clearRect(0, 0, c7, h7)) : (this._canvas = document.createElement("canvas"), this._canvas.width = c7, this._canvas.height = h7, this._ctx = this._canvas.getContext("2d")), this._ctx.drawImage(m6, 0, 0);
        const n16 = this._ctx.getImageData(0, 0, c7, h7);
        let i8;
        if (_3 = n16.data, s8.renderOnCanvas) {
          if (g6) for (i8 = 0; i8 < g6.length; i8++) g6[i8] ? _3[4 * i8 + 3] = 255 : _3[4 * i8 + 3] = 0;
          return this._ctx.putImageData(n16, 0, 0), void t8(null);
        }
        const o12 = c7 * h7, l8 = new Uint8Array(o12), w6 = new Uint8Array(o12), p5 = new Uint8Array(o12);
        if (g6) for (i8 = 0; i8 < o12; i8++) l8[i8] = _3[4 * i8], w6[i8] = _3[4 * i8 + 1], p5[i8] = _3[4 * i8 + 2];
        else for (g6 = new Uint8Array(o12), i8 = 0; i8 < o12; i8++) l8[i8] = _3[4 * i8], w6[i8] = _3[4 * i8 + 1], p5[i8] = _3[4 * i8 + 2], g6[i8] = _3[4 * i8 + 3];
        t8({
          width: c7,
          height: h7,
          pixels: [l8, w6, p5],
          mask: g6,
          pixelType: "u8"
        });
      }, m6.onerror = () => {
        URL.revokeObjectURL(v5), d4("cannot load image");
      };
    });
  }
  static _getMask(t8, e7) {
    let a13 = null;
    try {
      const i8 = new Uint8Array(t8), s8 = Math.ceil(i8.length / 2);
      let r13 = 0;
      const c7 = i8.length - 2;
      for (r13 = s8; r13 < c7 && (255 !== i8[r13] || 217 !== i8[r13 + 1]); r13++) ;
      if (r13 += 2, r13 < i8.length - 1) {
        const t9 = new f4(i8.subarray(r13)).getBytes();
        a13 = new Uint8Array(e7.width * e7.height);
        let s9 = 0;
        for (let e8 = 0; e8 < t9.length; e8++) for (let n15 = 7; n15 >= 0; n15--) a13[s9++] = t9[e8] >> n15 & 1;
      }
    } catch (i8) {
    }
    return a13;
  }
};

// ../../../node_modules/@arcgis/core/chunks/Jpg.js
var n5;
var r3;
var o4;
var a5 = {
  exports: {}
};
n5 = a5, r3 = function() {
  var e7 = function() {
    function e8(e9) {
      this.message = "JPEG error: " + e9;
    }
    return e8.prototype = new Error(), e8.prototype.name = "JpegError", e8.constructor = e8, e8;
  }();
  return function() {
    if (!self || !self.Uint8ClampedArray) return null;
    var n15 = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r13 = 4017, o11 = 799, a13 = 3406, t8 = 2276, i8 = 1567, s8 = 3784, c7 = 5793, f9 = 2896;
    function l7() {
      this.decodeTransform = null, this.colorTransform = -1;
    }
    function u12(e8, n16) {
      for (var r14, o12, a14 = 0, t9 = [], i9 = 16; i9 > 0 && !e8[i9 - 1]; ) i9--;
      t9.push({
        children: [],
        index: 0
      });
      var s9, c8 = t9[0];
      for (r14 = 0; r14 < i9; r14++) {
        for (o12 = 0; o12 < e8[r14]; o12++) {
          for ((c8 = t9.pop()).children[c8.index] = n16[a14]; c8.index > 0; ) c8 = t9.pop();
          for (c8.index++, t9.push(c8); t9.length <= r14; ) t9.push(s9 = {
            children: [],
            index: 0
          }), c8.children[c8.index] = s9.children, c8 = s9;
          a14++;
        }
        r14 + 1 < i9 && (t9.push(s9 = {
          children: [],
          index: 0
        }), c8.children[c8.index] = s9.children, c8 = s9);
      }
      return t9[0].children;
    }
    function h7(e8, n16, r14) {
      return 64 * ((e8.blocksPerLine + 1) * n16 + r14);
    }
    function v5(r14, o12, a14, t9, i9, s9, c8, f10, l8) {
      var u13 = a14.mcusPerLine, v6 = a14.progressive, m7 = o12, d5 = 0, b4 = 0;
      function k4() {
        if (b4 > 0) return b4--, d5 >> b4 & 1;
        if (255 === (d5 = r14[o12++])) {
          var n16 = r14[o12++];
          if (n16) throw new e7("unexpected marker " + (d5 << 8 | n16).toString(16));
        }
        return b4 = 7, d5 >>> 7;
      }
      function g6(n16) {
        for (var r15 = n16; ; ) {
          if ("number" == typeof (r15 = r15[k4()])) return r15;
          if ("object" != typeof r15) throw new e7("invalid huffman sequence");
        }
      }
      function C5(e8) {
        for (var n16 = 0; e8 > 0; ) n16 = n16 << 1 | k4(), e8--;
        return n16;
      }
      function w5(e8) {
        if (1 === e8) return 1 === k4() ? 1 : -1;
        var n16 = C5(e8);
        return n16 >= 1 << e8 - 1 ? n16 : n16 + (-1 << e8) + 1;
      }
      function x4(e8, r15) {
        var o13 = g6(e8.huffmanTableDC), a15 = 0 === o13 ? 0 : w5(o13);
        e8.blockData[r15] = e8.pred += a15;
        for (var t10 = 1; t10 < 64; ) {
          var i10 = g6(e8.huffmanTableAC), s10 = 15 & i10, c9 = i10 >> 4;
          if (0 !== s10) {
            var f11 = n15[t10 += c9];
            e8.blockData[r15 + f11] = w5(s10), t10++;
          } else {
            if (c9 < 15) break;
            t10 += 16;
          }
        }
      }
      function y6(e8, n16) {
        var r15 = g6(e8.huffmanTableDC), o13 = 0 === r15 ? 0 : w5(r15) << l8;
        e8.blockData[n16] = e8.pred += o13;
      }
      function D4(e8, n16) {
        e8.blockData[n16] |= k4() << l8;
      }
      var T3 = 0;
      function P3(e8, r15) {
        if (T3 > 0) T3--;
        else for (var o13 = s9, a15 = c8; o13 <= a15; ) {
          var t10 = g6(e8.huffmanTableAC), i10 = 15 & t10, f11 = t10 >> 4;
          if (0 !== i10) {
            var u14 = n15[o13 += f11];
            e8.blockData[r15 + u14] = w5(i10) * (1 << l8), o13++;
          } else {
            if (f11 < 15) {
              T3 = C5(f11) + (1 << f11) - 1;
              break;
            }
            o13 += 16;
          }
        }
      }
      var L3, A5 = 0;
      function _3(r15, o13) {
        for (var a15, t10, i10 = s9, f11 = c8, u14 = 0; i10 <= f11; ) {
          var h8 = n15[i10];
          switch (A5) {
            case 0:
              if (u14 = (t10 = g6(r15.huffmanTableAC)) >> 4, 0 == (a15 = 15 & t10)) u14 < 15 ? (T3 = C5(u14) + (1 << u14), A5 = 4) : (u14 = 16, A5 = 1);
              else {
                if (1 !== a15) throw new e7("invalid ACn encoding");
                L3 = w5(a15), A5 = u14 ? 2 : 3;
              }
              continue;
            case 1:
            case 2:
              r15.blockData[o13 + h8] ? r15.blockData[o13 + h8] += k4() << l8 : 0 == --u14 && (A5 = 2 === A5 ? 3 : 0);
              break;
            case 3:
              r15.blockData[o13 + h8] ? r15.blockData[o13 + h8] += k4() << l8 : (r15.blockData[o13 + h8] = L3 << l8, A5 = 0);
              break;
            case 4:
              r15.blockData[o13 + h8] && (r15.blockData[o13 + h8] += k4() << l8);
          }
          i10++;
        }
        4 === A5 && 0 == --T3 && (A5 = 0);
      }
      function U4(e8, n16, r15, o13, a15) {
        var t10 = r15 % u13;
        n16(e8, h7(e8, (r15 / u13 | 0) * e8.v + o13, t10 * e8.h + a15));
      }
      function z2(e8, n16, r15) {
        n16(e8, h7(e8, r15 / e8.blocksPerLine | 0, r15 % e8.blocksPerLine));
      }
      var I4, M3, Y2, q, S4, H2, R3 = t9.length;
      H2 = v6 ? 0 === s9 ? 0 === f10 ? y6 : D4 : 0 === f10 ? P3 : _3 : x4;
      var j3, E3, J, V3, B3 = 0;
      for (E3 = 1 === R3 ? t9[0].blocksPerLine * t9[0].blocksPerColumn : u13 * a14.mcusPerColumn; B3 < E3; ) {
        var N2 = i9 ? Math.min(E3 - B3, i9) : E3;
        for (M3 = 0; M3 < R3; M3++) t9[M3].pred = 0;
        if (T3 = 0, 1 === R3) for (I4 = t9[0], S4 = 0; S4 < N2; S4++) z2(I4, H2, B3), B3++;
        else for (S4 = 0; S4 < N2; S4++) {
          for (M3 = 0; M3 < R3; M3++) for (J = (I4 = t9[M3]).h, V3 = I4.v, Y2 = 0; Y2 < V3; Y2++) for (q = 0; q < J; q++) U4(I4, H2, B3, Y2, q);
          B3++;
        }
        b4 = 0, (j3 = p5(r14, o12)) && j3.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + j3.invalid), o12 = j3.offset);
        var G3 = j3 && j3.marker;
        if (!G3 || G3 <= 65280) throw new e7("marker was not found");
        if (!(G3 >= 65488 && G3 <= 65495)) break;
        o12 += 2;
      }
      return (j3 = p5(r14, o12)) && j3.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + j3.invalid), o12 = j3.offset), o12 - m7;
    }
    function m6(n16, l8, u13) {
      var h8, v6, m7, d5, p6, b4, k4, g6, C5, w5, x4, y6, D4, T3, P3, L3, A5, _3 = n16.quantizationTable, U4 = n16.blockData;
      if (!_3) throw new e7("missing required Quantization Table.");
      for (var z2 = 0; z2 < 64; z2 += 8) C5 = U4[l8 + z2], w5 = U4[l8 + z2 + 1], x4 = U4[l8 + z2 + 2], y6 = U4[l8 + z2 + 3], D4 = U4[l8 + z2 + 4], T3 = U4[l8 + z2 + 5], P3 = U4[l8 + z2 + 6], L3 = U4[l8 + z2 + 7], C5 *= _3[z2], w5 | x4 | y6 | D4 | T3 | P3 | L3 ? (w5 *= _3[z2 + 1], x4 *= _3[z2 + 2], y6 *= _3[z2 + 3], D4 *= _3[z2 + 4], T3 *= _3[z2 + 5], P3 *= _3[z2 + 6], L3 *= _3[z2 + 7], v6 = (h8 = (h8 = c7 * C5 + 128 >> 8) + (v6 = c7 * D4 + 128 >> 8) + 1 >> 1) - v6, A5 = (m7 = x4) * s8 + (d5 = P3) * i8 + 128 >> 8, m7 = m7 * i8 - d5 * s8 + 128 >> 8, k4 = (p6 = (p6 = f9 * (w5 - L3) + 128 >> 8) + (k4 = T3 << 4) + 1 >> 1) - k4, b4 = (g6 = (g6 = f9 * (w5 + L3) + 128 >> 8) + (b4 = y6 << 4) + 1 >> 1) - b4, d5 = (h8 = h8 + (d5 = A5) + 1 >> 1) - d5, m7 = (v6 = v6 + m7 + 1 >> 1) - m7, A5 = p6 * t8 + g6 * a13 + 2048 >> 12, p6 = p6 * a13 - g6 * t8 + 2048 >> 12, g6 = A5, A5 = b4 * o11 + k4 * r13 + 2048 >> 12, b4 = b4 * r13 - k4 * o11 + 2048 >> 12, k4 = A5, u13[z2] = h8 + g6, u13[z2 + 7] = h8 - g6, u13[z2 + 1] = v6 + k4, u13[z2 + 6] = v6 - k4, u13[z2 + 2] = m7 + b4, u13[z2 + 5] = m7 - b4, u13[z2 + 3] = d5 + p6, u13[z2 + 4] = d5 - p6) : (A5 = c7 * C5 + 512 >> 10, u13[z2] = A5, u13[z2 + 1] = A5, u13[z2 + 2] = A5, u13[z2 + 3] = A5, u13[z2 + 4] = A5, u13[z2 + 5] = A5, u13[z2 + 6] = A5, u13[z2 + 7] = A5);
      for (var I4 = 0; I4 < 8; ++I4) C5 = u13[I4], (w5 = u13[I4 + 8]) | (x4 = u13[I4 + 16]) | (y6 = u13[I4 + 24]) | (D4 = u13[I4 + 32]) | (T3 = u13[I4 + 40]) | (P3 = u13[I4 + 48]) | (L3 = u13[I4 + 56]) ? (v6 = (h8 = 4112 + ((h8 = c7 * C5 + 2048 >> 12) + (v6 = c7 * D4 + 2048 >> 12) + 1 >> 1)) - v6, A5 = (m7 = x4) * s8 + (d5 = P3) * i8 + 2048 >> 12, m7 = m7 * i8 - d5 * s8 + 2048 >> 12, d5 = A5, k4 = (p6 = (p6 = f9 * (w5 - L3) + 2048 >> 12) + (k4 = T3) + 1 >> 1) - k4, b4 = (g6 = (g6 = f9 * (w5 + L3) + 2048 >> 12) + (b4 = y6) + 1 >> 1) - b4, A5 = p6 * t8 + g6 * a13 + 2048 >> 12, p6 = p6 * a13 - g6 * t8 + 2048 >> 12, g6 = A5, A5 = b4 * o11 + k4 * r13 + 2048 >> 12, b4 = b4 * r13 - k4 * o11 + 2048 >> 12, C5 = (C5 = (h8 = h8 + d5 + 1 >> 1) + g6) < 16 ? 0 : C5 >= 4080 ? 255 : C5 >> 4, w5 = (w5 = (v6 = v6 + m7 + 1 >> 1) + (k4 = A5)) < 16 ? 0 : w5 >= 4080 ? 255 : w5 >> 4, x4 = (x4 = (m7 = v6 - m7) + b4) < 16 ? 0 : x4 >= 4080 ? 255 : x4 >> 4, y6 = (y6 = (d5 = h8 - d5) + p6) < 16 ? 0 : y6 >= 4080 ? 255 : y6 >> 4, D4 = (D4 = d5 - p6) < 16 ? 0 : D4 >= 4080 ? 255 : D4 >> 4, T3 = (T3 = m7 - b4) < 16 ? 0 : T3 >= 4080 ? 255 : T3 >> 4, P3 = (P3 = v6 - k4) < 16 ? 0 : P3 >= 4080 ? 255 : P3 >> 4, L3 = (L3 = h8 - g6) < 16 ? 0 : L3 >= 4080 ? 255 : L3 >> 4, U4[l8 + I4] = C5, U4[l8 + I4 + 8] = w5, U4[l8 + I4 + 16] = x4, U4[l8 + I4 + 24] = y6, U4[l8 + I4 + 32] = D4, U4[l8 + I4 + 40] = T3, U4[l8 + I4 + 48] = P3, U4[l8 + I4 + 56] = L3) : (A5 = (A5 = c7 * C5 + 8192 >> 14) < -2040 ? 0 : A5 >= 2024 ? 255 : A5 + 2056 >> 4, U4[l8 + I4] = A5, U4[l8 + I4 + 8] = A5, U4[l8 + I4 + 16] = A5, U4[l8 + I4 + 24] = A5, U4[l8 + I4 + 32] = A5, U4[l8 + I4 + 40] = A5, U4[l8 + I4 + 48] = A5, U4[l8 + I4 + 56] = A5);
    }
    function d4(e8, n16) {
      for (var r14 = n16.blocksPerLine, o12 = n16.blocksPerColumn, a14 = new Int16Array(64), t9 = 0; t9 < o12; t9++) for (var i9 = 0; i9 < r14; i9++) m6(n16, h7(n16, t9, i9), a14);
      return n16.blockData;
    }
    function p5(e8, n16, r14) {
      function o12(n17) {
        return e8[n17] << 8 | e8[n17 + 1];
      }
      var a14 = e8.length - 1, t9 = r14 < n16 ? r14 : n16;
      if (n16 >= a14) return null;
      var i9 = o12(n16);
      if (i9 >= 65472 && i9 <= 65534) return {
        invalid: null,
        marker: i9,
        offset: n16
      };
      for (var s9 = o12(t9); !(s9 >= 65472 && s9 <= 65534); ) {
        if (++t9 >= a14) return null;
        s9 = o12(t9);
      }
      return {
        invalid: i9.toString(16),
        marker: s9,
        offset: t9
      };
    }
    return l7.prototype = {
      parse: function(r14) {
        function o12() {
          var e8 = r14[c8] << 8 | r14[c8 + 1];
          return c8 += 2, e8;
        }
        function a14() {
          var e8 = o12(), n16 = c8 + e8 - 2, a15 = p5(r14, n16, c8);
          a15 && a15.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + a15.invalid), n16 = a15.offset);
          var t10 = r14.subarray(c8, n16);
          return c8 += t10.length, t10;
        }
        function t9(e8) {
          for (var n16 = Math.ceil(e8.samplesPerLine / 8 / e8.maxH), r15 = Math.ceil(e8.scanLines / 8 / e8.maxV), o13 = 0; o13 < e8.components.length; o13++) {
            R3 = e8.components[o13];
            var a15 = Math.ceil(Math.ceil(e8.samplesPerLine / 8) * R3.h / e8.maxH), t10 = Math.ceil(Math.ceil(e8.scanLines / 8) * R3.v / e8.maxV), i10 = n16 * R3.h, s10 = r15 * R3.v * 64 * (i10 + 1);
            R3.blockData = new Int16Array(s10), R3.blocksPerLine = a15, R3.blocksPerColumn = t10;
          }
          e8.mcusPerLine = n16, e8.mcusPerColumn = r15;
        }
        var i9, s9, c8 = 0, f10 = null, l8 = null, h8 = [], m7 = [], b4 = [], k4 = o12();
        if (65496 !== k4) throw new e7("SOI not found");
        for (k4 = o12(); 65497 !== k4; ) {
          var g6, C5, w5;
          switch (k4) {
            case 65504:
            case 65505:
            case 65506:
            case 65507:
            case 65508:
            case 65509:
            case 65510:
            case 65511:
            case 65512:
            case 65513:
            case 65514:
            case 65515:
            case 65516:
            case 65517:
            case 65518:
            case 65519:
            case 65534:
              var x4 = a14();
              65504 === k4 && 74 === x4[0] && 70 === x4[1] && 73 === x4[2] && 70 === x4[3] && 0 === x4[4] && (f10 = {
                version: {
                  major: x4[5],
                  minor: x4[6]
                },
                densityUnits: x4[7],
                xDensity: x4[8] << 8 | x4[9],
                yDensity: x4[10] << 8 | x4[11],
                thumbWidth: x4[12],
                thumbHeight: x4[13],
                thumbData: x4.subarray(14, 14 + 3 * x4[12] * x4[13])
              }), 65518 === k4 && 65 === x4[0] && 100 === x4[1] && 111 === x4[2] && 98 === x4[3] && 101 === x4[4] && (l8 = {
                version: x4[5] << 8 | x4[6],
                flags0: x4[7] << 8 | x4[8],
                flags1: x4[9] << 8 | x4[10],
                transformCode: x4[11]
              });
              break;
            case 65499:
              for (var y6 = o12() + c8 - 2; c8 < y6; ) {
                var D4 = r14[c8++], T3 = new Uint16Array(64);
                if (D4 >> 4) {
                  if (D4 >> 4 != 1) throw new e7("DQT - invalid table spec");
                  for (C5 = 0; C5 < 64; C5++) T3[n15[C5]] = o12();
                } else for (C5 = 0; C5 < 64; C5++) T3[n15[C5]] = r14[c8++];
                h8[15 & D4] = T3;
              }
              break;
            case 65472:
            case 65473:
            case 65474:
              if (i9) throw new e7("Only single frame JPEGs supported");
              o12(), (i9 = {}).extended = 65473 === k4, i9.progressive = 65474 === k4, i9.precision = r14[c8++], i9.scanLines = o12(), i9.samplesPerLine = o12(), i9.components = [], i9.componentIds = {};
              var P3, L3 = r14[c8++], A5 = 0, _3 = 0;
              for (g6 = 0; g6 < L3; g6++) {
                P3 = r14[c8];
                var U4 = r14[c8 + 1] >> 4, z2 = 15 & r14[c8 + 1];
                A5 < U4 && (A5 = U4), _3 < z2 && (_3 = z2);
                var I4 = r14[c8 + 2];
                w5 = i9.components.push({
                  h: U4,
                  v: z2,
                  quantizationId: I4,
                  quantizationTable: null
                }), i9.componentIds[P3] = w5 - 1, c8 += 3;
              }
              i9.maxH = A5, i9.maxV = _3, t9(i9);
              break;
            case 65476:
              var M3 = o12();
              for (g6 = 2; g6 < M3; ) {
                var Y2 = r14[c8++], q = new Uint8Array(16), S4 = 0;
                for (C5 = 0; C5 < 16; C5++, c8++) S4 += q[C5] = r14[c8];
                var H2 = new Uint8Array(S4);
                for (C5 = 0; C5 < S4; C5++, c8++) H2[C5] = r14[c8];
                g6 += 17 + S4, (Y2 >> 4 ? m7 : b4)[15 & Y2] = u12(q, H2);
              }
              break;
            case 65501:
              o12(), s9 = o12();
              break;
            case 65498:
              o12();
              var R3, j3 = r14[c8++], E3 = [];
              for (g6 = 0; g6 < j3; g6++) {
                var J = i9.componentIds[r14[c8++]];
                R3 = i9.components[J];
                var V3 = r14[c8++];
                R3.huffmanTableDC = b4[V3 >> 4], R3.huffmanTableAC = m7[15 & V3], E3.push(R3);
              }
              var B3 = r14[c8++], N2 = r14[c8++], G3 = r14[c8++], O4 = v5(r14, c8, i9, E3, s9, B3, N2, G3 >> 4, 15 & G3);
              c8 += O4;
              break;
            case 65535:
              255 !== r14[c8] && c8--;
              break;
            default:
              if (255 === r14[c8 - 3] && r14[c8 - 2] >= 192 && r14[c8 - 2] <= 254) {
                c8 -= 3;
                break;
              }
              throw new e7("unknown marker " + k4.toString(16));
          }
          k4 = o12();
        }
        for (this.width = i9.samplesPerLine, this.height = i9.scanLines, this.jfif = f10, this.eof = c8, this.adobe = l8, this.components = [], g6 = 0; g6 < i9.components.length; g6++) {
          var Q = h8[(R3 = i9.components[g6]).quantizationId];
          Q && (R3.quantizationTable = Q), this.components.push({
            output: d4(i9, R3),
            scaleX: R3.h / i9.maxH,
            scaleY: R3.v / i9.maxV,
            blocksPerLine: R3.blocksPerLine,
            blocksPerColumn: R3.blocksPerColumn
          });
        }
        this.numComponents = this.components.length;
      },
      _getLinearizedBlockData: function(e8, n16) {
        var r14, o12, a14, t9, i9, s9, c8, f10, l8, u13, h8, v6 = this.width / e8, m7 = this.height / n16, d5 = 0, p6 = this.components.length, b4 = e8 * n16 * p6, k4 = new Uint8ClampedArray(b4), g6 = new Uint32Array(e8), C5 = 4294967288;
        for (c8 = 0; c8 < p6; c8++) {
          for (o12 = (r14 = this.components[c8]).scaleX * v6, a14 = r14.scaleY * m7, d5 = c8, h8 = r14.output, t9 = r14.blocksPerLine + 1 << 3, i9 = 0; i9 < e8; i9++) f10 = 0 | i9 * o12, g6[i9] = (f10 & C5) << 3 | 7 & f10;
          for (s9 = 0; s9 < n16; s9++) for (u13 = t9 * ((f10 = 0 | s9 * a14) & C5) | (7 & f10) << 3, i9 = 0; i9 < e8; i9++) k4[d5] = h8[u13 + g6[i9]], d5 += p6;
        }
        var w5 = this.decodeTransform;
        if (w5) for (c8 = 0; c8 < b4; ) for (f10 = 0, l8 = 0; f10 < p6; f10++, c8++, l8 += 2) k4[c8] = (k4[c8] * w5[l8] >> 8) + w5[l8 + 1];
        return k4;
      },
      _isColorConversionNeeded: function() {
        return this.adobe ? !!this.adobe.transformCode : 3 === this.numComponents ? 0 !== this.colorTransform : 1 === this.colorTransform;
      },
      _convertYccToRgb: function(e8) {
        for (var n16, r14, o12, a14 = 0, t9 = e8.length; a14 < t9; a14 += 3) n16 = e8[a14], r14 = e8[a14 + 1], o12 = e8[a14 + 2], e8[a14] = n16 - 179.456 + 1.402 * o12, e8[a14 + 1] = n16 + 135.459 - 0.344 * r14 - 0.714 * o12, e8[a14 + 2] = n16 - 226.816 + 1.772 * r14;
        return e8;
      },
      _convertYcckToRgb: function(e8) {
        for (var n16, r14, o12, a14, t9 = 0, i9 = 0, s9 = e8.length; i9 < s9; i9 += 4) n16 = e8[i9], r14 = e8[i9 + 1], o12 = e8[i9 + 2], a14 = e8[i9 + 3], e8[t9++] = r14 * (-660635669420364e-19 * r14 + 437130475926232e-18 * o12 - 54080610064599e-18 * n16 + 48449797120281e-17 * a14 - 0.154362151871126) - 122.67195406894 + o12 * (-957964378445773e-18 * o12 + 817076911346625e-18 * n16 - 0.00477271405408747 * a14 + 1.53380253221734) + n16 * (961250184130688e-18 * n16 - 0.00266257332283933 * a14 + 0.48357088451265) + a14 * (-336197177618394e-18 * a14 + 0.484791561490776), e8[t9++] = 107.268039397724 + r14 * (219927104525741e-19 * r14 - 640992018297945e-18 * o12 + 659397001245577e-18 * n16 + 426105652938837e-18 * a14 - 0.176491792462875) + o12 * (-778269941513683e-18 * o12 + 0.00130872261408275 * n16 + 770482631801132e-18 * a14 - 0.151051492775562) + n16 * (0.00126935368114843 * n16 - 0.00265090189010898 * a14 + 0.25802910206845) + a14 * (-318913117588328e-18 * a14 - 0.213742400323665), e8[t9++] = r14 * (-570115196973677e-18 * r14 - 263409051004589e-19 * o12 + 0.0020741088115012 * n16 - 0.00288260236853442 * a14 + 0.814272968359295) - 20.810012546947 + o12 * (-153496057440975e-19 * o12 - 132689043961446e-18 * n16 + 560833691242812e-18 * a14 - 0.195152027534049) + n16 * (0.00174418132927582 * n16 - 0.00255243321439347 * a14 + 0.116935020465145) + a14 * (-343531996510555e-18 * a14 + 0.24165260232407);
        return e8;
      },
      _convertYcckToCmyk: function(e8) {
        for (var n16, r14, o12, a14 = 0, t9 = e8.length; a14 < t9; a14 += 4) n16 = e8[a14], r14 = e8[a14 + 1], o12 = e8[a14 + 2], e8[a14] = 434.456 - n16 - 1.402 * o12, e8[a14 + 1] = 119.541 - n16 + 0.344 * r14 + 0.714 * o12, e8[a14 + 2] = 481.816 - n16 - 1.772 * r14;
        return e8;
      },
      _convertCmykToRgb: function(e8) {
        for (var n16, r14, o12, a14, t9 = 0, i9 = 1 / 255, s9 = 0, c8 = e8.length; s9 < c8; s9 += 4) n16 = e8[s9] * i9, r14 = e8[s9 + 1] * i9, o12 = e8[s9 + 2] * i9, a14 = e8[s9 + 3] * i9, e8[t9++] = 255 + n16 * (-4.387332384609988 * n16 + 54.48615194189176 * r14 + 18.82290502165302 * o12 + 212.25662451639585 * a14 - 285.2331026137004) + r14 * (1.7149763477362134 * r14 - 5.6096736904047315 * o12 - 17.873870861415444 * a14 - 5.497006427196366) + o12 * (-2.5217340131683033 * o12 - 21.248923337353073 * a14 + 17.5119270841813) - a14 * (21.86122147463605 * a14 + 189.48180835922747), e8[t9++] = 255 + n16 * (8.841041422036149 * n16 + 60.118027045597366 * r14 + 6.871425592049007 * o12 + 31.159100130055922 * a14 - 79.2970844816548) + r14 * (-15.310361306967817 * r14 + 17.575251261109482 * o12 + 131.35250912493976 * a14 - 190.9453302588951) + o12 * (4.444339102852739 * o12 + 9.8632861493405 * a14 - 24.86741582555878) - a14 * (20.737325471181034 * a14 + 187.80453709719578), e8[t9++] = 255 + n16 * (0.8842522430003296 * n16 + 8.078677503112928 * r14 + 30.89978309703729 * o12 - 0.23883238689178934 * a14 - 14.183576799673286) + r14 * (10.49593273432072 * r14 + 63.02378494754052 * o12 + 50.606957656360734 * a14 - 112.23884253719248) + o12 * (0.03296041114873217 * o12 + 115.60384449646641 * a14 - 193.58209356861505) - a14 * (22.33816807309886 * a14 + 180.12613974708367);
        return e8;
      },
      getData: function(n16, r14, o12) {
        if (this.numComponents > 4) throw new e7("Unsupported color mode");
        var a14 = this._getLinearizedBlockData(n16, r14);
        if (1 === this.numComponents && o12) {
          for (var t9 = a14.length, i9 = new Uint8ClampedArray(3 * t9), s9 = 0, c8 = 0; c8 < t9; c8++) {
            var f10 = a14[c8];
            i9[s9++] = f10, i9[s9++] = f10, i9[s9++] = f10;
          }
          return i9;
        }
        if (3 === this.numComponents && this._isColorConversionNeeded()) return this._convertYccToRgb(a14);
        if (4 === this.numComponents) {
          if (this._isColorConversionNeeded()) return o12 ? this._convertYcckToRgb(a14) : this._convertYcckToCmyk(a14);
          if (o12) return this._convertCmykToRgb(a14);
        }
        return a14;
      }
    }, l7;
  }();
}, void 0 !== (o4 = r3()) && (n5.exports = o4);
var t = o2(a5.exports);

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/JpgPlus.js
var r4 = class {
  static decode(r13, n15 = false) {
    const s8 = new Uint8Array(r13), o11 = new t();
    o11.parse(s8);
    const {
      width: a13,
      height: i8,
      numComponents: f9,
      eof: h7
    } = o11, l7 = o11.getData(a13, i8, true), c7 = a13 * i8;
    let u12, g6 = null, p5 = 0, w5 = 0, m6 = 0;
    if (!n15 && h7 < s8.length - 1) try {
      const t8 = new f4(s8.subarray(h7)).getBytes();
      g6 = new Uint8Array(c7);
      let r14 = 0;
      for (p5 = 0; p5 < t8.length; p5++) for (m6 = 7; m6 >= 0; m6--) g6[r14++] = t8[p5] >> m6 & 1;
    } catch {
    }
    if (1 === f9 && l7.length === a13 * i8) {
      const t8 = new Uint8Array(l7.buffer);
      u12 = [t8, t8, t8];
    } else {
      for (u12 = [], p5 = 0; p5 < 3; p5++) u12.push(new Uint8Array(c7));
      for (m6 = 0, w5 = 0; w5 < c7; w5++) for (p5 = 0; p5 < 3; p5++) u12[p5][w5] = l7[m6++];
    }
    return {
      width: a13,
      height: i8,
      pixels: u12,
      mask: g6
    };
  }
};

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/Lerc.js
var t2 = [{
  pixelType: "S8",
  size: 1,
  ctor: Int8Array,
  range: [-128, 127]
}, {
  pixelType: "U8",
  size: 1,
  ctor: Uint8Array,
  range: [0, 255]
}, {
  pixelType: "S16",
  size: 2,
  ctor: Int16Array,
  range: [-32768, 32767]
}, {
  pixelType: "U16",
  size: 2,
  ctor: Uint16Array,
  range: [0, 65536]
}, {
  pixelType: "S32",
  size: 4,
  ctor: Int32Array,
  range: [-2147483648, 2147483647]
}, {
  pixelType: "U32",
  size: 4,
  ctor: Uint32Array,
  range: [0, 4294967296]
}, {
  pixelType: "F32",
  size: 4,
  ctor: Float32Array,
  range: [-34027999387901484e22, 34027999387901484e22]
}, {
  pixelType: "F64",
  size: 8,
  ctor: Float64Array,
  range: [-17976931348623157e292, 17976931348623157e292]
}];
var n6 = null;
function r5() {
  return n6 || (n6 = import("./lerc-wasm-OWENVGRY.js").then((e7) => e7.l).then(({
    default: t8
  }) => t8({
    locateFile: (t9) => n4(`esri/layers/support/rasterFormats/${t9}`)
  })).then((e7) => {
    l3(e7);
  }), n6);
}
var a6 = {
  getBlobInfo: null,
  decode: null
};
function o5(e7) {
  return 16 + (e7 >> 3 << 3);
}
function s4(e7, t8, n15) {
  n15.set(e7.slice(t8, t8 + n15.length));
}
function l3(e7) {
  const {
    _malloc: n15,
    _free: r13,
    _lerc_getBlobInfo: l7,
    _lerc_getDataRanges: i8,
    _lerc_decode_4D: u12,
    asm: f9
  } = e7;
  let c7;
  const h7 = Object.values(f9).find((t8) => t8 && "buffer" in t8 && t8.buffer === e7.HEAPU8.buffer), y6 = (e8) => {
    const t8 = e8.map((e9) => o5(e9)), r14 = t8.reduce((e9, t9) => e9 + t9), a13 = n15(r14);
    c7 = new Uint8Array(h7.buffer);
    let s8 = t8[0];
    t8[0] = a13;
    for (let n16 = 1; n16 < t8.length; n16++) {
      const e9 = t8[n16];
      t8[n16] = t8[n16 - 1] + s8, s8 = e9;
    }
    return t8;
  };
  a6.getBlobInfo = (e8) => {
    const t8 = 12, n16 = 3, a13 = new Uint8Array(4 * t8), o11 = new Uint8Array(8 * n16), [u13, f10, p5] = y6([e8.length, a13.length, o11.length]);
    c7.set(e8, u13), c7.set(a13, f10), c7.set(o11, p5);
    let g6 = l7(u13, e8.length, f10, p5, t8, n16);
    if (g6) throw r13(u13), new Error(`lerc-getBlobInfo: error code is ${g6}`);
    c7 = new Uint8Array(h7.buffer), s4(c7, f10, a13), s4(c7, p5, o11);
    const d4 = new Uint32Array(a13.buffer), b4 = new Float64Array(o11.buffer), [w5, A5, , m6, U4, x4, C5, V3, T3, D4, z2] = d4, F2 = {
      version: w5,
      depthCount: D4,
      width: m6,
      height: U4,
      validPixelCount: C5,
      bandCount: x4,
      blobSize: V3,
      maskCount: T3,
      dataType: A5,
      minValue: b4[0],
      maxValue: b4[1],
      maxZerror: b4[2],
      statistics: [],
      bandCountWithNoData: z2
    };
    if (z2 && D4 > 1) return r13(u13), F2;
    if (1 === D4 && 1 === x4) return r13(u13), F2.statistics.push({
      minValue: b4[0],
      maxValue: b4[1]
    }), F2;
    const I4 = D4 * x4 * 8, _3 = new Uint8Array(I4), k4 = new Uint8Array(I4);
    let B3 = u13, S4 = 0, v5 = 0, E3 = false;
    if (c7.byteLength < u13 + 2 * I4 ? (r13(u13), E3 = true, [B3, S4, v5] = y6([e8.length, I4, I4]), c7.set(e8, B3)) : [S4, v5] = y6([I4, I4]), c7.set(_3, S4), c7.set(k4, v5), g6 = i8(B3, e8.length, D4, x4, S4, v5), g6) throw r13(B3), E3 || r13(S4), new Error(`lerc-getDataRanges: error code is ${g6}`);
    c7 = new Uint8Array(h7.buffer), s4(c7, S4, _3), s4(c7, v5, k4);
    const O4 = new Float64Array(_3.buffer), $ = new Float64Array(k4.buffer), j3 = F2.statistics;
    for (let r14 = 0; r14 < x4; r14++) if (D4 > 1) {
      const e9 = O4.slice(r14 * D4, (r14 + 1) * D4), t9 = $.slice(r14 * D4, (r14 + 1) * D4), n17 = Math.min.apply(null, e9), a14 = Math.max.apply(null, t9);
      j3.push({
        minValue: n17,
        maxValue: a14,
        depthStats: {
          minValues: e9,
          maxValues: t9
        }
      });
    } else j3.push({
      minValue: O4[r14],
      maxValue: $[r14]
    });
    return r13(B3), E3 || r13(S4), F2;
  }, a6.decode = (e8, n16) => {
    const {
      maskCount: a13,
      depthCount: o11,
      bandCount: l8,
      width: i9,
      height: f10,
      dataType: p5,
      bandCountWithNoData: g6
    } = n16, d4 = t2[p5], b4 = i9 * f10, w5 = new Uint8Array(b4 * l8), A5 = b4 * o11 * l8 * d4.size, m6 = new Uint8Array(A5), U4 = new Uint8Array(l8), x4 = new Uint8Array(8 * l8), [C5, V3, T3, D4, z2] = y6([e8.length, w5.length, m6.length, U4.length, x4.length]);
    c7.set(e8, C5), c7.set(w5, V3), c7.set(m6, T3), c7.set(U4, D4), c7.set(x4, z2);
    const F2 = u12(C5, e8.length, a13, V3, o11, i9, f10, l8, p5, T3, D4, z2);
    if (F2) throw r13(C5), new Error(`lerc-decode: error code is ${F2}`);
    c7 = new Uint8Array(h7.buffer), s4(c7, T3, m6), s4(c7, V3, w5);
    let I4 = null;
    if (g6) {
      s4(c7, D4, U4), s4(c7, z2, x4), I4 = [];
      const e9 = new Float64Array(x4.buffer);
      for (let t8 = 0; t8 < U4.length; t8++) I4.push(U4[t8] ? e9[t8] : null);
    }
    return r13(C5), {
      data: m6,
      maskData: w5,
      noDataValues: I4
    };
  };
}
function i3(e7, t8, n15, r13, a13) {
  if (n15 < 2) return e7;
  const o11 = new r13(t8 * n15);
  for (let s8 = 0, l7 = 0; s8 < t8; s8++) for (let r14 = 0, a14 = s8; r14 < n15; r14++, a14 += t8) o11[a14] = e7[l7++];
  return o11;
}
function u4(e7, n15 = {}) {
  const r13 = n15.inputOffset ?? 0, o11 = e7 instanceof Uint8Array ? e7.subarray(r13) : new Uint8Array(e7, r13), s8 = a6.getBlobInfo(o11), {
    data: l7,
    maskData: u12,
    noDataValues: f9
  } = a6.decode(o11, s8), {
    width: c7,
    height: h7,
    bandCount: y6,
    depthCount: p5,
    dataType: g6,
    maskCount: d4,
    statistics: b4
  } = s8, w5 = t2[g6], A5 = new w5.ctor(l7.buffer), m6 = [], U4 = [], x4 = c7 * h7, C5 = x4 * p5;
  for (let t8 = 0; t8 < y6; t8++) {
    const e8 = A5.subarray(t8 * C5, (t8 + 1) * C5);
    if (n15.returnInterleaved) m6.push(e8);
    else {
      const t9 = i3(e8, x4, p5, w5.ctor);
      m6.push(t9);
    }
    U4.push(u12.subarray(t8 * C5, (t8 + 1) * C5));
  }
  const V3 = 0 === d4 ? null : 1 === d4 ? U4[0] : new Uint8Array(x4);
  if (d4 > 1) {
    V3.set(U4[0]);
    for (let e8 = 1; e8 < U4.length; e8++) {
      const t8 = U4[e8];
      for (let e9 = 0; e9 < x4; e9++) V3[e9] = V3[e9] & t8[e9];
    }
  }
  const {
    noDataValue: T3
  } = n15, D4 = null != T3 && w5.range[0] <= T3 && w5.range[1] >= T3;
  if (d4 > 0 && D4) for (let t8 = 0; t8 < y6; t8++) {
    const e8 = m6[t8], n16 = U4[t8] || V3;
    for (let t9 = 0; t9 < x4; t9++) 0 === n16[t9] && (e8[t9] = T3);
  }
  const z2 = d4 === y6 && y6 > 1 ? U4 : null, {
    pixelType: F2
  } = w5;
  return {
    width: c7,
    height: h7,
    bandCount: y6,
    pixelType: F2,
    depthCount: p5,
    statistics: b4,
    pixels: m6,
    mask: V3,
    bandMasks: z2,
    noDataValues: f9
  };
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/Lzw.js
function e3(e7, n15, t8, r13 = true) {
  if (n15 % 4 != 0 || t8 % 4 != 0) {
    const i8 = new ArrayBuffer(4 * Math.ceil(t8 / 4)), o11 = new Uint8Array(i8), l7 = new Uint8Array(e7, n15, t8);
    if (r13) for (let e8 = 0; e8 < o11.length; e8 += 4) o11[e8] = l7[e8 + 3], o11[e8 + 1] = l7[e8 + 2], o11[e8 + 2] = l7[e8 + 1], o11[e8 + 3] = l7[e8];
    else o11.set(l7);
    return new Uint32Array(o11.buffer);
  }
  if (r13) {
    const r14 = new Uint8Array(e7, n15, t8), i8 = new Uint8Array(r14.length);
    for (let e8 = 0; e8 < i8.length; e8 += 4) i8[e8] = r14[e8 + 3], i8[e8 + 1] = r14[e8 + 2], i8[e8 + 2] = r14[e8 + 1], i8[e8 + 3] = r14[e8];
    return new Uint32Array(i8.buffer);
  }
  return new Uint32Array(e7, n15, t8 / 4);
}
function n7() {
  const e7 = [];
  for (let n15 = 0; n15 <= 257; n15++) e7[n15] = [n15];
  return e7;
}
function t3(e7, n15) {
  for (let t8 = 0; t8 < n15.length; t8++) e7.push(n15[t8]);
}
var r6 = /* @__PURE__ */ new Set();
function i4(i8, o11, l7, f9 = true) {
  const s8 = e3(i8, o11, l7, f9);
  let a13 = 9, c7 = n7(), u12 = 32, h7 = c7.length, d4 = [], w5 = 1, g6 = s8[0], y6 = 0;
  const A5 = s8.length, U4 = 8 * (4 * A5 - l7), p5 = [];
  for (; null != g6; ) {
    if (u12 >= a13) u12 -= a13, y6 = g6 >>> 32 - a13, g6 <<= a13;
    else {
      y6 = g6 >>> 32 - u12, g6 = s8[w5++];
      const e8 = a13 - u12;
      u12 = 32 - e8, y6 = (y6 << e8) + (g6 >>> u12), g6 <<= e8;
    }
    if (257 === y6) break;
    if (256 === y6) {
      a13 = 9, c7 = n7(), h7 = c7.length, d4 = [];
      continue;
    }
    const e7 = c7[y6];
    if (null == e7) {
      if (y6 > c7.length) throw new Error("data integrity issue: code does not exist on code page");
      d4.push(d4[0]), c7[h7++] = d4.slice(), t3(p5, d4);
    } else t3(p5, e7), d4.push(e7[0]), d4.length > 1 && (c7[h7++] = d4.slice()), d4 = e7.slice();
    if (r6.has(h7) && a13++, 0 === u12 && (g6 = s8[w5++], u12 = 32), w5 > A5 || w5 === A5 && u12 <= U4) break;
  }
  return new Uint8Array(p5);
}
r6.add(511), r6.add(1023), r6.add(2047), r6.add(4095), r6.add(8191);

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/Raw.js
var e4 = (e7, r13) => {
  const a13 = r13.width * r13.height, n15 = r13.pixelType;
  return Math.floor(e7.byteLength / (a13 * t4(n15)));
};
var t4 = (e7) => {
  let t8 = 1;
  switch (e7) {
    case Uint8Array:
    case Int8Array:
      t8 = 1;
      break;
    case Uint16Array:
    case Int16Array:
      t8 = 2;
      break;
    case Uint32Array:
    case Int32Array:
    case Float32Array:
      t8 = 4;
      break;
    case Float64Array:
      t8 = 8;
  }
  return t8;
};
var r7 = (e7, t8) => {
  if (8 * e7.byteLength < t8) return null;
  const r13 = new Uint8Array(e7, 0, Math.ceil(t8 / 8)), a13 = new Uint8Array(t8);
  let n15 = 0, s8 = 0, l7 = 0, i8 = 0;
  for (l7 = 0; l7 < r13.length - 1; l7++) for (s8 = r13[l7], i8 = 7; i8 >= 0; i8--) a13[n15++] = s8 >> i8 & 1;
  for (i8 = 7; n15 < t8 - 1; ) s8 = r13[r13.length - 1], a13[n15++] = s8 >> i8 & 1, i8--;
  return a13;
};
var a7 = class {
  static decode(a13, n15) {
    const s8 = n15.pixelType, l7 = [], i8 = n15.width * n15.height, h7 = e4(a13, n15), {
      bandIds: c7,
      format: y6
    } = n15, o11 = c7?.length || e4(a13, n15), b4 = a13.byteLength - a13.byteLength % (i8 * t4(s8)), f9 = new s8(a13, 0, i8 * h7);
    let u12, g6, A5, p5, d4 = null;
    if ("bip" === y6) for (u12 = 0; u12 < o11; u12++) {
      for (A5 = new s8(i8), p5 = c7 ? c7[u12] : u12, g6 = 0; g6 < i8; g6++) A5[g6] = f9[g6 * h7 + p5];
      l7.push(A5);
    }
    else if ("bsq" === y6) for (u12 = 0; u12 < o11; u12++) p5 = c7 ? c7[u12] : u12, l7.push(f9.subarray(p5 * i8, (p5 + 1) * i8));
    return b4 < a13.byteLength - 1 && (d4 = r7(a13.slice(b4), i8)), {
      pixels: l7,
      mask: d4
    };
  }
};

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/byteStreamUtils.js
function r8(r13, t8) {
  let n15 = 0, o11 = "", e7 = 0, f9 = 0;
  const c7 = r13.length;
  for (; n15 < c7; ) f9 = r13[n15++], e7 = f9 >> 4, e7 < 8 ? e7 = 1 : 15 === e7 ? (e7 = 4, f9 = (7 & f9) << 18 | (63 & r13[n15++]) << 12 | (63 & r13[n15++]) << 6 | 63 & r13[n15++]) : 14 === e7 ? (e7 = 3, f9 = (15 & f9) << 12 | (63 & r13[n15++]) << 6 | 63 & r13[n15++]) : (e7 = 2, f9 = (31 & f9) << 6 | 63 & r13[n15++]), (0 !== f9 || t8) && (o11 += String.fromCharCode(f9));
  return o11;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/TiffTags.js
var e5 = (() => {
  const e7 = [];
  return e7[254] = "NEWSUBFILETYPE", e7[255] = "SUBFILETYPE", e7[256] = "IMAGEWIDTH", e7[257] = "IMAGELENGTH", e7[258] = "BITSPERSAMPLE", e7[259] = "COMPRESSION", e7[262] = "PHOTOMETRICINTERPRETATION", e7[263] = "THRESHHOLDING", e7[264] = "CELLWIDTH", e7[265] = "CELLLENGTH", e7[266] = "FILLORDER", e7[269] = "DOCUMENTNAME", e7[270] = "IMAGEDESCRIPTION", e7[271] = "MAKE", e7[272] = "MODEL", e7[273] = "STRIPOFFSETS", e7[274] = "ORIENTATION", e7[277] = "SAMPLESPERPIXEL", e7[278] = "ROWSPERSTRIP", e7[279] = "STRIPBYTECOUNTS", e7[280] = "MINSAMPLEVALUE", e7[281] = "MAXSAMPLEVALUE", e7[282] = "XRESOLUTION", e7[283] = "YRESOLUTION", e7[284] = "PLANARCONFIGURATION", e7[285] = "PAGENAME", e7[286] = "XPOSITION", e7[287] = "YPOSITION", e7[288] = "FREEOFFSETS", e7[289] = "FREEBYTECOUNTS", e7[290] = "GRAYRESPONSEUNIT", e7[291] = "GRAYRESPONSECURVE", e7[292] = "T4OPTIONS", e7[293] = "T6OPTIONS", e7[296] = "RESOLUTIONUNIT", e7[297] = "PAGENUMBER", e7[300] = "COLORRESPONSEUNIT", e7[301] = "TRANSFERFUNCTION", e7[305] = "SOFTWARE", e7[306] = "DATETIME", e7[315] = "ARTIST", e7[316] = "HOSTCOMPUTER", e7[317] = "PREDICTOR", e7[318] = "WHITEPOINT", e7[319] = "PRIMARYCHROMATICITIES", e7[320] = "COLORMAP", e7[321] = "HALFTONEHINTS", e7[322] = "TILEWIDTH", e7[323] = "TILELENGTH", e7[324] = "TILEOFFSETS", e7[325] = "TILEBYTECOUNTS", e7[326] = "BADFAXLINES", e7[327] = "CLEANFAXDATA", e7[328] = "CONSECUTIVEBADFAXLINES", e7[330] = "SUBIFD", e7[332] = "INKSET", e7[333] = "INKNAMES", e7[334] = "NUMBEROFINKS", e7[336] = "DOTRANGE", e7[337] = "TARGETPRINTER", e7[338] = "EXTRASAMPLES", e7[339] = "SAMPLEFORMAT", e7[340] = "SMINSAMPLEVALUE", e7[341] = "SMAXSAMPLEVALUE", e7[342] = "TRANSFERRANGE", e7[347] = "JPEGTABLES", e7[512] = "JPEGPROC", e7[513] = "JPEGIFOFFSET", e7[514] = "JPEGIFBYTECOUNT", e7[515] = "JPEGRESTARTINTERVAL", e7[517] = "JPEGLOSSLESSPREDICTORS", e7[518] = "JPEGPOINTTRANSFORM", e7[519] = "JPEGQTABLES", e7[520] = "JPEGDCTABLES", e7[521] = "JPEGACTABLES", e7[529] = "YCBCRCOEFFICIENTS", e7[530] = "YCBCRSUBSAMPLING", e7[531] = "YCBCRPOSITIONING", e7[532] = "REFERENCEBLACKWHITE", e7[700] = "XMP", e7[33550] = "GEOPIXELSCALE", e7[33922] = "GEOTIEPOINTS", e7[33432] = "COPYRIGHT", e7[42112] = "GDAL_METADATA", e7[42113] = "GDAL_NODATA", e7[50844] = "RPCCOEFFICIENT", e7[34264] = "GEOTRANSMATRIX", e7[34735] = "GEOKEYDIRECTORY", e7[34736] = "GEODOUBLEPARAMS", e7[34737] = "GEOASCIIPARAMS", e7[34665] = "EXIFIFD", e7[34853] = "GPSIFD", e7[40965] = "INTEROPERABILITYIFD", e7;
})();
var i5 = (() => {
  const i8 = e5.slice();
  return i8[36864] = "ExifVersion", i8[40960] = "FlashpixVersion", i8[40961] = "ColorSpace", i8[42240] = "Gamma", i8[37121] = "ComponentsConfiguration", i8[37122] = "CompressedBitsPerPixel", i8[40962] = "PixelXDimension", i8[40963] = "PixelYDimension", i8[37500] = "MakerNote", i8[37510] = "UserComment", i8[40964] = "RelatedSoundFile", i8[36867] = "DateTimeOriginal", i8[36868] = "DateTimeDigitized", i8[36880] = "OffsetTime", i8[36881] = "OffsetTimeOriginal", i8[36882] = "OffsetTimeDigitized", i8[37520] = "SubSecTime", i8[37521] = "SubSecTimeOriginal", i8[37522] = "SubSecTimeDigitized", i8[37888] = "Temperature", i8[37889] = "Humidity", i8[37890] = "Pressure", i8[37891] = "WaterDepth", i8[37892] = "Acceleration", i8[37893] = "CameraElevationAngle", i8[42016] = "ImageUniqueID", i8[42032] = "CameraOwnerName", i8[42033] = "BodySerialNumber", i8[42034] = "LensSpecification", i8[42035] = "LensMake", i8[42036] = "LensModel", i8[42037] = "LensSerialNumber", i8[33434] = "ExposureTime", i8[33437] = "FNumber", i8[34850] = "ExposureProgram", i8[34852] = "SpectralSensitivity", i8[34855] = "PhotographicSensitivity", i8[34856] = "OECF", i8[34864] = "SensitivityType", i8[34865] = "StandardOutputSensitivity", i8[34866] = "RecommendedExposureIndex", i8[34867] = "ISOSpeed", i8[34868] = "ISOSpeedLatitudeyyy", i8[34869] = "ISOSpeedLatitudezzz", i8[37377] = "ShutterSpeedValue", i8[37378] = "ApertureValue", i8[37379] = "BrightnessValue", i8[37380] = "ExposureBiasValue", i8[37381] = "MaxApertureValue", i8[37382] = "SubjectDistance", i8[37383] = "MeteringMode", i8[37384] = "LightSource", i8[37385] = "Flash", i8[37386] = "FocalLength", i8[37396] = "SubjectArea", i8[41483] = "FlashEnergy", i8[41484] = "SpatialFrequencyResponse", i8[41486] = "FocalPlaneXResolution", i8[41487] = "FocalPlaneYResolution", i8[41488] = "FocalPlaneResolutionUnit", i8[41492] = "SubjectLocation", i8[41493] = "ExposureIndex", i8[41495] = "SensingMethod", i8[41728] = "FileSource", i8[41729] = "SceneType", i8[41730] = "CFAPattern", i8[41985] = "CustomRendered", i8[41986] = "ExposureMode", i8[41987] = "WhiteBalance", i8[41988] = "DigitalZoomRatio", i8[41989] = "FocalLengthIn35mmFilm", i8[41990] = "SceneCaptureType", i8[41991] = "GainControl", i8[41992] = "Contrast", i8[41993] = "Saturation", i8[41994] = "Sharpness", i8[41995] = "DeviceSettingDescription", i8[41996] = "SubjectDistanceRange", i8;
})();
var t5 = ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"];
var o6 = (() => {
  const e7 = [];
  return e7[1024] = "GTModelTypeGeoKey", e7[1025] = "GTRasterTypeGeoKey", e7[1026] = "GTCitationGeoKey", e7[2048] = "GeographicTypeGeoKey", e7[2049] = "GeogCitationGeoKey", e7[2050] = "GeogGeodeticDatumGeoKey", e7[2051] = "GeogPrimeMeridianGeoKey", e7[2052] = "GeogLinearUnitsGeoKey", e7[2053] = "GeogLinearUnitSizeGeoKey", e7[2054] = "GeogAngularUnitsGeoKey", e7[2055] = "GeogAngularUnitSizeGeoKey", e7[2056] = "GeogEllipsoidGeoKey", e7[2057] = "GeogSemiMajorAxisGeoKey", e7[2058] = "GeogSemiMinorAxisGeoKey", e7[2059] = "GeogInvFlatteningGeoKey", e7[2061] = "GeogPrimeMeridianLongGeoKey", e7[2060] = "GeogAzimuthUnitsGeoKey", e7[3072] = "ProjectedCSTypeGeoKey", e7[3073] = "PCSCitationGeoKey", e7[3074] = "ProjectionGeoKey", e7[3075] = "ProjCoordTransGeoKey", e7[3076] = "ProjLinearUnitsGeoKey", e7[3077] = "ProjLinearUnitSizeGeoKey", e7[3078] = "ProjStdParallel1GeoKey", e7[3079] = "ProjStdParallel2GeoKey", e7[3080] = "ProjNatOriginLongGeoKey", e7[3081] = "ProjNatOriginLatGeoKey", e7[3082] = "ProjFalseEastingGeoKey", e7[3083] = "ProjFalseNorthingGeoKey", e7[3084] = "ProjFalseOriginLongGeoKey", e7[3085] = "ProjFalseOriginLatGeoKey", e7[3086] = "ProjFalseOriginEastingGeoKey", e7[3087] = "ProjFalseOriginNorthingGeoKey", e7[3088] = "ProjCenterLongGeoKey", e7[3090] = "ProjCenterEastingGeoKey", e7[3091] = "ProjCenterNorthingGeoKey", e7[3092] = "ProjScaleAtNatOriginGeoKey", e7[3093] = "ProjScaleAtCenterGeoKey", e7[3094] = "ProjAzimuthAngleGeoKey", e7[3095] = "ProjStraightVertPoleLongGeoKey", e7[4096] = "VerticalCSTypeGeoKey", e7[4097] = "VerticalCitationGeoKey", e7[4098] = "VerticalDatumGeoKey", e7[4099] = "VerticalUnitsGeoKey", e7;
})();
var S = (i8, t8) => {
  let o11 = (t8 || e5)[i8];
  return void 0 === o11 && (o11 = "unknown" + String(i8)), o11;
};
var E = /* @__PURE__ */ new Map();
E.set("EXIFIFD", i5), E.set("GPSIFD", t5);
var n8 = {
  tiffTags: e5,
  ifdTags: E,
  geoKeys: o6,
  getTagName: S
};

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/utils.js
var r9 = (() => {
  const r13 = new ArrayBuffer(4), n15 = new Uint8Array(r13);
  return new Uint32Array(r13)[0] = 1, 1 === n15[0];
})();

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/TiffDecoder.js
var f5 = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8];
var u5 = 4294967296;
var c2 = /* @__PURE__ */ new Set([1, 5, 6, 7, 8, 34712, 34887]);
function h2(e7, t8) {
  let n15 = "unknown";
  return 3 === e7 ? n15 = 64 === t8 ? "f64" : "f32" : 1 === e7 ? 1 === t8 ? n15 = "u1" : 2 === t8 ? n15 = "u2" : 4 === t8 ? n15 = "u4" : t8 <= 8 ? n15 = "u8" : t8 <= 16 ? n15 = "u16" : t8 <= 32 && (n15 = "u32") : 2 === e7 && (t8 <= 8 ? n15 = "s8" : t8 <= 16 ? n15 = "s16" : t8 <= 32 && (n15 = "s32")), n15;
}
function g2(e7) {
  let t8 = null;
  switch (e7 ? e7.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t8 = Uint8Array;
      break;
    case "u16":
      t8 = Uint16Array;
      break;
    case "u32":
      t8 = Uint32Array;
      break;
    case "s8":
      t8 = Int8Array;
      break;
    case "s16":
      t8 = Int16Array;
      break;
    case "s32":
      t8 = Int32Array;
      break;
    case "f64":
      t8 = Float64Array;
      break;
    default:
      t8 = Float32Array;
  }
  return t8;
}
function E2(e7, t8) {
  return {
    x: t8[0] * e7.x + t8[1] * e7.y + t8[2],
    y: t8[3] * e7.x + t8[4] * e7.y + t8[5]
  };
}
function T(e7, t8) {
  return e7.get(t8)?.values;
}
function I(e7, t8) {
  return e7.get(t8)?.values;
}
function w2(e7, t8) {
  return e7.get(t8)?.values?.[0];
}
function p(e7, t8) {
  return e7.get(t8)?.values?.[0];
}
function d(e7, t8, n15, a13 = 0, i8 = n8.tiffTags, s8 = 4) {
  const l7 = 8 === s8, o11 = l7 ? C(new DataView(e7, n15, 8), 0, t8) : new DataView(e7, n15, 2).getUint16(0, t8), f9 = 4 + 2 * s8, u12 = l7 ? 8 : 2, c7 = u12 + o11 * f9;
  if (n15 + c7 > e7.byteLength) return {
    success: false,
    ifd: null,
    nextIFD: null,
    requiredBufferSize: c7
  };
  const h7 = n15 + c7 + 4 <= e7.byteLength ? v(new DataView(e7, n15 + c7, 8 === s8 ? 8 : 4), 0, t8, 8 === s8) : null, g6 = n15 + u12, E3 = /* @__PURE__ */ new Map();
  let T3, I4, w5, p5, d4, m6 = 0, y6 = 0;
  for (let S4 = 0; S4 < o11; S4++) {
    I4 = new DataView(e7, g6 + f9 * S4, f9), w5 = I4.getUint16(0, t8), d4 = I4.getUint16(2, t8), p5 = n8.getTagName(w5, i8);
    const n16 = [];
    2 === s8 ? (m6 = I4.getUint16(4, t8), y6 = I4.getUint16(6, t8)) : 4 === s8 ? (m6 = I4.getUint32(4, t8), y6 = I4.getUint32(8, t8)) : 8 === s8 && (m6 = v(I4, 4, t8, true), y6 = v(I4, 12, t8, true), n16.push(I4.getUint32(12, t8)), n16.push(I4.getUint32(16, t8))), T3 = {
      id: w5,
      type: d4,
      valueCount: m6,
      valueOffset: y6,
      valueOffsets: n16,
      values: null
    }, L(e7, t8, T3, a13, false, s8), E3.set(p5, T3);
  }
  return {
    success: true,
    ifd: E3,
    nextIFD: h7,
    requiredBufferSize: c7
  };
}
var m = (e7, t8) => u4(e7, {
  inputOffset: t8
}).pixels[0];
function y3(e7, t8) {
  if (1 !== t8 && 2 !== t8 && 4 !== t8) return e7;
  const n15 = new Uint8Array(e7), a13 = 8 / t8, i8 = new Uint8Array(e7.byteLength * a13);
  let s8 = 0;
  const r13 = 2 ** t8 - 1;
  for (let l7 = 0; l7 < n15.length; l7++) {
    const e8 = n15[l7];
    for (let n16 = 0; n16 < a13; n16++) i8[s8++] = e8 << t8 * n16 >>> 8 - t8 & r13;
  }
  return i8.buffer;
}
function S2(e7, n15, a13) {
  const i8 = new t();
  i8.parse(e7), i8.colorTransform = 6 === a13 ? -1 : 0;
  const s8 = i8.getData(i8.width, i8.height, 1 !== n15 && 4 !== n15);
  return new Uint8Array(s8.buffer);
}
function A2(e7) {
  const t8 = new f4(e7).getBytes(), n15 = new ArrayBuffer(t8.length), a13 = new Uint8Array(n15);
  return a13.set(t8), a13;
}
function M(e7, t8, a13, s8, r13) {
  return __async(this, null, function* () {
    const o11 = r9 === t8, f9 = p(a13, "BITSPERSAMPLE"), u12 = p(a13, "SAMPLESPERPIXEL") ?? 1, c7 = p(a13, "PHOTOMETRICINTERPRETATION"), E3 = p(a13, "SAMPLEFORMAT") ?? 1, T3 = h2(E3, f9), I4 = p(a13, "COMPRESSION") ?? 1, w5 = g2(T3);
    let d4, M3, P3;
    if (34887 === I4) return yield r5(), m(e7, s8);
    if (1 === I4) d4 = e7.slice(s8, s8 + r13), M3 = new Uint8Array(d4);
    else if (8 === I4 || 32946 === I4) M3 = new Uint8Array(e7, s8, r13), M3 = A2(M3), d4 = M3.buffer;
    else if (6 === I4) M3 = new Uint8Array(e7, s8, r13), M3 = S2(M3, u12, c7), d4 = M3.buffer;
    else if (7 === I4) {
      const t9 = a13.get("JPEGTABLES").values, n15 = t9.length - 2;
      M3 = new Uint8Array(n15 + r13 - 2);
      for (let e8 = 0; e8 < n15; e8++) M3[e8] = t9[e8];
      const i8 = new Uint8Array(e7, s8 + 2, r13 - 2);
      for (let e8 = 0; e8 < i8.length; e8++) M3[n15 + e8] = i8[e8];
      M3 = S2(M3, u12, c7), d4 = M3.buffer;
    } else {
      if (5 !== I4) throw new Error("tiff-decode: unsupport compression " + I4);
      M3 = i4(e7, s8, r13, t8), d4 = M3.buffer;
    }
    if (d4 = y3(d4, f9), "u8" === T3 || "s8" === T3 || o11) P3 = new w5(d4);
    else {
      d4 = new ArrayBuffer(M3.length);
      const e8 = new Uint8Array(d4);
      switch (T3) {
        case "u16":
        case "s16":
          for (let t9 = 0; t9 < M3.length; t9 += 2) e8[t9] = M3[t9 + 1], e8[t9 + 1] = M3[t9];
          break;
        case "u32":
        case "s32":
        case "f32":
          for (let t9 = 0; t9 < M3.length; t9 += 4) e8[t9] = M3[t9 + 3], e8[t9 + 1] = M3[t9 + 2], e8[t9 + 2] = M3[t9 + 1], e8[t9 + 3] = M3[t9];
      }
      P3 = new w5(d4);
    }
    const O4 = p(a13, "PREDICTOR") ?? 1, b4 = p(a13, "TILEWIDTH"), x4 = p(a13, "TILELENGTH");
    if (O4 > 1 && (5 === I4 || 8 === I4 || 32946 === I4) && b4 && x4) {
      const e8 = D(a13), t9 = new w5(P3.length);
      t9.set(P3), P3 = W(t9, x4, b4, 3 === E3 && 3 === O4, e8 ? 1 : u12);
    }
    return P3;
  });
}
function P(e7, t8, n15) {
  return __async(this, null, function* () {
    const a13 = I(n15, "TILEOFFSETS");
    if (void 0 === a13) return null;
    const i8 = I(n15, "TILEBYTECOUNTS"), {
      width: s8,
      height: r13,
      pixelType: l7,
      tileWidth: o11,
      tileHeight: f9
    } = R([n15]), u12 = D(n15, t8), c7 = p(n15, "SAMPLESPERPIXEL") || t8.planes, h7 = s8 * r13, E3 = p(n15, "BITSPERSAMPLE"), T3 = 34887 === (p(n15, "COMPRESSION") ?? 1), w5 = g2(l7), d4 = [];
    for (let g6 = 0; g6 < c7; g6++) d4.push(new w5(h7));
    let m6, y6, S4, A5, P3, O4, b4, x4, L3, U4, N2, k4, C5;
    const G3 = Math.ceil(s8 / o11), v5 = new Uint8Array(h7).fill(255);
    let F2 = false;
    if (E3 % 8 == 0) if (T3 && u12 && c7 > 1) {
      const l8 = Math.round(a13.length / c7);
      for (m6 = 0; m6 < l8; m6++) {
        O4 = Math.floor(m6 / G3) * f9, b4 = m6 % G3 * o11, x4 = O4 * s8 + b4;
        for (let l9 = 0; l9 < c7; l9++) {
          const u13 = m6 * c7 + l9;
          for (0 === i8[u13] ? (S4 = null, F2 = true) : S4 = yield M(e7, t8.littleEndian, n15, a13[u13], i8[u13]), U4 = 0, L3 = x4, k4 = Math.min(o11, s8 - b4), N2 = Math.min(f9, r13 - O4), C5 = d4[l9], A5 = 0; A5 < N2; A5++) for (L3 = x4 + A5 * s8, U4 = A5 * o11, P3 = 0; P3 < k4; P3++, L3++, U4++) S4 ? C5[L3] = S4[U4] : v5[L3] = 0;
        }
      }
    } else for (m6 = 0; m6 < a13.length; m6++) for (O4 = Math.floor(m6 / G3) * f9, b4 = m6 % G3 * o11, x4 = O4 * s8 + b4, 0 === i8[m6] ? (S4 = null, F2 = true) : S4 = yield M(e7, t8.littleEndian, n15, a13[m6], i8[m6]), U4 = 0, L3 = x4, k4 = Math.min(o11, s8 - b4), N2 = Math.min(f9, r13 - O4), y6 = 0; y6 < c7; y6++) if (C5 = d4[y6], u12 || T3) for (A5 = 0; A5 < N2; A5++) for (L3 = x4 + A5 * s8, U4 = o11 * f9 * y6 + A5 * o11, P3 = 0; P3 < k4; P3++, L3++, U4++) S4 ? C5[L3] = S4[U4] : v5[L3] = 0;
    else for (A5 = 0; A5 < N2; A5++) for (L3 = x4 + A5 * s8, U4 = A5 * o11 * c7 + y6, P3 = 0; P3 < k4; P3++, L3++, U4 += c7) S4 ? C5[L3] = S4[U4] : v5[L3] = 0;
    return {
      width: s8,
      height: r13,
      pixelType: l7,
      pixels: d4,
      mask: F2 ? v5 : void 0
    };
  });
}
var O = (e7, t8, n15) => {
  const a13 = r9 === t8.littleEndian, s8 = I(n15, "STRIPOFFSETS");
  if (void 0 === s8) return null;
  const {
    width: r13,
    height: o11,
    pixelType: f9
  } = R([n15]), u12 = p(n15, "SAMPLESPERPIXEL") || t8.planes, c7 = p(n15, "PHOTOMETRICINTERPRETATION"), h7 = r13 * o11, E3 = p(n15, "BITSPERSAMPLE"), T3 = g2(f9), w5 = new T3(h7 * u12), d4 = I(n15, "STRIPBYTECOUNTS"), m6 = p(n15, "ROWSPERSTRIP"), M3 = p(n15, "COMPRESSION") ?? 1;
  let P3, O4, b4, x4, L3, D4, U4, N2, k4;
  if (E3 % 8 == 0) for (P3 = 0; P3 < s8.length; P3++) {
    if (L3 = P3 * (m6 * r13) * u12, "u8" === f9 || "s8" === f9 || a13) 8 === M3 || 32946 === M3 ? (U4 = new Uint8Array(e7, s8[P3], d4[P3]), U4 = A2(U4), D4 = U4.buffer) : 6 === M3 ? (U4 = new Uint8Array(e7, s8[P3], d4[P3]), U4 = S2(U4, u12, c7), D4 = U4.buffer) : 5 === M3 ? (U4 = i4(e7, s8[P3], d4[P3], t8.littleEndian), D4 = U4.buffer) : D4 = e7.slice(s8[P3], s8[P3] + d4[P3]), D4 = y3(D4, E3), x4 = new T3(D4);
    else {
      switch (6 === M3 || 8 === M3 || 32946 === M3 ? (U4 = new Uint8Array(e7, s8[P3], d4[P3]), N2 = A2(U4), D4 = N2.buffer) : (D4 = new ArrayBuffer(d4[P3]), U4 = new Uint8Array(e7, s8[P3], d4[P3]), N2 = new Uint8Array(D4)), f9) {
        case "u16":
        case "s16":
          for (b4 = 0; b4 < U4.length; b4 += 2) N2[b4] = U4[b4 + 1], N2[b4 + 1] = U4[b4];
          break;
        case "u32":
        case "s32":
        case "f32":
          for (b4 = 0; b4 < U4.length; b4 += 4) N2[b4] = U4[b4 + 3], N2[b4 + 1] = U4[b4 + 2], N2[b4 + 2] = U4[b4 + 1], N2[b4 + 3] = U4[b4];
      }
      D4 = y3(D4, E3), x4 = new T3(D4);
    }
    w5.set(x4, L3);
  }
  const C5 = [];
  if (1 === u12) C5.push(w5);
  else for (P3 = 0; P3 < u12; P3++) {
    for (k4 = new T3(h7), O4 = 0; O4 < h7; O4++) k4[O4] = w5[O4 * u12 + P3];
    C5.push(k4);
  }
  return {
    width: r13,
    height: o11,
    pixelType: f9,
    pixels: C5
  };
};
var b = (e7, t8, n15) => {
  if (!(e7 && e7.length > 0 && t8 && n15)) return null;
  let a13, i8, s8;
  const r13 = e7[0].length, l7 = e7.length, o11 = new Uint8Array(r13);
  for (let f9 = 0; f9 < l7; f9++) if (a13 = e7[f9], i8 = t8[f9], s8 = n15[f9], 0 === f9) for (let e8 = 0; e8 < r13; e8++) o11[e8] = a13[e8] < i8 || a13[e8] > s8 ? 0 : 1;
  else for (let e8 = 0; e8 < r13; e8++) o11[e8] && (o11[e8] = a13[e8] < i8 || a13[e8] > s8 ? 0 : 1);
  return o11;
};
var x = (e7) => {
  if (!e7) return null;
  const t8 = e7.match(/<Item(.*?)Item>/gi);
  if (!t8 || 0 === t8.length) return null;
  const n15 = /* @__PURE__ */ new Map();
  let a13, i8, s8, r13, l7;
  for (let w5 = 0; w5 < t8.length; w5++) a13 = t8[w5], i8 = a13.slice(6, a13.indexOf(">")), r13 = a13.indexOf("sample="), r13 > -1 && (l7 = a13.slice(r13 + 8, a13.indexOf('"', r13 + 8))), r13 = a13.indexOf("name="), r13 > -1 && (i8 = a13.slice(r13 + 6, a13.indexOf('"', r13 + 6))), i8 && (s8 = a13.slice(a13.indexOf(">") + 1, a13.indexOf("</Item>")).trim(), null != l7 ? n15.has(i8) ? n15.get(i8)[l7] = s8 : n15.set(i8, [s8]) : n15.set(i8, s8)), l7 = null;
  const o11 = n15.get("STATISTICS_MINIMUM"), f9 = n15.get("STATISTICS_MAXIMUM"), u12 = n15.get("STATISTICS_MEAN"), c7 = n15.get("STATISTICS_STDDEV");
  let h7 = null;
  if (o11 && f9) {
    h7 = [];
    for (let e8 = 0; e8 < o11.length; e8++) h7.push({
      min: parseFloat(o11[e8]),
      max: parseFloat(f9[e8]),
      avg: u12 && parseFloat(u12[e8]),
      stddev: c7 && parseFloat(c7[e8])
    });
  }
  const g6 = n15.get("BandName"), E3 = n15.get("WavelengthMin"), T3 = n15.get("WavelengthMax");
  let I4 = null;
  if (g6) {
    I4 = [];
    for (let e8 = 0; e8 < g6.length; e8++) I4.push({
      BandName: g6[e8],
      WavelengthMin: E3 && parseFloat(E3[e8]),
      WavelengthMax: T3 && parseFloat(T3[e8])
    });
  }
  return {
    statistics: h7,
    bandProperties: I4,
    dataType: n15.get("DataType"),
    rawMetadata: n15
  };
};
function L(e7, t8, n15, a13 = 0, i8 = false, s8 = 4) {
  if (n15.values) return true;
  const r13 = n15.type, l7 = n15.valueCount;
  let o11 = n15.valueOffset, c7 = [];
  const h7 = f5[r13], g6 = 8 * h7, E3 = l7 * h7, T3 = l7 * f5[r13] * 8;
  let I4, w5;
  const p5 = 8 === s8 ? 64 : 32, d4 = n15.valueOffsets;
  if (T3 > p5) {
    if (E3 > (i8 ? e7.byteLength : e7 ? e7.byteLength - o11 + a13 : 0)) return n15.offlineOffsetSize = [o11, E3], n15.values = null, false;
  }
  if (T3 <= p5) {
    if (!t8) if (p5 <= 32) o11 >>>= 32 - T3;
    else {
      const e8 = d4?.length ? d4[0] : o11 >>> 0, t9 = d4?.length ? d4[1] : Math.round((o11 - e8) / u5);
      T3 <= 32 ? (o11 = e8 >>> 32 - T3, d4[0] = o11) : (o11 = e8 * 2 ** (32 - T3) + (t9 >>> 32 - T3), d4[0] = e8, d4[1] = t9 >>> 32 - T3);
    }
    if (1 === l7 && g6 === p5) c7 = [o11];
    else if (64 === p5) {
      const e8 = d4?.length ? d4[0] : o11 >>> 0, t9 = d4?.length ? d4[1] : Math.round((o11 - e8) / u5);
      let n16 = e8, a14 = 32;
      for (w5 = 1; w5 <= l7; w5++) {
        const e9 = 32 - g6 * w5 % 32;
        if (a14 < g6) {
          const i9 = n16 << e9 >>> 32 - a14, s9 = t9 << 32 - a14 >>> 32 - a14;
          n16 = t9, c7.push(i9 + s9 * 2 ** (g6 - a14)), a14 -= 32 - (g6 - a14);
        } else c7.push(n16 << e9 >>> 32 - g6), a14 -= g6;
        0 === a14 && (a14 = 32, n16 = t9);
      }
    } else for (w5 = 1; w5 <= l7; w5++) {
      const e8 = 32 - g6 * w5;
      c7.push(o11 << e8 >>> 32 - g6);
    }
  } else {
    o11 -= a13, i8 && (o11 = 0);
    for (let n16 = o11; n16 < o11 + E3; n16 += h7) {
      switch (r13) {
        case 1:
        case 2:
        case 7:
          I4 = new DataView(e7, n16, 1).getUint8(0);
          break;
        case 3:
          I4 = new DataView(e7, n16, 2).getUint16(0, t8);
          break;
        case 4:
        case 13:
          I4 = new DataView(e7, n16, 4).getUint32(0, t8);
          break;
        case 5:
          I4 = new DataView(e7, n16, 4).getUint32(0, t8) / new DataView(e7, n16 + 4, 4).getUint32(0, t8);
          break;
        case 6:
          I4 = new DataView(e7, n16, 1).getInt8(0);
          break;
        case 8:
          I4 = new DataView(e7, n16, 2).getInt16(0, t8);
          break;
        case 9:
          I4 = new DataView(e7, n16, 4).getInt32(0, t8);
          break;
        case 10:
          I4 = new DataView(e7, n16, 4).getInt32(0, t8) / new DataView(e7, n16 + 4, 4).getInt32(0, t8);
          break;
        case 11:
          I4 = new DataView(e7, n16, 4).getFloat32(0, t8);
          break;
        case 12:
          I4 = new DataView(e7, n16, 8).getFloat64(0, t8);
          break;
        case 16:
        case 18:
          I4 = C(new DataView(e7, n16, 8), 0, t8);
          break;
        case 17:
          I4 = G(new DataView(e7, n16, 8), 0, t8);
          break;
        default:
          I4 = null;
      }
      c7.push(I4);
    }
  }
  if (2 === r13) {
    let e8 = "";
    const t9 = c7;
    for (c7 = [], w5 = 0; w5 < t9.length; w5++) 0 === t9[w5] && "" !== e8 ? (c7.push(e8), e8 = "") : e8 += String.fromCharCode(t9[w5]);
    "" === e8 && 0 !== c7.length || c7.push(e8);
  }
  return n15.values = c7, true;
}
function R(e7) {
  const t8 = e7[0], n15 = p(t8, "TILEWIDTH"), a13 = p(t8, "TILELENGTH"), i8 = p(t8, "IMAGEWIDTH"), s8 = p(t8, "IMAGELENGTH"), r13 = p(t8, "BITSPERSAMPLE"), l7 = p(t8, "SAMPLESPERPIXEL"), o11 = p(t8, "SAMPLEFORMAT") ?? 1, f9 = h2(o11, r13), u12 = D(t8), g6 = T(t8, "GDAL_NODATA");
  let d4 = null;
  g6?.length && (d4 = g6.map((e8) => parseFloat(e8)), d4.some((e8) => isNaN(e8)) && (d4 = null));
  const m6 = p(t8, "COMPRESSION") ?? 1;
  let y6;
  switch (m6) {
    case 1:
      y6 = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      y6 = "CCITT";
      break;
    case 5:
      y6 = "LZW";
      break;
    case 6:
    case 7:
      y6 = "JPEG";
      break;
    case 32773:
      y6 = "PACKBITS";
      break;
    case 8:
    case 32946:
      y6 = "DEFLATE";
      break;
    case 34712:
      y6 = "JPEG2000";
      break;
    case 34887:
      y6 = "LERC";
      break;
    default:
      y6 = String(m6);
  }
  let S4 = true, A5 = "";
  c2.has(m6) || (S4 = false, A5 += "unsupported tag compression " + m6), o11 > 3 && (S4 = false, A5 += "unsupported tag sampleFormat " + o11), 1 !== r13 && 2 !== r13 && 4 !== r13 && r13 % 8 != 0 && (S4 = false, A5 += "unsupported tag bitsPerSample " + r13);
  const M3 = w2(t8, "GEOASCIIPARAMS");
  let P3;
  if (M3) {
    const e8 = M3.split("|").find((e9) => e9.includes("ESRI PE String = ")), t9 = e8 ? e8.replace("ESRI PE String = ", "") : "";
    P3 = t9.startsWith("COMPD_CS") || t9.startsWith("PROJCS") || t9.startsWith("GEOGCS") ? {
      wkid: null,
      wkt: t9
    } : null;
  }
  const O4 = I(t8, "GEOTIEPOINTS"), b4 = I(t8, "GEOPIXELSCALE"), L3 = I(t8, "GEOTRANSMATRIX"), R3 = t8.has("GEOKEYDIRECTORY") ? t8.get("GEOKEYDIRECTORY").data : null;
  let k4, C5, G3 = false, v5 = false;
  if (R3) {
    G3 = 2 === p(R3, "GTRasterTypeGeoKey");
    const e8 = p(R3, "GTModelTypeGeoKey");
    if (2 === e8) {
      const e9 = p(R3, "GeographicTypeGeoKey");
      e9 >= 1024 && e9 <= 32766 && (P3 = {
        wkid: e9
      }), P3 || 32767 !== e9 || (v5 = true, P3 = {
        wkid: 4326
      });
    } else if (1 === e8) {
      const e9 = p(R3, "ProjectedCSTypeGeoKey");
      e9 >= 1024 && e9 <= 32766 && (P3 = {
        wkid: e9
      });
    }
  }
  if (b4 && O4 && O4.length >= 6 ? (k4 = [b4[0], 0, O4[3] - O4[0] * b4[0], 0, -Math.abs(b4[1]), O4[4] - O4[1] * b4[1]], G3 && (k4[2] -= 0.5 * k4[0] + 0.5 * k4[1], k4[5] -= 0.5 * k4[3] + 0.5 * k4[4])) : L3 && 16 === L3.length && (k4 = G3 ? [L3[0], L3[1], L3[3] - 0.5 * L3[0], L3[4], L3[5], L3[7] - 0.5 * L3[5]] : [L3[0], L3[1], L3[3], L3[4], L3[5], L3[7]]), k4) {
    const e8 = [{
      x: 0,
      y: s8
    }, {
      x: 0,
      y: 0
    }, {
      x: i8,
      y: s8
    }, {
      x: i8,
      y: 0
    }];
    let t9, n16 = Number.POSITIVE_INFINITY, a14 = Number.POSITIVE_INFINITY, r14 = Number.NEGATIVE_INFINITY, l8 = Number.NEGATIVE_INFINITY;
    for (let i9 = 0; i9 < e8.length; i9++) t9 = E2(e8[i9], k4), n16 = t9.x > n16 ? n16 : t9.x, r14 = t9.x < r14 ? r14 : t9.x, a14 = t9.y > a14 ? a14 : t9.y, l8 = t9.y < l8 ? l8 : t9.y;
    C5 = {
      xmin: n16,
      xmax: r14,
      ymin: a14,
      ymax: l8,
      spatialReference: P3
    };
  } else C5 = {
    xmin: -0.5,
    ymin: 0.5 - s8,
    xmax: i8 - 0.5,
    ymax: 0.5,
    spatialReference: P3
  };
  v5 && (C5.xmax - C5.xmin > 400 || Math.max(Math.abs(C5.xmin), Math.abs(C5.xmax)) > 361) && (P3 = null, C5.spatialReference = null);
  const F2 = U(e7);
  let B3, W2, H2, Y2, _3;
  if (F2.length > 0) {
    H2 = Math.round(Math.log(i8 / p(F2[0], "IMAGEWIDTH")) / Math.LN2);
    const e8 = F2[F2.length - 1];
    Y2 = F2.length, B3 = p(e8, "TILEWIDTH"), W2 = p(e8, "TILELENGTH");
  }
  B3 = null != Y2 && Y2 > 0 ? B3 || n15 : null, W2 = null != Y2 && Y2 > 0 ? W2 || a13 : null, n15 && (_3 = [{
    maxCol: Math.ceil(i8 / n15) - 1,
    maxRow: Math.ceil(s8 / a13) - 1,
    minRow: 0,
    minCol: 0
  }], F2.forEach((e8) => {
    _3.push({
      maxCol: Math.ceil(p(e8, "IMAGEWIDTH") / p(e8, "TILEWIDTH")) - 1,
      maxRow: Math.ceil(p(e8, "IMAGELENGTH") / p(e8, "TILELENGTH")) - 1,
      minRow: 0,
      minCol: 0
    });
  }));
  const j3 = w2(e7[0], "GDAL_METADATA"), K = x(j3);
  A5 += " " + V({
    width: i8,
    height: s8,
    tileWidth: n15,
    tileHeight: a13,
    planes: l7,
    ifds: e7
  });
  const X = N(e7).length === F2.length + 1, J = F2?.length ? F2.map((e8) => ({
    x: i8 / p(e8, "IMAGEWIDTH"),
    y: s8 / p(e8, "IMAGELENGTH")
  })) : void 0;
  return {
    width: i8,
    height: s8,
    tileWidth: n15,
    tileHeight: a13,
    planes: l7,
    isBSQ: u12,
    pixelType: f9,
    compression: y6,
    noData: d4,
    hasMaskBand: X,
    isSupported: S4,
    pyramidResolutions: J,
    message: A5,
    extent: C5,
    isPseudoGeographic: v5,
    affine: b4 ? null : k4,
    firstPyramidLevel: H2,
    maximumPyramidLevel: Y2,
    pyramidBlockWidth: B3,
    pyramidBlockHeight: W2,
    tileBoundary: _3,
    metadata: K
  };
}
function D(e7, t8) {
  const n15 = T(e7, "PLANARCONFIGURATION");
  return n15 ? 2 === n15[0] : !!t8 && t8.isBSQ;
}
function U(e7) {
  return e7.filter((e8) => 1 === p(e8, "NEWSUBFILETYPE"));
}
function N(e7) {
  return e7.filter((e8) => {
    const t8 = !(4 & ~(p(e8, "NEWSUBFILETYPE") ?? 0)), n15 = 4 === p(e8, "PHOTOMETRICINTERPRETATION");
    return t8 && n15;
  });
}
function k(e7) {
  const {
    littleEndian: t8,
    isBigTiff: n15,
    firstIFDPos: a13
  } = F(e7);
  let i8 = a13;
  const s8 = [];
  do {
    const a14 = B(e7, t8, i8, 0, n8.tiffTags, n15 ? 8 : 4);
    if (!a14.success) break;
    s8.push(a14.ifd), i8 = a14.nextIFD;
  } while (i8 > 0);
  return __spreadProps(__spreadValues({}, R(s8)), {
    littleEndian: t8,
    isBigTiff: n15,
    ifds: s8,
    pyramidIFDs: U(s8),
    maskIFDs: N(s8)
  });
}
function C(e7, t8, n15) {
  const a13 = e7.getUint32(t8, n15), i8 = e7.getUint32(t8 + 4, n15);
  return n15 ? i8 * u5 + a13 : a13 * u5 + i8;
}
function G(e7, t8, n15) {
  let a13 = n15 ? e7.getInt32(t8, n15) : e7.getUint32(t8, n15), i8 = n15 ? e7.getUint32(t8 + 4, n15) : e7.getInt32(t8 + 4, n15);
  const s8 = (n15 ? a13 : i8) >= 0 ? 1 : -1;
  n15 ? a13 *= s8 : i8 *= s8;
  return s8 * (n15 ? i8 * u5 + a13 : a13 * u5 + i8);
}
function v(e7, t8, n15, a13) {
  return a13 ? C(e7, t8, n15) : e7.getUint32(t8, n15);
}
function F(e7) {
  const t8 = new DataView(e7, 0, 16), n15 = t8.getUint16(0, false);
  let a13 = null;
  if (18761 === n15) a13 = true;
  else {
    if (19789 !== n15) throw new Error("unexpected endianess byte");
    a13 = false;
  }
  const i8 = t8.getUint16(2, a13);
  if (42 !== i8 && 43 !== i8) throw new Error("unexpected tiff identifier");
  let s8 = 4;
  const r13 = 43 === i8;
  if (r13) {
    const e8 = t8.getUint16(s8, a13);
    if (s8 += 2, 8 !== e8) throw new Error("unsupported bigtiff version");
    if (0 !== t8.getUint16(s8, a13)) throw new Error("unsupported bigtiff version");
    s8 += 2;
  }
  return {
    littleEndian: a13,
    isBigTiff: r13,
    firstIFDPos: v(t8, s8, a13, r13)
  };
}
function B(t8, n15, a13, i8 = 0, s8 = n8.tiffTags, l7 = 4) {
  const o11 = d(t8, n15, a13, i8, s8, l7);
  let f9;
  const u12 = o11.ifd;
  if (u12) {
    if (n8.ifdTags.forEach((e7, a14) => {
      u12.has(a14) && (f9 = u12.get(a14), f9.data = d(t8, n15, f9.valueOffset - i8, i8, e7).ifd);
    }), u12.has("GEOKEYDIRECTORY")) {
      f9 = u12.get("GEOKEYDIRECTORY");
      const e7 = f9.values;
      if (e7 && e7.length > 4) {
        const a14 = e7[0] + "." + e7[1] + "." + e7[2];
        f9.data = d(t8, n15, f9.valueOffset + 6 - i8, i8, n8.geoKeys, 2).ifd, f9.data && f9.data.set("GEOTIFFVersion", {
          id: 0,
          type: 2,
          valueCount: 1,
          valueOffset: null,
          values: [a14]
        });
      }
    }
    if (u12.has("XMP")) {
      f9 = u12.get("XMP");
      const t9 = f9.values;
      "number" == typeof t9[0] && 7 === f9.type && (f9.values = [r8(new Uint8Array(t9))]);
    }
  }
  return o11;
}
function V(e7) {
  const {
    width: t8,
    height: n15,
    tileHeight: a13,
    tileWidth: i8
  } = e7, s8 = e7.planes, r13 = i8 ? i8 * a13 : t8 * n15, l7 = p(e7.ifds[0], "BITSPERSAMPLE");
  let o11 = "";
  return r13 * s8 > 2 ** 30 / (l7 > 8 ? l7 / 8 : 1) && (o11 = i8 ? "tiled tiff exceeding 1 gigabits per tile is not supported" : "scanline tiff exceeding 1 gigabits is not supported"), o11;
}
function W(e7, t8, n15, a13, i8) {
  const s8 = a13 ? 4 : 1, r13 = n15 * s8 * i8;
  a13 && (e7 = new Uint8Array(e7.buffer));
  for (let f9 = 0; f9 < t8; f9++) {
    const t9 = f9 * r13;
    for (let n16 = i8; n16 < r13; n16++) e7[t9 + n16] += e7[t9 + n16 - i8];
  }
  if (!a13) return e7;
  const l7 = new Uint8Array(e7.length), o11 = n15 * i8;
  for (let f9 = 0; f9 < t8; f9++) {
    const t9 = f9 * r13;
    for (let n16 = 0; n16 < o11; n16++) for (let a14 = 0; a14 < s8; a14++) l7[t9 + n16 * s8 + a14] = e7[t9 + n16 + (s8 - a14 - 1) * o11];
  }
  return new Float32Array(l7.buffer);
}
function H(e7, t8) {
  return __async(this, null, function* () {
    const {
      headerInfo: n15,
      ifd: a13,
      offsets: i8,
      sizes: r13
    } = t8, l7 = [];
    for (let s8 = 0; s8 < i8.length; s8++) {
      r13[s8];
      const t9 = yield M(e7, n15.littleEndian, a13, i8[s8], r13[s8] || e7.byteLength);
      l7.push(t9);
    }
    const o11 = D(a13, n15), f9 = p(a13, "BITSPERSAMPLE"), u12 = h2(p(a13, "SAMPLEFORMAT") ?? 1, f9), c7 = p(a13, "SAMPLESPERPIXEL") || n15.planes, E3 = g2(u12), T3 = p(a13, "TILEWIDTH"), I4 = p(a13, "TILELENGTH"), w5 = p(a13, "COMPRESSION") ?? 1, d4 = T3 * I4;
    let m6;
    const y6 = [];
    let S4 = l7[0];
    const A5 = 34887 === w5;
    for (let s8 = 0; s8 < c7; s8++) {
      if (m6 = new E3(d4), l7.length === c7) S4 = l7[s8], S4.length === d4 && (m6 = S4);
      else if (S4.length) if (o11 || A5) m6 = S4.length === d4 ? S4 : S4.slice(d4 * s8, d4 * (s8 + 1));
      else for (let e8 = 0; e8 < d4; e8++) m6[e8] = S4[e8 * c7 + s8];
      y6.push(m6);
    }
    const P3 = n15.noData ? n15.noData[0] : t8.noDataValue, O4 = n15.metadata ? n15.metadata.statistics : null, x4 = O4 ? O4.map((e8) => e8.min) : null, L3 = O4 ? O4.map((e8) => e8.max) : null, R3 = {
      pixelType: u12,
      width: T3,
      height: I4,
      pixels: y6,
      noDataValue: P3
    };
    return null != P3 ? l2(R3, P3) : x4 && L3 && t8.applyMinMaxConstraint && (R3.mask = b(y6, x4, L3)), R3;
  });
}
function Y(_0) {
  return __async(this, arguments, function* (e7, t8 = {}) {
    const n15 = t8.pyramidLevel || 0, a13 = t8.headerInfo || k(e7), {
      ifds: i8,
      noData: r13
    } = a13;
    if (0 === i8.length) throw new Error("no valid image file directory");
    const l7 = V(a13);
    if (l7) throw l7;
    let o11 = null;
    const f9 = -1 === n15 ? i8[i8.length - 1] : i8[n15], u12 = r13 ?? t8.noDataValue;
    return o11 = a13.tileWidth ? yield P(e7, a13, f9) : O(e7, a13, f9), o11 ? (null != u12 && l2(o11, u12), o11) : o11;
  });
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFormats/RasterCodec.js
var m2 = function(t8) {
  var e7, a13, i8, s8, r13, n15;
  function o11(t9) {
    var e8, a14, i9, s9, r14, n16, o12, h7, c7, l7, p5, d4, u12;
    for (this.data = t9, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, r14 = null; ; ) {
      switch (e8 = this.readUInt32(), h7 = function() {
        var t10, e9;
        for (e9 = [], t10 = 0; t10 < 4; ++t10) e9.push(String.fromCharCode(this.data[this.pos++]));
        return e9;
      }.call(this).join(""), h7) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = {
            numFrames: this.readUInt32(),
            numPlays: this.readUInt32() || 1 / 0,
            frames: []
          };
          break;
        case "PLTE":
          this.palette = this.read(e8);
          break;
        case "fcTL":
          r14 && this.animation.frames.push(r14), this.pos += 4, r14 = {
            width: this.readUInt32(),
            height: this.readUInt32(),
            xOffset: this.readUInt32(),
            yOffset: this.readUInt32()
          }, s9 = this.readUInt16(), i9 = this.readUInt16() || 100, r14.delay = 1e3 * s9 / i9, r14.disposeOp = this.data[this.pos++], r14.blendOp = this.data[this.pos++], r14.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for ("fdAT" === h7 && (this.pos += 4, e8 -= 4), t9 = (null != r14 ? r14.data : void 0) || this.imgData, p5 = 0; 0 <= e8 ? p5 < e8 : p5 > e8; 0 <= e8 ? ++p5 : --p5) t9.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (this.transparency.indexed = this.read(e8), (c7 = 255 - this.transparency.indexed.length) > 0) for (d4 = 0; 0 <= c7 ? d4 < c7 : d4 > c7; 0 <= c7 ? ++d4 : --d4) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(e8)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(e8);
          }
          break;
        case "tEXt":
          n16 = (l7 = this.read(e8)).indexOf(0), o12 = String.fromCharCode.apply(String, l7.slice(0, n16)), this.text[o12] = String.fromCharCode.apply(String, l7.slice(n16 + 1));
          break;
        case "IEND":
          return r14 && this.animation.frames.push(r14), this.colors = function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }.call(this), this.hasAlphaChannel = 4 === (u12 = this.colorType) || 6 === u12, a14 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * a14, this.colorSpace = function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }.call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += e8;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return o11.load = function(t9, e8, a14) {
    var i9;
    return "function" == typeof e8 && (a14 = e8), (i9 = new XMLHttpRequest()).open("GET", t9, true), i9.responseType = "arraybuffer", i9.onload = function() {
      var t10;
      return t10 = new o11(new Uint8Array(i9.response || i9.mozResponseArrayBuffer)), "function" == typeof (null != e8 ? e8.getContext : void 0) && t10.render(e8), "function" == typeof a14 ? a14(t10) : void 0;
    }, i9.send(null);
  }, a13 = 1, i8 = 2, e7 = 0, o11.prototype.read = function(t9) {
    var e8, a14;
    for (a14 = [], e8 = 0; 0 <= t9 ? e8 < t9 : e8 > t9; 0 <= t9 ? ++e8 : --e8) a14.push(this.data[this.pos++]);
    return a14;
  }, o11.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o11.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o11.prototype.decodePixels = function(t9) {
    var e8, a14, i9, s9, r14, n16, o12, h7, c7, p5, d4, u12, f9, m6, g6, w5, y6, x4, b4, k4, T3, I4, C5;
    if (null == t9 && (t9 = this.imgData), 0 === t9.length) return new Uint8Array(0);
    for (t9 = (t9 = new f4(t9)).getBytes(), w5 = (u12 = this.pixelBitlength / 8) * this.width, f9 = new Uint8Array(w5 * this.height), n16 = t9.length, g6 = 0, m6 = 0, a14 = 0; m6 < n16; ) {
      switch (t9[m6++]) {
        case 0:
          for (s9 = b4 = 0; b4 < w5; s9 = b4 += 1) f9[a14++] = t9[m6++];
          break;
        case 1:
          for (s9 = k4 = 0; k4 < w5; s9 = k4 += 1) e8 = t9[m6++], r14 = s9 < u12 ? 0 : f9[a14 - u12], f9[a14++] = (e8 + r14) % 256;
          break;
        case 2:
          for (s9 = T3 = 0; T3 < w5; s9 = T3 += 1) e8 = t9[m6++], i9 = (s9 - s9 % u12) / u12, y6 = g6 && f9[(g6 - 1) * w5 + i9 * u12 + s9 % u12], f9[a14++] = (y6 + e8) % 256;
          break;
        case 3:
          for (s9 = I4 = 0; I4 < w5; s9 = I4 += 1) e8 = t9[m6++], i9 = (s9 - s9 % u12) / u12, r14 = s9 < u12 ? 0 : f9[a14 - u12], y6 = g6 && f9[(g6 - 1) * w5 + i9 * u12 + s9 % u12], f9[a14++] = (e8 + Math.floor((r14 + y6) / 2)) % 256;
          break;
        case 4:
          for (s9 = C5 = 0; C5 < w5; s9 = C5 += 1) e8 = t9[m6++], i9 = (s9 - s9 % u12) / u12, r14 = s9 < u12 ? 0 : f9[a14 - u12], 0 === g6 ? y6 = x4 = 0 : (y6 = f9[(g6 - 1) * w5 + i9 * u12 + s9 % u12], x4 = i9 && f9[(g6 - 1) * w5 + (i9 - 1) * u12 + s9 % u12]), o12 = r14 + y6 - x4, h7 = Math.abs(o12 - r14), p5 = Math.abs(o12 - y6), d4 = Math.abs(o12 - x4), c7 = h7 <= p5 && h7 <= d4 ? r14 : p5 <= d4 ? y6 : x4, f9[a14++] = (e8 + c7) % 256;
          break;
        default:
          throw new Error("Invalid filter algorithm: " + t9[m6 - 1]);
      }
      g6++;
    }
    return f9;
  }, o11.prototype.decodePalette = function() {
    var t9, e8, a14, i9, s9, r14, n16, o12, h7;
    for (a14 = this.palette, r14 = this.transparency.indexed || [], s9 = new Uint8Array((r14.length || 0) + a14.length), i9 = 0, a14.length, t9 = 0, e8 = n16 = 0, o12 = a14.length; n16 < o12; e8 = n16 += 3) s9[i9++] = a14[e8], s9[i9++] = a14[e8 + 1], s9[i9++] = a14[e8 + 2], s9[i9++] = null != (h7 = r14[t9++]) ? h7 : 255;
    return s9;
  }, o11.prototype.copyToImageData = function(t9, e8) {
    var a14, i9, s9, r14, n16, o12, h7, c7, l7, p5, d4;
    if (i9 = this.colors, l7 = null, a14 = this.hasAlphaChannel, this.palette.length && (l7 = null != (d4 = this._decodedPalette) ? d4 : this._decodedPalette = this.decodePalette(), i9 = 4, a14 = true), c7 = (s9 = t9.data || t9).length, n16 = l7 || e8, r14 = o12 = 0, 1 === i9) for (; r14 < c7; ) h7 = l7 ? 4 * e8[r14 / 4] : o12, p5 = n16[h7++], s9[r14++] = p5, s9[r14++] = p5, s9[r14++] = p5, s9[r14++] = a14 ? n16[h7++] : this.transparency.grayscale && this.transparency.grayscale === p5 ? 0 : 255, o12 = h7;
    else for (; r14 < c7; ) h7 = l7 ? 4 * e8[r14 / 4] : o12, s9[r14++] = n16[h7++], s9[r14++] = n16[h7++], s9[r14++] = n16[h7++], s9[r14++] = a14 ? n16[h7++] : this.transparency.rgb && this.transparency.rgb[1] === n16[h7 - 3] && this.transparency.rgb[3] === n16[h7 - 2] && this.transparency.rgb[5] === n16[h7 - 1] ? 0 : 255, o12 = h7;
  }, o11.prototype.decode = function() {
    var t9;
    return t9 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t9, this.decodePixels()), t9;
  }, r13 = t8.document && t8.document.createElement("canvas"), n15 = r13 && r13.getContext("2d"), s8 = function(t9) {
    var e8;
    return n15.width = t9.width, n15.height = t9.height, n15.clearRect(0, 0, t9.width, t9.height), n15.putImageData(t9, 0, 0), (e8 = new Image()).src = r13.toDataURL(), e8;
  }, o11.prototype.decodeFrames = function(t9) {
    var e8, a14, i9, r14, n16, o12, h7, c7;
    if (this.animation) {
      for (c7 = [], a14 = n16 = 0, o12 = (h7 = this.animation.frames).length; n16 < o12; a14 = ++n16) e8 = h7[a14], i9 = t9.createImageData(e8.width, e8.height), r14 = this.decodePixels(new Uint8Array(e8.data)), this.copyToImageData(i9, r14), e8.imageData = i9, c7.push(e8.image = s8(i9));
      return c7;
    }
  }, o11.prototype.renderFrame = function(t9, s9) {
    var r14, n16, o12;
    return r14 = (n16 = this.animation.frames)[s9], o12 = n16[s9 - 1], 0 === s9 && t9.clearRect(0, 0, this.width, this.height), (null != o12 ? o12.disposeOp : void 0) === a13 ? t9.clearRect(o12.xOffset, o12.yOffset, o12.width, o12.height) : (null != o12 ? o12.disposeOp : void 0) === i8 && t9.putImageData(o12.imageData, o12.xOffset, o12.yOffset), r14.blendOp === e7 && t9.clearRect(r14.xOffset, r14.yOffset, r14.width, r14.height), t9.drawImage(r14.image, r14.xOffset, r14.yOffset);
  }, o11.prototype.animate = function(t9) {
    var e8, a14, i9, s9, r14, n16, o12 = this;
    return a14 = 0, n16 = this.animation, s9 = n16.numFrames, i9 = n16.frames, r14 = n16.numPlays, (e8 = function() {
      var n17, h7;
      if (n17 = a14++ % s9, h7 = i9[n17], o12.renderFrame(t9, n17), s9 > 1 && a14 / s9 < r14) return o12.animation._timeout = setTimeout(e8, h7.delay);
    })();
  }, o11.prototype.stopAnimation = function() {
    var t9;
    return clearTimeout(null != (t9 = this.animation) ? t9._timeout : void 0);
  }, o11.prototype.render = function(t9) {
    var e8, a14;
    return t9._png && t9._png.stopAnimation(), t9._png = this, t9.width = this.width, t9.height = this.height, e8 = t9.getContext("2d"), this.animation ? (this.decodeFrames(e8), this.animate(e8)) : (a14 = e8.createImageData(this.width, this.height), this.copyToImageData(a14, this.decodePixels()), e8.putImageData(a14, 0, 0));
  }, o11;
}(self);
var g3 = /* @__PURE__ */ new Set(["jpg", "png", "bmp", "gif"]);
function w3(e7, s8) {
  return __async(this, null, function* () {
    if (!r9) throw new s("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
    yield r5();
    const {
      offset: r13
    } = s8, {
      width: h7,
      height: c7,
      pixelType: l7,
      statistics: p5,
      depthCount: d4,
      noDataValues: u12,
      bandMasks: m6,
      pixels: g6,
      mask: w5
    } = u4(e7, {
      inputOffset: r13,
      returnInterleaved: s8.returnInterleaved
    }), y6 = new g({
      width: h7,
      height: c7,
      pixelType: l7.toLowerCase(),
      pixels: g6,
      mask: w5,
      statistics: p5.map(({
        minValue: t8,
        maxValue: e8
      }) => new l(t8, e8)),
      bandMasks: m6,
      depthCount: d4,
      noDataValues: u12
    });
    return p5?.length || y6.updateStatistics(), y6;
  });
}
function y4(t8, i8) {
  return __async(this, null, function* () {
    const s8 = yield Y(t8, __spreadProps(__spreadValues({}, i8), {
      noDataValue: null
    }));
    n2(s8);
    const r13 = new g({
      width: s8.width,
      height: s8.height,
      pixels: s8.pixels,
      pixelType: s8.pixelType.toLowerCase(),
      mask: s8.mask,
      bandMasks: s8.bandMasks,
      statistics: null
    });
    return r13.updateStatistics(), r13;
  });
}
function x2(t8, e7) {
  return __async(this, null, function* () {
    const i8 = yield H(t8, e7.customOptions), s8 = new g({
      width: i8.width,
      height: i8.height,
      pixels: i8.pixels,
      pixelType: i8.pixelType.toLowerCase(),
      mask: i8.mask,
      statistics: null
    });
    return s8.updateStatistics(), s8;
  });
}
function b2(t8, e7) {
  const i8 = e7.pixelType || "u8", s8 = g.getPixelArrayConstructor(i8), r13 = "u8" === i8 ? t8 : new s8(t8.buffer), n15 = [], o11 = e7.planes || 1;
  if (1 === o11) n15.push(r13);
  else for (let a13 = 0; a13 < o11; a13++) {
    const i9 = (e7.width || 1) * (e7.height || t8.length), h8 = new s8(i9);
    for (let t9 = 0; t9 < i9; t9++) h8[t9] = r13[t9 * o11 + a13];
    n15.push(h8);
  }
  const h7 = new g({
    width: e7.width || 1,
    height: e7.height || t8.length,
    pixels: n15,
    pixelType: i8,
    statistics: null
  });
  return h7.updateStatistics(), h7;
}
function k2(t8, e7) {
  return b2(new f4(new Uint8Array(t8)).getBytes(), e7);
}
function T2(t8, e7) {
  return b2(i4(t8, e7.offset, e7.eof, !e7.isInputBigEndian), e7);
}
function I2(t8, e7, i8) {
  const {
    pixelTypeCtor: s8
  } = S3(e7.pixelType), r13 = (0, a7.decode)(t8, {
    width: e7.width,
    height: e7.height,
    pixelType: s8,
    format: i8
  }), n15 = new g({
    width: e7.width,
    height: e7.height,
    pixels: r13.pixels,
    pixelType: e7.pixelType,
    mask: r13.mask,
    statistics: null
  });
  return n15.updateStatistics(), n15;
}
function C2(t8, e7) {
  const i8 = r4.decode(t8, e7.hasNoZlibMask ?? void 0), s8 = new g({
    width: i8.width,
    height: i8.height,
    pixels: i8.pixels,
    pixelType: "u8",
    mask: i8.mask,
    statistics: null
  });
  return s8.updateStatistics(), s8;
}
function v2(t8, e7) {
  const i8 = new Uint8Array(t8), s8 = new m2(i8), {
    width: r13,
    height: n15
  } = e7, o11 = r13 * n15, h7 = s8.decode();
  let c7, l7 = 0, p5 = 0;
  const d4 = new Uint8Array(o11);
  for (l7 = 0; l7 < o11; l7++) d4[l7] = h7[4 * l7 + 3];
  const u12 = new g({
    width: r13,
    height: n15,
    pixels: [],
    pixelType: "u8",
    mask: d4,
    statistics: []
  });
  for (l7 = 0; l7 < 3; l7++) {
    for (c7 = new Uint8Array(o11), p5 = 0; p5 < o11; p5++) c7[p5] = h7[4 * p5 + l7];
    u12.addData({
      pixels: c7
    });
  }
  return u12.updateStatistics(), u12;
}
function A3(t8, e7, i8, r13) {
  return __async(this, null, function* () {
    const n15 = new i2(), o11 = __spreadValues({
      applyJpegMask: false,
      format: e7
    }, i8), h7 = yield n15.decode(t8, o11, r13), c7 = new g(h7);
    return c7.updateStatistics(), c7;
  });
}
function U2(e7) {
  if (null == e7) throw new s("rasterCodec:decode", "parameter encodeddata is required.");
  const a13 = new Uint8Array(e7, 0, 10);
  let i8 = "";
  return 255 === a13[0] && 216 === a13[1] ? i8 = "jpg" : 137 === a13[0] && 80 === a13[1] && 78 === a13[2] && 71 === a13[3] ? i8 = "png" : 67 === a13[0] && 110 === a13[1] && 116 === a13[2] && 90 === a13[3] && 73 === a13[4] && 109 === a13[5] && 97 === a13[6] && 103 === a13[7] && 101 === a13[8] && 32 === a13[9] ? i8 = "lerc" : 76 === a13[0] && 101 === a13[1] && 114 === a13[2] && 99 === a13[3] && 50 === a13[4] && 32 === a13[5] ? i8 = "lerc2" : 73 === a13[0] && 73 === a13[1] && 42 === a13[2] && 0 === a13[3] || 77 === a13[0] && 77 === a13[1] && 0 === a13[2] && 42 === a13[3] || 73 === a13[0] && 73 === a13[1] && 43 === a13[2] && 0 === a13[3] || 77 === a13[0] && 77 === a13[1] && 0 === a13[2] && 43 === a13[3] ? i8 = "tiff" : 71 === a13[0] && 73 === a13[1] && 70 === a13[2] ? i8 = "gif" : 66 === a13[0] && 77 === a13[1] ? i8 = "bmp" : String.fromCharCode.apply(null, a13).toLowerCase().includes("error") && (i8 = "error"), i8;
}
function D2(e7) {
  let a13 = null;
  switch (e7) {
    case "lerc":
    case "lerc2":
      a13 = w3;
      break;
    case "jpg":
      a13 = C2;
      break;
    case "png":
      a13 = v2;
      break;
    case "bsq":
    case "bip":
      a13 = (t8, a14) => I2(t8, a14, e7);
      break;
    case "tiff":
      a13 = y4;
      break;
    case "deflate":
      a13 = k2;
      break;
    case "lzw":
      a13 = T2;
      break;
    case "error":
      a13 = () => {
        throw new s("rasterCodec:decode", "input data contains error");
      };
      break;
    default:
      a13 = () => {
        throw new s("rasterCodec:decode", "unsupported raster format");
      };
  }
  return a13;
}
function S3(t8) {
  let e7 = null, a13 = null;
  switch (t8 ? t8.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      a13 = 255, e7 = Uint8Array;
      break;
    case "u16":
      a13 = a13 || 65535, e7 = Uint16Array;
      break;
    case "u32":
      a13 = a13 || 2 ** 32 - 1, e7 = Uint32Array;
      break;
    case "s8":
      a13 = a13 || -128, e7 = Int8Array;
      break;
    case "s16":
      a13 = a13 || -32768, e7 = Int16Array;
      break;
    case "s32":
      a13 = a13 || 0 - 2 ** 31, e7 = Int32Array;
      break;
    default:
      e7 = Float32Array;
  }
  return {
    pixelTypeCtor: e7,
    noDataValue: a13
  };
}
function O2(t8, e7 = 1) {
  if (!t8) return;
  const {
    pixels: i8,
    width: s8,
    height: r13,
    mask: n15
  } = t8;
  if (!i8 || 0 === i8.length) return;
  const o11 = i8.length, h7 = s8 - 1, c7 = r13 - 1, l7 = [];
  let p5, d4, u12, f9, m6, g6, w5 = null;
  const y6 = g.getPixelArrayConstructor(t8.pixelType);
  if (0 === e7) {
    for (p5 = 0; p5 < o11; p5++) {
      for (m6 = i8[p5], g6 = new y6(h7 * c7), d4 = 0; d4 < c7; d4++) for (f9 = d4 * s8, u12 = 0; u12 < h7; u12++) g6[d4 * h7 + u12] = m6[f9 + u12];
      l7.push(g6);
    }
    if (null != n15) for (w5 = new Uint8Array(h7 * c7), d4 = 0; d4 < c7; d4++) for (f9 = d4 * s8, u12 = 0; u12 < h7; u12++) w5[d4 * h7 + u12] = n15[f9 + u12];
  } else {
    for (p5 = 0; p5 < o11; p5++) {
      for (m6 = i8[p5], g6 = new y6(h7 * c7), d4 = 0; d4 < c7; d4++) for (f9 = d4 * s8, u12 = 0; u12 < h7; u12++) g6[d4 * h7 + u12] = (m6[f9 + u12] + m6[f9 + u12 + 1] + m6[f9 + s8 + u12] + m6[f9 + s8 + u12 + 1]) / 4;
      l7.push(g6);
    }
    if (n15) for (w5 = new Uint8Array(h7 * c7), d4 = 0; d4 < c7; d4++) for (f9 = d4 * s8, u12 = 0; u12 < h7; u12++) w5[d4 * h7 + u12] = Math.min.apply(null, [n15[f9 + u12], n15[f9 + u12 + 1], n15[f9 + s8 + u12], n15[f9 + s8 + u12 + 1]]);
  }
  t8.width = h7, t8.height = c7, t8.mask = w5, t8.pixels = l7;
}
function P2(t8) {
  let e7 = U2(t8);
  return "lerc2" === e7 ? e7 = "lerc" : "error" === e7 && (e7 = ""), e7;
}
function j2(_0) {
  return __async(this, arguments, function* (e7, i8 = {}, s8) {
    if (null == e7) throw new s("rasterCodec:decode", "missing encodeddata parameter.");
    let r13 = i8.format?.toLowerCase();
    if (!("bsq" !== r13 && "bip" !== r13 || null != i8.width && null != i8.height)) throw new s("rasterCodec:decode", "requires width and height in options parameter.");
    if ("tiff" === r13 && i8.customOptions) return x2(e7, i8);
    if ((!r13 || "bsq" !== r13 && "bip" !== r13 && "deflate" !== r13 && "lzw" !== r13) && (r13 = U2(e7)), i8.useCanvas && g3.has(r13)) return A3(e7, r13, i8, s8);
    const n15 = D2(r13);
    let o11;
    i8.isPoint && (null != (i8 = __spreadValues({}, i8)).width && i8.width++, null != i8.height && i8.height++);
    const {
      offsets: h7
    } = i8;
    if (h7 && h7.length > 1) {
      const t8 = h7.map((t9, a13) => n15(e7.slice(t9, h7[a13 + 1]), i8)), s9 = yield Promise.all(t8);
      o11 = s9[0], o11.pixels = s9.map((t9) => t9.pixels[0]);
      const r14 = s9.map((t9) => t9.mask);
      s9.some((t9) => null != t9) && (r14.forEach((t9, e8) => {
        null == t9 && (r14[e8] = new Uint8Array(o11.width * o11.height).fill(255));
      }), o11.bandMasks = r14, o11.mask = g.combineBandMasks(r14)), o11.updateStatistics();
    } else o11 = yield n15(e7, __spreadProps(__spreadValues({}, i8), {
      offset: h7?.[0] ?? i8.offset
    }));
    return "jpg" !== r13 && null != i8.noDataValue && 1 === o11.depthCount && l2(o11, i8.noDataValue, {
      customFloatTolerance: i8.tolerance
    }), i8.isPoint && O2(o11), o11;
  });
}

// ../../../node_modules/@arcgis/core/renderers/support/stretchRendererUtils.js
var n9 = new n3({
  none: "none",
  standardDeviation: "standard-deviation",
  histogramEqualization: "histogram-equalization",
  minMax: "min-max",
  percentClip: "percent-clip",
  sigmoid: "sigmoid"
});
var a8 = {
  0: "none",
  3: "standardDeviation",
  4: "histogramEqualization",
  5: "minMax",
  6: "percentClip",
  9: "sigmoid"
};

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/stretchUtils.js
var i6 = 1;
var o7 = [0.299, 0.587, 0.114];
function r10(t8, n15 = 256) {
  n15 = Math.min(n15, 256);
  const {
    size: e7,
    counts: s8
  } = t8, i8 = new Uint8Array(e7), o11 = s8.reduce((t9, e8) => t9 + e8 / n15, 0);
  let r13 = 0, a13 = 0, l7 = 0, f9 = o11;
  for (let u12 = 0; u12 < e7; u12++) if (l7 += s8[u12], !(u12 < e7 - 1 && l7 + s8[u12 + 1] < f9)) {
    for (; r13 < n15 - 1 && f9 < l7; ) r13++, f9 += o11;
    for (let t9 = a13; t9 <= u12; t9++) i8[t9] = r13;
    a13 = u12 + 1;
  }
  for (let u12 = a13; u12 < e7; u12++) i8[u12] = n15 - 1;
  return i8;
}
function a9(t8) {
  const {
    minCutOff: n15,
    maxCutOff: e7,
    gamma: s8,
    pixelType: i8,
    rounding: o11
  } = t8, r13 = t8.outMin || 0, a13 = t8.outMax || 255;
  if (!["u8", "u16", "s8", "s16"].includes(i8)) return null;
  const f9 = n15.length;
  let u12, c7, m6 = 0;
  "s8" === i8 ? m6 = -127 : "s16" === i8 && (m6 = -32767);
  let h7 = 256;
  ["u16", "s16"].includes(i8) && (h7 = 65536);
  const g6 = [], p5 = [], d4 = a13 - r13;
  for (u12 = 0; u12 < f9; u12++) p5[u12] = e7[u12] - n15[u12], g6[u12] = 0 === p5[u12] ? 0 : d4 / p5[u12];
  let M3;
  const y6 = [];
  let b4, k4, v5;
  if (s8 && s8.length >= f9) {
    const t9 = x3(f9, s8);
    for (u12 = 0; u12 < f9; u12++) {
      for (v5 = [], c7 = 0; c7 < h7; c7++) if (0 !== p5[u12]) {
        if (b4 = c7 + m6, M3 = (b4 - n15[u12]) / p5[u12], k4 = 1, s8[u12] > 1 && (k4 -= (1 / d4) ** (M3 * t9[u12])), b4 < e7[u12] && b4 > n15[u12]) {
          const t10 = k4 * d4 * M3 ** (1 / s8[u12]) + r13;
          v5[c7] = "floor" === o11 ? Math.floor(t10) : "round" === o11 ? Math.round(t10) : t10;
        } else b4 >= e7[u12] ? v5[c7] = a13 : v5[c7] = r13;
      } else v5[c7] = r13;
      y6[u12] = v5;
    }
  } else for (u12 = 0; u12 < f9; u12++) {
    for (v5 = [], c7 = 0; c7 < h7; c7++) if (b4 = c7 + m6, b4 <= n15[u12]) v5[c7] = r13;
    else if (b4 >= e7[u12]) v5[c7] = a13;
    else {
      const t9 = (b4 - n15[u12]) * g6[u12] + r13;
      v5[c7] = "floor" === o11 ? Math.floor(t9) : "round" === o11 ? Math.round(t9) : t9;
    }
    y6[u12] = v5;
  }
  if (null != t8.contrastOffset) {
    const n16 = l4(t8.contrastOffset, t8.brightnessOffset);
    for (u12 = 0; u12 < f9; u12++) for (v5 = y6[u12], c7 = 0; c7 < h7; c7++) v5[c7] = n16[v5[c7]];
  }
  return {
    lut: y6,
    offset: m6
  };
}
function l4(t8, n15) {
  const e7 = Math.min(Math.max(t8, -100), 100), s8 = Math.min(Math.max(n15 ?? 0, -100), 100), i8 = 255, o11 = 128;
  let r13 = 0, a13 = 0;
  const l7 = new Uint8Array(256);
  for (r13 = 0; r13 < 256; r13++) e7 > 0 && e7 < 100 ? a13 = (200 * r13 - 100 * i8 + 2 * i8 * s8) / (2 * (100 - e7)) + o11 : e7 <= 0 && e7 > -100 ? a13 = (200 * r13 - 100 * i8 + 2 * i8 * s8) * (100 + e7) / 2e4 + o11 : 100 === e7 ? (a13 = 200 * r13 - 100 * i8 + (i8 + 1) * (100 - e7) + 2 * i8 * s8, a13 = a13 > 0 ? i8 : 0) : -100 === e7 && (a13 = o11), l7[r13] = a13 > i8 ? i8 : a13 < 0 ? 0 : a13;
  return l7;
}
function f6(t8, n15, e7) {
  const s8 = [];
  for (let i8 = 0; i8 < n15.length; i8++) {
    let r13 = 0, a13 = 0, l7 = 0;
    "min" in n15[i8] ? {
      min: r13,
      max: a13,
      avg: l7
    } = n15[i8] : [r13, a13, l7] = n15[i8];
    let f9 = l7 ?? 0;
    "u8" !== t8 && (f9 = 255 * (f9 - r13) / (a13 - r13)), e7 && (f9 *= o7[i8]), s8.push(u6(f9));
  }
  return s8;
}
function u6(t8) {
  if (t8 <= 0 || t8 >= 255) return i6;
  let n15 = 0;
  150 !== t8 && (n15 = t8 <= 150 ? 45 * Math.cos(0.01047 * t8) : 17 * Math.sin(0.021 * t8));
  const e7 = 255, s8 = t8 + n15, o11 = Math.log(t8 / e7), r13 = Math.log(s8 / e7);
  if (0 === r13) return i6;
  const a13 = o11 / r13;
  return isNaN(a13) ? i6 : Math.min(9.9, Math.max(0.01, a13));
}
function c3(t8, n15, e7, s8) {
  let i8 = 1 / 0, o11 = -1 / 0, r13 = 0, a13 = 0, l7 = 0, f9 = 0;
  const u12 = t8.length, c7 = /* @__PURE__ */ new Map(), m6 = [];
  for (let w5 = 0; w5 < u12; w5++) {
    const e8 = t8[w5];
    if (!n15 || n15[w5]) {
      m6.push(e8);
      const t9 = (c7.get(e8) ?? 0) + 1;
      c7.set(e8, t9), t9 > f9 && (f9 = t9, l7 = e8), i8 = e8 < i8 ? e8 : i8, o11 = e8 > o11 ? e8 : o11, r13 += e8, a13++;
    }
  }
  if (0 === a13) return {
    statistics: {
      min: 0,
      max: 0,
      avg: 0,
      stddev: 0,
      mode: 0,
      median: 0
    },
    histogram: null
  };
  const h7 = r13 / a13;
  let g6 = 0;
  for (let w5 = 0; w5 < u12; w5++) n15 && !n15[w5] || (g6 += (t8[w5] - h7) ** 2);
  const p5 = n15 ? n15.filter((t9) => t9).length : u12, d4 = p5 <= 1 ? 0 : Math.sqrt(g6 / (p5 - 1));
  m6.sort((t9, n16) => t9 - n16);
  const x4 = a13 >>> 1, M3 = {
    min: i8,
    max: o11,
    avg: h7,
    stddev: d4,
    mode: l7,
    median: a13 % 2 ? m6[Math.floor(x4)] : (m6[x4 - 1] + m6[x4]) / 2
  };
  if (["u8", "s8", "u4", "u2", "u1"].includes(e7)) {
    const e8 = o11 - i8 + 1, s9 = new Uint32Array(e8);
    for (let o12 = 0; o12 < u12; o12++) n15 && !n15[o12] || s9[t8[o12] - i8]++;
    return {
      statistics: M3,
      histogram: {
        min: i8 - 0.5,
        max: o11 + 0.5,
        size: e8,
        counts: s9
      }
    };
  }
  const y6 = 256, b4 = new Uint32Array(y6), k4 = (o11 - i8) / y6;
  if (0 === k4) return {
    statistics: M3,
    histogram: {
      min: i8,
      max: o11,
      size: 1,
      counts: new Uint32Array(1).fill(a13)
    }
  };
  const v5 = new Uint32Array(y6 + 1);
  for (let w5 = 0; w5 < u12; w5++) n15 && !n15[w5] || v5[Math.floor((t8[w5] - i8) / k4)]++;
  for (let w5 = 0; w5 < y6 - 1; w5++) b4[w5] = v5[w5];
  return b4[y6 - 1] = v5[y6 - 1] + v5[y6], {
    statistics: M3,
    histogram: {
      min: i8,
      max: o11,
      size: y6,
      counts: b4
    }
  };
}
function m3(t8) {
  const {
    pixels: n15,
    mask: e7,
    pixelType: s8,
    bandMasks: i8
  } = t8, o11 = n15.map((t9, n16) => c3(t9, i8?.[n16] ?? e7, s8));
  return {
    statistics: o11.map(({
      statistics: t9
    }) => t9),
    histograms: o11.map(({
      histogram: t9
    }) => t9)
  };
}
function h3(t8) {
  if (!t8?.pixels?.length) return null;
  const {
    pixels: n15,
    mask: e7,
    bandMasks: s8,
    pixelType: i8
  } = t8, o11 = t8.width * t8.height, r13 = n15.length, a13 = [], l7 = [], f9 = 256;
  let u12, c7, m6, h7;
  for (let g6 = 0; g6 < r13; g6++) {
    m6 = new Uint32Array(f9);
    const r14 = n15[g6], p5 = s8?.[g6] ?? e7;
    if ("u8" === i8) {
      if (u12 = 255, c7 = 0, p5) {
        for (let t9 = 0; t9 < o11; t9++) if (p5[t9]) {
          const n16 = r14[t9];
          u12 = n16 < u12 ? n16 : u12, c7 = n16 > c7 ? n16 : c7, m6[n16]++;
        }
      } else for (let t9 = 0; t9 < o11; t9++) {
        const n16 = r14[t9];
        u12 = n16 < u12 ? n16 : u12, c7 = n16 > c7 ? n16 : c7, m6[n16]++;
      }
      m6 = m6.slice(u12, c7 + 1);
    } else {
      let n16 = false;
      t8.statistics || (t8.updateStatistics(), n16 = true);
      const e8 = t8.statistics;
      u12 = e8[g6].minValue, c7 = e8[g6].maxValue;
      const s9 = (c7 - u12) / f9;
      if (0 === s9) {
        !e8 || t8.validPixelCount || n16 || t8.updateStatistics();
        const s10 = (t8.validPixelCount || t8.width * t8.height) / f9;
        for (let t9 = 0; t9 < f9; t9++) m6[t9] = Math.round(s10 * (t9 + 1)) - Math.round(s10 * t9);
      } else {
        h7 = new Uint32Array(f9 + 1);
        for (let t9 = 0; t9 < o11; t9++) p5 && !p5[t9] || h7[Math.floor((r14[t9] - u12) / s9)]++;
        for (let t9 = 0; t9 < f9 - 1; t9++) m6[t9] = h7[t9];
        m6[f9 - 1] = h7[f9 - 1] + h7[f9];
      }
    }
    const d4 = "u8" === i8 ? u12 - 0.5 : u12, x4 = "u8" === i8 ? c7 + 0.5 : c7;
    a13.push({
      min: d4,
      max: x4,
      size: m6.length,
      counts: m6
    });
    let M3 = 0, y6 = 0, b4 = 0;
    for (let t9 = 0; t9 < m6.length; t9++) M3 += m6[t9], y6 += t9 * m6[t9];
    const k4 = y6 / M3;
    for (let t9 = 0; t9 < m6.length; t9++) b4 += m6[t9] * (t9 - k4) ** 2;
    const v5 = Math.sqrt(b4 / (M3 - 1)), w5 = (x4 - d4) / m6.length, z2 = (k4 + ("u8" === i8 ? 0 : 0.5)) * w5 + u12, C5 = v5 * w5;
    l7.push({
      min: u12,
      max: c7,
      avg: z2,
      stddev: C5
    });
  }
  return {
    statistics: l7,
    histograms: a13
  };
}
function g4(t8) {
  const n15 = [];
  for (let e7 = 0; e7 < t8.length; e7++) {
    const {
      min: s8,
      max: i8,
      size: o11,
      counts: r13
    } = t8[e7];
    let a13 = 0, l7 = 0;
    for (let t9 = 0; t9 < o11; t9++) a13 += r13[t9], l7 += t9 * r13[t9];
    const f9 = l7 / a13;
    let u12 = 0;
    for (let t9 = 0; t9 < o11; t9++) u12 += r13[t9] * (t9 - f9) ** 2;
    const c7 = (i8 - s8) / o11, m6 = (f9 + 0.5) * c7 + s8, h7 = Math.sqrt(u12 / (a13 - 1)) * c7;
    n15.push({
      min: s8,
      max: i8,
      avg: m6,
      stddev: h7
    });
  }
  return n15;
}
function p2(n15, i8) {
  const {
    pixelBlock: o11,
    bandIds: a13,
    returnHistogramLut: l7,
    rasterInfo: f9
  } = i8;
  let u12 = null, c7 = null, m6 = n15.stretchType;
  if ("number" == typeof m6 && (m6 = a8[m6]), n15.dra) {
    if ("minMax" === m6 && o11?.statistics) u12 = o11.statistics.map((t8) => [t8.minValue, t8.maxValue, 0, 0]);
    else {
      const t8 = h3(o11);
      u12 = null != t8 ? t8.statistics : null, c7 = null != t8 ? t8.histograms : null;
    }
  } else u12 = n15.statistics?.length ? n15.statistics : f9.statistics, c7 = "histograms" in n15 ? n15.histograms : void 0, c7 || (c7 = f9.histograms);
  "percentClip" !== m6 && "histogramEqualization" !== m6 || c7?.length || (m6 = "minMax");
  const g6 = u12?.length || c7?.length || f9.bandCount, p5 = [], x4 = [];
  let M3, y6, b4, k4, v5, w5, z2, C5, O4;
  u12 && !Array.isArray(u12[0]) && (u12 = u12.map((t8) => [t8.min, t8.max, t8.avg, t8.stddev]));
  const [A5, U4] = s2(f9.pixelType);
  if (!u12?.length) {
    for (u12 = [], C5 = 0; C5 < g6; C5++) u12.push([A5, U4, 1, 1]);
    "standardDeviation" === m6 && (m6 = "minMax");
  }
  switch (m6) {
    case "none":
      for (C5 = 0; C5 < g6; C5++) p5[C5] = A5, x4[C5] = U4;
      break;
    case "minMax":
      for (C5 = 0; C5 < g6; C5++) {
        const t8 = u12[C5];
        p5[C5] = t8[0], x4[C5] = t8[1];
      }
      break;
    case "standardDeviation":
      {
        const {
          numberOfStandardDeviations: t8 = 2
        } = n15;
        for (C5 = 0; C5 < g6; C5++) {
          const n16 = u12[C5];
          p5[C5] = n16[2] - t8 * n16[3], x4[C5] = n16[2] + t8 * n16[3], p5[C5] < n16[0] && (p5[C5] = n16[0]), x4[C5] > n16[1] && (x4[C5] = n16[1]);
        }
      }
      break;
    case "histogramEqualization":
      for (n2(c7), C5 = 0; C5 < g6; C5++) p5[C5] = c7[C5].min, x4[C5] = c7[C5].max;
      break;
    case "percentClip":
      for (n2(c7), C5 = 0; C5 < c7.length; C5++) {
        for (M3 = c7[C5], v5 = new Uint32Array(M3.size), k4 = [...M3.counts], k4.length >= 20 && (k4[0] = k4[1] = k4[2] = k4[k4.length - 1] = k4[k4.length - 2] = 0), b4 = 0, y6 = (M3.max - M3.min) / M3.size, z2 = -0.5 === M3.min && 1 === y6 ? 0.5 : 0, O4 = 0; O4 < M3.size; O4++) b4 += k4[O4], v5[O4] = b4;
        for (w5 = (n15.minPercent || 0) * b4 / 100, p5[C5] = M3.min + z2, O4 = 0; O4 < M3.size; O4++) if (v5[O4] > w5) {
          p5[C5] = M3.min + y6 * (O4 + z2);
          break;
        }
        for (w5 = (1 - (n15.maxPercent || 0) / 100) * b4, x4[C5] = M3.max + z2, O4 = M3.size - 2; O4 >= 0; O4--) if (v5[O4] < w5) {
          x4[C5] = M3.min + y6 * (O4 + 2 - z2);
          break;
        }
        if (x4[C5] < p5[C5]) {
          const t8 = p5[C5];
          p5[C5] = x4[C5], x4[C5] = t8;
        }
      }
      break;
    default:
      for (C5 = 0; C5 < g6; C5++) {
        const t8 = u12[C5];
        p5[C5] = t8[0], x4[C5] = t8[1];
      }
  }
  let T3, q, P3;
  "histogramEqualization" === m6 ? (n2(c7), q = c7[0].size || 256, T3 = 0, l7 && (P3 = c7.map((t8) => r10(t8)))) : (q = n15.max || 255, T3 = n15.min || 0);
  return d2({
    minCutOff: p5,
    maxCutOff: x4,
    outMax: q,
    outMin: T3,
    histogramLut: P3
  }, a13);
}
function d2(t8, n15) {
  if (null == n15 || 0 === n15.length) return t8;
  const e7 = Math.max.apply(null, n15), {
    minCutOff: s8,
    maxCutOff: i8,
    outMin: o11,
    outMax: r13,
    histogramLut: a13
  } = t8;
  return s8.length === n15.length || s8.length <= e7 ? t8 : {
    minCutOff: n15.map((t9) => s8[t9]),
    maxCutOff: n15.map((t9) => i8[t9]),
    histogramLut: a13 ? n15.map((t9) => a13[t9]) : null,
    outMin: o11,
    outMax: r13
  };
}
function x3(t8, n15) {
  const e7 = new Float32Array(t8);
  for (let s8 = 0; s8 < t8; s8++) n15[s8] > 1 ? n15[s8] > 2 ? e7[s8] = 6.5 + (n15[s8] - 2) ** 2.5 : e7[s8] = 6.5 + 100 * (2 - n15[s8]) ** 4 : e7[s8] = 1;
  return e7;
}
function M2(t8, e7) {
  if (!t8?.pixels?.length) return t8;
  const {
    mask: s8,
    bandMasks: i8,
    width: o11,
    height: r13,
    pixels: a13
  } = t8, {
    minCutOff: l7,
    maxCutOff: f9,
    gamma: u12
  } = e7, c7 = e7.outMin || 0, m6 = e7.outMax || 255, h7 = o11 * r13, g6 = e7.outputPixelType || "u8", p5 = t8.pixels.map(() => g.createEmptyBand(g6, h7)), d4 = p5.length, M3 = m6 - c7, y6 = [], b4 = [];
  for (let n15 = 0; n15 < d4; n15++) b4[n15] = f9[n15] - l7[n15], y6[n15] = 0 === b4[n15] ? 0 : M3 / b4[n15];
  const k4 = g6.startsWith("u") || g6.startsWith("s"), v5 = u12 && u12.length >= d4, w5 = !!e7.isRenderer;
  if (v5) {
    const t9 = x3(d4, u12);
    for (let n15 = 0; n15 < d4; n15++) {
      const e8 = i8?.[n15] ?? s8;
      for (let s9 = 0; s9 < h7; s9++) if (null == e8 || e8[s9]) {
        if (0 === b4[n15]) {
          p5[n15][s9] = c7;
          continue;
        }
        const e9 = a13[n15][s9], i9 = (e9 - l7[n15]) / b4[n15];
        let o12 = 1;
        if (u12[n15] > 1 && (o12 -= (1 / M3) ** (i9 * t9[n15])), e9 < f9[n15] && e9 > l7[n15]) {
          const t10 = o12 * M3 * i9 ** (1 / u12[n15]) + c7;
          p5[n15][s9] = w5 ? Math.floor(t10) : k4 ? Math.round(t10) : t10;
        } else e9 >= f9[n15] ? p5[n15][s9] = m6 : p5[n15][s9] = c7;
      }
    }
  } else for (let n15 = 0; n15 < d4; n15++) {
    const t9 = i8?.[n15] ?? s8;
    for (let e8 = 0; e8 < h7; e8++) if (null == t9 || t9[e8]) {
      const t10 = a13[n15][e8];
      if (t10 < f9[n15] && t10 > l7[n15]) {
        const s9 = (t10 - l7[n15]) * y6[n15] + c7;
        p5[n15][e8] = w5 ? Math.floor(s9) : k4 ? Math.round(s9) : s9;
      } else t10 >= f9[n15] ? p5[n15][e8] = m6 : p5[n15][e8] = c7;
    }
  }
  const z2 = new g({
    width: o11,
    height: r13,
    mask: s8,
    bandMasks: i8,
    pixels: p5,
    pixelType: g6
  });
  return z2.updateStatistics(), z2;
}

// ../../../node_modules/@arcgis/core/layers/support/RasterBandInfo.js
var t6;
function n10(e7) {
  return e7 = Number(e7), isNaN(e7) ? void 0 : e7;
}
var o8 = t6 = class extends f {
  constructor() {
    super(...arguments), this.name = null, this.minWavelength = void 0, this.maxWavelength = void 0, this.radianceBias = void 0, this.radianceGain = void 0, this.reflectanceBias = void 0, this.reflectanceGain = void 0, this.solarIrradiance = void 0;
  }
  clone() {
    return new t6({
      name: this.name,
      minWavelength: this.minWavelength,
      maxWavelength: this.maxWavelength,
      radianceBias: this.radianceBias,
      radianceGain: this.radianceGain,
      reflectanceBias: this.reflectanceBias,
      reflectanceGain: this.reflectanceGain,
      solarIrradiance: this.solarIrradiance
    });
  }
};
e([y({
  json: {
    name: "BandName",
    write: true
  }
})], o8.prototype, "name", void 0), e([y({
  json: {
    name: "WavelengthMin",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "minWavelength", void 0), e([y({
  json: {
    name: "WavelengthMax",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "maxWavelength", void 0), e([y({
  json: {
    name: "RadianceBias",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "radianceBias", void 0), e([y({
  json: {
    name: "RadianceGain",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "radianceGain", void 0), e([y({
  json: {
    name: "ReflectanceBias",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "reflectanceBias", void 0), e([y({
  json: {
    name: "ReflectanceGain",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "reflectanceGain", void 0), e([y({
  json: {
    name: "SolarIrradiance",
    read: {
      reader: n10
    },
    write: true
  }
})], o8.prototype, "solarIrradiance", void 0), o8 = t6 = e([a2("esri.layers.support.RasterBandInfo")], o8);
var s5 = o8;

// ../../../node_modules/@arcgis/core/layers/support/RasterSensorInfo.js
var n11;
function a10(o11) {
  return o11 = Number(o11), isNaN(o11) ? void 0 : o11;
}
var u7 = n11 = class extends f {
  constructor() {
    super(...arguments), this.acquisitionDate = void 0, this.cloudCover = void 0, this.productName = void 0, this.sensorName = null, this.sensorAzimuth = void 0, this.sensorElevation = void 0, this.sunAzimuth = void 0, this.sunElevation = void 0;
  }
  readAcquisitionDate(o11) {
    return new Date(o11);
  }
  writeAcquisitionDate(o11, e7) {
    e7.AcquisitionDate = o11.getTime();
  }
  clone() {
    return new n11({
      acquisitionDate: this.acquisitionDate,
      cloudCover: this.cloudCover,
      productName: this.productName,
      sensorName: this.sensorName,
      sensorAzimuth: this.sensorAzimuth,
      sensorElevation: this.sensorElevation,
      sunAzimuth: this.sunAzimuth,
      sunElevation: this.sunElevation
    });
  }
};
e([y({
  json: {
    name: "AcquisitionDate",
    write: true
  }
})], u7.prototype, "acquisitionDate", void 0), e([o("acquisitionDate")], u7.prototype, "readAcquisitionDate", null), e([r("acquisitionDate")], u7.prototype, "writeAcquisitionDate", null), e([y({
  json: {
    name: "CloudCover",
    read: {
      reader: a10
    },
    write: true
  }
})], u7.prototype, "cloudCover", void 0), e([y({
  json: {
    name: "ProductName",
    write: true
  }
})], u7.prototype, "productName", void 0), e([y({
  json: {
    name: "SensorName",
    write: true
  }
})], u7.prototype, "sensorName", void 0), e([y({
  json: {
    name: "SensorAzimuth",
    read: {
      reader: a10
    },
    write: true
  }
})], u7.prototype, "sensorAzimuth", void 0), e([y({
  json: {
    name: "SensorElevation",
    read: {
      reader: a10
    },
    write: true
  }
})], u7.prototype, "sensorElevation", void 0), e([y({
  json: {
    name: "SunAzimuth",
    read: {
      reader: a10
    },
    write: true
  }
})], u7.prototype, "sunAzimuth", void 0), e([y({
  json: {
    name: "SunElevation",
    read: {
      reader: a10
    },
    write: true
  }
})], u7.prototype, "sunElevation", void 0), u7 = n11 = e([a2("esri.layers.support.RasterSensorInfo")], u7);
var c4 = u7;

// ../../../node_modules/@arcgis/core/layers/support/RasterStorageInfo.js
var p3;
var l5 = p3 = class extends f {
  constructor() {
    super(...arguments), this.blockWidth = void 0, this.blockHeight = void 0, this.compression = null, this.origin = null, this.firstPyramidLevel = null, this.maximumPyramidLevel = null, this.pyramidScalingFactor = 2, this.pyramidBlockWidth = null, this.pyramidBlockHeight = null, this.isVirtualTileInfo = false, this.tileInfo = null, this.transposeInfo = null, this.blockBoundary = null;
  }
  clone() {
    return new p3({
      blockWidth: this.blockWidth,
      blockHeight: this.blockHeight,
      compression: this.compression,
      origin: a(this.origin),
      firstPyramidLevel: this.firstPyramidLevel,
      maximumPyramidLevel: this.maximumPyramidLevel,
      pyramidResolutions: a(this.pyramidResolutions),
      pyramidScalingFactor: this.pyramidScalingFactor,
      pyramidBlockWidth: this.pyramidBlockWidth,
      pyramidBlockHeight: this.pyramidBlockHeight,
      isVirtualTileInfo: this.isVirtualTileInfo,
      tileInfo: a(this.tileInfo),
      transposeInfo: a(this.transposeInfo),
      blockBoundary: a(this.blockBoundary)
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "blockWidth", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "blockHeight", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l5.prototype, "compression", void 0), e([y({
  type: _,
  json: {
    write: true
  }
})], l5.prototype, "origin", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "firstPyramidLevel", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "maximumPyramidLevel", void 0), e([y({
  json: {
    write: true
  }
})], l5.prototype, "pyramidResolutions", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "pyramidScalingFactor", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "pyramidBlockWidth", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l5.prototype, "pyramidBlockHeight", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], l5.prototype, "isVirtualTileInfo", void 0), e([y({
  json: {
    write: true
  }
})], l5.prototype, "tileInfo", void 0), e([y()], l5.prototype, "transposeInfo", void 0), e([y()], l5.prototype, "blockBoundary", void 0), l5 = p3 = e([a2("esri.layers.support.RasterStorageInfo")], l5);
var n12 = l5;

// ../../../node_modules/@arcgis/core/layers/support/RasterInfo.js
var h4;
var u8 = h4 = class extends f {
  constructor(t8) {
    super(t8), this.attributeTable = null, this.bandCount = null, this.colormap = null, this.extent = null, this.format = void 0, this.height = null, this.width = null, this.histograms = null, this.keyProperties = {}, this.multidimensionalInfo = null, this.noDataValue = null, this.pixelSize = null, this.pixelType = null, this.isPseudoSpatialReference = false, this.spatialReference = null, this.statistics = null, this.storageInfo = null, this.transform = null;
  }
  get bandInfos() {
    const t8 = this.keyProperties.BandProperties, {
      bandCount: e7
    } = this;
    if (!t8?.length || t8.length < e7) {
      const t9 = [];
      for (let o12 = 1; o12 <= e7; o12++) t9.push(new s5({
        name: "band_" + o12
      }));
      return t9;
    }
    const o11 = t8.map((t9) => s5.fromJSON(t9));
    for (let i8 = 0; i8 < o11.length; i8++) o11[i8].name = o11[i8].name || "band_" + (i8 + 1);
    return o11;
  }
  get dataType() {
    const t8 = this.keyProperties?.DataType?.toLowerCase() ?? "generic";
    return "stdtime" === t8 ? "standard-time" : t8;
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(t8) {
    t8 && this._set("nativeExtent", t8);
  }
  get nativePixelSize() {
    if (null == this.transform || !this.transform.affectsPixelSize) return this.pixelSize;
    const t8 = this.nativeExtent;
    return {
      x: t8.width / this.width,
      y: t8.height / this.height
    };
  }
  get hasMultidimensionalTranspose() {
    return !!this.storageInfo?.transposeInfo;
  }
  get sensorInfo() {
    if (this.keyProperties?.SensorName) return c4.fromJSON(this.keyProperties);
  }
  clone() {
    return new h4({
      attributeTable: a(this.attributeTable),
      bandCount: this.bandCount,
      colormap: a(this.colormap),
      extent: a(this.extent),
      format: this.format,
      height: this.height,
      width: this.width,
      histograms: a(this.histograms),
      keyProperties: a(this.keyProperties),
      multidimensionalInfo: a(this.multidimensionalInfo),
      noDataValue: this.noDataValue,
      pixelSize: a(this.pixelSize),
      pixelType: this.pixelType,
      isPseudoSpatialReference: this.isPseudoSpatialReference,
      spatialReference: a(this.spatialReference),
      statistics: a(this.statistics),
      storageInfo: a(this.storageInfo),
      transform: a(this.transform)
    });
  }
};
e([y({
  json: {
    write: true
  }
})], u8.prototype, "attributeTable", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "bandCount", void 0), e([y({
  readOnly: true
})], u8.prototype, "bandInfos", null), e([y({
  json: {
    write: true
  }
})], u8.prototype, "colormap", void 0), e([y({
  type: String,
  readOnly: true
})], u8.prototype, "dataType", null), e([y({
  type: w,
  json: {
    write: true
  }
})], u8.prototype, "extent", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], u8.prototype, "nativeExtent", null), e([y({
  json: {
    write: true
  }
})], u8.prototype, "nativePixelSize", null), e([y({
  json: {
    write: true
  }
})], u8.prototype, "format", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "height", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "width", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "hasMultidimensionalTranspose", null), e([y({
  json: {
    write: true
  }
})], u8.prototype, "histograms", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "keyProperties", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "multidimensionalInfo", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "noDataValue", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "pixelSize", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "pixelType", void 0), e([y()], u8.prototype, "isPseudoSpatialReference", void 0), e([y({
  readOnly: true
})], u8.prototype, "sensorInfo", null), e([y({
  type: f2,
  json: {
    write: true
  }
})], u8.prototype, "spatialReference", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "statistics", void 0), e([y({
  type: n12,
  json: {
    write: true
  }
})], u8.prototype, "storageInfo", void 0), e([y({
  json: {
    write: true
  }
})], u8.prototype, "transform", void 0), u8 = h4 = e([a2("esri.layers.support.RasterInfo")], u8);
var m4 = u8;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/surfaceUtils.js
var s6 = 1;
var n13 = 1 / 111e3;
function o9(t8) {
  let {
    altitude: e7,
    azimuth: i8
  } = t8;
  const {
    hillshadeType: s8,
    pixelSizePower: o11 = 1,
    pixelSizeFactor: a13 = 1,
    scalingType: l7,
    isGCS: r13,
    resolution: c7
  } = t8, h7 = "multi-directional" === s8 ? 2 * t8.zFactor : t8.zFactor, {
    x: u12,
    y: f9
  } = c7;
  let d4 = h7 / (8 * u12), p5 = h7 / (8 * f9);
  if (r13 && h7 > 1e-3 && (d4 /= n13, p5 /= n13), "adjusted" === l7) if (r13) {
    const t9 = u12 * n13, e8 = f9 * n13;
    d4 = (h7 + t9 ** o11 * a13) / (8 * t9), p5 = (h7 + e8 ** o11 * a13) / (8 * e8);
  } else d4 = (h7 + u12 ** o11 * a13) / (8 * u12), p5 = (h7 + f9 ** o11 * a13) / (8 * f9);
  let x4 = (90 - e7) * Math.PI / 180, w5 = Math.cos(x4), y6 = (360 - i8 + 90) * Math.PI / 180, M3 = Math.sin(x4) * Math.cos(y6), m6 = Math.sin(x4) * Math.sin(y6);
  const A5 = [315, 270, 225, 360, 180, 0], g6 = [60, 60, 60, 60, 60, 90], k4 = new Float32Array([3, 5, 3, 2, 1, 4]), z2 = k4.reduce((t9, e8) => t9 + e8), F2 = k4.map((t9) => t9 / z2), P3 = "multi-directional" === s8 ? A5.length : 1, C5 = new Float32Array(6), Z = new Float32Array(6), v5 = new Float32Array(6);
  if ("multi-directional" === s8) for (let n15 = 0; n15 < P3; n15++) e7 = g6[n15], i8 = A5[n15], x4 = (90 - e7) * Math.PI / 180, w5 = Math.cos(x4), y6 = (360 - i8 + 90) * Math.PI / 180, M3 = Math.sin(x4) * Math.cos(y6), m6 = Math.sin(x4) * Math.sin(y6), C5[n15] = w5, Z[n15] = M3, v5[n15] = m6;
  else C5.fill(w5), Z.fill(M3), v5.fill(m6);
  return {
    resolution: c7,
    factor: [d4, p5],
    sinZcosA: M3,
    sinZsinA: m6,
    cosZ: w5,
    sinZcosAs: Z,
    sinZsinAs: v5,
    cosZs: C5,
    weights: F2,
    hillshadeType: ["traditional", "multi-directional"].indexOf(s8)
  };
}
function a11(t8, e7) {
  const {
    width: i8,
    height: n15
  } = t8, o11 = i8 * n15, a13 = new Uint8Array(o11), l7 = null != t8.mask;
  let r13;
  if (l7) {
    r13 = new Uint8Array(t8.mask);
    for (let t9 = 0; t9 < r13.length; t9++) r13[t9] && (a13[t9] = 1, r13[t9] = 1);
  }
  const c7 = t8.pixels[0], h7 = new Float32Array(o11), u12 = new Float32Array(o11);
  let f9, d4 = 0;
  if (e7) {
    const {
      resolution: t9
    } = e7, i9 = t9 ? (t9.x + t9.y) / 2 : 1;
    d4 = 200 * e7.zFactor / (i9 * i9), f9 = new Float32Array(o11);
  }
  const p5 = e7?.curvatureType;
  let x4, w5, y6, M3, m6, A5, g6, k4;
  for (let z2 = s6; z2 < n15 - s6; z2++) {
    const t9 = z2 * i8;
    for (let e8 = s6; e8 < i8 - s6; e8++) {
      const s8 = t9 + e8;
      if (!r13 || 0 !== r13[s8]) {
        if (r13) {
          if (r13[s8 - i8 - 1] + r13[s8 - i8] + r13[s8 - i8 + 1] + r13[s8 - 1] + r13[s8 + 1] + r13[s8 + i8 - 1] + r13[s8 + i8] + r13[s8 + i8 + 1] < 7) {
            a13[s8] = 0;
            continue;
          }
          x4 = r13[s8 - i8 - 1] ? c7[s8 - i8 - 1] : c7[s8], w5 = r13[s8 - i8] ? c7[s8 - i8] : c7[s8], y6 = r13[s8 - i8 + 1] ? c7[s8 - i8 + 1] : c7[s8], M3 = r13[s8 - 1] ? c7[s8 - 1] : c7[s8], m6 = r13[s8 + 1] ? c7[s8 + 1] : c7[s8], A5 = r13[s8 + i8 - 1] ? c7[s8 + i8 - 1] : c7[s8], g6 = r13[s8 + i8] ? c7[s8 + i8] : c7[s8], k4 = r13[s8 + i8 + 1] ? c7[s8 + i8 + 1] : c7[s8];
        } else x4 = c7[s8 - i8 - 1], w5 = c7[s8 - i8], y6 = c7[s8 - i8 + 1], M3 = c7[s8 - 1], m6 = c7[s8 + 1], A5 = c7[s8 + i8 - 1], g6 = c7[s8 + i8], k4 = c7[s8 + i8 + 1];
        if (h7[s8] = y6 + m6 + m6 + k4 - (x4 + M3 + M3 + A5), u12[s8] = A5 + g6 + g6 + k4 - (x4 + w5 + w5 + y6), null != f9) {
          const t10 = c7[s8], e9 = 0.5 * (M3 + m6) - t10, i9 = 0.5 * (w5 + g6) - t10;
          if ("standard" === p5) f9[s8] = -d4 * (e9 + i9);
          else {
            const t11 = (-x4 + y6 + A5 - k4) / 4, n16 = (-M3 + m6) / 2, o12 = (w5 - g6) / 2, a14 = n16 * n16, l8 = o12 * o12, r14 = a14 + l8;
            r14 && (f9[s8] = "profile" === p5 ? d4 * (e9 * a14 + i9 * l8 + t11 * n16 * o12) / r14 : -d4 * (e9 * l8 + i9 * a14 - t11 * n16 * o12) / r14);
          }
        }
      }
    }
  }
  return {
    outMask: l7 ? a13 : null,
    dzxs: h7,
    dzys: u12,
    curvatures: f9
  };
}
function l6(t8, e7, i8) {
  for (let s8 = 0; s8 < i8; s8++) t8[s8 * e7] = t8[s8 * e7 + 1], t8[(s8 + 1) * e7 - 1] = t8[(s8 + 1) * e7 - 2];
  for (let s8 = 1; s8 < e7 - 1; s8++) t8[s8] = t8[s8 + e7], t8[s8 + (i8 - 1) * e7] = t8[s8 + (i8 - 2) * e7];
}
function r11(n15, r13) {
  if (!o3(n15)) return n15;
  const {
    factor: c7,
    sinZcosA: h7,
    sinZsinA: u12,
    cosZ: f9,
    sinZcosAs: d4,
    sinZsinAs: p5,
    cosZs: x4,
    weights: w5
  } = o9(r13), [y6, M3] = c7, m6 = "traditional" === r13.hillshadeType, {
    width: A5,
    height: g6
  } = n15, k4 = new Uint8Array(A5 * g6), {
    dzxs: z2,
    dzys: F2,
    outMask: P3
  } = a11(n15);
  for (let t8 = s6; t8 < g6 - s6; t8++) {
    const e7 = t8 * A5;
    for (let t9 = s6; t9 < A5 - s6; t9++) {
      const i8 = e7 + t9;
      if (!P3 || P3[i8]) {
        const t10 = z2[i8] * y6, e8 = F2[i8] * M3, s8 = Math.sqrt(1 + t10 * t10 + e8 * e8);
        let n16 = 0;
        if (m6) {
          let i9 = 255 * (f9 + u12 * e8 - h7 * t10) / s8;
          i9 < 0 && (i9 = 0), n16 = i9;
        } else {
          const i9 = p5.length;
          for (let o11 = 0; o11 < i9; o11++) {
            let i10 = 255 * (x4[o11] + p5[o11] * e8 - d4[o11] * t10) / s8;
            i10 < 0 && (i10 = 0), n16 += i10 * w5[o11];
          }
        }
        k4[i8] = 255 & n16;
      }
    }
  }
  l6(k4, A5, g6);
  return new g({
    width: A5,
    height: g6,
    pixels: [k4],
    mask: P3,
    pixelType: "u8",
    validPixelCount: n15.validPixelCount,
    statistics: [new l(0, 255)]
  });
}
function c5(t8, e7, s8, n15) {
  if (!o3(t8) || !o3(e7)) return;
  const {
    min: o11,
    max: a13
  } = n15, l7 = t8.pixels[0], {
    pixels: r13,
    mask: c7
  } = e7, h7 = r13[0], u12 = 255.00001 / (a13 - o11), f9 = new Uint8ClampedArray(h7.length), d4 = new Uint8ClampedArray(h7.length), p5 = new Uint8ClampedArray(h7.length), x4 = s8.length - 1;
  for (let i8 = 0; i8 < h7.length; i8++) {
    if (c7 && 0 === c7[i8]) continue;
    const t9 = Math.floor((h7[i8] - o11) * u12), [e8, n16] = s8[t9 < 0 ? 0 : t9 > x4 ? x4 : t9], a14 = l7[i8], r14 = a14 * n16, w5 = r14 * (1 - Math.abs(e8 % 2 - 1)), y6 = a14 - r14;
    switch (Math.floor(e8)) {
      case 0:
        f9[i8] = r14 + y6, d4[i8] = w5 + y6, p5[i8] = y6;
        break;
      case 1:
        f9[i8] = w5 + y6, d4[i8] = r14 + y6, p5[i8] = y6;
        break;
      case 2:
        f9[i8] = y6, d4[i8] = r14 + y6, p5[i8] = w5 + y6;
        break;
      case 3:
        f9[i8] = y6, d4[i8] = w5 + y6, p5[i8] = r14 + y6;
        break;
      case 4:
        f9[i8] = w5 + y6, d4[i8] = y6, p5[i8] = r14 + y6;
        break;
      case 5:
      case 6:
        f9[i8] = r14 + y6, d4[i8] = y6, p5[i8] = w5 + y6;
    }
  }
  t8.pixels = [f9, d4, p5], t8.updateStatistics();
}
function h5(e7, o11) {
  if (!o3(e7)) return e7;
  const r13 = o11.zFactor, c7 = o11.pixelSizePower ?? 1, h7 = o11.pixelSizeFactor ?? 1, u12 = o11.slopeType, f9 = o11.isGCS, {
    x: d4,
    y: p5
  } = o11.resolution;
  let x4 = r13 / (8 * d4), w5 = r13 / (8 * p5);
  f9 && Math.abs(r13 - 1) < 1e-4 && (x4 /= n13, w5 /= n13), "adjusted" === u12 && (x4 = (r13 + d4 ** c7 * h7) / (8 * d4), w5 = (r13 + p5 ** c7 * h7) / (8 * p5));
  const {
    dzxs: y6,
    dzys: M3,
    outMask: m6
  } = a11(e7), {
    width: A5,
    height: g6
  } = e7, k4 = new Float32Array(A5 * g6);
  for (let t8 = s6; t8 < g6 - s6; t8++) {
    const e8 = t8 * A5;
    for (let t9 = s6; t9 < A5 - s6; t9++) {
      const i8 = e8 + t9;
      if (!m6 || m6[i8]) {
        const s8 = y6[i8] * x4, n15 = M3[i8] * w5, o12 = Math.sqrt(s8 * s8 + n15 * n15);
        k4[e8 + t9] = "percent-rise" === u12 ? 100 * o12 : 57.2957795 * Math.atan(o12);
      }
    }
  }
  l6(k4, A5, g6);
  const z2 = new g({
    width: A5,
    height: g6,
    pixels: [k4],
    mask: m6,
    pixelType: "f32",
    validPixelCount: e7.validPixelCount
  });
  return z2.updateStatistics(), z2;
}
function u9(n15, o11 = {}) {
  if (!o3(n15)) return n15;
  const {
    resolution: r13
  } = o11, c7 = r13 ? 1 / r13.x : 1, h7 = r13 ? 1 / r13.y : 1, {
    dzxs: u12,
    dzys: f9,
    outMask: d4
  } = a11(n15), {
    width: p5,
    height: x4
  } = n15, w5 = new Float32Array(p5 * x4);
  for (let t8 = s6; t8 < x4 - s6; t8++) {
    const e7 = t8 * p5;
    for (let t9 = s6; t9 < p5 - s6; t9++) {
      const i8 = e7 + t9;
      if (!d4 || d4[i8]) {
        const s8 = u12[i8] * c7, n16 = f9[i8] * h7;
        let o12 = -1;
        0 === s8 && 0 === n16 || (o12 = 90 - 57.29578 * Math.atan2(n16, -s8), o12 < 0 && (o12 += 360), 360 === o12 ? o12 = 0 : o12 > 360 && (o12 %= 360)), w5[e7 + t9] = o12;
      }
    }
  }
  l6(w5, p5, x4);
  return new g({
    width: p5,
    height: x4,
    pixels: [w5],
    mask: d4,
    pixelType: "f32",
    validPixelCount: n15.validPixelCount,
    statistics: [new l(-1, 360)]
  });
}
function f7(e7, s8) {
  if (!o3(e7)) return e7;
  const {
    curvatures: n15,
    outMask: o11
  } = a11(e7, s8), {
    width: r13,
    height: c7
  } = e7;
  l6(n15, r13, c7);
  const h7 = new g({
    width: r13,
    height: c7,
    pixels: [n15],
    mask: o11,
    pixelType: "f32",
    validPixelCount: e7.validPixelCount
  });
  return h7.updateStatistics(), h7;
}

// ../../../node_modules/@arcgis/core/renderers/support/colorRampUtils.js
var C3 = ["random", "ndvi", "ndvi2", "ndvi3", "elevation", "gray", "hillshade"];
var m5 = [{
  id: "aspect",
  type: "multipart",
  colorRamps: [{
    fromColor: [190, 190, 190],
    toColor: [255, 45, 8]
  }, {
    fromColor: [255, 45, 8],
    toColor: [255, 181, 61]
  }, {
    fromColor: [255, 181, 61],
    toColor: [255, 254, 52]
  }, {
    fromColor: [255, 254, 52],
    toColor: [0, 251, 50]
  }, {
    fromColor: [0, 251, 50],
    toColor: [255, 254, 52]
  }, {
    fromColor: [0, 253, 255],
    toColor: [0, 181, 255]
  }, {
    fromColor: [0, 181, 255],
    toColor: [26, 35, 253]
  }, {
    fromColor: [26, 35, 253],
    toColor: [255, 57, 251]
  }, {
    fromColor: [255, 57, 251],
    toColor: [255, 45, 8]
  }]
}, {
  id: "black-to-white",
  fromColor: [0, 0, 0],
  toColor: [255, 255, 255]
}, {
  id: "blue-bright",
  fromColor: [204, 204, 255],
  toColor: [0, 0, 224]
}, {
  id: "blue-light-to-dark",
  fromColor: [211, 229, 232],
  toColor: [46, 100, 140]
}, {
  id: "blue-green-bright",
  fromColor: [203, 245, 234],
  toColor: [48, 207, 146]
}, {
  id: "blue-green-light-to-dark",
  fromColor: [216, 242, 237],
  toColor: [21, 79, 74]
}, {
  id: "brown-light-to-dark",
  fromColor: [240, 236, 170],
  toColor: [102, 72, 48]
}, {
  id: "brown-to-blue-green-diverging-right",
  type: "multipart",
  colorRamps: [{
    fromColor: [156, 85, 31],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [33, 130, 145]
  }]
}, {
  id: "brown-to-blue-green-diverging-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [110, 70, 45],
    toColor: [204, 204, 102]
  }, {
    fromColor: [204, 204, 102],
    toColor: [48, 100, 102]
  }]
}, {
  id: "coefficient-bias",
  fromColor: [214, 214, 255],
  toColor: [0, 57, 148]
}, {
  id: "cold-to-hot-diverging",
  type: "multipart",
  colorRamps: [{
    fromColor: [69, 117, 181],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [214, 47, 39]
  }]
}, {
  id: "condition-number",
  type: "multipart",
  colorRamps: [{
    fromColor: [0, 97, 0],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [255, 34, 0]
  }]
}, {
  id: "cyan-to-purple",
  type: "multipart",
  colorRamps: [{
    fromColor: [0, 245, 245],
    toColor: [0, 0, 245]
  }, {
    fromColor: [0, 0, 245],
    toColor: [245, 0, 245]
  }]
}, {
  id: "cyan-light-to-blue-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [182, 237, 240],
    toColor: [31, 131, 224]
  }, {
    fromColor: [31, 131, 224],
    toColor: [9, 9, 145]
  }]
}, {
  id: "distance",
  fromColor: [255, 200, 0],
  toColor: [0, 0, 255]
}, {
  id: "elevation1",
  type: "multipart",
  colorRamps: [{
    fromColor: [175, 240, 233],
    toColor: [255, 255, 179]
  }, {
    fromColor: [255, 255, 179],
    toColor: [0, 128, 64]
  }, {
    fromColor: [0, 128, 64],
    toColor: [252, 186, 3]
  }, {
    fromColor: [252, 186, 3],
    toColor: [128, 0, 0]
  }, {
    fromColor: [120, 0, 0],
    toColor: [105, 48, 13]
  }, {
    fromColor: [105, 48, 13],
    toColor: [171, 171, 171]
  }, {
    fromColor: [171, 171, 171],
    toColor: [255, 252, 255]
  }]
}, {
  id: "elevation2",
  type: "multipart",
  colorRamps: [{
    fromColor: [118, 219, 211],
    toColor: [255, 255, 199]
  }, {
    fromColor: [255, 255, 199],
    toColor: [255, 255, 128]
  }, {
    fromColor: [255, 255, 128],
    toColor: [217, 194, 121]
  }, {
    fromColor: [217, 194, 121],
    toColor: [135, 96, 38]
  }, {
    fromColor: [135, 96, 38],
    toColor: [150, 150, 181]
  }, {
    fromColor: [150, 150, 181],
    toColor: [181, 150, 181]
  }, {
    fromColor: [181, 150, 181],
    toColor: [255, 252, 255]
  }]
}, {
  id: "errors",
  fromColor: [255, 235, 214],
  toColor: [196, 10, 10]
}, {
  id: "gray-light-to-dark",
  fromColor: [219, 219, 219],
  toColor: [69, 69, 69]
}, {
  id: "green-bright",
  fromColor: [204, 255, 204],
  toColor: [14, 204, 14]
}, {
  id: "green-light-to-dark",
  fromColor: [220, 245, 233],
  toColor: [34, 102, 51]
}, {
  id: "green-to-blue",
  type: "multipart",
  colorRamps: [{
    fromColor: [32, 204, 16],
    toColor: [0, 242, 242]
  }, {
    fromColor: [0, 242, 242],
    toColor: [2, 33, 227]
  }]
}, {
  id: "orange-bright",
  fromColor: [255, 235, 204],
  toColor: [240, 118, 5]
}, {
  id: "orange-light-to-dark",
  fromColor: [250, 233, 212],
  toColor: [171, 65, 36]
}, {
  id: "partial-spectrum",
  type: "multipart",
  colorRamps: [{
    fromColor: [242, 241, 162],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [255, 0, 0]
  }, {
    fromColor: [252, 3, 69],
    toColor: [176, 7, 237]
  }, {
    fromColor: [176, 7, 237],
    toColor: [2, 29, 173]
  }]
}, {
  id: "partial-spectrum-1-diverging",
  type: "multipart",
  colorRamps: [{
    fromColor: [135, 38, 38],
    toColor: [240, 149, 12]
  }, {
    fromColor: [240, 149, 12],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [74, 80, 181]
  }, {
    fromColor: [74, 80, 181],
    toColor: [39, 32, 122]
  }]
}, {
  id: "partial-spectrum-2-diverging",
  type: "multipart",
  colorRamps: [{
    fromColor: [115, 77, 42],
    toColor: [201, 137, 52]
  }, {
    fromColor: [201, 137, 52],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [91, 63, 176]
  }, {
    fromColor: [91, 63, 176],
    toColor: [81, 13, 97]
  }]
}, {
  id: "pink-to-yellow-green-diverging-bright",
  type: "multipart",
  colorRamps: [{
    fromColor: [158, 30, 113],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [99, 110, 45]
  }]
}, {
  id: "pink-to-yellow-green-diverging-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [97, 47, 73],
    toColor: [204, 204, 102]
  }, {
    fromColor: [204, 204, 102],
    toColor: [22, 59, 15]
  }]
}, {
  id: "precipitation",
  type: "multipart",
  colorRamps: [{
    fromColor: [194, 82, 60],
    toColor: [237, 161, 19]
  }, {
    fromColor: [237, 161, 19],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [0, 219, 0]
  }, {
    fromColor: [0, 219, 0],
    toColor: [32, 153, 143]
  }, {
    fromColor: [32, 153, 143],
    toColor: [11, 44, 122]
  }]
}, {
  id: "prediction",
  type: "multipart",
  colorRamps: [{
    fromColor: [40, 146, 199],
    toColor: [250, 250, 100]
  }, {
    fromColor: [250, 250, 100],
    toColor: [232, 16, 20]
  }]
}, {
  id: "purple-bright",
  fromColor: [255, 204, 255],
  toColor: [199, 0, 199]
}, {
  id: "purple-to-green-diverging-bright",
  type: "multipart",
  colorRamps: [{
    fromColor: [77, 32, 150],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [20, 122, 11]
  }]
}, {
  id: "purple-to-green-diverging-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [67, 14, 89],
    toColor: [204, 204, 102]
  }, {
    fromColor: [204, 204, 102],
    toColor: [24, 79, 15]
  }]
}, {
  id: "purple-blue-bright",
  fromColor: [223, 184, 230],
  toColor: [112, 12, 242]
}, {
  id: "purple-blue-light-to-dark",
  fromColor: [229, 213, 242],
  toColor: [93, 44, 112]
}, {
  id: "purple-red-bright",
  fromColor: [255, 204, 225],
  toColor: [199, 0, 99]
}, {
  id: "purple-red-light-to-dark",
  fromColor: [250, 215, 246],
  toColor: [143, 17, 57]
}, {
  id: "red-bright",
  fromColor: [255, 204, 204],
  toColor: [219, 0, 0]
}, {
  id: "red-light-to-dark",
  fromColor: [255, 224, 224],
  toColor: [143, 10, 10]
}, {
  id: "red-to-blue-diverging-bright",
  type: "multipart",
  colorRamps: [{
    fromColor: [196, 69, 57],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [48, 95, 207]
  }]
}, {
  id: "red-to-blue-diverging-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [107, 13, 13],
    toColor: [204, 204, 102]
  }, {
    fromColor: [204, 204, 102],
    toColor: [13, 53, 97]
  }]
}, {
  id: "red-to-green",
  type: "multipart",
  colorRamps: [{
    fromColor: [245, 0, 0],
    toColor: [245, 245, 0]
  }, {
    fromColor: [245, 245, 0],
    toColor: [0, 245, 0]
  }]
}, {
  id: "red-to-green-diverging-bright",
  type: "multipart",
  colorRamps: [{
    fromColor: [186, 20, 20],
    toColor: [255, 255, 191]
  }, {
    fromColor: [255, 255, 191],
    toColor: [54, 145, 33]
  }]
}, {
  id: "red-to-green-diverging-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [97, 21, 13],
    toColor: [204, 204, 102]
  }, {
    fromColor: [204, 204, 102],
    toColor: [16, 69, 16]
  }]
}, {
  id: "slope",
  type: "multipart",
  colorRamps: [{
    fromColor: [56, 168, 0],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [255, 0, 0]
  }]
}, {
  id: "spectrum-full-bright",
  type: "multipart",
  colorRamps: [{
    fromColor: [255, 0, 0],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [0, 255, 255]
  }, {
    fromColor: [0, 255, 255],
    toColor: [0, 0, 255]
  }]
}, {
  id: "spectrum-full-dark",
  type: "multipart",
  colorRamps: [{
    fromColor: [153, 0, 0],
    toColor: [153, 153, 0]
  }, {
    fromColor: [153, 153, 0],
    toColor: [0, 153, 153]
  }, {
    fromColor: [0, 153, 153],
    toColor: [0, 0, 153]
  }]
}, {
  id: "spectrum-full-light",
  type: "multipart",
  colorRamps: [{
    fromColor: [255, 153, 153],
    toColor: [255, 255, 153]
  }, {
    fromColor: [255, 255, 153],
    toColor: [153, 255, 255]
  }, {
    fromColor: [153, 255, 255],
    toColor: [153, 153, 255]
  }]
}, {
  id: "surface",
  type: "multipart",
  colorRamps: [{
    fromColor: [112, 153, 89],
    toColor: [242, 238, 162]
  }, {
    fromColor: [242, 238, 162],
    toColor: [242, 206, 133]
  }, {
    fromColor: [242, 206, 133],
    toColor: [194, 140, 124]
  }, {
    fromColor: [194, 140, 124],
    toColor: [255, 242, 255]
  }]
}, {
  id: "temperature",
  type: "multipart",
  colorRamps: [{
    fromColor: [255, 252, 255],
    toColor: [255, 0, 255]
  }, {
    fromColor: [255, 0, 255],
    toColor: [0, 0, 255]
  }, {
    fromColor: [0, 0, 255],
    toColor: [0, 255, 255]
  }, {
    fromColor: [0, 255, 255],
    toColor: [0, 255, 0]
  }, {
    fromColor: [0, 255, 0],
    toColor: [255, 255, 0]
  }, {
    fromColor: [255, 255, 0],
    toColor: [255, 128, 0]
  }, {
    fromColor: [255, 128, 0],
    toColor: [128, 0, 0]
  }]
}, {
  id: "white-to-black",
  fromColor: [255, 255, 255],
  toColor: [0, 0, 0]
}, {
  id: "yellow-to-dark-red",
  type: "multipart",
  colorRamps: [{
    fromColor: [255, 255, 128],
    toColor: [242, 167, 46]
  }, {
    fromColor: [242, 167, 46],
    toColor: [107, 0, 0]
  }]
}, {
  id: "yellow-to-green-to-dark-blue",
  type: "multipart",
  colorRamps: [{
    fromColor: [255, 255, 128],
    toColor: [56, 224, 9]
  }, {
    fromColor: [56, 224, 9],
    toColor: [26, 147, 171]
  }, {
    fromColor: [26, 147, 171],
    toColor: [12, 16, 120]
  }]
}, {
  id: "yellow-to-red",
  fromColor: [245, 245, 0],
  toColor: [255, 0, 0]
}, {
  id: "yellow-green-bright",
  fromColor: [236, 252, 204],
  toColor: [157, 204, 16]
}, {
  id: "yellow-green-light-to-dark",
  fromColor: [215, 240, 175],
  toColor: [96, 107, 45]
}];
var a12 = new n3({
  Aspect: "aspect",
  "Black to White": "black-to-white",
  "Blue Bright": "blue-bright",
  "Blue Light to Dark": "blue-light-to-dark",
  "Blue-Green Bright": "blue-green-bright",
  "Blue-Green Light to Dark": "blue-green-light-to-dark",
  "Brown Light to Dark": "brown-light-to-dark",
  "Brown to Blue Green Diverging, Bright": "brown-to-blue-green-diverging-right",
  "Brown to Blue Green Diverging, Dark": "brown-to-blue-green-diverging-dark",
  "Coefficient Bias": "coefficient-bias",
  "Cold to Hot Diverging": "cold-to-hot-diverging",
  "Condition Number": "condition-number",
  "Cyan to Purple": "cyan-to-purple",
  "Cyan-Light to Blue-Dark": "cyan-light-to-blue-dark",
  Distance: "distance",
  "Elevation #1": "elevation1",
  "Elevation #2": "elevation2",
  Errors: "errors",
  "Gray Light to Dark": "gray-light-to-dark",
  "Green Bright": "green-bright",
  "Green Light to Dark": "green-light-to-dark",
  "Green to Blue": "green-to-blue",
  "Orange Bright": "orange-bright",
  "Orange Light to Dark": "orange-light-to-dark",
  "Partial Spectrum": "partial-spectrum",
  "Partial Spectrum 1 Diverging": "partial-spectrum-1-diverging",
  "Partial Spectrum 2 Diverging": "partial-spectrum-2-diverging",
  "Pink to YellowGreen Diverging, Bright": "pink-to-yellow-green-diverging-bright",
  "Pink to YellowGreen Diverging, Dark": "pink-to-yellow-green-diverging-dark",
  Precipitation: "precipitation",
  Prediction: "prediction",
  "Purple Bright": "purple-bright",
  "Purple to Green Diverging, Bright": "purple-to-green-diverging-bright",
  "Purple to Green Diverging, Dark": "purple-to-green-diverging-dark",
  "Purple-Blue Bright": "purple-blue-bright",
  "Purple-Blue Light to Dark": "purple-blue-light-to-dark",
  "Purple-Red Bright": "purple-red-bright",
  "Purple-Red Light to Dark": "purple-red-light-to-dark",
  "Red Bright": "red-bright",
  "Red Light to Dark": "red-light-to-dark",
  "Red to Blue Diverging, Bright": "red-to-blue-diverging-bright",
  "Red to Blue Diverging, Dark": "red-to-blue-diverging-dark",
  "Red to Green": "red-to-green",
  "Red to Green Diverging, Bright": "red-to-green-diverging-bright",
  "Red to Green Diverging, Dark": "red-to-green-diverging-dark",
  Slope: "slope",
  "Spectrum-Full Bright": "spectrum-full-bright",
  "Spectrum-Full Dark": "spectrum-full-dark",
  "Spectrum-Full Light": "spectrum-full-light",
  Surface: "surface",
  Temperature: "temperature",
  "White to Black": "white-to-black",
  "Yellow to Dark Red": "yellow-to-dark-red",
  "Yellow to Green to Dark Blue": "yellow-to-green-to-dark-blue",
  "Yellow to Red": "yellow-to-red",
  "Yellow-Green Bright": "yellow-green-bright",
  "Yellow-Green Light to Dark": "yellow-green-light-to-dark"
});
function g5(o11, r13) {
  if (!o11 || !r13 || o11.length !== r13.length) return false;
  for (let t8 = 0; t8 < o11.length; t8++) if (o11[t8] > r13[t8] + 2 || o11[t8] < r13[t8] - 2) return false;
  return true;
}
function p4(o11) {
  const r13 = o11.clone();
  return r13.fromColor = o11.toColor, r13.toColor = o11.fromColor, r13.algorithm = o11.algorithm, r13;
}
function u10(o11) {
  if ("multipart" === o11.type) {
    const r13 = o11.clone();
    return r13.colorRamps?.length ? (r13.colorRamps = r13.colorRamps.reverse().map((o12) => p4(o12)), r13) : r13;
  }
  return p4(o11);
}
function f8(r13, t8) {
  if (!r13) return;
  const l7 = t8 ?? m5;
  let e7 = null;
  return "algorithmic" === r13.type ? l7.some((o11) => {
    if (g5(r13.fromColor.toRgb(), o11.fromColor) && g5(r13.toColor.toRgb(), o11.toColor)) return e7 = o11.id, true;
  }) : "multipart" === r13.type && l7.some((t9) => {
    const l8 = r13.colorRamps, i8 = t9.colorRamps;
    if (l8 && i8 && l8.length === i8.length && !i8.some((r14, t10) => {
      if (!g5(l8[t10].fromColor.toRgb(), new u2(r14.fromColor).toRgb()) || !g5(l8[t10].toColor.toRgb(), new u2(r14.toColor).toRgb())) return true;
    })) {
      if (e7) return true;
      e7 = t9.id;
    }
  }), e7;
}
function s7(o11, r13, t8 = false) {
  if (!o11) return;
  let l7 = false, e7 = f8(o11, r13);
  return null != e7 || t8 || (l7 = true, e7 = f8(o11 = u10(o11), r13)), e7 ? {
    id: e7,
    inverted: l7
  } : void 0;
}
function d3(o11, r13 = false) {
  const t8 = "string" == typeof o11 ? o11 : s7(o11, void 0, r13)?.id;
  return t8 ? a12.toJSON(t8) : null;
}
function c6(o11, r13 = "esriCIELabAlgorithm") {
  const t8 = m5.find(({
    id: r14
  }) => r14 === o11);
  return t8 ? t8.colorRamps ? {
    type: "multipart",
    colorRamps: t8.colorRamps.map((o12) => ({
      type: "algorithmic",
      algorithm: r13,
      fromColor: [...o12.fromColor],
      toColor: [...o12.toColor]
    }))
  } : {
    type: "algorithmic",
    algorithm: r13,
    fromColor: [...t8.fromColor],
    toColor: [...t8.toColor]
  } : null;
}
function h6(o11) {
  const r13 = (o11 = o11 || {}).numColors || 256, t8 = o11.distanceOffset || 0, l7 = null != o11.isCustomInterval ? o11.isCustomInterval : null !== o11.distanceInterval && o11.distanceInterval !== 1 / (r13 - 1), e7 = o11.distanceInterval || 1 / (r13 - 1);
  return __spreadProps(__spreadValues({}, o11), {
    numColors: r13,
    distanceOffset: t8,
    interpolateAlpha: !!o11.interpolateAlpha,
    distanceInterval: e7,
    isCustomInterval: l7,
    weights: o11.weights
  });
}
function b3(o11, r13, t8) {
  const {
    numColors: l7,
    distanceOffset: e7,
    distanceInterval: i8,
    isCustomInterval: n15
  } = t8, C5 = 0 === o11.s, m6 = 0 === r13.s;
  let a13 = o11.h, g6 = r13.h;
  C5 && !m6 ? a13 = g6 : m6 && !C5 && (r13 = __spreadProps(__spreadValues({}, r13), {
    h: a13
  }), g6 = a13);
  let p5, u12 = Math.abs(g6 - a13);
  const f9 = 360;
  u12 < f9 / 2 ? p5 = (g6 - a13) * i8 : (u12 = f9 - u12, p5 = a13 > g6 ? u12 * i8 : -u12 * i8);
  const s8 = (r13.s - o11.s) * i8, d4 = (r13.v - o11.v) * i8;
  let {
    s: c7,
    v: h7
  } = o11, b4 = a13;
  if (e7) {
    const o12 = e7 / i8;
    b4 = (b4 + o12 * p5 + f9) % f9, c7 += o12 * s8, h7 += o12 * d4;
  }
  const v5 = [];
  for (let k4 = 0; k4 < l7 - 1; k4++) v5.push({
    h: b4,
    s: c7,
    v: h7
  }), b4 = (b4 + p5 + f9) % f9, c7 += s8, h7 += d4;
  return v5.push(n15 ? {
    h: b4,
    s: c7,
    v: h7
  } : r13), v5;
}
function v3(o11, r13, t8) {
  const {
    numColors: l7,
    distanceOffset: e7,
    distanceInterval: i8,
    isCustomInterval: n15
  } = t8;
  let {
    l: C5,
    a: m6,
    b: a13
  } = o11;
  const g6 = (r13.l - C5) * i8, p5 = (r13.a - m6) * i8, u12 = (r13.b - a13) * i8, f9 = [];
  if (e7) {
    const o12 = e7 / i8;
    C5 += o12 * g6, m6 += o12 * p5, a13 += o12 * u12;
  }
  for (let s8 = 0; s8 < l7 - 1; s8++) f9.push({
    l: C5,
    a: m6,
    b: a13
  }), C5 += g6, m6 += p5, a13 += u12;
  return f9.push(n15 ? {
    l: C5,
    a: m6,
    b: a13
  } : r13), f9;
}
function k3(o11, r13, t8) {
  const {
    numColors: l7,
    distanceOffset: e7,
    distanceInterval: i8,
    isCustomInterval: n15
  } = t8, C5 = o11.h, m6 = r13.h, a13 = 2 * Math.PI;
  let g6;
  if (C5 <= m6) {
    const o12 = m6 - C5, r14 = m6 - C5 - a13;
    g6 = Math.abs(r14) < Math.abs(o12) ? r14 : o12;
  } else {
    const o12 = m6 + a13 - C5, r14 = m6 - C5;
    g6 = Math.abs(r14) < Math.abs(o12) ? r14 : o12;
  }
  const p5 = g6 * i8, u12 = (r13.l - o11.l) * i8, f9 = (r13.c - o11.c) * i8;
  let {
    l: s8,
    c: d4,
    h: c7
  } = o11;
  if (e7) {
    const o12 = e7 / i8;
    s8 += o12 * u12, d4 += o12 * f9, c7 = (c7 + o12 * p5 + a13) % a13;
  }
  const h7 = [];
  for (let b4 = 0; b4 < l7 - 1; b4++) h7.push({
    l: s8,
    c: d4,
    h: c7
  }), s8 += u12, d4 += f9, c7 = (c7 + p5 + a13) % a13;
  return h7.push(n15 ? {
    l: s8,
    c: d4,
    h: c7
  } : r13), h7;
}
function y5(o11, i8) {
  let {
    fromColor: n15,
    toColor: C5
  } = o11;
  n15 = [...n15], C5 = [...C5], 3 === n15.length && (n15 = n15.concat([255])), 3 === C5.length && (C5 = C5.concat([255]));
  const m6 = o11.algorithm || "esriCIELabAlgorithm", a13 = h6(i8), {
    numColors: g6,
    distanceOffset: p5,
    isCustomInterval: u12,
    interpolateAlpha: f9
  } = a13;
  if (1 === g6 && 0 === p5) return [n15];
  if (2 === g6 && 0 === p5 && !u12) return [n15, C5];
  const s8 = {
    r: n15[0],
    g: n15[1],
    b: n15[2]
  }, d4 = {
    r: C5[0],
    g: C5[1],
    b: C5[2]
  }, c7 = "esriCIELabAlgorithm" === m6 ? v3(A(s8), A(d4), a13) : "esriHSVAlgorithm" === m6 ? b3(z(s8), z(d4), a13) : k3(j(s8), j(d4), a13), y6 = [], R3 = n15[3] ?? 255, w5 = ((C5[3] ?? 255) - R3) / (g6 - 1);
  for (let r13 = 0; r13 < g6; r13++) {
    const {
      r: o12,
      g: t8,
      b: l7
    } = y2(c7[r13]), i9 = f9 ? Math.round(R3 + w5 * r13) : 255;
    y6.push([o12, t8, l7, i9]);
  }
  return y6;
}
function R2(o11, r13) {
  const {
    numColors: t8,
    interpolateAlpha: l7
  } = h6(r13);
  let e7 = r13?.weights;
  const {
    colorRamps: i8
  } = o11;
  if (e7) {
    const o12 = e7.reduce((o13, r14) => o13 + r14);
    e7 = e7.map((r14) => r14 / o12);
  } else {
    e7 = [];
    for (let o12 = 0; o12 < i8.length; o12++) e7[o12] = 1 / i8.length;
  }
  const n15 = [], C5 = 1 / (t8 - 1);
  let m6 = 0, a13 = false;
  for (let p5 = 0; p5 < i8.length; p5++) {
    const o12 = n15.length, r14 = a13 ? 0 : o12 * C5 - m6;
    m6 += e7[p5];
    let g7 = p5 === i8.length - 1 ? t8 - 1 - o12 : (e7[p5] - r14) / C5;
    if (a13 = Math.ceil(g7) === g7, g7 = Math.ceil(g7), 0 === g7) continue;
    const u12 = y5(i8[p5], {
      numColors: g7,
      interpolateAlpha: l7,
      distanceOffset: r14 / e7[p5],
      distanceInterval: C5 / e7[p5]
    });
    n15.push(...u12);
  }
  const g6 = [...i8[i8.length - 1].toColor];
  return 3 === g6.length && g6.push(255), n15.push(g6), n15;
}
function w4(o11, r13) {
  const t8 = a3(o11) ? o11.toJSON() : o11;
  return "multipart" === t8.type ? R2(t8, r13) : y5(t8, r13);
}
function B2(o11, r13) {
  const t8 = w4(o11, r13), l7 = r13?.interpolateAlpha;
  return t8.forEach((o12, r14) => {
    o12.unshift(r14), l7 || o12.pop();
  }), t8;
}
function D3(o11) {
  const r13 = z(o11);
  return {
    type: "HsvColor",
    Hue: r13.h,
    Saturation: r13.s,
    Value: r13.v,
    AlphaValue: 255
  };
}
function I3(o11) {
  const r13 = o11.toJSON();
  return {
    Algorithm: r13?.Algorithm || "esriHSVAlgorithm",
    type: "AlgorithmicColorRamp",
    FromColor: D3(o11.fromColor),
    ToColor: D3(o11.toColor)
  };
}
function G2(o11) {
  const r13 = d3(o11);
  if (!r13) return null;
  if ("algorithmic" === o11.type) return __spreadProps(__spreadValues({}, I3(o11)), {
    Name: r13
  });
  if (o11.colorRamps) {
    const t8 = o11.colorRamps.map(I3);
    return {
      type: "MultiPartColorRamp",
      NumColorRamps: t8.length,
      ArrayOfColorRamp: t8,
      Name: r13
    };
  }
  return null;
}
function A4(o11) {
  const r13 = o11.reverse().map((o12) => {
    const r14 = o12.toString(16);
    return r14.length < 2 ? "0" + r14 : r14;
  });
  return 4294967295 & Number.parseInt(r13.join(""), 16);
}

// ../../../node_modules/@arcgis/core/renderers/support/rasterRendererChecks.js
function n14(n15) {
  return ["u8", "s8"].includes(n15.pixelType) && null != n15.statistics?.[0]?.min && null != n15.statistics[0]?.max && 1 === n15.bandCount;
}
function t7(t8, e7) {
  const {
    attributeTable: u12,
    bandCount: r13
  } = t8;
  if (null == u12 && n14(t8)) return true;
  if (null == u12 || r13 > 1) return false;
  if (e7) {
    if (null == u12.fields.find((n15) => n15.name.toLowerCase() === e7.toLowerCase())) return false;
  }
  return true;
}
function e6(n15) {
  const {
    bandCount: t8,
    dataType: e7,
    pixelType: u12
  } = n15;
  return "elevation" === e7 || "generic" === e7 && 1 === t8 && ("s16" === u12 || "s32" === u12 || "f32" === u12 || "f64" === u12);
}
function u11(n15, t8 = false) {
  const {
    bandCount: e7,
    colormap: u12,
    pixelType: r13
  } = n15;
  return 1 === e7 && (!!u12?.length || !t8 && "u8" === r13);
}
function r12(n15, t8 = false) {
  const {
    attributeTable: e7,
    bandCount: u12
  } = n15;
  return 1 === u12 && (!t8 || null != e7 || null != n15.histograms);
}
function o10(n15) {
  const {
    dataType: t8
  } = n15;
  return "vector-uv" === t8 || "vector-magdir" === t8;
}
function i7(n15) {
  const {
    dataType: t8
  } = n15;
  return "vector-uv" === t8 || "vector-magdir" === t8;
}

// ../../../node_modules/@arcgis/core/renderers/support/RasterSymbolizer.js
var C4 = class extends f {
  constructor(e7) {
    super(e7);
  }
  bind() {
    const {
      rendererJSON: e7
    } = this;
    if (!e7) return {
      success: false
    };
    let t8;
    switch (this.lookup = {
      rendererJSON: {}
    }, e7.type) {
      case "uniqueValue":
        t8 = this._updateUVRenderer(e7);
        break;
      case "rasterColormap":
        t8 = this._updateColormapRenderer(e7);
        break;
      case "rasterStretch":
        t8 = this._updateStretchRenderer(e7);
        break;
      case "classBreaks":
        t8 = this._updateClassBreaksRenderer(e7);
        break;
      case "rasterShadedRelief":
        t8 = this._updateShadedReliefRenderer(e7);
        break;
      case "vectorField":
        t8 = this._updateVectorFieldRenderer();
        break;
      case "flowRenderer":
        t8 = this._updateFlowRenderer();
    }
    return t8;
  }
  symbolize(e7) {
    let t8 = e7?.pixelBlock;
    if (!O3(t8)) return t8;
    if (e7.simpleStretchParams && "rasterStretch" === this.rendererJSON.type) return this.simpleStretch(t8, e7.simpleStretchParams);
    try {
      let r13;
      switch (t8.pixels.length > 3 && (t8 = t8.extractBands(e7.bandIds ?? [0, 1, 2])), this.rendererJSON.type) {
        case "uniqueValue":
        case "rasterColormap":
          r13 = this._symbolizeColormap(t8);
          break;
        case "classBreaks":
          r13 = this._symbolizeClassBreaks(t8);
          break;
        case "rasterStretch":
          r13 = this._symbolizeStretch(t8, e7.bandIds);
          break;
        case "rasterShadedRelief": {
          const s8 = e7.extent, o11 = s8.spatialReference.isGeographic, a13 = {
            x: (s8.xmax - s8.xmin) / t8.width,
            y: (s8.ymax - s8.ymin) / t8.height
          };
          r13 = this._symbolizeShadedRelief(t8, {
            isGCS: o11,
            resolution: a13
          });
          break;
        }
      }
      return r13;
    } catch (r13) {
      return n.getLogger(this).error("symbolize", r13.message), t8;
    }
  }
  simpleStretch(e7, t8) {
    if (!O3(e7)) return e7;
    try {
      return e7.pixels.length > 3 && (e7 = e7.extractBands([0, 1, 2])), M2(e7, __spreadProps(__spreadValues({}, t8), {
        isRenderer: true
      }));
    } catch (r13) {
      return n.getLogger(this).error("symbolize", r13.message), e7;
    }
  }
  generateWebGLParameters(e7) {
    if (["uniqueValue", "rasterColormap", "classBreaks"].includes(this.rendererJSON.type)) {
      const {
        indexedColormap: e8,
        offset: t9
      } = this.lookup.colormapLut || {};
      return {
        colormap: e8,
        colormapOffset: t9,
        type: "lut"
      };
    }
    const {
      pixelBlock: t8,
      isGCS: r13,
      resolution: s8,
      bandIds: o11
    } = e7, {
      rendererJSON: a13
    } = this;
    return "rasterStretch" === a13.type ? this._generateStretchWebGLParams(t8, a13, o11) : "rasterShadedRelief" === a13.type ? this._generateShadedReliefWebGLParams(a13, r13, s8 ?? void 0) : "vectorField" === a13.type ? this._generateVectorFieldWebGLParams(a13) : null;
  }
  _isLUTChanged(e7) {
    if (!this.lookup || !this.lookup.rendererJSON) return true;
    if ("colorRamp" in this.rendererJSON) {
      const t8 = this.rendererJSON.colorRamp;
      return e7 ? JSON.stringify(t8) !== JSON.stringify(this.lookup.rendererJSON.colorRamp) : (this.rendererJSON, this.lookup.rendererJSON, JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON));
    }
    return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
  }
  _symbolizeColormap(e7) {
    if (this._isLUTChanged()) {
      if (!this.bind().success) return e7;
    }
    return h(e7, this.lookup.colormapLut);
  }
  _symbolizeClassBreaks(e7) {
    const {
      canUseIndexedLUT: t8
    } = this._analyzeClassBreaks(this.rendererJSON);
    if (this._isLUTChanged()) {
      if (!this.bind().success) return e7;
    }
    return t8 ? h(e7, this.lookup.colormapLut) : u3(e7, this.lookup.remapLut ?? []);
  }
  _symbolizeStretch(e7, t8) {
    const {
      rasterInfo: r13
    } = this, {
      pixelType: s8,
      bandCount: o11
    } = r13, a13 = this.rendererJSON, n15 = ["u8", "u16", "s8", "s16"].includes(s8);
    let l7, c7;
    const {
      dra: p5
    } = a13, {
      gamma: f9
    } = this.lookup;
    if ("histogramEqualization" === a13.stretchType) {
      const s9 = p5 ? null : this.lookup?.histogramLut, o12 = p2(a13, {
        rasterInfo: r13,
        pixelBlock: e7,
        bandIds: t8,
        returnHistogramLut: !s9
      }), n16 = M2(e7, __spreadProps(__spreadValues({}, o12), {
        gamma: f9,
        isRenderer: true
      }));
      c7 = f3(n16, {
        lut: p5 ? o12.histogramLut : s9,
        offset: 0
      });
    } else if (n15) {
      if (p5) {
        const o12 = p2(a13, {
          rasterInfo: r13,
          pixelBlock: e7,
          bandIds: t8
        });
        l7 = a9(__spreadProps(__spreadValues({
          pixelType: s8
        }, o12), {
          gamma: f9,
          rounding: "floor"
        }));
      } else if (this._isLUTChanged()) {
        if (!this.bind().success) return e7;
        l7 = this.lookup ? this.lookup.stretchLut : null;
      } else l7 = this.lookup ? this.lookup.stretchLut : null;
      if (!l7) return e7;
      o11 > 1 && null != t8 && t8.length === e7?.pixels.length && l7?.lut.length === o11 && (l7 = {
        lut: t8.map((e8) => l7.lut[e8]),
        offset: l7.offset
      }), c7 = f3(e7, l7);
    } else {
      const s9 = p2(a13, {
        rasterInfo: r13,
        pixelBlock: e7,
        bandIds: t8
      });
      c7 = M2(e7, __spreadProps(__spreadValues({}, s9), {
        gamma: f9,
        isRenderer: true
      }));
    }
    if (a13.colorRamp) {
      if (this._isLUTChanged(true)) {
        if (!this.bind().success) return e7;
      }
      c7 = h(c7, this.lookup?.colormapLut);
    }
    return c7;
  }
  _symbolizeShadedRelief(e7, t8) {
    const r13 = this.rendererJSON, s8 = __spreadValues(__spreadValues({}, r13), t8), o11 = r11(e7, s8);
    if (!r13.colorRamp) return o11;
    let a13;
    if (this._isLUTChanged(true)) {
      if (!this.bind().success) return o11;
      a13 = this.lookup ? this.lookup.hsvMap : null;
    } else a13 = this.lookup ? this.lookup.hsvMap : null;
    if (!a13) return o11;
    const n15 = this.rasterInfo.statistics?.[0] ?? {
      min: 0,
      max: 8e3
    };
    return c5(o11, e7, a13, n15), o11;
  }
  _isVectorFieldData() {
    const {
      bandCount: e7,
      dataType: t8
    } = this.rasterInfo;
    return 2 === e7 && ("vector-magdir" === t8 || "vector-uv" === t8);
  }
  _updateVectorFieldRenderer() {
    return this._isVectorFieldData() ? {
      success: true
    } : {
      success: false,
      error: `Unsupported data type "${this.rasterInfo.dataType}"; VectorFieldRenderer only supports "vector-magdir" and "vector-uv".`
    };
  }
  _updateFlowRenderer() {
    return this._isVectorFieldData() ? {
      success: true
    } : {
      success: false,
      error: `Unsupported data type "${this.rasterInfo.dataType}"; FlowRenderer only supports "vector-magdir" and "vector-uv".`
    };
  }
  _updateUVRenderer(e7) {
    const {
      bandCount: t8,
      attributeTable: r13,
      pixelType: s8
    } = this.rasterInfo, o11 = e7.field1;
    if (!o11) return {
      success: false,
      error: "Unsupported renderer; missing UniqueValueRenderer.field."
    };
    const a13 = e7.defaultSymbol, n15 = 1 === t8 && ["u8", "s8"].includes(s8);
    if (!t7(this.rasterInfo, o11) && !n15) return {
      success: false,
      error: "Unsupported data; UniqueValueRenderer is only supported on single band data with a valid raster attribute table."
    };
    const i8 = [];
    if (null != r13) {
      const t9 = r13.fields.find((e8) => "value" === e8.name.toLowerCase());
      if (!t9) return {
        success: false,
        error: "Unsupported data; the data's raster attribute table does not have a value field."
      };
      r13.features.forEach((r14) => {
        const s9 = e7.uniqueValueInfos?.find((e8) => String(e8.value) === String(r14.attributes[o11])), n16 = s9?.symbol?.color;
        n16 ? i8.push([r14.attributes[t9.name]].concat(n16)) : a13 && i8.push([r14.attributes[t9.name]].concat(a13.color));
      });
    } else {
      if ("value" !== o11.toLowerCase()) return {
        success: false,
        error: 'Unsupported renderer; UniqueValueRenderer.field must be "Value" when raster attribute table is not available.'
      };
      e7.uniqueValueInfos?.forEach((e8) => {
        const t9 = e8?.symbol?.color;
        t9 ? i8.push([parseInt("" + e8.value, 10)].concat(t9)) : a13 && i8.push([parseInt("" + e8.value, 10)].concat(a13?.color));
      });
    }
    if (0 === i8.length) return {
      success: false,
      error: "Invalid UniqueValueRenderer. Cannot find matching records in the raster attribute table."
    };
    const l7 = a4({
      colormap: i8
    });
    return this.lookup = {
      rendererJSON: e7,
      colormapLut: l7
    }, this.canRenderInWebGL = _2(l7?.indexedColormap), {
      success: true
    };
  }
  _updateColormapRenderer(e7) {
    if (!u11(this.rasterInfo)) return {
      success: false,
      error: "Unsupported data; the data source does not have a colormap."
    };
    const t8 = e7.colormapInfos.map((e8) => [e8.value].concat(e8.color)).sort((e8, t9) => e8[0] - t9[0]);
    if (!t8 || 0 === t8.length) return {
      success: false,
      error: "Unsupported renderer; ColormapRenderer must have meaningful colormapInfos."
    };
    const r13 = a4({
      colormap: t8
    });
    return this.lookup = {
      rendererJSON: e7,
      colormapLut: r13
    }, this.canRenderInWebGL = _2(r13?.indexedColormap), {
      success: true
    };
  }
  _updateShadedReliefRenderer(e7) {
    if (!e6(this.rasterInfo)) return {
      success: false,
      error: `Unsupported data type "${this.rasterInfo.dataType}"; ShadedReliefRenderer only supports "elevation", or single band float/s16 data.`
    };
    if (e7.colorRamp) {
      const r13 = B2(e7.colorRamp, {
        interpolateAlpha: true
      }), s8 = a4({
        colormap: r13
      }), o11 = [], a13 = s8.indexedColormap;
      for (let e8 = 0; e8 < a13.length; e8 += 4) {
        const r14 = z({
          r: a13[e8],
          g: a13[e8 + 1],
          b: a13[e8 + 2]
        });
        o11.push([r14.h / 60, r14.s / 100, 255 * r14.v / 100]);
      }
      this.lookup = {
        rendererJSON: e7,
        colormapLut: s8,
        hsvMap: o11
      };
    } else this.lookup = null;
    return this.canRenderInWebGL = true, {
      success: true
    };
  }
  _analyzeClassBreaks(e7) {
    const {
      attributeTable: t8,
      pixelType: r13
    } = this.rasterInfo, s8 = null != t8 ? t8.fields.find((e8) => "value" === e8.name.toLowerCase()) : null, o11 = null != t8 ? t8.fields.find((t9) => t9.name.toLowerCase() === e7.field.toLowerCase()) : null, a13 = null != s8 && null !== o11;
    return {
      canUseIndexedLUT: ["u8", "u16", "s8", "s16"].includes(r13) || a13,
      tableValueField: s8,
      tableBreakField: o11
    };
  }
  _updateClassBreaksRenderer(e7) {
    const {
      attributeTable: t8
    } = this.rasterInfo, {
      canUseIndexedLUT: r13,
      tableValueField: s8,
      tableBreakField: o11
    } = this._analyzeClassBreaks(e7), a13 = e7.classBreakInfos;
    if (!a13?.length) return {
      success: false,
      error: "Unsupported renderer; missing or invalid ClassBreaksRenderer.classBreakInfos."
    };
    const n15 = a13.sort((e8, t9) => e8.classMaxValue - t9.classMaxValue), i8 = n15[n15.length - 1];
    let l7 = e7.minValue;
    if (!r13) {
      const t9 = [];
      for (let e8 = 0; e8 < n15.length; e8++) t9.push({
        value: n15[e8].classMinValue ?? l7,
        mappedColor: n15[e8].symbol.color
      }), l7 = n15[e8].classMaxValue;
      return t9.push({
        value: i8.classMaxValue,
        mappedColor: i8.symbol.color
      }), this.lookup = {
        rendererJSON: e7,
        remapLut: t9
      }, this.canRenderInWebGL = false, {
        success: true
      };
    }
    const u12 = [];
    if (null != t8 && null != s8 && null !== o11 && s8 !== o11) {
      const r14 = s8.name, a14 = o11.name, i9 = n15[n15.length - 1], {
        classMaxValue: c7
      } = i9;
      l7 = e7.minValue;
      for (const e8 of t8.features) {
        const t9 = e8.attributes[r14], s9 = e8.attributes[a14], o12 = s9 === c7 ? i9 : s9 < l7 ? null : n15.find(({
          classMaxValue: e9
        }) => e9 > s9);
        o12 && u12.push([t9].concat(o12.symbol.color));
      }
    } else {
      l7 = Math.floor(e7.minValue);
      for (let e8 = 0; e8 < n15.length; e8++) {
        const t9 = n15[e8];
        for (let e9 = l7; e9 < t9.classMaxValue; e9++) u12.push([e9].concat(t9.symbol.color));
        l7 = Math.ceil(t9.classMaxValue);
      }
      i8.classMaxValue === l7 && u12.push([i8.classMaxValue].concat(i8.symbol.color));
    }
    const p5 = a4({
      colormap: u12,
      fillUnspecified: false
    });
    return this.lookup = {
      rendererJSON: e7,
      colormapLut: p5
    }, this.canRenderInWebGL = _2(p5?.indexedColormap), {
      success: true
    };
  }
  _updateStretchRenderer(e7) {
    let {
      stretchType: t8,
      dra: r13
    } = e7;
    if (!("none" === t8 || e7.statistics?.length || v4(this.rasterInfo.statistics) || r13)) return {
      success: false,
      error: "Unsupported renderer; StretchRenderer.statistics is required when dynamic range adjustment is not used."
    };
    const s8 = e7.histograms || this.rasterInfo.histograms;
    !V2(e7.stretchType) || s8?.length || r13 || (t8 = "minMax");
    const {
      computeGamma: o11,
      useGamma: a13,
      colorRamp: n15
    } = e7;
    let {
      gamma: i8
    } = e7;
    if (a13 && o11 && !i8?.length) {
      const t9 = e7.statistics?.length ? e7.statistics : this.rasterInfo.statistics;
      i8 = f6(this.rasterInfo.pixelType, t9);
    }
    const l7 = this.rasterInfo.pixelType, u12 = !r13 && ["u8", "u16", "s8", "s16"].includes(l7);
    if ("histogramEqualization" === t8) {
      const t9 = s8.map((e8) => r10(e8));
      this.lookup = {
        rendererJSON: e7,
        histogramLut: t9
      };
    } else if (u12) {
      const t9 = p2(e7, {
        rasterInfo: this.rasterInfo
      }), r14 = a9(__spreadProps(__spreadValues({
        pixelType: l7
      }, t9), {
        gamma: a13 ? i8 : null,
        rounding: "floor"
      }));
      this.lookup = {
        rendererJSON: e7,
        stretchLut: r14
      };
    }
    if (n15 && !U3(n15)) {
      const t9 = B2(n15, {
        interpolateAlpha: true
      });
      this.lookup || (this.lookup = {
        rendererJSON: e7
      }), this.lookup.colormapLut = a4({
        colormap: t9
      }), this.lookup.rendererJSON = e7;
    }
    return this.lookup.gamma = a13 && i8?.length ? i8 : null, this.canRenderInWebGL = true, {
      success: true
    };
  }
  _generateStretchWebGLParams(e7, t8, r13) {
    let s8 = null, o11 = null;
    const a13 = this.lookup?.colormapLut;
    t8.colorRamp && a13 && (s8 = a13.indexedColormap, o11 = a13.offset), "histogramEqualization" === t8.stretchType && (t8 = __spreadProps(__spreadValues({}, t8), {
      stretchType: "minMax"
    }));
    const {
      gamma: n15
    } = this.lookup, i8 = !(!t8.useGamma || !n15?.some((e8) => 1 !== e8)), {
      minCutOff: l7,
      maxCutOff: u12,
      outMin: c7,
      outMax: p5
    } = p2(t8, {
      rasterInfo: this.rasterInfo,
      pixelBlock: e7,
      bandIds: r13
    });
    let d4 = 0;
    null != e7 && (d4 = e7.getPlaneCount(), 2 === d4 && ((e7 = e7.clone()).statistics = [e7.statistics[0]], e7.pixels = [e7.pixels[0]]));
    const {
      bandCount: m6
    } = this.rasterInfo, f9 = Math.min(3, r13?.length || d4 || m6, m6), y6 = new Float32Array(f9), g6 = s8 || i8 ? 1 : 255;
    let b4;
    for (b4 = 0; b4 < l7.length; b4++) y6[b4] = u12[b4] === l7[b4] ? 0 : (p5 - c7) / (u12[b4] - l7[b4]) / g6;
    const S4 = new Float32Array(f9);
    if (i8 && n15) for (b4 = 0; b4 < f9; b4++) n15[b4] > 1 ? n15[b4] > 2 ? S4[b4] = 6.5 + (n15[b4] - 2) ** 2.5 : S4[b4] = 6.5 + 100 * (2 - n15[b4]) ** 4 : S4[b4] = 1;
    return {
      bandCount: f9,
      outMin: c7 / g6,
      outMax: p5 / g6,
      minCutOff: l7,
      maxCutOff: u12,
      factor: y6,
      useGamma: i8,
      gamma: i8 ? n15 : [1, 1, 1],
      gammaCorrection: i8 ? S4 : [1, 1, 1],
      colormap: s8,
      colormapOffset: o11,
      stretchType: t8.stretchType,
      type: "stretch"
    };
  }
  _generateShadedReliefWebGLParams(e7, t8 = false, r13 = {
    x: 0,
    y: 0
  }) {
    let s8 = null, o11 = null;
    const a13 = this.lookup?.colormapLut;
    e7.colorRamp && a13 && (s8 = a13.indexedColormap, o11 = a13.offset);
    const n15 = __spreadProps(__spreadValues({}, e7), {
      isGCS: t8,
      resolution: r13
    }), i8 = o9(n15), l7 = this.rasterInfo.statistics?.[0];
    return __spreadProps(__spreadValues({}, i8), {
      minValue: l7?.min ?? 0,
      maxValue: l7?.max ?? 8e3,
      hillshadeType: "traditional" === e7.hillshadeType ? 0 : 1,
      type: "hillshade",
      colormap: s8,
      colormapOffset: o11
    });
  }
  _generateVectorFieldWebGLParams(e7) {
    const {
      style: t8,
      inputUnit: r13,
      outputUnit: s8,
      visualVariables: o11,
      symbolTileSize: a13,
      flowRepresentation: n15
    } = e7;
    let i8;
    const l7 = this.rasterInfo.statistics?.[0].min ?? 0, u12 = this.rasterInfo.statistics?.[0].max ?? 50, c7 = o11?.find((e8) => "sizeInfo" === e8.type) ?? {
      type: "sizeInfo",
      field: "Magnitude",
      maxDataValue: u12,
      maxSize: 0.8 * a13,
      minDataValue: l7,
      minSize: 0.2 * a13
    }, p5 = c7.minDataValue ?? l7, d4 = c7.maxDataValue ?? u12, h7 = null != c7.maxSize && null != c7.minSize ? [c7.minSize / a13, c7.maxSize / a13] : [0.2, 0.8];
    if ("wind_speed" === t8) {
      const e8 = (h7[0] + h7[1]) / 2;
      h7[0] = h7[1] = e8;
    }
    const m6 = null != p5 && null != d4 ? [p5, d4] : null;
    if ("classified_arrow" === t8) if (null != p5 && null != d4 && null != c7) {
      i8 = [];
      const e8 = (c7.maxDataValue - c7.minDataValue) / 5;
      for (let t9 = 0; t9 < 6; t9++) i8.push(c7.minDataValue + e8 * t9);
    } else i8 = [0, 1e-6, 3.5, 7, 10.5, 14];
    const f9 = "flow_to" === n15 === ("ocean_current_kn" === t8 || "ocean_current_m" === t8) ? 0 : Math.PI, y6 = o11?.find((e8) => "rotationInfo" === e8.type);
    return {
      breakValues: i8,
      dataRange: m6,
      inputUnit: r13,
      outputUnit: s8,
      symbolTileSize: a13,
      symbolPercentRange: h7,
      style: t8 || "single_arrow",
      rotation: f9,
      rotationType: this.rasterInfo.storageInfo?.tileInfo && "vector-uv" === this.rasterInfo.dataType ? "geographic" : y6?.rotationType || e7.rotationType,
      type: "vectorField"
    };
  }
};
e([y({
  json: {
    write: true
  }
})], C4.prototype, "rendererJSON", void 0), e([y({
  type: m4,
  json: {
    write: true
  }
})], C4.prototype, "rasterInfo", void 0), e([y({
  json: {
    write: true
  }
})], C4.prototype, "lookup", void 0), e([y()], C4.prototype, "canRenderInWebGL", void 0), C4 = e([a2("esri.renderers.support.RasterSymbolizer")], C4);
var L2 = C4;
function _2(e7) {
  return !!e7?.length && e7.length <= 16384;
}
function V2(e7) {
  return "percentClip" === e7 || "histogramEqualization" === e7;
}
function v4(e7) {
  return null != e7 && e7.length > 0 && null != e7[0].min && null != e7[0].max;
}
function O3(e7) {
  return o3(e7) && 0 !== e7.validPixelCount;
}
function U3(e7) {
  return "algorithmic" === e7.type && ["0,0,0,255", "0,0,0"].includes(e7.fromColor.join(",")) && ["255,255,255,255", "255,255,255"].includes(e7.toColor.join(","));
}

export {
  r8 as r,
  n8 as n,
  r9 as r2,
  L,
  R,
  D,
  U,
  N,
  F,
  B,
  P2 as P,
  j2 as j,
  n12 as n2,
  m4 as m,
  n13 as n3,
  h5 as h,
  u9 as u,
  f7 as f,
  C3 as C,
  m5 as m2,
  a12 as a,
  d3 as d,
  c6 as c,
  w4 as w,
  B2,
  G2 as G,
  A4 as A,
  n9 as n4,
  a8 as a2,
  a9 as a3,
  l4 as l,
  m3,
  h3 as h2,
  g4 as g,
  p2 as p,
  x3 as x,
  M2 as M,
  t7 as t,
  e6 as e,
  u11 as u2,
  r12 as r3,
  o10 as o,
  i7 as i,
  L2
};
//# sourceMappingURL=chunk-2AV27Q4X.js.map
