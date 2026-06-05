import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import HireableGame from '../components/HireableGame/HireableGame';

const dividerStyle = (color: string): React.CSSProperties => ({
  margin: '0 auto',
  height: '2px',
  maxWidth: '120px',
  borderRadius: 'var(--radius-full)',
  background: `linear-gradient(to right, transparent, ${color}, transparent)`,
});

const Main = () => {
  return (
    <div>
      <Home />
      <div style={dividerStyle('var(--accent)')} />
      <About />
      <div style={dividerStyle('var(--gold)')} />
      <Project />
      <div style={dividerStyle('var(--accent)')} />
      <HireableGame />
      <div style={dividerStyle('var(--gold)')} />
      <Contact />
    </div>
  );
};

export default Main;