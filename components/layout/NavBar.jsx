import React from 'react';
import { Button } from '../core/Button.jsx';
export function NavBar({ links = ['Point of view', 'Work', 'Approach', 'About'], cta = 'Start a conversation', ink = false, logoSrc = '../../assets/logo-mark.png' }) {
  const fg = ink ? 'var(--ink-fg-1)' : 'var(--fg-1)';
  return React.createElement('header', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px', borderBottom: '1px solid ' + (ink ? 'var(--ink-border)' : 'var(--border)') } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
      React.createElement('img', { src: logoSrc, style: { width: 34, height: 34 } }),
      React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 18, color: fg } }, 'Intentional')),
    React.createElement('nav', { style: { display: 'flex', alignItems: 'center', gap: 32 } },
      links.map(l => React.createElement('a', { key: l, href: '#', style: { fontFamily: 'var(--font-body)', fontSize: 15, color: fg, textDecoration: 'none' } }, l)),
      React.createElement(Button, { variant: 'primary', size: 'sm' }, cta)));
}