import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Main = () => {
  return (
    <div>
      <Home />

      {/* Subtle divider */}
      <div className="mx-auto h-0.5 max-w-[120px] rounded-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

      <About />

      <div className="mx-auto h-0.5 max-w-[120px] rounded-full bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <Project />

      <div className="mx-auto h-0.5 max-w-[120px] rounded-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />

      <Contact />
    </div>
  );
};

export default Main;