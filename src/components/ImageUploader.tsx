import React, { useCallback } from "react";
import { Upload } from "lucide-react";

interface ImageUploaderProps {
  onImageUpload: (image: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUpload,
}) => {
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          onImageUpload(result);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-800 border-dashed rounded-lg cursor-pointer  bg-gray-50/5 hover:bg-gray-50/20">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-10 h-10 mb-3 text-gray-800" />
          <p className="mb-2 text-sm text-gray-900">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-900">
            PNG, JPG or JPEG (MAX. 800x400px)
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/png,image/jpeg,image/jpg"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};
