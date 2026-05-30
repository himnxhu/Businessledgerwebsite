import React from 'react';
import { Globe, Mail, Share2, MessageSquare } from 'lucide-react';
import appIcon from '../assets/app-icon.png';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--background)', color: 'var(--text-light)', padding: '6rem 0 3rem', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '4rem',
          marginBottom: '4rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text)', marginBottom: '2rem' }}>
              <img src={appIcon} alt="Business Ledger Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }} className="gold-text">Business Ledger</span>
            </div>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              Empowering small businesses with gold-standard financial tools since 2024.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--text)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 700 }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>About Us</a></li>
              <li><a href="#features" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Features</a></li>
              <li><a href="#how-it-works" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>How It Works</a></li>
              <li><a href="#download" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--text)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 700 }}>Support</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Help Center</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Terms of Service</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Privacy Policy</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}>Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--text)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 700 }}>Social</h4>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}><Globe size={24} /></a>
              <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}><Mail size={24} /></a>
              <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}><Share2 size={24} /></a>
              <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-light)'}><MessageSquare size={24} /></a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid var(--border)', 
          paddingTop: '3rem', 
          textAlign: 'center',
          fontSize: '1rem',
          color: 'var(--text-dim)'
        }}>
          <p>&copy; {new Date().getFullYear()} Business Ledger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
