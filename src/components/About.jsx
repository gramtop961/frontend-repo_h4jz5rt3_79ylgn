import { motion } from 'framer-motion';
import { Cpu, Code2, Sparkles } from 'lucide-react';

const aboutVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const About = () => {
  return (
    <section id="about" className="relative bg-[#020C1B] py-24 text-[#E6F1FF]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(100,255,218,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={aboutVariants}
          className="mb-6 text-3xl font-bold text-[#64FFDA]"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={aboutVariants}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A192F]/40 p-6 shadow-xl"
          >
            <p className="leading-relaxed text-[#8892B0]">
              I am an electronics student fascinated by the intersection of hardware and software. I love building interactive systems, exploring embedded devices, and crafting elegant code that solves real-world problems. My work blends creativity with precision, always focusing on clean design and human-centered experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#64FFDA]/10 px-3 py-1 text-xs text-[#64FFDA]">C/C++</span>
              <span className="rounded-full bg-[#64FFDA]/10 px-3 py-1 text-xs text-[#64FFDA]">Python</span>
              <span className="rounded-full bg-[#64FFDA]/10 px-3 py-1 text-xs text-[#64FFDA]">React</span>
              <span className="rounded-full bg-[#64FFDA]/10 px-3 py-1 text-xs text-[#64FFDA]">Embedded</span>
              <span className="rounded-full bg-[#64FFDA]/10 px-3 py-1 text-xs text-[#64FFDA]">IoT</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={aboutVariants}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="group rounded-2xl border border-white/10 bg-[#0A192F]/60 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]">
              <Cpu className="mb-3 h-6 w-6 text-[#64FFDA]" />
              <p className="text-sm text-[#8892B0]">Electronics</p>
              <p className="text-sm font-semibold">Circuits & Embedded</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-[#0A192F]/60 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]">
              <Code2 className="mb-3 h-6 w-6 text-[#64FFDA]" />
              <p className="text-sm text-[#8892B0]">Programming</p>
              <p className="text-sm font-semibold">Web & Systems</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-[#0A192F]/60 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]">
              <Sparkles className="mb-3 h-6 w-6 text-[#64FFDA]" />
              <p className="text-sm text-[#8892B0]">Innovation</p>
              <p className="text-sm font-semibold">Human-Tech Experiences</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
