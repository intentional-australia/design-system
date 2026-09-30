import React from 'react';
export function Badge({ tone = 'neutral', ink = false, children }) {
  const tones = {
    neutral: { color: ink ? 'var(--ink-fg-2)' : 'var(--fg-2)', borderColor: ink ? 'var(--ink-border)' : 'var(--border)' },
    red: { color: 'var(--accent)', borderColor: 'rgba(212,39,28,0.4)' },
    positive: { color: ink ? 'var(--positive-ink)' : 'var(--positive)', borderColor: ink ? 'rgba(46,153,88,0.4)' : 'rgba(46,83,57,0.35)' },
    negative: { color: 'var(--negative)', borderColor: 'rgba(180,35,26,0.35)' },
  };
  return React.createElement('span', { style: {
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
    border: '1px solid', borderRadius: 'var(--radius-pill)', padding: '5px 12px',
    display: 'inline-flex', alignItems: 'center', gap: 6, ...tones[tone] } }, children);
}