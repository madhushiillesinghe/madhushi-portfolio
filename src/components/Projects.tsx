import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, GitFork, Star } from 'lucide-react'
import { profile, repoTitles } from '../data/profile'
import { useGithubRepos, type Repo } from '../hooks/useGithubRepos'
import { GithubIcon } from './Icons'
import { Section } from './Section'

const langColor: Record<string, string> = {
  Java: '#f5b14c',
  JavaScript: '#f7df1e',
  TypeScript: '#4f8cff',
  Python: '#7ee0c3',
  'C#': '#b57bff',
  HTML: '#ff7a59',
  CSS: '#5ab0ff',
  Kotlin: '#a97bff',
  Dart: '#38c6d9',
}

const pretty = (name: string) =>
  repoTitles[name] ??
  name
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase())

function RepoCard({ repo, i }: { repo: Repo; i: number }) {
  const color = repo.language ? langColor[repo.language] ?? '#9a98a8' : '#9a98a8'
  return (
    <motion.a
      layout
      href={repo.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-3xl border border-line bg-ink-2/60 p-6 transition-colors hover:border-white/20 hover:bg-ink-3"
    >
      <div
        className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: color }}
      />
      <div className="mb-6 flex items-start justify-between">
        <span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, '0')}</span>
        <span className="grid size-9 place-items-center rounded-full border border-line transition-all group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{pretty(repo.name)}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-paper/65">
        {repo.description || 'Open the repository to see the code and README.'}
      </p>
      <div className="mt-auto flex items-center gap-4 pt-6 font-mono text-xs text-mute">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-full" style={{ background: color }} />
            {repo.language}
          </span>
        )}
        <span className="inline-flex items-center gap-1">
          <Star className="size-3.5" /> {repo.stars}
        </span>
        {!!repo.forks && (
          <span className="inline-flex items-center gap-1">
            <GitFork className="size-3.5" /> {repo.forks}
          </span>
        )}
      </div>
    </motion.a>
  )
}

export function Projects() {
  const { repos, status } = useGithubRepos()
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const languages = useMemo(
    () => ['All', ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[]))],
    [repos],
  )
  const filtered = filter === 'All' ? repos : repos.filter((r) => r.language === filter)
  const visible = showAll ? filtered : filtered.slice(0, 6)

  return (
    <Section
      id="projects"
      index="04"
      eyebrow="From GitHub"
      title={
        <>
          Selected <em className="text-amber">projects</em>
        </>
      }
      aside={
        <p className="flex items-center gap-2 font-mono text-xs text-mute">
          <span className={`size-2 rounded-full ${status === 'live' ? 'bg-mint' : status === 'loading' ? 'animate-pulse bg-amber' : 'bg-mute'}`} />
          {status === 'live' ? 'Synced live from GitHub' : status === 'loading' ? 'Loading from GitHub…' : 'Showing saved projects'}
        </p>
      }
    >
      {languages.length > 2 && (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by language">
          {languages.map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={filter === l}
              onClick={() => setFilter(l)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === l ? 'border-paper bg-paper text-ink' : 'border-line text-mute hover:text-paper'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((r, i) => (
            <RepoCard key={r.name} repo={r} i={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {filtered.length > 6 && (
          <button
            onClick={() => setShowAll((s) => !s)}
            className="rounded-full border border-line px-6 py-3 text-sm hover:bg-white/10"
          >
            {showAll ? 'Show less' : `Show all ${filtered.length} projects`}
          </button>
        )}
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          <GithubIcon className="size-4" /> All repositories on GitHub
        </a>
      </div>
    </Section>
  )
}
