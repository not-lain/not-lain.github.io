import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
        url: "/hafedh.jpg",
        width: 1200,
        height: 1200,
        alt: "Portfolio | Hafedh Hichri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Hafedh Hichri",
    description: "Personal portfolio website for Hafedh Hichri",
    images: ["/hafedh.jpg"],
    creator: "@hafedhhichri",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}