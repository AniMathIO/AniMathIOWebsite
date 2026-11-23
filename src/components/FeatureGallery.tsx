import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Play, Puzzle } from 'lucide-react'
import clips from '../data/feature-gallery.json'

const filters = [
  ['all', 'All'],
  ['math', 'Math'],
  ['text', 'Text'],
  ['effects', 'Effects'],
  ['animations', 'Animations'],
  ['audio', 'Audio'],
  ['editing', 'Export'],
  ['community', 'Community'],
] as const

type Filter = typeof filters[number][0]
type Clip = typeof clips[number]

const upcoming = [
  { title: 'Molecule', summary: 'Molecular structures and chemical reactions.' },
  { title: 'Physics', summary: 'Collisions, projectiles and domino simulations.' },
  { title: 'Network', summary: 'Network topology and animated packet paths.' },
  { title: 'Optics', summary: 'Light rays, reflection and refraction.' },
]

const ClipPlayer = ({ clip }: { clip: Clip }) => {
  const [playing, setPlaying] = useState(false)
  const poster = clip.poster.replace('img/', '/img/gallery/')

  if (playing) {
    const mp4 = <source src={clip.mp4.replace('videos/', '/videos/gallery/')} type="video/mp4" />
    const webm = <source src={clip.webm.replace('videos/', '/videos/gallery/')} type="video/webm" />
    return (
      <video
        ref={(video) => video?.focus()}
        controls
        autoPlay
        playsInline
        muted={!clip.kinds.includes('audio')}
        preload="none"
        poster={poster}
        aria-label={clip.title}
        className="block aspect-video w-full bg-stage"
      >
        {clip.slug === 'webm-export' ? <>{webm}{mp4}</> : <>{mp4}{webm}</>}
      </video>
    )
  }

  return (
    <button
      type="button"
      aria-label={`Play ${clip.title}`}
      onClick={() => setPlaying(true)}
      className="group relative block w-full bg-stage text-fg focus-visible:outline-offset-[-3px]"
    >
      <img src={poster} alt="" width={800} height={450} loading="lazy" decoding="async"
        className="block aspect-video w-full" />
      <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-control border border-line-strong bg-raised shadow-sm group-hover:border-accent group-hover:text-accent">
        <Play size={16} fill="currentColor" aria-hidden="true" />
      </span>
      <span className="absolute right-3 bottom-3 rounded-control bg-bg px-1.5 py-0.5 font-mono text-xs text-fg-2">
        {clip.seconds.toLocaleString('en', { maximumFractionDigits: 1 })} s
      </span>
    </button>
  )
}

const GalleryCard = ({ clip }: { clip: Clip }) => (
  <article className="panel flex min-w-0 flex-col overflow-hidden">
    <ClipPlayer clip={clip} />
    <div className="flex flex-1 flex-col border-t border-line p-4">
      <h3 className="text-base font-semibold">{clip.title}</h3>
      <p className="mt-1 text-sm text-fg-2">{clip.summary}</p>
      <a
        href={clip.docs}
        aria-label={`Documentation for ${clip.plugin}`}
        className="mt-auto block w-fit max-w-full pt-3 font-mono text-xs text-accent wrap-anywhere hover:underline"
      >
        {clip.plugin} <ArrowUpRight size={12} aria-hidden="true" className="inline" />
      </a>
    </div>
  </article>
)

export const FeatureGallery = () => {
  const section = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState<Filter>('all')
  useEffect(() => {
    if (window.location.hash !== '#all-features') return
    const frame = requestAnimationFrame(() => section.current?.scrollIntoView({ behavior: 'instant' }))
    return () => cancelAnimationFrame(frame)
  }, [])
  const visible = filter === 'all' ? clips : clips.filter((clip) => clip.kinds.includes(filter))

  return (
    <section ref={section} id="all-features" aria-labelledby="feature-gallery-heading" className="mt-24">
      <h2 id="feature-gallery-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">All features</h2>
      <p className="mt-3 max-w-2xl text-fg-2">
        Play short examples of math, text, effects and more. Each clip comes from an editable AniMathIO project.{' '}
        <a href="https://github.com/AniMathIO/AniMathIO/tree/main/examples/feature-gallery"
          className="text-accent hover:underline">Get the source projects</a>.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-line py-3">
        <div role="group" aria-label="Filter by feature kind" className="flex flex-wrap gap-1.5">
          {filters.map(([kind, label]) => (
            <button
              key={kind}
              type="button"
              aria-pressed={filter === kind}
              onClick={() => setFilter(kind)}
              className={`rounded-control border px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === kind
                  ? 'border-accent/40 bg-accent/16 text-accent'
                  : 'border-line bg-panel text-fg-2 hover:bg-hover hover:text-fg'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="text-sm tabular-nums text-fg-3">
          {visible.length} {visible.length === 1 ? 'clip' : 'clips'}
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((clip) => <GalleryCard key={clip.slug} clip={clip} />)}
      </div>

      {(filter === 'all' || filter === 'community') && (
        <section aria-labelledby="upcoming-plugins-heading" className="mt-8">
          <h3 id="upcoming-plugins-heading" className="text-lg font-semibold">Upcoming community plugins</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {upcoming.map(({ title, summary }) => (
              <article key={title} className="panel p-4">
                <h4 className="flex items-center gap-2 font-medium">
                  <Puzzle size={16} aria-hidden="true" className="text-fg-3" /> {title}
                </h4>
                <p className="mt-1 text-sm text-fg-2">{summary}</p>
                <p className="mt-2 text-xs text-fg-3">Demo pending release</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
