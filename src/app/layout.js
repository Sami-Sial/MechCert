import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "MechCert | Mechanical Certification Platform",
    template: "%s | MechCert",
  },
  description:
    "Earn mechanical certifications online with MechCert. Learn, practice, and get certified with expert-designed courses and real-world projects.",
  keywords: [
    "mechanical certification",
    "MechCert",
    "online courses",
    "engineering training",
  ],
  metadataBase: new URL("https://mech-cert.vercel.app"),
  openGraph: {
    title: "MechCert — Mechanical Certification Platform",
    description:
      "Learn, train, and get certified in mechanical engineering online.",
    url: "https://mech-cert.vercel.app",
    siteName: "MechCert",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MechCert preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MechCert",
    description: "Online mechanical certification platform",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
