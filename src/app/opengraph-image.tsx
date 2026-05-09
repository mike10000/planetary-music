import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Planetary Music — Elevating Events Across the East Coast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = join(process.cwd(), "public/brand/logo-full.png");
  const logoBuffer = await readFile(logoPath);
  const logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a2744",
          color: "white",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "#d4a84b",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt=""
          width={760}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 38,
            color: "#d4a84b",
            fontStyle: "italic",
          }}
        >
          Making Music Around The World
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          Elevating Events Across the East Coast
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 32,
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          planetarymusic.com
        </div>
      </div>
    ),
    { ...size }
  );
}
