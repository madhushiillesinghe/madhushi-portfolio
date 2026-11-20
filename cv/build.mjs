// Prints cv/cv.html to public/cv.pdf using an installed Edge or Chrome (headless).
// Run with: npm run cv
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const browser = candidates.find((p) => existsSync(p))
if (!browser) {
  console.error('No Edge/Chrome found. Set CHROME_PATH to your browser executable.')
  process.exit(1)
}

const src = pathToFileURL(resolve('cv/cv.html')).href
const out = resolve('public/cv.pdf')

// Fresh profile each run so the browser never prints a cached copy of the page
// Edge on Windows can return before the PDF is on disk, so wait for a fresh file.
const startedAt = Date.now()
const isWritten = () => existsSync(out) && statSync(out).mtimeMs >= startedAt - 1000 && statSync(out).size > 0
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const profileDir = mkdtempSync(join(tmpdir(), 'cv-build-'))
try {
  execFileSync(
    browser,
    ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', `--user-data-dir=${profileDir}`, `--print-to-pdf=${out}`, src],
    { stdio: 'ignore' },
  )
  for (let i = 0; i < 60 && !isWritten(); i++) await sleep(500)
  if (!isWritten()) {
    console.error('Timed out waiting for the PDF to be written.')
    process.exitCode = 1
  }
} finally {
  await sleep(500)
  rmSync(profileDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
}
if (!process.exitCode) console.log(`CV written to ${out}`)
