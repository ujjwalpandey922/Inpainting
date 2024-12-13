import React from "react";
import { Eraser, PenTool } from "lucide-react";

interface BrushControlsProps {
  brushRadius: number;
  isErasing: boolean;
  onBrushRadiusChange: (radius: number) => void;
  onErasingToggle: () => void;
  onUndo: () => void;
  onClear: () => void;
  onGenerateMask: () => void;
}

export const BrushControls: React.FC<BrushControlsProps> = ({
  brushRadius,
  isErasing,
  onBrushRadiusChange,
  onErasingToggle,
  onUndo,
  onClear,
  onGenerateMask,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="brush-size" className="text-sm font-medium">
          Brush Size:
        </label>
        <input
          id="brush-size"
          type="range"
          min="1"
          max="50"
          value={brushRadius}
          onChange={(e) => onBrushRadiusChange(Number(e.target.value))}
          className="w-32"
        />
      </div>

      <button
        onClick={onErasingToggle}
        className={`p-2 rounded-lg ${
          isErasing ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
        }`}
      >
        {isErasing ? <Eraser size={20} /> : <PenTool size={20} />}
      </button>

      <button
        onClick={onUndo}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        Undo
      </button>

      <button
        onClick={onClear}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        Clear
      </button>

      <button
        onClick={onGenerateMask}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Generate Mask
      </button>
    </div>
  );
};
