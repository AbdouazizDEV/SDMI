import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1B3A57",
          color: "#ffffff",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 28, maxWidth: 900, lineHeight: 1.35 }}>
          {siteConfig.legalName}
        </div>
      </div>
    ),
    size,
  );
}
