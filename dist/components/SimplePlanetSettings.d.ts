import type { PlanetConfig } from "../utils/planet-config";
interface SimplePlanetSettingsProps {
    planetConfig: PlanetConfig;
    onChange: (config: Partial<PlanetConfig>) => void;
}
export default function SimplePlanetSettings({ planetConfig, onChange }: SimplePlanetSettingsProps): import("react/jsx-runtime").JSX.Element;
export {};
