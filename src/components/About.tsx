import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Sparkles, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  {
    category: 'frontend',
    icon: Code2,
    color: 'cyan',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'backend',
    icon: Server,
    color: 'purple',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'others',
    icon: Sparkles,
    color: 'pink',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'MongoDB', level: 75 },
      { name: 'IA/ML', level: 60 },
    ],
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: '3+', label: t.about.stats.experience },
    { icon: Code2, value: '40+', label: t.about.stats.projects },
    { icon: GraduationCap, value: '20+', label: t.about.stats.certifications },
    { icon: Award, value: '100%', label: t.about.stats.satisfaction },
  ];

  const getCategoryName = (category: string) => {
    if (category === 'frontend') return t.about.skills.frontend;
    if (category === 'backend') return t.about.skills.backend;
    return t.about.skills.others;
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            className="text-cyan-400 font-medium"
          >
            {t.about.subtitle}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {t.about.title}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.about.titleHighlight}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                {t.about.p1}{' '}
                <span className="text-cyan-400 font-semibold">
                  {t.about.p1Highlight}
                </span>{' '}
                {t.about.p1Rest}
              </p>
              <p>{t.about.p2}</p>
              <p>
                {t.about.p3}{' '}
                <span className="text-purple-400 font-semibold">
                  {t.about.p3Highlight}
                </span>{' '}
                {t.about.p3Rest}
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
            >
              {stats.map(({ icon: Icon, value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <Icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Terminal/Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f1a] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-400 text-sm font-mono">alan@portfolio ~ </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-green-400">$</span>{' '}
                  <span className="text-gray-300">{t.about.terminal.command}</span>
                </motion.div>

                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-4 text-xs md:text-sm overflow-x-auto"
                >
                  <code>
                    <span className="text-gray-500">{'{'}</span>
                    {'\n'}
                    <span className="text-purple-400">  "{t.about.terminal.name}"</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-green-400">"Alan Vaz Cardoso"</span>
                    <span className="text-gray-500">,</span>
                    {'\n'}
                    <span className="text-purple-400">  "{t.about.terminal.role}"</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-green-400">"Full Stack Developer"</span>
                    <span className="text-gray-500">,</span>
                    {'\n'}
                    <span className="text-purple-400">  "{t.about.terminal.location}"</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-green-400">"{t.about.terminal.locationValue}"</span>
                    <span className="text-gray-500">,</span>
                    {'\n'}
                    <span className="text-purple-400">  "{t.about.terminal.available}"</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-cyan-400">true</span>
                    <span className="text-gray-500">,</span>
                    {'\n'}
                    <span className="text-purple-400">  "{t.about.terminal.skills}"</span>
                    <span className="text-gray-500">: [</span>
                    {'\n'}
                    <span className="text-green-400">    "React", "Node.js", "TypeScript",</span>
                    {'\n'}
                    <span className="text-green-400">    "Python", "Java", "SQL"</span>
                    {'\n'}
                    <span className="text-gray-500">  ],</span>
                    {'\n'}
                    <span className="text-purple-400">  "{t.about.terminal.passions}"</span>
                    <span className="text-gray-500">: [</span>
                    {'\n'}
                    <span className="text-green-400">    "{t.about.terminal.passionValues[0]}",</span>
                    {'\n'}
                    <span className="text-green-400">    "{t.about.terminal.passionValues[1]}",</span>
                    {'\n'}
                    <span className="text-green-400">    "{t.about.terminal.passionValues[2]}"</span>
                    {'\n'}
                    <span className="text-gray-500">  ]</span>
                    {'\n'}
                    <span className="text-gray-500">{'}'}</span>
                  </code>
                </motion.pre>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                  className="mt-4 flex items-center"
                >
                  <span className="text-green-400">$</span>{' '}
                  <span className="text-gray-300 ml-2">_</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-cyan-400 ml-1"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            {t.about.skills.title}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.about.skills.titleHighlight}
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + groupIndex * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      skillGroup.color === 'cyan'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : skillGroup.color === 'purple'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}
                  >
                    <skillGroup.icon size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {getCategoryName(skillGroup.category)}
                  </h4>
                </div>

                <div className="space-y-4">
                  {skillGroup.items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.8 + groupIndex * 0.1 + index * 0.05,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${
                            skillGroup.color === 'cyan'
                              ? 'bg-gradient-to-r from-cyan-500 to-cyan-400'
                              : skillGroup.color === 'purple'
                              ? 'bg-gradient-to-r from-purple-500 to-purple-400'
                              : 'bg-gradient-to-r from-pink-500 to-pink-400'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
