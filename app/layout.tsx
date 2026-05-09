import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhruv Garg | Technical Program Manager",
  description:
    "Technical Program Manager with experience across AWS cloud infrastructure, mission-critical systems, satellite communications, and operational leadership.",
  openGraph: {
    title: "Dhruv Garg | Technical Program Manager",
    description:
      "Cloud infrastructure, mission-critical systems, AWS leadership, and technical program execution.",
    url: "https://dhruv-garg.com",
    siteName: "Dhruv Garg",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}