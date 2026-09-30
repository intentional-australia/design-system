import React from 'react';
export function SectionHeader({ number, title, note, ink = false }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 16, borderTop: '1px solid ' + (ink ? 'var(--ink-border)' : 'var(--border)'), paddingTop: 24 } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 20 } },
      number ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)' } }, number) : null,
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0, color: ink ? 'var(--ink-fg-1)' : 'var(--fg-1)' } }, title)),
    note ? React.createElement('span', { style: { fontFamily: 'var(--font-editorial)', fontStyle: 'italic', fontSize: 18, color: ink ? 'var(--ink-fg-2)' : 'var(--fg-2)' } }, note) : null);
}