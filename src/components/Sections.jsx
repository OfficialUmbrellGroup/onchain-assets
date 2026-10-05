import { useState } from 'react'
import Icon from './Icon'
import { Logo } from './Header'
import { SectionHead } from './Assets'
import { audiences, chains, codeSamples, compliance, issuanceSteps, services } from '../data'

export function Chains() {
  return (
    <section className="chains" data-reveal>
      <div className="container chains-inner">
        <p className="mono-label">Natively issued across</p>
        <div className="chain-list">
          {chains.map((c) => (
            <span key={c} className="chain">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Issuance() {
  return (
    <section className="section section-paper" id="issuance">
      <div className="container">
        <SectionHead
          index="03"
          label="Issued by FDX Securities"
          light
          title={<>Regulated issuance. <span className="serif">Programmable</span> distribution.</>}
        >
          We handle structuring, custody, compliance and corporate actions, so you can focus on building
          the products your clients rely on.
        </SectionHead>

        <ol className="steps">
          {issuanceSteps.map((s, i) => (
            <li className="step" key={s.step} data-reveal style={{ '--d': `${i * 0.12}s` }}>
              <span className="step-num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>

        <div className="assurance" data-reveal>
          {compliance.map((c) => (
            <div key={c.title}>
              <Icon name="check" size={16} />
              <strong>{c.title}</strong>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Infrastructure() {
  return (
    <section className="section" id="infrastructure">
      <div className="container">
        <SectionHead
          index="04"
          label="Infrastructure"
          title={<>The full stack to move money <span className="serif">onchain.</span></>}
        >
          Beyond issuance: wallets, payments, compliance and liquidity primitives that work with every
          asset we issue and every chain we support.
        </SectionHead>
        <div className="services" data-reveal>
          {services.map((s) => (
            <article className={`service ${s.highlight ? 'service-highlight' : ''}`} key={s.title}>
              <div className="service-top">
                <Icon name={s.icon} size={20} />
                {s.highlight && <span className="menu-badge">New</span>}
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <Icon name="arrow" size={16} className="service-arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Developers() {
  const keys = Object.keys(codeSamples)
  const [active, setActive] = useState(keys[0])
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(codeSamples[active].code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section section-deep" id="developers">
      <div className="deep-glow deep-glow-left" aria-hidden="true" />
      <div className="container dev">
        <div className="dev-copy" data-reveal>
          <p className="label"><span className="label-index">05</span>Developers</p>
          <h2>Ship RWA products in days, <span className="serif">not quarters.</span></h2>
          <p className="dim">
            Typed SDKs, REST APIs and webhooks for issuance, wallets, FX, swaps and yield. Test everything
            in a full sandbox with test assets on every supported chain.
          </p>
          <ul className="spec-list">
            <li><span>SDKs</span>TypeScript, Python, Go</li>
            <li><span>APIs</span>Idempotent REST, signed webhooks</li>
            <li><span>Sandbox</span>Faucet-funded test RWAs</li>
            <li><span>Agents</span>MCP server for AI integrations</li>
          </ul>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-light">Get API keys</a>
            <a href="#contact" className="btn btn-outline">Read the docs</a>
          </div>
        </div>
        <div className="code-card" data-reveal>
          <div className="code-bar">
            <span className="dots"><i /><i /><i /></span>
            <div className="code-tabs">
              {keys.map((k) => (
                <button key={k} className={k === active ? 'active' : ''} onClick={() => setActive(k)}>
                  {codeSamples[k].label}
                </button>
              ))}
            </div>
          </div>
          <div className="code-body">
            <button className="copy-btn" onClick={copy} aria-label="Copy code">
              <Icon name={copied ? 'check' : 'copy'} size={15} />
            </button>
            <pre key={active}><code>{codeSamples[active].code}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Institutions() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="institutions">
      <div className="container">
        <SectionHead
          index="06"
          label="Built for"
          title={<>Institutions and builders, <span className="serif">one platform.</span></>}
        />
        <div className="audiences" data-reveal>
          {audiences.map((a, i) => (
            <div
              key={a.title}
              className={`audience ${open === i ? 'is-open' : ''}`}
              onMouseEnter={() => setOpen(i)}
            >
              <button className="audience-head" onClick={() => setOpen(i)} aria-expanded={open === i}>
                <span className="audience-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <span className="audience-plus" aria-hidden="true" />
              </button>
              <div className="audience-body">
                <div>
                  <p>{a.description}</p>
                  <ul>
                    {a.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="cta" id="contact">
      <div className="cta-stage" aria-hidden="true">
        <div className="stars" />
        <div className="horizon horizon-cta">
          <div className="horizon-glow" />
        </div>
      </div>
      <div className="container cta-inner" data-reveal>
        <p className="label center">Get started</p>
        <h2>Bring real-world assets <span className="serif">to your clients.</span></h2>
        <p className="dim">
          Speak with our institutional team about issuance, integration and access to the full Onchain
          Assets stack.
        </p>
        {sent ? (
          <p className="cta-success"><Icon name="check" size={18} /> Thank you. Our team will be in touch shortly.</p>
        ) : (
          <form
            className="cta-form"
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSent(true)
            }}
          >
            <input
              type="email"
              required
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Work email"
            />
            <button type="submit" className="btn btn-light">Talk to sales</button>
          </form>
        )}
      </div>
    </section>
  )
}

const footerLinks = {
  Assets: ['Digital Currencies', 'Treasuries', 'Bonds', 'Stocks', 'Money Market Funds', 'Vaults', 'Portfolio Tokens'],
  Infrastructure: ['OnchainFX', 'RWA Swaps & Bridges', 'Wallet as a Service', 'Agentic Wallets', 'Cards', 'Checkout', 'Yield APIs'],
  Developers: ['Documentation', 'API Reference', 'SDKs', 'Sandbox', 'Status'],
  Company: ['About', 'FDX Securities', 'Transparency', 'Careers', 'Legal'],
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Infrastructure for tokenized real-world assets, digital currencies and onchain finance.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l}><a href="#top">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Onchain Assets. All rights reserved.</span>
          <p>
            Tokenized securities are issued by FDX Securities and are available only to eligible investors in
            permitted jurisdictions. Nothing on this site constitutes an offer to sell or a solicitation of an
            offer to buy any security. Figures shown are illustrative and not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}
