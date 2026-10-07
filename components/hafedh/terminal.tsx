"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { blogs, intro, profile, projectGroups } from "@/lib/portfolio-data"
import { useFx } from "./fx-provider"

export const SECTIONS = ["blogs", "open-source", "now", "talks", "buttons"]

const LINKS: Record<string, string> = {
  ...Object.fromEntries(profile.socials.map((s) => [s.label.toLowerCase(), s.href])),
  x: profile.socials.find((s) => s.icon === "x")!.href,
  hf: profile.socials.find((s) => s.icon === "huggingface")!.href,
  resume: profile.resume,
}

const HELP = [
  "help                 this message",
  "whoami               who is on the other side",
  "ls                   list sections",
  "cd <section>         jump to a section",
  "open <link>          github | hf | x | linkedin | email | resume",
  "blogs | projects     list writing / open source",
  "theme <light|dark>   switch theme",
  "fx <on|off>          visual effects",
  "date | clear | exit",
]

const COMMANDS = ["help", "whoami", "ls", "cd", "open", "blogs", "projects", "theme", "fx", "date", "clear", "exit", "lain"]

type Line = { kind: "in" | "out" | "err"; text: string }

const GREETING: Line[] = [{ kind: "out", text: "wired shell. type `help` to begin." }]

// Hidden command: not listed in HELP or tab completion.
// Plain ASCII so it lines up in any monospace font.
// String.raw keeps the backslashes literal.
const ART = [
  String.raw`    ______    `,
  String.raw`  .'      '.  `,
  String.raw` / .------. \ `,
  String.raw`| /  o  o  \ |`,
  String.raw`| |   ..   | |`,
  String.raw`| |  \__/  | |`,
  String.raw` \ '------' / `,
  String.raw`  '._    _.'  `,
  String.raw`     |  |     `,
]

function neofetch(theme: string | undefined, fx: boolean) {
  const days = Math.floor((Date.now() - Date.parse(profile.wiredSince)) / 86_400_000)
  const title = `${profile.handle}@wired`
  const info = [
    title,
    "-".repeat(title.length),
    "os: navi (copland os enterprise)",
    "host: not-lain.github.io",
    "kernel: protocol 7",
    `uptime: ${days} days (since y2k)`,
    "shell: wired-sh",
    `theme: ${theme ?? "dark"} · fx ${fx ? "on" : "off"}`,
    "role: software engineer @ feyn",
    "langs: python, typescript",
  ]
  return Array.from({ length: Math.max(ART.length, info.length) }, (_, i) =>
    `${ART[i] ?? " ".repeat(ART[0].length)}  ${info[i] ?? ""}`.trimEnd(),
  )
}

function glitchBurst() {
  const root = document.querySelector(".lain")
  root?.classList.add("is-glitching")
  window.setTimeout(() => root?.classList.remove("is-glitching"), 700)
}

