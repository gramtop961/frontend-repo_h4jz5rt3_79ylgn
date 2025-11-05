import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart IoT Sensor Hub',
    desc: 'Low-power sensor node with MQTT, OTA updates, and web dashboard.',
    tech: ['ESP32', 'Micropython', 'MQTT', 'React'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Vision-guided Robot Arm',
    desc: 'OpenCV-based object tracking with inverse kinematics control.',
    tech: ['Python', 'OpenCV', 'ROS'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Interactive 3D portfolio with animations and micro-interactions.',
    tech: ['React', 'Framer Motion', 'Spline'],
    link: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0A192F] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold text-[#64FFDA]"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#020C1B]/60 p-6 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#64FFDA]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-[#E6F1FF]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#8892B0]">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-[#64FFDA]/10 px-2 py-1 text-xs text-[#64FFDA]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 text-sm text-[#8892B0] transition-colors hover:text-[#64FFDA]"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm text-[#8892B0] transition-colors hover:text-[#64FFDA]"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
