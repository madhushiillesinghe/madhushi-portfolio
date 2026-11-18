import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './Icons'
import { Reveal } from './Section'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const channels = [
    { label: 'LinkedIn', handle: 'Madhushi Illesinghe', href: profile.linkedin, icon: <LinkedinIcon /> },
    { label: 'GitHub', handle: `@${profile.githubUser}`, href: profile.github, icon: <GithubIcon /> },
    { label: 'Email', handle: profile.email, href: `mailto:${profile.email}`, icon: <Mail className="size-5" /> },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-amber/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mute uppercase">
            <span className="text-amber">05</span>
            <span className="h-px w-8 bg-line" />
            Contact
          </p>
          <h2 className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] tracking-tight">
            Let's build <br />
            <em className="text-gradient">something great.</em>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-paper/70">
            Open to internships, graduate roles and freelance work. The fastest way to reach me is LinkedIn or email.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-5" /> Say hello
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 font-mono text-sm hover:bg-white/10"
          >
            {copied ? <Check className="size-4 text-mint" /> : <Copy className="size-4" />}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.06}>
              <a
                href={c.href}
                target={c.label === 'Email' ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-line bg-ink-2/60 p-5 transition-colors hover:border-white/20 hover:bg-ink-3"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/5">{c.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs tracking-wider text-mute uppercase">{c.label}</span>
                  <span className="block truncate font-medium">{c.handle}</span>
                </span>
                <ArrowUpRight className="size-5 text-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-mute md:flex-row md:px-8">
        <p>
          © {YEAR} {profile.name}
        </p>
        <p>Built with React, TypeScript, Tailwind CSS & Motion</p>
        <a href="#top" className="hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
