import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Moon, Sun, Sparkles } from 'lucide-react';

function App() {
  const [dark, setDark] = useState(true);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  // Dark mode toggle by toggling class on html element
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  // Scroll progress indicator
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Custom cursor follow
  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const navItems = useMemo(() => ([
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]), []);

  return (
    <div className="relative min-h-screen font-sans text-[#E6F1FF]">
      {/* Top progress bar */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-1 bg-[#64FFDA] shadow-[0_0_18px_rgba(100,255,218,0.7)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation */}
      <header className="fixed left-0 top-3 z-50 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0A192F]/60 px-4 py-2 backdrop-blur">
          <a href="#home" className="flex items-center gap-2 text-sm text-[#64FFDA]">
            <Sparkles className="h-4 w-4" /> Arnav Singh
          </a>
          <nav className="hidden gap-4 md:flex">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-[#8892B0] transition-colors hover:text-[#64FFDA]">
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="rounded-full border border-white/10 bg-[#020C1B]/80 p-2 text-[#64FFDA] transition-colors hover:bg-[#0A192F]"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#020C1B] py-6 text-center text-xs text-[#8892B0]">
        © {new Date().getFullYear()} Arnav Singh. Built with love and electrons.
      </footer>

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed z-50 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#64FFDA]/30 shadow-[0_0_40px_rgba(100,255,218,0.7)] backdrop-blur-md md:block"
        style={{ left: cursor.x, top: cursor.y, width: 24, height: 24 }}
      />
    </div>
  );
}

export default App;
