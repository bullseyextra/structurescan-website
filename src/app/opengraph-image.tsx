import type { ImageResponseOptions } from "next/server";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const options: ImageResponseOptions = {
    ...size,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f1e8",
          color: "#241c18",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c8102e",
            fontWeight: 600,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.promise}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#6b5f56",
            }}
          >
            GPR, utility locating, and damage prevention · Winnipeg
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#4a3c36",
          }}
        >
          <span>{site.name}</span>
          <span>{site.phoneDisplay}</span>
        </div>
      </div>
    ),
    options,
  );
}
