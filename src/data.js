export const megaMenu = [
  {
    label: 'Platform',
    type: 'columns',
    columns: [
      {
        groups: [
          {
            title: 'Digital Assets',
            items: [
              { icon: 'coin', label: 'Digital Currencies', desc: 'Fully reserved oUSD, oEUR, oGBP, oNGN', href: '#assets' },
              { icon: 'landmark', label: 'Treasuries', desc: 'Sovereign bills, per country', href: '#assets' },
              { icon: 'scroll', label: 'Bonds', desc: 'Government & corporate debt', href: '#assets' },
              { icon: 'chart', label: 'Stocks & ETFs', desc: 'Tokenized global equities', href: '#assets' },
              { icon: 'wallet', label: 'Money Market Funds', desc: 'Onchain institutional cash', href: '#assets' },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: 'Strategies',
            items: [
              { icon: 'vault', label: 'Vaults', desc: 'Composable RWA yield strategies', href: '#assets' },
              { icon: 'layers', label: 'Portfolio Tokens', desc: 'Curated baskets in one token', href: '#assets' },
              { icon: 'gem', label: 'Commodities & Credit', desc: 'Gold, private credit, real estate', href: '#assets' },
            ],
          },
          {
            title: 'Markets',
            items: [
              { icon: 'globe', label: 'OnchainFX', desc: '24/7 institutional stablecoin FX', href: '#markets', badge: 'New' },
              { icon: 'repeat', label: 'RWA Swaps & Bridges', desc: 'Move RWAs across assets and chains', href: '#markets', badge: 'New' },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: 'Wallets & Accounts',
            items: [
              { icon: 'key', label: 'Wallet as a Service', desc: 'Embedded MPC wallets for any app', href: '#infrastructure' },
              { icon: 'bot', label: 'Agentic Wallets', desc: 'Guardrailed wallets for AI agents', href: '#infrastructure' },
              { icon: 'network', label: 'Omnichain Balances', desc: 'One balance, every chain', href: '#infrastructure' },
              { icon: 'zap', label: 'Gasless Transactions', desc: 'Sponsor fees with paymasters', href: '#infrastructure' },
            ],
          },
        ],
      },
      {
        groups: [
          {
            title: 'Payments & Compliance',
            items: [
              { icon: 'cart', label: 'Checkout', desc: 'Accept stablecoins from any chain', href: '#infrastructure' },
              { icon: 'card', label: 'Cards', desc: 'Spend from onchain balances', href: '#infrastructure' },
              { icon: 'pie', label: 'Treasury Management', desc: 'Policy-driven cash & yield', href: '#infrastructure' },
              { icon: 'shield', label: 'Real-time AML', desc: 'Pre-settlement screening', href: '#infrastructure' },
              { icon: 'trend', label: 'Yield APIs', desc: 'RWA yield in one API call', href: '#infrastructure' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    type: 'solutions',
    groups: [
      {
        title: 'By use case',
        items: ['Treasury Management', 'Cross-border Payments', 'Onchain FX', 'Tokenized Collateral', 'Yield Accounts', 'Agentic Commerce', 'Trading Services'],
      },
      {
        title: 'By industry',
        items: ['Banks', 'Brokerages', 'Fintechs', 'Asset Managers', 'Payment Providers', 'Protocols'],
      },
    ],
    feature: {
      eyebrow: 'Case study',
      title: 'How a Lagos fintech launched dollar yield accounts in three weeks',
      href: '#institutions',
    },
  },
  {
    label: 'Developers',
    type: 'list',
    items: [
      { icon: 'scroll', label: 'Documentation', desc: 'Guides and quickstarts', href: '#developers' },
      { icon: 'layers', label: 'API Reference', desc: 'REST endpoints and webhooks', href: '#developers' },
      { icon: 'key', label: 'SDKs', desc: 'TypeScript, Python, Go', href: '#developers' },
      { icon: 'zap', label: 'Sandbox', desc: 'Test RWAs on every chain', href: '#developers' },
    ],
  },
  { label: 'Institutions', href: '#institutions' },
  { label: 'Transparency', href: '#issuance' },
]

export const stats = [
  { value: '$4.2B+', label: 'Assets issued via FDX Securities' },
  { value: '60+', label: 'Tokenized instruments' },
  { value: '24', label: 'Supported chains' },
  { value: '35', label: 'Countries of sovereign debt' },
]

export const tickerItems = [
  { symbol: 'oUSTB', name: 'US Treasury Bills', change: '+5.12% APY' },
  { symbol: 'oUSD', name: 'Digital Dollar', change: '1.0000' },
  { symbol: 'oGILT', name: 'UK Gilts 10Y', change: '+4.41% YTM' },
  { symbol: 'oNGTB', name: 'Nigeria T-Bills', change: '+21.4% APY' },
  { symbol: 'oNVDA', name: 'NVIDIA Corp.', change: '+2.31%' },
  { symbol: 'oMMF', name: 'USD Money Market', change: '+4.98% APY' },
  { symbol: 'oXAU', name: 'Tokenized Gold', change: '+0.84%' },
  { symbol: 'oBUND', name: 'German Bunds 10Y', change: '+2.62% YTM' },
  { symbol: 'oEUR', name: 'Digital Euro', change: '1.0000' },
  { symbol: 'PRIME', name: 'Prime Treasury Vault', change: '+6.80% APY' },
]

export const assetCategories = [
  {
    id: 'currencies',
    name: 'Digital Currencies',
    icon: 'coin',
    tagline: 'Fully reserved, regulated fiat tokens',
    description:
      'Fiat-backed digital currencies held 1:1 in segregated reserves at regulated custodians, attested monthly and redeemable on demand by institutions.',
    columns: ['Asset', 'Region', 'Backing', 'Chains'],
    items: [
      { symbol: 'oUSD', name: 'Digital US Dollar', region: 'US', metric: '1:1 Cash & T-Bills', chains: 18 },
      { symbol: 'oEUR', name: 'Digital Euro', region: 'EU', metric: '1:1 Cash (MiCA)', chains: 14 },
      { symbol: 'oGBP', name: 'Digital Pound', region: 'UK', metric: '1:1 Cash & Gilts', chains: 9 },
      { symbol: 'oNGN', name: 'Digital Naira', region: 'NG', metric: '1:1 Cash', chains: 7 },
      { symbol: 'oSGD', name: 'Digital Singapore Dollar', region: 'SG', metric: '1:1 Cash (MAS)', chains: 6 },
      { symbol: 'oJPY', name: 'Digital Yen', region: 'JP', metric: '1:1 Cash', chains: 5 },
    ],
  },
  {
    id: 'treasuries',
    name: 'Treasuries',
    icon: 'landmark',
    tagline: 'Short-dated sovereign bills, per country',
    description:
      'Tokenized short-term government bills. Each token maps to a bankruptcy-remote SPV holding the underlying bills, with daily NAV and accrued yield onchain.',
    columns: ['Asset', 'Country', 'Yield (APY)', 'Chains'],
    items: [
      { symbol: 'oUSTB', name: 'US Treasury Bills 0–3M', region: 'US', metric: '5.12%', chains: 16 },
      { symbol: 'oUKTB', name: 'UK Treasury Bills', region: 'UK', metric: '4.86%', chains: 8 },
      { symbol: 'oEUTB', name: 'Euro Area Bills Basket', region: 'EU', metric: '3.41%', chains: 8 },
      { symbol: 'oNGTB', name: 'Nigeria T-Bills 364D', region: 'NG', metric: '21.40%', chains: 5 },
      { symbol: 'oSGTB', name: 'Singapore T-Bills 6M', region: 'SG', metric: '3.62%', chains: 6 },
      { symbol: 'oCATB', name: 'Canada T-Bills 3M', region: 'CA', metric: '4.18%', chains: 6 },
    ],
  },
  {
    id: 'bonds',
    name: 'Bonds',
    icon: 'scroll',
    tagline: 'Sovereign & corporate debt, per country',
    description:
      'Longer-duration government and investment-grade corporate bonds, tokenized with coupon distribution automated directly to holder wallets.',
    columns: ['Asset', 'Country', 'Yield (YTM)', 'Chains'],
    items: [
      { symbol: 'oUST10', name: 'US Treasury Note 10Y', region: 'US', metric: '4.38%', chains: 12 },
      { symbol: 'oGILT', name: 'UK Gilt 10Y', region: 'UK', metric: '4.41%', chains: 7 },
      { symbol: 'oBUND', name: 'German Bund 10Y', region: 'DE', metric: '2.62%', chains: 7 },
      { symbol: 'oFGN', name: 'Nigeria FGN Bond 2034', region: 'NG', metric: '18.75%', chains: 4 },
      { symbol: 'oJGB', name: 'Japan Gov. Bond 10Y', region: 'JP', metric: '1.05%', chains: 5 },
      { symbol: 'oIGC', name: 'US IG Corporate Basket', region: 'US', metric: '5.34%', chains: 9 },
    ],
  },
  {
    id: 'stocks',
    name: 'Stocks',
    icon: 'chart',
    tagline: 'Tokenized global equities & ETFs',
    description:
      '1:1 backed tokenized shares of listed companies and ETFs. Trade 24/7, settle instantly, and receive dividends onchain.',
    columns: ['Asset', 'Exchange', '24h', 'Chains'],
    items: [
      { symbol: 'oAAPL', name: 'Apple Inc.', region: 'US', metric: '+1.12%', chains: 10 },
      { symbol: 'oNVDA', name: 'NVIDIA Corp.', region: 'US', metric: '+2.31%', chains: 10 },
      { symbol: 'oMSFT', name: 'Microsoft Corp.', region: 'US', metric: '+0.64%', chains: 10 },
      { symbol: 'oSPY', name: 'S&P 500 ETF', region: 'US', metric: '+0.48%', chains: 12 },
      { symbol: 'oASML', name: 'ASML Holding', region: 'NL', metric: '-0.37%', chains: 6 },
      { symbol: 'oMTNN', name: 'MTN Nigeria', region: 'NG', metric: '+1.90%', chains: 4 },
    ],
  },
  {
    id: 'mmf',
    name: 'Money Market Funds',
    icon: 'wallet',
    tagline: 'Institutional cash management, onchain',
    description:
      'Government money market fund shares with daily dividend accrual. Use as yield-bearing collateral or idle treasury cash that settles in seconds.',
    columns: ['Asset', 'Currency', 'Yield (7D)', 'Chains'],
    items: [
      { symbol: 'oMMF', name: 'USD Government MMF', region: 'US', metric: '4.98%', chains: 14 },
      { symbol: 'oMMFE', name: 'EUR Liquidity Fund', region: 'EU', metric: '3.29%', chains: 8 },
      { symbol: 'oMMFG', name: 'GBP Liquidity Fund', region: 'UK', metric: '4.72%', chains: 6 },
      { symbol: 'oMMFS', name: 'SGD Cash Fund', region: 'SG', metric: '3.44%', chains: 4 },
    ],
  },
  {
    id: 'vaults',
    name: 'Vaults',
    icon: 'vault',
    tagline: 'Composable RWA yield strategies',
    description:
      'Deposit stablecoins and receive a vault token backed by a managed basket of RWAs. Strategies are transparent, permissioned at the asset level and composable across DeFi.',
    columns: ['Vault', 'Strategy', 'Target APY', 'Chains'],
    items: [
      { symbol: 'PRIME', name: 'Prime Treasury Vault', region: 'Treasuries', metric: '5.0–6.8%', chains: 8 },
      { symbol: 'CREDIT', name: 'Institutional Credit Vault', region: 'Private credit', metric: '9–12%', chains: 6 },
      { symbol: 'GLOBAL', name: 'Global Sovereign Yield', region: 'Multi-country bills', metric: '7–10%', chains: 6 },
      { symbol: 'BASIS', name: 'Stable Basis Vault', region: 'Delta-neutral', metric: '8–14%', chains: 5 },
      { symbol: 'EMHY', name: 'Emerging Markets Yield', region: 'EM sovereign', metric: '12–18%', chains: 4 },
    ],
  },
  {
    id: 'portfolios',
    name: 'Portfolio Tokens',
    icon: 'layers',
    tagline: 'Curated, rebalanced baskets in one token',
    description:
      'Professionally curated investment portfolios wrapped into a single token with rules-based rebalancing, transparent holdings and one-click exposure.',
    columns: ['Token', 'Mandate', '1Y Return', 'Chains'],
    items: [
      { symbol: 'o6040', name: 'Global 60/40', region: 'Equities + bonds', metric: '+12.4%', chains: 8 },
      { symbol: 'oALLW', name: 'All-Weather', region: 'Risk parity', metric: '+9.1%', chains: 6 },
      { symbol: 'oAI10', name: 'AI Leaders 10', region: 'Thematic equity', metric: '+38.2%', chains: 6 },
      { symbol: 'oEMY', name: 'EM Income', region: 'EM bonds + bills', metric: '+16.7%', chains: 4 },
      { symbol: 'oDIGI', name: 'Digital Assets Blue-chip', region: 'BTC / ETH / SOL', metric: '+44.0%', chains: 7 },
    ],
  },
  {
    id: 'commodities',
    name: 'Commodities',
    icon: 'gem',
    isNew: true,
    tagline: 'Vaulted metals & energy exposure',
    description:
      'Allocated, audited physical commodities held in LBMA-accredited vaults. Redeemable for physical delivery by eligible institutions.',
    columns: ['Asset', 'Underlying', '24h', 'Chains'],
    items: [
      { symbol: 'oXAU', name: 'Tokenized Gold', region: '1 troy oz', metric: '+0.84%', chains: 10 },
      { symbol: 'oXAG', name: 'Tokenized Silver', region: '1 troy oz', metric: '+1.21%', chains: 6 },
      { symbol: 'oXPT', name: 'Tokenized Platinum', region: '1 troy oz', metric: '-0.42%', chains: 4 },
      { symbol: 'oBRNT', name: 'Brent Crude Tracker', region: 'Front-month', metric: '+0.65%', chains: 4 },
    ],
  },
  {
    id: 'credit',
    name: 'Private Credit',
    icon: 'briefcase',
    isNew: true,
    tagline: 'Senior secured lending, tokenized',
    description:
      'Access to diversified senior secured loan pools: trade finance, SME lending and receivables, with onchain reporting on performance and defaults.',
    columns: ['Pool', 'Sector', 'Net APY', 'Chains'],
    items: [
      { symbol: 'oTRADE', name: 'Trade Finance Pool', region: 'Global trade', metric: '11.2%', chains: 5 },
      { symbol: 'oSME', name: 'SME Lending Pool', region: 'Africa & LatAm', metric: '14.6%', chains: 4 },
      { symbol: 'oRCV', name: 'Fintech Receivables', region: 'Consumer credit', metric: '10.4%', chains: 4 },
    ],
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: 'building',
    isNew: true,
    tagline: 'Fractional income-generating property',
    description:
      'Fractional ownership of income-generating commercial and residential property with rental yield distributed onchain.',
    columns: ['Asset', 'Market', 'Rental yield', 'Chains'],
    items: [
      { symbol: 'oLDN', name: 'London Prime Residential', region: 'UK', metric: '4.9%', chains: 4 },
      { symbol: 'oDXB', name: 'Dubai Commercial REIT', region: 'AE', metric: '7.2%', chains: 4 },
      { symbol: 'oLAG', name: 'Lagos Grade-A Offices', region: 'NG', metric: '9.8%', chains: 3 },
    ],
  },
]

export const services = [
  {
    icon: 'zap',
    title: 'Gasless Transactions',
    description: 'Sponsor fees with paymasters so users transact without holding native gas tokens on any chain.',
  },
  {
    icon: 'swap',
    title: 'Swaps & Bridges',
    description: 'Best-execution routing across DEXs, RFQ makers and bridges for crypto and stablecoins.',
  },
  {
    icon: 'repeat',
    title: 'RWA Swaps & Bridges',
    description: 'Atomically swap tokenized treasuries, bonds and stocks, and move them cross-chain with compliance preserved.',
    highlight: true,
  },
  {
    icon: 'globe',
    title: 'OnchainFX',
    description: 'Institutional FX engine for stablecoins: RFQ quotes, firm pricing and atomic PvP settlement, 24/7.',
    highlight: true,
  },
  {
    icon: 'network',
    title: 'Omnichain & Multi-asset',
    description: 'Hold, transfer and interact with stablecoins on any chain from one unified balance and address.',
  },
  {
    icon: 'pie',
    title: 'Treasury Management',
    description: 'Policy-driven sweeps into treasuries and MMFs, multi-sig approvals and real-time cash positioning.',
  },
  {
    icon: 'bot',
    title: 'Agentic Wallets',
    description: 'Programmable wallets for AI agents with spend limits, allowlists and human-in-the-loop controls.',
  },
  {
    icon: 'card',
    title: 'Cards',
    description: 'Issue virtual and physical cards that spend directly from stablecoin and yield-bearing balances.',
  },
  {
    icon: 'shield',
    title: 'Real-time AML Screening',
    description: 'Screen every wallet and transaction pre-settlement against sanctions lists and risk heuristics.',
  },
  {
    icon: 'cart',
    title: 'Checkout Infrastructure',
    description: 'Accept stablecoins from any chain and settle in your currency of choice, with hosted or embedded checkout.',
  },
  {
    icon: 'key',
    title: 'Wallet as a Service',
    description: 'Embedded, MPC-secured wallets with passkeys and social login, white-labelled for your users.',
  },
  {
    icon: 'trend',
    title: 'Yield APIs',
    description: 'Plug RWA yield into any product: treasuries, MMFs and vaults with a single API call.',
  },
]

export const fxPairs = {
  oUSD: { oEUR: 0.9187, oGBP: 0.7842, oNGN: 1538.4, oSGD: 1.3421, oJPY: 149.82 },
}

export const fxCurrencies = ['oUSD', 'oEUR', 'oGBP', 'oNGN', 'oSGD', 'oJPY']

export const rwaAssets = [
  { symbol: 'oUSTB', price: 1.0512 },
  { symbol: 'oMMF', price: 1.0 },
  { symbol: 'oGILT', price: 1.2731 },
  { symbol: 'oSPY', price: 571.42 },
  { symbol: 'oXAU', price: 2648.1 },
  { symbol: 'PRIME', price: 1.0874 },
  { symbol: 'oUSD', price: 1.0 },
]

export const chains = [
  'Ethereum', 'Base', 'Arbitrum', 'Optimism', 'Polygon', 'Solana',
  'Avalanche', 'BNB Chain', 'Stellar', 'Plume', 'Sui', 'Tron',
]

export const issuanceSteps = [
  {
    step: '01',
    title: 'Structured & issued by FDX Securities',
    description:
      'Every asset is originated by FDX Securities, our licensed issuer, with bankruptcy-remote SPVs and qualified custodians holding the underlying.',
  },
  {
    step: '02',
    title: 'Tokenized with built-in compliance',
    description:
      'Transfer restrictions, investor eligibility and jurisdiction rules are enforced at the token level, so assets stay compliant across every chain.',
  },
  {
    step: '03',
    title: 'Distributed through your product',
    description:
      'Integrate via APIs and SDKs. Your users subscribe, redeem, swap and earn while settlement, reporting and corporate actions run automatically.',
  },
]

export const codeSamples = {
  subscribe: {
    label: 'Subscribe to treasuries',
    code: `import { OnchainAssets } from '@onchain-assets/sdk'

const oa = new OnchainAssets({ apiKey: process.env.OA_KEY })

// Mint US T-Bill tokens with oUSD, gasless on Base
const order = await oa.assets.subscribe({
  asset: 'oUSTB',
  amount: '250000',
  payWith: 'oUSD',
  chain: 'base',
  gasless: true,
})

console.log(order.status) // "settled"`,
  },
  fx: {
    label: 'OnchainFX quote',
    code: `// Firm RFQ quote, settled atomically (PvP)
const quote = await oa.fx.quote({
  sell: { asset: 'oUSD', amount: '1000000' },
  buy: 'oEUR',
  chain: 'ethereum',
})

// Quote is firm for 30 seconds
const trade = await oa.fx.execute(quote.id)

console.log(trade.rate, trade.settledAt)`,
  },
  rwa: {
    label: 'Bridge an RWA',
    code: `// Move tokenized gilts cross-chain, compliance intact
const transfer = await oa.rwa.bridge({
  asset: 'oGILT',
  amount: '50000',
  from: 'ethereum',
  to: 'plume',
  recipient: '0xA11ce...',
})

// AML screening runs automatically before settlement
await transfer.wait()`,
  },
  agent: {
    label: 'Agentic wallet',
    code: `// Give an AI agent a wallet with guardrails
const wallet = await oa.wallets.create({
  type: 'agent',
  policy: {
    dailyLimit: { asset: 'oUSD', amount: '5000' },
    allowlist: ['checkout.merchant.com'],
    requireApprovalAbove: '1000',
  },
})

await wallet.pay({ to: 'merchant_92x', amount: '42.50' })`,
  },
}

export const audiences = [
  {
    title: 'Banks & Brokerages',
    description: 'Offer tokenized treasuries, bonds and stocks to clients without building issuance or custody.',
    points: ['White-label distribution', 'Regulated issuer of record', 'Custody integrations'],
  },
  {
    title: 'Fintechs & Neobanks',
    description: 'Launch yield accounts, cards and cross-border payments on top of RWA-backed balances.',
    points: ['Yield APIs', 'Cards & checkout', 'OnchainFX for remittances'],
  },
  {
    title: 'Asset Managers',
    description: 'Tokenize funds, curate portfolio tokens and reach onchain liquidity across every major chain.',
    points: ['Fund tokenization', 'Portfolio tokens', 'Vault strategies'],
  },
  {
    title: 'Developers & Protocols',
    description: 'Compose RWAs as collateral, build agentic finance and ship wallets in days, not months.',
    points: ['SDKs & webhooks', 'Agentic wallets', 'Omnichain balances'],
  },
]

export const compliance = [
  { title: 'Licensed issuer', description: 'All assets issued by FDX Securities under applicable securities regulation.' },
  { title: 'Bankruptcy-remote', description: 'Underlying assets held in segregated SPVs with qualified custodians.' },
  { title: 'Proof of reserves', description: 'Onchain NAV feeds and independent monthly attestations.' },
  { title: 'Real-time AML', description: 'Every transfer screened pre-settlement; Travel Rule ready.' },
]
