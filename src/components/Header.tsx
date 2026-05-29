import React from 'react';
import appIcon from '../assets/app-icon.png';

const Header: React.FC = () => {
  return (
    <header style={{
      padding: '1rem 0',
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
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={appIcon} alt="Business Ledger Logo" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="gold-text">
            Business Ledger
          </span>
        </div>
        
        <nav>
          <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, alignItems: 'center' }}>
            <li><a href="#features" style={{ color: 'var(--text-light)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Features</a></li>
            <li><a href="#how-it-works" style={{ color: 'var(--text-light)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>How It Works</a></li>
            <li><a href="#download" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '0.5rem' }}>Download</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
