import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
const inter = Roboto({ weight: "400", style: "normal", subsets: ["greek"] });

export const metadata: Metadata = {
    title: "Home - Hafedh ",
    description: "Hello there I am Hafedh a machine learning engineer and a HuggingFace Fellow",
    metadataBase: new URL("https://not-lain.github.io/"),
    openGraph: {
        images: "https://drive.google.com/uc?id=115jAg4IPD_ElHcYuS3kLoPOHhWBq0RF2",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} dark:bg-black bg-white`} suppressHydrationWarning>
                <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Toaster />
                    <NextTopLoader color="#808080" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} showSpinner={false} easing="ease" speed={200} zIndex={1600} showAtBottom={false} />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
