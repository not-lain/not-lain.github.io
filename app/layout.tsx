import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Hafedh Hichri",
  description: "Personal portfolio website for Hafedh Hichri",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Portfolio | Hafedh Hichri",
    description: "Personal portfolio website for Hafedh Hichri",
    url: "https://not-lain.github.io/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio | Hafedh Hichri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Hafedh Hichri",
    description: "Personal portfolio website for Hafedh Hichri",
    images: ["/og-image.png"],
    creator: "@hafedhhichri",
  },
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}