import React from 'react';
import '../styles/howItWorks.css';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="reveal" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, Yet <span className="gold-text">Powerful</span></h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
            Master your business finances in three elegant steps.
          </p>
        </div>

        <div className="how-it-works-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="animation-container">
              <div className="ledger-row">
                <div className="ledger-cell" style={{ width: '40%' }}></div>
                <div className="ledger-cell" style={{ width: '20%' }}></div>
                <div className="ledger-cell" style={{ width: '15%' }}></div>
              </div>
            </div>
            <h3>1. Add Your Entries</h3>
            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
              Quickly record expenses and income as they happen.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="animation-container">
              <div className="tag-container">
                <div className="tag tag-blue">Sales</div>
                <div className="tag tag-green">Rent</div>
                <div className="tag tag-purple">Tax</div>
              </div>
            </div>
            <h3>2. Categorize Automatically</h3>
            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
              Our smart engine tags entries for better organization.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="animation-container">
              <div className="chart-container">
                <div className="bar" style={{ height: '60%', animationDelay: '0.1s' }}></div>
                <div className="bar" style={{ height: '80%', animationDelay: '0.3s' }}></div>
                <div className="bar" style={{ height: '40%', animationDelay: '0.5s' }}></div>
                <div className="bar" style={{ height: '90%', animationDelay: '0.7s' }}></div>
              </div>
            </div>
            <h3>3. Gain Insights</h3>
            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>
              View real-time reports and grow your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
