"use client"

import * as React from "react"

type Props = { since: string; plan: string }

const pad = (n: number) => String(n).padStart(2, "0")

function uptime(from: number, to: number) {
  const s = Math.max(0, Math.floor((to - from) / 1000))
  const d = Math.floor(s / 86400)
  return `${d}d ${pad(Math.floor((s % 86400) / 3600))}h ${pad(Math.floor((s % 3600) / 60))}m ${pad(s % 60)}s`
}

// A small retro window with live readouts. Renders placeholders on the server
// and starts ticking after mount.
export function StatusPanel({ since, plan }: Props) {
  const [now, setNow] = React.useState<Date | null>(null)

  React.useEffect(() => {
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="lain-win lain-status" aria-label="status">
      <div className="lain-win-bar" aria-hidden>
        <span>status.exe</span>
        <span className="lain-win-ctrl">[_][□][x]</span>
      </div>
      <dl className="lain-win-body">
        <div>
          <dt>signal</dt>
          <dd>
            <span className="lain-live" aria-hidden>●</span> online
          </dd>
        </div>
        <div>
          <dt>wired since</dt>
          <dd className="lain-readout">{now ? uptime(Date.parse(since), now.getTime()) : "----"}</dd>
        </div>
        <div className="lain-status-plan">
          <dt>.plan</dt>
          <dd>{plan}</dd>
        </div>
      </dl>
    </section>
  )
}
