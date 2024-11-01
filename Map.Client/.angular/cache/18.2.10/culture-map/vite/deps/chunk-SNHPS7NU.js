// ../../../node_modules/@arcgis/core/symbols/cim/enums.js
var e;
var n;
var i;
var t;
var o;
var r;
var l;
var a;
var u;
var c;
var d;
var f;
var s;
var p;
var g;
var C;
var T;
var m;
var S;
var P;
var R;
var B;
var h;
var N;
var O;
var L;
var M;
var A;
var y;
var E;
var D;
var F;
var W;
var v;
var x;
var U;
var k;
var H;
var b;
var w;
var I;
var G;
var q;
var J;
var X;
var Y;
var Z;
var K;
var Q;
var V;
var j;
var z;
var $;
var _;
var ee;
var ne;
var ie;
var te;
var oe;
var re;
var le;
!function(e2) {
  e2[e2.BUTT = 0] = "BUTT", e2[e2.ROUND = 1] = "ROUND", e2[e2.SQUARE = 2] = "SQUARE", e2[e2.UNKNOWN = 4] = "UNKNOWN";
}(e || (e = {})), function(e2) {
  e2[e2.BEVEL = 0] = "BEVEL", e2[e2.ROUND = 1] = "ROUND", e2[e2.MITER = 2] = "MITER", e2[e2.UNKNOWN = 4] = "UNKNOWN";
}(n || (n = {})), function(e2) {
  e2[e2.SCREEN = 0] = "SCREEN", e2[e2.MAP = 1] = "MAP";
}(i || (i = {})), function(e2) {
  e2[e2.Tint = 0] = "Tint", e2[e2.Ignore = 1] = "Ignore", e2[e2.Multiply = 99] = "Multiply";
}(t || (t = {})), function(e2) {
  e2.Both = "Both", e2.JustBegin = "JustBegin", e2.JustEnd = "JustEnd", e2.None = "None";
}(o || (o = {})), function(e2) {
  e2[e2.Mosaic = 0] = "Mosaic", e2[e2.Centered = 1] = "Centered";
}(r || (r = {})), function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.Superscript = 1] = "Superscript", e2[e2.Subscript = 2] = "Subscript";
}(l || (l = {})), function(e2) {
  e2[e2.MSSymbol = 0] = "MSSymbol", e2[e2.Unicode = 1] = "Unicode";
}(a || (a = {})), function(e2) {
  e2[e2.Unspecified = 0] = "Unspecified", e2[e2.TrueType = 1] = "TrueType", e2[e2.PSOpenType = 2] = "PSOpenType", e2[e2.TTOpenType = 3] = "TTOpenType", e2[e2.Type1 = 4] = "Type1";
}(u || (u = {})), function(e2) {
  e2[e2.Display = 0] = "Display", e2[e2.Map = 1] = "Map";
}(c || (c = {})), function(e2) {
  e2.None = "None", e2.Loop = "Loop", e2.Oscillate = "Oscillate";
}(d || (d = {})), function(e2) {
  e2[e2.Z = 0] = "Z", e2[e2.X = 1] = "X", e2[e2.Y = 2] = "Y";
}(f || (f = {})), function(e2) {
  e2[e2.XYZ = 0] = "XYZ", e2[e2.ZXY = 1] = "ZXY", e2[e2.YXZ = 2] = "YXZ";
}(s || (s = {})), function(e2) {
  e2[e2.Rectangle = 0] = "Rectangle", e2[e2.RoundedRectangle = 1] = "RoundedRectangle", e2[e2.Oval = 2] = "Oval";
}(p || (p = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Alpha = 1] = "Alpha", e2[e2.Screen = 2] = "Screen", e2[e2.Multiply = 3] = "Multiply", e2[e2.Add = 4] = "Add";
}(g || (g = {})), function(e2) {
  e2[e2.TTB = 0] = "TTB", e2[e2.RTL = 1] = "RTL", e2[e2.BTT = 2] = "BTT";
}(C || (C = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.SignPost = 1] = "SignPost", e2[e2.FaceNearPlane = 2] = "FaceNearPlane";
}(T || (T = {})), function(e2) {
  e2[e2.Float = 0] = "Float", e2[e2.String = 1] = "String", e2[e2.Boolean = 2] = "Boolean";
}(m || (m = {})), function(e2) {
  e2[e2.Intersect = 0] = "Intersect", e2[e2.Subtract = 1] = "Subtract";
}(S || (S = {})), function(e2) {
  e2.OpenEnded = "OpenEnded", e2.Block = "Block", e2.Crossed = "Crossed";
}(P || (P = {})), function(e2) {
  e2.FullGeometry = "FullGeometry", e2.PerpendicularFromFirstSegment = "PerpendicularFromFirstSegment", e2.ReversedFirstSegment = "ReversedFirstSegment", e2.PerpendicularToSecondSegment = "PerpendicularToSecondSegment", e2.SecondSegmentWithTicks = "SecondSegmentWithTicks", e2.DoublePerpendicular = "DoublePerpendicular", e2.OppositeToFirstSegment = "OppositeToFirstSegment", e2.TriplePerpendicular = "TriplePerpendicular", e2.HalfCircleFirstSegment = "HalfCircleFirstSegment", e2.HalfCircleSecondSegment = "HalfCircleSecondSegment", e2.HalfCircleExtended = "HalfCircleExtended", e2.OpenCircle = "OpenCircle", e2.CoverageEdgesWithTicks = "CoverageEdgesWithTicks", e2.GapExtentWithDoubleTicks = "GapExtentWithDoubleTicks", e2.GapExtentMidline = "GapExtentMidline", e2.Chevron = "Chevron", e2.PerpendicularWithArc = "PerpendicularWithArc", e2.ClosedHalfCircle = "ClosedHalfCircle", e2.TripleParallelExtended = "TripleParallelExtended", e2.ParallelWithTicks = "ParallelWithTicks", e2.Parallel = "Parallel", e2.PerpendicularToFirstSegment = "PerpendicularToFirstSegment", e2.ParallelOffset = "ParallelOffset", e2.OffsetOpposite = "OffsetOpposite", e2.OffsetSame = "OffsetSame", e2.CircleWithArc = "CircleWithArc", e2.DoubleJog = "DoubleJog", e2.PerpendicularOffset = "PerpendicularOffset", e2.LineExcludingLastSegment = "LineExcludingLastSegment", e2.MultivertexArrow = "MultivertexArrow", e2.CrossedArrow = "CrossedArrow", e2.ChevronArrow = "ChevronArrow", e2.ChevronArrowOffset = "ChevronArrowOffset", e2.PartialFirstSegment = "PartialFirstSegment", e2.Arch = "Arch", e2.CurvedParallelTicks = "CurvedParallelTicks", e2.Arc90Degrees = "Arc90Degrees", e2.TipWithPerpendicularAndTicks = "TipWithPerpendicularAndTicks";
}(R || (R = {})), function(e2) {
  e2.Mitered = "Mitered", e2.Bevelled = "Bevelled", e2.Rounded = "Rounded", e2.Square = "Square", e2.TrueBuffer = "TrueBuffer";
}(B || (B = {})), function(e2) {
  e2.ClosePath = "ClosePath", e2.ConvexHull = "ConvexHull", e2.RectangularBox = "RectangularBox";
}(h || (h = {})), function(e2) {
  e2.BeginningOfLine = "BeginningOfLine", e2.EndOfLine = "EndOfLine";
}(N || (N = {})), function(e2) {
  e2.Mitered = "Mitered", e2.Bevelled = "Bevelled", e2.Rounded = "Rounded", e2.Square = "Square";
}(O || (O = {})), function(e2) {
  e2.Fast = "Fast", e2.Accurate = "Accurate";
}(L || (L = {})), function(e2) {
  e2.BeginningOfLine = "BeginningOfLine", e2.EndOfLine = "EndOfLine";
}(M || (M = {})), function(e2) {
  e2.Sinus = "Sinus", e2.Square = "Square", e2.Triangle = "Triangle", e2.Random = "Random";
}(A || (A = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Default = 1] = "Default", e2[e2.Force = 2] = "Force";
}(y || (y = {})), function(e2) {
  e2[e2.Buffered = 0] = "Buffered", e2[e2.Left = 1] = "Left", e2[e2.Right = 2] = "Right", e2[e2.AlongLine = 3] = "AlongLine";
}(E || (E = {})), function(e2) {
  e2[e2.Linear = 0] = "Linear", e2[e2.Rectangular = 1] = "Rectangular", e2[e2.Circular = 2] = "Circular", e2[e2.Buffered = 3] = "Buffered";
}(D || (D = {})), function(e2) {
  e2[e2.Discrete = 0] = "Discrete", e2[e2.Continuous = 1] = "Continuous";
}(F || (F = {})), function(e2) {
  e2[e2.AcrossLine = 0] = "AcrossLine", e2[e2.AloneLine = 1] = "AloneLine";
}(W || (W = {})), function(e2) {
  e2[e2.Left = 0] = "Left", e2[e2.Right = 1] = "Right", e2[e2.Center = 2] = "Center", e2[e2.Justify = 3] = "Justify";
}(v || (v = {})), function(e2) {
  e2[e2.Base = 0] = "Base", e2[e2.MidPoint = 1] = "MidPoint", e2[e2.ThreePoint = 2] = "ThreePoint", e2[e2.FourPoint = 3] = "FourPoint", e2[e2.Underline = 4] = "Underline", e2[e2.CircularCW = 5] = "CircularCW", e2[e2.CircularCCW = 6] = "CircularCCW";
}(x || (x = {})), function(e2) {
  e2.Butt = "Butt", e2.Round = "Round", e2.Square = "Square";
}(U || (U = {})), function(e2) {
  e2.NoConstraint = "NoConstraint", e2.HalfPattern = "HalfPattern", e2.HalfGap = "HalfGap", e2.FullPattern = "FullPattern", e2.FullGap = "FullGap", e2.Custom = "Custom";
}(k || (k = {})), function(e2) {
  e2[e2.None = -1] = "None", e2[e2.Custom = 0] = "Custom", e2[e2.Circle = 1] = "Circle", e2[e2.OpenArrow = 2] = "OpenArrow", e2[e2.ClosedArrow = 3] = "ClosedArrow", e2[e2.Diamond = 4] = "Diamond";
}(H || (H = {})), function(e2) {
  e2[e2.ExtraLeading = 0] = "ExtraLeading", e2[e2.Multiple = 1] = "Multiple", e2[e2.Exact = 2] = "Exact";
}(b || (b = {})), function(e2) {
  e2.Bevel = "Bevel", e2.Round = "Round", e2.Miter = "Miter";
}(w || (w = {})), function(e2) {
  e2[e2.Default = 0] = "Default", e2[e2.String = 1] = "String", e2[e2.Numeric = 2] = "Numeric";
}(I || (I = {})), function(e2) {
  e2[e2.InsidePolygon = 0] = "InsidePolygon", e2[e2.PolygonCenter = 1] = "PolygonCenter", e2[e2.RandomlyInsidePolygon = 2] = "RandomlyInsidePolygon";
}(G || (G = {})), function(e2) {
  e2[e2.Tint = 0] = "Tint", e2[e2.Replace = 1] = "Replace", e2[e2.Multiply = 2] = "Multiply";
}(q || (q = {})), function(e2) {
  e2[e2.ClipAtBoundary = 0] = "ClipAtBoundary", e2[e2.RemoveIfCenterOutsideBoundary = 1] = "RemoveIfCenterOutsideBoundary", e2[e2.DoNotTouchBoundary = 2] = "DoNotTouchBoundary", e2[e2.DoNotClip = 3] = "DoNotClip";
}(J || (J = {})), function(e2) {
  e2.NoConstraint = "NoConstraint", e2.WithMarkers = "WithMarkers", e2.WithFullGap = "WithFullGap", e2.WithHalfGap = "WithHalfGap", e2.Custom = "Custom";
}(X || (X = {})), function(e2) {
  e2.Fixed = "Fixed", e2.Random = "Random", e2.RandomFixedQuantity = "RandomFixedQuantity";
}(Y || (Y = {})), function(e2) {
  e2.LineMiddle = "LineMiddle", e2.LineBeginning = "LineBeginning", e2.LineEnd = "LineEnd", e2.SegmentMidpoint = "SegmentMidpoint";
}(Z || (Z = {})), function(e2) {
  e2.OnPolygon = "OnPolygon", e2.CenterOfMass = "CenterOfMass", e2.BoundingBoxCenter = "BoundingBoxCenter";
}(K || (K = {})), function(e2) {
  e2[e2.Low = 0] = "Low", e2[e2.Medium = 1] = "Medium", e2[e2.High = 2] = "High";
}(Q || (Q = {})), function(e2) {
  e2[e2.MarkerCenter = 0] = "MarkerCenter", e2[e2.MarkerBounds = 1] = "MarkerBounds";
}(V || (V = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.PropUniform = 1] = "PropUniform", e2[e2.PropNonuniform = 2] = "PropNonuniform", e2[e2.DifUniform = 3] = "DifUniform", e2[e2.DifNonuniform = 4] = "DifNonuniform";
}(j || (j = {})), function(e2) {
  e2.Tube = "Tube", e2.Strip = "Strip", e2.Wall = "Wall";
}(z || (z = {})), function(e2) {
  e2[e2.Random = 0] = "Random", e2[e2.Increasing = 1] = "Increasing", e2[e2.Decreasing = 2] = "Decreasing", e2[e2.IncreasingThenDecreasing = 3] = "IncreasingThenDecreasing";
}($ || ($ = {})), function(e2) {
  e2[e2.Relative = 0] = "Relative", e2[e2.Absolute = 1] = "Absolute";
}(_ || (_ = {})), function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.LowerCase = 1] = "LowerCase", e2[e2.Allcaps = 2] = "Allcaps";
}(ee || (ee = {})), function(e2) {
  e2[e2.LTR = 0] = "LTR", e2[e2.RTL = 1] = "RTL";
}(ne || (ne = {})), function(e2) {
  e2.Draft = "Draft", e2.Picture = "Picture", e2.Text = "Text";
}(ie || (ie = {})), function(e2) {
  e2[e2.Top = 0] = "Top", e2[e2.Center = 1] = "Center", e2[e2.Baseline = 2] = "Baseline", e2[e2.Bottom = 3] = "Bottom";
}(te || (te = {})), function(e2) {
  e2[e2.Right = 0] = "Right", e2[e2.Upright = 1] = "Upright";
}(oe || (oe = {})), function(e2) {
  e2[e2.Small = 0] = "Small", e2[e2.Medium = 1] = "Medium", e2[e2.Large = 2] = "Large";
}(re || (re = {})), function(e2) {
  e2[e2.Calm = 0] = "Calm", e2[e2.Rippled = 1] = "Rippled", e2[e2.Slight = 2] = "Slight", e2[e2.Moderate = 3] = "Moderate";
}(le || (le = {}));

export {
  e,
  n,
  i,
  o,
  l,
  a,
  u,
  d,
  C,
  T,
  P,
  R,
  B,
  O,
  A,
  y,
  U,
  k,
  w,
  X,
  Y,
  Z,
  K,
  ne,
  ie,
  oe
};
//# sourceMappingURL=chunk-SNHPS7NU.js.map
