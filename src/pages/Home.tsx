import { useState } from 'react'
import { ArrowRight, BookOpen, Download as DownloadIcon, Gauge, Play, Wand2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Container,
  Eyebrow,
  IconBadge,
  SectionHeading,
  Shot,
} from '../components/ui'
import { AspectToggle, MusicCredit, ShowcaseMedia, type Aspect } from '../components/showcase'
import {
  DOCS_V1,
  DOCS_V2,
  RELEASES,
  VERSION,
  automation,
  benchmarks,
  BENCHMARKS_URL,
  cliExample,
  downloads,
  keymap,
  mathObjects,
  pillars,
  plugins,
  showcaseVideos,
  type Showcase as ShowcaseVideo,
} from '../data/site'

const Hero = () => (
  <section className="relative overflow-hidden border-b border-line">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,92,255,0.22),transparent_70%),radial-gradient(40%_40%_at_85%_10%,rgba(34,211,238,0.14),transparent_70%)]"
    />
    <Container className="relative pt-16 pb-14 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-fg-2">
          <span className="h-1.5 w-1.5 rounded-full bg-clip-audio" aria-hidden="true" />
          AniMathIO {VERSION}
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-6xl sm:leading-[1.05]">
          A native video editor
          <br />
          <span className="text-gradient">for math animation.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-fg-2">
          AniMathIO 2 is a from-scratch Rust rewrite: a small, fast timeline editor with LaTeX, graphs and shapes
          as sandboxed plugins, and CapCut-style automation that runs on your machine.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="#download"
            className="btn-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-6 text-base"
          >
            <DownloadIcon size={18} aria-hidden="true" />
            Download {VERSION}
          </a>
          <a
            href={DOCS_V2}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-line bg-panel px-6 text-base font-medium text-fg transition-colors hover:bg-hover"
          >
            <BookOpen size={18} aria-hidden="true" />
            Read the docs
          </a>
        </div>
        <p className="mt-4 text-sm text-fg-3">Windows, macOS and Linux. MIT licensed.</p>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        <div
          aria-hidden="true"
          className="absolute -inset-4 -z-10 rounded-[24px] bg-gradient-to-br from-accent-from/25 to-accent-to/20 blur-2xl"
        />
        <Shot
          src="/img/editor/editor-main.webp"
          alt="The AniMathIO 2 editor: media library, program preview, inspector and a four-track timeline"
          width={1400}
          height={900}
          priority
        />
      </div>
    </Container>
  </section>
)

const Pillars = () => (
  <section id="features" className="pt-24">
    <Container>
      <SectionHeading eyebrow="What AniMathIO 2 is" title="A small editor core, and everything else as plugins">
        The core is a simple video editor: clips, a multi-track timeline, transforms and keyframes, audio, preview
        and export. Nothing math-specific lives in it.
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ icon, title, body }) => (
          <article key={title} className="panel p-6">
            <IconBadge icon={icon} />
            <h3 className="mt-4 text-lg font-semibold text-fg">{title}</h3>
            <p className="mt-2 text-fg-2">{body}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
)

