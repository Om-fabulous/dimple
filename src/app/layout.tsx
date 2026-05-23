import { ThemeProvider } from "@/lib/theme";
import { ThemeScript } from "@/components/ThemeScript";
import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dimple Agarwal | Mindset Mentor & Emotional Healing Coach",
  description:
    "Heal emotionally, rebuild confidence, and transform your mindset with Dimple Agarwal — mindset mentor, emotional healing guide, and women empowerment coach.",
  keywords: [
    "emotional healing",
    "mindset coach",
    "confidence building",
    "women empowerment",
    "grief transformation",
    "Dimple Agarwal",
  ],
  openGraph: {
    title: "Dimple Agarwal | Heal Your Mind. Transform Your Life.",
    description:
      "Emotional healing, mindset transformation, and confidence coaching for women ready to reclaim their peace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-page text-heading antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
