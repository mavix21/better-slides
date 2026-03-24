import { ImageResponse } from "next/og";

import { decks, getDeckBySlug } from "@/lib/decks";

export function generateStaticParams() {
  return decks.map((deck) => ({ slug: deck.slug }));
}

export const alt = "Deck preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(
  family: string,
  weight: number
): Promise<ArrayBuffer | null> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
  const css = await (
    await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const match = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype|woff2)'\)/
  );
  if (!match?.[1]) return null;

  return await (await fetch(match[1])).arrayBuffer();
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deck = getDeckBySlug(slug);

  const title = deck?.title ?? "Deck";
  const eyebrow = deck?.eyebrow ?? "";

  const fontRegular = await loadFont("Geist", 400);
  const fontSemibold = await loadFont("Geist", 600);

  const fonts: { name: string; data: ArrayBuffer; weight: 400 | 600 }[] = [];
  if (fontRegular) fonts.push({ name: "Geist", data: fontRegular, weight: 400 });
  if (fontSemibold) fonts.push({ name: "Geist", data: fontSemibold, weight: 600 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          background: "black",
          fontFamily: fonts.length > 0 ? "Geist" : "sans-serif",
        }}
      >
        {/* Radial gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: 64,
          }}
        >
          {eyebrow && (
            <p
              style={{
                fontSize: 20,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "white",
              margin: 0,
              maxWidth: 900,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
