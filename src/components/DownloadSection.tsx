import React from 'react';
import { Download, Smartphone } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="reveal" style={{ backgroundColor: 'transparent', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: 900 }}>Get <span className="gold-text">Business Ledger</span></h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.4rem', maxWidth: '600px', margin: '0 auto' }}>
            Available on Android today. iOS version is under development.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Android App */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ 
              background: 'rgba(251, 191, 36, 0.1)', 
              width: '100px', 
              height: '100px', 
              borderRadius: '2rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 2.5rem',
              color: 'var(--primary)',
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.1)'
            }}>
              <Smartphone size={48} />
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Android App</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem' }}>Download direct APK for the fastest experience.</p>
            <a href="/business-ledger.apk" download className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', gap: '0.75rem' }}>
              <Download size={24} /> Download APK
            </a>
          </div>

          {/* iOS App */}
          <div className="card" style={{ textAlign: 'center', opacity: 0.8 }}>
            <div style={{ 
              background: 'rgba(148, 163, 184, 0.1)', 
              width: '100px', 
              height: '100px', 
              borderRadius: '2rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 2.5rem',
              color: 'var(--text-dim)'
            }}>
              <Smartphone size={48} />
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-dim)' }}>iOS App</h3>
            <p style={{ color: 'var(--text-dim)', marginBottom: '3rem', fontSize: '1.1rem' }}>Coming soon to the Apple App Store.</p>
            <button className="btn btn-outline" style={{ width: '100%', padding: '1.2rem', gap: '0.75rem', borderColor: 'var(--text-dim)', color: 'var(--text-dim)', cursor: 'not-allowed' }}>
              <Download size={24} /> Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
