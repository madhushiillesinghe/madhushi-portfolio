import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  id: string
  index: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
  aside?: ReactNode
}

export function Section({ id, index, eyebrow, title, children, aside }: Props) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-mute uppercase">
              <span className="text-amber">{index}</span>
              <span className="h-px w-8 bg-line" />
              {eyebrow}
            </p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">{title}</h2>
          </div>
          {aside}
        </motion.header>
        {children}
      </div>
    </section>
  )
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
