import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const WEB3FORMS_ACCESS_KEY = 'ac28e6c4-e9b6-4625-afbf-e2080c01d307';

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: 'São Paulo, SP - Brasil',
      color: 'cyan',
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+55 (11) 94736-2646',
      color: 'purple',
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'alanvazcardoso@gmail.com',
      color: 'pink',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.nome,
          email: formData.email,
          phone: formData.telefone,
          service: formData.servico,
          message: formData.mensagem,
          subject: '🚀 Novo contato do Portfólio - Alan Vaz',
          from_name: 'Portfólio Alan Vaz',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ nome: '', email: '', telefone: '', servico: '', mensagem: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
            {t.contact.subtitle}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {t.contact.title}{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.contact.info.title}{' '}
                <span className="text-cyan-400">{t.contact.info.titleHighlight}</span> {t.contact.info.titleEnd}
              </h3>
              <p className="text-gray-400">
                {t.contact.info.description}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/0 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <div
                    className={`p-3 rounded-xl ${
                      info.color === 'cyan'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : info.color === 'purple'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-pink-500/20 text-pink-400'
                    }`}
                  >
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20"
            >
              <MessageSquare className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                {t.contact.info.response}
              </h4>
              <p className="text-gray-400 text-sm">
                {t.contact.info.responseDesc}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 mb-6 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                >
                  <CheckCircle size={20} />
                  {t.contact.form.success}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 mb-6 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                >
                  <AlertCircle size={20} />
                  {t.contact.form.error}
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Nome */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    placeholder={t.contact.form.phonePlaceholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                {/* Serviço */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    {t.contact.form.service}
                  </label>
                  <select
                    value={formData.servico}
                    onChange={(e) =>
                      setFormData({ ...formData, servico: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1a1a2e]">
                      {t.contact.form.servicePlaceholder}
                    </option>
                    <option value="fullstack" className="bg-[#1a1a2e]">
                      {t.contact.form.serviceOptions.fullstack}
                    </option>
                    <option value="frontend" className="bg-[#1a1a2e]">
                      {t.contact.form.serviceOptions.frontend}
                    </option>
                    <option value="backend" className="bg-[#1a1a2e]">
                      {t.contact.form.serviceOptions.backend}
                    </option>
                    <option value="consultoria" className="bg-[#1a1a2e]">
                      {t.contact.form.serviceOptions.consulting}
                    </option>
                    <option value="outro" className="bg-[#1a1a2e]">
                      {t.contact.form.serviceOptions.other}
                    </option>
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  required
                  rows={5}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t.contact.form.submit}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
