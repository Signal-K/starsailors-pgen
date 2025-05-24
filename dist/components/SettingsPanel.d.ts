import type { PlanetConfig } from "../utils/planet-config";
interface SettingsPanelProps {
    planetConfig: PlanetConfig;
    onChange: (config: Partial<PlanetConfig>) => void;
}
export default function SettingsPanel({ planetConfig, onChange }: SettingsPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
