import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { Boot } from "@/components/hafedh/boot"
import { ButtonWall } from "@/components/hafedh/button-wall"
import { FxRoot, FxToggle } from "@/components/hafedh/fx-provider"
import { mono, vt } from "@/components/hafedh/fonts"
import { Scramble } from "@/components/hafedh/scramble"
import { StatusPanel } from "@/components/hafedh/status-panel"
import { Terminal } from "@/components/hafedh/terminal"
import {
  blogs,
  blogsIntro,
  intro,
  now,
  profile,
  projectGroups,
  talks,
  type Project,
  type Segment,
  type Talk,
} from "@/lib/portfolio-data"
import "./hafedh/hafedh.css"

export const metadata: Metadata = {
  title: `${profile.handle} | ${profile.name}`,
  description: `online i go by ${profile.handle}.`,
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

function RichText({ segments }: { segments: Segment[] }) {
  return segments.map((s, i) =>
    s.href ? (
      <Ext key={i} href={s.href}>
        {s.text}
      </Ext>
    ) : (
      <span key={i}>{s.text}</span>
    ),
  )
}

function Card({ project }: { project: Project }) {
  return (
    <a className="lain-card" href={project.href} target="_blank" rel="noopener noreferrer">
      <span className="lain-card-title">
        {project.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.logo} alt="" width={20} height={20} />
        ) : (
          <span aria-hidden>{project.emoji}</span>
        )}
        {project.name.toLowerCase()}
        {project.badge && <span className="lain-badge">{project.badge}</span>}
      </span>
      <span className="lain-card-desc">{project.description}</span>
      {project.note && <span className="lain-card-note">* {project.note}</span>}
    </a>
  )
}

const RECENT_TALKS = 3

function TalkList({ talks }: { talks: Talk[] }) {
  return (
    <ul className="lain-list">
      {talks.map((talk) => (
        <li key={talk.date}>
          <span className="lain-meta">{talk.date}</span>
          {talk.before} <Ext href={talk.event.href}>{talk.event.label}</Ext> {talk.after}
          {talk.slides && (
            <>
              {" "}[<Ext href={talk.slides}>slides</Ext>]
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function LainPage() {
  return (
    <FxRoot className={`lain ${mono.className} ${vt.variable}`}>
      <Boot />
      <div className="lain-page">
        <nav className="lain-topbar">
          <div className="lain-breadcrumb">
            <span className="here">home</span>
          </div>
          <a className="lain-square" href={profile.resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
          <Terminal />
          <FxToggle />
          <ModeToggle className="lain-toggle" />
        </nav>

        <header className="lain-profile">
          <div className="lain-banner" aria-hidden>
            <span className="lain-banner-jp">レイン ワイヤード</span>
            <span className="lain-banner-line">
              <Scramble text="present day, present time." />
            </span>
          </div>
          <div className="lain-profile-info">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lain-avatar" src={profile.avatar} alt={profile.name} width={80} height={80} />
            <div>
              <h1 className="lain-name glitch" data-text={profile.name.toLowerCase()}>
                <Scramble text={profile.name.toLowerCase()} />
              </h1>
              <p className="lain-tagline">online i go by {profile.handle}.</p>
            </div>
          </div>
          <div className="lain-socials">
            {profile.socials.map((social, i) => (
              <span key={social.label}>
                {i > 0 && <span className="sep">·</span>}
                <Ext href={social.href}>{social.label.toLowerCase()}</Ext>
              </span>
            ))}
          </div>
        </header>

        <StatusPanel since={profile.wiredSince} plan={now[0].items[0].toLowerCase()} />

        <main>
          <section>
            {intro.map((paragraph, i) => (
              <p key={i}>
                <RichText segments={paragraph} />
              </p>
            ))}
          </section>

          <section id="blogs">
            <h2>
              <span className="glitch" data-text="blogs">blogs</span>
            </h2>
            <p>
              <RichText segments={blogsIntro} />
            </p>
            <ul className="lain-list">
              {blogs.map((blog) => (
                <li key={blog.href}>
                  <Ext href={blog.href}>{blog.title}</Ext>
                  <span className="lain-meta">{blog.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="open-source">
            <h2>
              <span className="glitch" data-text="open source">open source</span>
            </h2>
            {projectGroups.map((group, i) => (
              <details key={group.id} className="lain-folder" open={i === 0}>
                <summary>
                  {i === 0 ? "contributions" : group.title}
                  <span className="lain-folder-count">[{group.projects.length}]</span>
                </summary>
                <p>{group.intro}</p>
                <div className="lain-grid">
                  {group.projects.map((project) => (
                    <Card key={project.href} project={project} />
                  ))}
                </div>
              </details>
            ))}
          </section>

          <section id="now">
            <h2>
              <span className="glitch" data-text="now">now</span>
            </h2>
            <div className="lain-now-grid">
              {now.map((s, i) => (
                <div key={i}>
                  <h3>{s.category}</h3>
                  <ul className="lain-list">
                    {s.items.map((item, j) => (
                      <li key={j}><span className="lain-meta">{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="talks">
            <h2>
              <span className="glitch" data-text="talks & news">talks &amp; news</span>
            </h2>
            <TalkList talks={talks.slice(0, RECENT_TALKS)} />
            {talks.length > RECENT_TALKS && (
              <details className="lain-folder">
                <summary>
                  older
                  <span className="lain-folder-count">[{talks.length - RECENT_TALKS}]</span>
                </summary>
                <TalkList talks={talks.slice(RECENT_TALKS)} />
              </details>
            )}
          </section>

          <section id="buttons">
            <h2>
              <span className="glitch" data-text="buttons">buttons</span>
            </h2>
            <p>link back to me with the button on the left, or check out some of these.</p>
            <ButtonWall />
          </section>
        </main>

        <footer className="lain-footer">
          <span>
            © {new Date().getFullYear()} {profile.name.toLowerCase()} · build {new Date().toISOString().slice(0, 10)}
          </span>
          <span>press / for a shell</span>
          <span className="cursor">let&apos;s all love lain.</span>
        </footer>
      </div>
    </FxRoot>
  )
}
