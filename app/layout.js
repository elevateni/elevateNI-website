import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "ElevateNI",
    template: "%s | ElevateNI",
  },
  description: "ElevateNI Student Conference",
  openGraph: {
    title: "elevateNI.com",
    description:
      "ElevateNI Student Conference",
    url: "https://elevateni.com",
    siteName: "elevateni.com",
    images: [
      {
        url: "/images/white_logo_2025.png",
        width: 1526,
        height: 476,
      },
    ],
    locale: "en-GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "ElevateNI",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/images/favicon.png",
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
