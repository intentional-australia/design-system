import React from 'react';
import { Delta } from './Delta.jsx';
export function IndexTable({ columns = ['NO.', 'WORKSTREAM', 'OWNER', 'Δ QTR'], rows = [] }) {
  const grid = '44px 1fr auto 90px';
  return React.createElement('div', { style: { background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' } },
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: grid, gap: 16, padding: '14px 20px', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-3)' } },
      columns.map(c => React.createElement('span', { key: c }, c))),
    rows.map((r, i) => React.createElement('div', { key: i, style: { display: 'grid', gridTemplateColumns: grid, gap: 16, padding: '14px 20px', alignItems: 'center', borderBottom: i < rows.length - 1 ? '1px solid var(--border-subtle)' : 'none', fontFamily: 'var(--font-body)', fontSize: 14 } },
      React.createElement('span', { style: { fontFamily: 'var(--font-mono)', color: 'var(--accent)' } }, String(i + 1).padStart(2, '0')),
      React.createElement('span', null, r.name),
      React.createElement('span', { style: { color: 'var(--fg-3)' } }, r.owner),
      React.createElement(Delta, { value: r.delta, direction: r.direction || 'up' }))));
}