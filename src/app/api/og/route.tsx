import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? siteConfig.name;
  const type = searchParams.get("type") ?? "Page";
  const link = searchParams.get("link") ?? siteConfig.url.base;
  const heading =
    title.length > 96 ? `${title.substring(0, 96).trim()}...` : title;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#f5f5f5",
        border: "8px solid #f5f5f5",
        padding: "48px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <div
          style={{
            display: "flex",
            width: "64px",
            height: "64px",
            background: "#f5f5f5",
            color: "#0a0a0a",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            fontWeight: 900,
          }}
        >
          M
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "28px", fontWeight: 800 }}>
            {siteConfig.name}
          </div>
          <div style={{ color: "#b8b8b8", fontSize: "18px" }}>
            {siteConfig.author}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div
          style={{
            color: "#b8b8b8",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {type}
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: "760px",
            fontSize: "64px",
            lineHeight: 1,
            fontWeight: 900,
          }}
        >
          {heading}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#d4d4d4",
          fontSize: "22px",
        }}
      >
        <div>{link}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{ width: "160px", height: "8px", background: "#f5f5f5" }}
          />
          <div style={{ width: "8px", height: "8px", background: "#f5f5f5" }} />
          <div style={{ width: "8px", height: "8px", background: "#f5f5f5" }} />
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
