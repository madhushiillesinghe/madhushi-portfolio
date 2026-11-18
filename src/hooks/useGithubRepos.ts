import { useEffect, useState } from 'react'
import { fallbackRepos, pinnedRepos, profile, repoDescriptions } from '../data/profile'

export type Repo = {
  name: string
  description: string
  language: string | null
  stars: number
  forks?: number
  url: string
  homepage?: string | null
  updated?: string
  topics?: string[]
}

type ApiRepo = {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  html_url: string
  homepage: string | null
  updated_at: string
  fork: boolean
  topics?: string[]
}

const CACHE_KEY = `gh-repos-v2-${profile.githubUser}` // bump the version when pinnedRepos changes
const CACHE_MS = 1000 * 60 * 60 // 1 hour — keeps you well under GitHub's 60 req/hour limit

const toUrl = (name: string) => `https://github.com/${profile.githubUser}/${name}`

const describe = (name: string) => repoDescriptions[name] ?? ''
const fallback: Repo[] = fallbackRepos.map((r) => ({ ...r, description: describe(r.name), url: toUrl(r.name) }))

/** Keeps only the repos listed in `pinnedRepos`, in that order; missing ones come from the fallback list. */
function sortRepos(repos: Repo[]) {
  const find = (list: Repo[], name: string) => list.find((r) => r.name.toLowerCase() === name.toLowerCase())
  return pinnedRepos.map((name) => find(repos, name) ?? find(fallback, name)).filter((r): r is Repo => !!r)
}

function readCache(): Repo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { at, data } = JSON.parse(raw)
    return Date.now() - at < CACHE_MS ? data : null
  } catch {
    return null
  }
}

function writeCache(data: Repo[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }))
  } catch {
    /* storage unavailable — ignore */
  }
}

/** Loads public repos from the GitHub REST API, with caching and an offline fallback. */
export function useGithubRepos() {
  const [repos, setRepos] = useState<Repo[]>(() => readCache() ?? sortRepos(fallback))
  const [status, setStatus] = useState<'loading' | 'live' | 'fallback'>(readCache() ? 'live' : 'loading')

  useEffect(() => {
    if (readCache()) return
    const ctrl = new AbortController()
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`, {
      signal: ctrl.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        return res.json() as Promise<ApiRepo[]>
      })
      .then((data) => {
        const mapped: Repo[] = data
          .filter((r) => !r.fork)
          .map((r) => ({
            name: r.name,
            // Use your own description from profile.ts when the repo has none on GitHub
            description: r.description || describe(r.name),
            language: r.language,
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url,
            homepage: r.homepage,
            updated: r.updated_at,
            topics: r.topics,
          }))
        const sorted = sortRepos(mapped)
        setRepos(sorted)
        setStatus('live')
        writeCache(sorted)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setStatus('fallback')
      })
    return () => ctrl.abort()
  }, [])

  return { repos, status }
}
