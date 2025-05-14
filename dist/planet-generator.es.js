import * as h from "react";
import Te, { useRef as fe, useState as de, useMemo as ae, useEffect as _e, forwardRef as Nt, useLayoutEffect as wc, createElement as Qr } from "react";
import { useThree as Vo, useFrame as jt, Canvas as $o } from "@react-three/fiber";
import { Html as kn, Sphere as nt, OrbitControls as Ho, Environment as Cc, Stars as Nc } from "@react-three/drei";
import * as k from "three";
import * as Cr from "react-dom";
import jc from "react-dom";
var Zt = { exports: {} }, Dt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function kc() {
  if (ro) return Dt;
  ro = 1;
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
  return Dt.Fragment = t, Dt.jsx = r, Dt.jsxs = r, Dt;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Ec() {
  return no || (no = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === P ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case p:
          return "Fragment";
        case x:
          return "Profiler";
        case g:
          return "StrictMode";
        case j:
          return "Suspense";
        case A:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case b:
            return "Portal";
          case w:
            return (E.displayName || "Context") + ".Provider";
          case y:
            return (E._context.displayName || "Context") + ".Consumer";
          case C:
            var z = E.render;
            return E = E.displayName, E || (E = z.displayName || z.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case R:
            return z = E.displayName || null, z !== null ? z : e(E.type) || "Memo";
          case S:
            z = E._payload, E = E._init;
            try {
              return e(E(z));
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
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var K = z.error, q = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return K.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          q
        ), t(E);
      }
    }
    function n(E) {
      if (E === p) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === S)
        return "<...>";
      try {
        var z = e(E);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var E = N.A;
      return E === null ? null : E.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (T.call(E, "key")) {
        var z = Object.getOwnPropertyDescriptor(E, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function c(E, z) {
      function K() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      K.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: K,
        configurable: !0
      });
    }
    function l() {
      var E = e(this.type);
      return _[E] || (_[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function u(E, z, K, q, Q, se, ie, L) {
      return K = se.ref, E = {
        $$typeof: v,
        type: E,
        key: z,
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
        value: ie
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function m(E, z, K, q, Q, se, ie, L) {
      var W = z.children;
      if (W !== void 0)
        if (q)
          if (D(W)) {
            for (q = 0; q < W.length; q++)
              f(W[q]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(W);
      if (T.call(z, "key")) {
        W = e(E);
        var Z = Object.keys(z).filter(function(te) {
          return te !== "key";
        });
        q = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", I[W + q] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          q,
          W,
          Z,
          W
        ), I[W + q] = !0);
      }
      if (W = null, K !== void 0 && (r(K), W = "" + K), i(z) && (r(z.key), W = "" + z.key), "key" in z) {
        K = {};
        for (var J in z)
          J !== "key" && (K[J] = z[J]);
      } else K = z;
      return W && c(
        K,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), u(
        E,
        W,
        se,
        Q,
        s(),
        K,
        ie,
        L
      );
    }
    function f(E) {
      typeof E == "object" && E !== null && E.$$typeof === v && E._store && (E._store.validated = 1);
    }
    var d = Te, v = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), w = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), N = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, D = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var $, _ = {}, U = d["react-stack-bottom-frame"].bind(
      d,
      a
    )(), M = F(n(a)), I = {};
    Ot.Fragment = p, Ot.jsx = function(E, z, K, q, Q) {
      var se = 1e4 > N.recentlyCreatedOwnerStacks++;
      return m(
        E,
        z,
        K,
        !1,
        q,
        Q,
        se ? Error("react-stack-top-frame") : U,
        se ? F(n(E)) : M
      );
    }, Ot.jsxs = function(E, z, K, q, Q) {
      var se = 1e4 > N.recentlyCreatedOwnerStacks++;
      return m(
        E,
        z,
        K,
        !0,
        q,
        Q,
        se ? Error("react-stack-top-frame") : U,
        se ? F(n(E)) : M
      );
    };
  }()), Ot;
}
var oo;
function Uo() {
  return oo || (oo = 1, process.env.NODE_ENV === "production" ? Zt.exports = kc() : Zt.exports = Ec()), Zt.exports;
}
var o = Uo();
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
function Sc(e, t) {
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
function Mc() {
  return Object.keys(ir);
}
const Rc = {
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
}, Tc = {
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
  const r = Tc[t] || { r: 0, g: 0, b: 0 }, n = Ac(e);
  return n.r = Math.max(0, Math.min(1, n.r + r.r)), n.g = Math.max(0, Math.min(1, n.g + r.g)), n.b = Math.max(0, Math.min(1, n.b + r.b)), Pc(Math.floor(n.r * 255), Math.floor(n.g * 255), Math.floor(n.b * 255));
}
function Ac(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: Number.parseInt(t[1], 16) / 255,
    g: Number.parseInt(t[2], 16) / 255,
    b: Number.parseInt(t[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}
function Pc(e, t, r) {
  return "#" + ((1 << 24) + (e << 16) + (t << 8) + r).toString(16).slice(1);
}
function bt(e) {
  return Rc[e] || {
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
const _c = `
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
`, Ic = `
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
`, Go = `
  varying vec3 vNormal;
  varying vec2 vUv;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, Wo = `
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
`, Dc = `
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
`, Oc = `
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
function Ko({ pointInfo: e, planetStats: t }) {
  const r = (n) => n.toFixed(3);
  return /* @__PURE__ */ o.jsx(kn, { position: [0, 0, 0], style: { position: "absolute", right: "20px", bottom: "20px", pointerEvents: "none" }, children: /* @__PURE__ */ o.jsxs("div", { className: "w-64 bg-black/90 text-green-400 p-4 font-mono text-xs border border-green-500/30 rounded-md", children: [
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
function Lc({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = fe(null), [s, a] = de(null), { raycaster: i, camera: c, gl: l } = Vo(), { planetMaterial: u, atmosphereMaterial: m, cloudsMaterial: f } = ae(() => {
    const x = e.customColors || bt(e.biome || "Rocky Highlands"), y = new k.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        oceanColor: { value: new k.Color(x.oceanFloor || "#1E4D6B") },
        beachColor: { value: new k.Color(x.beach || "#8D6E63") },
        landColor: { value: new k.Color(x.regular || "#A1887F") },
        mountainColor: { value: new k.Color(x.mountain || "#D7CCC8") },
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
      vertexShader: _c,
      fragmentShader: Ic
    }), w = new k.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new k.Color(8900331) },
        strength: { value: e.atmosphereStrength || 0.8 }
      },
      vertexShader: Go,
      fragmentShader: Wo,
      transparent: !0,
      side: k.DoubleSide,
      depthWrite: !1
    }), C = new k.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        cloudCount: { value: e.cloudCount || 30 }
      },
      vertexShader: Dc,
      fragmentShader: Oc,
      transparent: !0,
      depthWrite: !1
    });
    return {
      planetMaterial: y,
      atmosphereMaterial: w,
      cloudsMaterial: C
    };
  }, [e]);
  _e(() => {
    try {
      if (!u || !u.uniforms) {
        console.warn("Planet material or uniforms not available");
        return;
      }
      if (!e.landmarks || !Array.isArray(e.landmarks) || e.landmarks.length === 0) {
        u.uniforms.landmarkCount.value = 0, u.uniforms.landmarkPositions.value = new Float32Array(30), u.uniforms.landmarkInfluences.value = new Float32Array(40);
        return;
      }
      const x = e.landmarks.slice(0, 10), y = [], w = [];
      for (let C = 0; C < x.length; C++) {
        const j = x[C];
        if (!j || !j.coordinates) {
          console.warn("Invalid landmark found:", j);
          continue;
        }
        const A = typeof j.coordinates.x == "number" ? j.coordinates.x : 0, R = typeof j.coordinates.y == "number" ? j.coordinates.y : 0, S = typeof j.coordinates.z == "number" ? j.coordinates.z : 0, O = new k.Vector3(A, R, S).normalize();
        y.push(O.x, O.y, O.z);
        let P = 1;
        switch (j.influence_type) {
          case "crater":
            P = 0;
            break;
          case "mountain":
            P = 1;
            break;
          case "valley":
            P = 2;
            break;
          case "volcano":
            P = 3;
            break;
          case "glacier":
            P = 4;
            break;
          case "basin":
            P = 5;
            break;
          default:
            P = 6;
        }
        w.push(
          typeof j.influence_radius == "number" ? j.influence_radius : 0.5,
          typeof j.influence_strength == "number" ? j.influence_strength : 0.7,
          typeof j.influence_roughness == "number" ? j.influence_roughness : 0.5,
          P
        );
      }
      u.uniforms.landmarkPositions.value = new Float32Array(y), u.uniforms.landmarkInfluences.value = new Float32Array(w), u.uniforms.landmarkCount.value = y.length / 3;
    } catch (x) {
      console.error("Error processing landmarks:", x), u && u.uniforms && (u.uniforms.landmarkCount.value = 0, u.uniforms.landmarkPositions.value = new Float32Array(30), u.uniforms.landmarkInfluences.value = new Float32Array(40));
    }
  }, [e.landmarks, u]);
  const d = (x) => {
    if (x.stopPropagation(), !t.current) return;
    const y = new k.Vector2(
      x.clientX / l.domElement.clientWidth * 2 - 1,
      -(x.clientY / l.domElement.clientHeight) * 2 + 1
    );
    i.setFromCamera(y, c);
    const w = i.intersectObject(t.current);
    if (w.length > 0) {
      const C = w[0].point, j = C.clone().normalize(), A = u.uniforms.surfaceRoughness.value * u.uniforms.mountainHeight.value * 0.08 * Math.sin(C.x * 10 + C.y * 10 + C.z * 10), R = u.uniforms.waterLevel.value;
      let S = "Mountain";
      A < -0.05 ? S = "Ocean Floor" : A < R ? S = "Beach" : A < R + 0.1 && (S = "Lowland");
      const O = e.temperature, P = A * 10, N = O - P, D = N - 273;
      a({
        position: C,
        normalizedPosition: j,
        height: A,
        terrainType: S,
        temperature: N,
        relativeToWaterTemp: D
      });
    }
  };
  jt((x) => {
    t.current && (t.current.rotation.y += 1e-3, u.uniforms.time.value = x.clock.elapsedTime), r.current && (r.current.rotation.y += 5e-4, m.uniforms.time.value = x.clock.elapsedTime), n.current && (n.current.rotation.y += 12e-4, f.uniforms.time.value = x.clock.elapsedTime);
  });
  const b = !(e.mass > 7 || e.radius > 2.5) && e.cloudCount && e.cloudCount > 0, p = (x, y) => x > 7 || y > 2.5 ? "gaseous" : "terrestrial", g = ae(() => {
    try {
      if (!e.landmarks || !Array.isArray(e.landmarks) || e.landmarks.length === 0)
        return null;
      const y = p(e.mass, e.radius) === "gaseous";
      return e.landmarks.filter((C) => {
        if (!C) return !1;
        if (!C.category) {
          const j = ["storm", "vortex", "band", "spot", "turbulent", "cyclone", "anticyclone", "zonal_flow"];
          return y ? j.includes(C.influence_type || "") : !j.includes(C.influence_type || "");
        }
        return y ? C.category === "gaseous" : C.category === "terrestrial";
      }).map((C, j) => {
        if (!C || !C.coordinates) return null;
        const A = typeof C.coordinates.x == "number" ? C.coordinates.x : 0, R = typeof C.coordinates.y == "number" ? C.coordinates.y : 0, S = typeof C.coordinates.z == "number" ? C.coordinates.z : 0, O = new k.Vector3(A, R, S).normalize().multiplyScalar(e.radius * 1.02);
        let P = "#22c55e";
        C.type && typeof C.type == "string" && (C.type.includes("Volcano") || C.type.includes("Storm") ? P = "#ef4444" : C.type.includes("Ocean") || C.type.includes("Water") ? P = "#3b82f6" : C.type.includes("Ice") || C.type.includes("Frozen") ? P = "#a5f3fc" : (C.type.includes("Sand") || C.type.includes("Desert")) && (P = "#fcd34d"));
        const N = C.visual_effect && C.visual_effect !== "None";
        return /* @__PURE__ */ o.jsxs("group", { position: [O.x, O.y, O.z], children: [
          /* @__PURE__ */ o.jsxs("mesh", { children: [
            /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.03, 16, 16] }),
            /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: P })
          ] }),
          N && /* @__PURE__ */ o.jsxs("mesh", { children: [
            /* @__PURE__ */ o.jsx("sphereGeometry", { args: [0.05, 16, 16] }),
            /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: P, transparent: !0, opacity: 0.3, depthWrite: !1 })
          ] }),
          /* @__PURE__ */ o.jsx(kn, { position: [0, 0.1, 0], center: !0, distanceFactor: 10, occlude: !0, children: /* @__PURE__ */ o.jsx("div", { className: "bg-black/80 text-green-400 px-2 py-1 text-xs font-mono rounded border border-green-500/50 whitespace-nowrap", children: C.classification_id || "LM-???" }) })
        ] }, j);
      }).filter(Boolean);
    } catch (x) {
      return console.error("Error rendering landmark markers:", x), null;
    }
  }, [e.landmarks, e.radius, e.mass]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("group", { onClick: d, children: [
      /* @__PURE__ */ o.jsx(nt, { ref: t, args: [1, 256, 256], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: u, attach: "material" }) }),
      /* @__PURE__ */ o.jsx(nt, { ref: r, args: [1.1, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: m, attach: "material" }) }),
      b && /* Increased clouds resolution */
      /* @__PURE__ */ o.jsx(nt, { ref: n, args: [1.02, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: f, attach: "material" }) }),
      g
    ] }),
    s && /* @__PURE__ */ o.jsx(Ko, { pointInfo: s, planetStats: e })
  ] });
}
const en = {
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
  landmarks: [],
  type: ""
};
function Fc(e, t) {
  return e / Math.pow(t, 3) * 5.51;
}
function dt(e, t) {
  return e > 7 || t > 2.5 ? "gaseous" : "terrestrial";
}
function qo(e) {
  return e >= 273 && e <= 373 ? { type: "water", color: "#1E4D6B" } : e >= 91 && e <= 112 ? { type: "methane", color: "#7FB3D5" } : e >= 63 && e <= 77 ? { type: "nitrogen", color: "#90EE90" } : e >= 195 && e <= 240 ? { type: "ammonia", color: "#D8BFD8" } : e >= 90 && e <= 184 ? { type: "ethane", color: "#FFD700" } : { type: "none", color: "#8B4513" };
}
function Yo(e, t) {
  const n = {
    water: [273, 373],
    methane: [91, 112],
    nitrogen: [63, 77],
    ammonia: [195, 240],
    ethane: [90, 184]
  }[t];
  return n ? e >= n[0] && e <= n[1] : !1;
}
var Re = /* @__PURE__ */ ((e) => (e[e.OceanFloor = 0] = "OceanFloor", e[e.Beach = 1] = "Beach", e[e.Regular = 2] = "Regular", e[e.Mountain = 3] = "Mountain", e))(Re || {});
function zc(e) {
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
function Bc(e, t) {
  const r = (e + 0.15) / 0.3;
  return r < t - 0.2 ? 0 : r < t ? 1 : r < t + 0.4 ? 2 : 3;
}
function tn(e) {
  return { ...en, ...e };
}
function so(e) {
  return [];
}
function Vc(e, t, r) {
  return 0;
}
function ao(e, t, r) {
  let n = 0, s = 0;
  if (t && Array.isArray(t))
    for (let a = 0; a < t.length; a++) {
      const i = t[a];
      if (!i || !i.influence_radius || !i.influence_strength || !i.coordinates)
        continue;
      const c = typeof i.coordinates.x == "number" ? i.coordinates.x : 0, l = typeof i.coordinates.y == "number" ? i.coordinates.y : 0, u = typeof i.coordinates.z == "number" ? i.coordinates.z : 0, m = new k.Vector3(c, l, u).normalize().multiplyScalar(r), f = e.distanceTo(m), d = i.influence_radius * r;
      if (f < d) {
        const v = f / d, b = i.influence_strength * (1 - v);
        let p = 0;
        switch (i.influence_type) {
          case "crater":
            p = -b * 0.05;
            break;
          case "mountain":
            p = b * 0.08;
            break;
          case "valley":
            p = -b * 0.03;
            break;
          case "volcano":
            p = b * 0.1;
            break;
          case "basin":
            p = -b * 0.04;
            break;
          case "dune":
            p = b * 0.02 * Math.sin(f * 5);
            break;
          case "glacier":
            p = b * 0.06;
            break;
          case "storm":
          case "vortex":
          case "band":
          case "spot":
            p = b * 0.03;
            break;
          default:
            p = b * 0.05;
        }
        let g = 0;
        i.influence_type === "volcano" ? g = b * 0.2 : i.influence_type === "glacier" && (g = -b * 0.1), n += p, s += g;
      }
    }
  return {
    height: n,
    roughness: s
  };
}
function $c({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = dt(e.mass, e.radius), s = ae(() => {
    const a = e.customColors || bt(e.biome || "Rocky Highlands"), i = new k.Color(a.regular || "#A1887F"), c = new k.MeshStandardMaterial({
      color: i,
      roughness: 0.7,
      metalness: 0.1
    }), l = n === "terrestrial" ? new k.Color(8900331) : new k.Color(16777215), u = n === "terrestrial" ? e.atmosphereStrength ? e.atmosphereStrength * 0.4 : 0.25 : 0.15, m = new k.MeshPhongMaterial({
      color: l,
      transparent: !0,
      opacity: u,
      side: k.DoubleSide,
      depthWrite: !1
    });
    return { planetMaterial: c, atmosphereMaterial: m };
  }, [e, n]);
  return jt(() => {
    t.current && (t.current.rotation.y += 1e-3), r.current && (r.current.rotation.y += 5e-4);
  }), /* @__PURE__ */ o.jsxs("group", { children: [
    /* @__PURE__ */ o.jsx(nt, { ref: t, args: [1, 64, 64], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.planetMaterial, attach: "material" }) }),
    /* @__PURE__ */ o.jsx(nt, { ref: r, args: [1.1, 32, 32], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: s.atmosphereMaterial, attach: "material" }) })
  ] });
}
const Hc = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`, Uc = `
  uniform float time;
  uniform vec3 oceanColor;
  uniform vec3 beachColor;
  uniform vec3 landColor;
  uniform vec3 mountainColor;
  uniform float waterLevel;
  uniform float surfaceRoughness;
  uniform float mountainHeight;
  uniform float isGaseous;
  uniform int soilType;
  uniform int soilTexture;
  uniform float liquidEnabled;
  uniform vec3 landmarkPositions[10];
  uniform vec4 landmarkInfluences[10];
  uniform int landmarkCount;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    // First corner
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    // Permutations
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    float n_ = 0.142857142857; // 1.0/7.0
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
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
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  // FBM (Fractal Brownian Motion) for more complex noise
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 8; i++) {
      if (i >= octaves) break;
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }
  
  // Update the calculateTerrainHeight function to be more conservative with landmark influences
  // Calculate terrain height with landmarks influence
  float calculateTerrainHeight(vec3 position) {
    // Base terrain noise
    float noise1 = fbm(position * 2.0 + vec3(time * 0.01, 0.0, 0.0), 4) * surfaceRoughness;
    float noise2 = fbm(position * 5.0 + vec3(0.0, time * 0.01, 0.0), 2) * surfaceRoughness * 0.5;
    float baseHeight = noise1 + noise2;
    
    // Apply landmarks influence
    for (int i = 0; i < 10; i++) {
      if (i >= landmarkCount) break;
      
      vec3 landmarkPos = landmarkPositions[i];
      float radius = landmarkInfluences[i].x;
      float strength = landmarkInfluences[i].y;
      float roughness = landmarkInfluences[i].z;
      float type = landmarkInfluences[i].w;
      
      // Calculate distance to landmark
      float dotProduct = dot(normalize(position), landmarkPos);
      float angularDistance = acos(clamp(dotProduct, -1.0, 1.0));
      
      // Apply influence based on distance - use a smoother falloff
      if (angularDistance < radius) {
        // Use a smoother falloff curve to prevent sharp edges
        float falloff = smoothstep(radius, 0.0, angularDistance);
        float influence = strength * falloff * 0.5; // Reduce overall influence by half
        
        // Different effects based on landmark type - with more conservative values
        if (type < 0.5) {
          // Crater
          baseHeight -= influence * 0.3;
        } else if (type < 1.5) {
          // Mountain
          baseHeight += influence * 0.4;
        } else if (type < 2.5) {
          // Valley
          baseHeight -= influence * 0.3;
        } else if (type < 3.5) {
          // Volcano
          baseHeight += influence * 0.5;
        } else if (type < 4.5) {
          // Glacier
          baseHeight += influence * 0.2;
        } else if (type < 5.5) {
          // Basin
          baseHeight -= influence * 0.2;
        } else {
          // Custom
          baseHeight += influence * 0.3;
        }
        
        // Add some extra noise for roughness - with reduced intensity
        if (roughness > 0.0) {
          float detailNoise = fbm(position * 10.0 * roughness, 3) * roughness * influence * 0.5;
          baseHeight += detailNoise;
        }
      }
    }
    
    return baseHeight;
  }
  
  // Get color based on height and terrain type
  vec3 getTerrainColor(float height) {
    // For gas giants, use a different coloring approach
    if (isGaseous > 0.5) {
      float bands = snoise(vec3(vPosition.x * 0.5, vPosition.y * 5.0, vPosition.z * 0.5) + time * 0.01);
      float spots = snoise(vec3(vPosition.x * 2.0, vPosition.y * 2.0, vPosition.z * 2.0));
      
      // Mix colors based on bands and spots
      vec3 bandColor1 = mix(landColor, mountainColor, smoothstep(-0.2, 0.2, bands));
      vec3 bandColor2 = mix(oceanColor, beachColor, smoothstep(-0.3, 0.3, spots));
      
      return mix(bandColor1, bandColor2, smoothstep(0.1, 0.4, abs(bands)));
    }
    
    // For rocky/terrestrial planets
    if (height < waterLevel && liquidEnabled > 0.5) {
      // Water depth effect
      float depth = (waterLevel - height) * 5.0;
      return mix(beachColor, oceanColor, clamp(depth, 0.0, 1.0));
    } else if (height < waterLevel + 0.05) {
      // Beach/shore
      return beachColor;
    } else if (height < waterLevel + 0.3) {
      // Regular land
      return landColor;
    } else {
      // Mountains
      float mountainFactor = smoothstep(waterLevel + 0.3, waterLevel + 0.3 + mountainHeight, height);
      return mix(landColor, mountainColor, mountainFactor);
    }
  }
  
  // Apply soil texture effects
  vec3 applySoilTexture(vec3 baseColor, vec3 position, float height) {
    // Different texture patterns based on soil type
    float textureNoise = 0.0;
    
    // Soil texture variations
    if (soilTexture == 0) {
      // Smooth
      textureNoise = snoise(position * 20.0) * 0.05;
    } else if (soilTexture == 1) {
      // Rough
      textureNoise = fbm(position * 30.0, 4) * 0.15;
    } else if (soilTexture == 2) {
      // Cracked
      float crack = smoothstep(0.4, 0.5, fbm(position * 15.0, 3));
      textureNoise = crack * 0.2;
    } else if (soilTexture == 3) {
      // Layered
      textureNoise = smoothstep(0.2, 0.3, sin(height * 30.0)) * 0.1;
    } else if (soilTexture == 4) {
      // Porous
      float pores = smoothstep(0.6, 0.8, snoise(position * 40.0));
      textureNoise = pores * 0.15;
    } else if (soilTexture == 5) {
      // Grainy
      textureNoise = snoise(position * 50.0) * 0.1;
    } else if (soilTexture == 6) {
      // Crystalline
      float crystal = smoothstep(0.7, 0.9, fbm(position * 25.0, 2));
      textureNoise = crystal * 0.25;
    }
    
    // Apply texture effect to color
    return baseColor * (1.0 - textureNoise);
  }
  
  // Main shader function
  void main() {
    // Calculate terrain height
    float height = calculateTerrainHeight(vPosition);
    
    // Get base color based on height
    vec3 color = getTerrainColor(height);
    
    // Apply soil texture effects
    color = applySoilTexture(color, vPosition, height);
    
    // Apply lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(dot(vNormal, lightDir), 0.0);
    
    // Add ambient light
    float ambient = 0.3;
    float lighting = ambient + diffuse * 0.7;
    
    // Apply atmospheric scattering for terrestrial planets
    if (isGaseous < 0.5) {
      float atmosphericEffect = 1.0 - pow(max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
      vec3 atmosphereColor = vec3(0.6, 0.8, 1.0);
      color = mix(color, atmosphereColor, atmosphericEffect * 0.2);
    }
    
    // Final color with lighting
    gl_FragColor = vec4(color * lighting, 1.0);
  }
`;
function Gc({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = ae(() => {
    console.log("Creating new shader material with planet stats:", e);
    const s = e.customColors || bt(e.biome || "Rocky Highlands"), a = new k.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        oceanColor: { value: new k.Color(s.oceanFloor || "#1E4D6B") },
        beachColor: { value: new k.Color(s.beach || "#8D6E63") },
        landColor: { value: new k.Color(s.regular || "#A1887F") },
        mountainColor: { value: new k.Color(s.mountain || "#D7CCC8") },
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
        landmarkInfluences: { value: new Float32Array(40) },
        landmarkCount: { value: 0 }
      },
      vertexShader: Hc,
      fragmentShader: Uc
    });
    return r.current = a, a;
  }, []);
  return _e(() => {
    if (!r.current) return;
    console.log("Updating shader uniforms with planet stats:", e);
    const s = e.customColors || bt(e.biome || "Rocky Highlands");
    r.current.uniforms.oceanColor.value = new k.Color(s.oceanFloor || "#1E4D6B"), r.current.uniforms.beachColor.value = new k.Color(s.beach || "#8D6E63"), r.current.uniforms.landColor.value = new k.Color(s.regular || "#A1887F"), r.current.uniforms.mountainColor.value = new k.Color(s.mountain || "#D7CCC8"), r.current.uniforms.waterLevel.value = e.waterLevel || 0.65, r.current.uniforms.surfaceRoughness.value = e.surfaceRoughness || 0.5, r.current.uniforms.mountainHeight.value = e.mountainHeight || 0.6, r.current.uniforms.isGaseous.value = e.mass > 7 || e.radius > 2.5 ? 1 : 0, r.current.uniforms.soilType.value = [
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
  }, [e]), _e(() => {
    if (r.current)
      try {
        if (console.log("Processing landmarks:", e.landmarks), !e.landmarks || !Array.isArray(e.landmarks) || e.landmarks.length === 0) {
          r.current.uniforms.landmarkCount.value = 0;
          return;
        }
        const s = e.landmarks.slice(0, 10), a = [], i = [];
        for (let c = 0; c < s.length; c++) {
          const l = s[c];
          if (!l || !l.coordinates) {
            console.warn("Invalid landmark found:", l);
            continue;
          }
          const u = typeof l.coordinates.x == "number" ? l.coordinates.x : 0, m = typeof l.coordinates.y == "number" ? l.coordinates.y : 0, f = typeof l.coordinates.z == "number" ? l.coordinates.z : 0, d = new k.Vector3(u, m, f).normalize();
          a.push(d.x, d.y, d.z);
          let v = 1;
          switch (l.influence_type) {
            case "crater":
              v = 0;
              break;
            case "mountain":
              v = 1;
              break;
            case "valley":
              v = 2;
              break;
            case "volcano":
              v = 3;
              break;
            case "glacier":
              v = 4;
              break;
            case "basin":
              v = 5;
              break;
            default:
              v = 6;
          }
          i.push(
            typeof l.influence_radius == "number" ? Math.min(l.influence_radius, 0.5) : 0.3,
            typeof l.influence_strength == "number" ? Math.min(l.influence_strength, 0.7) : 0.4,
            typeof l.influence_roughness == "number" ? Math.min(l.influence_roughness, 0.5) : 0.3,
            v
          );
        }
        console.log("Landmark positions:", a), console.log("Landmark influences:", i), r.current.uniforms.landmarkPositions.value = new Float32Array(a), r.current.uniforms.landmarkInfluences.value = new Float32Array(i), r.current.uniforms.landmarkCount.value = a.length / 3;
      } catch (s) {
        console.error("Error processing landmarks:", s), r.current && (r.current.uniforms.landmarkCount.value = 0);
      }
  }, [e.landmarks]), jt((s) => {
    t.current && r.current && (t.current.rotation.y += 1e-3, r.current.uniforms.time.value = s.clock.elapsedTime);
  }), /* @__PURE__ */ o.jsx(nt, { ref: t, args: [1, 128, 128], scale: e.radius, children: /* @__PURE__ */ o.jsx("primitive", { object: n, attach: "material" }) });
}
function Wc({ planetStats: e }) {
  const t = fe(null), r = ae(
    () => e.mass <= 7 && e.radius <= 2.5 && !!e.cloudCount,
    [e]
  ), n = ae(() => Math.min(e.cloudCount || 0, 50), [e.cloudCount]);
  jt(() => {
    t.current && (t.current.rotation.y += 5e-4);
  });
  const s = ae(() => bt(e.biome || "Rocky Highlands").cloud || "#FFFFFF", [e.biome]);
  return r ? /* @__PURE__ */ o.jsx("group", { ref: t, children: Array.from({ length: n }).map((a, i) => {
    const c = Kc(e.radius * 1.03), l = 0.05 + Math.random() * 0.2, u = 0.6 + Math.random() * 0.4;
    return /* @__PURE__ */ o.jsxs("mesh", { position: [c.x, c.y, c.z], children: [
      /* @__PURE__ */ o.jsx("sphereGeometry", { args: [l, 8, 8] }),
      /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: s, transparent: !0, opacity: u, depthWrite: !1 })
    ] }, i);
  }) }) : null;
}
function Kc(e) {
  const t = Math.random(), r = Math.random(), n = 2 * Math.PI * t, s = Math.acos(2 * r - 1), a = e * Math.sin(s) * Math.cos(n), i = e * Math.sin(s) * Math.sin(n), c = e * Math.cos(s);
  return new k.Vector3(a, i, c);
}
const he = new Uint8Array(512), io = new Uint8Array(256);
function qc() {
  for (let e = 0; e < 256; e++)
    io[e] = Math.floor(Math.random() * 256);
  for (let e = 0; e < 512; e++)
    he[e] = io[e & 255];
}
qc();
function zr(e) {
  return e * e * e * (e * (e * 6 - 15) + 10);
}
function tt(e, t, r) {
  return (1 - r) * e + r * t;
}
function He(e, t, r, n) {
  const s = e & 15, a = s < 8 ? t : r, i = s < 4 ? r : s === 12 || s === 14 ? t : n;
  return ((s & 1) === 0 ? a : -a) + ((s & 2) === 0 ? i : -i);
}
function ne(e, t, r) {
  const n = Math.floor(e) & 255, s = Math.floor(t) & 255, a = Math.floor(r) & 255;
  e -= Math.floor(e), t -= Math.floor(t), r -= Math.floor(r);
  const i = zr(e), c = zr(t), l = zr(r), u = he[n] + s, m = he[u] + a, f = he[u + 1] + a, d = he[n + 1] + s, v = he[d] + a, b = he[d + 1] + a;
  return tt(
    tt(
      tt(He(he[m], e, t, r), He(he[v], e - 1, t, r), i),
      tt(He(he[f], e, t - 1, r), He(he[b], e - 1, t - 1, r), i),
      c
    ),
    tt(
      tt(He(he[m + 1], e, t, r - 1), He(he[v + 1], e - 1, t, r - 1), i),
      tt(He(he[f + 1], e, t - 1, r - 1), He(he[b + 1], e - 1, t - 1, r - 1), i),
      c
    ),
    l
  );
}
function Yc(e, t) {
  const r = /* @__PURE__ */ new Map(), n = 12, a = new k.IcosahedronGeometry(1, n).getAttribute("position");
  for (let i = 0; i < a.count; i++) {
    const c = a.getX(i), l = a.getY(i), u = a.getZ(i), m = new k.Vector3(c, l, u).normalize();
    let f = 0;
    if (t === "terrestrial") {
      const v = (e.surfaceRoughness || 0.5) * 1.2;
      let b = 1, p = 1, g = 0.5;
      for (let w = 0; w < 7; w++) {
        const C = ne(
          m.x * b * v,
          m.y * b * v,
          m.z * b * v
        );
        f += C * p, p *= g, b *= 2;
      }
      f *= e.mountainHeight || 0.5, e.terrainErosion && (f *= 1 - e.terrainErosion * 0.3);
      const x = m.clone().multiplyScalar(e.radius), y = ao(x, e.landmarks, e.radius);
      if (f += y.height, y.roughness > 0) {
        const w = ne(
          m.x * 20 * y.roughness,
          m.y * 20 * y.roughness,
          m.z * 20 * y.roughness
        ) * y.roughness * 0.2;
        f += w;
      }
    } else {
      const v = e.surfaceRoughness || 0.5;
      if (f = ne(m.x * 2 * v, m.y * 2 * v, m.z * 2 * v) * 0.1, e.landmarks && e.landmarks.length > 0) {
        const b = m.clone().multiplyScalar(e.radius), p = ao(b, e.landmarks, e.radius);
        f += p.height * 0.5;
      }
    }
    const d = `${m.x.toFixed(5)},${m.y.toFixed(5)},${m.z.toFixed(5)}`;
    r.set(d, f);
  }
  return {
    getHeight: (i) => {
      const c = `${i.x.toFixed(5)},${i.y.toFixed(5)},${i.z.toFixed(5)}`, l = r.get(c);
      if (l !== void 0) return l;
      let u = Number.POSITIVE_INFINITY, m = 0;
      return r.forEach((f, d) => {
        const [v, b, p] = d.split(",").map(Number.parseFloat), g = new k.Vector3(v, b, p), x = i.distanceTo(g);
        x < u && (u = x, m = f);
      }), m;
    }
  };
}
const Xc = Nt(function({ planetStats: t }, r) {
  const n = dt(t.mass, t.radius), s = ae(() => {
    const l = t.customColors || bt(t.biome || "Rocky Highlands");
    return t.soilType && n === "terrestrial" ? {
      oceanFloor: Jt(l.oceanFloor || "#5D4037", t.soilType),
      beach: Jt(l.beach || "#8D6E63", t.soilType),
      regular: Jt(l.regular || "#A1887F", t.soilType),
      mountain: Jt(l.mountain || "#D7CCC8", t.soilType)
    } : l;
  }, [t.biome, t.customColors, t.soilType, n]), a = ae(() => Yc(t, n), [t, n]), { surfaceGeometry: i, surfaceMaterial: c } = ae(() => {
    const l = new k.IcosahedronGeometry(t.radius, 11), u = l.getAttribute("position"), m = [], f = [], d = [], v = zc(t.soilTexture || "rough");
    for (let g = 0; g < u.count; g++) {
      const x = u.getX(g), y = u.getY(g), w = u.getZ(g), C = new k.Vector3(x, y, w), j = C.clone().normalize();
      let A = a.getHeight(j);
      const R = 0.5 + Math.atan2(j.z, j.x) / (2 * Math.PI), S = 0.5 - Math.asin(j.y) / Math.PI;
      d.push(R, S), t.landmarks && t.landmarks.length > 0 && t.landmarks.forEach((_) => {
        Vc(j, _, t.radius);
      });
      const O = n === "terrestrial" ? 0.08 : 0.05, P = t.surfaceRoughness || 0.5, N = A * O * P * 1.5;
      let T = 0;
      if (n === "terrestrial" && N > 0.05) {
        const { scale: _, depth: U, pattern: M } = v;
        switch (M) {
          case "cracks":
            T = Zc(j, _, U);
            break;
          case "layers":
            T = Jc(j, _, U);
            break;
          case "crystals":
            T = Qc(j, _, U);
            break;
          case "pores":
            T = el(j, _, U);
            break;
          case "grains":
            T = tl(j, _, U);
            break;
          default:
            T = rl(j, _, U, v.irregularity);
        }
        t.soilType === "volcanic" ? T *= 1.5 : t.soilType === "sandy" && (T *= 0.7);
      }
      C.add(j.clone().multiplyScalar(N - T)), m.push(C);
      const D = t.waterLevel || 0, F = Bc(N, D), $ = nl(F, s, t, j, v);
      f.push($);
    }
    for (let g = 0; g < u.count; g++) {
      const x = m[g];
      u.setXYZ(g, x.x, x.y, x.z);
    }
    u.needsUpdate = !0, l.computeVertexNormals();
    const b = new k.Float32BufferAttribute(new Float32Array(u.count * 3), 3);
    for (let g = 0; g < f.length; g++)
      b.setXYZ(g, f[g].r, f[g].g, f[g].b);
    l.setAttribute("color", b), l.setAttribute("uv", new k.Float32BufferAttribute(new Float32Array(d), 2));
    let p;
    return n === "terrestrial" ? p = new k.MeshStandardMaterial({
      vertexColors: !0,
      roughness: 0.7,
      metalness: 0.1,
      flatShading: !1
    }) : p = ol(t), { surfaceGeometry: l, surfaceMaterial: p };
  }, [t, n, s, a]);
  return /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: i, material: c });
});
function Zc(e, t, r) {
  const n = ne(e.x * t * 2, e.y * t * 2, e.z * t * 2), s = ne(e.x * t * 5, e.y * t * 5, e.z * t * 5);
  return (Math.abs(n) < 0.1 ? r * 1.5 : 0) + (Math.abs(s) < 0.05 ? r * 0.8 : 0);
}
function Jc(e, t, r) {
  const n = ne(e.x * t * 0.5, e.y * t * 0.5, e.z * t * 0.5);
  return Math.sin(n * 20) * r * 0.8;
}
function Qc(e, t, r) {
  const n = ne(e.x * t * 3, e.y * t * 3, e.z * t * 3);
  return n > 0.7 || n < -0.7 ? r * 1.2 : 0;
}
function el(e, t, r) {
  return ne(e.x * t * 4, e.y * t * 4, e.z * t * 4) > 0.8 ? r * 1.5 : 0;
}
function tl(e, t, r) {
  const n = ne(e.x * t * 8, e.y * t * 8, e.z * t * 8), s = ne(e.x * t * 12, e.y * t * 12, e.z * t * 12);
  return n * s * r;
}
function rl(e, t, r, n) {
  return ne(e.x * t, e.y * t, e.z * t) * r * n;
}
function nl(e, t, r, n, s) {
  const a = {
    [Re.OceanFloor]: t.oceanFloor,
    [Re.Beach]: t.beach,
    [Re.Regular]: t.regular,
    [Re.Mountain]: t.mountain
  }, i = new k.Color(a[e] || t.regular);
  let c = i;
  if (r.soilType) {
    const u = {
      rocky: new k.Color(11770240),
      sandy: new k.Color(13808780),
      volcanic: new k.Color(3815994),
      organic: new k.Color(5082199),
      dusty: new k.Color(10506797),
      frozen: new k.Color(14745599),
      muddy: new k.Color(6373670)
    }, m = u[r.soilType] || u.rocky, f = {
      [Re.OceanFloor]: 0.3,
      [Re.Beach]: 0.6,
      [Re.Regular]: 0.7,
      [Re.Mountain]: 0.8
    };
    if (c = i.clone().lerp(m, f[e] || 0.5), e === Re.Mountain && (ne(n.x * 50, n.y * 50, n.z * 50) * 0.1 < 0 ? c.multiplyScalar(0.9) : c.multiplyScalar(1.1), r.soilTexture)) {
      const v = ne(
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
function ol(e) {
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
  return e.temperature < 100 ? (n = new k.Color(4620980), s = new k.Color(2003199), a = new k.Color(49151)) : e.temperature > 300 ? (n = new k.Color(13458524), s = new k.Color(15761536), a = new k.Color(16416882)) : (n = new k.Color(10145074), s = new k.Color(7048739), a = new k.Color(5597999)), new k.ShaderMaterial({
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
const sl = Nt(function({ planetStats: t }, r) {
  const n = qo(t.temperature), s = Yo(t.temperature, t.liquidType || n.type), { liquidGeometry: a, liquidMaterial: i } = ae(() => {
    const c = t.liquidEnabled !== !1 && (t.waterLevel || 0) > 0 && s, l = {
      water: new k.Color(1996980),
      methane: new k.Color(8369109),
      nitrogen: new k.Color(9498256),
      ammonia: new k.Color(14204888),
      ethane: new k.Color(16766720)
    }, u = l[t.liquidType] || l.water;
    t.liquidType === "water" && (t.temperature < 283 ? u.lerp(new k.Color(18347), 0.3) : t.temperature > 350 && u.lerp(new k.Color(25600), 0.2), t.salinity && u.lerp(new k.Color(18347), t.salinity * 0.5));
    const m = new k.MeshPhysicalMaterial({
      color: u,
      transparent: !0,
      opacity: c ? 0.8 : 0,
      roughness: 0.1,
      metalness: 0.2,
      envMapIntensity: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
      ior: 1.4,
      transmission: 0.95
    }), f = c ? Math.max(t.waterLevel || 0, 0.5) : t.waterLevel || 0, d = t.radius * (1 + f * 0.02), v = new k.IcosahedronGeometry(d, 9), b = v.getAttribute("position");
    for (let p = 0; p < b.count; p++) {
      const g = b.getX(p), x = b.getY(p), y = b.getZ(p), w = new k.Vector3(g, x, y), C = w.clone().normalize(), j = ne(C.x * 10, C.y * 10, C.z * 10) * 5e-3;
      w.add(C.clone().multiplyScalar(j)), b.setXYZ(p, w.x, w.y, w.z);
    }
    return b.needsUpdate = !0, v.computeVertexNormals(), { liquidGeometry: v, liquidMaterial: m };
  }, [t, s]);
  return !a || !i ? null : /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: a, material: i });
}), al = Nt(function({ planetStats: t }, r) {
  const n = dt(t.mass, t.radius), { atmosphereGeometry: s, atmosphereMaterial: a } = ae(() => {
    const i = new k.IcosahedronGeometry(t.radius * 1.1, 9);
    let c;
    if (n === "terrestrial") {
      const l = {
        water: new k.Color(8900331),
        co2: new k.Color(13882323),
        methane: new k.Color(10145074),
        snow: new k.Color(15792383),
        none: new k.Color(11393254)
      }, u = l[t.precipitationCompound] || l.none;
      t.temperature < 200 ? u.lerp(new k.Color(4620980), 0.3) : t.temperature > 350 && u.lerp(new k.Color(16752762), 0.3);
      const m = t.atmosphereStrength ? t.atmosphereStrength * 0.4 : 0.25;
      c = new k.MeshPhongMaterial({
        color: u,
        transparent: !0,
        opacity: m,
        side: k.DoubleSide,
        shininess: 30,
        depthWrite: !1
      });
    } else
      c = new k.MeshPhongMaterial({
        color: 16777215,
        transparent: !0,
        opacity: 0.15,
        side: k.DoubleSide,
        depthWrite: !1
      });
    return { atmosphereGeometry: i, atmosphereMaterial: c };
  }, [t, n]);
  return /* @__PURE__ */ o.jsx("mesh", { ref: r, geometry: s, material: a });
}), il = Nt(function({ planetStats: t }, r) {
  const n = ae(() => {
    if (!t.cloudCount || t.cloudCount <= 0)
      return [];
    const s = [], a = Math.min(t.cloudCount, 100);
    for (let i = 0; i < a; i++) {
      const c = Math.random() * Math.PI * 2, l = Math.random() * Math.PI, u = Math.sin(l) * Math.cos(c), m = Math.sin(l) * Math.sin(c), f = Math.cos(l), d = new k.Vector3(u, m, f).normalize(), v = 0.05 + Math.random() * 0.15, b = `cloud-${i}`;
      s.push({
        key: b,
        position: d.multiplyScalar(t.radius * 1.02),
        size: v
      });
    }
    return s;
  }, [t.cloudCount, t.radius]);
  return /* @__PURE__ */ o.jsx("group", { ref: r, children: n.map((s) => /* @__PURE__ */ o.jsxs("mesh", { position: [s.position.x, s.position.y, s.position.z], children: [
    /* @__PURE__ */ o.jsx("planeGeometry", { args: [s.size, s.size] }),
    /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: "#ffffff", transparent: !0, opacity: 0.6, side: k.DoubleSide }),
    /* @__PURE__ */ o.jsx("group", { rotation: [0, Math.PI, 0] })
  ] }, s.key)) });
}), cl = [
  "building",
  "tower",
  "dome",
  "pyramid",
  "antenna",
  "platform",
  "bridge",
  "monument",
  "sphere",
  "cylinder",
  "cube",
  "ring",
  "dish",
  "custom"
];
function rn(e) {
  return {
    building: "Building",
    tower: "Tower",
    dome: "Dome",
    pyramid: "Pyramid",
    antenna: "Antenna",
    platform: "Platform",
    bridge: "Bridge",
    monument: "Monument",
    sphere: "Sphere",
    cylinder: "Cylinder",
    cube: "Cube",
    ring: "Ring",
    dish: "Satellite Dish",
    custom: "Custom Shape"
  }[e] || e.charAt(0).toUpperCase() + e.slice(1).replace(/_/g, " ");
}
function ll() {
  return `STR-${Math.floor(Math.random() * 900 + 100)}`;
}
function cr(e) {
  const t = {
    id: ll(),
    type: e,
    name: rn(e),
    scale: { x: 1, y: 1, z: 1 },
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    color: "#ffffff",
    roughness: 0.5,
    metalness: 0.2
  };
  switch (e) {
    case "building":
      return {
        ...t,
        scale: { x: 0.05, y: 0.1, z: 0.05 },
        color: "#a0a0a0"
      };
    case "tower":
      return {
        ...t,
        scale: { x: 0.03, y: 0.15, z: 0.03 },
        color: "#707070"
      };
    case "dome":
      return {
        ...t,
        scale: { x: 0.08, y: 0.04, z: 0.08 },
        color: "#a0c0e0",
        metalness: 0.3,
        roughness: 0.2
      };
    case "pyramid":
      return {
        ...t,
        scale: { x: 0.08, y: 0.06, z: 0.08 },
        color: "#d0c090"
      };
    case "antenna":
      return {
        ...t,
        scale: { x: 0.01, y: 0.2, z: 0.01 },
        color: "#c0c0c0",
        metalness: 0.7,
        roughness: 0.3
      };
    case "platform":
      return {
        ...t,
        scale: { x: 0.1, y: 0.01, z: 0.1 },
        color: "#808080"
      };
    case "bridge":
      return {
        ...t,
        scale: { x: 0.1, y: 0.02, z: 0.03 },
        color: "#909090"
      };
    case "monument":
      return {
        ...t,
        scale: { x: 0.04, y: 0.12, z: 0.04 },
        color: "#e0e0e0"
      };
    case "sphere":
      return {
        ...t,
        scale: { x: 0.05, y: 0.05, z: 0.05 },
        color: "#e0e0e0",
        metalness: 0.5,
        roughness: 0.2
      };
    case "cylinder":
      return {
        ...t,
        scale: { x: 0.04, y: 0.08, z: 0.04 },
        color: "#b0b0b0"
      };
    case "cube":
      return {
        ...t,
        scale: { x: 0.05, y: 0.05, z: 0.05 },
        color: "#c0c0c0"
      };
    case "ring":
      return {
        ...t,
        scale: { x: 0.08, y: 0.01, z: 0.08 },
        color: "#d0d0d0",
        metalness: 0.6
      };
    case "dish":
      return {
        ...t,
        scale: { x: 0.06, y: 0.02, z: 0.06 },
        color: "#e0e0e0",
        metalness: 0.7,
        roughness: 0.2
      };
    default:
      return t;
  }
}
function Xo(e) {
  switch (e) {
    case "building":
      return new k.BoxGeometry(1, 1, 1);
    case "tower":
      return new k.CylinderGeometry(0.5, 0.7, 1, 8);
    case "dome":
      return new k.SphereGeometry(0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    case "pyramid":
      return new k.ConeGeometry(0.7, 1, 4);
    case "antenna":
      return new k.CylinderGeometry(0.1, 0.2, 1, 8);
    case "platform":
      return new k.BoxGeometry(1, 0.1, 1);
    case "bridge":
      return new k.BoxGeometry(1, 0.2, 0.3);
    case "monument":
      return new k.CylinderGeometry(0.3, 0.5, 1, 8);
    case "sphere":
      return new k.SphereGeometry(0.5, 16, 16);
    case "cylinder":
      return new k.CylinderGeometry(0.5, 0.5, 1, 16);
    case "cube":
      return new k.BoxGeometry(1, 1, 1);
    case "ring":
      return new k.TorusGeometry(0.5, 0.1, 8, 24);
    case "dish":
      return new k.SphereGeometry(0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    default:
      return new k.BoxGeometry(1, 1, 1);
  }
}
function Zo(e) {
  const t = new k.MeshStandardMaterial({
    color: new k.Color(e.color || "#ffffff"),
    roughness: e.roughness !== void 0 ? e.roughness : 0.5,
    metalness: e.metalness !== void 0 ? e.metalness : 0.2,
    transparent: e.opacity !== void 0 && e.opacity < 1,
    opacity: e.opacity !== void 0 ? e.opacity : 1,
    wireframe: e.wireframe || !1
  });
  return e.emissive && e.emissiveIntensity && (t.emissive = new k.Color(e.emissive), t.emissiveIntensity = e.emissiveIntensity), t;
}
function ul({ structure: e, landmarkPosition: t, planetRadius: r }) {
  const n = fe(null), { geometry: s, material: a, position: i, quaternion: c, scale: l } = ae(() => {
    const u = Xo(e.type), m = Zo(e), f = t.clone().normalize(), d = new k.Vector3(0, 1, 0), v = new k.Quaternion().setFromUnitVectors(d, f), b = new k.Matrix4().makeRotationFromQuaternion(v), p = new k.Vector3(
      e.position.x,
      e.position.y + e.scale.y * 0.5,
      // Add an offset to raise from surface
      e.position.z
    );
    p.applyMatrix4(b);
    const g = p.clone().multiplyScalar(0.05 * r), x = t.clone().add(g), y = new k.Euler(
      e.rotation.x * Math.PI,
      e.rotation.y * Math.PI,
      e.rotation.z * Math.PI
    ), w = new k.Quaternion().setFromEuler(new k.Euler().copy(y));
    v.multiply(w);
    const C = new k.Vector3(
      e.scale.x * r * 0.05,
      e.scale.y * r * 0.05,
      e.scale.z * r * 0.05
    );
    return {
      geometry: u,
      material: m,
      position: x,
      quaternion: v,
      scale: C
    };
  }, [e, t, r]);
  return /* @__PURE__ */ o.jsx(
    "mesh",
    {
      ref: n,
      geometry: s,
      material: a,
      position: [i.x, i.y, i.z],
      scale: [l.x, l.y, l.z],
      quaternion: c
    }
  );
}
function dl({ landmarks: e, planetStats: t, planetRadius: r, rotation: n }) {
  const s = ae(() => e.map((a) => {
    const i = (90 - a.latitude) * (Math.PI / 180), c = (a.longitude + 180) * (Math.PI / 180), l = -r * Math.sin(i) * Math.cos(c), u = r * Math.sin(i) * Math.sin(c), m = r * Math.cos(i);
    return new k.Vector3(l, m, u);
  }), [e, r]);
  return /* @__PURE__ */ o.jsx("group", { rotation: [0, n, 0], children: e.map((a, i) => {
    if (!a.structures || a.structures.length === 0)
      return null;
    const c = s[i];
    return /* @__PURE__ */ o.jsx("group", { position: [0, 0, 0], children: a.structures.map((l) => /* @__PURE__ */ o.jsx(
      ul,
      {
        structure: l,
        landmarkPosition: c,
        planetRadius: r
      },
      l.id
    )) }, a.id);
  }) });
}
function fl({ planetStats: e }) {
  const t = dt(e.mass, e.radius), [r, n] = de(null), { raycaster: s, camera: a, gl: i } = Vo(), c = {
    surface: fe(null),
    atmosphere: fe(null),
    liquid: fe(null),
    clouds: fe(null),
    group: fe(null)
  }, l = (u) => {
    if (u.stopPropagation(), !c.surface.current) return;
    const m = new k.Vector2(
      u.clientX / i.domElement.clientWidth * 2 - 1,
      -(u.clientY / i.domElement.clientHeight) * 2 + 1
    );
    s.setFromCamera(m, a);
    const f = s.intersectObject(c.surface.current);
    if (f.length > 0) {
      const d = f[0].point, v = d.clone().normalize(), b = d.length() - e.radius;
      let p = "Mountain";
      b < -0.05 ? p = "Ocean Floor" : b < 0 ? p = "Beach" : b < 0.05 && (p = "Lowland");
      const g = e.temperature, x = b * 10, y = g - x, C = y - 273;
      n({
        position: d,
        normalizedPosition: v,
        height: b,
        terrainType: p,
        temperature: y,
        relativeToWaterTemp: C
      });
    }
  };
  return jt(() => {
    c.surface.current && (c.surface.current.rotation.y += 1e-3), c.atmosphere.current && (c.atmosphere.current.rotation.y += 5e-4), c.liquid.current && (c.liquid.current.rotation.y += 8e-4), c.clouds.current && (c.clouds.current.rotation.y += 12e-4);
  }), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("group", { ref: c.group, onClick: l, children: [
      /* @__PURE__ */ o.jsx(Xc, { planetStats: e, ref: c.surface }),
      t === "terrestrial" && /* @__PURE__ */ o.jsx(sl, { planetStats: e, ref: c.liquid }),
      /* @__PURE__ */ o.jsx(al, { planetStats: e, ref: c.atmosphere }),
      t === "terrestrial" && e.cloudCount && e.cloudCount > 0 && /* @__PURE__ */ o.jsx(il, { planetStats: e, ref: c.clouds }),
      e.landmarks && e.landmarks.length > 0 && /* @__PURE__ */ o.jsx(dl, { planetStats: e, landmarks: [], planetRadius: 0, rotation: 0 })
    ] }),
    r && /* @__PURE__ */ o.jsx(Ko, { pointInfo: r, planetStats: e })
  ] });
}
function H(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function $e(e, t = []) {
  let r = [];
  function n(a, i) {
    const c = h.createContext(i), l = r.length;
    r = [...r, i];
    const u = (f) => {
      var x;
      const { scope: d, children: v, ...b } = f, p = ((x = d == null ? void 0 : d[e]) == null ? void 0 : x[l]) || c, g = h.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ o.jsx(p.Provider, { value: g, children: v });
    };
    u.displayName = a + "Provider";
    function m(f, d) {
      var p;
      const v = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || c, b = h.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, m];
  }
  const s = () => {
    const a = r.map((i) => h.createContext(i));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return h.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return s.scopeName = e, [n, ml(s, ...t)];
}
function ml(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(a) {
      const i = n.reduce((c, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return { ...c, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function co(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function En(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const a = co(s, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const a = n[s];
          typeof a == "function" ? a() : co(e[s], null);
        }
      };
  };
}
function oe(...e) {
  return h.useCallback(En(...e), e);
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = /* @__PURE__ */ pl(e), r = h.forwardRef((n, s) => {
    const { children: a, ...i } = n, c = h.Children.toArray(a), l = c.find(vl);
    if (l) {
      const u = l.props.children, m = c.map((f) => f === l ? h.Children.count(u) > 1 ? h.Children.only(null) : h.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ o.jsx(t, { ...i, ref: s, children: h.isValidElement(u) ? h.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ o.jsx(t, { ...i, ref: s, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
var hl = /* @__PURE__ */ wt("Slot");
// @__NO_SIDE_EFFECTS__
function pl(e) {
  const t = h.forwardRef((r, n) => {
    const { children: s, ...a } = r, i = h.isValidElement(s) ? yl(s) : void 0, c = oe(i, n);
    if (h.isValidElement(s)) {
      const l = xl(a, s.props);
      return s.type !== h.Fragment && (l.ref = c), h.cloneElement(s, l);
    }
    return h.Children.count(s) > 1 ? h.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var gl = Symbol("radix.slottable");
function vl(e) {
  return h.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gl;
}
function xl(e, t) {
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
function yl(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Nr(e) {
  const t = e + "CollectionProvider", [r, n] = $e(t), [s, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: g, children: x } = p, y = Te.useRef(null), w = Te.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ o.jsx(s, { scope: g, itemMap: w, collectionRef: y, children: x });
  };
  i.displayName = t;
  const c = e + "CollectionSlot", l = /* @__PURE__ */ wt(c), u = Te.forwardRef(
    (p, g) => {
      const { scope: x, children: y } = p, w = a(c, x), C = oe(g, w.collectionRef);
      return /* @__PURE__ */ o.jsx(l, { ref: C, children: y });
    }
  );
  u.displayName = c;
  const m = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ wt(m), v = Te.forwardRef(
    (p, g) => {
      const { scope: x, children: y, ...w } = p, C = Te.useRef(null), j = oe(g, C), A = a(m, x);
      return Te.useEffect(() => (A.itemMap.set(C, { ref: C, ...w }), () => void A.itemMap.delete(C))), /* @__PURE__ */ o.jsx(d, { [f]: "", ref: j, children: y });
    }
  );
  v.displayName = m;
  function b(p) {
    const g = a(e + "CollectionConsumer", p);
    return Te.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const w = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (A, R) => w.indexOf(A.ref.current) - w.indexOf(R.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: v },
    b,
    n
  ];
}
var me = globalThis != null && globalThis.document ? h.useLayoutEffect : () => {
}, bl = h[" useId ".trim().toString()] || (() => {
}), wl = 0;
function at(e) {
  const [t, r] = h.useState(bl());
  return me(() => {
    r((n) => n ?? String(wl++));
  }, [e]), t ? `radix-${t}` : "";
}
var Cl = [
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
], Y = Cl.reduce((e, t) => {
  const r = /* @__PURE__ */ wt(`Primitive.${t}`), n = h.forwardRef((s, a) => {
    const { asChild: i, ...c } = s, l = i ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o.jsx(l, { ...c, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Jo(e, t) {
  e && Cr.flushSync(() => e.dispatchEvent(t));
}
function De(e) {
  const t = h.useRef(e);
  return h.useEffect(() => {
    t.current = e;
  }), h.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
var Nl = h[" useInsertionEffect ".trim().toString()] || me;
function it({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [s, a, i] = jl({
    defaultProp: t,
    onChange: r
  }), c = e !== void 0, l = c ? e : s;
  {
    const m = h.useRef(e !== void 0);
    h.useEffect(() => {
      const f = m.current;
      f !== c && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), m.current = c;
    }, [c, n]);
  }
  const u = h.useCallback(
    (m) => {
      var f;
      if (c) {
        const d = kl(m) ? m(e) : m;
        d !== e && ((f = i.current) == null || f.call(i, d));
      } else
        a(m);
    },
    [c, e, a, i]
  );
  return [l, u];
}
function jl({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = h.useState(e), s = h.useRef(r), a = h.useRef(t);
  return Nl(() => {
    a.current = t;
  }, [t]), h.useEffect(() => {
    var i;
    s.current !== r && ((i = a.current) == null || i.call(a, r), s.current = r);
  }, [r, s]), [r, n, a];
}
function kl(e) {
  return typeof e == "function";
}
var El = h.createContext(void 0);
function Gt(e) {
  const t = h.useContext(El);
  return e || t || "ltr";
}
var Br = "rovingFocusGroup.onEntryFocus", Sl = { bubbles: !1, cancelable: !0 }, Wt = "RovingFocusGroup", [nn, Qo, Ml] = Nr(Wt), [Rl, jr] = $e(
  Wt,
  [Ml]
), [Tl, Al] = Rl(Wt), es = h.forwardRef(
  (e, t) => /* @__PURE__ */ o.jsx(nn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o.jsx(nn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ o.jsx(Pl, { ...e, ref: t }) }) })
);
es.displayName = Wt;
var Pl = h.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: s = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: c,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: m = !1,
    ...f
  } = e, d = h.useRef(null), v = oe(t, d), b = Gt(a), [p, g] = it({
    prop: i,
    defaultProp: c ?? null,
    onChange: l,
    caller: Wt
  }), [x, y] = h.useState(!1), w = De(u), C = Qo(r), j = h.useRef(!1), [A, R] = h.useState(0);
  return h.useEffect(() => {
    const S = d.current;
    if (S)
      return S.addEventListener(Br, w), () => S.removeEventListener(Br, w);
  }, [w]), /* @__PURE__ */ o.jsx(
    Tl,
    {
      scope: r,
      orientation: n,
      dir: b,
      loop: s,
      currentTabStopId: p,
      onItemFocus: h.useCallback(
        (S) => g(S),
        [g]
      ),
      onItemShiftTab: h.useCallback(() => y(!0), []),
      onFocusableItemAdd: h.useCallback(
        () => R((S) => S + 1),
        []
      ),
      onFocusableItemRemove: h.useCallback(
        () => R((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ o.jsx(
        Y.div,
        {
          tabIndex: x || A === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            j.current = !0;
          }),
          onFocus: H(e.onFocus, (S) => {
            const O = !j.current;
            if (S.target === S.currentTarget && O && !x) {
              const P = new CustomEvent(Br, Sl);
              if (S.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const N = C().filter((_) => _.focusable), T = N.find((_) => _.active), D = N.find((_) => _.id === p), $ = [T, D, ...N].filter(
                  Boolean
                ).map((_) => _.ref.current);
                ns($, m);
              }
            }
            j.current = !1;
          }),
          onBlur: H(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), ts = "RovingFocusGroupItem", rs = h.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: s = !1,
      tabStopId: a,
      children: i,
      ...c
    } = e, l = at(), u = a || l, m = Al(ts, r), f = m.currentTabStopId === u, d = Qo(r), { onFocusableItemAdd: v, onFocusableItemRemove: b, currentTabStopId: p } = m;
    return h.useEffect(() => {
      if (n)
        return v(), () => b();
    }, [n, v, b]), /* @__PURE__ */ o.jsx(
      nn.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: s,
        children: /* @__PURE__ */ o.jsx(
          Y.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": m.orientation,
            ...c,
            ref: t,
            onMouseDown: H(e.onMouseDown, (g) => {
              n ? m.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: H(e.onFocus, () => m.onItemFocus(u)),
            onKeyDown: H(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const x = Dl(g, m.orientation, m.dir);
              if (x !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let w = d().filter((C) => C.focusable).map((C) => C.ref.current);
                if (x === "last") w.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && w.reverse();
                  const C = w.indexOf(g.currentTarget);
                  w = m.loop ? Ol(w, C + 1) : w.slice(C + 1);
                }
                setTimeout(() => ns(w));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: p != null }) : i
          }
        )
      }
    );
  }
);
rs.displayName = ts;
var _l = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Il(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Dl(e, t, r) {
  const n = Il(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return _l[n];
}
function ns(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function Ol(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var os = es, ss = rs;
function Ll(e, t) {
  return h.useReducer((r, n) => t[r][n] ?? r, e);
}
var kt = (e) => {
  const { present: t, children: r } = e, n = Fl(t), s = typeof r == "function" ? r({ present: n.isPresent }) : h.Children.only(r), a = oe(n.ref, zl(s));
  return typeof r == "function" || n.isPresent ? h.cloneElement(s, { ref: a }) : null;
};
kt.displayName = "Presence";
function Fl(e) {
  const [t, r] = h.useState(), n = h.useRef(null), s = h.useRef(e), a = h.useRef("none"), i = e ? "mounted" : "unmounted", [c, l] = Ll(i, {
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
  return h.useEffect(() => {
    const u = Qt(n.current);
    a.current = c === "mounted" ? u : "none";
  }, [c]), me(() => {
    const u = n.current, m = s.current;
    if (m !== e) {
      const d = a.current, v = Qt(u);
      e ? l("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(m && d !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), me(() => {
    if (t) {
      let u;
      const m = t.ownerDocument.defaultView ?? window, f = (v) => {
        const p = Qt(n.current).includes(v.animationName);
        if (v.target === t && p && (l("ANIMATION_END"), !s.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, d = (v) => {
        v.target === t && (a.current = Qt(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        m.clearTimeout(u), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: h.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function Qt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function zl(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var kr = "Tabs", [Bl, C0] = $e(kr, [
  jr
]), as = jr(), [Vl, Sn] = Bl(kr), is = h.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: s,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: c,
      activationMode: l = "automatic",
      ...u
    } = e, m = Gt(c), [f, d] = it({
      prop: n,
      onChange: s,
      defaultProp: a ?? "",
      caller: kr
    });
    return /* @__PURE__ */ o.jsx(
      Vl,
      {
        scope: r,
        baseId: at(),
        value: f,
        onValueChange: d,
        orientation: i,
        dir: m,
        activationMode: l,
        children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            dir: m,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
is.displayName = kr;
var cs = "TabsList", ls = h.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...s } = e, a = Sn(cs, r), i = as(r);
    return /* @__PURE__ */ o.jsx(
      os,
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
ls.displayName = cs;
var us = "TabsTrigger", ds = h.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: s = !1, ...a } = e, i = Sn(us, r), c = as(r), l = hs(i.baseId, n), u = ps(i.baseId, n), m = n === i.value;
    return /* @__PURE__ */ o.jsx(
      ss,
      {
        asChild: !0,
        ...c,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ o.jsx(
          Y.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": u,
            "data-state": m ? "active" : "inactive",
            "data-disabled": s ? "" : void 0,
            disabled: s,
            id: l,
            ...a,
            ref: t,
            onMouseDown: H(e.onMouseDown, (f) => {
              !s && f.button === 0 && f.ctrlKey === !1 ? i.onValueChange(n) : f.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && i.onValueChange(n);
            }),
            onFocus: H(e.onFocus, () => {
              const f = i.activationMode !== "manual";
              !m && !s && f && i.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
ds.displayName = us;
var fs = "TabsContent", ms = h.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: s, children: a, ...i } = e, c = Sn(fs, r), l = hs(c.baseId, n), u = ps(c.baseId, n), m = n === c.value, f = h.useRef(m);
    return h.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ o.jsx(kt, { present: s || m, children: ({ present: d }) => /* @__PURE__ */ o.jsx(
      Y.div,
      {
        "data-state": m ? "active" : "inactive",
        "data-orientation": c.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !d,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: d && a
      }
    ) });
  }
);
ms.displayName = fs;
function hs(e, t) {
  return `${e}-trigger-${t}`;
}
function ps(e, t) {
  return `${e}-content-${t}`;
}
var $l = is, gs = ls, vs = ds, xs = ms;
function ys(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = ys(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function bs() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = ys(e)) && (n && (n += " "), n += t);
  return n;
}
const Mn = "-", Hl = (e) => {
  const t = Gl(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const c = i.split(Mn);
      return c[0] === "" && c.length !== 1 && c.shift(), ws(c, t) || Ul(i);
    },
    getConflictingClassGroupIds: (i, c) => {
      const l = r[i] || [];
      return c && n[i] ? [...l, ...n[i]] : l;
    }
  };
}, ws = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? ws(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const a = e.join(Mn);
  return (i = t.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : i.classGroupId;
}, lo = /^\[(.+)\]$/, Ul = (e) => {
  if (lo.test(e)) {
    const t = lo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Gl = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    on(r[s], n, s, t);
  return n;
}, on = (e, t, r, n) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const a = s === "" ? t : uo(t, s);
      a.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Wl(s)) {
        on(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([a, i]) => {
      on(i, uo(t, a), r, n);
    });
  });
}, uo = (e, t) => {
  let r = e;
  return t.split(Mn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Wl = (e) => e.isThemeGetter, Kl = (e) => {
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
}, sn = "!", an = ":", ql = an.length, Yl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (s) => {
    const a = [];
    let i = 0, c = 0, l = 0, u;
    for (let b = 0; b < s.length; b++) {
      let p = s[b];
      if (i === 0 && c === 0) {
        if (p === an) {
          a.push(s.slice(l, b)), l = b + ql;
          continue;
        }
        if (p === "/") {
          u = b;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? c++ : p === ")" && c--;
    }
    const m = a.length === 0 ? s : s.substring(l), f = Xl(m), d = f !== m, v = u && u > l ? u - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const s = t + an, a = n;
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
}, Xl = (e) => e.endsWith(sn) ? e.substring(0, e.length - 1) : e.startsWith(sn) ? e.substring(1) : e, Zl = (e) => {
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
}, Jl = (e) => ({
  cache: Kl(e.cacheSize),
  parseClassName: Yl(e),
  sortModifiers: Zl(e),
  ...Hl(e)
}), Ql = /\s+/, eu = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, i = [], c = e.trim().split(Ql);
  let l = "";
  for (let u = c.length - 1; u >= 0; u -= 1) {
    const m = c[u], {
      isExternal: f,
      modifiers: d,
      hasImportantModifier: v,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = r(m);
    if (f) {
      l = m + (l.length > 0 ? " " + l : l);
      continue;
    }
    let g = !!p, x = n(g ? b.substring(0, p) : b);
    if (!x) {
      if (!g) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (x = n(b), !x) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      g = !1;
    }
    const y = a(d).join(":"), w = v ? y + sn : y, C = w + x;
    if (i.includes(C))
      continue;
    i.push(C);
    const j = s(x, g);
    for (let A = 0; A < j.length; ++A) {
      const R = j[A];
      i.push(w + R);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function tu() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Cs(t)) && (n && (n += " "), n += r);
  return n;
}
const Cs = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Cs(e[n])) && (r && (r += " "), r += t);
  return r;
};
function ru(e, ...t) {
  let r, n, s, a = i;
  function i(l) {
    const u = t.reduce((m, f) => f(m), e());
    return r = Jl(u), n = r.cache.get, s = r.cache.set, a = c, c(l);
  }
  function c(l) {
    const u = n(l);
    if (u)
      return u;
    const m = eu(l, r);
    return s(l, m), m;
  }
  return function() {
    return a(tu.apply(null, arguments));
  };
}
const ue = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ns = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, js = /^\((?:(\w[\w-]*):)?(.+)\)$/i, nu = /^\d+\/\d+$/, ou = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, su = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, au = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, iu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, cu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ht = (e) => nu.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), Ue = (e) => !!e && Number.isInteger(Number(e)), Vr = (e) => e.endsWith("%") && X(e.slice(0, -1)), Fe = (e) => ou.test(e), lu = () => !0, uu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  su.test(e) && !au.test(e)
), ks = () => !1, du = (e) => iu.test(e), fu = (e) => cu.test(e), mu = (e) => !B(e) && !V(e), hu = (e) => Et(e, Ms, ks), B = (e) => Ns.test(e), rt = (e) => Et(e, Rs, uu), $r = (e) => Et(e, yu, X), fo = (e) => Et(e, Es, ks), pu = (e) => Et(e, Ss, fu), er = (e) => Et(e, Ts, du), V = (e) => js.test(e), Lt = (e) => St(e, Rs), gu = (e) => St(e, bu), mo = (e) => St(e, Es), vu = (e) => St(e, Ms), xu = (e) => St(e, Ss), tr = (e) => St(e, Ts, !0), Et = (e, t, r) => {
  const n = Ns.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, St = (e, t, r = !1) => {
  const n = js.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Es = (e) => e === "position" || e === "percentage", Ss = (e) => e === "image" || e === "url", Ms = (e) => e === "length" || e === "size" || e === "bg-size", Rs = (e) => e === "length", yu = (e) => e === "number", bu = (e) => e === "family-name", Ts = (e) => e === "shadow", wu = () => {
  const e = ue("color"), t = ue("font"), r = ue("text"), n = ue("font-weight"), s = ue("tracking"), a = ue("leading"), i = ue("breakpoint"), c = ue("container"), l = ue("spacing"), u = ue("radius"), m = ue("shadow"), f = ue("inset-shadow"), d = ue("text-shadow"), v = ue("drop-shadow"), b = ue("blur"), p = ue("perspective"), g = ue("aspect"), x = ue("ease"), y = ue("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], j = () => [...C(), V, B], A = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], S = () => [V, B, l], O = () => [ht, "full", "auto", ...S()], P = () => [Ue, "none", "subgrid", V, B], N = () => ["auto", {
    span: ["full", Ue, V, B]
  }, Ue, V, B], T = () => [Ue, "auto", V, B], D = () => ["auto", "min", "max", "fr", V, B], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...S()], U = () => [ht, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], M = () => [e, V, B], I = () => [...C(), mo, fo, {
    position: [V, B]
  }], E = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], z = () => ["auto", "cover", "contain", vu, hu, {
    size: [V, B]
  }], K = () => [Vr, Lt, rt], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    V,
    B
  ], Q = () => ["", X, Lt, rt], se = () => ["solid", "dashed", "dotted", "double"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => [X, Vr, mo, fo], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    V,
    B
  ], Z = () => ["none", X, V, B], J = () => ["none", X, V, B], te = () => [X, V, B], re = () => [ht, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Fe],
      breakpoint: [Fe],
      color: [lu],
      container: [Fe],
      "drop-shadow": [Fe],
      ease: ["in", "out", "in-out"],
      font: [mu],
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
        aspect: ["auto", "square", ht, B, V, g]
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
        columns: [X, B, V, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
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
        object: j()
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [Ue, "auto", V, B]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ht, "full", "auto", c, ...S()]
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
        flex: [X, ht, "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", X, V, B]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", X, V, B]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ue, "first", "last", "none", V, B]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": P()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: N()
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
        "grid-rows": P()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: N()
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
        "auto-cols": D()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": D()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
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
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
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
        items: [...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), {
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
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: _()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: _()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: _()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: _()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: _()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: _()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: _()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: _()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: _()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
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
        "space-y": S()
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
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...U()]
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
          ...U()
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
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Lt, rt]
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
        font: [n, V, $r]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Vr, B]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [gu, B, t]
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
        tracking: [s, V, B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [X, "none", V, $r]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V, B]
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
        list: ["disc", "decimal", "none", V, B]
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
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
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
        decoration: [X, "from-font", "auto", V, rt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [X, "auto", V, B]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, B]
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
        content: ["none", V, B]
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
        bg: z()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ue, V, B],
          radial: ["", V, B],
          conic: [Ue, V, B]
        }, xu, pu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
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
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
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
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
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
        "outline-offset": [X, V, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", X, Lt, rt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
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
          m,
          tr,
          er
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, tr, er]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
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
        ring: M()
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
        "ring-offset": M()
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
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", d, tr, er]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [X, V, B]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ie(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
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
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": L()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": L()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": L()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": L()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": L()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": L()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [V, B]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
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
        "mask-radial-at": C()
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
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
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
        mask: z()
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
        mask: ["none", V, B]
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
          V,
          B
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [X, V, B]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [X, V, B]
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
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", X, V, B]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [X, V, B]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", X, V, B]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [X, V, B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", X, V, B]
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
          V,
          B
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [X, V, B]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [X, V, B]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", X, V, B]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [X, V, B]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", X, V, B]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [X, V, B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X, V, B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", X, V, B]
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
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, B]
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
        duration: [X, "initial", V, B]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, V, B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [X, V, B]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, V, B]
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
        perspective: [p, V, B]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": j()
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
        transform: [V, B, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: j()
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
        accent: M()
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
        caret: M()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, B]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", V, B]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, Lt, rt, $r]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
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
}, Cu = /* @__PURE__ */ ru(wu);
function ee(...e) {
  return Cu(bs(e));
}
const As = $l, Rn = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  gs,
  {
    ref: r,
    className: ee(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Rn.displayName = gs.displayName;
const We = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  vs,
  {
    ref: r,
    className: ee(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
We.displayName = vs.displayName;
const Ke = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  xs,
  {
    ref: r,
    className: ee(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ke.displayName = xs.displayName;
const ve = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
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
ve.displayName = "Card";
const xe = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
xe.displayName = "CardHeader";
const ye = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ye.displayName = "CardTitle";
const Nu = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("text-sm text-muted-foreground", e),
    ...t
  }
));
Nu.displayName = "CardDescription";
const be = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: ee("p-6 pt-0", e), ...t }));
be.displayName = "CardContent";
const ju = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("flex items-center p-6 pt-0", e),
    ...t
  }
));
ju.displayName = "CardFooter";
var ku = "Label", Ps = h.forwardRef((e, t) => /* @__PURE__ */ o.jsx(
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
Ps.displayName = ku;
var _s = Ps;
const ho = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, po = bs, Tn = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return po(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: a } = t, i = Object.keys(s).map((u) => {
    const m = r == null ? void 0 : r[u], f = a == null ? void 0 : a[u];
    if (m === null) return null;
    const d = ho(m) || ho(f);
    return s[u][d];
  }), c = r && Object.entries(r).reduce((u, m) => {
    let [f, d] = m;
    return d === void 0 || (u[f] = d), u;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, m) => {
    let { class: f, className: d, ...v } = m;
    return Object.entries(v).every((b) => {
      let [p, g] = b;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...c
      }[p]) : {
        ...a,
        ...c
      }[p] === g;
    }) ? [
      ...u,
      f,
      d
    ] : u;
  }, []);
  return po(e, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Eu = Tn(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), G = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  _s,
  {
    ref: r,
    className: ee(Eu(), e),
    ...t
  }
));
G.displayName = _s.displayName;
function hr(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function An(e) {
  const t = h.useRef({ value: e, previous: e });
  return h.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Pn(e) {
  const [t, r] = h.useState(void 0);
  return me(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const a = s[0];
        let i, c;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, c = u.blockSize;
        } else
          i = e.offsetWidth, c = e.offsetHeight;
        r({ width: i, height: c });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Is = ["PageUp", "PageDown"], Ds = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Os = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Mt = "Slider", [cn, Su, Mu] = Nr(Mt), [Ls, N0] = $e(Mt, [
  Mu
]), [Ru, Er] = Ls(Mt), Fs = h.forwardRef(
  (e, t) => {
    const {
      name: r,
      min: n = 0,
      max: s = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: c = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: u = [n],
      value: m,
      onValueChange: f = () => {
      },
      onValueCommit: d = () => {
      },
      inverted: v = !1,
      form: b,
      ...p
    } = e, g = h.useRef(/* @__PURE__ */ new Set()), x = h.useRef(0), w = i === "horizontal" ? Tu : Au, [C = [], j] = it({
      prop: m,
      defaultProp: u,
      onChange: (N) => {
        var D;
        (D = [...g.current][x.current]) == null || D.focus(), f(N);
      }
    }), A = h.useRef(C);
    function R(N) {
      const T = Ou(C, N);
      P(N, T);
    }
    function S(N) {
      P(N, x.current);
    }
    function O() {
      const N = A.current[x.current];
      C[x.current] !== N && d(C);
    }
    function P(N, T, { commit: D } = { commit: !1 }) {
      const F = Bu(a), $ = Vu(Math.round((N - n) / a) * a + n, F), _ = hr($, [n, s]);
      j((U = []) => {
        const M = Iu(U, _, T);
        if (zu(M, l * a)) {
          x.current = M.indexOf(_);
          const I = String(M) !== String(U);
          return I && D && d(M), I ? M : U;
        } else
          return U;
      });
    }
    return /* @__PURE__ */ o.jsx(
      Ru,
      {
        scope: e.__scopeSlider,
        name: r,
        disabled: c,
        min: n,
        max: s,
        valueIndexToChangeRef: x,
        thumbs: g.current,
        values: C,
        orientation: i,
        form: b,
        children: /* @__PURE__ */ o.jsx(cn.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(cn.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(
          w,
          {
            "aria-disabled": c,
            "data-disabled": c ? "" : void 0,
            ...p,
            ref: t,
            onPointerDown: H(p.onPointerDown, () => {
              c || (A.current = C);
            }),
            min: n,
            max: s,
            inverted: v,
            onSlideStart: c ? void 0 : R,
            onSlideMove: c ? void 0 : S,
            onSlideEnd: c ? void 0 : O,
            onHomeKeyDown: () => !c && P(n, 0, { commit: !0 }),
            onEndKeyDown: () => !c && P(s, C.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: N, direction: T }) => {
              if (!c) {
                const $ = Is.includes(N.key) || N.shiftKey && Ds.includes(N.key) ? 10 : 1, _ = x.current, U = C[_], M = a * $ * T;
                P(U + M, _, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Fs.displayName = Mt;
var [zs, Bs] = Ls(Mt, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Tu = h.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      dir: s,
      inverted: a,
      onSlideStart: i,
      onSlideMove: c,
      onSlideEnd: l,
      onStepKeyDown: u,
      ...m
    } = e, [f, d] = h.useState(null), v = oe(t, (w) => d(w)), b = h.useRef(void 0), p = Gt(s), g = p === "ltr", x = g && !a || !g && a;
    function y(w) {
      const C = b.current || f.getBoundingClientRect(), j = [0, C.width], R = _n(j, x ? [r, n] : [n, r]);
      return b.current = C, R(w - C.left);
    }
    return /* @__PURE__ */ o.jsx(
      zs,
      {
        scope: e.__scopeSlider,
        startEdge: x ? "left" : "right",
        endEdge: x ? "right" : "left",
        direction: x ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ o.jsx(
          Vs,
          {
            dir: p,
            "data-orientation": "horizontal",
            ...m,
            ref: v,
            style: {
              ...m.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (w) => {
              const C = y(w.clientX);
              i == null || i(C);
            },
            onSlideMove: (w) => {
              const C = y(w.clientX);
              c == null || c(C);
            },
            onSlideEnd: () => {
              b.current = void 0, l == null || l();
            },
            onStepKeyDown: (w) => {
              const j = Os[x ? "from-left" : "from-right"].includes(w.key);
              u == null || u({ event: w, direction: j ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Au = h.forwardRef(
  (e, t) => {
    const {
      min: r,
      max: n,
      inverted: s,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: c,
      onStepKeyDown: l,
      ...u
    } = e, m = h.useRef(null), f = oe(t, m), d = h.useRef(void 0), v = !s;
    function b(p) {
      const g = d.current || m.current.getBoundingClientRect(), x = [0, g.height], w = _n(x, v ? [n, r] : [r, n]);
      return d.current = g, w(p - g.top);
    }
    return /* @__PURE__ */ o.jsx(
      zs,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ o.jsx(
          Vs,
          {
            "data-orientation": "vertical",
            ...u,
            ref: f,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (p) => {
              const g = b(p.clientY);
              a == null || a(g);
            },
            onSlideMove: (p) => {
              const g = b(p.clientY);
              i == null || i(g);
            },
            onSlideEnd: () => {
              d.current = void 0, c == null || c();
            },
            onStepKeyDown: (p) => {
              const x = Os[v ? "from-bottom" : "from-top"].includes(p.key);
              l == null || l({ event: p, direction: x ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Vs = h.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: r,
      onSlideStart: n,
      onSlideMove: s,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: c,
      onStepKeyDown: l,
      ...u
    } = e, m = Er(Mt, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        ...u,
        ref: t,
        onKeyDown: H(e.onKeyDown, (f) => {
          f.key === "Home" ? (i(f), f.preventDefault()) : f.key === "End" ? (c(f), f.preventDefault()) : Is.concat(Ds).includes(f.key) && (l(f), f.preventDefault());
        }),
        onPointerDown: H(e.onPointerDown, (f) => {
          const d = f.target;
          d.setPointerCapture(f.pointerId), f.preventDefault(), m.thumbs.has(d) ? d.focus() : n(f);
        }),
        onPointerMove: H(e.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && s(f);
        }),
        onPointerUp: H(e.onPointerUp, (f) => {
          const d = f.target;
          d.hasPointerCapture(f.pointerId) && (d.releasePointerCapture(f.pointerId), a(f));
        })
      }
    );
  }
), $s = "SliderTrack", Hs = h.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, s = Er($s, r);
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
Hs.displayName = $s;
var ln = "SliderRange", Us = h.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, ...n } = e, s = Er(ln, r), a = Bs(ln, r), i = h.useRef(null), c = oe(t, i), l = s.values.length, u = s.values.map(
      (d) => Ks(d, s.min, s.max)
    ), m = l > 1 ? Math.min(...u) : 0, f = 100 - Math.max(...u);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: c,
        style: {
          ...e.style,
          [a.startEdge]: m + "%",
          [a.endEdge]: f + "%"
        }
      }
    );
  }
);
Us.displayName = ln;
var un = "SliderThumb", Gs = h.forwardRef(
  (e, t) => {
    const r = Su(e.__scopeSlider), [n, s] = h.useState(null), a = oe(t, (c) => s(c)), i = h.useMemo(
      () => n ? r().findIndex((c) => c.ref.current === n) : -1,
      [r, n]
    );
    return /* @__PURE__ */ o.jsx(Pu, { ...e, ref: a, index: i });
  }
), Pu = h.forwardRef(
  (e, t) => {
    const { __scopeSlider: r, index: n, name: s, ...a } = e, i = Er(un, r), c = Bs(un, r), [l, u] = h.useState(null), m = oe(t, (y) => u(y)), f = l ? i.form || !!l.closest("form") : !0, d = Pn(l), v = i.values[n], b = v === void 0 ? 0 : Ks(v, i.min, i.max), p = Du(n, i.values.length), g = d == null ? void 0 : d[c.size], x = g ? Lu(g, b, c.direction) : 0;
    return h.useEffect(() => {
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
          [c.startEdge]: `calc(${b}% + ${x}px)`
        },
        children: [
          /* @__PURE__ */ o.jsx(cn.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ o.jsx(
            Y.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || p,
              "aria-valuemin": i.min,
              "aria-valuenow": v,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: m,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: H(e.onFocus, () => {
                i.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          f && /* @__PURE__ */ o.jsx(
            Ws,
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
Gs.displayName = un;
var _u = "RadioBubbleInput", Ws = h.forwardRef(
  ({ __scopeSlider: e, value: t, ...r }, n) => {
    const s = h.useRef(null), a = oe(s, n), i = An(t);
    return h.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const l = window.HTMLInputElement.prototype, m = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== t && m) {
        const f = new Event("input", { bubbles: !0 });
        m.call(c, t), c.dispatchEvent(f);
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
Ws.displayName = _u;
function Iu(e = [], t, r) {
  const n = [...e];
  return n[r] = t, n.sort((s, a) => s - a);
}
function Ks(e, t, r) {
  const a = 100 / (r - t) * (e - t);
  return hr(a, [0, 100]);
}
function Du(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Ou(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((s) => Math.abs(s - t)), n = Math.min(...r);
  return r.indexOf(n);
}
function Lu(e, t, r) {
  const n = e / 2, a = _n([0, 50], [0, n]);
  return (n - a(t) * r) * r;
}
function Fu(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function zu(e, t) {
  if (t > 0) {
    const r = Fu(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function _n(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Bu(e) {
  return (String(e).split(".")[1] || "").length;
}
function Vu(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var qs = Fs, $u = Hs, Hu = Us, Uu = Gs;
const Ae = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsxs(
  qs,
  {
    ref: r,
    className: ee(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx($u, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ o.jsx(Hu, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ o.jsx(Uu, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Ae.displayName = qs.displayName;
function Gu({ planetStats: e, setPlanetStats: t }) {
  const r = dt(e.mass, e.radius), n = (c, l) => {
    t({
      ...e,
      [c]: l
    });
  }, s = typeof e.mass == "number" ? e.mass : Number(e.mass) || 0, a = typeof e.radius == "number" ? e.radius : Number(e.radius) || 0, i = typeof e.density == "number" ? e.density : Number(e.density) || 0;
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "MASS PROPERTIES" }) }),
      /* @__PURE__ */ o.jsxs(be, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Mass (Earth masses)" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: s.toFixed(2) })
          ] }),
          /* @__PURE__ */ o.jsx(
            Ae,
            {
              value: [s],
              min: 0.1,
              max: 15,
              step: 0.1,
              onValueChange: (c) => n("mass", c[0]),
              className: "[&_[role=slider]]:bg-cyan-400"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Radius (Earth radii)" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: a.toFixed(2) })
          ] }),
          /* @__PURE__ */ o.jsx(
            Ae,
            {
              value: [a],
              min: 0.1,
              max: 10,
              step: 0.1,
              onValueChange: (c) => n("radius", c[0]),
              className: "[&_[role=slider]]:bg-cyan-400"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Density (g/cm³)" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: i ? i.toFixed(2) : "N/A" })
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-slate-400", children: "Calculated from mass and radius" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "THERMAL PROPERTIES" }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Temperature (K)" }),
          /* @__PURE__ */ o.jsxs("span", { className: "font-bold", children: [
            Number(e.temperature),
            " K (",
            (Number(e.temperature) - 273.15).toFixed(1),
            "°C)"
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          Ae,
          {
            value: [Number(e.temperature)],
            min: 50,
            max: 700,
            step: 1,
            onValueChange: (c) => n("temperature", c[0]),
            className: "[&_[role=slider]]:bg-cyan-400"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "CLASSIFICATION" }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Planet Type" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-sm capitalize font-bold", children: r })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-slate-400", children: r === "gaseous" ? "Gas giants have mass > 7 Earth masses or radius > 2.5 Earth radii" : "Terrestrial planets have smaller mass and radius" })
      ] }) })
    ] })
  ] });
}
var Sr = "Switch", [Wu, j0] = $e(Sr), [Ku, qu] = Wu(Sr), Ys = h.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      value: l = "on",
      onCheckedChange: u,
      form: m,
      ...f
    } = e, [d, v] = h.useState(null), b = oe(t, (w) => v(w)), p = h.useRef(!1), g = d ? m || !!d.closest("form") : !0, [x, y] = it({
      prop: s,
      defaultProp: a ?? !1,
      onChange: u,
      caller: Sr
    });
    return /* @__PURE__ */ o.jsxs(Ku, { scope: r, checked: x, disabled: c, children: [
      /* @__PURE__ */ o.jsx(
        Y.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": i,
          "data-state": Qs(x),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: l,
          ...f,
          ref: b,
          onClick: H(e.onClick, (w) => {
            y((C) => !C), g && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ o.jsx(
        Js,
        {
          control: d,
          bubbles: !p.current,
          name: n,
          value: l,
          checked: x,
          required: i,
          disabled: c,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ys.displayName = Sr;
var Xs = "SwitchThumb", Zs = h.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, s = qu(Xs, r);
    return /* @__PURE__ */ o.jsx(
      Y.span,
      {
        "data-state": Qs(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Zs.displayName = Xs;
var Yu = "SwitchBubbleInput", Js = h.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...s
  }, a) => {
    const i = h.useRef(null), c = oe(i, a), l = An(r), u = Pn(t);
    return h.useEffect(() => {
      const m = i.current;
      if (!m) return;
      const f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== r && v) {
        const b = new Event("click", { bubbles: n });
        v.call(m, r), m.dispatchEvent(b);
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
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Js.displayName = Yu;
function Qs(e) {
  return e ? "checked" : "unchecked";
}
var ea = Ys, Xu = Zs;
const ta = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  ea,
  {
    className: ee(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ o.jsx(
      Xu,
      {
        className: ee(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
ta.displayName = ea.displayName;
function Zu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e);
  h.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Ju = "DismissableLayer", dn = "dismissableLayer.update", Qu = "dismissableLayer.pointerDownOutside", ed = "dismissableLayer.focusOutside", go, ra = h.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), In = h.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: c,
      ...l
    } = e, u = h.useContext(ra), [m, f] = h.useState(null), d = (m == null ? void 0 : m.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = h.useState({}), b = oe(t, (R) => f(R)), p = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = p.indexOf(g), y = m ? p.indexOf(m) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= x, j = nd((R) => {
      const S = R.target, O = [...u.branches].some((P) => P.contains(S));
      !C || O || (s == null || s(R), i == null || i(R), R.defaultPrevented || c == null || c());
    }, d), A = od((R) => {
      const S = R.target;
      [...u.branches].some((P) => P.contains(S)) || (a == null || a(R), i == null || i(R), R.defaultPrevented || c == null || c());
    }, d);
    return Zu((R) => {
      y === u.layers.size - 1 && (n == null || n(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
    }, d), h.useEffect(() => {
      if (m)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (go = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(m)), u.layers.add(m), vo(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = go);
        };
    }, [m, d, r, u]), h.useEffect(() => () => {
      m && (u.layers.delete(m), u.layersWithOutsidePointerEventsDisabled.delete(m), vo());
    }, [m, u]), h.useEffect(() => {
      const R = () => v({});
      return document.addEventListener(dn, R), () => document.removeEventListener(dn, R);
    }, []), /* @__PURE__ */ o.jsx(
      Y.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: w ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          j.onPointerDownCapture
        )
      }
    );
  }
);
In.displayName = Ju;
var td = "DismissableLayerBranch", rd = h.forwardRef((e, t) => {
  const r = h.useContext(ra), n = h.useRef(null), s = oe(t, n);
  return h.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ o.jsx(Y.div, { ...e, ref: s });
});
rd.displayName = td;
function nd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e), n = h.useRef(!1), s = h.useRef(() => {
  });
  return h.useEffect(() => {
    const a = (c) => {
      if (c.target && !n.current) {
        let l = function() {
          na(
            Qu,
            r,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: c };
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
function od(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = De(e), n = h.useRef(!1);
  return h.useEffect(() => {
    const s = (a) => {
      a.target && !n.current && na(ed, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function vo() {
  const e = new CustomEvent(dn);
  document.dispatchEvent(e);
}
function na(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), n ? Jo(s, a) : s.dispatchEvent(a);
}
var Hr = 0;
function oa() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? xo()), document.body.insertAdjacentElement("beforeend", e[1] ?? xo()), Hr++, () => {
      Hr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Hr--;
    };
  }, []);
}
function xo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ur = "focusScope.autoFocusOnMount", Gr = "focusScope.autoFocusOnUnmount", yo = { bubbles: !1, cancelable: !0 }, sd = "FocusScope", Dn = h.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: a,
    ...i
  } = e, [c, l] = h.useState(null), u = De(s), m = De(a), f = h.useRef(null), d = oe(t, (p) => l(p)), v = h.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.useEffect(() => {
    if (n) {
      let p = function(w) {
        if (v.paused || !c) return;
        const C = w.target;
        c.contains(C) ? f.current = C : Ge(f.current, { select: !0 });
      }, g = function(w) {
        if (v.paused || !c) return;
        const C = w.relatedTarget;
        C !== null && (c.contains(C) || Ge(f.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const j of w)
            j.removedNodes.length > 0 && Ge(c);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const y = new MutationObserver(x);
      return c && y.observe(c, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [n, c, v.paused]), h.useEffect(() => {
    if (c) {
      wo.add(v);
      const p = document.activeElement;
      if (!c.contains(p)) {
        const x = new CustomEvent(Ur, yo);
        c.addEventListener(Ur, u), c.dispatchEvent(x), x.defaultPrevented || (ad(dd(sa(c)), { select: !0 }), document.activeElement === p && Ge(c));
      }
      return () => {
        c.removeEventListener(Ur, u), setTimeout(() => {
          const x = new CustomEvent(Gr, yo);
          c.addEventListener(Gr, m), c.dispatchEvent(x), x.defaultPrevented || Ge(p ?? document.body, { select: !0 }), c.removeEventListener(Gr, m), wo.remove(v);
        }, 0);
      };
    }
  }, [c, u, m, v]);
  const b = h.useCallback(
    (p) => {
      if (!r && !n || v.paused) return;
      const g = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, x = document.activeElement;
      if (g && x) {
        const y = p.currentTarget, [w, C] = id(y);
        w && C ? !p.shiftKey && x === C ? (p.preventDefault(), r && Ge(w, { select: !0 })) : p.shiftKey && x === w && (p.preventDefault(), r && Ge(C, { select: !0 })) : x === y && p.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ o.jsx(Y.div, { tabIndex: -1, ...i, ref: d, onKeyDown: b });
});
Dn.displayName = sd;
function ad(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Ge(n, { select: t }), document.activeElement !== r) return;
}
function id(e) {
  const t = sa(e), r = bo(t, e), n = bo(t.reverse(), e);
  return [r, n];
}
function sa(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function bo(e, t) {
  for (const r of e)
    if (!cd(r, { upTo: t })) return r;
}
function cd(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ld(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ge(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && ld(e) && t && e.select();
  }
}
var wo = ud();
function ud() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Co(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Co(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function Co(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function dd(e) {
  return e.filter((t) => t.tagName !== "A");
}
const fd = ["top", "right", "bottom", "left"], Ze = Math.min, Ce = Math.max, pr = Math.round, rr = Math.floor, Ie = (e) => ({
  x: e,
  y: e
}), md = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, hd = {
  start: "end",
  end: "start"
};
function fn(e, t, r) {
  return Ce(e, Ze(t, r));
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
function On(e) {
  return e === "x" ? "y" : "x";
}
function Ln(e) {
  return e === "y" ? "height" : "width";
}
function ze(e) {
  return ["top", "bottom"].includes(Ve(e)) ? "y" : "x";
}
function Fn(e) {
  return On(ze(e));
}
function pd(e, t, r) {
  r === void 0 && (r = !1);
  const n = Rt(e), s = Fn(e), a = Ln(s);
  let i = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = gr(i)), [i, gr(i)];
}
function gd(e) {
  const t = gr(e);
  return [mn(e), t, mn(t)];
}
function mn(e) {
  return e.replace(/start|end/g, (t) => hd[t]);
}
function vd(e, t, r) {
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
function xd(e, t, r, n) {
  const s = Rt(e);
  let a = vd(Ve(e), r === "start", n);
  return s && (a = a.map((i) => i + "-" + s), t && (a = a.concat(a.map(mn)))), a;
}
function gr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => md[t]);
}
function yd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function aa(e) {
  return typeof e != "number" ? yd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vr(e) {
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
function No(e, t, r) {
  let {
    reference: n,
    floating: s
  } = e;
  const a = ze(t), i = Fn(t), c = Ln(i), l = Ve(t), u = a === "y", m = n.x + n.width / 2 - s.width / 2, f = n.y + n.height / 2 - s.height / 2, d = n[c] / 2 - s[c] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: m,
        y: n.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: m,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: n.x - s.width,
        y: f
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
      v[i] -= d * (r && u ? -1 : 1);
      break;
    case "end":
      v[i] += d * (r && u ? -1 : 1);
      break;
  }
  return v;
}
const bd = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: i
  } = r, c = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: m,
    y: f
  } = No(u, n, l), d = n, v = {}, b = 0;
  for (let p = 0; p < c.length; p++) {
    const {
      name: g,
      fn: x
    } = c[p], {
      x: y,
      y: w,
      data: C,
      reset: j
    } = await x({
      x: m,
      y: f,
      initialPlacement: n,
      placement: d,
      strategy: s,
      middlewareData: v,
      rects: u,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = y ?? m, f = w ?? f, v = {
      ...v,
      [g]: {
        ...v[g],
        ...C
      }
    }, j && b <= 50 && (b++, typeof j == "object" && (j.placement && (d = j.placement), j.rects && (u = j.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : j.rects), {
      x: m,
      y: f
    } = No(u, d, l)), p = -1);
  }
  return {
    x: m,
    y: f,
    placement: d,
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
    boundary: u = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: v = 0
  } = Be(t, e), b = aa(v), g = c[d ? f === "floating" ? "reference" : "floating" : f], x = vr(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(g))) == null || r ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: m,
    strategy: l
  })), y = f === "floating" ? {
    x: n,
    y: s,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), C = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = vr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: y,
    offsetParent: w,
    strategy: l
  }) : y);
  return {
    top: (x.top - j.top + b.top) / C.y,
    bottom: (j.bottom - x.bottom + b.bottom) / C.y,
    left: (x.left - j.left + b.left) / C.x,
    right: (j.right - x.right + b.right) / C.x
  };
}
const wd = (e) => ({
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
      element: u,
      padding: m = 0
    } = Be(e, t) || {};
    if (u == null)
      return {};
    const f = aa(m), d = {
      x: r,
      y: n
    }, v = Fn(s), b = Ln(v), p = await i.getDimensions(u), g = v === "y", x = g ? "top" : "left", y = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", C = a.reference[b] + a.reference[v] - d[v] - a.floating[b], j = d[v] - a.reference[v], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let R = A ? A[w] : 0;
    (!R || !await (i.isElement == null ? void 0 : i.isElement(A))) && (R = c.floating[w] || a.floating[b]);
    const S = C / 2 - j / 2, O = R / 2 - p[b] / 2 - 1, P = Ze(f[x], O), N = Ze(f[y], O), T = P, D = R - p[b] - N, F = R / 2 - p[b] / 2 + S, $ = fn(T, F, D), _ = !l.arrow && Rt(s) != null && F !== $ && a.reference[b] / 2 - (F < T ? P : N) - p[b] / 2 < 0, U = _ ? F < T ? F - T : F - D : 0;
    return {
      [v]: d[v] + U,
      data: {
        [v]: $,
        centerOffset: F - $ - U,
        ..._ && {
          alignmentOffset: U
        }
      },
      reset: _
    };
  }
}), Cd = function(e) {
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
        elements: u
      } = t, {
        mainAxis: m = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: p = !0,
        ...g
      } = Be(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const x = Ve(s), y = ze(c), w = Ve(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), j = d || (w || !p ? [gr(c)] : gd(c)), A = b !== "none";
      !d && A && j.push(...xd(c, p, b, C));
      const R = [c, ...j], S = await Vt(t, g), O = [];
      let P = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (m && O.push(S[x]), f) {
        const $ = pd(s, i, C);
        O.push(S[$[0]], S[$[1]]);
      }
      if (P = [...P, {
        placement: s,
        overflows: O
      }], !O.every(($) => $ <= 0)) {
        var N, T;
        const $ = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, _ = R[$];
        if (_) {
          var D;
          const M = f === "alignment" ? y !== ze(_) : !1, I = ((D = P[0]) == null ? void 0 : D.overflows[0]) > 0;
          if (!M || I)
            return {
              data: {
                index: $,
                overflows: P
              },
              reset: {
                placement: _
              }
            };
        }
        let U = (T = P.filter((M) => M.overflows[0] <= 0).sort((M, I) => M.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!U)
          switch (v) {
            case "bestFit": {
              var F;
              const M = (F = P.filter((I) => {
                if (A) {
                  const E = ze(I.placement);
                  return E === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  E === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((E) => E > 0).reduce((E, z) => E + z, 0)]).sort((I, E) => I[1] - E[1])[0]) == null ? void 0 : F[0];
              M && (U = M);
              break;
            }
            case "initialPlacement":
              U = c;
              break;
          }
        if (s !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function jo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ko(e) {
  return fd.some((t) => e[t] >= 0);
}
const Nd = function(e) {
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
          const a = await Vt(t, {
            ...s,
            elementContext: "reference"
          }), i = jo(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ko(i)
            }
          };
        }
        case "escaped": {
          const a = await Vt(t, {
            ...s,
            altBoundary: !0
          }), i = jo(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ko(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function jd(e, t) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), i = Ve(r), c = Rt(r), l = ze(r) === "y", u = ["left", "top"].includes(i) ? -1 : 1, m = a && l ? -1 : 1, f = Be(t, e);
  let {
    mainAxis: d,
    crossAxis: v,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return c && typeof b == "number" && (v = c === "end" ? b * -1 : b), l ? {
    x: v * m,
    y: d * u
  } : {
    x: d * u,
    y: v * m
  };
}
const kd = function(e) {
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
      } = t, l = await jd(t, e);
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
}, Ed = function(e) {
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
          fn: (g) => {
            let {
              x,
              y
            } = g;
            return {
              x,
              y
            };
          }
        },
        ...l
      } = Be(e, t), u = {
        x: r,
        y: n
      }, m = await Vt(t, l), f = ze(Ve(s)), d = On(f);
      let v = u[d], b = u[f];
      if (a) {
        const g = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", y = v + m[g], w = v - m[x];
        v = fn(y, v, w);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", y = b + m[g], w = b - m[x];
        b = fn(y, b, w);
      }
      const p = c.fn({
        ...t,
        [d]: v,
        [f]: b
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - n,
          enabled: {
            [d]: a,
            [f]: i
          }
        }
      };
    }
  };
}, Sd = function(e) {
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
        crossAxis: u = !0
      } = Be(e, t), m = {
        x: r,
        y: n
      }, f = ze(s), d = On(f);
      let v = m[d], b = m[f];
      const p = Be(c, t), g = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const w = d === "y" ? "height" : "width", C = a.reference[d] - a.floating[w] + g.mainAxis, j = a.reference[d] + a.reference[w] - g.mainAxis;
        v < C ? v = C : v > j && (v = j);
      }
      if (u) {
        var x, y;
        const w = d === "y" ? "width" : "height", C = ["top", "left"].includes(Ve(s)), j = a.reference[f] - a.floating[w] + (C && ((x = i.offset) == null ? void 0 : x[f]) || 0) + (C ? 0 : g.crossAxis), A = a.reference[f] + a.reference[w] + (C ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) - (C ? g.crossAxis : 0);
        b < j ? b = j : b > A && (b = A);
      }
      return {
        [d]: v,
        [f]: b
      };
    }
  };
}, Md = function(e) {
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
        ...u
      } = Be(e, t), m = await Vt(t, u), f = Ve(s), d = Rt(s), v = ze(s) === "y", {
        width: b,
        height: p
      } = a.floating;
      let g, x;
      f === "top" || f === "bottom" ? (g = f, x = d === (await (i.isRTL == null ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (x = f, g = d === "end" ? "top" : "bottom");
      const y = p - m.top - m.bottom, w = b - m.left - m.right, C = Ze(p - m[g], y), j = Ze(b - m[x], w), A = !t.middlewareData.shift;
      let R = C, S = j;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (S = w), (n = t.middlewareData.shift) != null && n.enabled.y && (R = y), A && !d) {
        const P = Ce(m.left, 0), N = Ce(m.right, 0), T = Ce(m.top, 0), D = Ce(m.bottom, 0);
        v ? S = b - 2 * (P !== 0 || N !== 0 ? P + N : Ce(m.left, m.right)) : R = p - 2 * (T !== 0 || D !== 0 ? T + D : Ce(m.top, m.bottom));
      }
      await l({
        ...t,
        availableWidth: S,
        availableHeight: R
      });
      const O = await i.getDimensions(c.floating);
      return b !== O.width || p !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Mr() {
  return typeof window < "u";
}
function Tt(e) {
  return ia(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Le(e) {
  var t;
  return (t = (ia(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ia(e) {
  return Mr() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Ee(e) {
  return Mr() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function Oe(e) {
  return Mr() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function Eo(e) {
  return !Mr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function Kt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: s
  } = Se(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(s);
}
function Rd(e) {
  return ["table", "td", "th"].includes(Tt(e));
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
function zn(e) {
  const t = Bn(), r = Ee(e) ? Se(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function Td(e) {
  let t = Je(e);
  for (; Oe(t) && !Ct(t); ) {
    if (zn(t))
      return t;
    if (Rr(t))
      return null;
    t = Je(t);
  }
  return null;
}
function Bn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(e) {
  return ["html", "body", "#document"].includes(Tt(e));
}
function Se(e) {
  return Ne(e).getComputedStyle(e);
}
function Tr(e) {
  return Ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Je(e) {
  if (Tt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Eo(e) && e.host || // Fallback.
    Le(e)
  );
  return Eo(t) ? t.host : t;
}
function ca(e) {
  const t = Je(e);
  return Ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && Kt(t) ? t : ca(t);
}
function $t(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = ca(e), a = s === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ne(s);
  if (a) {
    const c = hn(i);
    return t.concat(i, i.visualViewport || [], Kt(s) ? s : [], c && r ? $t(c) : []);
  }
  return t.concat(s, $t(s, [], r));
}
function hn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function la(e) {
  const t = Se(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const s = Oe(e), a = s ? e.offsetWidth : r, i = s ? e.offsetHeight : n, c = pr(r) !== a || pr(n) !== i;
  return c && (r = a, n = i), {
    width: r,
    height: n,
    $: c
  };
}
function Vn(e) {
  return Ee(e) ? e : e.contextElement;
}
function xt(e) {
  const t = Vn(e);
  if (!Oe(t))
    return Ie(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: s,
    $: a
  } = la(t);
  let i = (a ? pr(r.width) : r.width) / n, c = (a ? pr(r.height) : r.height) / s;
  return (!i || !Number.isFinite(i)) && (i = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: i,
    y: c
  };
}
const Ad = /* @__PURE__ */ Ie(0);
function ua(e) {
  const t = Ne(e);
  return !Bn() || !t.visualViewport ? Ad : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pd(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ne(e) ? !1 : t;
}
function ct(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), a = Vn(e);
  let i = Ie(1);
  t && (n ? Ee(n) && (i = xt(n)) : i = xt(e));
  const c = Pd(a, r, n) ? ua(a) : Ie(0);
  let l = (s.left + c.x) / i.x, u = (s.top + c.y) / i.y, m = s.width / i.x, f = s.height / i.y;
  if (a) {
    const d = Ne(a), v = n && Ee(n) ? Ne(n) : n;
    let b = d, p = hn(b);
    for (; p && n && v !== b; ) {
      const g = xt(p), x = p.getBoundingClientRect(), y = Se(p), w = x.left + (p.clientLeft + parseFloat(y.paddingLeft)) * g.x, C = x.top + (p.clientTop + parseFloat(y.paddingTop)) * g.y;
      l *= g.x, u *= g.y, m *= g.x, f *= g.y, l += w, u += C, b = Ne(p), p = hn(b);
    }
  }
  return vr({
    width: m,
    height: f,
    x: l,
    y: u
  });
}
function $n(e, t) {
  const r = Tr(e).scrollLeft;
  return t ? t.left + r : ct(Le(e)).left + r;
}
function da(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), s = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    $n(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: s,
    y: a
  };
}
function _d(e) {
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
  }, u = Ie(1);
  const m = Ie(0), f = Oe(n);
  if ((f || !f && !a) && ((Tt(n) !== "body" || Kt(i)) && (l = Tr(n)), Oe(n))) {
    const v = ct(n);
    u = xt(n), m.x = v.x + n.clientLeft, m.y = v.y + n.clientTop;
  }
  const d = i && !f && !a ? da(i, l, !0) : Ie(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + m.x + d.x,
    y: r.y * u.y - l.scrollTop * u.y + m.y + d.y
  };
}
function Id(e) {
  return Array.from(e.getClientRects());
}
function Dd(e) {
  const t = Le(e), r = Tr(e), n = e.ownerDocument.body, s = Ce(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Ce(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -r.scrollLeft + $n(e);
  const c = -r.scrollTop;
  return Se(n).direction === "rtl" && (i += Ce(t.clientWidth, n.clientWidth) - s), {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
function Od(e, t) {
  const r = Ne(e), n = Le(e), s = r.visualViewport;
  let a = n.clientWidth, i = n.clientHeight, c = 0, l = 0;
  if (s) {
    a = s.width, i = s.height;
    const u = Bn();
    (!u || u && t === "fixed") && (c = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function Ld(e, t) {
  const r = ct(e, !0, t === "fixed"), n = r.top + e.clientTop, s = r.left + e.clientLeft, a = Oe(e) ? xt(e) : Ie(1), i = e.clientWidth * a.x, c = e.clientHeight * a.y, l = s * a.x, u = n * a.y;
  return {
    width: i,
    height: c,
    x: l,
    y: u
  };
}
function So(e, t, r) {
  let n;
  if (t === "viewport")
    n = Od(e, r);
  else if (t === "document")
    n = Dd(Le(e));
  else if (Ee(t))
    n = Ld(t, r);
  else {
    const s = ua(e);
    n = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return vr(n);
}
function fa(e, t) {
  const r = Je(e);
  return r === t || !Ee(r) || Ct(r) ? !1 : Se(r).position === "fixed" || fa(r, t);
}
function Fd(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = $t(e, [], !1).filter((c) => Ee(c) && Tt(c) !== "body"), s = null;
  const a = Se(e).position === "fixed";
  let i = a ? Je(e) : e;
  for (; Ee(i) && !Ct(i); ) {
    const c = Se(i), l = zn(i);
    !l && c.position === "fixed" && (s = null), (a ? !l && !s : !l && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || Kt(i) && !l && fa(e, i)) ? n = n.filter((m) => m !== i) : s = c, i = Je(i);
  }
  return t.set(e, n), n;
}
function zd(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = e;
  const i = [...r === "clippingAncestors" ? Rr(t) ? [] : Fd(t, this._c) : [].concat(r), n], c = i[0], l = i.reduce((u, m) => {
    const f = So(t, m, s);
    return u.top = Ce(f.top, u.top), u.right = Ze(f.right, u.right), u.bottom = Ze(f.bottom, u.bottom), u.left = Ce(f.left, u.left), u;
  }, So(t, c, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Bd(e) {
  const {
    width: t,
    height: r
  } = la(e);
  return {
    width: t,
    height: r
  };
}
function Vd(e, t, r) {
  const n = Oe(t), s = Le(t), a = r === "fixed", i = ct(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ie(0);
  function u() {
    l.x = $n(s);
  }
  if (n || !n && !a)
    if ((Tt(t) !== "body" || Kt(s)) && (c = Tr(t)), n) {
      const v = ct(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else s && u();
  a && !n && s && u();
  const m = s && !n && !a ? da(s, c) : Ie(0), f = i.left + c.scrollLeft - l.x - m.x, d = i.top + c.scrollTop - l.y - m.y;
  return {
    x: f,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Wr(e) {
  return Se(e).position === "static";
}
function Mo(e, t) {
  if (!Oe(e) || Se(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Le(e) === r && (r = r.ownerDocument.body), r;
}
function ma(e, t) {
  const r = Ne(e);
  if (Rr(e))
    return r;
  if (!Oe(e)) {
    let s = Je(e);
    for (; s && !Ct(s); ) {
      if (Ee(s) && !Wr(s))
        return s;
      s = Je(s);
    }
    return r;
  }
  let n = Mo(e, t);
  for (; n && Rd(n) && Wr(n); )
    n = Mo(n, t);
  return n && Ct(n) && Wr(n) && !zn(n) ? r : n || Td(e) || r;
}
const $d = async function(e) {
  const t = this.getOffsetParent || ma, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Vd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Hd(e) {
  return Se(e).direction === "rtl";
}
const Ud = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _d,
  getDocumentElement: Le,
  getClippingRect: zd,
  getOffsetParent: ma,
  getElementRects: $d,
  getClientRects: Id,
  getDimensions: Bd,
  getScale: xt,
  isElement: Ee,
  isRTL: Hd
};
function ha(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Gd(e, t) {
  let r = null, n;
  const s = Le(e);
  function a() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function i(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const u = e.getBoundingClientRect(), {
      left: m,
      top: f,
      width: d,
      height: v
    } = u;
    if (c || t(), !d || !v)
      return;
    const b = rr(f), p = rr(s.clientWidth - (m + d)), g = rr(s.clientHeight - (f + v)), x = rr(m), w = {
      rootMargin: -b + "px " + -p + "px " + -g + "px " + -x + "px",
      threshold: Ce(0, Ze(1, l)) || 1
    };
    let C = !0;
    function j(A) {
      const R = A[0].intersectionRatio;
      if (R !== l) {
        if (!C)
          return i();
        R ? i(!1, R) : n = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !ha(u, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      r = new IntersectionObserver(j, {
        ...w,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(j, w);
    }
    r.observe(e);
  }
  return i(!0), a;
}
function Wd(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, u = Vn(e), m = s || a ? [...u ? $t(u) : [], ...$t(t)] : [];
  m.forEach((x) => {
    s && x.addEventListener("scroll", r, {
      passive: !0
    }), a && x.addEventListener("resize", r);
  });
  const f = u && c ? Gd(u, r) : null;
  let d = -1, v = null;
  i && (v = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === u && v && (v.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(t);
    })), r();
  }), u && !l && v.observe(u), v.observe(t));
  let b, p = l ? ct(e) : null;
  l && g();
  function g() {
    const x = ct(e);
    p && !ha(p, x) && r(), p = x, b = requestAnimationFrame(g);
  }
  return r(), () => {
    var x;
    m.forEach((y) => {
      s && y.removeEventListener("scroll", r), a && y.removeEventListener("resize", r);
    }), f == null || f(), (x = v) == null || x.disconnect(), v = null, l && cancelAnimationFrame(b);
  };
}
const Kd = kd, qd = Ed, Yd = Cd, Xd = Md, Zd = Nd, Ro = wd, Jd = Sd, Qd = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: Ud,
    ...r
  }, a = {
    ...s.platform,
    _c: n
  };
  return bd(e, t, {
    ...s,
    platform: a
  });
};
var lr = typeof document < "u" ? wc : _e;
function xr(e, t) {
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
        if (!xr(e[n], t[n]))
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
      if (!(a === "_owner" && e.$$typeof) && !xr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pa(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function To(e, t) {
  const r = pa(e);
  return Math.round(t * r) / r;
}
function Kr(e) {
  const t = h.useRef(e);
  return lr(() => {
    t.current = e;
  }), t;
}
function ef(e) {
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
    open: u
  } = e, [m, f] = h.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, v] = h.useState(n);
  xr(d, n) || v(n);
  const [b, p] = h.useState(null), [g, x] = h.useState(null), y = h.useCallback((M) => {
    M !== A.current && (A.current = M, p(M));
  }, []), w = h.useCallback((M) => {
    M !== R.current && (R.current = M, x(M));
  }, []), C = a || b, j = i || g, A = h.useRef(null), R = h.useRef(null), S = h.useRef(m), O = l != null, P = Kr(l), N = Kr(s), T = Kr(u), D = h.useCallback(() => {
    if (!A.current || !R.current)
      return;
    const M = {
      placement: t,
      strategy: r,
      middleware: d
    };
    N.current && (M.platform = N.current), Qd(A.current, R.current, M).then((I) => {
      const E = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      F.current && !xr(S.current, E) && (S.current = E, Cr.flushSync(() => {
        f(E);
      }));
    });
  }, [d, t, r, N, T]);
  lr(() => {
    u === !1 && S.current.isPositioned && (S.current.isPositioned = !1, f((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [u]);
  const F = h.useRef(!1);
  lr(() => (F.current = !0, () => {
    F.current = !1;
  }), []), lr(() => {
    if (C && (A.current = C), j && (R.current = j), C && j) {
      if (P.current)
        return P.current(C, j, D);
      D();
    }
  }, [C, j, D, P, O]);
  const $ = h.useMemo(() => ({
    reference: A,
    floating: R,
    setReference: y,
    setFloating: w
  }), [y, w]), _ = h.useMemo(() => ({
    reference: C,
    floating: j
  }), [C, j]), U = h.useMemo(() => {
    const M = {
      position: r,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return M;
    const I = To(_.floating, m.x), E = To(_.floating, m.y);
    return c ? {
      ...M,
      transform: "translate(" + I + "px, " + E + "px)",
      ...pa(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: I,
      top: E
    };
  }, [r, c, _.floating, m.x, m.y]);
  return h.useMemo(() => ({
    ...m,
    update: D,
    refs: $,
    elements: _,
    floatingStyles: U
  }), [m, D, $, _, U]);
}
const tf = (e) => {
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
}, rf = (e, t) => ({
  ...Kd(e),
  options: [e, t]
}), nf = (e, t) => ({
  ...qd(e),
  options: [e, t]
}), of = (e, t) => ({
  ...Jd(e),
  options: [e, t]
}), sf = (e, t) => ({
  ...Yd(e),
  options: [e, t]
}), af = (e, t) => ({
  ...Xd(e),
  options: [e, t]
}), cf = (e, t) => ({
  ...Zd(e),
  options: [e, t]
}), lf = (e, t) => ({
  ...tf(e),
  options: [e, t]
});
var uf = "Arrow", ga = h.forwardRef((e, t) => {
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
ga.displayName = uf;
var df = ga, Hn = "Popper", [va, Ar] = $e(Hn), [ff, xa] = va(Hn), ya = (e) => {
  const { __scopePopper: t, children: r } = e, [n, s] = h.useState(null);
  return /* @__PURE__ */ o.jsx(ff, { scope: t, anchor: n, onAnchorChange: s, children: r });
};
ya.displayName = Hn;
var ba = "PopperAnchor", wa = h.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e, a = xa(ba, r), i = h.useRef(null), c = oe(t, i);
    return h.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || i.current);
    }), n ? null : /* @__PURE__ */ o.jsx(Y.div, { ...s, ref: c });
  }
);
wa.displayName = ba;
var Un = "PopperContent", [mf, hf] = va(Un), Ca = h.forwardRef(
  (e, t) => {
    var L, W, Z, J, te, re;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: s = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: m = 0,
      sticky: f = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: b,
      ...p
    } = e, g = xa(Un, r), [x, y] = h.useState(null), w = oe(t, (we) => y(we)), [C, j] = h.useState(null), A = Pn(C), R = (A == null ? void 0 : A.width) ?? 0, S = (A == null ? void 0 : A.height) ?? 0, O = n + (a !== "center" ? "-" + a : ""), P = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, N = Array.isArray(u) ? u : [u], T = N.length > 0, D = {
      padding: P,
      boundary: N.filter(gf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: F, floatingStyles: $, placement: _, isPositioned: U, middlewareData: M } = ef({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...we) => Wd(...we, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        rf({ mainAxis: s + S, alignmentAxis: i }),
        l && nf({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? of() : void 0,
          ...D
        }),
        l && sf({ ...D }),
        af({
          ...D,
          apply: ({ elements: we, rects: Me, availableWidth: Pt, availableHeight: _t }) => {
            const { width: It, height: bc } = Me.reference, Xt = we.floating.style;
            Xt.setProperty("--radix-popper-available-width", `${Pt}px`), Xt.setProperty("--radix-popper-available-height", `${_t}px`), Xt.setProperty("--radix-popper-anchor-width", `${It}px`), Xt.setProperty("--radix-popper-anchor-height", `${bc}px`);
          }
        }),
        C && lf({ element: C, padding: c }),
        vf({ arrowWidth: R, arrowHeight: S }),
        d && cf({ strategy: "referenceHidden", ...D })
      ]
    }), [I, E] = ka(_), z = De(b);
    me(() => {
      U && (z == null || z());
    }, [U, z]);
    const K = (L = M.arrow) == null ? void 0 : L.x, q = (W = M.arrow) == null ? void 0 : W.y, Q = ((Z = M.arrow) == null ? void 0 : Z.centerOffset) !== 0, [se, ie] = h.useState();
    return me(() => {
      x && ie(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: U ? $.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: se,
          "--radix-popper-transform-origin": [
            (J = M.transformOrigin) == null ? void 0 : J.x,
            (te = M.transformOrigin) == null ? void 0 : te.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((re = M.hide) == null ? void 0 : re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ o.jsx(
          mf,
          {
            scope: r,
            placedSide: I,
            onArrowChange: j,
            arrowX: K,
            arrowY: q,
            shouldHideArrow: Q,
            children: /* @__PURE__ */ o.jsx(
              Y.div,
              {
                "data-side": I,
                "data-align": E,
                ...p,
                ref: w,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ca.displayName = Un;
var Na = "PopperArrow", pf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ja = h.forwardRef(function(t, r) {
  const { __scopePopper: n, ...s } = t, a = hf(Na, n), i = pf[a.placedSide];
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
          df,
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
ja.displayName = Na;
function gf(e) {
  return e !== null;
}
var vf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, x, y;
    const { placement: r, rects: n, middlewareData: s } = t, i = ((g = s.arrow) == null ? void 0 : g.centerOffset) !== 0, c = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = ka(r), f = { start: "0%", center: "50%", end: "100%" }[m], d = (((x = s.arrow) == null ? void 0 : x.x) ?? 0) + c / 2, v = (((y = s.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let b = "", p = "";
    return u === "bottom" ? (b = i ? f : `${d}px`, p = `${-l}px`) : u === "top" ? (b = i ? f : `${d}px`, p = `${n.floating.height + l}px`) : u === "right" ? (b = `${-l}px`, p = i ? f : `${v}px`) : u === "left" && (b = `${n.floating.width + l}px`, p = i ? f : `${v}px`), { data: { x: b, y: p } };
  }
});
function ka(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Ea = ya, Sa = wa, Ma = Ca, Ra = ja, xf = "Portal", Gn = h.forwardRef((e, t) => {
  var c;
  const { container: r, ...n } = e, [s, a] = h.useState(!1);
  me(() => a(!0), []);
  const i = r || s && ((c = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : c.body);
  return i ? jc.createPortal(/* @__PURE__ */ o.jsx(Y.div, { ...n, ref: t }), i) : null;
});
Gn.displayName = xf;
var Ta = Object.freeze({
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
}), yf = "VisuallyHidden", bf = h.forwardRef(
  (e, t) => /* @__PURE__ */ o.jsx(
    Y.span,
    {
      ...e,
      ref: t,
      style: { ...Ta, ...e.style }
    }
  )
);
bf.displayName = yf;
var wf = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = {}, qr = 0, Aa = function(e) {
  return e && (e.host || Aa(e.parentNode));
}, Cf = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Aa(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Nf = function(e, t, r, n) {
  var s = Cf(t, Array.isArray(e) ? e : [e]);
  or[r] || (or[r] = /* @__PURE__ */ new WeakMap());
  var a = or[r], i = [], c = /* @__PURE__ */ new Set(), l = new Set(s), u = function(f) {
    !f || c.has(f) || (c.add(f), u(f.parentNode));
  };
  s.forEach(u);
  var m = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (c.has(d))
        m(d);
      else
        try {
          var v = d.getAttribute(n), b = v !== null && v !== "false", p = (pt.get(d) || 0) + 1, g = (a.get(d) || 0) + 1;
          pt.set(d, p), a.set(d, g), i.push(d), p === 1 && b && nr.set(d, !0), g === 1 && d.setAttribute(r, "true"), b || d.setAttribute(n, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", d, x);
        }
    });
  };
  return m(t), c.clear(), qr++, function() {
    i.forEach(function(f) {
      var d = pt.get(f) - 1, v = a.get(f) - 1;
      pt.set(f, d), a.set(f, v), d || (nr.has(f) || f.removeAttribute(n), nr.delete(f)), v || f.removeAttribute(r);
    }), qr--, qr || (pt = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = {});
  };
}, Pa = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = wf(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), Nf(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Pe.apply(this, arguments);
};
function _a(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function jf(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, a; n < s; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ur = "right-scroll-bar-position", dr = "width-before-scroll-bar", kf = "with-scroll-bars-hidden", Ef = "--removed-body-scroll-bar-size";
function Yr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Sf(e, t) {
  var r = de(function() {
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
var Mf = typeof window < "u" ? h.useLayoutEffect : h.useEffect, Ao = /* @__PURE__ */ new WeakMap();
function Rf(e, t) {
  var r = Sf(null, function(n) {
    return e.forEach(function(s) {
      return Yr(s, n);
    });
  });
  return Mf(function() {
    var n = Ao.get(r);
    if (n) {
      var s = new Set(n), a = new Set(e), i = r.current;
      s.forEach(function(c) {
        a.has(c) || Yr(c, null);
      }), a.forEach(function(c) {
        s.has(c) || Yr(c, i);
      });
    }
    Ao.set(r, e);
  }, [e]), r;
}
function Tf(e) {
  return e;
}
function Af(e, t) {
  t === void 0 && (t = Tf);
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
        var m = i;
        i = [], m.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(m) {
          i.push(m), u();
        },
        filter: function(m) {
          return i = i.filter(m), r;
        }
      };
    }
  };
  return s;
}
function Pf(e) {
  e === void 0 && (e = {});
  var t = Af(null);
  return t.options = Pe({ async: !0, ssr: !1 }, e), t;
}
var Ia = function(e) {
  var t = e.sideCar, r = _a(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return h.createElement(n, Pe({}, r));
};
Ia.isSideCarExport = !0;
function _f(e, t) {
  return e.useMedium(t), Ia;
}
var Da = Pf(), Xr = function() {
}, Pr = h.forwardRef(function(e, t) {
  var r = h.useRef(null), n = h.useState({
    onScrollCapture: Xr,
    onWheelCapture: Xr,
    onTouchMoveCapture: Xr
  }), s = n[0], a = n[1], i = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, m = e.enabled, f = e.shards, d = e.sideCar, v = e.noIsolation, b = e.inert, p = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, y = e.gapMode, w = _a(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = d, j = Rf([r, t]), A = Pe(Pe({}, w), s);
  return h.createElement(
    h.Fragment,
    null,
    m && h.createElement(C, { sideCar: Da, removeScrollBar: u, shards: f, noIsolation: v, inert: b, setCallbacks: a, allowPinchZoom: !!p, lockRef: r, gapMode: y }),
    i ? h.cloneElement(h.Children.only(c), Pe(Pe({}, A), { ref: j })) : h.createElement(x, Pe({}, A, { className: l, ref: j }), c)
  );
});
Pr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pr.classNames = {
  fullWidth: dr,
  zeroRight: ur
};
var If = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Df() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = If();
  return t && e.setAttribute("nonce", t), e;
}
function Of(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ff = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Df()) && (Of(t, r), Lf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zf = function() {
  var e = Ff();
  return function(t, r) {
    h.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Oa = function() {
  var e = zf(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, Bf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Zr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Vf = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Zr(r), Zr(n), Zr(s)];
}, $f = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Bf;
  var t = Vf(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Hf = Oa(), yt = "data-scroll-locked", Uf = function(e, t, r, n) {
  var s = e.left, a = e.top, i = e.right, c = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(kf, ` {
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
    `).concat(Ef, ": ").concat(c, `px;
  }
`);
}, Po = function() {
  var e = parseInt(document.body.getAttribute(yt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Gf = function() {
  h.useEffect(function() {
    return document.body.setAttribute(yt, (Po() + 1).toString()), function() {
      var e = Po() - 1;
      e <= 0 ? document.body.removeAttribute(yt) : document.body.setAttribute(yt, e.toString());
    };
  }, []);
}, Wf = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n;
  Gf();
  var a = h.useMemo(function() {
    return $f(s);
  }, [s]);
  return h.createElement(Hf, { styles: Uf(a, !t, s, r ? "" : "!important") });
}, pn = !1;
if (typeof window < "u")
  try {
    var sr = Object.defineProperty({}, "passive", {
      get: function() {
        return pn = !0, !0;
      }
    });
    window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    pn = !1;
  }
var gt = pn ? { passive: !1 } : !1, Kf = function(e) {
  return e.tagName === "TEXTAREA";
}, La = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Kf(e) && r[t] === "visible")
  );
}, qf = function(e) {
  return La(e, "overflowY");
}, Yf = function(e) {
  return La(e, "overflowX");
}, _o = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var s = Fa(e, n);
    if (s) {
      var a = za(e, n), i = a[1], c = a[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Xf = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Zf = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Fa = function(e, t) {
  return e === "v" ? qf(t) : Yf(t);
}, za = function(e, t) {
  return e === "v" ? Xf(t) : Zf(t);
}, Jf = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Qf = function(e, t, r, n, s) {
  var a = Jf(e, window.getComputedStyle(t).direction), i = a * n, c = r.target, l = t.contains(c), u = !1, m = i > 0, f = 0, d = 0;
  do {
    var v = za(e, c), b = v[0], p = v[1], g = v[2], x = p - g - a * b;
    (b || x) && Fa(e, c) && (f += x, d += b), c instanceof ShadowRoot ? c = c.host : c = c.parentNode;
  } while (
    // portaled content
    !l && c !== document.body || // self content
    l && (t.contains(c) || t === c)
  );
  return (m && Math.abs(f) < 1 || !m && Math.abs(d) < 1) && (u = !0), u;
}, ar = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Io = function(e) {
  return [e.deltaX, e.deltaY];
}, Do = function(e) {
  return e && "current" in e ? e.current : e;
}, em = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, tm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rm = 0, vt = [];
function nm(e) {
  var t = h.useRef([]), r = h.useRef([0, 0]), n = h.useRef(), s = h.useState(rm++)[0], a = h.useState(Oa)[0], i = h.useRef(e);
  h.useEffect(function() {
    i.current = e;
  }, [e]), h.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = jf([e.lockRef.current], (e.shards || []).map(Do), !0).filter(Boolean);
      return p.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), p.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = h.useCallback(function(p, g) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var x = ar(p), y = r.current, w = "deltaX" in p ? p.deltaX : y[0] - x[0], C = "deltaY" in p ? p.deltaY : y[1] - x[1], j, A = p.target, R = Math.abs(w) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && R === "h" && A.type === "range")
      return !1;
    var S = _o(R, A);
    if (!S)
      return !0;
    if (S ? j = R : (j = R === "v" ? "h" : "v", S = _o(R, A)), !S)
      return !1;
    if (!n.current && "changedTouches" in p && (w || C) && (n.current = j), !j)
      return !0;
    var O = n.current || j;
    return Qf(O, g, p, O === "h" ? w : C);
  }, []), l = h.useCallback(function(p) {
    var g = p;
    if (!(!vt.length || vt[vt.length - 1] !== a)) {
      var x = "deltaY" in g ? Io(g) : ar(g), y = t.current.filter(function(j) {
        return j.name === g.type && (j.target === g.target || g.target === j.shadowParent) && em(j.delta, x);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var w = (i.current.shards || []).map(Do).filter(Boolean).filter(function(j) {
          return j.contains(g.target);
        }), C = w.length > 0 ? c(g, w[0]) : !i.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = h.useCallback(function(p, g, x, y) {
    var w = { name: p, delta: g, target: x, should: y, shadowParent: om(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== w;
      });
    }, 1);
  }, []), m = h.useCallback(function(p) {
    r.current = ar(p), n.current = void 0;
  }, []), f = h.useCallback(function(p) {
    u(p.type, Io(p), p.target, c(p, e.lockRef.current));
  }, []), d = h.useCallback(function(p) {
    u(p.type, ar(p), p.target, c(p, e.lockRef.current));
  }, []);
  h.useEffect(function() {
    return vt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, gt), document.addEventListener("touchmove", l, gt), document.addEventListener("touchstart", m, gt), function() {
      vt = vt.filter(function(p) {
        return p !== a;
      }), document.removeEventListener("wheel", l, gt), document.removeEventListener("touchmove", l, gt), document.removeEventListener("touchstart", m, gt);
    };
  }, []);
  var v = e.removeScrollBar, b = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    b ? h.createElement(a, { styles: tm(s) }) : null,
    v ? h.createElement(Wf, { gapMode: e.gapMode }) : null
  );
}
function om(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const sm = _f(Da, nm);
var Wn = h.forwardRef(function(e, t) {
  return h.createElement(Pr, Pe({}, e, { ref: t, sideCar: sm }));
});
Wn.classNames = Pr.classNames;
var am = [" ", "Enter", "ArrowUp", "ArrowDown"], im = [" ", "Enter"], lt = "Select", [_r, Ir, cm] = Nr(lt), [At, k0] = $e(lt, [
  cm,
  Ar
]), Dr = Ar(), [lm, Qe] = At(lt), [um, dm] = At(lt), Ba = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: a,
    value: i,
    defaultValue: c,
    onValueChange: l,
    dir: u,
    name: m,
    autoComplete: f,
    disabled: d,
    required: v,
    form: b
  } = e, p = Dr(t), [g, x] = h.useState(null), [y, w] = h.useState(null), [C, j] = h.useState(!1), A = Gt(u), [R, S] = it({
    prop: n,
    defaultProp: s ?? !1,
    onChange: a,
    caller: lt
  }), [O, P] = it({
    prop: i,
    defaultProp: c,
    onChange: l,
    caller: lt
  }), N = h.useRef(null), T = g ? b || !!g.closest("form") : !0, [D, F] = h.useState(/* @__PURE__ */ new Set()), $ = Array.from(D).map((_) => _.props.value).join(";");
  return /* @__PURE__ */ o.jsx(Ea, { ...p, children: /* @__PURE__ */ o.jsxs(
    lm,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: x,
      valueNode: y,
      onValueNodeChange: w,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: j,
      contentId: at(),
      value: O,
      onValueChange: P,
      open: R,
      onOpenChange: S,
      dir: A,
      triggerPointerDownPosRef: N,
      disabled: d,
      children: [
        /* @__PURE__ */ o.jsx(_r.Provider, { scope: t, children: /* @__PURE__ */ o.jsx(
          um,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: h.useCallback((_) => {
              F((U) => new Set(U).add(_));
            }, []),
            onNativeOptionRemove: h.useCallback((_) => {
              F((U) => {
                const M = new Set(U);
                return M.delete(_), M;
              });
            }, []),
            children: r
          }
        ) }),
        T ? /* @__PURE__ */ o.jsxs(
          ui,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: m,
            autoComplete: f,
            value: O,
            onChange: (_) => P(_.target.value),
            disabled: d,
            form: b,
            children: [
              O === void 0 ? /* @__PURE__ */ o.jsx("option", { value: "" }) : null,
              Array.from(D)
            ]
          },
          $
        ) : null
      ]
    }
  ) });
};
Ba.displayName = lt;
var Va = "SelectTrigger", $a = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...s } = e, a = Dr(r), i = Qe(Va, r), c = i.disabled || n, l = oe(t, i.onTriggerChange), u = Ir(r), m = h.useRef("touch"), [f, d, v] = fi((p) => {
      const g = u().filter((w) => !w.disabled), x = g.find((w) => w.value === i.value), y = mi(g, p, x);
      y !== void 0 && i.onValueChange(y.value);
    }), b = (p) => {
      c || (i.onOpenChange(!0), v()), p && (i.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ o.jsx(Sa, { asChild: !0, ...a, children: /* @__PURE__ */ o.jsx(
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
        "data-placeholder": di(i.value) ? "" : void 0,
        ...s,
        ref: l,
        onClick: H(s.onClick, (p) => {
          p.currentTarget.focus(), m.current !== "mouse" && b(p);
        }),
        onPointerDown: H(s.onPointerDown, (p) => {
          m.current = p.pointerType;
          const g = p.target;
          g.hasPointerCapture(p.pointerId) && g.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (b(p), p.preventDefault());
        }),
        onKeyDown: H(s.onKeyDown, (p) => {
          const g = f.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && d(p.key), !(g && p.key === " ") && am.includes(p.key) && (b(), p.preventDefault());
        })
      }
    ) });
  }
);
$a.displayName = Va;
var Ha = "SelectValue", Ua = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, children: a, placeholder: i = "", ...c } = e, l = Qe(Ha, r), { onValueNodeHasChildrenChange: u } = l, m = a !== void 0, f = oe(t, l.onValueNodeChange);
    return me(() => {
      u(m);
    }, [u, m]), /* @__PURE__ */ o.jsx(
      Y.span,
      {
        ...c,
        ref: f,
        style: { pointerEvents: "none" },
        children: di(l.value) ? /* @__PURE__ */ o.jsx(o.Fragment, { children: i }) : a
      }
    );
  }
);
Ua.displayName = Ha;
var fm = "SelectIcon", Ga = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...s } = e;
    return /* @__PURE__ */ o.jsx(Y.span, { "aria-hidden": !0, ...s, ref: t, children: n || "▼" });
  }
);
Ga.displayName = fm;
var mm = "SelectPortal", Wa = (e) => /* @__PURE__ */ o.jsx(Gn, { asChild: !0, ...e });
Wa.displayName = mm;
var ut = "SelectContent", Ka = h.forwardRef(
  (e, t) => {
    const r = Qe(ut, e.__scopeSelect), [n, s] = h.useState();
    if (me(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const a = n;
      return a ? Cr.createPortal(
        /* @__PURE__ */ o.jsx(qa, { scope: e.__scopeSelect, children: /* @__PURE__ */ o.jsx(_r.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ o.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ o.jsx(Ya, { ...e, ref: t });
  }
);
Ka.displayName = ut;
var ke = 10, [qa, et] = At(ut), hm = "SelectContentImpl", pm = /* @__PURE__ */ wt("SelectContent.RemoveScroll"), Ya = h.forwardRef(
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
      align: u,
      alignOffset: m,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: v,
      sticky: b,
      hideWhenDetached: p,
      avoidCollisions: g,
      //
      ...x
    } = e, y = Qe(ut, r), [w, C] = h.useState(null), [j, A] = h.useState(null), R = oe(t, (L) => C(L)), [S, O] = h.useState(null), [P, N] = h.useState(
      null
    ), T = Ir(r), [D, F] = h.useState(!1), $ = h.useRef(!1);
    h.useEffect(() => {
      if (w) return Pa(w);
    }, [w]), oa();
    const _ = h.useCallback(
      (L) => {
        const [W, ...Z] = T().map((re) => re.ref.current), [J] = Z.slice(-1), te = document.activeElement;
        for (const re of L)
          if (re === te || (re == null || re.scrollIntoView({ block: "nearest" }), re === W && j && (j.scrollTop = 0), re === J && j && (j.scrollTop = j.scrollHeight), re == null || re.focus(), document.activeElement !== te)) return;
      },
      [T, j]
    ), U = h.useCallback(
      () => _([S, w]),
      [_, S, w]
    );
    h.useEffect(() => {
      D && U();
    }, [D, U]);
    const { onOpenChange: M, triggerPointerDownPosRef: I } = y;
    h.useEffect(() => {
      if (w) {
        let L = { x: 0, y: 0 };
        const W = (J) => {
          var te, re;
          L = {
            x: Math.abs(Math.round(J.pageX) - (((te = I.current) == null ? void 0 : te.x) ?? 0)),
            y: Math.abs(Math.round(J.pageY) - (((re = I.current) == null ? void 0 : re.y) ?? 0))
          };
        }, Z = (J) => {
          L.x <= 10 && L.y <= 10 ? J.preventDefault() : w.contains(J.target) || M(!1), document.removeEventListener("pointermove", W), I.current = null;
        };
        return I.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [w, M, I]), h.useEffect(() => {
      const L = () => M(!1);
      return window.addEventListener("blur", L), window.addEventListener("resize", L), () => {
        window.removeEventListener("blur", L), window.removeEventListener("resize", L);
      };
    }, [M]);
    const [E, z] = fi((L) => {
      const W = T().filter((te) => !te.disabled), Z = W.find((te) => te.ref.current === document.activeElement), J = mi(W, L, Z);
      J && setTimeout(() => J.ref.current.focus());
    }), K = h.useCallback(
      (L, W, Z) => {
        const J = !$.current && !Z;
        (y.value !== void 0 && y.value === W || J) && (O(L), J && ($.current = !0));
      },
      [y.value]
    ), q = h.useCallback(() => w == null ? void 0 : w.focus(), [w]), Q = h.useCallback(
      (L, W, Z) => {
        const J = !$.current && !Z;
        (y.value !== void 0 && y.value === W || J) && N(L);
      },
      [y.value]
    ), se = n === "popper" ? gn : Xa, ie = se === gn ? {
      side: c,
      sideOffset: l,
      align: u,
      alignOffset: m,
      arrowPadding: f,
      collisionBoundary: d,
      collisionPadding: v,
      sticky: b,
      hideWhenDetached: p,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ o.jsx(
      qa,
      {
        scope: r,
        content: w,
        viewport: j,
        onViewportChange: A,
        itemRefCallback: K,
        selectedItem: S,
        onItemLeave: q,
        itemTextRefCallback: Q,
        focusSelectedItem: U,
        selectedItemText: P,
        position: n,
        isPositioned: D,
        searchRef: E,
        children: /* @__PURE__ */ o.jsx(Wn, { as: pm, allowPinchZoom: !0, children: /* @__PURE__ */ o.jsx(
          Dn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (L) => {
              L.preventDefault();
            },
            onUnmountAutoFocus: H(s, (L) => {
              var W;
              (W = y.trigger) == null || W.focus({ preventScroll: !0 }), L.preventDefault();
            }),
            children: /* @__PURE__ */ o.jsx(
              In,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (L) => L.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ o.jsx(
                  se,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (L) => L.preventDefault(),
                    ...x,
                    ...ie,
                    onPlaced: () => F(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: H(x.onKeyDown, (L) => {
                      const W = L.ctrlKey || L.altKey || L.metaKey;
                      if (L.key === "Tab" && L.preventDefault(), !W && L.key.length === 1 && z(L.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                        let J = T().filter((te) => !te.disabled).map((te) => te.ref.current);
                        if (["ArrowUp", "End"].includes(L.key) && (J = J.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(L.key)) {
                          const te = L.target, re = J.indexOf(te);
                          J = J.slice(re + 1);
                        }
                        setTimeout(() => _(J)), L.preventDefault();
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
Ya.displayName = hm;
var gm = "SelectItemAlignedPosition", Xa = h.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...s } = e, a = Qe(ut, r), i = et(ut, r), [c, l] = h.useState(null), [u, m] = h.useState(null), f = oe(t, (R) => m(R)), d = Ir(r), v = h.useRef(!1), b = h.useRef(!0), { viewport: p, selectedItem: g, selectedItemText: x, focusSelectedItem: y } = i, w = h.useCallback(() => {
    if (a.trigger && a.valueNode && c && u && p && g && x) {
      const R = a.trigger.getBoundingClientRect(), S = u.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), P = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const te = P.left - S.left, re = O.left - te, we = R.left - re, Me = R.width + we, Pt = Math.max(Me, S.width), _t = window.innerWidth - ke, It = hr(re, [
          ke,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ke, _t - Pt)
        ]);
        c.style.minWidth = Me + "px", c.style.left = It + "px";
      } else {
        const te = S.right - P.right, re = window.innerWidth - O.right - te, we = window.innerWidth - R.right - re, Me = R.width + we, Pt = Math.max(Me, S.width), _t = window.innerWidth - ke, It = hr(re, [
          ke,
          Math.max(ke, _t - Pt)
        ]);
        c.style.minWidth = Me + "px", c.style.right = It + "px";
      }
      const N = d(), T = window.innerHeight - ke * 2, D = p.scrollHeight, F = window.getComputedStyle(u), $ = parseInt(F.borderTopWidth, 10), _ = parseInt(F.paddingTop, 10), U = parseInt(F.borderBottomWidth, 10), M = parseInt(F.paddingBottom, 10), I = $ + _ + D + M + U, E = Math.min(g.offsetHeight * 5, I), z = window.getComputedStyle(p), K = parseInt(z.paddingTop, 10), q = parseInt(z.paddingBottom, 10), Q = R.top + R.height / 2 - ke, se = T - Q, ie = g.offsetHeight / 2, L = g.offsetTop + ie, W = $ + _ + L, Z = I - W;
      if (W <= Q) {
        const te = N.length > 0 && g === N[N.length - 1].ref.current;
        c.style.bottom = "0px";
        const re = u.clientHeight - p.offsetTop - p.offsetHeight, we = Math.max(
          se,
          ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (te ? q : 0) + re + U
        ), Me = W + we;
        c.style.height = Me + "px";
      } else {
        const te = N.length > 0 && g === N[0].ref.current;
        c.style.top = "0px";
        const we = Math.max(
          Q,
          $ + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (te ? K : 0) + ie
        ) + Z;
        c.style.height = we + "px", p.scrollTop = W - Q + p.offsetTop;
      }
      c.style.margin = `${ke}px 0`, c.style.minHeight = E + "px", c.style.maxHeight = T + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    d,
    a.trigger,
    a.valueNode,
    c,
    u,
    p,
    g,
    x,
    a.dir,
    n
  ]);
  me(() => w(), [w]);
  const [C, j] = h.useState();
  me(() => {
    u && j(window.getComputedStyle(u).zIndex);
  }, [u]);
  const A = h.useCallback(
    (R) => {
      R && b.current === !0 && (w(), y == null || y(), b.current = !1);
    },
    [w, y]
  );
  return /* @__PURE__ */ o.jsx(
    xm,
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
            zIndex: C
          },
          children: /* @__PURE__ */ o.jsx(
            Y.div,
            {
              ...s,
              ref: f,
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
Xa.displayName = gm;
var vm = "SelectPopperPosition", gn = h.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: s = ke,
    ...a
  } = e, i = Dr(r);
  return /* @__PURE__ */ o.jsx(
    Ma,
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
gn.displayName = vm;
var [xm, Kn] = At(ut, {}), vn = "SelectViewport", Za = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...s } = e, a = et(vn, r), i = Kn(vn, r), c = oe(t, a.onViewportChange), l = h.useRef(0);
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
      /* @__PURE__ */ o.jsx(_r.Slot, { scope: r, children: /* @__PURE__ */ o.jsx(
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
          onScroll: H(s.onScroll, (u) => {
            const m = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: d } = i;
            if (d != null && d.current && f) {
              const v = Math.abs(l.current - m.scrollTop);
              if (v > 0) {
                const b = window.innerHeight - ke * 2, p = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), x = Math.max(p, g);
                if (x < b) {
                  const y = x + v, w = Math.min(b, y), C = y - w;
                  f.style.height = w + "px", f.style.bottom === "0px" && (m.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Za.displayName = vn;
var Ja = "SelectGroup", [ym, bm] = At(Ja), wm = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = at();
    return /* @__PURE__ */ o.jsx(ym, { scope: r, id: s, children: /* @__PURE__ */ o.jsx(Y.div, { role: "group", "aria-labelledby": s, ...n, ref: t }) });
  }
);
wm.displayName = Ja;
var Qa = "SelectLabel", ei = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = bm(Qa, r);
    return /* @__PURE__ */ o.jsx(Y.div, { id: s.id, ...n, ref: t });
  }
);
ei.displayName = Qa;
var yr = "SelectItem", [Cm, ti] = At(yr), ri = h.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: s = !1,
      textValue: a,
      ...i
    } = e, c = Qe(yr, r), l = et(yr, r), u = c.value === n, [m, f] = h.useState(a ?? ""), [d, v] = h.useState(!1), b = oe(
      t,
      (y) => {
        var w;
        return (w = l.itemRefCallback) == null ? void 0 : w.call(l, y, n, s);
      }
    ), p = at(), g = h.useRef("touch"), x = () => {
      s || (c.onValueChange(n), c.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ o.jsx(
      Cm,
      {
        scope: r,
        value: n,
        disabled: s,
        textId: p,
        isSelected: u,
        onItemTextChange: h.useCallback((y) => {
          f((w) => w || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ o.jsx(
          _r.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: s,
            textValue: m,
            children: /* @__PURE__ */ o.jsx(
              Y.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": d ? "" : void 0,
                "aria-selected": u && d,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: H(i.onFocus, () => v(!0)),
                onBlur: H(i.onBlur, () => v(!1)),
                onClick: H(i.onClick, () => {
                  g.current !== "mouse" && x();
                }),
                onPointerUp: H(i.onPointerUp, () => {
                  g.current === "mouse" && x();
                }),
                onPointerDown: H(i.onPointerDown, (y) => {
                  g.current = y.pointerType;
                }),
                onPointerMove: H(i.onPointerMove, (y) => {
                  var w;
                  g.current = y.pointerType, s ? (w = l.onItemLeave) == null || w.call(l) : g.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(i.onPointerLeave, (y) => {
                  var w;
                  y.currentTarget === document.activeElement && ((w = l.onItemLeave) == null || w.call(l));
                }),
                onKeyDown: H(i.onKeyDown, (y) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (im.includes(y.key) && x(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ri.displayName = yr;
var Ft = "SelectItemText", ni = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, ...a } = e, i = Qe(Ft, r), c = et(Ft, r), l = ti(Ft, r), u = dm(Ft, r), [m, f] = h.useState(null), d = oe(
      t,
      (x) => f(x),
      l.onItemTextChange,
      (x) => {
        var y;
        return (y = c.itemTextRefCallback) == null ? void 0 : y.call(c, x, l.value, l.disabled);
      }
    ), v = m == null ? void 0 : m.textContent, b = h.useMemo(
      () => /* @__PURE__ */ o.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: g } = u;
    return me(() => (p(b), () => g(b)), [p, g, b]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(Y.span, { id: l.textId, ...a, ref: d }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Cr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
ni.displayName = Ft;
var oi = "SelectItemIndicator", si = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return ti(oi, r).isSelected ? /* @__PURE__ */ o.jsx(Y.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
si.displayName = oi;
var xn = "SelectScrollUpButton", ai = h.forwardRef((e, t) => {
  const r = et(xn, e.__scopeSelect), n = Kn(xn, e.__scopeSelect), [s, a] = h.useState(!1), i = oe(t, n.onScrollButtonChange);
  return me(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const u = l.scrollTop > 0;
        a(u);
      };
      const l = r.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ o.jsx(
    ci,
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
ai.displayName = xn;
var yn = "SelectScrollDownButton", ii = h.forwardRef((e, t) => {
  const r = et(yn, e.__scopeSelect), n = Kn(yn, e.__scopeSelect), [s, a] = h.useState(!1), i = oe(t, n.onScrollButtonChange);
  return me(() => {
    if (r.viewport && r.isPositioned) {
      let c = function() {
        const u = l.scrollHeight - l.clientHeight, m = Math.ceil(l.scrollTop) < u;
        a(m);
      };
      const l = r.viewport;
      return c(), l.addEventListener("scroll", c), () => l.removeEventListener("scroll", c);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ o.jsx(
    ci,
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
ii.displayName = yn;
var ci = h.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...s } = e, a = et("SelectScrollButton", r), i = h.useRef(null), c = Ir(r), l = h.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return h.useEffect(() => () => l(), [l]), me(() => {
    var m;
    const u = c().find((f) => f.ref.current === document.activeElement);
    (m = u == null ? void 0 : u.ref.current) == null || m.scrollIntoView({ block: "nearest" });
  }, [c]), /* @__PURE__ */ o.jsx(
    Y.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: H(s.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerMove: H(s.onPointerMove, () => {
        var u;
        (u = a.onItemLeave) == null || u.call(a), i.current === null && (i.current = window.setInterval(n, 50));
      }),
      onPointerLeave: H(s.onPointerLeave, () => {
        l();
      })
    }
  );
}), Nm = "SelectSeparator", li = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
li.displayName = Nm;
var bn = "SelectArrow", jm = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = Dr(r), a = Qe(bn, r), i = et(bn, r);
    return a.open && i.position === "popper" ? /* @__PURE__ */ o.jsx(Ra, { ...s, ...n, ref: t }) : null;
  }
);
jm.displayName = bn;
var km = "SelectBubbleInput", ui = h.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const s = h.useRef(null), a = oe(n, s), i = An(t);
    return h.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const l = window.HTMLSelectElement.prototype, m = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && m) {
        const f = new Event("change", { bubbles: !0 });
        m.call(c, t), c.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ o.jsx(
      Y.select,
      {
        ...r,
        style: { ...Ta, ...r.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
ui.displayName = km;
function di(e) {
  return e === "" || e === void 0;
}
function fi(e) {
  const t = De(e), r = h.useRef(""), n = h.useRef(0), s = h.useCallback(
    (i) => {
      const c = r.current + i;
      t(c), function l(u) {
        r.current = u, window.clearTimeout(n.current), u !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
      }(c);
    },
    [t]
  ), a = h.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return h.useEffect(() => () => window.clearTimeout(n.current), []), [r, s, a];
}
function mi(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = Em(e, Math.max(a, 0));
  s.length === 1 && (i = i.filter((u) => u !== r));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function Em(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Sm = Ba, hi = $a, Mm = Ua, Rm = Ga, Tm = Wa, pi = Ka, Am = Za, gi = ei, vi = ri, Pm = ni, _m = si, xi = ai, yi = ii, bi = li;
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Im = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dm = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Oo = (e) => {
  const t = Dm(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, wi = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Om = (e) => {
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
var Lm = {
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
const Fm = Nt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: i,
    ...c
  }, l) => Qr(
    "svg",
    {
      ref: l,
      ...Lm,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: wi("lucide", s),
      ...!a && !Om(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...i.map(([u, m]) => Qr(u, m)),
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
const pe = (e, t) => {
  const r = Nt(
    ({ className: n, ...s }, a) => Qr(Fm, {
      ref: a,
      iconNode: t,
      className: wi(
        `lucide-${Im(Oo(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = Oo(e), r;
};
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zm = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Ci = pe("check", zm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], qn = pe("chevron-down", Bm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vm = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], $m = pe("chevron-right", Vm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Um = pe("chevron-up", Hm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], wn = pe("circle-alert", Gm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Km = pe("circle", Wm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [
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
], Ym = pe("cog", qm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Zm = pe("copy", Xm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], Qm = pe("download", Jm);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], th = pe("eye", eh);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = [
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
], nh = pe("palette", rh);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], sh = pe("play", oh);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], fr = pe("plus", ah);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], mr = pe("trash-2", ih);
/**
 * @license lucide-react v0.508.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
], lh = pe("upload", ch), ot = Sm, st = Mm, qe = h.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  hi,
  {
    ref: n,
    className: ee(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ o.jsx(Rm, { asChild: !0, children: /* @__PURE__ */ o.jsx(qn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
qe.displayName = hi.displayName;
const Ni = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  xi,
  {
    ref: r,
    className: ee(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(Um, { className: "h-4 w-4" })
  }
));
Ni.displayName = xi.displayName;
const ji = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  yi,
  {
    ref: r,
    className: ee(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(qn, { className: "h-4 w-4" })
  }
));
ji.displayName = yi.displayName;
const Ye = h.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, s) => /* @__PURE__ */ o.jsx(Tm, { children: /* @__PURE__ */ o.jsxs(
  pi,
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
      /* @__PURE__ */ o.jsx(Ni, {}),
      /* @__PURE__ */ o.jsx(
        Am,
        {
          className: ee(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ o.jsx(ji, {})
    ]
  }
) }));
Ye.displayName = pi.displayName;
const uh = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  gi,
  {
    ref: r,
    className: ee("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
uh.displayName = gi.displayName;
const Xe = h.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  vi,
  {
    ref: n,
    className: ee(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(_m, { children: /* @__PURE__ */ o.jsx(Ci, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ o.jsx(Pm, { children: t })
    ]
  }
));
Xe.displayName = vi.displayName;
const dh = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  bi,
  {
    ref: r,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
dh.displayName = bi.displayName;
function fh({ planetStats: e, setPlanetStats: t, selectedBiome: r }) {
  var l, u, m, f;
  const n = dt(e.mass, e.radius), s = qo(e.temperature), a = Yo(e.temperature, e.liquidType || s.type), i = (d, v) => {
    t({
      ...e,
      [d]: v,
      ...d === "liquidEnabled" && v === !0 ? { waterLevel: Math.max(e.waterLevel || 0, 0.5) } : {}
    });
  }, c = (d) => Sc(r, d);
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "SURFACE CONFIGURATION" }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Surface Roughness" }),
          /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((l = e.surfaceRoughness) == null ? void 0 : l.toFixed(2)) || "0.00" })
        ] }),
        /* @__PURE__ */ o.jsx(
          Ae,
          {
            value: [e.surfaceRoughness || 0],
            min: c("surfaceRoughness")[0],
            max: c("surfaceRoughness")[1],
            step: 0.01,
            onValueChange: (d) => i("surfaceRoughness", d[0]),
            className: "[&_[role=slider]]:bg-cyan-400"
          }
        )
      ] }) })
    ] }),
    n === "terrestrial" && /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "TERRAIN COMPOSITION" }) }),
      /* @__PURE__ */ o.jsxs(be, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Soil Type" }),
          /* @__PURE__ */ o.jsxs(ot, { value: e.soilType, onValueChange: (d) => i("soilType", d), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-800 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select soil type" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-800 border-slate-600 text-blue-100", children: ["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].map((d) => /* @__PURE__ */ o.jsx(Xe, { value: d, children: d.charAt(0).toUpperCase() + d.slice(1) }, d)) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Soil Texture" }),
          /* @__PURE__ */ o.jsxs(ot, { value: e.soilTexture, onValueChange: (d) => i("soilTexture", d), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-800 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select soil texture" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-800 border-slate-600 text-blue-100", children: ["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].map((d) => /* @__PURE__ */ o.jsx(Xe, { value: d, children: d.charAt(0).toUpperCase() + d.slice(1) }, d)) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Mountain Height" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((u = e.mountainHeight) == null ? void 0 : u.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Ae,
            {
              value: [e.mountainHeight || 0],
              min: 0,
              max: 1,
              step: 0.01,
              onValueChange: (d) => i("mountainHeight", d[0]),
              className: "[&_[role=slider]]:bg-cyan-400"
            }
          )
        ] })
      ] })
    ] }),
    n === "terrestrial" && /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "HYDROSPHERE" }) }),
      /* @__PURE__ */ o.jsxs(be, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Water Level" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((m = e.waterLevel) == null ? void 0 : m.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Ae,
            {
              value: [e.waterLevel || 0],
              min: c("waterLevel")[0],
              max: c("waterLevel")[1],
              step: 0.01,
              onValueChange: (d) => i("waterLevel", d[0]),
              className: "[&_[role=slider]]:bg-cyan-400"
            }
          ),
          !a && /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 text-amber-300 text-xs", children: [
            /* @__PURE__ */ o.jsx(wn, { className: "h-4 w-4" }),
            /* @__PURE__ */ o.jsxs("span", { children: [
              "Temperature is not suitable for ",
              e.liquidType || "water",
              " to exist as a liquid"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Enable Liquid" }),
            /* @__PURE__ */ o.jsx(
              ta,
              {
                checked: e.liquidEnabled !== !1,
                onCheckedChange: (d) => i("liquidEnabled", d),
                className: "data-[state=checked]:bg-cyan-600"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-slate-400", children: "When enabled, liquid will cover at least half the surface" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Liquid Type" }),
          /* @__PURE__ */ o.jsxs(ot, { value: e.liquidType, onValueChange: (d) => i("liquidType", d), children: [
            /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-800 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select liquid type" }) }),
            /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-800 border-slate-600 text-blue-100", children: ["water", "methane", "nitrogen", "ammonia", "ethane"].map((d) => /* @__PURE__ */ o.jsx(Xe, { value: d, children: d.charAt(0).toUpperCase() + d.slice(1) }, d)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "ATMOSPHERE" }) }),
      /* @__PURE__ */ o.jsxs(be, { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Atmosphere Strength" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: ((f = e.atmosphereStrength) == null ? void 0 : f.toFixed(2)) || "0.00" })
          ] }),
          /* @__PURE__ */ o.jsx(
            Ae,
            {
              value: [e.atmosphereStrength || 0],
              min: c("atmosphereStrength")[0],
              max: c("atmosphereStrength")[1],
              step: 0.01,
              onValueChange: (d) => i("atmosphereStrength", d[0]),
              className: "[&_[role=slider]]:bg-cyan-400"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Cloud Count" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold", children: e.cloudCount || 0 })
          ] }),
          /* @__PURE__ */ o.jsx(
            Ae,
            {
              value: [e.cloudCount || 0],
              min: c("cloudCount")[0],
              max: c("cloudCount")[1],
              step: 1,
              onValueChange: (d) => i("cloudCount", d[0]),
              className: "[&_[role=slider]]:bg-cyan-400"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const ce = h.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: t,
      className: ee(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: n,
      ...r
    }
  )
);
ce.displayName = "Input";
const mh = Tn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
), le = h.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, a) => {
    const i = n ? hl : "button";
    return /* @__PURE__ */ o.jsx(
      i,
      {
        className: ee(mh({ variant: t, size: r, className: e })),
        ref: a,
        ...s
      }
    );
  }
);
le.displayName = "Button";
function hh({
  planetStats: e,
  setPlanetStats: t,
  selectedBiome: r,
  setSelectedBiome: n,
  customColors: s,
  setCustomColors: a
}) {
  const i = Mc(), c = (l, u) => {
    const m = { ...s, [l]: u };
    a(m), t({ ...e, customColors: m });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "BIOME SELECTION" }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Biome Type" }),
        /* @__PURE__ */ o.jsxs(ot, { value: r, onValueChange: n, children: [
          /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-800 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select biome" }) }),
          /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-800 border-slate-600 text-blue-100", children: i.map((l) => /* @__PURE__ */ o.jsx(Xe, { value: l, children: l }, l)) })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-slate-400", children: "Selecting a biome will adjust parameters to fit within biome ranges" })
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "COLOR CUSTOMIZATION" }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Custom Colors" }),
          /* @__PURE__ */ o.jsx(nh, { className: "h-4 w-4 text-cyan-300" })
        ] }),
        /* @__PURE__ */ o.jsx("p", { className: "text-xs text-slate-400 mb-2", children: "Customize terrain colors for each height level" }),
        /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-2 gap-3", children: ["oceanFloor", "beach", "regular", "mountain"].map((l) => /* @__PURE__ */ o.jsxs(Te.Fragment, { children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-xs text-cyan-200", children: l.replace(/([A-Z])/g, " $1").replace(/^./, (u) => u.toUpperCase()) }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              type: "color",
              value: s[l] || "#5D4037",
              onChange: (u) => c(l, u.target.value),
              className: "h-8 p-1 bg-slate-800 border-slate-600"
            }
          )
        ] }, l)) }),
        /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "outline",
            size: "sm",
            className: "mt-3 w-full border-slate-600 text-blue-100 hover:bg-cyan-900/20",
            onClick: () => a({ oceanFloor: "", beach: "", regular: "", mountain: "" }),
            children: "Reset to Biome Default Colors"
          }
        )
      ] }) })
    ] })
  ] });
}
const ph = Tn(
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
), Cn = h.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: n,
    role: "alert",
    className: ee(ph({ variant: t }), e),
    ...r
  }
));
Cn.displayName = "Alert";
const gh = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h5",
  {
    ref: r,
    className: ee("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
gh.displayName = "AlertTitle";
const Nn = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: ee("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Nn.displayName = "AlertDescription";
const vh = [
  "mountain",
  "crater",
  "valley",
  "basin",
  "canyon",
  "volcano",
  "dune",
  "glacier",
  "trench",
  "ocean_ridge",
  "ice_patch",
  "lava_flow"
];
function xh(e, t, r, n, s, a, i, c, l) {
  for (let m = 0; m < t.count; m++) {
    const f = t.getX(m), d = t.getY(m);
    t.getZ(m);
    const v = Math.sqrt(f * f + d * d), p = Math.max(0, 1 - v / (i * 2)) * c * 2.5;
    let g = 0, x = new k.Color(10586239);
    switch (a) {
      case "crater":
        g = yh(v, p, i), x = new k.Color(9268835);
        break;
      case "mountain":
        g = bh(v, p, i), x = new k.Color(10586239), g > 0.5 && x.lerp(new k.Color(16777215), (g - 0.5) * 2);
        break;
      case "volcano":
        g = wh(v, p, i);
        const j = Math.max(0, Math.min(1, g / 1.5));
        x = new k.Color(6111287).lerp(new k.Color(12531212), j);
        break;
      case "valley":
      case "canyon":
        g = Ch(d, p, i), x = new k.Color(7951688);
        break;
      case "basin":
        g = Nh(v, p, i), x = new k.Color(9268835);
        break;
      case "dune":
        g = jh(v, f, p, i), x = new k.Color(14142664);
        break;
      case "glacier":
        g = kh(v, f, d, p, i), x = new k.Color(14743546);
        break;
      case "ocean_ridge":
        g = Eh(d, f, p, i), x = new k.Color(166097);
        break;
      case "trench":
        g = Sh(d, p, i), x = new k.Color(87963);
        break;
      case "ice_patch":
        g = Mh(v, f, d, p, i), x = new k.Color(15527921);
        break;
      case "lava_flow":
        g = Rh(v, f, d, p, i), x = new k.Color(14172949);
        break;
      default:
        g = p * ne(f * 5, d * 5, 0) * 0.8, x = new k.Color(10586239);
    }
    const y = (s.surfaceRoughness || 0.5) * l, w = 8 + y * 15, C = y * 0.4;
    g += ne(f * w, d * w, 0) * C, t.setZ(m, g), r[m * 3] = x.r, r[m * 3 + 1] = x.g, r[m * 3 + 2] = x.b;
  }
  t.needsUpdate = !0, e.computeVertexNormals(), e.setAttribute("color", new k.BufferAttribute(r, 3));
  const u = new k.MeshStandardMaterial({
    vertexColors: !0,
    roughness: 0.7,
    metalness: 0.1,
    flatShading: !1
  });
  if (a === "volcano" ? (u.emissive.set("#ff2200"), u.emissiveIntensity = 0.2) : a === "glacier" || a === "trench" || a === "ocean_ridge" ? (u.roughness = 0.3, u.metalness = 0.2) : a === "lava_flow" ? (u.emissive.set("#ff3300"), u.emissiveIntensity = 0.3, u.roughness = 0.5) : a === "ice_patch" && (u.roughness = 0.2, u.metalness = 0.3, u.envMapIntensity = 1.5), s.soilType)
    switch (s.soilType) {
      case "volcanic":
        u.roughness = 0.9, a !== "volcano" && a !== "lava_flow" && (u.emissive.set("#ff4400"), u.emissiveIntensity = 0.1);
        break;
      case "sandy":
        u.roughness = Math.min(
          u.roughness + 0.1,
          1
        );
        break;
      case "frozen":
        u.roughness = Math.max(
          u.roughness - 0.2,
          0.1
        ), u.metalness = Math.min(
          u.metalness + 0.1,
          1
        );
        break;
    }
  return { geometry: e, material: u };
}
function yh(e, t, r) {
  return e < r * 0.8 ? -t * 1.2 + ne(e * 10, 0, 0) * t * 0.1 : e < r * 1.2 ? t * 0.8 : 0;
}
function bh(e, t, r) {
  return t * 1.5 * Math.exp(-e / (r * 0.6)) + ne(e * 15, e * 15, 0) * t * 0.3;
}
function wh(e, t, r) {
  return e < r * 0.2 ? -t * 0.8 + ne(e * 20, e * 20, 0) * t * 0.1 : t * 1.8 * Math.exp(-e / (r * 0.4)) + ne(e * 12, e * 12, 0) * t * 0.2;
}
function Ch(e, t, r) {
  const n = Math.abs(e);
  return n < r * 0.3 ? -t * 1.2 + ne(e * 25, e * 5, 0) * t * 0.15 : n < r * 0.5 ? t * 0.4 * (1 - (n - r * 0.3) / (r * 0.2)) : 0;
}
function Nh(e, t, r) {
  return -t * 0.8 * Math.exp(-e / (r * 1.5)) + ne(e * 8, e * 8, 0) * t * 0.15;
}
function jh(e, t, r, n) {
  return r * 0.8 * Math.sin(e * 8 / n) + r * 0.3 * Math.sin(t * 12 / n);
}
function kh(e, t, r, n, s) {
  const a = n * 0.8 * (1 - Math.pow(e / s, 1.5)), i = ne(t * 20, r * 20, 0);
  return i > 0.7 ? a - n * 0.4 * (i - 0.7) * 3 : a;
}
function Eh(e, t, r, n) {
  const s = Math.abs(e);
  return r * 0.8 * Math.exp(-s / (n * 0.2)) + ne(t * 15, e * 5, 0) * r * 0.2;
}
function Sh(e, t, r) {
  const n = Math.abs(e);
  return n < r * 0.2 ? -t * 1.5 + ne(e * 20, e * 5, 0) * t * 0.1 : n < r * 0.4 ? -t * (1 - (n - r * 0.2) / (r * 0.2)) : 0;
}
function Mh(e, t, r, n, s) {
  const a = n * 0.3 * Math.exp(-e / (s * 0.8)), c = ne(t * 30, r * 30, 0) > 0.7 ? n * 0.15 : 0;
  return a + c;
}
function Rh(e, t, r, n, s) {
  const a = n * 0.4 * Math.exp(-e / (s * 0.7)), i = ne(t * 8, r * 8, 0), l = Math.sin(t * 5 + r * 5 + i * 10) * 0.5 + 0.5 < 0.3 ? -n * 0.2 : 0;
  return a + l;
}
const Th = [
  "storm",
  "vortex",
  "band",
  "spot",
  "turbulent",
  "cyclone",
  "anticyclone",
  "zonal_flow",
  "jet_stream",
  "cloud_layer",
  "atmospheric_haze"
];
function Ah(e, t, r, n, s, a, i, c, l) {
  for (let m = 0; m < t.count; m++) {
    const f = t.getX(m), d = t.getY(m);
    t.getZ(m);
    const v = Math.sqrt(f * f + d * d), p = Math.max(0, 1 - v / (i * 2)) * c * 2.5;
    let g = 0, x = new k.Color(15037299);
    switch (a) {
      case "storm":
        g = Ph(v, f, d, p, i), x = new k.Color(15037299);
        break;
      case "vortex":
        g = _h(f, d, v, p, i), x = new k.Color(8508666);
        break;
      case "band":
        g = Ih(d, p), x = new k.Color(16766287);
        break;
      case "spot":
        g = Dh(f, d, v, p, i), x = new k.Color(16747109);
        break;
      case "turbulent":
        g = Oh(f, d, p), x = new k.Color(9795021);
        break;
      case "cyclone":
        g = Lh(f, d, v, p, i), x = new k.Color(5227511);
        break;
      case "anticyclone":
        g = Fh(f, d, v, p, i), x = new k.Color(16773494);
        break;
      case "zonal_flow":
        g = zh(f, d, p), x = new k.Color(11457921);
        break;
      case "jet_stream":
        g = Bh(f, d, p, i), x = new k.Color(6600182);
        break;
      case "cloud_layer":
        g = Vh(f, d, v, p), x = new k.Color(15527921);
        break;
      case "atmospheric_haze":
        g = $h(f, d, v, p), x = new k.Color(11771355);
        break;
      default:
        g = p * ne(f * 5, d * 5, 0) * 0.6, g += p * 0.4 * Math.sin(f * 8 + d * 8), x = new k.Color(11583173);
    }
    g += ne(f * 15, d * 15, 0) * p * 0.2, t.setZ(m, g), r[m * 3] = x.r, r[m * 3 + 1] = x.g, r[m * 3 + 2] = x.b;
  }
  t.needsUpdate = !0, e.computeVertexNormals(), e.setAttribute("color", new k.BufferAttribute(r, 3));
  const u = new k.MeshStandardMaterial({
    vertexColors: !0,
    roughness: 0.3,
    metalness: 0.1,
    flatShading: !1,
    transparent: !0,
    opacity: 0.9
  });
  return { geometry: e, material: u };
}
function Ph(e, t, r, n, s) {
  return n * Math.exp(-e / (s * 0.5)) + n * 0.3 * Math.sin(Math.atan2(r, t) * 5 + e * 10);
}
function _h(e, t, r, n, s) {
  const a = Math.atan2(t, e);
  return n * Math.sin(a * 8 + r * 15) * Math.exp(-r / s);
}
function Ih(e, t) {
  return t * Math.sin(e * 15);
}
function Dh(e, t, r, n, s) {
  const a = e / 0.7, i = Math.sqrt(a * a + t * t);
  return n * (1 - Math.min(1, i / s));
}
function Oh(e, t, r) {
  return r * ne(e * 10, t * 10, 0) + r * 0.5 * ne(e * 20, t * 20, 0);
}
function Lh(e, t, r, n, s) {
  const a = Math.atan2(t, e), i = r * 10 + a * 3;
  return n * Math.sin(i) * Math.exp(-r / s);
}
function Fh(e, t, r, n, s) {
  const a = Math.atan2(t, e), i = r * 10 - a * 3;
  return n * Math.sin(i) * Math.exp(-r / s);
}
function zh(e, t, r) {
  return r * Math.sin(t * 20) * 0.5 + r * Math.sin(t * 10 + e * 2) * 0.3;
}
function Bh(e, t, r, n) {
  const s = n * 0.2, a = Math.sin(e * 2) * 0.3, i = Math.abs(t - a);
  if (i < s) {
    const c = 1 - i / s;
    return r * c * (0.7 + 0.3 * Math.sin(e * 15));
  }
  return 0;
}
function Vh(e, t, r, n) {
  const s = n * 0.3 * (0.8 + 0.2 * Math.sin(e * 3 + t * 3)), a = ne(e * 12, t * 12, 0), i = a > 0.6 ? (a - 0.6) * n * 0.8 : 0;
  return s + i;
}
function $h(e, t, r, n) {
  const s = n * 0.2, a = ne(e * 5, t * 5, 0) * n * 0.1, i = n * 0.1 * Math.sin(e * 3 + t * 2);
  return s + a + i;
}
function Lo(e = "terrestrial") {
  return e === "gaseous" ? Th : vh;
}
function Fo(e) {
  return {
    // Terrestrial types
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
    ice_patch: "Ice Patch",
    lava_flow: "Lava Flow",
    // Gaseous types
    storm: "Storm System",
    vortex: "Vortex",
    band: "Cloud Band",
    spot: "Persistent Spot",
    turbulent: "Turbulent Region",
    cyclone: "Cyclonic Storm",
    anticyclone: "Anticyclonic System",
    zonal_flow: "Zonal Flow Pattern",
    jet_stream: "Jet Stream",
    cloud_layer: "Cloud Layer",
    atmospheric_haze: "Atmospheric Haze"
  }[e] || e.charAt(0).toUpperCase() + e.slice(1).replace(/_/g, " ");
}
function Hh(e, t, r) {
  const n = new k.PlaneGeometry(3, 3, 128, 128), s = e.influence_type || "mountain", a = e.influence_radius || 0.5, i = e.influence_strength || 0.5, c = e.influence_roughness || 0.5, l = n.getAttribute("position"), u = new Float32Array(l.count * 3);
  return r || e.category === "gaseous" ? Ah(
    n,
    l,
    u,
    e,
    t,
    s,
    a,
    i
  ) : xh(
    n,
    l,
    u,
    e,
    t,
    s,
    a,
    i,
    c
  );
}
function Uh({ point: e }) {
  return e ? /* @__PURE__ */ o.jsxs("div", { className: "absolute bottom-2 right-2 bg-black/90 text-green-400 p-2 text-xs border border-green-500/30 rounded-md max-w-[180px]", children: [
    /* @__PURE__ */ o.jsx("div", { className: "font-bold border-b border-green-500/30 pb-1 mb-1", children: "SURFACE SCAN" }),
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-x-2 gap-y-1", children: [
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "POS:" }),
      /* @__PURE__ */ o.jsxs("span", { children: [
        e.position.x.toFixed(1),
        ",",
        e.position.y.toFixed(1),
        ",",
        e.position.z.toFixed(1)
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: "text-green-500/70", children: "HEIGHT:" }),
      /* @__PURE__ */ o.jsx("span", { children: e.height.toFixed(2) })
    ] })
  ] }) : null;
}
function Gh({
  structure: e,
  onClick: t,
  isSelected: r
}) {
  return /* @__PURE__ */ o.jsx(
    "mesh",
    {
      geometry: e.geometry,
      material: e.material,
      position: [e.position.x, e.position.y, e.position.z],
      rotation: [e.rotation.x, e.rotation.y, e.rotation.z],
      scale: [e.scale[0], e.scale[1], e.scale[2]],
      castShadow: !0,
      onClick: (n) => {
        n.stopPropagation(), t();
      },
      children: /* @__PURE__ */ o.jsx(kn, { position: [0, e.scale[1] + 0.1, 0], center: !0, children: /* @__PURE__ */ o.jsx(
        "div",
        {
          className: `bg-black/80 ${r ? "text-yellow-400 border-yellow-500/50" : "text-cyan-400 border-cyan-500/50"} px-1 py-0.5 text-[10px] rounded border whitespace-nowrap`,
          children: e.name
        }
      ) })
    }
  );
}
function Wh({
  structure: e,
  updateStructure: t,
  onClose: r
}) {
  return /* @__PURE__ */ o.jsxs("div", { className: "absolute left-2 top-2 bg-black/90 text-green-400 p-3 text-xs border border-green-500/30 rounded-md w-64", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center mb-2 border-b border-green-500/30 pb-1", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "font-bold", children: [
        "EDIT STRUCTURE: ",
        e.name
      ] }),
      /* @__PURE__ */ o.jsx(
        le,
        {
          variant: "ghost",
          size: "sm",
          onClick: r,
          className: "h-5 w-5 p-0 text-green-400 hover:text-green-300 hover:bg-transparent",
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ o.jsx("div", { className: "space-y-1 col-span-3", children: /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Position" }) }),
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "X" }),
        /* @__PURE__ */ o.jsx(
          ce,
          {
            type: "number",
            value: e.position.x,
            onChange: (n) => t("position", { ...e.position, x: Number.parseFloat(n.target.value) }),
            className: "h-7 text-xs bg-black border-green-500/30 text-green-400",
            step: "0.01"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Y" }),
        /* @__PURE__ */ o.jsx(
          ce,
          {
            type: "number",
            value: e.position.y,
            onChange: (n) => t("position", { ...e.position, y: Number.parseFloat(n.target.value) }),
            className: "h-7 text-xs bg-black border-green-500/30 text-green-400",
            step: "0.01"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Z" }),
        /* @__PURE__ */ o.jsx(
          ce,
          {
            type: "number",
            value: e.position.z,
            onChange: (n) => t("position", { ...e.position, z: Number.parseFloat(n.target.value) }),
            className: "h-7 text-xs bg-black border-green-500/30 text-green-400",
            step: "0.01"
          }
        )
      ] })
    ] }) })
  ] });
}
function Kh({ landmark: e, planetStats: t, updateLandmark: r }) {
  const n = fe(null), s = t.mass > 7 || t.radius > 2.5, [a, i] = de(null), [c, l] = de(null), { geometry: u, material: m } = ae(() => Hh(e, t, s), [e, t, s]), f = ae(() => !e.structures || e.structures.length === 0 ? [] : e.structures.map((y) => {
    const w = Xo(y.type), C = Zo(y), j = {
      x: y.position.x * 0.5,
      // Scale down positions to fit in preview
      y: y.position.y * 0.5 + 0.1,
      // Add slight Y offset to place on terrain
      z: y.position.z * 0.5
    }, A = {
      x: y.rotation.x * Math.PI,
      y: y.rotation.y * Math.PI,
      z: y.rotation.z * Math.PI
    }, R = [y.scale.x * 0.2, y.scale.y * 0.2, y.scale.z * 0.2];
    return {
      id: y.id,
      name: y.name,
      geometry: w,
      material: C,
      position: j,
      rotation: A,
      scale: R,
      originalStructure: y
    };
  }), [e.structures]), d = (y) => {
    y.stopPropagation();
    const w = y.point, C = w.clone().normalize();
    i({
      position: w,
      normalizedPosition: C,
      height: w.y
    }), l(null);
  }, v = (y) => {
    l(y), i(null);
  }, b = () => {
    const y = cr("building"), w = [...e.structures || [], y];
    r("structures", w), l(y.id);
  }, p = () => {
    if (!c || !e.structures) return;
    const y = e.structures.filter((w) => w.id !== c);
    r("structures", y), l(null);
  }, g = (y, w) => {
    if (!c || !e.structures) return;
    const C = [...e.structures], j = C.findIndex((A) => A.id === c);
    j !== -1 && (y === "position" || y === "rotation" || y === "scale" ? C[j] = {
      ...C[j],
      [y]: typeof C[j][y] == "object" && C[j][y] !== null && typeof C[j][y] == "object" && C[j][y] !== null ? typeof C[j][y] == "object" && C[j][y] !== null : w
    } : C[j] = {
      ...C[j],
      [y]: w
    }, r("structures", C));
  }, x = ae(() => !c || !e.structures ? null : e.structures.find((y) => y.id === c) || null, [c, e.structures]);
  return /* @__PURE__ */ o.jsxs("div", { className: "relative w-full h-full", children: [
    /* @__PURE__ */ o.jsxs($o, { camera: { position: [0, 1.8, 2.2], fov: 45 }, children: [
      /* @__PURE__ */ o.jsx("ambientLight", { intensity: 0.5 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [2, 3, 4], intensity: 1.2 }),
      /* @__PURE__ */ o.jsx("directionalLight", { position: [-2, 2, 1], intensity: 0.8, castShadow: !0 }),
      /* @__PURE__ */ o.jsx(
        "mesh",
        {
          ref: n,
          rotation: [-Math.PI / 4, 0, 0],
          geometry: u,
          material: m,
          receiveShadow: !0,
          castShadow: !0,
          onClick: d
        }
      ),
      f.map((y) => /* @__PURE__ */ o.jsx(
        Gh,
        {
          structure: y,
          onClick: () => v(y.id),
          isSelected: y.id === c
        },
        y.id
      )),
      /* @__PURE__ */ o.jsx(Ho, { enableZoom: !0, enablePan: !0, enableRotate: !0 }),
      /* @__PURE__ */ o.jsx("gridHelper", { args: [6, 10, "#444444", "#222222"], position: [0, -0.01, 0] })
    ] }),
    /* @__PURE__ */ o.jsx(Uh, { point: a }),
    /* @__PURE__ */ o.jsxs("div", { className: "absolute top-2 right-2 flex gap-2", children: [
      /* @__PURE__ */ o.jsxs(
        le,
        {
          size: "sm",
          variant: "outline",
          className: "h-7 px-2 bg-black/70 border-green-500/30 text-green-400 hover:bg-green-900/20",
          onClick: b,
          children: [
            /* @__PURE__ */ o.jsx(fr, { className: "h-3 w-3 mr-1" }),
            "Add Structure"
          ]
        }
      ),
      c && /* @__PURE__ */ o.jsxs(
        le,
        {
          size: "sm",
          variant: "outline",
          className: "h-7 px-2 bg-black/70 border-red-500/30 text-red-400 hover:bg-red-900/20",
          onClick: p,
          children: [
            /* @__PURE__ */ o.jsx(mr, { className: "h-3 w-3 mr-1" }),
            "Remove"
          ]
        }
      )
    ] }),
    x && /* @__PURE__ */ o.jsx(
      Wh,
      {
        structure: x,
        updateStructure: g,
        onClose: () => l(null)
      }
    )
  ] });
}
function qh() {
  const e = Math.random() * Math.PI * 2, t = Math.random() * Math.PI, r = Math.sin(t) * Math.cos(e), n = Math.sin(t) * Math.sin(e), s = Math.cos(t);
  return {
    x: Number.parseFloat(r.toFixed(2)),
    y: Number.parseFloat(n.toFixed(2)),
    z: Number.parseFloat(s.toFixed(2))
  };
}
function Yh({ planetStats: e, setPlanetStats: t }) {
  var R, S, O, P;
  const r = dt(e.mass, e.radius), n = r === "gaseous", [s, a] = de(r), [i, c] = de({
    classification_id: "",
    type: "",
    visual_effect: "",
    image_link: "",
    coordinates: { x: 0, y: 0, z: 0 },
    influence_radius: 0.5,
    influence_strength: 0.7,
    influence_type: n ? "storm" : "mountain",
    category: n ? "gaseous" : "terrestrial",
    events: [],
    structures: []
  }), [l, u] = de({
    id: "",
    type: "",
    description: "",
    duration: 5,
    intensity: 0.5
  }), [m, f] = de(cr("building")), [d, v] = de(-1), [b, p] = de(!1), g = ae(() => !e.landmarks || !Array.isArray(e.landmarks) ? (console.warn("planetStats.landmarks is not an array:", e.landmarks), []) : e.landmarks.map((N) => {
    const T = n ? N.category === "gaseous" : N.category === "terrestrial";
    return {
      ...N,
      isActive: T
    };
  }), [e.landmarks, n]);
  _e(() => {
    if (s !== r && (a(r), c((N) => ({
      ...N,
      influence_type: n ? "storm" : "mountain",
      category: n ? "gaseous" : "terrestrial"
    })), d >= 0 && e.landmarks && Array.isArray(e.landmarks))) {
      const N = e.landmarks[d];
      N && ((n ? (N.category || "terrestrial") === "gaseous" : (N.category || "terrestrial") === "terrestrial") || (v(-1), p(!0)));
    }
  }, [r, s, d, e.landmarks, n]);
  const x = () => {
    if (!i.classification_id || !i.type) return;
    const N = {
      ...i,
      category: n ? "gaseous" : "terrestrial"
    }, D = [...Array.isArray(e.landmarks) ? e.landmarks : [], N];
    t({ ...e, landmarks: D }), c({
      classification_id: "",
      type: "",
      visual_effect: "",
      image_link: "",
      coordinates: { x: 0, y: 0, z: 0 },
      influence_radius: 0.5,
      influence_strength: 0.7,
      influence_type: n ? "storm" : "mountain",
      category: n ? "gaseous" : "terrestrial",
      events: [],
      structures: []
    });
  }, y = (N) => {
    if (!e.landmarks || !Array.isArray(e.landmarks)) return;
    const T = g[N], D = e.landmarks.findIndex(
      ($) => $.classification_id === T.classification_id
    );
    if (D === -1) return;
    const F = [...e.landmarks];
    F.splice(D, 1), t({ ...e, landmarks: F }), d === N ? v(-1) : d > N && v(d - 1);
  }, w = (N, T) => {
    c(N === "coordinates" ? { ...i, coordinates: { ...i.coordinates, ...T } } : { ...i, [N]: T });
  }, C = (N, T) => {
    if (!e.landmarks || !Array.isArray(e.landmarks) || d === -1) return;
    const D = g[d], F = e.landmarks.findIndex(
      (_) => _.classification_id === D.classification_id
    );
    if (F === -1) return;
    const $ = [...e.landmarks];
    N === "coordinates" ? $[F] = {
      ...$[F],
      coordinates: { ...$[F].coordinates, ...T }
    } : $[F] = {
      ...$[F],
      [N]: T
    }, t({ ...e, landmarks: $ });
  }, j = () => {
    if (d === -1 || !l.type || !l.description || !e.landmarks || !Array.isArray(e.landmarks)) return;
    const N = g[d], T = e.landmarks.findIndex(
      (U) => U.classification_id === N.classification_id
    );
    if (T === -1) return;
    const D = [...e.landmarks], F = D[T], $ = `EV-${Math.floor(Math.random() * 900 + 100)}`, _ = { ...l, id: $ };
    D[T] = {
      ...F,
      events: [...F.events || [], _]
    }, t({ ...e, landmarks: D }), u({
      id: "",
      type: "",
      description: "",
      duration: 5,
      intensity: 0.5
    });
  }, A = (N) => {
    if (!e.landmarks || !Array.isArray(e.landmarks) || d === -1) return;
    const T = g[d], D = e.landmarks.findIndex(
      (U) => U.classification_id === T.classification_id
    );
    if (D === -1) return;
    const F = [...e.landmarks], $ = F[D];
    if (!$.events || !Array.isArray($.events)) return;
    const _ = [...$.events];
    _.splice(N, 1), F[D] = {
      ...$,
      events: _
    }, t({ ...e, landmarks: F });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
    b && /* @__PURE__ */ o.jsxs(Cn, { variant: "default", className: "bg-amber-900/20 border-amber-500/50 text-amber-300", children: [
      /* @__PURE__ */ o.jsx(wn, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsxs(Nn, { children: [
        "Some landmarks are hidden because they don't match the current planet type (",
        n ? "gaseous" : "terrestrial",
        ").",
        /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "link",
            className: "p-0 h-auto text-amber-300 hover:text-amber-200",
            onClick: () => p(!1),
            children: "Dismiss"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(ye, { className: "text-lg tracking-wide", children: [
        "LANDMARK DATABASE (",
        n ? "GASEOUS" : "TERRESTRIAL",
        " PLANET)"
      ] }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Current Landmarks" }),
        g.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-center py-4 border border-dashed border-slate-600 rounded-md", children: /* @__PURE__ */ o.jsx("p", { className: "text-slate-400", children: "No landmarks registered" }) }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: g.map((N, T) => /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `border ${d === T ? "border-cyan-400" : "border-slate-600"} rounded-md p-3 space-y-2 ${N.isActive ? "" : "opacity-50"}`,
            onClick: () => v(T),
            children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ o.jsx("span", { className: "font-bold text-cyan-200", children: N.classification_id }),
                  !N.isActive && /* @__PURE__ */ o.jsx("span", { className: "text-xs bg-amber-900/50 text-amber-300 px-1.5 py-0.5 rounded", children: N.category === "gaseous" ? "GASEOUS" : "TERRESTRIAL" })
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ o.jsx(
                    le,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: (D) => {
                        D.stopPropagation(), v(T);
                      },
                      className: "h-6 w-6 p-0 text-blue-100 hover:text-cyan-200 hover:bg-transparent",
                      children: /* @__PURE__ */ o.jsx(th, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    le,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: (D) => {
                        D.stopPropagation(), y(T);
                      },
                      className: "h-6 w-6 p-0 text-blue-100 hover:text-red-400 hover:bg-transparent",
                      children: /* @__PURE__ */ o.jsx(mr, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1 text-xs", children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-slate-400", children: "Type:" }),
                /* @__PURE__ */ o.jsx("span", { children: N.type }),
                /* @__PURE__ */ o.jsx("span", { className: "text-slate-400", children: "Visual Effect:" }),
                /* @__PURE__ */ o.jsx("span", { children: N.visual_effect || "None" }),
                /* @__PURE__ */ o.jsx("span", { className: "text-slate-400", children: "Coordinates:" }),
                /* @__PURE__ */ o.jsxs("span", { children: [
                  "X: ",
                  N.coordinates.x.toFixed(2),
                  ", Y: ",
                  N.coordinates.y.toFixed(2),
                  ", Z:",
                  " ",
                  N.coordinates.z.toFixed(2)
                ] }),
                /* @__PURE__ */ o.jsx("span", { className: "text-slate-400", children: "Events:" }),
                /* @__PURE__ */ o.jsx("span", { children: N.events && Array.isArray(N.events) ? N.events.length : 0 }),
                N.structures && Array.isArray(N.structures) && N.structures.length > 0 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                  /* @__PURE__ */ o.jsx("span", { className: "text-slate-400", children: "Structures:" }),
                  /* @__PURE__ */ o.jsx("span", { className: "text-cyan-300", children: N.structures.length })
                ] })
              ] })
            ]
          },
          N.classification_id
        )) })
      ] }) })
    ] }),
    d !== -1 && g[d] && /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(ye, { className: "text-lg tracking-wide flex items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs("span", { children: [
          "LANDMARK DETAILS: ",
          g[d].classification_id
        ] }),
        !g[d].isActive && /* @__PURE__ */ o.jsxs("span", { className: "text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded", children: [
          "INACTIVE (",
          (R = g[d].category) == null ? void 0 : R.toUpperCase(),
          ")"
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs(As, { defaultValue: "info", children: [
        /* @__PURE__ */ o.jsxs(Rn, { className: "bg-slate-800 border border-slate-600", children: [
          /* @__PURE__ */ o.jsx(
            We,
            {
              value: "info",
              className: "data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-100",
              children: "INFO"
            }
          ),
          /* @__PURE__ */ o.jsx(
            We,
            {
              value: "events",
              className: "data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-100",
              children: "EVENTS"
            }
          ),
          /* @__PURE__ */ o.jsx(
            We,
            {
              value: "terrain",
              className: "data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-100",
              children: "TERRAIN"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx(Ke, { value: "info", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Type" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded", children: g[d].type })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Visual Effect" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded", children: g[d].visual_effect || "None" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Coordinates" }),
            /* @__PURE__ */ o.jsxs("div", { className: "mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded", children: [
              "X: ",
              g[d].coordinates.x.toFixed(2),
              ", Y:",
              " ",
              g[d].coordinates.y.toFixed(2),
              ", Z:",
              " ",
              g[d].coordinates.z.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Category" }),
            /* @__PURE__ */ o.jsx("div", { className: "mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded capitalize", children: g[d].category || (n ? "gaseous" : "terrestrial") })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "col-span-2 mt-4", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200 mb-2 block", children: "Structures" }),
            !g[d].structures || !Array.isArray(g[d].structures) || g[d].structures.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "p-4 bg-slate-700/50 border border-slate-600 rounded text-center text-slate-400", children: "No structures added to this landmark" }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-2", children: (S = g[d].structures) == null ? void 0 : S.map((N) => /* @__PURE__ */ o.jsx("div", { className: "p-2 bg-slate-700/50 border border-slate-600 rounded", children: /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ o.jsx("span", { className: "font-bold text-cyan-200", children: N.name }),
                /* @__PURE__ */ o.jsx("span", { className: "text-xs bg-cyan-900/50 text-cyan-200 px-1.5 py-0.5 rounded", children: rn(N.type) })
              ] }),
              /* @__PURE__ */ o.jsx(
                le,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    var D;
                    if (!g[d].structures) return;
                    const T = ((D = g[d].structures) == null ? void 0 : D.filter((F) => F.id !== N.id)) || [];
                    C("structures", T);
                  },
                  className: "h-6 w-6 p-0 text-blue-100 hover:text-red-400 hover:bg-transparent",
                  children: /* @__PURE__ */ o.jsx(mr, { className: "h-4 w-4" })
                }
              )
            ] }) }, N.id)) }),
            /* @__PURE__ */ o.jsxs("div", { className: "mt-4 p-3 border border-slate-600 rounded-md", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200 mb-2 block", children: "Add New Structure" }),
              /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ o.jsxs("div", { children: [
                  /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Name" }),
                  /* @__PURE__ */ o.jsx(
                    ce,
                    {
                      value: m.name,
                      onChange: (N) => f({
                        ...m,
                        name: N.target.value
                      }),
                      className: "bg-slate-700 border-slate-600 text-blue-100",
                      placeholder: "Structure Name"
                    }
                  )
                ] }),
                /* @__PURE__ */ o.jsxs("div", { children: [
                  /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Type" }),
                  /* @__PURE__ */ o.jsxs(
                    ot,
                    {
                      value: m.type,
                      onValueChange: (N) => f(cr(N)),
                      children: [
                        /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-700 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select type" }) }),
                        /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-700 border-slate-600 text-blue-100", children: cl.map((N) => /* @__PURE__ */ o.jsx(Xe, { value: N, children: rn(N) }, N)) })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsxs(
                le,
                {
                  onClick: () => {
                    if (!m.name) return;
                    const T = [...g[d].structures && Array.isArray(g[d].structures) ? g[d].structures : [], m];
                    C("structures", T), f(cr("building"));
                  },
                  className: "w-full mt-3 bg-cyan-700 hover:bg-cyan-600 text-white",
                  children: [
                    /* @__PURE__ */ o.jsx(fr, { className: "h-4 w-4 mr-2" }),
                    "Add Structure"
                  ]
                }
              )
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsx(Ke, { value: "events", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Event List" }),
            !g[d].events || !Array.isArray(g[d].events) || ((O = g[d].events) == null ? void 0 : O.length) === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-center py-4 border border-dashed border-slate-600 rounded-md", children: /* @__PURE__ */ o.jsx("p", { className: "text-slate-400", children: "No events registered for this landmark" }) }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-2", children: (P = g[d].events) == null ? void 0 : P.map((N, T) => /* @__PURE__ */ o.jsxs("div", { className: "border border-slate-600 rounded-md p-2 text-xs", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ o.jsxs("span", { className: "font-bold", children: [
                  N.id,
                  ": ",
                  N.type
                ] }),
                /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ o.jsx(
                    le,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "h-5 w-5 p-0 text-blue-100 hover:text-cyan-200 hover:bg-transparent",
                      children: /* @__PURE__ */ o.jsx(sh, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    le,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => A(T),
                      className: "h-5 w-5 p-0 text-blue-100 hover:text-red-400 hover:bg-transparent",
                      children: /* @__PURE__ */ o.jsx(mr, { className: "h-3 w-3" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o.jsx("div", { className: "mt-1", children: N.description }),
              N.duration && /* @__PURE__ */ o.jsxs("div", { className: "mt-1 text-slate-400", children: [
                "Duration: ",
                N.duration,
                "s"
              ] }),
              N.intensity && /* @__PURE__ */ o.jsxs("div", { className: "text-slate-400", children: [
                "Intensity: ",
                N.intensity.toFixed(1)
              ] })
            ] }, N.id)) })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2 pt-2 border-t border-slate-600", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Add New Event" }),
            /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Type" }),
                /* @__PURE__ */ o.jsx(
                  ce,
                  {
                    value: l.type,
                    onChange: (N) => u({ ...l, type: N.target.value }),
                    className: "bg-slate-700 border-slate-600 text-blue-100",
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
                    onChange: (N) => u({ ...l, duration: Number.parseFloat(N.target.value) }),
                    className: "bg-slate-700 border-slate-600 text-blue-100",
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
                    onChange: (N) => u({ ...l, description: N.target.value }),
                    className: "bg-slate-700 border-slate-600 text-blue-100",
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
                    onChange: (N) => u({ ...l, intensity: Number.parseFloat(N.target.value) }),
                    className: "bg-slate-700 border-slate-600 text-blue-100",
                    min: "0",
                    max: "1",
                    step: "0.1"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ o.jsxs(
              le,
              {
                onClick: j,
                className: "w-full mt-2 bg-cyan-700 hover:bg-cyan-600 text-white",
                children: [
                  /* @__PURE__ */ o.jsx(fr, { className: "h-4 w-4 mr-2" }),
                  "Add Event"
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ o.jsx(Ke, { value: "terrain", className: "pt-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
          !g[d].isActive && /* @__PURE__ */ o.jsxs(Cn, { variant: "default", className: "bg-amber-900/20 border-amber-500/50 text-amber-300", children: [
            /* @__PURE__ */ o.jsx(wn, { className: "h-4 w-4" }),
            /* @__PURE__ */ o.jsxs(Nn, { children: [
              "This landmark is inactive because it's a ",
              g[d].category,
              " landmark on a ",
              n ? "gaseous" : "terrestrial",
              " planet. The terrain preview shows how it would appear on a ",
              g[d].category,
              " planet."
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "w-full h-64 bg-black rounded-md overflow-hidden", children: /* @__PURE__ */ o.jsx(
            Kh,
            {
              landmark: g[d],
              planetStats: e,
              updateLandmark: C
            }
          ) }),
          /* @__PURE__ */ o.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Influence Type" }),
              /* @__PURE__ */ o.jsxs(
                ot,
                {
                  value: g[d].influence_type || (n ? "storm" : "mountain"),
                  onValueChange: (N) => C("influence_type", N),
                  children: [
                    /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-700 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select type" }) }),
                    /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-700 border-slate-600 text-blue-100", children: Lo(g[d].category).map((N) => /* @__PURE__ */ o.jsx(Xe, { value: N, children: Fo(N) }, N)) })
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
                  value: g[d].influence_radius || 0.5,
                  onChange: (N) => C("influence_radius", Number.parseFloat(N.target.value)),
                  className: "bg-slate-700 border-slate-600 text-blue-100",
                  step: "0.1"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { className: "col-span-2 space-y-1", children: [
              /* @__PURE__ */ o.jsx(G, { className: "text-xs", children: "Influence Strength" }),
              /* @__PURE__ */ o.jsx(
                Ae,
                {
                  defaultValue: [Number(g[d].influence_strength || 0.7) * 100],
                  max: 100,
                  step: 1,
                  onValueChange: (N) => C("influence_strength", N[0] / 100),
                  className: "text-blue-100"
                }
              ),
              /* @__PURE__ */ o.jsx("div", { className: "text-xs text-slate-400", children: (g[d].influence_strength || 0.7).toFixed(2) })
            ] })
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
      /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsxs(ye, { className: "text-lg tracking-wide", children: [
        "ADD NEW ",
        n ? "GASEOUS" : "TERRESTRIAL",
        " LANDMARK"
      ] }) }),
      /* @__PURE__ */ o.jsx(be, { className: "space-y-4", children: /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Classification ID" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                value: i.classification_id,
                onChange: (N) => w("classification_id", N.target.value),
                className: "bg-slate-700 border-slate-600 text-blue-100",
                placeholder: "LM-001"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Type" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                value: i.type,
                onChange: (N) => w("type", N.target.value),
                className: "bg-slate-700 border-slate-600 text-blue-100",
                placeholder: n ? "Storm System" : "Mountain Range"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Visual Effect" }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              value: i.visual_effect,
              onChange: (N) => w("visual_effect", N.target.value),
              className: "bg-slate-700 border-slate-600 text-blue-100",
              placeholder: n ? "Lightning" : "Glowing"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Image Link" }),
          /* @__PURE__ */ o.jsx(
            ce,
            {
              value: i.image_link,
              onChange: (N) => w("image_link", N.target.value),
              className: "bg-slate-700 border-slate-600 text-blue-100",
              placeholder: "https://example.com/image.jpg"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Coordinates" }),
            /* @__PURE__ */ o.jsx(
              le,
              {
                variant: "outline",
                size: "sm",
                onClick: () => w("coordinates", qh()),
                className: "h-6 text-xs border-slate-600 text-blue-100 hover:bg-cyan-900/20",
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
                  onChange: (N) => w("coordinates", { x: Number.parseFloat(N.target.value) }),
                  className: "bg-slate-700 border-slate-600 text-blue-100",
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
                  onChange: (N) => w("coordinates", { y: Number.parseFloat(N.target.value) }),
                  className: "bg-slate-700 border-slate-600 text-blue-100",
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
                  onChange: (N) => w("coordinates", { z: Number.parseFloat(N.target.value) }),
                  className: "bg-slate-700 border-slate-600 text-blue-100",
                  step: "0.1"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Influence Radius" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                type: "number",
                value: i.influence_radius || 0.5,
                onChange: (N) => w("influence_radius", Number.parseFloat(N.target.value)),
                className: "bg-slate-700 border-slate-600 text-blue-100",
                step: "0.1"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Influence Strength" }),
            /* @__PURE__ */ o.jsx(
              ce,
              {
                type: "number",
                value: i.influence_strength || 0.7,
                onChange: (N) => w("influence_strength", Number.parseFloat(N.target.value)),
                className: "bg-slate-700 border-slate-600 text-blue-100",
                step: "0.1"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Influence Type" }),
          /* @__PURE__ */ o.jsxs(
            ot,
            {
              value: i.influence_type || (n ? "storm" : "mountain"),
              onValueChange: (N) => w("influence_type", N),
              children: [
                /* @__PURE__ */ o.jsx(qe, { className: "bg-slate-700 border-slate-600 text-blue-100", children: /* @__PURE__ */ o.jsx(st, { placeholder: "Select type" }) }),
                /* @__PURE__ */ o.jsx(Ye, { className: "bg-slate-700 border-slate-600 text-blue-100", children: Lo().map((N) => /* @__PURE__ */ o.jsx(Xe, { value: N, children: Fo(N) }, N)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs(le, { onClick: x, className: "w-full mt-2 bg-cyan-700 hover:bg-cyan-600 text-white", children: [
          /* @__PURE__ */ o.jsx(fr, { className: "h-4 w-4 mr-2" }),
          "Add ",
          n ? "Gaseous" : "Terrestrial",
          " Landmark"
        ] })
      ] }) })
    ] })
  ] });
}
const ki = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "textarea",
  {
    className: ee(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...t
  }
));
ki.displayName = "Textarea";
function Xh({
  planetStats: e,
  setPlanetStats: t,
  classificationId: r,
  author: n,
  setSelectedBiome: s,
  setCustomColors: a
}) {
  const [i, c] = de(""), l = () => {
    const m = {
      classificationId: r,
      author: n,
      type: e.type || "Unknown",
      biome: e.biome || "Unknown",
      exportDate: (/* @__PURE__ */ new Date()).toISOString()
    };
    let f = `// Planet Configuration Export
`;
    f += `// Classification: ${m.classificationId}
`, f += `// Author: ${m.author}
`, f += `// Export Date: ${m.exportDate}

`, Object.entries(e).forEach(([d, v]) => {
      if (v != null)
        if (d === "customColors" && v && Object.keys(v).length > 0)
          f += `${d}: ${JSON.stringify(v)}
`;
        else if (d === "landmarks" && Array.isArray(v) && v.length > 0) {
          const b = JSON.parse(JSON.stringify(v)), p = JSON.stringify(b, null, 2).split(`
`).map((g, x) => x === 0 ? g : "  " + g).join(`
`);
          f += `${d}: ${p}
`;
        } else typeof v == "number" ? f += `${d}: ${v.toFixed(2)}
` : typeof v == "boolean" ? f += `${d}: ${v ? "true" : "false"}
` : typeof v == "object" && d !== "customColors" && d !== "landmarks" ? f += `${d}: ${JSON.stringify(v)}
` : typeof v != "object" && (f += `${d}: ${v}
`);
    }), c(f);
  }, u = () => {
    try {
      const m = i.split(`
`).filter((v) => !v.trim().startsWith("//") && v.trim() !== ""), f = {};
      m.forEach((v) => {
        if (!v.trim()) return;
        const b = v.indexOf(":");
        if (b === -1) return;
        const p = v.substring(0, b).trim(), g = v.substring(b + 1).trim();
        let x;
        if (g === "true" || g === "false") x = g === "true";
        else if (g.startsWith("[") || g.startsWith("{"))
          try {
            x = JSON.parse(g);
          } catch {
            x = g;
          }
        else isNaN(Number(g)) ? x = g : x = Number(g);
        f[p] = x;
      });
      const d = tn(f);
      t(d), d.biome && s(d.biome), d.customColors && a(d.customColors);
    } catch (m) {
      console.error("Error importing planet configuration:", m);
    }
  };
  return /* @__PURE__ */ o.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ o.jsxs(ve, { className: "bg-slate-800/70 border-slate-700/60 text-blue-100", children: [
    /* @__PURE__ */ o.jsx(xe, { className: "pb-2", children: /* @__PURE__ */ o.jsx(ye, { className: "text-lg tracking-wide", children: "EXPORT" }) }),
    /* @__PURE__ */ o.jsxs(be, { className: "space-y-4", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ o.jsx(G, { className: "text-cyan-200", children: "Planet Configuration" }),
        /* @__PURE__ */ o.jsx(
          ki,
          {
            value: i,
            onChange: (m) => c(m.target.value),
            className: "h-64 font-mono text-xs bg-slate-800 border-slate-600 text-blue-100",
            placeholder: "Export or paste planet configuration here..."
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ o.jsxs(
          le,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 border-slate-600 text-blue-100 hover:bg-cyan-900/20",
            onClick: l,
            children: [
              /* @__PURE__ */ o.jsx(Qm, { className: "h-4 w-4 mr-2" }),
              "Export"
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          le,
          {
            variant: "outline",
            size: "sm",
            className: "flex-1 border-slate-600 text-blue-100 hover:bg-cyan-900/20",
            onClick: u,
            children: [
              /* @__PURE__ */ o.jsx(lh, { className: "h-4 w-4 mr-2" }),
              "Import"
            ]
          }
        ),
        /* @__PURE__ */ o.jsx(
          le,
          {
            variant: "outline",
            size: "sm",
            className: "border-slate-600 text-blue-100 hover:bg-cyan-900/20",
            onClick: () => navigator.clipboard.writeText(i),
            children: /* @__PURE__ */ o.jsx(Zm, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "text-xs text-slate-400 mt-2", children: "You can import partial configurations (e.g., just mass and radius). Missing values will be filled with defaults." })
    ] })
  ] }) });
}
function Zh({
  planetStats: e,
  setPlanetStats: t,
  classificationId: r = "UNCLASSIFIED",
  author: n = "UNKNOWN"
}) {
  var l, u, m, f;
  const [s, a] = de(e.biome || "Rocky Highlands"), [i, c] = de({
    oceanFloor: ((l = e.customColors) == null ? void 0 : l.oceanFloor) || "",
    beach: ((u = e.customColors) == null ? void 0 : u.beach) || "",
    regular: ((m = e.customColors) == null ? void 0 : m.regular) || "",
    mountain: ((f = e.customColors) == null ? void 0 : f.mountain) || ""
  });
  return /* @__PURE__ */ o.jsxs("div", { className: "absolute top-0 left-0 h-full w-96 bg-slate-800/90 text-blue-100 p-6 overflow-y-auto font-mono border-r border-slate-600/60", children: [
    /* @__PURE__ */ o.jsx("h2", { className: "text-2xl font-bold mb-6 tracking-wider border-b border-slate-600/60 pb-2", children: "PLANET SETTINGS" }),
    /* @__PURE__ */ o.jsx("div", { className: "mb-6 p-3 bg-slate-700/60 border border-slate-600/60 rounded-md hidden", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
      /* @__PURE__ */ o.jsx("div", { className: "text-slate-400", children: "CLASSIFICATION:" }),
      /* @__PURE__ */ o.jsx("div", { children: r }),
      /* @__PURE__ */ o.jsx("div", { className: "text-slate-400", children: "AUTHOR:" }),
      /* @__PURE__ */ o.jsx("div", { children: n })
    ] }) }),
    /* @__PURE__ */ o.jsxs(As, { defaultValue: "physical", className: "space-y-6", children: [
      /* @__PURE__ */ o.jsxs(Rn, { className: "grid w-full grid-cols-4 mb-6 bg-slate-700 border border-slate-600", children: [
        /* @__PURE__ */ o.jsx(We, { value: "physical", className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50", children: "PHYSICAL" }),
        /* @__PURE__ */ o.jsx(We, { value: "surface", className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50", children: "SURFACE" }),
        /* @__PURE__ */ o.jsx(We, { value: "biome", className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50", children: "BIOME" }),
        /* @__PURE__ */ o.jsx(
          We,
          {
            value: "landmarks",
            className: "data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50",
            children: "LANDMARKS"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs(Ke, { value: "physical", children: [
        /* @__PURE__ */ o.jsx(Gu, { planetStats: e, setPlanetStats: t }),
        /* @__PURE__ */ o.jsx("div", { className: "mt-6", children: /* @__PURE__ */ o.jsx(
          Xh,
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
      /* @__PURE__ */ o.jsx(Ke, { value: "surface", children: /* @__PURE__ */ o.jsx(fh, { planetStats: e, setPlanetStats: t, selectedBiome: s }) }),
      /* @__PURE__ */ o.jsx(Ke, { value: "biome", children: /* @__PURE__ */ o.jsx(
        hh,
        {
          planetStats: e,
          setPlanetStats: t,
          selectedBiome: s,
          setSelectedBiome: a,
          customColors: i,
          setCustomColors: c
        }
      ) }),
      /* @__PURE__ */ o.jsx(Ke, { value: "landmarks", children: /* @__PURE__ */ o.jsx(Yh, { planetStats: e, setPlanetStats: t }) })
    ] })
  ] });
}
var jn = ["Enter", " "], Jh = ["ArrowDown", "PageUp", "Home"], Ei = ["ArrowUp", "PageDown", "End"], Qh = [...Jh, ...Ei], ep = {
  ltr: [...jn, "ArrowRight"],
  rtl: [...jn, "ArrowLeft"]
}, tp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, qt = "Menu", [Ht, rp, np] = Nr(qt), [ft, Si] = $e(qt, [
  np,
  Ar,
  jr
]), Or = Ar(), Mi = jr(), [op, mt] = ft(qt), [sp, Yt] = ft(qt), Ri = (e) => {
  const { __scopeMenu: t, open: r = !1, children: n, dir: s, onOpenChange: a, modal: i = !0 } = e, c = Or(t), [l, u] = h.useState(null), m = h.useRef(!1), f = De(a), d = Gt(s);
  return h.useEffect(() => {
    const v = () => {
      m.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => m.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ o.jsx(Ea, { ...c, children: /* @__PURE__ */ o.jsx(
    op,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ o.jsx(
        sp,
        {
          scope: t,
          onClose: h.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: m,
          dir: d,
          modal: i,
          children: n
        }
      )
    }
  ) });
};
Ri.displayName = qt;
var ap = "MenuAnchor", Yn = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, s = Or(r);
    return /* @__PURE__ */ o.jsx(Sa, { ...s, ...n, ref: t });
  }
);
Yn.displayName = ap;
var Xn = "MenuPortal", [ip, Ti] = ft(Xn, {
  forceMount: void 0
}), Ai = (e) => {
  const { __scopeMenu: t, forceMount: r, children: n, container: s } = e, a = mt(Xn, t);
  return /* @__PURE__ */ o.jsx(ip, { scope: t, forceMount: r, children: /* @__PURE__ */ o.jsx(kt, { present: r || a.open, children: /* @__PURE__ */ o.jsx(Gn, { asChild: !0, container: s, children: n }) }) });
};
Ai.displayName = Xn;
var je = "MenuContent", [cp, Zn] = ft(je), Pi = h.forwardRef(
  (e, t) => {
    const r = Ti(je, e.__scopeMenu), { forceMount: n = r.forceMount, ...s } = e, a = mt(je, e.__scopeMenu), i = Yt(je, e.__scopeMenu);
    return /* @__PURE__ */ o.jsx(Ht.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(kt, { present: n || a.open, children: /* @__PURE__ */ o.jsx(Ht.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ o.jsx(lp, { ...s, ref: t }) : /* @__PURE__ */ o.jsx(up, { ...s, ref: t }) }) }) });
  }
), lp = h.forwardRef(
  (e, t) => {
    const r = mt(je, e.__scopeMenu), n = h.useRef(null), s = oe(t, n);
    return h.useEffect(() => {
      const a = n.current;
      if (a) return Pa(a);
    }, []), /* @__PURE__ */ o.jsx(
      Jn,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }
), up = h.forwardRef((e, t) => {
  const r = mt(je, e.__scopeMenu);
  return /* @__PURE__ */ o.jsx(
    Jn,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}), dp = /* @__PURE__ */ wt("MenuContent.ScrollLock"), Jn = h.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: r,
      loop: n = !1,
      trapFocus: s,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: c,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: m,
      onFocusOutside: f,
      onInteractOutside: d,
      onDismiss: v,
      disableOutsideScroll: b,
      ...p
    } = e, g = mt(je, r), x = Yt(je, r), y = Or(r), w = Mi(r), C = rp(r), [j, A] = h.useState(null), R = h.useRef(null), S = oe(t, R, g.onContentChange), O = h.useRef(0), P = h.useRef(""), N = h.useRef(0), T = h.useRef(null), D = h.useRef("right"), F = h.useRef(0), $ = b ? Wn : h.Fragment, _ = b ? { as: dp, allowPinchZoom: !0 } : void 0, U = (I) => {
      var L, W;
      const E = P.current + I, z = C().filter((Z) => !Z.disabled), K = document.activeElement, q = (L = z.find((Z) => Z.ref.current === K)) == null ? void 0 : L.textValue, Q = z.map((Z) => Z.textValue), se = Np(Q, E, q), ie = (W = z.find((Z) => Z.textValue === se)) == null ? void 0 : W.ref.current;
      (function Z(J) {
        P.current = J, window.clearTimeout(O.current), J !== "" && (O.current = window.setTimeout(() => Z(""), 1e3));
      })(E), ie && setTimeout(() => ie.focus());
    };
    h.useEffect(() => () => window.clearTimeout(O.current), []), oa();
    const M = h.useCallback((I) => {
      var z, K;
      return D.current === ((z = T.current) == null ? void 0 : z.side) && kp(I, (K = T.current) == null ? void 0 : K.area);
    }, []);
    return /* @__PURE__ */ o.jsx(
      cp,
      {
        scope: r,
        searchRef: P,
        onItemEnter: h.useCallback(
          (I) => {
            M(I) && I.preventDefault();
          },
          [M]
        ),
        onItemLeave: h.useCallback(
          (I) => {
            var E;
            M(I) || ((E = R.current) == null || E.focus(), A(null));
          },
          [M]
        ),
        onTriggerLeave: h.useCallback(
          (I) => {
            M(I) && I.preventDefault();
          },
          [M]
        ),
        pointerGraceTimerRef: N,
        onPointerGraceIntentChange: h.useCallback((I) => {
          T.current = I;
        }, []),
        children: /* @__PURE__ */ o.jsx($, { ..._, children: /* @__PURE__ */ o.jsx(
          Dn,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: H(a, (I) => {
              var E;
              I.preventDefault(), (E = R.current) == null || E.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ o.jsx(
              In,
              {
                asChild: !0,
                disableOutsidePointerEvents: c,
                onEscapeKeyDown: u,
                onPointerDownOutside: m,
                onFocusOutside: f,
                onInteractOutside: d,
                onDismiss: v,
                children: /* @__PURE__ */ o.jsx(
                  os,
                  {
                    asChild: !0,
                    ...w,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: n,
                    currentTabStopId: j,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: H(l, (I) => {
                      x.isUsingKeyboardRef.current || I.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ o.jsx(
                      Ma,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": qi(g.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...p,
                        ref: S,
                        style: { outline: "none", ...p.style },
                        onKeyDown: H(p.onKeyDown, (I) => {
                          const z = I.target.closest("[data-radix-menu-content]") === I.currentTarget, K = I.ctrlKey || I.altKey || I.metaKey, q = I.key.length === 1;
                          z && (I.key === "Tab" && I.preventDefault(), !K && q && U(I.key));
                          const Q = R.current;
                          if (I.target !== Q || !Qh.includes(I.key)) return;
                          I.preventDefault();
                          const ie = C().filter((L) => !L.disabled).map((L) => L.ref.current);
                          Ei.includes(I.key) && ie.reverse(), wp(ie);
                        }),
                        onBlur: H(e.onBlur, (I) => {
                          I.currentTarget.contains(I.target) || (window.clearTimeout(O.current), P.current = "");
                        }),
                        onPointerMove: H(
                          e.onPointerMove,
                          Ut((I) => {
                            const E = I.target, z = F.current !== I.clientX;
                            if (I.currentTarget.contains(E) && z) {
                              const K = I.clientX > F.current ? "right" : "left";
                              D.current = K, F.current = I.clientX;
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
Pi.displayName = je;
var fp = "MenuGroup", Qn = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { role: "group", ...n, ref: t });
  }
);
Qn.displayName = fp;
var mp = "MenuLabel", _i = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e;
    return /* @__PURE__ */ o.jsx(Y.div, { ...n, ref: t });
  }
);
_i.displayName = mp;
var br = "MenuItem", zo = "menu.itemSelect", Lr = h.forwardRef(
  (e, t) => {
    const { disabled: r = !1, onSelect: n, ...s } = e, a = h.useRef(null), i = Yt(br, e.__scopeMenu), c = Zn(br, e.__scopeMenu), l = oe(t, a), u = h.useRef(!1), m = () => {
      const f = a.current;
      if (!r && f) {
        const d = new CustomEvent(zo, { bubbles: !0, cancelable: !0 });
        f.addEventListener(zo, (v) => n == null ? void 0 : n(v), { once: !0 }), Jo(f, d), d.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ o.jsx(
      Ii,
      {
        ...s,
        ref: l,
        disabled: r,
        onClick: H(e.onClick, m),
        onPointerDown: (f) => {
          var d;
          (d = e.onPointerDown) == null || d.call(e, f), u.current = !0;
        },
        onPointerUp: H(e.onPointerUp, (f) => {
          var d;
          u.current || (d = f.currentTarget) == null || d.click();
        }),
        onKeyDown: H(e.onKeyDown, (f) => {
          const d = c.searchRef.current !== "";
          r || d && f.key === " " || jn.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Lr.displayName = br;
var Ii = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, disabled: n = !1, textValue: s, ...a } = e, i = Zn(br, r), c = Mi(r), l = h.useRef(null), u = oe(t, l), [m, f] = h.useState(!1), [d, v] = h.useState("");
    return h.useEffect(() => {
      const b = l.current;
      b && v((b.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ o.jsx(
      Ht.ItemSlot,
      {
        scope: r,
        disabled: n,
        textValue: s ?? d,
        children: /* @__PURE__ */ o.jsx(ss, { asChild: !0, ...c, focusable: !n, children: /* @__PURE__ */ o.jsx(
          Y.div,
          {
            role: "menuitem",
            "data-highlighted": m ? "" : void 0,
            "aria-disabled": n || void 0,
            "data-disabled": n ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: H(
              e.onPointerMove,
              Ut((b) => {
                n ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: H(
              e.onPointerLeave,
              Ut((b) => i.onItemLeave(b))
            ),
            onFocus: H(e.onFocus, () => f(!0)),
            onBlur: H(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), hp = "MenuCheckboxItem", Di = h.forwardRef(
  (e, t) => {
    const { checked: r = !1, onCheckedChange: n, ...s } = e;
    return /* @__PURE__ */ o.jsx(Bi, { scope: e.__scopeMenu, checked: r, children: /* @__PURE__ */ o.jsx(
      Lr,
      {
        role: "menuitemcheckbox",
        "aria-checked": wr(r) ? "mixed" : r,
        ...s,
        ref: t,
        "data-state": to(r),
        onSelect: H(
          s.onSelect,
          () => n == null ? void 0 : n(wr(r) ? !0 : !r),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Di.displayName = hp;
var Oi = "MenuRadioGroup", [pp, gp] = ft(
  Oi,
  { value: void 0, onValueChange: () => {
  } }
), Li = h.forwardRef(
  (e, t) => {
    const { value: r, onValueChange: n, ...s } = e, a = De(n);
    return /* @__PURE__ */ o.jsx(pp, { scope: e.__scopeMenu, value: r, onValueChange: a, children: /* @__PURE__ */ o.jsx(Qn, { ...s, ref: t }) });
  }
);
Li.displayName = Oi;
var Fi = "MenuRadioItem", zi = h.forwardRef(
  (e, t) => {
    const { value: r, ...n } = e, s = gp(Fi, e.__scopeMenu), a = r === s.value;
    return /* @__PURE__ */ o.jsx(Bi, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ o.jsx(
      Lr,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...n,
        ref: t,
        "data-state": to(a),
        onSelect: H(
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
zi.displayName = Fi;
var eo = "MenuItemIndicator", [Bi, vp] = ft(
  eo,
  { checked: !1 }
), Vi = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, forceMount: n, ...s } = e, a = vp(eo, r);
    return /* @__PURE__ */ o.jsx(
      kt,
      {
        present: n || wr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ o.jsx(
          Y.span,
          {
            ...s,
            ref: t,
            "data-state": to(a.checked)
          }
        )
      }
    );
  }
);
Vi.displayName = eo;
var xp = "MenuSeparator", $i = h.forwardRef(
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
$i.displayName = xp;
var yp = "MenuArrow", Hi = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: r, ...n } = e, s = Or(r);
    return /* @__PURE__ */ o.jsx(Ra, { ...s, ...n, ref: t });
  }
);
Hi.displayName = yp;
var bp = "MenuSub", [E0, Ui] = ft(bp), zt = "MenuSubTrigger", Gi = h.forwardRef(
  (e, t) => {
    const r = mt(zt, e.__scopeMenu), n = Yt(zt, e.__scopeMenu), s = Ui(zt, e.__scopeMenu), a = Zn(zt, e.__scopeMenu), i = h.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = a, u = { __scopeMenu: e.__scopeMenu }, m = h.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return h.useEffect(() => m, [m]), h.useEffect(() => {
      const f = c.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [c, l]), /* @__PURE__ */ o.jsx(Yn, { asChild: !0, ...u, children: /* @__PURE__ */ o.jsx(
      Ii,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": r.open,
        "aria-controls": s.contentId,
        "data-state": qi(r.open),
        ...e,
        ref: En(t, s.onTriggerChange),
        onClick: (f) => {
          var d;
          (d = e.onClick) == null || d.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), r.open || r.onOpenChange(!0));
        },
        onPointerMove: H(
          e.onPointerMove,
          Ut((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !r.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              r.onOpenChange(!0), m();
            }, 100));
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          Ut((f) => {
            var v, b;
            m();
            const d = (v = r.content) == null ? void 0 : v.getBoundingClientRect();
            if (d) {
              const p = (b = r.content) == null ? void 0 : b.dataset.side, g = p === "right", x = g ? -5 : 5, y = d[g ? "left" : "right"], w = d[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + x, y: f.clientY },
                  { x: y, y: d.top },
                  { x: w, y: d.top },
                  { x: w, y: d.bottom },
                  { x: y, y: d.bottom }
                ],
                side: p
              }), window.clearTimeout(c.current), c.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: H(e.onKeyDown, (f) => {
          var v;
          const d = a.searchRef.current !== "";
          e.disabled || d && f.key === " " || ep[n.dir].includes(f.key) && (r.onOpenChange(!0), (v = r.content) == null || v.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Gi.displayName = zt;
var Wi = "MenuSubContent", Ki = h.forwardRef(
  (e, t) => {
    const r = Ti(je, e.__scopeMenu), { forceMount: n = r.forceMount, ...s } = e, a = mt(je, e.__scopeMenu), i = Yt(je, e.__scopeMenu), c = Ui(Wi, e.__scopeMenu), l = h.useRef(null), u = oe(t, l);
    return /* @__PURE__ */ o.jsx(Ht.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(kt, { present: n || a.open, children: /* @__PURE__ */ o.jsx(Ht.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ o.jsx(
      Jn,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...s,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (m) => {
          var f;
          i.isUsingKeyboardRef.current && ((f = l.current) == null || f.focus()), m.preventDefault();
        },
        onCloseAutoFocus: (m) => m.preventDefault(),
        onFocusOutside: H(e.onFocusOutside, (m) => {
          m.target !== c.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: H(e.onEscapeKeyDown, (m) => {
          i.onClose(), m.preventDefault();
        }),
        onKeyDown: H(e.onKeyDown, (m) => {
          var v;
          const f = m.currentTarget.contains(m.target), d = tp[i.dir].includes(m.key);
          f && d && (a.onOpenChange(!1), (v = c.trigger) == null || v.focus(), m.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ki.displayName = Wi;
function qi(e) {
  return e ? "open" : "closed";
}
function wr(e) {
  return e === "indeterminate";
}
function to(e) {
  return wr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function wp(e) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus(), document.activeElement !== t)) return;
}
function Cp(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function Np(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = r ? e.indexOf(r) : -1;
  let i = Cp(e, Math.max(a, 0));
  s.length === 1 && (i = i.filter((u) => u !== r));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== r ? l : void 0;
}
function jp(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const c = t[a], l = t[i], u = c.x, m = c.y, f = l.x, d = l.y;
    m > n != d > n && r < (f - u) * (n - m) / (d - m) + u && (s = !s);
  }
  return s;
}
function kp(e, t) {
  if (!t) return !1;
  const r = { x: e.clientX, y: e.clientY };
  return jp(r, t);
}
function Ut(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ep = Ri, Sp = Yn, Mp = Ai, Rp = Pi, Tp = Qn, Ap = _i, Pp = Lr, _p = Di, Ip = Li, Dp = zi, Op = Vi, Lp = $i, Fp = Hi, zp = Gi, Bp = Ki, Fr = "DropdownMenu", [Vp, S0] = $e(
  Fr,
  [Si]
), ge = Si(), [$p, Yi] = Vp(Fr), Xi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: r,
    dir: n,
    open: s,
    defaultOpen: a,
    onOpenChange: i,
    modal: c = !0
  } = e, l = ge(t), u = h.useRef(null), [m, f] = it({
    prop: s,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Fr
  });
  return /* @__PURE__ */ o.jsx(
    $p,
    {
      scope: t,
      triggerId: at(),
      triggerRef: u,
      contentId: at(),
      open: m,
      onOpenChange: f,
      onOpenToggle: h.useCallback(() => f((d) => !d), [f]),
      modal: c,
      children: /* @__PURE__ */ o.jsx(Ep, { ...l, open: m, onOpenChange: f, dir: n, modal: c, children: r })
    }
  );
};
Xi.displayName = Fr;
var Zi = "DropdownMenuTrigger", Ji = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, disabled: n = !1, ...s } = e, a = Yi(Zi, r), i = ge(r);
    return /* @__PURE__ */ o.jsx(Sp, { asChild: !0, ...i, children: /* @__PURE__ */ o.jsx(
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
        ref: En(t, a.triggerRef),
        onPointerDown: H(e.onPointerDown, (c) => {
          !n && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault());
        }),
        onKeyDown: H(e.onKeyDown, (c) => {
          n || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }
);
Ji.displayName = Zi;
var Hp = "DropdownMenuPortal", Qi = (e) => {
  const { __scopeDropdownMenu: t, ...r } = e, n = ge(t);
  return /* @__PURE__ */ o.jsx(Mp, { ...n, ...r });
};
Qi.displayName = Hp;
var ec = "DropdownMenuContent", tc = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = Yi(ec, r), a = ge(r), i = h.useRef(!1);
    return /* @__PURE__ */ o.jsx(
      Rp,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...a,
        ...n,
        ref: t,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (c) => {
          var l;
          i.current || (l = s.triggerRef.current) == null || l.focus(), i.current = !1, c.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, (c) => {
          const l = c.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, m = l.button === 2 || u;
          (!s.modal || m) && (i.current = !0);
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
tc.displayName = ec;
var Up = "DropdownMenuGroup", Gp = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
    return /* @__PURE__ */ o.jsx(Tp, { ...s, ...n, ref: t });
  }
);
Gp.displayName = Up;
var Wp = "DropdownMenuLabel", rc = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
    return /* @__PURE__ */ o.jsx(Ap, { ...s, ...n, ref: t });
  }
);
rc.displayName = Wp;
var Kp = "DropdownMenuItem", nc = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
    return /* @__PURE__ */ o.jsx(Pp, { ...s, ...n, ref: t });
  }
);
nc.displayName = Kp;
var qp = "DropdownMenuCheckboxItem", oc = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(_p, { ...s, ...n, ref: t });
});
oc.displayName = qp;
var Yp = "DropdownMenuRadioGroup", Xp = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(Ip, { ...s, ...n, ref: t });
});
Xp.displayName = Yp;
var Zp = "DropdownMenuRadioItem", sc = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(Dp, { ...s, ...n, ref: t });
});
sc.displayName = Zp;
var Jp = "DropdownMenuItemIndicator", ac = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(Op, { ...s, ...n, ref: t });
});
ac.displayName = Jp;
var Qp = "DropdownMenuSeparator", ic = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(Lp, { ...s, ...n, ref: t });
});
ic.displayName = Qp;
var e0 = "DropdownMenuArrow", t0 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
    return /* @__PURE__ */ o.jsx(Fp, { ...s, ...n, ref: t });
  }
);
t0.displayName = e0;
var r0 = "DropdownMenuSubTrigger", cc = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(zp, { ...s, ...n, ref: t });
});
cc.displayName = r0;
var n0 = "DropdownMenuSubContent", lc = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: r, ...n } = e, s = ge(r);
  return /* @__PURE__ */ o.jsx(
    Bp,
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
lc.displayName = n0;
var o0 = Xi, s0 = Ji, a0 = Qi, uc = tc, dc = rc, fc = nc, mc = oc, hc = sc, pc = ac, gc = ic, vc = cc, xc = lc;
const i0 = o0, c0 = s0, l0 = h.forwardRef(({ className: e, inset: t, children: r, ...n }, s) => /* @__PURE__ */ o.jsxs(
  vc,
  {
    ref: s,
    className: ee(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n,
    children: [
      r,
      /* @__PURE__ */ o.jsx($m, { className: "ml-auto" })
    ]
  }
));
l0.displayName = vc.displayName;
const u0 = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  xc,
  {
    ref: r,
    className: ee(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
u0.displayName = xc.displayName;
const yc = h.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ o.jsx(a0, { children: /* @__PURE__ */ o.jsx(
  uc,
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
yc.displayName = uc.displayName;
const Bt = h.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  fc,
  {
    ref: n,
    className: ee(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...r
  }
));
Bt.displayName = fc.displayName;
const d0 = h.forwardRef(({ className: e, children: t, checked: r, ...n }, s) => /* @__PURE__ */ o.jsxs(
  mc,
  {
    ref: s,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: r,
    ...n,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(pc, { children: /* @__PURE__ */ o.jsx(Ci, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
d0.displayName = mc.displayName;
const f0 = h.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ o.jsxs(
  hc,
  {
    ref: n,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(pc, { children: /* @__PURE__ */ o.jsx(Km, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
f0.displayName = hc.displayName;
const m0 = h.forwardRef(({ className: e, inset: t, ...r }, n) => /* @__PURE__ */ o.jsx(
  dc,
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
m0.displayName = dc.displayName;
const h0 = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  gc,
  {
    ref: r,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
h0.displayName = gc.displayName;
var Jr, Bo;
function p0() {
  if (Bo) return Jr;
  Bo = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, s = (x, y) => {
    for (var w in y)
      e(x, w, { get: y[w], enumerable: !0 });
  }, a = (x, y, w, C) => {
    if (y && typeof y == "object" || typeof y == "function")
      for (let j of r(y))
        !n.call(x, j) && j !== w && e(x, j, { get: () => y[j], enumerable: !(C = t(y, j)) || C.enumerable });
    return x;
  }, i = (x) => a(e({}, "__esModule", { value: !0 }), x), c = (x, y, w) => new Promise((C, j) => {
    var A = (O) => {
      try {
        S(w.next(O));
      } catch (P) {
        j(P);
      }
    }, R = (O) => {
      try {
        S(w.throw(O));
      } catch (P) {
        j(P);
      }
    }, S = (O) => O.done ? C(O.value) : Promise.resolve(O.value).then(A, R);
    S((w = w.apply(x, y)).next());
  }), l = {};
  s(l, {
    SessionContextProvider: () => d,
    useSession: () => p,
    useSessionContext: () => v,
    useSupabaseClient: () => b,
    useUser: () => g
  }), Jr = i(l);
  var u = Te, m = Uo(), f = (0, u.createContext)({
    isLoading: !0,
    session: null,
    error: null,
    supabaseClient: {}
  }), d = ({
    supabaseClient: x,
    initialSession: y = null,
    children: w
  }) => {
    const [C, j] = (0, u.useState)(y), [A, R] = (0, u.useState)(!y), [S, O] = (0, u.useState)();
    (0, u.useEffect)(() => {
      !C && y && j(y);
    }, [C, y]), (0, u.useEffect)(() => {
      let N = !0;
      function T() {
        return c(this, null, function* () {
          const {
            data: { session: D },
            error: F
          } = yield x.auth.getSession();
          if (N) {
            if (F) {
              O(F), R(!1);
              return;
            }
            j(D), R(!1);
          }
        });
      }
      return T(), () => {
        N = !1;
      };
    }, []), (0, u.useEffect)(() => {
      const {
        data: { subscription: N }
      } = x.auth.onAuthStateChange((T, D) => {
        D && (T === "SIGNED_IN" || T === "TOKEN_REFRESHED" || T === "USER_UPDATED") && j(D), T === "SIGNED_OUT" && j(null);
      });
      return () => {
        N.unsubscribe();
      };
    }, []);
    const P = (0, u.useMemo)(() => A ? {
      isLoading: !0,
      session: null,
      error: null,
      supabaseClient: x
    } : S ? {
      isLoading: !1,
      session: null,
      error: S,
      supabaseClient: x
    } : {
      isLoading: !1,
      session: C,
      error: null,
      supabaseClient: x
    }, [A, C, S]);
    return /* @__PURE__ */ (0, m.jsx)(f.Provider, { value: P, children: w });
  }, v = () => {
    const x = (0, u.useContext)(f);
    if (x === void 0)
      throw new Error("useSessionContext must be used within a SessionContextProvider.");
    return x;
  };
  function b() {
    const x = (0, u.useContext)(f);
    if (x === void 0)
      throw new Error("useSupabaseClient must be used within a SessionContextProvider.");
    return x.supabaseClient;
  }
  var p = () => {
    const x = (0, u.useContext)(f);
    if (x === void 0)
      throw new Error("useSession must be used within a SessionContextProvider.");
    return x.session;
  }, g = () => {
    var x, y;
    const w = (0, u.useContext)(f);
    if (w === void 0)
      throw new Error("useUser must be used within a SessionContextProvider.");
    return (y = (x = w.session) == null ? void 0 : x.user) != null ? y : null;
  };
  return Jr;
}
var g0 = p0();
function v0({ planetStats: e }) {
  const t = fe(null), r = fe(null), n = ae(() => {
    console.log("Creating new atmosphere shader material");
    let a = new k.Color(8900331);
    e.mass > 7 || e.radius > 2.5 ? e.temperature < 200 ? a = new k.Color(4620980) : e.temperature > 350 ? a = new k.Color(16752762) : a = new k.Color(11393254) : (e.temperature < 200 ? a = new k.Color(11584734) : e.temperature > 350 && (a = new k.Color(16758465)), e.precipitationCompound === "co2" ? a = new k.Color(13882323) : e.precipitationCompound === "methane" && (a = new k.Color(10145074)));
    const i = e.atmosphereStrength !== void 0 ? e.atmosphereStrength : 0.8, c = new k.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: a },
        strength: { value: i }
      },
      vertexShader: Go,
      fragmentShader: Wo,
      transparent: !0,
      side: k.BackSide,
      blending: k.AdditiveBlending,
      depthWrite: !1
    });
    return r.current = c, c;
  }, []);
  _e(() => {
    if (!r.current) return;
    console.log("Updating atmosphere shader uniforms");
    let a = new k.Color(8900331);
    e.mass > 7 || e.radius > 2.5 ? e.temperature < 200 ? a = new k.Color(4620980) : e.temperature > 350 ? a = new k.Color(16752762) : a = new k.Color(11393254) : (e.temperature < 200 ? a = new k.Color(11584734) : e.temperature > 350 && (a = new k.Color(16758465)), e.precipitationCompound === "co2" ? a = new k.Color(13882323) : e.precipitationCompound === "methane" && (a = new k.Color(10145074)));
    const i = e.atmosphereStrength !== void 0 ? e.atmosphereStrength : 0.8;
    r.current.uniforms.color.value = a, r.current.uniforms.strength.value = i;
  }, [e]), jt((a) => {
    r.current && (r.current.uniforms.time.value = a.clock.elapsedTime);
  });
  const s = ae(() => e.mass > 7 || e.radius > 2.5 ? e.radius * 1.15 : e.radius * 1.08, [e.mass, e.radius]);
  return /* @__PURE__ */ o.jsx(nt, { ref: t, args: [1, 64, 64], scale: s, children: /* @__PURE__ */ o.jsx("primitive", { object: n, attach: "material" }) });
}
function M0({
  classificationId: e = "UNCLASSIFIED",
  author: t = "UNKNOWN",
  type: r,
  biome: n,
  planetConfiguration: s,
  classificationConfig: a,
  content: i
}) {
  const c = g0.useSupabaseClient(), [l, u] = de(!1), [m, f] = de("detailed"), [d, v] = de(() => {
    const p = s ? tn(s) : {
      ...en,
      ...n ? { biome: n } : {},
      ...r ? { type: r } : {}
    };
    return (!p.landmarks || p.landmarks.length === 0) && (p.landmarks = so()), p;
  });
  _e(() => {
    if (!s && !n && !r) return;
    const p = s ? tn(s) : {
      ...en,
      ...n ? { biome: n } : {},
      ...r ? { type: r } : {}
    };
    (!p.landmarks || !Array.isArray(p.landmarks) || p.landmarks.length === 0) && (p.landmarks = so()), v(p);
  }, [s, n, r]), _e(() => {
    (async () => {
      var x;
      if (!c) return;
      const g = Number.parseInt(e);
      if (!isNaN(g))
        try {
          const { data: y, error: w } = await c.from("classifications").select("classificationConfiguration").eq("id", g).single();
          if (w || !((x = y == null ? void 0 : y.classificationConfiguration) != null && x.exportedValue)) return;
          const { exportedValue: C } = y.classificationConfiguration;
          v((j) => ({
            ...j,
            ...C.mass && { mass: C.mass },
            ...C.radius && { radius: C.radius }
          }));
        } catch (y) {
          console.error("Error fetching exported values:", y);
        }
    })();
  }, [e, c]), _e(() => {
    v((p) => ({
      ...p,
      density: Fc(p.mass, p.radius)
    }));
  }, [d.mass, d.radius]);
  const b = () => {
    switch (m) {
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
  return _e(() => {
    console.log("Current planet stats:", d), console.log("Current render mode:", m);
  }, [d, m]), /* @__PURE__ */ o.jsxs("div", { className: "w-full h-screen relative overflow-hidden", children: [
    /* @__PURE__ */ o.jsxs($o, { camera: { position: [0, 0, 10], fov: 45 }, children: [
      /* @__PURE__ */ o.jsx("color", { attach: "background", args: ["#020209"] }),
      /* @__PURE__ */ o.jsx("ambientLight", { intensity: 0.4 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [10, 10, 10], intensity: 2 }),
      /* @__PURE__ */ o.jsx("pointLight", { position: [-10, -10, -10], intensity: 0.5, color: "#b0c4de" }),
      /* @__PURE__ */ o.jsx("directionalLight", { position: [5, 5, 5], intensity: 1.5, castShadow: !0 }),
      /* @__PURE__ */ o.jsx(Cc, { preset: "sunset" }),
      m === "detailed" && /* @__PURE__ */ o.jsx(Lc, { planetStats: d }),
      m === "stylized" && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Gc, { planetStats: d }),
        /* @__PURE__ */ o.jsx(v0, { planetStats: d }),
        d.cloudCount && d.cloudCount > 0 && /* @__PURE__ */ o.jsx(Wc, { planetStats: d })
      ] }),
      m === "simple" && /* @__PURE__ */ o.jsx($c, { planetStats: d }),
      m === "standard" && /* @__PURE__ */ o.jsx(fl, { planetStats: d }),
      /* @__PURE__ */ o.jsx(Nc, { radius: 100, depth: 50, count: 5e3, factor: 4, saturation: 0, fade: !0, speed: 1 }),
      /* @__PURE__ */ o.jsx(Ho, { enableZoom: !0, enablePan: !0, enableRotate: !0 }),
      /* @__PURE__ */ o.jsxs("mesh", { position: [0, 0, -15], children: [
        /* @__PURE__ */ o.jsx("sphereGeometry", { args: [5, 32, 32] }),
        /* @__PURE__ */ o.jsx("meshBasicMaterial", { color: "#4060ff", transparent: !0, opacity: 0.03 })
      ] })
    ] }, m),
    /* @__PURE__ */ o.jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [
      /* @__PURE__ */ o.jsxs(i0, { children: [
        /* @__PURE__ */ o.jsx(c0, { asChild: !0, children: /* @__PURE__ */ o.jsxs(le, { variant: "outline", size: "sm", className: "bg-black/50 hover:bg-black/70 text-white", children: [
          b(),
          /* @__PURE__ */ o.jsx(qn, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ o.jsxs(yc, { className: "bg-black/80 border-slate-700 text-white", children: [
          /* @__PURE__ */ o.jsx(
            Bt,
            {
              className: m === "detailed" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => f("detailed"),
              children: "Detailed View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Bt,
            {
              className: m === "stylized" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => f("stylized"),
              children: "Stylized View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Bt,
            {
              className: m === "simple" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => f("simple"),
              children: "Simple View"
            }
          ),
          /* @__PURE__ */ o.jsx(
            Bt,
            {
              className: m === "standard" ? "bg-cyan-900/40" : "hover:bg-slate-700/50",
              onClick: () => f("standard"),
              children: "Standard Render"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsx(
        le,
        {
          variant: "outline",
          size: "icon",
          className: "bg-black/50 hover:bg-black/70 text-white",
          onClick: () => u(!l),
          children: /* @__PURE__ */ o.jsx(Ym, { className: "h-4 w-4" })
        }
      )
    ] }),
    l && /* @__PURE__ */ o.jsx(
      Zh,
      {
        planetStats: d,
        setPlanetStats: v,
        classificationId: e,
        author: t
      }
    )
  ] });
}
export {
  M0 as PlanetGenerator
};
