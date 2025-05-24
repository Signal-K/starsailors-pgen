import type { PlanetConfig } from "../utils/planet-config";
interface PlanetViewerProps {
    planetConfig: PlanetConfig;
    onConfigChange: (config: Partial<PlanetConfig>) => void;
}
export default function PlanetViewer({ planetConfig, onConfigChange }: PlanetViewerProps): import("react/jsx-runtime").JSX.Element;
export {};
