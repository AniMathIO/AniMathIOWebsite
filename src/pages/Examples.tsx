import { useState } from 'react'
import { Download, Film } from 'lucide-react'
import { Container, Eyebrow } from '../components/ui'
import { showcaseFile, showcaseVideos, type Showcase } from '../data/site'

type Aspect = '16x9' | '9x16'

const ShowcaseCard = ({ video }: { video: Showcase }) => {
  const [aspect, setAspect] = useState<Aspect>('16x9')
  const file = showcaseFile(video.slug, aspect)
  const fileName = file.split('/').pop()

  return (
    <article className="panel overflow-hidden">
      <div className="flex items-center justify-center bg-[#090b10] p-3">
        {video.published ? (
          <video
            key={file}
            controls
            preload="none"
            poster={video.poster}
            className={aspect === '16x9' ? 'aspect-video w-full' : 'aspect-[9/16] max-h-[28rem]'}
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
      <div className="p-5">
        <h2 className="text-lg font-semibold text-fg">{video.title}</h2>
        <p className="mt-1 text-sm text-fg-2">{video.summary}</p>
        <p className="mt-3 text-xs text-fg-3">Music: {video.music}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div role="group" aria-label="Aspect ratio" className="inline-flex rounded-[8px] border border-line bg-raised p-0.5">
            {(['16x9', '9x16'] as const).map((a) => (
              <button
                key={a}
                type="button"
                aria-pressed={aspect === a}
                onClick={() => setAspect(a)}
                className={`rounded-[6px] px-3 py-1 font-mono text-xs transition-colors ${
                  aspect === a ? 'bg-hover text-fg' : 'text-fg-2 hover:text-fg'
                }`}
              >
                {a.replace('x', ':')}
              </button>
            ))}
          </div>
          {video.published ? (
            <a
              href={file}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <Download size={14} aria-hidden="true" /> MP4
            </a>
          ) : (
            <code className="truncate font-mono text-xs text-fg-3" title={`Publishes as ${fileName}`}>
              {fileName}
            </code>
          )}
        </div>
        {!video.published && (
          <p className="mt-3 flex items-center gap-2 text-xs text-fg-3">
            <Film size={14} aria-hidden="true" />
            Still frame from the test renders. The exported MP4 is added with the 2.0 release.
          </p>
        )}
      </div>
    </article>
  )
}

interface LegacyVideo {
  title: string
  author: string
  date: string
  url: string
  project?: string
}

const legacyVideos: LegacyVideo[] = [
  {
    title: "Euler's method: approximating solutions to differential equations",
    author: 'Kovács Bálint-Hunor',
    date: 'Mar 9, 2025',
    url: '/videos/eulers-method.webm',
    project: '/projects/eulers-method.animathio',
  },
  {
    title: "Newton's law",
    author: 'Kovács Bálint-Hunor',
    date: 'Jun 20, 2024',
    url: '/videos/newtons-law.webm',
  },
]

const Examples: React.FC = () => (
  <Container className="pt-16">
    <header className="max-w-2xl">
      <Eyebrow>Showcase</Eyebrow>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Made with AniMathIO 2.0</h1>
      <p className="mt-4 text-lg text-fg-2">
        Three 24-second explainers, built entirely through the public CLI and MCP server and exported at 1920×1080
        (16:9) and 1080×1920 (9:16). The sources live in{' '}
        <a
          className="text-accent hover:underline"
          href="https://github.com/AniMathIO/AniMathIO/tree/main/examples/showcase"
        >
          examples/showcase
        </a>
        .
      </p>
    </header>

    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {showcaseVideos.map((v) => (
        <ShowcaseCard key={v.slug} video={v} />
      ))}
    </div>

    <section className="mt-24">
      <Eyebrow>Made with 1.x</Eyebrow>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">Earlier demos</h2>
      <p className="mt-2 max-w-2xl text-fg-2">
        These were made in AniMathIO 1.x. The project files open with the 1.x editor, and import into 2.0 with{' '}
        <code className="font-mono text-fg">animathio-cli import-v1</code>.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {legacyVideos.map((v) => (
          <article key={v.url} className="panel overflow-hidden">
            <video controls preload="metadata" muted className="aspect-video w-full bg-[#090b10]">
              <source src={v.url} type="video/webm" />
            </video>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <h3 className="font-semibold text-fg">{v.title}</h3>
                <p className="mt-1 text-sm text-fg-2">
                  {v.author} · {v.date}
                </p>
              </div>
              {v.project && (
                <a
                  href={v.project}
                  download
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  <Download size={14} aria-hidden="true" /> Project
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  </Container>
)

export default Examples
