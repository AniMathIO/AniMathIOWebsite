import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export const Container = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
)

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-sm font-medium text-fg-2">{children}</p>
)

export const SectionHeading = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) => (
  <div className="mb-10 max-w-2xl">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
    {children && <p className="mt-4 text-lg text-fg-2">{children}</p>}
  </div>
)

export const IconBadge = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-10 w-10 items-center justify-center rounded-card border border-line bg-raised text-accent">
    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
  </span>
)

/** A screenshot in a rounded panel, like the editor's own floating panels. */
export const Shot = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
}) => (
  <figure className={`panel overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className="block h-auto w-full"
    />
  </figure>
)
