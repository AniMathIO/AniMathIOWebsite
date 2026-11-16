import { Link } from 'react-router-dom'
import { DISCORD, DOCS, DOCS_V1, DOCS_V2, RELEASES, REPO } from '../../data/site'

const col = 'flex flex-col gap-2 text-sm'
const link = 'text-fg-2 transition-colors hover:text-fg'
const head = 'mb-1 font-mono text-xs uppercase tracking-[0.14em] text-fg-3'

const Footer: React.FC = () => (
  <footer className="mt-24 border-t border-line bg-panel">
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-3">
          <img src="/img/logo.webp" width={32} height={32} alt="" className="rounded-[8px]" />
          <span className="font-semibold">AniMathIO</span>
        </div>
        <p className="mt-3 max-w-xs text-sm text-fg-2">
          A native editor for math animation videos. Open source, MIT licensed.
        </p>
      </div>
      <div className={col}>
        <span className={head}>Product</span>
        <a className={link} href="/#features">Features</a>
        <Link className={link} to="/examples">Showcase</Link>
        <a className={link} href="/#download">Download</a>
      </div>
      <div className={col}>
        <span className={head}>Docs</span>
        <a className={link} href={DOCS_V2}>AniMathIO 2</a>
        <a className={link} href={DOCS_V1}>1.x (legacy)</a>
        <a className={link} href={`${DOCS}/blog`}>Blog</a>
      </div>
      <div className={col}>
        <span className={head}>Project</span>
        <a className={link} href={REPO}>GitHub</a>
        <a className={link} href={RELEASES}>Releases</a>
        <a className={link} href={DISCORD}>Discord</a>
      </div>
    </div>
    <div className="border-t border-line py-5 text-center text-sm text-fg-3">
      © 2026 AniMathIO. Released under the MIT license.
    </div>
  </footer>
)

export default Footer
