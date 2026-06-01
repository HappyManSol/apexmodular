import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";

export const alt = "APEX MODULAR — The Evolution of the Olympic Plate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [heroImage, logoImage] = await Promise.all([
    readFile(
      path.join(process.cwd(), "public/images/figma/hero-smokey-plates.png"),
    ),
    readFile(path.join(process.cwd(), "public/images/figma/apex-logo-share.png")),
  ]);

  const heroSrc = `data:image/png;base64,${heroImage.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logoImage.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#141313",
        }}
      >
        <img
          src={heroSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "75% center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(20,19,19,0.94) 0%, rgba(20,19,19,0.72) 50%, rgba(20,19,19,0.25) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "48px 64px 56px",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={440}
            height={120}
            style={{
              objectFit: "contain",
              objectPosition: "left center",
              mixBlendMode: "lighten",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                margin: 0,
                maxWidth: 760,
                fontSize: 54,
                fontWeight: 800,
                lineHeight: 1.08,
                textTransform: "uppercase",
                color: "#e5e2e1",
              }}
            >
              The Evolution of the Olympic Plate
            </h1>
            <p
              style={{
                margin: 0,
                marginTop: 20,
                maxWidth: 640,
                fontSize: 22,
                lineHeight: 1.45,
                color: "#c6c6c6",
              }}
            >
              Patented modular system. Up to 50 lb. One plate, infinite
              configurations.
            </p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e5e2e1",
                color: "#141313",
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                padding: "14px 28px",
              }}
            >
              Partner With Apex
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
