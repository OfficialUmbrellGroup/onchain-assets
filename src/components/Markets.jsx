import { useEffect, useState } from 'react'
import Icon from './Icon'
import { SectionHead } from './Assets'
import { chains, fxCurrencies, fxPairs, rwaAssets } from '../data'

const usdRates = { oUSD: 1, ...fxPairs.oUSD }
const rwaPrice = Object.fromEntries(rwaAssets.map((a) => [a.symbol, a.price]))
const bridgeChains = chains.slice(0, 10)

const modes = [
  { id: 'fx', label: 'OnchainFX' },
  { id: 'swap', label: 'RWA Swap' },
  { id: 'bridge', label: 'RWA Bridge' },
]

const defaults = {
  fx: { from: 'oUSD', to: 'oEUR' },
  swap: { from: 'oUSD', to: 'oUSTB' },
  bridge: { from: 'Ethereum', to: 'Plume', asset: 'oGILT' },
}

function format(n, digits = 2) {
  if (!Number.isFinite(n)) return '0.00'
  return n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })
}

function Widget() {
  const [mode, setMode] = useState('fx')
  const [amount, setAmount] = useState('1000000')
  const [pair, setPair] = useState(defaults)
  const [seconds, setSeconds] = useState(30)

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s <= 1 ? 30 : s - 1)), 1000)
    return () => clearInterval(id)
  }, [])

  const current = pair[mode]
  const value = parseFloat(amount) || 0
  const options =
    mode === 'fx' ? fxCurrencies : mode === 'swap' ? rwaAssets.map((a) => a.symbol) : bridgeChains

  let rate = 1
  if (mode === 'fx') rate = usdRates[current.to] / usdRates[current.from]
  if (mode === 'swap') rate = rwaPrice[current.from] / rwaPrice[current.to]
  const output = value * rate

  const update = (key, val) => {
    setPair((p) => {
      const next = { ...p[mode], [key]: val }
      if (key !== 'asset' && next.from === next.to) {
        next[key === 'from' ? 'to' : 'from'] = p[mode][key]
      }
      return { ...p, [mode]: next }
    })
  }

  const flip = () => setPair((p) => ({ ...p, [mode]: { ...p[mode], from: p[mode].to, to: p[mode].from } }))

  const outDigits = rate > 50 || mode === 'bridge' ? 2 : 4

  return (
    <div className="widget">
      <div className="widget-bar">
        <span className="live-dot" /> Live liquidity
        <span className="widget-bar-right">FDX · Settlement network</span>
      </div>
      <div className="widget-tabs" role="tablist">
        {modes.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            className={mode === m.id ? 'active' : ''}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'bridge' && (
        <label className="field">
          <span className="field-label">Asset</span>
          <select value={current.asset} onChange={(e) => update('asset', e.target.value)}>
            {['oGILT', 'oUSTB', 'oSPY', 'oMMF', 'oXAU', 'PRIME'].map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
      )}

      <div className="field">
        <span className="field-label">{mode === 'bridge' ? 'From chain' : 'You sell'}</span>
        <div className="field-row">
          <input
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))}
            aria-label="Amount"
          />
          <select value={current.from} onChange={(e) => update('from', e.target.value)}>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="flip" onClick={flip} aria-label="Flip direction">
        <Icon name="arrowDown" size={18} />
      </button>

      <div className="field">
        <span className="field-label">{mode === 'bridge' ? 'To chain' : 'You receive'}</span>
        <div className="field-row">
          <output>{format(output, outDigits)}</output>
          <select value={current.to} onChange={(e) => update('to', e.target.value)}>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <dl className="quote">
        {mode === 'bridge' ? (
          <>
            <div><dt>Route</dt><dd>{current.from} → {current.to}</dd></div>
            <div><dt>Compliance</dt><dd className="green">Transfer rules preserved</dd></div>
            <div><dt>Network fee</dt><dd className="green">Sponsored (gasless)</dd></div>
            <div><dt>Est. time</dt><dd>~45 seconds</dd></div>
          </>
        ) : (
          <>
            <div>
              <dt>Rate</dt>
              <dd>1 {current.from} = {format(rate, rate > 50 ? 2 : 4)} {current.to}</dd>
            </div>
            <div>
              <dt>{mode === 'fx' ? 'Settlement' : 'Execution'}</dt>
              <dd>{mode === 'fx' ? 'Atomic PvP' : 'Atomic, at NAV'}</dd>
            </div>
            <div><dt>Network fee</dt><dd className="green">Sponsored (gasless)</dd></div>
            <div>
              <dt>Firm quote</dt>
              <dd><span className="countdown">{seconds}s</span></dd>
            </div>
          </>
        )}
      </dl>

      <a href="#contact" className="btn btn-light btn-block">
        {mode === 'fx' ? 'Request firm quote' : mode === 'swap' ? 'Swap assets' : 'Bridge asset'}
      </a>
      <p className="disclaimer center">Demo only. Rates are illustrative.</p>
    </div>
  )
}

const features = [
  {
    icon: 'globe',
    title: 'OnchainFX',
    text: 'An institutional-grade FX engine for stablecoins. Request firm quotes from vetted liquidity providers and settle atomically, payment-versus-payment, 24/7/365.',
    points: ['RFQ with firm, executable pricing', 'Atomic PvP settlement, no counterparty risk', 'USD, EUR, GBP, NGN, SGD, JPY and more'],
  },
  {
    icon: 'repeat',
    title: 'RWA Swaps',
    text: 'Swap directly between tokenized treasuries, bonds, stocks, MMFs and stablecoins at NAV, without off-ramping or waiting for T+2.',
    points: ['Instant rebalancing between asset classes', 'Eligibility checks enforced onchain'],
  },
  {
    icon: 'network',
    title: 'RWA Bridges',
    text: 'Move regulated assets across chains while keeping transfer restrictions, ownership records and corporate actions intact.',
    points: ['Burn-and-mint, no wrapped IOUs', 'Single source of truth for cap tables'],
  },
]

export default function Markets() {
  return (
    <section className="section section-deep" id="markets">
      <div className="deep-glow" aria-hidden="true" />
      <div className="container">
        <SectionHead
          index="02"
          label="Liquidity & FX"
          title={<>Convert, swap and bridge, <span className="serif">atomically.</span></>}
        >
          Real-world assets shouldn&apos;t be stuck on one chain or in one currency. Move value between
          asset classes, currencies and networks in a single transaction.
        </SectionHead>
      </div>
      <div className="container markets">
        <div className="markets-copy">
          <div className="market-features">
            {features.map((f, i) => (
              <div className="market-feature" key={f.title} data-reveal style={{ '--d': `${i * 0.1}s` }}>
                <span className="market-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p className="dim">{f.text}</p>
                  <ul className="check-list">
                    {f.points.map((p) => (
                      <li key={p}><Icon name="check" size={16} /> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal className="widget-wrap">
          <Widget />
        </div>
      </div>
    </section>
  )
}
