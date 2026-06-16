import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Work_Sans, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "PEACE OF NATURE | Luxury Resort & Event Destination",
  description: "Experience ultimate quiet luxury, private beachfront weddings, and custom event planning at Peace of Nature Luxury Resorts, Mumbai. The perfect escape.",
  keywords: ["luxury resort", "event destination", "beachfront weddings", "Peace of Nature", "quiet luxury", "boutique hotel", "Mumbai resort"],
  authors: [{ name: "Peace of Nature Resorts" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${workSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* Load Google Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body-md">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
