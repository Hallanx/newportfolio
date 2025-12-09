import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            &lt;Alan /&gt;
          </motion.a>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2024 Alan Vaz Cardoso. {t.footer.madeWith}</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>
            <span>{t.footer.and}</span>
          </div>

          {/* Social & Back to top */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/Hallanx' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/alan-vaz-cardoso-8a4401324' },
                { icon: Instagram, href: 'https://www.instagram.com/hallanvaz' },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
