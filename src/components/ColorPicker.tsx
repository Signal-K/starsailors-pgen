"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { HexColorPicker } from "react-colorful"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  label?: string
}

export default function ColorPicker({ color, onChange, label }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [localColor, setLocalColor] = useState(color)

  // Update local color when prop changes
  useEffect(() => {
    setLocalColor(color)
  }, [color])

  // Handle manual hex input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLocalColor(value)

    // Only update parent if it's a valid hex color
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      onChange(value)
    }
  }

  // Handle color picker change
  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor)
    onChange(newColor)
  }

  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label className="text-xs">{label}</Label>}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="flex h-8 cursor-pointer">
            <div
              className="w-8 h-8 rounded-l border border-r-0 border-gray-600"
              style={{ backgroundColor: localColor }}
            />
            <Input
              type="text"
              value={localColor}
              onChange={handleInputChange}
              className="rounded-l-none w-24 h-8 font-mono text-xs"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3" side="right">
          <HexColorPicker color={localColor} onChange={handleColorChange} />
        </PopoverContent>
      </Popover>
    </div>
  );
};