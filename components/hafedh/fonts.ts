import { JetBrains_Mono, VT323 } from "next/font/google"

// Shared by the lain (/) and /buttons pages.
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600", "700"] })
export const vt = VT323({ subsets: ["latin"], weight: "400", variable: "--font-vt" })
