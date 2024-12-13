import React, { useRef, useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import { BrushControls } from "./BrushControls";
import { createMaskFromCanvas } from "../utils/canvas";

interface CanvasProps {
  image: string | null;
  onMaskGenerated: (maskImage: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({ image, onMaskGenerated }) => {
  const canvasRef = useRef<CanvasDraw | null>(null);
  const [brushRadius, setBrushRadius] = useState(12);
  const [isErasing, setIsErasing] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0); // Add key to force re-render

  // Reset canvas when image changes
  useEffect(() => {
    setCanvasKey((prev) => prev + 1);
  }, [image]);

  const handleClear = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
      onMaskGenerated(""); // Clear the mask preview
    }
  };

  const handleUndo = () => {
    if (canvasRef.current) {
      canvasRef.current.undo();
    }
  };

  const generateMask = () => {
    if (canvasRef.current) {
      // @ts-expect-error canvasRef is not null
      const canvas = canvasRef.current.canvas.drawing;
      const maskImage = createMaskFromCanvas(canvas);
      onMaskGenerated(maskImage);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative border rounded-lg overflow-hidden">
        <CanvasDraw
          key={canvasKey}
          ref={canvasRef}
          brushColor={isErasing ? "#000000" : "#ffffff"}
          brushRadius={brushRadius}
          canvasWidth={800}
          canvasHeight={400}
          imgSrc={image || ""}
          hideGrid
          backgroundColor="#000000"
          lazyRadius={0}
          immediateLoading={true}
        />
      </div>

      <BrushControls
        brushRadius={brushRadius}
        isErasing={isErasing}
        onBrushRadiusChange={setBrushRadius}
        onErasingToggle={() => setIsErasing(!isErasing)}
        onUndo={handleUndo}
        onClear={handleClear}
        onGenerateMask={generateMask}
      />
    </div>
  );
};