const MathObjects = () => (
  <section className="pt-24">
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <Eyebrow>Math objects</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Equations and graphs are clips, not pictures
          </h2>
          <p className="mt-4 text-lg text-fg-2">
            Add an object from the Math library, edit it in one dialog with a live preview, and double-click the clip
            to reopen it later. LaTeX reveals with a Write on animation, and plots, vectors and grids stay sharp at
            any canvas size.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Math objects">
            {mathObjects.map((name) => (
              <li
                key={name}
                className="rounded-full border border-line bg-raised px-3 py-1 font-mono text-xs text-fg-2"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <Shot
          src="/img/editor/editor-math-panel.webp"
          alt="A sine plot selected on the canvas, with the Math library open on the left and plot settings in the inspector"
          width={1920}
          height={1067}
        />
      </div>
    </Container>
  </section>
)

const Automation = () => (
  <section className="pt-24">
    <Container>
      <SectionHeading eyebrow="Automation" title="The CapCut-style shortcuts, kept local">
        Transcription, cut detection and reframing run on your machine. Anything that changes the timeline is shown
        for review first and lands as a single undo step.
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {automation.map(({ icon, title, body }) => (
          <article key={title} className="panel p-6">
            <IconBadge icon={icon} />
            <h3 className="mt-4 text-lg font-semibold text-fg">{title}</h3>
            <p className="mt-2 text-fg-2">{body}</p>
          </article>
        ))}
        <article className="panel flex flex-col justify-between bg-gradient-to-br from-accent-from/10 to-accent-to/10 p-6">
          <div>
            <IconBadge icon={Wand2} />
            <h3 className="mt-4 text-lg font-semibold text-fg">Same tools from the CLI and MCP</h3>
            <p className="mt-2 text-fg-2">
              Each step above is also an <code className="font-mono text-sm text-fg">animathio-cli</code> subcommand
              and an MCP tool.
            </p>
          </div>
        </article>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Shot
          src="/img/editor/subtitles.webp"
          alt="Generated subtitles on a Subtitles track with the progress popover"
          width={1400}
          height={900}
        />
        <Shot
          src="/img/editor/editor-autocut.webp"
          alt="The Automatic cuts panel listing detected silences with the time saved"
          width={1400}
          height={900}
        />
      </div>
    </Container>
  </section>
)

const Plugins = () => (
  <section className="pt-24">
    <Container>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>Plugins</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Sandboxed WebAssembly components</h2>
          <p className="mt-4 text-lg text-fg-2">
            Plugins run in wasmtime through the Component Model, against WIT interfaces with memory, fuel and time
            limits. The first-party set ships in every installer. Write your own with the authoring guide.
          </p>
          <a
            href={`${DOCS_V2.replace('getting-started', 'plugins')}`}
            className="mt-6 inline-flex items-center gap-2 font-medium text-accent hover:underline"
          >
            Plugin authoring guide <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ul className="panel divide-y divide-line self-start">
          {plugins.map((p) => (
            <li key={p.id} className="flex flex-col gap-0.5 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
              <code className="font-mono text-sm text-fg">{p.id}</code>
              <span className="text-sm text-fg-2">{p.summary}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
)

const Control = () => (
  <section className="pt-24">
    <Container>
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>MCP and CLI</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Script it, or hand it to an agent</h2>
          <p className="mt-4 text-lg text-fg-2">
            Every mutation is a serializable, invertible command, so the editor, the command line and MCP clients all
            edit the project the same way, with undo included. Render frames, export MP4s and run the automation steps
            headlessly.
          </p>
          <a
            href={DOCS_V2.replace('getting-started', 'mcp')}
            className="mt-6 inline-flex items-center gap-2 font-medium text-accent hover:underline"
          >
            Control protocol and MCP tools <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <figure className="panel overflow-hidden">
          <figcaption className="border-b border-line bg-raised px-4 py-2 font-mono text-xs text-fg-2">
            animathio-cli
          </figcaption>
          <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-fg">
            <code>{cliExample}</code>
          </pre>
        </figure>
      </div>
    </Container>
  </section>
)

const Keymap = () => (
  <section className="pt-24">
    <Container>
      <SectionHeading eyebrow="Premiere keymap" title="Familiar if you have cut video before">
        Default shortcuts follow Premiere Pro, including the rate stretch, slip, slide and rolling edit tools. Every
        binding is searchable under Help, Keyboard Shortcuts.
      </SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {keymap.map(({ keys, label }) => (
          <li key={label} className="panel flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-sm text-fg-2">{label}</span>
            <span className="flex gap-1">
              {keys.map((k) => (
                <kbd key={k} className="kbd">
                  {k}
                </kbd>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <Shot
        className="mt-8"
        src="/img/editor/editor-timeline.webp"
        alt="The timeline with tool buttons, track headers, filmstrip clips and snapping"
        width={1920}
        height={511}
      />
    </Container>
  </section>
)

const HomeShowcaseCard = ({ video }: { video: ShowcaseVideo }) => {
  const [aspect, setAspect] = useState<Aspect>('16x9')
  return (
    <article className="panel overflow-hidden">
      <ShowcaseMedia video={video} aspect={aspect} />
      <div className="p-5">
        <h3 className="font-semibold text-fg">{video.title}</h3>
        <p className="mt-1 text-sm text-fg-2">{video.summary}</p>
        <MusicCredit video={video} />
        <div className="mt-4">
          <AspectToggle value={aspect} onChange={setAspect} />
        </div>
      </div>
    </article>
  )
}

const Showcase = () => (
  <section id="showcase" className="pt-24">
    <Container>
      <SectionHeading eyebrow="Showcase" title="Three explainers, built through the public CLI">
        Each is 24 seconds, authored as commands through the CLI and MCP server, and exported at 16:9 and 9:16.
      </SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {showcaseVideos.map((v) => (
          <HomeShowcaseCard key={v.slug} video={v} />
        ))}
      </div>
      <Link
        to="/examples"
        className="mt-6 inline-flex items-center gap-2 font-medium text-accent hover:underline"
      >
        <Play size={16} aria-hidden="true" /> See the showcase page
      </Link>
    </Container>
  </section>
)

/** Numbers from `docs/benchmarks.md` in the main repository (`benchmarks` in `src/data/site.ts`). */
const Benchmarks = () => {
  if (benchmarks.length === 0 && !import.meta.env.DEV) return null
  return (
    <section id="benchmarks" className="pt-24">
      <Container>
        <SectionHeading eyebrow="Benchmarks" title="Measured, not promised">
          2.0 against 1.8.3 on one Linux machine (Ryzen 7 5800X, Xvfb), medians of three runs.{' '}
          <a className="text-accent underline-offset-4 hover:underline" href={BENCHMARKS_URL}>
            Method and caveats
          </a>
          .
        </SectionHeading>
        {benchmarks.length === 0 ? (
          <div
            data-todo="benchmarks"
            className="flex items-center gap-3 rounded-[10px] border border-dashed border-snap/60 bg-snap/5 p-6 text-fg-2"
          >
            <Gauge size={22} className="shrink-0 text-snap" aria-hidden="true" />
            <p>
              <span className="font-mono text-sm text-snap">TODO(benchmarks)</span>: numbers from{' '}
              <code className="font-mono text-sm">docs/benchmarks.md</code> go here. This block is development-only.
            </p>
          </div>
        ) : (
          <div className="panel overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="border-b border-line text-fg-2">
                <tr>
                  <th className="px-5 py-3 font-medium">Metric</th>
                  <th className="px-5 py-3 font-medium">1.x</th>
                  <th className="px-5 py-3 font-medium">2.0</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {benchmarks.map((b) => (
                  <tr key={b.metric}>
                    <td className="px-5 py-3">
                      {b.metric}
                      {b.note && <span className="block text-xs text-fg-3">{b.note}</span>}
                    </td>
                    <td className="px-5 py-3 font-mono">{b.v1}</td>
                    <td className="px-5 py-3 font-mono text-fg">{b.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </section>
  )
}

const Download = () => (
  <section id="download" className="pt-24">
    <Container>
      <SectionHeading eyebrow="Download" title={`AniMathIO ${VERSION}`}>
        Every installer ships the editor, <code className="font-mono text-base text-fg">animathio-cli</code> and the
        first-party plugins. CI-built installers carry a build provenance attestation.
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        {downloads.map(({ platform, icon: Icon, format, file, url, note }) => (
          <a
            key={file}
            href={url}
            className="panel group flex flex-col p-5 transition-colors hover:border-accent"
          >
            <span className="flex items-center justify-between">
              <IconBadge icon={Icon} />
              <DownloadIcon
                size={18}
                className="text-fg-3 transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
            </span>
            <span className="mt-4 text-lg font-semibold text-fg">{platform}</span>
            <span className="text-sm text-fg-2">{format}</span>
            <code className="mt-3 break-all font-mono text-xs text-fg-2">{file}</code>
            <span className="mt-3 text-xs text-fg-3">{note}</span>
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-fg-2">
        Prefer to build from source, or need another version? See the{' '}
        <a className="text-accent hover:underline" href={RELEASES}>
          releases page
        </a>
        . Coming from 1.x? Projects import with <code className="font-mono text-fg">animathio-cli import-v1</code>; the
        1.x documentation stays online as{' '}
        <a className="text-accent hover:underline" href={DOCS_V1}>
          v1 (legacy)
        </a>
        .
      </p>
    </Container>
  </section>
)

const Home: React.FC = () => (
  <>
    <Hero />
    <Pillars />
    <MathObjects />
    <Automation />
    <Plugins />
    <Control />
    <Keymap />
    <Showcase />
    <Benchmarks />
    <Download />
  </>
)

export default Home
