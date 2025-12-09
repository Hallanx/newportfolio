import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projectsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Security', 'API'],
    liveUrl: 'https://www.dogshieldpro.com',
    githubUrl: 'https://github.com/Hallanx',
    color: 'cyan',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Full Stack', 'Marketing', 'SEO'],
    liveUrl: 'https://www.unitycomunicacao.com',
    githubUrl: 'https://github.com/Hallanx',
    color: 'purple',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Redux', 'TypeScript', 'API'],
    liveUrl: 'https://projeto-6-efood.vercel.app/',
    githubUrl: 'https://github.com/Hallanx',
    color: 'pink',
  },
  {
    id: 4,
    image: '/santai.png',
    tags: ['React', 'Node.js', 'AI', 'SaaS'],
    liveUrl: 'https://www.santaiajuda.com',
    githubUrl: 'https://github.com/Hallanx',
    color: 'purple',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-purple-400 font-medium"
          >
            {t.projects.subtitle}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {t.projects.title}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t.projects.titleHighlight}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={t.projects.items[index]?.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-t ${
                      project.color === 'cyan'
                        ? 'from-cyan-500/80'
                        : project.color === 'purple'
                        ? 'from-purple-500/80'
                        : 'from-pink-500/80'
                    } to-transparent flex items-center justify-center gap-4`}
                  >
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 ${
                      project.color === 'cyan'
                        ? 'bg-cyan-500/20'
                        : project.color === 'purple'
                        ? 'bg-purple-500/20'
                        : 'bg-pink-500/20'
                    } blur-xl`}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {t.projects.items[index]?.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {t.projects.items[index]?.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs rounded-full ${
                          project.color === 'cyan'
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            : project.color === 'purple'
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            : 'bg-pink-500/10 text-pink-400 border border-pink-500/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    project.color === 'cyan'
                      ? 'from-cyan-500 to-cyan-400'
                      : project.color === 'purple'
                      ? 'from-purple-500 to-purple-400'
                      : 'from-pink-500 to-pink-400'
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Hallanx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-white font-medium hover:border-purple-400 transition-colors"
          >
            <Github size={20} />
            {t.projects.viewMore}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
