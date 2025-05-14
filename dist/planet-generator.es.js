import * as m from "react";
import Pe, { useRef as fe, useState as ye, useMemo as Ce, useEffect as Xe, forwardRef as Ct, useLayoutEffect as hc, createElement as Zr } from "react";
import { useThree as zo, useFrame as Wt, Canvas as Bo } from "@react-three/fiber";
import { Html as Nn, Sphere as st, OrbitControls as Vo, Environment as gc, Stars as vc } from "@react-three/drei";
import * as R from "three";
import * as yr from "react-dom";
import xc from "react-dom";
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
function yc() {
  if (to) return _t;
  to = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var c in s)
        c !== "key" && (i[c] = s[c]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
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
function bc() {
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
        case y:
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
          case x:
            return "Portal";
          case b:
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
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(E) {
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
    function d(E, B, K, q, Q, se, ae, L) {
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
    function f(E, B, K, q, Q, se, ae, L) {
      var U = B.children;
      if (U !== void 0)
        if (q)
          if (O(U)) {
            for (q = 0; q < U.length; q++)
              u(U[q]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(U);
      if (T.call(B, "key")) {
        U = e(E);
        var Z = Object.keys(B).filter(function(te) {
          return te !== "key";
        });
        q = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", I[U + q] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          U,
          Z,
          U
        ), I[U + q] = !0);
      }
      if (U = null, K !== void 0 && (r(K), U = "" + K), a(B) && (r(B.key), U = "" + B.key), "key" in B) {
        K = {};
        for (var J in B)
          J !== "key" && (K[J] = B[J]);
      } else K = B;
      return U && c(
        K,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), d(
        E,
        U,
        se,
        Q,
        s(),
        K,
        ae,
        L
      );
    }
    function u(E) {
      typeof E == "object" && E !== null && E.$$typeof === v && E._store && (E._store.validated = 1);
    }
    var p = Pe, v = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), b = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), k = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, O = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var z, P = {}, H = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), S = F(n(i)), I = {};
    It.Fragment = h, It.jsx = function(E, B, K, q, Q) {
      var se = 1e4 > k.recentlyCreatedOwnerStacks++;
      return f(
        E,
        B,
        K,
        !1,
        q,
        Q,
        se ? Error("react-stack-top-frame") : H,
        se ? F(n(E)) : S
      );
    }, It.jsxs = function(E, B, K, q, Q) {
      var se = 1e4 > k.recentlyCreatedOwnerStacks++;
      return f(
        E,
        B,
        K,
        !0,
        q,
        Q,
        se ? Error("react-stack-top-frame") : H,
        se ? F(n(E)) : S
      );
    };
  }()), It;
}
var no;
function $o() {
  return no || (no = 1, process.env.NODE_ENV === "production" ? Zt.exports = yc() : Zt.exports = bc()), Zt.exports;
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
function Ho(e, t) {
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
function wc() {
  return Object.keys(ir);
}
const Cc = {
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
}, Nc = {
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
  const r = Nc[t] || { r: 0, g: 0, b: 0 }, n = kc(e);
  return n.r = Math.max(0, Math.min(1, n.r + r.r)), n.g = Math.max(0, Math.min(1, n.g + r.g)), n.b = Math.max(0, Math.min(1, n.b + r.b)), Ec(Math.floor(n.r * 255), Math.floor(n.g * 255), Math.floor(n.b * 255));
}
function kc(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: Number.parseInt(t[1], 16) / 255,
    g: Number.parseInt(t[2], 16) / 255,
    b: Number.parseInt(t[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}
function Ec(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function zt(e) {
  return Cc[e] || {
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
const jc = `
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
`, Rc = `
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
`, Sc = `
  varying vec3 vNormal;
  varying vec2 vUv;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, Tc = `
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
`, Mc = `
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
`, Ac = `
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
function Wo({ pointInfo: e, planetStats: t }) {
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
function Pc({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = fe(null), [s, i] = ye(null), { raycaster: a, camera: c, gl: l } = zo(), { planetMaterial: d, atmosphereMaterial: f, cloudsMaterial: u } = Ce(() => {
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
      vertexShader: jc,
      fragmentShader: Rc
    }), b = new R.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new R.Color(8900331) },
        strength: { value: e.atmosphereStrength || 0.8 }
      },
      vertexShader: Sc,
      fragmentShader: Tc,
      transparent: !0,
      side: R.DoubleSide,
      depthWrite: !1
    }), w = new R.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        cloudCount: { value: e.cloudCount || 30 }
      },
      vertexShader: Mc,
      fragmentShader: Ac,
      transparent: !0,
      depthWrite: !1
    });
    return {
      planetMaterial: C,
      atmosphereMaterial: b,
      cloudsMaterial: w
    };
  }, [e]);
  Xe(() => {
    if (!e.landmarks || e.landmarks.length === 0) {
      d.uniforms.landmarkCount.value = 0;
      return;
    }
    const g = e.landmarks.slice(0, 10), C = [], b = [];
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
      b.push(
        w.influence_radius || 0.5,
        w.influence_strength || 0.7,
        w.influence_roughness || 0.5,
        A
      );
    }), d.uniforms.landmarkPositions.value = C, d.uniforms.landmarkInfluences.value = b, d.uniforms.landmarkCount.value = g.length;
  }, [e.landmarks, d.uniforms]);
  const p = (g) => {
    if (g.stopPropagation(), !t.current) return;
    const C = new R.Vector2(
      g.clientX / l.domElement.clientWidth * 2 - 1,
      -(g.clientY / l.domElement.clientHeight) * 2 + 1
    );
    a.setFromCamera(C, c);
    const b = a.intersectObject(t.current);
    if (b.length > 0) {
      const w = b[0].point, N = w.clone().normalize(), A = d.uniforms.surfaceRoughness.value * d.uniforms.mountainHeight.value * 0.08 * Math.sin(w.x * 10 + w.y * 10 + w.z * 10), M = d.uniforms.waterLevel.value;
      let j = "Mountain";
      A < -0.05 ? j = "Ocean Floor" : A < M ? j = "Beach" : A < M + 0.1 && (j = "Lowland");
      const _ = e.temperature, D = A * 10, k = _ - D, O = k - 273;
      i({
        position: w,
        normalizedPosition: N,
        height: A,
        terrainType: j,
        temperature: k,
        relativeToWaterTemp: O
      });
    }
  };
  Wt((g) => {
    t.current && (t.current.rotation.y += 1e-3, d.uniforms.time.value = g.clock.elapsedTime), r.current && (r.current.rotation.y += 5e-4, f.uniforms.time.value = g.clock.elapsedTime), n.current && (n.current.rotation.y += 12e-4, u.uniforms.time.value = g.clock.elapsedTime);
  });
  const x = !(e.mass > 7 || e.radius > 2.5) && e.cloudCount && e.cloudCount > 0, h = (g, C) => g > 7 || C > 2.5 ? "gaseous" : "terrestrial", y = Ce(() => {
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
      /* @__PURE__ */ o.jsx(st, { ref: t, args: [1, 256, 256], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: d, attach: "material" }) }),
      /* @__PURE__ */ o.jsx(st, { ref: r, args: [1.1, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: f, attach: "material" }) }),
      x && /* Increased clouds resolution */
      /* @__PURE__ */ o.jsx(st, { ref: n, args: [1.02, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: u, attach: "material" }) }),
      y
    ] }),
    s && /* @__PURE__ */ o.jsx(Wo, { pointInfo: s, planetStats: e })
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
  landmarks: []
};
function _c(e, t) {
  return e / Math.pow(t, 3) * 5.51;
}
function dt(e, t) {
  return e > 7 || t > 2.5 ? "gaseous" : "terrestrial";
}
function Uo(e) {
  return e >= 273 && e <= 373 ? { type: "water", color: "#1E4D6B" } : e >= 91 && e <= 112 ? { type: "methane", color: "#7FB3D5" } : e >= 63 && e <= 77 ? { type: "nitrogen", color: "#90EE90" } : e >= 195 && e <= 240 ? { type: "ammonia", color: "#D8BFD8" } : e >= 90 && e <= 184 ? { type: "ethane", color: "#FFD700" } : { type: "none", color: "#8B4513" };
}
function Go(e, t) {
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
  return { ...Jr, ...e };
}
function Or(e) {
  return [];
}
function Oc(e, t, r) {
  return 0;
}
function oo(e, t, r) {
  let n = 0, s = 0;
  if (t && Array.isArray(t))
    for (let i = 0; i < t.length; i++) {
      const a = t[i];
      if (!a || !a.influence_radius || !a.influence_strength || !a.coordinates)
        continue;
      const c = typeof a.coordinates.x == "number" ? a.coordinates.x : 0, l = typeof a.coordinates.y == "number" ? a.coordinates.y : 0, d = typeof a.coordinates.z == "number" ? a.coordinates.z : 0, f = new R.Vector3(c, l, d).normalize().multiplyScalar(r), u = e.distanceTo(f), p = a.influence_radius * r;
      if (u < p) {
        const v = u / p, x = a.influence_strength * (1 - v);
        let h = 0;
        switch (a.influence_type) {
          case "crater":
            h = -x * 0.05;
            break;
          case "mountain":
            h = x * 0.08;
            break;
          case "valley":
            h = -x * 0.03;
            break;
          case "volcano":
            h = x * 0.1;
            break;
          case "basin":
            h = -x * 0.04;
            break;
          case "dune":
            h = x * 0.02 * Math.sin(u * 5);
            break;
          case "glacier":
            h = x * 0.06;
            break;
          case "storm":
          case "vortex":
          case "band":
          case "spot":
            h = x * 0.03;
            break;
          default:
            h = x * 0.05;
        }
        let y = 0;
        a.influence_type === "volcano" ? y = x * 0.2 : a.influence_type === "glacier" && (y = -x * 0.1), n += h, s += y;
      }
    }
  return {
    height: n,
    roughness: s
  };
}
function Lc({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = dt(e.mass, e.radius), s = Ce(() => {
    const i = e.customColors || zt(e.biome || "Rocky Highlands"), a = new R.Color(i.regular || "#A1887F"), c = new R.MeshStandardMaterial({
      color: a,
      roughness: 0.7,
      metalness: 0.1
    }), l = n === "terrestrial" ? new R.Color(8900331) : new R.Color(16777215), d = n === "terrestrial" ? e.atmosphereStrength ? e.atmosphereStrength * 0.4 : 0.25 : 0.15, f = new R.MeshPhongMaterial({
      color: l,
      transparent: !0,
      opacity: d,
      side: R.DoubleSide,
      depthWrite: !1
    });
    return { planetMaterial: c, atmosphereMaterial: f };
  }, [e, n]);
  return Wt(() => {
    t.current && (t.current.rotation.y += 1e-3), r.current && (r.current.rotation.y += 5e-4);
  }), /* @__PURE__ */ o.jsxs("group", { children: [
    /* @__PURE__ */ o.jsx(st, { ref: t, args: [1, 64, 64], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.planetMaterial, attach: "material" }) }),
    /* @__PURE__ */ o.jsx(st, { ref: r, args: [1.1, 32, 32], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.atmosphereMaterial, attach: "material" }) })
  ] });
}
const Fc = `
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
`, zc = `
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
    const s = e.customColors || zt(e.biome || "Rocky Highlands"), i = new R.ShaderMaterial({
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
      vertexShader: Fc,
      fragmentShader: zc
    });
    return r.current = i, i;
  }, []);
  return Xe(() => {
    if (!r.current || !e.landmarks || e.landmarks.length === 0) {
      r.current && (r.current.uniforms.landmarkCount.value = 0);
      return;
    }
    const s = e.landmarks.slice(0, 10), i = [], a = [];
    s.forEach((c) => {
      const l = new R.Vector3(c.coordinates.x, c.coordinates.y, c.coordinates.z).normalize();
      i.push(l.x, l.y, l.z);
      let d = 1;
      switch (c.influence_type) {
        case "crater":
          d = 0;
          break;
        case "mountain":
          d = 1;
          break;
        case "valley":
          d = 2;
          break;
        case "volcano":
          d = 3;
          break;
        case "glacier":
          d = 4;
          break;
        case "basin":
          d = 5;
          break;
        default:
          d = 6;
      }
      a.push(
        c.influence_radius || 0.5,
        c.influence_strength || 0.7,
        c.influence_roughness || 0.5,
        d
      );
    }), r.current.uniforms.landmarkPositions.value = new Float32Array(i), r.current.uniforms.landmarkInfluences.value = new Float32Array(a), r.current.uniforms.landmarkCount.value = s.length;
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
  }, [e]), Wt((s) => {
    t.current && r.current && (t.current.rotation.y += 1e-3, r.current.uniforms.time.value = s.clock.elapsedTime);
  }), /* @__PURE__ */ o.jsx(st, { ref: t, args: [1, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: n, attach: "material" }) });
}
function Vc({ planetStats: e }) {
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
  return Wt(() => {
    n && t.current && (t.current.rotation.y += 5e-4);
  }), n ? /* @__PURE__ */ o.jsx(st, { ref: t, args: [1.02, 64, 64], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.current, attach: "material" }) }) : null;
}
const ue = new Uint8Array(512), so = new Uint8Array(256);
function $c() {
  for (let e = 0; e < 256; e++)
    so[e] = Math.floor(Math.random() * 256);
  for (let e = 0; e < 512; e++)
    ue[e] = so[e & 255];
}
$c();
function Lr(e) {
  return e * e * e * (e * (e * 6 - 15) + 10);
}
function tt(e, t, r) {
  return (1 - r) * e + r * t;
}
function He(e, t, r, n) {
  const s = e & 15, i = s < 8 ? t : r, a = s < 4 ? r : s === 12 || s === 14 ? t : n;
  return ((s & 1) === 0 ? i : -i) + ((s & 2) === 0 ? a : -a);
}
function oe(e, t, r) {
  const n = Math.floor(e) & 255, s = Math.floor(t) & 255, i = Math.floor(r) & 255;
  e -= Math.floor(e), t -= Math.floor(t), r -= Math.floor(r);
  const a = Lr(e), c = Lr(t), l = Lr(r), d = ue[n] + s, f = ue[d] + i, u = ue[d + 1] + i, p = ue[n + 1] + s, v = ue[p] + i, x = ue[p + 1] + i;
  return tt(
    tt(
      tt(He(ue[f], e, t, r), He(ue[v], e - 1, t, r), a),
      tt(He(ue[u], e, t - 1, r), He(ue[x], e - 1, t - 1, r), a),
      c
    ),
    tt(
      tt(He(ue[f + 1], e, t, r - 1), He(ue[v + 1], e - 1, t, r - 1), a),
      tt(He(ue[u + 1], e, t - 1, r - 1), He(ue[x + 1], e - 1, t - 1, r - 1), a),
      c
    ),
    l
  );
}
function Hc(e, t) {
  const r = /* @__PURE__ */ new Map(), n = 12, i = new R.IcosahedronGeometry(1, n).getAttribute("position");
  for (let a = 0; a < i.count; a++) {
    const c = i.getX(a), l = i.getY(a), d = i.getZ(a), f = new R.Vector3(c, l, d).normalize();
    let u = 0;
    if (t === "terrestrial") {
      const v = (e.surfaceRoughness || 0.5) * 1.2;
      let x = 1, h = 1, y = 0.5;
      for (let b = 0; b < 7; b++) {
        const w = oe(
          f.x * x * v,
          f.y * x * v,
          f.z * x * v
        );
        u += w * h, h *= y, x *= 2;
      }
      u *= e.mountainHeight || 0.5, e.terrainErosion && (u *= 1 - e.terrainErosion * 0.3);
      const g = f.clone().multiplyScalar(e.radius), C = oo(g, e.landmarks, e.radius);
      if (u += C.height, C.roughness > 0) {
        const b = oe(
          f.x * 20 * C.roughness,
          f.y * 20 * C.roughness,
          f.z * 20 * C.roughness
        ) * C.roughness * 0.2;
        u += b;
      }
    } else {
      const v = e.surfaceRoughness || 0.5;
      if (u = oe(f.x * 2 * v, f.y * 2 * v, f.z * 2 * v) * 0.1, e.landmarks && e.landmarks.length > 0) {
        const x = f.clone().multiplyScalar(e.radius), h = oo(x, e.landmarks, e.radius);
        u += h.height * 0.5;
      }
    }
    const p = `${f.x.toFixed(5)},${f.y.toFixed(5)},${f.z.toFixed(5)}`;
    r.set(p, u);
  }
  return {
    getHeight: (a) => {
      const c = `${a.x.toFixed(5)},${a.y.toFixed(5)},${a.z.toFixed(5)}`, l = r.get(c);
      if (l !== void 0) return l;
      let d = Number.POSITIVE_INFINITY, f = 0;
      return r.forEach((u, p) => {
        const [v, x, h] = p.split(",").map(Number.parseFloat), y = new R.Vector3(v, x, h), g = a.distanceTo(y);
        g < d && (d = g, f = u);
      }), f;
    }
  };
}
const Wc = Ct(function({ planetStats: t }, r) {
  const n = dt(t.mass, t.radius), s = Ce(() => {
    const l = t.customColors || zt(t.biome || "Rocky Highlands");
    return t.soilType && n === "terrestrial" ? {
      oceanFloor: Jt(l.oceanFloor || "#5D4037", t.soilType),
      beach: Jt(l.beach || "#8D6E63", t.soilType),
      regular: Jt(l.regular || "#A1887F", t.soilType),
      mountain: Jt(l.mountain || "#D7CCC8", t.soilType)
    } : l;
  }, [t.biome, t.customColors, t.soilType, n]), i = Ce(() => Hc(t, n), [t, n]), { surfaceGeometry: a, surfaceMaterial: c } = Ce(() => {
    const l = new R.IcosahedronGeometry(t.radius, 11), d = l.getAttribute("position"), f = [], u = [], p = [], v = Ic(t.soilTexture || "rough");
    for (let y = 0; y < d.count; y++) {
      const g = d.getX(y), C = d.getY(y), b = d.getZ(y), w = new R.Vector3(g, C, b), N = w.clone().normalize();
      let A = i.getHeight(N);
      const M = 0.5 + Math.atan2(N.z, N.x) / (2 * Math.PI), j = 0.5 - Math.asin(N.y) / Math.PI;
      p.push(M, j), t.landmarks && t.landmarks.length > 0 && t.landmarks.forEach((P) => {
        Oc(N, P, t.radius);
      });
      const _ = n === "terrestrial" ? 0.08 : 0.05, D = t.surfaceRoughness || 0.5, k = A * _ * D * 1.5;
      let T = 0;
      if (n === "terrestrial" && k > 0.05) {
        const { scale: P, depth: H, pattern: S } = v;
        switch (S) {
          case "cracks":
            T = Uc(N, P, H);
            break;
          case "layers":
            T = Gc(N, P, H);
            break;
          case "crystals":
            T = Kc(N, P, H);
            break;
          case "pores":
            T = qc(N, P, H);
            break;
          case "grains":
            T = Yc(N, P, H);
            break;
          default:
            T = Xc(N, P, H, v.irregularity);
        }
        t.soilType === "volcanic" ? T *= 1.5 : t.soilType === "sandy" && (T *= 0.7);
      }
      w.add(N.clone().multiplyScalar(k - T)), f.push(w);
      const O = t.waterLevel || 0, F = Dc(k, O), z = Zc(F, s, t, N, v);
      u.push(z);
    }
    for (let y = 0; y < d.count; y++) {
      const g = f[y];
      d.setXYZ(y, g.x, g.y, g.z);
    }
    d.needsUpdate = !0, l.computeVertexNormals();
    const x = new R.Float32BufferAttribute(new Float32Array(d.count * 3), 3);
    for (let y = 0; y < u.length; y++)
      x.setXYZ(y, u[y].r, u[y].g, u[y].b);
    l.setAttribute("color", x), l.setAttribute("uv", new R.Float32BufferAttribute(new Float32Array(p), 2));
    let h;
    return n === "terrestrial" ? h = new R.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.7,
      metalness: 0.1,
      flatShading: !1
    }) : h = Jc(t), { surfaceGeometry: l, surfaceMaterial: h };
  }, [t, n, s, i]);
  return /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: a, material: c });
});
function Uc(e, t, r) {
  const n = oe(e.x * t * 2, e.y * t * 2, e.z * t * 2), s = oe(e.x * t * 5, e.y * t * 5, e.z * t * 5);
  return (Math.abs(n) < 0.1 ? r * 1.5 : 0) + (Math.abs(s) < 0.05 ? r * 0.8 : 0);
}
function Gc(e, t, r) {
  const n = oe(e.x * t * 0.5, e.y * t * 0.5, e.z * t * 0.5);
  return Math.sin(n * 20) * r * 0.8;
}
function Kc(e, t, r) {
  const n = oe(e.x * t * 3, e.y * t * 3, e.z * t * 3);
  return n > 0.7 || n < -0.7 ? r * 1.2 : 0;
}
function qc(e, t, r) {
  return oe(e.x * t * 4, e.y * t * 4, e.z * t * 4) > 0.8 ? r * 1.5 : 0;
}
function Yc(e, t, r) {
  const n = oe(e.x * t * 8, e.y * t * 8, e.z * t * 8), s = oe(e.x * t * 12, e.y * t * 12, e.z * t * 12);
  return n * s * r;
}
function Xc(e, t, r, n) {
  return oe(e.x * t, e.y * t, e.z * t) * r * n;
}
function Zc(e, t, r, n, s) {
  const i = {
    [Ae.OceanFloor]: t.oceanFloor,
    [Ae.Beach]: t.beach,
    [Ae.Regular]: t.regular,
    [Ae.Mountain]: t.mountain
  }, a = new R.Color(i[e] || t.regular);
  let c = a;
  if (r.soilType) {
    const d = {
      rocky: new R.Color(11770240),
      sandy: new R.Color(13808780),
      volcanic: new R.Color(3815994),
      organic: new R.Color(5082199),
      dusty: new R.Color(10506797),
      frozen: new R.Color(14745599),
      muddy: new R.Color(6373670)
    }, f = d[r.soilType] || d.rocky, u = {
      [Ae.OceanFloor]: 0.3,
      [Ae.Beach]: 0.6,
      [Ae.Regular]: 0.7,
      [Ae.Mountain]: 0.8
    };
    if (c = a.clone().lerp(f, u[e] || 0.5), e === Ae.Mountain && (oe(n.x * 50, n.y * 50, n.z * 50) * 0.1 < 0 ? c.multiplyScalar(0.9) : c.multiplyScalar(1.1), r.soilTexture)) {
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
function Jc(e) {
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
  let n, s, i;
  return e.temperature < 100 ? (n = new R.Color(4620980), s = new R.Color(2003199), i = new R.Color(49151)) : e.temperature > 300 ? (n = new R.Color(13458524), s = new R.Color(15761536), i = new R.Color(16416882)) : (n = new R.Color(10145074), s = new R.Color(7048739), i = new R.Color(5597999)), new R.ShaderMaterial({
    uniforms: {
      color1: { value: n },
      color2: { value: s },
      color3: { value: i },
      roughness: { value: e.surfaceRoughness || 0.5 }
    },
    vertexShader: t,
    fragmentShader: r
  });
}
const Qc = Ct(function({ planetStats: t }, r) {
  const n = Uo(t.temperature), s = Go(t.temperature, t.liquidType || n.type), { liquidGeometry: i, liquidMaterial: a } = Ce(() => {
    const c = t.liquidEnabled !== !1 && (t.waterLevel || 0) > 0 && s, l = {
      water: new R.Color(1996980),
      methane: new R.Color(8369109),
      nitrogen: new R.Color(9498256),
      ammonia: new R.Color(14204888),
      ethane: new R.Color(16766720)
    }, d = l[t.liquidType] || l.water;
    t.liquidType === "water" && (t.temperature < 283 ? d.lerp(new R.Color(18347), 0.3) : t.temperature > 350 && d.lerp(new R.Color(25600), 0.2), t.salinity && d.lerp(new R.Color(18347), t.salinity * 0.5));
    const f = new R.MeshPhysicalMaterial({
      color: d,
      transparent: !0,
      opacity: c ? 0.8 : 0,
      roughness: 0.1,
      metalness: 0.2,
      envMapIntensity: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
      ior: 1.4,
      transmission: 0.95
    }), u = c ? Math.max(t.waterLevel || 0, 0.5) : t.waterLevel || 0, p = t.radius * (1 + u * 0.02), v = new R.IcosahedronGeometry(p, 9), x = v.getAttribute("position");
    for (let h = 0; h < x.count; h++) {
      const y = x.getX(h), g = x.getY(h), C = x.getZ(h), b = new R.Vector3(y, g, C), w = b.clone().normalize(), N = oe(w.x * 10, w.y * 10, w.z * 10) * 5e-3;
      b.add(w.clone().multiplyScalar(N)), x.setXYZ(h, b.x, b.y, b.z);
    }
    return x.needsUpdate = !0, v.computeVertexNormals(), { liquidGeometry: v, liquidMaterial: f };
  }, [t, s]);
  return !i || !a ? null : /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: i, material: a });
}), el = Ct(function({ planetStats: t }, r) {
  const n = dt(t.mass, t.radius), { atmosphereGeometry: s, atmosphereMaterial: i } = Ce(() => {
    const a = new R.IcosahedronGeometry(t.radius * 1.1, 9);
    let c;
    if (n === "terrestrial") {
      const l = {
        water: new R.Color(8900331),
        co2: new R.Color(13882323),
        methane: new R.Color(10145074),
        snow: new R.Color(15792383),
        none: new R.Color(11393254)
      }, d = l[t.precipitationCompound] || l.none;
      t.temperature < 200 ? d.lerp(new R.Color(4620980), 0.3) : t.temperature > 350 && d.lerp(new R.Color(16752762), 0.3);
      const f = t.atmosphereStrength ? t.atmosphereStrength * 0.4 : 0.25;
      c = new R.MeshPhongMaterial({
        color: d,
        transparent: !0,
        opacity: f,
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
    return { atmosphereGeometry: a, atmosphereMaterial: c };
  }, [t, n]);
  return /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: s, material: i });
}), tl = Ct(function({ planetStats: t }, r) {
  const n = Ce(() => {
    if (!t.cloudCount || t.cloudCount <= 0)
      return [];
    const s = [], i = Math.min(t.cloudCount, 100);
    for (let a = 0; a < i; a++) {
      const c = Math.random() * Math.PI * 2, l = Math.random() * Math.PI, d = Math.sin(l) * Math.cos(c), f = Math.sin(l) * Math.sin(c), u = Math.cos(l), p = new R.Vector3(d, f, u).normalize(), v = 0.05 + Math.random() * 0.15, x = `cloud-${a}`;
      s.push({
        key: x,
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
function rl(e, t) {
  return e / (1.3333333333333333 * Math.PI * Math.pow(t, 3)) > 1 ? "terrestrial" : "gaseous";
}
function nl({ planetStats: e }) {
  const r = rl(e.mass, e.radius) === "gaseous", s = (e.landmarks || []).filter((a) => {
    if (!a.category) {
      const c = ["storm", "vortex", "band", "spot", "turbulent", "cyclone", "anticyclone", "zonal_flow"];
      return r ? c.includes(a.influence_type || "") : !c.includes(a.influence_type || "");
    }
    return r ? a.category === "gaseous" : a.category === "terrestrial";
  }), i = Ce(() => s.map((a, c) => {
    const { x: l, y: d, z: f } = a.coordinates, u = new R.Vector3(l, d, f).normalize().multiplyScalar(e.radius * 1.02);
    let p = "#22c55e";
    a.type.includes("Volcano") || a.type.includes("Storm") ? p = "#ef4444" : a.type.includes("Ocean") || a.type.includes("Water") ? p = "#3b82f6" : a.type.includes("Ice") || a.type.includes("Frozen") ? p = "#a5f3fc" : (a.type.includes("Sand") || a.type.includes("Desert")) && (p = "#fcd34d");
    const v = a.visual_effect && a.visual_effect !== "None";
    return /* @__PURE__ */ o.jsxs("group", { position: [u.x, u.y, u.z], children: [
      /* @__PURE__ */ o.jsxs("mesh", { children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.03, 16, 16] }),
        /* @__PURE__ */ o.jsx("meshStandardMaterial", { color: p })
      ] }),
      v && /* @__PURE__ */ o.jsxs("mesh", { children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.05, 16, 16] }),
        /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: p, transparent: !0, opacity: 0.3, depthWrite: !1 })
      ] }),
      /* @__PURE__ */ o.jsx(Nn, { position: [0, 0.1, 0], center: !0, distanceFactor: 10, occlude: !0, children: /* @__PURE__ */ o.jsx("div", { className: "bg-black/80 text-green-400 px-2 py-1 text-xs font-mono rounded border border-green-500/50 whitespace-nowrap", children: a.classification_id }) })
    ] }, c);
  }), [s, e.radius]);
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: i });
}
function ol({ planetStats: e }) {
  const t = dt(e.mass, e.radius), [r, n] = ye(null), { raycaster: s, camera: i, gl: a } = zo(), c = {
    surface: fe(null),
    atmosphere: fe(null),
    liquid: fe(null),
    clouds: fe(null),
    group: fe(null)
  }, l = (d) => {
    if (d.stopPropagation(), !c.surface.current) return;
    const f = new R.Vector2(
      d.clientX / a.domElement.clientWidth * 2 - 1,
      -(d.clientY / a.domElement.clientHeight) * 2 + 1
    );
    s.setFromCamera(f, i);
    const u = s.intersectObject(c.surface.current);
    if (u.length > 0) {
      const p = u[0].point, v = p.clone().normalize(), x = p.length() - e.radius;
      let h = "Mountain";
      x < -0.05 ? h = "Ocean Floor" : x < 0 ? h = "Beach" : x < 0.05 && (h = "Lowland");
      const y = e.temperature, g = x * 10, C = y - g, w = C - 273;
      n({
        position: p,
        normalizedPosition: v,
        height: x,
        terrainType: h,
        temperature: C,
        relativeToWaterTemp: w
      });
    }
  };
  return Wt(() => {
    c.surface.current && (c.surface.current.rotation.y += 1e-3), c.atmosphere.current && (c.atmosphere.current.rotation.y += 5e-4), c.liquid.current && (c.liquid.current.rotation.y += 8e-4), c.clouds.current && (c.clouds.current.rotation.y += 12e-4);
  }), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("group", { ref: c.group, onClick: l, children: [
      /* @__PURE__ */ o.jsx(Wc, { planetStats: e, ref: c.surface }),
      t === "terrestrial" && /* @__PURE__ */ o.jsx(Qc, { planetStats: e, ref: c.liquid }),
      /* @__PURE__ */ o.jsx(el, { planetStats: e, ref: c.atmosphere }),
      t === "terrestrial" && e.cloudCount && e.cloudCount > 0 && /* @__PURE__ */ o.jsx(tl, { planetStats: e, ref: c.clouds }),
      e.landmarks && e.landmarks.length > 0 && /* @__PURE__ */ o.jsx(nl, { planetStats: e })
    ] }),
    r && /* @__PURE__ */ o.jsx(Wo, { pointInfo: r, planetStats: e })
  ] });
}
function W(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function $e(e, t = []) {
  let r = [];
  function n(i, a) {
    const c = m.createContext(a), l = r.length;
    r = [...r, a];
    const d = (u) => {
      var g;
      const { scope: p, children: v, ...x } = u, h = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[l]) || c, y = m.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ o.jsx(h.Provider, { value: y, children: v });
    };
    d.displayName = i + "Provider";
    function f(u, p) {
      var h;
      const v = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[l]) || c, x = m.useContext(v);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return [d, f];
  }
  const s = () => {
    const i = r.map((a) => m.createContext(a));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return s.scopeName = e, [n, sl(s, ...t)];
}
function sl(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const a = n.reduce((c, { useScope: l, scopeName: d }) => {
        const u = l(i)[`__scope${d}`];
        return { ...c, ...u };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
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
      const i = ao(s, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == "function" ? i() : ao(e[s], null);
        }
      };
  };
}
function ne(...e) {
  return m.useCallback(kn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  const t = /* @__PURE__ */ il(e), r = m.forwardRef((n, s) => {
    const { children: i, ...a } = n, c = m.Children.toArray(i), l = c.find(ll);
    if (l) {
      const d = l.props.children, f = c.map((u) => u === l ? m.Children.count(d) > 1 ? m.Children.only(null) : m.isValidElement(d) ? d.props.children : null : u);
      return /* @__PURE__ */ o.jsx(t, { ...a, ref: s, children: m.isValidElement(d) ? m.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ o.jsx(t, { ...a, ref: s, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
var al = /* @__PURE__ */ bt("Slot");
// @__NO_SIDE_EFFECTS__
function il(e) {
  const t = m.forwardRef((r, n) => {
    const { children: s, ...i } = r, a = m.isValidElement(s) ? dl(s) : void 0, c = ne(a, n);
    if (m.isValidElement(s)) {
      const l = ul(i, s.props);
      return s.type !== m.Fragment && (l.ref = c), m.cloneElement(s, l);
    }
    return m.Children.count(s) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var cl = Symbol("radix.slottable");
function ll(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cl;
}
function ul(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? s && i ? r[n] = (...c) => {
      const l = i(...c);
      return s(...c), l;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...i } : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function dl(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function br(e) {
  const t = e + "CollectionProvider", [r, n] = $e(t), [s, i] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: y, children: g } = h, C = Pe.useRef(null), b = Pe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ o.jsx(s, { scope: y, itemMap: b, collectionRef: C, children: g });
  };
  a.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ bt(c), d = Pe.forwardRef(
    (h, y) => {
      const { scope: g, children: C } = h, b = i(c, g), w = ne(y, b.collectionRef);
      return /* @__PURE__ */ o.jsx(l, { ref: w, children: C });
    }
  );
  d.displayName = c;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", p = /* @__PURE__ */ bt(f), v = Pe.forwardRef(
    (h, y) => {
      const { scope: g, children: C, ...b } = h, w = Pe.useRef(null), N = ne(y, w), A = i(f, g);
      return Pe.useEffect(() => (A.itemMap.set(w, { ref: w, ...b }), () => void A.itemMap.delete(w))), /* @__PURE__ */ o.jsx(p, { [u]: "", ref: N, children: C });
    }
  );
  v.displayName = f;
  function x(h) {
    const y = i(e + "CollectionConsumer", h);
    return Pe.useCallback(() => {
      const C = y.collectionRef.current;
      if (!C) return [];
      const b = Array.from(C.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (A, M) => b.indexOf(A.ref.current) - b.indexOf(M.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: v },
    x,
    n
  ];
}
var le = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, fl = m[" useId ".trim().toString()] || (() => {
}), ml = 0;
function at(e) {
  const [t, r] = m.useState(fl());
  return le(() => {
    r((n) => n ?? String(ml++));
  }, [e]), t ? `radix-${t}` : "";
}
var pl = [
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
], Y = pl.reduce((e, t) => {
  const r = /* @__PURE__ */ bt(`Primitive.${t}`), n = m.forwardRef((s, i) => {
    const { asChild: a, ...c } = s, l = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o.jsx(l, { ...c, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Ko(e, t) {
  e && yr.flushSync(() => e.dispatchEvent(t));
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
var hl = m[" useInsertionEffect ".trim().toString()] || le;
function it({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [s, i, a] = gl({
    defaultProp: t,
    onChange: r
  }), c = e !== void 0, l = c ? e : s;
  {
    const f = m.useRef(e !== void 0);
    m.useEffect(() => {
      const u = f.current;
      u !== c && console.warn(
        `${n} is changing from ${u ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = c;
    }, [c, n]);
  }
  const d = m.useCallback(
    (f) => {
      var u;
      if (c) {
        const p = vl(f) ? f(e) : f;
        p !== e && ((u = a.current) == null || u.call(a, p));
      } else
        i(f);
    },
    [c, e, i, a]
  );
  return [l, d];
}
function gl({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = m.useState(e), s = m.useRef(r), i = m.useRef(t);
  return hl(() => {
    i.current = t;
  }, [t]), m.useEffect(() => {
    var a;
    s.current !== r && ((a = i.current) == null || a.call(i, r), s.current = r);
  }, [r, s]), [r, n, i];
}
function vl(e) {
  return typeof e == "function";
}
var xl = m.createContext(void 0);
function Ut(e) {
  const t = m.useContext(xl);
  return e || t || "ltr";
}
var Fr = "rovingFocusGroup.onEntryFocus", yl = { bubbles: !1, cancelable: !0 }, Gt = "RovingFocusGroup", [en, qo, bl] = br(Gt), [wl, wr] = $e(
  Gt,
  [bl]
), [Cl, Nl] = wl(Gt), Yo = m.forwardRef(
  (e, t) => /* @__PURE__ */ o.jsx(en.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o.jsx(en.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o.jsx(kl, { ...e, ref: t }) }) })
);
Yo.displayName = Gt;
var kl = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: s = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...u
  } = e, p = m.useRef(null), v = ne(t, p), x = Ut(i), [h, y] = it({
    prop: a,
    defaultProp: c ?? null,
    onChange: l,
    caller: Gt
  }), [g, C] = m.useState(!1), b = De(d), w = qo(r), N = m.useRef(!1), [A, M] = m.useState(0);
  return m.useEffect(() => {
    const j = p.current;
    if (j)
      return j.addEventListener(Fr, b), () => j.removeEventListener(Fr, b);
  }, [b]), /* @__PURE__ */ o.jsx(
    Cl,
    {
      scope: r,
      orientation: n,
      dir: x,
      loop: s,
      currentTabStopId: h,
      onItemFocus: m.useCallback(
        (j) => y(j),
        [y]
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
          ...u,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: W(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: W(e.onFocus, (j) => {
            const _ = !N.current;
            if (j.target === j.currentTarget && _ && !g) {
              const D = new CustomEvent(Fr, yl);
              if (j.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const k = w().filter((P) => P.focusable), T = k.find((P) => P.active), O = k.find((P) => P.id === h), z = [T, O, ...k].filter(
                  Boolean
                ).map((P) => P.ref.current);
                Jo(z, f);
              }
            }
            N.current = !1;
          }),
          onBlur: W(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Xo = "RovingFocusGroupItem", Zo = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: s = !1,
      tabStopId: i,
      children: a,
      ...c
    } = e, l = at(), d = i || l, f = Nl(Xo, r), u = f.currentTabStopId === d, p = qo(r), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = f;
    return m.useEffect(() => {
      if (n)
        return v(), () => x();
    }, [n, v, x]), /* @__PURE__ */ o.jsx(
      en.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: n,
        active: s,
        children: /* @__PURE__ */ o.jsx(
          Y.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...c,
            ref: t,
            onMouseDown: W(e.onMouseDown, (y) => {
              n ? f.onItemFocus(d) : y.preventDefault();
            }),
            onFocus: W(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: W(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const g = Rl(y, f.orientation, f.dir);
              if (g !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let b = p().filter((w) => w.focusable).map((w) => w.ref.current);
                if (g === "last") b.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && b.reverse();
                  const w = b.indexOf(y.currentTarget);
                  b = f.loop ? Sl(b, w + 1) : b.slice(w + 1);
                }
                setTimeout(() => Jo(b));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
Zo.displayName = Xo;
var El = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function jl(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Rl(e, t, r) {
  const n = jl(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return El[n];
}
function Jo(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Sl(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Qo = Yo, es = Zo;
function Tl(e, t) {
  return m.useReducer((r, n) => t[r][n] ?? r, e);
}
var Nt = (e) => {
  const { present: t, children: r } = e, n = Ml(t), s = typeof r == "function" ? r({ present: n.isPresent }) : m.Children.only(r), i = ne(n.ref, Al(s));
  return typeof r == "function" || n.isPresent ? m.cloneElement(s, { ref: i }) : null;
};
Nt.displayName = "Presence";
function Ml(e) {
  const [t, r] = m.useState(), n = m.useRef(null), s = m.useRef(e), i = m.useRef("none"), a = e ? "mounted" : "unmounted", [c, l] = Tl(a, {
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
    const d = Qt(n.current);
    i.current = c === "mounted" ? d : "none";
  }, [c]), le(() => {
    const d = n.current, f = s.current;
    if (f !== e) {
      const p = i.current, v = Qt(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), le(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, u = (v) => {
        const h = Qt(n.current).includes(v.animationName);
        if (v.target === t && h && (l("ANIMATION_END"), !s.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, p = (v) => {
        v.target === t && (i.current = Qt(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: m.useCallback((d) => {
      n.current = d ? getComputedStyle(d) : null, r(d);
    }, [])
  };
}
function Qt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Al(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Cr = "Tabs", [Pl, Dh] = $e(Cr, [
  wr
]), ts = wr(), [_l, En] = Pl(Cr), rs = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: s,
      defaultValue: i,
      orientation: a = "horizontal",
      dir: c,
      activationMode: l = "automatic",
      ...d
    } = e, f = Ut(c), [u, p] = it({
      prop: n,
      onChange: s,
      defaultProp: i ?? "",
      caller: Cr
    });
    return /* @__PURE__ */ o.jsx(
      _l,
      {
        scope: r,
        baseId: at(),
        value: u,
        onValueChange: p,
        orientation: a,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            dir: f,
            "data-orientation": a,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
rs.displayName = Cr;
var ns = "TabsList", os = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...s } = e, i = En(ns, r), a = ts(r);
    return /* @__PURE__ */ o.jsx(
      Qo,
      {
        asChild: !0,
        ...a,
        orientation: i.orientation,
        dir: i.dir,
        loop: n,
        children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
os.displayName = ns;
var ss = "TabsTrigger", as = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: s = !1, ...i } = e, a = En(ss, r), c = ts(r), l = ls(a.baseId, n), d = us(a.baseId, n), f = n === a.value;
    return /* @__PURE__ */ o.jsx(
      es,
      {
        asChild: !0,
        ...c,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ o.jsx(
          Y.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: l,
            ...i,
            ref: t,
            onMouseDown: W(e.onMouseDown, (u) => {
              !s && u.button === 0 && u.ctrlKey === !1 ? a.onValueChange(n) : u.preventDefault();
            }),
            onKeyDown: W(e.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && a.onValueChange(n);
            }),
            onFocus: W(e.onFocus, () => {
              const u = a.activationMode !== "manual";
              !f && !s && u && a.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
as.displayName = ss;
var is = "TabsContent", cs = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: s, children: i, ...a } = e, c = En(is, r), l = ls(c.baseId, n), d = us(c.baseId, n), f = n === c.value, u = m.useRef(f);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ o.jsx(Nt, { present: s || f, children: ({ present: p }) => /* @__PURE__ */ o.jsx(
      Y.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: d,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: u.current ? "0s" : void 0
        },
        children: p && i
      }
    ) });
  }
);
cs.displayName = is;
function ls(e, t) {
  return `${e}-trigger-${t}`;
}
function us(e, t) {
  return `${e}-content-${t}`;
}
var Il = rs, ds = os, fs = as, ms = cs;
function ps(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ps(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function hs() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ps(e)) && (n && (n += " "), n += t);
  return n;
}
const jn = "-", Dl = (e) => {
  const t = Ll(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const c = a.split(jn);
      return c[0] === "" && c.length !== 1 && c.shift(), gs(c, t) || Ol(a);
    },
    getConflictingClassGroupIds: (a, c) => {
      const l = r[a] || [];
      return c && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, gs = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? gs(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(jn);
  return (a = t.validators.find(({
    validator: c
  }) => c(i))) == null ? void 0 : a.classGroupId;
}, io = /^\[(.+)\]$/, Ol = (e) => {
  if (io.test(e)) {
    const t = io.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ll = (e) => {
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
      const i = s === "" ? t : co(t, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Fl(s)) {
        tn(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, a]) => {
      tn(a, co(t, i), r, n);
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
}, Fl = (e) => e.isThemeGetter, zl = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return s(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : s(i, a);
    }
  };
}, rn = "!", nn = ":", Bl = nn.length, Vl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (s) => {
    const i = [];
    let a = 0, c = 0, l = 0, d;
    for (let x = 0; x < s.length; x++) {
      let h = s[x];
      if (a === 0 && c === 0) {
        if (h === nn) {
          i.push(s.slice(l, x)), l = x + Bl;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? c++ : h === ")" && c--;
    }
    const f = i.length === 0 ? s : s.substring(l), u = $l(f), p = u !== f, v = d && d > l ? d - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: u,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const s = t + nn, i = n;
    n = (a) => a.startsWith(s) ? i(a.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = n;
    n = (i) => r({
      className: i,
      parseClassName: s
    });
  }
  return n;
}, $l = (e) => e.endsWith(rn) ? e.substring(0, e.length - 1) : e.startsWith(rn) ? e.substring(1) : e, Hl = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const s = [];
    let i = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (s.push(...i.sort(), a), i = []) : i.push(a);
    }), s.push(...i.sort()), s;
  };
}, Wl = (e) => ({
  cache: zl(e.cacheSize),
  parseClassName: Vl(e),
  sortModifiers: Hl(e),
  ...Dl(e)
}), Ul = /\s+/, Gl = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, a = [], c = e.trim().split(Ul);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const f = c[d], {
      isExternal: u,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = r(f);
    if (u) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let y = !!h, g = n(y ? x.substring(0, h) : x);
    if (!g) {
      if (!y) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = n(x), !g) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const C = i(p).join(":"), b = v ? C + rn : C, w = b + g;
    if (a.includes(w))
      continue;
    a.push(w);
    const N = s(g, y);
    for (let A = 0; A < N.length; ++A) {
      const M = N[A];
      a.push(b + M);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Kl() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = vs(t)) && (n && (n += " "), n += r);
  return n;
}
const vs = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = vs(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ql(e, ...t) {
  let r, n, s, i = a;
  function a(l) {
    const d = t.reduce((f, u) => u(f), e());
    return r = Wl(d), n = r.cache.get, s = r.cache.set, i = c, c(l);
  }
  function c(l) {
    const d = n(l);
    if (d)
      return d;
    const f = Gl(l, r);
    return s(l, f), f;
  }
  return function() {
    return i(Kl.apply(null, arguments));
  };
}
const ie = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, xs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ys = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Yl = /^\d+\/\d+$/, Xl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ql = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, eu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, pt = (e) => Yl.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), We = (e) => !!e && Number.isInteger(Number(e)), zr = (e) => e.endsWith("%") && X(e.slice(0, -1)), Fe = (e) => Xl.test(e), tu = () => !0, ru = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Zl.test(e) && !Jl.test(e)
), bs = () => !1, nu = (e) => Ql.test(e), ou = (e) => eu.test(e), su = (e) => !V(e) && !$(e), au = (e) => kt(e, Ns, bs), V = (e) => xs.test(e), rt = (e) => kt(e, ks, ru), Br = (e) => kt(e, du, X), lo = (e) => kt(e, ws, bs), iu = (e) => kt(e, Cs, ou), er = (e) => kt(e, Es, nu), $ = (e) => ys.test(e), Dt = (e) => Et(e, ks), cu = (e) => Et(e, fu), uo = (e) => Et(e, ws), lu = (e) => Et(e, Ns), uu = (e) => Et(e, Cs), tr = (e) => Et(e, Es, !0), kt = (e, t, r) => {
  const n = xs.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Et = (e, t, r = !1) => {
  const n = ys.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, ws = (e) => e === "position" || e === "percentage", Cs = (e) => e === "image" || e === "url", Ns = (e) => e === "length" || e === "size" || e === "bg-size", ks = (e) => e === "length", du = (e) => e === "number", fu = (e) => e === "family-name", Es = (e) => e === "shadow", mu = () => {
  const e = ie("color"), t = ie("font"), r = ie("text"), n = ie("font-weight"), s = ie("tracking"), i = ie("leading"), a = ie("breakpoint"), c = ie("container"), l = ie("spacing"), d = ie("radius"), f = ie("shadow"), u = ie("inset-shadow"), p = ie("text-shadow"), v = ie("drop-shadow"), x = ie("blur"), h = ie("perspective"), y = ie("aspect"), g = ie("ease"), C = ie("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
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
  ], N = () => [...w(), $, V], A = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], j = () => [$, V, l], _ = () => [pt, "full", "auto", ...j()], D = () => [We, "none", "subgrid", $, V], k = () => ["auto", {
    span: ["full", We, $, V]
  }, We, $, V], T = () => [We, "auto", $, V], O = () => ["auto", "min", "max", "fr", $, V], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...j()], H = () => [pt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], S = () => [e, $, V], I = () => [...w(), uo, lo, {
    position: [$, V]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], B = () => ["auto", "cover", "contain", lu, au, {
    size: [$, V]
  }], K = () => [zr, Dt, rt], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    $,
    V
  ], Q = () => ["", X, Dt, rt], se = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [X, zr, uo, lo], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    $,
    V
  ], Z = () => ["none", X, $, V], J = () => ["none", X, $, V], te = () => [X, $, V], re = () => [pt, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Fe],
      breakpoint: [Fe],
      color: [tu],
      container: [Fe],
      "drop-shadow": [Fe],
      ease: ["in", "out", "in-out"],
      font: [su],
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
        aspect: ["auto", "square", pt, V, $, y]
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
        columns: [X, V, $, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        z: [We, "auto", $, V]
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
        flex: [X, pt, "auto", "initial", "none", V]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", X, $, V]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", X, $, V]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [We, "first", "last", "none", $, V]
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
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...H()]
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
          ...H()
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
            screen: [a]
          },
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...H()]
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
        font: [n, $, Br]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", zr, V]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cu, V, t]
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
        tracking: [s, $, V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [X, "none", $, Br]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...j()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $, V]
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
        list: ["disc", "decimal", "none", $, V]
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
        decoration: [X, "from-font", "auto", $, rt]
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
        "underline-offset": [X, "auto", $, V]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $, V]
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
        content: ["none", $, V]
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
          }, We, $, V],
          radial: ["", $, V],
          conic: [We, $, V]
        }, uu, iu]
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
        "outline-offset": [X, $, V]
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
          f,
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
        "inset-shadow": ["none", u, tr, er]
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
        opacity: [X, $, V]
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
        "mask-radial": [$, V]
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
        mask: ["none", $, V]
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
          $,
          V
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: U()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [X, $, V]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [X, $, V]
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
        grayscale: ["", X, $, V]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [X, $, V]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", X, $, V]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [X, $, V]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", X, $, V]
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
          $,
          V
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": U()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [X, $, V]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [X, $, V]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", X, $, V]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [X, $, V]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", X, $, V]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [X, $, V]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X, $, V]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", X, $, V]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", $, V]
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
        duration: [X, "initial", $, V]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", g, $, V]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [X, $, V]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, $, V]
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
        perspective: [h, $, V]
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
        transform: [$, V, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $, V]
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
        "will-change": ["auto", "scroll", "contents", "transform", $, V]
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
        stroke: [X, Dt, rt, Br]
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
}, pu = /* @__PURE__ */ ql(mu);
function ee(...e) {
  return pu(hs(e));
}
const js = Il, Rn = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  ds,
  {
    ref: r,
    className: ee(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Rn.displayName = ds.displayName;
const Ge = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  fs,
  {
    ref: r,
    className: ee(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ge.displayName = fs.displayName;
const Ke = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  ms,
  {
    ref: r,
    className: ee(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ke.displayName = ms.displayName;
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
const hu = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: r,
    className: ee("text-sm text-muted-foreground", e),
    ...t
  }
));
hu.displayName = "CardDescription";
const ge = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: ee("p-6 pt-0", e), ...t }));
ge.displayName = "CardContent";
const gu = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("flex items-center p-6 pt-0", e),
    ...t
  }
));
gu.displayName = "CardFooter";
var vu = "Label", Rs = m.forwardRef((e, t) => /* @__PURE__ */ o.jsx(
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
Rs.displayName = vu;
var Ss = Rs;
const fo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mo = hs, Sn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return mo(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = t, a = Object.keys(s).map((d) => {
    const f = r == null ? void 0 : r[d], u = i == null ? void 0 : i[d];
    if (f === null) return null;
    const p = fo(f) || fo(u);
    return s[d][p];
  }), c = r && Object.entries(r).reduce((d, f) => {
    let [u, p] = f;
    return p === void 0 || (d[u] = p), d;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, f) => {
    let { class: u, className: p, ...v } = f;
    return Object.entries(v).every((x) => {
      let [h, y] = x;
      return Array.isArray(y) ? y.includes({
        ...i,
        ...c
      }[h]) : {
        ...i,
        ...c
      }[h] === y;
    }) ? [
      ...d,
      u,
      p
    ] : d;
  }, []);
  return mo(e, a, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, xu = Sn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), G = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  Ss,
  {
    ref: r,
    className: ee(xu(), e),
    ...t
  }
));
G.displayName = Ss.displayName;
function dr(e, [t, r]) {
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
        const i = s[0];
        let a, c;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          a = d.inlineSize, c = d.blockSize;
        } else
          a = e.offsetWidth, c = e.offsetHeight;
        r({ width: a, height: c });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Ts = ["PageUp", "PageDown"], Ms = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], As = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, jt = "Slider", [on, yu, bu] = br(jt), [Ps, Oh] = $e(jt, [
  bu
]), [wu, Nr] = Ps(jt), _s = m.forwardRef(
  (e, t) => {
    const {
      name: r,
      min: n = 0,
      max: s = 100,
      step: i = 1,
      orientation: a = "horizontal",
      disabled: c = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: d = [n],
      value: f,
      onValueChange: u = () => {
      },
      onValueCommit: p = () => {
      },
      inverted: v = !1,
      form: x,
      ...h
    } = e, y = m.useRef(/* @__PURE__ */ new Set()), g = m.useRef(0), b = a === "horizontal" ? Cu : Nu, [w = [], N] = it({
      prop: f,
      defaultProp: d,
      onChange: (k) => {
        var O;
        (O = [...y.current][g.current]) == null || O.focus(), u(k);
      }
    }), A = m.useRef(w);
    function M(k) {
      const T = Su(w, k);
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
      const F = Pu(i), z = _u(Math.round((k - n) / i) * i + n, F), P = dr(z, [n, s]);
      N((H = []) => {
        const S = ju(H, P, T);
        if (Au(S, l * i)) {
          g.current = S.indexOf(P);
          const I = String(S) !== String(H);
          return I && O && p(S), I ? S : H;
        } else
          return H;
      });
    }
    return /* @__PURE__ */ o.jsx(
      wu,
      {
        scope: e.__scopeSlider,
        name: r,
        disabled: c,
        min: n,
        max: s,
        valueIndexToChangeRef: g,
        thumbs: y.current,
        values: w,
        orientation: a,
        form: x,
        children: /* @__PURE__ */ o.jsx(on.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(on.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(
          b,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: W(h.onPointerDown, () => {
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
                const z = Ts.includes(k.key) || k.shiftKey && Ms.includes(k.key) ? 10 : 1, P = g.current, H = w[P], S = i * z * T;
                D(H + S, P, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
_s.displayName = jt;
var [Is, Ds] = Ps(jt, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Cu = m.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      dir: s,
      inverted: i,
      onSlideStart: a,
      onSlideMove: c,
      onSlideEnd: l,
      onStepKeyDown: d,
      ...f
    } = e, [u, p] = m.useState(null), v = ne(t, (b) => p(b)), x = m.useRef(void 0), h = Ut(s), y = h === "ltr", g = y && !i || !y && i;
    function C(b) {
      const w = x.current || u.getBoundingClientRect(), N = [0, w.width], M = An(N, g ? [r, n] : [n, r]);
      return x.current = w, M(b - w.left);
    }
    return /* @__PURE__ */ o.jsx(
      Is,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "left" : "right",
        endEdge: g ? "right" : "left",
        direction: g ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ o.jsx(
          Os,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...f,
            ref: v,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (b) => {
              const w = C(b.clientX);
              a == null || a(w);
            },
            onSlideMove: (b) => {
              const w = C(b.clientX);
              c == null || c(w);
            },
            onSlideEnd: () => {
              x.current = void 0, l == null || l();
            },
            onStepKeyDown: (b) => {
              const N = As[g ? "from-left" : "from-right"].includes(b.key);
              d == null || d({ event: b, direction: N ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Nu = m.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      inverted: s,
      onSlideStart: i,
      onSlideMove: a,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...d
    } = e, f = m.useRef(null), u = ne(t, f), p = m.useRef(void 0), v = !s;
    function x(h) {
      const y = p.current || f.current.getBoundingClientRect(), g = [0, y.height], b = An(g, v ? [n, r] : [r, n]);
      return p.current = y, b(h - y.top);
    }
    return /* @__PURE__ */ o.jsx(
      Is,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ o.jsx(
          Os,
          {
            "data-orientation": "vertical",
            ...d,
            ref: u,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const y = x(h.clientY);
              i == null || i(y);
            },
            onSlideMove: (h) => {
              const y = x(h.clientY);
              a == null || a(y);
            },
            onSlideEnd: () => {
              p.current = void 0, c == null || c();
            },
            onStepKeyDown: (h) => {
              const g = As[v ? "from-bottom" : "from-top"].includes(h.key);
              l == null || l({ event: h, direction: g ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Os = m.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: r,
      onSlideStart: n,
      onSlideMove: s,
      onSlideEnd: i,
      onHomeKeyDown: a,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...d
    } = e, f = Nr(jt, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        ...d,
        ref: t,
        onKeyDown: W(e.onKeyDown, (u) => {
          u.key === "Home" ? (a(u), u.preventDefault()) : u.key === "End" ? (c(u), u.preventDefault()) : Ts.concat(Ms).includes(u.key) && (l(u), u.preventDefault());
        }),
        onPointerDown: W(e.onPointerDown, (u) => {
          const p = u.target;
          p.setPointerCapture(u.pointerId), u.preventDefault(), f.thumbs.has(p) ? p.focus() : n(u);
        }),
        onPointerMove: W(e.onPointerMove, (u) => {
          u.target.hasPointerCapture(u.pointerId) && s(u);
        }),
        onPointerUp: W(e.onPointerUp, (u) => {
          const p = u.target;
          p.hasPointerCapture(u.pointerId) && (p.releasePointerCapture(u.pointerId), i(u));
        })
      }
    );
  }
), Ls = "SliderTrack", Fs = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, s = Nr(Ls, r);
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
Fs.displayName = Ls;
var sn = "SliderRange", zs = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, s = Nr(sn, r), i = Ds(sn, r), a = m.useRef(null), c = ne(t, a), l = s.values.length, d = s.values.map(
      (p) => $s(p, s.min, s.max)
    ), f = l > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: c,
        style: {
          ...e.style,
          [i.startEdge]: f + "%",
          [i.endEdge]: u + "%"
        }
      }
    );
  }
);
zs.displayName = sn;
var an = "SliderThumb", Bs = m.forwardRef(
  (e, t) => {
    const r = yu(e.__scopeSlider), [n, s] = m.useState(null), i = ne(t, (c) => s(c)), a = m.useMemo(
      () => n ? r().findIndex((c) => c.ref.current === n) : -1,
      [r, n]
    );
    return /* @__PURE__ */ o.jsx(ku, { ...e, ref: i, index: a });
  }
), ku = m.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, index: n, name: s, ...i } = e, a = Nr(an, r), c = Ds(an, r), [l, d] = m.useState(null), f = ne(t, (C) => d(C)), u = l ? a.form || !!l.closest("form") : !0, p = Mn(l), v = a.values[n], x = v === void 0 ? 0 : $s(v, a.min, a.max), h = Ru(n, a.values.length), y = p == null ? void 0 : p[c.size], g = y ? Tu(y, x, c.direction) : 0;
    return m.useEffect(() => {
      if (l)
        return a.thumbs.add(l), () => {
          a.thumbs.delete(l);
        };
    }, [l, a.thumbs]), /* @__PURE__ */ o.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [c.startEdge]: `calc(${x}% + ${g}px)`
        },
        children: [
          /* @__PURE__ */ o.jsx(on.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(
            Y.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": a.min,
              "aria-valuenow": v,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...i,
              ref: f,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: W(e.onFocus, () => {
                a.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          u && /* @__PURE__ */ o.jsx(
            Vs,
            {
              name: s ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
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
var Eu = "RadioBubbleInput", Vs = m.forwardRef(
  ({ __scopeSlider: e, value: t, ...r }, n) => {
    const s = m.useRef(null), i = ne(s, n), a = Tn(t);
    return m.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (a !== t && f) {
        const u = new Event("input", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ o.jsx(
      Y.input,
      {
        style: { display: "none" },
        ...r,
        ref: i,
        defaultValue: t
      }
    );
  }
);
Vs.displayName = Eu;
function ju(e = [], t, r) {
  const n = [...e];
  return n[r] = t, n.sort((s, i) => s - i);
}
function $s(e, t, r) {
  const i = 100 / (r - t) * (e - t);
  return dr(i, [0, 100]);
}
function Ru(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Su(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((s) => Math.abs(s - t)), n = Math.min(...r);
  return r.indexOf(n);
}
function Tu(e, t, r) {
  const n = e / 2, i = An([0, 50], [0, n]);
  return (n - i(t) * r) * r;
}
function Mu(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function Au(e, t) {
  if (t > 0) {
    const r = Mu(e);
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
function Pu(e) {
  return (String(e).split(".")[1] || "").length;
}
function _u(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var Hs = _s, Iu = Fs, Du = zs, Ou = Bs;
const Re = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsxs(
  Hs,
  {
    ref: r,
    className: ee(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(Iu, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ o.jsx(Du, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ o.jsx(Ou, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Re.displayName = Hs.displayName;
var kr = "Switch", [Lu, Lh] = $e(kr), [Fu, zu] = Lu(kr), Ws = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: s,
      defaultChecked: i,
      required: a,
      disabled: c,
      value: l = "on",
      onCheckedChange: d,
      form: f,
      ...u
    } = e, [p, v] = m.useState(null), x = ne(t, (b) => v(b)), h = m.useRef(!1), y = p ? f || !!p.closest("form") : !0, [g, C] = it({
      prop: s,
      defaultProp: i ?? !1,
      onChange: d,
      caller: kr
    });
    return /* @__PURE__ */ o.jsxs(Fu, { scope: r, checked: g, disabled: c, children: [
      /* @__PURE__ */ o.jsx(
        Y.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": g,
          "aria-required": a,
          "data-state": qs(g),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...u,
          ref: x,
          onClick: W(e.onClick, (b) => {
            C((w) => !w), y && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ o.jsx(
        Ks,
        {
          control: p,
          bubbles: !h.current,
          name: n,
          value: l,
          checked: g,
          required: a,
          disabled: c,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ws.displayName = kr;
var Us = "SwitchThumb", Gs = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, s = zu(Us, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-state": qs(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Gs.displayName = Us;
var Bu = "SwitchBubbleInput", Ks = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...s
  }, i) => {
    const a = m.useRef(null), c = ne(a, i), l = Tn(r), d = Mn(t);
    return m.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (l !== r && v) {
        const x = new Event("click", { bubbles: n });
        v.call(f, r), f.dispatchEvent(x);
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
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ks.displayName = Bu;
function qs(e) {
  return e ? "checked" : "unchecked";
}
var Ys = Ws, Vu = Gs;
const Pn = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  Ys,
  {
    className: ee(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ o.jsx(
      Vu,
      {
        className: ee(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Pn.displayName = Ys.displayName;
function $u({ planetStats: e, setPlanetStats: t }) {
  var s;
  const r = dt(e.mass, e.radius), n = (i, a) => {
    t({
      ...e,
      [i]: a
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
              onValueChange: (i) => n("mass", i[0]),
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
              onValueChange: (i) => n("radius", i[0]),
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
            onValueChange: (i) => n("temperature", i[0]),
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
              onCheckedChange: (i) => n("hasRings", i),
              className: "data-[state=checked]:bg-green-600"
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
function Hu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e);
  m.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Wu = "DismissableLayer", cn = "dismissableLayer.update", Uu = "dismissableLayer.pointerDownOutside", Gu = "dismissableLayer.focusOutside", po, Xs = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _n = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: c,
      ...l
    } = e, d = m.useContext(Xs), [f, u] = m.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = m.useState({}), x = ne(t, (M) => u(M)), h = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), g = h.indexOf(y), C = f ? h.indexOf(f) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, w = C >= g, N = Yu((M) => {
      const j = M.target, _ = [...d.branches].some((D) => D.contains(j));
      !w || _ || (s == null || s(M), a == null || a(M), M.defaultPrevented || c == null || c());
    }, p), A = Xu((M) => {
      const j = M.target;
      [...d.branches].some((D) => D.contains(j)) || (i == null || i(M), a == null || a(M), M.defaultPrevented || c == null || c());
    }, p);
    return Hu((M) => {
      C === d.layers.size - 1 && (n == null || n(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
    }, p), m.useEffect(() => {
      if (f)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (po = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), ho(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = po);
        };
    }, [f, p, r, d]), m.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), ho());
    }, [f, d]), m.useEffect(() => {
      const M = () => v({});
      return document.addEventListener(cn, M), () => document.removeEventListener(cn, M);
    }, []), /* @__PURE__ */ o.jsx(
      Y.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: b ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: W(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: W(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: W(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }
);
_n.displayName = Wu;
var Ku = "DismissableLayerBranch", qu = m.forwardRef((e, t) => {
  const r = m.useContext(Xs), n = m.useRef(null), s = ne(t, n);
  return m.useEffect(() => {
    const i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ o.jsx(Y.div, { ...e, ref: s });
});
qu.displayName = Ku;
function Yu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e), n = m.useRef(!1), s = m.useRef(() => {
  });
  return m.useEffect(() => {
    const i = (c) => {
      if (c.target && !n.current) {
        let l = function() {
          Zs(
            Uu,
            r,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", s.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Xu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e), n = m.useRef(!1);
  return m.useEffect(() => {
    const s = (i) => {
      i.target && !n.current && Zs(Gu, r, { originalEvent: i }, {
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
function Zs(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), n ? Ko(s, i) : s.dispatchEvent(i);
}
var Vr = 0;
function Js() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? go()), document.body.insertAdjacentElement("beforeend", e[1] ?? go()), Vr++, () => {
      Vr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Vr--;
    };
  }, []);
}
function go() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var $r = "focusScope.autoFocusOnMount", Hr = "focusScope.autoFocusOnUnmount", vo = { bubbles: !1, cancelable: !0 }, Zu = "FocusScope", In = m.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...a
  } = e, [c, l] = m.useState(null), d = De(s), f = De(i), u = m.useRef(null), p = ne(t, (h) => l(h)), v = m.useRef({
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
      let h = function(b) {
        if (v.paused || !c) return;
        const w = b.target;
        c.contains(w) ? u.current = w : Ue(u.current, { select: !0 });
      }, y = function(b) {
        if (v.paused || !c) return;
        const w = b.relatedTarget;
        w !== null && (c.contains(w) || Ue(u.current, { select: !0 }));
      }, g = function(b) {
        if (document.activeElement === document.body)
          for (const N of b)
            N.removedNodes.length > 0 && Ue(c);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", y);
      const C = new MutationObserver(g);
      return c && C.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", y), C.disconnect();
      };
    }
  }, [n, c, v.paused]), m.useEffect(() => {
    if (c) {
      yo.add(v);
      const h = document.activeElement;
      if (!c.contains(h)) {
        const g = new CustomEvent($r, vo);
        c.addEventListener($r, d), c.dispatchEvent(g), g.defaultPrevented || (Ju(nd(Qs(c)), { select: !0 }), document.activeElement === h && Ue(c));
      }
      return () => {
        c.removeEventListener($r, d), setTimeout(() => {
          const g = new CustomEvent(Hr, vo);
          c.addEventListener(Hr, f), c.dispatchEvent(g), g.defaultPrevented || Ue(h ?? document.body, { select: !0 }), c.removeEventListener(Hr, f), yo.remove(v);
        }, 0);
      };
    }
  }, [c, d, f, v]);
  const x = m.useCallback(
    (h) => {
      if (!r && !n || v.paused) return;
      const y = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, g = document.activeElement;
      if (y && g) {
        const C = h.currentTarget, [b, w] = Qu(C);
        b && w ? !h.shiftKey && g === w ? (h.preventDefault(), r && Ue(b, { select: !0 })) : h.shiftKey && g === b && (h.preventDefault(), r && Ue(w, { select: !0 })) : g === C && h.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ o.jsx(Y.div, { tabIndex: -1, ...a, ref: p, onKeyDown: x });
});
In.displayName = Zu;
function Ju(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Ue(n, { select: t }), document.activeElement !== r) return;
}
function Qu(e) {
  const t = Qs(e), r = xo(t, e), n = xo(t.reverse(), e);
  return [r, n];
}
function Qs(e) {
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
    if (!ed(r, { upTo: t })) return r;
}
function ed(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function td(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ue(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && td(e) && t && e.select();
  }
}
var yo = rd();
function rd() {
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
function nd(e) {
  return e.filter((t) => t.tagName !== "A");
}
const od = ["top", "right", "bottom", "left"], Ze = Math.min, we = Math.max, fr = Math.round, rr = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), sd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ad = {
  start: "end",
  end: "start"
};
function ln(e, t, r) {
  return we(e, Ze(t, r));
}
function Be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ve(e) {
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
  return ["top", "bottom"].includes(Ve(e)) ? "y" : "x";
}
function Ln(e) {
  return Dn(ze(e));
}
function id(e, t, r) {
  r === void 0 && (r = !1);
  const n = Rt(e), s = Ln(e), i = On(s);
  let a = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = mr(a)), [a, mr(a)];
}
function cd(e) {
  const t = mr(e);
  return [un(e), t, un(t)];
}
function un(e) {
  return e.replace(/start|end/g, (t) => ad[t]);
}
function ld(e, t, r) {
  const n = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? s : n : t ? n : s;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function ud(e, t, r, n) {
  const s = Rt(e);
  let i = ld(Ve(e), r === "start", n);
  return s && (i = i.map((a) => a + "-" + s), t && (i = i.concat(i.map(un)))), i;
}
function mr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sd[t]);
}
function dd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ea(e) {
  return typeof e != "number" ? dd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function pr(e) {
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
  const i = ze(t), a = Ln(t), c = On(a), l = Ve(t), d = i === "y", f = n.x + n.width / 2 - s.width / 2, u = n.y + n.height / 2 - s.height / 2, p = n[c] / 2 - s[c] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: f,
        y: n.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: u
      };
      break;
    case "left":
      v = {
        x: n.x - s.width,
        y: u
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
      v[a] -= p * (r && d ? -1 : 1);
      break;
    case "end":
      v[a] += p * (r && d ? -1 : 1);
      break;
  }
  return v;
}
const fd = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: a
  } = r, c = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: f,
    y: u
  } = wo(d, n, l), p = n, v = {}, x = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: y,
      fn: g
    } = c[h], {
      x: C,
      y: b,
      data: w,
      reset: N
    } = await g({
      x: f,
      y: u,
      initialPlacement: n,
      placement: p,
      strategy: s,
      middlewareData: v,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = C ?? f, u = b ?? u, v = {
      ...v,
      [y]: {
        ...v[y],
        ...w
      }
    }, N && x <= 50 && (x++, typeof N == "object" && (N.placement && (p = N.placement), N.rects && (d = N.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : N.rects), {
      x: f,
      y: u
    } = wo(d, p, l)), h = -1);
  }
  return {
    x: f,
    y: u,
    placement: p,
    strategy: s,
    middlewareData: v
  };
};
async function Bt(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: s,
    platform: i,
    rects: a,
    elements: c,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = Be(t, e), x = ea(v), y = c[p ? u === "floating" ? "reference" : "floating" : u], g = pr(await i.getClippingRect({
    element: (r = await (i.isElement == null ? void 0 : i.isElement(y))) == null || r ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), C = u === "floating" ? {
    x: n,
    y: s,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), w = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = pr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: C,
    offsetParent: b,
    strategy: l
  }) : C);
  return {
    top: (g.top - N.top + x.top) / w.y,
    bottom: (N.bottom - g.bottom + x.bottom) / w.y,
    left: (g.left - N.left + x.left) / w.x,
    right: (N.right - g.right + x.right) / w.x
  };
}
const md = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: s,
      rects: i,
      platform: a,
      elements: c,
      middlewareData: l
    } = t, {
      element: d,
      padding: f = 0
    } = Be(e, t) || {};
    if (d == null)
      return {};
    const u = ea(f), p = {
      x: r,
      y: n
    }, v = Ln(s), x = On(v), h = await a.getDimensions(d), y = v === "y", g = y ? "top" : "left", C = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", w = i.reference[x] + i.reference[v] - p[v] - i.floating[x], N = p[v] - i.reference[v], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let M = A ? A[b] : 0;
    (!M || !await (a.isElement == null ? void 0 : a.isElement(A))) && (M = c.floating[b] || i.floating[x]);
    const j = w / 2 - N / 2, _ = M / 2 - h[x] / 2 - 1, D = Ze(u[g], _), k = Ze(u[C], _), T = D, O = M - h[x] - k, F = M / 2 - h[x] / 2 + j, z = ln(T, F, O), P = !l.arrow && Rt(s) != null && F !== z && i.reference[x] / 2 - (F < T ? D : k) - h[x] / 2 < 0, H = P ? F < T ? F - T : F - O : 0;
    return {
      [v]: p[v] + H,
      data: {
        [v]: z,
        centerOffset: F - z - H,
        ...P && {
          alignmentOffset: H
        }
      },
      reset: P
    };
  }
}), pd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        middlewareData: i,
        rects: a,
        initialPlacement: c,
        platform: l,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...y
      } = Be(e, t);
      if ((r = i.arrow) != null && r.alignmentOffset)
        return {};
      const g = Ve(s), C = ze(c), b = Ve(c) === c, w = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), N = p || (b || !h ? [mr(c)] : cd(c)), A = x !== "none";
      !p && A && N.push(...ud(c, h, x, w));
      const M = [c, ...N], j = await Bt(t, y), _ = [];
      let D = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (f && _.push(j[g]), u) {
        const z = id(s, a, w);
        _.push(j[z[0]], j[z[1]]);
      }
      if (D = [...D, {
        placement: s,
        overflows: _
      }], !_.every((z) => z <= 0)) {
        var k, T;
        const z = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, P = M[z];
        if (P) {
          var O;
          const S = u === "alignment" ? C !== ze(P) : !1, I = ((O = D[0]) == null ? void 0 : O.overflows[0]) > 0;
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
        let H = (T = D.filter((S) => S.overflows[0] <= 0).sort((S, I) => S.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!H)
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
              S && (H = S);
              break;
            }
            case "initialPlacement":
              H = c;
              break;
          }
        if (s !== H)
          return {
            reset: {
              placement: H
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
  return od.some((t) => e[t] >= 0);
}
const hd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...s
      } = Be(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await Bt(t, {
            ...s,
            elementContext: "reference"
          }), a = Co(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: No(a)
            }
          };
        }
        case "escaped": {
          const i = await Bt(t, {
            ...s,
            altBoundary: !0
          }), a = Co(i, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: No(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function gd(e, t) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), a = Ve(r), c = Rt(r), l = ze(r) === "y", d = ["left", "top"].includes(a) ? -1 : 1, f = i && l ? -1 : 1, u = Be(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: x
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return c && typeof x == "number" && (v = c === "end" ? x * -1 : x), l ? {
    x: v * f,
    y: p * d
  } : {
    x: p * d,
    y: v * f
  };
}
const vd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: s,
        y: i,
        placement: a,
        middlewareData: c
      } = t, l = await gd(t, e);
      return a === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: s + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, xd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: g,
              y: C
            } = y;
            return {
              x: g,
              y: C
            };
          }
        },
        ...l
      } = Be(e, t), d = {
        x: r,
        y: n
      }, f = await Bt(t, l), u = ze(Ve(s)), p = Dn(u);
      let v = d[p], x = d[u];
      if (i) {
        const y = p === "y" ? "top" : "left", g = p === "y" ? "bottom" : "right", C = v + f[y], b = v - f[g];
        v = ln(C, v, b);
      }
      if (a) {
        const y = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", C = x + f[y], b = x - f[g];
        x = ln(C, x, b);
      }
      const h = c.fn({
        ...t,
        [p]: v,
        [u]: x
      });
      return {
        ...h,
        data: {
          x: h.x - r,
          y: h.y - n,
          enabled: {
            [p]: i,
            [u]: a
          }
        }
      };
    }
  };
}, yd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: s,
        rects: i,
        middlewareData: a
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = Be(e, t), f = {
        x: r,
        y: n
      }, u = ze(s), p = Dn(u);
      let v = f[p], x = f[u];
      const h = Be(c, t), y = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const b = p === "y" ? "height" : "width", w = i.reference[p] - i.floating[b] + y.mainAxis, N = i.reference[p] + i.reference[b] - y.mainAxis;
        v < w ? v = w : v > N && (v = N);
      }
      if (d) {
        var g, C;
        const b = p === "y" ? "width" : "height", w = ["top", "left"].includes(Ve(s)), N = i.reference[u] - i.floating[b] + (w && ((g = a.offset) == null ? void 0 : g[u]) || 0) + (w ? 0 : y.crossAxis), A = i.reference[u] + i.reference[b] + (w ? 0 : ((C = a.offset) == null ? void 0 : C[u]) || 0) - (w ? y.crossAxis : 0);
        x < N ? x = N : x > A && (x = A);
      }
      return {
        [p]: v,
        [u]: x
      };
    }
  };
}, bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        rects: i,
        platform: a,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...d
      } = Be(e, t), f = await Bt(t, d), u = Ve(s), p = Rt(s), v = ze(s) === "y", {
        width: x,
        height: h
      } = i.floating;
      let y, g;
      u === "top" || u === "bottom" ? (y = u, g = p === (await (a.isRTL == null ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (g = u, y = p === "end" ? "top" : "bottom");
      const C = h - f.top - f.bottom, b = x - f.left - f.right, w = Ze(h - f[y], C), N = Ze(x - f[g], b), A = !t.middlewareData.shift;
      let M = w, j = N;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (j = b), (n = t.middlewareData.shift) != null && n.enabled.y && (M = C), A && !p) {
        const D = we(f.left, 0), k = we(f.right, 0), T = we(f.top, 0), O = we(f.bottom, 0);
        v ? j = x - 2 * (D !== 0 || k !== 0 ? D + k : we(f.left, f.right)) : M = h - 2 * (T !== 0 || O !== 0 ? T + O : we(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: j,
        availableHeight: M
      });
      const _ = await a.getDimensions(c.floating);
      return x !== _.width || h !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Er() {
  return typeof window < "u";
}
function St(e) {
  return ta(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Le(e) {
  var t;
  return (t = (ta(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ta(e) {
  return Er() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Se(e) {
  return Er() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function Oe(e) {
  return Er() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function ko(e) {
  return !Er() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
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
function wd(e) {
  return ["table", "td", "th"].includes(St(e));
}
function jr(e) {
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
function Cd(e) {
  let t = Je(e);
  for (; Oe(t) && !wt(t); ) {
    if (Fn(t))
      return t;
    if (jr(t))
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
function Rr(e) {
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
function ra(e) {
  const t = Je(e);
  return wt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && Kt(t) ? t : ra(t);
}
function Vt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = ra(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ne(s);
  if (i) {
    const c = dn(a);
    return t.concat(a, a.visualViewport || [], Kt(s) ? s : [], c && r ? Vt(c) : []);
  }
  return t.concat(s, Vt(s, [], r));
}
function dn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function na(e) {
  const t = Te(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const s = Oe(e), i = s ? e.offsetWidth : r, a = s ? e.offsetHeight : n, c = fr(r) !== i || fr(n) !== a;
  return c && (r = i, n = a), {
    width: r,
    height: n,
    $: c
  };
}
function Bn(e) {
  return Se(e) ? e : e.contextElement;
}
function xt(e) {
  const t = Bn(e);
  if (!Oe(t))
    return Ie(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: s,
    $: i
  } = na(t);
  let a = (i ? fr(r.width) : r.width) / n, c = (i ? fr(r.height) : r.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: a,
    y: c
  };
}
const Nd = /* @__PURE__ */ Ie(0);
function oa(e) {
  const t = Ne(e);
  return !zn() || !t.visualViewport ? Nd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kd(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ne(e) ? !1 : t;
}
function ct(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), i = Bn(e);
  let a = Ie(1);
  t && (n ? Se(n) && (a = xt(n)) : a = xt(e));
  const c = kd(i, r, n) ? oa(i) : Ie(0);
  let l = (s.left + c.x) / a.x, d = (s.top + c.y) / a.y, f = s.width / a.x, u = s.height / a.y;
  if (i) {
    const p = Ne(i), v = n && Se(n) ? Ne(n) : n;
    let x = p, h = dn(x);
    for (; h && n && v !== x; ) {
      const y = xt(h), g = h.getBoundingClientRect(), C = Te(h), b = g.left + (h.clientLeft + parseFloat(C.paddingLeft)) * y.x, w = g.top + (h.clientTop + parseFloat(C.paddingTop)) * y.y;
      l *= y.x, d *= y.y, f *= y.x, u *= y.y, l += b, d += w, x = Ne(h), h = dn(x);
    }
  }
  return pr({
    width: f,
    height: u,
    x: l,
    y: d
  });
}
function Vn(e, t) {
  const r = Rr(e).scrollLeft;
  return t ? t.left + r : ct(Le(e)).left + r;
}
function sa(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Vn(e, n)
  )), i = n.top + t.scrollTop;
  return {
    x: s,
    y: i
  };
}
function Ed(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: s
  } = e;
  const i = s === "fixed", a = Le(n), c = t ? jr(t.floating) : !1;
  if (n === a || c && i)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ie(1);
  const f = Ie(0), u = Oe(n);
  if ((u || !u && !i) && ((St(n) !== "body" || Kt(a)) && (l = Rr(n)), Oe(n))) {
    const v = ct(n);
    d = xt(n), f.x = v.x + n.clientLeft, f.y = v.y + n.clientTop;
  }
  const p = a && !u && !i ? sa(a, l, !0) : Ie(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: r.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function jd(e) {
  return Array.from(e.getClientRects());
}
function Rd(e) {
  const t = Le(e), r = Rr(e), n = e.ownerDocument.body, s = we(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), i = we(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Vn(e);
  const c = -r.scrollTop;
  return Te(n).direction === "rtl" && (a += we(t.clientWidth, n.clientWidth) - s), {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
function Sd(e, t) {
  const r = Ne(e), n = Le(e), s = r.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, c = 0, l = 0;
  if (s) {
    i = s.width, a = s.height;
    const d = zn();
    (!d || d && t === "fixed") && (c = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function Td(e, t) {
  const r = ct(e, !0, t === "fixed"), n = r.top + e.clientTop, s = r.left + e.clientLeft, i = Oe(e) ? xt(e) : Ie(1), a = e.clientWidth * i.x, c = e.clientHeight * i.y, l = s * i.x, d = n * i.y;
  return {
    width: a,
    height: c,
    x: l,
    y: d
  };
}
function Eo(e, t, r) {
  let n;
  if (t === "viewport")
    n = Sd(e, r);
  else if (t === "document")
    n = Rd(Le(e));
  else if (Se(t))
    n = Td(t, r);
  else {
    const s = oa(e);
    n = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return pr(n);
}
function aa(e, t) {
  const r = Je(e);
  return r === t || !Se(r) || wt(r) ? !1 : Te(r).position === "fixed" || aa(r, t);
}
function Md(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Vt(e, [], !1).filter((c) => Se(c) && St(c) !== "body"), s = null;
  const i = Te(e).position === "fixed";
  let a = i ? Je(e) : e;
  for (; Se(a) && !wt(a); ) {
    const c = Te(a), l = Fn(a);
    !l && c.position === "fixed" && (s = null), (i ? !l && !s : !l && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Kt(a) && !l && aa(e, a)) ? n = n.filter((f) => f !== a) : s = c, a = Je(a);
  }
  return t.set(e, n), n;
}
function Ad(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = e;
  const a = [...r === "clippingAncestors" ? jr(t) ? [] : Md(t, this._c) : [].concat(r), n], c = a[0], l = a.reduce((d, f) => {
    const u = Eo(t, f, s);
    return d.top = we(u.top, d.top), d.right = Ze(u.right, d.right), d.bottom = Ze(u.bottom, d.bottom), d.left = we(u.left, d.left), d;
  }, Eo(t, c, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Pd(e) {
  const {
    width: t,
    height: r
  } = na(e);
  return {
    width: t,
    height: r
  };
}
function _d(e, t, r) {
  const n = Oe(t), s = Le(t), i = r === "fixed", a = ct(e, !0, i, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ie(0);
  function d() {
    l.x = Vn(s);
  }
  if (n || !n && !i)
    if ((St(t) !== "body" || Kt(s)) && (c = Rr(t)), n) {
      const v = ct(t, !0, i, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else s && d();
  i && !n && s && d();
  const f = s && !n && !i ? sa(s, c) : Ie(0), u = a.left + c.scrollLeft - l.x - f.x, p = a.top + c.scrollTop - l.y - f.y;
  return {
    x: u,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Wr(e) {
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
function ia(e, t) {
  const r = Ne(e);
  if (jr(e))
    return r;
  if (!Oe(e)) {
    let s = Je(e);
    for (; s && !wt(s); ) {
      if (Se(s) && !Wr(s))
        return s;
      s = Je(s);
    }
    return r;
  }
  let n = jo(e, t);
  for (; n && wd(n) && Wr(n); )
    n = jo(n, t);
  return n && wt(n) && Wr(n) && !Fn(n) ? r : n || Cd(e) || r;
}
const Id = async function(e) {
  const t = this.getOffsetParent || ia, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: _d(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Dd(e) {
  return Te(e).direction === "rtl";
}
const Od = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ed,
  getDocumentElement: Le,
  getClippingRect: Ad,
  getOffsetParent: ia,
  getElementRects: Id,
  getClientRects: jd,
  getDimensions: Pd,
  getScale: xt,
  isElement: Se,
  isRTL: Dd
};
function ca(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ld(e, t) {
  let r = null, n;
  const s = Le(e);
  function i() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function a(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: u,
      width: p,
      height: v
    } = d;
    if (c || t(), !p || !v)
      return;
    const x = rr(u), h = rr(s.clientWidth - (f + p)), y = rr(s.clientHeight - (u + v)), g = rr(f), b = {
      rootMargin: -x + "px " + -h + "px " + -y + "px " + -g + "px",
      threshold: we(0, Ze(1, l)) || 1
    };
    let w = !0;
    function N(A) {
      const M = A[0].intersectionRatio;
      if (M !== l) {
        if (!w)
          return a();
        M ? a(!1, M) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !ca(d, e.getBoundingClientRect()) && a(), w = !1;
    }
    try {
      r = new IntersectionObserver(N, {
        ...b,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(N, b);
    }
    r.observe(e);
  }
  return a(!0), i;
}
function Fd(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, d = Bn(e), f = s || i ? [...d ? Vt(d) : [], ...Vt(t)] : [];
  f.forEach((g) => {
    s && g.addEventListener("scroll", r, {
      passive: !0
    }), i && g.addEventListener("resize", r);
  });
  const u = d && c ? Ld(d, r) : null;
  let p = -1, v = null;
  a && (v = new ResizeObserver((g) => {
    let [C] = g;
    C && C.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = v) == null || b.observe(t);
    })), r();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? ct(e) : null;
  l && y();
  function y() {
    const g = ct(e);
    h && !ca(h, g) && r(), h = g, x = requestAnimationFrame(y);
  }
  return r(), () => {
    var g;
    f.forEach((C) => {
      s && C.removeEventListener("scroll", r), i && C.removeEventListener("resize", r);
    }), u == null || u(), (g = v) == null || g.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const zd = vd, Bd = xd, Vd = pd, $d = bd, Hd = hd, Ro = md, Wd = yd, Ud = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Od,
    ...r
  }, i = {
    ...s.platform,
    _c: n
  };
  return fd(e, t, {
    ...s,
    platform: i
  });
};
var cr = typeof document < "u" ? hc : Xe;
function hr(e, t) {
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
        if (!hr(e[n], t[n]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const i = s[n];
      if (!(i === "_owner" && e.$$typeof) && !hr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function la(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function So(e, t) {
  const r = la(e);
  return Math.round(t * r) / r;
}
function Ur(e) {
  const t = m.useRef(e);
  return cr(() => {
    t.current = e;
  }), t;
}
function Gd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: s,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: d
  } = e, [f, u] = m.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = m.useState(n);
  hr(p, n) || v(n);
  const [x, h] = m.useState(null), [y, g] = m.useState(null), C = m.useCallback((S) => {
    S !== A.current && (A.current = S, h(S));
  }, []), b = m.useCallback((S) => {
    S !== M.current && (M.current = S, g(S));
  }, []), w = i || x, N = a || y, A = m.useRef(null), M = m.useRef(null), j = m.useRef(f), _ = l != null, D = Ur(l), k = Ur(s), T = Ur(d), O = m.useCallback(() => {
    if (!A.current || !M.current)
      return;
    const S = {
      placement: t,
      strategy: r,
      middleware: p
    };
    k.current && (S.platform = k.current), Ud(A.current, M.current, S).then((I) => {
      const E = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      F.current && !hr(j.current, E) && (j.current = E, yr.flushSync(() => {
        u(E);
      }));
    });
  }, [p, t, r, k, T]);
  cr(() => {
    d === !1 && j.current.isPositioned && (j.current.isPositioned = !1, u((S) => ({
      ...S,
      isPositioned: !1
    })));
  }, [d]);
  const F = m.useRef(!1);
  cr(() => (F.current = !0, () => {
    F.current = !1;
  }), []), cr(() => {
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
    setFloating: b
  }), [C, b]), P = m.useMemo(() => ({
    reference: w,
    floating: N
  }), [w, N]), H = m.useMemo(() => {
    const S = {
      position: r,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return S;
    const I = So(P.floating, f.x), E = So(P.floating, f.y);
    return c ? {
      ...S,
      transform: "translate(" + I + "px, " + E + "px)",
      ...la(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: I,
      top: E
    };
  }, [r, c, P.floating, f.x, f.y]);
  return m.useMemo(() => ({
    ...f,
    update: O,
    refs: z,
    elements: P,
    floatingStyles: H
  }), [f, O, z, P, H]);
}
const Kd = (e) => {
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
}, qd = (e, t) => ({
  ...zd(e),
  options: [e, t]
}), Yd = (e, t) => ({
  ...Bd(e),
  options: [e, t]
}), Xd = (e, t) => ({
  ...Wd(e),
  options: [e, t]
}), Zd = (e, t) => ({
  ...Vd(e),
  options: [e, t]
}), Jd = (e, t) => ({
  ...$d(e),
  options: [e, t]
}), Qd = (e, t) => ({
  ...Hd(e),
  options: [e, t]
}), ef = (e, t) => ({
  ...Kd(e),
  options: [e, t]
});
var tf = "Arrow", ua = m.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: s = 5, ...i } = e;
  return /* @__PURE__ */ o.jsx(
    Y.svg,
    {
      ...i,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ o.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ua.displayName = tf;
var rf = ua, $n = "Popper", [da, Sr] = $e($n), [nf, fa] = da($n), ma = (e) => {
  const { __scopePopper: t, children: r } = e, [n, s] = m.useState(null);
  return /* @__PURE__ */ o.jsx(nf, { scope: t, anchor: n, onAnchorChange: s, children: r });
};
ma.displayName = $n;
var pa = "PopperAnchor", ha = m.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e, i = fa(pa, r), a = m.useRef(null), c = ne(t, a);
    return m.useEffect(() => {
      i.onAnchorChange((n == null ? void 0 : n.current) || a.current);
    }), n ? null : /* @__PURE__ */ o.jsx(Y.div, { ...s, ref: c });
  }
);
ha.displayName = pa;
var Hn = "PopperContent", [of, sf] = da(Hn), ga = m.forwardRef(
  (e, t) => {
    var L, U, Z, J, te, re;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: u = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...h
    } = e, y = fa(Hn, r), [g, C] = m.useState(null), b = ne(t, (be) => C(be)), [w, N] = m.useState(null), A = Mn(w), M = (A == null ? void 0 : A.width) ?? 0, j = (A == null ? void 0 : A.height) ?? 0, _ = n + (i !== "center" ? "-" + i : ""), D = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, k = Array.isArray(d) ? d : [d], T = k.length > 0, O = {
      padding: D,
      boundary: k.filter(cf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: F, floatingStyles: z, placement: P, isPositioned: H, middlewareData: S } = Gd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...be) => Fd(...be, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        qd({ mainAxis: s + j, alignmentAxis: a }),
        l && Yd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? Xd() : void 0,
          ...O
        }),
        l && Zd({ ...O }),
        Jd({
          ...O,
          apply: ({ elements: be, rects: Me, availableWidth: Mt, availableHeight: At }) => {
            const { width: Pt, height: pc } = Me.reference, Xt = be.floating.style;
            Xt.setProperty("--radix-popper-available-width", `${Mt}px`), Xt.setProperty("--radix-popper-available-height", `${At}px`), Xt.setProperty("--radix-popper-anchor-width", `${Pt}px`), Xt.setProperty("--radix-popper-anchor-height", `${pc}px`);
          }
        }),
        w && ef({ element: w, padding: c }),
        lf({ arrowWidth: M, arrowHeight: j }),
        p && Qd({ strategy: "referenceHidden", ...O })
      ]
    }), [I, E] = ya(P), B = De(x);
    le(() => {
      H && (B == null || B());
    }, [H, B]);
    const K = (L = S.arrow) == null ? void 0 : L.x, q = (U = S.arrow) == null ? void 0 : U.y, Q = ((Z = S.arrow) == null ? void 0 : Z.centerOffset) !== 0, [se, ae] = m.useState();
    return le(() => {
      g && ae(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: H ? z.transform : "translate(0, -200%)",
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
          of,
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
                ref: b,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ga.displayName = Hn;
var va = "PopperArrow", af = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, xa = m.forwardRef(function(t, r) {
  const { __scopePopper: n, ...s } = t, i = sf(va, n), a = af[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ o.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ o.jsx(
          rf,
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
xa.displayName = va;
function cf(e) {
  return e !== null;
}
var lf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, g, C;
    const { placement: r, rects: n, middlewareData: s } = t, a = ((y = s.arrow) == null ? void 0 : y.centerOffset) !== 0, c = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [d, f] = ya(r), u = { start: "0%", center: "50%", end: "100%" }[f], p = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + c / 2, v = (((C = s.arrow) == null ? void 0 : C.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = a ? u : `${p}px`, h = `${-l}px`) : d === "top" ? (x = a ? u : `${p}px`, h = `${n.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = a ? u : `${v}px`) : d === "left" && (x = `${n.floating.width + l}px`, h = a ? u : `${v}px`), { data: { x, y: h } };
  }
});
function ya(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ba = ma, wa = ha, Ca = ga, Na = xa, uf = "Portal", Wn = m.forwardRef((e, t) => {
  var c;
  const { container: r, ...n } = e, [s, i] = m.useState(!1);
  le(() => i(!0), []);
  const a = r || s && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return a ? xc.createPortal(/* @__PURE__ */ o.jsx(Y.div, { ...n, ref: t }), a) : null;
});
Wn.displayName = uf;
var ka = Object.freeze({
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
}), df = "VisuallyHidden", ff = m.forwardRef(
  (e, t) => /* @__PURE__ */ o.jsx(
    Y.span,
    {
      ...e,
      ref: t,
      style: { ...ka, ...e.style }
    }
  )
);
ff.displayName = df;
var mf = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ht = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = {}, Gr = 0, Ea = function(e) {
  return e && (e.host || Ea(e.parentNode));
}, pf = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Ea(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, hf = function(e, t, r, n) {
  var s = pf(t, Array.isArray(e) ? e : [e]);
  or[r] || (or[r] = /* @__PURE__ */ new WeakMap());
  var i = or[r], a = [], c = /* @__PURE__ */ new Set(), l = new Set(s), d = function(u) {
    !u || c.has(u) || (c.add(u), d(u.parentNode));
  };
  s.forEach(d);
  var f = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (c.has(p))
        f(p);
      else
        try {
          var v = p.getAttribute(n), x = v !== null && v !== "false", h = (ht.get(p) || 0) + 1, y = (i.get(p) || 0) + 1;
          ht.set(p, h), i.set(p, y), a.push(p), h === 1 && x && nr.set(p, !0), y === 1 && p.setAttribute(r, "true"), x || p.setAttribute(n, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", p, g);
        }
    });
  };
  return f(t), c.clear(), Gr++, function() {
    a.forEach(function(u) {
      var p = ht.get(u) - 1, v = i.get(u) - 1;
      ht.set(u, p), i.set(u, v), p || (nr.has(u) || u.removeAttribute(n), nr.delete(u)), v || u.removeAttribute(r);
    }), Gr--, Gr || (ht = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = {});
  };
}, ja = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = mf(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), hf(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, _e = function() {
  return _e = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, _e.apply(this, arguments);
};
function Ra(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function gf(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, i; n < s; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var lr = "right-scroll-bar-position", ur = "width-before-scroll-bar", vf = "with-scroll-bars-hidden", xf = "--removed-body-scroll-bar-size";
function Kr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yf(e, t) {
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
var bf = typeof window < "u" ? m.useLayoutEffect : m.useEffect, To = /* @__PURE__ */ new WeakMap();
function wf(e, t) {
  var r = yf(null, function(n) {
    return e.forEach(function(s) {
      return Kr(s, n);
    });
  });
  return bf(function() {
    var n = To.get(r);
    if (n) {
      var s = new Set(n), i = new Set(e), a = r.current;
      s.forEach(function(c) {
        i.has(c) || Kr(c, null);
      }), i.forEach(function(c) {
        s.has(c) || Kr(c, a);
      });
    }
    To.set(r, e);
  }, [e]), r;
}
function Cf(e) {
  return e;
}
function Nf(e, t) {
  t === void 0 && (t = Cf);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, n);
      return r.push(a), function() {
        r = r.filter(function(c) {
          return c !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(i);
      }
      r = {
        push: function(c) {
          return i(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var a = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(i), a = r;
      }
      var l = function() {
        var f = a;
        a = [], f.forEach(i);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), r = {
        push: function(f) {
          a.push(f), d();
        },
        filter: function(f) {
          return a = a.filter(f), r;
        }
      };
    }
  };
  return s;
}
function kf(e) {
  e === void 0 && (e = {});
  var t = Nf(null);
  return t.options = _e({ async: !0, ssr: !1 }, e), t;
}
var Sa = function(e) {
  var t = e.sideCar, r = Ra(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return m.createElement(n, _e({}, r));
};
Sa.isSideCarExport = !0;
function Ef(e, t) {
  return e.useMedium(t), Sa;
}
var Ta = kf(), qr = function() {
}, Tr = m.forwardRef(function(e, t) {
  var r = m.useRef(null), n = m.useState({
    onScrollCapture: qr,
    onWheelCapture: qr,
    onTouchMoveCapture: qr
  }), s = n[0], i = n[1], a = e.forwardProps, c = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, u = e.shards, p = e.sideCar, v = e.noIsolation, x = e.inert, h = e.allowPinchZoom, y = e.as, g = y === void 0 ? "div" : y, C = e.gapMode, b = Ra(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = p, N = wf([r, t]), A = _e(_e({}, b), s);
  return m.createElement(
    m.Fragment,
    null,
    f && m.createElement(w, { sideCar: Ta, removeScrollBar: d, shards: u, noIsolation: v, inert: x, setCallbacks: i, allowPinchZoom: !!h, lockRef: r, gapMode: C }),
    a ? m.cloneElement(m.Children.only(c), _e(_e({}, A), { ref: N })) : m.createElement(g, _e({}, A, { className: l, ref: N }), c)
  );
});
Tr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Tr.classNames = {
  fullWidth: ur,
  zeroRight: lr
};
var jf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Rf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = jf();
  return t && e.setAttribute("nonce", t), e;
}
function Sf(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Tf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Mf = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Rf()) && (Sf(t, r), Tf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Af = function() {
  var e = Mf();
  return function(t, r) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Ma = function() {
  var e = Af(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, Pf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Yr = function(e) {
  return parseInt(e || "", 10) || 0;
}, _f = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Yr(r), Yr(n), Yr(s)];
}, If = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Pf;
  var t = _f(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Df = Ma(), yt = "data-scroll-locked", Of = function(e, t, r, n) {
  var s = e.left, i = e.top, a = e.right, c = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(vf, ` {
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
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(lr, ` {
    right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(ur, ` {
    margin-right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(lr, " .").concat(lr, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ur, " .").concat(ur, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(yt, `] {
    `).concat(xf, ": ").concat(c, `px;
  }
`);
}, Mo = function() {
  var e = parseInt(document.body.getAttribute(yt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Lf = function() {
  m.useEffect(function() {
    return document.body.setAttribute(yt, (Mo() + 1).toString()), function() {
      var e = Mo() - 1;
      e <= 0 ? document.body.removeAttribute(yt) : document.body.setAttribute(yt, e.toString());
    };
  }, []);
}, Ff = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n;
  Lf();
  var i = m.useMemo(function() {
    return If(s);
  }, [s]);
  return m.createElement(Df, { styles: Of(i, !t, s, r ? "" : "!important") });
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
var gt = fn ? { passive: !1 } : !1, zf = function(e) {
  return e.tagName === "TEXTAREA";
}, Aa = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !zf(e) && r[t] === "visible")
  );
}, Bf = function(e) {
  return Aa(e, "overflowY");
}, Vf = function(e) {
  return Aa(e, "overflowX");
}, Ao = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var s = Pa(e, n);
    if (s) {
      var i = _a(e, n), a = i[1], c = i[2];
      if (a > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, $f = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Hf = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Pa = function(e, t) {
  return e === "v" ? Bf(t) : Vf(t);
}, _a = function(e, t) {
  return e === "v" ? $f(t) : Hf(t);
}, Wf = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Uf = function(e, t, r, n, s) {
  var i = Wf(e, window.getComputedStyle(t).direction), a = i * n, c = r.target, l = t.contains(c), d = !1, f = a > 0, u = 0, p = 0;
  do {
    var v = _a(e, c), x = v[0], h = v[1], y = v[2], g = h - y - i * x;
    (x || g) && Pa(e, c) && (u += g, p += x), c instanceof ShadowRoot ? c = c.host : c = c.parentNode;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, ar = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Po = function(e) {
  return [e.deltaX, e.deltaY];
}, _o = function(e) {
  return e && "current" in e ? e.current : e;
}, Gf = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Kf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qf = 0, vt = [];
function Yf(e) {
  var t = m.useRef([]), r = m.useRef([0, 0]), n = m.useRef(), s = m.useState(qf++)[0], i = m.useState(Ma)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var h = gf([e.lockRef.current], (e.shards || []).map(_o), !0).filter(Boolean);
      return h.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), h.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = m.useCallback(function(h, y) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var g = ar(h), C = r.current, b = "deltaX" in h ? h.deltaX : C[0] - g[0], w = "deltaY" in h ? h.deltaY : C[1] - g[1], N, A = h.target, M = Math.abs(b) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && M === "h" && A.type === "range")
      return !1;
    var j = Ao(M, A);
    if (!j)
      return !0;
    if (j ? N = M : (N = M === "v" ? "h" : "v", j = Ao(M, A)), !j)
      return !1;
    if (!n.current && "changedTouches" in h && (b || w) && (n.current = N), !N)
      return !0;
    var _ = n.current || N;
    return Uf(_, y, h, _ === "h" ? b : w);
  }, []), l = m.useCallback(function(h) {
    var y = h;
    if (!(!vt.length || vt[vt.length - 1] !== i)) {
      var g = "deltaY" in y ? Po(y) : ar(y), C = t.current.filter(function(N) {
        return N.name === y.type && (N.target === y.target || y.target === N.shadowParent) && Gf(N.delta, g);
      })[0];
      if (C && C.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!C) {
        var b = (a.current.shards || []).map(_o).filter(Boolean).filter(function(N) {
          return N.contains(y.target);
        }), w = b.length > 0 ? c(y, b[0]) : !a.current.noIsolation;
        w && y.cancelable && y.preventDefault();
      }
    }
  }, []), d = m.useCallback(function(h, y, g, C) {
    var b = { name: h, delta: y, target: g, should: C, shadowParent: Xf(g) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== b;
      });
    }, 1);
  }, []), f = m.useCallback(function(h) {
    r.current = ar(h), n.current = void 0;
  }, []), u = m.useCallback(function(h) {
    d(h.type, Po(h), h.target, c(h, e.lockRef.current));
  }, []), p = m.useCallback(function(h) {
    d(h.type, ar(h), h.target, c(h, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return vt.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, gt), document.addEventListener("touchmove", l, gt), document.addEventListener("touchstart", f, gt), function() {
      vt = vt.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", l, gt), document.removeEventListener("touchmove", l, gt), document.removeEventListener("touchstart", f, gt);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(i, { styles: Kf(s) }) : null,
    v ? m.createElement(Ff, { gapMode: e.gapMode }) : null
  );
}
function Xf(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Zf = Ef(Ta, Yf);
var Un = m.forwardRef(function(e, t) {
  return m.createElement(Tr, _e({}, e, { ref: t, sideCar: Zf }));
});
Un.classNames = Tr.classNames;
var Jf = [" ", "Enter", "ArrowUp", "ArrowDown"], Qf = [" ", "Enter"], lt = "Select", [Mr, Ar, em] = br(lt), [Tt, Fh] = $e(lt, [
  em,
  Sr
]), Pr = Sr(), [tm, Qe] = Tt(lt), [rm, nm] = Tt(lt), Ia = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: i,
    value: a,
    defaultValue: c,
    onValueChange: l,
    dir: d,
    name: f,
    autoComplete: u,
    disabled: p,
    required: v,
    form: x
  } = e, h = Pr(t), [y, g] = m.useState(null), [C, b] = m.useState(null), [w, N] = m.useState(!1), A = Ut(d), [M, j] = it({
    prop: n,
    defaultProp: s ?? !1,
    onChange: i,
    caller: lt
  }), [_, D] = it({
    prop: a,
    defaultProp: c,
    onChange: l,
    caller: lt
  }), k = m.useRef(null), T = y ? x || !!y.closest("form") : !0, [O, F] = m.useState(/* @__PURE__ */ new Set()), z = Array.from(O).map((P) => P.props.value).join(";");
  return /* @__PURE__ */ o.jsx(ba, { ...h, children: /* @__PURE__ */ o.jsxs(
    tm,
    {
      required: v,
      scope: t,
      trigger: y,
      onTriggerChange: g,
      valueNode: C,
      onValueNodeChange: b,
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
        /* @__PURE__ */ o.jsx(Mr.Provider, { scope: t, children: /* @__PURE__ */ o.jsx(
          rm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((P) => {
              F((H) => new Set(H).add(P));
            }, []),
            onNativeOptionRemove: m.useCallback((P) => {
              F((H) => {
                const S = new Set(H);
                return S.delete(P), S;
              });
            }, []),
            children: r
          }
        ) }),
        T ? /* @__PURE__ */ o.jsxs(
          oi,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: _,
            onChange: (P) => D(P.target.value),
            disabled: p,
            form: x,
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
Ia.displayName = lt;
var Da = "SelectTrigger", Oa = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...s } = e, i = Pr(r), a = Qe(Da, r), c = a.disabled || n, l = ne(t, a.onTriggerChange), d = Ar(r), f = m.useRef("touch"), [u, p, v] = ai((h) => {
      const y = d().filter((b) => !b.disabled), g = y.find((b) => b.value === a.value), C = ii(y, h, g);
      C !== void 0 && a.onValueChange(C.value);
    }), x = (h) => {
      c || (a.onOpenChange(!0), v()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ o.jsx(wa, { asChild: !0, ...i, children: /* @__PURE__ */ o.jsx(
      Y.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: c,
        "data-disabled": c ? "" : void 0,
        "data-placeholder": si(a.value) ? "" : void 0,
        ...s,
        ref: l,
        onClick: W(s.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && x(h);
        }),
        onPointerDown: W(s.onPointerDown, (h) => {
          f.current = h.pointerType;
          const y = h.target;
          y.hasPointerCapture(h.pointerId) && y.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: W(s.onKeyDown, (h) => {
          const y = u.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(y && h.key === " ") && Jf.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Oa.displayName = Da;
var La = "SelectValue", Fa = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, children: i, placeholder: a = "", ...c } = e, l = Qe(La, r), { onValueNodeHasChildrenChange: d } = l, f = i !== void 0, u = ne(t, l.onValueNodeChange);
    return le(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ o.jsx(
      Y.span,
      {
        ...c,
        ref: u,
        style: { pointerEvents: "none" },
        children: si(l.value) ? /* @__PURE__ */ o.jsx(o.Fragment, { children: a }) : i
      }
    );
  }
);
Fa.displayName = La;
var om = "SelectIcon", za = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...s } = e;
    return /* @__PURE__ */ o.jsx(Y.span, { "aria-hidden": !0, ...s, ref: t, children: n || "▼" });
  }
);
za.displayName = om;
var sm = "SelectPortal", Ba = (e) => /* @__PURE__ */ o.jsx(Wn, { asChild: !0, ...e });
Ba.displayName = sm;
var ut = "SelectContent", Va = m.forwardRef(
  (e, t) => {
    const r = Qe(ut, e.__scopeSelect), [n, s] = m.useState();
    if (le(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const i = n;
      return i ? yr.createPortal(
        /* @__PURE__ */ o.jsx($a, { scope: e.__scopeSelect, children: /* @__PURE__ */ o.jsx(Mr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ o.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ o.jsx(Ha, { ...e, ref: t });
  }
);
Va.displayName = ut;
var Ee = 10, [$a, et] = Tt(ut), am = "SelectContentImpl", im = /* @__PURE__ */ bt("SelectContent.RemoveScroll"), Ha = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: c,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: y,
      //
      ...g
    } = e, C = Qe(ut, r), [b, w] = m.useState(null), [N, A] = m.useState(null), M = ne(t, (L) => w(L)), [j, _] = m.useState(null), [D, k] = m.useState(
      null
    ), T = Ar(r), [O, F] = m.useState(!1), z = m.useRef(!1);
    m.useEffect(() => {
      if (b) return ja(b);
    }, [b]), Js();
    const P = m.useCallback(
      (L) => {
        const [U, ...Z] = T().map((re) => re.ref.current), [J] = Z.slice(-1), te = document.activeElement;
        for (const re of L)
          if (re === te || (re == null || re.scrollIntoView({ block: "nearest" }), re === U && N && (N.scrollTop = 0), re === J && N && (N.scrollTop = N.scrollHeight), re == null || re.focus(), document.activeElement !== te)) return;
      },
      [T, N]
    ), H = m.useCallback(
      () => P([j, b]),
      [P, j, b]
    );
    m.useEffect(() => {
      O && H();
    }, [O, H]);
    const { onOpenChange: S, triggerPointerDownPosRef: I } = C;
    m.useEffect(() => {
      if (b) {
        let L = { x: 0, y: 0 };
        const U = (J) => {
          var te, re;
          L = {
            x: Math.abs(Math.round(J.pageX) - (((te = I.current) == null ? void 0 : te.x) ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (((re = I.current) == null ? void 0 : re.y) ?? 0))
          };
        }, Z = (J) => {
          L.x <= 10 && L.y <= 10 ? J.preventDefault() : b.contains(J.target) || S(!1), document.removeEventListener("pointermove", U), I.current = null;
        };
        return I.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [b, S, I]), m.useEffect(() => {
      const L = () => S(!1);
      return window.addEventListener("blur", L), window.addEventListener("resize", L), () => {
        window.removeEventListener("blur", L), window.removeEventListener("resize", L);
      };
    }, [S]);
    const [E, B] = ai((L) => {
      const U = T().filter((te) => !te.disabled), Z = U.find((te) => te.ref.current === document.activeElement), J = ii(U, L, Z);
      J && setTimeout(() => J.ref.current.focus());
    }), K = m.useCallback(
      (L, U, Z) => {
        const J = !z.current && !Z;
        (C.value !== void 0 && C.value === U || J) && (_(L), J && (z.current = !0));
      },
      [C.value]
    ), q = m.useCallback(() => b == null ? void 0 : b.focus(), [b]), Q = m.useCallback(
      (L, U, Z) => {
        const J = !z.current && !Z;
        (C.value !== void 0 && C.value === U || J) && k(L);
      },
      [C.value]
    ), se = n === "popper" ? mn : Wa, ae = se === mn ? {
      side: c,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ o.jsx(
      $a,
      {
        scope: r,
        content: b,
        viewport: N,
        onViewportChange: A,
        itemRefCallback: K,
        selectedItem: j,
        onItemLeave: q,
        itemTextRefCallback: Q,
        focusSelectedItem: H,
        selectedItemText: D,
        position: n,
        isPositioned: O,
        searchRef: E,
        children: /* @__PURE__ */ o.jsx(Un, { as: im, allowPinchZoom: !0, children: /* @__PURE__ */ o.jsx(
          In,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (L) => {
              L.preventDefault();
            },
            onUnmountAutoFocus: W(s, (L) => {
              var U;
              (U = C.trigger) == null || U.focus({ preventScroll: !0 }), L.preventDefault();
            }),
            children: /* @__PURE__ */ o.jsx(
              _n,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
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
                    onKeyDown: W(g.onKeyDown, (L) => {
                      const U = L.ctrlKey || L.altKey || L.metaKey;
                      if (L.key === "Tab" && L.preventDefault(), !U && L.key.length === 1 && B(L.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
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
Ha.displayName = am;
var cm = "SelectItemAlignedPosition", Wa = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...s } = e, i = Qe(ut, r), a = et(ut, r), [c, l] = m.useState(null), [d, f] = m.useState(null), u = ne(t, (M) => f(M)), p = Ar(r), v = m.useRef(!1), x = m.useRef(!0), { viewport: h, selectedItem: y, selectedItemText: g, focusSelectedItem: C } = a, b = m.useCallback(() => {
    if (i.trigger && i.valueNode && c && d && h && y && g) {
      const M = i.trigger.getBoundingClientRect(), j = d.getBoundingClientRect(), _ = i.valueNode.getBoundingClientRect(), D = g.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const te = D.left - j.left, re = _.left - te, be = M.left - re, Me = M.width + be, Mt = Math.max(Me, j.width), At = window.innerWidth - Ee, Pt = dr(re, [
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
        const te = j.right - D.right, re = window.innerWidth - _.right - te, be = window.innerWidth - M.right - re, Me = M.width + be, Mt = Math.max(Me, j.width), At = window.innerWidth - Ee, Pt = dr(re, [
          Ee,
          Math.max(Ee, At - Mt)
        ]);
        c.style.minWidth = Me + "px", c.style.right = Pt + "px";
      }
      const k = p(), T = window.innerHeight - Ee * 2, O = h.scrollHeight, F = window.getComputedStyle(d), z = parseInt(F.borderTopWidth, 10), P = parseInt(F.paddingTop, 10), H = parseInt(F.borderBottomWidth, 10), S = parseInt(F.paddingBottom, 10), I = z + P + O + S + H, E = Math.min(y.offsetHeight * 5, I), B = window.getComputedStyle(h), K = parseInt(B.paddingTop, 10), q = parseInt(B.paddingBottom, 10), Q = M.top + M.height / 2 - Ee, se = T - Q, ae = y.offsetHeight / 2, L = y.offsetTop + ae, U = z + P + L, Z = I - U;
      if (U <= Q) {
        const te = k.length > 0 && y === k[k.length - 1].ref.current;
        c.style.bottom = "0px";
        const re = d.clientHeight - h.offsetTop - h.offsetHeight, be = Math.max(
          se,
          ae + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? q : 0) + re + H
        ), Me = U + be;
        c.style.height = Me + "px";
      } else {
        const te = k.length > 0 && y === k[0].ref.current;
        c.style.top = "0px";
        const be = Math.max(
          Q,
          z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? K : 0) + ae
        ) + Z;
        c.style.height = be + "px", h.scrollTop = U - Q + h.offsetTop;
      }
      c.style.margin = `${Ee}px 0`, c.style.minHeight = E + "px", c.style.maxHeight = T + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    i.trigger,
    i.valueNode,
    c,
    d,
    h,
    y,
    g,
    i.dir,
    n
  ]);
  le(() => b(), [b]);
  const [w, N] = m.useState();
  le(() => {
    d && N(window.getComputedStyle(d).zIndex);
  }, [d]);
  const A = m.useCallback(
    (M) => {
      M && x.current === !0 && (b(), C == null || C(), x.current = !1);
    },
    [b, C]
  );
  return /* @__PURE__ */ o.jsx(
    um,
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
              ref: u,
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
Wa.displayName = cm;
var lm = "SelectPopperPosition", mn = m.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: s = Ee,
    ...i
  } = e, a = Pr(r);
  return /* @__PURE__ */ o.jsx(
    Ca,
    {
      ...a,
      ...i,
      ref: t,
      align: n,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
mn.displayName = lm;
var [um, Gn] = Tt(ut, {}), pn = "SelectViewport", Ua = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...s } = e, i = et(pn, r), a = Gn(pn, r), c = ne(t, i.onViewportChange), l = m.useRef(0);
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
      /* @__PURE__ */ o.jsx(Mr.Slot, { scope: r, children: /* @__PURE__ */ o.jsx(
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
          onScroll: W(s.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: p } = a;
            if (p != null && p.current && u) {
              const v = Math.abs(l.current - f.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ee * 2, h = parseFloat(u.style.minHeight), y = parseFloat(u.style.height), g = Math.max(h, y);
                if (g < x) {
                  const C = g + v, b = Math.min(x, C), w = C - b;
                  u.style.height = b + "px", u.style.bottom === "0px" && (f.scrollTop = w > 0 ? w : 0, u.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ua.displayName = pn;
var Ga = "SelectGroup", [dm, fm] = Tt(Ga), mm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = at();
    return /* @__PURE__ */ o.jsx(dm, { scope: r, id: s, children: /* @__PURE__ */ o.jsx(Y.div, { role: "group", "aria-labelledby": s, ...n, ref: t }) });
  }
);
mm.displayName = Ga;
var Ka = "SelectLabel", qa = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = fm(Ka, r);
    return /* @__PURE__ */ o.jsx(Y.div, { id: s.id, ...n, ref: t });
  }
);
qa.displayName = Ka;
var gr = "SelectItem", [pm, Ya] = Tt(gr), Xa = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: s = !1,
      textValue: i,
      ...a
    } = e, c = Qe(gr, r), l = et(gr, r), d = c.value === n, [f, u] = m.useState(i ?? ""), [p, v] = m.useState(!1), x = ne(
      t,
      (C) => {
        var b;
        return (b = l.itemRefCallback) == null ? void 0 : b.call(l, C, n, s);
      }
    ), h = at(), y = m.useRef("touch"), g = () => {
      s || (c.onValueChange(n), c.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ o.jsx(
      pm,
      {
        scope: r,
        value: n,
        disabled: s,
        textId: h,
        isSelected: d,
        onItemTextChange: m.useCallback((C) => {
          u((b) => b || ((C == null ? void 0 : C.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ o.jsx(
          Mr.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: s,
            textValue: f,
            children: /* @__PURE__ */ o.jsx(
              Y.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: W(a.onFocus, () => v(!0)),
                onBlur: W(a.onBlur, () => v(!1)),
                onClick: W(a.onClick, () => {
                  y.current !== "mouse" && g();
                }),
                onPointerUp: W(a.onPointerUp, () => {
                  y.current === "mouse" && g();
                }),
                onPointerDown: W(a.onPointerDown, (C) => {
                  y.current = C.pointerType;
                }),
                onPointerMove: W(a.onPointerMove, (C) => {
                  var b;
                  y.current = C.pointerType, s ? (b = l.onItemLeave) == null || b.call(l) : y.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: W(a.onPointerLeave, (C) => {
                  var b;
                  C.currentTarget === document.activeElement && ((b = l.onItemLeave) == null || b.call(l));
                }),
                onKeyDown: W(a.onKeyDown, (C) => {
                  var w;
                  ((w = l.searchRef) == null ? void 0 : w.current) !== "" && C.key === " " || (Qf.includes(C.key) && g(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Xa.displayName = gr;
var Ot = "SelectItemText", Za = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, ...i } = e, a = Qe(Ot, r), c = et(Ot, r), l = Ya(Ot, r), d = nm(Ot, r), [f, u] = m.useState(null), p = ne(
      t,
      (g) => u(g),
      l.onItemTextChange,
      (g) => {
        var C;
        return (C = c.itemTextRefCallback) == null ? void 0 : C.call(c, g, l.value, l.disabled);
      }
    ), v = f == null ? void 0 : f.textContent, x = m.useMemo(
      () => /* @__PURE__ */ o.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: y } = d;
    return le(() => (h(x), () => y(x)), [h, y, x]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(Y.span, { id: l.textId, ...i, ref: p }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? yr.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
Za.displayName = Ot;
var Ja = "SelectItemIndicator", Qa = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Ya(Ja, r).isSelected ? /* @__PURE__ */ o.jsx(Y.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
Qa.displayName = Ja;
var hn = "SelectScrollUpButton", ei = m.forwardRef((e, t) => {
  const r = et(hn, e.__scopeSelect), n = Gn(hn, e.__scopeSelect), [s, i] = m.useState(!1), a = ne(t, n.onScrollButtonChange);
  return le(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const d = l.scrollTop > 0;
        i(d);
      };
      const l = r.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ o.jsx(
    ri,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = r;
        c && l && (c.scrollTop = c.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
ei.displayName = hn;
var gn = "SelectScrollDownButton", ti = m.forwardRef((e, t) => {
  const r = et(gn, e.__scopeSelect), n = Gn(gn, e.__scopeSelect), [s, i] = m.useState(!1), a = ne(t, n.onScrollButtonChange);
  return le(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        i(f);
      };
      const l = r.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ o.jsx(
    ri,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: c, selectedItem: l } = r;
        c && l && (c.scrollTop = c.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
ti.displayName = gn;
var ri = m.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...s } = e, i = et("SelectScrollButton", r), a = m.useRef(null), c = Ar(r), l = m.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), le(() => {
    var f;
    const d = c().find((u) => u.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ o.jsx(
    Y.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: W(s.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: W(s.onPointerMove, () => {
        var d;
        (d = i.onItemLeave) == null || d.call(i), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: W(s.onPointerLeave, () => {
        l();
      })
    }
  );
}), hm = "SelectSeparator", ni = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
ni.displayName = hm;
var vn = "SelectArrow", gm = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = Pr(r), i = Qe(vn, r), a = et(vn, r);
    return i.open && a.position === "popper" ? /* @__PURE__ */ o.jsx(Na, { ...s, ...n, ref: t }) : null;
  }
);
gm.displayName = vn;
var vm = "SelectBubbleInput", oi = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const s = m.useRef(null), i = ne(n, s), a = Tn(t);
    return m.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== t && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(c, t), c.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ o.jsx(
      Y.select,
      {
        ...r,
        style: { ...ka, ...r.style },
        ref: i,
        defaultValue: t
      }
    );
  }
);
oi.displayName = vm;
function si(e) {
  return e === "" || e === void 0;
}
function ai(e) {
  const t = De(e), r = m.useRef(""), n = m.useRef(0), s = m.useCallback(
    (a) => {
      const c = r.current + a;
      t(c), function l(d) {
        r.current = d, window.clearTimeout(n.current), d !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
      }(c);
    },
    [t]
  ), i = m.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(n.current), []), [r, s, i];
}
function ii(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let a = xm(e, Math.max(i, 0));
  s.length === 1 && (a = a.filter((d) => d !== r));
  const l = a.find(
    (d) => d.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function xm(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var ym = Ia, ci = Oa, bm = Fa, wm = za, Cm = Ba, li = Va, Nm = Ua, ui = qa, di = Xa, km = Za, Em = Qa, fi = ei, mi = ti, pi = ni;
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rm = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Io = (e) => {
  const t = Rm(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, hi = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Sm = (e) => {
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
var Tm = {
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
const Mm = Ct(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: i,
    iconNode: a,
    ...c
  }, l) => Zr(
    "svg",
    {
      ref: l,
      ...Tm,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: hi("lucide", s),
      ...!i && !Sm(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...a.map(([d, f]) => Zr(d, f)),
      ...Array.isArray(i) ? i : [i]
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
    ({ className: n, ...s }, i) => Zr(Mm, {
      ref: i,
      iconNode: t,
      className: hi(
        `lucide-${jm(Io(e))}`,
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
const Am = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gi = ve("check", Am);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Kn = ve("chevron-down", Pm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _m = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Im = ve("chevron-right", _m);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Om = ve("chevron-up", Dm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], xn = ve("circle-alert", Lm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], zm = ve("circle", Fm);
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
], Vm = ve("cog", Bm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Hm = ve("copy", $m);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], Um = ve("download", Wm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Km = ve("eye", Gm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [
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
], Ym = ve("palette", qm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], Zm = ve("play", Xm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Do = ve("plus", Jm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Oo = ve("trash-2", Qm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
], tp = ve("upload", ep), nt = ym, ot = bm, qe = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  ci,
  {
    ref: n,
    className: ee(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ o.jsx(wm, { asChild: !0, children: /* @__PURE__ */ o.jsx(Kn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
qe.displayName = ci.displayName;
const vi = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  fi,
  {
    ref: r,
    className: ee(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(Om, { className: "h-4 w-4" })
  }
));
vi.displayName = fi.displayName;
const xi = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  mi,
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
xi.displayName = mi.displayName;
const Ye = m.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, s) => /* @__PURE__ */ o.jsx(Cm, { children: /* @__PURE__ */ o.jsxs(
  li,
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
      /* @__PURE__ */ o.jsx(vi, {}),
      /* @__PURE__ */ o.jsx(
        Nm,
        {
          className: ee(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ o.jsx(xi, {})
    ]
  }
) }));
Ye.displayName = li.displayName;
const rp = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  ui,
  {
    ref: r,
    className: ee("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
rp.displayName = ui.displayName;
const je = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  di,
  {
    ref: n,
    className: ee(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(Em, { children: /* @__PURE__ */ o.jsx(gi, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ o.jsx(km, { children: t })
    ]
  }
));
je.displayName = di.displayName;
const np = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  pi,
  {
    ref: r,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
np.displayName = pi.displayName;
function op({ planetStats: e, setPlanetStats: t, selectedBiome: r }) {
  var l, d, f, u;
  const n = dt(e.mass, e.radius), s = Uo(e.temperature), i = Go(e.temperature, e.liquidType || s.type), a = (p, v) => {
    t({
      ...e,
      [p]: v,
      ...p === "liquidEnabled" && v === !0 ? { waterLevel: Math.max(e.waterLevel || 0, 0.5) } : {}
    });
  }, c = (p) => Ho(r, p);
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
              onValueChange: (p) => a("surfaceRoughness", p[0]),
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
          /* @__PURE__ */ o.jsxs(nt, { value: e.soilType, onValueChange: (p) => a("soilType", p), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select soil type" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: ["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].map((p) => /* @__PURE__ */ o.jsx(je, { value: p, children: p.charAt(0).toUpperCase() + p.slice(1) }, p)) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Soil Texture" }),
          /* @__PURE__ */ o.jsxs(nt, { value: e.soilTexture, onValueChange: (p) => a("soilTexture", p), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select soil texture" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: ["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].map((p) => /* @__PURE__ */ o.jsx(je, { value: p, children: p.charAt(0).toUpperCase() + p.slice(1) }, p)) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Mountain Height" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((d = e.mountainHeight) == null ? void 0 : d.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.mountainHeight || 0],
              min: 0,
              max: 1,
              step: 0.01,
              onValueChange: (p) => a("mountainHeight", p[0]),
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
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((f = e.waterLevel) == null ? void 0 : f.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.waterLevel || 0],
              min: c("waterLevel")[0],
              max: c("waterLevel")[1],
              step: 0.01,
              onValueChange: (p) => a("waterLevel", p[0]),
              className: "[&_[role=slider]]:bg-green-500"
            }
          ),
          !i && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 text-amber-400 text-xs", children: [
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
                onCheckedChange: (p) => a("liquidEnabled", p),
                className: "data-[state=checked]:bg-green-600"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70", children: "When enabled, liquid will cover at least half the surface" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Liquid Type" }),
          /* @__PURE__ */ o.jsxs(nt, { value: e.liquidType, onValueChange: (p) => a("liquidType", p), children: [
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
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((u = e.atmosphereStrength) == null ? void 0 : u.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Re,
            {
              value: [e.atmosphereStrength || 0],
              min: c("atmosphereStrength")[0],
              max: c("atmosphereStrength")[1],
              step: 0.01,
              onValueChange: (p) => a("atmosphereStrength", p[0]),
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
              onValueChange: (p) => a("cloudCount", p[0]),
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
const sp = Sn(
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
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => {
    const a = n ? al : "button";
    return /* @__PURE__ */ o.jsx(
      a,
      {
        className: ee(sp({ variant: t, size: r, className: e })),
        ref: i,
        ...s
      }
    );
  }
);
de.displayName = "Button";
function ap({
  planetStats: e,
  setPlanetStats: t,
  selectedBiome: r,
  setSelectedBiome: n,
  customColors: s,
  setCustomColors: i
}) {
  var f;
  const a = wc(), c = (u, p) => {
    t({
      ...e,
      [u]: p
    });
  }, l = (u, p) => {
    const v = { ...s, [u]: p };
    i(v), t({ ...e, customColors: v });
  }, d = (u) => Ho(r, u);
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "BIOME SELECTION" }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Biome Type" }),
        /* @__PURE__ */ o.jsxs(nt, { value: r, onValueChange: n, children: [
          /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select biome" }) }),
          /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: a.map((u) => /* @__PURE__ */ o.jsx(je, { value: u, children: u }, u)) })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70", children: "Selecting a biome will adjust parameters to fit within biome ranges" })
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "COLOR CUSTOMIZATION" }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Custom Colors" }),
          /* @__PURE__ */ o.jsx(Ym, { className: "h-4 w-4 text-green-400" })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70 mb-2", children: "Customize terrain colors for each height level" }),
        /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-2 gap-3", children: ["oceanFloor", "beach", "regular", "mountain"].map((u) => /* @__PURE__ */ o.jsxs(Pe.Fragment, { children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-xs text-green-300", children: u.replace(/([A-Z])/g, " $1").replace(/^./, (p) => p.toUpperCase()) }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              type: "color",
              value: s[u] || "#5D4037",
              onChange: (p) => l(u, p.target.value),
              className: "h-8 p-1 bg-black border-green-500/30"
            }
          )
        ] }, u)) }),
        /* @__PURE__ */ o.jsx(
          de,
          {
            variant: "outline",
            size: "sm",
            className: "mt-3 w-full border-green-500/30 text-green-400 hover:bg-green-900/20",
            onClick: () => i({ oceanFloor: "", beach: "", regular: "", mountain: "" }),
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
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((f = e.volcanicActivity) == null ? void 0 : f.toFixed(2)) || "0.00" })
        ] }),
        /* @__PURE__ */ o.jsx(
          Re,
          {
            value: [e.volcanicActivity || 0],
            min: d("volcanicActivity")[0],
            max: d("volcanicActivity")[1],
            step: 0.01,
            onValueChange: (u) => c("volcanicActivity", u[0]),
            className: "[&_[role=slider]]:bg-green-500"
          }
        )
      ] }) })
    ] })
  ] });
}
const ip = Sn(
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
    className: ee(ip({ variant: t }), e),
    ...r
  }
));
yn.displayName = "Alert";
const cp = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h5",
  {
    ref: r,
    className: ee("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
cp.displayName = "AlertTitle";
const bn = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
bn.displayName = "AlertDescription";
function lp({ landmark: e, planetStats: t }) {
  const r = fe(null), n = t.mass > 7 || t.radius > 2.5, { geometry: s, material: i } = Ce(() => {
    const a = new R.PlaneGeometry(3, 3, 128, 128), c = e.influence_type || "mountain", l = e.influence_radius || 0.5, d = e.influence_strength || 0.5, f = e.influence_roughness || 0.5, u = a.getAttribute("position"), p = new Float32Array(u.count * 3);
    for (let x = 0; x < u.count; x++) {
      const h = u.getX(x), y = u.getY(x);
      u.getZ(x);
      const g = Math.sqrt(h * h + y * y), b = Math.max(0, 1 - g / (l * 2)) * d * 2.5;
      let w = 0, N = new R.Color(10586239);
      if (n) {
        switch (c) {
          case "storm":
            w = b * Math.exp(-g / (l * 0.5)), w += b * 0.3 * Math.sin(Math.atan2(y, h) * 5 + g * 10), N = new R.Color(15037299);
            break;
          case "vortex":
            const _ = Math.atan2(y, h);
            w = b * Math.sin(_ * 8 + g * 15) * Math.exp(-g / l), N = new R.Color(8508666);
            break;
          case "band":
            w = b * Math.sin(y * 15), N = new R.Color(16766287);
            break;
          case "spot":
            const D = h / 0.7, k = Math.sqrt(D * D + y * y);
            w = b * (1 - Math.min(1, k / l)), N = new R.Color(16747109);
            break;
          case "turbulent":
            w = b * oe(h * 10, y * 10, 0), w += b * 0.5 * oe(h * 20, y * 20, 0), N = new R.Color(9795021);
            break;
          case "cyclone":
            const T = Math.atan2(y, h), O = g * 10 + T * 3;
            w = b * Math.sin(O) * Math.exp(-g / l), N = new R.Color(5227511);
            break;
          case "anticyclone":
            const F = Math.atan2(y, h), z = g * 10 - F * 3;
            w = b * Math.sin(z) * Math.exp(-g / l), N = new R.Color(16773494);
            break;
          case "zonal_flow":
            w = b * Math.sin(y * 20) * 0.5, w += b * Math.sin(y * 10 + h * 2) * 0.3, N = new R.Color(11457921);
            break;
          default:
            w = b * oe(h * 5, y * 5, 0) * 0.6, w += b * 0.4 * Math.sin(h * 8 + y * 8), N = new R.Color(11583173);
        }
        w += oe(h * 15, y * 15, 0) * b * 0.2;
      } else
        switch (c) {
          case "crater":
            g < l * 0.8 ? (w = -b * 1.2, w += oe(h * 10, y * 10, 0) * b * 0.1, N = new R.Color(9268835)) : g < l * 1.2 && (w = b * 0.8, N = new R.Color(10586239));
            break;
          case "mountain":
            w = b * 1.5 * Math.exp(-g / (l * 0.6)), w += oe(h * 15, y * 15, 0) * b * 0.3, N = new R.Color(10586239), w > 0.5 && N.lerp(new R.Color(16777215), (w - 0.5) * 2);
            break;
          case "volcano":
            if (g < l * 0.2)
              w = -b * 0.8, w += oe(h * 20, y * 20, 0) * b * 0.1, N = new R.Color(4073251);
            else {
              w = b * 1.8 * Math.exp(-g / (l * 0.4)), w += oe(h * 12, y * 12, 0) * b * 0.2;
              const O = Math.max(0, Math.min(1, w / 1.5));
              N = new R.Color(6111287).lerp(new R.Color(12531212), O);
            }
            break;
          case "valley":
          case "canyon":
            const _ = Math.abs(y);
            _ < l * 0.3 ? (w = -b * 1.2, w += oe(h * 25, y * 5, 0) * b * 0.15, N = new R.Color(7951688)) : _ < l * 0.5 && (w = b * 0.4 * (1 - (_ - l * 0.3) / (l * 0.2)), N = new R.Color(9268835));
            break;
          case "basin":
            w = -b * 0.8 * Math.exp(-g / (l * 1.5)), w += oe(h * 8, y * 8, 0) * b * 0.15, N = new R.Color(9268835);
            break;
          case "dune":
            w = b * 0.8 * Math.sin(g * 8 / l), w += b * 0.3 * Math.sin(h * 12 / l), N = new R.Color(14142664);
            break;
          case "glacier":
            w = b * 0.8 * (1 - Math.pow(g / l, 1.5));
            const D = oe(h * 20, y * 20, 0);
            D > 0.7 && (w -= b * 0.4 * (D - 0.7) * 3), N = new R.Color(14743546);
            break;
          case "ocean_ridge":
            const k = Math.abs(y);
            w = b * 0.8 * Math.exp(-k / (l * 0.2)), w += oe(h * 15, y * 5, 0) * b * 0.2, N = new R.Color(166097);
            break;
          case "trench":
            const T = Math.abs(y);
            T < l * 0.2 ? (w = -b * 1.5, w += oe(h * 20, y * 5, 0) * b * 0.1, N = new R.Color(87963)) : T < l * 0.4 && (w = -b * (1 - (T - l * 0.2) / (l * 0.2)), N = new R.Color(166097));
            break;
          default:
            w = b * oe(h * 5, y * 5, 0) * 0.8, N = new R.Color(10586239);
        }
      const A = (t.surfaceRoughness || 0.5) * f, M = 8 + A * 15, j = A * 0.4;
      w += oe(h * M, y * M, 0) * j, u.setZ(x, w), p[x * 3] = N.r, p[x * 3 + 1] = N.g, p[x * 3 + 2] = N.b;
    }
    u.needsUpdate = !0, a.computeVertexNormals(), a.setAttribute("color", new R.BufferAttribute(p, 3));
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
    return { geometry: a, material: v };
  }, [e, t, n]);
  return /* @__PURE__ */ o.jsx("div", { className: "w-full h-48 bg-black rounded-md overflow-hidden", children: /* @__PURE__ */ o.jsxs(Bo, { camera: { position: [0, 1.8, 2.2], fov: 45 }, children: [
    /* @__PURE__ */ o.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ o.jsx("pointLight", { position: [2, 3, 4], intensity: 1.2 }),
    /* @__PURE__ */ o.jsx("directionalLight", { position: [-2, 2, 1], intensity: 0.8, castShadow: !0 }),
    /* @__PURE__ */ o.jsx(
      "mesh",
      {
        ref: r,
        rotation: [-Math.PI / 4, 0, 0],
        geometry: s,
        material: i,
        receiveShadow: !0,
        castShadow: !0
      }
    ),
    /* @__PURE__ */ o.jsx(Vo, { enableZoom: !0, enablePan: !0, enableRotate: !0 }),
    /* @__PURE__ */ o.jsx("gridHelper", { args: [6, 10, "#444444", "#222222"], position: [0, -0.01, 0] })
  ] }) });
}
function up({ planetStats: e, setPlanetStats: t }) {
  var j, _, D;
  const r = dt(e.mass, e.radius), n = r === "gaseous", [s, i] = ye(r), [a, c] = ye({
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
  }), [l, d] = ye({
    id: "",
    type: "",
    description: "",
    duration: 5,
    intensity: 0.5
  }), [f, u] = ye(-1), [p, v] = ye(!1), x = Ce(() => e.landmarks ? e.landmarks.map((k) => {
    const T = n ? k.category === "gaseous" : k.category === "terrestrial";
    return {
      ...k,
      isActive: T
    };
  }) : [], [e.landmarks, n]);
  Xe(() => {
    if (s !== r && (i(r), c((k) => ({
      ...k,
      influence_type: n ? "storm" : "mountain",
      category: n ? "gaseous" : "terrestrial"
    })), f >= 0 && e.landmarks)) {
      const k = e.landmarks[f];
      k && ((n ? (k.category || "terrestrial") === "gaseous" : (k.category || "terrestrial") === "terrestrial") || (u(-1), v(!0)));
    }
  }, [r, s, f, e.landmarks, n]);
  const h = () => {
    if (!a.classification_id || !a.type) return;
    const k = {
      ...a,
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
  }, y = (k) => {
    if (!e.landmarks) return;
    const T = x[k], O = e.landmarks.findIndex(
      (z) => z.classification_id === T.classification_id
    );
    if (O === -1) return;
    const F = [...e.landmarks];
    F.splice(O, 1), t({ ...e, landmarks: F }), f === k ? u(-1) : f > k && u(f - 1);
  }, g = (k, T) => {
    c(k === "coordinates" ? { ...a, coordinates: { ...a.coordinates, ...T } } : { ...a, [k]: T });
  }, C = (k, T, O) => {
    if (!e.landmarks) return;
    const F = x[k], z = e.landmarks.findIndex(
      (H) => H.classification_id === F.classification_id
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
  }, b = () => {
    if (f === -1 || !l.type || !l.description || !e.landmarks) return;
    const k = x[f], T = e.landmarks.findIndex(
      (H) => H.classification_id === k.classification_id
    );
    if (T === -1) return;
    const O = [...e.landmarks], F = O[T], z = `EV-${Math.floor(Math.random() * 900 + 100)}`, P = { ...l, id: z };
    O[T] = {
      ...F,
      events: [...F.events || [], P]
    }, t({ ...e, landmarks: O }), d({
      id: "",
      type: "",
      description: "",
      duration: 5,
      intensity: 0.5
    });
  }, w = (k, T) => {
    if (!e.landmarks) return;
    const O = x[k], F = e.landmarks.findIndex(
      (S) => S.classification_id === O.classification_id
    );
    if (F === -1) return;
    const z = [...e.landmarks], P = z[F];
    if (!P.events) return;
    const H = [...P.events];
    H.splice(T, 1), z[F] = {
      ...P,
      events: H
    }, t({ ...e, landmarks: z });
  }, N = () => {
    const k = Math.random() * Math.PI * 2, T = Math.random() * Math.PI, O = Math.sin(T) * Math.cos(k), F = Math.sin(T) * Math.sin(k), z = Math.cos(T);
    c({
      ...a,
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
        x.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-center py-4 border border-dashed border-green-500/30 rounded-md", children: /* @__PURE__ */ o.jsx("p", { className: "text-green-500/70", children: "No landmarks registered" }) }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: x.map((k, T) => {
          var O;
          return /* @__PURE__ */ o.jsxs(
            "div",
            {
              className: `border ${f === T ? "border-green-400" : "border-green-500/30"} rounded-md p-3 space-y-2 ${k.isActive ? "" : "opacity-50"}`,
              onClick: () => u(T),
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
                          F.stopPropagation(), u(T);
                        },
                        className: "h-6 w-6 p-0 text-green-400 hover:text-green-300 hover:bg-transparent",
                        children: /* @__PURE__ */ o.jsx(Km, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ o.jsx(
                      de,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: (F) => {
                          F.stopPropagation(), y(T);
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
    f !== -1 && x[f] && /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
      /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(he, { className: "text-lg tracking-wide flex items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs("span", { children: [
          "LANDMARK DETAILS: ",
          x[f].classification_id
        ] }),
        !x[f].isActive && /* @__PURE__ */ o.jsxs("span", { className: "text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded", children: [
          "INACTIVE (",
          (j = x[f].category) == null ? void 0 : j.toUpperCase(),
          ")"
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(ge, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs(js, { defaultValue: "info", children: [
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
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded", children: x[f].type })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Visual Effect" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded", children: x[f].visual_effect || "None" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Coordinates" }),
            /* @__PURE__ */ o.jsxs("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded", children: [
              "X: ",
              x[f].coordinates.x.toFixed(2),
              ", Y:",
              " ",
              x[f].coordinates.y.toFixed(2),
              ", Z:",
              " ",
              x[f].coordinates.z.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Category" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-black/50 border border-green-500/30 rounded capitalize", children: x[f].category || (n ? "gaseous" : "terrestrial") })
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsx(Ke, { value: "events", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Event List" }),
            !x[f].events || ((_ = x[f].events) == null ? void 0 : _.length) === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-center py-4 border border-dashed border-green-500/30 rounded-md", children: /* @__PURE__ */ o.jsx("p", { className: "text-green-500/70", children: "No events registered for this landmark" }) }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-2", children: (D = x[f].events) == null ? void 0 : D.map((k, T) => /* @__PURE__ */ o.jsxs("div", { className: "border border-green-500/30 rounded-md p-2 text-xs", children: [
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
                      children: /* @__PURE__ */ o.jsx(Zm, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    de,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => w(f, T),
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
                    onChange: (k) => d({ ...l, type: k.target.value }),
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
                    onChange: (k) => d({ ...l, duration: Number.parseFloat(k.target.value) }),
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
                    onChange: (k) => d({ ...l, description: k.target.value }),
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
                    onChange: (k) => d({ ...l, intensity: Number.parseFloat(k.target.value) }),
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
                onClick: b,
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
          !x[f].isActive && /* @__PURE__ */ o.jsxs(yn, { variant: "default", className: "bg-amber-900/20 border-amber-500/50 text-amber-300", children: [
            /* @__PURE__ */ o.jsx(xn, { className: "h-4 w-4" }),
            /* @__PURE__ */ o.jsxs(bn, { children: [
              "This landmark is inactive because it's a ",
              x[f].category,
              " landmark on a ",
              n ? "gaseous" : "terrestrial",
              " planet. The terrain preview shows how it would appear on a ",
              x[f].category,
              " planet."
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(lp, { landmark: x[f], planetStats: e }),
          /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Influence Type" }),
              /* @__PURE__ */ o.jsxs(
                nt,
                {
                  value: x[f].influence_type || (n ? "storm" : "mountain"),
                  onValueChange: (k) => C(f, "influence_type", k),
                  children: [
                    /* @__PURE__ */ o.jsx(qe, { className: "bg-black border-green-500/30 text-green-400", children: /* @__PURE__ */ o.jsx(ot, { placeholder: "Select type" }) }),
                    /* @__PURE__ */ o.jsx(Ye, { className: "bg-black border-green-500/30 text-green-400", children: A(x[f].category).map((k) => /* @__PURE__ */ o.jsx(je, { value: k, children: M(k) }, k)) })
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
                  value: x[f].influence_radius || 0.5,
                  onChange: (k) => C(f, "influence_radius", Number.parseFloat(k.target.value)),
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
                  defaultValue: [Number(x[f].influence_strength || 0.7) * 100],
                  max: 100,
                  step: 1,
                  onValueChange: (k) => C(f, "influence_strength", k[0] / 100),
                  className: "text-green-400"
                }
              ),
              /* @__PURE__ */ o.jsx("div", { className: "text-xs text-green-500/70", children: (x[f].influence_strength || 0.7).toFixed(2) })
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
                value: a.classification_id,
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
                value: a.type,
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
              value: a.visual_effect,
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
              value: a.image_link,
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
                  value: a.coordinates.x,
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
                  value: a.coordinates.y,
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
                  value: a.coordinates.z,
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
                value: a.influence_radius || 0.5,
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
                value: a.influence_strength || 0.7,
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
              value: a.influence_type || (n ? "storm" : "mountain"),
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
const yi = m.forwardRef(
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
yi.displayName = "Textarea";
var Xr, Lo;
function dp() {
  if (Lo) return Xr;
  Lo = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, s = (g, C) => {
    for (var b in C)
      e(g, b, { get: C[b], enumerable: !0 });
  }, i = (g, C, b, w) => {
    if (C && typeof C == "object" || typeof C == "function")
      for (let N of r(C))
        !n.call(g, N) && N !== b && e(g, N, { get: () => C[N], enumerable: !(w = t(C, N)) || w.enumerable });
    return g;
  }, a = (g) => i(e({}, "__esModule", { value: !0 }), g), c = (g, C, b) => new Promise((w, N) => {
    var A = (_) => {
      try {
        j(b.next(_));
      } catch (D) {
        N(D);
      }
    }, M = (_) => {
      try {
        j(b.throw(_));
      } catch (D) {
        N(D);
      }
    }, j = (_) => _.done ? w(_.value) : Promise.resolve(_.value).then(A, M);
    j((b = b.apply(g, C)).next());
  }), l = {};
  s(l, {
    SessionContextProvider: () => p,
    useSession: () => h,
    useSessionContext: () => v,
    useSupabaseClient: () => x,
    useUser: () => y
  }), Xr = a(l);
  var d = Pe, f = $o(), u = (0, d.createContext)({
    isLoading: !0,
    session: null,
    error: null,
    supabaseClient: {}
  }), p = ({
    supabaseClient: g,
    initialSession: C = null,
    children: b
  }) => {
    const [w, N] = (0, d.useState)(C), [A, M] = (0, d.useState)(!C), [j, _] = (0, d.useState)();
    (0, d.useEffect)(() => {
      !w && C && N(C);
    }, [w, C]), (0, d.useEffect)(() => {
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
    }, []), (0, d.useEffect)(() => {
      const {
        data: { subscription: k }
      } = g.auth.onAuthStateChange((T, O) => {
        O && (T === "SIGNED_IN" || T === "TOKEN_REFRESHED" || T === "USER_UPDATED") && N(O), T === "SIGNED_OUT" && N(null);
      });
      return () => {
        k.unsubscribe();
      };
    }, []);
    const D = (0, d.useMemo)(() => A ? {
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
    return /* @__PURE__ */ (0, f.jsx)(u.Provider, { value: D, children: b });
  }, v = () => {
    const g = (0, d.useContext)(u);
    if (g === void 0)
      throw new Error("useSessionContext must be used within a SessionContextProvider.");
    return g;
  };
  function x() {
    const g = (0, d.useContext)(u);
    if (g === void 0)
      throw new Error("useSupabaseClient must be used within a SessionContextProvider.");
    return g.supabaseClient;
  }
  var h = () => {
    const g = (0, d.useContext)(u);
    if (g === void 0)
      throw new Error("useSession must be used within a SessionContextProvider.");
    return g.session;
  }, y = () => {
    var g, C;
    const b = (0, d.useContext)(u);
    if (b === void 0)
      throw new Error("useUser must be used within a SessionContextProvider.");
    return (C = (g = b.session) == null ? void 0 : g.user) != null ? C : null;
  };
  return Xr;
}
var wn = dp();
function fp({
  planetStats: e,
  setPlanetStats: t,
  classificationId: r,
  author: n,
  setSelectedBiome: s,
  setCustomColors: i
}) {
  const a = wn.useSupabaseClient();
  wn.useSession();
  const [c, l] = ye(""), d = async () => {
    const u = {};
    Object.entries(e).forEach(([C, b]) => {
      b != null && (typeof b == "number" ? u[C] = Number(b.toFixed(2)) : (typeof b == "boolean" || typeof b == "object" && Array.isArray(b), u[C] = b));
    });
    const p = Object.entries(u).map(
      ([C, b]) => typeof b == "object" ? `${C}: ${JSON.stringify(b)}` : `${C}: ${b}`
    ).join(`
`);
    l(p);
    const v = parseInt(r);
    if (isNaN(v)) return;
    const { data: x, error: h } = await a.from("classifications").select("classificationConfiguration").eq("id", v).single();
    if (h || !(x != null && x.classificationConfiguration)) {
      console.error("Failed to fetch existing configuration:", h);
      return;
    }
    const y = {
      ...x.classificationConfiguration,
      exportedValue: u
    }, { error: g } = await a.from("classifications").update({ classificationConfiguration: y }).eq("id", v);
    g && console.error("Failed to export config:", g);
  }, f = () => {
    try {
      const u = c.split(`
`).filter((x) => !x.trim().startsWith("//") && x.trim() !== ""), p = {};
      u.forEach((x) => {
        if (!x.trim()) return;
        const h = x.indexOf(":");
        if (h === -1) return;
        const y = x.substring(0, h).trim(), g = x.substring(h + 1).trim();
        let C;
        if (g === "true" || g === "false") C = g === "true";
        else if (g.startsWith("[") || g.startsWith("{"))
          try {
            C = JSON.parse(g);
          } catch {
            C = g;
          }
        else isNaN(Number(g)) ? C = g : C = Number(g);
        p[y] = C;
      });
      const v = Qr(p);
      t(v), v.biome && s(v.biome), v.customColors && i(v.customColors);
    } catch (u) {
      console.error("Error importing planet configuration:", u);
    }
  };
  return /* @__PURE__ */ o.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ o.jsxs(me, { className: "bg-black/60 border-green-500/30 text-green-400", children: [
    /* @__PURE__ */ o.jsx(pe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(he, { className: "text-lg tracking-wide", children: "DATA TRANSFER" }) }),
    /* @__PURE__ */ o.jsxs(ge, { className: "space-y-4", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-green-300", children: "Planet Configuration" }),
        /* @__PURE__ */ o.jsx(
          yi,
          {
            value: c,
            onChange: (u) => l(u.target.value),
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
            onClick: d,
            children: [
              /* @__PURE__ */ o.jsx(Um, { className: "h-4 w-4 mr-2" }),
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
            onClick: f,
            children: [
              /* @__PURE__ */ o.jsx(tp, { className: "h-4 w-4 mr-2" }),
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
            children: /* @__PURE__ */ o.jsx(Hm, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "text-xs text-green-500/70 mt-2", children: "You can import partial configurations (e.g., just mass and radius). Missing values will be filled with defaults." })
    ] })
  ] }) });
}
function mp({
  planetStats: e,
  setPlanetStats: t,
  classificationId: r = "UNCLASSIFIED",
  author: n = "UNKNOWN"
}) {
  var l, d, f, u;
  const [s, i] = ye(e.biome || "Rocky Highlands"), [a, c] = ye({
    oceanFloor: ((l = e.customColors) == null ? void 0 : l.oceanFloor) || "",
    beach: ((d = e.customColors) == null ? void 0 : d.beach) || "",
    regular: ((f = e.customColors) == null ? void 0 : f.regular) || "",
    mountain: ((u = e.customColors) == null ? void 0 : u.mountain) || ""
  });
  return /* @__PURE__ */ o.jsxs("div", { className: "absolute top-0 left-0 h-full w-96 bg-slate-800/90 text-blue-100 p-6 overflow-y-auto font-mono border-r border-slate-600/60", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "text-2xl font-bold mb-6 tracking-wider border-b border-slate-600/60 pb-2", children: "PLANET SETTINGS" }),
    /* @__PURE__ */ o.jsx("div", { className: "mb-6 p-3 bg-slate-700/60 border border-slate-600/60 rounded-md hidden", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
      /* @__PURE__ */ o.jsx("div", { className: "text-slate-400", children: "CLASSIFICATION:" }),
      /* @__PURE__ */ o.jsx("div", { children: r }),
      /* @__PURE__ */ o.jsx("div", { className: "text-slate-400", children: "AUTHOR:" }),
      /* @__PURE__ */ o.jsx("div", { children: n })
    ] }) }),
    /* @__PURE__ */ o.jsxs(js, { defaultValue: "physical", className: "space-y-6", children: [
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
        /* @__PURE__ */ o.jsx($u, { planetStats: e, setPlanetStats: t }),
        /* @__PURE__ */ o.jsx("div", { className: "mt-6", children: /* @__PURE__ */ o.jsx(
          fp,
          {
            planetStats: e,
            setPlanetStats: t,
            classificationId: r,
            author: n,
            setSelectedBiome: i,
            setCustomColors: c
          }
        ) })
      ] }),
      /* @__PURE__ */ o.jsx(Ke, { value: "surface", children: /* @__PURE__ */ o.jsx(op, { planetStats: e, setPlanetStats: t, selectedBiome: s }) }),
      /* @__PURE__ */ o.jsx(Ke, { value: "biome", children: /* @__PURE__ */ o.jsx(
        ap,
        {
          planetStats: e,
          setPlanetStats: t,
          selectedBiome: s,
          setSelectedBiome: i,
          customColors: a,
          setCustomColors: c
        }
      ) }),
      /* @__PURE__ */ o.jsx(Ke, { value: "landmarks", children: /* @__PURE__ */ o.jsx(up, { planetStats: e, setPlanetStats: t }) })
    ] })
  ] });
}
var Cn = ["Enter", " "], pp = ["ArrowDown", "PageUp", "Home"], bi = ["ArrowUp", "PageDown", "End"], hp = [...pp, ...bi], gp = {
  ltr: [...Cn, "ArrowRight"],
  rtl: [...Cn, "ArrowLeft"]
}, vp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, qt = "Menu", [$t, xp, yp] = br(qt), [ft, wi] = $e(qt, [
  yp,
  Sr,
  wr
]), _r = Sr(), Ci = wr(), [bp, mt] = ft(qt), [wp, Yt] = ft(qt), Ni = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: s, onOpenChange: i, modal: a = !0 } = e, c = _r(t), [l, d] = m.useState(null), f = m.useRef(!1), u = De(i), p = Ut(s);
  return m.useEffect(() => {
    const v = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ o.jsx(ba, { ...c, children: /* @__PURE__ */ o.jsx(
    bp,
    {
      scope: t,
      open: r,
      onOpenChange: u,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ o.jsx(
        wp,
        {
          scope: t,
          onClose: m.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: a,
          children: n
        }
      )
    }
  ) });
};
Ni.displayName = qt;
var Cp = "MenuAnchor", qn = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, s = _r(r);
    return /* @__PURE__ */ o.jsx(wa, { ...s, ...n, ref: t });
  }
);
qn.displayName = Cp;
var Yn = "MenuPortal", [Np, ki] = ft(Yn, {
  forceMount: void 0
}), Ei = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: s } = e, i = mt(Yn, t);
  return /* @__PURE__ */ o.jsx(Np, { scope: t, forceMount: r, children: /* @__PURE__ */ o.jsx(Nt, { present: r || i.open, children: /* @__PURE__ */ o.jsx(Wn, { asChild: !0, container: s, children: n }) }) });
};
Ei.displayName = Yn;
var ke = "MenuContent", [kp, Xn] = ft(ke), ji = m.forwardRef(
  (e, t) => {
    const r = ki(ke, e.__scopeMenu), { forceMount: n = r.forceMount, ...s } = e, i = mt(ke, e.__scopeMenu), a = Yt(ke, e.__scopeMenu);
    return /* @__PURE__ */ o.jsx($t.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(Nt, { present: n || i.open, children: /* @__PURE__ */ o.jsx($t.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ o.jsx(Ep, { ...s, ref: t }) : /* @__PURE__ */ o.jsx(jp, { ...s, ref: t }) }) }) });
  }
), Ep = m.forwardRef(
  (e, t) => {
    const r = mt(ke, e.__scopeMenu), n = m.useRef(null), s = ne(t, n);
    return m.useEffect(() => {
      const i = n.current;
      if (i) return ja(i);
    }, []), /* @__PURE__ */ o.jsx(
      Zn,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: W(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), jp = m.forwardRef((e, t) => {
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
}), Rp = /* @__PURE__ */ bt("MenuContent.ScrollLock"), Zn = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: s,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: u,
      onInteractOutside: p,
      onDismiss: v,
      disableOutsideScroll: x,
      ...h
    } = e, y = mt(ke, r), g = Yt(ke, r), C = _r(r), b = Ci(r), w = xp(r), [N, A] = m.useState(null), M = m.useRef(null), j = ne(t, M, y.onContentChange), _ = m.useRef(0), D = m.useRef(""), k = m.useRef(0), T = m.useRef(null), O = m.useRef("right"), F = m.useRef(0), z = x ? Un : m.Fragment, P = x ? { as: Rp, allowPinchZoom: !0 } : void 0, H = (I) => {
      var L, U;
      const E = D.current + I, B = w().filter((Z) => !Z.disabled), K = document.activeElement, q = (L = B.find((Z) => Z.ref.current === K)) == null ? void 0 : L.textValue, Q = B.map((Z) => Z.textValue), se = zp(Q, E, q), ae = (U = B.find((Z) => Z.textValue === se)) == null ? void 0 : U.ref.current;
      (function Z(J) {
        D.current = J, window.clearTimeout(_.current), J !== "" && (_.current = window.setTimeout(() => Z(""), 1e3));
      })(E), ae && setTimeout(() => ae.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), Js();
    const S = m.useCallback((I) => {
      var B, K;
      return O.current === ((B = T.current) == null ? void 0 : B.side) && Vp(I, (K = T.current) == null ? void 0 : K.area);
    }, []);
    return /* @__PURE__ */ o.jsx(
      kp,
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
            onMountAutoFocus: W(i, (I) => {
              var E;
              I.preventDefault(), (E = M.current) == null || E.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ o.jsx(
              _n,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: u,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ o.jsx(
                  Qo,
                  {
                    asChild: !0,
                    ...b,
                    dir: g.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: N,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: W(l, (I) => {
                      g.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ o.jsx(
                      Ca,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": $i(y.open),
                        "data-radix-menu-content": "",
                        dir: g.dir,
                        ...C,
                        ...h,
                        ref: j,
                        style: { outline: "none", ...h.style },
                        onKeyDown: W(h.onKeyDown, (I) => {
                          const B = I.target.closest("[data-radix-menu-content]") === I.currentTarget, K = I.ctrlKey || I.altKey || I.metaKey, q = I.key.length === 1;
                          B && (I.key === "Tab" && I.preventDefault(), !K && q && H(I.key));
                          const Q = M.current;
                          if (I.target !== Q || !hp.includes(I.key)) return;
                          I.preventDefault();
                          const ae = w().filter((L) => !L.disabled).map((L) => L.ref.current);
                          bi.includes(I.key) && ae.reverse(), Lp(ae);
                        }),
                        onBlur: W(e.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(_.current), D.current = "");
                        }),
                        onPointerMove: W(
                          e.onPointerMove,
                          Ht((I) => {
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
ji.displayName = ke;
var Sp = "MenuGroup", Jn = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { role: "group", ...n, ref: t });
  }
);
Jn.displayName = Sp;
var Tp = "MenuLabel", Ri = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { ...n, ref: t });
  }
);
Ri.displayName = Tp;
var vr = "MenuItem", Fo = "menu.itemSelect", Ir = m.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...s } = e, i = m.useRef(null), a = Yt(vr, e.__scopeMenu), c = Xn(vr, e.__scopeMenu), l = ne(t, i), d = m.useRef(!1), f = () => {
      const u = i.current;
      if (!r && u) {
        const p = new CustomEvent(Fo, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Fo, (v) => n == null ? void 0 : n(v), { once: !0 }), Ko(u, p), p.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ o.jsx(
      Si,
      {
        ...s,
        ref: l,
        disabled: r,
        onClick: W(e.onClick, f),
        onPointerDown: (u) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, u), d.current = !0;
        },
        onPointerUp: W(e.onPointerUp, (u) => {
          var p;
          d.current || (p = u.currentTarget) == null || p.click();
        }),
        onKeyDown: W(e.onKeyDown, (u) => {
          const p = c.searchRef.current !== "";
          r || p && u.key === " " || Cn.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
Ir.displayName = vr;
var Si = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: s, ...i } = e, a = Xn(vr, r), c = Ci(r), l = m.useRef(null), d = ne(t, l), [f, u] = m.useState(!1), [p, v] = m.useState("");
    return m.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ o.jsx(
      $t.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: s ?? p,
        children: /* @__PURE__ */ o.jsx(es, { asChild: !0, ...c, focusable: !n, children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...i,
            ref: d,
            onPointerMove: W(
              e.onPointerMove,
              Ht((x) => {
                n ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: W(
              e.onPointerLeave,
              Ht((x) => a.onItemLeave(x))
            ),
            onFocus: W(e.onFocus, () => u(!0)),
            onBlur: W(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Mp = "MenuCheckboxItem", Ti = m.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...s } = e;
    return /* @__PURE__ */ o.jsx(Ii, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ o.jsx(
      Ir,
      {
        role: "menuitemcheckbox",
        "aria-checked": xr(r) ? "mixed" : r,
        ...s,
        ref: t,
        "data-state": eo(r),
        onSelect: W(
          s.onSelect,
          () => n == null ? void 0 : n(xr(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ti.displayName = Mp;
var Mi = "MenuRadioGroup", [Ap, Pp] = ft(
  Mi,
  { value: void 0, onValueChange: () => {
  } }
), Ai = m.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...s } = e, i = De(n);
    return /* @__PURE__ */ o.jsx(Ap, { scope: e.__scopeMenu, value: r, onValueChange: i, children: /* @__PURE__ */ o.jsx(Jn, { ...s, ref: t }) });
  }
);
Ai.displayName = Mi;
var Pi = "MenuRadioItem", _i = m.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, s = Pp(Pi, e.__scopeMenu), i = r === s.value;
    return /* @__PURE__ */ o.jsx(Ii, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ o.jsx(
      Ir,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...n,
        ref: t,
        "data-state": eo(i),
        onSelect: W(
          n.onSelect,
          () => {
            var a;
            return (a = s.onValueChange) == null ? void 0 : a.call(s, r);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
_i.displayName = Pi;
var Qn = "MenuItemIndicator", [Ii, _p] = ft(
  Qn,
  { checked: !1 }
), Di = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...s } = e, i = _p(Qn, r);
    return /* @__PURE__ */ o.jsx(
      Nt,
      {
        present: n || xr(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ o.jsx(
          Y.span,
          {
            ...s,
            ref: t,
            "data-state": eo(i.checked)
          }
        )
      }
    );
  }
);
Di.displayName = Qn;
var Ip = "MenuSeparator", Oi = m.forwardRef(
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
Oi.displayName = Ip;
var Dp = "MenuArrow", Li = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, s = _r(r);
    return /* @__PURE__ */ o.jsx(Na, { ...s, ...n, ref: t });
  }
);
Li.displayName = Dp;
var Op = "MenuSub", [zh, Fi] = ft(Op), Lt = "MenuSubTrigger", zi = m.forwardRef(
  (e, t) => {
    const r = mt(Lt, e.__scopeMenu), n = Yt(Lt, e.__scopeMenu), s = Fi(Lt, e.__scopeMenu), i = Xn(Lt, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = i, d = { __scopeMenu: e.__scopeMenu }, f = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => f, [f]), m.useEffect(() => {
      const u = c.current;
      return () => {
        window.clearTimeout(u), l(null);
      };
    }, [c, l]), /* @__PURE__ */ o.jsx(qn, { asChild: !0, ...d, children: /* @__PURE__ */ o.jsx(
      Si,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": s.contentId,
        "data-state": $i(r.open),
        ...e,
        ref: kn(t, s.onTriggerChange),
        onClick: (u) => {
          var p;
          (p = e.onClick) == null || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: W(
          e.onPointerMove,
          Ht((u) => {
            i.onItemEnter(u), !u.defaultPrevented && !e.disabled && !r.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              r.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: W(
          e.onPointerLeave,
          Ht((u) => {
            var v, x;
            f();
            const p = (v = r.content) == null ? void 0 : v.getBoundingClientRect();
            if (p) {
              const h = (x = r.content) == null ? void 0 : x.dataset.side, y = h === "right", g = y ? -5 : 5, C = p[y ? "left" : "right"], b = p[y ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + g, y: u.clientY },
                  { x: C, y: p.top },
                  { x: b, y: p.top },
                  { x: b, y: p.bottom },
                  { x: C, y: p.bottom }
                ],
                side: h
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(u), u.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: W(e.onKeyDown, (u) => {
          var v;
          const p = i.searchRef.current !== "";
          e.disabled || p && u.key === " " || gp[n.dir].includes(u.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
zi.displayName = Lt;
var Bi = "MenuSubContent", Vi = m.forwardRef(
  (e, t) => {
    const r = ki(ke, e.__scopeMenu), { forceMount: n = r.forceMount, ...s } = e, i = mt(ke, e.__scopeMenu), a = Yt(ke, e.__scopeMenu), c = Fi(Bi, e.__scopeMenu), l = m.useRef(null), d = ne(t, l);
    return /* @__PURE__ */ o.jsx($t.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(Nt, { present: n || i.open, children: /* @__PURE__ */ o.jsx($t.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(
      Zn,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...s,
        ref: d,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var u;
          a.isUsingKeyboardRef.current && ((u = l.current) == null || u.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: W(e.onFocusOutside, (f) => {
          f.target !== c.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: W(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: W(e.onKeyDown, (f) => {
          var v;
          const u = f.currentTarget.contains(f.target), p = vp[a.dir].includes(f.key);
          u && p && (i.onOpenChange(!1), (v = c.trigger) == null || v.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Vi.displayName = Bi;
function $i(e) {
  return e ? "open" : "closed";
}
function xr(e) {
  return e === "indeterminate";
}
function eo(e) {
  return xr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Lp(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function Fp(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function zp(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = r ? e.indexOf(r) : -1;
  let a = Fp(e, Math.max(i, 0));
  s.length === 1 && (a = a.filter((d) => d !== r));
  const l = a.find(
    (d) => d.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function Bp(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i], l = t[a], d = c.x, f = c.y, u = l.x, p = l.y;
    f > n != p > n && r < (u - d) * (n - f) / (p - f) + d && (s = !s);
  }
  return s;
}
function Vp(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return Bp(r, t);
}
function Ht(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var $p = Ni, Hp = qn, Wp = Ei, Up = ji, Gp = Jn, Kp = Ri, qp = Ir, Yp = Ti, Xp = Ai, Zp = _i, Jp = Di, Qp = Oi, eh = Li, th = zi, rh = Vi, Dr = "DropdownMenu", [nh, Bh] = $e(
  Dr,
  [wi]
), xe = wi(), [oh, Hi] = nh(Dr), Wi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: s,
    defaultOpen: i,
    onOpenChange: a,
    modal: c = !0
  } = e, l = xe(t), d = m.useRef(null), [f, u] = it({
    prop: s,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Dr
  });
  return /* @__PURE__ */ o.jsx(
    oh,
    {
      scope: t,
      triggerId: at(),
      triggerRef: d,
      contentId: at(),
      open: f,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((p) => !p), [u]),
      modal: c,
      children: /* @__PURE__ */ o.jsx($p, { ...l, open: f, onOpenChange: u, dir: n, modal: c, children: r })
    }
  );
};
Wi.displayName = Dr;
var Ui = "DropdownMenuTrigger", Gi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...s } = e, i = Hi(Ui, r), a = xe(r);
    return /* @__PURE__ */ o.jsx(Hp, { asChild: !0, ...a, children: /* @__PURE__ */ o.jsx(
      Y.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": n ? "" : void 0,
        disabled: n,
        ...s,
        ref: kn(t, i.triggerRef),
        onPointerDown: W(e.onPointerDown, (c) => {
          !n && c.button === 0 && c.ctrlKey === !1 && (i.onOpenToggle(), i.open || c.preventDefault());
        }),
        onKeyDown: W(e.onKeyDown, (c) => {
          n || (["Enter", " "].includes(c.key) && i.onOpenToggle(), c.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Gi.displayName = Ui;
var sh = "DropdownMenuPortal", Ki = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = xe(t);
  return /* @__PURE__ */ o.jsx(Wp, { ...n, ...r });
};
Ki.displayName = sh;
var qi = "DropdownMenuContent", Yi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = Hi(qi, r), i = xe(r), a = m.useRef(!1);
    return /* @__PURE__ */ o.jsx(
      Up,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...n,
        ref: t,
        onCloseAutoFocus: W(e.onCloseAutoFocus, (c) => {
          var l;
          a.current || (l = s.triggerRef.current) == null || l.focus(), a.current = !1, c.preventDefault();
        }),
        onInteractOutside: W(e.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || d;
          (!s.modal || f) && (a.current = !0);
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
Yi.displayName = qi;
var ah = "DropdownMenuGroup", ih = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(Gp, { ...s, ...n, ref: t });
  }
);
ih.displayName = ah;
var ch = "DropdownMenuLabel", Xi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(Kp, { ...s, ...n, ref: t });
  }
);
Xi.displayName = ch;
var lh = "DropdownMenuItem", Zi = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(qp, { ...s, ...n, ref: t });
  }
);
Zi.displayName = lh;
var uh = "DropdownMenuCheckboxItem", Ji = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Yp, { ...s, ...n, ref: t });
});
Ji.displayName = uh;
var dh = "DropdownMenuRadioGroup", fh = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Xp, { ...s, ...n, ref: t });
});
fh.displayName = dh;
var mh = "DropdownMenuRadioItem", Qi = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Zp, { ...s, ...n, ref: t });
});
Qi.displayName = mh;
var ph = "DropdownMenuItemIndicator", ec = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Jp, { ...s, ...n, ref: t });
});
ec.displayName = ph;
var hh = "DropdownMenuSeparator", tc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(Qp, { ...s, ...n, ref: t });
});
tc.displayName = hh;
var gh = "DropdownMenuArrow", vh = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
    return /* @__PURE__ */ o.jsx(eh, { ...s, ...n, ref: t });
  }
);
vh.displayName = gh;
var xh = "DropdownMenuSubTrigger", rc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(th, { ...s, ...n, ref: t });
});
rc.displayName = xh;
var yh = "DropdownMenuSubContent", nc = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = xe(r);
  return /* @__PURE__ */ o.jsx(
    rh,
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
nc.displayName = yh;
var bh = Wi, wh = Gi, Ch = Ki, oc = Yi, sc = Xi, ac = Zi, ic = Ji, cc = Qi, lc = ec, uc = tc, dc = rc, fc = nc;
const Nh = bh, kh = wh, Eh = m.forwardRef(({ className: e, inset: t, children: r, ...n }, s) => /* @__PURE__ */ o.jsxs(
  dc,
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
      /* @__PURE__ */ o.jsx(Im, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Eh.displayName = dc.displayName;
const jh = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  fc,
  {
    ref: r,
    className: ee(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
jh.displayName = fc.displayName;
const mc = m.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ o.jsx(Ch, { children: /* @__PURE__ */ o.jsx(
  oc,
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
mc.displayName = oc.displayName;
const Ft = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  ac,
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
Ft.displayName = ac.displayName;
const Rh = m.forwardRef(({ className: e, children: t, checked: r, ...n }, s) => /* @__PURE__ */ o.jsxs(
  ic,
  {
    ref: s,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(lc, { children: /* @__PURE__ */ o.jsx(gi, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Rh.displayName = ic.displayName;
const Sh = m.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  cc,
  {
    ref: n,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(lc, { children: /* @__PURE__ */ o.jsx(zm, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Sh.displayName = cc.displayName;
const Th = m.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  sc,
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
Th.displayName = sc.displayName;
const Mh = m.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  uc,
  {
    ref: r,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Mh.displayName = uc.displayName;
function Vh({
  classificationId: e = "UNCLASSIFIED",
  author: t = "UNKNOWN",
  type: r,
  biome: n,
  planetConfiguration: s,
  classificationConfig: i,
  content: a
}) {
  const c = wn.useSupabaseClient(), [l, d] = ye(!1), [f, u] = ye("detailed"), [p, v] = ye(() => {
    const h = s ? Qr(s) : {
      ...Jr,
      ...n ? { biome: n } : {},
      ...r ? { type: r } : {}
    };
    return (!h.landmarks || h.landmarks.length === 0) && (h.landmarks = Or()), h;
  });
  Xe(() => {
    const h = s ? Qr(s) : {
      ...Jr,
      ...n ? { biome: n } : {},
      ...r ? { type: r } : {}
    };
    if (!h.landmarks || h.landmarks.length === 0)
      h.landmarks = Or();
    else {
      const y = h.landmarks.some((C) => C.category === "terrestrial"), g = h.landmarks.some((C) => C.category === "gaseous");
      if (!y || !g) {
        const C = Or();
        if (!y) {
          const b = C.find((w) => w.category === "terrestrial");
          b && h.landmarks.push(b);
        }
        if (!g) {
          const b = C.find((w) => w.category === "gaseous");
          b && h.landmarks.push(b);
        }
      }
    }
    v(h);
  }, [s, n, r]), Xe(() => {
    (async () => {
      var w;
      const y = Number.parseInt(e);
      if (isNaN(y)) return;
      const { data: g, error: C } = await c.from("classifications").select("classificationConfiguration").eq("id", y).single();
      if (C || !((w = g == null ? void 0 : g.classificationConfiguration) != null && w.exportedValue)) return;
      const { exportedValue: b } = g.classificationConfiguration;
      v((N) => ({
        ...N,
        ...b.mass && { mass: b.mass },
        ...b.radius && { radius: b.radius }
      }));
    })();
  }, [e, c]), Xe(() => {
    v((h) => ({
      ...h,
      density: _c(h.mass, h.radius)
    }));
  }, [p.mass, p.radius]);
  const x = () => {
    switch (f) {
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
    /* @__PURE__ */ o.jsxs(Bo, { camera: { position: [0, 0, 10], fov: 45 }, children: [
      /* @__PURE__ */ o.jsx("ambientLight", { intensity: 0.4 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [10, 10, 10], intensity: 2 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [-10, -10, -10], intensity: 0.5, color: "#b0c4de" }),
      /* @__PURE__ */ o.jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5, castShadow: !0 }),
      /* @__PURE__ */ o.jsx(gc, { preset: "sunset" }),
      f === "detailed" && /* @__PURE__ */ o.jsx(Pc, { planetStats: p }),
      f === "stylized" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Bc, { planetStats: p }),
        /* @__PURE__ */ o.jsx(Vc, { planetStats: p })
      ] }),
      f === "simple" && /* @__PURE__ */ o.jsx(Lc, { planetStats: p }),
      f === "standard" && /* @__PURE__ */ o.jsx(ol, { planetStats: p }),
      /* @__PURE__ */ o.jsx(vc, { radius: 100, depth: 50, count: 5e3, factor: 4, saturation: 0, fade: !0, speed: 1 }),
      /* @__PURE__ */ o.jsx(Vo, { enableZoom: !0, enablePan: !0, enableRotate: !0 }),
      /* @__PURE__ */ o.jsxs("mesh", { position: [0, 0, -15], children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [5, 32, 32] }),
        /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: "#4060ff", transparent: !0, opacity: 0.03 })
      ] })
    ] }, f),
    /* @__PURE__ */ o.jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [
      /* @__PURE__ */ o.jsxs(Nh, { children: [
        /* @__PURE__ */ o.jsx(kh, { asChild: !0, children: /* @__PURE__ */ o.jsxs(de, { variant: "outline", size: "sm", className: "bg-black/50 hover:bg-black/70 text-white", children: [
          x(),
          /* @__PURE__ */ o.jsx(Kn, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ o.jsxs(mc, { className: "bg-black/80 border-slate-700 text-white", children: [
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: f === "detailed" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => u("detailed"),
              children: "Detailed View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: f === "stylized" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => u("stylized"),
              children: "Stylized View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: f === "simple" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => u("simple"),
              children: "Simple View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Ft,
            {
              className: f === "standard" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => u("standard"),
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
          onClick: () => d(!l),
          children: /* @__PURE__ */ o.jsx(Vm, { className: "h-4 w-4" })
        }
      )
    ] }),
    l && /* @__PURE__ */ o.jsx(
      mp,
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
  Vh as PlanetGenerator
};
