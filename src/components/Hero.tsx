import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero reveal" style={{
      textAlign: 'center',
      padding: '12rem 0 10rem',
      background: 'radial-gradient(circle at 50% -20%, rgba(208, 188, 255, 0.12) 0%, transparent 50%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="glow-sphere" style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'rgba(208, 188, 255, 0.08)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        zIndex: 0,
        animation: 'pulse 10s ease-in-out infinite'
      }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '5.5rem', marginBottom: '2rem', fontWeight: 900, lineHeight: 1 }}>
          Manage Your Business <br />
          <span className="gold-text">Finances</span> with Ease
        </h1>
        <p style={{ 
          fontSize: '1.4rem', 
          color: 'var(--text-light)', 
          maxWidth: '800px', 
          margin: '0 auto 4rem',
          lineHeight: '1.6',
          fontWeight: 500
        }}>
          Experience the ultimate financial control. Business Ledger provides a premium 
          interface to track every penny and grow your enterprise with elegant insights.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <a href="#download" className="btn btn-primary" style={{ padding: '1rem 2.5rem', gap: '0.75rem', fontSize: '1.1rem' }}>
            Get Started Free <ChevronRight size={22} />
          </a>
          <a href="#how-it-works" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            How it Works
          </a>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        }
        @media (max-width: 768px) {
          h1 { font-size: 3.5rem !important; }
          p { font-size: 1.1rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
