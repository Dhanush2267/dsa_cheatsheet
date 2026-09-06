import React from 'react';
import { Menu } from 'lucide-react';

export default function Header({ onMenuOpen }) {
  return (
    <header className="app-header">
      <div className="header-left">
        {/* Hamburger — mobile only (hidden on desktop via CSS) */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onMenuOpen}
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>

        <div className="logo-group">
          <h1 className="logo-title">DSA REVISION</h1>
          <span className="logo-subtitle">Think. Trace. Optimize. Repeat.</span>
        </div>
      </div>

      <div className="header-right">
        <div className="quick-badge">For Quick Revision Only</div>
      </div>
    </header>
  );
}
