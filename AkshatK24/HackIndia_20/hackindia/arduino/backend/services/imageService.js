const { createCanvas, loadImage } = require('canvas');

const WIDTH = 800;
const HEIGHT = 600;
const FONT_SIZE = 24;

async function createImageWithText(text) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Load background image (use a local file or URL)
  const background = await loadImage('/home/zealousideal/Documents/coding/Storytelling/arduino/backend/Images_image.png');
  ctx.drawImage(background, 0, 0, WIDTH, HEIGHT);

  // Set text properties
  ctx.font = `${FONT_SIZE}px Arial`;
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Split text into lines that fit the width of the canvas
  const lines = wrapText(text, WIDTH - 40, FONT_SIZE);

  // Draw text on the canvas
  lines.forEach((line, index) => {
    ctx.fillText(line, WIDTH / 2, HEIGHT / 2 - (lines.length / 2 - index) * FONT_SIZE);
  });

  return canvas.toBuffer();
}

// Wrap text into multiple lines
function wrapText(text, maxWidth, fontSize) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach((word) => {
    const testLine = `${currentLine} ${word}`.trim();
    const testWidth = getTextWidth(testLine, fontSize);

    if (testWidth > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  lines.push(currentLine);
  return lines;
}

// Get the width of text for a given font size
function getTextWidth(text, fontSize) {
  const canvas = createCanvas(0, 0);
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px Arial`;
  return ctx.measureText(text).width;
}

module.exports = { createImageWithText };
