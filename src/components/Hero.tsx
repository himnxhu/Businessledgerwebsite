import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero reveal" style={{
      textAlign: 'center',
      padding: '10rem 0',
      background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'rgba(251, 191, 36, 0.05)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Manage Your Business <span className="gold-text">Finances</span> with Ease
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-light)', 
          maxWidth: '750px', 
          margin: '0 auto 3rem',
          lineHeight: '1.7'
        }}>
          Experience the ultimate financial control. Business Ledger provides a premium 
          interface to track every penny and grow your enterprise with gold-standard insights.
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1.25rem',
          flexWrap: 'wrap'
        }}>
          <a href="#download" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontSize: '1.1rem' }}>
            Get Started Free <ChevronRight size={22} />
          </a>
          <a href="#how-it-works" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
            How it Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
