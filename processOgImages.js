const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/ogimages'; // New input directory
const ogImageOutputDir = './public/optimized-images/og'; // Directory for OG images

// Create OG images directory if it doesn't exist
if (!fs.existsSync(ogImageOutputDir)) {
  fs.mkdirSync(ogImageOutputDir, { recursive: true });
}

const processOgImages = async () => {
  try {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
      const inputFilePath = path.join(inputDir, file);
      const ogImageFilePath = path.join(ogImageOutputDir, file);

      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        // Processing for Open Graph images
        await sharp(inputFilePath)
          .resize(1200, 630, { fit: 'cover' })
          .toFormat('jpeg', { quality: 85 })
          .toFile(ogImageFilePath.replace(/\.\w+$/, '.jpg'));

        console.log(`Processed OG image for ${file}`);
      } else {
        console.log(`Skipping unsupported file for OG: ${file}`);
      }
    }
  } catch (error) {
    console.error('Error processing OG images', error);
  }
};

processOgImages();
