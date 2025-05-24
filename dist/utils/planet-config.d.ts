export interface PlanetConfig {
    type: "terrestrial" | "gaseous";
    seed: number;
    radius: number;
    temperature: number;
    biomass: number;
    mass: number;
    terrainRoughness: number;
    liquidHeight: number;
    volcanicActivity: number;
    continentSize: number;
    continentCount: number;
    noiseScale: number;
    debugMode?: boolean;
    visibleTerrains: {
        ocean: boolean;
        beach: boolean;
        lowland: boolean;
        midland: boolean;
        highland: boolean;
        mountain: boolean;
        snow: boolean;
    };
    colors: {
        atmosphere: string;
        ocean: string;
        oceanPattern: string;
        beach: string;
        lowland: string;
        midland: string;
        highland: string;
        mountain: string;
        snow: string;
    };
}
export declare const defaultPlanetConfig: PlanetConfig;
export declare const simplePlanetPresets: Record<string, PlanetConfig>;
export declare function getLiquidType(temperature: number): {
    name: string;
    color: string;
    patternColor: string;
};
export declare function getTemperatureAdjustedColors(temperature: number, biomass: number): {
    beach: string;
    lowland: string;
    midland: string;
    highland: string;
    mountain: string;
    snow: string;
};
export declare function getAutoType(mass: number, radius: number): "terrestrial" | "gaseous";
export declare function getSimplifiedColors(config: PlanetConfig): {
    primary: string;
    secondary: string;
    accent: string;
};
export declare function updateFromSimplifiedColors(config: PlanetConfig, colors: {
    primary: string;
    secondary: string;
    accent: string;
}): Partial<PlanetConfig>;
export declare function createSimplifiedConfig(config: PlanetConfig): {
    type: "terrestrial" | "gaseous";
    radius: number;
    mass: number;
    density: number;
    seed: number;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    fullConfig: PlanetConfig;
};
