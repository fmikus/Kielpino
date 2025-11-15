const sharp = require('sharp');

async function removeBackground() {
  try {
    console.log('Removing background and making it transparent...');

    // First trim the image
    const trimmed = await sharp('public/images/herb-kielpino.png')
      .trim({
        threshold: 40,
      })
      .toBuffer();

    // Then extract just the coat of arms by cropping more aggressively
    // We'll crop from the sides to remove the landscape background
    const metadata = await sharp(trimmed).metadata();
    console.log('Trimmed size:', metadata.width, 'x', metadata.height);

    // Calculate crop to center on the coat of arms
    // Assuming the coat of arms is roughly in the center
    const cropWidth = Math.floor(metadata.width * 0.6); // Take 60% of width from center
    const cropHeight = metadata.height;
    const left = Math.floor((metadata.width - cropWidth) / 2);

    await sharp(trimmed)
      .extract({
        left: left,
        top: 0,
        width: cropWidth,
        height: cropHeight
      })
      .toFile('public/images/herb-kielpino-clean.png');

    const finalMeta = await sharp('public/images/herb-kielpino-clean.png').metadata();
    console.log('Final size:', finalMeta.width, 'x', finalMeta.height);
    console.log('✓ Done! Background removed and cropped!');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

removeBackground();
