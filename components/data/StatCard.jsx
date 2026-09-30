import React from 'react';
import { Delta } from './Delta.jsx';
export function StatCard({ label, value, big = false, delta, deltaDirection = 'up', note, ink = false }) {
  return React.createElement('div', { style: {
    background: ink ? 'var(--ink-2)' : 'var(--surface)',
    border: '1px solid ' + (ink ? 'var(--ink-border)' : 'var(--border)'),
    borderRadius: 'var(--radius-sm)', padding: 24, display: 'flex', flexDirection: 'column', gap: 10,
    boxShadow: ink ? 'none' : 'var(--shadow-card)' } },
    React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: ink ? 'var(--ink-fg-2)' : 'var(--fg-3)' } }, label),
    React.createElement('span', { style: big
      ? { fontFamily: 'var(--font-numeral)', fontWeight: 700, fontSize: 64, lineHeight: 1, color: ink ? 'var(--ink-fg-1)' : 'var(--fg-1)' }
      : { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, lineHeight: 1, letterSpacing: '-0.02em', color: ink ? 'var(--ink-fg-1)' : 'var(--fg-1)' } }, value),
    delta ? React.createElement(Delta, { value: delta, direction: deltaDirection, ink }) : null,
    note ? React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 13, color: ink ? 'var(--ink-fg-2)' : 'var(--fg-3)' } }, note) : null);
}