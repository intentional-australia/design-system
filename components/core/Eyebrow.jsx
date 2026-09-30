import React from 'react';
export function Eyebrow({ red = true, ink = false, children }) {
  return React.createElement('span', { style: {
    fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: red ? 'var(--accent)' : (ink ? 'var(--ink-fg-2)' : 'var(--fg-3)') } }, children);
}