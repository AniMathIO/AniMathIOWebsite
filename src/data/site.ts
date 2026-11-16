import type { LucideIcon } from 'lucide-react'
import {
  AudioLines,
  Captions,
  Clapperboard,
  Crop,
  Keyboard,
  Music,
  Scissors,
  Sigma,
  Terminal,
  Volume2,
  Waves,
  Blocks,
  Bot,
  Cpu,
  Package,
  Monitor,
  Laptop,
} from 'lucide-react'

export const VERSION = '2.1.0'
export const REPO = 'https://github.com/AniMathIO/AniMathIO'
export const RELEASES = `${REPO}/releases`
export const DOCS = 'https://docs.animathio.com'
export const DOCS_V2 = `${DOCS}/docs/getting-started`
export const DOCS_V1 = `${DOCS}/docs/v1/getting-started`
export const DISCORD = 'https://discord.gg/cZMTYSAHRX'

/** Release assets are published under the tag `v{VERSION}` (release-plz, `v{{version}}`). */
const asset = (name: string) => `${REPO}/releases/download/v${VERSION}/${name}`

export interface Download {
  platform: string
  icon: LucideIcon
  format: string
  file: string
  url: string
  note: string
}

/**
 * Installer names are exactly what `.github/workflows/package.yml` produces
 * (cargo-packager), see docs/release-checklist.md in the main repository.
 */
export const downloads: Download[] = [
  {
    platform: 'Windows',
    icon: Monitor,
    format: 'NSIS installer, x64',
    file: `animathio_${VERSION}_x64-setup.exe`,
    url: asset(`animathio_${VERSION}_x64-setup.exe`),
    note: 'Unsigned: SmartScreen shows a warning. Choose More info, then Run anyway.',
  },
  {
    platform: 'macOS',
    icon: Laptop,
    format: 'dmg, Apple Silicon',
    file: `AniMathIO_${VERSION}_aarch64.dmg`,
    url: asset(`AniMathIO_${VERSION}_aarch64.dmg`),
    note: 'Unsigned and not notarized: right-click the app, then Open.',
  },
  {
    platform: 'Linux',
    icon: Terminal,
    format: 'AppImage, x86_64',
    file: `animathio_${VERSION}_x86_64.AppImage`,
    url: asset(`animathio_${VERSION}_x86_64.AppImage`),
    note: 'The host provides the runtime libraries.',
  },
  {
    platform: 'Debian / Ubuntu',
    icon: Package,
    format: 'deb, amd64',
    file: `animathio_${VERSION}_amd64.deb`,
    url: asset(`animathio_${VERSION}_amd64.deb`),
    note: 'Declares its runtime libraries as dependencies.',
  },
]

export interface Feature {
  icon: LucideIcon
  title: string
  body: string
  tag?: string
}

export const automation: Feature[] = [
  {
    icon: Captions,
    title: 'Automatic subtitles',
    body: 'Local Whisper transcription into caption clips on their own track. Six animated styles, including word highlight and karaoke fill, plus SRT and WebVTT import and export.',
  },
  {
    icon: Scissors,
    title: 'Autocut',
    body: 'Detects silences, filler words and repeats. You review the proposed cuts with the time saved, then apply them as one undo step.',
  },
  {
    icon: Clapperboard,
    title: 'Scene cuts',
    body: 'A deterministic scene detector proposes cuts with thumbnails. Split clips (and their linked audio) or drop markers at each change.',
  },
  {
    icon: Crop,
    title: 'Auto reframe',
    body: 'Follows motion and contrast to turn 16:9 video into 9:16, 1:1 or 4:5. Offline, with no model download.',
  },
  {
    icon: Music,
    title: 'Beat sync',
    body: 'Detects tempo and beats, lets you place markers, and snaps cuts to the beat. Markers ride along with ripple edits.',
  },
  {
    icon: Volume2,
    title: 'Auto ducking',
    body: 'Lowers music under speech, on a whole track or on individual music clips.',
  },
  {
    icon: AudioLines,
    title: 'Denoise',
    body: 'Spectral gating that learns the noise profile from a selected range or the quietest frames. Deterministic and undoable.',
  },
]

export const mathObjects = [
  'LaTeX',
  'Text',
  'Point',
  'Line',
  'Vector',
  'Polygon',
  'Plot',
  'Circle',
  'Ellipse',
  'Cartesian grid',
  'Polar grid',
]

export interface PluginInfo {
  id: string
  summary: string
}

export const plugins: PluginInfo[] = [
  { id: 'org.animathio.latex', summary: 'LaTeX and Typst math with a Write on reveal' },
  { id: 'org.animathio.graph', summary: 'Function plots and coordinate grids' },
  { id: 'org.animathio.text', summary: 'Text, titles and caption styles' },
  { id: 'org.animathio.shapes', summary: 'Vector shapes' },
  { id: 'org.animathio.effects-basic', summary: 'Eight clip effects' },
  { id: 'org.animathio.audio-basic', summary: 'EQ, compressor, gate, denoise' },
  { id: 'org.animathio.animations', summary: 'In, out and emphasis presets' },
  { id: 'org.animathio.import-manim', summary: 'Manim scene importer' },
]

