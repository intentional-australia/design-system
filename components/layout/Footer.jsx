import React from 'react';
export function Footer({ logoSrc = '../../assets/logo-mark.png' }) {
  const lbl = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-fg-2)' };
  const link = { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-fg-1)', textDecoration: 'none' };
  const col = (h, items) => React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
    React.createElement('span', { style: lbl }, h), items.map(i => React.createElement('a', { key: i, href: '#', style: link }, i)));
  return React.createElement('footer', { style: { background: 'var(--ink)', padding: '64px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48 } },
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 20 } },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12 } },
        React.createElement('img', { src: logoSrc, style: { width: 32, height: 32 } }),
        React.createElement('span', { style: { fontSize: 17, color: 'var(--ink-fg-1)', fontFamily: 'var(--font-body)' } }, 'Intentional')),
      React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink-fg-2)', maxWidth: '32ch', lineHeight: 1.5 } }, 'Commercial growth advisory and creative agency.')),
    col('Advisory', ['Growth strategy', 'Measurement', 'Creative strategy']),
    col('Firm', ['Point of view', 'Work', 'About']),
    col('Contact', ['Start a conversation', 'hello@intention.al']));
}