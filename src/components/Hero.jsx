import Icon from './Icon'
import { stats, tickerItems } from '../data'

const headline = [
  { text: 'The' },
  { text: 'settlement' },
  { text: 'layer' },
  { text: 'for' },
  { text: 'real-world', serif: true },
  { text: 'assets.', serif: true },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-stage" aria-hidden="true">
        <div className="stars" />
        <div className="beam" />
        <div className="horizon">
          <div className="horizon-glow" />
        </div>
        <div className="hero-vignette" />
      </div>

      <div className="container hero-content">
        <a href="#markets" className="announce reveal-up" style={{ '--d': '0.1s' }}>
          <span className="announce-tag">New</span>
          RWA swaps, bridges & OnchainFX
          <Icon name="arrow" size={14} />
        </a>

        <h1 className="hero-title">
          {headline.map((w, i) => (
            <span className="word" key={w.text}>
              <span className={w.serif ? 'serif' : ''} style={{ '--d': `${0.25 + i * 0.09}s` }}>
                {w.text}
              </span>{' '}
            </span>
          ))}
        </h1>

        <p className="hero-sub reveal-up" style={{ '--d': '0.9s' }}>
          Tokenized treasuries, bonds, equities, money market funds and digital currencies, issued by
          FDX Securities. One integration for institutions and developers to issue, hold, convert and
          move value across every major chain.
        </p>

        <div className="hero-actions reveal-up" style={{ '--d': '1.05s' }}>
          <a href="#contact" className="btn btn-light btn-lg">
            Talk to our team <Icon name="arrow" size={16} />
          </a>
          <a href="#assets" className="btn btn-outline btn-lg">Explore the asset universe</a>
        </div>
      </div>

      <div className="container hero-foot reveal-up" style={{ '--d': '1.3s' }}>
        <dl className="hero-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="tape" aria-hidden="true">
        <div className="tape-track">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span className="tape-item" key={i}>
              <strong>{t.symbol}</strong>
              <span>{t.name}</span>
              <em>{t.change}</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
