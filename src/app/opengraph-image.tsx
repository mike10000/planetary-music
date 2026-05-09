import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Planetary Music — Making Music Around The World";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#fefcf8",
          position: "relative",
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
          width={1040}
          height={460}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 36,
            fontSize: 22,
            color: "#1a2744",
            opacity: 0.65,
            fontFamily: "serif",
            letterSpacing: 0.5,
          }}
        >
          planetarymusic.com
        </div>
      </div>
    ),
    { ...size }
  );
}
