import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://not-lain.github.io"),
  title: {
    default: "Portfolio | Hafedh Hichri",
    template: "%s",
  },
  description: "Personal portfolio website for Hafedh Hichri (Not Lain)",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/lain-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Hafedh Hichri (Not Lain) | Portfolio",
    description: "Personal portfolio website for Hafedh Hichri (Not Lain)",
    url: "https://not-lain.github.io/",
    siteName: "not-lain",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafedh Hichri (Not Lain) | Portfolio",
    description: "Personal portfolio website for Hafedh Hichri (Not Lain)",
    creator: "@not_so_lain",
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
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}