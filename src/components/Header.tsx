import React from 'react';
import appIcon from '../assets/app-icon.png';

const Header: React.FC = () => {
  return (
    <header style={{
      padding: '0.75rem 0',
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={appIcon} alt="Business Ledger Logo" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }} className="gold-text">
            Business Ledger
          </span>
        </div>
        
        <nav className="header-nav">
          <ul style={{ display: 'flex', gap: '1.25rem', fontWeight: 600, alignItems: 'center', fontSize: '0.9rem' }}>
            <li className="nav-link-desktop"><a href="#features" style={{ color: 'var(--text-light)' }}>Features</a></li>
            <li><a href="#download" className="btn btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.85rem', width: 'auto', marginBottom: 0 }}>Download</a></li>
          </ul>
        </nav>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .nav-link-desktop { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
