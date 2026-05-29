import React from 'react';
import { Globe, Mail, Share2, MessageSquare } from 'lucide-react';
import appIcon from '../assets/app-icon.png';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ffffff', marginBottom: '1.5rem' }}>
              <img src={appIcon} alt="Business Ledger Logo" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Business Ledger</span>
            </div>
            <p style={{ lineHeight: '1.6' }}>
              Empowering small businesses with smart financial tools since 2024.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>Support</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1.5rem' }}>Social</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#94a3b8' }}><Globe size={20} /></a>
              <a href="#" style={{ color: '#94a3b8' }}><Mail size={20} /></a>
              <a href="#" style={{ color: '#94a3b8' }}><Share2 size={20} /></a>
              <a href="#" style={{ color: '#94a3b8' }}><MessageSquare size={20} /></a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #1e293b', 
          paddingTop: '2rem', 
          textAlign: 'center',
          fontSize: '0.875rem'
        }}>
          <p>&copy; {new Date().getFullYear()} Business Ledger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
