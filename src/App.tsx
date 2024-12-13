import { useState } from "react";
import { ImageUploader } from "./components/ImageUploader";
import { Canvas } from "./components/Canvas";
import { ImagePreview } from "./components/ImagePreview";
import { Brush } from "lucide-react";

function App() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [maskImage, setMaskImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-12 banner">
      <div className="max-w-5xl mx-auto px-4 border border-gray-900 backdrop-blur-md rounded-xl p-4">
        <div className="flex items-center gap-3 mb-8">
          <Brush className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Image Inpainting Tool
          </h1>
        </div>

        {!uploadedImage ? (
          <ImageUploader onImageUpload={setUploadedImage} />
        ) : (
          <div className="space-y-8">
            <Canvas image={uploadedImage} onMaskGenerated={setMaskImage} />
            <ImagePreview originalImage={uploadedImage} maskImage={maskImage} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
