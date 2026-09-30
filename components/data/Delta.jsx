import React from 'react';
export function Delta({ value, direction = 'up', ink = false }) {
  const map = {
    up: { glyph: '▲', color: ink ? 'var(--positive-ink)' : 'var(--positive)' },
    down: { glyph: '▼', color: 'var(--negative)' },
    hold: { glyph: '', color: 'var(--hold)' },
  };
  const d = map[direction];
  return React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', color: d.color } },
    d.glyph ? d.glyph + ' ' : '', direction === 'hold' ? 'HOLD' : value);
}