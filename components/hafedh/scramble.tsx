"use client"

import * as React from "react"
import { useFx } from "./fx-provider"

const GLYPHS = "!<>-_\\/[]{}=+*^?#ｦｱｳｴｵｶｷｸｹｺ"

// Text that decodes itself from noise on mount. Starts as the final text so
// the server render and hydration match; screen readers get the plain text.
export function Scramble({ text, speed = 35 }: { text: string; speed?: number }) {
  const { fx } = useFx()
  const [out, setOut] = React.useState(text)

  React.useEffect(() => {
    if (!fx) {
      setOut(text)
      return
    }
    let frame = 0
    const id = window.setInterval(() => {
      setOut(
        text
          .split("")
          .map((c, i) => (i < frame || c === " " ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join(""),
      )
      if (++frame > text.length) window.clearInterval(id)
    }, speed)
    return () => window.clearInterval(id)
  }, [text, speed, fx])

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{out}</span>
    </>
  )
}
