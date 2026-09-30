import React from 'react';
export function Input({ label, placeholder, value, onChange, type = 'text', disabled = false }) {
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-3)' } }, label) : null,
    React.createElement('input', {
      type, placeholder, value, disabled,
      onChange: e => onChange && onChange(e.target.value),
      style: { fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--fg-1)', background: 'var(--surface)',
        border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', outline: 'none',
        opacity: disabled ? 0.5 : 1 },
      onFocus: e => e.target.style.borderColor = 'var(--fg-1)',
      onBlur: e => e.target.style.borderColor = 'var(--border)',
    }));
}