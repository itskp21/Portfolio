import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}

// Updated metadata for Kush Prakhar's Portfolio
export const metadata: Metadata = {
  title: {
    default: "Kush Prakhar Portfolio",
    template: "%s - Kush Prakhar",
  },
  description:
    "Portfolio of Kush Prakhar, a Machine Learning & AI Researcher specializing in Generative AI, Deep Learning, and NLP. Showcasing cutting-edge projects and AI-driven innovations.",
  applicationName: "Kush Prakhar Portfolio",
  authors: [
    {
      name: "Kush Prakhar",
      url: "https://www.linkedin.com/in/kush-prakhar/",
    },
  ],
  generator: "Next.js",
  referrer: "origin",
  themeColor: "#0a192f",
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1",
  creator: "Kush Prakhar",
  publisher: "Kush Prakhar",
};
