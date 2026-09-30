import React from 'react';
export function Select({ label, options = [], value, onChange, placeholder = 'Select…' }) {
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-3)' } }, label) : null,
    React.createElement('select', {
      value: value ?? '', onChange: e => onChange && onChange(e.target.value),
      style: { fontFamily: 'var(--font-body)', fontSize: 15, color: value ? 'var(--fg-1)' : 'var(--fg-3)',
        background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
        padding: '12px 14px', outline: 'none', appearance: 'none',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%278%27%3E%3Cpath d=%27M1 1l5 5 5-5%27 stroke=%27%2377736A%27 fill=%27none%27/%3E%3C/svg%3E")',
        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' },
    },
      React.createElement('option', { value: '', disabled: true }, placeholder),
      options.map(o => React.createElement('option', { key: o, value: o }, o))));
}