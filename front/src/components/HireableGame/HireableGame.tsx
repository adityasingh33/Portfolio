import { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const HireableGame = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isMoved, setIsMoved] = useState(false);
  const [answeredYes, setAnsweredYes] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoInteraction = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Button size bounds
    const buttonWidth = 100;
    const buttonHeight = 45;

    // Available boundaries with padding
    const maxX = rect.width - buttonWidth - 16;
    const maxY = rect.height - buttonHeight - 16;

    // Generate random coordinates within container boundary
    const randomX = Math.random() * (maxX - 16) + 16;
    const randomY = Math.random() * (maxY - 16) + 16;

    setNoPosition({ x: randomX, y: randomY });
    setIsMoved(true);
  };

  const handleYesClick = () => {
    setAnsweredYes(true);
  };

  return (
    <section
      style={{
        padding: '60px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '650px',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--border-subtle)',
          padding: '40px 30px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-lg)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h3
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '1.8rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '10px',
          }}
        >
          {answeredYes ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', verticalAlign: 'middle' }}>
              Awesome choice! <Sparkles size={24} style={{ color: 'var(--gold, #f59e0b)' }} />
            </span>
          ) : (
            'Do I look hireable?'
          )}
        </h3>
        
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            marginBottom: '24px',
            lineHeight: 1.6,
          }}
        >
          {answeredYes 
            ? "I would love to collaborate on your next project! Let's get in touch below." 
            : "Be honest. Feel free to try clicking either choice!"}
        </p>

        {answeredYes ? (
          <div className="animate-fade-in" style={{ padding: '20px 0' }}>
            <a 
              href="#contact" 
              className="accent-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
              }}
            >
              Let's Talk!
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>
        ) : (
          /* Button interactive container area */
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              height: '140px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-primary)',
              border: '1px dashed var(--border-subtle)',
              overflow: 'hidden',
            }}
          >
            {/* Yes Button (Stationary) */}
            <button
              onClick={handleYesClick}
              style={{
                position: 'absolute',
                left: '35%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: '45px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'linear-gradient(135deg, var(--accent), #10b981)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              }}
            >
              Yes!
            </button>

            {/* No Button (Elusive) */}
            <button
              onClick={handleNoInteraction}
              onMouseEnter={handleNoInteraction}
              style={{
                position: 'absolute',
                left: isMoved ? `${noPosition.x}px` : '65%',
                top: isMoved ? `${noPosition.y}px` : '50%',
                transform: isMoved ? 'none' : 'translate(-50%, -50%)',
                width: '100px',
                height: '45px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)',
                color: 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              No
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HireableGame;
