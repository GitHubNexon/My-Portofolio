import "./globals.css";
import { ReactNode } from "react";
import LayoutWrapper from "../components/layout-wrapper";
import ParallaxWrapper from "../components/parallax-wrapper";
import "aos/dist/aos.css";
import CursorWrapper from "@/components/cursor-wrapper";

export const metadata = {
  title: "jay-yem-portfolio",
  description:
    "Portfolio of John Mark Pulmano, a Full Stack Developer specializing in AI, web, and mobile solutions.",
  keywords:
    "full stack developer, portfolio, React, Node.js, Python, AI, web development, mobile apps",
  author: "John Mark Pulmano",
  openGraph: {
    title: "John Mark Pulmano - Portfolio",
    description:
      "Explore the portfolio of John Mark Pulmano, showcasing expertise in full-stack development and AI solutions.",
    url: "https://johnmarkpulmano.dev",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Mark Pulmano Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mark Pulmano - Portfolio",
    description:
      "Discover the work of John Mark Pulmano, a Full Stack Developer.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/dev.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body>
        <ParallaxWrapper>
          <CursorWrapper>
            <LayoutWrapper fadeInDurationMs={2000}>{children}</LayoutWrapper>
          </CursorWrapper>
        </ParallaxWrapper>
      </body>
    </html>
  );
}
