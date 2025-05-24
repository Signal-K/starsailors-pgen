interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    label?: string;
}
export default function ColorPicker({ color, onChange, label }: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
