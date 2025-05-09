import * as m from "react";
import Pe, { useRef as fe, useState as ye, useMemo as Ce, useEffect as Xe, forwardRef as Ct, useLayoutEffect as gc, createElement as Zr } from "react";
import { useThree as zo, useFrame as Ut, Canvas as Vo } from "@react-three/fiber";
import { Html as Nn, Sphere as st, OrbitControls as Bo, Environment as vc, Stars as xc } from "@react-three/drei";
import * as R from "three";
import * as br from "react-dom";
import yc from "react-dom";
var Zt = { exports: {} }, _t = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var to;
function bc() {
  if (to) return _t;
  to = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var c in s)
        c !== "key" && (a[c] = s[c]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return _t.Fragment = t, _t.jsx = r, _t.jsxs = r, _t;
}
var It = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function wc() {
  return ro || (ro = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === D ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case h:
          return "Fragment";
        case g:
          return "Profiler";
        case x:
          return "StrictMode";
        case N:
          return "Suspense";
        case A:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case b:
            return "Portal";
          case y:
            return (E.displayName || "Context") + ".Provider";
          case C:
            return (E._context.displayName || "Context") + ".Consumer";
          case w:
            var B = E.render;
            return E = E.displayName, E || (E = B.displayName || B.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case M:
            return B = E.displayName || null, B !== null ? B : e(E.type) || "Memo";
          case j:
            B = E._payload, E = E._init;
            try {
              return e(E(B));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function r(E) {
      try {
        t(E);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var K = B.error, q = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return K.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          q
        ), t(E);
      }
    }
    function n(E) {
      if (E === h) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === j)
        return "<...>";
      try {
        var B = e(E);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var E = k.A;
      return E === null ? null : E.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (T.call(E, "key")) {
        var B = Object.getOwnPropertyDescriptor(E, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function c(E, B) {
      function K() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      K.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: K,
        configurable: !0
      });
    }
    function l() {
      var E = e(this.type);
      return P[E] || (P[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function f(E, B, K, q, Q, se, ae, L) {
      return K = se.ref, E = {
        $$typeof: v,
        type: E,
        key: B,
        props: se,
        _owner: Q
      }, (K !== void 0 ? K : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ae
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function u(E, B, K, q, Q, se, ae, L) {
      var H = B.children;
      if (H !== void 0)
        if (q)
          if (O(H)) {
            for (q = 0; q < H.length; q++)
              d(H[q]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(H);
      if (T.call(B, "key")) {
        H = e(E);
        var Z = Object.keys(B).filter(function(te) {
          return te !== "key";
        });
        q = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", I[H + q] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          H,
          Z,
          H
        ), I[H + q] = !0);
      }
      if (H = null, K !== void 0 && (r(K), H = "" + K), i(B) && (r(B.key), H = "" + B.key), "key" in B) {
        K = {};
        for (var J in B)
          J !== "key" && (K[J] = B[J]);
      } else K = B;
      return H && c(
        K,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), f(
        E,
        H,
        se,
        Q,
        s(),
        K,
        ae,
        L
      );
    }
    function d(E) {
      typeof E == "object" && E !== null && E.$$typeof === v && E._store && (E._store.validated = 1);
    }
    var p = Pe, v = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), k = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, O = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var z, P = {}, V = p["react-stack-bottom-frame"].bind(
      p,
      a
    )(), S = F(n(a)), I = {};
    It.Fragment = h, It.jsx = function(E, B, K, q, Q) {
      var se = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        E,
        B,
        K,
        !1,
        q,
        Q,
        se ? Error("react-stack-top-frame") : V,
        se ? F(n(E)) : S
      );
    }, It.jsxs = function(E, B, K, q, Q) {
      var se = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        E,
        B,
        K,
        !0,
        q,
        Q,
        se ? Error("react-stack-top-frame") : V,
        se ? F(n(E)) : S
      );
    };
  }()), It;
}
var no;
function $o() {
  return no || (no = 1, process.env.NODE_ENV === "production" ? Zt.exports = bc() : Zt.exports = wc()), Zt.exports;
}
var o = $o();
const ir = {
  "Rocky Highlands": {
    temperature: [240, 320],
    atmosphereStrength: [0.3, 0.7],
    cloudCount: [10, 60],
    waterHeight: [0, 0.2],
    surfaceRoughness: [0.5, 1],
    plateTectonics: [0.4, 0.9],
    biomassLevel: [0.01, 0.2],
    waterLevel: [0.1, 0.3],
    salinity: [0.1, 0.5],
    volcanicActivity: [0.2, 0.8],
    surfaceDeposits: ["Bedrock", "Big Rocks", "Surface Cracks"]
  },
  "Barren Wasteland": {
    temperature: [180, 260],
    atmosphereStrength: [0.1, 0.5],
    cloudCount: [0, 10],
    waterHeight: [0, 0.05],
    surfaceRoughness: [0.2, 0.8],
    plateTectonics: [0.1, 0.5],
    biomassLevel: [0, 0.05],
    waterLevel: [0, 0.1],
    salinity: [0, 0.3],
    volcanicActivity: [0, 0.3],
    surfaceDeposits: ["Dust Deposits", "Surface Cracks"]
  },
  "Arid Dunes": {
    temperature: [250, 330],
    atmosphereStrength: [0.2, 0.6],
    cloudCount: [5, 40],
    waterHeight: [0, 0.2],
    surfaceRoughness: [0.3, 0.9],
    plateTectonics: [0.1, 0.4],
    biomassLevel: [0, 0.1],
    waterLevel: [0, 0.2],
    salinity: [0, 0.4],
    volcanicActivity: [0.1, 0.6],
    surfaceDeposits: ["Sand", "Unconsolidated Soil"]
  },
  "Frigid Expanse": {
    temperature: [120, 240],
    atmosphereStrength: [0.4, 0.9],
    cloudCount: [20, 100],
    waterHeight: [0.1, 0.5],
    surfaceRoughness: [0.2, 0.6],
    plateTectonics: [0.1, 0.3],
    biomassLevel: [0, 0.3],
    waterLevel: [0.2, 0.8],
    salinity: [0.2, 0.8],
    volcanicActivity: [0, 0.2],
    surfaceDeposits: ["Ice Sheets", "Frozen Lakes"]
  },
  "Volcanic Terrain": {
    temperature: [300, 1200],
    atmosphereStrength: [0.5, 1.2],
    cloudCount: [15, 70],
    waterHeight: [0, 0.1],
    surfaceRoughness: [0.7, 1.2],
    plateTectonics: [0.5, 1],
    biomassLevel: [0.02, 0.1],
    waterLevel: [0, 0.2],
    salinity: [0, 0.2],
    volcanicActivity: [0.5, 1.2],
    surfaceDeposits: ["Volcanic Ash", "Lava Fields"]
  },
  "Basalt Plains": {
    temperature: [220, 350],
    atmosphereStrength: [0.3, 0.8],
    cloudCount: [10, 50],
    waterHeight: [0, 0.3],
    surfaceRoughness: [0.3, 0.7],
    plateTectonics: [0.3, 0.7],
    biomassLevel: [0, 0.15],
    waterLevel: [0, 0.3],
    salinity: [0.1, 0.4],
    volcanicActivity: [0.2, 0.6],
    surfaceDeposits: ["Basaltic Rock", "Mineral Deposits"]
  },
  "Sediment Flats": {
    temperature: [260, 310],
    atmosphereStrength: [0.4, 0.7],
    cloudCount: [20, 60],
    waterHeight: [0.1, 0.4],
    surfaceRoughness: [0.1, 0.4],
    plateTectonics: [0.1, 0.4],
    biomassLevel: [0.05, 0.3],
    waterLevel: [0.2, 0.5],
    salinity: [0.2, 0.6],
    volcanicActivity: [0, 0.3],
    surfaceDeposits: ["Clay", "Fine Sand", "Sulfate-Rich Soil"]
  },
  "Cratered Terrain": {
    temperature: [200, 300],
    atmosphereStrength: [0.1, 0.6],
    cloudCount: [5, 40],
    waterHeight: [0, 0.2],
    surfaceRoughness: [0.4, 0.9],
    plateTectonics: [0, 0.3],
    biomassLevel: [0, 0.1],
    waterLevel: [0, 0.2],
    salinity: [0, 0.3],
    volcanicActivity: [0, 0.4],
    surfaceDeposits: ["Regolith", "Dust Deposits"]
  },
  "Tundra Basin": {
    temperature: [180, 270],
    atmosphereStrength: [0.4, 0.8],
    cloudCount: [30, 80],
    waterHeight: [0.2, 0.5],
    surfaceRoughness: [0.2, 0.5],
    plateTectonics: [0.1, 0.4],
    biomassLevel: [0.1, 0.4],
    waterLevel: [0.3, 0.6],
    salinity: [0.1, 0.4],
    volcanicActivity: [0, 0.2],
    surfaceDeposits: ["Permafrost", "Pebbles", "Rocky Terrain"]
  },
  "Temperate Highlands": {
    temperature: [270, 310],
    atmosphereStrength: [0.5, 0.9],
    cloudCount: [40, 90],
    waterHeight: [0.3, 0.6],
    surfaceRoughness: [0.4, 0.8],
    plateTectonics: [0.3, 0.7],
    biomassLevel: [0.3, 0.8],
    waterLevel: [0.3, 0.7],
    salinity: [0.2, 0.5],
    volcanicActivity: [0.1, 0.4],
    surfaceDeposits: ["Mineral-Rich Soil", "Loam"]
  },
  "Oceanic World": {
    temperature: [260, 320],
    atmosphereStrength: [0.6, 1],
    cloudCount: [60, 100],
    waterHeight: [0.9, 1],
    // Increased minimum water height
    surfaceRoughness: [0.1, 0.3],
    // Reduced surface roughness
    plateTectonics: [0.2, 0.6],
    biomassLevel: [0.4, 0.9],
    waterLevel: [0.9, 1],
    // Increased minimum water level
    salinity: [0.5, 0.9],
    volcanicActivity: [0.1, 0.5],
    surfaceDeposits: ["Deep Water", "Sedimentary Layers"]
  },
  "Tropical Jungle": {
    temperature: [290, 330],
    atmosphereStrength: [0.7, 1],
    cloudCount: [70, 100],
    waterHeight: [0.4, 0.7],
    surfaceRoughness: [0.3, 0.7],
    plateTectonics: [0.2, 0.5],
    biomassLevel: [0.7, 1],
    waterLevel: [0.5, 0.8],
    salinity: [0.2, 0.4],
    volcanicActivity: [0.1, 0.3],
    surfaceDeposits: ["Dense Vegetation", "Wet Soil"]
  },
  "Flood Basin": {
    temperature: [270, 320],
    atmosphereStrength: [0.5, 0.9],
    cloudCount: [50, 90],
    waterHeight: [0.5, 0.8],
    surfaceRoughness: [0.1, 0.3],
    plateTectonics: [0.1, 0.3],
    biomassLevel: [0.3, 0.7],
    waterLevel: [0.6, 0.9],
    salinity: [0.3, 0.6],
    volcanicActivity: [0, 0.2],
    surfaceDeposits: ["Silt", "Muddy Terrain"]
  },
  "Coral Reefs": {
    temperature: [280, 310],
    atmosphereStrength: [0.6, 0.9],
    cloudCount: [40, 80],
    waterHeight: [0.6, 0.9],
    surfaceRoughness: [0.2, 0.5],
    plateTectonics: [0.1, 0.4],
    biomassLevel: [0.6, 0.9],
    waterLevel: [0.7, 0.9],
    salinity: [0.6, 0.9],
    volcanicActivity: [0, 0.2],
    surfaceDeposits: ["Limestone", "Organic Deposits"]
  },
  "Dune Fields": {
    temperature: [270, 350],
    atmosphereStrength: [0.2, 0.6],
    cloudCount: [10, 50],
    waterHeight: [0, 0.1],
    surfaceRoughness: [0.3, 0.7],
    plateTectonics: [0, 0.3],
    biomassLevel: [0, 0.1],
    waterLevel: [0, 0.1],
    salinity: [0, 0.3],
    volcanicActivity: [0, 0.3],
    surfaceDeposits: ["Fine Sand", "Wind-Driven Erosion"]
  }
};
function Wo(e, t) {
  return !ir[e] || !ir[e][t] ? {
    temperature: [50, 400],
    atmosphereStrength: [0, 1],
    cloudCount: [0, 100],
    waterHeight: [0, 1],
    surfaceRoughness: [0, 2],
    plateTectonics: [0, 1],
    biomassLevel: [0, 1],
    waterLevel: [0, 1],
    salinity: [0, 1],
    volcanicActivity: [0, 1]
  }[t] || [0, 1] : ir[e][t];
}
function Cc() {
  return Object.keys(ir);
}
const Nc = {
  "Rocky Highlands": {
    oceanFloor: "#3D2314",
    // Dark brown
    beach: "#8D6E63",
    // Medium brown
    regular: "#A1887F",
    // Light brown
    mountain: "#E0E0E0"
    // Light gray
  },
  "Barren Wasteland": {
    oceanFloor: "#3E2723",
    // Very dark brown
    beach: "#5D4037",
    // Dark brown
    regular: "#795548",
    // Medium brown
    mountain: "#A1887F"
    // Light brown
  },
  "Arid Dunes": {
    oceanFloor: "#B59677",
    // Darker tan
    beach: "#D7CDA5",
    // Medium tan
    regular: "#E6D7B3",
    // Light tan
    mountain: "#F5EED5"
    // Very light tan
  },
  "Frigid Expanse": {
    oceanFloor: "#78909C",
    // Blue-gray
    beach: "#B0BEC5",
    // Light blue-gray
    regular: "#ECEFF1",
    // Almost white
    mountain: "#FFFFFF"
    // White
  },
  "Volcanic Terrain": {
    oceanFloor: "#1A1A1A",
    // Almost black
    beach: "#3E2723",
    // Very dark brown
    regular: "#5D4037",
    // Dark brown
    mountain: "#795548"
    // Medium brown with red tint
  },
  "Basalt Plains": {
    oceanFloor: "#212121",
    // Very dark gray
    beach: "#424242",
    // Dark gray
    regular: "#616161",
    // Medium gray
    mountain: "#9E9E9E"
    // Light gray
  },
  "Sediment Flats": {
    oceanFloor: "#6D4C41",
    // Dark brown
    beach: "#8D6E63",
    // Medium brown
    regular: "#BCAAA4",
    // Light brown
    mountain: "#D7CCC8"
    // Very light brown
  },
  "Cratered Terrain": {
    oceanFloor: "#424242",
    // Dark gray
    beach: "#616161",
    // Medium gray
    regular: "#9E9E9E",
    // Light gray
    mountain: "#E0E0E0"
    // Very light gray
  },
  "Tundra Basin": {
    oceanFloor: "#546E7A",
    // Dark blue-gray
    beach: "#78909C",
    // Medium blue-gray
    regular: "#B0BEC5",
    // Light blue-gray
    mountain: "#ECEFF1"
    // Almost white
  },
  "Temperate Highlands": {
    oceanFloor: "#2E7D32",
    // Dark green
    beach: "#43A047",
    // Medium green
    regular: "#66BB6A",
    // Light green
    mountain: "#A5D6A7"
    // Very light green
  },
  "Oceanic World": {
    oceanFloor: "#01579B",
    // Dark blue
    beach: "#0288D1",
    // Medium blue
    regular: "#29B6F6",
    // Light blue
    mountain: "#81D4FA"
    // Very light blue
  },
  "Tropical Jungle": {
    oceanFloor: "#1B5E20",
    // Dark green
    beach: "#2E7D32",
    // Medium green
    regular: "#43A047",
    // Light green
    mountain: "#66BB6A"
    // Very light green
  },
  "Flood Basin": {
    oceanFloor: "#00695C",
    // Dark teal
    beach: "#00897B",
    // Medium teal
    regular: "#26A69A",
    // Light teal
    mountain: "#80CBC4"
    // Very light teal
  },
  "Coral Reefs": {
    oceanFloor: "#0277BD",
    // Dark blue
    beach: "#039BE5",
    // Medium blue
    regular: "#29B6F6",
    // Light blue
    mountain: "#81D4FA"
    // Very light blue
  },
  "Dune Fields": {
    oceanFloor: "#BF360C",
    // Dark orange
    beach: "#E64A19",
    // Medium orange
    regular: "#FF7043",
    // Light orange
    mountain: "#FFAB91"
    // Very light orange
  }
}, kc = {
  rocky: { r: 0, g: -0.05, b: -0.05 },
  // More neutral
  sandy: { r: 0.1, g: 0.05, b: -0.1 },
  // More yellow/tan
  volcanic: { r: -0.1, g: -0.1, b: -0.1 },
  // Darker
  organic: { r: -0.1, g: 0.1, b: -0.1 },
  // More green
  dusty: { r: 0.05, g: 0, b: -0.05 },
  // More red/brown
  frozen: { r: -0.05, g: 0, b: 0.1 },
  // More blue
  muddy: { r: -0.05, g: -0.05, b: -0.1 }
  // More brown
};
function Jt(e, t) {
  const r = kc[t] || { r: 0, g: 0, b: 0 }, n = Ec(e);
  return n.r = Math.max(0, Math.min(1, n.r + r.r)), n.g = Math.max(0, Math.min(1, n.g + r.g)), n.b = Math.max(0, Math.min(1, n.b + r.b)), jc(Math.floor(n.r * 255), Math.floor(n.g * 255), Math.floor(n.b * 255));
}
function Ec(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: Number.parseInt(t[1], 16) / 255,
    g: Number.parseInt(t[2], 16) / 255,
    b: Number.parseInt(t[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}
function jc(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function zt(e) {
  return Nc[e] || {
    oceanFloor: "#3D2314",
    // Dark brown
    beach: "#8D6E63",
    // Medium brown
    regular: "#A1887F",
    // Light brown
    mountain: "#E0E0E0"
    // Light gray
  };
}
const Rc = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  
  uniform float time;
  uniform float surfaceRoughness;
  uniform float mountainHeight;
  uniform float isGaseous;
  uniform int soilType;
  uniform int soilTexture;
  uniform float landmarkPositions[30]; // Support up to 10 landmarks (x,y,z for each)
  uniform float landmarkInfluences[40]; // Support up to 10 landmarks (radius,height,roughness,type for each)
  uniform int landmarkCount;
  
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0); 
    vec4 p = permute(permute(permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fractal Brownian Motion with reduced octaves for less fuzziness
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float persistence = 0.5;
    
    for (int i = 0; i < octaves; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= persistence;
      frequency *= 2.0;
    }
    
    return value;
  }

  // Soil texture function with reduced intensity
  float getSoilTexture(vec3 pos, int textureType) {
    float detail = 0.0;
    
    // Scale and depth based on texture type
    float scale = 1.0;
    float depth = 0.05;
    
    if (textureType == 0) { // smooth
      scale = 5.0; depth = 0.01;
    } else if (textureType == 1) { // rough
      scale = 15.0; depth = 0.05;
    } else if (textureType == 2) { // cracked
      scale = 20.0; depth = 0.08;
      float crack1 = snoise(pos * scale * 2.0);
      float crack2 = snoise(pos * scale * 5.0);
      return (abs(crack1) < 0.1 ? depth * 1.5 : 0.0) + (abs(crack2) < 0.05 ? depth * 0.8 : 0.0);
    } else if (textureType == 3) { // layered
      scale = 12.0; depth = 0.04;
      float layer = snoise(pos * scale * 0.5);
      return sin(layer * 20.0) * depth * 0.8;
    } else if (textureType == 4) { // porous
      scale = 25.0; depth = 0.06;
      float pore = snoise(pos * scale * 4.0);
      return pore > 0.8 ? depth * 1.5 : 0.0;
    } else if (textureType == 5) { // grainy
      scale = 30.0; depth = 0.03;
      float grain1 = snoise(pos * scale * 8.0);
      float grain2 = snoise(pos * scale * 12.0);
      return grain1 * grain2 * depth;
    } else if (textureType == 6) { // crystalline
      scale = 18.0; depth = 0.07;
      float crystal = snoise(pos * scale * 3.0);
      return (crystal > 0.7 || crystal < -0.7) ? depth * 1.2 : 0.0;
    }
    
    // Default noise pattern
    float defaultNoise = snoise(pos * scale);
    return defaultNoise * depth * 0.5;
  }

  // Calculate landmark terrain influence
  vec2 calculateLandmarkInfluence(vec3 position) {
    float totalHeight = 0.0;
    float totalRoughness = 0.0;
    float totalWeight = 0.0;
    
    for (int i = 0; i < 10; i++) {
      if (i >= landmarkCount) break;
      
      // Get landmark position from flat array (3 floats per landmark)
      int posIndex = i * 3;
      vec3 landmarkPos = vec3(
        landmarkPositions[posIndex],
        landmarkPositions[posIndex + 1],
        landmarkPositions[posIndex + 2]
      );
      
      // Get landmark influence from flat array (4 floats per landmark)
      int infIndex = i * 4;
      float radius = landmarkInfluences[infIndex];
      float height = landmarkInfluences[infIndex + 1];
      float roughness = landmarkInfluences[infIndex + 2];
      float type = landmarkInfluences[infIndex + 3];
      
      // Calculate distance to landmark
      float distance = length(position - landmarkPos);
      
      // If within influence radius
      if (distance <= radius) {
        // Calculate weight based on distance (closer = stronger influence)
        float weight = 1.0 - (distance / radius);
        float heightInfluence = 0.0;
        
        // Different influence types have different height profiles
        if (type < 0.5) {
          // Crater: depression with raised rim
          float rimFactor = distance / radius;
          if (rimFactor > 0.8) {
            heightInfluence = height * 0.5 * (1.0 - (rimFactor - 0.8) * 5.0);
          } else {
            heightInfluence = height * (distance / radius);
          }
        } 
        else if (type < 1.5) {
          // Mountain: raised area that tapers off with distance
          heightInfluence = height * pow(1.0 - distance / radius, 2.0);
        }
        else if (type < 2.5) {
          // Valley: depression that's deeper in the center
          heightInfluence = height * pow(1.0 - distance / radius, 1.5);
        }
        else if (type < 3.5) {
          // Volcano: steep cone with central depression
          float normalizedDist = distance / radius;
          if (normalizedDist < 0.2) {
            // Central depression (caldera)
            heightInfluence = height * -0.3;
          } else {
            // Cone shape
            heightInfluence = height * pow(1.0 - normalizedDist, 1.2);
          }
        }
        else if (type < 4.5) {
          // Ice cap: gentle dome with smooth edges
          heightInfluence = height * pow(cos(3.14159 * distance / radius / 2.0), 2.0);
        }
        else if (type < 5.5) {
          // Ocean: depression with flat bottom
          heightInfluence = height * min(1.0, distance / (radius * 0.2));
        }
        else {
          // Custom or undefined: simple linear falloff
          heightInfluence = height * weight;
        }
        
        // Add weighted contributions
        totalHeight += heightInfluence * weight;
        totalRoughness += roughness * weight;
        totalWeight += weight;
      }
    }
    
    // Normalize by total weight if any landmarks had influence
    if (totalWeight > 0.0) {
      return vec2(totalHeight / totalWeight, totalRoughness / totalWeight);
    }
    
    return vec2(0.0, 0.0);
  }

  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;
    
    vec3 pos = position;
    float elevation = 0.0;
    
    if (isGaseous > 0.5) {
      // Gas giant features
      float bands = sin(pos.y * 10.0 + time * 0.1) * 0.5;
      float storms = snoise(pos * vec3(2.0, 8.0, 2.0) + time * 0.15) * 0.5;
      float cyclones = snoise(pos * vec3(4.0, 1.0, 4.0) + time * 0.05) * 0.25;
      
      elevation = mix(bands, storms, 0.5) + cyclones;
      elevation *= 0.05; // Reduced distortion for gas giants
      
      // Apply landmark influences (storms, etc.)
      vec2 landmarkEffect = calculateLandmarkInfluence(normalize(pos));
      elevation += landmarkEffect.x * 0.5; // Reduced effect for gas giants
    } else {
      // Terrestrial features - use FBM with fewer octaves for less fuzziness
      float baseNoise = fbm(pos * surfaceRoughness + time * 0.01, 5);
    
      // Apply mountain height
      baseNoise *= mountainHeight;
      
      // Apply soil texture with reduced intensity
      float textureDetail = getSoilTexture(pos, soilTexture) * 0.7;
      
      // Adjust texture based on soil type
      if (soilType == 2) { // volcanic
        textureDetail *= 1.5;
      } else if (soilType == 1) { // sandy
        textureDetail *= 0.7;
      }
      
      elevation = baseNoise - textureDetail;
      
      // Apply landmark influences
      vec2 landmarkEffect = calculateLandmarkInfluence(normalize(pos));
      elevation += landmarkEffect.x;
      
      // Add additional roughness from landmarks
      if (landmarkEffect.y > 0.0) {
        float additionalRoughness = snoise(pos * 20.0 * landmarkEffect.y) * landmarkEffect.y * 0.2;
        elevation += additionalRoughness;
      }
      
      elevation *= 0.08; // Scale for terrestrial planets
    }
    
    vElevation = elevation;
    
    // Apply displacement
    pos += normal * elevation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`, Sc = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  
  uniform vec3 oceanColor;
  uniform vec3 beachColor;
  uniform vec3 landColor;
  uniform vec3 mountainColor;
  uniform float time;
  uniform float waterLevel;
  uniform float isGaseous;
  uniform float liquidEnabled;
  uniform int soilType;
  
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0); 
    vec4 p = permute(permute(permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec3 normal = normalize(vNormal);

    // Simple ambient occlusion based on elevation
    float ao = 1.0 - abs(vElevation) * 2.0;
    ao = max(0.4, ao);
    
    // Static light direction for consistent lighting
    vec3 lightDir = normalize(vec3(0.0, 0.3, 1.0));
    
    // Basic lighting calculation - fixed intensity
    float lightFactor = 0.8;
  
    vec3 color;
  
    if (isGaseous > 0.5) {
      // Gas giant coloring
      float bands = sin(vPosition.y * 10.0 + time * 0.1) * 0.5 + 0.5;
      float storms = smoothstep(0.4, 0.6, snoise(vPosition * 2.0 + time * 0.15));
      float cyclones = smoothstep(0.3, 0.7, snoise(vPosition * vec3(4.0, 1.0, 4.0) + time * 0.05));
    
      // Use ocean and land colors for gas giants
      color = mix(oceanColor, landColor, bands);
      color = mix(color, mountainColor, storms * 0.5);
      color = mix(color, vec3(1.0), cyclones * 0.2);
    
      // Add subtle atmospheric glow
      float atmosphere = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 2.0);
      color += vec3(0.1, 0.15, 0.25) * atmosphere;
    } else {
      // Terrestrial coloring based on elevation
      float normalizedElevation = (vElevation + 0.08) / 0.16; // Normalize to 0-1 range
    
      if (liquidEnabled > 0.5 && normalizedElevation < waterLevel) {
        // Water areas
        float depth = (waterLevel - normalizedElevation) / waterLevel;
        color = mix(beachColor, oceanColor, depth * 2.0);
      
        // Add water effects
        float waterNoise = snoise(vPosition * 20.0 + time * 0.1) * 0.02;
        color += vec3(waterNoise);
      
        // Add water shine
        float fresnel = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 2.0);
        float shine = pow(fresnel, 4.0) * 0.3;
        color += vec3(shine);
      } else {
        // Land areas
        if (normalizedElevation < waterLevel + 0.05) {
          // Beach/shore
          color = beachColor;
        } else if (normalizedElevation < waterLevel + 0.3) {
          // Regular terrain
          float t = (normalizedElevation - (waterLevel + 0.05)) / 0.25;
          color = mix(beachColor, landColor, t);
        } else {
          // Mountains
          float t = (normalizedElevation - (waterLevel + 0.3)) / 0.7;
          color = mix(landColor, mountainColor, t);
        }
      
        // Add soil type variations with reduced intensity
        float soilNoise = snoise(vPosition * 10.0) * 0.05;
      
        // Different soil type effects
        if (soilType == 0) { // rocky
          color *= 0.95 + soilNoise;
        } else if (soilType == 1) { // sandy
          color = mix(color, beachColor, 0.15);
          color += vec3(soilNoise * 0.15);
        } else if (soilType == 2) { // volcanic
          color *= 0.85;
          if (soilNoise > 0.03) color += vec3(0.08, 0.0, 0.0);
        } else if (soilType == 3) { // organic
          color = mix(color, vec3(0.2, 0.5, 0.2), 0.25);
        } else if (soilType == 4) { // dusty
          color = mix(color, vec3(0.6, 0.5, 0.4), 0.25);
        } else if (soilType == 5) { // frozen
          color = mix(color, vec3(0.8, 0.9, 1.0), 0.3);
          color += vec3(soilNoise * 0.2);
        } else if (soilType == 6) { // muddy
          color = mix(color, vec3(0.3, 0.2, 0.1), 0.3);
        }
      }
    }
    
    // Apply ambient occlusion
    color *= ao;
    
    // Apply fixed light intensity
    color *= lightFactor;
    
    gl_FragColor = vec4(color, 1.0);
  }
`, Tc = `
  varying vec3 vNormal;
  varying vec2 vUv;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, Mc = `
  uniform float time;
  uniform vec3 color;
  uniform float strength;
  
  varying vec3 vNormal;
  varying vec2 vUv;
  
  void main() {
    float intensity = pow(0.7 - abs(dot(vNormal, vec3(0, 0, 1))), 1.5);
    vec3 atmosphereColor = color * intensity * strength;
    gl_FragColor = vec4(atmosphereColor, intensity * strength * 0.7);
  }
`, Ac = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normal;
    
    // Add some movement to the clouds
    vec3 pos = position;
    pos += normal * sin(pos.x * 10.0 + time * 0.5) * 0.005;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`, Pc = `
  uniform float time;
  uniform float cloudCount;
  varying vec2 vUv;
  varying vec3 vNormal;

  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    
    // Create cloud-like patterns
    float noise = rand(uv + time * 0.1) * 0.5 + 0.5;
    noise += rand(uv * 2.0 - time * 0.05) * 0.25;
    noise += rand(uv * 4.0 + time * 0.1) * 0.125;
    noise /= 1.875;
    
    // Adjust cloud coverage based on cloudCount
    float coverage = cloudCount / 100.0;
    noise = smoothstep(0.5 - coverage * 0.4, 0.6, noise);
    
    // Create holes in the clouds
    float holes = rand(uv * 8.0 - time * 0.02);
    noise *= smoothstep(0.4, 0.6, holes);
    
    // Fade out at the edges for a more natural look
    float fadeEdges = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
    noise *= fadeEdges;
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, noise * 0.5);
  }
`;
function Uo({ pointInfo: e, planetStats: t }) {
  const r = (n) => n.toFixed(3);
  return /* @__PURE__ */ o.jsx(Nn, { position: [0, 0, 0], style: { position: "absolute", right: "20px", top: "20px", pointerEvents: "none" }, children: /* @__PURE__ */ o.jsxs("div", { className: "w-64 bg-black/90 text-green-400 p-4 font-mono text-xs border border-green-500/30 rounded-md", children: [
    /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-bold mb-2 border-b border-green-500/30 pb-1", children: "SURFACE SCAN" }),
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-y-1 gap-x-2", children: [
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "COORDINATES:" }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        "X: ",
        r(e.normalizedPosition.x),
        /* @__PURE__ */ o.jsx("br", {}),
        "Y: ",
        r(e.normalizedPosition.y),
        /* @__PURE__ */ o.jsx("br", {}),
        "Z: ",
        r(e.normalizedPosition.z)
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "ELEVATION:" }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        (e.height * 100).toFixed(1),
        " units"
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "TERRAIN:" }),
      /* @__PURE__ */ o.jsx("span", { children: e.terrainType }),
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "TEMPERATURE:" }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        e.temperature.toFixed(1),
        " K",
        /* @__PURE__ */ o.jsx("br", {}),
        "(",
        (e.temperature - 273.15).toFixed(1),
        "°C)"
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "REL TO FREEZE:" }),
      /* @__PURE__ */ o.jsxs("span", { className: e.relativeToWaterTemp < 0 ? "text-blue-400" : "text-red-400", children: [
        e.relativeToWaterTemp > 0 ? "+" : "",
        e.relativeToWaterTemp.toFixed(1),
        " K"
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mt-2 pt-1 border-t border-green-500/30 text-center text-green-500/50", children: "Click elsewhere to scan another location" })
  ] }) });
}
function _c({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = fe(null), [s, a] = ye(null), { raycaster: i, camera: c, gl: l } = zo(), { planetMaterial: f, atmosphereMaterial: u, cloudsMaterial: d } = Ce(() => {
    const g = e.customColors || zt(e.biome || "Rocky Highlands"), C = new R.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        oceanColor: { value: new R.Color(g.oceanFloor || "#1E4D6B") },
        beachColor: { value: new R.Color(g.beach || "#8D6E63") },
        landColor: { value: new R.Color(g.regular || "#A1887F") },
        mountainColor: { value: new R.Color(g.mountain || "#D7CCC8") },
        waterLevel: { value: e.waterLevel || 0.65 },
        surfaceRoughness: { value: e.surfaceRoughness || 0.5 },
        mountainHeight: { value: e.mountainHeight || 0.6 },
        isGaseous: { value: e.mass > 7 || e.radius > 2.5 ? 1 : 0 },
        soilType: {
          value: ["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].indexOf(
            e.soilType || "rocky"
          )
        },
        soilTexture: {
          value: ["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].indexOf(
            e.soilTexture || "rough"
          )
        },
        liquidEnabled: { value: e.liquidEnabled !== !1 ? 1 : 0 },
        landmarkPositions: { value: new Float32Array(30) },
        // Initialize with empty arrays
        landmarkInfluences: { value: new Float32Array(40) },
        landmarkCount: { value: 0 }
      },
      vertexShader: Rc,
      fragmentShader: Sc
    }), y = new R.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new R.Color(8900331) },
        strength: { value: e.atmosphereStrength || 0.8 }
      },
      vertexShader: Tc,
      fragmentShader: Mc,
      transparent: !0,
      side: R.DoubleSide,
      depthWrite: !1
    }), w = new R.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        cloudCount: { value: e.cloudCount || 30 }
      },
      vertexShader: Ac,
      fragmentShader: Pc,
      transparent: !0,
      depthWrite: !1
    });
    return {
      planetMaterial: C,
      atmosphereMaterial: y,
      cloudsMaterial: w
    };
  }, [e]);
  Xe(() => {
    if (!e.landmarks || e.landmarks.length === 0) {
      f.uniforms.landmarkCount.value = 0;
      return;
    }
    const g = e.landmarks.slice(0, 10), C = [], y = [];
    g.forEach((w) => {
      const N = new R.Vector3(w.coordinates.x, w.coordinates.y, w.coordinates.z).normalize();
      C.push(N.x, N.y, N.z);
      let A = 1;
      switch (w.influence_type) {
        case "crater":
          A = 0;
          break;
        case "mountain":
          A = 1;
          break;
        case "valley":
          A = 2;
          break;
        case "volcano":
          A = 3;
          break;
        case "glacier":
          A = 4;
          break;
        case "basin":
          A = 5;
          break;
        default:
          A = 6;
      }
      y.push(
        w.influence_radius || 0.5,
        w.influence_strength || 0.7,
        w.influence_roughness || 0.5,
        A
      );
    }), f.uniforms.landmarkPositions.value = C, f.uniforms.landmarkInfluences.value = y, f.uniforms.landmarkCount.value = g.length;
  }, [e.landmarks, f.uniforms]);
  const p = (g) => {
    if (g.stopPropagation(), !t.current) return;
    const C = new R.Vector2(
      g.clientX / l.domElement.clientWidth * 2 - 1,
      -(g.clientY / l.domElement.clientHeight) * 2 + 1
    );
    i.setFromCamera(C, c);
    const y = i.intersectObject(t.current);
    if (y.length > 0) {
      const w = y[0].point, N = w.clone().normalize(), A = f.uniforms.surfaceRoughness.value * f.uniforms.mountainHeight.value * 0.08 * Math.sin(w.x * 10 + w.y * 10 + w.z * 10), M = f.uniforms.waterLevel.value;
      let j = "Mountain";
      A < -0.05 ? j = "Ocean Floor" : A < M ? j = "Beach" : A < M + 0.1 && (j = "Lowland");
      const _ = e.temperature, D = A * 10, k = _ - D, O = k - 273;
      a({
        position: w,
        normalizedPosition: N,
        height: A,
        terrainType: j,
        temperature: k,
        relativeToWaterTemp: O
      });
    }
  };
  Ut((g) => {
    t.current && (t.current.rotation.y += 1e-3, f.uniforms.time.value = g.clock.elapsedTime), r.current && (r.current.rotation.y += 5e-4, u.uniforms.time.value = g.clock.elapsedTime), n.current && (n.current.rotation.y += 12e-4, d.uniforms.time.value = g.clock.elapsedTime);
  });
  const b = !(e.mass > 7 || e.radius > 2.5) && e.cloudCount && e.cloudCount > 0, h = (g, C) => g > 7 || C > 2.5 ? "gaseous" : "terrestrial", x = Ce(() => {
    if (!e.landmarks || e.landmarks.length === 0) return null;
    const C = h(e.mass, e.radius) === "gaseous";
    return e.landmarks.filter((w) => {
      if (!w.category) {
        const N = ["storm", "vortex", "band", "spot", "turbulent", "cyclone", "anticyclone", "zonal_flow"];
        return C ? N.includes(w.influence_type || "") : !N.includes(w.influence_type || "");
      }
      return C ? w.category === "gaseous" : w.category === "terrestrial";
    }).map((w, N) => {
      const { x: A, y: M, z: j } = w.coordinates, _ = new R.Vector3(A, M, j).normalize().multiplyScalar(e.radius * 1.02);
      let D = "#22c55e";
      w.type.includes("Volcano") || w.type.includes("Storm") ? D = "#ef4444" : w.type.includes("Ocean") || w.type.includes("Water") ? D = "#3b82f6" : w.type.includes("Ice") || w.type.includes("Frozen") ? D = "#a5f3fc" : (w.type.includes("Sand") || w.type.includes("Desert")) && (D = "#fcd34d");
      const k = w.visual_effect && w.visual_effect !== "None";
      return /* @__PURE__ */ o.jsxs("group", { position: [_.x, _.y, _.z], children: [
        /* @__PURE__ */ o.jsxs("mesh", { children: [
          /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.03, 16, 16] }),
          /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: D })
        ] }),
        k && /* @__PURE__ */ o.jsxs("mesh", { children: [
          /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.05, 16, 16] }),
          /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: D, transparent: !0, opacity: 0.3, depthWrite: !1 })
        ] }),
        /* @__PURE__ */ o.jsx(Nn, { position: [0, 0.1, 0], center: !0, distanceFactor: 10, occlude: !0, children: /* @__PURE__ */ o.jsx("div", { className: "bg-black/80 text-green-400 px-2 py-1 text-xs font-mono rounded border border-green-500/50 whitespace-nowrap", children: w.classification_id }) })
      ] }, N);
    });
  }, [e.landmarks, e.radius, e.mass]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("group", { onClick: p, children: [
      /* @__PURE__ */ o.jsx(st, { ref: t, args: [1, 256, 256], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: f, attach: "material" }) }),
      /* @__PURE__ */ o.jsx(st, { ref: r, args: [1.1, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: u, attach: "material" }) }),
      b && /* Increased clouds resolution */
      /* @__PURE__ */ o.jsx(st, { ref: n, args: [1.02, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: d, attach: "material" }) }),
      x
    ] }),
    s && /* @__PURE__ */ o.jsx(Uo, { pointInfo: s, planetStats: e })
  ] });
}
const Jr = {
  mass: 1,
  radius: 1,
  density: 5.51,
  temperature: 288,
  surfaceRoughness: 0.5,
  terrainErosion: 0.3,
  waterLevel: 0.65,
  biomassLevel: 0.2,
  plateTectonics: 0.8,
  soilType: "rocky",
  soilTexture: "rough",
  atmosphereStrength: 0.8,
  liquidType: "water",
  salinity: 0.35,
  precipitationCompound: "water",
  biome: "Rocky Highlands",
  mountainHeight: 0.6,
  hasRings: !1,
  cloudCount: 30,
  volcanicActivity: 0.3,
  waterHeight: 0.65,
  liquidEnabled: !0,
  landmarks: [
    {
      classification_id: "LM-001",
      type: "Mountain Peak",
      visual_effect: "None",
      image_link: "",
      coordinates: { x: 0.5, y: 0.8, z: 0.3 },
      events: [],
      influence_type: "mountain",
      influence_radius: 0.5,
      influence_strength: 0.7,
      influence_roughness: 0.5,
      category: "terrestrial"
      // Add category
    }
  ]
};
function Ho(e, t) {
  return e / Math.pow(t, 3) * 5.51;
}
function dt(e, t) {
  return e > 7 || t > 2.5 ? "gaseous" : "terrestrial";
}
function Go(e) {
  return e >= 273 && e <= 373 ? { type: "water", color: "#1E4D6B" } : e >= 91 && e <= 112 ? { type: "methane", color: "#7FB3D5" } : e >= 63 && e <= 77 ? { type: "nitrogen", color: "#90EE90" } : e >= 195 && e <= 240 ? { type: "ammonia", color: "#D8BFD8" } : e >= 90 && e <= 184 ? { type: "ethane", color: "#FFD700" } : { type: "none", color: "#8B4513" };
}
function Ko(e, t) {
  const n = {
    water: [273, 373],
    methane: [91, 112],
    nitrogen: [63, 77],
    ammonia: [195, 240],
    ethane: [90, 184]
  }[t];
  return n ? e >= n[0] && e <= n[1] : !1;
}
var Ae = /* @__PURE__ */ ((e) => (e[e.OceanFloor = 0] = "OceanFloor", e[e.Beach = 1] = "Beach", e[e.Regular = 2] = "Regular", e[e.Mountain = 3] = "Mountain", e))(Ae || {});
function Ic(e) {
  const t = {
    smooth: { scale: 5, depth: 0.01, irregularity: 0.1, pattern: "noise" },
    rough: { scale: 15, depth: 0.05, irregularity: 0.7, pattern: "noise" },
    cracked: { scale: 20, depth: 0.08, irregularity: 0.6, pattern: "cracks" },
    layered: { scale: 12, depth: 0.04, irregularity: 0.3, pattern: "layers" },
    porous: { scale: 25, depth: 0.06, irregularity: 0.5, pattern: "pores" },
    grainy: { scale: 30, depth: 0.03, irregularity: 0.8, pattern: "grains" },
    crystalline: { scale: 18, depth: 0.07, irregularity: 0.4, pattern: "crystals" }
  };
  return t[e] || t.rough;
}
function Dc(e, t) {
  const r = (e + 0.15) / 0.3;
  return r < t - 0.2 ? 0 : r < t ? 1 : r < t + 0.4 ? 2 : 3;
}
function Qr(e) {
  const t = { ...Jr, ...e };
  return (e.mass !== void 0 || e.radius !== void 0) && (t.density = Ho(t.mass, t.radius)), (!t.landmarks || t.landmarks.length === 0) && (t.landmarks = cr(t)), t;
}
function cr(e) {
  const t = [], r = () => {
    const b = Math.random() * Math.PI * 2, h = Math.random() * Math.PI, x = Math.sin(h) * Math.cos(b), g = Math.sin(h) * Math.sin(b), C = Math.cos(h);
    return { x, y: g, z: C };
  }, n = () => `LM-${Math.floor(Math.random() * 900 + 100)}`, s = e.biome || "Rocky Highlands";
  let a = "Mountain Peak", i = "None", c = "mountain", l = 0.5, f = 0.7, u = 0.5;
  s.includes("Ocean") ? (a = "Oceanic Trench", i = "Bioluminescence", c = "valley", l = 0.6, f = 0.5, u = 0.2) : s.includes("Volcanic") ? (a = "Active Volcano", i = "Smoke Plume", c = "volcano", l = 0.4, f = 0.8, u = 0.7) : s.includes("Jungle") || s.includes("Tropical") ? (a = "Dense Vegetation", i = "Mist", c = "mountain", l = 0.5, f = 0.4, u = 0.3) : s.includes("Dune") || s.includes("Desert") || s.includes("Arid") ? (a = "Sand Formation", i = "Dust Storm", c = "dune", l = 0.7, f = 0.5, u = 0.2) : (s.includes("Frigid") || s.includes("Tundra")) && (a = "Ice Formation", i = "Aurora", c = "glacier", l = 0.6, f = 0.4, u = 0.1), t.push({
    classification_id: n(),
    type: a,
    visual_effect: i,
    image_link: "",
    coordinates: r(),
    events: [],
    influence_type: c,
    influence_radius: l,
    influence_strength: f,
    influence_roughness: u,
    category: "terrestrial"
  });
  const d = ["Great Storm", "Cyclonic Formation", "Atmospheric Bands", "Vortex"], p = ["Lightning", "Color Shift", "Turbulence"], v = [
    "storm",
    "vortex",
    "band",
    "spot",
    "cyclone",
    "anticyclone",
    "zonal_flow"
  ];
  return t.push({
    classification_id: n(),
    type: d[Math.floor(Math.random() * d.length)],
    visual_effect: p[Math.floor(Math.random() * p.length)],
    image_link: "",
    coordinates: r(),
    events: [],
    influence_type: v[Math.floor(Math.random() * v.length)],
    influence_radius: 0.5 + Math.random() * 0.5,
    influence_strength: 0.4 + Math.random() * 0.4,
    influence_roughness: 0.6 + Math.random() * 0.3,
    category: "gaseous"
  }), t;
}
function Oc(e, t, r) {
  if (!t.influence_radius || !t.influence_strength) return 0;
  const n = new R.Vector3(
    t.coordinates.x,
    t.coordinates.y,
    t.coordinates.z
  ).normalize(), s = e.dot(n), i = Math.acos(Math.max(-1, Math.min(1, s))) * r, c = t.influence_radius * r;
  return i <= c ? t.influence_strength * (1 - i / c) : 0;
}
function Lc(e, t, r) {
  switch (r) {
    case "crater":
      return e - t * 0.5;
    case "mountain":
      return e + t * 0.8;
    case "valley":
      return e - t * 0.6;
    case "volcano":
      return e + t * 0.9;
    case "basin":
      return e - t * 0.4;
    case "dune":
      return e + t * 0.5 * Math.sin(e * 10);
    case "glacier":
      return e + t * 0.4;
    case "storm":
    case "vortex":
    case "band":
    case "spot":
      return e + t * 0.3;
    default:
      return e;
  }
}
function oo(e, t, r) {
  let n = 0, s = 0;
  return t && t.forEach((a) => {
    if (!a.influence_radius || !a.influence_strength) return;
    const i = new R.Vector3(a.coordinates.x, a.coordinates.y, a.coordinates.z).normalize().multiplyScalar(r), c = e.distanceTo(i), l = a.influence_radius * r;
    if (c < l) {
      const f = c / l, u = a.influence_strength * (1 - f);
      let d = 0;
      switch (a.influence_type) {
        case "crater":
          d = -u * 0.05;
          break;
        case "mountain":
          d = u * 0.08;
          break;
        case "valley":
          d = -u * 0.03;
          break;
        case "volcano":
          d = u * 0.1;
          break;
        case "basin":
          d = -u * 0.04;
          break;
        case "dune":
          d = u * 0.02 * Math.sin(c * 5);
          break;
        case "glacier":
          d = u * 0.06;
          break;
        case "storm":
        case "vortex":
        case "band":
        case "spot":
          d = u * 0.03;
          break;
        default:
          d = u * 0.05;
      }
      let p = 0;
      a.influence_type === "volcano" && (p = u * 0.2), n += d, s += p;
    }
  }), {
    height: n,
    roughness: s
  };
}
function Fc({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = dt(e.mass, e.radius), s = Ce(() => {
    const a = e.customColors || zt(e.biome || "Rocky Highlands"), i = new R.Color(a.regular || "#A1887F"), c = new R.MeshStandardMaterial({
      color: i,
      roughness: 0.7,
      metalness: 0.1
    }), l = n === "terrestrial" ? new R.Color(8900331) : new R.Color(16777215), f = n === "terrestrial" ? e.atmosphereStrength ? e.atmosphereStrength * 0.4 : 0.25 : 0.15, u = new R.MeshPhongMaterial({
      color: l,
      transparent: !0,
      opacity: f,
      side: R.DoubleSide,
      depthWrite: !1
    });
    return { planetMaterial: c, atmosphereMaterial: u };
  }, [e, n]);
  return Ut(() => {
    t.current && (t.current.rotation.y += 1e-3), r.current && (r.current.rotation.y += 5e-4);
  }), /* @__PURE__ */ o.jsxs("group", { children: [
    /* @__PURE__ */ o.jsx(st, { ref: t, args: [1, 64, 64], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.planetMaterial, attach: "material" }) }),
    /* @__PURE__ */ o.jsx(st, { ref: r, args: [1.1, 32, 32], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.atmosphereMaterial, attach: "material" }) })
  ] });
}
const zc = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  
  uniform float time;
  uniform float surfaceRoughness;
  uniform float mountainHeight;
  uniform float isGaseous;
  uniform int soilType;
  uniform int soilTexture;
  uniform float landmarkPositions[30]; // Support up to 10 landmarks (x,y,z for each)
  uniform float landmarkInfluences[40]; // Support up to 10 landmarks (radius,height,roughness,type for each)
  uniform int landmarkCount;
  
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0); 
    vec4 p = permute(permute(permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fractal Brownian Motion with reduced octaves for less fuzziness
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float persistence = 0.5;
    
    for (int i = 0; i < octaves; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= persistence;
      frequency *= 2.0;
    }
    
    return value;
  }

  // Soil texture function with reduced intensity
  float getSoilTexture(vec3 pos, int textureType) {
    float detail = 0.0;
    
    // Scale and depth based on texture type
    float scale = 1.0;
    float depth = 0.05;
    
    if (textureType == 0) { // smooth
      scale = 5.0; depth = 0.01;
    } else if (textureType == 1) { // rough
      scale = 15.0; depth = 0.05;
    } else if (textureType == 2) { // cracked
      scale = 20.0; depth = 0.08;
      float crack1 = snoise(pos * scale * 2.0);
      float crack2 = snoise(pos * scale * 5.0);
      return (abs(crack1) < 0.1 ? depth * 1.5 : 0.0) + (abs(crack2) < 0.05 ? depth * 0.8 : 0.0);
    } else if (textureType == 3) { // layered
      scale = 12.0; depth = 0.04;
      float layer = snoise(pos * scale * 0.5);
      return sin(layer * 20.0) * depth * 0.8;
    } else if (textureType == 4) { // porous
      scale = 25.0; depth = 0.06;
      float pore = snoise(pos * scale * 4.0);
      return pore > 0.8 ? depth * 1.5 : 0.0;
    } else if (textureType == 5) { // grainy
      scale = 30.0; depth = 0.03;
      float grain1 = snoise(pos * scale * 8.0);
      float grain2 = snoise(pos * scale * 12.0);
      return grain1 * grain2 * depth;
    } else if (textureType == 6) { // crystalline
      scale = 18.0; depth = 0.07;
      float crystal = snoise(pos * scale * 3.0);
      return (crystal > 0.7 || crystal < -0.7) ? depth * 1.2 : 0.0;
    }
    
    // Default noise pattern
    float defaultNoise = snoise(pos * scale);
    return defaultNoise * depth * 0.5;
  }

  // Calculate landmark terrain influence
  vec2 calculateLandmarkInfluence(vec3 position) {
    float totalHeight = 0.0;
    float totalRoughness = 0.0;
    float totalWeight = 0.0;
    
    for (int i = 0; i < 10; i++) {
      if (i >= landmarkCount) break;
      
      // Get landmark position from flat array (3 floats per landmark)
      int posIndex = i * 3;
      vec3 landmarkPos = vec3(
        landmarkPositions[posIndex],
        landmarkPositions[posIndex + 1],
        landmarkPositions[posIndex + 2]
      );
      
      // Get landmark influence from flat array (4 floats per landmark)
      int infIndex = i * 4;
      float radius = landmarkInfluences[infIndex];
      float height = landmarkInfluences[infIndex + 1];
      float roughness = landmarkInfluences[infIndex + 2];
      float type = landmarkInfluences[infIndex + 3];
      
      // Calculate distance to landmark
      float distance = length(position - landmarkPos);
      
      // If within influence radius
      if (distance <= radius) {
        // Calculate weight based on distance (closer = stronger influence)
        float weight = 1.0 - (distance / radius);
        float heightInfluence = 0.0;
        
        // Different influence types have different height profiles
        if (type < 0.5) {
          // Crater: depression with raised rim
          float rimFactor = distance / radius;
          if (rimFactor > 0.8) {
            heightInfluence = height * 0.5 * (1.0 - (rimFactor - 0.8) * 5.0);
          } else {
            heightInfluence = height * (distance / radius);
          }
        } 
        else if (type < 1.5) {
          // Mountain: raised area that tapers off with distance
          heightInfluence = height * pow(1.0 - distance / radius, 2.0);
        }
        else if (type < 2.5) {
          // Valley: depression that's deeper in the center
          heightInfluence = height * pow(1.0 - distance / radius, 1.5);
        }
        else if (type < 3.5) {
          // Volcano: steep cone with central depression
          float normalizedDist = distance / radius;
          if (normalizedDist < 0.2) {
            // Central depression (caldera)
            heightInfluence = height * -0.3;
          } else {
            // Cone shape
            heightInfluence = height * pow(1.0 - normalizedDist, 1.2);
          }
        }
        else if (type < 4.5) {
          // Ice cap: gentle dome with smooth edges
          heightInfluence = height * pow(cos(3.14159 * distance / radius / 2.0), 2.0);
        }
        else if (type < 5.5) {
          // Ocean: depression with flat bottom
          heightInfluence = height * min(1.0, distance / (radius * 0.2));
        }
        else {
          // Custom or undefined: simple linear falloff
          heightInfluence = height * weight;
        }
        
        // Add weighted contributions
        totalHeight += heightInfluence * weight;
        totalRoughness += roughness * weight;
        totalWeight += weight;
      }
    }
    
    // Normalize by total weight if any landmarks had influence
    if (totalWeight > 0.0) {
      return vec2(totalHeight / totalWeight, totalRoughness / totalWeight);
    }
    
    return vec2(0.0, 0.0);
  }

  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;
    
    vec3 pos = position;
    float elevation = 0.0;
    
    if (isGaseous > 0.5) {
      // Gas giant features
      float bands = sin(pos.y * 10.0 + time * 0.1) * 0.5;
      float storms = snoise(pos * vec3(2.0, 8.0, 2.0) + time * 0.15) * 0.5;
      float cyclones = snoise(pos * vec3(4.0, 1.0, 4.0) + time * 0.05) * 0.25;
      
      elevation = mix(bands, storms, 0.5) + cyclones;
      elevation *= 0.05; // Reduced distortion for gas giants
      
      // Apply landmark influences (storms, etc.)
      vec2 landmarkEffect = calculateLandmarkInfluence(normalize(pos));
      elevation += landmarkEffect.x * 0.5; // Reduced effect for gas giants
    } else {
      // Terrestrial features - use FBM with fewer octaves for less fuzziness
      float baseNoise = fbm(pos * surfaceRoughness + time * 0.01, 5);
    
      // Apply mountain height
      baseNoise *= mountainHeight;
      
      // Apply soil texture with reduced intensity
      float textureDetail = getSoilTexture(pos, soilTexture) * 0.7;
      
      // Adjust texture based on soil type
      if (soilType == 2) { // volcanic
        textureDetail *= 1.5;
      } else if (soilType == 1) { // sandy
        textureDetail *= 0.7;
      }
      
      elevation = baseNoise - textureDetail;
      
      // Apply landmark influences
      vec2 landmarkEffect = calculateLandmarkInfluence(normalize(pos));
      elevation += landmarkEffect.x;
      
      // Add additional roughness from landmarks
      if (landmarkEffect.y > 0.0) {
        float additionalRoughness = snoise(pos * 20.0 * landmarkEffect.y) * landmarkEffect.y * 0.2;
        elevation += additionalRoughness;
      }
      
      elevation *= 0.08; // Scale for terrestrial planets
    }
    
    vElevation = elevation;
    
    // Apply displacement
    pos += normal * elevation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`, Vc = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  
  uniform vec3 oceanColor;
  uniform vec3 beachColor;
  uniform vec3 landColor;
  uniform vec3 mountainColor;
  uniform float time;
  uniform float waterLevel;
  uniform float isGaseous;
  uniform float liquidEnabled;
  uniform int soilType;
  uniform int soilTexture;
  uniform float surfaceRoughness;
  uniform float mountainHeight;
  
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0); 
    vec4 p = permute(permute(permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fractal Brownian Motion
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float persistence = 0.5;
    
    for (int i = 0; i < octaves; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= persistence;
      frequency *= 2.0;
    }
    
    return value;
  }

  // Voronoi noise for cell-like patterns
  float voronoi(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    
    float minDist = 1.0;
    
    for(int z = -1; z <= 1; z++) {
      for(int y = -1; y <= 1; y++) {
        for(int x = -1; x <= 1; x++) {
          vec3 cell = vec3(float(x), float(y), float(z));
          vec3 cellPosition = cell + snoise(i + cell) * 0.5;
          float dist = length(cellPosition - f);
          minDist = min(minDist, dist);
        }
      }
    }
    
    return minDist;
  }

  // Function to create stylized borders
  float borderEffect(vec3 position, float scale, float width) {
    float cell = voronoi(position * scale);
    return smoothstep(width - 0.05, width + 0.05, cell);
  }

  // Soil texture function with reduced intensity
  float getSoilTexture(vec3 pos, int textureType) {
    float detail = 0.0;
    
    // Scale and depth based on texture type
    float scale = 1.0;
    float depth = 0.05;
    
    if (textureType == 0) { // smooth
      scale = 5.0; depth = 0.01;
    } else if (textureType == 1) { // rough
      scale = 15.0; depth = 0.05;
    } else if (textureType == 2) { // cracked
      scale = 20.0; depth = 0.08;
      float crack1 = snoise(pos * scale * 2.0);
      float crack2 = snoise(pos * scale * 5.0);
      return (abs(crack1) < 0.1 ? depth * 1.5 : 0.0) + (abs(crack2) < 0.05 ? depth * 0.8 : 0.0);
    } else if (textureType == 3) { // layered
      scale = 12.0; depth = 0.04;
      float layer = snoise(pos * scale * 0.5);
      return sin(layer * 20.0) * depth * 0.8;
    } else if (textureType == 4) { // porous
      scale = 25.0; depth = 0.06;
      float pore = snoise(pos * scale * 4.0);
      return pore > 0.8 ? depth * 1.5 : 0.0;
    } else if (textureType == 5) { // grainy
      scale = 30.0; depth = 0.03;
      float grain1 = snoise(pos * scale * 8.0);
      float grain2 = snoise(pos * scale * 12.0);
      return grain1 * grain2 * depth;
    } else if (textureType == 6) { // crystalline
      scale = 18.0; depth = 0.07;
      float crystal = snoise(pos * scale * 3.0);
      return (crystal > 0.7 || crystal < -0.7) ? depth * 1.2 : 0.0;
    }
    
    // Default noise pattern
    float defaultNoise = snoise(pos * scale);
    return defaultNoise * depth * 0.5;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    float normalizedElevation = (vElevation + 0.08) / 0.16; // Normalize to 0-1 range
    
    // Create noise patterns at different scales for layering
    float largeNoise = snoise(vPosition * 2.0 + time * 0.02);
    float mediumNoise = snoise(vPosition * 5.0 + time * 0.05);
    float smallNoise = snoise(vPosition * 10.0);
    
    // Create cell patterns for terrain boundaries
    float cellBorders = borderEffect(vPosition, 3.0, 0.1);
    
    // Lighting setup - multiple light sources for better hemisphere coverage
    vec3 lightDir1 = normalize(vec3(0.5, 1.0, 0.5));
    vec3 lightDir2 = normalize(vec3(-0.5, -0.8, 0.2));
    
    // Calculate diffuse lighting from both light sources
    float diffuse1 = max(0.3, dot(normal, lightDir1));
    float diffuse2 = max(0.1, dot(normal, lightDir2) * 0.5); // Secondary light is dimmer
    
    // Combine lighting with ambient term
    float lightFactor = diffuse1 + diffuse2 + 0.2; // 0.2 is ambient light
    
    // Simple ambient occlusion based on elevation
    float ao = 1.0 - abs(vElevation) * 2.0;
    ao = max(0.4, ao);
    
    // Stylized topographical coloring
    vec3 color;
    
    if (isGaseous > 0.5) {
      // Gas giant stylized coloring - inspired by the first reference image
      float bands = sin(vPosition.y * 8.0) * 0.5 + 0.5;
      
      // Create swirling patterns
      float swirl = snoise(vec3(
        vPosition.x + sin(vPosition.y * 4.0 + time * 0.1) * 0.2,
        vPosition.y + cos(vPosition.x * 4.0 + time * 0.05) * 0.2,
        vPosition.z + time * 0.02
      ));
      
      // Base color from bands
      color = mix(
        vec3(0.7, 0.3, 0.1), // Orange-red
        vec3(0.9, 0.7, 0.3), // Yellow-orange
        bands
      );
      
      // Add swirl patterns
      color = mix(
        color,
        vec3(0.2, 0.1, 0.5), // Deep purple
        smoothstep(0.3, 0.7, swirl)
      );
      
      // Add storm spots
      float spots = smoothstep(0.7, 0.9, largeNoise);
      color = mix(color, vec3(0.9, 0.9, 1.0), spots * 0.5);
      
      // Add depth with noise-based shadows
      float depthNoise = snoise(vPosition * 3.0) * 0.3;
      color = mix(color, color * 0.7, depthNoise);
      
      // Add subtle atmospheric glow
      float atmosphere = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 2.0);
      color += vec3(0.1, 0.15, 0.25) * atmosphere;
      
    } else {
      // Terrestrial planet stylized coloring - inspired by both reference images
      
      // Use terrain height to determine land vs water
      float heightWithNoise = normalizedElevation + (largeNoise * 0.2 - 0.1) * surfaceRoughness;
      
      if (liquidEnabled > 0.5 && heightWithNoise < waterLevel) {
        // Ocean areas - teal/turquoise like in the first reference image
        
        // Create depth variation
        float depth = (waterLevel - heightWithNoise) / waterLevel;
        depth = pow(depth, 0.5); // Adjust depth curve
        
        // Shallow water is more teal, deep water is darker blue (like second reference)
        vec3 shallowColor = vec3(0.2, 0.7, 0.6); // Teal color for shallow water
        vec3 deepColor = vec3(0.0, 0.4, 0.5);    // Darker blue for deep water
        
        // Mix colors based on depth
        color = mix(shallowColor, deepColor, depth);
        
        // Add wave patterns
        float waves = sin(vPosition.x * 50.0 + vPosition.z * 50.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.3, waves * 0.1);
        
        // Add current patterns
        float currents = snoise(vPosition * 8.0 + time * 0.1) * 0.5 + 0.5;
        color = mix(color, oceanColor * 0.9, currents * 0.1);
        
        // Add coastal patterns
        if (heightWithNoise > waterLevel - 0.05) {
          float coastalPattern = sin(vPosition.x * 80.0 + vPosition.z * 80.0) * 0.5 + 0.5;
          color = mix(color, beachColor, coastalPattern * 0.3);
        }
        
        // Add depth with bumps for waves
        float bumpDepth = snoise(vPosition * 20.0 + time * 0.2) * 0.05;
        color = mix(color, color * 1.2, bumpDepth);
        
        // Add water shine
        float fresnel = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 2.0);
        float shine = pow(fresnel, 4.0) * 0.3;
        color += vec3(shine);
        
      } else {
        // Land areas with distinct terrain types - inspired by both reference images
        
        // Create terrain type based on noise and elevation
        float terrainType = largeNoise * 0.4 + heightWithNoise * 0.6;
        
        // Apply surface roughness to terrain transitions
        terrainType += mediumNoise * surfaceRoughness * 0.2;
        
        // Create distinct terrain regions with sharp boundaries like in first reference
        if (terrainType < 0.3) {
          // Lowlands - use beach color
          color = beachColor;
          
          // Add texture variation
          color *= 0.8 + smallNoise * 0.4;
          
        } else if (terrainType < 0.6) {
          // Mid-elevation - use land color
          color = landColor;
          
          // Add texture variation
          color *= 0.8 + mediumNoise * 0.4;
          
        } else {
          // Highlands - use mountain color
          color = mountainColor;
          
          // Add texture variation based on mountain height
          float mountainPattern = snoise(vPosition * 15.0) * mountainHeight;
          color = mix(color, color * 1.3, mountainPattern);
        }
        
        // Add terrain borders - purple borders like in first reference
        float borderIntensity = 1.0 - abs(terrainType - 0.3) * 20.0;
        borderIntensity = max(0.0, borderIntensity);
        borderIntensity += 1.0 - abs(terrainType - 0.6) * 20.0;
        borderIntensity = clamp(borderIntensity, 0.0, 1.0);
        
        // Purple borders like in first reference
        vec3 borderColor = vec3(0.5, 0.0, 0.8);
        color = mix(color, borderColor, borderIntensity * 0.7);
        
        // Add cell pattern borders for terrain division
        color = mix(color, borderColor, cellBorders * 0.5);
        
        // Add soil type variations
        if (soilType == 0) { // rocky
          color = mix(color, vec3(0.6, 0.6, 0.6), 0.2);
        } else if (soilType == 1) { // sandy
          color = mix(color, vec3(0.9, 0.8, 0.5), 0.2);
        } else if (soilType == 2) { // volcanic
          color = mix(color, vec3(0.5, 0.2, 0.1), 0.2);
        } else if (soilType == 3) { // organic
          color = mix(color, vec3(0.3, 0.5, 0.2), 0.2);
        } else if (soilType == 4) { // dusty
          color = mix(color, vec3(0.8, 0.7, 0.6), 0.2);
        } else if (soilType == 5) { // frozen
          color = mix(color, vec3(0.8, 0.9, 1.0), 0.2);
        } else if (soilType == 6) { // muddy
          color = mix(color, vec3(0.4, 0.3, 0.2), 0.2);
        }
        
        // Add soil texture details
        float textureDetail = getSoilTexture(vPosition, soilTexture) * 0.7;
        color = mix(color, color * 0.8, textureDetail);
      }
    }
    
    // Add ambient occlusion for depth
    color *= ao;
    
    // Add atmospheric rim lighting like in second reference
    float rimLight = 1.0 - max(0.0, dot(normal, normalize(vec3(0.0, 0.0, 1.0))));
    rimLight = pow(rimLight, 3.0);
    color = mix(color, vec3(0.6, 0.8, 1.0), rimLight * 0.3);
    
    // Apply lighting
    color *= lightFactor;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;
function Bc({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = Ce(() => {
    const s = e.customColors || zt(e.biome || "Rocky Highlands"), a = new R.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        oceanColor: { value: new R.Color(s.oceanFloor || "#1E4D6B") },
        beachColor: { value: new R.Color(s.beach || "#8D6E63") },
        landColor: { value: new R.Color(s.regular || "#A1887F") },
        mountainColor: { value: new R.Color(s.mountain || "#D7CCC8") },
        waterLevel: { value: e.waterLevel || 0.65 },
        surfaceRoughness: { value: e.surfaceRoughness || 0.5 },
        mountainHeight: { value: e.mountainHeight || 0.6 },
        isGaseous: { value: e.mass > 7 || e.radius > 2.5 ? 1 : 0 },
        soilType: {
          value: ["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].indexOf(
            e.soilType || "rocky"
          )
        },
        soilTexture: {
          value: ["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].indexOf(
            e.soilTexture || "rough"
          )
        },
        liquidEnabled: { value: e.liquidEnabled !== !1 ? 1 : 0 },
        landmarkPositions: { value: new Float32Array(30) },
        // Initialize with empty arrays
        landmarkInfluences: { value: new Float32Array(40) },
        landmarkCount: { value: 0 }
      },
      vertexShader: zc,
      fragmentShader: Vc
    });
    return r.current = a, a;
  }, []);
  return Xe(() => {
    if (!r.current || !e.landmarks || e.landmarks.length === 0) {
      r.current && (r.current.uniforms.landmarkCount.value = 0);
      return;
    }
    const s = e.landmarks.slice(0, 10), a = [], i = [];
    s.forEach((c) => {
      const l = new R.Vector3(c.coordinates.x, c.coordinates.y, c.coordinates.z).normalize();
      a.push(l.x, l.y, l.z);
      let f = 1;
      switch (c.influence_type) {
        case "crater":
          f = 0;
          break;
        case "mountain":
          f = 1;
          break;
        case "valley":
          f = 2;
          break;
        case "volcano":
          f = 3;
          break;
        case "glacier":
          f = 4;
          break;
        case "basin":
          f = 5;
          break;
        default:
          f = 6;
      }
      i.push(
        c.influence_radius || 0.5,
        c.influence_strength || 0.7,
        c.influence_roughness || 0.5,
        f
      );
    }), r.current.uniforms.landmarkPositions.value = new Float32Array(a), r.current.uniforms.landmarkInfluences.value = new Float32Array(i), r.current.uniforms.landmarkCount.value = s.length;
  }, [e.landmarks]), Xe(() => {
    if (!r.current) return;
    const s = e.customColors || zt(e.biome || "Rocky Highlands");
    r.current.uniforms.oceanColor.value = new R.Color(s.oceanFloor || "#1E4D6B"), r.current.uniforms.beachColor.value = new R.Color(s.beach || "#8D6E63"), r.current.uniforms.landColor.value = new R.Color(s.regular || "#A1887F"), r.current.uniforms.mountainColor.value = new R.Color(s.mountain || "#D7CCC8"), r.current.uniforms.waterLevel.value = e.waterLevel || 0.65, r.current.uniforms.surfaceRoughness.value = e.surfaceRoughness || 0.5, r.current.uniforms.mountainHeight.value = e.mountainHeight || 0.6, r.current.uniforms.isGaseous.value = e.mass > 7 || e.radius > 2.5 ? 1 : 0, r.current.uniforms.soilType.value = [
      "rocky",
      "sandy",
      "volcanic",
      "organic",
      "dusty",
      "frozen",
      "muddy"
    ].indexOf(e.soilType || "rocky"), r.current.uniforms.soilTexture.value = [
      "smooth",
      "rough",
      "cracked",
      "layered",
      "porous",
      "grainy",
      "crystalline"
    ].indexOf(e.soilTexture || "rough"), r.current.uniforms.liquidEnabled.value = e.liquidEnabled !== !1 ? 1 : 0;
  }, [e]), Ut((s) => {
    t.current && r.current && (t.current.rotation.y += 1e-3, r.current.uniforms.time.value = s.clock.elapsedTime);
  }), /* @__PURE__ */ o.jsx(st, { ref: t, args: [1, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: n, attach: "material" }) });
}
function $c({ planetStats: e }) {
  const t = fe(null), n = !(e.mass > 7 || e.radius > 2.5) && e.cloudCount && e.cloudCount !== 0, s = fe(
    new R.MeshPhysicalMaterial({
      color: new R.Color(16777215),
      transparent: !0,
      opacity: 0.7,
      roughness: 1,
      metalness: 0,
      clearcoat: 0.1,
      clearcoatRoughness: 0.4,
      alphaMap: new R.TextureLoader().load("/assets/clouds-alpha.png"),
      side: R.DoubleSide
    })
  );
  return Ut(() => {
    n && t.current && (t.current.rotation.y += 5e-4);
  }), n ? /* @__PURE__ */ o.jsx(st, { ref: t, args: [1.02, 64, 64], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.current, attach: "material" }) }) : null;
}
const ue = new Uint8Array(512), so = new Uint8Array(256);
function Wc() {
  for (let e = 0; e < 256; e++)
    so[e] = Math.floor(Math.random() * 256);
  for (let e = 0; e < 512; e++)
    ue[e] = so[e & 255];
}
Wc();
function Lr(e) {
  return e * e * e * (e * (e * 6 - 15) + 10);
}
function tt(e, t, r) {
  return (1 - r) * e + r * t;
}
function We(e, t, r, n) {
  const s = e & 15, a = s < 8 ? t : r, i = s < 4 ? r : s === 12 || s === 14 ? t : n;
  return ((s & 1) === 0 ? a : -a) + ((s & 2) === 0 ? i : -i);
}
function oe(e, t, r) {
  const n = Math.floor(e) & 255, s = Math.floor(t) & 255, a = Math.floor(r) & 255;
  e -= Math.floor(e), t -= Math.floor(t), r -= Math.floor(r);
  const i = Lr(e), c = Lr(t), l = Lr(r), f = ue[n] + s, u = ue[f] + a, d = ue[f + 1] + a, p = ue[n + 1] + s, v = ue[p] + a, b = ue[p + 1] + a;
  return tt(
    tt(
      tt(We(ue[u], e, t, r), We(ue[v], e - 1, t, r), i),
      tt(We(ue[d], e, t - 1, r), We(ue[b], e - 1, t - 1, r), i),
      c
    ),
    tt(
      tt(We(ue[u + 1], e, t, r - 1), We(ue[v + 1], e - 1, t, r - 1), i),
      tt(We(ue[d + 1], e, t - 1, r - 1), We(ue[b + 1], e - 1, t - 1, r - 1), i),
      c
    ),
    l
  );
}
function Uc(e, t) {
  const r = /* @__PURE__ */ new Map(), n = 12, a = new R.IcosahedronGeometry(1, n).getAttribute("position");
  for (let i = 0; i < a.count; i++) {
    const c = a.getX(i), l = a.getY(i), f = a.getZ(i), u = new R.Vector3(c, l, f).normalize();
    let d = 0;
    if (t === "terrestrial") {
      const v = (e.surfaceRoughness || 0.5) * 1.2;
      let b = 1, h = 1, x = 0.5;
      for (let y = 0; y < 7; y++) {
        const w = oe(
          u.x * b * v,
          u.y * b * v,
          u.z * b * v
        );
        d += w * h, h *= x, b *= 2;
      }
      d *= e.mountainHeight || 0.5, e.terrainErosion && (d *= 1 - e.terrainErosion * 0.3);
      const g = u.clone().multiplyScalar(e.radius), C = oo(g, e.landmarks, e.radius);
      if (d += C.height, C.roughness > 0) {
        const y = oe(
          u.x * 20 * C.roughness,
          u.y * 20 * C.roughness,
          u.z * 20 * C.roughness
        ) * C.roughness * 0.2;
        d += y;
      }
    } else {
      const v = e.surfaceRoughness || 0.5;
      if (d = oe(u.x * 2 * v, u.y * 2 * v, u.z * 2 * v) * 0.1, e.landmarks && e.landmarks.length > 0) {
        const b = u.clone().multiplyScalar(e.radius), h = oo(b, e.landmarks, e.radius);
        d += h.height * 0.5;
      }
    }
    const p = `${u.x.toFixed(5)},${u.y.toFixed(5)},${u.z.toFixed(5)}`;
    r.set(p, d);
  }
  return {
    getHeight: (i) => {
      const c = `${i.x.toFixed(5)},${i.y.toFixed(5)},${i.z.toFixed(5)}`, l = r.get(c);
      if (l !== void 0) return l;
      let f = Number.POSITIVE_INFINITY, u = 0;
      return r.forEach((d, p) => {
        const [v, b, h] = p.split(",").map(Number.parseFloat), x = new R.Vector3(v, b, h), g = i.distanceTo(x);
        g < f && (f = g, u = d);
      }), u;
    }
  };
}
const Hc = Ct(function({ planetStats: t }, r) {
  const n = dt(t.mass, t.radius), s = Ce(() => {
    const l = t.customColors || zt(t.biome || "Rocky Highlands");
    return t.soilType && n === "terrestrial" ? {
      oceanFloor: Jt(l.oceanFloor || "#5D4037", t.soilType),
      beach: Jt(l.beach || "#8D6E63", t.soilType),
      regular: Jt(l.regular || "#A1887F", t.soilType),
      mountain: Jt(l.mountain || "#D7CCC8", t.soilType)
    } : l;
  }, [t.biome, t.customColors, t.soilType, n]), a = Ce(() => Uc(t, n), [t, n]), { surfaceGeometry: i, surfaceMaterial: c } = Ce(() => {
    const l = new R.IcosahedronGeometry(t.radius, 11), f = l.getAttribute("position"), u = [], d = [], p = [], v = Ic(t.soilTexture || "rough");
    for (let x = 0; x < f.count; x++) {
      const g = f.getX(x), C = f.getY(x), y = f.getZ(x), w = new R.Vector3(g, C, y), N = w.clone().normalize();
      let A = a.getHeight(N);
      const M = 0.5 + Math.atan2(N.z, N.x) / (2 * Math.PI), j = 0.5 - Math.asin(N.y) / Math.PI;
      p.push(M, j), t.landmarks && t.landmarks.length > 0 && t.landmarks.forEach((P) => {
        const V = Oc(N, P, t.radius);
        V > 0 && (A = Lc(A, V, P.influence_type || "mountain"));
      });
      const _ = n === "terrestrial" ? 0.08 : 0.05, D = t.surfaceRoughness || 0.5, k = A * _ * D * 1.5;
      let T = 0;
      if (n === "terrestrial" && k > 0.05) {
        const { scale: P, depth: V, pattern: S } = v;
        switch (S) {
          case "cracks":
            T = Gc(N, P, V);
            break;
          case "layers":
            T = Kc(N, P, V);
            break;
          case "crystals":
            T = qc(N, P, V);
            break;
          case "pores":
            T = Yc(N, P, V);
            break;
          case "grains":
            T = Xc(N, P, V);
            break;
          default:
            T = Zc(N, P, V, v.irregularity);
        }
        t.soilType === "volcanic" ? T *= 1.5 : t.soilType === "sandy" && (T *= 0.7);
      }
      w.add(N.clone().multiplyScalar(k - T)), u.push(w);
      const O = t.waterLevel || 0, F = Dc(k, O), z = Jc(F, s, t, N, v);
      d.push(z);
    }
    for (let x = 0; x < f.count; x++) {
      const g = u[x];
      f.setXYZ(x, g.x, g.y, g.z);
    }
    f.needsUpdate = !0, l.computeVertexNormals();
    const b = new R.Float32BufferAttribute(new Float32Array(f.count * 3), 3);
    for (let x = 0; x < d.length; x++)
      b.setXYZ(x, d[x].r, d[x].g, d[x].b);
    l.setAttribute("color", b), l.setAttribute("uv", new R.Float32BufferAttribute(new Float32Array(p), 2));
    let h;
    return n === "terrestrial" ? h = new R.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.7,
      metalness: 0.1,
      flatShading: !1
    }) : h = Qc(t), { surfaceGeometry: l, surfaceMaterial: h };
  }, [t, n, s, a]);
  return /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: i, material: c });
});
function Gc(e, t, r) {
  const n = oe(e.x * t * 2, e.y * t * 2, e.z * t * 2), s = oe(e.x * t * 5, e.y * t * 5, e.z * t * 5);
  return (Math.abs(n) < 0.1 ? r * 1.5 : 0) + (Math.abs(s) < 0.05 ? r * 0.8 : 0);
}
function Kc(e, t, r) {
  const n = oe(e.x * t * 0.5, e.y * t * 0.5, e.z * t * 0.5);
  return Math.sin(n * 20) * r * 0.8;
}
function qc(e, t, r) {
  const n = oe(e.x * t * 3, e.y * t * 3, e.z * t * 3);
  return n > 0.7 || n < -0.7 ? r * 1.2 : 0;
}
function Yc(e, t, r) {
  return oe(e.x * t * 4, e.y * t * 4, e.z * t * 4) > 0.8 ? r * 1.5 : 0;
}
function Xc(e, t, r) {
  const n = oe(e.x * t * 8, e.y * t * 8, e.z * t * 8), s = oe(e.x * t * 12, e.y * t * 12, e.z * t * 12);
  return n * s * r;
}
function Zc(e, t, r, n) {
  return oe(e.x * t, e.y * t, e.z * t) * r * n;
}
function Jc(e, t, r, n, s) {
  const a = {
    [Ae.OceanFloor]: t.oceanFloor,
    [Ae.Beach]: t.beach,
    [Ae.Regular]: t.regular,
    [Ae.Mountain]: t.mountain
  }, i = new R.Color(a[e] || t.regular);
  let c = i;
  if (r.soilType) {
    const f = {
      rocky: new R.Color(11770240),
      sandy: new R.Color(13808780),
      volcanic: new R.Color(3815994),
      organic: new R.Color(5082199),
      dusty: new R.Color(10506797),
      frozen: new R.Color(14745599),
      muddy: new R.Color(6373670)
    }, u = f[r.soilType] || f.rocky, d = {
      [Ae.OceanFloor]: 0.3,
      [Ae.Beach]: 0.6,
      [Ae.Regular]: 0.7,
      [Ae.Mountain]: 0.8
    };
    if (c = i.clone().lerp(u, d[e] || 0.5), e === Ae.Mountain && (oe(n.x * 50, n.y * 50, n.z * 50) * 0.1 < 0 ? c.multiplyScalar(0.9) : c.multiplyScalar(1.1), r.soilTexture)) {
      const v = oe(
        n.x * s.scale * 2,
        n.y * s.scale * 2,
        n.z * s.scale * 2
      );
      r.soilTexture === "crystalline" && v > 0.7 ? c.offsetHSL(0, 0, 0.1) : r.soilTexture === "cracked" && Math.abs(v) < 0.05 ? c.multiplyScalar(0.8) : r.soilTexture === "layered" && Math.sin(v * 20) > 0.8 && c.offsetHSL(0, 0, 0.05);
    }
  }
  const l = (Math.random() - 0.5) * 0.1;
  return c.r = Math.max(0, Math.min(1, c.r + l)), c.g = Math.max(0, Math.min(1, c.g + l)), c.b = Math.max(0, Math.min(1, c.b + l)), c;
}
function Qc(e) {
  const t = `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `, r = `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    uniform float roughness;
    varying vec2 vUv;
    varying vec3 vNormal;
    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    void main() {
      float bands = sin(vUv.y * 20.0) * 0.5 + 0.5;
      vec3 color = mix(color1, color2, bands);
      color = mix(color, color3, smoothstep(0.4, 0.6, abs(vNormal.y)));
      float noiseValue = noise(vUv * roughness * 10.0);
      color = mix(color, vec3(noiseValue), roughness * 0.2);
      gl_FragColor = vec4(color, 1.0);
    }
  `;
  let n, s, a;
  return e.temperature < 100 ? (n = new R.Color(4620980), s = new R.Color(2003199), a = new R.Color(49151)) : e.temperature > 300 ? (n = new R.Color(13458524), s = new R.Color(15761536), a = new R.Color(16416882)) : (n = new R.Color(10145074), s = new R.Color(7048739), a = new R.Color(5597999)), new R.ShaderMaterial({
    uniforms: {
      color1: { value: n },
      color2: { value: s },
      color3: { value: a },
      roughness: { value: e.surfaceRoughness || 0.5 }
    },
    vertexShader: t,
    fragmentShader: r
  });
}
const el = Ct(function({ planetStats: t }, r) {
  const n = Go(t.temperature), s = Ko(t.temperature, t.liquidType || n.type), { liquidGeometry: a, liquidMaterial: i } = Ce(() => {
    const c = t.liquidEnabled !== !1 && (t.waterLevel || 0) > 0 && s, l = {
      water: new R.Color(1996980),
      methane: new R.Color(8369109),
      nitrogen: new R.Color(9498256),
      ammonia: new R.Color(14204888),
      ethane: new R.Color(16766720)
    }, f = l[t.liquidType] || l.water;
    t.liquidType === "water" && (t.temperature < 283 ? f.lerp(new R.Color(18347), 0.3) : t.temperature > 350 && f.lerp(new R.Color(25600), 0.2), t.salinity && f.lerp(new R.Color(18347), t.salinity * 0.5));
    const u = new R.MeshPhysicalMaterial({
      color: f,
      transparent: !0,
      opacity: c ? 0.8 : 0,
      roughness: 0.1,
      metalness: 0.2,
      envMapIntensity: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
      ior: 1.4,
      transmission: 0.95
    }), d = c ? Math.max(t.waterLevel || 0, 0.5) : t.waterLevel || 0, p = t.radius * (1 + d * 0.02), v = new R.IcosahedronGeometry(p, 9), b = v.getAttribute("position");
    for (let h = 0; h < b.count; h++) {
      const x = b.getX(h), g = b.getY(h), C = b.getZ(h), y = new R.Vector3(x, g, C), w = y.clone().normalize(), N = oe(w.x * 10, w.y * 10, w.z * 10) * 5e-3;
      y.add(w.clone().multiplyScalar(N)), b.setXYZ(h, y.x, y.y, y.z);
    }
    return b.needsUpdate = !0, v.computeVertexNormals(), { liquidGeometry: v, liquidMaterial: u };
  }, [t, s]);
  return !a || !i ? null : /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: a, material: i });
}), tl = Ct(function({ planetStats: t }, r) {
  const n = dt(t.mass, t.radius), { atmosphereGeometry: s, atmosphereMaterial: a } = Ce(() => {
    const i = new R.IcosahedronGeometry(t.radius * 1.1, 9);
    let c;
    if (n === "terrestrial") {
      const l = {
        water: new R.Color(8900331),
        co2: new R.Color(13882323),
        methane: new R.Color(10145074),
        snow: new R.Color(15792383),
        none: new R.Color(11393254)
      }, f = l[t.precipitationCompound] || l.none;
      t.temperature < 200 ? f.lerp(new R.Color(4620980), 0.3) : t.temperature > 350 && f.lerp(new R.Color(16752762), 0.3);
      const u = t.atmosphereStrength ? t.atmosphereStrength * 0.4 : 0.25;
      c = new R.MeshPhongMaterial({
        color: f,
        transparent: !0,
        opacity: u,
        side: R.DoubleSide,
        shininess: 30,
        depthWrite: !1
      });
    } else
      c = new R.MeshPhongMaterial({
        color: 16777215,
        transparent: !0,
        opacity: 0.15,
        side: R.DoubleSide,
        depthWrite: !1
      });
    return { atmosphereGeometry: i, atmosphereMaterial: c };
  }, [t, n]);
  return /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: s, material: a });
}), rl = Ct(function({ planetStats: t }, r) {
  const n = Ce(() => {
    if (!t.cloudCount || t.cloudCount <= 0)
      return [];
    const s = [], a = Math.min(t.cloudCount, 100);
    for (let i = 0; i < a; i++) {
      const c = Math.random() * Math.PI * 2, l = Math.random() * Math.PI, f = Math.sin(l) * Math.cos(c), u = Math.sin(l) * Math.sin(c), d = Math.cos(l), p = new R.Vector3(f, u, d).normalize(), v = 0.05 + Math.random() * 0.15, b = `cloud-${i}`;
      s.push({
        key: b,
        position: p.multiplyScalar(t.radius * 1.02),
        size: v
      });
    }
    return s;
  }, [t.cloudCount, t.radius]);
  return /* @__PURE__ */ o.jsx("group", { ref: r, children: n.map((s) => /* @__PURE__ */ o.jsxs("mesh", { position: [s.position.x, s.position.y, s.position.z], children: [
    /* @__PURE__ */ o.jsx("planeGeometry", { args: [s.size, s.size] }),
    /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: "#ffffff", transparent: !0, opacity: 0.6, side: R.DoubleSide }),
    /* @__PURE__ */ o.jsx("group", { rotation: [0, Math.PI, 0] })
  ] }, s.key)) });
});
function nl(e, t) {
  return e / (1.3333333333333333 * Math.PI * Math.pow(t, 3)) > 1 ? "terrestrial" : "gaseous";
}
function ol({ planetStats: e }) {
  const r = nl(e.mass, e.radius) === "gaseous", s = (e.landmarks || []).filter((i) => {
    if (!i.category) {
      const c = ["storm", "vortex", "band", "spot", "turbulent", "cyclone", "anticyclone", "zonal_flow"];
      return r ? c.includes(i.influence_type || "") : !c.includes(i.influence_type || "");
    }
    return r ? i.category === "gaseous" : i.category === "terrestrial";
  }), a = Ce(() => s.map((i, c) => {
    const { x: l, y: f, z: u } = i.coordinates, d = new R.Vector3(l, f, u).normalize().multiplyScalar(e.radius * 1.02);
    let p = "#22c55e";
    i.type.includes("Volcano") || i.type.includes("Storm") ? p = "#ef4444" : i.type.includes("Ocean") || i.type.includes("Water") ? p = "#3b82f6" : i.type.includes("Ice") || i.type.includes("Frozen") ? p = "#a5f3fc" : (i.type.includes("Sand") || i.type.includes("Desert")) && (p = "#fcd34d");
    const v = i.visual_effect && i.visual_effect !== "None";
    return /* @__PURE__ */ o.jsxs("group", { position: [d.x, d.y, d.z], children: [
      /* @__PURE__ */ o.jsxs("mesh", { children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.03, 16, 16] }),
        /* @__PURE__ */ o.jsx("meshStandardMaterial", { color: p })
      ] }),
      v && /* @__PURE__ */ o.jsxs("mesh", { children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.05, 16, 16] }),
        /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: p, transparent: !0, opacity: 0.3, depthWrite: !1 })
      ] }),
      /* @__PURE__ */ o.jsx(Nn, { position: [0, 0.1, 0], center: !0, distanceFactor: 10, occlude: !0, children: /* @__PURE__ */ o.jsx("div", { className: "bg-black/80 text-green-400 px-2 py-1 text-xs font-mono rounded border border-green-500/50 whitespace-nowrap", children: i.classification_id }) })
    ] }, c);
  }), [s, e.radius]);
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: a });
}
function sl({ planetStats: e }) {
  const t = dt(e.mass, e.radius), [r, n] = ye(null), { raycaster: s, camera: a, gl: i } = zo(), c = {
    surface: fe(null),
    atmosphere: fe(null),
    liquid: fe(null),
    clouds: fe(null),
    group: fe(null)
  }, l = (f) => {
    if (f.stopPropagation(), !c.surface.current) return;
    const u = new R.Vector2(
      f.clientX / i.domElement.clientWidth * 2 - 1,
      -(f.clientY / i.domElement.clientHeight) * 2 + 1
    );
    s.setFromCamera(u, a);
    const d = s.intersectObject(c.surface.current);
    if (d.length > 0) {
      const p = d[0].point, v = p.clone().normalize(), b = p.length() - e.radius;
      let h = "Mountain";
      b < -0.05 ? h = "Ocean Floor" : b < 0 ? h = "Beach" : b < 0.05 && (h = "Lowland");
      const x = e.temperature, g = b * 10, C = x - g, w = C - 273;
      n({
        position: p,
        normalizedPosition: v,
        height: b,
        terrainType: h,
        temperature: C,
        relativeToWaterTemp: w
      });
    }
  };
  return Ut(() => {
    c.surface.current && (c.surface.current.rotation.y += 1e-3), c.atmosphere.current && (c.atmosphere.current.rotation.y += 5e-4), c.liquid.current && (c.liquid.current.rotation.y += 8e-4), c.clouds.current && (c.clouds.current.rotation.y += 12e-4);
  }), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("group", { ref: c.group, onClick: l, children: [
      /* @__PURE__ */ o.jsx(Hc, { planetStats: e, ref: c.surface }),
      t === "terrestrial" && /* @__PURE__ */ o.jsx(el, { planetStats: e, ref: c.liquid }),
      /* @__PURE__ */ o.jsx(tl, { planetStats: e, ref: c.atmosphere }),
      t === "terrestrial" && e.cloudCount && e.cloudCount > 0 && /* @__PURE__ */ o.jsx(rl, { planetStats: e, ref: c.clouds }),
      e.landmarks && e.landmarks.length > 0 && /* @__PURE__ */ o.jsx(ol, { planetStats: e })
    ] }),
    r && /* @__PURE__ */ o.jsx(Uo, { pointInfo: r, planetStats: e })
  ] });
}
function U(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function $e(e, t = []) {
  let r = [];
  function n(a, i) {
    const c = m.createContext(i), l = r.length;
    r = [...r, i];
    const f = (d) => {
      var g;
      const { scope: p, children: v, ...b } = d, h = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[l]) || c, x = m.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ o.jsx(h.Provider, { value: x, children: v });
    };
    f.displayName = a + "Provider";
    function u(d, p) {
      var h;
      const v = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[l]) || c, b = m.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [f, u];
  }
  const s = () => {
    const a = r.map((i) => m.createContext(i));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return s.scopeName = e, [n, al(s, ...t)];
}
function al(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const i = n.reduce((c, { useScope: l, scopeName: f }) => {
        const d = l(a)[`__scope${f}`];
        return { ...c, ...d };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function ao(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function kn(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const a = ao(s, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const a = n[s];
          typeof a == "function" ? a() : ao(e[s], null);
        }
      };
  };
}
function ne(...e) {
  return m.useCallback(kn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  const t = /* @__PURE__ */ cl(e), r = m.forwardRef((n, s) => {
    const { children: a, ...i } = n, c = m.Children.toArray(a), l = c.find(ul);
    if (l) {
      const f = l.props.children, u = c.map((d) => d === l ? m.Children.count(f) > 1 ? m.Children.only(null) : m.isValidElement(f) ? f.props.children : null : d);
      return /* @__PURE__ */ o.jsx(t, { ...i, ref: s, children: m.isValidElement(f) ? m.cloneElement(f, void 0, u) : null });
    }
    return /* @__PURE__ */ o.jsx(t, { ...i, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var il = /* @__PURE__ */ bt("Slot");
// @__NO_SIDE_EFFECTS__
function cl(e) {
  const t = m.forwardRef((r, n) => {
    const { children: s, ...a } = r, i = m.isValidElement(s) ? fl(s) : void 0, c = ne(i, n);
    if (m.isValidElement(s)) {
      const l = dl(a, s.props);
      return s.type !== m.Fragment && (l.ref = c), m.cloneElement(s, l);
    }
    return m.Children.count(s) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ll = Symbol("radix.slottable");
function ul(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ll;
}
function dl(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? s && a ? r[n] = (...c) => {
      const l = a(...c);
      return s(...c), l;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...a } : n === "className" && (r[n] = [s, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function fl(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function wr(e) {
  const t = e + "CollectionProvider", [r, n] = $e(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: x, children: g } = h, C = Pe.useRef(null), y = Pe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ o.jsx(s, { scope: x, itemMap: y, collectionRef: C, children: g });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ bt(c), f = Pe.forwardRef(
    (h, x) => {
      const { scope: g, children: C } = h, y = a(c, g), w = ne(x, y.collectionRef);
      return /* @__PURE__ */ o.jsx(l, { ref: w, children: C });
    }
  );
  f.displayName = c;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ bt(u), v = Pe.forwardRef(
    (h, x) => {
      const { scope: g, children: C, ...y } = h, w = Pe.useRef(null), N = ne(x, w), A = a(u, g);
      return Pe.useEffect(() => (A.itemMap.set(w, { ref: w, ...y }), () => void A.itemMap.delete(w))), /* @__PURE__ */ o.jsx(p, { [d]: "", ref: N, children: C });
    }
  );
  v.displayName = u;
  function b(h) {
    const x = a(e + "CollectionConsumer", h);
    return Pe.useCallback(() => {
      const C = x.collectionRef.current;
      if (!C) return [];
      const y = Array.from(C.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (A, M) => y.indexOf(A.ref.current) - y.indexOf(M.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: i, Slot: f, ItemSlot: v },
    b,
    n
  ];
}
var le = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, ml = m[" useId ".trim().toString()] || (() => {
}), pl = 0;
function at(e) {
  const [t, r] = m.useState(ml());
  return le(() => {
    r((n) => n ?? String(pl++));
  }, [e]), t ? `radix-${t}` : "";
}
var hl = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Y = hl.reduce((e, t) => {
  const r = /* @__PURE__ */ bt(`Primitive.${t}`), n = m.forwardRef((s, a) => {
    const { asChild: i, ...c } = s, l = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o.jsx(l, { ...c, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function qo(e, t) {
  e && br.flushSync(() => e.dispatchEvent(t));
}
function De(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
var gl = m[" useInsertionEffect ".trim().toString()] || le;
function it({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [s, a, i] = vl({
    defaultProp: t,
    onChange: r
  }), c = e !== void 0, l = c ? e : s;
  {
    const u = m.useRef(e !== void 0);
    m.useEffect(() => {
      const d = u.current;
      d !== c && console.warn(
        `${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = c;
    }, [c, n]);
  }
  const f = m.useCallback(
    (u) => {
      var d;
      if (c) {
        const p = xl(u) ? u(e) : u;
        p !== e && ((d = i.current) == null || d.call(i, p));
      } else
        a(u);
    },
    [c, e, a, i]
  );
  return [l, f];
}
function vl({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = m.useState(e), s = m.useRef(r), a = m.useRef(t);
  return gl(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    var i;
    s.current !== r && ((i = a.current) == null || i.call(a, r), s.current = r);
  }, [r, s]), [r, n, a];
}
function xl(e) {
  return typeof e == "function";
}
var yl = m.createContext(void 0);
function Ht(e) {
  const t = m.useContext(yl);
  return e || t || "ltr";
}
var Fr = "rovingFocusGroup.onEntryFocus", bl = { bubbles: !1, cancelable: !0 }, Gt = "RovingFocusGroup", [en, Yo, wl] = wr(Gt), [Cl, Cr] = $e(
  Gt,
  [wl]
), [Nl, kl] = Cl(Gt), Xo = m.forwardRef(
  (e, t) => /* @__PURE__ */ o.jsx(en.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o.jsx(en.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o.jsx(El, { ...e, ref: t }) }) })
);
Xo.displayName = Gt;
var El = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: s = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: f,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = m.useRef(null), v = ne(t, p), b = Ht(a), [h, x] = it({
    prop: i,
    defaultProp: c ?? null,
    onChange: l,
    caller: Gt
  }), [g, C] = m.useState(!1), y = De(f), w = Yo(r), N = m.useRef(!1), [A, M] = m.useState(0);
  return m.useEffect(() => {
    const j = p.current;
    if (j)
      return j.addEventListener(Fr, y), () => j.removeEventListener(Fr, y);
  }, [y]), /* @__PURE__ */ o.jsx(
    Nl,
    {
      scope: r,
      orientation: n,
      dir: b,
      loop: s,
      currentTabStopId: h,
      onItemFocus: m.useCallback(
        (j) => x(j),
        [x]
      ),
      onItemShiftTab: m.useCallback(() => C(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => M((j) => j + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => M((j) => j - 1),
        []
      ),
      children: /* @__PURE__ */ o.jsx(
        Y.div,
        {
          tabIndex: g || A === 0 ? -1 : 0,
          "data-orientation": n,
          ...d,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: U(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: U(e.onFocus, (j) => {
            const _ = !N.current;
            if (j.target === j.currentTarget && _ && !g) {
              const D = new CustomEvent(Fr, bl);
              if (j.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const k = w().filter((P) => P.focusable), T = k.find((P) => P.active), O = k.find((P) => P.id === h), z = [T, O, ...k].filter(
                  Boolean
                ).map((P) => P.ref.current);
                Qo(z, u);
              }
            }
            N.current = !1;
          }),
          onBlur: U(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Zo = "RovingFocusGroupItem", Jo = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: s = !1,
      tabStopId: a,
      children: i,
      ...c
    } = e, l = at(), f = a || l, u = kl(Zo, r), d = u.currentTabStopId === f, p = Yo(r), { onFocusableItemAdd: v, onFocusableItemRemove: b, currentTabStopId: h } = u;
    return m.useEffect(() => {
      if (n)
        return v(), () => b();
    }, [n, v, b]), /* @__PURE__ */ o.jsx(
      en.ItemSlot,
      {
        scope: r,
        id: f,
        focusable: n,
        active: s,
        children: /* @__PURE__ */ o.jsx(
          Y.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...c,
            ref: t,
            onMouseDown: U(e.onMouseDown, (x) => {
              n ? u.onItemFocus(f) : x.preventDefault();
            }),
            onFocus: U(e.onFocus, () => u.onItemFocus(f)),
            onKeyDown: U(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const g = Sl(x, u.orientation, u.dir);
              if (g !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let y = p().filter((w) => w.focusable).map((w) => w.ref.current);
                if (g === "last") y.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && y.reverse();
                  const w = y.indexOf(x.currentTarget);
                  y = u.loop ? Tl(y, w + 1) : y.slice(w + 1);
                }
                setTimeout(() => Qo(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
Jo.displayName = Zo;
var jl = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Rl(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Sl(e, t, r) {
  const n = Rl(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return jl[n];
}
function Qo(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Tl(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var es = Xo, ts = Jo;
function Ml(e, t) {
  return m.useReducer((r, n) => t[r][n] ?? r, e);
}
var Nt = (e) => {
  const { present: t, children: r } = e, n = Al(t), s = typeof r == "function" ? r({ present: n.isPresent }) : m.Children.only(r), a = ne(n.ref, Pl(s));
  return typeof r == "function" || n.isPresent ? m.cloneElement(s, { ref: a }) : null;
};
Nt.displayName = "Presence";
function Al(e) {
  const [t, r] = m.useState(), n = m.useRef(null), s = m.useRef(e), a = m.useRef("none"), i = e ? "mounted" : "unmounted", [c, l] = Ml(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return m.useEffect(() => {
    const f = Qt(n.current);
    a.current = c === "mounted" ? f : "none";
  }, [c]), le(() => {
    const f = n.current, u = s.current;
    if (u !== e) {
      const p = a.current, v = Qt(f);
      e ? l("MOUNT") : v === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(u && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), le(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, d = (v) => {
        const h = Qt(n.current).includes(v.animationName);
        if (v.target === t && h && (l("ANIMATION_END"), !s.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = Qt(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(f), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: m.useCallback((f) => {
      n.current = f ? getComputedStyle(f) : null, r(f);
    }, [])
  };
}
function Qt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Pl(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Nr = "Tabs", [_l, Oh] = $e(Nr, [
  Cr
]), rs = Cr(), [Il, En] = _l(Nr), ns = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: s,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: c,
      activationMode: l = "automatic",
      ...f
    } = e, u = Ht(c), [d, p] = it({
      prop: n,
      onChange: s,
      defaultProp: a ?? "",
      caller: Nr
    });
    return /* @__PURE__ */ o.jsx(
      Il,
      {
        scope: r,
        baseId: at(),
        value: d,
        onValueChange: p,
        orientation: i,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            dir: u,
            "data-orientation": i,
            ...f,
            ref: t
          }
        )
      }
    );
  }
);
ns.displayName = Nr;
var os = "TabsList", ss = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...s } = e, a = En(os, r), i = rs(r);
    return /* @__PURE__ */ o.jsx(
      es,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
ss.displayName = os;
var as = "TabsTrigger", is = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: s = !1, ...a } = e, i = En(as, r), c = rs(r), l = us(i.baseId, n), f = ds(i.baseId, n), u = n === i.value;
    return /* @__PURE__ */ o.jsx(
      ts,
      {
        asChild: !0,
        ...c,
        focusable: !s,
        active: u,
        children: /* @__PURE__ */ o.jsx(
          Y.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": f,
            "data-state": u ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: l,
            ...a,
            ref: t,
            onMouseDown: U(e.onMouseDown, (d) => {
              !s && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(n) : d.preventDefault();
            }),
            onKeyDown: U(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(n);
            }),
            onFocus: U(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !u && !s && d && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
is.displayName = as;
var cs = "TabsContent", ls = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: s, children: a, ...i } = e, c = En(cs, r), l = us(c.baseId, n), f = ds(c.baseId, n), u = n === c.value, d = m.useRef(u);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ o.jsx(Nt, { present: s || u, children: ({ present: p }) => /* @__PURE__ */ o.jsx(
      Y.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: f,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
ls.displayName = cs;
function us(e, t) {
  return `${e}-trigger-${t}`;
}
function ds(e, t) {
  return `${e}-content-${t}`;
}
var Dl = ns, fs = ss, ms = is, ps = ls;
function hs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = hs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function gs() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = hs(e)) && (n && (n += " "), n += t);
  return n;
}
const jn = "-", Ol = (e) => {
  const t = Fl(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const c = i.split(jn);
      return c[0] === "" && c.length !== 1 && c.shift(), vs(c, t) || Ll(i);
    },
    getConflictingClassGroupIds: (i, c) => {
      const l = r[i] || [];
      return c && n[i] ? [...l, ...n[i]] : l;
    }
  };
}, vs = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? vs(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const a = e.join(jn);
  return (i = t.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : i.classGroupId;
}, io = /^\[(.+)\]$/, Ll = (e) => {
  if (io.test(e)) {
    const t = io.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Fl = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    tn(r[s], n, s, t);
  return n;
}, tn = (e, t, r, n) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? t : co(t, s);
      a.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (zl(s)) {
        tn(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([a, i]) => {
      tn(i, co(t, a), r, n);
    });
  });
}, co = (e, t) => {
  let r = e;
  return t.split(jn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, zl = (e) => e.isThemeGetter, Vl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = r.get(a);
      if (i !== void 0)
        return i;
      if ((i = n.get(a)) !== void 0)
        return s(a, i), i;
    },
    set(a, i) {
      r.has(a) ? r.set(a, i) : s(a, i);
    }
  };
}, rn = "!", nn = ":", Bl = nn.length, $l = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (s) => {
    const a = [];
    let i = 0, c = 0, l = 0, f;
    for (let b = 0; b < s.length; b++) {
      let h = s[b];
      if (i === 0 && c === 0) {
        if (h === nn) {
          a.push(s.slice(l, b)), l = b + Bl;
          continue;
        }
        if (h === "/") {
          f = b;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? c++ : h === ")" && c--;
    }
    const u = a.length === 0 ? s : s.substring(l), d = Wl(u), p = d !== u, v = f && f > l ? f - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: d,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const s = t + nn, a = n;
    n = (i) => i.startsWith(s) ? a(i.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = n;
    n = (a) => r({
      className: a,
      parseClassName: s
    });
  }
  return n;
}, Wl = (e) => e.endsWith(rn) ? e.substring(0, e.length - 1) : e.startsWith(rn) ? e.substring(1) : e, Ul = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const s = [];
    let a = [];
    return n.forEach((i) => {
      i[0] === "[" || t[i] ? (s.push(...a.sort(), i), a = []) : a.push(i);
    }), s.push(...a.sort()), s;
  };
}, Hl = (e) => ({
  cache: Vl(e.cacheSize),
  parseClassName: $l(e),
  sortModifiers: Ul(e),
  ...Ol(e)
}), Gl = /\s+/, Kl = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, i = [], c = e.trim().split(Gl);
  let l = "";
  for (let f = c.length - 1; f >= 0; f -= 1) {
    const u = c[f], {
      isExternal: d,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: h
    } = r(u);
    if (d) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let x = !!h, g = n(x ? b.substring(0, h) : b);
    if (!g) {
      if (!x) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = n(b), !g) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const C = a(p).join(":"), y = v ? C + rn : C, w = y + g;
    if (i.includes(w))
      continue;
    i.push(w);
    const N = s(g, x);
    for (let A = 0; A < N.length; ++A) {
      const M = N[A];
      i.push(y + M);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ql() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = xs(t)) && (n && (n += " "), n += r);
  return n;
}
const xs = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = xs(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Yl(e, ...t) {
  let r, n, s, a = i;
  function i(l) {
    const f = t.reduce((u, d) => d(u), e());
    return r = Hl(f), n = r.cache.get, s = r.cache.set, a = c, c(l);
  }
  function c(l) {
    const f = n(l);
    if (f)
      return f;
    const u = Kl(l, r);
    return s(l, u), u;
  }
  return function() {
    return a(ql.apply(null, arguments));
  };
}
const ie = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ys = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Xl = /^\d+\/\d+$/, Zl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ql = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, eu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pt = (e) => Xl.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), zr = (e) => e.endsWith("%") && X(e.slice(0, -1)), Fe = (e) => Zl.test(e), ru = () => !0, nu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jl.test(e) && !Ql.test(e)
), ws = () => !1, ou = (e) => eu.test(e), su = (e) => tu.test(e), au = (e) => !$(e) && !W(e), iu = (e) => kt(e, ks, ws), $ = (e) => ys.test(e), rt = (e) => kt(e, Es, nu), Vr = (e) => kt(e, fu, X), lo = (e) => kt(e, Cs, ws), cu = (e) => kt(e, Ns, su), er = (e) => kt(e, js, ou), W = (e) => bs.test(e), Dt = (e) => Et(e, Es), lu = (e) => Et(e, mu), uo = (e) => Et(e, Cs), uu = (e) => Et(e, ks), du = (e) => Et(e, Ns), tr = (e) => Et(e, js, !0), kt = (e, t, r) => {
  const n = ys.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Et = (e, t, r = !1) => {
  const n = bs.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Cs = (e) => e === "position" || e === "percentage", Ns = (e) => e === "image" || e === "url", ks = (e) => e === "length" || e === "size" || e === "bg-size", Es = (e) => e === "length", fu = (e) => e === "number", mu = (e) => e === "family-name", js = (e) => e === "shadow", pu = () => {
  const e = ie("color"), t = ie("font"), r = ie("text"), n = ie("font-weight"), s = ie("tracking"), a = ie("leading"), i = ie("breakpoint"), c = ie("container"), l = ie("spacing"), f = ie("radius"), u = ie("shadow"), d = ie("inset-shadow"), p = ie("text-shadow"), v = ie("drop-shadow"), b = ie("blur"), h = ie("perspective"), x = ie("aspect"), g = ie("ease"), C = ie("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], N = () => [...w(), W, $], A = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], j = () => [W, $, l], _ = () => [pt, "full", "auto", ...j()], D = () => [Ue, "none", "subgrid", W, $], k = () => ["auto", {
    span: ["full", Ue, W, $]
  }, Ue, W, $], T = () => [Ue, "auto", W, $], O = () => ["auto", "min", "max", "fr", W, $], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...j()], V = () => [pt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], S = () => [e, W, $], I = () => [...w(), uo, lo, {
    position: [W, $]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], B = () => ["auto", "cover", "contain", uu, iu, {
    size: [W, $]
  }], K = () => [zr, Dt, rt], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    W,
    $
  ], Q = () => ["", X, Dt, rt], se = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [X, zr, uo, lo], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    W,
    $
  ], Z = () => ["none", X, W, $], J = () => ["none", X, W, $], te = () => [X, W, $], re = () => [pt, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Fe],
      breakpoint: [Fe],
      color: [ru],
      container: [Fe],
      "drop-shadow": [Fe],
      ease: ["in", "out", "in-out"],
      font: [au],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Fe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Fe],
      shadow: [Fe],
      spacing: ["px", X],
      text: [Fe],
      "text-shadow": [Fe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", pt, $, W, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [X, $, W, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ue, "auto", W, $]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [pt, "full", "auto", c, ...j()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [X, pt, "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", X, W, $]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", X, W, $]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ue, "first", "last", "none", W, $]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: k()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: k()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": O()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": O()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: j()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": j()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": j()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: j()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: j()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: j()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: j()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: j()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: j()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: j()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: j()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: j()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": j()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": j()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: V()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...V()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...V()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...V()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...V()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...V()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...V()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Dt, rt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, W, Vr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", zr, $]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lu, $, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, W, $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [X, "none", W, Vr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...j()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W, $]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", W, $]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: S()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: S()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...se(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [X, "from-font", "auto", W, rt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: S()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [X, "auto", W, $]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, $]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", W, $]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: I()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: E()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: B()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ue, W, $],
          radial: ["", W, $],
          conic: [Ue, W, $]
        }, du, cu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: S()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: S()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: S()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: S()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Q()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Q()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Q()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Q()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Q()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Q()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...se(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...se(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: S()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": S()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": S()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": S()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": S()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": S()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": S()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": S()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": S()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: S()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...se(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, W, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", X, Dt, rt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: S()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          tr,
          er
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: S()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, tr, er]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": S()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Q()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: S()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [X, rt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": S()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Q()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": S()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, tr, er]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": S()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [X, W, $]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [X]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": L()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": S()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": S()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": S()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": S()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": S()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": S()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": S()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": S()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": S()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": S()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": S()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": S()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": S()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": S()
      }],
      "mask-image-radial": [{
        "mask-radial": [W, $]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": S()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": S()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [X]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": L()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": S()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": S()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: I()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: E()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: B()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", W, $]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          $
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [X, W, $]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [X, W, $]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          tr,
          er
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": S()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", X, W, $]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [X, W, $]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", X, W, $]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [X, W, $]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", X, W, $]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          W,
          $
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [X, W, $]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [X, W, $]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", X, W, $]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [X, W, $]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", X, W, $]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [X, W, $]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X, W, $]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", X, W, $]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": j()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": j()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": j()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, $]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [X, "initial", W, $]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", g, W, $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [X, W, $]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, W, $]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, W, $]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Z()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Z()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Z()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Z()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: te()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": te()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": te()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [W, $, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: S()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: S()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, $]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", W, $]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...S()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, Dt, rt, Vr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...S()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, hu = /* @__PURE__ */ Yl(pu);
function ee(...e) {
  return hu(gs(e));
}
const Rs = Dl, Rn = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  fs,
  {
    ref: r,
    className: ee(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Rn.displayName = fs.displayName;
const Ge = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  ms,
  {
    ref: r,
    className: ee(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ge.displayName = ms.displayName;
const Ke = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  ps,
  {
    ref: r,
    className: ee(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ke.displayName = ps.displayName;
const me = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
me.displayName = "Card";
const pe = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
pe.displayName = "CardHeader";
const he = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: r,
    className: ee(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
he.displayName = "CardTitle";
const gu = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: r,
    className: ee("text-sm text-muted-foreground", e),
    ...t
  }
));
gu.displayName = "CardDescription";
const ge = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: ee("p-6 pt-0", e), ...t }));
ge.displayName = "CardContent";
const vu = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("flex items-center p-6 pt-0", e),
    ...t
  }
));
vu.displayName = "CardFooter";
var xu = "Label", Ss = m.forwardRef((e, t) => /* @__PURE__ */ o.jsx(
  Y.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var s;
      r.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Ss.displayName = xu;
var Ts = Ss;
const fo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mo = gs, Sn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return mo(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, i = Object.keys(s).map((f) => {
    const u = r == null ? void 0 : r[f], d = a == null ? void 0 : a[f];
    if (u === null) return null;
    const p = fo(u) || fo(d);
    return s[f][p];
  }), c = r && Object.entries(r).reduce((f, u) => {
    let [d, p] = u;
    return p === void 0 || (f[d] = p), f;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, u) => {
    let { class: d, className: p, ...v } = u;
    return Object.entries(v).every((b) => {
      let [h, x] = b;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...c
      }[h]) : {
        ...a,
        ...c
      }[h] === x;
    }) ? [
      ...f,
      d,
      p
    ] : f;
  }, []);
  return mo(e, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, yu = Sn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), G = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  Ts,
  {
    ref: r,
    className: ee(yu(), e),
    ...t
  }
));
G.displayName = Ts.displayName;
function fr(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Tn(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Mn(e) {
  const [t, r] = m.useState(void 0);
  return le(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let i, c;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          i = f.inlineSize, c = f.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        r({ width: i, height: c });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Ms = ["PageUp", "PageDown"], As = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ps = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, jt = "Slider", [on, bu, wu] = wr(jt), [_s, Lh] = $e(jt, [
  wu
]), [Cu, kr] = _s(jt), Is = m.forwardRef(
  (e, t) => {
    const {
      name: r,
      min: n = 0,
      max: s = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: c = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: f = [n],
      value: u,
      onValueChange: d = () => {
      },
      onValueCommit: p = () => {
      },
      inverted: v = !1,
      form: b,
      ...h
    } = e, x = m.useRef(/* @__PURE__ */ new Set()), g = m.useRef(0), y = i === "horizontal" ? Nu : ku, [w = [], N] = it({
      prop: u,
      defaultProp: f,
      onChange: (k) => {
        var O;
        (O = [...x.current][g.current]) == null || O.focus(), d(k);
      }
    }), A = m.useRef(w);
    function M(k) {
      const T = Tu(w, k);
      D(k, T);
    }
    function j(k) {
      D(k, g.current);
    }
    function _() {
      const k = A.current[g.current];
      w[g.current] !== k && p(w);
    }
    function D(k, T, { commit: O } = { commit: !1 }) {
      const F = _u(a), z = Iu(Math.round((k - n) / a) * a + n, F), P = fr(z, [n, s]);
      N((V = []) => {
        const S = Ru(V, P, T);
        if (Pu(S, l * a)) {
          g.current = S.indexOf(P);
          const I = String(S) !== String(V);
          return I && O && p(S), I ? S : V;
        } else
          return V;
      });
    }
    return /* @__PURE__ */ o.jsx(
      Cu,
      {
        scope: e.__scopeSlider,
        name: r,
        disabled: c,
        min: n,
        max: s,
        valueIndexToChangeRef: g,
        thumbs: x.current,
        values: w,
        orientation: i,
        form: b,
        children: /* @__PURE__ */ o.jsx(on.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(on.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(
          y,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: U(h.onPointerDown, () => {
              c || (A.current = w);
            }),
            min: n,
            max: s,
            inverted: v,
            onSlideStart: c ? void 0 : M,
            onSlideMove: c ? void 0 : j,
            onSlideEnd: c ? void 0 : _,
            onHomeKeyDown: () => !c && D(n, 0, { commit: !0 }),
            onEndKeyDown: () => !c && D(s, w.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: k, direction: T }) => {
              if (!c) {
                const z = Ms.includes(k.key) || k.shiftKey && As.includes(k.key) ? 10 : 1, P = g.current, V = w[P], S = a * z * T;
                D(V + S, P, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Is.displayName = jt;
var [Ds, Os] = _s(jt, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Nu = m.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      dir: s,
      inverted: a,
      onSlideStart: i,
      onSlideMove: c,
      onSlideEnd: l,
      onStepKeyDown: f,
      ...u
    } = e, [d, p] = m.useState(null), v = ne(t, (y) => p(y)), b = m.useRef(void 0), h = Ht(s), x = h === "ltr", g = x && !a || !x && a;
    function C(y) {
      const w = b.current || d.getBoundingClientRect(), N = [0, w.width], M = An(N, g ? [r, n] : [n, r]);
      return b.current = w, M(y - w.left);
    }
    return /* @__PURE__ */ o.jsx(
      Ds,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "left" : "right",
        endEdge: g ? "right" : "left",
        direction: g ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ o.jsx(
          Ls,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...u,
            ref: v,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (y) => {
              const w = C(y.clientX);
              i == null || i(w);
            },
            onSlideMove: (y) => {
              const w = C(y.clientX);
              c == null || c(w);
            },
            onSlideEnd: () => {
              b.current = void 0, l == null || l();
            },
            onStepKeyDown: (y) => {
              const N = Ps[g ? "from-left" : "from-right"].includes(y.key);
              f == null || f({ event: y, direction: N ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), ku = m.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      inverted: s,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...f
    } = e, u = m.useRef(null), d = ne(t, u), p = m.useRef(void 0), v = !s;
    function b(h) {
      const x = p.current || u.current.getBoundingClientRect(), g = [0, x.height], y = An(g, v ? [n, r] : [r, n]);
      return p.current = x, y(h - x.top);
    }
    return /* @__PURE__ */ o.jsx(
      Ds,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ o.jsx(
          Ls,
          {
            "data-orientation": "vertical",
            ...f,
            ref: d,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const x = b(h.clientY);
              a == null || a(x);
            },
            onSlideMove: (h) => {
              const x = b(h.clientY);
              i == null || i(x);
            },
            onSlideEnd: () => {
              p.current = void 0, c == null || c();
            },
            onStepKeyDown: (h) => {
              const g = Ps[v ? "from-bottom" : "from-top"].includes(h.key);
              l == null || l({ event: h, direction: g ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Ls = m.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: r,
      onSlideStart: n,
      onSlideMove: s,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...f
    } = e, u = kr(jt, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        ...f,
        ref: t,
        onKeyDown: U(e.onKeyDown, (d) => {
          d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (c(d), d.preventDefault()) : Ms.concat(As).includes(d.key) && (l(d), d.preventDefault());
        }),
        onPointerDown: U(e.onPointerDown, (d) => {
          const p = d.target;
          p.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(p) ? p.focus() : n(d);
        }),
        onPointerMove: U(e.onPointerMove, (d) => {
          d.target.hasPointerCapture(d.pointerId) && s(d);
        }),
        onPointerUp: U(e.onPointerUp, (d) => {
          const p = d.target;
          p.hasPointerCapture(d.pointerId) && (p.releasePointerCapture(d.pointerId), a(d));
        })
      }
    );
  }
), Fs = "SliderTrack", zs = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, s = kr(Fs, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-disabled": s.disabled ? "" : void 0,
        "data-orientation": s.orientation,
        ...n,
        ref: t
      }
    );
  }
);
zs.displayName = Fs;
var sn = "SliderRange", Vs = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, s = kr(sn, r), a = Os(sn, r), i = m.useRef(null), c = ne(t, i), l = s.values.length, f = s.values.map(
      (p) => Ws(p, s.min, s.max)
    ), u = l > 1 ? Math.min(...f) : 0, d = 100 - Math.max(...f);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: c,
        style: {
          ...e.style,
          [a.startEdge]: u + "%",
          [a.endEdge]: d + "%"
        }
      }
    );
  }
);
Vs.displayName = sn;
var an = "SliderThumb", Bs = m.forwardRef(
  (e, t) => {
    const r = bu(e.__scopeSlider), [n, s] = m.useState(null), a = ne(t, (c) => s(c)), i = m.useMemo(
      () => n ? r().findIndex((c) => c.ref.current === n) : -1,
      [r, n]
    );
    return /* @__PURE__ */ o.jsx(Eu, { ...e, ref: a, index: i });
  }
), Eu = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, index: n, name: s, ...a } = e, i = kr(an, r), c = Os(an, r), [l, f] = m.useState(null), u = ne(t, (C) => f(C)), d = l ? i.form || !!l.closest("form") : !0, p = Mn(l), v = i.values[n], b = v === void 0 ? 0 : Ws(v, i.min, i.max), h = Su(n, i.values.length), x = p == null ? void 0 : p[c.size], g = x ? Mu(x, b, c.direction) : 0;
    return m.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ o.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [c.startEdge]: `calc(${b}% + ${g}px)`
        },
        children: [
          /* @__PURE__ */ o.jsx(on.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(
            Y.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": i.min,
              "aria-valuenow": v,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: u,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: U(e.onFocus, () => {
                i.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          d && /* @__PURE__ */ o.jsx(
            $s,
            {
              name: s ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: v
            },
            n
          )
        ]
      }
    );
  }
);
Bs.displayName = an;
var ju = "RadioBubbleInput", $s = m.forwardRef(
  ({ __scopeSlider: e, value: t, ...r }, n) => {
    const s = m.useRef(null), a = ne(s, n), i = Tn(t);
    return m.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== t && u) {
        const d = new Event("input", { bubbles: !0 });
        u.call(c, t), c.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ o.jsx(
      Y.input,
      {
        style: { display: "none" },
        ...r,
        ref: a,
        defaultValue: t
      }
    );
  }
);
$s.displayName = ju;
function Ru(e = [], t, r) {
  const n = [...e];
  return n[r] = t, n.sort((s, a) => s - a);
}
function Ws(e, t, r) {
  const a = 100 / (r - t) * (e - t);
  return fr(a, [0, 100]);
}
function Su(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Tu(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((s) => Math.abs(s - t)), n = Math.min(...r);
  return r.indexOf(n);
}
function Mu(e, t, r) {
  const n = e / 2, a = An([0, 50], [0, n]);
  return (n - a(t) * r) * r;
}
function Au(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function Pu(e, t) {
  if (t > 0) {
    const r = Au(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function An(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function _u(e) {
  return (String(e).split(".")[1] || "").length;
}
function Iu(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var Us = Is, Du = zs, Ou = Vs, Lu = Bs;
const Re = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsxs(
  Us,
  {
    ref: r,
    className: ee(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(Du, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ o.jsx(Ou, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ o.jsx(Lu, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Re.displayName = Us.displayName;
var Er = "Switch", [Fu, Fh] = $e(Er), [zu, Vu] = Fu(Er), Hs = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: l = "on",
      onCheckedChange: f,
      form: u,
      ...d
    } = e, [p, v] = m.useState(null), b = ne(t, (y) => v(y)), h = m.useRef(!1), x = p ? u || !!p.closest("form") : !0, [g, C] = it({
      prop: s,
      defaultProp: a ?? !1,
      onChange: f,
      caller: Er
    });
    return /* @__PURE__ */ o.jsxs(zu, { scope: r, checked: g, disabled: c, children: [
      /* @__PURE__ */ o.jsx(
        Y.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": g,
          "aria-required": i,
          "data-state": Ys(g),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...d,
          ref: b,
          onClick: U(e.onClick, (y) => {
            C((w) => !w), x && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ o.jsx(
        qs,
        {
          control: p,
          bubbles: !h.current,
          name: n,
          value: l,
          checked: g,
          required: i,
          disabled: c,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Hs.displayName = Er;
var Gs = "SwitchThumb", Ks = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, s = Vu(Gs, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-state": Ys(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Ks.displayName = Gs;
var Bu = "SwitchBubbleInput", qs = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...s
  }, a) => {
    const i = m.useRef(null), c = ne(i, a), l = Tn(r), f = Mn(t);
    return m.useEffect(() => {
      const u = i.current;
      if (!u) return;
      const d = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== r && v) {
        const b = new Event("click", { bubbles: n });
        v.call(u, r), u.dispatchEvent(b);
      }
    }, [l, r, n]), /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...s,
        tabIndex: -1,
        ref: c,
        style: {
          ...s.style,
          ...f,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
qs.displayName = Bu;
function Ys(e) {
  return e ? "checked" : "unchecked";
}
var Xs = Hs, $u = Ks;
const Pn = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  Xs,
  {
    className: ee(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ o.jsx(
      $u,
      {
        className: ee(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Pn.displayName = Xs.displayName;
function Wu({ planetStats: e, setPlanetStats: t }) {
  var s;
  const r = dt(e.mass, e.radius), n = (a, i) => {
    t({
      ...e,
      [a]: i
    });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "MASS PROPERTIES" }) }),
      /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Mass (Earth masses)" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: e.mass.toFixed(2) })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.mass],
              min: 0.1,
              max: 15,
              step: 0.1,
              onValueChange: (a) => n("mass", a[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Radius (Earth radii)" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: e.radius.toFixed(2) })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.radius],
              min: 0.1,
              max: 10,
              step: 0.1,
              onValueChange: (a) => n("radius", a[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Density (g/cm³)" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((s = e.density) == null ? void 0 : s.toFixed(2)) || "N/A" })
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70", children: "Calculated from mass and radius" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "THERMAL PROPERTIES" }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Temperature (K)" }),
          /* @__PURE__ */ o.jsxs("span", { className: "font-bold", children: [
            e.temperature,
            " K (",
            (e.temperature - 273.15).toFixed(1),
            "°C)"
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          Re,
          {
            value: [e.temperature],
            min: 50,
            max: 700,
            step: 1,
            onValueChange: (a) => n("temperature", a[0]),
            className: "[&_[role=slider]]:bg-green-500"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "CLASSIFICATION" }) }),
      /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Planet Type" }),
            /* @__PURE__ */ o.jsx("span", { className: "text-sm capitalize font-bold", children: r })
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70", children: r === "gaseous" ? "Gas giants have mass > 7 Earth masses or radius > 2.5 Earth radii" : "Terrestrial planets have smaller mass and radius" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Has Rings" }),
          /* @__PURE__ */ o.jsx(
            Pn,
            {
              checked: e.hasRings,
              onCheckedChange: (a) => n("hasRings", a),
              className: "data-[state=checked]:bg-green-600"
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
function Uu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e);
  m.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Hu = "DismissableLayer", cn = "dismissableLayer.update", Gu = "dismissableLayer.pointerDownOutside", Ku = "dismissableLayer.focusOutside", po, Zs = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _n = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: c,
      ...l
    } = e, f = m.useContext(Zs), [u, d] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = m.useState({}), b = ne(t, (M) => d(M)), h = Array.from(f.layers), [x] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), g = h.indexOf(x), C = u ? h.indexOf(u) : -1, y = f.layersWithOutsidePointerEventsDisabled.size > 0, w = C >= g, N = Xu((M) => {
      const j = M.target, _ = [...f.branches].some((D) => D.contains(j));
      !w || _ || (s == null || s(M), i == null || i(M), M.defaultPrevented || c == null || c());
    }, p), A = Zu((M) => {
      const j = M.target;
      [...f.branches].some((D) => D.contains(j)) || (a == null || a(M), i == null || i(M), M.defaultPrevented || c == null || c());
    }, p);
    return Uu((M) => {
      C === f.layers.size - 1 && (n == null || n(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
    }, p), m.useEffect(() => {
      if (u)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (po = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), ho(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = po);
        };
    }, [u, p, r, f]), m.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), ho());
    }, [u, f]), m.useEffect(() => {
      const M = () => v({});
      return document.addEventListener(cn, M), () => document.removeEventListener(cn, M);
    }, []), /* @__PURE__ */ o.jsx(
      Y.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: y ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: U(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: U(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: U(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
_n.displayName = Hu;
var qu = "DismissableLayerBranch", Yu = m.forwardRef((e, t) => {
  const r = m.useContext(Zs), n = m.useRef(null), s = ne(t, n);
  return m.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ o.jsx(Y.div, { ...e, ref: s });
});
Yu.displayName = qu;
function Xu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e), n = m.useRef(!1), s = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (c) => {
      if (c.target && !n.current) {
        let l = function() {
          Js(
            Gu,
            r,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", s.current);
      n.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", s.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Zu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e), n = m.useRef(!1);
  return m.useEffect(() => {
    const s = (a) => {
      a.target && !n.current && Js(Ku, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function ho() {
  const e = new CustomEvent(cn);
  document.dispatchEvent(e);
}
function Js(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), n ? qo(s, a) : s.dispatchEvent(a);
}
var Br = 0;
function Qs() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? go()), document.body.insertAdjacentElement("beforeend", e[1] ?? go()), Br++, () => {
      Br === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Br--;
    };
  }, []);
}
function go() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var $r = "focusScope.autoFocusOnMount", Wr = "focusScope.autoFocusOnUnmount", vo = { bubbles: !1, cancelable: !0 }, Ju = "FocusScope", In = m.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...i
  } = e, [c, l] = m.useState(null), f = De(s), u = De(a), d = m.useRef(null), p = ne(t, (h) => l(h)), v = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (n) {
      let h = function(y) {
        if (v.paused || !c) return;
        const w = y.target;
        c.contains(w) ? d.current = w : He(d.current, { select: !0 });
      }, x = function(y) {
        if (v.paused || !c) return;
        const w = y.relatedTarget;
        w !== null && (c.contains(w) || He(d.current, { select: !0 }));
      }, g = function(y) {
        if (document.activeElement === document.body)
          for (const N of y)
            N.removedNodes.length > 0 && He(c);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", x);
      const C = new MutationObserver(g);
      return c && C.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", x), C.disconnect();
      };
    }
  }, [n, c, v.paused]), m.useEffect(() => {
    if (c) {
      yo.add(v);
      const h = document.activeElement;
      if (!c.contains(h)) {
        const g = new CustomEvent($r, vo);
        c.addEventListener($r, f), c.dispatchEvent(g), g.defaultPrevented || (Qu(od(ea(c)), { select: !0 }), document.activeElement === h && He(c));
      }
      return () => {
        c.removeEventListener($r, f), setTimeout(() => {
          const g = new CustomEvent(Wr, vo);
          c.addEventListener(Wr, u), c.dispatchEvent(g), g.defaultPrevented || He(h ?? document.body, { select: !0 }), c.removeEventListener(Wr, u), yo.remove(v);
        }, 0);
      };
    }
  }, [c, f, u, v]);
  const b = m.useCallback(
    (h) => {
      if (!r && !n || v.paused) return;
      const x = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, g = document.activeElement;
      if (x && g) {
        const C = h.currentTarget, [y, w] = ed(C);
        y && w ? !h.shiftKey && g === w ? (h.preventDefault(), r && He(y, { select: !0 })) : h.shiftKey && g === y && (h.preventDefault(), r && He(w, { select: !0 })) : g === C && h.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ o.jsx(Y.div, { tabIndex: -1, ...i, ref: p, onKeyDown: b });
});
In.displayName = Ju;
function Qu(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (He(n, { select: t }), document.activeElement !== r) return;
}
function ed(e) {
  const t = ea(e), r = xo(t, e), n = xo(t.reverse(), e);
  return [r, n];
}
function ea(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function xo(e, t) {
  for (const r of e)
    if (!td(r, { upTo: t })) return r;
}
function td(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function rd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && rd(e) && t && e.select();
  }
}
var yo = nd();
function nd() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = bo(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = bo(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function bo(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function od(e) {
  return e.filter((t) => t.tagName !== "A");
}
const sd = ["top", "right", "bottom", "left"], Ze = Math.min, we = Math.max, mr = Math.round, rr = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), ad = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, id = {
  start: "end",
  end: "start"
};
function ln(e, t, r) {
  return we(e, Ze(t, r));
}
function Ve(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Be(e) {
  return e.split("-")[0];
}
function Rt(e) {
  return e.split("-")[1];
}
function Dn(e) {
  return e === "x" ? "y" : "x";
}
function On(e) {
  return e === "y" ? "height" : "width";
}
function ze(e) {
  return ["top", "bottom"].includes(Be(e)) ? "y" : "x";
}
function Ln(e) {
  return Dn(ze(e));
}
function cd(e, t, r) {
  r === void 0 && (r = !1);
  const n = Rt(e), s = Ln(e), a = On(s);
  let i = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = pr(i)), [i, pr(i)];
}
function ld(e) {
  const t = pr(e);
  return [un(e), t, un(t)];
}
function un(e) {
  return e.replace(/start|end/g, (t) => id[t]);
}
function ud(e, t, r) {
  const n = ["left", "right"], s = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s : n : t ? n : s;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function dd(e, t, r, n) {
  const s = Rt(e);
  let a = ud(Be(e), r === "start", n);
  return s && (a = a.map((i) => i + "-" + s), t && (a = a.concat(a.map(un)))), a;
}
function pr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ad[t]);
}
function fd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ta(e) {
  return typeof e != "number" ? fd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function hr(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: s
  } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r
  };
}
function wo(e, t, r) {
  let {
    reference: n,
    floating: s
  } = e;
  const a = ze(t), i = Ln(t), c = On(i), l = Be(t), f = a === "y", u = n.x + n.width / 2 - s.width / 2, d = n.y + n.height / 2 - s.height / 2, p = n[c] / 2 - s[c] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: u,
        y: n.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: n.x - s.width,
        y: d
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Rt(t)) {
    case "start":
      v[i] -= p * (r && f ? -1 : 1);
      break;
    case "end":
      v[i] += p * (r && f ? -1 : 1);
      break;
  }
  return v;
}
const md = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: i
  } = r, c = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let f = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: u,
    y: d
  } = wo(f, n, l), p = n, v = {}, b = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: x,
      fn: g
    } = c[h], {
      x: C,
      y,
      data: w,
      reset: N
    } = await g({
      x: u,
      y: d,
      initialPlacement: n,
      placement: p,
      strategy: s,
      middlewareData: v,
      rects: f,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = C ?? u, d = y ?? d, v = {
      ...v,
      [x]: {
        ...v[x],
        ...w
      }
    }, N && b <= 50 && (b++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (f = N.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : N.rects), {
      x: u,
      y: d
    } = wo(f, p, l)), h = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: s,
    middlewareData: v
  };
};
async function Vt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: s,
    platform: a,
    rects: i,
    elements: c,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = Ve(t, e), b = ta(v), x = c[p ? d === "floating" ? "reference" : "floating" : d], g = hr(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(x))) == null || r ? x : x.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: l
  })), C = d === "floating" ? {
    x: n,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), w = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = hr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: C,
    offsetParent: y,
    strategy: l
  }) : C);
  return {
    top: (g.top - N.top + b.top) / w.y,
    bottom: (N.bottom - g.bottom + b.bottom) / w.y,
    left: (g.left - N.left + b.left) / w.x,
    right: (N.right - g.right + b.right) / w.x
  };
}
const pd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: s,
      rects: a,
      platform: i,
      elements: c,
      middlewareData: l
    } = t, {
      element: f,
      padding: u = 0
    } = Ve(e, t) || {};
    if (f == null)
      return {};
    const d = ta(u), p = {
      x: r,
      y: n
    }, v = Ln(s), b = On(v), h = await i.getDimensions(f), x = v === "y", g = x ? "top" : "left", C = x ? "bottom" : "right", y = x ? "clientHeight" : "clientWidth", w = a.reference[b] + a.reference[v] - p[v] - a.floating[b], N = p[v] - a.reference[v], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(f));
    let M = A ? A[y] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(A))) && (M = c.floating[y] || a.floating[b]);
    const j = w / 2 - N / 2, _ = M / 2 - h[b] / 2 - 1, D = Ze(d[g], _), k = Ze(d[C], _), T = D, O = M - h[b] - k, F = M / 2 - h[b] / 2 + j, z = ln(T, F, O), P = !l.arrow && Rt(s) != null && F !== z && a.reference[b] / 2 - (F < T ? D : k) - h[b] / 2 < 0, V = P ? F < T ? F - T : F - O : 0;
    return {
      [v]: p[v] + V,
      data: {
        [v]: z,
        centerOffset: F - z - V,
        ...P && {
          alignmentOffset: V
        }
      },
      reset: P
    };
  }
}), hd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        middlewareData: a,
        rects: i,
        initialPlacement: c,
        platform: l,
        elements: f
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: h = !0,
        ...x
      } = Ve(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const g = Be(s), C = ze(c), y = Be(c) === c, w = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), N = p || (y || !h ? [pr(c)] : ld(c)), A = b !== "none";
      !p && A && N.push(...dd(c, h, b, w));
      const M = [c, ...N], j = await Vt(t, x), _ = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (u && _.push(j[g]), d) {
        const z = cd(s, i, w);
        _.push(j[z[0]], j[z[1]]);
      }
      if (D = [...D, {
        placement: s,
        overflows: _
      }], !_.every((z) => z <= 0)) {
        var k, T;
        const z = (((k = a.flip) == null ? void 0 : k.index) || 0) + 1, P = M[z];
        if (P) {
          var O;
          const S = d === "alignment" ? C !== ze(P) : !1, I = ((O = D[0]) == null ? void 0 : O.overflows[0]) > 0;
          if (!S || I)
            return {
              data: {
                index: z,
                overflows: D
              },
              reset: {
                placement: P
              }
            };
        }
        let V = (T = D.filter((S) => S.overflows[0] <= 0).sort((S, I) => S.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!V)
          switch (v) {
            case "bestFit": {
              var F;
              const S = (F = D.filter((I) => {
                if (A) {
                  const E = ze(I.placement);
                  return E === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  E === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((E) => E > 0).reduce((E, B) => E + B, 0)]).sort((I, E) => I[1] - E[1])[0]) == null ? void 0 : F[0];
              S && (V = S);
              break;
            }
            case "initialPlacement":
              V = c;
              break;
          }
        if (s !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Co(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function No(e) {
  return sd.some((t) => e[t] >= 0);
}
const gd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...s
      } = Ve(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await Vt(t, {
            ...s,
            elementContext: "reference"
          }), i = Co(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: No(i)
            }
          };
        }
        case "escaped": {
          const a = await Vt(t, {
            ...s,
            altBoundary: !0
          }), i = Co(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: No(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function vd(e, t) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), i = Be(r), c = Rt(r), l = ze(r) === "y", f = ["left", "top"].includes(i) ? -1 : 1, u = a && l ? -1 : 1, d = Ve(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: b
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof b == "number" && (v = c === "end" ? b * -1 : b), l ? {
    x: v * u,
    y: p * f
  } : {
    x: p * f,
    y: v * u
  };
}
const xd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: s,
        y: a,
        placement: i,
        middlewareData: c
      } = t, l = await vd(t, e);
      return i === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: s + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, yd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (x) => {
            let {
              x: g,
              y: C
            } = x;
            return {
              x: g,
              y: C
            };
          }
        },
        ...l
      } = Ve(e, t), f = {
        x: r,
        y: n
      }, u = await Vt(t, l), d = ze(Be(s)), p = Dn(d);
      let v = f[p], b = f[d];
      if (a) {
        const x = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", C = v + u[x], y = v - u[g];
        v = ln(C, v, y);
      }
      if (i) {
        const x = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", C = b + u[x], y = b - u[g];
        b = ln(C, b, y);
      }
      const h = c.fn({
        ...t,
        [p]: v,
        [d]: b
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n,
          enabled: {
            [p]: a,
            [d]: i
          }
        }
      };
    }
  };
}, bd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: s,
        rects: a,
        middlewareData: i
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Ve(e, t), u = {
        x: r,
        y: n
      }, d = ze(s), p = Dn(d);
      let v = u[p], b = u[d];
      const h = Ve(c, t), x = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const y = p === "y" ? "height" : "width", w = a.reference[p] - a.floating[y] + x.mainAxis, N = a.reference[p] + a.reference[y] - x.mainAxis;
        v < w ? v = w : v > N && (v = N);
      }
      if (f) {
        var g, C;
        const y = p === "y" ? "width" : "height", w = ["top", "left"].includes(Be(s)), N = a.reference[d] - a.floating[y] + (w && ((g = i.offset) == null ? void 0 : g[d]) || 0) + (w ? 0 : x.crossAxis), A = a.reference[d] + a.reference[y] + (w ? 0 : ((C = i.offset) == null ? void 0 : C[d]) || 0) - (w ? x.crossAxis : 0);
        b < N ? b = N : b > A && (b = A);
      }
      return {
        [p]: v,
        [d]: b
      };
    }
  };
}, wd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        rects: a,
        platform: i,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Ve(e, t), u = await Vt(t, f), d = Be(s), p = Rt(s), v = ze(s) === "y", {
        width: b,
        height: h
      } = a.floating;
      let x, g;
      d === "top" || d === "bottom" ? (x = d, g = p === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = d, x = p === "end" ? "top" : "bottom");
      const C = h - u.top - u.bottom, y = b - u.left - u.right, w = Ze(h - u[x], C), N = Ze(b - u[g], y), A = !t.middlewareData.shift;
      let M = w, j = N;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (j = y), (n = t.middlewareData.shift) != null && n.enabled.y && (M = C), A && !p) {
        const D = we(u.left, 0), k = we(u.right, 0), T = we(u.top, 0), O = we(u.bottom, 0);
        v ? j = b - 2 * (D !== 0 || k !== 0 ? D + k : we(u.left, u.right)) : M = h - 2 * (T !== 0 || O !== 0 ? T + O : we(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: j,
        availableHeight: M
      });
      const _ = await i.getDimensions(c.floating);
      return b !== _.width || h !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function jr() {
  return typeof window < "u";
}
function St(e) {
  return ra(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Le(e) {
  var t;
  return (t = (ra(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ra(e) {
  return jr() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Se(e) {
  return jr() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function Oe(e) {
  return jr() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function ko(e) {
  return !jr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function Kt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: s
  } = Te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(s);
}
function Cd(e) {
  return ["table", "td", "th"].includes(St(e));
}
function Rr(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Fn(e) {
  const t = zn(), r = Se(e) ? Te(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Nd(e) {
  let t = Je(e);
  for (; Oe(t) && !wt(t); ) {
    if (Fn(t))
      return t;
    if (Rr(t))
      return null;
    t = Je(t);
  }
  return null;
}
function zn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wt(e) {
  return ["html", "body", "#document"].includes(St(e));
}
function Te(e) {
  return Ne(e).getComputedStyle(e);
}
function Sr(e) {
  return Se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Je(e) {
  if (St(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ko(e) && e.host || // Fallback.
    Le(e)
  );
  return ko(t) ? t.host : t;
}
function na(e) {
  const t = Je(e);
  return wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && Kt(t) ? t : na(t);
}
function Bt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = na(e), a = s === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ne(s);
  if (a) {
    const c = dn(i);
    return t.concat(i, i.visualViewport || [], Kt(s) ? s : [], c && r ? Bt(c) : []);
  }
  return t.concat(s, Bt(s, [], r));
}
function dn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function oa(e) {
  const t = Te(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const s = Oe(e), a = s ? e.offsetWidth : r, i = s ? e.offsetHeight : n, c = mr(r) !== a || mr(n) !== i;
  return c && (r = a, n = i), {
    width: r,
    height: n,
    $: c
  };
}
function Vn(e) {
  return Se(e) ? e : e.contextElement;
}
function xt(e) {
  const t = Vn(e);
  if (!Oe(t))
    return Ie(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: s,
    $: a
  } = oa(t);
  let i = (a ? mr(r.width) : r.width) / n, c = (a ? mr(r.height) : r.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const kd = /* @__PURE__ */ Ie(0);
function sa(e) {
  const t = Ne(e);
  return !zn() || !t.visualViewport ? kd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ed(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ne(e) ? !1 : t;
}
function ct(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), a = Vn(e);
  let i = Ie(1);
  t && (n ? Se(n) && (i = xt(n)) : i = xt(e));
  const c = Ed(a, r, n) ? sa(a) : Ie(0);
  let l = (s.left + c.x) / i.x, f = (s.top + c.y) / i.y, u = s.width / i.x, d = s.height / i.y;
  if (a) {
    const p = Ne(a), v = n && Se(n) ? Ne(n) : n;
    let b = p, h = dn(b);
    for (; h && n && v !== b; ) {
      const x = xt(h), g = h.getBoundingClientRect(), C = Te(h), y = g.left + (h.clientLeft + parseFloat(C.paddingLeft)) * x.x, w = g.top + (h.clientTop + parseFloat(C.paddingTop)) * x.y;
      l *= x.x, f *= x.y, u *= x.x, d *= x.y, l += y, f += w, b = Ne(h), h = dn(b);
    }
  }
  return hr({
    width: u,
    height: d,
    x: l,
    y: f
  });
}
function Bn(e, t) {
  const r = Sr(e).scrollLeft;
  return t ? t.left + r : ct(Le(e)).left + r;
}
function aa(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Bn(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: s,
    y: a
  };
}
function jd(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: s
  } = e;
  const a = s === "fixed", i = Le(n), c = t ? Rr(t.floating) : !1;
  if (n === i || c && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Ie(1);
  const u = Ie(0), d = Oe(n);
  if ((d || !d && !a) && ((St(n) !== "body" || Kt(i)) && (l = Sr(n)), Oe(n))) {
    const v = ct(n);
    f = xt(n), u.x = v.x + n.clientLeft, u.y = v.y + n.clientTop;
  }
  const p = i && !d && !a ? aa(i, l, !0) : Ie(0);
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + u.x + p.x,
    y: r.y * f.y - l.scrollTop * f.y + u.y + p.y
  };
}
function Rd(e) {
  return Array.from(e.getClientRects());
}
function Sd(e) {
  const t = Le(e), r = Sr(e), n = e.ownerDocument.body, s = we(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = we(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + Bn(e);
  const c = -r.scrollTop;
  return Te(n).direction === "rtl" && (i += we(t.clientWidth, n.clientWidth) - s), {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
function Td(e, t) {
  const r = Ne(e), n = Le(e), s = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, c = 0, l = 0;
  if (s) {
    a = s.width, i = s.height;
    const f = zn();
    (!f || f && t === "fixed") && (c = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function Md(e, t) {
  const r = ct(e, !0, t === "fixed"), n = r.top + e.clientTop, s = r.left + e.clientLeft, a = Oe(e) ? xt(e) : Ie(1), i = e.clientWidth * a.x, c = e.clientHeight * a.y, l = s * a.x, f = n * a.y;
  return {
    width: i,
    height: c,
    x: l,
    y: f
  };
}
function Eo(e, t, r) {
  let n;
  if (t === "viewport")
    n = Td(e, r);
  else if (t === "document")
    n = Sd(Le(e));
  else if (Se(t))
    n = Md(t, r);
  else {
    const s = sa(e);
    n = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return hr(n);
}
function ia(e, t) {
  const r = Je(e);
  return r === t || !Se(r) || wt(r) ? !1 : Te(r).position === "fixed" || ia(r, t);
}
function Ad(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Bt(e, [], !1).filter((c) => Se(c) && St(c) !== "body"), s = null;
  const a = Te(e).position === "fixed";
  let i = a ? Je(e) : e;
  for (; Se(i) && !wt(i); ) {
    const c = Te(i), l = Fn(i);
    !l && c.position === "fixed" && (s = null), (a ? !l && !s : !l && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Kt(i) && !l && ia(e, i)) ? n = n.filter((u) => u !== i) : s = c, i = Je(i);
  }
  return t.set(e, n), n;
}
function Pd(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = e;
  const i = [...r === "clippingAncestors" ? Rr(t) ? [] : Ad(t, this._c) : [].concat(r), n], c = i[0], l = i.reduce((f, u) => {
    const d = Eo(t, u, s);
    return f.top = we(d.top, f.top), f.right = Ze(d.right, f.right), f.bottom = Ze(d.bottom, f.bottom), f.left = we(d.left, f.left), f;
  }, Eo(t, c, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _d(e) {
  const {
    width: t,
    height: r
  } = oa(e);
  return {
    width: t,
    height: r
  };
}
function Id(e, t, r) {
  const n = Oe(t), s = Le(t), a = r === "fixed", i = ct(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ie(0);
  function f() {
    l.x = Bn(s);
  }
  if (n || !n && !a)
    if ((St(t) !== "body" || Kt(s)) && (c = Sr(t)), n) {
      const v = ct(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else s && f();
  a && !n && s && f();
  const u = s && !n && !a ? aa(s, c) : Ie(0), d = i.left + c.scrollLeft - l.x - u.x, p = i.top + c.scrollTop - l.y - u.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Ur(e) {
  return Te(e).position === "static";
}
function jo(e, t) {
  if (!Oe(e) || Te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Le(e) === r && (r = r.ownerDocument.body), r;
}
function ca(e, t) {
  const r = Ne(e);
  if (Rr(e))
    return r;
  if (!Oe(e)) {
    let s = Je(e);
    for (; s && !wt(s); ) {
      if (Se(s) && !Ur(s))
        return s;
      s = Je(s);
    }
    return r;
  }
  let n = jo(e, t);
  for (; n && Cd(n) && Ur(n); )
    n = jo(n, t);
  return n && wt(n) && Ur(n) && !Fn(n) ? r : n || Nd(e) || r;
}
const Dd = async function(e) {
  const t = this.getOffsetParent || ca, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Id(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Od(e) {
  return Te(e).direction === "rtl";
}
const Ld = {
  convertOffsetParentRelativeRectToViewportRelativeRect: jd,
  getDocumentElement: Le,
  getClippingRect: Pd,
  getOffsetParent: ca,
  getElementRects: Dd,
  getClientRects: Rd,
  getDimensions: _d,
  getScale: xt,
  isElement: Se,
  isRTL: Od
};
function la(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fd(e, t) {
  let r = null, n;
  const s = Le(e);
  function a() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function i(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const f = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: p,
      height: v
    } = f;
    if (c || t(), !p || !v)
      return;
    const b = rr(d), h = rr(s.clientWidth - (u + p)), x = rr(s.clientHeight - (d + v)), g = rr(u), y = {
      rootMargin: -b + "px " + -h + "px " + -x + "px " + -g + "px",
      threshold: we(0, Ze(1, l)) || 1
    };
    let w = !0;
    function N(A) {
      const M = A[0].intersectionRatio;
      if (M !== l) {
        if (!w)
          return i();
        M ? i(!1, M) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !la(f, e.getBoundingClientRect()) && i(), w = !1;
    }
    try {
      r = new IntersectionObserver(N, {
        ...y,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(N, y);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function zd(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = Vn(e), u = s || a ? [...f ? Bt(f) : [], ...Bt(t)] : [];
  u.forEach((g) => {
    s && g.addEventListener("scroll", r, {
      passive: !0
    }), a && g.addEventListener("resize", r);
  });
  const d = f && c ? Fd(f, r) : null;
  let p = -1, v = null;
  i && (v = new ResizeObserver((g) => {
    let [C] = g;
    C && C.target === f && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = v) == null || y.observe(t);
    })), r();
  }), f && !l && v.observe(f), v.observe(t));
  let b, h = l ? ct(e) : null;
  l && x();
  function x() {
    const g = ct(e);
    h && !la(h, g) && r(), h = g, b = requestAnimationFrame(x);
  }
  return r(), () => {
    var g;
    u.forEach((C) => {
      s && C.removeEventListener("scroll", r), a && C.removeEventListener("resize", r);
    }), d == null || d(), (g = v) == null || g.disconnect(), v = null, l && cancelAnimationFrame(b);
  };
}
const Vd = xd, Bd = yd, $d = hd, Wd = wd, Ud = gd, Ro = pd, Hd = bd, Gd = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Ld,
    ...r
  }, a = {
    ...s.platform,
    _c: n
  };
  return md(e, t, {
    ...s,
    platform: a
  });
};
var lr = typeof document < "u" ? gc : Xe;
function gr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!gr(e[n], t[n]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = s[n];
      if (!(a === "_owner" && e.$$typeof) && !gr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ua(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function So(e, t) {
  const r = ua(e);
  return Math.round(t * r) / r;
}
function Hr(e) {
  const t = m.useRef(e);
  return lr(() => {
    t.current = e;
  }), t;
}
function Kd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: s,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: f
  } = e, [u, d] = m.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = m.useState(n);
  gr(p, n) || v(n);
  const [b, h] = m.useState(null), [x, g] = m.useState(null), C = m.useCallback((S) => {
    S !== A.current && (A.current = S, h(S));
  }, []), y = m.useCallback((S) => {
    S !== M.current && (M.current = S, g(S));
  }, []), w = a || b, N = i || x, A = m.useRef(null), M = m.useRef(null), j = m.useRef(u), _ = l != null, D = Hr(l), k = Hr(s), T = Hr(f), O = m.useCallback(() => {
    if (!A.current || !M.current)
      return;
    const S = {
      placement: t,
      strategy: r,
      middleware: p
    };
    k.current && (S.platform = k.current), Gd(A.current, M.current, S).then((I) => {
      const E = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      F.current && !gr(j.current, E) && (j.current = E, br.flushSync(() => {
        d(E);
      }));
    });
  }, [p, t, r, k, T]);
  lr(() => {
    f === !1 && j.current.isPositioned && (j.current.isPositioned = !1, d((S) => ({
      ...S,
      isPositioned: !1
    })));
  }, [f]);
  const F = m.useRef(!1);
  lr(() => (F.current = !0, () => {
    F.current = !1;
  }), []), lr(() => {
    if (w && (A.current = w), N && (M.current = N), w && N) {
      if (D.current)
        return D.current(w, N, O);
      O();
    }
  }, [w, N, O, D, _]);
  const z = m.useMemo(() => ({
    reference: A,
    floating: M,
    setReference: C,
    setFloating: y
  }), [C, y]), P = m.useMemo(() => ({
    reference: w,
    floating: N
  }), [w, N]), V = m.useMemo(() => {
    const S = {
      position: r,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return S;
    const I = So(P.floating, u.x), E = So(P.floating, u.y);
    return c ? {
      ...S,
      transform: "translate(" + I + "px, " + E + "px)",
      ...ua(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: I,
      top: E
    };
  }, [r, c, P.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: O,
    refs: z,
    elements: P,
    floatingStyles: V
  }), [u, O, z, P, V]);
}
const qd = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: s
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Ro({
        element: n.current,
        padding: s
      }).fn(r) : {} : n ? Ro({
        element: n,
        padding: s
      }).fn(r) : {};
    }
  };
}, Yd = (e, t) => ({
  ...Vd(e),
  options: [e, t]
}), Xd = (e, t) => ({
  ...Bd(e),
  options: [e, t]
}), Zd = (e, t) => ({
  ...Hd(e),
  options: [e, t]
}), Jd = (e, t) => ({
  ...$d(e),
  options: [e, t]
}), Qd = (e, t) => ({
  ...Wd(e),
  options: [e, t]
}), ef = (e, t) => ({
  ...Ud(e),
  options: [e, t]
}), tf = (e, t) => ({
  ...qd(e),
  options: [e, t]
});
var rf = "Arrow", da = m.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: s = 5, ...a } = e;
  return /* @__PURE__ */ o.jsx(
    Y.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ o.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
da.displayName = rf;
var nf = da, $n = "Popper", [fa, Tr] = $e($n), [of, ma] = fa($n), pa = (e) => {
  const { __scopePopper: t, children: r } = e, [n, s] = m.useState(null);
  return /* @__PURE__ */ o.jsx(of, { scope: t, anchor: n, onAnchorChange: s, children: r });
};
pa.displayName = $n;
var ha = "PopperAnchor", ga = m.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e, a = ma(ha, r), i = m.useRef(null), c = ne(t, i);
    return m.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ o.jsx(Y.div, { ...s, ref: c });
  }
);
ga.displayName = ha;
var Wn = "PopperContent", [sf, af] = fa(Wn), va = m.forwardRef(
  (e, t) => {
    var L, H, Z, J, te, re;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: b,
      ...h
    } = e, x = ma(Wn, r), [g, C] = m.useState(null), y = ne(t, (be) => C(be)), [w, N] = m.useState(null), A = Mn(w), M = (A == null ? void 0 : A.width) ?? 0, j = (A == null ? void 0 : A.height) ?? 0, _ = n + (a !== "center" ? "-" + a : ""), D = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, k = Array.isArray(f) ? f : [f], T = k.length > 0, O = {
      padding: D,
      boundary: k.filter(lf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: F, floatingStyles: z, placement: P, isPositioned: V, middlewareData: S } = Kd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...be) => zd(...be, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Yd({ mainAxis: s + j, alignmentAxis: i }),
        l && Xd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Zd() : void 0,
          ...O
        }),
        l && Jd({ ...O }),
        Qd({
          ...O,
          apply: ({ elements: be, rects: Me, availableWidth: Mt, availableHeight: At }) => {
            const { width: Pt, height: hc } = Me.reference, Xt = be.floating.style;
            Xt.setProperty("--radix-popper-available-width", `${Mt}px`), Xt.setProperty("--radix-popper-available-height", `${At}px`), Xt.setProperty("--radix-popper-anchor-width", `${Pt}px`), Xt.setProperty("--radix-popper-anchor-height", `${hc}px`);
          }
        }),
        w && tf({ element: w, padding: c }),
        uf({ arrowWidth: M, arrowHeight: j }),
        p && ef({ strategy: "referenceHidden", ...O })
      ]
    }), [I, E] = ba(P), B = De(b);
    le(() => {
      V && (B == null || B());
    }, [V, B]);
    const K = (L = S.arrow) == null ? void 0 : L.x, q = (H = S.arrow) == null ? void 0 : H.y, Q = ((Z = S.arrow) == null ? void 0 : Z.centerOffset) !== 0, [se, ae] = m.useState();
    return le(() => {
      g && ae(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: V ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: se,
          "--radix-popper-transform-origin": [
            (J = S.transformOrigin) == null ? void 0 : J.x,
            (te = S.transformOrigin) == null ? void 0 : te.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((re = S.hide) == null ? void 0 : re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ o.jsx(
          sf,
          {
            scope: r,
            placedSide: I,
            onArrowChange: N,
            arrowX: K,
            arrowY: q,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ o.jsx(
              Y.div,
              {
                "data-side": I,
                "data-align": E,
                ...h,
                ref: y,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: V ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
va.displayName = Wn;
var xa = "PopperArrow", cf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ya = m.forwardRef(function(t, r) {
  const { __scopePopper: n, ...s } = t, a = af(xa, n), i = cf[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ o.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ o.jsx(
          nf,
          {
            ...s,
            ref: r,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ya.displayName = xa;
function lf(e) {
  return e !== null;
}
var uf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, g, C;
    const { placement: r, rects: n, middlewareData: s } = t, i = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [f, u] = ba(r), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + c / 2, v = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + l / 2;
    let b = "", h = "";
    return f === "bottom" ? (b = i ? d : `${p}px`, h = `${-l}px`) : f === "top" ? (b = i ? d : `${p}px`, h = `${n.floating.height + l}px`) : f === "right" ? (b = `${-l}px`, h = i ? d : `${v}px`) : f === "left" && (b = `${n.floating.width + l}px`, h = i ? d : `${v}px`), { data: { x: b, y: h } };
  }
});
function ba(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var wa = pa, Ca = ga, Na = va, ka = ya, df = "Portal", Un = m.forwardRef((e, t) => {
  var c;
  const { container: r, ...n } = e, [s, a] = m.useState(!1);
  le(() => a(!0), []);
  const i = r || s && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return i ? yc.createPortal(/* @__PURE__ */ o.jsx(Y.div, { ...n, ref: t }), i) : null;
});
Un.displayName = df;
var Ea = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), ff = "VisuallyHidden", mf = m.forwardRef(
  (e, t) => /* @__PURE__ */ o.jsx(
    Y.span,
    {
      ...e,
      ref: t,
      style: { ...Ea, ...e.style }
    }
  )
);
mf.displayName = ff;
var pf = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ht = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = {}, Gr = 0, ja = function(e) {
  return e && (e.host || ja(e.parentNode));
}, hf = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = ja(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, gf = function(e, t, r, n) {
  var s = hf(t, Array.isArray(e) ? e : [e]);
  or[r] || (or[r] = /* @__PURE__ */ new WeakMap());
  var a = or[r], i = [], c = /* @__PURE__ */ new Set(), l = new Set(s), f = function(d) {
    !d || c.has(d) || (c.add(d), f(d.parentNode));
  };
  s.forEach(f);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (c.has(p))
        u(p);
      else
        try {
          var v = p.getAttribute(n), b = v !== null && v !== "false", h = (ht.get(p) || 0) + 1, x = (a.get(p) || 0) + 1;
          ht.set(p, h), a.set(p, x), i.push(p), h === 1 && b && nr.set(p, !0), x === 1 && p.setAttribute(r, "true"), b || p.setAttribute(n, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", p, g);
        }
    });
  };
  return u(t), c.clear(), Gr++, function() {
    i.forEach(function(d) {
      var p = ht.get(d) - 1, v = a.get(d) - 1;
      ht.set(d, p), a.set(d, v), p || (nr.has(d) || d.removeAttribute(n), nr.delete(d)), v || d.removeAttribute(r);
    }), Gr--, Gr || (ht = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = {});
  };
}, Ra = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = pf(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), gf(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, _e = function() {
  return _e = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, _e.apply(this, arguments);
};
function Sa(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function vf(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, a; n < s; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ur = "right-scroll-bar-position", dr = "width-before-scroll-bar", xf = "with-scroll-bars-hidden", yf = "--removed-body-scroll-bar-size";
function Kr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bf(e, t) {
  var r = ye(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && (r.value = n, r.callback(n, s));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var wf = typeof window < "u" ? m.useLayoutEffect : m.useEffect, To = /* @__PURE__ */ new WeakMap();
function Cf(e, t) {
  var r = bf(null, function(n) {
    return e.forEach(function(s) {
      return Kr(s, n);
    });
  });
  return wf(function() {
    var n = To.get(r);
    if (n) {
      var s = new Set(n), a = new Set(e), i = r.current;
      s.forEach(function(c) {
        a.has(c) || Kr(c, null);
      }), a.forEach(function(c) {
        s.has(c) || Kr(c, i);
      });
    }
    To.set(r, e);
  }, [e]), r;
}
function Nf(e) {
  return e;
}
function kf(e, t) {
  t === void 0 && (t = Nf);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(c) {
          return c !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(a), i = r;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(a);
      }, f = function() {
        return Promise.resolve().then(l);
      };
      f(), r = {
        push: function(u) {
          i.push(u), f();
        },
        filter: function(u) {
          return i = i.filter(u), r;
        }
      };
    }
  };
  return s;
}
function Ef(e) {
  e === void 0 && (e = {});
  var t = kf(null);
  return t.options = _e({ async: !0, ssr: !1 }, e), t;
}
var Ta = function(e) {
  var t = e.sideCar, r = Sa(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return m.createElement(n, _e({}, r));
};
Ta.isSideCarExport = !0;
function jf(e, t) {
  return e.useMedium(t), Ta;
}
var Ma = Ef(), qr = function() {
}, Mr = m.forwardRef(function(e, t) {
  var r = m.useRef(null), n = m.useState({
    onScrollCapture: qr,
    onWheelCapture: qr,
    onTouchMoveCapture: qr
  }), s = n[0], a = n[1], i = e.forwardProps, c = e.children, l = e.className, f = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, v = e.noIsolation, b = e.inert, h = e.allowPinchZoom, x = e.as, g = x === void 0 ? "div" : x, C = e.gapMode, y = Sa(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = p, N = Cf([r, t]), A = _e(_e({}, y), s);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(w, { sideCar: Ma, removeScrollBar: f, shards: d, noIsolation: v, inert: b, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: C }),
    i ? m.cloneElement(m.Children.only(c), _e(_e({}, A), { ref: N })) : m.createElement(g, _e({}, A, { className: l, ref: N }), c)
  );
});
Mr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mr.classNames = {
  fullWidth: dr,
  zeroRight: ur
};
var Rf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Sf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Rf();
  return t && e.setAttribute("nonce", t), e;
}
function Tf(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Mf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Af = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Sf()) && (Tf(t, r), Mf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Pf = function() {
  var e = Af();
  return function(t, r) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Aa = function() {
  var e = Pf(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, _f = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Yr = function(e) {
  return parseInt(e || "", 10) || 0;
}, If = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Yr(r), Yr(n), Yr(s)];
}, Df = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return _f;
  var t = If(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Of = Aa(), yt = "data-scroll-locked", Lf = function(e, t, r, n) {
  var s = e.left, a = e.top, i = e.right, c = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(xf, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(c, "px ").concat(n, `;
  }
  body[`).concat(yt, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ur, ` {
    right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(dr, ` {
    margin-right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(ur, " .").concat(ur, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(dr, " .").concat(dr, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(yt, `] {
    `).concat(yf, ": ").concat(c, `px;
  }
`);
}, Mo = function() {
  var e = parseInt(document.body.getAttribute(yt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ff = function() {
  m.useEffect(function() {
    return document.body.setAttribute(yt, (Mo() + 1).toString()), function() {
      var e = Mo() - 1;
      e <= 0 ? document.body.removeAttribute(yt) : document.body.setAttribute(yt, e.toString());
    };
  }, []);
}, zf = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n;
  Ff();
  var a = m.useMemo(function() {
    return Df(s);
  }, [s]);
  return m.createElement(Of, { styles: Lf(a, !t, s, r ? "" : "!important") });
}, fn = !1;
if (typeof window < "u")
  try {
    var sr = Object.defineProperty({}, "passive", {
      get: function() {
        return fn = !0, !0;
      }
    });
    window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    fn = !1;
  }
var gt = fn ? { passive: !1 } : !1, Vf = function(e) {
  return e.tagName === "TEXTAREA";
}, Pa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Vf(e) && r[t] === "visible")
  );
}, Bf = function(e) {
  return Pa(e, "overflowY");
}, $f = function(e) {
  return Pa(e, "overflowX");
}, Ao = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var s = _a(e, n);
    if (s) {
      var a = Ia(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Wf = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Uf = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, _a = function(e, t) {
  return e === "v" ? Bf(t) : $f(t);
}, Ia = function(e, t) {
  return e === "v" ? Wf(t) : Uf(t);
}, Hf = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Gf = function(e, t, r, n, s) {
  var a = Hf(e, window.getComputedStyle(t).direction), i = a * n, c = r.target, l = t.contains(c), f = !1, u = i > 0, d = 0, p = 0;
  do {
    var v = Ia(e, c), b = v[0], h = v[1], x = v[2], g = h - x - a * b;
    (b || g) && _a(e, c) && (d += g, p += b), c instanceof ShadowRoot ? c = c.host : c = c.parentNode;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(p) < 1) && (f = !0), f;
}, ar = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Po = function(e) {
  return [e.deltaX, e.deltaY];
}, _o = function(e) {
  return e && "current" in e ? e.current : e;
}, Kf = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, qf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Yf = 0, vt = [];
function Xf(e) {
  var t = m.useRef([]), r = m.useRef([0, 0]), n = m.useRef(), s = m.useState(Yf++)[0], a = m.useState(Aa)[0], i = m.useRef(e);
  m.useEffect(function() {
    i.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var h = vf([e.lockRef.current], (e.shards || []).map(_o), !0).filter(Boolean);
      return h.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), h.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = m.useCallback(function(h, x) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var g = ar(h), C = r.current, y = "deltaX" in h ? h.deltaX : C[0] - g[0], w = "deltaY" in h ? h.deltaY : C[1] - g[1], N, A = h.target, M = Math.abs(y) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && M === "h" && A.type === "range")
      return !1;
    var j = Ao(M, A);
    if (!j)
      return !0;
    if (j ? N = M : (N = M === "v" ? "h" : "v", j = Ao(M, A)), !j)
      return !1;
    if (!n.current && "changedTouches" in h && (y || w) && (n.current = N), !N)
      return !0;
    var _ = n.current || N;
    return Gf(_, x, h, _ === "h" ? y : w);
  }, []), l = m.useCallback(function(h) {
    var x = h;
    if (!(!vt.length || vt[vt.length - 1] !== a)) {
      var g = "deltaY" in x ? Po(x) : ar(x), C = t.current.filter(function(N) {
        return N.name === x.type && (N.target === x.target || x.target === N.shadowParent) && Kf(N.delta, g);
      })[0];
      if (C && C.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!C) {
        var y = (i.current.shards || []).map(_o).filter(Boolean).filter(function(N) {
          return N.contains(x.target);
        }), w = y.length > 0 ? c(x, y[0]) : !i.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), f = m.useCallback(function(h, x, g, C) {
    var y = { name: h, delta: x, target: g, should: C, shadowParent: Zf(g) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(h) {
    r.current = ar(h), n.current = void 0;
  }, []), d = m.useCallback(function(h) {
    f(h.type, Po(h), h.target, c(h, e.lockRef.current));
  }, []), p = m.useCallback(function(h) {
    f(h.type, ar(h), h.target, c(h, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return vt.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, gt), document.addEventListener("touchmove", l, gt), document.addEventListener("touchstart", u, gt), function() {
      vt = vt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, gt), document.removeEventListener("touchmove", l, gt), document.removeEventListener("touchstart", u, gt);
    };
  }, []);
  var v = e.removeScrollBar, b = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    b ? m.createElement(a, { styles: qf(s) }) : null,
    v ? m.createElement(zf, { gapMode: e.gapMode }) : null
  );
}
function Zf(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Jf = jf(Ma, Xf);
var Hn = m.forwardRef(function(e, t) {
  return m.createElement(Mr, _e({}, e, { ref: t, sideCar: Jf }));
});
Hn.classNames = Mr.classNames;
var Qf = [" ", "Enter", "ArrowUp", "ArrowDown"], em = [" ", "Enter"], lt = "Select", [Ar, Pr, tm] = wr(lt), [Tt, zh] = $e(lt, [
  tm,
  Tr
]), _r = Tr(), [rm, Qe] = Tt(lt), [nm, om] = Tt(lt), Da = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: a,
    value: i,
    defaultValue: c,
    onValueChange: l,
    dir: f,
    name: u,
    autoComplete: d,
    disabled: p,
    required: v,
    form: b
  } = e, h = _r(t), [x, g] = m.useState(null), [C, y] = m.useState(null), [w, N] = m.useState(!1), A = Ht(f), [M, j] = it({
    prop: n,
    defaultProp: s ?? !1,
    onChange: a,
    caller: lt
  }), [_, D] = it({
    prop: i,
    defaultProp: c,
    onChange: l,
    caller: lt
  }), k = m.useRef(null), T = x ? b || !!x.closest("form") : !0, [O, F] = m.useState(/* @__PURE__ */ new Set()), z = Array.from(O).map((P) => P.props.value).join(";");
  return /* @__PURE__ */ o.jsx(wa, { ...h, children: /* @__PURE__ */ o.jsxs(
    rm,
    {
      required: v,
      scope: t,
      trigger: x,
      onTriggerChange: g,
      valueNode: C,
      onValueNodeChange: y,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: N,
      contentId: at(),
      value: _,
      onValueChange: D,
      open: M,
      onOpenChange: j,
      dir: A,
      triggerPointerDownPosRef: k,
      disabled: p,
      children: [
        /* @__PURE__ */ o.jsx(Ar.Provider, { scope: t, children: /* @__PURE__ */ o.jsx(
          nm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((P) => {
              F((V) => new Set(V).add(P));
            }, []),
            onNativeOptionRemove: m.useCallback((P) => {
              F((V) => {
                const S = new Set(V);
                return S.delete(P), S;
              });
            }, []),
            children: r
          }
        ) }),
        T ? /* @__PURE__ */ o.jsxs(
          si,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: u,
            autoComplete: d,
            value: _,
            onChange: (P) => D(P.target.value),
            disabled: p,
            form: b,
            children: [
              _ === void 0 ? /* @__PURE__ */ o.jsx("option", { value: "" }) : null,
              Array.from(O)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
Da.displayName = lt;
var Oa = "SelectTrigger", La = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...s } = e, a = _r(r), i = Qe(Oa, r), c = i.disabled || n, l = ne(t, i.onTriggerChange), f = Pr(r), u = m.useRef("touch"), [d, p, v] = ii((h) => {
      const x = f().filter((y) => !y.disabled), g = x.find((y) => y.value === i.value), C = ci(x, h, g);
      C !== void 0 && i.onValueChange(C.value);
    }), b = (h) => {
      c || (i.onOpenChange(!0), v()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ o.jsx(Ca, { asChild: !0, ...a, children: /* @__PURE__ */ o.jsx(
      Y.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": ai(i.value) ? "" : void 0,
        ...s,
        ref: l,
        onClick: U(s.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && b(h);
        }),
        onPointerDown: U(s.onPointerDown, (h) => {
          u.current = h.pointerType;
          const x = h.target;
          x.hasPointerCapture(h.pointerId) && x.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (b(h), h.preventDefault());
        }),
        onKeyDown: U(s.onKeyDown, (h) => {
          const x = d.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(x && h.key === " ") && Qf.includes(h.key) && (b(), h.preventDefault());
        })
      }
    ) });
  }
);
La.displayName = Oa;
var Fa = "SelectValue", za = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, children: a, placeholder: i = "", ...c } = e, l = Qe(Fa, r), { onValueNodeHasChildrenChange: f } = l, u = a !== void 0, d = ne(t, l.onValueNodeChange);
    return le(() => {
      f(u);
    }, [f, u]), /* @__PURE__ */ o.jsx(
      Y.span,
      {
        ...c,
        ref: d,
        style: { pointerEvents: "none" },
        children: ai(l.value) ? /* @__PURE__ */ o.jsx(o.Fragment, { children: i }) : a
      }
    );
  }
);
za.displayName = Fa;
var sm = "SelectIcon", Va = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...s } = e;
    return /* @__PURE__ */ o.jsx(Y.span, { "aria-hidden": !0, ...s, ref: t, children: n || "▼" });
  }
);
Va.displayName = sm;
var am = "SelectPortal", Ba = (e) => /* @__PURE__ */ o.jsx(Un, { asChild: !0, ...e });
Ba.displayName = am;
var ut = "SelectContent", $a = m.forwardRef(
  (e, t) => {
    const r = Qe(ut, e.__scopeSelect), [n, s] = m.useState();
    if (le(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? br.createPortal(
        /* @__PURE__ */ o.jsx(Wa, { scope: e.__scopeSelect, children: /* @__PURE__ */ o.jsx(Ar.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ o.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ o.jsx(Ua, { ...e, ref: t });
  }
);
$a.displayName = ut;
var Ee = 10, [Wa, et] = Tt(ut), im = "SelectContentImpl", cm = /* @__PURE__ */ bt("SelectContent.RemoveScroll"), Ua = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: c,
      sideOffset: l,
      align: f,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: x,
      //
      ...g
    } = e, C = Qe(ut, r), [y, w] = m.useState(null), [N, A] = m.useState(null), M = ne(t, (L) => w(L)), [j, _] = m.useState(null), [D, k] = m.useState(
      null
    ), T = Pr(r), [O, F] = m.useState(!1), z = m.useRef(!1);
    m.useEffect(() => {
      if (y) return Ra(y);
    }, [y]), Qs();
    const P = m.useCallback(
      (L) => {
        const [H, ...Z] = T().map((re) => re.ref.current), [J] = Z.slice(-1), te = document.activeElement;
        for (const re of L)
          if (re === te || (re == null || re.scrollIntoView({ block: "nearest" }), re === H && N && (N.scrollTop = 0), re === J && N && (N.scrollTop = N.scrollHeight), re == null || re.focus(), document.activeElement !== te)) return;
      },
      [T, N]
    ), V = m.useCallback(
      () => P([j, y]),
      [P, j, y]
    );
    m.useEffect(() => {
      O && V();
    }, [O, V]);
    const { onOpenChange: S, triggerPointerDownPosRef: I } = C;
    m.useEffect(() => {
      if (y) {
        let L = { x: 0, y: 0 };
        const H = (J) => {
          var te, re;
          L = {
            x: Math.abs(Math.round(J.pageX) - (((te = I.current) == null ? void 0 : te.x) ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (((re = I.current) == null ? void 0 : re.y) ?? 0))
          };
        }, Z = (J) => {
          L.x <= 10 && L.y <= 10 ? J.preventDefault() : y.contains(J.target) || S(!1), document.removeEventListener("pointermove", H), I.current = null;
        };
        return I.current !== null && (document.addEventListener("pointermove", H), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", H), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [y, S, I]), m.useEffect(() => {
      const L = () => S(!1);
      return window.addEventListener("blur", L), window.addEventListener("resize", L), () => {
        window.removeEventListener("blur", L), window.removeEventListener("resize", L);
      };
    }, [S]);
    const [E, B] = ii((L) => {
      const H = T().filter((te) => !te.disabled), Z = H.find((te) => te.ref.current === document.activeElement), J = ci(H, L, Z);
      J && setTimeout(() => J.ref.current.focus());
    }), K = m.useCallback(
      (L, H, Z) => {
        const J = !z.current && !Z;
        (C.value !== void 0 && C.value === H || J) && (_(L), J && (z.current = !0));
      },
      [C.value]
    ), q = m.useCallback(() => y == null ? void 0 : y.focus(), [y]), Q = m.useCallback(
      (L, H, Z) => {
        const J = !z.current && !Z;
        (C.value !== void 0 && C.value === H || J) && k(L);
      },
      [C.value]
    ), se = n === "popper" ? mn : Ha, ae = se === mn ? {
      side: c,
      sideOffset: l,
      align: f,
      alignOffset: u,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: b,
      hideWhenDetached: h,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ o.jsx(
      Wa,
      {
        scope: r,
        content: y,
        viewport: N,
        onViewportChange: A,
        itemRefCallback: K,
        selectedItem: j,
        onItemLeave: q,
        itemTextRefCallback: Q,
        focusSelectedItem: V,
        selectedItemText: D,
        position: n,
        isPositioned: O,
        searchRef: E,
        children: /* @__PURE__ */ o.jsx(Hn, { as: cm, allowPinchZoom: !0, children: /* @__PURE__ */ o.jsx(
          In,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (L) => {
              L.preventDefault();
            },
            onUnmountAutoFocus: U(s, (L) => {
              var H;
              (H = C.trigger) == null || H.focus({ preventScroll: !0 }), L.preventDefault();
            }),
            children: /* @__PURE__ */ o.jsx(
              _n,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (L) => L.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ o.jsx(
                  se,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (L) => L.preventDefault(),
                    ...g,
                    ...ae,
                    onPlaced: () => F(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...g.style
                    },
                    onKeyDown: U(g.onKeyDown, (L) => {
                      const H = L.ctrlKey || L.altKey || L.metaKey;
                      if (L.key === "Tab" && L.preventDefault(), !H && L.key.length === 1 && B(L.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                        let J = T().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(L.key) && (J = J.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(L.key)) {
                          const te = L.target, re = J.indexOf(te);
                          J = J.slice(re + 1);
                        }
                        setTimeout(() => P(J)), L.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ua.displayName = im;
var lm = "SelectItemAlignedPosition", Ha = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...s } = e, a = Qe(ut, r), i = et(ut, r), [c, l] = m.useState(null), [f, u] = m.useState(null), d = ne(t, (M) => u(M)), p = Pr(r), v = m.useRef(!1), b = m.useRef(!0), { viewport: h, selectedItem: x, selectedItemText: g, focusSelectedItem: C } = i, y = m.useCallback(() => {
    if (a.trigger && a.valueNode && c && f && h && x && g) {
      const M = a.trigger.getBoundingClientRect(), j = f.getBoundingClientRect(), _ = a.valueNode.getBoundingClientRect(), D = g.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const te = D.left - j.left, re = _.left - te, be = M.left - re, Me = M.width + be, Mt = Math.max(Me, j.width), At = window.innerWidth - Ee, Pt = fr(re, [
          Ee,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ee, At - Mt)
        ]);
        c.style.minWidth = Me + "px", c.style.left = Pt + "px";
      } else {
        const te = j.right - D.right, re = window.innerWidth - _.right - te, be = window.innerWidth - M.right - re, Me = M.width + be, Mt = Math.max(Me, j.width), At = window.innerWidth - Ee, Pt = fr(re, [
          Ee,
          Math.max(Ee, At - Mt)
        ]);
        c.style.minWidth = Me + "px", c.style.right = Pt + "px";
      }
      const k = p(), T = window.innerHeight - Ee * 2, O = h.scrollHeight, F = window.getComputedStyle(f), z = parseInt(F.borderTopWidth, 10), P = parseInt(F.paddingTop, 10), V = parseInt(F.borderBottomWidth, 10), S = parseInt(F.paddingBottom, 10), I = z + P + O + S + V, E = Math.min(x.offsetHeight * 5, I), B = window.getComputedStyle(h), K = parseInt(B.paddingTop, 10), q = parseInt(B.paddingBottom, 10), Q = M.top + M.height / 2 - Ee, se = T - Q, ae = x.offsetHeight / 2, L = x.offsetTop + ae, H = z + P + L, Z = I - H;
      if (H <= Q) {
        const te = k.length > 0 && x === k[k.length - 1].ref.current;
        c.style.bottom = "0px";
        const re = f.clientHeight - h.offsetTop - h.offsetHeight, be = Math.max(
          se,
          ae + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? q : 0) + re + V
        ), Me = H + be;
        c.style.height = Me + "px";
      } else {
        const te = k.length > 0 && x === k[0].ref.current;
        c.style.top = "0px";
        const be = Math.max(
          Q,
          z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? K : 0) + ae
        ) + Z;
        c.style.height = be + "px", h.scrollTop = H - Q + h.offsetTop;
      }
      c.style.margin = `${Ee}px 0`, c.style.minHeight = E + "px", c.style.maxHeight = T + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    c,
    f,
    h,
    x,
    g,
    a.dir,
    n
  ]);
  le(() => y(), [y]);
  const [w, N] = m.useState();
  le(() => {
    f && N(window.getComputedStyle(f).zIndex);
  }, [f]);
  const A = m.useCallback(
    (M) => {
      M && b.current === !0 && (y(), C == null || C(), b.current = !1);
    },
    [y, C]
  );
  return /* @__PURE__ */ o.jsx(
    dm,
    {
      scope: r,
      contentWrapper: c,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w
          },
          children: /* @__PURE__ */ o.jsx(
            Y.div,
            {
              ...s,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
Ha.displayName = lm;
var um = "SelectPopperPosition", mn = m.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: s = Ee,
    ...a
  } = e, i = _r(r);
  return /* @__PURE__ */ o.jsx(
    Na,
    {
      ...i,
      ...a,
      ref: t,
      align: n,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
mn.displayName = um;
var [dm, Gn] = Tt(ut, {}), pn = "SelectViewport", Ga = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...s } = e, a = et(pn, r), i = Gn(pn, r), c = ne(t, a.onViewportChange), l = m.useRef(0);
    return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ o.jsx(Ar.Slot, { scope: r, children: /* @__PURE__ */ o.jsx(
        Y.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: c,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...s.style
          },
          onScroll: U(s.onScroll, (f) => {
            const u = f.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && d) {
              const v = Math.abs(l.current - u.scrollTop);
              if (v > 0) {
                const b = window.innerHeight - Ee * 2, h = parseFloat(d.style.minHeight), x = parseFloat(d.style.height), g = Math.max(h, x);
                if (g < b) {
                  const C = g + v, y = Math.min(b, C), w = C - y;
                  d.style.height = y + "px", d.style.bottom === "0px" && (u.scrollTop = w > 0 ? w : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ga.displayName = pn;
var Ka = "SelectGroup", [fm, mm] = Tt(Ka), pm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = at();
    return /* @__PURE__ */ o.jsx(fm, { scope: r, id: s, children: /* @__PURE__ */ o.jsx(Y.div, { role: "group", "aria-labelledby": s, ...n, ref: t }) });
  }
);
pm.displayName = Ka;
var qa = "SelectLabel", Ya = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = mm(qa, r);
    return /* @__PURE__ */ o.jsx(Y.div, { id: s.id, ...n, ref: t });
  }
);
Ya.displayName = qa;
var vr = "SelectItem", [hm, Xa] = Tt(vr), Za = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: s = !1,
      textValue: a,
      ...i
    } = e, c = Qe(vr, r), l = et(vr, r), f = c.value === n, [u, d] = m.useState(a ?? ""), [p, v] = m.useState(!1), b = ne(
      t,
      (C) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, C, n, s);
      }
    ), h = at(), x = m.useRef("touch"), g = () => {
      s || (c.onValueChange(n), c.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ o.jsx(
      hm,
      {
        scope: r,
        value: n,
        disabled: s,
        textId: h,
        isSelected: f,
        onItemTextChange: m.useCallback((C) => {
          d((y) => y || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ o.jsx(
          Ar.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: s,
            textValue: u,
            children: /* @__PURE__ */ o.jsx(
              Y.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": f && p,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: U(i.onFocus, () => v(!0)),
                onBlur: U(i.onBlur, () => v(!1)),
                onClick: U(i.onClick, () => {
                  x.current !== "mouse" && g();
                }),
                onPointerUp: U(i.onPointerUp, () => {
                  x.current === "mouse" && g();
                }),
                onPointerDown: U(i.onPointerDown, (C) => {
                  x.current = C.pointerType;
                }),
                onPointerMove: U(i.onPointerMove, (C) => {
                  var y;
                  x.current = C.pointerType, s ? (y = l.onItemLeave) == null || y.call(l) : x.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: U(i.onPointerLeave, (C) => {
                  var y;
                  C.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: U(i.onKeyDown, (C) => {
                  var w;
                  ((w = l.searchRef) == null ? void 0 : w.current) !== "" && C.key === " " || (em.includes(C.key) && g(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Za.displayName = vr;
var Ot = "SelectItemText", Ja = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, ...a } = e, i = Qe(Ot, r), c = et(Ot, r), l = Xa(Ot, r), f = om(Ot, r), [u, d] = m.useState(null), p = ne(
      t,
      (g) => d(g),
      l.onItemTextChange,
      (g) => {
        var C;
        return (C = c.itemTextRefCallback) == null ? void 0 : C.call(c, g, l.value, l.disabled);
      }
    ), v = u == null ? void 0 : u.textContent, b = m.useMemo(
      () => /* @__PURE__ */ o.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: x } = f;
    return le(() => (h(b), () => x(b)), [h, x, b]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(Y.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? br.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
Ja.displayName = Ot;
var Qa = "SelectItemIndicator", ei = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Xa(Qa, r).isSelected ? /* @__PURE__ */ o.jsx(Y.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
ei.displayName = Qa;
var hn = "SelectScrollUpButton", ti = m.forwardRef((e, t) => {
  const r = et(hn, e.__scopeSelect), n = Gn(hn, e.__scopeSelect), [s, a] = m.useState(!1), i = ne(t, n.onScrollButtonChange);
  return le(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const f = l.scrollTop > 0;
        a(f);
      };
      const l = r.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ o.jsx(
    ni,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = r;
        c && l && (c.scrollTop = c.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
ti.displayName = hn;
var gn = "SelectScrollDownButton", ri = m.forwardRef((e, t) => {
  const r = et(gn, e.__scopeSelect), n = Gn(gn, e.__scopeSelect), [s, a] = m.useState(!1), i = ne(t, n.onScrollButtonChange);
  return le(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const f = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < f;
        a(u);
      };
      const l = r.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ o.jsx(
    ni,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = r;
        c && l && (c.scrollTop = c.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
ri.displayName = gn;
var ni = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...s } = e, a = et("SelectScrollButton", r), i = m.useRef(null), c = Pr(r), l = m.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), le(() => {
    var u;
    const f = c().find((d) => d.ref.current === document.activeElement);
    (u = f == null ? void 0 : f.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ o.jsx(
    Y.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: U(s.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: U(s.onPointerMove, () => {
        var f;
        (f = a.onItemLeave) == null || f.call(a), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: U(s.onPointerLeave, () => {
        l();
      })
    }
  );
}), gm = "SelectSeparator", oi = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
oi.displayName = gm;
var vn = "SelectArrow", vm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = _r(r), a = Qe(vn, r), i = et(vn, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ o.jsx(ka, { ...s, ...n, ref: t }) : null;
  }
);
vm.displayName = vn;
var xm = "SelectBubbleInput", si = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const s = m.useRef(null), a = ne(n, s), i = Tn(t);
    return m.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && u) {
        const d = new Event("change", { bubbles: !0 });
        u.call(c, t), c.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ o.jsx(
      Y.select,
      {
        ...r,
        style: { ...Ea, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
si.displayName = xm;
function ai(e) {
  return e === "" || e === void 0;
}
function ii(e) {
  const t = De(e), r = m.useRef(""), n = m.useRef(0), s = m.useCallback(
    (i) => {
      const c = r.current + i;
      t(c), function l(f) {
        r.current = f, window.clearTimeout(n.current), f !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
      }(c);
    },
    [t]
  ), a = m.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(n.current), []), [r, s, a];
}
function ci(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = ym(e, Math.max(a, 0));
  s.length === 1 && (i = i.filter((f) => f !== r));
  const l = i.find(
    (f) => f.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function ym(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var bm = Da, li = La, wm = za, Cm = Va, Nm = Ba, ui = $a, km = Ga, di = Ya, fi = Za, Em = Ja, jm = ei, mi = ti, pi = ri, hi = oi;
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Sm = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Io = (e) => {
  const t = Sm(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, gi = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Tm = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Am = Ct(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: i,
    ...c
  }, l) => Zr(
    "svg",
    {
      ref: l,
      ...Mm,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: gi("lucide", s),
      ...!a && !Tm(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([f, u]) => Zr(f, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = (e, t) => {
  const r = Ct(
    ({ className: n, ...s }, a) => Zr(Am, {
      ref: a,
      iconNode: t,
      className: gi(
        `lucide-${Rm(Io(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = Io(e), r;
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], vi = ve("check", Pm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Kn = ve("chevron-down", _m);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Dm = ve("chevron-right", Im);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Om = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Lm = ve("chevron-up", Om);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], xn = ve("circle-alert", Fm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Vm = ve("circle", zm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = [
  ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
  ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
], $m = ve("cog", Bm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Um = ve("copy", Wm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], Gm = ve("download", Hm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], qm = ve("eye", Km);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Xm = ve("palette", Ym);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], Jm = ve("play", Zm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Do = ve("plus", Qm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Oo = ve("trash-2", ep);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
], rp = ve("upload", tp), nt = bm, ot = wm, qe = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  li,
  {
    ref: n,
    className: ee(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ o.jsx(Cm, { asChild: !0, children: /* @__PURE__ */ o.jsx(Kn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
qe.displayName = li.displayName;
const xi = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  mi,
  {
    ref: r,
    className: ee(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(Lm, { className: "h-4 w-4" })
  }
));
xi.displayName = mi.displayName;
const yi = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  pi,
  {
    ref: r,
    className: ee(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(Kn, { className: "h-4 w-4" })
  }
));
yi.displayName = pi.displayName;
const Ye = m.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, s) => /* @__PURE__ */ o.jsx(Nm, { children: /* @__PURE__ */ o.jsxs(
  ui,
  {
    ref: s,
    className: ee(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ o.jsx(xi, {}),
      /* @__PURE__ */ o.jsx(
        km,
        {
          className: ee(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ o.jsx(yi, {})
    ]
  }
) }));
Ye.displayName = ui.displayName;
const np = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  di,
  {
    ref: r,
    className: ee("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
np.displayName = di.displayName;
const je = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  fi,
  {
    ref: n,
    className: ee(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(jm, { children: /* @__PURE__ */ o.jsx(vi, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ o.jsx(Em, { children: t })
    ]
  }
));
je.displayName = fi.displayName;
const op = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  hi,
  {
    ref: r,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
op.displayName = hi.displayName;
function sp({ planetStats: e, setPlanetStats: t, selectedBiome: r }) {
  var l, f, u, d;
  const n = dt(e.mass, e.radius), s = Go(e.temperature), a = Ko(e.temperature, e.liquidType || s.type), i = (p, v) => {
    t({
      ...e,
      [p]: v,
      ...p === "liquidEnabled" && v === !0 ? { waterLevel: Math.max(e.waterLevel || 0, 0.5) } : {}
    });
  }, c = (p) => Wo(r, p);
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "SURFACE CONFIGURATION" }) }),
      /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Surface Preset" }),
          /* @__PURE__ */ o.jsxs(
            nt,
            {
              onValueChange: (p) => {
                p !== "default" && t({
                  ...e,
                  ...{
                    ocean: {
                      waterLevel: 0.95,
                      liquidType: "water",
                      atmosphereStrength: 0.8,
                      cloudCount: 70,
                      biomassLevel: 0.6,
                      surfaceRoughness: 0.3,
                      liquidEnabled: !0,
                      customColors: {
                        oceanFloor: "#01579B",
                        beach: "#0288D1",
                        regular: "#29B6F6",
                        mountain: "#81D4FA"
                      }
                    },
                    desert: {
                      waterLevel: 0.1,
                      soilType: "dusty",
                      atmosphereStrength: 0.4,
                      cloudCount: 10,
                      biomassLevel: 0.05,
                      surfaceRoughness: 0.7,
                      temperature: 310,
                      liquidEnabled: !1
                    },
                    volcanic: {
                      waterLevel: 0.3,
                      soilType: "volcanic",
                      atmosphereStrength: 0.7,
                      cloudCount: 40,
                      biomassLevel: 0.1,
                      surfaceRoughness: 0.9,
                      volcanicActivity: 0.8,
                      temperature: 350,
                      liquidEnabled: !0
                    }
                  }[p]
                });
              },
              children: [
                /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select a preset" }) }),
                /* @__PURE__ */ o.jsxs(Ye, { className: "bg-black border-green-500/30 text-green-400", children: [
                  /* @__PURE__ */ o.jsx(je, { value: "default", children: "Default" }),
                  /* @__PURE__ */ o.jsx(je, { value: "ocean", children: "Oceanic World" }),
                  /* @__PURE__ */ o.jsx(je, { value: "desert", children: "Desert World" }),
                  /* @__PURE__ */ o.jsx(je, { value: "volcanic", children: "Volcanic World" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Surface Roughness" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((l = e.surfaceRoughness) == null ? void 0 : l.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.surfaceRoughness || 0],
              min: c("surfaceRoughness")[0],
              max: c("surfaceRoughness")[1],
              step: 0.01,
              onValueChange: (p) => i("surfaceRoughness", p[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          )
        ] })
      ] })
    ] }),
    n === "terrestrial" && /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "TERRAIN COMPOSITION" }) }),
      /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Soil Type" }),
          /* @__PURE__ */ o.jsxs(nt, { value: e.soilType, onValueChange: (p) => i("soilType", p), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select soil type" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: ["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].map((p) => /* @__PURE__ */ o.jsx(je, { value: p, children: p.charAt(0).toUpperCase() + p.slice(1) }, p)) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Soil Texture" }),
          /* @__PURE__ */ o.jsxs(nt, { value: e.soilTexture, onValueChange: (p) => i("soilTexture", p), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select soil texture" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: ["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].map((p) => /* @__PURE__ */ o.jsx(je, { value: p, children: p.charAt(0).toUpperCase() + p.slice(1) }, p)) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Mountain Height" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((f = e.mountainHeight) == null ? void 0 : f.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.mountainHeight || 0],
              min: 0,
              max: 1,
              step: 0.01,
              onValueChange: (p) => i("mountainHeight", p[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          )
        ] })
      ] })
    ] }),
    n === "terrestrial" && /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "HYDROSPHERE" }) }),
      /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Water Level" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((u = e.waterLevel) == null ? void 0 : u.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.waterLevel || 0],
              min: c("waterLevel")[0],
              max: c("waterLevel")[1],
              step: 0.01,
              onValueChange: (p) => i("waterLevel", p[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          ),
          !a && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 text-amber-400 text-xs", children: [
            /* @__PURE__ */ o.jsx(xn, { className: "h-4 w-4" }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              "Temperature is not suitable for ",
              e.liquidType || "water",
              " to exist as a liquid"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Enable Liquid" }),
            /* @__PURE__ */ o.jsx(
              Pn,
              {
                checked: e.liquidEnabled !== !1,
                onCheckedChange: (p) => i("liquidEnabled", p),
                className: "data-[state=checked]:bg-green-600"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70", children: "When enabled, liquid will cover at least half the surface" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Liquid Type" }),
          /* @__PURE__ */ o.jsxs(nt, { value: e.liquidType, onValueChange: (p) => i("liquidType", p), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select liquid type" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: ["water", "methane", "nitrogen", "ammonia", "ethane"].map((p) => /* @__PURE__ */ o.jsx(je, { value: p, children: p.charAt(0).toUpperCase() + p.slice(1) }, p)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "ATMOSPHERE" }) }),
      /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Atmosphere Strength" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((d = e.atmosphereStrength) == null ? void 0 : d.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.atmosphereStrength || 0],
              min: c("atmosphereStrength")[0],
              max: c("atmosphereStrength")[1],
              step: 0.01,
              onValueChange: (p) => i("atmosphereStrength", p[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Cloud Count" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: e.cloudCount || 0 })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.cloudCount || 0],
              min: c("cloudCount")[0],
              max: c("cloudCount")[1],
              step: 1,
              onValueChange: (p) => i("cloudCount", p[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const ce = m.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: t,
      className: ee(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
ce.displayName = "Input";
const ap = Sn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), de = m.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, a) => {
    const i = n ? il : "button";
    return /* @__PURE__ */ o.jsx(
      i,
      {
        className: ee(ap({ variant: t, size: r, className: e })),
        ref: a,
        ...s
      }
    );
  }
);
de.displayName = "Button";
function ip({
  planetStats: e,
  setPlanetStats: t,
  selectedBiome: r,
  setSelectedBiome: n,
  customColors: s,
  setCustomColors: a
}) {
  var u;
  const i = Cc(), c = (d, p) => {
    t({
      ...e,
      [d]: p
    });
  }, l = (d, p) => {
    const v = { ...s, [d]: p };
    a(v), t({ ...e, customColors: v });
  }, f = (d) => Wo(r, d);
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "BIOME SELECTION" }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Biome Type" }),
        /* @__PURE__ */ o.jsxs(nt, { value: r, onValueChange: n, children: [
          /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select biome" }) }),
          /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: i.map((d) => /* @__PURE__ */ o.jsx(je, { value: d, children: d }, d)) })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70", children: "Selecting a biome will adjust parameters to fit within biome ranges" })
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "COLOR CUSTOMIZATION" }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Custom Colors" }),
          /* @__PURE__ */ o.jsx(Xm, { className: "h-4 w-4 text-green-400" })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70 mb-2", children: "Customize terrain colors for each height level" }),
        /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-2 gap-3", children: ["oceanFloor", "beach", "regular", "mountain"].map((d) => /* @__PURE__ */ o.jsxs(Pe.Fragment, { children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-xs text-green-300", children: d.replace(/([A-Z])/g, " $1").replace(/^./, (p) => p.toUpperCase()) }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              type: "color",
              value: s[d] || "#5D4037",
              onChange: (p) => l(d, p.target.value),
              className: "h-8 p-1 bg-black border-green-500/30"
            }
          )
        ] }, d)) }),
        /* @__PURE__ */ o.jsx(
          de,
          {
            variant: "outline",
            size: "sm",
            className: "mt-3 w-full border-green-500/30 text-green-400 hover:bg-green-900/20",
            onClick: () => a({ oceanFloor: "", beach: "", regular: "", mountain: "" }),
            children: "Reset to Biome Default Colors"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "GEOLOGICAL ACTIVITY" }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Volcanic Activity" }),
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((u = e.volcanicActivity) == null ? void 0 : u.toFixed(2)) || "0.00" })
        ] }),
        /* @__PURE__ */ o.jsx(
          Re,
          {
            value: [e.volcanicActivity || 0],
            min: f("volcanicActivity")[0],
            max: f("volcanicActivity")[1],
            step: 0.01,
            onValueChange: (d) => c("volcanicActivity", d[0]),
            className: "[&_[role=slider]]:bg-green-500"
          }
        )
      ] }) })
    ] })
  ] });
}
const cp = Sn(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), yn = m.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: ee(cp({ variant: t }), e),
    ...r
  }
));
yn.displayName = "Alert";
const lp = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h5",
  {
    ref: r,
    className: ee("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
lp.displayName = "AlertTitle";
const bn = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
bn.displayName = "AlertDescription";
function up({ landmark: e, planetStats: t }) {
  const r = fe(null), n = t.mass > 7 || t.radius > 2.5, { geometry: s, material: a } = Ce(() => {
    const i = new R.PlaneGeometry(3, 3, 128, 128), c = e.influence_type || "mountain", l = e.influence_radius || 0.5, f = e.influence_strength || 0.5, u = e.influence_roughness || 0.5, d = i.getAttribute("position"), p = new Float32Array(d.count * 3);
    for (let b = 0; b < d.count; b++) {
      const h = d.getX(b), x = d.getY(b);
      d.getZ(b);
      const g = Math.sqrt(h * h + x * x), y = Math.max(0, 1 - g / (l * 2)) * f * 2.5;
      let w = 0, N = new R.Color(10586239);
      if (n) {
        switch (c) {
          case "storm":
            w = y * Math.exp(-g / (l * 0.5)), w += y * 0.3 * Math.sin(Math.atan2(x, h) * 5 + g * 10), N = new R.Color(15037299);
            break;
          case "vortex":
            const _ = Math.atan2(x, h);
            w = y * Math.sin(_ * 8 + g * 15) * Math.exp(-g / l), N = new R.Color(8508666);
            break;
          case "band":
            w = y * Math.sin(x * 15), N = new R.Color(16766287);
            break;
          case "spot":
            const D = h / 0.7, k = Math.sqrt(D * D + x * x);
            w = y * (1 - Math.min(1, k / l)), N = new R.Color(16747109);
            break;
          case "turbulent":
            w = y * oe(h * 10, x * 10, 0), w += y * 0.5 * oe(h * 20, x * 20, 0), N = new R.Color(9795021);
            break;
          case "cyclone":
            const T = Math.atan2(x, h), O = g * 10 + T * 3;
            w = y * Math.sin(O) * Math.exp(-g / l), N = new R.Color(5227511);
            break;
          case "anticyclone":
            const F = Math.atan2(x, h), z = g * 10 - F * 3;
            w = y * Math.sin(z) * Math.exp(-g / l), N = new R.Color(16773494);
            break;
          case "zonal_flow":
            w = y * Math.sin(x * 20) * 0.5, w += y * Math.sin(x * 10 + h * 2) * 0.3, N = new R.Color(11457921);
            break;
          default:
            w = y * oe(h * 5, x * 5, 0) * 0.6, w += y * 0.4 * Math.sin(h * 8 + x * 8), N = new R.Color(11583173);
        }
        w += oe(h * 15, x * 15, 0) * y * 0.2;
      } else
        switch (c) {
          case "crater":
            g < l * 0.8 ? (w = -y * 1.2, w += oe(h * 10, x * 10, 0) * y * 0.1, N = new R.Color(9268835)) : g < l * 1.2 && (w = y * 0.8, N = new R.Color(10586239));
            break;
          case "mountain":
            w = y * 1.5 * Math.exp(-g / (l * 0.6)), w += oe(h * 15, x * 15, 0) * y * 0.3, N = new R.Color(10586239), w > 0.5 && N.lerp(new R.Color(16777215), (w - 0.5) * 2);
            break;
          case "volcano":
            if (g < l * 0.2)
              w = -y * 0.8, w += oe(h * 20, x * 20, 0) * y * 0.1, N = new R.Color(4073251);
            else {
              w = y * 1.8 * Math.exp(-g / (l * 0.4)), w += oe(h * 12, x * 12, 0) * y * 0.2;
              const O = Math.max(0, Math.min(1, w / 1.5));
              N = new R.Color(6111287).lerp(new R.Color(12531212), O);
            }
            break;
          case "valley":
          case "canyon":
            const _ = Math.abs(x);
            _ < l * 0.3 ? (w = -y * 1.2, w += oe(h * 25, x * 5, 0) * y * 0.15, N = new R.Color(7951688)) : _ < l * 0.5 && (w = y * 0.4 * (1 - (_ - l * 0.3) / (l * 0.2)), N = new R.Color(9268835));
            break;
          case "basin":
            w = -y * 0.8 * Math.exp(-g / (l * 1.5)), w += oe(h * 8, x * 8, 0) * y * 0.15, N = new R.Color(9268835);
            break;
          case "dune":
            w = y * 0.8 * Math.sin(g * 8 / l), w += y * 0.3 * Math.sin(h * 12 / l), N = new R.Color(14142664);
            break;
          case "glacier":
            w = y * 0.8 * (1 - Math.pow(g / l, 1.5));
            const D = oe(h * 20, x * 20, 0);
            D > 0.7 && (w -= y * 0.4 * (D - 0.7) * 3), N = new R.Color(14743546);
            break;
          case "ocean_ridge":
            const k = Math.abs(x);
            w = y * 0.8 * Math.exp(-k / (l * 0.2)), w += oe(h * 15, x * 5, 0) * y * 0.2, N = new R.Color(166097);
            break;
          case "trench":
            const T = Math.abs(x);
            T < l * 0.2 ? (w = -y * 1.5, w += oe(h * 20, x * 5, 0) * y * 0.1, N = new R.Color(87963)) : T < l * 0.4 && (w = -y * (1 - (T - l * 0.2) / (l * 0.2)), N = new R.Color(166097));
            break;
          default:
            w = y * oe(h * 5, x * 5, 0) * 0.8, N = new R.Color(10586239);
        }
      const A = (t.surfaceRoughness || 0.5) * u, M = 8 + A * 15, j = A * 0.4;
      w += oe(h * M, x * M, 0) * j, d.setZ(b, w), p[b * 3] = N.r, p[b * 3 + 1] = N.g, p[b * 3 + 2] = N.b;
    }
    d.needsUpdate = !0, i.computeVertexNormals(), i.setAttribute("color", new R.BufferAttribute(p, 3));
    let v = new R.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.7,
      metalness: 0.1,
      flatShading: !1
    });
    if (n ? v = new R.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.3,
      metalness: 0.1,
      flatShading: !1,
      transparent: !0,
      opacity: 0.9
    }) : c === "volcano" ? (v.emissive.set("#ff2200"), v.emissiveIntensity = 0.2) : (c === "glacier" || c === "trench" || c === "ocean_ridge") && (v.roughness = 0.3, v.metalness = 0.2), t.soilType && !n)
      switch (t.soilType) {
        case "volcanic":
          v.roughness = 0.9, c !== "volcano" && (v.emissive.set("#ff4400"), v.emissiveIntensity = 0.1);
          break;
        case "sandy":
          v.roughness = Math.min(
            v.roughness + 0.1,
            1
          );
          break;
        case "frozen":
          v.roughness = Math.max(
            v.roughness - 0.2,
            0.1
          ), v.metalness = Math.min(
            v.metalness + 0.1,
            1
          );
          break;
      }
    return { geometry: i, material: v };
  }, [e, t, n]);
  return /* @__PURE__ */ o.jsx("div", { className: "w-full h-48 bg-black rounded-md overflow-hidden", children: /* @__PURE__ */ o.jsxs(Vo, { camera: { position: [0, 1.8, 2.2], fov: 45 }, children: [
    /* @__PURE__ */ o.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ o.jsx("pointLight", { position: [2, 3, 4], intensity: 1.2 }),
    /* @__PURE__ */ o.jsx("directionalLight", { position: [-2, 2, 1], intensity: 0.8, castShadow: !0 }),
    /* @__PURE__ */ o.jsx(
      "mesh",
      {
        ref: r,
        rotation: [-Math.PI / 4, 0, 0],
        geometry: s,
        material: a,
        receiveShadow: !0,
        castShadow: !0
      }
    ),
    /* @__PURE__ */ o.jsx(Bo, { enableZoom: !0, enablePan: !0, enableRotate: !0 }),
    /* @__PURE__ */ o.jsx("gridHelper", { args: [6, 10, "#444444", "#222222"], position: [0, -0.01, 0] })
  ] }) });
}
function dp({ planetStats: e, setPlanetStats: t }) {
  var j, _, D;
  const r = dt(e.mass, e.radius), n = r === "gaseous", [s, a] = ye(r), [i, c] = ye({
    classification_id: "",
    type: "",
    visual_effect: "",
    image_link: "",
    coordinates: { x: 0, y: 0, z: 0 },
    influence_radius: 0.5,
    influence_strength: 0.7,
    influence_type: n ? "storm" : "mountain",
    category: n ? "gaseous" : "terrestrial",
    events: []
  }), [l, f] = ye({
    id: "",
    type: "",
    description: "",
    duration: 5,
    intensity: 0.5
  }), [u, d] = ye(-1), [p, v] = ye(!1), b = Ce(() => e.landmarks ? e.landmarks.map((k) => {
    const T = n ? k.category === "gaseous" : k.category === "terrestrial";
    return {
      ...k,
      isActive: T
    };
  }) : [], [e.landmarks, n]);
  Xe(() => {
    if (s !== r && (a(r), c((k) => ({
      ...k,
      influence_type: n ? "storm" : "mountain",
      category: n ? "gaseous" : "terrestrial"
    })), u >= 0 && e.landmarks)) {
      const k = e.landmarks[u];
      k && ((n ? (k.category || "terrestrial") === "gaseous" : (k.category || "terrestrial") === "terrestrial") || (d(-1), v(!0)));
    }
  }, [r, s, u, e.landmarks, n]);
  const h = () => {
    if (!i.classification_id || !i.type) return;
    const k = {
      ...i,
      category: n ? "gaseous" : "terrestrial"
    }, T = [...e.landmarks || [], k];
    t({ ...e, landmarks: T }), c({
      classification_id: "",
      type: "",
      visual_effect: "",
      image_link: "",
      coordinates: { x: 0, y: 0, z: 0 },
      influence_radius: 0.5,
      influence_strength: 0.7,
      influence_type: n ? "storm" : "mountain",
      category: n ? "gaseous" : "terrestrial",
      events: []
    });
  }, x = (k) => {
    if (!e.landmarks) return;
    const T = b[k], O = e.landmarks.findIndex(
      (z) => z.classification_id === T.classification_id
    );
    if (O === -1) return;
    const F = [...e.landmarks];
    F.splice(O, 1), t({ ...e, landmarks: F }), u === k ? d(-1) : u > k && d(u - 1);
  }, g = (k, T) => {
    c(k === "coordinates" ? { ...i, coordinates: { ...i.coordinates, ...T } } : { ...i, [k]: T });
  }, C = (k, T, O) => {
    if (!e.landmarks) return;
    const F = b[k], z = e.landmarks.findIndex(
      (V) => V.classification_id === F.classification_id
    );
    if (z === -1) return;
    const P = [...e.landmarks];
    T === "coordinates" ? P[z] = {
      ...P[z],
      coordinates: { ...P[z].coordinates, ...O }
    } : P[z] = {
      ...P[z],
      [T]: O
    }, t({ ...e, landmarks: P });
  }, y = () => {
    if (u === -1 || !l.type || !l.description || !e.landmarks) return;
    const k = b[u], T = e.landmarks.findIndex(
      (V) => V.classification_id === k.classification_id
    );
    if (T === -1) return;
    const O = [...e.landmarks], F = O[T], z = `EV-${Math.floor(Math.random() * 900 + 100)}`, P = { ...l, id: z };
    O[T] = {
      ...F,
      events: [...F.events || [], P]
    }, t({ ...e, landmarks: O }), f({
      id: "",
      type: "",
      description: "",
      duration: 5,
      intensity: 0.5
    });
  }, w = (k, T) => {
    if (!e.landmarks) return;
    const O = b[k], F = e.landmarks.findIndex(
      (S) => S.classification_id === O.classification_id
    );
    if (F === -1) return;
    const z = [...e.landmarks], P = z[F];
    if (!P.events) return;
    const V = [...P.events];
    V.splice(T, 1), z[F] = {
      ...P,
      events: V
    }, t({ ...e, landmarks: z });
  }, N = () => {
    const k = Math.random() * Math.PI * 2, T = Math.random() * Math.PI, O = Math.sin(T) * Math.cos(k), F = Math.sin(T) * Math.sin(k), z = Math.cos(T);
    c({
      ...i,
      coordinates: {
        x: Number.parseFloat(O.toFixed(2)),
        y: Number.parseFloat(F.toFixed(2)),
        z: Number.parseFloat(z.toFixed(2))
      }
    });
  }, A = (k = n ? "gaseous" : "terrestrial") => {
    if (k === "gaseous")
      return ["storm", "vortex", "band", "spot", "turbulent", "cyclone", "anticyclone", "zonal_flow"];
    {
      const T = ["mountain", "crater", "valley", "basin", "canyon", "dune"];
      return e.volcanicActivity && e.volcanicActivity > 0.5 && T.push("volcano"), e.temperature < 250 && T.push("glacier"), e.waterLevel && e.waterLevel > 0.5 && T.push("ocean_ridge", "trench"), T;
    }
  }, M = (k) => ({
    mountain: "Mountain Range",
    crater: "Impact Crater",
    valley: "Valley",
    basin: "Basin",
    canyon: "Canyon",
    trench: "Oceanic Trench",
    dune: "Dune Field",
    volcano: "Volcano",
    glacier: "Glacier",
    ocean_ridge: "Ocean Ridge",
    storm: "Storm System",
    vortex: "Vortex",
    band: "Cloud Band",
    spot: "Persistent Spot",
    turbulent: "Turbulent Region",
    cyclone: "Cyclonic Storm",
    anticyclone: "Anticyclonic System",
    zonal_flow: "Zonal Flow Pattern"
  })[k] || k.charAt(0).toUpperCase() + k.slice(1);
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    p && /* @__PURE__ */ o.jsxs(yn, { variant: "default", className: "bg-amber-900/20 border-amber-500/50 text-amber-300", children: [
      /* @__PURE__ */ o.jsx(xn, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsxs(bn, { children: [
        "Some landmarks are hidden because they don't match the current planet type (",
        n ? "gaseous" : "terrestrial",
        ").",
        /* @__PURE__ */ o.jsx(
          de,
          {
            variant: "link",
            className: "p-0 h-auto text-amber-300 hover:text-amber-200",
            onClick: () => v(!1),
            children: "Dismiss"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(he, { className: "text-lg tracking-wide", children: [
        "LANDMARK DATABASE (",
        n ? "GASEOUS" : "TERRESTRIAL",
        " PLANET)"
      ] }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Current Landmarks" }),
        b.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-center py-4 border border-dashed border-green-500/30 rounded-md", children: /* @__PURE__ */ o.jsx("p", { className: "text-green-500/70", children: "No landmarks registered" }) }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: b.map((k, T) => {
          var O;
          return /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: `border ${u === T ? "border-green-400" : "border-green-500/30"} rounded-md p-3 space-y-2 ${k.isActive ? "" : "opacity-50"}`,
              onClick: () => d(T),
              children: [
                /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ o.jsx("span", { className: "font-bold text-green-300", children: k.classification_id }),
                    !k.isActive && /* @__PURE__ */ o.jsx("span", { className: "text-xs bg-amber-900/50 text-amber-300 px-1.5 py-0.5 rounded", children: k.category === "gaseous" ? "GASEOUS" : "TERRESTRIAL" })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ o.jsx(
                      de,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: (F) => {
                          F.stopPropagation(), d(T);
                        },
                        className: "h-6 w-6 p-0 text-green-400 hover:text-green-300 hover:bg-transparent",
                        children: /* @__PURE__ */ o.jsx(qm, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      de,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: (F) => {
                          F.stopPropagation(), x(T);
                        },
                        className: "h-6 w-6 p-0 text-green-400 hover:text-red-400 hover:bg-transparent",
                        children: /* @__PURE__ */ o.jsx(Oo, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1 text-xs", children: [
                  /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "Type:" }),
                  /* @__PURE__ */ o.jsx("span", { children: k.type }),
                  /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "Visual Effect:" }),
                  /* @__PURE__ */ o.jsx("span", { children: k.visual_effect || "None" }),
                  /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "Coordinates:" }),
                  /* @__PURE__ */ o.jsxs("span", { children: [
                    "X: ",
                    k.coordinates.x.toFixed(2),
                    ", Y: ",
                    k.coordinates.y.toFixed(2),
                    ", Z:",
                    " ",
                    k.coordinates.z.toFixed(2)
                  ] }),
                  /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "Events:" }),
                  /* @__PURE__ */ o.jsx("span", { children: ((O = k.events) == null ? void 0 : O.length) || 0 })
                ] })
              ]
            },
            k.classification_id
          );
        }) })
      ] }) })
    ] }),
    u !== -1 && b[u] && /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(he, { className: "text-lg tracking-wide flex items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs("span", { children: [
          "LANDMARK DETAILS: ",
          b[u].classification_id
        ] }),
        !b[u].isActive && /* @__PURE__ */ o.jsxs("span", { className: "text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded", children: [
          "INACTIVE (",
          (j = b[u].category) == null ? void 0 : j.toUpperCase(),
          ")"
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs(Rs, { defaultValue: "info", children: [
        /* @__PURE__ */ o.jsxs(Rn, { className: "bg-black border border-green-500/30", children: [
          /* @__PURE__ */ o.jsx(
            Ge,
            {
              value: "info",
              className: "data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300",
              children: "INFO"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ge,
            {
              value: "events",
              className: "data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300",
              children: "EVENTS"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ge,
            {
              value: "terrain",
              className: "data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300",
              children: "TERRAIN"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(Ke, { value: "info", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Type" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded", children: b[u].type })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Visual Effect" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded", children: b[u].visual_effect || "None" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Coordinates" }),
            /* @__PURE__ */ o.jsxs("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded", children: [
              "X: ",
              b[u].coordinates.x.toFixed(2),
              ", Y:",
              " ",
              b[u].coordinates.y.toFixed(2),
              ", Z:",
              " ",
              b[u].coordinates.z.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Category" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded capitalize", children: b[u].category || (n ? "gaseous" : "terrestrial") })
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsx(Ke, { value: "events", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Event List" }),
            !b[u].events || ((_ = b[u].events) == null ? void 0 : _.length) === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-center py-4 border border-dashed border-green-500/30 rounded-md", children: /* @__PURE__ */ o.jsx("p", { className: "text-green-500/70", children: "No events registered for this landmark" }) }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-2", children: (D = b[u].events) == null ? void 0 : D.map((k, T) => /* @__PURE__ */ o.jsxs("div", { className: "border border-green-500/30 rounded-md p-2 text-xs", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ o.jsxs("span", { className: "font-bold", children: [
                  k.id,
                  ": ",
                  k.type
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ o.jsx(
                    de,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-5 w-5 p-0 text-green-400 hover:text-green-300 hover:bg-transparent",
                      children: /* @__PURE__ */ o.jsx(Jm, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    de,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => w(u, T),
                      className: "h-5 w-5 p-0 text-green-400 hover:text-red-400 hover:bg-transparent",
                      children: /* @__PURE__ */ o.jsx(Oo, { className: "h-3 w-3" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: k.description }),
              k.duration && /* @__PURE__ */ o.jsxs("div", { className: "mt-1 text-green-500/70", children: [
                "Duration: ",
                k.duration,
                "s"
              ] }),
              k.intensity && /* @__PURE__ */ o.jsxs("div", { className: "text-green-500/70", children: [
                "Intensity: ",
                k.intensity.toFixed(1)
              ] })
            ] }, k.id)) })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2 pt-2 border-t border-green-500/30", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Add New Event" }),
            /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Type" }),
                /* @__PURE__ */ o.jsx(
                  ce,
                  {
                    value: l.type,
                    onChange: (k) => f({ ...l, type: k.target.value }),
                    className: "bg-black border-green-500/30 text-green-400",
                    placeholder: "Lightning Strike"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Duration (s)" }),
                /* @__PURE__ */ o.jsx(
                  ce,
                  {
                    type: "number",
                    value: l.duration,
                    onChange: (k) => f({ ...l, duration: Number.parseFloat(k.target.value) }),
                    className: "bg-black border-green-500/30 text-green-400",
                    step: "0.5"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "col-span-2 space-y-1", children: [
                /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Description" }),
                /* @__PURE__ */ o.jsx(
                  ce,
                  {
                    value: l.description,
                    onChange: (k) => f({ ...l, description: k.target.value }),
                    className: "bg-black border-green-500/30 text-green-400",
                    placeholder: "Brief description of the event"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Intensity (0-1)" }),
                /* @__PURE__ */ o.jsx(
                  ce,
                  {
                    type: "number",
                    value: l.intensity,
                    onChange: (k) => f({ ...l, intensity: Number.parseFloat(k.target.value) }),
                    className: "bg-black border-green-500/30 text-green-400",
                    min: "0",
                    max: "1",
                    step: "0.1"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ o.jsxs(
              de,
              {
                onClick: y,
                className: "w-full mt-2 bg-green-700 hover:bg-green-600 text-black",
                children: [
                  /* @__PURE__ */ o.jsx(Do, { className: "h-4 w-4 mr-2" }),
                  "Add Event"
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsx(Ke, { value: "terrain", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
          !b[u].isActive && /* @__PURE__ */ o.jsxs(yn, { variant: "default", className: "bg-amber-900/20 border-amber-500/50 text-amber-300", children: [
            /* @__PURE__ */ o.jsx(xn, { className: "h-4 w-4" }),
            /* @__PURE__ */ o.jsxs(bn, { children: [
              "This landmark is inactive because it's a ",
              b[u].category,
              " landmark on a ",
              n ? "gaseous" : "terrestrial",
              " planet. The terrain preview shows how it would appear on a ",
              b[u].category,
              " planet."
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(up, { landmark: b[u], planetStats: e }),
          /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Influence Type" }),
              /* @__PURE__ */ o.jsxs(
                nt,
                {
                  value: b[u].influence_type || (n ? "storm" : "mountain"),
                  onValueChange: (k) => C(u, "influence_type", k),
                  children: [
                    /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select type" }) }),
                    /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: A(b[u].category).map((k) => /* @__PURE__ */ o.jsx(je, { value: k, children: M(k) }, k)) })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Influence Radius" }),
              /* @__PURE__ */ o.jsx(
                ce,
                {
                  type: "number",
                  value: b[u].influence_radius || 0.5,
                  onChange: (k) => C(u, "influence_radius", Number.parseFloat(k.target.value)),
                  className: "bg-black border-green-500/30 text-green-400",
                  step: "0.1"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "col-span-2 space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Influence Strength" }),
              /* @__PURE__ */ o.jsx(
                Re,
                {
                  defaultValue: [Number(b[u].influence_strength || 0.7) * 100],
                  max: 100,
                  step: 1,
                  onValueChange: (k) => C(u, "influence_strength", k[0] / 100),
                  className: "text-green-400"
                }
              ),
              /* @__PURE__ */ o.jsx("div", { className: "text-xs text-green-500/70", children: (b[u].influence_strength || 0.7).toFixed(2) })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(he, { className: "text-lg tracking-wide", children: [
        "ADD NEW ",
        n ? "GASEOUS" : "TERRESTRIAL",
        " LANDMARK"
      ] }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Classification ID" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                value: i.classification_id,
                onChange: (k) => g("classification_id", k.target.value),
                className: "bg-black border-green-500/30 text-green-400",
                placeholder: "LM-001"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Type" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                value: i.type,
                onChange: (k) => g("type", k.target.value),
                className: "bg-black border-green-500/30 text-green-400",
                placeholder: n ? "Storm System" : "Mountain Range"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Visual Effect" }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              value: i.visual_effect,
              onChange: (k) => g("visual_effect", k.target.value),
              className: "bg-black border-green-500/30 text-green-400",
              placeholder: n ? "Lightning" : "Glowing"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Image Link" }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              value: i.image_link,
              onChange: (k) => g("image_link", k.target.value),
              className: "bg-black border-green-500/30 text-green-400",
              placeholder: "https://example.com/image.jpg"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Coordinates" }),
            /* @__PURE__ */ o.jsx(
              de,
              {
                variant: "outline",
                size: "sm",
                onClick: N,
                className: "h-6 text-xs border-green-500/30 text-green-400 hover:bg-green-900/20",
                children: "Random"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "X" }),
              /* @__PURE__ */ o.jsx(
                ce,
                {
                  type: "number",
                  value: i.coordinates.x,
                  onChange: (k) => g("coordinates", { x: Number.parseFloat(k.target.value) }),
                  className: "bg-black border-green-500/30 text-green-400",
                  step: "0.1"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Y" }),
              /* @__PURE__ */ o.jsx(
                ce,
                {
                  type: "number",
                  value: i.coordinates.y,
                  onChange: (k) => g("coordinates", { y: Number.parseFloat(k.target.value) }),
                  className: "bg-black border-green-500/30 text-green-400",
                  step: "0.1"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Z" }),
              /* @__PURE__ */ o.jsx(
                ce,
                {
                  type: "number",
                  value: i.coordinates.z,
                  onChange: (k) => g("coordinates", { z: Number.parseFloat(k.target.value) }),
                  className: "bg-black border-green-500/30 text-green-400",
                  step: "0.1"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Influence Radius" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                type: "number",
                value: i.influence_radius || 0.5,
                onChange: (k) => g("influence_radius", Number.parseFloat(k.target.value)),
                className: "bg-black border-green-500/30 text-green-400",
                step: "0.1"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Influence Strength" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                type: "number",
                value: i.influence_strength || 0.7,
                onChange: (k) => g("influence_strength", Number.parseFloat(k.target.value)),
                className: "bg-black border-green-500/30 text-green-400",
                step: "0.1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Influence Type" }),
          /* @__PURE__ */ o.jsxs(
            nt,
            {
              value: i.influence_type || (n ? "storm" : "mountain"),
              onValueChange: (k) => g("influence_type", k),
              children: [
                /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select type" }) }),
                /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: A().map((k) => /* @__PURE__ */ o.jsx(je, { value: k, children: M(k) }, k)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs(de, { onClick: h, className: "w-full mt-2 bg-green-700 hover:bg-green-600 text-black", children: [
          /* @__PURE__ */ o.jsx(Do, { className: "h-4 w-4 mr-2" }),
          "Add ",
          n ? "Gaseous" : "Terrestrial",
          " Landmark"
        ] })
      ] }) })
    ] })
  ] });
}
const bi = m.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "textarea",
    {
      className: ee(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
bi.displayName = "Textarea";
var Xr, Lo;
function fp() {
  if (Lo) return Xr;
  Lo = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, s = (g, C) => {
    for (var y in C)
      e(g, y, { get: C[y], enumerable: !0 });
  }, a = (g, C, y, w) => {
    if (C && typeof C == "object" || typeof C == "function")
      for (let N of r(C))
        !n.call(g, N) && N !== y && e(g, N, { get: () => C[N], enumerable: !(w = t(C, N)) || w.enumerable });
    return g;
  }, i = (g) => a(e({}, "__esModule", { value: !0 }), g), c = (g, C, y) => new Promise((w, N) => {
    var A = (_) => {
      try {
        j(y.next(_));
      } catch (D) {
        N(D);
      }
    }, M = (_) => {
      try {
        j(y.throw(_));
      } catch (D) {
        N(D);
      }
    }, j = (_) => _.done ? w(_.value) : Promise.resolve(_.value).then(A, M);
    j((y = y.apply(g, C)).next());
  }), l = {};
  s(l, {
    SessionContextProvider: () => p,
    useSession: () => h,
    useSessionContext: () => v,
    useSupabaseClient: () => b,
    useUser: () => x
  }), Xr = i(l);
  var f = Pe, u = $o(), d = (0, f.createContext)({
    isLoading: !0,
    session: null,
    error: null,
    supabaseClient: {}
  }), p = ({
    supabaseClient: g,
    initialSession: C = null,
    children: y
  }) => {
    const [w, N] = (0, f.useState)(C), [A, M] = (0, f.useState)(!C), [j, _] = (0, f.useState)();
    (0, f.useEffect)(() => {
      !w && C && N(C);
    }, [w, C]), (0, f.useEffect)(() => {
      let k = !0;
      function T() {
        return c(this, null, function* () {
          const {
            data: { session: O },
            error: F
          } = yield g.auth.getSession();
          if (k) {
            if (F) {
              _(F), M(!1);
              return;
            }
            N(O), M(!1);
          }
        });
      }
      return T(), () => {
        k = !1;
      };
    }, []), (0, f.useEffect)(() => {
      const {
        data: { subscription: k }
      } = g.auth.onAuthStateChange((T, O) => {
        O && (T === "SIGNED_IN" || T === "TOKEN_REFRESHED" || T === "USER_UPDATED") && N(O), T === "SIGNED_OUT" && N(null);
      });
      return () => {
        k.unsubscribe();
      };
    }, []);
    const D = (0, f.useMemo)(() => A ? {
      isLoading: !0,
      session: null,
      error: null,
      supabaseClient: g
    } : j ? {
      isLoading: !1,
      session: null,
      error: j,
      supabaseClient: g
    } : {
      isLoading: !1,
      session: w,
      error: null,
      supabaseClient: g
    }, [A, w, j]);
    return /* @__PURE__ */ (0, u.jsx)(d.Provider, { value: D, children: y });
  }, v = () => {
    const g = (0, f.useContext)(d);
    if (g === void 0)
      throw new Error("useSessionContext must be used within a SessionContextProvider.");
    return g;
  };
  function b() {
    const g = (0, f.useContext)(d);
    if (g === void 0)
      throw new Error("useSupabaseClient must be used within a SessionContextProvider.");
    return g.supabaseClient;
  }
  var h = () => {
    const g = (0, f.useContext)(d);
    if (g === void 0)
      throw new Error("useSession must be used within a SessionContextProvider.");
    return g.session;
  }, x = () => {
    var g, C;
    const y = (0, f.useContext)(d);
    if (y === void 0)
      throw new Error("useUser must be used within a SessionContextProvider.");
    return (C = (g = y.session) == null ? void 0 : g.user) != null ? C : null;
  };
  return Xr;
}
var wn = fp();
function mp({
  planetStats: e,
  setPlanetStats: t,
  classificationId: r,
  author: n,
  setSelectedBiome: s,
  setCustomColors: a
}) {
  const i = wn.useSupabaseClient();
  wn.useSession();
  const [c, l] = ye(""), f = async () => {
    const d = {};
    Object.entries(e).forEach(([C, y]) => {
      y != null && (typeof y == "number" ? d[C] = Number(y.toFixed(2)) : (typeof y == "boolean" || typeof y == "object" && Array.isArray(y), d[C] = y));
    });
    const p = Object.entries(d).map(
      ([C, y]) => typeof y == "object" ? `${C}: ${JSON.stringify(y)}` : `${C}: ${y}`
    ).join(`
`);
    l(p);
    const v = parseInt(r);
    if (isNaN(v)) return;
    const { data: b, error: h } = await i.from("classifications").select("classificationConfiguration").eq("id", v).single();
    if (h || !(b != null && b.classificationConfiguration)) {
      console.error("Failed to fetch existing configuration:", h);
      return;
    }
    const x = {
      ...b.classificationConfiguration,
      exportedValue: d
    }, { error: g } = await i.from("classifications").update({ classificationConfiguration: x }).eq("id", v);
    g && console.error("Failed to export config:", g);
  }, u = () => {
    try {
      const d = c.split(`
`).filter((b) => !b.trim().startsWith("//") && b.trim() !== ""), p = {};
      d.forEach((b) => {
        if (!b.trim()) return;
        const h = b.indexOf(":");
        if (h === -1) return;
        const x = b.substring(0, h).trim(), g = b.substring(h + 1).trim();
        let C;
        if (g === "true" || g === "false") C = g === "true";
        else if (g.startsWith("[") || g.startsWith("{"))
          try {
            C = JSON.parse(g);
          } catch {
            C = g;
          }
        else isNaN(Number(g)) ? C = g : C = Number(g);
        p[x] = C;
      });
      const v = Qr(p);
      t(v), v.biome && s(v.biome), v.customColors && a(v.customColors);
    } catch (d) {
      console.error("Error importing planet configuration:", d);
    }
  };
  return /* @__PURE__ */ o.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
    /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "DATA TRANSFER" }) }),
    /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Planet Configuration" }),
        /* @__PURE__ */ o.jsx(
          bi,
          {
            value: c,
            onChange: (d) => l(d.target.value),
            className: "h-64 font-mono text-xs bg-black border-green-500/30 text-green-400",
            placeholder: "Export or paste planet configuration here..."
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ o.jsxs(
          de,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 border-green-500/30 text-green-400 hover:bg-green-900/20",
            onClick: f,
            children: [
              /* @__PURE__ */ o.jsx(Gm, { className: "h-4 w-4 mr-2" }),
              "Export"
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          de,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 border-green-500/30 text-green-400 hover:bg-green-900/20",
            onClick: u,
            children: [
              /* @__PURE__ */ o.jsx(rp, { className: "h-4 w-4 mr-2" }),
              "Import"
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          de,
          {
            variant: "outline",
            size: "sm",
            className: "border-green-500/30 text-green-400 hover:bg-green-900/20",
            onClick: () => navigator.clipboard.writeText(c),
            children: /* @__PURE__ */ o.jsx(Um, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70 mt-2", children: "You can import partial configurations (e.g., just mass and radius). Missing values will be filled with defaults." })
    ] })
  ] }) });
}
function pp({
  planetStats: e,
  setPlanetStats: t,
  classificationId: r = "UNCLASSIFIED",
  author: n = "UNKNOWN"
}) {
  var l, f, u, d;
  const [s, a] = ye(e.biome || "Rocky Highlands"), [i, c] = ye({
    oceanFloor: ((l = e.customColors) == null ? void 0 : l.oceanFloor) || "",
    beach: ((f = e.customColors) == null ? void 0 : f.beach) || "",
    regular: ((u = e.customColors) == null ? void 0 : u.regular) || "",
    mountain: ((d = e.customColors) == null ? void 0 : d.mountain) || ""
  });
  return /* @__PURE__ */ o.jsxs("div", { className: "absolute top-0 left-0 h-full w-96 bg-slate-800/90 text-blue-100 p-6 overflow-y-auto font-mono border-r border-slate-600/60", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "text-2xl font-bold mb-6 tracking-wider border-b border-slate-600/60 pb-2", children: "PLANET SETTINGS" }),
    /* @__PURE__ */ o.jsx("div", { className: "mb-6 p-3 bg-slate-700/60 border border-slate-600/60 rounded-md hidden", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
      /* @__PURE__ */ o.jsx("div", { className: "text-slate-400", children: "CLASSIFICATION:" }),
      /* @__PURE__ */ o.jsx("div", { children: r }),
      /* @__PURE__ */ o.jsx("div", { className: "text-slate-400", children: "AUTHOR:" }),
      /* @__PURE__ */ o.jsx("div", { children: n })
    ] }) }),
    /* @__PURE__ */ o.jsxs(Rs, { defaultValue: "physical", className: "space-y-6", children: [
      /* @__PURE__ */ o.jsxs(Rn, { className: "grid w-full grid-cols-4 mb-6 bg-slate-700 border border-slate-600", children: [
        /* @__PURE__ */ o.jsx(Ge, { value: "physical", className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50", children: "PHYSICAL" }),
        /* @__PURE__ */ o.jsx(Ge, { value: "surface", className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50", children: "SURFACE" }),
        /* @__PURE__ */ o.jsx(Ge, { value: "biome", className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50", children: "BIOME" }),
        /* @__PURE__ */ o.jsx(
          Ge,
          {
            value: "landmarks",
            className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50",
            children: "LANDMARKS"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs(Ke, { value: "physical", children: [
        /* @__PURE__ */ o.jsx(Wu, { planetStats: e, setPlanetStats: t }),
        /* @__PURE__ */ o.jsx("div", { className: "mt-6", children: /* @__PURE__ */ o.jsx(
          mp,
          {
            planetStats: e,
            setPlanetStats: t,
            classificationId: r,
            author: n,
            setSelectedBiome: a,
            setCustomColors: c
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Ke, { value: "surface", children: /* @__PURE__ */ o.jsx(sp, { planetStats: e, setPlanetStats: t, selectedBiome: s }) }),
      /* @__PURE__ */ o.jsx(Ke, { value: "biome", children: /* @__PURE__ */ o.jsx(
        ip,
        {
          planetStats: e,
          setPlanetStats: t,
          selectedBiome: s,
          setSelectedBiome: a,
          customColors: i,
          setCustomColors: c
        }
      ) }),
      /* @__PURE__ */ o.jsx(Ke, { value: "landmarks", children: /* @__PURE__ */ o.jsx(dp, { planetStats: e, setPlanetStats: t }) })
    ] })
  ] });
}
var Cn = ["Enter", " "], hp = ["ArrowDown", "PageUp", "Home"], wi = ["ArrowUp", "PageDown", "End"], gp = [...hp, ...wi], vp = {
  ltr: [...Cn, "ArrowRight"],
  rtl: [...Cn, "ArrowLeft"]
}, xp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, qt = "Menu", [$t, yp, bp] = wr(qt), [ft, Ci] = $e(qt, [
  bp,
  Tr,
  Cr
]), Ir = Tr(), Ni = Cr(), [wp, mt] = ft(qt), [Cp, Yt] = ft(qt), ki = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: s, onOpenChange: a, modal: i = !0 } = e, c = Ir(t), [l, f] = m.useState(null), u = m.useRef(!1), d = De(a), p = Ht(s);
  return m.useEffect(() => {
    const v = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ o.jsx(wa, { ...c, children: /* @__PURE__ */ o.jsx(
    wp,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: l,
      onContentChange: f,
      children: /* @__PURE__ */ o.jsx(
        Cp,
        {
          scope: t,
          onClose: m.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
ki.displayName = qt;
var Np = "MenuAnchor", qn = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, s = Ir(r);
    return /* @__PURE__ */ o.jsx(Ca, { ...s, ...n, ref: t });
  }
);
qn.displayName = Np;
var Yn = "MenuPortal", [kp, Ei] = ft(Yn, {
  forceMount: void 0
}), ji = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: s } = e, a = mt(Yn, t);
  return /* @__PURE__ */ o.jsx(kp, { scope: t, forceMount: r, children: /* @__PURE__ */ o.jsx(Nt, { present: r || a.open, children: /* @__PURE__ */ o.jsx(Un, { asChild: !0, container: s, children: n }) }) });
};
ji.displayName = Yn;
var ke = "MenuContent", [Ep, Xn] = ft(ke), Ri = m.forwardRef(
  (e, t) => {
    const r = Ei(ke, e.__scopeMenu), { forceMount: n = r.forceMount, ...s } = e, a = mt(ke, e.__scopeMenu), i = Yt(ke, e.__scopeMenu);
    return /* @__PURE__ */ o.jsx($t.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(Nt, { present: n || a.open, children: /* @__PURE__ */ o.jsx($t.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ o.jsx(jp, { ...s, ref: t }) : /* @__PURE__ */ o.jsx(Rp, { ...s, ref: t }) }) }) });
  }
), jp = m.forwardRef(
  (e, t) => {
    const r = mt(ke, e.__scopeMenu), n = m.useRef(null), s = ne(t, n);
    return m.useEffect(() => {
      const a = n.current;
      if (a) return Ra(a);
    }, []), /* @__PURE__ */ o.jsx(
      Zn,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: U(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), Rp = m.forwardRef((e, t) => {
  const r = mt(ke, e.__scopeMenu);
  return /* @__PURE__ */ o.jsx(
    Zn,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), Sp = /* @__PURE__ */ bt("MenuContent.ScrollLock"), Zn = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: s,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: f,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: v,
      disableOutsideScroll: b,
      ...h
    } = e, x = mt(ke, r), g = Yt(ke, r), C = Ir(r), y = Ni(r), w = yp(r), [N, A] = m.useState(null), M = m.useRef(null), j = ne(t, M, x.onContentChange), _ = m.useRef(0), D = m.useRef(""), k = m.useRef(0), T = m.useRef(null), O = m.useRef("right"), F = m.useRef(0), z = b ? Hn : m.Fragment, P = b ? { as: Sp, allowPinchZoom: !0 } : void 0, V = (I) => {
      var L, H;
      const E = D.current + I, B = w().filter((Z) => !Z.disabled), K = document.activeElement, q = (L = B.find((Z) => Z.ref.current === K)) == null ? void 0 : L.textValue, Q = B.map((Z) => Z.textValue), se = Vp(Q, E, q), ae = (H = B.find((Z) => Z.textValue === se)) == null ? void 0 : H.ref.current;
      (function Z(J) {
        D.current = J, window.clearTimeout(_.current), J !== "" && (_.current = window.setTimeout(() => Z(""), 1e3));
      })(E), ae && setTimeout(() => ae.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), Qs();
    const S = m.useCallback((I) => {
      var B, K;
      return O.current === ((B = T.current) == null ? void 0 : B.side) && $p(I, (K = T.current) == null ? void 0 : K.area);
    }, []);
    return /* @__PURE__ */ o.jsx(
      Ep,
      {
        scope: r,
        searchRef: D,
        onItemEnter: m.useCallback(
          (I) => {
            S(I) && I.preventDefault();
          },
          [S]
        ),
        onItemLeave: m.useCallback(
          (I) => {
            var E;
            S(I) || ((E = M.current) == null || E.focus(), A(null));
          },
          [S]
        ),
        onTriggerLeave: m.useCallback(
          (I) => {
            S(I) && I.preventDefault();
          },
          [S]
        ),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: m.useCallback((I) => {
          T.current = I;
        }, []),
        children: /* @__PURE__ */ o.jsx(z, { ...P, children: /* @__PURE__ */ o.jsx(
          In,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: U(a, (I) => {
              var E;
              I.preventDefault(), (E = M.current) == null || E.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ o.jsx(
              _n,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: f,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ o.jsx(
                  es,
                  {
                    asChild: !0,
                    ...y,
                    dir: g.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: U(l, (I) => {
                      g.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ o.jsx(
                      Na,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Wi(x.open),
                        "data-radix-menu-content": "",
                        dir: g.dir,
                        ...C,
                        ...h,
                        ref: j,
                        style: { outline: "none", ...h.style },
                        onKeyDown: U(h.onKeyDown, (I) => {
                          const B = I.target.closest("[data-radix-menu-content]") === I.currentTarget, K = I.ctrlKey || I.altKey || I.metaKey, q = I.key.length === 1;
                          B && (I.key === "Tab" && I.preventDefault(), !K && q && V(I.key));
                          const Q = M.current;
                          if (I.target !== Q || !gp.includes(I.key)) return;
                          I.preventDefault();
                          const ae = w().filter((L) => !L.disabled).map((L) => L.ref.current);
                          wi.includes(I.key) && ae.reverse(), Fp(ae);
                        }),
                        onBlur: U(e.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(_.current), D.current = "");
                        }),
                        onPointerMove: U(
                          e.onPointerMove,
                          Wt((I) => {
                            const E = I.target, B = F.current !== I.clientX;
                            if (I.currentTarget.contains(E) && B) {
                              const K = I.clientX > F.current ? "right" : "left";
                              O.current = K, F.current = I.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Ri.displayName = ke;
var Tp = "MenuGroup", Jn = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { role: "group", ...n, ref: t });
  }
);
Jn.displayName = Tp;
var Mp = "MenuLabel", Si = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { ...n, ref: t });
  }
);
Si.displayName = Mp;
var xr = "MenuItem", Fo = "menu.itemSelect", Dr = m.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...s } = e, a = m.useRef(null), i = Yt(xr, e.__scopeMenu), c = Xn(xr, e.__scopeMenu), l = ne(t, a), f = m.useRef(!1), u = () => {
      const d = a.current;
      if (!r && d) {
        const p = new CustomEvent(Fo, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Fo, (v) => n == null ? void 0 : n(v), { once: !0 }), qo(d, p), p.defaultPrevented ? f.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ o.jsx(
      Ti,
      {
        ...s,
        ref: l,
        disabled: r,
        onClick: U(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), f.current = !0;
        },
        onPointerUp: U(e.onPointerUp, (d) => {
          var p;
          f.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: U(e.onKeyDown, (d) => {
          const p = c.searchRef.current !== "";
          r || p && d.key === " " || Cn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Dr.displayName = xr;
var Ti = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: s, ...a } = e, i = Xn(xr, r), c = Ni(r), l = m.useRef(null), f = ne(t, l), [u, d] = m.useState(!1), [p, v] = m.useState("");
    return m.useEffect(() => {
      const b = l.current;
      b && v((b.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ o.jsx(
      $t.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: s ?? p,
        children: /* @__PURE__ */ o.jsx(ts, { asChild: !0, ...c, focusable: !n, children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: f,
            onPointerMove: U(
              e.onPointerMove,
              Wt((b) => {
                n ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: U(
              e.onPointerLeave,
              Wt((b) => i.onItemLeave(b))
            ),
            onFocus: U(e.onFocus, () => d(!0)),
            onBlur: U(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), Ap = "MenuCheckboxItem", Mi = m.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...s } = e;
    return /* @__PURE__ */ o.jsx(Di, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ o.jsx(
      Dr,
      {
        role: "menuitemcheckbox",
        "aria-checked": yr(r) ? "mixed" : r,
        ...s,
        ref: t,
        "data-state": eo(r),
        onSelect: U(
          s.onSelect,
          () => n == null ? void 0 : n(yr(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Mi.displayName = Ap;
var Ai = "MenuRadioGroup", [Pp, _p] = ft(
  Ai,
  { value: void 0, onValueChange: () => {
  } }
), Pi = m.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...s } = e, a = De(n);
    return /* @__PURE__ */ o.jsx(Pp, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ o.jsx(Jn, { ...s, ref: t }) });
  }
);
Pi.displayName = Ai;
var _i = "MenuRadioItem", Ii = m.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, s = _p(_i, e.__scopeMenu), a = r === s.value;
    return /* @__PURE__ */ o.jsx(Di, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ o.jsx(
      Dr,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": eo(a),
        onSelect: U(
          n.onSelect,
          () => {
            var i;
            return (i = s.onValueChange) == null ? void 0 : i.call(s, r);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ii.displayName = _i;
var Qn = "MenuItemIndicator", [Di, Ip] = ft(
  Qn,
  { checked: !1 }
), Oi = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...s } = e, a = Ip(Qn, r);
    return /* @__PURE__ */ o.jsx(
      Nt,
      {
        present: n || yr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ o.jsx(
          Y.span,
          {
            ...s,
            ref: t,
            "data-state": eo(a.checked)
          }
        )
      }
    );
  }
);
Oi.displayName = Qn;
var Dp = "MenuSeparator", Li = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(
      Y.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...n,
        ref: t
      }
    );
  }
);
Li.displayName = Dp;
var Op = "MenuArrow", Fi = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, s = Ir(r);
    return /* @__PURE__ */ o.jsx(ka, { ...s, ...n, ref: t });
  }
);
Fi.displayName = Op;
var Lp = "MenuSub", [Vh, zi] = ft(Lp), Lt = "MenuSubTrigger", Vi = m.forwardRef(
  (e, t) => {
    const r = mt(Lt, e.__scopeMenu), n = Yt(Lt, e.__scopeMenu), s = zi(Lt, e.__scopeMenu), a = Xn(Lt, e.__scopeMenu), i = m.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = a, f = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const d = c.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [c, l]), /* @__PURE__ */ o.jsx(qn, { asChild: !0, ...f, children: /* @__PURE__ */ o.jsx(
      Ti,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": s.contentId,
        "data-state": Wi(r.open),
        ...e,
        ref: kn(t, s.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: U(
          e.onPointerMove,
          Wt((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: U(
          e.onPointerLeave,
          Wt((d) => {
            var v, b;
            u();
            const p = (v = r.content) == null ? void 0 : v.getBoundingClientRect();
            if (p) {
              const h = (b = r.content) == null ? void 0 : b.dataset.side, x = h === "right", g = x ? -5 : 5, C = p[x ? "left" : "right"], y = p[x ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + g, y: d.clientY },
                  { x: C, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: C, y: p.bottom }
                ],
                side: h
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(d), d.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: U(e.onKeyDown, (d) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && d.key === " " || vp[n.dir].includes(d.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Vi.displayName = Lt;
var Bi = "MenuSubContent", $i = m.forwardRef(
  (e, t) => {
    const r = Ei(ke, e.__scopeMenu), { forceMount: n = r.forceMount, ...s } = e, a = mt(ke, e.__scopeMenu), i = Yt(ke, e.__scopeMenu), c = zi(Bi, e.__scopeMenu), l = m.useRef(null), f = ne(t, l);
    return /* @__PURE__ */ o.jsx($t.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(Nt, { present: n || a.open, children: /* @__PURE__ */ o.jsx($t.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(
      Zn,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...s,
        ref: f,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          i.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: U(e.onFocusOutside, (u) => {
          u.target !== c.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: U(e.onEscapeKeyDown, (u) => {
          i.onClose(), u.preventDefault();
        }),
        onKeyDown: U(e.onKeyDown, (u) => {
          var v;
          const d = u.currentTarget.contains(u.target), p = xp[i.dir].includes(u.key);
          d && p && (a.onOpenChange(!1), (v = c.trigger) == null || v.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
$i.displayName = Bi;
function Wi(e) {
  return e ? "open" : "closed";
}
function yr(e) {
  return e === "indeterminate";
}
function eo(e) {
  return yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Fp(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function zp(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function Vp(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = zp(e, Math.max(a, 0));
  s.length === 1 && (i = i.filter((f) => f !== r));
  const l = i.find(
    (f) => f.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function Bp(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const c = t[a], l = t[i], f = c.x, u = c.y, d = l.x, p = l.y;
    u > n != p > n && r < (d - f) * (n - u) / (p - u) + f && (s = !s);
  }
  return s;
}
function $p(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return Bp(r, t);
}
function Wt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Wp = ki, Up = qn, Hp = ji, Gp = Ri, Kp = Jn, qp = Si, Yp = Dr, Xp = Mi, Zp = Pi, Jp = Ii, Qp = Oi, eh = Li, th = Fi, rh = Vi, nh = $i, Or = "DropdownMenu", [oh, Bh] = $e(
  Or,
  [Ci]
), xe = Ci(), [sh, Ui] = oh(Or), Hi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: s,
    defaultOpen: a,
    onOpenChange: i,
    modal: c = !0
  } = e, l = xe(t), f = m.useRef(null), [u, d] = it({
    prop: s,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Or
  });
  return /* @__PURE__ */ o.jsx(
    sh,
    {
      scope: t,
      triggerId: at(),
      triggerRef: f,
      contentId: at(),
      open: u,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((p) => !p), [d]),
      modal: c,
      children: /* @__PURE__ */ o.jsx(Wp, { ...l, open: u, onOpenChange: d, dir: n, modal: c, children: r })
    }
  );
};
Hi.displayName = Or;
var Gi = "DropdownMenuTrigger", Ki = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...s } = e, a = Ui(Gi, r), i = xe(r);
    return /* @__PURE__ */ o.jsx(Up, { asChild: !0, ...i, children: /* @__PURE__ */ o.jsx(
      Y.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...s,
        ref: kn(t, a.triggerRef),
        onPointerDown: U(e.onPointerDown, (c) => {
          !n && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: U(e.onKeyDown, (c) => {
          n || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Ki.displayName = Gi;
var ah = "DropdownMenuPortal", qi = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = xe(t);
  return /* @__PURE__ */ o.jsx(Hp, { ...n, ...r });
};
qi.displayName = ah;
var Yi = "DropdownMenuContent", Xi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = Ui(Yi, r), a = xe(r), i = m.useRef(!1);
    return /* @__PURE__ */ o.jsx(
      Gp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: U(e.onCloseAutoFocus, (c) => {
          var l;
          i.current || (l = s.triggerRef.current) == null || l.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: U(e.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, f = l.button === 0 && l.ctrlKey === !0, u = l.button === 2 || f;
          (!s.modal || u) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Xi.displayName = Yi;
var ih = "DropdownMenuGroup", ch = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(Kp, { ...s, ...n, ref: t });
  }
);
ch.displayName = ih;
var lh = "DropdownMenuLabel", Zi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(qp, { ...s, ...n, ref: t });
  }
);
Zi.displayName = lh;
var uh = "DropdownMenuItem", Ji = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(Yp, { ...s, ...n, ref: t });
  }
);
Ji.displayName = uh;
var dh = "DropdownMenuCheckboxItem", Qi = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Xp, { ...s, ...n, ref: t });
});
Qi.displayName = dh;
var fh = "DropdownMenuRadioGroup", mh = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Zp, { ...s, ...n, ref: t });
});
mh.displayName = fh;
var ph = "DropdownMenuRadioItem", ec = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Jp, { ...s, ...n, ref: t });
});
ec.displayName = ph;
var hh = "DropdownMenuItemIndicator", tc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Qp, { ...s, ...n, ref: t });
});
tc.displayName = hh;
var gh = "DropdownMenuSeparator", rc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(eh, { ...s, ...n, ref: t });
});
rc.displayName = gh;
var vh = "DropdownMenuArrow", xh = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(th, { ...s, ...n, ref: t });
  }
);
xh.displayName = vh;
var yh = "DropdownMenuSubTrigger", nc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(rh, { ...s, ...n, ref: t });
});
nc.displayName = yh;
var bh = "DropdownMenuSubContent", oc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(
    nh,
    {
      ...s,
      ...n,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
oc.displayName = bh;
var wh = Hi, Ch = Ki, Nh = qi, sc = Xi, ac = Zi, ic = Ji, cc = Qi, lc = ec, uc = tc, dc = rc, fc = nc, mc = oc;
const kh = wh, Eh = Ch, jh = m.forwardRef(({ className: e, inset: t, children: r, ...n }, s) => /* @__PURE__ */ o.jsxs(
  fc,
  {
    ref: s,
    className: ee(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ o.jsx(Dm, { className: "ml-auto h-4 w-4" })
    ]
  }
));
jh.displayName = fc.displayName;
const Rh = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  mc,
  {
    ref: r,
    className: ee(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Rh.displayName = mc.displayName;
const pc = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ o.jsx(Nh, { children: /* @__PURE__ */ o.jsx(
  sc,
  {
    ref: n,
    sideOffset: t,
    className: ee(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
pc.displayName = sc.displayName;
const Ft = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  ic,
  {
    ref: n,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...r
  }
));
Ft.displayName = ic.displayName;
const Sh = m.forwardRef(({ className: e, children: t, checked: r, ...n }, s) => /* @__PURE__ */ o.jsxs(
  cc,
  {
    ref: s,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(uc, { children: /* @__PURE__ */ o.jsx(vi, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Sh.displayName = cc.displayName;
const Th = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  lc,
  {
    ref: n,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(uc, { children: /* @__PURE__ */ o.jsx(Vm, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Th.displayName = lc.displayName;
const Mh = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  ac,
  {
    ref: n,
    className: ee(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...r
  }
));
Mh.displayName = ac.displayName;
const Ah = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  dc,
  {
    ref: r,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Ah.displayName = dc.displayName;
function $h({
  classificationId: e = "UNCLASSIFIED",
  author: t = "UNKNOWN",
  type: r,
  biome: n,
  planetConfiguration: s,
  classificationConfig: a,
  content: i
}) {
  const c = wn.useSupabaseClient(), [l, f] = ye(!1), [u, d] = ye("detailed"), [p, v] = ye(() => {
    const h = s ? Qr(s) : {
      ...Jr,
      ...n ? { biome: n } : {},
      ...r ? { type: r } : {}
    };
    return (!h.landmarks || h.landmarks.length === 0) && (h.landmarks = cr(h)), h;
  });
  Xe(() => {
    const h = s ? Qr(s) : {
      ...Jr,
      ...n ? { biome: n } : {},
      ...r ? { type: r } : {}
    };
    if (!h.landmarks || h.landmarks.length === 0)
      h.landmarks = cr(h);
    else {
      const x = h.landmarks.some((C) => C.category === "terrestrial"), g = h.landmarks.some((C) => C.category === "gaseous");
      if (!x || !g) {
        const C = cr(h);
        if (!x) {
          const y = C.find((w) => w.category === "terrestrial");
          y && h.landmarks.push(y);
        }
        if (!g) {
          const y = C.find((w) => w.category === "gaseous");
          y && h.landmarks.push(y);
        }
      }
    }
    v(h);
  }, [s, n, r]), Xe(() => {
    (async () => {
      var w;
      const x = Number.parseInt(e);
      if (isNaN(x)) return;
      const { data: g, error: C } = await c.from("classifications").select("classificationConfiguration").eq("id", x).single();
      if (C || !((w = g == null ? void 0 : g.classificationConfiguration) != null && w.exportedValue)) return;
      const { exportedValue: y } = g.classificationConfiguration;
      v((N) => ({
        ...N,
        ...y.mass && { mass: y.mass },
        ...y.radius && { radius: y.radius }
      }));
    })();
  }, [e, c]), Xe(() => {
    v((h) => ({
      ...h,
      density: Ho(h.mass, h.radius)
    }));
  }, [p.mass, p.radius]);
  const b = () => {
    switch (u) {
      case "detailed":
        return "Detailed View";
      case "stylized":
        return "Stylized View";
      case "simple":
        return "Simple View";
      case "standard":
        return "Standard Render";
      default:
        return "Detailed View";
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "w-full h-screen relative overflow-hidden", children: [
    /* @__PURE__ */ o.jsxs(Vo, { camera: { position: [0, 0, 10], fov: 45 }, children: [
      /* @__PURE__ */ o.jsx("ambientLight", { intensity: 0.4 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [10, 10, 10], intensity: 2 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [-10, -10, -10], intensity: 0.5, color: "#b0c4de" }),
      /* @__PURE__ */ o.jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5, castShadow: !0 }),
      /* @__PURE__ */ o.jsx(vc, { preset: "sunset" }),
      u === "detailed" && /* @__PURE__ */ o.jsx(_c, { planetStats: p }),
      u === "stylized" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Bc, { planetStats: p }),
        /* @__PURE__ */ o.jsx($c, { planetStats: p })
      ] }),
      u === "simple" && /* @__PURE__ */ o.jsx(Fc, { planetStats: p }),
      u === "standard" && /* @__PURE__ */ o.jsx(sl, { planetStats: p }),
      /* @__PURE__ */ o.jsx(xc, { radius: 100, depth: 50, count: 5e3, factor: 4, saturation: 0, fade: !0, speed: 1 }),
      /* @__PURE__ */ o.jsx(Bo, { enableZoom: !0, enablePan: !0, enableRotate: !0 }),
      /* @__PURE__ */ o.jsxs("mesh", { position: [0, 0, -15], children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [5, 32, 32] }),
        /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: "#4060ff", transparent: !0, opacity: 0.03 })
      ] })
    ] }, u),
    /* @__PURE__ */ o.jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [
      /* @__PURE__ */ o.jsxs(kh, { children: [
        /* @__PURE__ */ o.jsx(Eh, { asChild: !0, children: /* @__PURE__ */ o.jsxs(de, { variant: "outline", size: "sm", className: "bg-black/50 hover:bg-black/70 text-white", children: [
          b(),
          /* @__PURE__ */ o.jsx(Kn, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ o.jsxs(pc, { className: "bg-black/80 border-slate-700 text-white", children: [
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: u === "detailed" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => d("detailed"),
              children: "Detailed View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: u === "stylized" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => d("stylized"),
              children: "Stylized View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: u === "simple" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => d("simple"),
              children: "Simple View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: u === "standard" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => d("standard"),
              children: "Standard Render"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsx(
        de,
        {
          variant: "outline",
          size: "icon",
          className: "bg-black/50 hover:bg-black/70 text-white",
          onClick: () => f(!l),
          children: /* @__PURE__ */ o.jsx($m, { className: "h-4 w-4" })
        }
      )
    ] }),
    l && /* @__PURE__ */ o.jsx(
      pp,
      {
        planetStats: p,
        setPlanetStats: v,
        classificationId: e,
        author: t
      }
    )
  ] });
}
export {
  $h as PlanetGenerator
};
