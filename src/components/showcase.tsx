import type { Showcase } from '../data/site'
import { showcaseFile } from '../data/site'

export type Aspect = '16x9' | '9x16'

const ASPECTS: readonly Aspect[] = ['16x9', '9x16']
const label = (a: Aspect) => a.replace('x', ':')

/**
 * The player for one showcase video. The MP4 is loaded only when the viewer presses play
 * (`preload="metadata"` fetches just the header). The poster is a 16:9 still, so it is used
 * for the 16:9 version only; the 9:16 player shows the first frame instead of letterboxing.
 */
export const ShowcaseMedia = ({ video, aspect }: { video: Showcase; aspect: Aspect }) => {
  const file = showcaseFile(video.slug, aspect)
  return (
    <div className="flex items-center justify-center bg-[#090b10] p-3">
      {video.published ? (
        <video
          key={file}
          controls
          playsInline
          preload="metadata"
          poster={aspect === '16x9' ? video.poster : undefined}
          className={aspect === '16x9' ? 'aspect-video w-full' : 'aspect-[9/16] h-[28rem] max-w-full w-auto'}
        >
          <source src={file} type="video/mp4" />
        </video>
      ) : (
        <img
          src={video.poster}
          alt={`Still frame from the ${video.title} explainer`}
          width={640}
          height={360}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      )}
    </div>
  )
}

/** Desktop shows 16:9 by default; the toggle offers 9:16 at every width, for phones in particular. */
export const AspectToggle = ({ value, onChange }: { value: Aspect; onChange: (a: Aspect) => void }) => (
  <div role="group" aria-label="Aspect ratio" className="inline-flex rounded-[8px] border border-line bg-raised p-0.5">
    {ASPECTS.map((a) => (
      <button
        key={a}
        type="button"
        aria-pressed={value === a}
        onClick={() => onChange(a)}
        className={`rounded-[6px] px-3 py-1 font-mono text-xs transition-colors ${
          value === a ? 'bg-hover text-fg' : 'text-fg-2 hover:text-fg'
        }`}
      >
        {label(a)}
      </button>
    ))}
  </div>
)

/** The music credit from music.toml, shown under each video. */
export const MusicCredit = ({ video }: { video: Showcase }) => (
  <p className="text-xs text-fg-3">Music: {video.credit}</p>
)
