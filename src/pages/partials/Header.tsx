import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Code, Menu, MessageCircle, X } from 'lucide-react'
import { DISCORD, DOCS, DOCS_V2, REPO, VERSION } from '../../data/site'

const linkClass =
  'rounded-control px-3 py-2 text-sm font-medium text-fg-2 transition-colors hover:bg-hover hover:text-fg aria-[current=page]:bg-accent/16 aria-[current=page]:text-fg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const nav = (
    <>
      <a href="/#features" className={linkClass} onClick={close}>
        Features
      </a>
      <NavLink to="/examples" className={linkClass} onClick={close}>
        Showcase
      </NavLink>
      <a href="/#download" className={linkClass} onClick={close}>
        Download
      </a>
      <a href={DOCS_V2} className={linkClass}>
        Docs
      </a>
    </>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <img src="/img/logo.webp" width={36} height={36} alt="" className="rounded-card" />
          <span className="text-base font-semibold tracking-tight">AniMathIO</span>
          <span className="rounded-full border border-line bg-raised px-2 py-0.5 text-[11px] font-medium tabular-nums text-fg-2">
            {VERSION}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav}
          <span className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
          <a href={REPO} className={linkClass} aria-label="AniMathIO on GitHub">
            <Code size={18} aria-hidden="true" />
          </a>
          <a href={DISCORD} className={linkClass} aria-label="AniMathIO on Discord">
            <MessageCircle size={18} aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-control text-fg-2 hover:bg-hover hover:text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="flex flex-col gap-1 border-t border-line bg-panel px-4 py-3 md:hidden">
          {nav}
          <a href={DOCS} className={linkClass}>
            <BookOpen size={16} className="mr-2 inline" aria-hidden="true" />
            Documentation (v1 and v2)
          </a>
          <a href={REPO} className={linkClass}>
            <Code size={16} className="mr-2 inline" aria-hidden="true" />
            GitHub
          </a>
          <a href={DISCORD} className={linkClass}>
            <MessageCircle size={16} className="mr-2 inline" aria-hidden="true" />
            Discord
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
