import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-CIJQ7JPR.js";
import {
  d
} from "./chunk-5RF6XDV4.js";
import {
  n
} from "./chunk-PNUA7JOS.js";
import {
  e
} from "./chunk-6UEMNP3E.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/utils.js
function n2(t) {
  return n(t.frameDurations.reduce((t2, e3) => t2 + e3, 0));
}
function o(t) {
  const {
    width: e3,
    height: r
  } = t, i = t.frameDurations.reverse(), a = (e4) => {
    const r2 = t.frameDurations.length - 1 - e4;
    return t.getFrame(r2);
  };
  return {
    frameCount: t.frameCount,
    duration: t.duration,
    frameDurations: i,
    getFrame: a,
    width: e3,
    height: r
  };
}
function s(t, r) {
  const {
    width: i,
    height: a,
    getFrame: n3
  } = t, o2 = r / t.duration, s2 = t.frameDurations.map((t2) => n(t2 * o2));
  return {
    frameCount: t.frameCount,
    duration: t.duration,
    frameDurations: s2,
    getFrame: n3,
    width: i,
    height: a
  };
}
function m2(t, r) {
  const {
    width: i,
    height: a,
    getFrame: n3
  } = t, o2 = t.frameDurations.slice(), s2 = o2.shift();
  return o2.unshift(n(s2 + r)), {
    frameCount: t.frameCount,
    duration: t.duration + r,
    frameDurations: o2,
    getFrame: n3,
    width: i,
    height: a
  };
}
function u(t, r) {
  const {
    width: i,
    height: a,
    getFrame: n3
  } = t, o2 = t.frameDurations.slice(), s2 = o2.pop();
  return o2.push(n(s2 + r)), {
    frameCount: t.frameCount,
    duration: t.duration + r,
    frameDurations: o2,
    getFrame: n3,
    width: i,
    height: a
  };
}
var h = class {
  constructor(t, e3, r, i) {
    this._animation = t, this._repeatType = r, this._onFrameData = i, this._direction = 1, this._currentFrame = 0, this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    let a = 0;
    for (; e3 > a; ) a += this.timeToFrame, this.nextFrame();
    const n3 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(n3);
  }
  nextFrame() {
    if (this._currentFrame += this._direction, this._direction > 0) {
      if (this._currentFrame === this._animation.frameDurations.length) switch (this._repeatType) {
        case d.None:
          this._currentFrame -= this._direction;
          break;
        case d.Loop:
          this._currentFrame = 0;
          break;
        case d.Oscillate:
          this._currentFrame -= this._direction, this._direction = -1;
      }
    } else if (-1 === this._currentFrame) switch (this._repeatType) {
      case d.None:
        this._currentFrame -= this._direction;
        break;
      case d.Loop:
        this._currentFrame = this._animation.frameDurations.length - 1;
        break;
      case d.Oscillate:
        this._currentFrame -= this._direction, this._direction = 1;
    }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const t = this._animation.getFrame(this._currentFrame);
    this._onFrameData(t);
  }
};
function c(t, r, c2, f2) {
  let l, {
    repeatType: d2
  } = r;
  if (null == d2 && (d2 = d.Loop), true === r.reverseAnimation && (t = o(t)), null != r.duration && (t = s(t, n(1e3 * r.duration))), null != r.repeatDelay) {
    const a = 1e3 * r.repeatDelay;
    d2 === d.Loop ? t = u(t, n(a)) : d2 === d.Oscillate && (t = m2(u(t, n(a / 2)), n(a / 2)));
  }
  if (null != r.startTimeOffset) l = n(1e3 * r.startTimeOffset);
  else if (null != r.randomizeStartTime) {
    const i = 82749913, o2 = null != r.randomizeStartSeed ? r.randomizeStartSeed : i, s2 = e2(c2, o2);
    l = n(s2 * n2(t));
  } else l = n(0);
  return new h(t, l, d2, f2);
}
function f(e3, r, i, a) {
  const n3 = null == r.playAnimation || r.playAnimation, o2 = c(e3, r, i, a);
  let s2, m3 = o2.timeToFrame;
  function u2() {
    s2 = n3 ? setTimeout(() => {
      o2.nextFrame(), m3 = o2.timeToFrame, u2();
    }, m3) : void 0;
  }
  return u2(), e(() => n3 && clearTimeout(s2));
}

export {
  f
};
//# sourceMappingURL=chunk-SI737Z27.js.map
