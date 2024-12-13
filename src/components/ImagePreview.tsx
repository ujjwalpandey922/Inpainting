import React from "react";

interface ImagePreviewProps {
  originalImage: string | null;
  maskImage: string | null;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  originalImage,
  maskImage,
}) => {
  if (!originalImage) return null;

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="text-xl font-semibold">Preview</h2>
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Original Image</h3>
          <img
            src={originalImage}
            alt="Original"
            className="w-[400px] h-[200px] object-contain border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium">Mask Image</h3>
          <div className="w-[400px] h-[200px] border rounded-lg bg-gray-100/5 flex items-center justify-center">
            {maskImage ? (
              <img
                src={maskImage}
                alt="Mask"
                className="w-full h-full object-contain"
              />
            ) : (
              <p className="text-gray-900 text-sm">
                Draw and generate a mask to see preview
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
