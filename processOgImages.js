const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './assets/originals'; // Image input directory
const outputDir = './assets/optimized-images'; // Image output directory for optimized images

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const processImages = async () => {
  const files = fs.readdirSync(inputDir);

  for (let file of files) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);

    // Process image with sharp
    try {
      const image = sharp(inputFilePath);
      const metadata = await image.metadata();

      if (metadata.format === 'webp') {
        await image
          .resize(300, 200, { // Adjust the resize dimensions as necessary
            fit: 'cover',
            // You can specify a kernel for better quality resizing, e.g., kernel: sharp.kernel.lanczos3
          })
          .webp({ quality: 90 }) // Try increasing the quality
          .sharpen() // Add sharpening, adjust the parameters as needed
          .toFile(outputFilePath.replace(/\.\w+$/, '.webp'));

        console.log(`Processed image to ${outputFilePath}`);
      } else {
        console.log(`Skipping unsupported file format: ${file}`);
      }
    } catch (error) {
      console.error('Error processing image:', error);
    }
  }
};

processImages();
