import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Main = () => {
  return (
    <div>
      <Home />

      {/* Subtle divider */}
      <div
        style={{
          maxWidth: 120,
          height: 2,
          margin: '0 auto',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          borderRadius: 'var(--radius-full)',
        }}
      />

      <About />

      <div
        style={{
          maxWidth: 120,
          height: 2,
          margin: '0 auto',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          borderRadius: 'var(--radius-full)',
        }}
      />

      <Project />

      <div
        style={{
          maxWidth: 120,
          height: 2,
          margin: '0 auto',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          borderRadius: 'var(--radius-full)',
        }}
      />

      <Contact />
    </div>
  );
};

export default Main;