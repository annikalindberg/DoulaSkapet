const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/images'; // Directory where your original images are stored
const outputDir = './public/optimized-images'; // Directory where optimized images will be stored

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to process images
const processImages = async () => {
  try {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
      const inputFilePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, file);

      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        // Resize and convert images here (example: resize to width 300 and convert to webp)
        await sharp(inputFilePath)
          .resize(300)
          .toFormat('webp')
          .toFile(outputFilePath.replace(/\.\w+$/, '.webp'));

        console.log(`Processed ${file}`);
      } else if (file.match(/\.svg$/i)) {
        // For SVG files, just copy them to the output directory
        fs.copyFileSync(inputFilePath, outputFilePath);
        console.log(`Copied ${file}`);
      } else {
        console.log(`Skipping unsupported file: ${file}`);
      }
    }
  } catch (error) {
    console.error('Error processing images', error);
  }
};

processImages();
