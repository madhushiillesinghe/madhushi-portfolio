import { about, exploring } from '../data/profile'
import { Reveal, Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Code that's built <em className="text-amber">to last.</em>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className={i === 0 ? 'text-2xl leading-snug text-paper md:text-3xl' : 'text-lg leading-relaxed text-paper/70'}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <dl className="divide-y divide-line rounded-3xl border border-line bg-ink-2/60">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-6 py-5">
                <dt className="font-mono text-xs tracking-wider text-mute uppercase">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16">
        <p className="mb-4 font-mono text-xs tracking-wider text-mute uppercase">Currently exploring</p>
        <div className="flex flex-wrap gap-2">
          {exploring.map((e) => (
            <span key={e} className="rounded-full border border-amber/25 bg-amber/[0.06] px-4 py-2 text-sm text-amber">
              {e}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
