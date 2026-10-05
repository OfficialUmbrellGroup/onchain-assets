import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { megaMenu } from '../data'

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Onchain Assets home">
      <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
        <path d="M16 3a13 13 0 0 1 0 26" fill="none" stroke="url(#lg)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="4.5" fill="url(#lg)" />
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c6e0ff" />
            <stop offset="1" stopColor="#5f9dff" />
          </linearGradient>
        </defs>
      </svg>
      <span>Onchain Assets</span>
    </a>
  )
}

function MenuItem({ item, onNavigate }) {
  return (
    <a href={item.href} className="menu-item" onClick={onNavigate}>
      <span className="menu-icon"><Icon name={item.icon} size={18} /></span>
      <span>
        <span className="menu-label">
          {item.label}
          {item.badge && <span className="menu-badge">{item.badge}</span>}
        </span>
        <span className="menu-desc">{item.desc}</span>
      </span>
    </a>
  )
}

function Panel({ entry, onNavigate }) {
  if (entry.type === 'columns') {
    return (
      <div className="panel-columns">
        {entry.columns.map((col, i) => (
          <div className="panel-col" key={i}>
            {col.groups.map((g) => (
              <div className="panel-group" key={g.title}>
                <p className="panel-title">{g.title}</p>
                {g.items.map((item) => (
                  <MenuItem key={item.label} item={item} onNavigate={onNavigate} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  if (entry.type === 'solutions') {
    return (
      <div className="panel-solutions">
        {entry.groups.map((g) => (
          <div className="panel-group" key={g.title}>
            <p className="panel-title">{g.title}</p>
            {g.items.map((label) => (
              <a key={label} href="#institutions" className="menu-link" onClick={onNavigate}>
                {label}
              </a>
            ))}
          </div>
        ))}
        <a href={entry.feature.href} className="panel-feature" onClick={onNavigate}>
          <span className="feature-art" aria-hidden="true">
            <span className="feature-orb" />
            <span className="feature-ring" />
          </span>
          <span className="panel-title">{entry.feature.eyebrow}</span>
          <span className="feature-title">{entry.feature.title}</span>
          <span className="feature-more">
            Read the story <Icon name="arrow" size={14} />
          </span>
        </a>
      </div>
    )
  }

  return (
    <div className="panel-list">
      {entry.items.map((item) => (
        <MenuItem key={item.label} item={item} onNavigate={onNavigate} />
      ))}
    </div>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKey = (e) => e.key === 'Escape' && setOpenMenu(null)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const open = (label) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  const closeAll = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  return (
    <header className={`header ${scrolled || openMenu ? 'header-solid' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="nav" onMouseLeave={scheduleClose} aria-label="Primary">
          {megaMenu.map((entry) =>
            entry.href ? (
              <a key={entry.label} href={entry.href} className="nav-link" onMouseEnter={() => open(null)}>
                {entry.label}
              </a>
            ) : (
              <div
                key={entry.label}
                className={`nav-item nav-item-${entry.type} ${openMenu === entry.label ? 'is-open' : ''}`}
                onMouseEnter={() => open(entry.label)}
              >
                <button
                  className="nav-link"
                  aria-expanded={openMenu === entry.label}
                  onClick={() => setOpenMenu((m) => (m === entry.label ? null : entry.label))}
                >
                  {entry.label}
                  <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </button>
                <div className={`mega mega-${entry.type}`} onMouseEnter={() => open(entry.label)}>
                  <div className="mega-inner">
                    <Panel entry={entry} onNavigate={closeAll} />
                  </div>
                </div>
              </div>
            ),
          )}
        </nav>

        <div className="header-actions">
          <a href="#developers" className="btn btn-text">Sign in</a>
          <a href="#contact" className="btn btn-light">Talk to sales</a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`}>
        <div className="container">
          {megaMenu.map((entry) =>
            entry.href ? (
              <a key={entry.label} href={entry.href} className="mobile-link" onClick={closeAll}>
                {entry.label}
              </a>
            ) : (
              <div key={entry.label} className={`mobile-group ${mobileSection === entry.label ? 'is-open' : ''}`}>
                <button
                  className="mobile-link"
                  onClick={() => setMobileSection((s) => (s === entry.label ? null : entry.label))}
                  aria-expanded={mobileSection === entry.label}
                >
                  {entry.label}
                  <span className="mobile-plus" aria-hidden="true" />
                </button>
                <div className="mobile-sub">
                  <Panel entry={entry} onNavigate={closeAll} />
                </div>
              </div>
            ),
          )}
          <div className="mobile-actions">
            <a href="#developers" className="btn btn-outline" onClick={closeAll}>Sign in</a>
            <a href="#contact" className="btn btn-light" onClick={closeAll}>Talk to sales</a>
          </div>
        </div>
      </div>
      <div className={`menu-scrim ${openMenu ? 'is-visible' : ''}`} onClick={() => setOpenMenu(null)} />
    </header>
  )
}
