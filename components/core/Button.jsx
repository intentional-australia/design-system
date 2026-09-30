import React from 'react';
export function Button({ variant = 'primary', size = 'md', ink = false, disabled = false, arrow = false, children, onClick }) {
  const pad = { sm: '8px 16px', md: '12px 24px', lg: '14px 28px' }[size];
  const fs = { sm: 13, md: 15, lg: 15 }[size];
  const base = {
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: fs, letterSpacing: '0.01em',
    padding: pad, borderRadius: 'var(--radius-sm)', border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
    display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
    transition: 'all var(--duration-default) var(--ease-out)', background: 'transparent',
  };
  const variants = {
    primary: { background: 'var(--accent)', color: '#EDEBE5' },
    secondary: ink
      ? { color: 'var(--ink-fg-1)', borderColor: 'var(--ink-border)' }
      : { color: 'var(--fg-1)', borderColor: 'var(--border)' },
    ghost: { color: ink ? 'var(--ink-fg-1)' : 'var(--fg-1)', padding: '4px 0', borderRadius: 0,
             borderBottom: '1px solid ' + (ink ? 'var(--ink-border)' : 'var(--border)') },
  };
  return React.createElement('button', {
    style: { ...base, ...variants[variant] }, disabled, onClick,
    onMouseEnter: e => { if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-hover)'; else e.currentTarget.style.opacity = 0.7; },
    onMouseLeave: e => { if (variant === 'primary') e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.opacity = disabled ? 0.4 : 1; },
  }, children, arrow ? '→' : null);
}