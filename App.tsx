import { motion } from "motion/react";
import { Github, Linkedin, Instagram, ExternalLink, Leaf, Brain, Shield, Info, GraduationCap, MapPin } from "lucide-react";

const NAV_ITEMS = ["Home", "About", "Research", "Projects", "Writing", "Contact"];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/dishasinghaa/Portfolio/blob/main/README.md", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dishasingha?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/alooopostoooo?igsh=Z2hldm84aXNmdG1r", label: "Instagram" },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-warm-bg/80 backdrop-blur-sm border-b border-warm-ink/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="serif text-xl font-semibold tracking-tight"
          >
            DS.
          </motion.span>
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-widest hover:text-warm-accent transition-colors font-semibold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section id="home" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-warm-accent" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-warm-accent">Portfolio 2024</p>
              </div>
              <h1 className="serif text-7xl md:text-8xl leading-none mb-6">
                Disha <br /> Singha
              </h1>
              <p className="text-base text-warm-ink/70 max-w-sm leading-relaxed mb-8">
                B.Tech Student in CSE (AIML). <br />
                Researcher investigating AI Safety, Agency, and the alignment of complex optimization systems.
              </p>
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full border border-warm-ink/15 hover:border-warm-accent hover:text-warm-accent transition-all bg-white/40 shadow-sm"
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-warm-ink/5 border border-warm-ink/10 max-w-sm mx-auto md:ml-auto shadow-2xl shadow-warm-accent/5"
            >
              {/* Using the user's provided photo */}
              <img 
                src="/regenerated_image_1777361976700.png" 
                alt="Disha Singha"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="serif text-4xl mb-4">Academic & Research</h2>
              <div className="h-px w-20 bg-warm-accent" />
            </div>
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white/50 p-8 rounded-3xl border border-warm-ink/5 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-warm-accent/10 rounded-2xl">
                      <GraduationCap className="text-warm-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">B.Tech in CSE (AIML)</h3>
                      <p className="text-sm text-warm-ink/60">Narula Institute of Technology, India</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent bg-warm-accent/5 px-3 py-1.5 rounded-full self-start sm:self-center">
                    2025 — 2029 Expected
                  </span>
                </div>

                <div className="pt-6 border-t border-warm-ink/5 space-y-4">
                  <p className="text-lg leading-relaxed text-warm-ink/90 italic">
                    "Bridging the delta between technical optimization and philosophical safety constraint."
                  </p>
                  <p className="text-sm leading-relaxed text-warm-ink/70">
                    My background in AIML is complemented by an active pursuit of AI alignment and governance concepts. 
                    I'm particularly interested in how behavioral shifts in complex agents mirror human socio-technical 
                    rebellion when optimized for specific validation metrics.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4 p-6 rounded-2xl bg-warm-ink/2 border border-warm-ink/5">
                  <div className="flex items-center gap-2 text-warm-accent">
                    <MapPin size={16} />
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">Experience</h4>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">EA Global 2025 Delhi</p>
                    <p className="text-xs text-warm-ink/60 leading-relaxed mb-2">
                      Participated in discussions on AI safety, long-term risks, and global priorities 
                      with researchers in the alignment community.
                    </p>
                    <p className="text-xs text-warm-ink/60 leading-relaxed">
                      Explored real-world approaches to solving high-impact global problems.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 p-6 rounded-2xl bg-warm-ink/2 border border-warm-ink/5">
                  <div className="flex items-center gap-2 text-warm-accent">
                    <Brain size={16} />
                    <h4 className="text-[10px] uppercase tracking-widest font-bold">Research Study</h4>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Independent Study</p>
                    <p className="text-xs text-warm-ink/60 leading-relaxed">
                      Actively studying AI safety, alignment, and governance concepts.
                    </p>
                    <p className="text-xs text-warm-ink/60 leading-relaxed mt-1">
                      Exploring interdisciplinary approaches combining philosophy and machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Pillars */}
        <section id="research" className="mb-24 scroll-mt-20">
          <h2 className="serif text-4xl mb-12 text-center">Core Inquiry</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield, 
                title: "AI Safety", 
                desc: "Exploring technical alignment, robustness, and the containment of high-stakes systems." 
              },
              { 
                icon: Brain, 
                title: "Philosophy", 
                desc: "Investigating questions of agency, identity, and intent in digital architectures." 
              },
              { 
                icon: Info, 
                title: "Incentives", 
                desc: "Analyzing how feedback loops and validation mechanisms shape agent behavior." 
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-warm-ink/5 hover:border-warm-accent shadow-sm transition-all"
              >
                <item.icon className="mb-6 text-warm-accent" size={32} strokeWidth={1} />
                <h3 className="serif text-2xl mb-3">{item.title}</h3>
                <p className="text-sm text-warm-ink/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <div className="flex justify-between items-end mb-12">
            <h2 className="serif text-5xl">Feature Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Flora AI */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/40 p-2 rounded-[3rem] border border-warm-ink/5 group"
            >
              <div className="aspect-[1.5/1] mb-6 rounded-[2.8rem] overflow-hidden bg-emerald-900/5 relative">
                <div className="absolute inset-0 flex items-center justify-center text-emerald-900/10">
                  <Leaf size={100} strokeWidth={0.5} />
                </div>
              </div>
              <div className="px-8 pb-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-700/60 mb-2 block">CV • NLP • Botany</span>
                <h3 className="serif text-3xl mb-4">Flora AI</h3>
                <p className="text-sm text-warm-ink/70 leading-relaxed max-w-sm mb-6">
                  An "AI Doctor" for plants. Uses computer vision to diagnose foliar diseases 
                  and provides personalized care advice via natural language processing.
                </p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] uppercase font-bold rounded-full animate-pulse flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    In Development
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Placeholder Project */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/40 p-2 rounded-[3rem] border border-warm-ink/5 group"
            >
              <div className="aspect-[1.5/1] mb-6 rounded-[2.8rem] overflow-hidden bg-warm-ink/5 relative">
                <div className="absolute inset-0 flex items-center justify-center text-warm-ink/5">
                  <Brain size={100} strokeWidth={0.5} />
                </div>
              </div>
              <div className="px-8 pb-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-warm-ink/30 mb-2 block">Alignment Research</span>
                <h3 className="serif text-3xl mb-4">Agency Loops</h3>
                <p className="text-sm text-warm-ink/70 leading-relaxed max-w-sm mb-6">
                  Studying the structural parallels between social validation behaviors and reward 
                  hacking in autonomous reinforcement learning systems.
                </p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-warm-ink/5 text-warm-ink/40 text-[10px] uppercase font-bold rounded-full">Case Study</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Writing Section */}
        <section id="writing" className="mb-24 scroll-mt-20">
          <div className="flex justify-between items-end mb-12">
            <h2 className="serif text-5xl">Writing & Analysis</h2>
            <a 
              href="https://open.substack.com/pub/klovasdiary" 
              target="_blank" 
              rel="noreferrer"
              className="text-[10px] uppercase tracking-widest font-bold p-3 border border-warm-ink/10 rounded-full hover:bg-warm-accent hover:text-white transition-all"
            >
              <ExternalLink size={14} />
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="p-10 rounded-[3rem] bg-warm-ink text-white shadow-2xl transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                <div>
                  <p className="text-warm-accent text-[10px] uppercase tracking-widest font-bold mb-4">Featured Essay on Substack</p>
                  <h3 className="serif text-4xl leading-tight max-w-2xl">
                    “The Spectacle of Rebellion: Validation in Modern Expression”
                  </h3>
                </div>
                <a 
                  href="https://open.substack.com/pub/klovasdiary/p/the-spectacle-of-rebellion-validation"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-warm-ink flex items-center justify-center transition-all flex-shrink-0"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/70">
                <p className="text-base leading-relaxed mb-4">
                  Analyzed how behaviors in complex systems transform into performances when incentivized 
                  by visibility. This inquiry directly informs my interest in AI alignment—understanding 
                  how reward structures inadvertently shape behavior.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-2" />
                    <p className="text-sm">Exploration of behavioral shifts under validation incentives.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-2" />
                    <p className="text-sm">Analysis of rebellion as a performance in feedback-driven systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-24 border-t border-warm-ink/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="serif text-6xl mb-8 leading-none">Let's build <br /> Safely.</h2>
              <p className="text-lg text-warm-ink/50 mb-10 max-w-sm">
                Open to academic dialogue, research internships, or discussing the mechanics of agency.
              </p>
              <a 
                href="mailto:dishasingha0@gmail.com"
                className="serif text-3xl hover:text-warm-accent transition-colors underline underline-offset-8 decoration-warm-ink/10"
              >
                dishasingha0@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-start md:items-end space-y-12">
              <div className="flex space-x-12">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-warm-ink/30 hover:text-warm-accent transition-all group flex flex-col items-center gap-2"
                  >
                    <link.icon size={28} strokeWidth={1} />
                    <span className="text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">{link.label}</span>
                  </a>
                ))}
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-ink/20 font-bold mb-2">
                  Portfolio 2024 • Disha Singha
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-ink/20 font-bold">
                  Narula Institute of Tech, India
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
