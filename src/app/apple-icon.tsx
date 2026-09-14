import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0d",
        }}
      >
        <div
          style={{
            width: 132,
            height: 86,
            border: "8px solid #c8102e",
            borderBottomColor: "transparent",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 40,
              border: "3px solid #c8c8c8",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
