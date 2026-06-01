import { writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public/images");

async function removeDarkBackground(input, threshold = 48) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .png()
    .toBuffer();
}

const textOverlay = Buffer.from(`<svg width="680" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="630" fill="#141313"/>
  <text x="56" y="372" fill="#e5e2e1" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700">THE EVOLUTION OF THE</text>
  <text x="56" y="426" fill="#e5e2e1" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700">OLYMPIC PLATE</text>
  <text x="56" y="472" fill="#c6c6c6" font-family="Arial, Helvetica, sans-serif" font-size="22">Patented modular system. Up to 50 lb.</text>
  <text x="56" y="502" fill="#c6c6c6" font-family="Arial, Helvetica, sans-serif" font-size="22">One plate, infinite configurations.</text>
  <rect x="56" y="536" width="286" height="48" fill="#e5e2e1"/>
  <text x="76" y="567" fill="#141313" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" letter-spacing="2">PARTNER WITH APEX</text>
</svg>`);

const hero = await sharp(path.join(publicDir, "figma/hero-smokey-plates.png"))
  .resize(520, 630, { fit: "cover", position: "right" })
  .toBuffer();

const logoSource = await sharp(path.join(publicDir, "figma/apex-logo-share.png"))
  .resize(420)
  .toBuffer();

const logo = await removeDarkBackground(logoSource);

const ogImage = await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: "#141313",
  },
})
  .composite([
    { input: hero, left: 680, top: 0 },
    { input: textOverlay, left: 0, top: 0 },
    { input: logo, left: 56, top: 48 },
  ])
  .png()
  .toBuffer();

const outputPath = path.join(publicDir, "og-share.png");
await writeFile(outputPath, ogImage);

console.log("Generated OG share image:", outputPath);
