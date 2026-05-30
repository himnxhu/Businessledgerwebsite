import React from 'react';
import appIcon from '../assets/app-icon.png';

const Header: React.FC = () => {
  return (
    <header className="glass" style={{
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={appIcon} alt="Business Ledger Logo" style={{ width: '40px', height: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }} className="gold-text">
            Business Ledger
          </span>
        </div>
        
        <nav className="header-nav">
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: 600, alignItems: 'center', fontSize: '1rem' }}>
            <li className="nav-link-desktop"><a href="#features" style={{ color: 'var(--text-light)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Features</a></li>
            <li><a href="#download" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: '0.75rem', fontSize: '0.9rem' }}>Download</a></li>
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
