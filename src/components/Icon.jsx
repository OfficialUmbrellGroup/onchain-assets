const paths = {
  coin: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3 6.5c-.4-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.6-.5-3-1.5M12 6.5v11',
  landmark: 'M3 21h18M5 21V10m4 11V10m6 11V10m4 11V10M2 10l10-6 10 6H2Z',
  scroll: 'M8 3h10a2 2 0 0 1 2 2v12M8 3a2 2 0 0 0-2 2v14a2 2 0 0 1-2 2h12a2 2 0 0 0 2-2V5M10 8h6m-6 4h6m-6 4h3',
  chart: 'M3 3v18h18M7 15l4-4 3 3 6-7',
  wallet: 'M3 7a2 2 0 0 1 2-2h13v4M3 7v10a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2Zm14 7h.01',
  vault: 'M4 4h16v14H4zM8 21v-3m8 3v-3M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0V6m0 8v2',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  gem: 'M6 3h12l4 6-10 12L2 9l4-6Zm-4 6h20M12 21 8 9l4-6 4 6-4 12',
  briefcase: 'M4 7h16v13H4zM9 7V4h6v3M4 13h16',
  building: 'M5 21V4h10v17M15 9h4v12M3 21h18M8 8h4m-4 4h4m-4 4h4',
  zap: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  swap: 'M7 4 3 8l4 4M3 8h14m0 12 4-4-4-4m4 4H7',
  repeat: 'm17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z',
  network: 'M12 3v6m0 6v6M5 7l5 3m4 4 5 3M19 7l-5 3m-4 4-5 3M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  pie: 'M21 12A9 9 0 1 1 12 3v9h9Zm-4.5-9.3A9 9 0 0 1 21.3 7.5H16.5V2.7Z',
  bot: 'M5 9h14v10H5zM12 5V3M9 13h.01M15 13h.01M9 16h6M2 13v2m20-2v2',
  card: 'M3 5h18v14H3zM3 10h18M7 15h4',
  shield: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4',
  cart: 'M3 4h2l2.5 11h11L21 7H6.2M9 20h.01M18 20h.01',
  key: 'M15 7a4 4 0 1 1-3.9 4.9L3 20v-3h3v-3h3l2.1-2.1A4 4 0 0 1 15 7Zm1 2h.01',
  trend: 'M3 17 9 11l4 4 8-8m0 0h-5m5 0v5',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  arrowDown: 'M12 5v14m-6-6 6 6 6-6',
  check: 'M5 12l5 5L20 7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
