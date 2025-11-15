const sharp = require('sharp');
const path = require('path');

async function removeBackground() {
  const inputPath = path.join(__dirname, 'frontend/public/images/herb-kielpino.png');
  const outputPath = path.join(__dirname, 'frontend/public/images/herb-kielpino-clean.png');

  try {
    // Read the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log('Processing image:', metadata.width, 'x', metadata.height);

    // Trim the image to remove excess whitespace and crop to content
    await image
      .trim({
        background: { r: 255, g: 255, b: 255 }, // white background
        threshold: 10 // tolerance for color matching
      })
      .toFile(outputPath);

    console.log('✓ Background removed successfully!');
    console.log('✓ Output saved to:', outputPath);

    // Get new metadata
    const newMeta = await sharp(outputPath).metadata();
    console.log('✓ New dimensions:', newMeta.width, 'x', newMeta.height);

  } catch (error) {
    console.error('Error processing image:', error);
  }
}

removeBackground();
