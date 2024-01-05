const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/images';
const outputDir = './public/optimized-images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const processImages = async () => {
  try {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
      try {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file);

        if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
          await sharp(inputFilePath)
            .resize(300)
            .toFormat('webp')
            .toFile(outputFilePath.replace(/\.\w+$/, '.webp'));

          console.log(`Processed ${file}`);
        } else if (file.match(/\.svg$/i)) {
          fs.copyFileSync(inputFilePath, outputFilePath);
          console.log(`Copied ${file}`);
        } else {
          console.log(`Skipping unsupported file: ${file}`);
        }
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
  } catch (error) {
    console.error('Error processing images', error);
  }
};

processImages();
