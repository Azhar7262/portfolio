import sharp from "sharp";
import { createCanvas, Image, loadImage } from "canvas";

const INPUT = "Selected photo.jpeg";
const OUTPUT = "src/assets/profile.png";
const OUT_COLOR = "src/assets/profile.jpg"; // full-quality color on a soft light-gray backdrop
const OUT_CLEAN = "src/assets/profile_clean.png"; // transparent PNG

// 1) Insert your new photo in place of the old one (keeps the transparent background):
sharp(INPUT)
  .resize(1080, 1080, { fit: "cover", position: "center" })
  .toFile(OUTPUT)
  .then(() => {
    console.log(`\u2705 Old picture replaced with your new one: ${OUTPUT}`);
    return prepareCutout();
  })
  .catch((e) => {
    console.error("\u2717 Failed:", e.message);
    process.exit(1);
  });

async function prepareCutout() {
  // Load the transparent PNG.
  const png = await loadImage(OUTPUT);
  // Load the transparent image with alpha as a resource to composite over a plain backdrop.
  const alpha = await loadImage(OUTPUT);

  const size = 1080;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");

  // Soft professional light-gray backdrop.
  ctx.fillStyle = "#efeeee";
  ctx.fillRect(0, 0, size, size);

  // Place the subject on top.
  ctx.drawImage(alpha, 0, 0, size, size);

  await sharp(canvas.toBuffer()).png().toFile(OUT_CLEAN);
  console.log(`\u2705 Cut-out PNG (transparent background): ${OUT_CLEAN}`);

  // 2) Full-quality color version on the same soft light-gray backdrop.
  const colorCanvas = createCanvas(size, size);
  const colorCtx = colorCanvas.getContext("2d");
  colorCtx.fillStyle = "#efeeee";
  colorCtx.fillRect(0, 0, size, size);

  // Minor: load a colour-only copy of the source for a crisp colour backdrop.
  const colorOnly = await sharp(OUTPUT).removeAlpha().toBuffer();
  const colorImage = await loadImage(colorOnly);
  colorCtx.drawImage(colorImage, 0, 0, size, size);

  await sharp(colorCanvas.toBuffer()).jpeg({ quality: 100 }).toFile(OUT_COLOR);
  console.log(`\u2705 Full-quality colour photo on light-gray backdrop: ${OUT_COLOR}`);
}
