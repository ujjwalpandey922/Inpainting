export const createMaskFromCanvas = (canvas: HTMLCanvasElement): string => {
  const context = canvas.getContext("2d");
  if (!context) return "";

  // Create a new canvas for the mask
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = canvas.width;
  maskCanvas.height = canvas.height;
  const maskContext = maskCanvas.getContext("2d");

  if (!maskContext) return "";

  // Fill with black background
  maskContext.fillStyle = "#000000";
  maskContext.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

  // Get the image data from the original canvas
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Create new image data for the mask
  const maskImageData = maskContext.createImageData(
    canvas.width,
    canvas.height
  );
  const maskData = maskImageData.data;

  for (let i = 0; i < data.length; i += 4) {
    // Check if the pixel has been drawn on (any non-black pixel)
    const isDrawn = data[i] > 0 || data[i + 1] > 0 || data[i + 2] > 0;

    // Set mask pixel to white if drawn, black if not
    const color = isDrawn ? 255 : 0;
    maskData[i] = color; // R
    maskData[i + 1] = color; // G
    maskData[i + 2] = color; // B
    maskData[i + 3] = 255; // A
  }

  maskContext.putImageData(maskImageData, 0, 0);
  return maskCanvas.toDataURL("image/png");
};
