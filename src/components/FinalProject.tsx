import { ArrowUpRight, Check, GraduationCap } from 'lucide-react'
import { finalProject as fp } from '../data/profile'
import { GithubIcon } from './Icons'
import { Reveal, Section } from './Section'

export function FinalProject() {
  return (
    <Section
      id="final-project"
      index="03"
      eyebrow="Featured"
      title={
        <>
          My <em className="text-amber">final project</em>
        </>
      }
    >
      <Reveal>
        <article className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-ink-3 via-ink-2 to-ink">
          <div className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full bg-amber/15 blur-[100px]" />

          <div className="relative grid gap-10 p-7 md:grid-cols-[1.15fr_1fr] md:p-12">
            <div className="flex flex-col">
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1.5 font-mono text-xs tracking-wider text-paper/80 uppercase">
                <GraduationCap className="size-4 text-amber" /> {fp.label} · {fp.year}
              </span>
              <h3 className="font-display text-4xl leading-tight md:text-6xl">{fp.title}</h3>
              <p className="mt-2 font-mono text-sm text-amber">{fp.client}</p>
              <p className="mt-5 text-lg leading-relaxed text-paper/75">{fp.summary}</p>

              <ul className="mt-8 space-y-3">
                {fp.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-paper/85">
                    <Check className="mt-1 size-4 shrink-0 text-mint" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                {fp.links.map((l) =>
                  l.primary ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
                    >
                      <GithubIcon className="size-4" /> {l.label}
                    </a>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition-colors hover:bg-white/10"
                    >
                      {l.label} <ArrowUpRight className="size-4" />
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Visual: screenshot if provided, otherwise a stylised code window */}
              <div className="overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl shadow-black/50">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                  <span className="size-2.5 rounded-full bg-coral/80" />
                  <span className="size-2.5 rounded-full bg-amber/80" />
                  <span className="size-2.5 rounded-full bg-mint/80" />
                  <span className="ml-3 font-mono text-[11px] text-mute">{fp.codeFile}</span>
                </div>
                {fp.image ? (
                  <img src={fp.image} alt={`${fp.title} screenshot`} className="aspect-[4/3] w-full object-cover" />
                ) : (
                  <pre className="aspect-[4/3] overflow-hidden p-5 font-mono text-[12.5px] leading-relaxed text-paper/70">
                    <code>
                      <span className="text-coral">@app.post</span>(<span className="text-mint">"/predict"</span>)
                      {'\n'}
                      <span className="text-amber">async def</span> predict(image: UploadFile,
                      {'\n'}
                      {'                  '}district: str | <span className="text-amber">None</span>):
                      {'\n'}
                      {'    '}data = <span className="text-amber">await</span> read_image_bytes(image)
                      {'\n\n'}
                      {'    '}
                      <span className="text-mute"># Model 1 — soil type (MobileNetV2)</span>
                      {'\n'}
                      {'    '}st = soil_type.predict(data, district)
                      {'\n\n'}
                      {'    '}
                      <span className="text-mute"># Model 2 — pH, N, P, organic matter</span>
                      {'\n'}
                      {'    '}sp = soil_properties.predict(
                      {'\n'}
                      {'        '}st[<span className="text-mint">"soilType"</span>], district)
                      {'\n\n'}
                      {'    '}
                      <span className="text-amber">return</span> {'{'}
                      <span className="text-mint">"soilType"</span>: st[<span className="text-mint">"soilType"</span>],
                      {'\n'}
                      {'            '}
                      <span className="text-mint">"levels"</span>: sp[<span className="text-mint">"levels"</span>]{'}'}
                    </code>
                  </pre>
                )}
              </div>

              <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-line bg-white/[0.02] p-5">
                <div>
                  <dt className="mb-2 font-mono text-xs tracking-wider text-mute uppercase">My role</dt>
                  <dd>{fp.role}</dd>
                </div>
                <div>
                  <dt className="mb-2 font-mono text-xs tracking-wider text-mute uppercase">Built with</dt>
                  <dd className="flex flex-wrap gap-2">
                    {fp.stack.map((s) => (
                      <span key={s} className="rounded-md bg-amber/10 px-2.5 py-1 font-mono text-xs text-amber">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
