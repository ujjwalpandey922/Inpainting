# Image Inpainting Tool

A React-based web application that allows users to upload images, draw masks on them, and generate black and white mask images for inpainting purposes.

## Features

- Image upload with drag & drop support
- Interactive canvas drawing with adjustable brush size
- Eraser tool for precise mask editing
- Undo/Clear functionality
- Real-time preview of original and mask images
- Responsive design with Tailwind CSS

## Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **react-canvas-draw** - Drawing functionality
- **lucide-react** - Modern icon set

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
# or
npm install --legacy-peer-deps  # if you encounter dependency conflicts
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Challenges and Solutions

During the development of this project, we encountered several challenges:

1. **Dependency Conflicts**: Initially, there were peer dependency conflicts with `react-canvas-draw`. We resolved this by using `--legacy-peer-deps` during installation to ensure compatibility with our React version.

2. **Canvas State Management**: Managing the canvas state and ensuring proper clearing/resetting of the drawing area required careful handling of component lifecycle and state. We implemented a key-based re-rendering solution to force canvas reset when needed.

3. **Mask Generation**: Converting the drawn areas to a proper black and white mask required understanding of canvas pixel manipulation. We created a dedicated utility function that properly handles the conversion while maintaining image dimensions and quality.

4. **Library Learning Curve**: Working with `react-canvas-draw` required understanding its specific APIs and limitations. We spent time exploring the library's capabilities to implement features like brush size control and eraser functionality effectively.

## Usage

1. Click or drag-and-drop to upload an image
2. Use the brush tool to draw the mask area (white)
3. Adjust brush size using the slider
4. Toggle between brush and eraser as needed
5. Use undo/clear for corrections
6. Click "Generate Mask" to create the black and white mask
7. View both original and mask images in the preview section

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
