import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // Demo submission animation
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-[#020C1B] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(100,255,218,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold text-[#64FFDA]"
        >
          Contact
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-[#0A192F]/60 p-6 shadow-2xl backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-[#E6F1FF]">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-white/10 bg-[#020C1B] px-3 py-2 text-[#E6F1FF] outline-none ring-[#64FFDA]/40 transition focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-[#E6F1FF]">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full rounded-lg border border-white/10 bg-[#020C1B] px-3 py-2 text-[#E6F1FF] outline-none ring-[#64FFDA]/40 transition focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-[#E6F1FF]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-[#020C1B] px-3 py-2 text-[#E6F1FF] outline-none ring-[#64FFDA]/40 transition focus:ring-2"
              placeholder="Tell me about your idea..."
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#8892B0] transition-colors hover:text-[#64FFDA]">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8892B0] transition-colors hover:text-[#64FFDA]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:arnav@example.com" className="text-[#8892B0] transition-colors hover:text-[#64FFDA]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <button
              type="submit"
              className="rounded-full bg-[#64FFDA] px-6 py-2 font-semibold text-[#0A192F] shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-transform hover:scale-105"
            >
              {submitted ? 'Sent!' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
