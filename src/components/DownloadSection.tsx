import React from 'react';
import { Download, Smartphone } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="reveal" style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get <span className="gold-text">Business Ledger</span></h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
            Elevate your business management today.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Android App */}
          <div style={{ 
            background: 'var(--surface)', 
            padding: '3rem 2rem', 
            borderRadius: '1.5rem', 
            textAlign: 'center',
            border: '1px solid var(--border)',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
            <Smartphone size={56} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ marginBottom: '0.75rem' }}>Android App</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Download direct APK for Android</p>
            <a href="/Business_Ledger_1.0.apk" download className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Download size={20} /> Download APK
            </a>
          </div>

          {/* iOS App */}
          <div style={{ 
            background: 'var(--surface)', 
            padding: '3rem 2rem', 
            borderRadius: '1.5rem', 
            textAlign: 'center',
            border: '1px solid var(--border)',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
            <Smartphone size={56} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ marginBottom: '0.75rem' }}>iOS App</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Coming soon to the Apple App Store</p>
            <button className="btn btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', opacity: 0.6, cursor: 'not-allowed' }}>
              <Download size={20} /> Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
