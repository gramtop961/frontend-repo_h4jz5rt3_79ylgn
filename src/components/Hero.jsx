import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Simple parallax tilt based on cursor
  useEffect(() => {
    setMounted(true);
    const el = containerRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;
      el.style.setProperty('--tiltX', `${y * 6}deg`);
      el.style.setProperty('--tiltY', `${-x * 6}deg`);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0A192F] to-[#020C1B]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#64FFDA]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-700/10 blur-3xl" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        {mounted && (
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Readability gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent" />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center [transform:perspective(1000px)_rotateX(var(--tiltX,0))_rotateY(var(--tiltY,0))]"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#64FFDA]/30 bg-[#0A192F]/50 px-4 py-2 text-xs tracking-wider text-[#64FFDA] backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#64FFDA]" />
          Hello, I am
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-heading bg-gradient-to-r from-[#E6F1FF] via-[#64FFDA] to-[#E6F1FF] bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl"
        >
          Arnav Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-4 max-w-2xl text-base text-[#8892B0] sm:text-lg"
        >
          Electronics Student | Programmer | Innovator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-[#64FFDA] px-6 py-3 text-[#0A192F] shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 font-semibold">Explore Projects</span>
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-80 transition-transform duration-500 group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#64FFDA] px-6 py-3 text-[#64FFDA] transition-colors hover:bg-[#64FFDA]/10"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