export const pillars: Feature[] = [
  {
    icon: Cpu,
    title: 'Rust, native',
    body: 'A GPUI desktop editor over a command-only core. Preview renders on the GPU when an adapter is available and falls back to the CPU reference, which is also what export uses.',
  },
  {
    icon: Blocks,
    title: 'Plugins in a sandbox',
    body: 'Text, LaTeX, graphs, effects and importers are WebAssembly components with typed WIT interfaces and hard resource limits. The core stays small.',
  },
  {
    icon: Sigma,
    title: 'Math objects',
    body: 'Eleven editable objects with a live-preview dialog: LaTeX with a Write on reveal, plots, vectors, polygons, grids and more.',
  },
  {
    icon: Bot,
    title: 'MCP and CLI',
    body: 'Every edit is a serializable, invertible command. Drive the editor, or a headless project, from the command line or an MCP client.',
  },
  {
    icon: Keyboard,
    title: 'Premiere keymap',
    body: 'V, C, B, R, Y, U and N tools, J, K and L shuttle, Ctrl+K add edit and Q and W ripple trim. Searchable under Help.',
  },
  {
    icon: Waves,
    title: 'Deterministic output',
    body: 'Rendering is one pure function of the project and a time. Preview, export and the golden-frame tests share it, so exports match what you saw.',
  },
]

export const keymap: { keys: string[]; label: string }[] = [
  { keys: ['V'], label: 'Select' },
  { keys: ['C'], label: 'Blade' },
  { keys: ['B'], label: 'Ripple trim' },
  { keys: ['R'], label: 'Rate stretch' },
  { keys: ['Y'], label: 'Slip' },
  { keys: ['U'], label: 'Slide' },
  { keys: ['N'], label: 'Rolling edit' },
  { keys: ['Ctrl', 'K'], label: 'Add edit' },
  { keys: ['Q', 'W'], label: 'Ripple trim to playhead' },
  { keys: ['J', 'K', 'L'], label: 'Shuttle' },
  { keys: ['I', 'O'], label: 'In and out points' },
  { keys: ['M'], label: 'Marker' },
]

export const cliExample = `# a headless project, no display needed
animathio-cli new-sample -o sample.amio
animathio-cli render sample.amio --frame 30 -o frame.png

# CapCut-style steps from the command line
animathio-cli transcribe lesson.amio --style karaoke -o captions.amio
animathio-cli reframe landscape.amio -o vertical.amio --aspect 9:16

# bring a 1.x project or a Manim scene along
animathio-cli import-v1 project.animathio -o imported.amio
animathio-cli import-manim scene.py -o scene.amio

# expose the project to an MCP client
animathio-cli mcp`

export interface Showcase {
  slug: string
  title: string
  summary: string
  poster: string
  /** The `credit` line from examples/showcase/<name>/music.toml in the main repository. */
  credit: string
  /**
   * Set to true once the exported MP4s from `scripts/showcase-export.sh` are copied to
   * `public/videos/showcase/`. Until then the card shows a still frame.
   */
  published: boolean
}

/**
 * File names are the ones `scripts/showcase-export.sh` writes:
 * `<name>-16x9.mp4` and `<name>-9x16.mp4`, copied to `public/videos/showcase/`.
 */
export const showcaseVideos: Showcase[] = [
  {
    slug: 'pythagorean',
    title: 'The Pythagorean theorem',
    summary: 'Four congruent 3-4-5 triangles rearrange, leaving equal square areas.',
    poster: '/img/showcase/pythagorean.webp',
    credit: 'Bach / Kimiko Ishizaka / CC0',
    published: true,
  },
  {
    slug: 'unit-circle',
    title: 'A circle becomes a wave',
    summary: "A rotating point's vertical projection traces two sine periods.",
    poster: '/img/showcase/unit-circle.webp',
    credit: 'Satie / Robin Alciatore / Musopen / Public domain',
    published: true,
  },
  {
    slug: 'fourier',
    title: 'Build a square wave',
    summary: 'One, two, then four odd harmonics sum through rotating epicycles.',
    poster: '/img/showcase/fourier.webp',
    credit: 'Debussy / USAF Wright Brass / Public domain (US)',
    published: true,
  },
]

export const showcaseFile = (slug: string, aspect: '16x9' | '9x16') =>
  `/videos/showcase/${slug}-${aspect}.mp4`

/**
 * From `docs/benchmarks.md` in the main repository (1.8.3 vs 2.0.0, one Linux machine under
 * Xvfb, medians of three runs). The Benchmarks section is hidden in production when empty.
 */
export interface Benchmark {
  metric: string
  v1: string
  v2: string
  note?: string
}
export const benchmarks: Benchmark[] = [
  { metric: 'Export, 60 s 1080p30 MP4', v1: '116.8 s', v2: '37.4 s', note: '3.1x faster' },
  { metric: 'Export, 10 s 1080p30 MP4', v1: '20.4 s', v2: '6.5 s' },
  { metric: 'Open a project', v1: '1.08 s', v2: '0.21 s' },
  { metric: 'Start to a usable window', v1: '0.81 s', v2: '0.20 s' },
  { metric: 'Memory, idle with a project open', v1: '923 MiB', v2: '487 MiB' },
  {
    metric: 'Peak memory, 10 s export',
    v1: '1252 MiB',
    v2: '128 MiB',
    note: '1.x exports from its window, 2.0 from animathio-cli',
  },
  { metric: 'Size on disk', v1: '658 MiB', v2: '293 MiB', note: 'unpacked 1.x build vs. 2.0 install' },
]

export const BENCHMARKS_URL = 'https://github.com/AniMathIO/AniMathIO/blob/main/docs/benchmarks.md'
