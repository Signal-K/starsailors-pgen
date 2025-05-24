import type { PlanetConfig } from "../utils/planet-config";
interface SimplePlanetViewerProps {
    planetConfig: PlanetConfig;
    onConfigChange: (config: Partial<PlanetConfig>) => void;
}
export default function SimplePlanetViewer({ planetConfig, onConfigChange }: SimplePlanetViewerProps): import("react/jsx-runtime").JSX.Element;
export {};
