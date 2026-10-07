"use client"

import * as React from "react"
import Link from "next/link"
import { badges, badgeSnippet, myBadge, type Badge } from "@/lib/portfolio-data"

export function Button88({ badge }: { badge: Badge }) {
  return (
    <a href={badge.href} target="_blank" rel="noopener noreferrer" title={badge.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={badge.src} width={88} height={31} alt={badge.name} />
    </a>
  )
}

export function CopyEmbed({ label = "embed" }: { label?: string }) {
  const [copied, setCopied] = React.useState(false)

  const copy = () => {
    navigator.clipboard.writeText(badgeSnippet).then(
      () => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1600)
      },
      () => {},
    )
  }

  return (
    <button type="button" className="embed" onClick={copy}>
      {copied ? "copied" : label}
    </button>
  )
}

export function ButtonWall() {
  return (
    <div className="buttons">
      <div className="mine-block">
        <Button88 badge={myBadge} />
        <CopyEmbed />
      </div>
      <div className="wall">
        {badges.map((badge) => (
          <Button88 key={badge.src} badge={badge} />
        ))}
        <Link href="/buttons" className="embed wall-more">
          all buttons →
        </Link>
      </div>
    </div>
  )
}
