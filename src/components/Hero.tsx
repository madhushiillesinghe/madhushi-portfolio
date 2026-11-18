import { motion } from 'motion/react'
import { ArrowDownRight, FileText, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [first, ...rest] = profile.name.split(' ')

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="grid-bg absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-amber/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[420px] w-[520px] rounded-full bg-coral/15 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider text-mute uppercase"
        >
          {profile.openToWork && (
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1.5 text-mint">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-mint" />
              </span>
              Open to opportunities
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> {profile.location}
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3.6rem,13vw,11rem)] leading-[0.85] tracking-[-0.02em]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.05 }}
          >
            {first}
          </motion.span>
          <motion.span
            className="block pb-[0.12em] italic text-gradient"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            {rest.join(' ')}
          </motion.span>
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.2fr_1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
          >
            <p className="font-mono text-sm text-amber">{profile.role}</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-paper/80 md:text-xl">{profile.tagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="flex flex-wrap gap-3 md:justify-end"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-[52px] place-items-center rounded-full border border-line bg-white/[0.03] transition-colors hover:border-paper/40 hover:bg-white/10"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-[52px] place-items-center rounded-full border border-line bg-white/[0.03] transition-colors hover:border-paper/40 hover:bg-white/10"
            >
              <LinkedinIcon />
            </a>
            {profile.cv && (
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm hover:bg-white/10"
              >
                <FileText className="size-4" /> CV
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-mute uppercase md:flex"
      >
        Scroll
        <span className="h-10 w-px overflow-hidden bg-line">
          <motion.span
            className="block h-4 w-px bg-amber"
            animate={{ y: [-16, 40] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