// Fake shell, opened with "/" or "`", closed with Esc.
export function Terminal() {
  const { setTheme, resolvedTheme } = useTheme()
  const { fx, reduced, setFx } = useFx()
  const [open, setOpen] = React.useState(false)
  const [lines, setLines] = React.useState<Line[]>(GREETING)
  const [input, setInput] = React.useState("")
  const [history, setHistory] = React.useState<string[]>([])
  const [cursor, setCursor] = React.useState(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const logRef = React.useRef<HTMLDivElement>(null)
  const openerRef = React.useRef<HTMLElement | null>(null)

  const show = React.useCallback(() => {
    openerRef.current = document.activeElement as HTMLElement | null
    setOpen(true)
  }, [])

  const hide = React.useCallback(() => {
    setOpen(false)
    openerRef.current?.focus?.()
  }, [])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t.closest("input, textarea, [contenteditable=true]")) return
      if ((e.key === "/" || e.key === "`") && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        show()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [show])

  React.useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  React.useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [lines])

  const run = (raw: string): Line[] | "clear" => {
    const [cmd = "", ...args] = raw.trim().split(/\s+/)
    const arg = args.join(" ").toLowerCase()
    const out = (...text: string[]): Line[] => text.map((t) => ({ kind: "out", text: t }))
    const err = (text: string): Line[] => [{ kind: "err", text }]

    switch (cmd.toLowerCase()) {
      case "":
        return []
      case "help":
        return out(...HELP)
      case "whoami":
        return out(intro[0].map((s) => s.text).join(""))
      case "ls":
        return out(SECTIONS.map((s) => s + "/").join("  "))
      case "cd": {
        const target = arg.replace(/\/$/, "").replace(/^(~|\.\.)$/, "top")
        if (target === "top" || target === "") {
          window.scrollTo({ top: 0, behavior: fx ? "smooth" : "auto" })
          hide()
          return []
        }
        const id = SECTIONS.find((s) => s === target || s.startsWith(target))
        if (!id) return err(`cd: no such section: ${arg}`)
        document.getElementById(id)?.scrollIntoView({ behavior: fx ? "smooth" : "auto" })
        hide()
        return out(`~/${id}`)
      }
      case "open": {
        const href = LINKS[arg]
        if (!href) return err(`open: unknown link: ${arg || "(none)"}. try: ${Object.keys(LINKS).join(", ")}`)
        window.open(href, "_blank", "noopener,noreferrer")
        return out(`opening ${arg}...`)
      }
      case "blogs":
        return out(...blogs.map((b) => `- ${b.title}`))
      case "projects":
        return out(...projectGroups.flatMap((g) => g.projects.map((p) => `- ${p.name.toLowerCase()}`)))
      case "theme":
        if (arg !== "light" && arg !== "dark") return err("usage: theme <light|dark>")
        setTheme(arg)
        return out(`theme: ${arg}`)
      case "fx":
        if (arg !== "on" && arg !== "off") return err("usage: fx <on|off>")
        if (reduced) return err("fx: disabled, your system prefers reduced motion")
        setFx(arg === "on")
        return out(`fx: ${arg}`)
      case "date":
        return out(new Date().toString())
      case "clear":
        return "clear"
      case "exit":
        hide()
        return []
      case "neofetch":
        return out(...neofetch(resolvedTheme, fx))
      case "lain":
        return out("let's all love lain.")
      case "sudo":
        return err("nice try.")
      case "rm":
        if (fx) glitchBurst()
        return err("rm: you can't delete the wired.")
      default:
        return err(`command not found: ${cmd}`)
    }
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = run(input)
    if (result === "clear") setLines([])
    else setLines((prev) => [...prev, { kind: "in", text: input }, ...result])
    if (input.trim()) setHistory((h) => [input, ...h].slice(0, 50))
    setCursor(-1)
    setInput("")
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault()
      hide()
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault()
      const next = Math.max(-1, Math.min(history.length - 1, cursor + (e.key === "ArrowUp" ? 1 : -1)))
      setCursor(next)
      setInput(next === -1 ? "" : history[next])
    } else if (e.key === "Tab") {
      e.preventDefault()
      const [head, ...rest] = input.split(" ")
      const pool = rest.length === 0 ? COMMANDS : head === "cd" ? SECTIONS : head === "open" ? Object.keys(LINKS) : []
      const word = rest.length === 0 ? head : rest.join(" ")
      const match = pool.filter((c) => c.startsWith(word.toLowerCase()))
      if (match.length === 1) setInput(rest.length === 0 ? match[0] + " " : `${head} ${match[0]}`)
      else if (match.length > 1) setLines((prev) => [...prev, { kind: "out", text: match.join("  ") }])
    }
  }

  return (
    <>
      <button type="button" className="lain-square" onClick={show} title="open terminal ( / )">
        &gt;_
        <span className="sr-only">open terminal</span>
      </button>
      {open && (
        <div className="lain-term-backdrop" onMouseDown={(e) => e.target === e.currentTarget && hide()}>
          <div
            className="lain-win lain-term"
            role="dialog"
            aria-modal="true"
            aria-label="terminal"
            onKeyDown={(e) => {
              // Tab in the input is completion; anywhere else, keep focus inside the dialog
              if (e.key === "Tab" && e.target !== inputRef.current) {
                e.preventDefault()
                inputRef.current?.focus()
              } else if (e.key === "Escape") {
                hide()
              }
            }}
          >
            <div className="lain-win-bar">
              <span>wired@{profile.handle}: ~</span>
              <button type="button" className="lain-win-ctrl" onClick={hide} aria-label="close terminal">
                [x]
              </button>
            </div>
            <div className="lain-term-log" ref={logRef} aria-live="polite">
              {lines.map((l, i) => (
                <div key={i} className={`lain-term-${l.kind}`}>
                  {l.kind === "in" ? `$ ${l.text}` : l.text}
                </div>
              ))}
            </div>
            <form className="lain-term-input" onSubmit={submit}>
              <span aria-hidden>$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                aria-label="command"
              />
            </form>
          </div>
        </div>
      )}
    </>
  )
}
