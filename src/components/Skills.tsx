import { skills } from '../data/profile'
import { Reveal, Section } from './Section'

export function Skills() {
  const all = skills.flatMap((s) => s.items)

  return (
    <>
      {/* Marquee band */}
      <div className="relative overflow-hidden border-y border-line bg-ink-2 py-6" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-4xl italic text-paper/80 md:text-5xl">
          {[...all, ...all].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s}
              <span className="text-2xl text-amber not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Section
        id="skills"
        index="02"
        eyebrow="Toolkit"
        title={
          <>
            Skills & <em className="text-amber">technologies</em>
          </>
        }
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.06} className="h-full">
              <div className="group h-full bg-ink p-7 transition-colors hover:bg-ink-2">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{s.group}</h3>
                  <span className="font-mono text-xs text-mute">{String(s.items.length).padStart(2, '0')}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[13px] text-paper/85 transition-colors group-hover:border-white/15"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
