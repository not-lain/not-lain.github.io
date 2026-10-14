"use client"

import * as React from "react"
import { useFx } from "./fx-provider"

const KEY = "lain-booted"
const LINES = [
  "> navi os v7.0 :: copland",
  "> connecting to the wired...",
  "> protocol 7 ............ ok",
  "> user: not-lain",
  "> present day, present time.",
]

// Terminal boot screen, shown once per browser session when effects are on.
// Any key or click skips it.
export function Boot() {
  const { fx } = useFx()
  const [shown, setShown] = React.useState(0)
  const [state, setState] = React.useState<"idle" | "run" | "off" | "done">("idle")

  React.useEffect(() => {
    if (!fx || sessionStorage.getItem(KEY)) return
    sessionStorage.setItem(KEY, "1")
    setState("run")
  }, [fx])

  React.useEffect(() => {
    if (state !== "run") return
    if (shown < LINES.length) {
      const id = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 150 : 320)
      return () => window.clearTimeout(id)
    }
    const id = window.setTimeout(() => setState("off"), 500)
    return () => window.clearTimeout(id)
  }, [state, shown])

  React.useEffect(() => {
    if (state === "off") {
      const id = window.setTimeout(() => setState("done"), 350)
      return () => window.clearTimeout(id)
    }
    if (state !== "run") return
    const skip = () => setState("off")
    window.addEventListener("keydown", skip)
    window.addEventListener("pointerdown", skip)
    return () => {
      window.removeEventListener("keydown", skip)
      window.removeEventListener("pointerdown", skip)
    }
  }, [state])

  if (state === "idle" || state === "done") return null

  return (
    <div className={`lain-boot${state === "off" ? " is-off" : ""}`} aria-hidden>
      <pre>
        {LINES.slice(0, shown).join("\n")}
        <span className="cursor" />
      </pre>
      <span className="lain-boot-skip">press any key</span>
    </div>
  )
}
