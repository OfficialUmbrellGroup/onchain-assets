import { useState } from 'react'
import Icon from './Icon'
import { assetCategories } from '../data'

export function SectionHead({ index, label, title, children, light = false }) {
  return (
    <div className={`section-head ${light ? 'is-light' : ''}`} data-reveal>
      <p className="label">
        <span className="label-index">{index}</span>
        {label}
      </p>
      <div className="section-head-row">
        <h2>{title}</h2>
        {children && <p className="section-lede">{children}</p>}
      </div>
    </div>
  )
}

export default function Assets() {
  const [activeId, setActiveId] = useState(assetCategories[0].id)
  const active = assetCategories.find((c) => c.id === activeId)

  return (
    <section className="section" id="assets">
      <div className="container">
        <SectionHead
          index="01"
          label="Asset universe"
          title={<>Every major asset class, <span className="serif">tokenized.</span></>}
        >
          Issued by FDX Securities and backed one-to-one by the underlying instrument. Per-country
          sovereign debt, global equities, cash equivalents and curated strategies through a single
          integration.
        </SectionHead>

        <div className="asset-explorer" data-reveal>
          <div className="asset-index" role="tablist" aria-orientation="vertical">
            {assetCategories.map((c, i) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={c.id === activeId}
                className={`asset-index-item ${c.id === activeId ? 'active' : ''}`}
                onClick={() => setActiveId(c.id)}
              >
                <span className="asset-index-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="asset-index-name">{c.name}</span>
                {c.isNew && <span className="menu-badge">New</span>}
                <Icon name="arrow" size={14} className="asset-index-arrow" />
              </button>
            ))}
          </div>

          <div className="asset-detail" role="tabpanel" key={active.id}>
            <div className="asset-detail-head">
              <div>
                <p className="mono-label">{active.tagline}</p>
                <h3>{active.name}</h3>
              </div>
              <span className="asset-detail-icon"><Icon name={active.icon} size={24} /></span>
            </div>
            <p className="asset-detail-desc">{active.description}</p>

            <div className="asset-table-wrap">
              <table className="asset-table">
                <thead>
                  <tr>
                    {active.columns.map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {active.items.map((item, i) => (
                    <tr key={item.symbol} style={{ '--i': i }}>
                      <td>
                        <div className="asset-cell">
                          <strong>{item.symbol}</strong>
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className={item.region.length <= 2 ? 'country' : 'dim'}>{item.region}</span>
                      </td>
                      <td className={`num ${item.metric.startsWith('-') ? 'neg' : 'pos'}`}>{item.metric}</td>
                      <td className="dim">{item.chains} chains</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="#developers" className="link-arrow">
              Integration guide <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
        <p className="disclaimer">
          Figures are illustrative. Availability depends on investor eligibility and jurisdiction.
        </p>
      </div>
    </section>
  )
}
