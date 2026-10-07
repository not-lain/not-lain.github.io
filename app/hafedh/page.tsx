import Image from "next/image"
import Link from "next/link"
import {
  SiHuggingface,
  SiX,
  SiGithub,
  SiLinkedin,
  SiMailboxdotorg,
} from "react-icons/si"
import { ModeToggle } from "@/components/mode-toggle"
import {
  blogs,
  blogsIntro,
  intro,
  profile,
  projectGroups,
  talks,
  type Project,
  type Segment,
} from "@/lib/portfolio-data"

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
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

function Portfolio() {
  const socialIcons = {
    x: SiX,
    huggingface: SiHuggingface,
    github: SiGithub,
    linkedin: SiLinkedin,
    email: SiMailboxdotorg,
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Resume Button at Top */}
      <div className="flex justify-end gap-2 mb-4">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded shadow hover:bg-secondary/80 transition-colors"
        >
          View Resume
        </a>
        <ModeToggle />
      </div>

      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-1">{profile.name}</h1>

        {/* Profile Image */}
        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-border">
          <Image
            src={profile.photo}
            alt="Profile Photo"
            width={160}
            height={160}
            className="object-cover"
            priority
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-4">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <Link
                key={social.label}
                href={social.href}
                className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
                <span className="sr-only">{social.label}</span>
              </Link>
            )
          })}
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-12">
        {intro.map((paragraph, i) => (
          <p key={i} className={i === intro.length - 1 ? "mb-4" : ""}>
            <RichText segments={paragraph} />
          </p>
        ))}
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Blog Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <p className="mb-4">
          <RichText segments={blogsIntro} />
        </p>
        <ul className="list-disc pl-6 space-y-4">
          {blogs.map((blog) => (
            <li key={blog.href}>
              <span>{blog.emoji}</span>{" "}
              <Ext href={blog.href}>{blog.title}</Ext>{" "}
              <span className="text-muted-foreground">
                {blog.description}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Open Source Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Open Source</h2>
        {projectGroups.map((group, i) => (
          <div key={group.id} className="mb-8">
            <p className="mb-4">{group.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.projects.map((project) => (
                <ProjectCard key={project.href} project={project} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Invited Talks Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Invited Talks and News</h2>
        <ul className="list-disc pl-6 space-y-2">
          {talks.map((talk) => (
            <li key={talk.date}>
              On <strong>{talk.date}</strong>, {talk.before}{" "}
              <Ext href={talk.event.href}>{talk.event.label}</Ext>{" "}
              {talk.after}
              {talk.slides && (
                <>
                  {" "}
                  [<Ext href={talk.slides}>slides</Ext>]
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} - {profile.name}</p>
      </footer>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card text-card-foreground rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer border border-border"
    >
      <div className="flex items-center mb-1 font-bold text-lg">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={`${project.name} Logo`}
            width={24}
            height={24}
            className="object-contain mr-2 inline-block"
            priority
          />
        ) : (
          <span className="mr-2 inline-block">{project.emoji}</span>
        )}
        {project.name}
        {project.badge && (
          <span className="ml-1 text-xs text-muted-foreground">
            {" "}
            [{project.badge}]
          </span>
        )}
      </div>
      <div className="text-muted-foreground text-sm">{project.description}</div>
      {project.note && (
        <div className="text-muted-foreground text-xs mt-1">
          <strong>Note:</strong> {project.note}
        </div>
      )}
    </a>
  )
}

export default Portfolio
