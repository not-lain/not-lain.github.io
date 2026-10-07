import type { Metadata } from "next"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button88, CopyEmbed } from "@/components/hafedh/button-wall"
import { FxRoot, FxToggle } from "@/components/hafedh/fx-provider"
import { mono, vt } from "@/components/hafedh/fonts"
import { badges, badgeSnippet, myBadge, profile } from "@/lib/portfolio-data"
import "../hafedh/hafedh.css"

export const metadata: Metadata = {
  title: `buttons | ${profile.name}`,
  description: `88x31 buttons from around the wired, and one to link back to ${profile.handle}.`,
}

export default function ButtonsPage() {
  return (
    <FxRoot className={`lain ${mono.className} ${vt.variable}`}>
      <div className="lain-page">
        <nav className="lain-topbar">
          <div className="lain-breadcrumb">
            <Link href="/">home</Link>
            <span className="sep">/</span>
            <span className="here">buttons</span>
          </div>
          <FxToggle />
          <ModeToggle className="lain-toggle" />
        </nav>

        <main>
          <h1 className="lain-buttons-title">
            <span className="glitch" data-text="88x31 buttons">
              88x31 buttons
            </span>
          </h1>
          <p>
            tiny badges from the old web. click one to visit, or grab mine and link back to me.
          </p>

          <section className="lain-win lain-embed" aria-labelledby="mine">
            <div className="lain-win-bar">
              <span id="mine">my_button.html</span>
              <span className="lain-win-ctrl" aria-hidden>
                [_][□][x]
              </span>
            </div>
            <div className="lain-win-body lain-embed-body">
              <Button88 badge={myBadge} />
              <pre className="lain-embed-code">
                <code>{badgeSnippet}</code>
              </pre>
              <CopyEmbed label="copy html" />
            </div>
          </section>

          <section>
            <h2>
              <span className="glitch" data-text="the wall">
                the wall
              </span>
            </h2>
            <ul className="lain-button-grid">
              {[myBadge, ...badges].map((badge) => (
                <li key={badge.src}>
                  <Button88 badge={badge} />
                  <span className="lain-meta">{badge.name.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="lain-footer">
          <span>© {new Date().getFullYear()} {profile.name.toLowerCase()}</span>
          <span className="cursor">let&apos;s all love lain.</span>
        </footer>
      </div>
    </FxRoot>
  )
}
